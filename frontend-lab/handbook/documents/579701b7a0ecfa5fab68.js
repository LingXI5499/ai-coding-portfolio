window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["579701b7a0ecfa5fab68"] = {
  "id": "579701b7a0ecfa5fab68",
  "title": "04-正则修饰符.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "04-正则修饰符.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      console.log(/^java$/.test('java'));\n\n      console.log(/^java$/i.test('JAVA'));\n\n      console.log(/^java$/i.test('Java'));\n\n      const str = 'java是一门编程语言， 学完JAVA工资很高';\n\n      // const re = str.replace(/java|JAVA/g, '前端')\n\n      const re = str.replace(/java/gi, '前端');\n\n      console.log(re); // 前端是一门编程语言， 学完前端工资很高\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
