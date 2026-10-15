window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["b1e8323b4b54b07b80af"] = {
  "id": "b1e8323b4b54b07b80af",
  "title": "08-闰年案例.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "08-闰年案例.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // 1. 用户输入\n\n      let year = +prompt('请输入年份');\n\n      // 2. 判断输出\n\n      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {\n        alert(`${year}年是闰年`);\n      } else {\n        alert(`${year}年是平年`);\n      }\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
