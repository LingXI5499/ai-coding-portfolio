window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["15ca05c6e309d49594a5"] = {
  "id": "15ca05c6e309d49594a5",
  "title": "04-函数封装案例.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "04-函数封装案例.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // 1. 求2个数的和\n\n      // function getSum() {\n\n      //   let num1 = +prompt('请输入第一个数')\n\n      //   let num2 = +prompt('请输入第二个数')\n\n      //   console.log(num1 + num2)\n\n      // }\n\n      // getSum()\n\n      // 2. 求 1~100 累加和\n\n      function getSum() {\n        let sum = 0;\n\n        for (let i = 1; i <= 100; i++) {\n          sum += i;\n        }\n\n        console.log(sum);\n      }\n\n      getSum();\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
