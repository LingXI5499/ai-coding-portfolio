// Geometry is normalized by the sheet's scale, so preview zoom cannot affect checks.
export function measureSheet(sheet: HTMLElement) {
  const rect = sheet.getBoundingClientRect(),
    scale = rect.width / sheet.offsetWidth,
    pxPerMm = sheet.offsetWidth / 210;
  const styles = getComputedStyle(sheet),
    bottom =
      rect.top +
      (sheet.offsetHeight - parseFloat(styles.paddingBottom)) * scale;
  const left = rect.left + parseFloat(styles.paddingLeft) * scale,
    right = rect.right - parseFloat(styles.paddingRight) * scale;
  let vertical = 0,
    horizontal = 0;
  for (const el of sheet.querySelectorAll<HTMLElement>(
    "h1,h2,p,li,a,.date,.edu-main,.project-title,.tech,.project-meta,.resume-photo",
  )) {
    const r = el.getBoundingClientRect();
    vertical = Math.max(vertical, (r.bottom - bottom) / scale);
    horizontal = Math.max(
      horizontal,
      (left - r.left) / scale,
      (r.right - right) / scale,
      el.scrollWidth - el.clientWidth,
    );
    // Text ranges catch overflowing glyphs even when a parent box fits.
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      const range = document.createRange();
      range.selectNodeContents(node);
      for (const t of range.getClientRects()) {
        horizontal = Math.max(
          horizontal,
          (t.right - right) / scale,
          (left - t.left) / scale,
        );
        vertical = Math.max(vertical, (t.bottom - bottom) / scale);
      }
    }
  }
  return {
    verticalMm: vertical > 2 ? vertical / pxPerMm : 0,
    horizontalMm: horizontal > 2 ? horizontal / pxPerMm : 0,
  };
}
export async function checkResources(sheet: HTMLElement) {
  await document.fonts.ready;
  let fontFound = false;
  for (const name of ["Microsoft YaHei", "Noto Sans CJK SC", "PingFang SC"]) {
    try {
      await new FontFace("ResumeChineseProbe", `local("${name}")`).load();
      fontFound = true;
      break;
    } catch {
      /* try the next installed family */
    }
  }
  if (!fontFound)
    throw new Error(
      "未检测到可用中文字体，请安装微软雅黑或 Noto Sans CJK SC 后重启服务。",
    );
  for (const img of sheet.querySelectorAll("img")) {
    try {
      await img.decode();
    } catch {
      throw new Error("证件照加载失败，请重新选择照片后导出。");
    }
    if (!img.naturalWidth) throw new Error("证件照为空，请重新选择。");
  }
}
