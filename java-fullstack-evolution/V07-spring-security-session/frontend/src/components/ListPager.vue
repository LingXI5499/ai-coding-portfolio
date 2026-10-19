<script setup>
  defineProps({
    page: Number,
    pageSize: Number,
    total: Number,
    totalPages: Number,
    loading: Boolean,
  });
  const emit = defineEmits(['page', 'page-size']);
</script>
<template>
  <nav class="pagination" aria-label="分页导航">
    <p class="pagination-summary" role="status">
      共 {{ total }} 条 · 第 {{ total ? page : 0 }} / {{ totalPages }} 页
    </p>
    <div class="actions">
      <label>
        每页条数
        <select
          aria-label="每页条数"
          :value="pageSize"
          :disabled="loading"
          @change="emit('page-size', Number($event.target.value))"
        >
          <option
            v-for="size in [5, 10, 20, 50, 100]"
            :key="size"
            :value="size"
          >
            {{ size }}
          </option>
        </select>
      </label>
      <button
        type="button"
        class="secondary"
        :disabled="loading || page <= 1"
        @click="emit('page', page - 1)"
      >
        上一页
      </button>
      <button
        type="button"
        class="secondary"
        :disabled="loading || page >= totalPages"
        @click="emit('page', page + 1)"
      >
        下一页
      </button>
    </div>
  </nav>
</template>
