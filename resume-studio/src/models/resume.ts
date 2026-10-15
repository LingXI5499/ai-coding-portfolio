import { z } from "zod";
const text = z.string();
export const safeUrl = (value: string) => {
  try {
    return ["http:", "https:"].includes(new URL(value).protocol);
  } catch {
    return false;
  }
};
const url = text.refine(
  (v) => !v || safeUrl(v),
  "链接只允许完整的 http:// 或 https:// 地址",
);
export const photoSchema = text.refine(
  (v) =>
    v === "/assets/resume-photo.png" ||
    (/^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+/]+={0,2}$/.test(v) &&
      v.length <= 4194400),
  "照片仅允许包内照片或不超过 3MB 的 JPEG / PNG / WebP 数据",
);
const bullet = z.strictObject({ id: text.min(1), label: text, content: text });
const link = z.strictObject({ id: text.min(1), label: text, url });
export const resumeSchema = z.strictObject({
  schemaVersion: z.literal(1),
  profile: z.strictObject({
    fullName: text,
    phone: text,
    email: text,
    github: z.strictObject({ label: text, url }),
    website: z.strictObject({ label: text, url }),
    photoAsset: photoSchema,
  }),
  jobIntent: text,
  education: z.strictObject({
    school: text,
    major: text,
    degree: text,
    period: text,
    courses: text,
  }),
  skills: z.array(bullet),
  internship: z.strictObject({
    enabled: z.boolean(),
    organization: text,
    project: text,
    role: text,
    period: text,
    techStack: text,
    bullets: z.array(bullet),
  }),
  projects: z.array(
    z.strictObject({
      id: text.min(1),
      title: text,
      period: text,
      techStack: text,
      descriptor: text,
      links: z.array(link),
      bullets: z.array(bullet),
    }),
  ),
  honors: z.array(z.strictObject({ id: text.min(1), content: text })),
  settings: z.strictObject({
    density: z.enum(["compact", "comfortable"]),
    sectionOrder: z.tuple([
      z.literal("education"),
      z.literal("skills"),
      z.literal("internship"),
      z.literal("projects"),
      z.literal("honors"),
    ]),
    showHonors: z.boolean(),
  }),
  meta: z
    .strictObject({ source: text.optional(), notes: text.optional() })
    .optional(),
});
export const versionSchema = z.strictObject({
  id: text.min(1),
  name: text.min(1),
  note: text,
  isDefault: z.boolean(),
  createdAt: z.iso.datetime(),
  updatedAt: z.iso.datetime(),
  resume: resumeSchema,
});
export const backupSchema = z
  .strictObject({
    format: z.literal("resume-studio"),
    schemaVersion: z.literal(1),
    selectedId: text,
    versions: z.array(versionSchema).min(1),
  })
  .superRefine((v, ctx) => {
    if (
      new Set(v.versions.map((x) => x.id)).size !== v.versions.length ||
      !v.versions.some((x) => x.id === v.selectedId)
    )
      ctx.addIssue({ code: "custom", message: "版本 ID 重复或当前版本不存在" });
  });
export type ResumeDocument = z.infer<typeof resumeSchema>;
export type ResumeVersion = z.infer<typeof versionSchema>;
export type Backup = z.infer<typeof backupSchema>;
export type Bullet = ResumeDocument["skills"][number];
export const clone = <T>(v: T): T => JSON.parse(JSON.stringify(v));
export const hasBullet = (v: { label: string; content: string }) =>
  !!(v.label.trim() || v.content.trim());
export const hasInternship = (v: ResumeDocument["internship"]) =>
  v.enabled &&
  ([v.organization, v.project, v.role, v.period, v.techStack].some((x) =>
    x.trim(),
  ) ||
    v.bullets.some(hasBullet));
export function newVersion(
  resume: ResumeDocument,
  name = "通用开发岗（原版导入）",
): ResumeVersion {
  const now = new Date().toISOString();
  return {
    id: crypto.randomUUID(),
    name,
    note: "",
    isDefault: true,
    createdAt: now,
    updatedAt: now,
    resume: clone(resume),
  };
}
export function copyVersion(v: ResumeVersion, name: string) {
  return { ...newVersion(v.resume, name), note: v.note, isDefault: false };
}
export function move<T>(items: T[], index: number, delta: number) {
  const target = index + delta;
  if (target < 0 || target >= items.length) return;
  const [item] = items.splice(index, 1);
  items.splice(target, 0, item!);
}
export function filename(
  r: ResumeDocument,
  date = new Date().toLocaleDateString("sv-SE"),
) {
  return (
    `${r.profile.fullName}-${r.jobIntent}-${date}`
      .replace(/[\x00-\x1f/\\:*?"<>|]/g, "-")
      .slice(0, 170) + ".pdf"
  );
}
export function parseBackup(input: unknown): Backup {
  return backupSchema.parse(input);
}
export function mergeBackup(old: Backup, incoming: Backup): Backup {
  const selected = incoming.versions.findIndex(
    (v) => v.id === incoming.selectedId,
  );
  const copies = incoming.versions.map((v) => ({
    ...clone(v),
    id: crypto.randomUUID(),
    isDefault: false,
  }));
  return {
    ...clone(old),
    selectedId: copies[selected]!.id,
    versions: [...clone(old.versions), ...copies],
  };
}
