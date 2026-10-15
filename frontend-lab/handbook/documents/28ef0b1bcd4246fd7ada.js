window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["28ef0b1bcd4246fd7ada"] = {
  "id": "28ef0b1bcd4246fd7ada",
  "title": "15-多组动画.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "15-多组动画.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>多组动画</title>\n\n    <style>\n      div {\n        width: 140px;\n\n        height: 140px;\n\n        /* border: 1px solid #000; */\n\n        background-image: url(./images/bg.png);\n\n        animation:\n          run 1s steps(12) infinite,\n          move 3s forwards;\n      }\n\n      /* 当动画的开始状态样式 跟 盒子默认样式相同，可以省略动画开始状态的代码 */\n\n      @keyframes run {\n        /* from {\n\n        background-position: 0 0;\n\n      } */\n\n        to {\n          background-position: -1680px 0;\n        }\n      }\n\n      @keyframes move {\n        /* 0% {\n\n        transform: translate(0);\n\n      } */\n\n        100% {\n          transform: translate(800px);\n        }\n      }\n    </style>\n  </head>\n\n  <body>\n    <div></div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
