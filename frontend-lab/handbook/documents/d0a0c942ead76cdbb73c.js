window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["d0a0c942ead76cdbb73c"] = {
  "id": "d0a0c942ead76cdbb73c",
  "title": "day04.md",
  "treatment": "章节知识与练习",
  "sections": [
    {
      "title": "浅拷贝",
      "trail": [
        "JavaScript 进阶 - 第4天",
        "深浅拷贝",
        "浅拷贝"
      ],
      "level": 3,
      "line": 5,
      "blocks": [
        {
          "type": "text",
          "text": "首先浅拷贝和深拷贝只针对引用类型\n\n浅拷贝：拷贝的是地址\n\n常见方法：\n\n1. 拷贝对象：Object.assgin() / 展开运算符 {...obj} 拷贝对象\n2. 拷贝数组：Array.prototype.concat() 或者 [...arr]\n\n>如果是简单数据类型拷贝值，引用数据类型拷贝的是地址 (简单理解： 如果是单层对象，没问题，如果有多层就有问题)"
        }
      ]
    },
    {
      "title": "深拷贝",
      "trail": [
        "JavaScript 进阶 - 第4天",
        "深浅拷贝",
        "深拷贝"
      ],
      "level": 3,
      "line": 18,
      "blocks": [
        {
          "type": "text",
          "text": "首先浅拷贝和深拷贝只针对引用类型\n\n深拷贝：拷贝的是对象，不是地址\n\n常见方法：\n\n1. 通过递归实现深拷贝\n2. lodash/cloneDeep\n3. 通过JSON.stringify()实现"
        }
      ]
    },
    {
      "title": "递归实现深拷贝",
      "trail": [
        "JavaScript 进阶 - 第4天",
        "深浅拷贝",
        "深拷贝",
        "递归实现深拷贝"
      ],
      "level": 4,
      "line": 30,
      "blocks": [
        {
          "type": "text",
          "text": "函数递归：\n\n如果一个函数在内部可以调用其本身，那么这个函数就是递归函数\n\n- 简单理解:函数内部自己调用自己, 这个函数就是递归函数\n- 递归函数的作用和循环效果类似\n- 由于递归很容易发生“栈溢出”错误（stack overflow），所以必须要加退出条件 return"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<body>\n  <script>\n    const obj = {\n      uname: 'pink',\n      age: 18,\n      hobby: ['乒乓球', '足球'],\n      family: {\n        baby: '小pink',\n      },\n    };\n    const o = {};\n    // 拷贝函数\n    function deepCopy(newObj, oldObj) {\n      debugger;\n      for (let k in oldObj) {\n        // 处理数组的问题  一定先写数组 在写 对象 不能颠倒\n        if (oldObj[k] instanceof Array) {\n          newObj[k] = [];\n          //  newObj[k] 接收 []  hobby\n          //  oldObj[k]   ['乒乓球', '足球']\n          deepCopy(newObj[k], oldObj[k]);\n        } else if (oldObj[k] instanceof Object) {\n          newObj[k] = {};\n          deepCopy(newObj[k], oldObj[k]);\n        } else {\n          //  k  属性名 uname age    oldObj[k]  属性值  18\n          // newObj[k]  === o.uname  给新对象添加属性\n          newObj[k] = oldObj[k];\n        }\n      }\n    }\n    deepCopy(o, obj); // 函数调用  两个参数 o 新对象  obj 旧对象\n    console.log(o);\n    o.age = 20;\n    o.hobby[0] = '篮球';\n    o.family.baby = '老pink';\n    console.log(obj);\n    console.log([1, 23] instanceof Object);\n    // 复习\n    // const obj = {\n    //   uname: 'pink',\n    //   age: 18,\n    //   hobby: ['乒乓球', '足球']\n    // }\n    // function deepCopy({ }, oldObj) {\n    //   // k 属性名  oldObj[k] 属性值\n    //   for (let k in oldObj) {\n    //     // 处理数组的问题   k 变量\n    //     newObj[k] = oldObj[k]\n    //     // o.uname = 'pink'\n    //     // newObj.k  = 'pink'\n    //   }\n    // }\n  </script>\n</body>"
        }
      ]
    },
    {
      "title": "js库lodash里面cloneDeep内部实现了深拷贝",
      "trail": [
        "JavaScript 进阶 - 第4天",
        "深浅拷贝",
        "深拷贝",
        "js库lodash里面cloneDeep内部实现了深拷贝"
      ],
      "level": 4,
      "line": 99,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<body>\n  <!-- 先引用 -->\n  <script src=\"./lodash.min.js\"></script>\n  <script>\n    const obj = {\n      uname: 'pink',\n      age: 18,\n      hobby: ['乒乓球', '足球'],\n      family: {\n        baby: '小pink',\n      },\n    };\n    const o = _.cloneDeep(obj);\n    console.log(o);\n    o.family.baby = '老pink';\n    console.log(obj);\n  </script>\n</body>"
        }
      ]
    },
    {
      "title": "JSON序列化",
      "trail": [
        "JavaScript 进阶 - 第4天",
        "深浅拷贝",
        "深拷贝",
        "JSON序列化"
      ],
      "level": 4,
      "line": 122,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<body>\n  <script>\n    const obj = {\n      uname: 'pink',\n      age: 18,\n      hobby: ['乒乓球', '足球'],\n      family: {\n        baby: '小pink',\n      },\n    };\n    // 把对象转换为 JSON 字符串\n    // console.log(JSON.stringify(obj))\n    const o = JSON.parse(JSON.stringify(obj));\n    console.log(o);\n    o.family.baby = '123';\n    console.log(obj);\n  </script>\n</body>"
        }
      ]
    },
    {
      "title": "异常处理",
      "trail": [
        "JavaScript 进阶 - 第4天",
        "异常处理"
      ],
      "level": 2,
      "line": 145,
      "blocks": [
        {
          "type": "text",
          "text": "> 了解 JavaScript 中程序异常处理的方法，提升代码运行的健壮性。"
        }
      ]
    },
    {
      "title": "throw",
      "trail": [
        "JavaScript 进阶 - 第4天",
        "异常处理",
        "throw"
      ],
      "level": 3,
      "line": 149,
      "blocks": [
        {
          "type": "text",
          "text": "异常处理是指预估代码执行过程中可能发生的错误，然后最大程度的避免错误的发生导致整个程序无法继续运行\n\n总结：\n\n1. throw 抛出异常信息，程序也会终止执行\n2. throw 后面跟的是错误提示信息\n3. Error 对象配合 throw 使用，能够设置更详细的错误信息"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<script>\n  function counter(x, y) {\n    if (!x || !y) {\n      // throw '参数不能为空!';\n      throw new Error('参数不能为空!');\n    }\n\n    return x + y;\n  }\n\n  counter();\n</script>"
        },
        {
          "type": "text",
          "text": "总结：\n\n1. `throw` 抛出异常信息，程序也会终止执行\n2. `throw` 后面跟的是错误提示信息\n3. `Error` 对象配合 `throw` 使用，能够设置更详细的错误信息"
        }
      ]
    },
    {
      "title": "try ... catch",
      "trail": [
        "JavaScript 进阶 - 第4天",
        "异常处理",
        "try ... catch"
      ],
      "level": 3,
      "line": 181,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<script>\n  function foo() {\n    try {\n      // 查找 DOM 节点\n      const p = document.querySelector('.p');\n      p.style.color = 'red';\n    } catch (error) {\n      // try 代码段中执行有错误时，会执行 catch 代码段\n      // 查看错误信息\n      console.log(error.message);\n      // 终止代码继续执行\n      return;\n    } finally {\n      alert('执行');\n    }\n    console.log('如果出现错误，我的语句不会执行');\n  }\n  foo();\n</script>"
        },
        {
          "type": "text",
          "text": "总结：\n\n1. `try...catch` 用于捕获错误信息\n2. 将预估可能发生错误的代码写在 `try` 代码段中\n3. 如果 `try` 代码段中出现错误后，会执行 `catch` 代码段，并截获到错误信息"
        }
      ]
    },
    {
      "title": "debugger",
      "trail": [
        "JavaScript 进阶 - 第4天",
        "异常处理",
        "debugger"
      ],
      "level": 3,
      "line": 214,
      "blocks": [
        {
          "type": "text",
          "text": "相当于断点调试"
        }
      ]
    },
    {
      "title": "处理this",
      "trail": [
        "JavaScript 进阶 - 第4天",
        "处理this"
      ],
      "level": 2,
      "line": 218,
      "blocks": [
        {
          "type": "text",
          "text": "> 了解函数中 this 在不同场景下的默认值，知道动态指定函数 this 值的方法。\n\n`this` 是 JavaScript 最具“魅惑”的知识点，不同的应用场合 `this` 的取值可能会有意想不到的结果，在此我们对以往学习过的关于【 `this` 默认的取值】情况进行归纳和总结。"
        }
      ]
    },
    {
      "title": "普通函数",
      "trail": [
        "JavaScript 进阶 - 第4天",
        "处理this",
        "普通函数"
      ],
      "level": 3,
      "line": 224,
      "blocks": [
        {
          "type": "text",
          "text": "**普通函数**的调用方式决定了 `this` 的值，即【谁调用 `this` 的值指向谁】，如下代码所示："
        },
        {
          "type": "code",
          "language": "html",
          "text": "<script>\n  // 普通函数\n  function sayHi() {\n    console.log(this);\n  }\n  // 函数表达式\n  const sayHello = function () {\n    console.log(this);\n  };\n  // 函数的调用方式决定了 this 的值\n  sayHi(); // window\n  window.sayHi();\n\n  // 普通对象\n  const user = {\n    name: '小明',\n    walk: function () {\n      console.log(this);\n    },\n  };\n  // 动态为 user 添加方法\n  user.sayHi = sayHi;\n  uesr.sayHello = sayHello;\n  // 函数调用方式，决定了 this 的值\n  user.sayHi();\n  user.sayHello();\n</script>"
        },
        {
          "type": "text",
          "text": "注： 普通函数没有明确调用者时 `this` 值为 `window`，严格模式下没有调用者时 `this` 的值为 `undefined`。"
        }
      ]
    },
    {
      "title": "箭头函数",
      "trail": [
        "JavaScript 进阶 - 第4天",
        "处理this",
        "箭头函数"
      ],
      "level": 3,
      "line": 261,
      "blocks": [
        {
          "type": "text",
          "text": "**箭头函数**中的 `this` 与普通函数完全不同，也不受调用方式的影响，事实上箭头函数中并不存在 `this` ！箭头函数中访问的 `this` 不过是箭头函数所在作用域的 `this` 变量。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<script>\n  console.log(this); // 此处为 window\n  // 箭头函数\n  const sayHi = function () {\n    console.log(this); // 该箭头函数中的 this 为函数声明环境中 this 一致\n  };\n  // 普通对象\n  const user = {\n    name: '小明',\n    // 该箭头函数中的 this 为函数声明环境中 this 一致\n    walk: () => {\n      console.log(this);\n    },\n\n    sleep: function () {\n      let str = 'hello';\n      console.log(this);\n      let fn = () => {\n        console.log(str);\n        console.log(this); // 该箭头函数中的 this 与 sleep 中的 this 一致\n      };\n      // 调用箭头函数\n      fn();\n    },\n  };\n\n  // 动态添加方法\n  user.sayHi = sayHi;\n\n  // 函数调用\n  user.sayHi();\n  user.sleep();\n  user.walk();\n</script>"
        },
        {
          "type": "text",
          "text": "在开发中【使用箭头函数前需要考虑函数中 `this` 的值】，**事件回调函数**使用箭头函数时，`this` 为全局的 `window`，因此DOM事件回调函数不推荐使用箭头函数，如下代码所示："
        },
        {
          "type": "code",
          "language": "html",
          "text": "<script>\n  // DOM 节点\n  const btn = document.querySelector('.btn');\n  // 箭头函数 此时 this 指向了 window\n  btn.addEventListener('click', () => {\n    console.log(this);\n  });\n  // 普通函数 此时 this 指向了 DOM 对象\n  btn.addEventListener('click', function () {\n    console.log(this);\n  });\n</script>"
        },
        {
          "type": "text",
          "text": "同样由于箭头函数 `this` 的原因，**基于原型的面向对象也不推荐采用箭头函数**，如下代码所示："
        },
        {
          "type": "code",
          "language": "html",
          "text": "<script>\n  function Person() {}\n  // 原型对像上添加了箭头函数\n  Person.prototype.walk = () => {\n    console.log('人都要走路...');\n    console.log(this); // window\n  };\n  const p1 = new Person();\n  p1.walk();\n</script>"
        }
      ]
    },
    {
      "title": "改变this指向",
      "trail": [
        "JavaScript 进阶 - 第4天",
        "处理this",
        "改变this指向"
      ],
      "level": 3,
      "line": 336,
      "blocks": [
        {
          "type": "text",
          "text": "以上归纳了普通函数和箭头函数中关于 `this` 默认值的情形，不仅如此 JavaScript 中还允许指定函数中 `this` 的指向，有 3 个方法可以动态指定普通函数中 `this` 的指向："
        }
      ]
    },
    {
      "title": "call",
      "trail": [
        "JavaScript 进阶 - 第4天",
        "处理this",
        "改变this指向",
        "call"
      ],
      "level": 4,
      "line": 340,
      "blocks": [
        {
          "type": "text",
          "text": "使用 `call` 方法调用函数，同时指定函数中 `this` 的值，使用方法如下代码所示："
        },
        {
          "type": "code",
          "language": "html",
          "text": "<script>\n  // 普通函数\n  function sayHi() {\n    console.log(this);\n  }\n\n  let user = {\n    name: '小明',\n    age: 18,\n  };\n\n  let student = {\n    name: '小红',\n    age: 16,\n  };\n\n  // 调用函数并指定 this 的值\n  sayHi.call(user); // this 值为 user\n  sayHi.call(student); // this 值为 student\n\n  // 求和函数\n  function counter(x, y) {\n    return x + y;\n  }\n\n  // 调用 counter 函数，并传入参数\n  let result = counter.call(null, 5, 10);\n  console.log(result);\n</script>"
        },
        {
          "type": "text",
          "text": "总结：\n\n1. `call` 方法能够在调用函数的同时指定 `this` 的值\n2. 使用 `call` 方法调用函数时，第1个参数为 `this` 指定的值\n3. `call` 方法的其余参数会依次自动传入函数做为函数的参数"
        }
      ]
    },
    {
      "title": "apply",
      "trail": [
        "JavaScript 进阶 - 第4天",
        "处理this",
        "改变this指向",
        "apply"
      ],
      "level": 4,
      "line": 382,
      "blocks": [
        {
          "type": "text",
          "text": "使用 `call` 方法**调用函数**，同时指定函数中 `this` 的值，使用方法如下代码所示："
        },
        {
          "type": "code",
          "language": "html",
          "text": "<script>\n  // 普通函数\n  function sayHi() {\n    console.log(this);\n  }\n\n  let user = {\n    name: '小明',\n    age: 18,\n  };\n\n  let student = {\n    name: '小红',\n    age: 16,\n  };\n\n  // 调用函数并指定 this 的值\n  sayHi.apply(user); // this 值为 user\n  sayHi.apply(student); // this 值为 student\n\n  // 求和函数\n  function counter(x, y) {\n    return x + y;\n  }\n  // 调用 counter 函数，并传入参数\n  let result = counter.apply(null, [5, 10]);\n  console.log(result);\n</script>"
        },
        {
          "type": "text",
          "text": "总结：\n\n1. `apply` 方法能够在调用函数的同时指定 `this` 的值\n2. 使用 `apply` 方法调用函数时，第1个参数为 `this` 指定的值\n3. `apply` 方法第2个参数为数组，数组的单元值依次自动传入函数做为函数的参数"
        }
      ]
    },
    {
      "title": "bind",
      "trail": [
        "JavaScript 进阶 - 第4天",
        "处理this",
        "改变this指向",
        "bind"
      ],
      "level": 4,
      "line": 423,
      "blocks": [
        {
          "type": "text",
          "text": "`bind` 方法并**不会调用函数**，而是创建一个指定了 `this` 值的新函数，使用方法如下代码所示："
        },
        {
          "type": "code",
          "language": "html",
          "text": "<script>\n  // 普通函数\n  function sayHi() {\n    console.log(this);\n  }\n  let user = {\n    name: '小明',\n    age: 18,\n  };\n  // 调用 bind 指定 this 的值\n  let sayHello = sayHi.bind(user);\n  // 调用使用 bind 创建的新函数\n  sayHello();\n</script>"
        },
        {
          "type": "text",
          "text": "注：`bind` 方法创建新的函数，与原函数的唯一的变化是改变了 `this` 的值。"
        }
      ]
    },
    {
      "title": "防抖节流",
      "trail": [
        "JavaScript 进阶 - 第4天",
        "防抖节流"
      ],
      "level": 2,
      "line": 446,
      "blocks": [
        {
          "type": "text",
          "text": "1. 防抖（debounce）\n所谓防抖，就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间\n2. 节流（throttle）\n所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数"
        }
      ]
    }
  ]
};
