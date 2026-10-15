window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["158754383af7827a3a09"] = {
  "id": "158754383af7827a3a09",
  "title": "day02-HTML进阶.xmind",
  "treatment": "思维导图主题树",
  "sections": [
    {
      "title": "主题树",
      "level": 1,
      "blocks": [
        {
          "type": "text",
          "text": "画布 1\nday02-HTML进阶\n目标\n掌握嵌套关系标签的写法\n使用列表标签布局网页\n技术点\n列表\n无序\nul 嵌套 li，ul 是无序列表，li 是列表条目\n注意事项\n- ul 标签里面只能包裹 li 标签\n- li 标签里面可以包裹任何内容\n有序\nol 嵌套 li，ol 是有序列表，li 是列表条目\n- ol 标签里面只能包裹 li 标签\n定义\ndl 嵌套 dt 和 dd，dl 是定义列表，dt 是定义列表的标题，dd 是定义列表的描述 / 详情\n- dl 里面只能包含dt 和 dd\n- dt 和 dd 里面可以包含任何内容\n表格\n基本使用\ntable 嵌套 tr，tr 嵌套 td / th\ntable：表格\ntr：行\nth：表头单元格\ntd：内容单元格\nborder属性\n表格结构\nthead：表格头部\ntbody：表格主体\ntfoot：表格底部\n合并单元格\n将多个单元格合并成一个单元格，以合并同类信息\n步骤\n1. 明确合并的目标\n2. 保留最左最上的单元格，添加属性（取值是数字，表示需要合并的单元格数量）\n   - 跨行合并，保留最上单元格，添加属性 rowspan\n   - 跨列合并，保留最左单元格，添加属性 colspan\n3. 删除其他单元格\n表单\ninput\ntext：文本框\npassword：密码框\nradio：单选框\n默认选中：checked\n分组、单选\nname=“”\ncheckbox：复选框\nfile：上传文件\nmultiple：多文件上传\nplaceholder：占位文本\n下拉菜单\nselect 嵌套 option，select 是下拉菜单整体，option是下拉菜单的每一项\ntextarea：文本域\nlabel\n网页中，某个标签的说明文本\n增大点击范围\n写法一\n- label 标签只包裹内容，不包裹表单控件\n- 设置 label 标签的 for 属性值 和表单控件的 id 属性值相同\n写法二\n使用 label 标签包裹文字和表单控件，不需要属性\nbutton\nsubmit：提交按钮\nreset：重置按钮\nbutton：普通按钮\nform\n语义化\n无\ndiv\nspan\n有\nheader：网页头部\nnav：导航\nsection：网页区块\naside：侧边栏\narticle：网页文章\nfooter：网页底部\n综合案例\n体育新闻\n效果图\n智联注册"
        }
      ]
    }
  ]
};
