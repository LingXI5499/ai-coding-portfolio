window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["22d752a824a518a990a8"] = {
  "id": "22d752a824a518a990a8",
  "title": "09-自定义属性.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "09-自定义属性.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <div data-id=\"0\"></div>\n\n    <script>\n      const div = document.querySelector('div');\n\n      console.log(div.dataset.id); // 0\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
