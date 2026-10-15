window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["9748a74f81d0c5e741ca"] = {
  "id": "9748a74f81d0c5e741ca",
  "title": "13-必须加分号的两种情况.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "13-必须加分号的两种情况.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // 1. 立即执行函数要加\n\n      // (function () { })();\n\n      // (function () { })();\n\n      // 2. 使用数组的时候\n\n      // const arr = [1, 2, 3]\n\n      const str = 'pink';\n\n      [1, 2, 3].map(function (item) {\n        console.log(item);\n      });\n\n      let a = 1;\n\n      let b = 2;\n\n      [b, a] = [a, b];\n\n      console.log(a, b);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
