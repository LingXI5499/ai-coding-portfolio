window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["7820f7fb899c2f66eef6"] = {
  "id": "7820f7fb899c2f66eef6",
  "title": "05-得到时间戳.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "05-得到时间戳.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // 1. getTime()\n\n      const date = new Date();\n\n      console.log(date.getTime());\n\n      // 2. +new Date()\n\n      console.log(+new Date());\n\n      // 3. Date.now()\n\n      console.log(Date.now());\n\n      // 2. +new Date()\n\n      console.log(+new Date());\n\n      console.log('-----------------');\n\n      console.log(+new Date('2022-4-1 18:30:00'));\n\n      // 我要根据日期 Day()  0 ~ 6  返回的是 星期一\n\n      const arr = [\n        '星期天',\n        '星期一',\n        '星期二',\n        '星期三',\n        '星期四',\n        '星期五',\n        '星期六',\n      ];\n\n      // const date = new Date()\n\n      console.log(arr[new Date().getDay()]);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
