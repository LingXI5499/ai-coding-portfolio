window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["013d8cea5fbb032b8e01"] = {
  "id": "013d8cea5fbb032b8e01",
  "title": "02-for循环练习.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "02-for循环练习.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // 1. 输出1~100岁\n\n      // for (let i = 1; i <= 100; i++) {\n\n      //   document.write(`今年我${i}岁了 <br>`)\n\n      // }\n\n      // 2. 求1~100之间的偶数和\n\n      // let sum = 0\n\n      // for (let i = 1; i <= 100; i++) {\n\n      //   if (i % 2 === 0) {\n\n      //     // 把i加到sum里面去\n\n      //     // sum = sum + i\n\n      //     sum += i\n\n      //   }\n\n      // }\n\n      // document.write(`1~100之间的偶数和是: ${sum}`)\n\n      // 3. 页面打印5个小星星\n\n      // for (let i = 1; i <= 5; i++) {\n\n      //   document.write('★')\n\n      // }\n\n      // 4. 打印数组\n\n      let arr = ['刘德华', '刘晓强', '刘晓庆', '刘若英', '刘热巴', 'pink老师'];\n\n      // console.log(arr[0])\n\n      // console.log(arr[1])\n\n      // console.log(arr[2])\n\n      // console.log(arr[3])\n\n      // i <= 4    长度 - 1\n\n      // for (let i = 0; i <= arr.length - 1; i++) {\n\n      //   console.log(arr[i])\n\n      // }\n\n      // 必须从0开始，因为数组索引号从0开始  arr.length = 6\n\n      // 遍历数组 ：  从第一个循环到最后一个\n\n      for (let i = 0; i < arr.length; i++) {\n        console.log(arr[i]);\n      }\n\n      let arr1 = [];\n\n      console.log(arr1);\n\n      console.log(arr1[0]); // undefined\n\n      console.log(arr1[1]); // undefined\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
