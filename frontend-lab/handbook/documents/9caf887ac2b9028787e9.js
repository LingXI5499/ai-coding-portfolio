window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["9caf887ac2b9028787e9"] = {
  "id": "9caf887ac2b9028787e9",
  "title": "webAPIs第二天.xmind",
  "treatment": "思维导图主题树",
  "sections": [
    {
      "title": "主题树",
      "level": 1,
      "blocks": [
        {
          "type": "text",
          "text": "Web APIs\nWeb APIs 第二天\nday02-Dom事件基础\n目标：掌握事件绑定处理和事件对象，完成常见网页交互\n事件监听（绑定）\n事件三要素\n事件源，事件类型，事件处理函数\non方式\nbox.onclick=function(){}\naddEventListener方式\nbox.addEventListener('click',function(){})\n区别\non方式会被覆盖，addEventListener方式可绑定多次，拥有事件更多特性，推荐使用\n事件类型\n鼠标事件\nclick\nmouseenter, mouseleave\n案例：轮播图点击切换\n焦点事件\nfocus, blur\n文本事件\ninput\n案例：评论字数统计\n键盘事件\nkeydown\n键盘按下触发\nkeyup\n键盘抬起触发\n事件对象\n概念：包含事件相关信息的对象\n回调函数的第一个参数就是事件对象   e  event  evt\n常见属性\ntype 事件类型\nclientX|clientY 基于浏览器左上角\noffsetX|offsetY 基于元素左上角（事件源）\nkey 键盘按键值\n案例：评论回车发布\n环境对象\nthis\n环境对象指的是函数内部特殊的变量 this ，它代表着当前函数运行时所处的环境\n【谁调用， this 就是谁】 粗略规则\n语义： this这个， btn.fn   函数是谁调用的？是btn这个按钮调用的\n回调函数\n把一个函数当做参数传递给另一个函数，时机到了被调用\n给setInterval传的函数，给addEventListener传的函数，它们都是回调函数\n综合案例：tab栏切换\n使用mouseenter\n对比使用this"
        }
      ]
    }
  ]
};
