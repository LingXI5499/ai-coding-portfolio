window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["e50d9103445c92c3ea18"] = {
  "id": "e50d9103445c92c3ea18",
  "title": "03-绝对定位元素居中.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "03-绝对定位元素居中.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>绝对定位元素居中效果</title>\n    <style>\n      .box {\n        position: absolute;\n        left: 50%;\n        top: 50%;\n\n        /* 向左向上移动自身尺寸的一半 */\n        transform: translate(-50%, -50%);\n\n        width: 200px;\n        height: 100px;\n        background-color: pink;\n      }\n    </style>\n  </head>\n  <body>\n    <div class=\"box\"></div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
