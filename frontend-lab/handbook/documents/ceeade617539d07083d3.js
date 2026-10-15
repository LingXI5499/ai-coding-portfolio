window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["ceeade617539d07083d3"] = {
  "id": "ceeade617539d07083d3",
  "title": "README.md",
  "treatment": "章节知识与练习",
  "sections": [
    {
      "title": "JavaScript 基础 - 第5天",
      "trail": [
        "JavaScript 基础 - 第5天"
      ],
      "level": 1,
      "line": 1,
      "blocks": [
        {
          "type": "text",
          "text": "> 知道对象数据类型的特征，能够利用数组对象渲染页面\n\n\n\n- 理解什么是对象，掌握定义对象的语法\n\n- 掌握数学对象的使用"
        }
      ]
    },
    {
      "title": "对象",
      "trail": [
        "JavaScript 基础 - 第5天",
        "对象"
      ],
      "level": 2,
      "line": 15,
      "blocks": [
        {
          "type": "text",
          "text": "> 对象是 JavaScript 数据类型的一种，之前已经学习了数值类型、字符串类型、布尔类型、undefined。对象数据类型可以被理解成是一种数据集合。它由属性和方法两部分构成。"
        }
      ]
    },
    {
      "title": "语法",
      "trail": [
        "JavaScript 基础 - 第5天",
        "对象",
        "语法"
      ],
      "level": 3,
      "line": 23,
      "blocks": [
        {
          "type": "text",
          "text": "声明一个对象类型的变量与之前声明一个数值或字符串类型的变量没有本质上的区别。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <title>JavaScript 基础 - 对象语法</title>\n  </head>\n\n  <body>\n    <script>\n      // 声明字符串类型变量\n\n      let str = 'hello world!';\n\n      // 声明数值类型变量\n\n      let num = 199;\n\n      // 声明对象类型变量，使用一对花括号\n\n      // user 便是一个对象了，目前它是一个空对象\n\n      let user = {};\n    </script>\n  </body>\n</html>"
        }
      ]
    },
    {
      "title": "属性和访问",
      "trail": [
        "JavaScript 基础 - 第5天",
        "对象",
        "属性和访问"
      ],
      "level": 3,
      "line": 79,
      "blocks": [
        {
          "type": "text",
          "text": "数据描述性的信息称为属性，如人的姓名、身高、年龄、性别等，一般是名词性的。\n\n\n\n1. 属性都是成 对出现的，包括属性名和值，它们之间使用英文 `:` 分隔\n\n2. 多个属性之间使用英文 `,` 分隔\n\n3. 属性就是依附在对象上的变量\n\n4. 属性名可以使用 `\"\"` 或 `''`，一般情况下省略，除非名称遇到特殊符号如空格、中横线等"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <title>JavaScript 基础 - 对象语法</title>\n  </head>\n\n  <body>\n    <script>\n      // 通过对象描述一个人的数据信息\n\n      // person 是一个对象，它包含了一个属性 name\n\n      // 属性都是成对出现的，属性名 和 值，它们之间使用英文 : 分隔\n\n      let person = {\n        name: '小明', // 描述人的姓名\n\n        age: 18, // 描述人的年龄\n\n        stature: 185, // 描述人的身高\n\n        gender: '男', // 描述人的性别\n      };\n    </script>\n  </body>\n</html>"
        },
        {
          "type": "text",
          "text": "声明对象，并添加了若干属性后，可以使用 `.` 或 `[]` 获得对象中属性对应的值，我称之为属性访问。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <title>JavaScript 基础 - 对象语法</title>\n  </head>\n\n  <body>\n    <script>\n      // 通过对象描述一个人的数据信息\n\n      // person 是一个对象，它包含了一个属性 name\n\n      // 属性都是成对出现的，属性名 和 值，它们之间使用英文 : 分隔\n\n      let person = {\n        name: '小明', // 描述人的姓名\n\n        age: 18, // 描述人的年龄\n\n        stature: 185, // 描述人的身高\n\n        gender: '男', // 描述人的性别\n      };\n\n      // 访问人的名字\n\n      console.log(person.name); // 结果为 小明\n\n      // 访问人性别\n\n      console.log(person.gender); // 结果为 男\n\n      // 访问人的身高\n\n      console.log(person['stature']); // 结果为 185\n\n      // 或者\n\n      console.log(person.stature); // 结果同为 185\n    </script>\n  </body>\n</html>"
        },
        {
          "type": "text",
          "text": "扩展：也可以动态为对象添加属性，动态添加与直接定义是一样的，只是语法上更灵活。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <title>JavaScript 基础 - 对象语法</title>\n  </head>\n\n  <body>\n    <script>\n      // 声明一个空的对象（没有任何属性）\n\n      let user = {};\n\n      // 动态追加属性\n\n      user.name = '小明';\n\n      user['age'] = 18;\n\n      // 动态添加与直接定义是一样的，只是语法上更灵活\n    </script>\n  </body>\n</html>"
        }
      ]
    },
    {
      "title": "方法和调用",
      "trail": [
        "JavaScript 基础 - 第5天",
        "对象",
        "方法和调用"
      ],
      "level": 3,
      "line": 263,
      "blocks": [
        {
          "type": "text",
          "text": "数据行为性的信息称为方法，如跑步、唱歌等，一般是动词性的，其本质是函数。\n\n\n\n1. 方法是由方法名和函数两部分构成，它们之间使用 : 分隔\n\n2. 多个属性之间使用英文 `,` 分隔\n\n3. 方法是依附在对象中的函数\n\n4. 方法名可以使用 `\"\"` 或 `''`，一般情况下省略，除非名称遇到特殊符号如空格、中横线等"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <title>JavaScript 基础 - 对象方法</title>\n  </head>\n\n  <body>\n    <script>\n      // 方法是依附在对象上的函数\n\n      let person = {\n        name: '小红',\n\n        age: 18,\n\n        // 方法是由方法名和函数两部分构成，它们之间使用 : 分隔\n\n        singing: function () {\n          console.log('两只老虎，两只老虎，跑的快，跑的快...');\n        },\n\n        run: function () {\n          console.log('我跑的非常快...');\n        },\n      };\n    </script>\n  </body>\n</html>"
        },
        {
          "type": "text",
          "text": "声明对象，并添加了若干方法后，可以使用 `.` 或 `[]` 调用对象中函数，我称之为方法调用。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <title>JavaScript 基础 - 对象方法</title>\n  </head>\n\n  <body>\n    <script>\n      // 方法是依附在对象上的函数\n\n      let person = {\n        name: '小红',\n\n        age: 18,\n\n        // 方法是由方法名和函数两部分构成，它们之间使用 : 分隔\n\n        singing: function () {\n          console.log('两只老虎，两只老虎，跑的快，跑的快...');\n        },\n\n        run: function () {\n          console.log('我跑的非常快...');\n        },\n      };\n\n      // 调用对象中 singing 方法\n\n      person.singing();\n\n      // 调用对象中的 run 方法\n\n      person.run();\n    </script>\n  </body>\n</html>"
        },
        {
          "type": "text",
          "text": "扩展：也可以动态为对象添加方法，动态添加与直接定义是一样的，只是语法上更灵活。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <title>JavaScript 基础 - 对象方法</title>\n  </head>\n\n  <body>\n    <script>\n\n         // 声明一个空的对象（没有任何属性，也没有任何方法）\n\n      let user = {}\n\n         // 动态追加属性\n\n         user.name = '小明'\n\n         user.['age'] = 18\n\n\n\n         // 动态添加方法\n\n         user.move = function () {\n\n           console.log('移动一点距离...')\n\n         }\n    </script>\n  </body>\n</html>"
        },
        {
          "type": "text",
          "text": "**注：无论是属性或是方法，同一个对象中出现名称一样的，后面的会覆盖前面的。**"
        }
      ]
    },
    {
      "title": "null",
      "trail": [
        "JavaScript 基础 - 第5天",
        "对象",
        "null"
      ],
      "level": 3,
      "line": 465,
      "blocks": [
        {
          "type": "text",
          "text": "null 也是 JavaScript 中数据类型的一种，通常只用它来表示不存在的对象。使用 typeof 检测类型它的类型时，结果为 `object`。"
        }
      ]
    },
    {
      "title": "遍历对象",
      "trail": [
        "JavaScript 基础 - 第5天",
        "对象",
        "null",
        "遍历对象"
      ],
      "level": 4,
      "line": 473,
      "blocks": [
        {
          "type": "code",
          "language": "javascript",
          "text": "let obj = {\n  uname: 'pink',\n};\n\nfor (let k in obj) {\n  // k 属性名  字符串  带引号    obj.'uname'     k ===  'uname'\n  // obj[k]  属性值    obj['uname']   obj[k]\n}"
        },
        {
          "type": "text",
          "text": "for in 不提倡遍历数组 因为 k 是 字符串"
        }
      ]
    },
    {
      "title": "内置对象",
      "trail": [
        "JavaScript 基础 - 第5天",
        "内置对象"
      ],
      "level": 2,
      "line": 501,
      "blocks": [
        {
          "type": "text",
          "text": "回想一下我们曾经使用过的 `console.log`，`console`其实就是 JavaScript 中内置的对象，该对象中存在一个方法叫 `log`，然后调用 `log` 这个方法，即 `console.log()`。\n\n\n\n除了 `console` 对象外，JavaScritp 还有其它的内置的对象"
        }
      ]
    },
    {
      "title": "Math",
      "trail": [
        "JavaScript 基础 - 第5天",
        "内置对象",
        "Math"
      ],
      "level": 3,
      "line": 513,
      "blocks": [
        {
          "type": "text",
          "text": "`Math` 是 JavaScript 中内置的对象，称为数学对象，这个对象下即包含了属性，也包含了许多的方法。"
        }
      ]
    },
    {
      "title": "属性",
      "trail": [
        "JavaScript 基础 - 第5天",
        "内置对象",
        "Math",
        "属性"
      ],
      "level": 4,
      "line": 521,
      "blocks": [
        {
          "type": "text",
          "text": "- Math.PI，获取圆周率"
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "// 圆周率\n\nconsole.log(Math.PI);"
        }
      ]
    },
    {
      "title": "方法",
      "trail": [
        "JavaScript 基础 - 第5天",
        "内置对象",
        "Math",
        "方法"
      ],
      "level": 4,
      "line": 539,
      "blocks": [
        {
          "type": "text",
          "text": "- Math.random，生成 0 到 1 间的随机数"
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "// 0 ~ 1 之间的随机数, 包含 0 不包含 1\n\nMath.random();"
        },
        {
          "type": "text",
          "text": "- Math.ceil，数字向上取整"
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "// 舍弃小数部分，整数部分加1\n\nMath.ceil(3.4);"
        },
        {
          "type": "text",
          "text": "- Math.floor，数字向下取整"
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "// 舍弃小数部分，整数部分不变\n\nMath.floor(4.68);"
        },
        {
          "type": "text",
          "text": "- Math.round，四舍五入取整"
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "// 取整，四舍五入原则\n\nMath.round(5.46539);\n\nMath.round(4.849);"
        },
        {
          "type": "text",
          "text": "- Math.max，在一组数中找出最大的"
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "// 找出最大值\n\nMath.max(10, 21, 7, 24, 13);"
        },
        {
          "type": "text",
          "text": "- Math.min，在一组数中找出最小的"
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "// 找出最小值\n\nMath.min(24, 18, 6, 19, 21);"
        },
        {
          "type": "text",
          "text": "- Math.pow，幂方法"
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "// 求某个数的多少次方\n\nMath.pow(4, 2); // 求 4 的 2 次方\n\nMath.pow(2, 3); // 求 2 的 3 次方"
        },
        {
          "type": "text",
          "text": "- Math.sqrt，平方根"
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "// 求某数的平方根\n\nMath.sqrt(16);"
        },
        {
          "type": "text",
          "text": "数学对象提供了比较多的方法，这里不要求强记，通过演示数学对象的使用，加深对对象的理解。"
        }
      ]
    }
  ]
};
