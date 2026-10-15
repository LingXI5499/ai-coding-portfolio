window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["dbc8aa32cab79226ae42"] = {
  "id": "dbc8aa32cab79226ae42",
  "title": "16-trim方法.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "16-trim方法.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <textarea name=\"\" id=\"\" cols=\"30\" rows=\"10\"></textarea>\n\n    <script>\n      const str = '          im a teacher  ';\n\n      // console.log(str.trim())  // 去除字符串左右的空格\n\n      const tx = document.querySelector('textarea');\n\n      tx.addEventListener('keyup', function (e) {\n        // console.log(tx.value)\n\n        if (e.key === 'Enter') {\n          // console.log(tx.value)\n\n          console.log(tx.value.trim() === '');\n        }\n      });\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
