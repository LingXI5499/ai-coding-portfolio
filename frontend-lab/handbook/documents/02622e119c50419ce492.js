window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["02622e119c50419ce492"] = {
  "id": "02622e119c50419ce492",
  "title": "15-节流防抖素材.html",
  "treatment": "排错练习（不自动执行）",
  "sections": [
    {
      "title": "15-节流防抖素材.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n\n    <style>\n      .box {\n        width: 500px;\n\n        height: 500px;\n\n        background-color: #ccc;\n\n        color: #fff;\n\n        text-align: center;\n\n        font-size: 100px;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"box\"></div>\n\n    <script>\n      const box = document.querySelector('.box');\n\n      let i = 1; // 让这个变量++\n\n      // 鼠标移动函数\n\n      function mouseMove() {\n        box.innerHTML = ++i;\n\n        // 如果里面存在大量操作 dom 的情况，可能会卡顿\n      }\n\n      // console.log(mouseMove)\n\n      // 节流函数 throttle\n\n      function throttle(fn, t) {\n        // 起始时间\n\n        let startTime = 0;\n\n        return function () {\n          // 得到当前的时间\n\n          let now = Date.now();\n\n          // 判断如果大于等于 500 采取调用函数\n\n          if (now - startTime >= t) {\n            // 调用函数\n\n            fn();\n\n            // 起始的时间 = 现在的时间   写在调用函数的下面\n\n            startTime = now;\n          }\n        };\n      }\n\n      box.addEventListener('mousemove', throttle(mouseMove, 500));\n\n      // throttle(mouseMove, 500) === function () { console.log(1) }\n\n      // box.addEventListener('mousemove', function () {\n\n      //   // 得到当前的时间\n\n      //   let now = Date.now()\n\n      //   // 判断如果大于等于 500 采取调用函数\n\n      //   if (now - startTime >= t) {\n\n      //     // 调用函数\n\n      //     fn()\n\n      //     // 起始的时间 = 现在的时间   写在调用函数的下面\n\n      //     startTime = now\n\n      //   }\n\n      // })\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
