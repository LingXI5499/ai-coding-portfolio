<script setup lang="ts">
import type { GeoPoint } from '../../types/domain'
import { photoSourceLabel } from '../../services/photoProviders'
const sourceLabel = photoSourceLabel(import.meta.env.VITE_PHOTO_PROVIDER || 'wikimedia')
defineProps<{
  point: GeoPoint
  count: number
  paused: boolean
  canLoadMore: boolean
  loadingMore: boolean
  gestureEnabled: boolean
  returning: boolean
  radius: number
}>()
defineEmits<{ back: []; pause: []; gesture: []; more: []; expand: [] }>()
</script>
<template>
  <header class="gallery-toolbar">
    <button class="back-earth" :disabled="returning" @click="$emit('back')">
      <span>←</span> 返回地球
    </button>
    <div class="gallery-place">
      <h2>
        {{ point.label || '坐标影像' }} <small v-if="point.subtitle">/ {{ point.subtitle }}</small>
      </h2>
      <p>
        {{ radius / 1000 }}km 附近 · {{ count }} 张 · 风景优先
        <span>{{ sourceLabel.toUpperCase() }}</span>
      </p>
    </div>
    <div class="gallery-actions">
      <button v-if="radius < 10000" @click="$emit('expand')">扩大范围</button>
      <button v-if="canLoadMore" :disabled="loadingMore" @click="$emit('more')">
        {{ loadingMore ? '加载中…' : '加载更多' }}</button
      ><button v-if="gestureEnabled" class="gesture-entry" @click="$emit('gesture')">
        ✋ 开启手势</button
      ><button :aria-pressed="paused" @click="$emit('pause')">
        {{ paused ? '▷ 继续流动' : 'Ⅱ 暂停流动' }}
      </button>
    </div>
  </header>
</template>
