window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["b24edc5288cc6049870a"] = {
  "id": "b24edc5288cc6049870a",
  "title": "01-结构伪类选择器-基本使用.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "01-结构伪类选择器-基本使用.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>结构伪类选择器-基本使用</title>\n\n    <style>\n      /* 第一个 */\n\n      /* li:first-child {\n\n      background-color: green;\n\n    } */\n\n      /* 最后一个 */\n\n      /* li:last-child {\n\n      background-color: green;\n\n    } */\n\n      /* 任意个 */\n\n      /* li:nth-child(3) {\n\n      background-color: green;\n\n    } */\n\n      li:nth-child(1) {\n        background-color: green;\n      }\n    </style>\n  </head>\n\n  <body>\n    <ul>\n      <li>li 1</li>\n\n      <li>li 2</li>\n\n      <li>li 3</li>\n\n      <li>li 4</li>\n\n      <li>li 5</li>\n\n      <li>li 6</li>\n\n      <li>li 7</li>\n\n      <li>li 8</li>\n    </ul>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
