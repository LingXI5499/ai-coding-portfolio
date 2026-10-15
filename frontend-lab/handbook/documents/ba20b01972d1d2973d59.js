window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["ba20b01972d1d2973d59"] = {
  "id": "ba20b01972d1d2973d59",
  "title": "05-旋转效果.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "05-旋转效果.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>旋转效果</title>\n\n    <style>\n      img {\n        width: 200px;\n\n        transition: all 2s;\n      }\n\n      /* 鼠标悬停到图片上面，添加旋转效果 */\n\n      img:hover {\n        /* 正数：顺时针旋转；负数：逆时针旋转 */\n\n        transform: rotate(360deg);\n\n        transform: rotate(-360deg);\n      }\n    </style>\n  </head>\n\n  <body>\n    <img src=\"./images/rotate.png\" alt=\"\" />\n  </body>\n</html>"
        }
      ]
    }
  ]
};
