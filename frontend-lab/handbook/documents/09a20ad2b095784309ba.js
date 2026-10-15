window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["09a20ad2b095784309ba"] = {
  "id": "09a20ad2b095784309ba",
  "title": "day05-盒子模型.xmind",
  "treatment": "思维导图主题树",
  "sections": [
    {
      "title": "主题树",
      "level": 1,
      "blocks": [
        {
          "type": "text",
          "text": "画布 1\nday05-盒子模型\n目标\n掌握盒子模型组成部分\n使用盒子模型布局网页区域\n技术点\n选择器\n结构伪类\nE:first-child\nE:last-child\nE:nth-child(N)\n伪元素\n::before\n在某元素里面最前端添加一个伪元素\n::after\n在某元素李曼最后面添加一个伪元素\n注意\n- 必须设置 content: ””属性，用来 设置伪元素的内容，如果没有内容，则引号留空即可\n- 伪元素默认是行内显示模式\n- 权重和标签选择器相同\n盒子模型\n盒子模型基本组成\n内容\nwidth\nheight\n外边距：margin\n边框线：border\n内边距：padding\nborder\n四个方向\nborder:边框线粗细  线条样式  颜色（不区分顺序）\n单独方向\nborder-方向英文单词\nleft\nright\ntop\nbottom\n內减模式\nbox-sizing: border-box\npadding\npadding-方向英文单词\n多值写法\n写法\n技巧：从上开始顺时针赋值，当前方向没有数值则与对面取值相同\nmargin\n版心居中\nmargin左右为auto\n盒子有宽度\n清除默认样式\n内边边距\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\n列表项目符号\nli {\\n  list-style: none;\\n}\n外边距问题\n合并\n垂直排列的兄弟元素，上下margin会合并，取两者之间较大值\n塌陷\n父子级标签，子级添加上外边距会产生塌陷问题，导致父级一起向下移动\n解决\n父级加padding\n父级加border-top\n父级加overflow：hidden\noverflow 属性\nhidden：隐藏\n内边距问题\n行内元素的垂直内外边距无法改变垂直位置，可通过行高解决\n圆角\n圆形\nbordr-radius：50%；\n胶囊\nborder-radius：高度的一半;\n阴影\nbox-shadow:X 轴偏移量  Y 轴偏移量  模糊半径  扩散半径  颜色  内外阴影;\n综合案例\n产品卡片\n效果图\n新闻列表"
        }
      ]
    }
  ]
};
