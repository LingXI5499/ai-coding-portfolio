window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["d634560bc2f57352f999"] = {
  "id": "d634560bc2f57352f999",
  "title": "10-求最大值函数.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "10-求最大值函数.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <div></div>\n\n    <script>\n      // 1. 求最大值函数\n\n      // function getMax(x, y) {\n\n      //   return x > y ? x : y\n\n      // }\n\n      // let max = getMax(11, 234)\n\n      // console.log(max)\n\n      // //  2. 求任意数组的最大值，并且返回\n\n      // function getArrValue(arr = []) {\n\n      //   // (1)先准备一个max变量存放数组的第一个值\n\n      //   let max = arr[0]\n\n      //   // (2) 遍历比较\n\n      //   for (let i = 1; i < arr.length; i++) {\n\n      //     if (max < arr[i]) {\n\n      //       max = arr[i]\n\n      //     }\n\n      //   }\n\n      //   // (3) 返回值\n\n      //   return max\n\n      // }\n\n      // // let max = getArrValue([1, 3, 5, 7, 9])\n\n      // // let num = prompt('请输入')\n\n      // let max = getArrValue([11, 3, 55, 7, 29])\n\n      // console.log(max)\n\n      //  3. 求任意数组的最大值和最小值，并且返回\n\n      function getArrValue(arr = []) {\n        // (1)先准备一个max变量存放数组的第一个值\n\n        let max = arr[0];\n\n        let min = arr[0]; // 最小值\n\n        // (2) 遍历比较\n\n        for (let i = 1; i < arr.length; i++) {\n          // 最大值\n\n          if (max < arr[i]) {\n            max = arr[i];\n          }\n\n          // 最小值\n\n          if (min > arr[i]) {\n            min = arr[i];\n          }\n        }\n\n        // (3) 返回值  返回的是数组\n\n        return [max, min];\n\n        // return min\n      }\n\n      let newArr = getArrValue([11, 3, 55, 7, 29]);\n\n      console.log(`数组的最大值是: ${newArr[0]}`);\n\n      console.log(`数组的最小值是: ${newArr[1]}`);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
