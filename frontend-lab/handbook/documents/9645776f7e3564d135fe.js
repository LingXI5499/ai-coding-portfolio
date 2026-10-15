window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["9645776f7e3564d135fe"] = {
  "id": "9645776f7e3564d135fe",
  "title": "09-localStorage存储.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "09-localStorage存储.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // 1. 要存储一个名字  'uname'， 'pink老师'\n\n      // localStorage.setItem('键'，'值')\n\n      localStorage.setItem('uname', 'pink老师');\n\n      // 2. 获取方式  都加引号\n\n      console.log(localStorage.getItem('uname'));\n\n      // 3. 删除本地存储  只删除名字\n\n      // localStorage.removeItem('uname')\n\n      // 4. 改  如果原来有这个键，则是改，如果么有这个键是增\n\n      localStorage.setItem('uname', 'red老师');\n\n      // 我要存一个年龄\n\n      // 2. 本地存储只能存储字符串数据类型\n\n      localStorage.setItem('age', 18);\n\n      console.log(localStorage.getItem('age'));\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
