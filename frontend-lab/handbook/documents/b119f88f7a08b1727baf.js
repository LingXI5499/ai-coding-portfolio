window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["b119f88f7a08b1727baf"] = {
  "id": "b119f88f7a08b1727baf",
  "title": "01-浮动-基本使用.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "01-浮动-基本使用.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>浮动-基本使用</title>\n\n    <style>\n      /* 特点：顶对齐；具备行内块显示模式特点；浮动的盒子会脱标 */\n\n      .one {\n        width: 100px;\n\n        height: 100px;\n\n        background-color: brown;\n\n        float: left;\n      }\n\n      .two {\n        width: 200px;\n\n        height: 200px;\n\n        background-color: orange;\n\n        /* float: left; */\n\n        float: right;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"one\">one</div>\n\n    <div class=\"two\">two</div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
