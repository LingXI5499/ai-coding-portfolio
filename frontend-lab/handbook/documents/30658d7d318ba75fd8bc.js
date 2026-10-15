window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["30658d7d318ba75fd8bc"] = {
  "id": "30658d7d318ba75fd8bc",
  "title": "02-常见的日期对象方法.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "02-常见的日期对象方法.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // 获得日期对象\n\n      const date = new Date();\n\n      // 使用里面的方法\n\n      console.log(date.getFullYear());\n\n      console.log(date.getMonth() + 1); // 月份要 + 1\n\n      console.log(date.getDate());\n\n      console.log(date.getDay()); // 星期几\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
