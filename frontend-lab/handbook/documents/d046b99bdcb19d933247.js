window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["d046b99bdcb19d933247"] = {
  "id": "d046b99bdcb19d933247",
  "title": "index.css",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "index.css",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": "* {\n  margin: 0;\n\n  padding: 0;\n}\n\n/* 大背景 */\n\n/* 默认状态HTML和body的高度是0，所以导致cover缩放背景图不成功 */\n\nhtml {\n  height: 100%;\n}\n\nbody {\n  height: 100%;\n\n  background: url(../images/f1_1.jpg) no-repeat center 0 / cover;\n\n  /* background-size: cover; */\n}\n\n/* 云 */\n\n.cloud img {\n  position: absolute;\n\n  left: 50%;\n}\n\n.cloud img:nth-child(1) {\n  margin-left: -250px;\n\n  top: 20px;\n\n  animation: cloud 1s infinite alternate linear;\n}\n\n.cloud img:nth-child(2) {\n  margin-left: 400px;\n\n  top: 100px;\n\n  animation: cloud 1s infinite alternate linear 0.4s;\n}\n\n.cloud img:nth-child(3) {\n  margin-left: -550px;\n\n  top: 200px;\n\n  animation: cloud 1s infinite alternate linear 0.6s;\n}\n\n@keyframes cloud {\n  100% {\n    transform: translate(20px);\n  }\n}\n\n/* 文字 */\n\n.text img {\n  position: absolute;\n\n  left: 50%;\n\n  top: 50%;\n\n  transform: translate(-50%, -50%);\n\n  animation: text 1s;\n}\n\n/* 默认 → 小 → 大 → 小 → 默认 */\n\n@keyframes text {\n  0% {\n    transform: translate(-50%, -50%) scale(1);\n  }\n\n  20% {\n    transform: translate(-50%, -50%) scale(0.1);\n  }\n\n  40% {\n    transform: translate(-50%, -50%) scale(1.4);\n  }\n\n  70% {\n    transform: translate(-50%, -50%) scale(0.8);\n  }\n\n  100% {\n    transform: translate(-50%, -50%) scale(1);\n  }\n}"
        }
      ]
    }
  ]
};
