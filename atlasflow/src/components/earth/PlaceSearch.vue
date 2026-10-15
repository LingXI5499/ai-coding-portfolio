<script setup lang="ts">
import { computed, ref } from 'vue'
import { featuredPlaces } from '../../data/featuredPlaces'
import type { GeoPoint } from '../../types/domain'
const emit = defineEmits<{ select: [point: GeoPoint] }>()
const query = ref('')
const focused = ref(false)
const places = computed(() =>
  featuredPlaces.filter((p) =>
    `${p.label} ${p.english} ${p.subtitle}`.toLowerCase().includes(query.value.toLowerCase()),
  ),
)
function choose(point: GeoPoint) {
  emit('select', point)
  focused.value = false
  query.value = ''
}
function enter() {
  if (places.value[0]) choose(places.value[0])
}
</script>
<template>
  <div
    class="place-search"
    @focusout="
      (event) => {
        if (!(event.currentTarget as HTMLElement).contains(event.relatedTarget as Node))
          focused = false
      }
    "
  >
    <span aria-hidden="true">⌕</span
    ><input
      v-model="query"
      aria-label="搜索精选城市（本地列表）"
      placeholder="寻找一座城市"
      @focus="focused = true"
      @keydown.escape="focused = false"
      @keydown.enter="enter"
    />
    <span class="search-key">精选</span>
    <div v-if="focused" class="search-results panel">
      <p>精选城市 · 本地列表</p>
      <button v-for="place in places" :key="place.english" @click="choose(place)">
        <span
          >{{ place.label }} <small>{{ place.subtitle }}</small></span
        ><small>{{ place.english }} ↗</small>
      </button>
      <p v-if="!places.length">暂无匹配。可直接点击地球的任意位置。</p>
    </div>
  </div>
</template>
