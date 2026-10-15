window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["309a5846314f94f9f682"] = {
  "id": "309a5846314f94f9f682",
  "title": "04-rem基本使用.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "04-rem基本使用.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>rem基本使用</title>\n    <style>\n      * {\n        margin: 0;\n        padding: 0;\n      }\n\n      /* 1. 给HTML标签加字号 */\n      html {\n        font-size: 30px;\n      }\n\n      /* 2. 使用rem单位书写尺寸 */\n      .box {\n        width: 5rem;\n        height: 3rem;\n        background-color: pink;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"box\"></div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
