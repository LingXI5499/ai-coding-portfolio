window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["37d71f7f0f9843681127"] = {
  "id": "37d71f7f0f9843681127",
  "title": "13-switch选择语句.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "13-switch选择语句.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      switch (2) {\n        case 1:\n          console.log('您选择的是1');\n\n          break; // 退出switch\n\n        case 2:\n          console.log('您选择的是2');\n\n          break; // 退出switch\n\n        case 3:\n          console.log('您选择的是3');\n\n          break; // 退出switch\n\n        default:\n          console.log('没有符合条件的');\n      }\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
