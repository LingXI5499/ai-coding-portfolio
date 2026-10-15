window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["21053ac5a49c32546f31"] = {
  "id": "21053ac5a49c32546f31",
  "title": "12-课堂小案例2.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "12-课堂小案例2.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <div></div>\n\n    <script>\n      const gift = '50g的茶叶,清洗球';\n\n      // 1. 把字符串拆分为数组\n\n      // console.log(gift.split(',')) [,]\n\n      // 2. 根据数组元素的个数，生成 对应 span标签\n\n      // const str = gift.split(',').map(function (item) {\n\n      //   return `<span>【赠品】 ${item}</span> <br>`\n\n      // }).join('')\n\n      // // console.log(str)\n\n      // document.querySelector('div').innerHTML = str\n\n      document.querySelector('div').innerHTML = gift\n        .split(',')\n        .map((item) => `<span>【赠品】 ${item}</span> <br>`)\n        .join('');\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
