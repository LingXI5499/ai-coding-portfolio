window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["e9c7e103898d437d00e8"] = {
  "id": "e9c7e103898d437d00e8",
  "title": "13-m端事件.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "13-m端事件.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n\n    <style>\n      div {\n        width: 300px;\n\n        height: 300px;\n\n        background-color: pink;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div></div>\n\n    <script>\n      const div = document.querySelector('div');\n\n      // 1. 触摸\n\n      div.addEventListener('touchstart', function () {\n        console.log('开始摸我了');\n      });\n\n      // 2. 离开\n\n      div.addEventListener('touchend', function () {\n        console.log('离开了');\n      });\n\n      // 3. 移动\n\n      div.addEventListener('touchmove', function () {\n        console.log('一直摸，移动');\n      });\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
