window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["9afb80de5623e23f670a"] = {
  "id": "9afb80de5623e23f670a",
  "title": "17-获取元素大小位置的另外方法.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "17-获取元素大小位置的另外方法.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n\n    <style>\n      body {\n        height: 2000px;\n      }\n\n      div {\n        width: 200px;\n\n        height: 200px;\n\n        background-color: pink;\n\n        margin: 100px;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div></div>\n\n    <script>\n      const div = document.querySelector('div');\n\n      console.log(div.getBoundingClientRect());\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
