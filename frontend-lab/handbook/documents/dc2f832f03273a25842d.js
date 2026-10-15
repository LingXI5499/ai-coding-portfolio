window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["dc2f832f03273a25842d"] = {
  "id": "dc2f832f03273a25842d",
  "title": "11-求最大值案例.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "11-求最大值案例.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // 1. 用户输入\n\n      let num1 = +prompt('请您输入第一个数：');\n\n      let num2 = +prompt('请您输入第二个数：');\n\n      // 2. 判断输出-三元运算符\n\n      // if (num1 > num2) {\n\n      //   alert(num1)\n\n      // } else {\n\n      //   alert(num2)\n\n      // }\n\n      num1 > num2 ? alert(`最大值是: ${num1}`) : alert(`最大值是: ${num2}`);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
