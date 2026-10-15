<script setup lang="ts">
import { ref } from 'vue'
import { useDialogFocus } from '../../composables/useDialogFocus'
defineEmits<{ close: [] }>()
const root = ref<HTMLElement>()
useDialogFocus(root)
</script>
<template>
  <div class="modal-backdrop" @click.self="$emit('close')">
    <section
      ref="root"
      class="about-dialog panel"
      role="dialog"
      aria-modal="true"
      aria-label="使用说明"
    >
      <button class="round-button" aria-label="关闭使用说明" @click="$emit('close')">×</button>
      <p class="eyebrow">A WINDOW TO THE WORLD</p>
      <h2>跟着好奇心，出发。</h2>
      <p>拖动地球，点击坐标或选择精选城市，再探索附近影像。城市搜索是本地精选列表。</p>
      <p>
        照片来自 Wikimedia Commons
        的地理标记公开文件。地理标记不保证照片描绘了精确点击坐标的景物；点击照片即可查看作者、许可证和原始来源。
      </p>
      <p>照片空间支持拖动、滚轮和方向键。Esc 关闭详情，再按一次返回地球。</p>
      <p>
        可选手势：直接使用电脑摄像头，无需手机。握拳将照片聚成随手旋转的光球，张掌散开星尘并移动；点赞继续流动，V
        手势归位。手势面板显示骨架、识别名称与置信度，也有无需摄像头的可点击示例。识别在本机运行，视频不上传、不存储。
      </p>
      <a
        href="https://commons.wikimedia.org/wiki/Commons:API/MediaWiki"
        target="_blank"
        rel="noopener noreferrer"
        >了解公开影像来源 ↗</a
      ><button class="primary" @click="$emit('close')">开始探索 ↗</button>
    </section>
  </div>
</template>
