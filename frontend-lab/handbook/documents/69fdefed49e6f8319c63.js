window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["69fdefed49e6f8319c63"] = {
  "id": "69fdefed49e6f8319c63",
  "title": "JavaScript进阶第三天.xmind",
  "treatment": "思维导图主题树",
  "sections": [
    {
      "title": "主题树",
      "level": 1,
      "blocks": [
        {
          "type": "text",
          "text": "JS高级\nJS进阶(含ES6)\nday03-深入面向对象\n目标：理解面向对象思想，掌握函数原型对象，运用面向对象封装继承特点，封装确认框对话框功能\n编程思想\n面向过程介绍\n面向对象介绍\n继承性\n封装性\n多态性\n概括，面向对象和面向对象的优缺点\n面向过程\n优点： 性能好\n缺点： 不灵活、复用性\n面向对象\n优点： 灵活、复用好\n缺点： 性能不好\n构造函数\n创建的实例对象和字面量一样，但是相互独立互不影响，体现面向对象的封装特征\n理解构造函数中函数会多次创建，占用内存，引出把函数单独存储起来\n原型\n构造函数.prototype\n是个对象，可以挂载函数，对象实例化不会多次创建原型上函数，节约内存\n实例对象可直接访问原型对象中函数，与分析\n先找实例对象属性或函数，再找原型对象中属性或函数\n构造函数.prototype.constructor\n指向该原型对象对应的构造函数\n构造函数和原型对象里面的this指向谁？\n实例化的对象\n案例：给数组扩展方法\n实例对象.__proto__\nJS非标准属性\n[[prototype]]和__proto__意义相同\n只读的，只能获取不能赋值\n用来表明当前实例对象指向哪个原型对象prototype\n对象原型(__proto__)指向原型对象 prototype\n原型继承\n字面量对象继承，缺点：会覆盖不独立\n构造函数实例化对象继承\n原型链\n__proto__属性链状结构\ninstanceof\n用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上\n两句话\n所有的对象里面都有 __proto__ 对象原型 指向原型对象\n所有的原型对象里面有 constructor， 指向 创造改原型对象的构造函数\n综合案例：消息提示对象封装"
        }
      ]
    }
  ]
};
