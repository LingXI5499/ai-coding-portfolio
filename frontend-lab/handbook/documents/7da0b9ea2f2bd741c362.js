window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["7da0b9ea2f2bd741c362"] = {
  "id": "7da0b9ea2f2bd741c362",
  "title": "demo.css",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "demo.css",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": "/* 单伪元素法 */\n\n.clearfix::after {\n  content: '';\n\n  display: block;\n\n  clear: both;\n}\n\n/* 双伪元素法 */\n\n.clearfix::before,\n.clearfix::after {\n  content: '';\n\n  display: table;\n}\n\n.clearfix::after {\n  clear: both;\n}"
        }
      ]
    }
  ]
};
