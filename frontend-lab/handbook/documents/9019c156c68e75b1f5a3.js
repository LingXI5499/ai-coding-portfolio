window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["9019c156c68e75b1f5a3"] = {
  "id": "9019c156c68e75b1f5a3",
  "title": "04-变量提升.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "04-变量提升.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // 1. 把所有var声明的变量提升到 当前作用域的最前面\n\n      // 2. 只提升声明， 不提升赋值\n\n      // var num\n\n      // console.log(num + '件')\n\n      // num = 10\n\n      // console.log(num)\n\n      function fn() {\n        console.log(num);\n\n        var num = 10;\n      }\n\n      fn();\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
