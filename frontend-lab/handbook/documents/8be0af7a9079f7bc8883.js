window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["8be0af7a9079f7bc8883"] = {
  "id": "8be0af7a9079f7bc8883",
  "title": "12-通过classList修改样式.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "12-通过classList修改样式.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n\n    <style>\n      .box {\n        width: 200px;\n\n        height: 200px;\n\n        color: #333;\n      }\n\n      .active {\n        color: red;\n\n        background-color: pink;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"box active\">文字</div>\n\n    <script>\n      // 通过classList添加\n\n      // 1. 获取元素\n\n      const box = document.querySelector('.box');\n\n      // 2. 修改样式\n\n      // 2.1 追加类 add() 类名不加点，并且是字符串\n\n      // box.classList.add('active')\n\n      // 2.2 删除类  remove() 类名不加点，并且是字符串\n\n      // box.classList.remove('box')\n\n      // 2.3 切换类  toggle()  有还是没有啊， 有就删掉，没有就加上\n\n      box.classList.toggle('active');\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
