window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["cfa5fd7e693dcbae5f8e"] = {
  "id": "cfa5fd7e693dcbae5f8e",
  "title": "JavaScript高级第二天.pdf",
  "treatment": "课件页级文本（配图回溯原件）",
  "sections": [
    {
      "title": "第1页",
      "level": 1,
      "page": 1,
      "blocks": [
        {
          "type": "text",
          "text": "JavaScript 进阶第二天\n构造函数&数据常用函数"
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
          "text": "学习目标\nLearning Objectives\n1. 掌握基于构造函数创建对象，理解实例化过程\n2. 掌握对象数组字符数字等类型的常见属性和方法，便捷完成功能"
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
          "text": "目录\nContents\n 深入对象\n 内置构造函数\n 综合案例"
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
          "text": "深入对象\n• 创建对象三种方式\n• 构造函数\n• 实例成员&静态成员\n01"
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
          "text": "1.1创建对象三种方式\n目标：了解创建对象有三种方式\n1. 利用对象字面量创建对象\n2. 利用 new Object 创建对象\n3. 利用构造函数创建对象"
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
          "text": "深入对象\n• 创建对象三种方式\n• 构造函数\n• 实例成员&静态成员\n01"
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
          "text": "1.2 构造函数\n目标：能够利用构造函数创建对象\n 构造函数 ：是一种特殊的函数，主要用来初始化对象\n 使用场景：常规的 {...} 语法允许创建一个对象。比如我们创建了佩奇的对象，继续创建乔治的对象还需要重新写一\n遍，此时可以通过构造函数来快速创建多个类似的对象。"
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
          "text": "1.2 构造函数\n构造函数在技术上是常规函数。\n不过有两个约定：\n1. 它们的命名以大写字母开头。\n2. 它们只能由 \"new\" 操作符来执行。"
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
          "text": "1.2 构造函数\n 构造函数语法：大写字母开头的函数\n 创建构造函数：\n说明：\n1. 使用 new 关键字调用函数的行为被称为实例化\n2. 实例化构造函数时没有参数时可以省略 ()\n3. 构造函数内部无需写return，返回值即为新创建的对象\n4. 构造函数内部的 return 返回的值无效，所以不要写return\n5. new Object（） new Date（） 也是实例化构造函数"
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
          "text": "总结总结\n1. 构造函数的作用是什么？怎么写呢？\n 构造函数是来快速创建多个类似的对象\n 大写字母开头的函数\n2. new 关键字调用函数的行为被称为？\n 实例化\n3. 构造函数内部需要写return吗，返回值是什么？\n 不需要\n 构造函数自动返回创建的新的对象"
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
          "text": "练习\n • 利用构造函数创建多个对象\n需求：\n①：写一个Goods构造函数\n②：里面包含属性 name  商品名称 price 价格 count 库存数量\n③：实例化多个商品对象，并打印到控制台，例如\n小米 1999       20    \n华为 3999       59     \nvivo   1888      100"
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
          "text": "1.2 构造函数\n 实例化执行过程\n说明：\n1. 创建新对象\n2. 构造函数this指向新对象\n3. 执行构造函数代码，修改this，添加新的属性\n4. 返回新对象"
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
          "text": "深入对象\n• 创建对象三种方式\n• 构造函数\n• 实例成员&静态成员\n01"
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
          "text": "1.3实例成员&静态成员\n目标：能够说出什么是实例成员和静态成员\n实例成员：\n通过构造函数创建的对象称为实例对象，实例对象中的属性和方法称为实例成员。\n说明：\n1. 实例对象的属性和方法即为实例成员\n2. 为构造函数传入参数，动态创建结构相同但值不同的对象\n3. 构造函数创建的实例对象彼此独立互不影响。"
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
          "text": "1.3实例成员&静态成员\n目标：能够说出什么是实例成员和静态成员\n静态成员：\n构造函数的属性和方法被称为静态成员\n说明：\n1. 构造函数的属性和方法被称为静态成员\n2. 一般公共特征的属性或方法静态成员设置为静态成员\n3. 静态成员方法中的 this 指向构造函数本身"
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
          "text": "总结总结\n1. 什么是实例成员？\n 实例对象的属性和方法即为实例成员\n2. 什么是静态成员？\n 构造函数的属性和方法被称为静态成员"
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
          "text": "目录\nContents\n 深入对象\n 内置构造函数\n 综合案例"
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
          "text": "内置构造函数\n• Object\n• Array\n• String\n• Number\n02"
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
          "text": "2. 内置构造函数\n在 JavaScript 中最主要的数据类型有 6 种：\n基本数据类型：\n 字符串、数值、布尔、undefined、null\n引用类型:  \n 对象\n但是，我们会发现有些特殊情况：\n其实字符串、数值、布尔、等基本类型也都有专门的构造函数，这些我们称为包装类型。\nJS中几乎所有的数据都可以基于构成函数创建。"
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
          "text": "2. 内置构造函数\n引用类型\n Object，Array，RegExp，Date 等\n包装类型\n String，Number，Boolean 等"
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
          "text": "内置构造函数\n• Object\n• Array\n• String\n• Number\n02"
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
          "text": "2.1 Object\nObject 是内置的构造函数，用于创建普通对象。\n推荐使用字面量方式声明对象，而不是 Object 构造函数"
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
          "text": "2.1 Object\n学习三个常用静态方法（静态方法就是只有构造函数Object可以调用的）\n现在有新的方法了~~~~"
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
          "text": "2.1 Object\n学习三个常用静态方法（静态方法就是只有构造函数Object可以调用的）\n 作用：Object.keys 静态方法获取对象中所有属性（键）\n 语法：\n 注意： 返回的是一个数组"
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
          "text": "2.1 Object\n学习三个常用静态方法（静态方法就是只有构造函数Object可以调用的）\n 作用：Object.values 静态方法获取对象中所有属性值\n 语法：\n 注意： 返回的是一个数组"
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
          "text": "2.1 Object\n学习三个常用静态方法（静态方法就是只有构造函数Object可以调用的）\n 作用：Object. assign 静态方法常用于对象拷贝\n 语法："
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
          "text": "2.1 Object\n学习三个常用静态方法（静态方法就是只有构造函数Object可以调用的）\n 作用：Object. assign 静态方法常用于对象拷贝\n 使用：经常使用的场景给对象添加属性"
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
          "text": "总结总结\n1. 什么是静态方法？\n 只能给构造函数使用的方法 比如 Object.keys()\n2. Object.keys()方法的作用是什么 ？\n 获取对象中所有属性（键）\n3. Object.values()方法的作用是什么 ？\n 获取对象中所有属性值（值）"
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
          "text": "内置构造函数\n• Object\n• Array\n• String\n• Number\n02"
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
          "text": "2.2 Array\nArray 是内置的构造函数，用于创建数组\n创建数组建议使用字面量创建，不用 Array构造函数创建"
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
          "text": "2.2 Array\n1. 数组常见实例方法-核心方法\n方法 作用 说明\nforEach 遍历数组 不返回，用于不改变值，经常用于查找打印输出值\nfilter 过滤数组 筛选数组元素，并生成新数组\nmap 迭代数组 返回新数组，新数组里面的元素是处理之后的值，经常用于处理数据\nreduce 累计器 返回函数累计处理的结果，经常用于求和等"
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
          "text": "2.2 Array\n 作用：reduce  返回函数累计处理的结果，经常用于求和等\n 基本语法：\n 参数：\n起始值可以省略，如果写就作为第一次累计的起始值"
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
          "text": "2.2 Array\n 作用：reduce  返回函数累计处理的结果，经常用于求和等\n 语法：\n 累计值参数：\n1. 如果有起始值，则以起始值为准开始累计， 累计值 = 起始值\n2.  如果没有起始值， 则累计值以数组的第一个数组元素作为起始值开始累计\n3.  后面每次遍历就会用后面的数组元素 累计到 累计值 里面 （类似求和里面的 sum ）"
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
          "text": "2.2 Array\n 作用：reduce  返回函数累计处理的结果，经常用于求和等\n 使用场景：求和运算："
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
          "text": "总结总结\n方法 作用 说明\nforEach 遍历数组 不返回，用于不改变值，经常用于查找打印输出值\nfilter 过滤数组 筛选数组元素，并生成新数组\nmap 迭代数组 返回新数组，新数组里面的元素是处理之后的值，经常用于处理数据\nreduce 累计器 返回函数累计处理的结果，经常用于求和等"
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
          "text": "练习\n • 员工涨薪计算成本\n需求：\n①：给员工每人涨薪 30%\n②：然后计算需要支出的费用\n数据：\nconst arr = [{\nname: '张三',\nsalary: 10000\n}, {\nname: '李四',\nsalary: 10000\n}, {\nname: '王五',\nsalary: 10000\n},\n]"
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
          "text": "练习\n • 员工涨薪计算成本\n答案："
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
          "text": "2.2 Array\n2. 数组常见方法-其他方法"
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
          "text": "练习"
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
          "text": "练习"
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
          "text": "练习\n • 请完成以下需求\nconst spec =  { size: '40cm*40cm' , color: '黑色'}\n请将里面的值写到div标签里面，展示内容如下："
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
          "text": "练习\n • 请完成以下需求\nconst spec =  { size: '40cm*40cm' , color: '黑色'}\n请将里面的值写到div标签里面，展示内容如下：\n思路： 获得所有的属性值，然后拼接字符串就可以了\n①： 获得所有属性值是： Object.values()   返回的是数组\n②： 拼接数组是 join(‘’)  这样就可以转换为字符串了"
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
          "text": "2.2 Array\n2. 数组常见方法- 伪数组转换为真数组\n静态方法 Array.from()"
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
          "text": "内置构造函数\n• Object\n• Array\n• String\n• Number\n02"
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
          "text": "2.3 String\n在 JavaScript 中的字符串、数值、布尔具有对象的使用特征，如具有属性和方法\n之所以具有对象特征的原因是字符串、数值、布尔类型数据是 JavaScript 底层使用 Object 构造函数“包装”来的，被\n称为包装类型。"
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
          "text": "2.3 String\n1. 常见实例方法"
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
          "text": "练习\n • 请完成以下需求"
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
          "text": "练习\n • 显示赠品练习\n请将下面字符串渲染到准备好的 p标签内部，结构必须如左下图所示，展示效果如右图所示：\nconst gift = '50g茶叶,清洗球'\n思路：\n①：把字符串拆分为数组，这样两个赠品就拆分开了 用那个方法？\n②：利用map遍历数组，同时把数组元素生成到span里面，并且返回\n③：因为返回的是数组，所以需要 转换为字符串, 用那个方法？\n④：p的innerHTML 存放刚才的返回值\nsplit(‘ ,’)\njoin(‘’)"
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
          "text": "练习\n • 显示赠品练习\n请将下面字符串渲染到准备好的 p标签内部，结构必须如左下图所示，展示效果如右图所示：\n思路："
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
          "text": "内置构造函数\n• Object\n• Array\n• String\n• Number\n02"
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
          "text": "2.4 Number\nNumber 是内置的构造函数，用于创建数值\n常用方法：\ntoFixed() 设置保留小数位的长度"
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
          "text": "目录\nContents\n 深入对象\n 内置构造函数\n 综合案例"
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
          "text": "案例\n 购物车展示\n需求：\n根据后台提供的数据，渲染购物车页面"
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
          "text": "案例\n 购物车展示\n分析业务模块：\n①：渲染图片、标题、颜色、价格、赠品等数据\n②：单价和小计模块\n③：总价模块"
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
          "text": "步骤\n • 购物车展示\n分析业务模块：\n①：把整体的结构直接生成然后渲染到大盒子.list 里面\n②：那个方法可以遍历的同时还有返回值\n③：最后计算总价模块，那个方法可以求和？\nmap 方法\nreduce 方法"
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
          "text": "步骤\n • 购物车展示\n分析业务模块：\n①：先利用map来遍历，有多少条数据，渲染多少相同商品\n②：里面更换各种数据，注意使用对象解构赋值\n③：利用reduce计算总价"
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
          "text": "步骤\n • 购物车展示\n分析业务模块：\n①：先利用map来遍历，有多少条数据，渲染多少相同商品\n- 可以先写死的数据\n- 注意map返回值是 数组，我们需要用 join 转换为字符串\n- 把返回的字符串 赋值 给 list 大盒子的 innerHTML"
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
          "text": "步骤\n • 购物车展示\n分析业务模块：\n②：更换数据\n- 先更换不需要处理的数据，图片，商品名称，单价，数量\n- 采取对象解构的方式\n- 注意 单价要保留2位小数， 489.00     toFixed(2)"
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
          "text": "步骤\n • 购物车展示\n分析业务模块：\n②：更换数据 - 处理 规格文字 模块\n- 获取 每个对象里面的 spec , 上面对象解构添加 spec\n- 获得所有属性值是： Object.values()   返回的是数组\n- 拼接数组是 join(‘’)  这样就可以转换为字符串了"
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
          "text": "步骤\n • 购物车展示\n分析业务模块：\n②：更换数据 - 处理 赠品 模块\n- 获取 每个对象里面的 gift , 上面对象解构添加 gift\n注意要判断是否有gif属性，没有的话不需要渲染\n利用变成的字符串然后写到 p.name里面"
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
          "text": "步骤\n • 购物车展示\n分析业务模块：\n②：更换数据 - 处理 小计 模块\n- 小计 =  单价 *  数量\n- 小计名可以为: subTotal =  price * count \n- 注意保留2位小数\n关于小数的计算精度问题:\n0.1 + 0.2 = ?  \n解决方案： 我们经常转换为整数\n（0.1*100 + 0.2*100）/ 100  === 0.3\n这里是给大家拓展思路和处理方案"
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
          "text": "步骤\n • 购物车展示\n分析业务模块：\n③：计算 合计 模块\n- 求和用到数组 reduce 方法 累计器\n- 根据数据里面的数量和单价累加和即可\n- 注意 reduce方法有2个参数，第一个是回调函数，第二个是 初始值，这里写 0"
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
          "text": "今日\n作业\n1. 整理笔记\n2. 综合案例至少写三遍\n3. 开始做测试题： PC端地址： https://ks.wjx.top/vj/QG54lSj.aspx\n4. 明天上午总结这2天内容（重点是笔记和综合案例）\n5. 明天下午预习第三天内容"
        }
      ]
    }
  ]
};
