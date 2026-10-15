window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["87c3991b42fad22d3b70"] = {
  "id": "87c3991b42fad22d3b70",
  "title": "01-局部作用域-块作用域.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "01-局部作用域-块作用域.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // for (var i = 1; i <= 3; i++) {\n\n      //   // 块作用域\n\n      //   console.log(i)\n\n      // }\n\n      // console.log(i)\n\n      // for (let i = 1; i <= 3; i++) {\n\n      //   // 块作用域\n\n      //   console.log(i)\n\n      // }\n\n      // for (let i = 1; i <= 3; i++) {\n\n      //   // 块作用域\n\n      //   console.log(i)\n\n      // }\n\n      if (true) {\n        let i = 10;\n      }\n\n      console.log(i);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
