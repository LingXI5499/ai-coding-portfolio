window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["950b688d5ef8b0b70e0e"] = {
  "id": "950b688d5ef8b0b70e0e",
  "title": "07-99乘法表.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "07-99乘法表.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n\n    <style>\n      span {\n        display: inline-block;\n\n        width: 100px;\n\n        padding: 5px 10px;\n\n        border: 1px solid pink;\n\n        margin: 2px;\n\n        border-radius: 5px;\n\n        box-shadow: 2px 2px 2px rgba(255, 192, 203, 0.4);\n\n        background-color: rgba(255, 192, 203, 0.1);\n\n        text-align: center;\n\n        color: hotpink;\n      }\n    </style>\n  </head>\n\n  <body>\n    <script>\n      // 1. 外层循环控制行数\n\n      for (let i = 1; i <= 9; i++) {\n        // 2. 里层循环控制列数\n\n        for (let j = 1; j <= i; j++) {\n          document.write(`<span>${j} X ${i} = ${i * j}</span>`);\n        }\n\n        // 换行\n\n        document.write('<br>');\n      }\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
