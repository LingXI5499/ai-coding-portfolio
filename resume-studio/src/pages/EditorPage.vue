<script setup lang="ts">
import {
  ref,
  computed,
  watch,
  nextTick,
  onMounted,
  onBeforeUnmount,
  toRaw,
} from "vue";
import ResumeSheet from "../components/ResumeSheet.vue";
import ResumeEditor from "../components/ResumeEditor.vue";
import { state, initStore, flush, replaceData } from "../services/store";
import {
  clone,
  copyVersion,
  parseBackup,
  mergeBackup,
  filename,
  resumeSchema,
  type Backup,
} from "../models/resume";
import { checkResources, measureSheet } from "../services/measure";
const current = computed(() =>
  state.data?.versions.find((v) => v.id === state.data?.selectedId),
);
const preview = ref<HTMLElement>(),
  viewport = ref<HTMLElement>();
const zoom = ref(0.8),
  autoFit = ref(true),
  tab = ref("edit"),
  exporting = ref(false),
  message = ref(""),
  resourceError = ref(""),
  backupMode = ref("all"),
  importMode = ref("merge"),
  pendingImport = ref<Backup>(),
  importInput = ref<HTMLInputElement>();
const bounds = ref({ verticalMm: 0, horizontalMm: 0 });
const overflowing = computed(
  () => bounds.value.verticalMm > 0 || bounds.value.horizontalMm > 0,
);
const validationError = computed(() => {
  if (!current.value) return "";
  const result = resumeSchema.safeParse(current.value.resume);
  return result.success
    ? ""
    : result.error.issues
        .map((x) => `${x.path.join(".")}：${x.message}`)
        .join("；");
});
let observer: ResizeObserver | undefined,
  checkId = 0;
