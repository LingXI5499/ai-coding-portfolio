/* 教学主线和术语解释。数值来自当前示例，定义由人工编写。 */
const LEARNING_CHAPTERS = [];
const BEGINNER_PATHS = [
  {
    title: '① 读懂HTML结构',
    description: '先知道标签和元素，再学习正文、媒体、表格、表单。',
    ids: [
      'html-syntax',
      'html-tree',
      'html-document',
      'html-attributes',
      'heading',
      'links',
      'html-figure',
      'lists',
      'table-el',
      'html-boolean',
      'html-form-submit',
      'div',
      'semantic',
    ],
  },
  {
    title: '② 从CSS语法到布局',
    description: '先分类选择器、说明级联，再计算盒模型，观察文档流与现代布局。',
    ids: [
      'css-syntax',
      'css-style-sources',
      'css-selector-basics',
      'css-selector-attributes',
      'manual-selector-combinations',
      'css-selector-states',
      'css-cascade',
      'color',
      'type',
      'box-model',
      'css-normal-flow',
      'css-inline-boxes',
      'css-flex-axes',
      'css-grid-tracks',
      'css-flow-position',
      'responsive',
    ],
  },
  {
    title: '③ 让页面回应操作',
    description: '从值、变量、分支、循环、函数开始，再把数据与DOM、事件连接。',
    ids: [
      'js-variables',
      'js-types',
      'js-conversion',
      'js-control',
      'js-loops',
      'js-functions',
      'js-array',
      'js-object',
      'js-page-pipeline',
      'js-dom',
      'events',
      'js-delegation',
      'js-array-methods',
      'js-promise',
    ],
  },
  {
    title: '④ 拆布局、组合小案例',
    description: '把已经学会的知识放回尺寸图与组件，再做完整的前端组合练习。',
    ids: [
      'layout-wireframe-960',
      'manual-wrapper',
      'manual-media-row',
      'manual-password-toggle',
      'manual-select-all',
      'manual-category-filter',
      'project-portfolio',
      'project-cart',
    ],
  },
];
function chapter(cat, title, intro, requires, ids) {
  LEARNING_CHAPTERS.push({
    cat,
    title,
    intro,
    requires: requires.split(' ').filter(Boolean),
    ids: ids.split(' ').filter(Boolean),
  });
}
chapter(
  'html',
  '01 · 先认识 HTML 的组成',
  '先读懂标签、元素、属性和嵌套，再看完整文档。HTML 表达内容身份，CSS 管外观，JS 管行为。',
  '',
  'html-syntax html-tree html-document manual-head-meta html-whitespace html-attributes',
);
chapter(
  'html',
  '02 · 文字、链接与图片',
  '按上传文档的顺序学习标题、段落、链接、图片；先会表达内容，再考虑装饰。',
  'html-syntax html-tree',
  'heading html-inline links manual-paths html-figure html-picture',
);
chapter(
  'html',
  '03 · 列表、表格与数据关系',
  '列表是同类项目，表格是二维数据；不要为了画格子就滥用表格。',
  'html-syntax html-tree',
  'lists html-description table-el manual-table-span html-table-span',
);
chapter(
  'html',
  '04 · 表单与原生输入',
  '先把标签、字段名、输入值和提交连起来，再学分组与各类输入。',
  'html-syntax html-attributes',
  'html-boolean html-form-submit forms html-fieldset html-input-types html-select html-accessibility',
);
chapter(
  'html',
  '05 · 容器、语义与原生能力',
  'div / span 没有特定内容语义；语义元素说明区域用途，不自动生成漂亮布局。新控件与媒体放在基础之后。',
  'html-tree html-form-submit',
  'div semantic native-details html-progress-meter html-dialog html-popover html-template native-ui html-media media html-embed',
);
chapter(
  'css',
  '06 · CSS 写法与选择器分类',
  '先知道规则写在哪里，再分类学习选谁：标签、类、ID、属性、关系、状态、伪元素。',
  'html-syntax html-tree html-attributes',
  'css-syntax css-style-sources css-selector-basics css-selector-attributes manual-selector-combinations css-selector-states css-selectors manual-link-states css-pseudo css-has',
);
chapter(
  'css',
  '07 · 冲突、继承与公共样式',
  '同一元素可以命中很多规则；先找来源，再比较层级、重要性和优先级。继承不是复制所有属性。',
  'css-syntax css-selector-basics',
  'css-cascade manual-specificity css-layers manual-reset-focus',
);
chapter(
  'css',
  '08 · 颜色、文字与背景',
  '先控制能直接看见的颜色、文字大小、行间距与背景，再进入尺寸和布局。',
  'css-syntax css-selector-basics',
  'color type manual-font-shorthand css-text-wrap css-background manual-background-modes css-object-fit manual-baseline manual-opacity shadow filters manual-sprite manual-icon-alternative',
);
chapter(
  'css',
  '09 · 单位、盒模型与尺寸',
  '内容 → 内边距 → 边框 → 外边距。先算实际占用宽度，再判断能不能放进父盒。',
  'css-syntax',
  'css-units box-model css-sizing manual-border-calculation css-math css-aspect-ratio css-logical css-custom-properties manual-less-native',
);
chapter(
  'css',
  '10 · 文档流与溢出',
  '不定位时先按默认排版观察占位。块、行内、行内块是排版行为；高度增加会推动后面的正常流内容。',
  'css-syntax box-model',
  'css-normal-flow css-inline-boxes css-display manual-display-modes css-margin manual-margin-collapse overflow',
);
chapter(
  'css',
  '11 · Flex 与 Grid 布局',
  '父盒选择布局算法，直接子元素成为项目。先理解轴和轨道，再学伸缩、命名区域与自适应。',
  'css-normal-flow css-inline-boxes box-model',
  'css-flex-axes flex css-flex-grow css-grid-tracks grid-css css-grid-areas css-auto-fit',
);
chapter(
  'css',
  '12 · 定位、浮动与层叠',
  '先观察是否保留原占位，再找定位参考；最后处理浮动包含和层叠。z-index 不是全页面统一排名。',
  'css-normal-flow box-model',
  'css-flow-position position css-float-wrap manual-float-clear css-bfc css-stacking',
);
chapter(
  'css',
  '13 · 状态、变换与动画',
  '静态效果 → 状态变化 → 过渡 → 连续动画。区别布局位置与绘制位置，保留键盘和减少动画的体验。',
  'css-selector-states css-flow-position',
  'hover transform manual-transform-order transitions manual-double-door manual-skew manual-perspective manual-rotate3d manual-animation-controls manual-steps-animation manual-multiple-animation manual-marquee css-reduced-motion',
);
chapter(
  'css',
  '14 · 屏幕适配与渐进增强',
  '先做可读的基础，再按屏幕或容器条件增强。媒体查询不会自动修复固定宽度。',
  'css-flex-axes css-grid-tracks css-units',
  'responsive manual-media-order manual-rem-design manual-vw-vh container css-scroll-snap css-supports css-print',
);
chapter(
  'layout',
  '15 · 从尺寸图到页面区域',
  '先拆外层区域，再拆内层组件；宽度与间隙必须算清楚。本章从上传的 960px 图开始。',
  'css-grid-tracks box-model css-normal-flow',
  'layout-wireframe-960 manual-wrapper single two three grid masonry feed dashboard split immersive landing table kanban mobile',
);
chapter(
  'layout',
  '16 · 可复用的小组件布局',
  '每个组件拆成结构、布局约束、装饰、状态。先做静态版本，再到 JS 章节加入行为。',
  'css-flex-axes css-grid-tracks css-flow-position',
  'manual-header-search manual-sidebar-hero manual-section-title manual-course-card manual-hover-reveal manual-footer-services manual-topic-overlay manual-mobile-header manual-media-row manual-bottom-bar manual-native-grid12 manual-button-table manual-empty-state manual-coupon',
);
chapter(
  'js',
  '17 · JS 从值和变量开始',
  '先看数据与输出。变量保存值，运算产生新值；页面输入通常是字符串，需要显式转换。',
  'html-syntax css-syntax',
  'js-variables js-types manual-types js-conversion manual-conversion manual-increment js-operators manual-short-circuit js-string manual-string-methods js-number manual-number-rounding manual-random js-date',
);
chapter(
  'js',
  '18 · 分支、循环与函数',
  '先让代码按条件走不同路径，再重复执行，最后把重复步骤包装成函数。参数是输入，return 是输出。',
  'js-variables js-types js-conversion',
  'js-control manual-leap-year manual-switch js-loops manual-loops manual-multiplication js-functions manual-parameters',
);
chapter(
  'js',
  '19 · 数组、对象与数据处理',
  '数组按索引放多项，对象按键名放字段。先会增删查，再学转换、统计、排序与复制。',
  'js-functions js-loops',
  'js-array manual-array-mutate manual-array-statistics manual-bubble-sort js-array-search manual-find-every js-array-methods manual-reduce js-object manual-destructure manual-object-methods js-json js-map-set manual-copy-depth manual-recursion-copy js-regexp manual-regex-anchors manual-regex-flags',
);
chapter(
  'js',
  '20 · DOM、事件与页面变化',
  '查询元素 → 监听操作 → 修改状态 → 更新内容或类名。代码不一定一加载就全部执行，监听器等事件发生才运行。',
  'html-tree css-selector-basics js-functions js-object',
  'js-page-pipeline js-dom manual-dom-tree manual-array-like events keyboard manual-input-change js-bubbling manual-event-flow manual-mouseenter js-delegation js-custom-event js-abort-listener js-formdata',
);
chapter(
  'js',
  '21 · 从小交互组合成组件',
  '每例追踪输入、状态、输出：用户做什么，变量怎么变，哪个元素被更新。',
  'js-dom events js-array js-functions',
  'manual-password-toggle manual-select-all manual-favorite-state theme tabs-js modal manual-accordion search-js manual-price-filter manual-category-filter sort validation manual-form-rules manual-atm manual-guess-number todo manual-profile-states manual-bar-chart manual-thumbnail carousel manual-carousel-parts manual-magnifier drag manual-scroll-nav manual-channel-indicator manual-dpr-calculator',
);
chapter(
  'js',
  '22 · 时间、异步与浏览器 API',
  '同步代码先运行；定时器、Promise 与用户事件在后续时机继续执行。浏览器能力还受权限、来源与环境影响。',
  'js-functions js-dom events js-json',
  'js-errors manual-error-handling js-promise js-async js-promise-all js-event-loop manual-event-loop js-fetch js-debounce manual-debounce js-throttle manual-throttle manual-hover-intent progress manual-agreement-countdown manual-date-countdown manual-clock js-raf js-intersection js-resize js-file js-canvas js-storage manual-storage-json js-url manual-bom-url manual-history',
);
chapter(
  'js',
  '23 · 作用域、原型与模块进阶',
  '这些解释语言机制，建立在值、函数、对象基础上；不要求零基础先背闭包和原型链。',
  'js-functions js-object js-array',
  'manual-scope-hoist js-closure manual-iife js-this manual-this-binding manual-constructor manual-prototype-chain js-class js-modules',
);
chapter(
  'project',
  '24 · 组合验证与作品实践',
  '先列出数据和页面区域，再连上事件和状态。这里把已经学过的小知识点组合起来。',
  'js-dom events js-array-methods css-grid-tracks',
  'project-portfolio project-cart project-quiz project-expenses project-focus project-color',
);
function organizeLessons(input) {
  const byId = new Map(input.map((d) => [d.id, d]));
  const output = [];
  for (const [chapterIndex, section] of LEARNING_CHAPTERS.entries()) {
    for (const [lessonIndex, id] of section.ids.entries()) {
      const demo = byId.get(id);
      if (!demo) continue;
      demo.originalModule = demo.module;
      demo.module = section.title;
      demo.chapterIndex = chapterIndex;
      demo.lessonIndex = lessonIndex;
      demo.prerequisites = section.requires.filter((key) => key !== id);
      demo.detail ||= LESSON_DETAILS[demo.id];
      output.push(demo);
      byId.delete(id);
    }
  }
  if (byId.size) throw new Error('课程未分配学习章节：' + [...byId.keys()].join(', '));
  return output;
}

