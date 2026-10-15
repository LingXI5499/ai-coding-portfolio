window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["fcf191f7634cd377b033"] = {
  "id": "fcf191f7634cd377b033",
  "title": "JavaScript高级第一天.xmind",
  "treatment": "思维导图主题树",
  "sections": [
    {
      "title": "主题树",
      "level": 1,
      "blocks": [
        {
          "type": "text",
          "text": "JS高级\nJS进阶 第一天\nday01-作用域&解构&箭头函数\n目标：掌握作用域及闭包概念加深对JS理解，学习ES6新特性让代码书写更加简洁便利。\n作用域\n全局作用域\n尽量少使用，避免变量污染\n局部作用域\n函数作用域\n块级作用域\n作用域链\n底层变量查找机制\n闭包\n概念：一个函数对周围状态的引用捆绑在一起，内层函数中访问到其外层函数的作用域\n示例：给出示例代码进行解释\n内层函数+外层函数的变量\n外部可以访问函数内部的变量，可以实现变量的私有\n内存泄漏\n预解析（了解）\n变量提升 var\n函数提升\n建议：使用let或者const，遵循先声明后使用\n箭头函数\n各种写法\nconst fn = () => {} \nconst fn = x => {}\nconst fn = (x,y) => x + y\n一行代码写法\nconst fn = (x,y) => ({x,y})\n返回对象特殊写法\n动态参数\n普通函数：arguments\n没有arguments，使用剩余参数写法...args\nthis问题\n箭头函数没有this沿用上级作用域this\n剩余与展开\n剩余：解构中使用，函数参数使用\n展开：数组展开，对象展开\n解构赋值\n数组解构\n对象解构\n变量重命名\n多级解构\n案例：商品渲染\n综合案例：商品列表价格筛选"
        }
      ]
    }
  ]
};
