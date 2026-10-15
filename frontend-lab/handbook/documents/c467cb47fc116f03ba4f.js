window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["c467cb47fc116f03ba4f"] = {
  "id": "c467cb47fc116f03ba4f",
  "title": "10-随机更换背景图片.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "10-随机更换背景图片.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n\n    <style>\n      body {\n        background: url(./images/desktop_1.jpg) no-repeat top center/cover;\n      }\n    </style>\n  </head>\n\n  <body>\n    <script>\n      // console.log(document.body)\n\n      // 取到 N ~ M 的随机整数\n\n      function getRandom(N, M) {\n        return Math.floor(Math.random() * (M - N + 1)) + N;\n      }\n\n      // 随机数\n\n      const random = getRandom(1, 10);\n\n      document.body.style.backgroundImage = `url(./images/desktop_${random}.jpg)`;\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
