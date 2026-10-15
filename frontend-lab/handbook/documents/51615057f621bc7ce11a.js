window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["51615057f621bc7ce11a"] = {
  "id": "51615057f621bc7ce11a",
  "title": "17-用户注册倒计时.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "17-用户注册倒计时.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <textarea name=\"\" id=\"\" cols=\"30\" rows=\"10\">\n\n        用户注册协议\n\n        欢迎注册成为京东用户！在您注册过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署以下协议，请您务必仔细阅读、充分理解协议中的条款内容后再点击同意（尤其是以粗体或下划线标识的条款，因为这些条款可能会明确您应履行的义务或对您的权利有所限制）。\n\n        【请您注意】如果您不同意以下协议全部或任何条款约定，请您停止注册。您停止注册后将仅可以浏览我们的商品信息但无法享受我们的产品或服务。如您按照注册流程提示填写信息，阅读并点击同意上述协议且完成全部注册流程后，即表示您已充分阅读、理解并接受协议的全部内容，并表明您同意我们可以依据协议内容来处理您的个人信息，并同意我们将您的订单信息共享给为完成此订单所必须的第三方合作方（详情查看\n\n    </textarea>\n\n    <br />\n\n    <button class=\"btn\" disabled>我已经阅读用户协议(5)</button>\n\n    <script>\n      // 1. 获取元素\n\n      const btn = document.querySelector('.btn');\n\n      // console.log(btn.innerHTML)  butto按钮特殊用innerHTML\n\n      // 2. 倒计时\n\n      let i = 5;\n\n      // 2.1 开启定时器\n\n      let n = setInterval(function () {\n        i--;\n\n        btn.innerHTML = `我已经阅读用户协议(${i})`;\n\n        if (i === 0) {\n          clearInterval(n); // 关闭定时器\n\n          // 定时器停了，我就可以开按钮\n\n          btn.disabled = false;\n\n          btn.innerHTML = '同意';\n        }\n      }, 1000);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
