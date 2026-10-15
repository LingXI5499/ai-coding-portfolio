window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["4b783197d6b7d40c8f7c"] = {
  "id": "4b783197d6b7d40c8f7c",
  "title": "网页时钟（图形版）.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "网页时钟（图形版）.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <title>练习 - 网页时钟</title>\n\n    <style>\n      * {\n        box-sizing: border-box;\n      }\n\n      .clock {\n        width: 600px;\n\n        height: 600px;\n\n        background: url(./images/clock.jpg) no-repeat;\n\n        margin: 50px auto 0;\n\n        position: relative;\n      }\n\n      .hh,\n      .mm,\n      .ss {\n        position: absolute;\n\n        width: 100%;\n\n        height: 100%;\n\n        left: 0;\n\n        top: 0;\n\n        background: url(./images/hour.png) no-repeat center;\n      }\n\n      .mm {\n        background-image: url(./images/minute.png);\n\n        transform: rotate(270deg);\n      }\n\n      .ss {\n        background-image: url(./images/second.png);\n\n        transform: rotate(30deg);\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"clock\">\n      <div class=\"hh\" id=\"h\"></div>\n\n      <div class=\"mm\" id=\"m\"></div>\n\n      <div class=\"ss\" id=\"s\"></div>\n    </div>\n\n    <script>\n      /*\n\n      知识点：\n\n        1. 创建日期对象 获取当前时间\n\n        2. 多次定时器，重复获取时间，让指针动起来\n\n    */\n\n      // 查找页面的元素，定时器调用的函数外面，查找一次即可\n\n      let hour = document.getElementById('h');\n\n      let minute = document.getElementById('m');\n\n      let second = document.getElementById('s');\n\n      // 封装时钟效果，定时器定时调用的函数\n\n      function clock() {\n        /* 业务1：获取系统时间 */\n\n        let date = new Date();\n\n        // 获取时分秒\n\n        let hh = date.getHours();\n\n        let mm = date.getMinutes();\n\n        let ss = date.getSeconds();\n\n        /* 业务2：时钟动画效果 */\n\n        // 角度换算： 公式复制即可\n\n        //   小时角度公式：小时 * 30 + 分钟 / 60 * 30\n\n        //   分钟角度公式：分钟* 6 + 秒 / 60 * 6\n\n        //   秒角度公式： 当前秒数 * 6\n\n        hour.style.transform = `rotate(${hh * 30 + (mm / 60) * 30}deg)`;\n\n        minute.style.transform = `rotate(${mm * 6 + (ss / 60) * 6}deg)`;\n\n        second.style.transform = `rotate(${ss * 6}deg)`;\n      }\n\n      // 主动调用一次，页面加载之后就要调用一次\n\n      clock();\n\n      // 通过定时器每隔一秒钟再调用一次。\n\n      setInterval(clock, 1000);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
