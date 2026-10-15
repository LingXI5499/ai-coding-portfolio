window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["d28fa9dd12ebf8a979de"] = {
  "id": "d28fa9dd12ebf8a979de",
  "title": "10-动画实现步骤.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "10-动画实现步骤.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>动画实现步骤</title>\n\n    <style>\n      .box {\n        width: 200px;\n\n        height: 100px;\n\n        background-color: pink;\n\n        animation: change 1s;\n      }\n\n      /* 动画一：宽度从200变化到800 */\n\n      /* @keyframes change {\n\n        from {\n\n            width: 200px;\n\n        }\n\n        to {\n\n            width: 800px;\n\n        }\n\n      } */\n\n      /* 动画二：从 200*100 变化到 300*300 变化到800*500 */\n\n      /* 百分比：表示的意思是动画时长的百分比 */\n\n      @keyframes change {\n        0% {\n          width: 200px;\n\n          height: 100px;\n        }\n\n        20% {\n          width: 300px;\n\n          height: 300px;\n        }\n\n        100% {\n          width: 800px;\n\n          height: 500px;\n        }\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"box\"></div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
