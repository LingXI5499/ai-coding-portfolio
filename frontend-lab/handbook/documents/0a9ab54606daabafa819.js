window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["0a9ab54606daabafa819"] = {
  "id": "0a9ab54606daabafa819",
  "title": "02-子代选择器.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "02-子代选择器.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>子代选择器</title>\n\n    <style>\n      /* div 的儿子 span 文字颜色是红色 */\n\n      div > span {\n        color: red;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div>\n      <span>儿子 span</span>\n\n      <p>\n        <span>孙子 span</span>\n      </p>\n    </div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
