window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["178c569204c72740a66d"] = {
  "id": "178c569204c72740a66d",
  "title": "03-5秒自动关闭的广告.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "03-5秒自动关闭的广告.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n\n    <style>\n      img {\n        position: fixed;\n\n        left: 0;\n\n        bottom: 0;\n      }\n    </style>\n  </head>\n\n  <body>\n    <img src=\"./images/ad.png\" alt=\"\" />\n\n    <script>\n      // 1.获取元素\n\n      const img = document.querySelector('img');\n\n      setTimeout(function () {\n        img.style.display = 'none';\n      }, 3000);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
