window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["2a0d08a0c7d02e4a1f50"] = {
  "id": "2a0d08a0c7d02e4a1f50",
  "title": "README.md",
  "treatment": "章节知识与练习",
  "sections": [
    {
      "title": "JavaScript 基础第三天笔记",
      "trail": [
        "JavaScript 基础第三天笔记"
      ],
      "level": 1,
      "line": 1,
      "blocks": [
        {
          "type": "text",
          "text": "**if 多分支语句和 switch的区别：**\n\n\n\n1. 共同点\n\n\n\n   - 都能实现多分支选择， 多选1 \n\n   - 大部分情况下可以互换\n\n\n\n2. 区别：\n\n\n\n   - switch…case语句通常处理case为比较**确定值**的情况，而if…else…语句更加灵活，通常用于**范围判断**(大于，等于某个范围)。\n\n   - switch 语句进行判断后直接执行到程序的语句，效率更高，而if…else语句有几种判断条件，就得判断多少次\n\n   - switch 一定要注意 必须是 ===  全等，一定注意 数据类型，同时注意break否则会有穿透效果\n\n   - 结论：\n\n     - 当分支比较少时，if…else语句执行效率高。\n\n     - 当分支比较多时，switch语句执行效率高，而且结构更清晰。\n\n\n\n   ​"
        }
      ]
    },
    {
      "title": "for 语句",
      "trail": [
        "JavaScript 基础第三天笔记",
        "for 语句"
      ],
      "level": 2,
      "line": 41,
      "blocks": [
        {
          "type": "text",
          "text": "> 掌握 for 循环语句，让程序具备重复执行能力\n\n\n\n`for` 是 JavaScript 提供的另一种循环控制的话句，它和 `while` 只是语法上存在差异。"
        }
      ]
    },
    {
      "title": "for语句的基本使用",
      "trail": [
        "JavaScript 基础第三天笔记",
        "for 语句",
        "for语句的基本使用"
      ],
      "level": 3,
      "line": 53,
      "blocks": [
        {
          "type": "text",
          "text": "1. 实现循环的 3 要素"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<script>\n  // 1. 语法格式\n\n  // for(起始值; 终止条件; 变化量) {\n\n  //   // 要重复执行的代码\n\n  // }\n\n  // 2. 示例：在网页中输入标题标签\n\n  // 起始值为 1\n\n  // 变化量 i++\n\n  // 终止条件 i <= 6\n\n  for (let i = 1; i <= 6; i++) {\n    document.write(`<h${i}>循环控制，即重复执行<h${i}>`);\n  }\n</script>"
        },
        {
          "type": "text",
          "text": "2. 变化量和死循环，`for` 循环和 `while` 一样，如果不合理设置增量和终止条件，便会产生死循环。\n\n\n\n\n\n3. 跳出和终止循环"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<script>\n  // 1. continue\n\n  for (let i = 1; i <= 5; i++) {\n    if (i === 3) {\n      continue; // 结束本次循环，继续下一次循环\n    }\n\n    console.log(i);\n  }\n\n  // 2. break\n\n  for (let i = 1; i <= 5; i++) {\n    if (i === 3) {\n      break; // 退出结束整个循环\n    }\n\n    console.log(i);\n  }\n</script>"
        },
        {
          "type": "text",
          "text": "结论：\n\n\n\n- `JavaScript` 提供了多种语句来实现循环控制，但无论使用哪种语句都离不开循环的3个特征，即起始值、变化量、终止条件，做为初学者应着重体会这3个特征，不必过多纠结三种语句的区别。\n\n- 起始值、变化量、终止条件，由开发者根据逻辑需要进行设计，规避死循环的发生。\n\n- 当如果明确了循环的次数的时候推荐使用`for`循环,当不明确循环的次数的时候推荐使用`while`循环\n\n\n\n>注意：`for` 的语法结构更简洁，故 `for` 循环的使用频次会更多。"
        }
      ]
    },
    {
      "title": "循环嵌套",
      "trail": [
        "JavaScript 基础第三天笔记",
        "for 语句",
        "循环嵌套"
      ],
      "level": 3,
      "line": 163,
      "blocks": [
        {
          "type": "text",
          "text": "利用循环的知识来对比一个简单的天文知识，我们知道地球在自转的同时也在围绕太阳公转，如果把自转和公转都看成是循环的话，就相当于是循环中又嵌套了另一个循环。\n\n\n\n[课程配图见原资料]\n\n\n\n实际上 JavaScript 中任何一种循环语句都支持循环的嵌套，如下代码所示：\n\n\n\n[课程配图见原资料]"
        },
        {
          "type": "code",
          "language": "html",
          "text": "// 1. 外面的循环 记录第n天 for (let i = 1; i < 4; i++) { document.write(`第${i}天\n<br />\n`) // 2. 里层的循环记录 几个单词 for (let j = 1; j < 6; j++) {\ndocument.write(`记住第${j}个单词\n<br />\n`) } }"
        },
        {
          "type": "text",
          "text": "记住，外层循环循环一次，里层循环循环全部"
        }
      ]
    },
    {
      "title": "倒三角",
      "trail": [
        "JavaScript 基础第三天笔记",
        "for 语句",
        "循环嵌套",
        "倒三角"
      ],
      "level": 4,
      "line": 209,
      "blocks": [
        {
          "type": "code",
          "language": "javascript",
          "text": "// 外层打印几行\n\nfor (let i = 1; i <= 5; i++) {\n  // 里层打印几个星星\n\n  for (let j = 1; j <= i; j++) {\n    document.write('★');\n  }\n\n  document.write('<br>');\n}"
        },
        {
          "type": "text",
          "text": "[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "九九乘法表",
      "trail": [
        "JavaScript 基础第三天笔记",
        "for 语句",
        "循环嵌套",
        "九九乘法表"
      ],
      "level": 4,
      "line": 239,
      "blocks": [
        {
          "type": "text",
          "text": "样式css"
        },
        {
          "type": "code",
          "language": "css",
          "text": "span {\n  display: inline-block;\n\n  width: 100px;\n\n  padding: 5px 10px;\n\n  border: 1px solid pink;\n\n  margin: 2px;\n\n  border-radius: 5px;\n\n  box-shadow: 2px 2px 2px rgba(255, 192, 203, 0.4);\n\n  background-color: rgba(255, 192, 203, 0.1);\n\n  text-align: center;\n\n  color: hotpink;\n}"
        },
        {
          "type": "text",
          "text": "javascript"
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "// 外层打印几行\n\nfor (let i = 1; i <= 9; i++) {\n  // 里层打印几个星星\n\n  for (let j = 1; j <= i; j++) {\n    // 只需要吧 ★ 换成  1 x 1 = 1\n\n    document.write(`\n\n\t\t<div> ${j} x ${i} = ${j * i} </div>\n\n     `);\n  }\n\n  document.write('<br>');\n}"
        },
        {
          "type": "text",
          "text": "[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "数组",
      "trail": [
        "JavaScript 基础第三天笔记",
        "数组"
      ],
      "level": 2,
      "line": 313,
      "blocks": [
        {
          "type": "text",
          "text": "> 知道什么是数组及其应用的场景，掌握数组声明及访问的语法。"
        }
      ]
    },
    {
      "title": "数组是什么？",
      "trail": [
        "JavaScript 基础第三天笔记",
        "数组",
        "数组是什么？"
      ],
      "level": 3,
      "line": 321,
      "blocks": [
        {
          "type": "text",
          "text": "**数组：**(Array)是一种可以按顺序保存数据的数据类型\n\n\n\n**使用场景：**如果有多个数据可以用数组保存起来，然后放到一个变量中，管理非常方便"
        }
      ]
    },
    {
      "title": "定义数组和数组单元",
      "trail": [
        "JavaScript 基础第三天笔记",
        "数组",
        "数组的基本使用",
        "定义数组和数组单元"
      ],
      "level": 4,
      "line": 337,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<script>\n  // 1. 语法，使用 [] 来定义一个空数组\n\n  // 定义一个空数组，然后赋值给变量 classes\n\n  // let classes = [];\n\n  // 2. 定义非空数组\n\n  let classes = ['小明', '小刚', '小红', '小丽', '小米'];\n</script>"
        },
        {
          "type": "text",
          "text": "通过 `[]` 定义数组，数据中可以存放真正的数据，如小明、小刚、小红等这些都是数组中的数据，我们这些数据称为数组单元，数组单元之间使用英文逗号分隔。"
        }
      ]
    },
    {
      "title": "访问数组和数组索引",
      "trail": [
        "JavaScript 基础第三天笔记",
        "数组",
        "数组的基本使用",
        "访问数组和数组索引"
      ],
      "level": 4,
      "line": 367,
      "blocks": [
        {
          "type": "text",
          "text": "使用数组存放数据并不是最终目的，关键是能够随时的访问到数组中的数据（单元）。其实 JavaScript 为数组中的每一个数据单元都编了号，通过数据单元在数组中的编号便可以轻松访问到数组中的数据单元了。\n\n\n\n我们将数据单元在数组中的编号称为索引值，也有人称其为下标。\n\n\n\n索引值实际是按着数据单元在数组中的位置依次排列的，注意是从` 0` 开始的，如下图所示：\n\n\n\n[课程配图见原资料]\n\n\n\n观察上图可以数据单元【小明】对应的索引值为【0】，数据单元【小红】对应的索引值为【2】"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<script>\n  let classes = ['小明', '小刚', '小红', '小丽', '小米'];\n\n  // 1. 访问数组，语法格式为：变量名[索引值]\n\n  document.write(classes[0]); // 结果为：小明\n\n  document.write(classes[1]); // 结果为：小刚\n\n  document.write(classes[4]); // 结果为：小米\n\n  // 2. 通过索引值还可以为数组单重新赋值\n\n  document.write(classes[3]); // 结果为：小丽\n\n  // 重新为索引值为 3 的单元赋值\n\n  classes[3] = '小小丽';\n\n  document.wirte(classes[3]); // 结果为： 小小丽\n</script>"
        }
      ]
    },
    {
      "title": "数据单元值类型",
      "trail": [
        "JavaScript 基础第三天笔记",
        "数组",
        "数组的基本使用",
        "数据单元值类型"
      ],
      "level": 4,
      "line": 425,
      "blocks": [
        {
          "type": "text",
          "text": "数组做为数据的集合，它的单元值可以是任意数据类型"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<script>\n  // 6. 数组单值类型可以是任意数据类型\n\n  // a) 数组单元值的类型为字符类型\n\n  let list = ['HTML', 'CSS', 'JavaScript'];\n\n  // b) 数组单元值的类型为数值类型\n\n  let scores = [78, 84, 70, 62, 75];\n\n  // c) 混合多种类型\n\n  let mixin = [true, 1, false, 'hello'];\n</script>"
        }
      ]
    },
    {
      "title": "数组长度属性",
      "trail": [
        "JavaScript 基础第三天笔记",
        "数组",
        "数组的基本使用",
        "数组长度属性"
      ],
      "level": 4,
      "line": 459,
      "blocks": [
        {
          "type": "text",
          "text": "重申一次，数组在 JavaScript 中并不是新的数据类型，它属于对象类型。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<script>\n  // 定义一个数组\n\n  let arr = ['html', 'css', 'javascript'];\n\n  // 数组对应着一个 length 属性，它的含义是获取数组的长度\n\n  console.log(arr.length); // 3\n</script>"
        }
      ]
    },
    {
      "title": "操作数组",
      "trail": [
        "JavaScript 基础第三天笔记",
        "数组",
        "操作数组"
      ],
      "level": 3,
      "line": 485,
      "blocks": [
        {
          "type": "text",
          "text": "数组做为对象数据类型，不但有 `length` 属性可以使用，还提供了许多方法：\n\n\n\n1. push 动态向数组的尾部添加一个单元\n\n2. unshit 动态向数组头部添加一个单元\n\n3. pop 删除最后一个单元\n\n4. shift 删除第一个单元\n\n5. splice 动态删除任意单元\n\n\n\n使用以上4个方法时，都是直接在原数组上进行操作，即成功调任何一个方法，原数组都跟着发生相应的改变。并且在添加或删除单元时 `length` 并不会发生错乱。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<script>\n  // 定义一个数组\n\n  let arr = ['html', 'css', 'javascript'];\n\n  // 1. push 动态向数组的尾部添加一个单元\n\n  arr.push('Nodejs');\n\n  console.log(arr);\n\n  arr.push('Vue');\n\n  // 2. unshit 动态向数组头部添加一个单元\n\n  arr.unshift('VS Code');\n\n  console.log(arr);\n\n  // 3. splice 动态删除任意单元\n\n  arr.splice(2, 1); // 从索引值为2的位置开始删除1个单元\n\n  console.log(arr);\n\n  // 4. pop 删除最后一个单元\n\n  arr.pop();\n\n  console.log(arr);\n\n  // 5. shift 删除第一个单元\n\n  arr.shift();\n\n  console.log(arr);\n</script>"
        }
      ]
    }
  ]
};
