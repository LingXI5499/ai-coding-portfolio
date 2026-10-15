window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["fb18e1a50a590410688a"] = {
  "id": "fb18e1a50a590410688a",
  "title": "02-直接复制对象的问题.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "02-直接复制对象的问题.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      const obj = {\n        uname: 'pink',\n\n        age: 18,\n      };\n\n      const o = obj;\n\n      console.log(o);\n\n      o.age = 20;\n\n      console.log(o);\n\n      console.log(obj);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
