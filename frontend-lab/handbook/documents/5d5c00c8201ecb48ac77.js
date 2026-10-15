window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["5d5c00c8201ecb48ac77"] = {
  "id": "5d5c00c8201ecb48ac77",
  "title": "day08-CSS高级.xmind",
  "treatment": "思维导图主题树",
  "sections": [
    {
      "title": "主题树",
      "level": 1,
      "blocks": [
        {
          "type": "text",
          "text": "画布 1\nday08-CSS高级\n目标\n掌握定位的作用及特点\n掌握 CSS 高级技巧\n技术点\n定位\n基础用法\n1. 设置定位模式\nposition\n2. 边偏移\nleft\nright\ntop\nbottom\n相对\nposition: relative\n特点\n- 不脱标，占用自己原来位置\n- 显示模式特点保持不变\n- 设置边偏移则相对自己原来位置移动\n绝对\nposition: absolute\n子级绝对定位，父级相对定位（子绝父相）\n- 脱标，不占位\n- 显示模式具备行内块特点\n- 设置边偏移则相对最近的已经定位的祖先元素改变位置\n- 如果祖先元素都未定位，则相对浏览器可视区改变位置\n居中\n步骤\n1. 绝对定位\n2. 水平、垂直边偏移为 50%\n3. 子级向左、上移动自身尺寸的一半\n- 左、上的外边距为 –尺寸的一半\n- transform: translate(-50%, -50%)\n固定\nposition: fixed\n- 设置边偏移相对浏览器窗口改变位置\nz-index\n设置定位元素的层级顺序，改变定位元素的显示顺序\n取值\n整数数字（默认值为0，取值越大，层级越高）\nCSS 精灵\n实现步骤\n1. 创建盒子，盒子尺寸与小图尺寸相同\n2. 设置盒子背景图为精灵图\n3. 添加background-position** 属性，改变背景图位置\n​       3.1 使用 PxCook 测量小图片左上角坐标\n​       3.2 取负数坐标为 background-position 属性值（向左上移动图片位置）\n案例\n效果图\n字体图标\n使用方法\n下载\nhttps://www.iconfont.cn/\n登录 → 素材库 → 官方图标库 → 进入图标库 → 选图标，加入购物车 → 购物车，添加至项目，确定 → 下载至本地 \n使用\n1.引入iconfont样式表\n2.调用类名\niconfont\nicon-xx\n上传\n上传 → 上传图标 → 选择 svg 矢量图，打开 → 提交 → 系统审核\nCSS修饰属性\n垂直对齐方式\nvertical-align\nmiddle：居中\n去掉img底部空白间距\ndisplay：block\n过渡transition\n可以为一个元素在不同状态之间切换的时候添加过渡效果\n过渡的属性  花费时间 (s)\n注意\n- 过渡的属性可以是具体的 CSS 属性\n- 也可以为 all（两个状态属性值不同的所有属性，都产生过渡效果）\n- transition 设置给元素本身\n透明度\nopacity\n属性值0-1\n- 0：完全透明（元素不可见）\n- 1：不透明\n- 0-1之间小数：半透明\n光标类型\ncursor\npointer：手\ntext：工字型\nmove：十字光标\n综合案例\n轮播图"
        }
      ]
    }
  ]
};
