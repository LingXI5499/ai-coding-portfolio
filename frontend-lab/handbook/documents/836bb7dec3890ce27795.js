window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["836bb7dec3890ce27795"] = {
  "id": "836bb7dec3890ce27795",
  "title": "按钮缩放.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "按钮缩放.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>按钮缩放</title>\n    <style>\n      * {\n        margin: 0;\n        padding: 0;\n      }\n\n      li {\n        list-style: none;\n      }\n\n      img {\n        width: 100%;\n      }\n\n      .box {\n        width: 249px;\n        height: 210px;\n        margin: 50px auto;\n      }\n\n      .box p {\n        color: #3b3b3b;\n        padding: 10px 10px 0 10px;\n      }\n\n      /* 1. 摆放播放按钮：图片区域的中间 */\n      .box li {\n        overflow: hidden;\n      }\n\n      .pic {\n        position: relative;\n      }\n\n      .pic::after {\n        position: absolute;\n        left: 50%;\n        top: 50%;\n        /* margin-left: -29px;\n        margin-top: -29px; */\n        /* transform: translate(-50%, -50%); */\n\n        content: '';\n        width: 58px;\n        height: 58px;\n        background-image: url(./images/play.png);\n        transform: translate(-50%, -50%) scale(5);\n        opacity: 0;\n\n        transition: all 0.5s;\n      }\n      /* 2. hover效果：大按钮，看不见：透明是0 → 小按钮，看得见：透明度1 */\n      .box li:hover .pic::after {\n        transform: translate(-50%, -50%) scale(1);\n        opacity: 1;\n      }\n    </style>\n  </head>\n  <body>\n    <div class=\"box\">\n      <ul>\n        <li>\n          <div class=\"pic\">\n            <img src=\"./images/party.jpeg\" alt=\"\" />\n          </div>\n          <p>【和平精英】“初火”音乐概念片：四圣觉醒......</p>\n        </li>\n      </ul>\n    </div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
