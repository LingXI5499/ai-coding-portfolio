window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["7a50833417040b3d4057"] = {
  "id": "7a50833417040b3d4057",
  "title": "11-页面加载事件.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "11-页面加载事件.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n\n    <script>\n      // 等待页面所有资源加载完毕，就回去执行回调函数\n\n      // window.addEventListener('load', function () {\n\n      //   const btn = document.querySelector('button')\n\n      //   btn.addEventListener('click', function () {\n\n      //     alert(11)\n\n      //   })\n\n      // })\n\n      // img.addEventListener('load', function () {\n\n      //   // 等待图片加载完毕，再去执行里面的代码\n\n      // })\n\n      document.addEventListener('DOMContentLoaded', function () {\n        const btn = document.querySelector('button');\n\n        btn.addEventListener('click', function () {\n          alert(11);\n        });\n      });\n    </script>\n  </head>\n\n  <body>\n    <button>点击</button>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
