window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["f776f2102dec5445f939"] = {
  "id": "f776f2102dec5445f939",
  "title": "day02-HTML进阶.pdf",
  "treatment": "课件页级文本（配图回溯原件）",
  "sections": [
    {
      "title": "第1页",
      "level": 1,
      "page": 1,
      "blocks": [
        {
          "type": "text",
          "text": "day02 ：列表、表格、表单  \n目标：掌握嵌套关系标签的写法，使用列表标签布局网页\n01- 列表  \n作用：布局内容排列整齐的区域。\n列表分类：无序列表、有序列表、定义列表。\n无序列表  \n作用：布局排列整齐的不需要规定顺序的区域。\n标签： ul 嵌套  li ， ul 是无序列表， li 是列表条目。\n注意事项：\nul 标签里面只能包裹  li 标签\nli 标签里面可以包裹任何内容\n有序列表  \n作用：布局排列整齐的需要规定顺序的区域。\n标签： ol 嵌套  li ， ol 是有序列表， li 是列表条目。\n注意事项：\nol 标签里面只能包裹  li 标签\nli 标签里面可以包裹任何内容\n定义列表  \n标签： dl 嵌套  dt 和  dd ， dl 是定义列表， dt 是定义列表的标题， dd 是定义列表的描述  / 详情。\n<ul>\n  <li>第一项</li>\n  <li>第二项</li>\n  <li>第三项</li>\n  ……\n</ul>\n<ol>\n  <li>第一项</li>\n  <li>第二项</li>\n  <li>第三项</li>\n  ……\n</ol>"
        }
      ]
    },
    {
      "title": "第2页",
      "level": 1,
      "page": 2,
      "blocks": [
        {
          "type": "text",
          "text": "注意事项：\ndl 里面只能包含 dt 和  dd\ndt 和  dd 里面可以包含任何内容\n02- 表格  \n网页中的表格与  Excel 表格类似，用来展示数据。 \n基本使用  \n标签： table 嵌套  tr ， tr 嵌套  td / th 。 \n<dl>\n  <dt>列表标题</dt>\n  <dd>列表描述  / 详情</dd>\n   ……\n</dl>"
        }
      ]
    },
    {
      "title": "第3页",
      "level": 1,
      "page": 3,
      "blocks": [
        {
          "type": "text",
          "text": "提示：在网页中，表格默认没有边框线，使用  border 属性可以为表格添加边框线。 \n表格结构标签 - 了解  \n作用：用表格结构标签把内容划分区域，让表格结构更清晰，语义更清晰。\n<table border=\"1\">\n  <tr>\n    <th>姓名</th>\n    <th>语文</th>\n    <th>数学</th>\n    <th>总分</th>\n  </tr>\n  <tr>\n    <td>张三</td>\n    <td>99</td>\n    <td>100</td>\n    <td>199</td>\n  </tr>\n  <tr>\n    <td>李四</td>\n    <td>98</td>\n    <td>100</td>\n    <td>198</td>\n  </tr>\n  <tr>\n    <td>总结</td>\n    <td>全市第一</td>\n    <td>全市第一</td>\n    <td>全市第一</td>\n  </tr>\n</table>"
        }
      ]
    },
    {
      "title": "第4页",
      "level": 1,
      "page": 4,
      "blocks": [
        {
          "type": "text",
          "text": "提示：表格结构标签可以省略。\n合并单元格  \n作用：将多个单元格合并成一个单元格，以合并同类信息。 \n合并单元格的步骤：\n1. 明确合并的目标\n2. 保留最左最上的单元格，添加属性（取值是数字，表示需要合并的单元格数量）\n跨行合并，保留最上单元格，添加属性  rowspan\n跨列合并，保留最左单元格，添加属性  colspan\n3. 删除其他单元格\n<table border=\"1\">\n  <thead>\n    <tr>\n      <th>姓名</th>\n      <th>语文</th>\n      <th>数学</th>\n      <th>总分</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>张三</td>\n      <td>99</td>\n      <td rowspan=\"2\">100</td>\n      <td>199</td>\n    </tr>\n    <tr>\n      <td>李四</td>\n      <td>98</td>\n      <!-- <td>100</td> -->\n      <td>198</td>\n    </tr>\n  </tbody>\n  <tfoot>\n    <tr>\n      <td>总结</td>\n      <td colspan=\"3\">全市第一</td>\n      <!-- <td> 全市第一 </td>\n      <td> 全市第一 </td> -->\n    </tr>\n  </tfoot>"
        }
      ]
    },
    {
      "title": "第5页",
      "level": 1,
      "page": 5,
      "blocks": [
        {
          "type": "text",
          "text": "注意：不能跨表格结构标签合并单元格（ thead 、 tbody 、 tfoot ）。\n03- 表单  \n作用：收集用户信息。\n使用场景：\n登录页面\n注册页面\n搜索区域\ninput 标签  \ninput 标签  type 属性值不同，则功能不同。 \n \ninput 标签占位文本  \n占位文本：提示信息，文本框和密码框都可以使用。 \n单选框  \n常用属性\n \n</table>\n<input type=\"...\" >\n<input type=\"...\" placeholder=\" 提示信息 \">"
        }
      ]
    },
    {
      "title": "第6页",
      "level": 1,
      "page": 6,
      "blocks": [
        {
          "type": "text",
          "text": "提示： name 属性值自定义。\n上传文件  \n默认情况下，文件上传表单控件只能上传一个文件，添加  multiple 属性可以实现文件多选功能。\n多选框  \n多选框也叫复选框，默认选中： checked 。\n下拉菜单  \n标签： select 嵌套  option ， select 是下拉菜单整体， option 是下拉菜单的每一项。\n默认显示第一项，selected 属性实现默认选中功能。\n文本域  \n作用：多行输入文本的表单控件。 \n<input type=\"radio\" name=\"gender\" checked> 男\n<input type=\"radio\" name=\"gender\"> 女\n<input type=\"file\" multiple>\n<input type=\"checkbox\" checked> 敲前端代码\n<select>\n  <option>北京</option>\n  <option>上海</option>\n  <option>广州</option>\n  <option>深圳</option>\n  <option selected>武汉</option>\n</select>"
        }
      ]
    },
    {
      "title": "第7页",
      "level": 1,
      "page": 7,
      "blocks": [
        {
          "type": "text",
          "text": "注意点：\n实际开发中，使用  CSS 设置  文本域的尺寸\n实际开发中，一般禁用右下角的拖拽功能\nlabel 标签  \n作用：网页中，某个标签的说明文本。 \n经验：用  label 标签绑定文字和表单控件的关系，增大表单控件的点击范围。 \n写法一\nlabel 标签只包裹内容，不包裹表单控件\n设置  label 标签的  for 属性值  和表单控件的  id 属性值相同\n写法二：使用  label 标签包裹文字和表单控件，不需要属性 \n<textarea>默认提示文字</textarea>\n<input type=\"radio\" id=\"man\">\n<label for=\"man\">男</label>\n<label><input type=\"radio\"> 女</label>"
        }
      ]
    },
    {
      "title": "第8页",
      "level": 1,
      "page": 8,
      "blocks": [
        {
          "type": "text",
          "text": "提示：支持  label 标签增大点击范围的表单控件：文本框、密码框、上传文件、单选框、多选\n框、下拉菜单、文本域等等。 \n按钮  \n \n提示：按钮需配合  form 标签（表单区域）才能实现对应的功能。\n04- 语义化  \n无语义的布局标签  \n作用：布局网页（划分网页区域，摆放内容）\ndiv ：独占一行\nspan ：不换行\n有语义的布局标签  \n<button type=\"\">按钮</button>\n<!-- form 表单区域  -->\n<!-- action=\"\" 发送数据的地址  -->\n<form action=\"\">\n  用户名：<input type=\"text\">\n  <br><br>\n  密码：<input type=\"password\">\n  <br><br>\n  <!-- 如果省略  type 属性，功能是  提交  -->\n  <button type=\"submit\">提交</button>\n  <button type=\"reset\">重置</button>\n  <button type=\"button\">普通按钮</button>\n</form>\n<div>div 标签，独占一行</div>\n<span>span 标签，不换行</span>"
        }
      ]
    },
    {
      "title": "第9页",
      "level": 1,
      "page": 9,
      "blocks": [
        {
          "type": "text",
          "text": "05- 字符实体  \n06- 综合案例一 - 体育新闻列表"
        }
      ]
    },
    {
      "title": "第10页",
      "level": 1,
      "page": 10,
      "blocks": [
        {
          "type": "text",
          "text": "07- 综合案例二 - 注册信息  \n<ul>\n  <li>\n    <img src=\"./images/1.jpg\" alt=\"\">\n    <h3>主帅安东尼奥回西班牙休假  国青抵达海口进行隔离</h3>\n  </li>\n  <li>\n    <img src=\"./images/2.jpg\" alt=\"\">\n    <h3>梅州主帅：申花有强有力的教练组  球员体能水平高</h3>\n  </li>\n  <li>\n    <img src=\"./images/3.jpg\" alt=\"\">\n    <h3>马德兴 :00 后球员将首登亚洲舞台  调整心态才务实</h3>\n  </li>\n</ul>\n<h1>注册信息</h1>\n<form action=\"\">\n  <!-- 表单控件  -->\n  <!-- 个人信息  -->\n  <h2>个人信息</h2>\n  <label>姓名：</label><input type=\"text\" placeholder=\" 请输入真实姓名 \">\n  <br><br>\n  <label>密码：</label><input type=\"password\" placeholder=\" 请输入密码 \">"
        }
      ]
    },
    {
      "title": "第11页",
      "level": 1,
      "page": 11,
      "blocks": [
        {
          "type": "text",
          "text": "<br><br>\n  <label>确认密码：</label><input type=\"password\" placeholder=\" 请输入确认密码 \">\n  <br><br>\n  <label>性别：</label>\n  <label><input type=\"radio\" name=\"gender\"> 男</label>\n  <label><input type=\"radio\" name=\"gender\" checked> 女</label>\n  <br><br>\n  <label>居住城市：</label>\n  <select>\n    <option>北京</option>\n    <option>上海</option>\n    <option>广州</option>\n    <option>深圳</option>\n    <option>武汉</option>\n  </select>\n  <!-- 教育经历  -->\n  <h2>教育经历</h2>\n  <label>最高学历：</label>\n  <select>\n    <option>博士</option>\n    <option>硕士</option>\n    <option>本科</option>\n    <option>大专</option>\n  </select>\n  <br><br>\n  <label>学校名称：</label><input type=\"text\">\n  <br><br>\n  <label>所学专业：</label><input type=\"text\">\n  <br><br>\n  <label>在校时间：</label>\n  <select>\n    <option>2015</option>\n    <option>2016</option>\n    <option>2017</option>\n    <option>2018</option>\n  </select>\n  --\n  <select>\n    <option>2019</option>\n    <option>2020</option>\n    <option>2021</option>\n    <option>2022</option>\n  </select>\n  <!-- 工作经历  -->\n  <h2>工作经历</h2>\n  <label>公司名称：</label><input type=\"text\">\n  <br><br>\n  <label>工作描述：</label>\n  <br>\n  <textarea></textarea>\n  <br><br>\n  <!-- 协议  和  按钮  -->\n  <input type=\"checkbox\"><label>已阅读并同意以下协议：</label>\n  <ul>\n    <li><a href=\"#\">《用户服务协议》</a></li>\n    <li><a href=\"#\">《隐私政策》</a></li>\n  </ul>\n  <br><br>"
        }
      ]
    },
    {
      "title": "第12页",
      "level": 1,
      "page": 12,
      "blocks": [
        {
          "type": "text",
          "text": "<button>免费注册</button>\n  <button type=\"reset\">重新填写</button>\n</form>"
        }
      ]
    }
  ]
};
