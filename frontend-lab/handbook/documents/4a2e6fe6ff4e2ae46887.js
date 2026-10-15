window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["4a2e6fe6ff4e2ae46887"] = {
  "id": "4a2e6fe6ff4e2ae46887",
  "title": "10-less-运算.less",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "10-less-运算.less",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "less",
          "text": ".box {\n  width: 100 + 20px;\n\n  width: 100 - 80px;\n\n  width: 100 * 2px;\n\n  // 除法 / → (计算表达式) 或 ./ → 推荐（）\n\n  width: (68 / 37.5rem);\n\n  width: 29 ./ 37.5rem;\n\n  // 如果表达式有多个单位，最终css里面以第一个单位为准\n\n  height: (29px / 37.5rem);\n}"
        }
      ]
    }
  ]
};
