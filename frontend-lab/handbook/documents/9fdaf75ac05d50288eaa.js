window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["9fdaf75ac05d50288eaa"] = {
  "id": "9fdaf75ac05d50288eaa",
  "title": "17-多级对象解构案例.html",
  "treatment": "代码或文本参考",
  "sections": [
    {
      "title": "17-多级对象解构案例.html",
      "level": 1,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<!DOCTYPE html>\n\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n    <title>Document</title>\n  </head>\n\n  <body>\n    <script>\n      // 1. 这是后台传递过来的数据\n\n      const msg = {\n        code: 200,\n\n        msg: '获取新闻列表成功',\n\n        data: [\n          {\n            id: 1,\n\n            title: '5G商用自己，三大运用商收入下降',\n\n            count: 58,\n          },\n\n          {\n            id: 2,\n\n            title: '国际媒体头条速览',\n\n            count: 56,\n          },\n\n          {\n            id: 3,\n\n            title: '乌克兰和俄罗斯持续冲突',\n\n            count: 1669,\n          },\n        ],\n      };\n\n      // 需求1： 请将以上msg对象  采用对象解构的方式 只选出  data 方面后面使用渲染页面\n\n      // const { data } = msg\n\n      // console.log(data)\n\n      // 需求2： 上面msg是后台传递过来的数据，我们需要把data选出当做参数传递给 函数\n\n      // const { data } = msg\n\n      // msg 虽然很多属性，但是我们利用解构只要 data值\n\n      function render({ data }) {\n        // const { data } = arr\n\n        // 我们只要 data 数据\n\n        // 内部处理\n\n        console.log(data);\n      }\n\n      render(msg);\n\n      // 需求3， 为了防止msg里面的data名字混淆，要求渲染函数里面的数据名改为 myData\n\n      function render({ data: myData }) {\n        // 要求将 获取过来的 data数据 更名为 myData\n\n        // 内部处理\n\n        console.log(myData);\n      }\n\n      render(msg);\n    </script>\n  </body>\n</html>"
        }
      ]
    }
  ]
};
