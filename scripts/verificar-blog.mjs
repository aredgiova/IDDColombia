import assert from "node:assert/strict";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import ts from "typescript";

// Checks the public HTML contract and the old URLs, not React internals.
const source = await readFile(new URL("../src/data/blog.ts", import.meta.url), "utf8");
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } }).outputText;
const { blogPosts } = await import(`data:text/javascript;base64,${Buffer.from(compiled).toString("base64")}`);
const origin = process.env.BLOG_TEST_ORIGIN || "http://127.0.0.1:3000";
const canonicalOrigin = process.env.SITE_URL || "https://www.iglesiadedioscolombia.com";
const outputDir = new URL("../docs/verificacion/blog/", import.meta.url);
await mkdir(outputDir, { recursive: true });

function attributes(tag) {
  return Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map((match) => [match[1], match[2]]));
}
function meta(html, key) {
  const tag = [...html.matchAll(/<meta\b[^>]*>/g)].map(([value]) => attributes(value)).find((value) => value.name === key || value.property === key);
  return tag?.content;
}
const results = [];
const titles = new Set();
const descriptions = new Set();
for (const path of ["/blog", ...blogPosts.map((post) => `/blog/${post.slug}`)]) {
  const response = await fetch(`${origin}${path}`);
  assert.equal(response.status, 200, `${path} HTTP`);
  const html = await response.text();
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  const description = meta(html, "description");
  const canonical = [...html.matchAll(/<link\b[^>]*>/g)].map(([tag]) => attributes(tag)).find((tag) => tag.rel === "canonical")?.href;
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `${path} H1`);
  assert.equal(canonical, `${canonicalOrigin}${path}`, `${path} canonical`);
  assert.ok(title && !titles.has(title), `${path} unique title`);
  assert.ok(description && !descriptions.has(description), `${path} unique description`);
  assert.ok(meta(html, "og:image")?.includes("/images/blog/"), `${path} original social image`);
  assert.ok(meta(html, "twitter:image")?.includes("/images/blog/"), `${path} twitter image`);
  titles.add(title); descriptions.add(description);
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map(([, value]) => JSON.parse(value)).flatMap((value) => value["@graph"] ?? [value]);
  assert.ok(schemas.some((schema) => schema["@type"] === "BreadcrumbList"), `${path} breadcrumb schema`);
  const post = blogPosts.find((item) => path.endsWith(`/${item.slug}`));
  if (post) {
    assert.equal(title, post.seoTitle);
    assert.equal(description, post.description);
    assert.equal(meta(html, "og:type"), "article");
    const article = schemas.find((schema) => schema["@type"] === "BlogPosting");
    assert.ok(article);
    assert.equal(article.datePublished, post.publishedAt);
    assert.equal(article.dateModified, post.modifiedAt);
    assert.equal(article.author.name, post.author);
    assert.equal(article.author["@type"], "Person");
    assert.equal(article.mainEntityOfPage["@id"], canonical);
    for (const note of post.editorialNotes) assert.ok(!html.includes(note.text), "Draft note not published");
    const legacy = await fetch(`${origin}${encodeURI(post.legacyPath)}?utm_source=migracion`, { redirect: "manual" });
    assert.equal(legacy.status, 308, "Permanent redirect");
    assert.equal(new URL(legacy.headers.get("location"), origin).pathname, path);
    assert.equal(new URL(legacy.headers.get("location"), origin).search, "?utm_source=migracion");
    const image = await fetch(`${origin}${post.image.src}`);
    assert.equal(image.status, 200, "Local original image");
  }
  results.push({ path, status: response.status, title, description, canonical, robots: meta(html, "robots"), structuredData: schemas.map((schema) => schema["@type"]), socialImage: meta(html, "og:image"), ...(post ? { legacyRedirect: 308 } : {}) });
}
const sitemap = await (await fetch(`${origin}/sitemap.xml`)).text();
for (const post of blogPosts) {
  assert.ok(sitemap.includes(`${canonicalOrigin}/blog/${post.slug}`), "Post in sitemap");
  assert.ok(sitemap.includes(post.modifiedAt ?? post.publishedAt), "Real date in sitemap");
}
const missing = await fetch(`${origin}/blog/articulo-que-no-existe`);
assert.equal(missing.status, 404);
const health = await fetch(`${origin}/api/health`);
assert.equal(health.status, 200);
const builtIndex = await readFile(new URL("../.next/server/app/blog.html", import.meta.url), "utf8");
assert.ok(builtIndex.includes("EXTENSION /blog"), "Design contract in production build");
await writeFile(new URL("seo-http.json", outputDir), JSON.stringify({ routes: results, sitemap: "passed", unknownSlug: 404, health: 200, contractInBuild: true }, null, 2));
console.log(JSON.stringify({ pages: results.length, redirects: blogPosts.length, metadata: "passed", structuredData: "passed", sitemap: "passed", unknownSlug: 404, health: 200 }, null, 2));
