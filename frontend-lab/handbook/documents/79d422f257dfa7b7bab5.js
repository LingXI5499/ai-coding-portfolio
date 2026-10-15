window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["79d422f257dfa7b7bab5"] = {
  "id": "79d422f257dfa7b7bab5",
  "title": "14-背景图位置.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "14-背景图位置.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>背景图位置</title>\n\n    <style>\n      div {\n        width: 400px;\n\n        height: 400px;\n\n        background-color: pink;\n\n        background-image: url(./images/1.png);\n\n        background-repeat: no-repeat;\n\n        /* 左上角 */\n\n        /* background-position: 0 0; */\n\n        /* background-position: left top; */\n\n        /* background-position: right bottom; */\n\n        /* 水平：正数向右，负数向左 */\n\n        /* background-position: 50px 0; */\n\n        /* background-position: -50px 0; */\n\n        /* 垂直：正数向下，负数向上 */\n\n        /* background-position: 0 100px; */\n\n        /* background-position: 0 -100px; */\n\n        /* background-position: 50px center; */\n\n        /* 特殊写法 */\n\n        /* background-position: bottom left; */\n\n        /* 关键字可以只写一个，另一个方向居中 */\n\n        /* background-position: bottom; */\n\n        /* 只写一个数字表示水平方向，垂直方向居中 */\n\n        background-position: 50px;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div>div 标签</div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
