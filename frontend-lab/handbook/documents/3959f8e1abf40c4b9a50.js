window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["3959f8e1abf40c4b9a50"] = {
  "id": "3959f8e1abf40c4b9a50",
  "title": "综合案例.html",
  "treatment": "排错练习（不自动执行）",
  "sections": [
    {
      "title": "综合案例.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>面向对象封装消息提示</title>\n\n    <style>\n      .modal {\n        width: 300px;\n\n        min-height: 100px;\n\n        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n\n        border-radius: 4px;\n\n        position: fixed;\n\n        z-index: 999;\n\n        left: 50%;\n\n        top: 50%;\n\n        transform: translate3d(-50%, -50%, 0);\n\n        background-color: #fff;\n      }\n\n      .modal .header {\n        line-height: 40px;\n\n        padding: 0 10px;\n\n        position: relative;\n\n        font-size: 20px;\n      }\n\n      .modal .header i {\n        font-style: normal;\n\n        color: #999;\n\n        position: absolute;\n\n        right: 15px;\n\n        top: -2px;\n\n        cursor: pointer;\n      }\n\n      .modal .body {\n        text-align: center;\n\n        padding: 10px;\n      }\n\n      .modal .footer {\n        display: flex;\n\n        justify-content: flex-end;\n\n        padding: 10px;\n      }\n\n      .modal .footer a {\n        padding: 3px 8px;\n\n        background: #ccc;\n\n        text-decoration: none;\n\n        color: #fff;\n\n        border-radius: 2px;\n\n        margin-right: 10px;\n\n        font-size: 14px;\n      }\n\n      .modal .footer a.submit {\n        background-color: #369;\n      }\n    </style>\n  </head>\n\n  <body>\n    <button id=\"delete\">删除</button>\n\n    <button id=\"login\">登录</button>\n\n    <!-- <div class=\"modal\">\n\n    <div class=\"header\">温馨提示 <i>x</i></div>\n\n    <div class=\"body\">您没有删除权限操作</div>\n\n  </div> -->\n\n    <script></script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
