window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["485386427bb6a01a8612"] = {
  "id": "485386427bb6a01a8612",
  "title": "07-双分支语句.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "07-双分支语句.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // 1. 用户输入\n\n      let uname = prompt('请输入用户名:');\n\n      let pwd = prompt('请输入密码:');\n\n      // 2. 判断输出\n\n      if (uname === 'pink' && pwd === '123456') {\n        alert('恭喜登录成功');\n      } else {\n        alert('用户名或者密码错误');\n      }\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
