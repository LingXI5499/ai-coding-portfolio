window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["f19c1fc8ac3063d52eb8"] = {
  "id": "f19c1fc8ac3063d52eb8",
  "title": "05-函数提升.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "05-函数提升.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      var fun;\n\n      // 1. 会把所有函数声明提升到当前作用域的最前面\n\n      // 2. 只提升函数声明，不提升函数调用\n\n      // fn()\n\n      // function fn() {\n\n      //   console.log('函数提升')\n\n      // }\n\n      // fun()\n\n      // var fun = function () {\n\n      //   console.log('函数表达式')\n\n      // }\n\n      // 函数表达式 必须先声明和赋值， 后调用 否则 报错\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
