window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["586794b3663627452687"] = {
  "id": "586794b3663627452687",
  "title": "01-后代选择器.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "01-后代选择器.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>后代选择器</title>\n\n    <style>\n      /* div 里面的 span 文字颜色是红色 */\n\n      /* 后代选择器，选中所有后代，包含儿子、孙子、重孙子... */\n\n      div span {\n        color: red;\n      }\n    </style>\n  </head>\n\n  <body>\n    <span>span 标签</span>\n\n    <div>\n      <span>这是div 的儿子 span</span>\n\n      <p>\n        <span>孙子 span</span>\n      </p>\n    </div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
