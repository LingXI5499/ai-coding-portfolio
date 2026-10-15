window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["a06915a268672b96e6fc"] = {
  "id": "a06915a268672b96e6fc",
  "title": "day08.md",
  "treatment": "章节知识与练习",
  "sections": [
    {
      "title": "导读",
      "trail": [],
      "level": 0,
      "line": 1,
      "blocks": [
        {
          "type": "text",
          "text": "1. 关于绝对定位、固定定位、相对定位和静态定位，下列说法错误的是(A)\n\n\n\n   A. 固定定位的元素会跟随浏览器滚动条进行滚动\n\n\n\n   B. 绝对定位的元素会参考设置了定位(非静态)的父元素或者祖级元素进行定位对齐\n\n\n\n   C. 静态定位是元素的默认定位方式，不需要设置\n\n\n\n   D. 相对定位的元素保留自身在标准流中的位置，并且为绝对定位的子元素提供参考\n\n\n\n\n\n\n\n2. 关于绝对定位、固定定位、相对定位和静态定位，下列说法正确的是(B)\n\n\n\n   A. 固定定位会参考设置了定位的父元素进行对齐\n\n\n\n   B. 相对定位会参考元素本身在标准流以前的位置进行定位\n\n\n\n   C. 静态定位可以设置 top 、left、right、 bottom值\n\n\n\n   D. 绝对定位只会根据浏览器可视区域定位\n\n\n\n\n\n\n\n3. 下列关于定位属性及特点说法正确的是 (A)\n\n\n\n   A. 绝对定位的元素会参考设置了相对定位的父元素进行定位\n\n\n\n   B. 固定定位会参考设置了定位的父元素进行定位\n\n\n\n   C. 相对定位是指元素相对浏览器的可视区进行定位\n\n\n\n   D. 设置了绝对定位的行内元素不能设置高度和垂直方向的内外边距\n\n\n\n\n\n\n\n4. 以下选项，哪个是相对定位属性(B)\n\n\n\n   A. position: static;\n\n\n\n   B. position: relative;\n\n\n\n   C. position: absolute;\n\n\n\n   D. position: fixed;\n\n\n\n\n\n\n\n5. 以下关于相对定位的描述，合理的是(D)\n\n\n\n   A. 相对定位在布局中经常单独使用\n\n\n\n   B. 相对定位一般与固定定位配合使用\n\n\n\n   C. 项目布局中，基本不会使用相对定位\n\n\n\n   D. 相对定位大多数使用与绝对定位配合，组成子绝父相\n\n\n\n\n\n\n\n6. 以下选项，针对绝对定位描述错误的是(C)\n\n\n\n   A. 绝对定位元素脱离标准流\n\n\n\n   B. 绝对定位元素实现模式转换\n\n\n\n   C. 绝对定位元素会固定在页面某个位置, 不随着滚动条的滚动而滚动\n\n\n\n   D. 绝对定位的元素可以使用边偏移属性\n\n\n\n\n\n\n\n7. 固定定位元素的位移参照物是(B)\n\n\n\n   A. 自身原本的位置\n\n\n\n   B. 参照浏览器的可视区域\n\n\n\n   C. 参照父元素的位置\n\n\n\n   D. 参照带有定位的元素位移\n\n\n\n\n\n\n\n8. 下列设置中元素层级有效并且最高的是(A)\n\n\n\n   A."
        },
        {
          "type": "code",
          "language": "css",
          "text": "div {\n  position: absolute;\n  z-index: 99;\n}"
        },
        {
          "type": "text",
          "text": "B."
        },
        {
          "type": "code",
          "language": "css",
          "text": "div {\n  position: absolute;\n}"
        },
        {
          "type": "text",
          "text": "C."
        },
        {
          "type": "code",
          "language": "css",
          "text": "div {\n  z-index: 99;\n}"
        },
        {
          "type": "text",
          "text": "D."
        },
        {
          "type": "code",
          "language": "css",
          "text": "div {\n  position: absolute;\n  z-index: 2;\n}"
        },
        {
          "type": "text",
          "text": "9. 文字与图片之间有一个垂直对齐规则，默认是(B)\n\n\n\n   A. 中线对齐\n\n\n\n   B. 基线对齐\n\n\n\n   C. 顶线对齐\n\n\n\n   D. 底线对齐\n\n\n\n\n\n\n\n10.把一个div 变成圆形下列正确的是(A)\n\n\n\nA."
        },
        {
          "type": "code",
          "language": "css",
          "text": "div {\n  width: 200px;\n\n  height: 200px;\n\n  border: 10px solid black;\n\n  border-radius: 50%;\n}"
        },
        {
          "type": "text",
          "text": "B."
        },
        {
          "type": "code",
          "language": "css",
          "text": "div {\n  width: 200px;\n\n  height: 100px;\n\n  border: 10px solid black;\n\n  border-radius: 50%;\n}"
        },
        {
          "type": "text",
          "text": "C."
        },
        {
          "type": "code",
          "language": "css",
          "text": "div {\n  width: 200px;\n\n  height: 100px;\n\n  border: 10px solid black;\n\n  border-radius: 50px;\n}"
        },
        {
          "type": "text",
          "text": "D."
        },
        {
          "type": "code",
          "language": "css",
          "text": "div {\n  width: 200px;\n\n  height: 200px;\n\n  border: 10px solid black;\n\n  border-radius: 50px;\n}"
        }
      ]
    }
  ]
};
