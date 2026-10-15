window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["5e10a6ab9d15e1fba77a"] = {
  "id": "5e10a6ab9d15e1fba77a",
  "title": "04-循环的嵌套.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "04-循环的嵌套.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // 外层循环打印 第 n 天\n\n      for (let i = 1; i <= 3; i++) {\n        document.write(`第${i}天<br>`);\n\n        // 里层循环打印 第几个单词\n\n        for (let j = 1; j <= 5; j++) {\n          document.write(`记住了第${j}个单词<br>`);\n        }\n      }\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
