<script setup lang="ts">
import { computed, ref, toRef, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import PhotoCard from './PhotoCard.vue'
import { useGalleryMotion } from '../../composables/useGalleryMotion'
import type { PhotoItem, ScreenPoint } from '../../types/domain'
const props = defineProps<{ photos: PhotoItem[]; active: boolean; paused: boolean }>()
const emit = defineEmits<{ open: [id: string] }>()
const surface = ref<HTMLElement>()
const plane = ref<HTMLElement>()
const layout = computed(() =>
  props.photos.map((photo, i) => {
    const col = Math.floor(i / 3)
    const row = i % 3
    const width = [300, 240, 325, 270][i % 4]!
    const height = Math.max(160, Math.min(310, (width * photo.height) / photo.width))
    return {
      photo,
      x: col * 350 + (row === 1 ? 75 : 15),
      y: row * 330 + [15, 55, 30, 0][i % 4]!,
      width,
      height,
      rotation: [0, -2, 1.8, -0.8][i % 4]!,
    }
  }),
)
const size = computed(() => ({
  width: Math.max(innerWidth, Math.ceil(props.photos.length / 3) * 350 + 120),
  height: 1060,
}))
const {
  shift,
  dragging,
  recenter: resetPosition,
} = useGalleryMotion(
  surface,
  plane,
  toRef(props, 'active'),
  toRef(props, 'paused'),
  () => size.value,
)
let reverse: gsap.core.Timeline | undefined
const pulse = ref(false)
let pulseTimer: ReturnType<typeof setTimeout>
function recenter() {
  resetPosition()
  pulse.value = true
  clearTimeout(pulseTimer)
  pulseTimer = setTimeout(() => {
    pulse.value = false
  }, 900)
}
let resolveReverse: (() => void) | undefined
function collapse(origin: ScreenPoint): Promise<void> {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || innerWidth <= 640)
    return Promise.resolve()
  return new Promise((resolve) => {
    resolveReverse = resolve
    reverse = gsap.timeline({ onComplete: resolve })
    const cards = Array.from(plane.value!.querySelectorAll<HTMLElement>('.gallery-slot'))
    cards.slice(0, 12).forEach((card, i) => {
      const rect = card.getBoundingClientRect()
      reverse!.to(
        card,
        {
          x: origin.x - rect.left - rect.width / 2,
          y: origin.y - rect.top - rect.height / 2,
          scale: 0.03,
          opacity: 0,
          duration: 0.45,
          ease: 'power2.in',
        },
        Math.min(i * 0.01, 0.08),
      )
    })
    reverse.to(surface.value!, { opacity: 0, duration: 0.4 }, 0.12)
  })
}
onBeforeUnmount(() => {
  clearTimeout(pulseTimer)
  reverse?.kill()
  resolveReverse?.()
})
defineExpose({ shift, collapse, recenter })
</script>
<template>
  <section
    ref="surface"
    class="gallery-surface"
    :class="{ dragging, 'gesture-pulse': pulse }"
    aria-label="照片空间，拖动或滚轮浏览"
    tabindex="0"
    @keydown.left.prevent="shift(140, 0)"
    @keydown.right.prevent="shift(-140, 0)"
    @keydown.up.prevent="shift(0, 140)"
    @keydown.down.prevent="shift(0, -140)"
  >
    <div
      ref="plane"
      class="gallery-plane"
      :style="{ width: `${size.width}px`, height: `${size.height}px` }"
    >
      <div
        v-for="(item, i) in layout"
        :key="item.photo.id"
        class="gallery-slot"
        :style="{
          left: `${item.x}px`,
          top: `${item.y}px`,
          width: `${item.width}px`,
          height: `${item.height}px`,
          '--tilt': `${item.rotation}deg`,
          '--ratio': `${item.photo.width}/${item.photo.height}`,
        }"
      >
        <PhotoCard :photo="item.photo" :index="i" @open="emit('open', $event)" />
      </div>
    </div>
  </section>
</template>
