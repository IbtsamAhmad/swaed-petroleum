import { chromium } from "playwright";
import fs from "node:fs";

const base = "http://localhost:3300";
const outDir = "/tmp/shots";
fs.mkdirSync(outDir, { recursive: true });

const pages = ["/", "/who-we-are", "/verticals", "/verticals/pipelines-piping", "/media", "/media/arps-conference-paper", "/careers", "/contact-us"];
const viewports = [
  { name: "mobile", width: 390, height: 844 },
  { name: "tablet", width: 820, height: 1180 },
  { name: "desktop", width: 1440, height: 900 },
];

const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
for (const vp of viewports) {
  const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
  const page = await context.newPage();
  for (const path of pages) {
    const url = base + path;
    await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.waitForTimeout(300);
    const height = await page.evaluate(() => document.body.scrollHeight);
    const step = Math.max(vp.height, 400);
    for (let y = 0; y < height; y += step) {
      await page.evaluate((yy) => window.scrollTo(0, yy), y);
      await page.waitForTimeout(120);
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(300);
    const slug = path === "/" ? "home" : path.replace(/\//g, "_").replace(/^_/, "");
    const filePath = `${outDir}/${vp.name}__${slug}.png`;
    await page.screenshot({ path: filePath, fullPage: true });
    console.log("saved", filePath);
  }
  await context.close();
}
await browser.close();
