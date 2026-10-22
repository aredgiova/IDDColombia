import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import ts from "typescript";

const runtime = createRequire(process.env.PLAYWRIGHT_PACKAGE || import.meta.url);
const { chromium } = runtime("playwright");
const origin = process.env.ABOUT_TEST_ORIGIN || "http://127.0.0.1:3002";
const output = path.resolve("docs/verificacion/quienes-somos");
await mkdir(output, { recursive: true });
async function loadData(file) {
  const source = await readFile(file, "utf8");
  const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } }).outputText;
  return import(`data:text/javascript;base64,${Buffer.from(compiled).toString("base64")}`);
}
const { calendar2026 } = await loadData("src/data/institutional-resources.ts");
const { faithStatements } = await loadData("src/data/about-narrative.ts");
const routes = ["/quienes-somos", "/quienes-somos/historia", "/quienes-somos/mision-y-vision", "/quienes-somos/declaracion-de-fe", "/quienes-somos/organizacion", "/quienes-somos/ruta-estrategica", "/quienes-somos/iglesia-internacional", "/calendario"];
const legacy = ["/historia", "/misión-y-visión", "/declaración-de-fe", "/organigrama", "/copia-de-organigrama", "/iglesia-internacional", "/copia-de-historia"];
const http = [];
for (const [i, url] of legacy.entries()) {
  const response = await fetch(`${origin}${encodeURI(url)}?utm_source=anterior`, { redirect: "manual" });
  assert.equal(response.status, 308, url);
  const location = new URL(response.headers.get("location"), origin);
  assert.equal(location.pathname, routes[i + 1]);
  assert.equal(location.search, "?utm_source=anterior");
  http.push({ path: url, status: response.status, destination: location.pathname });
}
const sitemap = await (await fetch(`${origin}/sitemap.xml`)).text();
for (const route of routes) assert.ok(sitemap.includes(route), `sitemap ${route}`);
assert.equal((await fetch(`${origin}/quienes-somos/no-existe`)).status, 404);

const browser = await chromium.launch({ headless: true, ...(process.env.PLAYWRIGHT_CHANNEL ? { channel: process.env.PLAYWRIGHT_CHANNEL } : {}) });
const page = await browser.newPage();
const errors = [];
page.on("pageerror", (error) => errors.push(error.message));
const responsive = [];
const titles = new Set();
for (const width of [1440, 390, 320, 768, 1024]) {
  await page.setViewportSize({ width, height: 960 });
  for (const route of routes) {
    const response = await page.goto(`${origin}${route}`, { waitUntil: "networkidle" });
    assert.equal(response.status(), 200, route);
    await page.evaluate(() => document.fonts.ready);
    assert.equal(await page.locator("h1").count(), 1, `one h1 ${route}`);
    assert.equal(await page.locator('main#contenido').count(), 1);
    const canonical = await page.locator('link[rel="canonical"]').getAttribute("href");
    assert.equal(new URL(canonical).pathname, route);
    const description = await page.locator('meta[name="description"]').getAttribute("content");
    assert.ok(description.length > 50);
    if (width === 1440) {
      const title = await page.title(); assert.ok(!titles.has(title)); titles.add(title);
      assert.equal(await page.locator('script[type="application/ld+json"]').count(), 1);
    }
    const dimensions = await page.evaluate(() => ({ viewport: innerWidth, document: document.documentElement.scrollWidth, brokenImages: [...document.images].filter((image) => image.complete && image.naturalWidth === 0).map((image) => image.src) }));
    assert.ok(dimensions.document <= width, `${route} overflow ${width}: ${dimensions.document}`);
    assert.deepEqual(dimensions.brokenImages, []);
    if (route !== "/quienes-somos") {
      assert.ok(await page.locator(".institutional-layout > :first-child").evaluate((el) => el.tagName === "ARTICLE"), "Reading content precedes sibling links in DOM");
      if (width < 768) {
        assert.ok(await page.locator(".institutional-layout").evaluate((el) => el.querySelector("aside").getBoundingClientRect().top >= el.querySelector("article").getBoundingClientRect().bottom), "Mobile visual order follows focus order");
      }
    }
    responsive.push({ route, width, ...dimensions });
    if (width === 1440 || width === 390) {
      const label = route.split("/").at(-1);
      await page.screenshot({ path: path.join(output, `${label}-${width}.png`), fullPage: route === "/quienes-somos" || route.endsWith("mision-y-vision") });
    }
  }
}
await page.setViewportSize({ width: 1440, height: 960 });
await page.goto(`${origin}/quienes-somos`);
const desktopToggle = page.locator('.desktop-nav button[aria-controls]');
await desktopToggle.click();
assert.equal(await desktopToggle.getAttribute("aria-expanded"), "true");
assert.equal(await page.locator(".about-nav-panel a").count(), 7);
await page.screenshot({ path: path.join(output, "menu-desktop.png") });
await page.keyboard.press("Escape");
assert.equal(await desktopToggle.getAttribute("aria-expanded"), "false");
assert.ok(await desktopToggle.evaluate((el) => el === document.activeElement));
await desktopToggle.press("Enter");
await page.locator(".about-nav-panel a").filter({ hasText: "Misión y visión" }).click();
await page.waitForURL("**/quienes-somos/mision-y-vision");
assert.equal(await desktopToggle.getAttribute("aria-expanded"), "false");

