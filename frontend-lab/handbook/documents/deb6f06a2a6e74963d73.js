window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["deb6f06a2a6e74963d73"] = {
  "id": "deb6f06a2a6e74963d73",
  "title": "小米侧边导航.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "小米侧边导航.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n\n    <style>\n      .box {\n        width: 234px;\n\n        height: 420px;\n\n        /* background-color: pink; */\n      }\n\n      .box a {\n        /* 需要a标签这个行内元素设置宽高，需要转换成：块级元素或者行内块元素 */\n\n        display: block;\n\n        width: 234px;\n\n        height: 42px;\n\n        background-color: #2c505f;\n\n        color: #fff;\n\n        font-size: 14px;\n\n        /* 去除默认的下划线 */\n\n        text-decoration: none;\n\n        /* 每个a标签文字首行缩进 */\n\n        text-indent: 30px;\n\n        /* a标签中的文字垂直居中 */\n\n        line-height: 42px;\n      }\n\n      /* 鼠标移入之后，让a底色变红 */\n\n      .box a:hover {\n        background-color: red;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"box\">\n      <!-- 一般导航点击能跳转，所以一般需要使用a标签完成 -->\n\n      <a href=\"#\">手机 电话卡</a>\n\n      <a href=\"#\">电视 盒子</a>\n\n      <a href=\"#\">笔记本 显示器</a>\n\n      <a href=\"#\">家电 插线板</a>\n\n      <a href=\"#\">出行 穿戴</a>\n\n      <a href=\"#\">智能 路由器</a>\n\n      <a href=\"#\">电源 配件</a>\n\n      <a href=\"#\">健康 儿童</a>\n\n      <a href=\"#\">耳机 音箱</a>\n\n      <a href=\"#\">生活 箱包</a>\n    </div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
