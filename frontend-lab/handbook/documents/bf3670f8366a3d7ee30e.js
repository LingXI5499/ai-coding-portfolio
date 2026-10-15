window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["bf3670f8366a3d7ee30e"] = {
  "id": "bf3670f8366a3d7ee30e",
  "title": "18-continue和break退出循环.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "18-continue和break退出循环.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // let i = 1\n\n      // while (i <= 5) {\n\n      //   console.log(i)\n\n      //   if (i === 3) {\n\n      //     break  // 退出循环\n\n      //   }\n\n      //   i++\n\n      // }\n\n      let i = 1;\n\n      while (i <= 5) {\n        if (i === 3) {\n          i++;\n\n          continue;\n        }\n\n        console.log(i);\n\n        i++;\n      }\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
