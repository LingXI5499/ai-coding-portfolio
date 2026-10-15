window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["fef9ec6529c871c4b2f2"] = {
  "id": "fef9ec6529c871c4b2f2",
  "title": "09-CSS特性-优先级.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "09-CSS特性-优先级.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>CSS 特性-优先级</title>\n\n    <style>\n      /* 技巧：选择器选中标签的范围越大，优先级/权重 越低 */\n\n      div {\n        color: green;\n      }\n\n      /* !important 提权功能，提高权重/优先级到 最高，慎用 */\n\n      * {\n        color: red !important;\n      }\n\n      .box {\n        color: blue;\n      }\n\n      #test {\n        color: orange;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"box\" id=\"test\" style=\"color: purple\">div 标签</div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
