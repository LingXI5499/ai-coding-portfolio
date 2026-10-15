window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["0c71df18617898f026f1"] = {
  "id": "0c71df18617898f026f1",
  "title": "09-盒子模型-尺寸计算.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "09-盒子模型-尺寸计算.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>盒子模型-尺寸计算</title>\n\n    <style>\n      div {\n        width: 200px;\n\n        height: 200px;\n\n        /* 手动减法 */\n\n        /* width: 160px;\n\n      height: 160px; */\n\n        background-color: pink;\n\n        padding: 20px;\n\n        /* 內减模式：不需要手动减法，加padding和border不会撑大盒子 */\n\n        box-sizing: border-box;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div>div 标签</div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