// 属性说明依次是：含义 / 常见值与限制 / 初始值（CSS 规范，不是浏览器默认样式）/ 继承。
const CSS_HELP = {};
function cssHelp(names, meaning, values, initial, inherits = false) {
  for (const name of names.split(' '))
    CSS_HELP[name] = { meaning, values, initial, inherits };
}
cssHelp(
  'display',
  '决定盒子的外部排版角色和内部子元素布局算法。',
  'block 另起一行；inline 随文字；inline-block 可设宽高；flex / grid 布局直接子元素；none 不生成盒子。',
  'inline',
);
cssHelp(
  'width height',
  '设置盒子的宽度 / 高度。默认 content-box 时指内容区域；border-box 时包含内边距与边框。',
  'px 固定长度；% 要有对应尺寸参考；auto 由布局算法决定。普通非替换 inline 的 width / height 不决定尺寸。',
  'auto',
);
cssHelp(
  'min-width min-height',
  '限制尺寸的下限，防止盒子缩得过小。',
  '0 允许继续收缩；Flex / Grid 的自动最小尺寸可能受内容影响；不能只看 width 判断最终大小。',
  'auto',
);
cssHelp(
  'max-width max-height',
  '限制尺寸的上限，通常用于阅读宽度或图片不超出容器。',
  'none 不设上限；100% 常限制为包含块对应尺寸。min 的约束可胜过 max。',
  'none',
);
cssHelp(
  'box-sizing',
  '决定 width / height 计算时包含哪些盒模型层。',
  'content-box：外宽=width+左右padding+左右border；border-box：width 已包含 padding 和 border，但不含 margin。',
  'content-box',
);
cssHelp(
  'padding padding-top padding-right padding-bottom padding-left padding-block padding-inline',
  '内边距：内容到边框之间的留白，会显示盒子的背景。',
  '不允许负值；1值四边、2值上下/左右、3值上/左右/下、4值上/右/下/左。百分比参照包含块的内联尺寸。',
  '0',
);
cssHelp(
  'margin margin-top margin-right margin-bottom margin-left margin-block margin-inline margin-inline-end',
  '外边距：盒子外部与相邻内容之间的空白，不画自身背景。',
  '可以负值；auto 可分配可用空间；普通流相邻块的上下 margin 可能折叠，Flex / Grid 项不会这样折叠。简写顺序同 padding。',
  '0',
);
cssHelp(
  'border border-top border-right border-bottom border-left border-inline-start',
  '边框：围绕 padding 外侧画的线，参与盒子尺寸计算。',
  '常写 宽度 线型 颜色，例如 1px solid #333；不写可见线型时默认 none，因此只有颜色通常看不到边框。',
  'medium none currentColor',
);
cssHelp(
  'border-color',
  '只改边框颜色，不创建可见边框线型。',
  '颜色名 / #十六进制 / rgb()；可按上右下左给多值。要先有 border-style。',
  'currentColor',
);
cssHelp(
  'border-radius',
  '把边框和背景的角裁成圆弧。',
  'px / %；999px 常做胶囊；50% 在等宽高盒上形成圆形。不会自动裁掉溢出的子元素。',
  '0',
);
cssHelp(
  'border-collapse',
  '控制表格相邻单元格的边框是否合并。',
  'collapse 合并；separate 分开；只用于表格相关布局。',
  'separate',
  true,
);
cssHelp(
  'color',
  '文字的前景色，也是 currentColor 的来源。',
  'red、#2563eb、rgb(37 99 235) 等；不等于背景色。子元素没有更直接设置时通常继承。',
  'CanvasText',
  true,
);
cssHelp(
  'background-color',
  '盒子的背景填色。',
  'transparent 透明；颜色可含 alpha 透明度，只影响这层背景，不让文字一起透明。',
  'transparent',
);
cssHelp(
  'background',
  '背景简写，一次设置颜色、图片、位置、大小、平铺等。',
  '未写的子属性会被简写重置；位置 / 大小用斜杠分隔；多层背景用逗号，先写的通常在上面。',
  '各背景子属性的初始值',
);
cssHelp(
  'background-image',
  '把图片或渐变作为背景画在盒子里，不成为 DOM 内容。',
  'url() 图片；linear-gradient() 线性渐变；多张可用逗号；背景不自动撑开盒子高度。',
  'none',
);
cssHelp(
  'background-position',
  '定位背景图。',
  'center 居中；负像素可移动精灵图；百分比按“容器尺寸减图像尺寸”的差值定位，不是直接拿容器乘百分比。',
  '0% 0%',
);
cssHelp(
  'background-size',
  '缩放背景图。',
  'cover 覆盖盒子可能裁切；contain 完整放入可能留白；两个长度分别设宽高；一个长度另一边 auto。',
  'auto auto',
);
cssHelp(
  'background-repeat',
  '背景图是否重复平铺。',
  'repeat 双向；no-repeat 单张；repeat-x 横向；repeat-y 纵向。',
  'repeat',
);
cssHelp(
  'font-family',
  '选择文字字体，按列表顺序查找可用字体。',
  '字体名可用引号，末尾给 sans-serif / serif / monospace 等通用族；不同系统字形可能不同。',
  '由用户代理决定',
  true,
);
cssHelp(
  'font-size',
  '设字体尺寸，通常也影响 em 和文字换行。',
  '16px 固定CSS长度；1rem 跟根字体；1em 在 font-size 中跟父级字体。',
  'medium',
  true,
);
cssHelp(
  'font-weight',
  '控制字重。',
  'normal 常对应400；bold 常对应700；数字100–900等；实际显示取决于字体可用字重。',
  'normal',
  true,
);
cssHelp(
  'font',
  '字体简写，可同时设样式、字重、字号/行高、字体族。',
  '至少需要字号和字体族，例如 16px/1.5 sans-serif；会重置没写出的相关子属性。',
  '各字体子属性的初始值',
  true,
);
cssHelp(
  'line-height',
  '控制每行文字行盒子的高度，不是元素整体高度。',
  '无单位1.5按当前元素字号计算；20px固定；normal由字体/浏览器决定；无单位值继承后仍按子级字号计算。',
  'normal',
  true,
);
cssHelp(
  'letter-spacing',
  '控制字符间额外距离。',
  'normal 使用字体默认；0.1em 增加字距；负值拉近；不是单词间距。',
  'normal',
  true,
);
cssHelp(
  'font-variant-numeric',
  '选择数字的字体特性。',
  'tabular-nums 等宽数字，使金额、计时数字更新时较稳定；需要字体支持。',
  'normal',
  true,
);
cssHelp(
  'text-align',
  '控制块容器里行内内容的对齐，不直接移动块盒子自身。',
  'left / right / center / start / end；不能用它让任意块级 div 在父盒里居中。',
  'start',
  true,
);
cssHelp(
  'text-decoration',
  '给文字加下划线、删除线等装饰。',
  'none 无装饰；underline 下划线；line-through 删除线；并不是通常意义的继承，但祖先装饰可穿过后代文本。',
  '各装饰子属性的初始值',
);
cssHelp(
  'white-space',
  '决定空白折叠和自动换行规则。',
  'normal 折叠并换行；nowrap 折叠不自动换行；pre 保留但不自动换行；pre-wrap 保留并可换行。',
  'normal',
  true,
);
cssHelp(
  'overflow-wrap',
  '长单词或URL太长时，是否允许额外断行。',
  'normal 按常规断行；anywhere 在需要时任意位置断开，避免长文本撑破盒子。',
  'normal',
  true,
);
cssHelp(
  'text-overflow',
  '行内方向的文字被裁切时，如何表示被截掉的内容。',
  'ellipsis 显示省略号；通常配合有限宽度、overflow: hidden 和 white-space: nowrap；单独写不会自动截断。',
  'clip',
);
cssHelp(
  'vertical-align',
  '调整行内级盒子在行盒子中的垂直位置，或表格单元格内容的垂直对齐。',
  'baseline 基线；top / middle / bottom；不用于把普通块盒子或Flex项上下居中。',
  'baseline',
);
cssHelp(
  'list-style',
  '设置列表标记样式、位置与图片。',
  'none 去标记；disc 实心圆；decimal 数字；去掉标记不等于去掉 ul 的 padding。',
  'disc outside none',
  true,
);
cssHelp(
  'overflow overflow-x overflow-y',
  '内容超出盒子时，控制显示、裁切与滚动。',
  'visible 显露；hidden 裁切但可程序滚动；auto 需要时提供滚动；scroll 滚动容器；clip 裁切且不建立滚动容器。',
  'visible',
);
cssHelp(
  'position',
  '设置定位方式。',
  'static 正常；relative 保留占位偏移；absolute / fixed 不保留普通流占位；sticky 保留占位并受滚动阈值约束。',
  'static',
);
cssHelp(
  'top right bottom left inset',
  '定位盒子相对参考边的位置或偏移；static 时不按这些值定位。',
  'relative 相对原位置偏移；absolute 相对其定位包含块；fixed 常相对视口。inset 为四边简写，顺序上右下左。',
  'auto',
);
cssHelp(
  'z-index',
  '控制盒子在当前层叠上下文中的层次。',
  'auto 或整数；适用于定位元素，也适用于Flex/Grid项；不能靠超大数越过祖先层叠上下文。',
  'auto',
);
cssHelp(
  'float',
  '让盒子浮到一侧，使行内内容环绕。',
  'left / right / none；浮动影响行盒可用宽度，普通父盒不总把浮动计入高度。',
  'none',
);
cssHelp(
  'clear',
  '使当前盒子避开指定侧的前置浮动。',
  'left 左侧、right 右侧、both 两侧；主要处理浮动，不是清除定位。',
  'none',
);
cssHelp(
  'flex-direction',
  '设置Flex主轴方向。',
  'row 横向（受书写方向影响）；column 纵向；*-reverse 反向，视觉顺序不等于DOM顺序。',
  'row',
);
cssHelp(
  'flex-wrap',
  'Flex 项装不下时是否换行。',
  'nowrap 默认不换行并可能收缩；wrap 多行；不是给文字换行。',
  'nowrap',
);
cssHelp(
  'flex',
  'Flex项的 grow、shrink、basis 简写。',
  '0 1 auto 为初始组合；1 通常展开为 1 1 0%；none=0 0 auto；剩余空间与自动最小尺寸也参与计算。',
  '0 1 auto',
);
cssHelp(
  'flex-grow',
  'Flex项按比例分配正的剩余空间。',
  '0 不增长；1、2 等按比例分配“新增空间”，不是最终宽度一定1:2。',
  '0',
);
cssHelp(
  'flex-shrink',
  'Flex项在空间不足时分担收缩。',
  '0 不收缩；1 默认可收缩；分担还按基础尺寸加权，并受最小尺寸约束。',
  '1',
);
cssHelp(
  'flex-basis',
  '设Flex项参与空间分配前的主轴基础尺寸。',
  'auto 常参考主轴 width/height 或内容；0 从零基础分配；不是最终宽度。',
  'auto',
);
cssHelp(
  'justify-content',
  '沿Flex主轴分配可用空间；Grid中可对齐整个网格轨道。',
  'start / center / end；space-between 中间分；space-around 两侧半份；space-evenly 所有间隔相等。先判断主轴与剩余空间。',
  'normal',
);
cssHelp(
  'align-items',
  '统一设置项目在交叉轴 / 网格区域的对齐。',
  'normal 在常见Flex情况下表现为stretch；center居中；start起点；end终点；显式尺寸可阻止拉伸。',
  'normal',
);
cssHelp(
  'align-content',
  '对齐多条Flex行或Grid轨道整体。',
  '单行Flex容器不会因此形成多行对齐；需要交叉轴额外空间才看得出差异。',
  'normal',
);
cssHelp(
  'justify-self',
  '设置单个Grid项在自身区域内的内联轴对齐。',
  'start / end / center / stretch；不用于对齐单个Flex项的主轴位置。',
  'auto',
);
cssHelp(
  'place-items',
  'align-items 与 justify-items 的简写，常用于Grid两方向对齐。',
  'center 常让内容在格子内居中；Flex下 justify-items 不起作用，不要把它当通用双轴居中。',
  'normal normal',
);
cssHelp(
  'gap column-gap row-gap',
  '容器内部项目或轨道之间的间隙，不是容器外边距。',
  'gap 一值行列相同，两值是行间距/列间距；3项有2个内部间隙。Flex、Grid、多列中使用。',
  'normal（Flex/Grid 常为0）',
);
cssHelp(
  'grid-template-columns grid-template-rows',
  '定义Grid显式列 / 行轨道尺寸。',
  '100px 固定；1fr 分剩余空间；repeat(3, 1fr) 重复3列；minmax(0, 1fr) 可避免内容最小宽度撑开轨道。',
  'none',
);
cssHelp(
  'grid-template-areas',
  '用字符串命名Grid区域，使布局名称对应结构。',
  '同一行用空格分区，每行放引号；同名区域必须是矩形；点号表示空格位。',
  'none',
);
cssHelp(
  'grid-area',
  '将Grid项放入命名区域，或简写起止行列线。',
  'header 等名称对应 template-areas；数字顺序为 row-start / column-start / row-end / column-end。',
  'auto / auto / auto / auto',
);
cssHelp(
  'grid-column grid-row',
  '指定Grid项从哪条列 / 行线开始，到哪条线结束。',
  '1 / 3 跨两列；1 / -1 跨整个显式网格；span 2 跨两条轨道。',
  'auto / auto',
);
cssHelp(
  'columns',
  '多栏排版的栏宽 / 栏数简写，内容向下流动再进入下一栏。',
  '3 表示栏数；16rem 表示期望栏宽；与Grid逐格排列不同。',
  'auto auto',
);
cssHelp(
  'break-inside',
  '避免一个盒子在分栏或分页内部被拆开。',
  'avoid 尽量避免；无法容纳超大内容时仍可能需要断开，不是绝对保证。',
  'auto',
);
cssHelp(
  'aspect-ratio',
  '指定盒子的首选宽高比例。',
  '16 / 9 表示宽高比；通常需要至少一个尺寸为auto才影响自动尺寸；内容或约束可能改变结果。',
  'auto',
);
cssHelp(
  'object-fit',
  '控制 img / video 的内容如何装入已经定好大小的元素盒子。',
  'cover 保持比例覆盖可能裁切；contain 完整显示可能留白；fill 可拉伸。不会自动决定img盒子的外部尺寸。',
  'fill',
);
cssHelp(
  'object-position',
  '定位 img / video 内容在盒子中的位置。',
  '50% 50% 居中；top靠上；配合cover决定裁掉哪部分。',
  '50% 50%',
);
cssHelp(
  'opacity',
  '让整个元素连同子元素一起透明。',
  '0 完全透明仍可能占位和响应指针；1 不透明；与只改变背景alpha不同。小于1可建立层叠上下文。',
  '1',
);
cssHelp(
  'box-shadow',
  '在盒子周围画阴影，不增加正常流占位尺寸。',
  'x偏移 y偏移 模糊半径 扩展半径 颜色；inset 为内阴影；多个用逗号。',
  'none',
);
cssHelp(
  'outline',
  '在边框外画轮廓，不占正常布局空间，常用作键盘焦点提示。',
  '3px solid blue；不要随意删除焦点轮廓；具体绘制位置可因形状不同。',
  'medium none auto',
);
cssHelp(
  'outline-color',
  '设置轮廓颜色。',
  '只有轮廓样式可见时才看得到；支持颜色或auto。',
  'auto',
);
cssHelp(
  'outline-offset',
  '设置轮廓与边框之间的距离。',
  '正值向外，负值向内；不增加盒子占位。',
  '0',
);
cssHelp(
  'transform',
  '改变盒子的绘制坐标，如平移、缩放和旋转，通常保留原来的布局占位。',
  'translate 平移；scale缩放；rotate旋转；多个函数按组合顺序生效，不可随便交换。非none通常创建层叠上下文和定位包含块。',
  'none',
);
cssHelp(
  'transform-origin',
  '设置变换的参考原点。',
  'center center 默认居中；left top 左上；50% 100% 底部中央；影响旋转与缩放轨迹。',
  '50% 50% 0',
);
cssHelp(
  'transform-style',
  '子元素是否保留3D空间位置。',
  'flat压平；preserve-3d保留；它不自动继承到所有后代，某些分组属性也会导致压平。',
  'flat',
);
cssHelp(
  'perspective',
  '为子元素的3D变换设置透视距离，制造近大远小。',
  '例如600px；数值越小透视越强；不是单纯缩放，也不等于 transform: perspective() 完全相同的应用方式。',
  'none',
);
cssHelp(
  'backface-visibility',
  '3D转动后是否显示背面。',
  'visible可见；hidden背向观察者时隐藏；常用于翻转卡片。',
  'visible',
);
cssHelp(
  'transition',
  '属性值因状态改变时，用一段时间从旧值过渡到新值。',
  '常写 属性 时长 缓动 延迟；例如 transform 0.3s ease；不会自动创造状态变化。',
  'all 0s ease 0s',
);
cssHelp(
  'animation',
  '按 @keyframes 定义的关键帧自动随时间变化。',
  '名称 时长 缓动 延迟 次数 方向 填充模式 播放状态；duration 默认0s可能看不到动画。',
  '各动画子属性的初始值',
);
cssHelp(
  'animation-delay',
  '控制动画开始前的等待或起始进度。',
  '正数延迟开始；负数从已进行一段时间的状态开始；秒s或毫秒ms。',
  '0s',
);
cssHelp(
  'animation-play-state',
  '暂停或继续动画时间线。',
  'running播放；paused暂停；恢复通常从暂停处继续，不是重头开始。',
  'running',
);
cssHelp(
  'content',
  '生成 ::before / ::after 等伪元素的内容。',
  '字符串需要引号；空字符串也可生成装饰盒；重要正文不要只放生成内容里。',
  'normal',
);
cssHelp(
  'filter',
  '给元素整体画面加滤镜效果。',
  'blur(4px)模糊；grayscale(1)灰度；brightness()亮度；不会改变普通占位，可能建立新的层叠上下文。',
  'none',
);
cssHelp(
  'backdrop-filter',
  '处理元素背后可见区域的画面，常用于玻璃模糊。',
  'blur(8px)；自身背景需要一定透明度才看得到背后；支持情况要验证。',
  'none',
);
cssHelp(
  'clip-path',
  '裁切元素的可见区域，布局占位通常不变。',
  'circle()圆；polygon()多边形；被裁掉部分不能当作可见内容，谨慎裁切焦点和重要文字。',
  'none',
);
cssHelp(
  'container-type',
  '让元素成为可查询尺寸的容器，并应用相应尺寸约束。',
  'inline-size 常查询内联尺寸；size 查询两轴；@container 主要根据祖先容器而不是视口。',
  'normal',
);
cssHelp(
  'scroll-snap-type',
  '给滚动容器启用吸附轴与严格程度。',
  'x mandatory横向强吸附；y proximity接近时吸附；子项还需要scroll-snap-align。',
  'none',
);
cssHelp(
  'scroll-snap-align',
  '定义滚动子项吸附时与容器对齐的位置。',
  'start 起点；center 中央；end终点；容器需启用吸附。',
  'none',
);
cssHelp(
  'scroll-margin-top',
  '为滚入视图与吸附设置顶部额外滚动区域。',
  '例如80px避免标题被固定导航遮住；不等于真实margin，不推动相邻盒子。',
  '0',
);
cssHelp(
  'cursor',
  '改变指针经过元素时的光标外观。',
  'pointer手形；not-allowed禁止提示；wait等待；仅改光标不实现禁用或点击行为。',
  'auto',
  true,
);
cssHelp(
  'pointer-events',
  '控制元素是否作为指针事件的命中目标。',
  'none让命中穿过；auto正常；不等于disabled，也不一定取消键盘聚焦。',
  'auto',
  true,
);
cssHelp(
  'touch-action',
  '告知浏览器可接管哪些触摸手势。',
  'none禁止浏览器接管该元素手势；pan-y允许纵向平移；避免为了拖拽就破坏整页滚动。',
  'auto',
);
cssHelp(
  'resize',
  '允许用户拖动元素调整尺寸。',
  'none不允许；vertical纵向；both双向；通常需配合非visible/clip的overflow。',
  'none',
);
cssHelp(
  'accent-color',
  '为支持的原生表单控件设置强调色。',
  '颜色值；不是所有控件的每一部分都会变成指定颜色，外观由浏览器决定。',
  'auto',
  true,
);
cssHelp(
  'fill',
  '设置SVG形状内部填充颜色。',
  '颜色 / none；不等于HTML背景；默认通常黑色。',
  'black',
  true,
);
cssHelp(
  'stroke',
  '设置SVG形状轮廓颜色。',
  '颜色 / none；还可用stroke-width设置线宽。',
  'none',
  true,
);
cssHelp(
  'stroke-width',
  '设置SVG描边的宽度。',
  '数值或长度；SVG坐标和CSS像素不是总能直接等同，要看viewBox缩放。',
  '1',
  true,
);

