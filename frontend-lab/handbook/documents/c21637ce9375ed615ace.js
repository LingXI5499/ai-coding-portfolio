window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["c21637ce9375ed615ace"] = {
  "id": "c21637ce9375ed615ace",
  "title": "16-防抖小案例.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "16-防抖小案例.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n\n    <style>\n      .box {\n        width: 500px;\n\n        height: 500px;\n\n        background-color: #ccc;\n\n        color: #fff;\n\n        text-align: center;\n\n        font-size: 100px;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"box\"></div>\n\n    <script>\n      const box = document.querySelector('.box');\n\n      let i = 1; // 让这个变量++\n\n      // 鼠标移动函数\n\n      function mouseMove() {\n        box.innerHTML = ++i;\n\n        // 如果里面存在大量操作 dom 的情况，可能会卡顿\n      }\n\n      // 防抖函数\n\n      function debounce(fn, t) {\n        let timeId;\n\n        return function () {\n          // 如果有定时器就清除\n\n          if (timeId) clearTimeout(timeId);\n\n          // 开启定时器 200\n\n          timeId = setTimeout(function () {\n            fn();\n          }, t);\n        };\n      }\n\n      // box.addEventListener('mousemove', mouseMove)\n\n      box.addEventListener('mousemove', debounce(mouseMove, 200));\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
