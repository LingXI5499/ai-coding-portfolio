window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["d5b90f7b2e537ea4b5fc"] = {
  "id": "d5b90f7b2e537ea4b5fc",
  "title": "07-案例-时钟-转换原点.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "07-案例-时钟-转换原点.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Document</title>\n    <style>\n      .clock {\n        width: 250px;\n        height: 250px;\n        border: 8px solid #000;\n        border-radius: 50%;\n        margin: 100px auto;\n        position: relative;\n      }\n\n      .line {\n        /* 1.定位 */\n        position: absolute;\n        width: 4px;\n        height: 250px;\n        background-color: #999;\n        left: 50%;\n        transform: translate(-50%);\n      }\n\n      /* 线2: 旋转, 每条线旋转角度不同, 单独选中不同的line, 写rotate代码 */\n      /* 一圈是360度, 等分成  xx 份 */\n      .line:nth-child(2) {\n        transform: translate(-50%) rotate(30deg);\n      }\n\n      .line:nth-child(3) {\n        transform: translate(-50%) rotate(60deg);\n      }\n\n      .line:nth-child(4) {\n        transform: translate(-50%) rotate(90deg);\n      }\n\n      .line:nth-child(5) {\n        transform: translate(-50%) rotate(120deg);\n      }\n\n      .line:nth-child(6) {\n        transform: translate(-50%) rotate(150deg);\n      }\n\n      /* 第一根和第四跟宽度大一些 */\n      .line:nth-child(1),\n      .line:nth-child(4) {\n        width: 5px;\n      }\n\n      /* 遮罩圆形 */\n      .cover {\n        position: absolute;\n        left: 50%;\n        top: 50%;\n        transform: translate(-50%, -50%);\n        width: 200px;\n        height: 200px;\n        background-color: #fff;\n        border-radius: 50%;\n      }\n\n      /* 表针 */\n      /* 并集选择器放在单独选择器的上面, 避免transform属性的层叠 */\n      .hour,\n      .minute,\n      .second {\n        position: absolute;\n        left: 50%;\n        /* 盒子底部在盒子中间 */\n        bottom: 50%;\n      }\n\n      .hour {\n        width: 6px;\n        height: 50px;\n        background-color: #333;\n        margin-left: -3px;\n        transform: rotate(15deg);\n        transform-origin: center bottom;\n      }\n\n      .minute {\n        width: 5px;\n        height: 65px;\n        background-color: #333;\n        margin-left: -3px;\n        transform: rotate(90deg);\n        transform-origin: center bottom;\n      }\n\n      .second {\n        width: 4px;\n        height: 80px;\n        background-color: red;\n        margin-left: -2px;\n        transform: rotate(240deg);\n        transform-origin: center bottom;\n      }\n\n      /* 螺丝 */\n      .dotted {\n        position: absolute;\n        left: 50%;\n        top: 50%;\n        transform: translate(-50%, -50%);\n        width: 18px;\n        height: 18px;\n        background-color: #333;\n        border-radius: 50%;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"clock\">\n      <!-- 刻度线 -->\n      <div class=\"line\"></div>\n      <div class=\"line\"></div>\n      <div class=\"line\"></div>\n      <div class=\"line\"></div>\n      <div class=\"line\"></div>\n      <div class=\"line\"></div>\n\n      <!-- 遮罩圆形 -->\n      <div class=\"cover\"></div>\n      <!-- 表针 -->\n      <div class=\"hour\"></div>\n      <div class=\"minute\"></div>\n      <div class=\"second\"></div>\n\n      <!-- 螺丝 -->\n      <div class=\"dotted\"></div>\n    </div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
