# 本地手势模型

`gesture_recognizer.task` 来自 Google MediaPipe 官方模型：

https://storage.googleapis.com/mediapipe-models/gesture_recognizer/gesture_recognizer/float16/1/gesture_recognizer.task

SHA256: `97952348cf6a6a4915c2ea1496b4b37ebabc50cbbf80571435643c455f2b0482`

来源与模型说明：https://developers.google.com/edge/mediapipe/solutions/vision/gesture_recognizer

模型随本地 Git 保存，避免首次使用必须访问 Google 下载服务。WASM 运行时由锁定的 `@mediapipe/tasks-vision@1.1.0` 通过 npm postinstall 复制到 `wasm/`，不重复进入 Git。只有主动开启摄像头才加载识别线程、WASM 和模型。
