"use strict";(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[981],{7981(t,e,i){i.d(e,{Ay:()=>td})
var n=i(95606),s=i(54073),r=i(72854)
class o{lineAt(t){if(t<0||t>this.length)throw new RangeError(`Invalid position ${t} in document of length ${this.length}`)
return this.lineInner(t,!1,1,0)}line(t){if(t<1||t>this.lines)throw new RangeError(`Invalid line number ${t} in ${this.lines}-line document`)
return this.lineInner(t,!0,1,0)}replace(t,e,i){let n=[]
return this.decompose(0,t,n,2),i.length&&i.decompose(0,i.length,n,3),this.decompose(e,this.length,n,1),a.from(n,this.length-(e-t)+i.length)}append(t){return this.replace(this.length,this.length,t)}slice(t,e=this.length){let i=[]
return this.decompose(t,e,i,0),a.from(i,e-t)}eq(t){if(t==this)return!0
if(t.length!=this.length||t.lines!=this.lines)return!1
let e=this.scanIdentical(t,1),i=this.length-this.scanIdentical(t,-1),n=new u(this),s=new u(t)
for(let r=e,o=e;;){if(n.next(r),s.next(r),r=0,n.lineBreak!=s.lineBreak||n.done!=s.done||n.value!=s.value)return!1
if(o+=n.value.length,n.done||o>=i)return!0}}iter(t=1){return new u(this,t)}iterRange(t,e=this.length){return new f(this,t,e)}iterLines(t,e){let i
if(null==t)i=this.iter()
else{null==e&&(e=this.lines+1)
let n=this.line(t).from
i=this.iterRange(n,Math.max(n,e==this.lines+1?this.length:e<=1?0:this.line(e-1).to))}return new d(i)}toString(){return this.sliceString(0)}toJSON(){let t=[]
return this.flatten(t),t}constructor(){}static of(t){if(0==t.length)throw new RangeError("A document must have at least one line")
return 1!=t.length||t[0]?t.length<=32?new l(t):a.from(l.split(t,[])):o.empty}}class l extends o{constructor(t,e=function(t){let e=-1
for(let i of t)e+=i.length+1
return e}(t)){super(),this.text=t,this.length=e}get lines(){return this.text.length}get children(){return null}lineInner(t,e,i,n){for(let s=0;;s++){let r=this.text[s],o=n+r.length
if((e?i:o)>=t)return new p(n,o,i,r)
n=o+1,i++}}decompose(t,e,i,n){let s=t<=0&&e>=this.length?this:new l(c(this.text,t,e),Math.min(e,this.length)-Math.max(0,t))
if(1&n){let t=i.pop(),e=h(s.text,t.text.slice(),0,s.length)
if(e.length<=32)i.push(new l(e,t.length+s.length))
else{let t=e.length>>1
i.push(new l(e.slice(0,t)),new l(e.slice(t)))}}else i.push(s)}replace(t,e,i){if(!(i instanceof l))return super.replace(t,e,i)
let n=h(this.text,h(i.text,c(this.text,0,t)),e),s=this.length+i.length-(e-t)
return n.length<=32?new l(n,s):a.from(l.split(n,[]),s)}sliceString(t,e=this.length,i="\n"){let n=""
for(let s=0,r=0;s<=e&&r<this.text.length;r++){let o=this.text[r],l=s+o.length
s>t&&r&&(n+=i),t<l&&e>s&&(n+=o.slice(Math.max(0,t-s),e-s)),s=l+1}return n}flatten(t){for(let e of this.text)t.push(e)}scanIdentical(){return 0}static split(t,e){let i=[],n=-1
for(let s of t)i.push(s),n+=s.length+1,32==i.length&&(e.push(new l(i,n)),i=[],n=-1)
return n>-1&&e.push(new l(i,n)),e}}class a extends o{constructor(t,e){super(),this.children=t,this.length=e,this.lines=0
for(let i of t)this.lines+=i.lines}lineInner(t,e,i,n){for(let s=0;;s++){let r=this.children[s],o=n+r.length,l=i+r.lines-1
if((e?l:o)>=t)return r.lineInner(t,e,i,n)
n=o+1,i=l+1}}decompose(t,e,i,n){for(let s=0,r=0;r<=e&&s<this.children.length;s++){let o=this.children[s],l=r+o.length
if(t<=l&&e>=r){let s=n&((r<=t?1:0)|(l>=e?2:0))
r>=t&&l<=e&&!s?i.push(o):o.decompose(t-r,e-r,i,s)}r=l+1}}replace(t,e,i){if(i.lines<this.lines)for(let n=0,s=0;n<this.children.length;n++){let r=this.children[n],o=s+r.length
if(t>=s&&e<=o){let l=r.replace(t-s,e-s,i),h=this.lines-r.lines+l.lines
if(l.lines<h>>4&&l.lines>h>>6){let s=this.children.slice()
return s[n]=l,new a(s,this.length-(e-t)+i.length)}return super.replace(s,o,l)}s=o+1}return super.replace(t,e,i)}sliceString(t,e=this.length,i="\n"){let n=""
for(let s=0,r=0;s<this.children.length&&r<=e;s++){let o=this.children[s],l=r+o.length
r>t&&s&&(n+=i),t<l&&e>r&&(n+=o.sliceString(t-r,e-r,i)),r=l+1}return n}flatten(t){for(let e of this.children)e.flatten(t)}scanIdentical(t,e){if(!(t instanceof a))return 0
let i=0,[n,s,r,o]=e>0?[0,0,this.children.length,t.children.length]:[this.children.length-1,t.children.length-1,-1,-1]
for(;;n+=e,s+=e){if(n==r||s==o)return i
let l=this.children[n],a=t.children[s]
if(l!=a)return i+l.scanIdentical(a,e)
i+=l.length+1}}static from(t,e=t.reduce((t,e)=>t+e.length+1,-1)){let i=0
for(let l of t)i+=l.lines
if(i<32){let i=[]
for(let e of t)e.flatten(i)
return new l(i,e)}let n=Math.max(32,i>>5),s=n<<1,r=n>>1,o=[],h=0,c=-1,u=[]
function f(t){let e
if(t.lines>s&&t instanceof a)for(let i of t.children)f(i)
else t.lines>r&&(h>r||!h)?(d(),o.push(t)):t instanceof l&&h&&(e=u[u.length-1])instanceof l&&t.lines+e.lines<=32?(h+=t.lines,c+=t.length+1,u[u.length-1]=new l(e.text.concat(t.text),e.length+1+t.length)):(h+t.lines>n&&d(),h+=t.lines,c+=t.length+1,u.push(t))}function d(){0!=h&&(o.push(1==u.length?u[0]:a.from(u,c)),c=-1,h=u.length=0)}for(let l of t)f(l)
return d(),1==o.length?o[0]:new a(o,e)}}function h(t,e,i=0,n=1e9){for(let s=0,r=0,o=!0;r<t.length&&s<=n;r++){let l=t[r],a=s+l.length
a>=i&&(a>n&&(l=l.slice(0,n-s)),s<i&&(l=l.slice(i-s)),o?(e[e.length-1]+=l,o=!1):e.push(l)),s=a+1}return e}function c(t,e,i){return h(t,[""],e,i)}o.empty=new l([""],0)
class u{constructor(t,e=1){this.dir=e,this.done=!1,this.lineBreak=!1,this.value="",this.nodes=[t],this.offsets=[e>0?1:(t instanceof l?t.text.length:t.children.length)<<1]}nextInner(t,e){for(this.done=this.lineBreak=!1;;){let i=this.nodes.length-1,n=this.nodes[i],s=this.offsets[i],r=s>>1,o=n instanceof l?n.text.length:n.children.length
if(r==(e>0?o:0)){if(0==i)return this.done=!0,this.value="",this
e>0&&this.offsets[i-1]++,this.nodes.pop(),this.offsets.pop()}else if((1&s)==(e>0?0:1)){if(this.offsets[i]+=e,0==t)return this.lineBreak=!0,this.value="\n",this
t--}else if(n instanceof l){let s=n.text[r+(e<0?-1:0)]
if(this.offsets[i]+=e,s.length>Math.max(0,t))return this.value=0==t?s:e>0?s.slice(t):s.slice(0,s.length-t),this
t-=s.length}else{let s=n.children[r+(e<0?-1:0)]
t>s.length?(t-=s.length,this.offsets[i]+=e):(e<0&&this.offsets[i]--,this.nodes.push(s),this.offsets.push(e>0?1:(s instanceof l?s.text.length:s.children.length)<<1))}}}next(t=0){return t<0&&(this.nextInner(-t,-this.dir),t=this.value.length),this.nextInner(t,this.dir)}}class f{constructor(t,e,i){this.value="",this.done=!1,this.cursor=new u(t,e>i?-1:1),this.pos=e>i?t.length:0,this.from=Math.min(e,i),this.to=Math.max(e,i)}nextInner(t,e){if(e<0?this.pos<=this.from:this.pos>=this.to)return this.value="",this.done=!0,this
t+=Math.max(0,e<0?this.pos-this.to:this.from-this.pos)
let i=e<0?this.pos-this.from:this.to-this.pos
t>i&&(t=i),i-=t
let{value:n}=this.cursor.next(t)
return this.pos+=(n.length+t)*e,this.value=n.length<=i?n:e<0?n.slice(n.length-i):n.slice(0,i),this.done=!this.value,this}next(t=0){return t<0?t=Math.max(t,this.from-this.pos):t>0&&(t=Math.min(t,this.to-this.pos)),this.nextInner(t,this.cursor.dir)}get lineBreak(){return this.cursor.lineBreak&&""!=this.value}}class d{constructor(t){this.inner=t,this.afterBreak=!0,this.value="",this.done=!1}next(t=0){let{done:e,lineBreak:i,value:n}=this.inner.next(t)
return e?(this.done=!0,this.value=""):i?this.afterBreak?this.value="":(this.afterBreak=!0,this.next()):(this.value=n,this.afterBreak=!1),this}get lineBreak(){return!1}}"undefined"!=typeof Symbol&&(o.prototype[Symbol.iterator]=function(){return this.iter()},u.prototype[Symbol.iterator]=f.prototype[Symbol.iterator]=d.prototype[Symbol.iterator]=function(){return this})
class p{constructor(t,e,i,n){this.from=t,this.to=e,this.number=i,this.text=n}get length(){return this.to-this.from}}let m="lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map(t=>t?parseInt(t,36):1)
for(let ed=1;ed<m.length;ed++)m[ed]+=m[ed-1]
function g(t){for(let e=1;e<m.length;e+=2)if(m[e]>t)return m[e-1]<=t
return!1}function v(t){return t>=127462&&t<=127487}function w(t,e,i=!0,n=!0){return(i?y:b)(t,e,n)}function y(t,e,i){if(e==t.length)return e
e&&x(t.charCodeAt(e))&&k(t.charCodeAt(e-1))&&e--
let n=S(t,e)
for(e+=M(n);e<t.length;){let s=S(t,e)
if(8205==n||8205==s||i&&g(s))e+=M(s),n=s
else{if(!v(s))break
{let i=0,n=e-2
for(;n>=0&&v(S(t,n));)i++,n-=2
if(i%2==0)break
e+=2}}}return e}function b(t,e,i){for(;e>0;){let n=y(t,e-2,i)
if(n<e)return n
e--}return 0}function x(t){return t>=56320&&t<57344}function k(t){return t>=55296&&t<56320}function S(t,e){let i=t.charCodeAt(e)
if(!k(i)||e+1==t.length)return i
let n=t.charCodeAt(e+1)
return x(n)?n-56320+(i-55296<<10)+65536:i}function C(t){return t<=65535?String.fromCharCode(t):(t-=65536,String.fromCharCode(55296+(t>>10),56320+(1023&t)))}function M(t){return t<65536?1:2}const A=/\r\n?|\n/
var D=function(t){return t[t.Simple=0]="Simple",t[t.TrackDel=1]="TrackDel",t[t.TrackBefore=2]="TrackBefore",t[t.TrackAfter=3]="TrackAfter",t}(D||(D={}))
class O{constructor(t){this.sections=t}get length(){let t=0
for(let e=0;e<this.sections.length;e+=2)t+=this.sections[e]
return t}get newLength(){let t=0
for(let e=0;e<this.sections.length;e+=2){let i=this.sections[e+1]
t+=i<0?this.sections[e]:i}return t}get empty(){return 0==this.sections.length||2==this.sections.length&&this.sections[1]<0}iterGaps(t){for(let e=0,i=0,n=0;e<this.sections.length;){let s=this.sections[e++],r=this.sections[e++]
r<0?(t(i,n,s),n+=s):n+=r,i+=s}}iterChangedRanges(t,e=!1){B(this,t,e)}get invertedDesc(){let t=[]
for(let e=0;e<this.sections.length;){let i=this.sections[e++],n=this.sections[e++]
n<0?t.push(i,n):t.push(n,i)}return new O(t)}composeDesc(t){return this.empty?t:t.empty?this:P(this,t)}mapDesc(t,e=!1){return t.empty?this:L(this,t,e)}mapPos(t,e=-1,i=D.Simple){let n=0,s=0
for(let r=0;r<this.sections.length;){let o=this.sections[r++],l=this.sections[r++],a=n+o
if(l<0){if(a>t)return s+(t-n)
s+=o}else{if(i!=D.Simple&&a>=t&&(i==D.TrackDel&&n<t&&a>t||i==D.TrackBefore&&n<t||i==D.TrackAfter&&a>t))return null
if(a>t||a==t&&e<0&&!o)return t==n||e<0?s:s+l
s+=l}n=a}if(t>n)throw new RangeError(`Position ${t} is out of range for changeset of length ${n}`)
return s}touchesRange(t,e=t){for(let i=0,n=0;i<this.sections.length&&n<=e;){let s=n+this.sections[i++]
if(this.sections[i++]>=0&&n<=e&&s>=t)return!(n<t&&s>e)||"cover"
n=s}return!1}toString(){let t=""
for(let e=0;e<this.sections.length;){let i=this.sections[e++],n=this.sections[e++]
t+=(t?" ":"")+i+(n>=0?":"+n:"")}return t}toJSON(){return this.sections}static fromJSON(t){if(!Array.isArray(t)||t.length%2||t.some(t=>"number"!=typeof t))throw new RangeError("Invalid JSON representation of ChangeDesc")
return new O(t)}static create(t){return new O(t)}}class T extends O{constructor(t,e){super(t),this.inserted=e}apply(t){if(this.length!=t.length)throw new RangeError("Applying change set to a document with the wrong length")
return B(this,(e,i,n,s,r)=>t=t.replace(n,n+(i-e),r),!1),t}mapDesc(t,e=!1){return L(this,t,e,!0)}invert(t){let e=this.sections.slice(),i=[]
for(let n=0,s=0;n<e.length;n+=2){let r=e[n],l=e[n+1]
if(l>=0){e[n]=l,e[n+1]=r
let a=n>>1
for(;i.length<a;)i.push(o.empty)
i.push(r?t.slice(s,s+r):o.empty)}s+=r}return new T(e,i)}compose(t){return this.empty?t:t.empty?this:P(this,t,!0)}map(t,e=!1){return t.empty?this:L(this,t,e,!0)}iterChanges(t,e=!1){B(this,t,e)}get desc(){return O.create(this.sections)}filter(t){let e=[],i=[],n=[],s=new I(this)
t:for(let r=0,o=0;;){let l=r==t.length?1e9:t[r++]
for(;o<l||o==l&&0==s.len;){if(s.done)break t
let t=Math.min(s.len,l-o)
E(n,t,-1)
let r=-1==s.ins?-1:0==s.off?s.ins:0
E(e,t,r),r>0&&R(i,e,s.text),s.forward(t),o+=t}let a=t[r++]
for(;o<a;){if(s.done)break t
let t=Math.min(s.len,a-o)
E(e,t,-1),E(n,t,-1==s.ins?-1:0==s.off?s.ins:0),s.forward(t),o+=t}}return{changes:new T(e,i),filtered:O.create(n)}}toJSON(){let t=[]
for(let e=0;e<this.sections.length;e+=2){let i=this.sections[e],n=this.sections[e+1]
n<0?t.push(i):0==n?t.push([i]):t.push([i].concat(this.inserted[e>>1].toJSON()))}return t}static of(t,e,i){let n=[],s=[],r=0,l=null
function a(t=!1){if(!t&&!n.length)return
r<e&&E(n,e-r,-1)
let i=new T(n,s)
l=l?l.compose(i.map(l)):i,n=[],s=[],r=0}return function t(h){if(Array.isArray(h))for(let e of h)t(e)
else if(h instanceof T){if(h.length!=e)throw new RangeError(`Mismatched change set length (got ${h.length}, expected ${e})`)
a(),l=l?l.compose(h.map(l)):h}else{let{from:t,to:l=t,insert:c}=h
if(t>l||t<0||l>e)throw new RangeError(`Invalid change range ${t} to ${l} (in doc of length ${e})`)
let u=c?"string"==typeof c?o.of(c.split(i||A)):c:o.empty,f=u.length
if(t==l&&0==f)return
t<r&&a(),t>r&&E(n,t-r,-1),E(n,l-t,f),R(s,n,u),r=l}}(t),a(!l),l}static empty(t){return new T(t?[t,-1]:[],[])}static fromJSON(t){if(!Array.isArray(t))throw new RangeError("Invalid JSON representation of ChangeSet")
let e=[],i=[]
for(let n=0;n<t.length;n++){let s=t[n]
if("number"==typeof s)e.push(s,-1)
else{if(!Array.isArray(s)||"number"!=typeof s[0]||s.some((t,e)=>e&&"string"!=typeof t))throw new RangeError("Invalid JSON representation of ChangeSet")
if(1==s.length)e.push(s[0],0)
else{for(;i.length<n;)i.push(o.empty)
i[n]=o.of(s.slice(1)),e.push(s[0],i[n].length)}}}return new T(e,i)}static createSet(t,e){return new T(t,e)}}function E(t,e,i,n=!1){if(0==e&&i<=0)return
let s=t.length-2
s>=0&&i<=0&&i==t[s+1]?t[s]+=e:0==e&&0==t[s]?t[s+1]+=i:n?(t[s]+=e,t[s+1]+=i):t.push(e,i)}function R(t,e,i){if(0==i.length)return
let n=e.length-2>>1
if(n<t.length)t[t.length-1]=t[t.length-1].append(i)
else{for(;t.length<n;)t.push(o.empty)
t.push(i)}}function B(t,e,i){let n=t.inserted
for(let s=0,r=0,l=0;l<t.sections.length;){let a=t.sections[l++],h=t.sections[l++]
if(h<0)s+=a,r+=a
else{let c=s,u=r,f=o.empty
for(;c+=a,u+=h,h&&n&&(f=f.append(n[l-2>>1])),!(i||l==t.sections.length||t.sections[l+1]<0);)a=t.sections[l++],h=t.sections[l++]
e(s,c,r,u,f),s=c,r=u}}}function L(t,e,i,n=!1){let s=[],r=n?[]:null,o=new I(t),l=new I(e)
for(let a=-1;;)if(-1==o.ins&&-1==l.ins){let t=Math.min(o.len,l.len)
E(s,t,-1),o.forward(t),l.forward(t)}else if(l.ins>=0&&(o.ins<0||a==o.i||0==o.off&&(l.len<o.len||l.len==o.len&&!i))){let t=l.len
for(E(s,l.ins,-1);t;){let e=Math.min(o.len,t)
o.ins>=0&&a<o.i&&o.len<=e&&(E(s,0,o.ins),r&&R(r,s,o.text),a=o.i),o.forward(e),t-=e}l.next()}else{if(!(o.ins>=0)){if(o.done&&l.done)return r?T.createSet(s,r):O.create(s)
throw new Error("Mismatched change set lengths")}{let t=0,e=o.len
for(;e;)if(-1==l.ins){let i=Math.min(e,l.len)
t+=i,e-=i,l.forward(i)}else{if(!(0==l.ins&&l.len<e))break
e-=l.len,l.next()}E(s,t,a<o.i?o.ins:0),r&&a<o.i&&R(r,s,o.text),a=o.i,o.forward(o.len-e)}}}function P(t,e,i=!1){let n=[],s=i?[]:null,r=new I(t),o=new I(e)
for(let l=!1;;){if(r.done&&o.done)return s?T.createSet(n,s):O.create(n)
if(0==r.ins)E(n,r.len,0,l),r.next()
else if(0!=o.len||o.done){if(r.done||o.done)throw new Error("Mismatched change set lengths")
{let t=Math.min(r.len2,o.len),e=n.length
if(-1==r.ins){let e=-1==o.ins?-1:o.off?0:o.ins
E(n,t,e,l),s&&e&&R(s,n,o.text)}else-1==o.ins?(E(n,r.off?0:r.len,t,l),s&&R(s,n,r.textBit(t))):(E(n,r.off?0:r.len,o.off?0:o.ins,l),s&&!o.off&&R(s,n,o.text))
l=(r.ins>t||o.ins>=0&&o.len>t)&&(l||n.length>e),r.forward2(t),o.forward(t)}}else E(n,0,o.ins,l),s&&R(s,n,o.text),o.next()}}class I{constructor(t){this.set=t,this.i=0,this.next()}next(){let{sections:t}=this.set
this.i<t.length?(this.len=t[this.i++],this.ins=t[this.i++]):(this.len=0,this.ins=-2),this.off=0}get done(){return-2==this.ins}get len2(){return this.ins<0?this.len:this.ins}get text(){let{inserted:t}=this.set,e=this.i-2>>1
return e>=t.length?o.empty:t[e]}textBit(t){let{inserted:e}=this.set,i=this.i-2>>1
return i>=e.length&&!t?o.empty:e[i].slice(this.off,null==t?void 0:this.off+t)}forward(t){t==this.len?this.next():(this.len-=t,this.off+=t)}forward2(t){-1==this.ins?this.forward(t):t==this.ins?this.next():(this.ins-=t,this.off+=t)}}class N{constructor(t,e,i){this.from=t,this.to=e,this.flags=i}get anchor(){return 16&this.flags?this.to:this.from}get head(){return 16&this.flags?this.from:this.to}get empty(){return this.from==this.to}get assoc(){return 4&this.flags?-1:8&this.flags?1:0}get bidiLevel(){let t=3&this.flags
return 3==t?null:t}get goalColumn(){let t=this.flags>>5
return 33554431==t?void 0:t}map(t,e=-1){let i,n
return this.empty?i=n=t.mapPos(this.from,e):(i=t.mapPos(this.from,1),n=t.mapPos(this.to,-1)),i==this.from&&n==this.to?this:new N(i,n,this.flags)}extend(t,e=t){if(t<=this.anchor&&e>=this.anchor)return H.range(t,e)
let i=Math.abs(t-this.anchor)>Math.abs(e-this.anchor)?t:e
return H.range(this.anchor,i)}eq(t){return this.anchor==t.anchor&&this.head==t.head}toJSON(){return{anchor:this.anchor,head:this.head}}static fromJSON(t){if(!t||"number"!=typeof t.anchor||"number"!=typeof t.head)throw new RangeError("Invalid JSON representation for SelectionRange")
return H.range(t.anchor,t.head)}static create(t,e,i){return new N(t,e,i)}}class H{constructor(t,e){this.ranges=t,this.mainIndex=e}map(t,e=-1){return t.empty?this:H.create(this.ranges.map(i=>i.map(t,e)),this.mainIndex)}eq(t){if(this.ranges.length!=t.ranges.length||this.mainIndex!=t.mainIndex)return!1
for(let e=0;e<this.ranges.length;e++)if(!this.ranges[e].eq(t.ranges[e]))return!1
return!0}get main(){return this.ranges[this.mainIndex]}asSingle(){return 1==this.ranges.length?this:new H([this.main],0)}addRange(t,e=!0){return H.create([t].concat(this.ranges),e?0:this.mainIndex+1)}replaceRange(t,e=this.mainIndex){let i=this.ranges.slice()
return i[e]=t,H.create(i,this.mainIndex)}toJSON(){return{ranges:this.ranges.map(t=>t.toJSON()),main:this.mainIndex}}static fromJSON(t){if(!t||!Array.isArray(t.ranges)||"number"!=typeof t.main||t.main>=t.ranges.length)throw new RangeError("Invalid JSON representation for EditorSelection")
return new H(t.ranges.map(t=>N.fromJSON(t)),t.main)}static single(t,e=t){return new H([H.range(t,e)],0)}static create(t,e=0){if(0==t.length)throw new RangeError("A selection needs at least one range")
for(let i=0,n=0;n<t.length;n++){let s=t[n]
if(s.empty?s.from<=i:s.from<i)return H.normalized(t.slice(),e)
i=s.to}return new H(t,e)}static cursor(t,e=0,i,n){return N.create(t,t,(0==e?0:e<0?4:8)|(null==i?3:Math.min(2,i))|(null!=n?n:33554431)<<5)}static range(t,e,i,n){let s=(null!=i?i:33554431)<<5|(null==n?3:Math.min(2,n))
return e<t?N.create(e,t,24|s):N.create(t,e,(e>t?4:0)|s)}static normalized(t,e=0){let i=t[e]
t.sort((t,e)=>t.from-e.from),e=t.indexOf(i)
for(let n=1;n<t.length;n++){let i=t[n],s=t[n-1]
if(i.empty?i.from<=s.to:i.from<s.to){let r=s.from,o=Math.max(i.to,s.to)
n<=e&&e--,t.splice(--n,2,i.anchor>i.head?H.range(o,r):H.range(r,o))}}return new H(t,e)}}function W(t,e){for(let i of t.ranges)if(i.to>e)throw new RangeError("Selection points outside of document")}let V=0
class F{constructor(t,e,i,n,s){this.combine=t,this.compareInput=e,this.compare=i,this.isStatic=n,this.id=V++,this.default=t([]),this.extensions="function"==typeof s?s(this):s}static define(t={}){return new F(t.combine||(t=>t),t.compareInput||((t,e)=>t===e),t.compare||(t.combine?(t,e)=>t===e:z),!!t.static,t.enables)}of(t){return new q([],this,0,t)}compute(t,e){if(this.isStatic)throw new Error("Can't compute a static facet")
return new q(t,this,1,e)}computeN(t,e){if(this.isStatic)throw new Error("Can't compute a static facet")
return new q(t,this,2,e)}from(t,e){return e||(e=t=>t),this.compute([t],i=>e(i.field(t)))}}function z(t,e){return t==e||t.length==e.length&&t.every((t,i)=>t===e[i])}class q{constructor(t,e,i,n){this.dependencies=t,this.facet=e,this.type=i,this.value=n,this.id=V++}dynamicSlot(t){var e
let i=this.value,n=this.facet.compareInput,s=this.id,r=t[s]>>1,o=2==this.type,l=!1,a=!1,h=[]
for(let c of this.dependencies)"doc"==c?l=!0:"selection"==c?a=!0:1&(null!==(e=t[c.id])&&void 0!==e?e:1)||h.push(t[c.id])
return{create:t=>(t.values[r]=i(t),1),update(t,e){if(l&&e.docChanged||a&&(e.docChanged||e.selection)||j(t,h)){let e=i(t)
if(o?!_(e,t.values[r],n):!n(e,t.values[r]))return t.values[r]=e,1}return 0},reconfigure:(t,e)=>{let l,a=e.config.address[s]
if(null!=a){let s=et(e,a)
if(this.dependencies.every(i=>i instanceof F?e.facet(i)===t.facet(i):!(i instanceof U)||e.field(i,!1)==t.field(i,!1))||(o?_(l=i(t),s,n):n(l=i(t),s)))return t.values[r]=s,0}else l=i(t)
return t.values[r]=l,1}}}}function _(t,e,i){if(t.length!=e.length)return!1
for(let n=0;n<t.length;n++)if(!i(t[n],e[n]))return!1
return!0}function j(t,e){let i=!1
for(let n of e)1&tt(t,n)&&(i=!0)
return i}function K(t,e,i){let n=i.map(e=>t[e.id]),s=i.map(t=>t.type),r=n.filter(t=>!(1&t)),o=t[e.id]>>1
function l(t){let i=[]
for(let e=0;e<n.length;e++){let r=et(t,n[e])
if(2==s[e])for(let t of r)i.push(t)
else i.push(r)}return e.combine(i)}return{create(t){for(let e of n)tt(t,e)
return t.values[o]=l(t),1},update(t,i){if(!j(t,r))return 0
let n=l(t)
return e.compare(n,t.values[o])?0:(t.values[o]=n,1)},reconfigure(t,s){let r=j(t,n),a=s.config.facets[e.id],h=s.facet(e)
if(a&&!r&&z(i,a))return t.values[o]=h,0
let c=l(t)
return e.compare(c,h)?(t.values[o]=h,0):(t.values[o]=c,1)}}}const $=F.define({static:!0})
class U{constructor(t,e,i,n,s){this.id=t,this.createF=e,this.updateF=i,this.compareF=n,this.spec=s,this.provides=void 0}static define(t){let e=new U(V++,t.create,t.update,t.compare||((t,e)=>t===e),t)
return t.provide&&(e.provides=t.provide(e)),e}create(t){let e=t.facet($).find(t=>t.field==this)
return((null==e?void 0:e.create)||this.createF)(t)}slot(t){let e=t[this.id]>>1
return{create:t=>(t.values[e]=this.create(t),1),update:(t,i)=>{let n=t.values[e],s=this.updateF(n,i)
return this.compareF(n,s)?0:(t.values[e]=s,1)},reconfigure:(t,i)=>null!=i.config.address[this.id]?(t.values[e]=i.field(this),0):(t.values[e]=this.create(t),1)}}init(t){return[this,$.of({field:this,create:t})]}get extension(){return this}}function G(t){return e=>new X(e,t)}const J={highest:G(0),high:G(1),default:G(2),low:G(3),lowest:G(4)}
class X{constructor(t,e){this.inner=t,this.prec=e}}class Y{of(t){return new Q(this,t)}reconfigure(t){return Y.reconfigure.of({compartment:this,extension:t})}get(t){return t.config.compartments.get(this)}}class Q{constructor(t,e){this.compartment=t,this.inner=e}}class Z{constructor(t,e,i,n,s,r){for(this.base=t,this.compartments=e,this.dynamicSlots=i,this.address=n,this.staticValues=s,this.facets=r,this.statusTemplate=[];this.statusTemplate.length<i.length;)this.statusTemplate.push(0)}staticFacet(t){let e=this.address[t.id]
return null==e?t.default:this.staticValues[e>>1]}static resolve(t,e,i){let n=[],s=Object.create(null),r=new Map
for(let u of function(t,e,i){let n=[[],[],[],[],[]],s=new Map
return function t(r,o){let l=s.get(r)
if(null!=l){if(l<=o)return
let t=n[l].indexOf(r)
t>-1&&n[l].splice(t,1),r instanceof Q&&i.delete(r.compartment)}if(s.set(r,o),Array.isArray(r))for(let e of r)t(e,o)
else if(r instanceof Q){if(i.has(r.compartment))throw new RangeError("Duplicate use of compartment in extensions")
let n=e.get(r.compartment)||r.inner
i.set(r.compartment,n),t(n,o)}else if(r instanceof X)t(r.inner,r.prec)
else if(r instanceof U)n[o].push(r),r.provides&&t(r.provides,o)
else if(r instanceof q)n[o].push(r),r.facet.extensions&&t(r.facet.extensions,2)
else{let e=r.extension
if(!e)throw new Error(`Unrecognized extension value in extension set (${r}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`)
t(e,o)}}(t,2),n.reduce((t,e)=>t.concat(e))}(t,e,r))u instanceof U?n.push(u):(s[u.facet.id]||(s[u.facet.id]=[])).push(u)
let o=Object.create(null),l=[],a=[]
for(let u of n)o[u.id]=a.length<<1,a.push(t=>u.slot(t))
let h=null==i?void 0:i.config.facets
for(let u in s){let t=s[u],e=t[0].facet,n=h&&h[u]||[]
if(t.every(t=>0==t.type))if(o[e.id]=l.length<<1|1,z(n,t))l.push(i.facet(e))
else{let n=e.combine(t.map(t=>t.value))
l.push(i&&e.compare(n,i.facet(e))?i.facet(e):n)}else{for(let e of t)0==e.type?(o[e.id]=l.length<<1|1,l.push(e.value)):(o[e.id]=a.length<<1,a.push(t=>e.dynamicSlot(t)))
o[e.id]=a.length<<1,a.push(i=>K(i,e,t))}}let c=a.map(t=>t(o))
return new Z(t,r,c,o,l,s)}}function tt(t,e){if(1&e)return 2
let i=e>>1,n=t.status[i]
if(4==n)throw new Error("Cyclic dependency between fields and/or facets")
if(2&n)return n
t.status[i]=4
let s=t.computeSlot(t,t.config.dynamicSlots[i])
return t.status[i]=2|s}function et(t,e){return 1&e?t.config.staticValues[e>>1]:t.values[e>>1]}const it=F.define(),nt=F.define({combine:t=>t.some(t=>t),static:!0}),st=F.define({combine:t=>t.length?t[0]:void 0,static:!0}),rt=F.define(),ot=F.define(),lt=F.define(),at=F.define({combine:t=>!!t.length&&t[0]})
class ht{constructor(t,e){this.type=t,this.value=e}static define(){return new ct}}class ct{of(t){return new ht(this,t)}}class ut{constructor(t){this.map=t}of(t){return new ft(this,t)}}class ft{constructor(t,e){this.type=t,this.value=e}map(t){let e=this.type.map(this.value,t)
return void 0===e?void 0:e==this.value?this:new ft(this.type,e)}is(t){return this.type==t}static define(t={}){return new ut(t.map||(t=>t))}static mapEffects(t,e){if(!t.length)return t
let i=[]
for(let n of t){let t=n.map(e)
t&&i.push(t)}return i}}ft.reconfigure=ft.define(),ft.appendConfig=ft.define()
class dt{constructor(t,e,i,n,s,r){this.startState=t,this.changes=e,this.selection=i,this.effects=n,this.annotations=s,this.scrollIntoView=r,this._doc=null,this._state=null,i&&W(i,e.newLength),s.some(t=>t.type==dt.time)||(this.annotations=s.concat(dt.time.of(Date.now())))}static create(t,e,i,n,s,r){return new dt(t,e,i,n,s,r)}get newDoc(){return this._doc||(this._doc=this.changes.apply(this.startState.doc))}get newSelection(){return this.selection||this.startState.selection.map(this.changes)}get state(){return this._state||this.startState.applyTransaction(this),this._state}annotation(t){for(let e of this.annotations)if(e.type==t)return e.value}get docChanged(){return!this.changes.empty}get reconfigured(){return this.startState.config!=this.state.config}isUserEvent(t){let e=this.annotation(dt.userEvent)
return!(!e||!(e==t||e.length>t.length&&e.slice(0,t.length)==t&&"."==e[t.length]))}}function pt(t,e){let i=[]
for(let n=0,s=0;;){let r,o
if(n<t.length&&(s==e.length||e[s]>=t[n]))r=t[n++],o=t[n++]
else{if(!(s<e.length))return i
r=e[s++],o=e[s++]}!i.length||i[i.length-1]<r?i.push(r,o):i[i.length-1]<o&&(i[i.length-1]=o)}}function mt(t,e,i){var n
let s,r,o
return i?(s=e.changes,r=T.empty(e.changes.length),o=t.changes.compose(e.changes)):(s=e.changes.map(t.changes),r=t.changes.mapDesc(e.changes,!0),o=t.changes.compose(s)),{changes:o,selection:e.selection?e.selection.map(r):null===(n=t.selection)||void 0===n?void 0:n.map(s),effects:ft.mapEffects(t.effects,s).concat(ft.mapEffects(e.effects,r)),annotations:t.annotations.length?t.annotations.concat(e.annotations):e.annotations,scrollIntoView:t.scrollIntoView||e.scrollIntoView}}function gt(t,e,i){let n=e.selection,s=yt(e.annotations)
return e.userEvent&&(s=s.concat(dt.userEvent.of(e.userEvent))),{changes:e.changes instanceof T?e.changes:T.of(e.changes||[],i,t.facet(st)),selection:n&&(n instanceof H?n:H.single(n.anchor,n.head)),effects:yt(e.effects),annotations:s,scrollIntoView:!!e.scrollIntoView}}function vt(t,e,i){let n=gt(t,e.length?e[0]:{},t.doc.length)
e.length&&!1===e[0].filter&&(i=!1)
for(let r=1;r<e.length;r++){!1===e[r].filter&&(i=!1)
let s=!!e[r].sequential
n=mt(n,gt(t,e[r],s?n.changes.newLength:t.doc.length),s)}let s=dt.create(t,n.changes,n.selection,n.effects,n.annotations,n.scrollIntoView)
return function(t){let e=t.startState,i=e.facet(lt),n=t
for(let s=i.length-1;s>=0;s--){let r=i[s](t)
r&&Object.keys(r).length&&(n=mt(n,gt(e,r,t.changes.newLength),!0))}return n==t?t:dt.create(e,t.changes,t.selection,n.effects,n.annotations,n.scrollIntoView)}(i?function(t){let e=t.startState,i=!0
for(let s of e.facet(rt)){let e=s(t)
if(!1===e){i=!1
break}Array.isArray(e)&&(i=!0===i?e:pt(i,e))}if(!0!==i){let n,s
if(!1===i)s=t.changes.invertedDesc,n=T.empty(e.doc.length)
else{let e=t.changes.filter(i)
n=e.changes,s=e.filtered.mapDesc(e.changes).invertedDesc}t=dt.create(e,n,t.selection&&t.selection.map(s),ft.mapEffects(t.effects,s),t.annotations,t.scrollIntoView)}let n=e.facet(ot)
for(let s=n.length-1;s>=0;s--){let i=n[s](t)
t=i instanceof dt?i:Array.isArray(i)&&1==i.length&&i[0]instanceof dt?i[0]:vt(e,yt(i),!1)}return t}(s):s)}dt.time=ht.define(),dt.userEvent=ht.define(),dt.addToHistory=ht.define(),dt.remote=ht.define()
const wt=[]
function yt(t){return null==t?wt:Array.isArray(t)?t:[t]}var bt=function(t){return t[t.Word=0]="Word",t[t.Space=1]="Space",t[t.Other=2]="Other",t}(bt||(bt={}))
const xt=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/
let kt
try{kt=new RegExp("[\\p{Alphabetic}\\p{Number}_]","u")}catch(t){}class St{constructor(t,e,i,n,s,r){this.config=t,this.doc=e,this.selection=i,this.values=n,this.status=t.statusTemplate.slice(),this.computeSlot=s,r&&(r._state=this)
for(let o=0;o<this.config.dynamicSlots.length;o++)tt(this,o<<1)
this.computeSlot=null}field(t,e=!0){let i=this.config.address[t.id]
if(null!=i)return tt(this,i),et(this,i)
if(e)throw new RangeError("Field is not present in this state")}update(...t){return vt(this,t,!0)}applyTransaction(t){let e,i=this.config,{base:n,compartments:s}=i
for(let r of t.effects)r.is(Y.reconfigure)?(i&&(s=new Map,i.compartments.forEach((t,e)=>s.set(e,t)),i=null),s.set(r.value.compartment,r.value.extension)):r.is(ft.reconfigure)?(i=null,n=r.value):r.is(ft.appendConfig)&&(i=null,n=yt(n).concat(r.value))
i?e=t.startState.values.slice():(i=Z.resolve(n,s,this),e=new St(i,this.doc,this.selection,i.dynamicSlots.map(()=>null),(t,e)=>e.reconfigure(t,this),null).values),new St(i,t.newDoc,t.newSelection,e,(e,i)=>i.update(e,t),t)}replaceSelection(t){return"string"==typeof t&&(t=this.toText(t)),this.changeByRange(e=>({changes:{from:e.from,to:e.to,insert:t},range:H.cursor(e.from+t.length)}))}changeByRange(t){let e=this.selection,i=t(e.ranges[0]),n=this.changes(i.changes),s=[i.range],r=yt(i.effects)
for(let o=1;o<e.ranges.length;o++){let i=t(e.ranges[o]),l=this.changes(i.changes),a=l.map(n)
for(let t=0;t<o;t++)s[t]=s[t].map(a)
let h=n.mapDesc(l,!0)
s.push(i.range.map(h)),n=n.compose(a),r=ft.mapEffects(r,a).concat(ft.mapEffects(yt(i.effects),h))}return{changes:n,selection:H.create(s,e.mainIndex),effects:r}}changes(t=[]){return t instanceof T?t:T.of(t,this.doc.length,this.facet(St.lineSeparator))}toText(t){return o.of(t.split(this.facet(St.lineSeparator)||A))}sliceDoc(t=0,e=this.doc.length){return this.doc.sliceString(t,e,this.lineBreak)}facet(t){let e=this.config.address[t.id]
return null==e?t.default:(tt(this,e),et(this,e))}toJSON(t){let e={doc:this.sliceDoc(),selection:this.selection.toJSON()}
if(t)for(let i in t){let n=t[i]
n instanceof U&&null!=this.config.address[n.id]&&(e[i]=n.spec.toJSON(this.field(t[i]),this))}return e}static fromJSON(t,e={},i){if(!t||"string"!=typeof t.doc)throw new RangeError("Invalid JSON representation for EditorState")
let n=[]
if(i)for(let s in i)if(Object.prototype.hasOwnProperty.call(t,s)){let e=i[s],r=t[s]
n.push(e.init(t=>e.spec.fromJSON(r,t)))}return St.create({doc:t.doc,selection:H.fromJSON(t.selection),extensions:e.extensions?n.concat([e.extensions]):n})}static create(t={}){let e=Z.resolve(t.extensions||[],new Map),i=t.doc instanceof o?t.doc:o.of((t.doc||"").split(e.staticFacet(St.lineSeparator)||A)),n=t.selection?t.selection instanceof H?t.selection:H.single(t.selection.anchor,t.selection.head):H.single(0)
return W(n,i.length),e.staticFacet(nt)||(n=n.asSingle()),new St(e,i,n,e.dynamicSlots.map(()=>null),(t,e)=>e.create(t),null)}get tabSize(){return this.facet(St.tabSize)}get lineBreak(){return this.facet(St.lineSeparator)||"\n"}get readOnly(){return this.facet(at)}phrase(t,...e){for(let i of this.facet(St.phrases))if(Object.prototype.hasOwnProperty.call(i,t)){t=i[t]
break}return e.length&&(t=t.replace(/\$(\$|\d*)/g,(t,i)=>{if("$"==i)return"$"
let n=+(i||1)
return!n||n>e.length?t:e[n-1]})),t}languageDataAt(t,e,i=-1){let n=[]
for(let s of this.facet(it))for(let r of s(this,e,i))Object.prototype.hasOwnProperty.call(r,t)&&n.push(r[t])
return n}charCategorizer(t){return e=this.languageDataAt("wordChars",t).join(""),t=>{if(!/\S/.test(t))return bt.Space
if(function(t){if(kt)return kt.test(t)
for(let e=0;e<t.length;e++){let i=t[e]
if(/\w/.test(i)||i>""&&(i.toUpperCase()!=i.toLowerCase()||xt.test(i)))return!0}return!1}(t))return bt.Word
for(let i=0;i<e.length;i++)if(t.indexOf(e[i])>-1)return bt.Word
return bt.Other}
var e}wordAt(t){let{text:e,from:i,length:n}=this.doc.lineAt(t),s=this.charCategorizer(t),r=t-i,o=t-i
for(;r>0;){let t=w(e,r,!1)
if(s(e.slice(t,r))!=bt.Word)break
r=t}for(;o<n;){let t=w(e,o)
if(s(e.slice(o,t))!=bt.Word)break
o=t}return r==o?null:H.range(r+i,o+i)}}function Ct(t,e,i={}){let n={}
for(let s of t)for(let t of Object.keys(s)){let e=s[t],r=n[t]
if(void 0===r)n[t]=e
else if(r===e||void 0===e);else{if(!Object.hasOwnProperty.call(i,t))throw new Error("Config merge conflict for field "+t)
n[t]=i[t](r,e)}}for(let s in e)void 0===n[s]&&(n[s]=e[s])
return n}St.allowMultipleSelections=nt,St.tabSize=F.define({combine:t=>t.length?t[0]:4}),St.lineSeparator=st,St.readOnly=at,St.phrases=F.define({compare(t,e){let i=Object.keys(t),n=Object.keys(e)
return i.length==n.length&&i.every(i=>t[i]==e[i])}}),St.languageData=it,St.changeFilter=rt,St.transactionFilter=ot,St.transactionExtender=lt,Y.reconfigure=ft.define()
class Mt{eq(t){return this==t}range(t,e=t){return At.create(t,e,this)}}Mt.prototype.startSide=Mt.prototype.endSide=0,Mt.prototype.point=!1,Mt.prototype.mapMode=D.TrackDel
class At{constructor(t,e,i){this.from=t,this.to=e,this.value=i}static create(t,e,i){return new At(t,e,i)}}function Dt(t,e){return t.from-e.from||t.value.startSide-e.value.startSide}class Ot{constructor(t,e,i,n){this.from=t,this.to=e,this.value=i,this.maxPoint=n}get length(){return this.to[this.to.length-1]}findIndex(t,e,i,n=0){let s=i?this.to:this.from
for(let r=n,o=s.length;;){if(r==o)return r
let n=r+o>>1,l=s[n]-t||(i?this.value[n].endSide:this.value[n].startSide)-e
if(n==r)return l>=0?r:o
l>=0?o=n:r=n+1}}between(t,e,i,n){for(let s=this.findIndex(e,-1e9,!0),r=this.findIndex(i,1e9,!1,s);s<r;s++)if(!1===n(this.from[s]+t,this.to[s]+t,this.value[s]))return!1}map(t,e){let i=[],n=[],s=[],r=-1,o=-1
for(let l=0;l<this.value.length;l++){let a,h,c=this.value[l],u=this.from[l]+t,f=this.to[l]+t
if(u==f){let t=e.mapPos(u,c.startSide,c.mapMode)
if(null==t)continue
if(a=h=t,c.startSide!=c.endSide&&(h=e.mapPos(u,c.endSide),h<a))continue}else if(a=e.mapPos(u,c.startSide),h=e.mapPos(f,c.endSide),a>h||a==h&&c.startSide>0&&c.endSide<=0)continue;(h-a||c.endSide-c.startSide)<0||(r<0&&(r=a),c.point&&(o=Math.max(o,h-a)),i.push(c),n.push(a-r),s.push(h-r))}return{mapped:i.length?new Ot(n,s,i,o):null,pos:r}}}class Tt{constructor(t,e,i,n){this.chunkPos=t,this.chunk=e,this.nextLayer=i,this.maxPoint=n}static create(t,e,i,n){return new Tt(t,e,i,n)}get length(){let t=this.chunk.length-1
return t<0?0:Math.max(this.chunkEnd(t),this.nextLayer.length)}get size(){if(this.isEmpty)return 0
let t=this.nextLayer.size
for(let e of this.chunk)t+=e.value.length
return t}chunkEnd(t){return this.chunkPos[t]+this.chunk[t].length}update(t){let{add:e=[],sort:i=!1,filterFrom:n=0,filterTo:s=this.length}=t,r=t.filter
if(0==e.length&&!r)return this
if(i&&(e=e.slice().sort(Dt)),this.isEmpty)return e.length?Tt.of(e):this
let o=new Bt(this,null,-1).goto(0),l=0,a=[],h=new Et
for(;o.value||l<e.length;)if(l<e.length&&(o.from-e[l].from||o.startSide-e[l].value.startSide)>=0){let t=e[l++]
h.addInner(t.from,t.to,t.value)||a.push(t)}else 1==o.rangeIndex&&o.chunkIndex<this.chunk.length&&(l==e.length||this.chunkEnd(o.chunkIndex)<e[l].from)&&(!r||n>this.chunkEnd(o.chunkIndex)||s<this.chunkPos[o.chunkIndex])&&h.addChunk(this.chunkPos[o.chunkIndex],this.chunk[o.chunkIndex])?o.nextChunk():((!r||n>o.to||s<o.from||r(o.from,o.to,o.value))&&(h.addInner(o.from,o.to,o.value)||a.push(At.create(o.from,o.to,o.value))),o.next())
return h.finishInner(this.nextLayer.isEmpty&&!a.length?Tt.empty:this.nextLayer.update({add:a,filter:r,filterFrom:n,filterTo:s}))}map(t){if(t.empty||this.isEmpty)return this
let e=[],i=[],n=-1
for(let r=0;r<this.chunk.length;r++){let s=this.chunkPos[r],o=this.chunk[r],l=t.touchesRange(s,s+o.length)
if(!1===l)n=Math.max(n,o.maxPoint),e.push(o),i.push(t.mapPos(s))
else if(!0===l){let{mapped:r,pos:l}=o.map(s,t)
r&&(n=Math.max(n,r.maxPoint),e.push(r),i.push(l))}}let s=this.nextLayer.map(t)
return 0==e.length?s:new Tt(i,e,s||Tt.empty,n)}between(t,e,i){if(!this.isEmpty){for(let n=0;n<this.chunk.length;n++){let s=this.chunkPos[n],r=this.chunk[n]
if(e>=s&&t<=s+r.length&&!1===r.between(s,t-s,e-s,i))return}this.nextLayer.between(t,e,i)}}iter(t=0){return Lt.from([this]).goto(t)}get isEmpty(){return this.nextLayer==this}static iter(t,e=0){return Lt.from(t).goto(e)}static compare(t,e,i,n,s=-1){let r=t.filter(t=>t.maxPoint>0||!t.isEmpty&&t.maxPoint>=s),o=e.filter(t=>t.maxPoint>0||!t.isEmpty&&t.maxPoint>=s),l=Rt(r,o,i),a=new It(r,l,s),h=new It(o,l,s)
i.iterGaps((t,e,i)=>Nt(a,t,h,e,i,n)),i.empty&&0==i.length&&Nt(a,0,h,0,0,n)}static eq(t,e,i=0,n){null==n&&(n=999999999)
let s=t.filter(t=>!t.isEmpty&&e.indexOf(t)<0),r=e.filter(e=>!e.isEmpty&&t.indexOf(e)<0)
if(s.length!=r.length)return!1
if(!s.length)return!0
let o=Rt(s,r),l=new It(s,o,0).goto(i),a=new It(r,o,0).goto(i)
for(;;){if(l.to!=a.to||!Ht(l.active,a.active)||l.point&&(!a.point||!l.point.eq(a.point)))return!1
if(l.to>n)return!0
l.next(),a.next()}}static spans(t,e,i,n,s=-1){let r=new It(t,null,s).goto(e),o=e,l=r.openStart
for(;;){let t=Math.min(r.to,i)
if(r.point){let i=r.activeForPoint(r.to),s=r.pointFrom<e?i.length+1:Math.min(i.length,l)
n.point(o,t,r.point,i,s,r.pointRank),l=Math.min(r.openEnd(t),i.length)}else t>o&&(n.span(o,t,r.active,l),l=r.openEnd(t))
if(r.to>i)return l+(r.point&&r.to>i?1:0)
o=r.to,r.next()}}static of(t,e=!1){let i=new Et
for(let n of t instanceof At?[t]:e?function(t){if(t.length>1)for(let e=t[0],i=1;i<t.length;i++){let n=t[i]
if(Dt(e,n)>0)return t.slice().sort(Dt)
e=n}return t}(t):t)i.add(n.from,n.to,n.value)
return i.finish()}}Tt.empty=new Tt([],[],null,-1),Tt.empty.nextLayer=Tt.empty
class Et{finishChunk(t){this.chunks.push(new Ot(this.from,this.to,this.value,this.maxPoint)),this.chunkPos.push(this.chunkStart),this.chunkStart=-1,this.setMaxPoint=Math.max(this.setMaxPoint,this.maxPoint),this.maxPoint=-1,t&&(this.from=[],this.to=[],this.value=[])}constructor(){this.chunks=[],this.chunkPos=[],this.chunkStart=-1,this.last=null,this.lastFrom=-1e9,this.lastTo=-1e9,this.from=[],this.to=[],this.value=[],this.maxPoint=-1,this.setMaxPoint=-1,this.nextLayer=null}add(t,e,i){this.addInner(t,e,i)||(this.nextLayer||(this.nextLayer=new Et)).add(t,e,i)}addInner(t,e,i){let n=t-this.lastTo||i.startSide-this.last.endSide
if(n<=0&&(t-this.lastFrom||i.startSide-this.last.startSide)<0)throw new Error("Ranges must be added sorted by `from` position and `startSide`")
return!(n<0||(250==this.from.length&&this.finishChunk(!0),this.chunkStart<0&&(this.chunkStart=t),this.from.push(t-this.chunkStart),this.to.push(e-this.chunkStart),this.last=i,this.lastFrom=t,this.lastTo=e,this.value.push(i),i.point&&(this.maxPoint=Math.max(this.maxPoint,e-t)),0))}addChunk(t,e){if((t-this.lastTo||e.value[0].startSide-this.last.endSide)<0)return!1
this.from.length&&this.finishChunk(!0),this.setMaxPoint=Math.max(this.setMaxPoint,e.maxPoint),this.chunks.push(e),this.chunkPos.push(t)
let i=e.value.length-1
return this.last=e.value[i],this.lastFrom=e.from[i]+t,this.lastTo=e.to[i]+t,!0}finish(){return this.finishInner(Tt.empty)}finishInner(t){if(this.from.length&&this.finishChunk(!1),0==this.chunks.length)return t
let e=Tt.create(this.chunkPos,this.chunks,this.nextLayer?this.nextLayer.finishInner(t):t,this.setMaxPoint)
return this.from=null,e}}function Rt(t,e,i){let n=new Map
for(let r of t)for(let t=0;t<r.chunk.length;t++)r.chunk[t].maxPoint<=0&&n.set(r.chunk[t],r.chunkPos[t])
let s=new Set
for(let r of e)for(let t=0;t<r.chunk.length;t++){let e=n.get(r.chunk[t])
null==e||(i?i.mapPos(e):e)!=r.chunkPos[t]||(null==i?void 0:i.touchesRange(e,e+r.chunk[t].length))||s.add(r.chunk[t])}return s}class Bt{constructor(t,e,i,n=0){this.layer=t,this.skip=e,this.minPoint=i,this.rank=n}get startSide(){return this.value?this.value.startSide:0}get endSide(){return this.value?this.value.endSide:0}goto(t,e=-1e9){return this.chunkIndex=this.rangeIndex=0,this.gotoInner(t,e,!1),this}gotoInner(t,e,i){for(;this.chunkIndex<this.layer.chunk.length;){let e=this.layer.chunk[this.chunkIndex]
if(!(this.skip&&this.skip.has(e)||this.layer.chunkEnd(this.chunkIndex)<t||e.maxPoint<this.minPoint))break
this.chunkIndex++,i=!1}if(this.chunkIndex<this.layer.chunk.length){let n=this.layer.chunk[this.chunkIndex].findIndex(t-this.layer.chunkPos[this.chunkIndex],e,!0);(!i||this.rangeIndex<n)&&this.setRangeIndex(n)}this.next()}forward(t,e){(this.to-t||this.endSide-e)<0&&this.gotoInner(t,e,!0)}next(){for(;;){if(this.chunkIndex==this.layer.chunk.length){this.from=this.to=1e9,this.value=null
break}{let t=this.layer.chunkPos[this.chunkIndex],e=this.layer.chunk[this.chunkIndex],i=t+e.from[this.rangeIndex]
if(this.from=i,this.to=t+e.to[this.rangeIndex],this.value=e.value[this.rangeIndex],this.setRangeIndex(this.rangeIndex+1),this.minPoint<0||this.value.point&&this.to-this.from>=this.minPoint)break}}}setRangeIndex(t){if(t==this.layer.chunk[this.chunkIndex].value.length){if(this.chunkIndex++,this.skip)for(;this.chunkIndex<this.layer.chunk.length&&this.skip.has(this.layer.chunk[this.chunkIndex]);)this.chunkIndex++
this.rangeIndex=0}else this.rangeIndex=t}nextChunk(){this.chunkIndex++,this.rangeIndex=0,this.next()}compare(t){return this.from-t.from||this.startSide-t.startSide||this.rank-t.rank||this.to-t.to||this.endSide-t.endSide}}class Lt{constructor(t){this.heap=t}static from(t,e=null,i=-1){let n=[]
for(let s=0;s<t.length;s++)for(let r=t[s];!r.isEmpty;r=r.nextLayer)r.maxPoint>=i&&n.push(new Bt(r,e,i,s))
return 1==n.length?n[0]:new Lt(n)}get startSide(){return this.value?this.value.startSide:0}goto(t,e=-1e9){for(let i of this.heap)i.goto(t,e)
for(let i=this.heap.length>>1;i>=0;i--)Pt(this.heap,i)
return this.next(),this}forward(t,e){for(let i of this.heap)i.forward(t,e)
for(let i=this.heap.length>>1;i>=0;i--)Pt(this.heap,i);(this.to-t||this.value.endSide-e)<0&&this.next()}next(){if(0==this.heap.length)this.from=this.to=1e9,this.value=null,this.rank=-1
else{let t=this.heap[0]
this.from=t.from,this.to=t.to,this.value=t.value,this.rank=t.rank,t.value&&t.next(),Pt(this.heap,0)}}}function Pt(t,e){for(let i=t[e];;){let n=1+(e<<1)
if(n>=t.length)break
let s=t[n]
if(n+1<t.length&&s.compare(t[n+1])>=0&&(s=t[n+1],n++),i.compare(s)<0)break
t[n]=i,t[e]=s,e=n}}class It{constructor(t,e,i){this.minPoint=i,this.active=[],this.activeTo=[],this.activeRank=[],this.minActive=-1,this.point=null,this.pointFrom=0,this.pointRank=0,this.to=-1e9,this.endSide=0,this.openStart=-1,this.cursor=Lt.from(t,e,i)}goto(t,e=-1e9){return this.cursor.goto(t,e),this.active.length=this.activeTo.length=this.activeRank.length=0,this.minActive=-1,this.to=t,this.endSide=e,this.openStart=-1,this.next(),this}forward(t,e){for(;this.minActive>-1&&(this.activeTo[this.minActive]-t||this.active[this.minActive].endSide-e)<0;)this.removeActive(this.minActive)
this.cursor.forward(t,e)}removeActive(t){Wt(this.active,t),Wt(this.activeTo,t),Wt(this.activeRank,t),this.minActive=Ft(this.active,this.activeTo)}addActive(t){let e=0,{value:i,to:n,rank:s}=this.cursor
for(;e<this.activeRank.length&&this.activeRank[e]<=s;)e++
Vt(this.active,e,i),Vt(this.activeTo,e,n),Vt(this.activeRank,e,s),t&&Vt(t,e,this.cursor.from),this.minActive=Ft(this.active,this.activeTo)}next(){let t=this.to,e=this.point
this.point=null
let i=this.openStart<0?[]:null
for(;;){let n=this.minActive
if(n>-1&&(this.activeTo[n]-this.cursor.from||this.active[n].endSide-this.cursor.startSide)<0){if(this.activeTo[n]>t){this.to=this.activeTo[n],this.endSide=this.active[n].endSide
break}this.removeActive(n),i&&Wt(i,n)}else{if(!this.cursor.value){this.to=this.endSide=1e9
break}if(this.cursor.from>t){this.to=this.cursor.from,this.endSide=this.cursor.startSide
break}{let t=this.cursor.value
if(t.point){if(!(e&&this.cursor.to==this.to&&this.cursor.from<this.cursor.to)){this.point=t,this.pointFrom=this.cursor.from,this.pointRank=this.cursor.rank,this.to=this.cursor.to,this.endSide=t.endSide,this.cursor.next(),this.forward(this.to,this.endSide)
break}this.cursor.next()}else this.addActive(i),this.cursor.next()}}}if(i){this.openStart=0
for(let e=i.length-1;e>=0&&i[e]<t;e--)this.openStart++}}activeForPoint(t){if(!this.active.length)return this.active
let e=[]
for(let i=this.active.length-1;i>=0&&!(this.activeRank[i]<this.pointRank);i--)(this.activeTo[i]>t||this.activeTo[i]==t&&this.active[i].endSide>=this.point.endSide)&&e.push(this.active[i])
return e.reverse()}openEnd(t){let e=0
for(let i=this.activeTo.length-1;i>=0&&this.activeTo[i]>t;i--)e++
return e}}function Nt(t,e,i,n,s,r){t.goto(e),i.goto(n)
let o=n+s,l=n,a=n-e
for(;;){let e=t.to+a-i.to||t.endSide-i.endSide,n=e<0?t.to+a:i.to,s=Math.min(n,o)
if(t.point||i.point?t.point&&i.point&&(t.point==i.point||t.point.eq(i.point))&&Ht(t.activeForPoint(t.to),i.activeForPoint(i.to))||r.comparePoint(l,s,t.point,i.point):s>l&&!Ht(t.active,i.active)&&r.compareRange(l,s,t.active,i.active),n>o)break
l=n,e<=0&&t.next(),e>=0&&i.next()}}function Ht(t,e){if(t.length!=e.length)return!1
for(let i=0;i<t.length;i++)if(t[i]!=e[i]&&!t[i].eq(e[i]))return!1
return!0}function Wt(t,e){for(let i=e,n=t.length-1;i<n;i++)t[i]=t[i+1]
t.pop()}function Vt(t,e,i){for(let n=t.length-1;n>=e;n--)t[n+1]=t[n]
t[e]=i}function Ft(t,e){let i=-1,n=1e9
for(let s=0;s<e.length;s++)(e[s]-n||t[s].endSide-t[i].endSide)<0&&(i=s,n=e[s])
return i}function zt(t,e,i=t.length){let n=0
for(let s=0;s<i;)9==t.charCodeAt(s)?(n+=e-n%e,s++):(n++,s=w(t,s))
return n}function qt(t,e,i,n){for(let s=0,r=0;;){if(r>=e)return s
if(s==t.length)break
r+=9==t.charCodeAt(s)?i-r%i:1,s=w(t,s)}return!0===n?-1:t.length}const _t="undefined"==typeof Symbol?"__ͼ":Symbol.for("ͼ"),jt="undefined"==typeof Symbol?"__styleSet"+Math.floor(1e8*Math.random()):Symbol("styleSet"),Kt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:{}
class $t{constructor(t,e){this.rules=[]
let{finish:i}=e||{}
function n(t){return/^@/.test(t)?[t]:t.split(/,\s*/)}function s(t,e,r,o){let l=[],a=/^@(\w+)\b/.exec(t[0]),h=a&&"keyframes"==a[1]
if(a&&null==e)return r.push(t[0]+";")
for(let i in e){let o=e[i]
if(/&/.test(i))s(i.split(/,\s*/).map(e=>t.map(t=>e.replace(/&/,t))).reduce((t,e)=>t.concat(e)),o,r)
else if(o&&"object"==typeof o){if(!a)throw new RangeError("The value of a property ("+i+") should be a primitive value.")
s(n(i),o,l,h)}else null!=o&&l.push(i.replace(/_.*/,"").replace(/[A-Z]/g,t=>"-"+t.toLowerCase())+": "+o+";")}(l.length||h)&&r.push((!i||a||o?t:t.map(i)).join(", ")+" {"+l.join(" ")+"}")}for(let r in t)s(n(r),t[r],this.rules)}getRules(){return this.rules.join("\n")}static newName(){let t=Kt[_t]||1
return Kt[_t]=t+1,"ͼ"+t.toString(36)}static mount(t,e,i){let n=t[jt],s=i&&i.nonce
n?s&&n.setNonce(s):n=new Gt(t,s),n.mount(Array.isArray(e)?e:[e])}}let Ut=new Map
class Gt{constructor(t,e){let i=t.ownerDocument||t,n=i.defaultView
if(!t.head&&t.adoptedStyleSheets&&n.CSSStyleSheet){let e=Ut.get(i)
if(e)return t.adoptedStyleSheets=[e.sheet,...t.adoptedStyleSheets],t[jt]=e
this.sheet=new n.CSSStyleSheet,t.adoptedStyleSheets=[this.sheet,...t.adoptedStyleSheets],Ut.set(i,this)}else{this.styleTag=i.createElement("style"),e&&this.styleTag.setAttribute("nonce",e)
let n=t.head||t
n.insertBefore(this.styleTag,n.firstChild)}this.modules=[],t[jt]=this}mount(t){let e=this.sheet,i=0,n=0
for(let s=0;s<t.length;s++){let r=t[s],o=this.modules.indexOf(r)
if(o<n&&o>-1&&(this.modules.splice(o,1),n--,o=-1),-1==o){if(this.modules.splice(n++,0,r),e)for(let t=0;t<r.rules.length;t++)e.insertRule(r.rules[t],i++)}else{for(;n<o;)i+=this.modules[n++].rules.length
i+=r.rules.length,n++}}if(!e){let t=""
for(let e=0;e<this.modules.length;e++)t+=this.modules[e].getRules()+"\n"
this.styleTag.textContent=t}}setNonce(t){this.styleTag&&this.styleTag.getAttribute("nonce")!=t&&this.styleTag.setAttribute("nonce",t)}}for(var Jt={8:"Backspace",9:"Tab",10:"Enter",12:"NumLock",13:"Enter",16:"Shift",17:"Control",18:"Alt",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",44:"PrintScreen",45:"Insert",46:"Delete",59:";",61:"=",91:"Meta",92:"Meta",106:"*",107:"+",108:",",109:"-",110:".",111:"/",144:"NumLock",145:"ScrollLock",160:"Shift",161:"Shift",162:"Control",163:"Control",164:"Alt",165:"Alt",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},Xt={48:")",49:"!",50:"@",51:"#",52:"$",53:"%",54:"^",55:"&",56:"*",57:"(",59:":",61:"+",173:"_",186:":",187:"+",188:"<",189:"_",190:">",191:"?",192:"~",219:"{",220:"|",221:"}",222:'"'},Yt="undefined"!=typeof navigator&&/Mac/.test(navigator.platform),Qt="undefined"!=typeof navigator&&/MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent),Zt=0;Zt<10;Zt++)Jt[48+Zt]=Jt[96+Zt]=String(Zt)
for(Zt=1;Zt<=24;Zt++)Jt[Zt+111]="F"+Zt
for(Zt=65;Zt<=90;Zt++)Jt[Zt]=String.fromCharCode(Zt+32),Xt[Zt]=String.fromCharCode(Zt)
for(var te in Jt)Xt.hasOwnProperty(te)||(Xt[te]=Jt[te])
function ee(t){let e
return e=11==t.nodeType?t.getSelection?t:t.ownerDocument:t,e.getSelection()}function ie(t,e){return!!e&&(t==e||t.contains(1!=e.nodeType?e.parentNode:e))}function ne(t,e){if(!e.anchorNode)return!1
try{return ie(t,e.anchorNode)}catch(t){return!1}}function se(t){return 3==t.nodeType?me(t,0,t.nodeValue.length).getClientRects():1==t.nodeType?t.getClientRects():[]}function re(t,e,i,n){return!!i&&(le(t,e,i,n,-1)||le(t,e,i,n,1))}function oe(t){for(var e=0;;e++)if(!(t=t.previousSibling))return e}function le(t,e,i,n,s){for(;;){if(t==i&&e==n)return!0
if(e==(s<0?0:ae(t))){if("DIV"==t.nodeName)return!1
let i=t.parentNode
if(!i||1!=i.nodeType)return!1
e=oe(t)+(s<0?0:1),t=i}else{if(1!=t.nodeType)return!1
if(1==(t=t.childNodes[e+(s<0?-1:0)]).nodeType&&"false"==t.contentEditable)return!1
e=s<0?ae(t):0}}}function ae(t){return 3==t.nodeType?t.nodeValue.length:t.childNodes.length}function he(t,e){let i=e?t.left:t.right
return{left:i,right:i,top:t.top,bottom:t.bottom}}function ce(t){return{left:0,right:t.innerWidth,top:0,bottom:t.innerHeight}}class ue{constructor(){this.anchorNode=null,this.anchorOffset=0,this.focusNode=null,this.focusOffset=0}eq(t){return this.anchorNode==t.anchorNode&&this.anchorOffset==t.anchorOffset&&this.focusNode==t.focusNode&&this.focusOffset==t.focusOffset}setRange(t){let{anchorNode:e,focusNode:i}=t
this.set(e,Math.min(t.anchorOffset,e?ae(e):0),i,Math.min(t.focusOffset,i?ae(i):0))}set(t,e,i,n){this.anchorNode=t,this.anchorOffset=e,this.focusNode=i,this.focusOffset=n}}let fe,de=null
function pe(t){if(t.setActive)return t.setActive()
if(de)return t.focus(de)
let e=[]
for(let i=t;i&&(e.push(i,i.scrollTop,i.scrollLeft),i!=i.ownerDocument);i=i.parentNode);if(t.focus(null==de?{get preventScroll(){return de={preventScroll:!0},!0}}:void 0),!de){de=!1
for(let t=0;t<e.length;){let i=e[t++],n=e[t++],s=e[t++]
i.scrollTop!=n&&(i.scrollTop=n),i.scrollLeft!=s&&(i.scrollLeft=s)}}}function me(t,e,i=e){let n=fe||(fe=document.createRange())
return n.setEnd(t,i),n.setStart(t,e),n}function ge(t,e,i){let n={key:e,code:e,keyCode:i,which:i,cancelable:!0},s=new KeyboardEvent("keydown",n)
s.synthetic=!0,t.dispatchEvent(s)
let r=new KeyboardEvent("keyup",n)
return r.synthetic=!0,t.dispatchEvent(r),s.defaultPrevented||r.defaultPrevented}function ve(t){for(;t.attributes.length;)t.removeAttributeNode(t.attributes[0])}function we(t){return t.scrollTop>Math.max(1,t.scrollHeight-t.clientHeight-4)}class ye{constructor(t,e,i=!0){this.node=t,this.offset=e,this.precise=i}static before(t,e){return new ye(t.parentNode,oe(t),e)}static after(t,e){return new ye(t.parentNode,oe(t)+1,e)}}const be=[]
class xe{constructor(){this.parent=null,this.dom=null,this.flags=2}get overrideDOMText(){return null}get posAtStart(){return this.parent?this.parent.posBefore(this):0}get posAtEnd(){return this.posAtStart+this.length}posBefore(t){let e=this.posAtStart
for(let i of this.children){if(i==t)return e
e+=i.length+i.breakAfter}throw new RangeError("Invalid child in posBefore")}posAfter(t){return this.posBefore(t)+t.length}sync(t,e){if(2&this.flags){let i,n=this.dom,s=null
for(let r of this.children){if(7&r.flags){if(!r.dom&&(i=s?s.nextSibling:n.firstChild)){let t=xe.get(i);(!t||!t.parent&&t.canReuseDOM(r))&&r.reuseDOM(i)}r.sync(t,e),r.flags&=-8}if(i=s?s.nextSibling:n.firstChild,e&&!e.written&&e.node==n&&i!=r.dom&&(e.written=!0),r.dom.parentNode==n)for(;i&&i!=r.dom;)i=ke(i)
else n.insertBefore(r.dom,i)
s=r.dom}for(i=s?s.nextSibling:n.firstChild,i&&e&&e.node==n&&(e.written=!0);i;)i=ke(i)}else if(1&this.flags)for(let i of this.children)7&i.flags&&(i.sync(t,e),i.flags&=-8)}reuseDOM(t){}localPosFromDOM(t,e){let i
if(t==this.dom)i=this.dom.childNodes[e]
else{let n=0==ae(t)?0:0==e?-1:1
for(;;){let e=t.parentNode
if(e==this.dom)break
0==n&&e.firstChild!=e.lastChild&&(n=t==e.firstChild?-1:1),t=e}i=n<0?t:t.nextSibling}if(i==this.dom.firstChild)return 0
for(;i&&!xe.get(i);)i=i.nextSibling
if(!i)return this.length
for(let n=0,s=0;;n++){let t=this.children[n]
if(t.dom==i)return s
s+=t.length+t.breakAfter}}domBoundsAround(t,e,i=0){let n=-1,s=-1,r=-1,o=-1
for(let l=0,a=i,h=i;l<this.children.length;l++){let i=this.children[l],c=a+i.length
if(a<t&&c>e)return i.domBoundsAround(t,e,a)
if(c>=t&&-1==n&&(n=l,s=a),a>e&&i.dom.parentNode==this.dom){r=l,o=h
break}h=c,a=c+i.breakAfter}return{from:s,to:o<0?i+this.length:o,startDOM:(n?this.children[n-1].dom.nextSibling:null)||this.dom.firstChild,endDOM:r<this.children.length&&r>=0?this.children[r].dom:null}}markDirty(t=!1){this.flags|=2,this.markParentsDirty(t)}markParentsDirty(t){for(let e=this.parent;e;e=e.parent){if(t&&(e.flags|=2),1&e.flags)return
e.flags|=1,t=!1}}setParent(t){this.parent!=t&&(this.parent=t,7&this.flags&&this.markParentsDirty(!0))}setDOM(t){this.dom&&(this.dom.cmView=null),this.dom=t,t.cmView=this}get rootView(){for(let t=this;;){let e=t.parent
if(!e)return t
t=e}}replaceChildren(t,e,i=be){this.markDirty()
for(let n=t;n<e;n++){let t=this.children[n]
t.parent==this&&t.destroy()}this.children.splice(t,e-t,...i)
for(let n=0;n<i.length;n++)i[n].setParent(this)}ignoreMutation(t){return!1}ignoreEvent(t){return!1}childCursor(t=this.length){return new Se(this.children,t,this.children.length)}childPos(t,e=1){return this.childCursor().findPos(t,e)}toString(){let t=this.constructor.name.replace("View","")
return t+(this.children.length?"("+this.children.join()+")":this.length?"["+("Text"==t?this.text:this.length)+"]":"")+(this.breakAfter?"#":"")}static get(t){return t.cmView}get isEditable(){return!0}get isWidget(){return!1}get isHidden(){return!1}merge(t,e,i,n,s,r){return!1}become(t){return!1}canReuseDOM(t){return t.constructor==this.constructor&&!(8&(this.flags|t.flags))}getSide(){return 0}destroy(){this.parent=null}}function ke(t){let e=t.nextSibling
return t.parentNode.removeChild(t),e}xe.prototype.breakAfter=0
class Se{constructor(t,e,i){this.children=t,this.pos=e,this.i=i,this.off=0}findPos(t,e=1){for(;;){if(t>this.pos||t==this.pos&&(e>0||0==this.i||this.children[this.i-1].breakAfter))return this.off=t-this.pos,this
let i=this.children[--this.i]
this.pos-=i.length+i.breakAfter}}}function Ce(t,e,i,n,s,r,o,l,a){let{children:h}=t,c=h.length?h[e]:null,u=r.length?r[r.length-1]:null,f=u?u.breakAfter:o
if(!(e==n&&c&&!o&&!f&&r.length<2&&c.merge(i,s,r.length?u:null,0==i,l,a))){if(n<h.length){let t=h[n]
t&&s<t.length?(e==n&&(t=t.split(s),s=0),!f&&u&&t.merge(0,s,u,!0,0,a)?r[r.length-1]=t:(s&&t.merge(0,s,null,!1,0,a),r.push(t))):(null==t?void 0:t.breakAfter)&&(u?u.breakAfter=1:o=1),n++}for(c&&(c.breakAfter=o,i>0&&(!o&&r.length&&c.merge(i,c.length,r[0],!1,l,0)?c.breakAfter=r.shift().breakAfter:(i<c.length||c.children.length&&0==c.children[c.children.length-1].length)&&c.merge(i,c.length,null,!1,l,0),e++));e<n&&r.length;)if(h[n-1].become(r[r.length-1]))n--,r.pop(),a=r.length?0:l
else{if(!h[e].become(r[0]))break
e++,r.shift(),l=r.length?0:a}!r.length&&e&&n<h.length&&!h[e-1].breakAfter&&h[n].merge(0,0,h[e-1],!1,l,a)&&e--,(e<n||r.length)&&t.replaceChildren(e,n,r)}}function Me(t,e,i,n,s,r){let o=t.childCursor(),{i:l,off:a}=o.findPos(i,1),{i:h,off:c}=o.findPos(e,-1),u=e-i
for(let f of n)u+=f.length
t.length+=u,Ce(t,h,c,l,a,n,0,s,r)}const Ae="￿"
class De{constructor(t,e){this.points=t,this.text="",this.lineSeparator=e.facet(St.lineSeparator)}append(t){this.text+=t}lineBreak(){this.text+=Ae}readRange(t,e){if(!t)return this
let i=t.parentNode
for(let n=t;;){this.findPointBefore(i,n)
let t=this.text.length
this.readNode(n)
let s=n.nextSibling
if(s==e)break
let r=xe.get(n),o=xe.get(s);(r&&o?r.breakAfter:(r?r.breakAfter:Oe(n))||Oe(s)&&("BR"!=n.nodeName||n.cmIgnore)&&this.text.length>t)&&this.lineBreak(),n=s}return this.findPointBefore(i,e),this}readTextNode(t){let e=t.nodeValue
for(let i of this.points)i.node==t&&(i.pos=this.text.length+Math.min(i.offset,e.length))
for(let i=0,n=this.lineSeparator?null:/\r\n?|\n/g;;){let s,r=-1,o=1
if(this.lineSeparator?(r=e.indexOf(this.lineSeparator,i),o=this.lineSeparator.length):(s=n.exec(e))&&(r=s.index,o=s[0].length),this.append(e.slice(i,r<0?e.length:r)),r<0)break
if(this.lineBreak(),o>1)for(let e of this.points)e.node==t&&e.pos>this.text.length&&(e.pos-=o-1)
i=r+o}}readNode(t){if(t.cmIgnore)return
let e=xe.get(t),i=e&&e.overrideDOMText
if(null!=i){this.findPointInside(t,i.length)
for(let t=i.iter();!t.next().done;)t.lineBreak?this.lineBreak():this.append(t.value)}else 3==t.nodeType?this.readTextNode(t):"BR"==t.nodeName?t.nextSibling&&this.lineBreak():1==t.nodeType&&this.readRange(t.firstChild,null)}findPointBefore(t,e){for(let i of this.points)i.node==t&&t.childNodes[i.offset]==e&&(i.pos=this.text.length)}findPointInside(t,e){for(let i of this.points)(3==t.nodeType?i.node==t:t.contains(i.node))&&(i.pos=this.text.length+Math.min(e,i.offset))}}function Oe(t){return 1==t.nodeType&&/^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(t.nodeName)}class Te{constructor(t,e){this.node=t,this.offset=e,this.pos=-1}}let Ee="undefined"!=typeof navigator?navigator:{userAgent:"",vendor:"",platform:""},Re="undefined"!=typeof document?document:{documentElement:{style:{}}}
const Be=/Edge\/(\d+)/.exec(Ee.userAgent),Le=/MSIE \d/.test(Ee.userAgent),Pe=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Ee.userAgent),Ie=!!(Le||Pe||Be),Ne=!Ie&&/gecko\/(\d+)/i.test(Ee.userAgent),He=!Ie&&/Chrome\/(\d+)/.exec(Ee.userAgent),We="webkitFontSmoothing"in Re.documentElement.style,Ve=!Ie&&/Apple Computer/.test(Ee.vendor),Fe=Ve&&(/Mobile\/\w+/.test(Ee.userAgent)||Ee.maxTouchPoints>2)
var ze={mac:Fe||/Mac/.test(Ee.platform),windows:/Win/.test(Ee.platform),linux:/Linux|X11/.test(Ee.platform),ie:Ie,ie_version:Le?Re.documentMode||6:Pe?+Pe[1]:Be?+Be[1]:0,gecko:Ne,gecko_version:Ne?+(/Firefox\/(\d+)/.exec(Ee.userAgent)||[0,0])[1]:0,chrome:!!He,chrome_version:He?+He[1]:0,ios:Fe,android:/Android\b/.test(Ee.userAgent),webkit:We,safari:Ve,webkit_version:We?+(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent)||[0,0])[1]:0,tabSize:null!=Re.documentElement.style.tabSize?"tab-size":"-moz-tab-size"}
class qe extends xe{constructor(t){super(),this.text=t}get length(){return this.text.length}createDOM(t){this.setDOM(t||document.createTextNode(this.text))}sync(t,e){this.dom||this.createDOM(),this.dom.nodeValue!=this.text&&(e&&e.node==this.dom&&(e.written=!0),this.dom.nodeValue=this.text)}reuseDOM(t){3==t.nodeType&&this.createDOM(t)}merge(t,e,i){return!(8&this.flags||i&&(!(i instanceof qe)||this.length-(e-t)+i.length>256||8&i.flags)||(this.text=this.text.slice(0,t)+(i?i.text:"")+this.text.slice(e),this.markDirty(),0))}split(t){let e=new qe(this.text.slice(t))
return this.text=this.text.slice(0,t),this.markDirty(),e.flags|=8&this.flags,e}localPosFromDOM(t,e){return t==this.dom?e:e?this.text.length:0}domAtPos(t){return new ye(this.dom,t)}domBoundsAround(t,e,i){return{from:i,to:i+this.length,startDOM:this.dom,endDOM:this.dom.nextSibling}}coordsAt(t,e){return function(t,e,i){let n=t.nodeValue.length
e>n&&(e=n)
let s=e,r=e,o=0
0==e&&i<0||e==n&&i>=0?ze.chrome||ze.gecko||(e?(s--,o=1):r<n&&(r++,o=-1)):i<0?s--:r<n&&r++
let l=me(t,s,r).getClientRects()
if(!l.length)return null
let a=l[(o?o<0:i>=0)?0:l.length-1]
return ze.safari&&!o&&0==a.width&&(a=Array.prototype.find.call(l,t=>t.width)||a),o?he(a,o<0):a||null}(this.dom,t,e)}}class _e extends xe{constructor(t,e=[],i=0){super(),this.mark=t,this.children=e,this.length=i
for(let n of e)n.setParent(this)}setAttrs(t){if(ve(t),this.mark.class&&(t.className=this.mark.class),this.mark.attrs)for(let e in this.mark.attrs)t.setAttribute(e,this.mark.attrs[e])
return t}canReuseDOM(t){return super.canReuseDOM(t)&&!(8&(this.flags|t.flags))}reuseDOM(t){t.nodeName==this.mark.tagName.toUpperCase()&&(this.setDOM(t),this.flags|=6)}sync(t,e){this.dom?4&this.flags&&this.setAttrs(this.dom):this.setDOM(this.setAttrs(document.createElement(this.mark.tagName))),super.sync(t,e)}merge(t,e,i,n,s,r){return!(i&&(!(i instanceof _e&&i.mark.eq(this.mark))||t&&s<=0||e<this.length&&r<=0)||(Me(this,t,e,i?i.children:[],s-1,r-1),this.markDirty(),0))}split(t){let e=[],i=0,n=-1,s=0
for(let o of this.children){let r=i+o.length
r>t&&e.push(i<t?o.split(t-i):o),n<0&&i>=t&&(n=s),i=r,s++}let r=this.length-t
return this.length=t,n>-1&&(this.children.length=n,this.markDirty()),new _e(this.mark,e,r)}domAtPos(t){return $e(this,t)}coordsAt(t,e){return Ge(this,t,e)}}class je extends xe{static create(t,e,i){return new je(t,e,i)}constructor(t,e,i){super(),this.widget=t,this.length=e,this.side=i,this.prevWidget=null}split(t){let e=je.create(this.widget,this.length-t,this.side)
return this.length-=t,e}sync(t){this.dom&&this.widget.updateDOM(this.dom,t)||(this.dom&&this.prevWidget&&this.prevWidget.destroy(this.dom),this.prevWidget=null,this.setDOM(this.widget.toDOM(t)),this.dom.contentEditable="false")}getSide(){return this.side}merge(t,e,i,n,s,r){return!(i&&(!(i instanceof je&&this.widget.compare(i.widget))||t>0&&s<=0||e<this.length&&r<=0)||(this.length=t+(i?i.length:0)+(this.length-e),0))}become(t){return t instanceof je&&t.side==this.side&&this.widget.constructor==t.widget.constructor&&(this.widget.compare(t.widget)||this.markDirty(!0),this.dom&&!this.prevWidget&&(this.prevWidget=this.widget),this.widget=t.widget,this.length=t.length,!0)}ignoreMutation(){return!0}ignoreEvent(t){return this.widget.ignoreEvent(t)}get overrideDOMText(){if(0==this.length)return o.empty
let t=this
for(;t.parent;)t=t.parent
let{view:e}=t,i=e&&e.state.doc,n=this.posAtStart
return i?i.slice(n,n+this.length):o.empty}domAtPos(t){return(this.length?0==t:this.side>0)?ye.before(this.dom):ye.after(this.dom,t==this.length)}domBoundsAround(){return null}coordsAt(t,e){let i=this.widget.coordsAt(this.dom,t,e)
if(i)return i
let n=this.dom.getClientRects(),s=null
if(!n.length)return null
let r=this.side?this.side<0:t>0
for(let o=r?n.length-1:0;s=n[o],!(t>0?0==o:o==n.length-1||s.top<s.bottom);o+=r?-1:1);return he(s,!r)}get isEditable(){return!1}get isWidget(){return!0}get isHidden(){return this.widget.isHidden}destroy(){super.destroy(),this.dom&&this.widget.destroy(this.dom)}}class Ke extends xe{constructor(t){super(),this.side=t}get length(){return 0}merge(){return!1}become(t){return t instanceof Ke&&t.side==this.side}split(){return new Ke(this.side)}sync(){if(!this.dom){let t=document.createElement("img")
t.className="cm-widgetBuffer",t.setAttribute("aria-hidden","true"),this.setDOM(t)}}getSide(){return this.side}domAtPos(t){return this.side>0?ye.before(this.dom):ye.after(this.dom)}localPosFromDOM(){return 0}domBoundsAround(){return null}coordsAt(t){return this.dom.getBoundingClientRect()}get overrideDOMText(){return o.empty}get isHidden(){return!0}}function $e(t,e){let i=t.dom,{children:n}=t,s=0
for(let r=0;s<n.length;s++){let t=n[s],o=r+t.length
if(!(o==r&&t.getSide()<=0)){if(e>r&&e<o&&t.dom.parentNode==i)return t.domAtPos(e-r)
if(e<=r)break
r=o}}for(let r=s;r>0;r--){let t=n[r-1]
if(t.dom.parentNode==i)return t.domAtPos(t.length)}for(let r=s;r<n.length;r++){let t=n[r]
if(t.dom.parentNode==i)return t.domAtPos(0)}return new ye(i,0)}function Ue(t,e,i){let n,{children:s}=t
i>0&&e instanceof _e&&s.length&&(n=s[s.length-1])instanceof _e&&n.mark.eq(e.mark)?Ue(n,e.children[0],i-1):(s.push(e),e.setParent(t)),t.length+=e.length}function Ge(t,e,i){let n=null,s=-1,r=null,o=-1
!function t(e,l){for(let a=0,h=0;a<e.children.length&&h<=l;a++){let c=e.children[a],u=h+c.length
u>=l&&(c.children.length?t(c,l-h):(!r||r.isHidden&&i>0)&&(u>l||h==u&&c.getSide()>0)?(r=c,o=l-h):(h<l||h==u&&c.getSide()<0&&!c.isHidden)&&(n=c,s=l-h)),h=u}}(t,e)
let l=(i<0?n:r)||n||r
return l?l.coordsAt(Math.max(0,l==n?s:o),i):function(t){let e=t.dom.lastChild
if(!e)return t.dom.getBoundingClientRect()
let i=se(e)
return i[i.length-1]||null}(t)}function Je(t,e){for(let i in t)"class"==i&&e.class?e.class+=" "+t.class:"style"==i&&e.style?e.style+=";"+t.style:e[i]=t[i]
return e}qe.prototype.children=je.prototype.children=Ke.prototype.children=be
const Xe=Object.create(null)
function Ye(t,e,i){if(t==e)return!0
t||(t=Xe),e||(e=Xe)
let n=Object.keys(t),s=Object.keys(e)
if(n.length-(i&&n.indexOf(i)>-1?1:0)!=s.length-(i&&s.indexOf(i)>-1?1:0))return!1
for(let r of n)if(r!=i&&(-1==s.indexOf(r)||t[r]!==e[r]))return!1
return!0}function Qe(t,e,i){let n=!1
if(e)for(let s in e)i&&s in i||(n=!0,"style"==s?t.style.cssText="":t.removeAttribute(s))
if(i)for(let s in i)e&&e[s]==i[s]||(n=!0,"style"==s?t.style.cssText=i[s]:t.setAttribute(s,i[s]))
return n}function Ze(t){let e=Object.create(null)
for(let i=0;i<t.attributes.length;i++){let n=t.attributes[i]
e[n.name]=n.value}return e}class ti{eq(t){return!1}updateDOM(t,e){return!1}compare(t){return this==t||this.constructor==t.constructor&&this.eq(t)}get estimatedHeight(){return-1}get lineBreaks(){return 0}ignoreEvent(t){return!0}coordsAt(t,e,i){return null}get isHidden(){return!1}destroy(t){}}var ei=function(t){return t[t.Text=0]="Text",t[t.WidgetBefore=1]="WidgetBefore",t[t.WidgetAfter=2]="WidgetAfter",t[t.WidgetRange=3]="WidgetRange",t}(ei||(ei={}))
class ii extends Mt{constructor(t,e,i,n){super(),this.startSide=t,this.endSide=e,this.widget=i,this.spec=n}get heightRelevant(){return!1}static mark(t){return new ni(t)}static widget(t){let e=Math.max(-1e4,Math.min(1e4,t.side||0)),i=!!t.block
return e+=i&&!t.inlineOrder?e>0?3e8:-4e8:e>0?1e8:-1e8,new ri(t,e,e,i,t.widget||null,!1)}static replace(t){let e,i,n=!!t.block
if(t.isBlockGap)e=-5e8,i=4e8
else{let{start:s,end:r}=oi(t,n)
e=(s?n?-3e8:-1:5e8)-1,i=1+(r?n?2e8:1:-6e8)}return new ri(t,e,i,n,t.widget||null,!0)}static line(t){return new si(t)}static set(t,e=!1){return Tt.of(t,e)}hasHeight(){return!!this.widget&&this.widget.estimatedHeight>-1}}ii.none=Tt.empty
class ni extends ii{constructor(t){let{start:e,end:i}=oi(t)
super(e?-1:5e8,i?1:-6e8,null,t),this.tagName=t.tagName||"span",this.class=t.class||"",this.attrs=t.attributes||null}eq(t){var e,i
return this==t||t instanceof ni&&this.tagName==t.tagName&&(this.class||(null===(e=this.attrs)||void 0===e?void 0:e.class))==(t.class||(null===(i=t.attrs)||void 0===i?void 0:i.class))&&Ye(this.attrs,t.attrs,"class")}range(t,e=t){if(t>=e)throw new RangeError("Mark decorations may not be empty")
return super.range(t,e)}}ni.prototype.point=!1
class si extends ii{constructor(t){super(-2e8,-2e8,null,t)}eq(t){return t instanceof si&&this.spec.class==t.spec.class&&Ye(this.spec.attributes,t.spec.attributes)}range(t,e=t){if(e!=t)throw new RangeError("Line decoration ranges must be zero-length")
return super.range(t,e)}}si.prototype.mapMode=D.TrackBefore,si.prototype.point=!0
class ri extends ii{constructor(t,e,i,n,s,r){super(e,i,s,t),this.block=n,this.isReplace=r,this.mapMode=n?e<=0?D.TrackBefore:D.TrackAfter:D.TrackDel}get type(){return this.startSide<this.endSide?ei.WidgetRange:this.startSide<=0?ei.WidgetBefore:ei.WidgetAfter}get heightRelevant(){return this.block||!!this.widget&&(this.widget.estimatedHeight>=5||this.widget.lineBreaks>0)}eq(t){return t instanceof ri&&((e=this.widget)==(i=t.widget)||!!(e&&i&&e.compare(i)))&&this.block==t.block&&this.startSide==t.startSide&&this.endSide==t.endSide
var e,i}range(t,e=t){if(this.isReplace&&(t>e||t==e&&this.startSide>0&&this.endSide<=0))throw new RangeError("Invalid range for replacement decoration")
if(!this.isReplace&&e!=t)throw new RangeError("Widget decorations can only have zero-length ranges")
return super.range(t,e)}}function oi(t,e=!1){let{inclusiveStart:i,inclusiveEnd:n}=t
return null==i&&(i=t.inclusive),null==n&&(n=t.inclusive),{start:null!=i?i:e,end:null!=n?n:e}}function li(t,e,i,n=0){let s=i.length-1
s>=0&&i[s]+n>=t?i[s]=Math.max(i[s],e):i.push(t,e)}ri.prototype.point=!0
class ai extends xe{constructor(){super(...arguments),this.children=[],this.length=0,this.prevAttrs=void 0,this.attrs=null,this.breakAfter=0}merge(t,e,i,n,s,r){if(i){if(!(i instanceof ai))return!1
this.dom||i.transferDOM(this)}return n&&this.setDeco(i?i.attrs:null),Me(this,t,e,i?i.children:[],s,r),!0}split(t){let e=new ai
if(e.breakAfter=this.breakAfter,0==this.length)return e
let{i:i,off:n}=this.childPos(t)
n&&(e.append(this.children[i].split(n),0),this.children[i].merge(n,this.children[i].length,null,!1,0,0),i++)
for(let s=i;s<this.children.length;s++)e.append(this.children[s],0)
for(;i>0&&0==this.children[i-1].length;)this.children[--i].destroy()
return this.children.length=i,this.markDirty(),this.length=t,e}transferDOM(t){this.dom&&(this.markDirty(),t.setDOM(this.dom),t.prevAttrs=void 0===this.prevAttrs?this.attrs:this.prevAttrs,this.prevAttrs=void 0,this.dom=null)}setDeco(t){Ye(this.attrs,t)||(this.dom&&(this.prevAttrs=this.attrs,this.markDirty()),this.attrs=t)}append(t,e){Ue(this,t,e)}addLineDeco(t){let e=t.spec.attributes,i=t.spec.class
e&&(this.attrs=Je(e,this.attrs||{})),i&&(this.attrs=Je({class:i},this.attrs||{}))}domAtPos(t){return $e(this,t)}reuseDOM(t){"DIV"==t.nodeName&&(this.setDOM(t),this.flags|=6)}sync(t,e){var i
this.dom?4&this.flags&&(ve(this.dom),this.dom.className="cm-line",this.prevAttrs=this.attrs?null:void 0):(this.setDOM(document.createElement("div")),this.dom.className="cm-line",this.prevAttrs=this.attrs?null:void 0),void 0!==this.prevAttrs&&(Qe(this.dom,this.prevAttrs,this.attrs),this.dom.classList.add("cm-line"),this.prevAttrs=void 0),super.sync(t,e)
let n=this.dom.lastChild
for(;n&&xe.get(n)instanceof _e;)n=n.lastChild
if(!(n&&this.length&&("BR"==n.nodeName||0!=(null===(i=xe.get(n))||void 0===i?void 0:i.isEditable)||ze.ios&&this.children.some(t=>t instanceof qe)))){let t=document.createElement("BR")
t.cmIgnore=!0,this.dom.appendChild(t)}}measureTextSize(){if(0==this.children.length||this.length>20)return null
let t,e=0
for(let i of this.children){if(!(i instanceof qe)||/[^ -~]/.test(i.text))return null
let n=se(i.dom)
if(1!=n.length)return null
e+=n[0].width,t=n[0].height}return e?{lineHeight:this.dom.getBoundingClientRect().height,charWidth:e/this.length,textHeight:t}:null}coordsAt(t,e){let i=Ge(this,t,e)
if(!this.children.length&&i&&this.parent){let{heightOracle:t}=this.parent.view.viewState,e=i.bottom-i.top
if(Math.abs(e-t.lineHeight)<2&&t.textHeight<e){let n=(e-t.textHeight)/2
return{top:i.top+n,bottom:i.bottom-n,left:i.left,right:i.left}}}return i}become(t){return!1}get type(){return ei.Text}static find(t,e){for(let i=0,n=0;i<t.children.length;i++){let s=t.children[i],r=n+s.length
if(r>=e){if(s instanceof ai)return s
if(r>e)break}n=r+s.breakAfter}return null}}class hi extends xe{constructor(t,e,i){super(),this.widget=t,this.length=e,this.type=i,this.breakAfter=0,this.prevWidget=null}merge(t,e,i,n,s,r){return!(i&&(!(i instanceof hi&&this.widget.compare(i.widget))||t>0&&s<=0||e<this.length&&r<=0)||(this.length=t+(i?i.length:0)+(this.length-e),0))}domAtPos(t){return 0==t?ye.before(this.dom):ye.after(this.dom,t==this.length)}split(t){let e=this.length-t
this.length=t
let i=new hi(this.widget,e,this.type)
return i.breakAfter=this.breakAfter,i}get children(){return be}sync(t){this.dom&&this.widget.updateDOM(this.dom,t)||(this.dom&&this.prevWidget&&this.prevWidget.destroy(this.dom),this.prevWidget=null,this.setDOM(this.widget.toDOM(t)),this.dom.contentEditable="false")}get overrideDOMText(){return this.parent?this.parent.view.state.doc.slice(this.posAtStart,this.posAtEnd):o.empty}domBoundsAround(){return null}become(t){return t instanceof hi&&t.widget.constructor==this.widget.constructor&&(t.widget.compare(this.widget)||this.markDirty(!0),this.dom&&!this.prevWidget&&(this.prevWidget=this.widget),this.widget=t.widget,this.length=t.length,this.type=t.type,this.breakAfter=t.breakAfter,!0)}ignoreMutation(){return!0}ignoreEvent(t){return this.widget.ignoreEvent(t)}get isEditable(){return!1}get isWidget(){return!0}coordsAt(t,e){return this.widget.coordsAt(this.dom,t,e)}destroy(){super.destroy(),this.dom&&this.widget.destroy(this.dom)}}class ci{constructor(t,e,i,n){this.doc=t,this.pos=e,this.end=i,this.disallowBlockEffectsFor=n,this.content=[],this.curLine=null,this.breakAtStart=0,this.pendingBuffer=0,this.bufferMarks=[],this.atCursorPos=!0,this.openStart=-1,this.openEnd=-1,this.text="",this.textOff=0,this.cursor=t.iter(),this.skip=e}posCovered(){if(0==this.content.length)return!this.breakAtStart&&this.doc.lineAt(this.pos).from!=this.pos
let t=this.content[this.content.length-1]
return!(t.breakAfter||t instanceof hi&&t.type==ei.WidgetBefore)}getLine(){return this.curLine||(this.content.push(this.curLine=new ai),this.atCursorPos=!0),this.curLine}flushBuffer(t=this.bufferMarks){this.pendingBuffer&&(this.curLine.append(ui(new Ke(-1),t),t.length),this.pendingBuffer=0)}addBlockWidget(t){this.flushBuffer(),this.curLine=null,this.content.push(t)}finish(t){this.pendingBuffer&&t<=this.bufferMarks.length?this.flushBuffer():this.pendingBuffer=0,this.posCovered()||this.getLine()}buildText(t,e,i){for(;t>0;){if(this.textOff==this.text.length){let{value:e,lineBreak:i,done:n}=this.cursor.next(this.skip)
if(this.skip=0,n)throw new Error("Ran out of text content when drawing inline views")
if(i){this.posCovered()||this.getLine(),this.content.length?this.content[this.content.length-1].breakAfter=1:this.breakAtStart=1,this.flushBuffer(),this.curLine=null,this.atCursorPos=!0,t--
continue}this.text=e,this.textOff=0}let n=Math.min(this.text.length-this.textOff,t,512)
this.flushBuffer(e.slice(e.length-i)),this.getLine().append(ui(new qe(this.text.slice(this.textOff,this.textOff+n)),e),i),this.atCursorPos=!0,this.textOff+=n,t-=n,i=0}}span(t,e,i,n){this.buildText(e-t,i,n),this.pos=e,this.openStart<0&&(this.openStart=n)}point(t,e,i,n,s,r){if(this.disallowBlockEffectsFor[r]&&i instanceof ri){if(i.block)throw new RangeError("Block decorations may not be specified via plugins")
if(e>this.doc.lineAt(this.pos).to)throw new RangeError("Decorations that replace line breaks may not be specified via plugins")}let o=e-t
if(i instanceof ri)if(i.block){let{type:t}=i
t!=ei.WidgetAfter||this.posCovered()||this.getLine(),this.addBlockWidget(new hi(i.widget||new fi("div"),o,t))}else{let r=je.create(i.widget||new fi("span"),o,o?0:i.startSide),l=this.atCursorPos&&!r.isEditable&&s<=n.length&&(t<e||i.startSide>0),a=!r.isEditable&&(t<e||s>n.length||i.startSide<=0),h=this.getLine()
2!=this.pendingBuffer||l||r.isEditable||(this.pendingBuffer=0),this.flushBuffer(n),l&&(h.append(ui(new Ke(1),n),s),s=n.length+Math.max(0,s-n.length)),h.append(ui(r,n),s),this.atCursorPos=a,this.pendingBuffer=a?t<e||s>n.length?1:2:0,this.pendingBuffer&&(this.bufferMarks=n.slice())}else this.doc.lineAt(this.pos).from==this.pos&&this.getLine().addLineDeco(i)
o&&(this.textOff+o<=this.text.length?this.textOff+=o:(this.skip+=o-(this.text.length-this.textOff),this.text="",this.textOff=0),this.pos=e),this.openStart<0&&(this.openStart=s)}static build(t,e,i,n,s){let r=new ci(t,e,i,s)
return r.openEnd=Tt.spans(n,e,i,r),r.openStart<0&&(r.openStart=r.openEnd),r.finish(r.openEnd),r}}function ui(t,e){for(let i of e)t=new _e(i,[t],t.length)
return t}class fi extends ti{constructor(t){super(),this.tag=t}eq(t){return t.tag==this.tag}toDOM(){return document.createElement(this.tag)}updateDOM(t){return t.nodeName.toLowerCase()==this.tag}get isHidden(){return!0}}const di=F.define(),pi=F.define(),mi=F.define(),gi=F.define(),vi=F.define(),wi=F.define(),yi=F.define(),bi=F.define({combine:t=>t.some(t=>t)}),xi=F.define({combine:t=>t.some(t=>t)})
class ki{constructor(t,e="nearest",i="nearest",n=5,s=5){this.range=t,this.y=e,this.x=i,this.yMargin=n,this.xMargin=s}map(t){return t.empty?this:new ki(this.range.map(t),this.y,this.x,this.yMargin,this.xMargin)}}const Si=ft.define({map:(t,e)=>t.map(e)})
function Ci(t,e,i){let n=t.facet(gi)
n.length?n[0](e):window.onerror?window.onerror(String(e),i,void 0,void 0,e):i?console.error(i+":",e):console.error(e)}const Mi=F.define({combine:t=>!t.length||t[0]})
let Ai=0
const Di=F.define()
class Oi{constructor(t,e,i,n){this.id=t,this.create=e,this.domEventHandlers=i,this.extension=n(this)}static define(t,e){const{eventHandlers:i,provide:n,decorations:s}=e||{}
return new Oi(Ai++,t,i,t=>{let e=[Di.of(t)]
return s&&e.push(Bi.of(e=>{let i=e.plugin(t)
return i?s(i):ii.none})),n&&e.push(n(t)),e})}static fromClass(t,e){return Oi.define(e=>new t(e),e)}}class Ti{constructor(t){this.spec=t,this.mustUpdate=null,this.value=null}update(t){if(this.value){if(this.mustUpdate){let i=this.mustUpdate
if(this.mustUpdate=null,this.value.update)try{this.value.update(i)}catch(e){if(Ci(i.state,e,"CodeMirror plugin crashed"),this.value.destroy)try{this.value.destroy()}catch(t){}this.deactivate()}}}else if(this.spec)try{this.value=this.spec.create(t)}catch(e){Ci(t.state,e,"CodeMirror plugin crashed"),this.deactivate()}return this}destroy(t){var e
if(null===(e=this.value)||void 0===e?void 0:e.destroy)try{this.value.destroy()}catch(e){Ci(t.state,e,"CodeMirror plugin crashed")}}deactivate(){this.spec=this.value=null}}const Ei=F.define(),Ri=F.define(),Bi=F.define(),Li=F.define(),Pi=F.define()
function Ii(t,e,i){let n=t.state.facet(Pi)
if(!n.length)return n
let s=n.map(e=>e instanceof Function?e(t):e),r=[]
return Tt.spans(s,e,i,{point(){},span(t,e,i,n){let s=r
for(let r=i.length-1;r>=0;r--,n--){let o,l=i[r].spec.bidiIsolate
if(null!=l)if(n>0&&s.length&&(o=s[s.length-1]).to==t&&o.direction==l)o.to=e,s=o.inner
else{let i={from:t,to:e,direction:l,inner:[]}
s.push(i),s=i.inner}}}}),r}const Ni=F.define()
function Hi(t){let e=0,i=0,n=0,s=0
for(let r of t.state.facet(Ni)){let o=r(t)
o&&(null!=o.left&&(e=Math.max(e,o.left)),null!=o.right&&(i=Math.max(i,o.right)),null!=o.top&&(n=Math.max(n,o.top)),null!=o.bottom&&(s=Math.max(s,o.bottom)))}return{left:e,right:i,top:n,bottom:s}}const Wi=F.define()
class Vi{constructor(t,e,i,n){this.fromA=t,this.toA=e,this.fromB=i,this.toB=n}join(t){return new Vi(Math.min(this.fromA,t.fromA),Math.max(this.toA,t.toA),Math.min(this.fromB,t.fromB),Math.max(this.toB,t.toB))}addToSet(t){let e=t.length,i=this
for(;e>0;e--){let n=t[e-1]
if(!(n.fromA>i.toA)){if(n.toA<i.fromA)break
i=i.join(n),t.splice(e-1,1)}}return t.splice(e,0,i),t}static extendWithRanges(t,e){if(0==e.length)return t
let i=[]
for(let n=0,s=0,r=0,o=0;;n++){let l=n==t.length?null:t[n],a=r-o,h=l?l.fromB:1e9
for(;s<e.length&&e[s]<h;){let t=e[s],n=e[s+1],r=Math.max(o,t),l=Math.min(h,n)
if(r<=l&&new Vi(r+a,l+a,r,l).addToSet(i),n>h)break
s+=2}if(!l)return i
new Vi(l.fromA,l.toA,l.fromB,l.toB).addToSet(i),r=l.toA,o=l.toB}}}class Fi{constructor(t,e,i){this.view=t,this.state=e,this.transactions=i,this.flags=0,this.startState=t.state,this.changes=T.empty(this.startState.doc.length)
for(let s of i)this.changes=this.changes.compose(s.changes)
let n=[]
this.changes.iterChangedRanges((t,e,i,s)=>n.push(new Vi(t,e,i,s))),this.changedRanges=n}static create(t,e,i){return new Fi(t,e,i)}get viewportChanged(){return(4&this.flags)>0}get heightChanged(){return(2&this.flags)>0}get geometryChanged(){return this.docChanged||(10&this.flags)>0}get focusChanged(){return(1&this.flags)>0}get docChanged(){return!this.changes.empty}get selectionSet(){return this.transactions.some(t=>t.selection)}get empty(){return 0==this.flags&&0==this.transactions.length}}var zi=function(t){return t[t.LTR=0]="LTR",t[t.RTL=1]="RTL",t}(zi||(zi={}))
const qi=zi.LTR,_i=zi.RTL
function ji(t){let e=[]
for(let i=0;i<t.length;i++)e.push(1<<+t[i])
return e}const Ki=ji("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),$i=ji("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),Ui=Object.create(null),Gi=[]
for(let ed of["()","[]","{}"]){let t=ed.charCodeAt(0),e=ed.charCodeAt(1)
Ui[t]=e,Ui[e]=-t}function Ji(t){return t<=247?Ki[t]:1424<=t&&t<=1524?2:1536<=t&&t<=1785?$i[t-1536]:1774<=t&&t<=2220?4:8192<=t&&t<=8203?256:64336<=t&&t<=65023?4:8204==t?256:1}const Xi=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/
class Yi{get dir(){return this.level%2?_i:qi}constructor(t,e,i){this.from=t,this.to=e,this.level=i}side(t,e){return this.dir==e==t?this.to:this.from}static find(t,e,i,n){let s=-1
for(let r=0;r<t.length;r++){let o=t[r]
if(o.from<=e&&o.to>=e){if(o.level==i)return r;(s<0||(0!=n?n<0?o.from<e:o.to>e:t[s].level>o.level))&&(s=r)}}if(s<0)throw new RangeError("Index out of range")
return s}}function Qi(t,e){if(t.length!=e.length)return!1
for(let i=0;i<t.length;i++){let n=t[i],s=e[i]
if(n.from!=s.from||n.to!=s.to||n.direction!=s.direction||!Qi(n.inner,s.inner))return!1}return!0}const Zi=[]
function tn(t,e,i,n,s,r,o){let l=n%2?2:1
if(n%2==s%2)for(let a=e,h=0;a<i;){let e=!0,c=!1
if(h==r.length||a<r[h].from){let t=Zi[a]
t!=l&&(e=!1,c=16==t)}let u=e||1!=l?null:[],f=e?n:n+1,d=a
t:for(;;)if(h<r.length&&d==r[h].from){if(c)break t
let p=r[h]
if(!e)for(let t=p.to,e=h+1;;){if(t==i)break t
if(!(e<r.length&&r[e].from==t)){if(Zi[t]==l)break t
break}t=r[e++].to}h++,u?u.push(p):(p.from>a&&o.push(new Yi(a,p.from,f)),en(t,p.direction==qi!=!(f%2)?n+1:n,s,p.inner,p.from,p.to,o),a=p.to),d=p.to}else{if(d==i||(e?Zi[d]!=l:Zi[d]==l))break
d++}u?tn(t,a,d,n+1,s,u,o):a<d&&o.push(new Yi(a,d,f)),a=d}else for(let a=i,h=r.length;a>e;){let i=!0,c=!1
if(!h||a>r[h-1].to){let t=Zi[a-1]
t!=l&&(i=!1,c=16==t)}let u=i||1!=l?null:[],f=i?n:n+1,d=a
t:for(;;)if(h&&d==r[h-1].to){if(c)break t
let p=r[--h]
if(!i)for(let t=p.from,i=h;;){if(t==e)break t
if(!i||r[i-1].to!=t){if(Zi[t-1]==l)break t
break}t=r[--i].from}u?u.push(p):(p.to<a&&o.push(new Yi(p.to,a,f)),en(t,p.direction==qi!=!(f%2)?n+1:n,s,p.inner,p.from,p.to,o),a=p.from),d=p.from}else{if(d==e||(i?Zi[d-1]!=l:Zi[d-1]==l))break
d--}u?tn(t,d,a,n+1,s,u,o):d<a&&o.push(new Yi(d,a,f)),a=d}}function en(t,e,i,n,s,r,o){let l=e%2?2:1
!function(t,e,i,n,s){for(let r=0;r<=n.length;r++){let o=r?n[r-1].to:e,l=r<n.length?n[r].from:i,a=r?256:s
for(let e=o,i=a,n=a;e<l;e++){let s=Ji(t.charCodeAt(e))
512==s?s=i:8==s&&4==n&&(s=16),Zi[e]=4==s?2:s,7&s&&(n=s),i=s}for(let t=o,e=a,n=a;t<l;t++){let s=Zi[t]
if(128==s)t<l-1&&e==Zi[t+1]&&24&e?s=Zi[t]=e:Zi[t]=256
else if(64==s){let s=t+1
for(;s<l&&64==Zi[s];)s++
let r=t&&8==e||s<i&&8==Zi[s]?1==n?1:8:256
for(let e=t;e<s;e++)Zi[e]=r
t=s-1}else 8==s&&1==n&&(Zi[t]=1)
e=s,7&s&&(n=s)}}}(t,s,r,n,l),function(t,e,i,n,s){let r=1==s?2:1
for(let o=0,l=0,a=0;o<=n.length;o++){let h=o?n[o-1].to:e,c=o<n.length?n[o].from:i
for(let e,i,n,o=h;o<c;o++)if(i=Ui[e=t.charCodeAt(o)])if(i<0){for(let t=l-3;t>=0;t-=3)if(Gi[t+1]==-i){let e=Gi[t+2],i=2&e?s:4&e?1&e?r:s:0
i&&(Zi[o]=Zi[Gi[t]]=i),l=t
break}}else{if(189==Gi.length)break
Gi[l++]=o,Gi[l++]=e,Gi[l++]=a}else if(2==(n=Zi[o])||1==n){let t=n==s
a=t?0:1
for(let e=l-3;e>=0;e-=3){let i=Gi[e+2]
if(2&i)break
if(t)Gi[e+2]|=2
else{if(4&i)break
Gi[e+2]|=4}}}}}(t,s,r,n,l),function(t,e,i,n){for(let s=0,r=n;s<=i.length;s++){let o=s?i[s-1].to:t,l=s<i.length?i[s].from:e
for(let a=o;a<l;){let o=Zi[a]
if(256==o){let o=a+1
for(;;)if(o==l){if(s==i.length)break
o=i[s++].to,l=s<i.length?i[s].from:e}else{if(256!=Zi[o])break
o++}let h=1==r,c=h==(1==(o<e?Zi[o]:n))?h?1:2:n
for(let e=o,n=s,r=n?i[n-1].to:t;e>a;)e==r&&(e=i[--n].from,r=n?i[n-1].to:t),Zi[--e]=c
a=o}else r=o,a++}}}(s,r,n,l),tn(t,s,r,e,i,n,o)}function nn(t){return[new Yi(0,t,0)]}let sn=""
function rn(t,e,i,n,s){var r
let o=n.head-t.from,l=-1
if(0==o){if(!s||!t.length)return null
e[0].level!=i&&(o=e[0].side(!1,i),l=0)}else if(o==t.length){if(s)return null
let t=e[e.length-1]
t.level!=i&&(o=t.side(!0,i),l=e.length-1)}l<0&&(l=Yi.find(e,o,null!==(r=n.bidiLevel)&&void 0!==r?r:-1,n.assoc))
let a=e[l]
o==a.side(s,i)&&(a=e[l+=s?1:-1],o=a.side(!s,i))
let h=s==(a.dir==i),c=w(t.text,o,h)
if(sn=t.text.slice(Math.min(o,c),Math.max(o,c)),c!=a.side(s,i))return H.cursor(c+t.from,h?-1:1,a.level)
let u=l==(s?e.length-1:0)?null:e[l+(s?1:-1)]
return u||a.level==i?u&&u.level<a.level?H.cursor(u.side(!s,i)+t.from,s?1:-1,u.level):H.cursor(c+t.from,s?-1:1,a.level):H.cursor(s?t.to:t.from,s?-1:1,i)}class on extends xe{get length(){return this.view.state.doc.length}constructor(t){super(),this.view=t,this.decorations=[],this.dynamicDecorationMap=[],this.hasComposition=null,this.markedForComposition=new Set,this.minWidth=0,this.minWidthFrom=0,this.minWidthTo=0,this.impreciseAnchor=null,this.impreciseHead=null,this.forceSelection=!1,this.lastUpdate=Date.now(),this.setDOM(t.contentDOM),this.children=[new ai],this.children[0].setParent(this),this.updateDeco(),this.updateInner([new Vi(0,0,0,t.state.doc.length)],0,null)}update(t){let e=t.changedRanges
this.minWidth>0&&e.length&&(e.every(({fromA:t,toA:e})=>e<this.minWidthFrom||t>this.minWidthTo)?(this.minWidthFrom=t.changes.mapPos(this.minWidthFrom,1),this.minWidthTo=t.changes.mapPos(this.minWidthTo,1)):this.minWidth=this.minWidthFrom=this.minWidthTo=0)
let i=this.view.inputState.composing<0?null:function(t,e){let i=an(t)
if(!i)return null
let{from:n,to:s,node:r}=i,o=e.mapPos(n,-1),l=e.mapPos(s,1),a=r.nodeValue
if(/[\n\r]/.test(a))return null
if(l-o!=a.length){let i=e.mapPos(n,1),r=e.mapPos(s,-1)
if(r-i==a.length)o=i,l=r
else if(t.state.doc.sliceString(l-a.length,l)==a)o=l-a.length
else{if(t.state.doc.sliceString(o,o+a.length)!=a)return null
l=o+a.length}}let{main:h}=t.state.selection
if(t.state.doc.sliceString(o,l)!=a||o>h.head||l<h.head)return null
let c=[],u=new Vi(n,s,o,l)
for(let f=r.parentNode;;f=f.parentNode){let e=xe.get(f)
if(e instanceof _e)c.push({node:f,deco:e.mark})
else{if(e instanceof ai||"DIV"==f.nodeName&&f.parentNode==t.contentDOM)return{range:u,text:r,marks:c,line:f}
if(f==t.contentDOM)return null
c.push({node:f,deco:new ni({inclusive:!0,attributes:Ze(f),tagName:f.tagName.toLowerCase()})})}}}(this.view,t.changes)
if(this.hasComposition){this.markedForComposition.clear()
let{from:i,to:n}=this.hasComposition
e=new Vi(i,n,t.changes.mapPos(i,-1),t.changes.mapPos(n,1)).addToSet(e.slice())}this.hasComposition=i?{from:i.range.fromB,to:i.range.toB}:null,(ze.ie||ze.chrome)&&!i&&t&&t.state.doc.lines!=t.startState.doc.lines&&(this.forceSelection=!0)
let n=function(t,e,i){let n=new cn
return Tt.compare(t,e,i,n),n.changes}(this.decorations,this.updateDeco(),t.changes)
return e=Vi.extendWithRanges(e,n),!!(7&this.flags||0!=e.length)&&(this.updateInner(e,t.startState.doc.length,i),t.transactions.length&&(this.lastUpdate=Date.now()),!0)}updateInner(t,e,i){this.view.viewState.mustMeasureContent=!0,this.updateChildren(t,e,i)
let{observer:n}=this.view
n.ignore(()=>{this.dom.style.height=this.view.viewState.contentHeight+"px",this.dom.style.flexBasis=this.minWidth?this.minWidth+"px":""
let t=ze.chrome||ze.ios?{node:n.selectionRange.focusNode,written:!1}:void 0
this.sync(this.view,t),this.flags&=-8,t&&(t.written||n.selectionRange.focusNode!=t.node)&&(this.forceSelection=!0),this.dom.style.height=""}),this.markedForComposition.forEach(t=>t.flags&=-9)
let s=[]
if(this.view.viewport.from||this.view.viewport.to<this.view.state.doc.length)for(let r of this.children)r instanceof hi&&r.widget instanceof ln&&s.push(r.dom)
n.updateGaps(s)}updateChildren(t,e,i){let n=i?i.range.addToSet(t.slice()):t,s=this.childCursor(e)
for(let r=n.length-1;;r--){let t=r>=0?n[r]:null
if(!t)break
let e,o,l,a,{fromA:h,toA:c,fromB:u,toB:f}=t
if(i&&i.range.fromB<f&&i.range.toB>u){let t=ci.build(this.view.state.doc,u,i.range.fromB,this.decorations,this.dynamicDecorationMap),n=ci.build(this.view.state.doc,i.range.toB,f,this.decorations,this.dynamicDecorationMap)
o=t.breakAtStart,l=t.openStart,a=n.openEnd
let s=this.compositionView(i)
n.breakAtStart?s.breakAfter=1:n.content.length&&s.merge(s.length,s.length,n.content[0],!1,n.openStart,0)&&(s.breakAfter=n.content[0].breakAfter,n.content.shift()),t.content.length&&s.merge(0,0,t.content[t.content.length-1],!0,0,t.openEnd)&&t.content.pop(),e=t.content.concat(s).concat(n.content)}else({content:e,breakAtStart:o,openStart:l,openEnd:a}=ci.build(this.view.state.doc,u,f,this.decorations,this.dynamicDecorationMap))
let{i:d,off:p}=s.findPos(c,1),{i:m,off:g}=s.findPos(h,-1)
Ce(this,m,g,d,p,e,o,l,a)}i&&this.fixCompositionDOM(i)}compositionView(t){let e=new qe(t.text.nodeValue)
e.flags|=8
for(let{deco:n}of t.marks)e=new _e(n,[e],e.length)
let i=new ai
return i.append(e,0),i}fixCompositionDOM(t){let e=(t,e)=>{e.flags|=8,this.markedForComposition.add(e)
let i=xe.get(t)
i!=e&&(i&&(i.dom=null),e.setDOM(t))},i=this.childPos(t.range.fromB,1),n=this.children[i.i]
e(t.line,n)
for(let s=t.marks.length-1;s>=-1;s--)i=n.childPos(i.off,1),n=n.children[i.i],e(s>=0?t.marks[s].node:t.text,n)}updateSelection(t=!1,e=!1){!t&&this.view.observer.selectionRange.focusNode||this.view.observer.readSelectionRange()
let i=this.view.root.activeElement,n=i==this.dom,s=!n&&ne(this.dom,this.view.observer.selectionRange)&&!(i&&this.dom.contains(i))
if(!(n||e||s))return
let r=this.forceSelection
this.forceSelection=!1
let o=this.view.state.selection.main,l=this.domAtPos(o.anchor),a=o.empty?l:this.domAtPos(o.head)
if(ze.gecko&&o.empty&&!this.hasComposition&&1==(h=l).node.nodeType&&h.node.firstChild&&(0==h.offset||"false"==h.node.childNodes[h.offset-1].contentEditable)&&(h.offset==h.node.childNodes.length||"false"==h.node.childNodes[h.offset].contentEditable)){let t=document.createTextNode("")
this.view.observer.ignore(()=>l.node.insertBefore(t,l.node.childNodes[l.offset]||null)),l=a=new ye(t,0),r=!0}var h
let c=this.view.observer.selectionRange
!r&&c.focusNode&&re(l.node,l.offset,c.anchorNode,c.anchorOffset)&&re(a.node,a.offset,c.focusNode,c.focusOffset)||(this.view.observer.ignore(()=>{ze.android&&ze.chrome&&this.dom.contains(c.focusNode)&&function(t,e){for(let i=t;i&&i!=e;i=i.assignedSlot||i.parentNode)if(1==i.nodeType&&"false"==i.contentEditable)return!0
return!1}(c.focusNode,this.dom)&&(this.dom.blur(),this.dom.focus({preventScroll:!0}))
let t=ee(this.view.root)
if(t)if(o.empty){if(ze.gecko){let t=(e=l.node,n=l.offset,1!=e.nodeType?0:(n&&"false"==e.childNodes[n-1].contentEditable?1:0)|(n<e.childNodes.length&&"false"==e.childNodes[n].contentEditable?2:0))
if(t&&3!=t){let e=hn(l.node,l.offset,1==t?1:-1)
e&&(l=new ye(e,1==t?0:e.nodeValue.length))}}t.collapse(l.node,l.offset),null!=o.bidiLevel&&null!=c.caretBidiLevel&&(c.caretBidiLevel=o.bidiLevel)}else if(t.extend){t.collapse(l.node,l.offset)
try{t.extend(a.node,a.offset)}catch(t){}}else{let e=document.createRange()
o.anchor>o.head&&([l,a]=[a,l]),e.setEnd(a.node,a.offset),e.setStart(l.node,l.offset),t.removeAllRanges(),t.addRange(e)}var e,n
s&&this.view.root.activeElement==this.dom&&(this.dom.blur(),i&&i.focus())}),this.view.observer.setSelectionRange(l,a)),this.impreciseAnchor=l.precise?null:new ye(c.anchorNode,c.anchorOffset),this.impreciseHead=a.precise?null:new ye(c.focusNode,c.focusOffset)}enforceCursorAssoc(){if(this.hasComposition)return
let{view:t}=this,e=t.state.selection.main,i=ee(t.root),{anchorNode:n,anchorOffset:s}=t.observer.selectionRange
if(!(i&&e.empty&&e.assoc&&i.modify))return
let r=ai.find(this,e.head)
if(!r)return
let o=r.posAtStart
if(e.head==o||e.head==o+r.length)return
let l=this.coordsAt(e.head,-1),a=this.coordsAt(e.head,1)
if(!l||!a||l.bottom>a.top)return
let h=this.domAtPos(e.head+e.assoc)
i.collapse(h.node,h.offset),i.modify("move",e.assoc<0?"forward":"backward","lineboundary"),t.observer.readSelectionRange()
let c=t.observer.selectionRange
t.docView.posFromDOM(c.anchorNode,c.anchorOffset)!=e.from&&i.collapse(n,s)}nearest(t){for(let e=t;e;){let t=xe.get(e)
if(t&&t.rootView==this)return t
e=e.parentNode}return null}posFromDOM(t,e){let i=this.nearest(t)
if(!i)throw new RangeError("Trying to find position for a DOM position outside of the document")
return i.localPosFromDOM(t,e)+i.posAtStart}domAtPos(t){let{i:e,off:i}=this.childCursor().findPos(t,-1)
for(;e<this.children.length-1;){let t=this.children[e]
if(i<t.length||t instanceof ai)break
e++,i=0}return this.children[e].domAtPos(i)}coordsAt(t,e){for(let i=this.length,n=this.children.length-1;;n--){let s=this.children[n],r=i-s.breakAfter-s.length
if(t>r||t==r&&s.type!=ei.WidgetBefore&&s.type!=ei.WidgetAfter&&(!n||2==e||this.children[n-1].breakAfter||this.children[n-1].type==ei.WidgetBefore&&e>-2))return s.coordsAt(t-r,e)
i=r}}coordsForChar(t){let{i:e,off:i}=this.childPos(t,1),n=this.children[e]
if(!(n instanceof ai))return null
for(;n.children.length;){let{i:t,off:e}=n.childPos(i,1)
for(;;t++){if(t==n.children.length)return null
if((n=n.children[t]).length)break}i=e}if(!(n instanceof qe))return null
let s=w(n.text,i)
if(s==i)return null
let r=me(n.dom,i,s).getClientRects()
return!r.length||r[0].top>=r[0].bottom?null:r[0]}measureVisibleLineHeights(t){let e=[],{from:i,to:n}=t,s=this.view.contentDOM.clientWidth,r=s>Math.max(this.view.scrollDOM.clientWidth,this.minWidth)+1,o=-1,l=this.view.textDirection==zi.LTR
for(let a=0,h=0;h<this.children.length;h++){let t=this.children[h],c=a+t.length
if(c>n)break
if(a>=i){let i=t.dom.getBoundingClientRect()
if(e.push(i.height),r){let e=t.dom.lastChild,n=e?se(e):[]
if(n.length){let t=n[n.length-1],e=l?t.right-i.left:i.right-t.left
e>o&&(o=e,this.minWidth=s,this.minWidthFrom=a,this.minWidthTo=c)}}}a=c+t.breakAfter}return e}textDirectionAt(t){let{i:e}=this.childPos(t,1)
return"rtl"==getComputedStyle(this.children[e].dom).direction?zi.RTL:zi.LTR}measureTextSize(){for(let s of this.children)if(s instanceof ai){let t=s.measureTextSize()
if(t)return t}let t,e,i,n=document.createElement("div")
return n.className="cm-line",n.style.width="99999px",n.style.position="absolute",n.textContent="abc def ghi jkl mno pqr stu",this.view.observer.ignore(()=>{this.dom.appendChild(n)
let s=se(n.firstChild)[0]
t=n.getBoundingClientRect().height,e=s?s.width/27:7,i=s?s.height:t,n.remove()}),{lineHeight:t,charWidth:e,textHeight:i}}childCursor(t=this.length){let e=this.children.length
return e&&(t-=this.children[--e].length),new Se(this.children,t,e)}computeBlockGapDeco(){let t=[],e=this.view.viewState
for(let i=0,n=0;;n++){let s=n==e.viewports.length?null:e.viewports[n],r=s?s.from-1:this.length
if(r>i){let n=e.lineBlockAt(r).bottom-e.lineBlockAt(i).top
t.push(ii.replace({widget:new ln(n),block:!0,inclusive:!0,isBlockGap:!0}).range(i,r))}if(!s)break
i=s.to+1}return ii.set(t)}updateDeco(){let t=this.view.state.facet(Bi).map((t,e)=>(this.dynamicDecorationMap[e]="function"==typeof t)?t(this.view):t)
for(let e=t.length;e<t.length+3;e++)this.dynamicDecorationMap[e]=!1
return this.decorations=[...t,this.computeBlockGapDeco(),this.view.viewState.lineGapDeco]}scrollIntoView(t){let e,{range:i}=t,n=this.coordsAt(i.head,i.empty?i.assoc:i.head>i.anchor?-1:1)
if(!n)return
!i.empty&&(e=this.coordsAt(i.anchor,i.anchor>i.head?-1:1))&&(n={left:Math.min(n.left,e.left),top:Math.min(n.top,e.top),right:Math.max(n.right,e.right),bottom:Math.max(n.bottom,e.bottom)})
let s=Hi(this.view),r={left:n.left-s.left,top:n.top-s.top,right:n.right+s.right,bottom:n.bottom+s.bottom}
!function(t,e,i,n,s,r,o,l){let a=t.ownerDocument,h=a.defaultView||window
for(let c=t,u=!1;c&&!u;)if(1==c.nodeType){let t,f=c==a.body
if(f)t=ce(h)
else{if(/^(fixed|sticky)$/.test(getComputedStyle(c).position)&&(u=!0),c.scrollHeight<=c.clientHeight&&c.scrollWidth<=c.clientWidth){c=c.assignedSlot||c.parentNode
continue}let e=c.getBoundingClientRect()
t={left:e.left,right:e.left+c.clientWidth,top:e.top,bottom:e.top+c.clientHeight}}let d=0,p=0
if("nearest"==s)e.top<t.top?(p=-(t.top-e.top+o),i>0&&e.bottom>t.bottom+p&&(p=e.bottom-t.bottom+p+o)):e.bottom>t.bottom&&(p=e.bottom-t.bottom+o,i<0&&e.top-p<t.top&&(p=-(t.top+p-e.top+o)))
else{let n=e.bottom-e.top,r=t.bottom-t.top
p=("center"==s&&n<=r?e.top+n/2-r/2:"start"==s||"center"==s&&i<0?e.top-o:e.bottom-r+o)-t.top}if("nearest"==n?e.left<t.left?(d=-(t.left-e.left+r),i>0&&e.right>t.right+d&&(d=e.right-t.right+d+r)):e.right>t.right&&(d=e.right-t.right+r,i<0&&e.left<t.left+d&&(d=-(t.left+d-e.left+r))):d=("center"==n?e.left+(e.right-e.left)/2-(t.right-t.left)/2:"start"==n==l?e.left-r:e.right-(t.right-t.left)+r)-t.left,d||p)if(f)h.scrollBy(d,p)
else{let t=0,i=0
if(p){let t=c.scrollTop
c.scrollTop+=p,i=c.scrollTop-t}if(d){let e=c.scrollLeft
c.scrollLeft+=d,t=c.scrollLeft-e}e={left:e.left-t,top:e.top-i,right:e.right-t,bottom:e.bottom-i},t&&Math.abs(t-d)<1&&(n="nearest"),i&&Math.abs(i-p)<1&&(s="nearest")}if(f)break
c=c.assignedSlot||c.parentNode}else{if(11!=c.nodeType)break
c=c.host}}(this.view.scrollDOM,r,i.head<i.anchor?-1:1,t.x,t.y,t.xMargin,t.yMargin,this.view.textDirection==zi.LTR)}}class ln extends ti{constructor(t){super(),this.height=t}toDOM(){let t=document.createElement("div")
return this.updateDOM(t),t}eq(t){return t.height==this.height}updateDOM(t){return t.style.height=this.height+"px",!0}get estimatedHeight(){return this.height}}function an(t){let e=t.observer.selectionRange,i=e.focusNode&&hn(e.focusNode,e.focusOffset,0)
if(!i)return null
let n,s,r=xe.get(i)
if(r instanceof qe)n=r.posAtStart,s=n+r.length
else t:for(let o=0,l=i;;){for(let i,r=l.previousSibling;r;r=r.previousSibling){if(i=xe.get(r)){n=s=i.posAtEnd+o
break t}let e=new De([],t.state)
if(e.readNode(r),e.text.indexOf(Ae)>-1)return null
o+=e.text.length}if(l=l.parentNode,!l)return null
let e=xe.get(l)
if(e){n=s=e.posAtStart+o
break}}return{from:n,to:s,node:i}}function hn(t,e,i){if(i<=0)for(let n=t,s=e;;){if(3==n.nodeType)return n
if(!(1==n.nodeType&&s>0))break
n=n.childNodes[s-1],s=ae(n)}if(i>=0)for(let n=t,s=e;;){if(3==n.nodeType)return n
if(!(1==n.nodeType&&s<n.childNodes.length&&i>=0))break
n=n.childNodes[s],s=0}return null}let cn=class{constructor(){this.changes=[]}compareRange(t,e){li(t,e,this.changes)}comparePoint(t,e){li(t,e,this.changes)}}
function un(t,e){return e.left>t?e.left-t:Math.max(0,t-e.right)}function fn(t,e){return e.top>t?e.top-t:Math.max(0,t-e.bottom)}function dn(t,e){return t.top<e.bottom-1&&t.bottom>e.top+1}function pn(t,e){return e<t.top?{top:e,left:t.left,right:t.right,bottom:t.bottom}:t}function mn(t,e){return e>t.bottom?{top:t.top,left:t.left,right:t.right,bottom:e}:t}function gn(t,e,i){let n,s,r,o,l,a,h,c,u=!1
for(let d=t.firstChild;d;d=d.nextSibling){let t=se(d)
for(let f=0;f<t.length;f++){let p=t[f]
s&&dn(s,p)&&(p=pn(mn(p,s.bottom),s.top))
let m=un(e,p),g=fn(i,p)
if(0==m&&0==g)return 3==d.nodeType?vn(d,e,i):gn(d,e,i)
if(!n||o>g||o==g&&r>m){n=d,s=p,r=m,o=g
let l=g?i<p.top?-1:1:m?e<p.left?-1:1:0
u=!l||(l>0?f<t.length-1:f>0)}0==m?i>p.bottom&&(!h||h.bottom<p.bottom)?(l=d,h=p):i<p.top&&(!c||c.top>p.top)&&(a=d,c=p):h&&dn(h,p)?h=mn(h,p.bottom):c&&dn(c,p)&&(c=pn(c,p.top))}}if(h&&h.bottom>=i?(n=l,s=h):c&&c.top<=i&&(n=a,s=c),!n)return{node:t,offset:0}
let f=Math.max(s.left,Math.min(s.right,e))
return 3==n.nodeType?vn(n,f,i):u&&"false"!=n.contentEditable?gn(n,f,i):{node:t,offset:Array.prototype.indexOf.call(t.childNodes,n)+(e>=(s.left+s.right)/2?1:0)}}function vn(t,e,i){let n=t.nodeValue.length,s=-1,r=1e9,o=0
for(let l=0;l<n;l++){let n=me(t,l,l+1).getClientRects()
for(let a=0;a<n.length;a++){let h=n[a]
if(h.top==h.bottom)continue
o||(o=e-h.left)
let c=(h.top>i?h.top-i:i-h.bottom)-1
if(h.left-1<=e&&h.right+1>=e&&c<r){let i=e>=(h.left+h.right)/2,n=i
if((ze.chrome||ze.gecko)&&me(t,l).getBoundingClientRect().left==h.right&&(n=!i),c<=0)return{node:t,offset:l+(n?1:0)}
s=l+(n?1:0),r=c}}}return{node:t,offset:s>-1?s:o>0?t.nodeValue.length:0}}function wn(t,e,i,n=-1){var s,r
let o,l=t.contentDOM.getBoundingClientRect(),a=l.top+t.viewState.paddingTop,{docHeight:h}=t.viewState,{x:c,y:u}=e,f=u-a
if(f<0)return 0
if(f>h)return t.state.doc.length
for(let b=t.viewState.heightOracle.textHeight/2,x=!1;o=t.elementAtHeight(f),o.type!=ei.Text;)for(;f=n>0?o.bottom+b:o.top-b,!(f>=0&&f<=h);){if(x)return i?null:0
x=!0,n=-n}u=a+f
let d=o.from
if(d<t.viewport.from)return 0==t.viewport.from?0:i?null:yn(t,l,o,c,u)
if(d>t.viewport.to)return t.viewport.to==t.state.doc.length?t.state.doc.length:i?null:yn(t,l,o,c,u)
let p=t.dom.ownerDocument,m=t.root.elementFromPoint?t.root:p,g=m.elementFromPoint(c,u)
g&&!t.contentDOM.contains(g)&&(g=null),g||(c=Math.max(l.left+1,Math.min(l.right-1,c)),g=m.elementFromPoint(c,u),g&&!t.contentDOM.contains(g)&&(g=null))
let v,w=-1
if(g&&0!=(null===(s=t.docView.nearest(g))||void 0===s?void 0:s.isEditable))if(p.caretPositionFromPoint){let t=p.caretPositionFromPoint(c,u)
t&&({offsetNode:v,offset:w}=t)}else if(p.caretRangeFromPoint){let e=p.caretRangeFromPoint(c,u)
e&&(({startContainer:v,startOffset:w}=e),(!t.contentDOM.contains(v)||ze.safari&&function(t,e,i){let n
if(3!=t.nodeType||e!=(n=t.nodeValue.length))return!1
for(let s=t.nextSibling;s;s=s.nextSibling)if(1!=s.nodeType||"BR"!=s.nodeName)return!1
return me(t,n-1,n).getBoundingClientRect().left>i}(v,w,c)||ze.chrome&&function(t,e,i){if(0!=e)return!1
for(let n=t;;){let t=n.parentNode
if(!t||1!=t.nodeType||t.firstChild!=n)return!1
if(t.classList.contains("cm-line"))break
n=t}return i-(1==t.nodeType?t.getBoundingClientRect():me(t,0,Math.max(t.nodeValue.length,1)).getBoundingClientRect()).left>5}(v,w,c))&&(v=void 0))}if(!v||!t.docView.dom.contains(v)){let e=ai.find(t.docView,d)
if(!e)return f>o.top+o.height/2?o.to:o.from;({node:v,offset:w}=gn(e.dom,c,u))}let y=t.docView.nearest(v)
if(!y)return null
if(y.isWidget&&1==(null===(r=y.dom)||void 0===r?void 0:r.nodeType)){let t=y.dom.getBoundingClientRect()
return e.y<t.top||e.y<=t.bottom&&e.x<=(t.left+t.right)/2?y.posAtStart:y.posAtEnd}return y.localPosFromDOM(v,w)+y.posAtStart}function yn(t,e,i,n,s){let r=Math.round((n-e.left)*t.defaultCharacterWidth)
if(t.lineWrapping&&i.height>1.5*t.defaultLineHeight){let e=t.viewState.heightOracle.textHeight
r+=Math.floor((s-i.top-.5*(t.defaultLineHeight-e))/e)*t.viewState.heightOracle.lineLength}let o=t.state.sliceDoc(i.from,i.to)
return i.from+qt(o,r,t.state.tabSize)}function bn(t,e){let i=t.lineBlockAt(e)
if(Array.isArray(i.type))for(let n of i.type)if(n.to>e||n.to==e&&(n.to==i.to||n.type==ei.Text))return n
return i}function xn(t,e,i,n){let s=t.state.doc.lineAt(e.head),r=t.bidiSpans(s),o=t.textDirectionAt(s.from)
for(let l=e,a=null;;){let e=rn(s,r,o,l,i),h=sn
if(!e){if(s.number==(i?t.state.doc.lines:1))return l
h="\n",s=t.state.doc.line(s.number+(i?1:-1)),r=t.bidiSpans(s),e=H.cursor(i?s.from:s.to)}if(a){if(!a(h))return l}else{if(!n)return e
a=n(h)}l=e}}function kn(t,e,i){for(;;){let n=0
for(let s of t)s.between(e-1,e+1,(t,s,r)=>{if(e>t&&e<s){let r=n||i||(e-t<s-e?-1:1)
e=r<0?t:s,n=r}})
if(!n)return e}}function Sn(t,e,i){let n=kn(t.state.facet(Li).map(e=>e(t)),i.from,e.head>i.from?-1:1)
return n==i.from?i:H.cursor(n,n<i.from?1:-1)}class Cn{setSelectionOrigin(t){this.lastSelectionOrigin=t,this.lastSelectionTime=Date.now()}constructor(t){this.lastKeyCode=0,this.lastKeyTime=0,this.lastTouchTime=0,this.lastFocusTime=0,this.lastScrollTop=0,this.lastScrollLeft=0,this.chromeScrollHack=-1,this.pendingIOSKey=void 0,this.lastSelectionOrigin=null,this.lastSelectionTime=0,this.lastEscPress=0,this.lastContextMenu=0,this.scrollHandlers=[],this.registeredEvents=[],this.customHandlers=[],this.composing=-1,this.compositionFirstChange=null,this.compositionEndedAt=0,this.compositionPendingKey=!1,this.compositionPendingChange=!1,this.mouseSelection=null
let e=(e,i)=>{this.ignoreDuringComposition(i)||"keydown"==i.type&&this.keydown(t,i)||(this.mustFlushObserver(i)&&t.observer.forceFlush(),this.runCustomHandlers(i.type,t,i)?i.preventDefault():e(t,i))}
for(let i in Rn){let n=Rn[i]
t.contentDOM.addEventListener(i,i=>{En(t,i)&&e(n,i)},Bn[i]),this.registeredEvents.push(i)}t.scrollDOM.addEventListener("mousedown",i=>{if(i.target==t.scrollDOM&&i.clientY>t.contentDOM.getBoundingClientRect().bottom&&(e(Rn.mousedown,i),!i.defaultPrevented&&2==i.button)){let e=t.contentDOM.style.minHeight
t.contentDOM.style.minHeight="100%",setTimeout(()=>t.contentDOM.style.minHeight=e,200)}}),t.scrollDOM.addEventListener("drop",i=>{i.target==t.scrollDOM&&i.clientY>t.contentDOM.getBoundingClientRect().bottom&&e(Rn.drop,i)}),ze.chrome&&102==ze.chrome_version&&t.scrollDOM.addEventListener("wheel",()=>{this.chromeScrollHack<0?t.contentDOM.style.pointerEvents="none":window.clearTimeout(this.chromeScrollHack),this.chromeScrollHack=setTimeout(()=>{this.chromeScrollHack=-1,t.contentDOM.style.pointerEvents=""},100)},{passive:!0}),this.notifiedFocused=t.hasFocus,ze.safari&&t.contentDOM.addEventListener("input",()=>null)}ensureHandlers(t,e){var i
let n
this.customHandlers=[]
for(let s of e)if(n=null===(i=s.update(t).spec)||void 0===i?void 0:i.domEventHandlers){this.customHandlers.push({plugin:s.value,handlers:n})
for(let e in n)this.registeredEvents.indexOf(e)<0&&"scroll"!=e&&(this.registeredEvents.push(e),t.contentDOM.addEventListener(e,i=>{En(t,i)&&this.runCustomHandlers(e,t,i)&&i.preventDefault()}))}}runCustomHandlers(t,e,i){for(let n of this.customHandlers){let s=n.handlers[t]
if(s)try{if(s.call(n.plugin,i,e)||i.defaultPrevented)return!0}catch(t){Ci(e.state,t)}}return!1}runScrollHandlers(t,e){this.lastScrollTop=t.scrollDOM.scrollTop,this.lastScrollLeft=t.scrollDOM.scrollLeft
for(let i of this.customHandlers){let n=i.handlers.scroll
if(n)try{n.call(i.plugin,e,t)}catch(e){Ci(t.state,e)}}}keydown(t,e){if(this.lastKeyCode=e.keyCode,this.lastKeyTime=Date.now(),9==e.keyCode&&Date.now()<this.lastEscPress+2e3)return!0
if(27!=e.keyCode&&Dn.indexOf(e.keyCode)<0&&(t.inputState.lastEscPress=0),ze.android&&ze.chrome&&!e.synthetic&&(13==e.keyCode||8==e.keyCode))return t.observer.delayAndroidKey(e.key,e.keyCode),!0
let i
return!(!ze.ios||e.synthetic||e.altKey||e.metaKey||!((i=Mn.find(t=>t.keyCode==e.keyCode))&&!e.ctrlKey||An.indexOf(e.key)>-1&&e.ctrlKey&&!e.shiftKey)||(this.pendingIOSKey=i||e,setTimeout(()=>this.flushIOSKey(t),250),0))}flushIOSKey(t){let e=this.pendingIOSKey
return!!e&&(this.pendingIOSKey=void 0,ge(t.contentDOM,e.key,e.keyCode))}ignoreDuringComposition(t){return!!/^key/.test(t.type)&&(this.composing>0||!!(ze.safari&&!ze.ios&&this.compositionPendingKey&&Date.now()-this.compositionEndedAt<100)&&(this.compositionPendingKey=!1,!0))}mustFlushObserver(t){return"keydown"==t.type&&229!=t.keyCode}startMouseSelection(t){this.mouseSelection&&this.mouseSelection.destroy(),this.mouseSelection=t}update(t){this.mouseSelection&&this.mouseSelection.update(t),t.transactions.length&&(this.lastKeyCode=this.lastSelectionTime=0)}destroy(){this.mouseSelection&&this.mouseSelection.destroy()}}const Mn=[{key:"Backspace",keyCode:8,inputType:"deleteContentBackward"},{key:"Enter",keyCode:13,inputType:"insertParagraph"},{key:"Enter",keyCode:13,inputType:"insertLineBreak"},{key:"Delete",keyCode:46,inputType:"deleteContentForward"}],An="dthko",Dn=[16,17,18,20,91,92,224,225]
function On(t){return.7*Math.max(0,t)+8}class Tn{constructor(t,e,i,n){this.view=t,this.startEvent=e,this.style=i,this.mustSelect=n,this.scrollSpeed={x:0,y:0},this.scrolling=-1,this.lastEvent=e,this.scrollParent=function(t){let e=t.ownerDocument
for(let i=t.parentNode;i&&i!=e.body;)if(1==i.nodeType){if(i.scrollHeight>i.clientHeight||i.scrollWidth>i.clientWidth)return i
i=i.assignedSlot||i.parentNode}else{if(11!=i.nodeType)break
i=i.host}return null}(t.contentDOM),this.atoms=t.state.facet(Li).map(e=>e(t))
let s=t.contentDOM.ownerDocument
s.addEventListener("mousemove",this.move=this.move.bind(this)),s.addEventListener("mouseup",this.up=this.up.bind(this)),this.extend=e.shiftKey,this.multiple=t.state.facet(St.allowMultipleSelections)&&function(t,e){let i=t.state.facet(di)
return i.length?i[0](e):ze.mac?e.metaKey:e.ctrlKey}(t,e),this.dragging=!(!function(t,e){let{main:i}=t.state.selection
if(i.empty)return!1
let n=ee(t.root)
if(!n||0==n.rangeCount)return!0
let s=n.getRangeAt(0).getClientRects()
for(let r=0;r<s.length;r++){let t=s[r]
if(t.left<=e.clientX&&t.right>=e.clientX&&t.top<=e.clientY&&t.bottom>=e.clientY)return!0}return!1}(t,e)||1!=jn(e))&&null}start(t){!1===this.dragging&&(t.preventDefault(),this.select(t))}move(t){var e,i,n
if(0==t.buttons)return this.destroy()
if(this.dragging||null==this.dragging&&(i=this.startEvent,n=t,Math.max(Math.abs(i.clientX-n.clientX),Math.abs(i.clientY-n.clientY))<10))return
this.select(this.lastEvent=t)
let s=0,r=0,o=(null===(e=this.scrollParent)||void 0===e?void 0:e.getBoundingClientRect())||{left:0,top:0,right:this.view.win.innerWidth,bottom:this.view.win.innerHeight},l=Hi(this.view)
t.clientX-l.left<=o.left+6?s=-On(o.left-t.clientX):t.clientX+l.right>=o.right-6&&(s=On(t.clientX-o.right)),t.clientY-l.top<=o.top+6?r=-On(o.top-t.clientY):t.clientY+l.bottom>=o.bottom-6&&(r=On(t.clientY-o.bottom)),this.setScrollSpeed(s,r)}up(t){null==this.dragging&&this.select(this.lastEvent),this.dragging||t.preventDefault(),this.destroy()}destroy(){this.setScrollSpeed(0,0)
let t=this.view.contentDOM.ownerDocument
t.removeEventListener("mousemove",this.move),t.removeEventListener("mouseup",this.up),this.view.inputState.mouseSelection=null}setScrollSpeed(t,e){this.scrollSpeed={x:t,y:e},t||e?this.scrolling<0&&(this.scrolling=setInterval(()=>this.scroll(),50)):this.scrolling>-1&&(clearInterval(this.scrolling),this.scrolling=-1)}scroll(){this.scrollParent?(this.scrollParent.scrollLeft+=this.scrollSpeed.x,this.scrollParent.scrollTop+=this.scrollSpeed.y):this.view.win.scrollBy(this.scrollSpeed.x,this.scrollSpeed.y),!1===this.dragging&&this.select(this.lastEvent)}skipAtoms(t){let e=null
for(let i=0;i<t.ranges.length;i++){let n=t.ranges[i],s=null
if(n.empty){let t=kn(this.atoms,n.from,0)
t!=n.from&&(s=H.cursor(t,-1))}else{let t=kn(this.atoms,n.from,-1),e=kn(this.atoms,n.to,1)
t==n.from&&e==n.to||(s=H.range(n.from==n.anchor?t:e,n.from==n.head?t:e))}s&&(e||(e=t.ranges.slice()),e[i]=s)}return e?H.create(e,t.mainIndex):t}select(t){let{view:e}=this,i=this.skipAtoms(this.style.get(t,this.extend,this.multiple));(this.mustSelect||!i.eq(e.state.selection)||i.main.assoc!=e.state.selection.main.assoc&&!1===this.dragging)&&this.view.dispatch({selection:i,userEvent:"select.pointer"}),this.mustSelect=!1}update(t){t.docChanged&&this.dragging&&(this.dragging=this.dragging.map(t.changes)),this.style.update(t)&&setTimeout(()=>this.select(this.lastEvent),20)}}function En(t,e){if(!e.bubbles)return!0
if(e.defaultPrevented)return!1
for(let i,n=e.target;n!=t.contentDOM;n=n.parentNode)if(!n||11==n.nodeType||(i=xe.get(n))&&i.ignoreEvent(e))return!1
return!0}const Rn=Object.create(null),Bn=Object.create(null),Ln=ze.ie&&ze.ie_version<15||ze.ios&&ze.webkit_version<604
function Pn(t,e){let i,{state:n}=t,s=1,r=n.toText(e),o=r.lines==n.selection.ranges.length
if(null!=$n&&n.selection.ranges.every(t=>t.empty)&&$n==r.toString()){let t=-1
i=n.changeByRange(i=>{let l=n.doc.lineAt(i.from)
if(l.from==t)return{range:i}
t=l.from
let a=n.toText((o?r.line(s++).text:e)+n.lineBreak)
return{changes:{from:l.from,insert:a},range:H.cursor(i.from+a.length)}})}else i=o?n.changeByRange(t=>{let e=r.line(s++)
return{changes:{from:t.from,to:t.to,insert:e.text},range:H.cursor(t.from+e.length)}}):n.replaceSelection(r)
t.dispatch(i,{userEvent:"input.paste",scrollIntoView:!0})}function In(t,e,i,n){if(1==n)return H.cursor(e,i)
if(2==n)return function(t,e,i=1){let n=t.charCategorizer(e),s=t.doc.lineAt(e),r=e-s.from
if(0==s.length)return H.cursor(e)
0==r?i=1:r==s.length&&(i=-1)
let o=r,l=r
i<0?o=w(s.text,r,!1):l=w(s.text,r)
let a=n(s.text.slice(o,l))
for(;o>0;){let t=w(s.text,o,!1)
if(n(s.text.slice(t,o))!=a)break
o=t}for(;l<s.length;){let t=w(s.text,l)
if(n(s.text.slice(l,t))!=a)break
l=t}return H.range(o+s.from,l+s.from)}(t.state,e,i)
{let i=ai.find(t.docView,e),n=t.state.doc.lineAt(i?i.posAtEnd:e),s=i?i.posAtStart:n.from,r=i?i.posAtEnd:n.to
return r<t.state.doc.length&&r==n.to&&r++,H.range(s,r)}}Rn.keydown=(t,e)=>{t.inputState.setSelectionOrigin("select"),27==e.keyCode&&(t.inputState.lastEscPress=Date.now())},Rn.touchstart=(t,e)=>{t.inputState.lastTouchTime=Date.now(),t.inputState.setSelectionOrigin("select.pointer")},Rn.touchmove=t=>{t.inputState.setSelectionOrigin("select.pointer")},Bn.touchstart=Bn.touchmove={passive:!0},Rn.mousedown=(t,e)=>{if(t.observer.flush(),t.inputState.lastTouchTime>Date.now()-2e3)return
let i=null
for(let n of t.state.facet(mi))if(i=n(t,e),i)break
if(i||0!=e.button||(i=function(t,e){let i=Vn(t,e),n=jn(e),s=t.state.selection
return{update(t){t.docChanged&&(i.pos=t.changes.mapPos(i.pos),s=s.map(t.changes))},get(e,r,o){let l,a=Vn(t,e),h=In(t,a.pos,a.bias,n)
if(i.pos!=a.pos&&!r){let e=In(t,i.pos,i.bias,n),s=Math.min(e.from,h.from),r=Math.max(e.to,h.to)
h=s<h.from?H.range(s,r):H.range(r,s)}return r?s.replaceRange(s.main.extend(h.from,h.to)):o&&1==n&&s.ranges.length>1&&(l=function(t,e){for(let i=0;i<t.ranges.length;i++){let{from:n,to:s}=t.ranges[i]
if(n<=e&&s>=e)return H.create(t.ranges.slice(0,i).concat(t.ranges.slice(i+1)),t.mainIndex==i?0:t.mainIndex-(t.mainIndex>i?1:0))}return null}(s,a.pos))?l:o?s.addRange(h):H.create([h])}}}(t,e)),i){let n=!t.hasFocus
t.inputState.startMouseSelection(new Tn(t,e,i,n)),n&&t.observer.ignore(()=>pe(t.contentDOM)),t.inputState.mouseSelection&&t.inputState.mouseSelection.start(e)}}
let Nn=(t,e)=>t>=e.top&&t<=e.bottom,Hn=(t,e,i)=>Nn(e,i)&&t>=i.left&&t<=i.right
function Wn(t,e,i,n){let s=ai.find(t.docView,e)
if(!s)return 1
let r=e-s.posAtStart
if(0==r)return 1
if(r==s.length)return-1
let o=s.coordsAt(r,-1)
if(o&&Hn(i,n,o))return-1
let l=s.coordsAt(r,1)
return l&&Hn(i,n,l)?1:o&&Nn(n,o)?-1:1}function Vn(t,e){let i=t.posAtCoords({x:e.clientX,y:e.clientY},!1)
return{pos:i,bias:Wn(t,i,e.clientX,e.clientY)}}const Fn=ze.ie&&ze.ie_version<=11
let zn=null,qn=0,_n=0
function jn(t){if(!Fn)return t.detail
let e=zn,i=_n
return zn=t,_n=Date.now(),qn=!e||i>Date.now()-400&&Math.abs(e.clientX-t.clientX)<2&&Math.abs(e.clientY-t.clientY)<2?(qn+1)%3:1}function Kn(t,e,i,n){if(!i)return
let s=t.posAtCoords({x:e.clientX,y:e.clientY},!1)
e.preventDefault()
let{mouseSelection:r}=t.inputState,o=n&&r&&r.dragging&&function(t,e){let i=t.state.facet(pi)
return i.length?i[0](e):ze.mac?!e.altKey:!e.ctrlKey}(t,e)?{from:r.dragging.from,to:r.dragging.to}:null,l={from:s,insert:i},a=t.state.changes(o?[o,l]:l)
t.focus(),t.dispatch({changes:a,selection:{anchor:a.mapPos(s,-1),head:a.mapPos(s,1)},userEvent:o?"move.drop":"input.drop"})}Rn.dragstart=(t,e)=>{let{selection:{main:i}}=t.state,{mouseSelection:n}=t.inputState
n&&(n.dragging=i),e.dataTransfer&&(e.dataTransfer.setData("Text",t.state.sliceDoc(i.from,i.to)),e.dataTransfer.effectAllowed="copyMove")},Rn.drop=(t,e)=>{if(!e.dataTransfer)return
if(t.state.readOnly)return e.preventDefault()
let i=e.dataTransfer.files
if(i&&i.length){e.preventDefault()
let n=Array(i.length),s=0,r=()=>{++s==i.length&&Kn(t,e,n.filter(t=>null!=t).join(t.state.lineBreak),!1)}
for(let t=0;t<i.length;t++){let e=new FileReader
e.onerror=r,e.onload=()=>{/[\x00-\x08\x0e-\x1f]{2}/.test(e.result)||(n[t]=e.result),r()},e.readAsText(i[t])}}else Kn(t,e,e.dataTransfer.getData("Text"),!0)},Rn.paste=(t,e)=>{if(t.state.readOnly)return e.preventDefault()
t.observer.flush()
let i=Ln?null:e.clipboardData
i?(Pn(t,i.getData("text/plain")||i.getData("text/uri-text")),e.preventDefault()):function(t){let e=t.dom.parentNode
if(!e)return
let i=e.appendChild(document.createElement("textarea"))
i.style.cssText="position: fixed; left: -10000px; top: 10px",i.focus(),setTimeout(()=>{t.focus(),i.remove(),Pn(t,i.value)},50)}(t)}
let $n=null
Rn.copy=Rn.cut=(t,e)=>{let{text:i,ranges:n,linewise:s}=function(t){let e=[],i=[],n=!1
for(let s of t.selection.ranges)s.empty||(e.push(t.sliceDoc(s.from,s.to)),i.push(s))
if(!e.length){let s=-1
for(let{from:n}of t.selection.ranges){let r=t.doc.lineAt(n)
r.number>s&&(e.push(r.text),i.push({from:r.from,to:Math.min(t.doc.length,r.to+1)})),s=r.number}n=!0}return{text:e.join(t.lineBreak),ranges:i,linewise:n}}(t.state)
if(!i&&!s)return
$n=s?i:null
let r=Ln?null:e.clipboardData
r?(e.preventDefault(),r.clearData(),r.setData("text/plain",i)):function(t,e){let i=t.dom.parentNode
if(!i)return
let n=i.appendChild(document.createElement("textarea"))
n.style.cssText="position: fixed; left: -10000px; top: 10px",n.value=e,n.focus(),n.selectionEnd=e.length,n.selectionStart=0,setTimeout(()=>{n.remove(),t.focus()},50)}(t,i),"cut"!=e.type||t.state.readOnly||t.dispatch({changes:n,scrollIntoView:!0,userEvent:"delete.cut"})}
const Un=ht.define()
function Gn(t,e){let i=[]
for(let n of t.facet(yi)){let s=n(t,e)
s&&i.push(s)}return i?t.update({effects:i,annotations:Un.of(!0)}):null}function Jn(t){setTimeout(()=>{let e=t.hasFocus
if(e!=t.inputState.notifiedFocused){let i=Gn(t.state,e)
i?t.dispatch(i):t.update([])}},10)}Rn.focus=t=>{t.inputState.lastFocusTime=Date.now(),t.scrollDOM.scrollTop||!t.inputState.lastScrollTop&&!t.inputState.lastScrollLeft||(t.scrollDOM.scrollTop=t.inputState.lastScrollTop,t.scrollDOM.scrollLeft=t.inputState.lastScrollLeft),Jn(t)},Rn.blur=t=>{t.observer.clearSelectionRange(),Jn(t)},Rn.compositionstart=Rn.compositionupdate=t=>{null==t.inputState.compositionFirstChange&&(t.inputState.compositionFirstChange=!0),t.inputState.composing<0&&(t.inputState.composing=0)},Rn.compositionend=t=>{t.inputState.composing=-1,t.inputState.compositionEndedAt=Date.now(),t.inputState.compositionPendingKey=!0,t.inputState.compositionPendingChange=t.observer.pendingRecords().length>0,t.inputState.compositionFirstChange=null,ze.chrome&&ze.android?t.observer.flushSoon():t.inputState.compositionPendingChange?Promise.resolve().then(()=>t.observer.flush()):setTimeout(()=>{t.inputState.composing<0&&t.docView.hasComposition&&t.update([])},50)},Rn.contextmenu=t=>{t.inputState.lastContextMenu=Date.now()},Rn.beforeinput=(t,e)=>{var i
let n
if(ze.chrome&&ze.android&&(n=Mn.find(t=>t.inputType==e.inputType))&&(t.observer.delayAndroidKey(n.key,n.keyCode),"Backspace"==n.key||"Delete"==n.key)){let e=(null===(i=window.visualViewport)||void 0===i?void 0:i.height)||0
setTimeout(()=>{var i;((null===(i=window.visualViewport)||void 0===i?void 0:i.height)||0)>e+10&&t.hasFocus&&(t.contentDOM.blur(),t.focus())},100)}}
const Xn=["pre-wrap","normal","pre-line","break-spaces"]
class Yn{constructor(t){this.lineWrapping=t,this.doc=o.empty,this.heightSamples={},this.lineHeight=14,this.charWidth=7,this.textHeight=14,this.lineLength=30,this.heightChanged=!1}heightForGap(t,e){let i=this.doc.lineAt(e).number-this.doc.lineAt(t).number+1
return this.lineWrapping&&(i+=Math.max(0,Math.ceil((e-t-i*this.lineLength*.5)/this.lineLength))),this.lineHeight*i}heightForLine(t){return this.lineWrapping?(1+Math.max(0,Math.ceil((t-this.lineLength)/(this.lineLength-5))))*this.lineHeight:this.lineHeight}setDoc(t){return this.doc=t,this}mustRefreshForWrapping(t){return Xn.indexOf(t)>-1!=this.lineWrapping}mustRefreshForHeights(t){let e=!1
for(let i=0;i<t.length;i++){let n=t[i]
n<0?i++:this.heightSamples[Math.floor(10*n)]||(e=!0,this.heightSamples[Math.floor(10*n)]=!0)}return e}refresh(t,e,i,n,s,r){let o=Xn.indexOf(t)>-1,l=Math.round(e)!=Math.round(this.lineHeight)||this.lineWrapping!=o
if(this.lineWrapping=o,this.lineHeight=e,this.charWidth=i,this.textHeight=n,this.lineLength=s,l){this.heightSamples={}
for(let t=0;t<r.length;t++){let e=r[t]
e<0?t++:this.heightSamples[Math.floor(10*e)]=!0}}return l}}class Qn{constructor(t,e){this.from=t,this.heights=e,this.index=0}get more(){return this.index<this.heights.length}}class Zn{constructor(t,e,i,n,s){this.from=t,this.length=e,this.top=i,this.height=n,this._content=s}get type(){return"number"==typeof this._content?ei.Text:Array.isArray(this._content)?this._content:this._content.type}get to(){return this.from+this.length}get bottom(){return this.top+this.height}get widget(){return this._content instanceof ri?this._content.widget:null}get widgetLineBreaks(){return"number"==typeof this._content?this._content:0}join(t){let e=(Array.isArray(this._content)?this._content:[this]).concat(Array.isArray(t._content)?t._content:[t])
return new Zn(this.from,this.length+t.length,this.top,this.height+t.height,e)}}var ts=function(t){return t[t.ByPos=0]="ByPos",t[t.ByHeight=1]="ByHeight",t[t.ByPosNoHeight=2]="ByPosNoHeight",t}(ts||(ts={}))
const es=.001
class is{constructor(t,e,i=2){this.length=t,this.height=e,this.flags=i}get outdated(){return(2&this.flags)>0}set outdated(t){this.flags=(t?2:0)|-3&this.flags}setHeight(t,e){this.height!=e&&(Math.abs(this.height-e)>es&&(t.heightChanged=!0),this.height=e)}replace(t,e,i){return is.of(i)}decomposeLeft(t,e){e.push(this)}decomposeRight(t,e){e.push(this)}applyChanges(t,e,i,n){let s=this,r=i.doc
for(let o=n.length-1;o>=0;o--){let{fromA:l,toA:a,fromB:h,toB:c}=n[o],u=s.lineAt(l,ts.ByPosNoHeight,i.setDoc(e),0,0),f=u.to>=a?u:s.lineAt(a,ts.ByPosNoHeight,i,0,0)
for(c+=f.to-a,a=f.to;o>0&&u.from<=n[o-1].toA;)l=n[o-1].fromA,h=n[o-1].fromB,o--,l<u.from&&(u=s.lineAt(l,ts.ByPosNoHeight,i,0,0))
h+=u.from-l,l=u.from
let d=as.build(i.setDoc(r),t,h,c)
s=s.replace(l,a,d)}return s.updateHeight(i,0)}static empty(){return new ss(0,0)}static of(t){if(1==t.length)return t[0]
let e=0,i=t.length,n=0,s=0
for(;;)if(e==i)if(n>2*s){let s=t[e-1]
s.break?t.splice(--e,1,s.left,null,s.right):t.splice(--e,1,s.left,s.right),i+=1+s.break,n-=s.size}else{if(!(s>2*n))break
{let e=t[i]
e.break?t.splice(i,1,e.left,null,e.right):t.splice(i,1,e.left,e.right),i+=2+e.break,s-=e.size}}else if(n<s){let i=t[e++]
i&&(n+=i.size)}else{let e=t[--i]
e&&(s+=e.size)}let r=0
return null==t[e-1]?(r=1,e--):null==t[e]&&(r=1,i++),new os(is.of(t.slice(0,e)),r,is.of(t.slice(i)))}}is.prototype.size=1
class ns extends is{constructor(t,e,i){super(t,e),this.deco=i}blockAt(t,e,i,n){return new Zn(n,this.length,i,this.height,this.deco||0)}lineAt(t,e,i,n,s){return this.blockAt(0,i,n,s)}forEachLine(t,e,i,n,s,r){t<=s+this.length&&e>=s&&r(this.blockAt(0,i,n,s))}updateHeight(t,e=0,i=!1,n){return n&&n.from<=e&&n.more&&this.setHeight(t,n.heights[n.index++]),this.outdated=!1,this}toString(){return`block(${this.length})`}}class ss extends ns{constructor(t,e){super(t,e,null),this.collapsed=0,this.widgetHeight=0,this.breaks=0}blockAt(t,e,i,n){return new Zn(n,this.length,i,this.height,this.breaks)}replace(t,e,i){let n=i[0]
return 1==i.length&&(n instanceof ss||n instanceof rs&&4&n.flags)&&Math.abs(this.length-n.length)<10?(n instanceof rs?n=new ss(n.length,this.height):n.height=this.height,this.outdated||(n.outdated=!1),n):is.of(i)}updateHeight(t,e=0,i=!1,n){return n&&n.from<=e&&n.more?this.setHeight(t,n.heights[n.index++]):(i||this.outdated)&&this.setHeight(t,Math.max(this.widgetHeight,t.heightForLine(this.length-this.collapsed))+this.breaks*t.lineHeight),this.outdated=!1,this}toString(){return`line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`}}class rs extends is{constructor(t){super(t,0)}heightMetrics(t,e){let i,n=t.doc.lineAt(e).number,s=t.doc.lineAt(e+this.length).number,r=s-n+1,o=0
if(t.lineWrapping){let e=Math.min(this.height,t.lineHeight*r)
i=e/r,this.length>r+1&&(o=(this.height-e)/(this.length-r-1))}else i=this.height/r
return{firstLine:n,lastLine:s,perLine:i,perChar:o}}blockAt(t,e,i,n){let{firstLine:s,lastLine:r,perLine:o,perChar:l}=this.heightMetrics(e,n)
if(e.lineWrapping){let s=n+Math.round(Math.max(0,Math.min(1,(t-i)/this.height))*this.length),r=e.doc.lineAt(s),a=o+r.length*l,h=Math.max(i,t-a/2)
return new Zn(r.from,r.length,h,a,0)}{let n=Math.max(0,Math.min(r-s,Math.floor((t-i)/o))),{from:l,length:a}=e.doc.line(s+n)
return new Zn(l,a,i+o*n,o,0)}}lineAt(t,e,i,n,s){if(e==ts.ByHeight)return this.blockAt(t,i,n,s)
if(e==ts.ByPosNoHeight){let{from:e,to:n}=i.doc.lineAt(t)
return new Zn(e,n-e,0,0,0)}let{firstLine:r,perLine:o,perChar:l}=this.heightMetrics(i,s),a=i.doc.lineAt(t),h=o+a.length*l,c=a.number-r,u=n+o*c+l*(a.from-s-c)
return new Zn(a.from,a.length,Math.max(n,Math.min(u,n+this.height-h)),h,0)}forEachLine(t,e,i,n,s,r){t=Math.max(t,s),e=Math.min(e,s+this.length)
let{firstLine:o,perLine:l,perChar:a}=this.heightMetrics(i,s)
for(let h=t,c=n;h<=e;){let e=i.doc.lineAt(h)
if(h==t){let i=e.number-o
c+=l*i+a*(t-s-i)}let n=l+a*e.length
r(new Zn(e.from,e.length,c,n,0)),c+=n,h=e.to+1}}replace(t,e,i){let n=this.length-e
if(n>0){let t=i[i.length-1]
t instanceof rs?i[i.length-1]=new rs(t.length+n):i.push(null,new rs(n-1))}if(t>0){let e=i[0]
e instanceof rs?i[0]=new rs(t+e.length):i.unshift(new rs(t-1),null)}return is.of(i)}decomposeLeft(t,e){e.push(new rs(t-1),null)}decomposeRight(t,e){e.push(null,new rs(this.length-t-1))}updateHeight(t,e=0,i=!1,n){let s=e+this.length
if(n&&n.from<=e+this.length&&n.more){let i=[],r=Math.max(e,n.from),o=-1
for(n.from>e&&i.push(new rs(n.from-e-1).updateHeight(t,e));r<=s&&n.more;){let e=t.doc.lineAt(r).length
i.length&&i.push(null)
let s=n.heights[n.index++];-1==o?o=s:Math.abs(s-o)>=es&&(o=-2)
let l=new ss(e,s)
l.outdated=!1,i.push(l),r+=e+1}r<=s&&i.push(null,new rs(s-r).updateHeight(t,r))
let l=is.of(i)
return(o<0||Math.abs(l.height-this.height)>=es||Math.abs(o-this.heightMetrics(t,e).perLine)>=es)&&(t.heightChanged=!0),l}return(i||this.outdated)&&(this.setHeight(t,t.heightForGap(e,e+this.length)),this.outdated=!1),this}toString(){return`gap(${this.length})`}}class os extends is{constructor(t,e,i){super(t.length+e+i.length,t.height+i.height,e|(t.outdated||i.outdated?2:0)),this.left=t,this.right=i,this.size=t.size+i.size}get break(){return 1&this.flags}blockAt(t,e,i,n){let s=i+this.left.height
return t<s?this.left.blockAt(t,e,i,n):this.right.blockAt(t,e,s,n+this.left.length+this.break)}lineAt(t,e,i,n,s){let r=n+this.left.height,o=s+this.left.length+this.break,l=e==ts.ByHeight?t<r:t<o,a=l?this.left.lineAt(t,e,i,n,s):this.right.lineAt(t,e,i,r,o)
if(this.break||(l?a.to<o:a.from>o))return a
let h=e==ts.ByPosNoHeight?ts.ByPosNoHeight:ts.ByPos
return l?a.join(this.right.lineAt(o,h,i,r,o)):this.left.lineAt(o,h,i,n,s).join(a)}forEachLine(t,e,i,n,s,r){let o=n+this.left.height,l=s+this.left.length+this.break
if(this.break)t<l&&this.left.forEachLine(t,e,i,n,s,r),e>=l&&this.right.forEachLine(t,e,i,o,l,r)
else{let a=this.lineAt(l,ts.ByPos,i,n,s)
t<a.from&&this.left.forEachLine(t,a.from-1,i,n,s,r),a.to>=t&&a.from<=e&&r(a),e>a.to&&this.right.forEachLine(a.to+1,e,i,o,l,r)}}replace(t,e,i){let n=this.left.length+this.break
if(e<n)return this.balanced(this.left.replace(t,e,i),this.right)
if(t>this.left.length)return this.balanced(this.left,this.right.replace(t-n,e-n,i))
let s=[]
t>0&&this.decomposeLeft(t,s)
let r=s.length
for(let o of i)s.push(o)
if(t>0&&ls(s,r-1),e<this.length){let t=s.length
this.decomposeRight(e,s),ls(s,t)}return is.of(s)}decomposeLeft(t,e){let i=this.left.length
if(t<=i)return this.left.decomposeLeft(t,e)
e.push(this.left),this.break&&(i++,t>=i&&e.push(null)),t>i&&this.right.decomposeLeft(t-i,e)}decomposeRight(t,e){let i=this.left.length,n=i+this.break
if(t>=n)return this.right.decomposeRight(t-n,e)
t<i&&this.left.decomposeRight(t,e),this.break&&t<n&&e.push(null),e.push(this.right)}balanced(t,e){return t.size>2*e.size||e.size>2*t.size?is.of(this.break?[t,null,e]:[t,e]):(this.left=t,this.right=e,this.height=t.height+e.height,this.outdated=t.outdated||e.outdated,this.size=t.size+e.size,this.length=t.length+this.break+e.length,this)}updateHeight(t,e=0,i=!1,n){let{left:s,right:r}=this,o=e+s.length+this.break,l=null
return n&&n.from<=e+s.length&&n.more?l=s=s.updateHeight(t,e,i,n):s.updateHeight(t,e,i),n&&n.from<=o+r.length&&n.more?l=r=r.updateHeight(t,o,i,n):r.updateHeight(t,o,i),l?this.balanced(s,r):(this.height=this.left.height+this.right.height,this.outdated=!1,this)}toString(){return this.left+(this.break?" ":"-")+this.right}}function ls(t,e){let i,n
null==t[e]&&(i=t[e-1])instanceof rs&&(n=t[e+1])instanceof rs&&t.splice(e-1,3,new rs(i.length+1+n.length))}class as{constructor(t,e){this.pos=t,this.oracle=e,this.nodes=[],this.lineStart=-1,this.lineEnd=-1,this.covering=null,this.writtenTo=t}get isCovered(){return this.covering&&this.nodes[this.nodes.length-1]==this.covering}span(t,e){if(this.lineStart>-1){let t=Math.min(e,this.lineEnd),i=this.nodes[this.nodes.length-1]
i instanceof ss?i.length+=t-this.pos:(t>this.pos||!this.isCovered)&&this.nodes.push(new ss(t-this.pos,-1)),this.writtenTo=t,e>t&&(this.nodes.push(null),this.writtenTo++,this.lineStart=-1)}this.pos=e}point(t,e,i){if(t<e||i.heightRelevant){let n=i.widget?i.widget.estimatedHeight:0,s=i.widget?i.widget.lineBreaks:0
n<0&&(n=this.oracle.lineHeight)
let r=e-t
i.block?this.addBlock(new ns(r,n,i)):(r||s||n>=5)&&this.addLineDeco(n,s,r)}else e>t&&this.span(t,e)
this.lineEnd>-1&&this.lineEnd<this.pos&&(this.lineEnd=this.oracle.doc.lineAt(this.pos).to)}enterLine(){if(this.lineStart>-1)return
let{from:t,to:e}=this.oracle.doc.lineAt(this.pos)
this.lineStart=t,this.lineEnd=e,this.writtenTo<t&&((this.writtenTo<t-1||null==this.nodes[this.nodes.length-1])&&this.nodes.push(this.blankContent(this.writtenTo,t-1)),this.nodes.push(null)),this.pos>t&&this.nodes.push(new ss(this.pos-t,-1)),this.writtenTo=this.pos}blankContent(t,e){let i=new rs(e-t)
return this.oracle.doc.lineAt(t).to==e&&(i.flags|=4),i}ensureLine(){this.enterLine()
let t=this.nodes.length?this.nodes[this.nodes.length-1]:null
if(t instanceof ss)return t
let e=new ss(0,-1)
return this.nodes.push(e),e}addBlock(t){var e
this.enterLine()
let i=null===(e=t.deco)||void 0===e?void 0:e.type
i!=ei.WidgetAfter||this.isCovered||this.ensureLine(),this.nodes.push(t),this.writtenTo=this.pos=this.pos+t.length,i!=ei.WidgetBefore&&(this.covering=t)}addLineDeco(t,e,i){let n=this.ensureLine()
n.length+=i,n.collapsed+=i,n.widgetHeight=Math.max(n.widgetHeight,t),n.breaks+=e,this.writtenTo=this.pos=this.pos+i}finish(t){let e=0==this.nodes.length?null:this.nodes[this.nodes.length-1]
!(this.lineStart>-1)||e instanceof ss||this.isCovered?(this.writtenTo<this.pos||null==e)&&this.nodes.push(this.blankContent(this.writtenTo,this.pos)):this.nodes.push(new ss(0,-1))
let i=t
for(let n of this.nodes)n instanceof ss&&n.updateHeight(this.oracle,i),i+=n?n.length:1
return this.nodes}static build(t,e,i,n){let s=new as(i,t)
return Tt.spans(e,i,n,s,0),s.finish(i)}}class hs{constructor(){this.changes=[]}compareRange(){}comparePoint(t,e,i,n){(t<e||i&&i.heightRelevant||n&&n.heightRelevant)&&li(t,e,this.changes,5)}}function cs(t,e){let i=t.getBoundingClientRect(),n=t.ownerDocument,s=n.defaultView||window,r=Math.max(0,i.left),o=Math.min(s.innerWidth,i.right),l=Math.max(0,i.top),a=Math.min(s.innerHeight,i.bottom)
for(let h=t.parentNode;h&&h!=n.body;)if(1==h.nodeType){let e=h,i=window.getComputedStyle(e)
if((e.scrollHeight>e.clientHeight||e.scrollWidth>e.clientWidth)&&"visible"!=i.overflow){let i=e.getBoundingClientRect()
r=Math.max(r,i.left),o=Math.min(o,i.right),l=Math.max(l,i.top),a=h==t.parentNode?i.bottom:Math.min(a,i.bottom)}h="absolute"==i.position||"fixed"==i.position?e.offsetParent:e.parentNode}else{if(11!=h.nodeType)break
h=h.host}return{left:r-i.left,right:Math.max(r,o)-i.left,top:l-(i.top+e),bottom:Math.max(l,a)-(i.top+e)}}function us(t,e){let i=t.getBoundingClientRect()
return{left:0,right:i.right-i.left,top:e,bottom:i.bottom-(i.top+e)}}class fs{constructor(t,e,i){this.from=t,this.to=e,this.size=i}static same(t,e){if(t.length!=e.length)return!1
for(let i=0;i<t.length;i++){let n=t[i],s=e[i]
if(n.from!=s.from||n.to!=s.to||n.size!=s.size)return!1}return!0}draw(t){return ii.replace({widget:new ds(this.size,t)}).range(this.from,this.to)}}class ds extends ti{constructor(t,e){super(),this.size=t,this.vertical=e}eq(t){return t.size==this.size&&t.vertical==this.vertical}toDOM(){let t=document.createElement("div")
return this.vertical?t.style.height=this.size+"px":(t.style.width=this.size+"px",t.style.height="2px",t.style.display="inline-block"),t}get estimatedHeight(){return this.vertical?this.size:-1}}class ps{constructor(t){this.state=t,this.pixelViewport={left:0,right:window.innerWidth,top:0,bottom:0},this.inView=!0,this.paddingTop=0,this.paddingBottom=0,this.contentDOMWidth=0,this.contentDOMHeight=0,this.editorHeight=0,this.editorWidth=0,this.scrollTop=0,this.scrolledToBottom=!0,this.scrollAnchorPos=0,this.scrollAnchorHeight=-1,this.scaler=ys,this.scrollTarget=null,this.printing=!1,this.mustMeasureContent=!0,this.defaultTextDirection=zi.LTR,this.visibleRanges=[],this.mustEnforceCursorAssoc=!1
let e=t.facet(Ri).some(t=>"function"!=typeof t&&"cm-lineWrapping"==t.class)
this.heightOracle=new Yn(e),this.stateDeco=t.facet(Bi).filter(t=>"function"!=typeof t),this.heightMap=is.empty().applyChanges(this.stateDeco,o.empty,this.heightOracle.setDoc(t.doc),[new Vi(0,0,0,t.doc.length)]),this.viewport=this.getViewport(0,null),this.updateViewportLines(),this.updateForViewport(),this.lineGaps=this.ensureLineGaps([]),this.lineGapDeco=ii.set(this.lineGaps.map(t=>t.draw(!1))),this.computeVisibleRanges()}updateForViewport(){let t=[this.viewport],{main:e}=this.state.selection
for(let i=0;i<=1;i++){let n=i?e.head:e.anchor
if(!t.some(({from:t,to:e})=>n>=t&&n<=e)){let{from:e,to:i}=this.lineBlockAt(n)
t.push(new ms(e,i))}}this.viewports=t.sort((t,e)=>t.from-e.from),this.scaler=this.heightMap.height<=7e6?ys:new bs(this.heightOracle,this.heightMap,this.viewports)}updateViewportLines(){this.viewportLines=[],this.heightMap.forEachLine(this.viewport.from,this.viewport.to,this.heightOracle.setDoc(this.state.doc),0,0,t=>{this.viewportLines.push(1==this.scaler.scale?t:xs(t,this.scaler))})}update(t,e=null){this.state=t.state
let i=this.stateDeco
this.stateDeco=this.state.facet(Bi).filter(t=>"function"!=typeof t)
let n=t.changedRanges,s=Vi.extendWithRanges(n,function(t,e,i){let n=new hs
return Tt.compare(t,e,i,n,0),n.changes}(i,this.stateDeco,t?t.changes:T.empty(this.state.doc.length))),r=this.heightMap.height,o=this.scrolledToBottom?null:this.scrollAnchorAt(this.scrollTop)
this.heightMap=this.heightMap.applyChanges(this.stateDeco,t.startState.doc,this.heightOracle.setDoc(this.state.doc),s),this.heightMap.height!=r&&(t.flags|=2),o?(this.scrollAnchorPos=t.changes.mapPos(o.from,-1),this.scrollAnchorHeight=o.top):(this.scrollAnchorPos=-1,this.scrollAnchorHeight=this.heightMap.height)
let l=s.length?this.mapViewport(this.viewport,t.changes):this.viewport;(e&&(e.range.head<l.from||e.range.head>l.to)||!this.viewportIsAppropriate(l))&&(l=this.getViewport(0,e))
let a=!t.changes.empty||2&t.flags||l.from!=this.viewport.from||l.to!=this.viewport.to
this.viewport=l,this.updateForViewport(),a&&this.updateViewportLines(),(this.lineGaps.length||this.viewport.to-this.viewport.from>4e3)&&this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps,t.changes))),t.flags|=this.computeVisibleRanges(),e&&(this.scrollTarget=e),!this.mustEnforceCursorAssoc&&t.selectionSet&&t.view.lineWrapping&&t.state.selection.main.empty&&t.state.selection.main.assoc&&!t.state.facet(xi)&&(this.mustEnforceCursorAssoc=!0)}measure(t){let e=t.contentDOM,i=window.getComputedStyle(e),n=this.heightOracle,s=i.whiteSpace
this.defaultTextDirection="rtl"==i.direction?zi.RTL:zi.LTR
let r=this.heightOracle.mustRefreshForWrapping(s),l=e.getBoundingClientRect(),a=r||this.mustMeasureContent||this.contentDOMHeight!=l.height
this.contentDOMHeight=l.height,this.mustMeasureContent=!1
let h=0,c=0,u=parseInt(i.paddingTop)||0,f=parseInt(i.paddingBottom)||0
this.paddingTop==u&&this.paddingBottom==f||(this.paddingTop=u,this.paddingBottom=f,h|=10),this.editorWidth!=t.scrollDOM.clientWidth&&(n.lineWrapping&&(a=!0),this.editorWidth=t.scrollDOM.clientWidth,h|=8),this.scrollTop!=t.scrollDOM.scrollTop&&(this.scrollAnchorHeight=-1,this.scrollTop=t.scrollDOM.scrollTop),this.scrolledToBottom=we(t.scrollDOM)
let d=(this.printing?us:cs)(e,this.paddingTop),p=d.top-this.pixelViewport.top,m=d.bottom-this.pixelViewport.bottom
this.pixelViewport=d
let g=this.pixelViewport.bottom>this.pixelViewport.top&&this.pixelViewport.right>this.pixelViewport.left
if(g!=this.inView&&(this.inView=g,g&&(a=!0)),!this.inView&&!this.scrollTarget)return 0
let v=l.width
if(this.contentDOMWidth==v&&this.editorHeight==t.scrollDOM.clientHeight||(this.contentDOMWidth=l.width,this.editorHeight=t.scrollDOM.clientHeight,h|=8),a){let e=t.docView.measureVisibleLineHeights(this.viewport)
if(n.mustRefreshForHeights(e)&&(r=!0),r||n.lineWrapping&&Math.abs(v-this.contentDOMWidth)>n.charWidth){let{lineHeight:i,charWidth:o,textHeight:l}=t.docView.measureTextSize()
r=i>0&&n.refresh(s,i,o,l,v/o,e),r&&(t.docView.minWidth=0,h|=8)}p>0&&m>0?c=Math.max(p,m):p<0&&m<0&&(c=Math.min(p,m)),n.heightChanged=!1
for(let i of this.viewports){let s=i.from==this.viewport.from?e:t.docView.measureVisibleLineHeights(i)
this.heightMap=(r?is.empty().applyChanges(this.stateDeco,o.empty,this.heightOracle,[new Vi(0,0,0,t.state.doc.length)]):this.heightMap).updateHeight(n,0,r,new Qn(i.from,s))}n.heightChanged&&(h|=2)}let w=!this.viewportIsAppropriate(this.viewport,c)||this.scrollTarget&&(this.scrollTarget.range.head<this.viewport.from||this.scrollTarget.range.head>this.viewport.to)
return w&&(this.viewport=this.getViewport(c,this.scrollTarget)),this.updateForViewport(),(2&h||w)&&this.updateViewportLines(),(this.lineGaps.length||this.viewport.to-this.viewport.from>4e3)&&this.updateLineGaps(this.ensureLineGaps(r?[]:this.lineGaps,t)),h|=this.computeVisibleRanges(),this.mustEnforceCursorAssoc&&(this.mustEnforceCursorAssoc=!1,t.docView.enforceCursorAssoc()),h}get visibleTop(){return this.scaler.fromDOM(this.pixelViewport.top)}get visibleBottom(){return this.scaler.fromDOM(this.pixelViewport.bottom)}getViewport(t,e){let i=.5-Math.max(-.5,Math.min(.5,t/1e3/2)),n=this.heightMap,s=this.heightOracle,{visibleTop:r,visibleBottom:o}=this,l=new ms(n.lineAt(r-1e3*i,ts.ByHeight,s,0,0).from,n.lineAt(o+1e3*(1-i),ts.ByHeight,s,0,0).to)
if(e){let{head:t}=e.range
if(t<l.from||t>l.to){let i,r=Math.min(this.editorHeight,this.pixelViewport.bottom-this.pixelViewport.top),o=n.lineAt(t,ts.ByPos,s,0,0)
i="center"==e.y?(o.top+o.bottom)/2-r/2:"start"==e.y||"nearest"==e.y&&t<l.from?o.top:o.bottom-r,l=new ms(n.lineAt(i-500,ts.ByHeight,s,0,0).from,n.lineAt(i+r+500,ts.ByHeight,s,0,0).to)}}return l}mapViewport(t,e){let i=e.mapPos(t.from,-1),n=e.mapPos(t.to,1)
return new ms(this.heightMap.lineAt(i,ts.ByPos,this.heightOracle,0,0).from,this.heightMap.lineAt(n,ts.ByPos,this.heightOracle,0,0).to)}viewportIsAppropriate({from:t,to:e},i=0){if(!this.inView)return!0
let{top:n}=this.heightMap.lineAt(t,ts.ByPos,this.heightOracle,0,0),{bottom:s}=this.heightMap.lineAt(e,ts.ByPos,this.heightOracle,0,0),{visibleTop:r,visibleBottom:o}=this
return(0==t||n<=r-Math.max(10,Math.min(-i,250)))&&(e==this.state.doc.length||s>=o+Math.max(10,Math.min(i,250)))&&n>r-2e3&&s<o+2e3}mapLineGaps(t,e){if(!t.length||e.empty)return t
let i=[]
for(let n of t)e.touchesRange(n.from,n.to)||i.push(new fs(e.mapPos(n.from),e.mapPos(n.to),n.size))
return i}ensureLineGaps(t,e){let i=this.heightOracle.lineWrapping,n=i?1e4:2e3,s=n>>1,r=n<<1
if(this.defaultTextDirection!=zi.LTR&&!i)return[]
let o=[],l=(n,r,a,h)=>{if(r-n<s)return
let c=this.state.selection.main,u=[c.from]
c.empty||u.push(c.to)
for(let t of u)if(t>n&&t<r)return l(n,t-10,a,h),void l(t+10,r,a,h)
let f=function(t,e){for(let i of t)if(e(i))return i}(t,t=>t.from>=a.from&&t.to<=a.to&&Math.abs(t.from-n)<s&&Math.abs(t.to-r)<s&&!u.some(e=>t.from<e&&t.to>e))
if(!f){if(r<a.to&&e&&i&&e.visibleRanges.some(t=>t.from<=r&&t.to>=r)){let t=e.moveToLineBoundary(H.cursor(r),!1,!0).head
t>n&&(r=t)}f=new fs(n,r,this.gapSize(a,n,r,h))}o.push(f)}
for(let a of this.viewportLines){if(a.length<r)continue
let t=gs(a.from,a.to,this.stateDeco)
if(t.total<r)continue
let e,s,o=this.scrollTarget?this.scrollTarget.range.head:null
if(i){let i,r,l=n/this.heightOracle.lineLength*this.heightOracle.lineHeight
if(null!=o){let e=ws(t,o),n=((this.visibleBottom-this.visibleTop)/2+l)/a.height
i=e-n,r=e+n}else i=(this.visibleTop-a.top-l)/a.height,r=(this.visibleBottom-a.top+l)/a.height
e=vs(t,i),s=vs(t,r)}else{let i,r,l=t.total*this.heightOracle.charWidth,a=n*this.heightOracle.charWidth
if(null!=o){let e=ws(t,o),n=((this.pixelViewport.right-this.pixelViewport.left)/2+a)/l
i=e-n,r=e+n}else i=(this.pixelViewport.left-a)/l,r=(this.pixelViewport.right+a)/l
e=vs(t,i),s=vs(t,r)}e>a.from&&l(a.from,e,a,t),s<a.to&&l(s,a.to,a,t)}return o}gapSize(t,e,i,n){let s=ws(n,i)-ws(n,e)
return this.heightOracle.lineWrapping?t.height*s:n.total*this.heightOracle.charWidth*s}updateLineGaps(t){fs.same(t,this.lineGaps)||(this.lineGaps=t,this.lineGapDeco=ii.set(t.map(t=>t.draw(this.heightOracle.lineWrapping))))}computeVisibleRanges(){let t=this.stateDeco
this.lineGaps.length&&(t=t.concat(this.lineGapDeco))
let e=[]
Tt.spans(t,this.viewport.from,this.viewport.to,{span(t,i){e.push({from:t,to:i})},point(){}},20)
let i=e.length!=this.visibleRanges.length||this.visibleRanges.some((t,i)=>t.from!=e[i].from||t.to!=e[i].to)
return this.visibleRanges=e,i?4:0}lineBlockAt(t){return t>=this.viewport.from&&t<=this.viewport.to&&this.viewportLines.find(e=>e.from<=t&&e.to>=t)||xs(this.heightMap.lineAt(t,ts.ByPos,this.heightOracle,0,0),this.scaler)}lineBlockAtHeight(t){return xs(this.heightMap.lineAt(this.scaler.fromDOM(t),ts.ByHeight,this.heightOracle,0,0),this.scaler)}scrollAnchorAt(t){let e=this.lineBlockAtHeight(t+8)
return e.from>=this.viewport.from||this.viewportLines[0].top-t>200?e:this.viewportLines[0]}elementAtHeight(t){return xs(this.heightMap.blockAt(this.scaler.fromDOM(t),this.heightOracle,0,0),this.scaler)}get docHeight(){return this.scaler.toDOM(this.heightMap.height)}get contentHeight(){return this.docHeight+this.paddingTop+this.paddingBottom}}class ms{constructor(t,e){this.from=t,this.to=e}}function gs(t,e,i){let n=[],s=t,r=0
return Tt.spans(i,t,e,{span(){},point(t,e){t>s&&(n.push({from:s,to:t}),r+=t-s),s=e}},20),s<e&&(n.push({from:s,to:e}),r+=e-s),{total:r,ranges:n}}function vs({total:t,ranges:e},i){if(i<=0)return e[0].from
if(i>=1)return e[e.length-1].to
let n=Math.floor(t*i)
for(let s=0;;s++){let{from:t,to:i}=e[s],r=i-t
if(n<=r)return t+n
n-=r}}function ws(t,e){let i=0
for(let{from:n,to:s}of t.ranges){if(e<=s){i+=e-n
break}i+=s-n}return i/t.total}const ys={toDOM:t=>t,fromDOM:t=>t,scale:1}
class bs{constructor(t,e,i){let n=0,s=0,r=0
this.viewports=i.map(({from:i,to:s})=>{let r=e.lineAt(i,ts.ByPos,t,0,0).top,o=e.lineAt(s,ts.ByPos,t,0,0).bottom
return n+=o-r,{from:i,to:s,top:r,bottom:o,domTop:0,domBottom:0}}),this.scale=(7e6-n)/(e.height-n)
for(let o of this.viewports)o.domTop=r+(o.top-s)*this.scale,r=o.domBottom=o.domTop+(o.bottom-o.top),s=o.bottom}toDOM(t){for(let e=0,i=0,n=0;;e++){let s=e<this.viewports.length?this.viewports[e]:null
if(!s||t<s.top)return n+(t-i)*this.scale
if(t<=s.bottom)return s.domTop+(t-s.top)
i=s.bottom,n=s.domBottom}}fromDOM(t){for(let e=0,i=0,n=0;;e++){let s=e<this.viewports.length?this.viewports[e]:null
if(!s||t<s.domTop)return i+(t-n)/this.scale
if(t<=s.domBottom)return s.top+(t-s.domTop)
i=s.bottom,n=s.domBottom}}}function xs(t,e){if(1==e.scale)return t
let i=e.toDOM(t.top),n=e.toDOM(t.bottom)
return new Zn(t.from,t.length,i,n-i,Array.isArray(t._content)?t._content.map(t=>xs(t,e)):t._content)}const ks=F.define({combine:t=>t.join(" ")}),Ss=F.define({combine:t=>t.indexOf(!0)>-1}),Cs=$t.newName(),Ms=$t.newName(),As=$t.newName(),Ds={"&light":"."+Ms,"&dark":"."+As}
function Os(t,e,i){return new $t(e,{finish:e=>/&/.test(e)?e.replace(/&\w*/,e=>{if("&"==e)return t
if(!i||!i[e])throw new RangeError(`Unsupported selector: ${e}`)
return i[e]}):t+" "+e})}const Ts=Os("."+Cs,{"&":{position:"relative !important",boxSizing:"border-box","&.cm-focused":{outline:"1px dotted #212121"},display:"flex !important",flexDirection:"column"},".cm-scroller":{display:"flex !important",alignItems:"flex-start !important",fontFamily:"monospace",lineHeight:1.4,height:"100%",overflowX:"auto",position:"relative",zIndex:0},".cm-content":{margin:0,flexGrow:2,flexShrink:0,display:"block",whiteSpace:"pre",wordWrap:"normal",boxSizing:"border-box",padding:"4px 0",outline:"none","&[contenteditable=true]":{WebkitUserModify:"read-write-plaintext-only"}},".cm-lineWrapping":{whiteSpace_fallback:"pre-wrap",whiteSpace:"break-spaces",wordBreak:"break-word",overflowWrap:"anywhere",flexShrink:1},"&light .cm-content":{caretColor:"black"},"&dark .cm-content":{caretColor:"white"},".cm-line":{display:"block",padding:"0 2px 0 6px"},".cm-layer":{position:"absolute",left:0,top:0,contain:"size style","& > *":{position:"absolute"}},"&light .cm-selectionBackground":{background:"#d9d9d9"},"&dark .cm-selectionBackground":{background:"#222"},"&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground":{background:"#d7d4f0"},"&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground":{background:"#233"},".cm-cursorLayer":{pointerEvents:"none"},"&.cm-focused > .cm-scroller > .cm-cursorLayer":{animation:"steps(1) cm-blink 1.2s infinite"},"@keyframes cm-blink":{"0%":{},"50%":{opacity:0},"100%":{}},"@keyframes cm-blink2":{"0%":{},"50%":{opacity:0},"100%":{}},".cm-cursor, .cm-dropCursor":{borderLeft:"1.2px solid black",marginLeft:"-0.6px",pointerEvents:"none"},".cm-cursor":{display:"none"},"&dark .cm-cursor":{borderLeftColor:"#444"},".cm-dropCursor":{position:"absolute"},"&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor":{display:"block"},"&light .cm-activeLine":{backgroundColor:"#cceeff44"},"&dark .cm-activeLine":{backgroundColor:"#99eeff33"},"&light .cm-specialChar":{color:"red"},"&dark .cm-specialChar":{color:"#f78"},".cm-gutters":{flexShrink:0,display:"flex",height:"100%",boxSizing:"border-box",insetInlineStart:0,zIndex:200},"&light .cm-gutters":{backgroundColor:"#f5f5f5",color:"#6c6c6c",borderRight:"1px solid #ddd"},"&dark .cm-gutters":{backgroundColor:"#333338",color:"#ccc"},".cm-gutter":{display:"flex !important",flexDirection:"column",flexShrink:0,boxSizing:"border-box",minHeight:"100%",overflow:"hidden"},".cm-gutterElement":{boxSizing:"border-box"},".cm-lineNumbers .cm-gutterElement":{padding:"0 3px 0 5px",minWidth:"20px",textAlign:"right",whiteSpace:"nowrap"},"&light .cm-activeLineGutter":{backgroundColor:"#e2f2ff"},"&dark .cm-activeLineGutter":{backgroundColor:"#222227"},".cm-panels":{boxSizing:"border-box",position:"sticky",left:0,right:0},"&light .cm-panels":{backgroundColor:"#f5f5f5",color:"black"},"&light .cm-panels-top":{borderBottom:"1px solid #ddd"},"&light .cm-panels-bottom":{borderTop:"1px solid #ddd"},"&dark .cm-panels":{backgroundColor:"#333338",color:"white"},".cm-tab":{display:"inline-block",overflow:"hidden",verticalAlign:"bottom"},".cm-widgetBuffer":{verticalAlign:"text-top",height:"1em",width:0,display:"inline"},".cm-placeholder":{color:"#888",display:"inline-block",verticalAlign:"top"},".cm-highlightSpace:before":{content:"attr(data-display)",position:"absolute",pointerEvents:"none",color:"#888"},".cm-highlightTab":{backgroundImage:'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>\')',backgroundSize:"auto 100%",backgroundPosition:"right 90%",backgroundRepeat:"no-repeat"},".cm-trailingSpace":{backgroundColor:"#ff332255"},".cm-button":{verticalAlign:"middle",color:"inherit",fontSize:"70%",padding:".2em 1em",borderRadius:"1px"},"&light .cm-button":{backgroundImage:"linear-gradient(#eff1f5, #d9d9df)",border:"1px solid #888","&:active":{backgroundImage:"linear-gradient(#b4b4b4, #d0d3d6)"}},"&dark .cm-button":{backgroundImage:"linear-gradient(#393939, #111)",border:"1px solid #888","&:active":{backgroundImage:"linear-gradient(#111, #333)"}},".cm-textfield":{verticalAlign:"middle",color:"inherit",fontSize:"70%",border:"1px solid silver",padding:".2em .5em"},"&light .cm-textfield":{backgroundColor:"white"},"&dark .cm-textfield":{border:"1px solid #555",backgroundColor:"inherit"}},Ds)
class Es{constructor(t,e,i,n){this.typeOver=n,this.bounds=null,this.text=""
let{impreciseHead:s,impreciseAnchor:r}=t.docView
if(t.state.readOnly&&e>-1)this.newSel=null
else if(e>-1&&(this.bounds=t.docView.domBoundsAround(e,i,0))){let e=s||r?[]:function(t){let e=[]
if(t.root.activeElement!=t.contentDOM)return e
let{anchorNode:i,anchorOffset:n,focusNode:s,focusOffset:r}=t.observer.selectionRange
return i&&(e.push(new Te(i,n)),s==i&&r==n||e.push(new Te(s,r))),e}(t),i=new De(e,t.state)
i.readRange(this.bounds.startDOM,this.bounds.endDOM),this.text=i.text,this.newSel=function(t,e){if(0==t.length)return null
let i=t[0].pos,n=2==t.length?t[1].pos:i
return i>-1&&n>-1?H.single(i+e,n+e):null}(e,this.bounds.from)}else{let e=t.observer.selectionRange,i=s&&s.node==e.focusNode&&s.offset==e.focusOffset||!ie(t.contentDOM,e.focusNode)?t.state.selection.main.head:t.docView.posFromDOM(e.focusNode,e.focusOffset),n=r&&r.node==e.anchorNode&&r.offset==e.anchorOffset||!ie(t.contentDOM,e.anchorNode)?t.state.selection.main.anchor:t.docView.posFromDOM(e.anchorNode,e.anchorOffset)
this.newSel=H.single(n,i)}}}function Rs(t,e){let i,{newSel:n}=e,s=t.state.selection.main,r=t.inputState.lastKeyTime>Date.now()-100?t.inputState.lastKeyCode:-1
if(e.bounds){let{from:n,to:l}=e.bounds,a=s.from,h=null;(8===r||ze.android&&e.text.length<l-n)&&(a=s.to,h="end")
let c=function(t,e,i,n){let s=Math.min(t.length,e.length),r=0
for(;r<s&&t.charCodeAt(r)==e.charCodeAt(r);)r++
if(r==s&&t.length==e.length)return null
let o=t.length,l=e.length
for(;o>0&&l>0&&t.charCodeAt(o-1)==e.charCodeAt(l-1);)o--,l--
return"end"==n&&(i-=o+Math.max(0,r-Math.min(o,l))-r),o<r&&t.length<e.length?(r-=i<=r&&i>=o?r-i:0,l=r+(l-o),o=r):l<r&&(r-=i<=r&&i>=l?r-i:0,o=r+(o-l),l=r),{from:r,toA:o,toB:l}}(t.state.doc.sliceString(n,l,Ae),e.text,a-n,h)
c&&(ze.chrome&&13==r&&c.toB==c.from+2&&e.text.slice(c.from,c.toB)==Ae+Ae&&c.toB--,i={from:n+c.from,to:n+c.toA,insert:o.of(e.text.slice(c.from,c.toB).split(Ae))})}else n&&(!t.hasFocus&&t.state.facet(Mi)||n.main.eq(s))&&(n=null)
if(!i&&!n)return!1
if(!i&&e.typeOver&&!s.empty&&n&&n.main.empty?i={from:s.from,to:s.to,insert:t.state.doc.slice(s.from,s.to)}:i&&i.from>=s.from&&i.to<=s.to&&(i.from!=s.from||i.to!=s.to)&&s.to-s.from-(i.to-i.from)<=4?i={from:s.from,to:s.to,insert:t.state.doc.slice(s.from,i.from).append(i.insert).append(t.state.doc.slice(i.to,s.to))}:(ze.mac||ze.android)&&i&&i.from==i.to&&i.from==s.head-1&&/^\. ?$/.test(i.insert.toString())&&"off"==t.contentDOM.getAttribute("autocorrect")?(n&&2==i.insert.length&&(n=H.single(n.main.anchor-1,n.main.head-1)),i={from:s.from,to:s.to,insert:o.of([" "])}):ze.chrome&&i&&i.from==i.to&&i.from==s.head&&"\n "==i.insert.toString()&&t.lineWrapping&&(n&&(n=H.single(n.main.anchor-1,n.main.head-1)),i={from:s.from,to:s.to,insert:o.of([" "])}),i){if(ze.ios&&t.inputState.flushIOSKey(t))return!0
if(ze.android&&(i.from==s.from&&i.to==s.to&&1==i.insert.length&&2==i.insert.lines&&ge(t.contentDOM,"Enter",13)||(i.from==s.from-1&&i.to==s.to&&0==i.insert.length||8==r&&i.insert.length<i.to-i.from)&&ge(t.contentDOM,"Backspace",8)||i.from==s.from&&i.to==s.to+1&&0==i.insert.length&&ge(t.contentDOM,"Delete",46)))return!0
let e,o=i.insert.toString()
t.inputState.composing>=0&&t.inputState.composing++
let l=()=>e||(e=function(t,e,i){let n,s=t.state,r=s.selection.main
if(e.from>=r.from&&e.to<=r.to&&e.to-e.from>=(r.to-r.from)/3&&(!i||i.main.empty&&i.main.from==e.from+e.insert.length)&&t.inputState.composing<0){let i=r.from<e.from?s.sliceDoc(r.from,e.from):"",o=r.to>e.to?s.sliceDoc(e.to,r.to):""
n=s.replaceSelection(t.state.toText(i+e.insert.sliceString(0,void 0,t.state.lineBreak)+o))}else{let o=s.changes(e),l=i&&i.main.to<=o.newLength?i.main:void 0
if(s.selection.ranges.length>1&&t.inputState.composing>=0&&e.to<=r.to&&e.to>=r.to-10){let i=t.state.sliceDoc(e.from,e.to),a=an(t)||t.state.doc.lineAt(r.head),h=r.to-e.to,c=r.to-r.from
n=s.changeByRange(n=>{if(n.from==r.from&&n.to==r.to)return{changes:o,range:l||n.map(o)}
let u=n.to-h,f=u-i.length
if(n.to-n.from!=c||t.state.sliceDoc(f,u)!=i||a&&n.to>=a.from&&n.from<=a.to)return{range:n}
let d=s.changes({from:f,to:u,insert:e.insert}),p=n.to-r.to
return{changes:d,range:l?H.range(Math.max(0,l.anchor+p),Math.max(0,l.head+p)):n.map(d)}})}else n={changes:o,selection:l&&s.selection.replaceRange(l)}}let o="input.type"
return(t.composing||t.inputState.compositionPendingChange&&t.inputState.compositionEndedAt>Date.now()-50)&&(t.inputState.compositionPendingChange=!1,o+=".compose",t.inputState.compositionFirstChange&&(o+=".start",t.inputState.compositionFirstChange=!1)),s.update(n,{userEvent:o,scrollIntoView:!0})}(t,i,n))
return t.state.facet(wi).some(e=>e(t,i.from,i.to,o,l))||t.dispatch(l()),!0}if(n&&!n.main.eq(s)){let e=!1,i="select"
return t.inputState.lastSelectionTime>Date.now()-50&&("select"==t.inputState.lastSelectionOrigin&&(e=!0),i=t.inputState.lastSelectionOrigin),t.dispatch({selection:n,scrollIntoView:e,userEvent:i}),!0}return!1}const Bs={childList:!0,characterData:!0,subtree:!0,attributes:!0,characterDataOldValue:!0},Ls=ze.ie&&ze.ie_version<=11
class Ps{constructor(t){this.view=t,this.active=!1,this.selectionRange=new ue,this.selectionChanged=!1,this.delayedFlush=-1,this.resizeTimeout=-1,this.queue=[],this.delayedAndroidKey=null,this.flushingAndroidKey=-1,this.lastChange=0,this.scrollTargets=[],this.intersection=null,this.resizeScroll=null,this.resizeContent=null,this.intersecting=!1,this.gapIntersection=null,this.gaps=[],this.parentCheck=-1,this.dom=t.contentDOM,this.observer=new MutationObserver(e=>{for(let t of e)this.queue.push(t);(ze.ie&&ze.ie_version<=11||ze.ios&&t.composing)&&e.some(t=>"childList"==t.type&&t.removedNodes.length||"characterData"==t.type&&t.oldValue.length>t.target.nodeValue.length)?this.flushSoon():this.flush()}),Ls&&(this.onCharData=t=>{this.queue.push({target:t.target,type:"characterData",oldValue:t.prevValue}),this.flushSoon()}),this.onSelectionChange=this.onSelectionChange.bind(this),this.onResize=this.onResize.bind(this),this.onPrint=this.onPrint.bind(this),this.onScroll=this.onScroll.bind(this),"function"==typeof ResizeObserver&&(this.resizeScroll=new ResizeObserver(()=>{var t;(null===(t=this.view.docView)||void 0===t?void 0:t.lastUpdate)<Date.now()-75&&this.onResize()}),this.resizeScroll.observe(t.scrollDOM),this.resizeContent=new ResizeObserver(()=>this.view.requestMeasure()),this.resizeContent.observe(t.contentDOM)),this.addWindowListeners(this.win=t.win),this.start(),"function"==typeof IntersectionObserver&&(this.intersection=new IntersectionObserver(t=>{this.parentCheck<0&&(this.parentCheck=setTimeout(this.listenForScroll.bind(this),1e3)),t.length>0&&t[t.length-1].intersectionRatio>0!=this.intersecting&&(this.intersecting=!this.intersecting,this.intersecting!=this.view.inView&&this.onScrollChanged(document.createEvent("Event")))},{threshold:[0,.001]}),this.intersection.observe(this.dom),this.gapIntersection=new IntersectionObserver(t=>{t.length>0&&t[t.length-1].intersectionRatio>0&&this.onScrollChanged(document.createEvent("Event"))},{})),this.listenForScroll(),this.readSelectionRange()}onScrollChanged(t){this.view.inputState.runScrollHandlers(this.view,t),this.intersecting&&this.view.measure()}onScroll(t){this.intersecting&&this.flush(!1),this.onScrollChanged(t)}onResize(){this.resizeTimeout<0&&(this.resizeTimeout=setTimeout(()=>{this.resizeTimeout=-1,this.view.requestMeasure()},50))}onPrint(){this.view.viewState.printing=!0,this.view.measure(),setTimeout(()=>{this.view.viewState.printing=!1,this.view.requestMeasure()},500)}updateGaps(t){if(this.gapIntersection&&(t.length!=this.gaps.length||this.gaps.some((e,i)=>e!=t[i]))){this.gapIntersection.disconnect()
for(let e of t)this.gapIntersection.observe(e)
this.gaps=t}}onSelectionChange(t){let e=this.selectionChanged
if(!this.readSelectionRange()||this.delayedAndroidKey)return
let{view:i}=this,n=this.selectionRange
if(i.state.facet(Mi)?i.root.activeElement!=this.dom:!ne(i.dom,n))return
let s=n.anchorNode&&i.docView.nearest(n.anchorNode)
s&&s.ignoreEvent(t)?e||(this.selectionChanged=!1):(ze.ie&&ze.ie_version<=11||ze.android&&ze.chrome)&&!i.state.selection.main.empty&&n.focusNode&&re(n.focusNode,n.focusOffset,n.anchorNode,n.anchorOffset)?this.flushSoon():this.flush(!1)}readSelectionRange(){let{view:t}=this,e=ze.safari&&11==t.root.nodeType&&function(t){let e=t.activeElement
for(;e&&e.shadowRoot;)e=e.shadowRoot.activeElement
return e}(this.dom.ownerDocument)==this.dom&&function(t){let e=null
function i(t){t.preventDefault(),t.stopImmediatePropagation(),e=t.getTargetRanges()[0]}if(t.contentDOM.addEventListener("beforeinput",i,!0),t.dom.ownerDocument.execCommand("indent"),t.contentDOM.removeEventListener("beforeinput",i,!0),!e)return null
let n=e.startContainer,s=e.startOffset,r=e.endContainer,o=e.endOffset,l=t.docView.domAtPos(t.state.selection.main.anchor)
return re(l.node,l.offset,r,o)&&([n,s,r,o]=[r,o,n,s]),{anchorNode:n,anchorOffset:s,focusNode:r,focusOffset:o}}(this.view)||ee(t.root)
if(!e||this.selectionRange.eq(e))return!1
let i=ne(this.dom,e)
return i&&!this.selectionChanged&&t.inputState.lastFocusTime>Date.now()-200&&t.inputState.lastTouchTime<Date.now()-300&&function(t,e){let i=e.focusNode,n=e.focusOffset
if(!i||e.anchorNode!=i||e.anchorOffset!=n)return!1
for(n=Math.min(n,ae(i));;)if(n){if(1!=i.nodeType)return!1
let t=i.childNodes[n-1]
"false"==t.contentEditable?n--:(i=t,n=ae(i))}else{if(i==t)return!0
n=oe(i),i=i.parentNode}}(this.dom,e)?(this.view.inputState.lastFocusTime=0,t.docView.updateSelection(),!1):(this.selectionRange.setRange(e),i&&(this.selectionChanged=!0),!0)}setSelectionRange(t,e){this.selectionRange.set(t.node,t.offset,e.node,e.offset),this.selectionChanged=!1}clearSelectionRange(){this.selectionRange.set(null,0,null,0)}listenForScroll(){this.parentCheck=-1
let t=0,e=null
for(let i=this.dom;i;)if(1==i.nodeType)!e&&t<this.scrollTargets.length&&this.scrollTargets[t]==i?t++:e||(e=this.scrollTargets.slice(0,t)),e&&e.push(i),i=i.assignedSlot||i.parentNode
else{if(11!=i.nodeType)break
i=i.host}if(t<this.scrollTargets.length&&!e&&(e=this.scrollTargets.slice(0,t)),e){for(let t of this.scrollTargets)t.removeEventListener("scroll",this.onScroll)
for(let t of this.scrollTargets=e)t.addEventListener("scroll",this.onScroll)}}ignore(t){if(!this.active)return t()
try{return this.stop(),t()}finally{this.start(),this.clear()}}start(){this.active||(this.observer.observe(this.dom,Bs),Ls&&this.dom.addEventListener("DOMCharacterDataModified",this.onCharData),this.active=!0)}stop(){this.active&&(this.active=!1,this.observer.disconnect(),Ls&&this.dom.removeEventListener("DOMCharacterDataModified",this.onCharData))}clear(){this.processRecords(),this.queue.length=0,this.selectionChanged=!1}delayAndroidKey(t,e){var i
if(!this.delayedAndroidKey){let t=()=>{let t=this.delayedAndroidKey
t&&(this.clearDelayedAndroidKey(),this.view.inputState.lastKeyCode=t.keyCode,this.view.inputState.lastKeyTime=Date.now(),!this.flush()&&t.force&&ge(this.dom,t.key,t.keyCode))}
this.flushingAndroidKey=this.view.win.requestAnimationFrame(t)}this.delayedAndroidKey&&"Enter"!=t||(this.delayedAndroidKey={key:t,keyCode:e,force:this.lastChange<Date.now()-50||!!(null===(i=this.delayedAndroidKey)||void 0===i?void 0:i.force)})}clearDelayedAndroidKey(){this.win.cancelAnimationFrame(this.flushingAndroidKey),this.delayedAndroidKey=null,this.flushingAndroidKey=-1}flushSoon(){this.delayedFlush<0&&(this.delayedFlush=this.view.win.requestAnimationFrame(()=>{this.delayedFlush=-1,this.flush()}))}forceFlush(){this.delayedFlush>=0&&(this.view.win.cancelAnimationFrame(this.delayedFlush),this.delayedFlush=-1),this.flush()}pendingRecords(){for(let t of this.observer.takeRecords())this.queue.push(t)
return this.queue}processRecords(){let t=this.pendingRecords()
t.length&&(this.queue=[])
let e=-1,i=-1,n=!1
for(let s of t){let t=this.readMutation(s)
t&&(t.typeOver&&(n=!0),-1==e?({from:e,to:i}=t):(e=Math.min(t.from,e),i=Math.max(t.to,i)))}return{from:e,to:i,typeOver:n}}readChange(){let{from:t,to:e,typeOver:i}=this.processRecords(),n=this.selectionChanged&&ne(this.dom,this.selectionRange)
return t<0&&!n?null:(t>-1&&(this.lastChange=Date.now()),this.view.inputState.lastFocusTime=0,this.selectionChanged=!1,new Es(this.view,t,e,i))}flush(t=!0){if(this.delayedFlush>=0||this.delayedAndroidKey)return!1
t&&this.readSelectionRange()
let e=this.readChange()
if(!e)return!1
let i=this.view.state,n=Rs(this.view,e)
return this.view.state==i&&this.view.update([]),n}readMutation(t){let e=this.view.docView.nearest(t.target)
if(!e||e.ignoreMutation(t))return null
if(e.markDirty("attributes"==t.type),"attributes"==t.type&&(e.flags|=4),"childList"==t.type){let i=Is(e,t.previousSibling||t.target.previousSibling,-1),n=Is(e,t.nextSibling||t.target.nextSibling,1)
return{from:i?e.posAfter(i):e.posAtStart,to:n?e.posBefore(n):e.posAtEnd,typeOver:!1}}return"characterData"==t.type?{from:e.posAtStart,to:e.posAtEnd,typeOver:t.target.nodeValue==t.oldValue}:null}setWindow(t){t!=this.win&&(this.removeWindowListeners(this.win),this.win=t,this.addWindowListeners(this.win))}addWindowListeners(t){t.addEventListener("resize",this.onResize),t.addEventListener("beforeprint",this.onPrint),t.addEventListener("scroll",this.onScroll),t.document.addEventListener("selectionchange",this.onSelectionChange)}removeWindowListeners(t){t.removeEventListener("scroll",this.onScroll),t.removeEventListener("resize",this.onResize),t.removeEventListener("beforeprint",this.onPrint),t.document.removeEventListener("selectionchange",this.onSelectionChange)}destroy(){var t,e,i,n
this.stop(),null===(t=this.intersection)||void 0===t||t.disconnect(),null===(e=this.gapIntersection)||void 0===e||e.disconnect(),null===(i=this.resizeScroll)||void 0===i||i.disconnect(),null===(n=this.resizeContent)||void 0===n||n.disconnect()
for(let s of this.scrollTargets)s.removeEventListener("scroll",this.onScroll)
this.removeWindowListeners(this.win),clearTimeout(this.parentCheck),clearTimeout(this.resizeTimeout),this.win.cancelAnimationFrame(this.delayedFlush),this.win.cancelAnimationFrame(this.flushingAndroidKey)}}function Is(t,e,i){for(;e;){let n=xe.get(e)
if(n&&n.parent==t)return n
let s=e.parentNode
e=s!=t.dom?s:i>0?e.nextSibling:e.previousSibling}return null}class Ns{get state(){return this.viewState.state}get viewport(){return this.viewState.viewport}get visibleRanges(){return this.viewState.visibleRanges}get inView(){return this.viewState.inView}get composing(){return this.inputState.composing>0}get compositionStarted(){return this.inputState.composing>=0}get root(){return this._root}get win(){return this.dom.ownerDocument.defaultView||window}constructor(t={}){this.plugins=[],this.pluginMap=new Map,this.editorAttrs={},this.contentAttrs={},this.bidiCache=[],this.destroyed=!1,this.updateState=2,this.measureScheduled=-1,this.measureRequests=[],this.contentDOM=document.createElement("div"),this.scrollDOM=document.createElement("div"),this.scrollDOM.tabIndex=-1,this.scrollDOM.className="cm-scroller",this.scrollDOM.appendChild(this.contentDOM),this.announceDOM=document.createElement("div"),this.announceDOM.style.cssText="position: fixed; top: -10000px",this.announceDOM.setAttribute("aria-live","polite"),this.dom=document.createElement("div"),this.dom.appendChild(this.announceDOM),this.dom.appendChild(this.scrollDOM)
let{dispatch:e}=t
this.dispatchTransactions=t.dispatchTransactions||e&&(t=>t.forEach(t=>e(t,this)))||(t=>this.update(t)),this.dispatch=this.dispatch.bind(this),this._root=t.root||function(t){for(;t;){if(t&&(9==t.nodeType||11==t.nodeType&&t.host))return t
t=t.assignedSlot||t.parentNode}return null}(t.parent)||document,this.viewState=new ps(t.state||St.create(t)),this.plugins=this.state.facet(Di).map(t=>new Ti(t))
for(let i of this.plugins)i.update(this)
this.observer=new Ps(this),this.inputState=new Cn(this),this.inputState.ensureHandlers(this,this.plugins),this.docView=new on(this),this.mountStyles(),this.updateAttrs(),this.updateState=0,this.requestMeasure(),t.parent&&t.parent.appendChild(this.dom)}dispatch(...t){let e=1==t.length&&t[0]instanceof dt?t:1==t.length&&Array.isArray(t[0])?t[0]:[this.state.update(...t)]
this.dispatchTransactions(e,this)}update(t){if(0!=this.updateState)throw new Error("Calls to EditorView.update are not allowed while an update is in progress")
let e,i=!1,n=!1,s=this.state
for(let u of t){if(u.startState!=s)throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.")
s=u.state}if(this.destroyed)return void(this.viewState.state=s)
let r=this.hasFocus,o=0,l=null
t.some(t=>t.annotation(Un))?(this.inputState.notifiedFocused=r,o=1):r!=this.inputState.notifiedFocused&&(this.inputState.notifiedFocused=r,l=Gn(s,r),l||(o=1))
let a=this.observer.delayedAndroidKey,h=null
if(a?(this.observer.clearDelayedAndroidKey(),h=this.observer.readChange(),(h&&!this.state.doc.eq(s.doc)||!this.state.selection.eq(s.selection))&&(h=null)):this.observer.clear(),s.facet(St.phrases)!=this.state.facet(St.phrases))return this.setState(s)
e=Fi.create(this,s,t),e.flags|=o
let c=this.viewState.scrollTarget
try{this.updateState=2
for(let e of t){if(c&&(c=c.map(e.changes)),e.scrollIntoView){let{main:t}=e.state.selection
c=new ki(t.empty?t:H.cursor(t.head,t.head>t.anchor?-1:1))}for(let t of e.effects)t.is(Si)&&(c=t.value)}this.viewState.update(e,c),this.bidiCache=Vs.update(this.bidiCache,e.changes),e.empty||(this.updatePlugins(e),this.inputState.update(e)),i=this.docView.update(e),this.state.facet(Wi)!=this.styleModules&&this.mountStyles(),n=this.updateAttrs(),this.showAnnouncements(t),this.docView.updateSelection(i,t.some(t=>t.isUserEvent("select.pointer")))}finally{this.updateState=0}if(e.startState.facet(ks)!=e.state.facet(ks)&&(this.viewState.mustMeasureContent=!0),(i||n||c||this.viewState.mustEnforceCursorAssoc||this.viewState.mustMeasureContent)&&this.requestMeasure(),!e.empty)for(let u of this.state.facet(vi))u(e);(l||h)&&Promise.resolve().then(()=>{l&&this.state==l.startState&&this.dispatch(l),h&&!Rs(this,h)&&a.force&&ge(this.contentDOM,a.key,a.keyCode)})}setState(t){if(0!=this.updateState)throw new Error("Calls to EditorView.setState are not allowed while an update is in progress")
if(this.destroyed)return void(this.viewState.state=t)
this.updateState=2
let e=this.hasFocus
try{for(let t of this.plugins)t.destroy(this)
this.viewState=new ps(t),this.plugins=t.facet(Di).map(t=>new Ti(t)),this.pluginMap.clear()
for(let t of this.plugins)t.update(this)
this.docView=new on(this),this.inputState.ensureHandlers(this,this.plugins),this.mountStyles(),this.updateAttrs(),this.bidiCache=[]}finally{this.updateState=0}e&&this.focus(),this.requestMeasure()}updatePlugins(t){let e=t.startState.facet(Di),i=t.state.facet(Di)
if(e!=i){let n=[]
for(let s of i){let i=e.indexOf(s)
if(i<0)n.push(new Ti(s))
else{let e=this.plugins[i]
e.mustUpdate=t,n.push(e)}}for(let e of this.plugins)e.mustUpdate!=t&&e.destroy(this)
this.plugins=n,this.pluginMap.clear(),this.inputState.ensureHandlers(this,this.plugins)}else for(let n of this.plugins)n.mustUpdate=t
for(let n=0;n<this.plugins.length;n++)this.plugins[n].update(this)}measure(t=!0){if(this.destroyed)return
this.measureScheduled>-1&&this.win.cancelAnimationFrame(this.measureScheduled),this.measureScheduled=0,t&&this.observer.forceFlush()
let e=null,i=this.scrollDOM,{scrollTop:n}=i,{scrollAnchorPos:s,scrollAnchorHeight:r}=this.viewState
n!=this.viewState.scrollTop&&(r=-1),this.viewState.scrollAnchorHeight=-1
try{for(let o=0;;o++){if(r<0)if(we(i))s=-1,r=this.viewState.heightMap.height
else{let t=this.viewState.scrollAnchorAt(n)
s=t.from,r=t.top}this.updateState=1
let l=this.viewState.measure(this)
if(!l&&!this.measureRequests.length&&null==this.viewState.scrollTarget)break
if(o>5){console.warn(this.measureRequests.length?"Measure loop restarted more than 5 times":"Viewport failed to stabilize")
break}let a=[]
4&l||([this.measureRequests,a]=[a,this.measureRequests])
let h=a.map(t=>{try{return t.read(this)}catch(t){return Ci(this.state,t),Ws}}),c=Fi.create(this,this.state,[]),u=!1
c.flags|=l,e?e.flags|=l:e=c,this.updateState=2,c.empty||(this.updatePlugins(c),this.inputState.update(c),this.updateAttrs(),u=this.docView.update(c))
for(let e=0;e<a.length;e++)if(h[e]!=Ws)try{let t=a[e]
t.write&&t.write(h[e],this)}catch(t){Ci(this.state,t)}if(u&&this.docView.updateSelection(!0),!c.viewportChanged&&0==this.measureRequests.length){if(this.viewState.editorHeight){if(this.viewState.scrollTarget){this.docView.scrollIntoView(this.viewState.scrollTarget),this.viewState.scrollTarget=null
continue}{let t=(s<0?this.viewState.heightMap.height:this.viewState.lineBlockAt(s).top)-r
if(t>1||t<-1){n=i.scrollTop=n+t,r=-1
continue}}}break}}}finally{this.updateState=0,this.measureScheduled=-1}if(e&&!e.empty)for(let o of this.state.facet(vi))o(e)}get themeClasses(){return Cs+" "+(this.state.facet(Ss)?As:Ms)+" "+this.state.facet(ks)}updateAttrs(){let t=Fs(this,Ei,{class:"cm-editor"+(this.hasFocus?" cm-focused ":" ")+this.themeClasses}),e={spellcheck:"false",autocorrect:"off",autocapitalize:"off",translate:"no",contenteditable:this.state.facet(Mi)?"true":"false",class:"cm-content",style:`${ze.tabSize}: ${this.state.tabSize}`,role:"textbox","aria-multiline":"true"}
this.state.readOnly&&(e["aria-readonly"]="true"),Fs(this,Ri,e)
let i=this.observer.ignore(()=>{let i=Qe(this.contentDOM,this.contentAttrs,e),n=Qe(this.dom,this.editorAttrs,t)
return i||n})
return this.editorAttrs=t,this.contentAttrs=e,i}showAnnouncements(t){let e=!0
for(let i of t)for(let t of i.effects)t.is(Ns.announce)&&(e&&(this.announceDOM.textContent=""),e=!1,this.announceDOM.appendChild(document.createElement("div")).textContent=t.value)}mountStyles(){this.styleModules=this.state.facet(Wi)
let t=this.state.facet(Ns.cspNonce)
$t.mount(this.root,this.styleModules.concat(Ts).reverse(),t?{nonce:t}:void 0)}readMeasured(){if(2==this.updateState)throw new Error("Reading the editor layout isn't allowed during an update")
0==this.updateState&&this.measureScheduled>-1&&this.measure(!1)}requestMeasure(t){if(this.measureScheduled<0&&(this.measureScheduled=this.win.requestAnimationFrame(()=>this.measure())),t){if(this.measureRequests.indexOf(t)>-1)return
if(null!=t.key)for(let e=0;e<this.measureRequests.length;e++)if(this.measureRequests[e].key===t.key)return void(this.measureRequests[e]=t)
this.measureRequests.push(t)}}plugin(t){let e=this.pluginMap.get(t)
return(void 0===e||e&&e.spec!=t)&&this.pluginMap.set(t,e=this.plugins.find(e=>e.spec==t)||null),e&&e.update(this).value}get documentTop(){return this.contentDOM.getBoundingClientRect().top+this.viewState.paddingTop}get documentPadding(){return{top:this.viewState.paddingTop,bottom:this.viewState.paddingBottom}}elementAtHeight(t){return this.readMeasured(),this.viewState.elementAtHeight(t)}lineBlockAtHeight(t){return this.readMeasured(),this.viewState.lineBlockAtHeight(t)}get viewportLineBlocks(){return this.viewState.viewportLines}lineBlockAt(t){return this.viewState.lineBlockAt(t)}get contentHeight(){return this.viewState.contentHeight}moveByChar(t,e,i){return Sn(this,t,xn(this,t,e,i))}moveByGroup(t,e){return Sn(this,t,xn(this,t,e,e=>function(t,e,i){let n=t.state.charCategorizer(e),s=n(i)
return t=>{let e=n(t)
return s==bt.Space&&(s=e),s==e}}(this,t.head,e)))}moveToLineBoundary(t,e,i=!0){return function(t,e,i,n){let s=bn(t,e.head),r=n&&s.type==ei.Text&&(t.lineWrapping||s.widgetLineBreaks)?t.coordsAtPos(e.assoc<0&&e.head>s.from?e.head-1:e.head):null
if(r){let e=t.dom.getBoundingClientRect(),n=t.textDirectionAt(s.from),o=t.posAtCoords({x:i==(n==zi.LTR)?e.right-1:e.left+1,y:(r.top+r.bottom)/2})
if(null!=o)return H.cursor(o,i?-1:1)}return H.cursor(i?s.to:s.from,i?-1:1)}(this,t,e,i)}moveVertically(t,e,i){return Sn(this,t,function(t,e,i,n){let s=e.head,r=i?1:-1
if(s==(i?t.state.doc.length:0))return H.cursor(s,e.assoc)
let o,l=e.goalColumn,a=t.contentDOM.getBoundingClientRect(),h=t.coordsAtPos(s),c=t.documentTop
if(h)null==l&&(l=h.left-a.left),o=r<0?h.top:h.bottom
else{let e=t.viewState.lineBlockAt(s)
null==l&&(l=Math.min(a.right-a.left,t.defaultCharacterWidth*(s-e.from))),o=(r<0?e.top:e.bottom)+c}let u=a.left+l,f=null!=n?n:t.viewState.heightOracle.textHeight>>1
for(let d=0;;d+=10){let i=o+(f+d)*r,n=wn(t,{x:u,y:i},!1,r)
if(i<a.top||i>a.bottom||(r<0?n<s:n>s))return H.cursor(n,e.assoc,void 0,l)}}(this,t,e,i))}domAtPos(t){return this.docView.domAtPos(t)}posAtDOM(t,e=0){return this.docView.posFromDOM(t,e)}posAtCoords(t,e=!0){return this.readMeasured(),wn(this,t,e)}coordsAtPos(t,e=1){this.readMeasured()
let i=this.docView.coordsAt(t,e)
if(!i||i.left==i.right)return i
let n=this.state.doc.lineAt(t),s=this.bidiSpans(n)
return he(i,s[Yi.find(s,t-n.from,-1,e)].dir==zi.LTR==e>0)}coordsForChar(t){return this.readMeasured(),this.docView.coordsForChar(t)}get defaultCharacterWidth(){return this.viewState.heightOracle.charWidth}get defaultLineHeight(){return this.viewState.heightOracle.lineHeight}get textDirection(){return this.viewState.defaultTextDirection}textDirectionAt(t){return!this.state.facet(bi)||t<this.viewport.from||t>this.viewport.to?this.textDirection:(this.readMeasured(),this.docView.textDirectionAt(t))}get lineWrapping(){return this.viewState.heightOracle.lineWrapping}bidiSpans(t){if(t.length>Hs)return nn(t.length)
let e,i=this.textDirectionAt(t.from)
for(let s of this.bidiCache)if(s.from==t.from&&s.dir==i&&(s.fresh||Qi(s.isolates,e=Ii(this,t.from,t.to))))return s.order
e||(e=Ii(this,t.from,t.to))
let n=function(t,e,i){if(!t)return[new Yi(0,0,e==_i?1:0)]
if(e==qi&&!i.length&&!Xi.test(t))return nn(t.length)
if(i.length)for(;t.length>Zi.length;)Zi[Zi.length]=256
let n=[],s=e==qi?0:1
return en(t,s,s,i,0,t.length,n),n}(t.text,i,e)
return this.bidiCache.push(new Vs(t.from,t.to,i,e,!0,n)),n}get hasFocus(){var t
return(this.dom.ownerDocument.hasFocus()||ze.safari&&(null===(t=this.inputState)||void 0===t?void 0:t.lastContextMenu)>Date.now()-3e4)&&this.root.activeElement==this.contentDOM}focus(){this.observer.ignore(()=>{pe(this.contentDOM),this.docView.updateSelection()})}setRoot(t){this._root!=t&&(this._root=t,this.observer.setWindow((9==t.nodeType?t:t.ownerDocument).defaultView||window),this.mountStyles())}destroy(){for(let t of this.plugins)t.destroy(this)
this.plugins=[],this.inputState.destroy(),this.dom.remove(),this.observer.destroy(),this.measureScheduled>-1&&this.win.cancelAnimationFrame(this.measureScheduled),this.destroyed=!0}static scrollIntoView(t,e={}){return Si.of(new ki("number"==typeof t?H.cursor(t):t,e.y,e.x,e.yMargin,e.xMargin))}static domEventHandlers(t){return Oi.define(()=>({}),{eventHandlers:t})}static theme(t,e){let i=$t.newName(),n=[ks.of(i),Wi.of(Os(`.${i}`,t))]
return e&&e.dark&&n.push(Ss.of(!0)),n}static baseTheme(t){return J.lowest(Wi.of(Os("."+Cs,t,Ds)))}static findFromDOM(t){var e
let i=t.querySelector(".cm-content"),n=i&&xe.get(i)||xe.get(t)
return(null===(e=null==n?void 0:n.rootView)||void 0===e?void 0:e.view)||null}}Ns.styleModule=Wi,Ns.inputHandler=wi,Ns.focusChangeEffect=yi,Ns.perLineTextDirection=bi,Ns.exceptionSink=gi,Ns.updateListener=vi,Ns.editable=Mi,Ns.mouseSelectionStyle=mi,Ns.dragMovesSelection=pi,Ns.clickAddsSelectionRange=di,Ns.decorations=Bi,Ns.atomicRanges=Li,Ns.bidiIsolatedRanges=Pi,Ns.scrollMargins=Ni,Ns.darkTheme=Ss,Ns.cspNonce=F.define({combine:t=>t.length?t[0]:""}),Ns.contentAttributes=Ri,Ns.editorAttributes=Ei,Ns.lineWrapping=Ns.contentAttributes.of({class:"cm-lineWrapping"}),Ns.announce=ft.define()
const Hs=4096,Ws={}
class Vs{constructor(t,e,i,n,s,r){this.from=t,this.to=e,this.dir=i,this.isolates=n,this.fresh=s,this.order=r}static update(t,e){if(e.empty&&!t.some(t=>t.fresh))return t
let i=[],n=t.length?t[t.length-1].dir:zi.LTR
for(let s=Math.max(0,t.length-10);s<t.length;s++){let r=t[s]
r.dir!=n||e.touchesRange(r.from,r.to)||i.push(new Vs(e.mapPos(r.from,1),e.mapPos(r.to,-1),r.dir,r.isolates,!1,r.order))}return i}}function Fs(t,e,i){for(let n=t.state.facet(e),s=n.length-1;s>=0;s--){let e=n[s],r="function"==typeof e?e(t):e
r&&Je(r,i)}return i}const zs=ze.mac?"mac":ze.windows?"win":ze.linux?"linux":"key"
function qs(t,e,i){return e.altKey&&(t="Alt-"+t),e.ctrlKey&&(t="Ctrl-"+t),e.metaKey&&(t="Meta-"+t),!1!==i&&e.shiftKey&&(t="Shift-"+t),t}const _s=F.define({enables:J.default(Ns.domEventHandlers({keydown:(t,e)=>Us(Ks(e.state),t,e,"editor")}))}),js=new WeakMap
function Ks(t){let e=t.facet(_s),i=js.get(e)
return i||js.set(e,i=function(t,e=zs){let i=Object.create(null),n=Object.create(null),s=(t,e)=>{let i=n[t]
if(null==i)n[t]=e
else if(i!=e)throw new Error("Key binding "+t+" is used both as a regular binding and as a multi-stroke prefix")},r=(t,n,r,o,l)=>{var a,h
let c=i[t]||(i[t]=Object.create(null)),u=n.split(/ (?!$)/).map(t=>function(t,e){const i=t.split(/-(?!$)/)
let n,s,r,o,l=i[i.length-1]
"Space"==l&&(l=" ")
for(let a=0;a<i.length-1;++a){const t=i[a]
if(/^(cmd|meta|m)$/i.test(t))o=!0
else if(/^a(lt)?$/i.test(t))n=!0
else if(/^(c|ctrl|control)$/i.test(t))s=!0
else if(/^s(hift)?$/i.test(t))r=!0
else{if(!/^mod$/i.test(t))throw new Error("Unrecognized modifier name: "+t)
"mac"==e?o=!0:s=!0}}return n&&(l="Alt-"+l),s&&(l="Ctrl-"+l),o&&(l="Meta-"+l),r&&(l="Shift-"+l),l}(t,e))
for(let e=1;e<u.length;e++){let i=u.slice(0,e).join(" ")
s(i,!0),c[i]||(c[i]={preventDefault:!0,stopPropagation:!1,run:[e=>{let n=$s={view:e,prefix:i,scope:t}
return setTimeout(()=>{$s==n&&($s=null)},4e3),!0}]})}let f=u.join(" ")
s(f,!1)
let d=c[f]||(c[f]={preventDefault:!1,stopPropagation:!1,run:(null===(h=null===(a=c._any)||void 0===a?void 0:a.run)||void 0===h?void 0:h.slice())||[]})
r&&d.run.push(r),o&&(d.preventDefault=!0),l&&(d.stopPropagation=!0)}
for(let o of t){let t=o.scope?o.scope.split(" "):["editor"]
if(o.any)for(let e of t){let t=i[e]||(i[e]=Object.create(null))
t._any||(t._any={preventDefault:!1,stopPropagation:!1,run:[]})
for(let e in t)t[e].run.push(o.any)}let n=o[e]||o.key
if(n)for(let e of t)r(e,n,o.run,o.preventDefault,o.stopPropagation),o.shift&&r(e,"Shift-"+n,o.shift,o.preventDefault,o.stopPropagation)}return i}(e.reduce((t,e)=>t.concat(e),[]))),i}let $s=null
function Us(t,e,i,n){let s=function(t){var e=!(Yt&&t.metaKey&&t.shiftKey&&!t.ctrlKey&&!t.altKey||Qt&&t.shiftKey&&t.key&&1==t.key.length||"Unidentified"==t.key)&&t.key||(t.shiftKey?Xt:Jt)[t.keyCode]||t.key||"Unidentified"
return"Esc"==e&&(e="Escape"),"Del"==e&&(e="Delete"),"Left"==e&&(e="ArrowLeft"),"Up"==e&&(e="ArrowUp"),"Right"==e&&(e="ArrowRight"),"Down"==e&&(e="ArrowDown"),e}(e),r=M(S(s,0))==s.length&&" "!=s,o="",l=!1,a=!1,h=!1
$s&&$s.view==i&&$s.scope==n&&(o=$s.prefix+" ",Dn.indexOf(e.keyCode)<0&&(a=!0,$s=null))
let c,u,f=new Set,d=t=>{if(t){for(let n of t.run)if(!f.has(n)&&(f.add(n),n(i,e)))return t.stopPropagation&&(h=!0),!0
t.preventDefault&&(t.stopPropagation&&(h=!0),a=!0)}return!1},p=t[n]
return p&&(d(p[o+qs(s,e,!r)])?l=!0:r&&(e.altKey||e.metaKey||e.ctrlKey)&&!(ze.windows&&e.ctrlKey&&e.altKey)&&(c=Jt[e.keyCode])&&c!=s?(d(p[o+qs(c,e,!0)])||e.shiftKey&&(u=Xt[e.keyCode])!=s&&u!=c&&d(p[o+qs(u,e,!1)]))&&(l=!0):r&&e.shiftKey&&d(p[o+qs(s,e,!0)])&&(l=!0),!l&&d(p._any)&&(l=!0)),a&&(l=!0),l&&h&&e.stopPropagation(),l}class Gs{constructor(t,e,i,n,s){this.className=t,this.left=e,this.top=i,this.width=n,this.height=s}draw(){let t=document.createElement("div")
return t.className=this.className,this.adjust(t),t}update(t,e){return e.className==this.className&&(this.adjust(t),!0)}adjust(t){t.style.left=this.left+"px",t.style.top=this.top+"px",null!=this.width&&(t.style.width=this.width+"px"),t.style.height=this.height+"px"}eq(t){return this.left==t.left&&this.top==t.top&&this.width==t.width&&this.height==t.height&&this.className==t.className}static forRange(t,e,i){if(i.empty){let n=t.coordsAtPos(i.head,i.assoc||1)
if(!n)return[]
let s=Js(t)
return[new Gs(e,n.left-s.left,n.top-s.top,null,n.bottom-n.top)]}return function(t,e,i){if(i.to<=t.viewport.from||i.from>=t.viewport.to)return[]
let n=Math.max(i.from,t.viewport.from),s=Math.min(i.to,t.viewport.to),r=t.textDirection==zi.LTR,o=t.contentDOM,l=o.getBoundingClientRect(),a=Js(t),h=o.querySelector(".cm-line"),c=h&&window.getComputedStyle(h),u=l.left+(c?parseInt(c.paddingLeft)+Math.min(0,parseInt(c.textIndent)):0),f=l.right-(c?parseInt(c.paddingRight):0),d=bn(t,n),p=bn(t,s),m=d.type==ei.Text?d:null,g=p.type==ei.Text?p:null
if(m&&(t.lineWrapping||d.widgetLineBreaks)&&(m=Xs(t,n,m)),g&&(t.lineWrapping||p.widgetLineBreaks)&&(g=Xs(t,s,g)),m&&g&&m.from==g.from)return w(y(i.from,i.to,m))
{let e=m?y(i.from,null,m):b(d,!1),n=g?y(null,i.to,g):b(p,!0),s=[]
return(m||d).to<(g||p).from-(m&&g?1:0)||d.widgetLineBreaks>1&&e.bottom+t.defaultLineHeight/2<n.top?s.push(v(u,e.bottom,f,n.top)):e.bottom<n.top&&t.elementAtHeight((e.bottom+n.top)/2).type==ei.Text&&(e.bottom=n.top=(e.bottom+n.top)/2),w(e).concat(s).concat(w(n))}function v(t,i,n,s){return new Gs(e,t-a.left,i-a.top-.01,n-t,s-i+.01)}function w({top:t,bottom:e,horizontal:i}){let n=[]
for(let s=0;s<i.length;s+=2)n.push(v(i[s],t,i[s+1],e))
return n}function y(e,i,n){let s=1e9,o=-1e9,l=[]
function a(e,i,a,h,c){let d=t.coordsAtPos(e,e==n.to?-2:2),p=t.coordsAtPos(a,a==n.from?2:-2)
d&&p&&(s=Math.min(d.top,p.top,s),o=Math.max(d.bottom,p.bottom,o),c==zi.LTR?l.push(r&&i?u:d.left,r&&h?f:p.right):l.push(!r&&h?u:p.left,!r&&i?f:d.right))}let h=null!=e?e:n.from,c=null!=i?i:n.to
for(let r of t.visibleRanges)if(r.to>h&&r.from<c)for(let n=Math.max(r.from,h),s=Math.min(r.to,c);;){let r=t.state.doc.lineAt(n)
for(let o of t.bidiSpans(r)){let t=o.from+r.from,l=o.to+r.from
if(t>=s)break
l>n&&a(Math.max(t,n),null==e&&t<=h,Math.min(l,s),null==i&&l>=c,o.dir)}if(n=r.to+1,n>=s)break}return 0==l.length&&a(h,null==e,c,null==i,t.textDirection),{top:s,bottom:o,horizontal:l}}function b(t,e){let i=l.top+(e?t.top:t.bottom)
return{top:i,bottom:i,horizontal:[]}}}(t,e,i)}}function Js(t){let e=t.scrollDOM.getBoundingClientRect()
return{left:(t.textDirection==zi.LTR?e.left:e.right-t.scrollDOM.clientWidth)-t.scrollDOM.scrollLeft,top:e.top-t.scrollDOM.scrollTop}}function Xs(t,e,i){let n=H.cursor(e)
return{from:Math.max(i.from,t.moveToLineBoundary(n,!1,!0).from),to:Math.min(i.to,t.moveToLineBoundary(n,!0,!0).from),type:ei.Text}}class Ys{constructor(t,e){this.view=t,this.layer=e,this.drawn=[],this.measureReq={read:this.measure.bind(this),write:this.draw.bind(this)},this.dom=t.scrollDOM.appendChild(document.createElement("div")),this.dom.classList.add("cm-layer"),e.above&&this.dom.classList.add("cm-layer-above"),e.class&&this.dom.classList.add(e.class),this.dom.setAttribute("aria-hidden","true"),this.setOrder(t.state),t.requestMeasure(this.measureReq),e.mount&&e.mount(this.dom,t)}update(t){t.startState.facet(Qs)!=t.state.facet(Qs)&&this.setOrder(t.state),(this.layer.update(t,this.dom)||t.geometryChanged)&&t.view.requestMeasure(this.measureReq)}setOrder(t){let e=0,i=t.facet(Qs)
for(;e<i.length&&i[e]!=this.layer;)e++
this.dom.style.zIndex=String((this.layer.above?150:-1)-e)}measure(){return this.layer.markers(this.view)}draw(t){if(t.length!=this.drawn.length||t.some((t,e)=>{return i=t,n=this.drawn[e],!(i.constructor==n.constructor&&i.eq(n))
var i,n})){let e=this.dom.firstChild,i=0
for(let n of t)n.update&&e&&n.constructor&&this.drawn[i].constructor&&n.update(e,this.drawn[i])?(e=e.nextSibling,i++):this.dom.insertBefore(n.draw(),e)
for(;e;){let t=e.nextSibling
e.remove(),e=t}this.drawn=t}}destroy(){this.layer.destroy&&this.layer.destroy(this.dom,this.view),this.dom.remove()}}const Qs=F.define()
function Zs(t){return[Oi.define(e=>new Ys(e,t)),Qs.of(t)]}const tr=!ze.ios,er=F.define({combine:t=>Ct(t,{cursorBlinkRate:1200,drawRangeCursor:!0},{cursorBlinkRate:(t,e)=>Math.min(t,e),drawRangeCursor:(t,e)=>t||e})})
function ir(t){return t.startState.facet(er)!=t.state.facet(er)}const nr=Zs({above:!0,markers(t){let{state:e}=t,i=e.facet(er),n=[]
for(let s of e.selection.ranges){let r=s==e.selection.main
if(s.empty?!r||tr:i.drawRangeCursor){let e=r?"cm-cursor cm-cursor-primary":"cm-cursor cm-cursor-secondary",i=s.empty?s:H.cursor(s.head,s.head>s.anchor?-1:1)
for(let s of Gs.forRange(t,e,i))n.push(s)}}return n},update(t,e){t.transactions.some(t=>t.selection)&&(e.style.animationName="cm-blink"==e.style.animationName?"cm-blink2":"cm-blink")
let i=ir(t)
return i&&sr(t.state,e),t.docChanged||t.selectionSet||i},mount(t,e){sr(e.state,t)},class:"cm-cursorLayer"})
function sr(t,e){e.style.animationDuration=t.facet(er).cursorBlinkRate+"ms"}const rr=Zs({above:!1,markers:t=>t.state.selection.ranges.map(e=>e.empty?[]:Gs.forRange(t,"cm-selectionBackground",e)).reduce((t,e)=>t.concat(e)),update:(t,e)=>t.docChanged||t.selectionSet||t.viewportChanged||ir(t),class:"cm-selectionLayer"}),or={".cm-line":{"& ::selection":{backgroundColor:"transparent !important"},"&::selection":{backgroundColor:"transparent !important"}}}
tr&&(or[".cm-line"].caretColor="transparent !important")
const lr=J.highest(Ns.theme(or)),ar=ft.define({map:(t,e)=>null==t?null:e.mapPos(t)}),hr=U.define({create:()=>null,update:(t,e)=>(null!=t&&(t=e.changes.mapPos(t)),e.effects.reduce((t,e)=>e.is(ar)?e.value:t,t))}),cr=Oi.fromClass(class{constructor(t){this.view=t,this.cursor=null,this.measureReq={read:this.readPos.bind(this),write:this.drawCursor.bind(this)}}update(t){var e
let i=t.state.field(hr)
null==i?null!=this.cursor&&(null===(e=this.cursor)||void 0===e||e.remove(),this.cursor=null):(this.cursor||(this.cursor=this.view.scrollDOM.appendChild(document.createElement("div")),this.cursor.className="cm-dropCursor"),(t.startState.field(hr)!=i||t.docChanged||t.geometryChanged)&&this.view.requestMeasure(this.measureReq))}readPos(){let t=this.view.state.field(hr),e=null!=t&&this.view.coordsAtPos(t)
if(!e)return null
let i=this.view.scrollDOM.getBoundingClientRect()
return{left:e.left-i.left+this.view.scrollDOM.scrollLeft,top:e.top-i.top+this.view.scrollDOM.scrollTop,height:e.bottom-e.top}}drawCursor(t){this.cursor&&(t?(this.cursor.style.left=t.left+"px",this.cursor.style.top=t.top+"px",this.cursor.style.height=t.height+"px"):this.cursor.style.left="-100000px")}destroy(){this.cursor&&this.cursor.remove()}setDropPos(t){this.view.state.field(hr)!=t&&this.view.dispatch({effects:ar.of(t)})}},{eventHandlers:{dragover(t){this.setDropPos(this.view.posAtCoords({x:t.clientX,y:t.clientY}))},dragleave(t){t.target!=this.view.contentDOM&&this.view.contentDOM.contains(t.relatedTarget)||this.setDropPos(null)},dragend(){this.setDropPos(null)},drop(){this.setDropPos(null)}}})
function ur(t,e,i,n,s){e.lastIndex=0
for(let r,o=t.iterRange(i,n),l=i;!o.next().done;l+=o.value.length)if(!o.lineBreak)for(;r=e.exec(o.value);)s(l+r.index,r)}class fr{constructor(t){const{regexp:e,decoration:i,decorate:n,boundary:s,maxLength:r=1e3}=t
if(!e.global)throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set")
if(this.regexp=e,n)this.addMatch=(t,e,i,s)=>n(s,i,i+t[0].length,t,e)
else if("function"==typeof i)this.addMatch=(t,e,n,s)=>{let r=i(t,e,n)
r&&s(n,n+t[0].length,r)}
else{if(!i)throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator")
this.addMatch=(t,e,n,s)=>s(n,n+t[0].length,i)}this.boundary=s,this.maxLength=r}createDeco(t){let e=new Et,i=e.add.bind(e)
for(let{from:n,to:s}of function(t,e){let i=t.visibleRanges
if(1==i.length&&i[0].from==t.viewport.from&&i[0].to==t.viewport.to)return i
let n=[]
for(let{from:s,to:r}of i)s=Math.max(t.state.doc.lineAt(s).from,s-e),r=Math.min(t.state.doc.lineAt(r).to,r+e),n.length&&n[n.length-1].to>=s?n[n.length-1].to=r:n.push({from:s,to:r})
return n}(t,this.maxLength))ur(t.state.doc,this.regexp,n,s,(e,n)=>this.addMatch(n,t,e,i))
return e.finish()}updateDeco(t,e){let i=1e9,n=-1
return t.docChanged&&t.changes.iterChanges((e,s,r,o)=>{o>t.view.viewport.from&&r<t.view.viewport.to&&(i=Math.min(r,i),n=Math.max(o,n))}),t.viewportChanged||n-i>1e3?this.createDeco(t.view):n>-1?this.updateRange(t.view,e.map(t.changes),i,n):e}updateRange(t,e,i,n){for(let s of t.visibleRanges){let r=Math.max(s.from,i),o=Math.min(s.to,n)
if(o>r){let i=t.state.doc.lineAt(r),n=i.to<o?t.state.doc.lineAt(o):i,l=Math.max(s.from,i.from),a=Math.min(s.to,n.to)
if(this.boundary){for(;r>i.from;r--)if(this.boundary.test(i.text[r-1-i.from])){l=r
break}for(;o<n.to;o++)if(this.boundary.test(n.text[o-n.from])){a=o
break}}let h,c=[],u=(t,e,i)=>c.push(i.range(t,e))
if(i==n)for(this.regexp.lastIndex=l-i.from;(h=this.regexp.exec(i.text))&&h.index<a-i.from;)this.addMatch(h,t,h.index+i.from,u)
else ur(t.state.doc,this.regexp,l,a,(e,i)=>this.addMatch(i,t,e,u))
e=e.update({filterFrom:l,filterTo:a,filter:(t,e)=>t<l||e>a,add:c})}}return e}}const dr=null!=/x/.unicode?"gu":"g",pr=new RegExp("[\0-\b\n--­؜​‎‏\u2028\u2029‭‮⁦⁧⁩\ufeff￹-￼]",dr),mr={0:"null",7:"bell",8:"backspace",10:"newline",11:"vertical tab",13:"carriage return",27:"escape",8203:"zero width space",8204:"zero width non-joiner",8205:"zero width joiner",8206:"left-to-right mark",8207:"right-to-left mark",8232:"line separator",8237:"left-to-right override",8238:"right-to-left override",8294:"left-to-right isolate",8295:"right-to-left isolate",8297:"pop directional isolate",8233:"paragraph separator",65279:"zero width no-break space",65532:"object replacement"}
let gr=null
const vr=F.define({combine(t){let e=Ct(t,{render:null,specialChars:pr,addSpecialChars:null})
return(e.replaceTabs=!function(){var t
if(null==gr&&"undefined"!=typeof document&&document.body){let e=document.body.style
gr=null!=(null!==(t=e.tabSize)&&void 0!==t?t:e.MozTabSize)}return gr||!1}())&&(e.specialChars=new RegExp("\t|"+e.specialChars.source,dr)),e.addSpecialChars&&(e.specialChars=new RegExp(e.specialChars.source+"|"+e.addSpecialChars.source,dr)),e}})
let wr=null
class yr extends ti{constructor(t,e){super(),this.options=t,this.code=e}eq(t){return t.code==this.code}toDOM(t){let e=function(t){return t>=32?"•":10==t?"␤":String.fromCharCode(9216+t)}(this.code),i=t.state.phrase("Control character")+" "+(mr[this.code]||"0x"+this.code.toString(16)),n=this.options.render&&this.options.render(this.code,i,e)
if(n)return n
let s=document.createElement("span")
return s.textContent=e,s.title=i,s.setAttribute("aria-label",i),s.className="cm-specialChar",s}ignoreEvent(){return!1}}class br extends ti{constructor(t){super(),this.width=t}eq(t){return t.width==this.width}toDOM(){let t=document.createElement("span")
return t.textContent="\t",t.className="cm-tab",t.style.width=this.width+"px",t}ignoreEvent(){return!1}}const xr=ii.line({class:"cm-activeLine"}),kr=Oi.fromClass(class{constructor(t){this.decorations=this.getDeco(t)}update(t){(t.docChanged||t.selectionSet)&&(this.decorations=this.getDeco(t.view))}getDeco(t){let e=-1,i=[]
for(let n of t.state.selection.ranges){let s=t.lineBlockAt(n.head)
s.from>e&&(i.push(xr.range(s.from)),e=s.from)}return ii.set(i)}},{decorations:t=>t.decorations})
class Sr extends ti{constructor(t){super(),this.content=t}toDOM(){let t=document.createElement("span")
return t.className="cm-placeholder",t.style.pointerEvents="none",t.appendChild("string"==typeof this.content?document.createTextNode(this.content):this.content),"string"==typeof this.content?t.setAttribute("aria-label","placeholder "+this.content):t.setAttribute("aria-hidden","true"),t}coordsAt(t){let e=t.firstChild?se(t.firstChild):[]
if(!e.length)return null
let i=window.getComputedStyle(t.parentNode),n=he(e[0],"rtl"!=i.direction),s=parseInt(i.lineHeight)
return n.bottom-n.top>1.5*s?{left:n.left,right:n.right,top:n.top,bottom:n.top+s}:n}ignoreEvent(){return!1}}const Cr=2e3
function Mr(t,e){let i=t.posAtCoords({x:e.clientX,y:e.clientY},!1),n=t.state.doc.lineAt(i),s=i-n.from,r=s>Cr?-1:s==n.length?function(t,e){let i=t.coordsAtPos(t.viewport.from)
return i?Math.round(Math.abs((i.left-e)/t.defaultCharacterWidth)):-1}(t,e.clientX):zt(n.text,t.state.tabSize,i-n.from)
return{line:n.number,col:r,off:s}}const Ar={Alt:[18,t=>!!t.altKey],Control:[17,t=>!!t.ctrlKey],Shift:[16,t=>!!t.shiftKey],Meta:[91,t=>!!t.metaKey]},Dr={style:"cursor: crosshair"},Or="-10000px"
class Tr{constructor(t,e,i){this.facet=e,this.createTooltipView=i,this.input=t.state.facet(e),this.tooltips=this.input.filter(t=>t),this.tooltipViews=this.tooltips.map(i)}update(t){var e
let i=t.state.facet(this.facet),n=i.filter(t=>t)
if(i===this.input){for(let e of this.tooltipViews)e.update&&e.update(t)
return!1}let s=[]
for(let r=0;r<n.length;r++){let e=n[r],i=-1
if(e){for(let t=0;t<this.tooltips.length;t++){let n=this.tooltips[t]
n&&n.create==e.create&&(i=t)}if(i<0)s[r]=this.createTooltipView(e)
else{let e=s[r]=this.tooltipViews[i]
e.update&&e.update(t)}}}for(let r of this.tooltipViews)s.indexOf(r)<0&&(r.dom.remove(),null===(e=r.destroy)||void 0===e||e.call(r))
return this.input=i,this.tooltips=n,this.tooltipViews=s,!0}}function Er(t){let{win:e}=t
return{top:0,left:0,bottom:e.innerHeight,right:e.innerWidth}}const Rr=F.define({combine:t=>{var e,i,n
return{position:ze.ios?"absolute":(null===(e=t.find(t=>t.position))||void 0===e?void 0:e.position)||"fixed",parent:(null===(i=t.find(t=>t.parent))||void 0===i?void 0:i.parent)||null,tooltipSpace:(null===(n=t.find(t=>t.tooltipSpace))||void 0===n?void 0:n.tooltipSpace)||Er}}}),Br=new WeakMap,Lr=Oi.fromClass(class{constructor(t){this.view=t,this.inView=!0,this.lastTransaction=0,this.measureTimeout=-1
let e=t.state.facet(Rr)
this.position=e.position,this.parent=e.parent,this.classes=t.themeClasses,this.createContainer(),this.measureReq={read:this.readMeasure.bind(this),write:this.writeMeasure.bind(this),key:this},this.manager=new Tr(t,Ir,t=>this.createTooltip(t)),this.intersectionObserver="function"==typeof IntersectionObserver?new IntersectionObserver(t=>{Date.now()>this.lastTransaction-50&&t.length>0&&t[t.length-1].intersectionRatio<1&&this.measureSoon()},{threshold:[1]}):null,this.observeIntersection(),t.win.addEventListener("resize",this.measureSoon=this.measureSoon.bind(this)),this.maybeMeasure()}createContainer(){this.parent?(this.container=document.createElement("div"),this.container.style.position="relative",this.container.className=this.view.themeClasses,this.parent.appendChild(this.container)):this.container=this.view.dom}observeIntersection(){if(this.intersectionObserver){this.intersectionObserver.disconnect()
for(let t of this.manager.tooltipViews)this.intersectionObserver.observe(t.dom)}}measureSoon(){this.measureTimeout<0&&(this.measureTimeout=setTimeout(()=>{this.measureTimeout=-1,this.maybeMeasure()},50))}update(t){t.transactions.length&&(this.lastTransaction=Date.now())
let e=this.manager.update(t)
e&&this.observeIntersection()
let i=e||t.geometryChanged,n=t.state.facet(Rr)
if(n.position!=this.position){this.position=n.position
for(let t of this.manager.tooltipViews)t.dom.style.position=this.position
i=!0}if(n.parent!=this.parent){this.parent&&this.container.remove(),this.parent=n.parent,this.createContainer()
for(let t of this.manager.tooltipViews)this.container.appendChild(t.dom)
i=!0}else this.parent&&this.view.themeClasses!=this.classes&&(this.classes=this.container.className=this.view.themeClasses)
i&&this.maybeMeasure()}createTooltip(t){let e=t.create(this.view)
if(e.dom.classList.add("cm-tooltip"),t.arrow&&!e.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")){let t=document.createElement("div")
t.className="cm-tooltip-arrow",e.dom.appendChild(t)}return e.dom.style.position=this.position,e.dom.style.top=Or,this.container.appendChild(e.dom),e.mount&&e.mount(this.view),e}destroy(){var t,e
this.view.win.removeEventListener("resize",this.measureSoon)
for(let i of this.manager.tooltipViews)i.dom.remove(),null===(t=i.destroy)||void 0===t||t.call(i)
null===(e=this.intersectionObserver)||void 0===e||e.disconnect(),clearTimeout(this.measureTimeout)}readMeasure(){let t=this.view.dom.getBoundingClientRect()
return{editor:t,parent:this.parent?this.container.getBoundingClientRect():t,pos:this.manager.tooltips.map((t,e)=>{let i=this.manager.tooltipViews[e]
return i.getCoords?i.getCoords(t.pos):this.view.coordsAtPos(t.pos)}),size:this.manager.tooltipViews.map(({dom:t})=>t.getBoundingClientRect()),space:this.view.state.facet(Rr).tooltipSpace(this.view)}}writeMeasure(t){var e
let{editor:i,space:n}=t,s=[]
for(let r=0;r<this.manager.tooltips.length;r++){let o=this.manager.tooltips[r],l=this.manager.tooltipViews[r],{dom:a}=l,h=t.pos[r],c=t.size[r]
if(!h||h.bottom<=Math.max(i.top,n.top)||h.top>=Math.min(i.bottom,n.bottom)||h.right<Math.max(i.left,n.left)-.1||h.left>Math.min(i.right,n.right)+.1){a.style.top=Or
continue}let u=o.arrow?l.dom.querySelector(".cm-tooltip-arrow"):null,f=u?7:0,d=c.right-c.left,p=null!==(e=Br.get(l))&&void 0!==e?e:c.bottom-c.top,m=l.offset||Pr,g=this.view.textDirection==zi.LTR,v=c.width>n.right-n.left?g?n.left:n.right-c.width:g?Math.min(h.left-(u?14:0)+m.x,n.right-d):Math.max(n.left,h.left-d+(u?14:0)-m.x),w=!!o.above
!o.strictSide&&(w?h.top-(c.bottom-c.top)-m.y<n.top:h.bottom+(c.bottom-c.top)+m.y>n.bottom)&&w==n.bottom-h.bottom>h.top-n.top&&(w=!w)
let y=(w?h.top-n.top:n.bottom-h.bottom)-f
if(y<p&&!1!==l.resize){if(y<this.view.defaultLineHeight){a.style.top=Or
continue}Br.set(l,p),a.style.height=(p=y)+"px"}else a.style.height&&(a.style.height="")
let b=w?h.top-p-f-m.y:h.bottom+f+m.y,x=v+d
if(!0!==l.overlap)for(let t of s)t.left<x&&t.right>v&&t.top<b+p&&t.bottom>b&&(b=w?t.top-p-2-f:t.bottom+f+2)
"absolute"==this.position?(a.style.top=b-t.parent.top+"px",a.style.left=v-t.parent.left+"px"):(a.style.top=b+"px",a.style.left=v+"px"),u&&(u.style.left=h.left+(g?m.x:-m.x)-(v+14-7)+"px"),!0!==l.overlap&&s.push({left:v,top:b,right:x,bottom:b+p}),a.classList.toggle("cm-tooltip-above",w),a.classList.toggle("cm-tooltip-below",!w),l.positioned&&l.positioned(t.space)}}maybeMeasure(){if(this.manager.tooltips.length&&(this.view.inView&&this.view.requestMeasure(this.measureReq),this.inView!=this.view.inView&&(this.inView=this.view.inView,!this.inView)))for(let t of this.manager.tooltipViews)t.dom.style.top=Or}},{eventHandlers:{scroll(){this.maybeMeasure()}}}),Pr={x:0,y:0},Ir=F.define({enables:[Lr,Ns.baseTheme({".cm-tooltip":{zIndex:100,boxSizing:"border-box"},"&light .cm-tooltip":{border:"1px solid #bbb",backgroundColor:"#f5f5f5"},"&light .cm-tooltip-section:not(:first-child)":{borderTop:"1px solid #bbb"},"&dark .cm-tooltip":{backgroundColor:"#333338",color:"white"},".cm-tooltip-arrow":{height:"7px",width:"14px",position:"absolute",zIndex:-1,overflow:"hidden","&:before, &:after":{content:"''",position:"absolute",width:0,height:0,borderLeft:"7px solid transparent",borderRight:"7px solid transparent"},".cm-tooltip-above &":{bottom:"-7px","&:before":{borderTop:"7px solid #bbb"},"&:after":{borderTop:"7px solid #f5f5f5",bottom:"1px"}},".cm-tooltip-below &":{top:"-7px","&:before":{borderBottom:"7px solid #bbb"},"&:after":{borderBottom:"7px solid #f5f5f5",top:"1px"}}},"&dark .cm-tooltip .cm-tooltip-arrow":{"&:before":{borderTopColor:"#333338",borderBottomColor:"#333338"},"&:after":{borderTopColor:"transparent",borderBottomColor:"transparent"}}})]}),Nr=F.define()
class Hr{static create(t){return new Hr(t)}constructor(t){this.view=t,this.mounted=!1,this.dom=document.createElement("div"),this.dom.classList.add("cm-tooltip-hover"),this.manager=new Tr(t,Nr,t=>this.createHostedView(t))}createHostedView(t){let e=t.create(this.view)
return e.dom.classList.add("cm-tooltip-section"),this.dom.appendChild(e.dom),this.mounted&&e.mount&&e.mount(this.view),e}mount(t){for(let e of this.manager.tooltipViews)e.mount&&e.mount(t)
this.mounted=!0}positioned(t){for(let e of this.manager.tooltipViews)e.positioned&&e.positioned(t)}update(t){this.manager.update(t)}destroy(){var t
for(let e of this.manager.tooltipViews)null===(t=e.destroy)||void 0===t||t.call(e)}}const Wr=Ir.compute([Nr],t=>{let e=t.facet(Nr).filter(t=>t)
return 0===e.length?null:{pos:Math.min(...e.map(t=>t.pos)),end:Math.max(...e.filter(t=>null!=t.end).map(t=>t.end)),create:Hr.create,above:e[0].above,arrow:e.some(t=>t.arrow)}})
class Vr{constructor(t,e,i,n,s){this.view=t,this.source=e,this.field=i,this.setHover=n,this.hoverTime=s,this.hoverTimeout=-1,this.restartTimeout=-1,this.pending=null,this.lastMove={x:0,y:0,target:t.dom,time:0},this.checkHover=this.checkHover.bind(this),t.dom.addEventListener("mouseleave",this.mouseleave=this.mouseleave.bind(this)),t.dom.addEventListener("mousemove",this.mousemove=this.mousemove.bind(this))}update(){this.pending&&(this.pending=null,clearTimeout(this.restartTimeout),this.restartTimeout=setTimeout(()=>this.startHover(),20))}get active(){return this.view.state.field(this.field)}checkHover(){if(this.hoverTimeout=-1,this.active)return
let t=Date.now()-this.lastMove.time
t<this.hoverTime?this.hoverTimeout=setTimeout(this.checkHover,this.hoverTime-t):this.startHover()}startHover(){clearTimeout(this.restartTimeout)
let{view:t,lastMove:e}=this,i=t.docView.nearest(e.target)
if(!i)return
let n,s=1
if(i instanceof je)n=i.posAtStart
else{if(n=t.posAtCoords(e),null==n)return
let i=t.coordsAtPos(n)
if(!i||e.y<i.top||e.y>i.bottom||e.x<i.left-t.defaultCharacterWidth||e.x>i.right+t.defaultCharacterWidth)return
let r=t.bidiSpans(t.state.doc.lineAt(n)).find(t=>t.from<=n&&t.to>=n),o=r&&r.dir==zi.RTL?-1:1
s=e.x<i.left?-o:o}let r=this.source(t,n,s)
if(null==r?void 0:r.then){let e=this.pending={pos:n}
r.then(i=>{this.pending==e&&(this.pending=null,i&&t.dispatch({effects:this.setHover.of(i)}))},e=>Ci(t.state,e,"hover tooltip"))}else r&&t.dispatch({effects:this.setHover.of(r)})}mousemove(t){var e
this.lastMove={x:t.clientX,y:t.clientY,target:t.target,time:Date.now()},this.hoverTimeout<0&&(this.hoverTimeout=setTimeout(this.checkHover,this.hoverTime))
let i=this.active
if(i&&!Fr(this.lastMove.target)||this.pending){let{pos:n}=i||this.pending,s=null!==(e=null==i?void 0:i.end)&&void 0!==e?e:n;(n==s?this.view.posAtCoords(this.lastMove)==n:function(t,e,i,n,s){let r=document.createRange(),o=t.domAtPos(e),l=t.domAtPos(i)
r.setEnd(l.node,l.offset),r.setStart(o.node,o.offset)
let a=r.getClientRects()
r.detach()
for(let h=0;h<a.length;h++){let t=a[h]
if(Math.max(t.top-s,s-t.bottom,t.left-n,n-t.right)<=6)return!0}return!1}(this.view,n,s,t.clientX,t.clientY))||(this.view.dispatch({effects:this.setHover.of(null)}),this.pending=null)}}mouseleave(t){clearTimeout(this.hoverTimeout),this.hoverTimeout=-1,this.active&&!Fr(t.relatedTarget)&&this.view.dispatch({effects:this.setHover.of(null)})}destroy(){clearTimeout(this.hoverTimeout),this.view.dom.removeEventListener("mouseleave",this.mouseleave),this.view.dom.removeEventListener("mousemove",this.mousemove)}}function Fr(t){for(let e=t;e;e=e.parentNode)if(1==e.nodeType&&e.classList.contains("cm-tooltip"))return!0
return!1}function zr(t,e){let i=t.plugin(Lr)
if(!i)return null
let n=i.manager.tooltips.indexOf(e)
return n<0?null:i.manager.tooltipViews[n]}const qr=ft.define(),_r=F.define({combine(t){let e,i
for(let n of t)e=e||n.topContainer,i=i||n.bottomContainer
return{topContainer:e,bottomContainer:i}}})
function jr(t,e){let i=t.plugin(Kr),n=i?i.specs.indexOf(e):-1
return n>-1?i.panels[n]:null}const Kr=Oi.fromClass(class{constructor(t){this.input=t.state.facet(Gr),this.specs=this.input.filter(t=>t),this.panels=this.specs.map(e=>e(t))
let e=t.state.facet(_r)
this.top=new $r(t,!0,e.topContainer),this.bottom=new $r(t,!1,e.bottomContainer),this.top.sync(this.panels.filter(t=>t.top)),this.bottom.sync(this.panels.filter(t=>!t.top))
for(let i of this.panels)i.dom.classList.add("cm-panel"),i.mount&&i.mount()}update(t){let e=t.state.facet(_r)
this.top.container!=e.topContainer&&(this.top.sync([]),this.top=new $r(t.view,!0,e.topContainer)),this.bottom.container!=e.bottomContainer&&(this.bottom.sync([]),this.bottom=new $r(t.view,!1,e.bottomContainer)),this.top.syncClasses(),this.bottom.syncClasses()
let i=t.state.facet(Gr)
if(i!=this.input){let e=i.filter(t=>t),n=[],s=[],r=[],o=[]
for(let i of e){let e,l=this.specs.indexOf(i)
l<0?(e=i(t.view),o.push(e)):(e=this.panels[l],e.update&&e.update(t)),n.push(e),(e.top?s:r).push(e)}this.specs=e,this.panels=n,this.top.sync(s),this.bottom.sync(r)
for(let t of o)t.dom.classList.add("cm-panel"),t.mount&&t.mount()}else for(let n of this.panels)n.update&&n.update(t)}destroy(){this.top.sync([]),this.bottom.sync([])}},{provide:t=>Ns.scrollMargins.of(e=>{let i=e.plugin(t)
return i&&{top:i.top.scrollMargin(),bottom:i.bottom.scrollMargin()}})})
class $r{constructor(t,e,i){this.view=t,this.top=e,this.container=i,this.dom=void 0,this.classes="",this.panels=[],this.syncClasses()}sync(t){for(let e of this.panels)e.destroy&&t.indexOf(e)<0&&e.destroy()
this.panels=t,this.syncDOM()}syncDOM(){if(0==this.panels.length)return void(this.dom&&(this.dom.remove(),this.dom=void 0))
if(!this.dom){this.dom=document.createElement("div"),this.dom.className=this.top?"cm-panels cm-panels-top":"cm-panels cm-panels-bottom",this.dom.style[this.top?"top":"bottom"]="0"
let t=this.container||this.view.dom
t.insertBefore(this.dom,this.top?t.firstChild:null)}let t=this.dom.firstChild
for(let e of this.panels)if(e.dom.parentNode==this.dom){for(;t!=e.dom;)t=Ur(t)
t=t.nextSibling}else this.dom.insertBefore(e.dom,t)
for(;t;)t=Ur(t)}scrollMargin(){return!this.dom||this.container?0:Math.max(0,this.top?this.dom.getBoundingClientRect().bottom-Math.max(0,this.view.scrollDOM.getBoundingClientRect().top):Math.min(innerHeight,this.view.scrollDOM.getBoundingClientRect().bottom)-this.dom.getBoundingClientRect().top)}syncClasses(){if(this.container&&this.classes!=this.view.themeClasses){for(let t of this.classes.split(" "))t&&this.container.classList.remove(t)
for(let t of(this.classes=this.view.themeClasses).split(" "))t&&this.container.classList.add(t)}}}function Ur(t){let e=t.nextSibling
return t.remove(),e}const Gr=F.define({enables:Kr})
class Jr extends Mt{compare(t){return this==t||this.constructor==t.constructor&&this.eq(t)}eq(t){return!1}destroy(t){}}Jr.prototype.elementClass="",Jr.prototype.toDOM=void 0,Jr.prototype.mapMode=D.TrackBefore,Jr.prototype.startSide=Jr.prototype.endSide=-1,Jr.prototype.point=!0
const Xr=F.define(),Yr={class:"",renderEmptyElements:!1,elementStyle:"",markers:()=>Tt.empty,lineMarker:()=>null,widgetMarker:()=>null,lineMarkerChange:null,initialSpacer:null,updateSpacer:null,domEventHandlers:{}},Qr=F.define()
function Zr(t){return[eo(),Qr.of(Object.assign(Object.assign({},Yr),t))]}const to=F.define({combine:t=>t.some(t=>t)})
function eo(t){let e=[io]
return t&&!1===t.fixed&&e.push(to.of(!0)),e}const io=Oi.fromClass(class{constructor(t){this.view=t,this.prevViewport=t.viewport,this.dom=document.createElement("div"),this.dom.className="cm-gutters",this.dom.setAttribute("aria-hidden","true"),this.dom.style.minHeight=this.view.contentHeight+"px",this.gutters=t.state.facet(Qr).map(e=>new oo(t,e))
for(let e of this.gutters)this.dom.appendChild(e.dom)
this.fixed=!t.state.facet(to),this.fixed&&(this.dom.style.position="sticky"),this.syncGutters(!1),t.scrollDOM.insertBefore(this.dom,t.contentDOM)}update(t){if(this.updateGutters(t)){let e=this.prevViewport,i=t.view.viewport,n=Math.min(e.to,i.to)-Math.max(e.from,i.from)
this.syncGutters(n<.8*(i.to-i.from))}t.geometryChanged&&(this.dom.style.minHeight=this.view.contentHeight+"px"),this.view.state.facet(to)!=!this.fixed&&(this.fixed=!this.fixed,this.dom.style.position=this.fixed?"sticky":""),this.prevViewport=t.view.viewport}syncGutters(t){let e=this.dom.nextSibling
t&&this.dom.remove()
let i=Tt.iter(this.view.state.facet(Xr),this.view.viewport.from),n=[],s=this.gutters.map(t=>new ro(t,this.view.viewport,-this.view.documentPadding.top))
for(let r of this.view.viewportLineBlocks)if(n.length&&(n=[]),Array.isArray(r.type)){let t=!0
for(let e of r.type)if(e.type==ei.Text&&t){so(i,n,e.from)
for(let t of s)t.line(this.view,e,n)
t=!1}else if(e.widget)for(let t of s)t.widget(this.view,e)}else if(r.type==ei.Text){so(i,n,r.from)
for(let t of s)t.line(this.view,r,n)}for(let r of s)r.finish()
t&&this.view.scrollDOM.insertBefore(this.dom,e)}updateGutters(t){let e=t.startState.facet(Qr),i=t.state.facet(Qr),n=t.docChanged||t.heightChanged||t.viewportChanged||!Tt.eq(t.startState.facet(Xr),t.state.facet(Xr),t.view.viewport.from,t.view.viewport.to)
if(e==i)for(let s of this.gutters)s.update(t)&&(n=!0)
else{n=!0
let s=[]
for(let n of i){let i=e.indexOf(n)
i<0?s.push(new oo(this.view,n)):(this.gutters[i].update(t),s.push(this.gutters[i]))}for(let t of this.gutters)t.dom.remove(),s.indexOf(t)<0&&t.destroy()
for(let t of s)this.dom.appendChild(t.dom)
this.gutters=s}return n}destroy(){for(let t of this.gutters)t.destroy()
this.dom.remove()}},{provide:t=>Ns.scrollMargins.of(e=>{let i=e.plugin(t)
return i&&0!=i.gutters.length&&i.fixed?e.textDirection==zi.LTR?{left:i.dom.offsetWidth}:{right:i.dom.offsetWidth}:null})})
function no(t){return Array.isArray(t)?t:[t]}function so(t,e,i){for(;t.value&&t.from<=i;)t.from==i&&e.push(t.value),t.next()}class ro{constructor(t,e,i){this.gutter=t,this.height=i,this.i=0,this.cursor=Tt.iter(t.markers,e.from)}addElement(t,e,i){let{gutter:n}=this,s=e.top-this.height
if(this.i==n.elements.length){let r=new lo(t,e.height,s,i)
n.elements.push(r),n.dom.appendChild(r.dom)}else n.elements[this.i].update(t,e.height,s,i)
this.height=e.bottom,this.i++}line(t,e,i){let n=[]
so(this.cursor,n,e.from),i.length&&(n=n.concat(i))
let s=this.gutter.config.lineMarker(t,e,n)
s&&n.unshift(s)
let r=this.gutter;(0!=n.length||r.config.renderEmptyElements)&&this.addElement(t,e,n)}widget(t,e){let i=this.gutter.config.widgetMarker(t,e.widget,e)
i&&this.addElement(t,e,[i])}finish(){let t=this.gutter
for(;t.elements.length>this.i;){let e=t.elements.pop()
t.dom.removeChild(e.dom),e.destroy()}}}class oo{constructor(t,e){this.view=t,this.config=e,this.elements=[],this.spacer=null,this.dom=document.createElement("div"),this.dom.className="cm-gutter"+(this.config.class?" "+this.config.class:"")
for(let i in e.domEventHandlers)this.dom.addEventListener(i,n=>{let s,r=n.target
if(r!=this.dom&&this.dom.contains(r)){for(;r.parentNode!=this.dom;)r=r.parentNode
let t=r.getBoundingClientRect()
s=(t.top+t.bottom)/2}else s=n.clientY
let o=t.lineBlockAtHeight(s-t.documentTop)
e.domEventHandlers[i](t,o,n)&&n.preventDefault()})
this.markers=no(e.markers(t)),e.initialSpacer&&(this.spacer=new lo(t,0,0,[e.initialSpacer(t)]),this.dom.appendChild(this.spacer.dom),this.spacer.dom.style.cssText+="visibility: hidden; pointer-events: none")}update(t){let e=this.markers
if(this.markers=no(this.config.markers(t.view)),this.spacer&&this.config.updateSpacer){let e=this.config.updateSpacer(this.spacer.markers[0],t)
e!=this.spacer.markers[0]&&this.spacer.update(t.view,0,0,[e])}let i=t.view.viewport
return!Tt.eq(this.markers,e,i.from,i.to)||!!this.config.lineMarkerChange&&this.config.lineMarkerChange(t)}destroy(){for(let t of this.elements)t.destroy()}}class lo{constructor(t,e,i,n){this.height=-1,this.above=0,this.markers=[],this.dom=document.createElement("div"),this.dom.className="cm-gutterElement",this.update(t,e,i,n)}update(t,e,i,n){this.height!=e&&(this.dom.style.height=(this.height=e)+"px"),this.above!=i&&(this.dom.style.marginTop=(this.above=i)?i+"px":""),function(t,e){if(t.length!=e.length)return!1
for(let i=0;i<t.length;i++)if(!t[i].compare(e[i]))return!1
return!0}(this.markers,n)||this.setMarkers(t,n)}setMarkers(t,e){let i="cm-gutterElement",n=this.dom.firstChild
for(let s=0,r=0;;){let o=r,l=s<e.length?e[s++]:null,a=!1
if(l){let t=l.elementClass
t&&(i+=" "+t)
for(let e=r;e<this.markers.length;e++)if(this.markers[e].compare(l)){o=e,a=!0
break}}else o=this.markers.length
for(;r<o;){let t=this.markers[r++]
if(t.toDOM){t.destroy(n)
let e=n.nextSibling
n.remove(),n=e}}if(!l)break
l.toDOM&&(a?n=n.nextSibling:this.dom.insertBefore(l.toDOM(t),n)),a&&r++}this.dom.className=i,this.markers=e}destroy(){this.setMarkers(null,[])}}const ao=F.define(),ho=F.define({combine:t=>Ct(t,{formatNumber:String,domEventHandlers:{}},{domEventHandlers(t,e){let i=Object.assign({},t)
for(let n in e){let t=i[n],s=e[n]
i[n]=t?(e,i,n)=>t(e,i,n)||s(e,i,n):s}return i}})})
class co extends Jr{constructor(t){super(),this.number=t}eq(t){return this.number==t.number}toDOM(){return document.createTextNode(this.number)}}function uo(t,e){return t.state.facet(ho).formatNumber(e,t.state)}const fo=Qr.compute([ho],t=>({class:"cm-lineNumbers",renderEmptyElements:!1,markers:t=>t.state.facet(ao),lineMarker:(t,e,i)=>i.some(t=>t.toDOM)?null:new co(uo(t,t.state.doc.lineAt(e.from).number)),widgetMarker:()=>null,lineMarkerChange:t=>t.startState.facet(ho)!=t.state.facet(ho),initialSpacer:t=>new co(uo(t,po(t.state.doc.lines))),updateSpacer(t,e){let i=uo(e.view,po(e.view.state.doc.lines))
return i==t.number?t:new co(i)},domEventHandlers:t.facet(ho).domEventHandlers}))
function po(t){let e=9
for(;e<t;)e=10*e+9
return e}const mo=new class extends Jr{constructor(){super(...arguments),this.elementClass="cm-activeLineGutter"}},go=Xr.compute(["selection"],t=>{let e=[],i=-1
for(let n of t.selection.ranges){let s=t.doc.lineAt(n.head).from
s>i&&(i=s,e.push(mo.range(s)))}return Tt.of(e)}),vo=1024
let wo=0
class yo{constructor(t,e){this.from=t,this.to=e}}class bo{constructor(t={}){this.id=wo++,this.perNode=!!t.perNode,this.deserialize=t.deserialize||(()=>{throw new Error("This node type doesn't define a deserialize function")})}add(t){if(this.perNode)throw new RangeError("Can't add per-node props to node types")
return"function"!=typeof t&&(t=So.match(t)),e=>{let i=t(e)
return void 0===i?null:[this,i]}}}bo.closedBy=new bo({deserialize:t=>t.split(" ")}),bo.openedBy=new bo({deserialize:t=>t.split(" ")}),bo.group=new bo({deserialize:t=>t.split(" ")}),bo.isolate=new bo({deserialize:t=>{if(t&&"rtl"!=t&&"ltr"!=t&&"auto"!=t)throw new RangeError("Invalid value for isolate: "+t)
return t||"auto"}}),bo.contextHash=new bo({perNode:!0}),bo.lookAhead=new bo({perNode:!0}),bo.mounted=new bo({perNode:!0})
class xo{constructor(t,e,i){this.tree=t,this.overlay=e,this.parser=i}static get(t){return t&&t.props&&t.props[bo.mounted.id]}}const ko=Object.create(null)
class So{constructor(t,e,i,n=0){this.name=t,this.props=e,this.id=i,this.flags=n}static define(t){let e=t.props&&t.props.length?Object.create(null):ko,i=(t.top?1:0)|(t.skipped?2:0)|(t.error?4:0)|(null==t.name?8:0),n=new So(t.name||"",e,t.id,i)
if(t.props)for(let s of t.props)if(Array.isArray(s)||(s=s(n)),s){if(s[0].perNode)throw new RangeError("Can't store a per-node prop on a node type")
e[s[0].id]=s[1]}return n}prop(t){return this.props[t.id]}get isTop(){return(1&this.flags)>0}get isSkipped(){return(2&this.flags)>0}get isError(){return(4&this.flags)>0}get isAnonymous(){return(8&this.flags)>0}is(t){if("string"==typeof t){if(this.name==t)return!0
let e=this.prop(bo.group)
return!!e&&e.indexOf(t)>-1}return this.id==t}static match(t){let e=Object.create(null)
for(let i in t)for(let n of i.split(" "))e[n]=t[i]
return t=>{for(let i=t.prop(bo.group),n=-1;n<(i?i.length:0);n++){let s=e[n<0?t.name:i[n]]
if(s)return s}}}}So.none=new So("",Object.create(null),0,8)
const Co=new WeakMap,Mo=new WeakMap
var Ao
!function(t){t[t.ExcludeBuffers=1]="ExcludeBuffers",t[t.IncludeAnonymous=2]="IncludeAnonymous",t[t.IgnoreMounts=4]="IgnoreMounts",t[t.IgnoreOverlays=8]="IgnoreOverlays"}(Ao||(Ao={}))
class Do{constructor(t,e,i,n,s){if(this.type=t,this.children=e,this.positions=i,this.length=n,this.props=null,s&&s.length){this.props=Object.create(null)
for(let[t,e]of s)this.props["number"==typeof t?t:t.id]=e}}toString(){let t=xo.get(this)
if(t&&!t.overlay)return t.tree.toString()
let e=""
for(let i of this.children){let t=i.toString()
t&&(e&&(e+=","),e+=t)}return this.type.name?(/\W/.test(this.type.name)&&!this.type.isError?JSON.stringify(this.type.name):this.type.name)+(e.length?"("+e+")":""):e}cursor(t=0){return new Fo(this.topNode,t)}cursorAt(t,e=0,i=0){let n=Co.get(this)||this.topNode,s=new Fo(n)
return s.moveTo(t,e),Co.set(this,s._tree),s}get topNode(){return new Lo(this,0,0,null)}resolve(t,e=0){let i=Ro(Co.get(this)||this.topNode,t,e,!1)
return Co.set(this,i),i}resolveInner(t,e=0){let i=Ro(Mo.get(this)||this.topNode,t,e,!0)
return Mo.set(this,i),i}resolveStack(t,e=0){return function(t,e,i){let n=t.resolveInner(e,i),s=null
for(let r=n instanceof Lo?n:n.context.parent;r;r=r.parent)if(r.index<0){let t=r.parent;(s||(s=[n])).push(t.resolve(e,i)),r=t}else{let t=xo.get(r.tree)
if(t&&t.overlay&&t.overlay[0].from<=e&&t.overlay[t.overlay.length-1].to>=e){let o=new Lo(t.tree,t.overlay[0].from+r.from,-1,r);(s||(s=[n])).push(Ro(o,e,i,!1))}}return s?Wo(s):n}(this,t,e)}iterate(t){let{enter:e,leave:i,from:n=0,to:s=this.length}=t,r=t.mode||0,o=(r&Ao.IncludeAnonymous)>0
for(let l=this.cursor(r|Ao.IncludeAnonymous);;){let t=!1
if(l.from<=s&&l.to>=n&&(!o&&l.type.isAnonymous||!1!==e(l))){if(l.firstChild())continue
t=!0}for(;t&&i&&(o||!l.type.isAnonymous)&&i(l),!l.nextSibling();){if(!l.parent())return
t=!0}}}prop(t){return t.perNode?this.props?this.props[t.id]:void 0:this.type.prop(t)}get propValues(){let t=[]
if(this.props)for(let e in this.props)t.push([+e,this.props[e]])
return t}balance(t={}){return this.children.length<=8?this:jo(So.none,this.children,this.positions,0,this.children.length,0,this.length,(t,e,i)=>new Do(this.type,t,e,i,this.propValues),t.makeTree||((t,e,i)=>new Do(So.none,t,e,i)))}static build(t){return function(t){var e
let{buffer:i,nodeSet:n,maxBufferLength:s=vo,reused:r=[],minRepeatType:o=n.types.length}=t,l=Array.isArray(i)?new Oo(i,i.length):i,a=n.types,h=0,c=0
function u(t,e,i,g,v,w){let{id:y,start:b,end:x,size:k}=l,S=c,C=h
for(;k<0;){if(l.next(),-1==k){let e=r[y]
return i.push(e),void g.push(b-t)}if(-3==k)return void(h=y)
if(-4==k)return void(c=y)
throw new RangeError(`Unrecognized record size: ${k}`)}let M,A,D=a[y],O=b-t
if(x-b<=s&&(A=function(t,e){let i=l.fork(),n=0,r=0,a=0,h=i.end-s,c={size:0,start:0,skip:0}
t:for(let s=i.pos-t;i.pos>s;){let t=i.size
if(i.id==e&&t>=0){c.size=n,c.start=r,c.skip=a,a+=4,n+=4,i.next()
continue}let l=i.pos-t
if(t<0||l<s||i.start<h)break
let u=i.id>=o?4:0,f=i.start
for(i.next();i.pos>l;){if(i.size<0){if(-3!=i.size)break t
u+=4}else i.id>=o&&(u+=4)
i.next()}r=f,n+=t,a+=u}return(e<0||n==t)&&(c.size=n,c.start=r,c.skip=a),c.size>4?c:void 0}(l.pos-e,v))){let e=new Uint16Array(A.size-A.skip),i=l.pos-A.size,s=e.length
for(;l.pos>i;)s=m(A.start,e,s)
M=new To(e,x-A.start,n),O=A.start-t}else{let t=l.pos-k
l.next()
let e=[],i=[],n=y>=o?y:-1,r=0,a=x
for(;l.pos>t;)n>=0&&l.id==n&&l.size>=0?(l.end<=a-s&&(d(e,i,b,r,l.end,a,n,S,C),r=e.length,a=l.end),l.next()):w>2500?f(b,t,e,i):u(b,t,e,i,n,w+1)
if(n>=0&&r>0&&r<e.length&&d(e,i,b,r,b,a,n,S,C),e.reverse(),i.reverse(),n>-1&&r>0){let t=function(t,e){return(i,n,s)=>{let r,o,l=0,a=i.length-1
if(a>=0&&(r=i[a])instanceof Do){if(!a&&r.type==t&&r.length==s)return r;(o=r.prop(bo.lookAhead))&&(l=n[a]+r.length+o)}return p(t,i,n,s,l,e)}}(D,C)
M=jo(D,e,i,0,e.length,0,x-b,t,t)}else M=p(D,e,i,x-b,S-x,C)}i.push(M),g.push(O)}function f(t,e,i,r){let o=[],a=0,h=-1
for(;l.pos>e;){let{id:t,start:e,end:i,size:n}=l
if(n>4)l.next()
else{if(h>-1&&e<h)break
h<0&&(h=i-s),o.push(t,e,i),a++,l.next()}}if(a){let e=new Uint16Array(4*a),s=o[o.length-2]
for(let t=o.length-3,i=0;t>=0;t-=3)e[i++]=o[t],e[i++]=o[t+1]-s,e[i++]=o[t+2]-s,e[i++]=i
i.push(new To(e,o[2]-s,n)),r.push(s-t)}}function d(t,e,i,s,r,o,l,a,h){let c=[],u=[]
for(;t.length>s;)c.push(t.pop()),u.push(e.pop()+i-r)
t.push(p(n.types[l],c,u,o-r,a-o,h)),e.push(r-i)}function p(t,e,i,n,s,r,o){if(r){let t=[bo.contextHash,r]
o=o?[t].concat(o):[t]}if(s>25){let t=[bo.lookAhead,s]
o=o?[t].concat(o):[t]}return new Do(t,e,i,n,o)}function m(t,e,i){let{id:n,start:s,end:r,size:a}=l
if(l.next(),a>=0&&n<o){let o=i
if(a>4){let n=l.pos-(a-4)
for(;l.pos>n;)i=m(t,e,i)}e[--i]=o,e[--i]=r-t,e[--i]=s-t,e[--i]=n}else-3==a?h=n:-4==a&&(c=n)
return i}let g=[],v=[]
for(;l.pos>0;)u(t.start||0,t.bufferStart||0,g,v,-1,0)
let w=null!==(e=t.length)&&void 0!==e?e:g.length?v[0]+g[0].length:0
return new Do(a[t.topID],g.reverse(),v.reverse(),w)}(t)}}Do.empty=new Do(So.none,[],[],0)
class Oo{constructor(t,e){this.buffer=t,this.index=e}get id(){return this.buffer[this.index-4]}get start(){return this.buffer[this.index-3]}get end(){return this.buffer[this.index-2]}get size(){return this.buffer[this.index-1]}get pos(){return this.index}next(){this.index-=4}fork(){return new Oo(this.buffer,this.index)}}class To{constructor(t,e,i){this.buffer=t,this.length=e,this.set=i}get type(){return So.none}toString(){let t=[]
for(let e=0;e<this.buffer.length;)t.push(this.childString(e)),e=this.buffer[e+3]
return t.join(",")}childString(t){let e=this.buffer[t],i=this.buffer[t+3],n=this.set.types[e],s=n.name
if(/\W/.test(s)&&!n.isError&&(s=JSON.stringify(s)),i==(t+=4))return s
let r=[]
for(;t<i;)r.push(this.childString(t)),t=this.buffer[t+3]
return s+"("+r.join(",")+")"}findChild(t,e,i,n,s){let{buffer:r}=this,o=-1
for(let l=t;l!=e&&!(Eo(s,n,r[l+1],r[l+2])&&(o=l,i>0));l=r[l+3]);return o}slice(t,e,i){let n=this.buffer,s=new Uint16Array(e-t),r=0
for(let o=t,l=0;o<e;){s[l++]=n[o++],s[l++]=n[o++]-i
let e=s[l++]=n[o++]-i
s[l++]=n[o++]-t,r=Math.max(r,e)}return new To(s,r,this.set)}}function Eo(t,e,i,n){switch(t){case-2:return i<e
case-1:return n>=e&&i<e
case 0:return i<e&&n>e
case 1:return i<=e&&n>e
case 2:return n>e
case 4:return!0}}function Ro(t,e,i,n){for(var s;t.from==t.to||(i<1?t.from>=e:t.from>e)||(i>-1?t.to<=e:t.to<e);){let e=!n&&t instanceof Lo&&t.index<0?null:t.parent
if(!e)return t
t=e}let r=n?0:Ao.IgnoreOverlays
if(n)for(let o=t,l=o.parent;l;o=l,l=o.parent)o instanceof Lo&&o.index<0&&(null===(s=l.enter(e,i,r))||void 0===s?void 0:s.from)!=o.from&&(t=l)
for(;;){let n=t.enter(e,i,r)
if(!n)return t
t=n}}class Bo{cursor(t=0){return new Fo(this,t)}getChild(t,e=null,i=null){let n=Po(this,t,e,i)
return n.length?n[0]:null}getChildren(t,e=null,i=null){return Po(this,t,e,i)}resolve(t,e=0){return Ro(this,t,e,!1)}resolveInner(t,e=0){return Ro(this,t,e,!0)}matchContext(t){return Io(this.parent,t)}enterUnfinishedNodesBefore(t){let e=this.childBefore(t),i=this
for(;e;){let t=e.lastChild
if(!t||t.to!=e.to)break
t.type.isError&&t.from==t.to?(i=e,e=t.prevSibling):e=t}return i}get node(){return this}get next(){return this.parent}}class Lo extends Bo{constructor(t,e,i,n){super(),this._tree=t,this.from=e,this.index=i,this._parent=n}get type(){return this._tree.type}get name(){return this._tree.type.name}get to(){return this.from+this._tree.length}nextChild(t,e,i,n,s=0){for(let r=this;;){for(let{children:o,positions:l}=r._tree,a=e>0?o.length:-1;t!=a;t+=e){let a=o[t],h=l[t]+r.from
if(Eo(n,i,h,h+a.length))if(a instanceof To){if(s&Ao.ExcludeBuffers)continue
let o=a.findChild(0,a.buffer.length,e,i-h,n)
if(o>-1)return new Ho(new No(r,a,t,h),null,o)}else if(s&Ao.IncludeAnonymous||!a.type.isAnonymous||zo(a)){let o
if(!(s&Ao.IgnoreMounts)&&(o=xo.get(a))&&!o.overlay)return new Lo(o.tree,h,t,r)
let l=new Lo(a,h,t,r)
return s&Ao.IncludeAnonymous||!l.type.isAnonymous?l:l.nextChild(e<0?a.children.length-1:0,e,i,n)}}if(s&Ao.IncludeAnonymous||!r.type.isAnonymous)return null
if(t=r.index>=0?r.index+e:e<0?-1:r._parent._tree.children.length,r=r._parent,!r)return null}}get firstChild(){return this.nextChild(0,1,0,4)}get lastChild(){return this.nextChild(this._tree.children.length-1,-1,0,4)}childAfter(t){return this.nextChild(0,1,t,2)}childBefore(t){return this.nextChild(this._tree.children.length-1,-1,t,-2)}enter(t,e,i=0){let n
if(!(i&Ao.IgnoreOverlays)&&(n=xo.get(this._tree))&&n.overlay){let i=t-this.from
for(let{from:t,to:s}of n.overlay)if((e>0?t<=i:t<i)&&(e<0?s>=i:s>i))return new Lo(n.tree,n.overlay[0].from+this.from,-1,this)}return this.nextChild(0,1,t,e,i)}nextSignificantParent(){let t=this
for(;t.type.isAnonymous&&t._parent;)t=t._parent
return t}get parent(){return this._parent?this._parent.nextSignificantParent():null}get nextSibling(){return this._parent&&this.index>=0?this._parent.nextChild(this.index+1,1,0,4):null}get prevSibling(){return this._parent&&this.index>=0?this._parent.nextChild(this.index-1,-1,0,4):null}get tree(){return this._tree}toTree(){return this._tree}toString(){return this._tree.toString()}}function Po(t,e,i,n){let s=t.cursor(),r=[]
if(!s.firstChild())return r
if(null!=i)for(let o=!1;!o;)if(o=s.type.is(i),!s.nextSibling())return r
for(;;){if(null!=n&&s.type.is(n))return r
if(s.type.is(e)&&r.push(s.node),!s.nextSibling())return null==n?r:[]}}function Io(t,e,i=e.length-1){for(let n=t;i>=0;n=n.parent){if(!n)return!1
if(!n.type.isAnonymous){if(e[i]&&e[i]!=n.name)return!1
i--}}return!0}class No{constructor(t,e,i,n){this.parent=t,this.buffer=e,this.index=i,this.start=n}}class Ho extends Bo{get name(){return this.type.name}get from(){return this.context.start+this.context.buffer.buffer[this.index+1]}get to(){return this.context.start+this.context.buffer.buffer[this.index+2]}constructor(t,e,i){super(),this.context=t,this._parent=e,this.index=i,this.type=t.buffer.set.types[t.buffer.buffer[i]]}child(t,e,i){let{buffer:n}=this.context,s=n.findChild(this.index+4,n.buffer[this.index+3],t,e-this.context.start,i)
return s<0?null:new Ho(this.context,this,s)}get firstChild(){return this.child(1,0,4)}get lastChild(){return this.child(-1,0,4)}childAfter(t){return this.child(1,t,2)}childBefore(t){return this.child(-1,t,-2)}enter(t,e,i=0){if(i&Ao.ExcludeBuffers)return null
let{buffer:n}=this.context,s=n.findChild(this.index+4,n.buffer[this.index+3],e>0?1:-1,t-this.context.start,e)
return s<0?null:new Ho(this.context,this,s)}get parent(){return this._parent||this.context.parent.nextSignificantParent()}externalSibling(t){return this._parent?null:this.context.parent.nextChild(this.context.index+t,t,0,4)}get nextSibling(){let{buffer:t}=this.context,e=t.buffer[this.index+3]
return e<(this._parent?t.buffer[this._parent.index+3]:t.buffer.length)?new Ho(this.context,this._parent,e):this.externalSibling(1)}get prevSibling(){let{buffer:t}=this.context,e=this._parent?this._parent.index+4:0
return this.index==e?this.externalSibling(-1):new Ho(this.context,this._parent,t.findChild(e,this.index,-1,0,4))}get tree(){return null}toTree(){let t=[],e=[],{buffer:i}=this.context,n=this.index+4,s=i.buffer[this.index+3]
if(s>n){let r=i.buffer[this.index+1]
t.push(i.slice(n,s,r)),e.push(0)}return new Do(this.type,t,e,this.to-this.from)}toString(){return this.context.buffer.childString(this.index)}}function Wo(t){if(!t.length)return null
let e=0,i=t[0]
for(let r=1;r<t.length;r++){let n=t[r];(n.from>i.from||n.to<i.to)&&(i=n,e=r)}let n=i instanceof Lo&&i.index<0?null:i.parent,s=t.slice()
return n?s[e]=n:s.splice(e,1),new Vo(s,i)}class Vo{constructor(t,e){this.heads=t,this.node=e}get next(){return Wo(this.heads)}}class Fo{get name(){return this.type.name}constructor(t,e=0){if(this.mode=e,this.buffer=null,this.stack=[],this.index=0,this.bufferNode=null,t instanceof Lo)this.yieldNode(t)
else{this._tree=t.context.parent,this.buffer=t.context
for(let e=t._parent;e;e=e._parent)this.stack.unshift(e.index)
this.bufferNode=t,this.yieldBuf(t.index)}}yieldNode(t){return!!t&&(this._tree=t,this.type=t.type,this.from=t.from,this.to=t.to,!0)}yieldBuf(t,e){this.index=t
let{start:i,buffer:n}=this.buffer
return this.type=e||n.set.types[n.buffer[t]],this.from=i+n.buffer[t+1],this.to=i+n.buffer[t+2],!0}yield(t){return!!t&&(t instanceof Lo?(this.buffer=null,this.yieldNode(t)):(this.buffer=t.context,this.yieldBuf(t.index,t.type)))}toString(){return this.buffer?this.buffer.buffer.childString(this.index):this._tree.toString()}enterChild(t,e,i){if(!this.buffer)return this.yield(this._tree.nextChild(t<0?this._tree._tree.children.length-1:0,t,e,i,this.mode))
let{buffer:n}=this.buffer,s=n.findChild(this.index+4,n.buffer[this.index+3],t,e-this.buffer.start,i)
return!(s<0)&&(this.stack.push(this.index),this.yieldBuf(s))}firstChild(){return this.enterChild(1,0,4)}lastChild(){return this.enterChild(-1,0,4)}childAfter(t){return this.enterChild(1,t,2)}childBefore(t){return this.enterChild(-1,t,-2)}enter(t,e,i=this.mode){return this.buffer?!(i&Ao.ExcludeBuffers)&&this.enterChild(1,t,e):this.yield(this._tree.enter(t,e,i))}parent(){if(!this.buffer)return this.yieldNode(this.mode&Ao.IncludeAnonymous?this._tree._parent:this._tree.parent)
if(this.stack.length)return this.yieldBuf(this.stack.pop())
let t=this.mode&Ao.IncludeAnonymous?this.buffer.parent:this.buffer.parent.nextSignificantParent()
return this.buffer=null,this.yieldNode(t)}sibling(t){if(!this.buffer)return!!this._tree._parent&&this.yield(this._tree.index<0?null:this._tree._parent.nextChild(this._tree.index+t,t,0,4,this.mode))
let{buffer:e}=this.buffer,i=this.stack.length-1
if(t<0){let t=i<0?0:this.stack[i]+4
if(this.index!=t)return this.yieldBuf(e.findChild(t,this.index,-1,0,4))}else{let t=e.buffer[this.index+3]
if(t<(i<0?e.buffer.length:e.buffer[this.stack[i]+3]))return this.yieldBuf(t)}return i<0&&this.yield(this.buffer.parent.nextChild(this.buffer.index+t,t,0,4,this.mode))}nextSibling(){return this.sibling(1)}prevSibling(){return this.sibling(-1)}atLastNode(t){let e,i,{buffer:n}=this
if(n){if(t>0){if(this.index<n.buffer.buffer.length)return!1}else for(let t=0;t<this.index;t++)if(n.buffer.buffer[t+3]<this.index)return!1;({index:e,parent:i}=n)}else({index:e,_parent:i}=this._tree)
for(;i;({index:e,_parent:i}=i))if(e>-1)for(let n=e+t,s=t<0?-1:i._tree.children.length;n!=s;n+=t){let t=i._tree.children[n]
if(this.mode&Ao.IncludeAnonymous||t instanceof To||!t.type.isAnonymous||zo(t))return!1}return!0}move(t,e){if(e&&this.enterChild(t,0,4))return!0
for(;;){if(this.sibling(t))return!0
if(this.atLastNode(t)||!this.parent())return!1}}next(t=!0){return this.move(1,t)}prev(t=!0){return this.move(-1,t)}moveTo(t,e=0){for(;(this.from==this.to||(e<1?this.from>=t:this.from>t)||(e>-1?this.to<=t:this.to<t))&&this.parent(););for(;this.enterChild(1,t,e););return this}get node(){if(!this.buffer)return this._tree
let t=this.bufferNode,e=null,i=0
if(t&&t.context==this.buffer)t:for(let n=this.index,s=this.stack.length;s>=0;){for(let r=t;r;r=r._parent)if(r.index==n){if(n==this.index)return r
e=r,i=s+1
break t}n=this.stack[--s]}for(let n=i;n<this.stack.length;n++)e=new Ho(this.buffer,e,this.stack[n])
return this.bufferNode=new Ho(this.buffer,e,this.index)}get tree(){return this.buffer?null:this._tree._tree}iterate(t,e){for(let i=0;;){let n=!1
if(this.type.isAnonymous||!1!==t(this)){if(this.firstChild()){i++
continue}this.type.isAnonymous||(n=!0)}for(;;){if(n&&e&&e(this),n=this.type.isAnonymous,!i)return
if(this.nextSibling())break
this.parent(),i--,n=!0}}}matchContext(t){if(!this.buffer)return Io(this.node.parent,t)
let{buffer:e}=this.buffer,{types:i}=e.set
for(let n=t.length-1,s=this.stack.length-1;n>=0;s--){if(s<0)return Io(this._tree,t,n)
let r=i[e.buffer[this.stack[s]]]
if(!r.isAnonymous){if(t[n]&&t[n]!=r.name)return!1
n--}}return!0}}function zo(t){return t.children.some(t=>t instanceof To||!t.type.isAnonymous||zo(t))}const qo=new WeakMap
function _o(t,e){if(!t.isAnonymous||e instanceof To||e.type!=t)return 1
let i=qo.get(e)
if(null==i){i=1
for(let n of e.children){if(n.type!=t||!(n instanceof Do)){i=1
break}i+=_o(t,n)}qo.set(e,i)}return i}function jo(t,e,i,n,s,r,o,l,a){let h=0
for(let d=n;d<s;d++)h+=_o(t,e[d])
let c=Math.ceil(1.5*h/8),u=[],f=[]
return function e(i,n,s,o,l){for(let h=s;h<o;){let s=h,d=n[h],p=_o(t,i[h])
for(h++;h<o;h++){let e=_o(t,i[h])
if(p+e>=c)break
p+=e}if(h==s+1){if(p>c){let t=i[s]
e(t.children,t.positions,0,t.children.length,n[s]+l)
continue}u.push(i[s])}else{let e=n[h-1]+i[h-1].length-d
u.push(jo(t,i,n,s,h,d,e,null,a))}f.push(d+l-r)}}(e,i,n,s,0),(l||a)(u,f,o)}class Ko{constructor(t,e,i,n,s=!1,r=!1){this.from=t,this.to=e,this.tree=i,this.offset=n,this.open=(s?1:0)|(r?2:0)}get openStart(){return(1&this.open)>0}get openEnd(){return(2&this.open)>0}static addTree(t,e=[],i=!1){let n=[new Ko(0,t.length,t,0,!1,i)]
for(let s of e)s.to>t.length&&n.push(s)
return n}static applyChanges(t,e,i=128){if(!e.length)return t
let n=[],s=1,r=t.length?t[0]:null
for(let o=0,l=0,a=0;;o++){let h=o<e.length?e[o]:null,c=h?h.fromA:1e9
if(c-l>=i)for(;r&&r.from<c;){let e=r
if(l>=e.from||c<=e.to||a){let t=Math.max(e.from,l)-a,i=Math.min(e.to,c)-a
e=t>=i?null:new Ko(t,i,e.tree,e.offset+a,o>0,!!h)}if(e&&n.push(e),r.to>c)break
r=s<t.length?t[s++]:null}if(!h)break
l=h.toA,a=h.toA-h.toB}return n}}class $o{startParse(t,e,i){return"string"==typeof t&&(t=new Uo(t)),i=i?i.length?i.map(t=>new yo(t.from,t.to)):[new yo(0,0)]:[new yo(0,t.length)],this.createParse(t,e||[],i)}parse(t,e,i){let n=this.startParse(t,e,i)
for(;;){let t=n.advance()
if(t)return t}}}class Uo{constructor(t){this.string=t}get length(){return this.string.length}chunk(t){return this.string.slice(t)}get lineChunks(){return!1}read(t,e){return this.string.slice(t,e)}}new bo({perNode:!0})
let Go=0
class Jo{constructor(t,e,i){this.set=t,this.base=e,this.modified=i,this.id=Go++}static define(t){if(null==t?void 0:t.base)throw new Error("Can not derive from a modified tag")
let e=new Jo([],null,[])
if(e.set.push(e),t)for(let i of t.set)e.set.push(i)
return e}static defineModifier(){let t=new Yo
return e=>e.modified.indexOf(t)>-1?e:Yo.get(e.base||e,e.modified.concat(t).sort((t,e)=>t.id-e.id))}}let Xo=0
class Yo{constructor(){this.instances=[],this.id=Xo++}static get(t,e){if(!e.length)return t
let i=e[0].instances.find(i=>{return i.base==t&&(n=e,s=i.modified,n.length==s.length&&n.every((t,e)=>t==s[e]))
var n,s})
if(i)return i
let n=[],s=new Jo(n,t,e)
for(let o of e)o.instances.push(s)
let r=function(t){let e=[[]]
for(let i=0;i<t.length;i++)for(let n=0,s=e.length;n<s;n++)e.push(e[n].concat(t[i]))
return e.sort((t,e)=>e.length-t.length)}(e)
for(let o of t.set)if(!o.modified.length)for(let t of r)n.push(Yo.get(o,t))
return s}}function Qo(t){let e=Object.create(null)
for(let i in t){let n=t[i]
Array.isArray(n)||(n=[n])
for(let t of i.split(" "))if(t){let i=[],s=2,r=t
for(let e=0;;){if("..."==r&&e>0&&e+3==t.length){s=1
break}let n=/^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(r)
if(!n)throw new RangeError("Invalid path: "+t)
if(i.push("*"==n[0]?"":'"'==n[0][0]?JSON.parse(n[0]):n[0]),e+=n[0].length,e==t.length)break
let o=t[e++]
if(e==t.length&&"!"==o){s=0
break}if("/"!=o)throw new RangeError("Invalid path: "+t)
r=t.slice(e)}let o=i.length-1,l=i[o]
if(!l)throw new RangeError("Invalid path: "+t)
let a=new tl(n,s,o>0?i.slice(0,o):null)
e[l]=a.sort(e[l])}}return Zo.add(e)}const Zo=new bo
class tl{constructor(t,e,i,n){this.tags=t,this.mode=e,this.context=i,this.next=n}get opaque(){return 0==this.mode}get inherit(){return 1==this.mode}sort(t){return!t||t.depth<this.depth?(this.next=t,this):(t.next=this.sort(t.next),t)}get depth(){return this.context?this.context.length:0}}function el(t,e){let i=Object.create(null)
for(let r of t)if(Array.isArray(r.tag))for(let t of r.tag)i[t.id]=r.class
else i[r.tag.id]=r.class
let{scope:n,all:s=null}=e||{}
return{style:t=>{let e=s
for(let n of t)for(let t of n.set){let n=i[t.id]
if(n){e=e?e+" "+n:n
break}}return e},scope:n}}function il(t,e,i,n=0,s=t.length){let r=new nl(n,Array.isArray(e)?e:[e],i)
r.highlightRange(t.cursor(),n,s,"",r.highlighters),r.flush(s)}tl.empty=new tl([],2,null)
class nl{constructor(t,e,i){this.at=t,this.highlighters=e,this.span=i,this.class=""}startSpan(t,e){e!=this.class&&(this.flush(t),t>this.at&&(this.at=t),this.class=e)}flush(t){t>this.at&&this.class&&this.span(this.at,t,this.class)}highlightRange(t,e,i,n,s){let{type:r,from:o,to:l}=t
if(o>=i||l<=e)return
r.isTop&&(s=this.highlighters.filter(t=>!t.scope||t.scope(r)))
let a=n,h=function(t){let e=t.type.prop(Zo)
for(;e&&e.context&&!t.matchContext(e.context);)e=e.next
return e||null}(t)||tl.empty,c=function(t,e){let i=null
for(let n of t){let t=n.style(e)
t&&(i=i?i+" "+t:t)}return i}(s,h.tags)
if(c&&(a&&(a+=" "),a+=c,1==h.mode&&(n+=(n?" ":"")+c)),this.startSpan(Math.max(e,o),a),h.opaque)return
let u=t.tree&&t.tree.prop(bo.mounted)
if(u&&u.overlay){let r=t.node.enter(u.overlay[0].from+o,1),h=this.highlighters.filter(t=>!t.scope||t.scope(u.tree.type)),c=t.firstChild()
for(let f=0,d=o;;f++){let p=f<u.overlay.length?u.overlay[f]:null,m=p?p.from+o:l,g=Math.max(e,d),v=Math.min(i,m)
if(g<v&&c)for(;t.from<v&&(this.highlightRange(t,g,v,n,s),this.startSpan(Math.min(v,t.to),a),!(t.to>=m)&&t.nextSibling()););if(!p||m>i)break
d=p.to+o,d>e&&(this.highlightRange(r.cursor(),Math.max(e,p.from+o),Math.min(i,d),"",h),this.startSpan(Math.min(i,d),a))}c&&t.parent()}else if(t.firstChild()){u&&(n="")
do{if(!(t.to<=e)){if(t.from>=i)break
this.highlightRange(t,e,i,n,s),this.startSpan(Math.min(i,t.to),a)}}while(t.nextSibling())
t.parent()}}}const sl=Jo.define,rl=sl(),ol=sl(),ll=sl(ol),al=sl(ol),hl=sl(),cl=sl(hl),ul=sl(hl),fl=sl(),dl=sl(fl),pl=sl(),ml=sl(),gl=sl(),vl=sl(gl),wl=sl(),yl={comment:rl,lineComment:sl(rl),blockComment:sl(rl),docComment:sl(rl),name:ol,variableName:sl(ol),typeName:ll,tagName:sl(ll),propertyName:al,attributeName:sl(al),className:sl(ol),labelName:sl(ol),namespace:sl(ol),macroName:sl(ol),literal:hl,string:cl,docString:sl(cl),character:sl(cl),attributeValue:sl(cl),number:ul,integer:sl(ul),float:sl(ul),bool:sl(hl),regexp:sl(hl),escape:sl(hl),color:sl(hl),url:sl(hl),keyword:pl,self:sl(pl),null:sl(pl),atom:sl(pl),unit:sl(pl),modifier:sl(pl),operatorKeyword:sl(pl),controlKeyword:sl(pl),definitionKeyword:sl(pl),moduleKeyword:sl(pl),operator:ml,derefOperator:sl(ml),arithmeticOperator:sl(ml),logicOperator:sl(ml),bitwiseOperator:sl(ml),compareOperator:sl(ml),updateOperator:sl(ml),definitionOperator:sl(ml),typeOperator:sl(ml),controlOperator:sl(ml),punctuation:gl,separator:sl(gl),bracket:vl,angleBracket:sl(vl),squareBracket:sl(vl),paren:sl(vl),brace:sl(vl),content:fl,heading:dl,heading1:sl(dl),heading2:sl(dl),heading3:sl(dl),heading4:sl(dl),heading5:sl(dl),heading6:sl(dl),contentSeparator:sl(fl),list:sl(fl),quote:sl(fl),emphasis:sl(fl),strong:sl(fl),link:sl(fl),monospace:sl(fl),strikethrough:sl(fl),inserted:sl(),deleted:sl(),changed:sl(),invalid:sl(),meta:wl,documentMeta:sl(wl),annotation:sl(wl),processingInstruction:sl(wl),definition:Jo.defineModifier(),constant:Jo.defineModifier(),function:Jo.defineModifier(),standard:Jo.defineModifier(),local:Jo.defineModifier(),special:Jo.defineModifier()}
var bl
el([{tag:yl.link,class:"tok-link"},{tag:yl.heading,class:"tok-heading"},{tag:yl.emphasis,class:"tok-emphasis"},{tag:yl.strong,class:"tok-strong"},{tag:yl.keyword,class:"tok-keyword"},{tag:yl.atom,class:"tok-atom"},{tag:yl.bool,class:"tok-bool"},{tag:yl.url,class:"tok-url"},{tag:yl.labelName,class:"tok-labelName"},{tag:yl.inserted,class:"tok-inserted"},{tag:yl.deleted,class:"tok-deleted"},{tag:yl.literal,class:"tok-literal"},{tag:yl.string,class:"tok-string"},{tag:yl.number,class:"tok-number"},{tag:[yl.regexp,yl.escape,yl.special(yl.string)],class:"tok-string2"},{tag:yl.variableName,class:"tok-variableName"},{tag:yl.local(yl.variableName),class:"tok-variableName tok-local"},{tag:yl.definition(yl.variableName),class:"tok-variableName tok-definition"},{tag:yl.special(yl.variableName),class:"tok-variableName2"},{tag:yl.definition(yl.propertyName),class:"tok-propertyName tok-definition"},{tag:yl.typeName,class:"tok-typeName"},{tag:yl.namespace,class:"tok-namespace"},{tag:yl.className,class:"tok-className"},{tag:yl.macroName,class:"tok-macroName"},{tag:yl.propertyName,class:"tok-propertyName"},{tag:yl.operator,class:"tok-operator"},{tag:yl.comment,class:"tok-comment"},{tag:yl.meta,class:"tok-meta"},{tag:yl.invalid,class:"tok-invalid"},{tag:yl.punctuation,class:"tok-punctuation"}])
const xl=new bo,kl=new bo
class Sl{constructor(t,e,i=[],n=""){this.data=t,this.name=n,St.prototype.hasOwnProperty("tree")||Object.defineProperty(St.prototype,"tree",{get(){return Ml(this)}}),this.parser=e,this.extension=[Pl.of(this),St.languageData.of((t,e,i)=>{let n=Cl(t,e,i),s=n.type.prop(xl)
if(!s)return[]
let r=t.facet(s),o=n.type.prop(kl)
if(o){let s=n.resolve(e-n.from,i)
for(let e of o)if(e.test(s,t)){let i=t.facet(e.facet)
return"replace"==e.type?i:i.concat(r)}}return r})].concat(i)}isActiveAt(t,e,i=-1){return Cl(t,e,i).type.prop(xl)==this.data}findRegions(t){let e=t.facet(Pl)
if((null==e?void 0:e.data)==this.data)return[{from:0,to:t.doc.length}]
if(!e||!e.allowsNesting)return[]
let i=[],n=(t,e)=>{if(t.prop(xl)==this.data)return void i.push({from:e,to:e+t.length})
let s=t.prop(bo.mounted)
if(s){if(s.tree.prop(xl)==this.data){if(s.overlay)for(let t of s.overlay)i.push({from:t.from+e,to:t.to+e})
else i.push({from:e,to:e+t.length})
return}if(s.overlay){let t=i.length
if(n(s.tree,s.overlay[0].from+e),i.length>t)return}}for(let i=0;i<t.children.length;i++){let s=t.children[i]
s instanceof Do&&n(s,t.positions[i]+e)}}
return n(Ml(t),0),i}get allowsNesting(){return!0}}function Cl(t,e,i){let n=t.facet(Pl),s=Ml(t).topNode
if(!n||n.allowsNesting)for(let r=s;r;r=r.enter(e,i,Ao.ExcludeBuffers))r.type.isTop&&(s=r)
return s}function Ml(t){let e=t.field(Sl.state,!1)
return e?e.tree:Do.empty}Sl.setState=ft.define()
class Al{constructor(t){this.doc=t,this.cursorPos=0,this.string="",this.cursor=t.iter()}get length(){return this.doc.length}syncTo(t){return this.string=this.cursor.next(t-this.cursorPos).value,this.cursorPos=t+this.string.length,this.cursorPos-this.string.length}chunk(t){return this.syncTo(t),this.string}get lineChunks(){return!0}read(t,e){let i=this.cursorPos-this.string.length
return t<i||e>=this.cursorPos?this.doc.sliceString(t,e):this.string.slice(t-i,e-i)}}let Dl=null
class Ol{constructor(t,e,i=[],n,s,r,o,l){this.parser=t,this.state=e,this.fragments=i,this.tree=n,this.treeLen=s,this.viewport=r,this.skipped=o,this.scheduleOn=l,this.parse=null,this.tempSkipped=[]}static create(t,e,i){return new Ol(t,e,[],Do.empty,0,i,[],null)}startParse(){return this.parser.startParse(new Al(this.state.doc),this.fragments)}work(t,e){return null!=e&&e>=this.state.doc.length&&(e=void 0),this.tree!=Do.empty&&this.isDone(null!=e?e:this.state.doc.length)?(this.takeTree(),!0):this.withContext(()=>{var i
if("number"==typeof t){let e=Date.now()+t
t=()=>Date.now()>e}for(this.parse||(this.parse=this.startParse()),null!=e&&(null==this.parse.stoppedAt||this.parse.stoppedAt>e)&&e<this.state.doc.length&&this.parse.stopAt(e);;){let n=this.parse.advance()
if(n){if(this.fragments=this.withoutTempSkipped(Ko.addTree(n,this.fragments,null!=this.parse.stoppedAt)),this.treeLen=null!==(i=this.parse.stoppedAt)&&void 0!==i?i:this.state.doc.length,this.tree=n,this.parse=null,!(this.treeLen<(null!=e?e:this.state.doc.length)))return!0
this.parse=this.startParse()}if(t())return!1}})}takeTree(){let t,e
this.parse&&(t=this.parse.parsedPos)>=this.treeLen&&((null==this.parse.stoppedAt||this.parse.stoppedAt>t)&&this.parse.stopAt(t),this.withContext(()=>{for(;!(e=this.parse.advance()););}),this.treeLen=t,this.tree=e,this.fragments=this.withoutTempSkipped(Ko.addTree(this.tree,this.fragments,!0)),this.parse=null)}withContext(t){let e=Dl
Dl=this
try{return t()}finally{Dl=e}}withoutTempSkipped(t){for(let e;e=this.tempSkipped.pop();)t=Tl(t,e.from,e.to)
return t}changes(t,e){let{fragments:i,tree:n,treeLen:s,viewport:r,skipped:o}=this
if(this.takeTree(),!t.empty){let e=[]
if(t.iterChangedRanges((t,i,n,s)=>e.push({fromA:t,toA:i,fromB:n,toB:s})),i=Ko.applyChanges(i,e),n=Do.empty,s=0,r={from:t.mapPos(r.from,-1),to:t.mapPos(r.to,1)},this.skipped.length){o=[]
for(let e of this.skipped){let i=t.mapPos(e.from,1),n=t.mapPos(e.to,-1)
i<n&&o.push({from:i,to:n})}}}return new Ol(this.parser,e,i,n,s,r,o,this.scheduleOn)}updateViewport(t){if(this.viewport.from==t.from&&this.viewport.to==t.to)return!1
this.viewport=t
let e=this.skipped.length
for(let i=0;i<this.skipped.length;i++){let{from:e,to:n}=this.skipped[i]
e<t.to&&n>t.from&&(this.fragments=Tl(this.fragments,e,n),this.skipped.splice(i--,1))}return!(this.skipped.length>=e||(this.reset(),0))}reset(){this.parse&&(this.takeTree(),this.parse=null)}skipUntilInView(t,e){this.skipped.push({from:t,to:e})}static getSkippingParser(t){return new class extends $o{createParse(e,i,n){let s=n[0].from,r=n[n.length-1].to
return{parsedPos:s,advance(){let e=Dl
if(e){for(let t of n)e.tempSkipped.push(t)
t&&(e.scheduleOn=e.scheduleOn?Promise.all([e.scheduleOn,t]):t)}return this.parsedPos=r,new Do(So.none,[],[],r-s)},stoppedAt:null,stopAt(){}}}}}isDone(t){t=Math.min(t,this.state.doc.length)
let e=this.fragments
return this.treeLen>=t&&e.length&&0==e[0].from&&e[0].to>=t}static get(){return Dl}}function Tl(t,e,i){return Ko.applyChanges(t,[{fromA:e,toA:i,fromB:e,toB:i}])}class El{constructor(t){this.context=t,this.tree=t.tree}apply(t){if(!t.docChanged&&this.tree==this.context.tree)return this
let e=this.context.changes(t.changes,t.state),i=this.context.treeLen==t.startState.doc.length?void 0:Math.max(t.changes.mapPos(this.context.treeLen),e.viewport.to)
return e.work(20,i)||e.takeTree(),new El(e)}static init(t){let e=Math.min(3e3,t.doc.length),i=Ol.create(t.facet(Pl).parser,t,{from:0,to:e})
return i.work(20,e)||i.takeTree(),new El(i)}}Sl.state=U.define({create:El.init,update(t,e){for(let i of e.effects)if(i.is(Sl.setState))return i.value
return e.startState.facet(Pl)!=e.state.facet(Pl)?El.init(e.state):t.apply(e)}})
let Rl=t=>{let e=setTimeout(()=>t(),500)
return()=>clearTimeout(e)}
"undefined"!=typeof requestIdleCallback&&(Rl=t=>{let e=-1,i=setTimeout(()=>{e=requestIdleCallback(t,{timeout:400})},100)
return()=>e<0?clearTimeout(i):cancelIdleCallback(e)})
const Bl="undefined"!=typeof navigator&&(null===(bl=navigator.scheduling)||void 0===bl?void 0:bl.isInputPending)?()=>navigator.scheduling.isInputPending():null,Ll=Oi.fromClass(class{constructor(t){this.view=t,this.working=null,this.workScheduled=0,this.chunkEnd=-1,this.chunkBudget=-1,this.work=this.work.bind(this),this.scheduleWork()}update(t){let e=this.view.state.field(Sl.state).context;(e.updateViewport(t.view.viewport)||this.view.viewport.to>e.treeLen)&&this.scheduleWork(),t.docChanged&&(this.view.hasFocus&&(this.chunkBudget+=50),this.scheduleWork()),this.checkAsyncSchedule(e)}scheduleWork(){if(this.working)return
let{state:t}=this.view,e=t.field(Sl.state)
e.tree==e.context.tree&&e.context.isDone(t.doc.length)||(this.working=Rl(this.work))}work(t){this.working=null
let e=Date.now()
if(this.chunkEnd<e&&(this.chunkEnd<0||this.view.hasFocus)&&(this.chunkEnd=e+3e4,this.chunkBudget=3e3),this.chunkBudget<=0)return
let{state:i,viewport:{to:n}}=this.view,s=i.field(Sl.state)
if(s.tree==s.context.tree&&s.context.isDone(n+1e5))return
let r=Date.now()+Math.min(this.chunkBudget,100,t&&!Bl?Math.max(25,t.timeRemaining()-5):1e9),o=s.context.treeLen<n&&i.doc.length>n+1e3,l=s.context.work(()=>Bl&&Bl()||Date.now()>r,n+(o?0:1e5))
this.chunkBudget-=Date.now()-e,(l||this.chunkBudget<=0)&&(s.context.takeTree(),this.view.dispatch({effects:Sl.setState.of(new El(s.context))})),this.chunkBudget>0&&(!l||o)&&this.scheduleWork(),this.checkAsyncSchedule(s.context)}checkAsyncSchedule(t){t.scheduleOn&&(this.workScheduled++,t.scheduleOn.then(()=>this.scheduleWork()).catch(t=>Ci(this.view.state,t)).then(()=>this.workScheduled--),t.scheduleOn=null)}destroy(){this.working&&this.working()}isWorking(){return!!(this.working||this.workScheduled>0)}},{eventHandlers:{focus(){this.scheduleWork()}}}),Pl=F.define({combine:t=>t.length?t[0]:null,enables:t=>[Sl.state,Ll,Ns.contentAttributes.compute([t],e=>{let i=e.facet(t)
return i&&i.name?{"data-language":i.name}:{}})]}),Il=F.define(),Nl=F.define({combine:t=>{if(!t.length)return"  "
let e=t[0]
if(!e||/\S/.test(e)||Array.from(e).some(t=>t!=e[0]))throw new Error("Invalid indent unit: "+JSON.stringify(t[0]))
return e}})
function Hl(t){let e=t.facet(Nl)
return 9==e.charCodeAt(0)?t.tabSize*e.length:e.length}function Wl(t,e){let i="",n=t.tabSize,s=t.facet(Nl)[0]
if("\t"==s){for(;e>=n;)i+="\t",e-=n
s=" "}for(let r=0;r<e;r++)i+=s
return i}function Vl(t,e){t instanceof St&&(t=new Fl(t))
for(let n of t.state.facet(Il)){let i=n(t,e)
if(void 0!==i)return i}let i=Ml(t.state)
return i?function(t,e,i){return _l(e.resolveInner(i).enterUnfinishedNodesBefore(i),i,t)}(t,i,e):null}class Fl{constructor(t,e={}){this.state=t,this.options=e,this.unit=Hl(t)}lineAt(t,e=1){let i=this.state.doc.lineAt(t),{simulateBreak:n,simulateDoubleBreak:s}=this.options
return null!=n&&n>=i.from&&n<=i.to?s&&n==t?{text:"",from:t}:(e<0?n<t:n<=t)?{text:i.text.slice(n-i.from),from:n}:{text:i.text.slice(0,n-i.from),from:i.from}:i}textAfterPos(t,e=1){if(this.options.simulateDoubleBreak&&t==this.options.simulateBreak)return""
let{text:i,from:n}=this.lineAt(t,e)
return i.slice(t-n,Math.min(i.length,t+100-n))}column(t,e=1){let{text:i,from:n}=this.lineAt(t,e),s=this.countColumn(i,t-n),r=this.options.overrideIndentation?this.options.overrideIndentation(n):-1
return r>-1&&(s+=r-this.countColumn(i,i.search(/\S|$/))),s}countColumn(t,e=t.length){return zt(t,this.state.tabSize,e)}lineIndent(t,e=1){let{text:i,from:n}=this.lineAt(t,e),s=this.options.overrideIndentation
if(s){let t=s(n)
if(t>-1)return t}return this.countColumn(i,i.search(/\S|$/))}get simulatedBreak(){return this.options.simulateBreak||null}}const zl=new bo
function ql(t){let e=t.type.prop(zl)
if(e)return e
let i,n=t.firstChild
if(n&&(i=n.type.prop(bo.closedBy))){let e=t.lastChild,n=e&&i.indexOf(e.name)>-1
return t=>function(t,e,i,n,s){let r=t.textAfter,o=r.match(/^\s*/)[0].length,l=s==t.pos+o,a=function(t){let e=t.node,i=e.childAfter(e.from),n=e.lastChild
if(!i)return null
let s=t.options.simulateBreak,r=t.state.doc.lineAt(i.from),o=null==s||s<=r.from?r.to:Math.min(r.to,s)
for(let l=i.to;;){let t=e.childAfter(l)
if(!t||t==n)return null
if(!t.type.isSkipped)return t.from<o?i:null
l=t.to}}(t)
return a?l?t.column(a.from):t.column(a.to):t.baseIndent+(l?0:1*t.unit)}(t,0,0,0,n&&!function(t){return t.pos==t.options.simulateBreak&&t.options.simulateDoubleBreak}(t)?e.from:void 0)}return null==t.parent?jl:null}function _l(t,e,i){for(;t;t=t.parent){let n=ql(t)
if(n)return n(Kl.create(i,e,t))}return null}function jl(){return 0}class Kl extends Fl{constructor(t,e,i){super(t.state,t.options),this.base=t,this.pos=e,this.node=i}static create(t,e,i){return new Kl(t,e,i)}get textAfter(){return this.textAfterPos(this.pos)}get baseIndent(){return this.baseIndentFor(this.node)}baseIndentFor(t){let e=this.state.doc.lineAt(t.from)
for(;;){let i=t.resolve(e.from)
for(;i.parent&&i.parent.from==i.from;)i=i.parent
if($l(i,t))break
e=this.state.doc.lineAt(i.from)}return this.lineIndent(e.from)}continue(){let t=this.node.parent
return t?_l(t,this.pos,this.base):0}}function $l(t,e){for(let i=e;i;i=i.parent)if(t==i)return!0
return!1}const Ul=F.define(),Gl=new bo
function Jl(t){let e=t.lastChild
return e&&e.to==t.to&&e.type.isError}function Xl(t,e,i){for(let n of t.facet(Ul)){let s=n(t,e,i)
if(s)return s}return function(t,e,i){let n=Ml(t)
if(n.length<i)return null
let s=null
for(let r=n.resolveInner(i,1);r;r=r.parent){if(r.to<=i||r.from>i)continue
if(s&&r.from<e)break
let o=r.type.prop(Gl)
if(o&&(r.to<n.length-50||n.length==t.doc.length||!Jl(r))){let n=o(r,t)
n&&n.from<=i&&n.from>=e&&n.to>i&&(s=n)}}return s}(t,e,i)}function Yl(t,e){let i=e.mapPos(t.from,1),n=e.mapPos(t.to,-1)
return i>=n?void 0:{from:i,to:n}}const Ql=ft.define({map:Yl}),Zl=ft.define({map:Yl})
function ta(t){let e=[]
for(let{head:i}of t.state.selection.ranges)e.some(t=>t.from<=i&&t.to>=i)||e.push(t.lineBlockAt(i))
return e}const ea=U.define({create:()=>ii.none,update(t,e){t=t.map(e.changes)
for(let i of e.effects)i.is(Ql)&&!na(t,i.value.from,i.value.to)?t=t.update({add:[ca.range(i.value.from,i.value.to)]}):i.is(Zl)&&(t=t.update({filter:(t,e)=>i.value.from!=t||i.value.to!=e,filterFrom:i.value.from,filterTo:i.value.to}))
if(e.selection){let i=!1,{head:n}=e.selection.main
t.between(n,n,(t,e)=>{t<n&&e>n&&(i=!0)}),i&&(t=t.update({filterFrom:n,filterTo:n,filter:(t,e)=>e<=n||t>=n}))}return t},provide:t=>Ns.decorations.from(t),toJSON(t,e){let i=[]
return t.between(0,e.doc.length,(t,e)=>{i.push(t,e)}),i},fromJSON(t){if(!Array.isArray(t)||t.length%2)throw new RangeError("Invalid JSON for fold state")
let e=[]
for(let i=0;i<t.length;){let n=t[i++],s=t[i++]
if("number"!=typeof n||"number"!=typeof s)throw new RangeError("Invalid JSON for fold state")
e.push(ca.range(n,s))}return ii.set(e,!0)}})
function ia(t,e,i){var n
let s=null
return null===(n=t.field(ea,!1))||void 0===n||n.between(e,i,(t,e)=>{(!s||s.from>t)&&(s={from:t,to:e})}),s}function na(t,e,i){let n=!1
return t.between(e,e,(t,s)=>{t==e&&s==i&&(n=!0)}),n}function sa(t,e){return t.field(ea,!1)?e:e.concat(ft.appendConfig.of(ha()))}function ra(t,e,i=!0){let n=t.state.doc.lineAt(e.from).number,s=t.state.doc.lineAt(e.to).number
return Ns.announce.of(`${t.state.phrase(i?"Folded lines":"Unfolded lines")} ${n} ${t.state.phrase("to")} ${s}.`)}const oa=[{key:"Ctrl-Shift-[",mac:"Cmd-Alt-[",run:t=>{for(let e of ta(t)){let i=Xl(t.state,e.from,e.to)
if(i)return t.dispatch({effects:sa(t.state,[Ql.of(i),ra(t,i)])}),!0}return!1}},{key:"Ctrl-Shift-]",mac:"Cmd-Alt-]",run:t=>{if(!t.state.field(ea,!1))return!1
let e=[]
for(let i of ta(t)){let n=ia(t.state,i.from,i.to)
n&&e.push(Zl.of(n),ra(t,n,!1))}return e.length&&t.dispatch({effects:e}),e.length>0}},{key:"Ctrl-Alt-[",run:t=>{let{state:e}=t,i=[]
for(let n=0;n<e.doc.length;){let s=t.lineBlockAt(n),r=Xl(e,s.from,s.to)
r&&i.push(Ql.of(r)),n=(r?t.lineBlockAt(r.to):s).to+1}return i.length&&t.dispatch({effects:sa(t.state,i)}),!!i.length}},{key:"Ctrl-Alt-]",run:t=>{let e=t.state.field(ea,!1)
if(!e||!e.size)return!1
let i=[]
return e.between(0,t.state.doc.length,(t,e)=>{i.push(Zl.of({from:t,to:e}))}),t.dispatch({effects:i}),!0}}],la={placeholderDOM:null,placeholderText:"…"},aa=F.define({combine:t=>Ct(t,la)})
function ha(t){let e=[ea,da]
return t&&e.push(aa.of(t)),e}const ca=ii.replace({widget:new class extends ti{toDOM(t){let{state:e}=t,i=e.facet(aa),n=e=>{let i=t.lineBlockAt(t.posAtDOM(e.target)),n=ia(t.state,i.from,i.to)
n&&t.dispatch({effects:Zl.of(n)}),e.preventDefault()}
if(i.placeholderDOM)return i.placeholderDOM(t,n)
let s=document.createElement("span")
return s.textContent=i.placeholderText,s.setAttribute("aria-label",e.phrase("folded code")),s.title=e.phrase("unfold"),s.className="cm-foldPlaceholder",s.onclick=n,s}}}),ua={openText:"⌄",closedText:"›",markerDOM:null,domEventHandlers:{},foldingChanged:()=>!1}
class fa extends Jr{constructor(t,e){super(),this.config=t,this.open=e}eq(t){return this.config==t.config&&this.open==t.open}toDOM(t){if(this.config.markerDOM)return this.config.markerDOM(this.open)
let e=document.createElement("span")
return e.textContent=this.open?this.config.openText:this.config.closedText,e.title=t.state.phrase(this.open?"Fold line":"Unfold line"),e}}const da=Ns.baseTheme({".cm-foldPlaceholder":{backgroundColor:"#eee",border:"1px solid #ddd",color:"#888",borderRadius:".2em",margin:"0 1px",padding:"0 1px",cursor:"pointer"},".cm-foldGutter span":{padding:"0 1px",cursor:"pointer"}})
class pa{constructor(t,e){let i
function n(t){let e=$t.newName()
return(i||(i=Object.create(null)))["."+e]=t,e}this.specs=t
const s="string"==typeof e.all?e.all:e.all?n(e.all):void 0,r=e.scope
this.scope=r instanceof Sl?t=>t.prop(xl)==r.data:r?t=>t==r:void 0,this.style=el(t.map(t=>({tag:t.tag,class:t.class||n(Object.assign({},t,{tag:null}))})),{all:s}).style,this.module=i?new $t(i):null,this.themeType=e.themeType}static define(t,e){return new pa(t,e||{})}}const ma=F.define(),ga=F.define({combine:t=>t.length?[t[0]]:null})
function va(t){let e=t.facet(ma)
return e.length?e:t.facet(ga)}function wa(t,e){let i,n=[ya]
return t instanceof pa&&(t.module&&n.push(Ns.styleModule.of(t.module)),i=t.themeType),(null==e?void 0:e.fallback)?n.push(ga.of(t)):i?n.push(ma.computeN([Ns.darkTheme],e=>e.facet(Ns.darkTheme)==("dark"==i)?[t]:[])):n.push(ma.of(t)),n}const ya=J.high(Oi.fromClass(class{constructor(t){this.markCache=Object.create(null),this.tree=Ml(t.state),this.decorations=this.buildDeco(t,va(t.state))}update(t){let e=Ml(t.state),i=va(t.state),n=i!=va(t.startState)
e.length<t.view.viewport.to&&!n&&e.type==this.tree.type?this.decorations=this.decorations.map(t.changes):(e!=this.tree||t.viewportChanged||n)&&(this.tree=e,this.decorations=this.buildDeco(t.view,i))}buildDeco(t,e){if(!e||!this.tree.length)return ii.none
let i=new Et
for(let{from:n,to:s}of t.visibleRanges)il(this.tree,e,(t,e,n)=>{i.add(t,e,this.markCache[n]||(this.markCache[n]=ii.mark({class:n})))},n,s)
return i.finish()}},{decorations:t=>t.decorations})),ba=pa.define([{tag:yl.meta,color:"#404740"},{tag:yl.link,textDecoration:"underline"},{tag:yl.heading,textDecoration:"underline",fontWeight:"bold"},{tag:yl.emphasis,fontStyle:"italic"},{tag:yl.strong,fontWeight:"bold"},{tag:yl.strikethrough,textDecoration:"line-through"},{tag:yl.keyword,color:"#708"},{tag:[yl.atom,yl.bool,yl.url,yl.contentSeparator,yl.labelName],color:"#219"},{tag:[yl.literal,yl.inserted],color:"#164"},{tag:[yl.string,yl.deleted],color:"#a11"},{tag:[yl.regexp,yl.escape,yl.special(yl.string)],color:"#e40"},{tag:yl.definition(yl.variableName),color:"#00f"},{tag:yl.local(yl.variableName),color:"#30a"},{tag:[yl.typeName,yl.namespace],color:"#085"},{tag:yl.className,color:"#167"},{tag:[yl.special(yl.variableName),yl.macroName],color:"#256"},{tag:yl.definition(yl.propertyName),color:"#00c"},{tag:yl.comment,color:"#940"},{tag:yl.invalid,color:"#f00"}]),xa=Ns.baseTheme({"&.cm-focused .cm-matchingBracket":{backgroundColor:"#328c8252"},"&.cm-focused .cm-nonmatchingBracket":{backgroundColor:"#bb555544"}}),ka="()[]{}",Sa=F.define({combine:t=>Ct(t,{afterCursor:!0,brackets:ka,maxScanDistance:1e4,renderMatch:Aa})}),Ca=ii.mark({class:"cm-matchingBracket"}),Ma=ii.mark({class:"cm-nonmatchingBracket"})
function Aa(t){let e=[],i=t.matched?Ca:Ma
return e.push(i.range(t.start.from,t.start.to)),t.end&&e.push(i.range(t.end.from,t.end.to)),e}const Da=U.define({create:()=>ii.none,update(t,e){if(!e.docChanged&&!e.selection)return t
let i=[],n=e.state.facet(Sa)
for(let s of e.state.selection.ranges){if(!s.empty)continue
let t=Ba(e.state,s.head,-1,n)||s.head>0&&Ba(e.state,s.head-1,1,n)||n.afterCursor&&(Ba(e.state,s.head,1,n)||s.head<e.state.doc.length&&Ba(e.state,s.head+1,-1,n))
t&&(i=i.concat(n.renderMatch(t,e.state)))}return ii.set(i,!0)},provide:t=>Ns.decorations.from(t)}),Oa=[Da,xa],Ta=new bo
function Ea(t,e,i){let n=t.prop(e<0?bo.openedBy:bo.closedBy)
if(n)return n
if(1==t.name.length){let n=i.indexOf(t.name)
if(n>-1&&n%2==(e<0?1:0))return[i[n+e]]}return null}function Ra(t){let e=t.type.prop(Ta)
return e?e(t.node):t}function Ba(t,e,i,n={}){let s=n.maxScanDistance||1e4,r=n.brackets||ka,o=Ml(t),l=o.resolveInner(e,i)
for(let a=l;a;a=a.parent){let t=Ea(a.type,i,r)
if(t&&a.from<a.to){let n=Ra(a)
if(n&&(i>0?e>=n.from&&e<n.to:e>n.from&&e<=n.to))return La(0,0,i,a,n,t,r)}}return function(t,e,i,n,s,r,o){let l=i<0?t.sliceDoc(e-1,e):t.sliceDoc(e,e+1),a=o.indexOf(l)
if(a<0||a%2==0!=i>0)return null
let h={from:i<0?e-1:e,to:i>0?e+1:e},c=t.doc.iterRange(e,i>0?t.doc.length:0),u=0
for(let f=0;!c.next().done&&f<=r;){let t=c.value
i<0&&(f+=t.length)
let r=e+f*i
for(let e=i>0?0:t.length-1,l=i>0?t.length:-1;e!=l;e+=i){let l=o.indexOf(t[e])
if(!(l<0||n.resolveInner(r+e,1).type!=s))if(l%2==0==i>0)u++
else{if(1==u)return{start:h,end:{from:r+e,to:r+e+1},matched:l>>1==a>>1}
u--}}i>0&&(f+=t.length)}return c.done?{start:h,matched:!1}:null}(t,e,i,o,l.type,s,r)}function La(t,e,i,n,s,r,o){let l=n.parent,a={from:s.from,to:s.to},h=0,c=null==l?void 0:l.cursor()
if(c&&(i<0?c.childBefore(n.from):c.childAfter(n.to)))do{if(i<0?c.to<=n.from:c.from>=n.to){if(0==h&&r.indexOf(c.type.name)>-1&&c.from<c.to){let t=Ra(c)
return{start:a,end:t?{from:t.from,to:t.to}:void 0,matched:!0}}if(Ea(c.type,i,o))h++
else if(Ea(c.type,-i,o)){if(0==h){let t=Ra(c)
return{start:a,end:t&&t.from<t.to?{from:t.from,to:t.to}:void 0,matched:!1}}h--}}}while(i<0?c.prevSibling():c.nextSibling())
return{start:a,matched:!1}}const Pa=Object.create(null),Ia=[So.none],Na=[],Ha=Object.create(null)
for(let[ed,id]of[["variable","variableName"],["variable-2","variableName.special"],["string-2","string.special"],["def","variableName.definition"],["tag","tagName"],["attribute","attributeName"],["type","typeName"],["builtin","variableName.standard"],["qualifier","modifier"],["error","invalid"],["header","heading"],["property","propertyName"]])Ha[ed]=Va(Pa,id)
function Wa(t,e){Na.indexOf(t)>-1||(Na.push(t),console.warn(e))}function Va(t,e){let i=null
for(let r of e.split(".")){let e=t[r]||yl[r]
e?"function"==typeof e?i?i=e(i):Wa(r,`Modifier ${r} used at start of tag`):i?Wa(r,`Tag ${r} used as modifier`):i=e:Wa(r,`Unknown highlighting tag ${r}`)}if(!i)return 0
let n=e.replace(/ /g,"_"),s=So.define({id:Ia.length,name:n,props:[Qo({[n]:i})]})
return Ia.push(s),s.id}function Fa(t,e){return({state:i,dispatch:n})=>{if(i.readOnly)return!1
let s=t(e,i)
return!!s&&(n(i.update(s)),!0)}}const za=Fa(function(t,e,i=e.selection.ranges){let n=[],s=-1
for(let{from:r,to:o}of i){let t=n.length,i=1e9,l=ja(e,r).line
if(l){for(let t=r;t<=o;){let a=e.doc.lineAt(t)
if(a.from>s&&(r==o||o>a.from)){s=a.from
let t=/^\s*/.exec(a.text)[0].length,e=t==a.length,r=a.text.slice(t,t+l.length)==l?t:-1
t<a.text.length&&t<i&&(i=t),n.push({line:a,comment:r,token:l,indent:t,empty:e,single:!1})}t=a.to+1}if(i<1e9)for(let e=t;e<n.length;e++)n[e].indent<n[e].line.text.length&&(n[e].indent=i)
n.length==t+1&&(n[t].single=!0)}}if(2!=t&&n.some(t=>t.comment<0&&(!t.empty||t.single))){let t=[]
for(let{line:e,token:s,indent:r,empty:o,single:l}of n)!l&&o||t.push({from:e.from+r,insert:s+" "})
let i=e.changes(t)
return{changes:i,selection:e.selection.map(i,1)}}if(1!=t&&n.some(t=>t.comment>=0)){let t=[]
for(let{line:e,comment:i,token:s}of n)if(i>=0){let n=e.from+i,r=n+s.length
" "==e.text[r-e.from]&&r++,t.push({from:n,to:r})}return{changes:t}}return null},0),qa=Fa(Ka,0),_a=Fa((t,e)=>Ka(t,e,function(t){let e=[]
for(let i of t.selection.ranges){let n=t.doc.lineAt(i.from),s=i.to<=n.to?n:t.doc.lineAt(i.to),r=e.length-1
r>=0&&e[r].to>n.from?e[r].to=s.to:e.push({from:n.from+/^\s*/.exec(n.text)[0].length,to:s.to})}return e}(e)),0)
function ja(t,e){let i=t.languageDataAt("commentTokens",e)
return i.length?i[0]:{}}function Ka(t,e,i=e.selection.ranges){let n=i.map(t=>ja(e,t.from).block)
if(!n.every(t=>t))return null
let s=i.map((t,i)=>function(t,{open:e,close:i},n,s){let r,o,l=t.sliceDoc(n-50,n),a=t.sliceDoc(s,s+50),h=/\s*$/.exec(l)[0].length,c=/^\s*/.exec(a)[0].length,u=l.length-h
if(l.slice(u-e.length,u)==e&&a.slice(c,c+i.length)==i)return{open:{pos:n-h,margin:h&&1},close:{pos:s+c,margin:c&&1}}
s-n<=100?r=o=t.sliceDoc(n,s):(r=t.sliceDoc(n,n+50),o=t.sliceDoc(s-50,s))
let f=/^\s*/.exec(r)[0].length,d=/\s*$/.exec(o)[0].length,p=o.length-d-i.length
return r.slice(f,f+e.length)==e&&o.slice(p,p+i.length)==i?{open:{pos:n+f+e.length,margin:/\s/.test(r.charAt(f+e.length))?1:0},close:{pos:s-d-i.length,margin:/\s/.test(o.charAt(p-1))?1:0}}:null}(e,n[i],t.from,t.to))
if(2!=t&&!s.every(t=>t))return{changes:e.changes(i.map((t,e)=>s[e]?[]:[{from:t.from,insert:n[e].open+" "},{from:t.to,insert:" "+n[e].close}]))}
if(1!=t&&s.some(t=>t)){let t=[]
for(let e,i=0;i<s.length;i++)if(e=s[i]){let s=n[i],{open:r,close:o}=e
t.push({from:r.pos-s.open.length,to:r.pos+r.margin},{from:o.pos-o.margin,to:o.pos+s.close.length})}return{changes:t}}return null}const $a=ht.define(),Ua=ht.define(),Ga=F.define(),Ja=F.define({combine:t=>Ct(t,{minDepth:100,newGroupDelay:500,joinToEvent:(t,e)=>e},{minDepth:Math.max,newGroupDelay:Math.min,joinToEvent:(t,e)=>(i,n)=>t(i,n)||e(i,n)})}),Xa=U.define({create:()=>uh.empty,update(t,e){let i=e.state.facet(Ja),n=e.annotation($a)
if(n){let s=e.docChanged?H.single(function(t){let e=0
return t.iterChangedRanges((t,i)=>e=i),e}(e.changes)):void 0,r=ih.fromTransaction(e,s),o=n.side,l=0==o?t.undone:t.done
return l=r?nh(l,l.length,i.minDepth,r):oh(l,e.startState.selection),new uh(0==o?n.rest:l,0==o?l:n.rest)}let s=e.annotation(Ua)
if("full"!=s&&"before"!=s||(t=t.isolate()),!1===e.annotation(dt.addToHistory))return e.changes.empty?t:t.addMapping(e.changes.desc)
let r=ih.fromTransaction(e),o=e.annotation(dt.time),l=e.annotation(dt.userEvent)
return r?t=t.addChanges(r,o,l,i,e):e.selection&&(t=t.addSelection(e.startState.selection,o,l,i.newGroupDelay)),"full"!=s&&"after"!=s||(t=t.isolate()),t},toJSON:t=>({done:t.done.map(t=>t.toJSON()),undone:t.undone.map(t=>t.toJSON())}),fromJSON:t=>new uh(t.done.map(ih.fromJSON),t.undone.map(ih.fromJSON))})
function Ya(t,e){return function({state:i,dispatch:n}){if(!e&&i.readOnly)return!1
let s=i.field(Xa,!1)
if(!s)return!1
let r=s.pop(t,i,e)
return!!r&&(n(r),!0)}}const Qa=Ya(0,!1),Za=Ya(1,!1),th=Ya(0,!0),eh=Ya(1,!0)
class ih{constructor(t,e,i,n,s){this.changes=t,this.effects=e,this.mapped=i,this.startSelection=n,this.selectionsAfter=s}setSelAfter(t){return new ih(this.changes,this.effects,this.mapped,this.startSelection,t)}toJSON(){var t,e,i
return{changes:null===(t=this.changes)||void 0===t?void 0:t.toJSON(),mapped:null===(e=this.mapped)||void 0===e?void 0:e.toJSON(),startSelection:null===(i=this.startSelection)||void 0===i?void 0:i.toJSON(),selectionsAfter:this.selectionsAfter.map(t=>t.toJSON())}}static fromJSON(t){return new ih(t.changes&&T.fromJSON(t.changes),[],t.mapped&&O.fromJSON(t.mapped),t.startSelection&&H.fromJSON(t.startSelection),t.selectionsAfter.map(H.fromJSON))}static fromTransaction(t,e){let i=rh
for(let n of t.startState.facet(Ga)){let e=n(t)
e.length&&(i=i.concat(e))}return!i.length&&t.changes.empty?null:new ih(t.changes.invert(t.startState.doc),i,void 0,e||t.startState.selection,rh)}static selection(t){return new ih(void 0,rh,void 0,void 0,t)}}function nh(t,e,i,n){let s=e+1>i+20?e-i-1:0,r=t.slice(s,e)
return r.push(n),r}function sh(t,e){return t.length?e.length?t.concat(e):t:e}const rh=[]
function oh(t,e){if(t.length){let i=t[t.length-1],n=i.selectionsAfter.slice(Math.max(0,i.selectionsAfter.length-200))
return n.length&&n[n.length-1].eq(e)?t:(n.push(e),nh(t,t.length-1,1e9,i.setSelAfter(n)))}return[ih.selection([e])]}function lh(t){let e=t[t.length-1],i=t.slice()
return i[t.length-1]=e.setSelAfter(e.selectionsAfter.slice(0,e.selectionsAfter.length-1)),i}function ah(t,e){if(!t.length)return t
let i=t.length,n=rh
for(;i;){let s=hh(t[i-1],e,n)
if(s.changes&&!s.changes.empty||s.effects.length){let e=t.slice(0,i)
return e[i-1]=s,e}e=s.mapped,i--,n=s.selectionsAfter}return n.length?[ih.selection(n)]:rh}function hh(t,e,i){let n=sh(t.selectionsAfter.length?t.selectionsAfter.map(t=>t.map(e)):rh,i)
if(!t.changes)return ih.selection(n)
let s=t.changes.map(e),r=e.mapDesc(t.changes,!0),o=t.mapped?t.mapped.composeDesc(r):r
return new ih(s,ft.mapEffects(t.effects,e),o,t.startSelection.map(r),n)}const ch=/^(input\.type|delete)($|\.)/
class uh{constructor(t,e,i=0,n=void 0){this.done=t,this.undone=e,this.prevTime=i,this.prevUserEvent=n}isolate(){return this.prevTime?new uh(this.done,this.undone):this}addChanges(t,e,i,n,s){let r=this.done,o=r[r.length-1]
return r=o&&o.changes&&!o.changes.empty&&t.changes&&(!i||ch.test(i))&&(!o.selectionsAfter.length&&e-this.prevTime<n.newGroupDelay&&n.joinToEvent(s,function(t,e){let i=[],n=!1
return t.iterChangedRanges((t,e)=>i.push(t,e)),e.iterChangedRanges((t,e,s,r)=>{for(let o=0;o<i.length;){let t=i[o++],e=i[o++]
r>=t&&s<=e&&(n=!0)}}),n}(o.changes,t.changes))||"input.type.compose"==i)?nh(r,r.length-1,n.minDepth,new ih(t.changes.compose(o.changes),sh(t.effects,o.effects),o.mapped,o.startSelection,rh)):nh(r,r.length,n.minDepth,t),new uh(r,rh,e,i)}addSelection(t,e,i,n){let s=this.done.length?this.done[this.done.length-1].selectionsAfter:rh
return s.length>0&&e-this.prevTime<n&&i==this.prevUserEvent&&i&&/^select($|\.)/.test(i)&&(r=s[s.length-1],o=t,r.ranges.length==o.ranges.length&&0===r.ranges.filter((t,e)=>t.empty!=o.ranges[e].empty).length)?this:new uh(oh(this.done,t),this.undone,e,i)
var r,o}addMapping(t){return new uh(ah(this.done,t),ah(this.undone,t),this.prevTime,this.prevUserEvent)}pop(t,e,i){let n=0==t?this.done:this.undone
if(0==n.length)return null
let s=n[n.length-1]
if(i&&s.selectionsAfter.length)return e.update({selection:s.selectionsAfter[s.selectionsAfter.length-1],annotations:$a.of({side:t,rest:lh(n)}),userEvent:0==t?"select.undo":"select.redo",scrollIntoView:!0})
if(s.changes){let i=1==n.length?rh:n.slice(0,n.length-1)
return s.mapped&&(i=ah(i,s.mapped)),e.update({changes:s.changes,selection:s.startSelection,effects:s.effects,annotations:$a.of({side:t,rest:i}),filter:!1,userEvent:0==t?"undo":"redo",scrollIntoView:!0})}return null}}uh.empty=new uh(rh,rh)
const fh=[{key:"Mod-z",run:Qa,preventDefault:!0},{key:"Mod-y",mac:"Mod-Shift-z",run:Za,preventDefault:!0},{linux:"Ctrl-Shift-z",run:Za,preventDefault:!0},{key:"Mod-u",run:th,preventDefault:!0},{key:"Alt-u",mac:"Mod-Shift-u",run:eh,preventDefault:!0}]
function dh(t,e){return H.create(t.ranges.map(e),t.mainIndex)}function ph(t,e){return t.update({selection:e,scrollIntoView:!0,userEvent:"select"})}function mh({state:t,dispatch:e},i){let n=dh(t.selection,i)
return!n.eq(t.selection)&&(e(ph(t,n)),!0)}function gh(t,e){return H.cursor(e?t.to:t.from)}function vh(t,e){return mh(t,i=>i.empty?t.moveByChar(i,e):gh(i,e))}function wh(t){return t.textDirectionAt(t.state.selection.main.head)==zi.LTR}const yh=t=>vh(t,!wh(t)),bh=t=>vh(t,wh(t))
function xh(t,e){return mh(t,i=>i.empty?t.moveByGroup(i,e):gh(i,e))}function kh(t,e,i){if(e.type.prop(i))return!0
let n=e.to-e.from
return n&&(n>2||/[^\s,.;:]/.test(t.sliceDoc(e.from,e.to)))||e.firstChild}function Sh(t,e,i){let n,s,r=Ml(t).resolveInner(e.head),o=i?bo.closedBy:bo.openedBy
for(let l=e.head;;){let e=i?r.childAfter(l):r.childBefore(l)
if(!e)break
kh(t,e,o)?r=e:l=i?e.to:e.from}return s=r.type.prop(o)&&(n=i?Ba(t,r.from,1):Ba(t,r.to,-1))&&n.matched?i?n.end.to:n.end.from:i?r.to:r.from,H.cursor(s,i?-1:1)}function Ch(t,e){return mh(t,i=>{if(!i.empty)return gh(i,e)
let n=t.moveVertically(i,e)
return n.head!=i.head?n:t.moveToLineBoundary(i,e)})}const Mh=t=>Ch(t,!1),Ah=t=>Ch(t,!0)
function Dh(t){let e,i=t.scrollDOM.clientHeight<t.scrollDOM.scrollHeight-2,n=0,s=0
if(i){for(let e of t.state.facet(Ns.scrollMargins)){let i=e(t);(null==i?void 0:i.top)&&(n=Math.max(null==i?void 0:i.top,n)),(null==i?void 0:i.bottom)&&(s=Math.max(null==i?void 0:i.bottom,s))}e=t.scrollDOM.clientHeight-n-s}else e=(t.dom.ownerDocument.defaultView||window).innerHeight
return{marginTop:n,marginBottom:s,selfScroll:i,height:Math.max(t.defaultLineHeight,e-5)}}function Oh(t,e){let i,n=Dh(t),{state:s}=t,r=dh(s.selection,i=>i.empty?t.moveVertically(i,e,n.height):gh(i,e))
if(r.eq(s.selection))return!1
if(n.selfScroll){let e=t.coordsAtPos(s.selection.main.head),o=t.scrollDOM.getBoundingClientRect(),l=o.top+n.marginTop,a=o.bottom-n.marginBottom
e&&e.top>l&&e.bottom<a&&(i=Ns.scrollIntoView(r.main.head,{y:"start",yMargin:e.top-l}))}return t.dispatch(ph(s,r),{effects:i}),!0}const Th=t=>Oh(t,!1),Eh=t=>Oh(t,!0)
function Rh(t,e,i){let n=t.lineBlockAt(e.head),s=t.moveToLineBoundary(e,i)
if(s.head==e.head&&s.head!=(i?n.to:n.from)&&(s=t.moveToLineBoundary(e,i,!1)),!i&&s.head==n.from&&n.length){let i=/^\s*/.exec(t.state.sliceDoc(n.from,Math.min(n.from+100,n.to)))[0].length
i&&e.head!=n.from+i&&(s=H.cursor(n.from+i))}return s}function Bh(t,e){let i=dh(t.state.selection,t=>{let i=e(t)
return H.range(t.anchor,i.head,i.goalColumn,i.bidiLevel||void 0)})
return!i.eq(t.state.selection)&&(t.dispatch(ph(t.state,i)),!0)}function Lh(t,e){return Bh(t,i=>t.moveByChar(i,e))}const Ph=t=>Lh(t,!wh(t)),Ih=t=>Lh(t,wh(t))
function Nh(t,e){return Bh(t,i=>t.moveByGroup(i,e))}function Hh(t,e){return Bh(t,i=>t.moveVertically(i,e))}const Wh=t=>Hh(t,!1),Vh=t=>Hh(t,!0)
function Fh(t,e){return Bh(t,i=>t.moveVertically(i,e,Dh(t).height))}const zh=t=>Fh(t,!1),qh=t=>Fh(t,!0),_h=({state:t,dispatch:e})=>(e(ph(t,{anchor:0})),!0),jh=({state:t,dispatch:e})=>(e(ph(t,{anchor:t.doc.length})),!0),Kh=({state:t,dispatch:e})=>(e(ph(t,{anchor:t.selection.main.anchor,head:0})),!0),$h=({state:t,dispatch:e})=>(e(ph(t,{anchor:t.selection.main.anchor,head:t.doc.length})),!0)
function Uh(t,e){if(t.state.readOnly)return!1
let i="delete.selection",{state:n}=t,s=n.changeByRange(n=>{let{from:s,to:r}=n
if(s==r){let n=e(s)
n<s?(i="delete.backward",n=Gh(t,n,!1)):n>s&&(i="delete.forward",n=Gh(t,n,!0)),s=Math.min(s,n),r=Math.max(r,n)}else s=Gh(t,s,!1),r=Gh(t,r,!0)
return s==r?{range:n}:{changes:{from:s,to:r},range:H.cursor(s)}})
return!s.changes.empty&&(t.dispatch(n.update(s,{scrollIntoView:!0,userEvent:i,effects:"delete.selection"==i?Ns.announce.of(n.phrase("Selection deleted")):void 0})),!0)}function Gh(t,e,i){if(t instanceof Ns)for(let n of t.state.facet(Ns.atomicRanges).map(e=>e(t)))n.between(e,e,(t,n)=>{t<e&&n>e&&(e=i?n:t)})
return e}const Jh=(t,e)=>Uh(t,i=>{let n,s,{state:r}=t,o=r.doc.lineAt(i)
if(!e&&i>o.from&&i<o.from+200&&!/[^ \t]/.test(n=o.text.slice(0,i-o.from))){if("\t"==n[n.length-1])return i-1
let t=zt(n,r.tabSize)%Hl(r)||Hl(r)
for(let e=0;e<t&&" "==n[n.length-1-e];e++)i--
s=i}else s=w(o.text,i-o.from,e,e)+o.from,s==i&&o.number!=(e?r.doc.lines:1)&&(s+=e?1:-1)
return s}),Xh=t=>Jh(t,!1),Yh=t=>Jh(t,!0),Qh=(t,e)=>Uh(t,i=>{let n=i,{state:s}=t,r=s.doc.lineAt(n),o=s.charCategorizer(n)
for(let t=null;;){if(n==(e?r.to:r.from)){n==i&&r.number!=(e?s.doc.lines:1)&&(n+=e?1:-1)
break}let l=w(r.text,n-r.from,e)+r.from,a=r.text.slice(Math.min(n,l)-r.from,Math.max(n,l)-r.from),h=o(a)
if(null!=t&&h!=t)break
" "==a&&n==i||(t=h),n=l}return n}),Zh=t=>Qh(t,!1),tc=t=>Uh(t,e=>{let i=t.lineBlockAt(e).to
return e<i?i:Math.min(t.state.doc.length,e+1)})
function ec(t){let e=[],i=-1
for(let n of t.selection.ranges){let s=t.doc.lineAt(n.from),r=t.doc.lineAt(n.to)
if(n.empty||n.to!=r.from||(r=t.doc.lineAt(n.to-1)),i>=s.number){let t=e[e.length-1]
t.to=r.to,t.ranges.push(n)}else e.push({from:s.from,to:r.to,ranges:[n]})
i=r.number+1}return e}function ic(t,e,i){if(t.readOnly)return!1
let n=[],s=[]
for(let r of ec(t)){if(i?r.to==t.doc.length:0==r.from)continue
let e=t.doc.lineAt(i?r.to+1:r.from-1),o=e.length+1
if(i){n.push({from:r.to,to:e.to},{from:r.from,insert:e.text+t.lineBreak})
for(let e of r.ranges)s.push(H.range(Math.min(t.doc.length,e.anchor+o),Math.min(t.doc.length,e.head+o)))}else{n.push({from:e.from,to:r.from},{from:r.to,insert:t.lineBreak+e.text})
for(let t of r.ranges)s.push(H.range(t.anchor-o,t.head-o))}}return!!n.length&&(e(t.update({changes:n,scrollIntoView:!0,selection:H.create(s,t.selection.mainIndex),userEvent:"move.line"})),!0)}function nc(t,e,i){if(t.readOnly)return!1
let n=[]
for(let s of ec(t))i?n.push({from:s.from,insert:t.doc.slice(s.from,s.to)+t.lineBreak}):n.push({from:s.to,insert:t.lineBreak+t.doc.slice(s.from,s.to)})
return e(t.update({changes:n,scrollIntoView:!0,userEvent:"input.copyline"})),!0}const sc=rc(!1)
function rc(t){return({state:e,dispatch:i})=>{if(e.readOnly)return!1
let n=e.changeByRange(i=>{let{from:n,to:s}=i,r=e.doc.lineAt(n),l=!t&&n==s&&function(t,e){if(/\(\)|\[\]|\{\}/.test(t.sliceDoc(e-1,e+1)))return{from:e,to:e}
let i,n=Ml(t).resolveInner(e),s=n.childBefore(e),r=n.childAfter(e)
return s&&r&&s.to<=e&&r.from>=e&&(i=s.type.prop(bo.closedBy))&&i.indexOf(r.name)>-1&&t.doc.lineAt(s.to).from==t.doc.lineAt(r.from).from?{from:s.to,to:r.from}:null}(e,n)
t&&(n=s=(s<=r.to?r:e.doc.lineAt(s)).to)
let a=new Fl(e,{simulateBreak:n,simulateDoubleBreak:!!l}),h=Vl(a,n)
for(null==h&&(h=/^\s*/.exec(e.doc.lineAt(n).text)[0].length);s<r.to&&/\s/.test(r.text[s-r.from]);)s++
l?({from:n,to:s}=l):n>r.from&&n<r.from+100&&!/\S/.test(r.text.slice(0,n))&&(n=r.from)
let c=["",Wl(e,h)]
return l&&c.push(Wl(e,a.lineIndent(r.from,-1))),{changes:{from:n,to:s,insert:o.of(c)},range:H.cursor(n+1+c[1].length)}})
return i(e.update(n,{scrollIntoView:!0,userEvent:"input"})),!0}}function oc(t,e){let i=-1
return t.changeByRange(n=>{let s=[]
for(let o=n.from;o<=n.to;){let r=t.doc.lineAt(o)
r.number>i&&(n.empty||n.to>r.from)&&(e(r,s,n),i=r.number),o=r.to+1}let r=t.changes(s)
return{changes:s,range:H.range(r.mapPos(n.anchor,1),r.mapPos(n.head,1))}})}const lc=({state:t,dispatch:e})=>!t.readOnly&&(e(t.update(oc(t,(e,i)=>{i.push({from:e.from,insert:t.facet(Nl)})}),{userEvent:"input.indent"})),!0),ac=({state:t,dispatch:e})=>!t.readOnly&&(e(t.update(oc(t,(e,i)=>{let n=/^\s*/.exec(e.text)[0]
if(!n)return
let s=zt(n,t.tabSize),r=0,o=Wl(t,Math.max(0,s-Hl(t)))
for(;r<n.length&&r<o.length&&n.charCodeAt(r)==o.charCodeAt(r);)r++
i.push({from:e.from+r,to:e.from+n.length,insert:o.slice(r)})}),{userEvent:"delete.dedent"})),!0),hc=[{key:"Alt-ArrowLeft",mac:"Ctrl-ArrowLeft",run:t=>mh(t,e=>Sh(t.state,e,!wh(t))),shift:t=>Bh(t,e=>Sh(t.state,e,!wh(t)))},{key:"Alt-ArrowRight",mac:"Ctrl-ArrowRight",run:t=>mh(t,e=>Sh(t.state,e,wh(t))),shift:t=>Bh(t,e=>Sh(t.state,e,wh(t)))},{key:"Alt-ArrowUp",run:({state:t,dispatch:e})=>ic(t,e,!1)},{key:"Shift-Alt-ArrowUp",run:({state:t,dispatch:e})=>nc(t,e,!1)},{key:"Alt-ArrowDown",run:({state:t,dispatch:e})=>ic(t,e,!0)},{key:"Shift-Alt-ArrowDown",run:({state:t,dispatch:e})=>nc(t,e,!0)},{key:"Escape",run:({state:t,dispatch:e})=>{let i=t.selection,n=null
return i.ranges.length>1?n=H.create([i.main]):i.main.empty||(n=H.create([H.cursor(i.main.head)])),!!n&&(e(ph(t,n)),!0)}},{key:"Mod-Enter",run:rc(!0)},{key:"Alt-l",mac:"Ctrl-l",run:({state:t,dispatch:e})=>{let i=ec(t).map(({from:e,to:i})=>H.range(e,Math.min(i+1,t.doc.length)))
return e(t.update({selection:H.create(i),userEvent:"select"})),!0}},{key:"Mod-i",run:({state:t,dispatch:e})=>{let i=dh(t.selection,e=>{var i
let n=Ml(t).resolveInner(e.head,1)
for(;!(n.from<e.from&&n.to>=e.to||n.to>e.to&&n.from<=e.from)&&(null===(i=n.parent)||void 0===i?void 0:i.parent);)n=n.parent
return H.range(n.to,n.from)})
return e(ph(t,i)),!0},preventDefault:!0},{key:"Mod-[",run:ac},{key:"Mod-]",run:lc},{key:"Mod-Alt-\\",run:({state:t,dispatch:e})=>{if(t.readOnly)return!1
let i=Object.create(null),n=new Fl(t,{overrideIndentation:t=>{let e=i[t]
return null==e?-1:e}}),s=oc(t,(e,s,r)=>{let o=Vl(n,e.from)
if(null==o)return;/\S/.test(e.text)||(o=0)
let l=/^\s*/.exec(e.text)[0],a=Wl(t,o);(l!=a||r.from<e.from+l.length)&&(i[e.from]=o,s.push({from:e.from,to:e.from+l.length,insert:a}))})
return s.changes.empty||e(t.update(s,{userEvent:"indent"})),!0}},{key:"Shift-Mod-k",run:t=>{if(t.state.readOnly)return!1
let{state:e}=t,i=e.changes(ec(e).map(({from:t,to:i})=>(t>0?t--:i<e.doc.length&&i++,{from:t,to:i}))),n=dh(e.selection,e=>t.moveVertically(e,!0)).map(i)
return t.dispatch({changes:i,selection:n,scrollIntoView:!0,userEvent:"delete.line"}),!0}},{key:"Shift-Mod-\\",run:({state:t,dispatch:e})=>function(t,e){let i=!1,n=dh(t.selection,e=>{let n=Ba(t,e.head,-1)||Ba(t,e.head,1)||e.head>0&&Ba(t,e.head-1,1)||e.head<t.doc.length&&Ba(t,e.head+1,-1)
if(!n||!n.end)return e
i=!0
let s=n.start.from==e.head?n.end.to:n.end.from
return H.cursor(s)})
return!!i&&(e(ph(t,n)),!0)}(t,e)},{key:"Mod-/",run:t=>{let{state:e}=t,i=e.doc.lineAt(e.selection.main.from),n=ja(t.state,i.from)
return n.line?za(t):!!n.block&&_a(t)}},{key:"Alt-A",run:qa}].concat([{key:"ArrowLeft",run:yh,shift:Ph,preventDefault:!0},{key:"Mod-ArrowLeft",mac:"Alt-ArrowLeft",run:t=>xh(t,!wh(t)),shift:t=>Nh(t,!wh(t)),preventDefault:!0},{mac:"Cmd-ArrowLeft",run:t=>mh(t,e=>Rh(t,e,!wh(t))),shift:t=>Bh(t,e=>Rh(t,e,!wh(t))),preventDefault:!0},{key:"ArrowRight",run:bh,shift:Ih,preventDefault:!0},{key:"Mod-ArrowRight",mac:"Alt-ArrowRight",run:t=>xh(t,wh(t)),shift:t=>Nh(t,wh(t)),preventDefault:!0},{mac:"Cmd-ArrowRight",run:t=>mh(t,e=>Rh(t,e,wh(t))),shift:t=>Bh(t,e=>Rh(t,e,wh(t))),preventDefault:!0},{key:"ArrowUp",run:Mh,shift:Wh,preventDefault:!0},{mac:"Cmd-ArrowUp",run:_h,shift:Kh},{mac:"Ctrl-ArrowUp",run:Th,shift:zh},{key:"ArrowDown",run:Ah,shift:Vh,preventDefault:!0},{mac:"Cmd-ArrowDown",run:jh,shift:$h},{mac:"Ctrl-ArrowDown",run:Eh,shift:qh},{key:"PageUp",run:Th,shift:zh},{key:"PageDown",run:Eh,shift:qh},{key:"Home",run:t=>mh(t,e=>Rh(t,e,!1)),shift:t=>Bh(t,e=>Rh(t,e,!1)),preventDefault:!0},{key:"Mod-Home",run:_h,shift:Kh},{key:"End",run:t=>mh(t,e=>Rh(t,e,!0)),shift:t=>Bh(t,e=>Rh(t,e,!0)),preventDefault:!0},{key:"Mod-End",run:jh,shift:$h},{key:"Enter",run:sc},{key:"Mod-a",run:({state:t,dispatch:e})=>(e(t.update({selection:{anchor:0,head:t.doc.length},userEvent:"select"})),!0)},{key:"Backspace",run:Xh,shift:Xh},{key:"Delete",run:Yh},{key:"Mod-Backspace",mac:"Alt-Backspace",run:Zh},{key:"Mod-Delete",mac:"Alt-Delete",run:t=>Qh(t,!0)},{mac:"Mod-Backspace",run:t=>Uh(t,e=>{let i=t.lineBlockAt(e).from
return e>i?i:Math.max(0,e-1)})},{mac:"Mod-Delete",run:tc}].concat([{key:"Ctrl-b",run:yh,shift:Ph,preventDefault:!0},{key:"Ctrl-f",run:bh,shift:Ih},{key:"Ctrl-p",run:Mh,shift:Wh},{key:"Ctrl-n",run:Ah,shift:Vh},{key:"Ctrl-a",run:t=>mh(t,e=>H.cursor(t.lineBlockAt(e.head).from,1)),shift:t=>Bh(t,e=>H.cursor(t.lineBlockAt(e.head).from))},{key:"Ctrl-e",run:t=>mh(t,e=>H.cursor(t.lineBlockAt(e.head).to,-1)),shift:t=>Bh(t,e=>H.cursor(t.lineBlockAt(e.head).to))},{key:"Ctrl-d",run:Yh},{key:"Ctrl-h",run:Xh},{key:"Ctrl-k",run:tc},{key:"Ctrl-Alt-h",run:Zh},{key:"Ctrl-o",run:({state:t,dispatch:e})=>{if(t.readOnly)return!1
let i=t.changeByRange(t=>({changes:{from:t.from,to:t.to,insert:o.of(["",""])},range:H.cursor(t.from)}))
return e(t.update(i,{scrollIntoView:!0,userEvent:"input"})),!0}},{key:"Ctrl-t",run:({state:t,dispatch:e})=>{if(t.readOnly)return!1
let i=t.changeByRange(e=>{if(!e.empty||0==e.from||e.from==t.doc.length)return{range:e}
let i=e.from,n=t.doc.lineAt(i),s=i==n.from?i-1:w(n.text,i-n.from,!1)+n.from,r=i==n.to?i+1:w(n.text,i-n.from,!0)+n.from
return{changes:{from:s,to:r,insert:t.doc.slice(i,r).append(t.doc.slice(s,i))},range:H.cursor(r)}})
return!i.changes.empty&&(e(t.update(i,{scrollIntoView:!0,userEvent:"move.character"})),!0)}},{key:"Ctrl-v",run:Eh}].map(t=>({mac:t.key,run:t.run,shift:t.shift})))),cc={key:"Tab",run:lc,shift:ac}
function uc(){var t=arguments[0]
"string"==typeof t&&(t=document.createElement(t))
var e=1,i=arguments[1]
if(i&&"object"==typeof i&&null==i.nodeType&&!Array.isArray(i)){for(var n in i)if(Object.prototype.hasOwnProperty.call(i,n)){var s=i[n]
"string"==typeof s?t.setAttribute(n,s):null!=s&&(t[n]=s)}e++}for(;e<arguments.length;e++)fc(t,arguments[e])
return t}function fc(t,e){if("string"==typeof e)t.appendChild(document.createTextNode(e))
else if(null==e);else if(null!=e.nodeType)t.appendChild(e)
else{if(!Array.isArray(e))throw new RangeError("Unsupported child node: "+e)
for(var i=0;i<e.length;i++)fc(t,e[i])}}const dc="function"==typeof String.prototype.normalize?t=>t.normalize("NFKD"):t=>t
class pc{constructor(t,e,i=0,n=t.length,s,r){this.test=r,this.value={from:0,to:0},this.done=!1,this.matches=[],this.buffer="",this.bufferPos=0,this.iter=t.iterRange(i,n),this.bufferStart=i,this.normalize=s?t=>s(dc(t)):dc,this.query=this.normalize(e)}peek(){if(this.bufferPos==this.buffer.length){if(this.bufferStart+=this.buffer.length,this.iter.next(),this.iter.done)return-1
this.bufferPos=0,this.buffer=this.iter.value}return S(this.buffer,this.bufferPos)}next(){for(;this.matches.length;)this.matches.pop()
return this.nextOverlapping()}nextOverlapping(){for(;;){let t=this.peek()
if(t<0)return this.done=!0,this
let e=C(t),i=this.bufferStart+this.bufferPos
this.bufferPos+=M(t)
let n=this.normalize(e)
for(let s=0,r=i;;s++){let t=n.charCodeAt(s),o=this.match(t,r)
if(s==n.length-1){if(o)return this.value=o,this
break}r==i&&s<e.length&&e.charCodeAt(s)==t&&r++}}}match(t,e){let i=null
for(let n=0;n<this.matches.length;n+=2){let s=this.matches[n],r=!1
this.query.charCodeAt(s)==t&&(s==this.query.length-1?i={from:this.matches[n+1],to:e+1}:(this.matches[n]++,r=!0)),r||(this.matches.splice(n,2),n-=2)}return this.query.charCodeAt(0)==t&&(1==this.query.length?i={from:e,to:e+1}:this.matches.push(1,e)),i&&this.test&&!this.test(i.from,i.to,this.buffer,this.bufferPos)&&(i=null),i}}"undefined"!=typeof Symbol&&(pc.prototype[Symbol.iterator]=function(){return this})
const mc={from:-1,to:-1,match:/.*/.exec("")},gc="gm"+(null==/x/.unicode?"":"u")
class vc{constructor(t,e,i,n=0,s=t.length){if(this.text=t,this.to=s,this.curLine="",this.done=!1,this.value=mc,/\\[sWDnr]|\n|\r|\[\^/.test(e))return new bc(t,e,i,n,s)
this.re=new RegExp(e,gc+((null==i?void 0:i.ignoreCase)?"i":"")),this.test=null==i?void 0:i.test,this.iter=t.iter()
let r=t.lineAt(n)
this.curLineStart=r.from,this.matchPos=xc(t,n),this.getLine(this.curLineStart)}getLine(t){this.iter.next(t),this.iter.lineBreak?this.curLine="":(this.curLine=this.iter.value,this.curLineStart+this.curLine.length>this.to&&(this.curLine=this.curLine.slice(0,this.to-this.curLineStart)),this.iter.next())}nextLine(){this.curLineStart=this.curLineStart+this.curLine.length+1,this.curLineStart>this.to?this.curLine="":this.getLine(0)}next(){for(let t=this.matchPos-this.curLineStart;;){this.re.lastIndex=t
let e=this.matchPos<=this.to&&this.re.exec(this.curLine)
if(e){let i=this.curLineStart+e.index,n=i+e[0].length
if(this.matchPos=xc(this.text,n+(i==n?1:0)),i==this.curLineStart+this.curLine.length&&this.nextLine(),(i<n||i>this.value.to)&&(!this.test||this.test(i,n,e)))return this.value={from:i,to:n,match:e},this
t=this.matchPos-this.curLineStart}else{if(!(this.curLineStart+this.curLine.length<this.to))return this.done=!0,this
this.nextLine(),t=0}}}}const wc=new WeakMap
class yc{constructor(t,e){this.from=t,this.text=e}get to(){return this.from+this.text.length}static get(t,e,i){let n=wc.get(t)
if(!n||n.from>=i||n.to<=e){let n=new yc(e,t.sliceString(e,i))
return wc.set(t,n),n}if(n.from==e&&n.to==i)return n
let{text:s,from:r}=n
return r>e&&(s=t.sliceString(e,r)+s,r=e),n.to<i&&(s+=t.sliceString(n.to,i)),wc.set(t,new yc(r,s)),new yc(e,s.slice(e-r,i-r))}}class bc{constructor(t,e,i,n,s){this.text=t,this.to=s,this.done=!1,this.value=mc,this.matchPos=xc(t,n),this.re=new RegExp(e,gc+((null==i?void 0:i.ignoreCase)?"i":"")),this.test=null==i?void 0:i.test,this.flat=yc.get(t,n,this.chunkEnd(n+5e3))}chunkEnd(t){return t>=this.to?this.to:this.text.lineAt(t).to}next(){for(;;){let t=this.re.lastIndex=this.matchPos-this.flat.from,e=this.re.exec(this.flat.text)
if(e&&!e[0]&&e.index==t&&(this.re.lastIndex=t+1,e=this.re.exec(this.flat.text)),e){let t=this.flat.from+e.index,i=t+e[0].length
if((this.flat.to>=this.to||e.index+e[0].length<=this.flat.text.length-10)&&(!this.test||this.test(t,i,e)))return this.value={from:t,to:i,match:e},this.matchPos=xc(this.text,i+(t==i?1:0)),this}if(this.flat.to==this.to)return this.done=!0,this
this.flat=yc.get(this.text,this.flat.from,this.chunkEnd(this.flat.from+2*this.flat.text.length))}}}function xc(t,e){if(e>=t.length)return e
let i,n=t.lineAt(e)
for(;e<n.to&&(i=n.text.charCodeAt(e-n.from))>=56320&&i<57344;)e++
return e}function kc(t){let e=uc("input",{class:"cm-textfield",name:"line"})
function i(){let i=/^([+-])?(\d+)?(:\d+)?(%)?$/.exec(e.value)
if(!i)return
let{state:n}=t,s=n.doc.lineAt(n.selection.main.head),[,r,o,l,a]=i,h=l?+l.slice(1):0,c=o?+o:s.number
if(o&&a){let t=c/100
r&&(t=t*("-"==r?-1:1)+s.number/n.doc.lines),c=Math.round(n.doc.lines*t)}else o&&r&&(c=c*("-"==r?-1:1)+s.number)
let u=n.doc.line(Math.max(1,Math.min(n.doc.lines,c))),f=H.cursor(u.from+Math.max(0,Math.min(h,u.length)))
t.dispatch({effects:[Sc.of(!1),Ns.scrollIntoView(f.from,{y:"center"})],selection:f}),t.focus()}return{dom:uc("form",{class:"cm-gotoLine",onkeydown:e=>{27==e.keyCode?(e.preventDefault(),t.dispatch({effects:Sc.of(!1)}),t.focus()):13==e.keyCode&&(e.preventDefault(),i())},onsubmit:t=>{t.preventDefault(),i()}},uc("label",t.state.phrase("Go to line"),": ",e)," ",uc("button",{class:"cm-button",type:"submit"},t.state.phrase("go")))}}"undefined"!=typeof Symbol&&(vc.prototype[Symbol.iterator]=bc.prototype[Symbol.iterator]=function(){return this})
const Sc=ft.define(),Cc=U.define({create:()=>!0,update(t,e){for(let i of e.effects)i.is(Sc)&&(t=i.value)
return t},provide:t=>Gr.from(t,t=>t?kc:null)}),Mc=Ns.baseTheme({".cm-panel.cm-gotoLine":{padding:"2px 6px 4px","& label":{fontSize:"80%"}}}),Ac={highlightWordAroundCursor:!1,minSelectionLength:1,maxMatches:100,wholeWords:!1},Dc=F.define({combine:t=>Ct(t,Ac,{highlightWordAroundCursor:(t,e)=>t||e,minSelectionLength:Math.min,maxMatches:Math.min})}),Oc=ii.mark({class:"cm-selectionMatch"}),Tc=ii.mark({class:"cm-selectionMatch cm-selectionMatch-main"})
function Ec(t,e,i,n){return!(0!=i&&t(e.sliceDoc(i-1,i))==bt.Word||n!=e.doc.length&&t(e.sliceDoc(n,n+1))==bt.Word)}const Rc=Oi.fromClass(class{constructor(t){this.decorations=this.getDeco(t)}update(t){(t.selectionSet||t.docChanged||t.viewportChanged)&&(this.decorations=this.getDeco(t.view))}getDeco(t){let e=t.state.facet(Dc),{state:i}=t,n=i.selection
if(n.ranges.length>1)return ii.none
let s,r=n.main,o=null
if(r.empty){if(!e.highlightWordAroundCursor)return ii.none
let t=i.wordAt(r.head)
if(!t)return ii.none
o=i.charCategorizer(r.head),s=i.sliceDoc(t.from,t.to)}else{let t=r.to-r.from
if(t<e.minSelectionLength||t>200)return ii.none
if(e.wholeWords){if(s=i.sliceDoc(r.from,r.to),o=i.charCategorizer(r.head),!Ec(o,i,r.from,r.to)||!function(t,e,i,n){return t(e.sliceDoc(i,i+1))==bt.Word&&t(e.sliceDoc(n-1,n))==bt.Word}(o,i,r.from,r.to))return ii.none}else if(s=i.sliceDoc(r.from,r.to).trim(),!s)return ii.none}let l=[]
for(let a of t.visibleRanges){let t=new pc(i.doc,s,a.from,a.to)
for(;!t.next().done;){let{from:n,to:s}=t.value
if((!o||Ec(o,i,n,s))&&(r.empty&&n<=r.from&&s>=r.to?l.push(Tc.range(n,s)):(n>=r.to||s<=r.from)&&l.push(Oc.range(n,s)),l.length>e.maxMatches))return ii.none}}return ii.set(l)}},{decorations:t=>t.decorations}),Bc=Ns.baseTheme({".cm-selectionMatch":{backgroundColor:"#99ff7780"},".cm-searchMatch .cm-selectionMatch":{backgroundColor:"transparent"}}),Lc=F.define({combine:t=>Ct(t,{top:!1,caseSensitive:!1,literal:!1,regexp:!1,wholeWord:!1,createPanel:t=>new au(t),scrollToMatch:t=>Ns.scrollIntoView(t)})})
class Pc{constructor(t){this.search=t.search,this.caseSensitive=!!t.caseSensitive,this.literal=!!t.literal,this.regexp=!!t.regexp,this.replace=t.replace||"",this.valid=!!this.search&&(!this.regexp||function(t){try{return new RegExp(t,gc),!0}catch(t){return!1}}(this.search)),this.unquoted=this.unquote(this.search),this.wholeWord=!!t.wholeWord}unquote(t){return this.literal?t:t.replace(/\\([nrt\\])/g,(t,e)=>"n"==e?"\n":"r"==e?"\r":"t"==e?"\t":"\\")}eq(t){return this.search==t.search&&this.replace==t.replace&&this.caseSensitive==t.caseSensitive&&this.regexp==t.regexp&&this.wholeWord==t.wholeWord}create(){return this.regexp?new zc(this):new Hc(this)}getCursor(t,e=0,i){let n=t.doc?t:St.create({doc:t})
return null==i&&(i=n.doc.length),this.regexp?Wc(this,n,e,i):Nc(this,n,e,i)}}class Ic{constructor(t){this.spec=t}}function Nc(t,e,i,n){return new pc(e.doc,t.unquoted,i,n,t.caseSensitive?void 0:t=>t.toLowerCase(),t.wholeWord?function(t,e){return(i,n,s,r)=>((r>i||r+s.length<n)&&(r=Math.max(0,i-2),s=t.sliceString(r,Math.min(t.length,n+2))),!(e(Vc(s,i-r))==bt.Word&&e(Fc(s,i-r))==bt.Word||e(Fc(s,n-r))==bt.Word&&e(Vc(s,n-r))==bt.Word))}(e.doc,e.charCategorizer(e.selection.main.head)):void 0)}class Hc extends Ic{constructor(t){super(t)}nextMatch(t,e,i){let n=Nc(this.spec,t,i,t.doc.length).nextOverlapping()
return n.done&&(n=Nc(this.spec,t,0,e).nextOverlapping()),n.done?null:n.value}prevMatchInRange(t,e,i){for(let n=i;;){let i=Math.max(e,n-1e4-this.spec.unquoted.length),s=Nc(this.spec,t,i,n),r=null
for(;!s.nextOverlapping().done;)r=s.value
if(r)return r
if(i==e)return null
n-=1e4}}prevMatch(t,e,i){return this.prevMatchInRange(t,0,e)||this.prevMatchInRange(t,i,t.doc.length)}getReplacement(t){return this.spec.unquote(this.spec.replace)}matchAll(t,e){let i=Nc(this.spec,t,0,t.doc.length),n=[]
for(;!i.next().done;){if(n.length>=e)return null
n.push(i.value)}return n}highlight(t,e,i,n){let s=Nc(this.spec,t,Math.max(0,e-this.spec.unquoted.length),Math.min(i+this.spec.unquoted.length,t.doc.length))
for(;!s.next().done;)n(s.value.from,s.value.to)}}function Wc(t,e,i,n){return new vc(e.doc,t.search,{ignoreCase:!t.caseSensitive,test:t.wholeWord?(s=e.charCategorizer(e.selection.main.head),(t,e,i)=>!i[0].length||(s(Vc(i.input,i.index))!=bt.Word||s(Fc(i.input,i.index))!=bt.Word)&&(s(Fc(i.input,i.index+i[0].length))!=bt.Word||s(Vc(i.input,i.index+i[0].length))!=bt.Word)):void 0},i,n)
var s}function Vc(t,e){return t.slice(w(t,e,!1),e)}function Fc(t,e){return t.slice(e,w(t,e))}class zc extends Ic{nextMatch(t,e,i){let n=Wc(this.spec,t,i,t.doc.length).next()
return n.done&&(n=Wc(this.spec,t,0,e).next()),n.done?null:n.value}prevMatchInRange(t,e,i){for(let n=1;;n++){let s=Math.max(e,i-1e4*n),r=Wc(this.spec,t,s,i),o=null
for(;!r.next().done;)o=r.value
if(o&&(s==e||o.from>s+10))return o
if(s==e)return null}}prevMatch(t,e,i){return this.prevMatchInRange(t,0,e)||this.prevMatchInRange(t,i,t.doc.length)}getReplacement(t){return this.spec.unquote(this.spec.replace.replace(/\$([$&\d+])/g,(e,i)=>"$"==i?"$":"&"==i?t.match[0]:"0"!=i&&+i<t.match.length?t.match[i]:e))}matchAll(t,e){let i=Wc(this.spec,t,0,t.doc.length),n=[]
for(;!i.next().done;){if(n.length>=e)return null
n.push(i.value)}return n}highlight(t,e,i,n){let s=Wc(this.spec,t,Math.max(0,e-250),Math.min(i+250,t.doc.length))
for(;!s.next().done;)n(s.value.from,s.value.to)}}const qc=ft.define(),_c=ft.define(),jc=U.define({create:t=>new Kc(iu(t).create(),null),update(t,e){for(let i of e.effects)i.is(qc)?t=new Kc(i.value.create(),t.panel):i.is(_c)&&(t=new Kc(t.query,i.value?eu:null))
return t},provide:t=>Gr.from(t,t=>t.panel)})
class Kc{constructor(t,e){this.query=t,this.panel=e}}const $c=ii.mark({class:"cm-searchMatch"}),Uc=ii.mark({class:"cm-searchMatch cm-searchMatch-selected"}),Gc=Oi.fromClass(class{constructor(t){this.view=t,this.decorations=this.highlight(t.state.field(jc))}update(t){let e=t.state.field(jc);(e!=t.startState.field(jc)||t.docChanged||t.selectionSet||t.viewportChanged)&&(this.decorations=this.highlight(e))}highlight({query:t,panel:e}){if(!e||!t.spec.valid)return ii.none
let{view:i}=this,n=new Et
for(let s=0,r=i.visibleRanges,o=r.length;s<o;s++){let{from:e,to:l}=r[s]
for(;s<o-1&&l>r[s+1].from-500;)l=r[++s].to
t.highlight(i.state,e,l,(t,e)=>{let s=i.state.selection.ranges.some(i=>i.from==t&&i.to==e)
n.add(t,e,s?Uc:$c)})}return n.finish()}},{decorations:t=>t.decorations})
function Jc(t){return e=>{let i=e.state.field(jc,!1)
return i&&i.query.spec.valid?t(e,i):ru(e)}}const Xc=Jc((t,{query:e})=>{let{to:i}=t.state.selection.main,n=e.nextMatch(t.state,i,i)
if(!n)return!1
let s=H.single(n.from,n.to),r=t.state.facet(Lc)
return t.dispatch({selection:s,effects:[uu(t,n),r.scrollToMatch(s.main,t)],userEvent:"select.search"}),su(t),!0}),Yc=Jc((t,{query:e})=>{let{state:i}=t,{from:n}=i.selection.main,s=e.prevMatch(i,n,n)
if(!s)return!1
let r=H.single(s.from,s.to),o=t.state.facet(Lc)
return t.dispatch({selection:r,effects:[uu(t,s),o.scrollToMatch(r.main,t)],userEvent:"select.search"}),su(t),!0}),Qc=Jc((t,{query:e})=>{let i=e.matchAll(t.state,1e3)
return!(!i||!i.length||(t.dispatch({selection:H.create(i.map(t=>H.range(t.from,t.to))),userEvent:"select.search.matches"}),0))}),Zc=Jc((t,{query:e})=>{let{state:i}=t,{from:n,to:s}=i.selection.main
if(i.readOnly)return!1
let r=e.nextMatch(i,n,n)
if(!r)return!1
let o,l,a=[],h=[]
if(r.from==n&&r.to==s&&(l=i.toText(e.getReplacement(r)),a.push({from:r.from,to:r.to,insert:l}),r=e.nextMatch(i,r.from,r.to),h.push(Ns.announce.of(i.phrase("replaced match on line $",i.doc.lineAt(n).number)+"."))),r){let e=0==a.length||a[0].from>=r.to?0:r.to-r.from-l.length
o=H.single(r.from-e,r.to-e),h.push(uu(t,r)),h.push(i.facet(Lc).scrollToMatch(o.main,t))}return t.dispatch({changes:a,selection:o,effects:h,userEvent:"input.replace"}),!0}),tu=Jc((t,{query:e})=>{if(t.state.readOnly)return!1
let i=e.matchAll(t.state,1e9).map(t=>{let{from:i,to:n}=t
return{from:i,to:n,insert:e.getReplacement(t)}})
if(!i.length)return!1
let n=t.state.phrase("replaced $ matches",i.length)+"."
return t.dispatch({changes:i,effects:Ns.announce.of(n),userEvent:"input.replace.all"}),!0})
function eu(t){return t.state.facet(Lc).createPanel(t)}function iu(t,e){var i,n,s,r,o
let l=t.selection.main,a=l.empty||l.to>l.from+100?"":t.sliceDoc(l.from,l.to)
if(e&&!a)return e
let h=t.facet(Lc)
return new Pc({search:(null!==(i=null==e?void 0:e.literal)&&void 0!==i?i:h.literal)?a:a.replace(/\n/g,"\\n"),caseSensitive:null!==(n=null==e?void 0:e.caseSensitive)&&void 0!==n?n:h.caseSensitive,literal:null!==(s=null==e?void 0:e.literal)&&void 0!==s?s:h.literal,regexp:null!==(r=null==e?void 0:e.regexp)&&void 0!==r?r:h.regexp,wholeWord:null!==(o=null==e?void 0:e.wholeWord)&&void 0!==o?o:h.wholeWord})}function nu(t){let e=jr(t,eu)
return e&&e.dom.querySelector("[main-field]")}function su(t){let e=nu(t)
e&&e==t.root.activeElement&&e.select()}const ru=t=>{let e=t.state.field(jc,!1)
if(e&&e.panel){let i=nu(t)
if(i&&i!=t.root.activeElement){let n=iu(t.state,e.query.spec)
n.valid&&t.dispatch({effects:qc.of(n)}),i.focus(),i.select()}}else t.dispatch({effects:[_c.of(!0),e?qc.of(iu(t.state,e.query.spec)):ft.appendConfig.of(du)]})
return!0},ou=t=>{let e=t.state.field(jc,!1)
if(!e||!e.panel)return!1
let i=jr(t,eu)
return i&&i.dom.contains(t.root.activeElement)&&t.focus(),t.dispatch({effects:_c.of(!1)}),!0},lu=[{key:"Mod-f",run:ru,scope:"editor search-panel"},{key:"F3",run:Xc,shift:Yc,scope:"editor search-panel",preventDefault:!0},{key:"Mod-g",run:Xc,shift:Yc,scope:"editor search-panel",preventDefault:!0},{key:"Escape",run:ou,scope:"editor search-panel"},{key:"Mod-Shift-l",run:({state:t,dispatch:e})=>{let i=t.selection
if(i.ranges.length>1||i.main.empty)return!1
let{from:n,to:s}=i.main,r=[],o=0
for(let l=new pc(t.doc,t.sliceDoc(n,s));!l.next().done;){if(r.length>1e3)return!1
l.value.from==n&&(o=r.length),r.push(H.range(l.value.from,l.value.to))}return e(t.update({selection:H.create(r,o),userEvent:"select.search.matches"})),!0}},{key:"Alt-g",run:t=>{let e=jr(t,kc)
if(!e){let i=[Sc.of(!0)]
null==t.state.field(Cc,!1)&&i.push(ft.appendConfig.of([Cc,Mc])),t.dispatch({effects:i}),e=jr(t,kc)}return e&&e.dom.querySelector("input").focus(),!0}},{key:"Mod-d",run:({state:t,dispatch:e})=>{let{ranges:i}=t.selection
if(i.some(t=>t.from===t.to))return(({state:t,dispatch:e})=>{let{selection:i}=t,n=H.create(i.ranges.map(e=>t.wordAt(e.head)||H.cursor(e.head)),i.mainIndex)
return!n.eq(i)&&(e(t.update({selection:n})),!0)})({state:t,dispatch:e})
let n=t.sliceDoc(i[0].from,i[0].to)
if(t.selection.ranges.some(e=>t.sliceDoc(e.from,e.to)!=n))return!1
let s=function(t,e){let{main:i,ranges:n}=t.selection,s=t.wordAt(i.head),r=s&&s.from==i.from&&s.to==i.to
for(let o=!1,l=new pc(t.doc,e,n[n.length-1].to);;){if(l.next(),!l.done){if(o&&n.some(t=>t.from==l.value.from))continue
if(r){let e=t.wordAt(l.value.from)
if(!e||e.from!=l.value.from||e.to!=l.value.to)continue}return l.value}if(o)return null
l=new pc(t.doc,e,0,Math.max(0,n[n.length-1].from-1)),o=!0}}(t,n)
return!!s&&(e(t.update({selection:t.selection.addRange(H.range(s.from,s.to),!1),effects:Ns.scrollIntoView(s.to)})),!0)},preventDefault:!0}]
class au{constructor(t){this.view=t
let e=this.query=t.state.field(jc).query.spec
function i(t,e,i){return uc("button",{class:"cm-button",name:t,onclick:e,type:"button"},i)}this.commit=this.commit.bind(this),this.searchField=uc("input",{value:e.search,placeholder:hu(t,"Find"),"aria-label":hu(t,"Find"),class:"cm-textfield",name:"search",form:"","main-field":"true",onchange:this.commit,onkeyup:this.commit}),this.replaceField=uc("input",{value:e.replace,placeholder:hu(t,"Replace"),"aria-label":hu(t,"Replace"),class:"cm-textfield",name:"replace",form:"",onchange:this.commit,onkeyup:this.commit}),this.caseField=uc("input",{type:"checkbox",name:"case",form:"",checked:e.caseSensitive,onchange:this.commit}),this.reField=uc("input",{type:"checkbox",name:"re",form:"",checked:e.regexp,onchange:this.commit}),this.wordField=uc("input",{type:"checkbox",name:"word",form:"",checked:e.wholeWord,onchange:this.commit}),this.dom=uc("div",{onkeydown:t=>this.keydown(t),class:"cm-search"},[this.searchField,i("next",()=>Xc(t),[hu(t,"next")]),i("prev",()=>Yc(t),[hu(t,"previous")]),i("select",()=>Qc(t),[hu(t,"all")]),uc("label",null,[this.caseField,hu(t,"match case")]),uc("label",null,[this.reField,hu(t,"regexp")]),uc("label",null,[this.wordField,hu(t,"by word")]),...t.state.readOnly?[]:[uc("br"),this.replaceField,i("replace",()=>Zc(t),[hu(t,"replace")]),i("replaceAll",()=>tu(t),[hu(t,"replace all")])],uc("button",{name:"close",onclick:()=>ou(t),"aria-label":hu(t,"close"),type:"button"},["×"])])}commit(){let t=new Pc({search:this.searchField.value,caseSensitive:this.caseField.checked,regexp:this.reField.checked,wholeWord:this.wordField.checked,replace:this.replaceField.value})
t.eq(this.query)||(this.query=t,this.view.dispatch({effects:qc.of(t)}))}keydown(t){var e,i
i=t,Us(Ks((e=this.view).state),i,e,"search-panel")?t.preventDefault():13==t.keyCode&&t.target==this.searchField?(t.preventDefault(),(t.shiftKey?Yc:Xc)(this.view)):13==t.keyCode&&t.target==this.replaceField&&(t.preventDefault(),Zc(this.view))}update(t){for(let e of t.transactions)for(let t of e.effects)t.is(qc)&&!t.value.eq(this.query)&&this.setQuery(t.value)}setQuery(t){this.query=t,this.searchField.value=t.search,this.replaceField.value=t.replace,this.caseField.checked=t.caseSensitive,this.reField.checked=t.regexp,this.wordField.checked=t.wholeWord}mount(){this.searchField.select()}get pos(){return 80}get top(){return this.view.state.facet(Lc).top}}function hu(t,e){return t.state.phrase(e)}const cu=/[\s\.,:;?!]/
function uu(t,{from:e,to:i}){let n=t.state.doc.lineAt(e),s=t.state.doc.lineAt(i).to,r=Math.max(n.from,e-30),o=Math.min(s,i+30),l=t.state.sliceDoc(r,o)
if(r!=n.from)for(let a=0;a<30;a++)if(!cu.test(l[a+1])&&cu.test(l[a])){l=l.slice(a)
break}if(o!=s)for(let a=l.length-1;a>l.length-30;a--)if(!cu.test(l[a-1])&&cu.test(l[a])){l=l.slice(0,a)
break}return Ns.announce.of(`${t.state.phrase("current match")}. ${l} ${t.state.phrase("on line")} ${n.number}.`)}const fu=Ns.baseTheme({".cm-panel.cm-search":{padding:"2px 6px 4px",position:"relative","& [name=close]":{position:"absolute",top:"0",right:"4px",backgroundColor:"inherit",border:"none",font:"inherit",padding:0,margin:0},"& input, & button, & label":{margin:".2em .6em .2em 0"},"& input[type=checkbox]":{marginRight:".2em"},"& label":{fontSize:"80%",whiteSpace:"pre"}},"&light .cm-searchMatch":{backgroundColor:"#ffff0054"},"&dark .cm-searchMatch":{backgroundColor:"#00ffff8a"},"&light .cm-searchMatch-selected":{backgroundColor:"#ff6a0054"},"&dark .cm-searchMatch-selected":{backgroundColor:"#ff00ff8a"}}),du=[jc,J.lowest(Gc),fu]
class pu{constructor(t,e,i){this.state=t,this.pos=e,this.explicit=i,this.abortListeners=[]}tokenBefore(t){let e=Ml(this.state).resolveInner(this.pos,-1)
for(;e&&t.indexOf(e.name)<0;)e=e.parent
return e?{from:e.from,to:this.pos,text:this.state.sliceDoc(e.from,this.pos),type:e.type}:null}matchBefore(t){let e=this.state.doc.lineAt(this.pos),i=Math.max(e.from,this.pos-250),n=e.text.slice(i-e.from,this.pos-e.from),s=n.search(wu(t,!1))
return s<0?null:{from:i+s,to:this.pos,text:n.slice(s)}}get aborted(){return null==this.abortListeners}addEventListener(t,e){"abort"==t&&this.abortListeners&&this.abortListeners.push(e)}}function mu(t){let e=Object.keys(t).join(""),i=/\w/.test(e)
return i&&(e=e.replace(/\w/g,"")),`[${i?"\\w":""}${e.replace(/[^\w\s]/g,"\\$&")}]`}class gu{constructor(t,e,i,n){this.completion=t,this.source=e,this.match=i,this.score=n}}function vu(t){return t.selection.main.from}function wu(t,e){var i
let{source:n}=t,s=e&&"^"!=n[0],r="$"!=n[n.length-1]
return s||r?new RegExp(`${s?"^":""}(?:${n})${r?"$":""}`,null!==(i=t.flags)&&void 0!==i?i:t.ignoreCase?"i":""):t}const yu=ht.define(),bu=new WeakMap
function xu(t){if(!Array.isArray(t))return t
let e=bu.get(t)
return e||bu.set(t,e=function(t){let e=t.map(t=>"string"==typeof t?{label:t}:t),[i,n]=e.every(t=>/^\w+$/.test(t.label))?[/\w*$/,/\w+$/]:function(t){let e=Object.create(null),i=Object.create(null)
for(let{label:s}of t){e[s[0]]=!0
for(let t=1;t<s.length;t++)i[s[t]]=!0}let n=mu(e)+mu(i)+"*$"
return[new RegExp("^"+n),new RegExp(n)]}(e)
return t=>{let s=t.matchBefore(n)
return s||t.explicit?{from:s?s.from:t.pos,options:e,validFor:i}:null}}(t)),e}const ku=ft.define(),Su=ft.define()
class Cu{constructor(t){this.pattern=t,this.chars=[],this.folded=[],this.any=[],this.precise=[],this.byWord=[],this.score=0,this.matched=[]
for(let e=0;e<t.length;){let i=S(t,e),n=M(i)
this.chars.push(i)
let s=t.slice(e,e+n),r=s.toUpperCase()
this.folded.push(S(r==s?s.toLowerCase():r,0)),e+=n}this.astral=t.length!=this.chars.length}ret(t,e){return this.score=t,this.matched=e,!0}match(t){if(0==this.pattern.length)return this.ret(-100,[])
if(t.length<this.pattern.length)return!1
let{chars:e,folded:i,any:n,precise:s,byWord:r}=this
if(1==e.length){let n=S(t,0),s=M(n),r=s==t.length?0:-100
if(n==e[0]);else{if(n!=i[0])return!1
r+=-200}return this.ret(r,[0,s])}let o=t.indexOf(this.pattern)
if(0==o)return this.ret(t.length==this.pattern.length?0:-100,[0,this.pattern.length])
let l=e.length,a=0
if(o<0){for(let s=0,r=Math.min(t.length,200);s<r&&a<l;){let r=S(t,s)
r!=e[a]&&r!=i[a]||(n[a++]=s),s+=M(r)}if(a<l)return!1}let h=0,c=0,u=!1,f=0,d=-1,p=-1,m=/[a-z]/.test(t),g=!0
for(let v=0,w=Math.min(t.length,200),y=0;v<w&&c<l;){let n=S(t,v)
o<0&&(h<l&&n==e[h]&&(s[h++]=v),f<l&&(n==e[f]||n==i[f]?(0==f&&(d=v),p=v+1,f++):f=0))
let a,w=n<255?n>=48&&n<=57||n>=97&&n<=122?2:n>=65&&n<=90?1:0:(a=C(n))!=a.toLowerCase()?1:a!=a.toUpperCase()?2:0;(!v||1==w&&m||0==y&&0!=w)&&(e[c]==n||i[c]==n&&(u=!0)?r[c++]=v:r.length&&(g=!1)),y=w,v+=M(n)}return c==l&&0==r[0]&&g?this.result((u?-200:0)-100,r,t):f==l&&0==d?this.ret(-200-t.length+(p==t.length?0:-100),[0,p]):o>-1?this.ret(-700-t.length,[o,o+this.pattern.length]):f==l?this.ret(-900-t.length,[d,p]):c==l?this.result((u?-200:0)-100-700+(g?0:-1100),r,t):2!=e.length&&this.result((n[0]?-700:0)-200-1100,n,t)}result(t,e,i){let n=[],s=0
for(let r of e){let t=r+(this.astral?M(S(i,r)):1)
s&&n[s-1]==r?n[s-1]=t:(n[s++]=r,n[s++]=t)}return this.ret(t-i.length,n)}}const Mu=F.define({combine:t=>Ct(t,{activateOnTyping:!0,selectOnOpen:!0,override:null,closeOnBlur:!0,maxRenderedOptions:100,defaultKeymap:!0,tooltipClass:()=>"",optionClass:()=>"",aboveCursor:!1,icons:!0,addToOptions:[],positionInfo:Du,compareCompletions:(t,e)=>t.label.localeCompare(e.label),interactionDelay:75},{defaultKeymap:(t,e)=>t&&e,closeOnBlur:(t,e)=>t&&e,icons:(t,e)=>t&&e,tooltipClass:(t,e)=>i=>Au(t(i),e(i)),optionClass:(t,e)=>i=>Au(t(i),e(i)),addToOptions:(t,e)=>t.concat(e)})})
function Au(t,e){return t?e?t+" "+e:t:e}function Du(t,e,i,n,s){let r,o,l=t.textDirection==zi.RTL,a=l,h=!1,c="top",u=e.left-s.left,f=s.right-e.right,d=n.right-n.left,p=n.bottom-n.top
if(a&&u<Math.min(d,f)?a=!1:!a&&f<Math.min(d,u)&&(a=!0),d<=(a?u:f))r=Math.max(s.top,Math.min(i.top,s.bottom-p))-e.top,o=Math.min(400,a?u:f)
else{h=!0,o=Math.min(400,(l?e.right:s.right-e.left)-30)
let t=s.bottom-e.bottom
t>=p||t>e.top?r=i.bottom-e.top:(c="bottom",r=e.bottom-i.top)}return{style:`${c}: ${r}px; max-width: ${o}px`,class:"cm-completionInfo-"+(h?l?"left-narrow":"right-narrow":a?"left":"right")}}function Ou(t,e,i){if(t<=i)return{from:0,to:t}
if(e<0&&(e=0),e<=t>>1){let t=Math.floor(e/i)
return{from:t*i,to:(t+1)*i}}let n=Math.floor((t-e)/i)
return{from:t-(n+1)*i,to:t-n*i}}class Tu{constructor(t,e,i){this.view=t,this.stateField=e,this.applyCompletion=i,this.info=null,this.infoDestroy=null,this.placeInfoReq={read:()=>this.measureInfo(),write:t=>this.placeInfo(t),key:this},this.space=null,this.currentClass=""
let n=t.state.field(e),{options:s,selected:r}=n.open,o=t.state.facet(Mu)
this.optionContent=function(t){let e=t.addToOptions.slice()
return t.icons&&e.push({render(t){let e=document.createElement("div")
return e.classList.add("cm-completionIcon"),t.type&&e.classList.add(...t.type.split(/\s+/g).map(t=>"cm-completionIcon-"+t)),e.setAttribute("aria-hidden","true"),e},position:20}),e.push({render(t,e,i){let n=document.createElement("span")
n.className="cm-completionLabel"
let s=t.displayLabel||t.label,r=0
for(let o=0;o<i.length;){let t=i[o++],e=i[o++]
t>r&&n.appendChild(document.createTextNode(s.slice(r,t)))
let l=n.appendChild(document.createElement("span"))
l.appendChild(document.createTextNode(s.slice(t,e))),l.className="cm-completionMatchedText",r=e}return r<s.length&&n.appendChild(document.createTextNode(s.slice(r))),n},position:50},{render(t){if(!t.detail)return null
let e=document.createElement("span")
return e.className="cm-completionDetail",e.textContent=t.detail,e},position:80}),e.sort((t,e)=>t.position-e.position).map(t=>t.render)}(o),this.optionClass=o.optionClass,this.tooltipClass=o.tooltipClass,this.range=Ou(s.length,r,o.maxRenderedOptions),this.dom=document.createElement("div"),this.dom.className="cm-tooltip-autocomplete",this.updateTooltipClass(t.state),this.dom.addEventListener("mousedown",e=>{for(let i,n=e.target;n&&n!=this.dom;n=n.parentNode)if("LI"==n.nodeName&&(i=/-(\d+)$/.exec(n.id))&&+i[1]<s.length)return this.applyCompletion(t,s[+i[1]]),void e.preventDefault()}),this.dom.addEventListener("focusout",e=>{let i=t.state.field(this.stateField,!1)
i&&i.tooltip&&t.state.facet(Mu).closeOnBlur&&e.relatedTarget!=t.contentDOM&&t.dispatch({effects:Su.of(null)})}),this.list=this.dom.appendChild(this.createListBox(s,n.id,this.range)),this.list.addEventListener("scroll",()=>{this.info&&this.view.requestMeasure(this.placeInfoReq)})}mount(){this.updateSel()}update(t){var e,i,n
let s=t.state.field(this.stateField),r=t.startState.field(this.stateField)
this.updateTooltipClass(t.state),s!=r&&(this.updateSel(),(null===(e=s.open)||void 0===e?void 0:e.disabled)!=(null===(i=r.open)||void 0===i?void 0:i.disabled)&&this.dom.classList.toggle("cm-tooltip-autocomplete-disabled",!!(null===(n=s.open)||void 0===n?void 0:n.disabled)))}updateTooltipClass(t){let e=this.tooltipClass(t)
if(e!=this.currentClass){for(let t of this.currentClass.split(" "))t&&this.dom.classList.remove(t)
for(let t of e.split(" "))t&&this.dom.classList.add(t)
this.currentClass=e}}positioned(t){this.space=t,this.info&&this.view.requestMeasure(this.placeInfoReq)}updateSel(){let t=this.view.state.field(this.stateField),e=t.open
if((e.selected>-1&&e.selected<this.range.from||e.selected>=this.range.to)&&(this.range=Ou(e.options.length,e.selected,this.view.state.facet(Mu).maxRenderedOptions),this.list.remove(),this.list=this.dom.appendChild(this.createListBox(e.options,t.id,this.range)),this.list.addEventListener("scroll",()=>{this.info&&this.view.requestMeasure(this.placeInfoReq)})),this.updateSelectedOption(e.selected)){this.destroyInfo()
let{completion:i}=e.options[e.selected],{info:n}=i
if(!n)return
let s="string"==typeof n?document.createTextNode(n):n(i)
if(!s)return
"then"in s?s.then(e=>{e&&this.view.state.field(this.stateField,!1)==t&&this.addInfoPane(e,i)}).catch(t=>Ci(this.view.state,t,"completion info")):this.addInfoPane(s,i)}}addInfoPane(t,e){this.destroyInfo()
let i=this.info=document.createElement("div")
if(i.className="cm-tooltip cm-completionInfo",null!=t.nodeType)i.appendChild(t),this.infoDestroy=null
else{let{dom:e,destroy:n}=t
i.appendChild(e),this.infoDestroy=n||null}this.dom.appendChild(i),this.view.requestMeasure(this.placeInfoReq)}updateSelectedOption(t){let e=null
for(let i=this.list.firstChild,n=this.range.from;i;i=i.nextSibling,n++)"LI"==i.nodeName&&i.id?n==t?i.hasAttribute("aria-selected")||(i.setAttribute("aria-selected","true"),e=i):i.hasAttribute("aria-selected")&&i.removeAttribute("aria-selected"):n--
return e&&function(t,e){let i=t.getBoundingClientRect(),n=e.getBoundingClientRect()
n.top<i.top?t.scrollTop-=i.top-n.top:n.bottom>i.bottom&&(t.scrollTop+=n.bottom-i.bottom)}(this.list,e),e}measureInfo(){let t=this.dom.querySelector("[aria-selected]")
if(!t||!this.info)return null
let e=this.dom.getBoundingClientRect(),i=this.info.getBoundingClientRect(),n=t.getBoundingClientRect(),s=this.space
if(!s){let t=this.dom.ownerDocument.defaultView||window
s={left:0,top:0,right:t.innerWidth,bottom:t.innerHeight}}return n.top>Math.min(s.bottom,e.bottom)-10||n.bottom<Math.max(s.top,e.top)+10?null:this.view.state.facet(Mu).positionInfo(this.view,e,n,i,s)}placeInfo(t){this.info&&(t?(t.style&&(this.info.style.cssText=t.style),this.info.className="cm-tooltip cm-completionInfo "+(t.class||"")):this.info.style.cssText="top: -1e6px")}createListBox(t,e,i){const n=document.createElement("ul")
n.id=e,n.setAttribute("role","listbox"),n.setAttribute("aria-expanded","true"),n.setAttribute("aria-label",this.view.state.phrase("Completions"))
let s=null
for(let r=i.from;r<i.to;r++){let{completion:o,match:l}=t[r],{section:a}=o
if(a){let t="string"==typeof a?a:a.name
t!=s&&(r>i.from||0==i.from)&&(s=t,"string"!=typeof a&&a.header?n.appendChild(a.header(a)):n.appendChild(document.createElement("completion-section")).textContent=t)}const h=n.appendChild(document.createElement("li"))
h.id=e+"-"+r,h.setAttribute("role","option")
let c=this.optionClass(o)
c&&(h.className=c)
for(let t of this.optionContent){let e=t(o,this.view.state,l)
e&&h.appendChild(e)}}return i.from&&n.classList.add("cm-completionListIncompleteTop"),i.to<t.length&&n.classList.add("cm-completionListIncompleteBottom"),n}destroyInfo(){this.info&&(this.infoDestroy&&this.infoDestroy(),this.info.remove(),this.info=null)}destroy(){this.destroyInfo()}}function Eu(t,e){return i=>new Tu(i,t,e)}function Ru(t){return 100*(t.boost||0)+(t.apply?10:0)+(t.info?5:0)+(t.type?1:0)}class Bu{constructor(t,e,i,n,s,r){this.options=t,this.attrs=e,this.tooltip=i,this.timestamp=n,this.selected=s,this.disabled=r}setSelected(t,e){return t==this.selected||t>=this.options.length?this:new Bu(this.options,Iu(e,t),this.tooltip,this.timestamp,t,this.disabled)}static build(t,e,i,n,s){let r=function(t,e){let i=[],n=null,s=t=>{i.push(t)
let{section:e}=t.completion
if(e){n||(n=[])
let t="string"==typeof e?e:e.name
n.some(e=>e.name==t)||n.push("string"==typeof e?{name:t}:e)}}
for(let a of t)if(a.hasResult()){let t=a.result.getMatch
if(!1===a.result.filter)for(let e of a.result.options)s(new gu(e,a.source,t?t(e):[],1e9-i.length))
else{let i=new Cu(e.sliceDoc(a.from,a.to))
for(let e of a.result.options)if(i.match(e.label)){let n=e.displayLabel?t?t(e,i.matched):[]:i.matched
s(new gu(e,a.source,n,i.score+(e.boost||0)))}}}if(n){let t=Object.create(null),e=0,s=(t,e)=>{var i,n
return(null!==(i=t.rank)&&void 0!==i?i:1e9)-(null!==(n=e.rank)&&void 0!==n?n:1e9)||(t.name<e.name?-1:1)}
for(let i of n.sort(s))e-=1e5,t[i.name]=e
for(let n of i){let{section:e}=n.completion
e&&(n.score+=t["string"==typeof e?e:e.name])}}let r=[],o=null,l=e.facet(Mu).compareCompletions
for(let a of i.sort((t,e)=>e.score-t.score||l(t.completion,e.completion))){let t=a.completion
!o||o.label!=t.label||o.detail!=t.detail||null!=o.type&&null!=t.type&&o.type!=t.type||o.apply!=t.apply||o.boost!=t.boost?r.push(a):Ru(a.completion)>Ru(o)&&(r[r.length-1]=a),o=a.completion}return r}(t,e)
if(!r.length)return n&&t.some(t=>1==t.state)?new Bu(n.options,n.attrs,n.tooltip,n.timestamp,n.selected,!0):null
let o=e.facet(Mu).selectOnOpen?0:-1
if(n&&n.selected!=o&&-1!=n.selected){let t=n.options[n.selected].completion
for(let e=0;e<r.length;e++)if(r[e].completion==t){o=e
break}}return new Bu(r,Iu(i,o),{pos:t.reduce((t,e)=>e.hasResult()?Math.min(t,e.from):t,1e8),create:Eu(qu,_u),above:s.aboveCursor},n?n.timestamp:Date.now(),o,!1)}map(t){return new Bu(this.options,this.attrs,Object.assign(Object.assign({},this.tooltip),{pos:t.mapPos(this.tooltip.pos)}),this.timestamp,this.selected,this.disabled)}}class Lu{constructor(t,e,i){this.active=t,this.id=e,this.open=i}static start(){return new Lu(Nu,"cm-ac-"+Math.floor(2e6*Math.random()).toString(36),null)}update(t){let{state:e}=t,i=e.facet(Mu),n=(i.override||e.languageDataAt("autocomplete",vu(e)).map(xu)).map(e=>(this.active.find(t=>t.source==e)||new Wu(e,this.active.some(t=>0!=t.state)?1:0)).update(t,i))
n.length==this.active.length&&n.every((t,e)=>t==this.active[e])&&(n=this.active)
let s=this.open
s&&t.docChanged&&(s=s.map(t.changes)),t.selection||n.some(e=>e.hasResult()&&t.changes.touchesRange(e.from,e.to))||!function(t,e){if(t==e)return!0
for(let i=0,n=0;;){for(;i<t.length&&!t[i].hasResult;)i++
for(;n<e.length&&!e[n].hasResult;)n++
let s=i==t.length,r=n==e.length
if(s||r)return s==r
if(t[i++].result!=e[n++].result)return!1}}(n,this.active)?s=Bu.build(n,e,this.id,s,i):s&&s.disabled&&!n.some(t=>1==t.state)&&(s=null),!s&&n.every(t=>1!=t.state)&&n.some(t=>t.hasResult())&&(n=n.map(t=>t.hasResult()?new Wu(t.source,0):t))
for(let r of t.effects)r.is(zu)&&(s=s&&s.setSelected(r.value,this.id))
return n==this.active&&s==this.open?this:new Lu(n,this.id,s)}get tooltip(){return this.open?this.open.tooltip:null}get attrs(){return this.open?this.open.attrs:Pu}}const Pu={"aria-autocomplete":"list"}
function Iu(t,e){let i={"aria-autocomplete":"list","aria-haspopup":"listbox","aria-controls":t}
return e>-1&&(i["aria-activedescendant"]=t+"-"+e),i}const Nu=[]
function Hu(t){return t.isUserEvent("input.type")?"input":t.isUserEvent("delete.backward")?"delete":null}class Wu{constructor(t,e,i=-1){this.source=t,this.state=e,this.explicitPos=i}hasResult(){return!1}update(t,e){let i=Hu(t),n=this
i?n=n.handleUserEvent(t,i,e):t.docChanged?n=n.handleChange(t):t.selection&&0!=n.state&&(n=new Wu(n.source,0))
for(let s of t.effects)if(s.is(ku))n=new Wu(n.source,1,s.value?vu(t.state):-1)
else if(s.is(Su))n=new Wu(n.source,0)
else if(s.is(Fu))for(let t of s.value)t.source==n.source&&(n=t)
return n}handleUserEvent(t,e,i){return"delete"!=e&&i.activateOnTyping?new Wu(this.source,1):this.map(t.changes)}handleChange(t){return t.changes.touchesRange(vu(t.startState))?new Wu(this.source,0):this.map(t.changes)}map(t){return t.empty||this.explicitPos<0?this:new Wu(this.source,this.state,t.mapPos(this.explicitPos))}}class Vu extends Wu{constructor(t,e,i,n,s){super(t,2,e),this.result=i,this.from=n,this.to=s}hasResult(){return!0}handleUserEvent(t,e,i){var n
let s=t.changes.mapPos(this.from),r=t.changes.mapPos(this.to,1),o=vu(t.state)
if((this.explicitPos<0?o<=s:o<this.from)||o>r||"delete"==e&&vu(t.startState)==this.from)return new Wu(this.source,"input"==e&&i.activateOnTyping?1:0)
let l,a=this.explicitPos<0?-1:t.changes.mapPos(this.explicitPos)
return function(t,e,i,n){if(!t)return!1
let s=e.sliceDoc(i,n)
return"function"==typeof t?t(s,i,n,e):wu(t,!0).test(s)}(this.result.validFor,t.state,s,r)?new Vu(this.source,a,this.result,s,r):this.result.update&&(l=this.result.update(this.result,s,r,new pu(t.state,o,a>=0)))?new Vu(this.source,a,l,l.from,null!==(n=l.to)&&void 0!==n?n:vu(t.state)):new Wu(this.source,1,a)}handleChange(t){return t.changes.touchesRange(this.from,this.to)?new Wu(this.source,0):this.map(t.changes)}map(t){return t.empty?this:new Vu(this.source,this.explicitPos<0?-1:t.mapPos(this.explicitPos),this.result,t.mapPos(this.from),t.mapPos(this.to,1))}}const Fu=ft.define({map:(t,e)=>t.map(t=>t.map(e))}),zu=ft.define(),qu=U.define({create:()=>Lu.start(),update:(t,e)=>t.update(e),provide:t=>[Ir.from(t,t=>t.tooltip),Ns.contentAttributes.from(t,t=>t.attrs)]})
function _u(t,e){const i=e.completion.apply||e.completion.label
let n=t.state.field(qu).active.find(t=>t.source==e.source)
return n instanceof Vu&&("string"==typeof i?t.dispatch(Object.assign(Object.assign({},function(t,e,i,n){let{main:s}=t.selection,r=i-s.from,o=n-s.from
return Object.assign(Object.assign({},t.changeByRange(l=>l!=s&&i!=n&&t.sliceDoc(l.from+r,l.from+o)!=t.sliceDoc(i,n)?{range:l}:{changes:{from:l.from+r,to:n==s.from?l.to:l.from+o,insert:e},range:H.cursor(l.from+r+e.length)})),{userEvent:"input.complete"})}(t.state,i,n.from,n.to)),{annotations:yu.of(e.completion)})):i(t,e.completion,n.from,n.to),!0)}function ju(t,e="option"){return i=>{let n=i.state.field(qu,!1)
if(!n||!n.open||n.open.disabled||Date.now()-n.open.timestamp<i.state.facet(Mu).interactionDelay)return!1
let s,r=1
"page"==e&&(s=zr(i,n.open.tooltip))&&(r=Math.max(2,Math.floor(s.dom.offsetHeight/s.dom.querySelector("li").offsetHeight)-1))
let{length:o}=n.open.options,l=n.open.selected>-1?n.open.selected+r*(t?1:-1):t?0:o-1
return l<0?l="page"==e?0:o-1:l>=o&&(l="page"==e?o-1:0),i.dispatch({effects:zu.of(l)}),!0}}class Ku{constructor(t,e){this.active=t,this.context=e,this.time=Date.now(),this.updates=[],this.done=void 0}}const $u=Oi.fromClass(class{constructor(t){this.view=t,this.debounceUpdate=-1,this.running=[],this.debounceAccept=-1,this.composing=0
for(let e of t.state.field(qu).active)1==e.state&&this.startQuery(e)}update(t){let e=t.state.field(qu)
if(!t.selectionSet&&!t.docChanged&&t.startState.field(qu)==e)return
let i=t.transactions.some(t=>(t.selection||t.docChanged)&&!Hu(t))
for(let n=0;n<this.running.length;n++){let e=this.running[n]
if(i||e.updates.length+t.transactions.length>50&&Date.now()-e.time>1e3){for(let i of e.context.abortListeners)try{i()}catch(t){Ci(this.view.state,t)}e.context.abortListeners=null,this.running.splice(n--,1)}else e.updates.push(...t.transactions)}if(this.debounceUpdate>-1&&clearTimeout(this.debounceUpdate),this.debounceUpdate=e.active.some(t=>1==t.state&&!this.running.some(e=>e.active.source==t.source))?setTimeout(()=>this.startUpdate(),50):-1,0!=this.composing)for(let n of t.transactions)"input"==Hu(n)?this.composing=2:2==this.composing&&n.selection&&(this.composing=3)}startUpdate(){this.debounceUpdate=-1
let{state:t}=this.view,e=t.field(qu)
for(let i of e.active)1!=i.state||this.running.some(t=>t.active.source==i.source)||this.startQuery(i)}startQuery(t){let{state:e}=this.view,i=vu(e),n=new pu(e,i,t.explicitPos==i),s=new Ku(t,n)
this.running.push(s),Promise.resolve(t.source(n)).then(t=>{s.context.aborted||(s.done=t||null,this.scheduleAccept())},t=>{this.view.dispatch({effects:Su.of(null)}),Ci(this.view.state,t)})}scheduleAccept(){this.running.every(t=>void 0!==t.done)?this.accept():this.debounceAccept<0&&(this.debounceAccept=setTimeout(()=>this.accept(),50))}accept(){var t
this.debounceAccept>-1&&clearTimeout(this.debounceAccept),this.debounceAccept=-1
let e=[],i=this.view.state.facet(Mu)
for(let n=0;n<this.running.length;n++){let s=this.running[n]
if(void 0===s.done)continue
if(this.running.splice(n--,1),s.done){let n=new Vu(s.active.source,s.active.explicitPos,s.done,s.done.from,null!==(t=s.done.to)&&void 0!==t?t:vu(s.updates.length?s.updates[0].startState:this.view.state))
for(let t of s.updates)n=n.update(t,i)
if(n.hasResult()){e.push(n)
continue}}let r=this.view.state.field(qu).active.find(t=>t.source==s.active.source)
if(r&&1==r.state)if(null==s.done){let t=new Wu(s.active.source,0)
for(let e of s.updates)t=t.update(e,i)
1!=t.state&&e.push(t)}else this.startQuery(r)}e.length&&this.view.dispatch({effects:Fu.of(e)})}},{eventHandlers:{blur(t){let e=this.view.state.field(qu,!1)
if(e&&e.tooltip&&this.view.state.facet(Mu).closeOnBlur){let i=e.open&&zr(this.view,e.open.tooltip)
i&&i.dom.contains(t.relatedTarget)||this.view.dispatch({effects:Su.of(null)})}},compositionstart(){this.composing=1},compositionend(){3==this.composing&&setTimeout(()=>this.view.dispatch({effects:ku.of(!1)}),20),this.composing=0}}}),Uu=Ns.baseTheme({".cm-tooltip.cm-tooltip-autocomplete":{"& > ul":{fontFamily:"monospace",whiteSpace:"nowrap",overflow:"hidden auto",maxWidth_fallback:"700px",maxWidth:"min(700px, 95vw)",minWidth:"250px",maxHeight:"10em",height:"100%",listStyle:"none",margin:0,padding:0,"& > li, & > completion-section":{padding:"1px 3px",lineHeight:1.2},"& > li":{overflowX:"hidden",textOverflow:"ellipsis",cursor:"pointer"},"& > completion-section":{display:"list-item",borderBottom:"1px solid silver",paddingLeft:"0.5em",opacity:.7}}},"&light .cm-tooltip-autocomplete ul li[aria-selected]":{background:"#17c",color:"white"},"&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]":{background:"#777"},"&dark .cm-tooltip-autocomplete ul li[aria-selected]":{background:"#347",color:"white"},"&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]":{background:"#444"},".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after":{content:'"···"',opacity:.5,display:"block",textAlign:"center"},".cm-tooltip.cm-completionInfo":{position:"absolute",padding:"3px 9px",width:"max-content",maxWidth:"400px",boxSizing:"border-box"},".cm-completionInfo.cm-completionInfo-left":{right:"100%"},".cm-completionInfo.cm-completionInfo-right":{left:"100%"},".cm-completionInfo.cm-completionInfo-left-narrow":{right:"30px"},".cm-completionInfo.cm-completionInfo-right-narrow":{left:"30px"},"&light .cm-snippetField":{backgroundColor:"#00000022"},"&dark .cm-snippetField":{backgroundColor:"#ffffff22"},".cm-snippetFieldPosition":{verticalAlign:"text-top",width:0,height:"1.15em",display:"inline-block",margin:"0 -0.7px -.7em",borderLeft:"1.4px dotted #888"},".cm-completionMatchedText":{textDecoration:"underline"},".cm-completionDetail":{marginLeft:"0.5em",fontStyle:"italic"},".cm-completionIcon":{fontSize:"90%",width:".8em",display:"inline-block",textAlign:"center",paddingRight:".6em",opacity:"0.6",boxSizing:"content-box"},".cm-completionIcon-function, .cm-completionIcon-method":{"&:after":{content:"'ƒ'"}},".cm-completionIcon-class":{"&:after":{content:"'○'"}},".cm-completionIcon-interface":{"&:after":{content:"'◌'"}},".cm-completionIcon-variable":{"&:after":{content:"'𝑥'"}},".cm-completionIcon-constant":{"&:after":{content:"'𝐶'"}},".cm-completionIcon-type":{"&:after":{content:"'𝑡'"}},".cm-completionIcon-enum":{"&:after":{content:"'∪'"}},".cm-completionIcon-property":{"&:after":{content:"'□'"}},".cm-completionIcon-keyword":{"&:after":{content:"'🔑︎'"}},".cm-completionIcon-namespace":{"&:after":{content:"'▢'"}},".cm-completionIcon-text":{"&:after":{content:"'abc'",fontSize:"50%",verticalAlign:"middle"}}}),Gu={brackets:["(","[","{","'",'"'],before:")]}:;>",stringPrefixes:[]},Ju=ft.define({map(t,e){let i=e.mapPos(t,-1,D.TrackAfter)
return null==i?void 0:i}}),Xu=new class extends Mt{}
Xu.startSide=1,Xu.endSide=-1
const Yu=U.define({create:()=>Tt.empty,update(t,e){if(e.selection){let i=e.state.doc.lineAt(e.selection.main.head).from,n=e.startState.doc.lineAt(e.startState.selection.main.head).from
i!=e.changes.mapPos(n,-1)&&(t=Tt.empty)}t=t.map(e.changes)
for(let i of e.effects)i.is(Ju)&&(t=t.update({add:[Xu.range(i.value,i.value+1)]}))
return t}}),Qu="()[]{}<>"
function Zu(t){for(let e=0;e<8;e+=2)if(Qu.charCodeAt(e)==t)return Qu.charAt(e+1)
return C(t<128?t:t+1)}function tf(t,e){return t.languageDataAt("closeBrackets",e)[0]||Gu}const ef="object"==typeof navigator&&/Android\b/.test(navigator.userAgent),nf=Ns.inputHandler.of((t,e,i,n)=>{if((ef?t.composing:t.compositionStarted)||t.state.readOnly)return!1
let s=t.state.selection.main
if(n.length>2||2==n.length&&1==M(S(n,0))||e!=s.from||i!=s.to)return!1
let r=function(t,e){let i=tf(t,t.selection.main.head),n=i.brackets||Gu.brackets
for(let s of n){let r=Zu(S(s,0))
if(e==s)return r==s?hf(t,s,n.indexOf(s+s+s)>-1,i):lf(t,s,r,i.before||Gu.before)
if(e==r&&rf(t,t.selection.main.from))return af(t,0,r)}return null}(t.state,n)
return!!r&&(t.dispatch(r),!0)}),sf=[{key:"Backspace",run:({state:t,dispatch:e})=>{if(t.readOnly)return!1
let i=tf(t,t.selection.main.head).brackets||Gu.brackets,n=null,s=t.changeByRange(e=>{if(e.empty){let n=function(t,e){let i=t.sliceString(e-2,e)
return M(S(i,0))==i.length?i:i.slice(1)}(t.doc,e.head)
for(let s of i)if(s==n&&of(t.doc,e.head)==Zu(S(s,0)))return{changes:{from:e.head-s.length,to:e.head+s.length},range:H.cursor(e.head-s.length)}}return{range:n=e}})
return n||e(t.update(s,{scrollIntoView:!0,userEvent:"delete.backward"})),!n}}]
function rf(t,e){let i=!1
return t.field(Yu).between(0,t.doc.length,t=>{t==e&&(i=!0)}),i}function of(t,e){let i=t.sliceString(e,e+2)
return i.slice(0,M(S(i,0)))}function lf(t,e,i,n){let s=null,r=t.changeByRange(r=>{if(!r.empty)return{changes:[{insert:e,from:r.from},{insert:i,from:r.to}],effects:Ju.of(r.to+e.length),range:H.range(r.anchor+e.length,r.head+e.length)}
let o=of(t.doc,r.head)
return!o||/\s/.test(o)||n.indexOf(o)>-1?{changes:{insert:e+i,from:r.head},effects:Ju.of(r.head+e.length),range:H.cursor(r.head+e.length)}:{range:s=r}})
return s?null:t.update(r,{scrollIntoView:!0,userEvent:"input.type"})}function af(t,e,i){let n=null,s=t.changeByRange(e=>e.empty&&of(t.doc,e.head)==i?{changes:{from:e.head,to:e.head+i.length,insert:i},range:H.cursor(e.head+i.length)}:n={range:e})
return n?null:t.update(s,{scrollIntoView:!0,userEvent:"input.type"})}function hf(t,e,i,n){let s=n.stringPrefixes||Gu.stringPrefixes,r=null,o=t.changeByRange(n=>{if(!n.empty)return{changes:[{insert:e,from:n.from},{insert:e,from:n.to}],effects:Ju.of(n.to+e.length),range:H.range(n.anchor+e.length,n.head+e.length)}
let o,l=n.head,a=of(t.doc,l)
if(a==e){if(cf(t,l))return{changes:{insert:e+e,from:l},effects:Ju.of(l+e.length),range:H.cursor(l+e.length)}
if(rf(t,l)){let n=i&&t.sliceDoc(l,l+3*e.length)==e+e+e?e+e+e:e
return{changes:{from:l,to:l+n.length,insert:n},range:H.cursor(l+n.length)}}}else{if(i&&t.sliceDoc(l-2*e.length,l)==e+e&&(o=uf(t,l-2*e.length,s))>-1&&cf(t,o))return{changes:{insert:e+e+e+e,from:l},effects:Ju.of(l+e.length),range:H.cursor(l+e.length)}
if(t.charCategorizer(l)(a)!=bt.Word&&uf(t,l,s)>-1&&!function(t,e,i,n){let s=Ml(t).resolveInner(e,-1),r=n.reduce((t,e)=>Math.max(t,e.length),0)
for(let o=0;o<5;o++){let o=t.sliceDoc(s.from,Math.min(s.to,s.from+i.length+r)),l=o.indexOf(i)
if(!l||l>-1&&n.indexOf(o.slice(0,l))>-1){let e=s.firstChild
for(;e&&e.from==s.from&&e.to-e.from>i.length+l;){if(t.sliceDoc(e.to-i.length,e.to)==i)return!1
e=e.firstChild}return!0}let a=s.to==e&&s.parent
if(!a)break
s=a}return!1}(t,l,e,s))return{changes:{insert:e+e,from:l},effects:Ju.of(l+e.length),range:H.cursor(l+e.length)}}return{range:r=n}})
return r?null:t.update(o,{scrollIntoView:!0,userEvent:"input.type"})}function cf(t,e){let i=Ml(t).resolveInner(e+1)
return i.parent&&i.from==e}function uf(t,e,i){let n=t.charCategorizer(e)
if(n(t.sliceDoc(e-1,e))!=bt.Word)return e
for(let s of i){let i=e-s.length
if(t.sliceDoc(i,e)==s&&n(t.sliceDoc(i-1,i))!=bt.Word)return i}return-1}const ff=[{key:"Ctrl-Space",run:t=>!!t.state.field(qu,!1)&&(t.dispatch({effects:ku.of(!0)}),!0)},{key:"Escape",run:t=>{let e=t.state.field(qu,!1)
return!(!e||!e.active.some(t=>0!=t.state)||(t.dispatch({effects:Su.of(null)}),0))}},{key:"ArrowDown",run:ju(!0)},{key:"ArrowUp",run:ju(!1)},{key:"PageDown",run:ju(!0,"page")},{key:"PageUp",run:ju(!1,"page")},{key:"Enter",run:t=>{let e=t.state.field(qu,!1)
return!(t.state.readOnly||!e||!e.open||e.open.selected<0||e.open.disabled||Date.now()-e.open.timestamp<t.state.facet(Mu).interactionDelay)&&_u(t,e.open.options[e.open.selected])}}],df=J.highest(_s.computeN([Mu],t=>t.facet(Mu).defaultKeymap?[ff]:[]))
class pf{constructor(t,e,i){this.from=t,this.to=e,this.diagnostic=i}}class mf{constructor(t,e,i){this.diagnostics=t,this.panel=e,this.selected=i}static init(t,e,i){let n=t,s=i.facet(Mf).markerFilter
s&&(n=s(n))
let r=ii.set(n.map(t=>t.from==t.to||t.from==t.to-1&&i.doc.lineAt(t.from).to==t.from?ii.widget({widget:new Of(t),diagnostic:t}).range(t.from):ii.mark({attributes:{class:"cm-lintRange cm-lintRange-"+t.severity+(t.markClass?" "+t.markClass:"")},diagnostic:t}).range(t.from,t.to)),!0)
return new mf(r,e,gf(r))}}function gf(t,e=null,i=0){let n=null
return t.between(i,1e9,(t,i,{spec:s})=>{if(!e||s.diagnostic==e)return n=new pf(t,i,s.diagnostic),!1}),n}const vf=ft.define(),wf=ft.define(),yf=ft.define(),bf=U.define({create:()=>new mf(ii.none,null,null),update(t,e){if(e.docChanged){let i=t.diagnostics.map(e.changes),n=null
if(t.selected){let s=e.changes.mapPos(t.selected.from,1)
n=gf(i,t.selected.diagnostic,s)||gf(i,null,s)}t=new mf(i,t.panel,n)}for(let i of e.effects)i.is(vf)?t=mf.init(i.value,t.panel,e.state):i.is(wf)?t=new mf(t.diagnostics,i.value?Ef.open:null,t.selected):i.is(yf)&&(t=new mf(t.diagnostics,t.panel,i.value))
return t},provide:t=>[Gr.from(t,t=>t.panel),Ns.decorations.from(t,t=>t.diagnostics)]}),xf=ii.mark({class:"cm-lintRange cm-lintRange-active"})
function kf(t,e){return uc("ul",{class:"cm-tooltip-lint"},e.map(e=>Df(t,e,!1)))}const Sf=t=>{let e=t.state.field(bf,!1)
return!(!e||!e.panel||(t.dispatch({effects:wf.of(!1)}),0))},Cf=[{key:"Mod-Shift-m",run:t=>{let e=t.state.field(bf,!1)
var i,n
e&&e.panel||t.dispatch({effects:(i=t.state,n=[wf.of(!0)],i.field(bf,!1)?n:n.concat(ft.appendConfig.of(Lf)))})
let s=jr(t,Ef.open)
return s&&s.dom.querySelector(".cm-panel-lint ul").focus(),!0},preventDefault:!0},{key:"F8",run:t=>{let e=t.state.field(bf,!1)
if(!e)return!1
let i=t.state.selection.main,n=e.diagnostics.iter(i.to+1)
return!(!n.value&&(n=e.diagnostics.iter(0),!n.value||n.from==i.from&&n.to==i.to)||(t.dispatch({selection:{anchor:n.from,head:n.to},scrollIntoView:!0}),0))}}],Mf=F.define({combine:t=>Object.assign({sources:t.map(t=>t.source)},Ct(t.map(t=>t.config),{delay:750,markerFilter:null,tooltipFilter:null,needsRefresh:null},{needsRefresh:(t,e)=>t?e?i=>t(i)||e(i):t:e}))})
function Af(t){let e=[]
if(t)t:for(let{name:i}of t){for(let t=0;t<i.length;t++){let n=i[t]
if(/[a-zA-Z]/.test(n)&&!e.some(t=>t.toLowerCase()==n.toLowerCase())){e.push(n)
continue t}}e.push("")}return e}function Df(t,e,i){var n
let s=i?Af(e.actions):[]
return uc("li",{class:"cm-diagnostic cm-diagnostic-"+e.severity},uc("span",{class:"cm-diagnosticText"},e.renderMessage?e.renderMessage():e.message),null===(n=e.actions)||void 0===n?void 0:n.map((i,n)=>{let r=!1,o=n=>{if(n.preventDefault(),r)return
r=!0
let s=gf(t.state.field(bf).diagnostics,e)
s&&i.apply(t,s.from,s.to)},{name:l}=i,a=s[n]?l.indexOf(s[n]):-1,h=a<0?l:[l.slice(0,a),uc("u",l.slice(a,a+1)),l.slice(a+1)]
return uc("button",{type:"button",class:"cm-diagnosticAction",onclick:o,onmousedown:o,"aria-label":` Action: ${l}${a<0?"":` (access key "${s[n]})"`}.`},h)}),e.source&&uc("div",{class:"cm-diagnosticSource"},e.source))}class Of extends ti{constructor(t){super(),this.diagnostic=t}eq(t){return t.diagnostic==this.diagnostic}toDOM(){return uc("span",{class:"cm-lintPoint cm-lintPoint-"+this.diagnostic.severity})}}class Tf{constructor(t,e){this.diagnostic=e,this.id="item_"+Math.floor(4294967295*Math.random()).toString(16),this.dom=Df(t,e,!0),this.dom.id=this.id,this.dom.setAttribute("role","option")}}class Ef{constructor(t){this.view=t,this.items=[],this.list=uc("ul",{tabIndex:0,role:"listbox","aria-label":this.view.state.phrase("Diagnostics"),onkeydown:e=>{if(27==e.keyCode)Sf(this.view),this.view.focus()
else if(38==e.keyCode||33==e.keyCode)this.moveSelection((this.selectedIndex-1+this.items.length)%this.items.length)
else if(40==e.keyCode||34==e.keyCode)this.moveSelection((this.selectedIndex+1)%this.items.length)
else if(36==e.keyCode)this.moveSelection(0)
else if(35==e.keyCode)this.moveSelection(this.items.length-1)
else if(13==e.keyCode)this.view.focus()
else{if(!(e.keyCode>=65&&e.keyCode<=90&&this.selectedIndex>=0))return
{let{diagnostic:i}=this.items[this.selectedIndex],n=Af(i.actions)
for(let s=0;s<n.length;s++)if(n[s].toUpperCase().charCodeAt(0)==e.keyCode){let e=gf(this.view.state.field(bf).diagnostics,i)
e&&i.actions[s].apply(t,e.from,e.to)}}}e.preventDefault()},onclick:t=>{for(let e=0;e<this.items.length;e++)this.items[e].dom.contains(t.target)&&this.moveSelection(e)}}),this.dom=uc("div",{class:"cm-panel-lint"},this.list,uc("button",{type:"button",name:"close","aria-label":this.view.state.phrase("close"),onclick:()=>Sf(this.view)},"×")),this.update()}get selectedIndex(){let t=this.view.state.field(bf).selected
if(!t)return-1
for(let e=0;e<this.items.length;e++)if(this.items[e].diagnostic==t.diagnostic)return e
return-1}update(){let{diagnostics:t,selected:e}=this.view.state.field(bf),i=0,n=!1,s=null
for(t.between(0,this.view.state.doc.length,(t,r,{spec:o})=>{let l,a=-1
for(let e=i;e<this.items.length;e++)if(this.items[e].diagnostic==o.diagnostic){a=e
break}a<0?(l=new Tf(this.view,o.diagnostic),this.items.splice(i,0,l),n=!0):(l=this.items[a],a>i&&(this.items.splice(i,a-i),n=!0)),e&&l.diagnostic==e.diagnostic?l.dom.hasAttribute("aria-selected")||(l.dom.setAttribute("aria-selected","true"),s=l):l.dom.hasAttribute("aria-selected")&&l.dom.removeAttribute("aria-selected"),i++});i<this.items.length&&!(1==this.items.length&&this.items[0].diagnostic.from<0);)n=!0,this.items.pop()
0==this.items.length&&(this.items.push(new Tf(this.view,{from:-1,to:-1,severity:"info",message:this.view.state.phrase("No diagnostics")})),n=!0),s?(this.list.setAttribute("aria-activedescendant",s.id),this.view.requestMeasure({key:this,read:()=>({sel:s.dom.getBoundingClientRect(),panel:this.list.getBoundingClientRect()}),write:({sel:t,panel:e})=>{t.top<e.top?this.list.scrollTop-=e.top-t.top:t.bottom>e.bottom&&(this.list.scrollTop+=t.bottom-e.bottom)}})):this.selectedIndex<0&&this.list.removeAttribute("aria-activedescendant"),n&&this.sync()}sync(){let t=this.list.firstChild
function e(){let e=t
t=e.nextSibling,e.remove()}for(let i of this.items)if(i.dom.parentNode==this.list){for(;t!=i.dom;)e()
t=i.dom.nextSibling}else this.list.insertBefore(i.dom,t)
for(;t;)e()}moveSelection(t){if(this.selectedIndex<0)return
let e=gf(this.view.state.field(bf).diagnostics,this.items[t].diagnostic)
e&&this.view.dispatch({selection:{anchor:e.from,head:e.to},scrollIntoView:!0,effects:yf.of(e)})}static open(t){return new Ef(t)}}function Rf(t){return function(t,e='viewBox="0 0 40 40"'){return`url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${e}>${encodeURIComponent(t)}</svg>')`}(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${t}" fill="none" stroke-width=".7"/>`,'width="6" height="3"')}const Bf=Ns.baseTheme({".cm-diagnostic":{padding:"3px 6px 3px 8px",marginLeft:"-1px",display:"block",whiteSpace:"pre-wrap"},".cm-diagnostic-error":{borderLeft:"5px solid #d11"},".cm-diagnostic-warning":{borderLeft:"5px solid orange"},".cm-diagnostic-info":{borderLeft:"5px solid #999"},".cm-diagnostic-hint":{borderLeft:"5px solid #66d"},".cm-diagnosticAction":{font:"inherit",border:"none",padding:"2px 4px",backgroundColor:"#444",color:"white",borderRadius:"3px",marginLeft:"8px",cursor:"pointer"},".cm-diagnosticSource":{fontSize:"70%",opacity:.7},".cm-lintRange":{backgroundPosition:"left bottom",backgroundRepeat:"repeat-x",paddingBottom:"0.7px"},".cm-lintRange-error":{backgroundImage:Rf("#d11")},".cm-lintRange-warning":{backgroundImage:Rf("orange")},".cm-lintRange-info":{backgroundImage:Rf("#999")},".cm-lintRange-hint":{backgroundImage:Rf("#66d")},".cm-lintRange-active":{backgroundColor:"#ffdd9980"},".cm-tooltip-lint":{padding:0,margin:0},".cm-lintPoint":{position:"relative","&:after":{content:'""',position:"absolute",bottom:0,left:"-2px",borderLeft:"3px solid transparent",borderRight:"3px solid transparent",borderBottom:"4px solid #d11"}},".cm-lintPoint-warning":{"&:after":{borderBottomColor:"orange"}},".cm-lintPoint-info":{"&:after":{borderBottomColor:"#999"}},".cm-lintPoint-hint":{"&:after":{borderBottomColor:"#66d"}},".cm-panel.cm-panel-lint":{position:"relative","& ul":{maxHeight:"100px",overflowY:"auto","& [aria-selected]":{backgroundColor:"#ddd","& u":{textDecoration:"underline"}},"&:focus [aria-selected]":{background_fallback:"#bdf",backgroundColor:"Highlight",color_fallback:"white",color:"HighlightText"},"& u":{textDecoration:"none"},padding:0,margin:0},"& [name=close]":{position:"absolute",top:"0",right:"2px",background:"inherit",border:"none",font:"inherit",padding:0,margin:0}}}),Lf=[bf,Ns.decorations.compute([bf],t=>{let{selected:e,panel:i}=t.field(bf)
return e&&i&&e.from!=e.to?ii.set([xf.range(e.from,e.to)]):ii.none}),function(t,e={}){let i=ft.define(),n=U.define({create:()=>null,update(t,n){if(t&&(e.hideOnChange&&(n.docChanged||n.selection)||e.hideOn&&e.hideOn(n,t)))return null
if(t&&n.docChanged){let e=n.changes.mapPos(t.pos,-1,D.TrackDel)
if(null==e)return null
let i=Object.assign(Object.create(null),t)
i.pos=e,null!=t.end&&(i.end=n.changes.mapPos(t.end)),t=i}for(let e of n.effects)e.is(i)&&(t=e.value),e.is(qr)&&(t=null)
return t},provide:t=>Nr.from(t)})
return[n,Oi.define(s=>new Vr(s,t,n,i,e.hoverTime||300)),Wr]}(function(t,e,i){let{diagnostics:n}=t.state.field(bf),s=[],r=2e8,o=0
n.between(e-(i<0?1:0),e+(i>0?1:0),(t,n,{spec:l})=>{e>=t&&e<=n&&(t==n||(e>t||i>0)&&(e<n||i<0))&&(s.push(l.diagnostic),r=Math.min(t,r),o=Math.max(n,o))})
let l=t.state.facet(Mf).tooltipFilter
return l&&(s=l(s)),s.length?{pos:r,end:o,above:t.state.doc.lineAt(r).to<o,create:()=>({dom:kf(t,s)})}:null},{hideOn:function(t,e){let i=t.startState.doc.lineAt(e.pos)
return!(!t.effects.some(t=>t.is(vf))&&!t.changes.touchesRange(i.from,i.to))}}),Bf]
var Pf=function(t){void 0===t&&(t={})
var{crosshairCursor:e=!1}=t,i=[]
!1!==t.closeBracketsKeymap&&(i=i.concat(sf)),!1!==t.defaultKeymap&&(i=i.concat(hc)),!1!==t.searchKeymap&&(i=i.concat(lu)),!1!==t.historyKeymap&&(i=i.concat(fh)),!1!==t.foldKeymap&&(i=i.concat(oa)),!1!==t.completionKeymap&&(i=i.concat(ff)),!1!==t.lintKeymap&&(i=i.concat(Cf))
var n=[]
return!1!==t.lineNumbers&&n.push(function(t={}){return[ho.of(t),eo(),fo]}()),!1!==t.highlightActiveLineGutter&&n.push(go),!1!==t.highlightSpecialChars&&n.push(function(t={}){return[vr.of(t),wr||(wr=Oi.fromClass(class{constructor(t){this.view=t,this.decorations=ii.none,this.decorationCache=Object.create(null),this.decorator=this.makeDecorator(t.state.facet(vr)),this.decorations=this.decorator.createDeco(t)}makeDecorator(t){return new fr({regexp:t.specialChars,decoration:(e,i,n)=>{let{doc:s}=i.state,r=S(e[0],0)
if(9==r){let t=s.lineAt(n),e=i.state.tabSize,r=zt(t.text,e,n-t.from)
return ii.replace({widget:new br((e-r%e)*this.view.defaultCharacterWidth)})}return this.decorationCache[r]||(this.decorationCache[r]=ii.replace({widget:new yr(t,r)}))},boundary:t.replaceTabs?void 0:/[^]/})}update(t){let e=t.state.facet(vr)
t.startState.facet(vr)!=e?(this.decorator=this.makeDecorator(e),this.decorations=this.decorator.createDeco(t.view)):this.decorations=this.decorator.updateDeco(t,this.decorations)}},{decorations:t=>t.decorations}))]}()),!1!==t.history&&n.push(function(t={}){return[Xa,Ja.of(t),Ns.domEventHandlers({beforeinput(t,e){let i="historyUndo"==t.inputType?Qa:"historyRedo"==t.inputType?Za:null
return!!i&&(t.preventDefault(),i(e))}})]}()),!1!==t.foldGutter&&n.push(function(t={}){let e=Object.assign(Object.assign({},ua),t),i=new fa(e,!0),n=new fa(e,!1),s=Oi.fromClass(class{constructor(t){this.from=t.viewport.from,this.markers=this.buildMarkers(t)}update(t){(t.docChanged||t.viewportChanged||t.startState.facet(Pl)!=t.state.facet(Pl)||t.startState.field(ea,!1)!=t.state.field(ea,!1)||Ml(t.startState)!=Ml(t.state)||e.foldingChanged(t))&&(this.markers=this.buildMarkers(t.view))}buildMarkers(t){let e=new Et
for(let s of t.viewportLineBlocks){let r=ia(t.state,s.from,s.to)?n:Xl(t.state,s.from,s.to)?i:null
r&&e.add(s.from,s.from,r)}return e.finish()}}),{domEventHandlers:r}=e
return[s,Zr({class:"cm-foldGutter",markers(t){var e
return(null===(e=t.plugin(s))||void 0===e?void 0:e.markers)||Tt.empty},initialSpacer:()=>new fa(e,!1),domEventHandlers:Object.assign(Object.assign({},r),{click:(t,e,i)=>{if(r.click&&r.click(t,e,i))return!0
let n=ia(t.state,e.from,e.to)
if(n)return t.dispatch({effects:Zl.of(n)}),!0
let s=Xl(t.state,e.from,e.to)
return!!s&&(t.dispatch({effects:Ql.of(s)}),!0)}})}),ha()]}()),!1!==t.drawSelection&&n.push(function(t={}){return[er.of(t),nr,rr,lr,xi.of(!0)]}()),!1!==t.dropCursor&&n.push([hr,cr]),!1!==t.allowMultipleSelections&&n.push(St.allowMultipleSelections.of(!0)),!1!==t.indentOnInput&&n.push(St.transactionFilter.of(t=>{if(!t.docChanged||!t.isUserEvent("input.type")&&!t.isUserEvent("input.complete"))return t
let e=t.startState.languageDataAt("indentOnInput",t.startState.selection.main.head)
if(!e.length)return t
let i=t.newDoc,{head:n}=t.newSelection.main,s=i.lineAt(n)
if(n>s.from+200)return t
let r=i.sliceString(s.from,n)
if(!e.some(t=>t.test(r)))return t
let{state:o}=t,l=-1,a=[]
for(let{head:h}of o.selection.ranges){let t=o.doc.lineAt(h)
if(t.from==l)continue
l=t.from
let e=Vl(o,t.from)
if(null==e)continue
let i=/^\s*/.exec(t.text)[0],n=Wl(o,e)
i!=n&&a.push({from:t.from,to:t.from+i.length,insert:n})}return a.length?[t,{changes:a,sequential:!0}]:t})),!1!==t.syntaxHighlighting&&n.push(wa(ba,{fallback:!0})),!1!==t.bracketMatching&&n.push(function(t={}){return[Sa.of(t),Oa]}()),!1!==t.closeBrackets&&n.push([nf,Yu]),!1!==t.autocompletion&&n.push(function(t={}){return[qu,Mu.of(t),$u,df,Uu]}()),!1!==t.rectangularSelection&&n.push(Ns.mouseSelectionStyle.of((t,e)=>(t=>t.altKey&&0==t.button)(e)?function(t,e){let i=Mr(t,e),n=t.state.selection
return i?{update(t){if(t.docChanged){let e=t.changes.mapPos(t.startState.doc.line(i.line).from),s=t.state.doc.lineAt(e)
i={line:s.number,col:i.col,off:Math.min(i.off,s.length)},n=n.map(t.changes)}},get(e,s,r){let o=Mr(t,e)
if(!o)return n
let l=function(t,e,i){let n=Math.min(e.line,i.line),s=Math.max(e.line,i.line),r=[]
if(e.off>Cr||i.off>Cr||e.col<0||i.col<0){let o=Math.min(e.off,i.off),l=Math.max(e.off,i.off)
for(let e=n;e<=s;e++){let i=t.doc.line(e)
i.length<=l&&r.push(H.range(i.from+o,i.to+l))}}else{let o=Math.min(e.col,i.col),l=Math.max(e.col,i.col)
for(let e=n;e<=s;e++){let i=t.doc.line(e),n=qt(i.text,o,t.tabSize,!0)
if(n<0)r.push(H.cursor(i.to))
else{let e=qt(i.text,l,t.tabSize)
r.push(H.range(i.from+n,i.from+e))}}}return r}(t.state,i,o)
return l.length?r?H.create(l.concat(n.ranges)):H.create(l):n}}:null}(t,e):null)),!1!==e&&n.push(function(t={}){let[e,i]=Ar[t.key||"Alt"],n=Oi.fromClass(class{constructor(t){this.view=t,this.isDown=!1}set(t){this.isDown!=t&&(this.isDown=t,this.view.update([]))}},{eventHandlers:{keydown(t){this.set(t.keyCode==e||i(t))},keyup(t){t.keyCode!=e&&i(t)||this.set(!1)},mousemove(t){this.set(i(t))}}})
return[n,Ns.contentAttributes.of(t=>{var e
return(null===(e=t.plugin(n))||void 0===e?void 0:e.isDown)?Dr:null})]}()),!1!==t.highlightActiveLine&&n.push(kr),!1!==t.highlightSelectionMatches&&n.push([Bc,Rc]),t.tabSize&&"number"==typeof t.tabSize&&n.push(Nl.of(" ".repeat(t.tabSize))),n.concat([_s.of(i.flat())]).filter(Boolean)}
const If="#e06c75",Nf="#abb2bf",Hf="#7d8799",Wf="#d19a66",Vf="#2c313a",Ff="#282c34",zf="#353a42",qf="#528bff",_f=[Ns.theme({"&":{color:Nf,backgroundColor:Ff},".cm-content":{caretColor:qf},".cm-cursor, .cm-dropCursor":{borderLeftColor:qf},"&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection":{backgroundColor:"#3E4451"},".cm-panels":{backgroundColor:"#21252b",color:Nf},".cm-panels.cm-panels-top":{borderBottom:"2px solid black"},".cm-panels.cm-panels-bottom":{borderTop:"2px solid black"},".cm-searchMatch":{backgroundColor:"#72a1ff59",outline:"1px solid #457dff"},".cm-searchMatch.cm-searchMatch-selected":{backgroundColor:"#6199ff2f"},".cm-activeLine":{backgroundColor:"#6699ff0b"},".cm-selectionMatch":{backgroundColor:"#aafe661a"},"&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket":{backgroundColor:"#bad0f847"},".cm-gutters":{backgroundColor:Ff,color:Hf,border:"none"},".cm-activeLineGutter":{backgroundColor:Vf},".cm-foldPlaceholder":{backgroundColor:"transparent",border:"none",color:"#ddd"},".cm-tooltip":{border:"none",backgroundColor:zf},".cm-tooltip .cm-tooltip-arrow:before":{borderTopColor:"transparent",borderBottomColor:"transparent"},".cm-tooltip .cm-tooltip-arrow:after":{borderTopColor:zf,borderBottomColor:zf},".cm-tooltip-autocomplete":{"& > ul > li[aria-selected]":{backgroundColor:Vf,color:Nf}}},{dark:!0}),wa(pa.define([{tag:yl.keyword,color:"#c678dd"},{tag:[yl.name,yl.deleted,yl.character,yl.propertyName,yl.macroName],color:If},{tag:[yl.function(yl.variableName),yl.labelName],color:"#61afef"},{tag:[yl.color,yl.constant(yl.name),yl.standard(yl.name)],color:Wf},{tag:[yl.definition(yl.name),yl.separator],color:Nf},{tag:[yl.typeName,yl.className,yl.number,yl.changed,yl.annotation,yl.modifier,yl.self,yl.namespace],color:"#e5c07b"},{tag:[yl.operator,yl.operatorKeyword,yl.url,yl.escape,yl.regexp,yl.link,yl.special(yl.string)],color:"#56b6c2"},{tag:[yl.meta,yl.comment],color:Hf},{tag:yl.strong,fontWeight:"bold"},{tag:yl.emphasis,fontStyle:"italic"},{tag:yl.strikethrough,textDecoration:"line-through"},{tag:yl.link,color:Hf,textDecoration:"underline"},{tag:yl.heading,fontWeight:"bold",color:If},{tag:[yl.atom,yl.bool,yl.special(yl.variableName)],color:Wf},{tag:[yl.processingInstruction,yl.string,yl.inserted],color:"#98c379"},{tag:yl.invalid,color:"#ffffff"}]))]
var jf=Ns.theme({"&":{backgroundColor:"#fff"}},{dark:!1}),Kf=function(t){void 0===t&&(t={})
var{indentWithTab:e=!0,editable:i=!0,readOnly:n=!1,theme:s="light",placeholder:r="",basicSetup:o=!0}=t,l=[]
switch(e&&l.unshift(_s.of([cc])),o&&("boolean"==typeof o?l.unshift(Pf()):l.unshift(Pf(o))),r&&l.unshift(function(t){return Oi.fromClass(class{constructor(e){this.view=e,this.placeholder=t?ii.set([ii.widget({widget:new Sr(t),side:1}).range(0)]):ii.none}get decorations(){return this.view.state.doc.length?ii.none:this.placeholder}},{decorations:t=>t.decorations})}(r)),s){case"light":l.push(jf)
break
case"dark":l.push(_f)
break
case"none":break
default:l.push(s)}return!1===i&&l.push(Ns.editable.of(!1)),n&&l.push(St.readOnly.of(!0)),[...l]}
class $f{constructor(t,e){this.timeLeftMS=void 0,this.timeoutMS=void 0,this.isCancelled=!1,this.isTimeExhausted=!1,this.callbacks=[],this.timeLeftMS=e,this.timeoutMS=e,this.callbacks.push(t)}tick(){if(!this.isCancelled&&!this.isTimeExhausted&&(this.timeLeftMS--,this.timeLeftMS<=0)){this.isTimeExhausted=!0
var t=this.callbacks.slice()
this.callbacks.length=0,t.forEach(t=>{try{t()}catch(t){console.error("TimeoutLatch callback error:",t)}})}}cancel(){this.isCancelled=!0,this.callbacks.length=0}reset(){this.timeLeftMS=this.timeoutMS,this.isCancelled=!1,this.isTimeExhausted=!1}get isDone(){return this.isCancelled||this.isTimeExhausted}}class Uf{constructor(){this.interval=null,this.latches=new Set}add(t){this.latches.add(t),this.start()}remove(t){this.latches.delete(t),0===this.latches.size&&this.stop()}start(){null===this.interval&&(this.interval=setInterval(()=>{this.latches.forEach(t=>{t.tick(),t.isDone&&this.remove(t)})},1))}stop(){null!==this.interval&&(clearInterval(this.interval),this.interval=null)}}var Gf=null,Jf=ht.define(),Xf=[],Yf=i(33894),Qf=["className","value","selection","extensions","onChange","onStatistics","onCreateEditor","onUpdate","autoFocus","theme","height","minHeight","maxHeight","width","minWidth","maxWidth","basicSetup","placeholder","indentWithTab","editable","readOnly","root","initialState"],Zf=(0,r.forwardRef)((t,e)=>{var{className:i,value:o="",selection:l,extensions:a=[],onChange:h,onStatistics:c,onCreateEditor:u,onUpdate:f,autoFocus:d,theme:p="light",height:m,minHeight:g,maxHeight:v,width:w,minWidth:y,maxWidth:b,basicSetup:x,placeholder:k,indentWithTab:S,editable:C,readOnly:M,root:A,initialState:D}=t,O=(0,s.A)(t,Qf),T=(0,r.useRef)(null),{state:E,view:R,container:B,setContainer:L}=function(t){var{value:e,selection:i,onChange:n,onStatistics:s,onCreateEditor:o,onUpdate:l,extensions:a=Xf,autoFocus:h,theme:c="light",height:u=null,minHeight:f=null,maxHeight:d=null,width:p=null,minWidth:m=null,maxWidth:g=null,placeholder:v="",editable:w=!0,readOnly:y=!1,indentWithTab:b=!0,basicSetup:x=!0,root:k,initialState:S}=t,[C,M]=(0,r.useState)(),[A,D]=(0,r.useState)(),[O,T]=(0,r.useState)(),E=(0,r.useState)(()=>({current:null}))[0],R=(0,r.useState)(()=>({current:null}))[0],B=Ns.theme({"&":{height:u,minHeight:f,maxHeight:d,width:p,minWidth:m,maxWidth:g},"& .cm-scroller":{height:"100% !important"}}),L=Ns.updateListener.of(t=>{if(t.docChanged&&"function"==typeof n&&!t.transactions.some(t=>t.annotation(Jf))){E.current?E.current.reset():(E.current=new $f(()=>{if(R.current){var t=R.current
R.current=null,t()}E.current=null},200),("undefined"==typeof window?new Uf:(Gf||(Gf=new Uf),Gf)).add(E.current))
var e=t.state.doc.toString()
n(e,t)}s&&s((t=>({line:t.state.doc.lineAt(t.state.selection.main.from),lineCount:t.state.doc.lines,lineBreak:t.state.lineBreak,length:t.state.doc.length,readOnly:t.state.readOnly,tabSize:t.state.tabSize,selection:t.state.selection,selectionAsSingle:t.state.selection.asSingle().main,ranges:t.state.selection.ranges,selectionCode:t.state.sliceDoc(t.state.selection.main.from,t.state.selection.main.to),selections:t.state.selection.ranges.map(e=>t.state.sliceDoc(e.from,e.to)),selectedText:t.state.selection.ranges.some(t=>!t.empty)}))(t))}),P=[L,B,...Kf({theme:c,editable:w,readOnly:y,placeholder:v,indentWithTab:b,basicSetup:x})]
return l&&"function"==typeof l&&P.push(Ns.updateListener.of(l)),P=P.concat(a),(0,r.useLayoutEffect)(()=>{if(C&&!O){var t={doc:e,selection:i,extensions:P},n=S?St.fromJSON(S.json,t,S.fields):St.create(t)
if(T(n),!A){var s=new Ns({state:n,parent:C,root:k})
D(s),o&&o(s,n)}}return()=>{A&&(T(void 0),D(void 0))}},[C,O]),(0,r.useEffect)(()=>{t.container&&M(t.container)},[t.container]),(0,r.useEffect)(()=>()=>{A&&(A.destroy(),D(void 0)),E.current&&(E.current.cancel(),E.current=null)},[A]),(0,r.useEffect)(()=>{h&&A&&A.focus()},[h,A]),(0,r.useEffect)(()=>{A&&A.dispatch({effects:ft.reconfigure.of(P)})},[c,a,u,f,d,p,m,g,v,w,y,b,x,n,l]),(0,r.useEffect)(()=>{if(void 0!==e){var t=A?A.state.doc.toString():""
if(A&&e!==t){var i=()=>{A&&e!==A.state.doc.toString()&&A.dispatch({changes:{from:0,to:A.state.doc.toString().length,insert:e||""},annotations:[Jf.of(!0)]})}
E.current&&!E.current.isDone?R.current=i:i()}}},[e,A]),{state:O,setState:T,view:A,setView:D,container:C,setContainer:M}}({root:A,value:o,autoFocus:d,theme:p,height:m,minHeight:g,maxHeight:v,width:w,minWidth:y,maxWidth:b,basicSetup:x,placeholder:k,indentWithTab:S,editable:C,readOnly:M,selection:l,onChange:h,onStatistics:c,onCreateEditor:u,onUpdate:f,extensions:a,initialState:D});(0,r.useImperativeHandle)(e,()=>({editor:T.current,state:E,view:R}),[T,B,E,R])
var P=(0,r.useCallback)(t=>{T.current=t,L(t)},[L])
if("string"!=typeof o)throw new Error("value must be typeof string but got "+typeof o)
var I="string"==typeof p?"cm-theme-"+p:"cm-theme"
return(0,Yf.jsx)("div",(0,n.A)({ref:P,className:I+(i?" "+i:"")},O))})
Zf.displayName="CodeMirror"
const td=Zf}}])

//# sourceMappingURL=chunk.981.07e7417905b86f5852fb.map