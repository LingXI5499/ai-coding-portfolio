window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["2a41915a1f6404742b31"] = {
  "id": "2a41915a1f6404742b31",
  "title": "09-通过style属性修改样式.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "09-通过style属性修改样式.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n\n    <style>\n      .box {\n        width: 200px;\n\n        height: 200px;\n\n        background-color: pink;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"box\"></div>\n\n    <script>\n      // 1. 获取元素\n\n      const box = document.querySelector('.box');\n\n      //2. 修改样式属性 对象.style.样式属性 = '值'  别忘了跟单位\n\n      box.style.width = '300px';\n\n      // 多组单词的采取 小驼峰命名法\n\n      box.style.backgroundColor = 'hotpink';\n\n      box.style.border = '2px solid blue';\n\n      box.style.borderTop = '2px solid red';\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
