window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["dc12f61eac4565d11146"] = {
  "id": "dc12f61eac4565d11146",
  "title": "04-递归函数.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "04-递归函数.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      let i = 1;\n\n      function fn() {\n        console.log(`这是第${i}次`);\n\n        if (i >= 6) {\n          return;\n        }\n\n        i++;\n\n        fn();\n      }\n\n      fn();\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
