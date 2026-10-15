window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["1b5668e2f482ebd11060"] = {
  "id": "1b5668e2f482ebd11060",
  "title": "15-立即执行函数.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "15-立即执行函数.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // let num = 10\n\n      // let num = 20\n\n      // (function () {\n\n      //   console.log(11)\n\n      // })()\n\n      // (function () {\n\n      //   let num = 10\n\n      // })();\n\n      // (function () {\n\n      //   let num = 20\n\n      // })();\n\n      // 1. 第一种写法\n\n      (function (x, y) {\n        console.log(x + y);\n\n        let num = 10;\n\n        let arr = [];\n      })(1, 2);\n\n      // (function(){})();\n\n      // 2.第二种写法\n\n      // (function () { }());\n\n      (function (x, y) {\n        let arr = [];\n\n        console.log(x + y);\n      })(1, 3);\n\n      // (function(){})()\n\n      // (function(){}())\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
