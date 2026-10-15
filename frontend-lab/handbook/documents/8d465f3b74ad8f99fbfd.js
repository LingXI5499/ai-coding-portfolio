window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["8d465f3b74ad8f99fbfd"] = {
  "id": "8d465f3b74ad8f99fbfd",
  "title": "01-网页时钟（图形版）.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "01-网页时钟（图形版）.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <title>练习 - 网页时钟</title>\n\n    <style>\n      * {\n        box-sizing: border-box;\n      }\n\n      .clock {\n        width: 600px;\n\n        height: 600px;\n\n        background: url(./images/clock.jpg) no-repeat;\n\n        margin: 50px auto 0;\n\n        position: relative;\n      }\n\n      .hh,\n      .mm,\n      .ss {\n        position: absolute;\n\n        width: 100%;\n\n        height: 100%;\n\n        left: 0;\n\n        top: 0;\n\n        background: url(./images/hour.png) no-repeat center;\n      }\n\n      .mm {\n        background-image: url(./images/minute.png);\n\n        transform: rotate(270deg);\n      }\n\n      .ss {\n        background-image: url(./images/second.png);\n\n        transform: rotate(0deg);\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"clock\">\n      <div class=\"hh\" id=\"h\"></div>\n\n      <div class=\"mm\" id=\"m\"></div>\n\n      <div class=\"ss\" id=\"s\"></div>\n    </div>\n\n    <script>\n      /*\n\n      知识点：\n\n        1. 创建日期对象 获取当前时间\n\n        2. 多次定时器，重复获取时间，让指针动起来\n\n    */\n\n      // 查找页面的元素，定时器调用的函数外面，查找一次即可\n\n      const second = document.querySelector('.ss');\n\n      // 封装时钟效果，定时器定时调用的函数\n\n      // 通过定时器每隔一秒钟再调用一次。\n\n      let du = 0;\n\n      setInterval(function () {\n        du += 6;\n\n        if (du >= 360) {\n          du = 0;\n        }\n\n        second.style.transform = `rotate(${du}deg)`;\n      }, 1000);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
