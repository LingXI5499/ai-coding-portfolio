window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["2228e7d44e40ec1bccb0"] = {
  "id": "2228e7d44e40ec1bccb0",
  "title": "02-结构伪类选择器-公式用法.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "02-结构伪类选择器-公式用法.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>结构伪类选择器-公式用法</title>\n\n    <style>\n      /* 偶数 */\n\n      /* li:nth-child(2n) {\n\n      background-color: green;\n\n    } */\n\n      /* 奇数 */\n\n      /* li:nth-child(2n+1) {\n\n      background-color: green;\n\n    } */\n\n      /* 倍数 */\n\n      /* li:nth-child(5n) {\n\n      background-color: green;\n\n    } */\n\n      /* n 从0开始 */\n\n      /* 第5个以后的标签 */\n\n      /* li:nth-child(n+5) {\n\n      background-color: green;\n\n    } */\n\n      /* 第5个以前的标签 */\n\n      li:nth-child(-n + 5) {\n        background-color: green;\n      }\n    </style>\n  </head>\n\n  <body>\n    <ul>\n      <li>li 1</li>\n\n      <li>li 2</li>\n\n      <li>li 3</li>\n\n      <li>li 4</li>\n\n      <li>li 5</li>\n\n      <li>li 6</li>\n\n      <li>li 7</li>\n\n      <li>li 8</li>\n\n      <li>li 9</li>\n\n      <li>li 10</li>\n    </ul>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
