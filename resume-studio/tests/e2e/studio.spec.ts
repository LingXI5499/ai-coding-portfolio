import { test, expect, type Page } from "@playwright/test";
import { PDFDocument, PDFName, PDFArray, PDFDict } from "pdf-lib";
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";
import fs from "node:fs/promises";
import seed from "../../seed/initial-resume.json" with { type: "json" };
import {
  clone,
  newVersion,
  resumeSchema,
  type ResumeDocument,
} from "../../src/models/resume";
const sheet = (p: Page) => p.locator(".resume-sheet");
async function start(page: Page) {
  await page.goto("/");
  await expect(page.getByLabel("求职意向", { exact: true })).toBeVisible();
  await expect(page.locator(".save-state")).toHaveText("已保存");
}
async function saved(page: Page) {
  await expect(page.locator(".save-state")).toHaveText("已保存");
}
async function openSection(page: Page, name: string) {
  const d = page
    .locator("details")
    .filter({ has: page.locator("summary").filter({ hasText: name }) });
  if (!(await d.getAttribute("open").then((v) => v !== null)))
    await d.locator("summary").click();
}
// This is an explicit TEST COPY, shortened by removing detail bullets, never used as app seed.
function shortResume(): ResumeDocument {
  const r = resumeSchema.parse(clone(seed));
  r.projects.forEach((p) => (p.bullets = p.bullets.slice(0, 1)));
  return r;
}
async function importResume(page: Page, r: ResumeDocument) {
  const v = newVersion(r, "测试精简副本");
  const data = {
    format: "resume-studio",
    schemaVersion: 1,
    selectedId: v.id,
    versions: [v],
  };
  await page
    .locator('input[type=file][accept=".json,application/json"]')
    .setInputFiles({
      name: "test.json",
      mimeType: "application/json",
      buffer: Buffer.from(JSON.stringify(data)),
    });
  await page.getByRole("button", { name: "确认导入", exact: true }).click();
  await expect(page.getByRole("combobox", { name: "当前版本" })).toContainText(
    "测试精简副本",
  );
  await expect(page.locator(".layout-status")).toContainText("A4 单页安全");
  await saved(page);
}
async function textPdf(bytes: Uint8Array) {
  const loading = getDocument({
    data: new Uint8Array(bytes),
    useSystemFonts: true,
  });
  const doc = await loading.promise;
  const p = await doc.getPage(1);
  const content = await p.getTextContent();
  const text = content.items.map((x) => ("str" in x ? x.str : "")).join("");
  const annotations = await p.getAnnotations();
  const ops = await p.getOperatorList();
  const result = { pages: doc.numPages, text, annotations, ops: ops.fnArray };
  await loading.destroy();
  return result;
}
test("E01 E02 · 首次导入忠实显示、字号、头像、长求职意向和缩放", async ({
  page,
}) => {
  await start(page);
  await expect(sheet(page).locator("h1")).toHaveText(seed.profile.fullName);
  await expect(sheet(page).locator(".skills p")).toHaveCount(4);
  await expect(sheet(page).locator(".project-block")).toHaveCount(2);
  await expect(sheet(page).locator(".headline")).toHaveCount(0);
  await expect(sheet(page).locator(".internship-section")).toHaveCount(0);
  const sizes = await sheet(page).evaluate((el) => ({
    intent: parseFloat(getComputedStyle(el.querySelector(".intent")!).fontSize),
    contact: parseFloat(
      getComputedStyle(el.querySelector(".contact")!).fontSize,
    ),
    photo: (el.querySelector("img") as HTMLImageElement).naturalWidth,
  }));
  expect(sizes.intent).toBeGreaterThan(sizes.contact);
  expect(sizes.photo).toBeGreaterThan(0);
  await page
    .getByLabel("求职意向", { exact: true })
    .fill("Java 后端开发工程师 · AI 应用".repeat(12));
  await expect(sheet(page).locator(".intent")).toContainText("AI 应用");
  const overlap = await sheet(page).evaluate((el) => {
    const a = el.querySelector(".intent")!.getBoundingClientRect(),
      b = el.querySelector("img")!.getBoundingClientRect();
    return a.right > b.left;
  });
  expect(overlap).toBe(false);
  const status = await page.locator(".layout-status").innerText();
  await page.getByRole("button", { name: "缩小预览" }).click();
  await expect(page.locator(".layout-status")).toHaveText(status);
});
test("E03 E04 E05 E09 · 编辑技能与两个项目、刷新和重开保存", async ({
  page,
  context,
}) => {
  await start(page);
  await page
    .getByLabel("技能1内容", { exact: true })
    .fill("Java 核心知识，真实编辑测试。");
  await page
    .getByLabel("项目1条目1内容", { exact: true })
    .fill("第一行真实内容\n第二行真实内容");
  await page
    .getByLabel("项目2名称", { exact: true })
    .fill("单店药店即时配送管理系统 · 测试");
  await page
    .getByLabel("项目2技术栈", { exact: true })
    .fill("Java · Spring Boot · MySQL");
  await expect(sheet(page)).toContainText("第一行真实内容");
  await saved(page);
  await page.reload();
  await expect(page.getByLabel("技能1内容", { exact: true })).toHaveValue(
    "Java 核心知识，真实编辑测试。",
  );
  await expect(page.getByLabel("项目1条目1内容", { exact: true })).toHaveValue(
    "第一行真实内容\n第二行真实内容",
  );
  const second = await context.newPage();
  await second.goto("/");
  await expect(second.getByLabel("项目2名称", { exact: true })).toHaveValue(
    "单店药店即时配送管理系统 · 测试",
  );
  await second.close();
});
test("E06 E07 · 实习单卡有内容才展示，禁用或清空不留标题", async ({ page }) => {
  await start(page);
  await openSection(page, "实习经历");
  await page.getByLabel("显示实习经历", { exact: true }).check();
  await expect(sheet(page).locator(".internship-section")).toHaveCount(0);
  await page
    .getByLabel("参与项目", { exact: true })
    .fill("测试项目实践（测试输入）");
  await expect(sheet(page).locator(".internship-section")).toContainText(
    "测试项目实践",
  );
  const titles = await sheet(page).locator("h2").allTextContents();
  expect(titles.indexOf("实习经历")).toBeLessThan(titles.indexOf("项目经历"));
  await page.getByLabel("显示实习经历", { exact: true }).uncheck();
  await expect(sheet(page).locator(".internship-section")).toHaveCount(0);
  await page.getByLabel("显示实习经历", { exact: true }).check();
  await page.getByLabel("参与项目", { exact: true }).fill("");
  await expect(sheet(page).locator(".internship-section")).toHaveCount(0);
});
test("E08 · 复制、切换、重命名和删除版本，始终保留一个", async ({ page }) => {
  await start(page);
  const original = await page
    .getByLabel("当前版本", { exact: true })
    .inputValue();
  page.once("dialog", (d) => d.accept("Java 后端｜测试公司"));
  await page.getByRole("button", { name: "＋ 复制版本", exact: true }).click();
  await page.getByLabel("求职意向", { exact: true }).fill("Java 版本岗位");
  await page.getByLabel("当前版本", { exact: true }).selectOption(original);
  await expect(page.getByLabel("求职意向", { exact: true })).toHaveValue(
    seed.jobIntent,
  );
  await page
    .getByLabel("当前版本", { exact: true })
    .selectOption({ label: "Java 后端｜测试公司" });
  await expect(page.getByLabel("求职意向", { exact: true })).toHaveValue(
    "Java 版本岗位",
  );
  page.once("dialog", (d) => d.accept("已改名"));
  await page.getByTitle("重命名版本").click();
  await saved(page);
  await expect(page.getByLabel("当前版本", { exact: true })).toContainText(
    "已改名",
  );
  page.once("dialog", (d) => d.accept());
  await page.getByTitle("删除版本", { exact: true }).click();
  await expect(
    page.getByLabel("当前版本", { exact: true }).locator("option"),
  ).toHaveCount(1);
  await expect(page.getByTitle("删除版本", { exact: true })).toBeDisabled();
});
test("删除先确认、技能与条目排序、添加保留顺序", async ({ page }) => {
  await start(page);
  await page.getByRole("button", { name: "技能1下移", exact: true }).click();
  await expect(page.getByLabel("技能2标题", { exact: true })).toHaveValue(
    "Java",
  );
  page.once("dialog", (d) => d.dismiss());
  await page.getByRole("button", { name: "删除技能2", exact: true }).click();
  await expect(sheet(page).locator(".skills p")).toHaveCount(4);
  page.once("dialog", (d) => d.accept());
  await page.getByRole("button", { name: "删除技能2", exact: true }).click();
  await expect(sheet(page).locator(".skills p")).toHaveCount(3);
  await page.getByRole("button", { name: "＋ 添加技能", exact: true }).click();
  await page.getByLabel("技能4标题", { exact: true }).fill("新技能");
  await page.getByLabel("技能4内容", { exact: true }).fill("测试内容");
  await expect(sheet(page).locator(".skills p").last()).toContainText("新技能");
  await page
    .getByRole("button", { name: "项目1条目1下移", exact: true })
    .click();
  await expect(page.getByLabel("项目1条目2标题", { exact: true })).toHaveValue(
    seed.projects[0]!.bullets[0]!.label,
  );
});
test("E10 E14 E15 E20 · 直接下载真实单页 PDF，中文文本、链接、照片与预览一致", async ({
  page,
}) => {
  await start(page);
  const r = shortResume();
  await importResume(page, r);
  const waiting = page.waitForEvent("download");
  await page.getByRole("button", { name: "↓ 导出 PDF", exact: true }).click();
  const download = await waiting;
  await fs.mkdir("artifacts", { recursive: true });
  await download.saveAs("artifacts/resume-verified.pdf");
  const bytes = new Uint8Array(
    await fs.readFile("artifacts/resume-verified.pdf"),
  );
  const pdf = await PDFDocument.load(bytes);
  expect(pdf.getPageCount()).toBe(1);
  const size = pdf.getPage(0).getSize();
  expect(size.width).toBeCloseTo(595.28, 0);
  expect(size.height).toBeCloseTo(841.89, 0);
  const content = await textPdf(bytes);
  for (const text of [
    r.profile.fullName,
    r.jobIntent,
    ...r.projects.map((p) => p.title),
  ])
    expect(content.text.replace(/\s/g, "")).toContain(text.replace(/\s/g, ""));
  const urls = content.annotations
    .filter((a) => a.subtype === "Link")
    .map((a) => a.url);
  expect(urls).toContain(r.profile.github.url);
  expect(urls).toContain(r.profile.website.url + "/");
  const resources = pdf.getPage(0).node.Resources();
  const xobjects = resources?.lookup(PDFName.of("XObject"), PDFDict);
  expect(xobjects?.keys().length).toBeGreaterThan(0);
  await sheet(page).screenshot({ path: "artifacts/compact-sheet.png" });
  await page.screenshot({ path: "artifacts/editor-export-ready.png" });
  await fs.writeFile(
    "artifacts/pdf-verification.json",
    JSON.stringify(
      {
        pages: content.pages,
        size,
        searchableName: content.text.includes(r.profile.fullName),
        searchableIntent: content.text.includes(r.jobIntent),
        projectTitles: r.projects.map((p) => p.title),
        clickableUrls: urls,
        photoXObjects: xobjects?.keys().length,
      },
      null,
      2,
    ),
  );
});
test("E11 · 超长文字保留并保存、前端与服务端均拒绝超页", async ({
  page,
  request,
}) => {
  await start(page);
  const huge = "长内容用于验证超页，不能被裁掉。".repeat(350);
  await page.getByLabel("项目1条目1内容", { exact: true }).fill(huge);
  await expect(page.locator(".layout-status")).toContainText("纵向超出");
  await expect(
    page.getByRole("button", { name: "↓ 导出 PDF", exact: true }),
  ).toBeDisabled();
  await saved(page);
  await page.reload();
  await expect(page.getByLabel("项目1条目1内容", { exact: true })).toHaveValue(
    huge,
  );
  const r = shortResume();
  r.projects[0]!.bullets[0]!.content = huge;
  const response = await request.post("/api/export/pdf", { data: r });
  expect(response.status()).toBe(422);
  expect((await response.json()).code).toBe("RESUME_OVERFLOW");
});
test("E12 · 长链接和长英文串安全换行、横向无越界", async ({ page }) => {
  await start(page);
  await importResume(page, shortResume());
  await openSection(page, "个人信息");
  await page
    .getByLabel("GitHub 显示文字", { exact: true })
    .fill("https://example.org/" + "longword".repeat(35));
  await page
    .getByLabel("项目1技术栈", { exact: true })
    .fill("SuperLongTechnology".repeat(35));
  await expect(page.locator(".layout-status")).not.toContainText("横向超出");
  const safe = await sheet(page).evaluate((el) => {
    const main = el.querySelector(".header-main")!.getBoundingClientRect(),
      photo = el.querySelector("img")!.getBoundingClientRect();
    return main.right < photo.left;
  });
  expect(safe).toBe(true);
});
test("E13 · 照片校验、替换、JSON 含照片且可恢复", async ({ page }) => {
  await start(page);
  await importResume(page, shortResume());
  await openSection(page, "个人信息");
  const input = page.locator(
    'input[type=file][accept="image/jpeg,image/png,image/webp"]',
  );
  await input.setInputFiles({
    name: "bad.jpg",
    mimeType: "image/jpeg",
    buffer: Buffer.from("not an image"),
  });
  await expect(page.locator(".banner")).toContainText("照片替换失败");
  const original = await fs.readFile("assets/resume-photo.jpg");
  await input.setInputFiles({
    name: "photo.jpg",
    mimeType: "image/jpeg",
    buffer: original,
  });
  await expect(sheet(page).locator("img")).toHaveAttribute(
    "src",
    /^data:image\/jpeg;base64,/,
  );
  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("button", { name: "↓ JSON 备份", exact: true }).click();
  const dl = await downloadPromise;
  const data = JSON.parse(await fs.readFile((await dl.path())!, "utf8"));
  expect(
    data.versions.every((v: any) =>
      v.resume.profile.photoAsset.startsWith("data:image/"),
    ),
  ).toBe(true);
  await page
    .locator('input[type=file][accept=".json,application/json"]')
    .setInputFiles((await dl.path())!);
  await page.getByRole("button", { name: "确认导入", exact: true }).click();
  await expect(sheet(page).locator("img")).toHaveAttribute(
    "src",
    /^data:image\/jpeg;base64,/,
  );
  await expect(
    page.getByRole("button", { name: "↓ 导出 PDF", exact: true }),
  ).toBeEnabled();
  const pdfDownload = page.waitForEvent("download");
  await page.getByRole("button", { name: "↓ 导出 PDF", exact: true }).click();
  expect((await pdfDownload).suggestedFilename()).toMatch(/\.pdf$/);
});
test("E16 · 阻断外网仍可本机编辑、下载 PDF", async ({ page, context }) => {
  let external = 0;
  await context.route("**/*", (route) => {
    const url = new URL(route.request().url());
    if (url.hostname === "127.0.0.1" || url.protocol === "data:")
      return route.continue();
    external++;
    return route.abort();
  });
  await start(page);
  await importResume(page, shortResume());
  const dl = page.waitForEvent("download");
  await page.getByRole("button", { name: "↓ 导出 PDF", exact: true }).click();
  await dl;
  expect(external).toBe(0);
});
test("E17 · 非法 JSON / 未知 schema / 危险链接被拒绝，旧数据保留", async ({
  page,
  request,
}) => {
  await start(page);
  for (const raw of [
    "{bad json",
    JSON.stringify({ ...seed, schemaVersion: 99 }),
  ]) {
    await page
      .locator('input[type=file][accept=".json,application/json"]')
      .setInputFiles({
        name: "invalid.json",
        mimeType: "application/json",
        buffer: Buffer.from(raw),
      });
    await expect(page.locator(".banner")).toContainText(
      "导入失败，原数据未改变",
    );
    await expect(page.getByLabel("求职意向", { exact: true })).toHaveValue(
      seed.jobIntent,
    );
  }
  const r = shortResume();
  r.profile.github.url = "javascript:alert(1)";
  expect((await request.post("/api/export/pdf", { data: r })).status()).toBe(
    400,
  );
  await page.reload();
  await expect(page.getByLabel("求职意向", { exact: true })).toHaveValue(
    seed.jobIntent,
  );
});
test("E18 · 服务不可用和丢失照片给出明确错误，不下载", async ({ page }) => {
  await start(page);
  await importResume(page, shortResume());
  await page.route("**/api/export/pdf", (route) => route.abort("failed"));
  let downloaded = false;
  page.on("download", () => (downloaded = true));
  await page.getByRole("button", { name: "↓ 导出 PDF", exact: true }).click();
  await expect(page.locator(".banner")).toContainText("本地 PDF 服务");
  expect(downloaded).toBe(false);
  await page.unroute("**/api/export/pdf");
  await page.route("**/assets/resume-photo.png", (route) =>
    route.abort("failed"),
  );
  await page.reload();
  await expect(page.locator(".layout-status")).toContainText("证件照加载失败");
  await expect(
    page.getByRole("button", { name: "↓ 导出 PDF", exact: true }),
  ).toBeDisabled();
});
test("E19 · 导出快照与继续编辑相互隔离", async ({ page }) => {
  await start(page);
  await importResume(page, shortResume());
  const before = "Java 后端快照测试";
  await page.getByLabel("求职意向", { exact: true }).fill(before);
  await expect(sheet(page).locator(".intent")).toContainText(before);
  let release!: () => void;
  const hold = new Promise<void>((resolve) => (release = resolve));
  await page.route("**/api/export/pdf", async (route) => {
    await hold;
    await route.continue();
  });
  const requested = page.waitForRequest("**/api/export/pdf");
  const waiting = page.waitForEvent("download");
  await page.getByRole("button", { name: "↓ 导出 PDF", exact: true }).click();
  const req = await requested;
  expect(req.postDataJSON().jobIntent).toBe(before);
  await page.getByLabel("求职意向", { exact: true }).fill("导出后新的编辑");
  release();
  const dl = await waiting;
  const parsed = await textPdf(
    new Uint8Array(await fs.readFile((await dl.path())!)),
  );
  expect(parsed.text).toContain(before);
  expect(parsed.text).not.toContain("导出后新的编辑");
});
test("多标签冲突明确提示并阻止旧标签覆盖新内容", async ({ page, context }) => {
  await start(page);
  const other = await context.newPage();
  await other.goto("/");
  await expect(other.getByLabel("求职意向", { exact: true })).toBeVisible();
  await page.getByLabel("求职意向", { exact: true }).fill("来自标签一的保存");
  await saved(page);
  await expect(other.locator(".banner.error")).toContainText("其他标签");
  await other.getByLabel("求职意向", { exact: true }).fill("陈旧标签的草稿");
  await expect(other.locator(".save-state")).toContainText("未保存");
  await page.reload();
  await expect(page.getByLabel("求职意向", { exact: true })).toHaveValue(
    "来自标签一的保存",
  );
  other.on("dialog", (d) => d.accept());
  await other.close();
});
test("双密度与原始参考截图留档，打印复用组件边界", async ({ page }) => {
  await start(page);
  await fs.mkdir("artifacts", { recursive: true });
  await page.screenshot({ path: "artifacts/editor-initial.png" });
  await sheet(page).screenshot({ path: "artifacts/initial-compact.png" });
  await page
    .getByLabel("排版密度", { exact: true })
    .selectOption("comfortable");
  await sheet(page).screenshot({ path: "artifacts/initial-comfortable.png" });
  const print = await page.context().newPage();
  await print.goto("/print");
  await print.waitForFunction(() => !!window.__RESUME_PRINT_RENDER__);
  const result = await print.evaluate(
    async (r) => window.__RESUME_PRINT_RENDER__!(r),
    shortResume(),
  );
  expect(result).toEqual({ verticalMm: 0, horizontalMm: 0 });
  await print
    .locator(".resume-sheet")
    .screenshot({ path: "artifacts/print-compact.png" });
  await print.goto("/reference/original-resume.html");
  await print.locator(".photo").evaluate((img: HTMLImageElement) => {
    img.src = "/assets/resume-photo.png";
  });
  await print
    .locator(".photo")
    .evaluate((img: HTMLImageElement) => img.decode());
  await print
    .locator(".page")
    .screenshot({ path: "artifacts/original-reference.png" });
  await print.close();
});
