window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["cc2d78a8974ba9154b69"] = {
  "id": "cc2d78a8974ba9154b69",
  "title": "05-事件解绑.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "05-事件解绑.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <button>点击</button>\n\n    <script>\n      const btn = document.querySelector('button');\n\n      // btn.onclick = function () {\n\n      //   alert('点击了')\n\n      //   // L0 事件移除解绑\n\n      //   btn.onclick = null\n\n      // }\n\n      function fn() {\n        alert('点击了');\n      }\n\n      btn.addEventListener('click', fn);\n\n      // L2 事件移除解绑\n\n      btn.removeEventListener('click', fn);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
