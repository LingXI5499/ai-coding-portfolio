<script setup lang="ts">
import { ref, nextTick } from "vue";
import ResumeSheet from "../components/ResumeSheet.vue";
import { resumeSchema, type ResumeDocument } from "../models/resume";
import { measureSheet, checkResources } from "../services/measure";
const resume = ref<ResumeDocument>();
declare global {
  interface Window {
    __RESUME_PRINT_RENDER__?: (
      data: ResumeDocument,
    ) => Promise<{ verticalMm: number; horizontalMm: number }>;
  }
}
window.__RESUME_PRINT_RENDER__ = async (data) => {
  resume.value = resumeSchema.parse(data);
  await nextTick();
  const sheet = document.querySelector<HTMLElement>(".resume-sheet")!;
  await checkResources(sheet);
  await new Promise(requestAnimationFrame);
  return measureSheet(sheet);
};
</script>
<template>
  <main class="print-root"><ResumeSheet v-if="resume" :resume="resume" /></main>
</template>
