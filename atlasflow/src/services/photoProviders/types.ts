import type { GeoPoint, PhotoItem, PhotoSearchResult } from '../../types/domain'
export interface NearbyPhotoOptions {
  radiusMeters: number
  signal: AbortSignal
  cursor?: Record<string, string>
}
export type NearbyPhotoSearch = (
  point: GeoPoint,
  options: NearbyPhotoOptions,
) => Promise<PhotoSearchResult>
/** Providers return real geographic results and provenance; an empty result stays empty. */
export interface PhotoProvider {
  id: string
  label: string
  searchNearby: NearbyPhotoSearch
  loadPreview?: (photo: PhotoItem, signal: AbortSignal) => Promise<string>
}