await page.setViewportSize({ width: 390, height: 844 });
await page.getByRole("button", { name: "Abrir menú", exact: true }).click();
const mobileToggle = page.locator(".mobile-about-control button");
await mobileToggle.click();
assert.equal(await mobileToggle.getAttribute("aria-expanded"), "true");
await page.screenshot({ path: path.join(output, "menu-mobile.png"), fullPage: true });
await mobileToggle.press("Escape");
assert.equal(await mobileToggle.getAttribute("aria-expanded"), "false");
await mobileToggle.click();
await page.locator("#mobile-about-navigation a").filter({ hasText: "Calendario 2026" }).click();
await page.waitForURL("**/calendario");
assert.equal(await page.locator(".menu-toggle").getAttribute("aria-expanded"), "false");
for (const [i, month] of calendar2026.entries()) {
  await page.getByLabel("Consultar un mes").selectOption(String(i));
  assert.equal(await page.locator(".calendar-event-list > li").count(), month.events.length);
  assert.equal(await page.locator("#calendar-month-title").textContent(), `${month.name} de 2026`);
  await page.locator(".institutional-calendar .institutional-document summary").click();
  const original = page.locator(".institutional-calendar .institutional-document img");
  await original.scrollIntoViewIfNeeded();
  await original.evaluate((img) => img.decode());
  assert.ok(await original.evaluate((img) => img.naturalWidth > 0));
  const imageResponse = await fetch(`${origin}${month.image.src}`);
  assert.equal(imageResponse.status, 200);
}
assert.ok(await page.getByRole("button", { name: "Mes siguiente" }).isDisabled());
await page.getByRole("button", { name: "Mes anterior" }).click();
assert.equal(await page.locator("#calendar-month-title").textContent(), "Noviembre de 2026");
await page.goto(`${origin}/quienes-somos/declaracion-de-fe`);
assert.equal(await page.locator(".institutional-faith-list > li").count(), 14);
for (const [i, statement] of faithStatements.entries()) assert.equal(await page.locator(`#creencia-${i + 1} p`).textContent(), statement.text);
await page.getByRole("link", { name: "La resurrección y la eternidad", exact: true }).click();
assert.ok(page.url().endsWith("#creencia-14"));
assert.deepEqual(errors, []);
await browser.close();
await writeFile(path.join(output, "responsive.json"), JSON.stringify(responsive, null, 2));
await writeFile(path.join(output, "verification.json"), JSON.stringify({ routes: routes.length, redirects: http, widths: [1440, 390, 320, 768, 1024], calendarMonths: 12, calendarMonthlyEntries: calendar2026.reduce((n, m) => n + m.events.length, 0), faithStatements: 14, menuKeyboardAndNavigation: "passed", unknownRoute: 404, errors }, null, 2));
console.log(JSON.stringify({ routes: routes.length, redirects: 7, responsiveChecks: responsive.length, calendarMonths: 12, faithStatements: 14, errors }, null, 2));
