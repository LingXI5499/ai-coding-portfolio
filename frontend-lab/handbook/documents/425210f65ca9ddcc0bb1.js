window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["425210f65ca9ddcc0bb1"] = {
  "id": "425210f65ca9ddcc0bb1",
  "title": "04-逻辑运算符.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "04-逻辑运算符.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // 逻辑与 一假则假\n\n      console.log(true && true);\n\n      console.log(false && true);\n\n      console.log(3 < 5 && 3 > 2);\n\n      console.log(3 < 5 && 3 < 2);\n\n      console.log('-----------------');\n\n      // 逻辑或 一真则真\n\n      console.log(true || true);\n\n      console.log(false || true);\n\n      console.log(false || false);\n\n      console.log('-----------------');\n\n      // 逻辑非  取反\n\n      console.log(!true);\n\n      console.log(!false);\n\n      console.log('-----------------');\n\n      let num = 6;\n\n      console.log(num > 5 && num < 10);\n\n      console.log('-----------------');\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
