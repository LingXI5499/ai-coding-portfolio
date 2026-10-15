window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["249dc69f9c2c1ffef10f"] = {
  "id": "249dc69f9c2c1ffef10f",
  "title": "8-map的拍错题.html",
  "treatment": "排错练习（不自动执行）",
  "sections": [
    {
      "title": "8-map的拍错题.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Document</title>\n  </head>\n  <body>\n    <script>\n      // 下面res的返回值是[2] 说法对吗\n      const arr = [1, 2, 3];\n\n      const res = arr.map(function (item, index) {\n        return item % 2 === 0;\n      });\n\n      console.log(res);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
