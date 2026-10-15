<script setup lang="ts">
import { ref, watch, nextTick, onMounted } from "vue";
const model = defineModel<string>({ required: true });
defineProps<{ label: string; multiline?: boolean; hint?: string }>();
const area = ref<HTMLTextAreaElement>();
function resize() {
  if (area.value) {
    area.value.style.height = "auto";
    area.value.style.height = `${area.value.scrollHeight}px`;
  }
}
watch(model, () => nextTick(resize));
onMounted(resize);
</script>
<template>
  <label class="field"
    ><span>{{ label }}</span
    ><textarea
      v-if="multiline"
      ref="area"
      v-model="model"
      :aria-label="label"
      rows="2"
      @input="resize"
    /><input v-else v-model="model" :aria-label="label" /><small v-if="hint">{{
      hint
    }}</small
    ><small v-if="model.length > 1500" class="warning"
      >这段内容较长（{{ model.length }} 字），请留意右侧超页提示。</small
    ></label
  >
</template>
