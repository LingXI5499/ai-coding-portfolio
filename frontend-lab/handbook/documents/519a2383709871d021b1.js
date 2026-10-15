window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["519a2383709871d021b1"] = {
  "id": "519a2383709871d021b1",
  "title": "10-垂直对齐方式.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "10-垂直对齐方式.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>垂直对齐方式</title>\n\n    <style>\n      div {\n        border: 1px solid #000;\n      }\n\n      img {\n        /* vertical-align: middle; */\n\n        /* 顶对齐：最高内容的顶部 */\n\n        /* vertical-align: top; */\n\n        /* 底对齐：最高内容的底部 */\n\n        /* vertical-align: bottom; */\n\n        /* 因为浏览器把行内块、行内标签当做文字处理，默认按基线对齐 */\n\n        /* 效果：图片img的底下有空白，转块级不按基线对齐，空白就消失了 */\n\n        display: block;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div>\n      <img src=\"./images/1.webp\" alt=\"\" />\n\n      <!-- 我是谁？我在哪？ -->\n    </div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
