import "fake-indexeddb/auto";
import { describe, it, expect } from "vitest";
import { createSSRApp } from "vue";
import { renderToString } from "vue/server-renderer";
import seed from "../../seed/initial-resume.json";
import ResumeSheet from "../../src/components/ResumeSheet.vue";
import {
  resumeSchema,
  newVersion,
  copyVersion,
  clone,
  move,
  filename,
  hasInternship,
  parseBackup,
  mergeBackup,
  type Backup,
} from "../../src/models/resume";
import { readWorkspace, writeWorkspace } from "../../src/services/db";
const resume = () => resumeSchema.parse(clone(seed));
describe("原始材料与文本渲染", () => {
  it("seed 合法，四技能、两个项目各六条、两个荣誉均完整", () => {
    const r = resume();
    expect(r.skills).toHaveLength(4);
    expect(r.projects).toHaveLength(2);
    expect(r.projects.map((x) => x.bullets.length)).toEqual([6, 6]);
    expect(r.honors).toHaveLength(2);
  });
  it("没有虚构实习，开启空实习仍不显示", () => {
    const r = resume();
    expect(r.internship.enabled).toBe(false);
    expect(r.internship.organization).toBe("");
    expect(r.internship.period).toBe("");
    r.internship.enabled = true;
    expect(hasInternship(r.internship)).toBe(false);
  });
  it("空技能、空项目 bullet 不渲染；换行按文本保留、HTML 转义", async () => {
    const r = resume();
    r.skills = [{ id: "1", label: "", content: "" }];
    r.projects[0]!.bullets = [{ id: "b", label: "", content: "" }];
    r.projects[1]!.bullets = [];
    r.internship.enabled = true;
    r.jobIntent = "<script>alert(1)</script>\nJava";
    const html = await renderToString(createSSRApp(ResumeSheet, { resume: r }));
    expect(html).not.toContain('class="bullets"');
    expect(html).not.toContain("专业技能");
    expect(html).not.toContain("实习经历");
    expect(html).toContain("&lt;script&gt;");
    expect(html).toContain("\nJava");
    expect(html).not.toContain("headline");
  });
  it("复制版本深拷贝，不相互污染", () => {
    const a = newVersion(resume());
    const b = copyVersion(a, "Java 后端");
    b.resume.projects[0]!.bullets[0]!.content = "changed";
    b.resume.skills[0]!.content = "edited";
    expect(a.resume).toEqual(resume());
    expect(b.id).not.toBe(a.id);
  });
  it("条目增加删除与上下移保留内容和顺序", () => {
    const r = resume();
    const items = r.projects[0]!.bullets;
    const original = clone(items);
    items.push({ id: "new", label: "新增", content: "真实内容" });
    move(items, 6, -1);
    expect(items[5]!.id).toBe("new");
    move(items, 5, 1);
    items.splice(6, 1);
    expect(items).toEqual(original);
    move(r.skills, 0, 1);
    expect(r.skills[1]!.id).toBe("skill-1");
    move(r.skills, 1, -1);
    expect(r.skills).toEqual(resume().skills);
  });
  it("Windows 文件名移除非法字符", () => {
    const r = resume();
    r.jobIntent = 'Java / \\ : * ? " < > |';
    expect(filename(r, "2026-10-14")).not.toMatch(/[\\/:*?"<>|]/);
    expect(filename(r)).toMatch(/\.pdf$/);
  });
  it.each([
    "javascript:alert(1)",
    "file:///C:/secret",
    "data:text/html,test",
    "ftp://example.org",
  ])("拒绝危险协议 %s", (url) => {
    const r = resume();
    r.profile.github.url = url;
    expect(resumeSchema.safeParse(r).success).toBe(false);
  });
  it("拒绝远程图片和非法数据图", () => {
    const r = resume();
    r.profile.photoAsset = "https://example.com/p.jpg";
    expect(resumeSchema.safeParse(r).success).toBe(false);
    r.profile.photoAsset = "data:image/svg+xml;base64,AA==";
    expect(resumeSchema.safeParse(r).success).toBe(false);
  });
});
describe("备份与事务", () => {
  const make = (): Backup => {
    const v = newVersion(resume());
    return {
      format: "resume-studio",
      schemaVersion: 1,
      selectedId: v.id,
      versions: [v],
    };
  };
  it("JSON 往返保留每个字段与原始顺序", () => {
    const data = make();
    expect(parseBackup(JSON.parse(JSON.stringify(data)))).toEqual(data);
  });
  it("合并时分配新 ID 保留原版本", () => {
    const data = make();
    const result = mergeBackup(data, data);
    expect(result.versions).toHaveLength(2);
    expect(result.versions[0]).toEqual(data.versions[0]);
    expect(result.versions[0]!.id).not.toBe(result.versions[1]!.id);
  });
  it("合并恢复备份中选中的版本，不能跳回第一份原版", () => {
    const data = make();
    data.versions.push(copyVersion(data.versions[0]!, "岗位副本"));
    data.selectedId = data.versions[1]!.id;
    const result = mergeBackup(make(), data);
    expect(result.versions.find((v) => v.id === result.selectedId)!.name).toBe(
      "岗位副本",
    );
  });
  it("未知 schema / 字段 / 重复 ID 被拒绝", () => {
    const data = make();
    expect(() => parseBackup({ ...data, schemaVersion: 2 })).toThrow();
    expect(() => parseBackup({ ...data, extra: "lost data" })).toThrow();
    expect(() =>
      parseBackup({ ...data, versions: [data.versions[0], data.versions[0]] }),
    ).toThrow();
  });
  it("非法导入和跨标签陈旧写入均不破坏已存数据", async () => {
    const data = make();
    let revision = await writeWorkspace(data);
    const invalid = clone(data);
    (invalid.versions[0]!.resume as any).schemaVersion = 99;
    await expect(writeWorkspace(invalid, revision)).rejects.toThrow();
    expect((await readWorkspace())!.data).toEqual(data);
    const next = clone(data);
    next.versions[0]!.note = "最新内容";
    const newRevision = await writeWorkspace(next, revision);
    await expect(writeWorkspace(data, revision)).rejects.toThrow("其他标签");
    expect((await readWorkspace())!.data).toEqual(next);
    expect(newRevision).not.toBe(revision);
  });
});
