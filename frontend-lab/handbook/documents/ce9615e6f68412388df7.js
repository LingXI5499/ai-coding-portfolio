window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["ce9615e6f68412388df7"] = {
  "id": "ce9615e6f68412388df7",
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
          "text": "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nli {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\nimg {\n  width: 100%;\n  vertical-align: middle;\n}\n\n.box {\n  width: 1110px;\n  height: 247px;\n  margin: 20px auto;\n  /* background-color: pink; */\n}\n\n.box li {\n  position: relative;\n  float: left;\n  width: 350px;\n  height: 247px;\n  margin-right: 30px;\n  overflow: hidden;\n}\n\n.box li:last-child {\n  margin-right: 0;\n}\n\n.box .txt {\n  position: absolute;\n  left: 0;\n  bottom: -50px;\n  width: 350px;\n  height: auto;\n  padding: 20px 30px;\n  z-index: 1;\n  color: #fff;\n  transition: transform 0.5s;\n}\n\n.box .txt h4 {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 2em;\n  color: #fff;\n}\n\n.box .txt h5 {\n  margin-bottom: 40px;\n  font-size: 18px;\n  line-height: 1.5em;\n  color: #fff;\n}\n\n.box .txt p {\n  color: #fff;\n  font-size: 14px;\n}\n\n.box .txt p .iconfont {\n  color: #c7000b;\n  vertical-align: middle;\n  font-size: 20px;\n  font-weight: 700;\n}\n\n/* 遮罩层 */\n\n.box li a:after {\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 0;\n  display: none;\n  content: '';\n  width: 100%;\n  height: 100%;\n  background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.5));\n}\n\n/* hover效果 */\n\n.box img {\n  transition: all 0.5s;\n}\n\n.box li:hover a::after {\n  display: block;\n}\n\n.box li:hover img {\n  transform: scale(1.1);\n}\n\n.box li:hover .txt {\n  transform: translateY(-50px);\n}"
        }
      ]
    }
  ]
};
