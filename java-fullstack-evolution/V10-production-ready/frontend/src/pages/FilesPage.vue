<script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  import {
    ElConfigProvider,
    ElAlert,
    ElButton,
    ElTable,
    ElTableColumn,
  } from 'element-plus';
  import zhCn from 'element-plus/es/locale/lang/zh-cn';
  import { api, restore } from '../api';
  import { auth } from '../state';
  import { usePagedList } from '../composables/usePagedList';
  import ListPager from '../components/ListPager.vue';

  const selected = ref(null),
    input = ref(null),
    busy = ref(false),
    ready = ref(false);
  const error = ref(''),
    message = ref(''),
    previewUrl = ref('');
  const files = usePagedList('/files', {});
  let previewSequence = 0;
  const maxBytes = 2 * 1024 * 1024;
  onMounted(async () => {
    try {
      if (!auth.user) auth.user = await restore();
      ready.value = true;
      await files.load();
    } catch (failure) {
      error.value = failure.message;
    }
  });
  function selectFile(event) {
    error.value = '';
    message.value = '';
    selected.value = null;
    const candidate = event.target.files?.[0];
    if (!candidate) return;
    if (
      !['image/png', 'image/jpeg'].includes(candidate.type) ||
      candidate.size > maxBytes
    ) {
      error.value = '请选择不超过 2 MiB 的 PNG/JPEG 图片';
      return;
    }
    selected.value = candidate;
  }
  async function upload() {
    if (!selected.value || busy.value) return;
    busy.value = true;
    error.value = '';
    message.value = '';
    try {
      const form = new FormData();
      form.append('file', selected.value);
      // 不手动写 Content-Type，浏览器会生成 multipart boundary。
      await api.post('/files', form);
      selected.value = null;
      if (input.value) input.value.value = '';
      files.pagination.page = 1;
      await files.load();
      message.value = '上传成功，图片已重新编码并保存在私有存储中';
    } catch (failure) {
      error.value = failure.message;
    } finally {
      busy.value = false;
    }
  }
  function releasePreview() {
    if (previewUrl.value) URL.revokeObjectURL(previewUrl.value);
    previewUrl.value = '';
  }
  async function preview(id) {
    const request = ++previewSequence;
    error.value = '';
    releasePreview();
    try {
      // 图片接口也走 Bearer 鉴权；获取 Blob 后才能交给 img，令牌不进入 URL。
      const blob = await api.get(`/files/${id}/content`, {
        responseType: 'blob',
      });
      if (request === previewSequence)
        previewUrl.value = URL.createObjectURL(blob);
    } catch (failure) {
      if (request === previewSequence) error.value = failure.message;
    }
  }
  onBeforeUnmount(() => {
    previewSequence++;
    releasePreview();
  });
</script>
<template>
  <ElConfigProvider :locale="zhCn">
    <section class="card">
      <h2>文件上传练习</h2>
      <p>
        PNG/JPEG，输入与重新编码后均不超过 2 MiB，最多 400
        万像素。每个账户最多保留 20 张图片，仅本人可读取。
      </p>
      <ElAlert
        v-if="error || files.error.value"
        :title="error || files.error.value"
        type="error"
        :closable="false"
        role="alert"
      />
      <ElAlert
        v-if="message"
        :title="message"
        type="success"
        :closable="false"
        role="status"
      />
      <form v-if="ready" class="stack" @submit.prevent="upload">
        <label>
          选择学习图片
          <input
            ref="input"
            type="file"
            accept="image/png,image/jpeg"
            :disabled="busy"
            @change="selectFile"
          />
        </label>
        <ElButton
          native-type="submit"
          type="primary"
          :disabled="busy || !selected"
        >
          {{ busy ? '正在上传…' : '上传图片' }}
        </ElButton>
      </form>
      <ElTable :data="files.records.value" empty-text="还没有上传图片">
        <ElTableColumn prop="originalName" label="原文件名" min-width="180" />
        <ElTableColumn prop="size" label="大小（字节）" width="140" />
        <ElTableColumn label="操作" width="110">
          <template #default="scope">
            <ElButton @click="preview(scope.row.id)">预览</ElButton>
          </template>
        </ElTableColumn>
      </ElTable>
      <ListPager
        v-bind="files.pagination"
        :loading="files.loading.value"
        @page="files.changePage"
        @page-size="files.changePageSize"
      />
      <img
        v-if="previewUrl"
        :src="previewUrl"
        alt="已上传图片预览"
        class="file-preview"
      />
    </section>
  </ElConfigProvider>
</template>
<style scoped>
  .file-preview {
    display: block;
    max-width: 100%;
    max-height: 420px;
    margin-top: 24px;
    object-fit: contain;
  }
  .stack {
    margin: 24px 0;
    max-width: 480px;
  }
</style>
