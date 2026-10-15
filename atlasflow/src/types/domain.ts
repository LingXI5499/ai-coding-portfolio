export interface GeoPoint {
  lng: number
  lat: number
  label?: string
  subtitle?: string
}
export interface CameraState {
  center: [number, number]
  zoom: number
  pitch: number
  bearing: number
}
export interface ScreenPoint {
  x: number
  y: number
}
export interface PhotoItem {
  id: string
  source: string
  title: string
  thumbnailUrl: string
  previewUrl?: string
  originalPageUrl: string
  author?: string
  license?: string
  licenseUrl?: string
  width: number
  height: number
}
export interface PhotoSearchResult {
  photos: PhotoItem[]
  searchPoint: GeoPoint
  radiusMeters: number
  nextCursor?: Record<string, string>
}
export type ExperienceStage = 'earth' | 'searching' | 'blooming' | 'gallery' | 'lightbox'
