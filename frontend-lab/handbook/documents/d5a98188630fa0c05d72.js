window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["d5a98188630fa0c05d72"] = {
  "id": "d5a98188630fa0c05d72",
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
          "text": "// out: ../css/\n@import url(./base.less);\n@import url(./normalize.less);\n\n@rootFontSize: 37.5 * 1rem;\n\nbody {\n  background-color: #f0f0f0;\n}\n// 主体内容\n.main {\n  margin-bottom: (49 / @rootFontSize);\n\n  // banner\n  .banner {\n    height: (160 / @rootFontSize);\n  }\n\n  // 活动标题\n  .title {\n    height: (40 / @rootFontSize);\n    line-height: (40 / @rootFontSize);\n    padding-left: (15 / @rootFontSize);\n    h4 {\n      font-size: (14 / @rootFontSize);\n      color: #3c3c3c;\n    }\n  }\n\n  // 活动\n  .item {\n    padding-bottom: (10 / @rootFontSize);\n    margin-bottom: (10 / @rootFontSize);\n    background-color: #fff;\n\n    // 活动图\n    .pic {\n      position: relative;\n      height: (160 / @rootFontSize);\n\n      // 活动状态\n      .status {\n        position: absolute;\n        left: (15 / @rootFontSize);\n        top: (-4 / @rootFontSize);\n        width: (68 / @rootFontSize);\n        height: (29 / @rootFontSize);\n        background-image: url(./../images/status_active.png);\n        background-size: contain;\n        font-size: (12 / @rootFontSize);\n        color: #fff;\n        text-align: center;\n        line-height: (25 / @rootFontSize);\n\n        &.off {\n          background-image: url(./../images/status_default.png);\n        }\n      }\n\n      // 收藏\n      .collect {\n        position: absolute;\n        right: (18 / @rootFontSize);\n        top: (15 / @rootFontSize);\n        color: #feca49;\n        i {\n          font-size: (24 / @rootFontSize);\n        }\n      }\n    }\n\n    // 活动介绍\n    .info {\n      position: relative;\n      padding: (8 / @rootFontSize) (15 / @rootFontSize) 0;\n      h5 {\n        width: (290 / @rootFontSize);\n        line-height: (22 / @rootFontSize);\n        font-size: (15 / @rootFontSize);\n        color: #3c3c3c;\n        font-weight: 400;\n      }\n\n      .rest {\n        display: flex;\n        margin-top: (15 / @rootFontSize);\n        color: #b4b4b4;\n        font-size: (11 / @rootFontSize);\n\n        p {\n          margin-right: (15 / @rootFontSize);\n\n          i {\n            font-size: (8 / @rootFontSize);\n            margin-right: (3 / @rootFontSize);\n          }\n        }\n      }\n\n      .type {\n        position: absolute;\n        top: (10 / @rootFontSize);\n        right: (15 / @rootFontSize);\n        font-size: (15 / @rootFontSize);\n        color: #fe6249;\n      }\n    }\n  }\n}\n\n// 底部工具条\n.toolbar {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n  height: (49 / @rootFontSize);\n  background-color: #feca49;\n  text-align: center;\n  a {\n    color: #d78b09;\n    i {\n      font-size: (20 / @rootFontSize);\n    }\n\n    span {\n      display: block;\n      margin-top: (5 / @rootFontSize);\n      font-size: (11 / @rootFontSize);\n    }\n    &.current {\n      color: #fff;\n    }\n  }\n}"
        }
      ]
    }
  ]
};
