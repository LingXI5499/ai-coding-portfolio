import { test, expect, type Page } from '@playwright/test'
import { photoResponse, filePage } from '../fixtures/commons'
import { readFileSync } from 'node:fs'
test.use({
  launchOptions: {
    args: [
      '--enable-unsafe-swiftshader',
      '--use-fake-device-for-media-stream',
      '--use-fake-ui-for-media-stream',
    ],
  },
})
const pixel = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIHWP4z8DwHwAFgAI/ScLbtAAAAABJRU5ErkJggg==',
  'base64',
)
// External resources are fixtures in these tests; the separate live smoke uses the real providers.
async function fixture(page: Page, mode: 'photos' | 'empty' | 'error' | 'rate-limit' = 'photos') {
  await page.route('https://tiles.openfreemap.org/styles/liberty', (route) =>
    route.fulfill({
      json: {
        version: 8,
        sources: {
          test: {
            type: 'geojson',
            data: { type: 'FeatureCollection', features: [] },
            attribution: '<a href="https://openfreemap.org/">OpenFreeMap</a>',
          },
        },
        layers: [
          { id: 'background', type: 'background', paint: { 'background-color': '#152d40' } },
          { id: 'test', type: 'fill', source: 'test' },
        ],
      },
    }),
  )
  await page.route('https://upload.wikimedia.org/**', (route) =>
    route.fulfill({ body: pixel, contentType: 'image/png' }),
  )
  await page.route('https://commons.wikimedia.org/w/api.php?**', (route) => {
    if (mode === 'empty') return route.fulfill({ json: { query: { pages: [] } } })
    if (mode === 'error' || mode === 'rate-limit')
      return route.fulfill({ status: mode === 'error' ? 503 : 429, body: '' })
    return route.fulfill({ json: photoResponse })
  })
  await page.goto('/')
  await expect(page.locator('.map-status')).toHaveCount(0)
}
async function chooseParis(page: Page) {
  await page.locator('.place-list button').filter({ hasText: '巴黎' }).click()
}
async function gallery(page: Page) {
  await fixture(page)
  await chooseParis(page)
  await page.getByRole('button', { name: /探索附近影像/ }).click()
  await expect(page.locator('.gallery-toolbar')).toBeVisible()
  await page.getByRole('button', { name: 'Ⅱ 暂停流动' }).click()
}
test('home has a real nonzero map canvas, attribution and city coordinates', async ({ page }) => {
  await fixture(page)
  await expect(page.getByRole('heading', { name: /每一个坐标，\s*都是一扇窗。/ })).toBeVisible()
  const box = await page.locator('.maplibregl-canvas').boundingBox()
  expect(box!.width).toBeGreaterThan(1000)
  expect(box!.height).toBeGreaterThan(600)
  await expect(page.getByRole('link', { name: 'OpenFreeMap', exact: true })).toBeVisible()
  await chooseParis(page)
  await expect(page.locator('.selection')).toContainText('48.8584° N / 2.2945° E')
})
test('map drag does not select; map click produces geographic coordinates', async ({ page }) => {
  await fixture(page)
  await page.mouse.move(900, 420)
  await page.mouse.down()
  await page.mouse.move(940, 440, { steps: 10 })
  await page.mouse.up()
  await expect(page.locator('.selection')).toHaveCount(0)
  await page.mouse.click(720, 450)
  await expect(page.locator('.selection')).toBeVisible()
  await expect(page.locator('.coordinates').first()).toContainText('°')
})
test('local city filter is explicit and supports keyboard selection', async ({ page }) => {
  await fixture(page)
  const input = page.getByRole('textbox', { name: /搜索精选城市/ })
  await input.fill('悉尼')
  await expect(page.locator('.search-results')).toContainText('精选城市 · 本地列表')
  await input.press('Enter')
  await expect(page.locator('.selection')).toContainText('33.8568° S / 151.2153° E')
})
test('gallery lightbox, keyboard navigation and layered Escape return', async ({ page }) => {
  await gallery(page)
  await expect(page.locator('.photo-card')).toHaveCount(30)
  await page.locator('.photo-card').first().click()
  await expect(page.getByRole('dialog')).toContainText('Test author')
  await expect(page.getByRole('link', { name: /Wikimedia Commons 原始文件页/ })).toHaveAttribute(
    'rel',
    'noopener noreferrer',
  )
  await page.keyboard.press('ArrowRight')
  await expect(page.locator('.lightbox-top')).toContainText('2 / 30')
  await page.keyboard.press('Escape')
  await expect(page.getByRole('dialog')).toHaveCount(0)
  await expect(page.locator('.gallery-toolbar')).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(page.locator('.featured')).toBeVisible()
  await expect(page.locator('.photo-bloom')).toHaveCount(0)
})
test('dragging a photo never opens the lightbox, wheel moves the shared plane', async ({
  page,
}) => {
  await gallery(page)
  const before = await page.locator('.gallery-plane').getAttribute('style')
  await page.mouse.move(180, 250)
  await page.mouse.down()
  await page.mouse.move(90, 300, { steps: 8 })
  await page.mouse.up()
  await expect(page.getByRole('dialog')).toHaveCount(0)
  await page.mouse.wheel(0, 200)
  await expect.poll(() => page.locator('.gallery-plane').getAttribute('style')).not.toBe(before)
})
test('empty responses expand once and show a real empty state', async ({ page }) => {
  const radii: string[] = []
  page.on('request', (request) => {
    if (request.url().includes('commons.wikimedia.org/w/api.php'))
      radii.push(new URL(request.url()).searchParams.get('ggsradius')!)
  })
  await fixture(page, 'empty')
  await chooseParis(page)
  await page.getByRole('button', { name: /探索附近影像/ }).click()
  await expect(page.getByText('此位置附近暂未检索到可展示的公开影像。')).toBeVisible()
  expect(radii).toEqual(['2000', '5000'])
  await page.getByRole('button', { name: '搜索 10km' }).click()
  await expect.poll(() => radii.length).toBe(3)
  expect(radii[2]).toBe('10000')
  await expect(page.locator('.photo-card')).toHaveCount(0)
})
test('API failure and rate limiting preserve retry and return controls', async ({ page }) => {
  await fixture(page, 'rate-limit')
  await chooseParis(page)
  await page.getByRole('button', { name: /探索附近影像/ }).click()
  await expect(page.getByRole('alert')).toContainText('限制了请求频率')
  await expect(page.getByRole('button', { name: /重新尝试/ })).toBeVisible()
  await page.getByRole('button', { name: '← 返回地球' }).click()
  await expect(page.locator('.featured')).toBeVisible()
})
test('changing location cancels a pending query and discards its response', async ({ page }) => {
  await fixture(page)
  await page.unroute('https://commons.wikimedia.org/w/api.php?**')
  let started = false
  await page.route('https://commons.wikimedia.org/w/api.php?**', async (route) => {
    started = true
    await new Promise((resolve) => setTimeout(resolve, 800))
    await route.fulfill({ json: photoResponse }).catch(() => {})
  })
  await chooseParis(page)
  await page.getByRole('button', { name: /探索附近影像/ }).click()
  await expect.poll(() => started).toBe(true)
  await page.getByRole('textbox', { name: /搜索精选城市/ }).fill('京都')
  await page.getByRole('textbox', { name: /搜索精选城市/ }).press('Enter')
  await expect(page.locator('.selection')).toContainText('京都')
  await page.waitForTimeout(1000)
  await expect(page.locator('.gallery-toolbar')).toHaveCount(0)
  await expect(page.getByRole('button', { name: /探索附近影像/ })).toBeVisible()
})
test('Escape during photo bloom clears the transition', async ({ page }) => {
  await fixture(page)
  await chooseParis(page)
  await page.getByRole('button', { name: /探索附近影像/ }).click()
  await expect(page.locator('.photo-bloom')).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(page.locator('.photo-bloom')).toHaveCount(0)
  await expect(page.locator('.featured')).toBeVisible()
  await page.waitForTimeout(1700)
  await expect(page.locator('.gallery-toolbar')).toHaveCount(0)
})
test('five enter/return cycles leave no ghost overlays', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await fixture(page)
  for (let i = 0; i < 5; i++) {
    if (i === 0) await chooseParis(page)
    await page.getByRole('button', { name: /探索附近影像/ }).click()
    await expect(page.locator('.gallery-toolbar')).toBeVisible()
    await page.getByRole('button', { name: /返回地球/ }).click()
    await expect(page.locator('.gallery-toolbar')).toHaveCount(0)
    await expect(page.locator('.photo-bloom')).toHaveCount(0)
  }
})
test('390px mobile uses scrollable masonry without page overflow', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await gallery(page)
  await expect(page.getByRole('button', { name: /开启手势/ })).toBeHidden()
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(390)
  expect(
    await page.locator('.gallery-plane').evaluate((el) => getComputedStyle(el).columnCount),
  ).toBe('2')
  await page.locator('.gallery-surface').evaluate((el) => {
    el.scrollTop = 600
  })
  await expect
    .poll(() => page.locator('.gallery-surface').evaluate((el) => el.scrollTop))
    .toBeGreaterThan(300)
  await page.locator('.gallery-surface').evaluate((el) => {
    el.scrollTop = 0
  })
  await page.locator('.photo-card').first().click()
  await expect(page.getByRole('dialog')).toBeVisible()
})
test('camera requires active consent; denial keeps gallery usable', async ({ page }) => {
  await page.addInitScript(() => {
    ;(window as unknown as { mediaCalls: number }).mediaCalls = 0
    Object.defineProperty(navigator.mediaDevices, 'getUserMedia', {
      value: async () => {
        ;(window as unknown as { mediaCalls: number }).mediaCalls++
        throw new DOMException('denied', 'NotAllowedError')
      },
    })
  })
  await gallery(page)
  await page.getByRole('button', { name: /开启手势/ }).click()
  await expect(page.getByRole('button', { name: '同意并开启摄像头' })).toBeVisible()
  expect(await page.evaluate(() => (window as unknown as { mediaCalls: number }).mediaCalls)).toBe(
    0,
  )
  await page.getByRole('button', { name: '同意并开启摄像头' }).click()
  await expect(page.locator('.gesture-status')).toContainText('权限未获允许')
  await page.getByRole('button', { name: '关闭摄像头及手势面板' }).click()
  await page.locator('.photo-card').first().click()
  await expect(page.getByRole('dialog')).toBeVisible()
})
test('closing while camera permission is pending releases a late stream', async ({ page }) => {
  await page.addInitScript(() => {
    const state = window as unknown as { streamStopped: boolean; resolveCamera: () => void }
    state.streamStopped = false
    Object.defineProperty(navigator.mediaDevices, 'getUserMedia', {
      value: () =>
        new Promise((resolve) => {
          state.resolveCamera = () =>
            resolve({
              getTracks: () => [
                {
                  stop: () => {
                    state.streamStopped = true
                  },
                },
              ],
            })
        }),
    })
  })
  await gallery(page)
  await page.getByRole('button', { name: /开启手势/ }).click()
  await page.getByRole('button', { name: '同意并开启摄像头' }).click()
  await page.getByRole('button', { name: '关闭摄像头及手势面板' }).click()
  await page.evaluate(() => (window as unknown as { resolveCamera: () => void }).resolveCamera())
  await expect
    .poll(() =>
      page.evaluate(() => (window as unknown as { streamStopped: boolean }).streamStopped),
    )
    .toBe(true)
})
test('unsafe metadata and a failed image are local to that card', async ({ page }) => {
  await fixture(page)
  await page.unroute('https://commons.wikimedia.org/w/api.php?**')
  const file = filePage(99)
  file.imageinfo[0]!.extmetadata.Artist.value =
    '<img src=x onerror="window.injected=true"><script>window.injected=true</script>Safe author'
  await page.route('https://commons.wikimedia.org/w/api.php?**', (route) =>
    route.fulfill({ json: { query: { pages: [...photoResponse.query.pages, file] } } }),
  )
  await page.route('https://upload.wikimedia.org/test/99.jpg', (route) => route.abort())
  await chooseParis(page)
  await page.getByRole('button', { name: /探索附近影像/ }).click()
  await expect(page.locator('.gallery-toolbar')).toBeVisible()
  await page.getByRole('button', { name: 'Ⅱ 暂停流动' }).click()
  await expect(page.locator('.photo-card')).toHaveCount(31)
  await page.locator('.gallery-plane').evaluate((el) => {
    el.style.transform = 'translate3d(-3400px,-600px,0)'
  })
  await page.locator('.photo-card').last().focus()
  await page.keyboard.press('Enter')
  await expect(page.getByRole('dialog')).toContainText('Safe author')
  expect(
    await page.evaluate(() => (window as unknown as { injected?: boolean }).injected),
  ).toBeUndefined()
})
test.describe('real model with a synthetic camera feed', () => {
  test('official hand images produce real classifications, landmarks and gallery actions', async ({
    page,
  }) => {
    test.setTimeout(60000)
    const images = ['thumbs_up', 'victory', 'fist', 'right_hands'].map(
      (name) =>
        `data:image/jpeg;base64,${readFileSync(`tests/fixtures/hands/${name}.jpg`).toString('base64')}`,
    )
    await page.addInitScript(
      ({ images }) => {
        const state = window as unknown as { handImage: HTMLImageElement; imageSources: string[] }
        state.imageSources = images
        Object.defineProperty(navigator.mediaDevices, 'getUserMedia', {
          value: async () => {
            const canvas = document.createElement('canvas')
            canvas.width = 640
            canvas.height = 480
            const ctx = canvas.getContext('2d')!
            const image = new Image()
            image.src = images[0]!
            await image.decode()
            state.handImage = image
            const draw = () => {
              ctx.fillStyle = '#ddd'
              ctx.fillRect(0, 0, 640, 480)
              const ratio = Math.min(640 / image.width, 480 / image.height)
              ctx.drawImage(
                image,
                (640 - image.width * ratio) / 2,
                (480 - image.height * ratio) / 2,
                image.width * ratio,
                image.height * ratio,
              )
            }
            draw()
            setInterval(draw, 40)
            return canvas.captureStream(24)
          },
        })
      },
      { images },
    )
    await gallery(page)
    await page.getByRole('button', { name: /开启手势/ }).click()
    await page.getByRole('button', { name: '同意并开启摄像头' }).click()
    await expect(page.locator('.gesture-diagnostics strong')).toHaveText('点赞', { timeout: 45000 })
    await expect(page.getByRole('button', { name: 'Ⅱ 暂停流动' })).toBeVisible()
    await expect(page.locator('.hand-overlay circle')).toHaveCount(21)
    await page.evaluate(async () => {
      const state = window as unknown as { handImage: HTMLImageElement; imageSources: string[] }
      state.handImage.src = state.imageSources[1]!
      await state.handImage.decode()
    })
    await expect(page.locator('.gesture-diagnostics strong')).toHaveText('V 手势', {
      timeout: 10000,
    })
    await expect(page.locator('.gesture-status')).toContainText('照片起点')
    await page.evaluate(async () => {
      const state = window as unknown as { handImage: HTMLImageElement; imageSources: string[] }
      state.handImage.src = state.imageSources[2]!
      await state.handImage.decode()
    })
    await expect(page.locator('.gesture-diagnostics strong')).toHaveText('握拳', { timeout: 10000 })
    await expect(page.locator('.photo-sphere')).toHaveAttribute('data-state', 'gathered')
    await page.evaluate(async () => {
      const state = window as unknown as { handImage: HTMLImageElement; imageSources: string[] }
      state.handImage.src = state.imageSources[3]!
      await state.handImage.decode()
    })
    await expect(page.locator('.gesture-diagnostics strong')).toHaveText('张开手掌', {
      timeout: 10000,
    })
    await expect(page.locator('.photo-sphere')).toHaveCount(0)
    await page.getByRole('button', { name: '关闭摄像头及手势面板' }).click()
  })
  test('initializes MediaPipe locally and ends active media tracks on close', async ({ page }) => {
    test.setTimeout(60000)
    await page.addInitScript(() => {
      const get = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices)
      Object.defineProperty(navigator.mediaDevices, 'getUserMedia', {
        value: async (options: MediaStreamConstraints) => {
          const stream = await get(options)
          ;(window as unknown as { testStream: MediaStream }).testStream = stream
          return stream
        },
      })
    })
    await gallery(page)
    await page.getByRole('button', { name: /开启手势/ }).click()
    await page.getByRole('button', { name: '同意并开启摄像头' }).click()
    await expect(page.locator('.gesture-panel video')).toBeVisible()
    await expect(page.locator('.gesture-status')).toContainText(/未检测到手|摄像头已开启/, {
      timeout: 45000,
    })
    expect(
      await page.evaluate(
        () =>
          (window as unknown as { testStream: MediaStream }).testStream.getVideoTracks()[0]
            ?.readyState,
      ),
    ).toBe('live')
    await page.getByRole('button', { name: '关闭摄像头', exact: true }).click()
    expect(
      await page.evaluate(
        () =>
          (window as unknown as { testStream: MediaStream }).testStream.getVideoTracks()[0]
            ?.readyState,
      ),
    ).toBe('ended')
    await expect(page.locator('.gesture-panel')).toHaveCount(0)
  })
})

