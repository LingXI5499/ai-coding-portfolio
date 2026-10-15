window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["f5f7ccef5204a12e1a3b"] = {
  "id": "f5f7ccef5204a12e1a3b",
  "title": "web APIs 第四天.xmind",
  "treatment": "思维导图主题树",
  "sections": [
    {
      "title": "主题树",
      "level": 1,
      "blocks": [
        {
          "type": "text",
          "text": "Web APIs\nday04-Dom节点&移动端滑动\n目标: 掌握节点(标签)的增删改查，具备编写微博发布案例的能力\n日期对象\n1. 获取日期对象\nnew Date()\n实例化\n2. 获取日期对象的每一个部分\ngetFullYear()\ngetMonth() + 1\ngetDate()\ngetHours()\ngetMinutes()\ngetSeconds()\n3. 补0函数的制作\n将小于10的数值连上一个字符串的0\n案例： 倒计时\n节点操作\n节点-查\n针对的找亲戚返回的都是对象\n父级: parentNode\n子集: children\n伪数组\n遍历\n兄弟\nnextElementSibling\npreviousElementSibling\n节点-增\n创建新节点\ndocument.createElement(标签名称)\n追加节点\nparent.appendChild(child)\n将child的元素添加到parent元素里面去(最后面)\nparent.insertBofore(child, refChild)\n将child元素添加到refChild的前面去\n如果refChild元素获取不到, 会默认以appendChild形式添加\n追加的节点可以是新创建的 也可以是页面上已经存在 (移动)\n节点-删\nparent.removeChild(child)\n案例：学成在线\n划重点：createElement，appendChild\nM端事件\ntouch相关事件\ntouchstart\n触摸开始\ntouchmove\n滑动中\ntouchend\n手指离开\nJS插件\n插件: 就是别人写好的一些代码,我们只需要复制对应的代码,就可以直接实现对应的效果\n学习插件的基本过程\n熟悉官网,了解这个插件可以完成什么需求\nhttps://www.swiper.com.cn/ \n看在线演示,找到符合自己需求的demo\nhttps://www.swiper.com.cn/demo/index.html\n查看基本使用流程\nhttps://www.swiper.com.cn/usage/index.html\n查看APi文档,去配置自己的插件\nhttps://www.swiper.com.cn/api/index.html\n注意: 多个swiper同时使用的时候, 类名需要注意区分\n可以支持移动端滑动效果\n案例：移动端轮播图"
        }
      ]
    }
  ]
};
