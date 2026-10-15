window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["17cde3e27e41cc71a5b4"] = {
  "id": "17cde3e27e41cc71a5b4",
  "title": "20-检测数据类型.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "20-检测数据类型.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      let num = 10;\n\n      console.log(typeof num);\n\n      let str = 'pink';\n\n      console.log(typeof str);\n\n      let str1 = '10';\n\n      console.log(typeof str1);\n\n      let flag = false;\n\n      console.log(typeof flag);\n\n      let un;\n\n      console.log(typeof un);\n\n      let obj = null;\n\n      console.log(typeof obj);\n\n      let num1 = prompt('请输入第一个数：');\n\n      console.log(typeof num1);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
