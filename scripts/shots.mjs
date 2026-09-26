// Full-page screenshots of every top-level route for visual review.
//   BASE=http://localhost:3300 OUT=/tmp/shots node scripts/shots.mjs [/path ...]
import { chromium } from "playwright";
import fs from "node:fs";

const base = process.env.BASE ?? "http://localhost:3300";
const outDir = process.env.OUT ?? "/tmp/shots";
fs.mkdirSync(outDir, { recursive: true });

const pages = process.argv.slice(2).length
  ? process.argv.slice(2)
  : [
      "/",
      "/about-us",
      "/our-services",
      "/our-services/cross-country-pipeline",
      "/our-services/live-pipeline-repair",
      "/media",
      "/media/projects/dpoc-export-pipeline-repair",
      "/social-impact",
      "/careers",
      "/research-development",
      "/contact-us",
    ];
const viewports = (process.env.VP ?? "mobile,desktop").split(",").map(
  (n) => ({ mobile: { name: "mobile", width: 390, height: 844 }, tablet: { name: "tablet", width: 820, height: 1180 }, desktop: { name: "desktop", width: 1440, height: 900 } })[n]
);

// Uses the locally installed Chrome so no Playwright browser download is needed.
const browser = await chromium.launch({ channel: "chrome" });
for (const vp of viewports) {
  const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height }, reducedMotion: "reduce" });
  const page = await context.newPage();
  for (const path of pages) {
    await page.goto(base + path, { waitUntil: "networkidle", timeout: 30000 });
    const height = await page.evaluate(() => document.body.scrollHeight);
    for (let y = 0; y < height; y += vp.height) {
      await page.evaluate((yy) => window.scrollTo({ top: yy, behavior: "instant" }), y);
      await page.waitForTimeout(150);
    }
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(300);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    const slug = path === "/" ? "home" : path.replace(/\//g, "_").replace(/^_/, "");
    const file = `${outDir}/${vp.name}__${slug}.png`;
    await page.screenshot({ path: file, fullPage: true });
    console.log(file, overflow > 0 ? `HORIZONTAL OVERFLOW ${overflow}px` : "");
  }
  await context.close();
}
await browser.close();
