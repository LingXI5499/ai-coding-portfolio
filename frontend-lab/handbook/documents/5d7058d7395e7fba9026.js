window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["5d7058d7395e7fba9026"] = {
  "id": "5d7058d7395e7fba9026",
  "title": "js基础第四天.md",
  "treatment": "章节知识与练习",
  "sections": [
    {
      "title": "JavaScript 基础 - 第4天笔记",
      "trail": [
        "JavaScript 基础 - 第4天笔记"
      ],
      "level": 1,
      "line": 1,
      "blocks": [
        {
          "type": "text",
          "text": "> 理解封装的意义，能够通过函数的声明实现逻辑的封装，知道对象数据类型的特征，结合数学对象实现简单计算功能。\n\n\n\n- 理解函数的封装的特征\n\n- 掌握函数声明的语法\n\n- 理解什么是函数的返回值\n\n- 知道并能使用常见的内置函数"
        }
      ]
    },
    {
      "title": "函数",
      "trail": [
        "JavaScript 基础 - 第4天笔记",
        "函数"
      ],
      "level": 2,
      "line": 19,
      "blocks": [
        {
          "type": "text",
          "text": "> 理解函数的封装特性，掌握函数的语法规则"
        }
      ]
    },
    {
      "title": "声明和调用",
      "trail": [
        "JavaScript 基础 - 第4天笔记",
        "函数",
        "声明和调用"
      ],
      "level": 3,
      "line": 27,
      "blocks": [
        {
          "type": "text",
          "text": "函数可以把具有相同或相似逻辑的代码“包裹”起来，通过函数调用执行这些被“包裹”的代码逻辑，这么做的优势是有利于精简代码方便复用。"
        }
      ]
    },
    {
      "title": "声明（定义）",
      "trail": [
        "JavaScript 基础 - 第4天笔记",
        "函数",
        "声明和调用",
        "声明（定义）"
      ],
      "level": 4,
      "line": 35,
      "blocks": [
        {
          "type": "text",
          "text": "声明（定义）一个完整函数包括关键字、函数名、形式参数、函数体、返回值5个部分\n\n\n\n[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "调用",
      "trail": [
        "JavaScript 基础 - 第4天笔记",
        "函数",
        "声明和调用",
        "调用"
      ],
      "level": 4,
      "line": 47,
      "blocks": [
        {
          "type": "text",
          "text": "声明（定义）的函数必须调用才会真正被执行，使用 `()` 调用函数。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <title>JavaScript 基础 - 声明和调用</title>\n  </head>\n\n  <body>\n    <script>\n      // 声明（定义）了最简单的函数，既没有形式参数，也没有返回值\n\n      function sayHi() {\n        console.log('嗨~');\n      }\n\n      // 函数调用，这些函数体内的代码逻辑会被执行\n\n      // 函数名()\n\n      sayHi();\n\n      // 可以重复被调用，多少次都可以\n\n      sayHi();\n    </script>\n  </body>\n</html>"
        },
        {
          "type": "text",
          "text": "> 注：函数名的命名规则与变量是一致的，并且尽量保证函数名的语义。\n\n\n\n小案例： 小星星"
        },
        {
          "type": "code",
          "language": "javascript",
          "text": "\n<script>\n\n        // 函数声明\n\n        function sayHi() {\n\n            // document.write('hai~')\n\n            document.write(`*<br>`)\n\n            document.write(`**<br>`)\n\n            document.write(`***<br>`)\n\n            document.write(`****<br>`)\n\n            document.write(`*****<br>`)\n\n            document.write(`******<br>`)\n\n            document.write(`*******<br>`)\n\n            document.write(`********<br>`)\n\n            document.write(`*********<br>`)\n\n        }\n\n        // 函数调用\n\n        sayHi()\n\n        sayHi()\n\n        sayHi()\n\n        sayHi()\n\n        sayHi()\n\n    </script>\n",
          "note": "原资料中含排错代码或不完整片段，保留错误供分析；不会自动执行。"
        }
      ]
    },
    {
      "title": "参数",
      "trail": [
        "JavaScript 基础 - 第4天笔记",
        "函数",
        "参数"
      ],
      "level": 3,
      "line": 159,
      "blocks": [
        {
          "type": "text",
          "text": "通过向函数传递参数，可以让函数更加灵活多变，参数可以理解成是一个变量。\n\n\n\n声明（定义）一个功能为打招呼的函数\n\n\n\n- 传入数据列表\n\n- 声明这个函数需要传入几个数据\n\n- 多个数据用逗号隔开"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <title>JavaScript 基础 - 函数参数</title>\n  </head>\n\n  <body>\n    <script>\n      // 声明（定义）一个功能为打招呼的函数\n\n      // function sayHi() {\n\n      //   console.log('嗨~')\n\n      // }\n\n      // 调用函数\n\n      // sayHi()\n\n      // 这个函数似乎没有什么价值，除非能够向不同的人打招呼\n\n      // 这就需要借助参数来实现了\n\n      function sayHi(name) {\n        // 参数 name 可以被理解成是一个变量\n\n        console.log(name);\n\n        console.log('嗨~' + name);\n      }\n\n      // 调用 sayHi 函数，括号中多了 '小明'\n\n      // 这时相当于为参数 name 赋值了\n\n      sayHi('小明'); // 结果为 小明\n\n      // 再次调用 sayHi 函数，括号中多了 '小红'\n\n      // 这时相当于为参数 name 赋值了\n\n      sayHi('小红'); // 结果为 小红\n    </script>\n  </body>\n</html>"
        },
        {
          "type": "text",
          "text": "总结：\n\n\n\n1. 声明（定义）函数时的形参没有数量限制，当有多个形参时使用 `,` 分隔\n\n2. 调用函数传递的实参要与形参的顺序一致"
        }
      ]
    },
    {
      "title": "形参和实参",
      "trail": [
        "JavaScript 基础 - 第4天笔记",
        "函数",
        "参数",
        "形参和实参"
      ],
      "level": 4,
      "line": 265,
      "blocks": [
        {
          "type": "text",
          "text": "形参：声明函数时写在函数名右边小括号里的叫形参（形式上的参数）\n\n\n\n实参：调用函数时写在函数名右边小括号里的叫实参（实际上的参数）\n\n\n\n形参可以理解为是在这个函数内声明的变量（比如 num1 = 10）实参可以理解为是给这个变量赋值\n\n\n\n开发中尽量保持形参和实参个数一致"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <title>JavaScript 基础 - 函数参数</title>\n  </head>\n\n  <body>\n    <script>\n      // 声明（定义）一个计算任意两数字和的函数\n\n      // 形参 x 和 y 分别表示任意两个数字，它们是两个变量\n\n      function count(x, y) {\n        console.log(x + y);\n      }\n\n      // 调用函数，传入两个具体的数字做为实参\n\n      // 此时 10 赋值给了形参 x\n\n      // 此时 5  赋值给了形参 y\n\n      count(10, 5); // 结果为 15\n    </script>\n  </body>\n</html>"
        }
      ]
    },
    {
      "title": "返回值",
      "trail": [
        "JavaScript 基础 - 第4天笔记",
        "函数",
        "返回值"
      ],
      "level": 3,
      "line": 331,
      "blocks": [
        {
          "type": "text",
          "text": "函数的本质是封装（包裹），函数体内的逻辑执行完毕后，函数外部如何获得函数内部的执行结果呢？要想获得函数内部逻辑的执行结果，需要通过 `return` 这个关键字，将内部执行结果传递到函数外部，这个被传递到外部的结果就是返回值。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <title>JavaScript 基础 - 函数返回值</title>\n  </head>\n\n  <body>\n    <script>\n      // 定义求和函数\n\n      function count(a, b) {\n        let s = a + b;\n\n        // s 即为 a + b 的结果\n\n        // 通过 return 将 s 传递到外部\n\n        return s;\n      }\n\n      // 调用函数，如果一个函数有返回值\n\n      // 那么可将这个返回值赋值给外部的任意变量\n\n      let total = count(5, 12);\n    </script>\n  </body>\n</html>"
        },
        {
          "type": "text",
          "text": "总结：\n\n\n\n1. 在函数体中使用return 关键字能将内部的执行结果交给函数外部使用\n\n2. 函数内部只能出现1 次 return，并且 return 下一行代码不会再被执行，所以return 后面的数据不要换行写\n\n3. return会立即结束当前函数\n\n4. 函数可以没有return，这种情况默认返回值为 undefined"
        }
      ]
    },
    {
      "title": "作用域",
      "trail": [
        "JavaScript 基础 - 第4天笔记",
        "函数",
        "作用域"
      ],
      "level": 3,
      "line": 405,
      "blocks": [
        {
          "type": "text",
          "text": "通常来说，一段程序代码中所用到的名字并不总是有效和可用的，而限定这个名字的可用性的代码范围就是这个名字的作用域。\n\n\n\n作用域的使用提高了程序逻辑的局部性，增强了程序的可靠性，减少了名字冲突。"
        }
      ]
    },
    {
      "title": "全局作用域",
      "trail": [
        "JavaScript 基础 - 第4天笔记",
        "函数",
        "作用域",
        "全局作用域"
      ],
      "level": 4,
      "line": 417,
      "blocks": [
        {
          "type": "text",
          "text": "作用于所有代码执行的环境(整个 script 标签内部)或者一个独立的 js 文件\n\n\n\n处于全局作用域内的变量，称为全局变量"
        }
      ]
    },
    {
      "title": "局部作用域",
      "trail": [
        "JavaScript 基础 - 第4天笔记",
        "函数",
        "作用域",
        "局部作用域"
      ],
      "level": 4,
      "line": 429,
      "blocks": [
        {
          "type": "text",
          "text": "作用于函数内的代码环境，就是局部作用域。 因为跟函数有关系，所以也称为函数作用域。\n\n\n\n处于局部作用域内的变量称为局部变量\n\n\n\n>如果函数内部，变量没有声明，直接赋值，也当全局变量看，但是强烈不推荐\n\n>\n\n>但是有一种情况，函数内部的形参可以看做是局部变量。"
        }
      ]
    },
    {
      "title": "匿名函数",
      "trail": [
        "JavaScript 基础 - 第4天笔记",
        "函数",
        "匿名函数"
      ],
      "level": 3,
      "line": 449,
      "blocks": [
        {
          "type": "text",
          "text": "函数可以分为具名函数和匿名函数\n\n\n\n匿名函数：没有名字的函数,无法直接使用。"
        }
      ]
    },
    {
      "title": "函数表达式",
      "trail": [
        "JavaScript 基础 - 第4天笔记",
        "函数",
        "匿名函数",
        "函数表达式"
      ],
      "level": 4,
      "line": 461,
      "blocks": [
        {
          "type": "code",
          "language": "javascript",
          "text": "// 声明\n\nlet fn = function () {\n  console.log('函数表达式');\n};\n\n// 调用\n\nfn();"
        }
      ]
    },
    {
      "title": "立即执行函数",
      "trail": [
        "JavaScript 基础 - 第4天笔记",
        "函数",
        "匿名函数",
        "立即执行函数"
      ],
      "level": 4,
      "line": 483,
      "blocks": [
        {
          "type": "code",
          "language": "javascript",
          "text": "(function () {\n  xxx;\n})();\n\n(function () {\n  xxxx;\n})();"
        },
        {
          "type": "text",
          "text": ">无需调用，立即执行，其实本质已经调用了\n\n>\n\n>多个立即执行函数之间用分号隔开\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n​\t\t在能够访问到的情况下 先局部 局部没有在找全局"
        }
      ]
    }
  ]
};
