window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["a9924edc44cd033793f4"] = {
  "id": "a9924edc44cd033793f4",
  "title": "09-课堂小案例1.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "09-课堂小案例1.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <div></div>\n\n    <script>\n      const spec = { size: '40cm*40cm', color: '黑色' };\n\n      //1. 所有的属性值回去过来  数组\n\n      // console.log(Object.values(spec))\n\n      // 2. 转换为字符串   数组join('/') 把数组根据分隔符转换为字符串\n\n      // console.log(Object.values(spec).join('/'))\n\n      document.querySelector('div').innerHTML = Object.values(spec).join('/');\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
