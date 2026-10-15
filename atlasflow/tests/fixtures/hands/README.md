# 真实模型验证样本

这些图片只用于浏览器测试，通过 canvas.captureStream 作为合成摄像头视频输入，不进入应用图库，也不访问用户实体摄像头。

- `thumbs_up.jpg` / `victory.jpg`：Google 官方示例使用的样本，下载地址 `https://storage.googleapis.com/mediapipe-tasks/gesture_recognizer/{filename}`。来源：https://github.com/google-ai-edge/mediapipe-samples/blob/main/examples/gesture_recognizer/python/gesture_recognizer.ipynb 。该示例说明图片原始来源为 Pixabay。
- `fist.jpg` / `right_hands.jpg`：Google MediaPipe 测试资源，下载地址 `https://storage.googleapis.com/mediapipe-assets/{filename}`。

测试使用应用真实 Worker、WASM、模型和控制函数，验证四种姿势的名称、骨架以及聚合/散开/继续/归位效果。另有明确模拟 Worker 结果的测试验证持续位移和手部位置驱动；二者不是实体摄像头验收。
