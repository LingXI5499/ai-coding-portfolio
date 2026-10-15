<script setup lang="ts">
import { ref, toRef } from 'vue'
import { useGestureControl } from '../../composables/useGestureControl'
const props = defineProps<{ active: boolean }>()
const emit = defineEmits<{
  close: []
  move: [x: number, y: number]
  pause: []
  resume: []
  overview: []
  gather: []
  release: []
  position: [x: number, y: number]
}>()
const video = ref<HTMLVideoElement>()
const { phase, status, info, landmarks, start, stop } = useGestureControl(
  video,
  toRef(props, 'active'),
  (x, y) => emit('move', x, y),
  () => emit('gather'),
  () => emit('resume'),
  () => emit('overview'),
  () => emit('release'),
  (x, y) => emit('position', x, y),
)
const fingers = [
  [0, 1, 2, 3, 4],
  [0, 5, 6, 7, 8],
  [5, 9, 10, 11, 12],
  [9, 13, 14, 15, 16],
  [13, 17, 18, 19, 20],
  [0, 17],
]
const examples = [
  {
    icon: '✋',
    name: '张掌散开 / 移动',
    detail: '松开照片球，星尘散开；偏离中心浏览',
    action: 'move',
  },
  { icon: '✊', name: '握拳聚合', detail: '照片揉成旋转光球，跟随手的位置', action: 'gather' },
  { icon: '👍', name: '点赞继续', detail: '恢复照片的缓慢自动流动', action: 'resume' },
  { icon: '✌️', name: 'V 手势归位', detail: '回到照片起点，点亮整面影像墙', action: 'overview' },
]
const demo = ref('')
function demonstrate(action: string) {
  demo.value = action
  if (action === 'move') emit('move', -180, -30)
  if (action === 'move') emit('release')
  if (action === 'gather') emit('gather')
  if (action === 'pause') emit('pause')
  if (action === 'resume') emit('resume')
  if (action === 'overview') emit('overview')
}
function close() {
  stop()
  emit('close')
}
</script>
<template>
  <aside class="gesture-panel panel" aria-label="摄像头手势控制">
    <div class="gesture-heading">
      <span class="eyebrow">GESTURE LAB / 手势实验室</span
      ><button aria-label="关闭摄像头及手势面板" @click="close">×</button>
    </div>
    <div class="gesture-camera" :class="{ hidden: phase !== 'running' && phase !== 'starting' }">
      <video ref="video" autoplay playsinline muted></video>
      <svg viewBox="0 0 640 480" class="hand-overlay" aria-label="实时手部骨架">
        <path d="M285 240H355M320 205V275" class="hand-centre" />
        <template v-if="landmarks.length">
          <polyline
            v-for="(finger, i) in fingers"
            :key="i"
            :points="
              finger.map((n) => `${landmarks[n]!.x * 640},${landmarks[n]!.y * 480}`).join(' ')
            "
          />
          <circle
            v-for="(point, i) in landmarks"
            :key="i"
            :cx="point.x * 640"
            :cy="point.y * 480"
            r="5"
          />
        </template>
      </svg>
      <span class="camera-badge">{{
        phase === 'starting' ? '模型准备中' : `${info.hands ? '● 检测到手' : '○ 等待手掌'}`
      }}</span>
    </div>
    <template v-if="phase === 'idle' || phase === 'error'">
      <h3>用手，轻轻拨动世界。</h3>
      <p>
        完整手掌面向镜头，距离约
        40–80cm，保持光线充足。直接使用电脑摄像头，无需连接手机。视频只在本机处理。也可以先点击下方示例体验效果。
      </p>
      <button class="primary" @click="start">
        {{ phase === 'error' ? '重试开启摄像头' : '同意并开启摄像头' }}
      </button>
    </template>
    <div v-if="phase === 'running'" class="gesture-diagnostics">
      <div>
        <strong>{{ info.name }}</strong
        ><span>置信度 {{ Math.round(info.score * 100) }}%</span>
      </div>
      <meter min="0" max="1" :value="info.score" aria-label="手势识别置信度"></meter>
      <small
        >{{ info.hands }} 只手 · {{ info.fps }} FPS · 识别 {{ info.latency }}ms · 独立线程</small
      >
    </div>
    <p class="gesture-status" role="status"><i class="status-dot"></i>{{ status }}</p>
    <p class="gesture-examples-title">操作示例 <small>点击体验效果 · 摄像头无需开启</small></p>
    <div class="gesture-examples">
      <button
        v-for="item in examples"
        :key="item.action"
        :class="{ selected: demo === item.action }"
        @click="demonstrate(item.action)"
      >
        <span>{{ item.icon }}</span
        ><span
          ><strong>{{ item.name }}</strong
          ><small>{{ item.detail }}</small></span
        >
      </button>
    </div>
    <p v-if="demo" class="demo-feedback" role="status">
      示例：{{ examples.find((item) => item.action === demo)?.name }} · 效果已执行
    </p>
    <button v-if="phase === 'starting' || phase === 'running'" class="text-button" @click="close">
      关闭摄像头
    </button>
  </aside>
</template>
