<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import type { PhotoItem, ScreenPoint } from '../../types/domain'
const props = defineProps<{ photos: PhotoItem[]; origin: ScreenPoint }>()
const emit = defineEmits<{ complete: [] }>()
const root = ref<HTMLElement>()
let timeline: gsap.core.Timeline | undefined
function finish() {
  timeline?.kill()
  emit('complete')
}
onMounted(() => {
  const cards = root.value!.querySelectorAll('.bloom-photo')
  const mobile = innerWidth <= 640
  const width = innerWidth
  const height = innerHeight
  const positions = [
    { x: 0.24, y: 0.24 },
    { x: 0.56, y: 0.16 },
    { x: 0.8, y: 0.33 },
    { x: 0.35, y: 0.57 },
    { x: 0.66, y: 0.62 },
    { x: 0.1, y: 0.77 },
    { x: 0.83, y: 0.8 },
    { x: 0.5, y: 0.88 },
  ]
  timeline = gsap.timeline({ onComplete: () => emit('complete') })
  timeline.set(cards, {
    x: props.origin.x,
    y: props.origin.y,
    xPercent: -50,
    yPercent: -50,
    scale: 0.04,
    opacity: 0,
  })
  timeline.to(root.value!.querySelector('.bloom-shade'), { opacity: 1, duration: 1.3 }, 0)
  cards.forEach((card, i) => {
    const pos = positions[i % positions.length]!
    timeline!.to(
      card,
      {
        x: width * pos.x,
        y: height * pos.y,
        scale: 1,
        opacity: 1,
        rotation: ((i % 3) - 1) * 5,
        duration: 1.25,
        ease: 'power3.out',
      },
      i * 0.04,
    )
  })
  timeline.to(cards, { scale: mobile ? 1.05 : 1.15, opacity: 0.4, duration: 0.25 }, 1.25)
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) timeline.timeScale(12)
})
onBeforeUnmount(() => timeline?.kill())
window.addEventListener('resize', finish)
onBeforeUnmount(() => window.removeEventListener('resize', finish))
</script>
<template>
  <div ref="root" class="photo-bloom" aria-label="正在展开照片空间">
    <div class="bloom-shade"></div>
    <img
      v-for="photo in photos"
      :key="photo.id"
      class="bloom-photo"
      :src="photo.thumbnailUrl"
      :alt="photo.title"
    />
  </div>
</template>
