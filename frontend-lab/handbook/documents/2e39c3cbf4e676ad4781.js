window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["2e39c3cbf4e676ad4781"] = {
  "id": "2e39c3cbf4e676ad4781",
  "title": "web APIs 第三天.xmind",
  "treatment": "思维导图主题树",
  "sections": [
    {
      "title": "主题树",
      "level": 1,
      "blocks": [
        {
          "type": "text",
          "text": "Web APIs\nWeb APIs 第三天\nday03-Dom事件进阶\n目标：学习事件流，事件委托，其他事件等知识，优化多个事件绑定和实现常见网页交互\n事件流\n过程: 事件捕获 => 事件目标阶段 => 事件冒泡  整个完整的过程就是事件流\n实际工作都是使用事件冒泡为主\n事件捕获\n概念: 从DOM的根元素开始去执行对应的事件 (从外到里)\n捕获机制必须使用事件监听的形式注册\nDOM.addEventListener(事件类型, 事件处理函数, 是否使用捕获机制)\n事件冒泡\n概念: 当一个元素的事件被触发时，同样的事件将会在该元素的所有祖先元素中依次被触发。这一过程被称为事件冒泡\n事件冒泡的必要性\n如果没有冒泡.给大盒子注册点击事件, 点击的是里面的小盒子,会导致大盒子的点击无法执行 \n事件委托\n自己不注册事件,将对应的事件注册给祖先元素,减少事件的注册,提高效率\n阻止事件冒泡\n1. 先要明确那一块区域不能冒泡\n2. 需要阻止什么事件传递就给这块区域的最大盒子注册该事件\n3. 在事件处理函数里面接受事件对象, 并添加上e.stopPropagation()\n阻止冒泡\ne.stopPropagation()\ne.preventDefault()\n链接的跳转，表单域跳转\n解绑事件\non事件方式，直接使用null覆盖偶就可以实现事件的解绑\naddEventListenerf方式，必须使用removeEventListener(事件类型, 事件处理函数, 获取捕获或者冒泡阶段)\n匿名函数无法被解绑\n优点：\n提高了性能，场景：多个事件\n原理：\n利用冒泡， 事件侦听加给父元素\n触发的目标元素 e.target.tagName = 'LI'\n案例：tab栏切换改造\n其他事件\n页面加载事件\n加载外部资源（如图片、外联CSS和JavaScript等）加载完毕时触发的事件\n当初始的 HTML 文档被完全加载和解析完成之后，DOMContentLoaded 事件被触发，而无需等待样式表、图像等完全加载\n\n\n元素滚动事件\n滚动条在滚动的时候持续触发的事件\nwindow.addEventListener('scroll', fn)\nscrollTop, scrollLeft\n获取被卷去的大小\n尽量在scroll事件里面获取被卷去的距离\nelement.scrollTo(0, 1000)\n同时可以移动top和left\n案例：返回顶部\n页面尺寸事件\n给window注册尺寸改变事件\nwindow.addEventListener('resize', fn)\nclient家族\nclientWidth，clientHeight\nclientTop，clientLeft\n案例：rem基准值\n元素尺寸与位置\n可视宽高\noffsetWidth，offsetHeight\n注意: 获取的是可视宽高, 如果盒子是隐藏的,获取的结果是0\n特征\n获取出来的是数值,方便计算\n只读属性,只能使用,不能设置\n位置\noffsetTop，offsetLeft\n获得元素在页面中的位置（父元素不能有定位）\n基于最近的带有定位的父亲\ngetBoundingClientRect\n相对于视口（可视区）\n综合案例：电梯导航"
        }
      ]
    }
  ]
};
