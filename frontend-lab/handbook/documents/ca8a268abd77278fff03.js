window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["ca8a268abd77278fff03"] = {
  "id": "ca8a268abd77278fff03",
  "title": "15-offsetLeft.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "15-offsetLeft.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n\n    <style>\n      div {\n        position: relative;\n\n        width: 200px;\n\n        height: 200px;\n\n        background-color: pink;\n\n        margin: 100px;\n      }\n\n      p {\n        width: 100px;\n\n        height: 100px;\n\n        background-color: purple;\n\n        margin: 50px;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div>\n      <p></p>\n    </div>\n\n    <script>\n      const div = document.querySelector('div');\n\n      const p = document.querySelector('p');\n\n      // console.log(div.offsetLeft)\n\n      // 检测盒子的位置  最近一级带有定位的祖先元素\n\n      console.log(p.offsetLeft);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
