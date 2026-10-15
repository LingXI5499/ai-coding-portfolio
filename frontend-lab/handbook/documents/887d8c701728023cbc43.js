window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["887d8c701728023cbc43"] = {
  "id": "887d8c701728023cbc43",
  "title": "JavaScript进阶第二天.xmind",
  "treatment": "思维导图主题树",
  "sections": [
    {
      "title": "主题树",
      "level": 1,
      "blocks": [
        {
          "type": "text",
          "text": "JS高级\nJS进阶第二天\nday02-构造函数&数据常用函数\n目标：1. 掌握基于构造函数创建对象，理解实例化过程，2. 掌握对象数组字符数字等类型的常见属性和方法，便捷完成功能。\n深入对象\n创建对象三种方式\nnew Object({ name: 'tom' })\nconst o = { name: 'tom' }\n构造函数\n语法：大写字母开头的函数\n创建实例（对象）：new 构造函数\n实例化过程\n1. 创建新空对象\n2. 构造函数this指向新对象\n3. 执行构造函数代码\n4. 返回新对象\n构造函数里面不需要写return\n是函数，创建对象用的\n2个约定\n首字母大写\n需要用new 实例化\n实例成员&静态成员\n实例成员：实例对象中的属性和方法\n静态成员：构造函数上的属性和方法\n内置构造函数\n一切皆对象\nJS中几乎所有的数据都可以基于构成函数创建\n不同的构造器创建出来的数据拥有不同的属性和方法\n引用类型\nObject，Array，RegExp，Date 等\n包装类型\nString，Number，Boolean 等\nObject\nassign \n合并一个多个对象到目标对象，并返回目标对象\nkeys\n获取对象中所有key集合，数组\nvalues\n获取对象中所有的值集合，数组\nArray\n常用方法（高阶函数）\nforEach filter map reduce  find every\n其他\nfind findIndex every some splice join sort reverse concat\nArray.from()\n将伪数组转为数组\nString\n常用方法\nsplit  startsWith  includes  substring\ntoUpperCase toLowerCase indexOf \nlength长度属性，String()直接使用转字符串\nnum.toString()  \n转换为字符串\nNumber\nNumber() 直接使用传数字\ntoFixed() 设置保留小数位的长度\n综合案例：购物车展示"
        }
      ]
    }
  ]
};
