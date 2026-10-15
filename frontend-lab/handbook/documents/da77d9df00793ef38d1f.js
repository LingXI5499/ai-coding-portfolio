window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["da77d9df00793ef38d1f"] = {
  "id": "da77d9df00793ef38d1f",
  "title": "03-对象的方法.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "03-对象的方法.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      let obj = {\n        uname: '刘德华',\n\n        // 方法\n\n        song: function (x, y) {\n          // console.log('冰雨')\n\n          console.log(x + y);\n        },\n\n        dance: function () {},\n      };\n\n      // 方法调用 对象名.方法名\n\n      // console.log(obj.song(1, 2))\n\n      obj.song(1, 2);\n\n      // document.write('123')\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
