window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["594270c1b5c0e41b3c0f"] = {
  "id": "594270c1b5c0e41b3c0f",
  "title": "10-阻止默认行为.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "10-阻止默认行为.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <form action=\"http://www.itcast.cn\">\n      <input type=\"submit\" value=\"免费注册\" />\n    </form>\n\n    <a href=\"http://www.baidu.com\">百度一下</a>\n\n    <script>\n      const form = document.querySelector('form');\n\n      form.addEventListener('submit', function (e) {\n        // 阻止默认行为  提交\n\n        e.preventDefault();\n      });\n\n      const a = document.querySelector('a');\n\n      a.addEventListener('click', function (e) {\n        e.preventDefault();\n      });\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
