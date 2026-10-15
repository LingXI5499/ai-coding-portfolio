import {
  searchNearbyPhotos as searchCommons,
  loadPhotoPreview as loadCommonsPreview,
} from './wikimedia'
import type { PhotoProvider, NearbyPhotoSearch } from './types'
import type { PhotoItem } from '../../types/domain'
// Add future adapters here. Backend secrets must never be put into VITE_*.
export const photoProviders: Readonly<Record<string, PhotoProvider>> = {
  wikimedia: {
    id: 'wikimedia',
    label: 'Wikimedia Commons',
    searchNearby: searchCommons,
    loadPreview: loadCommonsPreview,
  },
}
export function getPhotoProvider(
  id = import.meta.env.VITE_PHOTO_PROVIDER || 'wikimedia',
): PhotoProvider {
  const provider = Object.hasOwn(photoProviders, id) ? photoProviders[id] : undefined
  if (!provider)
    throw new Error(`尚未接入图片源「${id}」。请将 VITE_PHOTO_PROVIDER 设置为 wikimedia。`)
  return provider
}
export function photoSourceLabel(source: string) {
  return Object.hasOwn(photoProviders, source) ? photoProviders[source]!.label : source
}
export const searchNearbyPhotos: NearbyPhotoSearch = (point, options) =>
  getPhotoProvider().searchNearby(point, options)
export async function loadPhotoPreview(photo: PhotoItem, signal: AbortSignal) {
  const provider = getPhotoProvider(photo.source)
  return provider.loadPreview ? provider.loadPreview(photo, signal) : photo.thumbnailUrl
}
