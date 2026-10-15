window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["79b39eb6de2c827459b5"] = {
  "id": "79b39eb6de2c827459b5",
  "title": "14-bind.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "14-bind.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <button>发送短信</button>\n\n    <script>\n      const obj = {\n        age: 18,\n      };\n\n      function fn() {\n        console.log(this);\n      }\n\n      // 1. bind 不会调用函数\n\n      // 2. 能改变this指向\n\n      // 3. 返回值是个函数，  但是这个函数里面的this是更改过的obj\n\n      const fun = fn.bind(obj);\n\n      // console.log(fun)\n\n      fun();\n\n      // 需求，有一个按钮，点击里面就禁用，2秒钟之后开启\n\n      document.querySelector('button').addEventListener('click', function () {\n        // 禁用按钮\n\n        this.disabled = true;\n\n        window.setTimeout(\n          function () {\n            // 在这个普通函数里面，我们要this由原来的window 改为 btn\n\n            this.disabled = false;\n          }.bind(this),\n          2000,\n        ); // 这里的this 和 btn 一样\n      });\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
