/* 逐实验补充：具体对象、操作顺序与可见结果。 */
Object.assign(HTML_ATTRIBUTE_HELP, {
  cite: '引用内容的来源地址，q/blockquote等可使用；不会自动显示为可点击链接。',
  media:
    'source/link/style等的媒体条件，例如(max-width:600px)；条件满足时使用相应资源或样式。',
  label: 'option/optgroup等的显示名称；不是label元素的for关联。',
  list: 'input关联datalist的id，提供候选建议，不限制只能输入候选项。',
  low: 'meter中较低区间的上边界，需与min/max/high等保持合理关系。',
  high: 'meter中较高区间的下边界，与low/optimum共同影响原生显示。',
  optimum: 'meter中理想值，告诉浏览器哪段区间较优，不只是当前value。',
  popovertargetaction: '指定按钮对目标popover执行toggle、show或hide。',
  playsinline: 'video布尔属性，提示在元素位置内播放，而非强制进入全屏；依浏览器实现。',
  x1: 'SVG line的起点横坐标，参照SVG坐标系统。',
  y1: 'SVG line的起点纵坐标，参照SVG坐标系统。',
  x2: 'SVG line的终点横坐标，参照SVG坐标系统。',
  y2: 'SVG line的终点纵坐标，参照SVG坐标系统。',
  'stop-color': 'SVG渐变stop节点在该位置的颜色。',
  offset: 'SVG渐变stop的位置，常写0%到100%；不是CSS定位偏移。',
  rx: 'SVG rect等的水平圆角半径，使用SVG内部坐标。',
  cx: 'SVG circle/ellipse的中心横坐标。',
  cy: 'SVG circle/ellipse的中心纵坐标。',
  r: 'SVG circle的半径，参照内部坐标与viewBox缩放。',
  dir: '文字方向，ltr从左到右，rtl从右到左，auto自动判断；可改变逻辑起始/结束边。',
  novalidate: 'form布尔属性，跳过提交时的原生交互式校验；JS业务验证仍需自己实现。',
  'aria-label':
    '给辅助技术提供控件名称，不会自动生成可见文字；优先使用清晰的可见标签。',
  'aria-labelledby': '用一个或多个id引用别的元素文本作为当前元素的可访问名称。',
  'aria-describedby': '引用补充说明或错误提示的id；不替代控件本身的名称。',
  'aria-expanded': '描述关联内容当前是否展开，值true/false必须与可见状态同步。',
  'aria-pressed': '描述切换按钮是否处于按下状态，常用于收藏、开关；不自动执行切换。',
  'aria-selected': '描述标签、选项等是否选中，需按正确角色使用并与显示内容一致。',
  'aria-controls': '引用当前控件影响的元素id，建立关联，不自动实现控制逻辑。',
  'aria-hidden': '从可访问树隐藏该元素及后代；不改变视觉显示，避免用于可聚焦控件。',
  'aria-current': '描述一组项目中的当前位置，例如page或true，不等同任意选中状态。',
  'aria-live': '告知辅助技术如何播报动态更新；polite在合适时机，assertive较强打断。',
  'aria-invalid': '描述输入当前是否无效，通常与具体错误说明同步。',
});
Object.assign(JS_API_HELP, {
  abs: 'Math.abs取绝对值，例如-3得到3。',
  trunc: 'Math.trunc向零截断小数，-1.2得到-1，与floor不同。',
  toUpperCase: '返回大写的新字符串，不改变原字符串。',
  toLowerCase: '返回小写的新字符串，常用于不区分大小写搜索。',
  startsWith: '判断字符串是否以给定文本开头，返回布尔值。',
  endsWith: '判断字符串是否以给定文本结尾。',
  substring: '截取字符串，终点不包含；负值按0处理，与slice行为不同。',
  padStart: '补齐字符串到指定长度，常用补零显示时分秒。',
  toString: '将接收对象转为字符串；Number.toString(16)可输出十六进制。',
  toLocaleString: '按地区选项格式化；数值/日期等同名方法需按接收对象判断。',
  flat: '按指定深度展平数组，默认1层，返回新数组。',
  flatMap: '先映射每项，再展平1层，返回新数组。',
  reverse: '原地反转数组顺序；保留原数组需要先复制。',
  at: '按索引读一项，负索引从末尾数，如at(-1)。',
  concat: '连接数组或字符串并返回新结果；按接收对象判断。',
  has: 'Set/Map.has判断成员或键是否存在；不是取回该项的值。',
  get: 'Map.get按键取值；FormData/URLSearchParams等同名get通常返回首个值，按对象区分。',
  set: 'Map.set设置键值，URLSearchParams.set设置查询参数；要看调用对象。',
  delete: 'Set/Map等移除对应成员或键，返回是否成功；不是删除整份对象。',
  clear: '清空Set/Map全部成员；别与clearTimeout等清理API混用。',
  getTime: 'Date.getTime读取自1970-01-01 UTC起的毫秒时间戳。',
  getFullYear: 'Date.getFullYear读取当前本地时区的四位年份。',
  getMonth: 'Date.getMonth读取本地月份索引，0表示一月。',
  getDate: 'Date.getDate读取本地月份中的日期，通常1到31。',
  getHours: 'Date.getHours读取本地小时，0到23。',
  getMinutes: 'Date.getMinutes读取本地分钟，0到59。',
  getSeconds: 'Date.getSeconds读取本地秒，通常0到59。',
  toISOString: 'Date.toISOString返回UTC的ISO字符串，不是本地时区文本。',
  now: 'Date.now是毫秒时间戳；performance.now是相对时间原点的高精度时间，两者基准不同。',
  createDocumentFragment:
    '创建文档片段，可先组装多个节点，再一起插入；插入后孩子会移入目标。',
  insertBefore: '在父节点的指定孩子前插入节点；参照节点需属于该父节点。',
  replaceWith: '用新节点或文字替换当前节点。',
  insertAdjacentElement: '按指定位置插入一个元素，位置如beforeend/afterend。',
  getAttribute: '读取HTML属性字符串，没有返回null；不总等于当前DOM属性值。',
  removeAttribute: '删除HTML属性；删除disabled等布尔属性可取消相应初始限制。',
  contains: '判断节点包含关系，或DOMTokenList是否包含类名；按接收对象区分。',
  toggle: 'classList.toggle切换类名是否存在；第二参数可强制有/无。',
  add: 'Set.add加入成员，classList.add加入类名；按接收对象区分。',
  scrollIntoView:
    '滚动使目标进入可见区域；behavior控制平滑与否，scroll-margin可避免固定头遮挡。',
  scrollTo: '让窗口或滚动元素滚到指定位置；坐标参照对应滚动区域。',
  focus: '程序聚焦可聚焦元素；不要无故抢走用户当前焦点。',
  click: '程序触发点击事件；不同控件和浏览器能力仍可能要求真实用户激活。',
  showModal: 'dialog进入模态顶层并限制背景交互；单纯写open不是同样行为。',
  close: '关闭dialog等支持close的对象；按接收对象判断是否还有返回值。',
  reset: 'form.reset恢复控件默认值；不会自动重置你保存的其他JS状态。',
  checkValidity:
    '检查控件/表单约束，返回布尔并可能触发invalid事件，不等同显示全部自定义错误。',
  reportValidity: '检查约束并请求浏览器显示原生校验反馈。',
  setCustomValidity: '设置原生自定义校验错误；用空字符串清除旧错误。',
  getAll: 'FormData/URLSearchParams按键取全部值，返回数组。',
  json: 'Response.json异步解析响应体为JSON；格式无效会失败。',
  abort: '请求取消与signal关联的操作，常来自AbortController。',
  resolve: 'Promise.resolve把值转换为已解决或跟随的Promise。',
  reject: 'Promise.reject创建拒绝Promise，需处理失败。',
  allSettled: 'Promise.allSettled等待全部完成，分别返回成功/失败状态。',
  race: 'Promise.race跟随最先敲定的结果，不会自动取消其余操作。',
  pushState:
    'History.pushState添加同文档历史项，不发起完整导航；状态与URL需满足来源限制。',
  replaceState: 'History.replaceState替换当前历史项，不新增后退步骤。',
  back: 'History.back请求后退一项，有无历史记录决定是否能移动。',
  forward: 'History.forward请求前进一项。',
  writeText: 'Clipboard.writeText异步复制文本，权限/上下文受限时可失败。',
  toDataURL: 'Canvas导出图片数据URL；污染画布时可能受安全限制。',
  disconnect: 'Observer停止观察全部目标；适合组件清理。',
  moveTo: 'Canvas路径移到一个起点，不直接绘制线。',
  lineTo: 'Canvas路径增加线段，还需stroke等画出来。',
  beginPath: 'Canvas开始新的路径，避免把上一次路径一起绘制。',
  arc: 'Canvas按中心、半径、角度建立圆弧，角度通常用弧度。',
  stroke: 'Canvas绘制当前路径轮廓，与SVG stroke属性不是同一种调用。',
  fill: 'Canvas填充当前路径。',
  save: 'Canvas保存当前绘图状态，不是保存页面文件。',
  restore: 'Canvas恢复最近save的绘图状态。',
  translate: 'Canvas移动绘图坐标原点；不是CSS布局移动。',
  rotate: 'Canvas旋转绘图坐标，角度为弧度；CSS rotate常用deg。',
});
function explain(id, terms, sequence, pitfalls = []) {
  LESSON_DETAILS[id] = {
    terms: terms.split('|'),
    steps: sequence.split('|'),
    pitfalls,
  };
}
explain(
  'html-attributes',
  'id标记单个节点，class供样式复用，data-level保存字符串数据。|属性只是信息，读取dataset后再修改内容，才会出现业务效果；aria-expanded描述实际展开状态。',
  '在HTML找到id、class和data-level。|找到JS读取dataset的位置，核对输出内容。|切换内容显示时同时检查hidden和aria-expanded。',
);
explain(
  'links',
  'a表示导航到目标，button表示在当前页面执行操作。|href="#work"与id="work"对应；锚点是目标标识，不是一个必须实现的JS函数。',
  '先找每条href的值。|再找对应id所在区域。|点击链接，观察视口移动，而不是数据变化。',
);
explain(
  'manual-paths',
  'URL是资源地址；./当前目录，../上一级，/网站根路径。|相对路径的意思取决于基准地址，同一个字符串在file与HTTP下可能解析成不同目标。',
  '先读本例给出的完整基准URL。|按目录层级推算../images会去哪里。|把路径改为./或/开头，比较解析出的完整地址。',
);
explain(
  'html-figure',
  'img是图片元素，figure把图片与说明组合成一个内容单元，figcaption是图注。|alt不是鼠标提示，它是图片内容的文字替代；width/height可提前提供宽高比例。',
  '找到图片、alt和下面的图注。|只改figcaption文字，图片不应变化。|改CSS显示宽度，观察是否保持比例，而不是单独拉伸高度。',
);
explain(
  'html-picture',
  'picture中的source按条件提供候选图；img仍是实际呈现与回退的图片元素。|media用来选构图，srcset密度/宽度候选用于资源选择，sizes描述预计显示尺寸。',
  '先看电脑图里的标识文字。|切到手机预览，比较source媒体条件与构图改变。|改img的alt，确认所有候选仍共用这份替代说明。',
);
explain(
  'lists',
  'ul表示并列项目，ol表示有顺序的步骤，li是一项。|缩进是默认CSS外观，编号表达顺序；嵌套列表应该放在所属li内部。',
  '把页面每个项目与对应li配对。|只将一个ul改成ol并配对结束标签，比较默认标记。|添加一项li，观察编号与结构自动延续。',
);
explain(
  'html-description',
  'dl放一组名称和描述，dt是名称，dd是描述。|address表示作者或组织的联系信息，不是所有地址文本都应该包address。',
  '把参数名称对应dt，参数值对应dd。|改一个dd内容，只改变该条说明。|修改dd的margin，比较默认缩进如何由CSS改变。',
);
explain(
  'table-el',
  'table是二维数据，tr是一行，th是标题单元格，td是普通数据单元格。|thead/tbody组织行组；caption是整张表的标题，scope说明表头覆盖哪一行或列。',
  '从表头往下按列阅读，确认同列具有同一含义。|只修改一个td，找到页面对应格子。|新增一行时保持相同字段顺序和单元格数量。',
);
explain(
  'manual-table-span',
  'colspan让一个格子占多列，rowspan让它占多行。|跨越数是实际覆盖位置，不能只数每行源代码中的td数量。',
  '画出本表逻辑列数。|给跨两列的格子计2，给前一行跨下来的格子也计入。|尝试修改跨度，查看表格如何错位，再恢复。',
);
explain(
  'html-table-span',
  'th标明数据标题，td标明数据；合并格子仍需要明确标题关联。|headers对应表头id，scope用于较简单的行/列标题关系。',
  '先看caption了解表的内容。|逐行累计跨列与跨行占用。|点击HTML对照，检查相关表头与属性，而不把表格拿去做整页布局。',
);
explain(
  'forms',
  '表单由控件、可见标签、数据字段名和提交动作组成。|id关联label，name成为提交键名；输入控件的当前value通常是字符串。',
  '点击标签，检查能否聚焦输入框。|先空值提交看必填校验，再填值提交看本地反馈。|在源码找到preventDefault，理解为什么没有真的跳转服务器。',
);
explain(
  'html-fieldset',
  'fieldset把相关控件分组，legend给整组命名。|同名radio互斥，checkbox可独立选中；label把文字与控件连接。',
  '点击单选文字，检查旧项是否取消。|把两个radio改成不同name，比较不再互斥。|勾多个checkbox，区别单选组与多选项。',
);
explain(
  'html-input-types',
  'type让浏览器使用适合的输入控件与格式校验；界面可能因浏览器不同而不同。|required要求填写，min/max限制范围，step限制步长；这些不是服务器安全验证。',
  '输入明显无效邮箱并提交。|观察原生校验先阻止submit，然后修正。|检查成功后FormData只收集带name且可提交的字段。',
);
explain(
  'html-select',
  'select从既定option中选值；datalist只是输入建议，用户仍能输入不在列表里的值。|input的list属性与datalist的id关联；output表达计算结果。',
  '先用select选择现有选项。|再在datalist关联输入框填写一个新值，比较两者限制。|改变参与计算的值，追踪output更新。',
);
explain(
  'html-accessibility',
  '可访问名称让辅助技术知道控件用途；可见label或合适aria-label提供名称。|焦点是键盘当前操作位置，必须看得见；tabindex不是视觉排序。',
  '不使用鼠标，按Tab逐项移动。|用Enter/空格操作原生按钮。|比较tabindex=-1的节点不会加入常规Tab顺序，但可由JS聚焦。',
);
explain(
  'native-details',
  'details是浏览器实现的折叠容器，summary是触发标题。|open存在就默认展开，不需要JS监听器才有交互。',
  '先点summary展开，再点一次折叠。|按Tab聚焦summary，用键盘操作。|给details添加open后重新运行，确认初始状态改变。',
);
explain(
  'html-progress-meter',
  'progress回答“任务完成了多少”，meter回答“当前测量值在某个范围中是什么水平”。|progress省略value表示不知道总进度，不是0%；meter的low/high/optimum影响原生呈现。',
  '分别找到任务进度和范围测量。|改value，观察浏览器原生条长度。|去掉progress的value，对比确定进度与等待状态。',
);
explain(
  'html-dialog',
  'showModal打开真正的模态对话框，进入顶层并限制背景交互。|form method="dialog"用于关闭对话框，其按钮值可变成returnValue，不是网络提交。',
  '点击打开，观察背景不可直接操作。|用Tab、Esc检查焦点与关闭。|用确认按钮关闭，找到JS读取returnValue的位置。',
);
explain(
  'html-popover',
  'popover是原生浮层，popovertarget把按钮与指定id连接。|自动popover可轻关闭，但它不是模态对话框，不会像showModal那样锁住整页交互。',
  '找按钮目标id与浮层id。|点击打开，再点击外部或按Esc关闭。|对照dialog实验，比较背景操作与焦点行为。',
);
explain(
  'html-template',
  'template保存暂不呈现的DOM片段；content是其文档片段。|cloneNode(true)复制整个片段，插入页面后才成为可见内容。',
  '初始时模板内容不出现。|触发添加，追踪复制、填文字、append三步。|重复添加，确认每次是新节点而非移动同一个节点。',
);
explain(
  'native-ui',
  'progress、meter、time、range各自表达不同内容与状态。|原生控件先提供可用行为，再由CSS调整外观；disabled是真正禁用，不只是变灰。',
  '逐项操作可交互控件。|找到对应value/min/max或disabled属性。|比较只改颜色与改原生状态对行为的差别。',
);
explain(
  'html-media',
  'audio/video需要可用媒体资源才播放；controls提供原生控制界面。|本例通过用户选本地文件生成Blob URL，既不下载素材，也不声称空播放器可以播放。',
  '观察未选择文件时的明确空状态。|选择本机音频/视频文件，再使用原生控件。|重新选择文件，找到释放旧object URL的代码。',
);
explain(
  'media',
  'img展示图片资源，内联SVG用坐标与形状描述矢量图形。|figure/figcaption组织媒体说明，空资源的音视频控件不会生成内容。',
  '把图形对应到SVG中的rect/path等。|缩放预览，观察矢量轮廓。|核对有意义图片的alt与装饰图形的aria-hidden。',
);
explain(
  'html-embed',
  'iframe是独立子文档，里面有自己的HTML/CSS，不继承父页面样式。|srcdoc直接提供HTML；sandbox限制允许能力，不是让它与父页面完全共享权限。',
  '比较外部页面与内嵌内容的样式。|只改srcdoc中的文字，确认变的是子文档。|核对引号编码与sandbox允许项。',
);
explain(
  'manual-selector-combinations',
  '空格是后代，可跨多层；>是直接子代；逗号是并集；相连类名是同时满足。|.card.selected选同一节点的两个类，.card .selected选card内的后代，两者范围不同。',
  '先在结构树数层级。|比较后代规则选中两段与子代规则只选直接孩子。|添加/删除中间的空格，观察范围变化。',
);
explain(
  'css-selectors',
  '选择器是范围判断，不是元素自身数据。|标签、类、属性、关系与伪类可组合；先修完本章前三个分类实验，再读此综合例。',
  '逐条打开CSS对照，先确认匹配数量。|悬停后再测状态选择器。|只改一个class，检查哪些规则不再匹配。',
);
explain(
  'manual-link-states',
  ':link是未访问链接，:visited是已访问，:hover是悬停，:active是按下中的短暂状态。|同级冲突按后写规则比较，键盘焦点另用focus-visible；visited受隐私限制。',
  '先悬停，再按住指针看active。|按Tab看到焦点轮廓。|对比同属性规则的位置，不把LVHA当作所有级联场景的万能规则。',
);
explain(
  'css-pseudo',
  '::before/::after生成内容，不是真实DOM节点；content为空字符串也可形成装饰盒。|::first-letter针对首字；重要文字仍应保留在HTML中。',
  '对照HTML，找出并不存在于正文的装饰文字。|修改content，观察对应生成内容。|测量伪元素时读到其样式，但高亮矩形仍属于宿主元素。',
);
explain(
  'css-has',
  ':has()根据关系条件决定当前元素是否匹配，例如卡片内有勾选项。|它改变选择条件，不需要JS手动加class，但也不会自动存储状态。',
  '勾选前观察父卡片颜色。|勾选后找到:has条件中的checked。|取消勾选，看同一规则为何不再匹配。',
);
explain(
  'css-layers',
  '@layer先建立普通作者样式的层顺序，再在同层内比较优先级。|普通未分层声明高于普通分层声明；important的层顺序会反转。',
  '先列出层名顺序。|看后层低优先级选择器如何覆盖前层。|本例公共装饰在lab-base里，打开公共源码核对来源。',
);
explain(
  'manual-reset-focus',
  'reset用于统一必要的默认外观，不是把每种元素都清空。|box-sizing统一尺寸规则，控件继承字体；键盘焦点是功能反馈，不能随便删除。',
  '查看哪些默认值被明确覆盖。|按Tab确认focus-visible轮廓。|保留标题与列表的结构，不把重置误当无障碍替代。',
);
explain(
  'manual-baseline',
  '基线是多数文字字形排齐的参考线，文字下降部会占据基线下方。|行内图片默认与基线对齐，因此图片下方可能留文字下降部空间，不是图片自带margin。',
  '比较第一行与vertical-align:bottom的第二行。|增大字体，观察基线空隙变化。|将图片改display:block，比较它不再参与同一行文字的基线对齐。',
);
explain(
  'shadow',
  'border参与盒模型尺寸；box-shadow画在周围但通常不新增正常占位。|border-radius改变圆角，不自动等同于裁切所有子元素。',
  '先测没有阴影的边框矩形。|只增加阴影模糊半径，矩形尺寸应不变。|改边框宽度，结合box-sizing重新算外宽。',
);
explain(
  'filters',
  'filter改变整体画面，clip-path改变哪些部分可见；通常保留原布局占位。|灰度不是删除颜色数据，裁切不是删除DOM节点。',
  '比较原画面、灰度和模糊。|只改clip-path形状，观察可见区域与占位区别。|不要把重要文字放在模糊或被裁掉的区域。',
);
explain(
  'manual-icon-alternative',
  'SVG图标用path等形状绘制；currentColor读取当前文字色。|纯装饰图标可aria-hidden，只有图标的按钮仍需要名称。',
  '改按钮color，看图标是否一起变色。|查看SVG的stroke与fill分别控制什么。|核对图标隐藏于辅助技术后，按钮仍有文字或aria-label。',
);
explain(
  'css-math',
  'calc做单位组合，min取较小，max取较大，clamp限制在下上界之间。|这些是CSS计算函数，不需要JS随窗口变化逐个改尺寸。',
  '先读每个函数的参考量和上下界。|切窄/宽预览，观察理想值与边界何时接管。|用计算值核对最终px，而不是只盯源码中的vw。',
);
explain(
  'css-aspect-ratio',
  '宽高比16/9表示宽÷高=16/9。|至少有一个尺寸按auto计算时，首选比例才常参与决定尺寸；同时固定宽高会改变约束。',
  '先看宽度，再按比例算高度。|只改为1/1，预测方形。|同时明确width和height，比较比例不再直接决定两个固定尺寸。',
);
explain(
  'css-logical',
  'inline是文字排开方向，block是行往下一步排列的方向。|margin-inline等逻辑属性随书写方向变化；left/right是物理边，不会自动换边。',
  '先观察普通从左到右。|查看dir=rtl区域的起始边框如何转到右侧。|把逻辑起始边换成border-left，比较不能自动适配的效果。',
);
explain(
  'css-custom-properties',
  '--brand等自定义属性保存值，var读取它，定义位置与继承决定范围。|变量名称不自带语义，只有使用处才决定它控制颜色还是尺寸。',
  '先找到变量定义，再搜索所有var使用处。|改一个全局变量，观察多项同步变化。|局部重新定义，确认只影响当前分支与后代。',
);
explain(
  'manual-less-native',
  'Less源码需要编译，浏览器不会原样执行它。|本例用CSS自定义属性、calc和明确选择器实现相同小知识点，不引入构建运行依赖。',
  '找到--变量与var读取。|核对calc在浏览器计算的尺寸。|查看展开后的后代选择器，不把预处理嵌套当普通CSS规则。',
);
explain(
  'hover',
  'hover/active描述指针状态，focus-visible描述可见焦点，disabled是真实不可用状态。|只变灰或改cursor不会禁用按钮。',
  '鼠标悬停、按下各比较一次。|按Tab检查键盘焦点。|尝试禁用按钮，确认外观与行为都不同。',
);
explain(
  'css-supports',
  '@supports检查浏览器能否理解声明或选择器语法。|它不是网络能力检测，也不保证每个实际使用场景都正确渲染。',
  '先看基础背景与布局规则。|找到支持条件内的增强声明。|即使增强不支持，基础信息仍应可读。',
);
explain(
  'css-print',
  '@media print只在打印媒体中应用，普通屏幕预览不会立刻显示打印效果。|打印应优先保留正文和数据，移除不必要导航与装饰。',
  '先看屏幕规则。|导出独立HTML，使用浏览器打印预览。|对照print中的隐藏与分页设置，确认正文完整。',
);
explain(
  'manual-wrapper',
  '版心是统一的内容宽度区域；max-width限制最大值，自动外边距分配两侧空间。|min(最大宽度,可用宽度减留白)同时照顾大屏和小屏。',
  '宽预览看内容居中且不无限变宽。|手机预览检查左右仍有留白。|只改最大宽度，核对宽屏变化而窄屏约束仍在。',
);
explain(
  'single',
  '单栏把内容放在同一阅读列，核心是最大宽度与两侧留白。|居中通常由margin-inline:auto或等效方式完成，不是text-align:center让所有块居中。',
  '找到限制正文宽度的容器。|放大预览，观察列宽达到上限后只增加两侧空间。|缩窄预览，检查文本不会贴边或横向溢出。',
);
explain(
  'two',
  '两栏分正文与补充区域；固定侧栏加弹性正文是常见组合。|minmax(0,1fr)让弹性轨道可缩，窄屏再切一列。',
  '先找Grid/Flex父盒与两个直接区域。|缩窄到断点，比较上下堆叠顺序。|增加正文长文本，核对最小宽度处理。',
);
explain(
  'three',
  '三栏通常是导航、正文、补充目录，内容重要性与宽度应对应。|轨道尺寸决定空间分配，媒体条件决定何时重排或收起补充区。',
  '从外层三列定义读起。|切平板检查右侧补充区。|切手机确认正文仍完整可读。',
);
explain(
  'grid',
  '重复卡片适合Grid，列数与最小列宽决定能放几项。|gap只计算内部间隙，不能把它当每张卡片左右各一个margin。',
  '先数直接子卡片，再看列定义。|缩窄宽度，观察列数与卡宽变化。|把gap加大，预测可用轨道空间减少。',
);
explain(
  'masonry',
  '本例是CSS多栏方案，内容先沿一列往下，再流向下一列。|break-inside:avoid尽量不拆一张卡片；它不是按行排序的Grid瀑布流。',
  '按DOM顺序数卡片，再比较视觉位置。|改变column数，观察重新流动。|查看高卡片未跨栏拆开的原因。',
);
explain(
  'feed',
  '信息流是一条条记录按DOM顺序出现，记录内部再分作者、正文、操作。|重复结构保持一致，顺序和数据真实性比装饰更重要。',
  '找到一条记录的最外层容器。|修改一条正文，定位到对应卡片。|窄屏看元信息与正文能否自然换行。',
);
explain(
  'dashboard',
  '仪表盘由指标摘要和详细模块组合，Grid把不同大小模块组织在一起。|本例是静态示意，图表高度与数字不代表实时接口数据。',
  '先分导航、摘要和图表。|查看跨列模块使用的Grid规则。|缩窄预览，确认模块重排后数据标题仍对应。',
);
explain(
  'split',
  '分屏把两个相关任务并排，外层布局分空间，内层分别处理内容。|移动端没有足够宽度时，按合理顺序堆叠，而不是同时挤成两条窄列。',
  '找两个直接工作区。|检查各自overflow，区别区域滚动与全页滚动。|切手机比较重排。',
);
explain(
  'immersive',
  '沉浸式界面围绕一个视觉主题展开，常用视口尺寸与边缘工具。|全屏效果不自动代表浏览器真正进入Fullscreen API模式。',
  '找控制最小高度的视口单位。|看顶部和底部工具相对于谁定位。|切手机确认内容和按钮仍可见。',
);
explain(
  'landing',
  '长展示页按主题分section，用统一版心与间距连成阅读顺序。|首屏、特点、展示和行动入口是内容分区，不是必须写成完整商业项目。',
  '从DOM顺序辨认各section。|修改一块背景或间距，观察局部变化。|切窄屏核对图文先后与标题层级。',
);
explain(
  'table',
  '数据管理区域包含工具栏、表头和记录，字段必须逐列对应。|宽表格在窄屏可放进横向滚动容器，不应挤碎每个单元格。',
  '找到table外面的滚动盒。|切手机，在表格区域横向滚动。|修改一个字段标题，核对整列数据含义。',
);
explain(
  'kanban',
  '列表示状态，卡表示任务；静态摆放并不自动实现数据状态迁移。|多列可用横向滚动保留可读卡宽。',
  '先列出每一列状态名称。|找到任务卡在哪个容器中。|比较drag实验中的真实重排逻辑，区分布局与行为。',
);
explain(
  'mobile',
  '固定底部导航相对预览视口定位，正文需要留出相应底部空间。|选中项说明当前位置，安全区为可能被设备边缘遮挡的区域留白。',
  '向下滚动，看导航保持位置。|检查内容最后一项不会被底条遮住。|找到固定定位与正文底部留白两条相互配合的规则。',
);
explain(
  'manual-header-search',
  '外层Flex按顺序放标识、导航、搜索和用户区；搜索吸收剩余空间。|min-width与换行条件决定窄屏是否挤出。',
  '先找弹性搜索所在直接子项。|加长导航文字，观察收缩与换行。|切手机，确认核心搜索仍可操作。',
);
explain(
  'manual-sidebar-hero',
  '外层Grid把侧栏、主视觉、辅助卡分成三种职责。|内层卡片可各自布局，外层不必知道每段文字的高度。',
  '先读三列轨道宽度。|点击规则测量对应区域。|切手机，对照DOM顺序如何重排为单列。',
);
explain(
  'manual-section-title',
  '标题、筛选和更多入口共用一条Flex行；自动margin吸收多余空间。|baseline对齐文字基线，wrap允许空间不足时换行。',
  '找自动外边距用在哪个项。|增大标题字号，比较基线对齐。|缩窄容器，观察哪一项换到下一行。',
);
explain(
  'manual-course-card',
  '卡片先分封面、标题、元信息与角标，再放进重复网格。|角标absolute不撑高卡片，封面比例由尺寸或aspect-ratio控制。',
  '定位角标的参考卡片。|加长标题看换行与高度处理。|缩窄列表，看列数变化而单卡结构保留。',
);
explain(
  'manual-hover-reveal',
  '详情区通过变换移出/移入卡片可见范围；overflow决定是否露出。|focus-within让键盘操作也能触发展示，不仅依赖hover。',
  '先看静态可见部分。|悬停与Tab聚焦分别触发详情。|只改translate距离，观察展示范围；检查视觉隐藏的控件是否仍可误聚焦。',
);
explain(
  'manual-footer-services',
  '页脚分服务承诺、帮助链接、联系与版权，不同块可用不同列数。|跨列版权用Grid跨线，窄屏按DOM顺序重排。',
  '先找服务条与帮助区的独立容器。|修改列数，检查一处规则影响哪组内容。|切手机确认版权和链接均可读。',
);
explain(
  'manual-topic-overlay',
  '封面相对定位，标题或遮罩在其内部定位；渐变只改变背景层。|不要对整张卡片opacity，否则文字也会变淡。',
  '先识别封面边界与定位父级。|改渐变起点，观察文字附近对比。|关闭遮罩比较阅读难度。',
);
explain(
  'manual-mobile-header',
  '1fr auto 1fr让标题两边的空间对称，标题保持整个栏的中线。|左返回短、右操作长时，用普通space-between不一定让标题真正居中。',
  '测量标题中心与容器中心。|把右按钮文字加长。|对比三列仍给标题保持中央的约束。',
);
explain(
  'manual-media-row',
  '缩略图固定宽，正文flex吸收空间，尾部操作避免过度收缩。|min-width:0让正文可缩；省略号还需宽度、裁切和不换行条件。',
  '先测图片和尾部操作宽度。|加长中间标题，再切手机。|删除min-width:0比较可能撑开布局的差异。',
);
explain(
  'manual-bottom-bar',
  'fixed底条不保留普通流占位，因此正文必须额外留出底部空间。|env(safe-area-inset-bottom)只在适用环境返回安全区值，普通桌面常为0。',
  '滚到正文最后。|暂时删除正文底部留白，观察被遮挡。|恢复留白，再核对底条高度与安全区。',
);
explain(
  'manual-native-grid12',
  '十二列是划分空间的方法，Grid可以直接定义12条轨道。|跨度8+4占满一行；gap由轨道系统计算，不要额外手算成溢出宽度。',
  '看父盒repeat(12,...)。|找每个项的grid-column span。|切小屏，看媒体规则把项改为跨12列。',
);
explain(
  'manual-button-table',
  '共享类放共用样式，变体类只改差异；disabled表达真实状态。|表格外层overflow-x:auto提供区域滚动。',
  '比较按钮共同类与变体类。|尝试disabled按钮，确认不能操作。|窄屏只滚动表格，不让整个页面横向溢出。',
);
explain(
  'manual-empty-state',
  '空、成功、失败是内容状态，不只是不同颜色卡片。|每种状态需要文字说明与合理下一步，避免只能靠颜色猜。',
  '阅读各状态的标题和说明。|找到可执行的下一步入口。|把颜色临时改成同色，确认文字仍能区别状态。',
);
explain(
  'manual-coupon',
  '价格、说明和状态是HTML内容，缺口和虚线是CSS装饰。|伪元素做缺口不需要用图片，但需要content与合适定位父级。',
  '先找三块实际内容。|再找before/after生成的装饰。|加长说明，观察卡券自然增高而装饰位置仍合理。',
);
explain(
  'js-string',
  '字符串是文本，方法通常返回新字符串而不改原值。|length按UTF-16码元计数，部分表情不等于一个可见字符。',
  '先看原文本，再比较trim/includes等输出。|把方法结果保存与不保存对比。|加入表情，观察length不一定等于眼睛数的字符数。',
);
explain(
  'manual-string-methods',
  'split把文本拆成数组，join把数组拼回文本；substring终点不包含。|indexOf找不到返回-1，includes直接返回布尔。',
  '先手算截取起终点。|改变分隔符看split结果。|搜索不存在的文本，核对-1与false。',
);
explain(
  'js-number',
  'JS普通Number使用二进制浮点，不是每个十进制小数都能精确保存。|金额可用安全范围内的整数分计算；toFixed只格式化成字符串。',
  '比较0.1+0.2与0.3。|再用10+20分得30分。|打印toFixed结果的typeof，确认不是精度修复后的数字。',
);
explain(
  'manual-number-rounding',
  'floor向负无穷取整，ceil向正无穷，trunc向零截断。|toFixed返回文本；负数和半整数需要检查边界。',
  '分别输入正小数与负小数。|手算-1.2的floor与trunc。|检查格式化结果用于展示，而计算仍使用数值。',
);
explain(
  'manual-random',
  'random得到0含、1不含的伪随机数，区间整数公式要包含上界。|不重复抽取需要记录已取项或从候选池删除，不是单靠random。',
  '先算max-min+1有多少候选整数。|多次运行观察都在范围内。|候选池减少后核对没有重复和耗尽状态。',
);
explain(
  'js-date',
  'Date保存时间点，显示由时区与格式决定；同一时刻可显示不同地区时间。|数字构造器月份从0开始，Intl负责明确地区/时区格式。',
  '找到同一Date在两个时区的输出。|把月份0改1，核对一月变二月。|不要把显示字符串与时间戳混作同一类型。',
);
explain(
  'js-map-set',
  'Set保存不重复值，Map保存键值对；size是成员数量。|对象按引用比较，长得一样的两个对象不自动相等。',
  '先用重复数字看Set去重。|再比较两个内容相同但不同引用的对象。|用Map.get读取键，区别普通对象字段访问。',
);
explain(
  'js-regexp',
  '正则描述匹配模式，test返回是否匹配，match提取文本。|^/$约束首尾，g找多个结果；找到了子串不代表整个输入都合法。',
  '先测合法示例。|在前后加入其他文字，比较完整边界与子串匹配。|核对验证目的，再决定是否需要更复杂模式。',
);
explain(
  'manual-regex-anchors',
  '字符组定义允许字符，量词定义次数，首尾边界限制整体。|{6,16}是重复次数区间，不是数值大小区间。',
  '测6位、16位与边界外长度。|插入不允许字符。|去掉首尾边界比较可能只命中输入中的一小段。',
);
explain(
  'manual-regex-flags',
  'i忽略大小写，g全局匹配，捕获组提取部分内容。|带g/y的test会推进lastIndex，不适合不重置就连续做独立校验。',
  '先比较替换有无g。|读取捕获的年/月/日。|连续调用同一个带g正则的test，核对状态变化。',
);
explain(
  'js-formdata',
  'FormData按可提交控件收集字段，重复name可对应多值。|get只取一个值，getAll保留多个；disabled与未选checkbox通常不参与。',
  '选择多个同名复选项。|比较get与getAll结果。|禁用一个控件再提交，核对收集结果改变。',
);
explain(
  'manual-password-toggle',
  'input.type在password/text之间切换，输入值仍属于同一控件。|按钮文字与aria-pressed应同时反映可见状态。',
  '先输入一段测试文本。|点显示，检查type变text而value保留。|点隐藏，检查名称与状态一起恢复。',
);
explain(
  'manual-select-all',
  '主框既控制各子项，也根据子项数量派生状态。|部分选中时indeterminate为true；这不是第三种提交值。',
  '选一个子项，看主框中间状态。|再选所有，看主框checked。|点击全选/取消，检查每个子项同步。',
);
explain(
  'manual-favorite-state',
  '一个布尔状态保存是否收藏；渲染从它派生文字、样式与aria-pressed。|样式改变只是输出，本例不需要登录也不代表服务端持久保存。',
  '先点收藏，看状态变true。|再点取消，看状态变false。|找到同一个状态如何更新多个输出。',
);
explain(
  'theme',
  '主题类或变量统一控制多个组件颜色，避免逐个改每个元素。|当前预览状态与保存用户系统主题偏好是不同功能。',
  '点击开关看多区域同步。|找到JS切类与CSS主题规则。|只修改一个主题色，确认JS无需改变。',
);
explain(
  'tabs-js',
  '当前标签索引决定可见面板，选中外观与内容必须对应。|完整标签组件还需要aria关系与方向键行为，本例基础机制先看当前项如何切换。',
  '点击不同标签记录当前索引。|找到面板hidden/类名切换。|核对显示内容与选中标签，不将视觉样式误当完整键盘实现。',
);
explain(
  'modal',
  '打开/确认/取消是状态转换，关闭后背景应恢复可操作。|基础自制弹层与原生dialog的焦点限制能力不同，实际开发优先比较原生方案。',
  '从打开按钮追踪到显示。|分别确认、取消、Esc，观察结果。|对照html-dialog学习模态焦点管理。',
);
explain(
  'manual-accordion',
  '一个活动项决定展开哪个面板；再点当前项可以折叠。|aria-expanded、aria-controls与hidden保持一致，不只是箭头换方向。',
  '展开第一项。|展开第二项，确认第一项关闭。|检查属性与可见内容同步。',
);
explain(
  'search-js',
  '查询文本是输入，匹配数组是派生结果，完整原数组不被破坏。|空白、大小写归一化和无结果提示都属于可用搜索。',
  '输入命中词，看列表减少。|输入不存在词，看空状态。|清空查询，确认原数据能完整回来。',
);
explain(
  'manual-price-filter',
  '最小/最大价格约束filter条件，边界包含用>=和<=。|输入转数字前先验证；无结果不是运行错误。',
  '先测区间边界商品。|改最小最大值看筛选。|输入不合法区间，检查提示且不误报成功。',
);
explain(
  'manual-category-filter',
  '当前分类保存用户选择，filter从稳定原数组派生新数组。|按钮排他选中与结果渲染从同一分类状态产生。',
  '从全部切布局，观察3项变2项。|再回全部，数据应完整回来。|核对const原数组没有被重新赋值或破坏。',
);
explain(
  'sort',
  '筛选与排序共同派生展示数据，sort本身会修改接收数组。|数值比较用(a,b)=>a-b，保留原顺序先复制再排序。',
  '按价格排序，核对数值顺序。|组合筛选后再排序。|回到全部条件，确认数据没有丢失。',
);
explain(
  'validation',
  '校验输入后还要告诉用户哪里错、如何修正，并有明确成功状态。|原生约束处理基本格式，JS处理业务规则，服务端仍需验证真实请求。',
  '先留空或输入错误触发反馈。|逐项修正，核对错误是否消失。|提交成功时观察本地提示，本例不会创建真实账号。',
);
explain(
  'manual-form-rules',
  '用户名、重复密码、协议确认分别是不同规则。|错误文字关联对应控件，不能只弹一个笼统失败提示。',
  '逐项制造错误，找到对应消息。|修正一项不应误清其他错误。|全合法后提交，不刷新，也不保存示例密码。',
);
explain(
  'manual-atm',
  '余额是状态，金额输入与动作决定转换，校验失败不改变旧余额。|用整数分保存金额，显示时再换算；这只是本地状态练习。',
  '存入合法金额看余额增加。|取出超额，看错误且余额保持。|输入空值或非法金额，不应当作成功操作。',
);
explain(
  'manual-guess-number',
  '状态包括目标、剩余次数与是否结束；有效猜测才消耗机会。|成功或耗尽后禁用猜测，重新开始需要重置全部状态。',
  '先输入无效值确认次数不扣。|输入有效值看偏大/偏小反馈。|结束后点重新开始，检查按钮与次数恢复。',
);
explain(
  'todo',
  '任务数据包括文字与完成状态，操作改变数据后再渲染列表和统计。|用户文字用textContent防止当HTML解析。',
  '添加一项，看计数增加。|勾选完成，看样式与完成计数同步。|删除后核对总数，从当前集合派生统计。',
);
explain(
  'manual-profile-states',
  '已确认资料与编辑中的输入应区分；取消不应覆盖原资料。|确认先校验，再把编辑值提交到当前本地状态。',
  '进入编辑，查看旧资料填入控件。|改值后取消，旧资料保持。|再编辑并确认，显示新资料。',
);
explain(
  'manual-bar-chart',
  '数据最大值决定柱长比例：当前值÷最大值。|图形之外保留文本数值，避免只靠长度或颜色。',
  '找到最大数据对应最长柱。|改一项数据，重新计算相对比例。|全0数据时不能除0，要有安全回退。',
);
explain(
  'manual-thumbnail',
  '按钮控制当前索引，索引同时决定主图内容与选中按钮。|closest让点击按钮内部图形也能找到真正按钮。',
  '点第二缩略项看主图更新。|点击按钮内部文字/图形，仍正确定位。|检查aria-pressed只在当前按钮为true。',
);
explain(
  'carousel',
  '当前索引决定当前内容，前后切换要处理首尾边界。|视觉圆点是状态反馈，不等于完整自动播放控制。',
  '从首项点上一张，看如何回到末项。|从末项点下一张，看如何循环。|核对内容和圆点使用同一个索引。',
);
explain(
  'manual-carousel-parts',
  '索引是核心，圆点、前后按钮、定时器和手势都修改同一索引。|暂停与恢复要清理旧定时器，避免重复启动越来越快。',
  '手动切前后与圆点。|悬停或聚焦看自动推进暂停。|离开后恢复，再检查只存在一个推进周期。',
);
explain(
  'manual-magnifier',
  'client坐标减元素视口矩形得到内部坐标，遮罩必须限制在图内。|放大比=预览可用宽度÷遮罩宽度；背景尺寸和位置按同一比例换算。',
  '先把指针移到中心。|移到四角，遮罩不能超出边界。|用键盘移动，确认同一坐标算法也能更新放大图。',
);
explain(
  'drag',
  'dragstart开始拖动，dragover决定能否接受，drop处理落点。|视觉重排、数据顺序、键盘替代三者要协调。',
  '拖一项到新位置。|核对DOM顺序改变，不只是临时transform。|再用上下按钮完成同样操作。',
);
explain(
  'manual-scroll-nav',
  '滚到目标由导航动作实现，当前区块由观察可见性派生。|sticky头部仍保留布局占位；scroll-margin可避免目标标题被遮挡。',
  '点击导航到指定区块。|手动滚动，看选中项更新。|回顶部，检查头部与正文没有遮挡。',
);
explain(
  'manual-channel-indicator',
  '指示线的位置来自按钮与轨道的矩形差，宽度来自实际按钮。|轨道横向滚动和窗口尺寸变化后，需要重新换算坐标。',
  '点不同长度频道，线宽跟随。|横向滚动后再选，看线仍对准。|缩放预览触发尺寸观察，核对指示线位置。',
);
explain(
  'manual-dpr-calculator',
  'CSS像素决定布局尺寸，源像素决定素材采样，DPR连接显示密度概念。|160CSS像素显示宽可配320像素二倍图，但CSS宽度仍是160。',
  '先读设计显示宽度。|换DPR或倍率，计算建议素材宽度。|对照实际devicePixelRatio，不把所有CSS尺寸乘二。',
);
explain(
  'js-errors',
  '异常会中断当前正常路径，catch在边界处理，finally负责清理。|异步Promise拒绝要await或catch，不能指望同步try接住未来回调。',
  '先看成功路径的输出。|触发错误，看哪句之后不再执行。|核对catch反馈与finally是否都符合预期。',
);
explain(
  'manual-error-handling',
  '验证数字时0是合法值，不能简单用!value判断无效。|throw制造失败，catch显示错误，finally每条路径都做清理。',
  '测0和普通正数。|测非法输入，看错误被接住。|比较三次运行的finally输出。',
);
explain(
  'js-intersection',
  '目标与指定root相交时异步通知，threshold描述相交比例阈值。|root若是内部滚动盒，滚整个工作台不等同于滚它。',
  '滚动实验内部容器。|观察目标经过一半阈值时反馈。|改变threshold，比较通知条件。',
);
explain(
  'js-resize',
  'ResizeObserver监听元素自身尺寸，不只是window变化。|contentRect通常是内容盒，getBoundingClientRect常包含边框，两者别直接混算。',
  '拖动可调整区域或切设备宽度。|观察宽高输出更新。|核对输出测的是内容盒还是边框盒。',
);
explain(
  'js-file',
  '用户选择后浏览器才提供File对象，text异步读取文本。|accept只是选择提示，大小与类型仍要检查；textContent显示文件不会执行HTML。',
  '选择一个小文本文件。|等待读取后看内容与文件信息。|选择不合条件文件，检查明确拒绝反馈。',
);
explain(
  'js-canvas',
  'Canvas像素缓冲与CSS显示大小分开；绘图坐标使用内部画布坐标。|每次更新先清理旧图，图形不会自动成为可访问DOM节点。',
  '找到width/height与CSS大小。|改变数据或操作，看clearRect后重绘。|导出位图，再看配套文字仍提供含义。',
);
explain(
  'project-portfolio',
  '作品数组是数据，当前分类与详情目标是状态，卡片列表与dialog是输出。|筛选、Grid卡片和原生模态来自前面独立知识点。',
  '先按分类筛选，确认只改变派生列表。|点作品详情，检查dialog打开与关闭。|修改一条作品数据，看列表与详情同步来源。',
);
explain(
  'project-cart',
  '每个商品数量是状态，小计和总计由价格分×数量派生。|不重复保存一个易失同步的总额；展示时再格式化为元。',
  '增加/减少数量，看单行和总计一起更新。|到0和99边界，检查不能越界。|修改商品单价，核对所有派生金额。',
);
explain(
  'project-quiz',
  '题库是固定数据，题号、选择、分数和结束状态决定当前界面。|每题只能计分一次，重新开始必须重置相关状态。',
  '未选提交看required校验。|选答案看解释与计分。|完成后重来，确认题号和分数归零。',
);
explain(
  'project-expenses',
  '记录有稳定id，新增/删除修改集合，总额从集合重新计算。|金额字符串转换为整数分，名称用纯文字写入；数据只在当前实验内存。',
  '新增一条记录看表行与总额。|删除其中一条，核对其id而非易变化的数组位置。|输入不合法金额，确认不生成错误记录。',
);
explain(
  'project-focus',
  '目标时间与当前时间的差决定剩余时长，暂停保存剩余值。|setInterval只是刷新机会，不能假设每次回调恰好过去一秒。',
  '开始后看时间推进。|暂停等待再恢复，核对等待期间不扣时。|重新设置时长，确认清理旧计时器和状态。',
);
explain(
  'project-color',
  'HEX每两位表达一个RGB通道，解析后更新文字与样本背景。|复制可能因iframe或来源限制失败，需要可手动复制的回退。',
  '输入合法颜色看RGB与样本一致。|尝试非法值，检查反馈。|点复制，核对成功或明确回退文本。',
);
