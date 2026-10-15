window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["971a582a18336eac5263"] = {
  "id": "971a582a18336eac5263",
  "title": "10-盒子模型-版心居中.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "10-盒子模型-版心居中.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>版心居中</title>\n\n    <style>\n      div {\n        /* 版心居中要求：盒子要有宽度 */\n\n        width: 1000px;\n\n        height: 200px;\n\n        background-color: pink;\n\n        /* 外边距 不会 撑大盒子 */\n\n        /* margin: 50px; */\n\n        /* margin-left: 100px; */\n\n        /* margin: 50px 100px; */\n\n        margin: 0 auto;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div>版心内容</div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
