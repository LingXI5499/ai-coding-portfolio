window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["7559245ac1286105df9c"] = {
  "id": "7559245ac1286105df9c",
  "title": "11-通过类名修改样式.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "11-通过类名修改样式.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n\n    <style>\n      div {\n        width: 200px;\n\n        height: 200px;\n\n        background-color: pink;\n      }\n\n      .nav {\n        color: red;\n      }\n\n      .box {\n        width: 300px;\n\n        height: 300px;\n\n        background-color: skyblue;\n\n        margin: 100px auto;\n\n        padding: 10px;\n\n        border: 1px solid #000;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"nav\">123</div>\n\n    <script>\n      // 1. 获取元素\n\n      const div = document.querySelector('div');\n\n      // 2.添加类名  class 是个关键字 我们用 className\n\n      div.className = 'nav box';\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
