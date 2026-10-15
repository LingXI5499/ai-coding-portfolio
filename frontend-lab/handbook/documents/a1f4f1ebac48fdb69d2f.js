window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["a1f4f1ebac48fdb69d2f"] = {
  "id": "a1f4f1ebac48fdb69d2f",
  "title": "JavaScript基础第四天.pdf",
  "treatment": "课件页级文本（配图回溯原件）",
  "sections": [
    {
      "title": "第1页",
      "level": 1,
      "page": 1,
      "blocks": [
        {
          "type": "text",
          "text": "JavaScript 基础第四天\n函数"
        }
      ]
    },
    {
      "title": "第2页",
      "level": 1,
      "page": 2,
      "blocks": [
        {
          "type": "text",
          "text": "学习目标\nLearning Objectives\n1. 掌握函数的基本使用，让代码具备复用能力\n2. 理解封装的意义，能够具备封装函数的能力"
        }
      ]
    },
    {
      "title": "第3页",
      "level": 1,
      "page": 3,
      "blocks": [
        {
          "type": "text",
          "text": "目录\nContents\nu 函数\nu 综合案例"
        }
      ]
    },
    {
      "title": "第4页",
      "level": 1,
      "page": 4,
      "blocks": [
        {
          "type": "text",
          "text": "函数\n• 为什么需要函数\n• 函数使用\n• 函数传参\n• 函数返回值\n• 作用域\n• 匿名函数\n01"
        }
      ]
    },
    {
      "title": "第6页",
      "level": 1,
      "page": 6,
      "blocks": [
        {
          "type": "text",
          "text": "总结思路\n1.  99乘法表，页面需要打印多个怎么办？\n2. 体验函数的魅力\nØ 代码复用"
        }
      ]
    },
    {
      "title": "第7页",
      "level": 1,
      "page": 7,
      "blocks": [
        {
          "type": "text",
          "text": "1.1 为什么需要函数\n目标： 能说出为什么需要函数\nl 函数： \nfunction，是被设计为执行特定任务的代码块\nl 说明：\n函数可以把具有相同或相似逻辑的代码“包裹”起来，通过函数调用执行这些被“包裹”的代码逻辑，这么做的优势是有利于\n精简代码方便复用。\n比如我们前面使用的 alert() 、 prompt() 和 console.log()   都是一些 js 函数，只不过已经封装好了，我们直接使用的\n。"
        }
      ]
    },
    {
      "title": "第8页",
      "level": 1,
      "page": 8,
      "blocks": [
        {
          "type": "text",
          "text": "一段播放《我的滑板鞋》的代码"
        }
      ]
    },
    {
      "title": "第9页",
      "level": 1,
      "page": 9,
      "blocks": [
        {
          "type": "text",
          "text": "总结总结\n1. 为什么需要函数？\nØ 可以实现代码复用，提高开发效率\n2. 函数是什么？\nØ function执行特定任务的代码块"
        }
      ]
    },
    {
      "title": "第10页",
      "level": 1,
      "page": 10,
      "blocks": [
        {
          "type": "text",
          "text": "函数\n• 为什么需要函数\n• 函数使用\n• 函数传参\n• 函数返回值\n• 作用域\n• 匿名函数\n01"
        }
      ]
    },
    {
      "title": "第11页",
      "level": 1,
      "page": 11,
      "blocks": [
        {
          "type": "text",
          "text": "1.2 函数使用\n目标：掌握函数语法，把代码封装起来\nl 函数的声明语法\nl   例"
        }
      ]
    },
    {
      "title": "第12页",
      "level": 1,
      "page": 12,
      "blocks": [
        {
          "type": "text",
          "text": "1.2 函数使用\nl   函数名命名规范\nØ 和变量命名基本一致\nØ 尽量小驼峰式命名法\nØ 前缀应该为动词\nØ 命名建议：常用动词约定"
        }
      ]
    },
    {
      "title": "第13页",
      "level": 1,
      "page": 13,
      "blocks": [
        {
          "type": "text",
          "text": "1.2 函数使用\nl 函数的调用语法\n注意：声明（定义）的函数必须调用才会真正被执行，使用 () 调用函数\nl  例\nl 我们曾经使用的 alert() , parseInt() 这种名字后面跟小括号的本质都是函数的调用"
        }
      ]
    },
    {
      "title": "第14页",
      "level": 1,
      "page": 14,
      "blocks": [
        {
          "type": "text",
          "text": "1.2 函数使用\nl 函数体\n函数体是函数的构成部分，它负责将相同或相似代码“包裹”起来，直到函数调用时函数体内的代码才会被执行。函\n数的功能代码都要写在函数体当中。\n函数体"
        }
      ]
    },
    {
      "title": "第15页",
      "level": 1,
      "page": 15,
      "blocks": [
        {
          "type": "text",
          "text": "总结总结\n1. 函数是用那个关键字声明的？\nØ function\n2. 函数不调用会执行吗？如何调用函数？\nØ 函数不调用自己不执行\nØ 调用方式:  函数名() \n3. 函数的复用代码和循环重复代码有什么不同？\nØ 循环代码写完即执行，不能很方便控制执行位置\nØ 随时调用，随时执行，可重复调用"
        }
      ]
    },
    {
      "title": "第16页",
      "level": 1,
      "page": 16,
      "blocks": [
        {
          "type": "text",
          "text": "练习\n • 函数课堂练习\n需求：\n1. 写一个打招呼的函数  hi~\n2. 把99乘法表封装到函数里面，重复调用3次"
        }
      ]
    },
    {
      "title": "第17页",
      "level": 1,
      "page": 17,
      "blocks": [
        {
          "type": "text",
          "text": "案例\n 函数案例\n需求：\n1. 封装一个函数，计算两个数的和\n2. 封装一个函数，计算1-100之间所有数的和\n灵魂拷问：\n这些函数有什么缺陷？"
        }
      ]
    },
    {
      "title": "第18页",
      "level": 1,
      "page": 18,
      "blocks": [
        {
          "type": "text",
          "text": "函数\n• 为什么需要函数\n• 函数使用\n• 函数传参\n• 函数返回值\n• 作用域\n• 匿名函数\n01"
        }
      ]
    },
    {
      "title": "第19页",
      "level": 1,
      "page": 19,
      "blocks": [
        {
          "type": "text",
          "text": "1.3 函数传参\nl 思考：这样的函数只能求 10 + 20， 这个函数功能局限非常大\nl 解决办法：把要计算的数字传到函数内\nl 结论：\nØ 若函数完成功能需要调用者传入数据，那么就需要用有参数的函数\nØ 这样可以极大提高函数的灵活性"
        }
      ]
    },
    {
      "title": "第20页",
      "level": 1,
      "page": 20,
      "blocks": [
        {
          "type": "text",
          "text": "1.3 函数传参\nl 声明语法\nl   例\nu 单个参数 u 多个参数\nu 参数列表\nØ 传入数据列表\nØ 声明这个函数需要传入几个数据\nØ 多个数据用逗号隔开"
        }
      ]
    },
    {
      "title": "第21页",
      "level": 1,
      "page": 21,
      "blocks": [
        {
          "type": "text",
          "text": "1.3 函数传参\nl 调用语法\nl  例\nl 调用函数时，需要传入几个数据就写几个，用逗号隔开"
        }
      ]
    },
    {
      "title": "第22页",
      "level": 1,
      "page": 22,
      "blocks": [
        {
          "type": "text",
          "text": "1.3 函数传参\nØ 形参：声明函数时写在函数名右边小括号里的叫形参（形式上的参数）\nØ 实参：调用函数时写在函数名右边小括号里的叫实参（实际上的参数）\nØ 形参可以理解为是在这个函数内声明的变量（比如 num1 = 10）实参可以理解为是给这个变量赋值\nØ 开发中尽量保持形参和实参个数一致\nØ 我们曾经使用过的 alert('打印'), parseInt('11'), Number('11') 本质上都是函数调用的传参\n形参\n 形参\n实参\n 实参"
        }
      ]
    },
    {
      "title": "第23页",
      "level": 1,
      "page": 23,
      "blocks": [
        {
          "type": "text",
          "text": "总结总结\n1. 函数传递参数的好处是？\nØ 可以极大的提高了函数的 灵活性\n2. 函数参数可以分为那两类？怎么判断他们是那种参数？\nØ 函数可以分为形参和实参\nØ 函数声明时，小括号里面的是形参，形式上的参数\nØ 函数调用时，小括号里面的是实参，实际的参数\nØ 尽量保持形参和实参的个数一致\n3. 参数中间用什么符号隔开？\nØ 逗号"
        }
      ]
    },
    {
      "title": "第24页",
      "level": 1,
      "page": 24,
      "blocks": [
        {
          "type": "text",
          "text": "练习\n • 函数封装求和\n需求：采取函数封装的形式：输入2个数，计算两者的和，打印到页面中"
        }
      ]
    },
    {
      "title": "第25页",
      "level": 1,
      "page": 25,
      "blocks": [
        {
          "type": "text",
          "text": "1.3 函数传参-参数默认值\n形参： 可以看做变量，但是如果一个变量不给值，默认是什么？ \nØ undefined\n但是如果做用户不输入实参，刚才的案例，则出现  undefined + undefined 结果是什么？\nØ NaN\n我们可以改进下，用户不输入实参，可以给 形参默认值，可以默认为 0, 这样程序更严谨，可以如下操作：\n说明：这个默认值只会在缺少实参参数传递时 才会被执行，所以有参数会优先执行传递过来的实参, 否则默认为 \nundefined"
        }
      ]
    },
    {
      "title": "第26页",
      "level": 1,
      "page": 26,
      "blocks": [
        {
          "type": "text",
          "text": "案例\n 函数封装-求学生总分\n需求：学生的分数是一个数组,计算每个学生的总分  \n分析：\n①： 封装一个求和函数\n②： 传递过去的参数是一个数组\n③： 函数内部遍历数组求和"
        }
      ]
    },
    {
      "title": "第27页",
      "level": 1,
      "page": 27,
      "blocks": [
        {
          "type": "text",
          "text": "函数\n• 为什么需要函数\n• 函数使用\n• 函数传参\n• 函数返回值\n• 作用域\n• 匿名函数\n01"
        }
      ]
    },
    {
      "title": "第28页",
      "level": 1,
      "page": 28,
      "blocks": [
        {
          "type": "text",
          "text": "1.4 函数返回值\nl 提问：什么是函数？\n 函数是被设计为执行特定任务的代码块\nl 缺点：把计算后的结果处理方式写死了，内部处理了\nl 解决：把处理结果返回给调用者\nl 有返回值函数的概念：\nØ 当调用某个函数，这个函数会返回一个结果出来\nØ 这就是有返回值的函数\nl 提问：执行完特定任务之后，然后呢？\n 把任务的结果给我们\n厨子\n点餐人"
        }
      ]
    },
    {
      "title": "第29页",
      "level": 1,
      "page": 29,
      "blocks": [
        {
          "type": "text",
          "text": "1.4 函数返回值\nl 其实我们前面已经接触了很多的函数具备返回值：\nl 只是这些函数是JS底层内置的.我们直接就可以使用\nl 当然有些函数，则没有返回值\nl 所以要根据需求，来设定需不需要返回值"
        }
      ]
    },
    {
      "title": "第30页",
      "level": 1,
      "page": 30,
      "blocks": [
        {
          "type": "text",
          "text": "总结总结\n1. 函数很多情况下需要返回值"
        }
      ]
    },
    {
      "title": "第31页",
      "level": 1,
      "page": 31,
      "blocks": [
        {
          "type": "text",
          "text": "1.4 函数返回值\nl 当函数需要返回数据出去时，用return关键字\nl 语法\nl 怎么使用呢？"
        }
      ]
    },
    {
      "title": "第32页",
      "level": 1,
      "page": 32,
      "blocks": [
        {
          "type": "text",
          "text": "三. 有返回值的函数\nl 细节：\nØ 在函数体中使用 return 关键字能将内部的执行结果交给函数外部使用\nØ return  后面代码不会再被执行，会立即结束当前 函数，所以 return 后面的数据不要换行 写\nØ return函数可以没有 return，这种情况函数默认返回值为 undefined"
        }
      ]
    },
    {
      "title": "第33页",
      "level": 1,
      "page": 33,
      "blocks": [
        {
          "type": "text",
          "text": "总结总结\n1. 为什么要让函数有返回值\nØ 函数执行后得到结果，结果是调用者想要拿到的（一句话，函数内部不\n需要输出结果，而是返回结果）\nØ 对执行结果的扩展性更高,可以让其他的程序使用这个结果\n2. 函数有返回值用那个关键字？ 有什么注意事项呢？\nØ 语法：return 数据\nØ return后面不接数据或者函数内不写return，函数的返回值是\nundefined\nØ return能立即结束当前函数, 所以 return 后面的数据不要换行写"
        }
      ]
    },
    {
      "title": "第34页",
      "level": 1,
      "page": 34,
      "blocks": [
        {
          "type": "text",
          "text": "练习\n • 函数返回值练习\n1. 求任意2个数中的最大值, 并返回\n1. 求任意数组中的最大值并返回这个最大值\n2. 求任意数组中的最小值并返回这个最小值\n断点调试：\n进入函数内部看执行过程  F11\n                                     思考: 如何返回多个数据 ?"
        }
      ]
    },
    {
      "title": "第35页",
      "level": 1,
      "page": 35,
      "blocks": [
        {
          "type": "text",
          "text": "1.4 函数细节补充\nl 两个相同的函数后面的会覆盖前面的函数\nl 在Javascript中 实参的个数和形参的个数可以不一致\nØ 如果形参过多 会自动填上undefined (了解即可)\nØ 如果实参过多 那么多余的实参会被忽略 (函数内部有一个arguments,里面装着所有的实参)\nl 函数一旦碰到return就不会在往下执行了  函数的结束用return\n                                               思考: break的结束和return结束有什么区\n别 ?"
        }
      ]
    },
    {
      "title": "第36页",
      "level": 1,
      "page": 36,
      "blocks": [
        {
          "type": "text",
          "text": "函数\n• 为什么需要函数\n• 函数使用\n• 函数传参\n• 函数返回值\n• 作用域\n• 匿名函数\n01"
        }
      ]
    },
    {
      "title": "第37页",
      "level": 1,
      "page": 37,
      "blocks": [
        {
          "type": "text",
          "text": "思考\n思考"
        }
      ]
    },
    {
      "title": "第38页",
      "level": 1,
      "page": 38,
      "blocks": [
        {
          "type": "text",
          "text": "1.5 作用域\n通常来说，一段程序代码中所用到的名字并不总是有效和可用的，而限定这个名字的可用性的代码范围就是这个名\n字的作用域。\n作用域的使用提高了程序逻辑的局部性，增强了程序的可靠性，减少了名字冲突。\n全局作用域 局部作用域\n全局有效 局部有效\n作用于所有代码执行的环\n境(整个 script 标签内部)\n或者一个独立的 js 文件\n作用于函数内的代码环境，就是\n局部作用域。 因为跟函数有关系，\n所以也称为函数作用域。"
        }
      ]
    },
    {
      "title": "第39页",
      "level": 1,
      "page": 39,
      "blocks": [
        {
          "type": "text",
          "text": "1.5 作用域\n在JavaScript中，根据作用域的不同，变量可以分为：\n全局变量 局部变量\n函数外部let 的变量 函数内部let的变量\n全局变量在任何区域都\n可以访问和修改\n局部变量只能在当前函\n数内部访问和修改"
        }
      ]
    },
    {
      "title": "第40页",
      "level": 1,
      "page": 40,
      "blocks": [
        {
          "type": "text",
          "text": "1.5 作用域\n变量有一个坑， 特殊情况：\n如果函数内部，变量没有声明，直接赋值，也当全局变量看，但是强烈不推荐\n但是有一种情况，函数内部的形参可以看做是局部变量。"
        }
      ]
    },
    {
      "title": "第41页",
      "level": 1,
      "page": 41,
      "blocks": [
        {
          "type": "text",
          "text": "总结总结\n1. JS 中作用域分为哪2种？\nØ 全局作用域。函数外部或者整个script 有效\nØ局部作用域。也称为函数作用域，函数内部有效\n2. 根据作用域不同，变量分为哪2种？\nØ 全局变量\nØ局部变量\n3. 有一种特殊情况是全局变量是那种？我们提倡吗？\nØ  局部变量或者块级变量 没有let 声明直接赋值的当全局变量看\nØ  我们强烈不提倡\nØ 还有一种特殊情况，函数内部的形参可以当做局部变量看"
        }
      ]
    },
    {
      "title": "第42页",
      "level": 1,
      "page": 42,
      "blocks": [
        {
          "type": "text",
          "text": "思考\n1. 在不同作用域下，可能存在变量命名冲突的情况，\n到底改执行谁呢？"
        }
      ]
    },
    {
      "title": "第43页",
      "level": 1,
      "page": 43,
      "blocks": [
        {
          "type": "text",
          "text": "l 只要是代码，就至少有一个作用域\nl  写在函数内部的局部作用域\nl  如果函数中还有函数，那么在这个作用域中就又可以诞生一个作用域\nl 访问原则：在能够访问到的情况下 先局部， 局部没有在找全局\n变量的访问原则"
        }
      ]
    },
    {
      "title": "第44页",
      "level": 1,
      "page": 44,
      "blocks": [
        {
          "type": "text",
          "text": "1.5 作用域\n3. 变量访问原则\n案例 1： 结果是几？\nfunction f1() {\n let num = 123\n function f2() {\n console.log( num )\n }\n f2()\n}\nlet num = 456\nf1()"
        }
      ]
    },
    {
      "title": "第45页",
      "level": 1,
      "page": 45,
      "blocks": [
        {
          "type": "text",
          "text": "1.5 作用域\n3. 变量访问原则\n案例 1： 结果是几？\nfunction f1() {\n            let num = 123\n            function f2() {\n                let num = 0\n                console.log(num)\n            }\n            f2()\n }\nlet num = 456\nf1()\n作用域链：采取就近原则的方式来查找变量最终的值"
        }
      ]
    },
    {
      "title": "第46页",
      "level": 1,
      "page": 46,
      "blocks": [
        {
          "type": "text",
          "text": "• 3. 变量访问原则\n案例 3： 结果是几？\nlet a = 1\nfunction fn1() {\n    let a = 2\n    let b = '22'\n    fn2()\n    function fn2() {\n        let a = 3\n        fn3()\n        function fn3() {\n            let a = 4\n            console.log(a) //a的值 ?\n            console.log(b) //b的值 ?\n        }\n    }\n}\nfn1()"
        }
      ]
    },
    {
      "title": "第47页",
      "level": 1,
      "page": 47,
      "blocks": [
        {
          "type": "text",
          "text": "总结总结\n1. 变量访问原则是什么？\nØ采取就近原则的方式来查找变量最终的值"
        }
      ]
    },
    {
      "title": "第48页",
      "level": 1,
      "page": 48,
      "blocks": [
        {
          "type": "text",
          "text": "函数\n• 为什么需要函数\n• 函数使用\n• 函数传参\n• 函数返回值\n• 作用域\n• 匿名函数\n01"
        }
      ]
    },
    {
      "title": "第49页",
      "level": 1,
      "page": 49,
      "blocks": [
        {
          "type": "text",
          "text": "1.6 匿名函数\n目标：了解匿名函数的使用方式\nl 函数可以分为：\n具名函数 匿名函数\n声明：function fn() \n{}\n调用：fn()\nfunction()  {}"
        }
      ]
    },
    {
      "title": "第50页",
      "level": 1,
      "page": 50,
      "blocks": [
        {
          "type": "text",
          "text": "1.6 匿名函数\n匿名函数\n没有名字的函数, 无法直接使用。\n使用方式：\nØ 函数表达式\nØ 立即执行函数"
        }
      ]
    },
    {
      "title": "第51页",
      "level": 1,
      "page": 51,
      "blocks": [
        {
          "type": "text",
          "text": "1.6 匿名函数\n1. 函数表达式\n将匿名函数赋值给一个变量，并且通过变量名称进行调用  我们将这个称为函数表达式\n语法：\n调用：\n其中函数的形参和实参使用跟具名函数一致。"
        }
      ]
    },
    {
      "title": "第52页",
      "level": 1,
      "page": 52,
      "blocks": [
        {
          "type": "text",
          "text": "1.6 匿名函数\n使用场景\nl 后期 web API 会使用：\n目前没有， 先认识"
        }
      ]
    },
    {
      "title": "第53页",
      "level": 1,
      "page": 53,
      "blocks": [
        {
          "type": "text",
          "text": "1.6 匿名函数\n2. 立即执行函数\n场景介绍: 避免全局变量之间的污染\n语法：\n注意： 多个立即执行函数要用 ; 隔开，要不然会报错"
        }
      ]
    },
    {
      "title": "第54页",
      "level": 1,
      "page": 54,
      "blocks": [
        {
          "type": "text",
          "text": "总结总结\n1. 立即执行函数有什么作用？\nØ 防止变量污染\n2. 立即执行函数需要调用吗？ 有什么注意事项呢？\nØ 无需调用，立即执行，其实本质已经调用了\nØ 多个立即执行函数之间用分号隔开"
        }
      ]
    },
    {
      "title": "第55页",
      "level": 1,
      "page": 55,
      "blocks": [
        {
          "type": "text",
          "text": "目录\nContents\nu 函数\nu 综合案例"
        }
      ]
    },
    {
      "title": "第56页",
      "level": 1,
      "page": 56,
      "blocks": [
        {
          "type": "text",
          "text": "案例\n 转换时间案例\n需求： 用户输入秒数，可以自动转换为时分秒"
        }
      ]
    },
    {
      "title": "第57页",
      "level": 1,
      "page": 57,
      "blocks": [
        {
          "type": "text",
          "text": "案例\n 转换时间案例\n需求： 用户输入秒数，可以自动转换为时分秒\n分析：\n①： 用户输入总秒数 （注意默认值）\n②：计算时分秒（封装函数）  里面包含数字补0\n③：打印输出\n计算公式：计算时分秒\n小时：  h =  parseInt(总秒数 / 60 / 60 % 24)\n分钟：  m = parseInt(总秒数 / 60 % 60 )\n秒数:     s  = parseInt(总秒数 % 60)"
        }
      ]
    },
    {
      "title": "第58页",
      "level": 1,
      "page": 58,
      "blocks": [
        {
          "type": "text",
          "text": "逻辑中断\n开发中，还会见到以下的写法：\n其实类似参数的默认值写法"
        }
      ]
    },
    {
      "title": "第59页",
      "level": 1,
      "page": 59,
      "blocks": [
        {
          "type": "text",
          "text": "1. 逻辑运算符里的短路\nl 短路：只存在于 && 和 || 中，当满足一定条件会让右边代码不执行\n符号 短路条件\n&& 左边为false就短路\n|| 左边为true就短路\nl 原因：通过左边能得到整个式子的结果，因此没必要再判断右边\nl 运算结果：无论 && 还是 || ，运算结果都是最后被执行的表达式值，一般用在变量赋值"
        }
      ]
    },
    {
      "title": "第60页",
      "level": 1,
      "page": 60,
      "blocks": [
        {
          "type": "text",
          "text": "思考"
        }
      ]
    },
    {
      "title": "第61页",
      "level": 1,
      "page": 61,
      "blocks": [
        {
          "type": "text",
          "text": "2. 转换为Boolean型\n显示转换：\n1.Boolean(内容)\n记忆： ‘’、0、undefined、null、false、NaN 转换为布尔值后都是false, 其余则为 true"
        }
      ]
    },
    {
      "title": "第62页",
      "level": 1,
      "page": 62,
      "blocks": [
        {
          "type": "text",
          "text": "2. 转换为Boolean型\n隐式转换：\n1. 有字符串的加法 “” + 1 ，结果是 “1” \n2. 减法 - （像大多数数学运算一样）只能用于数字，它会使空字符串 \"\" 转换为 0 \n3. null 经过数字转换之后会变为 0 \n4. undefined 经过数字转换之后会变为 NaN"
        }
      ]
    },
    {
      "title": "第63页",
      "level": 1,
      "page": 63,
      "blocks": [
        {
          "type": "text",
          "text": "l 晚自习回来每个同学先必须xmind梳理今日知识点 (md 笔记也行)\nl 需要把今天的所有案例，按照书写顺序写一遍，特别是综合案例。\nl 开始做今日测试题.     移动端扫码， PC端： https://ks.wjx.top/vj/wV1PSkl.aspx\nl 独立书写今日作业 ，见附件：06-作业\nl 每日一句鼓励自己的话：\n 今日复习路线"
        }
      ]
    }
  ]
};
