window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["28c8337a90d2da030f55"] = {
  "id": "28c8337a90d2da030f55",
  "title": "09-throw抛出异常.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "09-throw抛出异常.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      function fn(x, y) {\n        if (!x || !y) {\n          // throw '没有参数传递进来'\n\n          throw new Error('没有参数传递过来');\n        }\n\n        return x + y;\n      }\n\n      console.log(fn());\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
