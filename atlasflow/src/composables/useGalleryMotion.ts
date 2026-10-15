import { ref, onMounted, onBeforeUnmount, watch, type Ref } from 'vue'
export function useGalleryMotion(
  surface: Ref<HTMLElement | undefined>,
  plane: Ref<HTMLElement | undefined>,
  active: Ref<boolean>,
  paused: Ref<boolean>,
  bounds: () => { width: number; height: number },
) {
  let x = -120,
    y = -80,
    vx = 0,
    vy = 0,
    raf = 0,
    previous = 0,
    lastInput = 0
  let pointer: { id: number; x: number; y: number; startX: number; startY: number } | undefined
  let suppressUntil = 0
  let hovering = false
  const dragging = ref(false)
  const reduced = matchMedia('(prefers-reduced-motion: reduce)')
  const mobile = matchMedia('(max-width: 640px)')
  function clamp() {
    const size = bounds()
    const width = surface.value?.clientWidth || innerWidth
    const height = surface.value?.clientHeight || innerHeight
    x = Math.min(0, Math.max(-Math.max(0, size.width - width + 100), x))
    y = Math.min(0, Math.max(-Math.max(0, size.height - height + 100), y))
  }
  function render(now: number) {
    const dt = Math.min(40, now - (previous || now))
    previous = now
    if (active.value && !document.hidden && !mobile.matches) {
      if (!paused.value && !hovering && !pointer && !reduced.matches && now - lastInput > 1800) {
        x -= dt * 0.009
        if (x <= -Math.max(0, bounds().width - innerWidth + 100)) x = 0
      }
      if (!pointer) {
        x += (vx * dt) / 16
        y += (vy * dt) / 16
        vx *= Math.pow(0.88, dt / 16)
        vy *= Math.pow(0.88, dt / 16)
      }
      clamp()
      if (plane.value) plane.value.style.transform = `translate3d(${x}px,${y}px,0)`
    }
    raf = requestAnimationFrame(render)
  }
  function down(event: PointerEvent) {
    if (!active.value || mobile.matches || event.button !== 0) return
    pointer = {
      id: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      startX: event.clientX,
      startY: event.clientY,
    }
    vx = vy = 0
  }
  function move(event: PointerEvent) {
    hovering = Boolean((event.target as HTMLElement).closest('.photo-card'))
    if (!pointer || pointer.id !== event.pointerId) return
    const dx = event.clientX - pointer.x
    const dy = event.clientY - pointer.y
    if (Math.hypot(event.clientX - pointer.startX, event.clientY - pointer.startY) > 5) {
      dragging.value = true
      surface.value?.setPointerCapture(event.pointerId)
      x += dx
      y += dy
      vx = dx * 0.35
      vy = dy * 0.35
      lastInput = performance.now()
    }
    pointer.x = event.clientX
    pointer.y = event.clientY
  }
  function up() {
    if (dragging.value) suppressUntil = performance.now() + 300
    pointer = undefined
    dragging.value = false
    lastInput = performance.now()
  }
  function wheel(event: WheelEvent) {
    if (!active.value || mobile.matches) return
    event.preventDefault()
    const multiplier = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? innerHeight : 1
    x -= (event.deltaX || event.deltaY) * multiplier * 0.7
    y -= event.deltaX ? event.deltaY * multiplier * 0.4 : 0
    lastInput = performance.now()
  }
  function click(event: MouseEvent) {
    if (performance.now() < suppressUntil) {
      event.preventDefault()
      event.stopPropagation()
    }
  }
  function leave() {
    hovering = false
  }
  function shift(dx: number, dy: number) {
    if (!active.value || mobile.matches) return
    vx = vy = 0
    x += dx
    y += dy
    lastInput = performance.now()
  }
  function resize() {
    if (mobile.matches && plane.value) {
      plane.value.style.transform = ''
      x = y = 0
    }
    clamp()
  }
  function recenter() {
    x = -120
    y = -80
    vx = vy = 0
    lastInput = performance.now()
  }
  watch(active, (value) => {
    if (!value) {
      up()
      vx = vy = 0
    }
  })
  onMounted(() => {
    const el = surface.value!
    el.addEventListener('pointerdown', down)
    el.addEventListener('pointermove', move)
    el.addEventListener('pointerup', up)
    el.addEventListener('pointercancel', up)
    el.addEventListener('pointerleave', leave)
    el.addEventListener('wheel', wheel, { passive: false })
    el.addEventListener('click', click, true)
    window.addEventListener('resize', resize)
    raf = requestAnimationFrame(render)
  })
  onBeforeUnmount(() => {
    cancelAnimationFrame(raf)
    window.removeEventListener('resize', resize)
    const el = surface.value
    el?.removeEventListener('pointerdown', down)
    el?.removeEventListener('pointermove', move)
    el?.removeEventListener('pointerup', up)
    el?.removeEventListener('pointercancel', up)
    el?.removeEventListener('pointerleave', leave)
    el?.removeEventListener('wheel', wheel)
    el?.removeEventListener('click', click, true)
  })
  return { shift, dragging, recenter }
}
