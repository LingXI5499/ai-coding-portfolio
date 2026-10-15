window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["b49c47784b9d80cd890c"] = {
  "id": "b49c47784b9d80cd890c",
  "title": "08-数学内置对象Math.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "08-数学内置对象Math.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // 属性\n\n      console.log(Math.PI);\n\n      // 方法\n\n      // ceil 天花板  向上取整\n\n      console.log(Math.ceil(1.1)); // 2\n\n      console.log(Math.ceil(1.5)); // 2\n\n      console.log(Math.ceil(1.9)); // 2\n\n      // floor 地板  向下取整\n\n      console.log(Math.floor(1.1)); // 1\n\n      console.log(Math.floor(1.5)); // 1\n\n      console.log(Math.floor(1.9)); // 1\n\n      console.log(Math.floor('12px')); // 1\n\n      console.log('----------------');\n\n      // 四舍五入 round\n\n      console.log(Math.round(1.1)); // 1\n\n      console.log(Math.round(1.49)); // 1\n\n      console.log(Math.round(1.5)); // 2\n\n      console.log(Math.round(1.9)); // 2\n\n      console.log(Math.round(-1.1)); // -1\n\n      console.log(Math.round(-1.5)); // -1\n\n      console.log(Math.round(-1.51)); // -2\n\n      // 取整函数 parseInt(1.2)   // 1\n\n      // 取整函数 parseInt('12px')   // 12\n\n      console.log(Math.max(1, 2, 3, 4, 5));\n\n      console.log(Math.min(1, 2, 3, 4, 5));\n\n      console.log(Math.abs(-1));\n\n      // null  类似 let obj = {}\n\n      let obj = null;\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
