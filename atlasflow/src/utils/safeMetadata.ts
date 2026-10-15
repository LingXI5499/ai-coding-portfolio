export function plainMetadata(value: unknown): string | undefined {
  if (typeof value !== 'string' || !value.trim()) return undefined
  if (typeof DOMParser === 'undefined')
    return (
      value
        .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
        .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '')
        .replace(/<[^>]+>/g, '')
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"')
        .trim()
        .slice(0, 500) || undefined
    )
  const doc = new DOMParser().parseFromString(value, 'text/html')
  doc.querySelectorAll('script, style').forEach((node) => node.remove())
  return doc.body.textContent?.replace(/\s+/g, ' ').trim().slice(0, 500) || undefined
}
export function httpsUrl(value: unknown, allowedHosts?: string[]): string | undefined {
  if (typeof value !== 'string') return undefined
  try {
    const url = new URL(value)
    if (url.protocol !== 'https:' || url.username || url.password) return undefined
    if (allowedHosts && !allowedHosts.includes(url.hostname)) return undefined
    return url.href
  } catch {
    return undefined
  }
}
