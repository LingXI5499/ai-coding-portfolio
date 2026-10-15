window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["8fbad3fd1a43bfb88021"] = {
  "id": "8fbad3fd1a43bfb88021",
  "title": "javascript基础第二天笔记.md",
  "treatment": "章节知识与练习",
  "sections": [
    {
      "title": "JavaScript 基础 - 第2天",
      "trail": [
        "JavaScript 基础 - 第2天"
      ],
      "level": 1,
      "line": 1,
      "blocks": [
        {
          "type": "text",
          "text": "> 理解什么是流程控制，知道条件控制的种类并掌握其对应的语法规则，具备利用循环编写简易ATM取款机程序能力\n\n\n\n- 运算符\n\n- 语句\n\n- 综合案例"
        }
      ]
    },
    {
      "title": "算术运算符",
      "trail": [
        "JavaScript 基础 - 第2天",
        "运算符",
        "算术运算符"
      ],
      "level": 3,
      "line": 23,
      "blocks": [
        {
          "type": "text",
          "text": "数字是用来计算的，比如：乘法 * 、除法 / 、加法 + 、减法 - 等等，所以经常和算术运算符一起。\n\n\n\n算术运算符：也叫数学运算符，主要包括加、减、乘、除、取余（求模）等\n\n\n\n| 运算符 | 作用                                                 |\n\n| ------ | ---------------------------------------------------- |\n\n| +      | 求和                                                 |\n\n| -      | 求差                                                 |\n\n| *      | 求积                                                 |\n\n| /      | 求商                                                 |\n\n| **%**  | 取模（取余数），开发中经常用于作为某个数字是否被整除 |\n\n\n\n> 注意：在计算失败时，显示的结果是 NaN （not a number）"
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "// 算术运算符\n\nconsole.log(1 + (2 * 3) / 2); //  4\n\nlet num = 10;\n\nconsole.log(num + 10); // 20\n\nconsole.log(num + num); // 20\n\n// 1. 取模(取余数)  使用场景：  用来判断某个数是否能够被整除\n\nconsole.log(4 % 2); //  0\n\nconsole.log(6 % 3); //  0\n\nconsole.log(5 % 3); //  2\n\nconsole.log(3 % 5); //  3\n\n// 2. 注意事项 : 如果我们计算失败，则返回的结果是 NaN (not a number)\n\nconsole.log('pink老师' - 2);\n\nconsole.log('pink老师' * 2);\n\nconsole.log('pink老师' + 2); // pink老师2"
        }
      ]
    },
    {
      "title": "赋值运算符",
      "trail": [
        "JavaScript 基础 - 第2天",
        "运算符",
        "赋值运算符"
      ],
      "level": 3,
      "line": 93,
      "blocks": [
        {
          "type": "text",
          "text": "赋值运算符：对变量进行赋值的运算符\n\n\n\n =     将等号右边的值赋予给左边, 要求左边必须是一个容器\n\n\n\n| 运算符 | 作用     |\n\n| ------ | -------- |\n\n| +=     | 加法赋值 |\n\n| -+     | 减法赋值 |\n\n| *=     | 乘法赋值 |\n\n| /=     | 除法赋值 |\n\n| %=     | 取余赋值 |"
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "<script>\n  let num = 1 // num = num + 1 // 采取赋值运算符 // num += 1 num += 3 console.log(num)\n</script>;"
        }
      ]
    },
    {
      "title": "自增/自减运算符",
      "trail": [
        "JavaScript 基础 - 第2天",
        "运算符",
        "自增/自减运算符"
      ],
      "level": 3,
      "line": 143,
      "blocks": [
        {
          "type": "text",
          "text": "| 符号 | 作用 | 说明                       |\n\n| ---- | ---- | -------------------------- |\n\n| ++   | 自增 | 变量自身的值加1，例如: x++ |\n\n| --   | 自减 | 变量自身的值减1，例如: x-- |\n\n\n\n1. ++在前和++在后在单独使用时二者并没有差别，而且一般开发中我们都是独立使用\n\n2. ++在后（后缀式）我们会使用更多\n\n\n\n> 注意：\n\n>\n\n> 1. 只有变量能够使用自增和自减运算符\n\n> 2. ++、-- 可以在变量前面也可以在变量后面，比如: x++  或者  ++x"
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "<script>\n  // let num = 10 // num = num + 1 // num += 1 // // 1. 前置自增 // let i = 1 // ++i //\n  console.log(i) // let i = 1 // console.log(++i + 1) // 2. 后置自增 // let i = 1 // i++\n  // console.log(i) // let i = 1 // console.log(i++ + 1) // 了解 let i = 1\n  console.log(i++ + ++i + i)\n</script>;"
        }
      ]
    },
    {
      "title": "比较运算符",
      "trail": [
        "JavaScript 基础 - 第2天",
        "运算符",
        "比较运算符"
      ],
      "level": 3,
      "line": 223,
      "blocks": [
        {
          "type": "text",
          "text": "使用场景：比较两个数据大小、是否相等，根据比较结果返回一个布尔值（true / false）\n\n\n\n| 运算符 | 作用                                   |\n\n| ------ | -------------------------------------- |\n\n| >      | 左边是否大于右边                       |\n\n| <      | 左边是否小于右边                       |\n\n| >=     | 左边是否大于或等于右边                 |\n\n| <=     | 左边是否小于或等于右边                 |\n\n| ===    | 左右两边是否`类型`和`值`都相等（重点） |\n\n| ==     | 左右两边`值`是否相等                   |\n\n| !=     | 左右值不相等                           |\n\n| !==    | 左右两边是否不全等                     |"
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "\n<script>\n\n  console.log(3 > 5)\n\n  console.log(3 >= 3)\n\n  console.log(2 == 2)\n\n  // 比较运算符有隐式转换 把'2' 转换为 2  双等号 只判断值\n\n  console.log(2 == '2')  // true\n\n  // console.log(undefined === null)\n\n  // === 全等 判断 值 和 数据类型都一样才行\n\n  // 以后判断是否相等 请用 ===  \n\n  console.log(2 === '2')\n\n  console.log(NaN === NaN) // NaN 不等于任何人，包括他自己\n\n  console.log(2 !== '2')  // true  \n\n  console.log(2 != '2') // false \n\n  console.log('-------------------------')\n\n  console.log('a' < 'b') // true\n\n  console.log('aa' < 'ab') // true\n\n  console.log('aa' < 'aac') // true\n\n  console.log('-------------------------')\n\n</script>\n",
          "note": "原资料中含排错代码或不完整片段，保留错误供分析；不会自动执行。"
        }
      ]
    },
    {
      "title": "逻辑运算符",
      "trail": [
        "JavaScript 基础 - 第2天",
        "运算符",
        "逻辑运算符"
      ],
      "level": 3,
      "line": 297,
      "blocks": [
        {
          "type": "text",
          "text": "使用场景：可以把多个布尔值放到一起运算，最终返回一个布尔值\n\n\n\n| 符号 | 名称   | 日常读法 | 特点                       | 口诀           |\n\n| ---- | ------ | -------- | -------------------------- | -------------- |\n\n| &&   | 逻辑与 | 并且     | 符号两边有一个假的结果为假 | 一假则假       |\n\n| \\|\\| | 逻辑或 | 或者     | 符号两边有一个真的结果为真 | 一真则真       |\n\n| !    | 逻辑非 | 取反     | true变false  false变true   | 真变假，假变真 |\n\n\n\n| A     | B     | A && B | A \\|\\| B | !A    |\n\n| ----- | ----- | ------ | -------- | ----- |\n\n| false | false | false  | false    | true  |\n\n| false | true  | false  | true     | true  |\n\n| true  | false | false  | true     | false |\n\n| true  | true  | true   | true     | false |"
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "\n<script>\n\n    // 逻辑与 一假则假\n\n    console.log(true && true)\n\n    console.log(false && true)\n\n    console.log(3 < 5 && 3 > 2)\n\n    console.log(3 < 5 && 3 < 2)\n\n    console.log('-----------------')\n\n    // 逻辑或 一真则真\n\n    console.log(true || true)\n\n    console.log(false || true)\n\n    console.log(false || false)\n\n    console.log('-----------------')\n\n    // 逻辑非  取反\n\n    console.log(!true)\n\n    console.log(!false)\n\n\n\n    console.log('-----------------')\n\n\n\n    let num = 6\n\n    console.log(num > 5 && num < 10)\n\n    console.log('-----------------')\n\n  </script>\n",
          "note": "原资料中含排错代码或不完整片段，保留错误供分析；不会自动执行。"
        }
      ]
    },
    {
      "title": "运算符优先级",
      "trail": [
        "JavaScript 基础 - 第2天",
        "运算符",
        "运算符优先级"
      ],
      "level": 3,
      "line": 381,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]\n\n\n\n> 逻辑运算符优先级： ！> && >  ||"
        }
      ]
    },
    {
      "title": "表达式和语句",
      "trail": [
        "JavaScript 基础 - 第2天",
        "语句",
        "表达式和语句"
      ],
      "level": 3,
      "line": 397,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "分支语句",
      "trail": [
        "JavaScript 基础 - 第2天",
        "语句",
        "分支语句"
      ],
      "level": 3,
      "line": 409,
      "blocks": [
        {
          "type": "text",
          "text": "分支语句可以根据条件判定真假，来选择性的执行想要的代码\n\n\n\n分支语句包含：\n\n\n\n1. if分支语句（重点）\n\n2. 三元运算符\n\n3. switch语句"
        }
      ]
    },
    {
      "title": "if 分支语句",
      "trail": [
        "JavaScript 基础 - 第2天",
        "语句",
        "分支语句",
        "if 分支语句"
      ],
      "level": 4,
      "line": 429,
      "blocks": [
        {
          "type": "text",
          "text": "语法："
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "if (条件表达式) {\n  // 满足条件要执行的语句\n}"
        },
        {
          "type": "text",
          "text": "小括号内的条件结果是布尔值，为 true 时，进入大括号里执行代码；为false，则不执行大括号里面代码\n\n\n\n小括号内的结果若不是布尔类型时，会发生类型转换为布尔值，类似Boolean()\n\n\n\n如果大括号只有一个语句，大括号可以省略，但是，俺们不提倡这么做~"
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "\n<script>\n\n    // 单分支语句\n\n    // if (false) {\n\n    //   console.log('执行语句')\n\n    // }\n\n    // if (3 > 5) {\n\n    //   console.log('执行语句')\n\n    // }\n\n    // if (2 === '2') {\n\n    //   console.log('执行语句')\n\n    // }\n\n    //  1. 除了0 所有的数字都为真\n\n    //   if (0) {\n\n    //     console.log('执行语句')\n\n    //   }\n\n    // 2.除了 '' 所有的字符串都为真 true\n\n    // if ('pink老师') {\n\n    //   console.log('执行语句')\n\n    // }\n\n    // if ('') {\n\n    //   console.log('执行语句')\n\n    // }\n\n    // // if ('') console.log('执行语句')\n\n\n\n    // 1. 用户输入\n\n    let score = +prompt('请输入成绩')\n\n    // 2. 进行判断输出\n\n    if (score >= 700) {\n\n      alert('恭喜考入黑马程序员')\n\n    }\n\n    console.log('-----------------')\n\n\n\n  </script>\n",
          "note": "原资料中含排错代码或不完整片段，保留错误供分析；不会自动执行。"
        }
      ]
    },
    {
      "title": "if双分支语句",
      "trail": [
        "JavaScript 基础 - 第2天",
        "语句",
        "分支语句",
        "if双分支语句"
      ],
      "level": 4,
      "line": 533,
      "blocks": [
        {
          "type": "text",
          "text": "如果有两个条件的时候，可以使用 if else 双分支语句"
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "if (条件表达式) {\n  // 满足条件要执行的语句\n} else {\n  // 不满足条件要执行的语句\n}"
        },
        {
          "type": "text",
          "text": "例如："
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "<script>\n  // 1. 用户输入 let uname = prompt('请输入用户名:') let pwd = prompt('请输入密码:') //\n  2. 判断输出 if (uname === 'pink' && pwd === '123456') {alert('恭喜登录成功')} else{' '}\n  {alert('用户名或者密码错误')}\n</script>;"
        }
      ]
    },
    {
      "title": "if 多分支语句",
      "trail": [
        "JavaScript 基础 - 第2天",
        "语句",
        "分支语句",
        "if 多分支语句"
      ],
      "level": 4,
      "line": 589,
      "blocks": [
        {
          "type": "text",
          "text": "使用场景： 适合于有多个条件的时候"
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "\n <script>\n\n    // 1. 用户输入\n\n    let score = +prompt('请输入成绩：')\n\n    // 2. 判断输出\n\n    if (score >= 90) {\n\n      alert('成绩优秀，宝贝，你是我的骄傲')\n\n    } else if (score >= 70) {\n\n      alert('成绩良好，宝贝，你要加油哦~~')\n\n    } else if (score >= 60) {\n\n      alert('成绩及格，宝贝，你很危险~')\n\n    } else {\n\n      alert('成绩不及格，宝贝，我不想和你说话，我只想用鞭子和你说话~')\n\n    }\n\n  </script>\n",
          "note": "原资料中含排错代码或不完整片段，保留错误供分析；不会自动执行。"
        }
      ]
    },
    {
      "title": "三元运算符（三元表达式）",
      "trail": [
        "JavaScript 基础 - 第2天",
        "语句",
        "分支语句",
        "三元运算符（三元表达式）"
      ],
      "level": 4,
      "line": 631,
      "blocks": [
        {
          "type": "text",
          "text": "**使用场景**： 一些简单的双分支，可以使用  三元运算符（三元表达式），写起来比 if  else双分支 更简单\n\n\n\n**符号**：? 与 : 配合使用\n\n\n\n语法："
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "\n条件 ? 表达式1 ： 表达式2\n",
          "note": "原资料中含排错代码或不完整片段，保留错误供分析；不会自动执行。"
        },
        {
          "type": "text",
          "text": "例如："
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "// 三元运算符（三元表达式）\n\n// 1. 语法格式\n\n// 条件 ? 表达式1 : 表达式2\n\n// 2. 执行过程\n\n// 2.1 如果条件为真，则执行表达式1\n\n// 2.2 如果条件为假，则执行表达式2\n\n// 3. 验证\n\n// 5 > 3 ? '真的' : '假的'\n\nconsole.log(5 < 3 ? '真的' : '假的');\n\n// let age = 18\n\n// age = age + 1\n\n//  age++\n\n// 1. 用户输入\n\nlet num = prompt('请您输入一个数字:');\n\n// 2. 判断输出- 小于10才补0\n\n// num = num < 10 ? 0 + num : num\n\nnum = num >= 10 ? num : 0 + num;\n\nalert(num);"
        }
      ]
    },
    {
      "title": "switch语句（了解）",
      "trail": [
        "JavaScript 基础 - 第2天",
        "语句",
        "分支语句",
        "switch语句（了解）"
      ],
      "level": 4,
      "line": 709,
      "blocks": [
        {
          "type": "text",
          "text": "使用场景： 适合于有多个条件的时候，也属于分支语句，大部分情况下和 if多分支语句 功能相同\n\n\n\n注意：\n\n\n\n1. switch case语句一般用于等值判断, if适合于区间判断\n\n2. switchcase一般需要配合break关键字使用 没有break会造成case穿透\n\n3. if 多分支语句开发要比switch更重要，使用也更多\n\n\n\n例如："
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "\n// switch分支语句\n\n// 1. 语法\n\n// switch (表达式) {\n\n//   case 值1:\n\n//     代码1\n\n//     break\n\n\n\n//   case 值2:\n\n//     代码2\n\n//     break\n\n//   ...\n\n//   default:\n\n//     代码n\n\n// }\n\n\n\n<script>\n\n  switch (2) {\n\n    case 1:\n\n    console.log('您选择的是1')\n\n    break  // 退出switch\n\n    case 2:\n\n    console.log('您选择的是2')\n\n    break  // 退出switch\n\n    case 3:\n\n    console.log('您选择的是3')\n\n    break  // 退出switch\n\n    default:\n\n    console.log('没有符合条件的')\n\n  }\n\n</script>\n",
          "note": "原资料中含排错代码或不完整片段，保留错误供分析；不会自动执行。"
        }
      ]
    },
    {
      "title": "断点调试",
      "trail": [
        "JavaScript 基础 - 第2天",
        "语句",
        "分支语句",
        "断点调试"
      ],
      "level": 4,
      "line": 799,
      "blocks": [
        {
          "type": "text",
          "text": "**作用：**学习时可以帮助更好的理解代码运行，工作时可以更快找到bug\n\n\n\n浏览器打开调试界面\n\n\n\n1. 按F12打开开发者工具\n\n2. 点到源代码一栏 （ sources ）\n\n3. 选择代码文件\n\n\n\n**断点：**在某句代码上加的标记就叫断点，当程序执行到这句有标记的代码时会暂停下来"
        }
      ]
    },
    {
      "title": "循环语句",
      "trail": [
        "JavaScript 基础 - 第2天",
        "语句",
        "循环语句"
      ],
      "level": 3,
      "line": 827,
      "blocks": [
        {
          "type": "text",
          "text": "使用场景：重复执行 指定的一段代码，比如我们想要输出10次 '我学的很棒'\n\n\n\n学习路径：\n\n\n\n1.while循环\n\n\n\n2.for 循环（重点）"
        }
      ]
    },
    {
      "title": "while循环",
      "trail": [
        "JavaScript 基础 - 第2天",
        "语句",
        "循环语句",
        "while循环"
      ],
      "level": 4,
      "line": 847,
      "blocks": [
        {
          "type": "text",
          "text": "while :  在…. 期间， 所以 while循环 就是在满足条件期间，重复执行某些代码。\n\n\n\n**语法：**"
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "while (条件表达式) {\n  // 循环体\n}"
        },
        {
          "type": "text",
          "text": "例如："
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "// while循环: 重复执行代码\n\n// 1. 需求: 利用循环重复打印3次 '月薪过万不是梦，毕业时候见英雄'\n\nlet i = 1;\n\nwhile (i <= 3) {\n  document.write('月薪过万不是梦，毕业时候见英雄~<br>');\n\n  i++; // 这里千万不要忘了变量自增否则造成死循环\n}"
        },
        {
          "type": "text",
          "text": "循环三要素：\n\n\n\n1.初始值 （经常用变量）\n\n\n\n2.终止条件\n\n\n\n3.变量的变化量\n\n\n\n例如："
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "\n<script>\n\n  // // 1. 变量的起始值\n\n  // let i = 1\n\n  // // 2. 终止条件\n\n  // while (i <= 3) {\n\n  //   document.write('我要循环三次 <br>')\n\n  //   // 3. 变量的变化量\n\n  //   i++\n\n  // }\n\n  // 1. 变量的起始值\n\n  let end = +prompt('请输入次数:')\n\nlet i = 1\n\n// 2. 终止条件\n\nwhile (i <= end) {\n\n  document.write('我要循环三次 <br>')\n\n  // 3. 变量的变化量\n\n  i++\n\n}\n\n\n\n</script>\n",
          "note": "原资料中含排错代码或不完整片段，保留错误供分析；不会自动执行。"
        }
      ]
    },
    {
      "title": "中止循环",
      "trail": [
        "JavaScript 基础 - 第2天",
        "语句",
        "循环语句",
        "中止循环"
      ],
      "level": 4,
      "line": 963,
      "blocks": [
        {
          "type": "text",
          "text": "`break`   中止整个循环，一般用于结果已经得到, 后续的循环不需要的时候可以使用（提高效率）  \n\n\n\n`continue`  中止本次循环，一般用于排除或者跳过某一个选项的时候"
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "\n<script>\n\n    // let i = 1\n\n    // while (i <= 5) {\n\n    //   console.log(i)\n\n    //   if (i === 3) {\n\n    //     break  // 退出循环\n\n    //   }\n\n    //   i++\n\n\n\n    // }\n\n\n\n\n\n    let i = 1\n\n    while (i <= 5) {\n\n      if (i === 3) {\n\n        i++\n\n        continue\n\n      }\n\n      console.log(i)\n\n      i++\n\n\n\n    }\n\n  </script>\n",
          "note": "原资料中含排错代码或不完整片段，保留错误供分析；不会自动执行。"
        }
      ]
    },
    {
      "title": "无限循环",
      "trail": [
        "JavaScript 基础 - 第2天",
        "语句",
        "循环语句",
        "无限循环"
      ],
      "level": 4,
      "line": 1027,
      "blocks": [
        {
          "type": "text",
          "text": "1.while(true) 来构造“无限”循环，需要使用break退出循环。（常用）\n\n\n\n2.for(;;) 也可以来构造“无限”循环，同样需要使用break退出循环。"
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "// 无限循环\n\n// 需求： 页面会一直弹窗询问你爱我吗？\n\n// (1). 如果用户输入的是 '爱'，则退出弹窗\n\n// (2). 否则一直弹窗询问\n\n// 1. while(true) 无限循环\n\n// while (true) {\n\n//   let love = prompt('你爱我吗?')\n\n//   if (love === '爱') {\n\n//     break\n\n//   }\n\n// }\n\n// 2. for(;;) 无限循环\n\nfor (;;) {\n  let love = prompt('你爱我吗?');\n\n  if (love === '爱') {\n    break;\n  }\n}"
        }
      ]
    },
    {
      "title": "综合案例-ATM存取款机",
      "trail": [
        "JavaScript 基础 - 第2天",
        "综合案例-ATM存取款机"
      ],
      "level": 2,
      "line": 1085,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]\n\n\n\n\n\n\n\n分析：\n\n\n\n①：提示输入框写到循环里面（无限循环）\n\n\n\n②：用户输入4则退出循环 break\n\n\n\n③：提前准备一个金额预先存储一个数额 money\n\n\n\n④：根据输入不同的值，做不同的操作\n\n\n\n​     (1)  取钱则是减法操作， 存钱则是加法操作，查看余额则是直接显示金额\n\n\n\n​     (2) 可以使用 if else if 多分支 来执行不同的操作\n\n\n\n完整代码："
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "\n<script>\n\n  // 1. 开始循环 输入框写到 循环里面\n\n  // 3. 准备一个总的金额\n\n  let money = 100\n\nwhile (true) {\n\n  let re = +prompt(`\n\n请您选择操作：\n\n1.存钱\n\n2.取钱\n\n3.查看余额\n\n4.退出\n\n`)\n\n  // 2. 如果用户输入的 4 则退出循环， break  写到if 里面，没有写到switch里面， 因为4需要break退出循环\n\n  if (re === 4) {\n\n    break\n\n  }\n\n  // 4. 根据输入做操作\n\n  switch (re) {\n\n    case 1:\n\n      // 存钱\n\n      let cun = +prompt('请输入存款金额')\n\n      money = money + cun\n\n      break\n\n      case 2:\n\n      // 存钱\n\n      let qu = +prompt('请输入取款金额')\n\n      money = money - qu\n\n      break\n\n      case 3:\n\n      // 存钱\n\n      alert(`您的银行卡余额是${money}`)\n\n      break\n\n  }\n\n}\n\n</script>\n",
          "note": "原资料中含排错代码或不完整片段，保留错误供分析；不会自动执行。"
        }
      ]
    }
  ]
};
