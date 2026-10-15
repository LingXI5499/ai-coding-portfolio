window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["580a920f3b3c8b5e8781"] = {
  "id": "580a920f3b3c8b5e8781",
  "title": "小米登录框.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "小米登录框.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n\n    <style>\n      * {\n        margin: 0;\n\n        padding: 0;\n      }\n\n      .box {\n        width: 356px;\n\n        height: 339px;\n\n        margin: 100px auto;\n      }\n\n      .box h1 {\n        width: 49px;\n\n        height: 49px;\n\n        /* logo这个背景图片是透明的四周中间有白色的logo，所以需要设置背景颜色从而衬托出白色的logo */\n\n        background: #ff4c00 url('./images/mi-logo.png');\n\n        margin: 0 auto;\n      }\n\n      .box h2 {\n        height: 77px;\n\n        margin-top: 35px;\n\n        text-align: center;\n\n        font-size: 30px;\n\n        font-weight: 400;\n      }\n\n      .box input {\n        width: 356px;\n\n        height: 50px;\n\n        border: 1px solid #ccc;\n\n        padding-left: 15px;\n\n        margin-bottom: 14px;\n\n        /* 不要盒子被撑大，自动内减 */\n\n        box-sizing: border-box;\n      }\n\n      .box button {\n        width: 356px;\n\n        height: 50px;\n\n        background-color: #ff4c00;\n\n        color: #fff;\n\n        border: none;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"box\">\n      <h1></h1>\n\n      <h2>小米账号登录</h2>\n\n      <input type=\"text\" placeholder=\"邮箱/手机/小米ID\" />\n\n      <input type=\"text\" placeholder=\"邮箱/手机/小米ID\" />\n\n      <button>登录</button>\n    </div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