test('fist example gathers a rotating sphere and open palm scatters it with particles', async ({
  page,
}) => {
  await gallery(page)
  await page.getByRole('button', { name: /开启手势/ }).click()
  const before = await page.locator('.gallery-plane').getAttribute('style')
  await page.getByRole('button', { name: /张掌散开/ }).click()
  await expect.poll(() => page.locator('.gallery-plane').getAttribute('style')).not.toBe(before)
  await page.getByRole('button', { name: /握拳聚合/ }).click()
  await expect(page.locator('.photo-sphere')).toHaveAttribute('data-state', 'gathered')
  await expect(page.locator('.sphere-photo')).toHaveCount(30)
  await expect(page.locator('.sphere-particles')).toBeVisible()
  await expect
    .poll(() => page.locator('.photo-sphere').getAttribute('style'))
    .toContain('--sphere-opacity: 1')
  await page.waitForTimeout(1200)
  const position = await page.locator('.sphere-photo').first().getAttribute('style')
  await expect
    .poll(() => page.locator('.sphere-photo').first().getAttribute('style'))
    .not.toBe(position)
  await page.getByRole('button', { name: /张掌散开/ }).click()
  await expect(page.locator('.photo-sphere')).toHaveAttribute('data-state', 'releasing')
  await expect(page.locator('.photo-sphere')).toHaveCount(0)
  await expect(page.locator('main')).not.toHaveClass(/is-sculpting/)
  await page.getByRole('button', { name: /握拳聚合/ }).click()
  await expect(page.locator('.photo-sphere')).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(page.locator('.gesture-panel')).toHaveCount(0)
  await expect(page.locator('.photo-sphere')).toHaveCount(0)
  await expect(page.locator('main')).not.toHaveClass(/is-sculpting/)
})

