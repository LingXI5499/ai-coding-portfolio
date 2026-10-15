window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["c14761cbb291a1f0c8c3"] = {
  "id": "c14761cbb291a1f0c8c3",
  "title": "01-复习.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "01-复习.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n\n    <style></style>\n  </head>\n\n  <body>\n    <ul>\n      <li class=\"item\">1</li>\n\n      <li class=\"item\">2</li>\n\n      <li class=\"item\">3</li>\n    </ul>\n\n    <script>\n      const lis = document.querySelectorAll('.item');\n\n      // lis[0].classList.add('active')\n\n      console.log(lis);\n\n      for (let i = 0; i < lis.length; i++) {\n        lis[i].style.color = 'red';\n      }\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
