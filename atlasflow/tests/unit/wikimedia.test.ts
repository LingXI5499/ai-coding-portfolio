import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  buildSearchUrl,
  parseCommons,
  searchNearbyPhotos,
  loadPhotoPreview,
  scenicScore,
} from '../../src/services/photoProviders/wikimedia'
import { plainMetadata, httpsUrl } from '../../src/utils/safeMetadata'
import { filePage } from '../fixtures/commons'
afterEach(() => {
  vi.unstubAllGlobals()
  vi.useRealTimers()
})
describe('Commons adapter', () => {
  it('uses lat|lng and caps radius in URLSearchParams', () => {
    const params = new URL(buildSearchUrl({ lat: 35, lng: 135 }, 20000)).searchParams
    expect(params.get('ggscoord')).toBe('35|135')
    expect(params.get('ggsradius')).toBe('10000')
    expect(params.get('ggsnamespace')).toBe('6')
  })
  it('cannot let a cursor overwrite query coordinates', () =>
    expect(
      new URL(
        buildSearchUrl({ lat: 35, lng: 135 }, 2000, { ggscoord: '0|0', ggscontinue: '1' }),
      ).searchParams.get('ggscoord'),
    ).toBe('35|135'))
  it('parses arrays and legacy objects and removes duplicates', () => {
    expect(parseCommons({ query: { pages: [filePage(), filePage()] } })).toHaveLength(1)
    expect(parseCommons({ query: { pages: { '1': filePage() } } })[0]?.author).toBe('Test author')
  })
  it('filters SVGs, insecure images and invalid source hosts', () => {
    const svg = filePage(2)
    svg.imageinfo[0]!.mime = 'image/svg+xml'
    const unsafe = filePage(3)
    unsafe.imageinfo[0]!.thumburl = 'http://upload.wikimedia.org/test.jpg'
    const wrong = filePage(4)
    wrong.imageinfo[0]!.descriptionurl = 'https://evil.test/a'
    expect(parseCommons({ query: { pages: [svg, unsafe, wrong, filePage()] } })).toHaveLength(1)
  })
  it('accepts the real Commons thumbnail host without trusting unrelated hosts', () => {
    const page = filePage(71)
    page.imageinfo[0]!.thumburl =
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a1/Lake.jpg/960px-Lake.jpg'
    expect(parseCommons({ query: { pages: [page] } })).toHaveLength(1)
    page.imageinfo[0]!.thumburl = 'https://thumb.wikimedia.org.evil.test/a.jpg'
    expect(parseCommons({ query: { pages: [page] } })).toHaveLength(0)
  })
  it('follows imageinfo continuation instead of silently dropping files after the first 50', async () => {
    const one = filePage(800),
      two = filePage(801)
    two.imageinfo[0]!.thumburl = 'https://thumb.wikimedia.org/test/801.jpg'
    const fetcher = vi
      .fn()
      .mockResolvedValueOnce(
        new Response(
          JSON.stringify({
            query: { pages: [one] },
            continue: { continue: '||', iicontinue: 'next|1' },
          }),
        ),
      )
      .mockResolvedValueOnce(new Response(JSON.stringify({ query: { pages: [two] } })))
    vi.stubGlobal('fetch', fetcher)
    const point = { lat: 23.111, lng: 41.333 },
      options = { radiusMeters: 2000, signal: new AbortController().signal }
    const first = await searchNearbyPhotos(point, options)
    const next = await searchNearbyPhotos(point, { ...options, cursor: first.nextCursor })
    expect(first.photos[0]?.id).toBe('wikimedia:800')
    expect(next.photos[0]?.id).toBe('wikimedia:801')
    expect(new URL(fetcher.mock.calls[1]![0]).searchParams.get('iicontinue')).toBe('next|1')
    expect(new URL(fetcher.mock.calls[0]![0]).searchParams.get('ggslimit')).toBe('200')
  })
  it('loads high resolution previews from thumb.wikimedia.org', async () => {
    const page = filePage(72),
      photo = parseCommons({ query: { pages: [page] } })[0]!
    page.imageinfo[0]!.thumburl = 'https://thumb.wikimedia.org/test/high.jpg'
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue(new Response(JSON.stringify({ query: { pages: [page] } }))),
    )
    expect(await loadPhotoPreview(photo, new AbortController().signal)).toBe(
      page.imageinfo[0]!.thumburl,
    )
  })
  it('ranks landscape and architecture above portraits using title and aspect ratio', () => {
    const photo = parseCommons({ query: { pages: [filePage()] } })[0]!
    expect(scenicScore({ ...photo, title: 'Mountain lake panorama.jpg' })).toBeGreaterThan(
      scenicScore({ ...photo, title: 'Portrait selfie.jpg' }),
    )
  })
  it('retains absent license as unknown and does not invent photo coordinates', () => {
    const page = filePage()
    page.imageinfo[0]!.extmetadata = {} as (typeof page.imageinfo)[0]['extmetadata']
    const photo = parseCommons({ query: { pages: [page] } })[0]!
    expect(photo.license).toBeUndefined()
    expect(photo).not.toHaveProperty('lat')
  })
  it('strips scripts and HTML and rejects unsafe URLs', () => {
    expect(plainMetadata('<script>alert(1)</script><b>A &amp; B</b>')).toBe('A & B')
    expect(httpsUrl('javascript:alert(1)')).toBeUndefined()
    expect(httpsUrl('https://user:pass@commons.wikimedia.org/')).toBeUndefined()
  })
  it('reports HTTP 429 without retrying', async () => {
    const fetcher = vi.fn().mockResolvedValue(new Response('', { status: 429 }))
    vi.stubGlobal('fetch', fetcher)
    await expect(
      searchNearbyPhotos(
        { lat: 10.111, lng: 11.111 },
        { signal: new AbortController().signal, radiusMeters: 2000 },
      ),
    ).rejects.toMatchObject({ code: 'rate-limit' })
    expect(fetcher).toHaveBeenCalledTimes(1)
  })
  it('times out stalled fetches', async () => {
    vi.useFakeTimers()
    vi.stubGlobal(
      'fetch',
      (_: string, options: RequestInit) =>
        new Promise((_, reject) =>
          options.signal?.addEventListener('abort', () =>
            reject(new DOMException('aborted', 'AbortError')),
          ),
        ),
    )
    const pending = expect(
      searchNearbyPhotos(
        { lat: 11.222, lng: 12.222 },
        { signal: new AbortController().signal, radiusMeters: 2000 },
      ),
    ).rejects.toMatchObject({ code: 'timeout' })
    await vi.advanceTimersByTimeAsync(10001)
    await pending
  })
  it('honors an already aborted request', async () => {
    const c = new AbortController()
    c.abort()
    const fetcher = vi.fn()
    vi.stubGlobal('fetch', fetcher)
    await expect(
      searchNearbyPhotos({ lat: 0, lng: 0 }, { signal: c.signal, radiusMeters: 2000 }),
    ).rejects.toMatchObject({ name: 'AbortError' })
    expect(fetcher).not.toHaveBeenCalled()
  })
  it('caches exact coordinates only', async () => {
    const fetcher = vi
      .fn()
      .mockResolvedValue(
        new Response(JSON.stringify({ query: { pages: [filePage()] } }), { status: 200 }),
      )
    vi.stubGlobal('fetch', fetcher)
    await searchNearbyPhotos(
      { lat: 20.12341, lng: 25.12341 },
      { signal: new AbortController().signal, radiusMeters: 2000 },
    )
    await searchNearbyPhotos(
      { lat: 20.12341, lng: 25.12341 },
      { signal: new AbortController().signal, radiusMeters: 2000 },
    )
    fetcher.mockResolvedValue(
      new Response(JSON.stringify({ query: { pages: [] } }), { status: 200 }),
    )
    await searchNearbyPhotos(
      { lat: 20.12342, lng: 25.12342 },
      { signal: new AbortController().signal, radiusMeters: 2000 },
    )
    expect(fetcher).toHaveBeenCalledTimes(2)
  })
})
