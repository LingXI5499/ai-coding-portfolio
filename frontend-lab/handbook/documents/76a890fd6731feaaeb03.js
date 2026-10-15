window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["76a890fd6731feaaeb03"] = {
  "id": "76a890fd6731feaaeb03",
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
          "text": ".score-case {\n  width: 1000px;\n\n  margin: 50px auto;\n\n  display: flex;\n\n  .table {\n    flex: 4;\n\n    table {\n      width: 100%;\n\n      border-spacing: 0;\n\n      border-top: 1px solid #ccc;\n\n      border-left: 1px solid #ccc;\n\n      th {\n        background: #f5f5f5;\n      }\n\n      tr:hover td {\n        background: #f5f5f5;\n      }\n\n      td,\n      th {\n        border-bottom: 1px solid #ccc;\n\n        border-right: 1px solid #ccc;\n\n        text-align: center;\n\n        padding: 10px;\n\n        &.red {\n          color: red;\n        }\n      }\n    }\n\n    .none {\n      height: 100px;\n\n      line-height: 100px;\n\n      color: #999;\n    }\n  }\n\n  .form {\n    flex: 1;\n\n    padding: 20px;\n\n    .form-item {\n      display: flex;\n\n      margin-bottom: 20px;\n\n      align-items: center;\n    }\n\n    .form-item .label {\n      width: 60px;\n\n      text-align: right;\n\n      font-size: 14px;\n    }\n\n    .form-item .input {\n      flex: 1;\n    }\n\n    .form-item input,\n    .form-item select {\n      appearance: none;\n\n      outline: none;\n\n      border: 1px solid #ccc;\n\n      width: 200px;\n\n      height: 40px;\n\n      box-sizing: border-box;\n\n      padding: 10px;\n\n      color: #666;\n    }\n\n    .form-item input::placeholder {\n      color: #666;\n    }\n\n    .form-item .cancel,\n    .form-item .submit {\n      appearance: none;\n\n      outline: none;\n\n      border: 1px solid #ccc;\n\n      border-radius: 4px;\n\n      padding: 4px 10px;\n\n      margin-right: 10px;\n\n      font-size: 12px;\n\n      background: #ccc;\n    }\n\n    .form-item .submit {\n      border-color: #069;\n\n      background: #069;\n\n      color: #fff;\n    }\n  }\n}"
        }
      ]
    }
  ]
};
