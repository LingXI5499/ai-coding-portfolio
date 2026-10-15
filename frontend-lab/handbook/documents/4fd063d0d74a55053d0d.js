window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["4fd063d0d74a55053d0d"] = {
  "id": "4fd063d0d74a55053d0d",
  "title": "1-全局作用域-局部作用域拍错题.html",
  "treatment": "排错练习（不自动执行）",
  "sections": [
    {
      "title": "1-全局作用域-局部作用域拍错题.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Document</title>\n  </head>\n  <body>\n    <script>\n      // 拍错题： 下面第16行 与 第19行会报错吗，如果会，怎么改？\n      const num = 10;\n\n      function getSum() {\n        const count = 10;\n        console.log(num);\n      }\n\n      console.log(count);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
