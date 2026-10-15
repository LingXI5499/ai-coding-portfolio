import {EditorState,Compartment} from '@codemirror/state';
import {EditorView,keymap,lineNumbers,highlightActiveLine,highlightActiveLineGutter,drawSelection} from '@codemirror/view';
import {defaultKeymap,history,historyKeymap,indentWithTab} from '@codemirror/commands';
import {syntaxHighlighting,HighlightStyle,StreamLanguage,bracketMatching,foldGutter} from '@codemirror/language';
import {tags} from '@lezer/highlight';
import {sql,MySQL} from '@codemirror/lang-sql';
import {java} from '@codemirror/lang-java';
import {javascript} from '@codemirror/lang-javascript';
import {json} from '@codemirror/lang-json';
import {xml} from '@codemirror/lang-xml';
import {yaml} from '@codemirror/legacy-modes/mode/yaml';
const styles=HighlightStyle.define([
  {tag:[tags.keyword,tags.modifier],color:'#8045a6',fontWeight:'600'},
  {tag:[tags.string,tags.special(tags.string)],color:'#286d37'},
  {tag:[tags.number,tags.bool,tags.null],color:'#a14c16'},
  {tag:[tags.comment],color:'#6d7b77',fontStyle:'italic'},
  {tag:[tags.typeName,tags.className],color:'#166884'},
  {tag:[tags.function(tags.variableName),tags.function(tags.propertyName)],color:'#1753a0'},
  {tag:[tags.operator,tags.punctuation],color:'#49566a'},
  {tag:[tags.meta,tags.attributeName],color:'#975824'}
]);
const prefs={size:15,wrap:true};
let view,host;
const sizeSetting=new Compartment(),wrapSetting=new Compartment();
function fontTheme(){return EditorView.theme({'&':{fontSize:prefs.size+'px',backgroundColor:'#fbfcfc',color:'#25303b'},'.cm-content':{fontFamily:'"Cascadia Code",Consolas,"Microsoft YaHei",monospace',lineHeight:'1.9',padding:'20px 0',caretColor:'#0f3d36'},'.cm-line':{padding:'0 20px'},'.cm-gutters':{backgroundColor:'#f1f4f3',color:'#8b9592',borderRight:'1px solid #e1e7e4',minWidth:'46px'},'.cm-gutterElement':{padding:'0 12px 0 8px'},'.cm-activeLine':{backgroundColor:'#eaf2f080'},'.cm-activeLineGutter':{backgroundColor:'#dfeae7',color:'#315b50'},'.cm-cursor':{borderLeftColor:'#0f3d36'},'.cm-selectionBackground':{backgroundColor:'#cfe4dc!important'},'.cm-scroller':{overflow:'auto'},'&.cm-focused':{outline:'none'},'.cm-matchingBracket':{backgroundColor:'#d6e9df',outline:'1px solid #a7c6b8'}});}
export function unmountCodeEditor(){view?.destroy();view=null;host=null;}
export function mountCodeEditor(element,{text,language='plaintext',editable=false,onChange}){
  unmountCodeEditor();host=element;
  element.innerHTML=`<div class="code-reading-toolbar"><span>{ } <b>${editable?'SQL 编辑器':'代码阅读'}</b><small class="code-line-count"></small></span><div><button data-code="smaller" aria-label="减小代码字号">A−</button><output>${prefs.size}px</output><button data-code="larger" aria-label="增大代码字号">A＋</button><button data-code="wrap" aria-pressed="${prefs.wrap}">${prefs.wrap?'自动换行 ✓':'自动换行'}</button><button data-code="copy">复制</button><button data-code="expand">展开</button></div></div><div class="code-reading-content"></div><div class="code-reading-status"><span>${editable?'可编辑 · Tab 缩进 · Ctrl/⌘+Z 撤销 · Ctrl/⌘+Enter 运行':'只读机制示例 · 可选择复制，Java 不在浏览器执行'}</span><span>${language.toUpperCase()}</span></div>`;
  const languages={sql:()=>sql({dialect:MySQL}),java,javascript,json,xml,yaml:()=>StreamLanguage.define(yaml)};
  view=new EditorView({parent:element.querySelector('.code-reading-content'),state:EditorState.create({doc:text,extensions:[
    lineNumbers(),foldGutter(),bracketMatching(),drawSelection(),history(),keymap.of([indentWithTab,...defaultKeymap,...historyKeymap]),
    syntaxHighlighting(styles),languages[language]?.()||[],sizeSetting.of(fontTheme()),wrapSetting.of(prefs.wrap?EditorView.lineWrapping:[]),
    EditorState.readOnly.of(!editable),EditorView.editable.of(editable),editable?highlightActiveLine():[],editable?highlightActiveLineGutter():[],
    EditorView.contentAttributes.of({'aria-label':editable?'SQL 编辑器':'代码阅读内容','role':'textbox','aria-multiline':'true'}),
    EditorView.updateListener.of(update=>{if(update.docChanged){onChange?.(update.state.doc.toString());element.querySelector('.code-line-count').textContent=update.state.doc.lines+' 行';}}),
    EditorView.domEventHandlers({keydown:e=>{if(e.key==='Escape'&&element.classList.contains('code-expanded')){toggleExpand(element);return true;}return false;}})
  ]})});
  element.querySelector('.code-line-count').textContent=view.state.doc.lines+' 行';
  element.onclick=async e=>{const b=e.target.closest('[data-code]');if(!b)return;e.stopPropagation();const action=b.dataset.code;
    if(action==='smaller'||action==='larger'){prefs.size=Math.max(12,Math.min(24,prefs.size+(action==='larger'?1:-1)));view.dispatch({effects:sizeSetting.reconfigure(fontTheme())});element.querySelector('output').textContent=prefs.size+'px';}
    if(action==='wrap'){prefs.wrap=!prefs.wrap;view.dispatch({effects:wrapSetting.reconfigure(prefs.wrap?EditorView.lineWrapping:[])});b.textContent=prefs.wrap?'自动换行 ✓':'自动换行';b.setAttribute('aria-pressed',String(prefs.wrap));}
    if(action==='expand')toggleExpand(element);
    if(action==='copy'){try{await navigator.clipboard.writeText(view.state.doc.toString());b.textContent='已复制 ✓';}catch{b.textContent='请选中代码复制';}}
  };
}
function toggleExpand(element){const expanded=element.classList.toggle('code-expanded');element.querySelector('[data-code="expand"]').textContent=expanded?'收起 · Esc':'展开';element.setAttribute('aria-label',expanded?'展开的代码阅读窗口':'代码编辑与阅读');view?.requestMeasure();}
