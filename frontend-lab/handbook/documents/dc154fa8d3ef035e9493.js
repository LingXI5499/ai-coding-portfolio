window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["dc154fa8d3ef035e9493"] = {
  "id": "dc154fa8d3ef035e9493",
  "title": "06-数组reduce方法.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "06-数组reduce方法.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // arr.reduce(function(累计值, 当前元素){}, 起始值)\n\n      // arr.reduce(function (prev, item) {\n\n      //   // console.log(11)\n\n      //   // console.log(prev)\n\n      //   return prev + item\n\n      // }, 0)\n\n      // arr.reduce(function (prev, item) {\n\n      //   console.log(11)\n\n      //   // console.log(prev)\n\n      //   return prev + item\n\n      // })\n\n      const arr = [1, 2, 3];\n\n      const re = arr.reduce((prev, item) => prev + item);\n\n      console.log(re);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
