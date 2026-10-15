window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["74657ee981164ab1d054"] = {
  "id": "74657ee981164ab1d054",
  "title": "README.md",
  "treatment": "章节知识与练习",
  "sections": [
    {
      "title": "JavaScript 基础 - 第1天",
      "trail": [
        "JavaScript 基础 - 第1天"
      ],
      "level": 1,
      "line": 1,
      "blocks": [
        {
          "type": "text",
          "text": "> 了解变量、数据类型、运算符等基础概念，能够实现数据类型的转换，结合四则运算体会如何编程。\n\n\n\n- 体会现实世界中的事物与计算机的关系\n\n- 理解什么是数据并知道数据的分类\n\n- 理解变量存储数据的“容器”\n\n- 掌握常见运算符的使用，了解优先级关系\n\n- 知道 JavaScript 数据类型隐式转换的特征"
        }
      ]
    },
    {
      "title": "介绍",
      "trail": [
        "JavaScript 基础 - 第1天",
        "介绍"
      ],
      "level": 2,
      "line": 21,
      "blocks": [
        {
          "type": "text",
          "text": "> 掌握 JavaScript 的引入方式，初步认识 JavaScript 的作用"
        }
      ]
    },
    {
      "title": "引入方式",
      "trail": [
        "JavaScript 基础 - 第1天",
        "介绍",
        "引入方式"
      ],
      "level": 3,
      "line": 29,
      "blocks": [
        {
          "type": "text",
          "text": "JavaScript 程序不能独立运行，它需要被嵌入 HTML 中，然后浏览器才能执行 JavaScript 代码。通过 `script` 标签将 JavaScript 代码引入到 HTML 中，有两种方式："
        }
      ]
    },
    {
      "title": "内部方式",
      "trail": [
        "JavaScript 基础 - 第1天",
        "介绍",
        "引入方式",
        "内部方式"
      ],
      "level": 4,
      "line": 37,
      "blocks": [
        {
          "type": "text",
          "text": "通过 `script` 标签包裹 JavaScript 代码"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <title>JavaScript 基础 - 引入方式</title>\n  </head>\n\n  <body>\n    <!-- 内联形式：通过 script 标签包裹 JavaScript 代码 -->\n\n    <script>\n      alert('嗨，欢迎来传智播学习前端技术！');\n    </script>\n  </body>\n</html>"
        }
      ]
    },
    {
      "title": "外部形式",
      "trail": [
        "JavaScript 基础 - 第1天",
        "介绍",
        "引入方式",
        "外部形式"
      ],
      "level": 4,
      "line": 77,
      "blocks": [
        {
          "type": "text",
          "text": "一般将 JavaScript 代码写在独立的以 .js 结尾的文件中，然后通过 `script` 标签的 `src` 属性引入"
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "// demo.js\n\ndocument.write('嗨，欢迎来传智播学习前端技术！');"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <title>JavaScript 基础 - 引入方式</title>\n  </head>\n\n  <body>\n    <!-- 外部形式：通过 script 的 src 属性引入独立的 .js 文件 -->\n\n    <script src=\"demo.js\"></script>\n  </body>\n</html>"
        },
        {
          "type": "text",
          "text": "如果 script 标签使用 src 属性引入了某 .js 文件，那么 标签的代码会被忽略！！！如下代码所示："
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <title>JavaScript 基础 - 引入方式</title>\n  </head>\n\n  <body>\n    <!-- 外部形式：通过 script 的 src 属性引入独立的 .js 文件 -->\n\n    <script src=\"demo.js\">\n\n       // 此处的代码会被忽略掉！！！！\n\n      alert(666);\n    </script>\n  </body>\n</html>"
        }
      ]
    },
    {
      "title": "注释和结束符",
      "trail": [
        "JavaScript 基础 - 第1天",
        "介绍",
        "注释和结束符"
      ],
      "level": 3,
      "line": 161,
      "blocks": [
        {
          "type": "text",
          "text": "通过注释可以屏蔽代码被执行或者添加备注信息，JavaScript 支持两种形式注释语法："
        }
      ]
    },
    {
      "title": "单行注释",
      "trail": [
        "JavaScript 基础 - 第1天",
        "介绍",
        "注释和结束符",
        "单行注释"
      ],
      "level": 4,
      "line": 169,
      "blocks": [
        {
          "type": "text",
          "text": "使用 `// ` 注释单行代码"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <title>JavaScript 基础 - 注释</title>\n  </head>\n\n  <body>\n    <script>\n      // 这种是单行注释的语法\n\n      // 一次只能注释一行\n\n      // 可以重复注释\n\n      document.write('嗨，欢迎来传智播学习前端技术！');\n    </script>\n  </body>\n</html>"
        }
      ]
    },
    {
      "title": "多行注释",
      "trail": [
        "JavaScript 基础 - 第1天",
        "介绍",
        "注释和结束符",
        "多行注释"
      ],
      "level": 4,
      "line": 215,
      "blocks": [
        {
          "type": "text",
          "text": "使用 `/* */` 注释多行代码"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <title>JavaScript 基础 - 注释</title>\n  </head>\n\n  <body>\n    <script>\n      /* 这种的是多行注释的语法 */\n\n      /*\n\n    \t更常见的多行注释是这种写法\n\n    \t在些可以任意换行\n\n    \t多少行都可以\n\n      */\n\n      document.write('嗨，欢迎来传智播学习前端技术！');\n    </script>\n  </body>\n</html>"
        },
        {
          "type": "text",
          "text": "**注：编辑器中单行注释的快捷键为 `ctrl + /`**"
        }
      ]
    },
    {
      "title": "结束符",
      "trail": [
        "JavaScript 基础 - 第1天",
        "介绍",
        "结束符"
      ],
      "level": 3,
      "line": 271,
      "blocks": [
        {
          "type": "text",
          "text": "在 JavaScript 中 `;` 代表一段代码的结束，多数情况下可以省略 `;` 使用回车（enter）替代。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <title>JavaScript 基础 - 结束符</title>\n  </head>\n\n  <body>\n    <script>\n      alert(1);\n\n      alert(2);\n\n      alert(1);\n\n      alert(2);\n    </script>\n  </body>\n</html>"
        },
        {
          "type": "text",
          "text": "实际开发中有许多人主张书写 JavaScript 代码时省略结束符 `;`"
        }
      ]
    },
    {
      "title": "输入和输出",
      "trail": [
        "JavaScript 基础 - 第1天",
        "介绍",
        "输入和输出"
      ],
      "level": 3,
      "line": 321,
      "blocks": [
        {
          "type": "text",
          "text": "输出和输入也可理解为人和计算机的交互，用户通过键盘、鼠标等向计算机输入信息，计算机处理后再展示结果给用户，这便是一次输入和输出的过程。\n\n\n\n举例说明：如按键盘上的方向键，向上/下键可以滚动页面，按向上/下键这个动作叫作输入，页面发生了滚动了这便叫输出。"
        }
      ]
    },
    {
      "title": "输出",
      "trail": [
        "JavaScript 基础 - 第1天",
        "介绍",
        "输入和输出",
        "输出"
      ],
      "level": 4,
      "line": 333,
      "blocks": [
        {
          "type": "text",
          "text": "JavaScript 可以接收用户的输入，然后再将输入的结果输出：\n\n\n\n`alert()`、`document.wirte()`\n\n\n\n以数字为例，向 `alert()` 或 `document.write()`输入任意数字，他都会以弹窗形式展示（输出）给用户。"
        }
      ]
    },
    {
      "title": "输入",
      "trail": [
        "JavaScript 基础 - 第1天",
        "介绍",
        "输入和输出",
        "输入"
      ],
      "level": 4,
      "line": 349,
      "blocks": [
        {
          "type": "text",
          "text": "向 `prompt()` 输入任意内容会以弹窗形式出现在浏览器中，一般提示用户输入一些内容。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <title>JavaScript 基础 - 输入输出</title>\n  </head>\n\n  <body>\n    <script>\n      // 1. 输入的任意数字，都会以弹窗形式展示\n\n      document.write('要输出的内容');\n\n      alert('要输出的内容');\n\n      // 2. 以弹窗形式提示用户输入姓名，注意这里的文字使用英文的引号\n\n      prompt('请输入您的姓名:');\n    </script>\n  </body>\n</html>"
        }
      ]
    },
    {
      "title": "变量",
      "trail": [
        "JavaScript 基础 - 第1天",
        "变量"
      ],
      "level": 2,
      "line": 399,
      "blocks": [
        {
          "type": "text",
          "text": "> 理解变量是计算机存储数据的“容器”，掌握变量的声明方式\n\n\n\n变量是计算机中用来存储数据的“容器”，它可以让计算机变得有记忆，通俗的理解变量就是使用【某个符号】来代表【某个具体的数值】（数据）"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<script>\n  // x 符号代表了 5 这个数值\n\n  x = 5;\n\n  // y 符号代表了 6 这个数值\n\n  y = 6;\n\n  //举例： 在 JavaScript 中使用变量可以将某个数据（数值）记录下来！\n\n  // 将用户输入的内容保存在 num 这个变量（容器）中\n\n  num = prompt('请输入一数字!');\n\n  // 通过 num 变量（容器）将用户输入的内容输出出来\n\n  alert(num);\n\n  document.write(num);\n</script>"
        }
      ]
    },
    {
      "title": "声明",
      "trail": [
        "JavaScript 基础 - 第1天",
        "变量",
        "声明"
      ],
      "level": 3,
      "line": 447,
      "blocks": [
        {
          "type": "text",
          "text": "声明(定义)变量有两部分构成：声明关键字、变量名（标识）"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <title>JavaScript 基础 - 声明和赋值</title>\n  </head>\n\n  <body>\n    <script>\n      // let 变量名\n\n      // 声明(定义)变量有两部分构成：声明关键字、变量名（标识）\n\n      // let 即关键字，所谓关键字是系统提供的专门用来声明（定义）变量的词语\n\n      // age 即变量的名称，也叫标识符\n\n      let age;\n    </script>\n  </body>\n</html>"
        },
        {
          "type": "text",
          "text": "关键字是 JavaScript 中内置的一些英文词汇（单词或缩写），它们代表某些特定的含义，如 `let` 的含义是声明变量的，看到 `let`  后就可想到这行代码的意思是在声明变量，如 `let age;` \n\n\n\n`let` 和 `var` 都是 JavaScript 中的声明变量的关键字，推荐使用 `let` 声明变量！！！"
        }
      ]
    },
    {
      "title": "赋值",
      "trail": [
        "JavaScript 基础 - 第1天",
        "变量",
        "赋值"
      ],
      "level": 3,
      "line": 503,
      "blocks": [
        {
          "type": "text",
          "text": "声明（定义）变量相当于创造了一个空的“容器”，通过赋值向这个容器中添加数据。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <title>JavaScript 基础 - 声明和赋值</title>\n  </head>\n\n  <body>\n    <script>\n      // 声明(定义)变量有两部分构成：声明关键字、变量名（标识）\n\n      // let 即关键字，所谓关键字是系统提供的专门用来声明（定义）变量的词语\n\n      // age 即变量的名称，也叫标识符\n\n      let age;\n\n      // 赋值，将 18 这个数据存入了 age 这个“容器”中\n\n      age = 18;\n\n      // 这样 age 的值就成了 18\n\n      document.write(age);\n\n      // 也可以声明和赋值同时进行\n\n      let str = 'hello world!';\n\n      alert(str);\n    </script>\n  </body>\n</html>"
        }
      ]
    },
    {
      "title": "关键字",
      "trail": [
        "JavaScript 基础 - 第1天",
        "变量",
        "关键字"
      ],
      "level": 3,
      "line": 565,
      "blocks": [
        {
          "type": "text",
          "text": "JavaScript 使用专门的关键字 `let` 和 `var` 来声明（定义）变量，在使用时需要注意一些细节：\n\n\n\n以下是使用 `let` 时的注意事项：\n\n\n\n1. 允许声明和赋值同时进行\n\n2. 不允许重复声明\n\n3. 允许同时声明多个变量并赋值\n\n4. JavaScript 中内置的一些关键字不能被当做变量名\n\n\n\n以下是使用 `var` 时的注意事项：\n\n\n\n2. 允许声明和赋值同时进行\n\n2. 允许重复声明\n\n3. 允许同时声明多个变量并赋值\n\n\n\n大部分情况使用 `let` 和 `var` 区别不大，但是 `let` 相较 `var` 更严谨，因此推荐使用 `let`，后期会更进一步介绍二者间的区别。"
        }
      ]
    },
    {
      "title": "变量名命名规则",
      "trail": [
        "JavaScript 基础 - 第1天",
        "变量",
        "变量名命名规则"
      ],
      "level": 3,
      "line": 603,
      "blocks": [
        {
          "type": "text",
          "text": "关于变量的名称（标识符）有一系列的规则需要遵守：\n\n\n\n1. 只能是字母、数字、下划线、$，且不能能数字开头\n\n2. 字母区分大小写，如 Age 和 age 是不同的变量\n\n3. JavaScript 内部已占用于单词（关键字或保留字）不允许使用\n\n4. 尽量保证变量具有一定的语义，见字知义\n\n\n\n注：所谓关键字是指 JavaScript 内部使用的词语，如 `let` 和`var`，保留字是指 JavaScript 内部目前没有使用的词语，但是将来可能会使用词语。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <title>JavaScript 基础 - 变量名命名规则</title>\n  </head>\n\n  <body>\n    <script>\n      let age = 18; // 正确\n\n      let age1 = 18; // 正确\n\n      let _age = 18; // 正确\n\n      // let 1age = 18; // 错误，不可以数字开头\n\n      let $age = 18; // 正确\n\n      let Age = 24; // 正确，它与小写的 age 是不同的变量\n\n      // let let = 18; // 错误，let 是关键字\n\n      let int = 123; // 不推荐，int 是保留字\n    </script>\n  </body>\n</html>"
        }
      ]
    },
    {
      "title": "常量",
      "trail": [
        "JavaScript 基础 - 第1天",
        "常量"
      ],
      "level": 2,
      "line": 673,
      "blocks": [
        {
          "type": "text",
          "text": "概念：使用 const 声明的变量称为“常量”。\n\n\n\n使用场景：当某个变量永远不会改变的时候，就可以使用 const 来声明，而不是let。\n\n\n\n命名规范：和变量一致"
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "const PI = 3.14;"
        },
        {
          "type": "text",
          "text": ">注意： 常量不允许重新赋值,声明的时候必须赋值（初始化）"
        }
      ]
    },
    {
      "title": "数据类型",
      "trail": [
        "JavaScript 基础 - 第1天",
        "数据类型"
      ],
      "level": 2,
      "line": 701,
      "blocks": [
        {
          "type": "text",
          "text": "> 计算机世界中的万事成物都是数据。\n\n\n\n计算机程序可以处理大量的数据，为了方便数据的管理，将数据分成了不同的类型：\n\n\n\n注：通过 typeof 关键字检测数据类型"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <title>JavaScript 基础 - 数据类型</title>\n  </head>\n\n  <body>\n    <script>\n      // 检测 1 是什么类型数据，结果为 number\n\n      document.write(typeof 1);\n    </script>\n  </body>\n</html>"
        }
      ]
    },
    {
      "title": "数值类型",
      "trail": [
        "JavaScript 基础 - 第1天",
        "数据类型",
        "数值类型"
      ],
      "level": 3,
      "line": 751,
      "blocks": [
        {
          "type": "text",
          "text": "即我们数学中学习到的数字，可以是整数、小数、正数、负数"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <title>JavaScript 基础 - 数据类型</title>\n  </head>\n\n  <body>\n    <script>\n      let score = 100; // 正整数\n\n      let price = 12.345; // 小数\n\n      let temperature = -40; // 负数\n\n      document.write(typeof score); // 结果为 number\n\n      document.write(typeof price); // 结果为 number\n\n      document.write(typeof temperature); // 结果为 number\n    </script>\n  </body>\n</html>"
        },
        {
          "type": "text",
          "text": "JavaScript 中的数值类型与数学中的数字是一样的，分为正数、负数、小数等。"
        }
      ]
    },
    {
      "title": "字符串类型",
      "trail": [
        "JavaScript 基础 - 第1天",
        "数据类型",
        "字符串类型"
      ],
      "level": 3,
      "line": 807,
      "blocks": [
        {
          "type": "text",
          "text": "通过单引号（ `''`） 、双引号（ `\"\"`）或反引号包裹的数据都叫字符串，单引号和双引号没有本质上的区别，推荐使用单引号。\n\n\n\n注意事项：\n\n\n\n1. 无论单引号或是双引号必须成对使用\n\n2. 单引号/双引号可以互相嵌套，但是不以自已嵌套自已\n\n3. 必要时可以使用转义符 `\\`，输出单引号或双引号"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <title>JavaScript 基础 - 数据类型</title>\n  </head>\n\n  <body>\n    <script>\n      let user_name = '小明'; // 使用单引号\n\n      let gender = '男'; // 使用双引号\n\n      let str = '123'; // 看上去是数字，但是用引号包裹了就成了字符串了\n\n      let str1 = ''; // 这种情况叫空字符串\n\n      documeent.write(typeof user_name); // 结果为 string\n\n      documeent.write(typeof gender); // 结果为 string\n\n      documeent.write(typeof str); // 结果为 string\n    </script>\n  </body>\n</html>"
        }
      ]
    },
    {
      "title": "布尔类型",
      "trail": [
        "JavaScript 基础 - 第1天",
        "数据类型",
        "布尔类型"
      ],
      "level": 3,
      "line": 873,
      "blocks": [
        {
          "type": "text",
          "text": "表示肯定或否定时在计算机中对应的是布尔类型数据，它有两个固定的值 `true` 和 `false`，表示肯定的数据用 `true`，表示否定的数据用 `false`。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <title>JavaScript 基础 - 数据类型</title>\n  </head>\n\n  <body>\n    <script>\n      //  pink老师帅不帅？回答 是 或 否\n\n      let isCool = true; // 是的，摔死了！\n\n      isCool = false; // 不，套马杆的汉子！\n\n      document.write(typeof isCool); // 结果为 boolean\n    </script>\n  </body>\n</html>"
        }
      ]
    },
    {
      "title": "undefined",
      "trail": [
        "JavaScript 基础 - 第1天",
        "数据类型",
        "undefined"
      ],
      "level": 3,
      "line": 921,
      "blocks": [
        {
          "type": "text",
          "text": "未定义是比较特殊的类型，只有一个值 undefined，只声明变量，不赋值的情况下，变量的默认值为 undefined，一般很少【直接】为某个变量赋值为 undefined。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <title>JavaScript 基础 - 数据类型</title>\n  </head>\n\n  <body>\n    <script>\n      // 只声明了变量，并末赋值\n\n      let tmp;\n\n      document.write(typeof tmp); // 结果为 undefined\n    </script>\n  </body>\n</html>"
        },
        {
          "type": "text",
          "text": "**注：JavaScript 中变量的值决定了变量的数据类型。**"
        }
      ]
    },
    {
      "title": "类型转换",
      "trail": [
        "JavaScript 基础 - 第1天",
        "类型转换"
      ],
      "level": 2,
      "line": 969,
      "blocks": [
        {
          "type": "text",
          "text": "> 理解弱类型语言的特征，掌握显式类型转换的方法\n\n\n\n在 JavaScript 中数据被分成了不同的类型，如数值、字符串、布尔值、undefined，在实际编程的过程中，不同数据类型之间存在着转换的关系。"
        }
      ]
    },
    {
      "title": "隐式转换",
      "trail": [
        "JavaScript 基础 - 第1天",
        "类型转换",
        "隐式转换"
      ],
      "level": 3,
      "line": 981,
      "blocks": [
        {
          "type": "text",
          "text": "某些运算符被执行时，系统内部自动将数据类型进行转换，这种转换称为隐式转换。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <title>JavaScript 基础 - 隐式转换</title>\n  </head>\n\n  <body>\n    <script>\n      let num = 13; // 数值\n\n      let num2 = '2'; // 字符串\n\n      // 结果为 132\n\n      // 原因是将数值 num 转换成了字符串，相当于 '13'\n\n      // 然后 + 将两个字符串拼接到了一起\n\n      console.log(num + num2);\n\n      // 结果为 11\n\n      // 原因是将字符串 num2 转换成了数值，相当于 2\n\n      // 然后数值 13 减去 数值 2\n\n      console.log(num - num2);\n\n      let a = prompt('请输入一个数字');\n\n      let b = prompt('请再输入一个数字');\n\n      alert(a + b);\n    </script>\n  </body>\n</html>"
        },
        {
          "type": "text",
          "text": "注：数据类型的隐式转换是 JavaScript 的特征，后续学习中还会遇到，目前先需要理解什么是隐式转换。\n\n\n\n补充介绍模板字符串的拼接的使用"
        }
      ]
    },
    {
      "title": "显式转换",
      "trail": [
        "JavaScript 基础 - 第1天",
        "类型转换",
        "显式转换"
      ],
      "level": 3,
      "line": 1059,
      "blocks": [
        {
          "type": "text",
          "text": "编写程序时过度依靠系统内部的隐式转换是不严禁的，因为隐式转换规律并不清晰，大多是靠经验总结的规律。为了避免因隐式转换带来的问题，通常根逻辑需要对数据进行显示转换。"
        }
      ]
    },
    {
      "title": "Number",
      "trail": [
        "JavaScript 基础 - 第1天",
        "类型转换",
        "显式转换",
        "Number"
      ],
      "level": 4,
      "line": 1067,
      "blocks": [
        {
          "type": "text",
          "text": "通过 `Number` 显示转换成数值类型，当转换失败时结果为 `NaN`（Not a Number）即不是一个数字。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <title>JavaScript 基础 - 隐式转换</title>\n  </head>\n\n  <body>\n    <script>\n      let t = '12';\n\n      let f = 8;\n\n      // 显式将字符串 12 转换成数值 12\n\n      t = Number(t);\n\n      // 检测转换后的类型\n\n      // console.log(typeof t);\n\n      console.log(t + f); // 结果为 20\n\n      // 并不是所有的值都可以被转成数值类型\n\n      let str = 'hello';\n\n      // 将 hello 转成数值是不现实的，当无法转换成\n\n      // 数值时，得到的结果为 NaN （Not a Number）\n\n      console.log(Number(str));\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
