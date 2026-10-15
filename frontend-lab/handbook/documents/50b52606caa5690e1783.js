window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["50b52606caa5690e1783"] = {
  "id": "50b52606caa5690e1783",
  "title": "14-外边距塌陷问题.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "14-外边距塌陷问题.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>外边距-塌陷问题</title>\n\n    <style>\n      .father {\n        width: 300px;\n\n        height: 300px;\n\n        background-color: pink;\n\n        /* padding-top: 50px;\n\n      box-sizing: border-box; */\n\n        /* 溢出隐藏 */\n\n        /* overflow: hidden; */\n\n        border-top: 1px solid #000;\n      }\n\n      .son {\n        width: 100px;\n\n        height: 100px;\n\n        background-color: orange;\n\n        margin-top: 50px;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"father\">\n      <div class=\"son\">son</div>\n    </div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
