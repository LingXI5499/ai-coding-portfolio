window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["cf26b452c354d4a8e208"] = {
  "id": "cf26b452c354d4a8e208",
  "title": "仿京东显示隐藏密码.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "仿京东显示隐藏密码.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\" />\n\n    <title>Document</title>\n\n    <style>\n      .box {\n        position: relative;\n\n        width: 400px;\n\n        border-bottom: 1px solid #ccc;\n\n        margin: 100px auto;\n      }\n\n      .box input {\n        width: 370px;\n\n        height: 30px;\n\n        border: 0;\n\n        outline: none;\n      }\n\n      .box label {\n        position: absolute;\n\n        top: 2px;\n\n        right: 2px;\n\n        width: 24px;\n\n        height: 24px;\n\n        background-color: pink;\n\n        cursor: pointer;\n\n        background: url(./images/close.png) no-repeat;\n\n        background-size: cover;\n      }\n\n      .box label.active {\n        background-image: url(./images/open.png);\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"box\">\n      <label for=\"\"></label>\n\n      <input type=\"password\" name=\"\" id=\"pwd\" />\n    </div>\n\n    <script>\n      // 1. 获取元素  label 和 input\n\n      const label = document.querySelector('label');\n\n      const input = document.querySelector('input');\n\n      // 2. 给label 注册事件， 可以切换类实现图片的切换\n\n      // 声明一个变量来控制\n\n      let flag = true;\n\n      label.addEventListener('click', function () {\n        this.classList.toggle('active');\n\n        // 3. 因为要修改input的 type属性 text和password，可以使用一个变量来控制  flag ， 如果为true 就切换为text ，如果为false就修改为 password\n\n        if (flag) {\n          input.type = 'text';\n        } else {\n          input.type = 'password';\n        }\n\n        flag = !flag;\n      });\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
