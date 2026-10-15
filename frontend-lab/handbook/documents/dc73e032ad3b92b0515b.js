window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["dc73e032ad3b92b0515b"] = {
  "id": "dc73e032ad3b92b0515b",
  "title": "06-5秒钟之后自动跳转页面.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "06-5秒钟之后自动跳转页面.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n\n    <style>\n      span {\n        color: red;\n      }\n    </style>\n  </head>\n\n  <body>\n    <a href=\"http://www.itcast.cn\">\n      支付成功\n      <span>5</span>\n      秒钟之后跳转到首页\n    </a>\n\n    <script>\n      // 1. 获取元素\n\n      const a = document.querySelector('a');\n\n      // 2.开启定时器\n\n      // 3. 声明倒计时变量\n\n      let num = 5;\n\n      let timerId = setInterval(function () {\n        num--;\n\n        a.innerHTML = `支付成功<span>${num}</span>秒钟之后跳转到首页`;\n\n        // 如果num === 0 则停止定时器，并且完成跳转功能\n\n        if (num === 0) {\n          clearInterval(timerId);\n\n          // 4. 跳转  location.href\n\n          location.href = 'http://www.itcast.cn';\n        }\n      }, 1000);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
