window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["0ca290ff135e5da73881"] = {
  "id": "0ca290ff135e5da73881",
  "title": "01-bom.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "01-bom.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // document.querySelector()\n\n      // window.document.querySelector()\n\n      console.log(document === window.document);\n\n      function fn() {\n        console.log(11);\n      }\n\n      window.fn();\n\n      var num = 10;\n\n      console.log(window.num);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
