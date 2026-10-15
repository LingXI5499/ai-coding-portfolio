window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["3986c9500c88b9a28822"] = {
  "id": "3986c9500c88b9a28822",
  "title": "01-正则表达式的使用.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "01-正则表达式的使用.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      const str = '我们在学习前端，希望学习前端能高薪毕业';\n\n      // 正则表达式使用：\n\n      // 1. 定义规则\n\n      const reg = /前端/;\n\n      // 2. 是否匹配\n\n      // console.log(reg.test(str))  // true\n\n      // 3. exec()\n\n      console.log(reg.exec(str)); // 返回数组\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
