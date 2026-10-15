import { defineConfig } from '@playwright/test'
export default defineConfig({
  testDir: './tests/e2e',
  timeout: 30000,
  fullyParallel: false,
  workers: 1,
  use: {
    baseURL: 'http://127.0.0.1:5186',
    viewport: { width: 1440, height: 900 },
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    channel: process.env.ATLASFLOW_BROWSER || 'msedge',
    launchOptions: { args: ['--enable-unsafe-swiftshader'] },
  },
  webServer: {
    command: 'npm run dev -- --port 5186 --strictPort',
    url: 'http://127.0.0.1:5186',
    reuseExistingServer: !process.env.CI,
    timeout: 20000,
  },
})
