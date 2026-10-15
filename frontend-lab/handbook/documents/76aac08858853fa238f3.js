window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["76aac08858853fa238f3"] = {
  "id": "76aac08858853fa238f3",
  "title": "day06-Flex布局.xmind",
  "treatment": "思维导图主题树",
  "sections": [
    {
      "title": "主题树",
      "level": 1,
      "blocks": [
        {
          "type": "text",
          "text": "画布 1\nday06-Flex布局\n目标\n熟练使用 Flex 完成结构化布局\n技术点\n浮动\n标准流\n标签默认排列方式：块级独占一行，行内标签一行可以共存多个\n浮动属性\nfloat\nleft\nright\n案例\n商品布局\n效果图\n清除浮动\n浮动元素会脱标，如果父级没有高度，子级无法撑开父级高度（可能导致页面布局错乱）\n解决方案\n额外标签法\n在父元素内容的最后添加一个块级元素，设置 CSS 属性 clear: both\n单伪元素法\n1. 准备alter伪元素\n.clearfix::after {\\n  content: \\\n2. 父级使用clearfix类\n<div class=\\\n双伪元素\n1. 准备before和after伪元素\n/* before 解决外边距塌陷问题 */\\n/* 双伪元素法 */\\n.clearfix::before,\\n.clearfix::after {\\n  content: \\\noverflow法\n父级添加overflow：hidden属性\nFlex 布局\nFlex 作用及优势\nFlex 布局也叫弹性布局，是浏览器提倡的布局模型，非常适合结构化布局，提供了强大的空间分布和对齐能力。\nFlex 模型不会产生浮动布局中脱标现象，布局网页更简单、更灵活。\nFlex 组成\n组成\n弹性容器\n弹性盒子\n主轴：默认在水平方向\n侧轴：默认在垂直方向\n主轴对齐方式\njustify-content\ncenter：居中\nspace-between：间距出现在弹性盒子之间\nspace-around：间距出现在弹性盒子两侧\nspace-evenly：弹性盒子与容器之间间距都相等\n侧轴对齐方式\nalign-items\n所有弹性盒子侧轴对齐方式，加给弹性容器\nalign-self\n某个弹性盒子侧轴对齐方式，加给弹性盒子\n属性值\nstretch：拉伸\n修改主轴方向\nflex-direction\ncolumn：垂直方向\n弹性伸缩比\nflex：数字;\n占父级剩余尺寸的份数\n弹性换行\nflex-wrap：wrap\n行对齐方式\nalign-content\n综合案例\n抖音开放Api"
        }
      ]
    }
  ]
};
