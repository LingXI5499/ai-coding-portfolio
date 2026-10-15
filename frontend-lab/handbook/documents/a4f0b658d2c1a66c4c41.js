window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["a4f0b658d2c1a66c4c41"] = {
  "id": "a4f0b658d2c1a66c4c41",
  "title": "13-背景图平铺方式.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "13-背景图平铺方式.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>背景图平铺方式</title>\n\n    <style>\n      div {\n        width: 400px;\n\n        height: 400px;\n\n        background-color: pink;\n\n        background-image: url(./images/1.png);\n\n        /* 不平铺：盒子的左上角显示一张背景图 */\n\n        background-repeat: no-repeat;\n\n        /* background-repeat: repeat; */\n\n        /* background-repeat: repeat-x; */\n\n        /* background-repeat: repeat-y; */\n      }\n    </style>\n  </head>\n\n  <body>\n    <div>div 标签</div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
