window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["14626501392af61ed12d"] = {
  "id": "14626501392af61ed12d",
  "title": "16-等号赋值的排错题.html",
  "treatment": "排错练习（不自动执行）",
  "sections": [
    {
      "title": "16-等号赋值的排错题.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Document</title>\n  </head>\n  <body>\n    <script>\n      // 第17行代码返回false，因为obj修改了对象的name属性\n      const obj = { name: '佩奇', age: 6 };\n\n      const newObj = obj;\n      obj.name = '乔治';\n\n      console.log(newObj === obj);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
