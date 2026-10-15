window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["026597a2ca2fb43716a6"] = {
  "id": "026597a2ca2fb43716a6",
  "title": "index.less",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "index.less",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "less",
          "text": "// out: ../css/\n\n@import './base';\n\n// 定义变量\n\n@rootSize: 37.5rem;\n\n// 头部\n\nheader {\n  display: flex;\n\n  justify-content: space-between;\n\n  padding: 0 (15 / @rootSize);\n\n  height: (44 / @rootSize);\n\n  // background-color: pink;\n\n  line-height: (44 / @rootSize);\n\n  .icon-left {\n    font-size: (22 / @rootSize);\n  }\n\n  h3 {\n    font-size: (17 / @rootSize);\n  }\n\n  .note {\n    font-size: (15 / @rootSize);\n\n    color: #2cb5a5;\n  }\n}\n\n// banner\n\n.banner {\n  margin-top: (30 / @rootSize);\n\n  margin-bottom: (34 / @rootSize);\n\n  text-align: center;\n\n  img {\n    margin-bottom: (18 / @rootSize);\n\n    width: (240 / @rootSize);\n\n    height: (206 / @rootSize);\n  }\n\n  p {\n    font-size: (16 / @rootSize);\n\n    span {\n      color: #16c2a3;\n    }\n  }\n}\n\n// 问诊类型\n\n.type {\n  padding: 0 (15 / @rootSize);\n\n  li {\n    margin-bottom: (15 / @rootSize);\n\n    padding: 0 (15 / @rootSize);\n\n    height: (78 / @rootSize);\n\n    border: 1px solid #ededed;\n\n    border-radius: (4 / @rootSize);\n\n    a {\n      display: flex;\n\n      align-items: center;\n\n      // 内容在78里面垂直居中\n\n      height: (78 / @rootSize);\n\n      img {\n        margin-right: (14 / @rootSize);\n\n        width: (40 / @rootSize);\n\n        height: (40 / @rootSize);\n      }\n\n      .txt {\n        flex: 1;\n\n        h4 {\n          font-size: (16 / @rootSize);\n\n          color: #3c3e42;\n\n          line-height: (24 / @rootSize);\n        }\n\n        p {\n          font-size: (13 / @rootSize);\n\n          color: #848484;\n        }\n      }\n\n      .iconfont {\n        font-size: (16 / @rootSize);\n      }\n    }\n  }\n}"
        }
      ]
    }
  ]
};
