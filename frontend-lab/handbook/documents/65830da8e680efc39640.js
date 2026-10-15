window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["65830da8e680efc39640"] = {
  "id": "65830da8e680efc39640",
  "title": "11-animation复合属性.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "11-animation复合属性.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>animation复合属性</title>\n\n    <style>\n      .box {\n        width: 200px;\n\n        height: 100px;\n\n        background-color: pink;\n\n        /* linear：匀速 */\n\n        animation: change 1s linear;\n\n        /* steps：分步动画，工作中，配合精灵图实现精灵动画 */\n\n        animation: change 1s steps(3);\n\n        /* 如果有两个时间，第一个是动画时长，第二个是延迟时间 */\n\n        animation: change 1s 2s;\n\n        /* 重复次数，infinite：无限循环 */\n\n        animation: change 1s 3;\n\n        animation: change 1s infinite;\n\n        /* alternate：反向 */\n\n        animation: change 1s infinite alternate;\n\n        /* 动画执行完毕时的状态， forwards：结束状态； backwards：开始状态（默认） */\n\n        animation: change 1s forwards;\n\n        animation: change 1s backwards;\n      }\n\n      /* 宽度 从 200 变化到 800 */\n\n      @keyframes change {\n        from {\n          width: 200px;\n        }\n\n        to {\n          width: 800px;\n        }\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"box\"></div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
