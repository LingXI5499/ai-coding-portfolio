window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["879483d960c53455de6f"] = {
  "id": "879483d960c53455de6f",
  "title": "05-堆叠顺序z-index.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "05-堆叠顺序z-index.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>堆叠顺序-z-index</title>\n\n    <style>\n      div {\n        position: absolute;\n\n        width: 200px;\n\n        height: 200px;\n      }\n\n      .box1 {\n        background-color: pink;\n\n        /* 取值是整数，默认是0，取值越大显示顺序越靠上 */\n\n        z-index: 1;\n      }\n\n      .box2 {\n        background-color: skyblue;\n\n        left: 100px;\n\n        top: 100px;\n\n        z-index: 2;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"box1\">box1</div>\n\n    <div class=\"box2\">box2</div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
