window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["de24be8e4c324412d69f"] = {
  "id": "de24be8e4c324412d69f",
  "title": "04-交集选择器.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "04-交集选择器.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>交集选择器</title>\n\n    <style>\n      /* 第一个 p 标签文字颜色是红色 */\n\n      /* 既又的关系：既是 p 标签，又是有 box 类 */\n\n      p.box {\n        color: red;\n      }\n    </style>\n  </head>\n\n  <body>\n    <p class=\"box\">p 标签，使用了类选择器 box</p>\n\n    <p>p 标签</p>\n\n    <div class=\"box\">div 标签，使用了类选择器</div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
