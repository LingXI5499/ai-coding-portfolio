window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["c78a1fce08a42840ec52"] = {
  "id": "c78a1fce08a42840ec52",
  "title": "06-rem适配.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "06-rem适配.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>rem适配</title>\n    <style>\n      * {\n        margin: 0;\n        padding: 0;\n      }\n\n      /* 1. 使用媒体查询，给不同视口的屏幕设置不同的HTML字号 */\n      /* @media (width:320px) {\n        html {\n            font-size: 32px;\n        }\n      }\n      @media (width:375px) {\n        html {\n            font-size: 37.5px;\n        }\n      }\n      @media (width:414px) {\n        html {\n            font-size: 41.4px;\n        }\n      } */\n\n      /* 2. 使用rem单位书写尺寸 */\n      .box {\n        width: 5rem;\n        height: 3rem;\n        background-color: pink;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"box\"></div>\n\n    <script src=\"./js/flexible.js\"></script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
