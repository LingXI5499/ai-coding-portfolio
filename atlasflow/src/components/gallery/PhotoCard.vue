<script setup lang="ts">
import { ref } from 'vue'
import type { PhotoItem } from '../../types/domain'
import { photoSourceLabel } from '../../services/photoProviders'
defineProps<{ photo: PhotoItem; index: number }>()
defineEmits<{ open: [id: string] }>()
const failed = ref(false)
</script>
<template>
  <button
    class="photo-card"
    :aria-label="`查看照片：${photo.title}`"
    @click="$emit('open', photo.id)"
  >
    <div v-if="failed" class="photo-fallback">
      <span>◌</span>
      <p>这张缩略图暂时无法加载</p>
      <small>点击查看来源信息</small>
    </div>
    <img
      v-else
      :src="photo.thumbnailUrl"
      :alt="photo.title"
      :loading="index < 8 ? 'eager' : 'lazy'"
      decoding="async"
      draggable="false"
      @error="failed = true"
    />
    <div class="photo-caption">
      <span>{{ photo.title.replace(/\.(jpg|jpeg|png|webp)$/i, '') }}</span
      ><small>{{ photoSourceLabel(photo.source).toUpperCase() }} ↗</small>
    </div>
    <span class="photo-index">{{ String(index + 1).padStart(2, '0') }}</span>
  </button>
</template>
