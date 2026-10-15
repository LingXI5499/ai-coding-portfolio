window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["613ee302bb7998e90206"] = {
  "id": "613ee302bb7998e90206",
  "title": "05-模拟setInterval效果.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "05-模拟setInterval效果.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <div></div>\n\n    <script>\n      function getTime() {\n        document.querySelector('div').innerHTML = new Date().toLocaleString();\n\n        setTimeout(getTime, 1000);\n      }\n\n      getTime();\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
