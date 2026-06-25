"use strict";(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[553],{93582(t,e,i){i.d(e,{Ay:()=>Kf})
var n=i(29398),s=i(73369),o=i(48026)
let r=[],l=[]
function a(t){if(t<768)return!1
for(let e=0,i=r.length;;){let n=e+i>>1
if(t<r[n])i=n
else{if(!(t>=l[n]))return!0
e=n+1}if(e==i)return!1}}function h(t){return t>=127462&&t<=127487}function c(t,e,i=!0,n=!0){return(i?u:d)(t,e,n)}function u(t,e,i){if(e==t.length)return e
e&&p(t.charCodeAt(e))&&m(t.charCodeAt(e-1))&&e--
let n=f(t,e)
for(e+=g(n);e<t.length;){let s=f(t,e)
if(8205==n||8205==s||i&&a(s))e+=g(s),n=s
else{if(!h(s))break
{let i=0,n=e-2
for(;n>=0&&h(f(t,n));)i++,n-=2
if(i%2==0)break
e+=2}}}return e}function d(t,e,i){for(;e>0;){let n=u(t,e-2,i)
if(n<e)return n
e--}return 0}function f(t,e){let i=t.charCodeAt(e)
if(!m(i)||e+1==t.length)return i
let n=t.charCodeAt(e+1)
return p(n)?n-56320+(i-55296<<10)+65536:i}function p(t){return t>=56320&&t<57344}function m(t){return t>=55296&&t<56320}function g(t){return t<65536?1:2}(()=>{let t="lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map(t=>t?parseInt(t,36):1)
for(let e=0,i=0;e<t.length;e++)(e%2?l:r).push(i+=t[e])})()
class v{lineAt(t){if(t<0||t>this.length)throw new RangeError(`Invalid position ${t} in document of length ${this.length}`)
return this.lineInner(t,!1,1,0)}line(t){if(t<1||t>this.lines)throw new RangeError(`Invalid line number ${t} in ${this.lines}-line document`)
return this.lineInner(t,!0,1,0)}replace(t,e,i){[t,e]=A(this,t,e)
let n=[]
return this.decompose(0,t,n,2),i.length&&i.decompose(0,i.length,n,3),this.decompose(e,this.length,n,1),b.from(n,this.length-(e-t)+i.length)}append(t){return this.replace(this.length,this.length,t)}slice(t,e=this.length){[t,e]=A(this,t,e)
let i=[]
return this.decompose(t,e,i,0),b.from(i,e-t)}eq(t){if(t==this)return!0
if(t.length!=this.length||t.lines!=this.lines)return!1
let e=this.scanIdentical(t,1),i=this.length-this.scanIdentical(t,-1),n=new k(this),s=new k(t)
for(let o=e,r=e;;){if(n.next(o),s.next(o),o=0,n.lineBreak!=s.lineBreak||n.done!=s.done||n.value!=s.value)return!1
if(r+=n.value.length,n.done||r>=i)return!0}}iter(t=1){return new k(this,t)}iterRange(t,e=this.length){return new S(this,t,e)}iterLines(t,e){let i
if(null==t)i=this.iter()
else{null==e&&(e=this.lines+1)
let n=this.line(t).from
i=this.iterRange(n,Math.max(n,e==this.lines+1?this.length:e<=1?0:this.line(e-1).to))}return new C(i)}toString(){return this.sliceString(0)}toJSON(){let t=[]
return this.flatten(t),t}constructor(){}static of(t){if(0==t.length)throw new RangeError("A document must have at least one line")
return 1!=t.length||t[0]?t.length<=32?new w(t):b.from(w.split(t,[])):v.empty}}class w extends v{constructor(t,e=function(t){let e=-1
for(let i of t)e+=i.length+1
return e}(t)){super(),this.text=t,this.length=e}get lines(){return this.text.length}get children(){return null}lineInner(t,e,i,n){for(let s=0;;s++){let o=this.text[s],r=n+o.length
if((e?i:r)>=t)return new M(n,r,i,o)
n=r+1,i++}}decompose(t,e,i,n){let s=t<=0&&e>=this.length?this:new w(x(this.text,t,e),Math.min(e,this.length)-Math.max(0,t))
if(1&n){let t=i.pop(),e=y(s.text,t.text.slice(),0,s.length)
if(e.length<=32)i.push(new w(e,t.length+s.length))
else{let t=e.length>>1
i.push(new w(e.slice(0,t)),new w(e.slice(t)))}}else i.push(s)}replace(t,e,i){if(!(i instanceof w))return super.replace(t,e,i);[t,e]=A(this,t,e)
let n=y(this.text,y(i.text,x(this.text,0,t)),e),s=this.length+i.length-(e-t)
return n.length<=32?new w(n,s):b.from(w.split(n,[]),s)}sliceString(t,e=this.length,i="\n"){[t,e]=A(this,t,e)
let n=""
for(let s=0,o=0;s<=e&&o<this.text.length;o++){let r=this.text[o],l=s+r.length
s>t&&o&&(n+=i),t<l&&e>s&&(n+=r.slice(Math.max(0,t-s),e-s)),s=l+1}return n}flatten(t){for(let e of this.text)t.push(e)}scanIdentical(){return 0}static split(t,e){let i=[],n=-1
for(let s of t)i.push(s),n+=s.length+1,32==i.length&&(e.push(new w(i,n)),i=[],n=-1)
return n>-1&&e.push(new w(i,n)),e}}class b extends v{constructor(t,e){super(),this.children=t,this.length=e,this.lines=0
for(let i of t)this.lines+=i.lines}lineInner(t,e,i,n){for(let s=0;;s++){let o=this.children[s],r=n+o.length,l=i+o.lines-1
if((e?l:r)>=t)return o.lineInner(t,e,i,n)
n=r+1,i=l+1}}decompose(t,e,i,n){for(let s=0,o=0;o<=e&&s<this.children.length;s++){let r=this.children[s],l=o+r.length
if(t<=l&&e>=o){let s=n&((o<=t?1:0)|(l>=e?2:0))
o>=t&&l<=e&&!s?i.push(r):r.decompose(t-o,e-o,i,s)}o=l+1}}replace(t,e,i){if([t,e]=A(this,t,e),i.lines<this.lines)for(let n=0,s=0;n<this.children.length;n++){let o=this.children[n],r=s+o.length
if(t>=s&&e<=r){let l=o.replace(t-s,e-s,i),a=this.lines-o.lines+l.lines
if(l.lines<a>>4&&l.lines>a>>6){let s=this.children.slice()
return s[n]=l,new b(s,this.length-(e-t)+i.length)}return super.replace(s,r,l)}s=r+1}return super.replace(t,e,i)}sliceString(t,e=this.length,i="\n"){[t,e]=A(this,t,e)
let n=""
for(let s=0,o=0;s<this.children.length&&o<=e;s++){let r=this.children[s],l=o+r.length
o>t&&s&&(n+=i),t<l&&e>o&&(n+=r.sliceString(t-o,e-o,i)),o=l+1}return n}flatten(t){for(let e of this.children)e.flatten(t)}scanIdentical(t,e){if(!(t instanceof b))return 0
let i=0,[n,s,o,r]=e>0?[0,0,this.children.length,t.children.length]:[this.children.length-1,t.children.length-1,-1,-1]
for(;;n+=e,s+=e){if(n==o||s==r)return i
let l=this.children[n],a=t.children[s]
if(l!=a)return i+l.scanIdentical(a,e)
i+=l.length+1}}static from(t,e=t.reduce((t,e)=>t+e.length+1,-1)){let i=0
for(let d of t)i+=d.lines
if(i<32){let i=[]
for(let e of t)e.flatten(i)
return new w(i,e)}let n=Math.max(32,i>>5),s=n<<1,o=n>>1,r=[],l=0,a=-1,h=[]
function c(t){let e
if(t.lines>s&&t instanceof b)for(let i of t.children)c(i)
else t.lines>o&&(l>o||!l)?(u(),r.push(t)):t instanceof w&&l&&(e=h[h.length-1])instanceof w&&t.lines+e.lines<=32?(l+=t.lines,a+=t.length+1,h[h.length-1]=new w(e.text.concat(t.text),e.length+1+t.length)):(l+t.lines>n&&u(),l+=t.lines,a+=t.length+1,h.push(t))}function u(){0!=l&&(r.push(1==h.length?h[0]:b.from(h,a)),a=-1,l=h.length=0)}for(let d of t)c(d)
return u(),1==r.length?r[0]:new b(r,e)}}function y(t,e,i=0,n=1e9){for(let s=0,o=0,r=!0;o<t.length&&s<=n;o++){let l=t[o],a=s+l.length
a>=i&&(a>n&&(l=l.slice(0,n-s)),s<i&&(l=l.slice(i-s)),r?(e[e.length-1]+=l,r=!1):e.push(l)),s=a+1}return e}function x(t,e,i){return y(t,[""],e,i)}v.empty=new w([""],0)
class k{constructor(t,e=1){this.dir=e,this.done=!1,this.lineBreak=!1,this.value="",this.nodes=[t],this.offsets=[e>0?1:(t instanceof w?t.text.length:t.children.length)<<1]}nextInner(t,e){for(this.done=this.lineBreak=!1;;){let i=this.nodes.length-1,n=this.nodes[i],s=this.offsets[i],o=s>>1,r=n instanceof w?n.text.length:n.children.length
if(o==(e>0?r:0)){if(0==i)return this.done=!0,this.value="",this
e>0&&this.offsets[i-1]++,this.nodes.pop(),this.offsets.pop()}else if((1&s)==(e>0?0:1)){if(this.offsets[i]+=e,0==t)return this.lineBreak=!0,this.value="\n",this
t--}else if(n instanceof w){let s=n.text[o+(e<0?-1:0)]
if(this.offsets[i]+=e,s.length>Math.max(0,t))return this.value=0==t?s:e>0?s.slice(t):s.slice(0,s.length-t),this
t-=s.length}else{let s=n.children[o+(e<0?-1:0)]
t>s.length?(t-=s.length,this.offsets[i]+=e):(e<0&&this.offsets[i]--,this.nodes.push(s),this.offsets.push(e>0?1:(s instanceof w?s.text.length:s.children.length)<<1))}}}next(t=0){return t<0&&(this.nextInner(-t,-this.dir),t=this.value.length),this.nextInner(t,this.dir)}}class S{constructor(t,e,i){this.value="",this.done=!1,this.cursor=new k(t,e>i?-1:1),this.pos=e>i?t.length:0,this.from=Math.min(e,i),this.to=Math.max(e,i)}nextInner(t,e){if(e<0?this.pos<=this.from:this.pos>=this.to)return this.value="",this.done=!0,this
t+=Math.max(0,e<0?this.pos-this.to:this.from-this.pos)
let i=e<0?this.pos-this.from:this.to-this.pos
t>i&&(t=i),i-=t
let{value:n}=this.cursor.next(t)
return this.pos+=(n.length+t)*e,this.value=n.length<=i?n:e<0?n.slice(n.length-i):n.slice(0,i),this.done=!this.value,this}next(t=0){return t<0?t=Math.max(t,this.from-this.pos):t>0&&(t=Math.min(t,this.to-this.pos)),this.nextInner(t,this.cursor.dir)}get lineBreak(){return this.cursor.lineBreak&&""!=this.value}}class C{constructor(t){this.inner=t,this.afterBreak=!0,this.value="",this.done=!1}next(t=0){let{done:e,lineBreak:i,value:n}=this.inner.next(t)
return e&&this.afterBreak?(this.value="",this.afterBreak=!1):e?(this.done=!0,this.value=""):i?this.afterBreak?this.value="":(this.afterBreak=!0,this.next()):(this.value=n,this.afterBreak=!1),this}get lineBreak(){return!1}}"undefined"!=typeof Symbol&&(v.prototype[Symbol.iterator]=function(){return this.iter()},k.prototype[Symbol.iterator]=S.prototype[Symbol.iterator]=C.prototype[Symbol.iterator]=function(){return this})
class M{constructor(t,e,i,n){this.from=t,this.to=e,this.number=i,this.text=n}get length(){return this.to-this.from}}function A(t,e,i){return[e=Math.max(0,Math.min(t.length,e)),Math.max(e,Math.min(t.length,i))]}function T(t,e,i=!0,n=!0){return c(t,e,i,n)}function O(t,e){let i=t.charCodeAt(e)
if(!((n=i)>=55296&&n<56320&&e+1!=t.length))return i
var n
let s=t.charCodeAt(e+1)
return function(t){return t>=56320&&t<57344}(s)?s-56320+(i-55296<<10)+65536:i}function D(t){return t<=65535?String.fromCharCode(t):(t-=65536,String.fromCharCode(55296+(t>>10),56320+(1023&t)))}function E(t){return t<65536?1:2}const B=/\r\n?|\n/
var R=function(t){return t[t.Simple=0]="Simple",t[t.TrackDel=1]="TrackDel",t[t.TrackBefore=2]="TrackBefore",t[t.TrackAfter=3]="TrackAfter",t}(R||(R={}))
class L{constructor(t){this.sections=t}get length(){let t=0
for(let e=0;e<this.sections.length;e+=2)t+=this.sections[e]
return t}get newLength(){let t=0
for(let e=0;e<this.sections.length;e+=2){let i=this.sections[e+1]
t+=i<0?this.sections[e]:i}return t}get empty(){return 0==this.sections.length||2==this.sections.length&&this.sections[1]<0}iterGaps(t){for(let e=0,i=0,n=0;e<this.sections.length;){let s=this.sections[e++],o=this.sections[e++]
o<0?(t(i,n,s),n+=s):n+=o,i+=s}}iterChangedRanges(t,e=!1){W(this,t,e)}get invertedDesc(){let t=[]
for(let e=0;e<this.sections.length;){let i=this.sections[e++],n=this.sections[e++]
n<0?t.push(i,n):t.push(n,i)}return new L(t)}composeDesc(t){return this.empty?t:t.empty?this:V(this,t)}mapDesc(t,e=!1){return t.empty?this:H(this,t,e)}mapPos(t,e=-1,i=R.Simple){let n=0,s=0
for(let o=0;o<this.sections.length;){let r=this.sections[o++],l=this.sections[o++],a=n+r
if(l<0){if(a>t)return s+(t-n)
s+=r}else{if(i!=R.Simple&&a>=t&&(i==R.TrackDel&&n<t&&a>t||i==R.TrackBefore&&n<t||i==R.TrackAfter&&a>t))return null
if(a>t||a==t&&e<0&&!r)return t==n||e<0?s:s+l
s+=l}n=a}if(t>n)throw new RangeError(`Position ${t} is out of range for changeset of length ${n}`)
return s}touchesRange(t,e=t){for(let i=0,n=0;i<this.sections.length&&n<=e;){let s=n+this.sections[i++]
if(this.sections[i++]>=0&&n<=e&&s>=t)return!(n<t&&s>e)||"cover"
n=s}return!1}toString(){let t=""
for(let e=0;e<this.sections.length;){let i=this.sections[e++],n=this.sections[e++]
t+=(t?" ":"")+i+(n>=0?":"+n:"")}return t}toJSON(){return this.sections}static fromJSON(t){if(!Array.isArray(t)||t.length%2||t.some(t=>"number"!=typeof t))throw new RangeError("Invalid JSON representation of ChangeDesc")
return new L(t)}static create(t){return new L(t)}}class I extends L{constructor(t,e){super(t),this.inserted=e}apply(t){if(this.length!=t.length)throw new RangeError("Applying change set to a document with the wrong length")
return W(this,(e,i,n,s,o)=>t=t.replace(n,n+(i-e),o),!1),t}mapDesc(t,e=!1){return H(this,t,e,!0)}invert(t){let e=this.sections.slice(),i=[]
for(let n=0,s=0;n<e.length;n+=2){let o=e[n],r=e[n+1]
if(r>=0){e[n]=r,e[n+1]=o
let l=n>>1
for(;i.length<l;)i.push(v.empty)
i.push(o?t.slice(s,s+o):v.empty)}s+=o}return new I(e,i)}compose(t){return this.empty?t:t.empty?this:V(this,t,!0)}map(t,e=!1){return t.empty?this:H(this,t,e,!0)}iterChanges(t,e=!1){W(this,t,e)}get desc(){return L.create(this.sections)}filter(t){let e=[],i=[],n=[],s=new F(this)
t:for(let o=0,r=0;;){let l=o==t.length?1e9:t[o++]
for(;r<l||r==l&&0==s.len;){if(s.done)break t
let t=Math.min(s.len,l-r)
P(n,t,-1)
let o=-1==s.ins?-1:0==s.off?s.ins:0
P(e,t,o),o>0&&N(i,e,s.text),s.forward(t),r+=t}let a=t[o++]
for(;r<a;){if(s.done)break t
let t=Math.min(s.len,a-r)
P(e,t,-1),P(n,t,-1==s.ins?-1:0==s.off?s.ins:0),s.forward(t),r+=t}}return{changes:new I(e,i),filtered:L.create(n)}}toJSON(){let t=[]
for(let e=0;e<this.sections.length;e+=2){let i=this.sections[e],n=this.sections[e+1]
n<0?t.push(i):0==n?t.push([i]):t.push([i].concat(this.inserted[e>>1].toJSON()))}return t}static of(t,e,i){let n=[],s=[],o=0,r=null
function l(t=!1){if(!t&&!n.length)return
o<e&&P(n,e-o,-1)
let i=new I(n,s)
r=r?r.compose(i.map(r)):i,n=[],s=[],o=0}return function t(a){if(Array.isArray(a))for(let e of a)t(e)
else if(a instanceof I){if(a.length!=e)throw new RangeError(`Mismatched change set length (got ${a.length}, expected ${e})`)
l(),r=r?r.compose(a.map(r)):a}else{let{from:t,to:r=t,insert:h}=a
if(t>r||t<0||r>e)throw new RangeError(`Invalid change range ${t} to ${r} (in doc of length ${e})`)
let c=h?"string"==typeof h?v.of(h.split(i||B)):h:v.empty,u=c.length
if(t==r&&0==u)return
t<o&&l(),t>o&&P(n,t-o,-1),P(n,r-t,u),N(s,n,c),o=r}}(t),l(!r),r}static empty(t){return new I(t?[t,-1]:[],[])}static fromJSON(t){if(!Array.isArray(t))throw new RangeError("Invalid JSON representation of ChangeSet")
let e=[],i=[]
for(let n=0;n<t.length;n++){let s=t[n]
if("number"==typeof s)e.push(s,-1)
else{if(!Array.isArray(s)||"number"!=typeof s[0]||s.some((t,e)=>e&&"string"!=typeof t))throw new RangeError("Invalid JSON representation of ChangeSet")
if(1==s.length)e.push(s[0],0)
else{for(;i.length<n;)i.push(v.empty)
i[n]=v.of(s.slice(1)),e.push(s[0],i[n].length)}}}return new I(e,i)}static createSet(t,e){return new I(t,e)}}function P(t,e,i,n=!1){if(0==e&&i<=0)return
let s=t.length-2
s>=0&&i<=0&&i==t[s+1]?t[s]+=e:s>=0&&0==e&&0==t[s]?t[s+1]+=i:n?(t[s]+=e,t[s+1]+=i):t.push(e,i)}function N(t,e,i){if(0==i.length)return
let n=e.length-2>>1
if(n<t.length)t[t.length-1]=t[t.length-1].append(i)
else{for(;t.length<n;)t.push(v.empty)
t.push(i)}}function W(t,e,i){let n=t.inserted
for(let s=0,o=0,r=0;r<t.sections.length;){let l=t.sections[r++],a=t.sections[r++]
if(a<0)s+=l,o+=l
else{let h=s,c=o,u=v.empty
for(;h+=l,c+=a,a&&n&&(u=u.append(n[r-2>>1])),!(i||r==t.sections.length||t.sections[r+1]<0);)l=t.sections[r++],a=t.sections[r++]
e(s,h,o,c,u),s=h,o=c}}}function H(t,e,i,n=!1){let s=[],o=n?[]:null,r=new F(t),l=new F(e)
for(let a=-1;;){if(r.done&&l.len||l.done&&r.len)throw new Error("Mismatched change set lengths")
if(-1==r.ins&&-1==l.ins){let t=Math.min(r.len,l.len)
P(s,t,-1),r.forward(t),l.forward(t)}else if(l.ins>=0&&(r.ins<0||a==r.i||0==r.off&&(l.len<r.len||l.len==r.len&&!i))){let t=l.len
for(P(s,l.ins,-1);t;){let e=Math.min(r.len,t)
r.ins>=0&&a<r.i&&r.len<=e&&(P(s,0,r.ins),o&&N(o,s,r.text),a=r.i),r.forward(e),t-=e}l.next()}else{if(!(r.ins>=0)){if(r.done&&l.done)return o?I.createSet(s,o):L.create(s)
throw new Error("Mismatched change set lengths")}{let t=0,e=r.len
for(;e;)if(-1==l.ins){let i=Math.min(e,l.len)
t+=i,e-=i,l.forward(i)}else{if(!(0==l.ins&&l.len<e))break
e-=l.len,l.next()}P(s,t,a<r.i?r.ins:0),o&&a<r.i&&N(o,s,r.text),a=r.i,r.forward(r.len-e)}}}}function V(t,e,i=!1){let n=[],s=i?[]:null,o=new F(t),r=new F(e)
for(let l=!1;;){if(o.done&&r.done)return s?I.createSet(n,s):L.create(n)
if(0==o.ins)P(n,o.len,0,l),o.next()
else if(0!=r.len||r.done){if(o.done||r.done)throw new Error("Mismatched change set lengths")
{let t=Math.min(o.len2,r.len),e=n.length
if(-1==o.ins){let e=-1==r.ins?-1:r.off?0:r.ins
P(n,t,e,l),s&&e&&N(s,n,r.text)}else-1==r.ins?(P(n,o.off?0:o.len,t,l),s&&N(s,n,o.textBit(t))):(P(n,o.off?0:o.len,r.off?0:r.ins,l),s&&!r.off&&N(s,n,r.text))
l=(o.ins>t||r.ins>=0&&r.len>t)&&(l||n.length>e),o.forward2(t),r.forward(t)}}else P(n,0,r.ins,l),s&&N(s,n,r.text),r.next()}}class F{constructor(t){this.set=t,this.i=0,this.next()}next(){let{sections:t}=this.set
this.i<t.length?(this.len=t[this.i++],this.ins=t[this.i++]):(this.len=0,this.ins=-2),this.off=0}get done(){return-2==this.ins}get len2(){return this.ins<0?this.len:this.ins}get text(){let{inserted:t}=this.set,e=this.i-2>>1
return e>=t.length?v.empty:t[e]}textBit(t){let{inserted:e}=this.set,i=this.i-2>>1
return i>=e.length&&!t?v.empty:e[i].slice(this.off,null==t?void 0:this.off+t)}forward(t){t==this.len?this.next():(this.len-=t,this.off+=t)}forward2(t){-1==this.ins?this.forward(t):t==this.ins?this.next():(this.ins-=t,this.off+=t)}}class z{constructor(t,e,i){this.from=t,this.to=e,this.flags=i}get anchor(){return 32&this.flags?this.to:this.from}get head(){return 32&this.flags?this.from:this.to}get empty(){return this.from==this.to}get assoc(){return 8&this.flags?-1:16&this.flags?1:0}get bidiLevel(){let t=7&this.flags
return 7==t?null:t}get goalColumn(){let t=this.flags>>6
return 16777215==t?void 0:t}map(t,e=-1){let i,n
return this.empty?i=n=t.mapPos(this.from,e):(i=t.mapPos(this.from,1),n=t.mapPos(this.to,-1)),i==this.from&&n==this.to?this:new z(i,n,this.flags)}extend(t,e=t,i=0){if(t<=this.anchor&&e>=this.anchor)return q.range(t,e,void 0,void 0,i)
let n=Math.abs(t-this.anchor)>Math.abs(e-this.anchor)?t:e
return q.range(this.anchor,n,void 0,void 0,i)}eq(t,e=!1){return!(this.anchor!=t.anchor||this.head!=t.head||this.goalColumn!=t.goalColumn||e&&this.empty&&this.assoc!=t.assoc)}toJSON(){return{anchor:this.anchor,head:this.head}}static fromJSON(t){if(!t||"number"!=typeof t.anchor||"number"!=typeof t.head)throw new RangeError("Invalid JSON representation for SelectionRange")
return q.range(t.anchor,t.head)}static create(t,e,i){return new z(t,e,i)}}class q{constructor(t,e){this.ranges=t,this.mainIndex=e}map(t,e=-1){return t.empty?this:q.create(this.ranges.map(i=>i.map(t,e)),this.mainIndex)}eq(t,e=!1){if(this.ranges.length!=t.ranges.length||this.mainIndex!=t.mainIndex)return!1
for(let i=0;i<this.ranges.length;i++)if(!this.ranges[i].eq(t.ranges[i],e))return!1
return!0}get main(){return this.ranges[this.mainIndex]}asSingle(){return 1==this.ranges.length?this:new q([this.main],0)}addRange(t,e=!0){return q.create([t].concat(this.ranges),e?0:this.mainIndex+1)}replaceRange(t,e=this.mainIndex){let i=this.ranges.slice()
return i[e]=t,q.create(i,this.mainIndex)}toJSON(){return{ranges:this.ranges.map(t=>t.toJSON()),main:this.mainIndex}}static fromJSON(t){if(!t||!Array.isArray(t.ranges)||"number"!=typeof t.main||t.main>=t.ranges.length)throw new RangeError("Invalid JSON representation for EditorSelection")
return new q(t.ranges.map(t=>z.fromJSON(t)),t.main)}static single(t,e=t){return new q([q.range(t,e)],0)}static create(t,e=0){if(0==t.length)throw new RangeError("A selection needs at least one range")
for(let i=0,n=0;n<t.length;n++){let s=t[n]
if(s.empty?s.from<=i:s.from<i)return q.normalized(t.slice(),e)
i=s.to}return new q(t,e)}static cursor(t,e=0,i,n){return z.create(t,t,(0==e?0:e<0?8:16)|(null==i?7:Math.min(6,i))|(null!=n?n:16777215)<<6)}static range(t,e,i,n,s){let o=(null!=i?i:16777215)<<6|(null==n?7:Math.min(6,n))
return s||t==e||(s=e<t?1:-1),e<t?z.create(e,t,48|o):z.create(t,e,(s?s<0?8:16:0)|o)}static normalized(t,e=0){let i=t[e]
t.sort((t,e)=>t.from-e.from),e=t.indexOf(i)
for(let n=1;n<t.length;n++){let i=t[n],s=t[n-1]
if(i.empty?i.from<=s.to:i.from<s.to){let o=s.from,r=Math.max(i.to,s.to)
n<=e&&e--,t.splice(--n,2,i.anchor>i.head?q.range(r,o):q.range(o,r))}}return new q(t,e)}}function _(t,e){for(let i of t.ranges)if(i.to>e)throw new RangeError("Selection points outside of document")}let K=0
class j{constructor(t,e,i,n,s){this.combine=t,this.compareInput=e,this.compare=i,this.isStatic=n,this.id=K++,this.default=t([]),this.extensions="function"==typeof s?s(this):s}get reader(){return this}static define(t={}){return new j(t.combine||(t=>t),t.compareInput||((t,e)=>t===e),t.compare||(t.combine?(t,e)=>t===e:$),!!t.static,t.enables)}of(t){return new U([],this,0,t)}compute(t,e){if(this.isStatic)throw new Error("Can't compute a static facet")
return new U(t,this,1,e)}computeN(t,e){if(this.isStatic)throw new Error("Can't compute a static facet")
return new U(t,this,2,e)}from(t,e){return e||(e=t=>t),this.compute([t],i=>e(i.field(t)))}}function $(t,e){return t==e||t.length==e.length&&t.every((t,i)=>t===e[i])}class U{constructor(t,e,i,n){this.dependencies=t,this.facet=e,this.type=i,this.value=n,this.id=K++}dynamicSlot(t){var e
let i=this.value,n=this.facet.compareInput,s=this.id,o=t[s]>>1,r=2==this.type,l=!1,a=!1,h=[]
for(let c of this.dependencies)"doc"==c?l=!0:"selection"==c?a=!0:1&(null!==(e=t[c.id])&&void 0!==e?e:1)||h.push(t[c.id])
return{create:t=>(t.values[o]=i(t),1),update(t,e){if(l&&e.docChanged||a&&(e.docChanged||e.selection)||G(t,h)){let e=i(t)
if(r?!Y(e,t.values[o],n):!n(e,t.values[o]))return t.values[o]=e,1}return 0},reconfigure:(t,e)=>{let l,a=e.config.address[s]
if(null!=a){let s=rt(e,a)
if(this.dependencies.every(i=>i instanceof j?e.facet(i)===t.facet(i):!(i instanceof Q)||e.field(i,!1)==t.field(i,!1))||(r?Y(l=i(t),s,n):n(l=i(t),s)))return t.values[o]=s,0}else l=i(t)
return t.values[o]=l,1}}}}function Y(t,e,i){if(t.length!=e.length)return!1
for(let n=0;n<t.length;n++)if(!i(t[n],e[n]))return!1
return!0}function G(t,e){let i=!1
for(let n of e)1&ot(t,n)&&(i=!0)
return i}function J(t,e,i){let n=i.map(e=>t[e.id]),s=i.map(t=>t.type),o=n.filter(t=>!(1&t)),r=t[e.id]>>1
function l(t){let i=[]
for(let e=0;e<n.length;e++){let o=rt(t,n[e])
if(2==s[e])for(let t of o)i.push(t)
else i.push(o)}return e.combine(i)}return{create(t){for(let e of n)ot(t,e)
return t.values[r]=l(t),1},update(t,i){if(!G(t,o))return 0
let n=l(t)
return e.compare(n,t.values[r])?0:(t.values[r]=n,1)},reconfigure(t,s){let o=G(t,n),a=s.config.facets[e.id],h=s.facet(e)
if(a&&!o&&$(i,a))return t.values[r]=h,0
let c=l(t)
return e.compare(c,h)?(t.values[r]=h,0):(t.values[r]=c,1)}}}const X=j.define({static:!0})
class Q{constructor(t,e,i,n,s){this.id=t,this.createF=e,this.updateF=i,this.compareF=n,this.spec=s,this.provides=void 0}static define(t){let e=new Q(K++,t.create,t.update,t.compare||((t,e)=>t===e),t)
return t.provide&&(e.provides=t.provide(e)),e}create(t){let e=t.facet(X).find(t=>t.field==this)
return((null==e?void 0:e.create)||this.createF)(t)}slot(t){let e=t[this.id]>>1
return{create:t=>(t.values[e]=this.create(t),1),update:(t,i)=>{let n=t.values[e],s=this.updateF(n,i)
return this.compareF(n,s)?0:(t.values[e]=s,1)},reconfigure:(t,i)=>{let n,s=t.facet(X),o=i.facet(X)
return(n=s.find(t=>t.field==this))&&n!=o.find(t=>t.field==this)?(t.values[e]=n.create(t),1):null!=i.config.address[this.id]?(t.values[e]=i.field(this),0):(t.values[e]=this.create(t),1)}}}init(t){return[this,X.of({field:this,create:t})]}get extension(){return this}}function Z(t){return e=>new et(e,t)}const tt={highest:Z(0),high:Z(1),default:Z(2),low:Z(3),lowest:Z(4)}
class et{constructor(t,e){this.inner=t,this.prec=e}}class it{of(t){return new nt(this,t)}reconfigure(t){return it.reconfigure.of({compartment:this,extension:t})}get(t){return t.config.compartments.get(this)}}class nt{constructor(t,e){this.compartment=t,this.inner=e}}class st{constructor(t,e,i,n,s,o){for(this.base=t,this.compartments=e,this.dynamicSlots=i,this.address=n,this.staticValues=s,this.facets=o,this.statusTemplate=[];this.statusTemplate.length<i.length;)this.statusTemplate.push(0)}staticFacet(t){let e=this.address[t.id]
return null==e?t.default:this.staticValues[e>>1]}static resolve(t,e,i){let n=[],s=Object.create(null),o=new Map
for(let u of function(t,e,i){let n=[[],[],[],[],[]],s=new Map
return function t(o,r){let l=s.get(o)
if(null!=l){if(l<=r)return
let t=n[l].indexOf(o)
t>-1&&n[l].splice(t,1),o instanceof nt&&i.delete(o.compartment)}if(s.set(o,r),Array.isArray(o))for(let e of o)t(e,r)
else if(o instanceof nt){if(i.has(o.compartment))throw new RangeError("Duplicate use of compartment in extensions")
let n=e.get(o.compartment)||o.inner
i.set(o.compartment,n),t(n,r)}else if(o instanceof et)t(o.inner,o.prec)
else if(o instanceof Q)n[r].push(o),o.provides&&t(o.provides,r)
else if(o instanceof U)n[r].push(o),o.facet.extensions&&t(o.facet.extensions,2)
else{let e=o.extension
if(!e)throw new Error(`Unrecognized extension value in extension set (${o}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`)
t(e,r)}}(t,2),n.reduce((t,e)=>t.concat(e))}(t,e,o))u instanceof Q?n.push(u):(s[u.facet.id]||(s[u.facet.id]=[])).push(u)
let r=Object.create(null),l=[],a=[]
for(let u of n)r[u.id]=a.length<<1,a.push(t=>u.slot(t))
let h=null==i?void 0:i.config.facets
for(let u in s){let t=s[u],e=t[0].facet,n=h&&h[u]||[]
if(t.every(t=>0==t.type))if(r[e.id]=l.length<<1|1,$(n,t))l.push(i.facet(e))
else{let n=e.combine(t.map(t=>t.value))
l.push(i&&e.compare(n,i.facet(e))?i.facet(e):n)}else{for(let e of t)0==e.type?(r[e.id]=l.length<<1|1,l.push(e.value)):(r[e.id]=a.length<<1,a.push(t=>e.dynamicSlot(t)))
r[e.id]=a.length<<1,a.push(i=>J(i,e,t))}}let c=a.map(t=>t(r))
return new st(t,o,c,r,l,s)}}function ot(t,e){if(1&e)return 2
let i=e>>1,n=t.status[i]
if(4==n)throw new Error("Cyclic dependency between fields and/or facets")
if(2&n)return n
t.status[i]=4
let s=t.computeSlot(t,t.config.dynamicSlots[i])
return t.status[i]=2|s}function rt(t,e){return 1&e?t.config.staticValues[e>>1]:t.values[e>>1]}const lt=j.define(),at=j.define({combine:t=>t.some(t=>t),static:!0}),ht=j.define({combine:t=>t.length?t[0]:void 0,static:!0}),ct=j.define(),ut=j.define(),dt=j.define(),ft=j.define({combine:t=>!!t.length&&t[0]})
class pt{constructor(t,e){this.type=t,this.value=e}static define(){return new mt}}class mt{of(t){return new pt(this,t)}}class gt{constructor(t){this.map=t}of(t){return new vt(this,t)}}class vt{constructor(t,e){this.type=t,this.value=e}map(t){let e=this.type.map(this.value,t)
return void 0===e?void 0:e==this.value?this:new vt(this.type,e)}is(t){return this.type==t}static define(t={}){return new gt(t.map||(t=>t))}static mapEffects(t,e){if(!t.length)return t
let i=[]
for(let n of t){let t=n.map(e)
t&&i.push(t)}return i}}vt.reconfigure=vt.define(),vt.appendConfig=vt.define()
class wt{constructor(t,e,i,n,s,o){this.startState=t,this.changes=e,this.selection=i,this.effects=n,this.annotations=s,this.scrollIntoView=o,this._doc=null,this._state=null,i&&_(i,e.newLength),s.some(t=>t.type==wt.time)||(this.annotations=s.concat(wt.time.of(Date.now())))}static create(t,e,i,n,s,o){return new wt(t,e,i,n,s,o)}get newDoc(){return this._doc||(this._doc=this.changes.apply(this.startState.doc))}get newSelection(){return this.selection||this.startState.selection.map(this.changes)}get state(){return this._state||this.startState.applyTransaction(this),this._state}annotation(t){for(let e of this.annotations)if(e.type==t)return e.value}get docChanged(){return!this.changes.empty}get reconfigured(){return this.startState.config!=this.state.config}isUserEvent(t){let e=this.annotation(wt.userEvent)
return!(!e||!(e==t||e.length>t.length&&e.slice(0,t.length)==t&&"."==e[t.length]))}}function bt(t,e){let i=[]
for(let n=0,s=0;;){let o,r
if(n<t.length&&(s==e.length||e[s]>=t[n]))o=t[n++],r=t[n++]
else{if(!(s<e.length))return i
o=e[s++],r=e[s++]}!i.length||i[i.length-1]<o?i.push(o,r):i[i.length-1]<r&&(i[i.length-1]=r)}}function yt(t,e,i){var n
let s,o,r
return i?(s=e.changes,o=I.empty(e.changes.length),r=t.changes.compose(e.changes)):(s=e.changes.map(t.changes),o=t.changes.mapDesc(e.changes,!0),r=t.changes.compose(s)),{changes:r,selection:e.selection?e.selection.map(o):null===(n=t.selection)||void 0===n?void 0:n.map(s),effects:vt.mapEffects(t.effects,s).concat(vt.mapEffects(e.effects,o)),annotations:t.annotations.length?t.annotations.concat(e.annotations):e.annotations,scrollIntoView:t.scrollIntoView||e.scrollIntoView}}function xt(t,e,i){let n=e.selection,s=Ct(e.annotations)
return e.userEvent&&(s=s.concat(wt.userEvent.of(e.userEvent))),{changes:e.changes instanceof I?e.changes:I.of(e.changes||[],i,t.facet(ht)),selection:n&&(n instanceof q?n:q.single(n.anchor,n.head)),effects:Ct(e.effects),annotations:s,scrollIntoView:!!e.scrollIntoView}}function kt(t,e,i){let n=xt(t,e.length?e[0]:{},t.doc.length)
e.length&&!1===e[0].filter&&(i=!1)
for(let o=1;o<e.length;o++){!1===e[o].filter&&(i=!1)
let s=!!e[o].sequential
n=yt(n,xt(t,e[o],s?n.changes.newLength:t.doc.length),s)}let s=wt.create(t,n.changes,n.selection,n.effects,n.annotations,n.scrollIntoView)
return function(t){let e=t.startState,i=e.facet(dt),n=t
for(let s=i.length-1;s>=0;s--){let o=i[s](t)
o&&Object.keys(o).length&&(n=yt(n,xt(e,o,t.changes.newLength),!0))}return n==t?t:wt.create(e,t.changes,t.selection,n.effects,n.annotations,n.scrollIntoView)}(i?function(t){let e=t.startState,i=!0
for(let s of e.facet(ct)){let e=s(t)
if(!1===e){i=!1
break}Array.isArray(e)&&(i=!0===i?e:bt(i,e))}if(!0!==i){let n,s
if(!1===i)s=t.changes.invertedDesc,n=I.empty(e.doc.length)
else{let e=t.changes.filter(i)
n=e.changes,s=e.filtered.mapDesc(e.changes).invertedDesc}t=wt.create(e,n,t.selection&&t.selection.map(s),vt.mapEffects(t.effects,s),t.annotations,t.scrollIntoView)}let n=e.facet(ut)
for(let s=n.length-1;s>=0;s--){let i=n[s](t)
t=i instanceof wt?i:Array.isArray(i)&&1==i.length&&i[0]instanceof wt?i[0]:kt(e,Ct(i),!1)}return t}(s):s)}wt.time=pt.define(),wt.userEvent=pt.define(),wt.addToHistory=pt.define(),wt.remote=pt.define()
const St=[]
function Ct(t){return null==t?St:Array.isArray(t)?t:[t]}var Mt=function(t){return t[t.Word=0]="Word",t[t.Space=1]="Space",t[t.Other=2]="Other",t}(Mt||(Mt={}))
const At=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/
let Tt
try{Tt=new RegExp("[\\p{Alphabetic}\\p{Number}_]","u")}catch(t){}class Ot{constructor(t,e,i,n,s,o){this.config=t,this.doc=e,this.selection=i,this.values=n,this.status=t.statusTemplate.slice(),this.computeSlot=s,o&&(o._state=this)
for(let r=0;r<this.config.dynamicSlots.length;r++)ot(this,r<<1)
this.computeSlot=null}field(t,e=!0){let i=this.config.address[t.id]
if(null!=i)return ot(this,i),rt(this,i)
if(e)throw new RangeError("Field is not present in this state")}update(...t){return kt(this,t,!0)}applyTransaction(t){let e,i=this.config,{base:n,compartments:s}=i
for(let r of t.effects)r.is(it.reconfigure)?(i&&(s=new Map,i.compartments.forEach((t,e)=>s.set(e,t)),i=null),s.set(r.value.compartment,r.value.extension)):r.is(vt.reconfigure)?(i=null,n=r.value):r.is(vt.appendConfig)&&(i=null,n=Ct(n).concat(r.value))
i?e=t.startState.values.slice():(i=st.resolve(n,s,this),e=new Ot(i,this.doc,this.selection,i.dynamicSlots.map(()=>null),(t,e)=>e.reconfigure(t,this),null).values)
let o=t.startState.facet(at)?t.newSelection:t.newSelection.asSingle()
new Ot(i,t.newDoc,o,e,(e,i)=>i.update(e,t),t)}replaceSelection(t){return"string"==typeof t&&(t=this.toText(t)),this.changeByRange(e=>({changes:{from:e.from,to:e.to,insert:t},range:q.cursor(e.from+t.length)}))}changeByRange(t){let e=this.selection,i=t(e.ranges[0]),n=this.changes(i.changes),s=[i.range],o=Ct(i.effects)
for(let r=1;r<e.ranges.length;r++){let i=t(e.ranges[r]),l=this.changes(i.changes),a=l.map(n)
for(let t=0;t<r;t++)s[t]=s[t].map(a)
let h=n.mapDesc(l,!0)
s.push(i.range.map(h)),n=n.compose(a),o=vt.mapEffects(o,a).concat(vt.mapEffects(Ct(i.effects),h))}return{changes:n,selection:q.create(s,e.mainIndex),effects:o}}changes(t=[]){return t instanceof I?t:I.of(t,this.doc.length,this.facet(Ot.lineSeparator))}toText(t){return v.of(t.split(this.facet(Ot.lineSeparator)||B))}sliceDoc(t=0,e=this.doc.length){return this.doc.sliceString(t,e,this.lineBreak)}facet(t){let e=this.config.address[t.id]
return null==e?t.default:(ot(this,e),rt(this,e))}toJSON(t){let e={doc:this.sliceDoc(),selection:this.selection.toJSON()}
if(t)for(let i in t){let n=t[i]
n instanceof Q&&null!=this.config.address[n.id]&&(e[i]=n.spec.toJSON(this.field(t[i]),this))}return e}static fromJSON(t,e={},i){if(!t||"string"!=typeof t.doc)throw new RangeError("Invalid JSON representation for EditorState")
let n=[]
if(i)for(let s in i)if(Object.prototype.hasOwnProperty.call(t,s)){let e=i[s],o=t[s]
n.push(e.init(t=>e.spec.fromJSON(o,t)))}return Ot.create({doc:t.doc,selection:q.fromJSON(t.selection),extensions:e.extensions?n.concat([e.extensions]):n})}static create(t={}){let e=st.resolve(t.extensions||[],new Map),i=t.doc instanceof v?t.doc:v.of((t.doc||"").split(e.staticFacet(Ot.lineSeparator)||B)),n=t.selection?t.selection instanceof q?t.selection:q.single(t.selection.anchor,t.selection.head):q.single(0)
return _(n,i.length),e.staticFacet(at)||(n=n.asSingle()),new Ot(e,i,n,e.dynamicSlots.map(()=>null),(t,e)=>e.create(t),null)}get tabSize(){return this.facet(Ot.tabSize)}get lineBreak(){return this.facet(Ot.lineSeparator)||"\n"}get readOnly(){return this.facet(ft)}phrase(t,...e){for(let i of this.facet(Ot.phrases))if(Object.prototype.hasOwnProperty.call(i,t)){t=i[t]
break}return e.length&&(t=t.replace(/\$(\$|\d*)/g,(t,i)=>{if("$"==i)return"$"
let n=+(i||1)
return!n||n>e.length?t:e[n-1]})),t}languageDataAt(t,e,i=-1){let n=[]
for(let s of this.facet(lt))for(let o of s(this,e,i))Object.prototype.hasOwnProperty.call(o,t)&&n.push(o[t])
return n}charCategorizer(t){let e=this.languageDataAt("wordChars",t)
return i=e.length?e[0]:"",t=>{if(!/\S/.test(t))return Mt.Space
if(function(t){if(Tt)return Tt.test(t)
for(let e=0;e<t.length;e++){let i=t[e]
if(/\w/.test(i)||i>""&&(i.toUpperCase()!=i.toLowerCase()||At.test(i)))return!0}return!1}(t))return Mt.Word
for(let e=0;e<i.length;e++)if(t.indexOf(i[e])>-1)return Mt.Word
return Mt.Other}
var i}wordAt(t){let{text:e,from:i,length:n}=this.doc.lineAt(t),s=this.charCategorizer(t),o=t-i,r=t-i
for(;o>0;){let t=T(e,o,!1)
if(s(e.slice(t,o))!=Mt.Word)break
o=t}for(;r<n;){let t=T(e,r)
if(s(e.slice(r,t))!=Mt.Word)break
r=t}return o==r?null:q.range(o+i,r+i)}}function Dt(t,e,i={}){let n={}
for(let s of t)for(let t of Object.keys(s)){let e=s[t],o=n[t]
if(void 0===o)n[t]=e
else if(o===e||void 0===e);else{if(!Object.hasOwnProperty.call(i,t))throw new Error("Config merge conflict for field "+t)
n[t]=i[t](o,e)}}for(let s in e)void 0===n[s]&&(n[s]=e[s])
return n}Ot.allowMultipleSelections=at,Ot.tabSize=j.define({combine:t=>t.length?t[0]:4}),Ot.lineSeparator=ht,Ot.readOnly=ft,Ot.phrases=j.define({compare(t,e){let i=Object.keys(t),n=Object.keys(e)
return i.length==n.length&&i.every(i=>t[i]==e[i])}}),Ot.languageData=lt,Ot.changeFilter=ct,Ot.transactionFilter=ut,Ot.transactionExtender=dt,it.reconfigure=vt.define()
class Et{eq(t){return this==t}range(t,e=t){return Rt.create(t,e,this)}}function Bt(t,e){return t==e||t.constructor==e.constructor&&t.eq(e)}Et.prototype.startSide=Et.prototype.endSide=0,Et.prototype.point=!1,Et.prototype.mapMode=R.TrackDel
class Rt{constructor(t,e,i){this.from=t,this.to=e,this.value=i}static create(t,e,i){return new Rt(t,e,i)}}function Lt(t,e){return t.from-e.from||t.value.startSide-e.value.startSide}class It{constructor(t,e,i,n){this.from=t,this.to=e,this.value=i,this.maxPoint=n}get length(){return this.to[this.to.length-1]}findIndex(t,e,i,n=0){let s=i?this.to:this.from
for(let o=n,r=s.length;;){if(o==r)return o
let n=o+r>>1,l=s[n]-t||(i?this.value[n].endSide:this.value[n].startSide)-e
if(n==o)return l>=0?o:r
l>=0?r=n:o=n+1}}between(t,e,i,n){for(let s=this.findIndex(e,-1e9,!0),o=this.findIndex(i,1e9,!1,s);s<o;s++)if(!1===n(this.from[s]+t,this.to[s]+t,this.value[s]))return!1}map(t,e){let i=[],n=[],s=[],o=-1,r=-1
for(let l=0;l<this.value.length;l++){let a,h,c=this.value[l],u=this.from[l]+t,d=this.to[l]+t
if(u==d){let t=e.mapPos(u,c.startSide,c.mapMode)
if(null==t)continue
if(a=h=t,c.startSide!=c.endSide&&(h=e.mapPos(u,c.endSide),h<a))continue}else if(a=e.mapPos(u,c.startSide),h=e.mapPos(d,c.endSide),a>h||a==h&&c.startSide>0&&c.endSide<=0)continue;(h-a||c.endSide-c.startSide)<0||(o<0&&(o=a),c.point&&(r=Math.max(r,h-a)),i.push(c),n.push(a-o),s.push(h-o))}return{mapped:i.length?new It(n,s,i,r):null,pos:o}}}class Pt{constructor(t,e,i,n){this.chunkPos=t,this.chunk=e,this.nextLayer=i,this.maxPoint=n}static create(t,e,i,n){return new Pt(t,e,i,n)}get length(){let t=this.chunk.length-1
return t<0?0:Math.max(this.chunkEnd(t),this.nextLayer.length)}get size(){if(this.isEmpty)return 0
let t=this.nextLayer.size
for(let e of this.chunk)t+=e.value.length
return t}chunkEnd(t){return this.chunkPos[t]+this.chunk[t].length}update(t){let{add:e=[],sort:i=!1,filterFrom:n=0,filterTo:s=this.length}=t,o=t.filter
if(0==e.length&&!o)return this
if(i&&(e=e.slice().sort(Lt)),this.isEmpty)return e.length?Pt.of(e):this
let r=new Ht(this,null,-1).goto(0),l=0,a=[],h=new Nt
for(;r.value||l<e.length;)if(l<e.length&&(r.from-e[l].from||r.startSide-e[l].value.startSide)>=0){let t=e[l++]
h.addInner(t.from,t.to,t.value)||a.push(t)}else 1==r.rangeIndex&&r.chunkIndex<this.chunk.length&&(l==e.length||this.chunkEnd(r.chunkIndex)<e[l].from)&&(!o||n>this.chunkEnd(r.chunkIndex)||s<this.chunkPos[r.chunkIndex])&&h.addChunk(this.chunkPos[r.chunkIndex],this.chunk[r.chunkIndex])?r.nextChunk():((!o||n>r.to||s<r.from||o(r.from,r.to,r.value))&&(h.addInner(r.from,r.to,r.value)||a.push(Rt.create(r.from,r.to,r.value))),r.next())
return h.finishInner(this.nextLayer.isEmpty&&!a.length?Pt.empty:this.nextLayer.update({add:a,filter:o,filterFrom:n,filterTo:s}))}map(t){if(t.empty||this.isEmpty)return this
let e=[],i=[],n=-1
for(let o=0;o<this.chunk.length;o++){let s=this.chunkPos[o],r=this.chunk[o],l=t.touchesRange(s,s+r.length)
if(!1===l)n=Math.max(n,r.maxPoint),e.push(r),i.push(t.mapPos(s))
else if(!0===l){let{mapped:o,pos:l}=r.map(s,t)
o&&(n=Math.max(n,o.maxPoint),e.push(o),i.push(l))}}let s=this.nextLayer.map(t)
return 0==e.length?s:new Pt(i,e,s||Pt.empty,n)}between(t,e,i){if(!this.isEmpty){for(let n=0;n<this.chunk.length;n++){let s=this.chunkPos[n],o=this.chunk[n]
if(e>=s&&t<=s+o.length&&!1===o.between(s,t-s,e-s,i))return}this.nextLayer.between(t,e,i)}}iter(t=0){return Vt.from([this]).goto(t)}get isEmpty(){return this.nextLayer==this}static iter(t,e=0){return Vt.from(t).goto(e)}static compare(t,e,i,n,s=-1){let o=t.filter(t=>t.maxPoint>0||!t.isEmpty&&t.maxPoint>=s),r=e.filter(t=>t.maxPoint>0||!t.isEmpty&&t.maxPoint>=s),l=Wt(o,r,i),a=new zt(o,l,s),h=new zt(r,l,s)
i.iterGaps((t,e,i)=>qt(a,t,h,e,i,n)),i.empty&&0==i.length&&qt(a,0,h,0,0,n)}static eq(t,e,i=0,n){null==n&&(n=999999999)
let s=t.filter(t=>!t.isEmpty&&e.indexOf(t)<0),o=e.filter(e=>!e.isEmpty&&t.indexOf(e)<0)
if(s.length!=o.length)return!1
if(!s.length)return!0
let r=Wt(s,o),l=new zt(s,r,0).goto(i),a=new zt(o,r,0).goto(i)
for(;;){if(l.to!=a.to||!_t(l.active,a.active)||l.point&&(!a.point||!Bt(l.point,a.point)))return!1
if(l.to>n)return!0
l.next(),a.next()}}static spans(t,e,i,n,s=-1){let o=new zt(t,null,s).goto(e),r=e,l=o.openStart
for(;;){let t=Math.min(o.to,i)
if(o.point){let i=o.activeForPoint(o.to),s=o.pointFrom<e?i.length+1:o.point.startSide<0?i.length:Math.min(i.length,l)
n.point(r,t,o.point,i,s,o.pointRank),l=Math.min(o.openEnd(t),i.length)}else t>r&&(n.span(r,t,o.active,l),l=o.openEnd(t))
if(o.to>i)return l+(o.point&&o.to>i?1:0)
r=o.to,o.next()}}static of(t,e=!1){let i=new Nt
for(let n of t instanceof Rt?[t]:e?function(t){if(t.length>1)for(let e=t[0],i=1;i<t.length;i++){let n=t[i]
if(Lt(e,n)>0)return t.slice().sort(Lt)
e=n}return t}(t):t)i.add(n.from,n.to,n.value)
return i.finish()}static join(t){if(!t.length)return Pt.empty
let e=t[t.length-1]
for(let i=t.length-2;i>=0;i--)for(let n=t[i];n!=Pt.empty;n=n.nextLayer)e=new Pt(n.chunkPos,n.chunk,e,Math.max(n.maxPoint,e.maxPoint))
return e}}Pt.empty=new Pt([],[],null,-1),Pt.empty.nextLayer=Pt.empty
class Nt{finishChunk(t){this.chunks.push(new It(this.from,this.to,this.value,this.maxPoint)),this.chunkPos.push(this.chunkStart),this.chunkStart=-1,this.setMaxPoint=Math.max(this.setMaxPoint,this.maxPoint),this.maxPoint=-1,t&&(this.from=[],this.to=[],this.value=[])}constructor(){this.chunks=[],this.chunkPos=[],this.chunkStart=-1,this.last=null,this.lastFrom=-1e9,this.lastTo=-1e9,this.from=[],this.to=[],this.value=[],this.maxPoint=-1,this.setMaxPoint=-1,this.nextLayer=null}add(t,e,i){this.addInner(t,e,i)||(this.nextLayer||(this.nextLayer=new Nt)).add(t,e,i)}addInner(t,e,i){let n=t-this.lastTo||i.startSide-this.last.endSide
if(n<=0&&(t-this.lastFrom||i.startSide-this.last.startSide)<0)throw new Error("Ranges must be added sorted by `from` position and `startSide`")
return!(n<0||(250==this.from.length&&this.finishChunk(!0),this.chunkStart<0&&(this.chunkStart=t),this.from.push(t-this.chunkStart),this.to.push(e-this.chunkStart),this.last=i,this.lastFrom=t,this.lastTo=e,this.value.push(i),i.point&&(this.maxPoint=Math.max(this.maxPoint,e-t)),0))}addChunk(t,e){if((t-this.lastTo||e.value[0].startSide-this.last.endSide)<0)return!1
this.from.length&&this.finishChunk(!0),this.setMaxPoint=Math.max(this.setMaxPoint,e.maxPoint),this.chunks.push(e),this.chunkPos.push(t)
let i=e.value.length-1
return this.last=e.value[i],this.lastFrom=e.from[i]+t,this.lastTo=e.to[i]+t,!0}finish(){return this.finishInner(Pt.empty)}finishInner(t){if(this.from.length&&this.finishChunk(!1),0==this.chunks.length)return t
let e=Pt.create(this.chunkPos,this.chunks,this.nextLayer?this.nextLayer.finishInner(t):t,this.setMaxPoint)
return this.from=null,e}}function Wt(t,e,i){let n=new Map
for(let o of t)for(let t=0;t<o.chunk.length;t++)o.chunk[t].maxPoint<=0&&n.set(o.chunk[t],o.chunkPos[t])
let s=new Set
for(let o of e)for(let t=0;t<o.chunk.length;t++){let e=n.get(o.chunk[t])
null==e||(i?i.mapPos(e):e)!=o.chunkPos[t]||(null==i?void 0:i.touchesRange(e,e+o.chunk[t].length))||s.add(o.chunk[t])}return s}class Ht{constructor(t,e,i,n=0){this.layer=t,this.skip=e,this.minPoint=i,this.rank=n}get startSide(){return this.value?this.value.startSide:0}get endSide(){return this.value?this.value.endSide:0}goto(t,e=-1e9){return this.chunkIndex=this.rangeIndex=0,this.gotoInner(t,e,!1),this}gotoInner(t,e,i){for(;this.chunkIndex<this.layer.chunk.length;){let e=this.layer.chunk[this.chunkIndex]
if(!(this.skip&&this.skip.has(e)||this.layer.chunkEnd(this.chunkIndex)<t||e.maxPoint<this.minPoint))break
this.chunkIndex++,i=!1}if(this.chunkIndex<this.layer.chunk.length){let n=this.layer.chunk[this.chunkIndex].findIndex(t-this.layer.chunkPos[this.chunkIndex],e,!0);(!i||this.rangeIndex<n)&&this.setRangeIndex(n)}this.next()}forward(t,e){(this.to-t||this.endSide-e)<0&&this.gotoInner(t,e,!0)}next(){for(;;){if(this.chunkIndex==this.layer.chunk.length){this.from=this.to=1e9,this.value=null
break}{let t=this.layer.chunkPos[this.chunkIndex],e=this.layer.chunk[this.chunkIndex],i=t+e.from[this.rangeIndex]
if(this.from=i,this.to=t+e.to[this.rangeIndex],this.value=e.value[this.rangeIndex],this.setRangeIndex(this.rangeIndex+1),this.minPoint<0||this.value.point&&this.to-this.from>=this.minPoint)break}}}setRangeIndex(t){if(t==this.layer.chunk[this.chunkIndex].value.length){if(this.chunkIndex++,this.skip)for(;this.chunkIndex<this.layer.chunk.length&&this.skip.has(this.layer.chunk[this.chunkIndex]);)this.chunkIndex++
this.rangeIndex=0}else this.rangeIndex=t}nextChunk(){this.chunkIndex++,this.rangeIndex=0,this.next()}compare(t){return this.from-t.from||this.startSide-t.startSide||this.rank-t.rank||this.to-t.to||this.endSide-t.endSide}}class Vt{constructor(t){this.heap=t}static from(t,e=null,i=-1){let n=[]
for(let s=0;s<t.length;s++)for(let o=t[s];!o.isEmpty;o=o.nextLayer)o.maxPoint>=i&&n.push(new Ht(o,e,i,s))
return 1==n.length?n[0]:new Vt(n)}get startSide(){return this.value?this.value.startSide:0}goto(t,e=-1e9){for(let i of this.heap)i.goto(t,e)
for(let i=this.heap.length>>1;i>=0;i--)Ft(this.heap,i)
return this.next(),this}forward(t,e){for(let i of this.heap)i.forward(t,e)
for(let i=this.heap.length>>1;i>=0;i--)Ft(this.heap,i);(this.to-t||this.value.endSide-e)<0&&this.next()}next(){if(0==this.heap.length)this.from=this.to=1e9,this.value=null,this.rank=-1
else{let t=this.heap[0]
this.from=t.from,this.to=t.to,this.value=t.value,this.rank=t.rank,t.value&&t.next(),Ft(this.heap,0)}}}function Ft(t,e){for(let i=t[e];;){let n=1+(e<<1)
if(n>=t.length)break
let s=t[n]
if(n+1<t.length&&s.compare(t[n+1])>=0&&(s=t[n+1],n++),i.compare(s)<0)break
t[n]=i,t[e]=s,e=n}}class zt{constructor(t,e,i){this.minPoint=i,this.active=[],this.activeTo=[],this.activeRank=[],this.minActive=-1,this.point=null,this.pointFrom=0,this.pointRank=0,this.to=-1e9,this.endSide=0,this.openStart=-1,this.cursor=Vt.from(t,e,i)}goto(t,e=-1e9){return this.cursor.goto(t,e),this.active.length=this.activeTo.length=this.activeRank.length=0,this.minActive=-1,this.to=t,this.endSide=e,this.openStart=-1,this.next(),this}forward(t,e){for(;this.minActive>-1&&(this.activeTo[this.minActive]-t||this.active[this.minActive].endSide-e)<0;)this.removeActive(this.minActive)
this.cursor.forward(t,e)}removeActive(t){Kt(this.active,t),Kt(this.activeTo,t),Kt(this.activeRank,t),this.minActive=$t(this.active,this.activeTo)}addActive(t){let e=0,{value:i,to:n,rank:s}=this.cursor
for(;e<this.activeRank.length&&(s-this.activeRank[e]||n-this.activeTo[e])>0;)e++
jt(this.active,e,i),jt(this.activeTo,e,n),jt(this.activeRank,e,s),t&&jt(t,e,this.cursor.from),this.minActive=$t(this.active,this.activeTo)}next(){let t=this.to,e=this.point
this.point=null
let i=this.openStart<0?[]:null
for(;;){let n=this.minActive
if(n>-1&&(this.activeTo[n]-this.cursor.from||this.active[n].endSide-this.cursor.startSide)<0){if(this.activeTo[n]>t){this.to=this.activeTo[n],this.endSide=this.active[n].endSide
break}this.removeActive(n),i&&Kt(i,n)}else{if(!this.cursor.value){this.to=this.endSide=1e9
break}if(this.cursor.from>t){this.to=this.cursor.from,this.endSide=this.cursor.startSide
break}{let t=this.cursor.value
if(t.point){if(!(e&&this.cursor.to==this.to&&this.cursor.from<this.cursor.to)){this.point=t,this.pointFrom=this.cursor.from,this.pointRank=this.cursor.rank,this.to=this.cursor.to,this.endSide=t.endSide,this.cursor.next(),this.forward(this.to,this.endSide)
break}this.cursor.next()}else this.addActive(i),this.cursor.next()}}}if(i){this.openStart=0
for(let e=i.length-1;e>=0&&i[e]<t;e--)this.openStart++}}activeForPoint(t){if(!this.active.length)return this.active
let e=[]
for(let i=this.active.length-1;i>=0&&!(this.activeRank[i]<this.pointRank);i--)(this.activeTo[i]>t||this.activeTo[i]==t&&this.active[i].endSide>=this.point.endSide)&&e.push(this.active[i])
return e.reverse()}openEnd(t){let e=0
for(let i=this.activeTo.length-1;i>=0&&this.activeTo[i]>t;i--)e++
return e}}function qt(t,e,i,n,s,o){t.goto(e),i.goto(n)
let r=n+s,l=n,a=n-e,h=!!o.boundChange
for(let c=!1;;){let e=t.to+a-i.to,n=e||t.endSide-i.endSide,s=n<0?t.to+a:i.to,u=Math.min(s,r)
if(t.point||i.point?(t.point&&i.point&&Bt(t.point,i.point)&&_t(t.activeForPoint(t.to),i.activeForPoint(i.to))||o.comparePoint(l,u,t.point,i.point),c=!1):(c&&o.boundChange(l),u>l&&!_t(t.active,i.active)&&o.compareRange(l,u,t.active,i.active),h&&u<r&&(e||t.openEnd(s)!=i.openEnd(s))&&(c=!0)),s>r)break
l=s,n<=0&&t.next(),n>=0&&i.next()}}function _t(t,e){if(t.length!=e.length)return!1
for(let i=0;i<t.length;i++)if(t[i]!=e[i]&&!Bt(t[i],e[i]))return!1
return!0}function Kt(t,e){for(let i=e,n=t.length-1;i<n;i++)t[i]=t[i+1]
t.pop()}function jt(t,e,i){for(let n=t.length-1;n>=e;n--)t[n+1]=t[n]
t[e]=i}function $t(t,e){let i=-1,n=1e9
for(let s=0;s<e.length;s++)(e[s]-n||t[s].endSide-t[i].endSide)<0&&(i=s,n=e[s])
return i}function Ut(t,e,i=t.length){let n=0
for(let s=0;s<i&&s<t.length;)9==t.charCodeAt(s)?(n+=e-n%e,s++):(n++,s=T(t,s))
return n}function Yt(t,e,i,n){for(let s=0,o=0;;){if(o>=e)return s
if(s==t.length)break
o+=9==t.charCodeAt(s)?i-o%i:1,s=T(t,s)}return!0===n?-1:t.length}const Gt="undefined"==typeof Symbol?"__ͼ":Symbol.for("ͼ"),Jt="undefined"==typeof Symbol?"__styleSet"+Math.floor(1e8*Math.random()):Symbol("styleSet"),Xt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:{}
class Qt{constructor(t,e){this.rules=[]
let{finish:i}=e||{}
function n(t){return/^@/.test(t)?[t]:t.split(/,\s*/)}function s(t,e,o,r){let l=[],a=/^@(\w+)\b/.exec(t[0]),h=a&&"keyframes"==a[1]
if(a&&null==e)return o.push(t[0]+";")
for(let i in e){let r=e[i]
if(/&/.test(i))s(i.split(/,\s*/).map(e=>t.map(t=>e.replace(/&/,t))).reduce((t,e)=>t.concat(e)),r,o)
else if(r&&"object"==typeof r){if(!a)throw new RangeError("The value of a property ("+i+") should be a primitive value.")
s(n(i),r,l,h)}else null!=r&&l.push(i.replace(/_.*/,"").replace(/[A-Z]/g,t=>"-"+t.toLowerCase())+": "+r+";")}(l.length||h)&&o.push((!i||a||r?t:t.map(i)).join(", ")+" {"+l.join(" ")+"}")}for(let o in t)s(n(o),t[o],this.rules)}getRules(){return this.rules.join("\n")}static newName(){let t=Xt[Gt]||1
return Xt[Gt]=t+1,"ͼ"+t.toString(36)}static mount(t,e,i){let n=t[Jt],s=i&&i.nonce
n?s&&n.setNonce(s):n=new te(t,s),n.mount(Array.isArray(e)?e:[e],t)}}let Zt=new Map
class te{constructor(t,e){let i=t.ownerDocument||t,n=i.defaultView
if(!t.head&&t.adoptedStyleSheets&&n.CSSStyleSheet){let e=Zt.get(i)
if(e)return t[Jt]=e
this.sheet=new n.CSSStyleSheet,Zt.set(i,this)}else this.styleTag=i.createElement("style"),e&&this.styleTag.setAttribute("nonce",e)
this.modules=[],t[Jt]=this}mount(t,e){let i=this.sheet,n=0,s=0
for(let o=0;o<t.length;o++){let e=t[o],r=this.modules.indexOf(e)
if(r<s&&r>-1&&(this.modules.splice(r,1),s--,r=-1),-1==r){if(this.modules.splice(s++,0,e),i)for(let t=0;t<e.rules.length;t++)i.insertRule(e.rules[t],n++)}else{for(;s<r;)n+=this.modules[s++].rules.length
n+=e.rules.length,s++}}if(i)e.adoptedStyleSheets.indexOf(this.sheet)<0&&(e.adoptedStyleSheets=[this.sheet,...e.adoptedStyleSheets])
else{let t=""
for(let e=0;e<this.modules.length;e++)t+=this.modules[e].getRules()+"\n"
this.styleTag.textContent=t
let i=e.head||e
this.styleTag.parentNode!=i&&i.insertBefore(this.styleTag,i.firstChild)}}setNonce(t){this.styleTag&&this.styleTag.getAttribute("nonce")!=t&&this.styleTag.setAttribute("nonce",t)}}for(var ee={8:"Backspace",9:"Tab",10:"Enter",12:"NumLock",13:"Enter",16:"Shift",17:"Control",18:"Alt",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",44:"PrintScreen",45:"Insert",46:"Delete",59:";",61:"=",91:"Meta",92:"Meta",106:"*",107:"+",108:",",109:"-",110:".",111:"/",144:"NumLock",145:"ScrollLock",160:"Shift",161:"Shift",162:"Control",163:"Control",164:"Alt",165:"Alt",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},ie={48:")",49:"!",50:"@",51:"#",52:"$",53:"%",54:"^",55:"&",56:"*",57:"(",59:":",61:"+",173:"_",186:":",187:"+",188:"<",189:"_",190:">",191:"?",192:"~",219:"{",220:"|",221:"}",222:'"'},ne="undefined"!=typeof navigator&&/Mac/.test(navigator.platform),se="undefined"!=typeof navigator&&/MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent),oe=0;oe<10;oe++)ee[48+oe]=ee[96+oe]=String(oe)
for(oe=1;oe<=24;oe++)ee[oe+111]="F"+oe
for(oe=65;oe<=90;oe++)ee[oe]=String.fromCharCode(oe+32),ie[oe]=String.fromCharCode(oe)
for(var re in ee)ie.hasOwnProperty(re)||(ie[re]=ee[re])
function le(){var t=arguments[0]
"string"==typeof t&&(t=document.createElement(t))
var e=1,i=arguments[1]
if(i&&"object"==typeof i&&null==i.nodeType&&!Array.isArray(i)){for(var n in i)if(Object.prototype.hasOwnProperty.call(i,n)){var s=i[n]
"string"==typeof s?t.setAttribute(n,s):null!=s&&(t[n]=s)}e++}for(;e<arguments.length;e++)ae(t,arguments[e])
return t}function ae(t,e){if("string"==typeof e)t.appendChild(document.createTextNode(e))
else if(null==e);else if(null!=e.nodeType)t.appendChild(e)
else{if(!Array.isArray(e))throw new RangeError("Unsupported child node: "+e)
for(var i=0;i<e.length;i++)ae(t,e[i])}}let he="undefined"!=typeof navigator?navigator:{userAgent:"",vendor:"",platform:""},ce="undefined"!=typeof document?document:{documentElement:{style:{}}}
const ue=/Edge\/(\d+)/.exec(he.userAgent),de=/MSIE \d/.test(he.userAgent),fe=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(he.userAgent),pe=!!(de||fe||ue),me=!pe&&/gecko\/(\d+)/i.test(he.userAgent),ge=!pe&&/Chrome\/(\d+)/.exec(he.userAgent),ve="webkitFontSmoothing"in ce.documentElement.style,we=!pe&&/Apple Computer/.test(he.vendor),be=we&&(/Mobile\/\w+/.test(he.userAgent)||he.maxTouchPoints>2)
var ye={mac:be||/Mac/.test(he.platform),windows:/Win/.test(he.platform),linux:/Linux|X11/.test(he.platform),ie:pe,ie_version:de?ce.documentMode||6:fe?+fe[1]:ue?+ue[1]:0,gecko:me,gecko_version:me?+(/Firefox\/(\d+)/.exec(he.userAgent)||[0,0])[1]:0,chrome:!!ge,chrome_version:ge?+ge[1]:0,ios:be,android:/Android\b/.test(he.userAgent),webkit:ve,webkit_version:ve?+(/\bAppleWebKit\/(\d+)/.exec(he.userAgent)||[0,0])[1]:0,safari:we,safari_version:we?+(/\bVersion\/(\d+(\.\d+)?)/.exec(he.userAgent)||[0,0])[1]:0,tabSize:null!=ce.documentElement.style.tabSize?"tab-size":"-moz-tab-size"}
function xe(t,e){for(let i in t)"class"==i&&e.class?e.class+=" "+t.class:"style"==i&&e.style?e.style+=";"+t.style:e[i]=t[i]
return e}const ke=Object.create(null)
function Se(t,e,i){if(t==e)return!0
t||(t=ke),e||(e=ke)
let n=Object.keys(t),s=Object.keys(e)
if(n.length-(i&&n.indexOf(i)>-1?1:0)!=s.length-(i&&s.indexOf(i)>-1?1:0))return!1
for(let o of n)if(o!=i&&(-1==s.indexOf(o)||t[o]!==e[o]))return!1
return!0}function Ce(t,e,i){let n=!1
if(e)for(let s in e)i&&s in i||(n=!0,"style"==s?t.style.cssText="":t.removeAttribute(s))
if(i)for(let s in i)e&&e[s]==i[s]||(n=!0,"style"==s?t.style.cssText=i[s]:t.setAttribute(s,i[s]))
return n}function Me(t){let e=Object.create(null)
for(let i=0;i<t.attributes.length;i++){let n=t.attributes[i]
e[n.name]=n.value}return e}class Ae{eq(t){return!1}updateDOM(t,e,i){return!1}compare(t){return this==t||this.constructor==t.constructor&&this.eq(t)}get estimatedHeight(){return-1}get lineBreaks(){return 0}ignoreEvent(t){return!0}coordsAt(t,e,i){return null}get isHidden(){return!1}get editable(){return!1}destroy(t){}}var Te=function(t){return t[t.Text=0]="Text",t[t.WidgetBefore=1]="WidgetBefore",t[t.WidgetAfter=2]="WidgetAfter",t[t.WidgetRange=3]="WidgetRange",t}(Te||(Te={}))
class Oe extends Et{constructor(t,e,i,n){super(),this.startSide=t,this.endSide=e,this.widget=i,this.spec=n}get heightRelevant(){return!1}static mark(t){return new De(t)}static widget(t){let e=Math.max(-1e4,Math.min(1e4,t.side||0)),i=!!t.block
return e+=i&&!t.inlineOrder?e>0?3e8:-4e8:e>0?1e8:-1e8,new Be(t,e,e,i,t.widget||null,!1)}static replace(t){let e,i,n=!!t.block
if(t.isBlockGap)e=-5e8,i=4e8
else{let{start:s,end:o}=Re(t,n)
e=(s?n?-3e8:-1:5e8)-1,i=1+(o?n?2e8:1:-6e8)}return new Be(t,e,i,n,t.widget||null,!0)}static line(t){return new Ee(t)}static set(t,e=!1){return Pt.of(t,e)}hasHeight(){return!!this.widget&&this.widget.estimatedHeight>-1}}Oe.none=Pt.empty
class De extends Oe{constructor(t){let{start:e,end:i}=Re(t)
super(e?-1:5e8,i?1:-6e8,null,t),this.tagName=t.tagName||"span",this.attrs=t.class&&t.attributes?xe(t.attributes,{class:t.class}):t.class?{class:t.class}:t.attributes||ke}eq(t){return this==t||t instanceof De&&this.tagName==t.tagName&&Se(this.attrs,t.attrs)}range(t,e=t){if(t>=e)throw new RangeError("Mark decorations may not be empty")
return super.range(t,e)}}De.prototype.point=!1
class Ee extends Oe{constructor(t){super(-2e8,-2e8,null,t)}eq(t){return t instanceof Ee&&this.spec.class==t.spec.class&&Se(this.spec.attributes,t.spec.attributes)}range(t,e=t){if(e!=t)throw new RangeError("Line decoration ranges must be zero-length")
return super.range(t,e)}}Ee.prototype.mapMode=R.TrackBefore,Ee.prototype.point=!0
class Be extends Oe{constructor(t,e,i,n,s,o){super(e,i,s,t),this.block=n,this.isReplace=o,this.mapMode=n?e<=0?R.TrackBefore:R.TrackAfter:R.TrackDel}get type(){return this.startSide!=this.endSide?Te.WidgetRange:this.startSide<=0?Te.WidgetBefore:Te.WidgetAfter}get heightRelevant(){return this.block||!!this.widget&&(this.widget.estimatedHeight>=5||this.widget.lineBreaks>0)}eq(t){return t instanceof Be&&((e=this.widget)==(i=t.widget)||!!(e&&i&&e.compare(i)))&&this.block==t.block&&this.startSide==t.startSide&&this.endSide==t.endSide
var e,i}range(t,e=t){if(this.isReplace&&(t>e||t==e&&this.startSide>0&&this.endSide<=0))throw new RangeError("Invalid range for replacement decoration")
if(!this.isReplace&&e!=t)throw new RangeError("Widget decorations can only have zero-length ranges")
return super.range(t,e)}}function Re(t,e=!1){let{inclusiveStart:i,inclusiveEnd:n}=t
return null==i&&(i=t.inclusive),null==n&&(n=t.inclusive),{start:null!=i?i:e,end:null!=n?n:e}}function Le(t,e,i,n=0){let s=i.length-1
s>=0&&i[s]+n>=t?i[s]=Math.max(i[s],e):i.push(t,e)}Be.prototype.point=!0
class Ie extends Et{constructor(t,e,i){super(),this.tagName=t,this.attributes=e,this.rank=i}eq(t){return t==this||t instanceof Ie&&this.tagName==t.tagName&&Se(this.attributes,t.attributes)}static create(t){return new Ie(t.tagName,t.attributes||ke,null==t.rank?50:Math.max(0,Math.min(t.rank,100)))}static set(t,e=!1){return Pt.of(t,e)}}function Pe(t){let e
return e=11==t.nodeType?t.getSelection?t:t.ownerDocument:t,e.getSelection()}function Ne(t,e){return!!e&&(t==e||t.contains(1!=e.nodeType?e.parentNode:e))}function We(t,e){if(!e.anchorNode)return!1
try{return Ne(t,e.anchorNode)}catch(t){return!1}}function He(t){return 3==t.nodeType?Qe(t,0,t.nodeValue.length).getClientRects():1==t.nodeType?t.getClientRects():[]}function Ve(t,e,i,n){return!!i&&(qe(t,e,i,n,-1)||qe(t,e,i,n,1))}function Fe(t){for(var e=0;;e++)if(!(t=t.previousSibling))return e}function ze(t){return 1==t.nodeType&&/^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(t.nodeName)}function qe(t,e,i,n,s){for(;;){if(t==i&&e==n)return!0
if(e==(s<0?0:_e(t))){if("DIV"==t.nodeName)return!1
let i=t.parentNode
if(!i||1!=i.nodeType)return!1
e=Fe(t)+(s<0?0:1),t=i}else{if(1!=t.nodeType)return!1
if(1==(t=t.childNodes[e+(s<0?-1:0)]).nodeType&&"false"==t.contentEditable)return!1
e=s<0?_e(t):0}}}function _e(t){return 3==t.nodeType?t.nodeValue.length:t.childNodes.length}function Ke(t,e){let i=e?t.left:t.right
return{left:i,right:i,top:t.top,bottom:t.bottom}}function je(t){let e=t.visualViewport
return e?{left:0,right:e.width,top:0,bottom:e.height}:{left:0,right:t.innerWidth,top:0,bottom:t.innerHeight}}function $e(t,e){let i=e.width/t.offsetWidth,n=e.height/t.offsetHeight
return(i>.995&&i<1.005||!isFinite(i)||Math.abs(e.width-t.offsetWidth)<1)&&(i=1),(n>.995&&n<1.005||!isFinite(n)||Math.abs(e.height-t.offsetHeight)<1)&&(n=1),{scaleX:i,scaleY:n}}function Ue(t,e=!0){let i=t.ownerDocument,n=null,s=null
for(let o=t.parentNode;o&&o!=i.body&&(e&&!n||!s);)if(1==o.nodeType)!s&&o.scrollHeight>o.clientHeight&&(s=o),e&&!n&&o.scrollWidth>o.clientWidth&&(n=o),o=o.assignedSlot||o.parentNode
else{if(11!=o.nodeType)break
o=o.host}return{x:n,y:s}}Ie.prototype.startSide=Ie.prototype.endSide=-1
class Ye{constructor(){this.anchorNode=null,this.anchorOffset=0,this.focusNode=null,this.focusOffset=0}eq(t){return this.anchorNode==t.anchorNode&&this.anchorOffset==t.anchorOffset&&this.focusNode==t.focusNode&&this.focusOffset==t.focusOffset}setRange(t){let{anchorNode:e,focusNode:i}=t
this.set(e,Math.min(t.anchorOffset,e?_e(e):0),i,Math.min(t.focusOffset,i?_e(i):0))}set(t,e,i,n){this.anchorNode=t,this.anchorOffset=e,this.focusNode=i,this.focusOffset=n}}let Ge,Je=null
function Xe(t){if(t.setActive)return t.setActive()
if(Je)return t.focus(Je)
let e=[]
for(let i=t;i&&(e.push(i,i.scrollTop,i.scrollLeft),i!=i.ownerDocument);i=i.parentNode);if(t.focus(null==Je?{get preventScroll(){return Je={preventScroll:!0},!0}}:void 0),!Je){Je=!1
for(let t=0;t<e.length;){let i=e[t++],n=e[t++],s=e[t++]
i.scrollTop!=n&&(i.scrollTop=n),i.scrollLeft!=s&&(i.scrollLeft=s)}}}function Qe(t,e,i=e){let n=Ge||(Ge=document.createRange())
return n.setEnd(t,i),n.setStart(t,e),n}function Ze(t,e,i,n){let s={key:e,code:e,keyCode:i,which:i,cancelable:!0}
n&&({altKey:s.altKey,ctrlKey:s.ctrlKey,shiftKey:s.shiftKey,metaKey:s.metaKey}=n)
let o=new KeyboardEvent("keydown",s)
o.synthetic=!0,t.dispatchEvent(o)
let r=new KeyboardEvent("keyup",s)
return r.synthetic=!0,t.dispatchEvent(r),o.defaultPrevented||r.defaultPrevented}function ti(t){return t instanceof Window?t.pageYOffset>Math.max(0,t.document.documentElement.scrollHeight-t.innerHeight-4):t.scrollTop>Math.max(1,t.scrollHeight-t.clientHeight-4)}function ei(t,e){for(let i=t,n=e;;){if(3==i.nodeType&&n>0)return{node:i,offset:n}
if(1==i.nodeType&&n>0){if("false"==i.contentEditable)return null
i=i.childNodes[n-1],n=_e(i)}else{if(!i.parentNode||ze(i))return null
n=Fe(i),i=i.parentNode}}}function ii(t,e){for(let i=t,n=e;;){if(3==i.nodeType&&n<i.nodeValue.length)return{node:i,offset:n}
if(1==i.nodeType&&n<i.childNodes.length){if("false"==i.contentEditable)return null
i=i.childNodes[n],n=0}else{if(!i.parentNode||ze(i))return null
n=Fe(i)+1,i=i.parentNode}}}ye.safari&&ye.safari_version>=26&&(Je=!1)
class ni{constructor(t,e,i=!0){this.node=t,this.offset=e,this.precise=i}static before(t,e){return new ni(t.parentNode,Fe(t),e)}static after(t,e){return new ni(t.parentNode,Fe(t)+1,e)}}var si=function(t){return t[t.LTR=0]="LTR",t[t.RTL=1]="RTL",t}(si||(si={}))
const oi=si.LTR,ri=si.RTL
function li(t){let e=[]
for(let i=0;i<t.length;i++)e.push(1<<+t[i])
return e}const ai=li("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),hi=li("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),ci=Object.create(null),ui=[]
for(let jf of["()","[]","{}"]){let t=jf.charCodeAt(0),e=jf.charCodeAt(1)
ci[t]=e,ci[e]=-t}function di(t){return t<=247?ai[t]:1424<=t&&t<=1524?2:1536<=t&&t<=1785?hi[t-1536]:1774<=t&&t<=2220?4:8192<=t&&t<=8204?256:64336<=t&&t<=65023?4:1}const fi=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/
class pi{get dir(){return this.level%2?ri:oi}constructor(t,e,i){this.from=t,this.to=e,this.level=i}side(t,e){return this.dir==e==t?this.to:this.from}forward(t,e){return t==(this.dir==e)}static find(t,e,i,n){let s=-1
for(let o=0;o<t.length;o++){let r=t[o]
if(r.from<=e&&r.to>=e){if(r.level==i)return o;(s<0||(0!=n?n<0?r.from<e:r.to>e:t[s].level>r.level))&&(s=o)}}if(s<0)throw new RangeError("Index out of range")
return s}}function mi(t,e){if(t.length!=e.length)return!1
for(let i=0;i<t.length;i++){let n=t[i],s=e[i]
if(n.from!=s.from||n.to!=s.to||n.direction!=s.direction||!mi(n.inner,s.inner))return!1}return!0}const gi=[]
function vi(t,e,i,n,s,o,r){let l=n%2?2:1
if(n%2==s%2)for(let a=e,h=0;a<i;){let e=!0,c=!1
if(h==o.length||a<o[h].from){let t=gi[a]
t!=l&&(e=!1,c=16==t)}let u=e||1!=l?null:[],d=e?n:n+1,f=a
t:for(;;)if(h<o.length&&f==o[h].from){if(c)break t
let p=o[h]
if(!e)for(let t=p.to,e=h+1;;){if(t==i)break t
if(!(e<o.length&&o[e].from==t)){if(gi[t]==l)break t
break}t=o[e++].to}h++,u?u.push(p):(p.from>a&&r.push(new pi(a,p.from,d)),wi(t,p.direction==oi!=!(d%2)?n+1:n,s,p.inner,p.from,p.to,r),a=p.to),f=p.to}else{if(f==i||(e?gi[f]!=l:gi[f]==l))break
f++}u?vi(t,a,f,n+1,s,u,r):a<f&&r.push(new pi(a,f,d)),a=f}else for(let a=i,h=o.length;a>e;){let i=!0,c=!1
if(!h||a>o[h-1].to){let t=gi[a-1]
t!=l&&(i=!1,c=16==t)}let u=i||1!=l?null:[],d=i?n:n+1,f=a
t:for(;;)if(h&&f==o[h-1].to){if(c)break t
let p=o[--h]
if(!i)for(let t=p.from,i=h;;){if(t==e)break t
if(!i||o[i-1].to!=t){if(gi[t-1]==l)break t
break}t=o[--i].from}u?u.push(p):(p.to<a&&r.push(new pi(p.to,a,d)),wi(t,p.direction==oi!=!(d%2)?n+1:n,s,p.inner,p.from,p.to,r),a=p.from),f=p.from}else{if(f==e||(i?gi[f-1]!=l:gi[f-1]==l))break
f--}u?vi(t,f,a,n+1,s,u,r):f<a&&r.push(new pi(f,a,d)),a=f}}function wi(t,e,i,n,s,o,r){let l=e%2?2:1
!function(t,e,i,n,s){for(let o=0;o<=n.length;o++){let r=o?n[o-1].to:e,l=o<n.length?n[o].from:i,a=o?256:s
for(let e=r,i=a,n=a;e<l;e++){let s=di(t.charCodeAt(e))
512==s?s=i:8==s&&4==n&&(s=16),gi[e]=4==s?2:s,7&s&&(n=s),i=s}for(let t=r,e=a,n=a;t<l;t++){let s=gi[t]
if(128==s)t<l-1&&e==gi[t+1]&&24&e?s=gi[t]=e:gi[t]=256
else if(64==s){let s=t+1
for(;s<l&&64==gi[s];)s++
let o=t&&8==e||s<i&&8==gi[s]?1==n?1:8:256
for(let e=t;e<s;e++)gi[e]=o
t=s-1}else 8==s&&1==n&&(gi[t]=1)
e=s,7&s&&(n=s)}}}(t,s,o,n,l),function(t,e,i,n,s){let o=1==s?2:1
for(let r=0,l=0,a=0;r<=n.length;r++){let h=r?n[r-1].to:e,c=r<n.length?n[r].from:i
for(let e,i,n,r=h;r<c;r++)if(i=ci[e=t.charCodeAt(r)])if(i<0){for(let t=l-3;t>=0;t-=3)if(ui[t+1]==-i){let e=ui[t+2],i=2&e?s:4&e?1&e?o:s:0
i&&(gi[r]=gi[ui[t]]=i),l=t
break}}else{if(189==ui.length)break
ui[l++]=r,ui[l++]=e,ui[l++]=a}else if(2==(n=gi[r])||1==n){let t=n==s
a=t?0:1
for(let e=l-3;e>=0;e-=3){let i=ui[e+2]
if(2&i)break
if(t)ui[e+2]|=2
else{if(4&i)break
ui[e+2]|=4}}}}}(t,s,o,n,l),function(t,e,i,n){for(let s=0,o=n;s<=i.length;s++){let r=s?i[s-1].to:t,l=s<i.length?i[s].from:e
for(let a=r;a<l;){let r=gi[a]
if(256==r){let r=a+1
for(;;)if(r==l){if(s==i.length)break
r=i[s++].to,l=s<i.length?i[s].from:e}else{if(256!=gi[r])break
r++}let h=1==o,c=h==(1==(r<e?gi[r]:n))?h?1:2:n
for(let e=r,n=s,o=n?i[n-1].to:t;e>a;)e==o&&(e=i[--n].from,o=n?i[n-1].to:t),gi[--e]=c
a=r}else o=r,a++}}}(s,o,n,l),vi(t,s,o,e,i,n,r)}function bi(t){return[new pi(0,t,0)]}let yi=""
function xi(t,e,i,n,s){var o
let r=n.head-t.from,l=pi.find(e,r,null!==(o=n.bidiLevel)&&void 0!==o?o:-1,n.assoc),a=e[l],h=a.side(s,i)
if(r==h){let t=l+=s?1:-1
if(t<0||t>=e.length)return null
a=e[l=t],r=a.side(!s,i),h=a.side(s,i)}let c=T(t.text,r,a.forward(s,i));(c<a.from||c>a.to)&&(c=h),yi=t.text.slice(Math.min(r,c),Math.max(r,c))
let u=l==(s?e.length-1:0)?null:e[l+(s?1:-1)]
return u&&c==h&&u.level+(s?0:1)<a.level?q.cursor(u.side(!s,i)+t.from,u.forward(s,i)?1:-1,u.level):q.cursor(c+t.from,a.forward(s,i)?-1:1,a.level)}function ki(t,e,i){for(let n=e;n<i;n++){let e=di(t.charCodeAt(n))
if(1==e)return oi
if(2==e||4==e)return ri}return oi}const Si=j.define(),Ci=j.define(),Mi=j.define(),Ai=j.define(),Ti=j.define(),Oi=j.define(),Di=j.define(),Ei=j.define(),Bi=j.define(),Ri=j.define({combine:t=>t.some(t=>t)}),Li=j.define({combine:t=>t.some(t=>t)}),Ii=j.define()
class Pi{constructor(t,e,i,n,s,o=!1){this.range=t,this.y=e,this.x=i,this.yMargin=n,this.xMargin=s,this.isSnapshot=o}map(t){return t.empty?this:new Pi(this.range.map(t),this.y,this.x,this.yMargin,this.xMargin,this.isSnapshot)}clip(t){return this.range.to<=t.doc.length?this:new Pi(q.cursor(t.doc.length),this.y,this.x,this.yMargin,this.xMargin,this.isSnapshot)}}const Ni=vt.define({map:(t,e)=>t.map(e)}),Wi=vt.define()
function Hi(t,e,i){let n=t.facet(Ai)
n.length?n[0](e):window.onerror&&window.onerror(String(e),i,void 0,void 0,e)||(i?console.error(i+":",e):console.error(e))}const Vi=j.define({combine:t=>!t.length||t[0]})
let Fi=0
const zi=j.define({combine:t=>t.filter((e,i)=>{for(let n=0;n<i;n++)if(t[n].plugin==e.plugin)return!1
return!0})})
class qi{constructor(t,e,i,n,s){this.id=t,this.create=e,this.domEventHandlers=i,this.domEventObservers=n,this.baseExtensions=s(this),this.extension=this.baseExtensions.concat(zi.of({plugin:this,arg:void 0}))}of(t){return this.baseExtensions.concat(zi.of({plugin:this,arg:t}))}static define(t,e){const{eventHandlers:i,eventObservers:n,provide:s,decorations:o}=e||{}
return new qi(Fi++,t,i,n,t=>{let e=[]
return o&&e.push($i.of(e=>{let i=e.plugin(t)
return i?o(i):Oe.none})),s&&e.push(s(t)),e})}static fromClass(t,e){return qi.define((e,i)=>new t(e,i),e)}}class _i{constructor(t){this.spec=t,this.mustUpdate=null,this.value=null}get plugin(){return this.spec&&this.spec.plugin}update(t){if(this.value){if(this.mustUpdate){let i=this.mustUpdate
if(this.mustUpdate=null,this.value.update)try{this.value.update(i)}catch(e){if(Hi(i.state,e,"CodeMirror plugin crashed"),this.value.destroy)try{this.value.destroy()}catch(t){}this.deactivate()}}}else if(this.spec)try{this.value=this.spec.plugin.create(t,this.spec.arg)}catch(e){Hi(t.state,e,"CodeMirror plugin crashed"),this.deactivate()}return this}destroy(t){var e
if(null===(e=this.value)||void 0===e?void 0:e.destroy)try{this.value.destroy()}catch(e){Hi(t.state,e,"CodeMirror plugin crashed")}}deactivate(){this.spec=this.value=null}}const Ki=j.define(),ji=j.define(),$i=j.define(),Ui=j.define(),Yi=j.define(),Gi=j.define(),Ji=j.define()
function Xi(t,e){let i=t.state.facet(Ji)
if(!i.length)return i
let n=i.map(e=>e instanceof Function?e(t):e),s=[]
return Pt.spans(n,e.from,e.to,{point(){},span(t,i,n,o){let r=t-e.from,l=i-e.from,a=s
for(let s=n.length-1;s>=0;s--,o--){let t,i=n[s].spec.bidiIsolate
if(null==i&&(i=ki(e.text,r,l)),o>0&&a.length&&(t=a[a.length-1]).to==r&&t.direction==i)t.to=l,a=t.inner
else{let t={from:r,to:l,direction:i,inner:[]}
a.push(t),a=t.inner}}}}),s}const Qi=j.define()
function Zi(t){let e=0,i=0,n=0,s=0
for(let o of t.state.facet(Qi)){let r=o(t)
r&&(null!=r.left&&(e=Math.max(e,r.left)),null!=r.right&&(i=Math.max(i,r.right)),null!=r.top&&(n=Math.max(n,r.top)),null!=r.bottom&&(s=Math.max(s,r.bottom)))}return{left:e,right:i,top:n,bottom:s}}const tn=j.define()
class en{constructor(t,e,i,n){this.fromA=t,this.toA=e,this.fromB=i,this.toB=n}join(t){return new en(Math.min(this.fromA,t.fromA),Math.max(this.toA,t.toA),Math.min(this.fromB,t.fromB),Math.max(this.toB,t.toB))}addToSet(t){let e=t.length,i=this
for(;e>0;e--){let n=t[e-1]
if(!(n.fromA>i.toA)){if(n.toA<i.fromA)break
i=i.join(n),t.splice(e-1,1)}}return t.splice(e,0,i),t}static extendWithRanges(t,e){if(0==e.length)return t
let i=[]
for(let n=0,s=0,o=0;;){let r=n<t.length?t[n].fromB:1e9,l=s<e.length?e[s]:1e9,a=Math.min(r,l)
if(1e9==a)break
let h=a+o,c=a,u=h
for(;;)if(s<e.length&&e[s]<=c){let i=e[s+1]
s+=2,c=Math.max(c,i)
for(let e=n;e<t.length&&t[e].fromB<=c;e++)o=t[e].toA-t[e].toB
u=Math.max(u,i+o)}else{if(!(n<t.length&&t[n].fromB<=c))break
{let e=t[n++]
c=Math.max(c,e.toB),u=Math.max(u,e.toA),o=e.toA-e.toB}}i.push(new en(h,u,a,c))}return i}}class nn{constructor(t,e,i){this.view=t,this.state=e,this.transactions=i,this.flags=0,this.startState=t.state,this.changes=I.empty(this.startState.doc.length)
for(let s of i)this.changes=this.changes.compose(s.changes)
let n=[]
this.changes.iterChangedRanges((t,e,i,s)=>n.push(new en(t,e,i,s))),this.changedRanges=n}static create(t,e,i){return new nn(t,e,i)}get viewportChanged(){return(4&this.flags)>0}get viewportMoved(){return(8&this.flags)>0}get heightChanged(){return(2&this.flags)>0}get geometryChanged(){return this.docChanged||(18&this.flags)>0}get focusChanged(){return(1&this.flags)>0}get docChanged(){return!this.changes.empty}get selectionSet(){return this.transactions.some(t=>t.selection)}get empty(){return 0==this.flags&&0==this.transactions.length}}const sn=[]
class on{constructor(t,e,i=0){this.dom=t,this.length=e,this.flags=i,this.parent=null,t.cmTile=this}get breakAfter(){return 1&this.flags}get children(){return sn}isWidget(){return!1}get isHidden(){return!1}isComposite(){return!1}isLine(){return!1}isText(){return!1}isBlock(){return!1}get domAttrs(){return null}sync(t){if(this.flags|=2,4&this.flags){this.flags&=-5
let t=this.domAttrs
t&&function(t,e){for(let i=t.attributes.length-1;i>=0;i--){let n=t.attributes[i].name
null==e[n]&&t.removeAttribute(n)}for(let i in e){let n=e[i]
"style"==i?t.style.cssText=n:t.getAttribute(i)!=n&&t.setAttribute(i,n)}}(this.dom,t)}}toString(){return this.constructor.name+(this.children.length?`(${this.children})`:"")+(this.breakAfter?"#":"")}destroy(){this.parent=null}setDOM(t){this.dom=t,t.cmTile=this}get posAtStart(){return this.parent?this.parent.posBefore(this):0}get posAtEnd(){return this.posAtStart+this.length}posBefore(t,e=this.posAtStart){let i=e
for(let n of this.children){if(n==t)return i
i+=n.length+n.breakAfter}throw new RangeError("Invalid child in posBefore")}posAfter(t){return this.posBefore(t)+t.length}covers(t){return!0}coordsIn(t,e){return null}domPosFor(t,e){let i=Fe(this.dom),n=this.length?t>0:e>0
return new ni(this.parent.dom,i+(n?1:0),0==t||t==this.length)}markDirty(t){this.flags&=-3,t&&(this.flags|=4),this.parent&&2&this.parent.flags&&this.parent.markDirty(!1)}get overrideDOMText(){return null}get root(){for(let t=this;t;t=t.parent)if(t instanceof an)return t
return null}static get(t){return t.cmTile}}class rn extends on{constructor(t){super(t,0),this._children=[]}isComposite(){return!0}get children(){return this._children}get lastChild(){return this.children.length?this.children[this.children.length-1]:null}append(t){this.children.push(t),t.parent=this}sync(t){if(2&this.flags)return
super.sync(t)
let e,i=this.dom,n=null,s=(null==t?void 0:t.node)==i?t:null,o=0
for(let r of this.children){if(r.sync(t),o+=r.length+r.breakAfter,e=n?n.nextSibling:i.firstChild,s&&e!=r.dom&&(s.written=!0),r.dom.parentNode==i)for(;e&&e!=r.dom;)e=ln(e)
else i.insertBefore(r.dom,e)
n=r.dom}for(e=n?n.nextSibling:i.firstChild,s&&e&&(s.written=!0);e;)e=ln(e)
this.length=o}}function ln(t){let e=t.nextSibling
return t.parentNode.removeChild(t),e}class an extends rn{constructor(t,e){super(e),this.view=t}owns(t){for(;t;t=t.parent)if(t==this)return!0
return!1}isBlock(){return!0}nearest(t){for(;;){if(!t)return null
let e=on.get(t)
if(e&&this.owns(e))return e
t=t.parentNode}}blockTiles(t){for(let e=[],i=this,n=0,s=0;;)if(n==i.children.length){if(!e.length)return
i=i.parent,i.breakAfter&&s++,n=e.pop()}else{let o=i.children[n++]
if(o instanceof hn)e.push(n),i=o,n=0
else{let e=s+o.length,i=t(o,s)
if(void 0!==i)return i
s=e+o.breakAfter}}}resolveBlock(t,e){let i,n,s=-1,o=-1
if(this.blockTiles((r,l)=>{let a=l+r.length
if(t>=l&&t<=a){if(r.isWidget()&&e>=-1&&e<=1){if(32&r.flags)return!0
16&r.flags&&(i=void 0)}(l<t||t==a&&(e<-1?r.length:r.covers(1)))&&(!i||!r.isWidget()&&i.isWidget())&&(i=r,s=t-l),(a>t||t==l&&(e>1?r.length:r.covers(-1)))&&(!n||!r.isWidget()&&n.isWidget())&&(n=r,o=t-l)}}),!i&&!n)throw new Error("No tile at position "+t)
return i&&e<0||!n?{tile:i,offset:s}:{tile:n,offset:o}}}class hn extends rn{constructor(t,e){super(t),this.wrapper=e}isBlock(){return!0}covers(t){return!!this.children.length&&(t<0?this.children[0].covers(-1):this.lastChild.covers(1))}get domAttrs(){return this.wrapper.attributes}static of(t,e){let i=new hn(e||document.createElement(t.tagName),t)
return e||(i.flags|=4),i}}class cn extends rn{constructor(t,e){super(t),this.attrs=e}isLine(){return!0}static start(t,e,i){let n=new cn(e||document.createElement("div"),t)
return e&&i||(n.flags|=4),n}get domAttrs(){return this.attrs}resolveInline(t,e,i){let n=null,s=-1,o=null,r=-1
!function t(l,a){for(let h=0,c=0;h<l.children.length&&c<=a;h++){let u=l.children[h],d=c+u.length
d>=a&&(u.isComposite()?t(u,a-c):(!o||o.isHidden&&(e>0||i&&un(o,u)))&&(d>a||32&u.flags)?(o=u,r=a-c):(c<a||16&u.flags&&!u.isHidden)&&(n=u,s=a-c)),c=d}}(this,t)
let l=(e<0?n:o)||n||o
return l?{tile:l,offset:l==n?s:r}:null}coordsIn(t,e){let i=this.resolveInline(t,e,!0)
return i?i.tile.coordsIn(Math.max(0,i.offset),e):function(t){let e=t.dom.lastChild
if(!e)return t.dom.getBoundingClientRect()
let i=He(e)
return i[i.length-1]||null}(this)}domIn(t,e){let i=this.resolveInline(t,e)
if(i){let{tile:t,offset:n}=i
if(this.dom.contains(t.dom))return t.isText()?new ni(t.dom,Math.min(t.dom.nodeValue.length,n)):t.domPosFor(n,16&t.flags?1:32&t.flags?-1:e)
let s=i.tile.parent,o=!1
for(let e of s.children){if(o)return new ni(e.dom,0)
e==i.tile&&(o=!0)}}return new ni(this.dom,0)}}function un(t,e){let i=t.coordsIn(0,1),n=e.coordsIn(0,1)
return i&&n&&n.top<i.bottom}class dn extends rn{constructor(t,e){super(t),this.mark=e}get domAttrs(){return this.mark.attrs}static of(t,e){let i=new dn(e||document.createElement(t.tagName),t)
return e||(i.flags|=4),i}}class fn extends on{constructor(t,e){super(t,e.length),this.text=e}sync(t){2&this.flags||(super.sync(t),this.dom.nodeValue!=this.text&&(t&&t.node==this.dom&&(t.written=!0),this.dom.nodeValue=this.text))}isText(){return!0}toString(){return JSON.stringify(this.text)}coordsIn(t,e){let i=this.dom.nodeValue.length
t>i&&(t=i)
let n=t,s=t,o=0
0==t&&e<0||t==i&&e>=0?ye.chrome||ye.gecko||(t?(n--,o=1):s<i&&(s++,o=-1)):e<0?n--:s<i&&s++
let r=Qe(this.dom,n,s).getClientRects()
if(!r.length)return null
let l=r[(o?o<0:e>=0)?0:r.length-1]
return ye.safari&&!o&&0==l.width&&(l=Array.prototype.find.call(r,t=>t.width)||l),o?Ke(l,o<0):l||null}static of(t,e){let i=new fn(e||document.createTextNode(t),t)
return e||(i.flags|=2),i}}class pn extends on{constructor(t,e,i,n){super(t,e,n),this.widget=i}isWidget(){return!0}get isHidden(){return this.widget.isHidden}covers(t){return!(48&this.flags)&&(this.flags&(t<0?64:128))>0}coordsIn(t,e){return this.coordsInWidget(t,e,!1)}coordsInWidget(t,e,i){let n=this.widget.coordsAt(this.dom,t,e)
if(n)return n
if(i)return Ke(this.dom.getBoundingClientRect(),this.length?0==t:e<=0)
{let e=this.dom.getClientRects(),i=null
if(!e.length)return null
let n=!!(16&this.flags)||!(32&this.flags)&&t>0
for(let s=n?e.length-1:0;i=e[s],!(t>0?0==s:s==e.length-1||i.top<i.bottom);s+=n?-1:1);return Ke(i,!n)}}get overrideDOMText(){if(!this.length)return v.empty
let{root:t}=this
if(!t)return v.empty
let e=this.posAtStart
return t.view.state.doc.slice(e,e+this.length)}destroy(){super.destroy(),this.widget.destroy(this.dom)}static of(t,e,i,n,s){return s||(s=t.toDOM(e),t.editable||(s.contentEditable="false")),new pn(s,i,t,n)}}class mn extends on{constructor(t){let e=document.createElement("img")
e.className="cm-widgetBuffer",e.setAttribute("aria-hidden","true"),super(e,0,t)}get isHidden(){return!0}get overrideDOMText(){return v.empty}coordsIn(t){return this.dom.getBoundingClientRect()}}class gn{constructor(t){this.index=0,this.beforeBreak=!1,this.parents=[],this.tile=t}advance(t,e,i){let{tile:n,index:s,beforeBreak:o,parents:r}=this
for(;t||e>0;)if(n.isComposite())if(o){if(!t)break
i&&i.break(),t--,o=!1}else if(s==n.children.length){if(!t&&!r.length)break
i&&i.leave(n),o=!!n.breakAfter,({tile:n,index:s}=r.pop()),s++}else{let l=n.children[s],a=l.breakAfter
!(e>0?l.length<=t:l.length<t)||i&&!1===i.skip(l,0,l.length)&&l.isComposite?(r.push({tile:n,index:s}),n=l,s=0,i&&l.isComposite()&&i.enter(l)):(o=!!a,s++,t-=l.length)}else if(s==n.length)o=!!n.breakAfter,({tile:n,index:s}=r.pop()),s++
else{if(!t)break
{let e=Math.min(t,n.length-s)
i&&i.skip(n,s,s+e),t-=e,s+=e}}return this.tile=n,this.index=s,this.beforeBreak=o,this}get root(){return this.parents.length?this.parents[0].tile:this.tile}}class vn{constructor(t,e,i,n){this.from=t,this.to=e,this.wrapper=i,this.rank=n}}class wn{constructor(t,e,i){this.cache=t,this.root=e,this.blockWrappers=i,this.curLine=null,this.lastBlock=null,this.afterWidget=null,this.pos=0,this.wrappers=[],this.wrapperPos=0}addText(t,e,i,n){var s
this.flushBuffer()
let o=this.ensureMarks(e,i),r=o.lastChild
r&&r.isText()&&!(8&r.flags)&&r.length+t.length<512?(this.cache.reused.set(r,2),(o.children[o.children.length-1]=new fn(r.dom,r.text+t)).parent=o):o.append(n||fn.of(t,null===(s=this.cache.find(fn))||void 0===s?void 0:s.dom)),this.pos+=t.length,this.afterWidget=null}addComposition(t,e){let i=this.curLine
i.dom!=e.line.dom&&(i.setDOM(this.cache.reused.has(e.line)?Mn(e.line.dom):e.line.dom),this.cache.reused.set(e.line,2))
let n=i
for(let r=e.marks.length-1;r>=0;r--){let t=e.marks[r],i=n.lastChild
if(i instanceof dn&&i.mark.eq(t.mark))i.dom!=t.dom&&i.setDOM(Mn(t.dom)),n=i
else{if(this.cache.reused.get(t)){let e=on.get(t.dom)
e&&e.setDOM(Mn(t.dom))}let e=dn.of(t.mark,t.dom)
n.append(e),n=e}this.cache.reused.set(t,2)}let s=on.get(t.text)
s&&this.cache.reused.set(s,2)
let o=new fn(t.text,t.text.nodeValue)
o.flags|=8,this.pos=t.range.toB,n.append(o)}addInlineWidget(t,e,i){let n=this.afterWidget&&48&t.flags&&(48&this.afterWidget.flags)==(48&t.flags)
n||this.flushBuffer()
let s=this.ensureMarks(e,i)
n||16&t.flags||s.append(this.getBuffer(1)),s.append(t),this.pos+=t.length,this.afterWidget=t}addMark(t,e,i){this.flushBuffer(),this.ensureMarks(e,i).append(t),this.pos+=t.length,this.afterWidget=null}addBlockWidget(t){this.getBlockPos().append(t),this.pos+=t.length,this.lastBlock=t,this.endLine()}continueWidget(t){(this.afterWidget||this.lastBlock).length+=t,this.pos+=t}addLineStart(t,e){var i
t||(t=Cn)
let n=cn.start(t,e||(null===(i=this.cache.find(cn))||void 0===i?void 0:i.dom),!!e)
this.getBlockPos().append(this.lastBlock=this.curLine=n)}addLine(t){this.getBlockPos().append(t),this.pos+=t.length,this.lastBlock=t,this.endLine()}addBreak(){this.lastBlock.flags|=1,this.endLine(),this.pos++}addLineStartIfNotCovered(t){this.blockPosCovered()||this.addLineStart(t)}ensureLine(t){this.curLine||this.addLineStart(t)}ensureMarks(t,e){var i
let n=this.curLine
for(let s=t.length-1;s>=0;s--){let o,r=t[s]
if(e>0&&(o=n.lastChild)&&o instanceof dn&&o.mark.eq(r))n=o,e--
else{let t=dn.of(r,null===(i=this.cache.find(dn,t=>t.mark.eq(r)))||void 0===i?void 0:i.dom)
n.append(t),n=t,e=0}}return n}endLine(){if(this.curLine){this.flushBuffer()
let t=this.curLine.lastChild
t&&Sn(this.curLine,!1)&&("BR"==t.dom.nodeName||!t.isWidget()||ye.ios&&Sn(this.curLine,!0))||this.curLine.append(this.cache.findWidget(Tn,0,32)||new pn(Tn.toDOM(),0,Tn,32)),this.curLine=this.afterWidget=null}}updateBlockWrappers(){this.wrapperPos>this.pos+1e4&&(this.blockWrappers.goto(this.pos),this.wrappers.length=0)
for(let t=this.wrappers.length-1;t>=0;t--)this.wrappers[t].to<this.pos&&this.wrappers.splice(t,1)
for(let t=this.blockWrappers;t.value&&t.from<=this.pos;t.next())if(t.to>=this.pos){let e=102*t.rank+t.value.rank,i=new vn(t.from,t.to,t.value,e),n=this.wrappers.length
for(;n>0&&(this.wrappers[n-1].rank-i.rank||this.wrappers[n-1].to-i.to)<0;)n--
this.wrappers.splice(n,0,i)}this.wrapperPos=this.pos}getBlockPos(){var t
this.updateBlockWrappers()
let e=this.root
for(let i of this.wrappers){let n=e.lastChild
if(i.from<this.pos&&n instanceof hn&&n.wrapper.eq(i.wrapper))e=n
else{let n=hn.of(i.wrapper,null===(t=this.cache.find(hn,t=>t.wrapper.eq(i.wrapper)))||void 0===t?void 0:t.dom)
e.append(n),e=n}}return e}blockPosCovered(){let t=this.lastBlock
return null!=t&&!t.breakAfter&&(!t.isWidget()||(160&t.flags)>0)}getBuffer(t){let e=2|(t<0?16:32),i=this.cache.find(mn,void 0,1)
return i&&(i.flags=e),i||new mn(e)}flushBuffer(){!this.afterWidget||32&this.afterWidget.flags||(this.afterWidget.parent.append(this.getBuffer(-1)),this.afterWidget=null)}}class bn{constructor(t){this.skipCount=0,this.text="",this.textOff=0,this.cursor=t.iter()}skip(t){this.textOff+t<=this.text.length?this.textOff+=t:(this.skipCount+=t-(this.text.length-this.textOff),this.text="",this.textOff=0)}next(t){if(this.textOff==this.text.length){let{value:e,lineBreak:i,done:n}=this.cursor.next(this.skipCount)
if(this.skipCount=0,n)throw new Error("Ran out of text content when drawing inline views")
this.text=e
let s=this.textOff=Math.min(t,e.length)
return i?null:e.slice(0,s)}let e=Math.min(this.text.length,this.textOff+t),i=this.text.slice(this.textOff,e)
return this.textOff=e,i}}const yn=[pn,cn,fn,dn,mn,hn,an]
for(let jf=0;jf<yn.length;jf++)yn[jf].bucket=jf
class xn{constructor(t){this.view=t,this.buckets=yn.map(()=>[]),this.index=yn.map(()=>0),this.reused=new Map}add(t){let e=t.constructor.bucket,i=this.buckets[e]
i.length<6?i.push(t):i[this.index[e]=(this.index[e]+1)%6]=t}find(t,e,i=2){let n=t.bucket,s=this.buckets[n],o=this.index[n]
for(let r=s.length-1;r>=0;r--){let t=(r+o)%s.length,l=s[t]
if((!e||e(l))&&!this.reused.has(l))return s.splice(t,1),t<o&&this.index[n]--,this.reused.set(l,i),l}return null}findWidget(t,e,i){let n=this.buckets[0]
if(n.length)for(let s=0,o=0;;s++){if(s==n.length){if(o)return null
o=1,s=0}let r=n[s]
if(!this.reused.has(r)&&(0==o?r.widget.compare(t):r.widget.constructor==t.constructor&&t.updateDOM(r.dom,this.view,r.widget)))return n.splice(s,1),s<this.index[0]&&this.index[0]--,r.widget==t&&r.length==e&&(497&r.flags)==i?(this.reused.set(r,1),r):(this.reused.set(r,2),new pn(r.dom,e,t,-498&r.flags|i))}}reuse(t){return this.reused.set(t,1),t}maybeReuse(t,e=2){if(!this.reused.has(t))return this.reused.set(t,e),t.dom}clear(){for(let t=0;t<this.buckets.length;t++)this.buckets[t].length=this.index[t]=0}}class kn{constructor(t,e,i,n,s){this.view=t,this.decorations=n,this.disallowBlockEffectsFor=s,this.openWidget=!1,this.openMarks=0,this.cache=new xn(t),this.text=new bn(t.state.doc),this.builder=new wn(this.cache,new an(t,t.contentDOM),Pt.iter(i)),this.cache.reused.set(e,2),this.old=new gn(e),this.reuseWalker={skip:(t,e,i)=>{if(this.cache.add(t),t.isComposite())return!1},enter:t=>this.cache.add(t),leave:()=>{},break:()=>{}}}run(t,e){let i=e&&this.getCompositionContext(e.text)
for(let n=0,s=0,o=0;;){let r=o<t.length?t[o++]:null,l=r?r.fromA:this.old.root.length
if(l>n){let t=l-n
this.preserve(t,!o,!r),n=l,s+=t}if(!r)break
e&&r.fromA<=e.range.fromA&&r.toA>=e.range.toA?(this.forward(r.fromA,e.range.fromA,e.range.fromA<e.range.toA?1:-1),this.emit(s,e.range.fromB),this.cache.clear(),this.builder.addComposition(e,i),this.text.skip(e.range.toB-e.range.fromB),this.forward(e.range.fromA,r.toA),this.emit(e.range.toB,r.toB)):(this.forward(r.fromA,r.toA),this.emit(s,r.toB)),s=r.toB,n=r.toA}return this.builder.curLine&&this.builder.endLine(),this.builder.root}preserve(t,e,i){let n=function(t){let e=[]
for(let i=t.parents.length;i>1;i--){let n=i==t.parents.length?t.tile:t.parents[i].tile
n instanceof dn&&e.push(n.mark)}return e}(this.old),s=this.openMarks
this.old.advance(t,i?1:-1,{skip:(t,e,i)=>{if(t.isWidget())if(this.openWidget)this.builder.continueWidget(i-e)
else{let o=i>0||e<t.length?pn.of(t.widget,this.view,i-e,496&t.flags,this.cache.maybeReuse(t)):this.cache.reuse(t)
256&o.flags?(o.flags&=-2,this.builder.addBlockWidget(o)):(this.builder.ensureLine(null),this.builder.addInlineWidget(o,n,s),s=n.length)}else if(t.isText())this.builder.ensureLine(null),e||i!=t.length||this.cache.reused.has(t)?(this.cache.add(t),this.builder.addText(t.text.slice(e,i),n,s)):this.builder.addText(t.text,n,s,this.cache.reuse(t)),s=n.length
else if(t.isLine())t.flags&=-2,this.cache.reused.set(t,1),this.builder.addLine(t)
else if(t instanceof mn)this.cache.add(t)
else{if(!(t instanceof dn))return!1
this.builder.ensureLine(null),this.builder.addMark(t,n,s),this.cache.reused.set(t,1),s=n.length}this.openWidget=!1},enter:t=>{t.isLine()?this.builder.addLineStart(t.attrs,this.cache.maybeReuse(t)):(this.cache.add(t),t instanceof dn&&n.unshift(t.mark)),this.openWidget=!1},leave:t=>{t.isLine()?n.length&&(n.length=s=0):t instanceof dn&&(n.shift(),s=Math.min(s,n.length))},break:()=>{this.builder.addBreak(),this.openWidget=!1}}),this.text.skip(t)}emit(t,e){let i=null,n=this.builder,s=0,o=Pt.spans(this.decorations,t,e,{point:(t,e,o,r,l,a)=>{if(o instanceof Be){if(this.disallowBlockEffectsFor[a]){if(o.block)throw new RangeError("Block decorations may not be specified via plugins")
if(e>this.view.state.doc.lineAt(t).to)throw new RangeError("Decorations that replace line breaks may not be specified via plugins")}if(s=r.length,l>r.length)n.continueWidget(e-t)
else{let s=o.widget||(o.block?An.block:An.inline),a=function(t){let e=t.isReplace?(t.startSide<0?64:0)|(t.endSide>0?128:0):t.startSide>0?32:16
return t.block&&(e|=256),e}(o),h=this.cache.findWidget(s,e-t,a)||pn.of(s,this.view,e-t,a)
o.block?(o.startSide>0&&n.addLineStartIfNotCovered(i),n.addBlockWidget(h)):(n.ensureLine(i),n.addInlineWidget(h,r,l))}i=null}else i=function(t,e){let i=e.spec.attributes,n=e.spec.class
return i||n?(t||(t={class:"cm-line"}),i&&xe(i,t),n&&(t.class+=" "+n),t):t}(i,o)
e>t&&this.text.skip(e-t)},span:(t,e,s,o)=>{for(let r=t;r<e;){let l=this.text.next(Math.min(512,e-r))
null==l?(n.addLineStartIfNotCovered(i),n.addBreak(),r++):(n.ensureLine(i),n.addText(l,s,r==t?o:s.length),r+=l.length),i=null}}})
n.addLineStartIfNotCovered(i),this.openWidget=o>s,this.openMarks=o}forward(t,e,i=1){e-t<=10?this.old.advance(e-t,i,this.reuseWalker):(this.old.advance(5,-1,this.reuseWalker),this.old.advance(e-t-10,-1),this.old.advance(5,i,this.reuseWalker))}getCompositionContext(t){let e=[],i=null
for(let n=t.parentNode;;n=n.parentNode){let t=on.get(n)
if(n==this.view.contentDOM)break
t instanceof dn?e.push(t):(null==t?void 0:t.isLine())?i=t:t instanceof hn||("DIV"!=n.nodeName||i||n==this.view.contentDOM?i||e.push(dn.of(new De({tagName:n.nodeName.toLowerCase(),attributes:Me(n)}),n)):i=new cn(n,Cn))}return{line:i,marks:e}}}function Sn(t,e){let i=t=>{for(let n of t.children)if((e?n.isText():n.length)||i(n))return!0
return!1}
return i(t)}const Cn={class:"cm-line"}
function Mn(t){let e=on.get(t)
return e&&e.setDOM(t.cloneNode()),t}class An extends Ae{constructor(t){super(),this.tag=t}eq(t){return t.tag==this.tag}toDOM(){return document.createElement(this.tag)}updateDOM(t){return t.nodeName.toLowerCase()==this.tag}get isHidden(){return!0}}An.inline=new An("span"),An.block=new An("div")
const Tn=new class extends Ae{toDOM(){return document.createElement("br")}get isHidden(){return!0}get editable(){return!0}}
class On{constructor(t){this.view=t,this.decorations=[],this.blockWrappers=[],this.dynamicDecorationMap=[!1],this.domChanged=null,this.hasComposition=null,this.editContextFormatting=Oe.none,this.lastCompositionAfterCursor=!1,this.minWidth=0,this.minWidthFrom=0,this.minWidthTo=0,this.impreciseAnchor=null,this.impreciseHead=null,this.forceSelection=!1,this.lastUpdate=Date.now(),this.updateDeco(),this.tile=new an(t,t.contentDOM),this.updateInner([new en(0,0,0,t.state.doc.length)],null)}update(t){var e
let i=t.changedRanges
this.minWidth>0&&i.length&&(i.every(({fromA:t,toA:e})=>e<this.minWidthFrom||t>this.minWidthTo)?(this.minWidthFrom=t.changes.mapPos(this.minWidthFrom,1),this.minWidthTo=t.changes.mapPos(this.minWidthTo,1)):this.minWidth=this.minWidthFrom=this.minWidthTo=0),this.updateEditContextFormatting(t)
let n=-1
this.view.inputState.composing>=0&&!this.view.observer.editContext&&((null===(e=this.domChanged)||void 0===e?void 0:e.newSel)?n=this.domChanged.newSel.head:function(t,e){let i=!1
return e&&t.iterChangedRanges((t,n)=>{t<e.to&&n>e.from&&(i=!0)}),i}(t.changes,this.hasComposition)||t.selectionSet||(n=t.state.selection.main.head))
let s=n>-1?function(t,e,i){let n=En(t,i)
if(!n)return null
let{node:s,from:o,to:r}=n,l=s.nodeValue
if(/[\n\r]/.test(l))return null
if(t.state.doc.sliceString(n.from,n.to)!=l)return null
let a=e.invertedDesc
return{range:new en(a.mapPos(o),a.mapPos(r),o,r),text:s}}(this.view,t.changes,n):null
if(this.domChanged=null,this.hasComposition){let{from:e,to:n}=this.hasComposition
i=new en(e,n,t.changes.mapPos(e,-1),t.changes.mapPos(n,1)).addToSet(i.slice())}this.hasComposition=s?{from:s.range.fromB,to:s.range.toB}:null,(ye.ie||ye.chrome)&&!s&&t&&t.state.doc.lines!=t.startState.doc.lines&&(this.forceSelection=!0)
let o=this.decorations,r=this.blockWrappers
this.updateDeco()
let l=function(t,e,i){let n=new Bn
return Pt.compare(t,e,i,n),n.changes}(o,this.decorations,t.changes)
l.length&&(i=en.extendWithRanges(i,l))
let a=function(t,e,i){let n=new Rn
return Pt.compare(t,e,i,n),n.changes}(r,this.blockWrappers,t.changes)
return a.length&&(i=en.extendWithRanges(i,a)),s&&!i.some(t=>t.fromA<=s.range.fromA&&t.toA>=s.range.toA)&&(i=s.range.addToSet(i.slice())),!(2&this.tile.flags&&0==i.length||(this.updateInner(i,s),t.transactions.length&&(this.lastUpdate=Date.now()),0))}updateInner(t,e){this.view.viewState.mustMeasureContent=!0
let{observer:i}=this.view
i.ignore(()=>{if(e||t.length){let i=this.tile,n=new kn(this.view,i,this.blockWrappers,this.decorations,this.dynamicDecorationMap)
e&&on.get(e.text)&&n.cache.reused.set(on.get(e.text),2),this.tile=n.run(t,e),Dn(i,n.cache.reused)}this.tile.dom.style.height=this.view.viewState.contentHeight/this.view.scaleY+"px",this.tile.dom.style.flexBasis=this.minWidth?this.minWidth+"px":""
let n=ye.chrome||ye.ios?{node:i.selectionRange.focusNode,written:!1}:void 0
this.tile.sync(n),!n||!n.written&&i.selectionRange.focusNode==n.node&&this.tile.dom.contains(n.node)||(this.forceSelection=!0),this.tile.dom.style.height=""})
let n=[]
if(this.view.viewport.from||this.view.viewport.to<this.view.state.doc.length)for(let s of this.tile.children)s.isWidget()&&s.widget instanceof Ln&&n.push(s.dom)
i.updateGaps(n)}updateEditContextFormatting(t){this.editContextFormatting=this.editContextFormatting.map(t.changes)
for(let e of t.transactions)for(let t of e.effects)t.is(Wi)&&(this.editContextFormatting=t.value)}updateSelection(t=!1,e=!1){!t&&this.view.observer.selectionRange.focusNode||this.view.observer.readSelectionRange()
let{dom:i}=this.tile,n=this.view.root.activeElement,s=n==i,o=!s&&!(this.view.state.facet(Vi)||i.tabIndex>-1)&&We(i,this.view.observer.selectionRange)&&!(n&&i.contains(n))
if(!(s||e||o))return
let r=this.forceSelection
this.forceSelection=!1
let l,a,h=this.view.state.selection.main
if(h.empty?a=l=this.inlineDOMNearPos(h.anchor,h.assoc||1):(a=this.inlineDOMNearPos(h.head,h.head==h.from?1:-1),l=this.inlineDOMNearPos(h.anchor,h.anchor==h.from?1:-1)),ye.gecko&&h.empty&&!this.hasComposition&&1==(c=l).node.nodeType&&c.node.firstChild&&(0==c.offset||"false"==c.node.childNodes[c.offset-1].contentEditable)&&(c.offset==c.node.childNodes.length||"false"==c.node.childNodes[c.offset].contentEditable)){let t=document.createTextNode("")
this.view.observer.ignore(()=>l.node.insertBefore(t,l.node.childNodes[l.offset]||null)),l=a=new ni(t,0),r=!0}var c
let u=this.view.observer.selectionRange
!r&&u.focusNode&&(Ve(l.node,l.offset,u.anchorNode,u.anchorOffset)&&Ve(a.node,a.offset,u.focusNode,u.focusOffset)||this.suppressWidgetCursorChange(u,h))||(this.view.observer.ignore(()=>{ye.android&&ye.chrome&&i.contains(u.focusNode)&&function(t,e){for(let i=t;i&&i!=e;i=i.assignedSlot||i.parentNode)if(1==i.nodeType&&"false"==i.contentEditable)return!0
return!1}(u.focusNode,i)&&(i.blur(),i.focus({preventScroll:!0}))
let t=Pe(this.view.root)
if(t)if(h.empty){if(ye.gecko){let t=(e=l.node,s=l.offset,1!=e.nodeType?0:(s&&"false"==e.childNodes[s-1].contentEditable?1:0)|(s<e.childNodes.length&&"false"==e.childNodes[s].contentEditable?2:0))
if(t&&3!=t){let e=(1==t?ei:ii)(l.node,l.offset)
e&&(l=new ni(e.node,e.offset))}}t.collapse(l.node,l.offset),null!=h.bidiLevel&&void 0!==t.caretBidiLevel&&(t.caretBidiLevel=h.bidiLevel)}else if(t.extend){t.collapse(l.node,l.offset)
try{t.extend(a.node,a.offset)}catch(t){}}else{let e=document.createRange()
h.anchor>h.head&&([l,a]=[a,l]),e.setEnd(a.node,a.offset),e.setStart(l.node,l.offset),t.removeAllRanges(),t.addRange(e)}var e,s
o&&this.view.root.activeElement==i&&(i.blur(),n&&n.focus())}),this.view.observer.setSelectionRange(l,a)),this.impreciseAnchor=l.precise?null:new ni(u.anchorNode,u.anchorOffset),this.impreciseHead=a.precise?null:new ni(u.focusNode,u.focusOffset)}suppressWidgetCursorChange(t,e){return this.hasComposition&&e.empty&&Ve(t.focusNode,t.focusOffset,t.anchorNode,t.anchorOffset)&&this.posFromDOM(t.focusNode,t.focusOffset)==e.head}enforceCursorAssoc(){if(this.hasComposition)return
let{view:t}=this,e=t.state.selection.main,i=Pe(t.root),{anchorNode:n,anchorOffset:s}=t.observer.selectionRange
if(!(i&&e.empty&&e.assoc&&i.modify))return
let o=this.lineAt(e.head,e.assoc)
if(!o)return
let r=o.posAtStart
if(e.head==r||e.head==r+o.length)return
let l=this.coordsAt(e.head,-1),a=this.coordsAt(e.head,1)
if(!l||!a||l.bottom>a.top)return
let h=this.domAtPos(e.head+e.assoc,e.assoc)
i.collapse(h.node,h.offset),i.modify("move",e.assoc<0?"forward":"backward","lineboundary"),t.observer.readSelectionRange()
let c=t.observer.selectionRange
t.docView.posFromDOM(c.anchorNode,c.anchorOffset)!=e.from&&i.collapse(n,s)}posFromDOM(t,e){let i=this.tile.nearest(t)
if(!i)return 2&this.tile.dom.compareDocumentPosition(t)?0:this.view.state.doc.length
let n=i.posAtStart
if(!i.isComposite())return i.isText()?t==i.dom?n+e:n+(e?i.length:0):n
{let s
if(t==i.dom)s=i.dom.childNodes[e]
else{let n=0==_e(t)?0:0==e?-1:1
for(;;){let e=t.parentNode
if(e==i.dom)break
0==n&&e.firstChild!=e.lastChild&&(n=t==e.firstChild?-1:1),t=e}s=n<0?t:t.nextSibling}if(s==i.dom.firstChild)return n
for(;s&&!on.get(s);)s=s.nextSibling
if(!s)return n+i.length
for(let t=0,e=n;;t++){let n=i.children[t]
if(n.dom==s)return e
e+=n.length+n.breakAfter}}}domAtPos(t,e){let{tile:i,offset:n}=this.tile.resolveBlock(t,e)
return i.isWidget()?i.domPosFor(t,e):i.domIn(n,e)}inlineDOMNearPos(t,e){let i,n,s=-1,o=!1,r=-1,l=!1
return this.tile.blockTiles((e,a)=>{if(e.isWidget()){if(32&e.flags&&a>=t)return!0
16&e.flags&&(o=!0)}else{let h=a+e.length
if(a<=t&&(i=e,s=t-a,o=h<t),h>=t&&!n&&(n=e,r=t-a,l=a>t),a>t&&n)return!0}}),i||n?(o&&n?i=null:l&&i&&(n=null),i&&e<0||!n?i.domIn(s,e):n.domIn(r,e)):this.domAtPos(t,e)}coordsAt(t,e){let{tile:i,offset:n}=this.tile.resolveBlock(t,e)
return i.isWidget()?i.widget instanceof Ln?null:i.coordsInWidget(n,e,!0):i.coordsIn(n,e)}lineAt(t,e){let{tile:i}=this.tile.resolveBlock(t,e)
return i.isLine()?i:null}coordsForChar(t){let{tile:e,offset:i}=this.tile.resolveBlock(t,1)
return e.isLine()?function t(e,i){if(e.isComposite())for(let n of e.children){if(n.length>=i){let e=t(n,i)
if(e)return e}if((i-=n.length)<0)break}else if(e.isText()&&i<e.length){let t=T(e.text,i)
if(t==i)return null
let n=Qe(e.dom,i,t).getClientRects()
for(let e=0;e<n.length;e++){let t=n[e]
if(e==n.length-1||t.top<t.bottom&&t.left<t.right)return t}}return null}(e,i):null}measureVisibleLineHeights(t){let e=[],{from:i,to:n}=t,s=this.view.contentDOM.clientWidth,o=s>Math.max(this.view.scrollDOM.clientWidth,this.minWidth)+1,r=-1,l=this.view.textDirection==si.LTR,a=0,h=(t,c,u)=>{for(let d=0;d<t.children.length&&!(c>n);d++){let n=t.children[d],f=c+n.length,p=n.dom.getBoundingClientRect(),{height:m}=p
if(u&&!d&&(a+=p.top-u.top),n instanceof hn)f>i&&h(n,c,p)
else if(c>=i&&(a>0&&e.push(-a),e.push(m+a),a=0,o)){let t=n.dom.lastChild,e=t?He(t):[]
if(e.length){let t=e[e.length-1],i=l?t.right-p.left:p.right-t.left
i>r&&(r=i,this.minWidth=s,this.minWidthFrom=c,this.minWidthTo=f)}}u&&d==t.children.length-1&&(a+=u.bottom-p.bottom),c=f+n.breakAfter}}
return h(this.tile,0,null),e}textDirectionAt(t){let{tile:e}=this.tile.resolveBlock(t,1)
return"rtl"==getComputedStyle(e.dom).direction?si.RTL:si.LTR}measureTextSize(){let t=this.tile.blockTiles(t=>{if(t.isLine()&&t.children.length&&t.length<=20){let e,i=0
for(let n of t.children){if(!n.isText()||/[^ -~]/.test(n.text))return
let t=He(n.dom)
if(1!=t.length)return
i+=t[0].width,e=t[0].height}if(i)return{lineHeight:t.dom.getBoundingClientRect().height,charWidth:i/t.length,textHeight:e}}})
if(t)return t
let e,i,n,s=document.createElement("div")
return s.className="cm-line",s.style.width="99999px",s.style.position="absolute",s.textContent="abc def ghi jkl mno pqr stu",this.view.observer.ignore(()=>{this.tile.dom.appendChild(s)
let t=He(s.firstChild)[0]
e=s.getBoundingClientRect().height,i=t&&t.width?t.width/27:7,n=t&&t.height?t.height:e,s.remove()}),{lineHeight:e,charWidth:i,textHeight:n}}computeBlockGapDeco(){let t=[],e=this.view.viewState
for(let i=0,n=0;;n++){let s=n==e.viewports.length?null:e.viewports[n],o=s?s.from-1:this.view.state.doc.length
if(o>i){let n=(e.lineBlockAt(o).bottom-e.lineBlockAt(i).top)/this.view.scaleY
t.push(Oe.replace({widget:new Ln(n),block:!0,inclusive:!0,isBlockGap:!0}).range(i,o))}if(!s)break
i=s.to+1}return Oe.set(t)}updateDeco(){let t=1,e=this.view.state.facet($i).map(e=>(this.dynamicDecorationMap[t++]="function"==typeof e)?e(this.view):e),i=!1,n=this.view.state.facet(Yi).map((t,e)=>{let n="function"==typeof t
return n&&(i=!0),n?t(this.view):t})
for(n.length&&(this.dynamicDecorationMap[t++]=i,e.push(Pt.join(n))),this.decorations=[this.editContextFormatting,...e,this.computeBlockGapDeco(),this.view.viewState.lineGapDeco];t<this.decorations.length;)this.dynamicDecorationMap[t++]=!1
this.blockWrappers=this.view.state.facet(Ui).map(t=>"function"==typeof t?t(this.view):t)}scrollIntoView(t){var e
if(t.isSnapshot){let e=this.view.viewState.lineBlockAt(t.range.head)
return this.view.scrollDOM.scrollTop=e.top-t.yMargin,void(this.view.scrollDOM.scrollLeft=t.xMargin)}for(let h of this.view.state.facet(Ii))try{if(h(this.view,t.range,t))return!0}catch(t){Hi(this.view.state,t,"scroll handler")}let i,{range:n}=t,s=this.coordsAt(n.head,null!==(e=n.assoc)&&void 0!==e?e:n.empty?0:n.head>n.anchor?-1:1)
if(!s)return
!n.empty&&(i=this.coordsAt(n.anchor,n.anchor>n.head?-1:1))&&(s={left:Math.min(s.left,i.left),top:Math.min(s.top,i.top),right:Math.max(s.right,i.right),bottom:Math.max(s.bottom,i.bottom)})
let o=Zi(this.view),r={left:s.left-o.left,top:s.top-o.top,right:s.right+o.right,bottom:s.bottom+o.bottom},{offsetWidth:l,offsetHeight:a}=this.view.scrollDOM
if(function(t,e,i,n,s,o,r,l){let a=t.ownerDocument,h=a.defaultView||window
for(let c=t,u=!1;c&&!u;)if(1==c.nodeType){let t,d=c==a.body,f=1,p=1
if(d)t=je(h)
else{if(/^(fixed|sticky)$/.test(getComputedStyle(c).position)&&(u=!0),c.scrollHeight<=c.clientHeight&&c.scrollWidth<=c.clientWidth){c=c.assignedSlot||c.parentNode
continue}let e=c.getBoundingClientRect();({scaleX:f,scaleY:p}=$e(c,e)),t={left:e.left,right:e.left+c.clientWidth*f,top:e.top,bottom:e.top+c.clientHeight*p}}let m=0,g=0
if("nearest"==s)e.top<t.top+r?(g=e.top-(t.top+r),i>0&&e.bottom>t.bottom+g&&(g=e.bottom-t.bottom+r)):e.bottom>t.bottom-r&&(g=e.bottom-t.bottom+r,i<0&&e.top-g<t.top&&(g=e.top-(t.top+r)))
else{let n=e.bottom-e.top,o=t.bottom-t.top
g=("center"==s&&n<=o?e.top+n/2-o/2:"start"==s||"center"==s&&i<0?e.top-r:e.bottom-o+r)-t.top}if("nearest"==n?e.left<t.left+o?(m=e.left-(t.left+o),i>0&&e.right>t.right+m&&(m=e.right-t.right+o)):e.right>t.right-o&&(m=e.right-t.right+o,i<0&&e.left<t.left+m&&(m=e.left-(t.left+o))):m=("center"==n?e.left+(e.right-e.left)/2-(t.right-t.left)/2:"start"==n==l?e.left-o:e.right-(t.right-t.left)+o)-t.left,m||g)if(d)h.scrollBy(m,g)
else{let t=0,i=0
if(g){let t=c.scrollTop
c.scrollTop+=g/p,i=(c.scrollTop-t)*p}if(m){let e=c.scrollLeft
c.scrollLeft+=m/f,t=(c.scrollLeft-e)*f}e={left:e.left-t,top:e.top-i,right:e.right-t,bottom:e.bottom-i},t&&Math.abs(t-m)<1&&(n="nearest"),i&&Math.abs(i-g)<1&&(s="nearest")}if(d)break;(e.top<t.top||e.bottom>t.bottom||e.left<t.left||e.right>t.right)&&(e={left:Math.max(e.left,t.left),right:Math.min(e.right,t.right),top:Math.max(e.top,t.top),bottom:Math.min(e.bottom,t.bottom)}),c=c.assignedSlot||c.parentNode}else{if(11!=c.nodeType)break
c=c.host}}(this.view.scrollDOM,r,n.head<n.anchor?-1:1,t.x,t.y,Math.max(Math.min(t.xMargin,l),-l),Math.max(Math.min(t.yMargin,a),-a),this.view.textDirection==si.LTR),window.visualViewport&&window.innerHeight-window.visualViewport.height>1&&(s.top>window.pageYOffset+window.visualViewport.offsetTop+window.visualViewport.height||s.bottom<window.pageYOffset+window.visualViewport.offsetTop)){let t=this.view.docView.lineAt(n.head,1)
t&&t.dom.scrollIntoView({block:"nearest"})}}lineHasWidget(t){let e=t=>t.isWidget()||t.children.some(e)
return e(this.tile.resolveBlock(t,1).tile)}destroy(){Dn(this.tile)}}function Dn(t,e){let i=null==e?void 0:e.get(t)
if(1!=i){null==i&&t.destroy()
for(let i of t.children)Dn(i,e)}}function En(t,e){let i=t.observer.selectionRange
if(!i.focusNode)return null
let n=ei(i.focusNode,i.focusOffset),s=ii(i.focusNode,i.focusOffset),o=n||s
if(s&&n&&s.node!=n.node){let e=on.get(s.node)
if(!e||e.isText()&&e.text!=s.node.nodeValue)o=s
else if(t.docView.lastCompositionAfterCursor){let t=on.get(n.node)
!t||t.isText()&&t.text!=n.node.nodeValue||(o=s)}}if(t.docView.lastCompositionAfterCursor=o!=n,!o)return null
let r=e-o.offset
return{from:r,to:r+o.node.nodeValue.length,node:o.node}}let Bn=class{constructor(){this.changes=[]}compareRange(t,e){Le(t,e,this.changes)}comparePoint(t,e){Le(t,e,this.changes)}boundChange(t){Le(t,t,this.changes)}}
class Rn{constructor(){this.changes=[]}compareRange(t,e){Le(t,e,this.changes)}comparePoint(){}boundChange(t){Le(t,t,this.changes)}}class Ln extends Ae{constructor(t){super(),this.height=t}toDOM(){let t=document.createElement("div")
return t.className="cm-gap",this.updateDOM(t),t}eq(t){return t.height==this.height}updateDOM(t){return t.style.height=this.height+"px",!0}get editable(){return!0}get estimatedHeight(){return this.height}ignoreEvent(){return!1}}function In(t,e,i){let n=t.lineBlockAt(e)
if(Array.isArray(n.type)){let t
for(let s of n.type){if(s.from>e)break
if(!(s.to<e)){if(s.from<e&&s.to>e)return s
t&&(s.type!=Te.Text||t.type==s.type&&!(i<0?s.from<e:s.to>e))||(t=s)}}return t||n}return n}function Pn(t,e,i,n){let s=t.state.doc.lineAt(e.head),o=t.bidiSpans(s),r=t.textDirectionAt(s.from)
for(let l=e,a=null;;){let e=xi(s,o,r,l,i),h=yi
if(!e){if(s.number==(i?t.state.doc.lines:1))return l
h="\n",s=t.state.doc.line(s.number+(i?1:-1)),o=t.bidiSpans(s),e=t.visualLineSide(s,!i)}if(a){if(!a(h))return l}else{if(!n)return e
a=n(h)}l=e}}function Nn(t,e,i){for(;;){let n=0
for(let s of t)s.between(e-1,e+1,(t,s,o)=>{if(e>t&&e<s){let o=n||i||(e-t<s-e?-1:1)
e=o<0?t:s,n=o}})
if(!n)return e}}function Wn(t,e){let i=null
for(let n=0;n<e.ranges.length;n++){let s=e.ranges[n],o=null
if(s.empty){let e=Nn(t,s.from,0)
e!=s.from&&(o=q.cursor(e,-1))}else{let e=Nn(t,s.from,-1),i=Nn(t,s.to,1)
e==s.from&&i==s.to||(o=q.range(s.from==s.anchor?e:i,s.from==s.head?e:i))}o&&(i||(i=e.ranges.slice()),i[n]=o)}return i?q.create(i,e.mainIndex):e}function Hn(t,e,i){let n=Nn(t.state.facet(Gi).map(e=>e(t)),i.from,e.head>i.from?-1:1)
return n==i.from?i:q.cursor(n,n<i.from?1:-1)}class Vn{constructor(t,e){this.pos=t,this.assoc=e}}function Fn(t,e,i,n){let s,o=t.contentDOM.getBoundingClientRect(),r=o.top+t.viewState.paddingTop,{x:l,y:a}=e,h=a-r
for(;;){if(h<0)return new Vn(0,1)
if(h>t.viewState.docHeight)return new Vn(t.state.doc.length,-1)
if(s=t.elementAtHeight(h),null==n)break
if(s.type==Te.Text){if(n<0?s.to<t.viewport.from:s.from>t.viewport.to)break
let e=t.docView.coordsAt(n<0?s.from:s.to,n>0?-1:1)
if(e&&(n<0?e.top<=h+r:e.bottom>=h+r))break}let e=t.viewState.heightOracle.textHeight/2
h=n>0?s.bottom+e:s.top-e}if(t.viewport.from>=s.to||t.viewport.to<=s.from){if(i)return null
if(s.type==Te.Text){let e=function(t,e,i,n,s){let o=Math.round((n-e.left)*t.defaultCharacterWidth)
if(t.lineWrapping&&i.height>1.5*t.defaultLineHeight){let e=t.viewState.heightOracle.textHeight
o+=Math.floor((s-i.top-.5*(t.defaultLineHeight-e))/e)*t.viewState.heightOracle.lineLength}let r=t.state.sliceDoc(i.from,i.to)
return i.from+Yt(r,o,t.state.tabSize)}(t,o,s,l,a)
return new Vn(e,e==s.from?1:-1)}}if(s.type!=Te.Text)return h<(s.top+s.bottom)/2?new Vn(s.from,1):new Vn(s.to,-1)
let c=t.docView.lineAt(s.from,2)
return c&&c.length==s.length||(c=t.docView.lineAt(s.from,-2)),new zn(t,l,a,t.textDirectionAt(s.from)).scanTile(c,s.from)}class zn{constructor(t,e,i,n){this.view=t,this.x=e,this.y=i,this.baseDir=n,this.line=null,this.spans=null}bidiSpansAt(t){return(!this.line||this.line.from>t||this.line.to<t)&&(this.line=this.view.state.doc.lineAt(t),this.spans=this.view.bidiSpans(this.line)),this}baseDirAt(t,e){let{line:i,spans:n}=this.bidiSpansAt(t)
return n[pi.find(n,t-i.from,-1,e)].level==this.baseDir}dirAt(t,e){let{line:i,spans:n}=this.bidiSpansAt(t)
return n[pi.find(n,t-i.from,-1,e)].dir}bidiIn(t,e){let{spans:i,line:n}=this.bidiSpansAt(t)
return i.length>1||i.length&&(i[0].level!=this.baseDir||i[0].to+n.from<e)}scan(t,e,i=!1){let n,s,o,r=0,l=t.length-1,a=new Set,h=this.bidiIn(t[0],t[l]),c=-1,u=1e9
t:for(;r<l;){let i=l-r,d=r+l>>1
e:if(a.has(d)){let t=r+Math.floor(Math.random()*i)
for(let e=0;e<i;e++){if(!a.has(t)){d=t
break e}t++,t==l&&(t=r)}break t}a.add(d)
let f=e(d)
if(f)for(let e=0;e<f.length;e++){let i=f[e],a=0
if(!(0==i.width&&f.length>1)){if(i.bottom<this.y)(!n||n.bottom<i.bottom)&&(n=i),a=1
else if(i.top>this.y)(!s||s.top>i.top)&&(s=i),a=-1
else{let t=i.left>this.x?this.x-i.left:i.right<this.x?this.x-i.right:0,e=Math.abs(t)
e<u&&(c=d,u=e,o=i),t&&(a=t<0==(this.baseDir==si.LTR)?-1:1)}-1!=a||h&&!this.baseDirAt(t[d],1)?1!=a||h&&!this.baseDirAt(t[d+1],-1)||(r=d+1):l=d}}}if(!o){let i=n&&(!s||this.y-n.bottom<s.top-this.y)?n:s
return this.y=(i.top+i.bottom)/2,this.scan(t,e,!0)}if(u&&!i){let{top:i,bottom:r}=o
if(n&&n.bottom>(i+i+r)/3)return this.y=n.bottom-1,this.scan(t,e,!0)
if(s&&s.top<(i+r+r)/3)return this.y=s.top+1,this.scan(t,e,!0)}let d=(h?this.dirAt(t[c],1):this.baseDir)==si.LTR
return{i:c,after:this.x>(o.left+o.right)/2==d}}scanText(t,e){let i=[]
for(let s=0;s<t.length;s=T(t.text,s))i.push(e+s)
i.push(e+t.length)
let n=this.scan(i,n=>{let s=i[n]-e,o=i[n+1]-e
return Qe(t.dom,s,o).getClientRects()})
return n.after?new Vn(i[n.i+1],-1):new Vn(i[n.i],1)}scanTile(t,e){if(!t.length)return new Vn(e,1)
if(1==t.children.length){let i=t.children[0]
if(i.isText())return this.scanText(i,e)
if(i.isComposite())return this.scanTile(i,e)}let i=[e]
for(let r=0,l=e;r<t.children.length;r++)i.push(l+=t.children[r].length)
let n=this.scan(i,e=>{let i=t.children[e]
return 48&i.flags?null:(1==i.dom.nodeType?i.dom:Qe(i.dom,0,i.length)).getClientRects()}),s=t.children[n.i],o=i[n.i]
return s.isText()?this.scanText(s,o):s.isComposite()?this.scanTile(s,o):n.after?new Vn(i[n.i+1],-1):new Vn(o,1)}}const qn="￿"
class _n{constructor(t,e){this.points=t,this.view=e,this.text="",this.lineSeparator=e.state.facet(Ot.lineSeparator)}append(t){this.text+=t}lineBreak(){this.text+=qn}readRange(t,e){if(!t)return this
let i=t.parentNode
for(let n=t;;){this.findPointBefore(i,n)
let t=this.text.length
this.readNode(n)
let s=on.get(n),o=n.nextSibling
if(o==e){(null==s?void 0:s.breakAfter)&&!o&&i!=this.view.contentDOM&&this.lineBreak()
break}let r=on.get(o);(s&&r?s.breakAfter:(s?s.breakAfter:ze(n))||ze(o)&&("BR"!=n.nodeName||(null==s?void 0:s.isWidget()))&&this.text.length>t)&&!jn(o,e)&&this.lineBreak(),n=o}return this.findPointBefore(i,e),this}readTextNode(t){let e=t.nodeValue
for(let i of this.points)i.node==t&&(i.pos=this.text.length+Math.min(i.offset,e.length))
for(let i=0,n=this.lineSeparator?null:/\r\n?|\n/g;;){let s,o=-1,r=1
if(this.lineSeparator?(o=e.indexOf(this.lineSeparator,i),r=this.lineSeparator.length):(s=n.exec(e))&&(o=s.index,r=s[0].length),this.append(e.slice(i,o<0?e.length:o)),o<0)break
if(this.lineBreak(),r>1)for(let e of this.points)e.node==t&&e.pos>this.text.length&&(e.pos-=r-1)
i=o+r}}readNode(t){let e=on.get(t),i=e&&e.overrideDOMText
if(null!=i){this.findPointInside(t,i.length)
for(let t=i.iter();!t.next().done;)t.lineBreak?this.lineBreak():this.append(t.value)}else 3==t.nodeType?this.readTextNode(t):"BR"==t.nodeName?t.nextSibling&&this.lineBreak():1==t.nodeType&&this.readRange(t.firstChild,null)}findPointBefore(t,e){for(let i of this.points)i.node==t&&t.childNodes[i.offset]==e&&(i.pos=this.text.length)}findPointInside(t,e){for(let i of this.points)(3==t.nodeType?i.node==t:t.contains(i.node))&&(i.pos=this.text.length+(Kn(t,i.node,i.offset)?e:0))}}function Kn(t,e,i){for(;;){if(!e||i<_e(e))return!1
if(e==t)return!0
i=Fe(e)+1,e=e.parentNode}}function jn(t,e){let i
for(;t!=e&&t;t=t.nextSibling){let e=on.get(t)
if(!(null==e?void 0:e.isWidget()))return!1
e&&(i||(i=[])).push(e)}if(i)for(let n of i){let t=n.overrideDOMText
if(null==t?void 0:t.length)return!1}return!0}class $n{constructor(t,e){this.node=t,this.offset=e,this.pos=-1}}class Un{constructor(t,e,i,n){this.typeOver=n,this.bounds=null,this.text="",this.domChanged=e>-1
let{impreciseHead:s,impreciseAnchor:o}=t.docView,r=t.state.selection
if(t.state.readOnly&&e>-1)this.newSel=null
else if(e>-1&&(this.bounds=Yn(t.docView.tile,e,i,0))){let e=s||o?[]:function(t){let e=[]
if(t.root.activeElement!=t.contentDOM)return e
let{anchorNode:i,anchorOffset:n,focusNode:s,focusOffset:o}=t.observer.selectionRange
return i&&(e.push(new $n(i,n)),s==i&&o==n||e.push(new $n(s,o))),e}(t),i=new _n(e,t)
i.readRange(this.bounds.startDOM,this.bounds.endDOM),this.text=i.text,this.newSel=function(t,e){if(0==t.length)return null
let i=t[0].pos,n=2==t.length?t[1].pos:i
return i>-1&&n>-1?q.single(i+e,n+e):null}(e,this.bounds.from)}else{let e=t.observer.selectionRange,i=s&&s.node==e.focusNode&&s.offset==e.focusOffset||!Ne(t.contentDOM,e.focusNode)?r.main.head:t.docView.posFromDOM(e.focusNode,e.focusOffset),n=o&&o.node==e.anchorNode&&o.offset==e.anchorOffset||!Ne(t.contentDOM,e.anchorNode)?r.main.anchor:t.docView.posFromDOM(e.anchorNode,e.anchorOffset),l=t.viewport
if((ye.ios||ye.chrome)&&r.main.empty&&i!=n&&(l.from>0||l.to<t.state.doc.length)){let e=Math.min(i,n),s=Math.max(i,n),o=l.from-e,r=l.to-s
0!=o&&1!=o&&0!=e||0!=r&&-1!=r&&s!=t.state.doc.length||(i=0,n=t.state.doc.length)}if(t.inputState.composing>-1&&r.ranges.length>1)this.newSel=r.replaceRange(q.range(n,i))
else if(t.lineWrapping&&n==i&&(!r.main.empty||r.main.head!=i)&&t.inputState.lastTouchTime>Date.now()-100){let e=t.coordsAtPos(i,-1),n=0
e&&(n=t.inputState.lastTouchY<=e.bottom?-1:1),this.newSel=q.create([q.cursor(i,n)])}else this.newSel=q.single(n,i)}}}function Yn(t,e,i,n){if(t.isComposite()){let s=-1,o=-1,r=-1,l=-1
for(let a=0,h=n,c=n;a<t.children.length;a++){let n=t.children[a],u=h+n.length
if(h<e&&u>i)return Yn(n,e,i,h)
if(u>=e&&-1==s&&(s=a,o=h),h>i&&n.dom.parentNode==t.dom){r=a,l=c
break}c=u,h=u+n.breakAfter}return{from:o,to:l<0?n+t.length:l,startDOM:(s?t.children[s-1].dom.nextSibling:null)||t.dom.firstChild,endDOM:r<t.children.length&&r>=0?t.children[r].dom:null}}return t.isText()?{from:n,to:n+t.length,startDOM:t.dom,endDOM:t.dom.nextSibling}:null}function Gn(t,e){let i,{newSel:n}=e,{state:s}=t,o=s.selection.main,r=t.inputState.lastKeyTime>Date.now()-100?t.inputState.lastKeyCode:-1
if(e.bounds){let{from:t,to:n}=e.bounds,l=o.from,a=null;(8===r||ye.android&&e.text.length<n-t)&&(l=o.to,a="end")
let h,c,u=s.doc.sliceString(t,n,qn)
!o.empty&&o.from>=t&&o.to<=n&&(e.typeOver||u!=e.text)&&u.slice(0,o.from-t)==e.text.slice(0,o.from-t)&&u.slice(o.to-t)==e.text.slice(h=e.text.length-(u.length-(o.to-t)))?i={from:o.from,to:o.to,insert:v.of(e.text.slice(o.from-t,h).split(qn))}:(c=Xn(u,e.text,l-t,a))&&(ye.chrome&&13==r&&c.toB==c.from+2&&e.text.slice(c.from,c.toB)==qn+qn&&c.toB--,i={from:t+c.from,to:t+c.toA,insert:v.of(e.text.slice(c.from,c.toB).split(qn))})}else n&&(!t.hasFocus&&s.facet(Vi)||Qn(n,o))&&(n=null)
if(!i&&!n)return!1
if((ye.mac||ye.android)&&i&&i.from==i.to&&i.from==o.head-1&&/^\. ?$/.test(i.insert.toString())&&"off"==t.contentDOM.getAttribute("autocorrect")?(n&&2==i.insert.length&&(n=q.single(n.main.anchor-1,n.main.head-1)),i={from:i.from,to:i.to,insert:v.of([i.insert.toString().replace("."," ")])}):s.doc.lineAt(o.from).to<o.to&&t.docView.lineHasWidget(o.to)&&t.inputState.insertingTextAt>Date.now()-50?i={from:o.from,to:o.to,insert:s.toText(t.inputState.insertingText)}:ye.chrome&&i&&i.from==i.to&&i.from==o.head&&"\n "==i.insert.toString()&&t.lineWrapping&&(n&&(n=q.single(n.main.anchor-1,n.main.head-1)),i={from:o.from,to:o.to,insert:v.of([" "])}),i)return Jn(t,i,n,r)
if(n&&!Qn(n,o)){let e=!1,i="select"
return t.inputState.lastSelectionTime>Date.now()-50&&("select"==t.inputState.lastSelectionOrigin&&(e=!0),i=t.inputState.lastSelectionOrigin,"select.pointer"==i&&(n=Wn(s.facet(Gi).map(e=>e(t)),n))),t.dispatch({selection:n,scrollIntoView:e,userEvent:i}),!0}return!1}function Jn(t,e,i,n=-1){if(ye.ios&&t.inputState.flushIOSKey(e))return!0
let s=t.state.selection.main
if(ye.android&&(e.to==s.to&&(e.from==s.from||e.from==s.from-1&&" "==t.state.sliceDoc(e.from,s.from))&&1==e.insert.length&&2==e.insert.lines&&Ze(t.contentDOM,"Enter",13)||(e.from==s.from-1&&e.to==s.to&&0==e.insert.length||8==n&&e.insert.length<e.to-e.from&&e.to>s.head)&&Ze(t.contentDOM,"Backspace",8)||e.from==s.from&&e.to==s.to+1&&0==e.insert.length&&Ze(t.contentDOM,"Delete",46)))return!0
let o,r=e.insert.toString()
t.inputState.composing>=0&&t.inputState.composing++
let l=()=>o||(o=function(t,e,i){let n,s=t.state,o=s.selection.main,r=-1
if(e.from==e.to&&e.from<o.from||e.from>o.to){let i=e.from<o.from?-1:1,n=i<0?o.from:o.to,l=Nn(s.facet(Gi).map(e=>e(t)),n,i)
e.from==l&&(r=l)}if(r>-1)n={changes:e,selection:q.cursor(e.from+e.insert.length,-1)}
else if(e.from>=o.from&&e.to<=o.to&&e.to-e.from>=(o.to-o.from)/3&&(!i||i.main.empty&&i.main.from==e.from+e.insert.length)&&t.inputState.composing<0){let i=o.from<e.from?s.sliceDoc(o.from,e.from):"",r=o.to>e.to?s.sliceDoc(e.to,o.to):""
n=s.replaceSelection(t.state.toText(i+e.insert.sliceString(0,void 0,t.state.lineBreak)+r))}else{let r=s.changes(e),l=i&&i.main.to<=r.newLength?i.main:void 0
if(s.selection.ranges.length>1&&(t.inputState.composing>=0||t.inputState.compositionPendingChange)&&e.to<=o.to+10&&e.to>=o.to-10){let a,h=t.state.sliceDoc(e.from,e.to),c=i&&En(t,i.main.head)
if(c){let t=e.insert.length-(e.to-e.from)
a={from:c.from,to:c.to-t}}else a=t.state.doc.lineAt(o.head)
let u=o.to-e.to
n=s.changeByRange(i=>{if(i.from==o.from&&i.to==o.to)return{changes:r,range:l||i.map(r)}
let n=i.to-u,c=n-h.length
if(t.state.sliceDoc(c,n)!=h||n>=a.from&&c<=a.to)return{range:i}
let d=s.changes({from:c,to:n,insert:e.insert}),f=i.to-o.to
return{changes:d,range:l?q.range(Math.max(0,l.anchor+f),Math.max(0,l.head+f)):i.map(d)}})}else n={changes:r,selection:l&&s.selection.replaceRange(l)}}let l="input.type"
return(t.composing||t.inputState.compositionPendingChange&&t.inputState.compositionEndedAt>Date.now()-50)&&(t.inputState.compositionPendingChange=!1,l+=".compose",t.inputState.compositionFirstChange&&(l+=".start",t.inputState.compositionFirstChange=!1)),s.update(n,{userEvent:l,scrollIntoView:!0})}(t,e,i))
return t.state.facet(Oi).some(i=>i(t,e.from,e.to,r,l))||t.dispatch(l()),!0}function Xn(t,e,i,n){let s=Math.min(t.length,e.length),o=0
for(;o<s&&t.charCodeAt(o)==e.charCodeAt(o);)o++
if(o==s&&t.length==e.length)return null
let r=t.length,l=e.length
for(;r>0&&l>0&&t.charCodeAt(r-1)==e.charCodeAt(l-1);)r--,l--
return"end"==n&&(i-=r+Math.max(0,o-Math.min(r,l))-o),r<o&&t.length<e.length?(o-=i<=o&&i>=r?o-i:0,l=o+(l-r),r=o):l<o&&(o-=i<=o&&i>=l?o-i:0,r=o+(r-l),l=o),{from:o,toA:r,toB:l}}function Qn(t,e){return e.head==t.main.head&&e.anchor==t.main.anchor}class Zn{setSelectionOrigin(t){this.lastSelectionOrigin=t,this.lastSelectionTime=Date.now()}constructor(t){this.view=t,this.lastKeyCode=0,this.lastKeyTime=0,this.lastTouchTime=0,this.lastTouchX=0,this.lastTouchY=0,this.lastFocusTime=0,this.lastScrollTop=0,this.lastScrollLeft=0,this.lastWheelEvent=0,this.pendingIOSKey=void 0,this.tabFocusMode=-1,this.lastSelectionOrigin=null,this.lastSelectionTime=0,this.lastContextMenu=0,this.scrollHandlers=[],this.handlers=Object.create(null),this.composing=-1,this.compositionFirstChange=null,this.compositionEndedAt=0,this.compositionPendingKey=!1,this.compositionPendingChange=!1,this.insertingText="",this.insertingTextAt=0,this.mouseSelection=null,this.draggedContent=null,this.handleEvent=this.handleEvent.bind(this),this.notifiedFocused=t.hasFocus,ye.safari&&t.contentDOM.addEventListener("input",()=>null),ye.gecko&&function(t){ks.has(t)||(ks.add(t),t.addEventListener("copy",()=>{}),t.addEventListener("cut",()=>{}))}(t.contentDOM.ownerDocument)}handleEvent(t){(function(t,e){if(!e.bubbles)return!0
if(e.defaultPrevented)return!1
for(let i,n=e.target;n!=t.contentDOM;n=n.parentNode)if(!n||11==n.nodeType||(i=on.get(n))&&i.isWidget()&&!i.isHidden&&i.widget.ignoreEvent(e))return!1
return!0})(this.view,t)&&!this.ignoreDuringComposition(t)&&("keydown"==t.type&&this.keydown(t)||(0!=this.view.updateState?Promise.resolve().then(()=>this.runHandlers(t.type,t)):this.runHandlers(t.type,t)))}runHandlers(t,e){let i=this.handlers[t]
if(i){for(let t of i.observers)t(this.view,e)
for(let t of i.handlers){if(e.defaultPrevented)break
if(t(this.view,e)){e.preventDefault()
break}}}}ensureHandlers(t){let e=function(t){let e=Object.create(null)
function i(t){return e[t]||(e[t]={observers:[],handlers:[]})}for(let n of t){let t=n.spec,e=t&&t.plugin.domEventHandlers,s=t&&t.plugin.domEventObservers
if(e)for(let o in e){let t=e[o]
t&&i(o).handlers.push(ts(n.value,t))}if(s)for(let o in s){let t=s[o]
t&&i(o).observers.push(ts(n.value,t))}}for(let n in rs)i(n).handlers.push(rs[n])
for(let n in ls)i(n).observers.push(ls[n])
return e}(t),i=this.handlers,n=this.view.contentDOM
for(let s in e)if("scroll"!=s){let t=!e[s].handlers.length,o=i[s]
o&&t!=!o.handlers.length&&(n.removeEventListener(s,this.handleEvent),o=null),o||n.addEventListener(s,this.handleEvent,{passive:t})}for(let s in i)"scroll"==s||e[s]||n.removeEventListener(s,this.handleEvent)
this.handlers=e}keydown(t){if(this.lastKeyCode=t.keyCode,this.lastKeyTime=Date.now(),9==t.keyCode&&this.tabFocusMode>-1&&(!this.tabFocusMode||Date.now()<=this.tabFocusMode))return!0
if(this.tabFocusMode>0&&27!=t.keyCode&&ns.indexOf(t.keyCode)<0&&(this.tabFocusMode=-1),ye.android&&ye.chrome&&!t.synthetic&&(13==t.keyCode||8==t.keyCode))return this.view.observer.delayAndroidKey(t.key,t.keyCode),!0
let e
return!ye.ios||t.synthetic||t.altKey||t.metaKey||t.shiftKey||!((e=es.find(e=>e.keyCode==t.keyCode))&&!t.ctrlKey||is.indexOf(t.key)>-1&&t.ctrlKey)?(229!=t.keyCode&&this.view.observer.forceFlush(),!1):(this.pendingIOSKey=e||t,setTimeout(()=>this.flushIOSKey(),250),!0)}flushIOSKey(t){let e=this.pendingIOSKey
return!!e&&!("Enter"==e.key&&t&&t.from<t.to&&/^\S+$/.test(t.insert.toString()))&&(this.pendingIOSKey=void 0,Ze(this.view.contentDOM,e.key,e.keyCode,e instanceof KeyboardEvent?e:void 0))}ignoreDuringComposition(t){return!(!/^key/.test(t.type)||t.synthetic)&&(this.composing>0||!!(ye.safari&&!ye.ios&&this.compositionPendingKey&&Date.now()-this.compositionEndedAt<100)&&(this.compositionPendingKey=!1,!0))}startMouseSelection(t){this.mouseSelection&&this.mouseSelection.destroy(),this.mouseSelection=t}update(t){this.view.observer.update(t),this.mouseSelection&&this.mouseSelection.update(t),this.draggedContent&&t.docChanged&&(this.draggedContent=this.draggedContent.map(t.changes)),t.transactions.length&&(this.lastKeyCode=this.lastSelectionTime=0)}destroy(){this.mouseSelection&&this.mouseSelection.destroy()}}function ts(t,e){return(i,n)=>{try{return e.call(t,n,i)}catch(t){Hi(i.state,t)}}}const es=[{key:"Backspace",keyCode:8,inputType:"deleteContentBackward"},{key:"Enter",keyCode:13,inputType:"insertParagraph"},{key:"Enter",keyCode:13,inputType:"insertLineBreak"},{key:"Delete",keyCode:46,inputType:"deleteContentForward"}],is="dthko",ns=[16,17,18,20,91,92,224,225]
function ss(t){return.7*Math.max(0,t)+8}class os{constructor(t,e,i,n){this.view=t,this.startEvent=e,this.style=i,this.mustSelect=n,this.scrollSpeed={x:0,y:0},this.scrolling=-1,this.lastEvent=e,this.scrollParents=Ue(t.contentDOM),this.atoms=t.state.facet(Gi).map(e=>e(t))
let s=t.contentDOM.ownerDocument
s.addEventListener("mousemove",this.move=this.move.bind(this)),s.addEventListener("mouseup",this.up=this.up.bind(this)),this.extend=e.shiftKey,this.multiple=t.state.facet(Ot.allowMultipleSelections)&&function(t,e){let i=t.state.facet(Si)
return i.length?i[0](e):ye.mac?e.metaKey:e.ctrlKey}(t,e),this.dragging=!(!function(t,e){let{main:i}=t.state.selection
if(i.empty)return!1
let n=Pe(t.root)
if(!n||0==n.rangeCount)return!0
let s=n.getRangeAt(0).getClientRects()
for(let o=0;o<s.length;o++){let t=s[o]
if(t.left<=e.clientX&&t.right>=e.clientX&&t.top<=e.clientY&&t.bottom>=e.clientY)return!0}return!1}(t,e)||1!=gs(e))&&null}start(t){!1===this.dragging&&this.select(t)}move(t){if(0==t.buttons)return this.destroy()
if(this.dragging||null==this.dragging&&(e=this.startEvent,i=t,Math.max(Math.abs(e.clientX-i.clientX),Math.abs(e.clientY-i.clientY))<10))return
var e,i
this.select(this.lastEvent=t)
let n=0,s=0,o=0,r=0,l=this.view.win.innerWidth,a=this.view.win.innerHeight
this.scrollParents.x&&({left:o,right:l}=this.scrollParents.x.getBoundingClientRect()),this.scrollParents.y&&({top:r,bottom:a}=this.scrollParents.y.getBoundingClientRect())
let h=Zi(this.view)
t.clientX-h.left<=o+6?n=-ss(o-t.clientX):t.clientX+h.right>=l-6&&(n=ss(t.clientX-l)),t.clientY-h.top<=r+6?s=-ss(r-t.clientY):t.clientY+h.bottom>=a-6&&(s=ss(t.clientY-a)),this.setScrollSpeed(n,s)}up(t){null==this.dragging&&this.select(this.lastEvent),this.dragging||t.preventDefault(),this.destroy()}destroy(){this.setScrollSpeed(0,0)
let t=this.view.contentDOM.ownerDocument
t.removeEventListener("mousemove",this.move),t.removeEventListener("mouseup",this.up),this.view.inputState.mouseSelection=this.view.inputState.draggedContent=null}setScrollSpeed(t,e){this.scrollSpeed={x:t,y:e},t||e?this.scrolling<0&&(this.scrolling=setInterval(()=>this.scroll(),50)):this.scrolling>-1&&(clearInterval(this.scrolling),this.scrolling=-1)}scroll(){let{x:t,y:e}=this.scrollSpeed
t&&this.scrollParents.x&&(this.scrollParents.x.scrollLeft+=t,t=0),e&&this.scrollParents.y&&(this.scrollParents.y.scrollTop+=e,e=0),(t||e)&&this.view.win.scrollBy(t,e),!1===this.dragging&&this.select(this.lastEvent)}select(t){let{view:e}=this,i=Wn(this.atoms,this.style.get(t,this.extend,this.multiple))
!this.mustSelect&&i.eq(e.state.selection,!1===this.dragging)||this.view.dispatch({selection:i,userEvent:"select.pointer"}),this.mustSelect=!1}update(t){t.transactions.some(t=>t.isUserEvent("input.type"))?this.destroy():this.style.update(t)&&setTimeout(()=>this.select(this.lastEvent),20)}}const rs=Object.create(null),ls=Object.create(null),as=ye.ie&&ye.ie_version<15||ye.ios&&ye.webkit_version<604
function hs(t,e,i){for(let n of t.facet(e))i=n(i,t)
return i}function cs(t,e){e=hs(t.state,Ei,e)
let i,{state:n}=t,s=1,o=n.toText(e),r=o.lines==n.selection.ranges.length
if(null!=ws&&n.selection.ranges.every(t=>t.empty)&&ws==o.toString()){let t=-1
i=n.changeByRange(i=>{let l=n.doc.lineAt(i.from)
if(l.from==t)return{range:i}
t=l.from
let a=n.toText((r?o.line(s++).text:e)+n.lineBreak)
return{changes:{from:l.from,insert:a},range:q.cursor(i.from+a.length)}})}else i=r?n.changeByRange(t=>{let e=o.line(s++)
return{changes:{from:t.from,to:t.to,insert:e.text},range:q.cursor(t.from+e.length)}}):n.replaceSelection(o)
t.dispatch(i,{userEvent:"input.paste",scrollIntoView:!0})}function us(t,e,i,n){if(1==n)return q.cursor(e,i)
if(2==n)return function(t,e,i=1){let n=t.charCategorizer(e),s=t.doc.lineAt(e),o=e-s.from
if(0==s.length)return q.cursor(e)
0==o?i=1:o==s.length&&(i=-1)
let r=o,l=o
i<0?r=T(s.text,o,!1):l=T(s.text,o)
let a=n(s.text.slice(r,l))
for(;r>0;){let t=T(s.text,r,!1)
if(n(s.text.slice(t,r))!=a)break
r=t}for(;l<s.length;){let t=T(s.text,l)
if(n(s.text.slice(l,t))!=a)break
l=t}return q.range(r+s.from,l+s.from)}(t.state,e,i)
{let n=t.docView.lineAt(e,i),s=t.state.doc.lineAt(n?n.posAtEnd:e),o=n?n.posAtStart:s.from,r=n?n.posAtEnd:s.to
return r<t.state.doc.length&&r==s.to&&r++,q.range(o,r)}}ls.scroll=t=>{t.inputState.lastScrollTop=t.scrollDOM.scrollTop,t.inputState.lastScrollLeft=t.scrollDOM.scrollLeft},ls.wheel=ls.mousewheel=t=>{t.inputState.lastWheelEvent=Date.now()},rs.keydown=(t,e)=>(t.inputState.setSelectionOrigin("select"),27==e.keyCode&&0!=t.inputState.tabFocusMode&&(t.inputState.tabFocusMode=Date.now()+2e3),!1),ls.touchstart=(t,e)=>{let i=t.inputState,n=e.targetTouches[0]
i.lastTouchTime=Date.now(),n&&(i.lastTouchX=n.clientX,i.lastTouchY=n.clientY),i.setSelectionOrigin("select.pointer")},ls.touchmove=t=>{t.inputState.setSelectionOrigin("select.pointer")},rs.mousedown=(t,e)=>{if(t.observer.flush(),t.inputState.lastTouchTime>Date.now()-2e3)return!1
let i=null
for(let n of t.state.facet(Mi))if(i=n(t,e),i)break
if(i||0!=e.button||(i=function(t,e){let i=t.posAndSideAtCoords({x:e.clientX,y:e.clientY},!1),n=gs(e),s=t.state.selection
return{update(t){t.docChanged&&(i.pos=t.changes.mapPos(i.pos),s=s.map(t.changes))},get(e,o,r){let l,a=t.posAndSideAtCoords({x:e.clientX,y:e.clientY},!1),h=us(t,a.pos,a.assoc,n)
if(i.pos!=a.pos&&!o){let e=us(t,i.pos,i.assoc,n),s=Math.min(e.from,h.from),o=Math.max(e.to,h.to)
h=s<h.from?q.range(s,o,h.assoc):q.range(o,s,h.assoc)}return o?s.replaceRange(s.main.extend(h.from,h.to,h.assoc)):r&&1==n&&s.ranges.length>1&&(l=function(t,e){for(let i=0;i<t.ranges.length;i++){let{from:n,to:s}=t.ranges[i]
if(n<=e&&s>=e)return q.create(t.ranges.slice(0,i).concat(t.ranges.slice(i+1)),t.mainIndex==i?0:t.mainIndex-(t.mainIndex>i?1:0))}return null}(s,a.pos))?l:r?s.addRange(h):q.create([h])}}}(t,e)),i){let n=!t.hasFocus
t.inputState.startMouseSelection(new os(t,e,i,n)),n&&t.observer.ignore(()=>{Xe(t.contentDOM)
let e=t.root.activeElement
e&&!e.contains(t.contentDOM)&&e.blur()})
let s=t.inputState.mouseSelection
if(s)return s.start(e),!1===s.dragging}else t.inputState.setSelectionOrigin("select.pointer")
return!1}
const ds=ye.ie&&ye.ie_version<=11
let fs=null,ps=0,ms=0
function gs(t){if(!ds)return t.detail
let e=fs,i=ms
return fs=t,ms=Date.now(),ps=!e||i>Date.now()-400&&Math.abs(e.clientX-t.clientX)<2&&Math.abs(e.clientY-t.clientY)<2?(ps+1)%3:1}function vs(t,e,i,n){if(!(i=hs(t.state,Ei,i)))return
let s=t.posAtCoords({x:e.clientX,y:e.clientY},!1),{draggedContent:o}=t.inputState,r=n&&o&&function(t,e){let i=t.state.facet(Ci)
return i.length?i[0](e):ye.mac?!e.altKey:!e.ctrlKey}(t,e)?{from:o.from,to:o.to}:null,l={from:s,insert:i},a=t.state.changes(r?[r,l]:l)
t.focus(),t.dispatch({changes:a,selection:{anchor:a.mapPos(s,-1),head:a.mapPos(s,1)},userEvent:r?"move.drop":"input.drop"}),t.inputState.draggedContent=null}rs.dragstart=(t,e)=>{let{selection:{main:i}}=t.state
if(e.target.draggable){let n=t.docView.tile.nearest(e.target)
if(n&&n.isWidget()){let t=n.posAtStart,e=t+n.length;(t>=i.to||e<=i.from)&&(i=q.range(t,e))}}let{inputState:n}=t
return n.mouseSelection&&(n.mouseSelection.dragging=!0),n.draggedContent=i,e.dataTransfer&&(e.dataTransfer.setData("Text",hs(t.state,Bi,t.state.sliceDoc(i.from,i.to))),e.dataTransfer.effectAllowed="copyMove"),!1},rs.dragend=t=>(t.inputState.draggedContent=null,!1),rs.drop=(t,e)=>{if(!e.dataTransfer)return!1
if(t.state.readOnly)return!0
let i=e.dataTransfer.files
if(i&&i.length){let n=Array(i.length),s=0,o=()=>{++s==i.length&&vs(t,e,n.filter(t=>null!=t).join(t.state.lineBreak),!1)}
for(let t=0;t<i.length;t++){let e=new FileReader
e.onerror=o,e.onload=()=>{/[\x00-\x08\x0e-\x1f]{2}/.test(e.result)||(n[t]=e.result),o()},e.readAsText(i[t])}return!0}{let i=e.dataTransfer.getData("Text")
if(i)return vs(t,e,i,!0),!0}return!1},rs.paste=(t,e)=>{if(t.state.readOnly)return!0
t.observer.flush()
let i=as?null:e.clipboardData
return i?(cs(t,i.getData("text/plain")||i.getData("text/uri-list")),!0):(function(t){let e=t.dom.parentNode
if(!e)return
let i=e.appendChild(document.createElement("textarea"))
i.style.cssText="position: fixed; left: -10000px; top: 10px",i.focus(),setTimeout(()=>{t.focus(),i.remove(),cs(t,i.value)},50)}(t),!1)}
let ws=null
rs.copy=rs.cut=(t,e)=>{if(!We(t.contentDOM,t.observer.selectionRange))return!1
let{text:i,ranges:n,linewise:s}=function(t){let e=[],i=[],n=!1
for(let s of t.selection.ranges)s.empty||(e.push(t.sliceDoc(s.from,s.to)),i.push(s))
if(!e.length){let s=-1
for(let{from:n}of t.selection.ranges){let o=t.doc.lineAt(n)
o.number>s&&(e.push(o.text),i.push({from:o.from,to:Math.min(t.doc.length,o.to+1)})),s=o.number}n=!0}return{text:hs(t,Bi,e.join(t.lineBreak)),ranges:i,linewise:n}}(t.state)
if(!i&&!s)return!1
ws=s?i:null,"cut"!=e.type||t.state.readOnly||t.dispatch({changes:n,scrollIntoView:!0,userEvent:"delete.cut"})
let o=as?null:e.clipboardData
return o?(o.clearData(),o.setData("text/plain",i),!0):(function(t,e){let i=t.dom.parentNode
if(!i)return
let n=i.appendChild(document.createElement("textarea"))
n.style.cssText="position: fixed; left: -10000px; top: 10px",n.value=e,n.focus(),n.selectionEnd=e.length,n.selectionStart=0,setTimeout(()=>{n.remove(),t.focus()},50)}(t,i),!1)}
const bs=pt.define()
function ys(t,e){let i=[]
for(let n of t.facet(Di)){let s=n(t,e)
s&&i.push(s)}return i.length?t.update({effects:i,annotations:bs.of(!0)}):null}function xs(t){setTimeout(()=>{let e=t.hasFocus
if(e!=t.inputState.notifiedFocused){let i=ys(t.state,e)
i?t.dispatch(i):t.update([])}},10)}ls.focus=t=>{t.inputState.lastFocusTime=Date.now(),t.scrollDOM.scrollTop||!t.inputState.lastScrollTop&&!t.inputState.lastScrollLeft||(t.scrollDOM.scrollTop=t.inputState.lastScrollTop,t.scrollDOM.scrollLeft=t.inputState.lastScrollLeft),xs(t)},ls.blur=t=>{t.observer.clearSelectionRange(),xs(t)},ls.compositionstart=ls.compositionupdate=t=>{t.observer.editContext||(null==t.inputState.compositionFirstChange&&(t.inputState.compositionFirstChange=!0),t.inputState.composing<0&&(t.inputState.composing=0))},ls.compositionend=t=>{t.observer.editContext||(t.inputState.composing=-1,t.inputState.compositionEndedAt=Date.now(),t.inputState.compositionPendingKey=!0,t.inputState.compositionPendingChange=t.observer.pendingRecords().length>0,t.inputState.compositionFirstChange=null,ye.chrome&&ye.android?t.observer.flushSoon():t.inputState.compositionPendingChange?Promise.resolve().then(()=>t.observer.flush()):setTimeout(()=>{t.inputState.composing<0&&t.docView.hasComposition&&t.update([])},50))},ls.contextmenu=t=>{t.inputState.lastContextMenu=Date.now()},rs.beforeinput=(t,e)=>{var i,n
if("insertText"!=e.inputType&&"insertCompositionText"!=e.inputType||(t.inputState.insertingText=e.data,t.inputState.insertingTextAt=Date.now()),"insertReplacementText"==e.inputType&&t.observer.editContext){let n=null===(i=e.dataTransfer)||void 0===i?void 0:i.getData("text/plain"),s=e.getTargetRanges()
if(n&&s.length){let e=s[0],i=t.posAtDOM(e.startContainer,e.startOffset),o=t.posAtDOM(e.endContainer,e.endOffset)
return Jn(t,{from:i,to:o,insert:t.state.toText(n)},null),!0}}let s
if(ye.chrome&&ye.android&&(s=es.find(t=>t.inputType==e.inputType))&&(t.observer.delayAndroidKey(s.key,s.keyCode),"Backspace"==s.key||"Delete"==s.key)){let e=(null===(n=window.visualViewport)||void 0===n?void 0:n.height)||0
setTimeout(()=>{var i;((null===(i=window.visualViewport)||void 0===i?void 0:i.height)||0)>e+10&&t.hasFocus&&(t.contentDOM.blur(),t.focus())},100)}return ye.ios&&"deleteContentForward"==e.inputType&&t.observer.flushSoon(),ye.safari&&"insertText"==e.inputType&&t.inputState.composing>=0&&setTimeout(()=>ls.compositionend(t,e),20),!1}
const ks=new Set,Ss=["pre-wrap","normal","pre-line","break-spaces"]
let Cs=!1
function Ms(){Cs=!1}class As{constructor(t){this.lineWrapping=t,this.doc=v.empty,this.heightSamples={},this.lineHeight=14,this.charWidth=7,this.textHeight=14,this.lineLength=30}heightForGap(t,e){let i=this.doc.lineAt(e).number-this.doc.lineAt(t).number+1
return this.lineWrapping&&(i+=Math.max(0,Math.ceil((e-t-i*this.lineLength*.5)/this.lineLength))),this.lineHeight*i}heightForLine(t){return this.lineWrapping?(1+Math.max(0,Math.ceil((t-this.lineLength)/Math.max(1,this.lineLength-5))))*this.lineHeight:this.lineHeight}setDoc(t){return this.doc=t,this}mustRefreshForWrapping(t){return Ss.indexOf(t)>-1!=this.lineWrapping}mustRefreshForHeights(t){let e=!1
for(let i=0;i<t.length;i++){let n=t[i]
n<0?i++:this.heightSamples[Math.floor(10*n)]||(e=!0,this.heightSamples[Math.floor(10*n)]=!0)}return e}refresh(t,e,i,n,s,o){let r=Ss.indexOf(t)>-1,l=Math.abs(e-this.lineHeight)>.3||this.lineWrapping!=r
if(this.lineWrapping=r,this.lineHeight=e,this.charWidth=i,this.textHeight=n,this.lineLength=s,l){this.heightSamples={}
for(let t=0;t<o.length;t++){let e=o[t]
e<0?t++:this.heightSamples[Math.floor(10*e)]=!0}}return l}}class Ts{constructor(t,e){this.from=t,this.heights=e,this.index=0}get more(){return this.index<this.heights.length}}class Os{constructor(t,e,i,n,s){this.from=t,this.length=e,this.top=i,this.height=n,this._content=s}get type(){return"number"==typeof this._content?Te.Text:Array.isArray(this._content)?this._content:this._content.type}get to(){return this.from+this.length}get bottom(){return this.top+this.height}get widget(){return this._content instanceof Be?this._content.widget:null}get widgetLineBreaks(){return"number"==typeof this._content?this._content:0}join(t){let e=(Array.isArray(this._content)?this._content:[this]).concat(Array.isArray(t._content)?t._content:[t])
return new Os(this.from,this.length+t.length,this.top,this.height+t.height,e)}}var Ds=function(t){return t[t.ByPos=0]="ByPos",t[t.ByHeight=1]="ByHeight",t[t.ByPosNoHeight=2]="ByPosNoHeight",t}(Ds||(Ds={}))
const Es=.001
class Bs{constructor(t,e,i=2){this.length=t,this.height=e,this.flags=i}get outdated(){return(2&this.flags)>0}set outdated(t){this.flags=(t?2:0)|-3&this.flags}setHeight(t){this.height!=t&&(Math.abs(this.height-t)>Es&&(Cs=!0),this.height=t)}replace(t,e,i){return Bs.of(i)}decomposeLeft(t,e){e.push(this)}decomposeRight(t,e){e.push(this)}applyChanges(t,e,i,n){let s=this,o=i.doc
for(let r=n.length-1;r>=0;r--){let{fromA:l,toA:a,fromB:h,toB:c}=n[r],u=s.lineAt(l,Ds.ByPosNoHeight,i.setDoc(e),0,0),d=u.to>=a?u:s.lineAt(a,Ds.ByPosNoHeight,i,0,0)
for(c+=d.to-a,a=d.to;r>0&&u.from<=n[r-1].toA;)l=n[r-1].fromA,h=n[r-1].fromB,r--,l<u.from&&(u=s.lineAt(l,Ds.ByPosNoHeight,i,0,0))
h+=u.from-l,l=u.from
let f=Vs.build(i.setDoc(o),t,h,c)
s=Rs(s,s.replace(l,a,f))}return s.updateHeight(i,0)}static empty(){return new Ps(0,0,0)}static of(t){if(1==t.length)return t[0]
let e=0,i=t.length,n=0,s=0
for(;;)if(e==i)if(n>2*s){let s=t[e-1]
s.break?t.splice(--e,1,s.left,null,s.right):t.splice(--e,1,s.left,s.right),i+=1+s.break,n-=s.size}else{if(!(s>2*n))break
{let e=t[i]
e.break?t.splice(i,1,e.left,null,e.right):t.splice(i,1,e.left,e.right),i+=2+e.break,s-=e.size}}else if(n<s){let i=t[e++]
i&&(n+=i.size)}else{let e=t[--i]
e&&(s+=e.size)}let o=0
return null==t[e-1]?(o=1,e--):null==t[e]&&(o=1,i++),new Ws(Bs.of(t.slice(0,e)),o,Bs.of(t.slice(i)))}}function Rs(t,e){return t==e?t:(t.constructor!=e.constructor&&(Cs=!0),e)}Bs.prototype.size=1
const Ls=Oe.replace({})
class Is extends Bs{constructor(t,e,i){super(t,e),this.deco=i,this.spaceAbove=0}mainBlock(t,e){return new Os(e,this.length,t+this.spaceAbove,this.height-this.spaceAbove,this.deco||0)}blockAt(t,e,i,n){return this.spaceAbove&&t<i+this.spaceAbove?new Os(n,0,i,this.spaceAbove,Ls):this.mainBlock(i,n)}lineAt(t,e,i,n,s){let o=this.mainBlock(n,s)
return this.spaceAbove?this.blockAt(0,i,n,s).join(o):o}forEachLine(t,e,i,n,s,o){t<=s+this.length&&e>=s&&o(this.lineAt(0,Ds.ByPos,i,n,s))}setMeasuredHeight(t){let e=t.heights[t.index++]
e<0?(this.spaceAbove=-e,e=t.heights[t.index++]):this.spaceAbove=0,this.setHeight(e)}updateHeight(t,e=0,i=!1,n){return n&&n.from<=e&&n.more&&this.setMeasuredHeight(n),this.outdated=!1,this}toString(){return`block(${this.length})`}}class Ps extends Is{constructor(t,e,i){super(t,e,null),this.collapsed=0,this.widgetHeight=0,this.breaks=0,this.spaceAbove=i}mainBlock(t,e){return new Os(e,this.length,t+this.spaceAbove,this.height-this.spaceAbove,this.breaks)}replace(t,e,i){let n=i[0]
return 1==i.length&&(n instanceof Ps||n instanceof Ns&&4&n.flags)&&Math.abs(this.length-n.length)<10?(n instanceof Ns?n=new Ps(n.length,this.height,this.spaceAbove):n.height=this.height,this.outdated||(n.outdated=!1),n):Bs.of(i)}updateHeight(t,e=0,i=!1,n){return n&&n.from<=e&&n.more?this.setMeasuredHeight(n):(i||this.outdated)&&(this.spaceAbove=0,this.setHeight(Math.max(this.widgetHeight,t.heightForLine(this.length-this.collapsed))+this.breaks*t.lineHeight)),this.outdated=!1,this}toString(){return`line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`}}class Ns extends Bs{constructor(t){super(t,0)}heightMetrics(t,e){let i,n=t.doc.lineAt(e).number,s=t.doc.lineAt(e+this.length).number,o=s-n+1,r=0
if(t.lineWrapping){let e=Math.min(this.height,t.lineHeight*o)
i=e/o,this.length>o+1&&(r=(this.height-e)/(this.length-o-1))}else i=this.height/o
return{firstLine:n,lastLine:s,perLine:i,perChar:r}}blockAt(t,e,i,n){let{firstLine:s,lastLine:o,perLine:r,perChar:l}=this.heightMetrics(e,n)
if(e.lineWrapping){let s=n+(t<e.lineHeight?0:Math.round(Math.max(0,Math.min(1,(t-i)/this.height))*this.length)),o=e.doc.lineAt(s),a=r+o.length*l,h=Math.max(i,t-a/2)
return new Os(o.from,o.length,h,a,0)}{let n=Math.max(0,Math.min(o-s,Math.floor((t-i)/r))),{from:l,length:a}=e.doc.line(s+n)
return new Os(l,a,i+r*n,r,0)}}lineAt(t,e,i,n,s){if(e==Ds.ByHeight)return this.blockAt(t,i,n,s)
if(e==Ds.ByPosNoHeight){let{from:e,to:n}=i.doc.lineAt(t)
return new Os(e,n-e,0,0,0)}let{firstLine:o,perLine:r,perChar:l}=this.heightMetrics(i,s),a=i.doc.lineAt(t),h=r+a.length*l,c=a.number-o,u=n+r*c+l*(a.from-s-c)
return new Os(a.from,a.length,Math.max(n,Math.min(u,n+this.height-h)),h,0)}forEachLine(t,e,i,n,s,o){t=Math.max(t,s),e=Math.min(e,s+this.length)
let{firstLine:r,perLine:l,perChar:a}=this.heightMetrics(i,s)
for(let h=t,c=n;h<=e;){let e=i.doc.lineAt(h)
if(h==t){let i=e.number-r
c+=l*i+a*(t-s-i)}let n=l+a*e.length
o(new Os(e.from,e.length,c,n,0)),c+=n,h=e.to+1}}replace(t,e,i){let n=this.length-e
if(n>0){let t=i[i.length-1]
t instanceof Ns?i[i.length-1]=new Ns(t.length+n):i.push(null,new Ns(n-1))}if(t>0){let e=i[0]
e instanceof Ns?i[0]=new Ns(t+e.length):i.unshift(new Ns(t-1),null)}return Bs.of(i)}decomposeLeft(t,e){e.push(new Ns(t-1),null)}decomposeRight(t,e){e.push(null,new Ns(this.length-t-1))}updateHeight(t,e=0,i=!1,n){let s=e+this.length
if(n&&n.from<=e+this.length&&n.more){let i=[],o=Math.max(e,n.from),r=-1
for(n.from>e&&i.push(new Ns(n.from-e-1).updateHeight(t,e));o<=s&&n.more;){let e=t.doc.lineAt(o).length
i.length&&i.push(null)
let s=n.heights[n.index++],l=0
s<0&&(l=-s,s=n.heights[n.index++]),-1==r?r=s:Math.abs(s-r)>=Es&&(r=-2)
let a=new Ps(e,s,l)
a.outdated=!1,i.push(a),o+=e+1}o<=s&&i.push(null,new Ns(s-o).updateHeight(t,o))
let l=Bs.of(i)
return(r<0||Math.abs(l.height-this.height)>=Es||Math.abs(r-this.heightMetrics(t,e).perLine)>=Es)&&(Cs=!0),Rs(this,l)}return(i||this.outdated)&&(this.setHeight(t.heightForGap(e,e+this.length)),this.outdated=!1),this}toString(){return`gap(${this.length})`}}class Ws extends Bs{constructor(t,e,i){super(t.length+e+i.length,t.height+i.height,e|(t.outdated||i.outdated?2:0)),this.left=t,this.right=i,this.size=t.size+i.size}get break(){return 1&this.flags}blockAt(t,e,i,n){let s=i+this.left.height
return t<s?this.left.blockAt(t,e,i,n):this.right.blockAt(t,e,s,n+this.left.length+this.break)}lineAt(t,e,i,n,s){let o=n+this.left.height,r=s+this.left.length+this.break,l=e==Ds.ByHeight?t<o:t<r,a=l?this.left.lineAt(t,e,i,n,s):this.right.lineAt(t,e,i,o,r)
if(this.break||(l?a.to<r:a.from>r))return a
let h=e==Ds.ByPosNoHeight?Ds.ByPosNoHeight:Ds.ByPos
return l?a.join(this.right.lineAt(r,h,i,o,r)):this.left.lineAt(r,h,i,n,s).join(a)}forEachLine(t,e,i,n,s,o){let r=n+this.left.height,l=s+this.left.length+this.break
if(this.break)t<l&&this.left.forEachLine(t,e,i,n,s,o),e>=l&&this.right.forEachLine(t,e,i,r,l,o)
else{let a=this.lineAt(l,Ds.ByPos,i,n,s)
t<a.from&&this.left.forEachLine(t,a.from-1,i,n,s,o),a.to>=t&&a.from<=e&&o(a),e>a.to&&this.right.forEachLine(a.to+1,e,i,r,l,o)}}replace(t,e,i){let n=this.left.length+this.break
if(e<n)return this.balanced(this.left.replace(t,e,i),this.right)
if(t>this.left.length)return this.balanced(this.left,this.right.replace(t-n,e-n,i))
let s=[]
t>0&&this.decomposeLeft(t,s)
let o=s.length
for(let r of i)s.push(r)
if(t>0&&Hs(s,o-1),e<this.length){let t=s.length
this.decomposeRight(e,s),Hs(s,t)}return Bs.of(s)}decomposeLeft(t,e){let i=this.left.length
if(t<=i)return this.left.decomposeLeft(t,e)
e.push(this.left),this.break&&(i++,t>=i&&e.push(null)),t>i&&this.right.decomposeLeft(t-i,e)}decomposeRight(t,e){let i=this.left.length,n=i+this.break
if(t>=n)return this.right.decomposeRight(t-n,e)
t<i&&this.left.decomposeRight(t,e),this.break&&t<n&&e.push(null),e.push(this.right)}balanced(t,e){return t.size>2*e.size||e.size>2*t.size?Bs.of(this.break?[t,null,e]:[t,e]):(this.left=Rs(this.left,t),this.right=Rs(this.right,e),this.setHeight(t.height+e.height),this.outdated=t.outdated||e.outdated,this.size=t.size+e.size,this.length=t.length+this.break+e.length,this)}updateHeight(t,e=0,i=!1,n){let{left:s,right:o}=this,r=e+s.length+this.break,l=null
return n&&n.from<=e+s.length&&n.more?l=s=s.updateHeight(t,e,i,n):s.updateHeight(t,e,i),n&&n.from<=r+o.length&&n.more?l=o=o.updateHeight(t,r,i,n):o.updateHeight(t,r,i),l?this.balanced(s,o):(this.height=this.left.height+this.right.height,this.outdated=!1,this)}toString(){return this.left+(this.break?" ":"-")+this.right}}function Hs(t,e){let i,n
null==t[e]&&(i=t[e-1])instanceof Ns&&(n=t[e+1])instanceof Ns&&t.splice(e-1,3,new Ns(i.length+1+n.length))}class Vs{constructor(t,e){this.pos=t,this.oracle=e,this.nodes=[],this.lineStart=-1,this.lineEnd=-1,this.covering=null,this.writtenTo=t}get isCovered(){return this.covering&&this.nodes[this.nodes.length-1]==this.covering}span(t,e){if(this.lineStart>-1){let t=Math.min(e,this.lineEnd),i=this.nodes[this.nodes.length-1]
i instanceof Ps?i.length+=t-this.pos:(t>this.pos||!this.isCovered)&&this.nodes.push(new Ps(t-this.pos,-1,0)),this.writtenTo=t,e>t&&(this.nodes.push(null),this.writtenTo++,this.lineStart=-1)}this.pos=e}point(t,e,i){if(t<e||i.heightRelevant){let n=i.widget?i.widget.estimatedHeight:0,s=i.widget?i.widget.lineBreaks:0
n<0&&(n=this.oracle.lineHeight)
let o=e-t
i.block?this.addBlock(new Is(o,n,i)):(o||s||n>=5)&&this.addLineDeco(n,s,o)}else e>t&&this.span(t,e)
this.lineEnd>-1&&this.lineEnd<this.pos&&(this.lineEnd=this.oracle.doc.lineAt(this.pos).to)}enterLine(){if(this.lineStart>-1)return
let{from:t,to:e}=this.oracle.doc.lineAt(this.pos)
this.lineStart=t,this.lineEnd=e,this.writtenTo<t&&((this.writtenTo<t-1||null==this.nodes[this.nodes.length-1])&&this.nodes.push(this.blankContent(this.writtenTo,t-1)),this.nodes.push(null)),this.pos>t&&this.nodes.push(new Ps(this.pos-t,-1,0)),this.writtenTo=this.pos}blankContent(t,e){let i=new Ns(e-t)
return this.oracle.doc.lineAt(t).to==e&&(i.flags|=4),i}ensureLine(){this.enterLine()
let t=this.nodes.length?this.nodes[this.nodes.length-1]:null
if(t instanceof Ps)return t
let e=new Ps(0,-1,0)
return this.nodes.push(e),e}addBlock(t){this.enterLine()
let e=t.deco
e&&e.startSide>0&&!this.isCovered&&this.ensureLine(),this.nodes.push(t),this.writtenTo=this.pos=this.pos+t.length,e&&e.endSide>0&&(this.covering=t)}addLineDeco(t,e,i){let n=this.ensureLine()
n.length+=i,n.collapsed+=i,n.widgetHeight=Math.max(n.widgetHeight,t),n.breaks+=e,this.writtenTo=this.pos=this.pos+i}finish(t){let e=0==this.nodes.length?null:this.nodes[this.nodes.length-1]
!(this.lineStart>-1)||e instanceof Ps||this.isCovered?(this.writtenTo<this.pos||null==e)&&this.nodes.push(this.blankContent(this.writtenTo,this.pos)):this.nodes.push(new Ps(0,-1,0))
let i=t
for(let n of this.nodes)n instanceof Ps&&n.updateHeight(this.oracle,i),i+=n?n.length:1
return this.nodes}static build(t,e,i,n){let s=new Vs(i,t)
return Pt.spans(e,i,n,s,0),s.finish(i)}}class Fs{constructor(){this.changes=[]}compareRange(){}comparePoint(t,e,i,n){(t<e||i&&i.heightRelevant||n&&n.heightRelevant)&&Le(t,e,this.changes,5)}}function zs(t,e){let i=t.getBoundingClientRect(),n=t.ownerDocument,s=n.defaultView||window,o=Math.max(0,i.left),r=Math.min(s.innerWidth,i.right),l=Math.max(0,i.top),a=Math.min(s.innerHeight,i.bottom)
for(let h=t.parentNode;h&&h!=n.body;)if(1==h.nodeType){let e=h,i=window.getComputedStyle(e)
if((e.scrollHeight>e.clientHeight||e.scrollWidth>e.clientWidth)&&"visible"!=i.overflow){let i=e.getBoundingClientRect()
o=Math.max(o,i.left),r=Math.min(r,i.right),l=Math.max(l,i.top),a=Math.min(h==t.parentNode?s.innerHeight:a,i.bottom)}h="absolute"==i.position||"fixed"==i.position?e.offsetParent:e.parentNode}else{if(11!=h.nodeType)break
h=h.host}return{left:o-i.left,right:Math.max(o,r)-i.left,top:l-(i.top+e),bottom:Math.max(l,a)-(i.top+e)}}function qs(t,e){let i=t.getBoundingClientRect()
return{left:0,right:i.right-i.left,top:e,bottom:i.bottom-(i.top+e)}}class _s{constructor(t,e,i,n){this.from=t,this.to=e,this.size=i,this.displaySize=n}static same(t,e){if(t.length!=e.length)return!1
for(let i=0;i<t.length;i++){let n=t[i],s=e[i]
if(n.from!=s.from||n.to!=s.to||n.size!=s.size)return!1}return!0}draw(t,e){return Oe.replace({widget:new Ks(this.displaySize*(e?t.scaleY:t.scaleX),e)}).range(this.from,this.to)}}class Ks extends Ae{constructor(t,e){super(),this.size=t,this.vertical=e}eq(t){return t.size==this.size&&t.vertical==this.vertical}toDOM(){let t=document.createElement("div")
return this.vertical?t.style.height=this.size+"px":(t.style.width=this.size+"px",t.style.height="2px",t.style.display="inline-block"),t}get estimatedHeight(){return this.vertical?this.size:-1}}class js{constructor(t,e){this.view=t,this.state=e,this.pixelViewport={left:0,right:window.innerWidth,top:0,bottom:0},this.inView=!0,this.paddingTop=0,this.paddingBottom=0,this.contentDOMWidth=0,this.contentDOMHeight=0,this.editorHeight=0,this.editorWidth=0,this.scaleX=1,this.scaleY=1,this.scrollOffset=0,this.scrolledToBottom=!1,this.scrollAnchorPos=0,this.scrollAnchorHeight=-1,this.scaler=Gs,this.scrollTarget=null,this.printing=!1,this.mustMeasureContent=!0,this.defaultTextDirection=si.LTR,this.visibleRanges=[],this.mustEnforceCursorAssoc=!1
let i=e.facet(ji).some(t=>"function"!=typeof t&&"cm-lineWrapping"==t.class)
this.heightOracle=new As(i),this.stateDeco=Js(e),this.heightMap=Bs.empty().applyChanges(this.stateDeco,v.empty,this.heightOracle.setDoc(e.doc),[new en(0,0,0,e.doc.length)])
for(let n=0;n<2&&(this.viewport=this.getViewport(0,null),this.updateForViewport());n++);this.updateViewportLines(),this.lineGaps=this.ensureLineGaps([]),this.lineGapDeco=Oe.set(this.lineGaps.map(t=>t.draw(this,!1))),this.scrollParent=t.scrollDOM,this.computeVisibleRanges()}updateForViewport(){let t=[this.viewport],{main:e}=this.state.selection
for(let i=0;i<=1;i++){let n=i?e.head:e.anchor
if(!t.some(({from:t,to:e})=>n>=t&&n<=e)){let{from:e,to:i}=this.lineBlockAt(n)
t.push(new $s(e,i))}}return this.viewports=t.sort((t,e)=>t.from-e.from),this.updateScaler()}updateScaler(){let t=this.scaler
return this.scaler=this.heightMap.height<=7e6?Gs:new Xs(this.heightOracle,this.heightMap,this.viewports),t.eq(this.scaler)?0:2}updateViewportLines(){this.viewportLines=[],this.heightMap.forEachLine(this.viewport.from,this.viewport.to,this.heightOracle.setDoc(this.state.doc),0,0,t=>{this.viewportLines.push(Qs(t,this.scaler))})}update(t,e=null){this.state=t.state
let i=this.stateDeco
this.stateDeco=Js(this.state)
let n=t.changedRanges,s=en.extendWithRanges(n,function(t,e,i){let n=new Fs
return Pt.compare(t,e,i,n,0),n.changes}(i,this.stateDeco,t?t.changes:I.empty(this.state.doc.length))),o=this.heightMap.height,r=this.scrolledToBottom?null:this.scrollAnchorAt(this.scrollOffset)
Ms(),this.heightMap=this.heightMap.applyChanges(this.stateDeco,t.startState.doc,this.heightOracle.setDoc(this.state.doc),s),(this.heightMap.height!=o||Cs)&&(t.flags|=2),r?(this.scrollAnchorPos=t.changes.mapPos(r.from,-1),this.scrollAnchorHeight=r.top):(this.scrollAnchorPos=-1,this.scrollAnchorHeight=o)
let l=s.length?this.mapViewport(this.viewport,t.changes):this.viewport;(e&&(e.range.head<l.from||e.range.head>l.to)||!this.viewportIsAppropriate(l))&&(l=this.getViewport(0,e))
let a=l.from!=this.viewport.from||l.to!=this.viewport.to
this.viewport=l,t.flags|=this.updateForViewport(),(a||!t.changes.empty||2&t.flags)&&this.updateViewportLines(),(this.lineGaps.length||this.viewport.to-this.viewport.from>4e3)&&this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps,t.changes))),t.flags|=this.computeVisibleRanges(t.changes),e&&(this.scrollTarget=e),!this.mustEnforceCursorAssoc&&(t.selectionSet||t.focusChanged)&&t.view.lineWrapping&&t.state.selection.main.empty&&t.state.selection.main.assoc&&!t.state.facet(Li)&&(this.mustEnforceCursorAssoc=!0)}measure(){let{view:t}=this,e=t.contentDOM,i=window.getComputedStyle(e),n=this.heightOracle,s=i.whiteSpace
this.defaultTextDirection="rtl"==i.direction?si.RTL:si.LTR
let o=this.heightOracle.mustRefreshForWrapping(s)||"refresh"===this.mustMeasureContent,r=e.getBoundingClientRect(),l=o||this.mustMeasureContent||this.contentDOMHeight!=r.height
this.contentDOMHeight=r.height,this.mustMeasureContent=!1
let a=0,h=0
if(r.width&&r.height){let{scaleX:t,scaleY:i}=$e(e,r);(t>.005&&Math.abs(this.scaleX-t)>.005||i>.005&&Math.abs(this.scaleY-i)>.005)&&(this.scaleX=t,this.scaleY=i,a|=16,o=l=!0)}let c=(parseInt(i.paddingTop)||0)*this.scaleY,u=(parseInt(i.paddingBottom)||0)*this.scaleY
this.paddingTop==c&&this.paddingBottom==u||(this.paddingTop=c,this.paddingBottom=u,a|=18),this.editorWidth!=t.scrollDOM.clientWidth&&(n.lineWrapping&&(l=!0),this.editorWidth=t.scrollDOM.clientWidth,a|=16)
let d=Ue(this.view.contentDOM,!1).y
d!=this.scrollParent&&(this.scrollParent=d,this.scrollAnchorHeight=-1,this.scrollOffset=0)
let f=this.getScrollOffset()
this.scrollOffset!=f&&(this.scrollAnchorHeight=-1,this.scrollOffset=f),this.scrolledToBottom=ti(this.scrollParent||t.win)
let p=(this.printing?qs:zs)(e,this.paddingTop),m=p.top-this.pixelViewport.top,g=p.bottom-this.pixelViewport.bottom
this.pixelViewport=p
let w=this.pixelViewport.bottom>this.pixelViewport.top&&this.pixelViewport.right>this.pixelViewport.left
if(w!=this.inView&&(this.inView=w,w&&(l=!0)),!this.inView&&!this.scrollTarget&&!function(t){let e=t.getBoundingClientRect(),i=t.ownerDocument.defaultView||window
return e.left<i.innerWidth&&e.right>0&&e.top<i.innerHeight&&e.bottom>0}(t.dom))return 0
let b=r.width
if(this.contentDOMWidth==b&&this.editorHeight==t.scrollDOM.clientHeight||(this.contentDOMWidth=r.width,this.editorHeight=t.scrollDOM.clientHeight,a|=16),l){let e=t.docView.measureVisibleLineHeights(this.viewport)
if(n.mustRefreshForHeights(e)&&(o=!0),o||n.lineWrapping&&Math.abs(b-this.contentDOMWidth)>n.charWidth){let{lineHeight:i,charWidth:r,textHeight:l}=t.docView.measureTextSize()
o=i>0&&n.refresh(s,i,r,l,Math.max(5,b/r),e),o&&(t.docView.minWidth=0,a|=16)}m>0&&g>0?h=Math.max(m,g):m<0&&g<0&&(h=Math.min(m,g)),Ms()
for(let i of this.viewports){let s=i.from==this.viewport.from?e:t.docView.measureVisibleLineHeights(i)
this.heightMap=(o?Bs.empty().applyChanges(this.stateDeco,v.empty,this.heightOracle,[new en(0,0,0,t.state.doc.length)]):this.heightMap).updateHeight(n,0,o,new Ts(i.from,s))}Cs&&(a|=2)}let y=!this.viewportIsAppropriate(this.viewport,h)||this.scrollTarget&&(this.scrollTarget.range.head<this.viewport.from||this.scrollTarget.range.head>this.viewport.to)
return y&&(2&a&&(a|=this.updateScaler()),this.viewport=this.getViewport(h,this.scrollTarget),a|=this.updateForViewport()),(2&a||y)&&this.updateViewportLines(),(this.lineGaps.length||this.viewport.to-this.viewport.from>4e3)&&this.updateLineGaps(this.ensureLineGaps(o?[]:this.lineGaps,t)),a|=this.computeVisibleRanges(),this.mustEnforceCursorAssoc&&(this.mustEnforceCursorAssoc=!1,t.docView.enforceCursorAssoc()),a}get visibleTop(){return this.scaler.fromDOM(this.pixelViewport.top)}get visibleBottom(){return this.scaler.fromDOM(this.pixelViewport.bottom)}getViewport(t,e){let i=.5-Math.max(-.5,Math.min(.5,t/1e3/2)),n=this.heightMap,s=this.heightOracle,{visibleTop:o,visibleBottom:r}=this,l=new $s(n.lineAt(o-1e3*i,Ds.ByHeight,s,0,0).from,n.lineAt(r+1e3*(1-i),Ds.ByHeight,s,0,0).to)
if(e){let{head:t}=e.range
if(t<l.from||t>l.to){let i,o=Math.min(this.editorHeight,this.pixelViewport.bottom-this.pixelViewport.top),r=n.lineAt(t,Ds.ByPos,s,0,0)
i="center"==e.y?(r.top+r.bottom)/2-o/2:"start"==e.y||"nearest"==e.y&&t<l.from?r.top:r.bottom-o,l=new $s(n.lineAt(i-500,Ds.ByHeight,s,0,0).from,n.lineAt(i+o+500,Ds.ByHeight,s,0,0).to)}}return l}mapViewport(t,e){let i=e.mapPos(t.from,-1),n=e.mapPos(t.to,1)
return new $s(this.heightMap.lineAt(i,Ds.ByPos,this.heightOracle,0,0).from,this.heightMap.lineAt(n,Ds.ByPos,this.heightOracle,0,0).to)}viewportIsAppropriate({from:t,to:e},i=0){if(!this.inView)return!0
let{top:n}=this.heightMap.lineAt(t,Ds.ByPos,this.heightOracle,0,0),{bottom:s}=this.heightMap.lineAt(e,Ds.ByPos,this.heightOracle,0,0),{visibleTop:o,visibleBottom:r}=this
return(0==t||n<=o-Math.max(10,Math.min(-i,250)))&&(e==this.state.doc.length||s>=r+Math.max(10,Math.min(i,250)))&&n>o-2e3&&s<r+2e3}mapLineGaps(t,e){if(!t.length||e.empty)return t
let i=[]
for(let n of t)e.touchesRange(n.from,n.to)||i.push(new _s(e.mapPos(n.from),e.mapPos(n.to),n.size,n.displaySize))
return i}ensureLineGaps(t,e){let i=this.heightOracle.lineWrapping,n=i?1e4:2e3,s=n>>1,o=n<<1
if(this.defaultTextDirection!=si.LTR&&!i)return[]
let r=[],l=(n,o,a,h)=>{if(o-n<s)return
let c=this.state.selection.main,u=[c.from]
c.empty||u.push(c.to)
for(let t of u)if(t>n&&t<o)return l(n,t-10,a,h),void l(t+10,o,a,h)
let d=function(t,e){for(let i of t)if(e(i))return i}(t,t=>t.from>=a.from&&t.to<=a.to&&Math.abs(t.from-n)<s&&Math.abs(t.to-o)<s&&!u.some(e=>t.from<e&&t.to>e))
if(!d){if(o<a.to&&e&&i&&e.visibleRanges.some(t=>t.from<=o&&t.to>=o)){let t=e.moveToLineBoundary(q.cursor(o),!1,!0).head
t>n&&(o=t)}let t=this.gapSize(a,n,o,h)
d=new _s(n,o,t,i||t<2e6?t:2e6)}r.push(d)},a=e=>{if(e.length<o||e.type!=Te.Text)return
let s=function(t,e,i){let n=[],s=t,o=0
return Pt.spans(i,t,e,{span(){},point(t,e){t>s&&(n.push({from:s,to:t}),o+=t-s),s=e}},20),s<e&&(n.push({from:s,to:e}),o+=e-s),{total:o,ranges:n}}(e.from,e.to,this.stateDeco)
if(s.total<o)return
let r,a,h=this.scrollTarget?this.scrollTarget.range.head:null
if(i){let t,i,o=n/this.heightOracle.lineLength*this.heightOracle.lineHeight
if(null!=h){let n=Ys(s,h),r=((this.visibleBottom-this.visibleTop)/2+o)/e.height
t=n-r,i=n+r}else t=(this.visibleTop-e.top-o)/e.height,i=(this.visibleBottom-e.top+o)/e.height
r=Us(s,t),a=Us(s,i)}else{let i=s.total*this.heightOracle.charWidth,o=n*this.heightOracle.charWidth,l=0
if(i>2e6)for(let n of t)n.from>=e.from&&n.from<e.to&&n.size!=n.displaySize&&n.from*this.heightOracle.charWidth+l<this.pixelViewport.left&&(l=n.size-n.displaySize)
let c,u,d=this.pixelViewport.left+l,f=this.pixelViewport.right+l
if(null!=h){let t=Ys(s,h),e=((f-d)/2+o)/i
c=t-e,u=t+e}else c=(d-o)/i,u=(f+o)/i
r=Us(s,c),a=Us(s,u)}r>e.from&&l(e.from,r,e,s),a<e.to&&l(a,e.to,e,s)}
for(let h of this.viewportLines)Array.isArray(h.type)?h.type.forEach(a):a(h)
return r}gapSize(t,e,i,n){let s=Ys(n,i)-Ys(n,e)
return this.heightOracle.lineWrapping?t.height*s:n.total*this.heightOracle.charWidth*s}updateLineGaps(t){_s.same(t,this.lineGaps)||(this.lineGaps=t,this.lineGapDeco=Oe.set(t.map(t=>t.draw(this,this.heightOracle.lineWrapping))))}computeVisibleRanges(t){let e=this.stateDeco
this.lineGaps.length&&(e=e.concat(this.lineGapDeco))
let i=[]
Pt.spans(e,this.viewport.from,this.viewport.to,{span(t,e){i.push({from:t,to:e})},point(){}},20)
let n=0
if(i.length!=this.visibleRanges.length)n=12
else for(let s=0;s<i.length&&!(8&n);s++){let e=this.visibleRanges[s],o=i[s]
e.from==o.from&&e.to==o.to||(n|=4,t&&t.mapPos(e.from,-1)==o.from&&t.mapPos(e.to,1)==o.to||(n|=8))}return this.visibleRanges=i,n}lineBlockAt(t){return t>=this.viewport.from&&t<=this.viewport.to&&this.viewportLines.find(e=>e.from<=t&&e.to>=t)||Qs(this.heightMap.lineAt(t,Ds.ByPos,this.heightOracle,0,0),this.scaler)}lineBlockAtHeight(t){return t>=this.viewportLines[0].top&&t<=this.viewportLines[this.viewportLines.length-1].bottom&&this.viewportLines.find(e=>e.top<=t&&e.bottom>=t)||Qs(this.heightMap.lineAt(this.scaler.fromDOM(t),Ds.ByHeight,this.heightOracle,0,0),this.scaler)}getScrollOffset(){return(this.scrollParent==this.view.scrollDOM?this.scrollParent.scrollTop:(this.scrollParent?this.scrollParent.getBoundingClientRect().top:0)-this.view.contentDOM.getBoundingClientRect().top)*this.scaleY}scrollAnchorAt(t){let e=this.lineBlockAtHeight(t+8)
return e.from>=this.viewport.from||this.viewportLines[0].top-t>200?e:this.viewportLines[0]}elementAtHeight(t){return Qs(this.heightMap.blockAt(this.scaler.fromDOM(t),this.heightOracle,0,0),this.scaler)}get docHeight(){return this.scaler.toDOM(this.heightMap.height)}get contentHeight(){return this.docHeight+this.paddingTop+this.paddingBottom}}class $s{constructor(t,e){this.from=t,this.to=e}}function Us({total:t,ranges:e},i){if(i<=0)return e[0].from
if(i>=1)return e[e.length-1].to
let n=Math.floor(t*i)
for(let s=0;;s++){let{from:t,to:i}=e[s],o=i-t
if(n<=o)return t+n
n-=o}}function Ys(t,e){let i=0
for(let{from:n,to:s}of t.ranges){if(e<=s){i+=e-n
break}i+=s-n}return i/t.total}const Gs={toDOM:t=>t,fromDOM:t=>t,scale:1,eq(t){return t==this}}
function Js(t){let e=t.facet($i).filter(t=>"function"!=typeof t),i=t.facet(Yi).filter(t=>"function"!=typeof t)
return i.length&&e.push(Pt.join(i)),e}class Xs{constructor(t,e,i){let n=0,s=0,o=0
this.viewports=i.map(({from:i,to:s})=>{let o=e.lineAt(i,Ds.ByPos,t,0,0).top,r=e.lineAt(s,Ds.ByPos,t,0,0).bottom
return n+=r-o,{from:i,to:s,top:o,bottom:r,domTop:0,domBottom:0}}),this.scale=(7e6-n)/(e.height-n)
for(let r of this.viewports)r.domTop=o+(r.top-s)*this.scale,o=r.domBottom=r.domTop+(r.bottom-r.top),s=r.bottom}toDOM(t){for(let e=0,i=0,n=0;;e++){let s=e<this.viewports.length?this.viewports[e]:null
if(!s||t<s.top)return n+(t-i)*this.scale
if(t<=s.bottom)return s.domTop+(t-s.top)
i=s.bottom,n=s.domBottom}}fromDOM(t){for(let e=0,i=0,n=0;;e++){let s=e<this.viewports.length?this.viewports[e]:null
if(!s||t<s.domTop)return i+(t-n)/this.scale
if(t<=s.domBottom)return s.top+(t-s.domTop)
i=s.bottom,n=s.domBottom}}eq(t){return t instanceof Xs&&this.scale==t.scale&&this.viewports.length==t.viewports.length&&this.viewports.every((e,i)=>e.from==t.viewports[i].from&&e.to==t.viewports[i].to)}}function Qs(t,e){if(1==e.scale)return t
let i=e.toDOM(t.top),n=e.toDOM(t.bottom)
return new Os(t.from,t.length,i,n-i,Array.isArray(t._content)?t._content.map(t=>Qs(t,e)):t._content)}const Zs=j.define({combine:t=>t.join(" ")}),to=j.define({combine:t=>t.indexOf(!0)>-1}),eo=Qt.newName(),io=Qt.newName(),no=Qt.newName(),so={"&light":"."+io,"&dark":"."+no}
function oo(t,e,i){return new Qt(e,{finish:e=>/&/.test(e)?e.replace(/&\w*/,e=>{if("&"==e)return t
if(!i||!i[e])throw new RangeError(`Unsupported selector: ${e}`)
return i[e]}):t+" "+e})}const ro=oo("."+eo,{"&":{position:"relative !important",boxSizing:"border-box","&.cm-focused":{outline:"1px dotted #212121"},display:"flex !important",flexDirection:"column"},".cm-scroller":{display:"flex !important",alignItems:"flex-start !important",fontFamily:"monospace",lineHeight:1.4,height:"100%",overflowX:"auto",position:"relative",zIndex:0,overflowAnchor:"none"},".cm-content":{margin:0,flexGrow:2,flexShrink:0,display:"block",whiteSpace:"pre",wordWrap:"normal",boxSizing:"border-box",minHeight:"100%",padding:"4px 0",outline:"none","&[contenteditable=true]":{WebkitUserModify:"read-write-plaintext-only"}},".cm-lineWrapping":{whiteSpace_fallback:"pre-wrap",whiteSpace:"break-spaces",wordBreak:"break-word",overflowWrap:"anywhere",flexShrink:1},"&light .cm-content":{caretColor:"black"},"&dark .cm-content":{caretColor:"white"},".cm-line":{display:"block",padding:"0 2px 0 6px"},".cm-layer":{position:"absolute",left:0,top:0,contain:"size style","& > *":{position:"absolute"}},"&light .cm-selectionBackground":{background:"#d9d9d9"},"&dark .cm-selectionBackground":{background:"#222"},"&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground":{background:"#d7d4f0"},"&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground":{background:"#233"},".cm-cursorLayer":{pointerEvents:"none"},"&.cm-focused > .cm-scroller > .cm-cursorLayer":{animation:"steps(1) cm-blink 1.2s infinite"},"@keyframes cm-blink":{"0%":{},"50%":{opacity:0},"100%":{}},"@keyframes cm-blink2":{"0%":{},"50%":{opacity:0},"100%":{}},".cm-cursor, .cm-dropCursor":{borderLeft:"1.2px solid black",marginLeft:"-0.6px",pointerEvents:"none"},".cm-cursor":{display:"none"},"&dark .cm-cursor":{borderLeftColor:"#ddd"},".cm-selectionHandle":{backgroundColor:"currentColor",width:"1.5px"},".cm-selectionHandle-start::before, .cm-selectionHandle-end::before":{content:'""',backgroundColor:"inherit",borderRadius:"50%",width:"8px",height:"8px",position:"absolute",left:"-3.25px"},".cm-selectionHandle-start::before":{top:"-8px"},".cm-selectionHandle-end::before":{bottom:"-8px"},".cm-dropCursor":{position:"absolute"},"&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor":{display:"block"},".cm-iso":{unicodeBidi:"isolate"},".cm-announced":{position:"fixed",top:"-10000px"},"@media print":{".cm-announced":{display:"none"}},"&light .cm-activeLine":{backgroundColor:"#cceeff44"},"&dark .cm-activeLine":{backgroundColor:"#99eeff33"},"&light .cm-specialChar":{color:"red"},"&dark .cm-specialChar":{color:"#f78"},".cm-gutters":{flexShrink:0,display:"flex",height:"100%",boxSizing:"border-box",zIndex:200},".cm-gutters-before":{insetInlineStart:0},".cm-gutters-after":{insetInlineEnd:0},"&light .cm-gutters":{backgroundColor:"#f5f5f5",color:"#6c6c6c",border:"0px solid #ddd","&.cm-gutters-before":{borderRightWidth:"1px"},"&.cm-gutters-after":{borderLeftWidth:"1px"}},"&dark .cm-gutters":{backgroundColor:"#333338",color:"#ccc"},".cm-gutter":{display:"flex !important",flexDirection:"column",flexShrink:0,boxSizing:"border-box",minHeight:"100%",overflow:"hidden"},".cm-gutterElement":{boxSizing:"border-box"},".cm-lineNumbers .cm-gutterElement":{padding:"0 3px 0 5px",minWidth:"20px",textAlign:"right",whiteSpace:"nowrap"},"&light .cm-activeLineGutter":{backgroundColor:"#e2f2ff"},"&dark .cm-activeLineGutter":{backgroundColor:"#222227"},".cm-panels":{boxSizing:"border-box",position:"sticky",left:0,right:0,zIndex:300},"&light .cm-panels":{backgroundColor:"#f5f5f5",color:"black"},"&light .cm-panels-top":{borderBottom:"1px solid #ddd"},"&light .cm-panels-bottom":{borderTop:"1px solid #ddd"},"&dark .cm-panels":{backgroundColor:"#333338",color:"white"},".cm-dialog":{padding:"2px 19px 4px 6px",position:"relative","& label":{fontSize:"80%"}},".cm-dialog-close":{position:"absolute",top:"3px",right:"4px",backgroundColor:"inherit",border:"none",font:"inherit",fontSize:"14px",padding:"0"},".cm-tab":{display:"inline-block",overflow:"hidden",verticalAlign:"bottom"},".cm-widgetBuffer":{verticalAlign:"text-top",height:"1em",width:0,display:"inline"},".cm-placeholder":{color:"#888",display:"inline-block",verticalAlign:"top",userSelect:"none"},".cm-highlightSpace":{backgroundImage:"radial-gradient(circle at 50% 55%, #aaa 20%, transparent 5%)",backgroundPosition:"center"},".cm-highlightTab":{backgroundImage:'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>\')',backgroundSize:"auto 100%",backgroundPosition:"right 90%",backgroundRepeat:"no-repeat"},".cm-trailingSpace":{backgroundColor:"#ff332255"},".cm-button":{verticalAlign:"middle",color:"inherit",fontSize:"70%",padding:".2em 1em",borderRadius:"1px"},"&light .cm-button":{backgroundImage:"linear-gradient(#eff1f5, #d9d9df)",border:"1px solid #888","&:active":{backgroundImage:"linear-gradient(#b4b4b4, #d0d3d6)"}},"&dark .cm-button":{backgroundImage:"linear-gradient(#393939, #111)",border:"1px solid #888","&:active":{backgroundImage:"linear-gradient(#111, #333)"}},".cm-textfield":{verticalAlign:"middle",color:"inherit",fontSize:"70%",border:"1px solid silver",padding:".2em .5em"},"&light .cm-textfield":{backgroundColor:"white"},"&dark .cm-textfield":{border:"1px solid #555",backgroundColor:"inherit"}},so),lo={childList:!0,characterData:!0,subtree:!0,attributes:!0,characterDataOldValue:!0},ao=ye.ie&&ye.ie_version<=11
class ho{constructor(t){this.view=t,this.active=!1,this.editContext=null,this.selectionRange=new Ye,this.selectionChanged=!1,this.delayedFlush=-1,this.resizeTimeout=-1,this.queue=[],this.delayedAndroidKey=null,this.flushingAndroidKey=-1,this.lastChange=0,this.scrollTargets=[],this.intersection=null,this.resizeScroll=null,this.intersecting=!1,this.gapIntersection=null,this.gaps=[],this.printQuery=null,this.parentCheck=-1,this.dom=t.contentDOM,this.observer=new MutationObserver(e=>{for(let t of e)this.queue.push(t);(ye.ie&&ye.ie_version<=11||ye.ios&&t.composing)&&e.some(t=>"childList"==t.type&&t.removedNodes.length||"characterData"==t.type&&t.oldValue.length>t.target.nodeValue.length)?this.flushSoon():this.flush()}),!window.EditContext||!ye.android||!1===t.constructor.EDIT_CONTEXT||ye.chrome&&ye.chrome_version<126||(this.editContext=new fo(t),t.state.facet(Vi)&&(t.contentDOM.editContext=this.editContext.editContext)),ao&&(this.onCharData=t=>{this.queue.push({target:t.target,type:"characterData",oldValue:t.prevValue}),this.flushSoon()}),this.onSelectionChange=this.onSelectionChange.bind(this),this.onResize=this.onResize.bind(this),this.onPrint=this.onPrint.bind(this),this.onScroll=this.onScroll.bind(this),window.matchMedia&&(this.printQuery=window.matchMedia("print")),"function"==typeof ResizeObserver&&(this.resizeScroll=new ResizeObserver(()=>{var t;(null===(t=this.view.docView)||void 0===t?void 0:t.lastUpdate)<Date.now()-75&&this.onResize()}),this.resizeScroll.observe(t.scrollDOM)),this.addWindowListeners(this.win=t.win),this.start(),"function"==typeof IntersectionObserver&&(this.intersection=new IntersectionObserver(t=>{this.parentCheck<0&&(this.parentCheck=setTimeout(this.listenForScroll.bind(this),1e3)),t.length>0&&t[t.length-1].intersectionRatio>0!=this.intersecting&&(this.intersecting=!this.intersecting,this.intersecting!=this.view.inView&&this.onScrollChanged(document.createEvent("Event")))},{threshold:[0,.001]}),this.intersection.observe(this.dom),this.gapIntersection=new IntersectionObserver(t=>{t.length>0&&t[t.length-1].intersectionRatio>0&&this.onScrollChanged(document.createEvent("Event"))},{})),this.listenForScroll(),this.readSelectionRange()}onScrollChanged(t){this.view.inputState.runHandlers("scroll",t),this.intersecting&&this.view.measure()}onScroll(t){this.intersecting&&this.flush(!1),this.editContext&&this.view.requestMeasure(this.editContext.measureReq),this.onScrollChanged(t)}onResize(){this.resizeTimeout<0&&(this.resizeTimeout=setTimeout(()=>{this.resizeTimeout=-1,this.view.requestMeasure()},50))}onPrint(t){("change"!=t.type&&t.type||t.matches)&&(this.view.viewState.printing=!0,this.view.measure(),setTimeout(()=>{this.view.viewState.printing=!1,this.view.requestMeasure()},500))}updateGaps(t){if(this.gapIntersection&&(t.length!=this.gaps.length||this.gaps.some((e,i)=>e!=t[i]))){this.gapIntersection.disconnect()
for(let e of t)this.gapIntersection.observe(e)
this.gaps=t}}onSelectionChange(t){let e=this.selectionChanged
if(!this.readSelectionRange()||this.delayedAndroidKey)return
let{view:i}=this,n=this.selectionRange
if(i.state.facet(Vi)?i.root.activeElement!=this.dom:!We(this.dom,n))return
let s=n.anchorNode&&i.docView.tile.nearest(n.anchorNode)
s&&s.isWidget()&&s.widget.ignoreEvent(t)?e||(this.selectionChanged=!1):(ye.ie&&ye.ie_version<=11||ye.android&&ye.chrome)&&!i.state.selection.main.empty&&n.focusNode&&Ve(n.focusNode,n.focusOffset,n.anchorNode,n.anchorOffset)?this.flushSoon():this.flush(!1)}readSelectionRange(){let{view:t}=this,e=Pe(t.root)
if(!e)return!1
let i=ye.safari&&11==t.root.nodeType&&t.root.activeElement==this.dom&&function(t,e){if(e.getComposedRanges){let i=e.getComposedRanges(t.root)[0]
if(i)return uo(t,i)}let i=null
function n(t){t.preventDefault(),t.stopImmediatePropagation(),i=t.getTargetRanges()[0]}return t.contentDOM.addEventListener("beforeinput",n,!0),t.dom.ownerDocument.execCommand("indent"),t.contentDOM.removeEventListener("beforeinput",n,!0),i?uo(t,i):null}(this.view,e)||e
if(!i||this.selectionRange.eq(i))return!1
let n=We(this.dom,i)
return n&&!this.selectionChanged&&t.inputState.lastFocusTime>Date.now()-200&&t.inputState.lastTouchTime<Date.now()-300&&function(t,e){let i=e.focusNode,n=e.focusOffset
if(!i||e.anchorNode!=i||e.anchorOffset!=n)return!1
for(n=Math.min(n,_e(i));;)if(n){if(1!=i.nodeType)return!1
let t=i.childNodes[n-1]
"false"==t.contentEditable?n--:(i=t,n=_e(i))}else{if(i==t)return!0
n=Fe(i),i=i.parentNode}}(this.dom,i)?(this.view.inputState.lastFocusTime=0,t.docView.updateSelection(),!1):(this.selectionRange.setRange(i),n&&(this.selectionChanged=!0),!0)}setSelectionRange(t,e){this.selectionRange.set(t.node,t.offset,e.node,e.offset),this.selectionChanged=!1}clearSelectionRange(){this.selectionRange.set(null,0,null,0)}listenForScroll(){this.parentCheck=-1
let t=0,e=null
for(let i=this.dom;i;)if(1==i.nodeType)!e&&t<this.scrollTargets.length&&this.scrollTargets[t]==i?t++:e||(e=this.scrollTargets.slice(0,t)),e&&e.push(i),i=i.assignedSlot||i.parentNode
else{if(11!=i.nodeType)break
i=i.host}if(t<this.scrollTargets.length&&!e&&(e=this.scrollTargets.slice(0,t)),e){for(let t of this.scrollTargets)t.removeEventListener("scroll",this.onScroll)
for(let t of this.scrollTargets=e)t.addEventListener("scroll",this.onScroll)}}ignore(t){if(!this.active)return t()
try{return this.stop(),t()}finally{this.start(),this.clear()}}start(){this.active||(this.observer.observe(this.dom,lo),ao&&this.dom.addEventListener("DOMCharacterDataModified",this.onCharData),this.active=!0)}stop(){this.active&&(this.active=!1,this.observer.disconnect(),ao&&this.dom.removeEventListener("DOMCharacterDataModified",this.onCharData))}clear(){this.processRecords(),this.queue.length=0,this.selectionChanged=!1}delayAndroidKey(t,e){var i
if(!this.delayedAndroidKey){let t=()=>{let t=this.delayedAndroidKey
t&&(this.clearDelayedAndroidKey(),this.view.inputState.lastKeyCode=t.keyCode,this.view.inputState.lastKeyTime=Date.now(),!this.flush()&&t.force&&Ze(this.dom,t.key,t.keyCode))}
this.flushingAndroidKey=this.view.win.requestAnimationFrame(t)}this.delayedAndroidKey&&"Enter"!=t||(this.delayedAndroidKey={key:t,keyCode:e,force:this.lastChange<Date.now()-50||!!(null===(i=this.delayedAndroidKey)||void 0===i?void 0:i.force)})}clearDelayedAndroidKey(){this.win.cancelAnimationFrame(this.flushingAndroidKey),this.delayedAndroidKey=null,this.flushingAndroidKey=-1}flushSoon(){this.delayedFlush<0&&(this.delayedFlush=this.view.win.requestAnimationFrame(()=>{this.delayedFlush=-1,this.flush()}))}forceFlush(){this.delayedFlush>=0&&(this.view.win.cancelAnimationFrame(this.delayedFlush),this.delayedFlush=-1),this.flush()}pendingRecords(){for(let t of this.observer.takeRecords())this.queue.push(t)
return this.queue}processRecords(){let t=this.pendingRecords()
t.length&&(this.queue=[])
let e=-1,i=-1,n=!1
for(let s of t){let t=this.readMutation(s)
t&&(t.typeOver&&(n=!0),-1==e?({from:e,to:i}=t):(e=Math.min(t.from,e),i=Math.max(t.to,i)))}return{from:e,to:i,typeOver:n}}readChange(){let{from:t,to:e,typeOver:i}=this.processRecords(),n=this.selectionChanged&&We(this.dom,this.selectionRange)
if(t<0&&!n)return null
t>-1&&(this.lastChange=Date.now()),this.view.inputState.lastFocusTime=0,this.selectionChanged=!1
let s=new Un(this.view,t,e,i)
return this.view.docView.domChanged={newSel:s.newSel?s.newSel.main:null},s}flush(t=!0){if(this.delayedFlush>=0||this.delayedAndroidKey)return!1
t&&this.readSelectionRange()
let e=this.readChange()
if(!e)return this.view.requestMeasure(),!1
let i=this.view.state,n=Gn(this.view,e)
return this.view.state==i&&(e.domChanged||e.newSel&&!Qn(this.view.state.selection,e.newSel.main))&&this.view.update([]),n}readMutation(t){let e=this.view.docView.tile.nearest(t.target)
if(!e||e.isWidget())return null
if(e.markDirty("attributes"==t.type),"childList"==t.type){let i=co(e,t.previousSibling||t.target.previousSibling,-1),n=co(e,t.nextSibling||t.target.nextSibling,1)
return{from:i?e.posAfter(i):e.posAtStart,to:n?e.posBefore(n):e.posAtEnd,typeOver:!1}}return"characterData"==t.type?{from:e.posAtStart,to:e.posAtEnd,typeOver:t.target.nodeValue==t.oldValue}:null}setWindow(t){t!=this.win&&(this.removeWindowListeners(this.win),this.win=t,this.addWindowListeners(this.win))}addWindowListeners(t){t.addEventListener("resize",this.onResize),this.printQuery?this.printQuery.addEventListener?this.printQuery.addEventListener("change",this.onPrint):this.printQuery.addListener(this.onPrint):t.addEventListener("beforeprint",this.onPrint),t.addEventListener("scroll",this.onScroll),t.document.addEventListener("selectionchange",this.onSelectionChange)}removeWindowListeners(t){t.removeEventListener("scroll",this.onScroll),t.removeEventListener("resize",this.onResize),this.printQuery?this.printQuery.removeEventListener?this.printQuery.removeEventListener("change",this.onPrint):this.printQuery.removeListener(this.onPrint):t.removeEventListener("beforeprint",this.onPrint),t.document.removeEventListener("selectionchange",this.onSelectionChange)}update(t){this.editContext&&(this.editContext.update(t),t.startState.facet(Vi)!=t.state.facet(Vi)&&(t.view.contentDOM.editContext=t.state.facet(Vi)?this.editContext.editContext:null))}destroy(){var t,e,i
this.stop(),null===(t=this.intersection)||void 0===t||t.disconnect(),null===(e=this.gapIntersection)||void 0===e||e.disconnect(),null===(i=this.resizeScroll)||void 0===i||i.disconnect()
for(let n of this.scrollTargets)n.removeEventListener("scroll",this.onScroll)
this.removeWindowListeners(this.win),clearTimeout(this.parentCheck),clearTimeout(this.resizeTimeout),this.win.cancelAnimationFrame(this.delayedFlush),this.win.cancelAnimationFrame(this.flushingAndroidKey),this.editContext&&(this.view.contentDOM.editContext=null,this.editContext.destroy())}}function co(t,e,i){for(;e;){let n=on.get(e)
if(n&&n.parent==t)return n
let s=e.parentNode
e=s!=t.dom?s:i>0?e.nextSibling:e.previousSibling}return null}function uo(t,e){let i=e.startContainer,n=e.startOffset,s=e.endContainer,o=e.endOffset,r=t.docView.domAtPos(t.state.selection.main.anchor,1)
return Ve(r.node,r.offset,s,o)&&([i,n,s,o]=[s,o,i,n]),{anchorNode:i,anchorOffset:n,focusNode:s,focusOffset:o}}class fo{constructor(t){this.from=0,this.to=0,this.pendingContextChange=null,this.handlers=Object.create(null),this.composing=null,this.resetRange(t.state)
let e=this.editContext=new window.EditContext({text:t.state.doc.sliceString(this.from,this.to),selectionStart:this.toContextPos(Math.max(this.from,Math.min(this.to,t.state.selection.main.anchor))),selectionEnd:this.toContextPos(t.state.selection.main.head)})
this.handlers.textupdate=i=>{let n=t.state.selection.main,{anchor:s,head:o}=n,r=this.toEditorPos(i.updateRangeStart),l=this.toEditorPos(i.updateRangeEnd)
t.inputState.composing>=0&&!this.composing&&(this.composing={contextBase:i.updateRangeStart,editorBase:r,drifted:!1})
let a=l-r>i.text.length
r==this.from&&s<this.from?r=s:l==this.to&&s>this.to&&(l=s)
let h=Xn(t.state.sliceDoc(r,l),i.text,(a?n.from:n.to)-r,a?"end":null)
if(!h){let e=q.single(this.toEditorPos(i.selectionStart),this.toEditorPos(i.selectionEnd))
return void(Qn(e,n)||t.dispatch({selection:e,userEvent:"select"}))}let c={from:h.from+r,to:h.toA+r,insert:v.of(i.text.slice(h.from,h.toB).split("\n"))}
if((ye.mac||ye.android)&&c.from==o-1&&/^\. ?$/.test(i.text)&&"off"==t.contentDOM.getAttribute("autocorrect")&&(c={from:r,to:l,insert:v.of([i.text.replace("."," ")])}),this.pendingContextChange=c,!t.state.readOnly){let e=this.to-this.from+(c.to-c.from+c.insert.length)
Jn(t,c,q.single(this.toEditorPos(i.selectionStart,e),this.toEditorPos(i.selectionEnd,e)))}this.pendingContextChange&&(this.revertPending(t.state),this.setSelection(t.state)),c.from<c.to&&!c.insert.length&&t.inputState.composing>=0&&!/[\\p{Alphabetic}\\p{Number}_]/.test(e.text.slice(Math.max(0,i.updateRangeStart-1),Math.min(e.text.length,i.updateRangeStart+1)))&&this.handlers.compositionend(i)},this.handlers.characterboundsupdate=i=>{let n=[],s=null
for(let e=this.toEditorPos(i.rangeStart),o=this.toEditorPos(i.rangeEnd);e<o;e++){let i=t.coordsForChar(e)
s=i&&new DOMRect(i.left,i.top,i.right-i.left,i.bottom-i.top)||s||new DOMRect,n.push(s)}e.updateCharacterBounds(i.rangeStart,n)},this.handlers.textformatupdate=e=>{let i=[]
for(let t of e.getTextFormats()){let e=t.underlineStyle,n=t.underlineThickness
if(!/none/i.test(e)&&!/none/i.test(n)){let s=this.toEditorPos(t.rangeStart),o=this.toEditorPos(t.rangeEnd)
if(s<o){let t=`text-decoration: underline ${/^[a-z]/.test(e)?e+" ":"Dashed"==e?"dashed ":"Squiggle"==e?"wavy ":""}${/thin/i.test(n)?1:2}px`
i.push(Oe.mark({attributes:{style:t}}).range(s,o))}}}t.dispatch({effects:Wi.of(Oe.set(i))})},this.handlers.compositionstart=()=>{t.inputState.composing<0&&(t.inputState.composing=0,t.inputState.compositionFirstChange=!0)},this.handlers.compositionend=()=>{if(t.inputState.composing=-1,t.inputState.compositionFirstChange=null,this.composing){let{drifted:e}=this.composing
this.composing=null,e&&this.reset(t.state)}}
for(let i in this.handlers)e.addEventListener(i,this.handlers[i])
this.measureReq={read:t=>{this.editContext.updateControlBounds(t.contentDOM.getBoundingClientRect())
let e=Pe(t.root)
e&&e.rangeCount&&this.editContext.updateSelectionBounds(e.getRangeAt(0).getBoundingClientRect())}}}applyEdits(t){let e=0,i=!1,n=this.pendingContextChange
return t.changes.iterChanges((s,o,r,l,a)=>{if(i)return
let h=a.length-(o-s)
if(n&&o>=n.to){if(n.from==s&&n.to==o&&n.insert.eq(a))return n=this.pendingContextChange=null,e+=h,void(this.to+=h)
n=null,this.revertPending(t.state)}if(s+=e,(o+=e)<=this.from)this.from+=h,this.to+=h
else if(s<this.to){if(s<this.from||o>this.to||this.to-this.from+a.length>3e4)return void(i=!0)
this.editContext.updateText(this.toContextPos(s),this.toContextPos(o),a.toString()),this.to+=h}e+=h}),n&&!i&&this.revertPending(t.state),!i}update(t){let e=this.pendingContextChange,i=t.startState.selection.main
this.composing&&(this.composing.drifted||!t.changes.touchesRange(i.from,i.to)&&t.transactions.some(t=>!t.isUserEvent("input.type")&&t.changes.touchesRange(this.from,this.to)))?(this.composing.drifted=!0,this.composing.editorBase=t.changes.mapPos(this.composing.editorBase)):this.applyEdits(t)&&this.rangeIsValid(t.state)?(t.docChanged||t.selectionSet||e)&&this.setSelection(t.state):(this.pendingContextChange=null,this.reset(t.state)),(t.geometryChanged||t.docChanged||t.selectionSet)&&t.view.requestMeasure(this.measureReq)}resetRange(t){let{head:e}=t.selection.main
this.from=Math.max(0,e-1e4),this.to=Math.min(t.doc.length,e+1e4)}reset(t){this.resetRange(t),this.editContext.updateText(0,this.editContext.text.length,t.doc.sliceString(this.from,this.to)),this.setSelection(t)}revertPending(t){let e=this.pendingContextChange
this.pendingContextChange=null,this.editContext.updateText(this.toContextPos(e.from),this.toContextPos(e.from+e.insert.length),t.doc.sliceString(e.from,e.to))}setSelection(t){let{main:e}=t.selection,i=this.toContextPos(Math.max(this.from,Math.min(this.to,e.anchor))),n=this.toContextPos(e.head)
this.editContext.selectionStart==i&&this.editContext.selectionEnd==n||this.editContext.updateSelection(i,n)}rangeIsValid(t){let{head:e}=t.selection.main
return!(this.from>0&&e-this.from<500||this.to<t.doc.length&&this.to-e<500||this.to-this.from>3e4)}toEditorPos(t,e=this.to-this.from){t=Math.min(t,e)
let i=this.composing
return i&&i.drifted?i.editorBase+(t-i.contextBase):t+this.from}toContextPos(t){let e=this.composing
return e&&e.drifted?e.contextBase+(t-e.editorBase):t-this.from}destroy(){for(let t in this.handlers)this.editContext.removeEventListener(t,this.handlers[t])}}class po{get state(){return this.viewState.state}get viewport(){return this.viewState.viewport}get visibleRanges(){return this.viewState.visibleRanges}get inView(){return this.viewState.inView}get composing(){return!!this.inputState&&this.inputState.composing>0}get compositionStarted(){return!!this.inputState&&this.inputState.composing>=0}get root(){return this._root}get win(){return this.dom.ownerDocument.defaultView||window}constructor(t={}){var e
this.plugins=[],this.pluginMap=new Map,this.editorAttrs={},this.contentAttrs={},this.bidiCache=[],this.destroyed=!1,this.updateState=2,this.measureScheduled=-1,this.measureRequests=[],this.contentDOM=document.createElement("div"),this.scrollDOM=document.createElement("div"),this.scrollDOM.tabIndex=-1,this.scrollDOM.className="cm-scroller",this.scrollDOM.appendChild(this.contentDOM),this.announceDOM=document.createElement("div"),this.announceDOM.className="cm-announced",this.announceDOM.setAttribute("aria-live","polite"),this.dom=document.createElement("div"),this.dom.appendChild(this.announceDOM),this.dom.appendChild(this.scrollDOM),t.parent&&t.parent.appendChild(this.dom)
let{dispatch:i}=t
this.dispatchTransactions=t.dispatchTransactions||i&&(t=>t.forEach(t=>i(t,this)))||(t=>this.update(t)),this.dispatch=this.dispatch.bind(this),this._root=t.root||function(t){for(;t;){if(t&&(9==t.nodeType||11==t.nodeType&&t.host))return t
t=t.assignedSlot||t.parentNode}return null}(t.parent)||document,this.viewState=new js(this,t.state||Ot.create(t)),t.scrollTo&&t.scrollTo.is(Ni)&&(this.viewState.scrollTarget=t.scrollTo.value.clip(this.viewState.state)),this.plugins=this.state.facet(zi).map(t=>new _i(t))
for(let n of this.plugins)n.update(this)
this.observer=new ho(this),this.inputState=new Zn(this),this.inputState.ensureHandlers(this.plugins),this.docView=new On(this),this.mountStyles(),this.updateAttrs(),this.updateState=0,this.requestMeasure(),(null===(e=document.fonts)||void 0===e?void 0:e.ready)&&document.fonts.ready.then(()=>{this.viewState.mustMeasureContent="refresh",this.requestMeasure()})}dispatch(...t){let e=1==t.length&&t[0]instanceof wt?t:1==t.length&&Array.isArray(t[0])?t[0]:[this.state.update(...t)]
this.dispatchTransactions(e,this)}update(t){if(0!=this.updateState)throw new Error("Calls to EditorView.update are not allowed while an update is in progress")
let e,i=!1,n=!1,s=this.state
for(let u of t){if(u.startState!=s)throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.")
s=u.state}if(this.destroyed)return void(this.viewState.state=s)
let o=this.hasFocus,r=0,l=null
t.some(t=>t.annotation(bs))?(this.inputState.notifiedFocused=o,r=1):o!=this.inputState.notifiedFocused&&(this.inputState.notifiedFocused=o,l=ys(s,o),l||(r=1))
let a=this.observer.delayedAndroidKey,h=null
if(a?(this.observer.clearDelayedAndroidKey(),h=this.observer.readChange(),(h&&!this.state.doc.eq(s.doc)||!this.state.selection.eq(s.selection))&&(h=null)):this.observer.clear(),s.facet(Ot.phrases)!=this.state.facet(Ot.phrases))return this.setState(s)
e=nn.create(this,s,t),e.flags|=r
let c=this.viewState.scrollTarget
try{this.updateState=2
for(let e of t){if(c&&(c=c.map(e.changes)),e.scrollIntoView){let{main:t}=e.state.selection,{x:i,y:n}=this.state.facet(po.cursorScrollMargin)
c=new Pi(t.empty?t:q.cursor(t.head,t.head>t.anchor?-1:1),"nearest","nearest",n,i)}for(let t of e.effects)t.is(Ni)&&(c=t.value.clip(this.state))}this.viewState.update(e,c),this.bidiCache=vo.update(this.bidiCache,e.changes),e.empty||(this.updatePlugins(e),this.inputState.update(e)),i=this.docView.update(e),this.state.facet(tn)!=this.styleModules&&this.mountStyles(),n=this.updateAttrs(),this.showAnnouncements(t),this.docView.updateSelection(i,t.some(t=>t.isUserEvent("select.pointer")))}finally{this.updateState=0}if(e.startState.facet(Zs)!=e.state.facet(Zs)&&(this.viewState.mustMeasureContent=!0),(i||n||c||this.viewState.mustEnforceCursorAssoc||this.viewState.mustMeasureContent)&&this.requestMeasure(),i&&this.docViewUpdate(),!e.empty)for(let u of this.state.facet(Ti))try{u(e)}catch(t){Hi(this.state,t,"update listener")}(l||h)&&Promise.resolve().then(()=>{l&&this.state==l.startState&&this.dispatch(l),h&&!Gn(this,h)&&a.force&&Ze(this.contentDOM,a.key,a.keyCode)})}setState(t){if(0!=this.updateState)throw new Error("Calls to EditorView.setState are not allowed while an update is in progress")
if(this.destroyed)return void(this.viewState.state=t)
this.updateState=2
let e=this.hasFocus
try{for(let t of this.plugins)t.destroy(this)
this.viewState=new js(this,t),this.plugins=t.facet(zi).map(t=>new _i(t)),this.pluginMap.clear()
for(let t of this.plugins)t.update(this)
this.docView.destroy(),this.docView=new On(this),this.inputState.ensureHandlers(this.plugins),this.mountStyles(),this.updateAttrs(),this.bidiCache=[]}finally{this.updateState=0}e&&this.focus(),this.requestMeasure()}updatePlugins(t){let e=t.startState.facet(zi),i=t.state.facet(zi)
if(e!=i){let n=[]
for(let s of i){let i=e.indexOf(s)
if(i<0)n.push(new _i(s))
else{let e=this.plugins[i]
e.mustUpdate=t,n.push(e)}}for(let e of this.plugins)e.mustUpdate!=t&&e.destroy(this)
this.plugins=n,this.pluginMap.clear()}else for(let n of this.plugins)n.mustUpdate=t
for(let n=0;n<this.plugins.length;n++)this.plugins[n].update(this)
e!=i&&this.inputState.ensureHandlers(this.plugins)}docViewUpdate(){for(let e of this.plugins){let i=e.value
if(i&&i.docViewUpdate)try{i.docViewUpdate(this)}catch(t){Hi(this.state,t,"doc view update listener")}}}measure(t=!0){if(this.destroyed)return
if(this.measureScheduled>-1&&this.win.cancelAnimationFrame(this.measureScheduled),this.observer.delayedAndroidKey)return this.measureScheduled=-1,void this.requestMeasure()
this.measureScheduled=0,t&&this.observer.forceFlush()
let e=null,i=this.viewState.scrollParent,n=this.viewState.getScrollOffset(),{scrollAnchorPos:s,scrollAnchorHeight:o}=this.viewState
Math.abs(n-this.viewState.scrollOffset)>1&&(o=-1),this.viewState.scrollAnchorHeight=-1
try{for(let r=0;;r++){if(o<0)if(ti(i||this.win))s=-1,o=this.viewState.heightMap.height
else{let t=this.viewState.scrollAnchorAt(n)
s=t.from,o=t.top}this.updateState=1
let l=this.viewState.measure()
if(!l&&!this.measureRequests.length&&null==this.viewState.scrollTarget)break
if(r>5){console.warn(this.measureRequests.length?"Measure loop restarted more than 5 times":"Viewport failed to stabilize")
break}let a=[]
4&l||([this.measureRequests,a]=[a,this.measureRequests])
let h=a.map(t=>{try{return t.read(this)}catch(t){return Hi(this.state,t),go}}),c=nn.create(this,this.state,[]),u=!1
c.flags|=l,e?e.flags|=l:e=c,this.updateState=2,c.empty||(this.updatePlugins(c),this.inputState.update(c),this.updateAttrs(),u=this.docView.update(c),u&&this.docViewUpdate())
for(let e=0;e<a.length;e++)if(h[e]!=go)try{let t=a[e]
t.write&&t.write(h[e],this)}catch(t){Hi(this.state,t)}if(u&&this.docView.updateSelection(!0),!c.viewportChanged&&0==this.measureRequests.length){if(this.viewState.editorHeight){if(this.viewState.scrollTarget){this.docView.scrollIntoView(this.viewState.scrollTarget),this.viewState.scrollTarget=null,o=-1
continue}{let t=((s<0?this.viewState.heightMap.height:this.viewState.lineBlockAt(s).top)-o)/this.scaleY
if((t>1||t<-1)&&(i==this.scrollDOM||this.hasFocus||Math.max(this.inputState.lastWheelEvent,this.inputState.lastTouchTime)>Date.now()-100)){n+=t,i?i.scrollTop+=t:this.win.scrollBy(0,t),o=-1
continue}}}break}}}finally{this.updateState=0,this.measureScheduled=-1}if(e&&!e.empty)for(let r of this.state.facet(Ti))r(e)}get themeClasses(){return eo+" "+(this.state.facet(to)?no:io)+" "+this.state.facet(Zs)}updateAttrs(){let t=wo(this,Ki,{class:"cm-editor"+(this.hasFocus?" cm-focused ":" ")+this.themeClasses}),e={spellcheck:"false",autocorrect:"off",autocapitalize:"off",writingsuggestions:"false",translate:"no",contenteditable:this.state.facet(Vi)?"true":"false",class:"cm-content",style:`${ye.tabSize}: ${this.state.tabSize}`,role:"textbox","aria-multiline":"true"}
this.state.readOnly&&(e["aria-readonly"]="true"),wo(this,ji,e)
let i=this.observer.ignore(()=>{let i=Ce(this.contentDOM,this.contentAttrs,e),n=Ce(this.dom,this.editorAttrs,t)
return i||n})
return this.editorAttrs=t,this.contentAttrs=e,i}showAnnouncements(t){let e=!0
for(let i of t)for(let t of i.effects)t.is(po.announce)&&(e&&(this.announceDOM.textContent=""),e=!1,this.announceDOM.appendChild(document.createElement("div")).textContent=t.value)}mountStyles(){this.styleModules=this.state.facet(tn)
let t=this.state.facet(po.cspNonce)
Qt.mount(this.root,this.styleModules.concat(ro).reverse(),t?{nonce:t}:void 0)}readMeasured(){if(2==this.updateState)throw new Error("Reading the editor layout isn't allowed during an update")
0==this.updateState&&this.measureScheduled>-1&&this.measure(!1)}requestMeasure(t){if(this.measureScheduled<0&&(this.measureScheduled=this.win.requestAnimationFrame(()=>this.measure())),t){if(this.measureRequests.indexOf(t)>-1)return
if(null!=t.key)for(let e=0;e<this.measureRequests.length;e++)if(this.measureRequests[e].key===t.key)return void(this.measureRequests[e]=t)
this.measureRequests.push(t)}}plugin(t){let e=this.pluginMap.get(t)
return(void 0===e||e&&e.plugin!=t)&&this.pluginMap.set(t,e=this.plugins.find(e=>e.plugin==t)||null),e&&e.update(this).value}get documentTop(){return this.contentDOM.getBoundingClientRect().top+this.viewState.paddingTop}get documentPadding(){return{top:this.viewState.paddingTop,bottom:this.viewState.paddingBottom}}get scaleX(){return this.viewState.scaleX}get scaleY(){return this.viewState.scaleY}elementAtHeight(t){return this.readMeasured(),this.viewState.elementAtHeight(t)}lineBlockAtHeight(t){return this.readMeasured(),this.viewState.lineBlockAtHeight(t)}get viewportLineBlocks(){return this.viewState.viewportLines}lineBlockAt(t){return this.viewState.lineBlockAt(t)}get contentHeight(){return this.viewState.contentHeight}moveByChar(t,e,i){return Hn(this,t,Pn(this,t,e,i))}moveByGroup(t,e){return Hn(this,t,Pn(this,t,e,e=>function(t,e,i){let n=t.state.charCategorizer(e),s=n(i)
return t=>{let e=n(t)
return s==Mt.Space&&(s=e),s==e}}(this,t.head,e)))}visualLineSide(t,e){let i=this.bidiSpans(t),n=this.textDirectionAt(t.from),s=i[e?i.length-1:0]
return q.cursor(s.side(e,n)+t.from,s.forward(!e,n)?1:-1)}moveToLineBoundary(t,e,i=!0){return function(t,e,i,n){let s=In(t,e.head,e.assoc||-1),o=n&&s.type==Te.Text&&(t.lineWrapping||s.widgetLineBreaks)?t.coordsAtPos(e.assoc<0&&e.head>s.from?e.head-1:e.head):null
if(o){let e=t.dom.getBoundingClientRect(),n=t.textDirectionAt(s.from),r=t.posAtCoords({x:i==(n==si.LTR)?e.right-1:e.left+1,y:(o.top+o.bottom)/2})
if(null!=r)return q.cursor(r,i?-1:1)}return q.cursor(i?s.to:s.from,i?-1:1)}(this,t,e,i)}moveVertically(t,e,i){return Hn(this,t,function(t,e,i,n){let s=e.head,o=i?1:-1
if(s==(i?t.state.doc.length:0))return q.cursor(s,e.assoc)
let r,l=e.goalColumn,a=t.contentDOM.getBoundingClientRect(),h=t.coordsAtPos(s,e.assoc||((e.empty?i:e.head==e.from)?1:-1)),c=t.documentTop
if(h)null==l&&(l=h.left-a.left),r=o<0?h.top:h.bottom
else{let e=t.viewState.lineBlockAt(s)
null==l&&(l=Math.min(a.right-a.left,t.defaultCharacterWidth*(s-e.from))),r=(o<0?e.top:e.bottom)+c}let u=a.left+l,d=t.viewState.heightOracle.textHeight>>1,f=null!=n?n:d
for(let p=0;;p+=d){let e=r+(f+p)*o,n=Fn(t,{x:u,y:e},!1,o)
if(i?e>a.bottom:e<a.top)return q.cursor(n.pos,n.assoc)
let s=t.coordsAtPos(n.pos,n.assoc),h=s?(s.top+s.bottom)/2:0
if(!s||(i?h>r:h<r))return q.cursor(n.pos,n.assoc,void 0,l)}}(this,t,e,i))}domAtPos(t,e=1){return this.docView.domAtPos(t,e)}posAtDOM(t,e=0){return this.docView.posFromDOM(t,e)}posAtCoords(t,e=!0){this.readMeasured()
let i=Fn(this,t,e)
return i&&i.pos}posAndSideAtCoords(t,e=!0){return this.readMeasured(),Fn(this,t,e)}coordsAtPos(t,e=1){this.readMeasured()
let i=this.docView.coordsAt(t,e)
if(!i||i.left==i.right)return i
let n=this.state.doc.lineAt(t),s=this.bidiSpans(n)
return Ke(i,s[pi.find(s,t-n.from,-1,e)].dir==si.LTR==e>0)}coordsForChar(t){return this.readMeasured(),this.docView.coordsForChar(t)}get defaultCharacterWidth(){return this.viewState.heightOracle.charWidth}get defaultLineHeight(){return this.viewState.heightOracle.lineHeight}get textDirection(){return this.viewState.defaultTextDirection}textDirectionAt(t){return!this.state.facet(Ri)||t<this.viewport.from||t>this.viewport.to?this.textDirection:(this.readMeasured(),this.docView.textDirectionAt(t))}get lineWrapping(){return this.viewState.heightOracle.lineWrapping}bidiSpans(t){if(t.length>mo)return bi(t.length)
let e,i=this.textDirectionAt(t.from)
for(let s of this.bidiCache)if(s.from==t.from&&s.dir==i&&(s.fresh||mi(s.isolates,e=Xi(this,t))))return s.order
e||(e=Xi(this,t))
let n=function(t,e,i){if(!t)return[new pi(0,0,e==ri?1:0)]
if(e==oi&&!i.length&&!fi.test(t))return bi(t.length)
if(i.length)for(;t.length>gi.length;)gi[gi.length]=256
let n=[],s=e==oi?0:1
return wi(t,s,s,i,0,t.length,n),n}(t.text,i,e)
return this.bidiCache.push(new vo(t.from,t.to,i,e,!0,n)),n}get hasFocus(){var t
return(this.dom.ownerDocument.hasFocus()||ye.safari&&(null===(t=this.inputState)||void 0===t?void 0:t.lastContextMenu)>Date.now()-3e4)&&this.root.activeElement==this.contentDOM}focus(){this.observer.ignore(()=>{Xe(this.contentDOM),this.docView.updateSelection()})}setRoot(t){this._root!=t&&(this._root=t,this.observer.setWindow((9==t.nodeType?t:t.ownerDocument).defaultView||window),this.mountStyles())}destroy(){this.root.activeElement==this.contentDOM&&this.contentDOM.blur()
for(let t of this.plugins)t.destroy(this)
this.plugins=[],this.inputState.destroy(),this.docView.destroy(),this.dom.remove(),this.observer.destroy(),this.measureScheduled>-1&&this.win.cancelAnimationFrame(this.measureScheduled),this.destroyed=!0}static scrollIntoView(t,e={}){var i,n,s,o
return Ni.of(new Pi("number"==typeof t?q.cursor(t):t,null!==(i=e.y)&&void 0!==i?i:"nearest",null!==(n=e.x)&&void 0!==n?n:"nearest",null!==(s=e.yMargin)&&void 0!==s?s:5,null!==(o=e.xMargin)&&void 0!==o?o:5))}scrollSnapshot(){let{scrollTop:t,scrollLeft:e}=this.scrollDOM,i=this.viewState.scrollAnchorAt(t)
return Ni.of(new Pi(q.cursor(i.from),"start","start",i.top-t,e,!0))}setTabFocusMode(t){null==t?this.inputState.tabFocusMode=this.inputState.tabFocusMode<0?0:-1:"boolean"==typeof t?this.inputState.tabFocusMode=t?0:-1:0!=this.inputState.tabFocusMode&&(this.inputState.tabFocusMode=Date.now()+t)}static domEventHandlers(t){return qi.define(()=>({}),{eventHandlers:t})}static domEventObservers(t){return qi.define(()=>({}),{eventObservers:t})}static theme(t,e){let i=Qt.newName(),n=[Zs.of(i),tn.of(oo(`.${i}`,t))]
return e&&e.dark&&n.push(to.of(!0)),n}static baseTheme(t){return tt.lowest(tn.of(oo("."+eo,t,so)))}static findFromDOM(t){var e
let i=t.querySelector(".cm-content"),n=i&&on.get(i)||on.get(t)
return(null===(e=null==n?void 0:n.root)||void 0===e?void 0:e.view)||null}}po.styleModule=tn,po.inputHandler=Oi,po.clipboardInputFilter=Ei,po.clipboardOutputFilter=Bi,po.scrollHandler=Ii,po.focusChangeEffect=Di,po.perLineTextDirection=Ri,po.exceptionSink=Ai,po.updateListener=Ti,po.editable=Vi,po.mouseSelectionStyle=Mi,po.dragMovesSelection=Ci,po.clickAddsSelectionRange=Si,po.decorations=$i,po.blockWrappers=Ui,po.outerDecorations=Yi,po.atomicRanges=Gi,po.bidiIsolatedRanges=Ji,po.cursorScrollMargin=j.define({combine:t=>{let e=5,i=5
for(let n of t)"number"==typeof n?e=i=n:({x:e,y:i}=n)
return{x:e,y:i}}}),po.scrollMargins=Qi,po.darkTheme=to,po.cspNonce=j.define({combine:t=>t.length?t[0]:""}),po.contentAttributes=ji,po.editorAttributes=Ki,po.lineWrapping=po.contentAttributes.of({class:"cm-lineWrapping"}),po.announce=vt.define()
const mo=4096,go={}
class vo{constructor(t,e,i,n,s,o){this.from=t,this.to=e,this.dir=i,this.isolates=n,this.fresh=s,this.order=o}static update(t,e){if(e.empty&&!t.some(t=>t.fresh))return t
let i=[],n=t.length?t[t.length-1].dir:si.LTR
for(let s=Math.max(0,t.length-10);s<t.length;s++){let o=t[s]
o.dir!=n||e.touchesRange(o.from,o.to)||i.push(new vo(e.mapPos(o.from,1),e.mapPos(o.to,-1),o.dir,o.isolates,!1,o.order))}return i}}function wo(t,e,i){for(let n=t.state.facet(e),s=n.length-1;s>=0;s--){let e=n[s],o="function"==typeof e?e(t):e
o&&xe(o,i)}return i}const bo=ye.mac?"mac":ye.windows?"win":ye.linux?"linux":"key"
function yo(t,e,i){return e.altKey&&(t="Alt-"+t),e.ctrlKey&&(t="Ctrl-"+t),e.metaKey&&(t="Meta-"+t),!1!==i&&e.shiftKey&&(t="Shift-"+t),t}const xo=j.define({enables:tt.default(po.domEventHandlers({keydown:(t,e)=>Ao(So(e.state),t,e,"editor")}))}),ko=new WeakMap
function So(t){let e=t.facet(xo),i=ko.get(e)
return i||ko.set(e,i=function(t,e=bo){let i=Object.create(null),n=Object.create(null),s=(t,e)=>{let i=n[t]
if(null==i)n[t]=e
else if(i!=e)throw new Error("Key binding "+t+" is used both as a regular binding and as a multi-stroke prefix")},o=(t,n,o,r,l)=>{var a,h
let c=i[t]||(i[t]=Object.create(null)),u=n.split(/ (?!$)/).map(t=>function(t,e){const i=t.split(/-(?!$)/)
let n,s,o,r,l=i[i.length-1]
"Space"==l&&(l=" ")
for(let a=0;a<i.length-1;++a){const t=i[a]
if(/^(cmd|meta|m)$/i.test(t))r=!0
else if(/^a(lt)?$/i.test(t))n=!0
else if(/^(c|ctrl|control)$/i.test(t))s=!0
else if(/^s(hift)?$/i.test(t))o=!0
else{if(!/^mod$/i.test(t))throw new Error("Unrecognized modifier name: "+t)
"mac"==e?r=!0:s=!0}}return n&&(l="Alt-"+l),s&&(l="Ctrl-"+l),r&&(l="Meta-"+l),o&&(l="Shift-"+l),l}(t,e))
for(let e=1;e<u.length;e++){let i=u.slice(0,e).join(" ")
s(i,!0),c[i]||(c[i]={preventDefault:!0,stopPropagation:!1,run:[e=>{let n=Co={view:e,prefix:i,scope:t}
return setTimeout(()=>{Co==n&&(Co=null)},4e3),!0}]})}let d=u.join(" ")
s(d,!1)
let f=c[d]||(c[d]={preventDefault:!1,stopPropagation:!1,run:(null===(h=null===(a=c._any)||void 0===a?void 0:a.run)||void 0===h?void 0:h.slice())||[]})
o&&f.run.push(o),r&&(f.preventDefault=!0),l&&(f.stopPropagation=!0)}
for(let r of t){let t=r.scope?r.scope.split(" "):["editor"]
if(r.any)for(let e of t){let t=i[e]||(i[e]=Object.create(null))
t._any||(t._any={preventDefault:!1,stopPropagation:!1,run:[]})
let{any:n}=r
for(let e in t)t[e].run.push(t=>n(t,Mo))}let n=r[e]||r.key
if(n)for(let e of t)o(e,n,r.run,r.preventDefault,r.stopPropagation),r.shift&&o(e,"Shift-"+n,r.shift,r.preventDefault,r.stopPropagation)}return i}(e.reduce((t,e)=>t.concat(e),[]))),i}let Co=null,Mo=null
function Ao(t,e,i,n){Mo=e
let s=function(t){var e=!(ne&&t.metaKey&&t.shiftKey&&!t.ctrlKey&&!t.altKey||se&&t.shiftKey&&t.key&&1==t.key.length||"Unidentified"==t.key)&&t.key||(t.shiftKey?ie:ee)[t.keyCode]||t.key||"Unidentified"
return"Esc"==e&&(e="Escape"),"Del"==e&&(e="Delete"),"Left"==e&&(e="ArrowLeft"),"Up"==e&&(e="ArrowUp"),"Right"==e&&(e="ArrowRight"),"Down"==e&&(e="ArrowDown"),e}(e),o=E(O(s,0))==s.length&&" "!=s,r="",l=!1,a=!1,h=!1
Co&&Co.view==i&&Co.scope==n&&(r=Co.prefix+" ",ns.indexOf(e.keyCode)<0&&(a=!0,Co=null))
let c,u,d=new Set,f=t=>{if(t){for(let e of t.run)if(!d.has(e)&&(d.add(e),e(i)))return t.stopPropagation&&(h=!0),!0
t.preventDefault&&(t.stopPropagation&&(h=!0),a=!0)}return!1},p=t[n]
return p&&(f(p[r+yo(s,e,!o)])?l=!0:!o||!(e.altKey||e.metaKey||e.ctrlKey)||ye.windows&&e.ctrlKey&&e.altKey||ye.mac&&e.altKey&&!e.ctrlKey&&!e.metaKey||!(c=ee[e.keyCode])||c==s?o&&e.shiftKey&&f(p[r+yo(s,e,!0)])&&(l=!0):(f(p[r+yo(c,e,!0)])||e.shiftKey&&(u=ie[e.keyCode])!=s&&u!=c&&f(p[r+yo(u,e,!1)]))&&(l=!0),!l&&f(p._any)&&(l=!0)),a&&(l=!0),l&&h&&e.stopPropagation(),Mo=null,l}class To{constructor(t,e,i,n,s){this.className=t,this.left=e,this.top=i,this.width=n,this.height=s}draw(){let t=document.createElement("div")
return t.className=this.className,this.adjust(t),t}update(t,e){return e.className==this.className&&(this.adjust(t),!0)}adjust(t){t.style.left=this.left+"px",t.style.top=this.top+"px",null!=this.width&&(t.style.width=this.width+"px"),t.style.height=this.height+"px"}eq(t){return this.left==t.left&&this.top==t.top&&this.width==t.width&&this.height==t.height&&this.className==t.className}static forRange(t,e,i){if(i.empty){let n=t.coordsAtPos(i.head,i.assoc||1)
if(!n)return[]
let s=Oo(t)
return[new To(e,n.left-s.left,n.top-s.top,null,n.bottom-n.top)]}return function(t,e,i){if(i.to<=t.viewport.from||i.from>=t.viewport.to)return[]
let n=Math.max(i.from,t.viewport.from),s=Math.min(i.to,t.viewport.to),o=t.textDirection==si.LTR,r=t.contentDOM,l=r.getBoundingClientRect(),a=Oo(t),h=r.querySelector(".cm-line"),c=h&&window.getComputedStyle(h),u=l.left+(c?parseInt(c.paddingLeft)+Math.min(0,parseInt(c.textIndent)):0),d=l.right-(c?parseInt(c.paddingRight):0),f=In(t,n,1),p=In(t,s,-1),m=f.type==Te.Text?f:null,g=p.type==Te.Text?p:null
if(m&&(t.lineWrapping||f.widgetLineBreaks)&&(m=Do(t,n,1,m)),g&&(t.lineWrapping||p.widgetLineBreaks)&&(g=Do(t,s,-1,g)),m&&g&&m.from==g.from&&m.to==g.to)return w(b(i.from,i.to,m))
{let e=m?b(i.from,null,m):y(f,!1),n=g?b(null,i.to,g):y(p,!0),s=[]
return(m||f).to<(g||p).from-(m&&g?1:0)||f.widgetLineBreaks>1&&e.bottom+t.defaultLineHeight/2<n.top?s.push(v(u,e.bottom,d,n.top)):e.bottom<n.top&&t.elementAtHeight((e.bottom+n.top)/2).type==Te.Text&&(e.bottom=n.top=(e.bottom+n.top)/2),w(e).concat(s).concat(w(n))}function v(t,i,n,s){return new To(e,t-a.left,i-a.top,Math.max(0,n-t),s-i)}function w({top:t,bottom:e,horizontal:i}){let n=[]
for(let s=0;s<i.length;s+=2)n.push(v(i[s],t,i[s+1],e))
return n}function b(e,i,n){let s=1e9,r=-1e9,l=[]
function a(e,i,a,h,c){let f=t.coordsAtPos(e,e==n.to?-2:2),p=t.coordsAtPos(a,a==n.from?2:-2)
f&&p&&(s=Math.min(f.top,p.top,s),r=Math.max(f.bottom,p.bottom,r),c==si.LTR?l.push(o&&i?u:f.left,o&&h?d:p.right):l.push(!o&&h?u:p.left,!o&&i?d:f.right))}let h=null!=e?e:n.from,c=null!=i?i:n.to
for(let o of t.visibleRanges)if(o.to>h&&o.from<c)for(let n=Math.max(o.from,h),s=Math.min(o.to,c);;){let o=t.state.doc.lineAt(n)
for(let r of t.bidiSpans(o)){let t=r.from+o.from,l=r.to+o.from
if(t>=s)break
l>n&&a(Math.max(t,n),null==e&&t<=h,Math.min(l,s),null==i&&l>=c,r.dir)}if(n=o.to+1,n>=s)break}return 0==l.length&&a(h,null==e,c,null==i,t.textDirection),{top:s,bottom:r,horizontal:l}}function y(t,e){let i=l.top+(e?t.top:t.bottom)
return{top:i,bottom:i,horizontal:[]}}}(t,e,i)}}function Oo(t){let e=t.scrollDOM.getBoundingClientRect()
return{left:(t.textDirection==si.LTR?e.left:e.right-t.scrollDOM.clientWidth*t.scaleX)-t.scrollDOM.scrollLeft*t.scaleX,top:e.top-t.scrollDOM.scrollTop*t.scaleY}}function Do(t,e,i,n){let s=t.coordsAtPos(e,2*i)
if(!s)return n
let o=t.dom.getBoundingClientRect(),r=(s.top+s.bottom)/2,l=t.posAtCoords({x:o.left+1,y:r}),a=t.posAtCoords({x:o.right-1,y:r})
return null==l||null==a?n:{from:Math.max(n.from,Math.min(l,a)),to:Math.min(n.to,Math.max(l,a))}}class Eo{constructor(t,e){this.view=t,this.layer=e,this.drawn=[],this.scaleX=1,this.scaleY=1,this.measureReq={read:this.measure.bind(this),write:this.draw.bind(this)},this.dom=t.scrollDOM.appendChild(document.createElement("div")),this.dom.classList.add("cm-layer"),e.above&&this.dom.classList.add("cm-layer-above"),e.class&&this.dom.classList.add(e.class),this.scale(),this.dom.setAttribute("aria-hidden","true"),this.setOrder(t.state),t.requestMeasure(this.measureReq),e.mount&&e.mount(this.dom,t)}update(t){t.startState.facet(Bo)!=t.state.facet(Bo)&&this.setOrder(t.state),(this.layer.update(t,this.dom)||t.geometryChanged)&&(this.scale(),t.view.requestMeasure(this.measureReq))}docViewUpdate(t){!1!==this.layer.updateOnDocViewUpdate&&t.requestMeasure(this.measureReq)}setOrder(t){let e=0,i=t.facet(Bo)
for(;e<i.length&&i[e]!=this.layer;)e++
this.dom.style.zIndex=String((this.layer.above?150:-1)-e)}measure(){return this.layer.markers(this.view)}scale(){let{scaleX:t,scaleY:e}=this.view
t==this.scaleX&&e==this.scaleY||(this.scaleX=t,this.scaleY=e,this.dom.style.transform=`scale(${1/t}, ${1/e})`)}draw(t){if(t.length!=this.drawn.length||t.some((t,e)=>{return i=t,n=this.drawn[e],!(i.constructor==n.constructor&&i.eq(n))
var i,n})){let e=this.dom.firstChild,i=0
for(let n of t)n.update&&e&&n.constructor&&this.drawn[i].constructor&&n.update(e,this.drawn[i])?(e=e.nextSibling,i++):this.dom.insertBefore(n.draw(),e)
for(;e;){let t=e.nextSibling
e.remove(),e=t}this.drawn=t,ye.webkit&&(this.dom.style.display=this.dom.firstChild?"":"none")}}destroy(){this.layer.destroy&&this.layer.destroy(this.dom,this.view),this.dom.remove()}}const Bo=j.define()
function Ro(t){return[qi.define(e=>new Eo(e,t)),Bo.of(t)]}const Lo=j.define({combine:t=>Dt(t,{cursorBlinkRate:1200,drawRangeCursor:!0,iosSelectionHandles:!0},{cursorBlinkRate:(t,e)=>Math.min(t,e),drawRangeCursor:(t,e)=>t||e})})
function Io(t){return t.startState.facet(Lo)!=t.state.facet(Lo)}const Po=Ro({above:!0,markers(t){let{state:e}=t,i=e.facet(Lo),n=[]
for(let s of e.selection.ranges){let o=s==e.selection.main
if(s.empty||i.drawRangeCursor&&!(o&&ye.ios&&i.iosSelectionHandles)){let e=o?"cm-cursor cm-cursor-primary":"cm-cursor cm-cursor-secondary",i=s.empty?s:q.cursor(s.head,s.assoc)
for(let s of To.forRange(t,e,i))n.push(s)}}return n},update(t,e){t.transactions.some(t=>t.selection)&&(e.style.animationName="cm-blink"==e.style.animationName?"cm-blink2":"cm-blink")
let i=Io(t)
return i&&No(t.state,e),t.docChanged||t.selectionSet||i},mount(t,e){No(e.state,t)},class:"cm-cursorLayer"})
function No(t,e){e.style.animationDuration=t.facet(Lo).cursorBlinkRate+"ms"}const Wo=Ro({above:!1,markers(t){let e=[],{main:i,ranges:n}=t.state.selection
for(let s of n)if(!s.empty)for(let i of To.forRange(t,"cm-selectionBackground",s))e.push(i)
if(ye.ios&&!i.empty&&t.state.facet(Lo).iosSelectionHandles){for(let n of To.forRange(t,"cm-selectionHandle cm-selectionHandle-start",q.cursor(i.from,1)))e.push(n)
for(let n of To.forRange(t,"cm-selectionHandle cm-selectionHandle-end",q.cursor(i.to,1)))e.push(n)}return e},update:(t,e)=>t.docChanged||t.selectionSet||t.viewportChanged||Io(t),class:"cm-selectionLayer"}),Ho=tt.highest(po.theme({".cm-line":{"& ::selection, &::selection":{backgroundColor:"transparent !important"},caretColor:"transparent !important"},".cm-content":{caretColor:"transparent !important","& :focus":{caretColor:"initial !important","&::selection, & ::selection":{backgroundColor:"Highlight !important"}}}})),Vo=vt.define({map:(t,e)=>null==t?null:e.mapPos(t)}),Fo=Q.define({create:()=>null,update:(t,e)=>(null!=t&&(t=e.changes.mapPos(t)),e.effects.reduce((t,e)=>e.is(Vo)?e.value:t,t))}),zo=qi.fromClass(class{constructor(t){this.view=t,this.cursor=null,this.measureReq={read:this.readPos.bind(this),write:this.drawCursor.bind(this)}}update(t){var e
let i=t.state.field(Fo)
null==i?null!=this.cursor&&(null===(e=this.cursor)||void 0===e||e.remove(),this.cursor=null):(this.cursor||(this.cursor=this.view.scrollDOM.appendChild(document.createElement("div")),this.cursor.className="cm-dropCursor"),(t.startState.field(Fo)!=i||t.docChanged||t.geometryChanged)&&this.view.requestMeasure(this.measureReq))}readPos(){let{view:t}=this,e=t.state.field(Fo),i=null!=e&&t.coordsAtPos(e)
if(!i)return null
let n=t.scrollDOM.getBoundingClientRect()
return{left:i.left-n.left+t.scrollDOM.scrollLeft*t.scaleX,top:i.top-n.top+t.scrollDOM.scrollTop*t.scaleY,height:i.bottom-i.top}}drawCursor(t){if(this.cursor){let{scaleX:e,scaleY:i}=this.view
t?(this.cursor.style.left=t.left/e+"px",this.cursor.style.top=t.top/i+"px",this.cursor.style.height=t.height/i+"px"):this.cursor.style.left="-100000px"}}destroy(){this.cursor&&this.cursor.remove()}setDropPos(t){this.view.state.field(Fo)!=t&&this.view.dispatch({effects:Vo.of(t)})}},{eventObservers:{dragover(t){this.setDropPos(this.view.posAtCoords({x:t.clientX,y:t.clientY}))},dragleave(t){t.target!=this.view.contentDOM&&this.view.contentDOM.contains(t.relatedTarget)||this.setDropPos(null)},dragend(){this.setDropPos(null)},drop(){this.setDropPos(null)}}})
function qo(t,e,i,n,s){e.lastIndex=0
for(let o,r=t.iterRange(i,n),l=i;!r.next().done;l+=r.value.length)if(!r.lineBreak)for(;o=e.exec(r.value);)s(l+o.index,o)}class _o{constructor(t){const{regexp:e,decoration:i,decorate:n,boundary:s,maxLength:o=1e3}=t
if(!e.global)throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set")
if(this.regexp=e,n)this.addMatch=(t,e,i,s)=>n(s,i,i+t[0].length,t,e)
else if("function"==typeof i)this.addMatch=(t,e,n,s)=>{let o=i(t,e,n)
o&&s(n,n+t[0].length,o)}
else{if(!i)throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator")
this.addMatch=(t,e,n,s)=>s(n,n+t[0].length,i)}this.boundary=s,this.maxLength=o}createDeco(t){let e=new Nt,i=e.add.bind(e)
for(let{from:n,to:s}of function(t,e){let i=t.visibleRanges
if(1==i.length&&i[0].from==t.viewport.from&&i[0].to==t.viewport.to)return i
let n=[]
for(let{from:s,to:o}of i)s=Math.max(t.state.doc.lineAt(s).from,s-e),o=Math.min(t.state.doc.lineAt(o).to,o+e),n.length&&n[n.length-1].to>=s?n[n.length-1].to=o:n.push({from:s,to:o})
return n}(t,this.maxLength))qo(t.state.doc,this.regexp,n,s,(e,n)=>this.addMatch(n,t,e,i))
return e.finish()}updateDeco(t,e){let i=1e9,n=-1
return t.docChanged&&t.changes.iterChanges((e,s,o,r)=>{r>=t.view.viewport.from&&o<=t.view.viewport.to&&(i=Math.min(o,i),n=Math.max(r,n))}),t.viewportMoved||n-i>1e3?this.createDeco(t.view):n>-1?this.updateRange(t.view,e.map(t.changes),i,n):e}updateRange(t,e,i,n){for(let s of t.visibleRanges){let o=Math.max(s.from,i),r=Math.min(s.to,n)
if(r>=o){let i=t.state.doc.lineAt(o),n=i.to<r?t.state.doc.lineAt(r):i,l=Math.max(s.from,i.from),a=Math.min(s.to,n.to)
if(this.boundary){for(;o>i.from;o--)if(this.boundary.test(i.text[o-1-i.from])){l=o
break}for(;r<n.to;r++)if(this.boundary.test(n.text[r-n.from])){a=r
break}}let h,c=[],u=(t,e,i)=>c.push(i.range(t,e))
if(i==n)for(this.regexp.lastIndex=l-i.from;(h=this.regexp.exec(i.text))&&h.index<a-i.from;)this.addMatch(h,t,h.index+i.from,u)
else qo(t.state.doc,this.regexp,l,a,(e,i)=>this.addMatch(i,t,e,u))
e=e.update({filterFrom:l,filterTo:a,filter:(t,e)=>t<l||e>a,add:c})}}return e}}const Ko=null!=/x/.unicode?"gu":"g",jo=new RegExp("[\0-\b\n--­؜​‎‏\u2028\u2029‭‮⁦⁧⁩\ufeff￹-￼]",Ko),$o={0:"null",7:"bell",8:"backspace",10:"newline",11:"vertical tab",13:"carriage return",27:"escape",8203:"zero width space",8204:"zero width non-joiner",8205:"zero width joiner",8206:"left-to-right mark",8207:"right-to-left mark",8232:"line separator",8237:"left-to-right override",8238:"right-to-left override",8294:"left-to-right isolate",8295:"right-to-left isolate",8297:"pop directional isolate",8233:"paragraph separator",65279:"zero width no-break space",65532:"object replacement"}
let Uo=null
const Yo=j.define({combine(t){let e=Dt(t,{render:null,specialChars:jo,addSpecialChars:null})
return(e.replaceTabs=!function(){var t
if(null==Uo&&"undefined"!=typeof document&&document.body){let e=document.body.style
Uo=null!=(null!==(t=e.tabSize)&&void 0!==t?t:e.MozTabSize)}return Uo||!1}())&&(e.specialChars=new RegExp("\t|"+e.specialChars.source,Ko)),e.addSpecialChars&&(e.specialChars=new RegExp(e.specialChars.source+"|"+e.addSpecialChars.source,Ko)),e}})
let Go=null
class Jo extends Ae{constructor(t,e){super(),this.options=t,this.code=e}eq(t){return t.code==this.code}toDOM(t){let e=function(t){return t>=32?"•":10==t?"␤":String.fromCharCode(9216+t)}(this.code),i=t.state.phrase("Control character")+" "+($o[this.code]||"0x"+this.code.toString(16)),n=this.options.render&&this.options.render(this.code,i,e)
if(n)return n
let s=document.createElement("span")
return s.textContent=e,s.title=i,s.setAttribute("aria-label",i),s.className="cm-specialChar",s}ignoreEvent(){return!1}}class Xo extends Ae{constructor(t){super(),this.width=t}eq(t){return t.width==this.width}toDOM(){let t=document.createElement("span")
return t.textContent="\t",t.className="cm-tab",t.style.width=this.width+"px",t}ignoreEvent(){return!1}}const Qo=Oe.line({class:"cm-activeLine"}),Zo=qi.fromClass(class{constructor(t){this.decorations=this.getDeco(t)}update(t){(t.docChanged||t.selectionSet)&&(this.decorations=this.getDeco(t.view))}getDeco(t){let e=-1,i=[]
for(let n of t.state.selection.ranges){let s=t.lineBlockAt(n.head)
s.from>e&&(i.push(Qo.range(s.from)),e=s.from)}return Oe.set(i)}},{decorations:t=>t.decorations})
class tr extends Ae{constructor(t){super(),this.content=t}toDOM(t){let e=document.createElement("span")
return e.className="cm-placeholder",e.style.pointerEvents="none",e.appendChild("string"==typeof this.content?document.createTextNode(this.content):"function"==typeof this.content?this.content(t):this.content.cloneNode(!0)),e.setAttribute("aria-hidden","true"),e}coordsAt(t){let e=t.firstChild?He(t.firstChild):[]
if(!e.length)return null
let i=window.getComputedStyle(t.parentNode),n=Ke(e[0],"rtl"!=i.direction),s=parseInt(i.lineHeight)
return n.bottom-n.top>1.5*s?{left:n.left,right:n.right,top:n.top,bottom:n.top+s}:n}ignoreEvent(){return!1}}const er=2e3
function ir(t,e){let i=t.posAtCoords({x:e.clientX,y:e.clientY},!1),n=t.state.doc.lineAt(i),s=i-n.from,o=s>er?-1:s==n.length?function(t,e){let i=t.coordsAtPos(t.viewport.from)
return i?Math.round(Math.abs((i.left-e)/t.defaultCharacterWidth)):-1}(t,e.clientX):Ut(n.text,t.state.tabSize,i-n.from)
return{line:n.number,col:o,off:s}}const nr={Alt:[18,t=>!!t.altKey],Control:[17,t=>!!t.ctrlKey],Shift:[16,t=>!!t.shiftKey],Meta:[91,t=>!!t.metaKey]},sr={style:"cursor: crosshair"},or="-10000px"
class rr{constructor(t,e,i,n){this.facet=e,this.createTooltipView=i,this.removeTooltipView=n,this.input=t.state.facet(e),this.tooltips=this.input.filter(t=>t)
let s=null
this.tooltipViews=this.tooltips.map(t=>s=i(t,s))}update(t,e){var i
let n=t.state.facet(this.facet),s=n.filter(t=>t)
if(n===this.input){for(let e of this.tooltipViews)e.update&&e.update(t)
return!1}let o=[],r=e?[]:null
for(let l=0;l<s.length;l++){let i=s[l],n=-1
if(i){for(let t=0;t<this.tooltips.length;t++){let e=this.tooltips[t]
e&&e.create==i.create&&(n=t)}if(n<0)o[l]=this.createTooltipView(i,l?o[l-1]:null),r&&(r[l]=!!i.above)
else{let i=o[l]=this.tooltipViews[n]
r&&(r[l]=e[n]),i.update&&i.update(t)}}}for(let l of this.tooltipViews)o.indexOf(l)<0&&(this.removeTooltipView(l),null===(i=l.destroy)||void 0===i||i.call(l))
return e&&(r.forEach((t,i)=>e[i]=t),e.length=r.length),this.input=n,this.tooltips=s,this.tooltipViews=o,!0}}function lr(t){let e=t.dom.ownerDocument.documentElement
return{top:0,left:0,bottom:e.clientHeight,right:e.clientWidth}}const ar=j.define({combine:t=>{var e,i,n
return{position:ye.ios?"absolute":(null===(e=t.find(t=>t.position))||void 0===e?void 0:e.position)||"fixed",parent:(null===(i=t.find(t=>t.parent))||void 0===i?void 0:i.parent)||null,tooltipSpace:(null===(n=t.find(t=>t.tooltipSpace))||void 0===n?void 0:n.tooltipSpace)||lr}}}),hr=new WeakMap,cr=qi.fromClass(class{constructor(t){this.view=t,this.above=[],this.inView=!0,this.madeAbsolute=!1,this.lastTransaction=0,this.measureTimeout=-1
let e=t.state.facet(ar)
this.position=e.position,this.parent=e.parent,this.classes=t.themeClasses,this.createContainer(),this.measureReq={read:this.readMeasure.bind(this),write:this.writeMeasure.bind(this),key:this},this.resizeObserver="function"==typeof ResizeObserver?new ResizeObserver(()=>this.measureSoon()):null,this.manager=new rr(t,fr,(t,e)=>this.createTooltip(t,e),t=>{this.resizeObserver&&this.resizeObserver.unobserve(t.dom),t.dom.remove()}),this.above=this.manager.tooltips.map(t=>!!t.above),this.intersectionObserver="function"==typeof IntersectionObserver?new IntersectionObserver(t=>{Date.now()>this.lastTransaction-50&&t.length>0&&t[t.length-1].intersectionRatio<1&&this.measureSoon()},{threshold:[1]}):null,this.observeIntersection(),t.win.addEventListener("resize",this.measureSoon=this.measureSoon.bind(this)),this.maybeMeasure()}createContainer(){this.parent?(this.container=document.createElement("div"),this.container.style.position="relative",this.container.className=this.view.themeClasses,this.parent.appendChild(this.container)):this.container=this.view.dom}observeIntersection(){if(this.intersectionObserver){this.intersectionObserver.disconnect()
for(let t of this.manager.tooltipViews)this.intersectionObserver.observe(t.dom)}}measureSoon(){this.measureTimeout<0&&(this.measureTimeout=setTimeout(()=>{this.measureTimeout=-1,this.maybeMeasure()},50))}update(t){t.transactions.length&&(this.lastTransaction=Date.now())
let e=this.manager.update(t,this.above)
e&&this.observeIntersection()
let i=e||t.geometryChanged,n=t.state.facet(ar)
if(n.position!=this.position&&!this.madeAbsolute){this.position=n.position
for(let t of this.manager.tooltipViews)t.dom.style.position=this.position
i=!0}if(n.parent!=this.parent){this.parent&&this.container.remove(),this.parent=n.parent,this.createContainer()
for(let t of this.manager.tooltipViews)this.container.appendChild(t.dom)
i=!0}else this.parent&&this.view.themeClasses!=this.classes&&(this.classes=this.container.className=this.view.themeClasses)
i&&this.maybeMeasure()}createTooltip(t,e){let i=t.create(this.view),n=e?e.dom:null
if(i.dom.classList.add("cm-tooltip"),t.arrow&&!i.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")){let t=document.createElement("div")
t.className="cm-tooltip-arrow",i.dom.appendChild(t)}return i.dom.style.position=this.position,i.dom.style.top=or,i.dom.style.left="0px",this.container.insertBefore(i.dom,n),i.mount&&i.mount(this.view),this.resizeObserver&&this.resizeObserver.observe(i.dom),i}destroy(){var t,e,i
this.view.win.removeEventListener("resize",this.measureSoon)
for(let n of this.manager.tooltipViews)n.dom.remove(),null===(t=n.destroy)||void 0===t||t.call(n)
this.parent&&this.container.remove(),null===(e=this.resizeObserver)||void 0===e||e.disconnect(),null===(i=this.intersectionObserver)||void 0===i||i.disconnect(),clearTimeout(this.measureTimeout)}readMeasure(){let t=1,e=1,i=!1
if("fixed"==this.position&&this.manager.tooltipViews.length){let{dom:t}=this.manager.tooltipViews[0]
if(ye.safari){let e=t.getBoundingClientRect()
i=Math.abs(e.top+1e4)>1||Math.abs(e.left)>1}else i=!!t.offsetParent&&t.offsetParent!=this.container.ownerDocument.body}if(i||"absolute"==this.position)if(this.parent){let i=this.parent.getBoundingClientRect()
i.width&&i.height&&(t=i.width/this.parent.offsetWidth,e=i.height/this.parent.offsetHeight)}else({scaleX:t,scaleY:e}=this.view.viewState)
let n=this.view.scrollDOM.getBoundingClientRect(),s=Zi(this.view)
return{visible:{left:n.left+s.left,top:n.top+s.top,right:n.right-s.right,bottom:n.bottom-s.bottom},parent:this.parent?this.container.getBoundingClientRect():this.view.dom.getBoundingClientRect(),pos:this.manager.tooltips.map((t,e)=>{let i=this.manager.tooltipViews[e]
return i.getCoords?i.getCoords(t.pos):this.view.coordsAtPos(t.pos)}),size:this.manager.tooltipViews.map(({dom:t})=>t.getBoundingClientRect()),space:this.view.state.facet(ar).tooltipSpace(this.view),scaleX:t,scaleY:e,makeAbsolute:i}}writeMeasure(t){var e
if(t.makeAbsolute){this.madeAbsolute=!0,this.position="absolute"
for(let t of this.manager.tooltipViews)t.dom.style.position="absolute"}let{visible:i,space:n,scaleX:s,scaleY:o}=t,r=[]
for(let l=0;l<this.manager.tooltips.length;l++){let a=this.manager.tooltips[l],h=this.manager.tooltipViews[l],{dom:c}=h,u=t.pos[l],d=t.size[l]
if(!u||!1!==a.clip&&(u.bottom<=Math.max(i.top,n.top)||u.top>=Math.min(i.bottom,n.bottom)||u.right<Math.max(i.left,n.left)-.1||u.left>Math.min(i.right,n.right)+.1)){c.style.top=or
continue}let f=a.arrow?h.dom.querySelector(".cm-tooltip-arrow"):null,p=f?7:0,m=d.right-d.left,g=null!==(e=hr.get(h))&&void 0!==e?e:d.bottom-d.top,v=h.offset||dr,w=this.view.textDirection==si.LTR,b=d.width>n.right-n.left?w?n.left:n.right-d.width:w?Math.max(n.left,Math.min(u.left-(f?14:0)+v.x,n.right-m)):Math.min(Math.max(n.left,u.left-m+(f?14:0)-v.x),n.right-m),y=this.above[l]
!a.strictSide&&(y?u.top-g-p-v.y<n.top:u.bottom+g+p+v.y>n.bottom)&&y==n.bottom-u.bottom>u.top-n.top&&(y=this.above[l]=!y)
let x=(y?u.top-n.top:n.bottom-u.bottom)-p
if(x<g&&!1!==h.resize){if(x<this.view.defaultLineHeight){c.style.top=or
continue}hr.set(h,g),c.style.height=(g=x)/o+"px"}else c.style.height&&(c.style.height="")
let k=y?u.top-g-p-v.y:u.bottom+p+v.y,S=b+m
if(!0!==h.overlap)for(let t of r)t.left<S&&t.right>b&&t.top<k+g&&t.bottom>k&&(k=y?t.top-g-2-p:t.bottom+p+2)
if("absolute"==this.position?(c.style.top=(k-t.parent.top)/o+"px",ur(c,(b-t.parent.left)/s)):(c.style.top=k/o+"px",ur(c,b/s)),f){let t=u.left+(w?v.x:-v.x)-(b+14-7)
f.style.left=t/s+"px"}!0!==h.overlap&&r.push({left:b,top:k,right:S,bottom:k+g}),c.classList.toggle("cm-tooltip-above",y),c.classList.toggle("cm-tooltip-below",!y),h.positioned&&h.positioned(t.space)}}maybeMeasure(){if(this.manager.tooltips.length&&(this.view.inView&&this.view.requestMeasure(this.measureReq),this.inView!=this.view.inView&&(this.inView=this.view.inView,!this.inView)))for(let t of this.manager.tooltipViews)t.dom.style.top=or}},{eventObservers:{scroll(){this.maybeMeasure()}}})
function ur(t,e){let i=parseInt(t.style.left,10);(isNaN(i)||Math.abs(e-i)>1)&&(t.style.left=e+"px")}const dr={x:0,y:0},fr=j.define({enables:[cr,po.baseTheme({".cm-tooltip":{zIndex:500,boxSizing:"border-box"},"&light .cm-tooltip":{border:"1px solid #bbb",backgroundColor:"#f5f5f5"},"&light .cm-tooltip-section:not(:first-child)":{borderTop:"1px solid #bbb"},"&dark .cm-tooltip":{backgroundColor:"#333338",color:"white"},".cm-tooltip-arrow":{height:"7px",width:"14px",position:"absolute",zIndex:-1,overflow:"hidden","&:before, &:after":{content:"''",position:"absolute",width:0,height:0,borderLeft:"7px solid transparent",borderRight:"7px solid transparent"},".cm-tooltip-above &":{bottom:"-7px","&:before":{borderTop:"7px solid #bbb"},"&:after":{borderTop:"7px solid #f5f5f5",bottom:"1px"}},".cm-tooltip-below &":{top:"-7px","&:before":{borderBottom:"7px solid #bbb"},"&:after":{borderBottom:"7px solid #f5f5f5",top:"1px"}}},"&dark .cm-tooltip .cm-tooltip-arrow":{"&:before":{borderTopColor:"#333338",borderBottomColor:"#333338"},"&:after":{borderTopColor:"transparent",borderBottomColor:"transparent"}}})]}),pr=j.define({combine:t=>t.reduce((t,e)=>t.concat(e),[])})
class mr{static create(t){return new mr(t)}constructor(t){this.view=t,this.mounted=!1,this.dom=document.createElement("div"),this.dom.classList.add("cm-tooltip-hover"),this.manager=new rr(t,pr,(t,e)=>this.createHostedView(t,e),t=>t.dom.remove())}createHostedView(t,e){let i=t.create(this.view)
return i.dom.classList.add("cm-tooltip-section"),this.dom.insertBefore(i.dom,e?e.dom.nextSibling:this.dom.firstChild),this.mounted&&i.mount&&i.mount(this.view),i}mount(t){for(let e of this.manager.tooltipViews)e.mount&&e.mount(t)
this.mounted=!0}positioned(t){for(let e of this.manager.tooltipViews)e.positioned&&e.positioned(t)}update(t){this.manager.update(t)}destroy(){var t
for(let e of this.manager.tooltipViews)null===(t=e.destroy)||void 0===t||t.call(e)}passProp(t){let e
for(let i of this.manager.tooltipViews){let n=i[t]
if(void 0!==n)if(void 0===e)e=n
else if(e!==n)return}return e}get offset(){return this.passProp("offset")}get getCoords(){return this.passProp("getCoords")}get overlap(){return this.passProp("overlap")}get resize(){return this.passProp("resize")}}const gr=fr.compute([pr],t=>{let e=t.facet(pr)
return 0===e.length?null:{pos:Math.min(...e.map(t=>t.pos)),end:Math.max(...e.map(t=>{var e
return null!==(e=t.end)&&void 0!==e?e:t.pos})),create:mr.create,above:e[0].above,arrow:e.some(t=>t.arrow)}}),vr=j.define()
class wr{constructor(t,e,i,n,s,o){this.view=t,this.source=e,this.field=i,this.locked=n,this.setHover=s,this.hoverTime=o,this.hoverTimeout=-1,this.restartTimeout=-1,this.pending=null,this.lastMove={x:0,y:0,target:t.dom,time:0},this.checkHover=this.checkHover.bind(this),t.dom.addEventListener("mouseleave",this.mouseleave=this.mouseleave.bind(this)),t.dom.addEventListener("mousemove",this.mousemove=this.mousemove.bind(this))}update(t){this.pending&&(this.pending=null,clearTimeout(this.restartTimeout),this.restartTimeout=setTimeout(()=>this.startHover(),20))}get active(){return this.view.state.field(this.field)}checkHover(){if(this.hoverTimeout=-1,this.active.length)return
let t=Date.now()-this.lastMove.time
t<this.hoverTime?this.hoverTimeout=setTimeout(this.checkHover,this.hoverTime-t):this.startHover()}startHover(){clearTimeout(this.restartTimeout)
let{view:t,lastMove:e}=this,i=t.docView.tile.nearest(e.target)
if(!i)return
let n,s=1
if(i.isWidget())n=i.posAtStart
else{if(n=t.posAtCoords(e),null==n)return
let i=t.coordsAtPos(n)
if(!i||e.y<i.top||e.y>i.bottom||e.x<i.left-t.defaultCharacterWidth||e.x>i.right+t.defaultCharacterWidth)return
let o=t.bidiSpans(t.state.doc.lineAt(n)).find(t=>t.from<=n&&t.to>=n),r=o&&o.dir==si.RTL?-1:1
s=e.x<i.left?-r:r}this.activateHover(t,n,s)}activateHover(t,e,i,n){let s=this.source(t,e,i),o=e=>{if(e&&(!Array.isArray(e)||e.length)){let i=Array.isArray(e)?e:[e]
n&&this.locked.set(i,n),t.dispatch({effects:this.setHover.of(i)})}}
if(s&&"then"in s){let i=this.pending={pos:e}
s.then(t=>{this.pending==i&&(this.pending=null,o(t))},e=>Hi(t.state,e,"hover tooltip"))}else o(s)}get tooltip(){let t=this.view.plugin(cr),e=t?t.manager.tooltips.findIndex(t=>t.create==mr.create):-1
return e>-1?t.manager.tooltipViews[e]:null}mousemove(t){var e,i
this.lastMove={x:t.clientX,y:t.clientY,target:t.target,time:Date.now()},this.hoverTimeout<0&&(this.hoverTimeout=setTimeout(this.checkHover,this.hoverTime))
let{active:n,tooltip:s}=this
if(n.length&&!this.locked.has(n)&&s&&!function(t,e){let i,{left:n,right:s,top:o,bottom:r}=t.getBoundingClientRect()
if(i=t.querySelector(".cm-tooltip-arrow")){let t=i.getBoundingClientRect()
o=Math.min(t.top,o),r=Math.max(t.bottom,r)}return e.clientX>=n-4&&e.clientX<=s+4&&e.clientY>=o-4&&e.clientY<=r+4}(s.dom,t)||this.pending){let{pos:s}=n[0]||this.pending,o=null!==(i=null===(e=n[0])||void 0===e?void 0:e.end)&&void 0!==i?i:s;(s==o?this.view.posAtCoords(this.lastMove)==s:function(t,e,i,n,s){let o=t.scrollDOM.getBoundingClientRect(),r=t.documentTop+t.documentPadding.top+t.contentHeight
if(o.left>n||o.right<n||o.top>s||Math.min(o.bottom,r)<s)return!1
let l=t.posAtCoords({x:n,y:s},!1)
return l>=e&&l<=i}(this.view,s,o,t.clientX,t.clientY))||(this.view.dispatch({effects:this.setHover.of([])}),this.pending=null)}}mouseleave(t){clearTimeout(this.hoverTimeout),this.hoverTimeout=-1
let{active:e}=this
if(e.length&&!this.locked.has(e)){let{tooltip:e}=this
e&&e.dom.contains(t.relatedTarget)?this.watchTooltipLeave(e.dom):this.view.dispatch({effects:this.setHover.of([])})}}watchTooltipLeave(t){let e=i=>{t.removeEventListener("mouseleave",e)
let{active:n}=this
!n.length||this.locked.has(n)||this.view.dom.contains(i.relatedTarget)||this.view.dispatch({effects:this.setHover.of([])})}
t.addEventListener("mouseleave",e)}destroy(){clearTimeout(this.hoverTimeout),clearTimeout(this.restartTimeout),this.view.dom.removeEventListener("mouseleave",this.mouseleave),this.view.dom.removeEventListener("mousemove",this.mousemove)}}function br(t,e){let i=t.plugin(cr)
if(!i)return null
let n=i.manager.tooltips.indexOf(e)
return n<0?null:i.manager.tooltipViews[n]}const yr=vt.define(),xr=j.define({combine(t){let e,i
for(let n of t)e=e||n.topContainer,i=i||n.bottomContainer
return{topContainer:e,bottomContainer:i}}})
function kr(t,e){let i=t.plugin(Sr),n=i?i.specs.indexOf(e):-1
return n>-1?i.panels[n]:null}const Sr=qi.fromClass(class{constructor(t){this.input=t.state.facet(Ar),this.specs=this.input.filter(t=>t),this.panels=this.specs.map(e=>e(t))
let e=t.state.facet(xr)
this.top=new Cr(t,!0,e.topContainer),this.bottom=new Cr(t,!1,e.bottomContainer),this.top.sync(this.panels.filter(t=>t.top)),this.bottom.sync(this.panels.filter(t=>!t.top))
for(let i of this.panels)i.dom.classList.add("cm-panel"),i.mount&&i.mount()}update(t){let e=t.state.facet(xr)
this.top.container!=e.topContainer&&(this.top.sync([]),this.top=new Cr(t.view,!0,e.topContainer)),this.bottom.container!=e.bottomContainer&&(this.bottom.sync([]),this.bottom=new Cr(t.view,!1,e.bottomContainer)),this.top.syncClasses(),this.bottom.syncClasses()
let i=t.state.facet(Ar)
if(i!=this.input){let e=i.filter(t=>t),n=[],s=[],o=[],r=[]
for(let i of e){let e,l=this.specs.indexOf(i)
l<0?(e=i(t.view),r.push(e)):(e=this.panels[l],e.update&&e.update(t)),n.push(e),(e.top?s:o).push(e)}this.specs=e,this.panels=n,this.top.sync(s),this.bottom.sync(o)
for(let t of r)t.dom.classList.add("cm-panel"),t.mount&&t.mount()}else for(let n of this.panels)n.update&&n.update(t)}destroy(){this.top.sync([]),this.bottom.sync([])}},{provide:t=>po.scrollMargins.of(e=>{let i=e.plugin(t)
return i&&{top:i.top.scrollMargin(),bottom:i.bottom.scrollMargin()}})})
class Cr{constructor(t,e,i){this.view=t,this.top=e,this.container=i,this.dom=void 0,this.classes="",this.panels=[],this.syncClasses()}sync(t){for(let e of this.panels)e.destroy&&t.indexOf(e)<0&&e.destroy()
this.panels=t,this.syncDOM()}syncDOM(){if(0==this.panels.length)return void(this.dom&&(this.dom.remove(),this.dom=void 0))
if(!this.dom){this.dom=document.createElement("div"),this.dom.className=this.top?"cm-panels cm-panels-top":"cm-panels cm-panels-bottom",this.dom.style[this.top?"top":"bottom"]="0"
let t=this.container||this.view.dom
t.insertBefore(this.dom,this.top?t.firstChild:null)}let t=this.dom.firstChild
for(let e of this.panels)if(e.dom.parentNode==this.dom){for(;t!=e.dom;)t=Mr(t)
t=t.nextSibling}else this.dom.insertBefore(e.dom,t)
for(;t;)t=Mr(t)}scrollMargin(){return!this.dom||this.container?0:Math.max(0,this.top?this.dom.getBoundingClientRect().bottom-Math.max(0,this.view.scrollDOM.getBoundingClientRect().top):Math.min(innerHeight,this.view.scrollDOM.getBoundingClientRect().bottom)-this.dom.getBoundingClientRect().top)}syncClasses(){if(this.container&&this.classes!=this.view.themeClasses){for(let t of this.classes.split(" "))t&&this.container.classList.remove(t)
for(let t of(this.classes=this.view.themeClasses).split(" "))t&&this.container.classList.add(t)}}}function Mr(t){let e=t.nextSibling
return t.remove(),e}const Ar=j.define({enables:Sr}),Tr=Q.define({create:()=>[],update(t,e){for(let i of e.effects)i.is(Or)?t=[i.value].concat(t):i.is(Dr)&&(t=t.filter(t=>t!=i.value))
return t},provide:t=>Ar.computeN([t],e=>e.field(t))}),Or=vt.define(),Dr=vt.define()
class Er extends Et{compare(t){return this==t||this.constructor==t.constructor&&this.eq(t)}eq(t){return!1}destroy(t){}}Er.prototype.elementClass="",Er.prototype.toDOM=void 0,Er.prototype.mapMode=R.TrackBefore,Er.prototype.startSide=Er.prototype.endSide=-1,Er.prototype.point=!0
const Br=j.define(),Rr=j.define(),Lr={class:"",renderEmptyElements:!1,elementStyle:"",markers:()=>Pt.empty,lineMarker:()=>null,widgetMarker:()=>null,lineMarkerChange:null,initialSpacer:null,updateSpacer:null,domEventHandlers:{},side:"before"},Ir=j.define()
function Pr(t){return[Wr(),Ir.of({...Lr,...t})]}const Nr=j.define({combine:t=>t.some(t=>t)})
function Wr(t){let e=[Hr]
return t&&!1===t.fixed&&e.push(Nr.of(!0)),e}const Hr=qi.fromClass(class{constructor(t){this.view=t,this.domAfter=null,this.prevViewport=t.viewport,this.dom=document.createElement("div"),this.dom.className="cm-gutters cm-gutters-before",this.dom.setAttribute("aria-hidden","true"),this.dom.style.minHeight=this.view.contentHeight/this.view.scaleY+"px",this.gutters=t.state.facet(Ir).map(e=>new qr(t,e)),this.fixed=!t.state.facet(Nr)
for(let e of this.gutters)"after"==e.config.side?this.getDOMAfter().appendChild(e.dom):this.dom.appendChild(e.dom)
this.fixed&&(this.dom.style.position="sticky"),this.syncGutters(!1),t.scrollDOM.insertBefore(this.dom,t.contentDOM)}getDOMAfter(){return this.domAfter||(this.domAfter=document.createElement("div"),this.domAfter.className="cm-gutters cm-gutters-after",this.domAfter.setAttribute("aria-hidden","true"),this.domAfter.style.minHeight=this.view.contentHeight/this.view.scaleY+"px",this.domAfter.style.position=this.fixed?"sticky":"",this.view.scrollDOM.appendChild(this.domAfter)),this.domAfter}update(t){if(this.updateGutters(t)){let e=this.prevViewport,i=t.view.viewport,n=Math.min(e.to,i.to)-Math.max(e.from,i.from)
this.syncGutters(n<.8*(i.to-i.from))}if(t.geometryChanged){let t=this.view.contentHeight/this.view.scaleY+"px"
this.dom.style.minHeight=t,this.domAfter&&(this.domAfter.style.minHeight=t)}this.view.state.facet(Nr)!=!this.fixed&&(this.fixed=!this.fixed,this.dom.style.position=this.fixed?"sticky":"",this.domAfter&&(this.domAfter.style.position=this.fixed?"sticky":"")),this.prevViewport=t.view.viewport}syncGutters(t){let e=this.dom.nextSibling
t&&(this.dom.remove(),this.domAfter&&this.domAfter.remove())
let i=Pt.iter(this.view.state.facet(Br),this.view.viewport.from),n=[],s=this.gutters.map(t=>new zr(t,this.view.viewport,-this.view.documentPadding.top))
for(let o of this.view.viewportLineBlocks)if(n.length&&(n=[]),Array.isArray(o.type)){let t=!0
for(let e of o.type)if(e.type==Te.Text&&t){Fr(i,n,e.from)
for(let t of s)t.line(this.view,e,n)
t=!1}else if(e.widget)for(let t of s)t.widget(this.view,e)}else if(o.type==Te.Text){Fr(i,n,o.from)
for(let t of s)t.line(this.view,o,n)}else if(o.widget)for(let t of s)t.widget(this.view,o)
for(let o of s)o.finish()
t&&(this.view.scrollDOM.insertBefore(this.dom,e),this.domAfter&&this.view.scrollDOM.appendChild(this.domAfter))}updateGutters(t){let e=t.startState.facet(Ir),i=t.state.facet(Ir),n=t.docChanged||t.heightChanged||t.viewportChanged||!Pt.eq(t.startState.facet(Br),t.state.facet(Br),t.view.viewport.from,t.view.viewport.to)
if(e==i)for(let s of this.gutters)s.update(t)&&(n=!0)
else{n=!0
let s=[]
for(let n of i){let i=e.indexOf(n)
i<0?s.push(new qr(this.view,n)):(this.gutters[i].update(t),s.push(this.gutters[i]))}for(let t of this.gutters)t.dom.remove(),s.indexOf(t)<0&&t.destroy()
for(let t of s)"after"==t.config.side?this.getDOMAfter().appendChild(t.dom):this.dom.appendChild(t.dom)
this.gutters=s}return n}destroy(){for(let t of this.gutters)t.destroy()
this.dom.remove(),this.domAfter&&this.domAfter.remove()}},{provide:t=>po.scrollMargins.of(e=>{let i=e.plugin(t)
if(!i||0==i.gutters.length||!i.fixed)return null
let n=i.dom.offsetWidth*e.scaleX,s=i.domAfter?i.domAfter.offsetWidth*e.scaleX:0
return e.textDirection==si.LTR?{left:n,right:s}:{right:n,left:s}})})
function Vr(t){return Array.isArray(t)?t:[t]}function Fr(t,e,i){for(;t.value&&t.from<=i;)t.from==i&&e.push(t.value),t.next()}class zr{constructor(t,e,i){this.gutter=t,this.height=i,this.i=0,this.cursor=Pt.iter(t.markers,e.from)}addElement(t,e,i){let{gutter:n}=this,s=(e.top-this.height)/t.scaleY,o=e.height/t.scaleY
if(this.i==n.elements.length){let e=new _r(t,o,s,i)
n.elements.push(e),n.dom.appendChild(e.dom)}else n.elements[this.i].update(t,o,s,i)
this.height=e.bottom,this.i++}line(t,e,i){let n=[]
Fr(this.cursor,n,e.from),i.length&&(n=n.concat(i))
let s=this.gutter.config.lineMarker(t,e,n)
s&&n.unshift(s)
let o=this.gutter;(0!=n.length||o.config.renderEmptyElements)&&this.addElement(t,e,n)}widget(t,e){let i=this.gutter.config.widgetMarker(t,e.widget,e),n=i?[i]:null
for(let s of t.state.facet(Rr)){let i=s(t,e.widget,e)
i&&(n||(n=[])).push(i)}n&&this.addElement(t,e,n)}finish(){let t=this.gutter
for(;t.elements.length>this.i;){let e=t.elements.pop()
t.dom.removeChild(e.dom),e.destroy()}}}class qr{constructor(t,e){this.view=t,this.config=e,this.elements=[],this.spacer=null,this.dom=document.createElement("div"),this.dom.className="cm-gutter"+(this.config.class?" "+this.config.class:"")
for(let i in e.domEventHandlers)this.dom.addEventListener(i,n=>{let s,o=n.target
if(o!=this.dom&&this.dom.contains(o)){for(;o.parentNode!=this.dom;)o=o.parentNode
let t=o.getBoundingClientRect()
s=(t.top+t.bottom)/2}else s=n.clientY
let r=t.lineBlockAtHeight(s-t.documentTop)
e.domEventHandlers[i](t,r,n)&&n.preventDefault()})
this.markers=Vr(e.markers(t)),e.initialSpacer&&(this.spacer=new _r(t,0,0,[e.initialSpacer(t)]),this.dom.appendChild(this.spacer.dom),this.spacer.dom.style.cssText+="visibility: hidden; pointer-events: none")}update(t){let e=this.markers
if(this.markers=Vr(this.config.markers(t.view)),this.spacer&&this.config.updateSpacer){let e=this.config.updateSpacer(this.spacer.markers[0],t)
e!=this.spacer.markers[0]&&this.spacer.update(t.view,0,0,[e])}let i=t.view.viewport
return!Pt.eq(this.markers,e,i.from,i.to)||!!this.config.lineMarkerChange&&this.config.lineMarkerChange(t)}destroy(){for(let t of this.elements)t.destroy()}}class _r{constructor(t,e,i,n){this.height=-1,this.above=0,this.markers=[],this.dom=document.createElement("div"),this.dom.className="cm-gutterElement",this.update(t,e,i,n)}update(t,e,i,n){this.height!=e&&(this.height=e,this.dom.style.height=e+"px"),this.above!=i&&(this.dom.style.marginTop=(this.above=i)?i+"px":""),function(t,e){if(t.length!=e.length)return!1
for(let i=0;i<t.length;i++)if(!t[i].compare(e[i]))return!1
return!0}(this.markers,n)||this.setMarkers(t,n)}setMarkers(t,e){let i="cm-gutterElement",n=this.dom.firstChild
for(let s=0,o=0;;){let r=o,l=s<e.length?e[s++]:null,a=!1
if(l){let t=l.elementClass
t&&(i+=" "+t)
for(let e=o;e<this.markers.length;e++)if(this.markers[e].compare(l)){r=e,a=!0
break}}else r=this.markers.length
for(;o<r;){let t=this.markers[o++]
if(t.toDOM){t.destroy(n)
let e=n.nextSibling
n.remove(),n=e}}if(!l)break
l.toDOM&&(a?n=n.nextSibling:this.dom.insertBefore(l.toDOM(t),n)),a&&o++}this.dom.className=i,this.markers=e}destroy(){this.setMarkers(null,[])}}const Kr=j.define(),jr=j.define(),$r=j.define({combine:t=>Dt(t,{formatNumber:String,domEventHandlers:{}},{domEventHandlers(t,e){let i=Object.assign({},t)
for(let n in e){let t=i[n],s=e[n]
i[n]=t?(e,i,n)=>t(e,i,n)||s(e,i,n):s}return i}})})
class Ur extends Er{constructor(t){super(),this.number=t}eq(t){return this.number==t.number}toDOM(){return document.createTextNode(this.number)}}function Yr(t,e){return t.state.facet($r).formatNumber(e,t.state)}const Gr=Ir.compute([$r],t=>({class:"cm-lineNumbers",renderEmptyElements:!1,markers:t=>t.state.facet(Kr),lineMarker:(t,e,i)=>i.some(t=>t.toDOM)?null:new Ur(Yr(t,t.state.doc.lineAt(e.from).number)),widgetMarker:(t,e,i)=>{for(let n of t.state.facet(jr)){let s=n(t,e,i)
if(s)return s}return null},lineMarkerChange:t=>t.startState.facet($r)!=t.state.facet($r),initialSpacer:t=>new Ur(Yr(t,Jr(t.state.doc.lines))),updateSpacer(t,e){let i=Yr(e.view,Jr(e.view.state.doc.lines))
return i==t.number?t:new Ur(i)},domEventHandlers:t.facet($r).domEventHandlers,side:"before"}))
function Jr(t){let e=9
for(;e<t;)e=10*e+9
return e}const Xr=new class extends Er{constructor(){super(...arguments),this.elementClass="cm-activeLineGutter"}},Qr=Br.compute(["selection"],t=>{let e=[],i=-1
for(let n of t.selection.ranges){let s=t.doc.lineAt(n.head).from
s>i&&(i=s,e.push(Xr.range(s)))}return Pt.of(e)}),Zr=1024
let tl=0
class el{constructor(t,e){this.from=t,this.to=e}}class il{constructor(t={}){this.id=tl++,this.perNode=!!t.perNode,this.deserialize=t.deserialize||(()=>{throw new Error("This node type doesn't define a deserialize function")}),this.combine=t.combine||null}add(t){if(this.perNode)throw new RangeError("Can't add per-node props to node types")
return"function"!=typeof t&&(t=ol.match(t)),e=>{let i=t(e)
return void 0===i?null:[this,i]}}}il.closedBy=new il({deserialize:t=>t.split(" ")}),il.openedBy=new il({deserialize:t=>t.split(" ")}),il.group=new il({deserialize:t=>t.split(" ")}),il.isolate=new il({deserialize:t=>{if(t&&"rtl"!=t&&"ltr"!=t&&"auto"!=t)throw new RangeError("Invalid value for isolate: "+t)
return t||"auto"}}),il.contextHash=new il({perNode:!0}),il.lookAhead=new il({perNode:!0}),il.mounted=new il({perNode:!0})
class nl{constructor(t,e,i,n=!1){this.tree=t,this.overlay=e,this.parser=i,this.bracketed=n}static get(t){return t&&t.props&&t.props[il.mounted.id]}}const sl=Object.create(null)
class ol{constructor(t,e,i,n=0){this.name=t,this.props=e,this.id=i,this.flags=n}static define(t){let e=t.props&&t.props.length?Object.create(null):sl,i=(t.top?1:0)|(t.skipped?2:0)|(t.error?4:0)|(null==t.name?8:0),n=new ol(t.name||"",e,t.id,i)
if(t.props)for(let s of t.props)if(Array.isArray(s)||(s=s(n)),s){if(s[0].perNode)throw new RangeError("Can't store a per-node prop on a node type")
e[s[0].id]=s[1]}return n}prop(t){return this.props[t.id]}get isTop(){return(1&this.flags)>0}get isSkipped(){return(2&this.flags)>0}get isError(){return(4&this.flags)>0}get isAnonymous(){return(8&this.flags)>0}is(t){if("string"==typeof t){if(this.name==t)return!0
let e=this.prop(il.group)
return!!e&&e.indexOf(t)>-1}return this.id==t}static match(t){let e=Object.create(null)
for(let i in t)for(let n of i.split(" "))e[n]=t[i]
return t=>{for(let i=t.prop(il.group),n=-1;n<(i?i.length:0);n++){let s=e[n<0?t.name:i[n]]
if(s)return s}}}}ol.none=new ol("",Object.create(null),0,8)
const rl=new WeakMap,ll=new WeakMap
var al
!function(t){t[t.ExcludeBuffers=1]="ExcludeBuffers",t[t.IncludeAnonymous=2]="IncludeAnonymous",t[t.IgnoreMounts=4]="IgnoreMounts",t[t.IgnoreOverlays=8]="IgnoreOverlays",t[t.EnterBracketed=16]="EnterBracketed"}(al||(al={}))
class hl{constructor(t,e,i,n,s){if(this.type=t,this.children=e,this.positions=i,this.length=n,this.props=null,s&&s.length){this.props=Object.create(null)
for(let[t,e]of s)this.props["number"==typeof t?t:t.id]=e}}toString(){let t=nl.get(this)
if(t&&!t.overlay)return t.tree.toString()
let e=""
for(let i of this.children){let t=i.toString()
t&&(e&&(e+=","),e+=t)}return this.type.name?(/\W/.test(this.type.name)&&!this.type.isError?JSON.stringify(this.type.name):this.type.name)+(e.length?"("+e+")":""):e}cursor(t=0){return new kl(this.topNode,t)}cursorAt(t,e=0,i=0){let n=rl.get(this)||this.topNode,s=new kl(n)
return s.moveTo(t,e),rl.set(this,s._tree),s}get topNode(){return new ml(this,0,0,null)}resolve(t,e=0){let i=fl(rl.get(this)||this.topNode,t,e,!1)
return rl.set(this,i),i}resolveInner(t,e=0){let i=fl(ll.get(this)||this.topNode,t,e,!0)
return ll.set(this,i),i}resolveStack(t,e=0){return function(t,e,i){let n=t.resolveInner(e,i),s=null
for(let o=n instanceof ml?n:n.context.parent;o;o=o.parent)if(o.index<0){let t=o.parent;(s||(s=[n])).push(t.resolve(e,i)),o=t}else{let t=nl.get(o.tree)
if(t&&t.overlay&&t.overlay[0].from<=e&&t.overlay[t.overlay.length-1].to>=e){let r=new ml(t.tree,t.overlay[0].from+o.from,-1,o);(s||(s=[n])).push(fl(r,e,i,!1))}}return s?yl(s):n}(this,t,e)}iterate(t){let{enter:e,leave:i,from:n=0,to:s=this.length}=t,o=t.mode||0,r=(o&al.IncludeAnonymous)>0
for(let l=this.cursor(o|al.IncludeAnonymous);;){let t=!1
if(l.from<=s&&l.to>=n&&(!r&&l.type.isAnonymous||!1!==e(l))){if(l.firstChild())continue
t=!0}for(;t&&i&&(r||!l.type.isAnonymous)&&i(l),!l.nextSibling();){if(!l.parent())return
t=!0}}}prop(t){return t.perNode?this.props?this.props[t.id]:void 0:this.type.prop(t)}get propValues(){let t=[]
if(this.props)for(let e in this.props)t.push([+e,this.props[e]])
return t}balance(t={}){return this.children.length<=8?this:Al(ol.none,this.children,this.positions,0,this.children.length,0,this.length,(t,e,i)=>new hl(this.type,t,e,i,this.propValues),t.makeTree||((t,e,i)=>new hl(ol.none,t,e,i)))}static build(t){return function(t){var e
let{buffer:i,nodeSet:n,maxBufferLength:s=Zr,reused:o=[],minRepeatType:r=n.types.length}=t,l=Array.isArray(i)?new cl(i,i.length):i,a=n.types,h=0,c=0
function u(t,e,i,g,v,w){let{id:b,start:y,end:x,size:k}=l,S=c,C=h
if(k<0){if(l.next(),-1==k){let e=o[b]
return i.push(e),void g.push(y-t)}if(-3==k)return void(h=b)
if(-4==k)return void(c=b)
throw new RangeError(`Unrecognized record size: ${k}`)}let M,A,T=a[b],O=y-t
if(x-y<=s&&(A=function(t,e){let i=l.fork(),n=0,o=0,a=0,h=i.end-s,c={size:0,start:0,skip:0}
t:for(let s=i.pos-t;i.pos>s;){let t=i.size
if(i.id==e&&t>=0){c.size=n,c.start=o,c.skip=a,a+=4,n+=4,i.next()
continue}let l=i.pos-t
if(t<0||l<s||i.start<h)break
let u=i.id>=r?4:0,d=i.start
for(i.next();i.pos>l;){if(i.size<0){if(-3!=i.size&&-4!=i.size)break t
u+=4}else i.id>=r&&(u+=4)
i.next()}o=d,n+=t,a+=u}return(e<0||n==t)&&(c.size=n,c.start=o,c.skip=a),c.size>4?c:void 0}(l.pos-e,v))){let e=new Uint16Array(A.size-A.skip),i=l.pos-A.size,s=e.length
for(;l.pos>i;)s=m(A.start,e,s)
M=new ul(e,x-A.start,n),O=A.start-t}else{let t=l.pos-k
l.next()
let e=[],i=[],n=b>=r?b:-1,o=0,a=x
for(;l.pos>t;)n>=0&&l.id==n&&l.size>=0?(l.end<=a-s&&(f(e,i,y,o,l.end,a,n,S,C),o=e.length,a=l.end),l.next()):w>2500?d(y,t,e,i):u(y,t,e,i,n,w+1)
if(n>=0&&o>0&&o<e.length&&f(e,i,y,o,y,a,n,S,C),e.reverse(),i.reverse(),n>-1&&o>0){let t=function(t,e){return(i,n,s)=>{let o,r,l=0,a=i.length-1
if(a>=0&&(o=i[a])instanceof hl){if(!a&&o.type==t&&o.length==s)return o;(r=o.prop(il.lookAhead))&&(l=n[a]+o.length+r)}return p(t,i,n,s,l,e)}}(T,C)
M=Al(T,e,i,0,e.length,0,x-y,t,t)}else M=p(T,e,i,x-y,S-x,C)}i.push(M),g.push(O)}function d(t,e,i,o){let r=[],a=0,h=-1
for(;l.pos>e;){let{id:t,start:e,end:i,size:n}=l
if(n>4)l.next()
else{if(h>-1&&e<h)break
h<0&&(h=i-s),r.push(t,e,i),a++,l.next()}}if(a){let e=new Uint16Array(4*a),s=r[r.length-2]
for(let t=r.length-3,i=0;t>=0;t-=3)e[i++]=r[t],e[i++]=r[t+1]-s,e[i++]=r[t+2]-s,e[i++]=i
i.push(new ul(e,r[2]-s,n)),o.push(s-t)}}function f(t,e,i,s,o,r,l,a,h){let c=[],u=[]
for(;t.length>s;)c.push(t.pop()),u.push(e.pop()+i-o)
t.push(p(n.types[l],c,u,r-o,a-r,h)),e.push(o-i)}function p(t,e,i,n,s,o,r){if(o){let t=[il.contextHash,o]
r=r?[t].concat(r):[t]}if(s>25){let t=[il.lookAhead,s]
r=r?[t].concat(r):[t]}return new hl(t,e,i,n,r)}function m(t,e,i){let{id:n,start:s,end:o,size:a}=l
if(l.next(),a>=0&&n<r){let r=i
if(a>4){let n=l.pos-(a-4)
for(;l.pos>n;)i=m(t,e,i)}e[--i]=r,e[--i]=o-t,e[--i]=s-t,e[--i]=n}else-3==a?h=n:-4==a&&(c=n)
return i}let g=[],v=[]
for(;l.pos>0;)u(t.start||0,t.bufferStart||0,g,v,-1,0)
let w=null!==(e=t.length)&&void 0!==e?e:g.length?v[0]+g[0].length:0
return new hl(a[t.topID],g.reverse(),v.reverse(),w)}(t)}}hl.empty=new hl(ol.none,[],[],0)
class cl{constructor(t,e){this.buffer=t,this.index=e}get id(){return this.buffer[this.index-4]}get start(){return this.buffer[this.index-3]}get end(){return this.buffer[this.index-2]}get size(){return this.buffer[this.index-1]}get pos(){return this.index}next(){this.index-=4}fork(){return new cl(this.buffer,this.index)}}class ul{constructor(t,e,i){this.buffer=t,this.length=e,this.set=i}get type(){return ol.none}toString(){let t=[]
for(let e=0;e<this.buffer.length;)t.push(this.childString(e)),e=this.buffer[e+3]
return t.join(",")}childString(t){let e=this.buffer[t],i=this.buffer[t+3],n=this.set.types[e],s=n.name
if(/\W/.test(s)&&!n.isError&&(s=JSON.stringify(s)),i==(t+=4))return s
let o=[]
for(;t<i;)o.push(this.childString(t)),t=this.buffer[t+3]
return s+"("+o.join(",")+")"}findChild(t,e,i,n,s){let{buffer:o}=this,r=-1
for(let l=t;l!=e&&!(dl(s,n,o[l+1],o[l+2])&&(r=l,i>0));l=o[l+3]);return r}slice(t,e,i){let n=this.buffer,s=new Uint16Array(e-t),o=0
for(let r=t,l=0;r<e;){s[l++]=n[r++],s[l++]=n[r++]-i
let e=s[l++]=n[r++]-i
s[l++]=n[r++]-t,o=Math.max(o,e)}return new ul(s,o,this.set)}}function dl(t,e,i,n){switch(t){case-2:return i<e
case-1:return n>=e&&i<e
case 0:return i<e&&n>e
case 1:return i<=e&&n>e
case 2:return n>e
case 4:return!0}}function fl(t,e,i,n){for(var s;t.from==t.to||(i<1?t.from>=e:t.from>e)||(i>-1?t.to<=e:t.to<e);){let e=!n&&t instanceof ml&&t.index<0?null:t.parent
if(!e)return t
t=e}let o=n?0:al.IgnoreOverlays
if(n)for(let r=t,l=r.parent;l;r=l,l=r.parent)r instanceof ml&&r.index<0&&(null===(s=l.enter(e,i,o))||void 0===s?void 0:s.from)!=r.from&&(t=l)
for(;;){let n=t.enter(e,i,o)
if(!n)return t
t=n}}class pl{cursor(t=0){return new kl(this,t)}getChild(t,e=null,i=null){let n=gl(this,t,e,i)
return n.length?n[0]:null}getChildren(t,e=null,i=null){return gl(this,t,e,i)}resolve(t,e=0){return fl(this,t,e,!1)}resolveInner(t,e=0){return fl(this,t,e,!0)}matchContext(t){return vl(this.parent,t)}enterUnfinishedNodesBefore(t){let e=this.childBefore(t),i=this
for(;e;){let t=e.lastChild
if(!t||t.to!=e.to)break
t.type.isError&&t.from==t.to?(i=e,e=t.prevSibling):e=t}return i}get node(){return this}get next(){return this.parent}}class ml extends pl{constructor(t,e,i,n){super(),this._tree=t,this.from=e,this.index=i,this._parent=n}get type(){return this._tree.type}get name(){return this._tree.type.name}get to(){return this.from+this._tree.length}nextChild(t,e,i,n,s=0){for(let o=this;;){for(let{children:r,positions:l}=o._tree,a=e>0?r.length:-1;t!=a;t+=e){let a,h=r[t],c=l[t]+o.from
if(s&al.EnterBracketed&&h instanceof hl&&(a=nl.get(h))&&!a.overlay&&a.bracketed&&i>=c&&i<=c+h.length||dl(n,i,c,c+h.length))if(h instanceof ul){if(s&al.ExcludeBuffers)continue
let r=h.findChild(0,h.buffer.length,e,i-c,n)
if(r>-1)return new bl(new wl(o,h,t,c),null,r)}else if(s&al.IncludeAnonymous||!h.type.isAnonymous||Sl(h)){let r
if(!(s&al.IgnoreMounts)&&(r=nl.get(h))&&!r.overlay)return new ml(r.tree,c,t,o)
let l=new ml(h,c,t,o)
return s&al.IncludeAnonymous||!l.type.isAnonymous?l:l.nextChild(e<0?h.children.length-1:0,e,i,n,s)}}if(s&al.IncludeAnonymous||!o.type.isAnonymous)return null
if(t=o.index>=0?o.index+e:e<0?-1:o._parent._tree.children.length,o=o._parent,!o)return null}}get firstChild(){return this.nextChild(0,1,0,4)}get lastChild(){return this.nextChild(this._tree.children.length-1,-1,0,4)}childAfter(t){return this.nextChild(0,1,t,2)}childBefore(t){return this.nextChild(this._tree.children.length-1,-1,t,-2)}prop(t){return this._tree.prop(t)}enter(t,e,i=0){let n
if(!(i&al.IgnoreOverlays)&&(n=nl.get(this._tree))&&n.overlay){let s=t-this.from,o=i&al.EnterBracketed&&n.bracketed
for(let{from:t,to:i}of n.overlay)if((e>0||o?t<=s:t<s)&&(e<0||o?i>=s:i>s))return new ml(n.tree,n.overlay[0].from+this.from,-1,this)}return this.nextChild(0,1,t,e,i)}nextSignificantParent(){let t=this
for(;t.type.isAnonymous&&t._parent;)t=t._parent
return t}get parent(){return this._parent?this._parent.nextSignificantParent():null}get nextSibling(){return this._parent&&this.index>=0?this._parent.nextChild(this.index+1,1,0,4):null}get prevSibling(){return this._parent&&this.index>=0?this._parent.nextChild(this.index-1,-1,0,4):null}get tree(){return this._tree}toTree(){return this._tree}toString(){return this._tree.toString()}}function gl(t,e,i,n){let s=t.cursor(),o=[]
if(!s.firstChild())return o
if(null!=i)for(let r=!1;!r;)if(r=s.type.is(i),!s.nextSibling())return o
for(;;){if(null!=n&&s.type.is(n))return o
if(s.type.is(e)&&o.push(s.node),!s.nextSibling())return null==n?o:[]}}function vl(t,e,i=e.length-1){for(let n=t;i>=0;n=n.parent){if(!n)return!1
if(!n.type.isAnonymous){if(e[i]&&e[i]!=n.name)return!1
i--}}return!0}class wl{constructor(t,e,i,n){this.parent=t,this.buffer=e,this.index=i,this.start=n}}class bl extends pl{get name(){return this.type.name}get from(){return this.context.start+this.context.buffer.buffer[this.index+1]}get to(){return this.context.start+this.context.buffer.buffer[this.index+2]}constructor(t,e,i){super(),this.context=t,this._parent=e,this.index=i,this.type=t.buffer.set.types[t.buffer.buffer[i]]}child(t,e,i){let{buffer:n}=this.context,s=n.findChild(this.index+4,n.buffer[this.index+3],t,e-this.context.start,i)
return s<0?null:new bl(this.context,this,s)}get firstChild(){return this.child(1,0,4)}get lastChild(){return this.child(-1,0,4)}childAfter(t){return this.child(1,t,2)}childBefore(t){return this.child(-1,t,-2)}prop(t){return this.type.prop(t)}enter(t,e,i=0){if(i&al.ExcludeBuffers)return null
let{buffer:n}=this.context,s=n.findChild(this.index+4,n.buffer[this.index+3],e>0?1:-1,t-this.context.start,e)
return s<0?null:new bl(this.context,this,s)}get parent(){return this._parent||this.context.parent.nextSignificantParent()}externalSibling(t){return this._parent?null:this.context.parent.nextChild(this.context.index+t,t,0,4)}get nextSibling(){let{buffer:t}=this.context,e=t.buffer[this.index+3]
return e<(this._parent?t.buffer[this._parent.index+3]:t.buffer.length)?new bl(this.context,this._parent,e):this.externalSibling(1)}get prevSibling(){let{buffer:t}=this.context,e=this._parent?this._parent.index+4:0
return this.index==e?this.externalSibling(-1):new bl(this.context,this._parent,t.findChild(e,this.index,-1,0,4))}get tree(){return null}toTree(){let t=[],e=[],{buffer:i}=this.context,n=this.index+4,s=i.buffer[this.index+3]
if(s>n){let o=i.buffer[this.index+1]
t.push(i.slice(n,s,o)),e.push(0)}return new hl(this.type,t,e,this.to-this.from)}toString(){return this.context.buffer.childString(this.index)}}function yl(t){if(!t.length)return null
let e=0,i=t[0]
for(let o=1;o<t.length;o++){let n=t[o];(n.from>i.from||n.to<i.to)&&(i=n,e=o)}let n=i instanceof ml&&i.index<0?null:i.parent,s=t.slice()
return n?s[e]=n:s.splice(e,1),new xl(s,i)}class xl{constructor(t,e){this.heads=t,this.node=e}get next(){return yl(this.heads)}}class kl{get name(){return this.type.name}constructor(t,e=0){if(this.buffer=null,this.stack=[],this.index=0,this.bufferNode=null,this.mode=e&~al.EnterBracketed,t instanceof ml)this.yieldNode(t)
else{this._tree=t.context.parent,this.buffer=t.context
for(let e=t._parent;e;e=e._parent)this.stack.unshift(e.index)
this.bufferNode=t,this.yieldBuf(t.index)}}yieldNode(t){return!!t&&(this._tree=t,this.type=t.type,this.from=t.from,this.to=t.to,!0)}yieldBuf(t,e){this.index=t
let{start:i,buffer:n}=this.buffer
return this.type=e||n.set.types[n.buffer[t]],this.from=i+n.buffer[t+1],this.to=i+n.buffer[t+2],!0}yield(t){return!!t&&(t instanceof ml?(this.buffer=null,this.yieldNode(t)):(this.buffer=t.context,this.yieldBuf(t.index,t.type)))}toString(){return this.buffer?this.buffer.buffer.childString(this.index):this._tree.toString()}enterChild(t,e,i){if(!this.buffer)return this.yield(this._tree.nextChild(t<0?this._tree._tree.children.length-1:0,t,e,i,this.mode))
let{buffer:n}=this.buffer,s=n.findChild(this.index+4,n.buffer[this.index+3],t,e-this.buffer.start,i)
return!(s<0)&&(this.stack.push(this.index),this.yieldBuf(s))}firstChild(){return this.enterChild(1,0,4)}lastChild(){return this.enterChild(-1,0,4)}childAfter(t){return this.enterChild(1,t,2)}childBefore(t){return this.enterChild(-1,t,-2)}enter(t,e,i=this.mode){return this.buffer?!(i&al.ExcludeBuffers)&&this.enterChild(1,t,e):this.yield(this._tree.enter(t,e,i))}parent(){if(!this.buffer)return this.yieldNode(this.mode&al.IncludeAnonymous?this._tree._parent:this._tree.parent)
if(this.stack.length)return this.yieldBuf(this.stack.pop())
let t=this.mode&al.IncludeAnonymous?this.buffer.parent:this.buffer.parent.nextSignificantParent()
return this.buffer=null,this.yieldNode(t)}sibling(t){if(!this.buffer)return!!this._tree._parent&&this.yield(this._tree.index<0?null:this._tree._parent.nextChild(this._tree.index+t,t,0,4,this.mode))
let{buffer:e}=this.buffer,i=this.stack.length-1
if(t<0){let t=i<0?0:this.stack[i]+4
if(this.index!=t)return this.yieldBuf(e.findChild(t,this.index,-1,0,4))}else{let t=e.buffer[this.index+3]
if(t<(i<0?e.buffer.length:e.buffer[this.stack[i]+3]))return this.yieldBuf(t)}return i<0&&this.yield(this.buffer.parent.nextChild(this.buffer.index+t,t,0,4,this.mode))}nextSibling(){return this.sibling(1)}prevSibling(){return this.sibling(-1)}atLastNode(t){let e,i,{buffer:n}=this
if(n){if(t>0){if(this.index<n.buffer.buffer.length)return!1}else for(let t=0;t<this.index;t++)if(n.buffer.buffer[t+3]<this.index)return!1;({index:e,parent:i}=n)}else({index:e,_parent:i}=this._tree)
for(;i;({index:e,_parent:i}=i))if(e>-1)for(let n=e+t,s=t<0?-1:i._tree.children.length;n!=s;n+=t){let t=i._tree.children[n]
if(this.mode&al.IncludeAnonymous||t instanceof ul||!t.type.isAnonymous||Sl(t))return!1}return!0}move(t,e){if(e&&this.enterChild(t,0,4))return!0
for(;;){if(this.sibling(t))return!0
if(this.atLastNode(t)||!this.parent())return!1}}next(t=!0){return this.move(1,t)}prev(t=!0){return this.move(-1,t)}moveTo(t,e=0){for(;(this.from==this.to||(e<1?this.from>=t:this.from>t)||(e>-1?this.to<=t:this.to<t))&&this.parent(););for(;this.enterChild(1,t,e););return this}get node(){if(!this.buffer)return this._tree
let t=this.bufferNode,e=null,i=0
if(t&&t.context==this.buffer)t:for(let n=this.index,s=this.stack.length;s>=0;){for(let o=t;o;o=o._parent)if(o.index==n){if(n==this.index)return o
e=o,i=s+1
break t}n=this.stack[--s]}for(let n=i;n<this.stack.length;n++)e=new bl(this.buffer,e,this.stack[n])
return this.bufferNode=new bl(this.buffer,e,this.index)}get tree(){return this.buffer?null:this._tree._tree}iterate(t,e){for(let i=0;;){let n=!1
if(this.type.isAnonymous||!1!==t(this)){if(this.firstChild()){i++
continue}this.type.isAnonymous||(n=!0)}for(;;){if(n&&e&&e(this),n=this.type.isAnonymous,!i)return
if(this.nextSibling())break
this.parent(),i--,n=!0}}}matchContext(t){if(!this.buffer)return vl(this.node.parent,t)
let{buffer:e}=this.buffer,{types:i}=e.set
for(let n=t.length-1,s=this.stack.length-1;n>=0;s--){if(s<0)return vl(this._tree,t,n)
let o=i[e.buffer[this.stack[s]]]
if(!o.isAnonymous){if(t[n]&&t[n]!=o.name)return!1
n--}}return!0}}function Sl(t){return t.children.some(t=>t instanceof ul||!t.type.isAnonymous||Sl(t))}const Cl=new WeakMap
function Ml(t,e){if(!t.isAnonymous||e instanceof ul||e.type!=t)return 1
let i=Cl.get(e)
if(null==i){i=1
for(let n of e.children){if(n.type!=t||!(n instanceof hl)){i=1
break}i+=Ml(t,n)}Cl.set(e,i)}return i}function Al(t,e,i,n,s,o,r,l,a){let h=0
for(let f=n;f<s;f++)h+=Ml(t,e[f])
let c=Math.ceil(1.5*h/8),u=[],d=[]
return function e(i,n,s,r,l){for(let h=s;h<r;){let s=h,f=n[h],p=Ml(t,i[h])
for(h++;h<r;h++){let e=Ml(t,i[h])
if(p+e>=c)break
p+=e}if(h==s+1){if(p>c){let t=i[s]
e(t.children,t.positions,0,t.children.length,n[s]+l)
continue}u.push(i[s])}else{let e=n[h-1]+i[h-1].length-f
u.push(Al(t,i,n,s,h,f,e,null,a))}d.push(f+l-o)}}(e,i,n,s,0),(l||a)(u,d,r)}class Tl{constructor(t,e,i,n,s=!1,o=!1){this.from=t,this.to=e,this.tree=i,this.offset=n,this.open=(s?1:0)|(o?2:0)}get openStart(){return(1&this.open)>0}get openEnd(){return(2&this.open)>0}static addTree(t,e=[],i=!1){let n=[new Tl(0,t.length,t,0,!1,i)]
for(let s of e)s.to>t.length&&n.push(s)
return n}static applyChanges(t,e,i=128){if(!e.length)return t
let n=[],s=1,o=t.length?t[0]:null
for(let r=0,l=0,a=0;;r++){let h=r<e.length?e[r]:null,c=h?h.fromA:1e9
if(c-l>=i)for(;o&&o.from<c;){let e=o
if(l>=e.from||c<=e.to||a){let t=Math.max(e.from,l)-a,i=Math.min(e.to,c)-a
e=t>=i?null:new Tl(t,i,e.tree,e.offset+a,r>0,!!h)}if(e&&n.push(e),o.to>c)break
o=s<t.length?t[s++]:null}if(!h)break
l=h.toA,a=h.toA-h.toB}return n}}class Ol{startParse(t,e,i){return"string"==typeof t&&(t=new Dl(t)),i=i?i.length?i.map(t=>new el(t.from,t.to)):[new el(0,0)]:[new el(0,t.length)],this.createParse(t,e||[],i)}parse(t,e,i){let n=this.startParse(t,e,i)
for(;;){let t=n.advance()
if(t)return t}}}class Dl{constructor(t){this.string=t}get length(){return this.string.length}chunk(t){return this.string.slice(t)}get lineChunks(){return!1}read(t,e){return this.string.slice(t,e)}}new il({perNode:!0})
let El=0
class Bl{constructor(t,e,i,n){this.name=t,this.set=e,this.base=i,this.modified=n,this.id=El++}toString(){let{name:t}=this
for(let e of this.modified)e.name&&(t=`${e.name}(${t})`)
return t}static define(t,e){let i="string"==typeof t?t:"?"
if(t instanceof Bl&&(e=t),null==e?void 0:e.base)throw new Error("Can not derive from a modified tag")
let n=new Bl(i,[],null,[])
if(n.set.push(n),e)for(let s of e.set)n.set.push(s)
return n}static defineModifier(t){let e=new Ll(t)
return t=>t.modified.indexOf(e)>-1?t:Ll.get(t.base||t,t.modified.concat(e).sort((t,e)=>t.id-e.id))}}let Rl=0
class Ll{constructor(t){this.name=t,this.instances=[],this.id=Rl++}static get(t,e){if(!e.length)return t
let i=e[0].instances.find(i=>{return i.base==t&&(n=e,s=i.modified,n.length==s.length&&n.every((t,e)=>t==s[e]))
var n,s})
if(i)return i
let n=[],s=new Bl(t.name,n,t,e)
for(let r of e)r.instances.push(s)
let o=function(t){let e=[[]]
for(let i=0;i<t.length;i++)for(let n=0,s=e.length;n<s;n++)e.push(e[n].concat(t[i]))
return e.sort((t,e)=>e.length-t.length)}(e)
for(let r of t.set)if(!r.modified.length)for(let t of o)n.push(Ll.get(r,t))
return s}}function Il(t){let e=Object.create(null)
for(let i in t){let n=t[i]
Array.isArray(n)||(n=[n])
for(let t of i.split(" "))if(t){let i=[],s=2,o=t
for(let e=0;;){if("..."==o&&e>0&&e+3==t.length){s=1
break}let n=/^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(o)
if(!n)throw new RangeError("Invalid path: "+t)
if(i.push("*"==n[0]?"":'"'==n[0][0]?JSON.parse(n[0]):n[0]),e+=n[0].length,e==t.length)break
let r=t[e++]
if(e==t.length&&"!"==r){s=0
break}if("/"!=r)throw new RangeError("Invalid path: "+t)
o=t.slice(e)}let r=i.length-1,l=i[r]
if(!l)throw new RangeError("Invalid path: "+t)
let a=new Nl(n,s,r>0?i.slice(0,r):null)
e[l]=a.sort(e[l])}}return Pl.add(e)}const Pl=new il({combine(t,e){let i,n,s
for(;t||e;){if(!t||e&&t.depth>=e.depth?(s=e,e=e.next):(s=t,t=t.next),i&&i.mode==s.mode&&!s.context&&!i.context)continue
let o=new Nl(s.tags,s.mode,s.context)
i?i.next=o:n=o,i=o}return n}})
class Nl{constructor(t,e,i,n){this.tags=t,this.mode=e,this.context=i,this.next=n}get opaque(){return 0==this.mode}get inherit(){return 1==this.mode}sort(t){return!t||t.depth<this.depth?(this.next=t,this):(t.next=this.sort(t.next),t)}get depth(){return this.context?this.context.length:0}}function Wl(t,e){let i=Object.create(null)
for(let o of t)if(Array.isArray(o.tag))for(let t of o.tag)i[t.id]=o.class
else i[o.tag.id]=o.class
let{scope:n,all:s=null}=e||{}
return{style:t=>{let e=s
for(let n of t)for(let t of n.set){let n=i[t.id]
if(n){e=e?e+" "+n:n
break}}return e},scope:n}}function Hl(t,e,i,n=0,s=t.length){let o=new Vl(n,Array.isArray(e)?e:[e],i)
o.highlightRange(t.cursor(),n,s,"",o.highlighters),o.flush(s)}Nl.empty=new Nl([],2,null)
class Vl{constructor(t,e,i){this.at=t,this.highlighters=e,this.span=i,this.class=""}startSpan(t,e){e!=this.class&&(this.flush(t),t>this.at&&(this.at=t),this.class=e)}flush(t){t>this.at&&this.class&&this.span(this.at,t,this.class)}highlightRange(t,e,i,n,s){let{type:o,from:r,to:l}=t
if(r>=i||l<=e)return
o.isTop&&(s=this.highlighters.filter(t=>!t.scope||t.scope(o)))
let a=n,h=function(t){let e=t.type.prop(Pl)
for(;e&&e.context&&!t.matchContext(e.context);)e=e.next
return e||null}(t)||Nl.empty,c=function(t,e){let i=null
for(let n of t){let t=n.style(e)
t&&(i=i?i+" "+t:t)}return i}(s,h.tags)
if(c&&(a&&(a+=" "),a+=c,1==h.mode&&(n+=(n?" ":"")+c)),this.startSpan(Math.max(e,r),a),h.opaque)return
let u=t.tree&&t.tree.prop(il.mounted)
if(u&&u.overlay){let o=t.node.enter(u.overlay[0].from+r,1),h=this.highlighters.filter(t=>!t.scope||t.scope(u.tree.type)),c=t.firstChild()
for(let d=0,f=r;;d++){let p=d<u.overlay.length?u.overlay[d]:null,m=p?p.from+r:l,g=Math.max(e,f),v=Math.min(i,m)
if(g<v&&c)for(;t.from<v&&(this.highlightRange(t,g,v,n,s),this.startSpan(Math.min(v,t.to),a),!(t.to>=m)&&t.nextSibling()););if(!p||m>i)break
f=p.to+r,f>e&&(this.highlightRange(o.cursor(),Math.max(e,p.from+r),Math.min(i,f),"",h),this.startSpan(Math.min(i,f),a))}c&&t.parent()}else if(t.firstChild()){u&&(n="")
do{if(!(t.to<=e)){if(t.from>=i)break
this.highlightRange(t,e,i,n,s),this.startSpan(Math.min(i,t.to),a)}}while(t.nextSibling())
t.parent()}}}const Fl=Bl.define,zl=Fl(),ql=Fl(),_l=Fl(ql),Kl=Fl(ql),jl=Fl(),$l=Fl(jl),Ul=Fl(jl),Yl=Fl(),Gl=Fl(Yl),Jl=Fl(),Xl=Fl(),Ql=Fl(),Zl=Fl(Ql),ta=Fl(),ea={comment:zl,lineComment:Fl(zl),blockComment:Fl(zl),docComment:Fl(zl),name:ql,variableName:Fl(ql),typeName:_l,tagName:Fl(_l),propertyName:Kl,attributeName:Fl(Kl),className:Fl(ql),labelName:Fl(ql),namespace:Fl(ql),macroName:Fl(ql),literal:jl,string:$l,docString:Fl($l),character:Fl($l),attributeValue:Fl($l),number:Ul,integer:Fl(Ul),float:Fl(Ul),bool:Fl(jl),regexp:Fl(jl),escape:Fl(jl),color:Fl(jl),url:Fl(jl),keyword:Jl,self:Fl(Jl),null:Fl(Jl),atom:Fl(Jl),unit:Fl(Jl),modifier:Fl(Jl),operatorKeyword:Fl(Jl),controlKeyword:Fl(Jl),definitionKeyword:Fl(Jl),moduleKeyword:Fl(Jl),operator:Xl,derefOperator:Fl(Xl),arithmeticOperator:Fl(Xl),logicOperator:Fl(Xl),bitwiseOperator:Fl(Xl),compareOperator:Fl(Xl),updateOperator:Fl(Xl),definitionOperator:Fl(Xl),typeOperator:Fl(Xl),controlOperator:Fl(Xl),punctuation:Ql,separator:Fl(Ql),bracket:Zl,angleBracket:Fl(Zl),squareBracket:Fl(Zl),paren:Fl(Zl),brace:Fl(Zl),content:Yl,heading:Gl,heading1:Fl(Gl),heading2:Fl(Gl),heading3:Fl(Gl),heading4:Fl(Gl),heading5:Fl(Gl),heading6:Fl(Gl),contentSeparator:Fl(Yl),list:Fl(Yl),quote:Fl(Yl),emphasis:Fl(Yl),strong:Fl(Yl),link:Fl(Yl),monospace:Fl(Yl),strikethrough:Fl(Yl),inserted:Fl(),deleted:Fl(),changed:Fl(),invalid:Fl(),meta:ta,documentMeta:Fl(ta),annotation:Fl(ta),processingInstruction:Fl(ta),definition:Bl.defineModifier("definition"),constant:Bl.defineModifier("constant"),function:Bl.defineModifier("function"),standard:Bl.defineModifier("standard"),local:Bl.defineModifier("local"),special:Bl.defineModifier("special")}
for(let jf in ea){let t=ea[jf]
t instanceof Bl&&(t.name=jf)}var ia
Wl([{tag:ea.link,class:"tok-link"},{tag:ea.heading,class:"tok-heading"},{tag:ea.emphasis,class:"tok-emphasis"},{tag:ea.strong,class:"tok-strong"},{tag:ea.keyword,class:"tok-keyword"},{tag:ea.atom,class:"tok-atom"},{tag:ea.bool,class:"tok-bool"},{tag:ea.url,class:"tok-url"},{tag:ea.labelName,class:"tok-labelName"},{tag:ea.inserted,class:"tok-inserted"},{tag:ea.deleted,class:"tok-deleted"},{tag:ea.literal,class:"tok-literal"},{tag:ea.string,class:"tok-string"},{tag:ea.number,class:"tok-number"},{tag:[ea.regexp,ea.escape,ea.special(ea.string)],class:"tok-string2"},{tag:ea.variableName,class:"tok-variableName"},{tag:ea.local(ea.variableName),class:"tok-variableName tok-local"},{tag:ea.definition(ea.variableName),class:"tok-variableName tok-definition"},{tag:ea.special(ea.variableName),class:"tok-variableName2"},{tag:ea.definition(ea.propertyName),class:"tok-propertyName tok-definition"},{tag:ea.typeName,class:"tok-typeName"},{tag:ea.namespace,class:"tok-namespace"},{tag:ea.className,class:"tok-className"},{tag:ea.macroName,class:"tok-macroName"},{tag:ea.propertyName,class:"tok-propertyName"},{tag:ea.operator,class:"tok-operator"},{tag:ea.comment,class:"tok-comment"},{tag:ea.meta,class:"tok-meta"},{tag:ea.invalid,class:"tok-invalid"},{tag:ea.punctuation,class:"tok-punctuation"}])
const na=new il,sa=new il
class oa{constructor(t,e,i=[],n=""){this.data=t,this.name=n,Ot.prototype.hasOwnProperty("tree")||Object.defineProperty(Ot.prototype,"tree",{get(){return la(this)}}),this.parser=e,this.extension=[ga.of(this),Ot.languageData.of((t,e,i)=>{let n=ra(t,e,i),s=n.type.prop(na)
if(!s)return[]
let o=t.facet(s),r=n.type.prop(sa)
if(r){let s=n.resolve(e-n.from,i)
for(let e of r)if(e.test(s,t)){let i=t.facet(e.facet)
return"replace"==e.type?i:i.concat(o)}}return o})].concat(i)}isActiveAt(t,e,i=-1){return ra(t,e,i).type.prop(na)==this.data}findRegions(t){let e=t.facet(ga)
if((null==e?void 0:e.data)==this.data)return[{from:0,to:t.doc.length}]
if(!e||!e.allowsNesting)return[]
let i=[],n=(t,e)=>{if(t.prop(na)==this.data)return void i.push({from:e,to:e+t.length})
let s=t.prop(il.mounted)
if(s){if(s.tree.prop(na)==this.data){if(s.overlay)for(let t of s.overlay)i.push({from:t.from+e,to:t.to+e})
else i.push({from:e,to:e+t.length})
return}if(s.overlay){let t=i.length
if(n(s.tree,s.overlay[0].from+e),i.length>t)return}}for(let i=0;i<t.children.length;i++){let s=t.children[i]
s instanceof hl&&n(s,t.positions[i]+e)}}
return n(la(t),0),i}get allowsNesting(){return!0}}function ra(t,e,i){let n=t.facet(ga),s=la(t).topNode
if(!n||n.allowsNesting)for(let o=s;o;o=o.enter(e,i,al.ExcludeBuffers|al.EnterBracketed))o.type.isTop&&(s=o)
return s}function la(t){let e=t.field(oa.state,!1)
return e?e.tree:hl.empty}oa.setState=vt.define()
class aa{constructor(t){this.doc=t,this.cursorPos=0,this.string="",this.cursor=t.iter()}get length(){return this.doc.length}syncTo(t){return this.string=this.cursor.next(t-this.cursorPos).value,this.cursorPos=t+this.string.length,this.cursorPos-this.string.length}chunk(t){return this.syncTo(t),this.string}get lineChunks(){return!0}read(t,e){let i=this.cursorPos-this.string.length
return t<i||e>=this.cursorPos?this.doc.sliceString(t,e):this.string.slice(t-i,e-i)}}let ha=null
class ca{constructor(t,e,i=[],n,s,o,r,l){this.parser=t,this.state=e,this.fragments=i,this.tree=n,this.treeLen=s,this.viewport=o,this.skipped=r,this.scheduleOn=l,this.parse=null,this.tempSkipped=[]}static create(t,e,i){return new ca(t,e,[],hl.empty,0,i,[],null)}startParse(){return this.parser.startParse(new aa(this.state.doc),this.fragments)}work(t,e){return null!=e&&e>=this.state.doc.length&&(e=void 0),this.tree!=hl.empty&&this.isDone(null!=e?e:this.state.doc.length)?(this.takeTree(),!0):this.withContext(()=>{var i
if("number"==typeof t){let e=Date.now()+t
t=()=>Date.now()>e}for(this.parse||(this.parse=this.startParse()),null!=e&&(null==this.parse.stoppedAt||this.parse.stoppedAt>e)&&e<this.state.doc.length&&this.parse.stopAt(e);;){let n=this.parse.advance()
if(n){if(this.fragments=this.withoutTempSkipped(Tl.addTree(n,this.fragments,null!=this.parse.stoppedAt)),this.treeLen=null!==(i=this.parse.stoppedAt)&&void 0!==i?i:this.state.doc.length,this.tree=n,this.parse=null,!(this.treeLen<(null!=e?e:this.state.doc.length)))return!0
this.parse=this.startParse()}if(t())return!1}})}takeTree(){let t,e
this.parse&&(t=this.parse.parsedPos)>=this.treeLen&&((null==this.parse.stoppedAt||this.parse.stoppedAt>t)&&this.parse.stopAt(t),this.withContext(()=>{for(;!(e=this.parse.advance()););}),this.treeLen=t,this.tree=e,this.fragments=this.withoutTempSkipped(Tl.addTree(this.tree,this.fragments,!0)),this.parse=null)}withContext(t){let e=ha
ha=this
try{return t()}finally{ha=e}}withoutTempSkipped(t){for(let e;e=this.tempSkipped.pop();)t=ua(t,e.from,e.to)
return t}changes(t,e){let{fragments:i,tree:n,treeLen:s,viewport:o,skipped:r}=this
if(this.takeTree(),!t.empty){let e=[]
if(t.iterChangedRanges((t,i,n,s)=>e.push({fromA:t,toA:i,fromB:n,toB:s})),i=Tl.applyChanges(i,e),n=hl.empty,s=0,o={from:t.mapPos(o.from,-1),to:t.mapPos(o.to,1)},this.skipped.length){r=[]
for(let e of this.skipped){let i=t.mapPos(e.from,1),n=t.mapPos(e.to,-1)
i<n&&r.push({from:i,to:n})}}}return new ca(this.parser,e,i,n,s,o,r,this.scheduleOn)}updateViewport(t){if(this.viewport.from==t.from&&this.viewport.to==t.to)return!1
this.viewport=t
let e=this.skipped.length
for(let i=0;i<this.skipped.length;i++){let{from:e,to:n}=this.skipped[i]
e<t.to&&n>t.from&&(this.fragments=ua(this.fragments,e,n),this.skipped.splice(i--,1))}return!(this.skipped.length>=e||(this.reset(),0))}reset(){this.parse&&(this.takeTree(),this.parse=null)}skipUntilInView(t,e){this.skipped.push({from:t,to:e})}static getSkippingParser(t){return new class extends Ol{createParse(e,i,n){let s=n[0].from,o=n[n.length-1].to
return{parsedPos:s,advance(){let e=ha
if(e){for(let t of n)e.tempSkipped.push(t)
t&&(e.scheduleOn=e.scheduleOn?Promise.all([e.scheduleOn,t]):t)}return this.parsedPos=o,new hl(ol.none,[],[],o-s)},stoppedAt:null,stopAt(){}}}}}isDone(t){t=Math.min(t,this.state.doc.length)
let e=this.fragments
return this.treeLen>=t&&e.length&&0==e[0].from&&e[0].to>=t}static get(){return ha}}function ua(t,e,i){return Tl.applyChanges(t,[{fromA:e,toA:i,fromB:e,toB:i}])}class da{constructor(t){this.context=t,this.tree=t.tree}apply(t){if(!t.docChanged&&this.tree==this.context.tree)return this
let e=this.context.changes(t.changes,t.state),i=this.context.treeLen==t.startState.doc.length?void 0:Math.max(t.changes.mapPos(this.context.treeLen),e.viewport.to)
return e.work(20,i)||e.takeTree(),new da(e)}static init(t){let e=Math.min(3e3,t.doc.length),i=ca.create(t.facet(ga).parser,t,{from:0,to:e})
return i.work(20,e)||i.takeTree(),new da(i)}}oa.state=Q.define({create:da.init,update(t,e){for(let i of e.effects)if(i.is(oa.setState))return i.value
return e.startState.facet(ga)!=e.state.facet(ga)?da.init(e.state):t.apply(e)}})
let fa=t=>{let e=setTimeout(()=>t(),500)
return()=>clearTimeout(e)}
"undefined"!=typeof requestIdleCallback&&(fa=t=>{let e=-1,i=setTimeout(()=>{e=requestIdleCallback(t,{timeout:400})},100)
return()=>e<0?clearTimeout(i):cancelIdleCallback(e)})
const pa="undefined"!=typeof navigator&&(null===(ia=navigator.scheduling)||void 0===ia?void 0:ia.isInputPending)?()=>navigator.scheduling.isInputPending():null,ma=qi.fromClass(class{constructor(t){this.view=t,this.working=null,this.workScheduled=0,this.chunkEnd=-1,this.chunkBudget=-1,this.work=this.work.bind(this),this.scheduleWork()}update(t){let e=this.view.state.field(oa.state).context;(e.updateViewport(t.view.viewport)||this.view.viewport.to>e.treeLen)&&this.scheduleWork(),(t.docChanged||t.selectionSet)&&(this.view.hasFocus&&(this.chunkBudget+=50),this.scheduleWork()),this.checkAsyncSchedule(e)}scheduleWork(){if(this.working)return
let{state:t}=this.view,e=t.field(oa.state)
e.tree==e.context.tree&&e.context.isDone(t.doc.length)||(this.working=fa(this.work))}work(t){this.working=null
let e=Date.now()
if(this.chunkEnd<e&&(this.chunkEnd<0||this.view.hasFocus)&&(this.chunkEnd=e+3e4,this.chunkBudget=3e3),this.chunkBudget<=0)return
let{state:i,viewport:{to:n}}=this.view,s=i.field(oa.state)
if(s.tree==s.context.tree&&s.context.isDone(n+1e5))return
let o=Date.now()+Math.min(this.chunkBudget,100,t&&!pa?Math.max(25,t.timeRemaining()-5):1e9),r=s.context.treeLen<n&&i.doc.length>n+1e3,l=s.context.work(()=>pa&&pa()||Date.now()>o,n+(r?0:1e5))
this.chunkBudget-=Date.now()-e,(l||this.chunkBudget<=0)&&(s.context.takeTree(),this.view.dispatch({effects:oa.setState.of(new da(s.context))})),this.chunkBudget>0&&(!l||r)&&this.scheduleWork(),this.checkAsyncSchedule(s.context)}checkAsyncSchedule(t){t.scheduleOn&&(this.workScheduled++,t.scheduleOn.then(()=>this.scheduleWork()).catch(t=>Hi(this.view.state,t)).then(()=>this.workScheduled--),t.scheduleOn=null)}destroy(){this.working&&this.working()}isWorking(){return!!(this.working||this.workScheduled>0)}},{eventHandlers:{focus(){this.scheduleWork()}}}),ga=j.define({combine:t=>t.length?t[0]:null,enables:t=>[oa.state,ma,po.contentAttributes.compute([t],e=>{let i=e.facet(t)
return i&&i.name?{"data-language":i.name}:{}})]}),va=j.define(),wa=j.define({combine:t=>{if(!t.length)return"  "
let e=t[0]
if(!e||/\S/.test(e)||Array.from(e).some(t=>t!=e[0]))throw new Error("Invalid indent unit: "+JSON.stringify(t[0]))
return e}})
function ba(t){let e=t.facet(wa)
return 9==e.charCodeAt(0)?t.tabSize*e.length:e.length}function ya(t,e){let i="",n=t.tabSize,s=t.facet(wa)[0]
if("\t"==s){for(;e>=n;)i+="\t",e-=n
s=" "}for(let o=0;o<e;o++)i+=s
return i}function xa(t,e){t instanceof Ot&&(t=new ka(t))
for(let n of t.state.facet(va)){let i=n(t,e)
if(void 0!==i)return i}let i=la(t.state)
return i.length>=e?function(t,e,i){let n=e.resolveStack(i),s=e.resolveInner(i,-1).resolve(i,0).enterUnfinishedNodesBefore(i)
if(s!=n.node){let t=[]
for(let e=s;e&&!(e.from<n.node.from||e.to>n.node.to||e.from==n.node.from&&e.type==n.node.type);e=e.parent)t.push(e)
for(let e=t.length-1;e>=0;e--)n={node:t[e],next:n}}return Ca(n,t,i)}(t,i,e):null}class ka{constructor(t,e={}){this.state=t,this.options=e,this.unit=ba(t)}lineAt(t,e=1){let i=this.state.doc.lineAt(t),{simulateBreak:n,simulateDoubleBreak:s}=this.options
return null!=n&&n>=i.from&&n<=i.to?s&&n==t?{text:"",from:t}:(e<0?n<t:n<=t)?{text:i.text.slice(n-i.from),from:n}:{text:i.text.slice(0,n-i.from),from:i.from}:i}textAfterPos(t,e=1){if(this.options.simulateDoubleBreak&&t==this.options.simulateBreak)return""
let{text:i,from:n}=this.lineAt(t,e)
return i.slice(t-n,Math.min(i.length,t+100-n))}column(t,e=1){let{text:i,from:n}=this.lineAt(t,e),s=this.countColumn(i,t-n),o=this.options.overrideIndentation?this.options.overrideIndentation(n):-1
return o>-1&&(s+=o-this.countColumn(i,i.search(/\S|$/))),s}countColumn(t,e=t.length){return Ut(t,this.state.tabSize,e)}lineIndent(t,e=1){let{text:i,from:n}=this.lineAt(t,e),s=this.options.overrideIndentation
if(s){let t=s(n)
if(t>-1)return t}return this.countColumn(i,i.search(/\S|$/))}get simulatedBreak(){return this.options.simulateBreak||null}}const Sa=new il
function Ca(t,e,i){for(let n=t;n;n=n.next){let t=Ma(n.node)
if(t)return t(Ta.create(e,i,n))}return 0}function Ma(t){let e=t.type.prop(Sa)
if(e)return e
let i,n=t.firstChild
if(n&&(i=n.type.prop(il.closedBy))){let e=t.lastChild,n=e&&i.indexOf(e.name)>-1
return t=>function(t,e,i,n,s){let o=t.textAfter,r=o.match(/^\s*/)[0].length,l=s==t.pos+r,a=function(t){let e=t.node,i=e.childAfter(e.from),n=e.lastChild
if(!i)return null
let s=t.options.simulateBreak,o=t.state.doc.lineAt(i.from),r=null==s||s<=o.from?o.to:Math.min(o.to,s)
for(let l=i.to;;){let t=e.childAfter(l)
if(!t||t==n)return null
if(!t.type.isSkipped){if(t.from>=r)return null
let e=/^ */.exec(o.text.slice(i.to-o.from))[0].length
return{from:i.from,to:i.to+e}}l=t.to}}(t)
return a?l?t.column(a.from):t.column(a.to):t.baseIndent+(l?0:1*t.unit)}(t,0,0,0,n&&!function(t){return t.pos==t.options.simulateBreak&&t.options.simulateDoubleBreak}(t)?e.from:void 0)}return null==t.parent?Aa:null}function Aa(){return 0}class Ta extends ka{constructor(t,e,i){super(t.state,t.options),this.base=t,this.pos=e,this.context=i}get node(){return this.context.node}static create(t,e,i){return new Ta(t,e,i)}get textAfter(){return this.textAfterPos(this.pos)}get baseIndent(){return this.baseIndentFor(this.node)}baseIndentFor(t){let e=this.state.doc.lineAt(t.from)
for(;;){let i=t.resolve(e.from)
for(;i.parent&&i.parent.from==i.from;)i=i.parent
if(Oa(i,t))break
e=this.state.doc.lineAt(i.from)}return this.lineIndent(e.from)}continue(){return Ca(this.context.next,this.base,this.pos)}}function Oa(t,e){for(let i=e;i;i=i.parent)if(t==i)return!0
return!1}const Da=j.define(),Ea=new il
function Ba(t){let e=t.lastChild
return e&&e.to==t.to&&e.type.isError}function Ra(t,e,i){for(let n of t.facet(Da)){let s=n(t,e,i)
if(s)return s}return function(t,e,i){let n=la(t)
if(n.length<i)return null
let s=null
for(let o=n.resolveStack(i,1);o;o=o.next){let r=o.node
if(r.to<=i||r.from>i)continue
if(s&&r.from<e)break
let l=r.type.prop(Ea)
if(l&&(r.to<n.length-50||n.length==t.doc.length||!Ba(r))){let n=l(r,t)
n&&n.from<=i&&n.from>=e&&n.to>i&&(s=n)}}return s}(t,e,i)}function La(t,e){let i=e.mapPos(t.from,1),n=e.mapPos(t.to,-1)
return i>=n?void 0:{from:i,to:n}}const Ia=vt.define({map:La}),Pa=vt.define({map:La})
function Na(t){let e=[]
for(let{head:i}of t.state.selection.ranges)e.some(t=>t.from<=i&&t.to>=i)||e.push(t.lineBlockAt(i))
return e}const Wa=Q.define({create:()=>Oe.none,update(t,e){e.isUserEvent("delete")&&e.changes.iterChangedRanges((e,i)=>t=Ha(t,e,i)),t=t.map(e.changes)
for(let i of e.effects)if(i.is(Ia)&&!Fa(t,i.value.from,i.value.to)){let{preparePlaceholder:n}=e.state.facet(ja),s=n?Oe.replace({widget:new Ga(n(e.state,i.value))}):Ya
t=t.update({add:[s.range(i.value.from,i.value.to)]})}else i.is(Pa)&&(t=t.update({filter:(t,e)=>i.value.from!=t||i.value.to!=e,filterFrom:i.value.from,filterTo:i.value.to}))
return e.selection&&(t=Ha(t,e.selection.main.head)),t},provide:t=>po.decorations.from(t),toJSON(t,e){let i=[]
return t.between(0,e.doc.length,(t,e)=>{i.push(t,e)}),i},fromJSON(t){if(!Array.isArray(t)||t.length%2)throw new RangeError("Invalid JSON for fold state")
let e=[]
for(let i=0;i<t.length;){let n=t[i++],s=t[i++]
if("number"!=typeof n||"number"!=typeof s)throw new RangeError("Invalid JSON for fold state")
e.push(Ya.range(n,s))}return Oe.set(e,!0)}})
function Ha(t,e,i=e){let n=!1
return t.between(e,i,(t,s)=>{t<i&&s>e&&(n=!0)}),n?t.update({filterFrom:e,filterTo:i,filter:(t,n)=>t>=i||n<=e}):t}function Va(t,e,i){var n
let s=null
return null===(n=t.field(Wa,!1))||void 0===n||n.between(e,i,(t,e)=>{(!s||s.from>t)&&(s={from:t,to:e})}),s}function Fa(t,e,i){let n=!1
return t.between(e,e,(t,s)=>{t==e&&s==i&&(n=!0)}),n}function za(t,e){return t.field(Wa,!1)?e:e.concat(vt.appendConfig.of($a()))}function qa(t,e,i=!0){let n=t.state.doc.lineAt(e.from).number,s=t.state.doc.lineAt(e.to).number
return po.announce.of(`${t.state.phrase(i?"Folded lines":"Unfolded lines")} ${n} ${t.state.phrase("to")} ${s}.`)}const _a=[{key:"Ctrl-Shift-[",mac:"Cmd-Alt-[",run:t=>{for(let e of Na(t)){let i=Ra(t.state,e.from,e.to)
if(i)return t.dispatch({effects:za(t.state,[Ia.of(i),qa(t,i)])}),!0}return!1}},{key:"Ctrl-Shift-]",mac:"Cmd-Alt-]",run:t=>{if(!t.state.field(Wa,!1))return!1
let e=[]
for(let i of Na(t)){let n=Va(t.state,i.from,i.to)
n&&e.push(Pa.of(n),qa(t,n,!1))}return e.length&&t.dispatch({effects:e}),e.length>0}},{key:"Ctrl-Alt-[",run:t=>{let{state:e}=t,i=[]
for(let n=0;n<e.doc.length;){let s=t.lineBlockAt(n),o=Ra(e,s.from,s.to)
o&&i.push(Ia.of(o)),n=(o?t.lineBlockAt(o.to):s).to+1}return i.length&&t.dispatch({effects:za(t.state,i)}),!!i.length}},{key:"Ctrl-Alt-]",run:t=>{let e=t.state.field(Wa,!1)
if(!e||!e.size)return!1
let i=[]
return e.between(0,t.state.doc.length,(t,e)=>{i.push(Pa.of({from:t,to:e}))}),t.dispatch({effects:i}),!0}}],Ka={placeholderDOM:null,preparePlaceholder:null,placeholderText:"…"},ja=j.define({combine:t=>Dt(t,Ka)})
function $a(t){let e=[Wa,Qa]
return t&&e.push(ja.of(t)),e}function Ua(t,e){let{state:i}=t,n=i.facet(ja),s=e=>{let i=t.lineBlockAt(t.posAtDOM(e.target)),n=Va(t.state,i.from,i.to)
n&&t.dispatch({effects:Pa.of(n)}),e.preventDefault()}
if(n.placeholderDOM)return n.placeholderDOM(t,s,e)
let o=document.createElement("span")
return o.textContent=n.placeholderText,o.setAttribute("aria-label",i.phrase("folded code")),o.title=i.phrase("unfold"),o.className="cm-foldPlaceholder",o.onclick=s,o}const Ya=Oe.replace({widget:new class extends Ae{toDOM(t){return Ua(t,null)}}})
class Ga extends Ae{constructor(t){super(),this.value=t}eq(t){return this.value==t.value}toDOM(t){return Ua(t,this.value)}}const Ja={openText:"⌄",closedText:"›",markerDOM:null,domEventHandlers:{},foldingChanged:()=>!1}
class Xa extends Er{constructor(t,e){super(),this.config=t,this.open=e}eq(t){return this.config==t.config&&this.open==t.open}toDOM(t){if(this.config.markerDOM)return this.config.markerDOM(this.open)
let e=document.createElement("span")
return e.textContent=this.open?this.config.openText:this.config.closedText,e.title=t.state.phrase(this.open?"Fold line":"Unfold line"),e}}const Qa=po.baseTheme({".cm-foldPlaceholder":{backgroundColor:"#eee",border:"1px solid #ddd",color:"#888",borderRadius:".2em",margin:"0 1px",padding:"0 1px",cursor:"pointer"},".cm-foldGutter span":{padding:"0 1px",cursor:"pointer"}})
class Za{constructor(t,e){let i
function n(t){let e=Qt.newName()
return(i||(i=Object.create(null)))["."+e]=t,e}this.specs=t
const s="string"==typeof e.all?e.all:e.all?n(e.all):void 0,o=e.scope
this.scope=o instanceof oa?t=>t.prop(na)==o.data:o?t=>t==o:void 0,this.style=Wl(t.map(t=>({tag:t.tag,class:t.class||n(Object.assign({},t,{tag:null}))})),{all:s}).style,this.module=i?new Qt(i):null,this.themeType=e.themeType}static define(t,e){return new Za(t,e||{})}}const th=j.define(),eh=j.define({combine:t=>t.length?[t[0]]:null})
function ih(t){let e=t.facet(th)
return e.length?e:t.facet(eh)}function nh(t,e){let i,n=[sh]
return t instanceof Za&&(t.module&&n.push(po.styleModule.of(t.module)),i=t.themeType),(null==e?void 0:e.fallback)?n.push(eh.of(t)):i?n.push(th.computeN([po.darkTheme],e=>e.facet(po.darkTheme)==("dark"==i)?[t]:[])):n.push(th.of(t)),n}const sh=tt.high(qi.fromClass(class{constructor(t){this.markCache=Object.create(null),this.tree=la(t.state),this.decorations=this.buildDeco(t,ih(t.state)),this.decoratedTo=t.viewport.to}update(t){let e=la(t.state),i=ih(t.state),n=i!=ih(t.startState),{viewport:s}=t.view,o=t.changes.mapPos(this.decoratedTo,1)
e.length<s.to&&!n&&e.type==this.tree.type&&o>=s.to?(this.decorations=this.decorations.map(t.changes),this.decoratedTo=o):(e!=this.tree||t.viewportChanged||n)&&(this.tree=e,this.decorations=this.buildDeco(t.view,i),this.decoratedTo=s.to)}buildDeco(t,e){if(!e||!this.tree.length)return Oe.none
let i=new Nt
for(let{from:n,to:s}of t.visibleRanges)Hl(this.tree,e,(t,e,n)=>{i.add(t,e,this.markCache[n]||(this.markCache[n]=Oe.mark({class:n})))},n,s)
return i.finish()}},{decorations:t=>t.decorations})),oh=Za.define([{tag:ea.meta,color:"#404740"},{tag:ea.link,textDecoration:"underline"},{tag:ea.heading,textDecoration:"underline",fontWeight:"bold"},{tag:ea.emphasis,fontStyle:"italic"},{tag:ea.strong,fontWeight:"bold"},{tag:ea.strikethrough,textDecoration:"line-through"},{tag:ea.keyword,color:"#708"},{tag:[ea.atom,ea.bool,ea.url,ea.contentSeparator,ea.labelName],color:"#219"},{tag:[ea.literal,ea.inserted],color:"#164"},{tag:[ea.string,ea.deleted],color:"#a11"},{tag:[ea.regexp,ea.escape,ea.special(ea.string)],color:"#e40"},{tag:ea.definition(ea.variableName),color:"#00f"},{tag:ea.local(ea.variableName),color:"#30a"},{tag:[ea.typeName,ea.namespace],color:"#085"},{tag:ea.className,color:"#167"},{tag:[ea.special(ea.variableName),ea.macroName],color:"#256"},{tag:ea.definition(ea.propertyName),color:"#00c"},{tag:ea.comment,color:"#940"},{tag:ea.invalid,color:"#f00"}]),rh=po.baseTheme({"&.cm-focused .cm-matchingBracket":{backgroundColor:"#328c8252"},"&.cm-focused .cm-nonmatchingBracket":{backgroundColor:"#bb555544"}}),lh="()[]{}",ah=j.define({combine:t=>Dt(t,{afterCursor:!0,brackets:lh,maxScanDistance:1e4,renderMatch:uh})}),hh=Oe.mark({class:"cm-matchingBracket"}),ch=Oe.mark({class:"cm-nonmatchingBracket"})
function uh(t){let e=[],i=t.matched?hh:ch
return e.push(i.range(t.start.from,t.start.to)),t.end&&e.push(i.range(t.end.from,t.end.to)),e}function dh(t){let e=[],i=t.facet(ah)
for(let n of t.selection.ranges){if(!n.empty)continue
let s=vh(t,n.head,-1,i)||n.head>0&&vh(t,n.head-1,1,i)||i.afterCursor&&(vh(t,n.head,1,i)||n.head<t.doc.length&&vh(t,n.head+1,-1,i))
s&&(e=e.concat(i.renderMatch(s,t)))}return Oe.set(e,!0)}const fh=[qi.fromClass(class{constructor(t){this.paused=!1,this.decorations=dh(t.state)}update(t){(t.docChanged||t.selectionSet||this.paused)&&(t.view.composing?(this.decorations=this.decorations.map(t.changes),this.paused=!0):(this.decorations=dh(t.state),this.paused=!1))}},{decorations:t=>t.decorations}),rh],ph=new il
function mh(t,e,i){let n=t.prop(e<0?il.openedBy:il.closedBy)
if(n)return n
if(1==t.name.length){let n=i.indexOf(t.name)
if(n>-1&&n%2==(e<0?1:0))return[i[n+e]]}return null}function gh(t){let e=t.type.prop(ph)
return e?e(t.node):t}function vh(t,e,i,n={}){let s=n.maxScanDistance||1e4,o=n.brackets||lh,r=la(t),l=r.resolveInner(e,i)
for(let a=l;a;a=a.parent){let t=mh(a.type,i,o)
if(t&&a.from<a.to){let n=gh(a)
if(n&&(i>0?e>=n.from&&e<n.to:e>n.from&&e<=n.to))return wh(0,0,i,a,n,t,o)}}return function(t,e,i,n,s,o,r){if(i<0?!e:e==t.doc.length)return null
let l=i<0?t.sliceDoc(e-1,e):t.sliceDoc(e,e+1),a=r.indexOf(l)
if(a<0||a%2==0!=i>0)return null
let h={from:i<0?e-1:e,to:i>0?e+1:e},c=t.doc.iterRange(e,i>0?t.doc.length:0),u=0
for(let d=0;!c.next().done&&d<=o;){let t=c.value
i<0&&(d+=t.length)
let o=e+d*i
for(let e=i>0?0:t.length-1,l=i>0?t.length:-1;e!=l;e+=i){let l=r.indexOf(t[e])
if(!(l<0||n.resolveInner(o+e,1).type!=s))if(l%2==0==i>0)u++
else{if(1==u)return{start:h,end:{from:o+e,to:o+e+1},matched:l>>1==a>>1}
u--}}i>0&&(d+=t.length)}return c.done?{start:h,matched:!1}:null}(t,e,i,r,l.type,s,o)}function wh(t,e,i,n,s,o,r){let l=n.parent,a={from:s.from,to:s.to},h=0,c=null==l?void 0:l.cursor()
if(c&&(i<0?c.childBefore(n.from):c.childAfter(n.to)))do{if(i<0?c.to<=n.from:c.from>=n.to){if(0==h&&o.indexOf(c.type.name)>-1&&c.from<c.to){let t=gh(c)
return{start:a,end:t?{from:t.from,to:t.to}:void 0,matched:!0}}if(mh(c.type,i,r))h++
else if(mh(c.type,-i,r)){if(0==h){let t=gh(c)
return{start:a,end:t&&t.from<t.to?{from:t.from,to:t.to}:void 0,matched:!1}}h--}}}while(i<0?c.prevSibling():c.nextSibling())
return{start:a,matched:!1}}const bh=Object.create(null),yh=[ol.none],xh=[],kh=Object.create(null),Sh=Object.create(null)
for(let[jf,$f]of[["variable","variableName"],["variable-2","variableName.special"],["string-2","string.special"],["def","variableName.definition"],["tag","tagName"],["attribute","attributeName"],["type","typeName"],["builtin","variableName.standard"],["qualifier","modifier"],["error","invalid"],["header","heading"],["property","propertyName"]])Sh[jf]=Mh(bh,$f)
function Ch(t,e){xh.indexOf(t)>-1||(xh.push(t),console.warn(e))}function Mh(t,e){let i=[]
for(let l of e.split(" ")){let e=[]
for(let i of l.split(".")){let n=t[i]||ea[i]
n?"function"==typeof n?e.length?e=e.map(n):Ch(i,`Modifier ${i} used at start of tag`):e.length?Ch(i,`Tag ${i} used as modifier`):e=Array.isArray(n)?n:[n]:Ch(i,`Unknown highlighting tag ${i}`)}for(let t of e)i.push(t)}if(!i.length)return 0
let n=e.replace(/ /g,"_"),s=n+" "+i.map(t=>t.id),o=kh[s]
if(o)return o.id
let r=kh[s]=ol.define({id:yh.length,name:n,props:[Il({[n]:i})]})
return yh.push(r),r.id}function Ah(t,e){return({state:i,dispatch:n})=>{if(i.readOnly)return!1
let s=t(e,i)
return!!s&&(n(i.update(s)),!0)}}si.RTL,si.LTR
const Th=Ah(function(t,e,i=e.selection.ranges){let n=[],s=-1
t:for(let{from:o,to:r}of i){let t,i=n.length,l=1e9
for(let a=o;a<=r;){let i=e.doc.lineAt(a)
if(null==t&&(t=Eh(e,i.from).line,!t))continue t
if(i.from>s&&(o==r||r>i.from)){s=i.from
let e=/^\s*/.exec(i.text)[0].length,o=e==i.length,r=i.text.slice(e,e+t.length)==t?e:-1
e<i.text.length&&e<l&&(l=e),n.push({line:i,comment:r,token:t,indent:e,empty:o,single:!1})}a=i.to+1}if(l<1e9)for(let e=i;e<n.length;e++)n[e].indent<n[e].line.text.length&&(n[e].indent=l)
n.length==i+1&&(n[i].single=!0)}if(2!=t&&n.some(t=>t.comment<0&&(!t.empty||t.single))){let t=[]
for(let{line:e,token:s,indent:o,empty:r,single:l}of n)!l&&r||t.push({from:e.from+o,insert:s+" "})
let i=e.changes(t)
return{changes:i,selection:e.selection.map(i,1)}}if(1!=t&&n.some(t=>t.comment>=0)){let t=[]
for(let{line:e,comment:i,token:s}of n)if(i>=0){let n=e.from+i,o=n+s.length
" "==e.text[o-e.from]&&o++,t.push({from:n,to:o})}return{changes:t}}return null},0),Oh=Ah(Bh,0),Dh=Ah((t,e)=>Bh(t,e,function(t){let e=[]
for(let i of t.selection.ranges){let n=t.doc.lineAt(i.from),s=i.to<=n.to?n:t.doc.lineAt(i.to)
s.from>n.from&&s.from==i.to&&(s=i.to==n.to+1?n:t.doc.lineAt(i.to-1))
let o=e.length-1
o>=0&&e[o].to>n.from?e[o].to=s.to:e.push({from:n.from+/^\s*/.exec(n.text)[0].length,to:s.to})}return e}(e)),0)
function Eh(t,e){let i=t.languageDataAt("commentTokens",e,1)
return i.length?i[0]:{}}function Bh(t,e,i=e.selection.ranges){let n=i.map(t=>Eh(e,t.from).block)
if(!n.every(t=>t))return null
let s=i.map((t,i)=>function(t,{open:e,close:i},n,s){let o,r,l=t.sliceDoc(n-50,n),a=t.sliceDoc(s,s+50),h=/\s*$/.exec(l)[0].length,c=/^\s*/.exec(a)[0].length,u=l.length-h
if(l.slice(u-e.length,u)==e&&a.slice(c,c+i.length)==i)return{open:{pos:n-h,margin:h&&1},close:{pos:s+c,margin:c&&1}}
s-n<=100?o=r=t.sliceDoc(n,s):(o=t.sliceDoc(n,n+50),r=t.sliceDoc(s-50,s))
let d=/^\s*/.exec(o)[0].length,f=/\s*$/.exec(r)[0].length,p=r.length-f-i.length
return o.slice(d,d+e.length)==e&&r.slice(p,p+i.length)==i?{open:{pos:n+d+e.length,margin:/\s/.test(o.charAt(d+e.length))?1:0},close:{pos:s-f-i.length,margin:/\s/.test(r.charAt(p-1))?1:0}}:null}(e,n[i],t.from,t.to))
if(2!=t&&!s.every(t=>t))return{changes:e.changes(i.map((t,e)=>s[e]?[]:[{from:t.from,insert:n[e].open+" "},{from:t.to,insert:" "+n[e].close}]))}
if(1!=t&&s.some(t=>t)){let t=[]
for(let e,i=0;i<s.length;i++)if(e=s[i]){let s=n[i],{open:o,close:r}=e
t.push({from:o.pos-s.open.length,to:o.pos+o.margin},{from:r.pos-r.margin,to:r.pos+s.close.length})}return{changes:t}}return null}const Rh=pt.define(),Lh=pt.define(),Ih=j.define(),Ph=j.define({combine:t=>Dt(t,{minDepth:100,newGroupDelay:500,joinToEvent:(t,e)=>e},{minDepth:Math.max,newGroupDelay:Math.min,joinToEvent:(t,e)=>(i,n)=>t(i,n)||e(i,n)})}),Nh=Q.define({create:()=>Xh.empty,update(t,e){let i=e.state.facet(Ph),n=e.annotation(Rh)
if(n){let s=qh.fromTransaction(e,n.selection),o=n.side,r=0==o?t.undone:t.done
return r=s?_h(r,r.length,i.minDepth,s):$h(r,e.startState.selection),new Xh(0==o?n.rest:r,0==o?r:n.rest)}let s=e.annotation(Lh)
if("full"!=s&&"before"!=s||(t=t.isolate()),!1===e.annotation(wt.addToHistory))return e.changes.empty?t:t.addMapping(e.changes.desc)
let o=qh.fromTransaction(e),r=e.annotation(wt.time),l=e.annotation(wt.userEvent)
return o?t=t.addChanges(o,r,l,i,e):e.selection&&(t=t.addSelection(e.startState.selection,r,l,i.newGroupDelay)),"full"!=s&&"after"!=s||(t=t.isolate()),t},toJSON:t=>({done:t.done.map(t=>t.toJSON()),undone:t.undone.map(t=>t.toJSON())}),fromJSON:t=>new Xh(t.done.map(qh.fromJSON),t.undone.map(qh.fromJSON))})
function Wh(t,e){return function({state:i,dispatch:n}){if(!e&&i.readOnly)return!1
let s=i.field(Nh,!1)
if(!s)return!1
let o=s.pop(t,i,e)
return!!o&&(n(o),!0)}}const Hh=Wh(0,!1),Vh=Wh(1,!1),Fh=Wh(0,!0),zh=Wh(1,!0)
class qh{constructor(t,e,i,n,s){this.changes=t,this.effects=e,this.mapped=i,this.startSelection=n,this.selectionsAfter=s}setSelAfter(t){return new qh(this.changes,this.effects,this.mapped,this.startSelection,t)}toJSON(){var t,e,i
return{changes:null===(t=this.changes)||void 0===t?void 0:t.toJSON(),mapped:null===(e=this.mapped)||void 0===e?void 0:e.toJSON(),startSelection:null===(i=this.startSelection)||void 0===i?void 0:i.toJSON(),selectionsAfter:this.selectionsAfter.map(t=>t.toJSON())}}static fromJSON(t){return new qh(t.changes&&I.fromJSON(t.changes),[],t.mapped&&L.fromJSON(t.mapped),t.startSelection&&q.fromJSON(t.startSelection),t.selectionsAfter.map(q.fromJSON))}static fromTransaction(t,e){let i=jh
for(let n of t.startState.facet(Ih)){let e=n(t)
e.length&&(i=i.concat(e))}return!i.length&&t.changes.empty?null:new qh(t.changes.invert(t.startState.doc),i,void 0,e||t.startState.selection,jh)}static selection(t){return new qh(void 0,jh,void 0,void 0,t)}}function _h(t,e,i,n){let s=e+1>i+20?e-i-1:0,o=t.slice(s,e)
return o.push(n),o}function Kh(t,e){return t.length?e.length?t.concat(e):t:e}const jh=[]
function $h(t,e){if(t.length){let i=t[t.length-1],n=i.selectionsAfter.slice(Math.max(0,i.selectionsAfter.length-200))
return n.length&&n[n.length-1].eq(e)?t:(n.push(e),_h(t,t.length-1,1e9,i.setSelAfter(n)))}return[qh.selection([e])]}function Uh(t){let e=t[t.length-1],i=t.slice()
return i[t.length-1]=e.setSelAfter(e.selectionsAfter.slice(0,e.selectionsAfter.length-1)),i}function Yh(t,e){if(!t.length)return t
let i=t.length,n=jh
for(;i;){let s=Gh(t[i-1],e,n)
if(s.changes&&!s.changes.empty||s.effects.length){let e=t.slice(0,i)
return e[i-1]=s,e}e=s.mapped,i--,n=s.selectionsAfter}return n.length?[qh.selection(n)]:jh}function Gh(t,e,i){let n=Kh(t.selectionsAfter.length?t.selectionsAfter.map(t=>t.map(e)):jh,i)
if(!t.changes)return qh.selection(n)
let s=t.changes.map(e),o=e.mapDesc(t.changes,!0),r=t.mapped?t.mapped.composeDesc(o):o
return new qh(s,vt.mapEffects(t.effects,e),r,t.startSelection.map(o),n)}const Jh=/^(input\.type|delete)($|\.)/
class Xh{constructor(t,e,i=0,n=void 0){this.done=t,this.undone=e,this.prevTime=i,this.prevUserEvent=n}isolate(){return this.prevTime?new Xh(this.done,this.undone):this}addChanges(t,e,i,n,s){let o=this.done,r=o[o.length-1]
return o=r&&r.changes&&!r.changes.empty&&t.changes&&(!i||Jh.test(i))&&(!r.selectionsAfter.length&&e-this.prevTime<n.newGroupDelay&&n.joinToEvent(s,function(t,e){let i=[],n=!1
return t.iterChangedRanges((t,e)=>i.push(t,e)),e.iterChangedRanges((t,e,s,o)=>{for(let r=0;r<i.length;){let t=i[r++],e=i[r++]
o>=t&&s<=e&&(n=!0)}}),n}(r.changes,t.changes))||"input.type.compose"==i)?_h(o,o.length-1,n.minDepth,new qh(t.changes.compose(r.changes),Kh(vt.mapEffects(t.effects,r.changes),r.effects),r.mapped,r.startSelection,jh)):_h(o,o.length,n.minDepth,t),new Xh(o,jh,e,i)}addSelection(t,e,i,n){let s=this.done.length?this.done[this.done.length-1].selectionsAfter:jh
return s.length>0&&e-this.prevTime<n&&i==this.prevUserEvent&&i&&/^select($|\.)/.test(i)&&(o=s[s.length-1],r=t,o.ranges.length==r.ranges.length&&0===o.ranges.filter((t,e)=>t.empty!=r.ranges[e].empty).length)?this:new Xh($h(this.done,t),this.undone,e,i)
var o,r}addMapping(t){return new Xh(Yh(this.done,t),Yh(this.undone,t),this.prevTime,this.prevUserEvent)}pop(t,e,i){let n=0==t?this.done:this.undone
if(0==n.length)return null
let s=n[n.length-1],o=s.selectionsAfter[0]||(s.startSelection?s.startSelection.map(s.changes.invertedDesc,1):e.selection)
if(i&&s.selectionsAfter.length)return e.update({selection:s.selectionsAfter[s.selectionsAfter.length-1],annotations:Rh.of({side:t,rest:Uh(n),selection:o}),userEvent:0==t?"select.undo":"select.redo",scrollIntoView:!0})
if(s.changes){let i=1==n.length?jh:n.slice(0,n.length-1)
return s.mapped&&(i=Yh(i,s.mapped)),e.update({changes:s.changes,selection:s.startSelection,effects:s.effects,annotations:Rh.of({side:t,rest:i,selection:o}),filter:!1,userEvent:0==t?"undo":"redo",scrollIntoView:!0})}return null}}Xh.empty=new Xh(jh,jh)
const Qh=[{key:"Mod-z",run:Hh,preventDefault:!0},{key:"Mod-y",mac:"Mod-Shift-z",run:Vh,preventDefault:!0},{linux:"Ctrl-Shift-z",run:Vh,preventDefault:!0},{key:"Mod-u",run:Fh,preventDefault:!0},{key:"Alt-u",mac:"Mod-Shift-u",run:zh,preventDefault:!0}]
function Zh(t,e){return q.create(t.ranges.map(e),t.mainIndex)}function tc(t,e){return t.update({selection:e,scrollIntoView:!0,userEvent:"select"})}function ec({state:t,dispatch:e},i){let n=Zh(t.selection,i)
return!n.eq(t.selection,!0)&&(e(tc(t,n)),!0)}function ic(t,e){return q.cursor(e?t.to:t.from)}function nc(t,e){return ec(t,i=>i.empty?t.moveByChar(i,e):ic(i,e))}function sc(t){return t.textDirectionAt(t.state.selection.main.head)==si.LTR}const oc=t=>nc(t,!sc(t)),rc=t=>nc(t,sc(t))
function lc(t,e){return ec(t,i=>i.empty?t.moveByGroup(i,e):ic(i,e))}function ac(t,e,i){if(e.type.prop(i))return!0
let n=e.to-e.from
return n&&(n>2||/[^\s,.;:]/.test(t.sliceDoc(e.from,e.to)))||e.firstChild}function hc(t,e,i){let n,s,o=la(t).resolveInner(e.head),r=i?il.closedBy:il.openedBy
for(let l=e.head;;){let e=i?o.childAfter(l):o.childBefore(l)
if(!e)break
ac(t,e,r)?o=e:l=i?e.to:e.from}return s=o.type.prop(r)&&(n=i?vh(t,o.from,1):vh(t,o.to,-1))&&n.matched?i?n.end.to:n.end.from:i?o.to:o.from,q.cursor(s,i?-1:1)}function cc(t,e){return ec(t,i=>{if(!i.empty)return ic(i,e)
let n=t.moveVertically(i,e)
return n.head!=i.head?n:t.moveToLineBoundary(i,e)})}"undefined"!=typeof Intl&&Intl.Segmenter
const uc=t=>cc(t,!1),dc=t=>cc(t,!0)
function fc(t){let e,i=t.scrollDOM.clientHeight<t.scrollDOM.scrollHeight-2,n=0,s=0
if(i){for(let e of t.state.facet(po.scrollMargins)){let i=e(t);(null==i?void 0:i.top)&&(n=Math.max(null==i?void 0:i.top,n)),(null==i?void 0:i.bottom)&&(s=Math.max(null==i?void 0:i.bottom,s))}e=t.scrollDOM.clientHeight-n-s}else e=(t.dom.ownerDocument.defaultView||window).innerHeight
return{marginTop:n,marginBottom:s,selfScroll:i,height:Math.max(t.defaultLineHeight,e-5)}}function pc(t,e){let i,n=fc(t),{state:s}=t,o=Zh(s.selection,i=>i.empty?t.moveVertically(i,e,n.height):ic(i,e))
if(o.eq(s.selection))return!1
if(n.selfScroll){let e=t.coordsAtPos(s.selection.main.head),r=t.scrollDOM.getBoundingClientRect(),l=r.top+n.marginTop,a=r.bottom-n.marginBottom
e&&e.top>l&&e.bottom<a&&(i=po.scrollIntoView(o.main.head,{y:"start",yMargin:e.top-l}))}return t.dispatch(tc(s,o),{effects:i}),!0}const mc=t=>pc(t,!1),gc=t=>pc(t,!0)
function vc(t,e,i){let n=t.lineBlockAt(e.head),s=t.moveToLineBoundary(e,i)
if(s.head==e.head&&s.head!=(i?n.to:n.from)&&(s=t.moveToLineBoundary(e,i,!1)),!i&&s.head==n.from&&n.length){let i=/^\s*/.exec(t.state.sliceDoc(n.from,Math.min(n.from+100,n.to)))[0].length
i&&e.head!=n.from+i&&(s=q.cursor(n.from+i))}return s}function wc(t,e){let i=Zh(t.state.selection,t=>{let i=e(t)
return q.range(t.anchor,i.head,i.goalColumn,i.bidiLevel||void 0,i.assoc)})
return!i.eq(t.state.selection)&&(t.dispatch(tc(t.state,i)),!0)}function bc(t,e){return wc(t,i=>t.moveByChar(i,e))}const yc=t=>bc(t,!sc(t)),xc=t=>bc(t,sc(t))
function kc(t,e){return wc(t,i=>t.moveByGroup(i,e))}function Sc(t,e){return wc(t,i=>t.moveVertically(i,e))}const Cc=t=>Sc(t,!1),Mc=t=>Sc(t,!0)
function Ac(t,e){return wc(t,i=>t.moveVertically(i,e,fc(t).height))}const Tc=t=>Ac(t,!1),Oc=t=>Ac(t,!0),Dc=({state:t,dispatch:e})=>(e(tc(t,{anchor:0})),!0),Ec=({state:t,dispatch:e})=>(e(tc(t,{anchor:t.doc.length})),!0),Bc=({state:t,dispatch:e})=>(e(tc(t,{anchor:t.selection.main.anchor,head:0})),!0),Rc=({state:t,dispatch:e})=>(e(tc(t,{anchor:t.selection.main.anchor,head:t.doc.length})),!0)
function Lc(t,e){let{state:i}=t,n=i.selection,s=i.selection.ranges.slice()
for(let o of i.selection.ranges){let n=i.doc.lineAt(o.head)
if(e?n.to<t.state.doc.length:n.from>0)for(let i=o;;){let o=t.moveVertically(i,e)
if(o.head<n.from||o.head>n.to){s.some(t=>t.head==o.head)||s.push(o)
break}if(o.head==i.head)break
i=o}}return s.length!=n.ranges.length&&(t.dispatch(tc(i,q.create(s,s.length-1))),!0)}function Ic(t,e){if(t.state.readOnly)return!1
let i="delete.selection",{state:n}=t,s=n.changeByRange(n=>{let{from:s,to:o}=n
if(s==o){let r=e(n)
r<s?(i="delete.backward",r=Pc(t,r,!1)):r>s&&(i="delete.forward",r=Pc(t,r,!0)),s=Math.min(s,r),o=Math.max(o,r)}else s=Pc(t,s,!1),o=Pc(t,o,!0)
return s==o?{range:n}:{changes:{from:s,to:o},range:q.cursor(s,s<n.head?-1:1)}})
return!s.changes.empty&&(t.dispatch(n.update(s,{scrollIntoView:!0,userEvent:i,effects:"delete.selection"==i?po.announce.of(n.phrase("Selection deleted")):void 0})),!0)}function Pc(t,e,i){if(t instanceof po)for(let n of t.state.facet(po.atomicRanges).map(e=>e(t)))n.between(e,e,(t,n)=>{t<e&&n>e&&(e=i?n:t)})
return e}const Nc=(t,e,i)=>Ic(t,n=>{let s,o,r=n.from,{state:l}=t,a=l.doc.lineAt(r)
if(i&&!e&&r>a.from&&r<a.from+200&&!/[^ \t]/.test(s=a.text.slice(0,r-a.from))){if("\t"==s[s.length-1])return r-1
let t=Ut(s,l.tabSize)%ba(l)||ba(l)
for(let e=0;e<t&&" "==s[s.length-1-e];e++)r--
o=r}else o=T(a.text,r-a.from,e,e)+a.from,o==r&&a.number!=(e?l.doc.lines:1)?o+=e?1:-1:!e&&/[\ufe00-\ufe0f]/.test(a.text.slice(o-a.from,r-a.from))&&(o=T(a.text,o-a.from,!1,!1)+a.from)
return o}),Wc=t=>Nc(t,!1,!0),Hc=t=>Nc(t,!0,!1),Vc=(t,e)=>Ic(t,i=>{let n=i.head,{state:s}=t,o=s.doc.lineAt(n),r=s.charCategorizer(n)
for(let t=null;;){if(n==(e?o.to:o.from)){n==i.head&&o.number!=(e?s.doc.lines:1)&&(n+=e?1:-1)
break}let l=T(o.text,n-o.from,e)+o.from,a=o.text.slice(Math.min(n,l)-o.from,Math.max(n,l)-o.from),h=r(a)
if(null!=t&&h!=t)break
" "==a&&n==i.head||(t=h),n=l}return n}),Fc=t=>Vc(t,!1)
function zc(t){let e=[],i=-1
for(let n of t.selection.ranges){let s=t.doc.lineAt(n.from),o=t.doc.lineAt(n.to)
if(n.empty||n.to!=o.from||(o=t.doc.lineAt(n.to-1)),i>=s.number){let t=e[e.length-1]
t.to=o.to,t.ranges.push(n)}else e.push({from:s.from,to:o.to,ranges:[n]})
i=o.number+1}return e}function qc(t,e,i){if(t.readOnly)return!1
let n=[],s=[]
for(let o of zc(t)){if(i?o.to==t.doc.length:0==o.from)continue
let e=t.doc.lineAt(i?o.to+1:o.from-1),r=e.length+1
if(i){n.push({from:o.to,to:e.to},{from:o.from,insert:e.text+t.lineBreak})
for(let e of o.ranges)s.push(q.range(Math.min(t.doc.length,e.anchor+r),Math.min(t.doc.length,e.head+r)))}else{n.push({from:e.from,to:o.from},{from:o.to,insert:t.lineBreak+e.text})
for(let t of o.ranges)s.push(q.range(t.anchor-r,t.head-r))}}return!!n.length&&(e(t.update({changes:n,scrollIntoView:!0,selection:q.create(s,t.selection.mainIndex),userEvent:"move.line"})),!0)}function _c(t,e,i){if(t.readOnly)return!1
let n=[]
for(let o of zc(t))i?n.push({from:o.from,insert:t.doc.slice(o.from,o.to)+t.lineBreak}):n.push({from:o.to,insert:t.lineBreak+t.doc.slice(o.from,o.to)})
let s=t.changes(n)
return e(t.update({changes:s,selection:t.selection.map(s,i?1:-1),scrollIntoView:!0,userEvent:"input.copyline"})),!0}const Kc=jc(!1)
function jc(t){return({state:e,dispatch:i})=>{if(e.readOnly)return!1
let n=e.changeByRange(i=>{let{from:n,to:s}=i,o=e.doc.lineAt(n),r=!t&&n==s&&function(t,e){if(/\(\)|\[\]|\{\}/.test(t.sliceDoc(e-1,e+1)))return{from:e,to:e}
let i,n=la(t).resolveInner(e),s=n.childBefore(e),o=n.childAfter(e)
return s&&o&&s.to<=e&&o.from>=e&&(i=s.type.prop(il.closedBy))&&i.indexOf(o.name)>-1&&t.doc.lineAt(s.to).from==t.doc.lineAt(o.from).from&&!/\S/.test(t.sliceDoc(s.to,o.from))?{from:s.to,to:o.from}:null}(e,n)
t&&(n=s=(s<=o.to?o:e.doc.lineAt(s)).to)
let l=new ka(e,{simulateBreak:n,simulateDoubleBreak:!!r}),a=xa(l,n)
for(null==a&&(a=Ut(/^\s*/.exec(e.doc.lineAt(n).text)[0],e.tabSize));s<o.to&&/\s/.test(o.text[s-o.from]);)s++
r?({from:n,to:s}=r):n>o.from&&n<o.from+100&&!/\S/.test(o.text.slice(0,n))&&(n=o.from)
let h=["",ya(e,a)]
return r&&h.push(ya(e,l.lineIndent(o.from,-1))),{changes:{from:n,to:s,insert:v.of(h)},range:q.cursor(n+1+h[1].length)}})
return i(e.update(n,{scrollIntoView:!0,userEvent:"input"})),!0}}function $c(t,e){let i=-1
return t.changeByRange(n=>{let s=[]
for(let r=n.from;r<=n.to;){let o=t.doc.lineAt(r)
o.number>i&&(n.empty||n.to>o.from)&&(e(o,s,n),i=o.number),r=o.to+1}let o=t.changes(s)
return{changes:s,range:q.range(o.mapPos(n.anchor,1),o.mapPos(n.head,1))}})}const Uc=({state:t,dispatch:e})=>!t.readOnly&&(e(t.update($c(t,(e,i)=>{i.push({from:e.from,insert:t.facet(wa)})}),{userEvent:"input.indent"})),!0),Yc=({state:t,dispatch:e})=>!t.readOnly&&(e(t.update($c(t,(e,i)=>{let n=/^\s*/.exec(e.text)[0]
if(!n)return
let s=Ut(n,t.tabSize),o=0,r=ya(t,Math.max(0,s-ba(t)))
for(;o<n.length&&o<r.length&&n.charCodeAt(o)==r.charCodeAt(o);)o++
i.push({from:e.from+o,to:e.from+n.length,insert:r.slice(o)})}),{userEvent:"delete.dedent"})),!0),Gc=[{key:"Alt-ArrowLeft",mac:"Ctrl-ArrowLeft",run:t=>ec(t,e=>hc(t.state,e,!sc(t))),shift:t=>wc(t,e=>hc(t.state,e,!sc(t)))},{key:"Alt-ArrowRight",mac:"Ctrl-ArrowRight",run:t=>ec(t,e=>hc(t.state,e,sc(t))),shift:t=>wc(t,e=>hc(t.state,e,sc(t)))},{key:"Alt-ArrowUp",run:({state:t,dispatch:e})=>qc(t,e,!1)},{key:"Shift-Alt-ArrowUp",run:({state:t,dispatch:e})=>_c(t,e,!1)},{key:"Alt-ArrowDown",run:({state:t,dispatch:e})=>qc(t,e,!0)},{key:"Shift-Alt-ArrowDown",run:({state:t,dispatch:e})=>_c(t,e,!0)},{key:"Mod-Alt-ArrowUp",run:t=>Lc(t,!1)},{key:"Mod-Alt-ArrowDown",run:t=>Lc(t,!0)},{key:"Escape",run:({state:t,dispatch:e})=>{let i=t.selection,n=null
return i.ranges.length>1?n=q.create([i.main]):i.main.empty||(n=q.create([q.cursor(i.main.head)])),!!n&&(e(tc(t,n)),!0)}},{key:"Mod-Enter",run:jc(!0)},{key:"Alt-l",mac:"Ctrl-l",run:({state:t,dispatch:e})=>{let i=zc(t).map(({from:e,to:i})=>q.range(e,Math.min(i+1,t.doc.length)))
return e(t.update({selection:q.create(i),userEvent:"select"})),!0}},{key:"Mod-i",run:({state:t,dispatch:e})=>{let i=Zh(t.selection,e=>{let i=la(t),n=i.resolveStack(e.from,1)
if(e.empty){let t=i.resolveStack(e.from,-1)
t.node.from>=n.node.from&&t.node.to<=n.node.to&&(n=t)}for(let t=n;t;t=t.next){let{node:i}=t
if((i.from<e.from&&i.to>=e.to||i.to>e.to&&i.from<=e.from)&&t.next)return q.range(i.to,i.from)}return e})
return!i.eq(t.selection)&&(e(tc(t,i)),!0)},preventDefault:!0},{key:"Mod-[",run:Yc},{key:"Mod-]",run:Uc},{key:"Mod-Alt-\\",run:({state:t,dispatch:e})=>{if(t.readOnly)return!1
let i=Object.create(null),n=new ka(t,{overrideIndentation:t=>i[t]??-1}),s=$c(t,(e,s,o)=>{let r=xa(n,e.from)
if(null==r)return;/\S/.test(e.text)||(r=0)
let l=/^\s*/.exec(e.text)[0],a=ya(t,r);(l!=a||o.from<e.from+l.length)&&(i[e.from]=r,s.push({from:e.from,to:e.from+l.length,insert:a}))})
return s.changes.empty||e(t.update(s,{userEvent:"indent"})),!0}},{key:"Shift-Mod-k",run:t=>{if(t.state.readOnly)return!1
let{state:e}=t,i=e.changes(zc(e).map(({from:t,to:i})=>(t>0?t--:i<e.doc.length&&i++,{from:t,to:i}))),n=Zh(e.selection,e=>{let i
if(t.lineWrapping){let n=t.lineBlockAt(e.head),s=t.coordsAtPos(e.head,e.assoc||1)
s&&(i=n.bottom+t.documentTop-s.bottom+t.defaultLineHeight/2)}return t.moveVertically(e,!0,i)}).map(i)
return t.dispatch({changes:i,selection:n,scrollIntoView:!0,userEvent:"delete.line"}),!0}},{key:"Shift-Mod-\\",run:({state:t,dispatch:e})=>function(t,e){let i=!1,n=Zh(t.selection,e=>{let n=vh(t,e.head,-1)||vh(t,e.head,1)||e.head>0&&vh(t,e.head-1,1)||e.head<t.doc.length&&vh(t,e.head+1,-1)
if(!n||!n.end)return e
i=!0
let s=n.start.from==e.head?n.end.to:n.end.from
return q.cursor(s)})
return!!i&&(e(tc(t,n)),!0)}(t,e)},{key:"Mod-/",run:t=>{let{state:e}=t,i=e.doc.lineAt(e.selection.main.from),n=Eh(t.state,i.from)
return n.line?Th(t):!!n.block&&Dh(t)}},{key:"Alt-A",run:Oh},{key:"Ctrl-m",mac:"Shift-Alt-m",run:t=>(t.setTabFocusMode(),!0)}].concat([{key:"ArrowLeft",run:oc,shift:yc,preventDefault:!0},{key:"Mod-ArrowLeft",mac:"Alt-ArrowLeft",run:t=>lc(t,!sc(t)),shift:t=>kc(t,!sc(t)),preventDefault:!0},{mac:"Cmd-ArrowLeft",run:t=>ec(t,e=>vc(t,e,!sc(t))),shift:t=>wc(t,e=>vc(t,e,!sc(t))),preventDefault:!0},{key:"ArrowRight",run:rc,shift:xc,preventDefault:!0},{key:"Mod-ArrowRight",mac:"Alt-ArrowRight",run:t=>lc(t,sc(t)),shift:t=>kc(t,sc(t)),preventDefault:!0},{mac:"Cmd-ArrowRight",run:t=>ec(t,e=>vc(t,e,sc(t))),shift:t=>wc(t,e=>vc(t,e,sc(t))),preventDefault:!0},{key:"ArrowUp",run:uc,shift:Cc,preventDefault:!0},{mac:"Cmd-ArrowUp",run:Dc,shift:Bc},{mac:"Ctrl-ArrowUp",run:mc,shift:Tc},{key:"ArrowDown",run:dc,shift:Mc,preventDefault:!0},{mac:"Cmd-ArrowDown",run:Ec,shift:Rc},{mac:"Ctrl-ArrowDown",run:gc,shift:Oc},{key:"PageUp",run:mc,shift:Tc},{key:"PageDown",run:gc,shift:Oc},{key:"Home",run:t=>ec(t,e=>vc(t,e,!1)),shift:t=>wc(t,e=>vc(t,e,!1)),preventDefault:!0},{key:"Mod-Home",run:Dc,shift:Bc},{key:"End",run:t=>ec(t,e=>vc(t,e,!0)),shift:t=>wc(t,e=>vc(t,e,!0)),preventDefault:!0},{key:"Mod-End",run:Ec,shift:Rc},{key:"Enter",run:Kc,shift:Kc},{key:"Mod-a",run:({state:t,dispatch:e})=>(e(t.update({selection:{anchor:0,head:t.doc.length},userEvent:"select"})),!0)},{key:"Backspace",run:Wc,shift:Wc,preventDefault:!0},{key:"Delete",run:Hc,preventDefault:!0},{key:"Mod-Backspace",mac:"Alt-Backspace",run:Fc,preventDefault:!0},{key:"Mod-Delete",mac:"Alt-Delete",run:t=>Vc(t,!0),preventDefault:!0},{mac:"Mod-Backspace",run:t=>Ic(t,e=>{let i=t.moveToLineBoundary(e,!1).head
return e.head>i?i:Math.max(0,e.head-1)}),preventDefault:!0},{mac:"Mod-Delete",run:t=>Ic(t,e=>{let i=t.moveToLineBoundary(e,!0).head
return e.head<i?i:Math.min(t.state.doc.length,e.head+1)}),preventDefault:!0}].concat([{key:"Ctrl-b",run:oc,shift:yc,preventDefault:!0},{key:"Ctrl-f",run:rc,shift:xc},{key:"Ctrl-p",run:uc,shift:Cc},{key:"Ctrl-n",run:dc,shift:Mc},{key:"Ctrl-a",run:t=>ec(t,e=>q.cursor(t.lineBlockAt(e.head).from,1)),shift:t=>wc(t,e=>q.cursor(t.lineBlockAt(e.head).from))},{key:"Ctrl-e",run:t=>ec(t,e=>q.cursor(t.lineBlockAt(e.head).to,-1)),shift:t=>wc(t,e=>q.cursor(t.lineBlockAt(e.head).to))},{key:"Ctrl-d",run:Hc},{key:"Ctrl-h",run:Wc},{key:"Ctrl-k",run:t=>Ic(t,e=>{let i=t.lineBlockAt(e.head).to
return e.head<i?i:Math.min(t.state.doc.length,e.head+1)})},{key:"Ctrl-Alt-h",run:Fc},{key:"Ctrl-o",run:({state:t,dispatch:e})=>{if(t.readOnly)return!1
let i=t.changeByRange(t=>({changes:{from:t.from,to:t.to,insert:v.of(["",""])},range:q.cursor(t.from)}))
return e(t.update(i,{scrollIntoView:!0,userEvent:"input"})),!0}},{key:"Ctrl-t",run:({state:t,dispatch:e})=>{if(t.readOnly)return!1
let i=t.changeByRange(e=>{if(!e.empty||0==e.from||e.from==t.doc.length)return{range:e}
let i=e.from,n=t.doc.lineAt(i),s=i==n.from?i-1:T(n.text,i-n.from,!1)+n.from,o=i==n.to?i+1:T(n.text,i-n.from,!0)+n.from
return{changes:{from:s,to:o,insert:t.doc.slice(i,o).append(t.doc.slice(s,i))},range:q.cursor(o)}})
return!i.changes.empty&&(e(t.update(i,{scrollIntoView:!0,userEvent:"move.character"})),!0)}},{key:"Ctrl-v",run:gc}].map(t=>({mac:t.key,run:t.run,shift:t.shift})))),Jc={key:"Tab",run:Uc,shift:Yc},Xc="function"==typeof String.prototype.normalize?t=>t.normalize("NFKD"):t=>t
class Qc{constructor(t,e,i=0,n=t.length,s,o){this.test=o,this.value={from:0,to:0,precise:!1},this.done=!1,this.matches=[],this.buffer="",this.bufferPos=0,this.iter=t.iterRange(i,n),this.bufferStart=i,this.normalize=s?t=>s(Xc(t)):Xc,this.query=this.normalize(e)}peek(){if(this.bufferPos==this.buffer.length){if(this.bufferStart+=this.buffer.length,this.iter.next(),this.iter.done)return-1
this.bufferPos=0,this.buffer=this.iter.value}return O(this.buffer,this.bufferPos)}next(){for(;this.matches.length;)this.matches.pop()
return this.nextOverlapping()}nextOverlapping(){for(;;){let t=this.peek()
if(t<0)return this.done=!0,this
let e=D(t),i=this.bufferStart+this.bufferPos
this.bufferPos+=E(t)
let n=this.normalize(e)
if(n.length)for(let s=0,o=i,r=!0;;s++){let t=n.charCodeAt(s),i=this.match(t,o,r,this.bufferPos+this.bufferStart,s==n.length-1)
if(i)return this.value=i,this
if(s==n.length-1)break
r&&s<e.length&&e.charCodeAt(s)==t?o++:r=!1}}}match(t,e,i,n,s){let o=null
for(let r=0;r<this.matches.length;){let e=this.matches[r],i=!1
this.query.charCodeAt(e.index)==t&&(e.index==this.query.length-1?o={from:e.from,to:n,precise:s&&e.precise}:(e.index++,i=!0)),i?r++:this.matches.splice(r,1)}return this.query.charCodeAt(0)==t&&(1==this.query.length?o={from:e,to:n,precise:i&&s}:this.matches.push({from:e,index:1,precise:i})),o&&this.test&&!this.test(o.from,o.to,this.buffer,this.bufferStart)&&(o=null),o}}"undefined"!=typeof Symbol&&(Qc.prototype[Symbol.iterator]=function(){return this})
const Zc={from:-1,to:-1,match:/.*/.exec(""),precise:!0},tu="gm"+(null==/x/.unicode?"":"u")
class eu{constructor(t,e,i,n=0,s=t.length){if(this.text=t,this.to=s,this.curLine="",this.done=!1,this.value=Zc,/\\[sWDnr]|\n|\r|\[\^/.test(e))return new su(t,e,i,n,s)
this.re=new RegExp(e,tu+((null==i?void 0:i.ignoreCase)?"i":"")),this.test=null==i?void 0:i.test,this.iter=t.iter()
let o=t.lineAt(n)
this.curLineStart=o.from,this.matchPos=ou(t,n),this.getLine(this.curLineStart)}getLine(t){this.iter.next(t),this.iter.lineBreak?this.curLine="":(this.curLine=this.iter.value,this.curLineStart+this.curLine.length>this.to&&(this.curLine=this.curLine.slice(0,this.to-this.curLineStart)),this.iter.next())}nextLine(){this.curLineStart=this.curLineStart+this.curLine.length+1,this.curLineStart>this.to?this.curLine="":this.getLine(0)}next(){for(let t=this.matchPos-this.curLineStart;;){this.re.lastIndex=t
let e=this.matchPos<=this.to&&this.re.exec(this.curLine)
if(e){let i=this.curLineStart+e.index,n=i+e[0].length
if(this.matchPos=ou(this.text,n+(i==n?1:0)),i==this.curLineStart+this.curLine.length&&this.nextLine(),(i<n||i>this.value.to)&&(!this.test||this.test(i,n,e)))return this.value={from:i,to:n,precise:!0,match:e},this
t=this.matchPos-this.curLineStart}else{if(!(this.curLineStart+this.curLine.length<this.to))return this.done=!0,this
this.nextLine(),t=0}}}}const iu=new WeakMap
class nu{constructor(t,e){this.from=t,this.text=e}get to(){return this.from+this.text.length}static get(t,e,i){let n=iu.get(t)
if(!n||n.from>=i||n.to<=e){let n=new nu(e,t.sliceString(e,i))
return iu.set(t,n),n}if(n.from==e&&n.to==i)return n
let{text:s,from:o}=n
return o>e&&(s=t.sliceString(e,o)+s,o=e),n.to<i&&(s+=t.sliceString(n.to,i)),iu.set(t,new nu(o,s)),new nu(e,s.slice(e-o,i-o))}}class su{constructor(t,e,i,n,s){this.text=t,this.to=s,this.done=!1,this.value=Zc,this.matchPos=ou(t,n),this.re=new RegExp(e,tu+((null==i?void 0:i.ignoreCase)?"i":"")),this.test=null==i?void 0:i.test,this.flat=nu.get(t,n,this.chunkEnd(n+5e3))}chunkEnd(t){return t>=this.to?this.to:this.text.lineAt(t).to}next(){for(;;){let t=this.re.lastIndex=this.matchPos-this.flat.from,e=this.re.exec(this.flat.text)
if(e&&!e[0]&&e.index==t&&(this.re.lastIndex=t+1,e=this.re.exec(this.flat.text)),e){let t=this.flat.from+e.index,i=t+e[0].length
if((this.flat.to>=this.to||e.index+e[0].length<=this.flat.text.length-10)&&(!this.test||this.test(t,i,e)))return this.value={from:t,to:i,precise:!0,match:e},this.matchPos=ou(this.text,i+(t==i?1:0)),this}if(this.flat.to==this.to)return this.done=!0,this
this.flat=nu.get(this.text,this.flat.from,this.chunkEnd(this.flat.from+2*this.flat.text.length))}}}function ou(t,e){if(e>=t.length)return e
let i,n=t.lineAt(e)
for(;e<n.to&&(i=n.text.charCodeAt(e-n.from))>=56320&&i<57344;)e++
return e}"undefined"!=typeof Symbol&&(eu.prototype[Symbol.iterator]=su.prototype[Symbol.iterator]=function(){return this})
const ru={highlightWordAroundCursor:!1,minSelectionLength:1,maxMatches:100,wholeWords:!1},lu=j.define({combine:t=>Dt(t,ru,{highlightWordAroundCursor:(t,e)=>t||e,minSelectionLength:Math.min,maxMatches:Math.min})}),au=Oe.mark({class:"cm-selectionMatch"}),hu=Oe.mark({class:"cm-selectionMatch cm-selectionMatch-main"})
function cu(t,e,i,n){return!(0!=i&&t(e.sliceDoc(i-1,i))==Mt.Word||n!=e.doc.length&&t(e.sliceDoc(n,n+1))==Mt.Word)}const uu=qi.fromClass(class{constructor(t){this.decorations=this.getDeco(t)}update(t){(t.selectionSet||t.docChanged||t.viewportChanged)&&(this.decorations=this.getDeco(t.view))}getDeco(t){let e=t.state.facet(lu),{state:i}=t,n=i.selection
if(n.ranges.length>1)return Oe.none
let s,o=n.main,r=null
if(o.empty){if(!e.highlightWordAroundCursor)return Oe.none
let t=i.wordAt(o.head)
if(!t)return Oe.none
r=i.charCategorizer(o.head),s=i.sliceDoc(t.from,t.to)}else{let t=o.to-o.from
if(t<e.minSelectionLength||t>200)return Oe.none
if(e.wholeWords){if(s=i.sliceDoc(o.from,o.to),r=i.charCategorizer(o.head),!cu(r,i,o.from,o.to)||!function(t,e,i,n){return t(e.sliceDoc(i,i+1))==Mt.Word&&t(e.sliceDoc(n-1,n))==Mt.Word}(r,i,o.from,o.to))return Oe.none}else if(s=i.sliceDoc(o.from,o.to),!s)return Oe.none}let l=[]
for(let a of t.visibleRanges){let t=new Qc(i.doc,s,a.from,a.to)
for(;!t.next().done;){let{from:n,to:s}=t.value
if((!r||cu(r,i,n,s))&&(o.empty&&n<=o.from&&s>=o.to?l.push(hu.range(n,s)):(n>=o.to||s<=o.from)&&l.push(au.range(n,s)),l.length>e.maxMatches))return Oe.none}}return Oe.set(l)}},{decorations:t=>t.decorations}),du=po.baseTheme({".cm-selectionMatch":{backgroundColor:"#99ff7780"},".cm-searchMatch .cm-selectionMatch":{backgroundColor:"transparent"}}),fu=j.define({combine:t=>Dt(t,{top:!1,caseSensitive:!1,literal:!1,regexp:!1,wholeWord:!1,createPanel:t=>new qu(t),scrollToMatch:t=>po.scrollIntoView(t)})})
class pu{constructor(t){this.search=t.search,this.caseSensitive=!!t.caseSensitive,this.literal=!!t.literal,this.regexp=!!t.regexp,this.replace=t.replace||"",this.valid=!!this.search&&(!this.regexp||function(t){try{return new RegExp(t,tu),!0}catch(t){return!1}}(this.search)),this.unquoted=this.unquote(this.search),this.wholeWord=!!t.wholeWord,this.test=t.test}unquote(t){return this.literal?t:t.replace(/\\([nrt\\])/g,(t,e)=>"n"==e?"\n":"r"==e?"\r":"t"==e?"\t":"\\")}eq(t){return this.search==t.search&&this.replace==t.replace&&this.caseSensitive==t.caseSensitive&&this.regexp==t.regexp&&this.wholeWord==t.wholeWord&&this.test==t.test}create(){return this.regexp?new xu(this):new vu(this)}getCursor(t,e=0,i){let n=t.doc?t:Ot.create({doc:t})
return null==i&&(i=n.doc.length),this.regexp?wu(this,n,e,i):gu(this,n,e,i)}}class mu{constructor(t){this.spec=t}}function gu(t,e,i,n){let s
return t.wholeWord&&(s=function(t,e){return(i,n,s,o)=>((o>i||o+s.length<n)&&(o=Math.max(0,i-2),s=t.sliceString(o,Math.min(t.length,n+2))),!(e(bu(s,i-o))==Mt.Word&&e(yu(s,i-o))==Mt.Word||e(yu(s,n-o))==Mt.Word&&e(bu(s,n-o))==Mt.Word))}(e.doc,e.charCategorizer(e.selection.main.head))),t.test&&(s=function(t,e,i){return(n,s,o,r)=>{if(i&&!i(n,s,o,r))return!1
let l=n>=r&&s<=r+o.length?o.slice(n-r,s-r):e.doc.sliceString(n,s)
return t(l,e,n,s)}}(t.test,e,s)),new Qc(e.doc,t.unquoted,i,n,t.caseSensitive?void 0:t=>t.toLowerCase(),s)}class vu extends mu{constructor(t){super(t)}nextMatch(t,e,i){let n=gu(this.spec,t,i,t.doc.length).nextOverlapping()
if(n.done){let i=Math.min(t.doc.length,e+this.spec.unquoted.length)
n=gu(this.spec,t,0,i).nextOverlapping()}return n.done||n.value.from==e&&n.value.to==i?null:n.value}prevMatchInRange(t,e,i){for(let n=i;;){let i=Math.max(e,n-1e4-this.spec.unquoted.length),s=gu(this.spec,t,i,n),o=null
for(;!s.nextOverlapping().done;)o=s.value
if(o)return o
if(i==e)return null
n-=1e4}}prevMatch(t,e,i){let n=this.prevMatchInRange(t,0,e)
return n||(n=this.prevMatchInRange(t,Math.max(0,i-this.spec.unquoted.length),t.doc.length)),!n||n.from==e&&n.to==i?null:n}getReplacement(t){return this.spec.unquote(this.spec.replace)}matchAll(t,e){let i=gu(this.spec,t,0,t.doc.length),n=[]
for(;!i.next().done;){if(n.length>=e)return null
n.push(i.value)}return n}highlight(t,e,i,n){let s=gu(this.spec,t,Math.max(0,e-this.spec.unquoted.length),Math.min(i+this.spec.unquoted.length,t.doc.length))
for(;!s.next().done;)n(s.value.from,s.value.to)}}function wu(t,e,i,n){let s
var o
return t.wholeWord&&(o=e.charCategorizer(e.selection.main.head),s=(t,e,i)=>!i[0].length||(o(bu(i.input,i.index))!=Mt.Word||o(yu(i.input,i.index))!=Mt.Word)&&(o(yu(i.input,i.index+i[0].length))!=Mt.Word||o(bu(i.input,i.index+i[0].length))!=Mt.Word)),t.test&&(s=function(t,e,i){return(n,s,o)=>(!i||i(n,s,o))&&t(o[0],e,n,s)}(t.test,e,s)),new eu(e.doc,t.search,{ignoreCase:!t.caseSensitive,test:s},i,n)}function bu(t,e){return t.slice(T(t,e,!1),e)}function yu(t,e){return t.slice(e,T(t,e))}class xu extends mu{nextMatch(t,e,i){let n=wu(this.spec,t,i,t.doc.length).next()
return n.done&&(n=wu(this.spec,t,0,e).next()),n.done?null:n.value}prevMatchInRange(t,e,i){for(let n=1;;n++){let s=Math.max(e,i-1e4*n),o=wu(this.spec,t,s,i),r=null
for(;!o.next().done;)r=o.value
if(r&&(s==e||r.from>s+10))return r
if(s==e)return null}}prevMatch(t,e,i){return this.prevMatchInRange(t,0,e)||this.prevMatchInRange(t,i,t.doc.length)}getReplacement(t){return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g,(e,i)=>{if("&"==i)return t.match[0]
if("$"==i)return"$"
for(let n=i.length;n>0;n--){let e=+i.slice(0,n)
if(e>0&&e<t.match.length)return t.match[e]+i.slice(n)}return e})}matchAll(t,e){let i=wu(this.spec,t,0,t.doc.length),n=[]
for(;!i.next().done;){if(n.length>=e)return null
n.push(i.value)}return n}highlight(t,e,i,n){let s=wu(this.spec,t,Math.max(0,e-250),Math.min(i+250,t.doc.length))
for(;!s.next().done;)n(s.value.from,s.value.to)}}const ku=vt.define(),Su=vt.define(),Cu=Q.define({create:t=>new Mu(Nu(t).create(),null),update(t,e){for(let i of e.effects)i.is(ku)?t=new Mu(i.value.create(),t.panel):i.is(Su)&&(t=new Mu(t.query,i.value?Pu:null))
return t},provide:t=>Ar.from(t,t=>t.panel)})
class Mu{constructor(t,e){this.query=t,this.panel=e}}const Au=Oe.mark({class:"cm-searchMatch"}),Tu=Oe.mark({class:"cm-searchMatch cm-searchMatch-selected"}),Ou=qi.fromClass(class{constructor(t){this.view=t,this.decorations=this.highlight(t.state.field(Cu))}update(t){let e=t.state.field(Cu);(e!=t.startState.field(Cu)||t.docChanged||t.selectionSet||t.viewportChanged)&&(this.decorations=this.highlight(e))}highlight({query:t,panel:e}){if(!e||!t.spec.valid)return Oe.none
let{view:i}=this,n=new Nt
for(let s=0,o=i.visibleRanges,r=o.length;s<r;s++){let{from:e,to:l}=o[s]
for(;s<r-1&&l>o[s+1].from-500;)l=o[++s].to
t.highlight(i.state,e,l,(t,e)=>{let s=i.state.selection.ranges.some(i=>i.from==t&&i.to==e)
n.add(t,e,s?Tu:Au)})}return n.finish()}},{decorations:t=>t.decorations})
function Du(t){return e=>{let i=e.state.field(Cu,!1)
return i&&i.query.spec.valid?t(e,i):Vu(e)}}const Eu=Du((t,{query:e})=>{let{to:i}=t.state.selection.main,n=e.nextMatch(t.state,i,i)
if(!n)return!1
let s=q.single(n.from,n.to),o=t.state.facet(fu)
return t.dispatch({selection:s,effects:[ju(t,n),o.scrollToMatch(s.main,t)],userEvent:"select.search"}),Hu(t),!0}),Bu=Du((t,{query:e})=>{let{state:i}=t,{from:n}=i.selection.main,s=e.prevMatch(i,n,n)
if(!s)return!1
let o=q.single(s.from,s.to),r=t.state.facet(fu)
return t.dispatch({selection:o,effects:[ju(t,s),r.scrollToMatch(o.main,t)],userEvent:"select.search"}),Hu(t),!0}),Ru=Du((t,{query:e})=>{let i=e.matchAll(t.state,1e3)
return!(!i||!i.length||(t.dispatch({selection:q.create(i.map(t=>q.range(t.from,t.to))),userEvent:"select.search.matches"}),0))}),Lu=Du((t,{query:e})=>{let{state:i}=t,{from:n,to:s}=i.selection.main
if(i.readOnly)return!1
let o=e.nextMatch(i,n,n)
if(!o)return!1
let r,l,a=o,h=[],c=[]
a.precise?a.from==n&&a.to==s&&(l=i.toText(e.getReplacement(a)),h.push({from:a.from,to:a.to,insert:l}),c.push(po.announce.of(i.phrase("replaced match on line $",i.doc.lineAt(n).number)+"."))):a=e.nextMatch(i,a.from,a.to)
let u=t.state.changes(h)
return a&&(r=q.single(a.from,a.to).map(u),c.push(ju(t,a)),c.push(i.facet(fu).scrollToMatch(r.main,t))),t.dispatch({changes:u,selection:r,effects:c,userEvent:"input.replace"}),!0}),Iu=Du((t,{query:e})=>{if(t.state.readOnly)return!1
let i=[]
for(let s of e.matchAll(t.state,1e9)){let{from:t,to:n,precise:o}=s
o&&i.push({from:t,to:n,insert:e.getReplacement(s)})}if(!i.length)return!1
let n=t.state.phrase("replaced $ matches",i.length)+"."
return t.dispatch({changes:i,effects:po.announce.of(n),userEvent:"input.replace.all"}),!0})
function Pu(t){return t.state.facet(fu).createPanel(t)}function Nu(t,e){var i,n,s,o,r
let l=t.selection.main,a=l.empty||l.to>l.from+100?"":t.sliceDoc(l.from,l.to)
if(e&&!a)return e
let h=t.facet(fu)
return new pu({search:(null!==(i=null==e?void 0:e.literal)&&void 0!==i?i:h.literal)?a:a.replace(/\n/g,"\\n"),caseSensitive:null!==(n=null==e?void 0:e.caseSensitive)&&void 0!==n?n:h.caseSensitive,literal:null!==(s=null==e?void 0:e.literal)&&void 0!==s?s:h.literal,regexp:null!==(o=null==e?void 0:e.regexp)&&void 0!==o?o:h.regexp,wholeWord:null!==(r=null==e?void 0:e.wholeWord)&&void 0!==r?r:h.wholeWord})}function Wu(t){let e=kr(t,Pu)
return e&&e.dom.querySelector("[main-field]")}function Hu(t){let e=Wu(t)
e&&e==t.root.activeElement&&e.select()}const Vu=t=>{let e=t.state.field(Cu,!1)
if(e&&e.panel){let i=Wu(t)
if(i&&i!=t.root.activeElement){let n=Nu(t.state,e.query.spec)
n.valid&&t.dispatch({effects:ku.of(n)}),i.focus(),i.select()}}else t.dispatch({effects:[Su.of(!0),e?ku.of(Nu(t.state,e.query.spec)):vt.appendConfig.of(Uu)]})
return!0},Fu=t=>{let e=t.state.field(Cu,!1)
if(!e||!e.panel)return!1
let i=kr(t,Pu)
return i&&i.dom.contains(t.root.activeElement)&&t.focus(),t.dispatch({effects:Su.of(!1)}),!0},zu=[{key:"Mod-f",run:Vu,scope:"editor search-panel"},{key:"F3",run:Eu,shift:Bu,scope:"editor search-panel",preventDefault:!0},{key:"Mod-g",run:Eu,shift:Bu,scope:"editor search-panel",preventDefault:!0},{key:"Escape",run:Fu,scope:"editor search-panel"},{key:"Mod-Shift-l",run:({state:t,dispatch:e})=>{let i=t.selection
if(i.ranges.length>1||i.main.empty)return!1
let{from:n,to:s}=i.main,o=[],r=0
for(let l=new Qc(t.doc,t.sliceDoc(n,s));!l.next().done;){if(o.length>1e3)return!1
l.value.from==n&&(r=o.length),o.push(q.range(l.value.from,l.value.to))}return e(t.update({selection:q.create(o,r),userEvent:"select.search.matches"})),!0}},{key:"Mod-Alt-g",run:t=>{let{state:e}=t,i=String(e.doc.lineAt(t.state.selection.main.head).number),{close:n,result:s}=function(t,e){let i,n=new Promise(t=>i=t),s=t=>function(t,e,i){let n=e.content?e.content(t,()=>r(null)):null
if(!n){if(n=le("form"),e.input){let t=le("input",e.input);/^(text|password|number|email|tel|url)$/.test(t.type)&&t.classList.add("cm-textfield"),t.name||(t.name="input"),n.appendChild(le("label",(e.label||"")+": ",t))}else n.appendChild(document.createTextNode(e.label||""))
n.appendChild(document.createTextNode(" ")),n.appendChild(le("button",{class:"cm-button",type:"submit"},e.submitLabel||"OK"))}let s="FORM"==n.nodeName?[n]:n.querySelectorAll("form")
for(let l=0;l<s.length;l++){let t=s[l]
t.addEventListener("keydown",e=>{27==e.keyCode?(e.preventDefault(),r(null)):13==e.keyCode&&(e.preventDefault(),r(t))}),t.addEventListener("submit",e=>{e.preventDefault(),r(t)})}let o=le("div",n,le("button",{onclick:()=>r(null),"aria-label":t.state.phrase("close"),class:"cm-dialog-close",type:"button"},["×"]))
function r(e){o.contains(o.ownerDocument.activeElement)&&t.focus(),i(e)}return e.class&&(o.className=e.class),o.classList.add("cm-dialog"),{dom:o,top:e.top,mount:()=>{if(e.focus){let t
t="string"==typeof e.focus?n.querySelector(e.focus):n.querySelector("input")||n.querySelector("button"),t&&"select"in t?t.select():t&&"focus"in t&&t.focus()}}}}(t,e,i)
t.state.field(Tr,!1)?t.dispatch({effects:Or.of(s)}):t.dispatch({effects:vt.appendConfig.of(Tr.init(()=>[s]))})
let o=Dr.of(s)
return{close:o,result:n.then(e=>((t.win.queueMicrotask||(e=>t.win.setTimeout(e,10)))(()=>{t.state.field(Tr).indexOf(s)>-1&&t.dispatch({effects:o})}),e))}}(t,{label:e.phrase("Go to line"),input:{type:"text",name:"line",value:i},focus:!0,submitLabel:e.phrase("go")})
return s.then(i=>{let s=i&&/^([+-])?(\d+)?(:\d+)?(%)?$/.exec(i.elements.line.value)
if(!s)return void t.dispatch({effects:n})
let o=e.doc.lineAt(e.selection.main.head),[,r,l,a,h]=s,c=a?+a.slice(1):0,u=l?+l:o.number
if(l&&h){let t=u/100
r&&(t=t*("-"==r?-1:1)+o.number/e.doc.lines),u=Math.round(e.doc.lines*t)}else l&&r&&(u=u*("-"==r?-1:1)+o.number)
let d=e.doc.line(Math.max(1,Math.min(e.doc.lines,u))),f=q.cursor(d.from+Math.max(0,Math.min(c,d.length)))
t.dispatch({effects:[n,po.scrollIntoView(f.from,{y:"center"})],selection:f})}),!0}},{key:"Mod-d",run:({state:t,dispatch:e})=>{let{ranges:i}=t.selection
if(i.some(t=>t.from===t.to))return(({state:t,dispatch:e})=>{let{selection:i}=t,n=q.create(i.ranges.map(e=>t.wordAt(e.head)||q.cursor(e.head)),i.mainIndex)
return!n.eq(i)&&(e(t.update({selection:n})),!0)})({state:t,dispatch:e})
let n=t.sliceDoc(i[0].from,i[0].to)
if(t.selection.ranges.some(e=>t.sliceDoc(e.from,e.to)!=n))return!1
let s=function(t,e){let{main:i,ranges:n}=t.selection,s=t.wordAt(i.head),o=s&&s.from==i.from&&s.to==i.to
for(let r=!1,l=new Qc(t.doc,e,n[n.length-1].to);;){if(l.next(),!l.done){if(r&&n.some(t=>t.from==l.value.from))continue
if(o){let e=t.wordAt(l.value.from)
if(!e||e.from!=l.value.from||e.to!=l.value.to)continue}return l.value}if(r)return null
l=new Qc(t.doc,e,0,Math.max(0,n[n.length-1].from-1)),r=!0}}(t,n)
return!!s&&(e(t.update({selection:t.selection.addRange(q.range(s.from,s.to),!1),effects:po.scrollIntoView(s.to)})),!0)},preventDefault:!0}]
class qu{constructor(t){this.view=t
let e=this.query=t.state.field(Cu).query.spec
function i(t,e,i){return le("button",{class:"cm-button",name:t,onclick:e,type:"button"},i)}this.commit=this.commit.bind(this),this.searchField=le("input",{value:e.search,placeholder:_u(t,"Find"),"aria-label":_u(t,"Find"),class:"cm-textfield",name:"search",form:"","main-field":"true",onchange:this.commit,onkeyup:this.commit}),this.replaceField=le("input",{value:e.replace,placeholder:_u(t,"Replace"),"aria-label":_u(t,"Replace"),class:"cm-textfield",name:"replace",form:"",onchange:this.commit,onkeyup:this.commit}),this.caseField=le("input",{type:"checkbox",name:"case",form:"",checked:e.caseSensitive,onchange:this.commit}),this.reField=le("input",{type:"checkbox",name:"re",form:"",checked:e.regexp,onchange:this.commit}),this.wordField=le("input",{type:"checkbox",name:"word",form:"",checked:e.wholeWord,onchange:this.commit}),this.dom=le("div",{onkeydown:t=>this.keydown(t),class:"cm-search"},[this.searchField,i("next",()=>Eu(t),[_u(t,"next")]),i("prev",()=>Bu(t),[_u(t,"previous")]),i("select",()=>Ru(t),[_u(t,"all")]),le("label",null,[this.caseField,_u(t,"match case")]),le("label",null,[this.reField,_u(t,"regexp")]),le("label",null,[this.wordField,_u(t,"by word")]),...t.state.readOnly?[]:[le("br"),this.replaceField,i("replace",()=>Lu(t),[_u(t,"replace")]),i("replaceAll",()=>Iu(t),[_u(t,"replace all")])],le("button",{name:"close",onclick:()=>Fu(t),"aria-label":_u(t,"close"),type:"button"},["×"])])}commit(){let t=new pu({search:this.searchField.value,caseSensitive:this.caseField.checked,regexp:this.reField.checked,wholeWord:this.wordField.checked,replace:this.replaceField.value})
t.eq(this.query)||(this.query=t,this.view.dispatch({effects:ku.of(t)}))}keydown(t){var e,i
i=t,Ao(So((e=this.view).state),i,e,"search-panel")?t.preventDefault():13==t.keyCode&&t.target==this.searchField?(t.preventDefault(),(t.shiftKey?Bu:Eu)(this.view)):13==t.keyCode&&t.target==this.replaceField&&(t.preventDefault(),Lu(this.view))}update(t){for(let e of t.transactions)for(let t of e.effects)t.is(ku)&&!t.value.eq(this.query)&&this.setQuery(t.value)}setQuery(t){this.query=t,this.searchField.value=t.search,this.replaceField.value=t.replace,this.caseField.checked=t.caseSensitive,this.reField.checked=t.regexp,this.wordField.checked=t.wholeWord}mount(){this.searchField.select()}get pos(){return 80}get top(){return this.view.state.facet(fu).top}}function _u(t,e){return t.state.phrase(e)}const Ku=/[\s\.,:;?!]/
function ju(t,{from:e,to:i}){let n=t.state.doc.lineAt(e),s=t.state.doc.lineAt(i).to,o=Math.max(n.from,e-30),r=Math.min(s,i+30),l=t.state.sliceDoc(o,r)
if(o!=n.from)for(let a=0;a<30;a++)if(!Ku.test(l[a+1])&&Ku.test(l[a])){l=l.slice(a)
break}if(r!=s)for(let a=l.length-1;a>l.length-30;a--)if(!Ku.test(l[a-1])&&Ku.test(l[a])){l=l.slice(0,a)
break}return po.announce.of(`${t.state.phrase("current match")}. ${l} ${t.state.phrase("on line")} ${n.number}.`)}const $u=po.baseTheme({".cm-panel.cm-search":{padding:"2px 6px 4px",position:"relative","& [name=close]":{position:"absolute",top:"0",right:"4px",backgroundColor:"inherit",border:"none",font:"inherit",padding:0,margin:0},"& input, & button, & label":{margin:".2em .6em .2em 0"},"& input[type=checkbox]":{marginRight:".2em"},"& label":{fontSize:"80%",whiteSpace:"pre"}},"&light .cm-searchMatch":{backgroundColor:"#ffff0054"},"&dark .cm-searchMatch":{backgroundColor:"#00ffff8a"},"&light .cm-searchMatch-selected":{backgroundColor:"#ff6a0054"},"&dark .cm-searchMatch-selected":{backgroundColor:"#ff00ff8a"}}),Uu=[Cu,tt.low(Ou),$u]
class Yu{constructor(t,e,i,n){this.state=t,this.pos=e,this.explicit=i,this.view=n,this.abortListeners=[],this.abortOnDocChange=!1}tokenBefore(t){let e=la(this.state).resolveInner(this.pos,-1)
for(;e&&t.indexOf(e.name)<0;)e=e.parent
return e?{from:e.from,to:this.pos,text:this.state.sliceDoc(e.from,this.pos),type:e.type}:null}matchBefore(t){let e=this.state.doc.lineAt(this.pos),i=Math.max(e.from,this.pos-250),n=e.text.slice(i-e.from,this.pos-e.from),s=n.search(Qu(t,!1))
return s<0?null:{from:i+s,to:this.pos,text:n.slice(s)}}get aborted(){return null==this.abortListeners}addEventListener(t,e,i){"abort"==t&&this.abortListeners&&(this.abortListeners.push(e),i&&i.onDocChange&&(this.abortOnDocChange=!0))}}function Gu(t){let e=Object.keys(t).join(""),i=/\w/.test(e)
return i&&(e=e.replace(/\w/g,"")),`[${i?"\\w":""}${e.replace(/[^\w\s]/g,"\\$&")}]`}class Ju{constructor(t,e,i,n){this.completion=t,this.source=e,this.match=i,this.score=n}}function Xu(t){return t.selection.main.from}function Qu(t,e){var i
let{source:n}=t,s=e&&"^"!=n[0],o="$"!=n[n.length-1]
return s||o?new RegExp(`${s?"^":""}(?:${n})${o?"$":""}`,null!==(i=t.flags)&&void 0!==i?i:t.ignoreCase?"i":""):t}const Zu=pt.define()
function td(t,e,i,n){let{main:s}=t.selection,o=i-s.from,r=n-s.from
return{...t.changeByRange(l=>{if(l!=s&&i!=n&&t.sliceDoc(l.from+o,l.from+r)!=t.sliceDoc(i,n))return{range:l}
let a=t.toText(e)
return{changes:{from:l.from+o,to:n==s.from?l.to:l.from+r,insert:a},range:q.cursor(l.from+o+a.length)}}),scrollIntoView:!0,userEvent:"input.complete"}}const ed=new WeakMap
function id(t){if(!Array.isArray(t))return t
let e=ed.get(t)
return e||ed.set(t,e=function(t){let e=t.map(t=>"string"==typeof t?{label:t}:t),[i,n]=e.every(t=>/^\w+$/.test(t.label))?[/\w*$/,/\w+$/]:function(t){let e=Object.create(null),i=Object.create(null)
for(let{label:s}of t){e[s[0]]=!0
for(let t=1;t<s.length;t++)i[s[t]]=!0}let n=Gu(e)+Gu(i)+"*$"
return[new RegExp("^"+n),new RegExp(n)]}(e)
return t=>{let s=t.matchBefore(n)
return s||t.explicit?{from:s?s.from:t.pos,options:e,validFor:i}:null}}(t)),e}const nd=vt.define(),sd=vt.define()
class od{constructor(t){this.pattern=t,this.chars=[],this.folded=[],this.any=[],this.precise=[],this.byWord=[],this.score=0,this.matched=[]
for(let e=0;e<t.length;){let i=O(t,e),n=E(i)
this.chars.push(i)
let s=t.slice(e,e+n),o=s.toUpperCase()
this.folded.push(O(o==s?s.toLowerCase():o,0)),e+=n}this.astral=t.length!=this.chars.length}ret(t,e){return this.score=t,this.matched=e,this}match(t){if(0==this.pattern.length)return this.ret(-100,[])
if(t.length<this.pattern.length)return null
let{chars:e,folded:i,any:n,precise:s,byWord:o}=this
if(1==e.length){let n=O(t,0),s=E(n),o=s==t.length?0:-100
if(n==e[0]);else{if(n!=i[0])return null
o+=-200}return this.ret(o,[0,s])}let r=t.indexOf(this.pattern)
if(0==r)return this.ret(t.length==this.pattern.length?0:-100,[0,this.pattern.length])
let l=e.length,a=0
if(r<0){for(let s=0,o=Math.min(t.length,200);s<o&&a<l;){let o=O(t,s)
o!=e[a]&&o!=i[a]||(n[a++]=s),s+=E(o)}if(a<l)return null}let h=0,c=0,u=!1,d=0,f=-1,p=-1,m=/[a-z]/.test(t),g=!0
for(let v=0,w=Math.min(t.length,200),b=0;v<w&&c<l;){let n=O(t,v)
r<0&&(h<l&&n==e[h]&&(s[h++]=v),d<l&&(n==e[d]||n==i[d]?(0==d&&(f=v),p=v+1,d++):d=0))
let a,w=n<255?n>=48&&n<=57||n>=97&&n<=122?2:n>=65&&n<=90?1:0:(a=D(n))!=a.toLowerCase()?1:a!=a.toUpperCase()?2:0;(!v||1==w&&m||0==b&&0!=w)&&(e[c]==n||i[c]==n&&(u=!0)?o[c++]=v:o.length&&(g=!1)),b=w,v+=E(n)}return c==l&&0==o[0]&&g?this.result((u?-200:0)-100,o,t):d==l&&0==f?this.ret(-200-t.length+(p==t.length?0:-100),[0,p]):r>-1?this.ret(-700-t.length,[r,r+this.pattern.length]):d==l?this.ret(-900-t.length,[f,p]):c==l?this.result((u?-200:0)-100-700+(g?0:-1100),o,t):2==e.length?null:this.result((n[0]?-700:0)-200-1100,n,t)}result(t,e,i){let n=[],s=0
for(let o of e){let t=o+(this.astral?E(O(i,o)):1)
s&&n[s-1]==o?n[s-1]=t:(n[s++]=o,n[s++]=t)}return this.ret(t-i.length,n)}}class rd{constructor(t){this.pattern=t,this.matched=[],this.score=0,this.folded=t.toLowerCase()}match(t){if(t.length<this.pattern.length)return null
let e=t.slice(0,this.pattern.length),i=e==this.pattern?0:e.toLowerCase()==this.folded?-200:null
return null==i?null:(this.matched=[0,e.length],this.score=i+(t.length==this.pattern.length?0:-100),this)}}const ld=j.define({combine:t=>Dt(t,{activateOnTyping:!0,activateOnCompletion:()=>!1,activateOnTypingDelay:100,selectOnOpen:!0,override:null,closeOnBlur:!0,maxRenderedOptions:100,defaultKeymap:!0,tooltipClass:()=>"",optionClass:()=>"",aboveCursor:!1,icons:!0,addToOptions:[],positionInfo:hd,filterStrict:!1,compareCompletions:(t,e)=>(t.sortText||t.label).localeCompare(e.sortText||e.label),interactionDelay:75,updateSyncTime:100},{defaultKeymap:(t,e)=>t&&e,closeOnBlur:(t,e)=>t&&e,icons:(t,e)=>t&&e,tooltipClass:(t,e)=>i=>ad(t(i),e(i)),optionClass:(t,e)=>i=>ad(t(i),e(i)),addToOptions:(t,e)=>t.concat(e),filterStrict:(t,e)=>t||e})})
function ad(t,e){return t?e?t+" "+e:t:e}function hd(t,e,i,n,s,o){let r,l,a=t.textDirection==si.RTL,h=a,c=!1,u="top",d=e.left-s.left,f=s.right-e.right,p=n.right-n.left,m=n.bottom-n.top
if(h&&d<Math.min(p,f)?h=!1:!h&&f<Math.min(p,d)&&(h=!0),p<=(h?d:f))r=Math.max(s.top,Math.min(i.top,s.bottom-m))-e.top,l=Math.min(400,h?d:f)
else{c=!0,l=Math.min(400,(a?e.right:s.right-e.left)-30)
let t=s.bottom-e.bottom
t>=m||t>e.top?r=i.bottom-e.top:(u="bottom",r=e.bottom-i.top)}return{style:`${u}: ${r/((e.bottom-e.top)/o.offsetHeight)}px; max-width: ${l/((e.right-e.left)/o.offsetWidth)}px`,class:"cm-completionInfo-"+(c?a?"left-narrow":"right-narrow":h?"left":"right")}}const cd=vt.define()
function ud(t,e,i){if(t<=i)return{from:0,to:t}
if(e<0&&(e=0),e<=t>>1){let t=Math.floor(e/i)
return{from:t*i,to:(t+1)*i}}let n=Math.ceil((t-e)/i)
return{from:t-n*i,to:t-(n-1)*i}}class dd{constructor(t,e,i){this.view=t,this.stateField=e,this.applyCompletion=i,this.info=null,this.infoDestroy=null,this.placeInfoReq={read:()=>this.measureInfo(),write:t=>this.placeInfo(t),key:this},this.space=null,this.currentClass=""
let n=t.state.field(e),{options:s,selected:o}=n.open,r=t.state.facet(ld)
this.optionContent=function(t){let e=t.addToOptions.slice()
return t.icons&&e.push({render(t){let e=document.createElement("div")
return e.classList.add("cm-completionIcon"),t.type&&e.classList.add(...t.type.split(/\s+/g).map(t=>"cm-completionIcon-"+t)),e.setAttribute("aria-hidden","true"),e},position:20}),e.push({render(t,e,i,n){let s=document.createElement("span")
s.className="cm-completionLabel"
let o=t.displayLabel||t.label,r=0
for(let l=0;l<n.length;){let t=n[l++],e=n[l++]
t>r&&s.appendChild(document.createTextNode(o.slice(r,t)))
let i=s.appendChild(document.createElement("span"))
i.appendChild(document.createTextNode(o.slice(t,e))),i.className="cm-completionMatchedText",r=e}return r<o.length&&s.appendChild(document.createTextNode(o.slice(r))),s},position:50},{render(t){if(!t.detail)return null
let e=document.createElement("span")
return e.className="cm-completionDetail",e.textContent=t.detail,e},position:80}),e.sort((t,e)=>t.position-e.position).map(t=>t.render)}(r),this.optionClass=r.optionClass,this.tooltipClass=r.tooltipClass,this.range=ud(s.length,o,r.maxRenderedOptions),this.dom=document.createElement("div"),this.dom.className="cm-tooltip-autocomplete",this.updateTooltipClass(t.state),this.dom.addEventListener("mousedown",i=>{let{options:n}=t.state.field(e).open
for(let e,s=i.target;s&&s!=this.dom;s=s.parentNode)if("LI"==s.nodeName&&(e=/-(\d+)$/.exec(s.id))&&+e[1]<n.length)return this.applyCompletion(t,n[+e[1]]),void i.preventDefault()
if(i.target==this.list){let e=this.list.classList.contains("cm-completionListIncompleteTop")&&i.clientY<this.list.firstChild.getBoundingClientRect().top?this.range.from-1:this.list.classList.contains("cm-completionListIncompleteBottom")&&i.clientY>this.list.lastChild.getBoundingClientRect().bottom?this.range.to:null
null!=e&&(t.dispatch({effects:cd.of(e)}),i.preventDefault())}}),this.dom.addEventListener("focusout",e=>{let i=t.state.field(this.stateField,!1)
i&&i.tooltip&&t.state.facet(ld).closeOnBlur&&e.relatedTarget!=t.contentDOM&&t.dispatch({effects:sd.of(null)})}),this.showOptions(s,n.id)}mount(){this.updateSel()}showOptions(t,e){this.list&&this.list.remove(),this.list=this.dom.appendChild(this.createListBox(t,e,this.range)),this.list.addEventListener("scroll",()=>{this.info&&this.view.requestMeasure(this.placeInfoReq)})}update(t){var e
let i=t.state.field(this.stateField),n=t.startState.field(this.stateField)
if(this.updateTooltipClass(t.state),i!=n){let{options:s,selected:o,disabled:r}=i.open
n.open&&n.open.options==s||(this.range=ud(s.length,o,t.state.facet(ld).maxRenderedOptions),this.showOptions(s,i.id)),this.updateSel(),r!=(null===(e=n.open)||void 0===e?void 0:e.disabled)&&this.dom.classList.toggle("cm-tooltip-autocomplete-disabled",!!r)}}updateTooltipClass(t){let e=this.tooltipClass(t)
if(e!=this.currentClass){for(let t of this.currentClass.split(" "))t&&this.dom.classList.remove(t)
for(let t of e.split(" "))t&&this.dom.classList.add(t)
this.currentClass=e}}positioned(t){this.space=t,this.info&&this.view.requestMeasure(this.placeInfoReq)}updateSel(){let t=this.view.state.field(this.stateField),e=t.open;(e.selected>-1&&e.selected<this.range.from||e.selected>=this.range.to)&&(this.range=ud(e.options.length,e.selected,this.view.state.facet(ld).maxRenderedOptions),this.showOptions(e.options,t.id))
let i=this.updateSelectedOption(e.selected)
if(i){this.destroyInfo()
let{completion:n}=e.options[e.selected],{info:s}=n
if(!s)return
let o="string"==typeof s?document.createTextNode(s):s(n)
if(!o)return
"then"in o?o.then(e=>{e&&this.view.state.field(this.stateField,!1)==t&&this.addInfoPane(e,n)}).catch(t=>Hi(this.view.state,t,"completion info")):(this.addInfoPane(o,n),i.setAttribute("aria-describedby",this.info.id))}}addInfoPane(t,e){this.destroyInfo()
let i=this.info=document.createElement("div")
if(i.className="cm-tooltip cm-completionInfo",i.id="cm-completionInfo-"+Math.floor(65535*Math.random()).toString(16),null!=t.nodeType)i.appendChild(t),this.infoDestroy=null
else{let{dom:e,destroy:n}=t
i.appendChild(e),this.infoDestroy=n||null}this.dom.appendChild(i),this.view.requestMeasure(this.placeInfoReq)}updateSelectedOption(t){let e=null
for(let i=this.list.firstChild,n=this.range.from;i;i=i.nextSibling,n++)"LI"==i.nodeName&&i.id?n==t?i.hasAttribute("aria-selected")||(i.setAttribute("aria-selected","true"),e=i):i.hasAttribute("aria-selected")&&(i.removeAttribute("aria-selected"),i.removeAttribute("aria-describedby")):n--
return e&&function(t,e){let i=t.getBoundingClientRect(),n=e.getBoundingClientRect(),s=i.height/t.offsetHeight
n.top<i.top?t.scrollTop-=(i.top-n.top)/s:n.bottom>i.bottom&&(t.scrollTop+=(n.bottom-i.bottom)/s)}(this.list,e),e}measureInfo(){let t=this.dom.querySelector("[aria-selected]")
if(!t||!this.info)return null
let e=this.dom.getBoundingClientRect(),i=this.info.getBoundingClientRect(),n=t.getBoundingClientRect(),s=this.space
if(!s){let t=this.dom.ownerDocument.documentElement
s={left:0,top:0,right:t.clientWidth,bottom:t.clientHeight}}return n.top>Math.min(s.bottom,e.bottom)-10||n.bottom<Math.max(s.top,e.top)+10?null:this.view.state.facet(ld).positionInfo(this.view,e,n,i,s,this.dom)}placeInfo(t){this.info&&(t?(t.style&&(this.info.style.cssText=t.style),this.info.className="cm-tooltip cm-completionInfo "+(t.class||"")):this.info.style.cssText="top: -1e6px")}createListBox(t,e,i){const n=document.createElement("ul")
n.id=e,n.setAttribute("role","listbox"),n.setAttribute("aria-expanded","true"),n.setAttribute("aria-label",this.view.state.phrase("Completions")),n.addEventListener("mousedown",t=>{t.target==n&&t.preventDefault()})
let s=null
for(let o=i.from;o<i.to;o++){let{completion:r,match:l}=t[o],{section:a}=r
if(a){let t="string"==typeof a?a:a.name
t!=s&&(o>i.from||0==i.from)&&(s=t,"string"!=typeof a&&a.header?n.appendChild(a.header(a)):n.appendChild(document.createElement("completion-section")).textContent=t)}const h=n.appendChild(document.createElement("li"))
h.id=e+"-"+o,h.setAttribute("role","option")
let c=this.optionClass(r)
c&&(h.className=c)
for(let t of this.optionContent){let e=t(r,this.view.state,this.view,l)
e&&h.appendChild(e)}}return i.from&&n.classList.add("cm-completionListIncompleteTop"),i.to<t.length&&n.classList.add("cm-completionListIncompleteBottom"),n}destroyInfo(){this.info&&(this.infoDestroy&&this.infoDestroy(),this.info.remove(),this.info=null)}destroy(){this.destroyInfo()}}function fd(t){return 100*(t.boost||0)+(t.apply?10:0)+(t.info?5:0)+(t.type?1:0)}class pd{constructor(t,e,i,n,s,o){this.options=t,this.attrs=e,this.tooltip=i,this.timestamp=n,this.selected=s,this.disabled=o}setSelected(t,e){return t==this.selected||t>=this.options.length?this:new pd(this.options,wd(e,t),this.tooltip,this.timestamp,t,this.disabled)}static build(t,e,i,n,s,o){if(n&&!o&&t.some(t=>t.isPending))return n.setDisabled()
let r=function(t,e){let i=[],n=null,s=null,o=t=>{i.push(t)
let{section:e}=t.completion
if(e){n||(n=[])
let t="string"==typeof e?e:e.name
n.some(e=>e.name==t)||n.push("string"==typeof e?{name:t}:e)}},r=e.facet(ld)
for(let c of t)if(c.hasResult()){let t=c.result.getMatch
if(!1===c.result.filter)for(let e of c.result.options)o(new Ju(e,c.source,t?t(e):[],1e9-i.length))
else{let i,n=e.sliceDoc(c.from,c.to),l=r.filterStrict?new rd(n):new od(n)
for(let e of c.result.options)if(i=l.match(e.label)){let n=e.displayLabel?t?t(e,i.matched):[]:i.matched,r=i.score+(e.boost||0)
if(o(new Ju(e,c.source,n,r)),"object"==typeof e.section&&"dynamic"===e.section.rank){let{name:t}=e.section
s||(s=Object.create(null)),s[t]=Math.max(r,s[t]||-1e9)}}}}if(n){let t=Object.create(null),e=0,o=(t,e)=>("dynamic"===t.rank&&"dynamic"===e.rank?s[e.name]-s[t.name]:0)||("number"==typeof t.rank?t.rank:1e9)-("number"==typeof e.rank?e.rank:1e9)||(t.name<e.name?-1:1)
for(let i of n.sort(o))e-=1e5,t[i.name]=e
for(let n of i){let{section:e}=n.completion
e&&(n.score+=t["string"==typeof e?e:e.name])}}let l=[],a=null,h=r.compareCompletions
for(let c of i.sort((t,e)=>e.score-t.score||h(t.completion,e.completion))){let t=c.completion
!a||a.label!=t.label||a.detail!=t.detail||null!=a.type&&null!=t.type&&a.type!=t.type||a.apply!=t.apply||a.boost!=t.boost?l.push(c):fd(c.completion)>fd(a)&&(l[l.length-1]=c),a=c.completion}return l}(t,e)
if(!r.length)return n&&t.some(t=>t.isPending)?n.setDisabled():null
let l=e.facet(ld).selectOnOpen?0:-1
if(n&&n.selected!=l&&-1!=n.selected){let t=n.options[n.selected].completion
for(let e=0;e<r.length;e++)if(r[e].completion==t){l=e
break}}return new pd(r,wd(i,l),{pos:t.reduce((t,e)=>e.hasResult()?Math.min(t,e.from):t,1e8),create:Ad,above:s.aboveCursor},n?n.timestamp:Date.now(),l,!1)}map(t){return new pd(this.options,this.attrs,{...this.tooltip,pos:t.mapPos(this.tooltip.pos)},this.timestamp,this.selected,this.disabled)}setDisabled(){return new pd(this.options,this.attrs,this.tooltip,this.timestamp,this.selected,!0)}}class md{constructor(t,e,i){this.active=t,this.id=e,this.open=i}static start(){return new md(bd,"cm-ac-"+Math.floor(2e6*Math.random()).toString(36),null)}update(t){let{state:e}=t,i=e.facet(ld),n=(i.override||e.languageDataAt("autocomplete",Xu(e)).map(id)).map(e=>(this.active.find(t=>t.source==e)||new xd(e,this.active.some(t=>0!=t.state)?1:0)).update(t,i))
n.length==this.active.length&&n.every((t,e)=>t==this.active[e])&&(n=this.active)
let s=this.open,o=t.effects.some(t=>t.is(Sd))
s&&t.docChanged&&(s=s.map(t.changes)),t.selection||n.some(e=>e.hasResult()&&t.changes.touchesRange(e.from,e.to))||!function(t,e){if(t==e)return!0
for(let i=0,n=0;;){for(;i<t.length&&!t[i].hasResult();)i++
for(;n<e.length&&!e[n].hasResult();)n++
let s=i==t.length,o=n==e.length
if(s||o)return s==o
if(t[i++].result!=e[n++].result)return!1}}(n,this.active)||o?s=pd.build(n,e,this.id,s,i,o):s&&s.disabled&&!n.some(t=>t.isPending)&&(s=null),!s&&n.every(t=>!t.isPending)&&n.some(t=>t.hasResult())&&(n=n.map(t=>t.hasResult()?new xd(t.source,0):t))
for(let r of t.effects)r.is(cd)&&(s=s&&s.setSelected(r.value,this.id))
return n==this.active&&s==this.open?this:new md(n,this.id,s)}get tooltip(){return this.open?this.open.tooltip:null}get attrs(){return this.open?this.open.attrs:this.active.length?gd:vd}}const gd={"aria-autocomplete":"list"},vd={}
function wd(t,e){let i={"aria-autocomplete":"list","aria-haspopup":"listbox","aria-controls":t}
return e>-1&&(i["aria-activedescendant"]=t+"-"+e),i}const bd=[]
function yd(t,e){if(t.isUserEvent("input.complete")){let i=t.annotation(Zu)
if(i&&e.activateOnCompletion(i))return 12}let i=t.isUserEvent("input.type")
return i&&e.activateOnTyping?5:i?1:t.isUserEvent("delete.backward")?2:t.selection?8:t.docChanged?16:0}class xd{constructor(t,e,i=!1){this.source=t,this.state=e,this.explicit=i}hasResult(){return!1}get isPending(){return 1==this.state}update(t,e){let i=yd(t,e),n=this;(8&i||16&i&&this.touches(t))&&(n=new xd(n.source,0)),4&i&&0==n.state&&(n=new xd(this.source,1)),n=n.updateFor(t,i)
for(let s of t.effects)if(s.is(nd))n=new xd(n.source,1,s.value)
else if(s.is(sd))n=new xd(n.source,0)
else if(s.is(Sd))for(let t of s.value)t.source==n.source&&(n=t)
return n}updateFor(t,e){return this.map(t.changes)}map(t){return this}touches(t){return t.changes.touchesRange(Xu(t.state))}}class kd extends xd{constructor(t,e,i,n,s,o){super(t,3,e),this.limit=i,this.result=n,this.from=s,this.to=o}hasResult(){return!0}updateFor(t,e){var i
if(!(3&e))return this.map(t.changes)
let n=this.result
n.map&&!t.changes.empty&&(n=n.map(n,t.changes))
let s=t.changes.mapPos(this.from),o=t.changes.mapPos(this.to,1),r=Xu(t.state)
if(r>o||!n||2&e&&(Xu(t.startState)==this.from||r<this.limit))return new xd(this.source,4&e?1:0)
let l=t.changes.mapPos(this.limit)
return function(t,e,i,n){if(!t)return!1
let s=e.sliceDoc(i,n)
return"function"==typeof t?t(s,i,n,e):Qu(t,!0).test(s)}(n.validFor,t.state,s,o)?new kd(this.source,this.explicit,l,n,s,o):n.update&&(n=n.update(n,s,o,new Yu(t.state,r,!1)))?new kd(this.source,this.explicit,l,n,n.from,null!==(i=n.to)&&void 0!==i?i:Xu(t.state)):new xd(this.source,1,this.explicit)}map(t){return t.empty?this:(this.result.map?this.result.map(this.result,t):this.result)?new kd(this.source,this.explicit,t.mapPos(this.limit),this.result,t.mapPos(this.from),t.mapPos(this.to,1)):new xd(this.source,0)}touches(t){return t.changes.touchesRange(this.from,this.to)}}const Sd=vt.define({map:(t,e)=>t.map(t=>t.map(e))}),Cd=Q.define({create:()=>md.start(),update:(t,e)=>t.update(e),provide:t=>[fr.from(t,t=>t.tooltip),po.contentAttributes.from(t,t=>t.attrs)]})
function Md(t,e){const i=e.completion.apply||e.completion.label
let n=t.state.field(Cd).active.find(t=>t.source==e.source)
return n instanceof kd&&("string"==typeof i?t.dispatch({...td(t.state,i,n.from,n.to),annotations:Zu.of(e.completion)}):i(t,e.completion,n.from,n.to),!0)}const Ad=function(t,e){return i=>new dd(i,t,e)}(Cd,Md)
function Td(t,e="option"){return i=>{let n=i.state.field(Cd,!1)
if(!n||!n.open||n.open.disabled||Date.now()-n.open.timestamp<i.state.facet(ld).interactionDelay)return!1
let s,o=1
"page"==e&&(s=br(i,n.open.tooltip))&&(o=Math.max(2,Math.floor(s.dom.offsetHeight/s.dom.querySelector("li").offsetHeight)-1))
let{length:r}=n.open.options,l=n.open.selected>-1?n.open.selected+o*(t?1:-1):t?0:r-1
return l<0?l="page"==e?0:r-1:l>=r&&(l="page"==e?r-1:0),i.dispatch({effects:cd.of(l)}),!0}}const Od=t=>!!t.state.field(Cd,!1)&&(t.dispatch({effects:nd.of(!0)}),!0)
class Dd{constructor(t,e){this.active=t,this.context=e,this.time=Date.now(),this.updates=[],this.done=void 0}}const Ed=qi.fromClass(class{constructor(t){this.view=t,this.debounceUpdate=-1,this.running=[],this.debounceAccept=-1,this.pendingStart=!1,this.composing=0
for(let e of t.state.field(Cd).active)e.isPending&&this.startQuery(e)}update(t){let e=t.state.field(Cd),i=t.state.facet(ld)
if(!t.selectionSet&&!t.docChanged&&t.startState.field(Cd)==e)return
let n=t.transactions.some(t=>{let e=yd(t,i)
return 8&e||(t.selection||t.docChanged)&&!(3&e)})
for(let o=0;o<this.running.length;o++){let e=this.running[o]
if(n||e.context.abortOnDocChange&&t.docChanged||e.updates.length+t.transactions.length>50&&Date.now()-e.time>1e3){for(let i of e.context.abortListeners)try{i()}catch(t){Hi(this.view.state,t)}e.context.abortListeners=null,this.running.splice(o--,1)}else e.updates.push(...t.transactions)}this.debounceUpdate>-1&&clearTimeout(this.debounceUpdate),t.transactions.some(t=>t.effects.some(t=>t.is(nd)))&&(this.pendingStart=!0)
let s=this.pendingStart?50:i.activateOnTypingDelay
if(this.debounceUpdate=e.active.some(t=>t.isPending&&!this.running.some(e=>e.active.source==t.source))?setTimeout(()=>this.startUpdate(),s):-1,0!=this.composing)for(let o of t.transactions)o.isUserEvent("input.type")?this.composing=2:2==this.composing&&o.selection&&(this.composing=3)}startUpdate(){this.debounceUpdate=-1,this.pendingStart=!1
let{state:t}=this.view,e=t.field(Cd)
for(let i of e.active)i.isPending&&!this.running.some(t=>t.active.source==i.source)&&this.startQuery(i)
this.running.length&&e.open&&e.open.disabled&&(this.debounceAccept=setTimeout(()=>this.accept(),this.view.state.facet(ld).updateSyncTime))}startQuery(t){let{state:e}=this.view,i=Xu(e),n=new Yu(e,i,t.explicit,this.view),s=new Dd(t,n)
this.running.push(s),Promise.resolve(t.source(n)).then(t=>{s.context.aborted||(s.done=t||null,this.scheduleAccept())},t=>{this.view.dispatch({effects:sd.of(null)}),Hi(this.view.state,t)})}scheduleAccept(){this.running.every(t=>void 0!==t.done)?this.accept():this.debounceAccept<0&&(this.debounceAccept=setTimeout(()=>this.accept(),this.view.state.facet(ld).updateSyncTime))}accept(){var t
this.debounceAccept>-1&&clearTimeout(this.debounceAccept),this.debounceAccept=-1
let e=[],i=this.view.state.facet(ld),n=this.view.state.field(Cd)
for(let s=0;s<this.running.length;s++){let o=this.running[s]
if(void 0===o.done)continue
if(this.running.splice(s--,1),o.done){let n=Xu(o.updates.length?o.updates[0].startState:this.view.state),s=Math.min(n,o.done.from+(o.active.explicit?0:1)),r=new kd(o.active.source,o.active.explicit,s,o.done,o.done.from,null!==(t=o.done.to)&&void 0!==t?t:n)
for(let t of o.updates)r=r.update(t,i)
if(r.hasResult()){e.push(r)
continue}}let r=n.active.find(t=>t.source==o.active.source)
if(r&&r.isPending)if(null==o.done){let t=new xd(o.active.source,0)
for(let e of o.updates)t=t.update(e,i)
t.isPending||e.push(t)}else this.startQuery(r)}(e.length||n.open&&n.open.disabled)&&this.view.dispatch({effects:Sd.of(e)})}},{eventHandlers:{blur(t){let e=this.view.state.field(Cd,!1)
if(e&&e.tooltip&&this.view.state.facet(ld).closeOnBlur){let i=e.open&&br(this.view,e.open.tooltip)
i&&i.dom.contains(t.relatedTarget)||setTimeout(()=>this.view.dispatch({effects:sd.of(null)}),10)}},compositionstart(){this.composing=1},compositionend(){3==this.composing&&setTimeout(()=>this.view.dispatch({effects:nd.of(!1)}),20),this.composing=0}}}),Bd="object"==typeof navigator&&/Win/.test(navigator.platform),Rd=tt.highest(po.domEventHandlers({keydown(t,e){let i=e.state.field(Cd,!1)
if(!i||!i.open||i.open.disabled||i.open.selected<0||t.key.length>1||t.ctrlKey&&(!Bd||!t.altKey)||t.metaKey)return!1
let n=i.open.options[i.open.selected],s=i.active.find(t=>t.source==n.source),o=n.completion.commitCharacters||s.result.commitCharacters
return o&&o.indexOf(t.key)>-1&&Md(e,n),!1}})),Ld=po.baseTheme({".cm-tooltip.cm-tooltip-autocomplete":{"& > ul":{fontFamily:"monospace",whiteSpace:"nowrap",overflow:"hidden auto",maxWidth_fallback:"700px",maxWidth:"min(700px, 95vw)",minWidth:"250px",maxHeight:"10em",height:"100%",listStyle:"none",margin:0,padding:0,"& > li, & > completion-section":{padding:"1px 3px",lineHeight:1.2},"& > li":{overflowX:"hidden",textOverflow:"ellipsis",cursor:"pointer"},"& > completion-section":{display:"list-item",borderBottom:"1px solid silver",paddingLeft:"0.5em",opacity:.7}}},"&light .cm-tooltip-autocomplete ul li[aria-selected]":{background:"#17c",color:"white"},"&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]":{background:"#777"},"&dark .cm-tooltip-autocomplete ul li[aria-selected]":{background:"#347",color:"white"},"&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]":{background:"#444"},".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after":{content:'"···"',opacity:.5,display:"block",textAlign:"center",cursor:"pointer"},".cm-tooltip.cm-completionInfo":{position:"absolute",padding:"3px 9px",width:"max-content",maxWidth:"400px",boxSizing:"border-box",whiteSpace:"pre-line"},".cm-completionInfo.cm-completionInfo-left":{right:"100%"},".cm-completionInfo.cm-completionInfo-right":{left:"100%"},".cm-completionInfo.cm-completionInfo-left-narrow":{right:"30px"},".cm-completionInfo.cm-completionInfo-right-narrow":{left:"30px"},"&light .cm-snippetField":{backgroundColor:"#00000022"},"&dark .cm-snippetField":{backgroundColor:"#ffffff22"},".cm-snippetFieldPosition":{verticalAlign:"text-top",width:0,height:"1.15em",display:"inline-block",margin:"0 -0.7px -.7em",borderLeft:"1.4px dotted #888"},".cm-completionMatchedText":{textDecoration:"underline"},".cm-completionDetail":{marginLeft:"0.5em",fontStyle:"italic"},".cm-completionIcon":{fontSize:"90%",width:".8em",display:"inline-block",textAlign:"center",paddingRight:".6em",opacity:"0.6",boxSizing:"content-box"},".cm-completionIcon-function, .cm-completionIcon-method":{"&:after":{content:"'ƒ'"}},".cm-completionIcon-class":{"&:after":{content:"'○'"}},".cm-completionIcon-interface":{"&:after":{content:"'◌'"}},".cm-completionIcon-variable":{"&:after":{content:"'𝑥'"}},".cm-completionIcon-constant":{"&:after":{content:"'𝐶'"}},".cm-completionIcon-type":{"&:after":{content:"'𝑡'"}},".cm-completionIcon-enum":{"&:after":{content:"'∪'"}},".cm-completionIcon-property":{"&:after":{content:"'□'"}},".cm-completionIcon-keyword":{"&:after":{content:"'🔑︎'"}},".cm-completionIcon-namespace":{"&:after":{content:"'▢'"}},".cm-completionIcon-text":{"&:after":{content:"'abc'",fontSize:"50%",verticalAlign:"middle"}}}),Id={brackets:["(","[","{","'",'"'],before:")]}:;>",stringPrefixes:[]},Pd=vt.define({map:(t,e)=>e.mapPos(t,-1,R.TrackAfter)??void 0}),Nd=new class extends Et{}
Nd.startSide=1,Nd.endSide=-1
const Wd=Q.define({create:()=>Pt.empty,update(t,e){if(t=t.map(e.changes),e.selection){let i=e.state.doc.lineAt(e.selection.main.head)
t=t.update({filter:t=>t>=i.from&&t<=i.to})}for(let i of e.effects)i.is(Pd)&&(t=t.update({add:[Nd.range(i.value,i.value+1)]}))
return t}}),Hd="()[]{}<>«»»«［］｛｝"
function Vd(t){for(let e=0;e<16;e+=2)if(Hd.charCodeAt(e)==t)return Hd.charAt(e+1)
return D(t<128?t:t+1)}function Fd(t,e){return t.languageDataAt("closeBrackets",e)[0]||Id}const zd="object"==typeof navigator&&/Android\b/.test(navigator.userAgent),qd=po.inputHandler.of((t,e,i,n)=>{if((zd?t.composing:t.compositionStarted)||t.state.readOnly)return!1
let s=t.state.selection.main
if(n.length>2||2==n.length&&1==E(O(n,0))||e!=s.from||i!=s.to)return!1
let o=function(t,e){let i=Fd(t,t.selection.main.head),n=i.brackets||Id.brackets
for(let s of n){let o=Vd(O(s,0))
if(e==s)return o==s?Yd(t,s,n.indexOf(s+s+s)>-1,i):$d(t,s,o,i.before||Id.before)
if(e==o&&Kd(t,t.selection.main.from))return Ud(t,0,o)}return null}(t.state,n)
return!!o&&(t.dispatch(o),!0)}),_d=[{key:"Backspace",run:({state:t,dispatch:e})=>{if(t.readOnly)return!1
let i=Fd(t,t.selection.main.head).brackets||Id.brackets,n=null,s=t.changeByRange(e=>{if(e.empty){let n=function(t,e){let i=t.sliceString(e-2,e)
return E(O(i,0))==i.length?i:i.slice(1)}(t.doc,e.head)
for(let s of i)if(s==n&&jd(t.doc,e.head)==Vd(O(s,0)))return{changes:{from:e.head-s.length,to:e.head+s.length},range:q.cursor(e.head-s.length)}}return{range:n=e}})
return n||e(t.update(s,{scrollIntoView:!0,userEvent:"delete.backward"})),!n}}]
function Kd(t,e){let i=!1
return t.field(Wd).between(0,t.doc.length,t=>{t==e&&(i=!0)}),i}function jd(t,e){let i=t.sliceString(e,e+2)
return i.slice(0,E(O(i,0)))}function $d(t,e,i,n){let s=null,o=t.changeByRange(o=>{if(!o.empty)return{changes:[{insert:e,from:o.from},{insert:i,from:o.to}],effects:Pd.of(o.to+e.length),range:q.range(o.anchor+e.length,o.head+e.length)}
let r=jd(t.doc,o.head)
return!r||/\s/.test(r)||n.indexOf(r)>-1?{changes:{insert:e+i,from:o.head},effects:Pd.of(o.head+e.length),range:q.cursor(o.head+e.length)}:{range:s=o}})
return s?null:t.update(o,{scrollIntoView:!0,userEvent:"input.type"})}function Ud(t,e,i){let n=null,s=t.changeByRange(e=>e.empty&&jd(t.doc,e.head)==i?{changes:{from:e.head,to:e.head+i.length,insert:i},range:q.cursor(e.head+i.length)}:n={range:e})
return n?null:t.update(s,{scrollIntoView:!0,userEvent:"input.type"})}function Yd(t,e,i,n){let s=n.stringPrefixes||Id.stringPrefixes,o=null,r=t.changeByRange(n=>{if(!n.empty)return{changes:[{insert:e,from:n.from},{insert:e,from:n.to}],effects:Pd.of(n.to+e.length),range:q.range(n.anchor+e.length,n.head+e.length)}
let r,l=n.head,a=jd(t.doc,l)
if(a==e){if(Gd(t,l))return{changes:{insert:e+e,from:l},effects:Pd.of(l+e.length),range:q.cursor(l+e.length)}
if(Kd(t,l)){let n=i&&t.sliceDoc(l,l+3*e.length)==e+e+e?e+e+e:e
return{changes:{from:l,to:l+n.length,insert:n},range:q.cursor(l+n.length)}}}else{if(i&&t.sliceDoc(l-2*e.length,l)==e+e&&(r=Jd(t,l-2*e.length,s))>-1&&Gd(t,r))return{changes:{insert:e+e+e+e,from:l},effects:Pd.of(l+e.length),range:q.cursor(l+e.length)}
if(t.charCategorizer(l)(a)!=Mt.Word&&Jd(t,l,s)>-1&&!function(t,e,i,n){let s=la(t).resolveInner(e,-1),o=n.reduce((t,e)=>Math.max(t,e.length),0)
for(let r=0;r<5;r++){let r=t.sliceDoc(s.from,Math.min(s.to,s.from+i.length+o)),l=r.indexOf(i)
if(!l||l>-1&&n.indexOf(r.slice(0,l))>-1){let e=s.firstChild
for(;e&&e.from==s.from&&e.to-e.from>i.length+l;){if(t.sliceDoc(e.to-i.length,e.to)==i)return!1
e=e.firstChild}return!0}let a=s.to==e&&s.parent
if(!a)break
s=a}return!1}(t,l,e,s))return{changes:{insert:e+e,from:l},effects:Pd.of(l+e.length),range:q.cursor(l+e.length)}}return{range:o=n}})
return o?null:t.update(r,{scrollIntoView:!0,userEvent:"input.type"})}function Gd(t,e){let i=la(t).resolveInner(e+1)
return i.parent&&i.from==e}function Jd(t,e,i){let n=t.charCategorizer(e)
if(n(t.sliceDoc(e-1,e))!=Mt.Word)return e
for(let s of i){let i=e-s.length
if(t.sliceDoc(i,e)==s&&n(t.sliceDoc(i-1,i))!=Mt.Word)return i}return-1}const Xd=[{key:"Ctrl-Space",run:Od},{mac:"Alt-`",run:Od},{mac:"Alt-i",run:Od},{key:"Escape",run:t=>{let e=t.state.field(Cd,!1)
return!(!e||!e.active.some(t=>0!=t.state)||(t.dispatch({effects:sd.of(null)}),0))}},{key:"ArrowDown",run:Td(!0)},{key:"ArrowUp",run:Td(!1)},{key:"PageDown",run:Td(!0,"page")},{key:"PageUp",run:Td(!1,"page")},{key:"Enter",run:t=>{let e=t.state.field(Cd,!1)
return!(t.state.readOnly||!e||!e.open||e.open.selected<0||e.open.disabled||Date.now()-e.open.timestamp<t.state.facet(ld).interactionDelay)&&Md(t,e.open.options[e.open.selected])}}],Qd=tt.highest(xo.computeN([ld],t=>t.facet(ld).defaultKeymap?[Xd]:[]))
class Zd{constructor(t,e,i){this.from=t,this.to=e,this.diagnostic=i}}class tf{constructor(t,e,i){this.diagnostics=t,this.panel=e,this.selected=i}static init(t,e,i){let n=i.facet(uf).markerFilter
n&&(t=n(t,i))
let s=t.slice().sort((t,e)=>t.from-e.from||t.to-e.to),o=new Nt,r=[],l=0,a=i.doc.iter(),h=0,c=i.doc.length
for(let d=0;;){let t,e,i=d==s.length?null:s[d]
if(!i&&!r.length)break
if(r.length)t=l,e=r.reduce((t,e)=>Math.min(t,e.to),i&&i.from>t?i.from:1e8)
else{if(t=i.from,t>c)break
e=i.to,r.push(i),d++}for(;d<s.length;){let i=s[d]
if(i.from!=t||!(i.to>i.from||i.to==t)){e=Math.min(i.from,e)
break}r.push(i),d++,e=Math.min(i.to,e)}e=Math.min(e,c)
let n=!1
if(r.some(i=>i.from==t&&(i.to==e||e==c))&&(n=t==e,!n&&e-t<10)){let i=t-(h+a.value.length)
i>0&&(a.next(i),h=t)
for(let s=t;;){if(s>=e){n=!0
break}if(!a.lineBreak&&h+a.value.length>s)break
s=h+a.value.length,h+=a.value.length,a.next()}}let u=xf(r)
if(n)o.add(t,t,Oe.widget({widget:new mf(u),diagnostics:r.slice()}))
else{let i=r.reduce((t,e)=>e.markClass?t+" "+e.markClass:t,"")
o.add(t,e,Oe.mark({class:"cm-lintRange cm-lintRange-"+u+i,diagnostics:r.slice(),inclusiveEnd:r.some(t=>t.to>e)}))}if(l=e,l==c)break
for(let s=0;s<r.length;s++)r[s].to<=l&&r.splice(s--,1)}let u=o.finish()
return new tf(u,e,ef(u))}}function ef(t,e=null,i=0){let n=null
return t.between(i,1e9,(t,i,{spec:s})=>{if(!(e&&s.diagnostics.indexOf(e)<0))if(n){if(s.diagnostics.indexOf(n.diagnostic)<0)return!1
n=new Zd(n.from,i,n.diagnostic)}else n=new Zd(t,i,e||s.diagnostics[0])}),n}const nf=vt.define(),sf=vt.define(),of=vt.define(),rf=Q.define({create:()=>new tf(Oe.none,null,null),update(t,e){if(e.docChanged&&t.diagnostics.size){let i=t.diagnostics.map(e.changes),n=null,s=t.panel
if(t.selected){let s=e.changes.mapPos(t.selected.from,1)
n=ef(i,t.selected.diagnostic,s)||ef(i,null,s)}!i.size&&s&&e.state.facet(uf).autoPanel&&(s=null),t=new tf(i,s,n)}for(let i of e.effects)if(i.is(nf)){let n=e.state.facet(uf).autoPanel?i.value.length?vf.open:null:t.panel
t=tf.init(i.value,n,e.state)}else i.is(sf)?t=new tf(t.diagnostics,i.value?vf.open:null,t.selected):i.is(of)&&(t=new tf(t.diagnostics,t.panel,i.value))
return t},provide:t=>[Ar.from(t,t=>t.panel),po.decorations.from(t,t=>t.diagnostics)]}),lf=Oe.mark({class:"cm-lintRange cm-lintRange-active"})
function af(t,e){return le("ul",{class:"cm-tooltip-lint"},e.map(e=>pf(t,e,!1)))}const hf=t=>{let e=t.state.field(rf,!1)
return!(!e||!e.panel||(t.dispatch({effects:sf.of(!1)}),0))},cf=[{key:"Mod-Shift-m",run:t=>{let e=t.state.field(rf,!1)
var i,n
e&&e.panel||t.dispatch({effects:(i=t.state,n=[sf.of(!0)],i.field(rf,!1)?n:n.concat(vt.appendConfig.of(Sf)))})
let s=kr(t,vf.open)
return s&&s.dom.querySelector(".cm-panel-lint ul").focus(),!0},preventDefault:!0},{key:"F8",run:t=>{let e=t.state.field(rf,!1)
if(!e)return!1
let i=t.state.selection.main,n=ef(e.diagnostics,null,i.to+1)
return!(!n&&(n=ef(e.diagnostics,null,0),!n||n.from==i.from&&n.to==i.to)||(t.dispatch({selection:{anchor:n.from,head:n.to},scrollIntoView:!0}),function(t,e,i,n={}){var s
let o=t.state.facet(vr).map(e=>t.plugin(e)).filter(t=>!!t)
if(n.tooltip&&n.tooltip.active){let t=o.find(t=>t.field==n.tooltip.active)
t&&(o=[t])}for(let r of o)r.activateHover(t,e,i,null!==(s=n.until)&&void 0!==s?s:()=>!1)}(t,n.from,1,{tooltip:kf,until:t=>t.docChanged||t.newSelection.main.head<n.from||t.newSelection.main.head>n.to}),0))}}],uf=j.define({combine:t=>({sources:t.map(t=>t.source).filter(t=>null!=t),...Dt(t.map(t=>t.config),{delay:750,markerFilter:null,tooltipFilter:null,needsRefresh:null,hideOn:()=>null},{delay:Math.max,markerFilter:df,tooltipFilter:df,needsRefresh:(t,e)=>t?e?i=>t(i)||e(i):t:e,hideOn:(t,e)=>t?e?(i,n,s)=>t(i,n,s)||e(i,n,s):t:e,autoPanel:(t,e)=>t||e})})})
function df(t,e){return t?e?(i,n)=>e(t(i,n),n):t:e}function ff(t){let e=[]
if(t)t:for(let{name:i}of t){for(let t=0;t<i.length;t++){let n=i[t]
if(/[a-zA-Z]/.test(n)&&!e.some(t=>t.toLowerCase()==n.toLowerCase())){e.push(n)
continue t}}e.push("")}return e}function pf(t,e,i){var n
let s=i?ff(e.actions):[]
return le("li",{class:"cm-diagnostic cm-diagnostic-"+e.severity},le("span",{class:"cm-diagnosticText"},e.renderMessage?e.renderMessage(t):e.message),null===(n=e.actions)||void 0===n?void 0:n.map((i,n)=>{let o=!1,r=n=>{if(n.preventDefault(),o)return
o=!0
let s=ef(t.state.field(rf).diagnostics,e)
s&&i.apply(t,s.from,s.to)},{name:l}=i,a=s[n]?l.indexOf(s[n]):-1,h=a<0?l:[l.slice(0,a),le("u",l.slice(a,a+1)),l.slice(a+1)]
return le("button",{type:"button",class:"cm-diagnosticAction"+(i.markClass?" "+i.markClass:""),onclick:r,onmousedown:r,"aria-label":` Action: ${l}${a<0?"":` (access key "${s[n]})"`}.`},h)}),e.source&&le("div",{class:"cm-diagnosticSource"},e.source))}class mf extends Ae{constructor(t){super(),this.sev=t}eq(t){return t.sev==this.sev}toDOM(){return le("span",{class:"cm-lintPoint cm-lintPoint-"+this.sev})}}class gf{constructor(t,e){this.diagnostic=e,this.id="item_"+Math.floor(4294967295*Math.random()).toString(16),this.dom=pf(t,e,!0),this.dom.id=this.id,this.dom.setAttribute("role","option")}}class vf{constructor(t){this.view=t,this.items=[],this.list=le("ul",{tabIndex:0,role:"listbox","aria-label":this.view.state.phrase("Diagnostics"),onkeydown:e=>{if(!(e.ctrlKey||e.altKey||e.metaKey)){if(27==e.keyCode)hf(this.view),this.view.focus()
else if(38==e.keyCode||33==e.keyCode)this.moveSelection((this.selectedIndex-1+this.items.length)%this.items.length)
else if(40==e.keyCode||34==e.keyCode)this.moveSelection((this.selectedIndex+1)%this.items.length)
else if(36==e.keyCode)this.moveSelection(0)
else if(35==e.keyCode)this.moveSelection(this.items.length-1)
else if(13==e.keyCode)this.view.focus()
else{if(!(e.keyCode>=65&&e.keyCode<=90&&this.selectedIndex>=0))return
{let{diagnostic:i}=this.items[this.selectedIndex],n=ff(i.actions)
for(let s=0;s<n.length;s++)if(n[s].toUpperCase().charCodeAt(0)==e.keyCode){let e=ef(this.view.state.field(rf).diagnostics,i)
e&&i.actions[s].apply(t,e.from,e.to)}}}e.preventDefault()}},onclick:t=>{for(let e=0;e<this.items.length;e++)this.items[e].dom.contains(t.target)&&this.moveSelection(e)}}),this.dom=le("div",{class:"cm-panel-lint"},this.list,le("button",{type:"button",name:"close","aria-label":this.view.state.phrase("close"),onclick:()=>hf(this.view)},"×")),this.update()}get selectedIndex(){let t=this.view.state.field(rf).selected
if(!t)return-1
for(let e=0;e<this.items.length;e++)if(this.items[e].diagnostic==t.diagnostic)return e
return-1}update(){let{diagnostics:t,selected:e}=this.view.state.field(rf),i=0,n=!1,s=null,o=new Set
for(t.between(0,this.view.state.doc.length,(t,r,{spec:l})=>{for(let a of l.diagnostics){if(o.has(a))continue
o.add(a)
let t,r=-1
for(let e=i;e<this.items.length;e++)if(this.items[e].diagnostic==a){r=e
break}r<0?(t=new gf(this.view,a),this.items.splice(i,0,t),n=!0):(t=this.items[r],r>i&&(this.items.splice(i,r-i),n=!0)),e&&t.diagnostic==e.diagnostic?t.dom.hasAttribute("aria-selected")||(t.dom.setAttribute("aria-selected","true"),s=t):t.dom.hasAttribute("aria-selected")&&t.dom.removeAttribute("aria-selected"),i++}});i<this.items.length&&!(1==this.items.length&&this.items[0].diagnostic.from<0);)n=!0,this.items.pop()
0==this.items.length&&(this.items.push(new gf(this.view,{from:-1,to:-1,severity:"info",message:this.view.state.phrase("No diagnostics")})),n=!0),s?(this.list.setAttribute("aria-activedescendant",s.id),this.view.requestMeasure({key:this,read:()=>({sel:s.dom.getBoundingClientRect(),panel:this.list.getBoundingClientRect()}),write:({sel:t,panel:e})=>{let i=e.height/this.list.offsetHeight
t.top<e.top?this.list.scrollTop-=(e.top-t.top)/i:t.bottom>e.bottom&&(this.list.scrollTop+=(t.bottom-e.bottom)/i)}})):this.selectedIndex<0&&this.list.removeAttribute("aria-activedescendant"),n&&this.sync()}sync(){let t=this.list.firstChild
function e(){let e=t
t=e.nextSibling,e.remove()}for(let i of this.items)if(i.dom.parentNode==this.list){for(;t!=i.dom;)e()
t=i.dom.nextSibling}else this.list.insertBefore(i.dom,t)
for(;t;)e()}moveSelection(t){if(this.selectedIndex<0)return
let e=ef(this.view.state.field(rf).diagnostics,this.items[t].diagnostic)
e&&this.view.dispatch({selection:{anchor:e.from,head:e.to},scrollIntoView:!0,effects:of.of(e)})}static open(t){return new vf(t)}}function wf(t){return function(t,e='viewBox="0 0 40 40"'){return`url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${e}>${encodeURIComponent(t)}</svg>')`}(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${t}" fill="none" stroke-width=".7"/>`,'width="6" height="3"')}const bf=po.baseTheme({".cm-diagnostic":{padding:"3px 6px 3px 8px",marginLeft:"-1px",display:"block",whiteSpace:"pre-wrap"},".cm-diagnostic-error":{borderLeft:"5px solid #d11"},".cm-diagnostic-warning":{borderLeft:"5px solid orange"},".cm-diagnostic-info":{borderLeft:"5px solid #999"},".cm-diagnostic-hint":{borderLeft:"5px solid #66d"},".cm-diagnosticAction":{font:"inherit",border:"none",padding:"2px 4px",backgroundColor:"#444",color:"white",borderRadius:"3px",marginLeft:"8px",cursor:"pointer"},".cm-diagnosticSource":{fontSize:"70%",opacity:.7},".cm-lintRange":{backgroundPosition:"left bottom",backgroundRepeat:"repeat-x",paddingBottom:"0.7px"},".cm-lintRange-error":{backgroundImage:wf("#f11")},".cm-lintRange-warning":{backgroundImage:wf("orange")},".cm-lintRange-info":{backgroundImage:wf("#999")},".cm-lintRange-hint":{backgroundImage:wf("#66d")},".cm-lintRange-active":{backgroundColor:"#ffdd9980"},".cm-tooltip-lint":{padding:0,margin:0},".cm-lintPoint":{position:"relative","&:after":{content:'""',position:"absolute",bottom:0,left:"-2px",borderLeft:"3px solid transparent",borderRight:"3px solid transparent",borderBottom:"4px solid #d11"}},".cm-lintPoint-warning":{"&:after":{borderBottomColor:"orange"}},".cm-lintPoint-info":{"&:after":{borderBottomColor:"#999"}},".cm-lintPoint-hint":{"&:after":{borderBottomColor:"#66d"}},".cm-panel.cm-panel-lint":{position:"relative","& ul":{maxHeight:"100px",overflowY:"auto","& [aria-selected]":{backgroundColor:"#ddd","& u":{textDecoration:"underline"}},"&:focus [aria-selected]":{background_fallback:"#bdf",backgroundColor:"Highlight",color_fallback:"white",color:"HighlightText"},"& u":{textDecoration:"none"},padding:0,margin:0},"& [name=close]":{position:"absolute",top:"0",right:"2px",background:"inherit",border:"none",font:"inherit",padding:0,margin:0}},"&dark .cm-lintRange-active":{backgroundColor:"#86714a80"},"&dark .cm-panel.cm-panel-lint ul":{"& [aria-selected]":{backgroundColor:"#2e343e"}}})
function yf(t){return"error"==t?4:"warning"==t?3:"info"==t?2:1}function xf(t){let e="hint",i=1
for(let n of t){let t=yf(n.severity)
t>i&&(i=t,e=n.severity)}return e}const kf=function(t,e={}){let i=vt.define(),n=new WeakMap,s=Q.define({create:()=>[],update(t,o){let r=n.get(t)
if(t.length&&(e.hideOnChange&&(o.docChanged||o.selection)||r&&r(o)?t=[]:e.hideOn&&(t=t.filter(t=>!e.hideOn(o,t)))),o.docChanged&&t.length){let e=[]
for(let i of t){let t=o.changes.mapPos(i.pos,-1,R.TrackDel)
if(null!=t){let n=Object.assign(Object.create(null),i)
n.pos=t,null!=n.end&&(n.end=o.changes.mapPos(n.end)),e.push(n)}}t=e}for(let e of o.effects)e.is(i)&&(t=e.value,r=void 0),(e.is(yr)&&!e.value||e.value==s)&&(t=[])
return t.length&&r&&n.set(t,r),t},provide:t=>pr.from(t)})
const o=qi.define(o=>new wr(o,t,s,n,i,e.hoverTime||300))
return{active:s,extension:[s,o,vr.of(o),gr]}}(function(t,e,i){let n,{diagnostics:s}=t.state.field(rf),o=-1,r=-1
s.between(e-(i<0?1:0),e+(i>0?1:0),(t,s,{spec:l})=>{if(e>=t&&e<=s&&(t==s||(e>t||i>0)&&(e<s||i<0)))return n=l.diagnostics,o=t,r=s,!1})
let l=t.state.facet(uf).tooltipFilter
return n&&l&&(n=l(n,t.state)),n?{pos:o,end:r,above:t.state.doc.lineAt(o).to<r,create:()=>({dom:af(t,n)})}:null},{hideOn:function(t,e){let i=e.pos,n=e.end||i,s=t.state.facet(uf).hideOn(t,i,n)
if(null!=s)return s
let o=t.startState.doc.lineAt(e.pos)
return!(!t.effects.some(t=>t.is(nf))&&!t.changes.touchesRange(o.from,Math.max(o.to,n)))}}),Sf=[rf,po.decorations.compute([rf],t=>{let{selected:e,panel:i}=t.field(rf)
return e&&i&&e.from!=e.to?Oe.set([lf.range(e.from,e.to)]):Oe.none}),kf,bf]
var Cf=function(t){void 0===t&&(t={})
var e=t.crosshairCursor,i=void 0!==e&&e,n=[]
!1!==t.closeBracketsKeymap&&(n=n.concat(_d)),!1!==t.defaultKeymap&&(n=n.concat(Gc)),!1!==t.searchKeymap&&(n=n.concat(zu)),!1!==t.historyKeymap&&(n=n.concat(Qh)),!1!==t.foldKeymap&&(n=n.concat(_a)),!1!==t.completionKeymap&&(n=n.concat(Xd)),!1!==t.lintKeymap&&(n=n.concat(cf))
var s=[]
return!1!==t.lineNumbers&&s.push(function(t={}){return[$r.of(t),Wr(),Gr]}()),!1!==t.highlightActiveLineGutter&&s.push(Qr),!1!==t.highlightSpecialChars&&s.push(function(t={}){return[Yo.of(t),Go||(Go=qi.fromClass(class{constructor(t){this.view=t,this.decorations=Oe.none,this.decorationCache=Object.create(null),this.decorator=this.makeDecorator(t.state.facet(Yo)),this.decorations=this.decorator.createDeco(t)}makeDecorator(t){return new _o({regexp:t.specialChars,decoration:(e,i,n)=>{let{doc:s}=i.state,o=O(e[0],0)
if(9==o){let t=s.lineAt(n),e=i.state.tabSize,o=Ut(t.text,e,n-t.from)
return Oe.replace({widget:new Xo((e-o%e)*this.view.defaultCharacterWidth/this.view.scaleX)})}return this.decorationCache[o]||(this.decorationCache[o]=Oe.replace({widget:new Jo(t,o)}))},boundary:t.replaceTabs?void 0:/[^]/})}update(t){let e=t.state.facet(Yo)
t.startState.facet(Yo)!=e?(this.decorator=this.makeDecorator(e),this.decorations=this.decorator.createDeco(t.view)):this.decorations=this.decorator.updateDeco(t,this.decorations)}},{decorations:t=>t.decorations}))]}()),!1!==t.history&&s.push(function(t={}){return[Nh,Ph.of(t),po.domEventHandlers({beforeinput(t,e){let i="historyUndo"==t.inputType?Hh:"historyRedo"==t.inputType?Vh:null
return!!i&&(t.preventDefault(),i(e))}})]}()),!1!==t.foldGutter&&s.push(function(t={}){let e={...Ja,...t},i=new Xa(e,!0),n=new Xa(e,!1),s=qi.fromClass(class{constructor(t){this.from=t.viewport.from,this.markers=this.buildMarkers(t)}update(t){(t.docChanged||t.viewportChanged||t.startState.facet(ga)!=t.state.facet(ga)||t.startState.field(Wa,!1)!=t.state.field(Wa,!1)||la(t.startState)!=la(t.state)||e.foldingChanged(t))&&(this.markers=this.buildMarkers(t.view))}buildMarkers(t){let e=new Nt
for(let s of t.viewportLineBlocks){let o=Va(t.state,s.from,s.to)?n:Ra(t.state,s.from,s.to)?i:null
o&&e.add(s.from,s.from,o)}return e.finish()}}),{domEventHandlers:o}=e
return[s,Pr({class:"cm-foldGutter",markers(t){var e
return(null===(e=t.plugin(s))||void 0===e?void 0:e.markers)||Pt.empty},initialSpacer:()=>new Xa(e,!1),domEventHandlers:{...o,click:(t,e,i)=>{if(o.click&&o.click(t,e,i))return!0
let n=Va(t.state,e.from,e.to)
if(n)return t.dispatch({effects:Pa.of(n)}),!0
let s=Ra(t.state,e.from,e.to)
return!!s&&(t.dispatch({effects:Ia.of(s)}),!0)}}}),$a()]}()),!1!==t.drawSelection&&s.push(function(t={}){return[Lo.of(t),Po,Wo,Ho,Li.of(!0)]}()),!1!==t.dropCursor&&s.push([Fo,zo]),!1!==t.allowMultipleSelections&&s.push(Ot.allowMultipleSelections.of(!0)),!1!==t.indentOnInput&&s.push(Ot.transactionFilter.of(t=>{if(!t.docChanged||!t.isUserEvent("input.type")&&!t.isUserEvent("input.complete"))return t
let e=t.startState.languageDataAt("indentOnInput",t.startState.selection.main.head)
if(!e.length)return t
let i=t.newDoc,{head:n}=t.newSelection.main,s=i.lineAt(n)
if(n>s.from+200)return t
let o=i.sliceString(s.from,n)
if(!e.some(t=>t.test(o)))return t
let{state:r}=t,l=-1,a=[]
for(let{head:h}of r.selection.ranges){let t=r.doc.lineAt(h)
if(t.from==l)continue
l=t.from
let e=xa(r,t.from)
if(null==e)continue
let i=/^\s*/.exec(t.text)[0],n=ya(r,e)
i!=n&&a.push({from:t.from,to:t.from+i.length,insert:n})}return a.length?[t,{changes:a,sequential:!0}]:t})),!1!==t.syntaxHighlighting&&s.push(nh(oh,{fallback:!0})),!1!==t.bracketMatching&&s.push(function(t={}){return[ah.of(t),fh]}()),!1!==t.closeBrackets&&s.push([qd,Wd]),!1!==t.autocompletion&&s.push(function(t={}){return[Rd,Cd,ld.of(t),Ed,Qd,Ld]}()),!1!==t.rectangularSelection&&s.push(po.mouseSelectionStyle.of((t,e)=>(t=>t.altKey&&0==t.button)(e)?function(t,e){let i=ir(t,e),n=t.state.selection
return i?{update(t){if(t.docChanged){let e=t.changes.mapPos(t.startState.doc.line(i.line).from),s=t.state.doc.lineAt(e)
i={line:s.number,col:i.col,off:Math.min(i.off,s.length)},n=n.map(t.changes)}},get(e,s,o){let r=ir(t,e)
if(!r)return n
let l=function(t,e,i){let n=Math.min(e.line,i.line),s=Math.max(e.line,i.line),o=[]
if(e.off>er||i.off>er||e.col<0||i.col<0){let r=Math.min(e.off,i.off),l=Math.max(e.off,i.off)
for(let e=n;e<=s;e++){let i=t.doc.line(e)
i.length<=l&&o.push(q.range(i.from+r,i.to+l))}}else{let r=Math.min(e.col,i.col),l=Math.max(e.col,i.col)
for(let e=n;e<=s;e++){let i=t.doc.line(e),n=Yt(i.text,r,t.tabSize,!0)
if(n<0)o.push(q.cursor(i.to))
else{let e=Yt(i.text,l,t.tabSize)
o.push(q.range(i.from+n,i.from+e))}}}return o}(t.state,i,r)
return l.length?o?q.create(l.concat(n.ranges)):q.create(l):n}}:null}(t,e):null)),!1!==i&&s.push(function(t={}){let[e,i]=nr[t.key||"Alt"],n=qi.fromClass(class{constructor(t){this.view=t,this.isDown=!1}set(t){this.isDown!=t&&(this.isDown=t,this.view.update([]))}},{eventObservers:{keydown(t){this.set(t.keyCode==e||i(t))},keyup(t){t.keyCode!=e&&i(t)||this.set(!1)},mousemove(t){this.set(i(t))}}})
return[n,po.contentAttributes.of(t=>{var e
return(null===(e=t.plugin(n))||void 0===e?void 0:e.isDown)?sr:null})]}()),!1!==t.highlightActiveLine&&s.push(Zo),!1!==t.highlightSelectionMatches&&s.push([du,uu]),t.tabSize&&"number"==typeof t.tabSize&&s.push(wa.of(" ".repeat(t.tabSize))),s.concat([xo.of(n.flat())]).filter(Boolean)}
const Mf="#e06c75",Af="#abb2bf",Tf="#7d8799",Of="#d19a66",Df="#2c313a",Ef="#282c34",Bf="#353a42",Rf="#528bff",Lf=[po.theme({"&":{color:Af,backgroundColor:Ef},".cm-content":{caretColor:Rf},".cm-cursor, .cm-dropCursor":{borderLeftColor:Rf},"&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection":{backgroundColor:"#3E4451"},".cm-panels":{backgroundColor:"#21252b",color:Af},".cm-panels.cm-panels-top":{borderBottom:"2px solid black"},".cm-panels.cm-panels-bottom":{borderTop:"2px solid black"},".cm-searchMatch":{backgroundColor:"#72a1ff59",outline:"1px solid #457dff"},".cm-searchMatch.cm-searchMatch-selected":{backgroundColor:"#6199ff2f"},".cm-activeLine":{backgroundColor:"#6699ff0b"},".cm-selectionMatch":{backgroundColor:"#aafe661a"},"&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket":{backgroundColor:"#bad0f847"},".cm-gutters":{backgroundColor:Ef,color:Tf,border:"none"},".cm-activeLineGutter":{backgroundColor:Df},".cm-foldPlaceholder":{backgroundColor:"transparent",border:"none",color:"#ddd"},".cm-tooltip":{border:"none",backgroundColor:Bf},".cm-tooltip .cm-tooltip-arrow:before":{borderTopColor:"transparent",borderBottomColor:"transparent"},".cm-tooltip .cm-tooltip-arrow:after":{borderTopColor:Bf,borderBottomColor:Bf},".cm-tooltip-autocomplete":{"& > ul > li[aria-selected]":{backgroundColor:Df,color:Af}}},{dark:!0}),nh(Za.define([{tag:ea.keyword,color:"#c678dd"},{tag:[ea.name,ea.deleted,ea.character,ea.propertyName,ea.macroName],color:Mf},{tag:[ea.function(ea.variableName),ea.labelName],color:"#61afef"},{tag:[ea.color,ea.constant(ea.name),ea.standard(ea.name)],color:Of},{tag:[ea.definition(ea.name),ea.separator],color:Af},{tag:[ea.typeName,ea.className,ea.number,ea.changed,ea.annotation,ea.modifier,ea.self,ea.namespace],color:"#e5c07b"},{tag:[ea.operator,ea.operatorKeyword,ea.url,ea.escape,ea.regexp,ea.link,ea.special(ea.string)],color:"#56b6c2"},{tag:[ea.meta,ea.comment],color:Tf},{tag:ea.strong,fontWeight:"bold"},{tag:ea.emphasis,fontStyle:"italic"},{tag:ea.strikethrough,textDecoration:"line-through"},{tag:ea.link,color:Tf,textDecoration:"underline"},{tag:ea.heading,fontWeight:"bold",color:Mf},{tag:[ea.atom,ea.bool,ea.special(ea.variableName)],color:Of},{tag:[ea.processingInstruction,ea.string,ea.inserted],color:"#98c379"},{tag:ea.invalid,color:"#ffffff"}]))]
var If=po.theme({"&":{backgroundColor:"#fff"}},{dark:!1}),Pf=function(t){void 0===t&&(t={})
var e=t,i=e.indentWithTab,n=void 0===i||i,s=e.editable,o=void 0===s||s,r=e.readOnly,l=void 0!==r&&r,a=e.theme,h=void 0===a?"light":a,c=e.placeholder,u=void 0===c?"":c,d=e.basicSetup,f=void 0===d||d,p=[]
switch(n&&p.unshift(xo.of([Jc])),f&&("boolean"==typeof f?p.unshift(Cf()):p.unshift(Cf(f))),u&&p.unshift(function(t){let e=qi.fromClass(class{constructor(e){this.view=e,this.placeholder=t?Oe.set([Oe.widget({widget:new tr(t),side:1}).range(0)]):Oe.none}get decorations(){return this.view.state.doc.length?Oe.none:this.placeholder}},{decorations:t=>t.decorations})
return"string"==typeof t?[e,po.contentAttributes.of({"aria-placeholder":t})]:e}(u)),h){case"light":p.push(If)
break
case"dark":p.push(Lf)
break
case"none":break
default:p.push(h)}return!1===o&&p.push(po.editable.of(!1)),l&&p.push(Ot.readOnly.of(!0)),[...p]}
class Nf{constructor(t,e){this.timeLeftMS=void 0,this.timeoutMS=void 0,this.isCancelled=!1,this.isTimeExhausted=!1,this.callbacks=[],this.timeLeftMS=e,this.timeoutMS=e,this.callbacks.push(t)}tick(){if(!this.isCancelled&&!this.isTimeExhausted&&(this.timeLeftMS--,this.timeLeftMS<=0)){this.isTimeExhausted=!0
var t=this.callbacks.slice()
this.callbacks.length=0,t.forEach(t=>{try{t()}catch(t){console.error("TimeoutLatch callback error:",t)}})}}cancel(){this.isCancelled=!0,this.callbacks.length=0}reset(){this.timeLeftMS=this.timeoutMS,this.isCancelled=!1,this.isTimeExhausted=!1}get isDone(){return this.isCancelled||this.isTimeExhausted}}class Wf{constructor(){this.interval=null,this.latches=new Set}add(t){this.latches.add(t),this.start()}remove(t){this.latches.delete(t),0===this.latches.size&&this.stop()}start(){null===this.interval&&(this.interval=setInterval(()=>{this.latches.forEach(t=>{t.tick(),t.isDone&&this.remove(t)})},1))}stop(){null!==this.interval&&(clearInterval(this.interval),this.interval=null)}}var Hf=null,Vf=pt.define(),Ff=[],zf=i(17266),qf=["className","value","selection","extensions","onChange","onStatistics","onCreateEditor","onUpdate","autoFocus","theme","height","minHeight","maxHeight","width","minWidth","maxWidth","basicSetup","placeholder","indentWithTab","editable","readOnly","root","initialState"],_f=(0,o.forwardRef)((t,e)=>{var i=t.className,r=t.value,l=void 0===r?"":r,a=t.selection,h=t.extensions,c=void 0===h?[]:h,u=t.onChange,d=t.onStatistics,f=t.onCreateEditor,p=t.onUpdate,m=t.autoFocus,g=t.theme,v=void 0===g?"light":g,w=t.height,b=t.minHeight,y=t.maxHeight,x=t.width,k=t.minWidth,S=t.maxWidth,C=t.basicSetup,M=t.placeholder,A=t.indentWithTab,T=t.editable,O=t.readOnly,D=t.root,E=t.initialState,B=(0,s.A)(t,qf),R=(0,o.useRef)(null),L=function(t){var e=t.value,i=t.selection,n=t.onChange,s=t.onStatistics,r=t.onCreateEditor,l=t.onUpdate,a=t.extensions,h=void 0===a?Ff:a,c=t.autoFocus,u=t.theme,d=void 0===u?"light":u,f=t.height,p=void 0===f?null:f,m=t.minHeight,g=void 0===m?null:m,v=t.maxHeight,w=void 0===v?null:v,b=t.width,y=void 0===b?null:b,x=t.minWidth,k=void 0===x?null:x,S=t.maxWidth,C=void 0===S?null:S,M=t.placeholder,A=void 0===M?"":M,T=t.editable,O=void 0===T||T,D=t.readOnly,E=void 0!==D&&D,B=t.indentWithTab,R=void 0===B||B,L=t.basicSetup,I=void 0===L||L,P=t.root,N=t.initialState,W=(0,o.useState)(),H=W[0],V=W[1],F=(0,o.useState)(),z=F[0],q=F[1],_=(0,o.useState)(),K=_[0],j=_[1],$=(0,o.useState)(()=>({current:null}))[0],U=(0,o.useState)(()=>({current:null}))[0],Y=po.theme({"&":{height:p,minHeight:g,maxHeight:w,width:y,minWidth:k,maxWidth:C},"& .cm-scroller":{height:"100% !important"}}),G=po.updateListener.of(t=>{if(t.docChanged&&"function"==typeof n&&!t.transactions.some(t=>t.annotation(Vf))){$.current?$.current.reset():($.current=new Nf(()=>{if(U.current){var t=U.current
U.current=null,t()}$.current=null},200),("undefined"==typeof window?new Wf:(Hf||(Hf=new Wf),Hf)).add($.current))
var e=t.state.doc.toString()
n(e,t)}s&&s((t=>({line:t.state.doc.lineAt(t.state.selection.main.from),lineCount:t.state.doc.lines,lineBreak:t.state.lineBreak,length:t.state.doc.length,readOnly:t.state.readOnly,tabSize:t.state.tabSize,selection:t.state.selection,selectionAsSingle:t.state.selection.asSingle().main,ranges:t.state.selection.ranges,selectionCode:t.state.sliceDoc(t.state.selection.main.from,t.state.selection.main.to),selections:t.state.selection.ranges.map(e=>t.state.sliceDoc(e.from,e.to)),selectedText:t.state.selection.ranges.some(t=>!t.empty)}))(t))}),J=[G,Y,...Pf({theme:d,editable:O,readOnly:E,placeholder:A,indentWithTab:R,basicSetup:I})]
return l&&"function"==typeof l&&J.push(po.updateListener.of(l)),J=J.concat(h),(0,o.useLayoutEffect)(()=>{if(H&&!K){var t={doc:e,selection:i,extensions:J},n=N?Ot.fromJSON(N.json,t,N.fields):Ot.create(t)
if(j(n),!z){var s=new po({state:n,parent:H,root:P})
q(s),r&&r(s,n)}}return()=>{z&&(j(void 0),q(void 0))}},[H,K]),(0,o.useEffect)(()=>{t.container&&V(t.container)},[t.container]),(0,o.useEffect)(()=>()=>{z&&(z.destroy(),q(void 0)),$.current&&($.current.cancel(),$.current=null)},[z]),(0,o.useEffect)(()=>{c&&z&&z.focus()},[c,z]),(0,o.useEffect)(()=>{z&&z.dispatch({effects:vt.reconfigure.of(J)})},[d,h,p,g,w,y,k,C,A,O,E,R,I,n,l]),(0,o.useEffect)(()=>{if(void 0!==e){var t=z?z.state.doc.toString():""
if(z&&e!==t){var i=()=>{z&&e!==z.state.doc.toString()&&z.dispatch({changes:{from:0,to:z.state.doc.toString().length,insert:e||""},annotations:[Vf.of(!0)]})}
$.current&&!$.current.isDone?U.current=i:i()}}},[e,z]),{state:K,setState:j,view:z,setView:q,container:H,setContainer:V}}({root:D,value:l,autoFocus:m,theme:v,height:w,minHeight:b,maxHeight:y,width:x,minWidth:k,maxWidth:S,basicSetup:C,placeholder:M,indentWithTab:A,editable:T,readOnly:O,selection:a,onChange:u,onStatistics:d,onCreateEditor:f,onUpdate:p,extensions:c,initialState:E}),I=L.state,P=L.view,N=L.container,W=L.setContainer;(0,o.useImperativeHandle)(e,()=>({editor:R.current,state:I,view:P}),[R,N,I,P])
var H=(0,o.useCallback)(t=>{R.current=t,W(t)},[W])
if("string"!=typeof l)throw new Error("value must be typeof string but got "+typeof l)
var V="string"==typeof v?"cm-theme-"+v:"cm-theme"
return(0,zf.jsx)("div",(0,n.A)({ref:H,className:V+(i?" "+i:"")},B))})
_f.displayName="CodeMirror"
const Kf=_f}}])

//# sourceMappingURL=chunk.553.01e8e836837ea4367e98.map