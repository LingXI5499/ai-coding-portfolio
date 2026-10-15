window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["8570015a3aae3839c41e"] = {
  "id": "8570015a3aae3839c41e",
  "title": "16-计算圆的面积.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "16-计算圆的面积.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // 1. 页面弹出输入框\n\n      let r = prompt('请输入圆的半径：');\n\n      // 2. 计算圆的面积（内部处理）\n\n      let re = 3.14 * r * r;\n\n      // 3. 页面输出\n\n      document.write(re);\n\n      // NaN   not a number\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
