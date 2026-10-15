window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["dd887168648ca9fc65d7"] = {
  "id": "dd887168648ca9fc65d7",
  "title": "JavaScript进阶第四天.xmind",
  "treatment": "思维导图主题树",
  "sections": [
    {
      "title": "主题树",
      "level": 1,
      "blocks": [
        {
          "type": "text",
          "text": "JS高级\nJS进阶(含ES6)\nday04-高阶技巧\n掌握ES6的class用法，创建对象；深入this学习，知道如何判断this指向和改变this指向，知道在JS中如何处理异常，学习深浅拷贝，理解递归\n深浅拷贝\n浅拷贝：Object.assgin() {...obj} Array.prototype.concat() [...arr]\n递归：函数自己调用自己\n深拷贝\n通过递归实现深拷贝\n深拷贝拷贝多层\n实现思路借助于 递归函数\n如果遇到数组，则递归\n如果遇到对象，则递归\n拷贝的新对象不会影响旧对象\nlodash\n_.cloneDeep(obj)\n通过JSON.stringify()实现\n异常处理\nthrow 抛异常\n会中断程序\ntry {}catch(e){} 捕获异常\n可能出现的错误代码放到try\ncatch里面有参数，可以捕获错误信息  err.message\nfinally\n不管有没有错误都会执行\ndebugger\n处理this\nthis指向\n普通函数\n谁调用指向谁\n没调用者指向window，严格模式下指向undefined\n箭头函数\n函数内不存在this，沿用上一级的，上一级没有继续往上找，直到找到有this的地方\n不适用\n构造函数，原型函数，字面量对象中函数，dom事件函数\n适用\n需要使用上层this的地方\n使用正确的话，它会在很多地方带来方便，后面我们会大量使用慢慢体会\n改变指向\ncall\nfun.call(this，arg1, arg2,......)\napply\nfun.apply(this, [arg1, arg2,......])\nbind\nfun.bind(this, arg1, arg2,......) 不立即执行\n总结：相同和区别\n性能优化\n防抖\n指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了，则会重新计算函数执行时间\n节流\n指连续触发事件但是在 n 秒中只执行一次函数\n综合案例：视频页面\nlodash/throttle（播放位置记录）"
        }
      ]
    }
  ]
};
