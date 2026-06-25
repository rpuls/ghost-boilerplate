import { ax as tt, b4 as v0, b3 as gb } from "./index-DF6YEs01.js";
function bb(r, t) {
  for (var a = 0; a < t.length; a++) {
    const i = t[a];
    if (typeof i != "string" && !Array.isArray(i)) {
      for (const l in i)
        if (l !== "default" && !(l in r)) {
          const f = Object.getOwnPropertyDescriptor(i, l);
          f && Object.defineProperty(r, l, f.get ? f : {
            enumerable: !0,
            get: () => i[l]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }));
}
var kt, ff;
function Dr() {
  if (ff) return kt;
  ff = 1;
  var r = Array.isArray;
  return kt = r, kt;
}
var Nt, hf;
function y0() {
  if (hf) return Nt;
  hf = 1;
  var r = typeof tt == "object" && tt && tt.Object === Object && tt;
  return Nt = r, Nt;
}
var Ft, df;
function at() {
  if (df) return Ft;
  df = 1;
  var r = y0(), t = typeof self == "object" && self && self.Object === Object && self, a = r || t || Function("return this")();
  return Ft = a, Ft;
}
var Dt, mf;
function Fc() {
  if (mf) return Dt;
  mf = 1;
  var r = at(), t = r.Symbol;
  return Dt = t, Dt;
}
var Pt, vf;
function wb() {
  if (vf) return Pt;
  vf = 1;
  var r = Fc(), t = Object.prototype, a = t.hasOwnProperty, i = t.toString, l = r ? r.toStringTag : void 0;
  function f(v) {
    var h = a.call(v, l), p = v[l];
    try {
      v[l] = void 0;
      var O = !0;
    } catch {
    }
    var R = i.call(v);
    return O && (h ? v[l] = p : delete v[l]), R;
  }
  return Pt = f, Pt;
}
var Ut, yf;
function qb() {
  if (yf) return Ut;
  yf = 1;
  var r = Object.prototype, t = r.toString;
  function a(i) {
    return t.call(i);
  }
  return Ut = a, Ut;
}
var Bt, pf;
function pr() {
  if (pf) return Bt;
  pf = 1;
  var r = Fc(), t = wb(), a = qb(), i = "[object Null]", l = "[object Undefined]", f = r ? r.toStringTag : void 0;
  function v(h) {
    return h == null ? h === void 0 ? l : i : f && f in Object(h) ? t(h) : a(h);
  }
  return Bt = v, Bt;
}
var jt, gf;
function gr() {
  if (gf) return jt;
  gf = 1;
  function r(t) {
    return t != null && typeof t == "object";
  }
  return jt = r, jt;
}
var Vt, bf;
function Dc() {
  if (bf) return Vt;
  bf = 1;
  var r = pr(), t = gr(), a = "[object Symbol]";
  function i(l) {
    return typeof l == "symbol" || t(l) && r(l) == a;
  }
  return Vt = i, Vt;
}
var Wt, wf;
function _b() {
  if (wf) return Wt;
  wf = 1;
  var r = Dr(), t = Dc(), a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, i = /^\w*$/;
  function l(f, v) {
    if (r(f))
      return !1;
    var h = typeof f;
    return h == "number" || h == "symbol" || h == "boolean" || f == null || t(f) ? !0 : i.test(f) || !a.test(f) || v != null && f in Object(v);
  }
  return Wt = l, Wt;
}
var zt, qf;
function Pc() {
  if (qf) return zt;
  qf = 1;
  function r(t) {
    var a = typeof t;
    return t != null && (a == "object" || a == "function");
  }
  return zt = r, zt;
}
var Ht, _f;
function p0() {
  if (_f) return Ht;
  _f = 1;
  var r = pr(), t = Pc(), a = "[object AsyncFunction]", i = "[object Function]", l = "[object GeneratorFunction]", f = "[object Proxy]";
  function v(h) {
    if (!t(h))
      return !1;
    var p = r(h);
    return p == i || p == l || p == a || p == f;
  }
  return Ht = v, Ht;
}
var Gt, $f;
function $b() {
  if ($f) return Gt;
  $f = 1;
  var r = at(), t = r["__core-js_shared__"];
  return Gt = t, Gt;
}
var Zt, Ef;
function Eb() {
  if (Ef) return Zt;
  Ef = 1;
  var r = $b(), t = (function() {
    var i = /[^.]+$/.exec(r && r.keys && r.keys.IE_PROTO || "");
    return i ? "Symbol(src)_1." + i : "";
  })();
  function a(i) {
    return !!t && t in i;
  }
  return Zt = a, Zt;
}
var Yt, Tf;
function Tb() {
  if (Tf) return Yt;
  Tf = 1;
  var r = Function.prototype, t = r.toString;
  function a(i) {
    if (i != null) {
      try {
        return t.call(i);
      } catch {
      }
      try {
        return i + "";
      } catch {
      }
    }
    return "";
  }
  return Yt = a, Yt;
}
var Jt, Sf;
function Sb() {
  if (Sf) return Jt;
  Sf = 1;
  var r = p0(), t = Eb(), a = Pc(), i = Tb(), l = /[\\^$.*+?()[\]{}|]/g, f = /^\[object .+?Constructor\]$/, v = Function.prototype, h = Object.prototype, p = v.toString, O = h.hasOwnProperty, R = RegExp(
    "^" + p.call(O).replace(l, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function _($) {
    if (!a($) || t($))
      return !1;
    var x = r($) ? R : f;
    return x.test(i($));
  }
  return Jt = _, Jt;
}
var Kt, xf;
function xb() {
  if (xf) return Kt;
  xf = 1;
  function r(t, a) {
    return t?.[a];
  }
  return Kt = r, Kt;
}
var Xt, If;
function Uc() {
  if (If) return Xt;
  If = 1;
  var r = Sb(), t = xb();
  function a(i, l) {
    var f = t(i, l);
    return r(f) ? f : void 0;
  }
  return Xt = a, Xt;
}
var Qt, Rf;
function st() {
  if (Rf) return Qt;
  Rf = 1;
  var r = Uc(), t = r(Object, "create");
  return Qt = t, Qt;
}
var en, Of;
function Ib() {
  if (Of) return en;
  Of = 1;
  var r = st();
  function t() {
    this.__data__ = r ? r(null) : {}, this.size = 0;
  }
  return en = t, en;
}
var rn, Af;
function Rb() {
  if (Af) return rn;
  Af = 1;
  function r(t) {
    var a = this.has(t) && delete this.__data__[t];
    return this.size -= a ? 1 : 0, a;
  }
  return rn = r, rn;
}
var tn, Mf;
function Ob() {
  if (Mf) return tn;
  Mf = 1;
  var r = st(), t = "__lodash_hash_undefined__", a = Object.prototype, i = a.hasOwnProperty;
  function l(f) {
    var v = this.__data__;
    if (r) {
      var h = v[f];
      return h === t ? void 0 : h;
    }
    return i.call(v, f) ? v[f] : void 0;
  }
  return tn = l, tn;
}
var nn, Cf;
function Ab() {
  if (Cf) return nn;
  Cf = 1;
  var r = st(), t = Object.prototype, a = t.hasOwnProperty;
  function i(l) {
    var f = this.__data__;
    return r ? f[l] !== void 0 : a.call(f, l);
  }
  return nn = i, nn;
}
var an, Lf;
function Mb() {
  if (Lf) return an;
  Lf = 1;
  var r = st(), t = "__lodash_hash_undefined__";
  function a(i, l) {
    var f = this.__data__;
    return this.size += this.has(i) ? 0 : 1, f[i] = r && l === void 0 ? t : l, this;
  }
  return an = a, an;
}
var sn, kf;
function Cb() {
  if (kf) return sn;
  kf = 1;
  var r = Ib(), t = Rb(), a = Ob(), i = Ab(), l = Mb();
  function f(v) {
    var h = -1, p = v == null ? 0 : v.length;
    for (this.clear(); ++h < p; ) {
      var O = v[h];
      this.set(O[0], O[1]);
    }
  }
  return f.prototype.clear = r, f.prototype.delete = t, f.prototype.get = a, f.prototype.has = i, f.prototype.set = l, sn = f, sn;
}
var un, Nf;
function Lb() {
  if (Nf) return un;
  Nf = 1;
  function r() {
    this.__data__ = [], this.size = 0;
  }
  return un = r, un;
}
var on, Ff;
function ut() {
  if (Ff) return on;
  Ff = 1;
  function r(t, a) {
    return t === a || t !== t && a !== a;
  }
  return on = r, on;
}
var cn, Df;
function ot() {
  if (Df) return cn;
  Df = 1;
  var r = ut();
  function t(a, i) {
    for (var l = a.length; l--; )
      if (r(a[l][0], i))
        return l;
    return -1;
  }
  return cn = t, cn;
}
var ln, Pf;
function kb() {
  if (Pf) return ln;
  Pf = 1;
  var r = ot(), t = Array.prototype, a = t.splice;
  function i(l) {
    var f = this.__data__, v = r(f, l);
    if (v < 0)
      return !1;
    var h = f.length - 1;
    return v == h ? f.pop() : a.call(f, v, 1), --this.size, !0;
  }
  return ln = i, ln;
}
var fn, Uf;
function Nb() {
  if (Uf) return fn;
  Uf = 1;
  var r = ot();
  function t(a) {
    var i = this.__data__, l = r(i, a);
    return l < 0 ? void 0 : i[l][1];
  }
  return fn = t, fn;
}
var hn, Bf;
function Fb() {
  if (Bf) return hn;
  Bf = 1;
  var r = ot();
  function t(a) {
    return r(this.__data__, a) > -1;
  }
  return hn = t, hn;
}
var dn, jf;
function Db() {
  if (jf) return dn;
  jf = 1;
  var r = ot();
  function t(a, i) {
    var l = this.__data__, f = r(l, a);
    return f < 0 ? (++this.size, l.push([a, i])) : l[f][1] = i, this;
  }
  return dn = t, dn;
}
var mn, Vf;
function Pb() {
  if (Vf) return mn;
  Vf = 1;
  var r = Lb(), t = kb(), a = Nb(), i = Fb(), l = Db();
  function f(v) {
    var h = -1, p = v == null ? 0 : v.length;
    for (this.clear(); ++h < p; ) {
      var O = v[h];
      this.set(O[0], O[1]);
    }
  }
  return f.prototype.clear = r, f.prototype.delete = t, f.prototype.get = a, f.prototype.has = i, f.prototype.set = l, mn = f, mn;
}
var vn, Wf;
function Ub() {
  if (Wf) return vn;
  Wf = 1;
  var r = Uc(), t = at(), a = r(t, "Map");
  return vn = a, vn;
}
var yn, zf;
function Bb() {
  if (zf) return yn;
  zf = 1;
  var r = Cb(), t = Pb(), a = Ub();
  function i() {
    this.size = 0, this.__data__ = {
      hash: new r(),
      map: new (a || t)(),
      string: new r()
    };
  }
  return yn = i, yn;
}
var pn, Hf;
function jb() {
  if (Hf) return pn;
  Hf = 1;
  function r(t) {
    var a = typeof t;
    return a == "string" || a == "number" || a == "symbol" || a == "boolean" ? t !== "__proto__" : t === null;
  }
  return pn = r, pn;
}
var gn, Gf;
function ct() {
  if (Gf) return gn;
  Gf = 1;
  var r = jb();
  function t(a, i) {
    var l = a.__data__;
    return r(i) ? l[typeof i == "string" ? "string" : "hash"] : l.map;
  }
  return gn = t, gn;
}
var bn, Zf;
function Vb() {
  if (Zf) return bn;
  Zf = 1;
  var r = ct();
  function t(a) {
    var i = r(this, a).delete(a);
    return this.size -= i ? 1 : 0, i;
  }
  return bn = t, bn;
}
var wn, Yf;
function Wb() {
  if (Yf) return wn;
  Yf = 1;
  var r = ct();
  function t(a) {
    return r(this, a).get(a);
  }
  return wn = t, wn;
}
var qn, Jf;
function zb() {
  if (Jf) return qn;
  Jf = 1;
  var r = ct();
  function t(a) {
    return r(this, a).has(a);
  }
  return qn = t, qn;
}
var _n, Kf;
function Hb() {
  if (Kf) return _n;
  Kf = 1;
  var r = ct();
  function t(a, i) {
    var l = r(this, a), f = l.size;
    return l.set(a, i), this.size += l.size == f ? 0 : 1, this;
  }
  return _n = t, _n;
}
var $n, Xf;
function Gb() {
  if (Xf) return $n;
  Xf = 1;
  var r = Bb(), t = Vb(), a = Wb(), i = zb(), l = Hb();
  function f(v) {
    var h = -1, p = v == null ? 0 : v.length;
    for (this.clear(); ++h < p; ) {
      var O = v[h];
      this.set(O[0], O[1]);
    }
  }
  return f.prototype.clear = r, f.prototype.delete = t, f.prototype.get = a, f.prototype.has = i, f.prototype.set = l, $n = f, $n;
}
var En, Qf;
function Zb() {
  if (Qf) return En;
  Qf = 1;
  var r = Gb(), t = "Expected a function";
  function a(i, l) {
    if (typeof i != "function" || l != null && typeof l != "function")
      throw new TypeError(t);
    var f = function() {
      var v = arguments, h = l ? l.apply(this, v) : v[0], p = f.cache;
      if (p.has(h))
        return p.get(h);
      var O = i.apply(this, v);
      return f.cache = p.set(h, O) || p, O;
    };
    return f.cache = new (a.Cache || r)(), f;
  }
  return a.Cache = r, En = a, En;
}
var Tn, eh;
function Yb() {
  if (eh) return Tn;
  eh = 1;
  var r = Zb(), t = 500;
  function a(i) {
    var l = r(i, function(v) {
      return f.size === t && f.clear(), v;
    }), f = l.cache;
    return l;
  }
  return Tn = a, Tn;
}
var Sn, rh;
function Jb() {
  if (rh) return Sn;
  rh = 1;
  var r = Yb(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, a = /\\(\\)?/g, i = r(function(l) {
    var f = [];
    return l.charCodeAt(0) === 46 && f.push(""), l.replace(t, function(v, h, p, O) {
      f.push(p ? O.replace(a, "$1") : h || v);
    }), f;
  });
  return Sn = i, Sn;
}
var xn, th;
function g0() {
  if (th) return xn;
  th = 1;
  function r(t, a) {
    for (var i = -1, l = t == null ? 0 : t.length, f = Array(l); ++i < l; )
      f[i] = a(t[i], i, t);
    return f;
  }
  return xn = r, xn;
}
var In, nh;
function Kb() {
  if (nh) return In;
  nh = 1;
  var r = Fc(), t = g0(), a = Dr(), i = Dc(), l = r ? r.prototype : void 0, f = l ? l.toString : void 0;
  function v(h) {
    if (typeof h == "string")
      return h;
    if (a(h))
      return t(h, v) + "";
    if (i(h))
      return f ? f.call(h) : "";
    var p = h + "";
    return p == "0" && 1 / h == -1 / 0 ? "-0" : p;
  }
  return In = v, In;
}
var Rn, ih;
function tr() {
  if (ih) return Rn;
  ih = 1;
  var r = Kb();
  function t(a) {
    return a == null ? "" : r(a);
  }
  return Rn = t, Rn;
}
var On, ah;
function Xb() {
  if (ah) return On;
  ah = 1;
  var r = Dr(), t = _b(), a = Jb(), i = tr();
  function l(f, v) {
    return r(f) ? f : t(f, v) ? [f] : a(i(f));
  }
  return On = l, On;
}
var An, sh;
function Qb() {
  if (sh) return An;
  sh = 1;
  var r = Dc();
  function t(a) {
    if (typeof a == "string" || r(a))
      return a;
    var i = a + "";
    return i == "0" && 1 / a == -1 / 0 ? "-0" : i;
  }
  return An = t, An;
}
var Mn, uh;
function ew() {
  if (uh) return Mn;
  uh = 1;
  function r(t, a, i) {
    var l = -1, f = t.length;
    a < 0 && (a = -a > f ? 0 : f + a), i = i > f ? f : i, i < 0 && (i += f), f = a > i ? 0 : i - a >>> 0, a >>>= 0;
    for (var v = Array(f); ++l < f; )
      v[l] = t[l + a];
    return v;
  }
  return Mn = r, Mn;
}
var Cn, oh;
function rw() {
  if (oh) return Cn;
  oh = 1;
  var r = ew();
  function t(a, i, l) {
    var f = a.length;
    return l = l === void 0 ? f : l, !i && l >= f ? a : r(a, i, l);
  }
  return Cn = t, Cn;
}
var Ln, ch;
function b0() {
  if (ch) return Ln;
  ch = 1;
  var r = "\\ud800-\\udfff", t = "\\u0300-\\u036f", a = "\\ufe20-\\ufe2f", i = "\\u20d0-\\u20ff", l = t + a + i, f = "\\ufe0e\\ufe0f", v = "\\u200d", h = RegExp("[" + v + r + l + f + "]");
  function p(O) {
    return h.test(O);
  }
  return Ln = p, Ln;
}
var kn, lh;
function tw() {
  if (lh) return kn;
  lh = 1;
  function r(t) {
    return t.split("");
  }
  return kn = r, kn;
}
var Nn, fh;
function nw() {
  if (fh) return Nn;
  fh = 1;
  var r = "\\ud800-\\udfff", t = "\\u0300-\\u036f", a = "\\ufe20-\\ufe2f", i = "\\u20d0-\\u20ff", l = t + a + i, f = "\\ufe0e\\ufe0f", v = "[" + r + "]", h = "[" + l + "]", p = "\\ud83c[\\udffb-\\udfff]", O = "(?:" + h + "|" + p + ")", R = "[^" + r + "]", _ = "(?:\\ud83c[\\udde6-\\uddff]){2}", $ = "[\\ud800-\\udbff][\\udc00-\\udfff]", x = "\\u200d", T = O + "?", A = "[" + f + "]?", k = "(?:" + x + "(?:" + [R, _, $].join("|") + ")" + A + T + ")*", M = A + T + k, L = "(?:" + [R + h + "?", h, _, $, v].join("|") + ")", U = RegExp(p + "(?=" + p + ")|" + L + M, "g");
  function N(P) {
    return P.match(U) || [];
  }
  return Nn = N, Nn;
}
var Fn, hh;
function iw() {
  if (hh) return Fn;
  hh = 1;
  var r = tw(), t = b0(), a = nw();
  function i(l) {
    return t(l) ? a(l) : r(l);
  }
  return Fn = i, Fn;
}
var Dn, dh;
function aw() {
  if (dh) return Dn;
  dh = 1;
  var r = rw(), t = b0(), a = iw(), i = tr();
  function l(f) {
    return function(v) {
      v = i(v);
      var h = t(v) ? a(v) : void 0, p = h ? h[0] : v.charAt(0), O = h ? r(h, 1).join("") : v.slice(1);
      return p[f]() + O;
    };
  }
  return Dn = l, Dn;
}
var Pn, mh;
function sw() {
  if (mh) return Pn;
  mh = 1;
  var r = aw(), t = r("toUpperCase");
  return Pn = t, Pn;
}
var Un, vh;
function uw() {
  if (vh) return Un;
  vh = 1;
  function r(t, a) {
    for (var i = -1, l = Array(t); ++i < t; )
      l[i] = a(i);
    return l;
  }
  return Un = r, Un;
}
var Bn, yh;
function ow() {
  if (yh) return Bn;
  yh = 1;
  var r = pr(), t = gr(), a = "[object Arguments]";
  function i(l) {
    return t(l) && r(l) == a;
  }
  return Bn = i, Bn;
}
var jn, ph;
function w0() {
  if (ph) return jn;
  ph = 1;
  var r = ow(), t = gr(), a = Object.prototype, i = a.hasOwnProperty, l = a.propertyIsEnumerable, f = r(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? r : function(v) {
    return t(v) && i.call(v, "callee") && !l.call(v, "callee");
  };
  return jn = f, jn;
}
var Nr = { exports: {} }, Vn, gh;
function cw() {
  if (gh) return Vn;
  gh = 1;
  function r() {
    return !1;
  }
  return Vn = r, Vn;
}
Nr.exports;
var bh;
function lw() {
  return bh || (bh = 1, (function(r, t) {
    var a = at(), i = cw(), l = t && !t.nodeType && t, f = l && !0 && r && !r.nodeType && r, v = f && f.exports === l, h = v ? a.Buffer : void 0, p = h ? h.isBuffer : void 0, O = p || i;
    r.exports = O;
  })(Nr, Nr.exports)), Nr.exports;
}
var Wn, wh;
function Bc() {
  if (wh) return Wn;
  wh = 1;
  var r = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function a(i, l) {
    var f = typeof i;
    return l = l ?? r, !!l && (f == "number" || f != "symbol" && t.test(i)) && i > -1 && i % 1 == 0 && i < l;
  }
  return Wn = a, Wn;
}
var zn, qh;
function jc() {
  if (qh) return zn;
  qh = 1;
  var r = 9007199254740991;
  function t(a) {
    return typeof a == "number" && a > -1 && a % 1 == 0 && a <= r;
  }
  return zn = t, zn;
}
var Hn, _h;
function fw() {
  if (_h) return Hn;
  _h = 1;
  var r = pr(), t = jc(), a = gr(), i = "[object Arguments]", l = "[object Array]", f = "[object Boolean]", v = "[object Date]", h = "[object Error]", p = "[object Function]", O = "[object Map]", R = "[object Number]", _ = "[object Object]", $ = "[object RegExp]", x = "[object Set]", T = "[object String]", A = "[object WeakMap]", k = "[object ArrayBuffer]", M = "[object DataView]", L = "[object Float32Array]", U = "[object Float64Array]", N = "[object Int8Array]", P = "[object Int16Array]", ae = "[object Int32Array]", ee = "[object Uint8Array]", B = "[object Uint8ClampedArray]", z = "[object Uint16Array]", he = "[object Uint32Array]", D = {};
  D[L] = D[U] = D[N] = D[P] = D[ae] = D[ee] = D[B] = D[z] = D[he] = !0, D[i] = D[l] = D[k] = D[f] = D[M] = D[v] = D[h] = D[p] = D[O] = D[R] = D[_] = D[$] = D[x] = D[T] = D[A] = !1;
  function ge(re) {
    return a(re) && t(re.length) && !!D[r(re)];
  }
  return Hn = ge, Hn;
}
var Gn, $h;
function hw() {
  if ($h) return Gn;
  $h = 1;
  function r(t) {
    return function(a) {
      return t(a);
    };
  }
  return Gn = r, Gn;
}
var Fr = { exports: {} };
Fr.exports;
var Eh;
function dw() {
  return Eh || (Eh = 1, (function(r, t) {
    var a = y0(), i = t && !t.nodeType && t, l = i && !0 && r && !r.nodeType && r, f = l && l.exports === i, v = f && a.process, h = (function() {
      try {
        var p = l && l.require && l.require("util").types;
        return p || v && v.binding && v.binding("util");
      } catch {
      }
    })();
    r.exports = h;
  })(Fr, Fr.exports)), Fr.exports;
}
var Zn, Th;
function mw() {
  if (Th) return Zn;
  Th = 1;
  var r = fw(), t = hw(), a = dw(), i = a && a.isTypedArray, l = i ? t(i) : r;
  return Zn = l, Zn;
}
var Yn, Sh;
function vw() {
  if (Sh) return Yn;
  Sh = 1;
  var r = uw(), t = w0(), a = Dr(), i = lw(), l = Bc(), f = mw(), v = Object.prototype, h = v.hasOwnProperty;
  function p(O, R) {
    var _ = a(O), $ = !_ && t(O), x = !_ && !$ && i(O), T = !_ && !$ && !x && f(O), A = _ || $ || x || T, k = A ? r(O.length, String) : [], M = k.length;
    for (var L in O)
      (R || h.call(O, L)) && !(A && // Safari 9 has enumerable `arguments.length` in strict mode.
      (L == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      x && (L == "offset" || L == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      T && (L == "buffer" || L == "byteLength" || L == "byteOffset") || // Skip index properties.
      l(L, M))) && k.push(L);
    return k;
  }
  return Yn = p, Yn;
}
var Jn, xh;
function yw() {
  if (xh) return Jn;
  xh = 1;
  var r = Object.prototype;
  function t(a) {
    var i = a && a.constructor, l = typeof i == "function" && i.prototype || r;
    return a === l;
  }
  return Jn = t, Jn;
}
var Kn, Ih;
function q0() {
  if (Ih) return Kn;
  Ih = 1;
  function r(t, a) {
    return function(i) {
      return t(a(i));
    };
  }
  return Kn = r, Kn;
}
var Xn, Rh;
function pw() {
  if (Rh) return Xn;
  Rh = 1;
  var r = q0(), t = r(Object.keys, Object);
  return Xn = t, Xn;
}
var Qn, Oh;
function gw() {
  if (Oh) return Qn;
  Oh = 1;
  var r = yw(), t = pw(), a = Object.prototype, i = a.hasOwnProperty;
  function l(f) {
    if (!r(f))
      return t(f);
    var v = [];
    for (var h in Object(f))
      i.call(f, h) && h != "constructor" && v.push(h);
    return v;
  }
  return Qn = l, Qn;
}
var ei, Ah;
function _0() {
  if (Ah) return ei;
  Ah = 1;
  var r = p0(), t = jc();
  function a(i) {
    return i != null && t(i.length) && !r(i);
  }
  return ei = a, ei;
}
var ri, Mh;
function $0() {
  if (Mh) return ri;
  Mh = 1;
  var r = vw(), t = gw(), a = _0();
  function i(l) {
    return a(l) ? r(l) : t(l);
  }
  return ri = i, ri;
}
var ti, Ch;
function bw() {
  if (Ch) return ti;
  Ch = 1;
  var r = Xb(), t = w0(), a = Dr(), i = Bc(), l = jc(), f = Qb();
  function v(h, p, O) {
    p = r(p, h);
    for (var R = -1, _ = p.length, $ = !1; ++R < _; ) {
      var x = f(p[R]);
      if (!($ = h != null && O(h, x)))
        break;
      h = h[x];
    }
    return $ || ++R != _ ? $ : (_ = h == null ? 0 : h.length, !!_ && l(_) && i(x, _) && (a(h) || t(h)));
  }
  return ti = v, ti;
}
var ni, Lh;
function E0() {
  if (Lh) return ni;
  Lh = 1;
  function r(t) {
    return t;
  }
  return ni = r, ni;
}
var ii, kh;
function T0() {
  if (kh) return ii;
  kh = 1;
  function r(t, a, i) {
    switch (i.length) {
      case 0:
        return t.call(a);
      case 1:
        return t.call(a, i[0]);
      case 2:
        return t.call(a, i[0], i[1]);
      case 3:
        return t.call(a, i[0], i[1], i[2]);
    }
    return t.apply(a, i);
  }
  return ii = r, ii;
}
var ai, Nh;
function ww() {
  if (Nh) return ai;
  Nh = 1;
  var r = T0(), t = Math.max;
  function a(i, l, f) {
    return l = t(l === void 0 ? i.length - 1 : l, 0), function() {
      for (var v = arguments, h = -1, p = t(v.length - l, 0), O = Array(p); ++h < p; )
        O[h] = v[l + h];
      h = -1;
      for (var R = Array(l + 1); ++h < l; )
        R[h] = v[h];
      return R[l] = f(O), r(i, this, R);
    };
  }
  return ai = a, ai;
}
var si, Fh;
function qw() {
  if (Fh) return si;
  Fh = 1;
  function r(t) {
    return function() {
      return t;
    };
  }
  return si = r, si;
}
var ui, Dh;
function S0() {
  if (Dh) return ui;
  Dh = 1;
  var r = Uc(), t = (function() {
    try {
      var a = r(Object, "defineProperty");
      return a({}, "", {}), a;
    } catch {
    }
  })();
  return ui = t, ui;
}
var oi, Ph;
function _w() {
  if (Ph) return oi;
  Ph = 1;
  var r = qw(), t = S0(), a = E0(), i = t ? function(l, f) {
    return t(l, "toString", {
      configurable: !0,
      enumerable: !1,
      value: r(f),
      writable: !0
    });
  } : a;
  return oi = i, oi;
}
var ci, Uh;
function $w() {
  if (Uh) return ci;
  Uh = 1;
  var r = 800, t = 16, a = Date.now;
  function i(l) {
    var f = 0, v = 0;
    return function() {
      var h = a(), p = t - (h - v);
      if (v = h, p > 0) {
        if (++f >= r)
          return arguments[0];
      } else
        f = 0;
      return l.apply(void 0, arguments);
    };
  }
  return ci = i, ci;
}
var li, Bh;
function Ew() {
  if (Bh) return li;
  Bh = 1;
  var r = _w(), t = $w(), a = t(r);
  return li = a, li;
}
var fi, jh;
function x0() {
  if (jh) return fi;
  jh = 1;
  var r = E0(), t = ww(), a = Ew();
  function i(l, f) {
    return a(t(l, f, r), l + "");
  }
  return fi = i, fi;
}
var hi, Vh;
function I0() {
  if (Vh) return hi;
  Vh = 1;
  var r = ut(), t = _0(), a = Bc(), i = Pc();
  function l(f, v, h) {
    if (!i(h))
      return !1;
    var p = typeof v;
    return (p == "number" ? t(h) && a(v, h.length) : p == "string" && v in h) ? r(h[v], f) : !1;
  }
  return hi = l, hi;
}
var di, Wh;
function Tw() {
  if (Wh) return di;
  Wh = 1;
  var r = q0(), t = r(Object.getPrototypeOf, Object);
  return di = t, di;
}
var mi, zh;
function Sw() {
  if (zh) return mi;
  zh = 1;
  var r = pr(), t = Tw(), a = gr(), i = "[object Object]", l = Function.prototype, f = Object.prototype, v = l.toString, h = f.hasOwnProperty, p = v.call(Object);
  function O(R) {
    if (!a(R) || r(R) != i)
      return !1;
    var _ = t(R);
    if (_ === null)
      return !0;
    var $ = h.call(_, "constructor") && _.constructor;
    return typeof $ == "function" && $ instanceof $ && v.call($) == p;
  }
  return mi = O, mi;
}
var vi, Hh;
function R0() {
  if (Hh) return vi;
  Hh = 1;
  var r = S0();
  function t(a, i, l) {
    i == "__proto__" && r ? r(a, i, {
      configurable: !0,
      enumerable: !0,
      value: l,
      writable: !0
    }) : a[i] = l;
  }
  return vi = t, vi;
}
var yi, Gh;
function xw() {
  if (Gh) return yi;
  Gh = 1;
  function r(t, a) {
    for (var i = -1, l = t == null ? 0 : t.length; ++i < l && a(t[i], i, t) !== !1; )
      ;
    return t;
  }
  return yi = r, yi;
}
var pi, Zh;
function Iw() {
  if (Zh) return pi;
  Zh = 1;
  var r = R0(), t = ut(), a = Object.prototype, i = a.hasOwnProperty;
  function l(f, v, h) {
    var p = f[v];
    (!(i.call(f, v) && t(p, h)) || h === void 0 && !(v in f)) && r(f, v, h);
  }
  return pi = l, pi;
}
var gi, Yh;
function Rw() {
  if (Yh) return gi;
  Yh = 1;
  var r = Iw(), t = R0();
  function a(i, l, f, v) {
    var h = !f;
    f || (f = {});
    for (var p = -1, O = l.length; ++p < O; ) {
      var R = l[p], _ = v ? v(f[R], i[R], R, f, i) : void 0;
      _ === void 0 && (_ = i[R]), h ? t(f, R, _) : r(f, R, _);
    }
    return f;
  }
  return gi = a, gi;
}
var bi, Jh;
function Ow() {
  if (Jh) return bi;
  Jh = 1;
  var r = tr(), t = sw();
  function a(i) {
    return t(r(i).toLowerCase());
  }
  return bi = a, bi;
}
var wi, Kh;
function Aw() {
  if (Kh) return wi;
  Kh = 1;
  function r(t, a, i, l) {
    var f = -1, v = t == null ? 0 : t.length;
    for (l && v && (i = t[++f]); ++f < v; )
      i = a(i, t[f], f, t);
    return i;
  }
  return wi = r, wi;
}
var qi, Xh;
function O0() {
  if (Xh) return qi;
  Xh = 1;
  function r(t) {
    return function(a) {
      return t?.[a];
    };
  }
  return qi = r, qi;
}
var _i, Qh;
function Mw() {
  if (Qh) return _i;
  Qh = 1;
  var r = O0(), t = {
    // Latin-1 Supplement block.
    À: "A",
    Á: "A",
    Â: "A",
    Ã: "A",
    Ä: "A",
    Å: "A",
    à: "a",
    á: "a",
    â: "a",
    ã: "a",
    ä: "a",
    å: "a",
    Ç: "C",
    ç: "c",
    Ð: "D",
    ð: "d",
    È: "E",
    É: "E",
    Ê: "E",
    Ë: "E",
    è: "e",
    é: "e",
    ê: "e",
    ë: "e",
    Ì: "I",
    Í: "I",
    Î: "I",
    Ï: "I",
    ì: "i",
    í: "i",
    î: "i",
    ï: "i",
    Ñ: "N",
    ñ: "n",
    Ò: "O",
    Ó: "O",
    Ô: "O",
    Õ: "O",
    Ö: "O",
    Ø: "O",
    ò: "o",
    ó: "o",
    ô: "o",
    õ: "o",
    ö: "o",
    ø: "o",
    Ù: "U",
    Ú: "U",
    Û: "U",
    Ü: "U",
    ù: "u",
    ú: "u",
    û: "u",
    ü: "u",
    Ý: "Y",
    ý: "y",
    ÿ: "y",
    Æ: "Ae",
    æ: "ae",
    Þ: "Th",
    þ: "th",
    ß: "ss",
    // Latin Extended-A block.
    Ā: "A",
    Ă: "A",
    Ą: "A",
    ā: "a",
    ă: "a",
    ą: "a",
    Ć: "C",
    Ĉ: "C",
    Ċ: "C",
    Č: "C",
    ć: "c",
    ĉ: "c",
    ċ: "c",
    č: "c",
    Ď: "D",
    Đ: "D",
    ď: "d",
    đ: "d",
    Ē: "E",
    Ĕ: "E",
    Ė: "E",
    Ę: "E",
    Ě: "E",
    ē: "e",
    ĕ: "e",
    ė: "e",
    ę: "e",
    ě: "e",
    Ĝ: "G",
    Ğ: "G",
    Ġ: "G",
    Ģ: "G",
    ĝ: "g",
    ğ: "g",
    ġ: "g",
    ģ: "g",
    Ĥ: "H",
    Ħ: "H",
    ĥ: "h",
    ħ: "h",
    Ĩ: "I",
    Ī: "I",
    Ĭ: "I",
    Į: "I",
    İ: "I",
    ĩ: "i",
    ī: "i",
    ĭ: "i",
    į: "i",
    ı: "i",
    Ĵ: "J",
    ĵ: "j",
    Ķ: "K",
    ķ: "k",
    ĸ: "k",
    Ĺ: "L",
    Ļ: "L",
    Ľ: "L",
    Ŀ: "L",
    Ł: "L",
    ĺ: "l",
    ļ: "l",
    ľ: "l",
    ŀ: "l",
    ł: "l",
    Ń: "N",
    Ņ: "N",
    Ň: "N",
    Ŋ: "N",
    ń: "n",
    ņ: "n",
    ň: "n",
    ŋ: "n",
    Ō: "O",
    Ŏ: "O",
    Ő: "O",
    ō: "o",
    ŏ: "o",
    ő: "o",
    Ŕ: "R",
    Ŗ: "R",
    Ř: "R",
    ŕ: "r",
    ŗ: "r",
    ř: "r",
    Ś: "S",
    Ŝ: "S",
    Ş: "S",
    Š: "S",
    ś: "s",
    ŝ: "s",
    ş: "s",
    š: "s",
    Ţ: "T",
    Ť: "T",
    Ŧ: "T",
    ţ: "t",
    ť: "t",
    ŧ: "t",
    Ũ: "U",
    Ū: "U",
    Ŭ: "U",
    Ů: "U",
    Ű: "U",
    Ų: "U",
    ũ: "u",
    ū: "u",
    ŭ: "u",
    ů: "u",
    ű: "u",
    ų: "u",
    Ŵ: "W",
    ŵ: "w",
    Ŷ: "Y",
    ŷ: "y",
    Ÿ: "Y",
    Ź: "Z",
    Ż: "Z",
    Ž: "Z",
    ź: "z",
    ż: "z",
    ž: "z",
    Ĳ: "IJ",
    ĳ: "ij",
    Œ: "Oe",
    œ: "oe",
    ŉ: "'n",
    ſ: "s"
  }, a = r(t);
  return _i = a, _i;
}
var $i, ed;
function Cw() {
  if (ed) return $i;
  ed = 1;
  var r = Mw(), t = tr(), a = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, i = "\\u0300-\\u036f", l = "\\ufe20-\\ufe2f", f = "\\u20d0-\\u20ff", v = i + l + f, h = "[" + v + "]", p = RegExp(h, "g");
  function O(R) {
    return R = t(R), R && R.replace(a, r).replace(p, "");
  }
  return $i = O, $i;
}
var Ei, rd;
function Lw() {
  if (rd) return Ei;
  rd = 1;
  var r = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
  function t(a) {
    return a.match(r) || [];
  }
  return Ei = t, Ei;
}
var Ti, td;
function kw() {
  if (td) return Ti;
  td = 1;
  var r = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
  function t(a) {
    return r.test(a);
  }
  return Ti = t, Ti;
}
var Si, nd;
function Nw() {
  if (nd) return Si;
  nd = 1;
  var r = "\\ud800-\\udfff", t = "\\u0300-\\u036f", a = "\\ufe20-\\ufe2f", i = "\\u20d0-\\u20ff", l = t + a + i, f = "\\u2700-\\u27bf", v = "a-z\\xdf-\\xf6\\xf8-\\xff", h = "\\xac\\xb1\\xd7\\xf7", p = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", O = "\\u2000-\\u206f", R = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", _ = "A-Z\\xc0-\\xd6\\xd8-\\xde", $ = "\\ufe0e\\ufe0f", x = h + p + O + R, T = "['’]", A = "[" + x + "]", k = "[" + l + "]", M = "\\d+", L = "[" + f + "]", U = "[" + v + "]", N = "[^" + r + x + M + f + v + _ + "]", P = "\\ud83c[\\udffb-\\udfff]", ae = "(?:" + k + "|" + P + ")", ee = "[^" + r + "]", B = "(?:\\ud83c[\\udde6-\\uddff]){2}", z = "[\\ud800-\\udbff][\\udc00-\\udfff]", he = "[" + _ + "]", D = "\\u200d", ge = "(?:" + U + "|" + N + ")", re = "(?:" + he + "|" + N + ")", we = "(?:" + T + "(?:d|ll|m|re|s|t|ve))?", se = "(?:" + T + "(?:D|LL|M|RE|S|T|VE))?", Ie = ae + "?", qe = "[" + $ + "]?", De = "(?:" + D + "(?:" + [ee, B, z].join("|") + ")" + qe + Ie + ")*", ue = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Ve = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", oe = qe + Ie + De, ce = "(?:" + [L, B, z].join("|") + ")" + oe, Re = RegExp([
    he + "?" + U + "+" + we + "(?=" + [A, he, "$"].join("|") + ")",
    re + "+" + se + "(?=" + [A, he + ge, "$"].join("|") + ")",
    he + "?" + ge + "+" + we,
    he + "+" + se,
    Ve,
    ue,
    M,
    ce
  ].join("|"), "g");
  function Oe(Ae) {
    return Ae.match(Re) || [];
  }
  return Si = Oe, Si;
}
var xi, id;
function Fw() {
  if (id) return xi;
  id = 1;
  var r = Lw(), t = kw(), a = tr(), i = Nw();
  function l(f, v, h) {
    return f = a(f), v = h ? void 0 : v, v === void 0 ? t(f) ? i(f) : r(f) : f.match(v) || [];
  }
  return xi = l, xi;
}
var Ii, ad;
function A0() {
  if (ad) return Ii;
  ad = 1;
  var r = Aw(), t = Cw(), a = Fw(), i = "['’]", l = RegExp(i, "g");
  function f(v) {
    return function(h) {
      return r(a(t(h).replace(l, "")), v, "");
    };
  }
  return Ii = f, Ii;
}
var Ri, sd;
function Dw() {
  if (sd) return Ri;
  sd = 1;
  var r = Ow(), t = A0(), a = t(function(i, l, f) {
    return l = l.toLowerCase(), i + (f ? r(l) : l);
  });
  return Ri = a, Ri;
}
var Oi, ud;
function Pw() {
  if (ud) return Oi;
  ud = 1;
  var r = Object.prototype, t = r.hasOwnProperty;
  function a(i, l) {
    return i != null && t.call(i, l);
  }
  return Oi = a, Oi;
}
var Ai, od;
function Uw() {
  if (od) return Ai;
  od = 1;
  var r = Pw(), t = bw();
  function a(i, l) {
    return i != null && t(i, l, r);
  }
  return Ai = a, Ai;
}
let nt;
const Bw = new Uint8Array(16);
function jw() {
  if (!nt && (nt = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !nt))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return nt(Bw);
}
const ye = [];
for (let r = 0; r < 256; ++r)
  ye.push((r + 256).toString(16).slice(1));
function Vw(r, t = 0) {
  return ye[r[t + 0]] + ye[r[t + 1]] + ye[r[t + 2]] + ye[r[t + 3]] + "-" + ye[r[t + 4]] + ye[r[t + 5]] + "-" + ye[r[t + 6]] + ye[r[t + 7]] + "-" + ye[r[t + 8]] + ye[r[t + 9]] + "-" + ye[r[t + 10]] + ye[r[t + 11]] + ye[r[t + 12]] + ye[r[t + 13]] + ye[r[t + 14]] + ye[r[t + 15]];
}
let cd, Mi, Ci = 0, Li = 0;
function Ww(r, t, a) {
  let i = 0;
  const l = new Array(16);
  r = r || {};
  let f = r.node || cd, v = r.clockseq !== void 0 ? r.clockseq : Mi;
  if (f == null || v == null) {
    const $ = r.random || (r.rng || jw)();
    f == null && (f = cd = [$[0] | 1, $[1], $[2], $[3], $[4], $[5]]), v == null && (v = Mi = ($[6] << 8 | $[7]) & 16383);
  }
  let h = r.msecs !== void 0 ? r.msecs : Date.now(), p = r.nsecs !== void 0 ? r.nsecs : Li + 1;
  const O = h - Ci + (p - Li) / 1e4;
  if (O < 0 && r.clockseq === void 0 && (v = v + 1 & 16383), (O < 0 || h > Ci) && r.nsecs === void 0 && (p = 0), p >= 1e4)
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  Ci = h, Li = p, Mi = v, h += 122192928e5;
  const R = ((h & 268435455) * 1e4 + p) % 4294967296;
  l[i++] = R >>> 24 & 255, l[i++] = R >>> 16 & 255, l[i++] = R >>> 8 & 255, l[i++] = R & 255;
  const _ = h / 4294967296 * 1e4 & 268435455;
  l[i++] = _ >>> 8 & 255, l[i++] = _ & 255, l[i++] = _ >>> 24 & 15 | 16, l[i++] = _ >>> 16 & 255, l[i++] = v >>> 8 | 128, l[i++] = v & 255;
  for (let $ = 0; $ < 6; ++$)
    l[i + $] = f[$];
  return t || Vw(l);
}
function zw(r, t) {
  const a = (r.stack?.split(/\n/g) || [])[1], [i, ...l] = t.stack?.split(/\n/g) || [];
  return [i, a, ...l].join(`
`);
}
var Hw = Object.defineProperty, Gw = (r, t, a) => t in r ? Hw(r, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[t] = a, Fe = (r, t, a) => Gw(r, typeof t != "symbol" ? t + "" : t, a);
class K extends Error {
  constructor(t = {}) {
    super(), Fe(this, "statusCode"), Fe(this, "errorType"), Fe(this, "level"), Fe(this, "id"), Fe(this, "context"), Fe(this, "help"), Fe(this, "errorDetails"), Fe(this, "code"), Fe(this, "property"), Fe(this, "redirect"), Fe(this, "hideStack"), this.statusCode = 500, this.errorType = "InternalServerError", this.level = "normal", this.message = "The server has encountered an error.", this.id = Ww(), this.id = t.id || this.id, this.statusCode = t.statusCode || this.statusCode, this.level = t.level || this.level, this.context = t.context, this.help = t.help, this.errorType = this.name = t.errorType || this.errorType, this.errorDetails = t.errorDetails, this.code = t.code || null, this.property = t.property || null, this.redirect = t.redirect || null, this.message = t.message || this.message, this.hideStack = t.hideStack || !1, t.err && (typeof t.err == "string" && (t.err = new Error(t.err)), Object.getOwnPropertyNames(t.err).forEach((a) => {
      if (["errorType", "name", "statusCode", "message", "level"].indexOf(a) === -1) {
        if (a === "code") {
          this[a] = this[a] || t.err[a];
          return;
        }
        if (a === "stack" && !this.hideStack) {
          this[a] = zw(this, t.err);
          return;
        }
        this[a] = t.err[a] || this[a];
      }
    }));
  }
}
const Q = (r, t) => {
  const a = { ...t };
  return Object.keys(r).forEach((i) => {
    r[i] !== void 0 && (a[i] = r[i]);
  }), a;
};
class yr extends K {
  constructor(t = {}) {
    super(Q(t, {
      statusCode: 500,
      level: "critical",
      errorType: "InternalServerError",
      message: "The server has encountered an error."
    }));
  }
}
class M0 extends K {
  constructor(t = {}) {
    super(Q(t, {
      statusCode: 400,
      level: "critical",
      errorType: "IncorrectUsageError",
      message: "We detected a misuse. Please read the stack trace."
    }));
  }
}
class C0 extends K {
  constructor(t = {}) {
    super(Q(t, {
      statusCode: 404,
      errorType: "NotFoundError",
      message: "Resource could not be found.",
      hideStack: !0
    }));
  }
}
class Vc extends K {
  constructor(t = {}) {
    super(Q(t, {
      statusCode: 400,
      errorType: "BadRequestError",
      message: "The request could not be understood."
    }));
  }
}
class L0 extends K {
  constructor(t = {}) {
    super(Q(t, {
      statusCode: 401,
      errorType: "UnauthorizedError",
      message: "You are not authorised to make this request."
    }));
  }
}
class Wc extends K {
  constructor(t = {}) {
    super(Q(t, {
      statusCode: 403,
      errorType: "NoPermissionError",
      message: "You do not have permission to perform this request."
    }));
  }
}
class zc extends K {
  constructor(t = {}) {
    super(Q(t, {
      statusCode: 422,
      errorType: "ValidationError",
      message: "The request failed validation."
    }));
  }
}
class k0 extends K {
  constructor(t = {}) {
    super(Q(t, {
      statusCode: 415,
      errorType: "UnsupportedMediaTypeError",
      message: "The media in the request is not supported by the server."
    }));
  }
}
class N0 extends K {
  constructor(t = {}) {
    super(Q(t, {
      statusCode: 429,
      errorType: "TooManyRequestsError",
      message: "Server has received too many similar requests in a short space of time."
    }));
  }
}
class Hc extends K {
  constructor(t = {}) {
    super(Q(t, {
      statusCode: 503,
      errorType: "MaintenanceError",
      message: "The server is temporarily down for maintenance."
    }));
  }
}
class F0 extends K {
  constructor(t = {}) {
    super(Q(t, {
      statusCode: 405,
      errorType: "MethodNotAllowedError",
      message: "Method not allowed for resource."
    }));
  }
}
class D0 extends K {
  constructor(t = {}) {
    super(Q(t, {
      statusCode: 406,
      errorType: "RequestNotAcceptableError",
      message: "Request not acceptable for provided Accept-Version header.",
      hideStack: !0
    }));
  }
}
class P0 extends K {
  constructor(t = {}) {
    super(Q(t, {
      statusCode: 416,
      errorType: "RangeNotSatisfiableError",
      message: "Range not satisfiable for provided Range header.",
      hideStack: !0
    }));
  }
}
class U0 extends K {
  constructor(t = {}) {
    super(Q(t, {
      statusCode: 413,
      errorType: "RequestEntityTooLargeError",
      message: "Request was too big for the server to handle."
    }));
  }
}
class B0 extends K {
  constructor(t = {}) {
    super(Q(t, {
      statusCode: 503,
      errorType: "TokenRevocationError",
      message: "Token is no longer available."
    }));
  }
}
class j0 extends K {
  constructor(t = {}) {
    super(Q(t, {
      statusCode: 400,
      errorType: "VersionMismatchError",
      message: "Requested version does not match server version."
    }));
  }
}
class V0 extends K {
  constructor(t = {}) {
    super(Q(t, {
      statusCode: 500,
      errorType: "DataExportError",
      message: "The server encountered an error whilst exporting data."
    }));
  }
}
class W0 extends K {
  constructor(t = {}) {
    super(Q(t, {
      statusCode: 500,
      errorType: "DataImportError",
      message: "The server encountered an error whilst importing data."
    }));
  }
}
class z0 extends K {
  constructor(t = {}) {
    super(Q(t, {
      statusCode: 500,
      errorType: "EmailError",
      message: "The server encountered an error whilst sending email."
    }));
  }
}
class H0 extends K {
  constructor(t = {}) {
    super(Q(t, {
      statusCode: 422,
      errorType: "ThemeValidationError",
      message: "The theme has a validation error.",
      errorDetails: {}
    }));
  }
}
class G0 extends K {
  constructor(t = {}) {
    super(Q(t, {
      statusCode: 409,
      errorType: "DisabledFeatureError",
      message: "Unable to complete the request, this feature is disabled."
    }));
  }
}
class Z0 extends K {
  constructor(t = {}) {
    super(Q(t, {
      statusCode: 409,
      errorType: "UpdateCollisionError",
      message: "Unable to complete the request, there was a conflict."
    }));
  }
}
class Y0 extends K {
  constructor(t = {}) {
    super(Q(t, {
      errorType: "HostLimitError",
      hideStack: !0,
      statusCode: 403,
      message: "Unable to complete the request, this resource is limited."
    }));
  }
}
class J0 extends K {
  constructor(t = {}) {
    super(Q(t, {
      errorType: "HelperWarning",
      hideStack: !0,
      statusCode: 400,
      message: "A theme helper has done something unexpected."
    }));
  }
}
class K0 extends K {
  constructor(t = {}) {
    super(Q(t, {
      errorType: "PasswordResetRequiredError",
      statusCode: 401,
      message: "For security, you need to create a new password. An email has been sent to you with instructions!"
    }));
  }
}
class X0 extends K {
  constructor(t = {}) {
    super(Q(t, {
      errorType: "UnhandledJobError",
      message: "Processed job threw an unhandled error",
      level: "critical"
    }));
  }
}
class Q0 extends K {
  constructor(t = {}) {
    super(Q(t, {
      errorType: "NoContentError",
      statusCode: 204,
      hideStack: !0
    }));
  }
}
class e1 extends K {
  constructor(t = {}) {
    super(Q(t, {
      errorType: "ConflictError",
      statusCode: 409,
      message: "The server has encountered an conflict."
    }));
  }
}
class r1 extends K {
  constructor(t = {}) {
    super(Q(t, {
      errorType: "MigrationError",
      message: "An error has occurred applying a database migration.",
      level: "critical"
    }));
  }
}
const t1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BadRequestError: Vc,
  ConflictError: e1,
  DataExportError: V0,
  DataImportError: W0,
  DisabledFeatureError: G0,
  EmailError: z0,
  HelperWarning: J0,
  HostLimitError: Y0,
  IncorrectUsageError: M0,
  InternalServerError: yr,
  MaintenanceError: Hc,
  MethodNotAllowedError: F0,
  MigrationError: r1,
  NoContentError: Q0,
  NoPermissionError: Wc,
  NotFoundError: C0,
  PasswordResetRequiredError: K0,
  RangeNotSatisfiableError: P0,
  RequestEntityTooLargeError: U0,
  RequestNotAcceptableError: D0,
  ThemeValidationError: H0,
  TokenRevocationError: B0,
  TooManyRequestsError: N0,
  UnauthorizedError: L0,
  UnhandledJobError: X0,
  UnsupportedMediaTypeError: k0,
  UpdateCollisionError: Z0,
  ValidationError: zc,
  VersionMismatchError: j0
}, Symbol.toStringTag, { value: "Module" }));
var ki, ld;
function Zw() {
  if (ld) return ki;
  ld = 1;
  function r() {
    return typeof Symbol == "function" && typeof /* @__PURE__ */ Symbol("foo") == "symbol";
  }
  return ki = r, ki;
}
var Ni, fd;
function Yw() {
  if (fd) return Ni;
  fd = 1;
  var r = Zw();
  return Ni = r, Ni;
}
var Fi, hd;
function Jw() {
  if (hd) return Fi;
  hd = 1;
  var r = Yw(), t = r();
  function a() {
    return t && typeof Symbol.toStringTag == "symbol";
  }
  return Fi = a, Fi;
}
var Di, dd;
function lt() {
  if (dd) return Di;
  dd = 1;
  var r = Jw();
  return Di = r, Di;
}
var Pi, md;
function n1() {
  if (md) return Pi;
  md = 1;
  var r = Object.prototype.toString;
  return Pi = r, Pi;
}
var Ui, vd;
function Kw() {
  if (vd) return Ui;
  vd = 1;
  var r = n1();
  function t(a) {
    return r.call(a);
  }
  return Ui = t, Ui;
}
var Bi, yd;
function Xw() {
  if (yd) return Bi;
  yd = 1;
  var r = Object.prototype.hasOwnProperty;
  function t(a, i) {
    return a == null ? !1 : r.call(a, i);
  }
  return Bi = t, Bi;
}
var ji, pd;
function br() {
  if (pd) return ji;
  pd = 1;
  var r = Xw();
  return ji = r, ji;
}
var Vi, gd;
function Qw() {
  if (gd) return Vi;
  gd = 1;
  var r = typeof Symbol == "function" ? Symbol : void 0;
  return Vi = r, Vi;
}
var Wi, bd;
function eq() {
  if (bd) return Wi;
  bd = 1;
  var r = Qw();
  return Wi = r, Wi;
}
var zi, wd;
function rq() {
  if (wd) return zi;
  wd = 1;
  var r = eq(), t = typeof r == "function" ? r.toStringTag : "";
  return zi = t, zi;
}
var Hi, qd;
function tq() {
  if (qd) return Hi;
  qd = 1;
  var r = br(), t = rq(), a = n1();
  function i(l) {
    var f, v, h;
    if (l == null)
      return a.call(l);
    v = l[t], f = r(l, t);
    try {
      l[t] = void 0;
    } catch {
      return a.call(l);
    }
    return h = a.call(l), f ? l[t] = v : delete l[t], h;
  }
  return Hi = i, Hi;
}
var Gi, _d;
function pe() {
  if (_d) return Gi;
  _d = 1;
  var r = lt(), t = Kw(), a = tq(), i;
  return r() ? i = a : i = t, Gi = i, Gi;
}
var Zi, $d;
function nq() {
  if ($d) return Zi;
  $d = 1;
  var r = pe(), t;
  function a(i) {
    return r(i) === "[object Array]";
  }
  return Array.isArray ? t = Array.isArray : t = a, Zi = t, Zi;
}
var Yi, Ed;
function ft() {
  if (Ed) return Yi;
  Ed = 1;
  var r = nq();
  return Yi = r, Yi;
}
var Ji, Td;
function iq() {
  if (Td) return Ji;
  Td = 1;
  var r = typeof Object.defineProperty == "function" ? Object.defineProperty : null;
  return Ji = r, Ji;
}
var Ki, Sd;
function aq() {
  if (Sd) return Ki;
  Sd = 1;
  var r = iq();
  function t() {
    try {
      return r({}, "x", {}), !0;
    } catch {
      return !1;
    }
  }
  return Ki = t, Ki;
}
var Xi, xd;
function sq() {
  if (xd) return Xi;
  xd = 1;
  var r = Object.defineProperty;
  return Xi = r, Xi;
}
var Qi, Id;
function i1() {
  if (Id) return Qi;
  Id = 1;
  function r(t) {
    return typeof t == "number";
  }
  return Qi = r, Qi;
}
var ea, Rd;
function a1() {
  if (Rd) return ea;
  Rd = 1;
  function r(i) {
    return i[0] === "-";
  }
  function t(i) {
    var l = "", f;
    for (f = 0; f < i; f++)
      l += "0";
    return l;
  }
  function a(i, l, f) {
    var v = !1, h = l - i.length;
    return h < 0 || (r(i) && (v = !0, i = i.substr(1)), i = f ? i + t(h) : t(h) + i, v && (i = "-" + i)), i;
  }
  return ea = a, ea;
}
var ra, Od;
function uq() {
  if (Od) return ra;
  Od = 1;
  var r = i1(), t = a1(), a = String.prototype.toLowerCase, i = String.prototype.toUpperCase;
  function l(f) {
    var v, h, p;
    switch (f.specifier) {
      case "b":
        v = 2;
        break;
      case "o":
        v = 8;
        break;
      case "x":
      case "X":
        v = 16;
        break;
      default:
        v = 10;
        break;
    }
    if (h = f.arg, p = parseInt(h, 10), !isFinite(p)) {
      if (!r(h))
        throw new Error("invalid integer. Value: " + h);
      p = 0;
    }
    return p < 0 && (f.specifier === "u" || v !== 10) && (p = 4294967295 + p + 1), p < 0 ? (h = (-p).toString(v), f.precision && (h = t(h, f.precision, f.padRight)), h = "-" + h) : (h = p.toString(v), !p && !f.precision ? h = "" : f.precision && (h = t(h, f.precision, f.padRight)), f.sign && (h = f.sign + h)), v === 16 && (f.alternate && (h = "0x" + h), h = f.specifier === i.call(f.specifier) ? i.call(h) : a.call(h)), v === 8 && f.alternate && h.charAt(0) !== "0" && (h = "0" + h), h;
  }
  return ra = l, ra;
}
var ta, Ad;
function oq() {
  if (Ad) return ta;
  Ad = 1;
  function r(t) {
    return typeof t == "string";
  }
  return ta = r, ta;
}
var na, Md;
function cq() {
  if (Md) return na;
  Md = 1;
  var r = Math.abs, t = String.prototype.toLowerCase, a = String.prototype.toUpperCase, i = String.prototype.replace, l = /e\+(\d)$/, f = /e-(\d)$/, v = /^(\d+)$/, h = /^(\d+)e/, p = /\.0$/, O = /\.0*e/, R = /(\..*[^0])0*e/;
  function _($, x) {
    var T, A;
    switch (x.specifier) {
      case "e":
      case "E":
        A = $.toExponential(x.precision);
        break;
      case "f":
      case "F":
        A = $.toFixed(x.precision);
        break;
      case "g":
      case "G":
        r($) < 1e-4 ? (T = x.precision, T > 0 && (T -= 1), A = $.toExponential(T)) : A = $.toPrecision(x.precision), x.alternate || (A = i.call(A, R, "$1e"), A = i.call(A, O, "e"), A = i.call(A, p, ""));
        break;
      default:
        throw new Error("invalid double notation. Value: " + x.specifier);
    }
    return A = i.call(A, l, "e+0$1"), A = i.call(A, f, "e-0$1"), x.alternate && (A = i.call(A, v, "$1."), A = i.call(A, h, "$1.e")), $ >= 0 && x.sign && (A = x.sign + A), A = x.specifier === a.call(x.specifier) ? a.call(A) : t.call(A), A;
  }
  return na = _, na;
}
var ia, Cd;
function lq() {
  if (Cd) return ia;
  Cd = 1;
  function r(a) {
    var i = "", l;
    for (l = 0; l < a; l++)
      i += " ";
    return i;
  }
  function t(a, i, l) {
    var f = i - a.length;
    return f < 0 || (a = l ? a + r(f) : r(f) + a), a;
  }
  return ia = t, ia;
}
var aa, Ld;
function fq() {
  if (Ld) return aa;
  Ld = 1;
  var r = uq(), t = oq(), a = i1(), i = cq(), l = lq(), f = a1(), v = String.fromCharCode, h = Array.isArray;
  function p(_) {
    return _ !== _;
  }
  function O(_) {
    var $ = {};
    return $.specifier = _.specifier, $.precision = _.precision === void 0 ? 1 : _.precision, $.width = _.width, $.flags = _.flags || "", $.mapping = _.mapping, $;
  }
  function R(_) {
    var $, x, T, A, k, M, L, U, N, P;
    if (!h(_))
      throw new TypeError("invalid argument. First argument must be an array. Value: `" + _ + "`.");
    for (M = "", L = 1, N = 0; N < _.length; N++)
      if (T = _[N], t(T))
        M += T;
      else {
        if ($ = T.precision !== void 0, T = O(T), !T.specifier)
          throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `" + N + "`. Value: `" + T + "`.");
        for (T.mapping && (L = T.mapping), x = T.flags, P = 0; P < x.length; P++)
          switch (A = x.charAt(P), A) {
            case " ":
              T.sign = " ";
              break;
            case "+":
              T.sign = "+";
              break;
            case "-":
              T.padRight = !0, T.padZeros = !1;
              break;
            case "0":
              T.padZeros = x.indexOf("-") < 0;
              break;
            case "#":
              T.alternate = !0;
              break;
            default:
              throw new Error("invalid flag: " + A);
          }
        if (T.width === "*") {
          if (T.width = parseInt(arguments[L], 10), L += 1, p(T.width))
            throw new TypeError("the argument for * width at position " + L + " is not a number. Value: `" + T.width + "`.");
          T.width < 0 && (T.padRight = !0, T.width = -T.width);
        }
        if ($ && T.precision === "*") {
          if (T.precision = parseInt(arguments[L], 10), L += 1, p(T.precision))
            throw new TypeError("the argument for * precision at position " + L + " is not a number. Value: `" + T.precision + "`.");
          T.precision < 0 && (T.precision = 1, $ = !1);
        }
        switch (T.arg = arguments[L], T.specifier) {
          case "b":
          case "o":
          case "x":
          case "X":
          case "d":
          case "i":
          case "u":
            $ && (T.padZeros = !1), T.arg = r(T);
            break;
          case "s":
            T.maxWidth = $ ? T.precision : -1, T.arg = String(T.arg);
            break;
          case "c":
            if (!p(T.arg)) {
              if (k = parseInt(T.arg, 10), k < 0 || k > 127)
                throw new Error("invalid character code. Value: " + T.arg);
              T.arg = p(k) ? String(T.arg) : v(k);
            }
            break;
          case "e":
          case "E":
          case "f":
          case "F":
          case "g":
          case "G":
            if ($ || (T.precision = 6), U = parseFloat(T.arg), !isFinite(U)) {
              if (!a(T.arg))
                throw new Error("invalid floating-point number. Value: " + M);
              U = T.arg, T.padZeros = !1;
            }
            T.arg = i(U, T);
            break;
          default:
            throw new Error("invalid specifier: " + T.specifier);
        }
        T.maxWidth >= 0 && T.arg.length > T.maxWidth && (T.arg = T.arg.substring(0, T.maxWidth)), T.padZeros ? T.arg = f(T.arg, T.width || T.precision, T.padRight) : T.width && (T.arg = l(T.arg, T.width, T.padRight)), M += T.arg || "", L += 1;
      }
    return M;
  }
  return aa = R, aa;
}
var sa, kd;
function hq() {
  if (kd) return sa;
  kd = 1;
  var r = fq();
  return sa = r, sa;
}
var ua, Nd;
function dq() {
  if (Nd) return ua;
  Nd = 1;
  var r = /%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;
  function t(i) {
    var l = {
      mapping: i[1] ? parseInt(i[1], 10) : void 0,
      flags: i[2],
      width: i[3],
      precision: i[5],
      specifier: i[6]
    };
    return i[4] === "." && i[5] === void 0 && (l.precision = "1"), l;
  }
  function a(i) {
    var l, f, v, h;
    for (f = [], h = 0, v = r.exec(i); v; )
      l = i.slice(h, r.lastIndex - v[0].length), l.length && f.push(l), v[6] === "%" ? f.push("%") : f.push(t(v)), h = r.lastIndex, v = r.exec(i);
    return l = i.slice(h), l.length && f.push(l), f;
  }
  return ua = a, ua;
}
var oa, Fd;
function mq() {
  if (Fd) return oa;
  Fd = 1;
  var r = dq();
  return oa = r, oa;
}
var ca, Dd;
function vq() {
  if (Dd) return ca;
  Dd = 1;
  function r(t) {
    return typeof t == "string";
  }
  return ca = r, ca;
}
var la, Pd;
function yq() {
  if (Pd) return la;
  Pd = 1;
  var r = hq(), t = mq(), a = vq();
  function i(l) {
    var f, v;
    if (!a(l))
      throw new TypeError(i("invalid argument. First argument must be a string. Value: `%s`.", l));
    for (f = [t(l)], v = 1; v < arguments.length; v++)
      f.push(arguments[v]);
    return r.apply(null, f);
  }
  return la = i, la;
}
var fa, Ud;
function Ze() {
  if (Ud) return fa;
  Ud = 1;
  var r = yq();
  return fa = r, fa;
}
var ha, Bd;
function pq() {
  if (Bd) return ha;
  Bd = 1;
  var r = Ze(), t = Object.prototype, a = t.toString, i = t.__defineGetter__, l = t.__defineSetter__, f = t.__lookupGetter__, v = t.__lookupSetter__;
  function h(p, O, R) {
    var _, $, x, T;
    if (typeof p != "object" || p === null || a.call(p) === "[object Array]")
      throw new TypeError(r("invalid argument. First argument must be an object. Value: `%s`.", p));
    if (typeof R != "object" || R === null || a.call(R) === "[object Array]")
      throw new TypeError(r("invalid argument. Property descriptor must be an object. Value: `%s`.", R));
    if ($ = "value" in R, $ && (f.call(p, O) || v.call(p, O) ? (_ = p.__proto__, p.__proto__ = t, delete p[O], p[O] = R.value, p.__proto__ = _) : p[O] = R.value), x = "get" in R, T = "set" in R, $ && (x || T))
      throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");
    return x && i && i.call(p, O, R.get), T && l && l.call(p, O, R.set), p;
  }
  return ha = h, ha;
}
var da, jd;
function s1() {
  if (jd) return da;
  jd = 1;
  var r = aq(), t = sq(), a = pq(), i;
  return r() ? i = t : i = a, da = i, da;
}
var ma, Vd;
function gq() {
  if (Vd) return ma;
  Vd = 1;
  var r = s1();
  function t(a, i, l) {
    r(a, i, {
      configurable: !1,
      enumerable: !1,
      writable: !1,
      value: l
    });
  }
  return ma = t, ma;
}
var va, Wd;
function ze() {
  if (Wd) return va;
  Wd = 1;
  var r = gq();
  return va = r, va;
}
var ya, zd;
function u1() {
  if (zd) return ya;
  zd = 1;
  function r(t) {
    return typeof t == "number";
  }
  return ya = r, ya;
}
var pa, Hd;
function bq() {
  return Hd || (Hd = 1, pa = Number), pa;
}
var ga, Gd;
function Gc() {
  if (Gd) return ga;
  Gd = 1;
  var r = bq();
  return ga = r, ga;
}
var ba, Zd;
function wq() {
  if (Zd) return ba;
  Zd = 1;
  var r = Gc(), t = r.prototype.toString;
  return ba = t, ba;
}
var wa, Yd;
function qq() {
  if (Yd) return wa;
  Yd = 1;
  var r = wq();
  function t(a) {
    try {
      return r.call(a), !0;
    } catch {
      return !1;
    }
  }
  return wa = t, wa;
}
var qa, Jd;
function o1() {
  if (Jd) return qa;
  Jd = 1;
  var r = lt(), t = pe(), a = Gc(), i = qq(), l = r();
  function f(v) {
    return typeof v == "object" ? v instanceof a ? !0 : l ? i(v) : t(v) === "[object Number]" : !1;
  }
  return qa = f, qa;
}
var _a, Kd;
function _q() {
  if (Kd) return _a;
  Kd = 1;
  var r = u1(), t = o1();
  function a(i) {
    return r(i) || t(i);
  }
  return _a = a, _a;
}
var $a, Xd;
function ht() {
  if (Xd) return $a;
  Xd = 1;
  var r = ze(), t = _q(), a = u1(), i = o1();
  return r(t, "isPrimitive", a), r(t, "isObject", i), $a = t, $a;
}
var Ea, Qd;
function Zc() {
  if (Qd) return Ea;
  Qd = 1;
  var r = Number.POSITIVE_INFINITY;
  return Ea = r, Ea;
}
var Ta, em;
function $q() {
  if (em) return Ta;
  em = 1;
  var r = Gc(), t = r.NEGATIVE_INFINITY;
  return Ta = t, Ta;
}
var Sa, rm;
function Eq() {
  if (rm) return Sa;
  rm = 1;
  var r = Math.floor;
  return Sa = r, Sa;
}
var xa, tm;
function Tq() {
  if (tm) return xa;
  tm = 1;
  var r = Eq();
  return xa = r, xa;
}
var Ia, nm;
function Sq() {
  if (nm) return Ia;
  nm = 1;
  var r = Tq();
  function t(a) {
    return r(a) === a;
  }
  return Ia = t, Ia;
}
var Ra, im;
function Yc() {
  if (im) return Ra;
  im = 1;
  var r = Sq();
  return Ra = r, Ra;
}
var Oa, am;
function c1() {
  if (am) return Oa;
  am = 1;
  var r = Zc(), t = $q(), a = Yc();
  function i(l) {
    return l < r && l > t && a(l);
  }
  return Oa = i, Oa;
}
var Aa, sm;
function l1() {
  if (sm) return Aa;
  sm = 1;
  var r = ht().isPrimitive, t = c1();
  function a(i) {
    return r(i) && t(i);
  }
  return Aa = a, Aa;
}
var Ma, um;
function f1() {
  if (um) return Ma;
  um = 1;
  var r = ht().isObject, t = c1();
  function a(i) {
    return r(i) && t(i.valueOf());
  }
  return Ma = a, Ma;
}
var Ca, om;
function xq() {
  if (om) return Ca;
  om = 1;
  var r = l1(), t = f1();
  function a(i) {
    return r(i) || t(i);
  }
  return Ca = a, Ca;
}
var La, cm;
function dt() {
  if (cm) return La;
  cm = 1;
  var r = ze(), t = xq(), a = l1(), i = f1();
  return r(t, "isPrimitive", a), r(t, "isObject", i), La = t, La;
}
var ka, lm;
function h1() {
  if (lm) return ka;
  lm = 1;
  var r = dt().isPrimitive;
  function t(a) {
    return r(a) && a >= 0;
  }
  return ka = t, ka;
}
var Na, fm;
function d1() {
  if (fm) return Na;
  fm = 1;
  var r = dt().isObject;
  function t(a) {
    return r(a) && a.valueOf() >= 0;
  }
  return Na = t, Na;
}
var Fa, hm;
function Iq() {
  if (hm) return Fa;
  hm = 1;
  var r = h1(), t = d1();
  function a(i) {
    return r(i) || t(i);
  }
  return Fa = a, Fa;
}
var Da, dm;
function Rq() {
  if (dm) return Da;
  dm = 1;
  var r = ze(), t = Iq(), a = h1(), i = d1();
  return r(t, "isPrimitive", a), r(t, "isObject", i), Da = t, Da;
}
var Pa, mm;
function Oq() {
  if (mm) return Pa;
  mm = 1;
  var r = ft(), t = Ze();
  function a(i) {
    if (typeof i != "function")
      throw new TypeError(t("invalid argument. Must provide a function. Value: `%s`.", i));
    return l;
    function l(f) {
      var v, h;
      if (!r(f) || (v = f.length, v === 0))
        return !1;
      for (h = 0; h < v; h++)
        if (i(f[h]) === !1)
          return !1;
      return !0;
    }
  }
  return Pa = a, Pa;
}
var Ua, vm;
function Aq() {
  if (vm) return Ua;
  vm = 1;
  var r = Oq();
  return Ua = r, Ua;
}
var Ba, ym;
function Mq() {
  if (ym) return Ba;
  ym = 1;
  function r(t) {
    return t !== null && typeof t == "object";
  }
  return Ba = r, Ba;
}
var ja, pm;
function m1() {
  if (pm) return ja;
  pm = 1;
  var r = ze(), t = Aq(), a = Mq(), i = t(a);
  return r(a, "isObjectLikeArray", i), ja = a, ja;
}
var Va, gm;
function Cq() {
  if (gm) return Va;
  gm = 1;
  var r = m1();
  function t(a) {
    return r(a) && // eslint-disable-next-line no-underscore-dangle
    (a._isBuffer || // for envs missing Object.prototype.constructor (e.g., Safari 5-7)
    a.constructor && // WARNING: `typeof` is not a foolproof check, as certain envs consider RegExp and NodeList instances to be functions
    typeof a.constructor.isBuffer == "function" && a.constructor.isBuffer(a));
  }
  return Va = t, Va;
}
var Wa, bm;
function Pr() {
  if (bm) return Wa;
  bm = 1;
  var r = Cq();
  return Wa = r, Wa;
}
var za, wm;
function Lq() {
  if (wm) return za;
  wm = 1;
  var r = Object;
  return za = r, za;
}
var Ha, qm;
function mt() {
  if (qm) return Ha;
  qm = 1;
  var r = Lq();
  return Ha = r, Ha;
}
var Ga, _m;
function kq() {
  if (_m) return Ga;
  _m = 1;
  var r = /./;
  return Ga = r, Ga;
}
var Za, $m;
function v1() {
  if ($m) return Za;
  $m = 1;
  function r(t) {
    return typeof t == "boolean";
  }
  return Za = r, Za;
}
var Ya, Em;
function Nq() {
  if (Em) return Ya;
  Em = 1;
  var r = Boolean;
  return Ya = r, Ya;
}
var Ja, Tm;
function Fq() {
  if (Tm) return Ja;
  Tm = 1;
  var r = Nq();
  return Ja = r, Ja;
}
var Ka, Sm;
function Dq() {
  if (Sm) return Ka;
  Sm = 1;
  var r = Boolean.prototype.toString;
  return Ka = r, Ka;
}
var Xa, xm;
function Pq() {
  if (xm) return Xa;
  xm = 1;
  var r = Dq();
  function t(a) {
    try {
      return r.call(a), !0;
    } catch {
      return !1;
    }
  }
  return Xa = t, Xa;
}
var Qa, Im;
function y1() {
  if (Im) return Qa;
  Im = 1;
  var r = lt(), t = pe(), a = Fq(), i = Pq(), l = r();
  function f(v) {
    return typeof v == "object" ? v instanceof a ? !0 : l ? i(v) : t(v) === "[object Boolean]" : !1;
  }
  return Qa = f, Qa;
}
var es, Rm;
function Uq() {
  if (Rm) return es;
  Rm = 1;
  var r = v1(), t = y1();
  function a(i) {
    return r(i) || t(i);
  }
  return es = a, es;
}
var rs, Om;
function Bq() {
  if (Om) return rs;
  Om = 1;
  var r = ze(), t = Uq(), a = v1(), i = y1();
  return r(t, "isPrimitive", a), r(t, "isObject", i), rs = t, rs;
}
var ts, Am;
function jq() {
  if (Am) return ts;
  Am = 1;
  function r() {
    return new Function("return this;")();
  }
  return ts = r, ts;
}
var ns, Mm;
function Vq() {
  if (Mm) return ns;
  Mm = 1;
  var r = typeof self == "object" ? self : null;
  return ns = r, ns;
}
var is, Cm;
function Wq() {
  if (Cm) return is;
  Cm = 1;
  var r = typeof window == "object" ? window : null;
  return is = r, is;
}
var as, Lm;
function zq() {
  if (Lm) return as;
  Lm = 1;
  var r = typeof globalThis == "object" ? globalThis : null;
  return as = r, as;
}
var ss, km;
function Hq() {
  if (km) return ss;
  km = 1;
  var r = Bq().isPrimitive, t = Ze(), a = jq(), i = Vq(), l = Wq(), f = zq();
  function v(h) {
    if (arguments.length) {
      if (!r(h))
        throw new TypeError(t("invalid argument. Must provide a boolean. Value: `%s`.", h));
      if (h)
        return a();
    }
    if (f)
      return f;
    if (i)
      return i;
    if (l)
      return l;
    throw new Error("unexpected error. Unable to resolve global object.");
  }
  return ss = v, ss;
}
var us, Nm;
function Gq() {
  if (Nm) return us;
  Nm = 1;
  var r = Hq(), t = r(), a = t.document && t.document.childNodes;
  return us = a, us;
}
var os, Fm;
function Zq() {
  if (Fm) return os;
  Fm = 1;
  var r = Int8Array;
  return os = r, os;
}
var cs, Dm;
function Yq() {
  if (Dm) return cs;
  Dm = 1;
  var r = kq(), t = Gq(), a = Zq();
  function i() {
    return (
      // Chrome 1-12 returns 'function' for regular expression instances (see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof):
      typeof r == "function" || // Safari 8 returns 'object' for typed array and weak map constructors (underscore #1929):
      typeof a == "object" || // PhantomJS 1.9 returns 'function' for `NodeList` instances (underscore #2236):
      typeof t == "function"
    );
  }
  return cs = i, cs;
}
var ls, Pm;
function p1() {
  if (Pm) return ls;
  Pm = 1;
  function r() {
    return /^\s*function\s*([^(]*)/i;
  }
  return ls = r, ls;
}
var fs, Um;
function Jq() {
  if (Um) return fs;
  Um = 1;
  var r = p1(), t = r();
  return fs = t, fs;
}
var hs, Bm;
function Kq() {
  if (Bm) return hs;
  Bm = 1;
  var r = ze(), t = p1(), a = Jq();
  return r(t, "REGEXP", a), hs = t, hs;
}
var ds, jm;
function Xq() {
  if (jm) return ds;
  jm = 1;
  var r = pe(), t = Kq().REGEXP, a = Pr();
  function i(l) {
    var f, v, h;
    if (v = r(l).slice(8, -1), (v === "Object" || v === "Error") && l.constructor) {
      if (h = l.constructor, typeof h.name == "string")
        return h.name;
      if (f = t.exec(h.toString()), f)
        return f[1];
    }
    return a(l) ? "Buffer" : v;
  }
  return ds = i, ds;
}
var ms, Vm;
function g1() {
  if (Vm) return ms;
  Vm = 1;
  var r = Xq();
  return ms = r, ms;
}
var vs, Wm;
function Qq() {
  if (Wm) return vs;
  Wm = 1;
  var r = g1();
  function t(a) {
    var i;
    return a === null ? "null" : (i = typeof a, i === "object" ? r(a).toLowerCase() : i);
  }
  return vs = t, vs;
}
var ys, zm;
function e_() {
  if (zm) return ys;
  zm = 1;
  var r = g1();
  function t(a) {
    return r(a).toLowerCase();
  }
  return ys = t, ys;
}
var ps, Hm;
function Jc() {
  if (Hm) return ps;
  Hm = 1;
  var r = Yq(), t = Qq(), a = e_(), i = r() ? a : t;
  return ps = i, ps;
}
var gs, Gm;
function r_() {
  if (Gm) return gs;
  Gm = 1;
  var r = Jc();
  function t(a) {
    return r(a) === "function";
  }
  return gs = t, gs;
}
var bs, Zm;
function b1() {
  if (Zm) return bs;
  Zm = 1;
  var r = r_();
  return bs = r, bs;
}
var ws, Ym;
function t_() {
  if (Ym) return ws;
  Ym = 1;
  var r = Object.getPrototypeOf;
  return ws = r, ws;
}
var qs, Jm;
function n_() {
  if (Jm) return qs;
  Jm = 1;
  function r(t) {
    return t.__proto__;
  }
  return qs = r, qs;
}
var _s, Km;
function i_() {
  if (Km) return _s;
  Km = 1;
  var r = pe(), t = mt(), a = n_();
  function i(l) {
    var f = a(l);
    return f || f === null ? f : r(l.constructor) === "[object Function]" ? l.constructor.prototype : l instanceof t ? t.prototype : null;
  }
  return _s = i, _s;
}
var $s, Xm;
function a_() {
  if (Xm) return $s;
  Xm = 1;
  var r = b1(), t = t_(), a = i_(), i;
  return r(Object.getPrototypeOf) ? i = t : i = a, $s = i, $s;
}
var Es, Qm;
function s_() {
  if (Qm) return Es;
  Qm = 1;
  var r = mt(), t = a_();
  function a(i) {
    return i == null ? null : (i = r(i), t(i));
  }
  return Es = a, Es;
}
var Ts, ev;
function w1() {
  if (ev) return Ts;
  ev = 1;
  var r = s_();
  return Ts = r, Ts;
}
var Ss, rv;
function u_() {
  if (rv) return Ss;
  rv = 1;
  var r = w1(), t = pe();
  function a(i) {
    if (typeof i != "object" || i === null)
      return !1;
    if (i instanceof Error)
      return !0;
    for (; i; ) {
      if (t(i) === "[object Error]")
        return !0;
      i = r(i);
    }
    return !1;
  }
  return Ss = a, Ss;
}
var xs, tv;
function o_() {
  if (tv) return xs;
  tv = 1;
  var r = u_();
  return xs = r, xs;
}
var Is, nv;
function q1() {
  if (nv) return Is;
  nv = 1;
  function r(t) {
    return typeof t == "string";
  }
  return Is = r, Is;
}
var Rs, iv;
function c_() {
  if (iv) return Rs;
  iv = 1;
  var r = String.prototype.valueOf;
  return Rs = r, Rs;
}
var Os, av;
function l_() {
  if (av) return Os;
  av = 1;
  var r = c_();
  function t(a) {
    try {
      return r.call(a), !0;
    } catch {
      return !1;
    }
  }
  return Os = t, Os;
}
var As, sv;
function _1() {
  if (sv) return As;
  sv = 1;
  var r = lt(), t = pe(), a = l_(), i = r();
  function l(f) {
    return typeof f == "object" ? f instanceof String ? !0 : i ? a(f) : t(f) === "[object String]" : !1;
  }
  return As = l, As;
}
var Ms, uv;
function f_() {
  if (uv) return Ms;
  uv = 1;
  var r = q1(), t = _1();
  function a(i) {
    return r(i) || t(i);
  }
  return Ms = a, Ms;
}
var Cs, ov;
function Kc() {
  if (ov) return Cs;
  ov = 1;
  var r = ze(), t = f_(), a = q1(), i = _1();
  return r(t, "isPrimitive", a), r(t, "isObject", i), Cs = t, Cs;
}
var Ls, cv;
function $1() {
  if (cv) return Ls;
  cv = 1;
  function r() {
    return /^\/((?:\\\/|[^\/])+)\/([imgy]*)$/;
  }
  return Ls = r, Ls;
}
var ks, lv;
function h_() {
  if (lv) return ks;
  lv = 1;
  var r = $1(), t = r();
  return ks = t, ks;
}
var Ns, fv;
function d_() {
  if (fv) return Ns;
  fv = 1;
  var r = ze(), t = $1(), a = h_();
  return r(t, "REGEXP", a), Ns = t, Ns;
}
var Fs, hv;
function m_() {
  if (hv) return Fs;
  hv = 1;
  var r = Kc().isPrimitive, t = d_(), a = Ze();
  function i(l) {
    if (!r(l))
      throw new TypeError(a("invalid argument. Must provide a regular expression string. Value: `%s`.", l));
    return l = t().exec(l), l ? new RegExp(l[1], l[2]) : null;
  }
  return Fs = i, Fs;
}
var Ds, dv;
function v_() {
  if (dv) return Ds;
  dv = 1;
  var r = m_();
  return Ds = r, Ds;
}
var Ps, mv;
function y_() {
  if (mv) return Ps;
  mv = 1;
  function r(t) {
    return t !== t;
  }
  return Ps = r, Ps;
}
var Us, vv;
function E1() {
  if (vv) return Us;
  vv = 1;
  var r = y_();
  return Us = r, Us;
}
var Bs, yv;
function T1() {
  if (yv) return Bs;
  yv = 1;
  var r = ht().isPrimitive, t = E1();
  function a(i) {
    return r(i) && t(i);
  }
  return Bs = a, Bs;
}
var js, pv;
function S1() {
  if (pv) return js;
  pv = 1;
  var r = ht().isObject, t = E1();
  function a(i) {
    return r(i) && t(i.valueOf());
  }
  return js = a, js;
}
var Vs, gv;
function p_() {
  if (gv) return Vs;
  gv = 1;
  var r = T1(), t = S1();
  function a(i) {
    return r(i) || t(i);
  }
  return Vs = a, Vs;
}
var Ws, bv;
function x1() {
  if (bv) return Ws;
  bv = 1;
  var r = ze(), t = p_(), a = T1(), i = S1();
  return r(t, "isPrimitive", a), r(t, "isObject", i), Ws = t, Ws;
}
var zs, wv;
function g_() {
  if (wv) return zs;
  wv = 1;
  var r = 9007199254740991;
  return zs = r, zs;
}
var Hs, qv;
function b_() {
  if (qv) return Hs;
  qv = 1;
  var r = Yc(), t = g_();
  function a(i) {
    return typeof i == "object" && i !== null && typeof i.length == "number" && r(i.length) && i.length >= 0 && i.length <= t;
  }
  return Hs = a, Hs;
}
var Gs, _v;
function w_() {
  if (_v) return Gs;
  _v = 1;
  var r = b_();
  return Gs = r, Gs;
}
var Zs, $v;
function q_() {
  if ($v) return Zs;
  $v = 1;
  var r = x1(), t = w_(), a = Kc().isPrimitive, i = dt().isPrimitive, l = Ze();
  function f(v, h, p) {
    var O, R;
    if (!t(v) && !a(v))
      throw new TypeError(l("invalid argument. First argument must be an array-like object. Value: `%s`.", v));
    if (O = v.length, O === 0)
      return -1;
    if (arguments.length === 3) {
      if (!i(p))
        throw new TypeError(l("invalid argument. Third argument must be an integer. Value: `%s`.", p));
      if (p >= 0) {
        if (p >= O)
          return -1;
        R = p;
      } else
        R = O + p, R < 0 && (R = 0);
    } else
      R = 0;
    if (r(h)) {
      for (; R < O; R++)
        if (r(v[R]))
          return R;
    } else
      for (; R < O; R++)
        if (v[R] === h)
          return R;
    return -1;
  }
  return Zs = f, Zs;
}
var Ys, Ev;
function I1() {
  if (Ev) return Ys;
  Ev = 1;
  var r = q_();
  return Ys = r, Ys;
}
var Js, Tv;
function Xc() {
  if (Tv) return Js;
  Tv = 1;
  function r(t) {
    return Object.keys(Object(t));
  }
  return Js = r, Js;
}
var Ks, Sv;
function __() {
  if (Sv) return Ks;
  Sv = 1;
  var r = Xc();
  function t() {
    return (r(arguments) || "").length !== 2;
  }
  function a() {
    return t(1, 2);
  }
  return Ks = a, Ks;
}
var Xs, xv;
function $_() {
  if (xv) return Xs;
  xv = 1;
  var r = typeof Object.keys < "u";
  return Xs = r, Xs;
}
var Qs, Iv;
function R1() {
  if (Iv) return Qs;
  Iv = 1;
  var r = pe();
  function t(a) {
    return r(a) === "[object Arguments]";
  }
  return Qs = t, Qs;
}
var eu, Rv;
function E_() {
  if (Rv) return eu;
  Rv = 1;
  var r = R1(), t;
  function a() {
    return r(arguments);
  }
  return t = a(), eu = t, eu;
}
var ru, Ov;
function O1() {
  if (Ov) return ru;
  Ov = 1;
  var r = Object.prototype.propertyIsEnumerable;
  return ru = r, ru;
}
var tu, Av;
function T_() {
  if (Av) return tu;
  Av = 1;
  var r = O1(), t;
  function a() {
    return !r.call("beep", "0");
  }
  return t = a(), tu = t, tu;
}
var nu, Mv;
function S_() {
  if (Mv) return nu;
  Mv = 1;
  var r = Kc(), t = x1().isPrimitive, a = dt().isPrimitive, i = O1(), l = T_();
  function f(v, h) {
    var p;
    return v == null ? !1 : (p = i.call(v, h), !p && l && r(v) ? (h = +h, !t(h) && a(h) && h >= 0 && h < v.length) : p);
  }
  return nu = f, nu;
}
var iu, Cv;
function Qc() {
  if (Cv) return iu;
  Cv = 1;
  var r = S_();
  return iu = r, iu;
}
var au, Lv;
function A1() {
  if (Lv) return au;
  Lv = 1;
  var r = 4294967295;
  return au = r, au;
}
var su, kv;
function x_() {
  if (kv) return su;
  kv = 1;
  var r = br(), t = Qc(), a = ft(), i = Yc(), l = A1();
  function f(v) {
    return v !== null && typeof v == "object" && !a(v) && typeof v.length == "number" && i(v.length) && v.length >= 0 && v.length <= l && r(v, "callee") && !t(v, "callee");
  }
  return su = f, su;
}
var uu, Nv;
function M1() {
  if (Nv) return uu;
  Nv = 1;
  var r = E_(), t = R1(), a = x_(), i;
  return r ? i = t : i = a, uu = i, uu;
}
var ou, Fv;
function I_() {
  if (Fv) return ou;
  Fv = 1;
  var r = M1(), t = Xc(), a = Array.prototype.slice;
  function i(l) {
    return r(l) ? t(a.call(l)) : t(l);
  }
  return ou = i, ou;
}
var cu, Dv;
function R_() {
  if (Dv) return cu;
  Dv = 1;
  function r() {
  }
  return cu = r, cu;
}
var lu, Pv;
function O_() {
  if (Pv) return lu;
  Pv = 1;
  var r = R_();
  return lu = r, lu;
}
var fu, Uv;
function A_() {
  if (Uv) return fu;
  Uv = 1;
  var r = Qc(), t = O_(), a = r(t, "prototype");
  return fu = a, fu;
}
var hu, Bv;
function M_() {
  if (Bv) return hu;
  Bv = 1;
  var r = Qc(), t = {
    toString: null
  }, a = !r(t, "toString");
  return hu = a, hu;
}
var du, jv;
function C1() {
  if (jv) return du;
  jv = 1;
  function r(t) {
    return t.constructor && t.constructor.prototype === t;
  }
  return du = r, du;
}
const C_ = [
  "console",
  "external",
  "frame",
  "frameElement",
  "frames",
  "innerHeight",
  "innerWidth",
  "outerHeight",
  "outerWidth",
  "pageXOffset",
  "pageYOffset",
  "parent",
  "scrollLeft",
  "scrollTop",
  "scrollX",
  "scrollY",
  "self",
  "webkitIndexedDB",
  "webkitStorageInfo",
  "window"
];
var mu, Vv;
function L_() {
  if (Vv) return mu;
  Vv = 1;
  var r = typeof window > "u" ? void 0 : window;
  return mu = r, mu;
}
var vu, Wv;
function k_() {
  if (Wv) return vu;
  Wv = 1;
  var r = br(), t = I1(), a = Jc(), i = C1(), l = C_, f = L_(), v;
  function h() {
    var p;
    if (a(f) === "undefined")
      return !1;
    for (p in f)
      try {
        t(l, p) === -1 && r(f, p) && f[p] !== null && a(f[p]) === "object" && i(f[p]);
      } catch {
        return !0;
      }
    return !1;
  }
  return v = h(), vu = v, vu;
}
var yu, zv;
function N_() {
  if (zv) return yu;
  zv = 1;
  var r = typeof window < "u";
  return yu = r, yu;
}
var pu, Hv;
function F_() {
  if (Hv) return pu;
  Hv = 1;
  var r = k_(), t = C1(), a = N_();
  function i(l) {
    if (a === !1 && !r)
      return t(l);
    try {
      return t(l);
    } catch {
      return !1;
    }
  }
  return pu = i, pu;
}
const D_ = [
  "toString",
  "toLocaleString",
  "valueOf",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "constructor"
];
var gu, Gv;
function P_() {
  if (Gv) return gu;
  Gv = 1;
  var r = m1(), t = br(), a = M1(), i = A_(), l = M_(), f = F_(), v = D_;
  function h(p) {
    var O, R, _, $, x, T, A;
    if ($ = [], a(p)) {
      for (A = 0; A < p.length; A++)
        $.push(A.toString());
      return $;
    }
    if (typeof p == "string") {
      if (p.length > 0 && !t(p, "0"))
        for (A = 0; A < p.length; A++)
          $.push(A.toString());
    } else {
      if (_ = typeof p == "function", _ === !1 && !r(p))
        return $;
      R = i && _;
    }
    for (x in p)
      !(R && x === "prototype") && t(p, x) && $.push(String(x));
    if (l)
      for (O = f(p), A = 0; A < v.length; A++)
        T = v[A], !(O && T === "constructor") && t(p, T) && $.push(String(T));
    return $;
  }
  return gu = h, gu;
}
var bu, Zv;
function U_() {
  if (Zv) return bu;
  Zv = 1;
  var r = __(), t = $_(), a = Xc(), i = I_(), l = P_(), f;
  return t ? r() ? f = i : f = a : f = l, bu = f, bu;
}
var wu, Yv;
function L1() {
  if (Yv) return wu;
  Yv = 1;
  var r = U_();
  return wu = r, wu;
}
var qu, Jv;
function B_() {
  if (Jv) return qu;
  Jv = 1;
  var r = typeof Object.getOwnPropertyNames < "u";
  return qu = r, qu;
}
var _u, Kv;
function j_() {
  if (Kv) return _u;
  Kv = 1;
  var r = mt(), t = r.getOwnPropertyNames;
  function a(i) {
    return t(r(i));
  }
  return _u = a, _u;
}
var $u, Xv;
function V_() {
  if (Xv) return $u;
  Xv = 1;
  var r = mt(), t = L1();
  function a(i) {
    return t(r(i));
  }
  return $u = a, $u;
}
var Eu, Qv;
function W_() {
  if (Qv) return Eu;
  Qv = 1;
  var r = B_(), t = j_(), a = V_(), i;
  return r ? i = t : i = a, Eu = i, Eu;
}
var Tu, ey;
function z_() {
  if (ey) return Tu;
  ey = 1;
  var r = typeof Object.getOwnPropertyDescriptor < "u";
  return Tu = r, Tu;
}
var Su, ry;
function H_() {
  if (ry) return Su;
  ry = 1;
  var r = Object.getOwnPropertyDescriptor;
  function t(a, i) {
    var l;
    return a == null ? null : (l = r(a, i), l === void 0 ? null : l);
  }
  return Su = t, Su;
}
var xu, ty;
function G_() {
  if (ty) return xu;
  ty = 1;
  var r = br();
  function t(a, i) {
    return r(a, i) ? {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: a[i]
    } : null;
  }
  return xu = t, xu;
}
var Iu, ny;
function Z_() {
  if (ny) return Iu;
  ny = 1;
  var r = z_(), t = H_(), a = G_(), i;
  return r ? i = t : i = a, Iu = i, Iu;
}
var Ru, iy;
function Y_() {
  if (iy) return Ru;
  iy = 1;
  var r = typeof Buffer == "function" ? Buffer : null;
  return Ru = r, Ru;
}
var Ou, ay;
function J_() {
  if (ay) return Ou;
  ay = 1;
  var r = Pr(), t = Y_();
  function a() {
    var i, l;
    if (typeof t != "function")
      return !1;
    try {
      typeof t.from == "function" ? l = t.from([1, 2, 3, 4]) : l = new t([1, 2, 3, 4]), i = r(l) && l[0] === 1 && l[1] === 2 && l[2] === 3 && l[3] === 4;
    } catch {
      i = !1;
    }
    return i;
  }
  return Ou = a, Ou;
}
var Au, sy;
function K_() {
  if (sy) return Au;
  sy = 1;
  var r = J_();
  return Au = r, Au;
}
var Mu = {}, kr = {}, uy;
function X_() {
  if (uy) return kr;
  uy = 1, kr.byteLength = h, kr.toByteArray = O, kr.fromByteArray = $;
  for (var r = [], t = [], a = typeof Uint8Array < "u" ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", l = 0, f = i.length; l < f; ++l)
    r[l] = i[l], t[i.charCodeAt(l)] = l;
  t[45] = 62, t[95] = 63;
  function v(x) {
    var T = x.length;
    if (T % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    var A = x.indexOf("=");
    A === -1 && (A = T);
    var k = A === T ? 0 : 4 - A % 4;
    return [A, k];
  }
  function h(x) {
    var T = v(x), A = T[0], k = T[1];
    return (A + k) * 3 / 4 - k;
  }
  function p(x, T, A) {
    return (T + A) * 3 / 4 - A;
  }
  function O(x) {
    var T, A = v(x), k = A[0], M = A[1], L = new a(p(x, k, M)), U = 0, N = M > 0 ? k - 4 : k, P;
    for (P = 0; P < N; P += 4)
      T = t[x.charCodeAt(P)] << 18 | t[x.charCodeAt(P + 1)] << 12 | t[x.charCodeAt(P + 2)] << 6 | t[x.charCodeAt(P + 3)], L[U++] = T >> 16 & 255, L[U++] = T >> 8 & 255, L[U++] = T & 255;
    return M === 2 && (T = t[x.charCodeAt(P)] << 2 | t[x.charCodeAt(P + 1)] >> 4, L[U++] = T & 255), M === 1 && (T = t[x.charCodeAt(P)] << 10 | t[x.charCodeAt(P + 1)] << 4 | t[x.charCodeAt(P + 2)] >> 2, L[U++] = T >> 8 & 255, L[U++] = T & 255), L;
  }
  function R(x) {
    return r[x >> 18 & 63] + r[x >> 12 & 63] + r[x >> 6 & 63] + r[x & 63];
  }
  function _(x, T, A) {
    for (var k, M = [], L = T; L < A; L += 3)
      k = (x[L] << 16 & 16711680) + (x[L + 1] << 8 & 65280) + (x[L + 2] & 255), M.push(R(k));
    return M.join("");
  }
  function $(x) {
    for (var T, A = x.length, k = A % 3, M = [], L = 16383, U = 0, N = A - k; U < N; U += L)
      M.push(_(x, U, U + L > N ? N : U + L));
    return k === 1 ? (T = x[A - 1], M.push(
      r[T >> 2] + r[T << 4 & 63] + "=="
    )) : k === 2 && (T = (x[A - 2] << 8) + x[A - 1], M.push(
      r[T >> 10] + r[T >> 4 & 63] + r[T << 2 & 63] + "="
    )), M.join("");
  }
  return kr;
}
var it = {};
var oy;
function Q_() {
  return oy || (oy = 1, it.read = function(r, t, a, i, l) {
    var f, v, h = l * 8 - i - 1, p = (1 << h) - 1, O = p >> 1, R = -7, _ = a ? l - 1 : 0, $ = a ? -1 : 1, x = r[t + _];
    for (_ += $, f = x & (1 << -R) - 1, x >>= -R, R += h; R > 0; f = f * 256 + r[t + _], _ += $, R -= 8)
      ;
    for (v = f & (1 << -R) - 1, f >>= -R, R += i; R > 0; v = v * 256 + r[t + _], _ += $, R -= 8)
      ;
    if (f === 0)
      f = 1 - O;
    else {
      if (f === p)
        return v ? NaN : (x ? -1 : 1) * (1 / 0);
      v = v + Math.pow(2, i), f = f - O;
    }
    return (x ? -1 : 1) * v * Math.pow(2, f - i);
  }, it.write = function(r, t, a, i, l, f) {
    var v, h, p, O = f * 8 - l - 1, R = (1 << O) - 1, _ = R >> 1, $ = l === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, x = i ? 0 : f - 1, T = i ? 1 : -1, A = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
    for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (h = isNaN(t) ? 1 : 0, v = R) : (v = Math.floor(Math.log(t) / Math.LN2), t * (p = Math.pow(2, -v)) < 1 && (v--, p *= 2), v + _ >= 1 ? t += $ / p : t += $ * Math.pow(2, 1 - _), t * p >= 2 && (v++, p /= 2), v + _ >= R ? (h = 0, v = R) : v + _ >= 1 ? (h = (t * p - 1) * Math.pow(2, l), v = v + _) : (h = t * Math.pow(2, _ - 1) * Math.pow(2, l), v = 0)); l >= 8; r[a + x] = h & 255, x += T, h /= 256, l -= 8)
      ;
    for (v = v << l | h, O += l; O > 0; r[a + x] = v & 255, x += T, v /= 256, O -= 8)
      ;
    r[a + x - T] |= A * 128;
  }), it;
}
var cy;
function e$() {
  return cy || (cy = 1, (function(r) {
    const t = X_(), a = Q_(), i = typeof Symbol == "function" && typeof Symbol.for == "function" ? /* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom") : null;
    r.Buffer = h, r.SlowBuffer = L, r.INSPECT_MAX_BYTES = 50;
    const l = 2147483647;
    r.kMaxLength = l, h.TYPED_ARRAY_SUPPORT = f(), !h.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
      "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
    );
    function f() {
      try {
        const m = new Uint8Array(1), s = { foo: function() {
          return 42;
        } };
        return Object.setPrototypeOf(s, Uint8Array.prototype), Object.setPrototypeOf(m, s), m.foo() === 42;
      } catch {
        return !1;
      }
    }
    Object.defineProperty(h.prototype, "parent", {
      enumerable: !0,
      get: function() {
        if (h.isBuffer(this))
          return this.buffer;
      }
    }), Object.defineProperty(h.prototype, "offset", {
      enumerable: !0,
      get: function() {
        if (h.isBuffer(this))
          return this.byteOffset;
      }
    });
    function v(m) {
      if (m > l)
        throw new RangeError('The value "' + m + '" is invalid for option "size"');
      const s = new Uint8Array(m);
      return Object.setPrototypeOf(s, h.prototype), s;
    }
    function h(m, s, o) {
      if (typeof m == "number") {
        if (typeof s == "string")
          throw new TypeError(
            'The "string" argument must be of type string. Received type number'
          );
        return _(m);
      }
      return p(m, s, o);
    }
    h.poolSize = 8192;
    function p(m, s, o) {
      if (typeof m == "string")
        return $(m, s);
      if (ArrayBuffer.isView(m))
        return T(m);
      if (m == null)
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof m
        );
      if (Ee(m, ArrayBuffer) || m && Ee(m.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (Ee(m, SharedArrayBuffer) || m && Ee(m.buffer, SharedArrayBuffer)))
        return A(m, s, o);
      if (typeof m == "number")
        throw new TypeError(
          'The "value" argument must not be of type number. Received type number'
        );
      const y = m.valueOf && m.valueOf();
      if (y != null && y !== m)
        return h.from(y, s, o);
      const b = k(m);
      if (b) return b;
      if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof m[Symbol.toPrimitive] == "function")
        return h.from(m[Symbol.toPrimitive]("string"), s, o);
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof m
      );
    }
    h.from = function(m, s, o) {
      return p(m, s, o);
    }, Object.setPrototypeOf(h.prototype, Uint8Array.prototype), Object.setPrototypeOf(h, Uint8Array);
    function O(m) {
      if (typeof m != "number")
        throw new TypeError('"size" argument must be of type number');
      if (m < 0)
        throw new RangeError('The value "' + m + '" is invalid for option "size"');
    }
    function R(m, s, o) {
      return O(m), m <= 0 ? v(m) : s !== void 0 ? typeof o == "string" ? v(m).fill(s, o) : v(m).fill(s) : v(m);
    }
    h.alloc = function(m, s, o) {
      return R(m, s, o);
    };
    function _(m) {
      return O(m), v(m < 0 ? 0 : M(m) | 0);
    }
    h.allocUnsafe = function(m) {
      return _(m);
    }, h.allocUnsafeSlow = function(m) {
      return _(m);
    };
    function $(m, s) {
      if ((typeof s != "string" || s === "") && (s = "utf8"), !h.isEncoding(s))
        throw new TypeError("Unknown encoding: " + s);
      const o = U(m, s) | 0;
      let y = v(o);
      const b = y.write(m, s);
      return b !== o && (y = y.slice(0, b)), y;
    }
    function x(m) {
      const s = m.length < 0 ? 0 : M(m.length) | 0, o = v(s);
      for (let y = 0; y < s; y += 1)
        o[y] = m[y] & 255;
      return o;
    }
    function T(m) {
      if (Ee(m, Uint8Array)) {
        const s = new Uint8Array(m);
        return A(s.buffer, s.byteOffset, s.byteLength);
      }
      return x(m);
    }
    function A(m, s, o) {
      if (s < 0 || m.byteLength < s)
        throw new RangeError('"offset" is outside of buffer bounds');
      if (m.byteLength < s + (o || 0))
        throw new RangeError('"length" is outside of buffer bounds');
      let y;
      return s === void 0 && o === void 0 ? y = new Uint8Array(m) : o === void 0 ? y = new Uint8Array(m, s) : y = new Uint8Array(m, s, o), Object.setPrototypeOf(y, h.prototype), y;
    }
    function k(m) {
      if (h.isBuffer(m)) {
        const s = M(m.length) | 0, o = v(s);
        return o.length === 0 || m.copy(o, 0, 0, s), o;
      }
      if (m.length !== void 0)
        return typeof m.length != "number" || _r(m.length) ? v(0) : x(m);
      if (m.type === "Buffer" && Array.isArray(m.data))
        return x(m.data);
    }
    function M(m) {
      if (m >= l)
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + l.toString(16) + " bytes");
      return m | 0;
    }
    function L(m) {
      return +m != m && (m = 0), h.alloc(+m);
    }
    h.isBuffer = function(s) {
      return s != null && s._isBuffer === !0 && s !== h.prototype;
    }, h.compare = function(s, o) {
      if (Ee(s, Uint8Array) && (s = h.from(s, s.offset, s.byteLength)), Ee(o, Uint8Array) && (o = h.from(o, o.offset, o.byteLength)), !h.isBuffer(s) || !h.isBuffer(o))
        throw new TypeError(
          'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
        );
      if (s === o) return 0;
      let y = s.length, b = o.length;
      for (let S = 0, I = Math.min(y, b); S < I; ++S)
        if (s[S] !== o[S]) {
          y = s[S], b = o[S];
          break;
        }
      return y < b ? -1 : b < y ? 1 : 0;
    }, h.isEncoding = function(s) {
      switch (String(s).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return !0;
        default:
          return !1;
      }
    }, h.concat = function(s, o) {
      if (!Array.isArray(s))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (s.length === 0)
        return h.alloc(0);
      let y;
      if (o === void 0)
        for (o = 0, y = 0; y < s.length; ++y)
          o += s[y].length;
      const b = h.allocUnsafe(o);
      let S = 0;
      for (y = 0; y < s.length; ++y) {
        let I = s[y];
        if (Ee(I, Uint8Array))
          S + I.length > b.length ? (h.isBuffer(I) || (I = h.from(I)), I.copy(b, S)) : Uint8Array.prototype.set.call(
            b,
            I,
            S
          );
        else if (h.isBuffer(I))
          I.copy(b, S);
        else
          throw new TypeError('"list" argument must be an Array of Buffers');
        S += I.length;
      }
      return b;
    };
    function U(m, s) {
      if (h.isBuffer(m))
        return m.length;
      if (ArrayBuffer.isView(m) || Ee(m, ArrayBuffer))
        return m.byteLength;
      if (typeof m != "string")
        throw new TypeError(
          'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof m
        );
      const o = m.length, y = arguments.length > 2 && arguments[2] === !0;
      if (!y && o === 0) return 0;
      let b = !1;
      for (; ; )
        switch (s) {
          case "ascii":
          case "latin1":
          case "binary":
            return o;
          case "utf8":
          case "utf-8":
            return Xe(m).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return o * 2;
          case "hex":
            return o >>> 1;
          case "base64":
            return jr(m).length;
          default:
            if (b)
              return y ? -1 : Xe(m).length;
            s = ("" + s).toLowerCase(), b = !0;
        }
    }
    h.byteLength = U;
    function N(m, s, o) {
      let y = !1;
      if ((s === void 0 || s < 0) && (s = 0), s > this.length || ((o === void 0 || o > this.length) && (o = this.length), o <= 0) || (o >>>= 0, s >>>= 0, o <= s))
        return "";
      for (m || (m = "utf8"); ; )
        switch (m) {
          case "hex":
            return ue(this, s, o);
          case "utf8":
          case "utf-8":
            return we(this, s, o);
          case "ascii":
            return qe(this, s, o);
          case "latin1":
          case "binary":
            return De(this, s, o);
          case "base64":
            return re(this, s, o);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return Ve(this, s, o);
          default:
            if (y) throw new TypeError("Unknown encoding: " + m);
            m = (m + "").toLowerCase(), y = !0;
        }
    }
    h.prototype._isBuffer = !0;
    function P(m, s, o) {
      const y = m[s];
      m[s] = m[o], m[o] = y;
    }
    h.prototype.swap16 = function() {
      const s = this.length;
      if (s % 2 !== 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (let o = 0; o < s; o += 2)
        P(this, o, o + 1);
      return this;
    }, h.prototype.swap32 = function() {
      const s = this.length;
      if (s % 4 !== 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (let o = 0; o < s; o += 4)
        P(this, o, o + 3), P(this, o + 1, o + 2);
      return this;
    }, h.prototype.swap64 = function() {
      const s = this.length;
      if (s % 8 !== 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (let o = 0; o < s; o += 8)
        P(this, o, o + 7), P(this, o + 1, o + 6), P(this, o + 2, o + 5), P(this, o + 3, o + 4);
      return this;
    }, h.prototype.toString = function() {
      const s = this.length;
      return s === 0 ? "" : arguments.length === 0 ? we(this, 0, s) : N.apply(this, arguments);
    }, h.prototype.toLocaleString = h.prototype.toString, h.prototype.equals = function(s) {
      if (!h.isBuffer(s)) throw new TypeError("Argument must be a Buffer");
      return this === s ? !0 : h.compare(this, s) === 0;
    }, h.prototype.inspect = function() {
      let s = "";
      const o = r.INSPECT_MAX_BYTES;
      return s = this.toString("hex", 0, o).replace(/(.{2})/g, "$1 ").trim(), this.length > o && (s += " ... "), "<Buffer " + s + ">";
    }, i && (h.prototype[i] = h.prototype.inspect), h.prototype.compare = function(s, o, y, b, S) {
      if (Ee(s, Uint8Array) && (s = h.from(s, s.offset, s.byteLength)), !h.isBuffer(s))
        throw new TypeError(
          'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof s
        );
      if (o === void 0 && (o = 0), y === void 0 && (y = s ? s.length : 0), b === void 0 && (b = 0), S === void 0 && (S = this.length), o < 0 || y > s.length || b < 0 || S > this.length)
        throw new RangeError("out of range index");
      if (b >= S && o >= y)
        return 0;
      if (b >= S)
        return -1;
      if (o >= y)
        return 1;
      if (o >>>= 0, y >>>= 0, b >>>= 0, S >>>= 0, this === s) return 0;
      let I = S - b, G = y - o;
      const Y = Math.min(I, G), te = this.slice(b, S), ie = s.slice(o, y);
      for (let X = 0; X < Y; ++X)
        if (te[X] !== ie[X]) {
          I = te[X], G = ie[X];
          break;
        }
      return I < G ? -1 : G < I ? 1 : 0;
    };
    function ae(m, s, o, y, b) {
      if (m.length === 0) return -1;
      if (typeof o == "string" ? (y = o, o = 0) : o > 2147483647 ? o = 2147483647 : o < -2147483648 && (o = -2147483648), o = +o, _r(o) && (o = b ? 0 : m.length - 1), o < 0 && (o = m.length + o), o >= m.length) {
        if (b) return -1;
        o = m.length - 1;
      } else if (o < 0)
        if (b) o = 0;
        else return -1;
      if (typeof s == "string" && (s = h.from(s, y)), h.isBuffer(s))
        return s.length === 0 ? -1 : ee(m, s, o, y, b);
      if (typeof s == "number")
        return s = s & 255, typeof Uint8Array.prototype.indexOf == "function" ? b ? Uint8Array.prototype.indexOf.call(m, s, o) : Uint8Array.prototype.lastIndexOf.call(m, s, o) : ee(m, [s], o, y, b);
      throw new TypeError("val must be string, number or Buffer");
    }
    function ee(m, s, o, y, b) {
      let S = 1, I = m.length, G = s.length;
      if (y !== void 0 && (y = String(y).toLowerCase(), y === "ucs2" || y === "ucs-2" || y === "utf16le" || y === "utf-16le")) {
        if (m.length < 2 || s.length < 2)
          return -1;
        S = 2, I /= 2, G /= 2, o /= 2;
      }
      function Y(ie, X) {
        return S === 1 ? ie[X] : ie.readUInt16BE(X * S);
      }
      let te;
      if (b) {
        let ie = -1;
        for (te = o; te < I; te++)
          if (Y(m, te) === Y(s, ie === -1 ? 0 : te - ie)) {
            if (ie === -1 && (ie = te), te - ie + 1 === G) return ie * S;
          } else
            ie !== -1 && (te -= te - ie), ie = -1;
      } else
        for (o + G > I && (o = I - G), te = o; te >= 0; te--) {
          let ie = !0;
          for (let X = 0; X < G; X++)
            if (Y(m, te + X) !== Y(s, X)) {
              ie = !1;
              break;
            }
          if (ie) return te;
        }
      return -1;
    }
    h.prototype.includes = function(s, o, y) {
      return this.indexOf(s, o, y) !== -1;
    }, h.prototype.indexOf = function(s, o, y) {
      return ae(this, s, o, y, !0);
    }, h.prototype.lastIndexOf = function(s, o, y) {
      return ae(this, s, o, y, !1);
    };
    function B(m, s, o, y) {
      o = Number(o) || 0;
      const b = m.length - o;
      y ? (y = Number(y), y > b && (y = b)) : y = b;
      const S = s.length;
      y > S / 2 && (y = S / 2);
      let I;
      for (I = 0; I < y; ++I) {
        const G = parseInt(s.substr(I * 2, 2), 16);
        if (_r(G)) return I;
        m[o + I] = G;
      }
      return I;
    }
    function z(m, s, o, y) {
      return ir(Xe(s, m.length - o), m, o, y);
    }
    function he(m, s, o, y) {
      return ir(Br(s), m, o, y);
    }
    function D(m, s, o, y) {
      return ir(jr(s), m, o, y);
    }
    function ge(m, s, o, y) {
      return ir(qr(s, m.length - o), m, o, y);
    }
    h.prototype.write = function(s, o, y, b) {
      if (o === void 0)
        b = "utf8", y = this.length, o = 0;
      else if (y === void 0 && typeof o == "string")
        b = o, y = this.length, o = 0;
      else if (isFinite(o))
        o = o >>> 0, isFinite(y) ? (y = y >>> 0, b === void 0 && (b = "utf8")) : (b = y, y = void 0);
      else
        throw new Error(
          "Buffer.write(string, encoding, offset[, length]) is no longer supported"
        );
      const S = this.length - o;
      if ((y === void 0 || y > S) && (y = S), s.length > 0 && (y < 0 || o < 0) || o > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
      b || (b = "utf8");
      let I = !1;
      for (; ; )
        switch (b) {
          case "hex":
            return B(this, s, o, y);
          case "utf8":
          case "utf-8":
            return z(this, s, o, y);
          case "ascii":
          case "latin1":
          case "binary":
            return he(this, s, o, y);
          case "base64":
            return D(this, s, o, y);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ge(this, s, o, y);
          default:
            if (I) throw new TypeError("Unknown encoding: " + b);
            b = ("" + b).toLowerCase(), I = !0;
        }
    }, h.prototype.toJSON = function() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function re(m, s, o) {
      return s === 0 && o === m.length ? t.fromByteArray(m) : t.fromByteArray(m.slice(s, o));
    }
    function we(m, s, o) {
      o = Math.min(m.length, o);
      const y = [];
      let b = s;
      for (; b < o; ) {
        const S = m[b];
        let I = null, G = S > 239 ? 4 : S > 223 ? 3 : S > 191 ? 2 : 1;
        if (b + G <= o) {
          let Y, te, ie, X;
          switch (G) {
            case 1:
              S < 128 && (I = S);
              break;
            case 2:
              Y = m[b + 1], (Y & 192) === 128 && (X = (S & 31) << 6 | Y & 63, X > 127 && (I = X));
              break;
            case 3:
              Y = m[b + 1], te = m[b + 2], (Y & 192) === 128 && (te & 192) === 128 && (X = (S & 15) << 12 | (Y & 63) << 6 | te & 63, X > 2047 && (X < 55296 || X > 57343) && (I = X));
              break;
            case 4:
              Y = m[b + 1], te = m[b + 2], ie = m[b + 3], (Y & 192) === 128 && (te & 192) === 128 && (ie & 192) === 128 && (X = (S & 15) << 18 | (Y & 63) << 12 | (te & 63) << 6 | ie & 63, X > 65535 && X < 1114112 && (I = X));
          }
        }
        I === null ? (I = 65533, G = 1) : I > 65535 && (I -= 65536, y.push(I >>> 10 & 1023 | 55296), I = 56320 | I & 1023), y.push(I), b += G;
      }
      return Ie(y);
    }
    const se = 4096;
    function Ie(m) {
      const s = m.length;
      if (s <= se)
        return String.fromCharCode.apply(String, m);
      let o = "", y = 0;
      for (; y < s; )
        o += String.fromCharCode.apply(
          String,
          m.slice(y, y += se)
        );
      return o;
    }
    function qe(m, s, o) {
      let y = "";
      o = Math.min(m.length, o);
      for (let b = s; b < o; ++b)
        y += String.fromCharCode(m[b] & 127);
      return y;
    }
    function De(m, s, o) {
      let y = "";
      o = Math.min(m.length, o);
      for (let b = s; b < o; ++b)
        y += String.fromCharCode(m[b]);
      return y;
    }
    function ue(m, s, o) {
      const y = m.length;
      (!s || s < 0) && (s = 0), (!o || o < 0 || o > y) && (o = y);
      let b = "";
      for (let S = s; S < o; ++S)
        b += yt[m[S]];
      return b;
    }
    function Ve(m, s, o) {
      const y = m.slice(s, o);
      let b = "";
      for (let S = 0; S < y.length - 1; S += 2)
        b += String.fromCharCode(y[S] + y[S + 1] * 256);
      return b;
    }
    h.prototype.slice = function(s, o) {
      const y = this.length;
      s = ~~s, o = o === void 0 ? y : ~~o, s < 0 ? (s += y, s < 0 && (s = 0)) : s > y && (s = y), o < 0 ? (o += y, o < 0 && (o = 0)) : o > y && (o = y), o < s && (o = s);
      const b = this.subarray(s, o);
      return Object.setPrototypeOf(b, h.prototype), b;
    };
    function oe(m, s, o) {
      if (m % 1 !== 0 || m < 0) throw new RangeError("offset is not uint");
      if (m + s > o) throw new RangeError("Trying to access beyond buffer length");
    }
    h.prototype.readUintLE = h.prototype.readUIntLE = function(s, o, y) {
      s = s >>> 0, o = o >>> 0, y || oe(s, o, this.length);
      let b = this[s], S = 1, I = 0;
      for (; ++I < o && (S *= 256); )
        b += this[s + I] * S;
      return b;
    }, h.prototype.readUintBE = h.prototype.readUIntBE = function(s, o, y) {
      s = s >>> 0, o = o >>> 0, y || oe(s, o, this.length);
      let b = this[s + --o], S = 1;
      for (; o > 0 && (S *= 256); )
        b += this[s + --o] * S;
      return b;
    }, h.prototype.readUint8 = h.prototype.readUInt8 = function(s, o) {
      return s = s >>> 0, o || oe(s, 1, this.length), this[s];
    }, h.prototype.readUint16LE = h.prototype.readUInt16LE = function(s, o) {
      return s = s >>> 0, o || oe(s, 2, this.length), this[s] | this[s + 1] << 8;
    }, h.prototype.readUint16BE = h.prototype.readUInt16BE = function(s, o) {
      return s = s >>> 0, o || oe(s, 2, this.length), this[s] << 8 | this[s + 1];
    }, h.prototype.readUint32LE = h.prototype.readUInt32LE = function(s, o) {
      return s = s >>> 0, o || oe(s, 4, this.length), (this[s] | this[s + 1] << 8 | this[s + 2] << 16) + this[s + 3] * 16777216;
    }, h.prototype.readUint32BE = h.prototype.readUInt32BE = function(s, o) {
      return s = s >>> 0, o || oe(s, 4, this.length), this[s] * 16777216 + (this[s + 1] << 16 | this[s + 2] << 8 | this[s + 3]);
    }, h.prototype.readBigUInt64LE = $e(function(s) {
      s = s >>> 0, Ue(s, "offset");
      const o = this[s], y = this[s + 7];
      (o === void 0 || y === void 0) && Je(s, this.length - 8);
      const b = o + this[++s] * 2 ** 8 + this[++s] * 2 ** 16 + this[++s] * 2 ** 24, S = this[++s] + this[++s] * 2 ** 8 + this[++s] * 2 ** 16 + y * 2 ** 24;
      return BigInt(b) + (BigInt(S) << BigInt(32));
    }), h.prototype.readBigUInt64BE = $e(function(s) {
      s = s >>> 0, Ue(s, "offset");
      const o = this[s], y = this[s + 7];
      (o === void 0 || y === void 0) && Je(s, this.length - 8);
      const b = o * 2 ** 24 + this[++s] * 2 ** 16 + this[++s] * 2 ** 8 + this[++s], S = this[++s] * 2 ** 24 + this[++s] * 2 ** 16 + this[++s] * 2 ** 8 + y;
      return (BigInt(b) << BigInt(32)) + BigInt(S);
    }), h.prototype.readIntLE = function(s, o, y) {
      s = s >>> 0, o = o >>> 0, y || oe(s, o, this.length);
      let b = this[s], S = 1, I = 0;
      for (; ++I < o && (S *= 256); )
        b += this[s + I] * S;
      return S *= 128, b >= S && (b -= Math.pow(2, 8 * o)), b;
    }, h.prototype.readIntBE = function(s, o, y) {
      s = s >>> 0, o = o >>> 0, y || oe(s, o, this.length);
      let b = o, S = 1, I = this[s + --b];
      for (; b > 0 && (S *= 256); )
        I += this[s + --b] * S;
      return S *= 128, I >= S && (I -= Math.pow(2, 8 * o)), I;
    }, h.prototype.readInt8 = function(s, o) {
      return s = s >>> 0, o || oe(s, 1, this.length), this[s] & 128 ? (255 - this[s] + 1) * -1 : this[s];
    }, h.prototype.readInt16LE = function(s, o) {
      s = s >>> 0, o || oe(s, 2, this.length);
      const y = this[s] | this[s + 1] << 8;
      return y & 32768 ? y | 4294901760 : y;
    }, h.prototype.readInt16BE = function(s, o) {
      s = s >>> 0, o || oe(s, 2, this.length);
      const y = this[s + 1] | this[s] << 8;
      return y & 32768 ? y | 4294901760 : y;
    }, h.prototype.readInt32LE = function(s, o) {
      return s = s >>> 0, o || oe(s, 4, this.length), this[s] | this[s + 1] << 8 | this[s + 2] << 16 | this[s + 3] << 24;
    }, h.prototype.readInt32BE = function(s, o) {
      return s = s >>> 0, o || oe(s, 4, this.length), this[s] << 24 | this[s + 1] << 16 | this[s + 2] << 8 | this[s + 3];
    }, h.prototype.readBigInt64LE = $e(function(s) {
      s = s >>> 0, Ue(s, "offset");
      const o = this[s], y = this[s + 7];
      (o === void 0 || y === void 0) && Je(s, this.length - 8);
      const b = this[s + 4] + this[s + 5] * 2 ** 8 + this[s + 6] * 2 ** 16 + (y << 24);
      return (BigInt(b) << BigInt(32)) + BigInt(o + this[++s] * 2 ** 8 + this[++s] * 2 ** 16 + this[++s] * 2 ** 24);
    }), h.prototype.readBigInt64BE = $e(function(s) {
      s = s >>> 0, Ue(s, "offset");
      const o = this[s], y = this[s + 7];
      (o === void 0 || y === void 0) && Je(s, this.length - 8);
      const b = (o << 24) + // Overflow
      this[++s] * 2 ** 16 + this[++s] * 2 ** 8 + this[++s];
      return (BigInt(b) << BigInt(32)) + BigInt(this[++s] * 2 ** 24 + this[++s] * 2 ** 16 + this[++s] * 2 ** 8 + y);
    }), h.prototype.readFloatLE = function(s, o) {
      return s = s >>> 0, o || oe(s, 4, this.length), a.read(this, s, !0, 23, 4);
    }, h.prototype.readFloatBE = function(s, o) {
      return s = s >>> 0, o || oe(s, 4, this.length), a.read(this, s, !1, 23, 4);
    }, h.prototype.readDoubleLE = function(s, o) {
      return s = s >>> 0, o || oe(s, 8, this.length), a.read(this, s, !0, 52, 8);
    }, h.prototype.readDoubleBE = function(s, o) {
      return s = s >>> 0, o || oe(s, 8, this.length), a.read(this, s, !1, 52, 8);
    };
    function ce(m, s, o, y, b, S) {
      if (!h.isBuffer(m)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (s > b || s < S) throw new RangeError('"value" argument is out of bounds');
      if (o + y > m.length) throw new RangeError("Index out of range");
    }
    h.prototype.writeUintLE = h.prototype.writeUIntLE = function(s, o, y, b) {
      if (s = +s, o = o >>> 0, y = y >>> 0, !b) {
        const G = Math.pow(2, 8 * y) - 1;
        ce(this, s, o, y, G, 0);
      }
      let S = 1, I = 0;
      for (this[o] = s & 255; ++I < y && (S *= 256); )
        this[o + I] = s / S & 255;
      return o + y;
    }, h.prototype.writeUintBE = h.prototype.writeUIntBE = function(s, o, y, b) {
      if (s = +s, o = o >>> 0, y = y >>> 0, !b) {
        const G = Math.pow(2, 8 * y) - 1;
        ce(this, s, o, y, G, 0);
      }
      let S = y - 1, I = 1;
      for (this[o + S] = s & 255; --S >= 0 && (I *= 256); )
        this[o + S] = s / I & 255;
      return o + y;
    }, h.prototype.writeUint8 = h.prototype.writeUInt8 = function(s, o, y) {
      return s = +s, o = o >>> 0, y || ce(this, s, o, 1, 255, 0), this[o] = s & 255, o + 1;
    }, h.prototype.writeUint16LE = h.prototype.writeUInt16LE = function(s, o, y) {
      return s = +s, o = o >>> 0, y || ce(this, s, o, 2, 65535, 0), this[o] = s & 255, this[o + 1] = s >>> 8, o + 2;
    }, h.prototype.writeUint16BE = h.prototype.writeUInt16BE = function(s, o, y) {
      return s = +s, o = o >>> 0, y || ce(this, s, o, 2, 65535, 0), this[o] = s >>> 8, this[o + 1] = s & 255, o + 2;
    }, h.prototype.writeUint32LE = h.prototype.writeUInt32LE = function(s, o, y) {
      return s = +s, o = o >>> 0, y || ce(this, s, o, 4, 4294967295, 0), this[o + 3] = s >>> 24, this[o + 2] = s >>> 16, this[o + 1] = s >>> 8, this[o] = s & 255, o + 4;
    }, h.prototype.writeUint32BE = h.prototype.writeUInt32BE = function(s, o, y) {
      return s = +s, o = o >>> 0, y || ce(this, s, o, 4, 4294967295, 0), this[o] = s >>> 24, this[o + 1] = s >>> 16, this[o + 2] = s >>> 8, this[o + 3] = s & 255, o + 4;
    };
    function Re(m, s, o, y, b) {
      Ur(s, y, b, m, o, 7);
      let S = Number(s & BigInt(4294967295));
      m[o++] = S, S = S >> 8, m[o++] = S, S = S >> 8, m[o++] = S, S = S >> 8, m[o++] = S;
      let I = Number(s >> BigInt(32) & BigInt(4294967295));
      return m[o++] = I, I = I >> 8, m[o++] = I, I = I >> 8, m[o++] = I, I = I >> 8, m[o++] = I, o;
    }
    function Oe(m, s, o, y, b) {
      Ur(s, y, b, m, o, 7);
      let S = Number(s & BigInt(4294967295));
      m[o + 7] = S, S = S >> 8, m[o + 6] = S, S = S >> 8, m[o + 5] = S, S = S >> 8, m[o + 4] = S;
      let I = Number(s >> BigInt(32) & BigInt(4294967295));
      return m[o + 3] = I, I = I >> 8, m[o + 2] = I, I = I >> 8, m[o + 1] = I, I = I >> 8, m[o] = I, o + 8;
    }
    h.prototype.writeBigUInt64LE = $e(function(s, o = 0) {
      return Re(this, s, o, BigInt(0), BigInt("0xffffffffffffffff"));
    }), h.prototype.writeBigUInt64BE = $e(function(s, o = 0) {
      return Oe(this, s, o, BigInt(0), BigInt("0xffffffffffffffff"));
    }), h.prototype.writeIntLE = function(s, o, y, b) {
      if (s = +s, o = o >>> 0, !b) {
        const Y = Math.pow(2, 8 * y - 1);
        ce(this, s, o, y, Y - 1, -Y);
      }
      let S = 0, I = 1, G = 0;
      for (this[o] = s & 255; ++S < y && (I *= 256); )
        s < 0 && G === 0 && this[o + S - 1] !== 0 && (G = 1), this[o + S] = (s / I >> 0) - G & 255;
      return o + y;
    }, h.prototype.writeIntBE = function(s, o, y, b) {
      if (s = +s, o = o >>> 0, !b) {
        const Y = Math.pow(2, 8 * y - 1);
        ce(this, s, o, y, Y - 1, -Y);
      }
      let S = y - 1, I = 1, G = 0;
      for (this[o + S] = s & 255; --S >= 0 && (I *= 256); )
        s < 0 && G === 0 && this[o + S + 1] !== 0 && (G = 1), this[o + S] = (s / I >> 0) - G & 255;
      return o + y;
    }, h.prototype.writeInt8 = function(s, o, y) {
      return s = +s, o = o >>> 0, y || ce(this, s, o, 1, 127, -128), s < 0 && (s = 255 + s + 1), this[o] = s & 255, o + 1;
    }, h.prototype.writeInt16LE = function(s, o, y) {
      return s = +s, o = o >>> 0, y || ce(this, s, o, 2, 32767, -32768), this[o] = s & 255, this[o + 1] = s >>> 8, o + 2;
    }, h.prototype.writeInt16BE = function(s, o, y) {
      return s = +s, o = o >>> 0, y || ce(this, s, o, 2, 32767, -32768), this[o] = s >>> 8, this[o + 1] = s & 255, o + 2;
    }, h.prototype.writeInt32LE = function(s, o, y) {
      return s = +s, o = o >>> 0, y || ce(this, s, o, 4, 2147483647, -2147483648), this[o] = s & 255, this[o + 1] = s >>> 8, this[o + 2] = s >>> 16, this[o + 3] = s >>> 24, o + 4;
    }, h.prototype.writeInt32BE = function(s, o, y) {
      return s = +s, o = o >>> 0, y || ce(this, s, o, 4, 2147483647, -2147483648), s < 0 && (s = 4294967295 + s + 1), this[o] = s >>> 24, this[o + 1] = s >>> 16, this[o + 2] = s >>> 8, this[o + 3] = s & 255, o + 4;
    }, h.prototype.writeBigInt64LE = $e(function(s, o = 0) {
      return Re(this, s, o, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    }), h.prototype.writeBigInt64BE = $e(function(s, o = 0) {
      return Oe(this, s, o, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function Ae(m, s, o, y, b, S) {
      if (o + y > m.length) throw new RangeError("Index out of range");
      if (o < 0) throw new RangeError("Index out of range");
    }
    function ve(m, s, o, y, b) {
      return s = +s, o = o >>> 0, b || Ae(m, s, o, 4), a.write(m, s, o, y, 23, 4), o + 4;
    }
    h.prototype.writeFloatLE = function(s, o, y) {
      return ve(this, s, o, !0, y);
    }, h.prototype.writeFloatBE = function(s, o, y) {
      return ve(this, s, o, !1, y);
    };
    function Ye(m, s, o, y, b) {
      return s = +s, o = o >>> 0, b || Ae(m, s, o, 8), a.write(m, s, o, y, 52, 8), o + 8;
    }
    h.prototype.writeDoubleLE = function(s, o, y) {
      return Ye(this, s, o, !0, y);
    }, h.prototype.writeDoubleBE = function(s, o, y) {
      return Ye(this, s, o, !1, y);
    }, h.prototype.copy = function(s, o, y, b) {
      if (!h.isBuffer(s)) throw new TypeError("argument should be a Buffer");
      if (y || (y = 0), !b && b !== 0 && (b = this.length), o >= s.length && (o = s.length), o || (o = 0), b > 0 && b < y && (b = y), b === y || s.length === 0 || this.length === 0) return 0;
      if (o < 0)
        throw new RangeError("targetStart out of bounds");
      if (y < 0 || y >= this.length) throw new RangeError("Index out of range");
      if (b < 0) throw new RangeError("sourceEnd out of bounds");
      b > this.length && (b = this.length), s.length - o < b - y && (b = s.length - o + y);
      const S = b - y;
      return this === s && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(o, y, b) : Uint8Array.prototype.set.call(
        s,
        this.subarray(y, b),
        o
      ), S;
    }, h.prototype.fill = function(s, o, y, b) {
      if (typeof s == "string") {
        if (typeof o == "string" ? (b = o, o = 0, y = this.length) : typeof y == "string" && (b = y, y = this.length), b !== void 0 && typeof b != "string")
          throw new TypeError("encoding must be a string");
        if (typeof b == "string" && !h.isEncoding(b))
          throw new TypeError("Unknown encoding: " + b);
        if (s.length === 1) {
          const I = s.charCodeAt(0);
          (b === "utf8" && I < 128 || b === "latin1") && (s = I);
        }
      } else typeof s == "number" ? s = s & 255 : typeof s == "boolean" && (s = Number(s));
      if (o < 0 || this.length < o || this.length < y)
        throw new RangeError("Out of range index");
      if (y <= o)
        return this;
      o = o >>> 0, y = y === void 0 ? this.length : y >>> 0, s || (s = 0);
      let S;
      if (typeof s == "number")
        for (S = o; S < y; ++S)
          this[S] = s;
      else {
        const I = h.isBuffer(s) ? s : h.from(s, b), G = I.length;
        if (G === 0)
          throw new TypeError('The value "' + s + '" is invalid for argument "value"');
        for (S = 0; S < y - o; ++S)
          this[S + o] = I[S % G];
      }
      return this;
    };
    const Me = {};
    function Pe(m, s, o) {
      Me[m] = class extends o {
        constructor() {
          super(), Object.defineProperty(this, "message", {
            value: s.apply(this, arguments),
            writable: !0,
            configurable: !0
          }), this.name = `${this.name} [${m}]`, this.stack, delete this.name;
        }
        get code() {
          return m;
        }
        set code(b) {
          Object.defineProperty(this, "code", {
            configurable: !0,
            enumerable: !0,
            value: b,
            writable: !0
          });
        }
        toString() {
          return `${this.name} [${m}]: ${this.message}`;
        }
      };
    }
    Pe(
      "ERR_BUFFER_OUT_OF_BOUNDS",
      function(m) {
        return m ? `${m} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
      },
      RangeError
    ), Pe(
      "ERR_INVALID_ARG_TYPE",
      function(m, s) {
        return `The "${m}" argument must be of type number. Received type ${typeof s}`;
      },
      TypeError
    ), Pe(
      "ERR_OUT_OF_RANGE",
      function(m, s, o) {
        let y = `The value of "${m}" is out of range.`, b = o;
        return Number.isInteger(o) && Math.abs(o) > 2 ** 32 ? b = nr(String(o)) : typeof o == "bigint" && (b = String(o), (o > BigInt(2) ** BigInt(32) || o < -(BigInt(2) ** BigInt(32))) && (b = nr(b)), b += "n"), y += ` It must be ${s}. Received ${b}`, y;
      },
      RangeError
    );
    function nr(m) {
      let s = "", o = m.length;
      const y = m[0] === "-" ? 1 : 0;
      for (; o >= y + 4; o -= 3)
        s = `_${m.slice(o - 3, o)}${s}`;
      return `${m.slice(0, o)}${s}`;
    }
    function wr(m, s, o) {
      Ue(s, "offset"), (m[s] === void 0 || m[s + o] === void 0) && Je(s, m.length - (o + 1));
    }
    function Ur(m, s, o, y, b, S) {
      if (m > o || m < s) {
        const I = typeof s == "bigint" ? "n" : "";
        let G;
        throw s === 0 || s === BigInt(0) ? G = `>= 0${I} and < 2${I} ** ${(S + 1) * 8}${I}` : G = `>= -(2${I} ** ${(S + 1) * 8 - 1}${I}) and < 2 ** ${(S + 1) * 8 - 1}${I}`, new Me.ERR_OUT_OF_RANGE("value", G, m);
      }
      wr(y, b, S);
    }
    function Ue(m, s) {
      if (typeof m != "number")
        throw new Me.ERR_INVALID_ARG_TYPE(s, "number", m);
    }
    function Je(m, s, o) {
      throw Math.floor(m) !== m ? (Ue(m, o), new Me.ERR_OUT_OF_RANGE("offset", "an integer", m)) : s < 0 ? new Me.ERR_BUFFER_OUT_OF_BOUNDS() : new Me.ERR_OUT_OF_RANGE(
        "offset",
        `>= 0 and <= ${s}`,
        m
      );
    }
    const Ke = /[^+/0-9A-Za-z-_]/g;
    function vt(m) {
      if (m = m.split("=")[0], m = m.trim().replace(Ke, ""), m.length < 2) return "";
      for (; m.length % 4 !== 0; )
        m = m + "=";
      return m;
    }
    function Xe(m, s) {
      s = s || 1 / 0;
      let o;
      const y = m.length;
      let b = null;
      const S = [];
      for (let I = 0; I < y; ++I) {
        if (o = m.charCodeAt(I), o > 55295 && o < 57344) {
          if (!b) {
            if (o > 56319) {
              (s -= 3) > -1 && S.push(239, 191, 189);
              continue;
            } else if (I + 1 === y) {
              (s -= 3) > -1 && S.push(239, 191, 189);
              continue;
            }
            b = o;
            continue;
          }
          if (o < 56320) {
            (s -= 3) > -1 && S.push(239, 191, 189), b = o;
            continue;
          }
          o = (b - 55296 << 10 | o - 56320) + 65536;
        } else b && (s -= 3) > -1 && S.push(239, 191, 189);
        if (b = null, o < 128) {
          if ((s -= 1) < 0) break;
          S.push(o);
        } else if (o < 2048) {
          if ((s -= 2) < 0) break;
          S.push(
            o >> 6 | 192,
            o & 63 | 128
          );
        } else if (o < 65536) {
          if ((s -= 3) < 0) break;
          S.push(
            o >> 12 | 224,
            o >> 6 & 63 | 128,
            o & 63 | 128
          );
        } else if (o < 1114112) {
          if ((s -= 4) < 0) break;
          S.push(
            o >> 18 | 240,
            o >> 12 & 63 | 128,
            o >> 6 & 63 | 128,
            o & 63 | 128
          );
        } else
          throw new Error("Invalid code point");
      }
      return S;
    }
    function Br(m) {
      const s = [];
      for (let o = 0; o < m.length; ++o)
        s.push(m.charCodeAt(o) & 255);
      return s;
    }
    function qr(m, s) {
      let o, y, b;
      const S = [];
      for (let I = 0; I < m.length && !((s -= 2) < 0); ++I)
        o = m.charCodeAt(I), y = o >> 8, b = o % 256, S.push(b), S.push(y);
      return S;
    }
    function jr(m) {
      return t.toByteArray(vt(m));
    }
    function ir(m, s, o, y) {
      let b;
      for (b = 0; b < y && !(b + o >= s.length || b >= m.length); ++b)
        s[b + o] = m[b];
      return b;
    }
    function Ee(m, s) {
      return m instanceof s || m != null && m.constructor != null && m.constructor.name != null && m.constructor.name === s.name;
    }
    function _r(m) {
      return m !== m;
    }
    const yt = (function() {
      const m = "0123456789abcdef", s = new Array(256);
      for (let o = 0; o < 16; ++o) {
        const y = o * 16;
        for (let b = 0; b < 16; ++b)
          s[y + b] = m[o] + m[b];
      }
      return s;
    })();
    function $e(m) {
      return typeof BigInt > "u" ? pt : m;
    }
    function pt() {
      throw new Error("BigInt not supported");
    }
  })(Mu)), Mu;
}
var Cu, ly;
function r$() {
  if (ly) return Cu;
  ly = 1;
  var r = e$().Buffer;
  return Cu = r, Cu;
}
var Lu, fy;
function t$() {
  if (fy) return Lu;
  fy = 1;
  function r() {
    throw new Error("not implemented");
  }
  return Lu = r, Lu;
}
var ku, hy;
function el() {
  if (hy) return ku;
  hy = 1;
  var r = K_(), t = r$(), a = t$(), i;
  return r() ? i = t : i = a, ku = i, ku;
}
var Nu, dy;
function n$() {
  if (dy) return Nu;
  dy = 1;
  var r = b1(), t = el(), a = r(t.from);
  return Nu = a, Nu;
}
var Fu, my;
function i$() {
  if (my) return Fu;
  my = 1;
  var r = Pr(), t = Ze(), a = el();
  function i(l) {
    if (!r(l))
      throw new TypeError(t("invalid argument. Must provide a Buffer. Value: `%s`.", l));
    return a.from(l);
  }
  return Fu = i, Fu;
}
var Du, vy;
function a$() {
  if (vy) return Du;
  vy = 1;
  var r = Pr(), t = Ze(), a = el();
  function i(l) {
    if (!r(l))
      throw new TypeError(t("invalid argument. Must provide a Buffer. Value: `%s`.", l));
    return new a(l);
  }
  return Du = i, Du;
}
var Pu, yy;
function s$() {
  if (yy) return Pu;
  yy = 1;
  var r = n$(), t = i$(), a = a$(), i;
  return r ? i = t : i = a, Pu = i, Pu;
}
var Uu, py;
function u$() {
  if (py) return Uu;
  py = 1;
  var r = pe(), t = typeof Int8Array == "function";
  function a(i) {
    return t && i instanceof Int8Array || // eslint-disable-line stdlib/require-globals
    r(i) === "[object Int8Array]";
  }
  return Uu = a, Uu;
}
var Bu, gy;
function o$() {
  if (gy) return Bu;
  gy = 1;
  var r = u$();
  return Bu = r, Bu;
}
var ju, by;
function c$() {
  if (by) return ju;
  by = 1;
  var r = 127;
  return ju = r, ju;
}
var Vu, wy;
function l$() {
  if (wy) return Vu;
  wy = 1;
  var r = -128;
  return Vu = r, Vu;
}
var Wu, qy;
function f$() {
  if (qy) return Wu;
  qy = 1;
  var r = typeof Int8Array == "function" ? Int8Array : null;
  return Wu = r, Wu;
}
var zu, _y;
function h$() {
  if (_y) return zu;
  _y = 1;
  var r = o$(), t = c$(), a = l$(), i = f$();
  function l() {
    var f, v;
    if (typeof i != "function")
      return !1;
    try {
      v = new i([1, 3.14, -3.14, t + 1]), f = r(v) && v[0] === 1 && v[1] === 3 && // truncation
      v[2] === -3 && // truncation
      v[3] === a;
    } catch {
      f = !1;
    }
    return f;
  }
  return zu = l, zu;
}
var Hu, $y;
function d$() {
  if ($y) return Hu;
  $y = 1;
  var r = h$();
  return Hu = r, Hu;
}
var Gu, Ey;
function m$() {
  if (Ey) return Gu;
  Ey = 1;
  var r = typeof Int8Array == "function" ? Int8Array : void 0;
  return Gu = r, Gu;
}
var Zu, Ty;
function v$() {
  if (Ty) return Zu;
  Ty = 1;
  function r() {
    throw new Error("not implemented");
  }
  return Zu = r, Zu;
}
var Yu, Sy;
function y$() {
  if (Sy) return Yu;
  Sy = 1;
  var r = d$(), t = m$(), a = v$(), i;
  return r() ? i = t : i = a, Yu = i, Yu;
}
var Ju, xy;
function p$() {
  if (xy) return Ju;
  xy = 1;
  var r = pe(), t = typeof Uint8Array == "function";
  function a(i) {
    return t && i instanceof Uint8Array || // eslint-disable-line stdlib/require-globals
    r(i) === "[object Uint8Array]";
  }
  return Ju = a, Ju;
}
var Ku, Iy;
function g$() {
  if (Iy) return Ku;
  Iy = 1;
  var r = p$();
  return Ku = r, Ku;
}
var Xu, Ry;
function b$() {
  if (Ry) return Xu;
  Ry = 1;
  var r = 255;
  return Xu = r, Xu;
}
var Qu, Oy;
function w$() {
  if (Oy) return Qu;
  Oy = 1;
  var r = typeof Uint8Array == "function" ? Uint8Array : null;
  return Qu = r, Qu;
}
var eo, Ay;
function q$() {
  if (Ay) return eo;
  Ay = 1;
  var r = g$(), t = b$(), a = w$();
  function i() {
    var l, f;
    if (typeof a != "function")
      return !1;
    try {
      f = [1, 3.14, -3.14, t + 1, t + 2], f = new a(f), l = r(f) && f[0] === 1 && f[1] === 3 && // truncation
      f[2] === t - 2 && // truncation and wrap around
      f[3] === 0 && // wrap around
      f[4] === 1;
    } catch {
      l = !1;
    }
    return l;
  }
  return eo = i, eo;
}
var ro, My;
function _$() {
  if (My) return ro;
  My = 1;
  var r = q$();
  return ro = r, ro;
}
var to, Cy;
function $$() {
  if (Cy) return to;
  Cy = 1;
  var r = typeof Uint8Array == "function" ? Uint8Array : void 0;
  return to = r, to;
}
var no, Ly;
function E$() {
  if (Ly) return no;
  Ly = 1;
  function r() {
    throw new Error("not implemented");
  }
  return no = r, no;
}
var io, ky;
function T$() {
  if (ky) return io;
  ky = 1;
  var r = _$(), t = $$(), a = E$(), i;
  return r() ? i = t : i = a, io = i, io;
}
var ao, Ny;
function S$() {
  if (Ny) return ao;
  Ny = 1;
  var r = pe(), t = typeof Uint8ClampedArray == "function";
  function a(i) {
    return t && i instanceof Uint8ClampedArray || // eslint-disable-line stdlib/require-globals
    r(i) === "[object Uint8ClampedArray]";
  }
  return ao = a, ao;
}
var so, Fy;
function x$() {
  if (Fy) return so;
  Fy = 1;
  var r = S$();
  return so = r, so;
}
var uo, Dy;
function I$() {
  if (Dy) return uo;
  Dy = 1;
  var r = typeof Uint8ClampedArray == "function" ? Uint8ClampedArray : null;
  return uo = r, uo;
}
var oo, Py;
function R$() {
  if (Py) return oo;
  Py = 1;
  var r = x$(), t = I$();
  function a() {
    var i, l;
    if (typeof t != "function")
      return !1;
    try {
      l = new t([-1, 0, 1, 3.14, 4.99, 255, 256]), i = r(l) && l[0] === 0 && // clamped
      l[1] === 0 && l[2] === 1 && l[3] === 3 && // round to nearest
      l[4] === 5 && // round to nearest
      l[5] === 255 && l[6] === 255;
    } catch {
      i = !1;
    }
    return i;
  }
  return oo = a, oo;
}
var co, Uy;
function O$() {
  if (Uy) return co;
  Uy = 1;
  var r = R$();
  return co = r, co;
}
var lo, By;
function A$() {
  if (By) return lo;
  By = 1;
  var r = typeof Uint8ClampedArray == "function" ? Uint8ClampedArray : void 0;
  return lo = r, lo;
}
var fo, jy;
function M$() {
  if (jy) return fo;
  jy = 1;
  function r() {
    throw new Error("not implemented");
  }
  return fo = r, fo;
}
var ho, Vy;
function C$() {
  if (Vy) return ho;
  Vy = 1;
  var r = O$(), t = A$(), a = M$(), i;
  return r() ? i = t : i = a, ho = i, ho;
}
var mo, Wy;
function L$() {
  if (Wy) return mo;
  Wy = 1;
  var r = pe(), t = typeof Int16Array == "function";
  function a(i) {
    return t && i instanceof Int16Array || // eslint-disable-line stdlib/require-globals
    r(i) === "[object Int16Array]";
  }
  return mo = a, mo;
}
var vo, zy;
function k$() {
  if (zy) return vo;
  zy = 1;
  var r = L$();
  return vo = r, vo;
}
var yo, Hy;
function N$() {
  if (Hy) return yo;
  Hy = 1;
  var r = 32767;
  return yo = r, yo;
}
var po, Gy;
function F$() {
  if (Gy) return po;
  Gy = 1;
  var r = -32768;
  return po = r, po;
}
var go, Zy;
function D$() {
  if (Zy) return go;
  Zy = 1;
  var r = typeof Int16Array == "function" ? Int16Array : null;
  return go = r, go;
}
var bo, Yy;
function P$() {
  if (Yy) return bo;
  Yy = 1;
  var r = k$(), t = N$(), a = F$(), i = D$();
  function l() {
    var f, v;
    if (typeof i != "function")
      return !1;
    try {
      v = new i([1, 3.14, -3.14, t + 1]), f = r(v) && v[0] === 1 && v[1] === 3 && // truncation
      v[2] === -3 && // truncation
      v[3] === a;
    } catch {
      f = !1;
    }
    return f;
  }
  return bo = l, bo;
}
var wo, Jy;
function U$() {
  if (Jy) return wo;
  Jy = 1;
  var r = P$();
  return wo = r, wo;
}
var qo, Ky;
function B$() {
  if (Ky) return qo;
  Ky = 1;
  var r = typeof Int16Array == "function" ? Int16Array : void 0;
  return qo = r, qo;
}
var _o, Xy;
function j$() {
  if (Xy) return _o;
  Xy = 1;
  function r() {
    throw new Error("not implemented");
  }
  return _o = r, _o;
}
var $o, Qy;
function V$() {
  if (Qy) return $o;
  Qy = 1;
  var r = U$(), t = B$(), a = j$(), i;
  return r() ? i = t : i = a, $o = i, $o;
}
var Eo, ep;
function W$() {
  if (ep) return Eo;
  ep = 1;
  var r = pe(), t = typeof Uint16Array == "function";
  function a(i) {
    return t && i instanceof Uint16Array || // eslint-disable-line stdlib/require-globals
    r(i) === "[object Uint16Array]";
  }
  return Eo = a, Eo;
}
var To, rp;
function z$() {
  if (rp) return To;
  rp = 1;
  var r = W$();
  return To = r, To;
}
var So, tp;
function H$() {
  if (tp) return So;
  tp = 1;
  var r = 65535;
  return So = r, So;
}
var xo, np;
function G$() {
  if (np) return xo;
  np = 1;
  var r = typeof Uint16Array == "function" ? Uint16Array : null;
  return xo = r, xo;
}
var Io, ip;
function Z$() {
  if (ip) return Io;
  ip = 1;
  var r = z$(), t = H$(), a = G$();
  function i() {
    var l, f;
    if (typeof a != "function")
      return !1;
    try {
      f = [1, 3.14, -3.14, t + 1, t + 2], f = new a(f), l = r(f) && f[0] === 1 && f[1] === 3 && // truncation
      f[2] === t - 2 && // truncation and wrap around
      f[3] === 0 && // wrap around
      f[4] === 1;
    } catch {
      l = !1;
    }
    return l;
  }
  return Io = i, Io;
}
var Ro, ap;
function Y$() {
  if (ap) return Ro;
  ap = 1;
  var r = Z$();
  return Ro = r, Ro;
}
var Oo, sp;
function J$() {
  if (sp) return Oo;
  sp = 1;
  var r = typeof Uint16Array == "function" ? Uint16Array : void 0;
  return Oo = r, Oo;
}
var Ao, up;
function K$() {
  if (up) return Ao;
  up = 1;
  function r() {
    throw new Error("not implemented");
  }
  return Ao = r, Ao;
}
var Mo, op;
function X$() {
  if (op) return Mo;
  op = 1;
  var r = Y$(), t = J$(), a = K$(), i;
  return r() ? i = t : i = a, Mo = i, Mo;
}
var Co, cp;
function Q$() {
  if (cp) return Co;
  cp = 1;
  var r = pe(), t = typeof Int32Array == "function";
  function a(i) {
    return t && i instanceof Int32Array || // eslint-disable-line stdlib/require-globals
    r(i) === "[object Int32Array]";
  }
  return Co = a, Co;
}
var Lo, lp;
function eE() {
  if (lp) return Lo;
  lp = 1;
  var r = Q$();
  return Lo = r, Lo;
}
var ko, fp;
function rE() {
  if (fp) return ko;
  fp = 1;
  var r = 2147483647;
  return ko = r, ko;
}
var No, hp;
function tE() {
  if (hp) return No;
  hp = 1;
  var r = -2147483648;
  return No = r, No;
}
var Fo, dp;
function nE() {
  if (dp) return Fo;
  dp = 1;
  var r = typeof Int32Array == "function" ? Int32Array : null;
  return Fo = r, Fo;
}
var Do, mp;
function iE() {
  if (mp) return Do;
  mp = 1;
  var r = eE(), t = rE(), a = tE(), i = nE();
  function l() {
    var f, v;
    if (typeof i != "function")
      return !1;
    try {
      v = new i([1, 3.14, -3.14, t + 1]), f = r(v) && v[0] === 1 && v[1] === 3 && // truncation
      v[2] === -3 && // truncation
      v[3] === a;
    } catch {
      f = !1;
    }
    return f;
  }
  return Do = l, Do;
}
var Po, vp;
function aE() {
  if (vp) return Po;
  vp = 1;
  var r = iE();
  return Po = r, Po;
}
var Uo, yp;
function sE() {
  if (yp) return Uo;
  yp = 1;
  var r = typeof Int32Array == "function" ? Int32Array : void 0;
  return Uo = r, Uo;
}
var Bo, pp;
function uE() {
  if (pp) return Bo;
  pp = 1;
  function r() {
    throw new Error("not implemented");
  }
  return Bo = r, Bo;
}
var jo, gp;
function oE() {
  if (gp) return jo;
  gp = 1;
  var r = aE(), t = sE(), a = uE(), i;
  return r() ? i = t : i = a, jo = i, jo;
}
var Vo, bp;
function cE() {
  if (bp) return Vo;
  bp = 1;
  var r = pe(), t = typeof Uint32Array == "function";
  function a(i) {
    return t && i instanceof Uint32Array || // eslint-disable-line stdlib/require-globals
    r(i) === "[object Uint32Array]";
  }
  return Vo = a, Vo;
}
var Wo, wp;
function lE() {
  if (wp) return Wo;
  wp = 1;
  var r = cE();
  return Wo = r, Wo;
}
var zo, qp;
function fE() {
  if (qp) return zo;
  qp = 1;
  var r = typeof Uint32Array == "function" ? Uint32Array : null;
  return zo = r, zo;
}
var Ho, _p;
function hE() {
  if (_p) return Ho;
  _p = 1;
  var r = lE(), t = A1(), a = fE();
  function i() {
    var l, f;
    if (typeof a != "function")
      return !1;
    try {
      f = [1, 3.14, -3.14, t + 1, t + 2], f = new a(f), l = r(f) && f[0] === 1 && f[1] === 3 && // truncation
      f[2] === t - 2 && // truncation and wrap around
      f[3] === 0 && // wrap around
      f[4] === 1;
    } catch {
      l = !1;
    }
    return l;
  }
  return Ho = i, Ho;
}
var Go, $p;
function dE() {
  if ($p) return Go;
  $p = 1;
  var r = hE();
  return Go = r, Go;
}
var Zo, Ep;
function mE() {
  if (Ep) return Zo;
  Ep = 1;
  var r = typeof Uint32Array == "function" ? Uint32Array : void 0;
  return Zo = r, Zo;
}
var Yo, Tp;
function vE() {
  if (Tp) return Yo;
  Tp = 1;
  function r() {
    throw new Error("not implemented");
  }
  return Yo = r, Yo;
}
var Jo, Sp;
function yE() {
  if (Sp) return Jo;
  Sp = 1;
  var r = dE(), t = mE(), a = vE(), i;
  return r() ? i = t : i = a, Jo = i, Jo;
}
var Ko, xp;
function pE() {
  if (xp) return Ko;
  xp = 1;
  var r = pe(), t = typeof Float32Array == "function";
  function a(i) {
    return t && i instanceof Float32Array || // eslint-disable-line stdlib/require-globals
    r(i) === "[object Float32Array]";
  }
  return Ko = a, Ko;
}
var Xo, Ip;
function gE() {
  if (Ip) return Xo;
  Ip = 1;
  var r = pE();
  return Xo = r, Xo;
}
var Qo, Rp;
function bE() {
  if (Rp) return Qo;
  Rp = 1;
  var r = typeof Float32Array == "function" ? Float32Array : null;
  return Qo = r, Qo;
}
var ec, Op;
function wE() {
  if (Op) return ec;
  Op = 1;
  var r = gE(), t = Zc(), a = bE();
  function i() {
    var l, f;
    if (typeof a != "function")
      return !1;
    try {
      f = new a([1, 3.14, -3.14, 5e40]), l = r(f) && f[0] === 1 && f[1] === 3.140000104904175 && f[2] === -3.140000104904175 && f[3] === t;
    } catch {
      l = !1;
    }
    return l;
  }
  return ec = i, ec;
}
var rc, Ap;
function qE() {
  if (Ap) return rc;
  Ap = 1;
  var r = wE();
  return rc = r, rc;
}
var tc, Mp;
function _E() {
  if (Mp) return tc;
  Mp = 1;
  var r = typeof Float32Array == "function" ? Float32Array : void 0;
  return tc = r, tc;
}
var nc, Cp;
function $E() {
  if (Cp) return nc;
  Cp = 1;
  function r() {
    throw new Error("not implemented");
  }
  return nc = r, nc;
}
var ic, Lp;
function EE() {
  if (Lp) return ic;
  Lp = 1;
  var r = qE(), t = _E(), a = $E(), i;
  return r() ? i = t : i = a, ic = i, ic;
}
var ac, kp;
function TE() {
  if (kp) return ac;
  kp = 1;
  var r = pe(), t = typeof Float64Array == "function";
  function a(i) {
    return t && i instanceof Float64Array || // eslint-disable-line stdlib/require-globals
    r(i) === "[object Float64Array]";
  }
  return ac = a, ac;
}
var sc, Np;
function SE() {
  if (Np) return sc;
  Np = 1;
  var r = TE();
  return sc = r, sc;
}
var uc, Fp;
function xE() {
  if (Fp) return uc;
  Fp = 1;
  var r = typeof Float64Array == "function" ? Float64Array : null;
  return uc = r, uc;
}
var oc, Dp;
function IE() {
  if (Dp) return oc;
  Dp = 1;
  var r = SE(), t = xE();
  function a() {
    var i, l;
    if (typeof t != "function")
      return !1;
    try {
      l = new t([1, 3.14, -3.14, NaN]), i = r(l) && l[0] === 1 && l[1] === 3.14 && l[2] === -3.14 && l[3] !== l[3];
    } catch {
      i = !1;
    }
    return i;
  }
  return oc = a, oc;
}
var cc, Pp;
function RE() {
  if (Pp) return cc;
  Pp = 1;
  var r = IE();
  return cc = r, cc;
}
var lc, Up;
function OE() {
  if (Up) return lc;
  Up = 1;
  var r = typeof Float64Array == "function" ? Float64Array : void 0;
  return lc = r, lc;
}
var fc, Bp;
function AE() {
  if (Bp) return fc;
  Bp = 1;
  function r() {
    throw new Error("not implemented");
  }
  return fc = r, fc;
}
var hc, jp;
function ME() {
  if (jp) return hc;
  jp = 1;
  var r = RE(), t = OE(), a = AE(), i;
  return r() ? i = t : i = a, hc = i, hc;
}
var dc, Vp;
function CE() {
  if (Vp) return dc;
  Vp = 1;
  var r = y$(), t = T$(), a = C$(), i = V$(), l = X$(), f = oE(), v = yE(), h = EE(), p = ME(), O;
  function R(N) {
    return new r(N);
  }
  function _(N) {
    return new t(N);
  }
  function $(N) {
    return new a(N);
  }
  function x(N) {
    return new i(N);
  }
  function T(N) {
    return new l(N);
  }
  function A(N) {
    return new f(N);
  }
  function k(N) {
    return new v(N);
  }
  function M(N) {
    return new h(N);
  }
  function L(N) {
    return new p(N);
  }
  function U() {
    var N = {
      int8array: R,
      uint8array: _,
      uint8clampedarray: $,
      int16array: x,
      uint16array: T,
      int32array: A,
      uint32array: k,
      float32array: M,
      float64array: L
    };
    return N;
  }
  return O = U(), dc = O, dc;
}
var mc, Wp;
function LE() {
  if (Wp) return mc;
  Wp = 1;
  var r = br(), t = ft(), a = Pr(), i = o_(), l = Jc(), f = v_(), v = I1(), h = L1(), p = W_(), O = Z_(), R = w1(), _ = s1(), $ = s$(), x = CE();
  function T(M) {
    var L, U, N, P, ae, ee, B, z;
    for (L = [], P = [], B = Object.create(R(M)), L.push(M), P.push(B), U = p(M), z = 0; z < U.length; z++)
      N = U[z], ae = O(M, N), r(ae, "value") && (ee = t(M[N]) ? [] : {}, ae.value = k(M[N], ee, L, P, -1)), _(B, N, ae);
    return Object.isExtensible(M) || Object.preventExtensions(B), Object.isSealed(M) && Object.seal(B), Object.isFrozen(M) && Object.freeze(B), B;
  }
  function A(M) {
    var L = [], U = [], N, P, ae, ee, B, z;
    for (B = new M.constructor(M.message), L.push(M), U.push(B), M.stack && (B.stack = M.stack), M.code && (B.code = M.code), M.errno && (B.errno = M.errno), M.syscall && (B.syscall = M.syscall), N = h(M), z = 0; z < N.length; z++)
      ee = N[z], P = O(M, ee), r(P, "value") && (ae = t(M[ee]) ? [] : {}, P.value = k(M[ee], ae, L, U, -1)), _(B, ee, P);
    return B;
  }
  function k(M, L, U, N, P) {
    var ae, ee, B, z, he, D, ge, re, we, se;
    if (P -= 1, typeof M != "object" || M === null)
      return M;
    if (a(M))
      return $(M);
    if (i(M))
      return A(M);
    if (B = l(M), B === "date")
      return /* @__PURE__ */ new Date(+M);
    if (B === "regexp")
      return f(M.toString());
    if (B === "set")
      return new Set(M);
    if (B === "map")
      return new Map(M);
    if (B === "string" || B === "boolean" || B === "number")
      return M.valueOf();
    if (he = x[B], he)
      return he(M);
    if (B !== "array" && B !== "object")
      return typeof Object.freeze == "function" ? T(M) : {};
    if (ee = h(M), P > 0)
      for (ae = B, se = 0; se < ee.length; se++) {
        if (D = ee[se], re = M[D], B = l(re), typeof re != "object" || re === null || B !== "array" && B !== "object" || a(re)) {
          ae === "object" ? (z = O(M, D), r(z, "value") && (z.value = k(re)), _(L, D, z)) : L[D] = k(re);
          continue;
        }
        if (we = v(U, re), we !== -1) {
          L[D] = N[we];
          continue;
        }
        ge = t(re) ? new Array(re.length) : {}, U.push(re), N.push(ge), ae === "array" ? L[D] = k(re, ge, U, N, P) : (z = O(M, D), r(z, "value") && (z.value = k(re, ge, U, N, P)), _(L, D, z));
      }
    else if (B === "array")
      for (se = 0; se < ee.length; se++)
        D = ee[se], L[D] = M[D];
    else
      for (se = 0; se < ee.length; se++)
        D = ee[se], z = O(M, D), _(L, D, z);
    return Object.isExtensible(M) || Object.preventExtensions(L), Object.isSealed(M) && Object.seal(L), Object.isFrozen(M) && Object.freeze(L), L;
  }
  return mc = k, mc;
}
var vc, zp;
function kE() {
  if (zp) return vc;
  zp = 1;
  var r = ft(), t = Rq().isPrimitive, a = Ze(), i = Zc(), l = LE();
  function f(v, h) {
    var p;
    if (arguments.length > 1) {
      if (!t(h))
        throw new TypeError(a("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.", h));
      if (h === 0)
        return v;
    } else
      h = i;
    return p = r(v) ? new Array(v.length) : {}, l(v, p, [v], [p], h);
  }
  return vc = f, vc;
}
var yc, Hp;
function NE() {
  if (Hp) return yc;
  Hp = 1;
  var r = kE();
  return yc = r, yc;
}
var FE = NE();
const DE = /* @__PURE__ */ v0(FE), Gp = { ...t1, GhostError: K }, je = {
  serialize(r) {
    try {
      return {
        id: r.id,
        status: r.statusCode,
        code: r.code || r.errorType,
        title: r.name,
        detail: r.message,
        meta: {
          context: r.context,
          help: r.help,
          errorDetails: r.errorDetails,
          level: r.level,
          errorType: r.errorType
        }
      };
    } catch {
      return {
        detail: "Something went wrong."
      };
    }
  },
  deserialize(r) {
    return {
      id: r.id,
      message: r.detail || r.error_description || r.message,
      statusCode: r.status,
      code: r.code || r.error,
      level: r.meta && r.meta.level,
      help: r.meta && r.meta.help,
      context: r.meta && r.meta.context
    };
  },
  /**
   * @description Serialize error instance into oauth format.
   *
   * @see https://tools.ietf.org/html/rfc6749#page-45
   *
   * To not loose any error data when sending errors between internal services, we use the suggested OAuth properties and add ours as well.
   */
  OAuthSerialize(r) {
    const t = {
      [Wc.name]: "access_denied",
      [Hc.name]: "temporarily_unavailable",
      [Vc.name]: "invalid_request",
      [zc.name]: "invalid_request",
      default: "server_error"
    }, { detail: a, code: i, ...l } = je.serialize(r);
    return {
      error: r.code || t[r.name] || "server_error",
      error_description: r.message,
      ...l
    };
  },
  /**
   * @description Deserialize oauth error format into GhostError instance.
   * @constructor
   */
  OAuthDeserialize(r) {
    try {
      return new Gp[r.title || r.name || yr.name](je.deserialize(r));
    } catch {
      return new yr({
        errorType: r.title || r.name,
        ...je.deserialize(r)
      });
    }
  },
  /**
   * @description Serialize GhostError instance into jsonapi.org format.
   * @param err
   * @return {Object}
   */
  JSONAPISerialize(r) {
    const t = {
      errors: [je.serialize(r)]
    };
    return t.errors[0].source = {}, r.property && (t.errors[0].source.pointer = "/data/attributes/" + r.property), t;
  },
  /**
   * @description Deserialize JSON api format into GhostError instance.
   */
  JSONAPIDeserialize(r) {
    r = r.errors && r.errors[0] || {};
    let t;
    try {
      t = new Gp[r.title || r.name || yr.name](je.deserialize(r));
    } catch {
      t = new yr({
        errorType: r.title || r.name,
        ...je.deserialize(r)
      });
    }
    return r.source && r.source.pointer && (t.property = r.source.pointer.split("/")[3]), t;
  }
};
function PE(r, t) {
  t = t || { format: "jsonapi" };
  let a = {};
  try {
    t.format === "jsonapi" ? a = je.JSONAPISerialize(r) : a = je.OAuthSerialize(r);
  } catch {
    a.message = "Something went wrong.";
  }
  return a;
}
function UE(r) {
  let t = {};
  return r.errors ? t = je.JSONAPIDeserialize(r) : t = je.OAuthDeserialize(r), t;
}
function BE(r) {
  const t = r.stack?.split(/\n/) || [];
  "hideStack" in r && r.hideStack ? t.splice(1, t.length - 1) : t.splice(1, 0, "Stack Trace:"), "help" in r && r.help && t.splice(1, 0, `${r.help}`), "context" in r && r.context && t.splice(1, 0, `${r.context}`);
  const i = DE(r);
  return i.stack = t.join(`
`), i;
}
function jE(r) {
  const t = K.name, a = "IgnitionError";
  return function l(f) {
    return !f || !f.name ? !1 : f.name === t || f.name === a ? !0 : l(Object.getPrototypeOf(f));
  }(r.constructor);
}
var VE = t1;
const WE = {
  serialize: PE,
  deserialize: UE,
  isGhostError: jE,
  prepareStackForUser: BE
}, zE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BadRequestError: Vc,
  ConflictError: e1,
  DataExportError: V0,
  DataImportError: W0,
  DisabledFeatureError: G0,
  EmailError: z0,
  HelperWarning: J0,
  HostLimitError: Y0,
  IncorrectUsageError: M0,
  InternalServerError: yr,
  MaintenanceError: Hc,
  MethodNotAllowedError: F0,
  MigrationError: r1,
  NoContentError: Q0,
  NoPermissionError: Wc,
  NotFoundError: C0,
  PasswordResetRequiredError: K0,
  RangeNotSatisfiableError: P0,
  RequestEntityTooLargeError: U0,
  RequestNotAcceptableError: D0,
  ThemeValidationError: H0,
  TokenRevocationError: B0,
  TooManyRequestsError: N0,
  UnauthorizedError: L0,
  UnhandledJobError: X0,
  UnsupportedMediaTypeError: k0,
  UpdateCollisionError: Z0,
  ValidationError: zc,
  VersionMismatchError: j0,
  default: VE,
  utils: WE
}, Symbol.toStringTag, { value: "Module" })), k1 = /* @__PURE__ */ gb(zE);
var pc, Zp;
function HE() {
  if (Zp) return pc;
  Zp = 1;
  var r = A0(), t = r(function(a, i, l) {
    return a + (l ? " " : "") + i.toLowerCase();
  });
  return pc = t, pc;
}
var gc, Yp;
function GE() {
  if (Yp) return gc;
  Yp = 1;
  var r = x0(), t = I0();
  function a(i) {
    return r(function(l, f) {
      var v = -1, h = f.length, p = h > 1 ? f[h - 1] : void 0, O = h > 2 ? f[2] : void 0;
      for (p = i.length > 3 && typeof p == "function" ? (h--, p) : void 0, O && t(f[0], f[1], O) && (p = h < 3 ? void 0 : p, h = 1), l = Object(l); ++v < h; ) {
        var R = f[v];
        R && i(l, R, v, p);
      }
      return l;
    });
  }
  return gc = a, gc;
}
var bc, Jp;
function ZE() {
  if (Jp) return bc;
  Jp = 1;
  var r = Rw(), t = GE(), a = $0(), i = t(function(l, f, v, h) {
    r(f, a(f), l, h);
  });
  return bc = i, bc;
}
var wc, Kp;
function N1() {
  if (Kp) return wc;
  Kp = 1;
  var r = pr(), t = gr(), a = Sw(), i = "[object DOMException]", l = "[object Error]";
  function f(v) {
    if (!t(v))
      return !1;
    var h = r(v);
    return h == l || h == i || typeof v.message == "string" && typeof v.name == "string" && !a(v);
  }
  return wc = f, wc;
}
var qc, Xp;
function YE() {
  if (Xp) return qc;
  Xp = 1;
  var r = T0(), t = x0(), a = N1(), i = t(function(l, f) {
    try {
      return r(l, void 0, f);
    } catch (v) {
      return a(v) ? v : new Error(v);
    }
  });
  return qc = i, qc;
}
var _c, Qp;
function JE() {
  if (Qp) return _c;
  Qp = 1;
  var r = g0();
  function t(a, i) {
    return r(i, function(l) {
      return a[l];
    });
  }
  return _c = t, _c;
}
var $c, e0;
function KE() {
  if (e0) return $c;
  e0 = 1;
  var r = ut(), t = Object.prototype, a = t.hasOwnProperty;
  function i(l, f, v, h) {
    return l === void 0 || r(l, t[v]) && !a.call(h, v) ? f : l;
  }
  return $c = i, $c;
}
var Ec, r0;
function XE() {
  if (r0) return Ec;
  r0 = 1;
  var r = {
    "\\": "\\",
    "'": "'",
    "\n": "n",
    "\r": "r",
    "\u2028": "u2028",
    "\u2029": "u2029"
  };
  function t(a) {
    return "\\" + r[a];
  }
  return Ec = t, Ec;
}
var Tc, t0;
function F1() {
  if (t0) return Tc;
  t0 = 1;
  var r = /<%=([\s\S]+?)%>/g;
  return Tc = r, Tc;
}
var Sc, n0;
function QE() {
  if (n0) return Sc;
  n0 = 1;
  var r = O0(), t = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }, a = r(t);
  return Sc = a, Sc;
}
var xc, i0;
function eT() {
  if (i0) return xc;
  i0 = 1;
  var r = QE(), t = tr(), a = /[&<>"']/g, i = RegExp(a.source);
  function l(f) {
    return f = t(f), f && i.test(f) ? f.replace(a, r) : f;
  }
  return xc = l, xc;
}
var Ic, a0;
function rT() {
  if (a0) return Ic;
  a0 = 1;
  var r = /<%-([\s\S]+?)%>/g;
  return Ic = r, Ic;
}
var Rc, s0;
function tT() {
  if (s0) return Rc;
  s0 = 1;
  var r = /<%([\s\S]+?)%>/g;
  return Rc = r, Rc;
}
var Oc, u0;
function nT() {
  if (u0) return Oc;
  u0 = 1;
  var r = eT(), t = rT(), a = tT(), i = F1(), l = {
    /**
     * Used to detect `data` property values to be HTML-escaped.
     *
     * @memberOf _.templateSettings
     * @type {RegExp}
     */
    escape: t,
    /**
     * Used to detect code to be evaluated.
     *
     * @memberOf _.templateSettings
     * @type {RegExp}
     */
    evaluate: a,
    /**
     * Used to detect `data` property values to inject.
     *
     * @memberOf _.templateSettings
     * @type {RegExp}
     */
    interpolate: i,
    /**
     * Used to reference the data object in the template text.
     *
     * @memberOf _.templateSettings
     * @type {string}
     */
    variable: "",
    /**
     * Used to import variables into the compiled template.
     *
     * @memberOf _.templateSettings
     * @type {Object}
     */
    imports: {
      /**
       * A reference to the `lodash` function.
       *
       * @memberOf _.templateSettings.imports
       * @type {Function}
       */
      _: { escape: r }
    }
  };
  return Oc = l, Oc;
}
var Ac, o0;
function iT() {
  if (o0) return Ac;
  o0 = 1;
  var r = xw(), t = ZE(), a = YE(), i = JE(), l = KE(), f = XE(), v = N1(), h = I0(), p = $0(), O = F1(), R = nT(), _ = tr(), $ = "Invalid `variable` option passed into `_.template`", x = "Invalid `imports` option passed into `_.template`", T = /\b__p \+= '';/g, A = /\b(__p \+=) '' \+/g, k = /(__e\(.*?\)|\b__t\)) \+\n'';/g, M = /[()=,{}\[\]\/\s]/, L = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, U = /($^)/, N = /['\n\r\u2028\u2029\\]/g, P = Object.prototype, ae = P.hasOwnProperty;
  function ee(B, z, he) {
    var D = R.imports._.templateSettings || R;
    he && h(B, z, he) && (z = void 0), B = _(B), z = t({}, z, D, l);
    var ge = t({}, z.imports, D.imports, l), re = p(ge), we = i(ge, re);
    r(re, function(Oe) {
      if (M.test(Oe))
        throw new Error(x);
    });
    var se, Ie, qe = 0, De = z.interpolate || U, ue = "__p += '", Ve = RegExp(
      (z.escape || U).source + "|" + De.source + "|" + (De === O ? L : U).source + "|" + (z.evaluate || U).source + "|$",
      "g"
    ), oe = ae.call(z, "sourceURL") ? "//# sourceURL=" + (z.sourceURL + "").replace(/\s/g, " ") + `
` : "";
    B.replace(Ve, function(Oe, Ae, ve, Ye, Me, Pe) {
      return ve || (ve = Ye), ue += B.slice(qe, Pe).replace(N, f), Ae && (se = !0, ue += `' +
__e(` + Ae + `) +
'`), Me && (Ie = !0, ue += `';
` + Me + `;
__p += '`), ve && (ue += `' +
((__t = (` + ve + `)) == null ? '' : __t) +
'`), qe = Pe + Oe.length, Oe;
    }), ue += `';
`;
    var ce = ae.call(z, "variable") && z.variable;
    if (!ce)
      ue = `with (obj) {
` + ue + `
}
`;
    else if (M.test(ce))
      throw new Error($);
    ue = (Ie ? ue.replace(T, "") : ue).replace(A, "$1").replace(k, "$1;"), ue = "function(" + (ce || "obj") + `) {
` + (ce ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (se ? ", __e = _.escape" : "") + (Ie ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + ue + `return __p
}`;
    var Re = a(function() {
      return Function(re, oe + "return " + ue).apply(void 0, we);
    });
    if (Re.source = ue, v(Re))
      throw Re;
    return Re;
  }
  return Ac = ee, Ac;
}
var _e = {}, c0;
function aT() {
  if (c0) return _e;
  c0 = 1, Object.defineProperty(_e, "__esModule", { value: !0 });
  class r extends Error {
  }
  class t extends r {
    constructor(e) {
      super(`Invalid DateTime: ${e.toMessage()}`);
    }
  }
  class a extends r {
    constructor(e) {
      super(`Invalid Interval: ${e.toMessage()}`);
    }
  }
  class i extends r {
    constructor(e) {
      super(`Invalid Duration: ${e.toMessage()}`);
    }
  }
  class l extends r {
  }
  class f extends r {
    constructor(e) {
      super(`Invalid unit ${e}`);
    }
  }
  class v extends r {
  }
  class h extends r {
    constructor() {
      super("Zone is an abstract class");
    }
  }
  const p = "numeric", O = "short", R = "long", _ = {
    year: p,
    month: p,
    day: p
  }, $ = {
    year: p,
    month: O,
    day: p
  }, x = {
    year: p,
    month: O,
    day: p,
    weekday: O
  }, T = {
    year: p,
    month: R,
    day: p
  }, A = {
    year: p,
    month: R,
    day: p,
    weekday: R
  }, k = {
    hour: p,
    minute: p
  }, M = {
    hour: p,
    minute: p,
    second: p
  }, L = {
    hour: p,
    minute: p,
    second: p,
    timeZoneName: O
  }, U = {
    hour: p,
    minute: p,
    second: p,
    timeZoneName: R
  }, N = {
    hour: p,
    minute: p,
    hourCycle: "h23"
  }, P = {
    hour: p,
    minute: p,
    second: p,
    hourCycle: "h23"
  }, ae = {
    hour: p,
    minute: p,
    second: p,
    hourCycle: "h23",
    timeZoneName: O
  }, ee = {
    hour: p,
    minute: p,
    second: p,
    hourCycle: "h23",
    timeZoneName: R
  }, B = {
    year: p,
    month: p,
    day: p,
    hour: p,
    minute: p
  }, z = {
    year: p,
    month: p,
    day: p,
    hour: p,
    minute: p,
    second: p
  }, he = {
    year: p,
    month: O,
    day: p,
    hour: p,
    minute: p
  }, D = {
    year: p,
    month: O,
    day: p,
    hour: p,
    minute: p,
    second: p
  }, ge = {
    year: p,
    month: O,
    day: p,
    weekday: O,
    hour: p,
    minute: p
  }, re = {
    year: p,
    month: R,
    day: p,
    hour: p,
    minute: p,
    timeZoneName: O
  }, we = {
    year: p,
    month: R,
    day: p,
    hour: p,
    minute: p,
    second: p,
    timeZoneName: O
  }, se = {
    year: p,
    month: R,
    day: p,
    weekday: R,
    hour: p,
    minute: p,
    timeZoneName: R
  }, Ie = {
    year: p,
    month: R,
    day: p,
    weekday: R,
    hour: p,
    minute: p,
    second: p,
    timeZoneName: R
  };
  class qe {
    /**
     * The type of zone
     * @abstract
     * @type {string}
     */
    get type() {
      throw new h();
    }
    /**
     * The name of this zone.
     * @abstract
     * @type {string}
     */
    get name() {
      throw new h();
    }
    /**
     * The IANA name of this zone.
     * Defaults to `name` if not overwritten by a subclass.
     * @abstract
     * @type {string}
     */
    get ianaName() {
      return this.name;
    }
    /**
     * Returns whether the offset is known to be fixed for the whole year.
     * @abstract
     * @type {boolean}
     */
    get isUniversal() {
      throw new h();
    }
    /**
     * Returns the offset's common name (such as EST) at the specified timestamp
     * @abstract
     * @param {number} ts - Epoch milliseconds for which to get the name
     * @param {Object} opts - Options to affect the format
     * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
     * @param {string} opts.locale - What locale to return the offset name in.
     * @return {string}
     */
    offsetName(e, n) {
      throw new h();
    }
    /**
     * Returns the offset's value as a string
     * @abstract
     * @param {number} ts - Epoch milliseconds for which to get the offset
     * @param {string} format - What style of offset to return.
     *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
     * @return {string}
     */
    formatOffset(e, n) {
      throw new h();
    }
    /**
     * Return the offset in minutes for this zone at the specified timestamp.
     * @abstract
     * @param {number} ts - Epoch milliseconds for which to compute the offset
     * @return {number}
     */
    offset(e) {
      throw new h();
    }
    /**
     * Return whether this Zone is equal to another zone
     * @abstract
     * @param {Zone} otherZone - the zone to compare
     * @return {boolean}
     */
    equals(e) {
      throw new h();
    }
    /**
     * Return whether this Zone is valid.
     * @abstract
     * @type {boolean}
     */
    get isValid() {
      throw new h();
    }
  }
  let De = null;
  class ue extends qe {
    /**
     * Get a singleton instance of the local zone
     * @return {SystemZone}
     */
    static get instance() {
      return De === null && (De = new ue()), De;
    }
    /** @override **/
    get type() {
      return "system";
    }
    /** @override **/
    get name() {
      return new Intl.DateTimeFormat().resolvedOptions().timeZone;
    }
    /** @override **/
    get isUniversal() {
      return !1;
    }
    /** @override **/
    offsetName(e, {
      format: n,
      locale: c
    }) {
      return _l(e, n, c);
    }
    /** @override **/
    formatOffset(e, n) {
      return Tr(this.offset(e), n);
    }
    /** @override **/
    offset(e) {
      return -new Date(e).getTimezoneOffset();
    }
    /** @override **/
    equals(e) {
      return e.type === "system";
    }
    /** @override **/
    get isValid() {
      return !0;
    }
  }
  const Ve = /* @__PURE__ */ new Map();
  function oe(u) {
    let e = Ve.get(u);
    return e === void 0 && (e = new Intl.DateTimeFormat("en-US", {
      hour12: !1,
      timeZone: u,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      era: "short"
    }), Ve.set(u, e)), e;
  }
  const ce = {
    year: 0,
    month: 1,
    day: 2,
    era: 3,
    hour: 4,
    minute: 5,
    second: 6
  };
  function Re(u, e) {
    const n = u.format(e).replace(/\u200E/g, ""), c = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n), [, d, g, w, q, E, C, F] = c;
    return [w, d, g, q, E, C, F];
  }
  function Oe(u, e) {
    const n = u.formatToParts(e), c = [];
    for (let d = 0; d < n.length; d++) {
      const {
        type: g,
        value: w
      } = n[d], q = ce[g];
      g === "era" ? c[q] = w : V(q) || (c[q] = parseInt(w, 10));
    }
    return c;
  }
  const Ae = /* @__PURE__ */ new Map();
  class ve extends qe {
    /**
     * @param {string} name - Zone name
     * @return {IANAZone}
     */
    static create(e) {
      let n = Ae.get(e);
      return n === void 0 && Ae.set(e, n = new ve(e)), n;
    }
    /**
     * Reset local caches. Should only be necessary in testing scenarios.
     * @return {void}
     */
    static resetCache() {
      Ae.clear(), Ve.clear();
    }
    /**
     * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
     * @param {string} s - The string to check validity on
     * @example IANAZone.isValidSpecifier("America/New_York") //=> true
     * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
     * @deprecated For backward compatibility, this forwards to isValidZone, better use `isValidZone()` directly instead.
     * @return {boolean}
     */
    static isValidSpecifier(e) {
      return this.isValidZone(e);
    }
    /**
     * Returns whether the provided string identifies a real zone
     * @param {string} zone - The string to check
     * @example IANAZone.isValidZone("America/New_York") //=> true
     * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
     * @example IANAZone.isValidZone("Sport~~blorp") //=> false
     * @return {boolean}
     */
    static isValidZone(e) {
      if (!e)
        return !1;
      try {
        return new Intl.DateTimeFormat("en-US", {
          timeZone: e
        }).format(), !0;
      } catch {
        return !1;
      }
    }
    constructor(e) {
      super(), this.zoneName = e, this.valid = ve.isValidZone(e);
    }
    /**
     * The type of zone. `iana` for all instances of `IANAZone`.
     * @override
     * @type {string}
     */
    get type() {
      return "iana";
    }
    /**
     * The name of this zone (i.e. the IANA zone name).
     * @override
     * @type {string}
     */
    get name() {
      return this.zoneName;
    }
    /**
     * Returns whether the offset is known to be fixed for the whole year:
     * Always returns false for all IANA zones.
     * @override
     * @type {boolean}
     */
    get isUniversal() {
      return !1;
    }
    /**
     * Returns the offset's common name (such as EST) at the specified timestamp
     * @override
     * @param {number} ts - Epoch milliseconds for which to get the name
     * @param {Object} opts - Options to affect the format
     * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
     * @param {string} opts.locale - What locale to return the offset name in.
     * @return {string}
     */
    offsetName(e, {
      format: n,
      locale: c
    }) {
      return _l(e, n, c, this.name);
    }
    /**
     * Returns the offset's value as a string
     * @override
     * @param {number} ts - Epoch milliseconds for which to get the offset
     * @param {string} format - What style of offset to return.
     *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
     * @return {string}
     */
    formatOffset(e, n) {
      return Tr(this.offset(e), n);
    }
    /**
     * Return the offset in minutes for this zone at the specified timestamp.
     * @override
     * @param {number} ts - Epoch milliseconds for which to compute the offset
     * @return {number}
     */
    offset(e) {
      if (!this.valid) return NaN;
      const n = new Date(e);
      if (isNaN(n)) return NaN;
      const c = oe(this.name);
      let [d, g, w, q, E, C, F] = c.formatToParts ? Oe(c, n) : Re(c, n);
      q === "BC" && (d = -Math.abs(d) + 1);
      const ne = Hr({
        year: d,
        month: g,
        day: w,
        hour: E === 24 ? 0 : E,
        minute: C,
        second: F,
        millisecond: 0
      });
      let j = +n;
      const me = j % 1e3;
      return j -= me >= 0 ? me : 1e3 + me, (ne - j) / (60 * 1e3);
    }
    /**
     * Return whether this Zone is equal to another zone
     * @override
     * @param {Zone} otherZone - the zone to compare
     * @return {boolean}
     */
    equals(e) {
      return e.type === "iana" && e.name === this.name;
    }
    /**
     * Return whether this Zone is valid.
     * @override
     * @type {boolean}
     */
    get isValid() {
      return this.valid;
    }
  }
  let Ye = {};
  function Me(u, e = {}) {
    const n = JSON.stringify([u, e]);
    let c = Ye[n];
    return c || (c = new Intl.ListFormat(u, e), Ye[n] = c), c;
  }
  const Pe = /* @__PURE__ */ new Map();
  function nr(u, e = {}) {
    const n = JSON.stringify([u, e]);
    let c = Pe.get(n);
    return c === void 0 && (c = new Intl.DateTimeFormat(u, e), Pe.set(n, c)), c;
  }
  const wr = /* @__PURE__ */ new Map();
  function Ur(u, e = {}) {
    const n = JSON.stringify([u, e]);
    let c = wr.get(n);
    return c === void 0 && (c = new Intl.NumberFormat(u, e), wr.set(n, c)), c;
  }
  const Ue = /* @__PURE__ */ new Map();
  function Je(u, e = {}) {
    const {
      base: n,
      ...c
    } = e, d = JSON.stringify([u, c]);
    let g = Ue.get(d);
    return g === void 0 && (g = new Intl.RelativeTimeFormat(u, e), Ue.set(d, g)), g;
  }
  let Ke = null;
  function vt() {
    return Ke || (Ke = new Intl.DateTimeFormat().resolvedOptions().locale, Ke);
  }
  const Xe = /* @__PURE__ */ new Map();
  function Br(u) {
    let e = Xe.get(u);
    return e === void 0 && (e = new Intl.DateTimeFormat(u).resolvedOptions(), Xe.set(u, e)), e;
  }
  const qr = /* @__PURE__ */ new Map();
  function jr(u) {
    let e = qr.get(u);
    if (!e) {
      const n = new Intl.Locale(u);
      e = "getWeekInfo" in n ? n.getWeekInfo() : n.weekInfo, "minimalDays" in e || (e = {
        ...y,
        ...e
      }), qr.set(u, e);
    }
    return e;
  }
  function ir(u) {
    const e = u.indexOf("-x-");
    e !== -1 && (u = u.substring(0, e));
    const n = u.indexOf("-u-");
    if (n === -1)
      return [u];
    {
      let c, d;
      try {
        c = nr(u).resolvedOptions(), d = u;
      } catch {
        const E = u.substring(0, n);
        c = nr(E).resolvedOptions(), d = E;
      }
      const {
        numberingSystem: g,
        calendar: w
      } = c;
      return [d, g, w];
    }
  }
  function Ee(u, e, n) {
    return (n || e) && (u.includes("-u-") || (u += "-u"), n && (u += `-ca-${n}`), e && (u += `-nu-${e}`)), u;
  }
  function _r(u) {
    const e = [];
    for (let n = 1; n <= 12; n++) {
      const c = W.utc(2009, n, 1);
      e.push(u(c));
    }
    return e;
  }
  function yt(u) {
    const e = [];
    for (let n = 1; n <= 7; n++) {
      const c = W.utc(2016, 11, 13 + n);
      e.push(u(c));
    }
    return e;
  }
  function $e(u, e, n, c) {
    const d = u.listingMode();
    return d === "error" ? null : d === "en" ? n(e) : c(e);
  }
  function pt(u) {
    return u.numberingSystem && u.numberingSystem !== "latn" ? !1 : u.numberingSystem === "latn" || !u.locale || u.locale.startsWith("en") || Br(u.locale).numberingSystem === "latn";
  }
  class m {
    constructor(e, n, c) {
      this.padTo = c.padTo || 0, this.floor = c.floor || !1;
      const {
        padTo: d,
        floor: g,
        ...w
      } = c;
      if (!n || Object.keys(w).length > 0) {
        const q = {
          useGrouping: !1,
          ...c
        };
        c.padTo > 0 && (q.minimumIntegerDigits = c.padTo), this.inf = Ur(e, q);
      }
    }
    format(e) {
      if (this.inf) {
        const n = this.floor ? Math.floor(e) : e;
        return this.inf.format(n);
      } else {
        const n = this.floor ? Math.floor(e) : Et(e, 3);
        return de(n, this.padTo);
      }
    }
  }
  class s {
    constructor(e, n, c) {
      this.opts = c, this.originalZone = void 0;
      let d;
      if (this.opts.timeZone)
        this.dt = e;
      else if (e.zone.type === "fixed") {
        const w = -1 * (e.offset / 60), q = w >= 0 ? `Etc/GMT+${w}` : `Etc/GMT${w}`;
        e.offset !== 0 && ve.create(q).valid ? (d = q, this.dt = e) : (d = "UTC", this.dt = e.offset === 0 ? e : e.setZone("UTC").plus({
          minutes: e.offset
        }), this.originalZone = e.zone);
      } else e.zone.type === "system" ? this.dt = e : e.zone.type === "iana" ? (this.dt = e, d = e.zone.name) : (d = "UTC", this.dt = e.setZone("UTC").plus({
        minutes: e.offset
      }), this.originalZone = e.zone);
      const g = {
        ...this.opts
      };
      g.timeZone = g.timeZone || d, this.dtf = nr(n, g);
    }
    format() {
      return this.originalZone ? this.formatToParts().map(({
        value: e
      }) => e).join("") : this.dtf.format(this.dt.toJSDate());
    }
    formatToParts() {
      const e = this.dtf.formatToParts(this.dt.toJSDate());
      return this.originalZone ? e.map((n) => {
        if (n.type === "timeZoneName") {
          const c = this.originalZone.offsetName(this.dt.ts, {
            locale: this.dt.locale,
            format: this.opts.timeZoneName
          });
          return {
            ...n,
            value: c
          };
        } else
          return n;
      }) : e;
    }
    resolvedOptions() {
      return this.dtf.resolvedOptions();
    }
  }
  class o {
    constructor(e, n, c) {
      this.opts = {
        style: "long",
        ...c
      }, !n && gl() && (this.rtf = Je(e, c));
    }
    format(e, n) {
      return this.rtf ? this.rtf.format(e, n) : ig(n, e, this.opts.numeric, this.opts.style !== "long");
    }
    formatToParts(e, n) {
      return this.rtf ? this.rtf.formatToParts(e, n) : [];
    }
  }
  const y = {
    firstDay: 1,
    minimalDays: 4,
    weekend: [6, 7]
  };
  class b {
    static fromOpts(e) {
      return b.create(e.locale, e.numberingSystem, e.outputCalendar, e.weekSettings, e.defaultToEN);
    }
    static create(e, n, c, d, g = !1) {
      const w = e || le.defaultLocale, q = w || (g ? "en-US" : vt()), E = n || le.defaultNumberingSystem, C = c || le.defaultOutputCalendar, F = _t(d) || le.defaultWeekSettings;
      return new b(q, E, C, F, w);
    }
    static resetCache() {
      Ke = null, Pe.clear(), wr.clear(), Ue.clear(), Xe.clear(), qr.clear();
    }
    static fromObject({
      locale: e,
      numberingSystem: n,
      outputCalendar: c,
      weekSettings: d
    } = {}) {
      return b.create(e, n, c, d);
    }
    constructor(e, n, c, d, g) {
      const [w, q, E] = ir(e);
      this.locale = w, this.numberingSystem = n || q || null, this.outputCalendar = c || E || null, this.weekSettings = d, this.intl = Ee(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = {
        format: {},
        standalone: {}
      }, this.monthsCache = {
        format: {},
        standalone: {}
      }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = g, this.fastNumbersCached = null;
    }
    get fastNumbers() {
      return this.fastNumbersCached == null && (this.fastNumbersCached = pt(this)), this.fastNumbersCached;
    }
    listingMode() {
      const e = this.isEnglish(), n = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
      return e && n ? "en" : "intl";
    }
    clone(e) {
      return !e || Object.getOwnPropertyNames(e).length === 0 ? this : b.create(e.locale || this.specifiedLocale, e.numberingSystem || this.numberingSystem, e.outputCalendar || this.outputCalendar, _t(e.weekSettings) || this.weekSettings, e.defaultToEN || !1);
    }
    redefaultToEN(e = {}) {
      return this.clone({
        ...e,
        defaultToEN: !0
      });
    }
    redefaultToSystem(e = {}) {
      return this.clone({
        ...e,
        defaultToEN: !1
      });
    }
    months(e, n = !1) {
      return $e(this, e, Tl, () => {
        const c = this.intl === "ja" || this.intl.startsWith("ja-");
        n &= !c;
        const d = n ? {
          month: e,
          day: "numeric"
        } : {
          month: e
        }, g = n ? "format" : "standalone";
        if (!this.monthsCache[g][e]) {
          const w = c ? (q) => this.dtFormatter(q, d).format() : (q) => this.extract(q, d, "month");
          this.monthsCache[g][e] = _r(w);
        }
        return this.monthsCache[g][e];
      });
    }
    weekdays(e, n = !1) {
      return $e(this, e, Il, () => {
        const c = n ? {
          weekday: e,
          year: "numeric",
          month: "long",
          day: "numeric"
        } : {
          weekday: e
        }, d = n ? "format" : "standalone";
        return this.weekdaysCache[d][e] || (this.weekdaysCache[d][e] = yt((g) => this.extract(g, c, "weekday"))), this.weekdaysCache[d][e];
      });
    }
    meridiems() {
      return $e(this, void 0, () => Rl, () => {
        if (!this.meridiemCache) {
          const e = {
            hour: "numeric",
            hourCycle: "h12"
          };
          this.meridiemCache = [W.utc(2016, 11, 13, 9), W.utc(2016, 11, 13, 19)].map((n) => this.extract(n, e, "dayperiod"));
        }
        return this.meridiemCache;
      });
    }
    eras(e) {
      return $e(this, e, Ol, () => {
        const n = {
          era: e
        };
        return this.eraCache[e] || (this.eraCache[e] = [W.utc(-40, 1, 1), W.utc(2017, 1, 1)].map((c) => this.extract(c, n, "era"))), this.eraCache[e];
      });
    }
    extract(e, n, c) {
      const d = this.dtFormatter(e, n), g = d.formatToParts(), w = g.find((q) => q.type.toLowerCase() === c);
      return w ? w.value : null;
    }
    numberFormatter(e = {}) {
      return new m(this.intl, e.forceSimple || this.fastNumbers, e);
    }
    dtFormatter(e, n = {}) {
      return new s(e, this.intl, n);
    }
    relFormatter(e = {}) {
      return new o(this.intl, this.isEnglish(), e);
    }
    listFormatter(e = {}) {
      return Me(this.intl, e);
    }
    isEnglish() {
      return this.locale === "en" || this.locale.toLowerCase() === "en-us" || Br(this.intl).locale.startsWith("en-us");
    }
    getWeekSettings() {
      return this.weekSettings ? this.weekSettings : bl() ? jr(this.locale) : y;
    }
    getStartOfWeek() {
      return this.getWeekSettings().firstDay;
    }
    getMinDaysInFirstWeek() {
      return this.getWeekSettings().minimalDays;
    }
    getWeekendDays() {
      return this.getWeekSettings().weekend;
    }
    equals(e) {
      return this.locale === e.locale && this.numberingSystem === e.numberingSystem && this.outputCalendar === e.outputCalendar;
    }
    toString() {
      return `Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`;
    }
  }
  let S = null;
  class I extends qe {
    /**
     * Get a singleton instance of UTC
     * @return {FixedOffsetZone}
     */
    static get utcInstance() {
      return S === null && (S = new I(0)), S;
    }
    /**
     * Get an instance with a specified offset
     * @param {number} offset - The offset in minutes
     * @return {FixedOffsetZone}
     */
    static instance(e) {
      return e === 0 ? I.utcInstance : new I(e);
    }
    /**
     * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
     * @param {string} s - The offset string to parse
     * @example FixedOffsetZone.parseSpecifier("UTC+6")
     * @example FixedOffsetZone.parseSpecifier("UTC+06")
     * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
     * @return {FixedOffsetZone}
     */
    static parseSpecifier(e) {
      if (e) {
        const n = e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
        if (n)
          return new I(Gr(n[1], n[2]));
      }
      return null;
    }
    constructor(e) {
      super(), this.fixed = e;
    }
    /**
     * The type of zone. `fixed` for all instances of `FixedOffsetZone`.
     * @override
     * @type {string}
     */
    get type() {
      return "fixed";
    }
    /**
     * The name of this zone.
     * All fixed zones' names always start with "UTC" (plus optional offset)
     * @override
     * @type {string}
     */
    get name() {
      return this.fixed === 0 ? "UTC" : `UTC${Tr(this.fixed, "narrow")}`;
    }
    /**
     * The IANA name of this zone, i.e. `Etc/UTC` or `Etc/GMT+/-nn`
     *
     * @override
     * @type {string}
     */
    get ianaName() {
      return this.fixed === 0 ? "Etc/UTC" : `Etc/GMT${Tr(-this.fixed, "narrow")}`;
    }
    /**
     * Returns the offset's common name at the specified timestamp.
     *
     * For fixed offset zones this equals to the zone name.
     * @override
     */
    offsetName() {
      return this.name;
    }
    /**
     * Returns the offset's value as a string
     * @override
     * @param {number} ts - Epoch milliseconds for which to get the offset
     * @param {string} format - What style of offset to return.
     *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
     * @return {string}
     */
    formatOffset(e, n) {
      return Tr(this.fixed, n);
    }
    /**
     * Returns whether the offset is known to be fixed for the whole year:
     * Always returns true for all fixed offset zones.
     * @override
     * @type {boolean}
     */
    get isUniversal() {
      return !0;
    }
    /**
     * Return the offset in minutes for this zone at the specified timestamp.
     *
     * For fixed offset zones, this is constant and does not depend on a timestamp.
     * @override
     * @return {number}
     */
    offset() {
      return this.fixed;
    }
    /**
     * Return whether this Zone is equal to another zone (i.e. also fixed and same offset)
     * @override
     * @param {Zone} otherZone - the zone to compare
     * @return {boolean}
     */
    equals(e) {
      return e.type === "fixed" && e.fixed === this.fixed;
    }
    /**
     * Return whether this Zone is valid:
     * All fixed offset zones are valid.
     * @override
     * @type {boolean}
     */
    get isValid() {
      return !0;
    }
  }
  class G extends qe {
    constructor(e) {
      super(), this.zoneName = e;
    }
    /** @override **/
    get type() {
      return "invalid";
    }
    /** @override **/
    get name() {
      return this.zoneName;
    }
    /** @override **/
    get isUniversal() {
      return !1;
    }
    /** @override **/
    offsetName() {
      return null;
    }
    /** @override **/
    formatOffset() {
      return "";
    }
    /** @override **/
    offset() {
      return NaN;
    }
    /** @override **/
    equals() {
      return !1;
    }
    /** @override **/
    get isValid() {
      return !1;
    }
  }
  function Y(u, e) {
    if (V(u) || u === null)
      return e;
    if (u instanceof qe)
      return u;
    if (V1(u)) {
      const n = u.toLowerCase();
      return n === "default" ? e : n === "local" || n === "system" ? ue.instance : n === "utc" || n === "gmt" ? I.utcInstance : I.parseSpecifier(n) || ve.create(u);
    } else return He(u) ? I.instance(u) : typeof u == "object" && "offset" in u && typeof u.offset == "function" ? u : new G(u);
  }
  const te = {
    arab: "[٠-٩]",
    arabext: "[۰-۹]",
    bali: "[᭐-᭙]",
    beng: "[০-৯]",
    deva: "[०-९]",
    fullwide: "[０-９]",
    gujr: "[૦-૯]",
    hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
    khmr: "[០-៩]",
    knda: "[೦-೯]",
    laoo: "[໐-໙]",
    limb: "[᥆-᥏]",
    mlym: "[൦-൯]",
    mong: "[᠐-᠙]",
    mymr: "[၀-၉]",
    orya: "[୦-୯]",
    tamldec: "[௦-௯]",
    telu: "[౦-౯]",
    thai: "[๐-๙]",
    tibt: "[༠-༩]",
    latn: "\\d"
  }, ie = {
    arab: [1632, 1641],
    arabext: [1776, 1785],
    bali: [6992, 7001],
    beng: [2534, 2543],
    deva: [2406, 2415],
    fullwide: [65296, 65303],
    gujr: [2790, 2799],
    khmr: [6112, 6121],
    knda: [3302, 3311],
    laoo: [3792, 3801],
    limb: [6470, 6479],
    mlym: [3430, 3439],
    mong: [6160, 6169],
    mymr: [4160, 4169],
    orya: [2918, 2927],
    tamldec: [3046, 3055],
    telu: [3174, 3183],
    thai: [3664, 3673],
    tibt: [3872, 3881]
  }, X = te.hanidec.replace(/[\[|\]]/g, "").split("");
  function P1(u) {
    let e = parseInt(u, 10);
    if (isNaN(e)) {
      e = "";
      for (let n = 0; n < u.length; n++) {
        const c = u.charCodeAt(n);
        if (u[n].search(te.hanidec) !== -1)
          e += X.indexOf(u[n]);
        else
          for (const d in ie) {
            const [g, w] = ie[d];
            c >= g && c <= w && (e += c - g);
          }
      }
      return parseInt(e, 10);
    } else
      return e;
  }
  const gt = /* @__PURE__ */ new Map();
  function U1() {
    gt.clear();
  }
  function Ce({
    numberingSystem: u
  }, e = "") {
    const n = u || "latn";
    let c = gt.get(n);
    c === void 0 && (c = /* @__PURE__ */ new Map(), gt.set(n, c));
    let d = c.get(e);
    return d === void 0 && (d = new RegExp(`${te[n]}${e}`), c.set(e, d)), d;
  }
  let rl = () => Date.now(), tl = "system", nl = null, il = null, al = null, sl = 60, ul, ol = null;
  class le {
    /**
     * Get the callback for returning the current timestamp.
     * @type {function}
     */
    static get now() {
      return rl;
    }
    /**
     * Set the callback for returning the current timestamp.
     * The function should return a number, which will be interpreted as an Epoch millisecond count
     * @type {function}
     * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
     * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
     */
    static set now(e) {
      rl = e;
    }
    /**
     * Set the default time zone to create DateTimes in. Does not affect existing instances.
     * Use the value "system" to reset this value to the system's time zone.
     * @type {string}
     */
    static set defaultZone(e) {
      tl = e;
    }
    /**
     * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
     * The default value is the system's time zone (the one set on the machine that runs this code).
     * @type {Zone}
     */
    static get defaultZone() {
      return Y(tl, ue.instance);
    }
    /**
     * Get the default locale to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    static get defaultLocale() {
      return nl;
    }
    /**
     * Set the default locale to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    static set defaultLocale(e) {
      nl = e;
    }
    /**
     * Get the default numbering system to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    static get defaultNumberingSystem() {
      return il;
    }
    /**
     * Set the default numbering system to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    static set defaultNumberingSystem(e) {
      il = e;
    }
    /**
     * Get the default output calendar to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    static get defaultOutputCalendar() {
      return al;
    }
    /**
     * Set the default output calendar to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    static set defaultOutputCalendar(e) {
      al = e;
    }
    /**
     * @typedef {Object} WeekSettings
     * @property {number} firstDay
     * @property {number} minimalDays
     * @property {number[]} weekend
     */
    /**
     * @return {WeekSettings|null}
     */
    static get defaultWeekSettings() {
      return ol;
    }
    /**
     * Allows overriding the default locale week settings, i.e. the start of the week, the weekend and
     * how many days are required in the first week of a year.
     * Does not affect existing instances.
     *
     * @param {WeekSettings|null} weekSettings
     */
    static set defaultWeekSettings(e) {
      ol = _t(e);
    }
    /**
     * Get the cutoff year for whether a 2-digit year string is interpreted in the current or previous century. Numbers higher than the cutoff will be considered to mean 19xx and numbers lower or equal to the cutoff will be considered 20xx.
     * @type {number}
     */
    static get twoDigitCutoffYear() {
      return sl;
    }
    /**
     * Set the cutoff year for whether a 2-digit year string is interpreted in the current or previous century. Numbers higher than the cutoff will be considered to mean 19xx and numbers lower or equal to the cutoff will be considered 20xx.
     * @type {number}
     * @example Settings.twoDigitCutoffYear = 0 // all 'yy' are interpreted as 20th century
     * @example Settings.twoDigitCutoffYear = 99 // all 'yy' are interpreted as 21st century
     * @example Settings.twoDigitCutoffYear = 50 // '49' -> 2049; '50' -> 1950
     * @example Settings.twoDigitCutoffYear = 1950 // interpreted as 50
     * @example Settings.twoDigitCutoffYear = 2050 // ALSO interpreted as 50
     */
    static set twoDigitCutoffYear(e) {
      sl = e % 100;
    }
    /**
     * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
     * @type {boolean}
     */
    static get throwOnInvalid() {
      return ul;
    }
    /**
     * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
     * @type {boolean}
     */
    static set throwOnInvalid(e) {
      ul = e;
    }
    /**
     * Reset Luxon's global caches. Should only be necessary in testing scenarios.
     * @return {void}
     */
    static resetCaches() {
      b.resetCache(), ve.resetCache(), W.resetCache(), U1();
    }
  }
  class Le {
    constructor(e, n) {
      this.reason = e, this.explanation = n;
    }
    toMessage() {
      return this.explanation ? `${this.reason}: ${this.explanation}` : this.reason;
    }
  }
  const cl = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], ll = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
  function Te(u, e) {
    return new Le("unit out of range", `you specified ${e} (of type ${typeof e}) as a ${u}, which is invalid`);
  }
  function bt(u, e, n) {
    const c = new Date(Date.UTC(u, e - 1, n));
    u < 100 && u >= 0 && c.setUTCFullYear(c.getUTCFullYear() - 1900);
    const d = c.getUTCDay();
    return d === 0 ? 7 : d;
  }
  function fl(u, e, n) {
    return n + ($r(u) ? ll : cl)[e - 1];
  }
  function hl(u, e) {
    const n = $r(u) ? ll : cl, c = n.findIndex((g) => g < e), d = e - n[c];
    return {
      month: c + 1,
      day: d
    };
  }
  function wt(u, e) {
    return (u - e + 7) % 7 + 1;
  }
  function Vr(u, e = 4, n = 1) {
    const {
      year: c,
      month: d,
      day: g
    } = u, w = fl(c, d, g), q = wt(bt(c, d, g), n);
    let E = Math.floor((w - q + 14 - e) / 7), C;
    return E < 1 ? (C = c - 1, E = Er(C, e, n)) : E > Er(c, e, n) ? (C = c + 1, E = 1) : C = c, {
      weekYear: C,
      weekNumber: E,
      weekday: q,
      ...Yr(u)
    };
  }
  function dl(u, e = 4, n = 1) {
    const {
      weekYear: c,
      weekNumber: d,
      weekday: g
    } = u, w = wt(bt(c, 1, e), n), q = sr(c);
    let E = d * 7 + g - w - 7 + e, C;
    E < 1 ? (C = c - 1, E += sr(C)) : E > q ? (C = c + 1, E -= sr(c)) : C = c;
    const {
      month: F,
      day: H
    } = hl(C, E);
    return {
      year: C,
      month: F,
      day: H,
      ...Yr(u)
    };
  }
  function qt(u) {
    const {
      year: e,
      month: n,
      day: c
    } = u, d = fl(e, n, c);
    return {
      year: e,
      ordinal: d,
      ...Yr(u)
    };
  }
  function ml(u) {
    const {
      year: e,
      ordinal: n
    } = u, {
      month: c,
      day: d
    } = hl(e, n);
    return {
      year: e,
      month: c,
      day: d,
      ...Yr(u)
    };
  }
  function vl(u, e) {
    if (!V(u.localWeekday) || !V(u.localWeekNumber) || !V(u.localWeekYear)) {
      if (!V(u.weekday) || !V(u.weekNumber) || !V(u.weekYear))
        throw new l("Cannot mix locale-based week fields with ISO-based week fields");
      return V(u.localWeekday) || (u.weekday = u.localWeekday), V(u.localWeekNumber) || (u.weekNumber = u.localWeekNumber), V(u.localWeekYear) || (u.weekYear = u.localWeekYear), delete u.localWeekday, delete u.localWeekNumber, delete u.localWeekYear, {
        minDaysInFirstWeek: e.getMinDaysInFirstWeek(),
        startOfWeek: e.getStartOfWeek()
      };
    } else
      return {
        minDaysInFirstWeek: 4,
        startOfWeek: 1
      };
  }
  function B1(u, e = 4, n = 1) {
    const c = Wr(u.weekYear), d = Se(u.weekNumber, 1, Er(u.weekYear, e, n)), g = Se(u.weekday, 1, 7);
    return c ? d ? g ? !1 : Te("weekday", u.weekday) : Te("week", u.weekNumber) : Te("weekYear", u.weekYear);
  }
  function j1(u) {
    const e = Wr(u.year), n = Se(u.ordinal, 1, sr(u.year));
    return e ? n ? !1 : Te("ordinal", u.ordinal) : Te("year", u.year);
  }
  function yl(u) {
    const e = Wr(u.year), n = Se(u.month, 1, 12), c = Se(u.day, 1, zr(u.year, u.month));
    return e ? n ? c ? !1 : Te("day", u.day) : Te("month", u.month) : Te("year", u.year);
  }
  function pl(u) {
    const {
      hour: e,
      minute: n,
      second: c,
      millisecond: d
    } = u, g = Se(e, 0, 23) || e === 24 && n === 0 && c === 0 && d === 0, w = Se(n, 0, 59), q = Se(c, 0, 59), E = Se(d, 0, 999);
    return g ? w ? q ? E ? !1 : Te("millisecond", d) : Te("second", c) : Te("minute", n) : Te("hour", e);
  }
  function V(u) {
    return typeof u > "u";
  }
  function He(u) {
    return typeof u == "number";
  }
  function Wr(u) {
    return typeof u == "number" && u % 1 === 0;
  }
  function V1(u) {
    return typeof u == "string";
  }
  function W1(u) {
    return Object.prototype.toString.call(u) === "[object Date]";
  }
  function gl() {
    try {
      return typeof Intl < "u" && !!Intl.RelativeTimeFormat;
    } catch {
      return !1;
    }
  }
  function bl() {
    try {
      return typeof Intl < "u" && !!Intl.Locale && ("weekInfo" in Intl.Locale.prototype || "getWeekInfo" in Intl.Locale.prototype);
    } catch {
      return !1;
    }
  }
  function z1(u) {
    return Array.isArray(u) ? u : [u];
  }
  function wl(u, e, n) {
    if (u.length !== 0)
      return u.reduce((c, d) => {
        const g = [e(d), d];
        return c && n(c[0], g[0]) === c[0] ? c : g;
      }, null)[1];
  }
  function H1(u, e) {
    return e.reduce((n, c) => (n[c] = u[c], n), {});
  }
  function ar(u, e) {
    return Object.prototype.hasOwnProperty.call(u, e);
  }
  function _t(u) {
    if (u == null)
      return null;
    if (typeof u != "object")
      throw new v("Week settings must be an object");
    if (!Se(u.firstDay, 1, 7) || !Se(u.minimalDays, 1, 7) || !Array.isArray(u.weekend) || u.weekend.some((e) => !Se(e, 1, 7)))
      throw new v("Invalid week settings");
    return {
      firstDay: u.firstDay,
      minimalDays: u.minimalDays,
      weekend: Array.from(u.weekend)
    };
  }
  function Se(u, e, n) {
    return Wr(u) && u >= e && u <= n;
  }
  function G1(u, e) {
    return u - e * Math.floor(u / e);
  }
  function de(u, e = 2) {
    const n = u < 0;
    let c;
    return n ? c = "-" + ("" + -u).padStart(e, "0") : c = ("" + u).padStart(e, "0"), c;
  }
  function Ge(u) {
    if (!(V(u) || u === null || u === ""))
      return parseInt(u, 10);
  }
  function Qe(u) {
    if (!(V(u) || u === null || u === ""))
      return parseFloat(u);
  }
  function $t(u) {
    if (!(V(u) || u === null || u === "")) {
      const e = parseFloat("0." + u) * 1e3;
      return Math.floor(e);
    }
  }
  function Et(u, e, n = "round") {
    const c = 10 ** e;
    switch (n) {
      case "expand":
        return u > 0 ? Math.ceil(u * c) / c : Math.floor(u * c) / c;
      case "trunc":
        return Math.trunc(u * c) / c;
      case "round":
        return Math.round(u * c) / c;
      case "floor":
        return Math.floor(u * c) / c;
      case "ceil":
        return Math.ceil(u * c) / c;
      default:
        throw new RangeError(`Value rounding ${n} is out of range`);
    }
  }
  function $r(u) {
    return u % 4 === 0 && (u % 100 !== 0 || u % 400 === 0);
  }
  function sr(u) {
    return $r(u) ? 366 : 365;
  }
  function zr(u, e) {
    const n = G1(e - 1, 12) + 1, c = u + (e - n) / 12;
    return n === 2 ? $r(c) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n - 1];
  }
  function Hr(u) {
    let e = Date.UTC(u.year, u.month - 1, u.day, u.hour, u.minute, u.second, u.millisecond);
    return u.year < 100 && u.year >= 0 && (e = new Date(e), e.setUTCFullYear(u.year, u.month - 1, u.day)), +e;
  }
  function ql(u, e, n) {
    return -wt(bt(u, 1, e), n) + e - 1;
  }
  function Er(u, e = 4, n = 1) {
    const c = ql(u, e, n), d = ql(u + 1, e, n);
    return (sr(u) - c + d) / 7;
  }
  function Tt(u) {
    return u > 99 ? u : u > le.twoDigitCutoffYear ? 1900 + u : 2e3 + u;
  }
  function _l(u, e, n, c = null) {
    const d = new Date(u), g = {
      hourCycle: "h23",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    };
    c && (g.timeZone = c);
    const w = {
      timeZoneName: e,
      ...g
    }, q = new Intl.DateTimeFormat(n, w).formatToParts(d).find((E) => E.type.toLowerCase() === "timezonename");
    return q ? q.value : null;
  }
  function Gr(u, e) {
    let n = parseInt(u, 10);
    Number.isNaN(n) && (n = 0);
    const c = parseInt(e, 10) || 0, d = n < 0 || Object.is(n, -0) ? -c : c;
    return n * 60 + d;
  }
  function $l(u) {
    const e = Number(u);
    if (typeof u == "boolean" || u === "" || !Number.isFinite(e)) throw new v(`Invalid unit value ${u}`);
    return e;
  }
  function Zr(u, e) {
    const n = {};
    for (const c in u)
      if (ar(u, c)) {
        const d = u[c];
        if (d == null) continue;
        n[e(c)] = $l(d);
      }
    return n;
  }
  function Tr(u, e) {
    const n = Math.trunc(Math.abs(u / 60)), c = Math.trunc(Math.abs(u % 60)), d = u >= 0 ? "+" : "-";
    switch (e) {
      case "short":
        return `${d}${de(n, 2)}:${de(c, 2)}`;
      case "narrow":
        return `${d}${n}${c > 0 ? `:${c}` : ""}`;
      case "techie":
        return `${d}${de(n, 2)}${de(c, 2)}`;
      default:
        throw new RangeError(`Value format ${e} is out of range for property format`);
    }
  }
  function Yr(u) {
    return H1(u, ["hour", "minute", "second", "millisecond"]);
  }
  const Z1 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], El = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], Y1 = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
  function Tl(u) {
    switch (u) {
      case "narrow":
        return [...Y1];
      case "short":
        return [...El];
      case "long":
        return [...Z1];
      case "numeric":
        return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
      case "2-digit":
        return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
      default:
        return null;
    }
  }
  const Sl = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], xl = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], J1 = ["M", "T", "W", "T", "F", "S", "S"];
  function Il(u) {
    switch (u) {
      case "narrow":
        return [...J1];
      case "short":
        return [...xl];
      case "long":
        return [...Sl];
      case "numeric":
        return ["1", "2", "3", "4", "5", "6", "7"];
      default:
        return null;
    }
  }
  const Rl = ["AM", "PM"], K1 = ["Before Christ", "Anno Domini"], X1 = ["BC", "AD"], Q1 = ["B", "A"];
  function Ol(u) {
    switch (u) {
      case "narrow":
        return [...Q1];
      case "short":
        return [...X1];
      case "long":
        return [...K1];
      default:
        return null;
    }
  }
  function eg(u) {
    return Rl[u.hour < 12 ? 0 : 1];
  }
  function rg(u, e) {
    return Il(e)[u.weekday - 1];
  }
  function tg(u, e) {
    return Tl(e)[u.month - 1];
  }
  function ng(u, e) {
    return Ol(e)[u.year < 0 ? 0 : 1];
  }
  function ig(u, e, n = "always", c = !1) {
    const d = {
      years: ["year", "yr."],
      quarters: ["quarter", "qtr."],
      months: ["month", "mo."],
      weeks: ["week", "wk."],
      days: ["day", "day", "days"],
      hours: ["hour", "hr."],
      minutes: ["minute", "min."],
      seconds: ["second", "sec."]
    }, g = ["hours", "minutes", "seconds"].indexOf(u) === -1;
    if (n === "auto" && g) {
      const H = u === "days";
      switch (e) {
        case 1:
          return H ? "tomorrow" : `next ${d[u][0]}`;
        case -1:
          return H ? "yesterday" : `last ${d[u][0]}`;
        case 0:
          return H ? "today" : `this ${d[u][0]}`;
      }
    }
    const w = Object.is(e, -0) || e < 0, q = Math.abs(e), E = q === 1, C = d[u], F = c ? E ? C[1] : C[2] || C[1] : E ? d[u][0] : u;
    return w ? `${q} ${F} ago` : `in ${q} ${F}`;
  }
  function Al(u, e) {
    let n = "";
    for (const c of u)
      c.literal ? n += c.val : n += e(c.val);
    return n;
  }
  const ag = {
    D: _,
    DD: $,
    DDD: T,
    DDDD: A,
    t: k,
    tt: M,
    ttt: L,
    tttt: U,
    T: N,
    TT: P,
    TTT: ae,
    TTTT: ee,
    f: B,
    ff: he,
    fff: re,
    ffff: se,
    F: z,
    FF: D,
    FFF: we,
    FFFF: Ie
  };
  class be {
    static create(e, n = {}) {
      return new be(e, n);
    }
    static parseFormat(e) {
      let n = null, c = "", d = !1;
      const g = [];
      for (let w = 0; w < e.length; w++) {
        const q = e.charAt(w);
        q === "'" ? ((c.length > 0 || d) && g.push({
          literal: d || /^\s+$/.test(c),
          val: c === "" ? "'" : c
        }), n = null, c = "", d = !d) : d || q === n ? c += q : (c.length > 0 && g.push({
          literal: /^\s+$/.test(c),
          val: c
        }), c = q, n = q);
      }
      return c.length > 0 && g.push({
        literal: d || /^\s+$/.test(c),
        val: c
      }), g;
    }
    static macroTokenToFormatOpts(e) {
      return ag[e];
    }
    constructor(e, n) {
      this.opts = n, this.loc = e, this.systemLoc = null;
    }
    formatWithSystemDefault(e, n) {
      return this.systemLoc === null && (this.systemLoc = this.loc.redefaultToSystem()), this.systemLoc.dtFormatter(e, {
        ...this.opts,
        ...n
      }).format();
    }
    dtFormatter(e, n = {}) {
      return this.loc.dtFormatter(e, {
        ...this.opts,
        ...n
      });
    }
    formatDateTime(e, n) {
      return this.dtFormatter(e, n).format();
    }
    formatDateTimeParts(e, n) {
      return this.dtFormatter(e, n).formatToParts();
    }
    formatInterval(e, n) {
      return this.dtFormatter(e.start, n).dtf.formatRange(e.start.toJSDate(), e.end.toJSDate());
    }
    resolvedOptions(e, n) {
      return this.dtFormatter(e, n).resolvedOptions();
    }
    num(e, n = 0, c = void 0) {
      if (this.opts.forceSimple)
        return de(e, n);
      const d = {
        ...this.opts
      };
      return n > 0 && (d.padTo = n), c && (d.signDisplay = c), this.loc.numberFormatter(d).format(e);
    }
    formatDateTimeFromString(e, n) {
      const c = this.loc.listingMode() === "en", d = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", g = (j, me) => this.loc.extract(e, j, me), w = (j) => e.isOffsetFixed && e.offset === 0 && j.allowZ ? "Z" : e.isValid ? e.zone.formatOffset(e.ts, j.format) : "", q = () => c ? eg(e) : g({
        hour: "numeric",
        hourCycle: "h12"
      }, "dayperiod"), E = (j, me) => c ? tg(e, j) : g(me ? {
        month: j
      } : {
        month: j,
        day: "numeric"
      }, "month"), C = (j, me) => c ? rg(e, j) : g(me ? {
        weekday: j
      } : {
        weekday: j,
        month: "long",
        day: "numeric"
      }, "weekday"), F = (j) => {
        const me = be.macroTokenToFormatOpts(j);
        return me ? this.formatWithSystemDefault(e, me) : j;
      }, H = (j) => c ? ng(e, j) : g({
        era: j
      }, "era"), ne = (j) => {
        switch (j) {
          // ms
          case "S":
            return this.num(e.millisecond);
          case "u":
          // falls through
          case "SSS":
            return this.num(e.millisecond, 3);
          // seconds
          case "s":
            return this.num(e.second);
          case "ss":
            return this.num(e.second, 2);
          // fractional seconds
          case "uu":
            return this.num(Math.floor(e.millisecond / 10), 2);
          case "uuu":
            return this.num(Math.floor(e.millisecond / 100));
          // minutes
          case "m":
            return this.num(e.minute);
          case "mm":
            return this.num(e.minute, 2);
          // hours
          case "h":
            return this.num(e.hour % 12 === 0 ? 12 : e.hour % 12);
          case "hh":
            return this.num(e.hour % 12 === 0 ? 12 : e.hour % 12, 2);
          case "H":
            return this.num(e.hour);
          case "HH":
            return this.num(e.hour, 2);
          // offset
          case "Z":
            return w({
              format: "narrow",
              allowZ: this.opts.allowZ
            });
          case "ZZ":
            return w({
              format: "short",
              allowZ: this.opts.allowZ
            });
          case "ZZZ":
            return w({
              format: "techie",
              allowZ: this.opts.allowZ
            });
          case "ZZZZ":
            return e.zone.offsetName(e.ts, {
              format: "short",
              locale: this.loc.locale
            });
          case "ZZZZZ":
            return e.zone.offsetName(e.ts, {
              format: "long",
              locale: this.loc.locale
            });
          // zone
          case "z":
            return e.zoneName;
          // meridiems
          case "a":
            return q();
          // dates
          case "d":
            return d ? g({
              day: "numeric"
            }, "day") : this.num(e.day);
          case "dd":
            return d ? g({
              day: "2-digit"
            }, "day") : this.num(e.day, 2);
          // weekdays - standalone
          case "c":
            return this.num(e.weekday);
          case "ccc":
            return C("short", !0);
          case "cccc":
            return C("long", !0);
          case "ccccc":
            return C("narrow", !0);
          // weekdays - format
          case "E":
            return this.num(e.weekday);
          case "EEE":
            return C("short", !1);
          case "EEEE":
            return C("long", !1);
          case "EEEEE":
            return C("narrow", !1);
          // months - standalone
          case "L":
            return d ? g({
              month: "numeric",
              day: "numeric"
            }, "month") : this.num(e.month);
          case "LL":
            return d ? g({
              month: "2-digit",
              day: "numeric"
            }, "month") : this.num(e.month, 2);
          case "LLL":
            return E("short", !0);
          case "LLLL":
            return E("long", !0);
          case "LLLLL":
            return E("narrow", !0);
          // months - format
          case "M":
            return d ? g({
              month: "numeric"
            }, "month") : this.num(e.month);
          case "MM":
            return d ? g({
              month: "2-digit"
            }, "month") : this.num(e.month, 2);
          case "MMM":
            return E("short", !1);
          case "MMMM":
            return E("long", !1);
          case "MMMMM":
            return E("narrow", !1);
          // years
          case "y":
            return d ? g({
              year: "numeric"
            }, "year") : this.num(e.year);
          case "yy":
            return d ? g({
              year: "2-digit"
            }, "year") : this.num(e.year.toString().slice(-2), 2);
          case "yyyy":
            return d ? g({
              year: "numeric"
            }, "year") : this.num(e.year, 4);
          case "yyyyyy":
            return d ? g({
              year: "numeric"
            }, "year") : this.num(e.year, 6);
          // eras
          case "G":
            return H("short");
          case "GG":
            return H("long");
          case "GGGGG":
            return H("narrow");
          case "kk":
            return this.num(e.weekYear.toString().slice(-2), 2);
          case "kkkk":
            return this.num(e.weekYear, 4);
          case "W":
            return this.num(e.weekNumber);
          case "WW":
            return this.num(e.weekNumber, 2);
          case "n":
            return this.num(e.localWeekNumber);
          case "nn":
            return this.num(e.localWeekNumber, 2);
          case "ii":
            return this.num(e.localWeekYear.toString().slice(-2), 2);
          case "iiii":
            return this.num(e.localWeekYear, 4);
          case "o":
            return this.num(e.ordinal);
          case "ooo":
            return this.num(e.ordinal, 3);
          case "q":
            return this.num(e.quarter);
          case "qq":
            return this.num(e.quarter, 2);
          case "X":
            return this.num(Math.floor(e.ts / 1e3));
          case "x":
            return this.num(e.ts);
          default:
            return F(j);
        }
      };
      return Al(be.parseFormat(n), ne);
    }
    formatDurationFromString(e, n) {
      const c = this.opts.signMode === "negativeLargestOnly" ? -1 : 1, d = (F) => {
        switch (F[0]) {
          case "S":
            return "milliseconds";
          case "s":
            return "seconds";
          case "m":
            return "minutes";
          case "h":
            return "hours";
          case "d":
            return "days";
          case "w":
            return "weeks";
          case "M":
            return "months";
          case "y":
            return "years";
          default:
            return null;
        }
      }, g = (F, H) => (ne) => {
        const j = d(ne);
        if (j) {
          const me = H.isNegativeDuration && j !== H.largestUnit ? c : 1;
          let Ne;
          return this.opts.signMode === "negativeLargestOnly" && j !== H.largestUnit ? Ne = "never" : this.opts.signMode === "all" ? Ne = "always" : Ne = "auto", this.num(F.get(j) * me, ne.length, Ne);
        } else
          return ne;
      }, w = be.parseFormat(n), q = w.reduce((F, {
        literal: H,
        val: ne
      }) => H ? F : F.concat(ne), []), E = e.shiftTo(...q.map(d).filter((F) => F)), C = {
        isNegativeDuration: E < 0,
        // this relies on "collapsed" being based on "shiftTo", which builds up the object
        // in order
        largestUnit: Object.keys(E.values)[0]
      };
      return Al(w, g(E, C));
    }
  }
  const Ml = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
  function ur(...u) {
    const e = u.reduce((n, c) => n + c.source, "");
    return RegExp(`^${e}$`);
  }
  function or(...u) {
    return (e) => u.reduce(([n, c, d], g) => {
      const [w, q, E] = g(e, d);
      return [{
        ...n,
        ...w
      }, q || c, E];
    }, [{}, null, 1]).slice(0, 2);
  }
  function cr(u, ...e) {
    if (u == null)
      return [null, null];
    for (const [n, c] of e) {
      const d = n.exec(u);
      if (d)
        return c(d);
    }
    return [null, null];
  }
  function Cl(...u) {
    return (e, n) => {
      const c = {};
      let d;
      for (d = 0; d < u.length; d++)
        c[u[d]] = Ge(e[n + d]);
      return [c, null, n + d];
    };
  }
  const Ll = /(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/, sg = `(?:${Ll.source}?(?:\\[(${Ml.source})\\])?)?`, St = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, kl = RegExp(`${St.source}${sg}`), xt = RegExp(`(?:[Tt]${kl.source})?`), ug = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, og = /(\d{4})-?W(\d\d)(?:-?(\d))?/, cg = /(\d{4})-?(\d{3})/, lg = Cl("weekYear", "weekNumber", "weekDay"), fg = Cl("year", "ordinal"), hg = /(\d{4})-(\d\d)-(\d\d)/, Nl = RegExp(`${St.source} ?(?:${Ll.source}|(${Ml.source}))?`), dg = RegExp(`(?: ${Nl.source})?`);
  function lr(u, e, n) {
    const c = u[e];
    return V(c) ? n : Ge(c);
  }
  function mg(u, e) {
    return [{
      year: lr(u, e),
      month: lr(u, e + 1, 1),
      day: lr(u, e + 2, 1)
    }, null, e + 3];
  }
  function fr(u, e) {
    return [{
      hours: lr(u, e, 0),
      minutes: lr(u, e + 1, 0),
      seconds: lr(u, e + 2, 0),
      milliseconds: $t(u[e + 3])
    }, null, e + 4];
  }
  function Sr(u, e) {
    const n = !u[e] && !u[e + 1], c = Gr(u[e + 1], u[e + 2]), d = n ? null : I.instance(c);
    return [{}, d, e + 3];
  }
  function xr(u, e) {
    const n = u[e] ? ve.create(u[e]) : null;
    return [{}, n, e + 1];
  }
  const vg = RegExp(`^T?${St.source}$`), yg = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
  function pg(u) {
    const [e, n, c, d, g, w, q, E, C] = u, F = e[0] === "-", H = E && E[0] === "-", ne = (j, me = !1) => j !== void 0 && (me || j && F) ? -j : j;
    return [{
      years: ne(Qe(n)),
      months: ne(Qe(c)),
      weeks: ne(Qe(d)),
      days: ne(Qe(g)),
      hours: ne(Qe(w)),
      minutes: ne(Qe(q)),
      seconds: ne(Qe(E), E === "-0"),
      milliseconds: ne($t(C), H)
    }];
  }
  const gg = {
    GMT: 0,
    EDT: -240,
    EST: -300,
    CDT: -300,
    CST: -360,
    MDT: -360,
    MST: -420,
    PDT: -420,
    PST: -480
  };
  function It(u, e, n, c, d, g, w) {
    const q = {
      year: e.length === 2 ? Tt(Ge(e)) : Ge(e),
      month: El.indexOf(n) + 1,
      day: Ge(c),
      hour: Ge(d),
      minute: Ge(g)
    };
    return w && (q.second = Ge(w)), u && (q.weekday = u.length > 3 ? Sl.indexOf(u) + 1 : xl.indexOf(u) + 1), q;
  }
  const bg = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
  function wg(u) {
    const [, e, n, c, d, g, w, q, E, C, F, H] = u, ne = It(e, d, c, n, g, w, q);
    let j;
    return E ? j = gg[E] : C ? j = 0 : j = Gr(F, H), [ne, new I(j)];
  }
  function qg(u) {
    return u.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
  }
  const _g = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, $g = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, Eg = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
  function Fl(u) {
    const [, e, n, c, d, g, w, q] = u;
    return [It(e, d, c, n, g, w, q), I.utcInstance];
  }
  function Tg(u) {
    const [, e, n, c, d, g, w, q] = u;
    return [It(e, q, n, c, d, g, w), I.utcInstance];
  }
  const Sg = ur(ug, xt), xg = ur(og, xt), Ig = ur(cg, xt), Rg = ur(kl), Dl = or(mg, fr, Sr, xr), Og = or(lg, fr, Sr, xr), Ag = or(fg, fr, Sr, xr), Mg = or(fr, Sr, xr);
  function Cg(u) {
    return cr(u, [Sg, Dl], [xg, Og], [Ig, Ag], [Rg, Mg]);
  }
  function Lg(u) {
    return cr(qg(u), [bg, wg]);
  }
  function kg(u) {
    return cr(u, [_g, Fl], [$g, Fl], [Eg, Tg]);
  }
  function Ng(u) {
    return cr(u, [yg, pg]);
  }
  const Fg = or(fr);
  function Dg(u) {
    return cr(u, [vg, Fg]);
  }
  const Pg = ur(hg, dg), Ug = ur(Nl), Bg = or(fr, Sr, xr);
  function jg(u) {
    return cr(u, [Pg, Dl], [Ug, Bg]);
  }
  const Pl = "Invalid Duration", Ul = {
    weeks: {
      days: 7,
      hours: 168,
      minutes: 10080,
      seconds: 10080 * 60,
      milliseconds: 10080 * 60 * 1e3
    },
    days: {
      hours: 24,
      minutes: 1440,
      seconds: 1440 * 60,
      milliseconds: 1440 * 60 * 1e3
    },
    hours: {
      minutes: 60,
      seconds: 3600,
      milliseconds: 3600 * 1e3
    },
    minutes: {
      seconds: 60,
      milliseconds: 60 * 1e3
    },
    seconds: {
      milliseconds: 1e3
    }
  }, Vg = {
    years: {
      quarters: 4,
      months: 12,
      weeks: 52,
      days: 365,
      hours: 365 * 24,
      minutes: 365 * 24 * 60,
      seconds: 365 * 24 * 60 * 60,
      milliseconds: 365 * 24 * 60 * 60 * 1e3
    },
    quarters: {
      months: 3,
      weeks: 13,
      days: 91,
      hours: 2184,
      minutes: 2184 * 60,
      seconds: 2184 * 60 * 60,
      milliseconds: 2184 * 60 * 60 * 1e3
    },
    months: {
      weeks: 4,
      days: 30,
      hours: 720,
      minutes: 720 * 60,
      seconds: 720 * 60 * 60,
      milliseconds: 720 * 60 * 60 * 1e3
    },
    ...Ul
  }, xe = 146097 / 400, hr = 146097 / 4800, Wg = {
    years: {
      quarters: 4,
      months: 12,
      weeks: xe / 7,
      days: xe,
      hours: xe * 24,
      minutes: xe * 24 * 60,
      seconds: xe * 24 * 60 * 60,
      milliseconds: xe * 24 * 60 * 60 * 1e3
    },
    quarters: {
      months: 3,
      weeks: xe / 28,
      days: xe / 4,
      hours: xe * 24 / 4,
      minutes: xe * 24 * 60 / 4,
      seconds: xe * 24 * 60 * 60 / 4,
      milliseconds: xe * 24 * 60 * 60 * 1e3 / 4
    },
    months: {
      weeks: hr / 7,
      days: hr,
      hours: hr * 24,
      minutes: hr * 24 * 60,
      seconds: hr * 24 * 60 * 60,
      milliseconds: hr * 24 * 60 * 60 * 1e3
    },
    ...Ul
  }, er = ["years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"], zg = er.slice(0).reverse();
  function We(u, e, n = !1) {
    const c = {
      values: n ? e.values : {
        ...u.values,
        ...e.values || {}
      },
      loc: u.loc.clone(e.loc),
      conversionAccuracy: e.conversionAccuracy || u.conversionAccuracy,
      matrix: e.matrix || u.matrix
    };
    return new Z(c);
  }
  function Bl(u, e) {
    var n;
    let c = (n = e.milliseconds) != null ? n : 0;
    for (const d of zg.slice(1))
      e[d] && (c += e[d] * u[d].milliseconds);
    return c;
  }
  function jl(u, e) {
    const n = Bl(u, e) < 0 ? -1 : 1;
    er.reduceRight((c, d) => {
      if (V(e[d]))
        return c;
      if (c) {
        const g = e[c] * n, w = u[d][c], q = Math.floor(g / w);
        e[d] += q * n, e[c] -= q * w * n;
      }
      return d;
    }, null), er.reduce((c, d) => {
      if (V(e[d]))
        return c;
      if (c) {
        const g = e[c] % 1;
        e[c] -= g, e[d] += g * u[c][d];
      }
      return d;
    }, null);
  }
  function Vl(u) {
    const e = {};
    for (const [n, c] of Object.entries(u))
      c !== 0 && (e[n] = c);
    return e;
  }
  class Z {
    /**
     * @private
     */
    constructor(e) {
      const n = e.conversionAccuracy === "longterm" || !1;
      let c = n ? Wg : Vg;
      e.matrix && (c = e.matrix), this.values = e.values, this.loc = e.loc || b.create(), this.conversionAccuracy = n ? "longterm" : "casual", this.invalid = e.invalid || null, this.matrix = c, this.isLuxonDuration = !0;
    }
    /**
     * Create Duration from a number of milliseconds.
     * @param {number} count of milliseconds
     * @param {Object} opts - options for parsing
     * @param {string} [opts.locale='en-US'] - the locale to use
     * @param {string} opts.numberingSystem - the numbering system to use
     * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
     * @return {Duration}
     */
    static fromMillis(e, n) {
      return Z.fromObject({
        milliseconds: e
      }, n);
    }
    /**
     * Create a Duration from a JavaScript object with keys like 'years' and 'hours'.
     * If this object is empty then a zero milliseconds duration is returned.
     * @param {Object} obj - the object to create the DateTime from
     * @param {number} obj.years
     * @param {number} obj.quarters
     * @param {number} obj.months
     * @param {number} obj.weeks
     * @param {number} obj.days
     * @param {number} obj.hours
     * @param {number} obj.minutes
     * @param {number} obj.seconds
     * @param {number} obj.milliseconds
     * @param {Object} [opts=[]] - options for creating this Duration
     * @param {string} [opts.locale='en-US'] - the locale to use
     * @param {string} opts.numberingSystem - the numbering system to use
     * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
     * @param {string} [opts.matrix=Object] - the custom conversion system to use
     * @return {Duration}
     */
    static fromObject(e, n = {}) {
      if (e == null || typeof e != "object")
        throw new v(`Duration.fromObject: argument expected to be an object, got ${e === null ? "null" : typeof e}`);
      return new Z({
        values: Zr(e, Z.normalizeUnit),
        loc: b.fromObject(n),
        conversionAccuracy: n.conversionAccuracy,
        matrix: n.matrix
      });
    }
    /**
     * Create a Duration from DurationLike.
     *
     * @param {Object | number | Duration} durationLike
     * One of:
     * - object with keys like 'years' and 'hours'.
     * - number representing milliseconds
     * - Duration instance
     * @return {Duration}
     */
    static fromDurationLike(e) {
      if (He(e))
        return Z.fromMillis(e);
      if (Z.isDuration(e))
        return e;
      if (typeof e == "object")
        return Z.fromObject(e);
      throw new v(`Unknown duration argument ${e} of type ${typeof e}`);
    }
    /**
     * Create a Duration from an ISO 8601 duration string.
     * @param {string} text - text to parse
     * @param {Object} opts - options for parsing
     * @param {string} [opts.locale='en-US'] - the locale to use
     * @param {string} opts.numberingSystem - the numbering system to use
     * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
     * @param {string} [opts.matrix=Object] - the preset conversion system to use
     * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
     * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
     * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
     * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
     * @return {Duration}
     */
    static fromISO(e, n) {
      const [c] = Ng(e);
      return c ? Z.fromObject(c, n) : Z.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
    }
    /**
     * Create a Duration from an ISO 8601 time string.
     * @param {string} text - text to parse
     * @param {Object} opts - options for parsing
     * @param {string} [opts.locale='en-US'] - the locale to use
     * @param {string} opts.numberingSystem - the numbering system to use
     * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
     * @param {string} [opts.matrix=Object] - the conversion system to use
     * @see https://en.wikipedia.org/wiki/ISO_8601#Times
     * @example Duration.fromISOTime('11:22:33.444').toObject() //=> { hours: 11, minutes: 22, seconds: 33, milliseconds: 444 }
     * @example Duration.fromISOTime('11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
     * @example Duration.fromISOTime('T11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
     * @example Duration.fromISOTime('1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
     * @example Duration.fromISOTime('T1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
     * @return {Duration}
     */
    static fromISOTime(e, n) {
      const [c] = Dg(e);
      return c ? Z.fromObject(c, n) : Z.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
    }
    /**
     * Create an invalid Duration.
     * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
     * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
     * @return {Duration}
     */
    static invalid(e, n = null) {
      if (!e)
        throw new v("need to specify a reason the Duration is invalid");
      const c = e instanceof Le ? e : new Le(e, n);
      if (le.throwOnInvalid)
        throw new i(c);
      return new Z({
        invalid: c
      });
    }
    /**
     * @private
     */
    static normalizeUnit(e) {
      const n = {
        year: "years",
        years: "years",
        quarter: "quarters",
        quarters: "quarters",
        month: "months",
        months: "months",
        week: "weeks",
        weeks: "weeks",
        day: "days",
        days: "days",
        hour: "hours",
        hours: "hours",
        minute: "minutes",
        minutes: "minutes",
        second: "seconds",
        seconds: "seconds",
        millisecond: "milliseconds",
        milliseconds: "milliseconds"
      }[e && e.toLowerCase()];
      if (!n) throw new f(e);
      return n;
    }
    /**
     * Check if an object is a Duration. Works across context boundaries
     * @param {object} o
     * @return {boolean}
     */
    static isDuration(e) {
      return e && e.isLuxonDuration || !1;
    }
    /**
     * Get  the locale of a Duration, such 'en-GB'
     * @type {string}
     */
    get locale() {
      return this.isValid ? this.loc.locale : null;
    }
    /**
     * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
     *
     * @type {string}
     */
    get numberingSystem() {
      return this.isValid ? this.loc.numberingSystem : null;
    }
    /**
     * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
     * * `S` for milliseconds
     * * `s` for seconds
     * * `m` for minutes
     * * `h` for hours
     * * `d` for days
     * * `w` for weeks
     * * `M` for months
     * * `y` for years
     * Notes:
     * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
     * * Tokens can be escaped by wrapping with single quotes.
     * * The duration will be converted to the set of units in the format string using {@link Duration#shiftTo} and the Durations's conversion accuracy setting.
     * @param {string} fmt - the format string
     * @param {Object} opts - options
     * @param {boolean} [opts.floor=true] - floor numerical values
     * @param {'negative'|'all'|'negativeLargestOnly'} [opts.signMode=negative] - How to handle signs
     * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
     * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
     * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
     * @example Duration.fromObject({ days: 6, seconds: 2 }).toFormat("d s", { signMode: "all" }) //=> "+6 +2"
     * @example Duration.fromObject({ days: -6, seconds: -2 }).toFormat("d s", { signMode: "all" }) //=> "-6 -2"
     * @example Duration.fromObject({ days: -6, seconds: -2 }).toFormat("d s", { signMode: "negativeLargestOnly" }) //=> "-6 2"
     * @return {string}
     */
    toFormat(e, n = {}) {
      const c = {
        ...n,
        floor: n.round !== !1 && n.floor !== !1
      };
      return this.isValid ? be.create(this.loc, c).formatDurationFromString(this, e) : Pl;
    }
    /**
     * Returns a string representation of a Duration with all units included.
     * To modify its behavior, use `listStyle` and any Intl.NumberFormat option, though `unitDisplay` is especially relevant.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options
     * @param {Object} opts - Formatting options. Accepts the same keys as the options parameter of the native `Intl.NumberFormat` constructor, as well as `listStyle`.
     * @param {string} [opts.listStyle='narrow'] - How to format the merged list. Corresponds to the `style` property of the options parameter of the native `Intl.ListFormat` constructor.
     * @param {boolean} [opts.showZeros=true] - Show all units previously used by the duration even if they are zero
     * @example
     * ```js
     * var dur = Duration.fromObject({ months: 1, weeks: 0, hours: 5, minutes: 6 })
     * dur.toHuman() //=> '1 month, 0 weeks, 5 hours, 6 minutes'
     * dur.toHuman({ listStyle: "long" }) //=> '1 month, 0 weeks, 5 hours, and 6 minutes'
     * dur.toHuman({ unitDisplay: "short" }) //=> '1 mth, 0 wks, 5 hr, 6 min'
     * dur.toHuman({ showZeros: false }) //=> '1 month, 5 hours, 6 minutes'
     * ```
     */
    toHuman(e = {}) {
      if (!this.isValid) return Pl;
      const n = e.showZeros !== !1, c = er.map((d) => {
        const g = this.values[d];
        return V(g) || g === 0 && !n ? null : this.loc.numberFormatter({
          style: "unit",
          unitDisplay: "long",
          ...e,
          unit: d.slice(0, -1)
        }).format(g);
      }).filter((d) => d);
      return this.loc.listFormatter({
        type: "conjunction",
        style: e.listStyle || "narrow",
        ...e
      }).format(c);
    }
    /**
     * Returns a JavaScript object with this Duration's values.
     * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
     * @return {Object}
     */
    toObject() {
      return this.isValid ? {
        ...this.values
      } : {};
    }
    /**
     * Returns an ISO 8601-compliant string representation of this Duration.
     * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
     * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
     * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
     * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
     * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
     * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
     * @return {string}
     */
    toISO() {
      if (!this.isValid) return null;
      let e = "P";
      return this.years !== 0 && (e += this.years + "Y"), (this.months !== 0 || this.quarters !== 0) && (e += this.months + this.quarters * 3 + "M"), this.weeks !== 0 && (e += this.weeks + "W"), this.days !== 0 && (e += this.days + "D"), (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) && (e += "T"), this.hours !== 0 && (e += this.hours + "H"), this.minutes !== 0 && (e += this.minutes + "M"), (this.seconds !== 0 || this.milliseconds !== 0) && (e += Et(this.seconds + this.milliseconds / 1e3, 3) + "S"), e === "P" && (e += "T0S"), e;
    }
    /**
     * Returns an ISO 8601-compliant string representation of this Duration, formatted as a time of day.
     * Note that this will return null if the duration is invalid, negative, or equal to or greater than 24 hours.
     * @see https://en.wikipedia.org/wiki/ISO_8601#Times
     * @param {Object} opts - options
     * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
     * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
     * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
     * @param {string} [opts.format='extended'] - choose between the basic and extended format
     * @example Duration.fromObject({ hours: 11 }).toISOTime() //=> '11:00:00.000'
     * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressMilliseconds: true }) //=> '11:00:00'
     * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressSeconds: true }) //=> '11:00'
     * @example Duration.fromObject({ hours: 11 }).toISOTime({ includePrefix: true }) //=> 'T11:00:00.000'
     * @example Duration.fromObject({ hours: 11 }).toISOTime({ format: 'basic' }) //=> '110000.000'
     * @return {string}
     */
    toISOTime(e = {}) {
      if (!this.isValid) return null;
      const n = this.toMillis();
      return n < 0 || n >= 864e5 ? null : (e = {
        suppressMilliseconds: !1,
        suppressSeconds: !1,
        includePrefix: !1,
        format: "extended",
        ...e,
        includeOffset: !1
      }, W.fromMillis(n, {
        zone: "UTC"
      }).toISOTime(e));
    }
    /**
     * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
     * @return {string}
     */
    toJSON() {
      return this.toISO();
    }
    /**
     * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
     * @return {string}
     */
    toString() {
      return this.toISO();
    }
    /**
     * Returns a string representation of this Duration appropriate for the REPL.
     * @return {string}
     */
    [/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")]() {
      return this.isValid ? `Duration { values: ${JSON.stringify(this.values)} }` : `Duration { Invalid, reason: ${this.invalidReason} }`;
    }
    /**
     * Returns an milliseconds value of this Duration.
     * @return {number}
     */
    toMillis() {
      return this.isValid ? Bl(this.matrix, this.values) : NaN;
    }
    /**
     * Returns an milliseconds value of this Duration. Alias of {@link toMillis}
     * @return {number}
     */
    valueOf() {
      return this.toMillis();
    }
    /**
     * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
     * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
     * @return {Duration}
     */
    plus(e) {
      if (!this.isValid) return this;
      const n = Z.fromDurationLike(e), c = {};
      for (const d of er)
        (ar(n.values, d) || ar(this.values, d)) && (c[d] = n.get(d) + this.get(d));
      return We(this, {
        values: c
      }, !0);
    }
    /**
     * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
     * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
     * @return {Duration}
     */
    minus(e) {
      if (!this.isValid) return this;
      const n = Z.fromDurationLike(e);
      return this.plus(n.negate());
    }
    /**
     * Scale this Duration by the specified amount. Return a newly-constructed Duration.
     * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
     * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits(x => x * 2) //=> { hours: 2, minutes: 60 }
     * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits((x, u) => u === "hours" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
     * @return {Duration}
     */
    mapUnits(e) {
      if (!this.isValid) return this;
      const n = {};
      for (const c of Object.keys(this.values))
        n[c] = $l(e(this.values[c], c));
      return We(this, {
        values: n
      }, !0);
    }
    /**
     * Get the value of unit.
     * @param {string} unit - a unit such as 'minute' or 'day'
     * @example Duration.fromObject({years: 2, days: 3}).get('years') //=> 2
     * @example Duration.fromObject({years: 2, days: 3}).get('months') //=> 0
     * @example Duration.fromObject({years: 2, days: 3}).get('days') //=> 3
     * @return {number}
     */
    get(e) {
      return this[Z.normalizeUnit(e)];
    }
    /**
     * "Set" the values of specified units. Return a newly-constructed Duration.
     * @param {Object} values - a mapping of units to numbers
     * @example dur.set({ years: 2017 })
     * @example dur.set({ hours: 8, minutes: 30 })
     * @return {Duration}
     */
    set(e) {
      if (!this.isValid) return this;
      const n = {
        ...this.values,
        ...Zr(e, Z.normalizeUnit)
      };
      return We(this, {
        values: n
      });
    }
    /**
     * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
     * @example dur.reconfigure({ locale: 'en-GB' })
     * @return {Duration}
     */
    reconfigure({
      locale: e,
      numberingSystem: n,
      conversionAccuracy: c,
      matrix: d
    } = {}) {
      const w = {
        loc: this.loc.clone({
          locale: e,
          numberingSystem: n
        }),
        matrix: d,
        conversionAccuracy: c
      };
      return We(this, w);
    }
    /**
     * Return the length of the duration in the specified unit.
     * @param {string} unit - a unit such as 'minutes' or 'days'
     * @example Duration.fromObject({years: 1}).as('days') //=> 365
     * @example Duration.fromObject({years: 1}).as('months') //=> 12
     * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
     * @return {number}
     */
    as(e) {
      return this.isValid ? this.shiftTo(e).get(e) : NaN;
    }
    /**
     * Reduce this Duration to its canonical representation in its current units.
     * Assuming the overall value of the Duration is positive, this means:
     * - excessive values for lower-order units are converted to higher-order units (if possible, see first and second example)
     * - negative lower-order units are converted to higher order units (there must be such a higher order unit, otherwise
     *   the overall value would be negative, see third example)
     * - fractional values for higher-order units are converted to lower-order units (if possible, see fourth example)
     *
     * If the overall value is negative, the result of this method is equivalent to `this.negate().normalize().negate()`.
     * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
     * @example Duration.fromObject({ days: 5000 }).normalize().toObject() //=> { days: 5000 }
     * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
     * @example Duration.fromObject({ years: 2.5, days: 0, hours: 0 }).normalize().toObject() //=> { years: 2, days: 182, hours: 12 }
     * @return {Duration}
     */
    normalize() {
      if (!this.isValid) return this;
      const e = this.toObject();
      return jl(this.matrix, e), We(this, {
        values: e
      }, !0);
    }
    /**
     * Rescale units to its largest representation
     * @example Duration.fromObject({ milliseconds: 90000 }).rescale().toObject() //=> { minutes: 1, seconds: 30 }
     * @return {Duration}
     */
    rescale() {
      if (!this.isValid) return this;
      const e = Vl(this.normalize().shiftToAll().toObject());
      return We(this, {
        values: e
      }, !0);
    }
    /**
     * Convert this Duration into its representation in a different set of units.
     * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
     * @return {Duration}
     */
    shiftTo(...e) {
      if (!this.isValid) return this;
      if (e.length === 0)
        return this;
      e = e.map((w) => Z.normalizeUnit(w));
      const n = {}, c = {}, d = this.toObject();
      let g;
      for (const w of er)
        if (e.indexOf(w) >= 0) {
          g = w;
          let q = 0;
          for (const C in c)
            q += this.matrix[C][w] * c[C], c[C] = 0;
          He(d[w]) && (q += d[w]);
          const E = Math.trunc(q);
          n[w] = E, c[w] = (q * 1e3 - E * 1e3) / 1e3;
        } else He(d[w]) && (c[w] = d[w]);
      for (const w in c)
        c[w] !== 0 && (n[g] += w === g ? c[w] : c[w] / this.matrix[g][w]);
      return jl(this.matrix, n), We(this, {
        values: n
      }, !0);
    }
    /**
     * Shift this Duration to all available units.
     * Same as shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds")
     * @return {Duration}
     */
    shiftToAll() {
      return this.isValid ? this.shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds") : this;
    }
    /**
     * Return the negative of this Duration.
     * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
     * @return {Duration}
     */
    negate() {
      if (!this.isValid) return this;
      const e = {};
      for (const n of Object.keys(this.values))
        e[n] = this.values[n] === 0 ? 0 : -this.values[n];
      return We(this, {
        values: e
      }, !0);
    }
    /**
     * Removes all units with values equal to 0 from this Duration.
     * @example Duration.fromObject({ years: 2, days: 0, hours: 0, minutes: 0 }).removeZeros().toObject() //=> { years: 2 }
     * @return {Duration}
     */
    removeZeros() {
      if (!this.isValid) return this;
      const e = Vl(this.values);
      return We(this, {
        values: e
      }, !0);
    }
    /**
     * Get the years.
     * @type {number}
     */
    get years() {
      return this.isValid ? this.values.years || 0 : NaN;
    }
    /**
     * Get the quarters.
     * @type {number}
     */
    get quarters() {
      return this.isValid ? this.values.quarters || 0 : NaN;
    }
    /**
     * Get the months.
     * @type {number}
     */
    get months() {
      return this.isValid ? this.values.months || 0 : NaN;
    }
    /**
     * Get the weeks
     * @type {number}
     */
    get weeks() {
      return this.isValid ? this.values.weeks || 0 : NaN;
    }
    /**
     * Get the days.
     * @type {number}
     */
    get days() {
      return this.isValid ? this.values.days || 0 : NaN;
    }
    /**
     * Get the hours.
     * @type {number}
     */
    get hours() {
      return this.isValid ? this.values.hours || 0 : NaN;
    }
    /**
     * Get the minutes.
     * @type {number}
     */
    get minutes() {
      return this.isValid ? this.values.minutes || 0 : NaN;
    }
    /**
     * Get the seconds.
     * @return {number}
     */
    get seconds() {
      return this.isValid ? this.values.seconds || 0 : NaN;
    }
    /**
     * Get the milliseconds.
     * @return {number}
     */
    get milliseconds() {
      return this.isValid ? this.values.milliseconds || 0 : NaN;
    }
    /**
     * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
     * on invalid DateTimes or Intervals.
     * @return {boolean}
     */
    get isValid() {
      return this.invalid === null;
    }
    /**
     * Returns an error code if this Duration became invalid, or null if the Duration is valid
     * @return {string}
     */
    get invalidReason() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
     * @type {string}
     */
    get invalidExplanation() {
      return this.invalid ? this.invalid.explanation : null;
    }
    /**
     * Equality check
     * Two Durations are equal iff they have the same units and the same values for each unit.
     * @param {Duration} other
     * @return {boolean}
     */
    equals(e) {
      if (!this.isValid || !e.isValid || !this.loc.equals(e.loc))
        return !1;
      function n(c, d) {
        return c === void 0 || c === 0 ? d === void 0 || d === 0 : c === d;
      }
      for (const c of er)
        if (!n(this.values[c], e.values[c]))
          return !1;
      return !0;
    }
  }
  const dr = "Invalid Interval";
  function Hg(u, e) {
    return !u || !u.isValid ? fe.invalid("missing or invalid start") : !e || !e.isValid ? fe.invalid("missing or invalid end") : e < u ? fe.invalid("end before start", `The end of an interval must be after its start, but you had start=${u.toISO()} and end=${e.toISO()}`) : null;
  }
  class fe {
    /**
     * @private
     */
    constructor(e) {
      this.s = e.start, this.e = e.end, this.invalid = e.invalid || null, this.isLuxonInterval = !0;
    }
    /**
     * Create an invalid Interval.
     * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
     * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
     * @return {Interval}
     */
    static invalid(e, n = null) {
      if (!e)
        throw new v("need to specify a reason the Interval is invalid");
      const c = e instanceof Le ? e : new Le(e, n);
      if (le.throwOnInvalid)
        throw new a(c);
      return new fe({
        invalid: c
      });
    }
    /**
     * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
     * @param {DateTime|Date|Object} start
     * @param {DateTime|Date|Object} end
     * @return {Interval}
     */
    static fromDateTimes(e, n) {
      const c = Ar(e), d = Ar(n), g = Hg(c, d);
      return g ?? new fe({
        start: c,
        end: d
      });
    }
    /**
     * Create an Interval from a start DateTime and a Duration to extend to.
     * @param {DateTime|Date|Object} start
     * @param {Duration|Object|number} duration - the length of the Interval.
     * @return {Interval}
     */
    static after(e, n) {
      const c = Z.fromDurationLike(n), d = Ar(e);
      return fe.fromDateTimes(d, d.plus(c));
    }
    /**
     * Create an Interval from an end DateTime and a Duration to extend backwards to.
     * @param {DateTime|Date|Object} end
     * @param {Duration|Object|number} duration - the length of the Interval.
     * @return {Interval}
     */
    static before(e, n) {
      const c = Z.fromDurationLike(n), d = Ar(e);
      return fe.fromDateTimes(d.minus(c), d);
    }
    /**
     * Create an Interval from an ISO 8601 string.
     * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
     * @param {string} text - the ISO string to parse
     * @param {Object} [opts] - options to pass {@link DateTime#fromISO} and optionally {@link Duration#fromISO}
     * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
     * @return {Interval}
     */
    static fromISO(e, n) {
      const [c, d] = (e || "").split("/", 2);
      if (c && d) {
        let g, w;
        try {
          g = W.fromISO(c, n), w = g.isValid;
        } catch {
          w = !1;
        }
        let q, E;
        try {
          q = W.fromISO(d, n), E = q.isValid;
        } catch {
          E = !1;
        }
        if (w && E)
          return fe.fromDateTimes(g, q);
        if (w) {
          const C = Z.fromISO(d, n);
          if (C.isValid)
            return fe.after(g, C);
        } else if (E) {
          const C = Z.fromISO(c, n);
          if (C.isValid)
            return fe.before(q, C);
        }
      }
      return fe.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
    }
    /**
     * Check if an object is an Interval. Works across context boundaries
     * @param {object} o
     * @return {boolean}
     */
    static isInterval(e) {
      return e && e.isLuxonInterval || !1;
    }
    /**
     * Returns the start of the Interval
     * @type {DateTime}
     */
    get start() {
      return this.isValid ? this.s : null;
    }
    /**
     * Returns the end of the Interval. This is the first instant which is not part of the interval
     * (Interval is half-open).
     * @type {DateTime}
     */
    get end() {
      return this.isValid ? this.e : null;
    }
    /**
     * Returns the last DateTime included in the interval (since end is not part of the interval)
     * @type {DateTime}
     */
    get lastDateTime() {
      return this.isValid && this.e ? this.e.minus(1) : null;
    }
    /**
     * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
     * @type {boolean}
     */
    get isValid() {
      return this.invalidReason === null;
    }
    /**
     * Returns an error code if this Interval is invalid, or null if the Interval is valid
     * @type {string}
     */
    get invalidReason() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
     * @type {string}
     */
    get invalidExplanation() {
      return this.invalid ? this.invalid.explanation : null;
    }
    /**
     * Returns the length of the Interval in the specified unit.
     * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
     * @return {number}
     */
    length(e = "milliseconds") {
      return this.isValid ? this.toDuration(e).get(e) : NaN;
    }
    /**
     * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
     * Unlike {@link Interval#length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
     * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
     * @param {string} [unit='milliseconds'] - the unit of time to count.
     * @param {Object} opts - options
     * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week; this operation will always use the locale of the start DateTime
     * @return {number}
     */
    count(e = "milliseconds", n) {
      if (!this.isValid) return NaN;
      const c = this.start.startOf(e, n);
      let d;
      return n != null && n.useLocaleWeeks ? d = this.end.reconfigure({
        locale: c.locale
      }) : d = this.end, d = d.startOf(e, n), Math.floor(d.diff(c, e).get(e)) + (d.valueOf() !== this.end.valueOf());
    }
    /**
     * Returns whether this Interval's start and end are both in the same unit of time
     * @param {string} unit - the unit of time to check sameness on
     * @return {boolean}
     */
    hasSame(e) {
      return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, e) : !1;
    }
    /**
     * Return whether this Interval has the same start and end DateTimes.
     * @return {boolean}
     */
    isEmpty() {
      return this.s.valueOf() === this.e.valueOf();
    }
    /**
     * Return whether this Interval's start is after the specified DateTime.
     * @param {DateTime} dateTime
     * @return {boolean}
     */
    isAfter(e) {
      return this.isValid ? this.s > e : !1;
    }
    /**
     * Return whether this Interval's end is before the specified DateTime.
     * @param {DateTime} dateTime
     * @return {boolean}
     */
    isBefore(e) {
      return this.isValid ? this.e <= e : !1;
    }
    /**
     * Return whether this Interval contains the specified DateTime.
     * @param {DateTime} dateTime
     * @return {boolean}
     */
    contains(e) {
      return this.isValid ? this.s <= e && this.e > e : !1;
    }
    /**
     * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
     * @param {Object} values - the values to set
     * @param {DateTime} values.start - the starting DateTime
     * @param {DateTime} values.end - the ending DateTime
     * @return {Interval}
     */
    set({
      start: e,
      end: n
    } = {}) {
      return this.isValid ? fe.fromDateTimes(e || this.s, n || this.e) : this;
    }
    /**
     * Split this Interval at each of the specified DateTimes
     * @param {...DateTime} dateTimes - the unit of time to count.
     * @return {Array}
     */
    splitAt(...e) {
      if (!this.isValid) return [];
      const n = e.map(Ar).filter((w) => this.contains(w)).sort((w, q) => w.toMillis() - q.toMillis()), c = [];
      let {
        s: d
      } = this, g = 0;
      for (; d < this.e; ) {
        const w = n[g] || this.e, q = +w > +this.e ? this.e : w;
        c.push(fe.fromDateTimes(d, q)), d = q, g += 1;
      }
      return c;
    }
    /**
     * Split this Interval into smaller Intervals, each of the specified length.
     * Left over time is grouped into a smaller interval
     * @param {Duration|Object|number} duration - The length of each resulting interval.
     * @return {Array}
     */
    splitBy(e) {
      const n = Z.fromDurationLike(e);
      if (!this.isValid || !n.isValid || n.as("milliseconds") === 0)
        return [];
      let {
        s: c
      } = this, d = 1, g;
      const w = [];
      for (; c < this.e; ) {
        const q = this.start.plus(n.mapUnits((E) => E * d));
        g = +q > +this.e ? this.e : q, w.push(fe.fromDateTimes(c, g)), c = g, d += 1;
      }
      return w;
    }
    /**
     * Split this Interval into the specified number of smaller intervals.
     * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
     * @return {Array}
     */
    divideEqually(e) {
      return this.isValid ? this.splitBy(this.length() / e).slice(0, e) : [];
    }
    /**
     * Return whether this Interval overlaps with the specified Interval
     * @param {Interval} other
     * @return {boolean}
     */
    overlaps(e) {
      return this.e > e.s && this.s < e.e;
    }
    /**
     * Return whether this Interval's end is adjacent to the specified Interval's start.
     * @param {Interval} other
     * @return {boolean}
     */
    abutsStart(e) {
      return this.isValid ? +this.e == +e.s : !1;
    }
    /**
     * Return whether this Interval's start is adjacent to the specified Interval's end.
     * @param {Interval} other
     * @return {boolean}
     */
    abutsEnd(e) {
      return this.isValid ? +e.e == +this.s : !1;
    }
    /**
     * Returns true if this Interval fully contains the specified Interval, specifically if the intersect (of this Interval and the other Interval) is equal to the other Interval; false otherwise.
     * @param {Interval} other
     * @return {boolean}
     */
    engulfs(e) {
      return this.isValid ? this.s <= e.s && this.e >= e.e : !1;
    }
    /**
     * Return whether this Interval has the same start and end as the specified Interval.
     * @param {Interval} other
     * @return {boolean}
     */
    equals(e) {
      return !this.isValid || !e.isValid ? !1 : this.s.equals(e.s) && this.e.equals(e.e);
    }
    /**
     * Return an Interval representing the intersection of this Interval and the specified Interval.
     * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
     * Returns null if the intersection is empty, meaning, the intervals don't intersect.
     * @param {Interval} other
     * @return {Interval}
     */
    intersection(e) {
      if (!this.isValid) return this;
      const n = this.s > e.s ? this.s : e.s, c = this.e < e.e ? this.e : e.e;
      return n >= c ? null : fe.fromDateTimes(n, c);
    }
    /**
     * Return an Interval representing the union of this Interval and the specified Interval.
     * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
     * @param {Interval} other
     * @return {Interval}
     */
    union(e) {
      if (!this.isValid) return this;
      const n = this.s < e.s ? this.s : e.s, c = this.e > e.e ? this.e : e.e;
      return fe.fromDateTimes(n, c);
    }
    /**
     * Merge an array of Intervals into an equivalent minimal set of Intervals.
     * Combines overlapping and adjacent Intervals.
     * The resulting array will contain the Intervals in ascending order, that is, starting with the earliest Interval
     * and ending with the latest.
     *
     * @param {Array} intervals
     * @return {Array}
     */
    static merge(e) {
      const [n, c] = e.sort((d, g) => d.s - g.s).reduce(([d, g], w) => g ? g.overlaps(w) || g.abutsStart(w) ? [d, g.union(w)] : [d.concat([g]), w] : [d, w], [[], null]);
      return c && n.push(c), n;
    }
    /**
     * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
     * @param {Array} intervals
     * @return {Array}
     */
    static xor(e) {
      let n = null, c = 0;
      const d = [], g = e.map((E) => [{
        time: E.s,
        type: "s"
      }, {
        time: E.e,
        type: "e"
      }]), w = Array.prototype.concat(...g), q = w.sort((E, C) => E.time - C.time);
      for (const E of q)
        c += E.type === "s" ? 1 : -1, c === 1 ? n = E.time : (n && +n != +E.time && d.push(fe.fromDateTimes(n, E.time)), n = null);
      return fe.merge(d);
    }
    /**
     * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
     * @param {...Interval} intervals
     * @return {Array}
     */
    difference(...e) {
      return fe.xor([this].concat(e)).map((n) => this.intersection(n)).filter((n) => n && !n.isEmpty());
    }
    /**
     * Returns a string representation of this Interval appropriate for debugging.
     * @return {string}
     */
    toString() {
      return this.isValid ? `[${this.s.toISO()} – ${this.e.toISO()})` : dr;
    }
    /**
     * Returns a string representation of this Interval appropriate for the REPL.
     * @return {string}
     */
    [/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")]() {
      return this.isValid ? `Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }` : `Interval { Invalid, reason: ${this.invalidReason} }`;
    }
    /**
     * Returns a localized string representing this Interval. Accepts the same options as the
     * Intl.DateTimeFormat constructor and any presets defined by Luxon, such as
     * {@link DateTime.DATE_FULL} or {@link DateTime.TIME_SIMPLE}. The exact behavior of this method
     * is browser-specific, but in general it will return an appropriate representation of the
     * Interval in the assigned locale. Defaults to the system's locale if no locale has been
     * specified.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
     * @param {Object} [formatOpts=DateTime.DATE_SHORT] - Either a DateTime preset or
     * Intl.DateTimeFormat constructor options.
     * @param {Object} opts - Options to override the configuration of the start DateTime.
     * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(); //=> 11/7/2022 – 11/8/2022
     * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL); //=> November 7 – 8, 2022
     * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL, { locale: 'fr-FR' }); //=> 7–8 novembre 2022
     * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString(DateTime.TIME_SIMPLE); //=> 6:00 – 8:00 PM
     * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> Mon, Nov 07, 6:00 – 8:00 p
     * @return {string}
     */
    toLocaleString(e = _, n = {}) {
      return this.isValid ? be.create(this.s.loc.clone(n), e).formatInterval(this) : dr;
    }
    /**
     * Returns an ISO 8601-compliant string representation of this Interval.
     * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
     * @param {Object} opts - The same options as {@link DateTime#toISO}
     * @return {string}
     */
    toISO(e) {
      return this.isValid ? `${this.s.toISO(e)}/${this.e.toISO(e)}` : dr;
    }
    /**
     * Returns an ISO 8601-compliant string representation of date of this Interval.
     * The time components are ignored.
     * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
     * @return {string}
     */
    toISODate() {
      return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : dr;
    }
    /**
     * Returns an ISO 8601-compliant string representation of time of this Interval.
     * The date components are ignored.
     * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
     * @param {Object} opts - The same options as {@link DateTime#toISO}
     * @return {string}
     */
    toISOTime(e) {
      return this.isValid ? `${this.s.toISOTime(e)}/${this.e.toISOTime(e)}` : dr;
    }
    /**
     * Returns a string representation of this Interval formatted according to the specified format
     * string. **You may not want this.** See {@link Interval#toLocaleString} for a more flexible
     * formatting tool.
     * @param {string} dateFormat - The format string. This string formats the start and end time.
     * See {@link DateTime#toFormat} for details.
     * @param {Object} opts - Options.
     * @param {string} [opts.separator =  ' – '] - A separator to place between the start and end
     * representations.
     * @return {string}
     */
    toFormat(e, {
      separator: n = " – "
    } = {}) {
      return this.isValid ? `${this.s.toFormat(e)}${n}${this.e.toFormat(e)}` : dr;
    }
    /**
     * Return a Duration representing the time spanned by this interval.
     * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
     * @param {Object} opts - options that affect the creation of the Duration
     * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
     * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
     * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
     * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
     * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
     * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
     * @return {Duration}
     */
    toDuration(e, n) {
      return this.isValid ? this.e.diff(this.s, e, n) : Z.invalid(this.invalidReason);
    }
    /**
     * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
     * @param {function} mapFn
     * @return {Interval}
     * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
     * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
     */
    mapEndpoints(e) {
      return fe.fromDateTimes(e(this.s), e(this.e));
    }
  }
  class Ir {
    /**
     * Return whether the specified zone contains a DST.
     * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
     * @return {boolean}
     */
    static hasDST(e = le.defaultZone) {
      const n = W.now().setZone(e).set({
        month: 12
      });
      return !e.isUniversal && n.offset !== n.set({
        month: 6
      }).offset;
    }
    /**
     * Return whether the specified zone is a valid IANA specifier.
     * @param {string} zone - Zone to check
     * @return {boolean}
     */
    static isValidIANAZone(e) {
      return ve.isValidZone(e);
    }
    /**
     * Converts the input into a {@link Zone} instance.
     *
     * * If `input` is already a Zone instance, it is returned unchanged.
     * * If `input` is a string containing a valid time zone name, a Zone instance
     *   with that name is returned.
     * * If `input` is a string that doesn't refer to a known time zone, a Zone
     *   instance with {@link Zone#isValid} == false is returned.
     * * If `input is a number, a Zone instance with the specified fixed offset
     *   in minutes is returned.
     * * If `input` is `null` or `undefined`, the default zone is returned.
     * @param {string|Zone|number} [input] - the value to be converted
     * @return {Zone}
     */
    static normalizeZone(e) {
      return Y(e, le.defaultZone);
    }
    /**
     * Get the weekday on which the week starts according to the given locale.
     * @param {Object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @param {string} [opts.locObj=null] - an existing locale object to use
     * @returns {number} the start of the week, 1 for Monday through 7 for Sunday
     */
    static getStartOfWeek({
      locale: e = null,
      locObj: n = null
    } = {}) {
      return (n || b.create(e)).getStartOfWeek();
    }
    /**
     * Get the minimum number of days necessary in a week before it is considered part of the next year according
     * to the given locale.
     * @param {Object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @param {string} [opts.locObj=null] - an existing locale object to use
     * @returns {number}
     */
    static getMinimumDaysInFirstWeek({
      locale: e = null,
      locObj: n = null
    } = {}) {
      return (n || b.create(e)).getMinDaysInFirstWeek();
    }
    /**
     * Get the weekdays, which are considered the weekend according to the given locale
     * @param {Object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @param {string} [opts.locObj=null] - an existing locale object to use
     * @returns {number[]} an array of weekdays, 1 for Monday through 7 for Sunday
     */
    static getWeekendWeekdays({
      locale: e = null,
      locObj: n = null
    } = {}) {
      return (n || b.create(e)).getWeekendDays().slice();
    }
    /**
     * Return an array of standalone month names.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
     * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
     * @param {Object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @param {string} [opts.numberingSystem=null] - the numbering system
     * @param {string} [opts.locObj=null] - an existing locale object to use
     * @param {string} [opts.outputCalendar='gregory'] - the calendar
     * @example Info.months()[0] //=> 'January'
     * @example Info.months('short')[0] //=> 'Jan'
     * @example Info.months('numeric')[0] //=> '1'
     * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
     * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
     * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
     * @return {Array}
     */
    static months(e = "long", {
      locale: n = null,
      numberingSystem: c = null,
      locObj: d = null,
      outputCalendar: g = "gregory"
    } = {}) {
      return (d || b.create(n, c, g)).months(e);
    }
    /**
     * Return an array of format month names.
     * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
     * changes the string.
     * See {@link Info#months}
     * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
     * @param {Object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @param {string} [opts.numberingSystem=null] - the numbering system
     * @param {string} [opts.locObj=null] - an existing locale object to use
     * @param {string} [opts.outputCalendar='gregory'] - the calendar
     * @return {Array}
     */
    static monthsFormat(e = "long", {
      locale: n = null,
      numberingSystem: c = null,
      locObj: d = null,
      outputCalendar: g = "gregory"
    } = {}) {
      return (d || b.create(n, c, g)).months(e, !0);
    }
    /**
     * Return an array of standalone week names.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
     * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
     * @param {Object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @param {string} [opts.numberingSystem=null] - the numbering system
     * @param {string} [opts.locObj=null] - an existing locale object to use
     * @example Info.weekdays()[0] //=> 'Monday'
     * @example Info.weekdays('short')[0] //=> 'Mon'
     * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
     * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
     * @return {Array}
     */
    static weekdays(e = "long", {
      locale: n = null,
      numberingSystem: c = null,
      locObj: d = null
    } = {}) {
      return (d || b.create(n, c, null)).weekdays(e);
    }
    /**
     * Return an array of format week names.
     * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
     * changes the string.
     * See {@link Info#weekdays}
     * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
     * @param {Object} opts - options
     * @param {string} [opts.locale=null] - the locale code
     * @param {string} [opts.numberingSystem=null] - the numbering system
     * @param {string} [opts.locObj=null] - an existing locale object to use
     * @return {Array}
     */
    static weekdaysFormat(e = "long", {
      locale: n = null,
      numberingSystem: c = null,
      locObj: d = null
    } = {}) {
      return (d || b.create(n, c, null)).weekdays(e, !0);
    }
    /**
     * Return an array of meridiems.
     * @param {Object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @example Info.meridiems() //=> [ 'AM', 'PM' ]
     * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
     * @return {Array}
     */
    static meridiems({
      locale: e = null
    } = {}) {
      return b.create(e).meridiems();
    }
    /**
     * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
     * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
     * @param {Object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @example Info.eras() //=> [ 'BC', 'AD' ]
     * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
     * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
     * @return {Array}
     */
    static eras(e = "short", {
      locale: n = null
    } = {}) {
      return b.create(n, null, "gregory").eras(e);
    }
    /**
     * Return the set of available features in this environment.
     * Some features of Luxon are not available in all environments. For example, on older browsers, relative time formatting support is not available. Use this function to figure out if that's the case.
     * Keys:
     * * `relative`: whether this environment supports relative time formatting
     * * `localeWeek`: whether this environment supports different weekdays for the start of the week based on the locale
     * @example Info.features() //=> { relative: false, localeWeek: true }
     * @return {Object}
     */
    static features() {
      return {
        relative: gl(),
        localeWeek: bl()
      };
    }
  }
  function Wl(u, e) {
    const n = (d) => d.toUTC(0, {
      keepLocalTime: !0
    }).startOf("day").valueOf(), c = n(e) - n(u);
    return Math.floor(Z.fromMillis(c).as("days"));
  }
  function Gg(u, e, n) {
    const c = [["years", (E, C) => C.year - E.year], ["quarters", (E, C) => C.quarter - E.quarter + (C.year - E.year) * 4], ["months", (E, C) => C.month - E.month + (C.year - E.year) * 12], ["weeks", (E, C) => {
      const F = Wl(E, C);
      return (F - F % 7) / 7;
    }], ["days", Wl]], d = {}, g = u;
    let w, q;
    for (const [E, C] of c)
      n.indexOf(E) >= 0 && (w = E, d[E] = C(u, e), q = g.plus(d), q > e ? (d[E]--, u = g.plus(d), u > e && (q = u, d[E]--, u = g.plus(d))) : u = q);
    return [u, d, q, w];
  }
  function Zg(u, e, n, c) {
    let [d, g, w, q] = Gg(u, e, n);
    const E = e - d, C = n.filter((H) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(H) >= 0);
    C.length === 0 && (w < e && (w = d.plus({
      [q]: 1
    })), w !== d && (g[q] = (g[q] || 0) + E / (w - d)));
    const F = Z.fromObject(g, c);
    return C.length > 0 ? Z.fromMillis(E, c).shiftTo(...C).plus(F) : F;
  }
  const Yg = "missing Intl.DateTimeFormat.formatToParts support";
  function J(u, e = (n) => n) {
    return {
      regex: u,
      deser: ([n]) => e(P1(n))
    };
  }
  const zl = "[  ]", Hl = new RegExp(zl, "g");
  function Jg(u) {
    return u.replace(/\./g, "\\.?").replace(Hl, zl);
  }
  function Gl(u) {
    return u.replace(/\./g, "").replace(Hl, " ").toLowerCase();
  }
  function ke(u, e) {
    return u === null ? null : {
      regex: RegExp(u.map(Jg).join("|")),
      deser: ([n]) => u.findIndex((c) => Gl(n) === Gl(c)) + e
    };
  }
  function Zl(u, e) {
    return {
      regex: u,
      deser: ([, n, c]) => Gr(n, c),
      groups: e
    };
  }
  function Jr(u) {
    return {
      regex: u,
      deser: ([e]) => e
    };
  }
  function Kg(u) {
    return u.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
  }
  function Xg(u, e) {
    const n = Ce(e), c = Ce(e, "{2}"), d = Ce(e, "{3}"), g = Ce(e, "{4}"), w = Ce(e, "{6}"), q = Ce(e, "{1,2}"), E = Ce(e, "{1,3}"), C = Ce(e, "{1,6}"), F = Ce(e, "{1,9}"), H = Ce(e, "{2,4}"), ne = Ce(e, "{4,6}"), j = (Be) => ({
      regex: RegExp(Kg(Be.val)),
      deser: ([vr]) => vr,
      literal: !0
    }), Ne = ((Be) => {
      if (u.literal)
        return j(Be);
      switch (Be.val) {
        // era
        case "G":
          return ke(e.eras("short"), 0);
        case "GG":
          return ke(e.eras("long"), 0);
        // years
        case "y":
          return J(C);
        case "yy":
          return J(H, Tt);
        case "yyyy":
          return J(g);
        case "yyyyy":
          return J(ne);
        case "yyyyyy":
          return J(w);
        // months
        case "M":
          return J(q);
        case "MM":
          return J(c);
        case "MMM":
          return ke(e.months("short", !0), 1);
        case "MMMM":
          return ke(e.months("long", !0), 1);
        case "L":
          return J(q);
        case "LL":
          return J(c);
        case "LLL":
          return ke(e.months("short", !1), 1);
        case "LLLL":
          return ke(e.months("long", !1), 1);
        // dates
        case "d":
          return J(q);
        case "dd":
          return J(c);
        // ordinals
        case "o":
          return J(E);
        case "ooo":
          return J(d);
        // time
        case "HH":
          return J(c);
        case "H":
          return J(q);
        case "hh":
          return J(c);
        case "h":
          return J(q);
        case "mm":
          return J(c);
        case "m":
          return J(q);
        case "q":
          return J(q);
        case "qq":
          return J(c);
        case "s":
          return J(q);
        case "ss":
          return J(c);
        case "S":
          return J(E);
        case "SSS":
          return J(d);
        case "u":
          return Jr(F);
        case "uu":
          return Jr(q);
        case "uuu":
          return J(n);
        // meridiem
        case "a":
          return ke(e.meridiems(), 0);
        // weekYear (k)
        case "kkkk":
          return J(g);
        case "kk":
          return J(H, Tt);
        // weekNumber (W)
        case "W":
          return J(q);
        case "WW":
          return J(c);
        // weekdays
        case "E":
        case "c":
          return J(n);
        case "EEE":
          return ke(e.weekdays("short", !1), 1);
        case "EEEE":
          return ke(e.weekdays("long", !1), 1);
        case "ccc":
          return ke(e.weekdays("short", !0), 1);
        case "cccc":
          return ke(e.weekdays("long", !0), 1);
        // offset/zone
        case "Z":
        case "ZZ":
          return Zl(new RegExp(`([+-]${q.source})(?::(${c.source}))?`), 2);
        case "ZZZ":
          return Zl(new RegExp(`([+-]${q.source})(${c.source})?`), 2);
        // we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
        // because we don't have any way to figure out what they are
        case "z":
          return Jr(/[a-z_+-/]{1,256}?/i);
        // this special-case "token" represents a place where a macro-token expanded into a white-space literal
        // in this case we accept any non-newline white-space
        case " ":
          return Jr(/[^\S\n\r]/);
        default:
          return j(Be);
      }
    })(u) || {
      invalidReason: Yg
    };
    return Ne.token = u, Ne;
  }
  const Qg = {
    year: {
      "2-digit": "yy",
      numeric: "yyyyy"
    },
    month: {
      numeric: "M",
      "2-digit": "MM",
      short: "MMM",
      long: "MMMM"
    },
    day: {
      numeric: "d",
      "2-digit": "dd"
    },
    weekday: {
      short: "EEE",
      long: "EEEE"
    },
    dayperiod: "a",
    dayPeriod: "a",
    hour12: {
      numeric: "h",
      "2-digit": "hh"
    },
    hour24: {
      numeric: "H",
      "2-digit": "HH"
    },
    minute: {
      numeric: "m",
      "2-digit": "mm"
    },
    second: {
      numeric: "s",
      "2-digit": "ss"
    },
    timeZoneName: {
      long: "ZZZZZ",
      short: "ZZZ"
    }
  };
  function eb(u, e, n) {
    const {
      type: c,
      value: d
    } = u;
    if (c === "literal") {
      const E = /^\s+$/.test(d);
      return {
        literal: !E,
        val: E ? " " : d
      };
    }
    const g = e[c];
    let w = c;
    c === "hour" && (e.hour12 != null ? w = e.hour12 ? "hour12" : "hour24" : e.hourCycle != null ? e.hourCycle === "h11" || e.hourCycle === "h12" ? w = "hour12" : w = "hour24" : w = n.hour12 ? "hour12" : "hour24");
    let q = Qg[w];
    if (typeof q == "object" && (q = q[g]), q)
      return {
        literal: !1,
        val: q
      };
  }
  function rb(u) {
    return [`^${u.map((n) => n.regex).reduce((n, c) => `${n}(${c.source})`, "")}$`, u];
  }
  function tb(u, e, n) {
    const c = u.match(e);
    if (c) {
      const d = {};
      let g = 1;
      for (const w in n)
        if (ar(n, w)) {
          const q = n[w], E = q.groups ? q.groups + 1 : 1;
          !q.literal && q.token && (d[q.token.val[0]] = q.deser(c.slice(g, g + E))), g += E;
        }
      return [c, d];
    } else
      return [c, {}];
  }
  function nb(u) {
    const e = (g) => {
      switch (g) {
        case "S":
          return "millisecond";
        case "s":
          return "second";
        case "m":
          return "minute";
        case "h":
        case "H":
          return "hour";
        case "d":
          return "day";
        case "o":
          return "ordinal";
        case "L":
        case "M":
          return "month";
        case "y":
          return "year";
        case "E":
        case "c":
          return "weekday";
        case "W":
          return "weekNumber";
        case "k":
          return "weekYear";
        case "q":
          return "quarter";
        default:
          return null;
      }
    };
    let n = null, c;
    return V(u.z) || (n = ve.create(u.z)), V(u.Z) || (n || (n = new I(u.Z)), c = u.Z), V(u.q) || (u.M = (u.q - 1) * 3 + 1), V(u.h) || (u.h < 12 && u.a === 1 ? u.h += 12 : u.h === 12 && u.a === 0 && (u.h = 0)), u.G === 0 && u.y && (u.y = -u.y), V(u.u) || (u.S = $t(u.u)), [Object.keys(u).reduce((g, w) => {
      const q = e(w);
      return q && (g[q] = u[w]), g;
    }, {}), n, c];
  }
  let Rt = null;
  function ib() {
    return Rt || (Rt = W.fromMillis(1555555555555)), Rt;
  }
  function ab(u, e) {
    if (u.literal)
      return u;
    const n = be.macroTokenToFormatOpts(u.val), c = Xl(n, e);
    return c == null || c.includes(void 0) ? u : c;
  }
  function Yl(u, e) {
    return Array.prototype.concat(...u.map((n) => ab(n, e)));
  }
  class Jl {
    constructor(e, n) {
      if (this.locale = e, this.format = n, this.tokens = Yl(be.parseFormat(n), e), this.units = this.tokens.map((c) => Xg(c, e)), this.disqualifyingUnit = this.units.find((c) => c.invalidReason), !this.disqualifyingUnit) {
        const [c, d] = rb(this.units);
        this.regex = RegExp(c, "i"), this.handlers = d;
      }
    }
    explainFromTokens(e) {
      if (this.isValid) {
        const [n, c] = tb(e, this.regex, this.handlers), [d, g, w] = c ? nb(c) : [null, null, void 0];
        if (ar(c, "a") && ar(c, "H"))
          throw new l("Can't include meridiem when specifying 24-hour format");
        return {
          input: e,
          tokens: this.tokens,
          regex: this.regex,
          rawMatches: n,
          matches: c,
          result: d,
          zone: g,
          specificOffset: w
        };
      } else
        return {
          input: e,
          tokens: this.tokens,
          invalidReason: this.invalidReason
        };
    }
    get isValid() {
      return !this.disqualifyingUnit;
    }
    get invalidReason() {
      return this.disqualifyingUnit ? this.disqualifyingUnit.invalidReason : null;
    }
  }
  function Kl(u, e, n) {
    return new Jl(u, n).explainFromTokens(e);
  }
  function sb(u, e, n) {
    const {
      result: c,
      zone: d,
      specificOffset: g,
      invalidReason: w
    } = Kl(u, e, n);
    return [c, d, g, w];
  }
  function Xl(u, e) {
    if (!u)
      return null;
    const c = be.create(e, u).dtFormatter(ib()), d = c.formatToParts(), g = c.resolvedOptions();
    return d.map((w) => eb(w, u, g));
  }
  const Ot = "Invalid DateTime", Ql = 864e13;
  function Rr(u) {
    return new Le("unsupported zone", `the zone "${u.name}" is not supported`);
  }
  function At(u) {
    return u.weekData === null && (u.weekData = Vr(u.c)), u.weekData;
  }
  function Mt(u) {
    return u.localWeekData === null && (u.localWeekData = Vr(u.c, u.loc.getMinDaysInFirstWeek(), u.loc.getStartOfWeek())), u.localWeekData;
  }
  function rr(u, e) {
    const n = {
      ts: u.ts,
      zone: u.zone,
      c: u.c,
      o: u.o,
      loc: u.loc,
      invalid: u.invalid
    };
    return new W({
      ...n,
      ...e,
      old: n
    });
  }
  function ef(u, e, n) {
    let c = u - e * 60 * 1e3;
    const d = n.offset(c);
    if (e === d)
      return [c, e];
    c -= (d - e) * 60 * 1e3;
    const g = n.offset(c);
    return d === g ? [c, d] : [u - Math.min(d, g) * 60 * 1e3, Math.max(d, g)];
  }
  function Kr(u, e) {
    u += e * 60 * 1e3;
    const n = new Date(u);
    return {
      year: n.getUTCFullYear(),
      month: n.getUTCMonth() + 1,
      day: n.getUTCDate(),
      hour: n.getUTCHours(),
      minute: n.getUTCMinutes(),
      second: n.getUTCSeconds(),
      millisecond: n.getUTCMilliseconds()
    };
  }
  function Xr(u, e, n) {
    return ef(Hr(u), e, n);
  }
  function rf(u, e) {
    const n = u.o, c = u.c.year + Math.trunc(e.years), d = u.c.month + Math.trunc(e.months) + Math.trunc(e.quarters) * 3, g = {
      ...u.c,
      year: c,
      month: d,
      day: Math.min(u.c.day, zr(c, d)) + Math.trunc(e.days) + Math.trunc(e.weeks) * 7
    }, w = Z.fromObject({
      years: e.years - Math.trunc(e.years),
      quarters: e.quarters - Math.trunc(e.quarters),
      months: e.months - Math.trunc(e.months),
      weeks: e.weeks - Math.trunc(e.weeks),
      days: e.days - Math.trunc(e.days),
      hours: e.hours,
      minutes: e.minutes,
      seconds: e.seconds,
      milliseconds: e.milliseconds
    }).as("milliseconds"), q = Hr(g);
    let [E, C] = ef(q, n, u.zone);
    return w !== 0 && (E += w, C = u.zone.offset(E)), {
      ts: E,
      o: C
    };
  }
  function mr(u, e, n, c, d, g) {
    const {
      setZone: w,
      zone: q
    } = n;
    if (u && Object.keys(u).length !== 0 || e) {
      const E = e || q, C = W.fromObject(u, {
        ...n,
        zone: E,
        specificOffset: g
      });
      return w ? C : C.setZone(q);
    } else
      return W.invalid(new Le("unparsable", `the input "${d}" can't be parsed as ${c}`));
  }
  function Qr(u, e, n = !0) {
    return u.isValid ? be.create(b.create("en-US"), {
      allowZ: n,
      forceSimple: !0
    }).formatDateTimeFromString(u, e) : null;
  }
  function Ct(u, e, n) {
    const c = u.c.year > 9999 || u.c.year < 0;
    let d = "";
    if (c && u.c.year >= 0 && (d += "+"), d += de(u.c.year, c ? 6 : 4), n === "year") return d;
    if (e) {
      if (d += "-", d += de(u.c.month), n === "month") return d;
      d += "-";
    } else if (d += de(u.c.month), n === "month") return d;
    return d += de(u.c.day), d;
  }
  function tf(u, e, n, c, d, g, w) {
    let q = !n || u.c.millisecond !== 0 || u.c.second !== 0, E = "";
    switch (w) {
      case "day":
      case "month":
      case "year":
        break;
      default:
        if (E += de(u.c.hour), w === "hour") break;
        if (e) {
          if (E += ":", E += de(u.c.minute), w === "minute") break;
          q && (E += ":", E += de(u.c.second));
        } else {
          if (E += de(u.c.minute), w === "minute") break;
          q && (E += de(u.c.second));
        }
        if (w === "second") break;
        q && (!c || u.c.millisecond !== 0) && (E += ".", E += de(u.c.millisecond, 3));
    }
    return d && (u.isOffsetFixed && u.offset === 0 && !g ? E += "Z" : u.o < 0 ? (E += "-", E += de(Math.trunc(-u.o / 60)), E += ":", E += de(Math.trunc(-u.o % 60))) : (E += "+", E += de(Math.trunc(u.o / 60)), E += ":", E += de(Math.trunc(u.o % 60)))), g && (E += "[" + u.zone.ianaName + "]"), E;
  }
  const nf = {
    month: 1,
    day: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
  }, ub = {
    weekNumber: 1,
    weekday: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
  }, ob = {
    ordinal: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
  }, et = ["year", "month", "day", "hour", "minute", "second", "millisecond"], cb = ["weekYear", "weekNumber", "weekday", "hour", "minute", "second", "millisecond"], lb = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
  function rt(u) {
    const e = {
      year: "year",
      years: "year",
      month: "month",
      months: "month",
      day: "day",
      days: "day",
      hour: "hour",
      hours: "hour",
      minute: "minute",
      minutes: "minute",
      quarter: "quarter",
      quarters: "quarter",
      second: "second",
      seconds: "second",
      millisecond: "millisecond",
      milliseconds: "millisecond",
      weekday: "weekday",
      weekdays: "weekday",
      weeknumber: "weekNumber",
      weeksnumber: "weekNumber",
      weeknumbers: "weekNumber",
      weekyear: "weekYear",
      weekyears: "weekYear",
      ordinal: "ordinal"
    }[u.toLowerCase()];
    if (!e) throw new f(u);
    return e;
  }
  function af(u) {
    switch (u.toLowerCase()) {
      case "localweekday":
      case "localweekdays":
        return "localWeekday";
      case "localweeknumber":
      case "localweeknumbers":
        return "localWeekNumber";
      case "localweekyear":
      case "localweekyears":
        return "localWeekYear";
      default:
        return rt(u);
    }
  }
  function fb(u) {
    if (Or === void 0 && (Or = le.now()), u.type !== "iana")
      return u.offset(Or);
    const e = u.name;
    let n = Lt.get(e);
    return n === void 0 && (n = u.offset(Or), Lt.set(e, n)), n;
  }
  function sf(u, e) {
    const n = Y(e.zone, le.defaultZone);
    if (!n.isValid)
      return W.invalid(Rr(n));
    const c = b.fromObject(e);
    let d, g;
    if (V(u.year))
      d = le.now();
    else {
      for (const E of et)
        V(u[E]) && (u[E] = nf[E]);
      const w = yl(u) || pl(u);
      if (w)
        return W.invalid(w);
      const q = fb(n);
      [d, g] = Xr(u, q, n);
    }
    return new W({
      ts: d,
      zone: n,
      loc: c,
      o: g
    });
  }
  function uf(u, e, n) {
    const c = V(n.round) ? !0 : n.round, d = V(n.rounding) ? "trunc" : n.rounding, g = (q, E) => (q = Et(q, c || n.calendary ? 0 : 2, n.calendary ? "round" : d), e.loc.clone(n).relFormatter(n).format(q, E)), w = (q) => n.calendary ? e.hasSame(u, q) ? 0 : e.startOf(q).diff(u.startOf(q), q).get(q) : e.diff(u, q).get(q);
    if (n.unit)
      return g(w(n.unit), n.unit);
    for (const q of n.units) {
      const E = w(q);
      if (Math.abs(E) >= 1)
        return g(E, q);
    }
    return g(u > e ? -0 : 0, n.units[n.units.length - 1]);
  }
  function of(u) {
    let e = {}, n;
    return u.length > 0 && typeof u[u.length - 1] == "object" ? (e = u[u.length - 1], n = Array.from(u).slice(0, u.length - 1)) : n = Array.from(u), [e, n];
  }
  let Or;
  const Lt = /* @__PURE__ */ new Map();
  class W {
    /**
     * @access private
     */
    constructor(e) {
      const n = e.zone || le.defaultZone;
      let c = e.invalid || (Number.isNaN(e.ts) ? new Le("invalid input") : null) || (n.isValid ? null : Rr(n));
      this.ts = V(e.ts) ? le.now() : e.ts;
      let d = null, g = null;
      if (!c)
        if (e.old && e.old.ts === this.ts && e.old.zone.equals(n))
          [d, g] = [e.old.c, e.old.o];
        else {
          const q = He(e.o) && !e.old ? e.o : n.offset(this.ts);
          d = Kr(this.ts, q), c = Number.isNaN(d.year) ? new Le("invalid input") : null, d = c ? null : d, g = c ? null : q;
        }
      this._zone = n, this.loc = e.loc || b.create(), this.invalid = c, this.weekData = null, this.localWeekData = null, this.c = d, this.o = g, this.isLuxonDateTime = !0;
    }
    // CONSTRUCT
    /**
     * Create a DateTime for the current instant, in the system's time zone.
     *
     * Use Settings to override these default values if needed.
     * @example DateTime.now().toISO() //~> now in the ISO format
     * @return {DateTime}
     */
    static now() {
      return new W({});
    }
    /**
     * Create a local DateTime
     * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
     * @param {number} [month=1] - The month, 1-indexed
     * @param {number} [day=1] - The day of the month, 1-indexed
     * @param {number} [hour=0] - The hour of the day, in 24-hour time
     * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
     * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
     * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
     * @example DateTime.local()                                  //~> now
     * @example DateTime.local({ zone: "America/New_York" })      //~> now, in US east coast time
     * @example DateTime.local(2017)                              //~> 2017-01-01T00:00:00
     * @example DateTime.local(2017, 3)                           //~> 2017-03-01T00:00:00
     * @example DateTime.local(2017, 3, 12, { locale: "fr" })     //~> 2017-03-12T00:00:00, with a French locale
     * @example DateTime.local(2017, 3, 12, 5)                    //~> 2017-03-12T05:00:00
     * @example DateTime.local(2017, 3, 12, 5, { zone: "utc" })   //~> 2017-03-12T05:00:00, in UTC
     * @example DateTime.local(2017, 3, 12, 5, 45)                //~> 2017-03-12T05:45:00
     * @example DateTime.local(2017, 3, 12, 5, 45, 10)            //~> 2017-03-12T05:45:10
     * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765)       //~> 2017-03-12T05:45:10.765
     * @return {DateTime}
     */
    static local() {
      const [e, n] = of(arguments), [c, d, g, w, q, E, C] = n;
      return sf({
        year: c,
        month: d,
        day: g,
        hour: w,
        minute: q,
        second: E,
        millisecond: C
      }, e);
    }
    /**
     * Create a DateTime in UTC
     * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
     * @param {number} [month=1] - The month, 1-indexed
     * @param {number} [day=1] - The day of the month
     * @param {number} [hour=0] - The hour of the day, in 24-hour time
     * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
     * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
     * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
     * @param {Object} options - configuration options for the DateTime
     * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
     * @param {string} [options.outputCalendar] - the output calendar to set on the resulting DateTime instance
     * @param {string} [options.numberingSystem] - the numbering system to set on the resulting DateTime instance
     * @param {string} [options.weekSettings] - the week settings to set on the resulting DateTime instance
     * @example DateTime.utc()                                              //~> now
     * @example DateTime.utc(2017)                                          //~> 2017-01-01T00:00:00Z
     * @example DateTime.utc(2017, 3)                                       //~> 2017-03-01T00:00:00Z
     * @example DateTime.utc(2017, 3, 12)                                   //~> 2017-03-12T00:00:00Z
     * @example DateTime.utc(2017, 3, 12, 5)                                //~> 2017-03-12T05:00:00Z
     * @example DateTime.utc(2017, 3, 12, 5, 45)                            //~> 2017-03-12T05:45:00Z
     * @example DateTime.utc(2017, 3, 12, 5, 45, { locale: "fr" })          //~> 2017-03-12T05:45:00Z with a French locale
     * @example DateTime.utc(2017, 3, 12, 5, 45, 10)                        //~> 2017-03-12T05:45:10Z
     * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765, { locale: "fr" }) //~> 2017-03-12T05:45:10.765Z with a French locale
     * @return {DateTime}
     */
    static utc() {
      const [e, n] = of(arguments), [c, d, g, w, q, E, C] = n;
      return e.zone = I.utcInstance, sf({
        year: c,
        month: d,
        day: g,
        hour: w,
        minute: q,
        second: E,
        millisecond: C
      }, e);
    }
    /**
     * Create a DateTime from a JavaScript Date object. Uses the default zone.
     * @param {Date} date - a JavaScript Date object
     * @param {Object} options - configuration options for the DateTime
     * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
     * @return {DateTime}
     */
    static fromJSDate(e, n = {}) {
      const c = W1(e) ? e.valueOf() : NaN;
      if (Number.isNaN(c))
        return W.invalid("invalid input");
      const d = Y(n.zone, le.defaultZone);
      return d.isValid ? new W({
        ts: c,
        zone: d,
        loc: b.fromObject(n)
      }) : W.invalid(Rr(d));
    }
    /**
     * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
     * @param {number} milliseconds - a number of milliseconds since 1970 UTC
     * @param {Object} options - configuration options for the DateTime
     * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
     * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
     * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
     * @param {string} options.weekSettings - the week settings to set on the resulting DateTime instance
     * @return {DateTime}
     */
    static fromMillis(e, n = {}) {
      if (He(e))
        return e < -Ql || e > Ql ? W.invalid("Timestamp out of range") : new W({
          ts: e,
          zone: Y(n.zone, le.defaultZone),
          loc: b.fromObject(n)
        });
      throw new v(`fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`);
    }
    /**
     * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
     * @param {number} seconds - a number of seconds since 1970 UTC
     * @param {Object} options - configuration options for the DateTime
     * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
     * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
     * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
     * @param {string} options.weekSettings - the week settings to set on the resulting DateTime instance
     * @return {DateTime}
     */
    static fromSeconds(e, n = {}) {
      if (He(e))
        return new W({
          ts: e * 1e3,
          zone: Y(n.zone, le.defaultZone),
          loc: b.fromObject(n)
        });
      throw new v("fromSeconds requires a numerical input");
    }
    /**
     * Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults.
     * @param {Object} obj - the object to create the DateTime from
     * @param {number} obj.year - a year, such as 1987
     * @param {number} obj.month - a month, 1-12
     * @param {number} obj.day - a day of the month, 1-31, depending on the month
     * @param {number} obj.ordinal - day of the year, 1-365 or 366
     * @param {number} obj.weekYear - an ISO week year
     * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
     * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
     * @param {number} obj.localWeekYear - a week year, according to the locale
     * @param {number} obj.localWeekNumber - a week number, between 1 and 52 or 53, depending on the year, according to the locale
     * @param {number} obj.localWeekday - a weekday, 1-7, where 1 is the first and 7 is the last day of the week, according to the locale
     * @param {number} obj.hour - hour of the day, 0-23
     * @param {number} obj.minute - minute of the hour, 0-59
     * @param {number} obj.second - second of the minute, 0-59
     * @param {number} obj.millisecond - millisecond of the second, 0-999
     * @param {Object} opts - options for creating this DateTime
     * @param {string|Zone} [opts.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
     * @param {string} [opts.locale='system\'s locale'] - a locale to set on the resulting DateTime instance
     * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
     * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
     * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
     * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
     * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
     * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'utc' }),
     * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'local' })
     * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'America/New_York' })
     * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
     * @example DateTime.fromObject({ localWeekYear: 2022, localWeekNumber: 1, localWeekday: 1 }, { locale: "en-US" }).toISODate() //=> '2021-12-26'
     * @return {DateTime}
     */
    static fromObject(e, n = {}) {
      e = e || {};
      const c = Y(n.zone, le.defaultZone);
      if (!c.isValid)
        return W.invalid(Rr(c));
      const d = b.fromObject(n), g = Zr(e, af), {
        minDaysInFirstWeek: w,
        startOfWeek: q
      } = vl(g, d), E = le.now(), C = V(n.specificOffset) ? c.offset(E) : n.specificOffset, F = !V(g.ordinal), H = !V(g.year), ne = !V(g.month) || !V(g.day), j = H || ne, me = g.weekYear || g.weekNumber;
      if ((j || F) && me)
        throw new l("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
      if (ne && F)
        throw new l("Can't mix ordinal dates with month/day");
      const Ne = me || g.weekday && !j;
      let Be, vr, Mr = Kr(E, C);
      Ne ? (Be = cb, vr = ub, Mr = Vr(Mr, w, q)) : F ? (Be = lb, vr = ob, Mr = qt(Mr)) : (Be = et, vr = nf);
      let cf = !1;
      for (const Lr of Be) {
        const pb = g[Lr];
        V(pb) ? cf ? g[Lr] = vr[Lr] : g[Lr] = Mr[Lr] : cf = !0;
      }
      const db = Ne ? B1(g, w, q) : F ? j1(g) : yl(g), lf = db || pl(g);
      if (lf)
        return W.invalid(lf);
      const mb = Ne ? dl(g, w, q) : F ? ml(g) : g, [vb, yb] = Xr(mb, C, c), Cr = new W({
        ts: vb,
        zone: c,
        o: yb,
        loc: d
      });
      return g.weekday && j && e.weekday !== Cr.weekday ? W.invalid("mismatched weekday", `you can't specify both a weekday of ${g.weekday} and a date of ${Cr.toISO()}`) : Cr.isValid ? Cr : W.invalid(Cr.invalid);
    }
    /**
     * Create a DateTime from an ISO 8601 string
     * @param {string} text - the ISO string
     * @param {Object} opts - options to affect the creation
     * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
     * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
     * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
     * @param {string} [opts.outputCalendar] - the output calendar to set on the resulting DateTime instance
     * @param {string} [opts.numberingSystem] - the numbering system to set on the resulting DateTime instance
     * @param {string} [opts.weekSettings] - the week settings to set on the resulting DateTime instance
     * @example DateTime.fromISO('2016-05-25T09:08:34.123')
     * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
     * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
     * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
     * @example DateTime.fromISO('2016-W05-4')
     * @return {DateTime}
     */
    static fromISO(e, n = {}) {
      const [c, d] = Cg(e);
      return mr(c, d, n, "ISO 8601", e);
    }
    /**
     * Create a DateTime from an RFC 2822 string
     * @param {string} text - the RFC 2822 string
     * @param {Object} opts - options to affect the creation
     * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
     * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
     * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
     * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
     * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
     * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
     * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
     * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
     * @return {DateTime}
     */
    static fromRFC2822(e, n = {}) {
      const [c, d] = Lg(e);
      return mr(c, d, n, "RFC 2822", e);
    }
    /**
     * Create a DateTime from an HTTP header date
     * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
     * @param {string} text - the HTTP header date
     * @param {Object} opts - options to affect the creation
     * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
     * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
     * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
     * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
     * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
     * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
     * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
     * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
     * @return {DateTime}
     */
    static fromHTTP(e, n = {}) {
      const [c, d] = kg(e);
      return mr(c, d, n, "HTTP", n);
    }
    /**
     * Create a DateTime from an input string and format string.
     * Defaults to en-US if no locale has been specified, regardless of the system's locale. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/parsing?id=table-of-tokens).
     * @param {string} text - the string to parse
     * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
     * @param {Object} opts - options to affect the creation
     * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
     * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
     * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
     * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
     * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
     * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @return {DateTime}
     */
    static fromFormat(e, n, c = {}) {
      if (V(e) || V(n))
        throw new v("fromFormat requires an input string and a format");
      const {
        locale: d = null,
        numberingSystem: g = null
      } = c, w = b.fromOpts({
        locale: d,
        numberingSystem: g,
        defaultToEN: !0
      }), [q, E, C, F] = sb(w, e, n);
      return F ? W.invalid(F) : mr(q, E, c, `format ${n}`, e, C);
    }
    /**
     * @deprecated use fromFormat instead
     */
    static fromString(e, n, c = {}) {
      return W.fromFormat(e, n, c);
    }
    /**
     * Create a DateTime from a SQL date, time, or datetime
     * Defaults to en-US if no locale has been specified, regardless of the system's locale
     * @param {string} text - the string to parse
     * @param {Object} opts - options to affect the creation
     * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
     * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
     * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
     * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
     * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
     * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @example DateTime.fromSQL('2017-05-15')
     * @example DateTime.fromSQL('2017-05-15 09:12:34')
     * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
     * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
     * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
     * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
     * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
     * @example DateTime.fromSQL('09:12:34.342')
     * @return {DateTime}
     */
    static fromSQL(e, n = {}) {
      const [c, d] = jg(e);
      return mr(c, d, n, "SQL", e);
    }
    /**
     * Create an invalid DateTime.
     * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent.
     * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
     * @return {DateTime}
     */
    static invalid(e, n = null) {
      if (!e)
        throw new v("need to specify a reason the DateTime is invalid");
      const c = e instanceof Le ? e : new Le(e, n);
      if (le.throwOnInvalid)
        throw new t(c);
      return new W({
        invalid: c
      });
    }
    /**
     * Check if an object is an instance of DateTime. Works across context boundaries
     * @param {object} o
     * @return {boolean}
     */
    static isDateTime(e) {
      return e && e.isLuxonDateTime || !1;
    }
    /**
     * Produce the format string for a set of options
     * @param formatOpts
     * @param localeOpts
     * @returns {string}
     */
    static parseFormatForOpts(e, n = {}) {
      const c = Xl(e, b.fromObject(n));
      return c ? c.map((d) => d ? d.val : null).join("") : null;
    }
    /**
     * Produce the the fully expanded format token for the locale
     * Does NOT quote characters, so quoted tokens will not round trip correctly
     * @param fmt
     * @param localeOpts
     * @returns {string}
     */
    static expandFormat(e, n = {}) {
      return Yl(be.parseFormat(e), b.fromObject(n)).map((d) => d.val).join("");
    }
    static resetCache() {
      Or = void 0, Lt.clear();
    }
    // INFO
    /**
     * Get the value of unit.
     * @param {string} unit - a unit such as 'minute' or 'day'
     * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
     * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
     * @return {number}
     */
    get(e) {
      return this[e];
    }
    /**
     * Returns whether the DateTime is valid. Invalid DateTimes occur when:
     * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
     * * The DateTime was created by an operation on another invalid date
     * @type {boolean}
     */
    get isValid() {
      return this.invalid === null;
    }
    /**
     * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
     * @type {string}
     */
    get invalidReason() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
     * @type {string}
     */
    get invalidExplanation() {
      return this.invalid ? this.invalid.explanation : null;
    }
    /**
     * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
     *
     * @type {string}
     */
    get locale() {
      return this.isValid ? this.loc.locale : null;
    }
    /**
     * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
     *
     * @type {string}
     */
    get numberingSystem() {
      return this.isValid ? this.loc.numberingSystem : null;
    }
    /**
     * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
     *
     * @type {string}
     */
    get outputCalendar() {
      return this.isValid ? this.loc.outputCalendar : null;
    }
    /**
     * Get the time zone associated with this DateTime.
     * @type {Zone}
     */
    get zone() {
      return this._zone;
    }
    /**
     * Get the name of the time zone.
     * @type {string}
     */
    get zoneName() {
      return this.isValid ? this.zone.name : null;
    }
    /**
     * Get the year
     * @example DateTime.local(2017, 5, 25).year //=> 2017
     * @type {number}
     */
    get year() {
      return this.isValid ? this.c.year : NaN;
    }
    /**
     * Get the quarter
     * @example DateTime.local(2017, 5, 25).quarter //=> 2
     * @type {number}
     */
    get quarter() {
      return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
    }
    /**
     * Get the month (1-12).
     * @example DateTime.local(2017, 5, 25).month //=> 5
     * @type {number}
     */
    get month() {
      return this.isValid ? this.c.month : NaN;
    }
    /**
     * Get the day of the month (1-30ish).
     * @example DateTime.local(2017, 5, 25).day //=> 25
     * @type {number}
     */
    get day() {
      return this.isValid ? this.c.day : NaN;
    }
    /**
     * Get the hour of the day (0-23).
     * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
     * @type {number}
     */
    get hour() {
      return this.isValid ? this.c.hour : NaN;
    }
    /**
     * Get the minute of the hour (0-59).
     * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
     * @type {number}
     */
    get minute() {
      return this.isValid ? this.c.minute : NaN;
    }
    /**
     * Get the second of the minute (0-59).
     * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
     * @type {number}
     */
    get second() {
      return this.isValid ? this.c.second : NaN;
    }
    /**
     * Get the millisecond of the second (0-999).
     * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
     * @type {number}
     */
    get millisecond() {
      return this.isValid ? this.c.millisecond : NaN;
    }
    /**
     * Get the week year
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2014, 12, 31).weekYear //=> 2015
     * @type {number}
     */
    get weekYear() {
      return this.isValid ? At(this).weekYear : NaN;
    }
    /**
     * Get the week number of the week year (1-52ish).
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
     * @type {number}
     */
    get weekNumber() {
      return this.isValid ? At(this).weekNumber : NaN;
    }
    /**
     * Get the day of the week.
     * 1 is Monday and 7 is Sunday
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2014, 11, 31).weekday //=> 4
     * @type {number}
     */
    get weekday() {
      return this.isValid ? At(this).weekday : NaN;
    }
    /**
     * Returns true if this date is on a weekend according to the locale, false otherwise
     * @returns {boolean}
     */
    get isWeekend() {
      return this.isValid && this.loc.getWeekendDays().includes(this.weekday);
    }
    /**
     * Get the day of the week according to the locale.
     * 1 is the first day of the week and 7 is the last day of the week.
     * If the locale assigns Sunday as the first day of the week, then a date which is a Sunday will return 1,
     * @returns {number}
     */
    get localWeekday() {
      return this.isValid ? Mt(this).weekday : NaN;
    }
    /**
     * Get the week number of the week year according to the locale. Different locales assign week numbers differently,
     * because the week can start on different days of the week (see localWeekday) and because a different number of days
     * is required for a week to count as the first week of a year.
     * @returns {number}
     */
    get localWeekNumber() {
      return this.isValid ? Mt(this).weekNumber : NaN;
    }
    /**
     * Get the week year according to the locale. Different locales assign week numbers (and therefor week years)
     * differently, see localWeekNumber.
     * @returns {number}
     */
    get localWeekYear() {
      return this.isValid ? Mt(this).weekYear : NaN;
    }
    /**
     * Get the ordinal (meaning the day of the year)
     * @example DateTime.local(2017, 5, 25).ordinal //=> 145
     * @type {number|DateTime}
     */
    get ordinal() {
      return this.isValid ? qt(this.c).ordinal : NaN;
    }
    /**
     * Get the human readable short month name, such as 'Oct'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
     * @type {string}
     */
    get monthShort() {
      return this.isValid ? Ir.months("short", {
        locObj: this.loc
      })[this.month - 1] : null;
    }
    /**
     * Get the human readable long month name, such as 'October'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).monthLong //=> October
     * @type {string}
     */
    get monthLong() {
      return this.isValid ? Ir.months("long", {
        locObj: this.loc
      })[this.month - 1] : null;
    }
    /**
     * Get the human readable short weekday, such as 'Mon'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
     * @type {string}
     */
    get weekdayShort() {
      return this.isValid ? Ir.weekdays("short", {
        locObj: this.loc
      })[this.weekday - 1] : null;
    }
    /**
     * Get the human readable long weekday, such as 'Monday'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
     * @type {string}
     */
    get weekdayLong() {
      return this.isValid ? Ir.weekdays("long", {
        locObj: this.loc
      })[this.weekday - 1] : null;
    }
    /**
     * Get the UTC offset of this DateTime in minutes
     * @example DateTime.now().offset //=> -240
     * @example DateTime.utc().offset //=> 0
     * @type {number}
     */
    get offset() {
      return this.isValid ? +this.o : NaN;
    }
    /**
     * Get the short human name for the zone's current offset, for example "EST" or "EDT".
     * Defaults to the system's locale if no locale has been specified
     * @type {string}
     */
    get offsetNameShort() {
      return this.isValid ? this.zone.offsetName(this.ts, {
        format: "short",
        locale: this.locale
      }) : null;
    }
    /**
     * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
     * Defaults to the system's locale if no locale has been specified
     * @type {string}
     */
    get offsetNameLong() {
      return this.isValid ? this.zone.offsetName(this.ts, {
        format: "long",
        locale: this.locale
      }) : null;
    }
    /**
     * Get whether this zone's offset ever changes, as in a DST.
     * @type {boolean}
     */
    get isOffsetFixed() {
      return this.isValid ? this.zone.isUniversal : null;
    }
    /**
     * Get whether the DateTime is in a DST.
     * @type {boolean}
     */
    get isInDST() {
      return this.isOffsetFixed ? !1 : this.offset > this.set({
        month: 1,
        day: 1
      }).offset || this.offset > this.set({
        month: 5
      }).offset;
    }
    /**
     * Get those DateTimes which have the same local time as this DateTime, but a different offset from UTC
     * in this DateTime's zone. During DST changes local time can be ambiguous, for example
     * `2023-10-29T02:30:00` in `Europe/Berlin` can have offset `+01:00` or `+02:00`.
     * This method will return both possible DateTimes if this DateTime's local time is ambiguous.
     * @returns {DateTime[]}
     */
    getPossibleOffsets() {
      if (!this.isValid || this.isOffsetFixed)
        return [this];
      const e = 864e5, n = 6e4, c = Hr(this.c), d = this.zone.offset(c - e), g = this.zone.offset(c + e), w = this.zone.offset(c - d * n), q = this.zone.offset(c - g * n);
      if (w === q)
        return [this];
      const E = c - w * n, C = c - q * n, F = Kr(E, w), H = Kr(C, q);
      return F.hour === H.hour && F.minute === H.minute && F.second === H.second && F.millisecond === H.millisecond ? [rr(this, {
        ts: E
      }), rr(this, {
        ts: C
      })] : [this];
    }
    /**
     * Returns true if this DateTime is in a leap year, false otherwise
     * @example DateTime.local(2016).isInLeapYear //=> true
     * @example DateTime.local(2013).isInLeapYear //=> false
     * @type {boolean}
     */
    get isInLeapYear() {
      return $r(this.year);
    }
    /**
     * Returns the number of days in this DateTime's month
     * @example DateTime.local(2016, 2).daysInMonth //=> 29
     * @example DateTime.local(2016, 3).daysInMonth //=> 31
     * @type {number}
     */
    get daysInMonth() {
      return zr(this.year, this.month);
    }
    /**
     * Returns the number of days in this DateTime's year
     * @example DateTime.local(2016).daysInYear //=> 366
     * @example DateTime.local(2013).daysInYear //=> 365
     * @type {number}
     */
    get daysInYear() {
      return this.isValid ? sr(this.year) : NaN;
    }
    /**
     * Returns the number of weeks in this DateTime's year
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2004).weeksInWeekYear //=> 53
     * @example DateTime.local(2013).weeksInWeekYear //=> 52
     * @type {number}
     */
    get weeksInWeekYear() {
      return this.isValid ? Er(this.weekYear) : NaN;
    }
    /**
     * Returns the number of weeks in this DateTime's local week year
     * @example DateTime.local(2020, 6, {locale: 'en-US'}).weeksInLocalWeekYear //=> 52
     * @example DateTime.local(2020, 6, {locale: 'de-DE'}).weeksInLocalWeekYear //=> 53
     * @type {number}
     */
    get weeksInLocalWeekYear() {
      return this.isValid ? Er(this.localWeekYear, this.loc.getMinDaysInFirstWeek(), this.loc.getStartOfWeek()) : NaN;
    }
    /**
     * Returns the resolved Intl options for this DateTime.
     * This is useful in understanding the behavior of formatting methods
     * @param {Object} opts - the same options as toLocaleString
     * @return {Object}
     */
    resolvedLocaleOptions(e = {}) {
      const {
        locale: n,
        numberingSystem: c,
        calendar: d
      } = be.create(this.loc.clone(e), e).resolvedOptions(this);
      return {
        locale: n,
        numberingSystem: c,
        outputCalendar: d
      };
    }
    // TRANSFORM
    /**
     * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
     *
     * Equivalent to {@link DateTime#setZone}('utc')
     * @param {number} [offset=0] - optionally, an offset from UTC in minutes
     * @param {Object} [opts={}] - options to pass to `setZone()`
     * @return {DateTime}
     */
    toUTC(e = 0, n = {}) {
      return this.setZone(I.instance(e), n);
    }
    /**
     * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
     *
     * Equivalent to `setZone('local')`
     * @return {DateTime}
     */
    toLocal() {
      return this.setZone(le.defaultZone);
    }
    /**
     * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
     *
     * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link DateTime#plus}. You may wish to use {@link DateTime#toLocal} and {@link DateTime#toUTC} which provide simple convenience wrappers for commonly used zones.
     * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link DateTime#Zone} class.
     * @param {Object} opts - options
     * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
     * @return {DateTime}
     */
    setZone(e, {
      keepLocalTime: n = !1,
      keepCalendarTime: c = !1
    } = {}) {
      if (e = Y(e, le.defaultZone), e.equals(this.zone))
        return this;
      if (e.isValid) {
        let d = this.ts;
        if (n || c) {
          const g = e.offset(this.ts), w = this.toObject();
          [d] = Xr(w, g, e);
        }
        return rr(this, {
          ts: d,
          zone: e
        });
      } else
        return W.invalid(Rr(e));
    }
    /**
     * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
     * @param {Object} properties - the properties to set
     * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
     * @return {DateTime}
     */
    reconfigure({
      locale: e,
      numberingSystem: n,
      outputCalendar: c
    } = {}) {
      const d = this.loc.clone({
        locale: e,
        numberingSystem: n,
        outputCalendar: c
      });
      return rr(this, {
        loc: d
      });
    }
    /**
     * "Set" the locale. Returns a newly-constructed DateTime.
     * Just a convenient alias for reconfigure({ locale })
     * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
     * @return {DateTime}
     */
    setLocale(e) {
      return this.reconfigure({
        locale: e
      });
    }
    /**
     * "Set" the values of specified units. Returns a newly-constructed DateTime.
     * You can only set units with this method; for "setting" metadata, see {@link DateTime#reconfigure} and {@link DateTime#setZone}.
     *
     * This method also supports setting locale-based week units, i.e. `localWeekday`, `localWeekNumber` and `localWeekYear`.
     * They cannot be mixed with ISO-week units like `weekday`.
     * @param {Object} values - a mapping of units to numbers
     * @example dt.set({ year: 2017 })
     * @example dt.set({ hour: 8, minute: 30 })
     * @example dt.set({ weekday: 5 })
     * @example dt.set({ year: 2005, ordinal: 234 })
     * @return {DateTime}
     */
    set(e) {
      if (!this.isValid) return this;
      const n = Zr(e, af), {
        minDaysInFirstWeek: c,
        startOfWeek: d
      } = vl(n, this.loc), g = !V(n.weekYear) || !V(n.weekNumber) || !V(n.weekday), w = !V(n.ordinal), q = !V(n.year), E = !V(n.month) || !V(n.day), C = q || E, F = n.weekYear || n.weekNumber;
      if ((C || w) && F)
        throw new l("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
      if (E && w)
        throw new l("Can't mix ordinal dates with month/day");
      let H;
      g ? H = dl({
        ...Vr(this.c, c, d),
        ...n
      }, c, d) : V(n.ordinal) ? (H = {
        ...this.toObject(),
        ...n
      }, V(n.day) && (H.day = Math.min(zr(H.year, H.month), H.day))) : H = ml({
        ...qt(this.c),
        ...n
      });
      const [ne, j] = Xr(H, this.o, this.zone);
      return rr(this, {
        ts: ne,
        o: j
      });
    }
    /**
     * Add a period of time to this DateTime and return the resulting DateTime
     *
     * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
     * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
     * @example DateTime.now().plus(123) //~> in 123 milliseconds
     * @example DateTime.now().plus({ minutes: 15 }) //~> in 15 minutes
     * @example DateTime.now().plus({ days: 1 }) //~> this time tomorrow
     * @example DateTime.now().plus({ days: -1 }) //~> this time yesterday
     * @example DateTime.now().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
     * @example DateTime.now().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
     * @return {DateTime}
     */
    plus(e) {
      if (!this.isValid) return this;
      const n = Z.fromDurationLike(e);
      return rr(this, rf(this, n));
    }
    /**
     * Subtract a period of time to this DateTime and return the resulting DateTime
     * See {@link DateTime#plus}
     * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
     @return {DateTime}
     */
    minus(e) {
      if (!this.isValid) return this;
      const n = Z.fromDurationLike(e).negate();
      return rr(this, rf(this, n));
    }
    /**
     * "Set" this DateTime to the beginning of a unit of time.
     * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
     * @param {Object} opts - options
     * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week
     * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
     * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
     * @example DateTime.local(2014, 3, 3).startOf('week').toISODate(); //=> '2014-03-03', weeks always start on Mondays
     * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
     * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
     * @return {DateTime}
     */
    startOf(e, {
      useLocaleWeeks: n = !1
    } = {}) {
      if (!this.isValid) return this;
      const c = {}, d = Z.normalizeUnit(e);
      switch (d) {
        case "years":
          c.month = 1;
        // falls through
        case "quarters":
        case "months":
          c.day = 1;
        // falls through
        case "weeks":
        case "days":
          c.hour = 0;
        // falls through
        case "hours":
          c.minute = 0;
        // falls through
        case "minutes":
          c.second = 0;
        // falls through
        case "seconds":
          c.millisecond = 0;
          break;
      }
      if (d === "weeks")
        if (n) {
          const g = this.loc.getStartOfWeek(), {
            weekday: w
          } = this;
          w < g && (c.weekNumber = this.weekNumber - 1), c.weekday = g;
        } else
          c.weekday = 1;
      if (d === "quarters") {
        const g = Math.ceil(this.month / 3);
        c.month = (g - 1) * 3 + 1;
      }
      return this.set(c);
    }
    /**
     * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
     * @param {string} unit - The unit to go to the end of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
     * @param {Object} opts - options
     * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week
     * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
     * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
     * @example DateTime.local(2014, 3, 3).endOf('week').toISO(); // => '2014-03-09T23:59:59.999-05:00', weeks start on Mondays
     * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
     * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
     * @return {DateTime}
     */
    endOf(e, n) {
      return this.isValid ? this.plus({
        [e]: 1
      }).startOf(e, n).minus(1) : this;
    }
    // OUTPUT
    /**
     * Returns a string representation of this DateTime formatted according to the specified format string.
     * **You may not want this.** See {@link DateTime#toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/formatting?id=table-of-tokens).
     * Defaults to en-US if no locale has been specified, regardless of the system's locale.
     * @param {string} fmt - the format string
     * @param {Object} opts - opts to override the configuration options on this DateTime
     * @example DateTime.now().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
     * @example DateTime.now().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
     * @example DateTime.now().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
     * @example DateTime.now().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
     * @return {string}
     */
    toFormat(e, n = {}) {
      return this.isValid ? be.create(this.loc.redefaultToEN(n)).formatDateTimeFromString(this, e) : Ot;
    }
    /**
     * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
     * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
     * of the DateTime in the assigned locale.
     * Defaults to the system's locale if no locale has been specified
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
     * @param formatOpts {Object} - Intl.DateTimeFormat constructor options and configuration options
     * @param {Object} opts - opts to override the configuration options on this DateTime
     * @example DateTime.now().toLocaleString(); //=> 4/20/2017
     * @example DateTime.now().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
     * @example DateTime.now().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
     * @example DateTime.now().toLocaleString(DateTime.DATE_FULL, { locale: 'fr' }); //=> '28 août 2022'
     * @example DateTime.now().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
     * @example DateTime.now().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
     * @example DateTime.now().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
     * @example DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
     * @example DateTime.now().toLocaleString({ hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }); //=> '11:32'
     * @return {string}
     */
    toLocaleString(e = _, n = {}) {
      return this.isValid ? be.create(this.loc.clone(n), e).formatDateTime(this) : Ot;
    }
    /**
     * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
     * Defaults to the system's locale if no locale has been specified
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
     * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
     * @example DateTime.now().toLocaleParts(); //=> [
     *                                   //=>   { type: 'day', value: '25' },
     *                                   //=>   { type: 'literal', value: '/' },
     *                                   //=>   { type: 'month', value: '05' },
     *                                   //=>   { type: 'literal', value: '/' },
     *                                   //=>   { type: 'year', value: '1982' }
     *                                   //=> ]
     */
    toLocaleParts(e = {}) {
      return this.isValid ? be.create(this.loc.clone(e), e).formatDateTimeParts(this) : [];
    }
    /**
     * Returns an ISO 8601-compliant string representation of this DateTime
     * @param {Object} opts - options
     * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
     * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
     * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
     * @param {boolean} [opts.extendedZone=false] - add the time zone format extension
     * @param {string} [opts.format='extended'] - choose between the basic and extended format
     * @param {string} [opts.precision='milliseconds'] - truncate output to desired presicion: 'years', 'months', 'days', 'hours', 'minutes', 'seconds' or 'milliseconds'. When precision and suppressSeconds or suppressMilliseconds are used together, precision sets the maximum unit shown in the output, however seconds or milliseconds will still be suppressed if they are 0.
     * @example DateTime.utc(1983, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
     * @example DateTime.now().toISO() //=> '2017-04-22T20:47:05.335-04:00'
     * @example DateTime.now().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
     * @example DateTime.now().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
     * @example DateTime.now().toISO({ precision: 'day' }) //=> '2017-04-22Z'
     * @example DateTime.now().toISO({ precision: 'minute' }) //=> '2017-04-22T20:47Z'
     * @return {string|null}
     */
    toISO({
      format: e = "extended",
      suppressSeconds: n = !1,
      suppressMilliseconds: c = !1,
      includeOffset: d = !0,
      extendedZone: g = !1,
      precision: w = "milliseconds"
    } = {}) {
      if (!this.isValid)
        return null;
      w = rt(w);
      const q = e === "extended";
      let E = Ct(this, q, w);
      return et.indexOf(w) >= 3 && (E += "T"), E += tf(this, q, n, c, d, g, w), E;
    }
    /**
     * Returns an ISO 8601-compliant string representation of this DateTime's date component
     * @param {Object} opts - options
     * @param {string} [opts.format='extended'] - choose between the basic and extended format
     * @param {string} [opts.precision='day'] - truncate output to desired precision: 'years', 'months', or 'days'.
     * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
     * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
     * @example DateTime.utc(1982, 5, 25).toISODate({ precision: 'month' }) //=> '1982-05'
     * @return {string|null}
     */
    toISODate({
      format: e = "extended",
      precision: n = "day"
    } = {}) {
      return this.isValid ? Ct(this, e === "extended", rt(n)) : null;
    }
    /**
     * Returns an ISO 8601-compliant string representation of this DateTime's week date
     * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
     * @return {string}
     */
    toISOWeekDate() {
      return Qr(this, "kkkk-'W'WW-c");
    }
    /**
     * Returns an ISO 8601-compliant string representation of this DateTime's time component
     * @param {Object} opts - options
     * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
     * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
     * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
     * @param {boolean} [opts.extendedZone=true] - add the time zone format extension
     * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
     * @param {string} [opts.format='extended'] - choose between the basic and extended format
     * @param {string} [opts.precision='milliseconds'] - truncate output to desired presicion: 'hours', 'minutes', 'seconds' or 'milliseconds'. When precision and suppressSeconds or suppressMilliseconds are used together, precision sets the maximum unit shown in the output, however seconds or milliseconds will still be suppressed if they are 0.
     * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
     * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
     * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
     * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ includePrefix: true }) //=> 'T07:34:19.361Z'
     * @example DateTime.utc().set({ hour: 7, minute: 34, second: 56 }).toISOTime({ precision: 'minute' }) //=> '07:34Z'
     * @return {string}
     */
    toISOTime({
      suppressMilliseconds: e = !1,
      suppressSeconds: n = !1,
      includeOffset: c = !0,
      includePrefix: d = !1,
      extendedZone: g = !1,
      format: w = "extended",
      precision: q = "milliseconds"
    } = {}) {
      return this.isValid ? (q = rt(q), (d && et.indexOf(q) >= 3 ? "T" : "") + tf(this, w === "extended", n, e, c, g, q)) : null;
    }
    /**
     * Returns an RFC 2822-compatible string representation of this DateTime
     * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
     * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
     * @return {string}
     */
    toRFC2822() {
      return Qr(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
    }
    /**
     * Returns a string representation of this DateTime appropriate for use in HTTP headers. The output is always expressed in GMT.
     * Specifically, the string conforms to RFC 1123.
     * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
     * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
     * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
     * @return {string}
     */
    toHTTP() {
      return Qr(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
    }
    /**
     * Returns a string representation of this DateTime appropriate for use in SQL Date
     * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
     * @return {string|null}
     */
    toSQLDate() {
      return this.isValid ? Ct(this, !0) : null;
    }
    /**
     * Returns a string representation of this DateTime appropriate for use in SQL Time
     * @param {Object} opts - options
     * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
     * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
     * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
     * @example DateTime.utc().toSQL() //=> '05:15:16.345'
     * @example DateTime.now().toSQL() //=> '05:15:16.345 -04:00'
     * @example DateTime.now().toSQL({ includeOffset: false }) //=> '05:15:16.345'
     * @example DateTime.now().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
     * @return {string}
     */
    toSQLTime({
      includeOffset: e = !0,
      includeZone: n = !1,
      includeOffsetSpace: c = !0
    } = {}) {
      let d = "HH:mm:ss.SSS";
      return (n || e) && (c && (d += " "), n ? d += "z" : e && (d += "ZZ")), Qr(this, d, !0);
    }
    /**
     * Returns a string representation of this DateTime appropriate for use in SQL DateTime
     * @param {Object} opts - options
     * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
     * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
     * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
     * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
     * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
     * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
     * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
     * @return {string}
     */
    toSQL(e = {}) {
      return this.isValid ? `${this.toSQLDate()} ${this.toSQLTime(e)}` : null;
    }
    /**
     * Returns a string representation of this DateTime appropriate for debugging
     * @return {string}
     */
    toString() {
      return this.isValid ? this.toISO() : Ot;
    }
    /**
     * Returns a string representation of this DateTime appropriate for the REPL.
     * @return {string}
     */
    [/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")]() {
      return this.isValid ? `DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }` : `DateTime { Invalid, reason: ${this.invalidReason} }`;
    }
    /**
     * Returns the epoch milliseconds of this DateTime. Alias of {@link DateTime#toMillis}
     * @return {number}
     */
    valueOf() {
      return this.toMillis();
    }
    /**
     * Returns the epoch milliseconds of this DateTime.
     * @return {number}
     */
    toMillis() {
      return this.isValid ? this.ts : NaN;
    }
    /**
     * Returns the epoch seconds (including milliseconds in the fractional part) of this DateTime.
     * @return {number}
     */
    toSeconds() {
      return this.isValid ? this.ts / 1e3 : NaN;
    }
    /**
     * Returns the epoch seconds (as a whole number) of this DateTime.
     * @return {number}
     */
    toUnixInteger() {
      return this.isValid ? Math.floor(this.ts / 1e3) : NaN;
    }
    /**
     * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
     * @return {string}
     */
    toJSON() {
      return this.toISO();
    }
    /**
     * Returns a BSON serializable equivalent to this DateTime.
     * @return {Date}
     */
    toBSON() {
      return this.toJSDate();
    }
    /**
     * Returns a JavaScript object with this DateTime's year, month, day, and so on.
     * @param opts - options for generating the object
     * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
     * @example DateTime.now().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
     * @return {Object}
     */
    toObject(e = {}) {
      if (!this.isValid) return {};
      const n = {
        ...this.c
      };
      return e.includeConfig && (n.outputCalendar = this.outputCalendar, n.numberingSystem = this.loc.numberingSystem, n.locale = this.loc.locale), n;
    }
    /**
     * Returns a JavaScript Date equivalent to this DateTime.
     * @return {Date}
     */
    toJSDate() {
      return new Date(this.isValid ? this.ts : NaN);
    }
    // COMPARE
    /**
     * Return the difference between two DateTimes as a Duration.
     * @param {DateTime} otherDateTime - the DateTime to compare this one to
     * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
     * @param {Object} opts - options that affect the creation of the Duration
     * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
     * @example
     * var i1 = DateTime.fromISO('1982-05-25T09:45'),
     *     i2 = DateTime.fromISO('1983-10-14T10:30');
     * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
     * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
     * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
     * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
     * @return {Duration}
     */
    diff(e, n = "milliseconds", c = {}) {
      if (!this.isValid || !e.isValid)
        return Z.invalid("created by diffing an invalid DateTime");
      const d = {
        locale: this.locale,
        numberingSystem: this.numberingSystem,
        ...c
      }, g = z1(n).map(Z.normalizeUnit), w = e.valueOf() > this.valueOf(), q = w ? this : e, E = w ? e : this, C = Zg(q, E, g, d);
      return w ? C.negate() : C;
    }
    /**
     * Return the difference between this DateTime and right now.
     * See {@link DateTime#diff}
     * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
     * @param {Object} opts - options that affect the creation of the Duration
     * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
     * @return {Duration}
     */
    diffNow(e = "milliseconds", n = {}) {
      return this.diff(W.now(), e, n);
    }
    /**
     * Return an Interval spanning between this DateTime and another DateTime
     * @param {DateTime} otherDateTime - the other end point of the Interval
     * @return {Interval|DateTime}
     */
    until(e) {
      return this.isValid ? fe.fromDateTimes(this, e) : this;
    }
    /**
     * Return whether this DateTime is in the same unit of time as another DateTime.
     * Higher-order units must also be identical for this function to return `true`.
     * Note that time zones are **ignored** in this comparison, which compares the **local** calendar time. Use {@link DateTime#setZone} to convert one of the dates if needed.
     * @param {DateTime} otherDateTime - the other DateTime
     * @param {string} unit - the unit of time to check sameness on
     * @param {Object} opts - options
     * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week; only the locale of this DateTime is used
     * @example DateTime.now().hasSame(otherDT, 'day'); //~> true if otherDT is in the same current calendar day
     * @return {boolean}
     */
    hasSame(e, n, c) {
      if (!this.isValid) return !1;
      const d = e.valueOf(), g = this.setZone(e.zone, {
        keepLocalTime: !0
      });
      return g.startOf(n, c) <= d && d <= g.endOf(n, c);
    }
    /**
     * Equality check
     * Two DateTimes are equal if and only if they represent the same millisecond, have the same zone and location, and are both valid.
     * To compare just the millisecond values, use `+dt1 === +dt2`.
     * @param {DateTime} other - the other DateTime
     * @return {boolean}
     */
    equals(e) {
      return this.isValid && e.isValid && this.valueOf() === e.valueOf() && this.zone.equals(e.zone) && this.loc.equals(e.loc);
    }
    /**
     * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
     * platform supports Intl.RelativeTimeFormat. Rounds towards zero by default.
     * @param {Object} options - options that affect the output
     * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
     * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
     * @param {string|string[]} options.unit - use a specific unit or array of units; if omitted, or an array, the method will pick the best unit. Use an array or one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
     * @param {boolean} [options.round=true] - whether to round the numbers in the output.
     * @param {string} [options.rounding="trunc"] - rounding method to use when rounding the numbers in the output. Can be "trunc" (toward zero), "expand" (away from zero), "round", "floor", or "ceil".
     * @param {number} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
     * @param {string} options.locale - override the locale of this DateTime
     * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
     * @example DateTime.now().plus({ days: 1 }).toRelative() //=> "in 1 day"
     * @example DateTime.now().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
     * @example DateTime.now().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
     * @example DateTime.now().minus({ days: 2 }).toRelative() //=> "2 days ago"
     * @example DateTime.now().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
     * @example DateTime.now().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
     */
    toRelative(e = {}) {
      if (!this.isValid) return null;
      const n = e.base || W.fromObject({}, {
        zone: this.zone
      }), c = e.padding ? this < n ? -e.padding : e.padding : 0;
      let d = ["years", "months", "days", "hours", "minutes", "seconds"], g = e.unit;
      return Array.isArray(e.unit) && (d = e.unit, g = void 0), uf(n, this.plus(c), {
        ...e,
        numeric: "always",
        units: d,
        unit: g
      });
    }
    /**
     * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
     * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
     * @param {Object} options - options that affect the output
     * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
     * @param {string} options.locale - override the locale of this DateTime
     * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
     * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
     * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
     * @example DateTime.now().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
     * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
     * @example DateTime.now().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
     */
    toRelativeCalendar(e = {}) {
      return this.isValid ? uf(e.base || W.fromObject({}, {
        zone: this.zone
      }), this, {
        ...e,
        numeric: "auto",
        units: ["years", "months", "days"],
        calendary: !0
      }) : null;
    }
    /**
     * Return the min of several date times
     * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
     * @return {DateTime} the min DateTime, or undefined if called with no argument
     */
    static min(...e) {
      if (!e.every(W.isDateTime))
        throw new v("min requires all arguments be DateTimes");
      return wl(e, (n) => n.valueOf(), Math.min);
    }
    /**
     * Return the max of several date times
     * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
     * @return {DateTime} the max DateTime, or undefined if called with no argument
     */
    static max(...e) {
      if (!e.every(W.isDateTime))
        throw new v("max requires all arguments be DateTimes");
      return wl(e, (n) => n.valueOf(), Math.max);
    }
    // MISC
    /**
     * Explain how a string would be parsed by fromFormat()
     * @param {string} text - the string to parse
     * @param {string} fmt - the format the string is expected to be in (see description)
     * @param {Object} options - options taken by fromFormat()
     * @return {Object}
     */
    static fromFormatExplain(e, n, c = {}) {
      const {
        locale: d = null,
        numberingSystem: g = null
      } = c, w = b.fromOpts({
        locale: d,
        numberingSystem: g,
        defaultToEN: !0
      });
      return Kl(w, e, n);
    }
    /**
     * @deprecated use fromFormatExplain instead
     */
    static fromStringExplain(e, n, c = {}) {
      return W.fromFormatExplain(e, n, c);
    }
    /**
     * Build a parser for `fmt` using the given locale. This parser can be passed
     * to {@link DateTime.fromFormatParser} to a parse a date in this format. This
     * can be used to optimize cases where many dates need to be parsed in a
     * specific format.
     *
     * @param {String} fmt - the format the string is expected to be in (see
     * description)
     * @param {Object} options - options used to set locale and numberingSystem
     * for parser
     * @returns {TokenParser} - opaque object to be used
     */
    static buildFormatParser(e, n = {}) {
      const {
        locale: c = null,
        numberingSystem: d = null
      } = n, g = b.fromOpts({
        locale: c,
        numberingSystem: d,
        defaultToEN: !0
      });
      return new Jl(g, e);
    }
    /**
     * Create a DateTime from an input string and format parser.
     *
     * The format parser must have been created with the same locale as this call.
     *
     * @param {String} text - the string to parse
     * @param {TokenParser} formatParser - parser from {@link DateTime.buildFormatParser}
     * @param {Object} opts - options taken by fromFormat()
     * @returns {DateTime}
     */
    static fromFormatParser(e, n, c = {}) {
      if (V(e) || V(n))
        throw new v("fromFormatParser requires an input string and a format parser");
      const {
        locale: d = null,
        numberingSystem: g = null
      } = c, w = b.fromOpts({
        locale: d,
        numberingSystem: g,
        defaultToEN: !0
      });
      if (!w.equals(n.locale))
        throw new v(`fromFormatParser called with a locale of ${w}, but the format parser was created for ${n.locale}`);
      const {
        result: q,
        zone: E,
        specificOffset: C,
        invalidReason: F
      } = n.explainFromTokens(e);
      return F ? W.invalid(F) : mr(q, E, c, `format ${n.format}`, e, C);
    }
    // FORMAT PRESETS
    /**
     * {@link DateTime#toLocaleString} format like 10/14/1983
     * @type {Object}
     */
    static get DATE_SHORT() {
      return _;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'Oct 14, 1983'
     * @type {Object}
     */
    static get DATE_MED() {
      return $;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'Fri, Oct 14, 1983'
     * @type {Object}
     */
    static get DATE_MED_WITH_WEEKDAY() {
      return x;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'October 14, 1983'
     * @type {Object}
     */
    static get DATE_FULL() {
      return T;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'Tuesday, October 14, 1983'
     * @type {Object}
     */
    static get DATE_HUGE() {
      return A;
    }
    /**
     * {@link DateTime#toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
    static get TIME_SIMPLE() {
      return k;
    }
    /**
     * {@link DateTime#toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
    static get TIME_WITH_SECONDS() {
      return M;
    }
    /**
     * {@link DateTime#toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */
    static get TIME_WITH_SHORT_OFFSET() {
      return L;
    }
    /**
     * {@link DateTime#toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */
    static get TIME_WITH_LONG_OFFSET() {
      return U;
    }
    /**
     * {@link DateTime#toLocaleString} format like '09:30', always 24-hour.
     * @type {Object}
     */
    static get TIME_24_SIMPLE() {
      return N;
    }
    /**
     * {@link DateTime#toLocaleString} format like '09:30:23', always 24-hour.
     * @type {Object}
     */
    static get TIME_24_WITH_SECONDS() {
      return P;
    }
    /**
     * {@link DateTime#toLocaleString} format like '09:30:23 EDT', always 24-hour.
     * @type {Object}
     */
    static get TIME_24_WITH_SHORT_OFFSET() {
      return ae;
    }
    /**
     * {@link DateTime#toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
     * @type {Object}
     */
    static get TIME_24_WITH_LONG_OFFSET() {
      return ee;
    }
    /**
     * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
    static get DATETIME_SHORT() {
      return B;
    }
    /**
     * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
    static get DATETIME_SHORT_WITH_SECONDS() {
      return z;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
    static get DATETIME_MED() {
      return he;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
    static get DATETIME_MED_WITH_SECONDS() {
      return D;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
    static get DATETIME_MED_WITH_WEEKDAY() {
      return ge;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */
    static get DATETIME_FULL() {
      return re;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */
    static get DATETIME_FULL_WITH_SECONDS() {
      return we;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */
    static get DATETIME_HUGE() {
      return se;
    }
    /**
     * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */
    static get DATETIME_HUGE_WITH_SECONDS() {
      return Ie;
    }
  }
  function Ar(u) {
    if (W.isDateTime(u))
      return u;
    if (u && u.valueOf && He(u.valueOf()))
      return W.fromJSDate(u);
    if (u && typeof u == "object")
      return W.fromObject(u);
    throw new v(`Unknown datetime argument: ${u}, of type ${typeof u}`);
  }
  const hb = "3.7.2";
  return _e.DateTime = W, _e.Duration = Z, _e.FixedOffsetZone = I, _e.IANAZone = ve, _e.Info = Ir, _e.Interval = fe, _e.InvalidZone = G, _e.Settings = le, _e.SystemZone = ue, _e.VERSION = hb, _e.Zone = qe, _e;
}
var Mc, l0;
function sT() {
  if (l0) return Mc;
  l0 = 1;
  const { DateTime: r } = /* @__PURE__ */ aT(), { IncorrectUsageError: t } = k1, a = {
    invalidInterval: 'Invalid interval specified. Only "month" value is accepted.'
  };
  return Mc = {
    lastPeriodStart: (f, v) => {
      if (v === "month") {
        const h = r.fromISO(f, { zone: "UTC" }), p = r.now().setZone("UTC"), O = Math.floor(p.diff(h, "months").months);
        return h.plus({ months: O }).toISO();
      }
      throw new t({
        message: a.invalidInterval
      });
    },
    SUPPORTED_INTERVALS: ["month"]
  }, Mc;
}
var Cc, f0;
function uT() {
  if (f0) return Cc;
  f0 = 1;
  const r = HE(), t = iT(), { lastPeriodStart: a, SUPPORTED_INTERVALS: i } = sT(), l = /{{([\s\S]+?)}}/g;
  class f {
    /**
     *
     * @param {Object} options
     * @param {String} options.name - name of the limit
     * @param {String} options.error - error message to use when limit is reached
     * @param {String} options.helpLink - URL to the resource explaining how the limit works
     * @param {Object} [options.db] - instance of knex db connection that currentCountQuery can use to run state check through
     * @param {Object} options.errors - instance of errors compatible with GhostError errors (@tryghost/errors)
     */
    constructor({ name: _, error: $, helpLink: x, db: T, errors: A }) {
      this.name = _, this.error = $, this.helpLink = x, this.db = T, this.errors = A;
    }
    generateError() {
      let _ = {
        errorDetails: {
          name: this.name
        }
      };
      return this.helpLink && (_.help = this.helpLink), _;
    }
  }
  class v extends f {
    /**
     *
     * @param {Object} options
     * @param {String} options.name - name of the limit
     * @param {Object} options.config - limit configuration
     * @param {Number} options.config.max - maximum limit the limit would check against
     * @param {Function} options.config.currentCountQuery - query checking the state that would be compared against the limit
     * @param {Function} [options.config.formatter] - function to format the limit counts before they are passed to the error message
     * @param {String} [options.config.error] - error message to use when limit is reached
     * @param {String} [options.helpLink] - URL to the resource explaining how the limit works
     * @param {Object} [options.db] - instance of knex db connection that currentCountQuery can use to run state check through
     * @param {Object} options.errors - instance of errors compatible with GhostError errors (@tryghost/errors)
     */
    constructor({ name: _, config: $, helpLink: x, db: T, errors: A }) {
      if (super({ name: _, error: $.error || "", helpLink: x, db: T, errors: A }), $.max === void 0)
        throw new A.IncorrectUsageError({ message: "Attempted to setup a max limit without a limit" });
      if (!$.currentCountQuery)
        throw new A.IncorrectUsageError({ message: "Attempted to setup a max limit without a current count query" });
      this.currentCountQueryFn = $.currentCountQuery, this.max = $.max, this.formatter = $.formatter, this.fallbackMessage = `This action would exceed the ${r(this.name)} limit on your current plan.`;
    }
    /**
     *
     * @param {Number} count - current count that acceded the limit
     * @returns {Object} instance of HostLimitError
     */
    generateError(_) {
      let $ = super.generateError();
      if ($.message = this.fallbackMessage, this.error) {
        const x = this.formatter || Intl.NumberFormat().format;
        try {
          $.message = t(this.error, { interpolate: l })(
            {
              max: x(this.max),
              count: x(_),
              name: this.name
            }
          );
        } catch {
          $.message = this.fallbackMessage;
        }
      }
      return $.errorDetails.limit = this.max, $.errorDetails.total = _, new this.errors.HostLimitError($);
    }
    /**
     * @param {Object} [options]
     * @param {Object} [options.transacting] Transaction to run the count query on
     * @returns
     */
    async currentCountQuery(_ = {}) {
      return await this.currentCountQueryFn(_.transacting ?? this.db?.knex);
    }
    /**
     * Throws a HostLimitError if the configured or passed max limit is acceded by currentCountQuery
     *
     * @param {Object} options
     * @param {Number} [options.max] - overrides configured default max value to perform checks against
     * @param {Number} [options.addedCount] - number of items to add to the currentCount during the check
     * @param {Object} [options.transacting] Transaction to run the count query on
     */
    async errorIfWouldGoOverLimit(_ = {}) {
      const { max: $, addedCount: x = 1 } = _;
      let T = await this.currentCountQuery(_);
      if (T + x > ($ || this.max))
        throw this.generateError(T);
    }
    /**
     * Throws a HostLimitError if the configured or passed max limit is acceded by currentCountQuery
     *
     * @param {Object} options
     * @param {Number} [options.max] - overrides configured default max value to perform checks against
     * @param {Number} [options.currentCount] - overrides currentCountQuery to perform checks against
     * @param {Object} [options.transacting] Transaction to run the count query on
     */
    async errorIfIsOverLimit(_ = {}) {
      const $ = _.currentCount || await this.currentCountQuery(_);
      if ($ > (_.max || this.max))
        throw this.generateError($);
    }
  }
  class h extends f {
    /**
     *
     * @param {Object} options
     * @param {String} options.name - name of the limit
     * @param {Object} options.config - limit configuration
     * @param {Number} options.config.maxPeriodic - maximum limit the limit would check against
     * @param {String} options.config.error - error message to use when limit is reached
     * @param {Function} options.config.currentCountQuery - query checking the state that would be compared against the limit
     * @param {('month')} options.config.interval - an interval to take into account when checking the limit. Currently only supports 'month' value
     * @param {String} options.config.startDate - start date in ISO 8601 format (https://en.wikipedia.org/wiki/ISO_8601), used to calculate period intervals
     * @param {String} options.helpLink - URL to the resource explaining how the limit works
     * @param {Object} [options.db] - instance of knex db connection that currentCountQuery can use to run state check through
     * @param {Object} options.errors - instance of errors compatible with GhostError errors (@tryghost/errors)
     */
    constructor({ name: _, config: $, helpLink: x, db: T, errors: A }) {
      if (super({ name: _, error: $.error || "", helpLink: x, db: T, errors: A }), $.maxPeriodic === void 0)
        throw new A.IncorrectUsageError({ message: "Attempted to setup a periodic max limit without a limit" });
      if (!$.currentCountQuery)
        throw new A.IncorrectUsageError({ message: "Attempted to setup a periodic max limit without a current count query" });
      if (!$.interval)
        throw new A.IncorrectUsageError({ message: "Attempted to setup a periodic max limit without an interval" });
      if (!i.includes($.interval))
        throw new A.IncorrectUsageError({ message: `Attempted to setup a periodic max limit without unsupported interval. Please specify one of: ${i}` });
      if (!$.startDate)
        throw new A.IncorrectUsageError({ message: "Attempted to setup a periodic max limit without a start date" });
      this.currentCountQueryFn = $.currentCountQuery, this.maxPeriodic = $.maxPeriodic, this.interval = $.interval, this.startDate = $.startDate, this.fallbackMessage = `This action would exceed the ${r(this.name)} limit on your current plan.`;
    }
    generateError(_) {
      let $ = super.generateError();
      if ($.message = this.fallbackMessage, this.error)
        try {
          $.message = t(this.error, { interpolate: l })(
            {
              max: Intl.NumberFormat().format(this.maxPeriodic),
              count: Intl.NumberFormat().format(_),
              name: this.name
            }
          );
        } catch {
          $.message = this.fallbackMessage;
        }
      return $.errorDetails.limit = this.maxPeriodic, $.errorDetails.total = _, new this.errors.HostLimitError($);
    }
    /**
     * @param {Object} [options]
     * @param {Object} [options.transacting] Transaction to run the count query on
     * @returns
     */
    async currentCountQuery(_ = {}) {
      const $ = a(this.startDate, this.interval);
      return await this.currentCountQueryFn(_.transacting ? _.transacting : this.db ? this.db.knex : void 0, $);
    }
    /**
     * Throws a HostLimitError if the configured or passed max limit is acceded by currentCountQuery
     *
     * @param {Object} options
     * @param {Number} [options.max] - overrides configured default maxPeriodic value to perform checks against
     * @param {Number} [options.addedCount] - number of items to add to the currentCount during the check
     * @param {Object} [options.transacting] Transaction to run the count query on
     */
    async errorIfWouldGoOverLimit(_ = {}) {
      const { max: $, addedCount: x = 1 } = _;
      let T = await this.currentCountQuery(_);
      if (T + x > ($ || this.maxPeriodic))
        throw this.generateError(T);
    }
    /**
     * Throws a HostLimitError if the configured or passed max limit is acceded by currentCountQuery
     *
     * @param {Object} options
     * @param {Number} [options.max] - overrides configured default maxPeriodic value to perform checks against
     * @param {Object} [options.transacting] Transaction to run the count query on
     */
    async errorIfIsOverLimit(_ = {}) {
      const { max: $ } = _;
      let x = await this.currentCountQuery(_);
      if (x > ($ || this.maxPeriodic))
        throw this.generateError(x);
    }
  }
  class p extends f {
    /**
     *
     * @param {Object} options
     * @param {String} options.name - name of the limit
     * @param {Object} options.config - limit configuration
     * @param {Number} options.config.disabled - disabled/enabled flag for the limit
     * @param {String} options.config.error - error message to use when limit is reached
     * @param {String} options.helpLink - URL to the resource explaining how the limit works
     * @param {Object} [options.db] - instance of knex db connection that currentCountQuery can use to run state check through
     * @param {Object} options.errors - instance of errors compatible with GhostError errors (@tryghost/errors)
     */
    constructor({ name: _, config: $, helpLink: x, db: T, errors: A }) {
      super({ name: _, error: $.error || "", helpLink: x, db: T, errors: A });
      const k = r(_.replace(/^limit/, ""));
      this.disabled = $.disabled, this.fallbackMessage = `Your plan does not support ${k}. Please upgrade to enable ${k}.`;
    }
    generateError() {
      let _ = super.generateError();
      return this.error ? _.message = this.error : _.message = this.fallbackMessage, new this.errors.HostLimitError(_);
    }
    /**
     * Flag limits are on/off so using a feature is always over the limit
     */
    async errorIfWouldGoOverLimit() {
      if (this.disabled)
        throw this.generateError();
    }
    /**
     * Flag limits are on/off. They don't necessarily mean the limit wasn't possible to reach
     * NOTE: this method should not be relied on as it's impossible to check the limit was surpassed!
     */
    async errorIfIsOverLimit() {
    }
    /**
     * Checks whether the Flag limit is disabled or not
     * @returns boolean
     */
    isDisabled() {
      return !!this.disabled;
    }
  }
  class O extends f {
    /**
     *
     * @param {Object} options
     * @param {String} options.name - name of the limit
     * @param {Object} options.config - limit configuration
     * @param {[String]} options.config.allowlist - allowlist values that would be compared against
     * @param {String} options.config.error - error message to use when limit is reached
     * @param {String} options.helpLink - URL to the resource explaining how the limit works
     * @param {Object} options.errors - instance of errors compatible with GhostError errors (@tryghost/errors)
     */
    constructor({ name: _, config: $, helpLink: x, errors: T }) {
      if (super({ name: _, error: $.error || "", helpLink: x, errors: T }), !$.allowlist || !$.allowlist.length)
        throw new this.errors.IncorrectUsageError({ message: "Attempted to setup an allowlist limit without an allowlist" });
      this.allowlist = $.allowlist, this.fallbackMessage = `This action would exceed the ${r(this.name)} limit on your current plan.`;
    }
    generateError() {
      let _ = super.generateError();
      return this.error ? _.message = this.error : _.message = this.fallbackMessage, new this.errors.HostLimitError(_);
    }
    async errorIfWouldGoOverLimit(_) {
      if (!_ || !_.value)
        throw new this.errors.IncorrectUsageError({ message: "Attempted to check an allowlist limit without a value" });
      if (!this.allowlist.includes(_.value))
        throw this.generateError();
    }
    async errorIfIsOverLimit(_) {
      if (!_ || !_.value)
        throw new this.errors.IncorrectUsageError({ message: "Attempted to check an allowlist limit without a value" });
      if (!this.allowlist.includes(_.value))
        throw this.generateError();
    }
  }
  return Cc = {
    MaxLimit: v,
    MaxPeriodicLimit: h,
    FlagLimit: p,
    AllowlistLimit: O
  }, Cc;
}
var Lc, h0;
function oT() {
  return h0 || (h0 = 1, Lc = {
    members: {
      currentCountQuery: async (r) => (await r("members").count("id", { as: "count" }).first()).count
    },
    newsletters: {
      currentCountQuery: async (r) => (await r("newsletters").count("id", { as: "count" }).where("status", "=", "active").first()).count
    },
    emails: {
      currentCountQuery: async (r, t) => (await r("emails").sum("email_count", { as: "count" }).where("created_at", ">=", t).first()).count
    },
    staff: {
      currentCountQuery: async (r) => (await r("users").select("users.id").leftJoin("roles_users", "users.id", "roles_users.user_id").leftJoin("roles", "roles_users.role_id", "roles.id").whereNot("roles.name", "Contributor").andWhereNot("users.status", "inactive").union([
        r("invites").select("invites.id").leftJoin("roles", "invites.role_id", "roles.id").whereNot("roles.name", "Contributor")
      ])).length
    },
    customIntegrations: {},
    customThemes: {},
    uploads: {
      // NOTE: this function should not ever be used as for uploads we compare the size
      //       of the uploaded file with the configured limit. Noop is here to keep the
      //       MaxLimit constructor happy
      currentCountQuery: () => {
      },
      // NOTE: the uploads limit is based on file sizes provided in Bytes
      //       a custom formatter is here for more user-friendly formatting when forming an error
      formatter: (r) => `${r / 1e6}MB`
    },
    limitStripeConnect: {},
    limitAnalytics: {},
    limitSocialWeb: {},
    publicSiteAccess: {}
  }), Lc;
}
var kc, d0;
function cT() {
  if (d0) return kc;
  d0 = 1;
  const r = Dw(), t = Uw(), { IncorrectUsageError: a } = k1, { MaxLimit: i, MaxPeriodicLimit: l, FlagLimit: f, AllowlistLimit: v } = uT(), h = oT(), p = {
    missingErrorsConfig: "Config Missing: 'errors' is required.",
    noSubscriptionParameter: "Attempted to setup a periodic max limit without a subscription"
  };
  class O {
    constructor() {
      this.limits = {};
    }
    /**
     * Initializes the limits based on configuration
     *
     * @param {Object} options
     * @param {Object} [options.limits] - hash containing limit configurations keyed by limit name and containing
     * @param {Object} [options.subscription] - hash containing subscription configuration with interval and startDate properties
     * @param {String} options.helpLink - URL pointing to help resources for when limit is reached
     * @param {Object} options.db - knex db connection instance or other data source for the limit checks
     * @param {Object} options.errors - instance of errors compatible with GhostError errors (@tryghost/errors)
     */
    loadLimits({ limits: _ = {}, subscription: $, helpLink: x, db: T, errors: A }) {
      if (!A)
        throw new a({
          message: p.missingErrorsConfig
        });
      this.errors = A, this.limits = {}, Object.keys(_).forEach((k) => {
        if (k = r(k), h[k]) {
          let M = Object.assign({}, h[k], _[k]);
          if (t(M, "allowlist"))
            this.limits[k] = new v({ name: k, config: M, helpLink: x, errors: A });
          else if (t(M, "max"))
            this.limits[k] = new i({ name: k, config: M, helpLink: x, db: T, errors: A });
          else if (t(M, "maxPeriodic")) {
            if ($ === void 0)
              throw new a({
                message: p.noSubscriptionParameter
              });
            const L = Object.assign({}, M, $);
            this.limits[k] = new l({ name: k, config: L, helpLink: x, db: T, errors: A });
          } else
            this.limits[k] = new f({ name: k, config: M, helpLink: x, errors: A });
        }
      });
    }
    isLimited(_) {
      return !!this.limits[r(_)];
    }
    /**
    * Check if a limit is disabled, applicable only to limits that support the disabled flag (e.g. FlagLimit)
    * @returns {boolean|undefined} undefined if limit is not configured
    * @throws {IncorrectUsageError} if limit does not support disabled flag
    */
    isDisabled(_) {
      if (!this.isLimited(_))
        return;
      const $ = this.limits[r(_)];
      if (typeof $.isDisabled != "function")
        throw new a({
          message: `Limit ${_} does not support .isDisabled()`
        });
      return $.isDisabled();
    }
    /**
     *
     * @param {String} limitName - name of the configured limit
     * @param {Object} [options] - limit parameters
     * @param {Object} [options.transacting] Transaction to run the count query on (if required for the chosen limit)
     * @returns
     */
    async checkIsOverLimit(_, $ = {}) {
      if (this.isLimited(_))
        try {
          return await this.limits[_].errorIfIsOverLimit($), !1;
        } catch (x) {
          if (x instanceof this.errors.HostLimitError)
            return !0;
          throw x;
        }
    }
    /**
     *
     * @param {String} limitName - name of the configured limit
     * @param {Object} [options] - limit parameters
     * @param {Object} [options.transacting] Transaction to run the count query on (if required for the chosen limit)
     * @returns
     */
    async checkWouldGoOverLimit(_, $ = {}) {
      if (this.isLimited(_))
        try {
          return await this.limits[_].errorIfWouldGoOverLimit($), !1;
        } catch (x) {
          if (x instanceof this.errors.HostLimitError)
            return !0;
          throw x;
        }
    }
    /**
     *
     * @param {String} limitName - name of the configured limit
     * @param {Object} [options] - limit parameters
     * @param {Object} [options.transacting] Transaction to run the count query on (if required for the chosen limit)
     * @returns
     */
    async errorIfIsOverLimit(_, $ = {}) {
      this.isLimited(_) && await this.limits[_].errorIfIsOverLimit($);
    }
    /**
     *
     * @param {String} limitName - name of the configured limit
     * @param {Object} [options] - limit parameters
     * @param {Object} [options.transacting] Transaction to run the count query on (if required for the chosen limit)
     * @returns
     */
    async errorIfWouldGoOverLimit(_, $ = {}) {
      this.isLimited(_) && await this.limits[_].errorIfWouldGoOverLimit($);
    }
    /**
     * Checks if any of the configured limits acceded
     *
     * @param {Object} [options] - limit parameters
     * @param {Object} [options.transacting] Transaction to run the count queries on (if required for the chosen limit)
     * @returns {Promise<boolean>}
     */
    async checkIfAnyOverLimit(_ = {}) {
      for (const $ in this.limits)
        if (await this.checkIsOverLimit($, _))
          return !0;
      return !1;
    }
  }
  return kc = O, kc;
}
var Nc, m0;
function lT() {
  return m0 || (m0 = 1, Nc = cT()), Nc;
}
var D1 = lT();
const fT = /* @__PURE__ */ v0(D1), vT = /* @__PURE__ */ bb({
  __proto__: null,
  default: fT
}, [D1]);
export {
  vT as i
};
//# sourceMappingURL=index-B65inCwj.js.map
