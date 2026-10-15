window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["d2ded05e991abcd97139"] = {
  "id": "d2ded05e991abcd97139",
  "title": "03-验证码倒计时.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "03-验证码倒计时.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>练习 - 网页时钟</title>\n\n    <style>\n      body {\n        padding: 40px;\n      }\n\n      ul {\n        padding: 0;\n\n        list-style: none;\n      }\n\n      li {\n        margin: 10px 0;\n\n        line-height: 26px;\n\n        display: flex;\n      }\n\n      input,\n      button {\n        padding: 0;\n\n        margin-left: 10px;\n\n        display: block;\n      }\n\n      input {\n        width: 190px;\n\n        outline: none;\n      }\n\n      button {\n        width: 120px;\n      }\n\n      .verify {\n        width: 60px;\n      }\n    </style>\n  </head>\n\n  <body>\n    <ul>\n      <li>\n        手机号:\n\n        <input type=\"text\" />\n      </li>\n\n      <li>\n        验证码:\n\n        <input type=\"text\" class=\"verify\" />\n\n        <button id=\"btn\">获取验证码</button>\n      </li>\n    </ul>\n\n    <script>\n      // 1. 获取元素 按钮\n\n      const btn = document.querySelector('#btn');\n\n      // 2. 给按钮注册点击事件\n\n      btn.addEventListener('click', function () {\n        // 3. 点击之后，禁用按钮，同时开启倒计时\n\n        this.disabled = true;\n\n        // 控制显示数字的\n\n        let i = 5;\n\n        btn.innerHTML = `${i}秒之后重新获取`;\n\n        let timer = setInterval(function () {\n          i--;\n\n          // 在定时器里面不能用this，this执行的window\n\n          btn.innerHTML = `${i}秒之后重新获取`;\n\n          // 4. 如果时间为0，则清除定时器，并且更改文字\n\n          if (i < 0) {\n            clearInterval(timer);\n\n            btn.innerHTML = '获取验证码';\n\n            btn.disabled = false;\n          }\n        }, 1000);\n      });\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
