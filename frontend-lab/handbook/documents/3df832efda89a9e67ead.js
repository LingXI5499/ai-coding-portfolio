window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["3df832efda89a9e67ead"] = {
  "id": "3df832efda89a9e67ead",
  "title": "HTML+CSS day08.pdf",
  "treatment": "课件页级文本（配图回溯原件）",
  "sections": [
    {
      "title": "第1页",
      "level": 1,
      "page": 1,
      "blocks": [
        {
          "type": "text",
          "text": "CSS 第六天\n定位、CSS 高级技巧、修饰属性"
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
          "text": "定位1"
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
          "text": "定位\n作用：灵活的改变盒子在网页中的位置\n实现：\n1. 定位模式：position\n2. 边偏移：设置盒子的位置\n• left\n• right\n• top\n• bottom"
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
          "text": "相对定位\nposition: relative\n特点：\n• 不脱标，占用自己原来位置\n• 显示模式特点保持不变\n• 设置边偏移则相对自己原来位置移动\n拓展：很少单独使用相对定位，一般是与其他定位方式配合使用"
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
          "text": "绝对定位\nposition: absolute\n使用场景：子级绝对定位，父级相对定位（子绝父相）\n特点：\n• 脱标，不占位\n• 显示模式具备行内块特点\n• 设置边偏移则相对最近的已经定位的祖先元素改变位置\n• 如果祖先元素都未定位，则相对浏览器可视区改变位置"
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
          "text": "定位居中\n实现步骤：\n1. 绝对定位\n2. 水平、垂直边偏移为 50%\n3. 子级向左、上移动自身尺寸的一半\n• 左、上的外边距为 –尺寸的一半\n• transform: translate(-50%, -50%)"
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
          "text": "固定定位\nposition: fixed\n场景：元素的位置在网页滚动时不会改变\n特点：\n• 脱标，不占位\n• 显示模式具备行内块特点\n• 设置边偏移相对浏览器窗口改变位置"
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
          "text": "堆叠层级 z-index\n默认效果：按照标签书写顺序，后来者居上\n作用：设置定位元素的层级顺序，改变定位元素的显示顺序\n属性名：z-index\n属性值：整数数字（默认值为0，取值越大，层级越高）"
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
          "text": "定位-总结\n定位模式 属性值 是否脱标 显示模式 参照物\n相对定位 relative 否 保持标签原有显示模式 自己原来位置\n绝对定位 absolute 是 行内块特点 1. 已经定位的祖先元素\n2. 浏览器可视区\n固定定位 fixed 是 行内块特点 浏览器窗口"
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
          "text": "高级技巧\n• CSS 精灵\n• 字体图标\n2"
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
          "text": "CSS 精灵\nCSS 精灵，也叫 CSS Sprites，是一种网页图片应用处理方式。把网页中一些背景图片整合到一张图片文件中，再\nbackground-position 精确的定位出背景图片的位置。\n优点：减少服务器被请求次数，减轻服务器的压力，提高页面加载速度"
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
          "text": "CSS 精灵\n实现步骤：\n1. 创建盒子，盒子尺寸与小图尺寸相同\n2. 设置盒子背景图为精灵图\n3. 添加 background-position 属性，改变背景图位置\n       3.1 使用 PxCook 测量小图片左上角坐标\n       3.2 取负数坐标为 background-position 属性值（向左上移动图片位置）"
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
          "text": "案例\n CSS 精灵"
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
          "text": "字体图标：展示的是图标，本质是字体\n作用：在网页中添加简单的、颜色单一的小图标\n优点\nØ 灵活性：灵活地修改样式，例如：尺寸、颜色等\nØ 轻量级：体积小、渲染快、降低服务器请求次数\nØ 兼容性：几乎兼容所有主流浏览器\nØ 使用方便：先下载再使用\n字体图标"
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
          "text": "l iconfont 图标库：https://www.iconfont.cn/\nl 下载字体\n登录 → 素材库 → 官方图标库 → 进入图标库 → 选图标，加入购物车 → 购物车，添加至项目，确定 → 下载至\n本地\n字体图标 – 下载字体\n字体文件字体样式\nlink 引入\n字体示例"
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
          "text": "1. 引入字体样式表（iconfont.css）\n2. 标签使用字体图标类名\n1. iconfont：字体图标基本样式（字体名，字体大小等等）\n2. icon-xxx：图标对应的类名\n字体图标 – 使用字体"
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
          "text": "l 作用：项目特有的图标上传到 iconfont 图标库，生成字体\nl 上传步骤\n     上传 → 上传图标 → 选择 svg 矢量图，打开 → 提交 → 系统审核\n字体图标 – 上传矢量图"
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
          "text": "CSS 修饰属性3"
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
          "text": "垂直对齐方式 vertical-align\n属性名：vertical-align\n属性值\n图片\n空白间距"
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
          "text": "过渡 transition\n作用：可以为一个元素在不同状态之间切换的时候添加过渡效果\n属性名：transition（复合属性）\n属性值：过渡的属性  花费时间 (s)\n提示：\n• 过渡的属性可以是具体的 CSS 属性\n• 也可以为 all（两个状态属性值不同的所有属性，都产生过渡效果）\n• transition 设置给元素本身\nimg {\n  width: 200px;\n  height: 200px;\n  transition: all 1s;\n}\nimg:hover {\n  width: 500px;\n  height: 500px;\n}"
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
          "text": "透明度 opacity\n作用：设置整个元素的透明度（包含背景和内容）\n属性名：opacity\n属性值：0 – 1\n• 0：完全透明（元素不可见）\n• 1：不透明\n• 0-1之间小数：半透明"
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
          "text": "光标类型 cursor\n作用：鼠标悬停在元素上时指针显示样式\n属性名：cursor\n属性值"
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
          "text": "案例\n 轮播图\n技术点：\n1. 定位\n2. 字体图标\n3. Flex 布局"
        }
      ]
    }
  ]
};
