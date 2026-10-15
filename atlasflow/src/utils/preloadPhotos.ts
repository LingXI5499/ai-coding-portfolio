import type { PhotoItem } from '../types/domain'
export async function preloadPhotos(
  photos: PhotoItem[],
  signal: AbortSignal,
): Promise<PhotoItem[]> {
  const results = await Promise.all(
    photos.slice(0, matchMedia('(max-width: 640px)').matches ? 4 : 8).map(
      (photo) =>
        new Promise<PhotoItem | undefined>((resolve) => {
          const image = new Image()
          const timer = setTimeout(() => finish(undefined), 8000)
          function finish(value: PhotoItem | undefined) {
            clearTimeout(timer)
            signal.removeEventListener('abort', cancel)
            image.onload = image.onerror = null
            resolve(value)
          }
          function cancel() {
            image.src = ''
            finish(undefined)
          }
          signal.addEventListener('abort', cancel, { once: true })
          image.onload = () => finish(signal.aborted ? undefined : photo)
          image.onerror = () => finish(undefined)
          if (signal.aborted) cancel()
          else image.src = photo.thumbnailUrl
        }),
    ),
  )
  return results.filter((photo): photo is PhotoItem => Boolean(photo))
}
