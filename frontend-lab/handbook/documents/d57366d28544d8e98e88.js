window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["d57366d28544d8e98e88"] = {
  "id": "d57366d28544d8e98e88",
  "title": "14-函数表达式.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "14-函数表达式.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // console.log(num)\n\n      // let num = 10\n\n      // 3 + 4\n\n      // num = 10\n\n      // 1. 函数表达式\n\n      fn(1, 2); //错误\n\n      let fn = function (x, y) {\n        // console.log('我是函数表达式')\n\n        console.log(x + y);\n      };\n\n      // 函数表达式和 具名函数的不同   function fn() {}\n\n      // 1. 具名函数的调用可以写到任何位置\n\n      // 2. 函数表达式，必须先声明函数表达式，后调用\n\n      // function fun() {\n\n      //   console.log(1)\n\n      // }\n\n      // fun()\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
