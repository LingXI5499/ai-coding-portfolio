window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["4bcda2d7310d35c5389e"] = {
  "id": "4bcda2d7310d35c5389e",
  "title": "01-体验vw和vh.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "01-体验vw和vh.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>体验vw和vh</title>\n    <style>\n      * {\n        margin: 0;\n        padding: 0;\n      }\n\n      /* vw 和 vh 是相对视口宽高计算结果，可以直接实现移动端适配效果 */\n      /* .box {\n        width: 50vw;\n        height: 30vw;\n        background-color: pink;\n      } */\n\n      .box {\n        width: 50vh;\n        height: 30vh;\n        background-color: green;\n      }\n    </style>\n  </head>\n  <body>\n    <div class=\"box\"></div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
