window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["aef0b94f59e9d331e0bb"] = {
  "id": "aef0b94f59e9d331e0bb",
  "title": "作业.md",
  "treatment": "章节知识与练习",
  "sections": [
    {
      "title": "导读",
      "trail": [],
      "level": 0,
      "line": 1,
      "blocks": [
        {
          "type": "text",
          "text": "1.下列选项中关于深浅拷贝说法错误的是？ (D)\n\n\n\nA：直接赋值对象的方法，只要是对象，都会相互影响，因为是直接拷贝对象栈里面的地址\n\n\n\nB：浅拷贝时，对象属性值是简单数据类型直接拷贝值，如果属性值是引用数据类型则拷贝的是地址\n\n\n\nC：深拷贝拷贝的是对象，不是地址，所以不会相互影响了\n\n\n\nD：我们可以采取函数递归的方式完成浅拷贝\n\n\n\n2.下列选项中关于函数递归说法错误的是？ (C)\n\n\n\nA：如果一个函数在内部可以调用其本身，那么这个函数就是递归函数\n\n\n\nB：递归函数的作用和循环效果类似，不断的自己调用自己\n\n\n\nC：由于递归很容易发生“栈溢出”错误（stack overflow），所以必须要加退出条件  break\n\n\n\nD：我们可以利用递归函数实现 setTimeout 模拟 setInterval效果\n\n\n\n3.下列选项中可以完成深拷贝的是？ (ABC)\n\n\n\nA：通过递归函数实现深拷贝\n\n\n\nB：利用js库lodash里面cloneDeep内部实现了深拷贝\n\n\n\nC：通过JSON.stringify() 转换字符串，再利用 JSON.parse() 方法转换为对象可以完成深拷贝\n\n\n\nD：可以采取bind方法完成深拷贝\n\n\n\n4.下列选项中throw抛异常说法错误的是？ (A)\n\n\n\nA：throw 抛出异常信息，但是我们必须加 return 来终止程序的往下执行\n\n\n\nB： throw 后面跟的是错误提示信息\n\n\n\nC：Error 对象配合 throw 使用，能够设置更详细的错误信息\n\n\n\nD：Error 对象配合 throw 控制台显示的提示可以为红色更警示\n\n\n\n5.下列选项中 try/catch捕获错误信息 说法错误的是？ (A)\n\n\n\nA：将预估可能发生错误的代码写在 catch 代码段中\n\n\n\nB：如果 try 代码段中出现错误后，会执行 catch 代码段，并截获到错误信息\n\n\n\nC：我们需要给catch 添加 return 可以终止程序继续执行\n\n\n\nD：finally  不管是否有错误，都会执行 \n\n\n\n6.下列选项中 关于this指向说法错误的是？ (D)\n\n\n\nA：普通函数this指向我们理解为谁调用 this 的值指向谁\n\n\n\nB：定时器中的this 指向 window\n\n\n\nC：箭头函数中的 this 与普通函数完全不同，也不受调用方式的影响，事实上箭头函数中并不存在 this\n\n\n\nD：箭头函数中没有this， 是沿用 window，简单说，箭头函数的this 指向window\n\n\n\n7.下列选项中 可以改变this指向的方法是？ (ABC)\n\n\n\nA：call()\n\n\n\nB：bind()\n\n\n\nC：apply()\n\n\n\nD：catch()\n\n\n\n8.下列选项中说法错误的是？ (D)\n\n\n\nA：call 和 apply  会调用函数, 并且改变函数内部this指向\n\n\n\nB：bind  不会调用函数, 可以改变函数内部this指向，它也是主要用来改变this指向的\n\n\n\nC：call 和 apply 传递的参数不一样, call 传递参数 aru1, aru2..形式  apply 必须数组形式[arg]\n\n\n\nD： apply 主要使用场景是可以改变定时器的this指向，并且不调用函数\n\n\n\n9.下列选项中关于节流和防抖说法正确的是？ (ABCD)\n\n\n\nA：节流: 就是指连续触发事件但是在 n 秒中只执行一次函数,比如可以利用节流实现 1s之内只能触发一次鼠标移动事件\n\n\n\nB：防抖：如果在 n 秒内又触发了事件，则会重新计算函数执行时间\n\n\n\nC：节流应用场景: 鼠标移动，页面尺寸发生变化，滚动条滚动等开销比较大的情况下\n\n\n\nD：防抖应用场景：搜索框输入"
        }
      ]
    }
  ]
};
