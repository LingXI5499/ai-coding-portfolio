window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["271e22d41b6c4a09ca35"] = {
  "id": "271e22d41b6c4a09ca35",
  "title": "12-animation拆分写法.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "12-animation拆分写法.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>animation拆分写法</title>\n\n    <style>\n      .box {\n        width: 200px;\n\n        height: 100px;\n\n        background-color: pink;\n\n        /* 动画名称 */\n\n        animation-name: change;\n\n        /* 动画时长 */\n\n        animation-duration: 1s;\n\n        /* 播放次数 */\n\n        animation-iteration-count: infinite;\n\n        /* animation-play-state: paused; */\n      }\n\n      .box:hover {\n        /* 暂停动画 */\n\n        animation-play-state: paused;\n      }\n\n      /* 宽度从 200 变化到 800 */\n\n      @keyframes change {\n        0% {\n          width: 200px;\n        }\n\n        100% {\n          width: 800px;\n        }\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"box\"></div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
