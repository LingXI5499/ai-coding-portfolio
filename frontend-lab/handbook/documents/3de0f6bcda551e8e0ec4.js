window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["3de0f6bcda551e8e0ec4"] = {
  "id": "3de0f6bcda551e8e0ec4",
  "title": "day03.md",
  "treatment": "章节知识与练习",
  "sections": [
    {
      "title": "JavaScript 进阶 - 第3天笔记",
      "trail": [
        "JavaScript 进阶 - 第3天笔记"
      ],
      "level": 1,
      "line": 1,
      "blocks": [
        {
          "type": "text",
          "text": "> 了解构造函数原型对象的语法特征，掌握 JavaScript 中面向对象编程的实现方式，基于面向对象编程思想实现 DOM 操作的封装。\n\n- 了解面向对象编程的一般特征\n- 掌握基于构造函数原型对象的逻辑封装\n- 掌握基于原型对象实现的继承\n- 理解什么原型链及其作用\n- 能够处理程序异常提升程序执行的健壮性"
        }
      ]
    },
    {
      "title": "编程思想",
      "trail": [
        "JavaScript 进阶 - 第3天笔记",
        "编程思想"
      ],
      "level": 2,
      "line": 11,
      "blocks": [
        {
          "type": "text",
          "text": "> 学习 JavaScript 中基于原型的面向对象编程序的语法实现，理解面向对象编程的特征。"
        }
      ]
    },
    {
      "title": "面向过程",
      "trail": [
        "JavaScript 进阶 - 第3天笔记",
        "编程思想",
        "面向过程"
      ],
      "level": 3,
      "line": 15,
      "blocks": [
        {
          "type": "text",
          "text": "面向过程就是分析出解决问题所需要的步骤，然后用函数把这些步骤一步一步实现，使用的时候再一个一个的依次\n\n调用就可以了。\n\n 举个栗子：蛋炒饭\n\n[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "面向对象",
      "trail": [
        "JavaScript 进阶 - 第3天笔记",
        "编程思想",
        "面向对象"
      ],
      "level": 3,
      "line": 25,
      "blocks": [
        {
          "type": "text",
          "text": "面向对象是把事务分解成为一个个对象，然后由对象之间分工与合作。\n\n[课程配图见原资料]\n\n在面向对象程序开发思想中，每一个对象都是功能中心，具有明确分工。\n\n面向对象编程具有灵活、代码可复用、容易维护和开发的优点，更适合多人合作的大型软件项目。\n\n面向对象的特性：\n\n- 封装性\n\n\n- 继承性\n- 多态性"
        }
      ]
    },
    {
      "title": "构造函数",
      "trail": [
        "JavaScript 进阶 - 第3天笔记",
        "构造函数"
      ],
      "level": 2,
      "line": 43,
      "blocks": [
        {
          "type": "text",
          "text": "对比以下通过面向对象的构造函数实现的封装："
        },
        {
          "type": "code",
          "language": "html",
          "text": "<script>\n  function Person() {\n    this.name = '佚名';\n    // 设置名字\n    this.setName = function (name) {\n      this.name = name;\n    };\n    // 读取名字\n    this.getName = () => {\n      console.log(this.name);\n    };\n  }\n\n  // 实例对像，获得了构造函数中封装的所有逻辑\n  let p1 = new Person();\n  p1.setName('小明');\n  console.log(p1.name);\n\n  // 实例对象\n  let p2 = new Person();\n  console.log(p2.name);\n</script>"
        },
        {
          "type": "text",
          "text": "封装是面向对象思想中比较重要的一部分，js面向对象可以通过构造函数实现的封装。\n\n同样的将变量和函数组合到了一起并能通过 this 实现数据的共享，所不同的是借助构造函数创建出来的实例对象之\n\n间是彼此不影响的\n\n>总结：\n>\n>1. 构造函数体现了面向对象的封装特性\n>2. 构造函数实例创建的对象彼此独立、互不影响\n\n封装是面向对象思想中比较重要的一部分，js面向对象可以通过构造函数实现的封装。\n\n前面我们学过的构造函数方法很好用，但是 存在`浪费内存`的问题"
        }
      ]
    },
    {
      "title": "原型对象",
      "trail": [
        "JavaScript 进阶 - 第3天笔记",
        "原型对象"
      ],
      "level": 2,
      "line": 87,
      "blocks": [
        {
          "type": "text",
          "text": "构造函数通过原型分配的函数是所有对象所 共享的。\n\n- JavaScript 规定，每一个构造函数都有一个 prototype 属性，指向另一个对象，所以我们也称为原型对象\n- 这个对象可以挂载函数，对象实例化不会多次创建原型上函数，节约内存\n- 我们可以把那些不变的方法，直接定义在 prototype 对象上，这样所有对象的实例就可以共享这些方法。\n- 构造函数和原型对象中的this 都指向 实例化的对象"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<script>\n  function Person() {}\n\n  // 每个函数都有 prototype 属性\n  console.log(Person.prototype);\n</script>"
        },
        {
          "type": "text",
          "text": "了解了 JavaScript 中构造函数与原型对象的关系后，再来看原型对象具体的作用，如下代码所示："
        },
        {
          "type": "code",
          "language": "html",
          "text": "<script>\n  function Person() {\n    // 此处未定义任何方法\n  }\n\n  // 为构造函数的原型对象添加方法\n  Person.prototype.sayHi = function () {\n    console.log('Hi~');\n  };\n\n  // 实例化\n  let p1 = new Person();\n  p1.sayHi(); // 输出结果为 Hi~\n</script>"
        },
        {
          "type": "text",
          "text": "构造函数 `Person` 中未定义任何方法，这时实例对象调用了原型对象中的方法 `sayHi`，接下来改动一下代码："
        },
        {
          "type": "code",
          "language": "html",
          "text": "<script>\n  function Person() {\n    // 此处定义同名方法 sayHi\n    this.sayHi = function () {\n      console.log('嗨!');\n    };\n  }\n\n  // 为构造函数的原型对象添加方法\n  Person.prototype.sayHi = function () {\n    console.log('Hi~');\n  };\n\n  let p1 = new Person();\n  p1.sayHi(); // 输出结果为 嗨!\n</script>"
        },
        {
          "type": "text",
          "text": "构造函数 `Person` 中定义与原型对象中相同名称的方法，这时实例对象调用则是构造函中的方法 `sayHi`。\n\n通过以上两个简单示例不难发现 JavaScript 中对象的工作机制：**当访问对象的属性或方法时，先在当前实例对象是查找，然后再去原型对象查找，并且原型对象被所有实例共享。**"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<script>\n  function Person() {\n    // 此处定义同名方法 sayHi\n    this.sayHi = function () {\n      console.log('嗨!' + this.name);\n    };\n  }\n\n  // 为构造函数的原型对象添加方法\n  Person.prototype.sayHi = function () {\n    console.log('Hi~' + this.name);\n  };\n  // 在构造函数的原型对象上添加属性\n  Person.prototype.name = '小明';\n\n  let p1 = new Person();\n  p1.sayHi(); // 输出结果为 嗨!\n\n  let p2 = new Person();\n  p2.sayHi();\n</script>"
        },
        {
          "type": "text",
          "text": "总结：**结合构造函数原型的特征，实际开发重往往会将封装的功能函数添加到原型对象中。**"
        }
      ]
    },
    {
      "title": "constructor 属性",
      "trail": [
        "JavaScript 进阶 - 第3天笔记",
        "原型对象",
        "constructor 属性"
      ],
      "level": 3,
      "line": 181,
      "blocks": [
        {
          "type": "text",
          "text": "在哪里？ 每个原型对象里面都有个constructor 属性（constructor 构造函数）\n\n作用：该属性指向该原型对象的构造函数， 简单理解，就是指向我的爸爸，我是有爸爸的孩子\n\n**使用场景：**\n\n如果有多个对象的方法，我们可以给原型对象采取对象形式赋值.\n\n但是这样就会覆盖构造函数原型对象原来的内容，这样修改后的原型对象 constructor 就不再指向当前构造函数了\n\n此时，我们可以在修改后的原型对象中，添加一个 constructor 指向原来的构造函数。"
        }
      ]
    },
    {
      "title": "对象原型",
      "trail": [
        "JavaScript 进阶 - 第3天笔记",
        "原型对象",
        "对象原型"
      ],
      "level": 3,
      "line": 196,
      "blocks": [
        {
          "type": "text",
          "text": "对象都会有一个属性 __proto__ 指向构造函数的 prototype 原型对象，之所以我们对象可以使用构造函数 prototype \n\n原型对象的属性和方法，就是因为对象有 __proto__ 原型的存在。\n\n注意：\n\n- __proto__ 是JS非标准属性\n- [[prototype]]和__proto__意义相同\n- 用来表明当前实例对象指向哪个原型对象prototype\n- __proto__对象原型里面也有一个 constructor属性，指向创建该实例对象的构造函数"
        }
      ]
    },
    {
      "title": "原型继承",
      "trail": [
        "JavaScript 进阶 - 第3天笔记",
        "原型对象",
        "原型继承"
      ],
      "level": 3,
      "line": 212,
      "blocks": [
        {
          "type": "text",
          "text": "继承是面向对象编程的另一个特征，通过继承进一步提升代码封装的程度，JavaScript 中大多是借助原型对象实现继承\n\n的特性。\n\n龙生龙、凤生凤、老鼠的儿子会打洞描述的正是继承的含义。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<body>\n  <script>\n    // 继续抽取   公共的部分放到原型上\n    // const Person1 = {\n    //   eyes: 2,\n    //   head: 1\n    // }\n    // const Person2 = {\n    //   eyes: 2,\n    //   head: 1\n    // }\n    // 构造函数  new 出来的对象 结构一样，但是对象不一样\n    function Person() {\n      this.eyes = 2;\n      this.head = 1;\n    }\n    // console.log(new Person)\n    // 女人  构造函数   继承  想要 继承 Person\n    function Woman() {}\n    // Woman 通过原型来继承 Person\n    // 父构造函数（父类）   子构造函数（子类）\n    // 子类的原型 =  new 父类\n    Woman.prototype = new Person(); // {eyes: 2, head: 1}\n    // 指回原来的构造函数\n    Woman.prototype.constructor = Woman;\n\n    // 给女人添加一个方法  生孩子\n    Woman.prototype.baby = function () {\n      console.log('宝贝');\n    };\n    const red = new Woman();\n    console.log(red);\n    // console.log(Woman.prototype)\n    // 男人 构造函数  继承  想要 继承 Person\n    function Man() {}\n    // 通过 原型继承 Person\n    Man.prototype = new Person();\n    Man.prototype.constructor = Man;\n    const pink = new Man();\n    console.log(pink);\n  </script>\n</body>"
        }
      ]
    },
    {
      "title": "原型链",
      "trail": [
        "JavaScript 进阶 - 第3天笔记",
        "原型对象",
        "原型链"
      ],
      "level": 3,
      "line": 269,
      "blocks": [
        {
          "type": "text",
          "text": "基于原型对象的继承使得不同构造函数的原型对象关联在一起，并且这种关联的关系是一种链状的结构，我们将原型对\n\n象的链状结构关系称为原型链\n\n[课程配图见原资料]"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<body>\n  <script>\n    // function Objetc() {}\n    console.log(Object.prototype);\n    console.log(Object.prototype.__proto__);\n\n    function Person() {}\n    const ldh = new Person();\n    // console.log(ldh.__proto__ === Person.prototype)\n    // console.log(Person.prototype.__proto__ === Object.prototype)\n    console.log(ldh instanceof Person);\n    console.log(ldh instanceof Object);\n    console.log(ldh instanceof Array);\n    console.log([1, 2, 3] instanceof Array);\n    console.log(Array instanceof Object);\n  </script>\n</body>"
        },
        {
          "type": "text",
          "text": "① 当访问一个对象的属性（包括方法）时，首先查找这个对象自身有没有该属性。\n\n② 如果没有就查找它的原型（也就是 __proto__指向的 prototype 原型对象）\n\n③ 如果还没有就查找原型对象的原型（Object的原型对象）\n\n④ 依此类推一直找到 Object 为止（null）\n\n⑤ __proto__对象原型的意义就在于为对象成员查找机制提供一个方向，或者说一条路线\n\n⑥ 可以使用 instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上"
        }
      ]
    }
  ]
};
