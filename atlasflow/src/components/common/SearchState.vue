<script setup lang="ts">
import { photoSourceLabel } from '../../services/photoProviders'
const sourceLabel = photoSourceLabel(import.meta.env.VITE_PHOTO_PROVIDER || 'wikimedia')
defineProps<{
  status: 'loading' | 'empty' | 'error' | 'preloading'
  message: string
  radius: number
}>()
defineEmits<{ retry: []; expand: [radius: number]; back: [] }>()
</script>
<template>
  <div class="search-state" :role="status === 'error' ? 'alert' : 'status'">
    <template v-if="status === 'loading' || status === 'preloading'"
      ><div class="search-loader">
        <span class="spinner"></span>
        <p>
          {{
            status === 'preloading' ? '正在准备影像，让它们从这里浮现…' : '正在寻找附近的公开影像…'
          }}
        </p>
      </div>
      <div class="skeleton-row"><i></i><i></i><i></i></div>
      <small>{{ sourceLabel }} · 实时地理检索</small></template
    >
    <template v-else-if="status === 'empty'"
      ><p>此位置附近暂未检索到可展示的公开影像。</p>
      <small>已搜索约 {{ radius / 1000 }}km，试着把视野放大一点。</small>
      <div class="radius-actions">
        <button @click="$emit('expand', 2000)">2km</button
        ><button @click="$emit('expand', 5000)">5km</button
        ><button class="primary" @click="$emit('expand', 10000)">搜索 10km</button>
      </div></template
    >
    <template v-else
      ><p>{{ message }}</p>
      <button class="primary" @click="$emit('retry')">重新尝试 ↻</button></template
    >
    <button class="text-button back-search" @click="$emit('back')">← 返回地球</button>
  </div>
</template>
