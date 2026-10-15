window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["6b088aabec494b5544d8"] = {
  "id": "6b088aabec494b5544d8",
  "title": "03-点击关闭.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "03-点击关闭.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "李伟兴 09:31:13\n\n<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n\n    <style>\n      .box {\n        position: relative;\n\n        width: 1000px;\n\n        height: 200px;\n\n        background-color: pink;\n\n        margin: 100px auto;\n\n        text-align: center;\n\n        font-size: 50px;\n\n        line-height: 200px;\n\n        font-weight: 700;\n      }\n\n      .box1 {\n        position: absolute;\n\n        right: 20px;\n\n        top: 10px;\n\n        width: 20px;\n\n        height: 20px;\n\n        background-color: skyblue;\n\n        text-align: center;\n\n        line-height: 20px;\n\n        font-size: 16px;\n\n        cursor: pointer;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"box\">\n      我是广告\n\n      <div class=\"box1\">X</div>\n    </div>\n\n    <script>\n      // 1. 获取事件源\n\n      const box1 = document.querySelector('.box1');\n\n      //  关闭的是大盒子\n\n      const box = document.querySelector('.box');\n\n      // 2. 事件侦听\n\n      box1.addEventListener('click', function () {\n        box.style.display = 'none';\n      });\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
