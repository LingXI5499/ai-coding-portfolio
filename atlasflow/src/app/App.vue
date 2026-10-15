<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount, defineAsyncComponent } from 'vue'
import EarthMap from '../components/earth/EarthMap.vue'
import PlaceSearch from '../components/earth/PlaceSearch.vue'
import SearchState from '../components/common/SearchState.vue'
import AboutDialog from '../components/common/AboutDialog.vue'
import PhotoBloom from '../components/transitions/PhotoBloom.vue'
import GalleryStage from '../components/gallery/GalleryStage.vue'
import PhotoSphere from '../components/gallery/PhotoSphere.vue'
import GalleryToolbar from '../components/gallery/GalleryToolbar.vue'
import PhotoLightbox from '../components/gallery/PhotoLightbox.vue'
import { featuredPlaces } from '../data/featuredPlaces'
import { formatCoordinates } from '../utils/geo'
import { preloadPhotos } from '../utils/preloadPhotos'
import { createExperience } from '../stores/experience'
import type { GeoPoint, ScreenPoint } from '../types/domain'
const GesturePanel = defineAsyncComponent(() => import('../components/gesture/GesturePanel.vue'))
const earth = ref<InstanceType<typeof EarthMap>>()
const gallery = ref<InstanceType<typeof GalleryStage>>()
const mapError = ref('')
const mapReady = ref(false)
const returning = ref(false)
const gestureOpen = ref(false)
const sculpting = ref(false)
const handPoint = ref({ x: 0.46, y: 0.5 })
function gatherPhotos() {
  sculpting.value = true
}
function releasePhotos() {
  sculpting.value = false
}
function handPosition(x: number, y: number) {
  handPoint.value = { x, y }
}
function closeGestures() {
  gestureOpen.value = false
  releasePhotos()
}
const about = ref(false)
const origin = ref<ScreenPoint>({ x: 0, y: 0 })
const experience = createExperience()
const {
  stage,
  selectedPoint,
  photos,
  bloomPhotos,
  selectedPhoto,
  searchStatus,
  searchError,
  radius,
  paused,
  nextCursor,
  moreLoading,
  moreError,
} = experience
const galleryVisible = computed(() => stage.value === 'gallery' || stage.value === 'lightbox')
const gesturesEnabled = import.meta.env.VITE_ENABLE_GESTURES !== 'false'
function onMapReady() {
  mapReady.value = true
  mapError.value = ''
}
function retryMap() {
  mapError.value = ''
  earth.value?.retry()
}
function choose(point: GeoPoint) {
  releasePhotos()
  if (returning.value) return
  gestureOpen.value = false
  experience.choose(point, earth.value?.snapshot())
  earth.value?.mark(point)
  if (point.label) earth.value?.flyTo(point)
}
function reset() {
  closeGestures()
  experience.back()
  selectedPoint.value = undefined
  earth.value?.reset()
}
async function search(radiusMeters?: number) {
  closeGestures()
  const signal = await experience.search(radiusMeters)
  if (!signal || signal.aborted) return
  const loaded = await preloadPhotos(photos.value, signal)
  if (signal.aborted || stage.value !== 'searching') return
  origin.value = earth.value?.project(selectedPoint.value!) || {
    x: innerWidth / 2,
    y: innerHeight / 2,
  }
  experience.bloom(loaded)
}
async function back(animate = true) {
  releasePhotos()
  if (returning.value) return
  returning.value = true
  gestureOpen.value = false
  paused.value = true
  if (galleryVisible.value && animate)
    await gallery.value?.collapse(earth.value?.project(selectedPoint.value!) || origin.value)
  experience.back()
  if (experience.savedCamera.value) earth.value?.restore(experience.savedCamera.value)
  returning.value = false
}
function keyboard(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    if (about.value) {
      about.value = false
      return
    }
    if (stage.value === 'lightbox') {
      experience.closePhoto()
      return
    }
    if (gestureOpen.value) {
      closeGestures()
      return
    }
    if (stage.value !== 'earth') void back()
  }
  if (stage.value === 'lightbox') {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      experience.stepPhoto(-1)
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      experience.stepPhoto(1)
    }
  }
}
function visibility() {
  if (document.hidden) {
    closeGestures()
    if (stage.value === 'searching' || stage.value === 'blooming') void back(false)
  }
}
onMounted(() => {
  document.addEventListener('keydown', keyboard)
  document.addEventListener('visibilitychange', visibility)
})
onBeforeUnmount(() => {
  experience.cancel()
  document.removeEventListener('keydown', keyboard)
  document.removeEventListener('visibilitychange', visibility)
})
</script>
<template>
  <main
    class="experience"
    :class="{
      'is-gallery': galleryVisible,
      'is-blooming': stage === 'blooming',
      'is-sculpting': sculpting,
    }"
  >
    <EarthMap
      ref="earth"
      :interactive="stage === 'earth' && !about"
      @select="choose"
      @ready="onMapReady"
      @failure="mapError = $event"
    />
    <div class="earth-vignette"></div>
    <template v-if="!galleryVisible">
      <header class="topbar">
        <button class="brand" aria-label="AtlasFlow，回到默认地球" @click="reset">
          <span class="brand-orbit">◎</span>Atlas<span>Flow</span><small>影像地图集</small></button
        ><PlaceSearch @select="choose" />
        <div class="topbar-right">
          <span class="edition">THE WORLD, IN FRAMES <i></i> VOL. 001</span
          ><button class="about-button" aria-label="使用说明" @click="about = true">?</button>
        </div>
      </header>
      <section v-if="stage === 'earth'" class="earth-intro">
        <p class="eyebrow"><span></span> AN ATLAS OF PUBLIC MEMORIES</p>
        <h1>每一个坐标，<br />都是一扇<span>窗。</span></h1>
        <p class="intro-copy">让好奇心带路。<br />在地球上选择一处，走进那里的影像。</p>
        <div class="intro-rule"></div>
        <p class="tiny">拖动旋转 · 滚轮缩放 · 点击探索</p>
      </section>
      <div v-if="!selectedPoint" class="globe-caption" aria-hidden="true">
        <span>01 / EXPLORE</span><span>看世界，换一种视角</span>
      </div>
      <section v-if="selectedPoint && stage !== 'blooming'" class="selection panel">
        <p class="eyebrow">SELECTED COORDINATE</p>
        <h2>
          {{ selectedPoint.label || '一个新的坐标' }} <small>{{ selectedPoint.subtitle }}</small>
        </h2>
        <p class="coordinates">{{ formatCoordinates(selectedPoint) }}</p>
        <template v-if="stage === 'earth'"
          ><p class="selection-note">发现这个位置附近的公开影像</p>
          <button class="primary" @click="search()">探索附近影像 <span>↗</span></button></template
        ><SearchState
          v-else
          :status="searchStatus"
          :message="searchError"
          :radius="radius"
          @retry="search()"
          @expand="search"
          @back="back()"
        />
      </section>
      <template v-if="stage === 'earth'"
        ><div v-if="mapError" class="map-status panel" role="alert">
          {{ mapError }}
          <button @click="retryMap">重试地图</button>
        </div>
        <div v-else-if="!mapReady" class="map-status panel" role="status">
          <span class="spinner"></span>正在连接世界地图…
        </div>
        <section class="featured">
          <div class="featured-heading">
            <span class="eyebrow">从这些地方开始</span><small>CURATED COORDINATES</small>
          </div>
          <div class="place-list">
            <button
              v-for="(place, index) in featuredPlaces.slice(0, 4)"
              :key="place.english"
              @click="choose(place)"
            >
              <span class="place-number">0{{ index + 1 }}</span
              ><span
                ><strong>{{ place.label }}</strong
                ><small>{{ place.english }} / {{ place.tag }}</small></span
              ><span class="place-arrow">↗</span>
            </button>
          </div>
        </section></template
      >
      <footer class="earth-footer">
        <span
          ><i class="status-dot"></i
          >{{
            selectedPoint ? formatCoordinates(selectedPoint) : '地球上的每一段故事，值得被看见。'
          }}</span
        ><span>PUBLIC IMAGERY · OPEN EXPLORATION</span>
      </footer>
    </template>
    <PhotoBloom
      v-if="stage === 'blooming'"
      :photos="bloomPhotos"
      :origin="origin"
      @complete="experience.enterGallery()"
    />
    <template v-if="galleryVisible && selectedPoint">
      <GalleryStage
        ref="gallery"
        :photos="photos"
        :active="stage === 'gallery' && !returning && !sculpting"
        :paused="paused"
        @open="experience.openPhoto"
      />
      <PhotoSphere :photos="photos" :active="sculpting" :point="handPoint" />
      <GalleryToolbar
        :point="selectedPoint"
        :count="photos.length"
        :paused="paused"
        :can-load-more="!!nextCursor && photos.length < 200"
        :radius="radius"
        :loading-more="moreLoading"
        :gesture-enabled="gesturesEnabled"
        :returning="returning"
        @back="back()"
        @pause="paused = !paused"
        @gesture="gestureOpen = true"
        @more="experience.loadMore"
        @expand="search(Math.min(10000, radius * 2.5))"
      />
      <div v-if="moreError" class="gallery-error panel" role="alert">
        {{ moreError }} <button @click="experience.loadMore">重试</button>
      </div>
      <footer class="gallery-footer">
        <span
          ><i class="status-dot"></i> {{ formatCoordinates(selectedPoint) }}
          <small> / {{ radius / 1000 }}km</small></span
        ><span class="desktop-hint">拖动浏览 · 滚轮移动 · 点击查看来源 <i>ESC</i> 返回地球</span
        ><span class="mobile-hint">滑动浏览 · 点击查看来源</span>
      </footer>
      <GesturePanel
        v-if="gestureOpen"
        :active="stage === 'gallery' && !returning"
        @close="closeGestures"
        @move="(x, y) => gallery?.shift(x, y)"
        @pause="paused = true"
        @resume="paused = false"
        @overview="gallery?.recenter()"
        @gather="gatherPhotos"
        @release="releasePhotos"
        @position="handPosition"
      />
    </template>
    <PhotoLightbox
      v-if="stage === 'lightbox' && selectedPhoto"
      :photo="selectedPhoto"
      :index="photos.findIndex((p) => p.id === selectedPhoto?.id)"
      :count="photos.length"
      @close="experience.closePhoto"
      @step="experience.stepPhoto"
    />
    <AboutDialog v-if="about" @close="about = false" />
  </main>
</template>
