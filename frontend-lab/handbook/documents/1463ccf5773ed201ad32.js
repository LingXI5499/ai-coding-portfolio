window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["1463ccf5773ed201ad32"] = {
  "id": "1463ccf5773ed201ad32",
  "title": "01-作业.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "01-作业.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // function fn() {\n\n      //   // return 20\n\n      // }\n\n      // let re = fn()\n\n      // console.log(re)\n\n      // 目标： 封装一个函数, 可以求任意数组的 和 或 平均值\n\n      //要求：\n\n      //- 函数可以传递2个参数，比如  handleData(arr, true)      handleData 处理数据的意思\n\n      //- 参数一： 接受实参传递过来的数组\n\n      //- 参数二: 布尔类型  如果是true或者不传递参数 是求和操作，   如果传递过来的参数是 false 则是求平均值\n\n      function handleData(arr, flag = true) {\n        let sum = 0;\n\n        for (let i = 0; i < arr.length; i++) {\n          sum += arr[i];\n        }\n\n        // flag变量里面存的 布尔值\n\n        if (flag) {\n          // 求和\n\n          // 返回值\n\n          return sum;\n        } else {\n          // 求平均值\n\n          return sum / arr.length;\n        }\n      }\n\n      console.log(handleData([1, 2, 3, 4, 5], true));\n\n      console.log(handleData([1, 2, 3, 4, 5]));\n\n      console.log(handleData([1, 2, 3, 4, 5], false));\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
