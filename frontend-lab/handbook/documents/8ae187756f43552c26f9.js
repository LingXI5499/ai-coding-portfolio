window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["8ae187756f43552c26f9"] = {
  "id": "8ae187756f43552c26f9",
  "title": "06-深拷贝.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "06-深拷贝.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      const obj = {\n        uname: 'pink',\n\n        age: 18,\n\n        hobby: ['乒乓球', '足球'],\n\n        family: {\n          baby: '小pink',\n        },\n      };\n\n      const o = {};\n\n      // 拷贝函数\n\n      function deepCopy(newObj, oldObj) {\n        debugger;\n\n        for (let k in oldObj) {\n          // 处理数组的问题  一定先写数组 在写 对象 不能颠倒\n\n          if (oldObj[k] instanceof Array) {\n            newObj[k] = [];\n\n            //  newObj[k] 接收 []  hobby\n\n            //  oldObj[k]   ['乒乓球', '足球']\n\n            deepCopy(newObj[k], oldObj[k]);\n          } else if (oldObj[k] instanceof Object) {\n            newObj[k] = {};\n\n            deepCopy(newObj[k], oldObj[k]);\n          } else {\n            //  k  属性名 uname age    oldObj[k]  属性值  18\n\n            // newObj[k]  === o.uname  给新对象添加属性\n\n            newObj[k] = oldObj[k];\n          }\n        }\n      }\n\n      deepCopy(o, obj); // 函数调用  两个参数 o 新对象  obj 旧对象\n\n      console.log(o);\n\n      o.age = 20;\n\n      o.hobby[0] = '篮球';\n\n      o.family.baby = '老pink';\n\n      console.log(obj);\n\n      console.log([1, 23] instanceof Object);\n\n      // 复习\n\n      // const obj = {\n\n      //   uname: 'pink',\n\n      //   age: 18,\n\n      //   hobby: ['乒乓球', '足球']\n\n      // }\n\n      // function deepCopy({ }, oldObj) {\n\n      //   // k 属性名  oldObj[k] 属性值\n\n      //   for (let k in oldObj) {\n\n      //     // 处理数组的问题   k 变量\n\n      //     newObj[k] = oldObj[k]\n\n      //     // o.uname = 'pink'\n\n      //     // newObj.k  = 'pink'\n\n      //   }\n\n      // }\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
