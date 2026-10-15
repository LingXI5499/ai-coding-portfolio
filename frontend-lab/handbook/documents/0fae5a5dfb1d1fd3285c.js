window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["0fae5a5dfb1d1fd3285c"] = {
  "id": "0fae5a5dfb1d1fd3285c",
  "title": "08-随机显示图片.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "08-随机显示图片.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <img src=\"./images/1.webp\" alt=\"\" />\n\n    <script>\n      // 取到 N ~ M 的随机整数\n\n      function getRandom(N, M) {\n        return Math.floor(Math.random() * (M - N + 1)) + N;\n      }\n\n      // 1. 获取图片对象\n\n      const img = document.querySelector('img');\n\n      // 2. 随机得到序号\n\n      const random = getRandom(1, 6);\n\n      // 3. 更换路径\n\n      img.src = `./images/${random}.webp`;\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
