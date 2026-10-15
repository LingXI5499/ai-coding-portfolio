window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["954fede09c10a11867bd"] = {
  "id": "954fede09c10a11867bd",
  "title": "2-作用域链拍错题.html",
  "treatment": "排错练习（不自动执行）",
  "sections": [
    {
      "title": "2-作用域链拍错题.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Document</title>\n  </head>\n  <body>\n    <script>\n      // 找出下面23行的打印 a=10 是否有问题，如果有问题说出原因\n      let a = 10;\n      let b = 20;\n\n      function fn1() {\n        function fn2() {\n          a = 200;\n        }\n        fn2();\n      }\n\n      console.log(a); // 10\n      fn1();\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
