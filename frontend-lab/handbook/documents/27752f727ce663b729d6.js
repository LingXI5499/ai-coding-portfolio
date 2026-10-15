window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["27752f727ce663b729d6"] = {
  "id": "27752f727ce663b729d6",
  "title": "05-打印五行五列小星星.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "05-打印五行五列小星星.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // // 外层循环打印行数\n\n      // for (let i = 1; i <= 5; i++) {\n\n      //   // 里层循环打印几个星星\n\n      //   for (let j = 1; j <= 5; j++) {\n\n      //     document.write('☆')\n\n      //   }\n\n      //   // 进行换行显示\n\n      //   document.write('<br>')\n\n      // }\n\n      let row = +prompt('请输入行数:');\n\n      let col = +prompt('请输入列数:');\n\n      // 外层循环打印行数\n\n      for (let i = 1; i <= row; i++) {\n        // 里层循环打印几个星星\n\n        for (let j = 1; j <= col; j++) {\n          document.write('☆');\n        }\n\n        // 进行换行显示\n\n        document.write('<br>');\n      }\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
