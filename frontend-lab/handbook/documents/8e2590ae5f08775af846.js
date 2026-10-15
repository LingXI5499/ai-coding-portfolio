window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["8e2590ae5f08775af846"] = {
  "id": "8e2590ae5f08775af846",
  "title": "01-体验js.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "01-体验js.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n\n    <style>\n      .pink {\n        background-color: pink;\n      }\n    </style>\n  </head>\n\n  <body>\n    <button class=\"pink\">按钮1</button>\n\n    <button>按钮2</button>\n\n    <button>按钮3</button>\n\n    <button>按钮4</button>\n\n    <script>\n      let bts = document.querySelectorAll('button');\n\n      for (let i = 0; i < bts.length; i++) {\n        bts[i].addEventListener('click', function () {\n          document.querySelector('.pink').className = '';\n\n          this.className = 'pink';\n        });\n      }\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
