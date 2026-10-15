import { describe, expect, it } from 'vitest'
import {
  validPoint,
  normalizeLongitude,
  formatCoordinates,
  searchRadius,
} from '../../src/utils/geo'
describe('geographic boundaries', () => {
  it('validates finite longitude and latitude separately', () => {
    expect(validPoint({ lat: 35, lng: 135 })).toBe(true)
    expect(validPoint({ lat: 135, lng: 35 })).toBe(false)
    expect(validPoint({ lat: NaN, lng: 0 })).toBe(false)
    expect(validPoint({ lat: 0, lng: Infinity })).toBe(false)
  })
  it('normalizes world copies', () => {
    expect(normalizeLongitude(541)).toBe(-179)
    expect(normalizeLongitude(-181)).toBe(179)
  })
  it('preserves hemispheres in the display', () =>
    expect(formatCoordinates({ lat: -33.8568, lng: 151.2153 })).toBe('33.8568° S / 151.2153° E'))
  it('clamps Commons radii and handles invalid values', () => {
    expect(searchRadius(50000)).toBe(10000)
    expect(searchRadius(0)).toBe(10)
    expect(searchRadius(NaN)).toBe(2000)
  })
})
