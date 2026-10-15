window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["e9ebdce13f994e53ce40"] = {
  "id": "e9ebdce13f994e53ce40",
  "title": "05-过滤敏感词.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "05-过滤敏感词.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <textarea name=\"\" id=\"\" cols=\"30\" rows=\"10\"></textarea>\n\n    <button>发布</button>\n\n    <div></div>\n\n    <script>\n      const tx = document.querySelector('textarea');\n\n      const btn = document.querySelector('button');\n\n      const div = document.querySelector('div');\n\n      btn.addEventListener('click', function () {\n        // console.log(tx.value)\n\n        div.innerHTML = tx.value.replace(/激情|基情/g, '**');\n\n        tx.value = '';\n      });\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
