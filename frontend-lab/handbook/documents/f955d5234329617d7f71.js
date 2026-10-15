window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["f955d5234329617d7f71"] = {
  "id": "f955d5234329617d7f71",
  "title": "13-scrollTop细节.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "13-scrollTop细节.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n\n    <style>\n      body {\n        height: 3000px;\n      }\n    </style>\n  </head>\n\n  <body>\n    <script>\n      document.documentElement.scrollTop = 800;\n\n      window.addEventListener('scroll', function () {\n        // 必须写到里面\n\n        const n = document.documentElement.scrollTop;\n\n        // 得到是什么数据   数字型 不带单位\n\n        // console.log(n)\n      });\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
