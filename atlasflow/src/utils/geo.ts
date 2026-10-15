import type { GeoPoint } from '../types/domain'
export function validPoint(point: GeoPoint) {
  return (
    Number.isFinite(point.lat) &&
    Number.isFinite(point.lng) &&
    Math.abs(point.lat) <= 90 &&
    Math.abs(point.lng) <= 180
  )
}
export function normalizeLongitude(lng: number) {
  return ((((lng + 180) % 360) + 360) % 360) - 180
}
export function formatCoordinates(point: GeoPoint) {
  return `${Math.abs(point.lat).toFixed(4)}° ${point.lat < 0 ? 'S' : 'N'} / ${Math.abs(point.lng).toFixed(4)}° ${point.lng < 0 ? 'W' : 'E'}`
}
export function searchRadius(value: number) {
  return Math.min(10000, Math.max(10, Number.isFinite(value) ? Math.round(value) : 2000))
}
