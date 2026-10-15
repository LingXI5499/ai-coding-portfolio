window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["c62528421dd20bf2b161"] = {
  "id": "c62528421dd20bf2b161",
  "title": "07-修改元素常见的属性.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "07-修改元素常见的属性.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <img src=\"./images/1.webp\" alt=\"\" />\n\n    <script>\n      // 1. 获取图片元素\n\n      const img = document.querySelector('img');\n\n      // 2. 修改图片对象的属性   对象.属性 = 值\n\n      img.src = './images/2.webp';\n\n      img.title = 'pink老师的艺术照';\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
