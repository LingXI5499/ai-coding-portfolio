window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["edc82647d3a3b0c6622e"] = {
  "id": "edc82647d3a3b0c6622e",
  "title": "12-数组解构.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "12-数组解构.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // const arr = [100, 60, 80]\n\n      // 数组解构 赋值\n\n      // // const [max, min, avg] = arr\n\n      const [max, min, avg] = [100, 60, 80];\n\n      // // const max = arr[0]\n\n      // // const min = arr[1]\n\n      // // const avg = arr[2]\n\n      console.log(max); // 100\n\n      console.log(avg); // 80\n\n      // 交换2个变量的值\n\n      let a = 1;\n\n      let b = 2;\n\n      [b, a] = [a, b];\n\n      console.log(a, b);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