const HTML_ATTRIBUTE_HELP = {
  id: '文档内唯一标识；CSS 用 #名称，JS 可查询它；不是提交字段名。',
  class: '用空格分隔的类名；CSS 用 .名称，可给多项复用，也可一项多个类。',
  style: '只作用于这个元素的行内CSS声明；写 属性: 值;，不是完整选择器规则。',
  title: '补充提示文字；不代替可见标签或可访问名称。',
  lang: '说明内容语言，例如 zh-CN；不是改变网页文字的翻译开关。',
  charset: '字符编码；utf-8可表达中文，避免乱码。',
  name: '表单控件中是提交字段名；meta中是元数据种类，要按所属标签判断。',
  content: 'meta元数据的具体值，通常不会直接显示在正文。',
  href: '链接目标或关联资源地址；#名称跳到该id；相对路径参照文档基准地址。',
  src: '图片、音视频、iframe等资源的地址；加载成功需要资源存在和环境允许。',
  srcset: '列出候选图片与宽度或密度描述，让浏览器选择资源。',
  sizes: '告诉浏览器响应式图片在不同条件下预计占多宽；不是直接设置CSS宽度。',
  alt: 'img的文字替代；内容图描述信息，纯装饰常用空字符串。',
  width: '宽度设置；HTML中的无单位数字常为CSS像素，SVG则可能处在自身坐标系统。',
  height: '高度设置；与width可建立图片固有比例，实际布局还受CSS约束。',
  type: '按元素解释：input的输入类型、button的按钮行为、script的模块类型等。',
  value: '初始或预设值；用户交互后的当前值通常用DOM的value读取。',
  for: 'label关联具有对应id的控件；output中可说明计算涉及哪些控件。',
  placeholder: '输入提示，输入内容后消失；不代替label。',
  required: '布尔属性，出现则要求填写；参与原生表单校验。',
  disabled: '布尔属性，出现则禁用；写="false"仍启用禁用状态；通常不提交该控件。',
  readonly: '布尔属性，禁止用户编辑，但通常仍可聚焦且会提交；只适用于支持它的控件。',
  checked: '复选框或单选项的初始选中；实时状态读.checked。',
  selected: 'option的初始选中；实时状态读.selected或select.value。',
  min: '数值/日期等下限，或meter/progress相关边界；按标签类型解释。',
  max: '数值/日期等上限，或progress/meter最大值。',
  step: '允许的取值步长；number中默认通常为1，可用any允许任意合法步长。',
  minlength: '允许的文本最短长度；不是元素宽度。',
  maxlength: '限制输入文本长度；不是数值最大值，数值范围用max。',
  pattern: '表单文本的校验模式，通常要求整项匹配；不要把它当作随便搜索子串的正则。',
  autocomplete: '浏览器自动填充提示；on/off或具体字段类型。',
  autofocus: '布尔属性，自动聚焦，可能干扰阅读或弹出移动键盘。',
  multiple: '布尔属性，允许多个选项、文件或邮箱等；取决于控件。',
  accept: '文件选择器的类型提示，不是安全校验；仍需检查实际文件。',
  action: '表单提交目标地址；真实处理通常需要服务端。',
  method: '提交方式，常见get/post；本地实验若preventDefault则没有真正提交。',
  rows: 'textarea可见文本行数提示；CSS仍可调整高度。',
  cols: 'textarea可见字符列数提示；不是表格列数。',
  colspan: '单元格跨越的列数；需要同时保证每行总列数一致。',
  rowspan: '单元格跨越的行数；被覆盖的后续位置不要再重复创建单元格。',
  scope: 'th表头对应的方向，如col或row；帮助理解表头关系。',
  headers: '表格单元格关联的表头id列表。',
  target: '链接打开的浏览上下文，_blank通常打开新页。',
  rel: '当前文档与链接资源的关系，如stylesheet、noopener。',
  loading: 'lazy可延后非首屏图像/iframe加载；不是确保立即加载的命令。',
  controls: '布尔属性，显示音视频原生播放控件。',
  autoplay: '请求自动播放，但浏览器可能阻止，尤其是有声音时。',
  muted: '布尔属性，初始静音，常配合自动播放。',
  loop: '布尔属性，播放结束后循环。',
  preload: '音视频预加载提示，浏览器可能根据环境调整。',
  poster: 'video播放前展示的海报图片。',
  open: 'details/dialog的打开状态；dialog推荐showModal以建立模态行为。',
  popover: '启用原生弹出层；需要触发元素或JS来打开。',
  popovertarget: '按钮关联的popover元素id。',
  tabindex: '控制键盘焦点；0加入自然顺序，-1可程序聚焦；避免随意使用正数。',
  role: '补充可访问角色；优先使用原生语义元素，不会自动实现键盘行为。',
  hidden: '通常使元素不呈现；特殊until-found值还有查找相关行为。',
  datetime: 'time等元素的机器可读时间，正文仍可显示人类易读时间。',
  viewBox: 'SVG内部坐标范围，格式min-x min-y width height；缩放后不等于屏幕像素。',
  d: 'SVG path的路径绘制指令，不是普通文字。',
  fill: 'SVG内部填充色；CSS也可设置fill并参与级联。',
  stroke: 'SVG描边色。',
  sandbox: 'iframe能力限制；允许项必须明确，不会自动赋予宿主访问权限。',
  srcdoc: 'iframe内嵌HTML源码；它作为子文档解析，不是外部网址。',
};
const JS_SYNTAX_HELP = {
  const: '声明绑定，初始化后不能重新赋值；对象内部字段仍可能改变。',
  let: '声明可重新赋值的变量，作用域由所在块决定。',
  var: '旧的函数级声明，存在提升；先学let/const再比较差异。',
  if: '条件为真才进入分支；判断表达式不是给变量赋值。',
  else: '前面的if条件不满足时进入另一条路径。',
  for: '重复执行：先初始化，再判断，再执行，最后更新；注意退出条件。',
  while: '先判断条件再重复，需确保条件能变成假以免无限循环。',
  function: '定义可调用的步骤；函数体通常等到调用才执行。',
  return: '结束当前函数并返回结果；后面的本次函数语句不再执行。',
  break: '退出当前循环或switch，不等于返回整个函数。',
  continue: '跳过本轮剩余步骤，进入下一轮循环。',
  switch: '按表达式匹配case分支；没有break可能继续落入后续分支。',
  try: '执行可能抛异常的代码；异常时跳到匹配catch。',
  catch: '接住try中抛出的异常；异步未等待的异常不一定被这个catch接到。',
  finally: '在try/catch结束时清理，通常成功失败都会经过。',
  throw: '主动抛出异常，正常顺序在这里中断。',
  async: '把函数返回值包装为Promise；不代表函数中的每行自动并行。',
  await: '暂停当前async函数的后续步骤，等待Promise结果，不冻结整个页面。',
  new: '构造实例；具体行为由后面的构造器决定。',
  class: '声明类结构，实例方法通常放在原型上。',
  extends: '建立类的继承关系；子类构造时通常需要super。',
  import: '从模块引入导出的绑定；浏览器模块加载有路径和来源要求。',
  export: '声明可被其他模块引入的绑定。',
};
const JS_API_HELP = {
  querySelector: '按CSS选择器取第一个匹配元素；没找到返回null，随后访问属性会报错。',
  querySelectorAll: '取全部匹配元素，返回静态NodeList；可forEach，不是完整Array。',
  getElementById: '按id取元素，参数不带#；没找到返回null。',
  addEventListener: '登记事件监听器；回调等事件发生才运行，不是现在马上执行。',
  removeEventListener: '移除指定类型、同一函数引用及捕获设置的监听器。',
  preventDefault: '取消事件默认行为，如表单提交导航；不会自动阻止冒泡。',
  stopPropagation: '阻止事件继续传播；不会自动取消默认行为。',
  textContent: '读取或写入纯文字；写入会替换原有子节点，不把字符串当HTML执行。',
  innerHTML: '解析HTML字符串替换内容；外部输入可能造成注入，不能无条件信任。',
  classList: '管理元素的类名集合；add/remove/toggle由CSS规则决定视觉变化。',
  createElement: '创建尚未显示的新元素；需要append等插入文档才出现。',
  append: '把节点或文字追加到容器末尾；已有节点会被移动，不是自动复制。',
  appendChild: '把一个节点接到父节点末尾；返回被添加的节点。',
  replaceChildren: '用新的节点或文字替换全部孩子；不必自己逐个删除。',
  remove: '把当前节点从父级移除；不等于删除所有JS变量引用。',
  cloneNode: '复制节点；true会复制后代，不会复制addEventListener注册的监听器。',
  closest: '从当前元素向祖先寻找第一个匹配选择器的元素，常用在事件委托。',
  matches: '判断当前元素是否满足CSS选择器，返回布尔值。',
  dataset: '读取data-*属性的字符串映射；data-user-id在JS中对应dataset.userId。',
  getBoundingClientRect:
    '取相对当前视口的实际画面矩形，包含边框并反映transform；不是父级坐标。',
  getComputedStyle: '读取元素当前计算后的样式；很多长度返回px，可能与源码表达式不同。',
  setAttribute: '设置HTML属性字符串；布尔属性写false字符串仍表示出现。',
  setTimeout: '延迟后安排一次回调；到时间只是可执行，并不保证毫秒级准时。',
  clearTimeout: '取消尚未执行的超时回调，用对应定时器id。',
  setInterval: '按间隔安排重复回调；浏览器繁忙或后台时会推迟。',
  clearInterval: '停止对应的重复定时器。',
  requestAnimationFrame: '安排下次绘制前调用；使用时间戳计算动画，不假设固定帧率。',
  cancelAnimationFrame: '取消对应尚未执行的动画帧回调。',
  stringify:
    'JSON.stringify把可序列化数据转为字符串；函数、undefined、循环引用等有局限。',
  parse: 'JSON.parse把合法JSON文本转为数据；无效格式会抛异常。',
  map: '对每项计算，得到新数组；回调要return新项，不是只做副作用。',
  filter: '保留回调结果为真的项，得到新数组；原数组顺序保留。',
  reduce: '将多项累计为一个结果；明确初始值可正确处理空数组。',
  find: '返回第一项符合条件的元素；找不到返回undefined。',
  findIndex: '返回第一项符合条件的索引；找不到返回-1。',
  some: '至少一项符合则true；空数组返回false。',
  every: '全部符合则true；空数组返回true。',
  forEach: '逐项执行回调做操作；返回undefined，不是新数组。',
  sort: '原地排序，默认按字符串比较；数值升序使用(a,b)=>a-b。',
  push: '原地追加到数组末尾，返回新长度。',
  pop: '原地移除并返回数组最后一项。',
  shift: '原地移除并返回数组第一项。',
  unshift: '原地向开头追加，返回新长度。',
  splice: '原地从指定索引删除或插入，返回删除项数组。',
  slice: '截取并返回浅复制，结束索引不包含；字符串也有同名截取方法。',
  includes: '判断是否包含目标；字符串检查子串，数组检查项。',
  indexOf: '返回首次出现位置，找不到为-1；要显式比较而不是当布尔值。',
  split: '按分隔符把字符串拆成数组。',
  join: '按分隔符把数组拼成字符串。',
  trim: '移除字符串两端空白，不移除中间空格。',
  replace: '得到替换后的新字符串；字符串不原地修改；全局替换需相应模式或replaceAll。',
  replaceAll: '替换全部匹配后得到新字符串；正则参数需要g。',
  toFixed: '按小数位格式化，返回字符串；不解决所有浮点精度问题。',
  random: 'Math.random得到[0,1)伪随机数，不用于密码等安全随机。',
  floor: '向负无穷方向取整，例如-1.2得到-2。',
  ceil: '向正无穷方向取整。',
  round: '取最近整数；负数的半整数行为要实际测试。',
  max: '返回参数中的最大数；数组需展开或循环处理。',
  min: '返回参数中的最小数。',
  Number: '显式转数字；Number("")是0，非法数字通常得到NaN。',
  String: '显式转字符串；输入控件的value原本通常就是字符串。',
  Boolean: '按truthy/falsy规则转布尔；字符串"false"是true。',
  isFinite: '注意Number.isFinite不做隐式转换，全局isFinite会先转换。',
  isNaN: '注意Number.isNaN只判断真正NaN，全局isNaN会先转换。',
  parseInt: '从字符串开头解析整数，建议明确进制；不是严格的整串数值验证。',
  entries: 'Object.entries返回键值对数组；Map/FormData等同名方法有各自对象含义。',
  keys: 'Object.keys返回对象自身可枚举字符串键名。',
  values: 'Object.values返回对象自身可枚举字符串键对应的值。',
  assign: '将源对象自身可枚举属性复制到目标，返回目标；是浅复制。',
  fromEntries: '把键值对序列转成普通对象；重复键后面的覆盖前面的。',
  from: 'Array.from把可迭代或类数组对象转成数组，可附带映射函数。',
  structuredClone: '深复制支持的数据结构；不支持函数或DOM节点等所有对象。',
  bind: '创建绑定this/前置参数的新函数，不会立即调用原函数。',
  call: '立即调用函数，显式给this与逐个参数。',
  apply: '立即调用函数，显式给this与参数列表。',
  test: 'RegExp.test判断是否匹配；带g/y的正则会改变lastIndex。',
  Promise: '表示未来可能成功或失败的结果；executor在构造时同步执行。',
  then: '登记Promise成功后的处理；返回一个新的Promise。',
  catch: '登记Promise失败后的处理；与try/catch语句区分。',
  finally: 'Promise成功失败都执行清理，不直接接收成功值/失败原因。',
  all: 'Promise.all等待全部成功，任一失败则失败；不是逐个串行等待。',
  fetch: '获取资源并返回Promise；HTTP404等不会自动reject，还要检查response.ok。',
  AbortController: '通过signal请求取消；是否可取消取决于对应API是否支持signal。',
  FormData: '收集表单可提交字段；没name、disabled、未选checkbox等不会成为常规提交项。',
  URL: '解析或组合网址；相对地址需要给base。',
  URLSearchParams: '读取和修改URL查询参数，负责适当编码。',
  getItem: '从Web Storage读取字符串；没有该键返回null；隔离环境可能抛异常。',
  setItem: '将字符串写入Web Storage；对象先JSON.stringify；配额和环境可能导致失败。',
  removeItem: '删除指定存储键，不清空其他键。',
  ResizeObserver: '异步观察元素尺寸变化；不要在回调里不断触发相同尺寸循环。',
  IntersectionObserver: '异步观察目标与视口/指定根的相交，适合懒加载和滚动观察。',
  observe: '开始观察指定目标；ResizeObserver/IntersectionObserver含义按对象区分。',
  CustomEvent: '构造自定义事件，数据通常放detail；需要dispatchEvent才分发。',
  dispatchEvent: '同步向目标分发事件，触发匹配的监听器。',
  getContext: 'Canvas取得绘制上下文，如2d；之后才能调用绘图方法。',
  fillRect: 'Canvas按x、y、width、height填充矩形，坐标在画布内部。',
  clearRect: '清除画布指定区域；不删除DOM元素。',
  fillText: 'Canvas把文字绘到位图上；不像DOM文本可直接选择。',
  createObjectURL: '为Blob/File建立临时资源URL，用完需revokeObjectURL回收。',
  revokeObjectURL: '释放不再使用的Blob URL。',
  text: 'Blob/File.text或Response.text异步读文本；要按接收对象判断来源。',
  log: 'console.log在控制台输出，不会自动成为页面正文。',
};

