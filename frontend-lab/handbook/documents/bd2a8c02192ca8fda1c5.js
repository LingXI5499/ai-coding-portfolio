window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["bd2a8c02192ca8fda1c5"] = {
  "id": "bd2a8c02192ca8fda1c5",
  "title": "JavaScript进阶第一天.md",
  "treatment": "章节知识与练习",
  "sections": [
    {
      "title": "JavaScript 进阶 - 第1天",
      "trail": [
        "JavaScript 进阶 - 第1天"
      ],
      "level": 1,
      "line": 1,
      "blocks": [
        {
          "type": "text",
          "text": "> 学习作用域、变量提升、闭包等语言特征，加深对 JavaScript 的理解，掌握变量赋值、函数声明的简洁语法，降低代码的冗余度。\n\n- 理解作用域对程序执行的影响\n- 能够分析程序执行的作用域范围\n- 理解闭包本质，利用闭包创建隔离作用域\n- 了解什么变量提升及函数提升\n- 掌握箭头函数、解析剩余参数等简洁语法"
        }
      ]
    },
    {
      "title": "作用域",
      "trail": [
        "JavaScript 进阶 - 第1天",
        "作用域"
      ],
      "level": 2,
      "line": 11,
      "blocks": [
        {
          "type": "text",
          "text": "> 了解作用域对程序执行的影响及作用域链的查找机制，使用闭包函数创建隔离作用域避免全局变量污染。\n\n作用域（scope）规定了变量能够被访问的“范围”，离开了这个“范围”变量便不能被访问，作用域分为全局作用域和局部作用域。"
        }
      ]
    },
    {
      "title": "局部作用域",
      "trail": [
        "JavaScript 进阶 - 第1天",
        "作用域",
        "局部作用域"
      ],
      "level": 3,
      "line": 17,
      "blocks": [
        {
          "type": "text",
          "text": "局部作用域分为函数作用域和块作用域。"
        }
      ]
    },
    {
      "title": "函数作用域",
      "trail": [
        "JavaScript 进阶 - 第1天",
        "作用域",
        "局部作用域",
        "函数作用域"
      ],
      "level": 4,
      "line": 21,
      "blocks": [
        {
          "type": "text",
          "text": "在函数内部声明的变量只能在函数内部被访问，外部无法直接访问。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<script>\n  // 声明 counter 函数\n  function counter(x, y) {\n    // 函数内部声明的变量\n    const s = x + y;\n    console.log(s); // 18\n  }\n  // 设用 counter 函数\n  counter(10, 8);\n  // 访问变量 s\n  console.log(s); // 报错\n</script>"
        },
        {
          "type": "text",
          "text": "总结：\n\n1. 函数内部声明的变量，在函数外部无法被访问\n2. 函数的参数也是函数内部的局部变量\n3. 不同函数内部声明的变量无法互相访问\n4. 函数执行完毕后，函数内部的变量实际被清空了"
        }
      ]
    },
    {
      "title": "块作用域",
      "trail": [
        "JavaScript 进阶 - 第1天",
        "作用域",
        "局部作用域",
        "块作用域"
      ],
      "level": 4,
      "line": 47,
      "blocks": [
        {
          "type": "text",
          "text": "在 JavaScript 中使用 `{}` 包裹的代码称为代码块，代码块内部声明的变量外部将【有可能】无法被访问。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<script>\n  {\n    // age 只能在该代码块中被访问\n    let age = 18;\n    console.log(age); // 正常\n  }\n\n  // 超出了 age 的作用域\n  console.log(age); // 报错\n\n  let flag = true;\n  if (flag) {\n    // str 只能在该代码块中被访问\n    let str = 'hello world!';\n    console.log(str); // 正常\n  }\n\n  // 超出了 age 的作用域\n  console.log(str); // 报错\n\n  for (let t = 1; t <= 6; t++) {\n    // t 只能在该代码块中被访问\n    console.log(t); // 正常\n  }\n\n  // 超出了 t 的作用域\n  console.log(t); // 报错\n</script>"
        },
        {
          "type": "text",
          "text": "JavaScript 中除了变量外还有常量，常量与变量本质的区别是【常量必须要有值且不允许被重新赋值】，常量值为对象时其属性和方法允许重新赋值。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<script>\n  // 必须要有值\n  const version = '1.0.0';\n\n  // 不能重新赋值\n  // version = '1.0.1';\n\n  // 常量值为对象类型\n  const user = {\n    name: '小明',\n    age: 18,\n  };\n\n  // 不能重新赋值\n  user = {};\n\n  // 属性和方法允许被修改\n  user.name = '小小明';\n  user.gender = '男';\n</script>"
        },
        {
          "type": "text",
          "text": "总结：\n\n1. `let` 声明的变量会产生块作用域，`var` 不会产生块作用域\n2. `const` 声明的常量也会产生块作用域\n3. 不同代码块之间的变量无法互相访问\n4. 推荐使用 `let` 或 `const`\n\n注：开发中 `let` 和 `const` 经常不加区分的使用，如果担心某个值会不小被修改时，则只能使用 `const` 声明成常量。"
        }
      ]
    },
    {
      "title": "全局作用域",
      "trail": [
        "JavaScript 进阶 - 第1天",
        "作用域",
        "全局作用域"
      ],
      "level": 3,
      "line": 116,
      "blocks": [
        {
          "type": "text",
          "text": "`<script>` 标签和 `.js` 文件的【最外层】就是所谓的全局作用域，在此声明的变量在函数内部也可以被访问。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<script>\n  // 此处是全局\n\n  function sayHi() {\n    // 此处为局部\n  }\n\n  // 此处为全局\n</script>"
        },
        {
          "type": "text",
          "text": "全局作用域中声明的变量，任何其它作用域都可以被访问，如下代码所示："
        },
        {
          "type": "code",
          "language": "html",
          "text": "<script>\n  // 全局变量 name\n  const name = '小明';\n\n  // 函数作用域中访问全局\n  function sayHi() {\n    // 此处为局部\n    console.log('你好' + name);\n  }\n\n  // 全局变量 flag 和 x\n  const flag = true;\n  let x = 10;\n\n  // 块作用域中访问全局\n  if (flag) {\n    let y = 5;\n    console.log(x + y); // x 是全局的\n  }\n</script>"
        },
        {
          "type": "text",
          "text": "总结：\n\n1. 为 `window` 对象动态添加的属性默认也是全局的，不推荐！\n2. 函数中未使用任何关键字声明的变量为全局变量，不推荐！！！\n3. 尽可能少的声明全局变量，防止全局变量被污染\n\nJavaScript 中的作用域是程序被执行时的底层机制，了解这一机制有助于规范代码书写习惯，避免因作用域导致的语法错误。"
        }
      ]
    },
    {
      "title": "作用域链",
      "trail": [
        "JavaScript 进阶 - 第1天",
        "作用域",
        "作用域链"
      ],
      "level": 3,
      "line": 165,
      "blocks": [
        {
          "type": "text",
          "text": "在解释什么是作用域链前先来看一段代码："
        },
        {
          "type": "code",
          "language": "html",
          "text": "<script>\n  // 全局作用域\n  let a = 1;\n  let b = 2;\n  // 局部作用域\n  function f() {\n    let c;\n    // 局部作用域\n    function g() {\n      let d = 'yo';\n    }\n  }\n</script>"
        },
        {
          "type": "text",
          "text": "函数内部允许创建新的函数，`f` 函数内部创建的新函数 `g`，会产生新的函数作用域，由此可知作用域产生了嵌套的关系。\n\n如下图所示，父子关系的作用域关联在一起形成了链状的结构，作用域链的名字也由此而来。\n\n作用域链本质上是底层的变量查找机制，在函数被执行时，会优先查找当前函数作用域中查找变量，如果当前作用域查找不到则会依次逐级查找父级作用域直到全局作用域，如下代码所示："
        },
        {
          "type": "code",
          "language": "html",
          "text": "<script>\n  // 全局作用域\n  let a = 1;\n  let b = 2;\n\n  // 局部作用域\n  function f() {\n    let c;\n    // let a = 10;\n    console.log(a); // 1 或 10\n    console.log(d); // 报错\n\n    // 局部作用域\n    function g() {\n      let d = 'yo';\n      // let b = 20;\n      console.log(b); // 2 或 20\n    }\n\n    // 调用 g 函数\n    g();\n  }\n\n  console.log(c); // 报错\n  console.log(d); // 报错\n\n  f();\n</script>"
        },
        {
          "type": "text",
          "text": "总结：\n\n1. 嵌套关系的作用域串联起来形成了作用域链\n2. 相同作用域链中按着从小到大的规则查找变量\n3. 子作用域能够访问父作用域，父级作用域无法访问子级作用域"
        }
      ]
    },
    {
      "title": "闭包",
      "trail": [
        "JavaScript 进阶 - 第1天",
        "作用域",
        "闭包"
      ],
      "level": 3,
      "line": 228,
      "blocks": [
        {
          "type": "text",
          "text": "闭包是一种比较特殊和函数，使用闭包能够访问函数作用域中的变量。从代码形式上看闭包是一个做为返回值的函数，如下代码所示："
        },
        {
          "type": "code",
          "language": "html",
          "text": "<body>\n  <script>\n    // 1. 闭包 : 内层函数 + 外层函数变量\n    // function outer() {\n    //   const a = 1\n    //   function f() {\n    //     console.log(a)\n    //   }\n    //   f()\n    // }\n    // outer()\n\n    // 2. 闭包的应用： 实现数据的私有。统计函数的调用次数\n    // let count = 1\n    // function fn() {\n    //   count++\n    //   console.log(`函数被调用${count}次`)\n    // }\n\n    // 3. 闭包的写法  统计函数的调用次数\n    function outer() {\n      let count = 1;\n      function fn() {\n        count++;\n        console.log(`函数被调用${count}次`);\n      }\n      return fn;\n    }\n    const re = outer();\n    // const re = function fn() {\n    //   count++\n    //   console.log(`函数被调用${count}次`)\n    // }\n    re();\n    re();\n    // const fn = function() { }  函数表达式\n    // 4. 闭包存在的问题： 可能会造成内存泄漏\n  </script>\n</body>"
        },
        {
          "type": "text",
          "text": "总结：\n\n1.怎么理解闭包？\n\n- 闭包 = 内层函数 + 外层函数的变量\n\n2.闭包的作用？\n\n- 封闭数据，实现数据私有，外部也可以访问函数内部的变量\n- 闭包很有用，因为它允许将函数与其所操作的某些数据（环境）关联起来\n\n3.闭包可能引起的问题？\n\n- 内存泄漏"
        }
      ]
    },
    {
      "title": "变量提升",
      "trail": [
        "JavaScript 进阶 - 第1天",
        "作用域",
        "变量提升"
      ],
      "level": 3,
      "line": 289,
      "blocks": [
        {
          "type": "text",
          "text": "变量提升是 JavaScript 中比较“奇怪”的现象，它允许在变量声明之前即被访问，"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<script>\n  // 访问变量 str\n  console.log(str + 'world!');\n\n  // 声明变量 str\n  var str = 'hello ';\n</script>"
        },
        {
          "type": "text",
          "text": "总结：\n\n1. 变量在未声明即被访问时会报语法错误\n2. 变量在声明之前即被访问，变量的值为 `undefined`\n3. `let` 声明的变量不存在变量提升，推荐使用 `let`\n4. 变量提升出现在相同作用域当中\n5. 实际开发中推荐先声明再访问变量\n\n注：关于变量提升的原理分析会涉及较为复杂的词法分析等知识，而开发中使用 `let` 可以轻松规避变量的提升，因此在此不做过多的探讨，有兴趣可[查阅资料](https://segmentfault.com/a/1190000013915935)。"
        }
      ]
    },
    {
      "title": "函数",
      "trail": [
        "JavaScript 进阶 - 第1天",
        "函数"
      ],
      "level": 2,
      "line": 313,
      "blocks": [
        {
          "type": "text",
          "text": "> 知道函数参数默认值、动态参数、剩余参数的使用细节，提升函数应用的灵活度，知道箭头函数的语法及与普通函数的差异。"
        }
      ]
    },
    {
      "title": "函数提升",
      "trail": [
        "JavaScript 进阶 - 第1天",
        "函数",
        "函数提升"
      ],
      "level": 3,
      "line": 317,
      "blocks": [
        {
          "type": "text",
          "text": "函数提升与变量提升比较类似，是指函数在声明之前即可被调用。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<script>\n  // 调用函数\n  foo();\n  // 声明函数\n  function foo() {\n    console.log('声明之前即被调用...');\n  }\n\n  // 不存在提升现象\n  bar(); // 错误\n  var bar = function () {\n    console.log('函数表达式不存在提升现象...');\n  };\n</script>"
        },
        {
          "type": "text",
          "text": "总结：\n\n1. 函数提升能够使函数的声明调用更灵活\n2. 函数表达式不存在提升的现象\n3. 函数提升出现在相同作用域当中"
        }
      ]
    },
    {
      "title": "函数参数",
      "trail": [
        "JavaScript 进阶 - 第1天",
        "函数",
        "函数参数"
      ],
      "level": 3,
      "line": 344,
      "blocks": [
        {
          "type": "text",
          "text": "函数参数的使用细节，能够提升函数应用的灵活度。"
        }
      ]
    },
    {
      "title": "默认值",
      "trail": [
        "JavaScript 进阶 - 第1天",
        "函数",
        "函数参数",
        "默认值"
      ],
      "level": 4,
      "line": 348,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<script>\n  // 设置参数默认值\n  function sayHi(name = '小明', age = 18) {\n    document.write(`<p>大家好，我叫${name}，我今年${age}岁了。</p>`);\n  }\n  // 调用函数\n  sayHi();\n  sayHi('小红');\n  sayHi('小刚', 21);\n</script>"
        },
        {
          "type": "text",
          "text": "总结：\n\n1. 声明函数时为形参赋值即为参数的默认值\n2. 如果参数未自定义默认值时，参数的默认值为 `undefined`\n3. 调用函数时没有传入对应实参时，参数的默认值被当做实参传入"
        }
      ]
    },
    {
      "title": "动态参数",
      "trail": [
        "JavaScript 进阶 - 第1天",
        "函数",
        "函数参数",
        "动态参数"
      ],
      "level": 4,
      "line": 369,
      "blocks": [
        {
          "type": "text",
          "text": "`arguments` 是函数内部内置的伪数组变量，它包含了调用函数时传入的所有实参。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<script>\n  // 求生函数，计算所有参数的和\n  function sum() {\n    // console.log(arguments)\n    let s = 0;\n    for (let i = 0; i < arguments.length; i++) {\n      s += arguments[i];\n    }\n    console.log(s);\n  }\n  // 调用求和函数\n  sum(5, 10); // 两个参数\n  sum(1, 2, 4); // 两个参数\n</script>"
        },
        {
          "type": "text",
          "text": "总结：\n\n1. `arguments` 是一个伪数组\n2. `arguments` 的作用是动态获取函数的实参"
        }
      ]
    },
    {
      "title": "剩余参数",
      "trail": [
        "JavaScript 进阶 - 第1天",
        "函数",
        "函数参数",
        "剩余参数"
      ],
      "level": 4,
      "line": 395,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<script>\n  function config(baseURL, ...other) {\n    console.log(baseURL); // 得到 'http://baidu.com'\n    console.log(other); // other  得到 ['get', 'json']\n  }\n  // 调用函数\n  config('http://baidu.com', 'get', 'json');\n</script>"
        },
        {
          "type": "text",
          "text": "总结：\n\n1. `...` 是语法符号，置于最末函数形参之前，用于获取多余的实参\n2. 借助 `...` 获取的剩余实参，是个真数组"
        }
      ]
    },
    {
      "title": "箭头函数",
      "trail": [
        "JavaScript 进阶 - 第1天",
        "函数",
        "箭头函数"
      ],
      "level": 3,
      "line": 413,
      "blocks": [
        {
          "type": "text",
          "text": "箭头函数是一种声明函数的简洁语法，它与普通函数并无本质的区别，差异性更多体现在语法格式上。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<body>\n  <script>\n    // const fn = function () {\n    //   console.log(123)\n    // }\n    // 1. 箭头函数 基本语法\n    // const fn = () => {\n    //   console.log(123)\n    // }\n    // fn()\n    // const fn = (x) => {\n    //   console.log(x)\n    // }\n    // fn(1)\n    // 2. 只有一个形参的时候，可以省略小括号\n    // const fn = x => {\n    //   console.log(x)\n    // }\n    // fn(1)\n    // // 3. 只有一行代码的时候，我们可以省略大括号\n    // const fn = x => console.log(x)\n    // fn(1)\n    // 4. 只有一行代码的时候，可以省略return\n    // const fn = x => x + x\n    // console.log(fn(1))\n    // 5. 箭头函数可以直接返回一个对象\n    // const fn = (uname) => ({ uname: uname })\n    // console.log(fn('刘德华'))\n  </script>\n</body>"
        },
        {
          "type": "text",
          "text": "总结：\n\n1. 箭头函数属于表达式函数，因此不存在函数提升\n2. 箭头函数只有一个参数时可以省略圆括号 `()`\n3. 箭头函数函数体只有一行代码时可以省略花括号 `{}`，并自动做为返回值被返回"
        }
      ]
    },
    {
      "title": "箭头函数参数",
      "trail": [
        "JavaScript 进阶 - 第1天",
        "函数",
        "箭头函数",
        "箭头函数参数"
      ],
      "level": 4,
      "line": 457,
      "blocks": [
        {
          "type": "text",
          "text": "箭头函数中没有 `arguments`，只能使用 `...` 动态获取实参"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<body>\n  <script>\n    // 1. 利用箭头函数来求和\n    const getSum = (...arr) => {\n      let sum = 0;\n      for (let i = 0; i < arr.length; i++) {\n        sum += arr[i];\n      }\n      return sum;\n    };\n    const result = getSum(2, 3, 4);\n    console.log(result); // 9\n  </script>\n</body>"
        }
      ]
    },
    {
      "title": "箭头函数 this",
      "trail": [
        "JavaScript 进阶 - 第1天",
        "函数",
        "箭头函数",
        "箭头函数 this"
      ],
      "level": 4,
      "line": 477,
      "blocks": [
        {
          "type": "text",
          "text": "箭头函数不会创建自己的this,它只会从自己的作用域链的上一层沿用this。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<script>\n  // 以前this的指向：  谁调用的这个函数，this 就指向谁\n  // console.log(this)  // window\n  // // 普通函数\n  // function fn() {\n  //   console.log(this)  // window\n  // }\n  // window.fn()\n  // // 对象方法里面的this\n  // const obj = {\n  //   name: 'andy',\n  //   sayHi: function () {\n  //     console.log(this)  // obj\n  //   }\n  // }\n  // obj.sayHi()\n\n  // 2. 箭头函数的this  是上一层作用域的this 指向\n  // const fn = () => {\n  //   console.log(this)  // window\n  // }\n  // fn()\n  // 对象方法箭头函数 this\n  // const obj = {\n  //   uname: 'pink老师',\n  //   sayHi: () => {\n  //     console.log(this)  // this 指向谁？ window\n  //   }\n  // }\n  // obj.sayHi()\n\n  const obj = {\n    uname: 'pink老师',\n    sayHi: function () {\n      console.log(this); // obj\n      let i = 10;\n      const count = () => {\n        console.log(this); // obj\n      };\n      count();\n    },\n  };\n  obj.sayHi();\n</script>"
        }
      ]
    },
    {
      "title": "解构赋值",
      "trail": [
        "JavaScript 进阶 - 第1天",
        "解构赋值"
      ],
      "level": 2,
      "line": 529,
      "blocks": [
        {
          "type": "text",
          "text": "> 知道解构的语法及分类，使用解构简洁语法快速为变量赋值。\n\n解构赋值是一种快速为变量赋值的简洁语法，本质上仍然是为变量赋值，分为数组解构、对象解构两大类型。"
        }
      ]
    },
    {
      "title": "数组解构",
      "trail": [
        "JavaScript 进阶 - 第1天",
        "解构赋值",
        "数组解构"
      ],
      "level": 3,
      "line": 535,
      "blocks": [
        {
          "type": "text",
          "text": "数组解构是将数组的单元值快速批量赋值给一系列变量的简洁语法，如下代码所示："
        },
        {
          "type": "code",
          "language": "html",
          "text": "<script>\n  // 普通的数组\n  let arr = [1, 2, 3];\n  // 批量声明变量 a b c\n  // 同时将数组单元值 1 2 3 依次赋值给变量 a b c\n  let [a, b, c] = arr;\n  console.log(a); // 1\n  console.log(b); // 2\n  console.log(c); // 3\n</script>"
        },
        {
          "type": "text",
          "text": "总结：\n\n1. 赋值运算符 `=` 左侧的 `[]` 用于批量声明变量，右侧数组的单元值将被赋值给左侧的变量\n2. 变量的顺序对应数组单元值的位置依次进行赋值操作\n3. 变量的数量大于单元值数量时，多余的变量将被赋值为  `undefined`\n4. 变量的数量小于单元值数量时，可以通过 `...` 获取剩余单元值，但只能置于最末位\n5. 允许初始化变量的默认值，且只有单元值为 `undefined` 时默认值才会生效\n\n注：支持多维解构赋值，比较复杂后续有应用需求时再进一步分析"
        }
      ]
    },
    {
      "title": "对象解构",
      "trail": [
        "JavaScript 进阶 - 第1天",
        "解构赋值",
        "对象解构"
      ],
      "level": 3,
      "line": 562,
      "blocks": [
        {
          "type": "text",
          "text": "对象解构是将对象属性和方法快速批量赋值给一系列变量的简洁语法，如下代码所示："
        },
        {
          "type": "code",
          "language": "html",
          "text": "<script>\n  // 普通对象\n  const user = {\n    name: '小明',\n    age: 18,\n  };\n  // 批量声明变量 name age\n  // 同时将数组单元值 小明  18 依次赋值给变量 name  age\n  const { name, age } = user;\n\n  console.log(name); // 小明\n  console.log(age); // 18\n</script>"
        },
        {
          "type": "text",
          "text": "总结：\n\n1. 赋值运算符 `=` 左侧的 `{}` 用于批量声明变量，右侧对象的属性值将被赋值给左侧的变量\n2. 对象属性的值将被赋值给与属性名相同的变量\n3. 对象中找不到与变量名一致的属性时变量值为 `undefined`\n4. 允许初始化变量的默认值，属性不存在或单元值为 `undefined` 时默认值才会生效\n\n注：支持多维解构赋值"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<body>\n  <script>\n    // 1. 这是后台传递过来的数据\n    const msg = {\n      code: 200,\n      msg: '获取新闻列表成功',\n      data: [\n        {\n          id: 1,\n          title: '5G商用自己，三大运用商收入下降',\n          count: 58,\n        },\n        {\n          id: 2,\n          title: '国际媒体头条速览',\n          count: 56,\n        },\n        {\n          id: 3,\n          title: '乌克兰和俄罗斯持续冲突',\n          count: 1669,\n        },\n      ],\n    };\n\n    // 需求1： 请将以上msg对象  采用对象解构的方式 只选出  data 方面后面使用渲染页面\n    // const { data } = msg\n    // console.log(data)\n    // 需求2： 上面msg是后台传递过来的数据，我们需要把data选出当做参数传递给 函数\n    // const { data } = msg\n    // msg 虽然很多属性，但是我们利用解构只要 data值\n    function render({ data }) {\n      // const { data } = arr\n      // 我们只要 data 数据\n      // 内部处理\n      console.log(data);\n    }\n    render(msg);\n\n    // 需求3， 为了防止msg里面的data名字混淆，要求渲染函数里面的数据名改为 myData\n    function render({ data: myData }) {\n      // 要求将 获取过来的 data数据 更名为 myData\n      // 内部处理\n      console.log(myData);\n    }\n    render(msg);\n  </script>\n</body>"
        }
      ]
    },
    {
      "title": "forEach遍历数组",
      "trail": [
        "JavaScript 进阶 - 第1天",
        "综合案例",
        "forEach遍历数组"
      ],
      "level": 3,
      "line": 647,
      "blocks": [
        {
          "type": "text",
          "text": "forEach() 方法用于调用数组的每个元素，并将元素传递给回调函数\n\n>注意：  \n>\n>1.forEach 主要是遍历数组\n>\n>2.参数当前数组元素是必须要写的， 索引号可选。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<body>\n  <script>\n    // forEach 就是遍历  加强版的for循环  适合于遍历数组对象\n    const arr = ['red', 'green', 'pink'];\n    const result = arr.forEach(function (item, index) {\n      console.log(item); // 数组元素 red  green pink\n      console.log(index); // 索引号\n    });\n    // console.log(result)\n  </script>\n</body>"
        }
      ]
    },
    {
      "title": "filter筛选数组",
      "trail": [
        "JavaScript 进阶 - 第1天",
        "综合案例",
        "filter筛选数组"
      ],
      "level": 3,
      "line": 671,
      "blocks": [
        {
          "type": "text",
          "text": "filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素\n\n主要使用场景： 筛选数组符合条件的元素，并返回筛选之后元素的新数组"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<body>\n  <script>\n    const arr = [10, 20, 30];\n    // const newArr = arr.filter(function (item, index) {\n    //   // console.log(item)\n    //   // console.log(index)\n    //   return item >= 20\n    // })\n    // 返回的符合条件的新数组\n\n    const newArr = arr.filter((item) => item >= 20);\n    console.log(newArr);\n  </script>\n</body>"
        }
      ]
    }
  ]
};