function fit() {
  if (autoFit.value && viewport.value)
    zoom.value = Math.max(
      0.35,
      Math.min(1, (viewport.value.clientWidth - 80) / ((210 * 96) / 25.4)),
    );
}
async function check() {
  await nextTick();
  const sheet = preview.value?.querySelector<HTMLElement>(".resume-sheet");
  if (!sheet) return;
  bounds.value = measureSheet(sheet);
  const id = ++checkId;
  try {
    await checkResources(sheet);
    if (id === checkId) resourceError.value = "";
  } catch (e) {
    if (id === checkId) resourceError.value = String(e);
  }
  bounds.value = measureSheet(sheet);
}
onMounted(async () => {
  await initStore();
  await nextTick();
  observer = new ResizeObserver(() => {
    fit();
    void check();
  });
  if (viewport.value) observer.observe(viewport.value);
  const sheet = preview.value?.querySelector<HTMLElement>(".resume-sheet");
  if (sheet) observer.observe(sheet);
  fit();
  void check();
});
onBeforeUnmount(() => observer?.disconnect());
watch(
  () => current.value?.resume,
  () => {
    void check();
  },
  { deep: true },
);
watch(
  () =>
    current.value && [
      current.value.id,
      current.value.resume,
      current.value.name,
      current.value.note,
    ],
  (value, previous) => {
    if (current.value && previous && value?.[0] === previous[0])
      current.value.updatedAt = new Date().toISOString();
  },
  { deep: true },
);
watch(zoom, () => {
  void check();
});
async function switchVersion(event: Event) {
  const id = (event.target as HTMLSelectElement).value;
  try {
    await flush();
    state.data!.selectedId = id;
    await flush();
  } catch (e) {
    message.value = String(e);
    (event.target as HTMLSelectElement).value = state.data!.selectedId;
  }
}
async function duplicate() {
  const name = window.prompt("新版本名称", `${current.value!.name} · 副本`);
  if (!name?.trim()) return;
  try {
    await flush();
    const v = copyVersion(toRaw(current.value!), name.trim());
    state.data!.versions.push(v);
    state.data!.selectedId = v.id;
    await flush();
  } catch (e) {
    message.value = String(e);
  }
}
function rename() {
  const name = window.prompt("重命名当前版本", current.value!.name);
  if (name?.trim()) current.value!.name = name.trim();
}
async function deleteVersion() {
  if (
    state.data!.versions.length === 1 ||
    !window.confirm(
      `确定删除“${current.value!.name}”？删除后无法恢复，请先备份。`,
    )
  )
    return;
  try {
    await flush();
    state.data!.versions = state.data!.versions.filter(
      (v) => v.id !== current.value!.id,
    );
    state.data!.selectedId = state.data!.versions[0]!.id;
    await flush();
  } catch (e) {
    message.value = String(e);
  }
}
function remove(items: any[], index: number) {
  if (window.confirm("确定删除这一项？建议先导出 JSON 备份。"))
    items.splice(index, 1);
}
function download(blob: Blob, name: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
function dataUrl(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}
async function backup() {
  try {
    const data = clone(toRaw(state.data!));
    if (backupMode.value === "current") {
      data.versions = [clone(toRaw(current.value!))];
      data.selectedId = current.value!.id;
    }
    for (const v of data.versions) {
      if (v.resume.profile.photoAsset === "/assets/resume-photo.png") {
        const response = await fetch("/assets/resume-photo.png");
        if (!response.ok)
          throw new Error("原证件照读取失败，请恢复照片后备份。");
        v.resume.profile.photoAsset = await dataUrl(await response.blob());
      }
    }
    download(
      new Blob([JSON.stringify(data, null, 2)], { type: "application/json" }),
      `resume-studio-backup-${new Date().toISOString().slice(0, 10)}.json`,
    );
    message.value = "JSON 备份已下载，包含完整版本与照片。";
  } catch (e) {
    message.value = `备份失败：${String(e)}`;
  }
}
async function readImport(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0];
  (event.target as HTMLInputElement).value = "";
  if (!file) return;
  try {
    if (file.size > 20 * 1024 * 1024)
      throw new Error("备份超过 20MB，请拆分为当前版本备份后导入。");
    pendingImport.value = parseBackup(JSON.parse(await file.text()));
    message.value = "";
  } catch (e) {
    message.value = `导入失败，原数据未改变：${String(e)}`;
  }
}
async function applyImport() {
  if (!pendingImport.value) return;
  if (
    importMode.value === "replace" &&
    !window.confirm("替换会删除当前所有版本，确定已备份并继续？")
  )
    return;
  try {
    const next =
      importMode.value === "merge"
        ? mergeBackup(clone(toRaw(state.data!)), pendingImport.value)
        : pendingImport.value;
    await replaceData(clone(next));
    pendingImport.value = undefined;
    message.value = "备份导入完成，已保存。";
  } catch (e) {
    message.value = `导入失败，原数据未改变：${String(e)}`;
  }
}
async function photo(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0];
  (event.target as HTMLInputElement).value = "";
  if (!file) return;
  const target = current.value!;
  try {
    if (
      !["image/jpeg", "image/png", "image/webp"].includes(file.type) ||
      file.size > 3 * 1024 * 1024
    )
      throw new Error("只接受最大 3MB 的 JPEG / PNG / WebP。");
    const bitmap = await createImageBitmap(file);
    if (!bitmap.width || !bitmap.height) throw new Error("图片没有有效尺寸");
    bitmap.close();
    target.resume.profile.photoAsset = await dataUrl(file);
    message.value = "证件照已替换。";
  } catch (e) {
    message.value = `照片替换失败：${String(e)}`;
  }
}
async function pdf() {
  if (!current.value) return;
  const snapshot = clone(toRaw(current.value.resume));
  exporting.value = true;
  message.value = "";
  try {
    await check();
    if (overflowing.value || resourceError.value || validationError.value)
      throw new Error(
        resourceError.value ||
          validationError.value ||
          "内容超出 A4，请精简后再导出。",
      );
    const response = await fetch("/api/export/pdf", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(snapshot),
      signal: AbortSignal.timeout(45000),
    });
    if (!response.ok) {
      const error = await response
        .json()
        .catch(() => ({
          message:
            "本地 PDF 服务未启动，请重新运行 npm run dev 或 npm run start。",
        }));
      throw new Error(error.message);
    }
    if (!response.headers.get("content-type")?.includes("application/pdf"))
      throw new Error("本地 PDF 服务未正确响应，请重启服务。");
    download(await response.blob(), filename(snapshot));
    message.value = "PDF 已下载 · A4 单页 · 可搜索文字与可点击链接";
  } catch (e) {
    message.value = `PDF 导出失败：${e instanceof TypeError ? "无法连接本地 PDF 服务，请重新运行 npm run dev 或 npm run start。" : String(e)}`;
  } finally {
    exporting.value = false;
  }
}
</script>
<template>
  <div v-if="!state.ready" class="loading">正在打开你的简历工作室…</div>
  <div v-else-if="current" class="studio">
    <header class="toolbar">
      <div class="brand">
        <span class="brand-mark">r<span>•</span></span>
        <div>Resume <b>Studio</b><small>个人简历工作室</small></div>
      </div>
      <div class="version-controls">
        <label class="sr-only" for="version">当前版本</label
        ><select
          id="version"
          :value="state.data!.selectedId"
          @change="switchVersion"
        >
          <option v-for="v in state.data!.versions" :key="v.id" :value="v.id">
            {{ v.name }}
          </option></select
        ><button class="quiet" title="复制当前版本" @click="duplicate">
          ＋ 复制版本</button
        ><button class="icon-button" title="重命名版本" @click="rename">
          ✎</button
        ><button
          class="icon-button danger-text"
          title="删除版本"
          :disabled="state.data!.versions.length === 1"
          @click="deleteVersion"
        >
          ×
        </button>
      </div>
      <div class="toolbar-actions">
        <button
          class="save-state"
          :class="{ 'not-saved': state.status !== '已保存' }"
          @click="flush().catch((e) => (message = String(e)))"
        >
          <span />{{ state.status }}
        </button>
        <div class="backup-actions">
          <select v-model="backupMode" aria-label="备份范围">
            <option value="all">所有版本</option>
            <option value="current">当前版本</option></select
          ><button @click="backup">↓ JSON 备份</button>
        </div>
        <button @click="importInput?.click()">↑ 导入</button
        ><input
          ref="importInput"
          class="sr-only"
          type="file"
          accept=".json,application/json"
          @change="readImport"
        /><button
          class="primary"
          :disabled="
            exporting || overflowing || !!resourceError || !!validationError
          "
          @click="pdf"
        >
          {{ exporting ? "正在生成…" : "↓ 导出 PDF" }}
        </button>
      </div>
    </header>
    <div v-if="state.error" class="banner error" role="alert">
      {{ state.error }}
    </div>
    <div
      v-if="message"
      class="banner"
      :class="{ error: message.includes('失败') }"
      role="status"
    >
      <span>{{ message }}</span
      ><button aria-label="关闭提示" @click="message = ''">×</button>
    </div>
    <nav class="mobile-tabs">
      <button :class="{ active: tab === 'edit' }" @click="tab = 'edit'">
        编辑内容</button
      ><button
        :class="{ active: tab === 'preview' }"
        @click="
          tab = 'preview';
          autoFit = true;
          nextTick(fit);
        "
      >
        A4 预览
      </button>
    </nav>
    <main class="workspace">
      <aside class="editor-pane" :class="{ 'mobile-hidden': tab !== 'edit' }">
        <ResumeEditor
          :key="current.id"
          :version="current"
          @remove="remove"
          @photo="photo"
        />
      </aside>
      <section
        class="preview-pane"
        :class="{ 'mobile-hidden': tab !== 'preview' }"
      >
        <div class="preview-toolbar">
          <div>
            <span class="eyebrow">LIVE PREVIEW</span
            ><span class="paper-size">A4 <span>·</span> 210 × 297 mm</span>
          </div>
          <label class="density-control"
            >排版密度
            <select
              v-model="current.resume.settings.density"
              aria-label="排版密度"
            >
              <option value="compact">原版紧凑</option>
              <option value="comfortable">稍宽松</option>
            </select></label
          >
        </div>
        <div ref="viewport" class="preview-scroll">
          <div
            class="paper-stage"
            :style="{
              width: `${((210 * 96) / 25.4) * zoom}px`,
              height: `${((Math.max(297, 297 + bounds.verticalMm) * 96) / 25.4) * zoom}px`,
            }"
          >
            <div
              ref="preview"
              class="paper"
              :class="{ unsafe: overflowing }"
              :style="{ transform: `scale(${zoom})` }"
            >
              <ResumeSheet :resume="current.resume" />
              <div v-if="overflowing" class="overflow-boundary">
                A4 有效内容边界 · 请精简超出部分
              </div>
            </div>
          </div>
        </div>
        <footer class="preview-footer">
          <div
            class="layout-status"
            :class="{
              invalid: overflowing || resourceError || validationError,
            }"
            role="status"
          >
            <span class="status-dot" /><span v-if="resourceError">{{
              resourceError
            }}</span
            ><span v-else-if="validationError"
              >链接或照片格式有误，请修正后保存 / 导出。</span
            ><span v-else-if="overflowing"
              >{{
                bounds.verticalMm
                  ? `纵向超出 ${bounds.verticalMm.toFixed(1)}mm`
                  : ""
              }}{{
                bounds.horizontalMm
                  ? ` 横向超出 ${bounds.horizontalMm.toFixed(1)}mm`
                  : ""
              }}
              · 请精简课程、技能或项目描述</span
            ><span v-else>A4 单页安全 <small>· 已检查内容边界</small></span>
          </div>
          <div class="zoom-controls">
            <button
              aria-label="缩小预览"
              :disabled="zoom <= 0.35"
              @click="
                autoFit = false;
                zoom = Math.max(0.35, zoom - 0.1);
              "
            >
              −</button
            ><button
              @click="
                autoFit = true;
                fit();
              "
            >
              适应宽度</button
            ><span>{{ Math.round(zoom * 100) }}%</span
            ><button
              aria-label="放大预览"
              :disabled="zoom >= 1.5"
              @click="
                autoFit = false;
                zoom = Math.min(1.5, zoom + 0.1);
              "
            >
              ＋
            </button>
          </div>
        </footer>
      </section>
    </main>
    <div v-if="pendingImport" class="modal-backdrop">
      <section
        role="dialog"
        aria-modal="true"
        aria-label="导入 JSON 备份"
        class="modal"
      >
        <span class="eyebrow">RESTORE YOUR WORK</span>
        <h2>导入 JSON 备份</h2>
        <p>已验证 {{ pendingImport.versions.length }} 个版本。选择恢复方式：</p>
        <label class="check"
          ><input
            v-model="importMode"
            type="radio"
            value="merge"
          />合并为新版本（保留当前所有数据）</label
        ><label class="check"
          ><input
            v-model="importMode"
            type="radio"
            value="replace"
          />替换全部版本（下一步再次确认）</label
        >
        <div class="modal-actions">
          <button @click="pendingImport = undefined">取消</button
          ><button class="primary" @click="applyImport">确认导入</button>
        </div>
      </section>
    </div>
  </div>
</template>
