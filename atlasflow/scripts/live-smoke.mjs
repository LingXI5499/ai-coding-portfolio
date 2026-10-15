import { chromium } from '@playwright/test'
import { mkdir, writeFile } from 'node:fs/promises'
const browser = await chromium.launch({
  channel: 'msedge',
  headless: true,
  args: [
    '--enable-webgl',
    '--use-gl=angle',
    '--use-angle=swiftshader',
    '--enable-unsafe-swiftshader',
  ],
})
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
const errors = []
const responses = []
const photoSources = []
const evidence = []
const pageCounts = []
page.on('pageerror', (error) => errors.push(error.message))
page.on('response', (response) => {
  if (response.url().includes('commons.wikimedia.org/w/api.php')) {
    responses.push({ status: response.status(), url: response.url() })
    evidence.push(
      response
        .json()
        .then((data) => {
          for (const page of Object.values(data.query?.pages || {})) {
            const info = page.imageinfo?.[0]
            if (
              info &&
              ['image/jpeg', 'image/png', 'image/webp'].includes(info.mime) &&
              /^https:\/\/(upload|thumb)\.wikimedia\.org\//.test(info.thumburl || '')
            )
              photoSources.push({
                title: page.title,
                filePage: info.descriptionurl,
                author: info.extmetadata?.Artist?.value,
                license: info.extmetadata?.LicenseShortName?.value,
                licenseUrl: info.extmetadata?.LicenseUrl?.value,
              })
          }
        })
        .catch(() => {}),
    )
  }
})
await mkdir('docs/screenshots', { recursive: true })
try {
  await page.goto(process.env.ATLASFLOW_URL || 'http://127.0.0.1:5174/')
  await page
    .locator('.map-status')
    .waitFor({ state: 'hidden', timeout: 25000 })
    .catch(() => {})
  await page.waitForTimeout(3000)
  await page.screenshot({ path: 'docs/screenshots/earth-desktop.png' })
  await page.getByRole('button', { name: /02.*巴黎/ }).click()
  await page.getByRole('button', { name: /探索附近影像/ }).click()
  await page.locator('.gallery-toolbar').waitFor({ timeout: 45000 })
  pageCounts.push(await page.locator('.photo-card').count())
  for (let i = 0; i < 4; i++) {
    const more = page.getByRole('button', { name: '加载更多', exact: true })
    if (!(await more.count())) break
    const before = await page.locator('.photo-card').count()
    await more.click()
    await page.waitForFunction(
      (count) =>
        document.querySelectorAll('.photo-card').length > count ||
        !!document.querySelector('.gallery-error'),
      before,
      { timeout: 15000 },
    )
    if (await page.locator('.gallery-error').count())
      throw new Error(await page.locator('.gallery-error').innerText())
    pageCounts.push(await page.locator('.photo-card').count())
  }
  await page.getByRole('button', { name: /开启手势/ }).click()
  await page.getByRole('button', { name: /握拳聚合/ }).click()
  await page.waitForFunction(() =>
    document.querySelector('.photo-sphere')?.getAttribute('style')?.includes('--sphere-opacity: 1'),
  )
  await page.waitForFunction(
    () =>
      [...document.querySelectorAll('.sphere-photo')].filter(
        (img) => img.complete && img.naturalWidth,
      ).length >= 20,
    undefined,
    { timeout: 15000 },
  )
  await page.screenshot({ path: 'docs/screenshots/photo-sphere.png' })
  await page.getByRole('button', { name: /张掌散开/ }).click()
  await page.locator('.photo-sphere').waitFor({ state: 'hidden' })
  await page.getByRole('button', { name: '关闭摄像头及手势面板' }).click()
  await page.screenshot({ path: 'docs/screenshots/gallery-desktop.png' })
  await page.getByRole('button', { name: 'Ⅱ 暂停流动' }).click()
  await page.locator('.photo-card').first().click()
  await page.getByRole('dialog').waitFor()
  await page.getByText('正在加载更清晰的预览…').waitFor({ state: 'hidden', timeout: 15000 })
  await page.screenshot({ path: 'docs/screenshots/photo-detail.png' })
  await page.keyboard.press('Escape')
  await page.keyboard.press('Escape')
  await page.locator('.featured').waitFor()
  await page.getByRole('button', { name: 'AtlasFlow，回到默认地球' }).click()
  await page.setViewportSize({ width: 390, height: 844 })
  await page.waitForTimeout(1000)
  await page.screenshot({ path: 'docs/screenshots/earth-mobile.png' })
  await page.locator('.place-list button').filter({ hasText: '巴黎' }).click()
  await page.getByRole('button', { name: /探索附近影像/ }).click()
  await page.locator('.gallery-toolbar').waitFor({ timeout: 45000 })
  await page.screenshot({ path: 'docs/screenshots/gallery-mobile.png' })
  console.log(
    JSON.stringify(
      {
        success: true,
        cards: await page.locator('.photo-card').count(),
        pageCounts,
        responses,
        errors,
      },
      null,
      2,
    ),
  )
} catch (error) {
  await page.screenshot({ path: 'docs/screenshots/live-failure.png' })
  console.log(
    JSON.stringify(
      {
        success: false,
        error: error.message,
        text: await page.locator('body').innerText(),
        responses,
        errors,
      },
      null,
      2,
    ),
  )
  process.exitCode = 1
} finally {
  await Promise.allSettled(evidence)
  await writeFile(
    'docs/live-network-check.json',
    JSON.stringify(
      { checkedAt: new Date().toISOString(), pageCounts, responses, errors, photoSources },
      null,
      2,
    ),
  )
  await browser.close()
}
