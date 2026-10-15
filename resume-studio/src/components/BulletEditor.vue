<script setup lang="ts">
import TextField from "./TextField.vue";
import { move, type Bullet } from "../models/resume";
defineProps<{ items: Bullet[]; title: string }>();
const emit = defineEmits<{ remove: [items: Bullet[], index: number] }>();
const add = (items: Bullet[]) =>
  items.push({ id: crypto.randomUUID(), label: "", content: "" });
</script>
<template>
  <div class="bullet-editor">
    <div v-for="(item, index) in items" :key="item.id" class="item-card">
      <div class="item-bar">
        <span>{{ title }} {{ String(index + 1).padStart(2, "0") }}</span>
        <div>
          <button
            type="button"
            :aria-label="`${title}${index + 1}上移`"
            :disabled="index === 0"
            @click="move(items, index, -1)"
          >
            ↑</button
          ><button
            type="button"
            :aria-label="`${title}${index + 1}下移`"
            :disabled="index === items.length - 1"
            @click="move(items, index, 1)"
          >
            ↓</button
          ><button
            type="button"
            class="danger-text"
            :aria-label="`删除${title}${index + 1}`"
            @click="emit('remove', items, index)"
          >
            删除
          </button>
        </div>
      </div>
      <TextField
        v-model="item.label"
        :label="`${title}${index + 1}标题`"
      /><TextField
        v-model="item.content"
        :label="`${title}${index + 1}内容`"
        multiline
      />
    </div>
    <button type="button" class="add-button" @click="add(items)">
      ＋ 添加{{ title }}
    </button>
  </div>
</template>
