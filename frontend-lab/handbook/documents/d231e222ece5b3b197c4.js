window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["d231e222ece5b3b197c4"] = {
  "id": "d231e222ece5b3b197c4",
  "title": "14-页面尺寸事件.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "14-页面尺寸事件.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n\n    <style>\n      div {\n        display: inline-block;\n\n        /* width: 200px; */\n\n        height: 200px;\n\n        background-color: pink;\n\n        padding: 10px;\n\n        border: 20px solid red;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div>123123123123123123123123123123123123123</div>\n\n    <script>\n      const div = document.querySelector('div');\n\n      console.log(div.clientWidth);\n\n      // resize 浏览器窗口大小发生变化的时候触发的事件\n\n      window.addEventListener('resize', function () {\n        console.log(1);\n      });\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
