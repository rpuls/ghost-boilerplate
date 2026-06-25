!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).CodeMirror=t()}(this,function(){"use strict"
var e=navigator.userAgent,t=navigator.platform,r=/gecko\/\d/i.test(e),n=/MSIE \d/.test(e),i=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(e),o=/Edge\/(\d+)/.exec(e),a=n||i||o,l=a&&(n?document.documentMode||6:+(o||i)[1]),s=!o&&/WebKit\//.test(e),c=s&&/Qt\/\d+\.\d+/.test(e),u=!o&&/Chrome\/(\d+)/.exec(e),d=u&&+u[1],f=/Opera\//.test(e),h=/Apple Computer/.test(navigator.vendor),p=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(e),g=/PhantomJS/.test(e),m=h&&(/Mobile\/\w+/.test(e)||navigator.maxTouchPoints>2),v=/Android/.test(e),y=m||v||/webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(e),b=m||/Mac/.test(t),w=/\bCrOS\b/.test(e),x=/win/i.test(t),k=f&&e.match(/Version\/(\d*\.\d*)/)
k&&(k=Number(k[1])),k&&k>=15&&(f=!1,s=!0)
var C=b&&(c||f&&(null==k||k<12.11)),S=r||a&&l>=9
function T(e){return new RegExp("(^|\\s)"+e+"(?:$|\\s)\\s*")}var L,M=function(e,t){var r=e.className,n=T(t).exec(r)
if(n){var i=r.slice(n.index+n[0].length)
e.className=r.slice(0,n.index)+(i?n[1]+i:"")}}
function N(e){for(var t=e.childNodes.length;t>0;--t)e.removeChild(e.firstChild)
return e}function A(e,t){return N(e).appendChild(t)}function O(e,t,r,n){var i=document.createElement(e)
if(r&&(i.className=r),n&&(i.style.cssText=n),"string"==typeof t)i.appendChild(document.createTextNode(t))
else if(t)for(var o=0;o<t.length;++o)i.appendChild(t[o])
return i}function z(e,t,r,n){var i=O(e,t,r,n)
return i.setAttribute("role","presentation"),i}function D(e,t){if(3==t.nodeType&&(t=t.parentNode),e.contains)return e.contains(t)
do{if(11==t.nodeType&&(t=t.host),t==e)return!0}while(t=t.parentNode)}function W(e){var t,r=e.ownerDocument||e
try{t=e.activeElement}catch(e){t=r.body||null}for(;t&&t.shadowRoot&&t.shadowRoot.activeElement;)t=t.shadowRoot.activeElement
return t}function P(e,t){var r=e.className
T(t).test(r)||(e.className+=(r?" ":"")+t)}function H(e,t){for(var r=e.split(" "),n=0;n<r.length;n++)r[n]&&!T(r[n]).test(t)&&(t+=" "+r[n])
return t}L=document.createRange?function(e,t,r,n){var i=document.createRange()
return i.setEnd(n||e,r),i.setStart(e,t),i}:function(e,t,r){var n=document.body.createTextRange()
try{n.moveToElementText(e.parentNode)}catch(e){return n}return n.collapse(!0),n.moveEnd("character",r),n.moveStart("character",t),n}
var E=function(e){e.select()}
function F(e){return e.display.wrapper.ownerDocument}function I(e){return R(e.display.wrapper)}function R(e){return e.getRootNode?e.getRootNode():e.ownerDocument}function B(e){return F(e).defaultView}function j(e){var t=Array.prototype.slice.call(arguments,1)
return function(){return e.apply(null,t)}}function V(e,t,r){for(var n in t||(t={}),e)!Object.prototype.hasOwnProperty.call(e,n)||!1===r&&Object.prototype.hasOwnProperty.call(t,n)||(t[n]=e[n])
return t}function K(e,t,r,n,i){null==t&&-1==(t=e.search(/[^\s\u00a0]/))&&(t=e.length)
for(var o=n||0,a=i||0;;){var l=e.indexOf("\t",o)
if(l<0||l>=t)return a+(t-o)
a+=l-o,a+=r-a%r,o=l+1}}m?E=function(e){e.selectionStart=0,e.selectionEnd=e.value.length}:a&&(E=function(e){try{e.select()}catch(e){}})
var G=function(){this.id=null,this.f=null,this.time=0,this.handler=j(this.onTimeout,this)}
function U(e,t){for(var r=0;r<e.length;++r)if(e[r]==t)return r
return-1}G.prototype.onTimeout=function(e){e.id=0,e.time<=+new Date?e.f():setTimeout(e.handler,e.time-+new Date)},G.prototype.set=function(e,t){this.f=t
var r=+new Date+e;(!this.id||r<this.time)&&(clearTimeout(this.id),this.id=setTimeout(this.handler,e),this.time=r)}
var q={toString:function(){return"CodeMirror.Pass"}},_={scroll:!1},$={origin:"*mouse"},X={origin:"+move"}
function Y(e,t,r){for(var n=0,i=0;;){var o=e.indexOf("\t",n);-1==o&&(o=e.length)
var a=o-n
if(o==e.length||i+a>=t)return n+Math.min(a,t-i)
if(i+=o-n,n=o+1,(i+=r-i%r)>=t)return n}}var Z=[""]
function Q(e){for(;Z.length<=e;)Z.push(J(Z)+" ")
return Z[e]}function J(e){return e[e.length-1]}function ee(e,t){for(var r=[],n=0;n<e.length;n++)r[n]=t(e[n],n)
return r}function te(){}function re(e,t){var r
return Object.create?r=Object.create(e):(te.prototype=e,r=new te),t&&V(t,r),r}var ne=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/
function ie(e){return/\w/.test(e)||e>""&&(e.toUpperCase()!=e.toLowerCase()||ne.test(e))}function oe(e,t){return t?!!(t.source.indexOf("\\w")>-1&&ie(e))||t.test(e):ie(e)}function ae(e){for(var t in e)if(e.hasOwnProperty(t)&&e[t])return!1
return!0}var le=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/
function se(e){return e.charCodeAt(0)>=768&&le.test(e)}function ce(e,t,r){for(;(r<0?t>0:t<e.length)&&se(e.charAt(t));)t+=r
return t}function ue(e,t,r){for(var n=t>r?-1:1;;){if(t==r)return t
var i=(t+r)/2,o=n<0?Math.ceil(i):Math.floor(i)
if(o==t)return e(o)?t:r
e(o)?r=o:t=o+n}}var de=null
function fe(e,t,r){var n
de=null
for(var i=0;i<e.length;++i){var o=e[i]
if(o.from<t&&o.to>t)return i
o.to==t&&(o.from!=o.to&&"before"==r?n=i:de=i),o.from==t&&(o.from!=o.to&&"before"!=r?n=i:de=i)}return null!=n?n:de}var he=function(){function e(e){return e<=247?"bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN".charAt(e):1424<=e&&e<=1524?"R":1536<=e&&e<=1785?"nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111".charAt(e-1536):1774<=e&&e<=2220?"r":8192<=e&&e<=8203?"w":8204==e?"b":"L"}var t=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,r=/[stwN]/,n=/[LRr]/,i=/[Lb1n]/,o=/[1n]/
function a(e,t,r){this.level=e,this.from=t,this.to=r}return function(l,s){var c="ltr"==s?"L":"R"
if(0==l.length||"ltr"==s&&!t.test(l))return!1
for(var u=l.length,d=[],f=0;f<u;++f)d.push(e(l.charCodeAt(f)))
for(var h=0,p=c;h<u;++h){var g=d[h]
"m"==g?d[h]=p:p=g}for(var m=0,v=c;m<u;++m){var y=d[m]
"1"==y&&"r"==v?d[m]="n":n.test(y)&&(v=y,"r"==y&&(d[m]="R"))}for(var b=1,w=d[0];b<u-1;++b){var x=d[b]
"+"==x&&"1"==w&&"1"==d[b+1]?d[b]="1":","!=x||w!=d[b+1]||"1"!=w&&"n"!=w||(d[b]=w),w=x}for(var k=0;k<u;++k){var C=d[k]
if(","==C)d[k]="N"
else if("%"==C){var S=void 0
for(S=k+1;S<u&&"%"==d[S];++S);for(var T=k&&"!"==d[k-1]||S<u&&"1"==d[S]?"1":"N",L=k;L<S;++L)d[L]=T
k=S-1}}for(var M=0,N=c;M<u;++M){var A=d[M]
"L"==N&&"1"==A?d[M]="L":n.test(A)&&(N=A)}for(var O=0;O<u;++O)if(r.test(d[O])){var z=void 0
for(z=O+1;z<u&&r.test(d[z]);++z);for(var D="L"==(O?d[O-1]:c),W=D==("L"==(z<u?d[z]:c))?D?"L":"R":c,P=O;P<z;++P)d[P]=W
O=z-1}for(var H,E=[],F=0;F<u;)if(i.test(d[F])){var I=F
for(++F;F<u&&i.test(d[F]);++F);E.push(new a(0,I,F))}else{var R=F,B=E.length,j="rtl"==s?1:0
for(++F;F<u&&"L"!=d[F];++F);for(var V=R;V<F;)if(o.test(d[V])){R<V&&(E.splice(B,0,new a(1,R,V)),B+=j)
var K=V
for(++V;V<F&&o.test(d[V]);++V);E.splice(B,0,new a(2,K,V)),B+=j,R=V}else++V
R<F&&E.splice(B,0,new a(1,R,F))}return"ltr"==s&&(1==E[0].level&&(H=l.match(/^\s+/))&&(E[0].from=H[0].length,E.unshift(new a(0,0,H[0].length))),1==J(E).level&&(H=l.match(/\s+$/))&&(J(E).to-=H[0].length,E.push(new a(0,u-H[0].length,u)))),"rtl"==s?E.reverse():E}}()
function pe(e,t){var r=e.order
return null==r&&(r=e.order=he(e.text,t)),r}var ge=[],me=function(e,t,r){if(e.addEventListener)e.addEventListener(t,r,!1)
else if(e.attachEvent)e.attachEvent("on"+t,r)
else{var n=e._handlers||(e._handlers={})
n[t]=(n[t]||ge).concat(r)}}
function ve(e,t){return e._handlers&&e._handlers[t]||ge}function ye(e,t,r){if(e.removeEventListener)e.removeEventListener(t,r,!1)
else if(e.detachEvent)e.detachEvent("on"+t,r)
else{var n=e._handlers,i=n&&n[t]
if(i){var o=U(i,r)
o>-1&&(n[t]=i.slice(0,o).concat(i.slice(o+1)))}}}function be(e,t){var r=ve(e,t)
if(r.length)for(var n=Array.prototype.slice.call(arguments,2),i=0;i<r.length;++i)r[i].apply(null,n)}function we(e,t,r){return"string"==typeof t&&(t={type:t,preventDefault:function(){this.defaultPrevented=!0}}),be(e,r||t.type,e,t),Le(t)||t.codemirrorIgnore}function xe(e){var t=e._handlers&&e._handlers.cursorActivity
if(t)for(var r=e.curOp.cursorActivityHandlers||(e.curOp.cursorActivityHandlers=[]),n=0;n<t.length;++n)-1==U(r,t[n])&&r.push(t[n])}function ke(e,t){return ve(e,t).length>0}function Ce(e){e.prototype.on=function(e,t){me(this,e,t)},e.prototype.off=function(e,t){ye(this,e,t)}}function Se(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function Te(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}function Le(e){return null!=e.defaultPrevented?e.defaultPrevented:0==e.returnValue}function Me(e){Se(e),Te(e)}function Ne(e){return e.target||e.srcElement}function Ae(e){var t=e.which
return null==t&&(1&e.button?t=1:2&e.button?t=3:4&e.button&&(t=2)),b&&e.ctrlKey&&1==t&&(t=3),t}var Oe,ze,De=function(){if(a&&l<9)return!1
var e=O("div")
return"draggable"in e||"dragDrop"in e}()
function We(e){if(null==Oe){var t=O("span","​")
A(e,O("span",[t,document.createTextNode("x")])),0!=e.firstChild.offsetHeight&&(Oe=t.offsetWidth<=1&&t.offsetHeight>2&&!(a&&l<8))}var r=Oe?O("span","​"):O("span"," ",null,"display: inline-block; width: 1px; margin-right: -1px")
return r.setAttribute("cm-text",""),r}function Pe(e){if(null!=ze)return ze
var t=A(e,document.createTextNode("AخA")),r=L(t,0,1).getBoundingClientRect(),n=L(t,1,2).getBoundingClientRect()
return N(e),!(!r||r.left==r.right)&&(ze=n.right-r.right<3)}var He,Ee=3!="\n\nb".split(/\n/).length?function(e){for(var t=0,r=[],n=e.length;t<=n;){var i=e.indexOf("\n",t);-1==i&&(i=e.length)
var o=e.slice(t,"\r"==e.charAt(i-1)?i-1:i),a=o.indexOf("\r");-1!=a?(r.push(o.slice(0,a)),t+=a+1):(r.push(o),t=i+1)}return r}:function(e){return e.split(/\r\n?|\n/)},Fe=window.getSelection?function(e){try{return e.selectionStart!=e.selectionEnd}catch(e){return!1}}:function(e){var t
try{t=e.ownerDocument.selection.createRange()}catch(e){}return!(!t||t.parentElement()!=e)&&0!=t.compareEndPoints("StartToEnd",t)},Ie="oncopy"in(He=O("div"))||(He.setAttribute("oncopy","return;"),"function"==typeof He.oncopy),Re=null,Be={},je={}
function Ve(e,t){arguments.length>2&&(t.dependencies=Array.prototype.slice.call(arguments,2)),Be[e]=t}function Ke(e){if("string"==typeof e&&je.hasOwnProperty(e))e=je[e]
else if(e&&"string"==typeof e.name&&je.hasOwnProperty(e.name)){var t=je[e.name]
"string"==typeof t&&(t={name:t}),(e=re(t,e)).name=t.name}else{if("string"==typeof e&&/^[\w\-]+\/[\w\-]+\+xml$/.test(e))return Ke("application/xml")
if("string"==typeof e&&/^[\w\-]+\/[\w\-]+\+json$/.test(e))return Ke("application/json")}return"string"==typeof e?{name:e}:e||{name:"null"}}function Ge(e,t){t=Ke(t)
var r=Be[t.name]
if(!r)return Ge(e,"text/plain")
var n=r(e,t)
if(Ue.hasOwnProperty(t.name)){var i=Ue[t.name]
for(var o in i)i.hasOwnProperty(o)&&(n.hasOwnProperty(o)&&(n["_"+o]=n[o]),n[o]=i[o])}if(n.name=t.name,t.helperType&&(n.helperType=t.helperType),t.modeProps)for(var a in t.modeProps)n[a]=t.modeProps[a]
return n}var Ue={}
function qe(e,t){V(t,Ue.hasOwnProperty(e)?Ue[e]:Ue[e]={})}function _e(e,t){if(!0===t)return t
if(e.copyState)return e.copyState(t)
var r={}
for(var n in t){var i=t[n]
i instanceof Array&&(i=i.concat([])),r[n]=i}return r}function $e(e,t){for(var r;e.innerMode&&(r=e.innerMode(t))&&r.mode!=e;)t=r.state,e=r.mode
return r||{mode:e,state:t}}function Xe(e,t,r){return!e.startState||e.startState(t,r)}var Ye=function(e,t,r){this.pos=this.start=0,this.string=e,this.tabSize=t||8,this.lastColumnPos=this.lastColumnValue=0,this.lineStart=0,this.lineOracle=r}
function Ze(e,t){if((t-=e.first)<0||t>=e.size)throw new Error("There is no line "+(t+e.first)+" in the document.")
for(var r=e;!r.lines;)for(var n=0;;++n){var i=r.children[n],o=i.chunkSize()
if(t<o){r=i
break}t-=o}return r.lines[t]}function Qe(e,t,r){var n=[],i=t.line
return e.iter(t.line,r.line+1,function(e){var o=e.text
i==r.line&&(o=o.slice(0,r.ch)),i==t.line&&(o=o.slice(t.ch)),n.push(o),++i}),n}function Je(e,t,r){var n=[]
return e.iter(t,r,function(e){n.push(e.text)}),n}function et(e,t){var r=t-e.height
if(r)for(var n=e;n;n=n.parent)n.height+=r}function tt(e){if(null==e.parent)return null
for(var t=e.parent,r=U(t.lines,e),n=t.parent;n;t=n,n=n.parent)for(var i=0;n.children[i]!=t;++i)r+=n.children[i].chunkSize()
return r+t.first}function rt(e,t){var r=e.first
e:do{for(var n=0;n<e.children.length;++n){var i=e.children[n],o=i.height
if(t<o){e=i
continue e}t-=o,r+=i.chunkSize()}return r}while(!e.lines)
for(var a=0;a<e.lines.length;++a){var l=e.lines[a].height
if(t<l)break
t-=l}return r+a}function nt(e,t){return t>=e.first&&t<e.first+e.size}function it(e,t){return String(e.lineNumberFormatter(t+e.firstLineNumber))}function ot(e,t,r){if(void 0===r&&(r=null),!(this instanceof ot))return new ot(e,t,r)
this.line=e,this.ch=t,this.sticky=r}function at(e,t){return e.line-t.line||e.ch-t.ch}function lt(e,t){return e.sticky==t.sticky&&0==at(e,t)}function st(e){return ot(e.line,e.ch)}function ct(e,t){return at(e,t)<0?t:e}function ut(e,t){return at(e,t)<0?e:t}function dt(e,t){return Math.max(e.first,Math.min(t,e.first+e.size-1))}function ft(e,t){if(t.line<e.first)return ot(e.first,0)
var r=e.first+e.size-1
return t.line>r?ot(r,Ze(e,r).text.length):function(e,t){var r=e.ch
return null==r||r>t?ot(e.line,t):r<0?ot(e.line,0):e}(t,Ze(e,t.line).text.length)}function ht(e,t){for(var r=[],n=0;n<t.length;n++)r[n]=ft(e,t[n])
return r}Ye.prototype.eol=function(){return this.pos>=this.string.length},Ye.prototype.sol=function(){return this.pos==this.lineStart},Ye.prototype.peek=function(){return this.string.charAt(this.pos)||void 0},Ye.prototype.next=function(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)},Ye.prototype.eat=function(e){var t=this.string.charAt(this.pos)
if("string"==typeof e?t==e:t&&(e.test?e.test(t):e(t)))return++this.pos,t},Ye.prototype.eatWhile=function(e){for(var t=this.pos;this.eat(e););return this.pos>t},Ye.prototype.eatSpace=function(){for(var e=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos
return this.pos>e},Ye.prototype.skipToEnd=function(){this.pos=this.string.length},Ye.prototype.skipTo=function(e){var t=this.string.indexOf(e,this.pos)
if(t>-1)return this.pos=t,!0},Ye.prototype.backUp=function(e){this.pos-=e},Ye.prototype.column=function(){return this.lastColumnPos<this.start&&(this.lastColumnValue=K(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue-(this.lineStart?K(this.string,this.lineStart,this.tabSize):0)},Ye.prototype.indentation=function(){return K(this.string,null,this.tabSize)-(this.lineStart?K(this.string,this.lineStart,this.tabSize):0)},Ye.prototype.match=function(e,t,r){if("string"!=typeof e){var n=this.string.slice(this.pos).match(e)
return n&&n.index>0?null:(n&&!1!==t&&(this.pos+=n[0].length),n)}var i=function(e){return r?e.toLowerCase():e}
if(i(this.string.substr(this.pos,e.length))==i(e))return!1!==t&&(this.pos+=e.length),!0},Ye.prototype.current=function(){return this.string.slice(this.start,this.pos)},Ye.prototype.hideFirstChars=function(e,t){this.lineStart+=e
try{return t()}finally{this.lineStart-=e}},Ye.prototype.lookAhead=function(e){var t=this.lineOracle
return t&&t.lookAhead(e)},Ye.prototype.baseToken=function(){var e=this.lineOracle
return e&&e.baseToken(this.pos)}
var pt=function(e,t){this.state=e,this.lookAhead=t},gt=function(e,t,r,n){this.state=t,this.doc=e,this.line=r,this.maxLookAhead=n||0,this.baseTokens=null,this.baseTokenPos=1}
function mt(e,t,r,n){var i=[e.state.modeGen],o={}
Tt(e,t.text,e.doc.mode,r,function(e,t){return i.push(e,t)},o,n)
for(var a=r.state,l=function(n){r.baseTokens=i
var l=e.state.overlays[n],s=1,c=0
r.state=!0,Tt(e,t.text,l.mode,r,function(e,t){for(var r=s;c<e;){var n=i[s]
n>e&&i.splice(s,1,e,i[s+1],n),s+=2,c=Math.min(e,n)}if(t)if(l.opaque)i.splice(r,s-r,e,"overlay "+t),s=r+2
else for(;r<s;r+=2){var o=i[r+1]
i[r+1]=(o?o+" ":"")+"overlay "+t}},o),r.state=a,r.baseTokens=null,r.baseTokenPos=1},s=0;s<e.state.overlays.length;++s)l(s)
return{styles:i,classes:o.bgClass||o.textClass?o:null}}function vt(e,t,r){if(!t.styles||t.styles[0]!=e.state.modeGen){var n=yt(e,tt(t)),i=t.text.length>e.options.maxHighlightLength&&_e(e.doc.mode,n.state),o=mt(e,t,n)
i&&(n.state=i),t.stateAfter=n.save(!i),t.styles=o.styles,o.classes?t.styleClasses=o.classes:t.styleClasses&&(t.styleClasses=null),r===e.doc.highlightFrontier&&(e.doc.modeFrontier=Math.max(e.doc.modeFrontier,++e.doc.highlightFrontier))}return t.styles}function yt(e,t,r){var n=e.doc,i=e.display
if(!n.mode.startState)return new gt(n,!0,t)
var o=function(e,t,r){for(var n,i,o=e.doc,a=r?-1:t-(e.doc.mode.innerMode?1e3:100),l=t;l>a;--l){if(l<=o.first)return o.first
var s=Ze(o,l-1),c=s.stateAfter
if(c&&(!r||l+(c instanceof pt?c.lookAhead:0)<=o.modeFrontier))return l
var u=K(s.text,null,e.options.tabSize);(null==i||n>u)&&(i=l-1,n=u)}return i}(e,t,r),a=o>n.first&&Ze(n,o-1).stateAfter,l=a?gt.fromSaved(n,a,o):new gt(n,Xe(n.mode),o)
return n.iter(o,t,function(r){bt(e,r.text,l)
var n=l.line
r.stateAfter=n==t-1||n%5==0||n>=i.viewFrom&&n<i.viewTo?l.save():null,l.nextLine()}),r&&(n.modeFrontier=l.line),l}function bt(e,t,r,n){var i=e.doc.mode,o=new Ye(t,e.options.tabSize,r)
for(o.start=o.pos=n||0,""==t&&wt(i,r.state);!o.eol();)xt(i,o,r.state),o.start=o.pos}function wt(e,t){if(e.blankLine)return e.blankLine(t)
if(e.innerMode){var r=$e(e,t)
return r.mode.blankLine?r.mode.blankLine(r.state):void 0}}function xt(e,t,r,n){for(var i=0;i<10;i++){n&&(n[0]=$e(e,r).mode)
var o=e.token(t,r)
if(t.pos>t.start)return o}throw new Error("Mode "+e.name+" failed to advance stream.")}gt.prototype.lookAhead=function(e){var t=this.doc.getLine(this.line+e)
return null!=t&&e>this.maxLookAhead&&(this.maxLookAhead=e),t},gt.prototype.baseToken=function(e){if(!this.baseTokens)return null
for(;this.baseTokens[this.baseTokenPos]<=e;)this.baseTokenPos+=2
var t=this.baseTokens[this.baseTokenPos+1]
return{type:t&&t.replace(/( |^)overlay .*/,""),size:this.baseTokens[this.baseTokenPos]-e}},gt.prototype.nextLine=function(){this.line++,this.maxLookAhead>0&&this.maxLookAhead--},gt.fromSaved=function(e,t,r){return t instanceof pt?new gt(e,_e(e.mode,t.state),r,t.lookAhead):new gt(e,_e(e.mode,t),r)},gt.prototype.save=function(e){var t=!1!==e?_e(this.doc.mode,this.state):this.state
return this.maxLookAhead>0?new pt(t,this.maxLookAhead):t}
var kt=function(e,t,r){this.start=e.start,this.end=e.pos,this.string=e.current(),this.type=t||null,this.state=r}
function Ct(e,t,r,n){var i,o,a=e.doc,l=a.mode,s=Ze(a,(t=ft(a,t)).line),c=yt(e,t.line,r),u=new Ye(s.text,e.options.tabSize,c)
for(n&&(o=[]);(n||u.pos<t.ch)&&!u.eol();)u.start=u.pos,i=xt(l,u,c.state),n&&o.push(new kt(u,i,_e(a.mode,c.state)))
return n?o:new kt(u,i,c.state)}function St(e,t){if(e)for(;;){var r=e.match(/(?:^|\s+)line-(background-)?(\S+)/)
if(!r)break
e=e.slice(0,r.index)+e.slice(r.index+r[0].length)
var n=r[1]?"bgClass":"textClass"
null==t[n]?t[n]=r[2]:new RegExp("(?:^|\\s)"+r[2]+"(?:$|\\s)").test(t[n])||(t[n]+=" "+r[2])}return e}function Tt(e,t,r,n,i,o,a){var l=r.flattenSpans
null==l&&(l=e.options.flattenSpans)
var s,c=0,u=null,d=new Ye(t,e.options.tabSize,n),f=e.options.addModeClass&&[null]
for(""==t&&St(wt(r,n.state),o);!d.eol();){if(d.pos>e.options.maxHighlightLength?(l=!1,a&&bt(e,t,n,d.pos),d.pos=t.length,s=null):s=St(xt(r,d,n.state,f),o),f){var h=f[0].name
h&&(s="m-"+(s?h+" "+s:h))}if(!l||u!=s){for(;c<d.start;)i(c=Math.min(d.start,c+5e3),u)
u=s}d.start=d.pos}for(;c<d.pos;){var p=Math.min(d.pos,c+5e3)
i(p,u),c=p}}var Lt=!1,Mt=!1
function Nt(e,t,r){this.marker=e,this.from=t,this.to=r}function At(e,t){if(e)for(var r=0;r<e.length;++r){var n=e[r]
if(n.marker==t)return n}}function Ot(e,t){for(var r,n=0;n<e.length;++n)e[n]!=t&&(r||(r=[])).push(e[n])
return r}function zt(e,t){if(t.full)return null
var r=nt(e,t.from.line)&&Ze(e,t.from.line).markedSpans,n=nt(e,t.to.line)&&Ze(e,t.to.line).markedSpans
if(!r&&!n)return null
var i=t.from.ch,o=t.to.ch,a=0==at(t.from,t.to),l=function(e,t,r){var n
if(e)for(var i=0;i<e.length;++i){var o=e[i],a=o.marker
if(null==o.from||(a.inclusiveLeft?o.from<=t:o.from<t)||o.from==t&&"bookmark"==a.type&&(!r||!o.marker.insertLeft)){var l=null==o.to||(a.inclusiveRight?o.to>=t:o.to>t);(n||(n=[])).push(new Nt(a,o.from,l?null:o.to))}}return n}(r,i,a),s=function(e,t,r){var n
if(e)for(var i=0;i<e.length;++i){var o=e[i],a=o.marker
if(null==o.to||(a.inclusiveRight?o.to>=t:o.to>t)||o.from==t&&"bookmark"==a.type&&(!r||o.marker.insertLeft)){var l=null==o.from||(a.inclusiveLeft?o.from<=t:o.from<t);(n||(n=[])).push(new Nt(a,l?null:o.from-t,null==o.to?null:o.to-t))}}return n}(n,o,a),c=1==t.text.length,u=J(t.text).length+(c?i:0)
if(l)for(var d=0;d<l.length;++d){var f=l[d]
if(null==f.to){var h=At(s,f.marker)
h?c&&(f.to=null==h.to?null:h.to+u):f.to=i}}if(s)for(var p=0;p<s.length;++p){var g=s[p]
null!=g.to&&(g.to+=u),null==g.from?At(l,g.marker)||(g.from=u,c&&(l||(l=[])).push(g)):(g.from+=u,c&&(l||(l=[])).push(g))}l&&(l=Dt(l)),s&&s!=l&&(s=Dt(s))
var m=[l]
if(!c){var v,y=t.text.length-2
if(y>0&&l)for(var b=0;b<l.length;++b)null==l[b].to&&(v||(v=[])).push(new Nt(l[b].marker,null,null))
for(var w=0;w<y;++w)m.push(v)
m.push(s)}return m}function Dt(e){for(var t=0;t<e.length;++t){var r=e[t]
null!=r.from&&r.from==r.to&&!1!==r.marker.clearWhenEmpty&&e.splice(t--,1)}return e.length?e:null}function Wt(e){var t=e.markedSpans
if(t){for(var r=0;r<t.length;++r)t[r].marker.detachLine(e)
e.markedSpans=null}}function Pt(e,t){if(t){for(var r=0;r<t.length;++r)t[r].marker.attachLine(e)
e.markedSpans=t}}function Ht(e){return e.inclusiveLeft?-1:0}function Et(e){return e.inclusiveRight?1:0}function Ft(e,t){var r=e.lines.length-t.lines.length
if(0!=r)return r
var n=e.find(),i=t.find(),o=at(n.from,i.from)||Ht(e)-Ht(t)
return o?-o:at(n.to,i.to)||Et(e)-Et(t)||t.id-e.id}function It(e,t){var r,n=Mt&&e.markedSpans
if(n)for(var i=void 0,o=0;o<n.length;++o)(i=n[o]).marker.collapsed&&null==(t?i.from:i.to)&&(!r||Ft(r,i.marker)<0)&&(r=i.marker)
return r}function Rt(e){return It(e,!0)}function Bt(e){return It(e,!1)}function jt(e,t){var r,n=Mt&&e.markedSpans
if(n)for(var i=0;i<n.length;++i){var o=n[i]
o.marker.collapsed&&(null==o.from||o.from<t)&&(null==o.to||o.to>t)&&(!r||Ft(r,o.marker)<0)&&(r=o.marker)}return r}function Vt(e,t,r,n,i){var o=Ze(e,t),a=Mt&&o.markedSpans
if(a)for(var l=0;l<a.length;++l){var s=a[l]
if(s.marker.collapsed){var c=s.marker.find(0),u=at(c.from,r)||Ht(s.marker)-Ht(i),d=at(c.to,n)||Et(s.marker)-Et(i)
if(!(u>=0&&d<=0||u<=0&&d>=0)&&(u<=0&&(s.marker.inclusiveRight&&i.inclusiveLeft?at(c.to,r)>=0:at(c.to,r)>0)||u>=0&&(s.marker.inclusiveRight&&i.inclusiveLeft?at(c.from,n)<=0:at(c.from,n)<0)))return!0}}}function Kt(e){for(var t;t=Rt(e);)e=t.find(-1,!0).line
return e}function Gt(e,t){var r=Ze(e,t),n=Kt(r)
return r==n?t:tt(n)}function Ut(e,t){if(t>e.lastLine())return t
var r,n=Ze(e,t)
if(!qt(e,n))return t
for(;r=Bt(n);)n=r.find(1,!0).line
return tt(n)+1}function qt(e,t){var r=Mt&&t.markedSpans
if(r)for(var n=void 0,i=0;i<r.length;++i)if((n=r[i]).marker.collapsed){if(null==n.from)return!0
if(!n.marker.widgetNode&&0==n.from&&n.marker.inclusiveLeft&&_t(e,t,n))return!0}}function _t(e,t,r){if(null==r.to){var n=r.marker.find(1,!0)
return _t(e,n.line,At(n.line.markedSpans,r.marker))}if(r.marker.inclusiveRight&&r.to==t.text.length)return!0
for(var i=void 0,o=0;o<t.markedSpans.length;++o)if((i=t.markedSpans[o]).marker.collapsed&&!i.marker.widgetNode&&i.from==r.to&&(null==i.to||i.to!=r.from)&&(i.marker.inclusiveLeft||r.marker.inclusiveRight)&&_t(e,t,i))return!0}function $t(e){for(var t=0,r=(e=Kt(e)).parent,n=0;n<r.lines.length;++n){var i=r.lines[n]
if(i==e)break
t+=i.height}for(var o=r.parent;o;o=(r=o).parent)for(var a=0;a<o.children.length;++a){var l=o.children[a]
if(l==r)break
t+=l.height}return t}function Xt(e){if(0==e.height)return 0
for(var t,r=e.text.length,n=e;t=Rt(n);){var i=t.find(0,!0)
n=i.from.line,r+=i.from.ch-i.to.ch}for(n=e;t=Bt(n);){var o=t.find(0,!0)
r-=n.text.length-o.from.ch,r+=(n=o.to.line).text.length-o.to.ch}return r}function Yt(e){var t=e.display,r=e.doc
t.maxLine=Ze(r,r.first),t.maxLineLength=Xt(t.maxLine),t.maxLineChanged=!0,r.iter(function(e){var r=Xt(e)
r>t.maxLineLength&&(t.maxLineLength=r,t.maxLine=e)})}var Zt=function(e,t,r){this.text=e,Pt(this,t),this.height=r?r(this):1}
function Qt(e){e.parent=null,Wt(e)}Zt.prototype.lineNo=function(){return tt(this)},Ce(Zt)
var Jt={},er={}
function tr(e,t){if(!e||/^\s*$/.test(e))return null
var r=t.addModeClass?er:Jt
return r[e]||(r[e]=e.replace(/\S+/g,"cm-$&"))}function rr(e,t){var r=z("span",null,null,s?"padding-right: .1px":null),n={pre:z("pre",[r],"CodeMirror-line"),content:r,col:0,pos:0,cm:e,trailingSpace:!1,splitSpaces:e.getOption("lineWrapping")}
t.measure={}
for(var i=0;i<=(t.rest?t.rest.length:0);i++){var o=i?t.rest[i-1]:t.line,a=void 0
n.pos=0,n.addToken=ir,Pe(e.display.measure)&&(a=pe(o,e.doc.direction))&&(n.addToken=or(n.addToken,a)),n.map=[],lr(o,n,vt(e,o,t!=e.display.externalMeasured&&tt(o))),o.styleClasses&&(o.styleClasses.bgClass&&(n.bgClass=H(o.styleClasses.bgClass,n.bgClass||"")),o.styleClasses.textClass&&(n.textClass=H(o.styleClasses.textClass,n.textClass||""))),0==n.map.length&&n.map.push(0,0,n.content.appendChild(We(e.display.measure))),0==i?(t.measure.map=n.map,t.measure.cache={}):((t.measure.maps||(t.measure.maps=[])).push(n.map),(t.measure.caches||(t.measure.caches=[])).push({}))}if(s){var l=n.content.lastChild;(/\bcm-tab\b/.test(l.className)||l.querySelector&&l.querySelector(".cm-tab"))&&(n.content.className="cm-tab-wrap-hack")}return be(e,"renderLine",e,t.line,n.pre),n.pre.className&&(n.textClass=H(n.pre.className,n.textClass||"")),n}function nr(e){var t=O("span","•","cm-invalidchar")
return t.title="\\u"+e.charCodeAt(0).toString(16),t.setAttribute("aria-label",t.title),t}function ir(e,t,r,n,i,o,s){if(t){var c,u=e.splitSpaces?function(e,t){if(e.length>1&&!/  /.test(e))return e
for(var r=t,n="",i=0;i<e.length;i++){var o=e.charAt(i)
" "!=o||!r||i!=e.length-1&&32!=e.charCodeAt(i+1)||(o=" "),n+=o,r=" "==o}return n}(t,e.trailingSpace):t,d=e.cm.state.specialChars,f=!1
if(d.test(t)){c=document.createDocumentFragment()
for(var h=0;;){d.lastIndex=h
var p=d.exec(t),g=p?p.index-h:t.length-h
if(g){var m=document.createTextNode(u.slice(h,h+g))
a&&l<9?c.appendChild(O("span",[m])):c.appendChild(m),e.map.push(e.pos,e.pos+g,m),e.col+=g,e.pos+=g}if(!p)break
h+=g+1
var v=void 0
if("\t"==p[0]){var y=e.cm.options.tabSize,b=y-e.col%y;(v=c.appendChild(O("span",Q(b),"cm-tab"))).setAttribute("role","presentation"),v.setAttribute("cm-text","\t"),e.col+=b}else"\r"==p[0]||"\n"==p[0]?((v=c.appendChild(O("span","\r"==p[0]?"␍":"␤","cm-invalidchar"))).setAttribute("cm-text",p[0]),e.col+=1):((v=e.cm.options.specialCharPlaceholder(p[0])).setAttribute("cm-text",p[0]),a&&l<9?c.appendChild(O("span",[v])):c.appendChild(v),e.col+=1)
e.map.push(e.pos,e.pos+1,v),e.pos++}}else e.col+=t.length,c=document.createTextNode(u),e.map.push(e.pos,e.pos+t.length,c),a&&l<9&&(f=!0),e.pos+=t.length
if(e.trailingSpace=32==u.charCodeAt(t.length-1),r||n||i||f||o||s){var w=r||""
n&&(w+=n),i&&(w+=i)
var x=O("span",[c],w,o)
if(s)for(var k in s)s.hasOwnProperty(k)&&"style"!=k&&"class"!=k&&x.setAttribute(k,s[k])
return e.content.appendChild(x)}e.content.appendChild(c)}}function or(e,t){return function(r,n,i,o,a,l,s){i=i?i+" cm-force-border":"cm-force-border"
for(var c=r.pos,u=c+n.length;;){for(var d=void 0,f=0;f<t.length&&!((d=t[f]).to>c&&d.from<=c);f++);if(d.to>=u)return e(r,n,i,o,a,l,s)
e(r,n.slice(0,d.to-c),i,o,null,l,s),o=null,n=n.slice(d.to-c),c=d.to}}}function ar(e,t,r,n){var i=!n&&r.widgetNode
i&&e.map.push(e.pos,e.pos+t,i),!n&&e.cm.display.input.needsContentAttribute&&(i||(i=e.content.appendChild(document.createElement("span"))),i.setAttribute("cm-marker",r.id)),i&&(e.cm.display.input.setUneditable(i),e.content.appendChild(i)),e.pos+=t,e.trailingSpace=!1}function lr(e,t,r){var n=e.markedSpans,i=e.text,o=0
if(n)for(var a,l,s,c,u,d,f,h=i.length,p=0,g=1,m="",v=0;;){if(v==p){s=c=u=l="",f=null,d=null,v=1/0
for(var y=[],b=void 0,w=0;w<n.length;++w){var x=n[w],k=x.marker
if("bookmark"==k.type&&x.from==p&&k.widgetNode)y.push(k)
else if(x.from<=p&&(null==x.to||x.to>p||k.collapsed&&x.to==p&&x.from==p)){if(null!=x.to&&x.to!=p&&v>x.to&&(v=x.to,c=""),k.className&&(s+=" "+k.className),k.css&&(l=(l?l+";":"")+k.css),k.startStyle&&x.from==p&&(u+=" "+k.startStyle),k.endStyle&&x.to==v&&(b||(b=[])).push(k.endStyle,x.to),k.title&&((f||(f={})).title=k.title),k.attributes)for(var C in k.attributes)(f||(f={}))[C]=k.attributes[C]
k.collapsed&&(!d||Ft(d.marker,k)<0)&&(d=x)}else x.from>p&&v>x.from&&(v=x.from)}if(b)for(var S=0;S<b.length;S+=2)b[S+1]==v&&(c+=" "+b[S])
if(!d||d.from==p)for(var T=0;T<y.length;++T)ar(t,0,y[T])
if(d&&(d.from||0)==p){if(ar(t,(null==d.to?h+1:d.to)-p,d.marker,null==d.from),null==d.to)return
d.to==p&&(d=!1)}}if(p>=h)break
for(var L=Math.min(h,v);;){if(m){var M=p+m.length
if(!d){var N=M>L?m.slice(0,L-p):m
t.addToken(t,N,a?a+s:s,u,p+N.length==v?c:"",l,f)}if(M>=L){m=m.slice(L-p),p=L
break}p=M,u=""}m=i.slice(o,o=r[g++]),a=tr(r[g++],t.cm.options)}}else for(var A=1;A<r.length;A+=2)t.addToken(t,i.slice(o,o=r[A]),tr(r[A+1],t.cm.options))}function sr(e,t,r){this.line=t,this.rest=function(e){for(var t,r;t=Bt(e);)e=t.find(1,!0).line,(r||(r=[])).push(e)
return r}(t),this.size=this.rest?tt(J(this.rest))-r+1:1,this.node=this.text=null,this.hidden=qt(e,t)}function cr(e,t,r){for(var n,i=[],o=t;o<r;o=n){var a=new sr(e.doc,Ze(e.doc,o),o)
n=o+a.size,i.push(a)}return i}var ur=null,dr=null
function fr(e,t){var r=ve(e,t)
if(r.length){var n,i=Array.prototype.slice.call(arguments,2)
ur?n=ur.delayedCallbacks:dr?n=dr:(n=dr=[],setTimeout(hr,0))
for(var o=function(e){n.push(function(){return r[e].apply(null,i)})},a=0;a<r.length;++a)o(a)}}function hr(){var e=dr
dr=null
for(var t=0;t<e.length;++t)e[t]()}function pr(e,t,r,n){for(var i=0;i<t.changes.length;i++){var o=t.changes[i]
"text"==o?vr(e,t):"gutter"==o?br(e,t,r,n):"class"==o?yr(e,t):"widget"==o&&wr(e,t,n)}t.changes=null}function gr(e){return e.node==e.text&&(e.node=O("div",null,null,"position: relative"),e.text.parentNode&&e.text.parentNode.replaceChild(e.node,e.text),e.node.appendChild(e.text),a&&l<8&&(e.node.style.zIndex=2)),e.node}function mr(e,t){var r=e.display.externalMeasured
return r&&r.line==t.line?(e.display.externalMeasured=null,t.measure=r.measure,r.built):rr(e,t)}function vr(e,t){var r=t.text.className,n=mr(e,t)
t.text==t.node&&(t.node=n.pre),t.text.parentNode.replaceChild(n.pre,t.text),t.text=n.pre,n.bgClass!=t.bgClass||n.textClass!=t.textClass?(t.bgClass=n.bgClass,t.textClass=n.textClass,yr(e,t)):r&&(t.text.className=r)}function yr(e,t){!function(e,t){var r=t.bgClass?t.bgClass+" "+(t.line.bgClass||""):t.line.bgClass
if(r&&(r+=" CodeMirror-linebackground"),t.background)r?t.background.className=r:(t.background.parentNode.removeChild(t.background),t.background=null)
else if(r){var n=gr(t)
t.background=n.insertBefore(O("div",null,r),n.firstChild),e.display.input.setUneditable(t.background)}}(e,t),t.line.wrapClass?gr(t).className=t.line.wrapClass:t.node!=t.text&&(t.node.className="")
var r=t.textClass?t.textClass+" "+(t.line.textClass||""):t.line.textClass
t.text.className=r||""}function br(e,t,r,n){if(t.gutter&&(t.node.removeChild(t.gutter),t.gutter=null),t.gutterBackground&&(t.node.removeChild(t.gutterBackground),t.gutterBackground=null),t.line.gutterClass){var i=gr(t)
t.gutterBackground=O("div",null,"CodeMirror-gutter-background "+t.line.gutterClass,"left: "+(e.options.fixedGutter?n.fixedPos:-n.gutterTotalWidth)+"px; width: "+n.gutterTotalWidth+"px"),e.display.input.setUneditable(t.gutterBackground),i.insertBefore(t.gutterBackground,t.text)}var o=t.line.gutterMarkers
if(e.options.lineNumbers||o){var a=gr(t),l=t.gutter=O("div",null,"CodeMirror-gutter-wrapper","left: "+(e.options.fixedGutter?n.fixedPos:-n.gutterTotalWidth)+"px")
if(l.setAttribute("aria-hidden","true"),e.display.input.setUneditable(l),a.insertBefore(l,t.text),t.line.gutterClass&&(l.className+=" "+t.line.gutterClass),!e.options.lineNumbers||o&&o["CodeMirror-linenumbers"]||(t.lineNumber=l.appendChild(O("div",it(e.options,r),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+n.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+e.display.lineNumInnerWidth+"px"))),o)for(var s=0;s<e.display.gutterSpecs.length;++s){var c=e.display.gutterSpecs[s].className,u=o.hasOwnProperty(c)&&o[c]
u&&l.appendChild(O("div",[u],"CodeMirror-gutter-elt","left: "+n.gutterLeft[c]+"px; width: "+n.gutterWidth[c]+"px"))}}}function wr(e,t,r){t.alignable&&(t.alignable=null)
for(var n=T("CodeMirror-linewidget"),i=t.node.firstChild,o=void 0;i;i=o)o=i.nextSibling,n.test(i.className)&&t.node.removeChild(i)
kr(e,t,r)}function xr(e,t,r,n){var i=mr(e,t)
return t.text=t.node=i.pre,i.bgClass&&(t.bgClass=i.bgClass),i.textClass&&(t.textClass=i.textClass),yr(e,t),br(e,t,r,n),kr(e,t,n),t.node}function kr(e,t,r){if(Cr(e,t.line,t,r,!0),t.rest)for(var n=0;n<t.rest.length;n++)Cr(e,t.rest[n],t,r,!1)}function Cr(e,t,r,n,i){if(t.widgets)for(var o=gr(r),a=0,l=t.widgets;a<l.length;++a){var s=l[a],c=O("div",[s.node],"CodeMirror-linewidget"+(s.className?" "+s.className:""))
s.handleMouseEvents||c.setAttribute("cm-ignore-events","true"),Sr(s,c,r,n),e.display.input.setUneditable(c),i&&s.above?o.insertBefore(c,r.gutter||r.text):o.appendChild(c),fr(s,"redraw")}}function Sr(e,t,r,n){if(e.noHScroll){(r.alignable||(r.alignable=[])).push(t)
var i=n.wrapperWidth
t.style.left=n.fixedPos+"px",e.coverGutter||(i-=n.gutterTotalWidth,t.style.paddingLeft=n.gutterTotalWidth+"px"),t.style.width=i+"px"}e.coverGutter&&(t.style.zIndex=5,t.style.position="relative",e.noHScroll||(t.style.marginLeft=-n.gutterTotalWidth+"px"))}function Tr(e){if(null!=e.height)return e.height
var t=e.doc.cm
if(!t)return 0
if(!D(document.body,e.node)){var r="position: relative;"
e.coverGutter&&(r+="margin-left: -"+t.display.gutters.offsetWidth+"px;"),e.noHScroll&&(r+="width: "+t.display.wrapper.clientWidth+"px;"),A(t.display.measure,O("div",[e.node],null,r))}return e.height=e.node.parentNode.offsetHeight}function Lr(e,t){for(var r=Ne(t);r!=e.wrapper;r=r.parentNode)if(!r||1==r.nodeType&&"true"==r.getAttribute("cm-ignore-events")||r.parentNode==e.sizer&&r!=e.mover)return!0}function Mr(e){return e.lineSpace.offsetTop}function Nr(e){return e.mover.offsetHeight-e.lineSpace.offsetHeight}function Ar(e){if(e.cachedPaddingH)return e.cachedPaddingH
var t=A(e.measure,O("pre","x","CodeMirror-line-like")),r=window.getComputedStyle?window.getComputedStyle(t):t.currentStyle,n={left:parseInt(r.paddingLeft),right:parseInt(r.paddingRight)}
return isNaN(n.left)||isNaN(n.right)||(e.cachedPaddingH=n),n}function Or(e){return 50-e.display.nativeBarWidth}function zr(e){return e.display.scroller.clientWidth-Or(e)-e.display.barWidth}function Dr(e){return e.display.scroller.clientHeight-Or(e)-e.display.barHeight}function Wr(e,t,r){if(e.line==t)return{map:e.measure.map,cache:e.measure.cache}
if(e.rest){for(var n=0;n<e.rest.length;n++)if(e.rest[n]==t)return{map:e.measure.maps[n],cache:e.measure.caches[n]}
for(var i=0;i<e.rest.length;i++)if(tt(e.rest[i])>r)return{map:e.measure.maps[i],cache:e.measure.caches[i],before:!0}}}function Pr(e,t,r,n){return Fr(e,Er(e,t),r,n)}function Hr(e,t){if(t>=e.display.viewFrom&&t<e.display.viewTo)return e.display.view[gn(e,t)]
var r=e.display.externalMeasured
return r&&t>=r.lineN&&t<r.lineN+r.size?r:void 0}function Er(e,t){var r=tt(t),n=Hr(e,r)
n&&!n.text?n=null:n&&n.changes&&(pr(e,n,r,un(e)),e.curOp.forceUpdate=!0),n||(n=function(e,t){var r=tt(t=Kt(t)),n=e.display.externalMeasured=new sr(e.doc,t,r)
n.lineN=r
var i=n.built=rr(e,n)
return n.text=i.pre,A(e.display.lineMeasure,i.pre),n}(e,t))
var i=Wr(n,t,r)
return{line:t,view:n,rect:null,map:i.map,cache:i.cache,before:i.before,hasHeights:!1}}function Fr(e,t,r,n,i){t.before&&(r=-1)
var o,s=r+(n||"")
return t.cache.hasOwnProperty(s)?o=t.cache[s]:(t.rect||(t.rect=t.view.text.getBoundingClientRect()),t.hasHeights||(function(e,t,r){var n=e.options.lineWrapping,i=n&&zr(e)
if(!t.measure.heights||n&&t.measure.width!=i){var o=t.measure.heights=[]
if(n){t.measure.width=i
for(var a=t.text.firstChild.getClientRects(),l=0;l<a.length-1;l++){var s=a[l],c=a[l+1]
Math.abs(s.bottom-c.bottom)>2&&o.push((s.bottom+c.top)/2-r.top)}}o.push(r.bottom-r.top)}}(e,t.view,t.rect),t.hasHeights=!0),o=function(e,t,r,n){var i,o=Br(t.map,r,n),s=o.node,c=o.start,u=o.end,d=o.collapse
if(3==s.nodeType){for(var f=0;f<4;f++){for(;c&&se(t.line.text.charAt(o.coverStart+c));)--c
for(;o.coverStart+u<o.coverEnd&&se(t.line.text.charAt(o.coverStart+u));)++u
if((i=a&&l<9&&0==c&&u==o.coverEnd-o.coverStart?s.parentNode.getBoundingClientRect():jr(L(s,c,u).getClientRects(),n)).left||i.right||0==c)break
u=c,c-=1,d="right"}a&&l<11&&(i=function(e,t){if(!window.screen||null==screen.logicalXDPI||screen.logicalXDPI==screen.deviceXDPI||!function(e){if(null!=Re)return Re
var t=A(e,O("span","x")),r=t.getBoundingClientRect(),n=L(t,0,1).getBoundingClientRect()
return Re=Math.abs(r.left-n.left)>1}(e))return t
var r=screen.logicalXDPI/screen.deviceXDPI,n=screen.logicalYDPI/screen.deviceYDPI
return{left:t.left*r,right:t.right*r,top:t.top*n,bottom:t.bottom*n}}(e.display.measure,i))}else{var h
c>0&&(d=n="right"),i=e.options.lineWrapping&&(h=s.getClientRects()).length>1?h["right"==n?h.length-1:0]:s.getBoundingClientRect()}if(a&&l<9&&!c&&(!i||!i.left&&!i.right)){var p=s.parentNode.getClientRects()[0]
i=p?{left:p.left,right:p.left+cn(e.display),top:p.top,bottom:p.bottom}:Rr}for(var g=i.top-t.rect.top,m=i.bottom-t.rect.top,v=(g+m)/2,y=t.view.measure.heights,b=0;b<y.length-1&&!(v<y[b]);b++);var w=b?y[b-1]:0,x=y[b],k={left:("right"==d?i.right:i.left)-t.rect.left,right:("left"==d?i.left:i.right)-t.rect.left,top:w,bottom:x}
return i.left||i.right||(k.bogus=!0),e.options.singleCursorHeightPerLine||(k.rtop=g,k.rbottom=m),k}(e,t,r,n),o.bogus||(t.cache[s]=o)),{left:o.left,right:o.right,top:i?o.rtop:o.top,bottom:i?o.rbottom:o.bottom}}var Ir,Rr={left:0,right:0,top:0,bottom:0}
function Br(e,t,r){for(var n,i,o,a,l,s,c=0;c<e.length;c+=3)if(l=e[c],s=e[c+1],t<l?(i=0,o=1,a="left"):t<s?o=1+(i=t-l):(c==e.length-3||t==s&&e[c+3]>t)&&(i=(o=s-l)-1,t>=s&&(a="right")),null!=i){if(n=e[c+2],l==s&&r==(n.insertLeft?"left":"right")&&(a=r),"left"==r&&0==i)for(;c&&e[c-2]==e[c-3]&&e[c-1].insertLeft;)n=e[2+(c-=3)],a="left"
if("right"==r&&i==s-l)for(;c<e.length-3&&e[c+3]==e[c+4]&&!e[c+5].insertLeft;)n=e[(c+=3)+2],a="right"
break}return{node:n,start:i,end:o,collapse:a,coverStart:l,coverEnd:s}}function jr(e,t){var r=Rr
if("left"==t)for(var n=0;n<e.length&&(r=e[n]).left==r.right;n++);else for(var i=e.length-1;i>=0&&(r=e[i]).left==r.right;i--);return r}function Vr(e){if(e.measure&&(e.measure.cache={},e.measure.heights=null,e.rest))for(var t=0;t<e.rest.length;t++)e.measure.caches[t]={}}function Kr(e){e.display.externalMeasure=null,N(e.display.lineMeasure)
for(var t=0;t<e.display.view.length;t++)Vr(e.display.view[t])}function Gr(e){Kr(e),e.display.cachedCharWidth=e.display.cachedTextHeight=e.display.cachedPaddingH=null,e.options.lineWrapping||(e.display.maxLineChanged=!0),e.display.lineNumChars=null}function Ur(e){return u&&v?-(e.body.getBoundingClientRect().left-parseInt(getComputedStyle(e.body).marginLeft)):e.defaultView.pageXOffset||(e.documentElement||e.body).scrollLeft}function qr(e){return u&&v?-(e.body.getBoundingClientRect().top-parseInt(getComputedStyle(e.body).marginTop)):e.defaultView.pageYOffset||(e.documentElement||e.body).scrollTop}function _r(e){var t=Kt(e).widgets,r=0
if(t)for(var n=0;n<t.length;++n)t[n].above&&(r+=Tr(t[n]))
return r}function $r(e,t,r,n,i){if(!i){var o=_r(t)
r.top+=o,r.bottom+=o}if("line"==n)return r
n||(n="local")
var a=$t(t)
if("local"==n?a+=Mr(e.display):a-=e.display.viewOffset,"page"==n||"window"==n){var l=e.display.lineSpace.getBoundingClientRect()
a+=l.top+("window"==n?0:qr(F(e)))
var s=l.left+("window"==n?0:Ur(F(e)))
r.left+=s,r.right+=s}return r.top+=a,r.bottom+=a,r}function Xr(e,t,r){if("div"==r)return t
var n=t.left,i=t.top
if("page"==r)n-=Ur(F(e)),i-=qr(F(e))
else if("local"==r||!r){var o=e.display.sizer.getBoundingClientRect()
n+=o.left,i+=o.top}var a=e.display.lineSpace.getBoundingClientRect()
return{left:n-a.left,top:i-a.top}}function Yr(e,t,r,n,i){return n||(n=Ze(e.doc,t.line)),$r(e,n,Pr(e,n,t.ch,i),r)}function Zr(e,t,r,n,i,o){function a(t,a){var l=Fr(e,i,t,a?"right":"left",o)
return a?l.left=l.right:l.right=l.left,$r(e,n,l,r)}n=n||Ze(e.doc,t.line),i||(i=Er(e,n))
var l=pe(n,e.doc.direction),s=t.ch,c=t.sticky
if(s>=n.text.length?(s=n.text.length,c="before"):s<=0&&(s=0,c="after"),!l)return a("before"==c?s-1:s,"before"==c)
function u(e,t,r){return a(r?e-1:e,1==l[t].level!=r)}var d=fe(l,s,c),f=de,h=u(s,d,"before"==c)
return null!=f&&(h.other=u(s,f,"before"!=c)),h}function Qr(e,t){var r=0
t=ft(e.doc,t),e.options.lineWrapping||(r=cn(e.display)*t.ch)
var n=Ze(e.doc,t.line),i=$t(n)+Mr(e.display)
return{left:r,right:r,top:i,bottom:i+n.height}}function Jr(e,t,r,n,i){var o=ot(e,t,r)
return o.xRel=i,n&&(o.outside=n),o}function en(e,t,r){var n=e.doc
if((r+=e.display.viewOffset)<0)return Jr(n.first,0,null,-1,-1)
var i=rt(n,r),o=n.first+n.size-1
if(i>o)return Jr(n.first+n.size-1,Ze(n,o).text.length,null,1,1)
t<0&&(t=0)
for(var a=Ze(n,i);;){var l=on(e,a,i,t,r),s=jt(a,l.ch+(l.xRel>0||l.outside>0?1:0))
if(!s)return l
var c=s.find(1)
if(c.line==i)return c
a=Ze(n,i=c.line)}}function tn(e,t,r,n){n-=_r(t)
var i=t.text.length,o=ue(function(t){return Fr(e,r,t-1).bottom<=n},i,0)
return{begin:o,end:i=ue(function(t){return Fr(e,r,t).top>n},o,i)}}function rn(e,t,r,n){return r||(r=Er(e,t)),tn(e,t,r,$r(e,t,Fr(e,r,n),"line").top)}function nn(e,t,r,n){return!(e.bottom<=r)&&(e.top>r||(n?e.left:e.right)>t)}function on(e,t,r,n,i){i-=$t(t)
var o=Er(e,t),a=_r(t),l=0,s=t.text.length,c=!0,u=pe(t,e.doc.direction)
if(u){var d=(e.options.lineWrapping?ln:an)(e,t,r,o,u,n,i)
l=(c=1!=d.level)?d.from:d.to-1,s=c?d.to:d.from-1}var f,h,p=null,g=null,m=ue(function(t){var r=Fr(e,o,t)
return r.top+=a,r.bottom+=a,!!nn(r,n,i,!1)&&(r.top<=i&&r.left<=n&&(p=t,g=r),!0)},l,s),v=!1
if(g){var y=n-g.left<g.right-n,b=y==c
m=p+(b?0:1),h=b?"after":"before",f=y?g.left:g.right}else{c||m!=s&&m!=l||m++,h=0==m?"after":m==t.text.length?"before":Fr(e,o,m-(c?1:0)).bottom+a<=i==c?"after":"before"
var w=Zr(e,ot(r,m,h),"line",t,o)
f=w.left,v=i<w.top?-1:i>=w.bottom?1:0}return Jr(r,m=ce(t.text,m,1),h,v,n-f)}function an(e,t,r,n,i,o,a){var l=ue(function(l){var s=i[l],c=1!=s.level
return nn(Zr(e,ot(r,c?s.to:s.from,c?"before":"after"),"line",t,n),o,a,!0)},0,i.length-1),s=i[l]
if(l>0){var c=1!=s.level,u=Zr(e,ot(r,c?s.from:s.to,c?"after":"before"),"line",t,n)
nn(u,o,a,!0)&&u.top>a&&(s=i[l-1])}return s}function ln(e,t,r,n,i,o,a){var l=tn(e,t,n,a),s=l.begin,c=l.end;/\s/.test(t.text.charAt(c-1))&&c--
for(var u=null,d=null,f=0;f<i.length;f++){var h=i[f]
if(!(h.from>=c||h.to<=s)){var p=Fr(e,n,1!=h.level?Math.min(c,h.to)-1:Math.max(s,h.from)).right,g=p<o?o-p+1e9:p-o;(!u||d>g)&&(u=h,d=g)}}return u||(u=i[i.length-1]),u.from<s&&(u={from:s,to:u.to,level:u.level}),u.to>c&&(u={from:u.from,to:c,level:u.level}),u}function sn(e){if(null!=e.cachedTextHeight)return e.cachedTextHeight
if(null==Ir){Ir=O("pre",null,"CodeMirror-line-like")
for(var t=0;t<49;++t)Ir.appendChild(document.createTextNode("x")),Ir.appendChild(O("br"))
Ir.appendChild(document.createTextNode("x"))}A(e.measure,Ir)
var r=Ir.offsetHeight/50
return r>3&&(e.cachedTextHeight=r),N(e.measure),r||1}function cn(e){if(null!=e.cachedCharWidth)return e.cachedCharWidth
var t=O("span","xxxxxxxxxx"),r=O("pre",[t],"CodeMirror-line-like")
A(e.measure,r)
var n=t.getBoundingClientRect(),i=(n.right-n.left)/10
return i>2&&(e.cachedCharWidth=i),i||10}function un(e){for(var t=e.display,r={},n={},i=t.gutters.clientLeft,o=t.gutters.firstChild,a=0;o;o=o.nextSibling,++a){var l=e.display.gutterSpecs[a].className
r[l]=o.offsetLeft+o.clientLeft+i,n[l]=o.clientWidth}return{fixedPos:dn(t),gutterTotalWidth:t.gutters.offsetWidth,gutterLeft:r,gutterWidth:n,wrapperWidth:t.wrapper.clientWidth}}function dn(e){return e.scroller.getBoundingClientRect().left-e.sizer.getBoundingClientRect().left}function fn(e){var t=sn(e.display),r=e.options.lineWrapping,n=r&&Math.max(5,e.display.scroller.clientWidth/cn(e.display)-3)
return function(i){if(qt(e.doc,i))return 0
var o=0
if(i.widgets)for(var a=0;a<i.widgets.length;a++)i.widgets[a].height&&(o+=i.widgets[a].height)
return r?o+(Math.ceil(i.text.length/n)||1)*t:o+t}}function hn(e){var t=e.doc,r=fn(e)
t.iter(function(e){var t=r(e)
t!=e.height&&et(e,t)})}function pn(e,t,r,n){var i=e.display
if(!r&&"true"==Ne(t).getAttribute("cm-not-content"))return null
var o,a,l=i.lineSpace.getBoundingClientRect()
try{o=t.clientX-l.left,a=t.clientY-l.top}catch(e){return null}var s,c=en(e,o,a)
if(n&&c.xRel>0&&(s=Ze(e.doc,c.line).text).length==c.ch){var u=K(s,s.length,e.options.tabSize)-s.length
c=ot(c.line,Math.max(0,Math.round((o-Ar(e.display).left)/cn(e.display))-u))}return c}function gn(e,t){if(t>=e.display.viewTo)return null
if((t-=e.display.viewFrom)<0)return null
for(var r=e.display.view,n=0;n<r.length;n++)if((t-=r[n].size)<0)return n}function mn(e,t,r,n){null==t&&(t=e.doc.first),null==r&&(r=e.doc.first+e.doc.size),n||(n=0)
var i=e.display
if(n&&r<i.viewTo&&(null==i.updateLineNumbers||i.updateLineNumbers>t)&&(i.updateLineNumbers=t),e.curOp.viewChanged=!0,t>=i.viewTo)Mt&&Gt(e.doc,t)<i.viewTo&&yn(e)
else if(r<=i.viewFrom)Mt&&Ut(e.doc,r+n)>i.viewFrom?yn(e):(i.viewFrom+=n,i.viewTo+=n)
else if(t<=i.viewFrom&&r>=i.viewTo)yn(e)
else if(t<=i.viewFrom){var o=bn(e,r,r+n,1)
o?(i.view=i.view.slice(o.index),i.viewFrom=o.lineN,i.viewTo+=n):yn(e)}else if(r>=i.viewTo){var a=bn(e,t,t,-1)
a?(i.view=i.view.slice(0,a.index),i.viewTo=a.lineN):yn(e)}else{var l=bn(e,t,t,-1),s=bn(e,r,r+n,1)
l&&s?(i.view=i.view.slice(0,l.index).concat(cr(e,l.lineN,s.lineN)).concat(i.view.slice(s.index)),i.viewTo+=n):yn(e)}var c=i.externalMeasured
c&&(r<c.lineN?c.lineN+=n:t<c.lineN+c.size&&(i.externalMeasured=null))}function vn(e,t,r){e.curOp.viewChanged=!0
var n=e.display,i=e.display.externalMeasured
if(i&&t>=i.lineN&&t<i.lineN+i.size&&(n.externalMeasured=null),!(t<n.viewFrom||t>=n.viewTo)){var o=n.view[gn(e,t)]
if(null!=o.node){var a=o.changes||(o.changes=[]);-1==U(a,r)&&a.push(r)}}}function yn(e){e.display.viewFrom=e.display.viewTo=e.doc.first,e.display.view=[],e.display.viewOffset=0}function bn(e,t,r,n){var i,o=gn(e,t),a=e.display.view
if(!Mt||r==e.doc.first+e.doc.size)return{index:o,lineN:r}
for(var l=e.display.viewFrom,s=0;s<o;s++)l+=a[s].size
if(l!=t){if(n>0){if(o==a.length-1)return null
i=l+a[o].size-t,o++}else i=l-t
t+=i,r+=i}for(;Gt(e.doc,r)!=r;){if(o==(n<0?0:a.length-1))return null
r+=n*a[o-(n<0?1:0)].size,o+=n}return{index:o,lineN:r}}function wn(e){for(var t=e.display.view,r=0,n=0;n<t.length;n++){var i=t[n]
i.hidden||i.node&&!i.changes||++r}return r}function xn(e){e.display.input.showSelection(e.display.input.prepareSelection())}function kn(e,t){void 0===t&&(t=!0)
var r=e.doc,n={},i=n.cursors=document.createDocumentFragment(),o=n.selection=document.createDocumentFragment(),a=e.options.$customCursor
a&&(t=!0)
for(var l=0;l<r.sel.ranges.length;l++)if(t||l!=r.sel.primIndex){var s=r.sel.ranges[l]
if(!(s.from().line>=e.display.viewTo||s.to().line<e.display.viewFrom)){var c=s.empty()
if(a){var u=a(e,s)
u&&Cn(e,u,i)}else(c||e.options.showCursorWhenSelecting)&&Cn(e,s.head,i)
c||Tn(e,s,o)}}return n}function Cn(e,t,r){var n=Zr(e,t,"div",null,null,!e.options.singleCursorHeightPerLine),i=r.appendChild(O("div"," ","CodeMirror-cursor"))
if(i.style.left=n.left+"px",i.style.top=n.top+"px",i.style.height=Math.max(0,n.bottom-n.top)*e.options.cursorHeight+"px",/\bcm-fat-cursor\b/.test(e.getWrapperElement().className)){var o=Yr(e,t,"div",null,null),a=o.right-o.left
i.style.width=(a>0?a:e.defaultCharWidth())+"px"}if(n.other){var l=r.appendChild(O("div"," ","CodeMirror-cursor CodeMirror-secondarycursor"))
l.style.display="",l.style.left=n.other.left+"px",l.style.top=n.other.top+"px",l.style.height=.85*(n.other.bottom-n.other.top)+"px"}}function Sn(e,t){return e.top-t.top||e.left-t.left}function Tn(e,t,r){var n=e.display,i=e.doc,o=document.createDocumentFragment(),a=Ar(e.display),l=a.left,s=Math.max(n.sizerWidth,zr(e)-n.sizer.offsetLeft)-a.right,c="ltr"==i.direction
function u(e,t,r,n){t<0&&(t=0),t=Math.round(t),n=Math.round(n),o.appendChild(O("div",null,"CodeMirror-selected","position: absolute; left: "+e+"px;\n                             top: "+t+"px; width: "+(null==r?s-e:r)+"px;\n                             height: "+(n-t)+"px"))}function d(t,r,n){var o,a,d=Ze(i,t),f=d.text.length
function h(r,n){return Yr(e,ot(t,r),"div",d,n)}function p(t,r,n){var i=rn(e,d,null,t),o="ltr"==r==("after"==n)?"left":"right"
return h("after"==n?i.begin:i.end-(/\s/.test(d.text.charAt(i.end-1))?2:1),o)[o]}var g=pe(d,i.direction)
return function(e,t,r,n){if(!e)return n(t,r,"ltr",0)
for(var i=!1,o=0;o<e.length;++o){var a=e[o];(a.from<r&&a.to>t||t==r&&a.to==t)&&(n(Math.max(a.from,t),Math.min(a.to,r),1==a.level?"rtl":"ltr",o),i=!0)}i||n(t,r,"ltr")}(g,r||0,null==n?f:n,function(e,t,i,d){var m="ltr"==i,v=h(e,m?"left":"right"),y=h(t-1,m?"right":"left"),b=null==r&&0==e,w=null==n&&t==f,x=0==d,k=!g||d==g.length-1
if(y.top-v.top<=3){var C=(c?w:b)&&k,S=(c?b:w)&&x?l:(m?v:y).left,T=C?s:(m?y:v).right
u(S,v.top,T-S,v.bottom)}else{var L,M,N,A
m?(L=c&&b&&x?l:v.left,M=c?s:p(e,i,"before"),N=c?l:p(t,i,"after"),A=c&&w&&k?s:y.right):(L=c?p(e,i,"before"):l,M=!c&&b&&x?s:v.right,N=!c&&w&&k?l:y.left,A=c?p(t,i,"after"):s),u(L,v.top,M-L,v.bottom),v.bottom<y.top&&u(l,v.bottom,null,y.top),u(N,y.top,A-N,y.bottom)}(!o||Sn(v,o)<0)&&(o=v),Sn(y,o)<0&&(o=y),(!a||Sn(v,a)<0)&&(a=v),Sn(y,a)<0&&(a=y)}),{start:o,end:a}}var f=t.from(),h=t.to()
if(f.line==h.line)d(f.line,f.ch,h.ch)
else{var p=Ze(i,f.line),g=Ze(i,h.line),m=Kt(p)==Kt(g),v=d(f.line,f.ch,m?p.text.length+1:null).end,y=d(h.line,m?0:null,h.ch).start
m&&(v.top<y.top-2?(u(v.right,v.top,null,v.bottom),u(l,y.top,y.left,y.bottom)):u(v.right,v.top,y.left-v.right,v.bottom)),v.bottom<y.top&&u(l,v.bottom,null,y.top)}r.appendChild(o)}function Ln(e){if(e.state.focused){var t=e.display
clearInterval(t.blinker)
var r=!0
t.cursorDiv.style.visibility="",e.options.cursorBlinkRate>0?t.blinker=setInterval(function(){e.hasFocus()||On(e),t.cursorDiv.style.visibility=(r=!r)?"":"hidden"},e.options.cursorBlinkRate):e.options.cursorBlinkRate<0&&(t.cursorDiv.style.visibility="hidden")}}function Mn(e){e.hasFocus()||(e.display.input.focus(),e.state.focused||An(e))}function Nn(e){e.state.delayingBlurEvent=!0,setTimeout(function(){e.state.delayingBlurEvent&&(e.state.delayingBlurEvent=!1,e.state.focused&&On(e))},100)}function An(e,t){e.state.delayingBlurEvent&&!e.state.draggingText&&(e.state.delayingBlurEvent=!1),"nocursor"!=e.options.readOnly&&(e.state.focused||(be(e,"focus",e,t),e.state.focused=!0,P(e.display.wrapper,"CodeMirror-focused"),e.curOp||e.display.selForContextMenu==e.doc.sel||(e.display.input.reset(),s&&setTimeout(function(){return e.display.input.reset(!0)},20)),e.display.input.receivedFocus()),Ln(e))}function On(e,t){e.state.delayingBlurEvent||(e.state.focused&&(be(e,"blur",e,t),e.state.focused=!1,M(e.display.wrapper,"CodeMirror-focused")),clearInterval(e.display.blinker),setTimeout(function(){e.state.focused||(e.display.shift=!1)},150))}function zn(e){for(var t=e.display,r=t.lineDiv.offsetTop,n=Math.max(0,t.scroller.getBoundingClientRect().top),i=t.lineDiv.getBoundingClientRect().top,o=0,s=0;s<t.view.length;s++){var c=t.view[s],u=e.options.lineWrapping,d=void 0,f=0
if(!c.hidden){if(i+=c.line.height,a&&l<8){var h=c.node.offsetTop+c.node.offsetHeight
d=h-r,r=h}else{var p=c.node.getBoundingClientRect()
d=p.bottom-p.top,!u&&c.text.firstChild&&(f=c.text.firstChild.getBoundingClientRect().right-p.left-1)}var g=c.line.height-d
if((g>.005||g<-.005)&&(i<n&&(o-=g),et(c.line,d),Dn(c.line),c.rest))for(var m=0;m<c.rest.length;m++)Dn(c.rest[m])
if(f>e.display.sizerWidth){var v=Math.ceil(f/cn(e.display))
v>e.display.maxLineLength&&(e.display.maxLineLength=v,e.display.maxLine=c.line,e.display.maxLineChanged=!0)}}}Math.abs(o)>2&&(t.scroller.scrollTop+=o)}function Dn(e){if(e.widgets)for(var t=0;t<e.widgets.length;++t){var r=e.widgets[t],n=r.node.parentNode
n&&(r.height=n.offsetHeight)}}function Wn(e,t,r){var n=r&&null!=r.top?Math.max(0,r.top):e.scroller.scrollTop
n=Math.floor(n-Mr(e))
var i=r&&null!=r.bottom?r.bottom:n+e.wrapper.clientHeight,o=rt(t,n),a=rt(t,i)
if(r&&r.ensure){var l=r.ensure.from.line,s=r.ensure.to.line
l<o?(o=l,a=rt(t,$t(Ze(t,l))+e.wrapper.clientHeight)):Math.min(s,t.lastLine())>=a&&(o=rt(t,$t(Ze(t,s))-e.wrapper.clientHeight),a=s)}return{from:o,to:Math.max(a,o+1)}}function Pn(e,t){var r=e.display,n=sn(e.display)
t.top<0&&(t.top=0)
var i=e.curOp&&null!=e.curOp.scrollTop?e.curOp.scrollTop:r.scroller.scrollTop,o=Dr(e),a={}
t.bottom-t.top>o&&(t.bottom=t.top+o)
var l=e.doc.height+Nr(r),s=t.top<n,c=t.bottom>l-n
if(t.top<i)a.scrollTop=s?0:t.top
else if(t.bottom>i+o){var u=Math.min(t.top,(c?l:t.bottom)-o)
u!=i&&(a.scrollTop=u)}var d=e.options.fixedGutter?0:r.gutters.offsetWidth,f=e.curOp&&null!=e.curOp.scrollLeft?e.curOp.scrollLeft:r.scroller.scrollLeft-d,h=zr(e)-r.gutters.offsetWidth,p=t.right-t.left>h
return p&&(t.right=t.left+h),t.left<10?a.scrollLeft=0:t.left<f?a.scrollLeft=Math.max(0,t.left+d-(p?0:10)):t.right>h+f-3&&(a.scrollLeft=t.right+(p?0:10)-h),a}function Hn(e,t){null!=t&&(In(e),e.curOp.scrollTop=(null==e.curOp.scrollTop?e.doc.scrollTop:e.curOp.scrollTop)+t)}function En(e){In(e)
var t=e.getCursor()
e.curOp.scrollToPos={from:t,to:t,margin:e.options.cursorScrollMargin}}function Fn(e,t,r){null==t&&null==r||In(e),null!=t&&(e.curOp.scrollLeft=t),null!=r&&(e.curOp.scrollTop=r)}function In(e){var t=e.curOp.scrollToPos
t&&(e.curOp.scrollToPos=null,Rn(e,Qr(e,t.from),Qr(e,t.to),t.margin))}function Rn(e,t,r,n){var i=Pn(e,{left:Math.min(t.left,r.left),top:Math.min(t.top,r.top)-n,right:Math.max(t.right,r.right),bottom:Math.max(t.bottom,r.bottom)+n})
Fn(e,i.scrollLeft,i.scrollTop)}function Bn(e,t){Math.abs(e.doc.scrollTop-t)<2||(r||hi(e,{top:t}),jn(e,t,!0),r&&hi(e),si(e,100))}function jn(e,t,r){t=Math.max(0,Math.min(e.display.scroller.scrollHeight-e.display.scroller.clientHeight,t)),(e.display.scroller.scrollTop!=t||r)&&(e.doc.scrollTop=t,e.display.scrollbars.setScrollTop(t),e.display.scroller.scrollTop!=t&&(e.display.scroller.scrollTop=t))}function Vn(e,t,r,n){t=Math.max(0,Math.min(t,e.display.scroller.scrollWidth-e.display.scroller.clientWidth)),(r?t==e.doc.scrollLeft:Math.abs(e.doc.scrollLeft-t)<2)&&!n||(e.doc.scrollLeft=t,mi(e),e.display.scroller.scrollLeft!=t&&(e.display.scroller.scrollLeft=t),e.display.scrollbars.setScrollLeft(t))}function Kn(e){var t=e.display,r=t.gutters.offsetWidth,n=Math.round(e.doc.height+Nr(e.display))
return{clientHeight:t.scroller.clientHeight,viewHeight:t.wrapper.clientHeight,scrollWidth:t.scroller.scrollWidth,clientWidth:t.scroller.clientWidth,viewWidth:t.wrapper.clientWidth,barLeft:e.options.fixedGutter?r:0,docHeight:n,scrollHeight:n+Or(e)+t.barHeight,nativeBarWidth:t.nativeBarWidth,gutterWidth:r}}var Gn=function(e,t,r){this.cm=r
var n=this.vert=O("div",[O("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar"),i=this.horiz=O("div",[O("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar")
n.tabIndex=i.tabIndex=-1,e(n),e(i),me(n,"scroll",function(){n.clientHeight&&t(n.scrollTop,"vertical")}),me(i,"scroll",function(){i.clientWidth&&t(i.scrollLeft,"horizontal")}),this.checkedZeroWidth=!1,a&&l<8&&(this.horiz.style.minHeight=this.vert.style.minWidth="18px")}
Gn.prototype.update=function(e){var t=e.scrollWidth>e.clientWidth+1,r=e.scrollHeight>e.clientHeight+1,n=e.nativeBarWidth
if(r){this.vert.style.display="block",this.vert.style.bottom=t?n+"px":"0"
var i=e.viewHeight-(t?n:0)
this.vert.firstChild.style.height=Math.max(0,e.scrollHeight-e.clientHeight+i)+"px"}else this.vert.scrollTop=0,this.vert.style.display="",this.vert.firstChild.style.height="0"
if(t){this.horiz.style.display="block",this.horiz.style.right=r?n+"px":"0",this.horiz.style.left=e.barLeft+"px"
var o=e.viewWidth-e.barLeft-(r?n:0)
this.horiz.firstChild.style.width=Math.max(0,e.scrollWidth-e.clientWidth+o)+"px"}else this.horiz.style.display="",this.horiz.firstChild.style.width="0"
return!this.checkedZeroWidth&&e.clientHeight>0&&(0==n&&this.zeroWidthHack(),this.checkedZeroWidth=!0),{right:r?n:0,bottom:t?n:0}},Gn.prototype.setScrollLeft=function(e){this.horiz.scrollLeft!=e&&(this.horiz.scrollLeft=e),this.disableHoriz&&this.enableZeroWidthBar(this.horiz,this.disableHoriz,"horiz")},Gn.prototype.setScrollTop=function(e){this.vert.scrollTop!=e&&(this.vert.scrollTop=e),this.disableVert&&this.enableZeroWidthBar(this.vert,this.disableVert,"vert")},Gn.prototype.zeroWidthHack=function(){var e=b&&!p?"12px":"18px"
this.horiz.style.height=this.vert.style.width=e,this.horiz.style.visibility=this.vert.style.visibility="hidden",this.disableHoriz=new G,this.disableVert=new G},Gn.prototype.enableZeroWidthBar=function(e,t,r){e.style.visibility="",t.set(1e3,function n(){var i=e.getBoundingClientRect();("vert"==r?document.elementFromPoint(i.right-1,(i.top+i.bottom)/2):document.elementFromPoint((i.right+i.left)/2,i.bottom-1))!=e?e.style.visibility="hidden":t.set(1e3,n)})},Gn.prototype.clear=function(){var e=this.horiz.parentNode
e.removeChild(this.horiz),e.removeChild(this.vert)}
var Un=function(){}
function qn(e,t){t||(t=Kn(e))
var r=e.display.barWidth,n=e.display.barHeight
_n(e,t)
for(var i=0;i<4&&r!=e.display.barWidth||n!=e.display.barHeight;i++)r!=e.display.barWidth&&e.options.lineWrapping&&zn(e),_n(e,Kn(e)),r=e.display.barWidth,n=e.display.barHeight}function _n(e,t){var r=e.display,n=r.scrollbars.update(t)
r.sizer.style.paddingRight=(r.barWidth=n.right)+"px",r.sizer.style.paddingBottom=(r.barHeight=n.bottom)+"px",r.heightForcer.style.borderBottom=n.bottom+"px solid transparent",n.right&&n.bottom?(r.scrollbarFiller.style.display="block",r.scrollbarFiller.style.height=n.bottom+"px",r.scrollbarFiller.style.width=n.right+"px"):r.scrollbarFiller.style.display="",n.bottom&&e.options.coverGutterNextToScrollbar&&e.options.fixedGutter?(r.gutterFiller.style.display="block",r.gutterFiller.style.height=n.bottom+"px",r.gutterFiller.style.width=t.gutterWidth+"px"):r.gutterFiller.style.display=""}Un.prototype.update=function(){return{bottom:0,right:0}},Un.prototype.setScrollLeft=function(){},Un.prototype.setScrollTop=function(){},Un.prototype.clear=function(){}
var $n={native:Gn,null:Un}
function Xn(e){e.display.scrollbars&&(e.display.scrollbars.clear(),e.display.scrollbars.addClass&&M(e.display.wrapper,e.display.scrollbars.addClass)),e.display.scrollbars=new $n[e.options.scrollbarStyle](function(t){e.display.wrapper.insertBefore(t,e.display.scrollbarFiller),me(t,"mousedown",function(){e.state.focused&&setTimeout(function(){return e.display.input.focus()},0)}),t.setAttribute("cm-not-content","true")},function(t,r){"horizontal"==r?Vn(e,t):Bn(e,t)},e),e.display.scrollbars.addClass&&P(e.display.wrapper,e.display.scrollbars.addClass)}var Yn=0
function Zn(e){var t
e.curOp={cm:e,viewChanged:!1,startHeight:e.doc.height,forceUpdate:!1,updateInput:0,typing:!1,changeObjs:null,cursorActivityHandlers:null,cursorActivityCalled:0,selectionChanged:!1,updateMaxLine:!1,scrollLeft:null,scrollTop:null,scrollToPos:null,focus:!1,id:++Yn,markArrays:null},t=e.curOp,ur?ur.ops.push(t):t.ownsGroup=ur={ops:[t],delayedCallbacks:[]}}function Qn(e){var t=e.curOp
t&&function(e){var t=e.ownsGroup
if(t)try{!function(e){var t=e.delayedCallbacks,r=0
do{for(;r<t.length;r++)t[r].call(null)
for(var n=0;n<e.ops.length;n++){var i=e.ops[n]
if(i.cursorActivityHandlers)for(;i.cursorActivityCalled<i.cursorActivityHandlers.length;)i.cursorActivityHandlers[i.cursorActivityCalled++].call(null,i.cm)}}while(r<t.length)}(t)}finally{ur=null,function(e){for(var t=0;t<e.ops.length;t++)e.ops[t].cm.curOp=null
!function(e){for(var t=e.ops,r=0;r<t.length;r++)Jn(t[r])
for(var n=0;n<t.length;n++)ei(t[n])
for(var i=0;i<t.length;i++)ti(t[i])
for(var o=0;o<t.length;o++)ri(t[o])
for(var a=0;a<t.length;a++)ni(t[a])}(e)}(t)}}(t)}function Jn(e){var t=e.cm,r=t.display
!function(e){var t=e.display
!t.scrollbarsClipped&&t.scroller.offsetWidth&&(t.nativeBarWidth=t.scroller.offsetWidth-t.scroller.clientWidth,t.heightForcer.style.height=Or(e)+"px",t.sizer.style.marginBottom=-t.nativeBarWidth+"px",t.sizer.style.borderRightWidth=Or(e)+"px",t.scrollbarsClipped=!0)}(t),e.updateMaxLine&&Yt(t),e.mustUpdate=e.viewChanged||e.forceUpdate||null!=e.scrollTop||e.scrollToPos&&(e.scrollToPos.from.line<r.viewFrom||e.scrollToPos.to.line>=r.viewTo)||r.maxLineChanged&&t.options.lineWrapping,e.update=e.mustUpdate&&new ui(t,e.mustUpdate&&{top:e.scrollTop,ensure:e.scrollToPos},e.forceUpdate)}function ei(e){e.updatedDisplay=e.mustUpdate&&di(e.cm,e.update)}function ti(e){var t=e.cm,r=t.display
e.updatedDisplay&&zn(t),e.barMeasure=Kn(t),r.maxLineChanged&&!t.options.lineWrapping&&(e.adjustWidthTo=Pr(t,r.maxLine,r.maxLine.text.length).left+3,t.display.sizerWidth=e.adjustWidthTo,e.barMeasure.scrollWidth=Math.max(r.scroller.clientWidth,r.sizer.offsetLeft+e.adjustWidthTo+Or(t)+t.display.barWidth),e.maxScrollLeft=Math.max(0,r.sizer.offsetLeft+e.adjustWidthTo-zr(t))),(e.updatedDisplay||e.selectionChanged)&&(e.preparedSelection=r.input.prepareSelection())}function ri(e){var t=e.cm
null!=e.adjustWidthTo&&(t.display.sizer.style.minWidth=e.adjustWidthTo+"px",e.maxScrollLeft<t.doc.scrollLeft&&Vn(t,Math.min(t.display.scroller.scrollLeft,e.maxScrollLeft),!0),t.display.maxLineChanged=!1)
var r=e.focus&&e.focus==W(I(t))
e.preparedSelection&&t.display.input.showSelection(e.preparedSelection,r),(e.updatedDisplay||e.startHeight!=t.doc.height)&&qn(t,e.barMeasure),e.updatedDisplay&&gi(t,e.barMeasure),e.selectionChanged&&Ln(t),t.state.focused&&e.updateInput&&t.display.input.reset(e.typing),r&&Mn(e.cm)}function ni(e){var t=e.cm,r=t.display,n=t.doc
if(e.updatedDisplay&&fi(t,e.update),null==r.wheelStartX||null==e.scrollTop&&null==e.scrollLeft&&!e.scrollToPos||(r.wheelStartX=r.wheelStartY=null),null!=e.scrollTop&&jn(t,e.scrollTop,e.forceScroll),null!=e.scrollLeft&&Vn(t,e.scrollLeft,!0,!0),e.scrollToPos){var i=function(e,t,r,n){var i
null==n&&(n=0),e.options.lineWrapping||t!=r||(r="before"==t.sticky?ot(t.line,t.ch+1,"before"):t,t=t.ch?ot(t.line,"before"==t.sticky?t.ch-1:t.ch,"after"):t)
for(var o=0;o<5;o++){var a=!1,l=Zr(e,t),s=r&&r!=t?Zr(e,r):l,c=Pn(e,i={left:Math.min(l.left,s.left),top:Math.min(l.top,s.top)-n,right:Math.max(l.left,s.left),bottom:Math.max(l.bottom,s.bottom)+n}),u=e.doc.scrollTop,d=e.doc.scrollLeft
if(null!=c.scrollTop&&(Bn(e,c.scrollTop),Math.abs(e.doc.scrollTop-u)>1&&(a=!0)),null!=c.scrollLeft&&(Vn(e,c.scrollLeft),Math.abs(e.doc.scrollLeft-d)>1&&(a=!0)),!a)break}return i}(t,ft(n,e.scrollToPos.from),ft(n,e.scrollToPos.to),e.scrollToPos.margin)
!function(e,t){if(!we(e,"scrollCursorIntoView")){var r=e.display,n=r.sizer.getBoundingClientRect(),i=null,o=r.wrapper.ownerDocument
if(t.top+n.top<0?i=!0:t.bottom+n.top>(o.defaultView.innerHeight||o.documentElement.clientHeight)&&(i=!1),null!=i&&!g){var a=O("div","​",null,"position: absolute;\n                         top: "+(t.top-r.viewOffset-Mr(e.display))+"px;\n                         height: "+(t.bottom-t.top+Or(e)+r.barHeight)+"px;\n                         left: "+t.left+"px; width: "+Math.max(2,t.right-t.left)+"px;")
e.display.lineSpace.appendChild(a),a.scrollIntoView(i),e.display.lineSpace.removeChild(a)}}}(t,i)}var o=e.maybeHiddenMarkers,a=e.maybeUnhiddenMarkers
if(o)for(var l=0;l<o.length;++l)o[l].lines.length||be(o[l],"hide")
if(a)for(var s=0;s<a.length;++s)a[s].lines.length&&be(a[s],"unhide")
r.wrapper.offsetHeight&&(n.scrollTop=t.display.scroller.scrollTop),e.changeObjs&&be(t,"changes",t,e.changeObjs),e.update&&e.update.finish()}function ii(e,t){if(e.curOp)return t()
Zn(e)
try{return t()}finally{Qn(e)}}function oi(e,t){return function(){if(e.curOp)return t.apply(e,arguments)
Zn(e)
try{return t.apply(e,arguments)}finally{Qn(e)}}}function ai(e){return function(){if(this.curOp)return e.apply(this,arguments)
Zn(this)
try{return e.apply(this,arguments)}finally{Qn(this)}}}function li(e){return function(){var t=this.cm
if(!t||t.curOp)return e.apply(this,arguments)
Zn(t)
try{return e.apply(this,arguments)}finally{Qn(t)}}}function si(e,t){e.doc.highlightFrontier<e.display.viewTo&&e.state.highlight.set(t,j(ci,e))}function ci(e){var t=e.doc
if(!(t.highlightFrontier>=e.display.viewTo)){var r=+new Date+e.options.workTime,n=yt(e,t.highlightFrontier),i=[]
t.iter(n.line,Math.min(t.first+t.size,e.display.viewTo+500),function(o){if(n.line>=e.display.viewFrom){var a=o.styles,l=o.text.length>e.options.maxHighlightLength?_e(t.mode,n.state):null,s=mt(e,o,n,!0)
l&&(n.state=l),o.styles=s.styles
var c=o.styleClasses,u=s.classes
u?o.styleClasses=u:c&&(o.styleClasses=null)
for(var d=!a||a.length!=o.styles.length||c!=u&&(!c||!u||c.bgClass!=u.bgClass||c.textClass!=u.textClass),f=0;!d&&f<a.length;++f)d=a[f]!=o.styles[f]
d&&i.push(n.line),o.stateAfter=n.save(),n.nextLine()}else o.text.length<=e.options.maxHighlightLength&&bt(e,o.text,n),o.stateAfter=n.line%5==0?n.save():null,n.nextLine()
if(+new Date>r)return si(e,e.options.workDelay),!0}),t.highlightFrontier=n.line,t.modeFrontier=Math.max(t.modeFrontier,n.line),i.length&&ii(e,function(){for(var t=0;t<i.length;t++)vn(e,i[t],"text")})}}var ui=function(e,t,r){var n=e.display
this.viewport=t,this.visible=Wn(n,e.doc,t),this.editorIsHidden=!n.wrapper.offsetWidth,this.wrapperHeight=n.wrapper.clientHeight,this.wrapperWidth=n.wrapper.clientWidth,this.oldDisplayWidth=zr(e),this.force=r,this.dims=un(e),this.events=[]}
function di(e,t){var r=e.display,n=e.doc
if(t.editorIsHidden)return yn(e),!1
if(!t.force&&t.visible.from>=r.viewFrom&&t.visible.to<=r.viewTo&&(null==r.updateLineNumbers||r.updateLineNumbers>=r.viewTo)&&r.renderedView==r.view&&0==wn(e))return!1
vi(e)&&(yn(e),t.dims=un(e))
var i=n.first+n.size,o=Math.max(t.visible.from-e.options.viewportMargin,n.first),a=Math.min(i,t.visible.to+e.options.viewportMargin)
r.viewFrom<o&&o-r.viewFrom<20&&(o=Math.max(n.first,r.viewFrom)),r.viewTo>a&&r.viewTo-a<20&&(a=Math.min(i,r.viewTo)),Mt&&(o=Gt(e.doc,o),a=Ut(e.doc,a))
var l=o!=r.viewFrom||a!=r.viewTo||r.lastWrapHeight!=t.wrapperHeight||r.lastWrapWidth!=t.wrapperWidth
!function(e,t,r){var n=e.display
0==n.view.length||t>=n.viewTo||r<=n.viewFrom?(n.view=cr(e,t,r),n.viewFrom=t):(n.viewFrom>t?n.view=cr(e,t,n.viewFrom).concat(n.view):n.viewFrom<t&&(n.view=n.view.slice(gn(e,t))),n.viewFrom=t,n.viewTo<r?n.view=n.view.concat(cr(e,n.viewTo,r)):n.viewTo>r&&(n.view=n.view.slice(0,gn(e,r)))),n.viewTo=r}(e,o,a),r.viewOffset=$t(Ze(e.doc,r.viewFrom)),e.display.mover.style.top=r.viewOffset+"px"
var c=wn(e)
if(!l&&0==c&&!t.force&&r.renderedView==r.view&&(null==r.updateLineNumbers||r.updateLineNumbers>=r.viewTo))return!1
var u=function(e){if(e.hasFocus())return null
var t=W(I(e))
if(!t||!D(e.display.lineDiv,t))return null
var r={activeElt:t}
if(window.getSelection){var n=B(e).getSelection()
n.anchorNode&&n.extend&&D(e.display.lineDiv,n.anchorNode)&&(r.anchorNode=n.anchorNode,r.anchorOffset=n.anchorOffset,r.focusNode=n.focusNode,r.focusOffset=n.focusOffset)}return r}(e)
return c>4&&(r.lineDiv.style.display="none"),function(e,t,r){var n=e.display,i=e.options.lineNumbers,o=n.lineDiv,a=o.firstChild
function l(t){var r=t.nextSibling
return s&&b&&e.display.currentWheelTarget==t?t.style.display="none":t.parentNode.removeChild(t),r}for(var c=n.view,u=n.viewFrom,d=0;d<c.length;d++){var f=c[d]
if(f.hidden);else if(f.node&&f.node.parentNode==o){for(;a!=f.node;)a=l(a)
var h=i&&null!=t&&t<=u&&f.lineNumber
f.changes&&(U(f.changes,"gutter")>-1&&(h=!1),pr(e,f,u,r)),h&&(N(f.lineNumber),f.lineNumber.appendChild(document.createTextNode(it(e.options,u)))),a=f.node.nextSibling}else{var p=xr(e,f,u,r)
o.insertBefore(p,a)}u+=f.size}for(;a;)a=l(a)}(e,r.updateLineNumbers,t.dims),c>4&&(r.lineDiv.style.display=""),r.renderedView=r.view,function(e){if(e&&e.activeElt&&e.activeElt!=W(R(e.activeElt))&&(e.activeElt.focus(),!/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName)&&e.anchorNode&&D(document.body,e.anchorNode)&&D(document.body,e.focusNode))){var t=e.activeElt.ownerDocument,r=t.defaultView.getSelection(),n=t.createRange()
n.setEnd(e.anchorNode,e.anchorOffset),n.collapse(!1),r.removeAllRanges(),r.addRange(n),r.extend(e.focusNode,e.focusOffset)}}(u),N(r.cursorDiv),N(r.selectionDiv),r.gutters.style.height=r.sizer.style.minHeight=0,l&&(r.lastWrapHeight=t.wrapperHeight,r.lastWrapWidth=t.wrapperWidth,si(e,400)),r.updateLineNumbers=null,!0}function fi(e,t){for(var r=t.viewport,n=!0;;n=!1){if(n&&e.options.lineWrapping&&t.oldDisplayWidth!=zr(e))n&&(t.visible=Wn(e.display,e.doc,r))
else if(r&&null!=r.top&&(r={top:Math.min(e.doc.height+Nr(e.display)-Dr(e),r.top)}),t.visible=Wn(e.display,e.doc,r),t.visible.from>=e.display.viewFrom&&t.visible.to<=e.display.viewTo)break
if(!di(e,t))break
zn(e)
var i=Kn(e)
xn(e),qn(e,i),gi(e,i),t.force=!1}t.signal(e,"update",e),e.display.viewFrom==e.display.reportedViewFrom&&e.display.viewTo==e.display.reportedViewTo||(t.signal(e,"viewportChange",e,e.display.viewFrom,e.display.viewTo),e.display.reportedViewFrom=e.display.viewFrom,e.display.reportedViewTo=e.display.viewTo)}function hi(e,t){var r=new ui(e,t)
if(di(e,r)){zn(e),fi(e,r)
var n=Kn(e)
xn(e),qn(e,n),gi(e,n),r.finish()}}function pi(e){var t=e.gutters.offsetWidth
e.sizer.style.marginLeft=t+"px",fr(e,"gutterChanged",e)}function gi(e,t){e.display.sizer.style.minHeight=t.docHeight+"px",e.display.heightForcer.style.top=t.docHeight+"px",e.display.gutters.style.height=t.docHeight+e.display.barHeight+Or(e)+"px"}function mi(e){var t=e.display,r=t.view
if(t.alignWidgets||t.gutters.firstChild&&e.options.fixedGutter){for(var n=dn(t)-t.scroller.scrollLeft+e.doc.scrollLeft,i=t.gutters.offsetWidth,o=n+"px",a=0;a<r.length;a++)if(!r[a].hidden){e.options.fixedGutter&&(r[a].gutter&&(r[a].gutter.style.left=o),r[a].gutterBackground&&(r[a].gutterBackground.style.left=o))
var l=r[a].alignable
if(l)for(var s=0;s<l.length;s++)l[s].style.left=o}e.options.fixedGutter&&(t.gutters.style.left=n+i+"px")}}function vi(e){if(!e.options.lineNumbers)return!1
var t=e.doc,r=it(e.options,t.first+t.size-1),n=e.display
if(r.length!=n.lineNumChars){var i=n.measure.appendChild(O("div",[O("div",r)],"CodeMirror-linenumber CodeMirror-gutter-elt")),o=i.firstChild.offsetWidth,a=i.offsetWidth-o
return n.lineGutter.style.width="",n.lineNumInnerWidth=Math.max(o,n.lineGutter.offsetWidth-a)+1,n.lineNumWidth=n.lineNumInnerWidth+a,n.lineNumChars=n.lineNumInnerWidth?r.length:-1,n.lineGutter.style.width=n.lineNumWidth+"px",pi(e.display),!0}return!1}function yi(e,t){for(var r=[],n=!1,i=0;i<e.length;i++){var o=e[i],a=null
if("string"!=typeof o&&(a=o.style,o=o.className),"CodeMirror-linenumbers"==o){if(!t)continue
n=!0}r.push({className:o,style:a})}return t&&!n&&r.push({className:"CodeMirror-linenumbers",style:null}),r}function bi(e){var t=e.gutters,r=e.gutterSpecs
N(t),e.lineGutter=null
for(var n=0;n<r.length;++n){var i=r[n],o=i.className,a=i.style,l=t.appendChild(O("div",null,"CodeMirror-gutter "+o))
a&&(l.style.cssText=a),"CodeMirror-linenumbers"==o&&(e.lineGutter=l,l.style.width=(e.lineNumWidth||1)+"px")}t.style.display=r.length?"":"none",pi(e)}function wi(e){bi(e.display),mn(e),mi(e)}function xi(e,t,n,i){var o=this
this.input=n,o.scrollbarFiller=O("div",null,"CodeMirror-scrollbar-filler"),o.scrollbarFiller.setAttribute("cm-not-content","true"),o.gutterFiller=O("div",null,"CodeMirror-gutter-filler"),o.gutterFiller.setAttribute("cm-not-content","true"),o.lineDiv=z("div",null,"CodeMirror-code"),o.selectionDiv=O("div",null,null,"position: relative; z-index: 1"),o.cursorDiv=O("div",null,"CodeMirror-cursors"),o.measure=O("div",null,"CodeMirror-measure"),o.lineMeasure=O("div",null,"CodeMirror-measure"),o.lineSpace=z("div",[o.measure,o.lineMeasure,o.selectionDiv,o.cursorDiv,o.lineDiv],null,"position: relative; outline: none")
var c=z("div",[o.lineSpace],"CodeMirror-lines")
o.mover=O("div",[c],null,"position: relative"),o.sizer=O("div",[o.mover],"CodeMirror-sizer"),o.sizerWidth=null,o.heightForcer=O("div",null,null,"position: absolute; height: 50px; width: 1px;"),o.gutters=O("div",null,"CodeMirror-gutters"),o.lineGutter=null,o.scroller=O("div",[o.sizer,o.heightForcer,o.gutters],"CodeMirror-scroll"),o.scroller.setAttribute("tabIndex","-1"),o.wrapper=O("div",[o.scrollbarFiller,o.gutterFiller,o.scroller],"CodeMirror"),u&&105===d&&(o.wrapper.style.clipPath="inset(0px)"),o.wrapper.setAttribute("translate","no"),a&&l<8&&(o.gutters.style.zIndex=-1,o.scroller.style.paddingRight=0),s||r&&y||(o.scroller.draggable=!0),e&&(e.appendChild?e.appendChild(o.wrapper):e(o.wrapper)),o.viewFrom=o.viewTo=t.first,o.reportedViewFrom=o.reportedViewTo=t.first,o.view=[],o.renderedView=null,o.externalMeasured=null,o.viewOffset=0,o.lastWrapHeight=o.lastWrapWidth=0,o.updateLineNumbers=null,o.nativeBarWidth=o.barHeight=o.barWidth=0,o.scrollbarsClipped=!1,o.lineNumWidth=o.lineNumInnerWidth=o.lineNumChars=null,o.alignWidgets=!1,o.cachedCharWidth=o.cachedTextHeight=o.cachedPaddingH=null,o.maxLine=null,o.maxLineLength=0,o.maxLineChanged=!1,o.wheelDX=o.wheelDY=o.wheelStartX=o.wheelStartY=null,o.shift=!1,o.selForContextMenu=null,o.activeTouch=null,o.gutterSpecs=yi(i.gutters,i.lineNumbers),bi(o),n.init(o)}ui.prototype.signal=function(e,t){ke(e,t)&&this.events.push(arguments)},ui.prototype.finish=function(){for(var e=0;e<this.events.length;e++)be.apply(null,this.events[e])}
var ki=0,Ci=null
function Si(e){var t=e.wheelDeltaX,r=e.wheelDeltaY
return null==t&&e.detail&&e.axis==e.HORIZONTAL_AXIS&&(t=e.detail),null==r&&e.detail&&e.axis==e.VERTICAL_AXIS?r=e.detail:null==r&&(r=e.wheelDelta),{x:t,y:r}}function Ti(e){var t=Si(e)
return t.x*=Ci,t.y*=Ci,t}function Li(e,t){u&&102==d&&(null==e.display.chromeScrollHack?e.display.sizer.style.pointerEvents="none":clearTimeout(e.display.chromeScrollHack),e.display.chromeScrollHack=setTimeout(function(){e.display.chromeScrollHack=null,e.display.sizer.style.pointerEvents=""},100))
var n=Si(t),i=n.x,o=n.y,a=Ci
0===t.deltaMode&&(i=t.deltaX,o=t.deltaY,a=1)
var l=e.display,c=l.scroller,h=c.scrollWidth>c.clientWidth,p=c.scrollHeight>c.clientHeight
if(i&&h||o&&p){if(o&&b&&s)e:for(var g=t.target,m=l.view;g!=c;g=g.parentNode)for(var v=0;v<m.length;v++)if(m[v].node==g){e.display.currentWheelTarget=g
break e}if(i&&!r&&!f&&null!=a)return o&&p&&Bn(e,Math.max(0,c.scrollTop+o*a)),Vn(e,Math.max(0,c.scrollLeft+i*a)),(!o||o&&p)&&Se(t),void(l.wheelStartX=null)
if(o&&null!=a){var y=o*a,w=e.doc.scrollTop,x=w+l.wrapper.clientHeight
y<0?w=Math.max(0,w+y-50):x=Math.min(e.doc.height,x+y+50),hi(e,{top:w,bottom:x})}ki<20&&0!==t.deltaMode&&(null==l.wheelStartX?(l.wheelStartX=c.scrollLeft,l.wheelStartY=c.scrollTop,l.wheelDX=i,l.wheelDY=o,setTimeout(function(){if(null!=l.wheelStartX){var e=c.scrollLeft-l.wheelStartX,t=c.scrollTop-l.wheelStartY,r=t&&l.wheelDY&&t/l.wheelDY||e&&l.wheelDX&&e/l.wheelDX
l.wheelStartX=l.wheelStartY=null,r&&(Ci=(Ci*ki+r)/(ki+1),++ki)}},200)):(l.wheelDX+=i,l.wheelDY+=o))}}a?Ci=-.53:r?Ci=15:u?Ci=-.7:h&&(Ci=-1/3)
var Mi=function(e,t){this.ranges=e,this.primIndex=t}
Mi.prototype.primary=function(){return this.ranges[this.primIndex]},Mi.prototype.equals=function(e){if(e==this)return!0
if(e.primIndex!=this.primIndex||e.ranges.length!=this.ranges.length)return!1
for(var t=0;t<this.ranges.length;t++){var r=this.ranges[t],n=e.ranges[t]
if(!lt(r.anchor,n.anchor)||!lt(r.head,n.head))return!1}return!0},Mi.prototype.deepCopy=function(){for(var e=[],t=0;t<this.ranges.length;t++)e[t]=new Ni(st(this.ranges[t].anchor),st(this.ranges[t].head))
return new Mi(e,this.primIndex)},Mi.prototype.somethingSelected=function(){for(var e=0;e<this.ranges.length;e++)if(!this.ranges[e].empty())return!0
return!1},Mi.prototype.contains=function(e,t){t||(t=e)
for(var r=0;r<this.ranges.length;r++){var n=this.ranges[r]
if(at(t,n.from())>=0&&at(e,n.to())<=0)return r}return-1}
var Ni=function(e,t){this.anchor=e,this.head=t}
function Ai(e,t,r){var n=e&&e.options.selectionsMayTouch,i=t[r]
t.sort(function(e,t){return at(e.from(),t.from())}),r=U(t,i)
for(var o=1;o<t.length;o++){var a=t[o],l=t[o-1],s=at(l.to(),a.from())
if(n&&!a.empty()?s>0:s>=0){var c=ut(l.from(),a.from()),u=ct(l.to(),a.to()),d=l.empty()?a.from()==a.head:l.from()==l.head
o<=r&&--r,t.splice(--o,2,new Ni(d?u:c,d?c:u))}}return new Mi(t,r)}function Oi(e,t){return new Mi([new Ni(e,t||e)],0)}function zi(e){return e.text?ot(e.from.line+e.text.length-1,J(e.text).length+(1==e.text.length?e.from.ch:0)):e.to}function Di(e,t){if(at(e,t.from)<0)return e
if(at(e,t.to)<=0)return zi(t)
var r=e.line+t.text.length-(t.to.line-t.from.line)-1,n=e.ch
return e.line==t.to.line&&(n+=zi(t).ch-t.to.ch),ot(r,n)}function Wi(e,t){for(var r=[],n=0;n<e.sel.ranges.length;n++){var i=e.sel.ranges[n]
r.push(new Ni(Di(i.anchor,t),Di(i.head,t)))}return Ai(e.cm,r,e.sel.primIndex)}function Pi(e,t,r){return e.line==t.line?ot(r.line,e.ch-t.ch+r.ch):ot(r.line+(e.line-t.line),e.ch)}function Hi(e){e.doc.mode=Ge(e.options,e.doc.modeOption),Ei(e)}function Ei(e){e.doc.iter(function(e){e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null)}),e.doc.modeFrontier=e.doc.highlightFrontier=e.doc.first,si(e,100),e.state.modeGen++,e.curOp&&mn(e)}function Fi(e,t){return 0==t.from.ch&&0==t.to.ch&&""==J(t.text)&&(!e.cm||e.cm.options.wholeLineUpdateBefore)}function Ii(e,t,r,n){function i(e){return r?r[e]:null}function o(e,r,i){!function(e,t,r,n){e.text=t,e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null),null!=e.order&&(e.order=null),Wt(e),Pt(e,r)
var i=n?n(e):1
i!=e.height&&et(e,i)}(e,r,i,n),fr(e,"change",e,t)}function a(e,t){for(var r=[],o=e;o<t;++o)r.push(new Zt(c[o],i(o),n))
return r}var l=t.from,s=t.to,c=t.text,u=Ze(e,l.line),d=Ze(e,s.line),f=J(c),h=i(c.length-1),p=s.line-l.line
if(t.full)e.insert(0,a(0,c.length)),e.remove(c.length,e.size-c.length)
else if(Fi(e,t)){var g=a(0,c.length-1)
o(d,d.text,h),p&&e.remove(l.line,p),g.length&&e.insert(l.line,g)}else if(u==d)if(1==c.length)o(u,u.text.slice(0,l.ch)+f+u.text.slice(s.ch),h)
else{var m=a(1,c.length-1)
m.push(new Zt(f+u.text.slice(s.ch),h,n)),o(u,u.text.slice(0,l.ch)+c[0],i(0)),e.insert(l.line+1,m)}else if(1==c.length)o(u,u.text.slice(0,l.ch)+c[0]+d.text.slice(s.ch),i(0)),e.remove(l.line+1,p)
else{o(u,u.text.slice(0,l.ch)+c[0],i(0)),o(d,f+d.text.slice(s.ch),h)
var v=a(1,c.length-1)
p>1&&e.remove(l.line+1,p-1),e.insert(l.line+1,v)}fr(e,"change",e,t)}function Ri(e,t,r){!function e(n,i,o){if(n.linked)for(var a=0;a<n.linked.length;++a){var l=n.linked[a]
if(l.doc!=i){var s=o&&l.sharedHist
r&&!s||(t(l.doc,s),e(l.doc,n,s))}}}(e,null,!0)}function Bi(e,t){if(t.cm)throw new Error("This document is already in use.")
e.doc=t,t.cm=e,hn(e),Hi(e),ji(e),e.options.direction=t.direction,e.options.lineWrapping||Yt(e),e.options.mode=t.modeOption,mn(e)}function ji(e){("rtl"==e.doc.direction?P:M)(e.display.lineDiv,"CodeMirror-rtl")}function Vi(e){this.done=[],this.undone=[],this.undoDepth=e?e.undoDepth:1/0,this.lastModTime=this.lastSelTime=0,this.lastOp=this.lastSelOp=null,this.lastOrigin=this.lastSelOrigin=null,this.generation=this.maxGeneration=e?e.maxGeneration:1}function Ki(e,t){var r={from:st(t.from),to:zi(t),text:Qe(e,t.from,t.to)}
return _i(e,r,t.from.line,t.to.line+1),Ri(e,function(e){return _i(e,r,t.from.line,t.to.line+1)},!0),r}function Gi(e){for(;e.length&&J(e).ranges;)e.pop()}function Ui(e,t,r,n){var i=e.history
i.undone.length=0
var o,a,l=+new Date
if((i.lastOp==n||i.lastOrigin==t.origin&&t.origin&&("+"==t.origin.charAt(0)&&i.lastModTime>l-(e.cm?e.cm.options.historyEventDelay:500)||"*"==t.origin.charAt(0)))&&(o=function(e,t){return t?(Gi(e.done),J(e.done)):e.done.length&&!J(e.done).ranges?J(e.done):e.done.length>1&&!e.done[e.done.length-2].ranges?(e.done.pop(),J(e.done)):void 0}(i,i.lastOp==n)))a=J(o.changes),0==at(t.from,t.to)&&0==at(t.from,a.to)?a.to=zi(t):o.changes.push(Ki(e,t))
else{var s=J(i.done)
for(s&&s.ranges||qi(e.sel,i.done),o={changes:[Ki(e,t)],generation:i.generation},i.done.push(o);i.done.length>i.undoDepth;)i.done.shift(),i.done[0].ranges||i.done.shift()}i.done.push(r),i.generation=++i.maxGeneration,i.lastModTime=i.lastSelTime=l,i.lastOp=i.lastSelOp=n,i.lastOrigin=i.lastSelOrigin=t.origin,a||be(e,"historyAdded")}function qi(e,t){var r=J(t)
r&&r.ranges&&r.equals(e)||t.push(e)}function _i(e,t,r,n){var i=t["spans_"+e.id],o=0
e.iter(Math.max(e.first,r),Math.min(e.first+e.size,n),function(r){r.markedSpans&&((i||(i=t["spans_"+e.id]={}))[o]=r.markedSpans),++o})}function $i(e){if(!e)return null
for(var t,r=0;r<e.length;++r)e[r].marker.explicitlyCleared?t||(t=e.slice(0,r)):t&&t.push(e[r])
return t?t.length?t:null:e}function Xi(e,t){var r=function(e,t){var r=t["spans_"+e.id]
if(!r)return null
for(var n=[],i=0;i<t.text.length;++i)n.push($i(r[i]))
return n}(e,t),n=zt(e,t)
if(!r)return n
if(!n)return r
for(var i=0;i<r.length;++i){var o=r[i],a=n[i]
if(o&&a)e:for(var l=0;l<a.length;++l){for(var s=a[l],c=0;c<o.length;++c)if(o[c].marker==s.marker)continue e
o.push(s)}else a&&(r[i]=a)}return r}function Yi(e,t,r){for(var n=[],i=0;i<e.length;++i){var o=e[i]
if(o.ranges)n.push(r?Mi.prototype.deepCopy.call(o):o)
else{var a=o.changes,l=[]
n.push({changes:l})
for(var s=0;s<a.length;++s){var c=a[s],u=void 0
if(l.push({from:c.from,to:c.to,text:c.text}),t)for(var d in c)(u=d.match(/^spans_(\d+)$/))&&U(t,Number(u[1]))>-1&&(J(l)[d]=c[d],delete c[d])}}}return n}function Zi(e,t,r,n){if(n){var i=e.anchor
if(r){var o=at(t,i)<0
o!=at(r,i)<0?(i=t,t=r):o!=at(t,r)<0&&(t=r)}return new Ni(i,t)}return new Ni(r||t,t)}function Qi(e,t,r,n,i){null==i&&(i=e.cm&&(e.cm.display.shift||e.extend)),no(e,new Mi([Zi(e.sel.primary(),t,r,i)],0),n)}function Ji(e,t,r){for(var n=[],i=e.cm&&(e.cm.display.shift||e.extend),o=0;o<e.sel.ranges.length;o++)n[o]=Zi(e.sel.ranges[o],t[o],null,i)
no(e,Ai(e.cm,n,e.sel.primIndex),r)}function eo(e,t,r,n){var i=e.sel.ranges.slice(0)
i[t]=r,no(e,Ai(e.cm,i,e.sel.primIndex),n)}function to(e,t,r,n){no(e,Oi(t,r),n)}function ro(e,t,r){var n=e.history.done,i=J(n)
i&&i.ranges?(n[n.length-1]=t,io(e,t,r)):no(e,t,r)}function no(e,t,r){io(e,t,r),function(e,t,r,n){var i=e.history,o=n&&n.origin
r==i.lastSelOp||o&&i.lastSelOrigin==o&&(i.lastModTime==i.lastSelTime&&i.lastOrigin==o||function(e,t,r,n){var i=t.charAt(0)
return"*"==i||"+"==i&&r.ranges.length==n.ranges.length&&r.somethingSelected()==n.somethingSelected()&&new Date-e.history.lastSelTime<=(e.cm?e.cm.options.historyEventDelay:500)}(e,o,J(i.done),t))?i.done[i.done.length-1]=t:qi(t,i.done),i.lastSelTime=+new Date,i.lastSelOrigin=o,i.lastSelOp=r,n&&!1!==n.clearRedo&&Gi(i.undone)}(e,e.sel,e.cm?e.cm.curOp.id:NaN,r)}function io(e,t,r){(ke(e,"beforeSelectionChange")||e.cm&&ke(e.cm,"beforeSelectionChange"))&&(t=function(e,t,r){var n={ranges:t.ranges,update:function(t){this.ranges=[]
for(var r=0;r<t.length;r++)this.ranges[r]=new Ni(ft(e,t[r].anchor),ft(e,t[r].head))},origin:r&&r.origin}
return be(e,"beforeSelectionChange",e,n),e.cm&&be(e.cm,"beforeSelectionChange",e.cm,n),n.ranges!=t.ranges?Ai(e.cm,n.ranges,n.ranges.length-1):t}(e,t,r))
var n=r&&r.bias||(at(t.primary().head,e.sel.primary().head)<0?-1:1)
oo(e,lo(e,t,n,!0)),r&&!1===r.scroll||!e.cm||"nocursor"==e.cm.getOption("readOnly")||En(e.cm)}function oo(e,t){t.equals(e.sel)||(e.sel=t,e.cm&&(e.cm.curOp.updateInput=1,e.cm.curOp.selectionChanged=!0,xe(e.cm)),fr(e,"cursorActivity",e))}function ao(e){oo(e,lo(e,e.sel,null,!1))}function lo(e,t,r,n){for(var i,o=0;o<t.ranges.length;o++){var a=t.ranges[o],l=t.ranges.length==e.sel.ranges.length&&e.sel.ranges[o],s=co(e,a.anchor,l&&l.anchor,r,n),c=a.head==a.anchor?s:co(e,a.head,l&&l.head,r,n);(i||s!=a.anchor||c!=a.head)&&(i||(i=t.ranges.slice(0,o)),i[o]=new Ni(s,c))}return i?Ai(e.cm,i,t.primIndex):t}function so(e,t,r,n,i){var o=Ze(e,t.line)
if(o.markedSpans)for(var a=0;a<o.markedSpans.length;++a){var l=o.markedSpans[a],s=l.marker,c="selectLeft"in s?!s.selectLeft:s.inclusiveLeft,u="selectRight"in s?!s.selectRight:s.inclusiveRight
if((null==l.from||(c?l.from<=t.ch:l.from<t.ch))&&(null==l.to||(u?l.to>=t.ch:l.to>t.ch))){if(i&&(be(s,"beforeCursorEnter"),s.explicitlyCleared)){if(o.markedSpans){--a
continue}break}if(!s.atomic)continue
if(r){var d=s.find(n<0?1:-1),f=void 0
if((n<0?u:c)&&(d=uo(e,d,-n,d&&d.line==t.line?o:null)),d&&d.line==t.line&&(f=at(d,r))&&(n<0?f<0:f>0))return so(e,d,t,n,i)}var h=s.find(n<0?-1:1)
return(n<0?c:u)&&(h=uo(e,h,n,h.line==t.line?o:null)),h?so(e,h,t,n,i):null}}return t}function co(e,t,r,n,i){var o=n||1
return so(e,t,r,o,i)||!i&&so(e,t,r,o,!0)||so(e,t,r,-o,i)||!i&&so(e,t,r,-o,!0)||(e.cantEdit=!0,ot(e.first,0))}function uo(e,t,r,n){return r<0&&0==t.ch?t.line>e.first?ft(e,ot(t.line-1)):null:r>0&&t.ch==(n||Ze(e,t.line)).text.length?t.line<e.first+e.size-1?ot(t.line+1,0):null:new ot(t.line,t.ch+r)}function fo(e){e.setSelection(ot(e.firstLine(),0),ot(e.lastLine()),_)}function ho(e,t,r){var n={canceled:!1,from:t.from,to:t.to,text:t.text,origin:t.origin,cancel:function(){return n.canceled=!0}}
return r&&(n.update=function(t,r,i,o){t&&(n.from=ft(e,t)),r&&(n.to=ft(e,r)),i&&(n.text=i),void 0!==o&&(n.origin=o)}),be(e,"beforeChange",e,n),e.cm&&be(e.cm,"beforeChange",e.cm,n),n.canceled?(e.cm&&(e.cm.curOp.updateInput=2),null):{from:n.from,to:n.to,text:n.text,origin:n.origin}}function po(e,t,r){if(e.cm){if(!e.cm.curOp)return oi(e.cm,po)(e,t,r)
if(e.cm.state.suppressEdits)return}if(!(ke(e,"beforeChange")||e.cm&&ke(e.cm,"beforeChange"))||(t=ho(e,t,!0))){var n=Lt&&!r&&function(e,t,r){var n=null
if(e.iter(t.line,r.line+1,function(e){if(e.markedSpans)for(var t=0;t<e.markedSpans.length;++t){var r=e.markedSpans[t].marker
!r.readOnly||n&&-1!=U(n,r)||(n||(n=[])).push(r)}}),!n)return null
for(var i=[{from:t,to:r}],o=0;o<n.length;++o)for(var a=n[o],l=a.find(0),s=0;s<i.length;++s){var c=i[s]
if(!(at(c.to,l.from)<0||at(c.from,l.to)>0)){var u=[s,1],d=at(c.from,l.from),f=at(c.to,l.to);(d<0||!a.inclusiveLeft&&!d)&&u.push({from:c.from,to:l.from}),(f>0||!a.inclusiveRight&&!f)&&u.push({from:l.to,to:c.to}),i.splice.apply(i,u),s+=u.length-3}}return i}(e,t.from,t.to)
if(n)for(var i=n.length-1;i>=0;--i)go(e,{from:n[i].from,to:n[i].to,text:i?[""]:t.text,origin:t.origin})
else go(e,t)}}function go(e,t){if(1!=t.text.length||""!=t.text[0]||0!=at(t.from,t.to)){var r=Wi(e,t)
Ui(e,t,r,e.cm?e.cm.curOp.id:NaN),yo(e,t,r,zt(e,t))
var n=[]
Ri(e,function(e,r){r||-1!=U(n,e.history)||(ko(e.history,t),n.push(e.history)),yo(e,t,null,zt(e,t))})}}function mo(e,t,r){var n=e.cm&&e.cm.state.suppressEdits
if(!n||r){for(var i,o=e.history,a=e.sel,l="undo"==t?o.done:o.undone,s="undo"==t?o.undone:o.done,c=0;c<l.length&&(i=l[c],r?!i.ranges||i.equals(e.sel):i.ranges);c++);if(c!=l.length){for(o.lastOrigin=o.lastSelOrigin=null;;){if(!(i=l.pop()).ranges){if(n)return void l.push(i)
break}if(qi(i,s),r&&!i.equals(e.sel))return void no(e,i,{clearRedo:!1})
a=i}var u=[]
qi(a,s),s.push({changes:u,generation:o.generation}),o.generation=i.generation||++o.maxGeneration
for(var d=ke(e,"beforeChange")||e.cm&&ke(e.cm,"beforeChange"),f=function(r){var n=i.changes[r]
if(n.origin=t,d&&!ho(e,n,!1))return l.length=0,{}
u.push(Ki(e,n))
var o=r?Wi(e,n):J(l)
yo(e,n,o,Xi(e,n)),!r&&e.cm&&e.cm.scrollIntoView({from:n.from,to:zi(n)})
var a=[]
Ri(e,function(e,t){t||-1!=U(a,e.history)||(ko(e.history,n),a.push(e.history)),yo(e,n,null,Xi(e,n))})},h=i.changes.length-1;h>=0;--h){var p=f(h)
if(p)return p.v}}}}function vo(e,t){if(0!=t&&(e.first+=t,e.sel=new Mi(ee(e.sel.ranges,function(e){return new Ni(ot(e.anchor.line+t,e.anchor.ch),ot(e.head.line+t,e.head.ch))}),e.sel.primIndex),e.cm)){mn(e.cm,e.first,e.first-t,t)
for(var r=e.cm.display,n=r.viewFrom;n<r.viewTo;n++)vn(e.cm,n,"gutter")}}function yo(e,t,r,n){if(e.cm&&!e.cm.curOp)return oi(e.cm,yo)(e,t,r,n)
if(t.to.line<e.first)vo(e,t.text.length-1-(t.to.line-t.from.line))
else if(!(t.from.line>e.lastLine())){if(t.from.line<e.first){var i=t.text.length-1-(e.first-t.from.line)
vo(e,i),t={from:ot(e.first,0),to:ot(t.to.line+i,t.to.ch),text:[J(t.text)],origin:t.origin}}var o=e.lastLine()
t.to.line>o&&(t={from:t.from,to:ot(o,Ze(e,o).text.length),text:[t.text[0]],origin:t.origin}),t.removed=Qe(e,t.from,t.to),r||(r=Wi(e,t)),e.cm?function(e,t,r){var n=e.doc,i=e.display,o=t.from,a=t.to,l=!1,s=o.line
e.options.lineWrapping||(s=tt(Kt(Ze(n,o.line))),n.iter(s,a.line+1,function(e){if(e==i.maxLine)return l=!0,!0})),n.sel.contains(t.from,t.to)>-1&&xe(e),Ii(n,t,r,fn(e)),e.options.lineWrapping||(n.iter(s,o.line+t.text.length,function(e){var t=Xt(e)
t>i.maxLineLength&&(i.maxLine=e,i.maxLineLength=t,i.maxLineChanged=!0,l=!1)}),l&&(e.curOp.updateMaxLine=!0)),function(e,t){if(e.modeFrontier=Math.min(e.modeFrontier,t),!(e.highlightFrontier<t-10)){for(var r=e.first,n=t-1;n>r;n--){var i=Ze(e,n).stateAfter
if(i&&(!(i instanceof pt)||n+i.lookAhead<t)){r=n+1
break}}e.highlightFrontier=Math.min(e.highlightFrontier,r)}}(n,o.line),si(e,400)
var c=t.text.length-(a.line-o.line)-1
t.full?mn(e):o.line!=a.line||1!=t.text.length||Fi(e.doc,t)?mn(e,o.line,a.line+1,c):vn(e,o.line,"text")
var u=ke(e,"changes"),d=ke(e,"change")
if(d||u){var f={from:o,to:a,text:t.text,removed:t.removed,origin:t.origin}
d&&fr(e,"change",e,f),u&&(e.curOp.changeObjs||(e.curOp.changeObjs=[])).push(f)}e.display.selForContextMenu=null}(e.cm,t,n):Ii(e,t,n),io(e,r,_),e.cantEdit&&co(e,ot(e.firstLine(),0))&&(e.cantEdit=!1)}}function bo(e,t,r,n,i){var o
n||(n=r),at(n,r)<0&&(r=(o=[n,r])[0],n=o[1]),"string"==typeof t&&(t=e.splitLines(t)),po(e,{from:r,to:n,text:t,origin:i})}function wo(e,t,r,n){r<e.line?e.line+=n:t<e.line&&(e.line=t,e.ch=0)}function xo(e,t,r,n){for(var i=0;i<e.length;++i){var o=e[i],a=!0
if(o.ranges){o.copied||((o=e[i]=o.deepCopy()).copied=!0)
for(var l=0;l<o.ranges.length;l++)wo(o.ranges[l].anchor,t,r,n),wo(o.ranges[l].head,t,r,n)}else{for(var s=0;s<o.changes.length;++s){var c=o.changes[s]
if(r<c.from.line)c.from=ot(c.from.line+n,c.from.ch),c.to=ot(c.to.line+n,c.to.ch)
else if(t<=c.to.line){a=!1
break}}a||(e.splice(0,i+1),i=0)}}}function ko(e,t){var r=t.from.line,n=t.to.line,i=t.text.length-(n-r)-1
xo(e.done,r,n,i),xo(e.undone,r,n,i)}function Co(e,t,r,n){var i=t,o=t
return"number"==typeof t?o=Ze(e,dt(e,t)):i=tt(t),null==i?null:(n(o,i)&&e.cm&&vn(e.cm,i,r),o)}function So(e){this.lines=e,this.parent=null
for(var t=0,r=0;r<e.length;++r)e[r].parent=this,t+=e[r].height
this.height=t}function To(e){this.children=e
for(var t=0,r=0,n=0;n<e.length;++n){var i=e[n]
t+=i.chunkSize(),r+=i.height,i.parent=this}this.size=t,this.height=r,this.parent=null}Ni.prototype.from=function(){return ut(this.anchor,this.head)},Ni.prototype.to=function(){return ct(this.anchor,this.head)},Ni.prototype.empty=function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch},So.prototype={chunkSize:function(){return this.lines.length},removeInner:function(e,t){for(var r=e,n=e+t;r<n;++r){var i=this.lines[r]
this.height-=i.height,Qt(i),fr(i,"delete")}this.lines.splice(e,t)},collapse:function(e){e.push.apply(e,this.lines)},insertInner:function(e,t,r){this.height+=r,this.lines=this.lines.slice(0,e).concat(t).concat(this.lines.slice(e))
for(var n=0;n<t.length;++n)t[n].parent=this},iterN:function(e,t,r){for(var n=e+t;e<n;++e)if(r(this.lines[e]))return!0}},To.prototype={chunkSize:function(){return this.size},removeInner:function(e,t){this.size-=t
for(var r=0;r<this.children.length;++r){var n=this.children[r],i=n.chunkSize()
if(e<i){var o=Math.min(t,i-e),a=n.height
if(n.removeInner(e,o),this.height-=a-n.height,i==o&&(this.children.splice(r--,1),n.parent=null),0==(t-=o))break
e=0}else e-=i}if(this.size-t<25&&(this.children.length>1||!(this.children[0]instanceof So))){var l=[]
this.collapse(l),this.children=[new So(l)],this.children[0].parent=this}},collapse:function(e){for(var t=0;t<this.children.length;++t)this.children[t].collapse(e)},insertInner:function(e,t,r){this.size+=t.length,this.height+=r
for(var n=0;n<this.children.length;++n){var i=this.children[n],o=i.chunkSize()
if(e<=o){if(i.insertInner(e,t,r),i.lines&&i.lines.length>50){for(var a=i.lines.length%25+25,l=a;l<i.lines.length;){var s=new So(i.lines.slice(l,l+=25))
i.height-=s.height,this.children.splice(++n,0,s),s.parent=this}i.lines=i.lines.slice(0,a),this.maybeSpill()}break}e-=o}},maybeSpill:function(){if(!(this.children.length<=10)){var e=this
do{var t=new To(e.children.splice(e.children.length-5,5))
if(e.parent){e.size-=t.size,e.height-=t.height
var r=U(e.parent.children,e)
e.parent.children.splice(r+1,0,t)}else{var n=new To(e.children)
n.parent=e,e.children=[n,t],e=n}t.parent=e.parent}while(e.children.length>10)
e.parent.maybeSpill()}},iterN:function(e,t,r){for(var n=0;n<this.children.length;++n){var i=this.children[n],o=i.chunkSize()
if(e<o){var a=Math.min(t,o-e)
if(i.iterN(e,a,r))return!0
if(0==(t-=a))break
e=0}else e-=o}}}
var Lo=function(e,t,r){if(r)for(var n in r)r.hasOwnProperty(n)&&(this[n]=r[n])
this.doc=e,this.node=t}
function Mo(e,t,r){$t(t)<(e.curOp&&e.curOp.scrollTop||e.doc.scrollTop)&&Hn(e,r)}Lo.prototype.clear=function(){var e=this.doc.cm,t=this.line.widgets,r=this.line,n=tt(r)
if(null!=n&&t){for(var i=0;i<t.length;++i)t[i]==this&&t.splice(i--,1)
t.length||(r.widgets=null)
var o=Tr(this)
et(r,Math.max(0,r.height-o)),e&&(ii(e,function(){Mo(e,r,-o),vn(e,n,"widget")}),fr(e,"lineWidgetCleared",e,this,n))}},Lo.prototype.changed=function(){var e=this,t=this.height,r=this.doc.cm,n=this.line
this.height=null
var i=Tr(this)-t
i&&(qt(this.doc,n)||et(n,n.height+i),r&&ii(r,function(){r.curOp.forceUpdate=!0,Mo(r,n,i),fr(r,"lineWidgetChanged",r,e,tt(n))}))},Ce(Lo)
var No=0,Ao=function(e,t){this.lines=[],this.type=t,this.doc=e,this.id=++No}
function Oo(e,t,r,n,i){if(n&&n.shared)return function(e,t,r,n,i){(n=V(n)).shared=!1
var o=[Oo(e,t,r,n,i)],a=o[0],l=n.widgetNode
return Ri(e,function(e){l&&(n.widgetNode=l.cloneNode(!0)),o.push(Oo(e,ft(e,t),ft(e,r),n,i))
for(var s=0;s<e.linked.length;++s)if(e.linked[s].isParent)return
a=J(o)}),new zo(o,a)}(e,t,r,n,i)
if(e.cm&&!e.cm.curOp)return oi(e.cm,Oo)(e,t,r,n,i)
var o=new Ao(e,i),a=at(t,r)
if(n&&V(n,o,!1),a>0||0==a&&!1!==o.clearWhenEmpty)return o
if(o.replacedWith&&(o.collapsed=!0,o.widgetNode=z("span",[o.replacedWith],"CodeMirror-widget"),n.handleMouseEvents||o.widgetNode.setAttribute("cm-ignore-events","true"),n.insertLeft&&(o.widgetNode.insertLeft=!0)),o.collapsed){if(Vt(e,t.line,t,r,o)||t.line!=r.line&&Vt(e,r.line,t,r,o))throw new Error("Inserting collapsed marker partially overlapping an existing one")
Mt=!0}o.addToHistory&&Ui(e,{from:t,to:r,origin:"markText"},e.sel,NaN)
var l,s=t.line,c=e.cm
if(e.iter(s,r.line+1,function(n){c&&o.collapsed&&!c.options.lineWrapping&&Kt(n)==c.display.maxLine&&(l=!0),o.collapsed&&s!=t.line&&et(n,0),function(e,t,r){var n=r&&window.WeakSet&&(r.markedSpans||(r.markedSpans=new WeakSet))
n&&e.markedSpans&&n.has(e.markedSpans)?e.markedSpans.push(t):(e.markedSpans=e.markedSpans?e.markedSpans.concat([t]):[t],n&&n.add(e.markedSpans)),t.marker.attachLine(e)}(n,new Nt(o,s==t.line?t.ch:null,s==r.line?r.ch:null),e.cm&&e.cm.curOp),++s}),o.collapsed&&e.iter(t.line,r.line+1,function(t){qt(e,t)&&et(t,0)}),o.clearOnEnter&&me(o,"beforeCursorEnter",function(){return o.clear()}),o.readOnly&&(Lt=!0,(e.history.done.length||e.history.undone.length)&&e.clearHistory()),o.collapsed&&(o.id=++No,o.atomic=!0),c){if(l&&(c.curOp.updateMaxLine=!0),o.collapsed)mn(c,t.line,r.line+1)
else if(o.className||o.startStyle||o.endStyle||o.css||o.attributes||o.title)for(var u=t.line;u<=r.line;u++)vn(c,u,"text")
o.atomic&&ao(c.doc),fr(c,"markerAdded",c,o)}return o}Ao.prototype.clear=function(){if(!this.explicitlyCleared){var e=this.doc.cm,t=e&&!e.curOp
if(t&&Zn(e),ke(this,"clear")){var r=this.find()
r&&fr(this,"clear",r.from,r.to)}for(var n=null,i=null,o=0;o<this.lines.length;++o){var a=this.lines[o],l=At(a.markedSpans,this)
e&&!this.collapsed?vn(e,tt(a),"text"):e&&(null!=l.to&&(i=tt(a)),null!=l.from&&(n=tt(a))),a.markedSpans=Ot(a.markedSpans,l),null==l.from&&this.collapsed&&!qt(this.doc,a)&&e&&et(a,sn(e.display))}if(e&&this.collapsed&&!e.options.lineWrapping)for(var s=0;s<this.lines.length;++s){var c=Kt(this.lines[s]),u=Xt(c)
u>e.display.maxLineLength&&(e.display.maxLine=c,e.display.maxLineLength=u,e.display.maxLineChanged=!0)}null!=n&&e&&this.collapsed&&mn(e,n,i+1),this.lines.length=0,this.explicitlyCleared=!0,this.atomic&&this.doc.cantEdit&&(this.doc.cantEdit=!1,e&&ao(e.doc)),e&&fr(e,"markerCleared",e,this,n,i),t&&Qn(e),this.parent&&this.parent.clear()}},Ao.prototype.find=function(e,t){var r,n
null==e&&"bookmark"==this.type&&(e=1)
for(var i=0;i<this.lines.length;++i){var o=this.lines[i],a=At(o.markedSpans,this)
if(null!=a.from&&(r=ot(t?o:tt(o),a.from),-1==e))return r
if(null!=a.to&&(n=ot(t?o:tt(o),a.to),1==e))return n}return r&&{from:r,to:n}},Ao.prototype.changed=function(){var e=this,t=this.find(-1,!0),r=this,n=this.doc.cm
t&&n&&ii(n,function(){var i=t.line,o=tt(t.line),a=Hr(n,o)
if(a&&(Vr(a),n.curOp.selectionChanged=n.curOp.forceUpdate=!0),n.curOp.updateMaxLine=!0,!qt(r.doc,i)&&null!=r.height){var l=r.height
r.height=null
var s=Tr(r)-l
s&&et(i,i.height+s)}fr(n,"markerChanged",n,e)})},Ao.prototype.attachLine=function(e){if(!this.lines.length&&this.doc.cm){var t=this.doc.cm.curOp
t.maybeHiddenMarkers&&-1!=U(t.maybeHiddenMarkers,this)||(t.maybeUnhiddenMarkers||(t.maybeUnhiddenMarkers=[])).push(this)}this.lines.push(e)},Ao.prototype.detachLine=function(e){if(this.lines.splice(U(this.lines,e),1),!this.lines.length&&this.doc.cm){var t=this.doc.cm.curOp;(t.maybeHiddenMarkers||(t.maybeHiddenMarkers=[])).push(this)}},Ce(Ao)
var zo=function(e,t){this.markers=e,this.primary=t
for(var r=0;r<e.length;++r)e[r].parent=this}
function Do(e){return e.findMarks(ot(e.first,0),e.clipPos(ot(e.lastLine())),function(e){return e.parent})}function Wo(e){for(var t=function(t){var r=e[t],n=[r.primary.doc]
Ri(r.primary.doc,function(e){return n.push(e)})
for(var i=0;i<r.markers.length;i++){var o=r.markers[i];-1==U(n,o.doc)&&(o.parent=null,r.markers.splice(i--,1))}},r=0;r<e.length;r++)t(r)}zo.prototype.clear=function(){if(!this.explicitlyCleared){this.explicitlyCleared=!0
for(var e=0;e<this.markers.length;++e)this.markers[e].clear()
fr(this,"clear")}},zo.prototype.find=function(e,t){return this.primary.find(e,t)},Ce(zo)
var Po=0,Ho=function(e,t,r,n,i){if(!(this instanceof Ho))return new Ho(e,t,r,n,i)
null==r&&(r=0),To.call(this,[new So([new Zt("",null)])]),this.first=r,this.scrollTop=this.scrollLeft=0,this.cantEdit=!1,this.cleanGeneration=1,this.modeFrontier=this.highlightFrontier=r
var o=ot(r,0)
this.sel=Oi(o),this.history=new Vi(null),this.id=++Po,this.modeOption=t,this.lineSep=n,this.direction="rtl"==i?"rtl":"ltr",this.extend=!1,"string"==typeof e&&(e=this.splitLines(e)),Ii(this,{from:o,to:o,text:e}),no(this,Oi(o),_)}
Ho.prototype=re(To.prototype,{constructor:Ho,iter:function(e,t,r){r?this.iterN(e-this.first,t-e,r):this.iterN(this.first,this.first+this.size,e)},insert:function(e,t){for(var r=0,n=0;n<t.length;++n)r+=t[n].height
this.insertInner(e-this.first,t,r)},remove:function(e,t){this.removeInner(e-this.first,t)},getValue:function(e){var t=Je(this,this.first,this.first+this.size)
return!1===e?t:t.join(e||this.lineSeparator())},setValue:li(function(e){var t=ot(this.first,0),r=this.first+this.size-1
po(this,{from:t,to:ot(r,Ze(this,r).text.length),text:this.splitLines(e),origin:"setValue",full:!0},!0),this.cm&&Fn(this.cm,0,0),no(this,Oi(t),_)}),replaceRange:function(e,t,r,n){bo(this,e,t=ft(this,t),r=r?ft(this,r):t,n)},getRange:function(e,t,r){var n=Qe(this,ft(this,e),ft(this,t))
return!1===r?n:""===r?n.join(""):n.join(r||this.lineSeparator())},getLine:function(e){var t=this.getLineHandle(e)
return t&&t.text},getLineHandle:function(e){if(nt(this,e))return Ze(this,e)},getLineNumber:function(e){return tt(e)},getLineHandleVisualStart:function(e){return"number"==typeof e&&(e=Ze(this,e)),Kt(e)},lineCount:function(){return this.size},firstLine:function(){return this.first},lastLine:function(){return this.first+this.size-1},clipPos:function(e){return ft(this,e)},getCursor:function(e){var t=this.sel.primary()
return null==e||"head"==e?t.head:"anchor"==e?t.anchor:"end"==e||"to"==e||!1===e?t.to():t.from()},listSelections:function(){return this.sel.ranges},somethingSelected:function(){return this.sel.somethingSelected()},setCursor:li(function(e,t,r){to(this,ft(this,"number"==typeof e?ot(e,t||0):e),null,r)}),setSelection:li(function(e,t,r){to(this,ft(this,e),ft(this,t||e),r)}),extendSelection:li(function(e,t,r){Qi(this,ft(this,e),t&&ft(this,t),r)}),extendSelections:li(function(e,t){Ji(this,ht(this,e),t)}),extendSelectionsBy:li(function(e,t){Ji(this,ht(this,ee(this.sel.ranges,e)),t)}),setSelections:li(function(e,t,r){if(e.length){for(var n=[],i=0;i<e.length;i++)n[i]=new Ni(ft(this,e[i].anchor),ft(this,e[i].head||e[i].anchor))
null==t&&(t=Math.min(e.length-1,this.sel.primIndex)),no(this,Ai(this.cm,n,t),r)}}),addSelection:li(function(e,t,r){var n=this.sel.ranges.slice(0)
n.push(new Ni(ft(this,e),ft(this,t||e))),no(this,Ai(this.cm,n,n.length-1),r)}),getSelection:function(e){for(var t,r=this.sel.ranges,n=0;n<r.length;n++){var i=Qe(this,r[n].from(),r[n].to())
t=t?t.concat(i):i}return!1===e?t:t.join(e||this.lineSeparator())},getSelections:function(e){for(var t=[],r=this.sel.ranges,n=0;n<r.length;n++){var i=Qe(this,r[n].from(),r[n].to())
!1!==e&&(i=i.join(e||this.lineSeparator())),t[n]=i}return t},replaceSelection:function(e,t,r){for(var n=[],i=0;i<this.sel.ranges.length;i++)n[i]=e
this.replaceSelections(n,t,r||"+input")},replaceSelections:li(function(e,t,r){for(var n=[],i=this.sel,o=0;o<i.ranges.length;o++){var a=i.ranges[o]
n[o]={from:a.from(),to:a.to(),text:this.splitLines(e[o]),origin:r}}for(var l=t&&"end"!=t&&function(e,t,r){for(var n=[],i=ot(e.first,0),o=i,a=0;a<t.length;a++){var l=t[a],s=Pi(l.from,i,o),c=Pi(zi(l),i,o)
if(i=l.to,o=c,"around"==r){var u=e.sel.ranges[a],d=at(u.head,u.anchor)<0
n[a]=new Ni(d?c:s,d?s:c)}else n[a]=new Ni(s,s)}return new Mi(n,e.sel.primIndex)}(this,n,t),s=n.length-1;s>=0;s--)po(this,n[s])
l?ro(this,l):this.cm&&En(this.cm)}),undo:li(function(){mo(this,"undo")}),redo:li(function(){mo(this,"redo")}),undoSelection:li(function(){mo(this,"undo",!0)}),redoSelection:li(function(){mo(this,"redo",!0)}),setExtending:function(e){this.extend=e},getExtending:function(){return this.extend},historySize:function(){for(var e=this.history,t=0,r=0,n=0;n<e.done.length;n++)e.done[n].ranges||++t
for(var i=0;i<e.undone.length;i++)e.undone[i].ranges||++r
return{undo:t,redo:r}},clearHistory:function(){var e=this
this.history=new Vi(this.history),Ri(this,function(t){return t.history=e.history},!0)},markClean:function(){this.cleanGeneration=this.changeGeneration(!0)},changeGeneration:function(e){return e&&(this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null),this.history.generation},isClean:function(e){return this.history.generation==(e||this.cleanGeneration)},getHistory:function(){return{done:Yi(this.history.done),undone:Yi(this.history.undone)}},setHistory:function(e){var t=this.history=new Vi(this.history)
t.done=Yi(e.done.slice(0),null,!0),t.undone=Yi(e.undone.slice(0),null,!0)},setGutterMarker:li(function(e,t,r){return Co(this,e,"gutter",function(e){var n=e.gutterMarkers||(e.gutterMarkers={})
return n[t]=r,!r&&ae(n)&&(e.gutterMarkers=null),!0})}),clearGutter:li(function(e){var t=this
this.iter(function(r){r.gutterMarkers&&r.gutterMarkers[e]&&Co(t,r,"gutter",function(){return r.gutterMarkers[e]=null,ae(r.gutterMarkers)&&(r.gutterMarkers=null),!0})})}),lineInfo:function(e){var t
if("number"==typeof e){if(!nt(this,e))return null
if(t=e,!(e=Ze(this,e)))return null}else if(null==(t=tt(e)))return null
return{line:t,handle:e,text:e.text,gutterMarkers:e.gutterMarkers,textClass:e.textClass,bgClass:e.bgClass,wrapClass:e.wrapClass,widgets:e.widgets}},addLineClass:li(function(e,t,r){return Co(this,e,"gutter"==t?"gutter":"class",function(e){var n="text"==t?"textClass":"background"==t?"bgClass":"gutter"==t?"gutterClass":"wrapClass"
if(e[n]){if(T(r).test(e[n]))return!1
e[n]+=" "+r}else e[n]=r
return!0})}),removeLineClass:li(function(e,t,r){return Co(this,e,"gutter"==t?"gutter":"class",function(e){var n="text"==t?"textClass":"background"==t?"bgClass":"gutter"==t?"gutterClass":"wrapClass",i=e[n]
if(!i)return!1
if(null==r)e[n]=null
else{var o=i.match(T(r))
if(!o)return!1
var a=o.index+o[0].length
e[n]=i.slice(0,o.index)+(o.index&&a!=i.length?" ":"")+i.slice(a)||null}return!0})}),addLineWidget:li(function(e,t,r){return function(e,t,r,n){var i=new Lo(e,r,n),o=e.cm
return o&&i.noHScroll&&(o.display.alignWidgets=!0),Co(e,t,"widget",function(t){var r=t.widgets||(t.widgets=[])
if(null==i.insertAt?r.push(i):r.splice(Math.min(r.length,Math.max(0,i.insertAt)),0,i),i.line=t,o&&!qt(e,t)){var n=$t(t)<e.scrollTop
et(t,t.height+Tr(i)),n&&Hn(o,i.height),o.curOp.forceUpdate=!0}return!0}),o&&fr(o,"lineWidgetAdded",o,i,"number"==typeof t?t:tt(t)),i}(this,e,t,r)}),removeLineWidget:function(e){e.clear()},markText:function(e,t,r){return Oo(this,ft(this,e),ft(this,t),r,r&&r.type||"range")},setBookmark:function(e,t){var r={replacedWith:t&&(null==t.nodeType?t.widget:t),insertLeft:t&&t.insertLeft,clearWhenEmpty:!1,shared:t&&t.shared,handleMouseEvents:t&&t.handleMouseEvents}
return Oo(this,e=ft(this,e),e,r,"bookmark")},findMarksAt:function(e){var t=[],r=Ze(this,(e=ft(this,e)).line).markedSpans
if(r)for(var n=0;n<r.length;++n){var i=r[n];(null==i.from||i.from<=e.ch)&&(null==i.to||i.to>=e.ch)&&t.push(i.marker.parent||i.marker)}return t},findMarks:function(e,t,r){e=ft(this,e),t=ft(this,t)
var n=[],i=e.line
return this.iter(e.line,t.line+1,function(o){var a=o.markedSpans
if(a)for(var l=0;l<a.length;l++){var s=a[l]
null!=s.to&&i==e.line&&e.ch>=s.to||null==s.from&&i!=e.line||null!=s.from&&i==t.line&&s.from>=t.ch||r&&!r(s.marker)||n.push(s.marker.parent||s.marker)}++i}),n},getAllMarks:function(){var e=[]
return this.iter(function(t){var r=t.markedSpans
if(r)for(var n=0;n<r.length;++n)null!=r[n].from&&e.push(r[n].marker)}),e},posFromIndex:function(e){var t,r=this.first,n=this.lineSeparator().length
return this.iter(function(i){var o=i.text.length+n
if(o>e)return t=e,!0
e-=o,++r}),ft(this,ot(r,t))},indexFromPos:function(e){var t=(e=ft(this,e)).ch
if(e.line<this.first||e.ch<0)return 0
var r=this.lineSeparator().length
return this.iter(this.first,e.line,function(e){t+=e.text.length+r}),t},copy:function(e){var t=new Ho(Je(this,this.first,this.first+this.size),this.modeOption,this.first,this.lineSep,this.direction)
return t.scrollTop=this.scrollTop,t.scrollLeft=this.scrollLeft,t.sel=this.sel,t.extend=!1,e&&(t.history.undoDepth=this.history.undoDepth,t.setHistory(this.getHistory())),t},linkedDoc:function(e){e||(e={})
var t=this.first,r=this.first+this.size
null!=e.from&&e.from>t&&(t=e.from),null!=e.to&&e.to<r&&(r=e.to)
var n=new Ho(Je(this,t,r),e.mode||this.modeOption,t,this.lineSep,this.direction)
return e.sharedHist&&(n.history=this.history),(this.linked||(this.linked=[])).push({doc:n,sharedHist:e.sharedHist}),n.linked=[{doc:this,isParent:!0,sharedHist:e.sharedHist}],function(e,t){for(var r=0;r<t.length;r++){var n=t[r],i=n.find(),o=e.clipPos(i.from),a=e.clipPos(i.to)
if(at(o,a)){var l=Oo(e,o,a,n.primary,n.primary.type)
n.markers.push(l),l.parent=n}}}(n,Do(this)),n},unlinkDoc:function(e){if(e instanceof Oa&&(e=e.doc),this.linked)for(var t=0;t<this.linked.length;++t)if(this.linked[t].doc==e){this.linked.splice(t,1),e.unlinkDoc(this),Wo(Do(this))
break}if(e.history==this.history){var r=[e.id]
Ri(e,function(e){return r.push(e.id)},!0),e.history=new Vi(null),e.history.done=Yi(this.history.done,r),e.history.undone=Yi(this.history.undone,r)}},iterLinkedDocs:function(e){Ri(this,e)},getMode:function(){return this.mode},getEditor:function(){return this.cm},splitLines:function(e){return this.lineSep?e.split(this.lineSep):Ee(e)},lineSeparator:function(){return this.lineSep||"\n"},setDirection:li(function(e){var t
"rtl"!=e&&(e="ltr"),e!=this.direction&&(this.direction=e,this.iter(function(e){return e.order=null}),this.cm&&ii(t=this.cm,function(){ji(t),mn(t)}))})}),Ho.prototype.eachLine=Ho.prototype.iter
var Eo=0
function Fo(e){var t=this
if(Io(t),!we(t,e)&&!Lr(t.display,e)){Se(e),a&&(Eo=+new Date)
var r=pn(t,e,!0),n=e.dataTransfer.files
if(r&&!t.isReadOnly())if(n&&n.length&&window.FileReader&&window.File)for(var i=n.length,o=Array(i),l=0,s=function(){++l==i&&oi(t,function(){var e={from:r=ft(t.doc,r),to:r,text:t.doc.splitLines(o.filter(function(e){return null!=e}).join(t.doc.lineSeparator())),origin:"paste"}
po(t.doc,e),ro(t.doc,Oi(ft(t.doc,r),ft(t.doc,zi(e))))})()},c=function(e,r){if(t.options.allowDropFileTypes&&-1==U(t.options.allowDropFileTypes,e.type))s()
else{var n=new FileReader
n.onerror=function(){return s()},n.onload=function(){var e=n.result;/[\x00-\x08\x0e-\x1f]{2}/.test(e)||(o[r]=e),s()},n.readAsText(e)}},u=0;u<n.length;u++)c(n[u],u)
else{if(t.state.draggingText&&t.doc.sel.contains(r)>-1)return t.state.draggingText(e),void setTimeout(function(){return t.display.input.focus()},20)
try{var d=e.dataTransfer.getData("Text")
if(d){var f
if(t.state.draggingText&&!t.state.draggingText.copy&&(f=t.listSelections()),io(t.doc,Oi(r,r)),f)for(var h=0;h<f.length;++h)bo(t.doc,"",f[h].anchor,f[h].head,"drag")
t.replaceSelection(d,"around","paste"),t.display.input.focus()}}catch(e){}}}}function Io(e){e.display.dragCursor&&(e.display.lineSpace.removeChild(e.display.dragCursor),e.display.dragCursor=null)}function Ro(e){if(document.getElementsByClassName){for(var t=document.getElementsByClassName("CodeMirror"),r=[],n=0;n<t.length;n++){var i=t[n].CodeMirror
i&&r.push(i)}r.length&&r[0].operation(function(){for(var t=0;t<r.length;t++)e(r[t])})}}var Bo=!1
function jo(e){var t=e.display
t.cachedCharWidth=t.cachedTextHeight=t.cachedPaddingH=null,t.scrollbarsClipped=!1,e.setSize()}for(var Vo={3:"Pause",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",106:"*",107:"=",109:"-",110:".",111:"/",145:"ScrollLock",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",224:"Mod",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"},Ko=0;Ko<10;Ko++)Vo[Ko+48]=Vo[Ko+96]=String(Ko)
for(var Go=65;Go<=90;Go++)Vo[Go]=String.fromCharCode(Go)
for(var Uo=1;Uo<=12;Uo++)Vo[Uo+111]=Vo[Uo+63235]="F"+Uo
var qo={}
function _o(e){var t,r,n,i,o=e.split(/-(?!$)/)
e=o[o.length-1]
for(var a=0;a<o.length-1;a++){var l=o[a]
if(/^(cmd|meta|m)$/i.test(l))i=!0
else if(/^a(lt)?$/i.test(l))t=!0
else if(/^(c|ctrl|control)$/i.test(l))r=!0
else{if(!/^s(hift)?$/i.test(l))throw new Error("Unrecognized modifier name: "+l)
n=!0}}return t&&(e="Alt-"+e),r&&(e="Ctrl-"+e),i&&(e="Cmd-"+e),n&&(e="Shift-"+e),e}function $o(e){var t={}
for(var r in e)if(e.hasOwnProperty(r)){var n=e[r]
if(/^(name|fallthrough|(de|at)tach)$/.test(r))continue
if("..."==n){delete e[r]
continue}for(var i=ee(r.split(" "),_o),o=0;o<i.length;o++){var a=void 0,l=void 0
o==i.length-1?(l=i.join(" "),a=n):(l=i.slice(0,o+1).join(" "),a="...")
var s=t[l]
if(s){if(s!=a)throw new Error("Inconsistent bindings for "+l)}else t[l]=a}delete e[r]}for(var c in t)e[c]=t[c]
return e}function Xo(e,t,r,n){var i=(t=Jo(t)).call?t.call(e,n):t[e]
if(!1===i)return"nothing"
if("..."===i)return"multi"
if(null!=i&&r(i))return"handled"
if(t.fallthrough){if("[object Array]"!=Object.prototype.toString.call(t.fallthrough))return Xo(e,t.fallthrough,r,n)
for(var o=0;o<t.fallthrough.length;o++){var a=Xo(e,t.fallthrough[o],r,n)
if(a)return a}}}function Yo(e){var t="string"==typeof e?e:Vo[e.keyCode]
return"Ctrl"==t||"Alt"==t||"Shift"==t||"Mod"==t}function Zo(e,t,r){var n=e
return t.altKey&&"Alt"!=n&&(e="Alt-"+e),(C?t.metaKey:t.ctrlKey)&&"Ctrl"!=n&&(e="Ctrl-"+e),(C?t.ctrlKey:t.metaKey)&&"Mod"!=n&&(e="Cmd-"+e),!r&&t.shiftKey&&"Shift"!=n&&(e="Shift-"+e),e}function Qo(e,t){if(f&&34==e.keyCode&&e.char)return!1
var r=Vo[e.keyCode]
return null!=r&&!e.altGraphKey&&(3==e.keyCode&&e.code&&(r=e.code),Zo(r,e,t))}function Jo(e){return"string"==typeof e?qo[e]:e}function ea(e,t){for(var r=e.doc.sel.ranges,n=[],i=0;i<r.length;i++){for(var o=t(r[i]);n.length&&at(o.from,J(n).to)<=0;){var a=n.pop()
if(at(a.from,o.from)<0){o.from=a.from
break}}n.push(o)}ii(e,function(){for(var t=n.length-1;t>=0;t--)bo(e.doc,"",n[t].from,n[t].to,"+delete")
En(e)})}function ta(e,t,r){var n=ce(e.text,t+r,r)
return n<0||n>e.text.length?null:n}function ra(e,t,r){var n=ta(e,t.ch,r)
return null==n?null:new ot(t.line,n,r<0?"after":"before")}function na(e,t,r,n,i){if(e){"rtl"==t.doc.direction&&(i=-i)
var o=pe(r,t.doc.direction)
if(o){var a,l=i<0?J(o):o[0],s=i<0==(1==l.level)?"after":"before"
if(l.level>0||"rtl"==t.doc.direction){var c=Er(t,r)
a=i<0?r.text.length-1:0
var u=Fr(t,c,a).top
a=ue(function(e){return Fr(t,c,e).top==u},i<0==(1==l.level)?l.from:l.to-1,a),"before"==s&&(a=ta(r,a,1))}else a=i<0?l.to:l.from
return new ot(n,a,s)}}return new ot(n,i<0?r.text.length:0,i<0?"before":"after")}qo.basic={Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharAfter",Backspace:"delCharBefore","Shift-Backspace":"delCharBefore",Tab:"defaultTab","Shift-Tab":"indentAuto",Enter:"newlineAndIndent",Insert:"toggleOverwrite",Esc:"singleSelection"},qo.pcDefault={"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Up":"goLineUp","Ctrl-Down":"goLineDown","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore","Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection","Alt-U":"redoSelection",fallthrough:"basic"},qo.emacsy={"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars","Ctrl-O":"openLine"},qo.macDefault={"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Home":"goDocStart","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineLeft","Cmd-Right":"goLineRight","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delWrappedLineLeft","Cmd-Delete":"delWrappedLineRight","Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection","Ctrl-Up":"goDocStart","Ctrl-Down":"goDocEnd",fallthrough:["basic","emacsy"]},qo.default=b?qo.macDefault:qo.pcDefault
var ia={selectAll:fo,singleSelection:function(e){return e.setSelection(e.getCursor("anchor"),e.getCursor("head"),_)},killLine:function(e){return ea(e,function(t){if(t.empty()){var r=Ze(e.doc,t.head.line).text.length
return t.head.ch==r&&t.head.line<e.lastLine()?{from:t.head,to:ot(t.head.line+1,0)}:{from:t.head,to:ot(t.head.line,r)}}return{from:t.from(),to:t.to()}})},deleteLine:function(e){return ea(e,function(t){return{from:ot(t.from().line,0),to:ft(e.doc,ot(t.to().line+1,0))}})},delLineLeft:function(e){return ea(e,function(e){return{from:ot(e.from().line,0),to:e.from()}})},delWrappedLineLeft:function(e){return ea(e,function(t){var r=e.charCoords(t.head,"div").top+5
return{from:e.coordsChar({left:0,top:r},"div"),to:t.from()}})},delWrappedLineRight:function(e){return ea(e,function(t){var r=e.charCoords(t.head,"div").top+5,n=e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:r},"div")
return{from:t.from(),to:n}})},undo:function(e){return e.undo()},redo:function(e){return e.redo()},undoSelection:function(e){return e.undoSelection()},redoSelection:function(e){return e.redoSelection()},goDocStart:function(e){return e.extendSelection(ot(e.firstLine(),0))},goDocEnd:function(e){return e.extendSelection(ot(e.lastLine()))},goLineStart:function(e){return e.extendSelectionsBy(function(t){return oa(e,t.head.line)},{origin:"+move",bias:1})},goLineStartSmart:function(e){return e.extendSelectionsBy(function(t){return aa(e,t.head)},{origin:"+move",bias:1})},goLineEnd:function(e){return e.extendSelectionsBy(function(t){return function(e,t){var r=Ze(e.doc,t),n=function(e){for(var t;t=Bt(e);)e=t.find(1,!0).line
return e}(r)
return n!=r&&(t=tt(n)),na(!0,e,r,t,-1)}(e,t.head.line)},{origin:"+move",bias:-1})},goLineRight:function(e){return e.extendSelectionsBy(function(t){var r=e.cursorCoords(t.head,"div").top+5
return e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:r},"div")},X)},goLineLeft:function(e){return e.extendSelectionsBy(function(t){var r=e.cursorCoords(t.head,"div").top+5
return e.coordsChar({left:0,top:r},"div")},X)},goLineLeftSmart:function(e){return e.extendSelectionsBy(function(t){var r=e.cursorCoords(t.head,"div").top+5,n=e.coordsChar({left:0,top:r},"div")
return n.ch<e.getLine(n.line).search(/\S/)?aa(e,t.head):n},X)},goLineUp:function(e){return e.moveV(-1,"line")},goLineDown:function(e){return e.moveV(1,"line")},goPageUp:function(e){return e.moveV(-1,"page")},goPageDown:function(e){return e.moveV(1,"page")},goCharLeft:function(e){return e.moveH(-1,"char")},goCharRight:function(e){return e.moveH(1,"char")},goColumnLeft:function(e){return e.moveH(-1,"column")},goColumnRight:function(e){return e.moveH(1,"column")},goWordLeft:function(e){return e.moveH(-1,"word")},goGroupRight:function(e){return e.moveH(1,"group")},goGroupLeft:function(e){return e.moveH(-1,"group")},goWordRight:function(e){return e.moveH(1,"word")},delCharBefore:function(e){return e.deleteH(-1,"codepoint")},delCharAfter:function(e){return e.deleteH(1,"char")},delWordBefore:function(e){return e.deleteH(-1,"word")},delWordAfter:function(e){return e.deleteH(1,"word")},delGroupBefore:function(e){return e.deleteH(-1,"group")},delGroupAfter:function(e){return e.deleteH(1,"group")},indentAuto:function(e){return e.indentSelection("smart")},indentMore:function(e){return e.indentSelection("add")},indentLess:function(e){return e.indentSelection("subtract")},insertTab:function(e){return e.replaceSelection("\t")},insertSoftTab:function(e){for(var t=[],r=e.listSelections(),n=e.options.tabSize,i=0;i<r.length;i++){var o=r[i].from(),a=K(e.getLine(o.line),o.ch,n)
t.push(Q(n-a%n))}e.replaceSelections(t)},defaultTab:function(e){e.somethingSelected()?e.indentSelection("add"):e.execCommand("insertTab")},transposeChars:function(e){return ii(e,function(){for(var t=e.listSelections(),r=[],n=0;n<t.length;n++)if(t[n].empty()){var i=t[n].head,o=Ze(e.doc,i.line).text
if(o)if(i.ch==o.length&&(i=new ot(i.line,i.ch-1)),i.ch>0)i=new ot(i.line,i.ch+1),e.replaceRange(o.charAt(i.ch-1)+o.charAt(i.ch-2),ot(i.line,i.ch-2),i,"+transpose")
else if(i.line>e.doc.first){var a=Ze(e.doc,i.line-1).text
a&&(i=new ot(i.line,1),e.replaceRange(o.charAt(0)+e.doc.lineSeparator()+a.charAt(a.length-1),ot(i.line-1,a.length-1),i,"+transpose"))}r.push(new Ni(i,i))}e.setSelections(r)})},newlineAndIndent:function(e){return ii(e,function(){for(var t=e.listSelections(),r=t.length-1;r>=0;r--)e.replaceRange(e.doc.lineSeparator(),t[r].anchor,t[r].head,"+input")
t=e.listSelections()
for(var n=0;n<t.length;n++)e.indentLine(t[n].from().line,null,!0)
En(e)})},openLine:function(e){return e.replaceSelection("\n","start")},toggleOverwrite:function(e){return e.toggleOverwrite()}}
function oa(e,t){var r=Ze(e.doc,t),n=Kt(r)
return n!=r&&(t=tt(n)),na(!0,e,n,t,1)}function aa(e,t){var r=oa(e,t.line),n=Ze(e.doc,r.line),i=pe(n,e.doc.direction)
if(!i||0==i[0].level){var o=Math.max(r.ch,n.text.search(/\S/)),a=t.line==r.line&&t.ch<=o&&t.ch
return ot(r.line,a?0:o,r.sticky)}return r}function la(e,t,r){if("string"==typeof t&&!(t=ia[t]))return!1
e.display.input.ensurePolled()
var n=e.display.shift,i=!1
try{e.isReadOnly()&&(e.state.suppressEdits=!0),r&&(e.display.shift=!1),i=t(e)!=q}finally{e.display.shift=n,e.state.suppressEdits=!1}return i}var sa=new G
function ca(e,t,r,n){var i=e.state.keySeq
if(i){if(Yo(t))return"handled"
if(/\'$/.test(t)?e.state.keySeq=null:sa.set(50,function(){e.state.keySeq==i&&(e.state.keySeq=null,e.display.input.reset())}),ua(e,i+" "+t,r,n))return!0}return ua(e,t,r,n)}function ua(e,t,r,n){var i=function(e,t,r){for(var n=0;n<e.state.keyMaps.length;n++){var i=Xo(t,e.state.keyMaps[n],r,e)
if(i)return i}return e.options.extraKeys&&Xo(t,e.options.extraKeys,r,e)||Xo(t,e.options.keyMap,r,e)}(e,t,n)
return"multi"==i&&(e.state.keySeq=t),"handled"==i&&fr(e,"keyHandled",e,t,r),"handled"!=i&&"multi"!=i||(Se(r),Ln(e)),!!i}function da(e,t){var r=Qo(t,!0)
return!!r&&(t.shiftKey&&!e.state.keySeq?ca(e,"Shift-"+r,t,function(t){return la(e,t,!0)})||ca(e,r,t,function(t){if("string"==typeof t?/^go[A-Z]/.test(t):t.motion)return la(e,t)}):ca(e,r,t,function(t){return la(e,t)}))}var fa=null
function ha(e){var t=this
if(!(e.target&&e.target!=t.display.input.getField()||(t.curOp.focus=W(I(t)),we(t,e)))){a&&l<11&&27==e.keyCode&&(e.returnValue=!1)
var n=e.keyCode
t.display.shift=16==n||e.shiftKey
var i=da(t,e)
f&&(fa=i?n:null,i||88!=n||Ie||!(b?e.metaKey:e.ctrlKey)||t.replaceSelection("",null,"cut")),r&&!b&&!i&&46==n&&e.shiftKey&&!e.ctrlKey&&document.execCommand&&document.execCommand("cut"),18!=n||/\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className)||function(e){var t=e.display.lineDiv
function r(e){18!=e.keyCode&&e.altKey||(M(t,"CodeMirror-crosshair"),ye(document,"keyup",r),ye(document,"mouseover",r))}P(t,"CodeMirror-crosshair"),me(document,"keyup",r),me(document,"mouseover",r)}(t)}}function pa(e){16==e.keyCode&&(this.doc.sel.shift=!1),we(this,e)}function ga(e){var t=this
if(!(e.target&&e.target!=t.display.input.getField()||Lr(t.display,e)||we(t,e)||e.ctrlKey&&!e.altKey||b&&e.metaKey)){var r=e.keyCode,n=e.charCode
if(f&&r==fa)return fa=null,void Se(e)
if(!f||e.which&&!(e.which<10)||!da(t,e)){var i=String.fromCharCode(null==n?r:n)
"\b"!=i&&(function(e,t,r){return ca(e,"'"+r+"'",t,function(t){return la(e,t,!0)})}(t,e,i)||t.display.input.onKeyPress(e))}}}var ma,va,ya=function(e,t,r){this.time=e,this.pos=t,this.button=r}
function ba(e){var t=this,r=t.display
if(!(we(t,e)||r.activeTouch&&r.input.supportsTouch()))if(r.input.ensurePolled(),r.shift=e.shiftKey,Lr(r,e))s||(r.scroller.draggable=!1,setTimeout(function(){return r.scroller.draggable=!0},100))
else if(!ka(t,e)){var n=pn(t,e),i=Ae(e),o=n?function(e,t){var r=+new Date
return va&&va.compare(r,e,t)?(ma=va=null,"triple"):ma&&ma.compare(r,e,t)?(va=new ya(r,e,t),ma=null,"double"):(ma=new ya(r,e,t),va=null,"single")}(n,i):"single"
B(t).focus(),1==i&&t.state.selectingText&&t.state.selectingText(e),n&&function(e,t,r,n,i){var o="Click"
return"double"==n?o="Double"+o:"triple"==n&&(o="Triple"+o),ca(e,Zo(o=(1==t?"Left":2==t?"Middle":"Right")+o,i),i,function(t){if("string"==typeof t&&(t=ia[t]),!t)return!1
var n=!1
try{e.isReadOnly()&&(e.state.suppressEdits=!0),n=t(e,r)!=q}finally{e.state.suppressEdits=!1}return n})}(t,i,n,o,e)||(1==i?n?function(e,t,r,n){a?setTimeout(j(Mn,e),0):e.curOp.focus=W(I(e))
var i,o=function(e,t,r){var n=e.getOption("configureMouse"),i=n?n(e,t,r):{}
if(null==i.unit){var o=w?r.shiftKey&&r.metaKey:r.altKey
i.unit=o?"rectangle":"single"==t?"char":"double"==t?"word":"line"}return(null==i.extend||e.doc.extend)&&(i.extend=e.doc.extend||r.shiftKey),null==i.addNew&&(i.addNew=b?r.metaKey:r.ctrlKey),null==i.moveOnDrag&&(i.moveOnDrag=!(b?r.altKey:r.ctrlKey)),i}(e,r,n),c=e.doc.sel
e.options.dragDrop&&De&&!e.isReadOnly()&&"single"==r&&(i=c.contains(t))>-1&&(at((i=c.ranges[i]).from(),t)<0||t.xRel>0)&&(at(i.to(),t)>0||t.xRel<0)?function(e,t,r,n){var i=e.display,o=!1,c=oi(e,function(t){s&&(i.scroller.draggable=!1),e.state.draggingText=!1,e.state.delayingBlurEvent&&(e.hasFocus()?e.state.delayingBlurEvent=!1:Nn(e)),ye(i.wrapper.ownerDocument,"mouseup",c),ye(i.wrapper.ownerDocument,"mousemove",u),ye(i.scroller,"dragstart",d),ye(i.scroller,"drop",c),o||(Se(t),n.addNew||Qi(e.doc,r,null,null,n.extend),s&&!h||a&&9==l?setTimeout(function(){i.wrapper.ownerDocument.body.focus({preventScroll:!0}),i.input.focus()},20):i.input.focus())}),u=function(e){o=o||Math.abs(t.clientX-e.clientX)+Math.abs(t.clientY-e.clientY)>=10},d=function(){return o=!0}
s&&(i.scroller.draggable=!0),e.state.draggingText=c,c.copy=!n.moveOnDrag,me(i.wrapper.ownerDocument,"mouseup",c),me(i.wrapper.ownerDocument,"mousemove",u),me(i.scroller,"dragstart",d),me(i.scroller,"drop",c),e.state.delayingBlurEvent=!0,setTimeout(function(){return i.input.focus()},20),i.scroller.dragDrop&&i.scroller.dragDrop()}(e,n,t,o):function(e,t,r,n){a&&Nn(e)
var i=e.display,o=e.doc
Se(t)
var l,s,c=o.sel,u=c.ranges
if(n.addNew&&!n.extend?(s=o.sel.contains(r),l=s>-1?u[s]:new Ni(r,r)):(l=o.sel.primary(),s=o.sel.primIndex),"rectangle"==n.unit)n.addNew||(l=new Ni(r,r)),r=pn(e,t,!0,!0),s=-1
else{var d=wa(e,r,n.unit)
l=n.extend?Zi(l,d.anchor,d.head,n.extend):d}n.addNew?-1==s?(s=u.length,no(o,Ai(e,u.concat([l]),s),{scroll:!1,origin:"*mouse"})):u.length>1&&u[s].empty()&&"char"==n.unit&&!n.extend?(no(o,Ai(e,u.slice(0,s).concat(u.slice(s+1)),0),{scroll:!1,origin:"*mouse"}),c=o.sel):eo(o,s,l,$):(s=0,no(o,new Mi([l],0),$),c=o.sel)
var f=r
function h(t){if(0!=at(f,t))if(f=t,"rectangle"==n.unit){for(var i=[],a=e.options.tabSize,u=K(Ze(o,r.line).text,r.ch,a),d=K(Ze(o,t.line).text,t.ch,a),h=Math.min(u,d),p=Math.max(u,d),g=Math.min(r.line,t.line),m=Math.min(e.lastLine(),Math.max(r.line,t.line));g<=m;g++){var v=Ze(o,g).text,y=Y(v,h,a)
h==p?i.push(new Ni(ot(g,y),ot(g,y))):v.length>y&&i.push(new Ni(ot(g,y),ot(g,Y(v,p,a))))}i.length||i.push(new Ni(r,r)),no(o,Ai(e,c.ranges.slice(0,s).concat(i),s),{origin:"*mouse",scroll:!1}),e.scrollIntoView(t)}else{var b,w=l,x=wa(e,t,n.unit),k=w.anchor
at(x.anchor,k)>0?(b=x.head,k=ut(w.from(),x.anchor)):(b=x.anchor,k=ct(w.to(),x.head))
var C=c.ranges.slice(0)
C[s]=function(e,t){var r=t.anchor,n=t.head,i=Ze(e.doc,r.line)
if(0==at(r,n)&&r.sticky==n.sticky)return t
var o=pe(i)
if(!o)return t
var a=fe(o,r.ch,r.sticky),l=o[a]
if(l.from!=r.ch&&l.to!=r.ch)return t
var s,c=a+(l.from==r.ch==(1!=l.level)?0:1)
if(0==c||c==o.length)return t
if(n.line!=r.line)s=(n.line-r.line)*("ltr"==e.doc.direction?1:-1)>0
else{var u=fe(o,n.ch,n.sticky),d=u-a||(n.ch-r.ch)*(1==l.level?-1:1)
s=u==c-1||u==c?d<0:d>0}var f=o[c+(s?-1:0)],h=s==(1==f.level),p=h?f.from:f.to,g=h?"after":"before"
return r.ch==p&&r.sticky==g?t:new Ni(new ot(r.line,p,g),n)}(e,new Ni(ft(o,k),b)),no(o,Ai(e,C,s),$)}}var p=i.wrapper.getBoundingClientRect(),g=0
function m(t){var r=++g,a=pn(e,t,!0,"rectangle"==n.unit)
if(a)if(0!=at(a,f)){e.curOp.focus=W(I(e)),h(a)
var l=Wn(i,o);(a.line>=l.to||a.line<l.from)&&setTimeout(oi(e,function(){g==r&&m(t)}),150)}else{var s=t.clientY<p.top?-20:t.clientY>p.bottom?20:0
s&&setTimeout(oi(e,function(){g==r&&(i.scroller.scrollTop+=s,m(t))}),50)}}function v(t){e.state.selectingText=!1,g=1/0,t&&(Se(t),i.input.focus()),ye(i.wrapper.ownerDocument,"mousemove",y),ye(i.wrapper.ownerDocument,"mouseup",b),o.history.lastSelOrigin=null}var y=oi(e,function(e){0!==e.buttons&&Ae(e)?m(e):v(e)}),b=oi(e,v)
e.state.selectingText=b,me(i.wrapper.ownerDocument,"mousemove",y),me(i.wrapper.ownerDocument,"mouseup",b)}(e,n,t,o)}(t,n,o,e):Ne(e)==r.scroller&&Se(e):2==i?(n&&Qi(t.doc,n),setTimeout(function(){return r.input.focus()},20)):3==i&&(S?t.display.input.onContextMenu(e):Nn(t)))}}function wa(e,t,r){if("char"==r)return new Ni(t,t)
if("word"==r)return e.findWordAt(t)
if("line"==r)return new Ni(ot(t.line,0),ft(e.doc,ot(t.line+1,0)))
var n=r(e,t)
return new Ni(n.from,n.to)}function xa(e,t,r,n){var i,o
if(t.touches)i=t.touches[0].clientX,o=t.touches[0].clientY
else try{i=t.clientX,o=t.clientY}catch(e){return!1}if(i>=Math.floor(e.display.gutters.getBoundingClientRect().right))return!1
n&&Se(t)
var a=e.display,l=a.lineDiv.getBoundingClientRect()
if(o>l.bottom||!ke(e,r))return Le(t)
o-=l.top-a.viewOffset
for(var s=0;s<e.display.gutterSpecs.length;++s){var c=a.gutters.childNodes[s]
if(c&&c.getBoundingClientRect().right>=i)return be(e,r,e,rt(e.doc,o),e.display.gutterSpecs[s].className,t),Le(t)}}function ka(e,t){return xa(e,t,"gutterClick",!0)}function Ca(e,t){Lr(e.display,t)||function(e,t){return!!ke(e,"gutterContextMenu")&&xa(e,t,"gutterContextMenu",!1)}(e,t)||we(e,t,"contextmenu")||S||e.display.input.onContextMenu(t)}function Sa(e){e.display.wrapper.className=e.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+e.options.theme.replace(/(^|\s)\s*/g," cm-s-"),Gr(e)}ya.prototype.compare=function(e,t,r){return this.time+400>e&&0==at(t,this.pos)&&r==this.button}
var Ta={toString:function(){return"CodeMirror.Init"}},La={},Ma={}
function Na(e,t,r){if(!t!=!(r&&r!=Ta)){var n=e.display.dragFunctions,i=t?me:ye
i(e.display.scroller,"dragstart",n.start),i(e.display.scroller,"dragenter",n.enter),i(e.display.scroller,"dragover",n.over),i(e.display.scroller,"dragleave",n.leave),i(e.display.scroller,"drop",n.drop)}}function Aa(e){e.options.lineWrapping?(P(e.display.wrapper,"CodeMirror-wrap"),e.display.sizer.style.minWidth="",e.display.sizerWidth=null):(M(e.display.wrapper,"CodeMirror-wrap"),Yt(e)),hn(e),mn(e),Gr(e),setTimeout(function(){return qn(e)},100)}function Oa(e,t){var r=this
if(!(this instanceof Oa))return new Oa(e,t)
this.options=t=t?V(t):{},V(La,t,!1)
var n=t.value
"string"==typeof n?n=new Ho(n,t.mode,null,t.lineSeparator,t.direction):t.mode&&(n.modeOption=t.mode),this.doc=n
var i=new Oa.inputStyles[t.inputStyle](this),o=this.display=new xi(e,n,i,t)
for(var c in o.wrapper.CodeMirror=this,Sa(this),t.lineWrapping&&(this.display.wrapper.className+=" CodeMirror-wrap"),Xn(this),this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:!1,delayingBlurEvent:!1,focused:!1,suppressEdits:!1,pasteIncoming:-1,cutIncoming:-1,selectingText:!1,draggingText:!1,highlight:new G,keySeq:null,specialChars:null},t.autofocus&&!y&&o.input.focus(),a&&l<11&&setTimeout(function(){return r.display.input.reset(!0)},20),function(e){var t=e.display
me(t.scroller,"mousedown",oi(e,ba)),me(t.scroller,"dblclick",a&&l<11?oi(e,function(t){if(!we(e,t)){var r=pn(e,t)
if(r&&!ka(e,t)&&!Lr(e.display,t)){Se(t)
var n=e.findWordAt(r)
Qi(e.doc,n.anchor,n.head)}}}):function(t){return we(e,t)||Se(t)}),me(t.scroller,"contextmenu",function(t){return Ca(e,t)}),me(t.input.getField(),"contextmenu",function(r){t.scroller.contains(r.target)||Ca(e,r)})
var r,n={end:0}
function i(){t.activeTouch&&(r=setTimeout(function(){return t.activeTouch=null},1e3),(n=t.activeTouch).end=+new Date)}function o(e,t){if(null==t.left)return!0
var r=t.left-e.left,n=t.top-e.top
return r*r+n*n>400}me(t.scroller,"touchstart",function(i){if(!we(e,i)&&!function(e){if(1!=e.touches.length)return!1
var t=e.touches[0]
return t.radiusX<=1&&t.radiusY<=1}(i)&&!ka(e,i)){t.input.ensurePolled(),clearTimeout(r)
var o=+new Date
t.activeTouch={start:o,moved:!1,prev:o-n.end<=300?n:null},1==i.touches.length&&(t.activeTouch.left=i.touches[0].pageX,t.activeTouch.top=i.touches[0].pageY)}}),me(t.scroller,"touchmove",function(){t.activeTouch&&(t.activeTouch.moved=!0)}),me(t.scroller,"touchend",function(r){var n=t.activeTouch
if(n&&!Lr(t,r)&&null!=n.left&&!n.moved&&new Date-n.start<300){var a,l=e.coordsChar(t.activeTouch,"page")
a=!n.prev||o(n,n.prev)?new Ni(l,l):!n.prev.prev||o(n,n.prev.prev)?e.findWordAt(l):new Ni(ot(l.line,0),ft(e.doc,ot(l.line+1,0))),e.setSelection(a.anchor,a.head),e.focus(),Se(r)}i()}),me(t.scroller,"touchcancel",i),me(t.scroller,"scroll",function(){t.scroller.clientHeight&&(Bn(e,t.scroller.scrollTop),Vn(e,t.scroller.scrollLeft,!0),be(e,"scroll",e))}),me(t.scroller,"mousewheel",function(t){return Li(e,t)}),me(t.scroller,"DOMMouseScroll",function(t){return Li(e,t)}),me(t.wrapper,"scroll",function(){return t.wrapper.scrollTop=t.wrapper.scrollLeft=0}),t.dragFunctions={enter:function(t){we(e,t)||Me(t)},over:function(t){we(e,t)||(function(e,t){var r=pn(e,t)
if(r){var n=document.createDocumentFragment()
Cn(e,r,n),e.display.dragCursor||(e.display.dragCursor=O("div",null,"CodeMirror-cursors CodeMirror-dragcursors"),e.display.lineSpace.insertBefore(e.display.dragCursor,e.display.cursorDiv)),A(e.display.dragCursor,n)}}(e,t),Me(t))},start:function(t){return function(e,t){if(a&&(!e.state.draggingText||+new Date-Eo<100))Me(t)
else if(!we(e,t)&&!Lr(e.display,t)&&(t.dataTransfer.setData("Text",e.getSelection()),t.dataTransfer.effectAllowed="copyMove",t.dataTransfer.setDragImage&&!h)){var r=O("img",null,null,"position: fixed; left: 0; top: 0;")
r.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",f&&(r.width=r.height=1,e.display.wrapper.appendChild(r),r._top=r.offsetTop),t.dataTransfer.setDragImage(r,0,0),f&&r.parentNode.removeChild(r)}}(e,t)},drop:oi(e,Fo),leave:function(t){we(e,t)||Io(e)}}
var s=t.input.getField()
me(s,"keyup",function(t){return pa.call(e,t)}),me(s,"keydown",oi(e,ha)),me(s,"keypress",oi(e,ga)),me(s,"focus",function(t){return An(e,t)}),me(s,"blur",function(t){return On(e,t)})}(this),function(){var e
Bo||(me(window,"resize",function(){null==e&&(e=setTimeout(function(){e=null,Ro(jo)},100))}),me(window,"blur",function(){return Ro(On)}),Bo=!0)}(),Zn(this),this.curOp.forceUpdate=!0,Bi(this,n),t.autofocus&&!y||this.hasFocus()?setTimeout(function(){r.hasFocus()&&!r.state.focused&&An(r)},20):On(this),Ma)Ma.hasOwnProperty(c)&&Ma[c](this,t[c],Ta)
vi(this),t.finishInit&&t.finishInit(this)
for(var u=0;u<za.length;++u)za[u](this)
Qn(this),s&&t.lineWrapping&&"optimizelegibility"==getComputedStyle(o.lineDiv).textRendering&&(o.lineDiv.style.textRendering="auto")}Oa.defaults=La,Oa.optionHandlers=Ma
var za=[]
function Da(e,t,r,n){var i,o=e.doc
null==r&&(r="add"),"smart"==r&&(o.mode.indent?i=yt(e,t).state:r="prev")
var a=e.options.tabSize,l=Ze(o,t),s=K(l.text,null,a)
l.stateAfter&&(l.stateAfter=null)
var c,u=l.text.match(/^\s*/)[0]
if(n||/\S/.test(l.text)){if("smart"==r&&((c=o.mode.indent(i,l.text.slice(u.length),l.text))==q||c>150)){if(!n)return
r="prev"}}else c=0,r="not"
"prev"==r?c=t>o.first?K(Ze(o,t-1).text,null,a):0:"add"==r?c=s+e.options.indentUnit:"subtract"==r?c=s-e.options.indentUnit:"number"==typeof r&&(c=s+r),c=Math.max(0,c)
var d="",f=0
if(e.options.indentWithTabs)for(var h=Math.floor(c/a);h;--h)f+=a,d+="\t"
if(f<c&&(d+=Q(c-f)),d!=u)return bo(o,d,ot(t,0),ot(t,u.length),"+input"),l.stateAfter=null,!0
for(var p=0;p<o.sel.ranges.length;p++){var g=o.sel.ranges[p]
if(g.head.line==t&&g.head.ch<u.length){var m=ot(t,u.length)
eo(o,p,new Ni(m,m))
break}}}Oa.defineInitHook=function(e){return za.push(e)}
var Wa=null
function Pa(e){Wa=e}function Ha(e,t,r,n,i){var o=e.doc
e.display.shift=!1,n||(n=o.sel)
var a=+new Date-200,l="paste"==i||e.state.pasteIncoming>a,s=Ee(t),c=null
if(l&&n.ranges.length>1)if(Wa&&Wa.text.join("\n")==t){if(n.ranges.length%Wa.text.length==0){c=[]
for(var u=0;u<Wa.text.length;u++)c.push(o.splitLines(Wa.text[u]))}}else s.length==n.ranges.length&&e.options.pasteLinesPerSelection&&(c=ee(s,function(e){return[e]}))
for(var d=e.curOp.updateInput,f=n.ranges.length-1;f>=0;f--){var h=n.ranges[f],p=h.from(),g=h.to()
h.empty()&&(r&&r>0?p=ot(p.line,p.ch-r):e.state.overwrite&&!l?g=ot(g.line,Math.min(Ze(o,g.line).text.length,g.ch+J(s).length)):l&&Wa&&Wa.lineWise&&Wa.text.join("\n")==s.join("\n")&&(p=g=ot(p.line,0)))
var m={from:p,to:g,text:c?c[f%c.length]:s,origin:i||(l?"paste":e.state.cutIncoming>a?"cut":"+input")}
po(e.doc,m),fr(e,"inputRead",e,m)}t&&!l&&Fa(e,t),En(e),e.curOp.updateInput<2&&(e.curOp.updateInput=d),e.curOp.typing=!0,e.state.pasteIncoming=e.state.cutIncoming=-1}function Ea(e,t){var r=e.clipboardData&&e.clipboardData.getData("Text")
if(r)return e.preventDefault(),t.isReadOnly()||t.options.disableInput||!t.hasFocus()||ii(t,function(){return Ha(t,r,0,null,"paste")}),!0}function Fa(e,t){if(e.options.electricChars&&e.options.smartIndent)for(var r=e.doc.sel,n=r.ranges.length-1;n>=0;n--){var i=r.ranges[n]
if(!(i.head.ch>100||n&&r.ranges[n-1].head.line==i.head.line)){var o=e.getModeAt(i.head),a=!1
if(o.electricChars){for(var l=0;l<o.electricChars.length;l++)if(t.indexOf(o.electricChars.charAt(l))>-1){a=Da(e,i.head.line,"smart")
break}}else o.electricInput&&o.electricInput.test(Ze(e.doc,i.head.line).text.slice(0,i.head.ch))&&(a=Da(e,i.head.line,"smart"))
a&&fr(e,"electricInput",e,i.head.line)}}}function Ia(e){for(var t=[],r=[],n=0;n<e.doc.sel.ranges.length;n++){var i=e.doc.sel.ranges[n].head.line,o={anchor:ot(i,0),head:ot(i+1,0)}
r.push(o),t.push(e.getRange(o.anchor,o.head))}return{text:t,ranges:r}}function Ra(e,t,r,n){e.setAttribute("autocorrect",r?"on":"off"),e.setAttribute("autocapitalize",n?"on":"off"),e.setAttribute("spellcheck",!!t)}function Ba(){var e=O("textarea",null,null,"position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none"),t=O("div",[e],null,"overflow: hidden; position: relative; width: 3px; height: 0px;")
return s?e.style.width="1000px":e.setAttribute("wrap","off"),m&&(e.style.border="1px solid black"),t}function ja(e,t,r,n,i){var o=t,a=r,l=Ze(e,t.line),s=i&&"rtl"==e.direction?-r:r
function c(o){var a,c
if("codepoint"==n){var u=l.text.charCodeAt(t.ch+(r>0?0:-1))
if(isNaN(u))a=null
else{var d=r>0?u>=55296&&u<56320:u>=56320&&u<57343
a=new ot(t.line,Math.max(0,Math.min(l.text.length,t.ch+r*(d?2:1))),-r)}}else a=i?function(e,t,r,n){var i=pe(t,e.doc.direction)
if(!i)return ra(t,r,n)
r.ch>=t.text.length?(r.ch=t.text.length,r.sticky="before"):r.ch<=0&&(r.ch=0,r.sticky="after")
var o=fe(i,r.ch,r.sticky),a=i[o]
if("ltr"==e.doc.direction&&a.level%2==0&&(n>0?a.to>r.ch:a.from<r.ch))return ra(t,r,n)
var l,s=function(e,r){return ta(t,e instanceof ot?e.ch:e,r)},c=function(r){return e.options.lineWrapping?(l=l||Er(e,t),rn(e,t,l,r)):{begin:0,end:t.text.length}},u=c("before"==r.sticky?s(r,-1):r.ch)
if("rtl"==e.doc.direction||1==a.level){var d=1==a.level==n<0,f=s(r,d?1:-1)
if(null!=f&&(d?f<=a.to&&f<=u.end:f>=a.from&&f>=u.begin)){var h=d?"before":"after"
return new ot(r.line,f,h)}}var p=function(e,t,n){for(var o=function(e,t){return t?new ot(r.line,s(e,1),"before"):new ot(r.line,e,"after")};e>=0&&e<i.length;e+=t){var a=i[e],l=t>0==(1!=a.level),c=l?n.begin:s(n.end,-1)
if(a.from<=c&&c<a.to)return o(c,l)
if(c=l?a.from:s(a.to,-1),n.begin<=c&&c<n.end)return o(c,l)}},g=p(o+n,n,u)
if(g)return g
var m=n>0?u.end:s(u.begin,-1)
return null==m||n>0&&m==t.text.length||!(g=p(n>0?0:i.length-1,n,c(m)))?null:g}(e.cm,l,t,r):ra(l,t,r)
if(null==a){if(o||(c=t.line+s)<e.first||c>=e.first+e.size||(t=new ot(c,t.ch,t.sticky),!(l=Ze(e,c))))return!1
t=na(i,e.cm,l,t.line,s)}else t=a
return!0}if("char"==n||"codepoint"==n)c()
else if("column"==n)c(!0)
else if("word"==n||"group"==n)for(var u=null,d="group"==n,f=e.cm&&e.cm.getHelper(t,"wordChars"),h=!0;!(r<0)||c(!h);h=!1){var p=l.text.charAt(t.ch)||"\n",g=oe(p,f)?"w":d&&"\n"==p?"n":!d||/\s/.test(p)?null:"p"
if(!d||h||g||(g="s"),u&&u!=g){r<0&&(r=1,c(),t.sticky="after")
break}if(g&&(u=g),r>0&&!c(!h))break}var m=co(e,t,o,a,!0)
return lt(o,m)&&(m.hitSide=!0),m}function Va(e,t,r,n){var i,o,a=e.doc,l=t.left
if("page"==n){var s=Math.min(e.display.wrapper.clientHeight,B(e).innerHeight||a(e).documentElement.clientHeight),c=Math.max(s-.5*sn(e.display),3)
i=(r>0?t.bottom:t.top)+r*c}else"line"==n&&(i=r>0?t.bottom+3:t.top-3)
for(;(o=en(e,l,i)).outside;){if(r<0?i<=0:i>=a.height){o.hitSide=!0
break}i+=5*r}return o}var Ka=function(e){this.cm=e,this.lastAnchorNode=this.lastAnchorOffset=this.lastFocusNode=this.lastFocusOffset=null,this.polling=new G,this.composing=null,this.gracePeriod=!1,this.readDOMTimeout=null}
function Ga(e,t){var r=Hr(e,t.line)
if(!r||r.hidden)return null
var n=Ze(e.doc,t.line),i=Wr(r,n,t.line),o=pe(n,e.doc.direction),a="left"
o&&(a=fe(o,t.ch)%2?"right":"left")
var l=Br(i.map,t.ch,a)
return l.offset="right"==l.collapse?l.end:l.start,l}function Ua(e,t){return t&&(e.bad=!0),e}function qa(e,t,r){var n
if(t==e.display.lineDiv){if(!(n=e.display.lineDiv.childNodes[r]))return Ua(e.clipPos(ot(e.display.viewTo-1)),!0)
t=null,r=0}else for(n=t;;n=n.parentNode){if(!n||n==e.display.lineDiv)return null
if(n.parentNode&&n.parentNode==e.display.lineDiv)break}for(var i=0;i<e.display.view.length;i++){var o=e.display.view[i]
if(o.node==n)return _a(o,t,r)}}function _a(e,t,r){var n=e.text.firstChild,i=!1
if(!t||!D(n,t))return Ua(ot(tt(e.line),0),!0)
if(t==n&&(i=!0,t=n.childNodes[r],r=0,!t)){var o=e.rest?J(e.rest):e.line
return Ua(ot(tt(o),o.text.length),i)}var a=3==t.nodeType?t:null,l=t
for(a||1!=t.childNodes.length||3!=t.firstChild.nodeType||(a=t.firstChild,r&&(r=a.nodeValue.length));l.parentNode!=n;)l=l.parentNode
var s=e.measure,c=s.maps
function u(t,r,n){for(var i=-1;i<(c?c.length:0);i++)for(var o=i<0?s.map:c[i],a=0;a<o.length;a+=3){var l=o[a+2]
if(l==t||l==r){var u=tt(i<0?e.line:e.rest[i]),d=o[a]+n
return(n<0||l!=t)&&(d=o[a+(n?1:0)]),ot(u,d)}}}var d=u(a,l,r)
if(d)return Ua(d,i)
for(var f=l.nextSibling,h=a?a.nodeValue.length-r:0;f;f=f.nextSibling){if(d=u(f,f.firstChild,0))return Ua(ot(d.line,d.ch-h),i)
h+=f.textContent.length}for(var p=l.previousSibling,g=r;p;p=p.previousSibling){if(d=u(p,p.firstChild,-1))return Ua(ot(d.line,d.ch+g),i)
g+=p.textContent.length}}Ka.prototype.init=function(e){var t=this,r=this,n=r.cm,i=r.div=e.lineDiv
function o(e){for(var t=e.target;t;t=t.parentNode){if(t==i)return!0
if(/\bCodeMirror-(?:line)?widget\b/.test(t.className))break}return!1}function a(e){if(o(e)&&!we(n,e)){if(n.somethingSelected())Pa({lineWise:!1,text:n.getSelections()}),"cut"==e.type&&n.replaceSelection("",null,"cut")
else{if(!n.options.lineWiseCopyCut)return
var t=Ia(n)
Pa({lineWise:!0,text:t.text}),"cut"==e.type&&n.operation(function(){n.setSelections(t.ranges,0,_),n.replaceSelection("",null,"cut")})}if(e.clipboardData){e.clipboardData.clearData()
var a=Wa.text.join("\n")
if(e.clipboardData.setData("Text",a),e.clipboardData.getData("Text")==a)return void e.preventDefault()}var l=Ba(),s=l.firstChild
Ra(s),n.display.lineSpace.insertBefore(l,n.display.lineSpace.firstChild),s.value=Wa.text.join("\n")
var c=W(R(i))
E(s),setTimeout(function(){n.display.lineSpace.removeChild(l),c.focus(),c==i&&r.showPrimarySelection()},50)}}i.contentEditable=!0,Ra(i,n.options.spellcheck,n.options.autocorrect,n.options.autocapitalize),me(i,"paste",function(e){!o(e)||we(n,e)||Ea(e,n)||l<=11&&setTimeout(oi(n,function(){return t.updateFromDOM()}),20)}),me(i,"compositionstart",function(e){t.composing={data:e.data,done:!1}}),me(i,"compositionupdate",function(e){t.composing||(t.composing={data:e.data,done:!1})}),me(i,"compositionend",function(e){t.composing&&(e.data!=t.composing.data&&t.readFromDOMSoon(),t.composing.done=!0)}),me(i,"touchstart",function(){return r.forceCompositionEnd()}),me(i,"input",function(){t.composing||t.readFromDOMSoon()}),me(i,"copy",a),me(i,"cut",a)},Ka.prototype.screenReaderLabelChanged=function(e){e?this.div.setAttribute("aria-label",e):this.div.removeAttribute("aria-label")},Ka.prototype.prepareSelection=function(){var e=kn(this.cm,!1)
return e.focus=W(R(this.div))==this.div,e},Ka.prototype.showSelection=function(e,t){e&&this.cm.display.view.length&&((e.focus||t)&&this.showPrimarySelection(),this.showMultipleSelections(e))},Ka.prototype.getSelection=function(){return this.cm.display.wrapper.ownerDocument.getSelection()},Ka.prototype.showPrimarySelection=function(){var e=this.getSelection(),t=this.cm,n=t.doc.sel.primary(),i=n.from(),o=n.to()
if(t.display.viewTo==t.display.viewFrom||i.line>=t.display.viewTo||o.line<t.display.viewFrom)e.removeAllRanges()
else{var a=qa(t,e.anchorNode,e.anchorOffset),l=qa(t,e.focusNode,e.focusOffset)
if(!a||a.bad||!l||l.bad||0!=at(ut(a,l),i)||0!=at(ct(a,l),o)){var s=t.display.view,c=i.line>=t.display.viewFrom&&Ga(t,i)||{node:s[0].measure.map[2],offset:0},u=o.line<t.display.viewTo&&Ga(t,o)
if(!u){var d=s[s.length-1].measure,f=d.maps?d.maps[d.maps.length-1]:d.map
u={node:f[f.length-1],offset:f[f.length-2]-f[f.length-3]}}if(c&&u){var h,p=e.rangeCount&&e.getRangeAt(0)
try{h=L(c.node,c.offset,u.offset,u.node)}catch(e){}h&&(!r&&t.state.focused?(e.collapse(c.node,c.offset),h.collapsed||(e.removeAllRanges(),e.addRange(h))):(e.removeAllRanges(),e.addRange(h)),p&&null==e.anchorNode?e.addRange(p):r&&this.startGracePeriod()),this.rememberSelection()}else e.removeAllRanges()}}},Ka.prototype.startGracePeriod=function(){var e=this
clearTimeout(this.gracePeriod),this.gracePeriod=setTimeout(function(){e.gracePeriod=!1,e.selectionChanged()&&e.cm.operation(function(){return e.cm.curOp.selectionChanged=!0})},20)},Ka.prototype.showMultipleSelections=function(e){A(this.cm.display.cursorDiv,e.cursors),A(this.cm.display.selectionDiv,e.selection)},Ka.prototype.rememberSelection=function(){var e=this.getSelection()
this.lastAnchorNode=e.anchorNode,this.lastAnchorOffset=e.anchorOffset,this.lastFocusNode=e.focusNode,this.lastFocusOffset=e.focusOffset},Ka.prototype.selectionInEditor=function(){var e=this.getSelection()
if(!e.rangeCount)return!1
var t=e.getRangeAt(0).commonAncestorContainer
return D(this.div,t)},Ka.prototype.focus=function(){"nocursor"!=this.cm.options.readOnly&&(this.selectionInEditor()&&W(R(this.div))==this.div||this.showSelection(this.prepareSelection(),!0),this.div.focus())},Ka.prototype.blur=function(){this.div.blur()},Ka.prototype.getField=function(){return this.div},Ka.prototype.supportsTouch=function(){return!0},Ka.prototype.receivedFocus=function(){var e=this,t=this
this.selectionInEditor()?setTimeout(function(){return e.pollSelection()},20):ii(this.cm,function(){return t.cm.curOp.selectionChanged=!0}),this.polling.set(this.cm.options.pollInterval,function e(){t.cm.state.focused&&(t.pollSelection(),t.polling.set(t.cm.options.pollInterval,e))})},Ka.prototype.selectionChanged=function(){var e=this.getSelection()
return e.anchorNode!=this.lastAnchorNode||e.anchorOffset!=this.lastAnchorOffset||e.focusNode!=this.lastFocusNode||e.focusOffset!=this.lastFocusOffset},Ka.prototype.pollSelection=function(){if(null==this.readDOMTimeout&&!this.gracePeriod&&this.selectionChanged()){var e=this.getSelection(),t=this.cm
if(v&&u&&this.cm.display.gutterSpecs.length&&function(e){for(var t=e;t;t=t.parentNode)if(/CodeMirror-gutter-wrapper/.test(t.className))return!0
return!1}(e.anchorNode))return this.cm.triggerOnKeyDown({type:"keydown",keyCode:8,preventDefault:Math.abs}),this.blur(),void this.focus()
if(!this.composing){this.rememberSelection()
var r=qa(t,e.anchorNode,e.anchorOffset),n=qa(t,e.focusNode,e.focusOffset)
r&&n&&ii(t,function(){no(t.doc,Oi(r,n),_),(r.bad||n.bad)&&(t.curOp.selectionChanged=!0)})}}},Ka.prototype.pollContent=function(){null!=this.readDOMTimeout&&(clearTimeout(this.readDOMTimeout),this.readDOMTimeout=null)
var e,t,r,n=this.cm,i=n.display,o=n.doc.sel.primary(),a=o.from(),l=o.to()
if(0==a.ch&&a.line>n.firstLine()&&(a=ot(a.line-1,Ze(n.doc,a.line-1).length)),l.ch==Ze(n.doc,l.line).text.length&&l.line<n.lastLine()&&(l=ot(l.line+1,0)),a.line<i.viewFrom||l.line>i.viewTo-1)return!1
a.line==i.viewFrom||0==(e=gn(n,a.line))?(t=tt(i.view[0].line),r=i.view[0].node):(t=tt(i.view[e].line),r=i.view[e-1].node.nextSibling)
var s,c,u=gn(n,l.line)
if(u==i.view.length-1?(s=i.viewTo-1,c=i.lineDiv.lastChild):(s=tt(i.view[u+1].line)-1,c=i.view[u+1].node.previousSibling),!r)return!1
for(var d=n.doc.splitLines(function(e,t,r,n,i){var o="",a=!1,l=e.doc.lineSeparator(),s=!1
function c(){a&&(o+=l,s&&(o+=l),a=s=!1)}function u(e){e&&(c(),o+=e)}function d(t){if(1==t.nodeType){var r=t.getAttribute("cm-text")
if(r)return void u(r)
var o,f=t.getAttribute("cm-marker")
if(f){var h=e.findMarks(ot(n,0),ot(i+1,0),function(e){return function(t){return t.id==e}}(+f))
return void(h.length&&(o=h[0].find(0))&&u(Qe(e.doc,o.from,o.to).join(l)))}if("false"==t.getAttribute("contenteditable"))return
var p=/^(pre|div|p|li|table|br)$/i.test(t.nodeName)
if(!/^br$/i.test(t.nodeName)&&0==t.textContent.length)return
p&&c()
for(var g=0;g<t.childNodes.length;g++)d(t.childNodes[g]);/^(pre|p)$/i.test(t.nodeName)&&(s=!0),p&&(a=!0)}else 3==t.nodeType&&u(t.nodeValue.replace(/\u200b/g,"").replace(/\u00a0/g," "))}for(;d(t),t!=r;)t=t.nextSibling,s=!1
return o}(n,r,c,t,s)),f=Qe(n.doc,ot(t,0),ot(s,Ze(n.doc,s).text.length));d.length>1&&f.length>1;)if(J(d)==J(f))d.pop(),f.pop(),s--
else{if(d[0]!=f[0])break
d.shift(),f.shift(),t++}for(var h=0,p=0,g=d[0],m=f[0],v=Math.min(g.length,m.length);h<v&&g.charCodeAt(h)==m.charCodeAt(h);)++h
for(var y=J(d),b=J(f),w=Math.min(y.length-(1==d.length?h:0),b.length-(1==f.length?h:0));p<w&&y.charCodeAt(y.length-p-1)==b.charCodeAt(b.length-p-1);)++p
if(1==d.length&&1==f.length&&t==a.line)for(;h&&h>a.ch&&y.charCodeAt(y.length-p-1)==b.charCodeAt(b.length-p-1);)h--,p++
d[d.length-1]=y.slice(0,y.length-p).replace(/^\u200b+/,""),d[0]=d[0].slice(h).replace(/\u200b+$/,"")
var x=ot(t,h),k=ot(s,f.length?J(f).length-p:0)
return d.length>1||d[0]||at(x,k)?(bo(n.doc,d,x,k,"+input"),!0):void 0},Ka.prototype.ensurePolled=function(){this.forceCompositionEnd()},Ka.prototype.reset=function(){this.forceCompositionEnd()},Ka.prototype.forceCompositionEnd=function(){this.composing&&(clearTimeout(this.readDOMTimeout),this.composing=null,this.updateFromDOM(),this.div.blur(),this.div.focus())},Ka.prototype.readFromDOMSoon=function(){var e=this
null==this.readDOMTimeout&&(this.readDOMTimeout=setTimeout(function(){if(e.readDOMTimeout=null,e.composing){if(!e.composing.done)return
e.composing=null}e.updateFromDOM()},80))},Ka.prototype.updateFromDOM=function(){var e=this
!this.cm.isReadOnly()&&this.pollContent()||ii(this.cm,function(){return mn(e.cm)})},Ka.prototype.setUneditable=function(e){e.contentEditable="false"},Ka.prototype.onKeyPress=function(e){0==e.charCode||this.composing||(e.preventDefault(),this.cm.isReadOnly()||oi(this.cm,Ha)(this.cm,String.fromCharCode(null==e.charCode?e.keyCode:e.charCode),0))},Ka.prototype.readOnlyChanged=function(e){this.div.contentEditable=String("nocursor"!=e)},Ka.prototype.onContextMenu=function(){},Ka.prototype.resetPosition=function(){},Ka.prototype.needsContentAttribute=!0
var $a=function(e){this.cm=e,this.prevInput="",this.pollingFast=!1,this.polling=new G,this.hasSelection=!1,this.composing=null,this.resetting=!1}
$a.prototype.init=function(e){var t=this,r=this,n=this.cm
this.createField(e)
var i=this.textarea
function o(e){if(!we(n,e)){if(n.somethingSelected())Pa({lineWise:!1,text:n.getSelections()})
else{if(!n.options.lineWiseCopyCut)return
var t=Ia(n)
Pa({lineWise:!0,text:t.text}),"cut"==e.type?n.setSelections(t.ranges,null,_):(r.prevInput="",i.value=t.text.join("\n"),E(i))}"cut"==e.type&&(n.state.cutIncoming=+new Date)}}e.wrapper.insertBefore(this.wrapper,e.wrapper.firstChild),m&&(i.style.width="0px"),me(i,"input",function(){a&&l>=9&&t.hasSelection&&(t.hasSelection=null),r.poll()}),me(i,"paste",function(e){we(n,e)||Ea(e,n)||(n.state.pasteIncoming=+new Date,r.fastPoll())}),me(i,"cut",o),me(i,"copy",o),me(e.scroller,"paste",function(t){if(!Lr(e,t)&&!we(n,t)){if(!i.dispatchEvent)return n.state.pasteIncoming=+new Date,void r.focus()
var o=new Event("paste")
o.clipboardData=t.clipboardData,i.dispatchEvent(o)}}),me(e.lineSpace,"selectstart",function(t){Lr(e,t)||Se(t)}),me(i,"compositionstart",function(){var e=n.getCursor("from")
r.composing&&r.composing.range.clear(),r.composing={start:e,range:n.markText(e,n.getCursor("to"),{className:"CodeMirror-composing"})}}),me(i,"compositionend",function(){r.composing&&(r.poll(),r.composing.range.clear(),r.composing=null)})},$a.prototype.createField=function(e){this.wrapper=Ba(),this.textarea=this.wrapper.firstChild
var t=this.cm.options
Ra(this.textarea,t.spellcheck,t.autocorrect,t.autocapitalize)},$a.prototype.screenReaderLabelChanged=function(e){e?this.textarea.setAttribute("aria-label",e):this.textarea.removeAttribute("aria-label")},$a.prototype.prepareSelection=function(){var e=this.cm,t=e.display,r=e.doc,n=kn(e)
if(e.options.moveInputWithCursor){var i=Zr(e,r.sel.primary().head,"div"),o=t.wrapper.getBoundingClientRect(),a=t.lineDiv.getBoundingClientRect()
n.teTop=Math.max(0,Math.min(t.wrapper.clientHeight-10,i.top+a.top-o.top)),n.teLeft=Math.max(0,Math.min(t.wrapper.clientWidth-10,i.left+a.left-o.left))}return n},$a.prototype.showSelection=function(e){var t=this.cm.display
A(t.cursorDiv,e.cursors),A(t.selectionDiv,e.selection),null!=e.teTop&&(this.wrapper.style.top=e.teTop+"px",this.wrapper.style.left=e.teLeft+"px")},$a.prototype.reset=function(e){if(!(this.contextMenuPending||this.composing&&e)){var t=this.cm
if(this.resetting=!0,t.somethingSelected()){this.prevInput=""
var r=t.getSelection()
this.textarea.value=r,t.state.focused&&E(this.textarea),a&&l>=9&&(this.hasSelection=r)}else e||(this.prevInput=this.textarea.value="",a&&l>=9&&(this.hasSelection=null))
this.resetting=!1}},$a.prototype.getField=function(){return this.textarea},$a.prototype.supportsTouch=function(){return!1},$a.prototype.focus=function(){if("nocursor"!=this.cm.options.readOnly&&(!y||W(R(this.textarea))!=this.textarea))try{this.textarea.focus()}catch(e){}},$a.prototype.blur=function(){this.textarea.blur()},$a.prototype.resetPosition=function(){this.wrapper.style.top=this.wrapper.style.left=0},$a.prototype.receivedFocus=function(){this.slowPoll()},$a.prototype.slowPoll=function(){var e=this
this.pollingFast||this.polling.set(this.cm.options.pollInterval,function(){e.poll(),e.cm.state.focused&&e.slowPoll()})},$a.prototype.fastPoll=function(){var e=!1,t=this
t.pollingFast=!0,t.polling.set(20,function r(){t.poll()||e?(t.pollingFast=!1,t.slowPoll()):(e=!0,t.polling.set(60,r))})},$a.prototype.poll=function(){var e=this,t=this.cm,r=this.textarea,n=this.prevInput
if(this.contextMenuPending||this.resetting||!t.state.focused||Fe(r)&&!n&&!this.composing||t.isReadOnly()||t.options.disableInput||t.state.keySeq)return!1
var i=r.value
if(i==n&&!t.somethingSelected())return!1
if(a&&l>=9&&this.hasSelection===i||b&&/[\uf700-\uf7ff]/.test(i))return t.display.input.reset(),!1
if(t.doc.sel==t.display.selForContextMenu){var o=i.charCodeAt(0)
if(8203!=o||n||(n="​"),8666==o)return this.reset(),this.cm.execCommand("undo")}for(var s=0,c=Math.min(n.length,i.length);s<c&&n.charCodeAt(s)==i.charCodeAt(s);)++s
return ii(t,function(){Ha(t,i.slice(s),n.length-s,null,e.composing?"*compose":null),i.length>1e3||i.indexOf("\n")>-1?r.value=e.prevInput="":e.prevInput=i,e.composing&&(e.composing.range.clear(),e.composing.range=t.markText(e.composing.start,t.getCursor("to"),{className:"CodeMirror-composing"}))}),!0},$a.prototype.ensurePolled=function(){this.pollingFast&&this.poll()&&(this.pollingFast=!1)},$a.prototype.onKeyPress=function(){a&&l>=9&&(this.hasSelection=null),this.fastPoll()},$a.prototype.onContextMenu=function(e){var t=this,r=t.cm,n=r.display,i=t.textarea
t.contextMenuPending&&t.contextMenuPending()
var o=pn(r,e),c=n.scroller.scrollTop
if(o&&!f){r.options.resetSelectionOnContextMenu&&-1==r.doc.sel.contains(o)&&oi(r,no)(r.doc,Oi(o),_)
var u,d=i.style.cssText,h=t.wrapper.style.cssText,p=t.wrapper.offsetParent.getBoundingClientRect()
if(t.wrapper.style.cssText="position: static",i.style.cssText="position: absolute; width: 30px; height: 30px;\n      top: "+(e.clientY-p.top-5)+"px; left: "+(e.clientX-p.left-5)+"px;\n      z-index: 1000; background: "+(a?"rgba(255, 255, 255, .05)":"transparent")+";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);",s&&(u=i.ownerDocument.defaultView.scrollY),n.input.focus(),s&&i.ownerDocument.defaultView.scrollTo(null,u),n.input.reset(),r.somethingSelected()||(i.value=t.prevInput=" "),t.contextMenuPending=v,n.selForContextMenu=r.doc.sel,clearTimeout(n.detectingSelectAll),a&&l>=9&&m(),S){Me(e)
var g=function(){ye(window,"mouseup",g),setTimeout(v,20)}
me(window,"mouseup",g)}else setTimeout(v,50)}function m(){if(null!=i.selectionStart){var e=r.somethingSelected(),o="​"+(e?i.value:"")
i.value="⇚",i.value=o,t.prevInput=e?"":"​",i.selectionStart=1,i.selectionEnd=o.length,n.selForContextMenu=r.doc.sel}}function v(){if(t.contextMenuPending==v&&(t.contextMenuPending=!1,t.wrapper.style.cssText=h,i.style.cssText=d,a&&l<9&&n.scrollbars.setScrollTop(n.scroller.scrollTop=c),null!=i.selectionStart)){(!a||a&&l<9)&&m()
var e=0,o=function(){n.selForContextMenu==r.doc.sel&&0==i.selectionStart&&i.selectionEnd>0&&"​"==t.prevInput?oi(r,fo)(r):e++<10?n.detectingSelectAll=setTimeout(o,500):(n.selForContextMenu=null,n.input.reset())}
n.detectingSelectAll=setTimeout(o,200)}}},$a.prototype.readOnlyChanged=function(e){e||this.reset(),this.textarea.disabled="nocursor"==e,this.textarea.readOnly=!!e},$a.prototype.setUneditable=function(){},$a.prototype.needsContentAttribute=!1,function(e){var t=e.optionHandlers
function r(r,n,i,o){e.defaults[r]=n,i&&(t[r]=o?function(e,t,r){r!=Ta&&i(e,t,r)}:i)}e.defineOption=r,e.Init=Ta,r("value","",function(e,t){return e.setValue(t)},!0),r("mode",null,function(e,t){e.doc.modeOption=t,Hi(e)},!0),r("indentUnit",2,Hi,!0),r("indentWithTabs",!1),r("smartIndent",!0),r("tabSize",4,function(e){Ei(e),Gr(e),mn(e)},!0),r("lineSeparator",null,function(e,t){if(e.doc.lineSep=t,t){var r=[],n=e.doc.first
e.doc.iter(function(e){for(var i=0;;){var o=e.text.indexOf(t,i)
if(-1==o)break
i=o+t.length,r.push(ot(n,o))}n++})
for(var i=r.length-1;i>=0;i--)bo(e.doc,t,r[i],ot(r[i].line,r[i].ch+t.length))}}),r("specialChars",/[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]/g,function(e,t,r){e.state.specialChars=new RegExp(t.source+(t.test("\t")?"":"|\t"),"g"),r!=Ta&&e.refresh()}),r("specialCharPlaceholder",nr,function(e){return e.refresh()},!0),r("electricChars",!0),r("inputStyle",y?"contenteditable":"textarea",function(){throw new Error("inputStyle can not (yet) be changed in a running editor")},!0),r("spellcheck",!1,function(e,t){return e.getInputField().spellcheck=t},!0),r("autocorrect",!1,function(e,t){return e.getInputField().autocorrect=t},!0),r("autocapitalize",!1,function(e,t){return e.getInputField().autocapitalize=t},!0),r("rtlMoveVisually",!x),r("wholeLineUpdateBefore",!0),r("theme","default",function(e){Sa(e),wi(e)},!0),r("keyMap","default",function(e,t,r){var n=Jo(t),i=r!=Ta&&Jo(r)
i&&i.detach&&i.detach(e,n),n.attach&&n.attach(e,i||null)}),r("extraKeys",null),r("configureMouse",null),r("lineWrapping",!1,Aa,!0),r("gutters",[],function(e,t){e.display.gutterSpecs=yi(t,e.options.lineNumbers),wi(e)},!0),r("fixedGutter",!0,function(e,t){e.display.gutters.style.left=t?dn(e.display)+"px":"0",e.refresh()},!0),r("coverGutterNextToScrollbar",!1,function(e){return qn(e)},!0),r("scrollbarStyle","native",function(e){Xn(e),qn(e),e.display.scrollbars.setScrollTop(e.doc.scrollTop),e.display.scrollbars.setScrollLeft(e.doc.scrollLeft)},!0),r("lineNumbers",!1,function(e,t){e.display.gutterSpecs=yi(e.options.gutters,t),wi(e)},!0),r("firstLineNumber",1,wi,!0),r("lineNumberFormatter",function(e){return e},wi,!0),r("showCursorWhenSelecting",!1,xn,!0),r("resetSelectionOnContextMenu",!0),r("lineWiseCopyCut",!0),r("pasteLinesPerSelection",!0),r("selectionsMayTouch",!1),r("readOnly",!1,function(e,t){"nocursor"==t&&(On(e),e.display.input.blur()),e.display.input.readOnlyChanged(t)}),r("screenReaderLabel",null,function(e,t){t=""===t?null:t,e.display.input.screenReaderLabelChanged(t)}),r("disableInput",!1,function(e,t){t||e.display.input.reset()},!0),r("dragDrop",!0,Na),r("allowDropFileTypes",null),r("cursorBlinkRate",530),r("cursorScrollMargin",0),r("cursorHeight",1,xn,!0),r("singleCursorHeightPerLine",!0,xn,!0),r("workTime",100),r("workDelay",100),r("flattenSpans",!0,Ei,!0),r("addModeClass",!1,Ei,!0),r("pollInterval",100),r("undoDepth",200,function(e,t){return e.doc.history.undoDepth=t}),r("historyEventDelay",1250),r("viewportMargin",10,function(e){return e.refresh()},!0),r("maxHighlightLength",1e4,Ei,!0),r("moveInputWithCursor",!0,function(e,t){t||e.display.input.resetPosition()}),r("tabindex",null,function(e,t){return e.display.input.getField().tabIndex=t||""}),r("autofocus",null),r("direction","ltr",function(e,t){return e.doc.setDirection(t)},!0),r("phrases",null)}(Oa),function(e){var t=e.optionHandlers,r=e.helpers={}
e.prototype={constructor:e,focus:function(){B(this).focus(),this.display.input.focus()},setOption:function(e,r){var n=this.options,i=n[e]
n[e]==r&&"mode"!=e||(n[e]=r,t.hasOwnProperty(e)&&oi(this,t[e])(this,r,i),be(this,"optionChange",this,e))},getOption:function(e){return this.options[e]},getDoc:function(){return this.doc},addKeyMap:function(e,t){this.state.keyMaps[t?"push":"unshift"](Jo(e))},removeKeyMap:function(e){for(var t=this.state.keyMaps,r=0;r<t.length;++r)if(t[r]==e||t[r].name==e)return t.splice(r,1),!0},addOverlay:ai(function(t,r){var n=t.token?t:e.getMode(this.options,t)
if(n.startState)throw new Error("Overlays may not be stateful.")
!function(e,t,r){for(var n=0,i=r(t);n<e.length&&r(e[n])<=i;)n++
e.splice(n,0,t)}(this.state.overlays,{mode:n,modeSpec:t,opaque:r&&r.opaque,priority:r&&r.priority||0},function(e){return e.priority}),this.state.modeGen++,mn(this)}),removeOverlay:ai(function(e){for(var t=this.state.overlays,r=0;r<t.length;++r){var n=t[r].modeSpec
if(n==e||"string"==typeof e&&n.name==e)return t.splice(r,1),this.state.modeGen++,void mn(this)}}),indentLine:ai(function(e,t,r){"string"!=typeof t&&"number"!=typeof t&&(t=null==t?this.options.smartIndent?"smart":"prev":t?"add":"subtract"),nt(this.doc,e)&&Da(this,e,t,r)}),indentSelection:ai(function(e){for(var t=this.doc.sel.ranges,r=-1,n=0;n<t.length;n++){var i=t[n]
if(i.empty())i.head.line>r&&(Da(this,i.head.line,e,!0),r=i.head.line,n==this.doc.sel.primIndex&&En(this))
else{var o=i.from(),a=i.to(),l=Math.max(r,o.line)
r=Math.min(this.lastLine(),a.line-(a.ch?0:1))+1
for(var s=l;s<r;++s)Da(this,s,e)
var c=this.doc.sel.ranges
0==o.ch&&t.length==c.length&&c[n].from().ch>0&&eo(this.doc,n,new Ni(o,c[n].to()),_)}}}),getTokenAt:function(e,t){return Ct(this,e,t)},getLineTokens:function(e,t){return Ct(this,ot(e),t,!0)},getTokenTypeAt:function(e){e=ft(this.doc,e)
var t,r=vt(this,Ze(this.doc,e.line)),n=0,i=(r.length-1)/2,o=e.ch
if(0==o)t=r[2]
else for(;;){var a=n+i>>1
if((a?r[2*a-1]:0)>=o)i=a
else{if(!(r[2*a+1]<o)){t=r[2*a+2]
break}n=a+1}}var l=t?t.indexOf("overlay "):-1
return l<0?t:0==l?null:t.slice(0,l-1)},getModeAt:function(t){var r=this.doc.mode
return r.innerMode?e.innerMode(r,this.getTokenAt(t).state).mode:r},getHelper:function(e,t){return this.getHelpers(e,t)[0]},getHelpers:function(e,t){var n=[]
if(!r.hasOwnProperty(t))return n
var i=r[t],o=this.getModeAt(e)
if("string"==typeof o[t])i[o[t]]&&n.push(i[o[t]])
else if(o[t])for(var a=0;a<o[t].length;a++){var l=i[o[t][a]]
l&&n.push(l)}else o.helperType&&i[o.helperType]?n.push(i[o.helperType]):i[o.name]&&n.push(i[o.name])
for(var s=0;s<i._global.length;s++){var c=i._global[s]
c.pred(o,this)&&-1==U(n,c.val)&&n.push(c.val)}return n},getStateAfter:function(e,t){var r=this.doc
return yt(this,(e=dt(r,null==e?r.first+r.size-1:e))+1,t).state},cursorCoords:function(e,t){var r=this.doc.sel.primary()
return Zr(this,null==e?r.head:"object"==typeof e?ft(this.doc,e):e?r.from():r.to(),t||"page")},charCoords:function(e,t){return Yr(this,ft(this.doc,e),t||"page")},coordsChar:function(e,t){return en(this,(e=Xr(this,e,t||"page")).left,e.top)},lineAtHeight:function(e,t){return e=Xr(this,{top:e,left:0},t||"page").top,rt(this.doc,e+this.display.viewOffset)},heightAtLine:function(e,t,r){var n,i=!1
if("number"==typeof e){var o=this.doc.first+this.doc.size-1
e<this.doc.first?e=this.doc.first:e>o&&(e=o,i=!0),n=Ze(this.doc,e)}else n=e
return $r(this,n,{top:0,left:0},t||"page",r||i).top+(i?this.doc.height-$t(n):0)},defaultTextHeight:function(){return sn(this.display)},defaultCharWidth:function(){return cn(this.display)},getViewport:function(){return{from:this.display.viewFrom,to:this.display.viewTo}},addWidget:function(e,t,r,n,i){var o,a,l=this.display,s=(e=Zr(this,ft(this.doc,e))).bottom,c=e.left
if(t.style.position="absolute",t.setAttribute("cm-ignore-events","true"),this.display.input.setUneditable(t),l.sizer.appendChild(t),"over"==n)s=e.top
else if("above"==n||"near"==n){var u=Math.max(l.wrapper.clientHeight,this.doc.height),d=Math.max(l.sizer.clientWidth,l.lineSpace.clientWidth);("above"==n||e.bottom+t.offsetHeight>u)&&e.top>t.offsetHeight?s=e.top-t.offsetHeight:e.bottom+t.offsetHeight<=u&&(s=e.bottom),c+t.offsetWidth>d&&(c=d-t.offsetWidth)}t.style.top=s+"px",t.style.left=t.style.right="","right"==i?(c=l.sizer.clientWidth-t.offsetWidth,t.style.right="0px"):("left"==i?c=0:"middle"==i&&(c=(l.sizer.clientWidth-t.offsetWidth)/2),t.style.left=c+"px"),r&&(null!=(a=Pn(o=this,{left:c,top:s,right:c+t.offsetWidth,bottom:s+t.offsetHeight})).scrollTop&&Bn(o,a.scrollTop),null!=a.scrollLeft&&Vn(o,a.scrollLeft))},triggerOnKeyDown:ai(ha),triggerOnKeyPress:ai(ga),triggerOnKeyUp:pa,triggerOnMouseDown:ai(ba),execCommand:function(e){if(ia.hasOwnProperty(e))return ia[e].call(null,this)},triggerElectric:ai(function(e){Fa(this,e)}),findPosH:function(e,t,r,n){var i=1
t<0&&(i=-1,t=-t)
for(var o=ft(this.doc,e),a=0;a<t&&!(o=ja(this.doc,o,i,r,n)).hitSide;++a);return o},moveH:ai(function(e,t){var r=this
this.extendSelectionsBy(function(n){return r.display.shift||r.doc.extend||n.empty()?ja(r.doc,n.head,e,t,r.options.rtlMoveVisually):e<0?n.from():n.to()},X)}),deleteH:ai(function(e,t){var r=this.doc.sel,n=this.doc
r.somethingSelected()?n.replaceSelection("",null,"+delete"):ea(this,function(r){var i=ja(n,r.head,e,t,!1)
return e<0?{from:i,to:r.head}:{from:r.head,to:i}})}),findPosV:function(e,t,r,n){var i=1,o=n
t<0&&(i=-1,t=-t)
for(var a=ft(this.doc,e),l=0;l<t;++l){var s=Zr(this,a,"div")
if(null==o?o=s.left:s.left=o,(a=Va(this,s,i,r)).hitSide)break}return a},moveV:ai(function(e,t){var r=this,n=this.doc,i=[],o=!this.display.shift&&!n.extend&&n.sel.somethingSelected()
if(n.extendSelectionsBy(function(a){if(o)return e<0?a.from():a.to()
var l=Zr(r,a.head,"div")
null!=a.goalColumn&&(l.left=a.goalColumn),i.push(l.left)
var s=Va(r,l,e,t)
return"page"==t&&a==n.sel.primary()&&Hn(r,Yr(r,s,"div").top-l.top),s},X),i.length)for(var a=0;a<n.sel.ranges.length;a++)n.sel.ranges[a].goalColumn=i[a]}),findWordAt:function(e){var t=Ze(this.doc,e.line).text,r=e.ch,n=e.ch
if(t){var i=this.getHelper(e,"wordChars")
"before"!=e.sticky&&n!=t.length||!r?++n:--r
for(var o=t.charAt(r),a=oe(o,i)?function(e){return oe(e,i)}:/\s/.test(o)?function(e){return/\s/.test(e)}:function(e){return!/\s/.test(e)&&!oe(e)};r>0&&a(t.charAt(r-1));)--r
for(;n<t.length&&a(t.charAt(n));)++n}return new Ni(ot(e.line,r),ot(e.line,n))},toggleOverwrite:function(e){null!=e&&e==this.state.overwrite||((this.state.overwrite=!this.state.overwrite)?P(this.display.cursorDiv,"CodeMirror-overwrite"):M(this.display.cursorDiv,"CodeMirror-overwrite"),be(this,"overwriteToggle",this,this.state.overwrite))},hasFocus:function(){return this.display.input.getField()==W(I(this))},isReadOnly:function(){return!(!this.options.readOnly&&!this.doc.cantEdit)},scrollTo:ai(function(e,t){Fn(this,e,t)}),getScrollInfo:function(){var e=this.display.scroller
return{left:e.scrollLeft,top:e.scrollTop,height:e.scrollHeight-Or(this)-this.display.barHeight,width:e.scrollWidth-Or(this)-this.display.barWidth,clientHeight:Dr(this),clientWidth:zr(this)}},scrollIntoView:ai(function(e,t){null==e?(e={from:this.doc.sel.primary().head,to:null},null==t&&(t=this.options.cursorScrollMargin)):"number"==typeof e?e={from:ot(e,0),to:null}:null==e.from&&(e={from:e,to:null}),e.to||(e.to=e.from),e.margin=t||0,null!=e.from.line?function(e,t){In(e),e.curOp.scrollToPos=t}(this,e):Rn(this,e.from,e.to,e.margin)}),setSize:ai(function(e,t){var r=this,n=function(e){return"number"==typeof e||/^\d+$/.test(String(e))?e+"px":e}
null!=e&&(this.display.wrapper.style.width=n(e)),null!=t&&(this.display.wrapper.style.height=n(t)),this.options.lineWrapping&&Kr(this)
var i=this.display.viewFrom
this.doc.iter(i,this.display.viewTo,function(e){if(e.widgets)for(var t=0;t<e.widgets.length;t++)if(e.widgets[t].noHScroll){vn(r,i,"widget")
break}++i}),this.curOp.forceUpdate=!0,be(this,"refresh",this)}),operation:function(e){return ii(this,e)},startOperation:function(){return Zn(this)},endOperation:function(){return Qn(this)},refresh:ai(function(){var e=this.display.cachedTextHeight
mn(this),this.curOp.forceUpdate=!0,Gr(this),Fn(this,this.doc.scrollLeft,this.doc.scrollTop),pi(this.display),(null==e||Math.abs(e-sn(this.display))>.5||this.options.lineWrapping)&&hn(this),be(this,"refresh",this)}),swapDoc:ai(function(e){var t=this.doc
return t.cm=null,this.state.selectingText&&this.state.selectingText(),Bi(this,e),Gr(this),this.display.input.reset(),Fn(this,e.scrollLeft,e.scrollTop),this.curOp.forceScroll=!0,fr(this,"swapDoc",this,t),t}),phrase:function(e){var t=this.options.phrases
return t&&Object.prototype.hasOwnProperty.call(t,e)?t[e]:e},getInputField:function(){return this.display.input.getField()},getWrapperElement:function(){return this.display.wrapper},getScrollerElement:function(){return this.display.scroller},getGutterElement:function(){return this.display.gutters}},Ce(e),e.registerHelper=function(t,n,i){r.hasOwnProperty(t)||(r[t]=e[t]={_global:[]}),r[t][n]=i},e.registerGlobalHelper=function(t,n,i,o){e.registerHelper(t,n,o),r[t]._global.push({pred:i,val:o})}}(Oa)
var Xa="iter insert remove copy getEditor constructor".split(" ")
for(var Ya in Ho.prototype)Ho.prototype.hasOwnProperty(Ya)&&U(Xa,Ya)<0&&(Oa.prototype[Ya]=function(e){return function(){return e.apply(this.doc,arguments)}}(Ho.prototype[Ya]))
return Ce(Ho),Oa.inputStyles={textarea:$a,contenteditable:Ka},Oa.defineMode=function(e){Oa.defaults.mode||"null"==e||(Oa.defaults.mode=e),Ve.apply(this,arguments)},Oa.defineMIME=function(e,t){je[e]=t},Oa.defineMode("null",function(){return{token:function(e){return e.skipToEnd()}}}),Oa.defineMIME("text/plain","null"),Oa.defineExtension=function(e,t){Oa.prototype[e]=t},Oa.defineDocExtension=function(e,t){Ho.prototype[e]=t},Oa.fromTextArea=function(e,t){if((t=t?V(t):{}).value=e.value,!t.tabindex&&e.tabIndex&&(t.tabindex=e.tabIndex),!t.placeholder&&e.placeholder&&(t.placeholder=e.placeholder),null==t.autofocus){var r=W(R(e))
t.autofocus=r==e||null!=e.getAttribute("autofocus")&&r==document.body}function n(){e.value=l.getValue()}var i
if(e.form&&(me(e.form,"submit",n),!t.leaveSubmitMethodAlone)){var o=e.form
i=o.submit
try{var a=o.submit=function(){n(),o.submit=i,o.submit(),o.submit=a}}catch(e){}}t.finishInit=function(r){r.save=n,r.getTextArea=function(){return e},r.toTextArea=function(){r.toTextArea=isNaN,n(),e.parentNode.removeChild(r.getWrapperElement()),e.style.display="",e.form&&(ye(e.form,"submit",n),t.leaveSubmitMethodAlone||"function"!=typeof e.form.submit||(e.form.submit=i))}},e.style.display="none"
var l=Oa(function(t){return e.parentNode.insertBefore(t,e.nextSibling)},t)
return l},function(e){e.off=ye,e.on=me,e.wheelEventPixels=Ti,e.Doc=Ho,e.splitLines=Ee,e.countColumn=K,e.findColumn=Y,e.isWordChar=ie,e.Pass=q,e.signal=be,e.Line=Zt,e.changeEnd=zi,e.scrollbarModel=$n,e.Pos=ot,e.cmpPos=at,e.modes=Be,e.mimeModes=je,e.resolveMode=Ke,e.getMode=Ge,e.modeExtensions=Ue,e.extendMode=qe,e.copyState=_e,e.startState=Xe,e.innerMode=$e,e.commands=ia,e.keyMap=qo,e.keyName=Qo,e.isModifierKey=Yo,e.lookupKey=Xo,e.normalizeKeyMap=$o,e.StringStream=Ye,e.SharedTextMarker=zo,e.TextMarker=Ao,e.LineWidget=Lo,e.e_preventDefault=Se,e.e_stopPropagation=Te,e.e_stop=Me,e.addClass=P,e.contains=D,e.rmClass=M,e.keyNames=Vo}(Oa),Oa.version="5.65.21",Oa}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
function t(e){for(var t={},r=0;r<e.length;++r)t[e[r].toLowerCase()]=!0
return t}e.defineMode("css",function(t,r){var n=r.inline
r.propertyKeywords||(r=e.resolveMode("text/css"))
var i,o,a=t.indentUnit,l=r.tokenHooks,s=r.documentTypes||{},c=r.mediaTypes||{},u=r.mediaFeatures||{},d=r.mediaValueKeywords||{},f=r.propertyKeywords||{},h=r.nonStandardPropertyKeywords||{},p=r.fontProperties||{},g=r.counterDescriptors||{},m=r.colorKeywords||{},v=r.valueKeywords||{},y=r.allowNested,b=r.lineComment,w=!0===r.supportsAtComponent,x=!1!==t.highlightNonStandardPropertyKeywords
function k(e,t){return i=t,e}function C(e,t){var r=e.next()
if(l[r]){var n=l[r](e,t)
if(!1!==n)return n}return"@"==r?(e.eatWhile(/[\w\\\-]/),k("def",e.current())):"="==r||("~"==r||"|"==r)&&e.eat("=")?k(null,"compare"):'"'==r||"'"==r?(t.tokenize=S(r),t.tokenize(e,t)):"#"==r?(e.eatWhile(/[\w\\\-]/),k("atom","hash")):"!"==r?(e.match(/^\s*\w*/),k("keyword","important")):/\d/.test(r)||"."==r&&e.eat(/\d/)?(e.eatWhile(/[\w.%]/),k("number","unit")):"-"!==r?/[,+>*\/]/.test(r)?k(null,"select-op"):"."==r&&e.match(/^-?[_a-z][_a-z0-9-]*/i)?k("qualifier","qualifier"):/[:;{}\[\]\(\)]/.test(r)?k(null,r):e.match(/^[\w-.]+(?=\()/)?(/^(url(-prefix)?|domain|regexp)$/i.test(e.current())&&(t.tokenize=T),k("variable callee","variable")):/[\w\\\-]/.test(r)?(e.eatWhile(/[\w\\\-]/),k("property","word")):k(null,null):/[\d.]/.test(e.peek())?(e.eatWhile(/[\w.%]/),k("number","unit")):e.match(/^-[\w\\\-]*/)?(e.eatWhile(/[\w\\\-]/),e.match(/^\s*:/,!1)?k("variable-2","variable-definition"):k("variable-2","variable")):e.match(/^\w+-/)?k("meta","meta"):void 0}function S(e){return function(t,r){for(var n,i=!1;null!=(n=t.next());){if(n==e&&!i){")"==e&&t.backUp(1)
break}i=!i&&"\\"==n}return(n==e||!i&&")"!=e)&&(r.tokenize=null),k("string","string")}}function T(e,t){return e.next(),e.match(/^\s*[\"\')]/,!1)?t.tokenize=null:t.tokenize=S(")"),k(null,"(")}function L(e,t,r){this.type=e,this.indent=t,this.prev=r}function M(e,t,r,n){return e.context=new L(r,t.indentation()+(!1===n?0:a),e.context),r}function N(e){return e.context.prev&&(e.context=e.context.prev),e.context.type}function A(e,t,r){return D[r.context.type](e,t,r)}function O(e,t,r,n){for(var i=n||1;i>0;i--)r.context=r.context.prev
return A(e,t,r)}function z(e){var t=e.current().toLowerCase()
o=v.hasOwnProperty(t)?"atom":m.hasOwnProperty(t)?"keyword":"variable"}var D={top:function(e,t,r){if("{"==e)return M(r,t,"block")
if("}"==e&&r.context.prev)return N(r)
if(w&&/@component/i.test(e))return M(r,t,"atComponentBlock")
if(/^@(-moz-)?document$/i.test(e))return M(r,t,"documentTypes")
if(/^@(media|supports|(-moz-)?document|import)$/i.test(e))return M(r,t,"atBlock")
if(/^@(font-face|counter-style)/i.test(e))return r.stateArg=e,"restricted_atBlock_before"
if(/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(e))return"keyframes"
if(e&&"@"==e.charAt(0))return M(r,t,"at")
if("hash"==e)o="builtin"
else if("word"==e)o="tag"
else{if("variable-definition"==e)return"maybeprop"
if("interpolation"==e)return M(r,t,"interpolation")
if(":"==e)return"pseudo"
if(y&&"("==e)return M(r,t,"parens")}return r.context.type},block:function(e,t,r){if("word"==e){var n=t.current().toLowerCase()
return f.hasOwnProperty(n)?(o="property","maybeprop"):h.hasOwnProperty(n)?(o=x?"string-2":"property","maybeprop"):y?(o=t.match(/^\s*:(?:\s|$)/,!1)?"property":"tag","block"):(o+=" error","maybeprop")}return"meta"==e?"block":y||"hash"!=e&&"qualifier"!=e?D.top(e,t,r):(o="error","block")},maybeprop:function(e,t,r){return":"==e?M(r,t,"prop"):A(e,t,r)},prop:function(e,t,r){if(";"==e)return N(r)
if("{"==e&&y)return M(r,t,"propBlock")
if("}"==e||"{"==e)return O(e,t,r)
if("("==e)return M(r,t,"parens")
if("hash"!=e||/^#([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(t.current())){if("word"==e)z(t)
else if("interpolation"==e)return M(r,t,"interpolation")}else o+=" error"
return"prop"},propBlock:function(e,t,r){return"}"==e?N(r):"word"==e?(o="property","maybeprop"):r.context.type},parens:function(e,t,r){return"{"==e||"}"==e?O(e,t,r):")"==e?N(r):"("==e?M(r,t,"parens"):"interpolation"==e?M(r,t,"interpolation"):("word"==e&&z(t),"parens")},pseudo:function(e,t,r){return"meta"==e?"pseudo":"word"==e?(o="variable-3",r.context.type):A(e,t,r)},documentTypes:function(e,t,r){return"word"==e&&s.hasOwnProperty(t.current())?(o="tag",r.context.type):D.atBlock(e,t,r)},atBlock:function(e,t,r){if("("==e)return M(r,t,"atBlock_parens")
if("}"==e||";"==e)return O(e,t,r)
if("{"==e)return N(r)&&M(r,t,y?"block":"top")
if("interpolation"==e)return M(r,t,"interpolation")
if("word"==e){var n=t.current().toLowerCase()
o="only"==n||"not"==n||"and"==n||"or"==n?"keyword":c.hasOwnProperty(n)?"attribute":u.hasOwnProperty(n)?"property":d.hasOwnProperty(n)?"keyword":f.hasOwnProperty(n)?"property":h.hasOwnProperty(n)?x?"string-2":"property":v.hasOwnProperty(n)?"atom":m.hasOwnProperty(n)?"keyword":"error"}return r.context.type},atComponentBlock:function(e,t,r){return"}"==e?O(e,t,r):"{"==e?N(r)&&M(r,t,y?"block":"top",!1):("word"==e&&(o="error"),r.context.type)},atBlock_parens:function(e,t,r){return")"==e?N(r):"{"==e||"}"==e?O(e,t,r,2):D.atBlock(e,t,r)},restricted_atBlock_before:function(e,t,r){return"{"==e?M(r,t,"restricted_atBlock"):"word"==e&&"@counter-style"==r.stateArg?(o="variable","restricted_atBlock_before"):A(e,t,r)},restricted_atBlock:function(e,t,r){return"}"==e?(r.stateArg=null,N(r)):"word"==e?(o="@font-face"==r.stateArg&&!p.hasOwnProperty(t.current().toLowerCase())||"@counter-style"==r.stateArg&&!g.hasOwnProperty(t.current().toLowerCase())?"error":"property","maybeprop"):"restricted_atBlock"},keyframes:function(e,t,r){return"word"==e?(o="variable","keyframes"):"{"==e?M(r,t,"top"):A(e,t,r)},at:function(e,t,r){return";"==e?N(r):"{"==e||"}"==e?O(e,t,r):("word"==e?o="tag":"hash"==e&&(o="builtin"),"at")},interpolation:function(e,t,r){return"}"==e?N(r):"{"==e||";"==e?O(e,t,r):("word"==e?o="variable":"variable"!=e&&"("!=e&&")"!=e&&(o="error"),"interpolation")}}
return{startState:function(e){return{tokenize:null,state:n?"block":"top",stateArg:null,context:new L(n?"block":"top",e||0,null)}},token:function(e,t){if(!t.tokenize&&e.eatSpace())return null
var r=(t.tokenize||C)(e,t)
return r&&"object"==typeof r&&(i=r[1],r=r[0]),o=r,"comment"!=i&&(t.state=D[t.state](i,e,t)),o},indent:function(e,t){var r=e.context,n=t&&t.charAt(0),i=r.indent
return"prop"!=r.type||"}"!=n&&")"!=n||(r=r.prev),r.prev&&("}"!=n||"block"!=r.type&&"top"!=r.type&&"interpolation"!=r.type&&"restricted_atBlock"!=r.type?(")"!=n||"parens"!=r.type&&"atBlock_parens"!=r.type)&&("{"!=n||"at"!=r.type&&"atBlock"!=r.type)||(i=Math.max(0,r.indent-a)):i=(r=r.prev).indent),i},electricChars:"}",blockCommentStart:"/*",blockCommentEnd:"*/",blockCommentContinue:" * ",lineComment:b,fold:"brace"}})
var r=["domain","regexp","url","url-prefix"],n=t(r),i=["all","aural","braille","handheld","print","projection","screen","tty","tv","embossed"],o=t(i),a=["width","min-width","max-width","height","min-height","max-height","device-width","min-device-width","max-device-width","device-height","min-device-height","max-device-height","aspect-ratio","min-aspect-ratio","max-aspect-ratio","device-aspect-ratio","min-device-aspect-ratio","max-device-aspect-ratio","color","min-color","max-color","color-index","min-color-index","max-color-index","monochrome","min-monochrome","max-monochrome","resolution","min-resolution","max-resolution","scan","grid","orientation","device-pixel-ratio","min-device-pixel-ratio","max-device-pixel-ratio","pointer","any-pointer","hover","any-hover","prefers-color-scheme","dynamic-range","video-dynamic-range"],l=t(a),s=["landscape","portrait","none","coarse","fine","on-demand","hover","interlace","progressive","dark","light","standard","high"],c=t(s),u=["align-content","align-items","align-self","alignment-adjust","alignment-baseline","all","anchor-point","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","appearance","azimuth","backdrop-filter","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-position-x","background-position-y","background-repeat","background-size","baseline-shift","binding","bleed","block-size","bookmark-label","bookmark-level","bookmark-state","bookmark-target","border","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","color","color-profile","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","counter-increment","counter-reset","crop","cue","cue-after","cue-before","cursor","direction","display","dominant-baseline","drop-initial-after-adjust","drop-initial-after-align","drop-initial-before-adjust","drop-initial-before-align","drop-initial-size","drop-initial-value","elevation","empty-cells","fit","fit-content","fit-position","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","float-offset","flow-from","flow-into","font","font-family","font-feature-settings","font-kerning","font-language-override","font-optical-sizing","font-size","font-size-adjust","font-stretch","font-style","font-synthesis","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-gap","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-gap","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","inline-box-align","inset","inset-block","inset-block-end","inset-block-start","inset-inline","inset-inline-end","inset-inline-start","isolation","justify-content","justify-items","justify-self","left","letter-spacing","line-break","line-height","line-height-step","line-stacking","line-stacking-ruby","line-stacking-shift","line-stacking-strategy","list-style","list-style-image","list-style-position","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","marks","marquee-direction","marquee-loop","marquee-play-count","marquee-speed","marquee-style","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","move-to","nav-down","nav-index","nav-left","nav-right","nav-up","object-fit","object-position","offset","offset-anchor","offset-distance","offset-path","offset-position","offset-rotate","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-style","overflow-wrap","overflow-x","overflow-y","padding","padding-bottom","padding-left","padding-right","padding-top","page","page-break-after","page-break-before","page-break-inside","page-policy","pause","pause-after","pause-before","perspective","perspective-origin","pitch","pitch-range","place-content","place-items","place-self","play-during","position","presentation-level","punctuation-trim","quotes","region-break-after","region-break-before","region-break-inside","region-fragment","rendering-intent","resize","rest","rest-after","rest-before","richness","right","rotate","rotation","rotation-point","row-gap","ruby-align","ruby-overhang","ruby-position","ruby-span","scale","scroll-behavior","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-type","shape-image-threshold","shape-inside","shape-margin","shape-outside","size","speak","speak-as","speak-header","speak-numeral","speak-punctuation","speech-rate","stress","string-set","tab-size","table-layout","target","target-name","target-new","target-position","text-align","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip","text-decoration-skip-ink","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-height","text-indent","text-justify","text-orientation","text-outline","text-overflow","text-rendering","text-shadow","text-size-adjust","text-space-collapse","text-transform","text-underline-position","text-wrap","top","touch-action","transform","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","translate","unicode-bidi","user-select","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index","clip-path","clip-rule","mask","enable-background","filter","flood-color","flood-opacity","lighting-color","stop-color","stop-opacity","pointer-events","color-interpolation","color-interpolation-filters","color-rendering","fill","fill-opacity","fill-rule","image-rendering","marker","marker-end","marker-mid","marker-start","paint-order","shape-rendering","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-rendering","baseline-shift","dominant-baseline","glyph-orientation-horizontal","glyph-orientation-vertical","text-anchor","writing-mode"],d=t(u),f=["accent-color","aspect-ratio","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","content-visibility","margin-block","margin-block-end","margin-block-start","margin-inline","margin-inline-end","margin-inline-start","overflow-anchor","overscroll-behavior","padding-block","padding-block-end","padding-block-start","padding-inline","padding-inline-end","padding-inline-start","scroll-snap-stop","scrollbar-3d-light-color","scrollbar-arrow-color","scrollbar-base-color","scrollbar-dark-shadow-color","scrollbar-face-color","scrollbar-highlight-color","scrollbar-shadow-color","scrollbar-track-color","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","shape-inside","zoom"],h=t(f),p=t(["font-display","font-family","src","unicode-range","font-variant","font-feature-settings","font-stretch","font-weight","font-style"]),g=t(["additive-symbols","fallback","negative","pad","prefix","range","speak-as","suffix","symbols","system"]),m=["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkgrey","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightgrey","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","rebeccapurple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"],v=t(m),y=["above","absolute","activeborder","additive","activecaption","afar","after-white-space","ahead","alias","all","all-scroll","alphabetic","alternate","always","amharic","amharic-abegede","antialiased","appworkspace","arabic-indic","armenian","asterisks","attr","auto","auto-flow","avoid","avoid-column","avoid-page","avoid-region","axis-pan","background","backwards","baseline","below","bidi-override","binary","bengali","blink","block","block-axis","blur","bold","bolder","border","border-box","both","bottom","break","break-all","break-word","brightness","bullets","button","buttonface","buttonhighlight","buttonshadow","buttontext","calc","cambodian","capitalize","caps-lock-indicator","caption","captiontext","caret","cell","center","checkbox","circle","cjk-decimal","cjk-earthly-branch","cjk-heavenly-stem","cjk-ideographic","clear","clip","close-quote","col-resize","collapse","color","color-burn","color-dodge","column","column-reverse","compact","condensed","conic-gradient","contain","content","contents","content-box","context-menu","continuous","contrast","copy","counter","counters","cover","crop","cross","crosshair","cubic-bezier","currentcolor","cursive","cyclic","darken","dashed","decimal","decimal-leading-zero","default","default-button","dense","destination-atop","destination-in","destination-out","destination-over","devanagari","difference","disc","discard","disclosure-closed","disclosure-open","document","dot-dash","dot-dot-dash","dotted","double","down","drop-shadow","e-resize","ease","ease-in","ease-in-out","ease-out","element","ellipse","ellipsis","embed","end","ethiopic","ethiopic-abegede","ethiopic-abegede-am-et","ethiopic-abegede-gez","ethiopic-abegede-ti-er","ethiopic-abegede-ti-et","ethiopic-halehame-aa-er","ethiopic-halehame-aa-et","ethiopic-halehame-am-et","ethiopic-halehame-gez","ethiopic-halehame-om-et","ethiopic-halehame-sid-et","ethiopic-halehame-so-et","ethiopic-halehame-ti-er","ethiopic-halehame-ti-et","ethiopic-halehame-tig","ethiopic-numeric","ew-resize","exclusion","expanded","extends","extra-condensed","extra-expanded","fantasy","fast","fill","fill-box","fixed","flat","flex","flex-end","flex-start","footnotes","forwards","from","geometricPrecision","georgian","grayscale","graytext","grid","groove","gujarati","gurmukhi","hand","hangul","hangul-consonant","hard-light","hebrew","help","hidden","hide","higher","highlight","highlighttext","hiragana","hiragana-iroha","horizontal","hsl","hsla","hue","hue-rotate","icon","ignore","inactiveborder","inactivecaption","inactivecaptiontext","infinite","infobackground","infotext","inherit","initial","inline","inline-axis","inline-block","inline-flex","inline-grid","inline-table","inset","inside","intrinsic","invert","italic","japanese-formal","japanese-informal","justify","kannada","katakana","katakana-iroha","keep-all","khmer","korean-hangul-formal","korean-hanja-formal","korean-hanja-informal","landscape","lao","large","larger","left","level","lighter","lighten","line-through","linear","linear-gradient","lines","list-item","listbox","listitem","local","logical","loud","lower","lower-alpha","lower-armenian","lower-greek","lower-hexadecimal","lower-latin","lower-norwegian","lower-roman","lowercase","ltr","luminosity","malayalam","manipulation","match","matrix","matrix3d","media-play-button","media-slider","media-sliderthumb","media-volume-slider","media-volume-sliderthumb","medium","menu","menulist","menulist-button","menutext","message-box","middle","min-intrinsic","mix","mongolian","monospace","move","multiple","multiple_mask_images","multiply","myanmar","n-resize","narrower","ne-resize","nesw-resize","no-close-quote","no-drop","no-open-quote","no-repeat","none","normal","not-allowed","nowrap","ns-resize","numbers","numeric","nw-resize","nwse-resize","oblique","octal","opacity","open-quote","optimizeLegibility","optimizeSpeed","oriya","oromo","outset","outside","outside-shape","overlay","overline","padding","padding-box","painted","page","paused","persian","perspective","pinch-zoom","plus-darker","plus-lighter","pointer","polygon","portrait","pre","pre-line","pre-wrap","preserve-3d","progress","push-button","radial-gradient","radio","read-only","read-write","read-write-plaintext-only","rectangle","region","relative","repeat","repeating-linear-gradient","repeating-radial-gradient","repeating-conic-gradient","repeat-x","repeat-y","reset","reverse","rgb","rgba","ridge","right","rotate","rotate3d","rotateX","rotateY","rotateZ","round","row","row-resize","row-reverse","rtl","run-in","running","s-resize","sans-serif","saturate","saturation","scale","scale3d","scaleX","scaleY","scaleZ","screen","scroll","scrollbar","scroll-position","se-resize","searchfield","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","self-start","self-end","semi-condensed","semi-expanded","separate","sepia","serif","show","sidama","simp-chinese-formal","simp-chinese-informal","single","skew","skewX","skewY","skip-white-space","slide","slider-horizontal","slider-vertical","sliderthumb-horizontal","sliderthumb-vertical","slow","small","small-caps","small-caption","smaller","soft-light","solid","somali","source-atop","source-in","source-out","source-over","space","space-around","space-between","space-evenly","spell-out","square","square-button","start","static","status-bar","stretch","stroke","stroke-box","sub","subpixel-antialiased","svg_masks","super","sw-resize","symbolic","symbols","system-ui","table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row","table-row-group","tamil","telugu","text","text-bottom","text-top","textarea","textfield","thai","thick","thin","threeddarkshadow","threedface","threedhighlight","threedlightshadow","threedshadow","tibetan","tigre","tigrinya-er","tigrinya-er-abegede","tigrinya-et","tigrinya-et-abegede","to","top","trad-chinese-formal","trad-chinese-informal","transform","translate","translate3d","translateX","translateY","translateZ","transparent","ultra-condensed","ultra-expanded","underline","unidirectional-pan","unset","up","upper-alpha","upper-armenian","upper-greek","upper-hexadecimal","upper-latin","upper-norwegian","upper-roman","uppercase","urdu","url","var","vertical","vertical-text","view-box","visible","visibleFill","visiblePainted","visibleStroke","visual","w-resize","wait","wave","wider","window","windowframe","windowtext","words","wrap","wrap-reverse","x-large","x-small","xor","xx-large","xx-small"],b=t(y),w=r.concat(i).concat(a).concat(s).concat(u).concat(f).concat(m).concat(y)
function x(e,t){for(var r,n=!1;null!=(r=e.next());){if(n&&"/"==r){t.tokenize=null
break}n="*"==r}return["comment","comment"]}e.registerHelper("hintWords","css",w),e.defineMIME("text/css",{documentTypes:n,mediaTypes:o,mediaFeatures:l,mediaValueKeywords:c,propertyKeywords:d,nonStandardPropertyKeywords:h,fontProperties:p,counterDescriptors:g,colorKeywords:v,valueKeywords:b,tokenHooks:{"/":function(e,t){return!!e.eat("*")&&(t.tokenize=x,x(e,t))}},name:"css"}),e.defineMIME("text/x-scss",{mediaTypes:o,mediaFeatures:l,mediaValueKeywords:c,propertyKeywords:d,nonStandardPropertyKeywords:h,colorKeywords:v,valueKeywords:b,fontProperties:p,allowNested:!0,lineComment:"//",tokenHooks:{"/":function(e,t){return e.eat("/")?(e.skipToEnd(),["comment","comment"]):e.eat("*")?(t.tokenize=x,x(e,t)):["operator","operator"]},":":function(e){return!!e.match(/^\s*\{/,!1)&&[null,null]},$:function(e){return e.match(/^[\w-]+/),e.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"]},"#":function(e){return!!e.eat("{")&&[null,"interpolation"]}},name:"css",helperType:"scss"}),e.defineMIME("text/x-less",{mediaTypes:o,mediaFeatures:l,mediaValueKeywords:c,propertyKeywords:d,nonStandardPropertyKeywords:h,colorKeywords:v,valueKeywords:b,fontProperties:p,allowNested:!0,lineComment:"//",tokenHooks:{"/":function(e,t){return e.eat("/")?(e.skipToEnd(),["comment","comment"]):e.eat("*")?(t.tokenize=x,x(e,t)):["operator","operator"]},"@":function(e){return e.eat("{")?[null,"interpolation"]:!e.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i,!1)&&(e.eatWhile(/[\w\\\-]/),e.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"])},"&":function(){return["atom","atom"]}},name:"css",helperType:"less"}),e.defineMIME("text/x-gss",{documentTypes:n,mediaTypes:o,mediaFeatures:l,propertyKeywords:d,nonStandardPropertyKeywords:h,fontProperties:p,counterDescriptors:g,colorKeywords:v,valueKeywords:b,supportsAtComponent:!0,tokenHooks:{"/":function(e,t){return!!e.eat("*")&&(t.tokenize=x,x(e,t))}},name:"css",helperType:"gss"})}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("../xml/xml"),require("../javascript/javascript"),require("../css/css")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../xml/xml","../javascript/javascript","../css/css"],e):e(CodeMirror)}(function(e){"use strict"
var t={script:[["lang",/(javascript|babel)/i,"javascript"],["type",/^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i,"javascript"],["type",/./,"text/plain"],[null,null,"javascript"]],style:[["lang",/^css$/i,"css"],["type",/^(text\/)?(x-)?(stylesheet|css)$/i,"css"],["type",/./,"text/plain"],[null,null,"css"]]},r={}
function n(e,t){var n=e.match(function(e){return r[e]||(r[e]=new RegExp("\\s+"+e+"\\s*=\\s*('|\")?([^'\"]+)('|\")?\\s*"))}(t))
return n?/^\s*(.*?)\s*$/.exec(n[2])[1]:""}function i(e,t){return new RegExp((t?"^":"")+"</\\s*"+e+"\\s*>","i")}function o(e,t){for(var r in e)for(var n=t[r]||(t[r]=[]),i=e[r],o=i.length-1;o>=0;o--)n.unshift(i[o])}e.defineMode("htmlmixed",function(r,a){var l=e.getMode(r,{name:"xml",htmlMode:!0,multilineTagIndentFactor:a.multilineTagIndentFactor,multilineTagIndentPastTag:a.multilineTagIndentPastTag,allowMissingTagName:a.allowMissingTagName}),s={},c=a&&a.tags,u=a&&a.scriptTypes
if(o(t,s),c&&o(c,s),u)for(var d=u.length-1;d>=0;d--)s.script.unshift(["type",u[d].matches,u[d].mode])
function f(t,o){var a,c=l.token(t,o.htmlState),u=/\btag\b/.test(c)
if(u&&!/[<>\s\/]/.test(t.current())&&(a=o.htmlState.tagName&&o.htmlState.tagName.toLowerCase())&&s.hasOwnProperty(a))o.inTag=a+" "
else if(o.inTag&&u&&/>$/.test(t.current())){var d=/^([\S]+) (.*)/.exec(o.inTag)
o.inTag=null
var h=">"==t.current()&&function(e,t){for(var r=0;r<e.length;r++){var i=e[r]
if(!i[0]||i[1].test(n(t,i[0])))return i[2]}}(s[d[1]],d[2]),p=e.getMode(r,h),g=i(d[1],!0),m=i(d[1],!1)
o.token=function(e,t){return e.match(g,!1)?(t.token=f,t.localState=t.localMode=null,null):function(e,t,r){var n=e.current(),i=n.search(t)
return i>-1?e.backUp(n.length-i):n.match(/<\/?$/)&&(e.backUp(n.length),e.match(t,!1)||e.match(n)),r}(e,m,t.localMode.token(e,t.localState))},o.localMode=p,o.localState=e.startState(p,l.indent(o.htmlState,"",""))}else o.inTag&&(o.inTag+=t.current(),t.eol()&&(o.inTag+=" "))
return c}return{startState:function(){return{token:f,inTag:null,localMode:null,localState:null,htmlState:e.startState(l)}},copyState:function(t){var r
return t.localState&&(r=e.copyState(t.localMode,t.localState)),{token:t.token,inTag:t.inTag,localMode:t.localMode,localState:r,htmlState:e.copyState(l,t.htmlState)}},token:function(e,t){return t.token(e,t)},indent:function(t,r,n){return!t.localMode||/^\s*<\//.test(r)?l.indent(t.htmlState,r,n):t.localMode.indent?t.localMode.indent(t.localState,r,n):e.Pass},innerMode:function(e){return{state:e.localState||e.htmlState,mode:e.localMode||l}}}},"xml","javascript","css"),e.defineMIME("text/html","htmlmixed")}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
e.defineMode("javascript",function(t,r){var n,i,o=t.indentUnit,a=r.statementIndent,l=r.jsonld,s=r.json||l,c=!1!==r.trackScope,u=r.typescript,d=r.wordCharacters||/[\w$\xa1-\uffff]/,f=function(){function e(e){return{type:e,style:"keyword"}}var t=e("keyword a"),r=e("keyword b"),n=e("keyword c"),i=e("keyword d"),o=e("operator"),a={type:"atom",style:"atom"}
return{if:e("if"),while:t,with:t,else:r,do:r,try:r,finally:r,return:i,break:i,continue:i,new:e("new"),delete:n,void:n,throw:n,debugger:e("debugger"),var:e("var"),const:e("var"),let:e("var"),function:e("function"),catch:e("catch"),for:e("for"),switch:e("switch"),case:e("case"),default:e("default"),in:o,typeof:o,instanceof:o,true:a,false:a,null:a,undefined:a,NaN:a,Infinity:a,this:e("this"),class:e("class"),super:e("atom"),yield:n,export:e("export"),import:e("import"),extends:n,await:n}}(),h=/[+\-*&%=<>!?|~^@]/,p=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/
function g(e,t,r){return n=e,i=r,t}function m(e,t){var r,n=e.next()
if('"'==n||"'"==n)return t.tokenize=(r=n,function(e,t){var n,i=!1
if(l&&"@"==e.peek()&&e.match(p))return t.tokenize=m,g("jsonld-keyword","meta")
for(;null!=(n=e.next())&&(n!=r||i);)i=!i&&"\\"==n
return i||(t.tokenize=m),g("string","string")}),t.tokenize(e,t)
if("."==n&&e.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))return g("number","number")
if("."==n&&e.match(".."))return g("spread","meta")
if(/[\[\]{}\(\),;\:\.]/.test(n))return g(n)
if("="==n&&e.eat(">"))return g("=>","operator")
if("0"==n&&e.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))return g("number","number")
if(/\d/.test(n))return e.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/),g("number","number")
if("/"==n)return e.eat("*")?(t.tokenize=v,v(e,t)):e.eat("/")?(e.skipToEnd(),g("comment","comment")):Je(e,t,1)?(function(e){for(var t,r=!1,n=!1;null!=(t=e.next());){if(!r){if("/"==t&&!n)return
"["==t?n=!0:n&&"]"==t&&(n=!1)}r=!r&&"\\"==t}}(e),e.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),g("regexp","string-2")):(e.eat("="),g("operator","operator",e.current()))
if("`"==n)return t.tokenize=y,y(e,t)
if("#"==n&&"!"==e.peek())return e.skipToEnd(),g("meta","meta")
if("#"==n&&e.eatWhile(d))return g("variable","property")
if("<"==n&&e.match("!--")||"-"==n&&e.match("->")&&!/\S/.test(e.string.slice(0,e.start)))return e.skipToEnd(),g("comment","comment")
if(h.test(n))return">"==n&&t.lexical&&">"==t.lexical.type||(e.eat("=")?"!"!=n&&"="!=n||e.eat("="):/[<>*+\-|&?]/.test(n)&&(e.eat(n),">"==n&&e.eat(n))),"?"==n&&e.eat(".")?g("."):g("operator","operator",e.current())
if(d.test(n)){e.eatWhile(d)
var i=e.current()
if("."!=t.lastType){if(f.propertyIsEnumerable(i)){var o=f[i]
return g(o.type,o.style,i)}if("async"==i&&e.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/,!1))return g("async","keyword",i)}return g("variable","variable",i)}}function v(e,t){for(var r,n=!1;r=e.next();){if("/"==r&&n){t.tokenize=m
break}n="*"==r}return g("comment","comment")}function y(e,t){for(var r,n=!1;null!=(r=e.next());){if(!n&&("`"==r||"$"==r&&e.eat("{"))){t.tokenize=m
break}n=!n&&"\\"==r}return g("quasi","string-2",e.current())}function b(e,t){t.fatArrowAt&&(t.fatArrowAt=null)
var r=e.string.indexOf("=>",e.start)
if(!(r<0)){if(u){var n=/:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(e.string.slice(e.start,r))
n&&(r=n.index)}for(var i=0,o=!1,a=r-1;a>=0;--a){var l=e.string.charAt(a),s="([{}])".indexOf(l)
if(s>=0&&s<3){if(!i){++a
break}if(0==--i){"("==l&&(o=!0)
break}}else if(s>=3&&s<6)++i
else if(d.test(l))o=!0
else if(/["'\/`]/.test(l))for(;;--a){if(0==a)return
if(e.string.charAt(a-1)==l&&"\\"!=e.string.charAt(a-2)){a--
break}}else if(o&&!i){++a
break}}o&&!i&&(t.fatArrowAt=a)}}var w={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,this:!0,import:!0,"jsonld-keyword":!0}
function x(e,t,r,n,i,o){this.indented=e,this.column=t,this.type=r,this.prev=i,this.info=o,null!=n&&(this.align=n)}function k(e,t){if(!c)return!1
for(var r=e.localVars;r;r=r.next)if(r.name==t)return!0
for(var n=e.context;n;n=n.prev)for(r=n.vars;r;r=r.next)if(r.name==t)return!0}function C(e,t,r,n,i){var o=e.cc
for(S.state=e,S.stream=i,S.marked=null,S.cc=o,S.style=t,e.lexical.hasOwnProperty("align")||(e.lexical.align=!0);;)if((o.length?o.pop():s?V:B)(r,n)){for(;o.length&&o[o.length-1].lex;)o.pop()()
return S.marked?S.marked:"variable"==r&&k(e,n)?"variable-2":t}}var S={state:null,column:null,marked:null,cc:null}
function T(){for(var e=arguments.length-1;e>=0;e--)S.cc.push(arguments[e])}function L(){return T.apply(null,arguments),!0}function M(e,t){for(var r=t;r;r=r.next)if(r.name==e)return!0
return!1}function N(e){var t=S.state
if(S.marked="def",c){if(t.context)if("var"==t.lexical.info&&t.context&&t.context.block){var n=A(e,t.context)
if(null!=n)return void(t.context=n)}else if(!M(e,t.localVars))return void(t.localVars=new D(e,t.localVars))
r.globalVars&&!M(e,t.globalVars)&&(t.globalVars=new D(e,t.globalVars))}}function A(e,t){if(t){if(t.block){var r=A(e,t.prev)
return r?r==t.prev?t:new z(r,t.vars,!0):null}return M(e,t.vars)?t:new z(t.prev,new D(e,t.vars),!1)}return null}function O(e){return"public"==e||"private"==e||"protected"==e||"abstract"==e||"readonly"==e}function z(e,t,r){this.prev=e,this.vars=t,this.block=r}function D(e,t){this.name=e,this.next=t}var W=new D("this",new D("arguments",null))
function P(){S.state.context=new z(S.state.context,S.state.localVars,!1),S.state.localVars=W}function H(){S.state.context=new z(S.state.context,S.state.localVars,!0),S.state.localVars=null}function E(){S.state.localVars=S.state.context.vars,S.state.context=S.state.context.prev}function F(e,t){var r=function(){var r=S.state,n=r.indented
if("stat"==r.lexical.type)n=r.lexical.indented
else for(var i=r.lexical;i&&")"==i.type&&i.align;i=i.prev)n=i.indented
r.lexical=new x(n,S.stream.column(),e,null,r.lexical,t)}
return r.lex=!0,r}function I(){var e=S.state
e.lexical.prev&&(")"==e.lexical.type&&(e.indented=e.lexical.indented),e.lexical=e.lexical.prev)}function R(e){return function t(r){return r==e?L():";"==e||"}"==r||")"==r||"]"==r?T():L(t)}}function B(e,t){return"var"==e?L(F("vardef",t),Se,R(";"),I):"keyword a"==e?L(F("form"),G,B,I):"keyword b"==e?L(F("form"),B,I):"keyword d"==e?S.stream.match(/^\s*$/,!1)?L():L(F("stat"),q,R(";"),I):"debugger"==e?L(R(";")):"{"==e?L(F("}"),H,se,I,E):";"==e?L():"if"==e?("else"==S.state.lexical.info&&S.state.cc[S.state.cc.length-1]==I&&S.state.cc.pop()(),L(F("form"),G,B,I,Oe)):"function"==e?L(Pe):"for"==e?L(F("form"),H,ze,B,E,I):"class"==e||u&&"interface"==t?(S.marked="keyword",L(F("form","class"==e?e:t),Re,I)):"variable"==e?u&&"declare"==t?(S.marked="keyword",L(B)):u&&("module"==t||"enum"==t||"type"==t)&&S.stream.match(/^\s*\w/,!1)?(S.marked="keyword","enum"==t?L(Ze):"type"==t?L(Ee,R("operator"),he,R(";")):L(F("form"),Te,R("{"),F("}"),se,I,I)):u&&"namespace"==t?(S.marked="keyword",L(F("form"),V,B,I)):u&&"abstract"==t?(S.marked="keyword",L(B)):L(F("stat"),te):"switch"==e?L(F("form"),G,R("{"),F("}","switch"),H,se,I,I,E):"case"==e?L(V,R(":")):"default"==e?L(R(":")):"catch"==e?L(F("form"),P,j,B,I,E):"export"==e?L(F("stat"),Ke,I):"import"==e?L(F("stat"),Ue,I):"async"==e?L(B):"@"==t?L(V,B):T(F("stat"),V,R(";"),I)}function j(e){if("("==e)return L(Fe,R(")"))}function V(e,t){return U(e,t,!1)}function K(e,t){return U(e,t,!0)}function G(e){return"("!=e?T():L(F(")"),q,R(")"),I)}function U(e,t,r){if(S.state.fatArrowAt==S.stream.start){var n=r?Q:Z
if("("==e)return L(P,F(")"),ae(Fe,")"),I,R("=>"),n,E)
if("variable"==e)return T(P,Te,R("=>"),n,E)}var i=r?$:_
return w.hasOwnProperty(e)?L(i):"function"==e?L(Pe,i):"class"==e||u&&"interface"==t?(S.marked="keyword",L(F("form"),Ie,I)):"keyword c"==e||"async"==e?L(r?K:V):"("==e?L(F(")"),q,R(")"),I,i):"operator"==e||"spread"==e?L(r?K:V):"["==e?L(F("]"),Ye,I,i):"{"==e?le(ne,"}",null,i):"quasi"==e?T(X,i):"new"==e?L(function(e){return function(t){return"."==t?L(e?ee:J):"variable"==t&&u?L(xe,e?$:_):T(e?K:V)}}(r)):L()}function q(e){return e.match(/[;\}\)\],]/)?T():T(V)}function _(e,t){return","==e?L(q):$(e,t,!1)}function $(e,t,r){var n=0==r?_:$,i=0==r?V:K
return"=>"==e?L(P,r?Q:Z,E):"operator"==e?/\+\+|--/.test(t)||u&&"!"==t?L(n):u&&"<"==t&&S.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/,!1)?L(F(">"),ae(he,">"),I,n):"?"==t?L(V,R(":"),i):L(i):"quasi"==e?T(X,n):";"!=e?"("==e?le(K,")","call",n):"."==e?L(re,n):"["==e?L(F("]"),q,R("]"),I,n):u&&"as"==t?(S.marked="keyword",L(he,n)):"regexp"==e?(S.state.lastType=S.marked="operator",S.stream.backUp(S.stream.pos-S.stream.start-1),L(i)):void 0:void 0}function X(e,t){return"quasi"!=e?T():"${"!=t.slice(t.length-2)?L(X):L(q,Y)}function Y(e){if("}"==e)return S.marked="string-2",S.state.tokenize=y,L(X)}function Z(e){return b(S.stream,S.state),T("{"==e?B:V)}function Q(e){return b(S.stream,S.state),T("{"==e?B:K)}function J(e,t){if("target"==t)return S.marked="keyword",L(_)}function ee(e,t){if("target"==t)return S.marked="keyword",L($)}function te(e){return":"==e?L(I,B):T(_,R(";"),I)}function re(e){if("variable"==e)return S.marked="property",L()}function ne(e,t){return"async"==e?(S.marked="property",L(ne)):"variable"==e||"keyword"==S.style?(S.marked="property","get"==t||"set"==t?L(ie):(u&&S.state.fatArrowAt==S.stream.start&&(r=S.stream.match(/^\s*:\s*/,!1))&&(S.state.fatArrowAt=S.stream.pos+r[0].length),L(oe))):"number"==e||"string"==e?(S.marked=l?"property":S.style+" property",L(oe)):"jsonld-keyword"==e?L(oe):u&&O(t)?(S.marked="keyword",L(ne)):"["==e?L(V,ce,R("]"),oe):"spread"==e?L(K,oe):"*"==t?(S.marked="keyword",L(ne)):":"==e?T(oe):void 0
var r}function ie(e){return"variable"!=e?T(oe):(S.marked="property",L(Pe))}function oe(e){return":"==e?L(K):"("==e?T(Pe):void 0}function ae(e,t,r){function n(i,o){if(r?r.indexOf(i)>-1:","==i){var a=S.state.lexical
return"call"==a.info&&(a.pos=(a.pos||0)+1),L(function(r,n){return r==t||n==t?T():T(e)},n)}return i==t||o==t?L():r&&r.indexOf(";")>-1?T(e):L(R(t))}return function(r,i){return r==t||i==t?L():T(e,n)}}function le(e,t,r){for(var n=3;n<arguments.length;n++)S.cc.push(arguments[n])
return L(F(t,r),ae(e,t),I)}function se(e){return"}"==e?L():T(B,se)}function ce(e,t){if(u){if(":"==e)return L(he)
if("?"==t)return L(ce)}}function ue(e,t){if(u&&(":"==e||"in"==t))return L(he)}function de(e){if(u&&":"==e)return S.stream.match(/^\s*\w+\s+is\b/,!1)?L(V,fe,he):L(he)}function fe(e,t){if("is"==t)return S.marked="keyword",L()}function he(e,t){return"keyof"==t||"typeof"==t||"infer"==t||"readonly"==t?(S.marked="keyword",L("typeof"==t?K:he)):"variable"==e||"void"==t?(S.marked="type",L(we)):"|"==t||"&"==t?L(he):"string"==e||"number"==e||"atom"==e?L(we):"["==e?L(F("]"),ae(he,"]",","),I,we):"{"==e?L(F("}"),ge,I,we):"("==e?L(ae(be,")"),pe,we):"<"==e?L(ae(he,">"),he):"quasi"==e?T(ve,we):void 0}function pe(e){if("=>"==e)return L(he)}function ge(e){return e.match(/[\}\)\]]/)?L():","==e||";"==e?L(ge):T(me,ge)}function me(e,t){return"variable"==e||"keyword"==S.style?(S.marked="property",L(me)):"?"==t||"number"==e||"string"==e?L(me):":"==e?L(he):"["==e?L(R("variable"),ue,R("]"),me):"("==e?T(He,me):e.match(/[;\}\)\],]/)?void 0:L()}function ve(e,t){return"quasi"!=e?T():"${"!=t.slice(t.length-2)?L(ve):L(he,ye)}function ye(e){if("}"==e)return S.marked="string-2",S.state.tokenize=y,L(ve)}function be(e,t){return"variable"==e&&S.stream.match(/^\s*[?:]/,!1)||"?"==t?L(be):":"==e?L(he):"spread"==e?L(be):T(he)}function we(e,t){return"<"==t?L(F(">"),ae(he,">"),I,we):"|"==t||"."==e||"&"==t?L(he):"["==e?L(he,R("]"),we):"extends"==t||"implements"==t?(S.marked="keyword",L(he)):"?"==t?L(he,R(":"),he):void 0}function xe(e,t){if("<"==t)return L(F(">"),ae(he,">"),I,we)}function ke(){return T(he,Ce)}function Ce(e,t){if("="==t)return L(he)}function Se(e,t){return"enum"==t?(S.marked="keyword",L(Ze)):T(Te,ce,Ne,Ae)}function Te(e,t){return u&&O(t)?(S.marked="keyword",L(Te)):"variable"==e?(N(t),L()):"spread"==e?L(Te):"["==e?le(Me,"]"):"{"==e?le(Le,"}"):void 0}function Le(e,t){return"variable"!=e||S.stream.match(/^\s*:/,!1)?("variable"==e&&(S.marked="property"),"spread"==e?L(Te):"}"==e?T():"["==e?L(V,R("]"),R(":"),Le):L(R(":"),Te,Ne)):(N(t),L(Ne))}function Me(){return T(Te,Ne)}function Ne(e,t){if("="==t)return L(K)}function Ae(e){if(","==e)return L(Se)}function Oe(e,t){if("keyword b"==e&&"else"==t)return L(F("form","else"),B,I)}function ze(e,t){return"await"==t?L(ze):"("==e?L(F(")"),De,I):void 0}function De(e){return"var"==e?L(Se,We):"variable"==e?L(We):T(We)}function We(e,t){return")"==e?L():";"==e?L(We):"in"==t||"of"==t?(S.marked="keyword",L(V,We)):T(V,We)}function Pe(e,t){return"*"==t?(S.marked="keyword",L(Pe)):"variable"==e?(N(t),L(Pe)):"("==e?L(P,F(")"),ae(Fe,")"),I,de,B,E):u&&"<"==t?L(F(">"),ae(ke,">"),I,Pe):void 0}function He(e,t){return"*"==t?(S.marked="keyword",L(He)):"variable"==e?(N(t),L(He)):"("==e?L(P,F(")"),ae(Fe,")"),I,de,E):u&&"<"==t?L(F(">"),ae(ke,">"),I,He):void 0}function Ee(e,t){return"keyword"==e||"variable"==e?(S.marked="type",L(Ee)):"<"==t?L(F(">"),ae(ke,">"),I):void 0}function Fe(e,t){return"@"==t&&L(V,Fe),"spread"==e?L(Fe):u&&O(t)?(S.marked="keyword",L(Fe)):u&&"this"==e?L(ce,Ne):T(Te,ce,Ne)}function Ie(e,t){return"variable"==e?Re(e,t):Be(e,t)}function Re(e,t){if("variable"==e)return N(t),L(Be)}function Be(e,t){return"<"==t?L(F(">"),ae(ke,">"),I,Be):"extends"==t||"implements"==t||u&&","==e?("implements"==t&&(S.marked="keyword"),L(u?he:V,Be)):"{"==e?L(F("}"),je,I):void 0}function je(e,t){return"async"==e||"variable"==e&&("static"==t||"get"==t||"set"==t||u&&O(t))&&S.stream.match(/^\s+#?[\w$\xa1-\uffff]/,!1)?(S.marked="keyword",L(je)):"variable"==e||"keyword"==S.style?(S.marked="property",L(Ve,je)):"number"==e||"string"==e?L(Ve,je):"["==e?L(V,ce,R("]"),Ve,je):"*"==t?(S.marked="keyword",L(je)):u&&"("==e?T(He,je):";"==e||","==e?L(je):"}"==e?L():"@"==t?L(V,je):void 0}function Ve(e,t){if("!"==t)return L(Ve)
if("?"==t)return L(Ve)
if(":"==e)return L(he,Ne)
if("="==t)return L(K)
var r=S.state.lexical.prev
return T(r&&"interface"==r.info?He:Pe)}function Ke(e,t){return"*"==t?(S.marked="keyword",L(Xe,R(";"))):"default"==t?(S.marked="keyword",L(V,R(";"))):"{"==e?L(ae(Ge,"}"),Xe,R(";")):T(B)}function Ge(e,t){return"as"==t?(S.marked="keyword",L(R("variable"))):"variable"==e?T(K,Ge):void 0}function Ue(e){return"string"==e?L():"("==e?T(V):"."==e?T(_):T(qe,_e,Xe)}function qe(e,t){return"{"==e?le(qe,"}"):("variable"==e&&N(t),"*"==t&&(S.marked="keyword"),L($e))}function _e(e){if(","==e)return L(qe,_e)}function $e(e,t){if("as"==t)return S.marked="keyword",L(qe)}function Xe(e,t){if("from"==t)return S.marked="keyword",L(V)}function Ye(e){return"]"==e?L():T(ae(K,"]"))}function Ze(){return T(F("form"),Te,R("{"),F("}"),ae(Qe,"}"),I,I)}function Qe(){return T(Te,Ne)}function Je(e,t,r){return t.tokenize==m&&/^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(t.lastType)||"quasi"==t.lastType&&/\{\s*$/.test(e.string.slice(0,e.pos-(r||0)))}return P.lex=H.lex=!0,E.lex=!0,I.lex=!0,{startState:function(e){var t={tokenize:m,lastType:"sof",cc:[],lexical:new x((e||0)-o,0,"block",!1),localVars:r.localVars,context:r.localVars&&new z(null,null,!1),indented:e||0}
return r.globalVars&&"object"==typeof r.globalVars&&(t.globalVars=r.globalVars),t},token:function(e,t){if(e.sol()&&(t.lexical.hasOwnProperty("align")||(t.lexical.align=!1),t.indented=e.indentation(),b(e,t)),t.tokenize!=v&&e.eatSpace())return null
var r=t.tokenize(e,t)
return"comment"==n?r:(t.lastType="operator"!=n||"++"!=i&&"--"!=i?n:"incdec",C(t,r,n,i,e))},indent:function(t,n){if(t.tokenize==v||t.tokenize==y)return e.Pass
if(t.tokenize!=m)return 0
var i,l=n&&n.charAt(0),s=t.lexical
if(!/^\s*else\b/.test(n))for(var c=t.cc.length-1;c>=0;--c){var u=t.cc[c]
if(u==I)s=s.prev
else if(u!=Oe&&u!=E)break}for(;("stat"==s.type||"form"==s.type)&&("}"==l||(i=t.cc[t.cc.length-1])&&(i==_||i==$)&&!/^[,\.=+\-*:?[\(]/.test(n));)s=s.prev
a&&")"==s.type&&"stat"==s.prev.type&&(s=s.prev)
var d=s.type,f=l==d
return"vardef"==d?s.indented+("operator"==t.lastType||","==t.lastType?s.info.length+1:0):"form"==d&&"{"==l?s.indented:"form"==d?s.indented+o:"stat"==d?s.indented+(function(e,t){return"operator"==e.lastType||","==e.lastType||h.test(t.charAt(0))||/[,.]/.test(t.charAt(0))}(t,n)?a||o:0):"switch"!=s.info||f||0==r.doubleIndentSwitch?s.align?s.column+(f?0:1):s.indented+(f?0:o):s.indented+(/^(?:case|default)\b/.test(n)?o:2*o)},electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:s?null:"/*",blockCommentEnd:s?null:"*/",blockCommentContinue:s?null:" * ",lineComment:s?null:"//",fold:"brace",closeBrackets:"()[]{}''\"\"``",helperType:s?"json":"javascript",jsonldMode:l,jsonMode:s,expressionAllowed:Je,skipExpression:function(t){C(t,"atom","atom","true",new e.StringStream("",2,null))}}}),e.registerHelper("wordChars","javascript",/[\w$]/),e.defineMIME("text/javascript","javascript"),e.defineMIME("text/ecmascript","javascript"),e.defineMIME("application/javascript","javascript"),e.defineMIME("application/x-javascript","javascript"),e.defineMIME("application/ecmascript","javascript"),e.defineMIME("application/json",{name:"javascript",json:!0}),e.defineMIME("application/x-json",{name:"javascript",json:!0}),e.defineMIME("application/manifest+json",{name:"javascript",json:!0}),e.defineMIME("application/ld+json",{name:"javascript",jsonld:!0}),e.defineMIME("text/typescript",{name:"javascript",typescript:!0}),e.defineMIME("application/typescript",{name:"javascript",typescript:!0})}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
var t={autoSelfClosers:{area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0,menuitem:!0},implicitlyClosed:{dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},contextGrabbers:{dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}},doNotIndent:{pre:!0},allowUnquoted:!0,allowMissing:!0,caseFold:!0},r={autoSelfClosers:{},implicitlyClosed:{},contextGrabbers:{},doNotIndent:{},allowUnquoted:!1,allowMissing:!1,allowMissingTagName:!1,caseFold:!1}
e.defineMode("xml",function(n,i){var o,a,l=n.indentUnit,s={},c=i.htmlMode?t:r
for(var u in c)s[u]=c[u]
for(var u in i)s[u]=i[u]
function d(e,t){function r(r){return t.tokenize=r,r(e,t)}var n=e.next()
return"<"==n?e.eat("!")?e.eat("[")?e.match("CDATA[")?r(h("atom","]]>")):null:e.match("--")?r(h("comment","--\x3e")):e.match("DOCTYPE",!0,!0)?(e.eatWhile(/[\w\._\-]/),r(p(1))):null:e.eat("?")?(e.eatWhile(/[\w\._\-]/),t.tokenize=h("meta","?>"),"meta"):(o=e.eat("/")?"closeTag":"openTag",t.tokenize=f,"tag bracket"):"&"==n?(e.eat("#")?e.eat("x")?e.eatWhile(/[a-fA-F\d]/)&&e.eat(";"):e.eatWhile(/[\d]/)&&e.eat(";"):e.eatWhile(/[\w\.\-:]/)&&e.eat(";"))?"atom":"error":(e.eatWhile(/[^&<]/),null)}function f(e,t){var r,n,i=e.next()
if(">"==i||"/"==i&&e.eat(">"))return t.tokenize=d,o=">"==i?"endTag":"selfcloseTag","tag bracket"
if("="==i)return o="equals",null
if("<"==i){t.tokenize=d,t.state=b,t.tagName=t.tagStart=null
var a=t.tokenize(e,t)
return a?a+" tag error":"tag error"}return/[\'\"]/.test(i)?(t.tokenize=(r=i,n=function(e,t){for(;!e.eol();)if(e.next()==r){t.tokenize=f
break}return"string"},n.isInAttribute=!0,n),t.stringStartCol=e.column(),t.tokenize(e,t)):(e.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/),"word")}function h(e,t){return function(r,n){for(;!r.eol();){if(r.match(t)){n.tokenize=d
break}r.next()}return e}}function p(e){return function(t,r){for(var n;null!=(n=t.next());){if("<"==n)return r.tokenize=p(e+1),r.tokenize(t,r)
if(">"==n){if(1==e){r.tokenize=d
break}return r.tokenize=p(e-1),r.tokenize(t,r)}}return"meta"}}function g(e){return e&&e.toLowerCase()}function m(e,t,r){this.prev=e.context,this.tagName=t||"",this.indent=e.indented,this.startOfLine=r,(s.doNotIndent.hasOwnProperty(t)||e.context&&e.context.noIndent)&&(this.noIndent=!0)}function v(e){e.context&&(e.context=e.context.prev)}function y(e,t){for(var r;;){if(!e.context)return
if(r=e.context.tagName,!s.contextGrabbers.hasOwnProperty(g(r))||!s.contextGrabbers[g(r)].hasOwnProperty(g(t)))return
v(e)}}function b(e,t,r){return"openTag"==e?(r.tagStart=t.column(),w):"closeTag"==e?x:b}function w(e,t,r){return"word"==e?(r.tagName=t.current(),a="tag",S):s.allowMissingTagName&&"endTag"==e?(a="tag bracket",S(e,t,r)):(a="error",w)}function x(e,t,r){if("word"==e){var n=t.current()
return r.context&&r.context.tagName!=n&&s.implicitlyClosed.hasOwnProperty(g(r.context.tagName))&&v(r),r.context&&r.context.tagName==n||!1===s.matchClosing?(a="tag",k):(a="tag error",C)}return s.allowMissingTagName&&"endTag"==e?(a="tag bracket",k(e,t,r)):(a="error",C)}function k(e,t,r){return"endTag"!=e?(a="error",k):(v(r),b)}function C(e,t,r){return a="error",k(e,0,r)}function S(e,t,r){if("word"==e)return a="attribute",T
if("endTag"==e||"selfcloseTag"==e){var n=r.tagName,i=r.tagStart
return r.tagName=r.tagStart=null,"selfcloseTag"==e||s.autoSelfClosers.hasOwnProperty(g(n))?y(r,n):(y(r,n),r.context=new m(r,n,i==r.indented)),b}return a="error",S}function T(e,t,r){return"equals"==e?L:(s.allowMissing||(a="error"),S(e,0,r))}function L(e,t,r){return"string"==e?M:"word"==e&&s.allowUnquoted?(a="string",S):(a="error",S(e,0,r))}function M(e,t,r){return"string"==e?M:S(e,0,r)}return d.isInText=!0,{startState:function(e){var t={tokenize:d,state:b,indented:e||0,tagName:null,tagStart:null,context:null}
return null!=e&&(t.baseIndent=e),t},token:function(e,t){if(!t.tagName&&e.sol()&&(t.indented=e.indentation()),e.eatSpace())return null
o=null
var r=t.tokenize(e,t)
return(r||o)&&"comment"!=r&&(a=null,t.state=t.state(o||r,e,t),a&&(r="error"==a?r+" error":a)),r},indent:function(t,r,n){var i=t.context
if(t.tokenize.isInAttribute)return t.tagStart==t.indented?t.stringStartCol+1:t.indented+l
if(i&&i.noIndent)return e.Pass
if(t.tokenize!=f&&t.tokenize!=d)return n?n.match(/^(\s*)/)[0].length:0
if(t.tagName)return!1!==s.multilineTagIndentPastTag?t.tagStart+t.tagName.length+2:t.tagStart+l*(s.multilineTagIndentFactor||1)
if(s.alignCDATA&&/<!\[CDATA\[/.test(r))return 0
var o=r&&/^<(\/)?([\w_:\.-]*)/.exec(r)
if(o&&o[1])for(;i;){if(i.tagName==o[2]){i=i.prev
break}if(!s.implicitlyClosed.hasOwnProperty(g(i.tagName)))break
i=i.prev}else if(o)for(;i;){var a=s.contextGrabbers[g(i.tagName)]
if(!a||!a.hasOwnProperty(g(o[2])))break
i=i.prev}for(;i&&i.prev&&!i.startOfLine;)i=i.prev
return i?i.indent+l:t.baseIndent||0},electricInput:/<\/[\s\w:]+>$/,blockCommentStart:"\x3c!--",blockCommentEnd:"--\x3e",configuration:s.htmlMode?"html":"xml",helperType:s.htmlMode?"html":"xml",skipAttribute:function(e){e.state==L&&(e.state=S)},xmlCurrentTag:function(e){return e.tagName?{name:e.tagName,close:"closeTag"==e.type}:null},xmlCurrentContext:function(e){for(var t=[],r=e.context;r;r=r.prev)t.push(r.tagName)
return t.reverse()}}}),e.defineMIME("text/xml","xml"),e.defineMIME("application/xml","xml"),e.mimeModes.hasOwnProperty("text/html")||e.defineMIME("text/html",{name:"xml",htmlMode:!0})})

//# sourceMappingURL=codemirror-d4ab0ef01cf2a2c6bb63fa9630f6e26f.map