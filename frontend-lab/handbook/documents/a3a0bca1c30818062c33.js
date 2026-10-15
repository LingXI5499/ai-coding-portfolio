window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["a3a0bca1c30818062c33"] = {
  "id": "a3a0bca1c30818062c33",
  "title": "07-自动跳转到移动端.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "07-自动跳转到移动端.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n\n    <script>\n      // 检测 userAgent（浏览器信息）\n\n      !(function () {\n        const userAgent = navigator.userAgent;\n\n        // 验证是否为Android或iPhone\n\n        const android = userAgent.match(/(Android);?[\\s\\/]+([\\d.]+)?/);\n\n        const iphone = userAgent.match(/(iPhone\\sOS)\\s([\\d_]+)/);\n\n        // 如果是Android或iPhone，则跳转至移动站点\n\n        if (android || iphone) {\n          location.href = 'http://m.itcast.cn';\n        }\n      })();\n\n      // !(function () { })();\n\n      !(function () {})();\n    </script>\n  </head>\n\n  <body>\n    这是pc端的页面\n\n    <script>\n      // (function () { })()\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
