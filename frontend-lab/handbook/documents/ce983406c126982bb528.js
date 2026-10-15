window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["ce983406c126982bb528"] = {
  "id": "ce983406c126982bb528",
  "title": "16-综合案例-根据数据生成柱形图.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "16-综合案例-根据数据生成柱形图.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n\n    <style>\n      * {\n        margin: 0;\n\n        padding: 0;\n      }\n\n      .box {\n        display: flex;\n\n        width: 700px;\n\n        height: 300px;\n\n        border-left: 1px solid pink;\n\n        border-bottom: 1px solid pink;\n\n        margin: 50px auto;\n\n        justify-content: space-around;\n\n        align-items: flex-end;\n\n        text-align: center;\n      }\n\n      .box > div {\n        display: flex;\n\n        width: 50px;\n\n        background-color: pink;\n\n        flex-direction: column;\n\n        justify-content: space-between;\n      }\n\n      .box div span {\n        margin-top: -20px;\n      }\n\n      .box div h4 {\n        margin-bottom: -35px;\n\n        width: 70px;\n\n        margin-left: -10px;\n      }\n    </style>\n  </head>\n\n  <body>\n    <script>\n      // 1. 四次弹框效果\n\n      // 声明一个新的数组\n\n      let arr = [];\n\n      for (let i = 1; i <= 4; i++) {\n        // let num = prompt(`请输入第${i}季度的数据:`)\n\n        // arr.push(num)\n\n        arr.push(prompt(`请输入第${i}季度的数据:`));\n\n        // push记得加小括号，不是等号赋值的形式\n      }\n\n      // console.log(arr)  ['123','135','345','234']\n\n      // 盒子开头\n\n      document.write(` <div class=\"box\">`);\n\n      // 盒子中间 利用循环的形式  跟数组有关系\n\n      for (let i = 0; i < arr.length; i++) {\n        document.write(`\n\n              <div style=\"height: ${arr[i]}px;\">\n\n                <span>${arr[i]}</span>\n\n                <h4>第${i + 1}季度</h4>\n\n              </div>          \n\n            `);\n      }\n\n      // 盒子结尾\n\n      document.write(` </div>`);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
