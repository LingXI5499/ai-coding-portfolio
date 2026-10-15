window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["09219af401f9e9d3bfec"] = {
  "id": "09219af401f9e9d3bfec",
  "title": "07-函数参数剩余参数.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "07-函数参数剩余参数.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      function getSum(a, b, ...arr) {\n        console.log(arr); // 使用的时候不需要写 ...\n      }\n\n      getSum(2, 3);\n\n      getSum(1, 2, 3, 4, 5);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
