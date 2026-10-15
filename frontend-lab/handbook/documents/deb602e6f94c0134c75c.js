window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["deb602e6f94c0134c75c"] = {
  "id": "deb602e6f94c0134c75c",
  "title": "3-闭包拍错题.html",
  "treatment": "排错练习（不自动执行）",
  "sections": [
    {
      "title": "3-闭包拍错题.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Document</title>\n  </head>\n  <body>\n    <script>\n      // 第26行打印count = 2 是否正确，如果错误，请说出正确答案\n      function outer() {\n        let count = 1;\n        function g() {\n          count++;\n          console.log(count);\n        }\n\n        return g;\n      }\n\n      const res = outer();\n      res();\n      res();\n      res();\n      res(); // count = 2\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
