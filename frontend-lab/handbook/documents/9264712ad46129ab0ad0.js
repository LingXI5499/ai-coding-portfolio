window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["9264712ad46129ab0ad0"] = {
  "id": "9264712ad46129ab0ad0",
  "title": "03-验证用户名案例.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "03-验证用户名案例.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n\n    <style>\n      span {\n        display: inline-block;\n\n        width: 250px;\n\n        height: 30px;\n\n        vertical-align: middle;\n\n        line-height: 30px;\n\n        padding-left: 15px;\n      }\n\n      .error {\n        color: red;\n\n        background: url(./images/error1.png) no-repeat left center;\n      }\n\n      .right {\n        color: green;\n\n        background: url(./images/right.png) no-repeat left center;\n      }\n    </style>\n  </head>\n\n  <body>\n    <input type=\"text\" />\n\n    <span></span>\n\n    <script>\n      // 1. 准备正则\n\n      const reg = /^[a-zA-Z0-9-_]{6,16}$/;\n\n      const input = document.querySelector('input');\n\n      const span = input.nextElementSibling;\n\n      input.addEventListener('blur', function () {\n        // console.log(reg.test(this.value))\n\n        if (reg.test(this.value)) {\n          span.innerHTML = '输入正确';\n\n          span.className = 'right';\n        } else {\n          span.innerHTML = '请输入6~16位的英文数字下划线';\n\n          span.className = 'error';\n        }\n      });\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
