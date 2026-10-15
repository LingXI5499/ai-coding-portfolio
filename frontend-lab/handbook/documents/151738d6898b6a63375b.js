window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["151738d6898b6a63375b"] = {
  "id": "151738d6898b6a63375b",
  "title": "12-猜数字游戏设定次数.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "12-猜数字游戏设定次数.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // 1. 随机生成一个数字 1~10\n\n      // 取到 N ~ M 的随机整数\n\n      function getRandom(N, M) {\n        return Math.floor(Math.random() * (M - N + 1)) + N;\n      }\n\n      let random = getRandom(1, 10);\n\n      // 2. 设定三次  三次没猜对就直接退出\n\n      let flag = true; // 开关变量\n\n      for (let i = 1; i <= 3; i++) {\n        let num = +prompt('请输入1~10之间的一个数字:');\n\n        if (num > random) {\n          alert('您猜大了，继续');\n        } else if (num < random) {\n          alert('您猜小了，继续');\n        } else {\n          flag = false;\n\n          alert('猜对了，真厉害');\n\n          break;\n        }\n      }\n\n      // 写到for的外面来\n\n      if (flag) {\n        alert('次数已经用完');\n      }\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
