window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["d32eb8188ad1c991cce4"] = {
  "id": "d32eb8188ad1c991cce4",
  "title": "04-时间的另外一个写法.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "04-时间的另外一个写法.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n\n    <style>\n      div {\n        width: 300px;\n\n        height: 40px;\n\n        border: 1px solid pink;\n\n        text-align: center;\n\n        line-height: 40px;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div></div>\n\n    <script>\n      const div = document.querySelector('div');\n\n      // 得到日期对象\n\n      const date = new Date();\n\n      div.innerHTML = date.toLocaleString(); // 2022/4/1 09:41:21\n\n      setInterval(function () {\n        const date = new Date();\n\n        div.innerHTML = date.toLocaleString(); // 2022/4/1 09:41:21\n      }, 1000);\n\n      // div.innerHTML = date.toLocaleDateString()  // 2022/4/1\n\n      // div.innerHTML = date.toLocaleTimeString()  // 2022/4/1\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
