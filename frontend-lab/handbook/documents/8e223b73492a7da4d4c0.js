window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["8e223b73492a7da4d4c0"] = {
  "id": "8e223b73492a7da4d4c0",
  "title": "JavaScript 进阶第三天.pdf",
  "treatment": "课件页级文本（配图回溯原件）",
  "sections": [
    {
      "title": "第1页",
      "level": 1,
      "page": 1,
      "blocks": [
        {
          "type": "text",
          "text": "JavaScript 进阶第三天\n深入面向对象"
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
          "text": "学习目标\nLearning Objectives\n1. 理解面向对象思想，掌握函数原型对象\n2. 运用面向对象封装确认框对话框功能"
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
          "text": "目录\nContents\n 编程思想\n 构造函数\n 原型\n 综合案例"
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
          "text": "编程思想\n• 面向过程介绍\n• 面向对象介绍\n01"
        }
      ]
    },
    {
      "title": "第5页",
      "level": 1,
      "page": 5,
      "blocks": [
        {
          "type": "text",
          "text": "1.1 面向过程编程\n目标：从生活例子了解什么是面向过程编程\n 面向过程就是分析出解决问题所需要的步骤，然后用函数把这些步骤一步一步实现，使用的时候再一个一个的依次\n调用就可以了。\n 举个栗子：蛋炒饭\n 面向过程，就是按照我们分析好了的步骤，按照步骤解决问题。"
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
          "text": "编程思想\n• 面向过程介绍\n• 面向对象介绍\n01"
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
          "text": "1.2 面向对象编程 (oop)\n目标：从生活例子了解什么是面向对象编程\n 面向对象是把事务分解成为一个个对象，然后由对象之间分工与合作。\n 举个栗子：盖浇饭\n 面向对象是以对象功能来划分问题，而不是步骤。"
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
          "text": "1.2 面向对象编程 (oop)\n 在面向对象程序开发思想中，每一个对象都是功能中心，具有明确分工。\n 面向对象编程具有灵活、代码可复用、容易维护和开发的优点，更适合多人合作的大型软件项目。\n 面向对象的特性：\n 封装性\n 继承性\n 多态性\n继承：继承自拖拉机，实现了扫地的接口\n封装：无需知道如何运作，开动即可\n多态：平时扫地，天热当风扇\n重用：没用额外动力，重复利用了发动机\n能量\n多线程：多个扫把同时工作\n低耦合：扫把可以换成拖把而无须改动\n组件编程：每个配件都是可单独利用的工具\n适配器模式：无需造发动机，继承自拖拉\n机，只取动力方法\n代码托管：无需管理垃圾，直接扫到路边\n即可"
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
          "text": "1. 编程思想-面向过程和面向对象的对比\n面向过程编程 面向对象编程\n优点：性能比面向对象高，适合跟硬件联系很紧密\n的东西，例如单片机就采用的面向过程编程。\n缺点：没有面向对象易维护、易复用、易扩展\n优点：易维护、易复用、易扩展，由于面向对象有封装\n、继承、多态性的特性，可以设计出低耦合的系统，使\n系统 更加灵活、更加易于维护\n缺点：性能比面向过程低\n生活离不开蛋炒饭，也离不开盖浇饭，选择不同而已，只不过前端不同于其他语言，面向过程更多"
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
          "text": "目录\nContents\n 编程思想\n 构造函数\n 原型\n 综合案例"
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
          "text": "构造函数02"
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
          "text": "2. 构造函数\n 封装是面向对象思想中比较重要的一部分，js面向对象可以通过构造函数实现的封装。\n 同样的将变量和函数组合到了一起并能通过 this 实现数据的共享，所不同的是借助构造函数创建出来的实例对象之\n间是彼此不影响的\n总结：\n1. 构造函数体现了面向对象的封装特性\n2. 构造函数实例创建的对象彼此独立、互不影响"
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
          "text": "2. 构造函数\n 封装是面向对象思想中比较重要的一部分，js面向对象可以通过构造函数实现的封装。\n 前面我们学过的构造函数方法很好用，但是 存在浪费内存的问题\n内存function Star(uname, age) {\nthis.uname = uname\nthis.age = age\nthis.sing = function() {\nconsole.log('我会唱歌')\n}\n} \nconst ldh = new Star('刘德华', 18)\nconst zxy = new Star('张学友', 19)\n栈 堆\n0x111111\nfunction()\n0x222222\nfunction()"
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
          "text": "2. 构造函数\n 面向对象编程的特性：比如封装性、继承性等，可以借助于构造函数来实现\n前面我们学过的构造函数方法很好用，但是 存在浪费内存的问题\nfunction Star(uname, age) {\nthis.uname = uname\nthis.age = age\nthis.sing = function() {\nconsole.log('我会唱歌')\n}\n} \nconst ldh = new Star('刘德华', 18)\nconst zxy = new Star('张学友', 19)"
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
          "text": "总结总结\n1. Js 实现面向对象需要借助于谁来实现？\n 构造函数\n2. 构造函数存在什么问题？\n 浪费内存"
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
          "text": "2. 构造函数\n 面向对象编程的特性：比如封装性、继承性等，可以借助于构造函数来实现\n前面我们学过的构造函数方法很好用，但是 存在浪费内存的问题\n我们希望所有的对象使用同一个函数，这样就比较节省内存，那么我们要怎样做呢？\nfunction Star(uname, age) {\nthis.uname = uname\nthis.age = age\nthis.sing = function() {\nconsole.log('我会唱歌')\n}\n} \nconst ldh = new Star('刘德华', 18)\nconst zxy = new Star('张学友', 19)"
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
          "text": "目录\nContents\n 编程思想\n 构造函数\n 原型\n 综合案例"
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
          "text": "原型\n• 原型\n• constructor 属性\n• 对象原型\n• 原型继承\n• 原型链\n03"
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
          "text": "3.1 原型\n目标：能够利用原型对象实现方法共享\n 构造函数通过原型分配的函数是所有对象所 共享的。\n JavaScript 规定，每一个构造函数都有一个 prototype 属性，指向另一个对象，所以我们也称为原型对象\n 这个对象可以挂载函数，对象实例化不会多次创建原型上函数，节约内存\n 我们可以把那些不变的方法，直接定义在 prototype 对象上，这样所有对象的实例就可以共享这些方法。\n 构造函数和原型对象中的this 都指向 实例化的对象\nfunction Star(name) {\nthis.name = name\n}\n构造函数\n共享的属性和方法\n原型 prototype"
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
          "text": "总结总结\n1. 原型是什么 ？\n 一个对象，我们也称为 prototype 为原型对象\n2. 原型的作用是什么 ？\n 共享方法\n 可以把那些不变的方法，直接定义在 prototype 对象上\n3. 构造函数和原型里面的this指向谁 ？\n 实例化的对象"
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
          "text": "3.1 原型- this指向\n目标：能够说出构造函数和原型对象中的this 指向\n构造函数和原型对象中的this 都指向 实例化的对象"
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
          "text": "总结总结\n1. 构造函数和原型里面的this指向谁 ？\n 实例化的对象"
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
          "text": "练习\n • 给数组扩展方法\n需求：\n①：给数组扩展求最大值方法和求和方法\n比如： 以前学过\nconst arr = [1,2,3]\narr.reverse()      结果是 [3,2,1]\n扩展完毕之后：\narr.sum()     返回的结果是 6"
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
          "text": "练习\n • 给数组扩展方法\n需求：\n①：给数组扩展求最大值方法和求和方法"
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
          "text": "原型\n• 原型\n• constructor 属性\n• 对象原型\n• 原型继承\n• 原型链\n03"
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
          "text": "3.2 constructor 属性\n在哪里？ 每个原型对象里面都有个constructor 属性（constructor 构造函数）\n作用：该属性指向该原型对象的构造函数， 简单理解，就是指向我的爸爸，我是有爸爸的孩子\nfunction Star(name) {\nthis.name = name\n}\n构造函数\n共享的属性和方法\nconstructor 属性\n原型 prototype"
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
          "text": "3.2 constructor 属性\n目标：了解constructor属性的作用\n使用场景：\n如果有多个对象的方法，我们可以给原型对象采取对象形式赋值.\n但是这样就会覆盖构造函数原型对象原来的内容，这样修改后的原型对象 constructor  就不再指向当前构造函数了\n此时，我们可以在修改后的原型对象中，添加一个 constructor 指向原来的构造函数。"
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
          "text": "总结总结\n1. constructor属性的作用是什么？\n 指向该原型对象的构造函数"
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
          "text": "思考\n构造函数可以创建实例对象，构造函数还有一个原型对象，一些公共的属性或者方法放到这个原型对象身上\n但是 为啥实例对象可以访问原型对象里面的属性和方法呢？\nfunction Star(name) {\nthis.name = name\n}\n构造函数\n共享的属性和方法\n原型 prototype\nnew Star()\n实例对象"
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
          "text": "原型\n• 原型\n• constructor 属性\n• 对象原型\n• 原型继承\n• 原型链\n03"
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
          "text": "3.3 对象原型\n对象都会有一个属性 __proto__  指向构造函数的 prototype 原型对象，之所以我们对象可以使用构造函数 prototype \n原型对象的属性和方法，就是因为对象有 __proto__ 原型的存在。\nfunction Star(name) {\nthis.name = name\n}\n构造函数\n共享的属性和方法\n原型 prototype\nnew Star()\n__proto__\n实例对象"
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
          "text": "3.3 对象原型\n注意：\n __proto__ 是JS非标准属性\n [[prototype]]和__proto__意义相同\n 用来表明当前实例对象指向哪个原型对象prototype\n __proto__对象原型里面也有一个 constructor属性，指向创建该实例对象的构造函数"
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
          "text": "3.3 对象原型\n对象都会有一个属性 __proto__  指向构造函数的 prototype 原型对象，之所以我们对象可以使用构造函数 prototype \n原型对象的属性和方法，就是因为对象有 __proto__ 原型的存在。\nfunction Star(name) {\nthis.name = name\n}\n构造函数\n共享的属性和方法\nprototype. constructor\n原型 prototype\n实例对象.__proto__\n实例对象.__proto__.constructor\n实例对象 new Star()"
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
          "text": "总结总结\n1. prototype是什么？哪里来的？\n 原型（原型对象）\n 构造函数都自动有原型\n2. constructor属性在哪里？作用干啥的？\n prototype原型和对象原型__proto__里面都有\n 都指向创建实例对象/原型的构造函数\n3. __proto__属性在哪里？指向谁？\n 在实例对象里面\n 指向原型 prototype"
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
          "text": "练习\n • 根据下面代码，请画图\n需求：\n①：利用画图工具，画出 构造函数 原型 实例对象 三者的关系\n②：要求里面有__proto__  和 constructor 的指向\n③：并在代码打印验证指向正确"
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
          "text": "原型\n• 原型\n• constructor 属性\n• 对象原型\n• 原型继承\n• 原型链\n03"
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
          "text": "3.4 原型继承\n继承是面向对象编程的另一个特征，通过继承进一步提升代码封装的程度，JavaScript 中大多是借助原型对象实现继承\n的特性。\n龙生龙、凤生凤、老鼠的儿子会打洞描述的正是继承的含义。\n我们来看个代码："
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
          "text": "3.4 原型继承\n1. 封装-抽取公共部分\n把男人和女人公共的部分抽取出来放到人类里面"
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
          "text": "3.4 原型继承\n2. 继承-让男人和女人都能继承人类的一些属性和方法\n 把男人女人公共的属性和方法抽取出来 People\n 然后赋值给Man的原型对象，可以共享这些属性和方法\n 注意让constructor指回Man这个构造函数"
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
          "text": "3.4 原型继承\n3. 问题：\n如果我们给男人添加了一个吸烟的方法，发现女人自动也添加这个方法"
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
          "text": "内存\n栈 堆\n3.4 原型继承\n3. 问题：--原因\n男人和女人都同时使用了同一个对象，根据引用类型的特点，他们指向同一个对象，修改一个就会都影响\n0x111111\n0x111111"
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
          "text": "3.4 原型继承\n4. 解决：\n需求：男人和女人不要使用同一个对象，但是不同对象里面包含相同的属性和方法\n答案：构造函数\nnew 每次都会创建一个新的对象"
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
          "text": "3.4 原型继承\n5. 继承写法完善"
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
          "text": "3.4 原型继承\n5. 继承写法完善\n此处Woman么有smoking方法了"
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
          "text": "思路\n真正做这个案例，我们的思路应该是先考虑大的，后考虑小的\n1. 人类共有的属性和方法有那些，然后做个构造函数，进行封装，一般公共属性写到构造函数内部，公共方法，挂载\n到构造函数原型身上。\n2. 男人继承人类的属性和方法，之后创建自己独有的属性和方法\n3. 女人同理"
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
          "text": "原型\n• 原型\n• constructor 属性\n• 对象原型\n• 原型继承\n• 原型链\n03"
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
          "text": "3.5 原型链\n基于原型对象的继承使得不同构造函数的原型对象关联在一起，并且这种关联的关系是一种链状的结构，我们将原型对\n象的链状结构关系称为原型链\nStar 构造函数 Star原型对象\nprototype\nldh.__proto_\n_\n原型对\n象.constructor\nStar.prototype\nStar原型对象prototype.__proto__\nObject 构造函数\nObject.prototype\nObject 原型对象\nprototype\nnull\nObject原型对象prototype.__proto__\nldh 对象实例\nObject原型对\n象.constructor"
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
          "text": "3.5 原型链-查找规则\n① 当访问一个对象的属性（包括方法）时，首先查找这个对象自身有没有该属性。\n② 如果没有就查找它的原型（也就是 __proto__指向的 prototype 原型对象）\n③ 如果还没有就查找原型对象的原型（Object的原型对象）\n④ 依此类推一直找到 Object 为止（null）\n⑤ __proto__对象原型的意义就在于为对象成员查找机制提供一个方向，或者说一条路线\n⑥ 可以使用 instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上"
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
          "text": "目录\nContents\n 编程思想\n 构造函数\n 原型\n 综合案例"
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
          "text": "案例\n 消息提示对象封装\n目的： 练习面向对象写插件（模态框）\n需求："
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
          "text": "案例\n 消息提示对象封装\n分析需求：\n1. 定义模态框 Modal 构造函数，用来创建对象\n2. 模态框具备 打开功能 open 方法 （按钮点击可以打开模态框）\n3. 模态框 具备关闭功能 close 方法\n问：\nopen 和 close 方法 写到哪里？\n构造函数的原型对象上，共享方法\n所以可以分为三个模块， 构造函数， open方法， close方法"
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
          "text": "步骤\n • 消息提示对象封装\n步骤：\n①：Modal 构造函数 制作\n- 需要的公共属性： 标题（title）、提示信息内容（message） 可以设置默认参数\n- 在页面中创建模态框\n(1)  创建div标签可以命名为：modalBox\n(2)  div标签的类名为 modal \n(3)  标签内部添加 基本结构，并填入相关数据"
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
          "text": "步骤\n • 消息提示对象封装\n步骤：\n①：open方法\n- 写到构造函数的原型对象身上\n- 把刚才创建的modalBox 添加到 页面 body 标签中\n- open 打开的本质就是 把创建标签添加到页面中\n- 点击按钮， 实例化对象，传入对应的参数，并执行 open 方法"
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
          "text": "步骤\n • 消息提示对象封装\n步骤：\n①：close方法\n- 写到构造函数的原型对象身上\n- 把刚才创建的modalBox 从页面 body 标签中 删除\n- 需要注意，x 删除按钮绑定事件，要写到open里面添加\n因为open是往页面中添加元素，同时顺便绑定事件"
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
          "text": "今日\n作业\n1. 整理笔记\n2. 画图的方式画出原型链\n3. 开始做测试题： PC端地址： https://ks.wjx.top/vj/rTd1xoS.aspx\n4. 预习第四天内容"
        }
      ]
    }
  ]
};
