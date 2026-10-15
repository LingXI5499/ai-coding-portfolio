window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["5e68d523245c2da6331f"] = {
  "id": "5e68d523245c2da6331f",
  "title": "第三题.html",
  "treatment": "排错练习（不自动执行）",
  "sections": [
    {
      "title": "第三题.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>权重叠加-第三题</title>\n\n    <style>\n      #father #son {\n        color: blue;\n      }\n\n      #father p.c2 {\n        color: black;\n      }\n\n      div.c1 p.c2 {\n        color: red;\n      }\n\n      #father {\n        color: green !important;\n      }\n\n      div#father.c1 {\n        color: yellow;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div id=\"father\" class=\"c1\">\n      <p id=\"son\" class=\"c2\">这行文本是什么颜色的？</p>\n    </div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
