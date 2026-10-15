window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["20196916500e077837f3"] = {
  "id": "20196916500e077837f3",
  "title": "17-逻辑中断.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "17-逻辑中断.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      function fn(x, y) {\n        x = x || 0;\n\n        y = y || 0;\n\n        console.log(x + y);\n      }\n\n      fn(1, 2);\n\n      // fn()\n\n      // console.log(false && 22)\n\n      // console.log(false && 3 + 5)\n\n      // let age = 18\n\n      // console.log(false && age++) // age++ 不执行  一假则假\n\n      // console.log(age)\n\n      // console.log(true || age++)\n\n      // console.log(age)\n\n      // console.log(11 && 22)  // 都是真，这返回最后一个真值\n\n      // console.log(11 || 22)  //  输出第一个真值\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
