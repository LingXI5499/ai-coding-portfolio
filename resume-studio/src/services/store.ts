import { reactive, watch, toRaw, nextTick } from "vue";
import seed from "../../seed/initial-resume.json";
import {
  clone,
  newVersion,
  parseBackup,
  resumeSchema,
  type Backup,
} from "../models/resume";
import { readWorkspace, writeWorkspace } from "./db";
export const state = reactive({
  data: null as Backup | null,
  status: "正在读取本地数据…",
  error: "",
  ready: false,
  conflict: false,
});
let revision: string | undefined,
  timer: ReturnType<typeof setTimeout> | undefined,
  queue = Promise.resolve(),
  generation = 0;
const channel =
  typeof BroadcastChannel !== "undefined"
    ? new BroadcastChannel("resume-studio")
    : null;
channel?.addEventListener("message", () => {
  state.conflict = true;
  state.error = "检测到其他标签修改。请备份当前草稿，再刷新，避免覆盖。";
});
export async function initStore() {
  try {
    const saved = await readWorkspace();
    if (saved) {
      state.data = parseBackup(saved.data);
      revision = saved.revision;
    } else {
      const version = newVersion(resumeSchema.parse(seed));
      state.data = {
        format: "resume-studio",
        schemaVersion: 1,
        selectedId: version.id,
        versions: [version],
      };
      revision = await writeWorkspace(clone(toRaw(state.data)));
    }
    state.status = "已保存";
  } catch (e) {
    state.error = `本地存储不可用：${String(e)}。可继续编辑并导出 JSON 备份，点击保存状态重试。`;
    const v = newVersion(resumeSchema.parse(seed));
    state.data = {
      format: "resume-studio",
      schemaVersion: 1,
      selectedId: v.id,
      versions: [v],
    };
    state.status = "未保存，点击重试";
  }
  await nextTick();
  state.ready = true;
}
export function flush() {
  clearTimeout(timer);
  const data = clone(toRaw(state.data));
  if (!data) return Promise.resolve();
  const g = generation;
  queue = queue
    .catch(() => {})
    .then(async () => {
      try {
        if (state.conflict)
          throw new Error("其他标签已修改，请备份草稿并刷新。");
        state.status = "保存中…";
        revision = await writeWorkspace(data, revision);
        if (g === generation) state.status = "已保存";
        channel?.postMessage({ revision });
      } catch (e) {
        state.status = "未保存，点击重试";
        state.error = String(e);
        throw e;
      }
    });
  return queue;
}
watch(
  () => state.data,
  () => {
    if (!state.ready) return;
    generation++;
    state.status = "待保存…";
    clearTimeout(timer);
    timer = setTimeout(() => {
      void flush().catch(() => {});
    }, 400);
  },
  { deep: true },
);
export async function replaceData(data: Backup) {
  const valid = parseBackup(data);
  await flush();
  const next = await writeWorkspace(clone(valid), revision);
  revision = next;
  state.data = valid;
  state.error = "";
  channel?.postMessage({ revision });
}
window.addEventListener("beforeunload", (e) => {
  if (state.status !== "已保存") {
    void flush().catch(() => {});
    e.preventDefault();
    e.returnValue = "";
  }
});
document.addEventListener("visibilitychange", () => {
  if (document.hidden && state.ready && state.status !== "已保存")
    void flush().catch(() => {});
});
