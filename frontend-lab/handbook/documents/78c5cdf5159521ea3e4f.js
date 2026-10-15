window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["78c5cdf5159521ea3e4f"] = {
  "id": "78c5cdf5159521ea3e4f",
  "title": "05-用户输入案例.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "05-用户输入案例.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // 1. 用户输入\n\n      let num = +prompt('请输入一个数字:');\n\n      // 2. 弹出结果\n\n      alert(num % 4 === 0 && num % 100 !== 0);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
