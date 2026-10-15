window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["390eabbedeb596e2b237"] = {
  "id": "390eabbedeb596e2b237",
  "title": "第三题.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "第三题.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>权重叠加-第三题</title>\n\n    <style>\n      /* (0, 2, 0, 0) */\n\n      #father #son {\n        color: blue;\n      }\n\n      /* (0, 1, 1, 1) */\n\n      #father p.c2 {\n        color: black;\n      }\n\n      /* (0, 0, 2, 2) */\n\n      div.c1 p.c2 {\n        color: red;\n      }\n\n      #father {\n        color: green !important;\n      }\n\n      div#father.c1 {\n        color: yellow;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div id=\"father\" class=\"c1\">\n      <p id=\"son\" class=\"c2\">这行文本是什么颜色的？</p>\n    </div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
