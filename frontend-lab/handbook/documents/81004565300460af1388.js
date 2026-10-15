window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["81004565300460af1388"] = {
  "id": "81004565300460af1388",
  "title": "作业.md",
  "treatment": "章节知识与练习",
  "sections": [
    {
      "title": "客观题",
      "trail": [
        "js进阶第三天作业",
        "客观题"
      ],
      "level": 2,
      "line": 5,
      "blocks": [
        {
          "type": "text",
          "text": "1.下面关于编程思想说法错误的是? (D)\n\n\n\n A： 面向过程就是分析出解决问题所需要的步骤，然后用函数把这些步骤一步一步实现，使用的时候再一个一个的依次调用就可以了\n\n\n\n B：面向对象是把事务分解成为一个个对象，然后由对象之间分工与合作\n\n\n\n C： 面向过程编程性能比面向对象高，但是没有面向对象易维护、易复用、易扩展\n\n\n\n D：面向对象编程 易维护、易复用、易扩展，性能也比面向过程高\n\n\n\n2.下面是面向对象编程特性的是? (ABC)\n\n\n\n A：封装性 \n\n\n\n B：继承性\n\n\n\n C：多态性\n\n\n\n D：优先级\n\n\n\n3.原型（原型对象）是? (B)\n\n\n\n A：Object\n\n\n\n B：prototype\n\n\n\n C： _ __proto____\n\n\n\n D：consturctor\n\n\n\n4.原型（原型对象）的作用说法错误的是? (D)\n\n\n\n A：构造函数通过原型分配的函数是所有对象所 共享的\n\n\n\n B：JavaScript 规定，每一个构造函数都有一个 prototype 属性，指向另一个对象，所以我们也称为原型对象\n\n\n\n C： 我们可以把那些不变的方法，直接定义在 prototype 对象上，这样所有对象的实例就可以共享这些方法\n\n\n\n D：原型经常挂载函数，但是比较耗费内存\n\n\n\n5.关于构造函数和原型对象里面this指向说法正确的是? (A)\n\n\n\n A：构造函数和原型对象中的this 都指向 实例化的对象\n\n\n\n B：构造函数的this指向window\n\n\n\n C： 原型对象的this指向构造函数\n\n\n\n D：构造函数和实例对象里面没有this，跟箭头函数一样 \n\n\n\n6.下面关于constructor 属性说法正确的是? (ABCD)\n\n\n\n A：每个原型对象里面都有个constructor 属性\n\n\n\n B：原型对象里面都有个constructor 属性指向该原型对象的构造函数\n\n\n\n C： 对象原型__proto__里面也有一个constructor属性，指向创建该实例对象的构造函数\n\n\n\n D：原型对象constructor属性的使用场景：可以重新指回指向原来的构造函数\n\n\n\n7.对象原型是? (C)\n\n\n\n  A：Object\n\n\n\n B：prototype\n\n\n\n C： _ __proto____\n\n\n\n D：consturctor\n\n\n\n8.为什么实例对象可以访问构造函数的原型对象中的属性和方法呢？ (A)\n\n\n\n  A：因为实例对象里面有对象原型  _ __proto____ 它指向原型对象\n\n\n\n B：因为实例对象有constructor 指向原型对象\n\n\n\n C： 因为实例对象有 this指向原型对象\n\n\n\n D：没啥原因，反正就是能....\n\n\n\n9.下列选项中关于原型链说法正确的是？ (ABCD)\n\n\n\n  A：对象原型的意义就在于为对象成员查找机制提供一个方向，或者说一条路线\n\n\n\n B：当访问一个对象的属性（包括方法）时，首先查找这个对象自身有没有该属性\n\n\n\n C：如果没有就查找它的原型（也就是 __proto__指向的 prototype 原型对象）\n\n\n\n D：如果还没有就查找原型对象的原型（Object的原型对象）依此类推一直找到 Object 为止（null）\n\n\n\n10.下列选项中关于原型继承说法正确的是？ (ABC)\n\n\n\n  A：核心是子类原型继承父类的实例： Man.prototype = new Person()\n\n\n\n B：父类新增原型方法或是原型属性子类都可以访问到\n\n\n\n C：Man.prototype = new Person()   其中 new Person() 生成一个对象，并且是独立的，互不影响"
        }
      ]
    },
    {
      "title": "主观题",
      "trail": [
        "js进阶第三天作业",
        "主观题"
      ],
      "level": 2,
      "line": 205,
      "blocks": [
        {
          "type": "text",
          "text": "见附件\n\n\n\n D：Man = new Person()    其实也可以的"
        }
      ]
    }
  ]
};