test('recognized palm and fist drive movement and sphere through the worker result pipeline', async ({
  page,
}) => {
  await page.addInitScript(() => {
    const OriginalWorker = window.Worker
    const state = window as unknown as { pose: string; palmX: number; palmY: number }
    state.pose = 'Open_Palm'
    state.palmX = 0.7
    state.palmY = 0.5
    window.Worker = class extends OriginalWorker {
      private gestureWorker: boolean
      constructor(url: string | URL, options?: WorkerOptions) {
        super(
          String(url).includes('gesture.worker')
            ? URL.createObjectURL(
                new Blob(['self.onmessage=()=>{}'], { type: 'application/javascript' }),
              )
            : url,
          options,
        )
        this.gestureWorker = String(url).includes('gesture.worker')
      }
      postMessage(data: unknown, transfer?: Transferable[] | StructuredSerializeOptions) {
        if (!this.gestureWorker) {
          if (Array.isArray(transfer)) super.postMessage(data, transfer)
          else super.postMessage(data, transfer)
          return
        }
        const input = data as { type: string; bitmap?: ImageBitmap }
        if (input.type === 'init')
          setTimeout(
            () => this.dispatchEvent(new MessageEvent('message', { data: { type: 'ready' } })),
            30,
          )
        if (input.type === 'frame') {
          input.bitmap?.close()
          const landmarks = Array.from({ length: 21 }, (_, i) => ({
            x: state.palmX,
            y: state.palmY - i * 0.003,
            z: 0,
          }))
          setTimeout(
            () =>
              this.dispatchEvent(
                new MessageEvent('message', {
                  data: {
                    type: 'result',
                    latency: 12,
                    result: {
                      landmarks: [landmarks],
                      gestures: [[{ categoryName: state.pose, score: 0.92 }]],
                    },
                  },
                }),
              ),
            5,
          )
        }
      }
    }
  })
  await gallery(page)
  await page.getByRole('button', { name: /开启手势/ }).click()
  await page.getByRole('button', { name: '同意并开启摄像头' }).click()
  const before = await page.locator('.gallery-plane').getAttribute('style')
  await expect(page.locator('.gesture-diagnostics strong')).toHaveText('张开手掌')
  await expect.poll(() => page.locator('.gallery-plane').getAttribute('style')).not.toBe(before)
  await page.evaluate(() => {
    ;(window as unknown as { pose: string }).pose = 'Closed_Fist'
  })
  await expect(page.locator('.photo-sphere')).toHaveAttribute('data-state', 'gathered')
  await page.evaluate(() => {
    ;(window as unknown as { pose: string; palmX: number }).palmX = 0.4
  })
  await expect
    .poll(() => page.locator('.photo-sphere').getAttribute('style'))
    .toContain('--sphere-x')
  await page.evaluate(() => {
    ;(window as unknown as { pose: string }).pose = 'Open_Palm'
  })
  await expect(page.locator('.photo-sphere')).toHaveAttribute('data-state', 'releasing')
  await expect(page.locator('.photo-sphere')).toHaveCount(0)
  await page.getByRole('button', { name: '关闭摄像头及手势面板' }).click()
})

test('map clicks keep street-level zoom instead of zooming out to the globe', async ({ page }) => {
  await fixture(page)
  await chooseParis(page)
  await expect(page.locator('.map-detail-badge')).toContainText('12.0')
  await page.getByRole('button', { name: 'Zoom in', exact: true }).click()
  await expect(page.locator('.map-detail-badge')).toContainText('13.0')
  await page.mouse.click(730, 430)
  await expect(page.locator('.map-detail-badge')).toContainText('13.0')
  await expect(page.locator('.maplibregl-ctrl-scale')).toBeVisible()
})
