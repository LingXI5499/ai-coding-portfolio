window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["f7d1e458ce5558e4029b"] = {
  "id": "f7d1e458ce5558e4029b",
  "title": "06-change事件.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "06-change事件.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <!-- <input type=\"text\"> -->\n\n    <input type=\"checkbox\" name=\"\" id=\"\" />\n\n    <script>\n      // change 事件 内容发生了变化\n\n      const input = document.querySelector('input');\n\n      input.addEventListener('change', function () {\n        console.log(111);\n      });\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
