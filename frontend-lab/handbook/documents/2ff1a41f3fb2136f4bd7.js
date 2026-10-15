window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["2ff1a41f3fb2136f4bd7"] = {
  "id": "2ff1a41f3fb2136f4bd7",
  "title": "22-显示转换.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "22-显示转换.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n\n    <style>\n      .box {\n        width: 50px;\n\n        height: 50px;\n      }\n    </style>\n  </head>\n\n  <body>\n    <script>\n      let str = '123';\n\n      console.log(Number(str));\n\n      console.log(Number('pink'));\n\n      // let num = Number(prompt('输入年薪'))\n\n      // let num = +prompt('输入年薪')\n\n      // console.log(Number(num))\n\n      // console.log(num)\n\n      console.log(parseInt('12px'));\n\n      console.log(parseInt('12.34px'));\n\n      console.log(parseInt('12.94px'));\n\n      console.log(parseInt('abc12.94px'));\n\n      // -------------------\n\n      console.log(parseFloat('12px')); // 12\n\n      console.log(parseFloat('12.34px')); // 12.34\n\n      console.log(parseFloat('12.94px')); // 12.94\n\n      console.log(parseFloat('abc12.94px')); // 12.94\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
