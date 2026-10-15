window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["2b254cb7264cc6801343"] = {
  "id": "2b254cb7264cc6801343",
  "title": "12-作用域.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "12-作用域.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      let num = 10; // 1. 全局变量\n\n      console.log(num);\n\n      function fn() {\n        console.log(num);\n      }\n\n      fn();\n\n      // 2. 局部变量\n\n      function fun() {\n        let str = 'pink';\n      }\n\n      console.log(str); // 错误\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
