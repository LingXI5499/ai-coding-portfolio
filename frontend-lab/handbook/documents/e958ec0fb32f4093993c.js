window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["e958ec0fb32f4093993c"] = {
  "id": "e958ec0fb32f4093993c",
  "title": "12-call.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "12-call.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      const obj = {\n        uname: 'pink',\n      };\n\n      function fn(x, y) {\n        console.log(this); // window\n\n        console.log(x + y);\n      }\n\n      // 1. 调用函数\n\n      // 2. 改变 this 指向\n\n      fn.call(obj, 1, 2);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
