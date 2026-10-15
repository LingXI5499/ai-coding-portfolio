import { describe, expect, it, vi } from 'vitest'
import {
  getPhotoProvider,
  photoSourceLabel,
  searchNearbyPhotos,
} from '../../src/services/photoProviders'
describe('extensible photo provider boundary', () => {
  it('exposes the current provider with search and lazy preview capabilities', () => {
    const provider = getPhotoProvider('wikimedia')
    expect(provider.id).toBe('wikimedia')
    expect(provider.searchNearby).toBeTypeOf('function')
    expect(provider.loadPreview).toBeTypeOf('function')
    expect(photoSourceLabel('wikimedia')).toBe('Wikimedia Commons')
  })
  it('rejects an unimplemented source instead of silently borrowing another source', async () => {
    expect(() => getPhotoProvider('google')).toThrow('尚未接入')
    vi.stubEnv('VITE_PHOTO_PROVIDER', 'google')
    await expect(
      Promise.resolve().then(() =>
        searchNearbyPhotos(
          { lat: 0, lng: 0 },
          { radiusMeters: 2000, signal: new AbortController().signal },
        ),
      ),
    ).rejects.toThrow('尚未接入')
    vi.unstubAllEnvs()
  })
})
