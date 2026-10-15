window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["7af7d70ae25443d58f71"] = {
  "id": "7af7d70ae25443d58f71",
  "title": "03-显示格式化的时间.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "03-显示格式化的时间.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n\n    <style>\n      div {\n        width: 300px;\n\n        height: 40px;\n\n        border: 1px solid pink;\n\n        text-align: center;\n\n        line-height: 40px;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div></div>\n\n    <script>\n      const div = document.querySelector('div');\n\n      function getMyDate() {\n        const date = new Date();\n\n        let h = date.getHours();\n\n        let m = date.getMinutes();\n\n        let s = date.getSeconds();\n\n        h = h < 10 ? '0' + h : h;\n\n        m = m < 10 ? '0' + m : m;\n\n        s = s < 10 ? '0' + s : s;\n\n        return `今天是: ${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}号 ${h}:${m}:${s}`;\n      }\n\n      div.innerHTML = getMyDate();\n\n      setInterval(function () {\n        div.innerHTML = getMyDate();\n      }, 1000);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
