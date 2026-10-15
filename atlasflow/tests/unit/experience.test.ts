import { describe, expect, it, vi } from 'vitest'
import { createExperience } from '../../src/stores/experience'
import { parseCommons } from '../../src/services/photoProviders/wikimedia'
import type { PhotoSearchResult } from '../../src/types/domain'
import { filePage } from '../fixtures/commons'
const point = { lat: 35, lng: 135 }
const photos = parseCommons({ query: { pages: [filePage()] } })
const result = (items = photos): PhotoSearchResult => ({
  photos: items,
  searchPoint: point,
  radiusMeters: 2000,
})
describe('experience transitions', () => {
  it('requires ready photos and uses Esc-style layered return', async () => {
    const s = createExperience(vi.fn().mockResolvedValue(result()))
    s.choose(point)
    await s.search()
    expect(s.stage.value).toBe('searching')
    s.enterGallery()
    expect(s.stage.value).toBe('searching')
    s.bloom(photos)
    s.enterGallery()
    s.openPhoto(photos[0]!.id)
    expect(s.stage.value).toBe('lightbox')
    s.closePhoto()
    expect(s.stage.value).toBe('gallery')
    s.back()
    expect(s.stage.value).toBe('earth')
    expect(s.photos.value).toHaveLength(0)
  })
  it('rejects bloom when all thumbnails fail', async () => {
    const s = createExperience(vi.fn().mockResolvedValue(result()))
    s.choose(point)
    await s.search()
    s.bloom([])
    expect(s.stage.value).toBe('searching')
    expect(s.searchStatus.value).toBe('error')
  })
  it('never allows an old request to populate a new point', async () => {
    let resolveA!: (value: PhotoSearchResult) => void
    const provider = vi
      .fn()
      .mockImplementationOnce(
        () =>
          new Promise((resolve) => {
            resolveA = resolve
          }),
      )
      .mockResolvedValue(result([]))
    const s = createExperience(provider)
    s.choose(point)
    const a = s.search()
    s.choose({ lat: 1, lng: 2 })
    const b = s.search(10000)
    resolveA(result())
    await Promise.all([a, b])
    expect(s.selectedPoint.value).toMatchObject({ lat: 1, lng: 2 })
    expect(s.photos.value).toHaveLength(0)
  })
  it('cancels bloom on return and discards a delayed completion', async () => {
    const s = createExperience(vi.fn().mockResolvedValue(result()))
    s.choose(point)
    const signal = await s.search()
    s.bloom(photos)
    s.back()
    s.enterGallery()
    expect(signal!.aborted).toBe(true)
    expect(s.stage.value).toBe('earth')
  })
  it('expands empty results once, then provides an empty state', async () => {
    const provider = vi.fn().mockResolvedValue(result([]))
    const s = createExperience(provider)
    s.choose(point)
    await s.search(2000)
    expect(provider).toHaveBeenCalledTimes(2)
    expect(provider.mock.calls[1]![1].radiusMeters).toBe(5000)
    expect(s.searchStatus.value).toBe('empty')
  })
  it('does not automatically retry provider errors', async () => {
    const provider = vi.fn().mockRejectedValue(new Error('限流'))
    const s = createExperience(provider)
    s.choose(point)
    await s.search()
    expect(s.searchError.value).toBe('限流')
    expect(provider).toHaveBeenCalledTimes(1)
  })
  it('deduplicates real continuation results', async () => {
    const provider = vi
      .fn()
      .mockResolvedValueOnce({ ...result(), nextCursor: { ggscontinue: '1' } })
      .mockResolvedValueOnce({
        ...result(parseCommons({ query: { pages: [filePage(), filePage(2)] } })),
      })
    const s = createExperience(provider)
    s.choose(point)
    await s.search()
    s.bloom(photos)
    s.enterGallery()
    await s.loadMore()
    expect(s.photos.value).toHaveLength(2)
    expect(s.nextCursor.value).toBeUndefined()
  })
})
