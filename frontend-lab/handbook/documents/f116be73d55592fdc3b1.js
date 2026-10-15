window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["f116be73d55592fdc3b1"] = {
  "id": "f116be73d55592fdc3b1",
  "title": "03-事件流.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "03-事件流.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n\n    <style>\n      .father {\n        width: 500px;\n\n        height: 500px;\n\n        background-color: pink;\n      }\n\n      .son {\n        width: 200px;\n\n        height: 200px;\n\n        background-color: purple;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"father\">\n      <div class=\"son\"></div>\n    </div>\n\n    <script>\n      const fa = document.querySelector('.father');\n\n      const son = document.querySelector('.son');\n\n      // 山东  济南  蓝翔   目标（pink老师）  捕获阶段\n\n      //  蓝翔  济南   山东   冒泡阶段\n\n      document.addEventListener(\n        'click',\n        function () {\n          alert('我是爷爷');\n        },\n        true,\n      );\n\n      fa.addEventListener(\n        'click',\n        function () {\n          alert('我是爸爸');\n        },\n        true,\n      );\n\n      son.addEventListener(\n        'click',\n        function () {\n          alert('我是儿子');\n        },\n        true,\n      );\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
