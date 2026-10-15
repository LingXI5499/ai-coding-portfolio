window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["ae268ea24c0df8109572"] = {
  "id": "ae268ea24c0df8109572",
  "title": "11-猜数字游戏.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "11-猜数字游戏.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // 1. 随机生成一个数字 1~10\n\n      // 取到 N ~ M 的随机整数\n\n      function getRandom(N, M) {\n        return Math.floor(Math.random() * (M - N + 1)) + N;\n      }\n\n      let random = getRandom(1, 10);\n\n      console.log(random);\n\n      // 需要不断的循环\n\n      while (true) {\n        // 2. 用户输入一个值\n\n        let num = +prompt('请输入你猜的数字:');\n\n        // 3. 判断输出\n\n        if (num > random) {\n          alert('您猜大了');\n        } else if (num < random) {\n          alert('您猜小了');\n        } else {\n          alert('猜对啦，真厉害');\n\n          break; // 退出循环\n        }\n      }\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
