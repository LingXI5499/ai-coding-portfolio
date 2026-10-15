window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["90b86baf2ff290e6e80f"] = {
  "id": "90b86baf2ff290e6e80f",
  "title": "23-求和案例.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "23-求和案例.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // 1. 用户输入   prompt 得到是字符串类型 要转换为 数字型\n\n      let num1 = +prompt('请输入第一个数字：');\n\n      let num2 = +prompt('请输入第二个数字：');\n\n      // 2. 输出\n\n      alert(`两个数相加的和是:${num1 + num2}`);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
