import { computed, ref, shallowRef } from 'vue'
import type {
  CameraState,
  ExperienceStage,
  GeoPoint,
  PhotoItem,
  PhotoSearchResult,
} from '../types/domain'
import { searchNearbyPhotos } from '../services/photoProviders'
import type { NearbyPhotoSearch } from '../services/photoProviders/types'
export function createExperience(provider: NearbyPhotoSearch = searchNearbyPhotos) {
  const stage = ref<ExperienceStage>('earth')
  const selectedPoint = ref<GeoPoint>()
  const photos = shallowRef<PhotoItem[]>([])
  const bloomPhotos = shallowRef<PhotoItem[]>([])
  const savedCamera = shallowRef<CameraState>()
  const selectedPhotoId = ref<string>()
  const searchError = ref('')
  const searchStatus = ref<'loading' | 'empty' | 'error' | 'preloading'>('loading')
  const radius = ref(2000)
  const paused = ref(false)
  const nextCursor = shallowRef<Record<string, string>>()
  const moreLoading = ref(false)
  const moreError = ref('')
  let controller: AbortController | undefined
  let requestId = 0
  const selectedPhoto = computed(() => photos.value.find((p) => p.id === selectedPhotoId.value))
  function cancel() {
    controller?.abort()
    requestId++
    moreLoading.value = false
  }
  function choose(point: GeoPoint, camera?: CameraState) {
    cancel()
    selectedPoint.value = point
    if (camera) savedCamera.value = camera
    photos.value = []
    bloomPhotos.value = []
    stage.value = 'earth'
    searchError.value = ''
    nextCursor.value = undefined
    moreError.value = ''
  }
  async function search(
    radiusMeters = Number(import.meta.env.VITE_DEFAULT_PHOTO_RADIUS_M) || 2000,
  ): Promise<AbortSignal | undefined> {
    if (!selectedPoint.value) return
    cancel()
    const id = requestId
    controller = new AbortController()
    const signal = controller.signal
    stage.value = 'searching'
    searchStatus.value = 'loading'
    searchError.value = ''
    photos.value = []
    bloomPhotos.value = []
    const point = { ...selectedPoint.value }
    try {
      let result: PhotoSearchResult = await provider(point, { radiusMeters, signal })
      if (id !== requestId || signal.aborted) return
      if (!result.photos.length && radiusMeters < 5000)
        result = await provider(point, { radiusMeters: 5000, signal })
      if (id !== requestId || signal.aborted) return
      radius.value = result.radiusMeters
      nextCursor.value = result.nextCursor
      photos.value = result.photos.slice(0, 200)
      searchStatus.value = result.photos.length ? 'preloading' : 'empty'
      return result.photos.length ? signal : undefined
    } catch (error) {
      if (id !== requestId || signal.aborted) return
      searchError.value = error instanceof Error ? error.message : '照片检索失败，请重试。'
      searchStatus.value = 'error'
    }
  }
  function bloom(loaded: PhotoItem[]) {
    if (stage.value !== 'searching' || controller?.signal.aborted) return
    if (!loaded.length) {
      searchError.value = '检索到了文件，但缩略图暂时无法加载。请检查网络并重试。'
      searchStatus.value = 'error'
      return
    }
    bloomPhotos.value = loaded
    stage.value = 'blooming'
  }
  function enterGallery() {
    if (stage.value === 'blooming') stage.value = 'gallery'
  }
  function openPhoto(id: string) {
    if (stage.value === 'gallery' && photos.value.some((p) => p.id === id)) {
      selectedPhotoId.value = id
      stage.value = 'lightbox'
    }
  }
  function closePhoto() {
    if (stage.value === 'lightbox') {
      selectedPhotoId.value = undefined
      stage.value = 'gallery'
    }
  }
  function stepPhoto(direction: number) {
    const index = photos.value.findIndex((p) => p.id === selectedPhotoId.value)
    selectedPhotoId.value =
      photos.value[(index + direction + photos.value.length) % photos.value.length]?.id
  }
  function back() {
    cancel()
    selectedPhotoId.value = undefined
    stage.value = 'earth'
    photos.value = []
    bloomPhotos.value = []
    searchError.value = ''
    moreError.value = ''
    paused.value = false
  }
  async function loadMore() {
    if (
      moreLoading.value ||
      !nextCursor.value ||
      !selectedPoint.value ||
      photos.value.length >= 200 ||
      stage.value !== 'gallery'
    )
      return
    const id = requestId
    const signal = controller!.signal
    moreLoading.value = true
    moreError.value = ''
    try {
      const result = await provider(selectedPoint.value, {
        signal,
        radiusMeters: radius.value,
        cursor: nextCursor.value,
      })
      if (id !== requestId || signal.aborted) return
      const ids = new Set(photos.value.map((photo) => photo.id))
      photos.value = [
        ...photos.value,
        ...result.photos.filter((photo) => !ids.has(photo.id)),
      ].slice(0, 200)
      nextCursor.value = result.nextCursor
    } catch (error) {
      if (id === requestId && !signal.aborted)
        moreError.value = error instanceof Error ? error.message : '加载更多失败。'
    } finally {
      if (id === requestId) moreLoading.value = false
    }
  }
  return {
    stage,
    selectedPoint,
    photos,
    bloomPhotos,
    savedCamera,
    selectedPhotoId,
    selectedPhoto,
    searchError,
    searchStatus,
    radius,
    paused,
    nextCursor,
    moreLoading,
    moreError,
    choose,
    search,
    bloom,
    enterGallery,
    openPhoto,
    closePhoto,
    stepPhoto,
    back,
    cancel,
    loadMore,
  }
}
