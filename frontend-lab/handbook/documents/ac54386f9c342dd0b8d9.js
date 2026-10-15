window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["ac54386f9c342dd0b8d9"] = {
  "id": "ac54386f9c342dd0b8d9",
  "title": "05-location对象.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "05-location对象.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <form action=\"\">\n      <input type=\"text\" name=\"username\" />\n\n      <input type=\"password\" name=\"pwd\" />\n\n      <button>提交</button>\n    </form>\n\n    <a href=\"#/my\">我的</a>\n\n    <a href=\"#/friend\">关注</a>\n\n    <a href=\"#/download\">下载</a>\n\n    <button class=\"reload\">刷新</button>\n\n    <script>\n      // console.log(window.location)\n\n      // console.log(location)\n\n      // console.log(location.href)\n\n      // 1. href 经常用href 利用js的方法去跳转页面\n\n      // location.href = 'http://www.baidu.com'\n\n      const reload = document.querySelector('.reload');\n\n      reload.addEventListener('click', function () {\n        // f5 刷新页面\n\n        // location.reload()\n\n        // 强制刷新  ctrl+f5\n\n        location.reload(true);\n      });\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
