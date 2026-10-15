window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["252c6e8d2a83a9d82bb2"] = {
  "id": "252c6e8d2a83a9d82bb2",
  "title": "17-环境对象.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "17-环境对象.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <button>点击</button>\n\n    <script>\n      // 每个函数里面都有this 环境对象  普通函数里面this指向的是window\n\n      // function fn() {\n\n      //   console.log(this)\n\n      // }\n\n      // window.fn()\n\n      const btn = document.querySelector('button');\n\n      btn.addEventListener('click', function () {\n        // console.log(this)  // btn 对象\n\n        // btn.style.color = 'red'\n\n        this.style.color = 'red';\n      });\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
