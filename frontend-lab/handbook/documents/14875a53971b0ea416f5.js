window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["14875a53971b0ea416f5"] = {
  "id": "14875a53971b0ea416f5",
  "title": "16-圆角-基本使用.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "16-圆角-基本使用.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>圆角-基本使用</title>\n\n    <style>\n      div {\n        margin: 50px auto;\n\n        width: 200px;\n\n        height: 200px;\n\n        background-color: orange;\n\n        /* border-radius: 20px; */\n\n        /* 记忆：从左上角顺时针赋值，没有取值的角与对角取值相同 */\n\n        /* 四值：左上  右上  右下  左下 */\n\n        /* border-radius: 10px 20px 40px 80px; */\n\n        /* 三值：左上  右上+左下  右下 */\n\n        /* border-radius: 10px 40px 80px; */\n\n        /* 两值：左上+右下  右上+左下 */\n\n        border-radius: 10px 80px;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div></div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
