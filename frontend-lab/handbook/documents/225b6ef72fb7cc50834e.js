window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["225b6ef72fb7cc50834e"] = {
  "id": "225b6ef72fb7cc50834e",
  "title": "14-数组解构细节.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "14-数组解构细节.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // const pc = ['海尔', '联想', '小米', '方正'];\n\n      // [hr, lx, mi, fz] = pc\n\n      // console.log(hr, lx, mi, fz);\n\n      // function getValue() {\n\n      //   return [100, 60]\n\n      // }\n\n      // [max, min] = getValue()\n\n      // console.log(max, min);\n\n      // const pc = ['海尔', '联想', '小米', '方正']\n\n      // const [hr, lx, mi, fz] = ['海尔', '联想', '小米', '方正']\n\n      // console.log(hr)\n\n      // console.log(lx)\n\n      // console.log(mi)\n\n      // console.log(fz)\n\n      // // 请将最大值和最小值函数返回值解构 max 和min 两个变量\n\n      // function getValue() {\n\n      //   return [100, 60]\n\n      // }\n\n      // const [max, min] = getValue()\n\n      // console.log(max)\n\n      // console.log(min)\n\n      // 1. 变量多， 单元值少 ， undefined\n\n      // const [a, b, c, d] = [1, 2, 3]\n\n      // console.log(a) // 1\n\n      // console.log(b) // 2\n\n      // console.log(c) // 3\n\n      // console.log(d) // undefined\n\n      // 2. 变量少， 单元值多\n\n      // const [a, b] = [1, 2, 3]\n\n      // console.log(a) // 1\n\n      // console.log(b) // 2\n\n      // 3.  剩余参数 变量少， 单元值多\n\n      // const [a, b, ...c] = [1, 2, 3, 4]\n\n      // console.log(a) // 1\n\n      // console.log(b) // 2\n\n      // console.log(c) // [3, 4]  真数组\n\n      // 4.  防止 undefined 传递\n\n      // const [a = 0, b = 0] = [1, 2]\n\n      // const [a = 0, b = 0] = []\n\n      // console.log(a) // 1\n\n      // console.log(b) // 2\n\n      // 5.  按需导入赋值\n\n      // const [a, b, , d] = [1, 2, 3, 4]\n\n      // console.log(a) // 1\n\n      // console.log(b) // 2\n\n      // console.log(d) // 4\n\n      // const arr = [1, 2, [3, 4]]\n\n      // console.log(arr[0])  // 1\n\n      // console.log(arr[1])  // 2\n\n      // console.log(arr[2])  // [3,4]\n\n      // console.log(arr[2][0])  // 3\n\n      // 多维数组解构\n\n      // const arr = [1, 2, [3, 4]]\n\n      // const [a, b, c] = [1, 2, [3, 4]]\n\n      // console.log(a) // 1\n\n      // console.log(b) // 2\n\n      // console.log(c) // [3,4]\n\n      const [a, b, [c, d]] = [1, 2, [3, 4]];\n\n      console.log(a); // 1\n\n      console.log(b); // 2\n\n      console.log(c); // 3\n\n      console.log(d); // 4\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
