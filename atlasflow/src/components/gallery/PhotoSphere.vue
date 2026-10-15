<script setup lang="ts">
import { computed, ref, watch, nextTick, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import type { PhotoItem } from '../../types/domain'
const props = defineProps<{
  photos: PhotoItem[]
  active: boolean
  point: { x: number; y: number }
}>()
const showing = ref(false)
const canvas = ref<HTMLCanvasElement>()
const root = ref<HTMLElement>()
const pieces = computed(() => props.photos.slice(0, 48))
const progress = { value: 0 }
let tween: gsap.core.Tween | undefined
let lifecycle = 0
let raf = 0,
  previous = 0,
  angle = 0,
  cx = 0,
  cy = 0
let starts: { x: number; y: number; width: number; height: number }[] = []
let elements: HTMLElement[] = []
const reduced = matchMedia('(prefers-reduced-motion: reduce)')
const particles = Array.from({ length: 150 }, (_, i) => ({
  phase: i * 2.399963,
  radius: 120 + (i % 21) * 8,
  speed: 0.2 + (i % 9) * 0.09,
  size: 0.6 + (i % 5) * 0.4,
}))
function resize() {
  if (!canvas.value) return
  const dpr = Math.min(devicePixelRatio, 2)
  canvas.value.width = innerWidth * dpr
  canvas.value.height = innerHeight * dpr
  canvas.value.getContext('2d')?.setTransform(dpr, 0, 0, dpr, 0, 0)
}
function render(now: number) {
  if (!showing.value) return
  const dt = Math.min(40, now - (previous || now))
  previous = now
  if (!document.hidden) {
    angle += reduced.matches ? 0 : dt * 0.00027
    const targetX = Math.max(
      170,
      Math.min(Math.max(170, innerWidth - 510), props.point.x * (innerWidth - 380)),
    )
    const targetY = Math.max(230, Math.min(innerHeight - 230, props.point.y * innerHeight))
    cx += (targetX - cx) * (1 - Math.exp(-dt / 110))
    cy += (targetY - cy) * (1 - Math.exp(-dt / 110))
    const p = progress.value
    const radius = 145 + (reduced.matches ? 0 : Math.sin(now * 0.0018) * 9)
    elements.forEach((element, i) => {
      const start = starts[i]!
      const y = 1 - ((i + 0.5) / elements.length) * 2
      const ring = Math.sqrt(1 - y * y)
      const a = i * 2.399963 + angle
      const x = Math.cos(a) * ring * radius
      const z = Math.sin(a) * ring * radius
      const perspective = 650 / (650 - z)
      const sx = (cx + x * perspective) * p + start.x * (1 - p)
      const sy = (cy + y * radius * perspective) * p + start.y * (1 - p)
      const width = start.width * (1 - p) + 78 * perspective * p
      const height = start.height * (1 - p) + 55 * perspective * p
      element.style.transform = `translate3d(${sx}px,${sy}px,0) translate(-50%,-50%) rotate(${Math.cos(a) * 12 * p}deg)`
      element.style.width = `${width}px`
      element.style.height = `${height}px`
      element.style.zIndex = String(Math.round(z + 200))
      element.style.opacity = String((0.58 + (z / radius + 1) * 0.21) * Math.min(1, p * 4))
      element.style.filter = `brightness(${0.65 + (z / radius + 1) * 0.28})`
    })
    root.value?.style.setProperty('--sphere-x', `${cx}px`)
    root.value?.style.setProperty('--sphere-y', `${cy}px`)
    root.value?.style.setProperty('--sphere-opacity', String(p))
    const ctx = canvas.value?.getContext('2d')
    if (ctx) {
      ctx.clearRect(0, 0, innerWidth, innerHeight)
      ctx.globalCompositeOperation = 'lighter'
      const glow = ctx.createRadialGradient(cx, cy, 5, cx, cy, 350)
      glow.addColorStop(0, `rgba(158,237,218,${p * 0.15})`)
      glow.addColorStop(0.5, `rgba(84,151,179,${p * 0.08})`)
      glow.addColorStop(1, 'rgba(84,151,179,0)')
      ctx.fillStyle = glow
      ctx.fillRect(cx - 350, cy - 350, 700, 700)
      const burst = props.active ? 0 : (1 - p) * 650
      for (const particle of particles) {
        const a = particle.phase + angle * particle.speed
        const r = particle.radius + burst
        const px = cx + Math.cos(a) * r,
          py = cy + Math.sin(a * 1.04) * r * 0.8
        const opacity =
          p *
          (reduced.matches ? 0.5 : 0.3 + Math.abs(Math.sin(now * 0.001 + particle.phase)) * 0.55)
        ctx.fillStyle = `rgba(218,247,224,${opacity})`
        ctx.beginPath()
        ctx.arc(px, py, particle.size, 0, Math.PI * 2)
        ctx.fill()
        if (!props.active) {
          ctx.strokeStyle = `rgba(154,216,214,${opacity * 0.3})`
          ctx.lineWidth = 0.7
          ctx.beginPath()
          ctx.moveTo(px, py)
          ctx.lineTo(px - Math.cos(a) * 24, py - Math.sin(a * 1.04) * 20)
          ctx.stroke()
        }
      }
      for (let i = 0; i < 3; i++) {
        ctx.strokeStyle = `rgba(161,221,209,${p * 0.13})`
        ctx.lineWidth = 0.7
        ctx.beginPath()
        ctx.ellipse(
          cx,
          cy,
          radius + 35 + i * 13,
          radius * (0.4 + i * 0.16),
          angle + i,
          0,
          Math.PI * 2,
        )
        ctx.stroke()
      }
    }
  }
  raf = requestAnimationFrame(render)
}
watch(
  () => props.active,
  async (value) => {
    const generation = ++lifecycle
    tween?.kill()
    if (value) {
      const cards = Array.from(document.querySelectorAll<HTMLElement>('.gallery-slot')).slice(
        0,
        pieces.value.length,
      )
      starts = cards.map((card) => {
        const rect = card.getBoundingClientRect()
        return {
          x: Math.max(-180, Math.min(innerWidth + 180, rect.left + rect.width / 2)),
          y: rect.top + rect.height / 2,
          width: rect.width,
          height: rect.height,
        }
      })
      const wasShowing = showing.value
      showing.value = true
      if (!wasShowing) {
        progress.value = 0
        cx = props.point.x * innerWidth
        cy = props.point.y * innerHeight
      }
      await nextTick()
      if (generation !== lifecycle || !root.value) return
      elements = Array.from(root.value!.querySelectorAll<HTMLElement>('.sphere-photo'))
      resize()
      cancelAnimationFrame(raf)
      previous = 0
      raf = requestAnimationFrame(render)
      tween = gsap.to(progress, {
        value: 1,
        duration: reduced.matches ? 0.15 : 1.15,
        ease: 'power3.inOut',
      })
    } else if (showing.value) {
      tween = gsap.to(progress, {
        value: 0,
        duration: reduced.matches ? 0.15 : 1.25,
        ease: 'power2.inOut',
        onComplete: () => {
          showing.value = false
          cancelAnimationFrame(raf)
        },
      })
    }
  },
)
window.addEventListener('resize', resize)
onBeforeUnmount(() => {
  lifecycle++
  tween?.kill()
  cancelAnimationFrame(raf)
  window.removeEventListener('resize', resize)
})
</script>
<template>
  <section
    v-if="showing"
    ref="root"
    class="photo-sphere"
    :data-state="active ? 'gathered' : 'releasing'"
    aria-label="旋转照片球与星尘粒子"
  >
    <canvas ref="canvas" class="sphere-particles" aria-label="星尘粒子动画"></canvas>
    <div class="sphere-aura"></div>
    <img
      v-for="photo in pieces"
      :key="photo.id"
      class="sphere-photo"
      :src="photo.thumbnailUrl"
      alt=""
      draggable="false"
    />
    <div class="sphere-caption">
      <span>HOLD A LITTLE WORLD</span>
      <p>{{ active ? '握住一方世界' : '让记忆，回到星海' }}</p>
      <small>{{
        active ? '照片球随手移动 · 张开手掌，让影像与星尘散开' : '星尘散开 · 影像归位'
      }}</small>
    </div>
  </section>
</template>
