<script setup lang="ts">
import { ref, watch, onBeforeUnmount } from 'vue'
import { loadPhotoPreview, photoSourceLabel } from '../../services/photoProviders'
import { useDialogFocus } from '../../composables/useDialogFocus'
import type { PhotoItem } from '../../types/domain'
const props = defineProps<{ photo: PhotoItem; index: number; count: number }>()
defineEmits<{ close: []; step: [direction: number] }>()
const root = ref<HTMLElement>()
useDialogFocus(root)
const imageUrl = ref('')
const failed = ref(false)
const notice = ref('')
let controller: AbortController | undefined
watch(
  () => props.photo.id,
  async () => {
    controller?.abort()
    const request = new AbortController()
    controller = request
    imageUrl.value = props.photo.thumbnailUrl
    failed.value = false
    notice.value = '正在加载更清晰的预览…'
    try {
      const url = await loadPhotoPreview(props.photo, request.signal)
      if (!request.signal.aborted) {
        imageUrl.value = url
        notice.value = ''
      }
    } catch {
      if (!request.signal.aborted) notice.value = '高清预览暂不可用，已保留缩略图。'
    }
  },
  { immediate: true },
)
function imageError() {
  if (imageUrl.value !== props.photo.thumbnailUrl) {
    imageUrl.value = props.photo.thumbnailUrl
    notice.value = '高清预览暂不可用，已保留缩略图。'
  } else failed.value = true
}
onBeforeUnmount(() => controller?.abort())
</script>
<template>
  <div class="modal-backdrop" @click.self="$emit('close')">
    <section
      ref="root"
      class="lightbox"
      role="dialog"
      aria-modal="true"
      aria-labelledby="photo-title"
      tabindex="-1"
    >
      <div class="lightbox-top">
        <span class="eyebrow"
          >THE PUBLIC ARCHIVE <small>{{ index + 1 }} / {{ count }}</small></span
        ><button class="round-button" aria-label="关闭照片详情" @click="$emit('close')">×</button>
      </div>
      <div class="lightbox-image">
        <button class="viewer-arrow previous" aria-label="上一张照片" @click="$emit('step', -1)">
          ‹</button
        ><img
          v-if="!failed"
          :src="imageUrl"
          :alt="photo.title"
          decoding="async"
          @error="imageError"
        />
        <div v-else class="photo-fallback">预览暂时无法加载，可访问下方原始文件页。</div>
        <button class="viewer-arrow next" aria-label="下一张照片" @click="$emit('step', 1)">
          ›
        </button>
      </div>
      <div class="lightbox-info">
        <div>
          <h2 id="photo-title">{{ photo.title.replace(/^File:/, '') }}</h2>
          <p>{{ photo.author || '作者信息未提供，请在原始文件页确认。' }}</p>
          <p class="license">
            {{ photo.license || '请在原始文件页确认作者及使用许可' }}
            <a
              v-if="photo.licenseUrl"
              :href="photo.licenseUrl"
              target="_blank"
              rel="noopener noreferrer"
              >许可详情 ↗</a
            >
          </p>
        </div>
        <a
          class="source-link"
          :href="photo.originalPageUrl"
          target="_blank"
          rel="noopener noreferrer"
          >{{ photoSourceLabel(photo.source) }} 原始文件页 ↗</a
        >
      </div>
      <p class="lightbox-note" role="status">
        {{ notice || '该位置附近的公开影像 · 地理标记不代表照片描绘了精确点击坐标的景物。' }}
      </p>
    </section>
  </div>
</template>
