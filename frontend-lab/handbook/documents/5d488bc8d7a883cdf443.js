window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["5d488bc8d7a883cdf443"] = {
  "id": "5d488bc8d7a883cdf443",
  "title": "02-视距.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "02-视距.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <title>透视效果</title>\n\n    <style>\n      /* 视距属性必须添加给 直接父级 */\n\n      .father {\n        perspective: 1000px;\n\n        /* perspective: 10000px;\n\n      perspective: 100px; */\n      }\n\n      .son {\n        width: 200px;\n\n        height: 200px;\n\n        margin: 100px auto;\n\n        background-color: pink;\n\n        transition: all 0.5s;\n      }\n\n      .son:hover {\n        transform: translateZ(-300px);\n\n        transform: translateZ(300px);\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"father\">\n      <div class=\"son\"></div>\n    </div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
