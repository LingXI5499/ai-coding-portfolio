window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["6f809c62267a1767111d"] = {
  "id": "6f809c62267a1767111d",
  "title": "02-js垃圾回收机制.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "02-js垃圾回收机制.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      for (let i = 1; i <= 3; i++) {}\n\n      let num = 10;\n\n      function fn() {\n        const str = 'andy';\n\n        // str = 'lily'\n\n        console.log(str);\n      }\n\n      fn();\n\n      fn();\n\n      fn();\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
