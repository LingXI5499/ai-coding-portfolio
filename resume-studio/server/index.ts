import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium, type Browser } from "playwright";
import { PDFDocument } from "pdf-lib";
import {
  resumeSchema,
  filename,
  type ResumeDocument,
} from "../src/models/resume";
import { API_PORT, WEB_PORT, host } from "../config";
const production = process.argv.includes("--production");
const origin = `http://${host}:${production ? API_PORT : WEB_PORT}`;
const app = express();
app.disable("x-powered-by");
// Validate Host as well as Origin to reject DNS rebinding and browser cross-site POSTs.
app.use((req, res, next) => {
  if (req.headers.host !== `${host}:${API_PORT}`) {
    res
      .status(403)
      .json({
        code: "LOCAL_ONLY",
        message: "仅允许通过 127.0.0.1 访问本地服务。",
      });
    return;
  }
  if (
    req.method === "POST" &&
    req.headers.origin &&
    req.headers.origin !== origin
  ) {
    res
      .status(403)
      .json({
        code: "INVALID_ORIGIN",
        message: "仅允许本机编辑器访问 PDF 服务。",
      });
    return;
  }
  next();
});
app.use(express.json({ limit: "6mb" }));
app.get("/api/health", (_req, res) =>
  res.json({ ok: true, mode: production ? "production" : "development" }),
);
let browserPromise: Promise<Browser> | undefined,
  active = 0;
async function getBrowser() {
  if (!browserPromise) {
    browserPromise = chromium
      .launch({ headless: true, timeout: 20000 })
      .then((browser) => {
        browser.on("disconnected", () => {
          browserPromise = undefined;
        });
        return browser;
      })
      .catch((e) => {
        browserPromise = undefined;
        throw new Error(
          `Chromium 启动失败，请运行 npx playwright install chromium 后重试。${e instanceof Error && e.message.includes("Executable") ? "（缺少浏览器）" : ""}`,
        );
      });
  }
  return browserPromise;
}
app.post("/api/export/pdf", async (req, res) => {
  if (!req.is("application/json")) {
    res
      .status(415)
      .json({ code: "INVALID_TYPE", message: "请发送 JSON 格式简历数据。" });
    return;
  }
  const parsed = resumeSchema.safeParse(req.body);
  if (!parsed.success) {
    res
      .status(400)
      .json({
        code: "INVALID_RESUME",
        message: `简历数据校验失败：${parsed.error.issues.map((x) => `${x.path.join(".")} ${x.message}`).join("；")}`,
      });
    return;
  }
  if (active >= 2) {
    res
      .status(429)
      .json({
        code: "BUSY",
        message: "本地 PDF 服务繁忙，请等待当前任务完成后重试。",
      });
    return;
  }
  active++;
  let context: Awaited<ReturnType<Browser["newContext"]>> | undefined,
    timer: ReturnType<typeof setTimeout> | undefined,
    timedOut = false;
  try {
    const browser = await getBrowser();
    context = await browser.newContext({
      viewport: { width: 1000, height: 1300 },
      serviceWorkers: "block",
    });
    const ctx = context;
    timer = setTimeout(() => {
      timedOut = true;
      void ctx.close();
    }, 30000);
    await context.route("**/*", (route) => {
      const url = new URL(route.request().url());
      if (url.origin === origin || url.protocol === "data:")
        return route.continue();
      return route.abort("blockedbyclient");
    });
    const page = await context.newPage();
    page.setDefaultTimeout(20000);
    page.setDefaultNavigationTimeout(20000);
    await page.goto(`${origin}/print`, { waitUntil: "networkidle" });
    await page.emulateMedia({ media: "print" });
    await page.waitForFunction(
      () => typeof window.__RESUME_PRINT_RENDER__ === "function",
    );
    const result = await page.evaluate(
      async (payload: ResumeDocument) =>
        window.__RESUME_PRINT_RENDER__!(payload),
      parsed.data,
    );
    if (result.verticalMm || result.horizontalMm) {
      res
        .status(422)
        .json({
          code: "RESUME_OVERFLOW",
          message: `内容超出 A4：纵向 ${result.verticalMm.toFixed(1)}mm，横向 ${result.horizontalMm.toFixed(1)}mm。请精简内容后重试。`,
          ...result,
        });
      return;
    }
    const buffer = await page.pdf({
      format: "A4",
      preferCSSPageSize: true,
      printBackground: true,
      displayHeaderFooter: false,
      margin: { top: "0", bottom: "0", left: "0", right: "0" },
    });
    const pdf = await PDFDocument.load(buffer);
    if (pdf.getPageCount() !== 1)
      throw new Error("生成结果不是单页，已阻止下载，请精简内容。");
    const size = pdf.getPage(0).getSize();
    if (Math.abs(size.width - 595.28) > 2 || Math.abs(size.height - 841.89) > 2)
      throw new Error("PDF 尺寸异常，已阻止下载。");
    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="resume.pdf"; filename*=UTF-8''${encodeURIComponent(filename(parsed.data))}`,
      "Cache-Control": "no-store",
    });
    res.send(buffer);
  } catch (e) {
    if (!res.headersSent)
      res
        .status(500)
        .json({
          code: "PDF_FAILED",
          message: timedOut
            ? "PDF 生成超时，请重启本地服务后重试。"
            : e instanceof Error
              ? e.message
              : "PDF 导出失败，请重试。",
        });
  } finally {
    clearTimeout(timer);
    await context?.close().catch(() => {});
    active--;
  }
});
if (production) {
  const root = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    "../dist",
  );
  app.use(express.static(root, { index: false }));
  app.get(/^(?!\/api\/).*/, (req, res) => {
    if (path.extname(req.path)) {
      res.status(404).end();
      return;
    }
    res.sendFile(path.join(root, "index.html"));
  });
}
app.use(
  (
    err: any,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction,
  ) => {
    res
      .status(err.status === 413 ? 413 : 400)
      .json({
        code: "INVALID_REQUEST",
        message:
          err.status === 413
            ? "请求超过 6MB，请减小照片或简历内容。"
            : "请求 JSON 无效，请检查数据。",
      });
  },
);
const server = app.listen(API_PORT, host, () =>
  console.log(
    `Resume Studio PDF service: http://${host}:${API_PORT} (${production ? "production" : "development"})`,
  ),
);
async function stop() {
  server.close();
  const b = await browserPromise?.catch(() => undefined);
  await b?.close();
  process.exit(0);
}
process.on("SIGINT", () => void stop());
process.on("SIGTERM", () => void stop());
