window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["18f64164f2b91b57d30c"] = {
  "id": "18f64164f2b91b57d30c",
  "title": "06-mouseover和mouseenter的区别.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "06-mouseover和mouseenter的区别.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n\n    <style>\n      .dad {\n        width: 400px;\n\n        height: 400px;\n\n        background-color: pink;\n      }\n\n      .baby {\n        width: 200px;\n\n        height: 200px;\n\n        background-color: purple;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"dad\">\n      <div class=\"baby\"></div>\n    </div>\n\n    <script>\n      const dad = document.querySelector('.dad');\n\n      const baby = document.querySelector('.baby');\n\n      dad.addEventListener('mouseenter', function () {\n        console.log('鼠标经过');\n      });\n\n      dad.addEventListener('mouseleave', function () {\n        console.log('鼠标离开');\n      });\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
