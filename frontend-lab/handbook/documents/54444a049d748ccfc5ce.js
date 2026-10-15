window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["54444a049d748ccfc5ce"] = {
  "id": "54444a049d748ccfc5ce",
  "title": "14-简单计算器.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "14-简单计算器.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // 1.用户输入  2个数字 +  操作符号  + - *  /\n\n      let num1 = +prompt('请您输入第一个数字:');\n\n      let num2 = +prompt('请您输入第二个数字:');\n\n      let sp = prompt('请您输入 + - * / 其中一个:');\n\n      // 2. 判断输出\n\n      switch (sp) {\n        case '+':\n          alert(`两个数的加法操作是${num1 + num2}`);\n\n          break;\n\n        case '-':\n          alert(`两个数的减法操作是${num1 - num2}`);\n\n          break;\n\n        case '*':\n          alert(`两个数的乘法操作是${num1 * num2}`);\n\n          break;\n\n        case '/':\n          alert(`两个数的除法操作是${num1 / num2}`);\n\n          break;\n\n        default:\n          alert(`你干啥咧，请输入+-*/`);\n      }\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
