import { openDB } from "idb";
import { parseBackup, type Backup } from "../models/resume";
const db = () =>
  openDB("resume-studio", 1, {
    upgrade(d) {
      d.createObjectStore("workspace");
    },
  });
export async function readWorkspace(): Promise<
  { data: Backup; revision: string } | undefined
> {
  const d = await db();
  try {
    return await d.get("workspace", "current");
  } finally {
    d.close();
  }
}
export async function writeWorkspace(data: Backup, expected?: string) {
  const valid = parseBackup(data);
  const d = await db();
  try {
    const tx = d.transaction("workspace", "readwrite");
    const previous = await tx.store.get("current");
    if (previous && previous.revision !== expected) {
      tx.abort();
      await tx.done.catch(() => {});
      throw new Error(
        "其他标签已修改数据。请先导出当前草稿备份，再刷新载入最新版本。",
      );
    }
    const revision = crypto.randomUUID();
    await tx.store.put({ data: valid, revision }, "current");
    await tx.done;
    return revision;
  } finally {
    d.close();
  }
}
