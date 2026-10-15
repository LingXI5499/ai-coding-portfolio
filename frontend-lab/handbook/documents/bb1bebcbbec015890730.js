window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["bb1bebcbbec015890730"] = {
  "id": "bb1bebcbbec015890730",
  "title": "21-filter筛选数组.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "21-filter筛选数组.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      const arr = [10, 20, 30];\n\n      // const newArr = arr.filter(function (item, index) {\n\n      //   // console.log(item)\n\n      //   // console.log(index)\n\n      //   return item >= 20\n\n      // })\n\n      // 返回的符合条件的新数组\n\n      const newArr = arr.filter((item) => item >= 20);\n\n      console.log(newArr);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
