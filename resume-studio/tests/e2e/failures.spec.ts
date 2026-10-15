import { test, expect } from "@playwright/test";
import { spawn } from "node:child_process";
import path from "node:path";
import seed from "../../seed/initial-resume.json" with { type: "json" };
test("缺失中文字体时显示安装指引并阻止导出", async ({ page }) => {
  await page.addInitScript(() => {
    const original = window.FontFace;
    window.FontFace = class extends original {
      load() {
        return Promise.reject(new Error("Test: missing local fonts"));
      }
    };
  });
  await page.goto("/");
  await expect(page.locator(".layout-status")).toContainText(
    "未检测到可用中文字体",
  );
  await expect(
    page.getByRole("button", { name: "↓ 导出 PDF", exact: true }),
  ).toBeDisabled();
});
test("IndexedDB 禁用时保留可编辑草稿，提示未保存，仍可备份", async ({
  page,
}) => {
  await page.addInitScript(() => {
    Object.defineProperty(window, "indexedDB", {
      get() {
        throw new Error("Test: IndexedDB disabled");
      },
    });
  });
  await page.goto("/");
  await expect(page.locator(".banner.error")).toContainText("本地存储不可用");
  await expect(page.locator(".save-state")).toContainText("未保存");
  await page.getByLabel("求职意向", { exact: true }).fill("未保存草稿");
  const download = page.waitForEvent("download");
  await page.getByRole("button", { name: "↓ JSON 备份", exact: true }).click();
  expect((await download).suggestedFilename()).toMatch(/\.json$/);
  await expect(page.getByLabel("求职意向", { exact: true })).toHaveValue(
    "未保存草稿",
  );
});
test("本地 API 拒绝异站 Origin、远程图片与过大请求", async ({ request }) => {
  expect(
    (
      await request.post("/api/export/pdf", {
        data: seed,
        headers: { Origin: "https://example.org" },
      })
    ).status(),
  ).toBe(403);
  const invalid = structuredClone(seed);
  invalid.profile.photoAsset = "https://example.org/photo.jpg";
  expect(
    (await request.post("/api/export/pdf", { data: invalid })).status(),
  ).toBe(400);
  const response = await request.post("/api/export/pdf", {
    data: JSON.stringify({ text: "x".repeat(7 * 1024 * 1024) }),
    headers: { "Content-Type": "application/json" },
  });
  expect(response.status()).toBe(413);
});
test("Chromium 缺失时 API 返回安装命令，不返回 PDF", async () => {
  const child = spawn(
    process.execPath,
    ["--import", "tsx", "server/index.ts"],
    {
      cwd: process.cwd(),
      env: {
        ...process.env,
        API_PORT: "4197",
        PLAYWRIGHT_BROWSERS_PATH: path.resolve(
          "artifacts/missing-browser-test",
        ),
      },
      windowsHide: true,
      stdio: ["ignore", "pipe", "pipe"],
    },
  );
  let output = "";
  child.stdout.on("data", (data) => (output += String(data)));
  child.stderr.on("data", (data) => (output += String(data)));
  try {
    await expect
      .poll(() => output, { timeout: 20000 })
      .toContain("PDF service");
    const response = await fetch("http://127.0.0.1:4197/api/export/pdf", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(seed),
    });
    expect(response.status).toBe(500);
    expect(response.headers.get("Content-Type")).toContain("application/json");
    expect((await response.json()).message).toContain(
      "npx playwright install chromium",
    );
  } finally {
    child.kill();
    await new Promise<void>((resolve) => {
      if (child.exitCode !== null) resolve();
      else child.once("exit", () => resolve());
    });
  }
});
