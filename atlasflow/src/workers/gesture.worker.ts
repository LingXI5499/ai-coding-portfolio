import { FilesetResolver, GestureRecognizer } from '@mediapipe/tasks-vision'
let recognizer: GestureRecognizer | undefined
const scope = self as unknown as {
  onmessage: ((event: MessageEvent) => Promise<void>) | null
  postMessage: (data: unknown) => void
}
scope.onmessage = async ({ data }) => {
  try {
    if (data.type === 'init') {
      const files = await FilesetResolver.forVisionTasks(data.wasmUrl, true)
      recognizer = await GestureRecognizer.createFromOptions(files, {
        baseOptions: { modelAssetPath: data.modelUrl, delegate: 'CPU' },
        runningMode: 'VIDEO',
        numHands: 1,
        minHandDetectionConfidence: 0.5,
        minHandPresenceConfidence: 0.5,
        minTrackingConfidence: 0.5,
        cannedGesturesClassifierOptions: { scoreThreshold: 0.3 },
      })
      scope.postMessage({ type: 'ready' })
    } else if (data.type === 'frame' && recognizer) {
      const start = performance.now()
      try {
        const result = recognizer.recognizeForVideo(data.bitmap, data.timestamp)
        scope.postMessage({ type: 'result', result, latency: performance.now() - start })
      } finally {
        data.bitmap.close()
      }
    }
  } catch (error) {
    scope.postMessage({
      type: 'error',
      message: error instanceof Error ? error.message : String(error),
    })
  }
}
