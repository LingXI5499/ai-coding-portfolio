window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["144940b6009216e7cfcd"] = {
  "id": "144940b6009216e7cfcd",
  "title": "06-事件监听方法.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "06-事件监听方法.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <button>点击</button>\n\n    <script>\n      const btn = document.querySelector('button');\n\n      // btn.onclick = function () {\n\n      //   alert(11)\n\n      // }\n\n      // btn.onclick = function () {\n\n      //   alert(22)\n\n      // }\n\n      // let num = 10\n\n      // num = 20\n\n      btn.addEventListener('click', function () {\n        alert(11);\n      });\n\n      btn.addEventListener('click', function () {\n        alert(22);\n      });\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
