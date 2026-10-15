window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["f08ad0c79b0fc3d96aa7"] = {
  "id": "f08ad0c79b0fc3d96aa7",
  "title": "06-if单分支语句.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "06-if单分支语句.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // 单分支语句\n\n      // if (false) {\n\n      //   console.log('执行语句')\n\n      // }\n\n      // if (3 > 5) {\n\n      //   console.log('执行语句')\n\n      // }\n\n      // if (2 === '2') {\n\n      //   console.log('执行语句')\n\n      // }\n\n      //  1. 除了0 所有的数字都为真\n\n      //   if (0) {\n\n      //     console.log('执行语句')\n\n      //   }\n\n      // 2.除了 '' 所有的字符串都为真 true\n\n      // if ('pink老师') {\n\n      //   console.log('执行语句')\n\n      // }\n\n      // if ('') {\n\n      //   console.log('执行语句')\n\n      // }\n\n      // // if ('') console.log('执行语句')\n\n      // 1. 用户输入\n\n      let score = +prompt('请输入成绩');\n\n      // 2. 进行判断输出\n\n      if (score >= 700) {\n        alert('恭喜考入黑马程序员');\n      }\n\n      console.log('-----------------');\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
