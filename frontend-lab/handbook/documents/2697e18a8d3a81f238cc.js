window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["2697e18a8d3a81f238cc"] = {
  "id": "2697e18a8d3a81f238cc",
  "title": "03-退出循环.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "03-退出循环.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // for (let i = 1; i <= 5; i++) {\n\n      //   if (i === 3) {\n\n      //     continue  // 退出本次循环，本次循环中 continue下面的语句不在执行\n\n      //   }\n\n      //   console.log(i)\n\n      //   document.write(i)\n\n      // }\n\n      // for (let i = 1; i <= 5; i++) {\n\n      //   if (i === 3) {\n\n      //     break  // 退出整个循环 结束循环\n\n      //   }\n\n      //   console.log(i)\n\n      //   document.write(i)\n\n      // }\n\n      // 无限循环\n\n      for (;;) {\n        console.log(11);\n      }\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
