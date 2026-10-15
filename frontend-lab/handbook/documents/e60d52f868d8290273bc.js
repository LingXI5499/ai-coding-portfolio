window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["e60d52f868d8290273bc"] = {
  "id": "e60d52f868d8290273bc",
  "title": "07-父节点.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "07-父节点.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <div class=\"yeye\">\n      <div class=\"dad\">\n        <div class=\"baby\">x</div>\n      </div>\n    </div>\n\n    <script>\n      const baby = document.querySelector('.baby');\n\n      console.log(baby); // 返回dom对象\n\n      console.log(baby.parentNode); // 返回dom对象\n\n      console.log(baby.parentNode.parentNode); // 返回dom对象\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
