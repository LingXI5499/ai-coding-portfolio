window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["2a857e29f93183e1766d"] = {
  "id": "2a857e29f93183e1766d",
  "title": "08-实参可以是变量.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "08-实参可以是变量.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // 求 n ~ m 的累加和\n\n      function getSum(n = 0, m = 0) {\n        let sum = 0;\n\n        for (let i = n; i <= m; i++) {\n          sum += i;\n        }\n\n        console.log(sum);\n      }\n\n      // getSum()\n\n      // getSum(1, 2)\n\n      let num1 = +prompt('请输入起始值:');\n\n      let num2 = +prompt('请输入结束值:');\n\n      // 调用函数\n\n      getSum(num1, num2); // 实参可以是变量\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
