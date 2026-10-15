import { spawn } from "node:child_process";
import { chromium } from "playwright";
import { PDFDocument } from "pdf-lib";
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";
import fs from "node:fs/promises";
import { clone, resumeSchema, type ResumeDocument } from "../src/models/resume";
import seed from "../seed/initial-resume.json" with { type: "json" };
// Uses an isolated port and browser; never touches the user's existing IndexedDB.
const port = Number(process.env.SMOKE_PORT || 4187);
const origin = `http://127.0.0.1:${port}`;
const child = spawn(
  process.execPath,
  ["--import", "tsx", "server/index.ts", "--production"],
  {
    cwd: process.cwd(),
    env: { ...process.env, API_PORT: String(port) },
    windowsHide: true,
    stdio: ["ignore", "pipe", "pipe"],
  },
);
const ready = new Promise<void>((resolve, reject) => {
  const timer = setTimeout(
    () => reject(new Error("Production server start timed out")),
    15000,
  );
  child.stdout.on("data", (data) => {
    if (String(data).includes("PDF service")) {
      clearTimeout(timer);
      resolve();
    }
  });
  child.once("exit", (code) => {
    clearTimeout(timer);
    if (code) reject(new Error(`Server exited ${code}`));
  });
});
const browser = await chromium.launch();
try {
  await ready;
  const page = await browser.newPage({
    viewport: { width: 1440, height: 1100 },
  });
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto(origin);
  await page.getByLabel("求职意向", { exact: true }).waitFor();
  const r = resumeSchema.parse(clone(seed));
  r.projects.forEach((p) => (p.bullets = p.bullets.slice(0, 1)));
  const response = await fetch(`${origin}/api/export/pdf`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Origin: origin },
    body: JSON.stringify(r),
  });
  if (!response.ok) throw new Error(await response.text());
  const bytes = new Uint8Array(await response.arrayBuffer());
  const pdf = await PDFDocument.load(bytes);
  if (pdf.getPageCount() !== 1) throw new Error("Expected one PDF page");
  await fs.mkdir("artifacts", { recursive: true });
  await fs.writeFile("artifacts/production-verified.pdf", bytes);
  const task = getDocument({
    data: new Uint8Array(bytes),
    useSystemFonts: true,
  });
  const rendered = await task.promise;
  const pdfPage = await rendered.getPage(1);
  const content = await pdfPage.getTextContent();
  const text = content.items.map((x) => ("str" in x ? x.str : "")).join("");
  if (!text.includes(r.profile.fullName))
    throw new Error("Chinese text is missing");
  // PDF.js renders the actual PDF for visual QA. Export itself remains browser text/vector PDF.
  const viewport = pdfPage.getViewport({ scale: 1.5 });
  const factory = rendered.canvasFactory as {
    create(width: number, height: number): {
      canvas: HTMLCanvasElement & { toBuffer(type: string): Buffer };
      context: CanvasRenderingContext2D;
    };
  };
  const { canvas, context } = factory.create(
    Math.ceil(viewport.width),
    Math.ceil(viewport.height),
  );
  await pdfPage.render({ canvasContext: context, viewport, canvas }).promise;
  await fs.writeFile(
    "artifacts/pdf-rendered.png",
    canvas.toBuffer("image/png"),
  );
  await task.destroy();
  await page.screenshot({ path: "artifacts/production-editor.png" });
  if (errors.length) throw new Error(errors.join("; "));
  const report = {
    productionOrigin: origin,
    mode: "production",
    pages: pdf.getPageCount(),
    pageSize: pdf.getPage(0).getSize(),
    chineseTextSearchable: true,
    pageErrors: errors,
  };
  await fs.writeFile(
    "artifacts/production-verification.json",
    JSON.stringify(report, null, 2),
  );
  console.log(JSON.stringify(report));
} finally {
  await browser.close();
  child.kill();
  await new Promise<void>((resolve) => {
    if (child.exitCode !== null) resolve();
    else child.once("exit", () => resolve());
  });
}
