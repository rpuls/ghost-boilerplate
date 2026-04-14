import{dk as tt,ca as w0,dj as $b}from"./index-fwVn0j7Q.js";function Tb(r,t){for(var a=0;a<t.length;a++){const i=t[a];if(typeof i!="string"&&!Array.isArray(i)){for(const l in i)if(l!=="default"&&!(l in r)){const f=Object.getOwnPropertyDescriptor(i,l);f&&Object.defineProperty(r,l,f.get?f:{enumerable:!0,get:()=>i[l]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var kt,mf;function q0(){if(mf)return kt;mf=1;var r=typeof tt=="object"&&tt&&tt.Object===Object&&tt;return kt=r,kt}var Nt,vf;function at(){if(vf)return Nt;vf=1;var r=q0(),t=typeof self=="object"&&self&&self.Object===Object&&self,a=r||t||Function("return this")();return Nt=a,Nt}var Ft,yf;function Dc(){if(yf)return Ft;yf=1;var r=at(),t=r.Symbol;return Ft=t,Ft}var Pt,pf;function _0(){if(pf)return Pt;pf=1;function r(t,a){for(var i=-1,l=t==null?0:t.length,f=Array(l);++i<l;)f[i]=a(t[i],i,t);return f}return Pt=r,Pt}var Dt,gf;function Pr(){if(gf)return Dt;gf=1;var r=Array.isArray;return Dt=r,Dt}var Ut,bf;function Eb(){if(bf)return Ut;bf=1;var r=Dc(),t=Object.prototype,a=t.hasOwnProperty,i=t.toString,l=r?r.toStringTag:void 0;function f(v){var h=a.call(v,l),p=v[l];try{v[l]=void 0;var R=!0}catch{}var S=i.call(v);return R&&(h?v[l]=p:delete v[l]),S}return Ut=f,Ut}var Bt,wf;function Ib(){if(wf)return Bt;wf=1;var r=Object.prototype,t=r.toString;function a(i){return t.call(i)}return Bt=a,Bt}var jt,qf;function pr(){if(qf)return jt;qf=1;var r=Dc(),t=Eb(),a=Ib(),i="[object Null]",l="[object Undefined]",f=r?r.toStringTag:void 0;function v(h){return h==null?h===void 0?l:i:f&&f in Object(h)?t(h):a(h)}return jt=v,jt}var Vt,_f;function gr(){if(_f)return Vt;_f=1;function r(t){return t!=null&&typeof t=="object"}return Vt=r,Vt}var Wt,$f;function Uc(){if($f)return Wt;$f=1;var r=pr(),t=gr(),a="[object Symbol]";function i(l){return typeof l=="symbol"||t(l)&&r(l)==a}return Wt=i,Wt}var zt,Tf;function Sb(){if(Tf)return zt;Tf=1;var r=Dc(),t=_0(),a=Pr(),i=Uc(),l=r?r.prototype:void 0,f=l?l.toString:void 0;function v(h){if(typeof h=="string")return h;if(a(h))return t(h,v)+"";if(i(h))return f?f.call(h):"";var p=h+"";return p=="0"&&1/h==-1/0?"-0":p}return zt=v,zt}var Ht,Ef;function tr(){if(Ef)return Ht;Ef=1;var r=Sb();function t(a){return a==null?"":r(a)}return Ht=t,Ht}var Gt,If;function xb(){if(If)return Gt;If=1;function r(t,a,i){var l=-1,f=t.length;a<0&&(a=-a>f?0:f+a),i=i>f?f:i,i<0&&(i+=f),f=a>i?0:i-a>>>0,a>>>=0;for(var v=Array(f);++l<f;)v[l]=t[l+a];return v}return Gt=r,Gt}var Zt,Sf;function Rb(){if(Sf)return Zt;Sf=1;var r=xb();function t(a,i,l){var f=a.length;return l=l===void 0?f:l,!i&&l>=f?a:r(a,i,l)}return Zt=t,Zt}var Yt,xf;function $0(){if(xf)return Yt;xf=1;var r="\\ud800-\\udfff",t="\\u0300-\\u036f",a="\\ufe20-\\ufe2f",i="\\u20d0-\\u20ff",l=t+a+i,f="\\ufe0e\\ufe0f",v="\\u200d",h=RegExp("["+v+r+l+f+"]");function p(R){return h.test(R)}return Yt=p,Yt}var Jt,Rf;function Ob(){if(Rf)return Jt;Rf=1;function r(t){return t.split("")}return Jt=r,Jt}var Kt,Of;function Ab(){if(Of)return Kt;Of=1;var r="\\ud800-\\udfff",t="\\u0300-\\u036f",a="\\ufe20-\\ufe2f",i="\\u20d0-\\u20ff",l=t+a+i,f="\\ufe0e\\ufe0f",v="["+r+"]",h="["+l+"]",p="\\ud83c[\\udffb-\\udfff]",R="(?:"+h+"|"+p+")",S="[^"+r+"]",$="(?:\\ud83c[\\udde6-\\uddff]){2}",E="[\\ud800-\\udbff][\\udc00-\\udfff]",w="\\u200d",C=R+"?",O="["+f+"]?",L="(?:"+w+"(?:"+[S,$,E].join("|")+")"+O+C+")*",A=O+C+L,k="(?:"+[S+h+"?",h,$,E,v].join("|")+")",B=RegExp(p+"(?="+p+")|"+k+A,"g");function N(W){return W.match(B)||[]}return Kt=N,Kt}var Xt,Af;function Mb(){if(Af)return Xt;Af=1;var r=Ob(),t=$0(),a=Ab();function i(l){return t(l)?a(l):r(l)}return Xt=i,Xt}var Qt,Mf;function Cb(){if(Mf)return Qt;Mf=1;var r=Rb(),t=$0(),a=Mb(),i=tr();function l(f){return function(v){v=i(v);var h=t(v)?a(v):void 0,p=h?h[0]:v.charAt(0),R=h?r(h,1).join(""):v.slice(1);return p[f]()+R}}return Qt=l,Qt}var en,Cf;function Lb(){if(Cf)return en;Cf=1;var r=Cb(),t=r("toUpperCase");return en=t,en}var rn,Lf;function kb(){if(Lf)return rn;Lf=1;var r=tr(),t=Lb();function a(i){return t(r(i).toLowerCase())}return rn=a,rn}var tn,kf;function Nb(){if(kf)return tn;kf=1;function r(t,a,i,l){var f=-1,v=t==null?0:t.length;for(l&&v&&(i=t[++f]);++f<v;)i=a(i,t[f],f,t);return i}return tn=r,tn}var nn,Nf;function T0(){if(Nf)return nn;Nf=1;function r(t){return function(a){return t?.[a]}}return nn=r,nn}var an,Ff;function Fb(){if(Ff)return an;Ff=1;var r=T0(),t={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},a=r(t);return an=a,an}var sn,Pf;function Pb(){if(Pf)return sn;Pf=1;var r=Fb(),t=tr(),a=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,i="\\u0300-\\u036f",l="\\ufe20-\\ufe2f",f="\\u20d0-\\u20ff",v=i+l+f,h="["+v+"]",p=RegExp(h,"g");function R(S){return S=t(S),S&&S.replace(a,r).replace(p,"")}return sn=R,sn}var un,Df;function Db(){if(Df)return un;Df=1;var r=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function t(a){return a.match(r)||[]}return un=t,un}var on,Uf;function Ub(){if(Uf)return on;Uf=1;var r=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function t(a){return r.test(a)}return on=t,on}var cn,Bf;function Bb(){if(Bf)return cn;Bf=1;var r="\\ud800-\\udfff",t="\\u0300-\\u036f",a="\\ufe20-\\ufe2f",i="\\u20d0-\\u20ff",l=t+a+i,f="\\u2700-\\u27bf",v="a-z\\xdf-\\xf6\\xf8-\\xff",h="\\xac\\xb1\\xd7\\xf7",p="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",R="\\u2000-\\u206f",S=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",$="A-Z\\xc0-\\xd6\\xd8-\\xde",E="\\ufe0e\\ufe0f",w=h+p+R+S,C="['’]",O="["+w+"]",L="["+l+"]",A="\\d+",k="["+f+"]",B="["+v+"]",N="[^"+r+w+A+f+v+$+"]",W="\\ud83c[\\udffb-\\udfff]",te="(?:"+L+"|"+W+")",G="[^"+r+"]",j="(?:\\ud83c[\\udde6-\\uddff]){2}",Y="[\\ud800-\\udbff][\\udc00-\\udfff]",he="["+$+"]",P="\\u200d",we="(?:"+B+"|"+N+")",ne="(?:"+he+"|"+N+")",pe="(?:"+C+"(?:d|ll|m|re|s|t|ve))?",oe="(?:"+C+"(?:D|LL|M|RE|S|T|VE))?",ke=te+"?",se="["+E+"]?",Ue="(?:"+P+"(?:"+[G,j,Y].join("|")+")"+se+ke+")*",xe="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",$e="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",ie=se+ke+Ue,fe="(?:"+[k,j,Y].join("|")+")"+ie,Be=RegExp([he+"?"+B+"+"+pe+"(?="+[O,he,"$"].join("|")+")",ne+"+"+oe+"(?="+[O,he+we,"$"].join("|")+")",he+"?"+we+"+"+pe,he+"+"+oe,$e,xe,A,fe].join("|"),"g");function Re(Ne){return Ne.match(Be)||[]}return cn=Re,cn}var ln,jf;function jb(){if(jf)return ln;jf=1;var r=Db(),t=Ub(),a=tr(),i=Bb();function l(f,v,h){return f=a(f),v=h?void 0:v,v===void 0?t(f)?i(f):r(f):f.match(v)||[]}return ln=l,ln}var fn,Vf;function E0(){if(Vf)return fn;Vf=1;var r=Nb(),t=Pb(),a=jb(),i="['’]",l=RegExp(i,"g");function f(v){return function(h){return r(a(t(h).replace(l,"")),v,"")}}return fn=f,fn}var hn,Wf;function Vb(){if(Wf)return hn;Wf=1;var r=kb(),t=E0(),a=t(function(i,l,f){return l=l.toLowerCase(),i+(f?r(l):l)});return hn=a,hn}var dn,zf;function Wb(){if(zf)return dn;zf=1;var r=Object.prototype,t=r.hasOwnProperty;function a(i,l){return i!=null&&t.call(i,l)}return dn=a,dn}var mn,Hf;function zb(){if(Hf)return mn;Hf=1;var r=Pr(),t=Uc(),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/;function l(f,v){if(r(f))return!1;var h=typeof f;return h=="number"||h=="symbol"||h=="boolean"||f==null||t(f)?!0:i.test(f)||!a.test(f)||v!=null&&f in Object(v)}return mn=l,mn}var vn,Gf;function st(){if(Gf)return vn;Gf=1;function r(t){var a=typeof t;return t!=null&&(a=="object"||a=="function")}return vn=r,vn}var yn,Zf;function I0(){if(Zf)return yn;Zf=1;var r=pr(),t=st(),a="[object AsyncFunction]",i="[object Function]",l="[object GeneratorFunction]",f="[object Proxy]";function v(h){if(!t(h))return!1;var p=r(h);return p==i||p==l||p==a||p==f}return yn=v,yn}var pn,Yf;function Hb(){if(Yf)return pn;Yf=1;var r=at(),t=r["__core-js_shared__"];return pn=t,pn}var gn,Jf;function Gb(){if(Jf)return gn;Jf=1;var r=Hb(),t=(function(){var i=/[^.]+$/.exec(r&&r.keys&&r.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""})();function a(i){return!!t&&t in i}return gn=a,gn}var bn,Kf;function Zb(){if(Kf)return bn;Kf=1;var r=Function.prototype,t=r.toString;function a(i){if(i!=null){try{return t.call(i)}catch{}try{return i+""}catch{}}return""}return bn=a,bn}var wn,Xf;function Yb(){if(Xf)return wn;Xf=1;var r=I0(),t=Gb(),a=st(),i=Zb(),l=/[\\^$.*+?()[\]{}|]/g,f=/^\[object .+?Constructor\]$/,v=Function.prototype,h=Object.prototype,p=v.toString,R=h.hasOwnProperty,S=RegExp("^"+p.call(R).replace(l,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function $(E){if(!a(E)||t(E))return!1;var w=r(E)?S:f;return w.test(i(E))}return wn=$,wn}var qn,Qf;function Jb(){if(Qf)return qn;Qf=1;function r(t,a){return t?.[a]}return qn=r,qn}var _n,eh;function Bc(){if(eh)return _n;eh=1;var r=Yb(),t=Jb();function a(i,l){var f=t(i,l);return r(f)?f:void 0}return _n=a,_n}var $n,rh;function ut(){if(rh)return $n;rh=1;var r=Bc(),t=r(Object,"create");return $n=t,$n}var Tn,th;function Kb(){if(th)return Tn;th=1;var r=ut();function t(){this.__data__=r?r(null):{},this.size=0}return Tn=t,Tn}var En,nh;function Xb(){if(nh)return En;nh=1;function r(t){var a=this.has(t)&&delete this.__data__[t];return this.size-=a?1:0,a}return En=r,En}var In,ih;function Qb(){if(ih)return In;ih=1;var r=ut(),t="__lodash_hash_undefined__",a=Object.prototype,i=a.hasOwnProperty;function l(f){var v=this.__data__;if(r){var h=v[f];return h===t?void 0:h}return i.call(v,f)?v[f]:void 0}return In=l,In}var Sn,ah;function ew(){if(ah)return Sn;ah=1;var r=ut(),t=Object.prototype,a=t.hasOwnProperty;function i(l){var f=this.__data__;return r?f[l]!==void 0:a.call(f,l)}return Sn=i,Sn}var xn,sh;function rw(){if(sh)return xn;sh=1;var r=ut(),t="__lodash_hash_undefined__";function a(i,l){var f=this.__data__;return this.size+=this.has(i)?0:1,f[i]=r&&l===void 0?t:l,this}return xn=a,xn}var Rn,uh;function tw(){if(uh)return Rn;uh=1;var r=Kb(),t=Xb(),a=Qb(),i=ew(),l=rw();function f(v){var h=-1,p=v==null?0:v.length;for(this.clear();++h<p;){var R=v[h];this.set(R[0],R[1])}}return f.prototype.clear=r,f.prototype.delete=t,f.prototype.get=a,f.prototype.has=i,f.prototype.set=l,Rn=f,Rn}var On,oh;function nw(){if(oh)return On;oh=1;function r(){this.__data__=[],this.size=0}return On=r,On}var An,ch;function ot(){if(ch)return An;ch=1;function r(t,a){return t===a||t!==t&&a!==a}return An=r,An}var Mn,lh;function ct(){if(lh)return Mn;lh=1;var r=ot();function t(a,i){for(var l=a.length;l--;)if(r(a[l][0],i))return l;return-1}return Mn=t,Mn}var Cn,fh;function iw(){if(fh)return Cn;fh=1;var r=ct(),t=Array.prototype,a=t.splice;function i(l){var f=this.__data__,v=r(f,l);if(v<0)return!1;var h=f.length-1;return v==h?f.pop():a.call(f,v,1),--this.size,!0}return Cn=i,Cn}var Ln,hh;function aw(){if(hh)return Ln;hh=1;var r=ct();function t(a){var i=this.__data__,l=r(i,a);return l<0?void 0:i[l][1]}return Ln=t,Ln}var kn,dh;function sw(){if(dh)return kn;dh=1;var r=ct();function t(a){return r(this.__data__,a)>-1}return kn=t,kn}var Nn,mh;function uw(){if(mh)return Nn;mh=1;var r=ct();function t(a,i){var l=this.__data__,f=r(l,a);return f<0?(++this.size,l.push([a,i])):l[f][1]=i,this}return Nn=t,Nn}var Fn,vh;function ow(){if(vh)return Fn;vh=1;var r=nw(),t=iw(),a=aw(),i=sw(),l=uw();function f(v){var h=-1,p=v==null?0:v.length;for(this.clear();++h<p;){var R=v[h];this.set(R[0],R[1])}}return f.prototype.clear=r,f.prototype.delete=t,f.prototype.get=a,f.prototype.has=i,f.prototype.set=l,Fn=f,Fn}var Pn,yh;function cw(){if(yh)return Pn;yh=1;var r=Bc(),t=at(),a=r(t,"Map");return Pn=a,Pn}var Dn,ph;function lw(){if(ph)return Dn;ph=1;var r=tw(),t=ow(),a=cw();function i(){this.size=0,this.__data__={hash:new r,map:new(a||t),string:new r}}return Dn=i,Dn}var Un,gh;function fw(){if(gh)return Un;gh=1;function r(t){var a=typeof t;return a=="string"||a=="number"||a=="symbol"||a=="boolean"?t!=="__proto__":t===null}return Un=r,Un}var Bn,bh;function lt(){if(bh)return Bn;bh=1;var r=fw();function t(a,i){var l=a.__data__;return r(i)?l[typeof i=="string"?"string":"hash"]:l.map}return Bn=t,Bn}var jn,wh;function hw(){if(wh)return jn;wh=1;var r=lt();function t(a){var i=r(this,a).delete(a);return this.size-=i?1:0,i}return jn=t,jn}var Vn,qh;function dw(){if(qh)return Vn;qh=1;var r=lt();function t(a){return r(this,a).get(a)}return Vn=t,Vn}var Wn,_h;function mw(){if(_h)return Wn;_h=1;var r=lt();function t(a){return r(this,a).has(a)}return Wn=t,Wn}var zn,$h;function vw(){if($h)return zn;$h=1;var r=lt();function t(a,i){var l=r(this,a),f=l.size;return l.set(a,i),this.size+=l.size==f?0:1,this}return zn=t,zn}var Hn,Th;function yw(){if(Th)return Hn;Th=1;var r=lw(),t=hw(),a=dw(),i=mw(),l=vw();function f(v){var h=-1,p=v==null?0:v.length;for(this.clear();++h<p;){var R=v[h];this.set(R[0],R[1])}}return f.prototype.clear=r,f.prototype.delete=t,f.prototype.get=a,f.prototype.has=i,f.prototype.set=l,Hn=f,Hn}var Gn,Eh;function pw(){if(Eh)return Gn;Eh=1;var r=yw(),t="Expected a function";function a(i,l){if(typeof i!="function"||l!=null&&typeof l!="function")throw new TypeError(t);var f=function(){var v=arguments,h=l?l.apply(this,v):v[0],p=f.cache;if(p.has(h))return p.get(h);var R=i.apply(this,v);return f.cache=p.set(h,R)||p,R};return f.cache=new(a.Cache||r),f}return a.Cache=r,Gn=a,Gn}var Zn,Ih;function gw(){if(Ih)return Zn;Ih=1;var r=pw(),t=500;function a(i){var l=r(i,function(v){return f.size===t&&f.clear(),v}),f=l.cache;return l}return Zn=a,Zn}var Yn,Sh;function bw(){if(Sh)return Yn;Sh=1;var r=gw(),t=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,i=r(function(l){var f=[];return l.charCodeAt(0)===46&&f.push(""),l.replace(t,function(v,h,p,R){f.push(p?R.replace(a,"$1"):h||v)}),f});return Yn=i,Yn}var Jn,xh;function ww(){if(xh)return Jn;xh=1;var r=Pr(),t=zb(),a=bw(),i=tr();function l(f,v){return r(f)?f:t(f,v)?[f]:a(i(f))}return Jn=l,Jn}var Kn,Rh;function qw(){if(Rh)return Kn;Rh=1;var r=pr(),t=gr(),a="[object Arguments]";function i(l){return t(l)&&r(l)==a}return Kn=i,Kn}var Xn,Oh;function S0(){if(Oh)return Xn;Oh=1;var r=qw(),t=gr(),a=Object.prototype,i=a.hasOwnProperty,l=a.propertyIsEnumerable,f=r((function(){return arguments})())?r:function(v){return t(v)&&i.call(v,"callee")&&!l.call(v,"callee")};return Xn=f,Xn}var Qn,Ah;function jc(){if(Ah)return Qn;Ah=1;var r=9007199254740991,t=/^(?:0|[1-9]\d*)$/;function a(i,l){var f=typeof i;return l=l??r,!!l&&(f=="number"||f!="symbol"&&t.test(i))&&i>-1&&i%1==0&&i<l}return Qn=a,Qn}var ei,Mh;function Vc(){if(Mh)return ei;Mh=1;var r=9007199254740991;function t(a){return typeof a=="number"&&a>-1&&a%1==0&&a<=r}return ei=t,ei}var ri,Ch;function _w(){if(Ch)return ri;Ch=1;var r=Uc();function t(a){if(typeof a=="string"||r(a))return a;var i=a+"";return i=="0"&&1/a==-1/0?"-0":i}return ri=t,ri}var ti,Lh;function $w(){if(Lh)return ti;Lh=1;var r=ww(),t=S0(),a=Pr(),i=jc(),l=Vc(),f=_w();function v(h,p,R){p=r(p,h);for(var S=-1,$=p.length,E=!1;++S<$;){var w=f(p[S]);if(!(E=h!=null&&R(h,w)))break;h=h[w]}return E||++S!=$?E:($=h==null?0:h.length,!!$&&l($)&&i(w,$)&&(a(h)||t(h)))}return ti=v,ti}var ni,kh;function Tw(){if(kh)return ni;kh=1;var r=Wb(),t=$w();function a(i,l){return i!=null&&t(i,l,r)}return ni=a,ni}let nt;const Ew=new Uint8Array(16);function Iw(){if(!nt&&(nt=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!nt))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return nt(Ew)}const ve=[];for(let r=0;r<256;++r)ve.push((r+256).toString(16).slice(1));function Sw(r,t=0){return ve[r[t+0]]+ve[r[t+1]]+ve[r[t+2]]+ve[r[t+3]]+"-"+ve[r[t+4]]+ve[r[t+5]]+"-"+ve[r[t+6]]+ve[r[t+7]]+"-"+ve[r[t+8]]+ve[r[t+9]]+"-"+ve[r[t+10]]+ve[r[t+11]]+ve[r[t+12]]+ve[r[t+13]]+ve[r[t+14]]+ve[r[t+15]]}let Nh,ii,ai=0,si=0;function xw(r,t,a){let i=0;const l=new Array(16);r=r||{};let f=r.node||Nh,v=r.clockseq!==void 0?r.clockseq:ii;if(f==null||v==null){const E=r.random||(r.rng||Iw)();f==null&&(f=Nh=[E[0]|1,E[1],E[2],E[3],E[4],E[5]]),v==null&&(v=ii=(E[6]<<8|E[7])&16383)}let h=r.msecs!==void 0?r.msecs:Date.now(),p=r.nsecs!==void 0?r.nsecs:si+1;const R=h-ai+(p-si)/1e4;if(R<0&&r.clockseq===void 0&&(v=v+1&16383),(R<0||h>ai)&&r.nsecs===void 0&&(p=0),p>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");ai=h,si=p,ii=v,h+=122192928e5;const S=((h&268435455)*1e4+p)%4294967296;l[i++]=S>>>24&255,l[i++]=S>>>16&255,l[i++]=S>>>8&255,l[i++]=S&255;const $=h/4294967296*1e4&268435455;l[i++]=$>>>8&255,l[i++]=$&255,l[i++]=$>>>24&15|16,l[i++]=$>>>16&255,l[i++]=v>>>8|128,l[i++]=v&255;for(let E=0;E<6;++E)l[i+E]=f[E];return t||Sw(l)}function Rw(r,t){const a=(r.stack?.split(/\n/g)||[])[1],[i,...l]=t.stack?.split(/\n/g)||[];return[i,a,...l].join(`
`)}var Ow=Object.defineProperty,Aw=(r,t,a)=>t in r?Ow(r,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[t]=a,Le=(r,t,a)=>Aw(r,typeof t!="symbol"?t+"":t,a);class X extends Error{constructor(t={}){super(),Le(this,"statusCode"),Le(this,"errorType"),Le(this,"level"),Le(this,"id"),Le(this,"context"),Le(this,"help"),Le(this,"errorDetails"),Le(this,"code"),Le(this,"property"),Le(this,"redirect"),Le(this,"hideStack"),this.statusCode=500,this.errorType="InternalServerError",this.level="normal",this.message="The server has encountered an error.",this.id=xw(),this.id=t.id||this.id,this.statusCode=t.statusCode||this.statusCode,this.level=t.level||this.level,this.context=t.context,this.help=t.help,this.errorType=this.name=t.errorType||this.errorType,this.errorDetails=t.errorDetails,this.code=t.code||null,this.property=t.property||null,this.redirect=t.redirect||null,this.message=t.message||this.message,this.hideStack=t.hideStack||!1,t.err&&(typeof t.err=="string"&&(t.err=new Error(t.err)),Object.getOwnPropertyNames(t.err).forEach(a=>{if(["errorType","name","statusCode","message","level"].indexOf(a)===-1){if(a==="code"){this[a]=this[a]||t.err[a];return}if(a==="stack"&&!this.hideStack){this[a]=Rw(this,t.err);return}this[a]=t.err[a]||this[a]}}))}}const ee=(r,t)=>{const a={...t};return Object.keys(r).forEach(i=>{r[i]!==void 0&&(a[i]=r[i])}),a};class yr extends X{constructor(t={}){super(ee(t,{statusCode:500,level:"critical",errorType:"InternalServerError",message:"The server has encountered an error."}))}}class x0 extends X{constructor(t={}){super(ee(t,{statusCode:400,level:"critical",errorType:"IncorrectUsageError",message:"We detected a misuse. Please read the stack trace."}))}}class R0 extends X{constructor(t={}){super(ee(t,{statusCode:404,errorType:"NotFoundError",message:"Resource could not be found.",hideStack:!0}))}}class Wc extends X{constructor(t={}){super(ee(t,{statusCode:400,errorType:"BadRequestError",message:"The request could not be understood."}))}}class O0 extends X{constructor(t={}){super(ee(t,{statusCode:401,errorType:"UnauthorizedError",message:"You are not authorised to make this request."}))}}class zc extends X{constructor(t={}){super(ee(t,{statusCode:403,errorType:"NoPermissionError",message:"You do not have permission to perform this request."}))}}class Hc extends X{constructor(t={}){super(ee(t,{statusCode:422,errorType:"ValidationError",message:"The request failed validation."}))}}class A0 extends X{constructor(t={}){super(ee(t,{statusCode:415,errorType:"UnsupportedMediaTypeError",message:"The media in the request is not supported by the server."}))}}class M0 extends X{constructor(t={}){super(ee(t,{statusCode:429,errorType:"TooManyRequestsError",message:"Server has received too many similar requests in a short space of time."}))}}class Gc extends X{constructor(t={}){super(ee(t,{statusCode:503,errorType:"MaintenanceError",message:"The server is temporarily down for maintenance."}))}}class C0 extends X{constructor(t={}){super(ee(t,{statusCode:405,errorType:"MethodNotAllowedError",message:"Method not allowed for resource."}))}}class L0 extends X{constructor(t={}){super(ee(t,{statusCode:406,errorType:"RequestNotAcceptableError",message:"Request not acceptable for provided Accept-Version header.",hideStack:!0}))}}class k0 extends X{constructor(t={}){super(ee(t,{statusCode:416,errorType:"RangeNotSatisfiableError",message:"Range not satisfiable for provided Range header.",hideStack:!0}))}}class N0 extends X{constructor(t={}){super(ee(t,{statusCode:413,errorType:"RequestEntityTooLargeError",message:"Request was too big for the server to handle."}))}}class F0 extends X{constructor(t={}){super(ee(t,{statusCode:503,errorType:"TokenRevocationError",message:"Token is no longer available."}))}}class P0 extends X{constructor(t={}){super(ee(t,{statusCode:400,errorType:"VersionMismatchError",message:"Requested version does not match server version."}))}}class D0 extends X{constructor(t={}){super(ee(t,{statusCode:500,errorType:"DataExportError",message:"The server encountered an error whilst exporting data."}))}}class U0 extends X{constructor(t={}){super(ee(t,{statusCode:500,errorType:"DataImportError",message:"The server encountered an error whilst importing data."}))}}class B0 extends X{constructor(t={}){super(ee(t,{statusCode:500,errorType:"EmailError",message:"The server encountered an error whilst sending email."}))}}class j0 extends X{constructor(t={}){super(ee(t,{statusCode:422,errorType:"ThemeValidationError",message:"The theme has a validation error.",errorDetails:{}}))}}class V0 extends X{constructor(t={}){super(ee(t,{statusCode:409,errorType:"DisabledFeatureError",message:"Unable to complete the request, this feature is disabled."}))}}class W0 extends X{constructor(t={}){super(ee(t,{statusCode:409,errorType:"UpdateCollisionError",message:"Unable to complete the request, there was a conflict."}))}}class z0 extends X{constructor(t={}){super(ee(t,{errorType:"HostLimitError",hideStack:!0,statusCode:403,message:"Unable to complete the request, this resource is limited."}))}}class H0 extends X{constructor(t={}){super(ee(t,{errorType:"HelperWarning",hideStack:!0,statusCode:400,message:"A theme helper has done something unexpected."}))}}class G0 extends X{constructor(t={}){super(ee(t,{errorType:"PasswordResetRequiredError",statusCode:401,message:"For security, you need to create a new password. An email has been sent to you with instructions!"}))}}class Z0 extends X{constructor(t={}){super(ee(t,{errorType:"UnhandledJobError",message:"Processed job threw an unhandled error",level:"critical"}))}}class Y0 extends X{constructor(t={}){super(ee(t,{errorType:"NoContentError",statusCode:204,hideStack:!0}))}}class J0 extends X{constructor(t={}){super(ee(t,{errorType:"ConflictError",statusCode:409,message:"The server has encountered an conflict."}))}}class K0 extends X{constructor(t={}){super(ee(t,{errorType:"MigrationError",message:"An error has occurred applying a database migration.",level:"critical"}))}}const X0=Object.freeze(Object.defineProperty({__proto__:null,BadRequestError:Wc,ConflictError:J0,DataExportError:D0,DataImportError:U0,DisabledFeatureError:V0,EmailError:B0,HelperWarning:H0,HostLimitError:z0,IncorrectUsageError:x0,InternalServerError:yr,MaintenanceError:Gc,MethodNotAllowedError:C0,MigrationError:K0,NoContentError:Y0,NoPermissionError:zc,NotFoundError:R0,PasswordResetRequiredError:G0,RangeNotSatisfiableError:k0,RequestEntityTooLargeError:N0,RequestNotAcceptableError:L0,ThemeValidationError:j0,TokenRevocationError:F0,TooManyRequestsError:M0,UnauthorizedError:O0,UnhandledJobError:Z0,UnsupportedMediaTypeError:A0,UpdateCollisionError:W0,ValidationError:Hc,VersionMismatchError:P0},Symbol.toStringTag,{value:"Module"}));/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ui,Fh;function Mw(){if(Fh)return ui;Fh=1;function r(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}return ui=r,ui}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oi,Ph;function Cw(){if(Ph)return oi;Ph=1;var r=Mw();return oi=r,oi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ci,Dh;function Lw(){if(Dh)return ci;Dh=1;var r=Cw(),t=r();function a(){return t&&typeof Symbol.toStringTag=="symbol"}return ci=a,ci}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var li,Uh;function ft(){if(Uh)return li;Uh=1;var r=Lw();return li=r,li}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fi,Bh;function Q0(){if(Bh)return fi;Bh=1;var r=Object.prototype.toString;return fi=r,fi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hi,jh;function kw(){if(jh)return hi;jh=1;var r=Q0();function t(a){return r.call(a)}return hi=t,hi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var di,Vh;function Nw(){if(Vh)return di;Vh=1;var r=Object.prototype.hasOwnProperty;function t(a,i){return a==null?!1:r.call(a,i)}return di=t,di}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mi,Wh;function br(){if(Wh)return mi;Wh=1;var r=Nw();return mi=r,mi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vi,zh;function Fw(){if(zh)return vi;zh=1;var r=typeof Symbol=="function"?Symbol:void 0;return vi=r,vi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yi,Hh;function Pw(){if(Hh)return yi;Hh=1;var r=Fw();return yi=r,yi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pi,Gh;function Dw(){if(Gh)return pi;Gh=1;var r=Pw(),t=typeof r=="function"?r.toStringTag:"";return pi=t,pi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gi,Zh;function Uw(){if(Zh)return gi;Zh=1;var r=br(),t=Dw(),a=Q0();function i(l){var f,v,h;if(l==null)return a.call(l);v=l[t],f=r(l,t);try{l[t]=void 0}catch{return a.call(l)}return h=a.call(l),f?l[t]=v:delete l[t],h}return gi=i,gi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bi,Yh;function ye(){if(Yh)return bi;Yh=1;var r=ft(),t=kw(),a=Uw(),i;return r()?i=a:i=t,bi=i,bi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wi,Jh;function Bw(){if(Jh)return wi;Jh=1;var r=ye(),t;function a(i){return r(i)==="[object Array]"}return Array.isArray?t=Array.isArray:t=a,wi=t,wi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qi,Kh;function ht(){if(Kh)return qi;Kh=1;var r=Bw();return qi=r,qi}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _i,Xh;function jw(){if(Xh)return _i;Xh=1;var r=typeof Object.defineProperty=="function"?Object.defineProperty:null;return _i=r,_i}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $i,Qh;function Vw(){if(Qh)return $i;Qh=1;var r=jw();function t(){try{return r({},"x",{}),!0}catch{return!1}}return $i=t,$i}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ti,ed;function Ww(){if(ed)return Ti;ed=1;var r=Object.defineProperty;return Ti=r,Ti}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ei,rd;function e1(){if(rd)return Ei;rd=1;function r(t){return typeof t=="number"}return Ei=r,Ei}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ii,td;function r1(){if(td)return Ii;td=1;function r(i){return i[0]==="-"}function t(i){var l="",f;for(f=0;f<i;f++)l+="0";return l}function a(i,l,f){var v=!1,h=l-i.length;return h<0||(r(i)&&(v=!0,i=i.substr(1)),i=f?i+t(h):t(h)+i,v&&(i="-"+i)),i}return Ii=a,Ii}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Si,nd;function zw(){if(nd)return Si;nd=1;var r=e1(),t=r1(),a=String.prototype.toLowerCase,i=String.prototype.toUpperCase;function l(f){var v,h,p;switch(f.specifier){case"b":v=2;break;case"o":v=8;break;case"x":case"X":v=16;break;case"d":case"i":case"u":default:v=10;break}if(h=f.arg,p=parseInt(h,10),!isFinite(p)){if(!r(h))throw new Error("invalid integer. Value: "+h);p=0}return p<0&&(f.specifier==="u"||v!==10)&&(p=4294967295+p+1),p<0?(h=(-p).toString(v),f.precision&&(h=t(h,f.precision,f.padRight)),h="-"+h):(h=p.toString(v),!p&&!f.precision?h="":f.precision&&(h=t(h,f.precision,f.padRight)),f.sign&&(h=f.sign+h)),v===16&&(f.alternate&&(h="0x"+h),h=f.specifier===i.call(f.specifier)?i.call(h):a.call(h)),v===8&&f.alternate&&h.charAt(0)!=="0"&&(h="0"+h),h}return Si=l,Si}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xi,id;function Hw(){if(id)return xi;id=1;function r(t){return typeof t=="string"}return xi=r,xi}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ri,ad;function Gw(){if(ad)return Ri;ad=1;var r=e1(),t=Math.abs,a=String.prototype.toLowerCase,i=String.prototype.toUpperCase,l=String.prototype.replace,f=/e\+(\d)$/,v=/e-(\d)$/,h=/^(\d+)$/,p=/^(\d+)e/,R=/\.0$/,S=/\.0*e/,$=/(\..*[^0])0*e/;function E(w){var C,O,L=parseFloat(w.arg);if(!isFinite(L)){if(!r(w.arg))throw new Error("invalid floating-point number. Value: "+O);L=w.arg}switch(w.specifier){case"e":case"E":O=L.toExponential(w.precision);break;case"f":case"F":O=L.toFixed(w.precision);break;case"g":case"G":t(L)<1e-4?(C=w.precision,C>0&&(C-=1),O=L.toExponential(C)):O=L.toPrecision(w.precision),w.alternate||(O=l.call(O,$,"$1e"),O=l.call(O,S,"e"),O=l.call(O,R,""));break;default:throw new Error("invalid double notation. Value: "+w.specifier)}return O=l.call(O,f,"e+0$1"),O=l.call(O,v,"e-0$1"),w.alternate&&(O=l.call(O,h,"$1."),O=l.call(O,p,"$1.e")),L>=0&&w.sign&&(O=w.sign+O),O=w.specifier===i.call(w.specifier)?i.call(O):a.call(O),O}return Ri=E,Ri}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Oi,sd;function Zw(){if(sd)return Oi;sd=1;function r(a){var i="",l;for(l=0;l<a;l++)i+=" ";return i}function t(a,i,l){var f=i-a.length;return f<0||(a=l?a+r(f):r(f)+a),a}return Oi=t,Oi}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ai,ud;function Yw(){if(ud)return Ai;ud=1;var r=zw(),t=Hw(),a=Gw(),i=Zw(),l=r1(),f=String.fromCharCode,v=Array.isArray;function h(S){return S!==S}function p(S){var $={};return $.specifier=S.specifier,$.precision=S.precision===void 0?1:S.precision,$.width=S.width,$.flags=S.flags||"",$.mapping=S.mapping,$}function R(S){var $,E,w,C,O,L,A,k,B;if(!v(S))throw new TypeError("invalid argument. First argument must be an array. Value: `"+S+"`.");for(L="",A=1,k=0;k<S.length;k++)if(w=S[k],t(w))L+=w;else{if($=w.precision!==void 0,w=p(w),!w.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+k+"`. Value: `"+w+"`.");for(w.mapping&&(A=w.mapping),E=w.flags,B=0;B<E.length;B++)switch(C=E.charAt(B),C){case" ":w.sign=" ";break;case"+":w.sign="+";break;case"-":w.padRight=!0,w.padZeros=!1;break;case"0":w.padZeros=E.indexOf("-")<0;break;case"#":w.alternate=!0;break;default:throw new Error("invalid flag: "+C)}if(w.width==="*"){if(w.width=parseInt(arguments[A],10),A+=1,h(w.width))throw new TypeError("the argument for * width at position "+A+" is not a number. Value: `"+w.width+"`.");w.width<0&&(w.padRight=!0,w.width=-w.width)}if($&&w.precision==="*"){if(w.precision=parseInt(arguments[A],10),A+=1,h(w.precision))throw new TypeError("the argument for * precision at position "+A+" is not a number. Value: `"+w.precision+"`.");w.precision<0&&(w.precision=1,$=!1)}switch(w.arg=arguments[A],w.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":$&&(w.padZeros=!1),w.arg=r(w);break;case"s":w.maxWidth=$?w.precision:-1,w.arg=String(w.arg);break;case"c":if(!h(w.arg)){if(O=parseInt(w.arg,10),O<0||O>127)throw new Error("invalid character code. Value: "+w.arg);w.arg=h(O)?String(w.arg):f(O)}break;case"e":case"E":case"f":case"F":case"g":case"G":$||(w.precision=6),w.arg=a(w);break;default:throw new Error("invalid specifier: "+w.specifier)}w.maxWidth>=0&&w.arg.length>w.maxWidth&&(w.arg=w.arg.substring(0,w.maxWidth)),w.padZeros?w.arg=l(w.arg,w.width||w.precision,w.padRight):w.width&&(w.arg=i(w.arg,w.width,w.padRight)),L+=w.arg||"",A+=1}return L}return Ai=R,Ai}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mi,od;function Jw(){if(od)return Mi;od=1;var r=Yw();return Mi=r,Mi}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ci,cd;function Kw(){if(cd)return Ci;cd=1;var r=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function t(i){var l={mapping:i[1]?parseInt(i[1],10):void 0,flags:i[2],width:i[3],precision:i[5],specifier:i[6]};return i[4]==="."&&i[5]===void 0&&(l.precision="1"),l}function a(i){var l,f,v,h;for(f=[],h=0,v=r.exec(i);v;)l=i.slice(h,r.lastIndex-v[0].length),l.length&&f.push(l),f.push(t(v)),h=r.lastIndex,v=r.exec(i);return l=i.slice(h),l.length&&f.push(l),f}return Ci=a,Ci}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Li,ld;function Xw(){if(ld)return Li;ld=1;var r=Kw();return Li=r,Li}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ki,fd;function Qw(){if(fd)return ki;fd=1;function r(t){return typeof t=="string"}return ki=r,ki}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ni,hd;function eq(){if(hd)return Ni;hd=1;var r=Jw(),t=Xw(),a=Qw();function i(l){var f,v;if(!a(l))throw new TypeError(i("invalid argument. First argument must be a string. Value: `%s`.",l));for(f=[t(l)],v=1;v<arguments.length;v++)f.push(arguments[v]);return r.apply(null,f)}return Ni=i,Ni}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fi,dd;function Ze(){if(dd)return Fi;dd=1;var r=eq();return Fi=r,Fi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pi,md;function rq(){if(md)return Pi;md=1;var r=Ze(),t=Object.prototype,a=t.toString,i=t.__defineGetter__,l=t.__defineSetter__,f=t.__lookupGetter__,v=t.__lookupSetter__;function h(p,R,S){var $,E,w,C;if(typeof p!="object"||p===null||a.call(p)==="[object Array]")throw new TypeError(r("invalid argument. First argument must be an object. Value: `%s`.",p));if(typeof S!="object"||S===null||a.call(S)==="[object Array]")throw new TypeError(r("invalid argument. Property descriptor must be an object. Value: `%s`.",S));if(E="value"in S,E&&(f.call(p,R)||v.call(p,R)?($=p.__proto__,p.__proto__=t,delete p[R],p[R]=S.value,p.__proto__=$):p[R]=S.value),w="get"in S,C="set"in S,E&&(w||C))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return w&&i&&i.call(p,R,S.get),C&&l&&l.call(p,R,S.set),p}return Pi=h,Pi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Di,vd;function t1(){if(vd)return Di;vd=1;var r=Vw(),t=Ww(),a=rq(),i;return r()?i=t:i=a,Di=i,Di}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ui,yd;function tq(){if(yd)return Ui;yd=1;var r=t1();function t(a,i,l){r(a,i,{configurable:!1,enumerable:!1,writable:!1,value:l})}return Ui=t,Ui}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bi,pd;function Ve(){if(pd)return Bi;pd=1;var r=tq();return Bi=r,Bi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ji,gd;function n1(){if(gd)return ji;gd=1;function r(t){return typeof t=="number"}return ji=r,ji}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vi,bd;function nq(){return bd||(bd=1,Vi=Number),Vi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wi,wd;function Zc(){if(wd)return Wi;wd=1;var r=nq();return Wi=r,Wi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zi,qd;function iq(){if(qd)return zi;qd=1;var r=Zc(),t=r.prototype.toString;return zi=t,zi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hi,_d;function aq(){if(_d)return Hi;_d=1;var r=iq();function t(a){try{return r.call(a),!0}catch{return!1}}return Hi=t,Hi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gi,$d;function i1(){if($d)return Gi;$d=1;var r=ft(),t=ye(),a=Zc(),i=aq(),l=r();function f(v){return typeof v=="object"?v instanceof a?!0:l?i(v):t(v)==="[object Number]":!1}return Gi=f,Gi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zi,Td;function sq(){if(Td)return Zi;Td=1;var r=n1(),t=i1();function a(i){return r(i)||t(i)}return Zi=a,Zi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yi,Ed;function dt(){if(Ed)return Yi;Ed=1;var r=Ve(),t=sq(),a=n1(),i=i1();return r(t,"isPrimitive",a),r(t,"isObject",i),Yi=t,Yi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ji,Id;function Yc(){if(Id)return Ji;Id=1;var r=Number.POSITIVE_INFINITY;return Ji=r,Ji}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ki,Sd;function uq(){if(Sd)return Ki;Sd=1;var r=Zc(),t=r.NEGATIVE_INFINITY;return Ki=t,Ki}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xi,xd;function oq(){if(xd)return Xi;xd=1;var r=Math.floor;return Xi=r,Xi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qi,Rd;function cq(){if(Rd)return Qi;Rd=1;var r=oq();return Qi=r,Qi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ea,Od;function lq(){if(Od)return ea;Od=1;var r=cq();function t(a){return r(a)===a}return ea=t,ea}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ra,Ad;function Jc(){if(Ad)return ra;Ad=1;var r=lq();return ra=r,ra}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ta,Md;function a1(){if(Md)return ta;Md=1;var r=Yc(),t=uq(),a=Jc();function i(l){return l<r&&l>t&&a(l)}return ta=i,ta}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var na,Cd;function s1(){if(Cd)return na;Cd=1;var r=dt().isPrimitive,t=a1();function a(i){return r(i)&&t(i)}return na=a,na}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ia,Ld;function u1(){if(Ld)return ia;Ld=1;var r=dt().isObject,t=a1();function a(i){return r(i)&&t(i.valueOf())}return ia=a,ia}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var aa,kd;function fq(){if(kd)return aa;kd=1;var r=s1(),t=u1();function a(i){return r(i)||t(i)}return aa=a,aa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sa,Nd;function mt(){if(Nd)return sa;Nd=1;var r=Ve(),t=fq(),a=s1(),i=u1();return r(t,"isPrimitive",a),r(t,"isObject",i),sa=t,sa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ua,Fd;function o1(){if(Fd)return ua;Fd=1;var r=mt().isPrimitive;function t(a){return r(a)&&a>=0}return ua=t,ua}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oa,Pd;function c1(){if(Pd)return oa;Pd=1;var r=mt().isObject;function t(a){return r(a)&&a.valueOf()>=0}return oa=t,oa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ca,Dd;function hq(){if(Dd)return ca;Dd=1;var r=o1(),t=c1();function a(i){return r(i)||t(i)}return ca=a,ca}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var la,Ud;function dq(){if(Ud)return la;Ud=1;var r=Ve(),t=hq(),a=o1(),i=c1();return r(t,"isPrimitive",a),r(t,"isObject",i),la=t,la}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fa,Bd;function mq(){if(Bd)return fa;Bd=1;var r=ht(),t=Ze();function a(i){if(typeof i!="function")throw new TypeError(t("invalid argument. Must provide a function. Value: `%s`.",i));return l;function l(f){var v,h;if(!r(f)||(v=f.length,v===0))return!1;for(h=0;h<v;h++)if(i(f[h])===!1)return!1;return!0}}return fa=a,fa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ha,jd;function vq(){if(jd)return ha;jd=1;var r=mq();return ha=r,ha}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var da,Vd;function yq(){if(Vd)return da;Vd=1;function r(t){return t!==null&&typeof t=="object"}return da=r,da}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ma,Wd;function l1(){if(Wd)return ma;Wd=1;var r=Ve(),t=vq(),a=yq(),i=t(a);return r(a,"isObjectLikeArray",i),ma=a,ma}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var va,zd;function pq(){if(zd)return va;zd=1;var r=l1();function t(a){return r(a)&&(a._isBuffer||a.constructor&&typeof a.constructor.isBuffer=="function"&&a.constructor.isBuffer(a))}return va=t,va}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ya,Hd;function Dr(){if(Hd)return ya;Hd=1;var r=pq();return ya=r,ya}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pa,Gd;function gq(){if(Gd)return pa;Gd=1;var r=Object;return pa=r,pa}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ga,Zd;function Kc(){if(Zd)return ga;Zd=1;var r=gq();return ga=r,ga}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ba,Yd;function bq(){if(Yd)return ba;Yd=1;var r=/./;return ba=r,ba}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wa,Jd;function f1(){if(Jd)return wa;Jd=1;function r(t){return typeof t=="boolean"}return wa=r,wa}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qa,Kd;function wq(){if(Kd)return qa;Kd=1;var r=Boolean;return qa=r,qa}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _a,Xd;function qq(){if(Xd)return _a;Xd=1;var r=wq();return _a=r,_a}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $a,Qd;function _q(){if(Qd)return $a;Qd=1;var r=Boolean.prototype.toString;return $a=r,$a}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ta,em;function $q(){if(em)return Ta;em=1;var r=_q();function t(a){try{return r.call(a),!0}catch{return!1}}return Ta=t,Ta}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ea,rm;function h1(){if(rm)return Ea;rm=1;var r=ft(),t=ye(),a=qq(),i=$q(),l=r();function f(v){return typeof v=="object"?v instanceof a?!0:l?i(v):t(v)==="[object Boolean]":!1}return Ea=f,Ea}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ia,tm;function Tq(){if(tm)return Ia;tm=1;var r=f1(),t=h1();function a(i){return r(i)||t(i)}return Ia=a,Ia}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sa,nm;function Eq(){if(nm)return Sa;nm=1;var r=Ve(),t=Tq(),a=f1(),i=h1();return r(t,"isPrimitive",a),r(t,"isObject",i),Sa=t,Sa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xa,im;function Iq(){if(im)return xa;im=1;function r(){return new Function("return this;")()}return xa=r,xa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ra,am;function Sq(){if(am)return Ra;am=1;var r=typeof self=="object"?self:null;return Ra=r,Ra}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Oa,sm;function xq(){if(sm)return Oa;sm=1;var r=typeof window=="object"?window:null;return Oa=r,Oa}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Aa,um;function Rq(){if(um)return Aa;um=1;var r=typeof globalThis=="object"?globalThis:null;return Aa=r,Aa}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ma,om;function Oq(){if(om)return Ma;om=1;var r=Eq().isPrimitive,t=Ze(),a=Iq(),i=Sq(),l=xq(),f=Rq();function v(h){if(arguments.length){if(!r(h))throw new TypeError(t("invalid argument. Must provide a boolean. Value: `%s`.",h));if(h)return a()}if(f)return f;if(i)return i;if(l)return l;throw new Error("unexpected error. Unable to resolve global object.")}return Ma=v,Ma}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ca,cm;function Aq(){if(cm)return Ca;cm=1;var r=Oq(),t=r(),a=t.document&&t.document.childNodes;return Ca=a,Ca}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var La,lm;function Mq(){if(lm)return La;lm=1;var r=Int8Array;return La=r,La}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ka,fm;function Cq(){if(fm)return ka;fm=1;var r=bq(),t=Aq(),a=Mq();function i(){return typeof r=="function"||typeof a=="object"||typeof t=="function"}return ka=i,ka}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Na,hm;function d1(){if(hm)return Na;hm=1;function r(){return/^\s*function\s*([^(]*)/i}return Na=r,Na}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fa,dm;function Lq(){if(dm)return Fa;dm=1;var r=d1(),t=r();return Fa=t,Fa}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pa,mm;function kq(){if(mm)return Pa;mm=1;var r=Ve(),t=d1(),a=Lq();return r(t,"REGEXP",a),Pa=t,Pa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Da,vm;function Nq(){if(vm)return Da;vm=1;var r=ye(),t=kq().REGEXP,a=Dr();function i(l){var f,v,h;if(v=r(l).slice(8,-1),(v==="Object"||v==="Error")&&l.constructor){if(h=l.constructor,typeof h.name=="string")return h.name;if(f=t.exec(h.toString()),f)return f[1]}return a(l)?"Buffer":v}return Da=i,Da}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ua,ym;function m1(){if(ym)return Ua;ym=1;var r=Nq();return Ua=r,Ua}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ba,pm;function Fq(){if(pm)return Ba;pm=1;var r=m1();function t(a){var i;return a===null?"null":(i=typeof a,i==="object"?r(a).toLowerCase():i)}return Ba=t,Ba}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ja,gm;function Pq(){if(gm)return ja;gm=1;var r=m1();function t(a){return r(a).toLowerCase()}return ja=t,ja}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Va,bm;function Xc(){if(bm)return Va;bm=1;var r=Cq(),t=Fq(),a=Pq(),i=r()?a:t;return Va=i,Va}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wa,wm;function Dq(){if(wm)return Wa;wm=1;var r=Xc();function t(a){return r(a)==="function"}return Wa=t,Wa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var za,qm;function v1(){if(qm)return za;qm=1;var r=Dq();return za=r,za}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ha,_m;function Uq(){if(_m)return Ha;_m=1;var r=Object.getPrototypeOf;return Ha=r,Ha}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ga,$m;function Bq(){if($m)return Ga;$m=1;function r(t){return t.__proto__}return Ga=r,Ga}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Za,Tm;function jq(){if(Tm)return Za;Tm=1;var r=ye(),t=Bq();function a(i){var l=t(i);return l||l===null?l:r(i.constructor)==="[object Function]"?i.constructor.prototype:i instanceof Object?Object.prototype:null}return Za=a,Za}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ya,Em;function Vq(){if(Em)return Ya;Em=1;var r=v1(),t=Uq(),a=jq(),i;return r(Object.getPrototypeOf)?i=t:i=a,Ya=i,Ya}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ja,Im;function Wq(){if(Im)return Ja;Im=1;var r=Kc(),t=Vq();function a(i){return i==null?null:(i=r(i),t(i))}return Ja=a,Ja}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ka,Sm;function y1(){if(Sm)return Ka;Sm=1;var r=Wq();return Ka=r,Ka}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xa,xm;function zq(){if(xm)return Xa;xm=1;var r=y1(),t=ye();function a(i){if(typeof i!="object"||i===null)return!1;if(i instanceof Error)return!0;for(;i;){if(t(i)==="[object Error]")return!0;i=r(i)}return!1}return Xa=a,Xa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qa,Rm;function Hq(){if(Rm)return Qa;Rm=1;var r=zq();return Qa=r,Qa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var es,Om;function p1(){if(Om)return es;Om=1;function r(t){return typeof t=="string"}return es=r,es}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rs,Am;function Gq(){if(Am)return rs;Am=1;var r=String.prototype.valueOf;return rs=r,rs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ts,Mm;function Zq(){if(Mm)return ts;Mm=1;var r=Gq();function t(a){try{return r.call(a),!0}catch{return!1}}return ts=t,ts}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ns,Cm;function g1(){if(Cm)return ns;Cm=1;var r=ft(),t=ye(),a=Zq(),i=r();function l(f){return typeof f=="object"?f instanceof String?!0:i?a(f):t(f)==="[object String]":!1}return ns=l,ns}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var is,Lm;function Yq(){if(Lm)return is;Lm=1;var r=p1(),t=g1();function a(i){return r(i)||t(i)}return is=a,is}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var as,km;function Qc(){if(km)return as;km=1;var r=Ve(),t=Yq(),a=p1(),i=g1();return r(t,"isPrimitive",a),r(t,"isObject",i),as=t,as}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ss,Nm;function b1(){if(Nm)return ss;Nm=1;function r(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}return ss=r,ss}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var us,Fm;function Jq(){if(Fm)return us;Fm=1;var r=b1(),t=r();return us=t,us}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var os,Pm;function Kq(){if(Pm)return os;Pm=1;var r=Ve(),t=b1(),a=Jq();return r(t,"REGEXP",a),os=t,os}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cs,Dm;function Xq(){if(Dm)return cs;Dm=1;var r=Qc().isPrimitive,t=Kq(),a=Ze();function i(l){if(!r(l))throw new TypeError(a("invalid argument. Must provide a regular expression string. Value: `%s`.",l));return l=t().exec(l),l?new RegExp(l[1],l[2]):null}return cs=i,cs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ls,Um;function Qq(){if(Um)return ls;Um=1;var r=Xq();return ls=r,ls}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fs,Bm;function e_(){if(Bm)return fs;Bm=1;function r(t){return t!==t}return fs=r,fs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hs,jm;function w1(){if(jm)return hs;jm=1;var r=e_();return hs=r,hs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ds,Vm;function q1(){if(Vm)return ds;Vm=1;var r=dt().isPrimitive,t=w1();function a(i){return r(i)&&t(i)}return ds=a,ds}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ms,Wm;function _1(){if(Wm)return ms;Wm=1;var r=dt().isObject,t=w1();function a(i){return r(i)&&t(i.valueOf())}return ms=a,ms}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vs,zm;function r_(){if(zm)return vs;zm=1;var r=q1(),t=_1();function a(i){return r(i)||t(i)}return vs=a,vs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ys,Hm;function $1(){if(Hm)return ys;Hm=1;var r=Ve(),t=r_(),a=q1(),i=_1();return r(t,"isPrimitive",a),r(t,"isObject",i),ys=t,ys}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ps,Gm;function t_(){if(Gm)return ps;Gm=1;var r=9007199254740991;return ps=r,ps}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gs,Zm;function n_(){if(Zm)return gs;Zm=1;var r=Jc(),t=t_();function a(i){return typeof i=="object"&&i!==null&&typeof i.length=="number"&&r(i.length)&&i.length>=0&&i.length<=t}return gs=a,gs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bs,Ym;function i_(){if(Ym)return bs;Ym=1;var r=n_();return bs=r,bs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ws,Jm;function a_(){if(Jm)return ws;Jm=1;var r=$1(),t=i_(),a=Qc().isPrimitive,i=mt().isPrimitive,l=Ze();function f(v,h,p){var R,S;if(!t(v)&&!a(v))throw new TypeError(l("invalid argument. First argument must be an array-like object. Value: `%s`.",v));if(R=v.length,R===0)return-1;if(arguments.length===3){if(!i(p))throw new TypeError(l("invalid argument. Third argument must be an integer. Value: `%s`.",p));if(p>=0){if(p>=R)return-1;S=p}else S=R+p,S<0&&(S=0)}else S=0;if(r(h)){for(;S<R;S++)if(r(v[S]))return S}else for(;S<R;S++)if(v[S]===h)return S;return-1}return ws=f,ws}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qs,Km;function T1(){if(Km)return qs;Km=1;var r=a_();return qs=r,qs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _s,Xm;function el(){if(Xm)return _s;Xm=1;function r(t){return Object.keys(Object(t))}return _s=r,_s}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $s,Qm;function s_(){if(Qm)return $s;Qm=1;var r=el();function t(){return(r(arguments)||"").length!==2}function a(){return t(1,2)}return $s=a,$s}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ts,ev;function u_(){if(ev)return Ts;ev=1;var r=typeof Object.keys<"u";return Ts=r,Ts}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Es,rv;function E1(){if(rv)return Es;rv=1;var r=ye();function t(a){return r(a)==="[object Arguments]"}return Es=t,Es}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Is,tv;function o_(){if(tv)return Is;tv=1;var r=E1(),t;function a(){return r(arguments)}return t=a(),Is=t,Is}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ss,nv;function I1(){if(nv)return Ss;nv=1;var r=Object.prototype.propertyIsEnumerable;return Ss=r,Ss}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xs,iv;function c_(){if(iv)return xs;iv=1;var r=I1(),t;function a(){return!r.call("beep","0")}return t=a(),xs=t,xs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rs,av;function l_(){if(av)return Rs;av=1;var r=Qc(),t=$1().isPrimitive,a=mt().isPrimitive,i=I1(),l=c_();function f(v,h){var p;return v==null?!1:(p=i.call(v,h),!p&&l&&r(v)?(h=+h,!t(h)&&a(h)&&h>=0&&h<v.length):p)}return Rs=f,Rs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Os,sv;function rl(){if(sv)return Os;sv=1;var r=l_();return Os=r,Os}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var As,uv;function S1(){if(uv)return As;uv=1;var r=4294967295;return As=r,As}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ms,ov;function f_(){if(ov)return Ms;ov=1;var r=br(),t=rl(),a=ht(),i=Jc(),l=S1();function f(v){return v!==null&&typeof v=="object"&&!a(v)&&typeof v.length=="number"&&i(v.length)&&v.length>=0&&v.length<=l&&r(v,"callee")&&!t(v,"callee")}return Ms=f,Ms}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cs,cv;function x1(){if(cv)return Cs;cv=1;var r=o_(),t=E1(),a=f_(),i;return r?i=t:i=a,Cs=i,Cs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ls,lv;function h_(){if(lv)return Ls;lv=1;var r=x1(),t=el(),a=Array.prototype.slice;function i(l){return r(l)?t(a.call(l)):t(l)}return Ls=i,Ls}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ks,fv;function d_(){if(fv)return ks;fv=1;function r(){}return ks=r,ks}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ns,hv;function m_(){if(hv)return Ns;hv=1;var r=d_();return Ns=r,Ns}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fs,dv;function v_(){if(dv)return Fs;dv=1;var r=rl(),t=m_(),a=r(t,"prototype");return Fs=a,Fs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ps,mv;function y_(){if(mv)return Ps;mv=1;var r=rl(),t={toString:null},a=!r(t,"toString");return Ps=a,Ps}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ds,vv;function R1(){if(vv)return Ds;vv=1;function r(t){return t.constructor&&t.constructor.prototype===t}return Ds=r,Ds}const p_=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"];/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Us,yv;function g_(){if(yv)return Us;yv=1;var r=typeof window>"u"?void 0:window;return Us=r,Us}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bs,pv;function b_(){if(pv)return Bs;pv=1;var r=br(),t=T1(),a=Xc(),i=R1(),l=p_,f=g_(),v;function h(){var p;if(a(f)==="undefined")return!1;for(p in f)try{t(l,p)===-1&&r(f,p)&&f[p]!==null&&a(f[p])==="object"&&i(f[p])}catch{return!0}return!1}return v=h(),Bs=v,Bs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var js,gv;function w_(){if(gv)return js;gv=1;var r=typeof window<"u";return js=r,js}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vs,bv;function q_(){if(bv)return Vs;bv=1;var r=b_(),t=R1(),a=w_();function i(l){if(a===!1&&!r)return t(l);try{return t(l)}catch{return!1}}return Vs=i,Vs}const __=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ws,wv;function $_(){if(wv)return Ws;wv=1;var r=l1(),t=br(),a=x1(),i=v_(),l=y_(),f=q_(),v=__;function h(p){var R,S,$,E,w,C,O;if(E=[],a(p)){for(O=0;O<p.length;O++)E.push(O.toString());return E}if(typeof p=="string"){if(p.length>0&&!t(p,"0"))for(O=0;O<p.length;O++)E.push(O.toString())}else{if($=typeof p=="function",$===!1&&!r(p))return E;S=i&&$}for(w in p)!(S&&w==="prototype")&&t(p,w)&&E.push(String(w));if(l)for(R=f(p),O=0;O<v.length;O++)C=v[O],!(R&&C==="constructor")&&t(p,C)&&E.push(String(C));return E}return Ws=h,Ws}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zs,qv;function T_(){if(qv)return zs;qv=1;var r=s_(),t=u_(),a=el(),i=h_(),l=$_(),f;return t?r()?f=i:f=a:f=l,zs=f,zs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hs,_v;function O1(){if(_v)return Hs;_v=1;var r=T_();return Hs=r,Hs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gs,$v;function E_(){if($v)return Gs;$v=1;var r=typeof Object.getOwnPropertyNames<"u";return Gs=r,Gs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zs,Tv;function I_(){if(Tv)return Zs;Tv=1;var r=Kc(),t=r.getOwnPropertyNames;function a(i){return t(r(i))}return Zs=a,Zs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ys,Ev;function S_(){if(Ev)return Ys;Ev=1;var r=Kc(),t=O1();function a(i){return t(r(i))}return Ys=a,Ys}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Js,Iv;function x_(){if(Iv)return Js;Iv=1;var r=E_(),t=I_(),a=S_(),i;return r?i=t:i=a,Js=i,Js}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ks,Sv;function R_(){if(Sv)return Ks;Sv=1;var r=typeof Object.getOwnPropertyDescriptor<"u";return Ks=r,Ks}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xs,xv;function O_(){if(xv)return Xs;xv=1;var r=Object.getOwnPropertyDescriptor;function t(a,i){var l;return a==null?null:(l=r(a,i),l===void 0?null:l)}return Xs=t,Xs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qs,Rv;function A_(){if(Rv)return Qs;Rv=1;var r=br();function t(a,i){return r(a,i)?{configurable:!0,enumerable:!0,writable:!0,value:a[i]}:null}return Qs=t,Qs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eu,Ov;function M_(){if(Ov)return eu;Ov=1;var r=R_(),t=O_(),a=A_(),i;return r?i=t:i=a,eu=i,eu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ru,Av;function C_(){if(Av)return ru;Av=1;var r=typeof Buffer=="function"?Buffer:null;return ru=r,ru}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tu,Mv;function L_(){if(Mv)return tu;Mv=1;var r=Dr(),t=C_();function a(){var i,l;if(typeof t!="function")return!1;try{typeof t.from=="function"?l=t.from([1,2,3,4]):l=new t([1,2,3,4]),i=r(l)&&l[0]===1&&l[1]===2&&l[2]===3&&l[3]===4}catch{i=!1}return i}return tu=a,tu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nu,Cv;function k_(){if(Cv)return nu;Cv=1;var r=L_();return nu=r,nu}var iu={},kr={},Lv;function N_(){if(Lv)return kr;Lv=1,kr.byteLength=h,kr.toByteArray=R,kr.fromByteArray=E;for(var r=[],t=[],a=typeof Uint8Array<"u"?Uint8Array:Array,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",l=0,f=i.length;l<f;++l)r[l]=i[l],t[i.charCodeAt(l)]=l;t[45]=62,t[95]=63;function v(w){var C=w.length;if(C%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var O=w.indexOf("=");O===-1&&(O=C);var L=O===C?0:4-O%4;return[O,L]}function h(w){var C=v(w),O=C[0],L=C[1];return(O+L)*3/4-L}function p(w,C,O){return(C+O)*3/4-O}function R(w){var C,O=v(w),L=O[0],A=O[1],k=new a(p(w,L,A)),B=0,N=A>0?L-4:L,W;for(W=0;W<N;W+=4)C=t[w.charCodeAt(W)]<<18|t[w.charCodeAt(W+1)]<<12|t[w.charCodeAt(W+2)]<<6|t[w.charCodeAt(W+3)],k[B++]=C>>16&255,k[B++]=C>>8&255,k[B++]=C&255;return A===2&&(C=t[w.charCodeAt(W)]<<2|t[w.charCodeAt(W+1)]>>4,k[B++]=C&255),A===1&&(C=t[w.charCodeAt(W)]<<10|t[w.charCodeAt(W+1)]<<4|t[w.charCodeAt(W+2)]>>2,k[B++]=C>>8&255,k[B++]=C&255),k}function S(w){return r[w>>18&63]+r[w>>12&63]+r[w>>6&63]+r[w&63]}function $(w,C,O){for(var L,A=[],k=C;k<O;k+=3)L=(w[k]<<16&16711680)+(w[k+1]<<8&65280)+(w[k+2]&255),A.push(S(L));return A.join("")}function E(w){for(var C,O=w.length,L=O%3,A=[],k=16383,B=0,N=O-L;B<N;B+=k)A.push($(w,B,B+k>N?N:B+k));return L===1?(C=w[O-1],A.push(r[C>>2]+r[C<<4&63]+"==")):L===2&&(C=(w[O-2]<<8)+w[O-1],A.push(r[C>>10]+r[C>>4&63]+r[C<<2&63]+"=")),A.join("")}return kr}var it={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */var kv;function F_(){return kv||(kv=1,it.read=function(r,t,a,i,l){var f,v,h=l*8-i-1,p=(1<<h)-1,R=p>>1,S=-7,$=a?l-1:0,E=a?-1:1,w=r[t+$];for($+=E,f=w&(1<<-S)-1,w>>=-S,S+=h;S>0;f=f*256+r[t+$],$+=E,S-=8);for(v=f&(1<<-S)-1,f>>=-S,S+=i;S>0;v=v*256+r[t+$],$+=E,S-=8);if(f===0)f=1-R;else{if(f===p)return v?NaN:(w?-1:1)*(1/0);v=v+Math.pow(2,i),f=f-R}return(w?-1:1)*v*Math.pow(2,f-i)},it.write=function(r,t,a,i,l,f){var v,h,p,R=f*8-l-1,S=(1<<R)-1,$=S>>1,E=l===23?Math.pow(2,-24)-Math.pow(2,-77):0,w=i?0:f-1,C=i?1:-1,O=t<0||t===0&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(h=isNaN(t)?1:0,v=S):(v=Math.floor(Math.log(t)/Math.LN2),t*(p=Math.pow(2,-v))<1&&(v--,p*=2),v+$>=1?t+=E/p:t+=E*Math.pow(2,1-$),t*p>=2&&(v++,p/=2),v+$>=S?(h=0,v=S):v+$>=1?(h=(t*p-1)*Math.pow(2,l),v=v+$):(h=t*Math.pow(2,$-1)*Math.pow(2,l),v=0));l>=8;r[a+w]=h&255,w+=C,h/=256,l-=8);for(v=v<<l|h,R+=l;R>0;r[a+w]=v&255,w+=C,v/=256,R-=8);r[a+w-C]|=O*128}),it}/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var Nv;function P_(){return Nv||(Nv=1,(function(r){const t=N_(),a=F_(),i=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;r.Buffer=h,r.SlowBuffer=k,r.INSPECT_MAX_BYTES=50;const l=2147483647;r.kMaxLength=l,h.TYPED_ARRAY_SUPPORT=f(),!h.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function f(){try{const m=new Uint8Array(1),s={foo:function(){return 42}};return Object.setPrototypeOf(s,Uint8Array.prototype),Object.setPrototypeOf(m,s),m.foo()===42}catch{return!1}}Object.defineProperty(h.prototype,"parent",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.buffer}}),Object.defineProperty(h.prototype,"offset",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.byteOffset}});function v(m){if(m>l)throw new RangeError('The value "'+m+'" is invalid for option "size"');const s=new Uint8Array(m);return Object.setPrototypeOf(s,h.prototype),s}function h(m,s,o){if(typeof m=="number"){if(typeof s=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return $(m)}return p(m,s,o)}h.poolSize=8192;function p(m,s,o){if(typeof m=="string")return E(m,s);if(ArrayBuffer.isView(m))return C(m);if(m==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof m);if(Te(m,ArrayBuffer)||m&&Te(m.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(Te(m,SharedArrayBuffer)||m&&Te(m.buffer,SharedArrayBuffer)))return O(m,s,o);if(typeof m=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const y=m.valueOf&&m.valueOf();if(y!=null&&y!==m)return h.from(y,s,o);const b=L(m);if(b)return b;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof m[Symbol.toPrimitive]=="function")return h.from(m[Symbol.toPrimitive]("string"),s,o);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof m)}h.from=function(m,s,o){return p(m,s,o)},Object.setPrototypeOf(h.prototype,Uint8Array.prototype),Object.setPrototypeOf(h,Uint8Array);function R(m){if(typeof m!="number")throw new TypeError('"size" argument must be of type number');if(m<0)throw new RangeError('The value "'+m+'" is invalid for option "size"')}function S(m,s,o){return R(m),m<=0?v(m):s!==void 0?typeof o=="string"?v(m).fill(s,o):v(m).fill(s):v(m)}h.alloc=function(m,s,o){return S(m,s,o)};function $(m){return R(m),v(m<0?0:A(m)|0)}h.allocUnsafe=function(m){return $(m)},h.allocUnsafeSlow=function(m){return $(m)};function E(m,s){if((typeof s!="string"||s==="")&&(s="utf8"),!h.isEncoding(s))throw new TypeError("Unknown encoding: "+s);const o=B(m,s)|0;let y=v(o);const b=y.write(m,s);return b!==o&&(y=y.slice(0,b)),y}function w(m){const s=m.length<0?0:A(m.length)|0,o=v(s);for(let y=0;y<s;y+=1)o[y]=m[y]&255;return o}function C(m){if(Te(m,Uint8Array)){const s=new Uint8Array(m);return O(s.buffer,s.byteOffset,s.byteLength)}return w(m)}function O(m,s,o){if(s<0||m.byteLength<s)throw new RangeError('"offset" is outside of buffer bounds');if(m.byteLength<s+(o||0))throw new RangeError('"length" is outside of buffer bounds');let y;return s===void 0&&o===void 0?y=new Uint8Array(m):o===void 0?y=new Uint8Array(m,s):y=new Uint8Array(m,s,o),Object.setPrototypeOf(y,h.prototype),y}function L(m){if(h.isBuffer(m)){const s=A(m.length)|0,o=v(s);return o.length===0||m.copy(o,0,0,s),o}if(m.length!==void 0)return typeof m.length!="number"||_r(m.length)?v(0):w(m);if(m.type==="Buffer"&&Array.isArray(m.data))return w(m.data)}function A(m){if(m>=l)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+l.toString(16)+" bytes");return m|0}function k(m){return+m!=m&&(m=0),h.alloc(+m)}h.isBuffer=function(s){return s!=null&&s._isBuffer===!0&&s!==h.prototype},h.compare=function(s,o){if(Te(s,Uint8Array)&&(s=h.from(s,s.offset,s.byteLength)),Te(o,Uint8Array)&&(o=h.from(o,o.offset,o.byteLength)),!h.isBuffer(s)||!h.isBuffer(o))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(s===o)return 0;let y=s.length,b=o.length;for(let I=0,x=Math.min(y,b);I<x;++I)if(s[I]!==o[I]){y=s[I],b=o[I];break}return y<b?-1:b<y?1:0},h.isEncoding=function(s){switch(String(s).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},h.concat=function(s,o){if(!Array.isArray(s))throw new TypeError('"list" argument must be an Array of Buffers');if(s.length===0)return h.alloc(0);let y;if(o===void 0)for(o=0,y=0;y<s.length;++y)o+=s[y].length;const b=h.allocUnsafe(o);let I=0;for(y=0;y<s.length;++y){let x=s[y];if(Te(x,Uint8Array))I+x.length>b.length?(h.isBuffer(x)||(x=h.from(x)),x.copy(b,I)):Uint8Array.prototype.set.call(b,x,I);else if(h.isBuffer(x))x.copy(b,I);else throw new TypeError('"list" argument must be an Array of Buffers');I+=x.length}return b};function B(m,s){if(h.isBuffer(m))return m.length;if(ArrayBuffer.isView(m)||Te(m,ArrayBuffer))return m.byteLength;if(typeof m!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof m);const o=m.length,y=arguments.length>2&&arguments[2]===!0;if(!y&&o===0)return 0;let b=!1;for(;;)switch(s){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":return Xe(m).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o*2;case"hex":return o>>>1;case"base64":return jr(m).length;default:if(b)return y?-1:Xe(m).length;s=(""+s).toLowerCase(),b=!0}}h.byteLength=B;function N(m,s,o){let y=!1;if((s===void 0||s<0)&&(s=0),s>this.length||((o===void 0||o>this.length)&&(o=this.length),o<=0)||(o>>>=0,s>>>=0,o<=s))return"";for(m||(m="utf8");;)switch(m){case"hex":return xe(this,s,o);case"utf8":case"utf-8":return pe(this,s,o);case"ascii":return se(this,s,o);case"latin1":case"binary":return Ue(this,s,o);case"base64":return ne(this,s,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return $e(this,s,o);default:if(y)throw new TypeError("Unknown encoding: "+m);m=(m+"").toLowerCase(),y=!0}}h.prototype._isBuffer=!0;function W(m,s,o){const y=m[s];m[s]=m[o],m[o]=y}h.prototype.swap16=function(){const s=this.length;if(s%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let o=0;o<s;o+=2)W(this,o,o+1);return this},h.prototype.swap32=function(){const s=this.length;if(s%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let o=0;o<s;o+=4)W(this,o,o+3),W(this,o+1,o+2);return this},h.prototype.swap64=function(){const s=this.length;if(s%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let o=0;o<s;o+=8)W(this,o,o+7),W(this,o+1,o+6),W(this,o+2,o+5),W(this,o+3,o+4);return this},h.prototype.toString=function(){const s=this.length;return s===0?"":arguments.length===0?pe(this,0,s):N.apply(this,arguments)},h.prototype.toLocaleString=h.prototype.toString,h.prototype.equals=function(s){if(!h.isBuffer(s))throw new TypeError("Argument must be a Buffer");return this===s?!0:h.compare(this,s)===0},h.prototype.inspect=function(){let s="";const o=r.INSPECT_MAX_BYTES;return s=this.toString("hex",0,o).replace(/(.{2})/g,"$1 ").trim(),this.length>o&&(s+=" ... "),"<Buffer "+s+">"},i&&(h.prototype[i]=h.prototype.inspect),h.prototype.compare=function(s,o,y,b,I){if(Te(s,Uint8Array)&&(s=h.from(s,s.offset,s.byteLength)),!h.isBuffer(s))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof s);if(o===void 0&&(o=0),y===void 0&&(y=s?s.length:0),b===void 0&&(b=0),I===void 0&&(I=this.length),o<0||y>s.length||b<0||I>this.length)throw new RangeError("out of range index");if(b>=I&&o>=y)return 0;if(b>=I)return-1;if(o>=y)return 1;if(o>>>=0,y>>>=0,b>>>=0,I>>>=0,this===s)return 0;let x=I-b,H=y-o;const J=Math.min(x,H),re=this.slice(b,I),ue=s.slice(o,y);for(let Q=0;Q<J;++Q)if(re[Q]!==ue[Q]){x=re[Q],H=ue[Q];break}return x<H?-1:H<x?1:0};function te(m,s,o,y,b){if(m.length===0)return-1;if(typeof o=="string"?(y=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,_r(o)&&(o=b?0:m.length-1),o<0&&(o=m.length+o),o>=m.length){if(b)return-1;o=m.length-1}else if(o<0)if(b)o=0;else return-1;if(typeof s=="string"&&(s=h.from(s,y)),h.isBuffer(s))return s.length===0?-1:G(m,s,o,y,b);if(typeof s=="number")return s=s&255,typeof Uint8Array.prototype.indexOf=="function"?b?Uint8Array.prototype.indexOf.call(m,s,o):Uint8Array.prototype.lastIndexOf.call(m,s,o):G(m,[s],o,y,b);throw new TypeError("val must be string, number or Buffer")}function G(m,s,o,y,b){let I=1,x=m.length,H=s.length;if(y!==void 0&&(y=String(y).toLowerCase(),y==="ucs2"||y==="ucs-2"||y==="utf16le"||y==="utf-16le")){if(m.length<2||s.length<2)return-1;I=2,x/=2,H/=2,o/=2}function J(ue,Q){return I===1?ue[Q]:ue.readUInt16BE(Q*I)}let re;if(b){let ue=-1;for(re=o;re<x;re++)if(J(m,re)===J(s,ue===-1?0:re-ue)){if(ue===-1&&(ue=re),re-ue+1===H)return ue*I}else ue!==-1&&(re-=re-ue),ue=-1}else for(o+H>x&&(o=x-H),re=o;re>=0;re--){let ue=!0;for(let Q=0;Q<H;Q++)if(J(m,re+Q)!==J(s,Q)){ue=!1;break}if(ue)return re}return-1}h.prototype.includes=function(s,o,y){return this.indexOf(s,o,y)!==-1},h.prototype.indexOf=function(s,o,y){return te(this,s,o,y,!0)},h.prototype.lastIndexOf=function(s,o,y){return te(this,s,o,y,!1)};function j(m,s,o,y){o=Number(o)||0;const b=m.length-o;y?(y=Number(y),y>b&&(y=b)):y=b;const I=s.length;y>I/2&&(y=I/2);let x;for(x=0;x<y;++x){const H=parseInt(s.substr(x*2,2),16);if(_r(H))return x;m[o+x]=H}return x}function Y(m,s,o,y){return ir(Xe(s,m.length-o),m,o,y)}function he(m,s,o,y){return ir(Br(s),m,o,y)}function P(m,s,o,y){return ir(jr(s),m,o,y)}function we(m,s,o,y){return ir(qr(s,m.length-o),m,o,y)}h.prototype.write=function(s,o,y,b){if(o===void 0)b="utf8",y=this.length,o=0;else if(y===void 0&&typeof o=="string")b=o,y=this.length,o=0;else if(isFinite(o))o=o>>>0,isFinite(y)?(y=y>>>0,b===void 0&&(b="utf8")):(b=y,y=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const I=this.length-o;if((y===void 0||y>I)&&(y=I),s.length>0&&(y<0||o<0)||o>this.length)throw new RangeError("Attempt to write outside buffer bounds");b||(b="utf8");let x=!1;for(;;)switch(b){case"hex":return j(this,s,o,y);case"utf8":case"utf-8":return Y(this,s,o,y);case"ascii":case"latin1":case"binary":return he(this,s,o,y);case"base64":return P(this,s,o,y);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return we(this,s,o,y);default:if(x)throw new TypeError("Unknown encoding: "+b);b=(""+b).toLowerCase(),x=!0}},h.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function ne(m,s,o){return s===0&&o===m.length?t.fromByteArray(m):t.fromByteArray(m.slice(s,o))}function pe(m,s,o){o=Math.min(m.length,o);const y=[];let b=s;for(;b<o;){const I=m[b];let x=null,H=I>239?4:I>223?3:I>191?2:1;if(b+H<=o){let J,re,ue,Q;switch(H){case 1:I<128&&(x=I);break;case 2:J=m[b+1],(J&192)===128&&(Q=(I&31)<<6|J&63,Q>127&&(x=Q));break;case 3:J=m[b+1],re=m[b+2],(J&192)===128&&(re&192)===128&&(Q=(I&15)<<12|(J&63)<<6|re&63,Q>2047&&(Q<55296||Q>57343)&&(x=Q));break;case 4:J=m[b+1],re=m[b+2],ue=m[b+3],(J&192)===128&&(re&192)===128&&(ue&192)===128&&(Q=(I&15)<<18|(J&63)<<12|(re&63)<<6|ue&63,Q>65535&&Q<1114112&&(x=Q))}}x===null?(x=65533,H=1):x>65535&&(x-=65536,y.push(x>>>10&1023|55296),x=56320|x&1023),y.push(x),b+=H}return ke(y)}const oe=4096;function ke(m){const s=m.length;if(s<=oe)return String.fromCharCode.apply(String,m);let o="",y=0;for(;y<s;)o+=String.fromCharCode.apply(String,m.slice(y,y+=oe));return o}function se(m,s,o){let y="";o=Math.min(m.length,o);for(let b=s;b<o;++b)y+=String.fromCharCode(m[b]&127);return y}function Ue(m,s,o){let y="";o=Math.min(m.length,o);for(let b=s;b<o;++b)y+=String.fromCharCode(m[b]);return y}function xe(m,s,o){const y=m.length;(!s||s<0)&&(s=0),(!o||o<0||o>y)&&(o=y);let b="";for(let I=s;I<o;++I)b+=yt[m[I]];return b}function $e(m,s,o){const y=m.slice(s,o);let b="";for(let I=0;I<y.length-1;I+=2)b+=String.fromCharCode(y[I]+y[I+1]*256);return b}h.prototype.slice=function(s,o){const y=this.length;s=~~s,o=o===void 0?y:~~o,s<0?(s+=y,s<0&&(s=0)):s>y&&(s=y),o<0?(o+=y,o<0&&(o=0)):o>y&&(o=y),o<s&&(o=s);const b=this.subarray(s,o);return Object.setPrototypeOf(b,h.prototype),b};function ie(m,s,o){if(m%1!==0||m<0)throw new RangeError("offset is not uint");if(m+s>o)throw new RangeError("Trying to access beyond buffer length")}h.prototype.readUintLE=h.prototype.readUIntLE=function(s,o,y){s=s>>>0,o=o>>>0,y||ie(s,o,this.length);let b=this[s],I=1,x=0;for(;++x<o&&(I*=256);)b+=this[s+x]*I;return b},h.prototype.readUintBE=h.prototype.readUIntBE=function(s,o,y){s=s>>>0,o=o>>>0,y||ie(s,o,this.length);let b=this[s+--o],I=1;for(;o>0&&(I*=256);)b+=this[s+--o]*I;return b},h.prototype.readUint8=h.prototype.readUInt8=function(s,o){return s=s>>>0,o||ie(s,1,this.length),this[s]},h.prototype.readUint16LE=h.prototype.readUInt16LE=function(s,o){return s=s>>>0,o||ie(s,2,this.length),this[s]|this[s+1]<<8},h.prototype.readUint16BE=h.prototype.readUInt16BE=function(s,o){return s=s>>>0,o||ie(s,2,this.length),this[s]<<8|this[s+1]},h.prototype.readUint32LE=h.prototype.readUInt32LE=function(s,o){return s=s>>>0,o||ie(s,4,this.length),(this[s]|this[s+1]<<8|this[s+2]<<16)+this[s+3]*16777216},h.prototype.readUint32BE=h.prototype.readUInt32BE=function(s,o){return s=s>>>0,o||ie(s,4,this.length),this[s]*16777216+(this[s+1]<<16|this[s+2]<<8|this[s+3])},h.prototype.readBigUInt64LE=_e(function(s){s=s>>>0,Fe(s,"offset");const o=this[s],y=this[s+7];(o===void 0||y===void 0)&&Je(s,this.length-8);const b=o+this[++s]*2**8+this[++s]*2**16+this[++s]*2**24,I=this[++s]+this[++s]*2**8+this[++s]*2**16+y*2**24;return BigInt(b)+(BigInt(I)<<BigInt(32))}),h.prototype.readBigUInt64BE=_e(function(s){s=s>>>0,Fe(s,"offset");const o=this[s],y=this[s+7];(o===void 0||y===void 0)&&Je(s,this.length-8);const b=o*2**24+this[++s]*2**16+this[++s]*2**8+this[++s],I=this[++s]*2**24+this[++s]*2**16+this[++s]*2**8+y;return(BigInt(b)<<BigInt(32))+BigInt(I)}),h.prototype.readIntLE=function(s,o,y){s=s>>>0,o=o>>>0,y||ie(s,o,this.length);let b=this[s],I=1,x=0;for(;++x<o&&(I*=256);)b+=this[s+x]*I;return I*=128,b>=I&&(b-=Math.pow(2,8*o)),b},h.prototype.readIntBE=function(s,o,y){s=s>>>0,o=o>>>0,y||ie(s,o,this.length);let b=o,I=1,x=this[s+--b];for(;b>0&&(I*=256);)x+=this[s+--b]*I;return I*=128,x>=I&&(x-=Math.pow(2,8*o)),x},h.prototype.readInt8=function(s,o){return s=s>>>0,o||ie(s,1,this.length),this[s]&128?(255-this[s]+1)*-1:this[s]},h.prototype.readInt16LE=function(s,o){s=s>>>0,o||ie(s,2,this.length);const y=this[s]|this[s+1]<<8;return y&32768?y|4294901760:y},h.prototype.readInt16BE=function(s,o){s=s>>>0,o||ie(s,2,this.length);const y=this[s+1]|this[s]<<8;return y&32768?y|4294901760:y},h.prototype.readInt32LE=function(s,o){return s=s>>>0,o||ie(s,4,this.length),this[s]|this[s+1]<<8|this[s+2]<<16|this[s+3]<<24},h.prototype.readInt32BE=function(s,o){return s=s>>>0,o||ie(s,4,this.length),this[s]<<24|this[s+1]<<16|this[s+2]<<8|this[s+3]},h.prototype.readBigInt64LE=_e(function(s){s=s>>>0,Fe(s,"offset");const o=this[s],y=this[s+7];(o===void 0||y===void 0)&&Je(s,this.length-8);const b=this[s+4]+this[s+5]*2**8+this[s+6]*2**16+(y<<24);return(BigInt(b)<<BigInt(32))+BigInt(o+this[++s]*2**8+this[++s]*2**16+this[++s]*2**24)}),h.prototype.readBigInt64BE=_e(function(s){s=s>>>0,Fe(s,"offset");const o=this[s],y=this[s+7];(o===void 0||y===void 0)&&Je(s,this.length-8);const b=(o<<24)+this[++s]*2**16+this[++s]*2**8+this[++s];return(BigInt(b)<<BigInt(32))+BigInt(this[++s]*2**24+this[++s]*2**16+this[++s]*2**8+y)}),h.prototype.readFloatLE=function(s,o){return s=s>>>0,o||ie(s,4,this.length),a.read(this,s,!0,23,4)},h.prototype.readFloatBE=function(s,o){return s=s>>>0,o||ie(s,4,this.length),a.read(this,s,!1,23,4)},h.prototype.readDoubleLE=function(s,o){return s=s>>>0,o||ie(s,8,this.length),a.read(this,s,!0,52,8)},h.prototype.readDoubleBE=function(s,o){return s=s>>>0,o||ie(s,8,this.length),a.read(this,s,!1,52,8)};function fe(m,s,o,y,b,I){if(!h.isBuffer(m))throw new TypeError('"buffer" argument must be a Buffer instance');if(s>b||s<I)throw new RangeError('"value" argument is out of bounds');if(o+y>m.length)throw new RangeError("Index out of range")}h.prototype.writeUintLE=h.prototype.writeUIntLE=function(s,o,y,b){if(s=+s,o=o>>>0,y=y>>>0,!b){const H=Math.pow(2,8*y)-1;fe(this,s,o,y,H,0)}let I=1,x=0;for(this[o]=s&255;++x<y&&(I*=256);)this[o+x]=s/I&255;return o+y},h.prototype.writeUintBE=h.prototype.writeUIntBE=function(s,o,y,b){if(s=+s,o=o>>>0,y=y>>>0,!b){const H=Math.pow(2,8*y)-1;fe(this,s,o,y,H,0)}let I=y-1,x=1;for(this[o+I]=s&255;--I>=0&&(x*=256);)this[o+I]=s/x&255;return o+y},h.prototype.writeUint8=h.prototype.writeUInt8=function(s,o,y){return s=+s,o=o>>>0,y||fe(this,s,o,1,255,0),this[o]=s&255,o+1},h.prototype.writeUint16LE=h.prototype.writeUInt16LE=function(s,o,y){return s=+s,o=o>>>0,y||fe(this,s,o,2,65535,0),this[o]=s&255,this[o+1]=s>>>8,o+2},h.prototype.writeUint16BE=h.prototype.writeUInt16BE=function(s,o,y){return s=+s,o=o>>>0,y||fe(this,s,o,2,65535,0),this[o]=s>>>8,this[o+1]=s&255,o+2},h.prototype.writeUint32LE=h.prototype.writeUInt32LE=function(s,o,y){return s=+s,o=o>>>0,y||fe(this,s,o,4,4294967295,0),this[o+3]=s>>>24,this[o+2]=s>>>16,this[o+1]=s>>>8,this[o]=s&255,o+4},h.prototype.writeUint32BE=h.prototype.writeUInt32BE=function(s,o,y){return s=+s,o=o>>>0,y||fe(this,s,o,4,4294967295,0),this[o]=s>>>24,this[o+1]=s>>>16,this[o+2]=s>>>8,this[o+3]=s&255,o+4};function Be(m,s,o,y,b){Ur(s,y,b,m,o,7);let I=Number(s&BigInt(4294967295));m[o++]=I,I=I>>8,m[o++]=I,I=I>>8,m[o++]=I,I=I>>8,m[o++]=I;let x=Number(s>>BigInt(32)&BigInt(4294967295));return m[o++]=x,x=x>>8,m[o++]=x,x=x>>8,m[o++]=x,x=x>>8,m[o++]=x,o}function Re(m,s,o,y,b){Ur(s,y,b,m,o,7);let I=Number(s&BigInt(4294967295));m[o+7]=I,I=I>>8,m[o+6]=I,I=I>>8,m[o+5]=I,I=I>>8,m[o+4]=I;let x=Number(s>>BigInt(32)&BigInt(4294967295));return m[o+3]=x,x=x>>8,m[o+2]=x,x=x>>8,m[o+1]=x,x=x>>8,m[o]=x,o+8}h.prototype.writeBigUInt64LE=_e(function(s,o=0){return Be(this,s,o,BigInt(0),BigInt("0xffffffffffffffff"))}),h.prototype.writeBigUInt64BE=_e(function(s,o=0){return Re(this,s,o,BigInt(0),BigInt("0xffffffffffffffff"))}),h.prototype.writeIntLE=function(s,o,y,b){if(s=+s,o=o>>>0,!b){const J=Math.pow(2,8*y-1);fe(this,s,o,y,J-1,-J)}let I=0,x=1,H=0;for(this[o]=s&255;++I<y&&(x*=256);)s<0&&H===0&&this[o+I-1]!==0&&(H=1),this[o+I]=(s/x>>0)-H&255;return o+y},h.prototype.writeIntBE=function(s,o,y,b){if(s=+s,o=o>>>0,!b){const J=Math.pow(2,8*y-1);fe(this,s,o,y,J-1,-J)}let I=y-1,x=1,H=0;for(this[o+I]=s&255;--I>=0&&(x*=256);)s<0&&H===0&&this[o+I+1]!==0&&(H=1),this[o+I]=(s/x>>0)-H&255;return o+y},h.prototype.writeInt8=function(s,o,y){return s=+s,o=o>>>0,y||fe(this,s,o,1,127,-128),s<0&&(s=255+s+1),this[o]=s&255,o+1},h.prototype.writeInt16LE=function(s,o,y){return s=+s,o=o>>>0,y||fe(this,s,o,2,32767,-32768),this[o]=s&255,this[o+1]=s>>>8,o+2},h.prototype.writeInt16BE=function(s,o,y){return s=+s,o=o>>>0,y||fe(this,s,o,2,32767,-32768),this[o]=s>>>8,this[o+1]=s&255,o+2},h.prototype.writeInt32LE=function(s,o,y){return s=+s,o=o>>>0,y||fe(this,s,o,4,2147483647,-2147483648),this[o]=s&255,this[o+1]=s>>>8,this[o+2]=s>>>16,this[o+3]=s>>>24,o+4},h.prototype.writeInt32BE=function(s,o,y){return s=+s,o=o>>>0,y||fe(this,s,o,4,2147483647,-2147483648),s<0&&(s=4294967295+s+1),this[o]=s>>>24,this[o+1]=s>>>16,this[o+2]=s>>>8,this[o+3]=s&255,o+4},h.prototype.writeBigInt64LE=_e(function(s,o=0){return Be(this,s,o,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),h.prototype.writeBigInt64BE=_e(function(s,o=0){return Re(this,s,o,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function Ne(m,s,o,y,b,I){if(o+y>m.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function ge(m,s,o,y,b){return s=+s,o=o>>>0,b||Ne(m,s,o,4),a.write(m,s,o,y,23,4),o+4}h.prototype.writeFloatLE=function(s,o,y){return ge(this,s,o,!0,y)},h.prototype.writeFloatBE=function(s,o,y){return ge(this,s,o,!1,y)};function We(m,s,o,y,b){return s=+s,o=o>>>0,b||Ne(m,s,o,8),a.write(m,s,o,y,52,8),o+8}h.prototype.writeDoubleLE=function(s,o,y){return We(this,s,o,!0,y)},h.prototype.writeDoubleBE=function(s,o,y){return We(this,s,o,!1,y)},h.prototype.copy=function(s,o,y,b){if(!h.isBuffer(s))throw new TypeError("argument should be a Buffer");if(y||(y=0),!b&&b!==0&&(b=this.length),o>=s.length&&(o=s.length),o||(o=0),b>0&&b<y&&(b=y),b===y||s.length===0||this.length===0)return 0;if(o<0)throw new RangeError("targetStart out of bounds");if(y<0||y>=this.length)throw new RangeError("Index out of range");if(b<0)throw new RangeError("sourceEnd out of bounds");b>this.length&&(b=this.length),s.length-o<b-y&&(b=s.length-o+y);const I=b-y;return this===s&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(o,y,b):Uint8Array.prototype.set.call(s,this.subarray(y,b),o),I},h.prototype.fill=function(s,o,y,b){if(typeof s=="string"){if(typeof o=="string"?(b=o,o=0,y=this.length):typeof y=="string"&&(b=y,y=this.length),b!==void 0&&typeof b!="string")throw new TypeError("encoding must be a string");if(typeof b=="string"&&!h.isEncoding(b))throw new TypeError("Unknown encoding: "+b);if(s.length===1){const x=s.charCodeAt(0);(b==="utf8"&&x<128||b==="latin1")&&(s=x)}}else typeof s=="number"?s=s&255:typeof s=="boolean"&&(s=Number(s));if(o<0||this.length<o||this.length<y)throw new RangeError("Out of range index");if(y<=o)return this;o=o>>>0,y=y===void 0?this.length:y>>>0,s||(s=0);let I;if(typeof s=="number")for(I=o;I<y;++I)this[I]=s;else{const x=h.isBuffer(s)?s:h.from(s,b),H=x.length;if(H===0)throw new TypeError('The value "'+s+'" is invalid for argument "value"');for(I=0;I<y-o;++I)this[I+o]=x[I%H]}return this};const ze={};function Ye(m,s,o){ze[m]=class extends o{constructor(){super(),Object.defineProperty(this,"message",{value:s.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${m}]`,this.stack,delete this.name}get code(){return m}set code(b){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:b,writable:!0})}toString(){return`${this.name} [${m}]: ${this.message}`}}}Ye("ERR_BUFFER_OUT_OF_BOUNDS",function(m){return m?`${m} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),Ye("ERR_INVALID_ARG_TYPE",function(m,s){return`The "${m}" argument must be of type number. Received type ${typeof s}`},TypeError),Ye("ERR_OUT_OF_RANGE",function(m,s,o){let y=`The value of "${m}" is out of range.`,b=o;return Number.isInteger(o)&&Math.abs(o)>2**32?b=nr(String(o)):typeof o=="bigint"&&(b=String(o),(o>BigInt(2)**BigInt(32)||o<-(BigInt(2)**BigInt(32)))&&(b=nr(b)),b+="n"),y+=` It must be ${s}. Received ${b}`,y},RangeError);function nr(m){let s="",o=m.length;const y=m[0]==="-"?1:0;for(;o>=y+4;o-=3)s=`_${m.slice(o-3,o)}${s}`;return`${m.slice(0,o)}${s}`}function wr(m,s,o){Fe(s,"offset"),(m[s]===void 0||m[s+o]===void 0)&&Je(s,m.length-(o+1))}function Ur(m,s,o,y,b,I){if(m>o||m<s){const x=typeof s=="bigint"?"n":"";let H;throw s===0||s===BigInt(0)?H=`>= 0${x} and < 2${x} ** ${(I+1)*8}${x}`:H=`>= -(2${x} ** ${(I+1)*8-1}${x}) and < 2 ** ${(I+1)*8-1}${x}`,new ze.ERR_OUT_OF_RANGE("value",H,m)}wr(y,b,I)}function Fe(m,s){if(typeof m!="number")throw new ze.ERR_INVALID_ARG_TYPE(s,"number",m)}function Je(m,s,o){throw Math.floor(m)!==m?(Fe(m,o),new ze.ERR_OUT_OF_RANGE("offset","an integer",m)):s<0?new ze.ERR_BUFFER_OUT_OF_BOUNDS:new ze.ERR_OUT_OF_RANGE("offset",`>= 0 and <= ${s}`,m)}const Ke=/[^+/0-9A-Za-z-_]/g;function vt(m){if(m=m.split("=")[0],m=m.trim().replace(Ke,""),m.length<2)return"";for(;m.length%4!==0;)m=m+"=";return m}function Xe(m,s){s=s||1/0;let o;const y=m.length;let b=null;const I=[];for(let x=0;x<y;++x){if(o=m.charCodeAt(x),o>55295&&o<57344){if(!b){if(o>56319){(s-=3)>-1&&I.push(239,191,189);continue}else if(x+1===y){(s-=3)>-1&&I.push(239,191,189);continue}b=o;continue}if(o<56320){(s-=3)>-1&&I.push(239,191,189),b=o;continue}o=(b-55296<<10|o-56320)+65536}else b&&(s-=3)>-1&&I.push(239,191,189);if(b=null,o<128){if((s-=1)<0)break;I.push(o)}else if(o<2048){if((s-=2)<0)break;I.push(o>>6|192,o&63|128)}else if(o<65536){if((s-=3)<0)break;I.push(o>>12|224,o>>6&63|128,o&63|128)}else if(o<1114112){if((s-=4)<0)break;I.push(o>>18|240,o>>12&63|128,o>>6&63|128,o&63|128)}else throw new Error("Invalid code point")}return I}function Br(m){const s=[];for(let o=0;o<m.length;++o)s.push(m.charCodeAt(o)&255);return s}function qr(m,s){let o,y,b;const I=[];for(let x=0;x<m.length&&!((s-=2)<0);++x)o=m.charCodeAt(x),y=o>>8,b=o%256,I.push(b),I.push(y);return I}function jr(m){return t.toByteArray(vt(m))}function ir(m,s,o,y){let b;for(b=0;b<y&&!(b+o>=s.length||b>=m.length);++b)s[b+o]=m[b];return b}function Te(m,s){return m instanceof s||m!=null&&m.constructor!=null&&m.constructor.name!=null&&m.constructor.name===s.name}function _r(m){return m!==m}const yt=(function(){const m="0123456789abcdef",s=new Array(256);for(let o=0;o<16;++o){const y=o*16;for(let b=0;b<16;++b)s[y+b]=m[o]+m[b]}return s})();function _e(m){return typeof BigInt>"u"?pt:m}function pt(){throw new Error("BigInt not supported")}})(iu)),iu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var au,Fv;function D_(){if(Fv)return au;Fv=1;var r=P_().Buffer;return au=r,au}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var su,Pv;function U_(){if(Pv)return su;Pv=1;function r(){throw new Error("not implemented")}return su=r,su}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uu,Dv;function tl(){if(Dv)return uu;Dv=1;var r=k_(),t=D_(),a=U_(),i;return r()?i=t:i=a,uu=i,uu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ou,Uv;function B_(){if(Uv)return ou;Uv=1;var r=v1(),t=tl(),a=r(t.from);return ou=a,ou}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cu,Bv;function j_(){if(Bv)return cu;Bv=1;var r=Dr(),t=Ze(),a=tl();function i(l){if(!r(l))throw new TypeError(t("invalid argument. Must provide a Buffer. Value: `%s`.",l));return a.from(l)}return cu=i,cu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lu,jv;function V_(){if(jv)return lu;jv=1;var r=Dr(),t=Ze(),a=tl();function i(l){if(!r(l))throw new TypeError(t("invalid argument. Must provide a Buffer. Value: `%s`.",l));return new a(l)}return lu=i,lu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fu,Vv;function W_(){if(Vv)return fu;Vv=1;var r=B_(),t=j_(),a=V_(),i;return r?i=t:i=a,fu=i,fu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hu,Wv;function z_(){if(Wv)return hu;Wv=1;var r=ye(),t=typeof Int8Array=="function";function a(i){return t&&i instanceof Int8Array||r(i)==="[object Int8Array]"}return hu=a,hu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var du,zv;function H_(){if(zv)return du;zv=1;var r=z_();return du=r,du}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mu,Hv;function G_(){if(Hv)return mu;Hv=1;var r=127;return mu=r,mu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vu,Gv;function Z_(){if(Gv)return vu;Gv=1;var r=-128;return vu=r,vu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yu,Zv;function Y_(){if(Zv)return yu;Zv=1;var r=typeof Int8Array=="function"?Int8Array:null;return yu=r,yu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pu,Yv;function J_(){if(Yv)return pu;Yv=1;var r=H_(),t=G_(),a=Z_(),i=Y_();function l(){var f,v;if(typeof i!="function")return!1;try{v=new i([1,3.14,-3.14,t+1]),f=r(v)&&v[0]===1&&v[1]===3&&v[2]===-3&&v[3]===a}catch{f=!1}return f}return pu=l,pu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gu,Jv;function K_(){if(Jv)return gu;Jv=1;var r=J_();return gu=r,gu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bu,Kv;function X_(){if(Kv)return bu;Kv=1;var r=typeof Int8Array=="function"?Int8Array:void 0;return bu=r,bu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wu,Xv;function Q_(){if(Xv)return wu;Xv=1;function r(){throw new Error("not implemented")}return wu=r,wu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qu,Qv;function e$(){if(Qv)return qu;Qv=1;var r=K_(),t=X_(),a=Q_(),i;return r()?i=t:i=a,qu=i,qu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _u,ey;function r$(){if(ey)return _u;ey=1;var r=ye(),t=typeof Uint8Array=="function";function a(i){return t&&i instanceof Uint8Array||r(i)==="[object Uint8Array]"}return _u=a,_u}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $u,ry;function t$(){if(ry)return $u;ry=1;var r=r$();return $u=r,$u}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tu,ty;function n$(){if(ty)return Tu;ty=1;var r=255;return Tu=r,Tu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Eu,ny;function i$(){if(ny)return Eu;ny=1;var r=typeof Uint8Array=="function"?Uint8Array:null;return Eu=r,Eu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Iu,iy;function a$(){if(iy)return Iu;iy=1;var r=t$(),t=n$(),a=i$();function i(){var l,f;if(typeof a!="function")return!1;try{f=[1,3.14,-3.14,t+1,t+2],f=new a(f),l=r(f)&&f[0]===1&&f[1]===3&&f[2]===t-2&&f[3]===0&&f[4]===1}catch{l=!1}return l}return Iu=i,Iu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Su,ay;function s$(){if(ay)return Su;ay=1;var r=a$();return Su=r,Su}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xu,sy;function u$(){if(sy)return xu;sy=1;var r=typeof Uint8Array=="function"?Uint8Array:void 0;return xu=r,xu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ru,uy;function o$(){if(uy)return Ru;uy=1;function r(){throw new Error("not implemented")}return Ru=r,Ru}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ou,oy;function c$(){if(oy)return Ou;oy=1;var r=s$(),t=u$(),a=o$(),i;return r()?i=t:i=a,Ou=i,Ou}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Au,cy;function l$(){if(cy)return Au;cy=1;var r=ye(),t=typeof Uint8ClampedArray=="function";function a(i){return t&&i instanceof Uint8ClampedArray||r(i)==="[object Uint8ClampedArray]"}return Au=a,Au}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mu,ly;function f$(){if(ly)return Mu;ly=1;var r=l$();return Mu=r,Mu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cu,fy;function h$(){if(fy)return Cu;fy=1;var r=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:null;return Cu=r,Cu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lu,hy;function d$(){if(hy)return Lu;hy=1;var r=f$(),t=h$();function a(){var i,l;if(typeof t!="function")return!1;try{l=new t([-1,0,1,3.14,4.99,255,256]),i=r(l)&&l[0]===0&&l[1]===0&&l[2]===1&&l[3]===3&&l[4]===5&&l[5]===255&&l[6]===255}catch{i=!1}return i}return Lu=a,Lu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ku,dy;function m$(){if(dy)return ku;dy=1;var r=d$();return ku=r,ku}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nu,my;function v$(){if(my)return Nu;my=1;var r=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:void 0;return Nu=r,Nu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fu,vy;function y$(){if(vy)return Fu;vy=1;function r(){throw new Error("not implemented")}return Fu=r,Fu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pu,yy;function p$(){if(yy)return Pu;yy=1;var r=m$(),t=v$(),a=y$(),i;return r()?i=t:i=a,Pu=i,Pu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Du,py;function g$(){if(py)return Du;py=1;var r=ye(),t=typeof Int16Array=="function";function a(i){return t&&i instanceof Int16Array||r(i)==="[object Int16Array]"}return Du=a,Du}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Uu,gy;function b$(){if(gy)return Uu;gy=1;var r=g$();return Uu=r,Uu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bu,by;function w$(){if(by)return Bu;by=1;var r=32767;return Bu=r,Bu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ju,wy;function q$(){if(wy)return ju;wy=1;var r=-32768;return ju=r,ju}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vu,qy;function _$(){if(qy)return Vu;qy=1;var r=typeof Int16Array=="function"?Int16Array:null;return Vu=r,Vu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wu,_y;function $$(){if(_y)return Wu;_y=1;var r=b$(),t=w$(),a=q$(),i=_$();function l(){var f,v;if(typeof i!="function")return!1;try{v=new i([1,3.14,-3.14,t+1]),f=r(v)&&v[0]===1&&v[1]===3&&v[2]===-3&&v[3]===a}catch{f=!1}return f}return Wu=l,Wu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zu,$y;function T$(){if($y)return zu;$y=1;var r=$$();return zu=r,zu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hu,Ty;function E$(){if(Ty)return Hu;Ty=1;var r=typeof Int16Array=="function"?Int16Array:void 0;return Hu=r,Hu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gu,Ey;function I$(){if(Ey)return Gu;Ey=1;function r(){throw new Error("not implemented")}return Gu=r,Gu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zu,Iy;function S$(){if(Iy)return Zu;Iy=1;var r=T$(),t=E$(),a=I$(),i;return r()?i=t:i=a,Zu=i,Zu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yu,Sy;function x$(){if(Sy)return Yu;Sy=1;var r=ye(),t=typeof Uint16Array=="function";function a(i){return t&&i instanceof Uint16Array||r(i)==="[object Uint16Array]"}return Yu=a,Yu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ju,xy;function R$(){if(xy)return Ju;xy=1;var r=x$();return Ju=r,Ju}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ku,Ry;function O$(){if(Ry)return Ku;Ry=1;var r=65535;return Ku=r,Ku}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xu,Oy;function A$(){if(Oy)return Xu;Oy=1;var r=typeof Uint16Array=="function"?Uint16Array:null;return Xu=r,Xu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qu,Ay;function M$(){if(Ay)return Qu;Ay=1;var r=R$(),t=O$(),a=A$();function i(){var l,f;if(typeof a!="function")return!1;try{f=[1,3.14,-3.14,t+1,t+2],f=new a(f),l=r(f)&&f[0]===1&&f[1]===3&&f[2]===t-2&&f[3]===0&&f[4]===1}catch{l=!1}return l}return Qu=i,Qu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eo,My;function C$(){if(My)return eo;My=1;var r=M$();return eo=r,eo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ro,Cy;function L$(){if(Cy)return ro;Cy=1;var r=typeof Uint16Array=="function"?Uint16Array:void 0;return ro=r,ro}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var to,Ly;function k$(){if(Ly)return to;Ly=1;function r(){throw new Error("not implemented")}return to=r,to}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var no,ky;function N$(){if(ky)return no;ky=1;var r=C$(),t=L$(),a=k$(),i;return r()?i=t:i=a,no=i,no}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var io,Ny;function F$(){if(Ny)return io;Ny=1;var r=ye(),t=typeof Int32Array=="function";function a(i){return t&&i instanceof Int32Array||r(i)==="[object Int32Array]"}return io=a,io}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ao,Fy;function P$(){if(Fy)return ao;Fy=1;var r=F$();return ao=r,ao}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var so,Py;function D$(){if(Py)return so;Py=1;var r=2147483647;return so=r,so}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uo,Dy;function U$(){if(Dy)return uo;Dy=1;var r=-2147483648;return uo=r,uo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oo,Uy;function B$(){if(Uy)return oo;Uy=1;var r=typeof Int32Array=="function"?Int32Array:null;return oo=r,oo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var co,By;function j$(){if(By)return co;By=1;var r=P$(),t=D$(),a=U$(),i=B$();function l(){var f,v;if(typeof i!="function")return!1;try{v=new i([1,3.14,-3.14,t+1]),f=r(v)&&v[0]===1&&v[1]===3&&v[2]===-3&&v[3]===a}catch{f=!1}return f}return co=l,co}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lo,jy;function V$(){if(jy)return lo;jy=1;var r=j$();return lo=r,lo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fo,Vy;function W$(){if(Vy)return fo;Vy=1;var r=typeof Int32Array=="function"?Int32Array:void 0;return fo=r,fo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ho,Wy;function z$(){if(Wy)return ho;Wy=1;function r(){throw new Error("not implemented")}return ho=r,ho}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mo,zy;function H$(){if(zy)return mo;zy=1;var r=V$(),t=W$(),a=z$(),i;return r()?i=t:i=a,mo=i,mo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vo,Hy;function G$(){if(Hy)return vo;Hy=1;var r=ye(),t=typeof Uint32Array=="function";function a(i){return t&&i instanceof Uint32Array||r(i)==="[object Uint32Array]"}return vo=a,vo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yo,Gy;function Z$(){if(Gy)return yo;Gy=1;var r=G$();return yo=r,yo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var po,Zy;function Y$(){if(Zy)return po;Zy=1;var r=typeof Uint32Array=="function"?Uint32Array:null;return po=r,po}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var go,Yy;function J$(){if(Yy)return go;Yy=1;var r=Z$(),t=S1(),a=Y$();function i(){var l,f;if(typeof a!="function")return!1;try{f=[1,3.14,-3.14,t+1,t+2],f=new a(f),l=r(f)&&f[0]===1&&f[1]===3&&f[2]===t-2&&f[3]===0&&f[4]===1}catch{l=!1}return l}return go=i,go}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bo,Jy;function K$(){if(Jy)return bo;Jy=1;var r=J$();return bo=r,bo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wo,Ky;function X$(){if(Ky)return wo;Ky=1;var r=typeof Uint32Array=="function"?Uint32Array:void 0;return wo=r,wo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qo,Xy;function Q$(){if(Xy)return qo;Xy=1;function r(){throw new Error("not implemented")}return qo=r,qo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _o,Qy;function eT(){if(Qy)return _o;Qy=1;var r=K$(),t=X$(),a=Q$(),i;return r()?i=t:i=a,_o=i,_o}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $o,ep;function rT(){if(ep)return $o;ep=1;var r=ye(),t=typeof Float32Array=="function";function a(i){return t&&i instanceof Float32Array||r(i)==="[object Float32Array]"}return $o=a,$o}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var To,rp;function tT(){if(rp)return To;rp=1;var r=rT();return To=r,To}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Eo,tp;function nT(){if(tp)return Eo;tp=1;var r=typeof Float32Array=="function"?Float32Array:null;return Eo=r,Eo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Io,np;function iT(){if(np)return Io;np=1;var r=tT(),t=Yc(),a=nT();function i(){var l,f;if(typeof a!="function")return!1;try{f=new a([1,3.14,-3.14,5e40]),l=r(f)&&f[0]===1&&f[1]===3.140000104904175&&f[2]===-3.140000104904175&&f[3]===t}catch{l=!1}return l}return Io=i,Io}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var So,ip;function aT(){if(ip)return So;ip=1;var r=iT();return So=r,So}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xo,ap;function sT(){if(ap)return xo;ap=1;var r=typeof Float32Array=="function"?Float32Array:void 0;return xo=r,xo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ro,sp;function uT(){if(sp)return Ro;sp=1;function r(){throw new Error("not implemented")}return Ro=r,Ro}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Oo,up;function oT(){if(up)return Oo;up=1;var r=aT(),t=sT(),a=uT(),i;return r()?i=t:i=a,Oo=i,Oo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ao,op;function cT(){if(op)return Ao;op=1;var r=ye(),t=typeof Float64Array=="function";function a(i){return t&&i instanceof Float64Array||r(i)==="[object Float64Array]"}return Ao=a,Ao}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mo,cp;function lT(){if(cp)return Mo;cp=1;var r=cT();return Mo=r,Mo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Co,lp;function fT(){if(lp)return Co;lp=1;var r=typeof Float64Array=="function"?Float64Array:null;return Co=r,Co}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lo,fp;function hT(){if(fp)return Lo;fp=1;var r=lT(),t=fT();function a(){var i,l;if(typeof t!="function")return!1;try{l=new t([1,3.14,-3.14,NaN]),i=r(l)&&l[0]===1&&l[1]===3.14&&l[2]===-3.14&&l[3]!==l[3]}catch{i=!1}return i}return Lo=a,Lo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ko,hp;function dT(){if(hp)return ko;hp=1;var r=hT();return ko=r,ko}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var No,dp;function mT(){if(dp)return No;dp=1;var r=typeof Float64Array=="function"?Float64Array:void 0;return No=r,No}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fo,mp;function vT(){if(mp)return Fo;mp=1;function r(){throw new Error("not implemented")}return Fo=r,Fo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Po,vp;function yT(){if(vp)return Po;vp=1;var r=dT(),t=mT(),a=vT(),i;return r()?i=t:i=a,Po=i,Po}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Do,yp;function pT(){if(yp)return Do;yp=1;var r=e$(),t=c$(),a=p$(),i=S$(),l=N$(),f=H$(),v=eT(),h=oT(),p=yT(),R;function S(N){return new r(N)}function $(N){return new t(N)}function E(N){return new a(N)}function w(N){return new i(N)}function C(N){return new l(N)}function O(N){return new f(N)}function L(N){return new v(N)}function A(N){return new h(N)}function k(N){return new p(N)}function B(){var N={int8array:S,uint8array:$,uint8clampedarray:E,int16array:w,uint16array:C,int32array:O,uint32array:L,float32array:A,float64array:k};return N}return R=B(),Do=R,Do}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Uo,pp;function gT(){if(pp)return Uo;pp=1;var r=br(),t=ht(),a=Dr(),i=Hq(),l=Xc(),f=Qq(),v=T1(),h=O1(),p=x_(),R=M_(),S=y1(),$=t1(),E=W_(),w=pT();function C(A){var k,B,N,W,te,G,j,Y;for(k=[],W=[],j=Object.create(S(A)),k.push(A),W.push(j),B=p(A),Y=0;Y<B.length;Y++)N=B[Y],te=R(A,N),r(te,"value")&&(G=t(A[N])?[]:{},te.value=L(A[N],G,k,W,-1)),$(j,N,te);return Object.isExtensible(A)||Object.preventExtensions(j),Object.isSealed(A)&&Object.seal(j),Object.isFrozen(A)&&Object.freeze(j),j}function O(A){var k=[],B=[],N,W,te,G,j,Y;for(j=new A.constructor(A.message),k.push(A),B.push(j),A.stack&&(j.stack=A.stack),A.code&&(j.code=A.code),A.errno&&(j.errno=A.errno),A.syscall&&(j.syscall=A.syscall),N=h(A),Y=0;Y<N.length;Y++)G=N[Y],W=R(A,G),r(W,"value")&&(te=t(A[G])?[]:{},W.value=L(A[G],te,k,B,-1)),$(j,G,W);return j}function L(A,k,B,N,W){var te,G,j,Y,he,P,we,ne,pe,oe;if(W-=1,typeof A!="object"||A===null)return A;if(a(A))return E(A);if(i(A))return O(A);if(j=l(A),j==="date")return new Date(+A);if(j==="regexp")return f(A.toString());if(j==="set")return new Set(A);if(j==="map")return new Map(A);if(j==="string"||j==="boolean"||j==="number")return A.valueOf();if(he=w[j],he)return he(A);if(j!=="array"&&j!=="object")return typeof Object.freeze=="function"?C(A):{};if(G=h(A),W>0)for(te=j,oe=0;oe<G.length;oe++){if(P=G[oe],ne=A[P],j=l(ne),typeof ne!="object"||ne===null||j!=="array"&&j!=="object"||a(ne)){te==="object"?(Y=R(A,P),r(Y,"value")&&(Y.value=L(ne)),$(k,P,Y)):k[P]=L(ne);continue}if(pe=v(B,ne),pe!==-1){k[P]=N[pe];continue}we=t(ne)?new Array(ne.length):{},B.push(ne),N.push(we),te==="array"?k[P]=L(ne,we,B,N,W):(Y=R(A,P),r(Y,"value")&&(Y.value=L(ne,we,B,N,W)),$(k,P,Y))}else if(j==="array")for(oe=0;oe<G.length;oe++)P=G[oe],k[P]=A[P];else for(oe=0;oe<G.length;oe++)P=G[oe],Y=R(A,P),$(k,P,Y);return Object.isExtensible(A)||Object.preventExtensions(k),Object.isSealed(A)&&Object.seal(k),Object.isFrozen(A)&&Object.freeze(k),k}return Uo=L,Uo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bo,gp;function bT(){if(gp)return Bo;gp=1;var r=ht(),t=dq().isPrimitive,a=Ze(),i=Yc(),l=gT();function f(v,h){var p;if(arguments.length>1){if(!t(h))throw new TypeError(a("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",h));if(h===0)return v}else h=i;return p=r(v)?new Array(v.length):{},l(v,p,[v],[p],h)}return Bo=f,Bo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jo,bp;function wT(){if(bp)return jo;bp=1;var r=bT();return jo=r,jo}var qT=wT();const _T=w0(qT),wp={...X0,GhostError:X},De={serialize(r){try{return{id:r.id,status:r.statusCode,code:r.code||r.errorType,title:r.name,detail:r.message,meta:{context:r.context,help:r.help,errorDetails:r.errorDetails,level:r.level,errorType:r.errorType}}}catch{return{detail:"Something went wrong."}}},deserialize(r){return{id:r.id,message:r.detail||r.error_description||r.message,statusCode:r.status,code:r.code||r.error,level:r.meta&&r.meta.level,help:r.meta&&r.meta.help,context:r.meta&&r.meta.context}},OAuthSerialize(r){const t={[zc.name]:"access_denied",[Gc.name]:"temporarily_unavailable",[Wc.name]:"invalid_request",[Hc.name]:"invalid_request",default:"server_error"},{detail:a,code:i,...l}=De.serialize(r);return{error:r.code||t[r.name]||"server_error",error_description:r.message,...l}},OAuthDeserialize(r){try{return new wp[r.title||r.name||yr.name](De.deserialize(r))}catch{return new yr({errorType:r.title||r.name,...De.deserialize(r)})}},JSONAPISerialize(r){const t={errors:[De.serialize(r)]};return t.errors[0].source={},r.property&&(t.errors[0].source.pointer="/data/attributes/"+r.property),t},JSONAPIDeserialize(r){r=r.errors&&r.errors[0]||{};let t;try{t=new wp[r.title||r.name||yr.name](De.deserialize(r))}catch{t=new yr({errorType:r.title||r.name,...De.deserialize(r)})}return r.source&&r.source.pointer&&(t.property=r.source.pointer.split("/")[3]),t}};function $T(r,t){t=t||{format:"jsonapi"};let a={};try{t.format==="jsonapi"?a=De.JSONAPISerialize(r):a=De.OAuthSerialize(r)}catch{a.message="Something went wrong."}return a}function TT(r){let t={};return r.errors?t=De.JSONAPIDeserialize(r):t=De.OAuthDeserialize(r),t}function ET(r){const t=r.stack?.split(/\n/)||[];"hideStack"in r&&r.hideStack?t.splice(1,t.length-1):t.splice(1,0,"Stack Trace:"),"help"in r&&r.help&&t.splice(1,0,`${r.help}`),"context"in r&&r.context&&t.splice(1,0,`${r.context}`);const i=_T(r);return i.stack=t.join(`
`),i}function IT(r){const t=X.name,a="IgnitionError";return function l(f){return!f||!f.name?!1:f.name===t||f.name===a?!0:l(Object.getPrototypeOf(f))}(r.constructor)}var ST=X0;const xT={serialize:$T,deserialize:TT,isGhostError:IT,prepareStackForUser:ET},RT=Object.freeze(Object.defineProperty({__proto__:null,BadRequestError:Wc,ConflictError:J0,DataExportError:D0,DataImportError:U0,DisabledFeatureError:V0,EmailError:B0,HelperWarning:H0,HostLimitError:z0,IncorrectUsageError:x0,InternalServerError:yr,MaintenanceError:Gc,MethodNotAllowedError:C0,MigrationError:K0,NoContentError:Y0,NoPermissionError:zc,NotFoundError:R0,PasswordResetRequiredError:G0,RangeNotSatisfiableError:k0,RequestEntityTooLargeError:N0,RequestNotAcceptableError:L0,ThemeValidationError:j0,TokenRevocationError:F0,TooManyRequestsError:M0,UnauthorizedError:O0,UnhandledJobError:Z0,UnsupportedMediaTypeError:A0,UpdateCollisionError:W0,ValidationError:Hc,VersionMismatchError:P0,default:ST,utils:xT},Symbol.toStringTag,{value:"Module"})),A1=$b(RT);var Vo,qp;function OT(){if(qp)return Vo;qp=1;var r=E0(),t=r(function(a,i,l){return a+(l?" ":"")+i.toLowerCase()});return Vo=t,Vo}var Wo,_p;function M1(){if(_p)return Wo;_p=1;var r=Bc(),t=(function(){try{var a=r(Object,"defineProperty");return a({},"",{}),a}catch{}})();return Wo=t,Wo}var zo,$p;function C1(){if($p)return zo;$p=1;var r=M1();function t(a,i,l){i=="__proto__"&&r?r(a,i,{configurable:!0,enumerable:!0,value:l,writable:!0}):a[i]=l}return zo=t,zo}var Ho,Tp;function AT(){if(Tp)return Ho;Tp=1;var r=C1(),t=ot(),a=Object.prototype,i=a.hasOwnProperty;function l(f,v,h){var p=f[v];(!(i.call(f,v)&&t(p,h))||h===void 0&&!(v in f))&&r(f,v,h)}return Ho=l,Ho}var Go,Ep;function MT(){if(Ep)return Go;Ep=1;var r=AT(),t=C1();function a(i,l,f,v){var h=!f;f||(f={});for(var p=-1,R=l.length;++p<R;){var S=l[p],$=v?v(f[S],i[S],S,f,i):void 0;$===void 0&&($=i[S]),h?t(f,S,$):r(f,S,$)}return f}return Go=a,Go}var Zo,Ip;function L1(){if(Ip)return Zo;Ip=1;function r(t){return t}return Zo=r,Zo}var Yo,Sp;function k1(){if(Sp)return Yo;Sp=1;function r(t,a,i){switch(i.length){case 0:return t.call(a);case 1:return t.call(a,i[0]);case 2:return t.call(a,i[0],i[1]);case 3:return t.call(a,i[0],i[1],i[2])}return t.apply(a,i)}return Yo=r,Yo}var Jo,xp;function CT(){if(xp)return Jo;xp=1;var r=k1(),t=Math.max;function a(i,l,f){return l=t(l===void 0?i.length-1:l,0),function(){for(var v=arguments,h=-1,p=t(v.length-l,0),R=Array(p);++h<p;)R[h]=v[l+h];h=-1;for(var S=Array(l+1);++h<l;)S[h]=v[h];return S[l]=f(R),r(i,this,S)}}return Jo=a,Jo}var Ko,Rp;function LT(){if(Rp)return Ko;Rp=1;function r(t){return function(){return t}}return Ko=r,Ko}var Xo,Op;function kT(){if(Op)return Xo;Op=1;var r=LT(),t=M1(),a=L1(),i=t?function(l,f){return t(l,"toString",{configurable:!0,enumerable:!1,value:r(f),writable:!0})}:a;return Xo=i,Xo}var Qo,Ap;function NT(){if(Ap)return Qo;Ap=1;var r=800,t=16,a=Date.now;function i(l){var f=0,v=0;return function(){var h=a(),p=t-(h-v);if(v=h,p>0){if(++f>=r)return arguments[0]}else f=0;return l.apply(void 0,arguments)}}return Qo=i,Qo}var ec,Mp;function FT(){if(Mp)return ec;Mp=1;var r=kT(),t=NT(),a=t(r);return ec=a,ec}var rc,Cp;function N1(){if(Cp)return rc;Cp=1;var r=L1(),t=CT(),a=FT();function i(l,f){return a(t(l,f,r),l+"")}return rc=i,rc}var tc,Lp;function nl(){if(Lp)return tc;Lp=1;var r=I0(),t=Vc();function a(i){return i!=null&&t(i.length)&&!r(i)}return tc=a,tc}var nc,kp;function F1(){if(kp)return nc;kp=1;var r=ot(),t=nl(),a=jc(),i=st();function l(f,v,h){if(!i(h))return!1;var p=typeof v;return(p=="number"?t(h)&&a(v,h.length):p=="string"&&v in h)?r(h[v],f):!1}return nc=l,nc}var ic,Np;function PT(){if(Np)return ic;Np=1;var r=N1(),t=F1();function a(i){return r(function(l,f){var v=-1,h=f.length,p=h>1?f[h-1]:void 0,R=h>2?f[2]:void 0;for(p=i.length>3&&typeof p=="function"?(h--,p):void 0,R&&t(f[0],f[1],R)&&(p=h<3?void 0:p,h=1),l=Object(l);++v<h;){var S=f[v];S&&i(l,S,v,p)}return l})}return ic=a,ic}var ac,Fp;function DT(){if(Fp)return ac;Fp=1;function r(t,a){for(var i=-1,l=Array(t);++i<t;)l[i]=a(i);return l}return ac=r,ac}var Nr={exports:{}},sc,Pp;function UT(){if(Pp)return sc;Pp=1;function r(){return!1}return sc=r,sc}Nr.exports;var Dp;function BT(){return Dp||(Dp=1,(function(r,t){var a=at(),i=UT(),l=t&&!t.nodeType&&t,f=l&&!0&&r&&!r.nodeType&&r,v=f&&f.exports===l,h=v?a.Buffer:void 0,p=h?h.isBuffer:void 0,R=p||i;r.exports=R})(Nr,Nr.exports)),Nr.exports}var uc,Up;function jT(){if(Up)return uc;Up=1;var r=pr(),t=Vc(),a=gr(),i="[object Arguments]",l="[object Array]",f="[object Boolean]",v="[object Date]",h="[object Error]",p="[object Function]",R="[object Map]",S="[object Number]",$="[object Object]",E="[object RegExp]",w="[object Set]",C="[object String]",O="[object WeakMap]",L="[object ArrayBuffer]",A="[object DataView]",k="[object Float32Array]",B="[object Float64Array]",N="[object Int8Array]",W="[object Int16Array]",te="[object Int32Array]",G="[object Uint8Array]",j="[object Uint8ClampedArray]",Y="[object Uint16Array]",he="[object Uint32Array]",P={};P[k]=P[B]=P[N]=P[W]=P[te]=P[G]=P[j]=P[Y]=P[he]=!0,P[i]=P[l]=P[L]=P[f]=P[A]=P[v]=P[h]=P[p]=P[R]=P[S]=P[$]=P[E]=P[w]=P[C]=P[O]=!1;function we(ne){return a(ne)&&t(ne.length)&&!!P[r(ne)]}return uc=we,uc}var oc,Bp;function VT(){if(Bp)return oc;Bp=1;function r(t){return function(a){return t(a)}}return oc=r,oc}var Fr={exports:{}};Fr.exports;var jp;function WT(){return jp||(jp=1,(function(r,t){var a=q0(),i=t&&!t.nodeType&&t,l=i&&!0&&r&&!r.nodeType&&r,f=l&&l.exports===i,v=f&&a.process,h=(function(){try{var p=l&&l.require&&l.require("util").types;return p||v&&v.binding&&v.binding("util")}catch{}})();r.exports=h})(Fr,Fr.exports)),Fr.exports}var cc,Vp;function zT(){if(Vp)return cc;Vp=1;var r=jT(),t=VT(),a=WT(),i=a&&a.isTypedArray,l=i?t(i):r;return cc=l,cc}var lc,Wp;function P1(){if(Wp)return lc;Wp=1;var r=DT(),t=S0(),a=Pr(),i=BT(),l=jc(),f=zT(),v=Object.prototype,h=v.hasOwnProperty;function p(R,S){var $=a(R),E=!$&&t(R),w=!$&&!E&&i(R),C=!$&&!E&&!w&&f(R),O=$||E||w||C,L=O?r(R.length,String):[],A=L.length;for(var k in R)(S||h.call(R,k))&&!(O&&(k=="length"||w&&(k=="offset"||k=="parent")||C&&(k=="buffer"||k=="byteLength"||k=="byteOffset")||l(k,A)))&&L.push(k);return L}return lc=p,lc}var fc,zp;function D1(){if(zp)return fc;zp=1;var r=Object.prototype;function t(a){var i=a&&a.constructor,l=typeof i=="function"&&i.prototype||r;return a===l}return fc=t,fc}var hc,Hp;function HT(){if(Hp)return hc;Hp=1;function r(t){var a=[];if(t!=null)for(var i in Object(t))a.push(i);return a}return hc=r,hc}var dc,Gp;function GT(){if(Gp)return dc;Gp=1;var r=st(),t=D1(),a=HT(),i=Object.prototype,l=i.hasOwnProperty;function f(v){if(!r(v))return a(v);var h=t(v),p=[];for(var R in v)R=="constructor"&&(h||!l.call(v,R))||p.push(R);return p}return dc=f,dc}var mc,Zp;function ZT(){if(Zp)return mc;Zp=1;var r=P1(),t=GT(),a=nl();function i(l){return a(l)?r(l,!0):t(l)}return mc=i,mc}var vc,Yp;function YT(){if(Yp)return vc;Yp=1;var r=MT(),t=PT(),a=ZT(),i=t(function(l,f,v,h){r(f,a(f),l,h)});return vc=i,vc}var yc,Jp;function U1(){if(Jp)return yc;Jp=1;function r(t,a){return function(i){return t(a(i))}}return yc=r,yc}var pc,Kp;function JT(){if(Kp)return pc;Kp=1;var r=U1(),t=r(Object.getPrototypeOf,Object);return pc=t,pc}var gc,Xp;function KT(){if(Xp)return gc;Xp=1;var r=pr(),t=JT(),a=gr(),i="[object Object]",l=Function.prototype,f=Object.prototype,v=l.toString,h=f.hasOwnProperty,p=v.call(Object);function R(S){if(!a(S)||r(S)!=i)return!1;var $=t(S);if($===null)return!0;var E=h.call($,"constructor")&&$.constructor;return typeof E=="function"&&E instanceof E&&v.call(E)==p}return gc=R,gc}var bc,Qp;function B1(){if(Qp)return bc;Qp=1;var r=pr(),t=gr(),a=KT(),i="[object DOMException]",l="[object Error]";function f(v){if(!t(v))return!1;var h=r(v);return h==l||h==i||typeof v.message=="string"&&typeof v.name=="string"&&!a(v)}return bc=f,bc}var wc,e0;function XT(){if(e0)return wc;e0=1;var r=k1(),t=N1(),a=B1(),i=t(function(l,f){try{return r(l,void 0,f)}catch(v){return a(v)?v:new Error(v)}});return wc=i,wc}var qc,r0;function QT(){if(r0)return qc;r0=1;var r=_0();function t(a,i){return r(i,function(l){return a[l]})}return qc=t,qc}var _c,t0;function eE(){if(t0)return _c;t0=1;var r=ot(),t=Object.prototype,a=t.hasOwnProperty;function i(l,f,v,h){return l===void 0||r(l,t[v])&&!a.call(h,v)?f:l}return _c=i,_c}var $c,n0;function rE(){if(n0)return $c;n0=1;var r={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"};function t(a){return"\\"+r[a]}return $c=t,$c}var Tc,i0;function tE(){if(i0)return Tc;i0=1;var r=U1(),t=r(Object.keys,Object);return Tc=t,Tc}var Ec,a0;function nE(){if(a0)return Ec;a0=1;var r=D1(),t=tE(),a=Object.prototype,i=a.hasOwnProperty;function l(f){if(!r(f))return t(f);var v=[];for(var h in Object(f))i.call(f,h)&&h!="constructor"&&v.push(h);return v}return Ec=l,Ec}var Ic,s0;function iE(){if(s0)return Ic;s0=1;var r=P1(),t=nE(),a=nl();function i(l){return a(l)?r(l):t(l)}return Ic=i,Ic}var Sc,u0;function j1(){if(u0)return Sc;u0=1;var r=/<%=([\s\S]+?)%>/g;return Sc=r,Sc}var xc,o0;function aE(){if(o0)return xc;o0=1;var r=T0(),t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},a=r(t);return xc=a,xc}var Rc,c0;function sE(){if(c0)return Rc;c0=1;var r=aE(),t=tr(),a=/[&<>"']/g,i=RegExp(a.source);function l(f){return f=t(f),f&&i.test(f)?f.replace(a,r):f}return Rc=l,Rc}var Oc,l0;function uE(){if(l0)return Oc;l0=1;var r=/<%-([\s\S]+?)%>/g;return Oc=r,Oc}var Ac,f0;function oE(){if(f0)return Ac;f0=1;var r=/<%([\s\S]+?)%>/g;return Ac=r,Ac}var Mc,h0;function cE(){if(h0)return Mc;h0=1;var r=sE(),t=uE(),a=oE(),i=j1(),l={escape:t,evaluate:a,interpolate:i,variable:"",imports:{_:{escape:r}}};return Mc=l,Mc}var Cc,d0;function lE(){if(d0)return Cc;d0=1;var r=YT(),t=XT(),a=QT(),i=eE(),l=rE(),f=B1(),v=F1(),h=iE(),p=j1(),R=cE(),S=tr(),$="Invalid `variable` option passed into `_.template`",E=/\b__p \+= '';/g,w=/\b(__p \+=) '' \+/g,C=/(__e\(.*?\)|\b__t\)) \+\n'';/g,O=/[()=,{}\[\]\/\s]/,L=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,A=/($^)/,k=/['\n\r\u2028\u2029\\]/g,B=Object.prototype,N=B.hasOwnProperty;function W(te,G,j){var Y=R.imports._.templateSettings||R;j&&v(te,G,j)&&(G=void 0),te=S(te),G=r({},G,Y,i);var he=r({},G.imports,Y.imports,i),P=h(he),we=a(he,P),ne,pe,oe=0,ke=G.interpolate||A,se="__p += '",Ue=RegExp((G.escape||A).source+"|"+ke.source+"|"+(ke===p?L:A).source+"|"+(G.evaluate||A).source+"|$","g"),xe=N.call(G,"sourceURL")?"//# sourceURL="+(G.sourceURL+"").replace(/\s/g," ")+`
`:"";te.replace(Ue,function(fe,Be,Re,Ne,ge,We){return Re||(Re=Ne),se+=te.slice(oe,We).replace(k,l),Be&&(ne=!0,se+=`' +
__e(`+Be+`) +
'`),ge&&(pe=!0,se+=`';
`+ge+`;
__p += '`),Re&&(se+=`' +
((__t = (`+Re+`)) == null ? '' : __t) +
'`),oe=We+fe.length,fe}),se+=`';
`;var $e=N.call(G,"variable")&&G.variable;if(!$e)se=`with (obj) {
`+se+`
}
`;else if(O.test($e))throw new Error($);se=(pe?se.replace(E,""):se).replace(w,"$1").replace(C,"$1;"),se="function("+($e||"obj")+`) {
`+($e?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(ne?", __e = _.escape":"")+(pe?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+se+`return __p
}`;var ie=t(function(){return Function(P,xe+"return "+se).apply(void 0,we)});if(ie.source=se,f(ie))throw ie;return ie}return Cc=W,Cc}var qe={},m0;function fE(){if(m0)return qe;m0=1,Object.defineProperty(qe,"__esModule",{value:!0});class r extends Error{}class t extends r{constructor(e){super(`Invalid DateTime: ${e.toMessage()}`)}}class a extends r{constructor(e){super(`Invalid Interval: ${e.toMessage()}`)}}class i extends r{constructor(e){super(`Invalid Duration: ${e.toMessage()}`)}}class l extends r{}class f extends r{constructor(e){super(`Invalid unit ${e}`)}}class v extends r{}class h extends r{constructor(){super("Zone is an abstract class")}}const p="numeric",R="short",S="long",$={year:p,month:p,day:p},E={year:p,month:R,day:p},w={year:p,month:R,day:p,weekday:R},C={year:p,month:S,day:p},O={year:p,month:S,day:p,weekday:S},L={hour:p,minute:p},A={hour:p,minute:p,second:p},k={hour:p,minute:p,second:p,timeZoneName:R},B={hour:p,minute:p,second:p,timeZoneName:S},N={hour:p,minute:p,hourCycle:"h23"},W={hour:p,minute:p,second:p,hourCycle:"h23"},te={hour:p,minute:p,second:p,hourCycle:"h23",timeZoneName:R},G={hour:p,minute:p,second:p,hourCycle:"h23",timeZoneName:S},j={year:p,month:p,day:p,hour:p,minute:p},Y={year:p,month:p,day:p,hour:p,minute:p,second:p},he={year:p,month:R,day:p,hour:p,minute:p},P={year:p,month:R,day:p,hour:p,minute:p,second:p},we={year:p,month:R,day:p,weekday:R,hour:p,minute:p},ne={year:p,month:S,day:p,hour:p,minute:p,timeZoneName:R},pe={year:p,month:S,day:p,hour:p,minute:p,second:p,timeZoneName:R},oe={year:p,month:S,day:p,weekday:S,hour:p,minute:p,timeZoneName:S},ke={year:p,month:S,day:p,weekday:S,hour:p,minute:p,second:p,timeZoneName:S};class se{get type(){throw new h}get name(){throw new h}get ianaName(){return this.name}get isUniversal(){throw new h}offsetName(e,n){throw new h}formatOffset(e,n){throw new h}offset(e){throw new h}equals(e){throw new h}get isValid(){throw new h}}let Ue=null;class xe extends se{static get instance(){return Ue===null&&(Ue=new xe),Ue}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(e,{format:n,locale:c}){return El(e,n,c)}formatOffset(e,n){return Er(this.offset(e),n)}offset(e){return-new Date(e).getTimezoneOffset()}equals(e){return e.type==="system"}get isValid(){return!0}}const $e=new Map;function ie(u){let e=$e.get(u);return e===void 0&&(e=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:u,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"}),$e.set(u,e)),e}const fe={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function Be(u,e){const n=u.format(e).replace(/\u200E/g,""),c=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n),[,d,g,q,_,T,M,F]=c;return[q,d,g,_,T,M,F]}function Re(u,e){const n=u.formatToParts(e),c=[];for(let d=0;d<n.length;d++){const{type:g,value:q}=n[d],_=fe[g];g==="era"?c[_]=q:U(_)||(c[_]=parseInt(q,10))}return c}const Ne=new Map;class ge extends se{static create(e){let n=Ne.get(e);return n===void 0&&Ne.set(e,n=new ge(e)),n}static resetCache(){Ne.clear(),$e.clear()}static isValidSpecifier(e){return this.isValidZone(e)}static isValidZone(e){if(!e)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:e}).format(),!0}catch{return!1}}constructor(e){super(),this.zoneName=e,this.valid=ge.isValidZone(e)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(e,{format:n,locale:c}){return El(e,n,c,this.name)}formatOffset(e,n){return Er(this.offset(e),n)}offset(e){if(!this.valid)return NaN;const n=new Date(e);if(isNaN(n))return NaN;const c=ie(this.name);let[d,g,q,_,T,M,F]=c.formatToParts?Re(c,n):Be(c,n);_==="BC"&&(d=-Math.abs(d)+1);const ae=Hr({year:d,month:g,day:q,hour:T===24?0:T,minute:M,second:F,millisecond:0});let D=+n;const me=D%1e3;return D-=me>=0?me:1e3+me,(ae-D)/(60*1e3)}equals(e){return e.type==="iana"&&e.name===this.name}get isValid(){return this.valid}}let We={};function ze(u,e={}){const n=JSON.stringify([u,e]);let c=We[n];return c||(c=new Intl.ListFormat(u,e),We[n]=c),c}const Ye=new Map;function nr(u,e={}){const n=JSON.stringify([u,e]);let c=Ye.get(n);return c===void 0&&(c=new Intl.DateTimeFormat(u,e),Ye.set(n,c)),c}const wr=new Map;function Ur(u,e={}){const n=JSON.stringify([u,e]);let c=wr.get(n);return c===void 0&&(c=new Intl.NumberFormat(u,e),wr.set(n,c)),c}const Fe=new Map;function Je(u,e={}){const{base:n,...c}=e,d=JSON.stringify([u,c]);let g=Fe.get(d);return g===void 0&&(g=new Intl.RelativeTimeFormat(u,e),Fe.set(d,g)),g}let Ke=null;function vt(){return Ke||(Ke=new Intl.DateTimeFormat().resolvedOptions().locale,Ke)}const Xe=new Map;function Br(u){let e=Xe.get(u);return e===void 0&&(e=new Intl.DateTimeFormat(u).resolvedOptions(),Xe.set(u,e)),e}const qr=new Map;function jr(u){let e=qr.get(u);if(!e){const n=new Intl.Locale(u);e="getWeekInfo"in n?n.getWeekInfo():n.weekInfo,"minimalDays"in e||(e={...y,...e}),qr.set(u,e)}return e}function ir(u){const e=u.indexOf("-x-");e!==-1&&(u=u.substring(0,e));const n=u.indexOf("-u-");if(n===-1)return[u];{let c,d;try{c=nr(u).resolvedOptions(),d=u}catch{const T=u.substring(0,n);c=nr(T).resolvedOptions(),d=T}const{numberingSystem:g,calendar:q}=c;return[d,g,q]}}function Te(u,e,n){return(n||e)&&(u.includes("-u-")||(u+="-u"),n&&(u+=`-ca-${n}`),e&&(u+=`-nu-${e}`)),u}function _r(u){const e=[];for(let n=1;n<=12;n++){const c=V.utc(2009,n,1);e.push(u(c))}return e}function yt(u){const e=[];for(let n=1;n<=7;n++){const c=V.utc(2016,11,13+n);e.push(u(c))}return e}function _e(u,e,n,c){const d=u.listingMode();return d==="error"?null:d==="en"?n(e):c(e)}function pt(u){return u.numberingSystem&&u.numberingSystem!=="latn"?!1:u.numberingSystem==="latn"||!u.locale||u.locale.startsWith("en")||Br(u.locale).numberingSystem==="latn"}class m{constructor(e,n,c){this.padTo=c.padTo||0,this.floor=c.floor||!1;const{padTo:d,floor:g,...q}=c;if(!n||Object.keys(q).length>0){const _={useGrouping:!1,...c};c.padTo>0&&(_.minimumIntegerDigits=c.padTo),this.inf=Ur(e,_)}}format(e){if(this.inf){const n=this.floor?Math.floor(e):e;return this.inf.format(n)}else{const n=this.floor?Math.floor(e):Tt(e,3);return de(n,this.padTo)}}}class s{constructor(e,n,c){this.opts=c,this.originalZone=void 0;let d;if(this.opts.timeZone)this.dt=e;else if(e.zone.type==="fixed"){const q=-1*(e.offset/60),_=q>=0?`Etc/GMT+${q}`:`Etc/GMT${q}`;e.offset!==0&&ge.create(_).valid?(d=_,this.dt=e):(d="UTC",this.dt=e.offset===0?e:e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone)}else e.zone.type==="system"?this.dt=e:e.zone.type==="iana"?(this.dt=e,d=e.zone.name):(d="UTC",this.dt=e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone);const g={...this.opts};g.timeZone=g.timeZone||d,this.dtf=nr(n,g)}format(){return this.originalZone?this.formatToParts().map(({value:e})=>e).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const e=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?e.map(n=>{if(n.type==="timeZoneName"){const c=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...n,value:c}}else return n}):e}resolvedOptions(){return this.dtf.resolvedOptions()}}class o{constructor(e,n,c){this.opts={style:"long",...c},!n&&ql()&&(this.rtf=Je(e,c))}format(e,n){return this.rtf?this.rtf.format(e,n):cg(n,e,this.opts.numeric,this.opts.style!=="long")}formatToParts(e,n){return this.rtf?this.rtf.formatToParts(e,n):[]}}const y={firstDay:1,minimalDays:4,weekend:[6,7]};class b{static fromOpts(e){return b.create(e.locale,e.numberingSystem,e.outputCalendar,e.weekSettings,e.defaultToEN)}static create(e,n,c,d,g=!1){const q=e||ce.defaultLocale,_=q||(g?"en-US":vt()),T=n||ce.defaultNumberingSystem,M=c||ce.defaultOutputCalendar,F=_t(d)||ce.defaultWeekSettings;return new b(_,T,M,F,q)}static resetCache(){Ke=null,Ye.clear(),wr.clear(),Fe.clear(),Xe.clear(),qr.clear()}static fromObject({locale:e,numberingSystem:n,outputCalendar:c,weekSettings:d}={}){return b.create(e,n,c,d)}constructor(e,n,c,d,g){const[q,_,T]=ir(e);this.locale=q,this.numberingSystem=n||_||null,this.outputCalendar=c||T||null,this.weekSettings=d,this.intl=Te(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=g,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=pt(this)),this.fastNumbersCached}listingMode(){const e=this.isEnglish(),n=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return e&&n?"en":"intl"}clone(e){return!e||Object.getOwnPropertyNames(e).length===0?this:b.create(e.locale||this.specifiedLocale,e.numberingSystem||this.numberingSystem,e.outputCalendar||this.outputCalendar,_t(e.weekSettings)||this.weekSettings,e.defaultToEN||!1)}redefaultToEN(e={}){return this.clone({...e,defaultToEN:!0})}redefaultToSystem(e={}){return this.clone({...e,defaultToEN:!1})}months(e,n=!1){return _e(this,e,xl,()=>{const c=this.intl==="ja"||this.intl.startsWith("ja-");n&=!c;const d=n?{month:e,day:"numeric"}:{month:e},g=n?"format":"standalone";if(!this.monthsCache[g][e]){const q=c?_=>this.dtFormatter(_,d).format():_=>this.extract(_,d,"month");this.monthsCache[g][e]=_r(q)}return this.monthsCache[g][e]})}weekdays(e,n=!1){return _e(this,e,Al,()=>{const c=n?{weekday:e,year:"numeric",month:"long",day:"numeric"}:{weekday:e},d=n?"format":"standalone";return this.weekdaysCache[d][e]||(this.weekdaysCache[d][e]=yt(g=>this.extract(g,c,"weekday"))),this.weekdaysCache[d][e]})}meridiems(){return _e(this,void 0,()=>Ml,()=>{if(!this.meridiemCache){const e={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[V.utc(2016,11,13,9),V.utc(2016,11,13,19)].map(n=>this.extract(n,e,"dayperiod"))}return this.meridiemCache})}eras(e){return _e(this,e,Cl,()=>{const n={era:e};return this.eraCache[e]||(this.eraCache[e]=[V.utc(-40,1,1),V.utc(2017,1,1)].map(c=>this.extract(c,n,"era"))),this.eraCache[e]})}extract(e,n,c){const d=this.dtFormatter(e,n),g=d.formatToParts(),q=g.find(_=>_.type.toLowerCase()===c);return q?q.value:null}numberFormatter(e={}){return new m(this.intl,e.forceSimple||this.fastNumbers,e)}dtFormatter(e,n={}){return new s(e,this.intl,n)}relFormatter(e={}){return new o(this.intl,this.isEnglish(),e)}listFormatter(e={}){return ze(this.intl,e)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||Br(this.intl).locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:_l()?jr(this.locale):y}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(e){return this.locale===e.locale&&this.numberingSystem===e.numberingSystem&&this.outputCalendar===e.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}}let I=null;class x extends se{static get utcInstance(){return I===null&&(I=new x(0)),I}static instance(e){return e===0?x.utcInstance:new x(e)}static parseSpecifier(e){if(e){const n=e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(n)return new x(Gr(n[1],n[2]))}return null}constructor(e){super(),this.fixed=e}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${Er(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${Er(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(e,n){return Er(this.fixed,n)}get isUniversal(){return!0}offset(){return this.fixed}equals(e){return e.type==="fixed"&&e.fixed===this.fixed}get isValid(){return!0}}class H extends se{constructor(e){super(),this.zoneName=e}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function J(u,e){if(U(u)||u===null)return e;if(u instanceof se)return u;if(Z1(u)){const n=u.toLowerCase();return n==="default"?e:n==="local"||n==="system"?xe.instance:n==="utc"||n==="gmt"?x.utcInstance:x.parseSpecifier(n)||ge.create(u)}else return He(u)?x.instance(u):typeof u=="object"&&"offset"in u&&typeof u.offset=="function"?u:new H(u)}const re={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},ue={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},Q=re.hanidec.replace(/[\[|\]]/g,"").split("");function W1(u){let e=parseInt(u,10);if(isNaN(e)){e="";for(let n=0;n<u.length;n++){const c=u.charCodeAt(n);if(u[n].search(re.hanidec)!==-1)e+=Q.indexOf(u[n]);else for(const d in ue){const[g,q]=ue[d];c>=g&&c<=q&&(e+=c-g)}}return parseInt(e,10)}else return e}const gt=new Map;function z1(){gt.clear()}function Oe({numberingSystem:u},e=""){const n=u||"latn";let c=gt.get(n);c===void 0&&(c=new Map,gt.set(n,c));let d=c.get(e);return d===void 0&&(d=new RegExp(`${re[n]}${e}`),c.set(e,d)),d}let il=()=>Date.now(),al="system",sl=null,ul=null,ol=null,cl=60,ll,fl=null;class ce{static get now(){return il}static set now(e){il=e}static set defaultZone(e){al=e}static get defaultZone(){return J(al,xe.instance)}static get defaultLocale(){return sl}static set defaultLocale(e){sl=e}static get defaultNumberingSystem(){return ul}static set defaultNumberingSystem(e){ul=e}static get defaultOutputCalendar(){return ol}static set defaultOutputCalendar(e){ol=e}static get defaultWeekSettings(){return fl}static set defaultWeekSettings(e){fl=_t(e)}static get twoDigitCutoffYear(){return cl}static set twoDigitCutoffYear(e){cl=e%100}static get throwOnInvalid(){return ll}static set throwOnInvalid(e){ll=e}static resetCaches(){b.resetCache(),ge.resetCache(),V.resetCache(),z1()}}class Ae{constructor(e,n){this.reason=e,this.explanation=n}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const hl=[0,31,59,90,120,151,181,212,243,273,304,334],dl=[0,31,60,91,121,152,182,213,244,274,305,335];function Ee(u,e){return new Ae("unit out of range",`you specified ${e} (of type ${typeof e}) as a ${u}, which is invalid`)}function bt(u,e,n){const c=new Date(Date.UTC(u,e-1,n));u<100&&u>=0&&c.setUTCFullYear(c.getUTCFullYear()-1900);const d=c.getUTCDay();return d===0?7:d}function ml(u,e,n){return n+($r(u)?dl:hl)[e-1]}function vl(u,e){const n=$r(u)?dl:hl,c=n.findIndex(g=>g<e),d=e-n[c];return{month:c+1,day:d}}function wt(u,e){return(u-e+7)%7+1}function Vr(u,e=4,n=1){const{year:c,month:d,day:g}=u,q=ml(c,d,g),_=wt(bt(c,d,g),n);let T=Math.floor((q-_+14-e)/7),M;return T<1?(M=c-1,T=Tr(M,e,n)):T>Tr(c,e,n)?(M=c+1,T=1):M=c,{weekYear:M,weekNumber:T,weekday:_,...Yr(u)}}function yl(u,e=4,n=1){const{weekYear:c,weekNumber:d,weekday:g}=u,q=wt(bt(c,1,e),n),_=sr(c);let T=d*7+g-q-7+e,M;T<1?(M=c-1,T+=sr(M)):T>_?(M=c+1,T-=sr(c)):M=c;const{month:F,day:z}=vl(M,T);return{year:M,month:F,day:z,...Yr(u)}}function qt(u){const{year:e,month:n,day:c}=u,d=ml(e,n,c);return{year:e,ordinal:d,...Yr(u)}}function pl(u){const{year:e,ordinal:n}=u,{month:c,day:d}=vl(e,n);return{year:e,month:c,day:d,...Yr(u)}}function gl(u,e){if(!U(u.localWeekday)||!U(u.localWeekNumber)||!U(u.localWeekYear)){if(!U(u.weekday)||!U(u.weekNumber)||!U(u.weekYear))throw new l("Cannot mix locale-based week fields with ISO-based week fields");return U(u.localWeekday)||(u.weekday=u.localWeekday),U(u.localWeekNumber)||(u.weekNumber=u.localWeekNumber),U(u.localWeekYear)||(u.weekYear=u.localWeekYear),delete u.localWeekday,delete u.localWeekNumber,delete u.localWeekYear,{minDaysInFirstWeek:e.getMinDaysInFirstWeek(),startOfWeek:e.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function H1(u,e=4,n=1){const c=Wr(u.weekYear),d=Ie(u.weekNumber,1,Tr(u.weekYear,e,n)),g=Ie(u.weekday,1,7);return c?d?g?!1:Ee("weekday",u.weekday):Ee("week",u.weekNumber):Ee("weekYear",u.weekYear)}function G1(u){const e=Wr(u.year),n=Ie(u.ordinal,1,sr(u.year));return e?n?!1:Ee("ordinal",u.ordinal):Ee("year",u.year)}function bl(u){const e=Wr(u.year),n=Ie(u.month,1,12),c=Ie(u.day,1,zr(u.year,u.month));return e?n?c?!1:Ee("day",u.day):Ee("month",u.month):Ee("year",u.year)}function wl(u){const{hour:e,minute:n,second:c,millisecond:d}=u,g=Ie(e,0,23)||e===24&&n===0&&c===0&&d===0,q=Ie(n,0,59),_=Ie(c,0,59),T=Ie(d,0,999);return g?q?_?T?!1:Ee("millisecond",d):Ee("second",c):Ee("minute",n):Ee("hour",e)}function U(u){return typeof u>"u"}function He(u){return typeof u=="number"}function Wr(u){return typeof u=="number"&&u%1===0}function Z1(u){return typeof u=="string"}function Y1(u){return Object.prototype.toString.call(u)==="[object Date]"}function ql(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function _l(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function J1(u){return Array.isArray(u)?u:[u]}function $l(u,e,n){if(u.length!==0)return u.reduce((c,d)=>{const g=[e(d),d];return c&&n(c[0],g[0])===c[0]?c:g},null)[1]}function K1(u,e){return e.reduce((n,c)=>(n[c]=u[c],n),{})}function ar(u,e){return Object.prototype.hasOwnProperty.call(u,e)}function _t(u){if(u==null)return null;if(typeof u!="object")throw new v("Week settings must be an object");if(!Ie(u.firstDay,1,7)||!Ie(u.minimalDays,1,7)||!Array.isArray(u.weekend)||u.weekend.some(e=>!Ie(e,1,7)))throw new v("Invalid week settings");return{firstDay:u.firstDay,minimalDays:u.minimalDays,weekend:Array.from(u.weekend)}}function Ie(u,e,n){return Wr(u)&&u>=e&&u<=n}function X1(u,e){return u-e*Math.floor(u/e)}function de(u,e=2){const n=u<0;let c;return n?c="-"+(""+-u).padStart(e,"0"):c=(""+u).padStart(e,"0"),c}function Ge(u){if(!(U(u)||u===null||u===""))return parseInt(u,10)}function Qe(u){if(!(U(u)||u===null||u===""))return parseFloat(u)}function $t(u){if(!(U(u)||u===null||u==="")){const e=parseFloat("0."+u)*1e3;return Math.floor(e)}}function Tt(u,e,n="round"){const c=10**e;switch(n){case"expand":return u>0?Math.ceil(u*c)/c:Math.floor(u*c)/c;case"trunc":return Math.trunc(u*c)/c;case"round":return Math.round(u*c)/c;case"floor":return Math.floor(u*c)/c;case"ceil":return Math.ceil(u*c)/c;default:throw new RangeError(`Value rounding ${n} is out of range`)}}function $r(u){return u%4===0&&(u%100!==0||u%400===0)}function sr(u){return $r(u)?366:365}function zr(u,e){const n=X1(e-1,12)+1,c=u+(e-n)/12;return n===2?$r(c)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][n-1]}function Hr(u){let e=Date.UTC(u.year,u.month-1,u.day,u.hour,u.minute,u.second,u.millisecond);return u.year<100&&u.year>=0&&(e=new Date(e),e.setUTCFullYear(u.year,u.month-1,u.day)),+e}function Tl(u,e,n){return-wt(bt(u,1,e),n)+e-1}function Tr(u,e=4,n=1){const c=Tl(u,e,n),d=Tl(u+1,e,n);return(sr(u)-c+d)/7}function Et(u){return u>99?u:u>ce.twoDigitCutoffYear?1900+u:2e3+u}function El(u,e,n,c=null){const d=new Date(u),g={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};c&&(g.timeZone=c);const q={timeZoneName:e,...g},_=new Intl.DateTimeFormat(n,q).formatToParts(d).find(T=>T.type.toLowerCase()==="timezonename");return _?_.value:null}function Gr(u,e){let n=parseInt(u,10);Number.isNaN(n)&&(n=0);const c=parseInt(e,10)||0,d=n<0||Object.is(n,-0)?-c:c;return n*60+d}function Il(u){const e=Number(u);if(typeof u=="boolean"||u===""||!Number.isFinite(e))throw new v(`Invalid unit value ${u}`);return e}function Zr(u,e){const n={};for(const c in u)if(ar(u,c)){const d=u[c];if(d==null)continue;n[e(c)]=Il(d)}return n}function Er(u,e){const n=Math.trunc(Math.abs(u/60)),c=Math.trunc(Math.abs(u%60)),d=u>=0?"+":"-";switch(e){case"short":return`${d}${de(n,2)}:${de(c,2)}`;case"narrow":return`${d}${n}${c>0?`:${c}`:""}`;case"techie":return`${d}${de(n,2)}${de(c,2)}`;default:throw new RangeError(`Value format ${e} is out of range for property format`)}}function Yr(u){return K1(u,["hour","minute","second","millisecond"])}const Q1=["January","February","March","April","May","June","July","August","September","October","November","December"],Sl=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],eg=["J","F","M","A","M","J","J","A","S","O","N","D"];function xl(u){switch(u){case"narrow":return[...eg];case"short":return[...Sl];case"long":return[...Q1];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const Rl=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Ol=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],rg=["M","T","W","T","F","S","S"];function Al(u){switch(u){case"narrow":return[...rg];case"short":return[...Ol];case"long":return[...Rl];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const Ml=["AM","PM"],tg=["Before Christ","Anno Domini"],ng=["BC","AD"],ig=["B","A"];function Cl(u){switch(u){case"narrow":return[...ig];case"short":return[...ng];case"long":return[...tg];default:return null}}function ag(u){return Ml[u.hour<12?0:1]}function sg(u,e){return Al(e)[u.weekday-1]}function ug(u,e){return xl(e)[u.month-1]}function og(u,e){return Cl(e)[u.year<0?0:1]}function cg(u,e,n="always",c=!1){const d={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},g=["hours","minutes","seconds"].indexOf(u)===-1;if(n==="auto"&&g){const z=u==="days";switch(e){case 1:return z?"tomorrow":`next ${d[u][0]}`;case-1:return z?"yesterday":`last ${d[u][0]}`;case 0:return z?"today":`this ${d[u][0]}`}}const q=Object.is(e,-0)||e<0,_=Math.abs(e),T=_===1,M=d[u],F=c?T?M[1]:M[2]||M[1]:T?d[u][0]:u;return q?`${_} ${F} ago`:`in ${_} ${F}`}function Ll(u,e){let n="";for(const c of u)c.literal?n+=c.val:n+=e(c.val);return n}const lg={D:$,DD:E,DDD:C,DDDD:O,t:L,tt:A,ttt:k,tttt:B,T:N,TT:W,TTT:te,TTTT:G,f:j,ff:he,fff:ne,ffff:oe,F:Y,FF:P,FFF:pe,FFFF:ke};class be{static create(e,n={}){return new be(e,n)}static parseFormat(e){let n=null,c="",d=!1;const g=[];for(let q=0;q<e.length;q++){const _=e.charAt(q);_==="'"?((c.length>0||d)&&g.push({literal:d||/^\s+$/.test(c),val:c===""?"'":c}),n=null,c="",d=!d):d||_===n?c+=_:(c.length>0&&g.push({literal:/^\s+$/.test(c),val:c}),c=_,n=_)}return c.length>0&&g.push({literal:d||/^\s+$/.test(c),val:c}),g}static macroTokenToFormatOpts(e){return lg[e]}constructor(e,n){this.opts=n,this.loc=e,this.systemLoc=null}formatWithSystemDefault(e,n){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(e,{...this.opts,...n}).format()}dtFormatter(e,n={}){return this.loc.dtFormatter(e,{...this.opts,...n})}formatDateTime(e,n){return this.dtFormatter(e,n).format()}formatDateTimeParts(e,n){return this.dtFormatter(e,n).formatToParts()}formatInterval(e,n){return this.dtFormatter(e.start,n).dtf.formatRange(e.start.toJSDate(),e.end.toJSDate())}resolvedOptions(e,n){return this.dtFormatter(e,n).resolvedOptions()}num(e,n=0,c=void 0){if(this.opts.forceSimple)return de(e,n);const d={...this.opts};return n>0&&(d.padTo=n),c&&(d.signDisplay=c),this.loc.numberFormatter(d).format(e)}formatDateTimeFromString(e,n){const c=this.loc.listingMode()==="en",d=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",g=(D,me)=>this.loc.extract(e,D,me),q=D=>e.isOffsetFixed&&e.offset===0&&D.allowZ?"Z":e.isValid?e.zone.formatOffset(e.ts,D.format):"",_=()=>c?ag(e):g({hour:"numeric",hourCycle:"h12"},"dayperiod"),T=(D,me)=>c?ug(e,D):g(me?{month:D}:{month:D,day:"numeric"},"month"),M=(D,me)=>c?sg(e,D):g(me?{weekday:D}:{weekday:D,month:"long",day:"numeric"},"weekday"),F=D=>{const me=be.macroTokenToFormatOpts(D);return me?this.formatWithSystemDefault(e,me):D},z=D=>c?og(e,D):g({era:D},"era"),ae=D=>{switch(D){case"S":return this.num(e.millisecond);case"u":case"SSS":return this.num(e.millisecond,3);case"s":return this.num(e.second);case"ss":return this.num(e.second,2);case"uu":return this.num(Math.floor(e.millisecond/10),2);case"uuu":return this.num(Math.floor(e.millisecond/100));case"m":return this.num(e.minute);case"mm":return this.num(e.minute,2);case"h":return this.num(e.hour%12===0?12:e.hour%12);case"hh":return this.num(e.hour%12===0?12:e.hour%12,2);case"H":return this.num(e.hour);case"HH":return this.num(e.hour,2);case"Z":return q({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return q({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return q({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return e.zone.offsetName(e.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return e.zone.offsetName(e.ts,{format:"long",locale:this.loc.locale});case"z":return e.zoneName;case"a":return _();case"d":return d?g({day:"numeric"},"day"):this.num(e.day);case"dd":return d?g({day:"2-digit"},"day"):this.num(e.day,2);case"c":return this.num(e.weekday);case"ccc":return M("short",!0);case"cccc":return M("long",!0);case"ccccc":return M("narrow",!0);case"E":return this.num(e.weekday);case"EEE":return M("short",!1);case"EEEE":return M("long",!1);case"EEEEE":return M("narrow",!1);case"L":return d?g({month:"numeric",day:"numeric"},"month"):this.num(e.month);case"LL":return d?g({month:"2-digit",day:"numeric"},"month"):this.num(e.month,2);case"LLL":return T("short",!0);case"LLLL":return T("long",!0);case"LLLLL":return T("narrow",!0);case"M":return d?g({month:"numeric"},"month"):this.num(e.month);case"MM":return d?g({month:"2-digit"},"month"):this.num(e.month,2);case"MMM":return T("short",!1);case"MMMM":return T("long",!1);case"MMMMM":return T("narrow",!1);case"y":return d?g({year:"numeric"},"year"):this.num(e.year);case"yy":return d?g({year:"2-digit"},"year"):this.num(e.year.toString().slice(-2),2);case"yyyy":return d?g({year:"numeric"},"year"):this.num(e.year,4);case"yyyyyy":return d?g({year:"numeric"},"year"):this.num(e.year,6);case"G":return z("short");case"GG":return z("long");case"GGGGG":return z("narrow");case"kk":return this.num(e.weekYear.toString().slice(-2),2);case"kkkk":return this.num(e.weekYear,4);case"W":return this.num(e.weekNumber);case"WW":return this.num(e.weekNumber,2);case"n":return this.num(e.localWeekNumber);case"nn":return this.num(e.localWeekNumber,2);case"ii":return this.num(e.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(e.localWeekYear,4);case"o":return this.num(e.ordinal);case"ooo":return this.num(e.ordinal,3);case"q":return this.num(e.quarter);case"qq":return this.num(e.quarter,2);case"X":return this.num(Math.floor(e.ts/1e3));case"x":return this.num(e.ts);default:return F(D)}};return Ll(be.parseFormat(n),ae)}formatDurationFromString(e,n){const c=this.opts.signMode==="negativeLargestOnly"?-1:1,d=F=>{switch(F[0]){case"S":return"milliseconds";case"s":return"seconds";case"m":return"minutes";case"h":return"hours";case"d":return"days";case"w":return"weeks";case"M":return"months";case"y":return"years";default:return null}},g=(F,z)=>ae=>{const D=d(ae);if(D){const me=z.isNegativeDuration&&D!==z.largestUnit?c:1;let Ce;return this.opts.signMode==="negativeLargestOnly"&&D!==z.largestUnit?Ce="never":this.opts.signMode==="all"?Ce="always":Ce="auto",this.num(F.get(D)*me,ae.length,Ce)}else return ae},q=be.parseFormat(n),_=q.reduce((F,{literal:z,val:ae})=>z?F:F.concat(ae),[]),T=e.shiftTo(..._.map(d).filter(F=>F)),M={isNegativeDuration:T<0,largestUnit:Object.keys(T.values)[0]};return Ll(q,g(T,M))}}const kl=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function ur(...u){const e=u.reduce((n,c)=>n+c.source,"");return RegExp(`^${e}$`)}function or(...u){return e=>u.reduce(([n,c,d],g)=>{const[q,_,T]=g(e,d);return[{...n,...q},_||c,T]},[{},null,1]).slice(0,2)}function cr(u,...e){if(u==null)return[null,null];for(const[n,c]of e){const d=n.exec(u);if(d)return c(d)}return[null,null]}function Nl(...u){return(e,n)=>{const c={};let d;for(d=0;d<u.length;d++)c[u[d]]=Ge(e[n+d]);return[c,null,n+d]}}const Fl=/(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/,fg=`(?:${Fl.source}?(?:\\[(${kl.source})\\])?)?`,It=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,Pl=RegExp(`${It.source}${fg}`),St=RegExp(`(?:[Tt]${Pl.source})?`),hg=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,dg=/(\d{4})-?W(\d\d)(?:-?(\d))?/,mg=/(\d{4})-?(\d{3})/,vg=Nl("weekYear","weekNumber","weekDay"),yg=Nl("year","ordinal"),pg=/(\d{4})-(\d\d)-(\d\d)/,Dl=RegExp(`${It.source} ?(?:${Fl.source}|(${kl.source}))?`),gg=RegExp(`(?: ${Dl.source})?`);function lr(u,e,n){const c=u[e];return U(c)?n:Ge(c)}function bg(u,e){return[{year:lr(u,e),month:lr(u,e+1,1),day:lr(u,e+2,1)},null,e+3]}function fr(u,e){return[{hours:lr(u,e,0),minutes:lr(u,e+1,0),seconds:lr(u,e+2,0),milliseconds:$t(u[e+3])},null,e+4]}function Ir(u,e){const n=!u[e]&&!u[e+1],c=Gr(u[e+1],u[e+2]),d=n?null:x.instance(c);return[{},d,e+3]}function Sr(u,e){const n=u[e]?ge.create(u[e]):null;return[{},n,e+1]}const wg=RegExp(`^T?${It.source}$`),qg=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function _g(u){const[e,n,c,d,g,q,_,T,M]=u,F=e[0]==="-",z=T&&T[0]==="-",ae=(D,me=!1)=>D!==void 0&&(me||D&&F)?-D:D;return[{years:ae(Qe(n)),months:ae(Qe(c)),weeks:ae(Qe(d)),days:ae(Qe(g)),hours:ae(Qe(q)),minutes:ae(Qe(_)),seconds:ae(Qe(T),T==="-0"),milliseconds:ae($t(M),z)}]}const $g={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function xt(u,e,n,c,d,g,q){const _={year:e.length===2?Et(Ge(e)):Ge(e),month:Sl.indexOf(n)+1,day:Ge(c),hour:Ge(d),minute:Ge(g)};return q&&(_.second=Ge(q)),u&&(_.weekday=u.length>3?Rl.indexOf(u)+1:Ol.indexOf(u)+1),_}const Tg=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function Eg(u){const[,e,n,c,d,g,q,_,T,M,F,z]=u,ae=xt(e,d,c,n,g,q,_);let D;return T?D=$g[T]:M?D=0:D=Gr(F,z),[ae,new x(D)]}function Ig(u){return u.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const Sg=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,xg=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,Rg=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function Ul(u){const[,e,n,c,d,g,q,_]=u;return[xt(e,d,c,n,g,q,_),x.utcInstance]}function Og(u){const[,e,n,c,d,g,q,_]=u;return[xt(e,_,n,c,d,g,q),x.utcInstance]}const Ag=ur(hg,St),Mg=ur(dg,St),Cg=ur(mg,St),Lg=ur(Pl),Bl=or(bg,fr,Ir,Sr),kg=or(vg,fr,Ir,Sr),Ng=or(yg,fr,Ir,Sr),Fg=or(fr,Ir,Sr);function Pg(u){return cr(u,[Ag,Bl],[Mg,kg],[Cg,Ng],[Lg,Fg])}function Dg(u){return cr(Ig(u),[Tg,Eg])}function Ug(u){return cr(u,[Sg,Ul],[xg,Ul],[Rg,Og])}function Bg(u){return cr(u,[qg,_g])}const jg=or(fr);function Vg(u){return cr(u,[wg,jg])}const Wg=ur(pg,gg),zg=ur(Dl),Hg=or(fr,Ir,Sr);function Gg(u){return cr(u,[Wg,Bl],[zg,Hg])}const jl="Invalid Duration",Vl={weeks:{days:7,hours:168,minutes:10080,seconds:10080*60,milliseconds:10080*60*1e3},days:{hours:24,minutes:1440,seconds:1440*60,milliseconds:1440*60*1e3},hours:{minutes:60,seconds:3600,milliseconds:3600*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},Zg={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:2184*60,seconds:2184*60*60,milliseconds:2184*60*60*1e3},months:{weeks:4,days:30,hours:720,minutes:720*60,seconds:720*60*60,milliseconds:720*60*60*1e3},...Vl},Se=146097/400,hr=146097/4800,Yg={years:{quarters:4,months:12,weeks:Se/7,days:Se,hours:Se*24,minutes:Se*24*60,seconds:Se*24*60*60,milliseconds:Se*24*60*60*1e3},quarters:{months:3,weeks:Se/28,days:Se/4,hours:Se*24/4,minutes:Se*24*60/4,seconds:Se*24*60*60/4,milliseconds:Se*24*60*60*1e3/4},months:{weeks:hr/7,days:hr,hours:hr*24,minutes:hr*24*60,seconds:hr*24*60*60,milliseconds:hr*24*60*60*1e3},...Vl},er=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],Jg=er.slice(0).reverse();function je(u,e,n=!1){const c={values:n?e.values:{...u.values,...e.values||{}},loc:u.loc.clone(e.loc),conversionAccuracy:e.conversionAccuracy||u.conversionAccuracy,matrix:e.matrix||u.matrix};return new Z(c)}function Wl(u,e){var n;let c=(n=e.milliseconds)!=null?n:0;for(const d of Jg.slice(1))e[d]&&(c+=e[d]*u[d].milliseconds);return c}function zl(u,e){const n=Wl(u,e)<0?-1:1;er.reduceRight((c,d)=>{if(U(e[d]))return c;if(c){const g=e[c]*n,q=u[d][c],_=Math.floor(g/q);e[d]+=_*n,e[c]-=_*q*n}return d},null),er.reduce((c,d)=>{if(U(e[d]))return c;if(c){const g=e[c]%1;e[c]-=g,e[d]+=g*u[c][d]}return d},null)}function Hl(u){const e={};for(const[n,c]of Object.entries(u))c!==0&&(e[n]=c);return e}class Z{constructor(e){const n=e.conversionAccuracy==="longterm"||!1;let c=n?Yg:Zg;e.matrix&&(c=e.matrix),this.values=e.values,this.loc=e.loc||b.create(),this.conversionAccuracy=n?"longterm":"casual",this.invalid=e.invalid||null,this.matrix=c,this.isLuxonDuration=!0}static fromMillis(e,n){return Z.fromObject({milliseconds:e},n)}static fromObject(e,n={}){if(e==null||typeof e!="object")throw new v(`Duration.fromObject: argument expected to be an object, got ${e===null?"null":typeof e}`);return new Z({values:Zr(e,Z.normalizeUnit),loc:b.fromObject(n),conversionAccuracy:n.conversionAccuracy,matrix:n.matrix})}static fromDurationLike(e){if(He(e))return Z.fromMillis(e);if(Z.isDuration(e))return e;if(typeof e=="object")return Z.fromObject(e);throw new v(`Unknown duration argument ${e} of type ${typeof e}`)}static fromISO(e,n){const[c]=Bg(e);return c?Z.fromObject(c,n):Z.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static fromISOTime(e,n){const[c]=Vg(e);return c?Z.fromObject(c,n):Z.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static invalid(e,n=null){if(!e)throw new v("need to specify a reason the Duration is invalid");const c=e instanceof Ae?e:new Ae(e,n);if(ce.throwOnInvalid)throw new i(c);return new Z({invalid:c})}static normalizeUnit(e){const n={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[e&&e.toLowerCase()];if(!n)throw new f(e);return n}static isDuration(e){return e&&e.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(e,n={}){const c={...n,floor:n.round!==!1&&n.floor!==!1};return this.isValid?be.create(this.loc,c).formatDurationFromString(this,e):jl}toHuman(e={}){if(!this.isValid)return jl;const n=e.showZeros!==!1,c=er.map(d=>{const g=this.values[d];return U(g)||g===0&&!n?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...e,unit:d.slice(0,-1)}).format(g)}).filter(d=>d);return this.loc.listFormatter({type:"conjunction",style:e.listStyle||"narrow",...e}).format(c)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let e="P";return this.years!==0&&(e+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(e+=this.months+this.quarters*3+"M"),this.weeks!==0&&(e+=this.weeks+"W"),this.days!==0&&(e+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(e+="T"),this.hours!==0&&(e+=this.hours+"H"),this.minutes!==0&&(e+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(e+=Tt(this.seconds+this.milliseconds/1e3,3)+"S"),e==="P"&&(e+="T0S"),e}toISOTime(e={}){if(!this.isValid)return null;const n=this.toMillis();return n<0||n>=864e5?null:(e={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...e,includeOffset:!1},V.fromMillis(n,{zone:"UTC"}).toISOTime(e))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?Wl(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(e){if(!this.isValid)return this;const n=Z.fromDurationLike(e),c={};for(const d of er)(ar(n.values,d)||ar(this.values,d))&&(c[d]=n.get(d)+this.get(d));return je(this,{values:c},!0)}minus(e){if(!this.isValid)return this;const n=Z.fromDurationLike(e);return this.plus(n.negate())}mapUnits(e){if(!this.isValid)return this;const n={};for(const c of Object.keys(this.values))n[c]=Il(e(this.values[c],c));return je(this,{values:n},!0)}get(e){return this[Z.normalizeUnit(e)]}set(e){if(!this.isValid)return this;const n={...this.values,...Zr(e,Z.normalizeUnit)};return je(this,{values:n})}reconfigure({locale:e,numberingSystem:n,conversionAccuracy:c,matrix:d}={}){const q={loc:this.loc.clone({locale:e,numberingSystem:n}),matrix:d,conversionAccuracy:c};return je(this,q)}as(e){return this.isValid?this.shiftTo(e).get(e):NaN}normalize(){if(!this.isValid)return this;const e=this.toObject();return zl(this.matrix,e),je(this,{values:e},!0)}rescale(){if(!this.isValid)return this;const e=Hl(this.normalize().shiftToAll().toObject());return je(this,{values:e},!0)}shiftTo(...e){if(!this.isValid)return this;if(e.length===0)return this;e=e.map(q=>Z.normalizeUnit(q));const n={},c={},d=this.toObject();let g;for(const q of er)if(e.indexOf(q)>=0){g=q;let _=0;for(const M in c)_+=this.matrix[M][q]*c[M],c[M]=0;He(d[q])&&(_+=d[q]);const T=Math.trunc(_);n[q]=T,c[q]=(_*1e3-T*1e3)/1e3}else He(d[q])&&(c[q]=d[q]);for(const q in c)c[q]!==0&&(n[g]+=q===g?c[q]:c[q]/this.matrix[g][q]);return zl(this.matrix,n),je(this,{values:n},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const e={};for(const n of Object.keys(this.values))e[n]=this.values[n]===0?0:-this.values[n];return je(this,{values:e},!0)}removeZeros(){if(!this.isValid)return this;const e=Hl(this.values);return je(this,{values:e},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(e){if(!this.isValid||!e.isValid||!this.loc.equals(e.loc))return!1;function n(c,d){return c===void 0||c===0?d===void 0||d===0:c===d}for(const c of er)if(!n(this.values[c],e.values[c]))return!1;return!0}}const dr="Invalid Interval";function Kg(u,e){return!u||!u.isValid?le.invalid("missing or invalid start"):!e||!e.isValid?le.invalid("missing or invalid end"):e<u?le.invalid("end before start",`The end of an interval must be after its start, but you had start=${u.toISO()} and end=${e.toISO()}`):null}class le{constructor(e){this.s=e.start,this.e=e.end,this.invalid=e.invalid||null,this.isLuxonInterval=!0}static invalid(e,n=null){if(!e)throw new v("need to specify a reason the Interval is invalid");const c=e instanceof Ae?e:new Ae(e,n);if(ce.throwOnInvalid)throw new a(c);return new le({invalid:c})}static fromDateTimes(e,n){const c=Ar(e),d=Ar(n),g=Kg(c,d);return g??new le({start:c,end:d})}static after(e,n){const c=Z.fromDurationLike(n),d=Ar(e);return le.fromDateTimes(d,d.plus(c))}static before(e,n){const c=Z.fromDurationLike(n),d=Ar(e);return le.fromDateTimes(d.minus(c),d)}static fromISO(e,n){const[c,d]=(e||"").split("/",2);if(c&&d){let g,q;try{g=V.fromISO(c,n),q=g.isValid}catch{q=!1}let _,T;try{_=V.fromISO(d,n),T=_.isValid}catch{T=!1}if(q&&T)return le.fromDateTimes(g,_);if(q){const M=Z.fromISO(d,n);if(M.isValid)return le.after(g,M)}else if(T){const M=Z.fromISO(c,n);if(M.isValid)return le.before(_,M)}}return le.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static isInterval(e){return e&&e.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get lastDateTime(){return this.isValid&&this.e?this.e.minus(1):null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(e="milliseconds"){return this.isValid?this.toDuration(e).get(e):NaN}count(e="milliseconds",n){if(!this.isValid)return NaN;const c=this.start.startOf(e,n);let d;return n!=null&&n.useLocaleWeeks?d=this.end.reconfigure({locale:c.locale}):d=this.end,d=d.startOf(e,n),Math.floor(d.diff(c,e).get(e))+(d.valueOf()!==this.end.valueOf())}hasSame(e){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,e):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(e){return this.isValid?this.s>e:!1}isBefore(e){return this.isValid?this.e<=e:!1}contains(e){return this.isValid?this.s<=e&&this.e>e:!1}set({start:e,end:n}={}){return this.isValid?le.fromDateTimes(e||this.s,n||this.e):this}splitAt(...e){if(!this.isValid)return[];const n=e.map(Ar).filter(q=>this.contains(q)).sort((q,_)=>q.toMillis()-_.toMillis()),c=[];let{s:d}=this,g=0;for(;d<this.e;){const q=n[g]||this.e,_=+q>+this.e?this.e:q;c.push(le.fromDateTimes(d,_)),d=_,g+=1}return c}splitBy(e){const n=Z.fromDurationLike(e);if(!this.isValid||!n.isValid||n.as("milliseconds")===0)return[];let{s:c}=this,d=1,g;const q=[];for(;c<this.e;){const _=this.start.plus(n.mapUnits(T=>T*d));g=+_>+this.e?this.e:_,q.push(le.fromDateTimes(c,g)),c=g,d+=1}return q}divideEqually(e){return this.isValid?this.splitBy(this.length()/e).slice(0,e):[]}overlaps(e){return this.e>e.s&&this.s<e.e}abutsStart(e){return this.isValid?+this.e==+e.s:!1}abutsEnd(e){return this.isValid?+e.e==+this.s:!1}engulfs(e){return this.isValid?this.s<=e.s&&this.e>=e.e:!1}equals(e){return!this.isValid||!e.isValid?!1:this.s.equals(e.s)&&this.e.equals(e.e)}intersection(e){if(!this.isValid)return this;const n=this.s>e.s?this.s:e.s,c=this.e<e.e?this.e:e.e;return n>=c?null:le.fromDateTimes(n,c)}union(e){if(!this.isValid)return this;const n=this.s<e.s?this.s:e.s,c=this.e>e.e?this.e:e.e;return le.fromDateTimes(n,c)}static merge(e){const[n,c]=e.sort((d,g)=>d.s-g.s).reduce(([d,g],q)=>g?g.overlaps(q)||g.abutsStart(q)?[d,g.union(q)]:[d.concat([g]),q]:[d,q],[[],null]);return c&&n.push(c),n}static xor(e){let n=null,c=0;const d=[],g=e.map(T=>[{time:T.s,type:"s"},{time:T.e,type:"e"}]),q=Array.prototype.concat(...g),_=q.sort((T,M)=>T.time-M.time);for(const T of _)c+=T.type==="s"?1:-1,c===1?n=T.time:(n&&+n!=+T.time&&d.push(le.fromDateTimes(n,T.time)),n=null);return le.merge(d)}difference(...e){return le.xor([this].concat(e)).map(n=>this.intersection(n)).filter(n=>n&&!n.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:dr}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(e=$,n={}){return this.isValid?be.create(this.s.loc.clone(n),e).formatInterval(this):dr}toISO(e){return this.isValid?`${this.s.toISO(e)}/${this.e.toISO(e)}`:dr}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:dr}toISOTime(e){return this.isValid?`${this.s.toISOTime(e)}/${this.e.toISOTime(e)}`:dr}toFormat(e,{separator:n=" – "}={}){return this.isValid?`${this.s.toFormat(e)}${n}${this.e.toFormat(e)}`:dr}toDuration(e,n){return this.isValid?this.e.diff(this.s,e,n):Z.invalid(this.invalidReason)}mapEndpoints(e){return le.fromDateTimes(e(this.s),e(this.e))}}class xr{static hasDST(e=ce.defaultZone){const n=V.now().setZone(e).set({month:12});return!e.isUniversal&&n.offset!==n.set({month:6}).offset}static isValidIANAZone(e){return ge.isValidZone(e)}static normalizeZone(e){return J(e,ce.defaultZone)}static getStartOfWeek({locale:e=null,locObj:n=null}={}){return(n||b.create(e)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:e=null,locObj:n=null}={}){return(n||b.create(e)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:e=null,locObj:n=null}={}){return(n||b.create(e)).getWeekendDays().slice()}static months(e="long",{locale:n=null,numberingSystem:c=null,locObj:d=null,outputCalendar:g="gregory"}={}){return(d||b.create(n,c,g)).months(e)}static monthsFormat(e="long",{locale:n=null,numberingSystem:c=null,locObj:d=null,outputCalendar:g="gregory"}={}){return(d||b.create(n,c,g)).months(e,!0)}static weekdays(e="long",{locale:n=null,numberingSystem:c=null,locObj:d=null}={}){return(d||b.create(n,c,null)).weekdays(e)}static weekdaysFormat(e="long",{locale:n=null,numberingSystem:c=null,locObj:d=null}={}){return(d||b.create(n,c,null)).weekdays(e,!0)}static meridiems({locale:e=null}={}){return b.create(e).meridiems()}static eras(e="short",{locale:n=null}={}){return b.create(n,null,"gregory").eras(e)}static features(){return{relative:ql(),localeWeek:_l()}}}function Gl(u,e){const n=d=>d.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),c=n(e)-n(u);return Math.floor(Z.fromMillis(c).as("days"))}function Xg(u,e,n){const c=[["years",(T,M)=>M.year-T.year],["quarters",(T,M)=>M.quarter-T.quarter+(M.year-T.year)*4],["months",(T,M)=>M.month-T.month+(M.year-T.year)*12],["weeks",(T,M)=>{const F=Gl(T,M);return(F-F%7)/7}],["days",Gl]],d={},g=u;let q,_;for(const[T,M]of c)n.indexOf(T)>=0&&(q=T,d[T]=M(u,e),_=g.plus(d),_>e?(d[T]--,u=g.plus(d),u>e&&(_=u,d[T]--,u=g.plus(d))):u=_);return[u,d,_,q]}function Qg(u,e,n,c){let[d,g,q,_]=Xg(u,e,n);const T=e-d,M=n.filter(z=>["hours","minutes","seconds","milliseconds"].indexOf(z)>=0);M.length===0&&(q<e&&(q=d.plus({[_]:1})),q!==d&&(g[_]=(g[_]||0)+T/(q-d)));const F=Z.fromObject(g,c);return M.length>0?Z.fromMillis(T,c).shiftTo(...M).plus(F):F}const eb="missing Intl.DateTimeFormat.formatToParts support";function K(u,e=n=>n){return{regex:u,deser:([n])=>e(W1(n))}}const Zl="[  ]",Yl=new RegExp(Zl,"g");function rb(u){return u.replace(/\./g,"\\.?").replace(Yl,Zl)}function Jl(u){return u.replace(/\./g,"").replace(Yl," ").toLowerCase()}function Me(u,e){return u===null?null:{regex:RegExp(u.map(rb).join("|")),deser:([n])=>u.findIndex(c=>Jl(n)===Jl(c))+e}}function Kl(u,e){return{regex:u,deser:([,n,c])=>Gr(n,c),groups:e}}function Jr(u){return{regex:u,deser:([e])=>e}}function tb(u){return u.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function nb(u,e){const n=Oe(e),c=Oe(e,"{2}"),d=Oe(e,"{3}"),g=Oe(e,"{4}"),q=Oe(e,"{6}"),_=Oe(e,"{1,2}"),T=Oe(e,"{1,3}"),M=Oe(e,"{1,6}"),F=Oe(e,"{1,9}"),z=Oe(e,"{2,4}"),ae=Oe(e,"{4,6}"),D=Pe=>({regex:RegExp(tb(Pe.val)),deser:([vr])=>vr,literal:!0}),Ce=(Pe=>{if(u.literal)return D(Pe);switch(Pe.val){case"G":return Me(e.eras("short"),0);case"GG":return Me(e.eras("long"),0);case"y":return K(M);case"yy":return K(z,Et);case"yyyy":return K(g);case"yyyyy":return K(ae);case"yyyyyy":return K(q);case"M":return K(_);case"MM":return K(c);case"MMM":return Me(e.months("short",!0),1);case"MMMM":return Me(e.months("long",!0),1);case"L":return K(_);case"LL":return K(c);case"LLL":return Me(e.months("short",!1),1);case"LLLL":return Me(e.months("long",!1),1);case"d":return K(_);case"dd":return K(c);case"o":return K(T);case"ooo":return K(d);case"HH":return K(c);case"H":return K(_);case"hh":return K(c);case"h":return K(_);case"mm":return K(c);case"m":return K(_);case"q":return K(_);case"qq":return K(c);case"s":return K(_);case"ss":return K(c);case"S":return K(T);case"SSS":return K(d);case"u":return Jr(F);case"uu":return Jr(_);case"uuu":return K(n);case"a":return Me(e.meridiems(),0);case"kkkk":return K(g);case"kk":return K(z,Et);case"W":return K(_);case"WW":return K(c);case"E":case"c":return K(n);case"EEE":return Me(e.weekdays("short",!1),1);case"EEEE":return Me(e.weekdays("long",!1),1);case"ccc":return Me(e.weekdays("short",!0),1);case"cccc":return Me(e.weekdays("long",!0),1);case"Z":case"ZZ":return Kl(new RegExp(`([+-]${_.source})(?::(${c.source}))?`),2);case"ZZZ":return Kl(new RegExp(`([+-]${_.source})(${c.source})?`),2);case"z":return Jr(/[a-z_+-/]{1,256}?/i);case" ":return Jr(/[^\S\n\r]/);default:return D(Pe)}})(u)||{invalidReason:eb};return Ce.token=u,Ce}const ib={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function ab(u,e,n){const{type:c,value:d}=u;if(c==="literal"){const T=/^\s+$/.test(d);return{literal:!T,val:T?" ":d}}const g=e[c];let q=c;c==="hour"&&(e.hour12!=null?q=e.hour12?"hour12":"hour24":e.hourCycle!=null?e.hourCycle==="h11"||e.hourCycle==="h12"?q="hour12":q="hour24":q=n.hour12?"hour12":"hour24");let _=ib[q];if(typeof _=="object"&&(_=_[g]),_)return{literal:!1,val:_}}function sb(u){return[`^${u.map(n=>n.regex).reduce((n,c)=>`${n}(${c.source})`,"")}$`,u]}function ub(u,e,n){const c=u.match(e);if(c){const d={};let g=1;for(const q in n)if(ar(n,q)){const _=n[q],T=_.groups?_.groups+1:1;!_.literal&&_.token&&(d[_.token.val[0]]=_.deser(c.slice(g,g+T))),g+=T}return[c,d]}else return[c,{}]}function ob(u){const e=g=>{switch(g){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let n=null,c;return U(u.z)||(n=ge.create(u.z)),U(u.Z)||(n||(n=new x(u.Z)),c=u.Z),U(u.q)||(u.M=(u.q-1)*3+1),U(u.h)||(u.h<12&&u.a===1?u.h+=12:u.h===12&&u.a===0&&(u.h=0)),u.G===0&&u.y&&(u.y=-u.y),U(u.u)||(u.S=$t(u.u)),[Object.keys(u).reduce((g,q)=>{const _=e(q);return _&&(g[_]=u[q]),g},{}),n,c]}let Rt=null;function cb(){return Rt||(Rt=V.fromMillis(1555555555555)),Rt}function lb(u,e){if(u.literal)return u;const n=be.macroTokenToFormatOpts(u.val),c=rf(n,e);return c==null||c.includes(void 0)?u:c}function Xl(u,e){return Array.prototype.concat(...u.map(n=>lb(n,e)))}class Ql{constructor(e,n){if(this.locale=e,this.format=n,this.tokens=Xl(be.parseFormat(n),e),this.units=this.tokens.map(c=>nb(c,e)),this.disqualifyingUnit=this.units.find(c=>c.invalidReason),!this.disqualifyingUnit){const[c,d]=sb(this.units);this.regex=RegExp(c,"i"),this.handlers=d}}explainFromTokens(e){if(this.isValid){const[n,c]=ub(e,this.regex,this.handlers),[d,g,q]=c?ob(c):[null,null,void 0];if(ar(c,"a")&&ar(c,"H"))throw new l("Can't include meridiem when specifying 24-hour format");return{input:e,tokens:this.tokens,regex:this.regex,rawMatches:n,matches:c,result:d,zone:g,specificOffset:q}}else return{input:e,tokens:this.tokens,invalidReason:this.invalidReason}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}}function ef(u,e,n){return new Ql(u,n).explainFromTokens(e)}function fb(u,e,n){const{result:c,zone:d,specificOffset:g,invalidReason:q}=ef(u,e,n);return[c,d,g,q]}function rf(u,e){if(!u)return null;const c=be.create(e,u).dtFormatter(cb()),d=c.formatToParts(),g=c.resolvedOptions();return d.map(q=>ab(q,u,g))}const Ot="Invalid DateTime",tf=864e13;function Rr(u){return new Ae("unsupported zone",`the zone "${u.name}" is not supported`)}function At(u){return u.weekData===null&&(u.weekData=Vr(u.c)),u.weekData}function Mt(u){return u.localWeekData===null&&(u.localWeekData=Vr(u.c,u.loc.getMinDaysInFirstWeek(),u.loc.getStartOfWeek())),u.localWeekData}function rr(u,e){const n={ts:u.ts,zone:u.zone,c:u.c,o:u.o,loc:u.loc,invalid:u.invalid};return new V({...n,...e,old:n})}function nf(u,e,n){let c=u-e*60*1e3;const d=n.offset(c);if(e===d)return[c,e];c-=(d-e)*60*1e3;const g=n.offset(c);return d===g?[c,d]:[u-Math.min(d,g)*60*1e3,Math.max(d,g)]}function Kr(u,e){u+=e*60*1e3;const n=new Date(u);return{year:n.getUTCFullYear(),month:n.getUTCMonth()+1,day:n.getUTCDate(),hour:n.getUTCHours(),minute:n.getUTCMinutes(),second:n.getUTCSeconds(),millisecond:n.getUTCMilliseconds()}}function Xr(u,e,n){return nf(Hr(u),e,n)}function af(u,e){const n=u.o,c=u.c.year+Math.trunc(e.years),d=u.c.month+Math.trunc(e.months)+Math.trunc(e.quarters)*3,g={...u.c,year:c,month:d,day:Math.min(u.c.day,zr(c,d))+Math.trunc(e.days)+Math.trunc(e.weeks)*7},q=Z.fromObject({years:e.years-Math.trunc(e.years),quarters:e.quarters-Math.trunc(e.quarters),months:e.months-Math.trunc(e.months),weeks:e.weeks-Math.trunc(e.weeks),days:e.days-Math.trunc(e.days),hours:e.hours,minutes:e.minutes,seconds:e.seconds,milliseconds:e.milliseconds}).as("milliseconds"),_=Hr(g);let[T,M]=nf(_,n,u.zone);return q!==0&&(T+=q,M=u.zone.offset(T)),{ts:T,o:M}}function mr(u,e,n,c,d,g){const{setZone:q,zone:_}=n;if(u&&Object.keys(u).length!==0||e){const T=e||_,M=V.fromObject(u,{...n,zone:T,specificOffset:g});return q?M:M.setZone(_)}else return V.invalid(new Ae("unparsable",`the input "${d}" can't be parsed as ${c}`))}function Qr(u,e,n=!0){return u.isValid?be.create(b.create("en-US"),{allowZ:n,forceSimple:!0}).formatDateTimeFromString(u,e):null}function Ct(u,e,n){const c=u.c.year>9999||u.c.year<0;let d="";if(c&&u.c.year>=0&&(d+="+"),d+=de(u.c.year,c?6:4),n==="year")return d;if(e){if(d+="-",d+=de(u.c.month),n==="month")return d;d+="-"}else if(d+=de(u.c.month),n==="month")return d;return d+=de(u.c.day),d}function sf(u,e,n,c,d,g,q){let _=!n||u.c.millisecond!==0||u.c.second!==0,T="";switch(q){case"day":case"month":case"year":break;default:if(T+=de(u.c.hour),q==="hour")break;if(e){if(T+=":",T+=de(u.c.minute),q==="minute")break;_&&(T+=":",T+=de(u.c.second))}else{if(T+=de(u.c.minute),q==="minute")break;_&&(T+=de(u.c.second))}if(q==="second")break;_&&(!c||u.c.millisecond!==0)&&(T+=".",T+=de(u.c.millisecond,3))}return d&&(u.isOffsetFixed&&u.offset===0&&!g?T+="Z":u.o<0?(T+="-",T+=de(Math.trunc(-u.o/60)),T+=":",T+=de(Math.trunc(-u.o%60))):(T+="+",T+=de(Math.trunc(u.o/60)),T+=":",T+=de(Math.trunc(u.o%60)))),g&&(T+="["+u.zone.ianaName+"]"),T}const uf={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},hb={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},db={ordinal:1,hour:0,minute:0,second:0,millisecond:0},et=["year","month","day","hour","minute","second","millisecond"],mb=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],vb=["year","ordinal","hour","minute","second","millisecond"];function rt(u){const e={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[u.toLowerCase()];if(!e)throw new f(u);return e}function of(u){switch(u.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return rt(u)}}function yb(u){if(Or===void 0&&(Or=ce.now()),u.type!=="iana")return u.offset(Or);const e=u.name;let n=Lt.get(e);return n===void 0&&(n=u.offset(Or),Lt.set(e,n)),n}function cf(u,e){const n=J(e.zone,ce.defaultZone);if(!n.isValid)return V.invalid(Rr(n));const c=b.fromObject(e);let d,g;if(U(u.year))d=ce.now();else{for(const T of et)U(u[T])&&(u[T]=uf[T]);const q=bl(u)||wl(u);if(q)return V.invalid(q);const _=yb(n);[d,g]=Xr(u,_,n)}return new V({ts:d,zone:n,loc:c,o:g})}function lf(u,e,n){const c=U(n.round)?!0:n.round,d=U(n.rounding)?"trunc":n.rounding,g=(_,T)=>(_=Tt(_,c||n.calendary?0:2,n.calendary?"round":d),e.loc.clone(n).relFormatter(n).format(_,T)),q=_=>n.calendary?e.hasSame(u,_)?0:e.startOf(_).diff(u.startOf(_),_).get(_):e.diff(u,_).get(_);if(n.unit)return g(q(n.unit),n.unit);for(const _ of n.units){const T=q(_);if(Math.abs(T)>=1)return g(T,_)}return g(u>e?-0:0,n.units[n.units.length-1])}function ff(u){let e={},n;return u.length>0&&typeof u[u.length-1]=="object"?(e=u[u.length-1],n=Array.from(u).slice(0,u.length-1)):n=Array.from(u),[e,n]}let Or;const Lt=new Map;class V{constructor(e){const n=e.zone||ce.defaultZone;let c=e.invalid||(Number.isNaN(e.ts)?new Ae("invalid input"):null)||(n.isValid?null:Rr(n));this.ts=U(e.ts)?ce.now():e.ts;let d=null,g=null;if(!c)if(e.old&&e.old.ts===this.ts&&e.old.zone.equals(n))[d,g]=[e.old.c,e.old.o];else{const _=He(e.o)&&!e.old?e.o:n.offset(this.ts);d=Kr(this.ts,_),c=Number.isNaN(d.year)?new Ae("invalid input"):null,d=c?null:d,g=c?null:_}this._zone=n,this.loc=e.loc||b.create(),this.invalid=c,this.weekData=null,this.localWeekData=null,this.c=d,this.o=g,this.isLuxonDateTime=!0}static now(){return new V({})}static local(){const[e,n]=ff(arguments),[c,d,g,q,_,T,M]=n;return cf({year:c,month:d,day:g,hour:q,minute:_,second:T,millisecond:M},e)}static utc(){const[e,n]=ff(arguments),[c,d,g,q,_,T,M]=n;return e.zone=x.utcInstance,cf({year:c,month:d,day:g,hour:q,minute:_,second:T,millisecond:M},e)}static fromJSDate(e,n={}){const c=Y1(e)?e.valueOf():NaN;if(Number.isNaN(c))return V.invalid("invalid input");const d=J(n.zone,ce.defaultZone);return d.isValid?new V({ts:c,zone:d,loc:b.fromObject(n)}):V.invalid(Rr(d))}static fromMillis(e,n={}){if(He(e))return e<-tf||e>tf?V.invalid("Timestamp out of range"):new V({ts:e,zone:J(n.zone,ce.defaultZone),loc:b.fromObject(n)});throw new v(`fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`)}static fromSeconds(e,n={}){if(He(e))return new V({ts:e*1e3,zone:J(n.zone,ce.defaultZone),loc:b.fromObject(n)});throw new v("fromSeconds requires a numerical input")}static fromObject(e,n={}){e=e||{};const c=J(n.zone,ce.defaultZone);if(!c.isValid)return V.invalid(Rr(c));const d=b.fromObject(n),g=Zr(e,of),{minDaysInFirstWeek:q,startOfWeek:_}=gl(g,d),T=ce.now(),M=U(n.specificOffset)?c.offset(T):n.specificOffset,F=!U(g.ordinal),z=!U(g.year),ae=!U(g.month)||!U(g.day),D=z||ae,me=g.weekYear||g.weekNumber;if((D||F)&&me)throw new l("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(ae&&F)throw new l("Can't mix ordinal dates with month/day");const Ce=me||g.weekday&&!D;let Pe,vr,Mr=Kr(T,M);Ce?(Pe=mb,vr=hb,Mr=Vr(Mr,q,_)):F?(Pe=vb,vr=db,Mr=qt(Mr)):(Pe=et,vr=uf);let hf=!1;for(const Lr of Pe){const _b=g[Lr];U(_b)?hf?g[Lr]=vr[Lr]:g[Lr]=Mr[Lr]:hf=!0}const gb=Ce?H1(g,q,_):F?G1(g):bl(g),df=gb||wl(g);if(df)return V.invalid(df);const bb=Ce?yl(g,q,_):F?pl(g):g,[wb,qb]=Xr(bb,M,c),Cr=new V({ts:wb,zone:c,o:qb,loc:d});return g.weekday&&D&&e.weekday!==Cr.weekday?V.invalid("mismatched weekday",`you can't specify both a weekday of ${g.weekday} and a date of ${Cr.toISO()}`):Cr.isValid?Cr:V.invalid(Cr.invalid)}static fromISO(e,n={}){const[c,d]=Pg(e);return mr(c,d,n,"ISO 8601",e)}static fromRFC2822(e,n={}){const[c,d]=Dg(e);return mr(c,d,n,"RFC 2822",e)}static fromHTTP(e,n={}){const[c,d]=Ug(e);return mr(c,d,n,"HTTP",n)}static fromFormat(e,n,c={}){if(U(e)||U(n))throw new v("fromFormat requires an input string and a format");const{locale:d=null,numberingSystem:g=null}=c,q=b.fromOpts({locale:d,numberingSystem:g,defaultToEN:!0}),[_,T,M,F]=fb(q,e,n);return F?V.invalid(F):mr(_,T,c,`format ${n}`,e,M)}static fromString(e,n,c={}){return V.fromFormat(e,n,c)}static fromSQL(e,n={}){const[c,d]=Gg(e);return mr(c,d,n,"SQL",e)}static invalid(e,n=null){if(!e)throw new v("need to specify a reason the DateTime is invalid");const c=e instanceof Ae?e:new Ae(e,n);if(ce.throwOnInvalid)throw new t(c);return new V({invalid:c})}static isDateTime(e){return e&&e.isLuxonDateTime||!1}static parseFormatForOpts(e,n={}){const c=rf(e,b.fromObject(n));return c?c.map(d=>d?d.val:null).join(""):null}static expandFormat(e,n={}){return Xl(be.parseFormat(e),b.fromObject(n)).map(d=>d.val).join("")}static resetCache(){Or=void 0,Lt.clear()}get(e){return this[e]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?At(this).weekYear:NaN}get weekNumber(){return this.isValid?At(this).weekNumber:NaN}get weekday(){return this.isValid?At(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?Mt(this).weekday:NaN}get localWeekNumber(){return this.isValid?Mt(this).weekNumber:NaN}get localWeekYear(){return this.isValid?Mt(this).weekYear:NaN}get ordinal(){return this.isValid?qt(this.c).ordinal:NaN}get monthShort(){return this.isValid?xr.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?xr.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?xr.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?xr.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const e=864e5,n=6e4,c=Hr(this.c),d=this.zone.offset(c-e),g=this.zone.offset(c+e),q=this.zone.offset(c-d*n),_=this.zone.offset(c-g*n);if(q===_)return[this];const T=c-q*n,M=c-_*n,F=Kr(T,q),z=Kr(M,_);return F.hour===z.hour&&F.minute===z.minute&&F.second===z.second&&F.millisecond===z.millisecond?[rr(this,{ts:T}),rr(this,{ts:M})]:[this]}get isInLeapYear(){return $r(this.year)}get daysInMonth(){return zr(this.year,this.month)}get daysInYear(){return this.isValid?sr(this.year):NaN}get weeksInWeekYear(){return this.isValid?Tr(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?Tr(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(e={}){const{locale:n,numberingSystem:c,calendar:d}=be.create(this.loc.clone(e),e).resolvedOptions(this);return{locale:n,numberingSystem:c,outputCalendar:d}}toUTC(e=0,n={}){return this.setZone(x.instance(e),n)}toLocal(){return this.setZone(ce.defaultZone)}setZone(e,{keepLocalTime:n=!1,keepCalendarTime:c=!1}={}){if(e=J(e,ce.defaultZone),e.equals(this.zone))return this;if(e.isValid){let d=this.ts;if(n||c){const g=e.offset(this.ts),q=this.toObject();[d]=Xr(q,g,e)}return rr(this,{ts:d,zone:e})}else return V.invalid(Rr(e))}reconfigure({locale:e,numberingSystem:n,outputCalendar:c}={}){const d=this.loc.clone({locale:e,numberingSystem:n,outputCalendar:c});return rr(this,{loc:d})}setLocale(e){return this.reconfigure({locale:e})}set(e){if(!this.isValid)return this;const n=Zr(e,of),{minDaysInFirstWeek:c,startOfWeek:d}=gl(n,this.loc),g=!U(n.weekYear)||!U(n.weekNumber)||!U(n.weekday),q=!U(n.ordinal),_=!U(n.year),T=!U(n.month)||!U(n.day),M=_||T,F=n.weekYear||n.weekNumber;if((M||q)&&F)throw new l("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(T&&q)throw new l("Can't mix ordinal dates with month/day");let z;g?z=yl({...Vr(this.c,c,d),...n},c,d):U(n.ordinal)?(z={...this.toObject(),...n},U(n.day)&&(z.day=Math.min(zr(z.year,z.month),z.day))):z=pl({...qt(this.c),...n});const[ae,D]=Xr(z,this.o,this.zone);return rr(this,{ts:ae,o:D})}plus(e){if(!this.isValid)return this;const n=Z.fromDurationLike(e);return rr(this,af(this,n))}minus(e){if(!this.isValid)return this;const n=Z.fromDurationLike(e).negate();return rr(this,af(this,n))}startOf(e,{useLocaleWeeks:n=!1}={}){if(!this.isValid)return this;const c={},d=Z.normalizeUnit(e);switch(d){case"years":c.month=1;case"quarters":case"months":c.day=1;case"weeks":case"days":c.hour=0;case"hours":c.minute=0;case"minutes":c.second=0;case"seconds":c.millisecond=0;break}if(d==="weeks")if(n){const g=this.loc.getStartOfWeek(),{weekday:q}=this;q<g&&(c.weekNumber=this.weekNumber-1),c.weekday=g}else c.weekday=1;if(d==="quarters"){const g=Math.ceil(this.month/3);c.month=(g-1)*3+1}return this.set(c)}endOf(e,n){return this.isValid?this.plus({[e]:1}).startOf(e,n).minus(1):this}toFormat(e,n={}){return this.isValid?be.create(this.loc.redefaultToEN(n)).formatDateTimeFromString(this,e):Ot}toLocaleString(e=$,n={}){return this.isValid?be.create(this.loc.clone(n),e).formatDateTime(this):Ot}toLocaleParts(e={}){return this.isValid?be.create(this.loc.clone(e),e).formatDateTimeParts(this):[]}toISO({format:e="extended",suppressSeconds:n=!1,suppressMilliseconds:c=!1,includeOffset:d=!0,extendedZone:g=!1,precision:q="milliseconds"}={}){if(!this.isValid)return null;q=rt(q);const _=e==="extended";let T=Ct(this,_,q);return et.indexOf(q)>=3&&(T+="T"),T+=sf(this,_,n,c,d,g,q),T}toISODate({format:e="extended",precision:n="day"}={}){return this.isValid?Ct(this,e==="extended",rt(n)):null}toISOWeekDate(){return Qr(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:e=!1,suppressSeconds:n=!1,includeOffset:c=!0,includePrefix:d=!1,extendedZone:g=!1,format:q="extended",precision:_="milliseconds"}={}){return this.isValid?(_=rt(_),(d&&et.indexOf(_)>=3?"T":"")+sf(this,q==="extended",n,e,c,g,_)):null}toRFC2822(){return Qr(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return Qr(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?Ct(this,!0):null}toSQLTime({includeOffset:e=!0,includeZone:n=!1,includeOffsetSpace:c=!0}={}){let d="HH:mm:ss.SSS";return(n||e)&&(c&&(d+=" "),n?d+="z":e&&(d+="ZZ")),Qr(this,d,!0)}toSQL(e={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(e)}`:null}toString(){return this.isValid?this.toISO():Ot}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(e={}){if(!this.isValid)return{};const n={...this.c};return e.includeConfig&&(n.outputCalendar=this.outputCalendar,n.numberingSystem=this.loc.numberingSystem,n.locale=this.loc.locale),n}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(e,n="milliseconds",c={}){if(!this.isValid||!e.isValid)return Z.invalid("created by diffing an invalid DateTime");const d={locale:this.locale,numberingSystem:this.numberingSystem,...c},g=J1(n).map(Z.normalizeUnit),q=e.valueOf()>this.valueOf(),_=q?this:e,T=q?e:this,M=Qg(_,T,g,d);return q?M.negate():M}diffNow(e="milliseconds",n={}){return this.diff(V.now(),e,n)}until(e){return this.isValid?le.fromDateTimes(this,e):this}hasSame(e,n,c){if(!this.isValid)return!1;const d=e.valueOf(),g=this.setZone(e.zone,{keepLocalTime:!0});return g.startOf(n,c)<=d&&d<=g.endOf(n,c)}equals(e){return this.isValid&&e.isValid&&this.valueOf()===e.valueOf()&&this.zone.equals(e.zone)&&this.loc.equals(e.loc)}toRelative(e={}){if(!this.isValid)return null;const n=e.base||V.fromObject({},{zone:this.zone}),c=e.padding?this<n?-e.padding:e.padding:0;let d=["years","months","days","hours","minutes","seconds"],g=e.unit;return Array.isArray(e.unit)&&(d=e.unit,g=void 0),lf(n,this.plus(c),{...e,numeric:"always",units:d,unit:g})}toRelativeCalendar(e={}){return this.isValid?lf(e.base||V.fromObject({},{zone:this.zone}),this,{...e,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...e){if(!e.every(V.isDateTime))throw new v("min requires all arguments be DateTimes");return $l(e,n=>n.valueOf(),Math.min)}static max(...e){if(!e.every(V.isDateTime))throw new v("max requires all arguments be DateTimes");return $l(e,n=>n.valueOf(),Math.max)}static fromFormatExplain(e,n,c={}){const{locale:d=null,numberingSystem:g=null}=c,q=b.fromOpts({locale:d,numberingSystem:g,defaultToEN:!0});return ef(q,e,n)}static fromStringExplain(e,n,c={}){return V.fromFormatExplain(e,n,c)}static buildFormatParser(e,n={}){const{locale:c=null,numberingSystem:d=null}=n,g=b.fromOpts({locale:c,numberingSystem:d,defaultToEN:!0});return new Ql(g,e)}static fromFormatParser(e,n,c={}){if(U(e)||U(n))throw new v("fromFormatParser requires an input string and a format parser");const{locale:d=null,numberingSystem:g=null}=c,q=b.fromOpts({locale:d,numberingSystem:g,defaultToEN:!0});if(!q.equals(n.locale))throw new v(`fromFormatParser called with a locale of ${q}, but the format parser was created for ${n.locale}`);const{result:_,zone:T,specificOffset:M,invalidReason:F}=n.explainFromTokens(e);return F?V.invalid(F):mr(_,T,c,`format ${n.format}`,e,M)}static get DATE_SHORT(){return $}static get DATE_MED(){return E}static get DATE_MED_WITH_WEEKDAY(){return w}static get DATE_FULL(){return C}static get DATE_HUGE(){return O}static get TIME_SIMPLE(){return L}static get TIME_WITH_SECONDS(){return A}static get TIME_WITH_SHORT_OFFSET(){return k}static get TIME_WITH_LONG_OFFSET(){return B}static get TIME_24_SIMPLE(){return N}static get TIME_24_WITH_SECONDS(){return W}static get TIME_24_WITH_SHORT_OFFSET(){return te}static get TIME_24_WITH_LONG_OFFSET(){return G}static get DATETIME_SHORT(){return j}static get DATETIME_SHORT_WITH_SECONDS(){return Y}static get DATETIME_MED(){return he}static get DATETIME_MED_WITH_SECONDS(){return P}static get DATETIME_MED_WITH_WEEKDAY(){return we}static get DATETIME_FULL(){return ne}static get DATETIME_FULL_WITH_SECONDS(){return pe}static get DATETIME_HUGE(){return oe}static get DATETIME_HUGE_WITH_SECONDS(){return ke}}function Ar(u){if(V.isDateTime(u))return u;if(u&&u.valueOf&&He(u.valueOf()))return V.fromJSDate(u);if(u&&typeof u=="object")return V.fromObject(u);throw new v(`Unknown datetime argument: ${u}, of type ${typeof u}`)}const pb="3.7.2";return qe.DateTime=V,qe.Duration=Z,qe.FixedOffsetZone=x,qe.IANAZone=ge,qe.Info=xr,qe.Interval=le,qe.InvalidZone=H,qe.Settings=ce,qe.SystemZone=xe,qe.VERSION=pb,qe.Zone=se,qe}var Lc,v0;function hE(){if(v0)return Lc;v0=1;const{DateTime:r}=fE(),{IncorrectUsageError:t}=A1,a={invalidInterval:'Invalid interval specified. Only "month" value is accepted.'};return Lc={lastPeriodStart:(f,v)=>{if(v==="month"){const h=r.fromISO(f,{zone:"UTC"}),p=r.now().setZone("UTC"),R=Math.floor(p.diff(h,"months").months);return h.plus({months:R}).toISO()}throw new t({message:a.invalidInterval})},SUPPORTED_INTERVALS:["month"]},Lc}var kc,y0;function dE(){if(y0)return kc;y0=1;const r=OT(),t=lE(),{lastPeriodStart:a,SUPPORTED_INTERVALS:i}=hE(),l=/{{([\s\S]+?)}}/g;class f{constructor({name:$,error:E,helpLink:w,db:C,errors:O}){this.name=$,this.error=E,this.helpLink=w,this.db=C,this.errors=O}generateError(){let $={errorDetails:{name:this.name}};return this.helpLink&&($.help=this.helpLink),$}}class v extends f{constructor({name:$,config:E,helpLink:w,db:C,errors:O}){if(super({name:$,error:E.error||"",helpLink:w,db:C,errors:O}),E.max===void 0)throw new O.IncorrectUsageError({message:"Attempted to setup a max limit without a limit"});if(!E.currentCountQuery)throw new O.IncorrectUsageError({message:"Attempted to setup a max limit without a current count query"});this.currentCountQueryFn=E.currentCountQuery,this.max=E.max,this.formatter=E.formatter,this.fallbackMessage=`This action would exceed the ${r(this.name)} limit on your current plan.`}generateError($){let E=super.generateError();if(E.message=this.fallbackMessage,this.error){const w=this.formatter||Intl.NumberFormat().format;try{E.message=t(this.error,{interpolate:l})({max:w(this.max),count:w($),name:this.name})}catch{E.message=this.fallbackMessage}}return E.errorDetails.limit=this.max,E.errorDetails.total=$,new this.errors.HostLimitError(E)}async currentCountQuery($={}){return await this.currentCountQueryFn($.transacting??this.db?.knex)}async errorIfWouldGoOverLimit($={}){const{max:E,addedCount:w=1}=$;let C=await this.currentCountQuery($);if(C+w>(E||this.max))throw this.generateError(C)}async errorIfIsOverLimit($={}){const E=$.currentCount||await this.currentCountQuery($);if(E>($.max||this.max))throw this.generateError(E)}}class h extends f{constructor({name:$,config:E,helpLink:w,db:C,errors:O}){if(super({name:$,error:E.error||"",helpLink:w,db:C,errors:O}),E.maxPeriodic===void 0)throw new O.IncorrectUsageError({message:"Attempted to setup a periodic max limit without a limit"});if(!E.currentCountQuery)throw new O.IncorrectUsageError({message:"Attempted to setup a periodic max limit without a current count query"});if(!E.interval)throw new O.IncorrectUsageError({message:"Attempted to setup a periodic max limit without an interval"});if(!i.includes(E.interval))throw new O.IncorrectUsageError({message:`Attempted to setup a periodic max limit without unsupported interval. Please specify one of: ${i}`});if(!E.startDate)throw new O.IncorrectUsageError({message:"Attempted to setup a periodic max limit without a start date"});this.currentCountQueryFn=E.currentCountQuery,this.maxPeriodic=E.maxPeriodic,this.interval=E.interval,this.startDate=E.startDate,this.fallbackMessage=`This action would exceed the ${r(this.name)} limit on your current plan.`}generateError($){let E=super.generateError();if(E.message=this.fallbackMessage,this.error)try{E.message=t(this.error,{interpolate:l})({max:Intl.NumberFormat().format(this.maxPeriodic),count:Intl.NumberFormat().format($),name:this.name})}catch{E.message=this.fallbackMessage}return E.errorDetails.limit=this.maxPeriodic,E.errorDetails.total=$,new this.errors.HostLimitError(E)}async currentCountQuery($={}){const E=a(this.startDate,this.interval);return await this.currentCountQueryFn($.transacting?$.transacting:this.db?this.db.knex:void 0,E)}async errorIfWouldGoOverLimit($={}){const{max:E,addedCount:w=1}=$;let C=await this.currentCountQuery($);if(C+w>(E||this.maxPeriodic))throw this.generateError(C)}async errorIfIsOverLimit($={}){const{max:E}=$;let w=await this.currentCountQuery($);if(w>(E||this.maxPeriodic))throw this.generateError(w)}}class p extends f{constructor({name:$,config:E,helpLink:w,db:C,errors:O}){super({name:$,error:E.error||"",helpLink:w,db:C,errors:O});const L=r($.replace(/^limit/,""));this.disabled=E.disabled,this.fallbackMessage=`Your plan does not support ${L}. Please upgrade to enable ${L}.`}generateError(){let $=super.generateError();return this.error?$.message=this.error:$.message=this.fallbackMessage,new this.errors.HostLimitError($)}async errorIfWouldGoOverLimit(){if(this.disabled)throw this.generateError()}async errorIfIsOverLimit(){}isDisabled(){return!!this.disabled}}class R extends f{constructor({name:$,config:E,helpLink:w,errors:C}){if(super({name:$,error:E.error||"",helpLink:w,errors:C}),!E.allowlist||!E.allowlist.length)throw new this.errors.IncorrectUsageError({message:"Attempted to setup an allowlist limit without an allowlist"});this.allowlist=E.allowlist,this.fallbackMessage=`This action would exceed the ${r(this.name)} limit on your current plan.`}generateError(){let $=super.generateError();return this.error?$.message=this.error:$.message=this.fallbackMessage,new this.errors.HostLimitError($)}async errorIfWouldGoOverLimit($){if(!$||!$.value)throw new this.errors.IncorrectUsageError({message:"Attempted to check an allowlist limit without a value"});if(!this.allowlist.includes($.value))throw this.generateError()}async errorIfIsOverLimit($){if(!$||!$.value)throw new this.errors.IncorrectUsageError({message:"Attempted to check an allowlist limit without a value"});if(!this.allowlist.includes($.value))throw this.generateError()}}return kc={MaxLimit:v,MaxPeriodicLimit:h,FlagLimit:p,AllowlistLimit:R},kc}var Nc,p0;function mE(){return p0||(p0=1,Nc={members:{currentCountQuery:async r=>(await r("members").count("id",{as:"count"}).first()).count},newsletters:{currentCountQuery:async r=>(await r("newsletters").count("id",{as:"count"}).where("status","=","active").first()).count},emails:{currentCountQuery:async(r,t)=>(await r("emails").sum("email_count",{as:"count"}).where("created_at",">=",t).first()).count},staff:{currentCountQuery:async r=>(await r("users").select("users.id").leftJoin("roles_users","users.id","roles_users.user_id").leftJoin("roles","roles_users.role_id","roles.id").whereNot("roles.name","Contributor").andWhereNot("users.status","inactive").union([r("invites").select("invites.id").leftJoin("roles","invites.role_id","roles.id").whereNot("roles.name","Contributor")])).length},customIntegrations:{},customThemes:{},uploads:{currentCountQuery:()=>{},formatter:r=>`${r/1e6}MB`},limitStripeConnect:{},limitAnalytics:{},limitSocialWeb:{}}),Nc}var Fc,g0;function vE(){if(g0)return Fc;g0=1;const r=Vb(),t=Tw(),{IncorrectUsageError:a}=A1,{MaxLimit:i,MaxPeriodicLimit:l,FlagLimit:f,AllowlistLimit:v}=dE(),h=mE(),p={missingErrorsConfig:"Config Missing: 'errors' is required.",noSubscriptionParameter:"Attempted to setup a periodic max limit without a subscription"};class R{constructor(){this.limits={}}loadLimits({limits:$={},subscription:E,helpLink:w,db:C,errors:O}){if(!O)throw new a({message:p.missingErrorsConfig});this.errors=O,this.limits={},Object.keys($).forEach(L=>{if(L=r(L),h[L]){let A=Object.assign({},h[L],$[L]);if(t(A,"allowlist"))this.limits[L]=new v({name:L,config:A,helpLink:w,errors:O});else if(t(A,"max"))this.limits[L]=new i({name:L,config:A,helpLink:w,db:C,errors:O});else if(t(A,"maxPeriodic")){if(E===void 0)throw new a({message:p.noSubscriptionParameter});const k=Object.assign({},A,E);this.limits[L]=new l({name:L,config:k,helpLink:w,db:C,errors:O})}else this.limits[L]=new f({name:L,config:A,helpLink:w,errors:O})}})}isLimited($){return!!this.limits[r($)]}isDisabled($){if(!this.isLimited($))return;const E=this.limits[r($)];if(typeof E.isDisabled!="function")throw new a({message:`Limit ${$} does not support .isDisabled()`});return E.isDisabled()}async checkIsOverLimit($,E={}){if(this.isLimited($))try{return await this.limits[$].errorIfIsOverLimit(E),!1}catch(w){if(w instanceof this.errors.HostLimitError)return!0;throw w}}async checkWouldGoOverLimit($,E={}){if(this.isLimited($))try{return await this.limits[$].errorIfWouldGoOverLimit(E),!1}catch(w){if(w instanceof this.errors.HostLimitError)return!0;throw w}}async errorIfIsOverLimit($,E={}){this.isLimited($)&&await this.limits[$].errorIfIsOverLimit(E)}async errorIfWouldGoOverLimit($,E={}){this.isLimited($)&&await this.limits[$].errorIfWouldGoOverLimit(E)}async checkIfAnyOverLimit($={}){for(const E in this.limits)if(await this.checkIsOverLimit(E,$))return!0;return!1}}return Fc=R,Fc}var Pc,b0;function yE(){return b0||(b0=1,Pc=vE()),Pc}var V1=yE();const pE=w0(V1),qE=Tb({__proto__:null,default:pE},[V1]);export{qE as i};
