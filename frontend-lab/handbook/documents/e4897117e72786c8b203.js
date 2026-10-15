window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["e4897117e72786c8b203"] = {
  "id": "e4897117e72786c8b203",
  "title": "09-判断成绩案例.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "09-判断成绩案例.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // 1. 用户输入\n\n      let score = +prompt('请输入成绩：');\n\n      // 2. 判断输出\n\n      if (score >= 90) {\n        alert('成绩优秀，宝贝，你是我的骄傲');\n      } else if (score >= 70) {\n        alert('成绩良好，宝贝，你要加油哦~~');\n      } else if (score >= 60) {\n        alert('成绩及格，宝贝，你很危险~');\n      } else {\n        alert('成绩不及格，宝贝，我不想和你说话，我只想用鞭子和你说话~');\n      }\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
