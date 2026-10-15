window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["752f3300105d61550152"] = {
  "id": "752f3300105d61550152",
  "title": "15-自定义属性.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "15-自定义属性.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <div data-id=\"1\" data-spm=\"不知道\">1</div>\n\n    <div data-id=\"2\">2</div>\n\n    <div data-id=\"3\">3</div>\n\n    <div data-id=\"4\">4</div>\n\n    <div data-id=\"5\">5</div>\n\n    <script>\n      const one = document.querySelector('div');\n\n      console.log(one.dataset.id); // 1\n\n      console.log(one.dataset.spm); // 不知道\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
