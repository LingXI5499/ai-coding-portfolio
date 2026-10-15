window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["ab863a99b89dce87cdd2"] = {
  "id": "ab863a99b89dce87cdd2",
  "title": "第一题.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "第一题.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>权重叠加-第一题</title>\n\n    <style>\n      /* (0, 0, 2, 1) */\n\n      .c1 .c2 div {\n        color: blue;\n      }\n\n      /* (0, 1, 0, 1) */\n\n      div #box3 {\n        color: green;\n      }\n\n      /* (0, 1, 1, 0) */\n\n      #box1 .c3 {\n        color: orange;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div id=\"box1\" class=\"c1\">\n      <div id=\"box2\" class=\"c2\">\n        <div id=\"box3\" class=\"c3\">这行文本是什么颜色的？</div>\n      </div>\n    </div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
