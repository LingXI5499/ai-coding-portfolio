window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["fe66ba425768a4459ec7"] = {
  "id": "fe66ba425768a4459ec7",
  "title": "07-课堂案例-涨薪.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "07-课堂案例-涨薪.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      const arr = [\n        {\n          name: '张三',\n\n          salary: 10000,\n        },\n        {\n          name: '李四',\n\n          salary: 10000,\n        },\n        {\n          name: '王五',\n\n          salary: 20000,\n        },\n      ];\n\n      // 涨薪的钱数  10000 * 0.3\n\n      // const money = arr.reduce(function (prev, item) {\n\n      //   return prev + item.salary * 0.3\n\n      // }, 0)\n\n      const money = arr.reduce((prev, item) => prev + item.salary * 0.3, 0);\n\n      console.log(money);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
