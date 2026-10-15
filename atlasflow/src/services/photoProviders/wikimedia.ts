import type { GeoPoint, PhotoItem, PhotoSearchResult } from '../../types/domain'
import { validPoint, searchRadius } from '../../utils/geo'
import { plainMetadata, httpsUrl } from '../../utils/safeMetadata'
export const COMMONS_ENDPOINT = 'https://commons.wikimedia.org/w/api.php'
export class PhotoProviderError extends Error {
  constructor(
    message: string,
    public code: 'network' | 'timeout' | 'rate-limit' | 'api',
  ) {
    super(message)
    this.name = 'PhotoProviderError'
  }
}
type Metadata = Record<string, { value?: string }>
interface CommonsImage {
  mime?: string
  thumburl?: string
  descriptionurl?: string
  width?: number
  height?: number
  extmetadata?: Metadata
}
interface CommonsPage {
  pageid?: number
  title?: string
  imageinfo?: CommonsImage[]
}
interface CommonsResponse {
  query?: { pages?: CommonsPage[] | Record<string, CommonsPage> }
  continue?: Record<string, string | number>
  error?: { code?: string; info?: string }
}
export function parseCommons(data: CommonsResponse): PhotoItem[] {
  const pages = Object.values(data.query?.pages || {})
  const seen = new Set<string>()
  return pages.flatMap((page) => {
    const info = page.imageinfo?.[0]
    if (
      !info ||
      !page.pageid ||
      !['image/jpeg', 'image/png', 'image/webp'].includes(info.mime || '')
    )
      return []
    const thumbnailUrl = httpsUrl(info.thumburl, ['upload.wikimedia.org', 'thumb.wikimedia.org'])
    const originalPageUrl = httpsUrl(info.descriptionurl, ['commons.wikimedia.org'])
    if (!thumbnailUrl || !originalPageUrl) return []
    const id = `wikimedia:${page.pageid}`
    if (seen.has(id)) return []
    seen.add(id)
    const meta = info.extmetadata || {}
    return [
      {
        id,
        source: 'wikimedia' as const,
        title: plainMetadata(page.title?.replace(/^File:/, '')) || '未命名公开影像',
        thumbnailUrl,
        originalPageUrl,
        author: plainMetadata(meta.Artist?.value),
        license: plainMetadata(meta.LicenseShortName?.value),
        licenseUrl: httpsUrl(meta.LicenseUrl?.value),
        width: Number.isFinite(info.width) && info.width! > 0 ? info.width! : 800,
        height: Number.isFinite(info.height) && info.height! > 0 ? info.height! : 600,
      },
    ]
  })
}
export function buildSearchUrl(point: GeoPoint, radius: number, cursor?: Record<string, string>) {
  if (!validPoint(point)) throw new Error('无效的经纬度')
  const params = new URLSearchParams({
    action: 'query',
    generator: 'geosearch',
    ggsprimary: 'all',
    ggsnamespace: '6',
    ggsradius: String(searchRadius(radius)),
    ggscoord: `${point.lat}|${point.lng}`,
    ggslimit: '200',
    prop: 'imageinfo',
    iiprop: 'url|size|mime|extmetadata',
    iiurlwidth: '800',
    format: 'json',
    formatversion: '2',
    origin: '*',
  })
  if (cursor)
    for (const [key, value] of Object.entries(cursor))
      if (key === 'continue' || key.endsWith('continue')) params.set(key, value)
  return `${COMMONS_ENDPOINT}?${params}`
}
const cache = new Map<string, { time: number; result: PhotoSearchResult }>()
async function request(url: string, signal: AbortSignal): Promise<CommonsResponse> {
  const timeout = new AbortController()
  const timer = setTimeout(() => timeout.abort(), 10000)
  try {
    const response = await fetch(url, {
      signal: AbortSignal.any([signal, timeout.signal]),
      headers: { 'Api-User-Agent': 'AtlasFlow/0.1 (browser-based public imagery explorer)' },
    })
    if (response.status === 429)
      throw new PhotoProviderError('Wikimedia 当前限制了请求频率。请稍后再试。', 'rate-limit')
    if (!response.ok)
      throw new PhotoProviderError(
        `照片服务暂不可用（HTTP ${response.status}）。请稍后重试。`,
        'network',
      )
    const data = (await response.json()) as CommonsResponse
    if (data.error)
      throw new PhotoProviderError(
        data.error.code === 'ratelimited'
          ? 'Wikimedia 当前限制了请求频率。请稍后再试。'
          : '照片接口返回错误，请稍后重试。',
        data.error.code === 'ratelimited' ? 'rate-limit' : 'api',
      )
    return data
  } catch (error) {
    if (signal.aborted) throw new DOMException('查询已取消', 'AbortError')
    if (timeout.signal.aborted)
      throw new PhotoProviderError('检索超过 10 秒。请检查网络并重试。', 'timeout')
    if (error instanceof PhotoProviderError) throw error
    throw new PhotoProviderError('无法连接 Wikimedia Commons。请检查网络后重试。', 'network')
  } finally {
    clearTimeout(timer)
  }
}
export async function searchNearbyPhotos(
  point: GeoPoint,
  options: { radiusMeters: number; signal: AbortSignal; cursor?: Record<string, string> },
): Promise<PhotoSearchResult> {
  if (options.signal.aborted) throw new DOMException('查询已取消', 'AbortError')
  const radiusMeters = searchRadius(options.radiusMeters)
  // Exact coordinates in cache keys prevent a nearby but different point borrowing an earlier result.
  const key = `${point.lat}|${point.lng}|${radiusMeters}|${JSON.stringify(options.cursor || {})}`
  const cached = cache.get(key)
  if (cached && Date.now() - cached.time < 600000) return { ...cached.result, searchPoint: point }
  const data = await request(buildSearchUrl(point, radiusMeters, options.cursor), options.signal)
  const result: PhotoSearchResult = {
    photos: parseCommons(data).sort((a, b) => scenicScore(b) - scenicScore(a)),
    searchPoint: point,
    radiusMeters,
    nextCursor: data.continue
      ? Object.fromEntries(
          Object.entries(data.continue).map(([key, value]) => [key, String(value)]),
        )
      : undefined,
  }
  if (cache.size >= 40) cache.delete(cache.keys().next().value!)
  cache.set(key, { time: Date.now(), result })
  return result
}
export async function loadPhotoPreview(photo: PhotoItem, signal: AbortSignal): Promise<string> {
  const params = new URLSearchParams({
    action: 'query',
    pageids: photo.id.split(':')[1]!,
    prop: 'imageinfo',
    iiprop: 'url',
    iiurlwidth: '1600',
    format: 'json',
    formatversion: '2',
    origin: '*',
  })
  const data = await request(`${COMMONS_ENDPOINT}?${params}`, signal)
  const info = Object.values(data.query?.pages || {})[0]?.imageinfo?.[0]
  return (
    httpsUrl(info?.thumburl, ['upload.wikimedia.org', 'thumb.wikimedia.org']) || photo.thumbnailUrl
  )
}

// This is a transparent ranking heuristic, not an assertion about image content.
export function scenicScore(photo: PhotoItem): number {
  const title = photo.title.toLowerCase()
  return (
    (photo.width / photo.height >= 1.15 ? 2 : 0) +
    (/landscape|panorama|mountain|lake|river|beach|coast|forest|garden|park|sunset|skyline|tower|bridge|temple|castle|风景|山|湖|海|景/.test(
      title,
    )
      ? 4
      : 0) -
    (/portrait|diagram|map\b|document|scan\b|logo|selfie/.test(title) ? 6 : 0)
  )
}
