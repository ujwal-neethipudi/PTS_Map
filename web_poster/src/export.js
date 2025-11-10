import puppeteer from "puppeteer";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const browser = await puppeteer.launch({ headless: "new" });
const page = await browser.newPage();

const htmlPath = path.join(__dirname, "index.html");
await page.goto(`file://${htmlPath}`, { waitUntil: "networkidle0" });

await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 2 });

const outDir = path.resolve(__dirname, "../../output");
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

await page.screenshot({ path: `${outDir}/poster.png`, fullPage: true });
await page.pdf({
  path: `${outDir}/poster.pdf`,
  width: "1920px",
  height: "1080px",
  printBackground: true,
  preferCSSPageSize: true
});

await browser.close();
console.log("✅ Poster exported to output/poster.png & poster.pdf");
