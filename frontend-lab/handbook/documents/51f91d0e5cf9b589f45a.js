window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["51f91d0e5cf9b589f45a"] = {
  "id": "51f91d0e5cf9b589f45a",
  "title": "11-普通函数的this指向.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "11-普通函数的this指向.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <button>点击</button>\n\n    <script>\n      // 普通函数：  谁调用我，this就指向谁\n\n      console.log(this); // window\n\n      function fn() {\n        console.log(this); // window\n      }\n\n      window.fn();\n\n      window.setTimeout(function () {\n        console.log(this); // window\n      }, 1000);\n\n      document.querySelector('button').addEventListener('click', function () {\n        console.log(this); // 指向 button\n      });\n\n      const obj = {\n        sayHi: function () {\n          console.log(this); // 指向 obj\n        },\n      };\n\n      obj.sayHi();\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
