import { ref, shallowRef, onBeforeUnmount, watch, type Ref } from 'vue'
import type { GestureRecognizerResult } from '@mediapipe/tasks-vision'
import { GestureMotionFilter, gestureLabels } from '../utils/gestureMotion'
export function useGestureControl(
  video: Ref<HTMLVideoElement | undefined>,
  active: Ref<boolean>,
  move: (x: number, y: number) => void,
  gather: () => void,
  resume: () => void,
  overview: () => void,
  release: () => void,
  position: (x: number, y: number) => void,
) {
  const status = ref('尚未开启摄像头')
  const phase = ref<'idle' | 'starting' | 'running' | 'error'>('idle')
  const info = ref({
    name: '等待识别',
    score: 0,
    hands: 0,
    fps: 0,
    latency: 0,
    action: '将手掌放在画面中心',
  })
  const landmarks = shallowRef<{ x: number; y: number }[]>([])
  let stream: MediaStream | undefined, worker: Worker | undefined
  let raf = 0,
    generation = 0,
    previousFrame = 0,
    previousVideo = -1,
    lastResult = 0
  let pending = false
  let loadingTimer: ReturnType<typeof setTimeout> | undefined
  const filter = new GestureMotionFilter()
  let gathered = false
  function stop() {
    generation++
    cancelAnimationFrame(raf)
    clearTimeout(loadingTimer)
    worker?.terminate()
    worker = undefined
    stream?.getTracks().forEach((track) => track.stop())
    stream = undefined
    filter.reset()
    if (gathered) release()
    gathered = false
    landmarks.value = []
    pending = false
    if (video.value) video.value.srcObject = null
    phase.value = 'idle'
    status.value = '摄像头已关闭'
  }
  function fail(message: string) {
    stop()
    phase.value = 'error'
    status.value = message
  }
  function receive(result: GestureRecognizerResult, latency: number) {
    const now = performance.now()
    const elapsed = lastResult ? now - lastResult : 80
    lastResult = now
    const points = result.landmarks[0] || []
    landmarks.value = points
    const category = result.gestures[0]?.[0]
    const name = category?.categoryName || 'None'
    const score = category?.score || 0
    const wrist = points[0],
      middle = points[9]
    if (wrist && middle) position(1 - (wrist.x + middle.x) / 2, (wrist.y + middle.y) / 2)
    const output = filter.update(
      name,
      score,
      wrist && middle ? { x: (wrist.x + middle.x) / 2, y: (wrist.y + middle.y) / 2 } : undefined,
      elapsed,
    )
    info.value = {
      name: points.length ? gestureLabels[name] || name : '未检测到手',
      score,
      hands: result.landmarks.length,
      fps: Math.round(1000 / Math.max(1, elapsed)),
      latency: Math.round(latency),
      action: points.length
        ? score < 0.55
          ? '姿势不稳定 · 请面向镜头，保持手指完整可见'
          : '保持姿势约 0.3 秒'
        : '未检测到手 · 请将完整手掌放入画面，保持充足光线',
    }
    if (output.kind === 'move') {
      if (gathered) {
        release()
        gathered = false
      } else move(output.dx, output.dy)
      info.value.action =
        Math.abs(output.dx) + Math.abs(output.dy) < 1
          ? '中心停留 · 向两侧 / 上下移动手掌开始浏览'
          : `影像移动 ${output.dx < 0 ? '←' : output.dx > 0 ? '→' : ''} ${output.dy < 0 ? '↑' : output.dy > 0 ? '↓' : ''}`
    } else if (output.kind === 'gather') {
      gather()
      gathered = true
      info.value.action = '✦ 握拳 · 照片正在聚合成球'
    } else if (output.kind === 'resume') {
      if (gathered) {
        release()
        gathered = false
      }
      resume()
      info.value.action = '▷ 已恢复自动流动'
    } else if (output.kind === 'overview') {
      if (gathered) {
        release()
        gathered = false
      }
      overview()
      info.value.action = '✦ 已回到照片起点'
    } else if (name === 'Closed_Fist' && score >= 0.55)
      info.value.action = '✦ 照片球跟随手移动 · 张掌散开'
    else if (name === 'Thumb_Up' && score >= 0.55) info.value.action = '▷ 点赞 · 自动流动'
    else if (name === 'Victory' && score >= 0.55) info.value.action = '✦ V 手势 · 照片起点'
    status.value = info.value.action
  }
  async function start() {
    if (phase.value === 'starting' || phase.value === 'running') return
    if (!window.isSecureContext || !navigator.mediaDevices?.getUserMedia) {
      fail('此浏览器无法使用摄像头，请使用 HTTPS 或 localhost。')
      return
    }
    const id = ++generation
    phase.value = 'starting'
    status.value = '等待摄像头权限…'
    try {
      const media = await navigator.mediaDevices.getUserMedia({
        video: { width: { ideal: 640 }, height: { ideal: 480 }, frameRate: { ideal: 24 } },
        audio: false,
      })
      if (id !== generation) {
        media.getTracks().forEach((track) => track.stop())
        return
      }
      stream = media
      video.value!.srcObject = media
      await video.value!.play()
      if (id !== generation) return
      status.value = '正在准备本地识别模型…'
      worker = new Worker(new URL('../workers/gesture.worker.ts', import.meta.url), {
        type: 'module',
      })
      loadingTimer = setTimeout(() => {
        if (id === generation) fail('本地模型加载超时，请重试开启摄像头。')
      }, 30000)
      worker.onerror = () => {
        if (id === generation) fail('识别线程初始化失败，请重试。')
      }
      worker.onmessage = ({ data }) => {
        if (id !== generation) return
        if (data.type === 'ready') {
          clearTimeout(loadingTimer)
          phase.value = 'running'
          status.value = '摄像头已开启 · 请在镜头前张开手掌'
        } else if (data.type === 'result') {
          pending = false
          if (active.value && !document.hidden) receive(data.result, data.latency)
        } else if (data.type === 'error') fail('手势模型运行失败，请关闭后重试。')
      }
      worker.postMessage({
        type: 'init',
        wasmUrl: new URL('/mediapipe/wasm', location.href).href,
        modelUrl:
          import.meta.env.VITE_GESTURE_MODEL_URL ||
          new URL('/mediapipe/gesture_recognizer.task', location.href).href,
      })
      previousFrame = 0
      previousVideo = -1
      lastResult = 0
      const frame = (now: number) => {
        if (id !== generation || !worker) return
        if (
          phase.value === 'running' &&
          active.value &&
          !document.hidden &&
          !pending &&
          now - previousFrame >= 80 &&
          video.value &&
          video.value.readyState >= 2 &&
          video.value.currentTime !== previousVideo
        ) {
          pending = true
          previousFrame = now
          previousVideo = video.value.currentTime
          createImageBitmap(video.value)
            .then((bitmap) => {
              if (id !== generation || !worker) {
                bitmap.close()
                return
              }
              worker.postMessage({ type: 'frame', bitmap, timestamp: now }, [bitmap])
            })
            .catch(() => {
              if (id === generation) fail('无法读取摄像头画面，请重试。')
            })
        }
        raf = requestAnimationFrame(frame)
      }
      raf = requestAnimationFrame(frame)
    } catch (error) {
      if (id !== generation) return
      const name = error instanceof Error ? error.name : ''
      fail(
        name === 'NotAllowedError'
          ? '摄像头权限未获允许。你仍可使用鼠标和触摸浏览。'
          : name === 'NotFoundError'
            ? '未找到可用摄像头。'
            : name === 'NotReadableError'
              ? '摄像头正被其他应用占用，请关闭占用后重试。'
              : '摄像头或识别模型初始化失败，请重试。',
      )
    }
  }
  watch(active, (value) => {
    if (!value) {
      filter.reset()
      status.value = '查看大图中 · 手势已暂停'
    }
  })
  onBeforeUnmount(stop)
  return { phase, status, info, landmarks, start, stop }
}
