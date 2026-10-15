window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["b5f9a7a1e2eb2f9c4e05"] = {
  "id": "b5f9a7a1e2eb2f9c4e05",
  "title": "13-随机颜色案例.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "13-随机颜色案例.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n\n    <style>\n      div {\n        width: 300px;\n\n        height: 300px;\n      }\n    </style>\n  </head>\n\n  <body>\n    <script>\n      // 1. 自定义一个随机颜色函数\n\n      function getRandomColor(flag = true) {\n        if (flag) {\n          // 3. 如果是true 则返回 #ffffff\n\n          let str = '#';\n\n          let arr = [\n            '0',\n            '1',\n            '2',\n            '3',\n            '4',\n            '5',\n            '6',\n            '7',\n            '8',\n            '9',\n            'a',\n            'b',\n            'c',\n            'd',\n            'e',\n            'f',\n          ];\n\n          // 利用for循环随机抽6次 累加到 str里面\n\n          for (let i = 1; i <= 6; i++) {\n            // 每次要随机从数组里面抽取一个\n\n            // random 是数组的索引号 是随机的\n\n            let random = Math.floor(Math.random() * arr.length);\n\n            // str = str + arr[random]\n\n            str += arr[random];\n          }\n\n          return str;\n        } else {\n          // 4. 否则是 false 则返回 rgb(255,255,255)\n\n          let r = Math.floor(Math.random() * 256); // 55\n\n          let g = Math.floor(Math.random() * 256); // 89\n\n          let b = Math.floor(Math.random() * 256); // 255\n\n          return `rgb(${r},${g},${b})`;\n        }\n      }\n\n      // 2. 调用函数 getRandomColor(布尔值)\n\n      console.log(getRandomColor(false));\n\n      console.log(getRandomColor(true));\n\n      console.log(getRandomColor());\n\n      // let str = '#'\n\n      // str = str + 'f'\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
