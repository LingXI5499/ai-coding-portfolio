window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["a9ce35866296d600d259"] = {
  "id": "a9ce35866296d600d259",
  "title": "04-随机点名案例.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "04-随机点名案例.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n\n    <style>\n      * {\n        margin: 0;\n\n        padding: 0;\n      }\n\n      h2 {\n        text-align: center;\n      }\n\n      .box {\n        width: 600px;\n\n        margin: 50px auto;\n\n        display: flex;\n\n        font-size: 25px;\n\n        line-height: 40px;\n      }\n\n      .qs {\n        width: 450px;\n\n        height: 40px;\n\n        color: red;\n      }\n\n      .btns {\n        text-align: center;\n      }\n\n      .btns button {\n        width: 120px;\n\n        height: 35px;\n\n        margin: 0 50px;\n      }\n    </style>\n  </head>\n\n  <body>\n    <h2>随机点名</h2>\n\n    <div class=\"box\">\n      <span>名字是：</span>\n\n      <div class=\"qs\">这里显示姓名</div>\n    </div>\n\n    <div class=\"btns\">\n      <button class=\"start\">开始</button>\n\n      <button class=\"end\">结束</button>\n    </div>\n\n    <script>\n      // 数据数组\n\n      const arr = ['马超', '黄忠', '赵云', '关羽', '张飞'];\n\n      // 定时器的全局变量\n\n      let timerId = 0;\n\n      // 随机号要全局变量\n\n      let random = 0;\n\n      // 业务1.开始按钮模块\n\n      const qs = document.querySelector('.qs');\n\n      // 1.1 获取开始按钮对象\n\n      const start = document.querySelector('.start');\n\n      // 1.2 添加点击事件\n\n      start.addEventListener('click', function () {\n        timerId = setInterval(function () {\n          // 随机数\n\n          random = parseInt(Math.random() * arr.length);\n\n          // console.log(arr[random])\n\n          qs.innerHTML = arr[random];\n        }, 35);\n\n        // 如果数组里面只有一个值了，还需要抽取吗？  不需要  让两个按钮禁用就可以\n\n        if (arr.length === 1) {\n          // start.disabled = true\n\n          // end.disabled = true\n\n          start.disabled = end.disabled = true;\n        }\n      });\n\n      // 2. 关闭按钮模块\n\n      const end = document.querySelector('.end');\n\n      end.addEventListener('click', function () {\n        clearInterval(timerId);\n\n        // 结束了，可以删除掉当前抽取的那个数组元素\n\n        arr.splice(random, 1);\n\n        console.log(arr);\n      });\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
