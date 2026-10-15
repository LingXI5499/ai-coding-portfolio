window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["289888b6b0abf71899e0"] = {
  "id": "289888b6b0abf71899e0",
  "title": "base.css",
  "treatment": "排错练习（不自动执行）",
  "sections": [
    {
      "title": "base.css",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "css",
          "text": "/* 去除常见标签默认的 margin 和 padding */\n\n* {\n  margin: 0;\n\n  padding: 0;\n\n  box-sizing: border-box;\n}\n\n/* 设置网页统一的字体大小、行高、字体系列相关属性 */\n\nbody {\n  font:\n    16px/1.5 'Microsoft Yahei',\n    'Hiragino Sans GB',\n    'Heiti SC',\n    'WenQuanYi Micro Hei',\n    sans-serif;\n\n  color: #333;\n}\n\n/* 去除列表默认样式 */\n\nul,\nol {\n  list-style: none;\n}\n\n/* 去除默认的倾斜效果 */\n\nem,\ni {\n  font-style: normal;\n}\n\n/* 去除a标签默认下划线，并设置默认文字颜色 */\n\na {\n  text-decoration: none;\n\n  color: #333;\n}\n\n/* 设置img的垂直对齐方式为居中对齐，去除img默认下间隙 */\n\nimg {\n  width: 100%;\n\n  height: 100%;\n\n  vertical-align: middle;\n}\n\n/* 去除input默认样式 */\n\ninput {\n  border: none;\n\n  outline: none;\n\n  color: #333;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 400;\n}"
        }
      ]
    }
  ]
};