const LESSON_DETAILS = {};
function teach(ids, terms, steps, pitfalls = []) {
  for (const id of ids.split(' ')) LESSON_DETAILS[id] = { terms, steps, pitfalls };
}
teach(
  'html-document manual-head-meta',
  [
    'doctype：启用现代标准模式，不是一个可见标签。',
    'html：整份文档根元素。head放编码、标签页标题等元数据；body放正文。',
    'title是标签页名称，h1是页面正文标题，两者不会自动同步。',
  ],
  [
    '先看HTML最外层，再找head与body。',
    '改title后检查独立导出页面的标签页；预览iframe不会改变工作台的标签页。',
    '改h1中的文字，页面大标题立刻对应改变。',
  ],
  ['当前HTML按持续更新的标准使用；上传文档的旧HTML4 doctype只作为历史材料。'],
);
teach(
  'heading html-inline',
  [
    'h1–h6：标题等级，表达结构而不只是字号。',
    'p：一段正文。strong表达重要性，em表达强调。',
    '浏览器默认样式可让strong粗体，但CSS可以改变它的外观。',
  ],
  [
    '先找每段可见文字在HTML中对应的标签。',
    '只改文字，确认内容变化；再改font-size，确认外观变化。',
    '不要为了字号小就把主标题换成h6。',
  ],
);
teach(
  'div semantic',
  [
    'div是通用块容器；span是通用文本容器，默认显示行为可被CSS改变。',
    'header/nav/main/aside/footer标明区域用途，不会自动产生多列布局。',
  ],
  [
    '先看语义标签如何包住内容。',
    '关闭或修改布局CSS，观察区域仍存在但排列改变。',
    '结构身份与显示外观分别由HTML和CSS负责。',
  ],
);
teach(
  'css-cascade manual-specificity',
  [
    '级联：把匹配的样式按来源、重要性、层、优先级等规则决定胜者。',
    '继承：子元素没有直接声明时，某些属性从父元素获取，例如color；margin通常不继承。',
    '优先级按ID、类/属性/伪类、标签/伪元素三列依次比较，不是十进制相加。',
    '选择器越复杂不一定越好；先用可复用class。',
  ],
  [
    '先找目标元素的HTML标签、id和class。',
    '把所有命中的color声明列出来，只比较同一属性。',
    '普通作者规则在相同层级下才按优先级比较；相同优先级再看后写的。',
    '父级继承色与子级直接声明冲突时，子级直接声明优先，不是父级选择器“权重更高就能压过”。',
  ],
  ['重要声明的层顺序会反转；不能把“后面永远胜出”套到全部场景。'],
);
teach(
  'css-display manual-display-modes',
  [
    '先修完“文档流①/②”：width只设宽度，不意味着并排。',
    'display既决定自己外部排版，也决定直接孩子的内部布局方式。',
    'none不生成盒子；visibility:hidden通常保留占位；opacity:0通常仍占位并可命中。',
  ],
  [
    '找实际控制布局的父容器，而不是只看彩色子项。',
    '逐一切block、inline、inline-block，对比下一项的起始位置和宽高。',
    '遇到Flex/Grid子项时，不能直接套普通行内尺寸规则。',
  ],
);
teach(
  'box-model css-sizing manual-border-calculation',
  [
    '内容是文字/图片；padding在内容外，border在padding外，margin在border外。',
    'content-box：width只包含内容；border-box：width包含内容+padding+border。',
    'margin始终不包含在width中。',
  ],
  [
    '先读width，再读左右padding和border，按公式算外宽。',
    '用声明对照的实际矩形核对计算；矩形包含border，不包含margin。',
    '只换box-sizing，比较相同width为何得到不同外宽。',
  ],
);
teach(
  'css-margin manual-margin-collapse',
  [
    '外边距折叠主要发生在普通块流的垂直方向，有相邻兄弟、父子等情况。',
    '两个正margin折叠取较大，不是相加；混合负值或全负值有不同规则。',
    'Flex/Grid项的外边距不按普通块流折叠。',
  ],
  [
    '先测两个盒子边框之间的距离。',
    '修改一个margin，判断最终是较大值还是总和。',
    '给父级加边框/padding或改布局上下文，比较父子折叠条件。',
  ],
);
teach(
  'css-units manual-rem-design manual-vw-vh',
  [
    'px是CSS像素，不等于每台设备一个物理像素。',
    'rem相对根元素字号；em通常相对自身字号，但font-size中的em参照父字号。',
    '%的参考由具体属性决定；不要把所有百分比都理解成父宽度。',
    'vw/vh参照视口；dvh参照动态视口高度。',
  ],
  [
    '先确定当前单位的参考量。',
    '换算：根字号16px时，2rem=32px。',
    '改根字号，观察rem一起变化；固定px不会跟着同比变化。',
  ],
);
teach(
  'css-flex-grow flex',
  [
    '先确定容器主轴、项目基础尺寸和间隙。',
    'grow分配额外空白；shrink分配不足空间；basis是参与分配前的基础尺寸。',
    'min-width:auto可能不允许长文本缩小，min-width:0常用于可缩文本列。',
  ],
  [
    '先总宽减去基础尺寸和gap，求剩余空间。',
    '按grow比例分新增空间，不把比例误当最终宽度比例。',
    '缩窄预览，比较wrap、shrink、min-width分别改变什么。',
  ],
);
teach(
  'css-grid-areas grid-css css-auto-fit',
  [
    'Grid定义轨道，项目占据网格区域；命名区域是布局位置的名称，不自动修改DOM。',
    'fr分的是剩余空间；内容最小尺寸和gap也会参与。',
    'auto-fit折叠没有内容的空轨道；auto-fill通常保留它们。',
  ],
  [
    '先看父盒的列定义，再找每个子项的位置声明。',
    '改一列或一个区域名，观察具体哪块移动。',
    '用窄预览检验是否出现横向溢出，而不只看桌面效果。',
  ],
);
teach(
  'position css-stacking',
  [
    '相对定位和sticky保留正常占位；absolute/fixed不保留普通流占位。',
    '层叠上下文像独立的小组，组内z-index不能随意越过祖先组。',
    '定位参考不总是父元素，transform等也可能建立包含块。',
  ],
  [
    '先判断position，再找参考祖先。',
    '观察后续内容是否替补原位置。',
    '遮挡异常时检查祖先层叠上下文，再比较z-index。',
  ],
);
teach(
  'css-bfc manual-float-clear',
  [
    '浮动盒子不按普通块流占位，却会影响旁边文字的行盒。',
    'flow-root明确建立独立块格式化上下文，让容器包含自己的浮动。',
    'clearfix是通过额外清除盒子影响高度的传统办法。',
  ],
  [
    '先缩短文字使浮动高于文字。',
    '比较未清除、clearfix、flow-root的容器边框高度。',
    '不要仅为清浮动使用overflow:hidden，否则可能误裁内容。',
  ],
);
teach(
  'css-background manual-background-modes manual-sprite',
  [
    '背景图不撑开元素，需要盒子本身有尺寸或内容。',
    'cover完整盖满可能裁图；contain完整露图可能留白。',
    '精灵图用较小视窗和负background-position露出大图的不同部分。',
  ],
  [
    '先确定盒子尺寸，再确定图像固有比例。',
    '分别切cover与contain，检查“完整显示”还是“完整覆盖”。',
    '只移动背景位置，不修改盒子位置。',
  ],
);
teach(
  'css-object-fit',
  [
    'img的盒子尺寸与里面图像的缩放是两个层面。',
    'object-fit只决定内容如何装进盒子；background-size用于背景图，不是img内容。',
  ],
  [
    '先看width和height定下的边界。',
    '比较cover裁切、contain留白、fill拉伸。',
    '用object-position改变裁切焦点，不需要改外部布局。',
  ],
);
teach(
  'type manual-font-shorthand css-text-wrap',
  [
    'font-size是字的尺寸；line-height是行盒高度，不等于整段高度。',
    '无单位行高1.5通常跟各元素自己的字号相乘。',
    '长文本处理需同时考虑宽度、white-space、overflow-wrap。',
  ],
  [
    '先看同样的文字与容器宽度。',
    '只改字号观察换行，再只改行高观察行间距离。',
    '省略号实验需要同时满足有限宽度、裁切和不换行等条件。',
  ],
);
teach(
  'manual-opacity color',
  [
    '颜色alpha只让该颜色层透明；opacity让整个元素及后代一起透明。',
    '透明不等于移除占位；完全透明元素仍可能接受点击。',
  ],
  [
    '比较背景alpha与元素opacity，特别看文字是否变淡。',
    '将透明度改为0，再看后面的布局位置是否改变。',
    '真正隐藏且不占位用合适的hidden/display机制。',
  ],
);
teach(
  'transform manual-transform-order manual-skew manual-double-door',
  [
    '变换主要改变画面坐标，正常布局占位通常保留。',
    '多个变换按矩阵组合，顺序改变可能得到不同位置。',
    'transform-origin决定旋转缩放围绕哪里。',
  ],
  [
    '先记原盒子的占位与兄弟位置。',
    '只交换两个变换函数的顺序，比较轨迹。',
    '门板或遮罩移动后需检查overflow是否裁切。',
  ],
);
teach(
  'manual-perspective manual-rotate3d',
  [
    'X左右、Y上下、Z靠近/远离观察者；3D变换仍需区分画面与布局。',
    'perspective制造近大远小；preserve-3d让子元素保留空间关系。',
    'backface-visibility控制翻转后的背面。',
  ],
  [
    '先只绕单一轴旋转，再增加透视。',
    '改变透视距离，比较近大远小的强度。',
    '翻转到背面，比较hidden与visible。',
  ],
);
teach(
  'transitions manual-animation-controls manual-steps-animation manual-multiple-animation manual-marquee css-reduced-motion',
  [
    'transition需要属性值发生变化；animation按命名关键帧推进。',
    'duration是一次过程时长，delay是开始前等待，iteration-count是次数。',
    'steps按离散步推进，常用于精灵帧；连续曲线不适合逐帧图。',
  ],
  [
    '先确认究竟是hover/类名变化还是自动关键帧。',
    '只改时长观察快慢，再改次数或暂停状态。',
    '系统减少动画偏好下，确认仍能理解信息和操作。',
  ],
);
teach(
  'responsive manual-media-order container',
  [
    '媒体查询主要看视口条件；容器查询看已建立查询容器的祖先尺寸。',
    '断点是内容排不下的条件，不是手机品牌列表。',
    '移动优先常从单栏开始，逐渐在min-width条件下增加列。',
  ],
  [
    '从手机宽度观察基础规则。',
    '拉宽跨过断点，找具体生效的@media/@container。',
    '对照里点击条件内声明，若当前条件不满足，计算值可能来自别处。',
  ],
);
teach(
  'overflow css-scroll-snap',
  [
    '内容的尺寸可能比外盒大；overflow决定怎么处理超出部分。',
    'scroll/auto创建滚动区域；scroll-snap再决定滚到哪里吸附。',
  ],
  [
    '先减小容器，确认超出方向。',
    '切visible/hidden/auto看内容和滚动条变化。',
    '吸附需要容器与子项双方设置，不是加一个属性就完整实现。',
  ],
);
teach(
  'js-variables manual-scope-hoist',
  [
    '值是实际数据；变量名是访问数据的名称；赋值不是数学等式。',
    'const不能重新赋值，但绑定对象的字段仍可能修改。',
    '作用域是变量可被访问的代码区域，不等于页面区域。',
  ],
  [
    '看声明所在块，确定名称在何处可用。',
    '按源码顺序观察console输出。',
    '重新赋值const或提前访问let，比较报错位置。',
  ],
);
teach(
  'js-types manual-types js-conversion manual-conversion manual-short-circuit js-operators',
  [
    '输入框value通常是字符串，“2”+“3”会拼成“23”。',
    'Number显式转数字；Number("")为0，非法内容通常得到NaN。',
    '===比较时不做类型转换；||把0、空串也当假，??只处理null/undefined。',
  ],
  [
    '先打印值和typeof，再判断运算结果。',
    '将字符串输入转数字后再相加。',
    '对0、空串、null分别比较默认值处理。',
  ],
);
teach(
  'js-control manual-switch manual-leap-year manual-increment',
  [
    '条件决定路径，只有命中的分支会执行。',
    'switch使用严格匹配；break结束分支，return结束函数。',
    '++改变原变量，前置返回新值，后置返回旧值。',
  ],
  [
    '先用普通输入确定路径。',
    '再测边界，如0、相等、闰年的100/400条件。',
    '预测每个console输出后再运行，不只看最终一行。',
  ],
);
teach(
  'js-loops manual-loops manual-multiplication manual-bubble-sort',
  [
    '循环每一轮都要重新判断是否继续。',
    '索引从0开始，数组最后一个合法索引是length-1。',
    '嵌套循环的内循环通常对每次外循环重新开始。',
  ],
  [
    '先用很小的数量手动走第一轮。',
    '写出初始值、条件、更新三个部分。',
    '测0项和1项，确认不会越界或无限执行。',
  ],
);
teach(
  'js-functions manual-parameters',
  [
    '定义函数不等于立即执行；调用才进入函数体。',
    '参数是函数内部接收输入的名字，实参是调用时传入的实际值。',
    'return把结果交回调用位置；console.log只是打印。',
  ],
  [
    '先找定义，再找调用。',
    '把实参逐一对应到参数。',
    '找到return，观察调用者如何使用返回值。',
  ],
);
teach(
  'js-array manual-array-mutate js-array-search manual-find-every js-array-methods manual-reduce manual-array-statistics',
  [
    '数组是有顺序的一组数据，索引从0开始。',
    'push/splice/sort会修改原数组；map/filter/slice一般生成新数组。',
    '回调每次处理一项；方法返回值与是否改变原数据要分开看。',
  ],
  [
    '先看输入数组，再逐项追踪回调。',
    '同时打印结果与原数组，确认是否原地修改。',
    '空数组要检查reduce初始值、find找不到、every空数组为true等边界。',
  ],
);
teach(
  'js-object manual-destructure manual-object-methods manual-copy-depth manual-recursion-copy js-json',
  [
    '对象通过键名组织字段；数组和普通对象都是引用类型。',
    '浅复制只复制第一层，嵌套对象可能仍共享。',
    'JSON是文本格式，不等于任意JS对象都能无损转换。',
  ],
  [
    '先找对象的键和值。',
    '修改嵌套字段，对比原对象是否也变了。',
    'JSON.stringify得到字符串，再JSON.parse恢复支持的数据。',
  ],
);
teach(
  'js-dom manual-dom-tree manual-array-like',
  [
    'DOM是浏览器的结构树，不是HTML字符串本身。',
    'querySelector返回第一个元素或null，querySelectorAll返回集合。',
    '创建节点后要插入才出现，删除节点后数据变量未必自动同步。',
  ],
  [
    '用选择器在HTML找到目标。',
    '追踪创建/插入/修改/删除中的实际步骤。',
    '外部文本用textContent写入，不把用户输入直接当HTML。',
  ],
);
teach(
  'events js-bubbling manual-event-flow js-delegation manual-mouseenter manual-input-change keyboard js-custom-event js-abort-listener',
  [
    '事件是点击、输入等发生时的通知。监听器登记回调，等事件发生再执行。',
    'target是最初命中的目标，currentTarget是当前处理的监听节点。',
    '捕获从外到内，冒泡从内到外；并非所有事件都冒泡。',
  ],
  [
    '先找到HTML按钮或输入框，再找监听的事件类型。',
    '执行一次操作，跟踪回调修改了哪个变量和哪个节点。',
    '比较默认行为取消与传播停止，二者作用不同。',
  ],
);
teach(
  'js-promise js-async js-promise-all js-event-loop manual-event-loop js-fetch progress',
  [
    '同步代码在当前调用栈执行；Promise处理一般在微任务中继续；定时器回调是后续任务。',
    'await暂停当前async函数的后续步骤，不阻塞整个页面。',
    'fetch的HTTP失败状态与网络Promise失败是不同层次。',
  ],
  [
    '先把同步输出写出来，再预测后续输出。',
    '追踪成功、失败、finally分别更新什么。',
    '本地Blob或延迟模拟只验证前端流程，不等于连上真实接口。',
  ],
);
teach(
  'js-storage manual-storage-json manual-history js-url manual-bom-url',
  [
    '存储保存字符串；复杂对象先序列化。local/session区分生命周期与浏览上下文。',
    'iframe隔离、配额或来源策略可能让存储失败，所以需要try/catch。',
    'URL变化、History状态与数据持久化是不同能力。',
  ],
  [
    '先看实际存的键和值。',
    '写入再读取，核对JSON解析后的类型。',
    '在工作台隔离环境中若受限，导出独立HTML再测试同一代码。',
  ],
);
teach(
  'js-debounce manual-debounce js-throttle manual-throttle manual-hover-intent manual-agreement-countdown manual-date-countdown manual-clock js-raf',
  [
    '定时器只安排未来回调，不保证精确到点执行。',
    '防抖等待最后一次停下；节流限制连续事件的处理频率。',
    '计时应用应从时间差计算，避免每次回调固定加1造成累积漂移。',
  ],
  [
    '连续快速操作，观察实际执行次数。',
    '停下后观察最后一次是否执行。',
    '检查重新开始或离开时是否清理旧定时器。',
  ],
);
teach(
  'js-closure manual-iife js-this manual-this-binding manual-constructor manual-prototype-chain js-class js-modules',
  [
    '闭包让函数继续访问定义时的外层变量，每次调用不必共享同一份状态。',
    '普通函数的this与调用方式有关；箭头函数从外层取得this。',
    '原型链用于查找未在对象自身找到的属性，class提供较易读的语法。',
  ],
  [
    '先找定义位置与调用方式，不只看函数长什么样。',
    '比较两个实例或两次工厂调用，确认哪些状态共享。',
    '模块需要正确导入路径；本地file和HTTP环境的加载规则可能不同。',
  ],
);
