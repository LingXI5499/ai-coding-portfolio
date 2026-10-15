window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["ab02b172591ecc1f17d7"] = {
  "id": "ab02b172591ecc1f17d7",
  "title": "webAPIs 第一天.xmind",
  "treatment": "思维导图主题树",
  "sections": [
    {
      "title": "主题树",
      "level": 1,
      "blocks": [
        {
          "type": "text",
          "text": "Web APIs\nWeb APIs 第一天\nday01-Dom获取&属性操作\n目标：掌握DOM属性操作，完成元素内容设置，元素属性设置，控制元素样式\nWebApi介绍\n组成：DOM操作页面元素，BOM控制浏览器行为\n知道：DOM树的概念，理解DOM对象作用\n获取DOM对象\nquerySelector\n满足条件的第一个元素\nquerySelectorAll\n满足条件的元素集合\n返回的是伪数组\n有长度和索引号\n但是没有push等方法\n了解其他方式\ngetElementById\ngetElementsByTagName\n操作元素内容\ninnerText\n显示纯文本，不解析标签\ninnerHTML\n会解析标签，多标签建议使用模板字符\n案例：年会抽奖案例\n操作元素属性\n操作常用属性\nhref、title、src\n操作样式属性\n通过style属性控制样式\nDOM对象的style属性可控制标签style行内样式，操作css属性需要遵循驼峰命名\n修改样式比较少的情况下有优势\n生成的是行内样式表，权重比较高\n通过className属性控制样式\nDOM对象的className属性可控制标签class属性，操作的方式：覆盖原来类名\n缺点：多个类名操作麻烦\n通过classList属性控制样式\n添加类：add\n删除类：remove\n切换类：toggle\n三个方法，注意加()\n不替换以前的类名\n案例：轮播图随机版\n操作表单元素属性\n属性 value、disabled、checked、selected\n演示各属性用法以及使用场景\n自定义属性\n标准属性: 标签天生自带的属性 比如class id title等, 可以直接使用点语法操作\n在html5中推出来了专门的data-自定义属性\t\n 在标签上一律以data-开头\n在DOM对象上一律以dataset对象方式获取\n定时器setInterval\n间歇函数作用\nlet timerId = setInterval(回调函数, 间隔时间)\nclearInterval(timerId)  清理定时器\n案例：阅读注册协议\n综合案例：轮播图定时器版"
        }
      ]
    }
  ]
};
