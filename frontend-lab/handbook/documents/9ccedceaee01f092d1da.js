window.HANDBOOK_DOCUMENTS = window.HANDBOOK_DOCUMENTS || {};
window.HANDBOOK_DOCUMENTS["9ccedceaee01f092d1da"] = {
  "id": "9ccedceaee01f092d1da",
  "title": "day02-HTML进阶.md",
  "treatment": "章节知识与练习",
  "sections": [
    {
      "title": "day02：列表、表格、表单",
      "trail": [
        "day02：列表、表格、表单"
      ],
      "level": 1,
      "line": 1,
      "blocks": [
        {
          "type": "text",
          "text": "> 目标：掌握嵌套关系标签的写法，使用列表标签布局网页"
        }
      ]
    },
    {
      "title": "01-列表",
      "trail": [
        "day02：列表、表格、表单",
        "01-列表"
      ],
      "level": 2,
      "line": 5,
      "blocks": [
        {
          "type": "text",
          "text": "作用：布局内容排列整齐的区域。\n\n列表分类：无序列表、有序列表、定义列表。"
        }
      ]
    },
    {
      "title": "无序列表",
      "trail": [
        "day02：列表、表格、表单",
        "01-列表",
        "无序列表"
      ],
      "level": 3,
      "line": 11,
      "blocks": [
        {
          "type": "text",
          "text": "作用：布局排列整齐的**不需要规定顺序**的区域。\n\n标签：ul 嵌套 li，ul 是无序列表，li 是列表条目。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<ul>\n   \n  <li>第一项</li>\n   \n  <li>第二项</li>\n   \n  <li>第三项</li>\n  ……\n</ul>"
        },
        {
          "type": "text",
          "text": "> 注意事项：\n>\n> * ul 标签里面只能包裹 li 标签\n> * li 标签里面可以包裹任何内容"
        }
      ]
    },
    {
      "title": "有序列表",
      "trail": [
        "day02：列表、表格、表单",
        "01-列表",
        "有序列表"
      ],
      "level": 3,
      "line": 31,
      "blocks": [
        {
          "type": "text",
          "text": "作用：布局排列整齐的**需要规定顺序**的区域。\n\n标签：ol 嵌套 li，ol 是有序列表，li 是列表条目。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<ol>\n   \n  <li>第一项</li>\n   \n  <li>第二项</li>\n   \n  <li>第三项</li>\n  ……\n</ol>"
        },
        {
          "type": "text",
          "text": "> 注意事项：\n>\n> * ol 标签里面只能包裹 li 标签\n> * li 标签里面可以包裹任何内容"
        }
      ]
    },
    {
      "title": "定义列表",
      "trail": [
        "day02：列表、表格、表单",
        "01-列表",
        "定义列表"
      ],
      "level": 3,
      "line": 51,
      "blocks": [
        {
          "type": "text",
          "text": "标签：dl 嵌套 dt 和 dd，dl 是定义列表，dt 是定义列表的标题，dd 是定义列表的描述 / 详情。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<dl>\n   \n  <dt>列表标题</dt>\n   \n  <dd>列表描述 / 详情</dd>\n  ……\n</dl>"
        },
        {
          "type": "text",
          "text": "[课程配图见原资料]\n\n> 注意事项：\n>\n> * dl 里面只能包含dt 和 dd\n> * dt 和 dd 里面可以包含任何内容"
        }
      ]
    },
    {
      "title": "02-表格",
      "trail": [
        "day02：列表、表格、表单",
        "02-表格"
      ],
      "level": 2,
      "line": 70,
      "blocks": [
        {
          "type": "text",
          "text": "网页中的表格与 Excel 表格类似，用来展示数据。 \n\n[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "基本使用",
      "trail": [
        "day02：列表、表格、表单",
        "02-表格",
        "基本使用"
      ],
      "level": 3,
      "line": 76,
      "blocks": [
        {
          "type": "text",
          "text": "标签：table 嵌套 tr，tr 嵌套 td / th。 \n\n[课程配图见原资料]\n\n\n\n> 提示：在网页中，**表格默认没有边框线**，使用 **border 属性**可以为表格添加边框线。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<table border=\"1\">\n  <tr>\n    <th>姓名</th>\n    <th>语文</th>\n    <th>数学</th>\n    <th>总分</th>\n  </tr>\n  <tr>\n    <td>张三</td>\n    <td>99</td>\n    <td>100</td>\n    <td>199</td>\n  </tr>\n  <tr>\n    <td>李四</td>\n    <td>98</td>\n    <td>100</td>\n    <td>198</td>\n  </tr>\n  <tr>\n    <td>总结</td>\n    <td>全市第一</td>\n    <td>全市第一</td>\n    <td>全市第一</td>\n  </tr>\n</table>"
        }
      ]
    },
    {
      "title": "表格结构标签-了解",
      "trail": [
        "day02：列表、表格、表单",
        "02-表格",
        "表格结构标签-了解"
      ],
      "level": 3,
      "line": 115,
      "blocks": [
        {
          "type": "text",
          "text": "作用：用表格结构标签把内容划分区域，让表格结构更清晰，语义更清晰。\n\n[课程配图见原资料]\n\n> 提示：表格结构标签可以省略。"
        }
      ]
    },
    {
      "title": "合并单元格",
      "trail": [
        "day02：列表、表格、表单",
        "02-表格",
        "合并单元格"
      ],
      "level": 3,
      "line": 123,
      "blocks": [
        {
          "type": "text",
          "text": "作用：将多个单元格合并成一个单元格，以合并同类信息。 \n\n[课程配图见原资料]\n\n合并单元格的步骤：\n\n1. 明确合并的目标\n2. 保留**最左最上**的单元格，添加属性（取值是**数字**，表示需要**合并的单元格数量**）\n   * **跨行合并**，保留最上单元格，添加属性 **rowspan**\n   * **跨列合并**，保留最左单元格，添加属性 **colspan**\n3. 删除其他单元格"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<table border=\"1\">\n  <thead>\n    <tr>\n      <th>姓名</th>\n      <th>语文</th>\n      <th>数学</th>\n      <th>总分</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>张三</td>\n      <td>99</td>\n      <td rowspan=\"2\">100</td>\n      <td>199</td>\n    </tr>\n    <tr>\n      <td>李四</td>\n      <td>98</td>\n      <!-- <td>100</td> -->\n      <td>198</td>\n    </tr>\n  </tbody>\n  <tfoot>\n    <tr>\n      <td>总结</td>\n      <td colspan=\"3\">全市第一</td>\n      <!-- <td>全市第一</td>\n      <td>全市第一</td> -->\n    </tr>\n  </tfoot>\n</table>"
        },
        {
          "type": "text",
          "text": "> 注意：不能跨表格结构标签合并单元格（thead、tbody、tfoot）。"
        }
      ]
    },
    {
      "title": "03-表单",
      "trail": [
        "day02：列表、表格、表单",
        "03-表单"
      ],
      "level": 2,
      "line": 174,
      "blocks": [
        {
          "type": "text",
          "text": "作用：收集用户信息。\n\n使用场景：\n\n* 登录页面\n* 注册页面\n* 搜索区域"
        }
      ]
    },
    {
      "title": "input 标签",
      "trail": [
        "day02：列表、表格、表单",
        "03-表单",
        "input 标签"
      ],
      "level": 3,
      "line": 184,
      "blocks": [
        {
          "type": "text",
          "text": "input 标签 type 属性值不同，则功能不同。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<input type=\"...\" />"
        },
        {
          "type": "text",
          "text": "[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "input 标签占位文本",
      "trail": [
        "day02：列表、表格、表单",
        "03-表单",
        "input 标签占位文本"
      ],
      "level": 3,
      "line": 196,
      "blocks": [
        {
          "type": "text",
          "text": "占位文本：提示信息，文本框和密码框都可以使用。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<input type=\"...\" placeholder=\"提示信息\" />"
        }
      ]
    },
    {
      "title": "单选框",
      "trail": [
        "day02：列表、表格、表单",
        "03-表单",
        "单选框"
      ],
      "level": 3,
      "line": 204,
      "blocks": [
        {
          "type": "text",
          "text": "常用属性\n\n[课程配图见原资料]"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<input type=\"radio\" name=\"gender\" checked />\n男\n<input type=\"radio\" name=\"gender\" />\n女"
        },
        {
          "type": "text",
          "text": "> 提示：name 属性值自定义。"
        }
      ]
    },
    {
      "title": "上传文件",
      "trail": [
        "day02：列表、表格、表单",
        "03-表单",
        "上传文件"
      ],
      "level": 3,
      "line": 219,
      "blocks": [
        {
          "type": "text",
          "text": "默认情况下，文件上传表单控件只能上传一个文件，添加 multiple 属性可以实现文件多选功能。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<input type=\"file\" multiple />"
        }
      ]
    },
    {
      "title": "多选框",
      "trail": [
        "day02：列表、表格、表单",
        "03-表单",
        "多选框"
      ],
      "level": 3,
      "line": 227,
      "blocks": [
        {
          "type": "text",
          "text": "多选框也叫复选框，默认选中：checked。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<input type=\"checkbox\" checked />\n敲前端代码"
        }
      ]
    },
    {
      "title": "下拉菜单",
      "trail": [
        "day02：列表、表格、表单",
        "03-表单",
        "下拉菜单"
      ],
      "level": 3,
      "line": 235,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]\n\n标签：select 嵌套 option，select 是下拉菜单整体，option是下拉菜单的每一项。"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<select>\n   \n  <option>北京</option>\n   \n  <option>上海</option>\n   \n  <option>广州</option>\n   \n  <option>深圳</option>\n   \n  <option selected>武汉</option>\n</select>"
        },
        {
          "type": "text",
          "text": "> 默认显示第一项，**selected** 属性实现**默认选中**功能。"
        }
      ]
    },
    {
      "title": "文本域",
      "trail": [
        "day02：列表、表格、表单",
        "03-表单",
        "文本域"
      ],
      "level": 3,
      "line": 253,
      "blocks": [
        {
          "type": "text",
          "text": "作用：多行输入文本的表单控件。 \n\n[课程配图见原资料]"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<textarea>默认提示文字</textarea>"
        },
        {
          "type": "text",
          "text": "> 注意点：\n>\n> * 实际开发中，使用 CSS 设置 文本域的尺寸\n> * 实际开发中，一般禁用右下角的拖拽功能"
        }
      ]
    },
    {
      "title": "label 标签",
      "trail": [
        "day02：列表、表格、表单",
        "03-表单",
        "label 标签"
      ],
      "level": 3,
      "line": 268,
      "blocks": [
        {
          "type": "text",
          "text": "作用：网页中，某个标签的说明文本。 \n\n[课程配图见原资料]\n\n经验：用 label 标签绑定文字和表单控件的关系，增大表单控件的点击范围。 \n\n[课程配图见原资料]\n\n* 写法一\n  * label 标签只包裹内容，不包裹表单控件\n  * 设置 label 标签的 for 属性值 和表单控件的 id 属性值相同"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<input type=\"radio\" id=\"man\" />\n<label for=\"man\">男</label>"
        },
        {
          "type": "text",
          "text": "* 写法二：使用 label 标签包裹文字和表单控件，不需要属性"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<label>\n  <input type=\"radio\" />\n  女\n</label>"
        },
        {
          "type": "text",
          "text": "> 提示：支持 label 标签增大点击范围的表单控件：文本框、密码框、上传文件、单选框、多选框、下拉菜单、文本域等等。"
        }
      ]
    },
    {
      "title": "按钮",
      "trail": [
        "day02：列表、表格、表单",
        "03-表单",
        "按钮"
      ],
      "level": 3,
      "line": 295,
      "blocks": [
        {
          "type": "code",
          "language": "html",
          "text": "<button type=\"\">按钮</button>"
        },
        {
          "type": "text",
          "text": "[课程配图见原资料]"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<!-- form 表单区域 -->\n<!-- action=\"\" 发送数据的地址 -->\n<form action=\"\">\n  用户名：\n  <input type=\"text\" />\n  <br />\n  <br />\n  密码：\n  <input type=\"password\" />\n  <br />\n  <br />\n\n  <!-- 如果省略 type 属性，功能是 提交 -->\n  <button type=\"submit\">提交</button>\n  <button type=\"reset\">重置</button>\n  <button type=\"button\">普通按钮</button>\n</form>"
        },
        {
          "type": "text",
          "text": "> 提示：按钮需配合 form 标签（表单区域）才能实现对应的功能。"
        }
      ]
    },
    {
      "title": "无语义的布局标签",
      "trail": [
        "day02：列表、表格、表单",
        "04-语义化",
        "无语义的布局标签"
      ],
      "level": 3,
      "line": 325,
      "blocks": [
        {
          "type": "text",
          "text": "作用：布局网页（划分网页区域，摆放内容）\n\n* div：独占一行\n* span：不换行"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<div>div 标签，独占一行</div>\n<span>span 标签，不换行</span>"
        }
      ]
    },
    {
      "title": "有语义的布局标签",
      "trail": [
        "day02：列表、表格、表单",
        "04-语义化",
        "有语义的布局标签"
      ],
      "level": 3,
      "line": 337,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "05-字符实体",
      "trail": [
        "day02：列表、表格、表单",
        "05-字符实体"
      ],
      "level": 2,
      "line": 341,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]"
        }
      ]
    },
    {
      "title": "06-综合案例一-体育新闻列表",
      "trail": [
        "day02：列表、表格、表单",
        "06-综合案例一-体育新闻列表"
      ],
      "level": 2,
      "line": 345,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<ul>\n  <li>\n    <img src=\"./images/1.jpg\" alt=\"\" />\n    <h3>主帅安东尼奥回西班牙休假 国青抵达海口进行隔离</h3>\n  </li>\n  <li>\n    <img src=\"./images/2.jpg\" alt=\"\" />\n    <h3>梅州主帅：申花有强有力的教练组 球员体能水平高</h3>\n  </li>\n  <li>\n    <img src=\"./images/3.jpg\" alt=\"\" />\n    <h3>马德兴:00后球员将首登亚洲舞台 调整心态才务实</h3>\n  </li>\n</ul>"
        }
      ]
    },
    {
      "title": "07-综合案例二-注册信息",
      "trail": [
        "day02：列表、表格、表单",
        "07-综合案例二-注册信息"
      ],
      "level": 2,
      "line": 366,
      "blocks": [
        {
          "type": "text",
          "text": "[课程配图见原资料]"
        },
        {
          "type": "code",
          "language": "html",
          "text": "<h1>注册信息</h1>\n<form action=\"\">\n  <!-- 表单控件 -->\n  <!-- 个人信息 -->\n  <h2>个人信息</h2>\n  <label>姓名：</label>\n  <input type=\"text\" placeholder=\"请输入真实姓名\" />\n  <br />\n  <br />\n  <label>密码：</label>\n  <input type=\"password\" placeholder=\"请输入密码\" />\n  <br />\n  <br />\n  <label>确认密码：</label>\n  <input type=\"password\" placeholder=\"请输入确认密码\" />\n  <br />\n  <br />\n  <label>性别：</label>\n  <label>\n    <input type=\"radio\" name=\"gender\" />\n    男\n  </label>\n  <label>\n    <input type=\"radio\" name=\"gender\" checked />\n    女\n  </label>\n  <br />\n  <br />\n  <label>居住城市：</label>\n  <select>\n    <option>北京</option>\n    <option>上海</option>\n    <option>广州</option>\n    <option>深圳</option>\n    <option>武汉</option>\n  </select>\n  <!-- 教育经历 -->\n  <h2>教育经历</h2>\n  <label>最高学历：</label>\n  <select>\n    <option>博士</option>\n    <option>硕士</option>\n    <option>本科</option>\n    <option>大专</option>\n  </select>\n  <br />\n  <br />\n  <label>学校名称：</label>\n  <input type=\"text\" />\n  <br />\n  <br />\n  <label>所学专业：</label>\n  <input type=\"text\" />\n  <br />\n  <br />\n  <label>在校时间：</label>\n  <select>\n    <option>2015</option>\n    <option>2016</option>\n    <option>2017</option>\n    <option>2018</option>\n  </select>\n  --\n  <select>\n    <option>2019</option>\n    <option>2020</option>\n    <option>2021</option>\n    <option>2022</option>\n  </select>\n  <!-- 工作经历 -->\n  <h2>工作经历</h2>\n  <label>公司名称：</label>\n  <input type=\"text\" />\n  <br />\n  <br />\n  <label>工作描述：</label>\n  <br />\n  <textarea></textarea>\n  <br />\n  <br />\n  <!-- 协议 和 按钮 -->\n  <input type=\"checkbox\" />\n  <label>已阅读并同意以下协议：</label>\n  <ul>\n    <li><a href=\"#\">《用户服务协议》</a></li>\n    <li><a href=\"#\">《隐私政策》</a></li>\n  </ul>\n  <br />\n  <br />\n  <button>免费注册</button>\n  <button type=\"reset\">重新填写</button>\n</form>"
        }
      ]
    }
  ]
};
