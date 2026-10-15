<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import {
  Map,
  Marker,
  NavigationControl,
  AttributionControl,
  ScaleControl,
  setWorkerUrl,
} from 'maplibre-gl'
import workerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?url'
import type { GeoPoint, CameraState, ScreenPoint } from '../../types/domain'
import { normalizeLongitude } from '../../utils/geo'
const props = defineProps<{ interactive: boolean }>()
const emit = defineEmits<{ select: [point: GeoPoint]; ready: []; failure: [message: string] }>()
const container = ref<HTMLDivElement>()
const zoomLevel = ref(1.65)
let map: Map | undefined
let marker: Marker | undefined
let loadingTimer: ReturnType<typeof setTimeout> | undefined
let ready = false
const defaultCamera = {
  center: [105, 28] as [number, number],
  zoom: innerWidth <= 640 ? 0.6 : 1.65,
  pitch: 0,
  bearing: 0,
}
const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
function snapshot(): CameraState {
  return map
    ? {
        center: [map.getCenter().lng, map.getCenter().lat],
        zoom: map.getZoom(),
        pitch: map.getPitch(),
        bearing: map.getBearing(),
      }
    : defaultCamera
}
function flyTo(point: GeoPoint, zoom = 12) {
  map?.flyTo({ center: [point.lng, point.lat], zoom, duration: reduced() ? 0 : 950 })
}
function restore(camera: CameraState) {
  map?.stop()
  map?.flyTo({ ...camera, duration: reduced() ? 0 : 700 })
}
function reset() {
  marker?.remove()
  restore(defaultCamera)
}
function project(point: GeoPoint): ScreenPoint {
  const p = map?.project([point.lng, point.lat])
  return p ? { x: p.x, y: p.y } : { x: innerWidth / 2, y: innerHeight / 2 }
}
function mark(point: GeoPoint) {
  if (!map) return
  marker?.remove()
  const element = document.createElement('div')
  element.className = 'location-marker'
  element.setAttribute('aria-hidden', 'true')
  marker = new Marker({ element }).setLngLat([point.lng, point.lat]).addTo(map)
}
function setInteraction() {
  if (!map) return
  const handlers = [
    map.dragPan,
    map.scrollZoom,
    map.boxZoom,
    map.dragRotate,
    map.keyboard,
    map.doubleClickZoom,
    map.touchZoomRotate,
  ]
  handlers.forEach((handler) => (props.interactive ? handler.enable() : handler.disable()))
}
function retry() {
  clearTimeout(loadingTimer)
  map?.remove()
  marker = undefined
  ready = false
  initialize()
}
function resize() {
  map?.setPadding({ left: innerWidth <= 640 ? 0 : 360, right: 0, top: 0, bottom: 0 })
}
function initialize() {
  try {
    setWorkerUrl(workerUrl)
    map = new Map({
      container: container.value!,
      style: import.meta.env.VITE_MAP_STYLE_URL || 'https://tiles.openfreemap.org/styles/liberty',
      ...defaultCamera,
      minZoom: 0,
      maxZoom: 20,
      attributionControl: false,
      canvasContextAttributes: { antialias: true },
    })
    map.setPadding({ left: innerWidth <= 640 ? 0 : 360, right: 0, top: 0, bottom: 0 })
    map.addControl(new NavigationControl({ showCompass: true }), 'bottom-right')
    map.addControl(new ScaleControl({ maxWidth: 100, unit: 'metric' }), 'bottom-right')
    map.addControl(new AttributionControl({ compact: true }), 'bottom-right')
    map.on('style.load', () => {
      map?.setProjection({ type: 'globe' })
      // Recolor via the public style API; the provider's attribution and resources are retained.
      for (const layer of map?.getStyle().layers || []) {
        if (layer.type === 'background')
          map?.setPaintProperty(layer.id, 'background-color', '#152d40')
        if (layer.type === 'raster') {
          map?.setPaintProperty(layer.id, 'raster-brightness-max', 0.4)
          map?.setPaintProperty(layer.id, 'raster-saturation', -0.75)
        }
        if (layer.type === 'fill' && /water/.test(layer.id))
          map?.setPaintProperty(layer.id, 'fill-color', '#091928')
        if (layer.type === 'fill' && /park|forest|landcover|landuse/.test(layer.id))
          map?.setPaintProperty(layer.id, 'fill-color', '#203c47')
        if (layer.type === 'line' && /boundary/.test(layer.id))
          map?.setPaintProperty(layer.id, 'line-color', '#658188')
        if (layer.type === 'symbol' && layer.layout?.['text-field']) {
          map?.setPaintProperty(layer.id, 'text-color', '#afc4ce')
          map?.setPaintProperty(layer.id, 'text-halo-color', '#091928')
          map?.setPaintProperty(layer.id, 'text-opacity', [
            'interpolate',
            ['linear'],
            ['zoom'],
            0,
            0,
            2.8,
            0,
            4,
            0.8,
            12,
            1,
          ])
        }
      }
      ready = true
      clearTimeout(loadingTimer)
      emit('ready')
      setInteraction()
    })
    map.on('error', (event) => {
      if (!event.error?.message?.includes('AbortError'))
        emit(
          'failure',
          `地图资源加载失败，请检查网络后重试。${event.error?.message?.includes('WebGL') ? ' 当前设备需要启用 WebGL。' : ''}`,
        )
    })
    map.on('click', (event) => {
      if (props.interactive && ready)
        emit('select', { lng: normalizeLongitude(event.lngLat.lng), lat: event.lngLat.lat })
    })
    map.on('zoom', () => {
      zoomLevel.value = map!.getZoom()
    })
    loadingTimer = setTimeout(() => {
      if (!ready) emit('failure', '地图加载超时。你仍可通过精选地点探索照片，或重试地图。')
    }, 15000)
  } catch {
    emit('failure', '此浏览器无法初始化 3D 地图。请启用 WebGL，或通过精选地点探索照片。')
  }
}
watch(() => props.interactive, setInteraction)
onMounted(() => {
  initialize()
  window.addEventListener('resize', resize)
})
onBeforeUnmount(() => {
  clearTimeout(loadingTimer)
  marker?.remove()
  map?.remove()
  window.removeEventListener('resize', resize)
})
defineExpose({ snapshot, flyTo, restore, reset, project, mark, retry })
</script>
<template>
  <div
    ref="container"
    class="earth-map"
    aria-label="互动地球地图：拖动旋转，滚轮缩放，点击选择坐标"
  ></div>
  <div v-if="interactive" class="map-detail-badge">
    地图层级 {{ zoomLevel.toFixed(1) }} · 可放大至街区 / 建筑
  </div>
</template>
