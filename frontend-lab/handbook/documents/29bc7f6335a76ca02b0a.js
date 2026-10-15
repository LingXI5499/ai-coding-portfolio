window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["29bc7f6335a76ca02b0a"] = {
  "id": "29bc7f6335a76ca02b0a",
  "title": "10-try-catch捕获异常.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "10-try-catch捕获异常.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <p>123</p>\n\n    <script>\n      function fn() {\n        try {\n          // 可能发送错误的代码 要写到 try\n\n          const p = document.querySelector('.p');\n\n          p.style.color = 'red';\n        } catch (err) {\n          // 拦截错误，提示浏览器提供的错误信息，但是不中断程序的执行\n\n          console.log(err.message);\n\n          throw new Error('你看看，选择器错误了吧');\n\n          // 需要加return 中断程序\n\n          // return\n        } finally {\n          // 不管你程序对不对，一定会执行的代码\n\n          alert('弹出对话框');\n        }\n\n        console.log(11);\n      }\n\n      fn();\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
