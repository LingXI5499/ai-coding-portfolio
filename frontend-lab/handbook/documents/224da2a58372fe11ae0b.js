window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["224da2a58372fe11ae0b"] = {
  "id": "224da2a58372fe11ae0b",
  "title": "03-购物车加减操作.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "03-购物车加减操作.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\" />\n\n    <title>Document</title>\n\n    <style>\n      div {\n        width: 80px;\n      }\n\n      input[type='text'] {\n        width: 50px;\n\n        height: 44px;\n\n        outline: none;\n\n        border: 1px solid #ccc;\n\n        text-align: center;\n\n        border-right: 0;\n      }\n\n      input[type='button'] {\n        height: 24px;\n\n        width: 22px;\n\n        cursor: pointer;\n      }\n\n      input {\n        float: left;\n\n        border: 1px solid #ccc;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div>\n      <input type=\"text\" id=\"total\" value=\"1\" readonly />\n\n      <input type=\"button\" value=\"+\" id=\"add\" />\n\n      <input type=\"button\" value=\"-\" id=\"reduce\" disabled />\n\n      <script>\n        // 1. 获取元素  三个\n\n        const total = document.querySelector('#total');\n\n        const add = document.querySelector('#add');\n\n        const reduce = document.querySelector('#reduce');\n\n        // 2. 点击加号 事件侦听\n\n        add.addEventListener('click', function () {\n          // console.log(typeof total.value)\n\n          // total.value = total.value + 1\n\n          // i++   隐式转换\n\n          // i = i + 1\n\n          total.value++;\n\n          reduce.disabled = false;\n        });\n\n        // 3. 点击减号 事件侦听\n\n        reduce.addEventListener('click', function () {\n          total.value--;\n\n          if (total.value <= 1) {\n            reduce.disabled = true;\n          }\n        });\n\n        // 2 === '2'\n      </script>\n    </div>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
