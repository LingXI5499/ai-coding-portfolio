window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["a489b306ad1179289286"] = {
  "id": "a489b306ad1179289286",
  "title": "02-事件监听.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "02-事件监听.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <button>点击</button>\n\n    <script>\n      // 需求： 点击了按钮，弹出一个对话框\n\n      // 1. 事件源   按钮\n\n      // 2.事件类型 点击鼠标   click 字符串\n\n      // 3. 事件处理程序 弹出对话框\n\n      const btn = document.querySelector('button');\n\n      btn.addEventListener('click', function () {\n        alert('你早呀~');\n      });\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
