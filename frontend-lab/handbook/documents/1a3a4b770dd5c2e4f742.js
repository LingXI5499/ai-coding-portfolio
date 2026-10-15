window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["1a3a4b770dd5c2e4f742"] = {
  "id": "1a3a4b770dd5c2e4f742",
  "title": "08-多重转换效果.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "08-多重转换效果.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>多重转换</title>\n    <style>\n      .box {\n        width: 800px;\n        height: 200px;\n        border: 1px solid #000;\n      }\n\n      img {\n        width: 200px;\n        transition: all 5s;\n      }\n\n      /* 鼠标移入box，图片边走边转 */\n      .box:hover img {\n        /* 先平移再旋转 */\n        transform: translate(600px) rotate(360deg);\n\n        /* 旋转会改变坐标轴向 */\n        /* 多重转换：以第一种转换形态的坐标轴为准 */\n        /* transform: rotate(360deg) translate(600px); */\n\n        /* 层叠性 */\n        /* transform: translate(600px);\n        transform: rotate(360deg); */\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"box\">\n      <img src=\"./images/tyre1.png\" alt=\"\" />\n    </div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
