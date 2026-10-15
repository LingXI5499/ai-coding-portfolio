window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["4d49946f20979ef5c998"] = {
  "id": "4d49946f20979ef5c998",
  "title": "11-less-嵌套.less",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "11-less-嵌套.less",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "less",
          "text": ".father {\n  color: red;\n\n  .son {\n    width: 200px;\n\n    a {\n      color: green;\n\n      // & 表示的是当前选择器，代码写到谁的大括号里面就表示谁 → 不会生成后代选择器\n\n      // 应用：配合hover伪类或nth-child结构伪类使用\n\n      &:hover {\n        color: blue;\n      }\n    }\n\n    // a:hover {\n\n    //   color: orange;\n\n    // }\n  }\n}"
        }
      ]
    }
  ]
};
