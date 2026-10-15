window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["3c5919227cd4ed9e37b1"] = {
  "id": "3c5919227cd4ed9e37b1",
  "title": "JavaScript高级第四天.pdf",
  "treatment": "课件页级文本（配图回溯原件）",
  "sections": [
    {
      "title": "第1页",
      "level": 1,
      "page": 1,
      "blocks": [
        {
          "type": "text",
          "text": "JavaScript 高级第四天\n高阶技巧"
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
          "text": "学习目标\nLearning Objectives\n1. 深入this学习，知道如何判断this指向和改变this指向\n2. 知道在JS中如何处理异常，学习深浅拷贝，理解递归"
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
          "text": "目录\nContents\n 深浅拷贝\n 异常处理\n 处理this\n 性能优化\n 综合案例"
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
          "text": "深浅拷贝\n• 浅拷贝\n• 深拷贝\n01"
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
          "text": "1. 深浅拷贝\n开发中我们经常需要复制一个对象。如果直接用赋值会有下面问题：\n这好比有同学来pink老师这里拷视频，竟然用的是剪切…气人不"
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
          "text": "深浅拷贝\n• 浅拷贝\n• 深拷贝\n01"
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
          "text": "1.1 浅拷贝\n首先浅拷贝和深拷贝只针对引用类型\n浅拷贝：拷贝的是地址\n常见方法：\n1. 拷贝对象：Object.assgin() / 展开运算符 {...obj} 拷贝对象\n2.拷贝数组：Array.prototype.concat()   或者 [...arr]\n但是还有问题…."
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
          "text": "1.1 浅拷贝\n如果是简单数据类型拷贝值，引用数据类型拷贝的是地址 (简单理解： 如果是单层对象，没问题，如果有多层就有问题)"
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
          "text": "总结总结\n1. 直接赋值和浅拷贝有什么区别？\n 直接赋值的方法，只要是对象，都会相互影响，因为是直接拷贝对\n象栈里面的地址\n 浅拷贝如果是一层对象，不相互影响，如果出现多层对象拷贝还会\n相互影响\n2. 浅拷贝怎么理解？\n 拷贝对象之后，里面的属性值是简单数据类型直接拷贝值\n 如果属性值是引用数据类型则拷贝的是地址"
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
          "text": "深浅拷贝\n• 浅拷贝\n• 深拷贝\n01"
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
          "text": "1.2 深拷贝\n首先浅拷贝和深拷贝只针对引用类型\n深拷贝：拷贝的是对象，不是地址\n常见方法：\n1. 通过递归实现深拷贝\n2. lodash/cloneDeep\n3.   通过JSON.stringify()实现"
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
          "text": "1.2 深拷贝\n常见方法：\n1. 通过递归实现深拷贝\n函数递归：\n如果一个函数在内部可以调用其本身，那么这个函数就是递归函数\n 简单理解:函数内部自己调用自己, 这个函数就是递归函数\n 递归函数的作用和循环效果类似\n 由于递归很容易发生“栈溢出”错误（stack overflow），所以必须要加退出条件 return"
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
          "text": "1.2 深拷贝\n常见方法：\n1. 通过递归实现深拷贝\n函数递归：\n如果一个函数在内部可以调用其本身，那么这个函数就是递归函数"
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
          "text": "1.2 深拷贝\n函数递归：\n利用递归函数实现 setTimeout 模拟 setInterval效果"
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
          "text": "练习\n • 利用递归函数实现 setTimeout 模拟 setInterval效果\n需求：\n①：页面每隔一秒输出当前的时间\n②：输出当前时间可以使用：new Date().toLocaleString()"
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
          "text": "练习\n • 利用递归函数实现 setTimeout 模拟 setInterval效果\n需求：\n①：页面每隔一秒输出当前的时间\n②：输出当前时间可以使用：new Date().toLocaleString()"
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
          "text": "1.2 深拷贝\n常见方法：\n1. 通过递归函数实现深拷贝（简版）"
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
          "text": "1.2 深拷贝\n常见方法：\n2.  js库lodash里面cloneDeep内部实现了深拷贝"
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
          "text": "1.2 深拷贝\n常见方法：\n3. 通过JSON.stringify()实现"
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
          "text": "总结总结\n1. 实现深拷贝三种方式？\n 自己利用递归函数书写深拷贝\n 利用js库 lodash里面的 _.cloneDeep() \n 利用JSON字符串转换"
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
          "text": "目录\nContents\n 深浅拷贝\n 异常处理\n 处理this\n 性能优化\n 综合案例"
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
          "text": "异常处理\n• throw 抛异常\n• try /catch 捕获异常\n• debugger\n02\n了解 JavaScript 中程序异常处理的方法，提升代码运行的健壮性。"
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
          "text": "2.1 throw 抛异常\n异常处理是指预估代码执行过程中可能发生的错误，然后最大程度的避免错误的发生导致整个程序无法继续运行\n总结：\n1. throw 抛出异常信息，程序也会终止执行\n2. throw 后面跟的是错误提示信息\n3. Error 对象配合 throw 使用，能够设置更详细的错误信息"
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
          "text": "总结总结\n1. 抛出异常我们用那个关键字？它会终止程序吗？\n throw 关键字\n 会中止程序\n2. 抛出异常经常和谁配合使用？\n Error 对象配合 throw 使用"
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
          "text": "异常处理\n• throw 抛异常\n• try /catch 捕获异常\n• debugger\n02\n了解 JavaScript 中程序异常处理的方法，提升代码运行的健壮性。"
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
          "text": "2.2 try/catch 捕获错误信息\n我们可以通过try / catch 捕获错误信息（浏览器提供的错误信息） try 试试 catch 拦住 finally  最后\n总结：\n1. try...catch 用于捕获错误信息\n2. 将预估可能发生错误的代码写在 try 代码段中\n3. 如果 try 代码段中出现错误后，会执行 catch 代码段，并截获到错误信息\n4. finally  不管是否有错误，都会执行"
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
          "text": "总结总结\n1. 捕获异常我们用那3个关键字？可能会出现的错误代码写到谁里面\n try catch  finally\n try\n2. 怎么调用错误信息？\n 利用catch的参数"
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
          "text": "异常处理\n• throw 抛异常\n• try /catch 捕获异常\n• debugger\n02\n了解 JavaScript 中程序异常处理的方法，提升代码运行的健壮性。"
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
          "text": "2.3 debugger\n我们可以通过try / catch 捕获错误信息（浏览器提供的错误信息）"
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
          "text": "目录\nContents\n 深浅拷贝\n 异常处理\n 处理this\n 性能优化\n 综合案例"
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
          "text": "处理this\n• this指向\n• 改变this\n03"
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
          "text": "3.1 处理this\nthis 是 JavaScript 最具“魅惑”的知识点，不同的应用场合 this 的取值可能会有意想不到的结果，在此我们对以往学习\n过的关于【 this 默认的取值】情况进行归纳和总结。\n目标： 了解函数中 this 在不同场景下的默认值，知道动态指定函数 this 值的方法\n学习路径：\n1. 普通函数this指向\n2. 箭头函数this指向"
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
          "text": "3.1 this指向-普通函数\n目标： 能说出普通函数的this指向\n普通函数的调用方式决定了 this 的值，即【谁调用 this 的值指向谁】\n普通函数没有明确调用者时 this 值为 window，严格模式下没有调用者时 this 的值为 undefined"
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
          "text": "总结总结\n1. 普通函数this指向我们怎么记忆？\n 【谁调用 this 的值指向谁】\n2. 普通函数严格模式下指向谁？\n 严格模式下指向 undefined"
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
          "text": "3.1 this指向-箭头函数\n目标： 能说出箭头函数的this指向\n箭头函数中的 this 与普通函数完全不同，也不受调用方式的影响，事实上箭头函数中并不存在 this ！\n1. 箭头函数会默认帮我们绑定外层 this 的值，所以在箭头函数中 this 的值和外层的 this 是一样的\n2.箭头函数中的this引用的就是最近作用域中的this\n3.向外层作用域中，一层一层查找this，直到有this的定义"
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
          "text": "3.1 this指向-箭头函数\n注意情况1：\n在开发中【使用箭头函数前需要考虑函数中 this 的值】，事件回调函数使用箭头函数时，this 为全局的 window\n因此DOM事件回调函数如果里面需要DOM对象的this，则不推荐使用箭头函数"
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
          "text": "3.1 this指向-箭头函数\n注意情况2：\n同样由于箭头函数 this 的原因，基于原型的面向对象也不推荐采用箭头函数\n总结：\n1. 函数内不存在this，沿用上一级的\n2.不适用\n 构造函数，原型函数，dom事件函数等等\n3. 适用\n 需要使用上层this的地方\n4. 使用正确的话，它会在很多地方带来方便，后面我们会大量使用慢慢体会"
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
          "text": "总结总结\n1. 函数内不存在this，沿用上一级的，过程：向外层作用域中，一层\n一层查找this，直到有this的定义\n2. 不适用\n构造函数，原型函数，字面量对象中函数，dom事件函数\n3. 适用\n需要使用上层this的地方"
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
          "text": "处理this\n• this指向\n• 改变this\n03"
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
          "text": "3.2 改变this\nJavaScript 中还允许指定函数中 this 的指向，有 3 个方法可以动态指定普通函数中 this 的指向\n call()\n apply()\n bind()"
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
          "text": "3.2 改变this\n1. call() –了解\n使用 call 方法调用函数，同时指定被调用函数中 this 的值\n 语法：\nfun.call(thisArg, arg1, arg2, ...) \n thisArg：在 fun 函数运行时指定的 this 值\n arg1，arg2：传递的其他参数\n 返回值就是函数的返回值，因为它就是调用函数"
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
          "text": "思考\n1. call的作用是？\n 调用函数，并可以改变被调用函数里面的this指向\n2. call 里面第一个参数是 指定this， 其余是实参，传递的参数\n整体做个了解，后期用的很少"
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
          "text": "3.2 改变this\nJavaScript 中还允许指定函数中 this 的指向，有 3 个方法可以动态指定普通函数中 this 的指向\n call()\n apply()\n bind()"
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
          "text": "3.2 改变this\n2. apply()-理解\n使用 apply 方法调用函数，同时指定被调用函数中 this 的值\n 语法：\n thisArg：在fun函数运行时指定的 this 值\n argsArray：传递的值，必须包含在数组里面\n 返回值就是函数的返回值，因为它就是调用函数\n 因此 apply 主要跟数组有关系，比如使用 Math.max() 求数组的最大值\nfun.apply(thisArg, [argsArray])"
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
          "text": "3.2 改变this\n2. apply()\n求数组最大值2个方法："
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
          "text": "思考\n1. call和apply的区别是？\n 都是调用函数，都能改变this指向\n 参数不一样，apply传递的必须是数组"
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
          "text": "3.2 改变this\nJavaScript 中还允许指定函数中 this 的指向，有 3 个方法可以动态指定普通函数中 this 的指向\n call()\n apply()\n bind()"
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
          "text": "3.2 改变this\n3. bind()-重点\n bind() 方法不会调用函数。但是能改变函数内部this 指向\n 语法：\n thisArg：在 fun 函数运行时指定的 this 值\n arg1，arg2：传递的其他参数\n 返回由指定的 this 值和初始化参数改造的 原函数拷贝 （新函数）\n 因此当我们只是想改变 this 指向，并且不想调用这个函数的时候，可以使用 bind，比如改变定时器内部的\nthis指向.\nfun.bind(thisArg, arg1, arg2, ...)"
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
          "text": "call  apply  bind 总结\n 相同点:  \n 都可以改变函数内部的this指向.\n 区别点:  \n call 和 apply  会调用函数, 并且改变函数内部this指向.\n call 和 apply 传递的参数不一样, call 传递参数 aru1, aru2..形式 apply 必须数组形式[arg]\n bind  不会调用函数, 可以改变函数内部this指向.\n 主要应用场景:  \n call 调用函数并且可以传递参数\n apply 经常跟数组有关系.  比如借助于数学对象实现数组最大值最小值\n bind  不调用函数,但是还想改变this指向. 比如改变定时器内部的this指向."
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
          "text": "目录\nContents\n 深浅拷贝\n 异常处理\n 处理this\n 性能优化\n 综合案例"
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
          "text": "性能优化\n• 防抖\n• 节流\n04"
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
          "text": "4.2 节流\n 节流（throttle）\n所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数\n 只有等到了上一个人做完核酸，整个动作完成了， 第二个人才能排队跟上"
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
          "text": "4.2 节流\n 节流（throttle）\n所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数\n 开发使用场景 – 小米轮播图点击效果 、 鼠标移动、页面尺寸缩放resize、滚动条滚动 就可以加节流\n 假如一张轮播图完成切换需要300ms， 不加节流效果，快速点击，则嗖嗖嗖的切换\n 加上节流效果， 不管快速点击多少次， 300ms时间内，只能切换一张图片。"
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
          "text": "案例\n 利用节流来处理-鼠标滑过盒子显示文字\n要求： 鼠标在盒子上移动，里面的数字就会变化+1"
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
          "text": "案例\n 利用节流来处理-鼠标滑过盒子显示文字\n要求： 鼠标在盒子上移动，里面的数字就会变化+1\n①： 如果以前方式，每次鼠标移动就会有大量操作，触发频次太高"
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
          "text": "案例\n 利用节流来处理-鼠标滑过盒子显示文字\n要求： 鼠标在盒子上移动，里面的数字就会变化+1\n利用节流的方式， 鼠标经过，500ms ，数字才显示\n核心思路：\n利用时间相减：移动后的时间 - 刚开始移动的时间 >= 500ms  我才去执行 mouseMove函数\n①： 写一个节流函数throttle ，来控制这个操作函数(mouseMove)， 500ms之后才去执行这个函数\n②:   节流函数传递2个参数， 第一个参数 mouseMove函数，第二个参数 指定时间500ms\n③： 鼠标移动事件，里面写的是节流函数"
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
          "text": "案例\n 利用节流来处理-鼠标滑过盒子显示文字\n要求： 鼠标在盒子上移动，里面的数字就会变化+1\n利用节流的方式， 鼠标经过，500ms ，数字才显示\n核心思路：\n利用时间相减：移动后的时间 - 刚开始移动的时间 >= 500ms  我才去执行 mouseMove函数\n④： 声明一个起始时间 startTime = 0\n⑤： 但是节流函数因为里面写的函数名 throttle(mouseMove, 500), 是调用函数，无法再次调用执行\n，所以需要在节流函数里面写return 函数 这样可以多次执行\n⑥：记录当前时间 now   =  Date.now()\n⑦：进行判断 如果大于等于 500ms，则执行函数， 但是千万不要忘记 让 起始时间 =  现在时间"
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
          "text": "案例\n 利用节流来处理-鼠标滑过盒子显示文字\n要求： 鼠标在盒子上移动，里面的数字就会变化+1\n利用节流的方式， 鼠标经过，500ms ，数字才显示"
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
          "text": "4.1 防抖\n 防抖（debounce）\n所谓防抖，就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间\n 举个栗子：\n北京买房政策：需要连续5年的社保，如果中间有一年断了社保，则需要从新开始计算\n比如，我 2020年开始计算，连续交5年，也就是到2024年可以买房了，包含2020年\n但是我 2024年断社保了，整年没交，则需要从2025年开始算第一年往后推5年… 也就是 2029年才能买房…"
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
          "text": "4.1 防抖\n 防抖（debounce）\n所谓防抖，就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间\n 开发使用场景- 搜索框防抖\n假设输入就可以发送请求，但是不能每次输入都去发送请求，输入比较快发送请求会比较多\n我们设定一个时间，假如300ms， 当输入第一个字符时候，300ms后发送请求，但是在200ms的时候又输入了一个字符，\n则需要再等300ms 后发送请求"
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
          "text": "案例\n 利用防抖来处理-鼠标滑过盒子显示文字\n要求： 鼠标在盒子上移动，鼠标停止之后，500ms后里面的数字就会变化+1"
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
          "text": "案例\n 利用防抖来处理-鼠标滑过盒子显示文字\n要求： 鼠标在盒子上移动，鼠标停止之后，500ms后里面的数字就会变化+1\n利用防抖的方式实现\n核心思路：\n利用定时器实现，当鼠标滑过，判断有没有定时器，还有就清除，以最后一次滑动为准开启定时器\n①： 写一个防抖函数debounce ，来控制这个操作函数(mouseMove)\n②:   防抖函数传递2个参数， 第一个参数 mouseMove函数，第二个参数 指定时间500ms\n③： 鼠标移动事件，里面写的是防抖函数\n④： 声明定时器变量 timeId\n⑤： 但是节流函数因为里面写的函数名 debounce(mouseMove, 500), 是调用函数，无法再次调用执行，\n所以需要在节流函数里面写return 函数 这样可以多次执行"
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
          "text": "案例\n 利用防抖来处理-鼠标滑过盒子显示文字\n要求： 鼠标在盒子上移动，鼠标停止之后，500ms后里面的数字就会变化+1\n利用防抖的方式实现\n核心思路：\n利用定时器实现，当鼠标滑过，判断有没有定时器，还有就清除，以最后一次滑动为准开启定时器\n⑥： 如果有定时器，则清除定时器\n⑦:    否则开启定时器， 在设定时间内，调用函数"
        }
      ]
    },
    {
      "title": "第64页",
      "level": 1,
      "page": 64,
      "blocks": [
        {
          "type": "text",
          "text": "案例\n 利用防抖来处理-鼠标滑过盒子显示文字"
        }
      ]
    },
    {
      "title": "第65页",
      "level": 1,
      "page": 65,
      "blocks": [
        {
          "type": "text",
          "text": "思考\n1. 节流和防抖的区别是？\n 节流: 就是指连续触发事件但是在 n 秒中只执行一次函数,比如\n可以利用节流实现 1s之内 只能触发一次鼠标移动事件\n 防抖：如果在 n 秒内又触发了事件，则会重新计算函数执行时\n间\n2. 节流和防抖的使用场景是？\n 节流: 鼠标移动，页面尺寸发生变化，滚动条滚动等开销比较\n大的情况下\n 防抖: 搜索框输入，设定每次输入完毕n秒后发送请求，如果期\n间还有输入，则从新计算时间"
        }
      ]
    },
    {
      "title": "第66页",
      "level": 1,
      "page": 66,
      "blocks": [
        {
          "type": "text",
          "text": "Lodash 库 实现节流和防抖"
        }
      ]
    },
    {
      "title": "第67页",
      "level": 1,
      "page": 67,
      "blocks": [
        {
          "type": "text",
          "text": "目录\nContents\n 深浅拷贝\n 异常处理\n 处理this\n 性能优化\n 节流综合案例"
        }
      ]
    },
    {
      "title": "第68页",
      "level": 1,
      "page": 68,
      "blocks": [
        {
          "type": "text",
          "text": "案例\n 页面打开，可以记录上一次的视频播放位置\n分析：\n两个事件:\n①：ontimeupdate 事件在视频/音频（audio/video）当前的播放位置发送改变时触发\n②：onloadeddata 事件在当前帧的数据加载完成且还没有足够的数据播放视频/音频（audio/video）的\n下一帧时触发\n谁需要节流？\nontimeupdate ， 触发频次太高了，我们可以设定 1秒钟触发一次"
        }
      ]
    },
    {
      "title": "第69页",
      "level": 1,
      "page": 69,
      "blocks": [
        {
          "type": "text",
          "text": "案例\n 页面打开，可以记录上一次的视频播放位置\n思路：\n1. 在ontimeupdate事件触发的时候，每隔1秒钟，就记录当前时间到本地存储\n2. 下次打开页面， onloadeddata 事件触发，就可以从本地存储取出时间，让视频从取出的时间播放，如\n果没有就默认为0s\n3. 获得当前时间 video.currentTime"
        }
      ]
    },
    {
      "title": "第70页",
      "level": 1,
      "page": 70,
      "blocks": [
        {
          "type": "text",
          "text": "案例\n 页面打开，可以记录上一次的视频播放位置\n答案："
        }
      ]
    },
    {
      "title": "第71页",
      "level": 1,
      "page": 71,
      "blocks": [
        {
          "type": "text",
          "text": "今日\n作业\n1. 整理笔记\n2. 开始做测试题： PC端地址： https://ks.wjx.top/vj/QARCGSJ.aspx\n3. 总结整个js阶段内容，重点看新语法\n4. 明天上午考试，下午预习"
        }
      ]
    }
  ]
};
