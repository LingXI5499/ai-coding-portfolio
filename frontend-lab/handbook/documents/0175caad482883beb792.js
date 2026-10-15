window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["0175caad482883beb792"] = {
  "id": "0175caad482883beb792",
  "title": "day05-CSS进阶.xmind",
  "treatment": "思维导图主题树",
  "sections": [
    {
      "title": "主题树",
      "level": 1,
      "blocks": [
        {
          "type": "text",
          "text": "画布 1\nday05-CSS进阶\n目标\n掌握复合选择器作用和写法\n使用background属性添加背景效果\n技术点\n复合选择器\n后代\n父   子 {}\n选中所有后代\n子代\n父 > 子 {}\n只选儿子\n并集\n选择器1，选择器2... {}\n选中多组标签设置相同样式\n交集：选中同时满足多个条件的元素\n伪类\n伪类表示元素状态，选中元素的某个状态设置样式\n选择器:hover { CSS 属性 }\nCSS特定\n继承性\n子级默认继承父级的文字控制属性\n特殊情况\n超链接的颜色会继承失败\n标题的字体大小会继承失败\n层叠性\n- 相同的属性会覆盖：后面的 CSS 属性覆盖前面的 CSS 属性\n- 不同的属性会叠加：不同的 CSS 属性都生效\n优先级\n概念：也叫权重，当一个标签使用了多种选择器时，基于不同种类的选择器的匹配规则，优先级越高的样式生效\n基础选择器\n公式：通配符选择器 < 标签选择器 < 类选择器 < id选择器 < 行内样式 < !important\n叠加计算\n公式\n规则\n- 从左向右依次比较选个数，同一级个数多的优先级高，如果个数相同，则向后比较\n-!important 权重最高\n- 继承权重最低\n拓展：emmet\nbackground\n背景色\nbackground-color\n背景图\nbackground-image：url();\n平铺方式\nbackground-repeat\nno-preat\n背景图位置\nbackground-position\n方向英文单词\npx\n背景图固定\nbackground-attachment：fixed；\n背景图缩放\nbackground-size\ncover：等比例缩放背景图片以完全覆盖背景区，可能背景图片部分看不见\ncontain：等比例缩放背景图片以完全装入背景区，可能背景区部分空白\n复合属性\n背景色 背景图 背景图平铺方式 背景图位置/背景图缩放  背景图固定（**空格隔开各个属性值，不区分顺序**）\n显示模式\n块级\n- 独占一行\n- 宽度默认是父级的100%\n- 添加宽高属性生效\n行内\n- 一行可以显示多个\n- 设置宽高属性不生效\n- 宽高尺寸由内容撑开\n行内块\n- 设置宽高属性生效\n- 宽高尺寸也可以由内容撑开\n转换显示模式\ndisplay\nblock：块级\ninline：行内\ninline-block：行内块\n综合案例\n新闻热词\n效果图\nbanner"
        }
      ]
    }
  ]
};
