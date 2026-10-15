window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["ac9ab2da4c5ab7f9e08e"] = {
  "id": "ac9ab2da4c5ab7f9e08e",
  "title": "12-页面滚动事件.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "12-页面滚动事件.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n\n    <style>\n      body {\n        padding-top: 100px;\n\n        height: 3000px;\n      }\n\n      div {\n        display: none;\n\n        margin: 100px;\n\n        overflow: scroll;\n\n        width: 200px;\n\n        height: 200px;\n\n        border: 1px solid #000;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div>\n      我里面有很多很多的文字 我里面有很多很多的文字 我里面有很多很多的文字\n      我里面有很多很多的文字 我里面有很多很多的文字 我里面有很多很多的文字\n      我里面有很多很多的文字 我里面有很多很多的文字 我里面有很多很多的文字\n      我里面有很多很多的文字 我里面有很多很多的文字 我里面有很多很多的文字\n      我里面有很多很多的文字 我里面有很多很多的文字\n    </div>\n\n    <script>\n      const div = document.querySelector('div');\n\n      // 页面滚动事件\n\n      window.addEventListener('scroll', function () {\n        // console.log('我滚了')\n\n        // 我想知道页面到底滚动了多少像素， 被卷去了多少  scrollTop\n\n        // 获取html元素写法\n\n        // document.documentElement\n\n        // console.log(document.documentElement.scrollTop)\n\n        const n = document.documentElement.scrollTop;\n\n        if (n >= 100) {\n          div.style.display = 'block';\n        } else {\n          div.style.display = 'none';\n        }\n      });\n\n      // const div = document.querySelector('div')\n\n      // div.addEventListener('scroll', function () {\n\n      //   // console.log(111)\n\n      //   // scrollTop 被卷去的头部\n\n      //   console.log(div.scrollTop)\n\n      // })\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
