import { mkdir, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';

// Recolección de documentos públicos; no descarga medios ni envía formularios.
const origin = 'https://www.iglesiadedioscolombia.com';
const out = path.resolve('docs/investigacion');
const raw = path.join(out, 'fuentes-html');
await mkdir(raw, { recursive: true });
const entities = {amp:'&',quot:'"',apos:"'",lt:'<',gt:'>',nbsp:' ',aacute:'á',eacute:'é',iacute:'í',oacute:'ó',uacute:'ú',Aacute:'Á',Eacute:'É',Iacute:'Í',Oacute:'Ó',Uacute:'Ú',ntilde:'ñ',Ntilde:'Ñ',uuml:'ü',Uuml:'Ü',iexcl:'¡',iquest:'¿',copy:'©',bull:'•'};
const decode = (s = '') => s.replace(/&#(x[\da-f]+|\d+);/gi, (_, n) => String.fromCodePoint(n[0].toLowerCase() === 'x' ? parseInt(n.slice(1), 16) : Number(n))).replace(/&([A-Za-z]+);/g, (whole, name) => entities[name] ?? whole);
const clean = s => decode(s.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
const attr = (s, name) => decode(s.match(new RegExp('(?:^|\\s)' + name + '\\s*=\\s*(?:"([^"]*)"|\'([^\']*)\')', 'i'))?.slice(1).find(x => x !== undefined) || '');
const strip = s => s.replace(/<(script|style|noscript|template)\b[^>]*>[\s\S]*?<\/\1>/gi, '').replace(/<!--[\s\S]*?-->/g, '');
const resolve = (url, base) => { try { return new URL(url, base).href; } catch { return null; } };
const unique = (rows, key) => [...new Map(rows.map(r => [key(r), r])).values()];
const requests = [];
async function get(url) {
  const started = Date.now();
  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(30000), headers: { 'User-Agent': 'IDD-content-inventory/1.0 (public content research)' } });
    const html = await response.text();
    const meta = { url, finalUrl: response.url, status: response.status, contentType: response.headers.get('content-type'), fetchedAt: new Date().toISOString(), elapsedMs: Date.now() - started, bytes: Buffer.byteLength(html) };
    requests.push(meta);
    return { ...meta, html };
  } catch (error) {
    const meta = { url, status: null, error: error.cause?.code || error.message, fetchedAt: new Date().toISOString() };
    requests.push(meta);
    return { ...meta, html: '' };
  }
}
const robots = await get(origin + '/robots.txt');
await writeFile(path.join(raw, 'robots.txt'), robots.html);
const sitemapQueue = [origin + '/sitemap.xml'];
const seenSitemaps = new Set();
const pageQueue = [origin + '/'];
const sitemapUrls = [];
while (sitemapQueue.length && seenSitemaps.size < 12) {
  const url = sitemapQueue.shift();
  if (seenSitemaps.has(url)) continue;
  seenSitemaps.add(url);
  const result = await get(url);
  await writeFile(path.join(raw, `sitemap-${seenSitemaps.size}.xml`), result.html);
  const locs = [...result.html.matchAll(/<loc>([\s\S]*?)<\/loc>/g)].map(m => decode(m[1].trim()));
  if (/<sitemapindex\b/.test(result.html)) sitemapQueue.push(...locs);
  else { sitemapUrls.push(...locs); pageQueue.push(...locs); }
}
const seen = new Set();
const pages = [];
function pageUrl(url) {
  try {
    const u = new URL(url);
    if (u.origin !== origin || u.pathname.startsWith('/_') || u.pathname.startsWith('/profile/') || /\.(pdf|pptx?|docx?|xlsx?|zip|jpe?g|png|webp|svg|ico|xml|txt)$/i.test(u.pathname)) return null;
    if (u.search) return null;
    u.hash = '';
    return u.href;
  } catch { return null; }
}
async function inspect(url) {
  const result = await get(url);
  const { html, ...meta } = result;
  const filename = createHash('sha256').update(url).digest('hex').slice(0, 12) + '.html';
  await writeFile(path.join(raw, filename), html);
  const safe = strip(html);
  const head = html.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i)?.[1] || '';
  const metas = [...head.matchAll(/<meta\b([^>]+)>/gi)].map(m => ({ name: attr(m[1], 'name') || attr(m[1], 'property'), content: attr(m[1], 'content') })).filter(m => m.name);
  const canonicalTag = [...head.matchAll(/<link\b([^>]+)>/gi)].find(m => attr(m[1], 'rel') === 'canonical');
  const links = unique([...safe.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)].map(m => ({ text: clean(m[2]) || attr(m[1], 'aria-label'), href: resolve(attr(m[1], 'href'), url) })).filter(l => l.href), l => l.href + '|' + l.text);
  const images = unique([...safe.matchAll(/<img\b([^>]+)>/gi)].map(m => ({ src: resolve(attr(m[1], 'src'), url), alt: attr(m[1], 'alt'), width: attr(m[1], 'width'), height: attr(m[1], 'height') })).filter(i => i.src), i => i.src);
  const headings = [...safe.matchAll(/<(h[1-6])\b[^>]*>([\s\S]*?)<\/\1>/gi)].map(m => ({ level: Number(m[1][1]), text: clean(m[2]) }));
  const body = safe.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i)?.[1] || safe;
  const textBlocks = [...body.matchAll(/<(p|h[1-6])\b[^>]*>([\s\S]*?)<\/\1>/gi)].map(m => clean(m[2])).filter(Boolean);
  const forms = [...safe.matchAll(/<form\b([^>]*)>/gi)].map(m => ({ action: attr(m[1], 'action'), method: attr(m[1], 'method'), id: attr(m[1], 'id') }));
  const inputs = [...safe.matchAll(/<(input|textarea|select)\b([^>]*)>/gi)].map(m => ({ element: m[1], type: attr(m[2], 'type'), name: attr(m[2], 'name'), placeholder: attr(m[2], 'placeholder'), ariaLabel: attr(m[2], 'aria-label') }));
  pages.push({ ...meta, sourceFile: 'fuentes-html/' + filename, title: clean(head.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || ''), lang: attr(html.match(/<html\b([^>]*)>/i)?.[1] || '', 'lang'), canonical: canonicalTag ? attr(canonicalTag[1], 'href') : null, metas, headings, textBlocks, text: clean(body), links, images, forms, inputs });
  for (const link of links) { const next = pageUrl(link.href); if (next && !seen.has(next)) pageQueue.push(next); }
  console.log(`${result.status ?? 'ERROR'} ${url}`);
}
while (pageQueue.length && seen.size < 100) {
  const batch = [];
  while (pageQueue.length && batch.length < 3 && seen.size < 100) {
    const next = pageUrl(pageQueue.shift());
    if (!next || seen.has(next)) continue;
    seen.add(next); batch.push(next);
  }
  await Promise.all(batch.map(inspect));
}
pages.sort((a, b) => a.url.localeCompare(b.url));
await writeFile(path.join(out, 'captura-publica.json'), JSON.stringify({ origin, collectedAt: new Date().toISOString(), clientDate: '2026-10-16', timezone: 'America/Bogota', methodology: 'HTTP GET público, sitemap y enlaces HTML del mismo origen, sin query strings, perfiles personales ni descarga de archivos/medios. Extracción HTML estática: puede omitir contenido que requiere JavaScript; tiempos no representan Core Web Vitals.', limit: 100, limitReached: seen.size >= 100 && pageQueue.length > 0, sitemapTotal: sitemapUrls.length, excludedProfileCount: sitemapUrls.filter(u => new URL(u).pathname.startsWith('/profile/')).length, sitemapUrls: sitemapUrls.filter(pageUrl), requests, pages }, null, 2));
console.log(JSON.stringify({ pages: pages.length, sitemapUrls: sitemapUrls.length, requests: requests.length, failed: requests.filter(r => r.status !== 200).map(r => ({url:r.url,status:r.status,error:r.error})) }, null, 2));
