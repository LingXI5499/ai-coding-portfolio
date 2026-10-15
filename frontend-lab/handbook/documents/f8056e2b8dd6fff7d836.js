window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["f8056e2b8dd6fff7d836"] = {
  "id": "f8056e2b8dd6fff7d836",
  "title": "07-事件类型.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "07-事件类型.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n\n    <style>\n      div {\n        width: 200px;\n\n        height: 200px;\n\n        background-color: pink;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div></div>\n\n    <script>\n      const div = document.querySelector('div');\n\n      // 鼠标经过\n\n      div.addEventListener('mouseenter', function () {\n        console.log(`轻轻的我来了`);\n      });\n\n      // 鼠标离开\n\n      div.addEventListener('mouseleave', function () {\n        console.log(`轻轻的我走了`);\n      });\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
