window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["a2700d2f11b07b28153e"] = {
  "id": "a2700d2f11b07b28153e",
  "title": "13-变量的特殊情况.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "13-变量的特殊情况.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // let num = 20\n\n      // function fn() {\n\n      //   num = 10  // 全局变量来看  强烈不允许\n\n      // }\n\n      // fn()\n\n      // console.log(num)\n\n      // function fun(x, y) {\n\n      //   // 形参可以看做是函数的局部变量\n\n      //   console.log(x)\n\n      // }\n\n      // fun(1, 2)\n\n      // console.log(x)  // 错误的\n\n      // let num = 10\n\n      function fn() {\n        // let num = 20\n\n        function fun() {\n          // let num = 30\n\n          console.log(num);\n        }\n\n        fun();\n      }\n\n      fn();\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
