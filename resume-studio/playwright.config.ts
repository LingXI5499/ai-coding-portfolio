import { defineConfig } from "@playwright/test";
import { WEB_PORT, host } from "./config";
export default defineConfig({
  testDir: "tests/e2e",
  fullyParallel: false,
  workers: 1,
  timeout: 60000,
  expect: { timeout: 12000 },
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL: `http://${host}:${WEB_PORT}`,
    viewport: { width: 1440, height: 1100 },
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  webServer: {
    command: "npm run dev",
    url: `http://${host}:${WEB_PORT}`,
    reuseExistingServer: !process.env.CI,
    timeout: 60000,
  },
});
