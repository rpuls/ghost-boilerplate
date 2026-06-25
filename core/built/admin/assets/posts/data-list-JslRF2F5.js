import { h as Gg } from "./check-fsC5BvGC.js";
import { j as En, z as ae, N as Ge, C as Nt, h as se, a1 as E, P as Wt, x as bn, ak as Bn, ac as F0, am as xl, a6 as U0, a9 as _l, af as Ol, g as be, l as ji, a7 as rt, k as _t, a as W0, ab as z0, R as Y, i as we } from "./index-Dqn5WIFh.js";
import { i as Mi, a as H0 } from "./value-CcwzOh2_.js";
const G0 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], TR = Gg("arrow-right", G0);
const K0 = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], ER = Gg("arrow-up", K0);
var fa, Af;
function Ie() {
  if (Af) return fa;
  Af = 1;
  var e = Array.isArray;
  return fa = e, fa;
}
var ha, Pf;
function Kg() {
  if (Pf) return ha;
  Pf = 1;
  var e = typeof En == "object" && En && En.Object === Object && En;
  return ha = e, ha;
}
var pa, Tf;
function nt() {
  if (Tf) return pa;
  Tf = 1;
  var e = Kg(), t = typeof self == "object" && self && self.Object === Object && self, r = e || t || Function("return this")();
  return pa = r, pa;
}
var da, Ef;
function wn() {
  if (Ef) return da;
  Ef = 1;
  var e = nt(), t = e.Symbol;
  return da = t, da;
}
var va, jf;
function X0() {
  if (jf) return va;
  jf = 1;
  var e = wn(), t = Object.prototype, r = t.hasOwnProperty, n = t.toString, i = e ? e.toStringTag : void 0;
  function a(o) {
    var u = r.call(o, i), s = o[i];
    try {
      o[i] = void 0;
      var c = !0;
    } catch {
    }
    var f = n.call(o);
    return c && (u ? o[i] = s : delete o[i]), f;
  }
  return va = a, va;
}
var ya, Mf;
function V0() {
  if (Mf) return ya;
  Mf = 1;
  var e = Object.prototype, t = e.toString;
  function r(n) {
    return t.call(n);
  }
  return ya = r, ya;
}
var ga, Cf;
function pt() {
  if (Cf) return ga;
  Cf = 1;
  var e = wn(), t = X0(), r = V0(), n = "[object Null]", i = "[object Undefined]", a = e ? e.toStringTag : void 0;
  function o(u) {
    return u == null ? u === void 0 ? i : n : a && a in Object(u) ? t(u) : r(u);
  }
  return ga = o, ga;
}
var ma, If;
function dt() {
  if (If) return ma;
  If = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return ma = e, ma;
}
var ba, $f;
function wr() {
  if ($f) return ba;
  $f = 1;
  var e = pt(), t = dt(), r = "[object Symbol]";
  function n(i) {
    return typeof i == "symbol" || t(i) && e(i) == r;
  }
  return ba = n, ba;
}
var wa, Rf;
function Sl() {
  if (Rf) return wa;
  Rf = 1;
  var e = Ie(), t = wr(), r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
  function i(a, o) {
    if (e(a))
      return !1;
    var u = typeof a;
    return u == "number" || u == "symbol" || u == "boolean" || a == null || t(a) ? !0 : n.test(a) || !r.test(a) || o != null && a in Object(o);
  }
  return wa = i, wa;
}
var xa, Df;
function Ot() {
  if (Df) return xa;
  Df = 1;
  function e(t) {
    var r = typeof t;
    return t != null && (r == "object" || r == "function");
  }
  return xa = e, xa;
}
var _a, Nf;
function Al() {
  if (Nf) return _a;
  Nf = 1;
  var e = pt(), t = Ot(), r = "[object AsyncFunction]", n = "[object Function]", i = "[object GeneratorFunction]", a = "[object Proxy]";
  function o(u) {
    if (!t(u))
      return !1;
    var s = e(u);
    return s == n || s == i || s == r || s == a;
  }
  return _a = o, _a;
}
var Oa, qf;
function Y0() {
  if (qf) return Oa;
  qf = 1;
  var e = nt(), t = e["__core-js_shared__"];
  return Oa = t, Oa;
}
var Sa, kf;
function Z0() {
  if (kf) return Sa;
  kf = 1;
  var e = Y0(), t = (function() {
    var n = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  })();
  function r(n) {
    return !!t && t in n;
  }
  return Sa = r, Sa;
}
var Aa, Lf;
function Xg() {
  if (Lf) return Aa;
  Lf = 1;
  var e = Function.prototype, t = e.toString;
  function r(n) {
    if (n != null) {
      try {
        return t.call(n);
      } catch {
      }
      try {
        return n + "";
      } catch {
      }
    }
    return "";
  }
  return Aa = r, Aa;
}
var Pa, Bf;
function J0() {
  if (Bf) return Pa;
  Bf = 1;
  var e = Al(), t = Z0(), r = Ot(), n = Xg(), i = /[\\^$.*+?()[\]{}|]/g, a = /^\[object .+?Constructor\]$/, o = Function.prototype, u = Object.prototype, s = o.toString, c = u.hasOwnProperty, f = RegExp(
    "^" + s.call(c).replace(i, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function l(h) {
    if (!r(h) || t(h))
      return !1;
    var d = e(h) ? f : a;
    return d.test(n(h));
  }
  return Pa = l, Pa;
}
var Ta, Ff;
function Q0() {
  if (Ff) return Ta;
  Ff = 1;
  function e(t, r) {
    return t?.[r];
  }
  return Ta = e, Ta;
}
var Ea, Uf;
function zt() {
  if (Uf) return Ea;
  Uf = 1;
  var e = J0(), t = Q0();
  function r(n, i) {
    var a = t(n, i);
    return e(a) ? a : void 0;
  }
  return Ea = r, Ea;
}
var ja, Wf;
function Ci() {
  if (Wf) return ja;
  Wf = 1;
  var e = zt(), t = e(Object, "create");
  return ja = t, ja;
}
var Ma, zf;
function ew() {
  if (zf) return Ma;
  zf = 1;
  var e = Ci();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return Ma = t, Ma;
}
var Ca, Hf;
function tw() {
  if (Hf) return Ca;
  Hf = 1;
  function e(t) {
    var r = this.has(t) && delete this.__data__[t];
    return this.size -= r ? 1 : 0, r;
  }
  return Ca = e, Ca;
}
var Ia, Gf;
function rw() {
  if (Gf) return Ia;
  Gf = 1;
  var e = Ci(), t = "__lodash_hash_undefined__", r = Object.prototype, n = r.hasOwnProperty;
  function i(a) {
    var o = this.__data__;
    if (e) {
      var u = o[a];
      return u === t ? void 0 : u;
    }
    return n.call(o, a) ? o[a] : void 0;
  }
  return Ia = i, Ia;
}
var $a, Kf;
function nw() {
  if (Kf) return $a;
  Kf = 1;
  var e = Ci(), t = Object.prototype, r = t.hasOwnProperty;
  function n(i) {
    var a = this.__data__;
    return e ? a[i] !== void 0 : r.call(a, i);
  }
  return $a = n, $a;
}
var Ra, Xf;
function iw() {
  if (Xf) return Ra;
  Xf = 1;
  var e = Ci(), t = "__lodash_hash_undefined__";
  function r(n, i) {
    var a = this.__data__;
    return this.size += this.has(n) ? 0 : 1, a[n] = e && i === void 0 ? t : i, this;
  }
  return Ra = r, Ra;
}
var Da, Vf;
function aw() {
  if (Vf) return Da;
  Vf = 1;
  var e = ew(), t = tw(), r = rw(), n = nw(), i = iw();
  function a(o) {
    var u = -1, s = o == null ? 0 : o.length;
    for (this.clear(); ++u < s; ) {
      var c = o[u];
      this.set(c[0], c[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = i, Da = a, Da;
}
var Na, Yf;
function ow() {
  if (Yf) return Na;
  Yf = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return Na = e, Na;
}
var qa, Zf;
function Pl() {
  if (Zf) return qa;
  Zf = 1;
  function e(t, r) {
    return t === r || t !== t && r !== r;
  }
  return qa = e, qa;
}
var ka, Jf;
function Ii() {
  if (Jf) return ka;
  Jf = 1;
  var e = Pl();
  function t(r, n) {
    for (var i = r.length; i--; )
      if (e(r[i][0], n))
        return i;
    return -1;
  }
  return ka = t, ka;
}
var La, Qf;
function uw() {
  if (Qf) return La;
  Qf = 1;
  var e = Ii(), t = Array.prototype, r = t.splice;
  function n(i) {
    var a = this.__data__, o = e(a, i);
    if (o < 0)
      return !1;
    var u = a.length - 1;
    return o == u ? a.pop() : r.call(a, o, 1), --this.size, !0;
  }
  return La = n, La;
}
var Ba, eh;
function sw() {
  if (eh) return Ba;
  eh = 1;
  var e = Ii();
  function t(r) {
    var n = this.__data__, i = e(n, r);
    return i < 0 ? void 0 : n[i][1];
  }
  return Ba = t, Ba;
}
var Fa, th;
function cw() {
  if (th) return Fa;
  th = 1;
  var e = Ii();
  function t(r) {
    return e(this.__data__, r) > -1;
  }
  return Fa = t, Fa;
}
var Ua, rh;
function lw() {
  if (rh) return Ua;
  rh = 1;
  var e = Ii();
  function t(r, n) {
    var i = this.__data__, a = e(i, r);
    return a < 0 ? (++this.size, i.push([r, n])) : i[a][1] = n, this;
  }
  return Ua = t, Ua;
}
var Wa, nh;
function $i() {
  if (nh) return Wa;
  nh = 1;
  var e = ow(), t = uw(), r = sw(), n = cw(), i = lw();
  function a(o) {
    var u = -1, s = o == null ? 0 : o.length;
    for (this.clear(); ++u < s; ) {
      var c = o[u];
      this.set(c[0], c[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = i, Wa = a, Wa;
}
var za, ih;
function Tl() {
  if (ih) return za;
  ih = 1;
  var e = zt(), t = nt(), r = e(t, "Map");
  return za = r, za;
}
var Ha, ah;
function fw() {
  if (ah) return Ha;
  ah = 1;
  var e = aw(), t = $i(), r = Tl();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (r || t)(),
      string: new e()
    };
  }
  return Ha = n, Ha;
}
var Ga, oh;
function hw() {
  if (oh) return Ga;
  oh = 1;
  function e(t) {
    var r = typeof t;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
  }
  return Ga = e, Ga;
}
var Ka, uh;
function Ri() {
  if (uh) return Ka;
  uh = 1;
  var e = hw();
  function t(r, n) {
    var i = r.__data__;
    return e(n) ? i[typeof n == "string" ? "string" : "hash"] : i.map;
  }
  return Ka = t, Ka;
}
var Xa, sh;
function pw() {
  if (sh) return Xa;
  sh = 1;
  var e = Ri();
  function t(r) {
    var n = e(this, r).delete(r);
    return this.size -= n ? 1 : 0, n;
  }
  return Xa = t, Xa;
}
var Va, ch;
function dw() {
  if (ch) return Va;
  ch = 1;
  var e = Ri();
  function t(r) {
    return e(this, r).get(r);
  }
  return Va = t, Va;
}
var Ya, lh;
function vw() {
  if (lh) return Ya;
  lh = 1;
  var e = Ri();
  function t(r) {
    return e(this, r).has(r);
  }
  return Ya = t, Ya;
}
var Za, fh;
function yw() {
  if (fh) return Za;
  fh = 1;
  var e = Ri();
  function t(r, n) {
    var i = e(this, r), a = i.size;
    return i.set(r, n), this.size += i.size == a ? 0 : 1, this;
  }
  return Za = t, Za;
}
var Ja, hh;
function El() {
  if (hh) return Ja;
  hh = 1;
  var e = fw(), t = pw(), r = dw(), n = vw(), i = yw();
  function a(o) {
    var u = -1, s = o == null ? 0 : o.length;
    for (this.clear(); ++u < s; ) {
      var c = o[u];
      this.set(c[0], c[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = i, Ja = a, Ja;
}
var Qa, ph;
function Vg() {
  if (ph) return Qa;
  ph = 1;
  var e = El(), t = "Expected a function";
  function r(n, i) {
    if (typeof n != "function" || i != null && typeof i != "function")
      throw new TypeError(t);
    var a = function() {
      var o = arguments, u = i ? i.apply(this, o) : o[0], s = a.cache;
      if (s.has(u))
        return s.get(u);
      var c = n.apply(this, o);
      return a.cache = s.set(u, c) || s, c;
    };
    return a.cache = new (r.Cache || e)(), a;
  }
  return r.Cache = e, Qa = r, Qa;
}
var eo, dh;
function gw() {
  if (dh) return eo;
  dh = 1;
  var e = Vg(), t = 500;
  function r(n) {
    var i = e(n, function(o) {
      return a.size === t && a.clear(), o;
    }), a = i.cache;
    return i;
  }
  return eo = r, eo;
}
var to, vh;
function mw() {
  if (vh) return to;
  vh = 1;
  var e = gw(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, r = /\\(\\)?/g, n = e(function(i) {
    var a = [];
    return i.charCodeAt(0) === 46 && a.push(""), i.replace(t, function(o, u, s, c) {
      a.push(s ? c.replace(r, "$1") : u || o);
    }), a;
  });
  return to = n, to;
}
var ro, yh;
function jl() {
  if (yh) return ro;
  yh = 1;
  function e(t, r) {
    for (var n = -1, i = t == null ? 0 : t.length, a = Array(i); ++n < i; )
      a[n] = r(t[n], n, t);
    return a;
  }
  return ro = e, ro;
}
var no, gh;
function bw() {
  if (gh) return no;
  gh = 1;
  var e = wn(), t = jl(), r = Ie(), n = wr(), i = e ? e.prototype : void 0, a = i ? i.toString : void 0;
  function o(u) {
    if (typeof u == "string")
      return u;
    if (r(u))
      return t(u, o) + "";
    if (n(u))
      return a ? a.call(u) : "";
    var s = u + "";
    return s == "0" && 1 / u == -1 / 0 ? "-0" : s;
  }
  return no = o, no;
}
var io, mh;
function Yg() {
  if (mh) return io;
  mh = 1;
  var e = bw();
  function t(r) {
    return r == null ? "" : e(r);
  }
  return io = t, io;
}
var ao, bh;
function Zg() {
  if (bh) return ao;
  bh = 1;
  var e = Ie(), t = Sl(), r = mw(), n = Yg();
  function i(a, o) {
    return e(a) ? a : t(a, o) ? [a] : r(n(a));
  }
  return ao = i, ao;
}
var oo, wh;
function Di() {
  if (wh) return oo;
  wh = 1;
  var e = wr();
  function t(r) {
    if (typeof r == "string" || e(r))
      return r;
    var n = r + "";
    return n == "0" && 1 / r == -1 / 0 ? "-0" : n;
  }
  return oo = t, oo;
}
var uo, xh;
function Ml() {
  if (xh) return uo;
  xh = 1;
  var e = Zg(), t = Di();
  function r(n, i) {
    i = e(i, n);
    for (var a = 0, o = i.length; n != null && a < o; )
      n = n[t(i[a++])];
    return a && a == o ? n : void 0;
  }
  return uo = r, uo;
}
var so, _h;
function Jg() {
  if (_h) return so;
  _h = 1;
  var e = Ml();
  function t(r, n, i) {
    var a = r == null ? void 0 : e(r, n);
    return a === void 0 ? i : a;
  }
  return so = t, so;
}
var ww = Jg();
const Qe = /* @__PURE__ */ ae(ww);
var co, Oh;
function xw() {
  if (Oh) return co;
  Oh = 1;
  function e(t) {
    return t == null;
  }
  return co = e, co;
}
var _w = xw();
const V = /* @__PURE__ */ ae(_w);
var lo, Sh;
function Ow() {
  if (Sh) return lo;
  Sh = 1;
  var e = pt(), t = Ie(), r = dt(), n = "[object String]";
  function i(a) {
    return typeof a == "string" || !t(a) && r(a) && e(a) == n;
  }
  return lo = i, lo;
}
var Sw = Ow();
const Bt = /* @__PURE__ */ ae(Sw);
var Aw = Al();
const J = /* @__PURE__ */ ae(Aw);
var Pw = Ot();
const xr = /* @__PURE__ */ ae(Pw);
var fo = { exports: {} }, ee = {};
var Ah;
function Tw() {
  if (Ah) return ee;
  Ah = 1;
  var e = /* @__PURE__ */ Symbol.for("react.element"), t = /* @__PURE__ */ Symbol.for("react.portal"), r = /* @__PURE__ */ Symbol.for("react.fragment"), n = /* @__PURE__ */ Symbol.for("react.strict_mode"), i = /* @__PURE__ */ Symbol.for("react.profiler"), a = /* @__PURE__ */ Symbol.for("react.provider"), o = /* @__PURE__ */ Symbol.for("react.context"), u = /* @__PURE__ */ Symbol.for("react.server_context"), s = /* @__PURE__ */ Symbol.for("react.forward_ref"), c = /* @__PURE__ */ Symbol.for("react.suspense"), f = /* @__PURE__ */ Symbol.for("react.suspense_list"), l = /* @__PURE__ */ Symbol.for("react.memo"), h = /* @__PURE__ */ Symbol.for("react.lazy"), d = /* @__PURE__ */ Symbol.for("react.offscreen"), g;
  g = /* @__PURE__ */ Symbol.for("react.module.reference");
  function v(p) {
    if (typeof p == "object" && p !== null) {
      var m = p.$$typeof;
      switch (m) {
        case e:
          switch (p = p.type, p) {
            case r:
            case i:
            case n:
            case c:
            case f:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case u:
                case o:
                case s:
                case h:
                case l:
                case a:
                  return p;
                default:
                  return m;
              }
          }
        case t:
          return m;
      }
    }
  }
  return ee.ContextConsumer = o, ee.ContextProvider = a, ee.Element = e, ee.ForwardRef = s, ee.Fragment = r, ee.Lazy = h, ee.Memo = l, ee.Portal = t, ee.Profiler = i, ee.StrictMode = n, ee.Suspense = c, ee.SuspenseList = f, ee.isAsyncMode = function() {
    return !1;
  }, ee.isConcurrentMode = function() {
    return !1;
  }, ee.isContextConsumer = function(p) {
    return v(p) === o;
  }, ee.isContextProvider = function(p) {
    return v(p) === a;
  }, ee.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, ee.isForwardRef = function(p) {
    return v(p) === s;
  }, ee.isFragment = function(p) {
    return v(p) === r;
  }, ee.isLazy = function(p) {
    return v(p) === h;
  }, ee.isMemo = function(p) {
    return v(p) === l;
  }, ee.isPortal = function(p) {
    return v(p) === t;
  }, ee.isProfiler = function(p) {
    return v(p) === i;
  }, ee.isStrictMode = function(p) {
    return v(p) === n;
  }, ee.isSuspense = function(p) {
    return v(p) === c;
  }, ee.isSuspenseList = function(p) {
    return v(p) === f;
  }, ee.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === i || p === n || p === c || p === f || p === d || typeof p == "object" && p !== null && (p.$$typeof === h || p.$$typeof === l || p.$$typeof === a || p.$$typeof === o || p.$$typeof === s || p.$$typeof === g || p.getModuleId !== void 0);
  }, ee.typeOf = v, ee;
}
var Ph;
function Ew() {
  return Ph || (Ph = 1, fo.exports = Tw()), fo.exports;
}
var jw = Ew(), ho, Th;
function Qg() {
  if (Th) return ho;
  Th = 1;
  var e = pt(), t = dt(), r = "[object Number]";
  function n(i) {
    return typeof i == "number" || t(i) && e(i) == r;
  }
  return ho = n, ho;
}
var po, Eh;
function Mw() {
  if (Eh) return po;
  Eh = 1;
  var e = Qg();
  function t(r) {
    return e(r) && r != +r;
  }
  return po = t, po;
}
var Cw = Mw();
const xn = /* @__PURE__ */ ae(Cw);
var Iw = Qg();
const $w = /* @__PURE__ */ ae(Iw);
var Ze = function(t) {
  return t === 0 ? 0 : t > 0 ? 1 : -1;
}, Rt = function(t) {
  return Bt(t) && t.indexOf("%") === t.length - 1;
}, B = function(t) {
  return $w(t) && !xn(t);
}, Rw = function(t) {
  return V(t);
}, xe = function(t) {
  return B(t) || Bt(t);
}, Dw = 0, Ni = function(t) {
  var r = ++Dw;
  return "".concat(t || "").concat(r);
}, He = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (!B(t) && !Bt(t))
    return n;
  var a;
  if (Rt(t)) {
    var o = t.indexOf("%");
    a = r * parseFloat(t.slice(0, o)) / 100;
  } else
    a = +t;
  return xn(a) && (a = n), i && a > r && (a = r), a;
}, mt = function(t) {
  if (!t)
    return null;
  var r = Object.keys(t);
  return r && r.length ? t[r[0]] : null;
}, Nw = function(t) {
  if (!Array.isArray(t))
    return !1;
  for (var r = t.length, n = {}, i = 0; i < r; i++)
    if (!n[t[i]])
      n[t[i]] = !0;
    else
      return !0;
  return !1;
}, Vt = function(t, r) {
  return B(t) && B(r) ? function(n) {
    return t + n * (r - t);
  } : function() {
    return r;
  };
};
function Fn(e, t, r) {
  return !e || !e.length ? null : e.find(function(n) {
    return n && (typeof t == "function" ? t(n) : Qe(n, t)) === r;
  });
}
var qw = function(t, r) {
  return B(t) && B(r) ? t - r : Bt(t) && Bt(r) ? t.localeCompare(r) : t instanceof Date && r instanceof Date ? t.getTime() - r.getTime() : String(t).localeCompare(String(r));
};
function cc(e, t) {
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r) && (!{}.hasOwnProperty.call(t, r) || e[r] !== t[r]))
      return !1;
  for (var n in t)
    if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e, n))
      return !1;
  return !0;
}
function lc(e) {
  "@babel/helpers - typeof";
  return lc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, lc(e);
}
var kw = ["viewBox", "children"], Lw = [
  "aria-activedescendant",
  "aria-atomic",
  "aria-autocomplete",
  "aria-busy",
  "aria-checked",
  "aria-colcount",
  "aria-colindex",
  "aria-colspan",
  "aria-controls",
  "aria-current",
  "aria-describedby",
  "aria-details",
  "aria-disabled",
  "aria-errormessage",
  "aria-expanded",
  "aria-flowto",
  "aria-haspopup",
  "aria-hidden",
  "aria-invalid",
  "aria-keyshortcuts",
  "aria-label",
  "aria-labelledby",
  "aria-level",
  "aria-live",
  "aria-modal",
  "aria-multiline",
  "aria-multiselectable",
  "aria-orientation",
  "aria-owns",
  "aria-placeholder",
  "aria-posinset",
  "aria-pressed",
  "aria-readonly",
  "aria-relevant",
  "aria-required",
  "aria-roledescription",
  "aria-rowcount",
  "aria-rowindex",
  "aria-rowspan",
  "aria-selected",
  "aria-setsize",
  "aria-sort",
  "aria-valuemax",
  "aria-valuemin",
  "aria-valuenow",
  "aria-valuetext",
  "className",
  "color",
  "height",
  "id",
  "lang",
  "max",
  "media",
  "method",
  "min",
  "name",
  "style",
  /*
   * removed 'type' SVGElementPropKey because we do not currently use any SVG elements
   * that can use it and it conflicts with the recharts prop 'type'
   * https://github.com/recharts/recharts/pull/3327
   * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type
   */
  // 'type',
  "target",
  "width",
  "role",
  "tabIndex",
  "accentHeight",
  "accumulate",
  "additive",
  "alignmentBaseline",
  "allowReorder",
  "alphabetic",
  "amplitude",
  "arabicForm",
  "ascent",
  "attributeName",
  "attributeType",
  "autoReverse",
  "azimuth",
  "baseFrequency",
  "baselineShift",
  "baseProfile",
  "bbox",
  "begin",
  "bias",
  "by",
  "calcMode",
  "capHeight",
  "clip",
  "clipPath",
  "clipPathUnits",
  "clipRule",
  "colorInterpolation",
  "colorInterpolationFilters",
  "colorProfile",
  "colorRendering",
  "contentScriptType",
  "contentStyleType",
  "cursor",
  "cx",
  "cy",
  "d",
  "decelerate",
  "descent",
  "diffuseConstant",
  "direction",
  "display",
  "divisor",
  "dominantBaseline",
  "dur",
  "dx",
  "dy",
  "edgeMode",
  "elevation",
  "enableBackground",
  "end",
  "exponent",
  "externalResourcesRequired",
  "fill",
  "fillOpacity",
  "fillRule",
  "filter",
  "filterRes",
  "filterUnits",
  "floodColor",
  "floodOpacity",
  "focusable",
  "fontFamily",
  "fontSize",
  "fontSizeAdjust",
  "fontStretch",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "format",
  "from",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyphName",
  "glyphOrientationHorizontal",
  "glyphOrientationVertical",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "hanging",
  "horizAdvX",
  "horizOriginX",
  "href",
  "ideographic",
  "imageRendering",
  "in2",
  "in",
  "intercept",
  "k1",
  "k2",
  "k3",
  "k4",
  "k",
  "kernelMatrix",
  "kernelUnitLength",
  "kerning",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "letterSpacing",
  "lightingColor",
  "limitingConeAngle",
  "local",
  "markerEnd",
  "markerHeight",
  "markerMid",
  "markerStart",
  "markerUnits",
  "markerWidth",
  "mask",
  "maskContentUnits",
  "maskUnits",
  "mathematical",
  "mode",
  "numOctaves",
  "offset",
  "opacity",
  "operator",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "overlinePosition",
  "overlineThickness",
  "paintOrder",
  "panose1",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointerEvents",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "r",
  "radius",
  "refX",
  "refY",
  "renderingIntent",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "restart",
  "result",
  "rotate",
  "rx",
  "ry",
  "seed",
  "shapeRendering",
  "slope",
  "spacing",
  "specularConstant",
  "specularExponent",
  "speed",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stemh",
  "stemv",
  "stitchTiles",
  "stopColor",
  "stopOpacity",
  "strikethroughPosition",
  "strikethroughThickness",
  "string",
  "stroke",
  "strokeDasharray",
  "strokeDashoffset",
  "strokeLinecap",
  "strokeLinejoin",
  "strokeMiterlimit",
  "strokeOpacity",
  "strokeWidth",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textAnchor",
  "textDecoration",
  "textLength",
  "textRendering",
  "to",
  "transform",
  "u1",
  "u2",
  "underlinePosition",
  "underlineThickness",
  "unicode",
  "unicodeBidi",
  "unicodeRange",
  "unitsPerEm",
  "vAlphabetic",
  "values",
  "vectorEffect",
  "version",
  "vertAdvY",
  "vertOriginX",
  "vertOriginY",
  "vHanging",
  "vIdeographic",
  "viewTarget",
  "visibility",
  "vMathematical",
  "widths",
  "wordSpacing",
  "writingMode",
  "x1",
  "x2",
  "x",
  "xChannelSelector",
  "xHeight",
  "xlinkActuate",
  "xlinkArcrole",
  "xlinkHref",
  "xlinkRole",
  "xlinkShow",
  "xlinkTitle",
  "xlinkType",
  "xmlBase",
  "xmlLang",
  "xmlns",
  "xmlnsXlink",
  "xmlSpace",
  "y1",
  "y2",
  "y",
  "yChannelSelector",
  "z",
  "zoomAndPan",
  "ref",
  "key",
  "angle"
], jh = ["points", "pathLength"], vo = {
  svg: kw,
  polygon: jh,
  polyline: jh
}, Cl = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], Un = function(t, r) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var n = t;
  if (/* @__PURE__ */ Ge(t) && (n = t.props), !xr(n))
    return null;
  var i = {};
  return Object.keys(n).forEach(function(a) {
    Cl.includes(a) && (i[a] = r || function(o) {
      return n[a](n, o);
    });
  }), i;
}, Bw = function(t, r, n) {
  return function(i) {
    return t(r, n, i), null;
  };
}, fc = function(t, r, n) {
  if (!xr(t) || lc(t) !== "object")
    return null;
  var i = null;
  return Object.keys(t).forEach(function(a) {
    var o = t[a];
    Cl.includes(a) && typeof o == "function" && (i || (i = {}), i[a] = Bw(o, r, n));
  }), i;
}, Fw = ["children"], Uw = ["children"];
function Mh(e, t) {
  if (e == null) return {};
  var r = Ww(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Ww(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function hc(e) {
  "@babel/helpers - typeof";
  return hc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, hc(e);
}
var Ch = {
  click: "onClick",
  mousedown: "onMouseDown",
  mouseup: "onMouseUp",
  mouseover: "onMouseOver",
  mousemove: "onMouseMove",
  mouseout: "onMouseOut",
  mouseenter: "onMouseEnter",
  mouseleave: "onMouseLeave",
  touchcancel: "onTouchCancel",
  touchend: "onTouchEnd",
  touchmove: "onTouchMove",
  touchstart: "onTouchStart",
  contextmenu: "onContextMenu",
  dblclick: "onDoubleClick"
}, st = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, Ih = null, yo = null, Il = function e(t) {
  if (t === Ih && Array.isArray(yo))
    return yo;
  var r = [];
  return Nt.forEach(t, function(n) {
    V(n) || (jw.isFragment(n) ? r = r.concat(e(n.props.children)) : r.push(n));
  }), yo = r, Ih = t, r;
};
function Ke(e, t) {
  var r = [], n = [];
  return Array.isArray(t) ? n = t.map(function(i) {
    return st(i);
  }) : n = [st(t)], Il(e).forEach(function(i) {
    var a = Qe(i, "type.displayName") || Qe(i, "type.name");
    n.indexOf(a) !== -1 && r.push(i);
  }), r;
}
function De(e, t) {
  var r = Ke(e, t);
  return r && r[0];
}
var $h = function(t) {
  if (!t || !t.props)
    return !1;
  var r = t.props, n = r.width, i = r.height;
  return !(!B(n) || n <= 0 || !B(i) || i <= 0);
}, zw = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"], Hw = function(t) {
  return t && t.type && Bt(t.type) && zw.indexOf(t.type) >= 0;
}, jR = function(t) {
  return t && hc(t) === "object" && "clipDot" in t;
}, Gw = function(t, r, n, i) {
  var a, o = (a = vo?.[i]) !== null && a !== void 0 ? a : [];
  return r.startsWith("data-") || !J(t) && (i && o.includes(r) || Lw.includes(r)) || n && Cl.includes(r);
}, ce = function(t, r, n) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var i = t;
  if (/* @__PURE__ */ Ge(t) && (i = t.props), !xr(i))
    return null;
  var a = {};
  return Object.keys(i).forEach(function(o) {
    var u;
    Gw((u = i) === null || u === void 0 ? void 0 : u[o], o, r, n) && (a[o] = i[o]);
  }), a;
}, pc = function e(t, r) {
  if (t === r)
    return !0;
  var n = Nt.count(t);
  if (n !== Nt.count(r))
    return !1;
  if (n === 0)
    return !0;
  if (n === 1)
    return Rh(Array.isArray(t) ? t[0] : t, Array.isArray(r) ? r[0] : r);
  for (var i = 0; i < n; i++) {
    var a = t[i], o = r[i];
    if (Array.isArray(a) || Array.isArray(o)) {
      if (!e(a, o))
        return !1;
    } else if (!Rh(a, o))
      return !1;
  }
  return !0;
}, Rh = function(t, r) {
  if (V(t) && V(r))
    return !0;
  if (!V(t) && !V(r)) {
    var n = t.props || {}, i = n.children, a = Mh(n, Fw), o = r.props || {}, u = o.children, s = Mh(o, Uw);
    return i && u ? cc(a, s) && pc(i, u) : !i && !u ? cc(a, s) : !1;
  }
  return !1;
}, Dh = function(t, r) {
  var n = [], i = {};
  return Il(t).forEach(function(a, o) {
    if (Hw(a))
      n.push(a);
    else if (a) {
      var u = st(a.type), s = r[u] || {}, c = s.handler, f = s.once;
      if (c && (!f || !i[u])) {
        var l = c(a, u, o);
        n.push(l), i[u] = !0;
      }
    }
  }), n;
}, Kw = function(t) {
  var r = t && t.type;
  return r && Ch[r] ? Ch[r] : null;
}, Xw = function(t, r) {
  return Il(r).indexOf(t);
}, Vw = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function dc() {
  return dc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, dc.apply(this, arguments);
}
function Yw(e, t) {
  if (e == null) return {};
  var r = Zw(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Zw(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function vc(e) {
  var t = e.children, r = e.width, n = e.height, i = e.viewBox, a = e.className, o = e.style, u = e.title, s = e.desc, c = Yw(e, Vw), f = i || {
    width: r,
    height: n,
    x: 0,
    y: 0
  }, l = se("recharts-surface", a);
  return /* @__PURE__ */ E.createElement("svg", dc({}, ce(c, !0, "svg"), {
    className: l,
    width: r,
    height: n,
    style: o,
    viewBox: "".concat(f.x, " ").concat(f.y, " ").concat(f.width, " ").concat(f.height)
  }), /* @__PURE__ */ E.createElement("title", null, u), /* @__PURE__ */ E.createElement("desc", null, s), t);
}
var Jw = ["children", "className"];
function yc() {
  return yc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, yc.apply(this, arguments);
}
function Qw(e, t) {
  if (e == null) return {};
  var r = ex(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function ex(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var Te = /* @__PURE__ */ E.forwardRef(function(e, t) {
  var r = e.children, n = e.className, i = Qw(e, Jw), a = se("recharts-layer", n);
  return /* @__PURE__ */ E.createElement("g", yc({
    className: a
  }, ce(i, !0), {
    ref: t
  }), r);
}), qt = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    i[a - 2] = arguments[a];
}, go, Nh;
function tx() {
  if (Nh) return go;
  Nh = 1;
  function e(t, r, n) {
    var i = -1, a = t.length;
    r < 0 && (r = -r > a ? 0 : a + r), n = n > a ? a : n, n < 0 && (n += a), a = r > n ? 0 : n - r >>> 0, r >>>= 0;
    for (var o = Array(a); ++i < a; )
      o[i] = t[i + r];
    return o;
  }
  return go = e, go;
}
var mo, qh;
function rx() {
  if (qh) return mo;
  qh = 1;
  var e = tx();
  function t(r, n, i) {
    var a = r.length;
    return i = i === void 0 ? a : i, !n && i >= a ? r : e(r, n, i);
  }
  return mo = t, mo;
}
var bo, kh;
function em() {
  if (kh) return bo;
  kh = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", i = t + r + n, a = "\\ufe0e\\ufe0f", o = "\\u200d", u = RegExp("[" + o + e + i + a + "]");
  function s(c) {
    return u.test(c);
  }
  return bo = s, bo;
}
var wo, Lh;
function nx() {
  if (Lh) return wo;
  Lh = 1;
  function e(t) {
    return t.split("");
  }
  return wo = e, wo;
}
var xo, Bh;
function ix() {
  if (Bh) return xo;
  Bh = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", i = t + r + n, a = "\\ufe0e\\ufe0f", o = "[" + e + "]", u = "[" + i + "]", s = "\\ud83c[\\udffb-\\udfff]", c = "(?:" + u + "|" + s + ")", f = "[^" + e + "]", l = "(?:\\ud83c[\\udde6-\\uddff]){2}", h = "[\\ud800-\\udbff][\\udc00-\\udfff]", d = "\\u200d", g = c + "?", v = "[" + a + "]?", p = "(?:" + d + "(?:" + [f, l, h].join("|") + ")" + v + g + ")*", m = v + g + p, w = "(?:" + [f + u + "?", u, l, h, o].join("|") + ")", x = RegExp(s + "(?=" + s + ")|" + w + m, "g");
  function _(y) {
    return y.match(x) || [];
  }
  return xo = _, xo;
}
var _o, Fh;
function ax() {
  if (Fh) return _o;
  Fh = 1;
  var e = nx(), t = em(), r = ix();
  function n(i) {
    return t(i) ? r(i) : e(i);
  }
  return _o = n, _o;
}
var Oo, Uh;
function ox() {
  if (Uh) return Oo;
  Uh = 1;
  var e = rx(), t = em(), r = ax(), n = Yg();
  function i(a) {
    return function(o) {
      o = n(o);
      var u = t(o) ? r(o) : void 0, s = u ? u[0] : o.charAt(0), c = u ? e(u, 1).join("") : o.slice(1);
      return s[a]() + c;
    };
  }
  return Oo = i, Oo;
}
var So, Wh;
function ux() {
  if (Wh) return So;
  Wh = 1;
  var e = ox(), t = e("toUpperCase");
  return So = t, So;
}
var sx = ux();
const qi = /* @__PURE__ */ ae(sx);
function ie(e) {
  return function() {
    return e;
  };
}
const tm = Math.cos, Wn = Math.sin, Ve = Math.sqrt, zn = Math.PI, ki = 2 * zn, gc = Math.PI, mc = 2 * gc, It = 1e-6, cx = mc - It;
function rm(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function lx(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return rm;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let i = 1, a = n.length; i < a; ++i)
      this._ += Math.round(arguments[i] * r) / r + n[i];
  };
}
class fx {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? rm : lx(t);
  }
  moveTo(t, r) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, r) {
    this._append`L${this._x1 = +t},${this._y1 = +r}`;
  }
  quadraticCurveTo(t, r, n, i) {
    this._append`Q${+t},${+r},${this._x1 = +n},${this._y1 = +i}`;
  }
  bezierCurveTo(t, r, n, i, a, o) {
    this._append`C${+t},${+r},${+n},${+i},${this._x1 = +a},${this._y1 = +o}`;
  }
  arcTo(t, r, n, i, a) {
    if (t = +t, r = +r, n = +n, i = +i, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let o = this._x1, u = this._y1, s = n - t, c = i - r, f = o - t, l = u - r, h = f * f + l * l;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (h > It) if (!(Math.abs(l * s - c * f) > It) || !a)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let d = n - o, g = i - u, v = s * s + c * c, p = d * d + g * g, m = Math.sqrt(v), w = Math.sqrt(h), x = a * Math.tan((gc - Math.acos((v + h - p) / (2 * m * w))) / 2), _ = x / w, y = x / m;
      Math.abs(_ - 1) > It && this._append`L${t + _ * f},${r + _ * l}`, this._append`A${a},${a},0,0,${+(l * d > f * g)},${this._x1 = t + y * s},${this._y1 = r + y * c}`;
    }
  }
  arc(t, r, n, i, a, o) {
    if (t = +t, r = +r, n = +n, o = !!o, n < 0) throw new Error(`negative radius: ${n}`);
    let u = n * Math.cos(i), s = n * Math.sin(i), c = t + u, f = r + s, l = 1 ^ o, h = o ? i - a : a - i;
    this._x1 === null ? this._append`M${c},${f}` : (Math.abs(this._x1 - c) > It || Math.abs(this._y1 - f) > It) && this._append`L${c},${f}`, n && (h < 0 && (h = h % mc + mc), h > cx ? this._append`A${n},${n},0,1,${l},${t - u},${r - s}A${n},${n},0,1,${l},${this._x1 = c},${this._y1 = f}` : h > It && this._append`A${n},${n},0,${+(h >= gc)},${l},${this._x1 = t + n * Math.cos(a)},${this._y1 = r + n * Math.sin(a)}`);
  }
  rect(t, r, n, i) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+i}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function $l(e) {
  let t = 3;
  return e.digits = function(r) {
    if (!arguments.length) return t;
    if (r == null)
      t = null;
    else {
      const n = Math.floor(r);
      if (!(n >= 0)) throw new RangeError(`invalid digits: ${r}`);
      t = n;
    }
    return e;
  }, () => new fx(t);
}
function Rl(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function nm(e) {
  this._context = e;
}
nm.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(e, t);
        break;
    }
  }
};
function Li(e) {
  return new nm(e);
}
function im(e) {
  return e[0];
}
function am(e) {
  return e[1];
}
function om(e, t) {
  var r = ie(!0), n = null, i = Li, a = null, o = $l(u);
  e = typeof e == "function" ? e : e === void 0 ? im : ie(e), t = typeof t == "function" ? t : t === void 0 ? am : ie(t);
  function u(s) {
    var c, f = (s = Rl(s)).length, l, h = !1, d;
    for (n == null && (a = i(d = o())), c = 0; c <= f; ++c)
      !(c < f && r(l = s[c], c, s)) === h && ((h = !h) ? a.lineStart() : a.lineEnd()), h && a.point(+e(l, c, s), +t(l, c, s));
    if (d) return a = null, d + "" || null;
  }
  return u.x = function(s) {
    return arguments.length ? (e = typeof s == "function" ? s : ie(+s), u) : e;
  }, u.y = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : ie(+s), u) : t;
  }, u.defined = function(s) {
    return arguments.length ? (r = typeof s == "function" ? s : ie(!!s), u) : r;
  }, u.curve = function(s) {
    return arguments.length ? (i = s, n != null && (a = i(n)), u) : i;
  }, u.context = function(s) {
    return arguments.length ? (s == null ? n = a = null : a = i(n = s), u) : n;
  }, u;
}
function jn(e, t, r) {
  var n = null, i = ie(!0), a = null, o = Li, u = null, s = $l(c);
  e = typeof e == "function" ? e : e === void 0 ? im : ie(+e), t = typeof t == "function" ? t : ie(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? am : ie(+r);
  function c(l) {
    var h, d, g, v = (l = Rl(l)).length, p, m = !1, w, x = new Array(v), _ = new Array(v);
    for (a == null && (u = o(w = s())), h = 0; h <= v; ++h) {
      if (!(h < v && i(p = l[h], h, l)) === m)
        if (m = !m)
          d = h, u.areaStart(), u.lineStart();
        else {
          for (u.lineEnd(), u.lineStart(), g = h - 1; g >= d; --g)
            u.point(x[g], _[g]);
          u.lineEnd(), u.areaEnd();
        }
      m && (x[h] = +e(p, h, l), _[h] = +t(p, h, l), u.point(n ? +n(p, h, l) : x[h], r ? +r(p, h, l) : _[h]));
    }
    if (w) return u = null, w + "" || null;
  }
  function f() {
    return om().defined(i).curve(o).context(a);
  }
  return c.x = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : ie(+l), n = null, c) : e;
  }, c.x0 = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : ie(+l), c) : e;
  }, c.x1 = function(l) {
    return arguments.length ? (n = l == null ? null : typeof l == "function" ? l : ie(+l), c) : n;
  }, c.y = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : ie(+l), r = null, c) : t;
  }, c.y0 = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : ie(+l), c) : t;
  }, c.y1 = function(l) {
    return arguments.length ? (r = l == null ? null : typeof l == "function" ? l : ie(+l), c) : r;
  }, c.lineX0 = c.lineY0 = function() {
    return f().x(e).y(t);
  }, c.lineY1 = function() {
    return f().x(e).y(r);
  }, c.lineX1 = function() {
    return f().x(n).y(t);
  }, c.defined = function(l) {
    return arguments.length ? (i = typeof l == "function" ? l : ie(!!l), c) : i;
  }, c.curve = function(l) {
    return arguments.length ? (o = l, a != null && (u = o(a)), c) : o;
  }, c.context = function(l) {
    return arguments.length ? (l == null ? a = u = null : u = o(a = l), c) : a;
  }, c;
}
class um {
  constructor(t, r) {
    this._context = t, this._x = r;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(t, r) {
    switch (t = +t, r = +r, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(t, r) : this._context.moveTo(t, r);
        break;
      }
      case 1:
        this._point = 2;
      // falls through
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, r, t, r) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + r) / 2, t, this._y0, t, r);
        break;
      }
    }
    this._x0 = t, this._y0 = r;
  }
}
function hx(e) {
  return new um(e, !0);
}
function px(e) {
  return new um(e, !1);
}
const Dl = {
  draw(e, t) {
    const r = Ve(t / zn);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, ki);
  }
}, dx = {
  draw(e, t) {
    const r = Ve(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
}, sm = Ve(1 / 3), vx = sm * 2, yx = {
  draw(e, t) {
    const r = Ve(t / vx), n = r * sm;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
}, gx = {
  draw(e, t) {
    const r = Ve(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
}, mx = 0.8908130915292852, cm = Wn(zn / 10) / Wn(7 * zn / 10), bx = Wn(ki / 10) * cm, wx = -tm(ki / 10) * cm, xx = {
  draw(e, t) {
    const r = Ve(t * mx), n = bx * r, i = wx * r;
    e.moveTo(0, -r), e.lineTo(n, i);
    for (let a = 1; a < 5; ++a) {
      const o = ki * a / 5, u = tm(o), s = Wn(o);
      e.lineTo(s * r, -u * r), e.lineTo(u * n - s * i, s * n + u * i);
    }
    e.closePath();
  }
}, Ao = Ve(3), _x = {
  draw(e, t) {
    const r = -Ve(t / (Ao * 3));
    e.moveTo(0, r * 2), e.lineTo(-Ao * r, -r), e.lineTo(Ao * r, -r), e.closePath();
  }
}, qe = -0.5, ke = Ve(3) / 2, bc = 1 / Ve(12), Ox = (bc / 2 + 1) * 3, Sx = {
  draw(e, t) {
    const r = Ve(t / Ox), n = r / 2, i = r * bc, a = n, o = r * bc + r, u = -a, s = o;
    e.moveTo(n, i), e.lineTo(a, o), e.lineTo(u, s), e.lineTo(qe * n - ke * i, ke * n + qe * i), e.lineTo(qe * a - ke * o, ke * a + qe * o), e.lineTo(qe * u - ke * s, ke * u + qe * s), e.lineTo(qe * n + ke * i, qe * i - ke * n), e.lineTo(qe * a + ke * o, qe * o - ke * a), e.lineTo(qe * u + ke * s, qe * s - ke * u), e.closePath();
  }
};
function Ax(e, t) {
  let r = null, n = $l(i);
  e = typeof e == "function" ? e : ie(e || Dl), t = typeof t == "function" ? t : ie(t === void 0 ? 64 : +t);
  function i() {
    let a;
    if (r || (r = a = n()), e.apply(this, arguments).draw(r, +t.apply(this, arguments)), a) return r = null, a + "" || null;
  }
  return i.type = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : ie(a), i) : e;
  }, i.size = function(a) {
    return arguments.length ? (t = typeof a == "function" ? a : ie(+a), i) : t;
  }, i.context = function(a) {
    return arguments.length ? (r = a ?? null, i) : r;
  }, i;
}
function Hn() {
}
function Gn(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function lm(e) {
  this._context = e;
}
lm.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        Gn(this, this._x1, this._y1);
      // falls through
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      // falls through
      default:
        Gn(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function Px(e) {
  return new lm(e);
}
function fm(e) {
  this._context = e;
}
fm.prototype = {
  areaStart: Hn,
  areaEnd: Hn,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._x2 = e, this._y2 = t;
        break;
      case 1:
        this._point = 2, this._x3 = e, this._y3 = t;
        break;
      case 2:
        this._point = 3, this._x4 = e, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e) / 6, (this._y0 + 4 * this._y1 + t) / 6);
        break;
      default:
        Gn(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function Tx(e) {
  return new fm(e);
}
function hm(e) {
  this._context = e;
}
hm.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var r = (this._x0 + 4 * this._x1 + e) / 6, n = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        Gn(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function Ex(e) {
  return new hm(e);
}
function pm(e) {
  this._context = e;
}
pm.prototype = {
  areaStart: Hn,
  areaEnd: Hn,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._point && this._context.closePath();
  },
  point: function(e, t) {
    e = +e, t = +t, this._point ? this._context.lineTo(e, t) : (this._point = 1, this._context.moveTo(e, t));
  }
};
function jx(e) {
  return new pm(e);
}
function zh(e) {
  return e < 0 ? -1 : 1;
}
function Hh(e, t, r) {
  var n = e._x1 - e._x0, i = t - e._x1, a = (e._y1 - e._y0) / (n || i < 0 && -0), o = (r - e._y1) / (i || n < 0 && -0), u = (a * i + o * n) / (n + i);
  return (zh(a) + zh(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(u)) || 0;
}
function Gh(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function Po(e, t, r) {
  var n = e._x0, i = e._y0, a = e._x1, o = e._y1, u = (a - n) / 3;
  e._context.bezierCurveTo(n + u, i + u * t, a - u, o - u * r, a, o);
}
function Kn(e) {
  this._context = e;
}
Kn.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        Po(this, this._t0, Gh(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    var r = NaN;
    if (e = +e, t = +t, !(e === this._x1 && t === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, Po(this, Gh(this, r = Hh(this, e, t)), r);
          break;
        default:
          Po(this, this._t0, r = Hh(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function dm(e) {
  this._context = new vm(e);
}
(dm.prototype = Object.create(Kn.prototype)).point = function(e, t) {
  Kn.prototype.point.call(this, t, e);
};
function vm(e) {
  this._context = e;
}
vm.prototype = {
  moveTo: function(e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function(e, t, r, n, i, a) {
    this._context.bezierCurveTo(t, e, n, r, a, i);
  }
};
function Mx(e) {
  return new Kn(e);
}
function Cx(e) {
  return new dm(e);
}
function ym(e) {
  this._context = e;
}
ym.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [], this._y = [];
  },
  lineEnd: function() {
    var e = this._x, t = this._y, r = e.length;
    if (r)
      if (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), r === 2)
        this._context.lineTo(e[1], t[1]);
      else
        for (var n = Kh(e), i = Kh(t), a = 0, o = 1; o < r; ++a, ++o)
          this._context.bezierCurveTo(n[0][a], i[0][a], n[1][a], i[1][a], e[o], t[o]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function Kh(e) {
  var t, r = e.length - 1, n, i = new Array(r), a = new Array(r), o = new Array(r);
  for (i[0] = 0, a[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) i[t] = 1, a[t] = 4, o[t] = 4 * e[t] + 2 * e[t + 1];
  for (i[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) n = i[t] / a[t - 1], a[t] -= n, o[t] -= n * o[t - 1];
  for (i[r - 1] = o[r - 1] / a[r - 1], t = r - 2; t >= 0; --t) i[t] = (o[t] - i[t + 1]) / a[t];
  for (a[r - 1] = (e[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t) a[t] = 2 * e[t + 1] - i[t + 1];
  return [i, a];
}
function Ix(e) {
  return new ym(e);
}
function Bi(e, t) {
  this._context = e, this._t = t;
}
Bi.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN, this._point = 0;
  },
  lineEnd: function() {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      // falls through
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, t), this._context.lineTo(e, t);
        else {
          var r = this._x * (1 - this._t) + e * this._t;
          this._context.lineTo(r, this._y), this._context.lineTo(r, t);
        }
        break;
      }
    }
    this._x = e, this._y = t;
  }
};
function $x(e) {
  return new Bi(e, 0.5);
}
function Rx(e) {
  return new Bi(e, 0);
}
function Dx(e) {
  return new Bi(e, 1);
}
function rr(e, t) {
  if ((o = e.length) > 1)
    for (var r = 1, n, i, a = e[t[0]], o, u = a.length; r < o; ++r)
      for (i = a, a = e[t[r]], n = 0; n < u; ++n)
        a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}
function wc(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function Nx(e, t) {
  return e[t];
}
function qx(e) {
  const t = [];
  return t.key = e, t;
}
function kx() {
  var e = ie([]), t = wc, r = rr, n = Nx;
  function i(a) {
    var o = Array.from(e.apply(this, arguments), qx), u, s = o.length, c = -1, f;
    for (const l of a)
      for (u = 0, ++c; u < s; ++u)
        (o[u][c] = [0, +n(l, o[u].key, c, a)]).data = l;
    for (u = 0, f = Rl(t(o)); u < s; ++u)
      o[f[u]].index = u;
    return r(o, f), o;
  }
  return i.keys = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : ie(Array.from(a)), i) : e;
  }, i.value = function(a) {
    return arguments.length ? (n = typeof a == "function" ? a : ie(+a), i) : n;
  }, i.order = function(a) {
    return arguments.length ? (t = a == null ? wc : typeof a == "function" ? a : ie(Array.from(a)), i) : t;
  }, i.offset = function(a) {
    return arguments.length ? (r = a ?? rr, i) : r;
  }, i;
}
function Lx(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, i = 0, a = e[0].length, o; i < a; ++i) {
      for (o = r = 0; r < n; ++r) o += e[r][i][1] || 0;
      if (o) for (r = 0; r < n; ++r) e[r][i][1] /= o;
    }
    rr(e, t);
  }
}
function Bx(e, t) {
  if ((i = e.length) > 0) {
    for (var r = 0, n = e[t[0]], i, a = n.length; r < a; ++r) {
      for (var o = 0, u = 0; o < i; ++o) u += e[o][r][1] || 0;
      n[r][1] += n[r][0] = -u / 2;
    }
    rr(e, t);
  }
}
function Fx(e, t) {
  if (!(!((o = e.length) > 0) || !((a = (i = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, a, o; n < a; ++n) {
      for (var u = 0, s = 0, c = 0; u < o; ++u) {
        for (var f = e[t[u]], l = f[n][1] || 0, h = f[n - 1][1] || 0, d = (l - h) / 2, g = 0; g < u; ++g) {
          var v = e[t[g]], p = v[n][1] || 0, m = v[n - 1][1] || 0;
          d += p - m;
        }
        s += l, c += d * l;
      }
      i[n - 1][1] += i[n - 1][0] = r, s && (r -= c / s);
    }
    i[n - 1][1] += i[n - 1][0] = r, rr(e, t);
  }
}
function Fr(e) {
  "@babel/helpers - typeof";
  return Fr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fr(e);
}
var Ux = ["type", "size", "sizeType"];
function xc() {
  return xc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, xc.apply(this, arguments);
}
function Xh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Vh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xh(Object(r), !0).forEach(function(n) {
      Wx(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Wx(e, t, r) {
  return t = zx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function zx(e) {
  var t = Hx(e, "string");
  return Fr(t) == "symbol" ? t : t + "";
}
function Hx(e, t) {
  if (Fr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Fr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Gx(e, t) {
  if (e == null) return {};
  var r = Kx(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Kx(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var gm = {
  symbolCircle: Dl,
  symbolCross: dx,
  symbolDiamond: yx,
  symbolSquare: gx,
  symbolStar: xx,
  symbolTriangle: _x,
  symbolWye: Sx
}, Xx = Math.PI / 180, Vx = function(t) {
  var r = "symbol".concat(qi(t));
  return gm[r] || Dl;
}, Yx = function(t, r, n) {
  if (r === "area")
    return t;
  switch (n) {
    case "cross":
      return 5 * t * t / 9;
    case "diamond":
      return 0.5 * t * t / Math.sqrt(3);
    case "square":
      return t * t;
    case "star": {
      var i = 18 * Xx;
      return 1.25 * t * t * (Math.tan(i) - Math.tan(i * 2) * Math.pow(Math.tan(i), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, Zx = function(t, r) {
  gm["symbol".concat(qi(t))] = r;
}, Nl = function(t) {
  var r = t.type, n = r === void 0 ? "circle" : r, i = t.size, a = i === void 0 ? 64 : i, o = t.sizeType, u = o === void 0 ? "area" : o, s = Gx(t, Ux), c = Vh(Vh({}, s), {}, {
    type: n,
    size: a,
    sizeType: u
  }), f = function() {
    var p = Vx(n), m = Ax().type(p).size(Yx(a, u, n));
    return m();
  }, l = c.className, h = c.cx, d = c.cy, g = ce(c, !0);
  return h === +h && d === +d && a === +a ? /* @__PURE__ */ E.createElement("path", xc({}, g, {
    className: se("recharts-symbols", l),
    transform: "translate(".concat(h, ", ").concat(d, ")"),
    d: f()
  })) : null;
};
Nl.registerSymbol = Zx;
function nr(e) {
  "@babel/helpers - typeof";
  return nr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, nr(e);
}
function _c() {
  return _c = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, _c.apply(this, arguments);
}
function Yh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Jx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yh(Object(r), !0).forEach(function(n) {
      Ur(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Qx(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function e1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, bm(n.key), n);
  }
}
function t1(e, t, r) {
  return t && e1(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function r1(e, t, r) {
  return t = Xn(t), n1(e, mm() ? Reflect.construct(t, r || [], Xn(e).constructor) : t.apply(e, r));
}
function n1(e, t) {
  if (t && (nr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return i1(e);
}
function i1(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function mm() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (mm = function() {
    return !!e;
  })();
}
function Xn(e) {
  return Xn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Xn(e);
}
function a1(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Oc(e, t);
}
function Oc(e, t) {
  return Oc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Oc(e, t);
}
function Ur(e, t, r) {
  return t = bm(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function bm(e) {
  var t = o1(e, "string");
  return nr(t) == "symbol" ? t : t + "";
}
function o1(e, t) {
  if (nr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (nr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Le = 32, ql = /* @__PURE__ */ (function(e) {
  function t() {
    return Qx(this, t), r1(this, t, arguments);
  }
  return a1(t, e), t1(t, [{
    key: "renderIcon",
    value: (
      /**
       * Render the path of icon
       * @param {Object} data Data of each legend item
       * @return {String} Path element
       */
      function(n) {
        var i = this.props.inactiveColor, a = Le / 2, o = Le / 6, u = Le / 3, s = n.inactive ? i : n.color;
        if (n.type === "plainline")
          return /* @__PURE__ */ E.createElement("line", {
            strokeWidth: 4,
            fill: "none",
            stroke: s,
            strokeDasharray: n.payload.strokeDasharray,
            x1: 0,
            y1: a,
            x2: Le,
            y2: a,
            className: "recharts-legend-icon"
          });
        if (n.type === "line")
          return /* @__PURE__ */ E.createElement("path", {
            strokeWidth: 4,
            fill: "none",
            stroke: s,
            d: "M0,".concat(a, "h").concat(u, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(2 * u, ",").concat(a, `
            H`).concat(Le, "M").concat(2 * u, ",").concat(a, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(u, ",").concat(a),
            className: "recharts-legend-icon"
          });
        if (n.type === "rect")
          return /* @__PURE__ */ E.createElement("path", {
            stroke: "none",
            fill: s,
            d: "M0,".concat(Le / 8, "h").concat(Le, "v").concat(Le * 3 / 4, "h").concat(-Le, "z"),
            className: "recharts-legend-icon"
          });
        if (/* @__PURE__ */ E.isValidElement(n.legendIcon)) {
          var c = Jx({}, n);
          return delete c.legendIcon, /* @__PURE__ */ E.cloneElement(n.legendIcon, c);
        }
        return /* @__PURE__ */ E.createElement(Nl, {
          fill: s,
          cx: a,
          cy: a,
          size: Le,
          sizeType: "diameter",
          type: n.type
        });
      }
    )
    /**
     * Draw items of legend
     * @return {ReactElement} Items
     */
  }, {
    key: "renderItems",
    value: function() {
      var n = this, i = this.props, a = i.payload, o = i.iconSize, u = i.layout, s = i.formatter, c = i.inactiveColor, f = {
        x: 0,
        y: 0,
        width: Le,
        height: Le
      }, l = {
        display: u === "horizontal" ? "inline-block" : "block",
        marginRight: 10
      }, h = {
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: 4
      };
      return a.map(function(d, g) {
        var v = d.formatter || s, p = se(Ur(Ur({
          "recharts-legend-item": !0
        }, "legend-item-".concat(g), !0), "inactive", d.inactive));
        if (d.type === "none")
          return null;
        var m = J(d.value) ? null : d.value;
        qt(
          !J(d.value),
          `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
          // eslint-disable-line max-len
        );
        var w = d.inactive ? c : d.color;
        return /* @__PURE__ */ E.createElement("li", _c({
          className: p,
          style: l,
          key: "legend-item-".concat(g)
        }, fc(n.props, d, g)), /* @__PURE__ */ E.createElement(vc, {
          width: o,
          height: o,
          viewBox: f,
          style: h
        }, n.renderIcon(d)), /* @__PURE__ */ E.createElement("span", {
          className: "recharts-legend-item-text",
          style: {
            color: w
          }
        }, v ? v(m, d, g) : m));
      });
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.payload, a = n.layout, o = n.align;
      if (!i || !i.length)
        return null;
      var u = {
        padding: 0,
        margin: 0,
        textAlign: a === "horizontal" ? o : "left"
      };
      return /* @__PURE__ */ E.createElement("ul", {
        className: "recharts-default-legend",
        style: u
      }, this.renderItems());
    }
  }]);
})(Wt);
Ur(ql, "displayName", "Legend");
Ur(ql, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var To, Zh;
function u1() {
  if (Zh) return To;
  Zh = 1;
  var e = $i();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return To = t, To;
}
var Eo, Jh;
function s1() {
  if (Jh) return Eo;
  Jh = 1;
  function e(t) {
    var r = this.__data__, n = r.delete(t);
    return this.size = r.size, n;
  }
  return Eo = e, Eo;
}
var jo, Qh;
function c1() {
  if (Qh) return jo;
  Qh = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return jo = e, jo;
}
var Mo, ep;
function l1() {
  if (ep) return Mo;
  ep = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return Mo = e, Mo;
}
var Co, tp;
function f1() {
  if (tp) return Co;
  tp = 1;
  var e = $i(), t = Tl(), r = El(), n = 200;
  function i(a, o) {
    var u = this.__data__;
    if (u instanceof e) {
      var s = u.__data__;
      if (!t || s.length < n - 1)
        return s.push([a, o]), this.size = ++u.size, this;
      u = this.__data__ = new r(s);
    }
    return u.set(a, o), this.size = u.size, this;
  }
  return Co = i, Co;
}
var Io, rp;
function wm() {
  if (rp) return Io;
  rp = 1;
  var e = $i(), t = u1(), r = s1(), n = c1(), i = l1(), a = f1();
  function o(u) {
    var s = this.__data__ = new e(u);
    this.size = s.size;
  }
  return o.prototype.clear = t, o.prototype.delete = r, o.prototype.get = n, o.prototype.has = i, o.prototype.set = a, Io = o, Io;
}
var $o, np;
function h1() {
  if (np) return $o;
  np = 1;
  var e = "__lodash_hash_undefined__";
  function t(r) {
    return this.__data__.set(r, e), this;
  }
  return $o = t, $o;
}
var Ro, ip;
function p1() {
  if (ip) return Ro;
  ip = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return Ro = e, Ro;
}
var Do, ap;
function xm() {
  if (ap) return Do;
  ap = 1;
  var e = El(), t = h1(), r = p1();
  function n(i) {
    var a = -1, o = i == null ? 0 : i.length;
    for (this.__data__ = new e(); ++a < o; )
      this.add(i[a]);
  }
  return n.prototype.add = n.prototype.push = t, n.prototype.has = r, Do = n, Do;
}
var No, op;
function _m() {
  if (op) return No;
  op = 1;
  function e(t, r) {
    for (var n = -1, i = t == null ? 0 : t.length; ++n < i; )
      if (r(t[n], n, t))
        return !0;
    return !1;
  }
  return No = e, No;
}
var qo, up;
function Om() {
  if (up) return qo;
  up = 1;
  function e(t, r) {
    return t.has(r);
  }
  return qo = e, qo;
}
var ko, sp;
function Sm() {
  if (sp) return ko;
  sp = 1;
  var e = xm(), t = _m(), r = Om(), n = 1, i = 2;
  function a(o, u, s, c, f, l) {
    var h = s & n, d = o.length, g = u.length;
    if (d != g && !(h && g > d))
      return !1;
    var v = l.get(o), p = l.get(u);
    if (v && p)
      return v == u && p == o;
    var m = -1, w = !0, x = s & i ? new e() : void 0;
    for (l.set(o, u), l.set(u, o); ++m < d; ) {
      var _ = o[m], y = u[m];
      if (c)
        var b = h ? c(y, _, m, u, o, l) : c(_, y, m, o, u, l);
      if (b !== void 0) {
        if (b)
          continue;
        w = !1;
        break;
      }
      if (x) {
        if (!t(u, function(O, S) {
          if (!r(x, S) && (_ === O || f(_, O, s, c, l)))
            return x.push(S);
        })) {
          w = !1;
          break;
        }
      } else if (!(_ === y || f(_, y, s, c, l))) {
        w = !1;
        break;
      }
    }
    return l.delete(o), l.delete(u), w;
  }
  return ko = a, ko;
}
var Lo, cp;
function d1() {
  if (cp) return Lo;
  cp = 1;
  var e = nt(), t = e.Uint8Array;
  return Lo = t, Lo;
}
var Bo, lp;
function v1() {
  if (lp) return Bo;
  lp = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(i, a) {
      n[++r] = [a, i];
    }), n;
  }
  return Bo = e, Bo;
}
var Fo, fp;
function kl() {
  if (fp) return Fo;
  fp = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(i) {
      n[++r] = i;
    }), n;
  }
  return Fo = e, Fo;
}
var Uo, hp;
function y1() {
  if (hp) return Uo;
  hp = 1;
  var e = wn(), t = d1(), r = Pl(), n = Sm(), i = v1(), a = kl(), o = 1, u = 2, s = "[object Boolean]", c = "[object Date]", f = "[object Error]", l = "[object Map]", h = "[object Number]", d = "[object RegExp]", g = "[object Set]", v = "[object String]", p = "[object Symbol]", m = "[object ArrayBuffer]", w = "[object DataView]", x = e ? e.prototype : void 0, _ = x ? x.valueOf : void 0;
  function y(b, O, S, A, C, T, P) {
    switch (S) {
      case w:
        if (b.byteLength != O.byteLength || b.byteOffset != O.byteOffset)
          return !1;
        b = b.buffer, O = O.buffer;
      case m:
        return !(b.byteLength != O.byteLength || !T(new t(b), new t(O)));
      case s:
      case c:
      case h:
        return r(+b, +O);
      case f:
        return b.name == O.name && b.message == O.message;
      case d:
      case v:
        return b == O + "";
      case l:
        var j = i;
      case g:
        var I = A & o;
        if (j || (j = a), b.size != O.size && !I)
          return !1;
        var M = P.get(b);
        if (M)
          return M == O;
        A |= u, P.set(b, O);
        var R = n(j(b), j(O), A, C, T, P);
        return P.delete(b), R;
      case p:
        if (_)
          return _.call(b) == _.call(O);
    }
    return !1;
  }
  return Uo = y, Uo;
}
var Wo, pp;
function Am() {
  if (pp) return Wo;
  pp = 1;
  function e(t, r) {
    for (var n = -1, i = r.length, a = t.length; ++n < i; )
      t[a + n] = r[n];
    return t;
  }
  return Wo = e, Wo;
}
var zo, dp;
function g1() {
  if (dp) return zo;
  dp = 1;
  var e = Am(), t = Ie();
  function r(n, i, a) {
    var o = i(n);
    return t(n) ? o : e(o, a(n));
  }
  return zo = r, zo;
}
var Ho, vp;
function m1() {
  if (vp) return Ho;
  vp = 1;
  function e(t, r) {
    for (var n = -1, i = t == null ? 0 : t.length, a = 0, o = []; ++n < i; ) {
      var u = t[n];
      r(u, n, t) && (o[a++] = u);
    }
    return o;
  }
  return Ho = e, Ho;
}
var Go, yp;
function b1() {
  if (yp) return Go;
  yp = 1;
  function e() {
    return [];
  }
  return Go = e, Go;
}
var Ko, gp;
function w1() {
  if (gp) return Ko;
  gp = 1;
  var e = m1(), t = b1(), r = Object.prototype, n = r.propertyIsEnumerable, i = Object.getOwnPropertySymbols, a = i ? function(o) {
    return o == null ? [] : (o = Object(o), e(i(o), function(u) {
      return n.call(o, u);
    }));
  } : t;
  return Ko = a, Ko;
}
var Xo, mp;
function x1() {
  if (mp) return Xo;
  mp = 1;
  function e(t, r) {
    for (var n = -1, i = Array(t); ++n < t; )
      i[n] = r(n);
    return i;
  }
  return Xo = e, Xo;
}
var Vo, bp;
function _1() {
  if (bp) return Vo;
  bp = 1;
  var e = pt(), t = dt(), r = "[object Arguments]";
  function n(i) {
    return t(i) && e(i) == r;
  }
  return Vo = n, Vo;
}
var Yo, wp;
function Ll() {
  if (wp) return Yo;
  wp = 1;
  var e = _1(), t = dt(), r = Object.prototype, n = r.hasOwnProperty, i = r.propertyIsEnumerable, a = e(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? e : function(o) {
    return t(o) && n.call(o, "callee") && !i.call(o, "callee");
  };
  return Yo = a, Yo;
}
var Rr = { exports: {} }, Zo, xp;
function O1() {
  if (xp) return Zo;
  xp = 1;
  function e() {
    return !1;
  }
  return Zo = e, Zo;
}
Rr.exports;
var _p;
function Pm() {
  return _p || (_p = 1, (function(e, t) {
    var r = nt(), n = O1(), i = t && !t.nodeType && t, a = i && !0 && e && !e.nodeType && e, o = a && a.exports === i, u = o ? r.Buffer : void 0, s = u ? u.isBuffer : void 0, c = s || n;
    e.exports = c;
  })(Rr, Rr.exports)), Rr.exports;
}
var Jo, Op;
function Bl() {
  if (Op) return Jo;
  Op = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function r(n, i) {
    var a = typeof n;
    return i = i ?? e, !!i && (a == "number" || a != "symbol" && t.test(n)) && n > -1 && n % 1 == 0 && n < i;
  }
  return Jo = r, Jo;
}
var Qo, Sp;
function Fl() {
  if (Sp) return Qo;
  Sp = 1;
  var e = 9007199254740991;
  function t(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= e;
  }
  return Qo = t, Qo;
}
var eu, Ap;
function S1() {
  if (Ap) return eu;
  Ap = 1;
  var e = pt(), t = Fl(), r = dt(), n = "[object Arguments]", i = "[object Array]", a = "[object Boolean]", o = "[object Date]", u = "[object Error]", s = "[object Function]", c = "[object Map]", f = "[object Number]", l = "[object Object]", h = "[object RegExp]", d = "[object Set]", g = "[object String]", v = "[object WeakMap]", p = "[object ArrayBuffer]", m = "[object DataView]", w = "[object Float32Array]", x = "[object Float64Array]", _ = "[object Int8Array]", y = "[object Int16Array]", b = "[object Int32Array]", O = "[object Uint8Array]", S = "[object Uint8ClampedArray]", A = "[object Uint16Array]", C = "[object Uint32Array]", T = {};
  T[w] = T[x] = T[_] = T[y] = T[b] = T[O] = T[S] = T[A] = T[C] = !0, T[n] = T[i] = T[p] = T[a] = T[m] = T[o] = T[u] = T[s] = T[c] = T[f] = T[l] = T[h] = T[d] = T[g] = T[v] = !1;
  function P(j) {
    return r(j) && t(j.length) && !!T[e(j)];
  }
  return eu = P, eu;
}
var tu, Pp;
function Tm() {
  if (Pp) return tu;
  Pp = 1;
  function e(t) {
    return function(r) {
      return t(r);
    };
  }
  return tu = e, tu;
}
var Dr = { exports: {} };
Dr.exports;
var Tp;
function A1() {
  return Tp || (Tp = 1, (function(e, t) {
    var r = Kg(), n = t && !t.nodeType && t, i = n && !0 && e && !e.nodeType && e, a = i && i.exports === n, o = a && r.process, u = (function() {
      try {
        var s = i && i.require && i.require("util").types;
        return s || o && o.binding && o.binding("util");
      } catch {
      }
    })();
    e.exports = u;
  })(Dr, Dr.exports)), Dr.exports;
}
var ru, Ep;
function Em() {
  if (Ep) return ru;
  Ep = 1;
  var e = S1(), t = Tm(), r = A1(), n = r && r.isTypedArray, i = n ? t(n) : e;
  return ru = i, ru;
}
var nu, jp;
function P1() {
  if (jp) return nu;
  jp = 1;
  var e = x1(), t = Ll(), r = Ie(), n = Pm(), i = Bl(), a = Em(), o = Object.prototype, u = o.hasOwnProperty;
  function s(c, f) {
    var l = r(c), h = !l && t(c), d = !l && !h && n(c), g = !l && !h && !d && a(c), v = l || h || d || g, p = v ? e(c.length, String) : [], m = p.length;
    for (var w in c)
      (f || u.call(c, w)) && !(v && // Safari 9 has enumerable `arguments.length` in strict mode.
      (w == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      d && (w == "offset" || w == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      g && (w == "buffer" || w == "byteLength" || w == "byteOffset") || // Skip index properties.
      i(w, m))) && p.push(w);
    return p;
  }
  return nu = s, nu;
}
var iu, Mp;
function T1() {
  if (Mp) return iu;
  Mp = 1;
  var e = Object.prototype;
  function t(r) {
    var n = r && r.constructor, i = typeof n == "function" && n.prototype || e;
    return r === i;
  }
  return iu = t, iu;
}
var au, Cp;
function jm() {
  if (Cp) return au;
  Cp = 1;
  function e(t, r) {
    return function(n) {
      return t(r(n));
    };
  }
  return au = e, au;
}
var ou, Ip;
function E1() {
  if (Ip) return ou;
  Ip = 1;
  var e = jm(), t = e(Object.keys, Object);
  return ou = t, ou;
}
var uu, $p;
function j1() {
  if ($p) return uu;
  $p = 1;
  var e = T1(), t = E1(), r = Object.prototype, n = r.hasOwnProperty;
  function i(a) {
    if (!e(a))
      return t(a);
    var o = [];
    for (var u in Object(a))
      n.call(a, u) && u != "constructor" && o.push(u);
    return o;
  }
  return uu = i, uu;
}
var su, Rp;
function _n() {
  if (Rp) return su;
  Rp = 1;
  var e = Al(), t = Fl();
  function r(n) {
    return n != null && t(n.length) && !e(n);
  }
  return su = r, su;
}
var cu, Dp;
function Fi() {
  if (Dp) return cu;
  Dp = 1;
  var e = P1(), t = j1(), r = _n();
  function n(i) {
    return r(i) ? e(i) : t(i);
  }
  return cu = n, cu;
}
var lu, Np;
function M1() {
  if (Np) return lu;
  Np = 1;
  var e = g1(), t = w1(), r = Fi();
  function n(i) {
    return e(i, r, t);
  }
  return lu = n, lu;
}
var fu, qp;
function C1() {
  if (qp) return fu;
  qp = 1;
  var e = M1(), t = 1, r = Object.prototype, n = r.hasOwnProperty;
  function i(a, o, u, s, c, f) {
    var l = u & t, h = e(a), d = h.length, g = e(o), v = g.length;
    if (d != v && !l)
      return !1;
    for (var p = d; p--; ) {
      var m = h[p];
      if (!(l ? m in o : n.call(o, m)))
        return !1;
    }
    var w = f.get(a), x = f.get(o);
    if (w && x)
      return w == o && x == a;
    var _ = !0;
    f.set(a, o), f.set(o, a);
    for (var y = l; ++p < d; ) {
      m = h[p];
      var b = a[m], O = o[m];
      if (s)
        var S = l ? s(O, b, m, o, a, f) : s(b, O, m, a, o, f);
      if (!(S === void 0 ? b === O || c(b, O, u, s, f) : S)) {
        _ = !1;
        break;
      }
      y || (y = m == "constructor");
    }
    if (_ && !y) {
      var A = a.constructor, C = o.constructor;
      A != C && "constructor" in a && "constructor" in o && !(typeof A == "function" && A instanceof A && typeof C == "function" && C instanceof C) && (_ = !1);
    }
    return f.delete(a), f.delete(o), _;
  }
  return fu = i, fu;
}
var hu, kp;
function I1() {
  if (kp) return hu;
  kp = 1;
  var e = zt(), t = nt(), r = e(t, "DataView");
  return hu = r, hu;
}
var pu, Lp;
function $1() {
  if (Lp) return pu;
  Lp = 1;
  var e = zt(), t = nt(), r = e(t, "Promise");
  return pu = r, pu;
}
var du, Bp;
function Mm() {
  if (Bp) return du;
  Bp = 1;
  var e = zt(), t = nt(), r = e(t, "Set");
  return du = r, du;
}
var vu, Fp;
function R1() {
  if (Fp) return vu;
  Fp = 1;
  var e = zt(), t = nt(), r = e(t, "WeakMap");
  return vu = r, vu;
}
var yu, Up;
function D1() {
  if (Up) return yu;
  Up = 1;
  var e = I1(), t = Tl(), r = $1(), n = Mm(), i = R1(), a = pt(), o = Xg(), u = "[object Map]", s = "[object Object]", c = "[object Promise]", f = "[object Set]", l = "[object WeakMap]", h = "[object DataView]", d = o(e), g = o(t), v = o(r), p = o(n), m = o(i), w = a;
  return (e && w(new e(new ArrayBuffer(1))) != h || t && w(new t()) != u || r && w(r.resolve()) != c || n && w(new n()) != f || i && w(new i()) != l) && (w = function(x) {
    var _ = a(x), y = _ == s ? x.constructor : void 0, b = y ? o(y) : "";
    if (b)
      switch (b) {
        case d:
          return h;
        case g:
          return u;
        case v:
          return c;
        case p:
          return f;
        case m:
          return l;
      }
    return _;
  }), yu = w, yu;
}
var gu, Wp;
function N1() {
  if (Wp) return gu;
  Wp = 1;
  var e = wm(), t = Sm(), r = y1(), n = C1(), i = D1(), a = Ie(), o = Pm(), u = Em(), s = 1, c = "[object Arguments]", f = "[object Array]", l = "[object Object]", h = Object.prototype, d = h.hasOwnProperty;
  function g(v, p, m, w, x, _) {
    var y = a(v), b = a(p), O = y ? f : i(v), S = b ? f : i(p);
    O = O == c ? l : O, S = S == c ? l : S;
    var A = O == l, C = S == l, T = O == S;
    if (T && o(v)) {
      if (!o(p))
        return !1;
      y = !0, A = !1;
    }
    if (T && !A)
      return _ || (_ = new e()), y || u(v) ? t(v, p, m, w, x, _) : r(v, p, O, m, w, x, _);
    if (!(m & s)) {
      var P = A && d.call(v, "__wrapped__"), j = C && d.call(p, "__wrapped__");
      if (P || j) {
        var I = P ? v.value() : v, M = j ? p.value() : p;
        return _ || (_ = new e()), x(I, M, m, w, _);
      }
    }
    return T ? (_ || (_ = new e()), n(v, p, m, w, x, _)) : !1;
  }
  return gu = g, gu;
}
var mu, zp;
function Ul() {
  if (zp) return mu;
  zp = 1;
  var e = N1(), t = dt();
  function r(n, i, a, o, u) {
    return n === i ? !0 : n == null || i == null || !t(n) && !t(i) ? n !== n && i !== i : e(n, i, a, o, r, u);
  }
  return mu = r, mu;
}
var bu, Hp;
function q1() {
  if (Hp) return bu;
  Hp = 1;
  var e = wm(), t = Ul(), r = 1, n = 2;
  function i(a, o, u, s) {
    var c = u.length, f = c, l = !s;
    if (a == null)
      return !f;
    for (a = Object(a); c--; ) {
      var h = u[c];
      if (l && h[2] ? h[1] !== a[h[0]] : !(h[0] in a))
        return !1;
    }
    for (; ++c < f; ) {
      h = u[c];
      var d = h[0], g = a[d], v = h[1];
      if (l && h[2]) {
        if (g === void 0 && !(d in a))
          return !1;
      } else {
        var p = new e();
        if (s)
          var m = s(g, v, d, a, o, p);
        if (!(m === void 0 ? t(v, g, r | n, s, p) : m))
          return !1;
      }
    }
    return !0;
  }
  return bu = i, bu;
}
var wu, Gp;
function Cm() {
  if (Gp) return wu;
  Gp = 1;
  var e = Ot();
  function t(r) {
    return r === r && !e(r);
  }
  return wu = t, wu;
}
var xu, Kp;
function k1() {
  if (Kp) return xu;
  Kp = 1;
  var e = Cm(), t = Fi();
  function r(n) {
    for (var i = t(n), a = i.length; a--; ) {
      var o = i[a], u = n[o];
      i[a] = [o, u, e(u)];
    }
    return i;
  }
  return xu = r, xu;
}
var _u, Xp;
function Im() {
  if (Xp) return _u;
  Xp = 1;
  function e(t, r) {
    return function(n) {
      return n == null ? !1 : n[t] === r && (r !== void 0 || t in Object(n));
    };
  }
  return _u = e, _u;
}
var Ou, Vp;
function L1() {
  if (Vp) return Ou;
  Vp = 1;
  var e = q1(), t = k1(), r = Im();
  function n(i) {
    var a = t(i);
    return a.length == 1 && a[0][2] ? r(a[0][0], a[0][1]) : function(o) {
      return o === i || e(o, i, a);
    };
  }
  return Ou = n, Ou;
}
var Su, Yp;
function B1() {
  if (Yp) return Su;
  Yp = 1;
  function e(t, r) {
    return t != null && r in Object(t);
  }
  return Su = e, Su;
}
var Au, Zp;
function F1() {
  if (Zp) return Au;
  Zp = 1;
  var e = Zg(), t = Ll(), r = Ie(), n = Bl(), i = Fl(), a = Di();
  function o(u, s, c) {
    s = e(s, u);
    for (var f = -1, l = s.length, h = !1; ++f < l; ) {
      var d = a(s[f]);
      if (!(h = u != null && c(u, d)))
        break;
      u = u[d];
    }
    return h || ++f != l ? h : (l = u == null ? 0 : u.length, !!l && i(l) && n(d, l) && (r(u) || t(u)));
  }
  return Au = o, Au;
}
var Pu, Jp;
function U1() {
  if (Jp) return Pu;
  Jp = 1;
  var e = B1(), t = F1();
  function r(n, i) {
    return n != null && t(n, i, e);
  }
  return Pu = r, Pu;
}
var Tu, Qp;
function W1() {
  if (Qp) return Tu;
  Qp = 1;
  var e = Ul(), t = Jg(), r = U1(), n = Sl(), i = Cm(), a = Im(), o = Di(), u = 1, s = 2;
  function c(f, l) {
    return n(f) && i(l) ? a(o(f), l) : function(h) {
      var d = t(h, f);
      return d === void 0 && d === l ? r(h, f) : e(l, d, u | s);
    };
  }
  return Tu = c, Tu;
}
var Eu, ed;
function _r() {
  if (ed) return Eu;
  ed = 1;
  function e(t) {
    return t;
  }
  return Eu = e, Eu;
}
var ju, td;
function z1() {
  if (td) return ju;
  td = 1;
  function e(t) {
    return function(r) {
      return r?.[t];
    };
  }
  return ju = e, ju;
}
var Mu, rd;
function H1() {
  if (rd) return Mu;
  rd = 1;
  var e = Ml();
  function t(r) {
    return function(n) {
      return e(n, r);
    };
  }
  return Mu = t, Mu;
}
var Cu, nd;
function G1() {
  if (nd) return Cu;
  nd = 1;
  var e = z1(), t = H1(), r = Sl(), n = Di();
  function i(a) {
    return r(a) ? e(n(a)) : t(a);
  }
  return Cu = i, Cu;
}
var Iu, id;
function St() {
  if (id) return Iu;
  id = 1;
  var e = L1(), t = W1(), r = _r(), n = Ie(), i = G1();
  function a(o) {
    return typeof o == "function" ? o : o == null ? r : typeof o == "object" ? n(o) ? t(o[0], o[1]) : e(o) : i(o);
  }
  return Iu = a, Iu;
}
var $u, ad;
function $m() {
  if (ad) return $u;
  ad = 1;
  function e(t, r, n, i) {
    for (var a = t.length, o = n + (i ? 1 : -1); i ? o-- : ++o < a; )
      if (r(t[o], o, t))
        return o;
    return -1;
  }
  return $u = e, $u;
}
var Ru, od;
function K1() {
  if (od) return Ru;
  od = 1;
  function e(t) {
    return t !== t;
  }
  return Ru = e, Ru;
}
var Du, ud;
function X1() {
  if (ud) return Du;
  ud = 1;
  function e(t, r, n) {
    for (var i = n - 1, a = t.length; ++i < a; )
      if (t[i] === r)
        return i;
    return -1;
  }
  return Du = e, Du;
}
var Nu, sd;
function V1() {
  if (sd) return Nu;
  sd = 1;
  var e = $m(), t = K1(), r = X1();
  function n(i, a, o) {
    return a === a ? r(i, a, o) : e(i, t, o);
  }
  return Nu = n, Nu;
}
var qu, cd;
function Y1() {
  if (cd) return qu;
  cd = 1;
  var e = V1();
  function t(r, n) {
    var i = r == null ? 0 : r.length;
    return !!i && e(r, n, 0) > -1;
  }
  return qu = t, qu;
}
var ku, ld;
function Z1() {
  if (ld) return ku;
  ld = 1;
  function e(t, r, n) {
    for (var i = -1, a = t == null ? 0 : t.length; ++i < a; )
      if (n(r, t[i]))
        return !0;
    return !1;
  }
  return ku = e, ku;
}
var Lu, fd;
function J1() {
  if (fd) return Lu;
  fd = 1;
  function e() {
  }
  return Lu = e, Lu;
}
var Bu, hd;
function Q1() {
  if (hd) return Bu;
  hd = 1;
  var e = Mm(), t = J1(), r = kl(), n = 1 / 0, i = e && 1 / r(new e([, -0]))[1] == n ? function(a) {
    return new e(a);
  } : t;
  return Bu = i, Bu;
}
var Fu, pd;
function e_() {
  if (pd) return Fu;
  pd = 1;
  var e = xm(), t = Y1(), r = Z1(), n = Om(), i = Q1(), a = kl(), o = 200;
  function u(s, c, f) {
    var l = -1, h = t, d = s.length, g = !0, v = [], p = v;
    if (f)
      g = !1, h = r;
    else if (d >= o) {
      var m = c ? null : i(s);
      if (m)
        return a(m);
      g = !1, h = n, p = new e();
    } else
      p = c ? [] : v;
    e:
      for (; ++l < d; ) {
        var w = s[l], x = c ? c(w) : w;
        if (w = f || w !== 0 ? w : 0, g && x === x) {
          for (var _ = p.length; _--; )
            if (p[_] === x)
              continue e;
          c && p.push(x), v.push(w);
        } else h(p, x, f) || (p !== v && p.push(x), v.push(w));
      }
    return v;
  }
  return Fu = u, Fu;
}
var Uu, dd;
function t_() {
  if (dd) return Uu;
  dd = 1;
  var e = St(), t = e_();
  function r(n, i) {
    return n && n.length ? t(n, e(i, 2)) : [];
  }
  return Uu = r, Uu;
}
var r_ = t_();
const vd = /* @__PURE__ */ ae(r_);
function Rm(e, t, r) {
  return t === !0 ? vd(e, r) : J(t) ? vd(e, t) : e;
}
function ir(e) {
  "@babel/helpers - typeof";
  return ir = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ir(e);
}
var n_ = ["ref"];
function yd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function it(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yd(Object(r), !0).forEach(function(n) {
      Ui(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function i_(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function gd(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Nm(n.key), n);
  }
}
function a_(e, t, r) {
  return t && gd(e.prototype, t), r && gd(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function o_(e, t, r) {
  return t = Vn(t), u_(e, Dm() ? Reflect.construct(t, r || [], Vn(e).constructor) : t.apply(e, r));
}
function u_(e, t) {
  if (t && (ir(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return s_(e);
}
function s_(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Dm() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Dm = function() {
    return !!e;
  })();
}
function Vn(e) {
  return Vn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Vn(e);
}
function c_(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Sc(e, t);
}
function Sc(e, t) {
  return Sc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Sc(e, t);
}
function Ui(e, t, r) {
  return t = Nm(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Nm(e) {
  var t = l_(e, "string");
  return ir(t) == "symbol" ? t : t + "";
}
function l_(e, t) {
  if (ir(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ir(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function f_(e, t) {
  if (e == null) return {};
  var r = h_(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function h_(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function p_(e) {
  return e.value;
}
function d_(e, t) {
  if (/* @__PURE__ */ E.isValidElement(e))
    return /* @__PURE__ */ E.cloneElement(e, t);
  if (typeof e == "function")
    return /* @__PURE__ */ E.createElement(e, t);
  t.ref;
  var r = f_(t, n_);
  return /* @__PURE__ */ E.createElement(ql, r);
}
var md = 1, er = /* @__PURE__ */ (function(e) {
  function t() {
    var r;
    i_(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = o_(this, t, [].concat(i)), Ui(r, "lastBoundingBox", {
      width: -1,
      height: -1
    }), r;
  }
  return c_(t, e), a_(t, [{
    key: "componentDidMount",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "getBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        return n.height = this.wrapperNode.offsetHeight, n.width = this.wrapperNode.offsetWidth, n;
      }
      return null;
    }
  }, {
    key: "updateBBox",
    value: function() {
      var n = this.props.onBBoxUpdate, i = this.getBBox();
      i ? (Math.abs(i.width - this.lastBoundingBox.width) > md || Math.abs(i.height - this.lastBoundingBox.height) > md) && (this.lastBoundingBox.width = i.width, this.lastBoundingBox.height = i.height, n && n(i)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, n && n(null));
    }
  }, {
    key: "getBBoxSnapshot",
    value: function() {
      return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? it({}, this.lastBoundingBox) : {
        width: 0,
        height: 0
      };
    }
  }, {
    key: "getDefaultPosition",
    value: function(n) {
      var i = this.props, a = i.layout, o = i.align, u = i.verticalAlign, s = i.margin, c = i.chartWidth, f = i.chartHeight, l, h;
      if (!n || (n.left === void 0 || n.left === null) && (n.right === void 0 || n.right === null))
        if (o === "center" && a === "vertical") {
          var d = this.getBBoxSnapshot();
          l = {
            left: ((c || 0) - d.width) / 2
          };
        } else
          l = o === "right" ? {
            right: s && s.right || 0
          } : {
            left: s && s.left || 0
          };
      if (!n || (n.top === void 0 || n.top === null) && (n.bottom === void 0 || n.bottom === null))
        if (u === "middle") {
          var g = this.getBBoxSnapshot();
          h = {
            top: ((f || 0) - g.height) / 2
          };
        } else
          h = u === "bottom" ? {
            bottom: s && s.bottom || 0
          } : {
            top: s && s.top || 0
          };
      return it(it({}, l), h);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.content, o = i.width, u = i.height, s = i.wrapperStyle, c = i.payloadUniqBy, f = i.payload, l = it(it({
        position: "absolute",
        width: o || "auto",
        height: u || "auto"
      }, this.getDefaultPosition(s)), s);
      return /* @__PURE__ */ E.createElement("div", {
        className: "recharts-legend-wrapper",
        style: l,
        ref: function(d) {
          n.wrapperNode = d;
        }
      }, d_(a, it(it({}, this.props), {}, {
        payload: Rm(f, c, p_)
      })));
    }
  }], [{
    key: "getWithHeight",
    value: function(n, i) {
      var a = it(it({}, this.defaultProps), n.props), o = a.layout;
      return o === "vertical" && B(n.props.height) ? {
        height: n.props.height
      } : o === "horizontal" ? {
        width: n.props.width || i
      } : null;
    }
  }]);
})(Wt);
Ui(er, "displayName", "Legend");
Ui(er, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var Wu, bd;
function v_() {
  if (bd) return Wu;
  bd = 1;
  var e = wn(), t = Ll(), r = Ie(), n = e ? e.isConcatSpreadable : void 0;
  function i(a) {
    return r(a) || t(a) || !!(n && a && a[n]);
  }
  return Wu = i, Wu;
}
var zu, wd;
function qm() {
  if (wd) return zu;
  wd = 1;
  var e = Am(), t = v_();
  function r(n, i, a, o, u) {
    var s = -1, c = n.length;
    for (a || (a = t), u || (u = []); ++s < c; ) {
      var f = n[s];
      i > 0 && a(f) ? i > 1 ? r(f, i - 1, a, o, u) : e(u, f) : o || (u[u.length] = f);
    }
    return u;
  }
  return zu = r, zu;
}
var Hu, xd;
function y_() {
  if (xd) return Hu;
  xd = 1;
  function e(t) {
    return function(r, n, i) {
      for (var a = -1, o = Object(r), u = i(r), s = u.length; s--; ) {
        var c = u[t ? s : ++a];
        if (n(o[c], c, o) === !1)
          break;
      }
      return r;
    };
  }
  return Hu = e, Hu;
}
var Gu, _d;
function g_() {
  if (_d) return Gu;
  _d = 1;
  var e = y_(), t = e();
  return Gu = t, Gu;
}
var Ku, Od;
function km() {
  if (Od) return Ku;
  Od = 1;
  var e = g_(), t = Fi();
  function r(n, i) {
    return n && e(n, i, t);
  }
  return Ku = r, Ku;
}
var Xu, Sd;
function m_() {
  if (Sd) return Xu;
  Sd = 1;
  var e = _n();
  function t(r, n) {
    return function(i, a) {
      if (i == null)
        return i;
      if (!e(i))
        return r(i, a);
      for (var o = i.length, u = n ? o : -1, s = Object(i); (n ? u-- : ++u < o) && a(s[u], u, s) !== !1; )
        ;
      return i;
    };
  }
  return Xu = t, Xu;
}
var Vu, Ad;
function Wl() {
  if (Ad) return Vu;
  Ad = 1;
  var e = km(), t = m_(), r = t(e);
  return Vu = r, Vu;
}
var Yu, Pd;
function Lm() {
  if (Pd) return Yu;
  Pd = 1;
  var e = Wl(), t = _n();
  function r(n, i) {
    var a = -1, o = t(n) ? Array(n.length) : [];
    return e(n, function(u, s, c) {
      o[++a] = i(u, s, c);
    }), o;
  }
  return Yu = r, Yu;
}
var Zu, Td;
function b_() {
  if (Td) return Zu;
  Td = 1;
  function e(t, r) {
    var n = t.length;
    for (t.sort(r); n--; )
      t[n] = t[n].value;
    return t;
  }
  return Zu = e, Zu;
}
var Ju, Ed;
function w_() {
  if (Ed) return Ju;
  Ed = 1;
  var e = wr();
  function t(r, n) {
    if (r !== n) {
      var i = r !== void 0, a = r === null, o = r === r, u = e(r), s = n !== void 0, c = n === null, f = n === n, l = e(n);
      if (!c && !l && !u && r > n || u && s && f && !c && !l || a && s && f || !i && f || !o)
        return 1;
      if (!a && !u && !l && r < n || l && i && o && !a && !u || c && i && o || !s && o || !f)
        return -1;
    }
    return 0;
  }
  return Ju = t, Ju;
}
var Qu, jd;
function x_() {
  if (jd) return Qu;
  jd = 1;
  var e = w_();
  function t(r, n, i) {
    for (var a = -1, o = r.criteria, u = n.criteria, s = o.length, c = i.length; ++a < s; ) {
      var f = e(o[a], u[a]);
      if (f) {
        if (a >= c)
          return f;
        var l = i[a];
        return f * (l == "desc" ? -1 : 1);
      }
    }
    return r.index - n.index;
  }
  return Qu = t, Qu;
}
var es, Md;
function __() {
  if (Md) return es;
  Md = 1;
  var e = jl(), t = Ml(), r = St(), n = Lm(), i = b_(), a = Tm(), o = x_(), u = _r(), s = Ie();
  function c(f, l, h) {
    l.length ? l = e(l, function(v) {
      return s(v) ? function(p) {
        return t(p, v.length === 1 ? v[0] : v);
      } : v;
    }) : l = [u];
    var d = -1;
    l = e(l, a(r));
    var g = n(f, function(v, p, m) {
      var w = e(l, function(x) {
        return x(v);
      });
      return { criteria: w, index: ++d, value: v };
    });
    return i(g, function(v, p) {
      return o(v, p, h);
    });
  }
  return es = c, es;
}
var ts, Cd;
function O_() {
  if (Cd) return ts;
  Cd = 1;
  function e(t, r, n) {
    switch (n.length) {
      case 0:
        return t.call(r);
      case 1:
        return t.call(r, n[0]);
      case 2:
        return t.call(r, n[0], n[1]);
      case 3:
        return t.call(r, n[0], n[1], n[2]);
    }
    return t.apply(r, n);
  }
  return ts = e, ts;
}
var rs, Id;
function S_() {
  if (Id) return rs;
  Id = 1;
  var e = O_(), t = Math.max;
  function r(n, i, a) {
    return i = t(i === void 0 ? n.length - 1 : i, 0), function() {
      for (var o = arguments, u = -1, s = t(o.length - i, 0), c = Array(s); ++u < s; )
        c[u] = o[i + u];
      u = -1;
      for (var f = Array(i + 1); ++u < i; )
        f[u] = o[u];
      return f[i] = a(c), e(n, this, f);
    };
  }
  return rs = r, rs;
}
var ns, $d;
function A_() {
  if ($d) return ns;
  $d = 1;
  function e(t) {
    return function() {
      return t;
    };
  }
  return ns = e, ns;
}
var is, Rd;
function Bm() {
  if (Rd) return is;
  Rd = 1;
  var e = zt(), t = (function() {
    try {
      var r = e(Object, "defineProperty");
      return r({}, "", {}), r;
    } catch {
    }
  })();
  return is = t, is;
}
var as, Dd;
function P_() {
  if (Dd) return as;
  Dd = 1;
  var e = A_(), t = Bm(), r = _r(), n = t ? function(i, a) {
    return t(i, "toString", {
      configurable: !0,
      enumerable: !1,
      value: e(a),
      writable: !0
    });
  } : r;
  return as = n, as;
}
var os, Nd;
function T_() {
  if (Nd) return os;
  Nd = 1;
  var e = 800, t = 16, r = Date.now;
  function n(i) {
    var a = 0, o = 0;
    return function() {
      var u = r(), s = t - (u - o);
      if (o = u, s > 0) {
        if (++a >= e)
          return arguments[0];
      } else
        a = 0;
      return i.apply(void 0, arguments);
    };
  }
  return os = n, os;
}
var us, qd;
function E_() {
  if (qd) return us;
  qd = 1;
  var e = P_(), t = T_(), r = t(e);
  return us = r, us;
}
var ss, kd;
function j_() {
  if (kd) return ss;
  kd = 1;
  var e = _r(), t = S_(), r = E_();
  function n(i, a) {
    return r(t(i, a, e), i + "");
  }
  return ss = n, ss;
}
var cs, Ld;
function Wi() {
  if (Ld) return cs;
  Ld = 1;
  var e = Pl(), t = _n(), r = Bl(), n = Ot();
  function i(a, o, u) {
    if (!n(u))
      return !1;
    var s = typeof o;
    return (s == "number" ? t(u) && r(o, u.length) : s == "string" && o in u) ? e(u[o], a) : !1;
  }
  return cs = i, cs;
}
var ls, Bd;
function M_() {
  if (Bd) return ls;
  Bd = 1;
  var e = qm(), t = __(), r = j_(), n = Wi(), i = r(function(a, o) {
    if (a == null)
      return [];
    var u = o.length;
    return u > 1 && n(a, o[0], o[1]) ? o = [] : u > 2 && n(o[0], o[1], o[2]) && (o = [o[0]]), t(a, e(o, 1), []);
  });
  return ls = i, ls;
}
var C_ = M_();
const zl = /* @__PURE__ */ ae(C_);
function Wr(e) {
  "@babel/helpers - typeof";
  return Wr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Wr(e);
}
function Ac() {
  return Ac = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ac.apply(this, arguments);
}
function I_(e, t) {
  return N_(e) || D_(e, t) || R_(e, t) || $_();
}
function $_() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function R_(e, t) {
  if (e) {
    if (typeof e == "string") return Fd(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Fd(e, t);
  }
}
function Fd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function D_(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], s = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, i = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function N_(e) {
  if (Array.isArray(e)) return e;
}
function Ud(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function fs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ud(Object(r), !0).forEach(function(n) {
      q_(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ud(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function q_(e, t, r) {
  return t = k_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function k_(e) {
  var t = L_(e, "string");
  return Wr(t) == "symbol" ? t : t + "";
}
function L_(e, t) {
  if (Wr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Wr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function B_(e) {
  return Array.isArray(e) && xe(e[0]) && xe(e[1]) ? e.join(" ~ ") : e;
}
var F_ = function(t) {
  var r = t.separator, n = r === void 0 ? " : " : r, i = t.contentStyle, a = i === void 0 ? {} : i, o = t.itemStyle, u = o === void 0 ? {} : o, s = t.labelStyle, c = s === void 0 ? {} : s, f = t.payload, l = t.formatter, h = t.itemSorter, d = t.wrapperClassName, g = t.labelClassName, v = t.label, p = t.labelFormatter, m = t.accessibilityLayer, w = m === void 0 ? !1 : m, x = function() {
    if (f && f.length) {
      var P = {
        padding: 0,
        margin: 0
      }, j = (h ? zl(f, h) : f).map(function(I, M) {
        if (I.type === "none")
          return null;
        var R = fs({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: I.color || "#000"
        }, u), N = I.formatter || l || B_, q = I.value, k = I.name, W = q, H = k;
        if (N && W != null && H != null) {
          var F = N(q, k, I, M, f);
          if (Array.isArray(F)) {
            var G = I_(F, 2);
            W = G[0], H = G[1];
          } else
            W = F;
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ E.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(M),
            style: R
          }, xe(H) ? /* @__PURE__ */ E.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, H) : null, xe(H) ? /* @__PURE__ */ E.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, n) : null, /* @__PURE__ */ E.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, W), /* @__PURE__ */ E.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, I.unit || ""))
        );
      });
      return /* @__PURE__ */ E.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: P
      }, j);
    }
    return null;
  }, _ = fs({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, a), y = fs({
    margin: 0
  }, c), b = !V(v), O = b ? v : "", S = se("recharts-default-tooltip", d), A = se("recharts-tooltip-label", g);
  b && p && f !== void 0 && f !== null && (O = p(v, f));
  var C = w ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ E.createElement("div", Ac({
    className: S,
    style: _
  }, C), /* @__PURE__ */ E.createElement("p", {
    className: A,
    style: y
  }, /* @__PURE__ */ E.isValidElement(O) ? O : "".concat(O)), x());
};
function zr(e) {
  "@babel/helpers - typeof";
  return zr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, zr(e);
}
function Mn(e, t, r) {
  return t = U_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function U_(e) {
  var t = W_(e, "string");
  return zr(t) == "symbol" ? t : t + "";
}
function W_(e, t) {
  if (zr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (zr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ar = "recharts-tooltip-wrapper", z_ = {
  visibility: "hidden"
};
function H_(e) {
  var t = e.coordinate, r = e.translateX, n = e.translateY;
  return se(Ar, Mn(Mn(Mn(Mn({}, "".concat(Ar, "-right"), B(r) && t && B(t.x) && r >= t.x), "".concat(Ar, "-left"), B(r) && t && B(t.x) && r < t.x), "".concat(Ar, "-bottom"), B(n) && t && B(t.y) && n >= t.y), "".concat(Ar, "-top"), B(n) && t && B(t.y) && n < t.y));
}
function Wd(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.key, i = e.offsetTopLeft, a = e.position, o = e.reverseDirection, u = e.tooltipDimension, s = e.viewBox, c = e.viewBoxDimension;
  if (a && B(a[n]))
    return a[n];
  var f = r[n] - u - i, l = r[n] + i;
  if (t[n])
    return o[n] ? f : l;
  if (o[n]) {
    var h = f, d = s[n];
    return h < d ? Math.max(l, s[n]) : Math.max(f, s[n]);
  }
  var g = l + u, v = s[n] + c;
  return g > v ? Math.max(f, s[n]) : Math.max(l, s[n]);
}
function G_(e) {
  var t = e.translateX, r = e.translateY, n = e.useTranslate3d;
  return {
    transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
  };
}
function K_(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.offsetTopLeft, i = e.position, a = e.reverseDirection, o = e.tooltipBox, u = e.useTranslate3d, s = e.viewBox, c, f, l;
  return o.height > 0 && o.width > 0 && r ? (f = Wd({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "x",
    offsetTopLeft: n,
    position: i,
    reverseDirection: a,
    tooltipDimension: o.width,
    viewBox: s,
    viewBoxDimension: s.width
  }), l = Wd({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "y",
    offsetTopLeft: n,
    position: i,
    reverseDirection: a,
    tooltipDimension: o.height,
    viewBox: s,
    viewBoxDimension: s.height
  }), c = G_({
    translateX: f,
    translateY: l,
    useTranslate3d: u
  })) : c = z_, {
    cssProperties: c,
    cssClasses: H_({
      translateX: f,
      translateY: l,
      coordinate: r
    })
  };
}
function ar(e) {
  "@babel/helpers - typeof";
  return ar = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ar(e);
}
function zd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Hd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zd(Object(r), !0).forEach(function(n) {
      Tc(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function X_(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function V_(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Um(n.key), n);
  }
}
function Y_(e, t, r) {
  return t && V_(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Z_(e, t, r) {
  return t = Yn(t), J_(e, Fm() ? Reflect.construct(t, r || [], Yn(e).constructor) : t.apply(e, r));
}
function J_(e, t) {
  if (t && (ar(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Q_(e);
}
function Q_(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Fm() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Fm = function() {
    return !!e;
  })();
}
function Yn(e) {
  return Yn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Yn(e);
}
function eO(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Pc(e, t);
}
function Pc(e, t) {
  return Pc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Pc(e, t);
}
function Tc(e, t, r) {
  return t = Um(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Um(e) {
  var t = tO(e, "string");
  return ar(t) == "symbol" ? t : t + "";
}
function tO(e, t) {
  if (ar(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ar(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Gd = 1, rO = /* @__PURE__ */ (function(e) {
  function t() {
    var r;
    X_(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = Z_(this, t, [].concat(i)), Tc(r, "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), Tc(r, "handleKeyDown", function(o) {
      if (o.key === "Escape") {
        var u, s, c, f;
        r.setState({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (u = (s = r.props.coordinate) === null || s === void 0 ? void 0 : s.x) !== null && u !== void 0 ? u : 0,
            y: (c = (f = r.props.coordinate) === null || f === void 0 ? void 0 : f.y) !== null && c !== void 0 ? c : 0
          }
        });
      }
    }), r;
  }
  return eO(t, e), Y_(t, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        (Math.abs(n.width - this.state.lastBoundingBox.width) > Gd || Math.abs(n.height - this.state.lastBoundingBox.height) > Gd) && this.setState({
          lastBoundingBox: {
            width: n.width,
            height: n.height
          }
        });
      } else (this.state.lastBoundingBox.width !== -1 || this.state.lastBoundingBox.height !== -1) && this.setState({
        lastBoundingBox: {
          width: -1,
          height: -1
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function() {
      document.addEventListener("keydown", this.handleKeyDown), this.updateBBox();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      document.removeEventListener("keydown", this.handleKeyDown);
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      var n, i;
      this.props.active && this.updateBBox(), this.state.dismissed && (((n = this.props.coordinate) === null || n === void 0 ? void 0 : n.x) !== this.state.dismissedAtCoordinate.x || ((i = this.props.coordinate) === null || i === void 0 ? void 0 : i.y) !== this.state.dismissedAtCoordinate.y) && (this.state.dismissed = !1);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.active, o = i.allowEscapeViewBox, u = i.animationDuration, s = i.animationEasing, c = i.children, f = i.coordinate, l = i.hasPayload, h = i.isAnimationActive, d = i.offset, g = i.position, v = i.reverseDirection, p = i.useTranslate3d, m = i.viewBox, w = i.wrapperStyle, x = K_({
        allowEscapeViewBox: o,
        coordinate: f,
        offsetTopLeft: d,
        position: g,
        reverseDirection: v,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: p,
        viewBox: m
      }), _ = x.cssClasses, y = x.cssProperties, b = Hd(Hd({
        transition: h && a ? "transform ".concat(u, "ms ").concat(s) : void 0
      }, y), {}, {
        pointerEvents: "none",
        visibility: !this.state.dismissed && a && l ? "visible" : "hidden",
        position: "absolute",
        top: 0,
        left: 0
      }, w);
      return (
        // This element allow listening to the `Escape` key.
        // See https://github.com/recharts/recharts/pull/2925
        /* @__PURE__ */ E.createElement("div", {
          tabIndex: -1,
          className: _,
          style: b,
          ref: function(S) {
            n.wrapperNode = S;
          }
        }, c)
      );
    }
  }]);
})(Wt), nO = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, zi = {
  isSsr: nO()
};
function or(e) {
  "@babel/helpers - typeof";
  return or = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, or(e);
}
function Kd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Xd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Kd(Object(r), !0).forEach(function(n) {
      Hl(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Kd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function iO(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function aO(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, zm(n.key), n);
  }
}
function oO(e, t, r) {
  return t && aO(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function uO(e, t, r) {
  return t = Zn(t), sO(e, Wm() ? Reflect.construct(t, r || [], Zn(e).constructor) : t.apply(e, r));
}
function sO(e, t) {
  if (t && (or(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return cO(e);
}
function cO(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Wm() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Wm = function() {
    return !!e;
  })();
}
function Zn(e) {
  return Zn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Zn(e);
}
function lO(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ec(e, t);
}
function Ec(e, t) {
  return Ec = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Ec(e, t);
}
function Hl(e, t, r) {
  return t = zm(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function zm(e) {
  var t = fO(e, "string");
  return or(t) == "symbol" ? t : t + "";
}
function fO(e, t) {
  if (or(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (or(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function hO(e) {
  return e.dataKey;
}
function pO(e, t) {
  return /* @__PURE__ */ E.isValidElement(e) ? /* @__PURE__ */ E.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ E.createElement(e, t) : /* @__PURE__ */ E.createElement(F_, t);
}
var Ye = /* @__PURE__ */ (function(e) {
  function t() {
    return iO(this, t), uO(this, t, arguments);
  }
  return lO(t, e), oO(t, [{
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.active, o = i.allowEscapeViewBox, u = i.animationDuration, s = i.animationEasing, c = i.content, f = i.coordinate, l = i.filterNull, h = i.isAnimationActive, d = i.offset, g = i.payload, v = i.payloadUniqBy, p = i.position, m = i.reverseDirection, w = i.useTranslate3d, x = i.viewBox, _ = i.wrapperStyle, y = g ?? [];
      l && y.length && (y = Rm(g.filter(function(O) {
        return O.value != null && (O.hide !== !0 || n.props.includeHidden);
      }), v, hO));
      var b = y.length > 0;
      return /* @__PURE__ */ E.createElement(rO, {
        allowEscapeViewBox: o,
        animationDuration: u,
        animationEasing: s,
        isAnimationActive: h,
        active: a,
        coordinate: f,
        hasPayload: b,
        offset: d,
        position: p,
        reverseDirection: m,
        useTranslate3d: w,
        viewBox: x,
        wrapperStyle: _
      }, pO(c, Xd(Xd({}, this.props), {}, {
        payload: y
      })));
    }
  }]);
})(Wt);
Hl(Ye, "displayName", "Tooltip");
Hl(Ye, "defaultProps", {
  accessibilityLayer: !1,
  allowEscapeViewBox: {
    x: !1,
    y: !1
  },
  animationDuration: 400,
  animationEasing: "ease",
  contentStyle: {},
  coordinate: {
    x: 0,
    y: 0
  },
  cursor: !0,
  cursorStyle: {},
  filterNull: !0,
  isAnimationActive: !zi.isSsr,
  itemStyle: {},
  labelStyle: {},
  offset: 10,
  reverseDirection: {
    x: !1,
    y: !1
  },
  separator: " : ",
  trigger: "hover",
  useTranslate3d: !1,
  viewBox: {
    x: 0,
    y: 0,
    height: 0,
    width: 0
  },
  wrapperStyle: {}
});
var hs, Vd;
function dO() {
  if (Vd) return hs;
  Vd = 1;
  var e = nt(), t = function() {
    return e.Date.now();
  };
  return hs = t, hs;
}
var ps, Yd;
function vO() {
  if (Yd) return ps;
  Yd = 1;
  var e = /\s/;
  function t(r) {
    for (var n = r.length; n-- && e.test(r.charAt(n)); )
      ;
    return n;
  }
  return ps = t, ps;
}
var ds, Zd;
function yO() {
  if (Zd) return ds;
  Zd = 1;
  var e = vO(), t = /^\s+/;
  function r(n) {
    return n && n.slice(0, e(n) + 1).replace(t, "");
  }
  return ds = r, ds;
}
var vs, Jd;
function Hm() {
  if (Jd) return vs;
  Jd = 1;
  var e = yO(), t = Ot(), r = wr(), n = NaN, i = /^[-+]0x[0-9a-f]+$/i, a = /^0b[01]+$/i, o = /^0o[0-7]+$/i, u = parseInt;
  function s(c) {
    if (typeof c == "number")
      return c;
    if (r(c))
      return n;
    if (t(c)) {
      var f = typeof c.valueOf == "function" ? c.valueOf() : c;
      c = t(f) ? f + "" : f;
    }
    if (typeof c != "string")
      return c === 0 ? c : +c;
    c = e(c);
    var l = a.test(c);
    return l || o.test(c) ? u(c.slice(2), l ? 2 : 8) : i.test(c) ? n : +c;
  }
  return vs = s, vs;
}
var ys, Qd;
function gO() {
  if (Qd) return ys;
  Qd = 1;
  var e = Ot(), t = dO(), r = Hm(), n = "Expected a function", i = Math.max, a = Math.min;
  function o(u, s, c) {
    var f, l, h, d, g, v, p = 0, m = !1, w = !1, x = !0;
    if (typeof u != "function")
      throw new TypeError(n);
    s = r(s) || 0, e(c) && (m = !!c.leading, w = "maxWait" in c, h = w ? i(r(c.maxWait) || 0, s) : h, x = "trailing" in c ? !!c.trailing : x);
    function _(j) {
      var I = f, M = l;
      return f = l = void 0, p = j, d = u.apply(M, I), d;
    }
    function y(j) {
      return p = j, g = setTimeout(S, s), m ? _(j) : d;
    }
    function b(j) {
      var I = j - v, M = j - p, R = s - I;
      return w ? a(R, h - M) : R;
    }
    function O(j) {
      var I = j - v, M = j - p;
      return v === void 0 || I >= s || I < 0 || w && M >= h;
    }
    function S() {
      var j = t();
      if (O(j))
        return A(j);
      g = setTimeout(S, b(j));
    }
    function A(j) {
      return g = void 0, x && f ? _(j) : (f = l = void 0, d);
    }
    function C() {
      g !== void 0 && clearTimeout(g), p = 0, f = v = l = g = void 0;
    }
    function T() {
      return g === void 0 ? d : A(t());
    }
    function P() {
      var j = t(), I = O(j);
      if (f = arguments, l = this, v = j, I) {
        if (g === void 0)
          return y(v);
        if (w)
          return clearTimeout(g), g = setTimeout(S, s), _(v);
      }
      return g === void 0 && (g = setTimeout(S, s)), d;
    }
    return P.cancel = C, P.flush = T, P;
  }
  return ys = o, ys;
}
var gs, ev;
function mO() {
  if (ev) return gs;
  ev = 1;
  var e = gO(), t = Ot(), r = "Expected a function";
  function n(i, a, o) {
    var u = !0, s = !0;
    if (typeof i != "function")
      throw new TypeError(r);
    return t(o) && (u = "leading" in o ? !!o.leading : u, s = "trailing" in o ? !!o.trailing : s), e(i, a, {
      leading: u,
      maxWait: a,
      trailing: s
    });
  }
  return gs = n, gs;
}
var bO = mO();
const Gm = /* @__PURE__ */ ae(bO);
function Hr(e) {
  "@babel/helpers - typeof";
  return Hr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Hr(e);
}
function tv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Cn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? tv(Object(r), !0).forEach(function(n) {
      wO(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function wO(e, t, r) {
  return t = xO(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function xO(e) {
  var t = _O(e, "string");
  return Hr(t) == "symbol" ? t : t + "";
}
function _O(e, t) {
  if (Hr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Hr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function OO(e, t) {
  return TO(e) || PO(e, t) || AO(e, t) || SO();
}
function SO() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function AO(e, t) {
  if (e) {
    if (typeof e == "string") return rv(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return rv(e, t);
  }
}
function rv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function PO(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], s = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, i = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function TO(e) {
  if (Array.isArray(e)) return e;
}
var EO = /* @__PURE__ */ bn(function(e, t) {
  var r = e.aspect, n = e.initialDimension, i = n === void 0 ? {
    width: -1,
    height: -1
  } : n, a = e.width, o = a === void 0 ? "100%" : a, u = e.height, s = u === void 0 ? "100%" : u, c = e.minWidth, f = c === void 0 ? 0 : c, l = e.minHeight, h = e.maxHeight, d = e.children, g = e.debounce, v = g === void 0 ? 0 : g, p = e.id, m = e.className, w = e.onResize, x = e.style, _ = x === void 0 ? {} : x, y = Bn(null), b = Bn();
  b.current = w, F0(t, function() {
    return Object.defineProperty(y.current, "current", {
      get: function() {
        return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), y.current;
      },
      configurable: !0
    });
  });
  var O = xl({
    containerWidth: i.width,
    containerHeight: i.height
  }), S = OO(O, 2), A = S[0], C = S[1], T = U0(function(j, I) {
    C(function(M) {
      var R = Math.round(j), N = Math.round(I);
      return M.containerWidth === R && M.containerHeight === N ? M : {
        containerWidth: R,
        containerHeight: N
      };
    });
  }, []);
  _l(function() {
    var j = function(k) {
      var W, H = k[0].contentRect, F = H.width, G = H.height;
      T(F, G), (W = b.current) === null || W === void 0 || W.call(b, F, G);
    };
    v > 0 && (j = Gm(j, v, {
      trailing: !0,
      leading: !1
    }));
    var I = new ResizeObserver(j), M = y.current.getBoundingClientRect(), R = M.width, N = M.height;
    return T(R, N), I.observe(y.current), function() {
      I.disconnect();
    };
  }, [T, v]);
  var P = Ol(function() {
    var j = A.containerWidth, I = A.containerHeight;
    if (j < 0 || I < 0)
      return null;
    qt(Rt(o) || Rt(s), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, o, s), qt(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
    var M = Rt(o) ? j : o, R = Rt(s) ? I : s;
    r && r > 0 && (M ? R = M / r : R && (M = R * r), h && R > h && (R = h)), qt(M > 0 || R > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, M, R, o, s, f, l, r);
    var N = !Array.isArray(d) && st(d.type).endsWith("Chart");
    return E.Children.map(d, function(q) {
      return /* @__PURE__ */ E.isValidElement(q) ? /* @__PURE__ */ be(q, Cn({
        width: M,
        height: R
      }, N ? {
        style: Cn({
          height: "100%",
          width: "100%",
          maxHeight: R,
          maxWidth: M
        }, q.props.style)
      } : {})) : q;
    });
  }, [r, d, s, h, l, f, A, o]);
  return /* @__PURE__ */ E.createElement("div", {
    id: p ? "".concat(p) : void 0,
    className: se("recharts-responsive-container", m),
    style: Cn(Cn({}, _), {}, {
      width: o,
      height: s,
      minWidth: f,
      minHeight: l,
      maxHeight: h
    }),
    ref: y
  }, P);
}), Km = function(t) {
  return null;
};
Km.displayName = "Cell";
function Gr(e) {
  "@babel/helpers - typeof";
  return Gr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Gr(e);
}
function nv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function jc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? nv(Object(r), !0).forEach(function(n) {
      jO(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : nv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function jO(e, t, r) {
  return t = MO(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function MO(e) {
  var t = CO(e, "string");
  return Gr(t) == "symbol" ? t : t + "";
}
function CO(e, t) {
  if (Gr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Gr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Yt = {
  widthCache: {},
  cacheCount: 0
}, IO = 2e3, $O = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
}, iv = "recharts_measurement_span";
function RO(e) {
  var t = jc({}, e);
  return Object.keys(t).forEach(function(r) {
    t[r] || delete t[r];
  }), t;
}
var av = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || zi.isSsr)
    return {
      width: 0,
      height: 0
    };
  var n = RO(r), i = JSON.stringify({
    text: t,
    copyStyle: n
  });
  if (Yt.widthCache[i])
    return Yt.widthCache[i];
  try {
    var a = document.getElementById(iv);
    a || (a = document.createElement("span"), a.setAttribute("id", iv), a.setAttribute("aria-hidden", "true"), document.body.appendChild(a));
    var o = jc(jc({}, $O), n);
    Object.assign(a.style, o), a.textContent = "".concat(t);
    var u = a.getBoundingClientRect(), s = {
      width: u.width,
      height: u.height
    };
    return Yt.widthCache[i] = s, ++Yt.cacheCount > IO && (Yt.cacheCount = 0, Yt.widthCache = {}), s;
  } catch {
    return {
      width: 0,
      height: 0
    };
  }
}, DO = function(t) {
  return {
    top: t.top + window.scrollY - document.documentElement.clientTop,
    left: t.left + window.scrollX - document.documentElement.clientLeft
  };
};
function Kr(e) {
  "@babel/helpers - typeof";
  return Kr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Kr(e);
}
function Jn(e, t) {
  return LO(e) || kO(e, t) || qO(e, t) || NO();
}
function NO() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qO(e, t) {
  if (e) {
    if (typeof e == "string") return ov(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ov(e, t);
  }
}
function ov(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function kO(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], s = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        s = !1;
      } else for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, i = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function LO(e) {
  if (Array.isArray(e)) return e;
}
function BO(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function uv(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, UO(n.key), n);
  }
}
function FO(e, t, r) {
  return t && uv(e.prototype, t), r && uv(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function UO(e) {
  var t = WO(e, "string");
  return Kr(t) == "symbol" ? t : t + "";
}
function WO(e, t) {
  if (Kr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Kr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var sv = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, cv = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, zO = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/, HO = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, Xm = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  pt: 96 / 72,
  pc: 96 / 6,
  in: 96,
  Q: 96 / (2.54 * 40),
  px: 1
}, GO = Object.keys(Xm), Jt = "NaN";
function KO(e, t) {
  return e * Xm[t];
}
var In = /* @__PURE__ */ (function() {
  function e(t, r) {
    BO(this, e), this.num = t, this.unit = r, this.num = t, this.unit = r, Number.isNaN(t) && (this.unit = ""), r !== "" && !zO.test(r) && (this.num = NaN, this.unit = ""), GO.includes(r) && (this.num = KO(t, r), this.unit = "px");
  }
  return FO(e, [{
    key: "add",
    value: function(r) {
      return this.unit !== r.unit ? new e(NaN, "") : new e(this.num + r.num, this.unit);
    }
  }, {
    key: "subtract",
    value: function(r) {
      return this.unit !== r.unit ? new e(NaN, "") : new e(this.num - r.num, this.unit);
    }
  }, {
    key: "multiply",
    value: function(r) {
      return this.unit !== "" && r.unit !== "" && this.unit !== r.unit ? new e(NaN, "") : new e(this.num * r.num, this.unit || r.unit);
    }
  }, {
    key: "divide",
    value: function(r) {
      return this.unit !== "" && r.unit !== "" && this.unit !== r.unit ? new e(NaN, "") : new e(this.num / r.num, this.unit || r.unit);
    }
  }, {
    key: "toString",
    value: function() {
      return "".concat(this.num).concat(this.unit);
    }
  }, {
    key: "isNaN",
    value: function() {
      return Number.isNaN(this.num);
    }
  }], [{
    key: "parse",
    value: function(r) {
      var n, i = (n = HO.exec(r)) !== null && n !== void 0 ? n : [], a = Jn(i, 3), o = a[1], u = a[2];
      return new e(parseFloat(o), u ?? "");
    }
  }]);
})();
function Vm(e) {
  if (e.includes(Jt))
    return Jt;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r, n = (r = sv.exec(t)) !== null && r !== void 0 ? r : [], i = Jn(n, 4), a = i[1], o = i[2], u = i[3], s = In.parse(a ?? ""), c = In.parse(u ?? ""), f = o === "*" ? s.multiply(c) : s.divide(c);
    if (f.isNaN())
      return Jt;
    t = t.replace(sv, f.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var l, h = (l = cv.exec(t)) !== null && l !== void 0 ? l : [], d = Jn(h, 4), g = d[1], v = d[2], p = d[3], m = In.parse(g ?? ""), w = In.parse(p ?? ""), x = v === "+" ? m.add(w) : m.subtract(w);
    if (x.isNaN())
      return Jt;
    t = t.replace(cv, x.toString());
  }
  return t;
}
var lv = /\(([^()]*)\)/;
function XO(e) {
  for (var t = e; t.includes("("); ) {
    var r = lv.exec(t), n = Jn(r, 2), i = n[1];
    t = t.replace(lv, Vm(i));
  }
  return t;
}
function VO(e) {
  var t = e.replace(/\s+/g, "");
  return t = XO(t), t = Vm(t), t;
}
function YO(e) {
  try {
    return VO(e);
  } catch {
    return Jt;
  }
}
function ms(e) {
  var t = YO(e.slice(5, -1));
  return t === Jt ? "" : t;
}
var ZO = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"], JO = ["dx", "dy", "angle", "className", "breakAll"];
function Mc() {
  return Mc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Mc.apply(this, arguments);
}
function fv(e, t) {
  if (e == null) return {};
  var r = QO(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function QO(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function hv(e, t) {
  return nS(e) || rS(e, t) || tS(e, t) || eS();
}
function eS() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function tS(e, t) {
  if (e) {
    if (typeof e == "string") return pv(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return pv(e, t);
  }
}
function pv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function rS(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], s = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        s = !1;
      } else for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, i = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function nS(e) {
  if (Array.isArray(e)) return e;
}
var Ym = /[ \f\n\r\t\v\u2028\u2029]+/, Zm = function(t) {
  var r = t.children, n = t.breakAll, i = t.style;
  try {
    var a = [];
    V(r) || (n ? a = r.toString().split("") : a = r.toString().split(Ym));
    var o = a.map(function(s) {
      return {
        word: s,
        width: av(s, i).width
      };
    }), u = n ? 0 : av(" ", i).width;
    return {
      wordsWithComputedWidth: o,
      spaceWidth: u
    };
  } catch {
    return null;
  }
}, iS = function(t, r, n, i, a) {
  var o = t.maxLines, u = t.children, s = t.style, c = t.breakAll, f = B(o), l = u, h = function() {
    var M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return M.reduce(function(R, N) {
      var q = N.word, k = N.width, W = R[R.length - 1];
      if (W && (i == null || a || W.width + k + n < Number(i)))
        W.words.push(q), W.width += k + n;
      else {
        var H = {
          words: [q],
          width: k
        };
        R.push(H);
      }
      return R;
    }, []);
  }, d = h(r), g = function(M) {
    return M.reduce(function(R, N) {
      return R.width > N.width ? R : N;
    });
  };
  if (!f)
    return d;
  for (var v = "…", p = function(M) {
    var R = l.slice(0, M), N = Zm({
      breakAll: c,
      style: s,
      children: R + v
    }).wordsWithComputedWidth, q = h(N), k = q.length > o || g(q).width > Number(i);
    return [k, q];
  }, m = 0, w = l.length - 1, x = 0, _; m <= w && x <= l.length - 1; ) {
    var y = Math.floor((m + w) / 2), b = y - 1, O = p(b), S = hv(O, 2), A = S[0], C = S[1], T = p(y), P = hv(T, 1), j = P[0];
    if (!A && !j && (m = y + 1), A && j && (w = y - 1), !A && j) {
      _ = C;
      break;
    }
    x++;
  }
  return _ || d;
}, dv = function(t) {
  var r = V(t) ? [] : t.toString().split(Ym);
  return [{
    words: r
  }];
}, aS = function(t) {
  var r = t.width, n = t.scaleToFit, i = t.children, a = t.style, o = t.breakAll, u = t.maxLines;
  if ((r || n) && !zi.isSsr) {
    var s, c, f = Zm({
      breakAll: o,
      children: i,
      style: a
    });
    if (f) {
      var l = f.wordsWithComputedWidth, h = f.spaceWidth;
      s = l, c = h;
    } else
      return dv(i);
    return iS({
      breakAll: o,
      children: i,
      maxLines: u,
      style: a
    }, s, c, r, n);
  }
  return dv(i);
}, vv = "#808080", Cc = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, i = t.y, a = i === void 0 ? 0 : i, o = t.lineHeight, u = o === void 0 ? "1em" : o, s = t.capHeight, c = s === void 0 ? "0.71em" : s, f = t.scaleToFit, l = f === void 0 ? !1 : f, h = t.textAnchor, d = h === void 0 ? "start" : h, g = t.verticalAnchor, v = g === void 0 ? "end" : g, p = t.fill, m = p === void 0 ? vv : p, w = fv(t, ZO), x = Ol(function() {
    return aS({
      breakAll: w.breakAll,
      children: w.children,
      maxLines: w.maxLines,
      scaleToFit: l,
      style: w.style,
      width: w.width
    });
  }, [w.breakAll, w.children, w.maxLines, l, w.style, w.width]), _ = w.dx, y = w.dy, b = w.angle, O = w.className, S = w.breakAll, A = fv(w, JO);
  if (!xe(n) || !xe(a))
    return null;
  var C = n + (B(_) ? _ : 0), T = a + (B(y) ? y : 0), P;
  switch (v) {
    case "start":
      P = ms("calc(".concat(c, ")"));
      break;
    case "middle":
      P = ms("calc(".concat((x.length - 1) / 2, " * -").concat(u, " + (").concat(c, " / 2))"));
      break;
    default:
      P = ms("calc(".concat(x.length - 1, " * -").concat(u, ")"));
      break;
  }
  var j = [];
  if (l) {
    var I = x[0].width, M = w.width;
    j.push("scale(".concat((B(M) ? M / I : 1) / I, ")"));
  }
  return b && j.push("rotate(".concat(b, ", ").concat(C, ", ").concat(T, ")")), j.length && (A.transform = j.join(" ")), /* @__PURE__ */ E.createElement("text", Mc({}, ce(A, !0), {
    x: C,
    y: T,
    className: se("recharts-text", O),
    textAnchor: d,
    fill: m.includes("url") ? vv : m
  }), x.map(function(R, N) {
    var q = R.words.join(S ? "" : " ");
    return (
      // duplicate words will cause duplicate keys
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ E.createElement("tspan", {
        x: C,
        dy: N === 0 ? P : u,
        key: "".concat(q, "-").concat(N)
      }, q)
    );
  }));
};
function wt(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function oS(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Gl(e) {
  let t, r, n;
  e.length !== 2 ? (t = wt, r = (u, s) => wt(e(u), s), n = (u, s) => e(u) - s) : (t = e === wt || e === oS ? e : uS, r = e, n = e);
  function i(u, s, c = 0, f = u.length) {
    if (c < f) {
      if (t(s, s) !== 0) return f;
      do {
        const l = c + f >>> 1;
        r(u[l], s) < 0 ? c = l + 1 : f = l;
      } while (c < f);
    }
    return c;
  }
  function a(u, s, c = 0, f = u.length) {
    if (c < f) {
      if (t(s, s) !== 0) return f;
      do {
        const l = c + f >>> 1;
        r(u[l], s) <= 0 ? c = l + 1 : f = l;
      } while (c < f);
    }
    return c;
  }
  function o(u, s, c = 0, f = u.length) {
    const l = i(u, s, c, f - 1);
    return l > c && n(u[l - 1], s) > -n(u[l], s) ? l - 1 : l;
  }
  return { left: i, center: o, right: a };
}
function uS() {
  return 0;
}
function Jm(e) {
  return e === null ? NaN : +e;
}
function* sS(e, t) {
  for (let r of e)
    r != null && (r = +r) >= r && (yield r);
}
const cS = Gl(wt), On = cS.right;
Gl(Jm).center;
class yv extends Map {
  constructor(t, r = hS) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, i] of t) this.set(n, i);
  }
  get(t) {
    return super.get(gv(this, t));
  }
  has(t) {
    return super.has(gv(this, t));
  }
  set(t, r) {
    return super.set(lS(this, t), r);
  }
  delete(t) {
    return super.delete(fS(this, t));
  }
}
function gv({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function lS({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function fS({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && (r = e.get(n), e.delete(n)), r;
}
function hS(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function pS(e = wt) {
  if (e === wt) return Qm;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function Qm(e, t) {
  return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0);
}
const dS = Math.sqrt(50), vS = Math.sqrt(10), yS = Math.sqrt(2);
function Qn(e, t, r) {
  const n = (t - e) / Math.max(0, r), i = Math.floor(Math.log10(n)), a = n / Math.pow(10, i), o = a >= dS ? 10 : a >= vS ? 5 : a >= yS ? 2 : 1;
  let u, s, c;
  return i < 0 ? (c = Math.pow(10, -i) / o, u = Math.round(e * c), s = Math.round(t * c), u / c < e && ++u, s / c > t && --s, c = -c) : (c = Math.pow(10, i) * o, u = Math.round(e / c), s = Math.round(t / c), u * c < e && ++u, s * c > t && --s), s < u && 0.5 <= r && r < 2 ? Qn(e, t, r * 2) : [u, s, c];
}
function Ic(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0)) return [];
  if (e === t) return [e];
  const n = t < e, [i, a, o] = n ? Qn(t, e, r) : Qn(e, t, r);
  if (!(a >= i)) return [];
  const u = a - i + 1, s = new Array(u);
  if (n)
    if (o < 0) for (let c = 0; c < u; ++c) s[c] = (a - c) / -o;
    else for (let c = 0; c < u; ++c) s[c] = (a - c) * o;
  else if (o < 0) for (let c = 0; c < u; ++c) s[c] = (i + c) / -o;
  else for (let c = 0; c < u; ++c) s[c] = (i + c) * o;
  return s;
}
function $c(e, t, r) {
  return t = +t, e = +e, r = +r, Qn(e, t, r)[2];
}
function Rc(e, t, r) {
  t = +t, e = +e, r = +r;
  const n = t < e, i = n ? $c(t, e, r) : $c(e, t, r);
  return (n ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function mv(e, t) {
  let r;
  for (const n of e)
    n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function bv(e, t) {
  let r;
  for (const n of e)
    n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function eb(e, t, r = 0, n = 1 / 0, i) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e.length - 1, n)), !(r <= t && t <= n)) return e;
  for (i = i === void 0 ? Qm : pS(i); n > r; ) {
    if (n - r > 600) {
      const s = n - r + 1, c = t - r + 1, f = Math.log(s), l = 0.5 * Math.exp(2 * f / 3), h = 0.5 * Math.sqrt(f * l * (s - l) / s) * (c - s / 2 < 0 ? -1 : 1), d = Math.max(r, Math.floor(t - c * l / s + h)), g = Math.min(n, Math.floor(t + (s - c) * l / s + h));
      eb(e, t, d, g, i);
    }
    const a = e[t];
    let o = r, u = n;
    for (Pr(e, r, t), i(e[n], a) > 0 && Pr(e, r, n); o < u; ) {
      for (Pr(e, o, u), ++o, --u; i(e[o], a) < 0; ) ++o;
      for (; i(e[u], a) > 0; ) --u;
    }
    i(e[r], a) === 0 ? Pr(e, r, u) : (++u, Pr(e, u, n)), u <= t && (r = u + 1), t <= u && (n = u - 1);
  }
  return e;
}
function Pr(e, t, r) {
  const n = e[t];
  e[t] = e[r], e[r] = n;
}
function gS(e, t, r) {
  if (e = Float64Array.from(sS(e)), !(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return bv(e);
    if (t >= 1) return mv(e);
    var n, i = (n - 1) * t, a = Math.floor(i), o = mv(eb(e, a).subarray(0, a + 1)), u = bv(e.subarray(a + 1));
    return o + (u - o) * (i - a);
  }
}
function mS(e, t, r = Jm) {
  if (!(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n, i = (n - 1) * t, a = Math.floor(i), o = +r(e[a], a, e), u = +r(e[a + 1], a + 1, e);
    return o + (u - o) * (i - a);
  }
}
function bS(e, t, r) {
  e = +e, t = +t, r = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +r;
  for (var n = -1, i = Math.max(0, Math.ceil((t - e) / r)) | 0, a = new Array(i); ++n < i; )
    a[n] = e + n * r;
  return a;
}
function Ue(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function vt(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
    default: {
      this.domain(e), typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
  }
  return this;
}
const Dc = /* @__PURE__ */ Symbol("implicit");
function Kl() {
  var e = new yv(), t = [], r = [], n = Dc;
  function i(a) {
    let o = e.get(a);
    if (o === void 0) {
      if (n !== Dc) return n;
      e.set(a, o = t.push(a) - 1);
    }
    return r[o % r.length];
  }
  return i.domain = function(a) {
    if (!arguments.length) return t.slice();
    t = [], e = new yv();
    for (const o of a)
      e.has(o) || e.set(o, t.push(o) - 1);
    return i;
  }, i.range = function(a) {
    return arguments.length ? (r = Array.from(a), i) : r.slice();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return Kl(t, r).unknown(n);
  }, Ue.apply(i, arguments), i;
}
function Xr() {
  var e = Kl().unknown(void 0), t = e.domain, r = e.range, n = 0, i = 1, a, o, u = !1, s = 0, c = 0, f = 0.5;
  delete e.unknown;
  function l() {
    var h = t().length, d = i < n, g = d ? i : n, v = d ? n : i;
    a = (v - g) / Math.max(1, h - s + c * 2), u && (a = Math.floor(a)), g += (v - g - a * (h - s)) * f, o = a * (1 - s), u && (g = Math.round(g), o = Math.round(o));
    var p = bS(h).map(function(m) {
      return g + a * m;
    });
    return r(d ? p.reverse() : p);
  }
  return e.domain = function(h) {
    return arguments.length ? (t(h), l()) : t();
  }, e.range = function(h) {
    return arguments.length ? ([n, i] = h, n = +n, i = +i, l()) : [n, i];
  }, e.rangeRound = function(h) {
    return [n, i] = h, n = +n, i = +i, u = !0, l();
  }, e.bandwidth = function() {
    return o;
  }, e.step = function() {
    return a;
  }, e.round = function(h) {
    return arguments.length ? (u = !!h, l()) : u;
  }, e.padding = function(h) {
    return arguments.length ? (s = Math.min(1, c = +h), l()) : s;
  }, e.paddingInner = function(h) {
    return arguments.length ? (s = Math.min(1, h), l()) : s;
  }, e.paddingOuter = function(h) {
    return arguments.length ? (c = +h, l()) : c;
  }, e.align = function(h) {
    return arguments.length ? (f = Math.max(0, Math.min(1, h)), l()) : f;
  }, e.copy = function() {
    return Xr(t(), [n, i]).round(u).paddingInner(s).paddingOuter(c).align(f);
  }, Ue.apply(l(), arguments);
}
function tb(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return tb(t());
  }, e;
}
function kr() {
  return tb(Xr.apply(null, arguments).paddingInner(1));
}
function Xl(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function wS(e, t) {
  t === void 0 && (t = e, e = Mi);
  for (var r = 0, n = t.length - 1, i = t[0], a = new Array(n < 0 ? 0 : n); r < n; ) a[r] = e(i, i = t[++r]);
  return function(o) {
    var u = Math.max(0, Math.min(n - 1, Math.floor(o *= n)));
    return a[u](o - u);
  };
}
function xS(e) {
  return function() {
    return e;
  };
}
function ei(e) {
  return +e;
}
var wv = [0, 1];
function je(e) {
  return e;
}
function Nc(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : xS(isNaN(t) ? NaN : 0.5);
}
function _S(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(n) {
    return Math.max(e, Math.min(t, n));
  };
}
function OS(e, t, r) {
  var n = e[0], i = e[1], a = t[0], o = t[1];
  return i < n ? (n = Nc(i, n), a = r(o, a)) : (n = Nc(n, i), a = r(a, o)), function(u) {
    return a(n(u));
  };
}
function SS(e, t, r) {
  var n = Math.min(e.length, t.length) - 1, i = new Array(n), a = new Array(n), o = -1;
  for (e[n] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < n; )
    i[o] = Nc(e[o], e[o + 1]), a[o] = r(t[o], t[o + 1]);
  return function(u) {
    var s = On(e, u, 1, n) - 1;
    return a[s](i[s](u));
  };
}
function Sn(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Hi() {
  var e = wv, t = wv, r = Mi, n, i, a, o = je, u, s, c;
  function f() {
    var h = Math.min(e.length, t.length);
    return o !== je && (o = _S(e[0], e[h - 1])), u = h > 2 ? SS : OS, s = c = null, l;
  }
  function l(h) {
    return h == null || isNaN(h = +h) ? a : (s || (s = u(e.map(n), t, r)))(n(o(h)));
  }
  return l.invert = function(h) {
    return o(i((c || (c = u(t, e.map(n), H0)))(h)));
  }, l.domain = function(h) {
    return arguments.length ? (e = Array.from(h, ei), f()) : e.slice();
  }, l.range = function(h) {
    return arguments.length ? (t = Array.from(h), f()) : t.slice();
  }, l.rangeRound = function(h) {
    return t = Array.from(h), r = Xl, f();
  }, l.clamp = function(h) {
    return arguments.length ? (o = h ? !0 : je, f()) : o !== je;
  }, l.interpolate = function(h) {
    return arguments.length ? (r = h, f()) : r;
  }, l.unknown = function(h) {
    return arguments.length ? (a = h, l) : a;
  }, function(h, d) {
    return n = h, i = d, f();
  };
}
function Vl() {
  return Hi()(je, je);
}
function AS(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function ti(e, t) {
  if (!isFinite(e) || e === 0) return null;
  var r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e"), n = e.slice(0, r);
  return [
    n.length > 1 ? n[0] + n.slice(2) : n,
    +e.slice(r + 1)
  ];
}
function ur(e) {
  return e = ti(Math.abs(e)), e ? e[1] : NaN;
}
function PS(e, t) {
  return function(r, n) {
    for (var i = r.length, a = [], o = 0, u = e[0], s = 0; i > 0 && u > 0 && (s + u + 1 > n && (u = Math.max(1, n - s)), a.push(r.substring(i -= u, i + u)), !((s += u + 1) > n)); )
      u = e[o = (o + 1) % e.length];
    return a.reverse().join(t);
  };
}
function TS(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var ES = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Vr(e) {
  if (!(t = ES.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new Yl({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10]
  });
}
Vr.prototype = Yl.prototype;
function Yl(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Yl.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function jS(e) {
  e: for (var t = e.length, r = 1, n = -1, i; r < t; ++r)
    switch (e[r]) {
      case ".":
        n = i = r;
        break;
      case "0":
        n === 0 && (n = r), i = r;
        break;
      default:
        if (!+e[r]) break e;
        n > 0 && (n = 0);
        break;
    }
  return n > 0 ? e.slice(0, n) + e.slice(i + 1) : e;
}
var ri;
function MS(e, t) {
  var r = ti(e, t);
  if (!r) return ri = void 0, e.toPrecision(t);
  var n = r[0], i = r[1], a = i - (ri = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = n.length;
  return a === o ? n : a > o ? n + new Array(a - o + 1).join("0") : a > 0 ? n.slice(0, a) + "." + n.slice(a) : "0." + new Array(1 - a).join("0") + ti(e, Math.max(0, t + a - 1))[0];
}
function xv(e, t) {
  var r = ti(e, t);
  if (!r) return e + "";
  var n = r[0], i = r[1];
  return i < 0 ? "0." + new Array(-i).join("0") + n : n.length > i + 1 ? n.slice(0, i + 1) + "." + n.slice(i + 1) : n + new Array(i - n.length + 2).join("0");
}
const _v = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: AS,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => xv(e * 100, t),
  r: xv,
  s: MS,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function Ov(e) {
  return e;
}
var Sv = Array.prototype.map, Av = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function CS(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? Ov : PS(Sv.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", n = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", a = e.numerals === void 0 ? Ov : TS(Sv.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", u = e.minus === void 0 ? "−" : e.minus + "", s = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(l, h) {
    l = Vr(l);
    var d = l.fill, g = l.align, v = l.sign, p = l.symbol, m = l.zero, w = l.width, x = l.comma, _ = l.precision, y = l.trim, b = l.type;
    b === "n" ? (x = !0, b = "g") : _v[b] || (_ === void 0 && (_ = 12), y = !0, b = "g"), (m || d === "0" && g === "=") && (m = !0, d = "0", g = "=");
    var O = (h && h.prefix !== void 0 ? h.prefix : "") + (p === "$" ? r : p === "#" && /[boxX]/.test(b) ? "0" + b.toLowerCase() : ""), S = (p === "$" ? n : /[%p]/.test(b) ? o : "") + (h && h.suffix !== void 0 ? h.suffix : ""), A = _v[b], C = /[defgprs%]/.test(b);
    _ = _ === void 0 ? 6 : /[gprs]/.test(b) ? Math.max(1, Math.min(21, _)) : Math.max(0, Math.min(20, _));
    function T(P) {
      var j = O, I = S, M, R, N;
      if (b === "c")
        I = A(P) + I, P = "";
      else {
        P = +P;
        var q = P < 0 || 1 / P < 0;
        if (P = isNaN(P) ? s : A(Math.abs(P), _), y && (P = jS(P)), q && +P == 0 && v !== "+" && (q = !1), j = (q ? v === "(" ? v : u : v === "-" || v === "(" ? "" : v) + j, I = (b === "s" && !isNaN(P) && ri !== void 0 ? Av[8 + ri / 3] : "") + I + (q && v === "(" ? ")" : ""), C) {
          for (M = -1, R = P.length; ++M < R; )
            if (N = P.charCodeAt(M), 48 > N || N > 57) {
              I = (N === 46 ? i + P.slice(M + 1) : P.slice(M)) + I, P = P.slice(0, M);
              break;
            }
        }
      }
      x && !m && (P = t(P, 1 / 0));
      var k = j.length + P.length + I.length, W = k < w ? new Array(w - k + 1).join(d) : "";
      switch (x && m && (P = t(W + P, W.length ? w - I.length : 1 / 0), W = ""), g) {
        case "<":
          P = j + P + I + W;
          break;
        case "=":
          P = j + W + P + I;
          break;
        case "^":
          P = W.slice(0, k = W.length >> 1) + j + P + I + W.slice(k);
          break;
        default:
          P = W + j + P + I;
          break;
      }
      return a(P);
    }
    return T.toString = function() {
      return l + "";
    }, T;
  }
  function f(l, h) {
    var d = Math.max(-8, Math.min(8, Math.floor(ur(h) / 3))) * 3, g = Math.pow(10, -d), v = c((l = Vr(l), l.type = "f", l), { suffix: Av[8 + d / 3] });
    return function(p) {
      return v(g * p);
    };
  }
  return {
    format: c,
    formatPrefix: f
  };
}
var $n, Zl, rb;
IS({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function IS(e) {
  return $n = CS(e), Zl = $n.format, rb = $n.formatPrefix, $n;
}
function $S(e) {
  return Math.max(0, -ur(Math.abs(e)));
}
function RS(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(ur(t) / 3))) * 3 - ur(Math.abs(e)));
}
function DS(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, ur(t) - ur(e)) + 1;
}
function nb(e, t, r, n) {
  var i = Rc(e, t, r), a;
  switch (n = Vr(n ?? ",f"), n.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return n.precision == null && !isNaN(a = RS(i, o)) && (n.precision = a), rb(n, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(a = DS(i, Math.max(Math.abs(e), Math.abs(t)))) && (n.precision = a - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(a = $S(i)) && (n.precision = a - (n.type === "%") * 2);
      break;
    }
  }
  return Zl(n);
}
function At(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var n = t();
    return Ic(n[0], n[n.length - 1], r ?? 10);
  }, e.tickFormat = function(r, n) {
    var i = t();
    return nb(i[0], i[i.length - 1], r ?? 10, n);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var n = t(), i = 0, a = n.length - 1, o = n[i], u = n[a], s, c, f = 10;
    for (u < o && (c = o, o = u, u = c, c = i, i = a, a = c); f-- > 0; ) {
      if (c = $c(o, u, r), c === s)
        return n[i] = o, n[a] = u, t(n);
      if (c > 0)
        o = Math.floor(o / c) * c, u = Math.ceil(u / c) * c;
      else if (c < 0)
        o = Math.ceil(o * c) / c, u = Math.floor(u * c) / c;
      else
        break;
      s = c;
    }
    return e;
  }, e;
}
function ni() {
  var e = Vl();
  return e.copy = function() {
    return Sn(e, ni());
  }, Ue.apply(e, arguments), At(e);
}
function ib(e) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e = Array.from(n, ei), r) : e.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return ib(e).unknown(t);
  }, e = arguments.length ? Array.from(e, ei) : [0, 1], At(r);
}
function ab(e, t) {
  e = e.slice();
  var r = 0, n = e.length - 1, i = e[r], a = e[n], o;
  return a < i && (o = r, r = n, n = o, o = i, i = a, a = o), e[r] = t.floor(i), e[n] = t.ceil(a), e;
}
function Pv(e) {
  return Math.log(e);
}
function Tv(e) {
  return Math.exp(e);
}
function NS(e) {
  return -Math.log(-e);
}
function qS(e) {
  return -Math.exp(-e);
}
function kS(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function LS(e) {
  return e === 10 ? kS : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function BS(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function Ev(e) {
  return (t, r) => -e(-t, r);
}
function Jl(e) {
  const t = e(Pv, Tv), r = t.domain;
  let n = 10, i, a;
  function o() {
    return i = BS(n), a = LS(n), r()[0] < 0 ? (i = Ev(i), a = Ev(a), e(NS, qS)) : e(Pv, Tv), t;
  }
  return t.base = function(u) {
    return arguments.length ? (n = +u, o()) : n;
  }, t.domain = function(u) {
    return arguments.length ? (r(u), o()) : r();
  }, t.ticks = (u) => {
    const s = r();
    let c = s[0], f = s[s.length - 1];
    const l = f < c;
    l && ([c, f] = [f, c]);
    let h = i(c), d = i(f), g, v;
    const p = u == null ? 10 : +u;
    let m = [];
    if (!(n % 1) && d - h < p) {
      if (h = Math.floor(h), d = Math.ceil(d), c > 0) {
        for (; h <= d; ++h)
          for (g = 1; g < n; ++g)
            if (v = h < 0 ? g / a(-h) : g * a(h), !(v < c)) {
              if (v > f) break;
              m.push(v);
            }
      } else for (; h <= d; ++h)
        for (g = n - 1; g >= 1; --g)
          if (v = h > 0 ? g / a(-h) : g * a(h), !(v < c)) {
            if (v > f) break;
            m.push(v);
          }
      m.length * 2 < p && (m = Ic(c, f, p));
    } else
      m = Ic(h, d, Math.min(d - h, p)).map(a);
    return l ? m.reverse() : m;
  }, t.tickFormat = (u, s) => {
    if (u == null && (u = 10), s == null && (s = n === 10 ? "s" : ","), typeof s != "function" && (!(n % 1) && (s = Vr(s)).precision == null && (s.trim = !0), s = Zl(s)), u === 1 / 0) return s;
    const c = Math.max(1, n * u / t.ticks().length);
    return (f) => {
      let l = f / a(Math.round(i(f)));
      return l * n < n - 0.5 && (l *= n), l <= c ? s(f) : "";
    };
  }, t.nice = () => r(ab(r(), {
    floor: (u) => a(Math.floor(i(u))),
    ceil: (u) => a(Math.ceil(i(u)))
  })), t;
}
function ob() {
  const e = Jl(Hi()).domain([1, 10]);
  return e.copy = () => Sn(e, ob()).base(e.base()), Ue.apply(e, arguments), e;
}
function jv(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function Mv(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function Ql(e) {
  var t = 1, r = e(jv(t), Mv(t));
  return r.constant = function(n) {
    return arguments.length ? e(jv(t = +n), Mv(t)) : t;
  }, At(r);
}
function ub() {
  var e = Ql(Hi());
  return e.copy = function() {
    return Sn(e, ub()).constant(e.constant());
  }, Ue.apply(e, arguments);
}
function Cv(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function FS(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function US(e) {
  return e < 0 ? -e * e : e * e;
}
function ef(e) {
  var t = e(je, je), r = 1;
  function n() {
    return r === 1 ? e(je, je) : r === 0.5 ? e(FS, US) : e(Cv(r), Cv(1 / r));
  }
  return t.exponent = function(i) {
    return arguments.length ? (r = +i, n()) : r;
  }, At(t);
}
function tf() {
  var e = ef(Hi());
  return e.copy = function() {
    return Sn(e, tf()).exponent(e.exponent());
  }, Ue.apply(e, arguments), e;
}
function WS() {
  return tf.apply(null, arguments).exponent(0.5);
}
function Iv(e) {
  return Math.sign(e) * e * e;
}
function zS(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function sb() {
  var e = Vl(), t = [0, 1], r = !1, n;
  function i(a) {
    var o = zS(e(a));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return i.invert = function(a) {
    return e.invert(Iv(a));
  }, i.domain = function(a) {
    return arguments.length ? (e.domain(a), i) : e.domain();
  }, i.range = function(a) {
    return arguments.length ? (e.range((t = Array.from(a, ei)).map(Iv)), i) : t.slice();
  }, i.rangeRound = function(a) {
    return i.range(a).round(!0);
  }, i.round = function(a) {
    return arguments.length ? (r = !!a, i) : r;
  }, i.clamp = function(a) {
    return arguments.length ? (e.clamp(a), i) : e.clamp();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return sb(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
  }, Ue.apply(i, arguments), At(i);
}
function cb() {
  var e = [], t = [], r = [], n;
  function i() {
    var o = 0, u = Math.max(1, t.length);
    for (r = new Array(u - 1); ++o < u; ) r[o - 1] = mS(e, o / u);
    return a;
  }
  function a(o) {
    return o == null || isNaN(o = +o) ? n : t[On(r, o)];
  }
  return a.invertExtent = function(o) {
    var u = t.indexOf(o);
    return u < 0 ? [NaN, NaN] : [
      u > 0 ? r[u - 1] : e[0],
      u < r.length ? r[u] : e[e.length - 1]
    ];
  }, a.domain = function(o) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let u of o) u != null && !isNaN(u = +u) && e.push(u);
    return e.sort(wt), i();
  }, a.range = function(o) {
    return arguments.length ? (t = Array.from(o), i()) : t.slice();
  }, a.unknown = function(o) {
    return arguments.length ? (n = o, a) : n;
  }, a.quantiles = function() {
    return r.slice();
  }, a.copy = function() {
    return cb().domain(e).range(t).unknown(n);
  }, Ue.apply(a, arguments);
}
function lb() {
  var e = 0, t = 1, r = 1, n = [0.5], i = [0, 1], a;
  function o(s) {
    return s != null && s <= s ? i[On(n, s, 0, r)] : a;
  }
  function u() {
    var s = -1;
    for (n = new Array(r); ++s < r; ) n[s] = ((s + 1) * t - (s - r) * e) / (r + 1);
    return o;
  }
  return o.domain = function(s) {
    return arguments.length ? ([e, t] = s, e = +e, t = +t, u()) : [e, t];
  }, o.range = function(s) {
    return arguments.length ? (r = (i = Array.from(s)).length - 1, u()) : i.slice();
  }, o.invertExtent = function(s) {
    var c = i.indexOf(s);
    return c < 0 ? [NaN, NaN] : c < 1 ? [e, n[0]] : c >= r ? [n[r - 1], t] : [n[c - 1], n[c]];
  }, o.unknown = function(s) {
    return arguments.length && (a = s), o;
  }, o.thresholds = function() {
    return n.slice();
  }, o.copy = function() {
    return lb().domain([e, t]).range(i).unknown(a);
  }, Ue.apply(At(o), arguments);
}
function fb() {
  var e = [0.5], t = [0, 1], r, n = 1;
  function i(a) {
    return a != null && a <= a ? t[On(e, a, 0, n)] : r;
  }
  return i.domain = function(a) {
    return arguments.length ? (e = Array.from(a), n = Math.min(e.length, t.length - 1), i) : e.slice();
  }, i.range = function(a) {
    return arguments.length ? (t = Array.from(a), n = Math.min(e.length, t.length - 1), i) : t.slice();
  }, i.invertExtent = function(a) {
    var o = t.indexOf(a);
    return [e[o - 1], e[o]];
  }, i.unknown = function(a) {
    return arguments.length ? (r = a, i) : r;
  }, i.copy = function() {
    return fb().domain(e).range(t).unknown(r);
  }, Ue.apply(i, arguments);
}
const bs = /* @__PURE__ */ new Date(), ws = /* @__PURE__ */ new Date();
function _e(e, t, r, n) {
  function i(a) {
    return e(a = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+a)), a;
  }
  return i.floor = (a) => (e(a = /* @__PURE__ */ new Date(+a)), a), i.ceil = (a) => (e(a = new Date(a - 1)), t(a, 1), e(a), a), i.round = (a) => {
    const o = i(a), u = i.ceil(a);
    return a - o < u - a ? o : u;
  }, i.offset = (a, o) => (t(a = /* @__PURE__ */ new Date(+a), o == null ? 1 : Math.floor(o)), a), i.range = (a, o, u) => {
    const s = [];
    if (a = i.ceil(a), u = u == null ? 1 : Math.floor(u), !(a < o) || !(u > 0)) return s;
    let c;
    do
      s.push(c = /* @__PURE__ */ new Date(+a)), t(a, u), e(a);
    while (c < a && a < o);
    return s;
  }, i.filter = (a) => _e((o) => {
    if (o >= o) for (; e(o), !a(o); ) o.setTime(o - 1);
  }, (o, u) => {
    if (o >= o)
      if (u < 0) for (; ++u <= 0; )
        for (; t(o, -1), !a(o); )
          ;
      else for (; --u >= 0; )
        for (; t(o, 1), !a(o); )
          ;
  }), r && (i.count = (a, o) => (bs.setTime(+a), ws.setTime(+o), e(bs), e(ws), Math.floor(r(bs, ws))), i.every = (a) => (a = Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? i.filter(n ? (o) => n(o) % a === 0 : (o) => i.count(0, o) % a === 0) : i)), i;
}
const ii = _e(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
ii.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? _e((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : ii);
ii.range;
const ot = 1e3, Be = ot * 60, ut = Be * 60, lt = ut * 24, rf = lt * 7, $v = lt * 30, xs = lt * 365, Dt = _e((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * ot);
}, (e, t) => (t - e) / ot, (e) => e.getUTCSeconds());
Dt.range;
const nf = _e((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * ot);
}, (e, t) => {
  e.setTime(+e + t * Be);
}, (e, t) => (t - e) / Be, (e) => e.getMinutes());
nf.range;
const af = _e((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * Be);
}, (e, t) => (t - e) / Be, (e) => e.getUTCMinutes());
af.range;
const of = _e((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * ot - e.getMinutes() * Be);
}, (e, t) => {
  e.setTime(+e + t * ut);
}, (e, t) => (t - e) / ut, (e) => e.getHours());
of.range;
const uf = _e((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * ut);
}, (e, t) => (t - e) / ut, (e) => e.getUTCHours());
uf.range;
const An = _e(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Be) / lt,
  (e) => e.getDate() - 1
);
An.range;
const Gi = _e((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / lt, (e) => e.getUTCDate() - 1);
Gi.range;
const hb = _e((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / lt, (e) => Math.floor(e / lt));
hb.range;
function Ht(e) {
  return _e((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Be) / rf);
}
const Ki = Ht(0), ai = Ht(1), HS = Ht(2), GS = Ht(3), sr = Ht(4), KS = Ht(5), XS = Ht(6);
Ki.range;
ai.range;
HS.range;
GS.range;
sr.range;
KS.range;
XS.range;
function Gt(e) {
  return _e((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / rf);
}
const Xi = Gt(0), oi = Gt(1), VS = Gt(2), YS = Gt(3), cr = Gt(4), ZS = Gt(5), JS = Gt(6);
Xi.range;
oi.range;
VS.range;
YS.range;
cr.range;
ZS.range;
JS.range;
const sf = _e((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
sf.range;
const cf = _e((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
cf.range;
const ft = _e((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
ft.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : _e((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
ft.range;
const ht = _e((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
ht.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : _e((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
ht.range;
function pb(e, t, r, n, i, a) {
  const o = [
    [Dt, 1, ot],
    [Dt, 5, 5 * ot],
    [Dt, 15, 15 * ot],
    [Dt, 30, 30 * ot],
    [a, 1, Be],
    [a, 5, 5 * Be],
    [a, 15, 15 * Be],
    [a, 30, 30 * Be],
    [i, 1, ut],
    [i, 3, 3 * ut],
    [i, 6, 6 * ut],
    [i, 12, 12 * ut],
    [n, 1, lt],
    [n, 2, 2 * lt],
    [r, 1, rf],
    [t, 1, $v],
    [t, 3, 3 * $v],
    [e, 1, xs]
  ];
  function u(c, f, l) {
    const h = f < c;
    h && ([c, f] = [f, c]);
    const d = l && typeof l.range == "function" ? l : s(c, f, l), g = d ? d.range(c, +f + 1) : [];
    return h ? g.reverse() : g;
  }
  function s(c, f, l) {
    const h = Math.abs(f - c) / l, d = Gl(([, , p]) => p).right(o, h);
    if (d === o.length) return e.every(Rc(c / xs, f / xs, l));
    if (d === 0) return ii.every(Math.max(Rc(c, f, l), 1));
    const [g, v] = o[h / o[d - 1][2] < o[d][2] / h ? d - 1 : d];
    return g.every(v);
  }
  return [u, s];
}
const [QS, eA] = pb(ht, cf, Xi, hb, uf, af), [tA, rA] = pb(ft, sf, Ki, An, of, nf);
function _s(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Os(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Tr(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function nA(e) {
  var t = e.dateTime, r = e.date, n = e.time, i = e.periods, a = e.days, o = e.shortDays, u = e.months, s = e.shortMonths, c = Er(i), f = jr(i), l = Er(a), h = jr(a), d = Er(o), g = jr(o), v = Er(u), p = jr(u), m = Er(s), w = jr(s), x = {
    a: N,
    A: q,
    b: k,
    B: W,
    c: null,
    d: Lv,
    e: Lv,
    f: PA,
    g: NA,
    G: kA,
    H: OA,
    I: SA,
    j: AA,
    L: db,
    m: TA,
    M: EA,
    p: H,
    q: F,
    Q: Uv,
    s: Wv,
    S: jA,
    u: MA,
    U: CA,
    V: IA,
    w: $A,
    W: RA,
    x: null,
    X: null,
    y: DA,
    Y: qA,
    Z: LA,
    "%": Fv
  }, _ = {
    a: G,
    A: oe,
    b: pe,
    B: $e,
    c: null,
    d: Bv,
    e: Bv,
    f: WA,
    g: QA,
    G: tP,
    H: BA,
    I: FA,
    j: UA,
    L: yb,
    m: zA,
    M: HA,
    p: Et,
    q: Me,
    Q: Uv,
    s: Wv,
    S: GA,
    u: KA,
    U: XA,
    V: VA,
    w: YA,
    W: ZA,
    x: null,
    X: null,
    y: JA,
    Y: eP,
    Z: rP,
    "%": Fv
  }, y = {
    a: C,
    A: T,
    b: P,
    B: j,
    c: I,
    d: qv,
    e: qv,
    f: bA,
    g: Nv,
    G: Dv,
    H: kv,
    I: kv,
    j: vA,
    L: mA,
    m: dA,
    M: yA,
    p: A,
    q: pA,
    Q: xA,
    s: _A,
    S: gA,
    u: sA,
    U: cA,
    V: lA,
    w: uA,
    W: fA,
    x: M,
    X: R,
    y: Nv,
    Y: Dv,
    Z: hA,
    "%": wA
  };
  x.x = b(r, x), x.X = b(n, x), x.c = b(t, x), _.x = b(r, _), _.X = b(n, _), _.c = b(t, _);
  function b(L, K) {
    return function(X) {
      var D = [], fe = -1, Z = 0, ye = L.length, ge, Ce, yt;
      for (X instanceof Date || (X = /* @__PURE__ */ new Date(+X)); ++fe < ye; )
        L.charCodeAt(fe) === 37 && (D.push(L.slice(Z, fe)), (Ce = Rv[ge = L.charAt(++fe)]) != null ? ge = L.charAt(++fe) : Ce = ge === "e" ? " " : "0", (yt = K[ge]) && (ge = yt(X, Ce)), D.push(ge), Z = fe + 1);
      return D.push(L.slice(Z, fe)), D.join("");
    };
  }
  function O(L, K) {
    return function(X) {
      var D = Tr(1900, void 0, 1), fe = S(D, L, X += "", 0), Z, ye;
      if (fe != X.length) return null;
      if ("Q" in D) return new Date(D.Q);
      if ("s" in D) return new Date(D.s * 1e3 + ("L" in D ? D.L : 0));
      if (K && !("Z" in D) && (D.Z = 0), "p" in D && (D.H = D.H % 12 + D.p * 12), D.m === void 0 && (D.m = "q" in D ? D.q : 0), "V" in D) {
        if (D.V < 1 || D.V > 53) return null;
        "w" in D || (D.w = 1), "Z" in D ? (Z = Os(Tr(D.y, 0, 1)), ye = Z.getUTCDay(), Z = ye > 4 || ye === 0 ? oi.ceil(Z) : oi(Z), Z = Gi.offset(Z, (D.V - 1) * 7), D.y = Z.getUTCFullYear(), D.m = Z.getUTCMonth(), D.d = Z.getUTCDate() + (D.w + 6) % 7) : (Z = _s(Tr(D.y, 0, 1)), ye = Z.getDay(), Z = ye > 4 || ye === 0 ? ai.ceil(Z) : ai(Z), Z = An.offset(Z, (D.V - 1) * 7), D.y = Z.getFullYear(), D.m = Z.getMonth(), D.d = Z.getDate() + (D.w + 6) % 7);
      } else ("W" in D || "U" in D) && ("w" in D || (D.w = "u" in D ? D.u % 7 : "W" in D ? 1 : 0), ye = "Z" in D ? Os(Tr(D.y, 0, 1)).getUTCDay() : _s(Tr(D.y, 0, 1)).getDay(), D.m = 0, D.d = "W" in D ? (D.w + 6) % 7 + D.W * 7 - (ye + 5) % 7 : D.w + D.U * 7 - (ye + 6) % 7);
      return "Z" in D ? (D.H += D.Z / 100 | 0, D.M += D.Z % 100, Os(D)) : _s(D);
    };
  }
  function S(L, K, X, D) {
    for (var fe = 0, Z = K.length, ye = X.length, ge, Ce; fe < Z; ) {
      if (D >= ye) return -1;
      if (ge = K.charCodeAt(fe++), ge === 37) {
        if (ge = K.charAt(fe++), Ce = y[ge in Rv ? K.charAt(fe++) : ge], !Ce || (D = Ce(L, X, D)) < 0) return -1;
      } else if (ge != X.charCodeAt(D++))
        return -1;
    }
    return D;
  }
  function A(L, K, X) {
    var D = c.exec(K.slice(X));
    return D ? (L.p = f.get(D[0].toLowerCase()), X + D[0].length) : -1;
  }
  function C(L, K, X) {
    var D = d.exec(K.slice(X));
    return D ? (L.w = g.get(D[0].toLowerCase()), X + D[0].length) : -1;
  }
  function T(L, K, X) {
    var D = l.exec(K.slice(X));
    return D ? (L.w = h.get(D[0].toLowerCase()), X + D[0].length) : -1;
  }
  function P(L, K, X) {
    var D = m.exec(K.slice(X));
    return D ? (L.m = w.get(D[0].toLowerCase()), X + D[0].length) : -1;
  }
  function j(L, K, X) {
    var D = v.exec(K.slice(X));
    return D ? (L.m = p.get(D[0].toLowerCase()), X + D[0].length) : -1;
  }
  function I(L, K, X) {
    return S(L, t, K, X);
  }
  function M(L, K, X) {
    return S(L, r, K, X);
  }
  function R(L, K, X) {
    return S(L, n, K, X);
  }
  function N(L) {
    return o[L.getDay()];
  }
  function q(L) {
    return a[L.getDay()];
  }
  function k(L) {
    return s[L.getMonth()];
  }
  function W(L) {
    return u[L.getMonth()];
  }
  function H(L) {
    return i[+(L.getHours() >= 12)];
  }
  function F(L) {
    return 1 + ~~(L.getMonth() / 3);
  }
  function G(L) {
    return o[L.getUTCDay()];
  }
  function oe(L) {
    return a[L.getUTCDay()];
  }
  function pe(L) {
    return s[L.getUTCMonth()];
  }
  function $e(L) {
    return u[L.getUTCMonth()];
  }
  function Et(L) {
    return i[+(L.getUTCHours() >= 12)];
  }
  function Me(L) {
    return 1 + ~~(L.getUTCMonth() / 3);
  }
  return {
    format: function(L) {
      var K = b(L += "", x);
      return K.toString = function() {
        return L;
      }, K;
    },
    parse: function(L) {
      var K = O(L += "", !1);
      return K.toString = function() {
        return L;
      }, K;
    },
    utcFormat: function(L) {
      var K = b(L += "", _);
      return K.toString = function() {
        return L;
      }, K;
    },
    utcParse: function(L) {
      var K = O(L += "", !0);
      return K.toString = function() {
        return L;
      }, K;
    }
  };
}
var Rv = { "-": "", _: " ", 0: "0" }, Se = /^\s*\d+/, iA = /^%/, aA = /[\\^$*+?|[\]().{}]/g;
function Q(e, t, r) {
  var n = e < 0 ? "-" : "", i = (n ? -e : e) + "", a = i.length;
  return n + (a < r ? new Array(r - a + 1).join(t) + i : i);
}
function oA(e) {
  return e.replace(aA, "\\$&");
}
function Er(e) {
  return new RegExp("^(?:" + e.map(oA).join("|") + ")", "i");
}
function jr(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function uA(e, t, r) {
  var n = Se.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function sA(e, t, r) {
  var n = Se.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function cA(e, t, r) {
  var n = Se.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function lA(e, t, r) {
  var n = Se.exec(t.slice(r, r + 2));
  return n ? (e.V = +n[0], r + n[0].length) : -1;
}
function fA(e, t, r) {
  var n = Se.exec(t.slice(r, r + 2));
  return n ? (e.W = +n[0], r + n[0].length) : -1;
}
function Dv(e, t, r) {
  var n = Se.exec(t.slice(r, r + 4));
  return n ? (e.y = +n[0], r + n[0].length) : -1;
}
function Nv(e, t, r) {
  var n = Se.exec(t.slice(r, r + 2));
  return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function hA(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function pA(e, t, r) {
  var n = Se.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function dA(e, t, r) {
  var n = Se.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function qv(e, t, r) {
  var n = Se.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function vA(e, t, r) {
  var n = Se.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function kv(e, t, r) {
  var n = Se.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function yA(e, t, r) {
  var n = Se.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function gA(e, t, r) {
  var n = Se.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function mA(e, t, r) {
  var n = Se.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function bA(e, t, r) {
  var n = Se.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function wA(e, t, r) {
  var n = iA.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function xA(e, t, r) {
  var n = Se.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function _A(e, t, r) {
  var n = Se.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function Lv(e, t) {
  return Q(e.getDate(), t, 2);
}
function OA(e, t) {
  return Q(e.getHours(), t, 2);
}
function SA(e, t) {
  return Q(e.getHours() % 12 || 12, t, 2);
}
function AA(e, t) {
  return Q(1 + An.count(ft(e), e), t, 3);
}
function db(e, t) {
  return Q(e.getMilliseconds(), t, 3);
}
function PA(e, t) {
  return db(e, t) + "000";
}
function TA(e, t) {
  return Q(e.getMonth() + 1, t, 2);
}
function EA(e, t) {
  return Q(e.getMinutes(), t, 2);
}
function jA(e, t) {
  return Q(e.getSeconds(), t, 2);
}
function MA(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function CA(e, t) {
  return Q(Ki.count(ft(e) - 1, e), t, 2);
}
function vb(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? sr(e) : sr.ceil(e);
}
function IA(e, t) {
  return e = vb(e), Q(sr.count(ft(e), e) + (ft(e).getDay() === 4), t, 2);
}
function $A(e) {
  return e.getDay();
}
function RA(e, t) {
  return Q(ai.count(ft(e) - 1, e), t, 2);
}
function DA(e, t) {
  return Q(e.getFullYear() % 100, t, 2);
}
function NA(e, t) {
  return e = vb(e), Q(e.getFullYear() % 100, t, 2);
}
function qA(e, t) {
  return Q(e.getFullYear() % 1e4, t, 4);
}
function kA(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? sr(e) : sr.ceil(e), Q(e.getFullYear() % 1e4, t, 4);
}
function LA(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Q(t / 60 | 0, "0", 2) + Q(t % 60, "0", 2);
}
function Bv(e, t) {
  return Q(e.getUTCDate(), t, 2);
}
function BA(e, t) {
  return Q(e.getUTCHours(), t, 2);
}
function FA(e, t) {
  return Q(e.getUTCHours() % 12 || 12, t, 2);
}
function UA(e, t) {
  return Q(1 + Gi.count(ht(e), e), t, 3);
}
function yb(e, t) {
  return Q(e.getUTCMilliseconds(), t, 3);
}
function WA(e, t) {
  return yb(e, t) + "000";
}
function zA(e, t) {
  return Q(e.getUTCMonth() + 1, t, 2);
}
function HA(e, t) {
  return Q(e.getUTCMinutes(), t, 2);
}
function GA(e, t) {
  return Q(e.getUTCSeconds(), t, 2);
}
function KA(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function XA(e, t) {
  return Q(Xi.count(ht(e) - 1, e), t, 2);
}
function gb(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? cr(e) : cr.ceil(e);
}
function VA(e, t) {
  return e = gb(e), Q(cr.count(ht(e), e) + (ht(e).getUTCDay() === 4), t, 2);
}
function YA(e) {
  return e.getUTCDay();
}
function ZA(e, t) {
  return Q(oi.count(ht(e) - 1, e), t, 2);
}
function JA(e, t) {
  return Q(e.getUTCFullYear() % 100, t, 2);
}
function QA(e, t) {
  return e = gb(e), Q(e.getUTCFullYear() % 100, t, 2);
}
function eP(e, t) {
  return Q(e.getUTCFullYear() % 1e4, t, 4);
}
function tP(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? cr(e) : cr.ceil(e), Q(e.getUTCFullYear() % 1e4, t, 4);
}
function rP() {
  return "+0000";
}
function Fv() {
  return "%";
}
function Uv(e) {
  return +e;
}
function Wv(e) {
  return Math.floor(+e / 1e3);
}
var Zt, mb, bb;
nP({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function nP(e) {
  return Zt = nA(e), mb = Zt.format, Zt.parse, bb = Zt.utcFormat, Zt.utcParse, Zt;
}
function iP(e) {
  return new Date(e);
}
function aP(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function lf(e, t, r, n, i, a, o, u, s, c) {
  var f = Vl(), l = f.invert, h = f.domain, d = c(".%L"), g = c(":%S"), v = c("%I:%M"), p = c("%I %p"), m = c("%a %d"), w = c("%b %d"), x = c("%B"), _ = c("%Y");
  function y(b) {
    return (s(b) < b ? d : u(b) < b ? g : o(b) < b ? v : a(b) < b ? p : n(b) < b ? i(b) < b ? m : w : r(b) < b ? x : _)(b);
  }
  return f.invert = function(b) {
    return new Date(l(b));
  }, f.domain = function(b) {
    return arguments.length ? h(Array.from(b, aP)) : h().map(iP);
  }, f.ticks = function(b) {
    var O = h();
    return e(O[0], O[O.length - 1], b ?? 10);
  }, f.tickFormat = function(b, O) {
    return O == null ? y : c(O);
  }, f.nice = function(b) {
    var O = h();
    return (!b || typeof b.range != "function") && (b = t(O[0], O[O.length - 1], b ?? 10)), b ? h(ab(O, b)) : f;
  }, f.copy = function() {
    return Sn(f, lf(e, t, r, n, i, a, o, u, s, c));
  }, f;
}
function oP() {
  return Ue.apply(lf(tA, rA, ft, sf, Ki, An, of, nf, Dt, mb).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function uP() {
  return Ue.apply(lf(QS, eA, ht, cf, Xi, Gi, uf, af, Dt, bb).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function Vi() {
  var e = 0, t = 1, r, n, i, a, o = je, u = !1, s;
  function c(l) {
    return l == null || isNaN(l = +l) ? s : o(i === 0 ? 0.5 : (l = (a(l) - r) * i, u ? Math.max(0, Math.min(1, l)) : l));
  }
  c.domain = function(l) {
    return arguments.length ? ([e, t] = l, r = a(e = +e), n = a(t = +t), i = r === n ? 0 : 1 / (n - r), c) : [e, t];
  }, c.clamp = function(l) {
    return arguments.length ? (u = !!l, c) : u;
  }, c.interpolator = function(l) {
    return arguments.length ? (o = l, c) : o;
  };
  function f(l) {
    return function(h) {
      var d, g;
      return arguments.length ? ([d, g] = h, o = l(d, g), c) : [o(0), o(1)];
    };
  }
  return c.range = f(Mi), c.rangeRound = f(Xl), c.unknown = function(l) {
    return arguments.length ? (s = l, c) : s;
  }, function(l) {
    return a = l, r = l(e), n = l(t), i = r === n ? 0 : 1 / (n - r), c;
  };
}
function Pt(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function wb() {
  var e = At(Vi()(je));
  return e.copy = function() {
    return Pt(e, wb());
  }, vt.apply(e, arguments);
}
function xb() {
  var e = Jl(Vi()).domain([1, 10]);
  return e.copy = function() {
    return Pt(e, xb()).base(e.base());
  }, vt.apply(e, arguments);
}
function _b() {
  var e = Ql(Vi());
  return e.copy = function() {
    return Pt(e, _b()).constant(e.constant());
  }, vt.apply(e, arguments);
}
function ff() {
  var e = ef(Vi());
  return e.copy = function() {
    return Pt(e, ff()).exponent(e.exponent());
  }, vt.apply(e, arguments);
}
function sP() {
  return ff.apply(null, arguments).exponent(0.5);
}
function Ob() {
  var e = [], t = je;
  function r(n) {
    if (n != null && !isNaN(n = +n)) return t((On(e, n, 1) - 1) / (e.length - 1));
  }
  return r.domain = function(n) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let i of n) i != null && !isNaN(i = +i) && e.push(i);
    return e.sort(wt), r;
  }, r.interpolator = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.range = function() {
    return e.map((n, i) => t(i / (e.length - 1)));
  }, r.quantiles = function(n) {
    return Array.from({ length: n + 1 }, (i, a) => gS(e, a / n));
  }, r.copy = function() {
    return Ob(t).domain(e);
  }, vt.apply(r, arguments);
}
function Yi() {
  var e = 0, t = 0.5, r = 1, n = 1, i, a, o, u, s, c = je, f, l = !1, h;
  function d(v) {
    return isNaN(v = +v) ? h : (v = 0.5 + ((v = +f(v)) - a) * (n * v < n * a ? u : s), c(l ? Math.max(0, Math.min(1, v)) : v));
  }
  d.domain = function(v) {
    return arguments.length ? ([e, t, r] = v, i = f(e = +e), a = f(t = +t), o = f(r = +r), u = i === a ? 0 : 0.5 / (a - i), s = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, d) : [e, t, r];
  }, d.clamp = function(v) {
    return arguments.length ? (l = !!v, d) : l;
  }, d.interpolator = function(v) {
    return arguments.length ? (c = v, d) : c;
  };
  function g(v) {
    return function(p) {
      var m, w, x;
      return arguments.length ? ([m, w, x] = p, c = wS(v, [m, w, x]), d) : [c(0), c(0.5), c(1)];
    };
  }
  return d.range = g(Mi), d.rangeRound = g(Xl), d.unknown = function(v) {
    return arguments.length ? (h = v, d) : h;
  }, function(v) {
    return f = v, i = v(e), a = v(t), o = v(r), u = i === a ? 0 : 0.5 / (a - i), s = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, d;
  };
}
function Sb() {
  var e = At(Yi()(je));
  return e.copy = function() {
    return Pt(e, Sb());
  }, vt.apply(e, arguments);
}
function Ab() {
  var e = Jl(Yi()).domain([0.1, 1, 10]);
  return e.copy = function() {
    return Pt(e, Ab()).base(e.base());
  }, vt.apply(e, arguments);
}
function Pb() {
  var e = Ql(Yi());
  return e.copy = function() {
    return Pt(e, Pb()).constant(e.constant());
  }, vt.apply(e, arguments);
}
function hf() {
  var e = ef(Yi());
  return e.copy = function() {
    return Pt(e, hf()).exponent(e.exponent());
  }, vt.apply(e, arguments);
}
function cP() {
  return hf.apply(null, arguments).exponent(0.5);
}
const zv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scaleBand: Xr,
  scaleDiverging: Sb,
  scaleDivergingLog: Ab,
  scaleDivergingPow: hf,
  scaleDivergingSqrt: cP,
  scaleDivergingSymlog: Pb,
  scaleIdentity: ib,
  scaleImplicit: Dc,
  scaleLinear: ni,
  scaleLog: ob,
  scaleOrdinal: Kl,
  scalePoint: kr,
  scalePow: tf,
  scaleQuantile: cb,
  scaleQuantize: lb,
  scaleRadial: sb,
  scaleSequential: wb,
  scaleSequentialLog: xb,
  scaleSequentialPow: ff,
  scaleSequentialQuantile: Ob,
  scaleSequentialSqrt: sP,
  scaleSequentialSymlog: _b,
  scaleSqrt: WS,
  scaleSymlog: ub,
  scaleThreshold: fb,
  scaleTime: oP,
  scaleUtc: uP,
  tickFormat: nb
}, Symbol.toStringTag, { value: "Module" }));
var Ss, Hv;
function Tb() {
  if (Hv) return Ss;
  Hv = 1;
  var e = wr();
  function t(r, n, i) {
    for (var a = -1, o = r.length; ++a < o; ) {
      var u = r[a], s = n(u);
      if (s != null && (c === void 0 ? s === s && !e(s) : i(s, c)))
        var c = s, f = u;
    }
    return f;
  }
  return Ss = t, Ss;
}
var As, Gv;
function lP() {
  if (Gv) return As;
  Gv = 1;
  function e(t, r) {
    return t > r;
  }
  return As = e, As;
}
var Ps, Kv;
function fP() {
  if (Kv) return Ps;
  Kv = 1;
  var e = Tb(), t = lP(), r = _r();
  function n(i) {
    return i && i.length ? e(i, r, t) : void 0;
  }
  return Ps = n, Ps;
}
var hP = fP();
const Zi = /* @__PURE__ */ ae(hP);
var Ts, Xv;
function pP() {
  if (Xv) return Ts;
  Xv = 1;
  function e(t, r) {
    return t < r;
  }
  return Ts = e, Ts;
}
var Es, Vv;
function dP() {
  if (Vv) return Es;
  Vv = 1;
  var e = Tb(), t = pP(), r = _r();
  function n(i) {
    return i && i.length ? e(i, r, t) : void 0;
  }
  return Es = n, Es;
}
var vP = dP();
const Ji = /* @__PURE__ */ ae(vP);
var js, Yv;
function yP() {
  if (Yv) return js;
  Yv = 1;
  var e = jl(), t = St(), r = Lm(), n = Ie();
  function i(a, o) {
    var u = n(a) ? e : r;
    return u(a, t(o, 3));
  }
  return js = i, js;
}
var Ms, Zv;
function gP() {
  if (Zv) return Ms;
  Zv = 1;
  var e = qm(), t = yP();
  function r(n, i) {
    return e(t(n, i), 1);
  }
  return Ms = r, Ms;
}
var mP = gP();
const bP = /* @__PURE__ */ ae(mP);
var Cs, Jv;
function wP() {
  if (Jv) return Cs;
  Jv = 1;
  var e = Ul();
  function t(r, n) {
    return e(r, n);
  }
  return Cs = t, Cs;
}
var xP = wP();
const pf = /* @__PURE__ */ ae(xP);
var Or = 1e9, _P = {
  // These values must be integers within the stated ranges (inclusive).
  // Most of these values can be changed during run-time using `Decimal.config`.
  // The maximum number of significant digits of the result of a calculation or base conversion.
  // E.g. `Decimal.config({ precision: 20 });`
  precision: 20,
  // 1 to MAX_DIGITS
  // The rounding mode used by default by `toInteger`, `toDecimalPlaces`, `toExponential`,
  // `toFixed`, `toPrecision` and `toSignificantDigits`.
  //
  // ROUND_UP         0 Away from zero.
  // ROUND_DOWN       1 Towards zero.
  // ROUND_CEIL       2 Towards +Infinity.
  // ROUND_FLOOR      3 Towards -Infinity.
  // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
  // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
  // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
  // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
  // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
  //
  // E.g.
  // `Decimal.rounding = 4;`
  // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
  rounding: 4,
  // 0 to 8
  // The exponent value at and beneath which `toString` returns exponential notation.
  // JavaScript numbers: -7
  toExpNeg: -7,
  // 0 to -MAX_E
  // The exponent value at and above which `toString` returns exponential notation.
  // JavaScript numbers: 21
  toExpPos: 21,
  // 0 to MAX_E
  // The natural logarithm of 10.
  // 115 digits
  LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
}, vf, le = !0, Fe = "[DecimalError] ", kt = Fe + "Invalid argument: ", df = Fe + "Exponent out of range: ", Sr = Math.floor, $t = Math.pow, OP = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Ne, Oe = 1e7, ue = 7, Eb = 9007199254740991, ui = Sr(Eb / ue), U = {};
U.absoluteValue = U.abs = function() {
  var e = new this.constructor(this);
  return e.s && (e.s = 1), e;
};
U.comparedTo = U.cmp = function(e) {
  var t, r, n, i, a = this;
  if (e = new a.constructor(e), a.s !== e.s) return a.s || -e.s;
  if (a.e !== e.e) return a.e > e.e ^ a.s < 0 ? 1 : -1;
  for (n = a.d.length, i = e.d.length, t = 0, r = n < i ? n : i; t < r; ++t)
    if (a.d[t] !== e.d[t]) return a.d[t] > e.d[t] ^ a.s < 0 ? 1 : -1;
  return n === i ? 0 : n > i ^ a.s < 0 ? 1 : -1;
};
U.decimalPlaces = U.dp = function() {
  var e = this, t = e.d.length - 1, r = (t - e.e) * ue;
  if (t = e.d[t], t) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
U.dividedBy = U.div = function(e) {
  return ct(this, new this.constructor(e));
};
U.dividedToIntegerBy = U.idiv = function(e) {
  var t = this, r = t.constructor;
  return ne(ct(t, new r(e), 0, 1), r.precision);
};
U.equals = U.eq = function(e) {
  return !this.cmp(e);
};
U.exponent = function() {
  return ve(this);
};
U.greaterThan = U.gt = function(e) {
  return this.cmp(e) > 0;
};
U.greaterThanOrEqualTo = U.gte = function(e) {
  return this.cmp(e) >= 0;
};
U.isInteger = U.isint = function() {
  return this.e > this.d.length - 2;
};
U.isNegative = U.isneg = function() {
  return this.s < 0;
};
U.isPositive = U.ispos = function() {
  return this.s > 0;
};
U.isZero = function() {
  return this.s === 0;
};
U.lessThan = U.lt = function(e) {
  return this.cmp(e) < 0;
};
U.lessThanOrEqualTo = U.lte = function(e) {
  return this.cmp(e) < 1;
};
U.logarithm = U.log = function(e) {
  var t, r = this, n = r.constructor, i = n.precision, a = i + 5;
  if (e === void 0)
    e = new n(10);
  else if (e = new n(e), e.s < 1 || e.eq(Ne)) throw Error(Fe + "NaN");
  if (r.s < 1) throw Error(Fe + (r.s ? "NaN" : "-Infinity"));
  return r.eq(Ne) ? new n(0) : (le = !1, t = ct(Yr(r, a), Yr(e, a), a), le = !0, ne(t, i));
};
U.minus = U.sub = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? Cb(t, e) : jb(t, (e.s = -e.s, e));
};
U.modulo = U.mod = function(e) {
  var t, r = this, n = r.constructor, i = n.precision;
  if (e = new n(e), !e.s) throw Error(Fe + "NaN");
  return r.s ? (le = !1, t = ct(r, e, 0, 1).times(e), le = !0, r.minus(t)) : ne(new n(r), i);
};
U.naturalExponential = U.exp = function() {
  return Mb(this);
};
U.naturalLogarithm = U.ln = function() {
  return Yr(this);
};
U.negated = U.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s || 0, e;
};
U.plus = U.add = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? jb(t, e) : Cb(t, (e.s = -e.s, e));
};
U.precision = U.sd = function(e) {
  var t, r, n, i = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(kt + e);
  if (t = ve(i) + 1, n = i.d.length - 1, r = n * ue + 1, n = i.d[n], n) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = i.d[0]; n >= 10; n /= 10) r++;
  }
  return e && t > r ? t : r;
};
U.squareRoot = U.sqrt = function() {
  var e, t, r, n, i, a, o, u = this, s = u.constructor;
  if (u.s < 1) {
    if (!u.s) return new s(0);
    throw Error(Fe + "NaN");
  }
  for (e = ve(u), le = !1, i = Math.sqrt(+u), i == 0 || i == 1 / 0 ? (t = Je(u.d), (t.length + e) % 2 == 0 && (t += "0"), i = Math.sqrt(t), e = Sr((e + 1) / 2) - (e < 0 || e % 2), i == 1 / 0 ? t = "5e" + e : (t = i.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new s(t)) : n = new s(i.toString()), r = s.precision, i = o = r + 3; ; )
    if (a = n, n = a.plus(ct(u, a, o + 2)).times(0.5), Je(a.d).slice(0, o) === (t = Je(n.d)).slice(0, o)) {
      if (t = t.slice(o - 3, o + 1), i == o && t == "4999") {
        if (ne(a, r + 1, 0), a.times(a).eq(u)) {
          n = a;
          break;
        }
      } else if (t != "9999")
        break;
      o += 4;
    }
  return le = !0, ne(n, r);
};
U.times = U.mul = function(e) {
  var t, r, n, i, a, o, u, s, c, f = this, l = f.constructor, h = f.d, d = (e = new l(e)).d;
  if (!f.s || !e.s) return new l(0);
  for (e.s *= f.s, r = f.e + e.e, s = h.length, c = d.length, s < c && (a = h, h = d, d = a, o = s, s = c, c = o), a = [], o = s + c, n = o; n--; ) a.push(0);
  for (n = c; --n >= 0; ) {
    for (t = 0, i = s + n; i > n; )
      u = a[i] + d[n] * h[i - n - 1] + t, a[i--] = u % Oe | 0, t = u / Oe | 0;
    a[i] = (a[i] + t) % Oe | 0;
  }
  for (; !a[--o]; ) a.pop();
  return t ? ++r : a.shift(), e.d = a, e.e = r, le ? ne(e, l.precision) : e;
};
U.toDecimalPlaces = U.todp = function(e, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e === void 0 ? r : (tt(e, 0, Or), t === void 0 ? t = n.rounding : tt(t, 0, 8), ne(r, e + ve(r) + 1, t));
};
U.toExponential = function(e, t) {
  var r, n = this, i = n.constructor;
  return e === void 0 ? r = Ft(n, !0) : (tt(e, 0, Or), t === void 0 ? t = i.rounding : tt(t, 0, 8), n = ne(new i(n), e + 1, t), r = Ft(n, !0, e + 1)), r;
};
U.toFixed = function(e, t) {
  var r, n, i = this, a = i.constructor;
  return e === void 0 ? Ft(i) : (tt(e, 0, Or), t === void 0 ? t = a.rounding : tt(t, 0, 8), n = ne(new a(i), e + ve(i) + 1, t), r = Ft(n.abs(), !1, e + ve(n) + 1), i.isneg() && !i.isZero() ? "-" + r : r);
};
U.toInteger = U.toint = function() {
  var e = this, t = e.constructor;
  return ne(new t(e), ve(e) + 1, t.rounding);
};
U.toNumber = function() {
  return +this;
};
U.toPower = U.pow = function(e) {
  var t, r, n, i, a, o, u = this, s = u.constructor, c = 12, f = +(e = new s(e));
  if (!e.s) return new s(Ne);
  if (u = new s(u), !u.s) {
    if (e.s < 1) throw Error(Fe + "Infinity");
    return u;
  }
  if (u.eq(Ne)) return u;
  if (n = s.precision, e.eq(Ne)) return ne(u, n);
  if (t = e.e, r = e.d.length - 1, o = t >= r, a = u.s, o) {
    if ((r = f < 0 ? -f : f) <= Eb) {
      for (i = new s(Ne), t = Math.ceil(n / ue + 4), le = !1; r % 2 && (i = i.times(u), ey(i.d, t)), r = Sr(r / 2), r !== 0; )
        u = u.times(u), ey(u.d, t);
      return le = !0, e.s < 0 ? new s(Ne).div(i) : ne(i, n);
    }
  } else if (a < 0) throw Error(Fe + "NaN");
  return a = a < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, u.s = 1, le = !1, i = e.times(Yr(u, n + c)), le = !0, i = Mb(i), i.s = a, i;
};
U.toPrecision = function(e, t) {
  var r, n, i = this, a = i.constructor;
  return e === void 0 ? (r = ve(i), n = Ft(i, r <= a.toExpNeg || r >= a.toExpPos)) : (tt(e, 1, Or), t === void 0 ? t = a.rounding : tt(t, 0, 8), i = ne(new a(i), e, t), r = ve(i), n = Ft(i, e <= r || r <= a.toExpNeg, e)), n;
};
U.toSignificantDigits = U.tosd = function(e, t) {
  var r = this, n = r.constructor;
  return e === void 0 ? (e = n.precision, t = n.rounding) : (tt(e, 1, Or), t === void 0 ? t = n.rounding : tt(t, 0, 8)), ne(new n(r), e, t);
};
U.toString = U.valueOf = U.val = U.toJSON = U[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e = this, t = ve(e), r = e.constructor;
  return Ft(e, t <= r.toExpNeg || t >= r.toExpPos);
};
function jb(e, t) {
  var r, n, i, a, o, u, s, c, f = e.constructor, l = f.precision;
  if (!e.s || !t.s)
    return t.s || (t = new f(e)), le ? ne(t, l) : t;
  if (s = e.d, c = t.d, o = e.e, i = t.e, s = s.slice(), a = o - i, a) {
    for (a < 0 ? (n = s, a = -a, u = c.length) : (n = c, i = o, u = s.length), o = Math.ceil(l / ue), u = o > u ? o + 1 : u + 1, a > u && (a = u, n.length = 1), n.reverse(); a--; ) n.push(0);
    n.reverse();
  }
  for (u = s.length, a = c.length, u - a < 0 && (a = u, n = c, c = s, s = n), r = 0; a; )
    r = (s[--a] = s[a] + c[a] + r) / Oe | 0, s[a] %= Oe;
  for (r && (s.unshift(r), ++i), u = s.length; s[--u] == 0; ) s.pop();
  return t.d = s, t.e = i, le ? ne(t, l) : t;
}
function tt(e, t, r) {
  if (e !== ~~e || e < t || e > r)
    throw Error(kt + e);
}
function Je(e) {
  var t, r, n, i = e.length - 1, a = "", o = e[0];
  if (i > 0) {
    for (a += o, t = 1; t < i; t++)
      n = e[t] + "", r = ue - n.length, r && (a += gt(r)), a += n;
    o = e[t], n = o + "", r = ue - n.length, r && (a += gt(r));
  } else if (o === 0)
    return "0";
  for (; o % 10 === 0; ) o /= 10;
  return a + o;
}
var ct = /* @__PURE__ */ (function() {
  function e(n, i) {
    var a, o = 0, u = n.length;
    for (n = n.slice(); u--; )
      a = n[u] * i + o, n[u] = a % Oe | 0, o = a / Oe | 0;
    return o && n.unshift(o), n;
  }
  function t(n, i, a, o) {
    var u, s;
    if (a != o)
      s = a > o ? 1 : -1;
    else
      for (u = s = 0; u < a; u++)
        if (n[u] != i[u]) {
          s = n[u] > i[u] ? 1 : -1;
          break;
        }
    return s;
  }
  function r(n, i, a) {
    for (var o = 0; a--; )
      n[a] -= o, o = n[a] < i[a] ? 1 : 0, n[a] = o * Oe + n[a] - i[a];
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function(n, i, a, o) {
    var u, s, c, f, l, h, d, g, v, p, m, w, x, _, y, b, O, S, A = n.constructor, C = n.s == i.s ? 1 : -1, T = n.d, P = i.d;
    if (!n.s) return new A(n);
    if (!i.s) throw Error(Fe + "Division by zero");
    for (s = n.e - i.e, O = P.length, y = T.length, d = new A(C), g = d.d = [], c = 0; P[c] == (T[c] || 0); ) ++c;
    if (P[c] > (T[c] || 0) && --s, a == null ? w = a = A.precision : o ? w = a + (ve(n) - ve(i)) + 1 : w = a, w < 0) return new A(0);
    if (w = w / ue + 2 | 0, c = 0, O == 1)
      for (f = 0, P = P[0], w++; (c < y || f) && w--; c++)
        x = f * Oe + (T[c] || 0), g[c] = x / P | 0, f = x % P | 0;
    else {
      for (f = Oe / (P[0] + 1) | 0, f > 1 && (P = e(P, f), T = e(T, f), O = P.length, y = T.length), _ = O, v = T.slice(0, O), p = v.length; p < O; ) v[p++] = 0;
      S = P.slice(), S.unshift(0), b = P[0], P[1] >= Oe / 2 && ++b;
      do
        f = 0, u = t(P, v, O, p), u < 0 ? (m = v[0], O != p && (m = m * Oe + (v[1] || 0)), f = m / b | 0, f > 1 ? (f >= Oe && (f = Oe - 1), l = e(P, f), h = l.length, p = v.length, u = t(l, v, h, p), u == 1 && (f--, r(l, O < h ? S : P, h))) : (f == 0 && (u = f = 1), l = P.slice()), h = l.length, h < p && l.unshift(0), r(v, l, p), u == -1 && (p = v.length, u = t(P, v, O, p), u < 1 && (f++, r(v, O < p ? S : P, p))), p = v.length) : u === 0 && (f++, v = [0]), g[c++] = f, u && v[0] ? v[p++] = T[_] || 0 : (v = [T[_]], p = 1);
      while ((_++ < y || v[0] !== void 0) && w--);
    }
    return g[0] || g.shift(), d.e = s, ne(d, o ? a + ve(d) + 1 : a);
  };
})();
function Mb(e, t) {
  var r, n, i, a, o, u, s = 0, c = 0, f = e.constructor, l = f.precision;
  if (ve(e) > 16) throw Error(df + ve(e));
  if (!e.s) return new f(Ne);
  for (le = !1, u = l, o = new f(0.03125); e.abs().gte(0.1); )
    e = e.times(o), c += 5;
  for (n = Math.log($t(2, c)) / Math.LN10 * 2 + 5 | 0, u += n, r = i = a = new f(Ne), f.precision = u; ; ) {
    if (i = ne(i.times(e), u), r = r.times(++s), o = a.plus(ct(i, r, u)), Je(o.d).slice(0, u) === Je(a.d).slice(0, u)) {
      for (; c--; ) a = ne(a.times(a), u);
      return f.precision = l, t == null ? (le = !0, ne(a, l)) : a;
    }
    a = o;
  }
}
function ve(e) {
  for (var t = e.e * ue, r = e.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function Is(e, t, r) {
  if (t > e.LN10.sd())
    throw le = !0, r && (e.precision = r), Error(Fe + "LN10 precision limit exceeded");
  return ne(new e(e.LN10), t);
}
function gt(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function Yr(e, t) {
  var r, n, i, a, o, u, s, c, f, l = 1, h = 10, d = e, g = d.d, v = d.constructor, p = v.precision;
  if (d.s < 1) throw Error(Fe + (d.s ? "NaN" : "-Infinity"));
  if (d.eq(Ne)) return new v(0);
  if (t == null ? (le = !1, c = p) : c = t, d.eq(10))
    return t == null && (le = !0), Is(v, c);
  if (c += h, v.precision = c, r = Je(g), n = r.charAt(0), a = ve(d), Math.abs(a) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      d = d.times(e), r = Je(d.d), n = r.charAt(0), l++;
    a = ve(d), n > 1 ? (d = new v("0." + r), a++) : d = new v(n + "." + r.slice(1));
  } else
    return s = Is(v, c + 2, p).times(a + ""), d = Yr(new v(n + "." + r.slice(1)), c - h).plus(s), v.precision = p, t == null ? (le = !0, ne(d, p)) : d;
  for (u = o = d = ct(d.minus(Ne), d.plus(Ne), c), f = ne(d.times(d), c), i = 3; ; ) {
    if (o = ne(o.times(f), c), s = u.plus(ct(o, new v(i), c)), Je(s.d).slice(0, c) === Je(u.d).slice(0, c))
      return u = u.times(2), a !== 0 && (u = u.plus(Is(v, c + 2, p).times(a + ""))), u = ct(u, new v(l), c), v.precision = p, t == null ? (le = !0, ne(u, p)) : u;
    u = s, i += 2;
  }
}
function Qv(e, t) {
  var r, n, i;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; ) ++n;
  for (i = t.length; t.charCodeAt(i - 1) === 48; ) --i;
  if (t = t.slice(n, i), t) {
    if (i -= n, r = r - n - 1, e.e = Sr(r / ue), e.d = [], n = (r + 1) % ue, r < 0 && (n += ue), n < i) {
      for (n && e.d.push(+t.slice(0, n)), i -= ue; n < i; ) e.d.push(+t.slice(n, n += ue));
      t = t.slice(n), n = ue - t.length;
    } else
      n -= i;
    for (; n--; ) t += "0";
    if (e.d.push(+t), le && (e.e > ui || e.e < -ui)) throw Error(df + r);
  } else
    e.s = 0, e.e = 0, e.d = [0];
  return e;
}
function ne(e, t, r) {
  var n, i, a, o, u, s, c, f, l = e.d;
  for (o = 1, a = l[0]; a >= 10; a /= 10) o++;
  if (n = t - o, n < 0)
    n += ue, i = t, c = l[f = 0];
  else {
    if (f = Math.ceil((n + 1) / ue), a = l.length, f >= a) return e;
    for (c = a = l[f], o = 1; a >= 10; a /= 10) o++;
    n %= ue, i = n - ue + o;
  }
  if (r !== void 0 && (a = $t(10, o - i - 1), u = c / a % 10 | 0, s = t < 0 || l[f + 1] !== void 0 || c % a, s = r < 4 ? (u || s) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : u > 5 || u == 5 && (r == 4 || s || r == 6 && // Check whether the digit to the left of the rounding digit is odd.
  (n > 0 ? i > 0 ? c / $t(10, o - i) : 0 : l[f - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7))), t < 1 || !l[0])
    return s ? (a = ve(e), l.length = 1, t = t - a - 1, l[0] = $t(10, (ue - t % ue) % ue), e.e = Sr(-t / ue) || 0) : (l.length = 1, l[0] = e.e = e.s = 0), e;
  if (n == 0 ? (l.length = f, a = 1, f--) : (l.length = f + 1, a = $t(10, ue - n), l[f] = i > 0 ? (c / $t(10, o - i) % $t(10, i) | 0) * a : 0), s)
    for (; ; )
      if (f == 0) {
        (l[0] += a) == Oe && (l[0] = 1, ++e.e);
        break;
      } else {
        if (l[f] += a, l[f] != Oe) break;
        l[f--] = 0, a = 1;
      }
  for (n = l.length; l[--n] === 0; ) l.pop();
  if (le && (e.e > ui || e.e < -ui))
    throw Error(df + ve(e));
  return e;
}
function Cb(e, t) {
  var r, n, i, a, o, u, s, c, f, l, h = e.constructor, d = h.precision;
  if (!e.s || !t.s)
    return t.s ? t.s = -t.s : t = new h(e), le ? ne(t, d) : t;
  if (s = e.d, l = t.d, n = t.e, c = e.e, s = s.slice(), o = c - n, o) {
    for (f = o < 0, f ? (r = s, o = -o, u = l.length) : (r = l, n = c, u = s.length), i = Math.max(Math.ceil(d / ue), u) + 2, o > i && (o = i, r.length = 1), r.reverse(), i = o; i--; ) r.push(0);
    r.reverse();
  } else {
    for (i = s.length, u = l.length, f = i < u, f && (u = i), i = 0; i < u; i++)
      if (s[i] != l[i]) {
        f = s[i] < l[i];
        break;
      }
    o = 0;
  }
  for (f && (r = s, s = l, l = r, t.s = -t.s), u = s.length, i = l.length - u; i > 0; --i) s[u++] = 0;
  for (i = l.length; i > o; ) {
    if (s[--i] < l[i]) {
      for (a = i; a && s[--a] === 0; ) s[a] = Oe - 1;
      --s[a], s[i] += Oe;
    }
    s[i] -= l[i];
  }
  for (; s[--u] === 0; ) s.pop();
  for (; s[0] === 0; s.shift()) --n;
  return s[0] ? (t.d = s, t.e = n, le ? ne(t, d) : t) : new h(0);
}
function Ft(e, t, r) {
  var n, i = ve(e), a = Je(e.d), o = a.length;
  return t ? (r && (n = r - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + gt(n) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (i < 0 ? "e" : "e+") + i) : i < 0 ? (a = "0." + gt(-i - 1) + a, r && (n = r - o) > 0 && (a += gt(n))) : i >= o ? (a += gt(i + 1 - o), r && (n = r - i - 1) > 0 && (a = a + "." + gt(n))) : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)), r && (n = r - o) > 0 && (i + 1 === o && (a += "."), a += gt(n))), e.s < 0 ? "-" + a : a;
}
function ey(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function Ib(e) {
  var t, r, n;
  function i(a) {
    var o = this;
    if (!(o instanceof i)) return new i(a);
    if (o.constructor = i, a instanceof i) {
      o.s = a.s, o.e = a.e, o.d = (a = a.d) ? a.slice() : a;
      return;
    }
    if (typeof a == "number") {
      if (a * 0 !== 0)
        throw Error(kt + a);
      if (a > 0)
        o.s = 1;
      else if (a < 0)
        a = -a, o.s = -1;
      else {
        o.s = 0, o.e = 0, o.d = [0];
        return;
      }
      if (a === ~~a && a < 1e7) {
        o.e = 0, o.d = [a];
        return;
      }
      return Qv(o, a.toString());
    } else if (typeof a != "string")
      throw Error(kt + a);
    if (a.charCodeAt(0) === 45 ? (a = a.slice(1), o.s = -1) : o.s = 1, OP.test(a)) Qv(o, a);
    else throw Error(kt + a);
  }
  if (i.prototype = U, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = Ib, i.config = i.set = SP, e === void 0 && (e = {}), e)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  return i.config(e), i;
}
function SP(e) {
  if (!e || typeof e != "object")
    throw Error(Fe + "Object expected");
  var t, r, n, i = [
    "precision",
    1,
    Or,
    "rounding",
    0,
    8,
    "toExpNeg",
    -1 / 0,
    0,
    "toExpPos",
    0,
    1 / 0
  ];
  for (t = 0; t < i.length; t += 3)
    if ((n = e[r = i[t]]) !== void 0)
      if (Sr(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
      else throw Error(kt + r + ": " + n);
  if ((n = e[r = "LN10"]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error(kt + r + ": " + n);
  return this;
}
var vf = Ib(_P);
Ne = new vf(1);
const re = vf;
function AP(e) {
  return jP(e) || EP(e) || TP(e) || PP();
}
function PP() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function TP(e, t) {
  if (e) {
    if (typeof e == "string") return qc(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return qc(e, t);
  }
}
function EP(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function jP(e) {
  if (Array.isArray(e)) return qc(e);
}
function qc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var MP = function(t) {
  return t;
}, $b = {}, Rb = function(t) {
  return t === $b;
}, ty = function(t) {
  return function r() {
    return arguments.length === 0 || arguments.length === 1 && Rb(arguments.length <= 0 ? void 0 : arguments[0]) ? r : t.apply(void 0, arguments);
  };
}, CP = function e(t, r) {
  return t === 1 ? r : ty(function() {
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    var o = i.filter(function(u) {
      return u !== $b;
    }).length;
    return o >= t ? r.apply(void 0, i) : e(t - o, ty(function() {
      for (var u = arguments.length, s = new Array(u), c = 0; c < u; c++)
        s[c] = arguments[c];
      var f = i.map(function(l) {
        return Rb(l) ? s.shift() : l;
      });
      return r.apply(void 0, AP(f).concat(s));
    }));
  });
}, Qi = function(t) {
  return CP(t.length, t);
}, kc = function(t, r) {
  for (var n = [], i = t; i < r; ++i)
    n[i - t] = i;
  return n;
}, IP = Qi(function(e, t) {
  return Array.isArray(t) ? t.map(e) : Object.keys(t).map(function(r) {
    return t[r];
  }).map(e);
}), $P = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  if (!r.length)
    return MP;
  var i = r.reverse(), a = i[0], o = i.slice(1);
  return function() {
    return o.reduce(function(u, s) {
      return s(u);
    }, a.apply(void 0, arguments));
  };
}, Lc = function(t) {
  return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
}, Db = function(t) {
  var r = null, n = null;
  return function() {
    for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
      a[o] = arguments[o];
    return r && a.every(function(u, s) {
      return u === r[s];
    }) || (r = a, n = t.apply(void 0, a)), n;
  };
};
function RP(e) {
  var t;
  return e === 0 ? t = 1 : t = Math.floor(new re(e).abs().log(10).toNumber()) + 1, t;
}
function DP(e, t, r) {
  for (var n = new re(e), i = 0, a = []; n.lt(t) && i < 1e5; )
    a.push(n.toNumber()), n = n.add(r), i++;
  return a;
}
var NP = Qi(function(e, t, r) {
  var n = +e, i = +t;
  return n + r * (i - n);
}), qP = Qi(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, (r - e) / n;
}), kP = Qi(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, Math.max(0, Math.min(1, (r - e) / n));
});
const ea = {
  rangeStep: DP,
  getDigitCount: RP,
  interpolateNumber: NP,
  uninterpolateNumber: qP,
  uninterpolateTruncation: kP
};
function Bc(e) {
  return FP(e) || BP(e) || Nb(e) || LP();
}
function LP() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function BP(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function FP(e) {
  if (Array.isArray(e)) return Fc(e);
}
function Zr(e, t) {
  return zP(e) || WP(e, t) || Nb(e, t) || UP();
}
function UP() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Nb(e, t) {
  if (e) {
    if (typeof e == "string") return Fc(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Fc(e, t);
  }
}
function Fc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function WP(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var r = [], n = !0, i = !1, a = void 0;
    try {
      for (var o = e[Symbol.iterator](), u; !(n = (u = o.next()).done) && (r.push(u.value), !(t && r.length === t)); n = !0)
        ;
    } catch (s) {
      i = !0, a = s;
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (i) throw a;
      }
    }
    return r;
  }
}
function zP(e) {
  if (Array.isArray(e)) return e;
}
function qb(e) {
  var t = Zr(e, 2), r = t[0], n = t[1], i = r, a = n;
  return r > n && (i = n, a = r), [i, a];
}
function kb(e, t, r) {
  if (e.lte(0))
    return new re(0);
  var n = ea.getDigitCount(e.toNumber()), i = new re(10).pow(n), a = e.div(i), o = n !== 1 ? 0.05 : 0.1, u = new re(Math.ceil(a.div(o).toNumber())).add(r).mul(o), s = u.mul(i);
  return t ? s : new re(Math.ceil(s));
}
function HP(e, t, r) {
  var n = 1, i = new re(e);
  if (!i.isint() && r) {
    var a = Math.abs(e);
    a < 1 ? (n = new re(10).pow(ea.getDigitCount(e) - 1), i = new re(Math.floor(i.div(n).toNumber())).mul(n)) : a > 1 && (i = new re(Math.floor(e)));
  } else e === 0 ? i = new re(Math.floor((t - 1) / 2)) : r || (i = new re(Math.floor(e)));
  var o = Math.floor((t - 1) / 2), u = $P(IP(function(s) {
    return i.add(new re(s - o).mul(n)).toNumber();
  }), kc);
  return u(0, t);
}
function Lb(e, t, r, n) {
  var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e) / (r - 1)))
    return {
      step: new re(0),
      tickMin: new re(0),
      tickMax: new re(0)
    };
  var a = kb(new re(t).sub(e).div(r - 1), n, i), o;
  e <= 0 && t >= 0 ? o = new re(0) : (o = new re(e).add(t).div(2), o = o.sub(new re(o).mod(a)));
  var u = Math.ceil(o.sub(e).div(a).toNumber()), s = Math.ceil(new re(t).sub(o).div(a).toNumber()), c = u + s + 1;
  return c > r ? Lb(e, t, r, n, i + 1) : (c < r && (s = t > 0 ? s + (r - c) : s, u = t > 0 ? u : u + (r - c)), {
    step: a,
    tickMin: o.sub(new re(u).mul(a)),
    tickMax: o.add(new re(s).mul(a))
  });
}
function GP(e) {
  var t = Zr(e, 2), r = t[0], n = t[1], i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = Math.max(i, 2), u = qb([r, n]), s = Zr(u, 2), c = s[0], f = s[1];
  if (c === -1 / 0 || f === 1 / 0) {
    var l = f === 1 / 0 ? [c].concat(Bc(kc(0, i - 1).map(function() {
      return 1 / 0;
    }))) : [].concat(Bc(kc(0, i - 1).map(function() {
      return -1 / 0;
    })), [f]);
    return r > n ? Lc(l) : l;
  }
  if (c === f)
    return HP(c, i, a);
  var h = Lb(c, f, o, a), d = h.step, g = h.tickMin, v = h.tickMax, p = ea.rangeStep(g, v.add(new re(0.1).mul(d)), d);
  return r > n ? Lc(p) : p;
}
function KP(e, t) {
  var r = Zr(e, 2), n = r[0], i = r[1], a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = qb([n, i]), u = Zr(o, 2), s = u[0], c = u[1];
  if (s === -1 / 0 || c === 1 / 0)
    return [n, i];
  if (s === c)
    return [s];
  var f = Math.max(t, 2), l = kb(new re(c).sub(s).div(f - 1), a, 0), h = [].concat(Bc(ea.rangeStep(new re(s), new re(c).sub(new re(0.99).mul(l)), l)), [c]);
  return n > i ? Lc(h) : h;
}
var XP = Db(GP), VP = Db(KP), YP = "Invariant failed";
function Ut(e, t) {
  throw new Error(YP);
}
var ZP = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
function lr(e) {
  "@babel/helpers - typeof";
  return lr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, lr(e);
}
function si() {
  return si = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, si.apply(this, arguments);
}
function JP(e, t) {
  return rT(e) || tT(e, t) || eT(e, t) || QP();
}
function QP() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function eT(e, t) {
  if (e) {
    if (typeof e == "string") return ry(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ry(e, t);
  }
}
function ry(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function tT(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], s = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, i = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function rT(e) {
  if (Array.isArray(e)) return e;
}
function nT(e, t) {
  if (e == null) return {};
  var r = iT(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function iT(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function aT(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function oT(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Ub(n.key), n);
  }
}
function uT(e, t, r) {
  return t && oT(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function sT(e, t, r) {
  return t = ci(t), cT(e, Bb() ? Reflect.construct(t, r || [], ci(e).constructor) : t.apply(e, r));
}
function cT(e, t) {
  if (t && (lr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return lT(e);
}
function lT(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Bb() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Bb = function() {
    return !!e;
  })();
}
function ci(e) {
  return ci = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ci(e);
}
function fT(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Uc(e, t);
}
function Uc(e, t) {
  return Uc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Uc(e, t);
}
function Fb(e, t, r) {
  return t = Ub(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ub(e) {
  var t = hT(e, "string");
  return lr(t) == "symbol" ? t : t + "";
}
function hT(e, t) {
  if (lr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (lr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var ta = /* @__PURE__ */ (function(e) {
  function t() {
    return aT(this, t), sT(this, t, arguments);
  }
  return fT(t, e), uT(t, [{
    key: "render",
    value: function() {
      var n = this.props, i = n.offset, a = n.layout, o = n.width, u = n.dataKey, s = n.data, c = n.dataPointFormatter, f = n.xAxis, l = n.yAxis, h = nT(n, ZP), d = ce(h, !1);
      this.props.direction === "x" && f.type !== "number" && Ut();
      var g = s.map(function(v) {
        var p = c(v, u), m = p.x, w = p.y, x = p.value, _ = p.errorVal;
        if (!_)
          return null;
        var y = [], b, O;
        if (Array.isArray(_)) {
          var S = JP(_, 2);
          b = S[0], O = S[1];
        } else
          b = O = _;
        if (a === "vertical") {
          var A = f.scale, C = w + i, T = C + o, P = C - o, j = A(x - b), I = A(x + O);
          y.push({
            x1: I,
            y1: T,
            x2: I,
            y2: P
          }), y.push({
            x1: j,
            y1: C,
            x2: I,
            y2: C
          }), y.push({
            x1: j,
            y1: T,
            x2: j,
            y2: P
          });
        } else if (a === "horizontal") {
          var M = l.scale, R = m + i, N = R - o, q = R + o, k = M(x - b), W = M(x + O);
          y.push({
            x1: N,
            y1: W,
            x2: q,
            y2: W
          }), y.push({
            x1: R,
            y1: k,
            x2: R,
            y2: W
          }), y.push({
            x1: N,
            y1: k,
            x2: q,
            y2: k
          });
        }
        return /* @__PURE__ */ E.createElement(Te, si({
          className: "recharts-errorBar",
          key: "bar-".concat(y.map(function(H) {
            return "".concat(H.x1, "-").concat(H.x2, "-").concat(H.y1, "-").concat(H.y2);
          }))
        }, d), y.map(function(H) {
          return /* @__PURE__ */ E.createElement("line", si({}, H, {
            key: "line-".concat(H.x1, "-").concat(H.x2, "-").concat(H.y1, "-").concat(H.y2)
          }));
        }));
      });
      return /* @__PURE__ */ E.createElement(Te, {
        className: "recharts-errorBars"
      }, g);
    }
  }]);
})(E.Component);
Fb(ta, "defaultProps", {
  stroke: "black",
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: "horizontal"
});
Fb(ta, "displayName", "ErrorBar");
function Jr(e) {
  "@babel/helpers - typeof";
  return Jr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Jr(e);
}
function ny(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ct(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ny(Object(r), !0).forEach(function(n) {
      pT(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ny(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function pT(e, t, r) {
  return t = dT(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function dT(e) {
  var t = vT(e, "string");
  return Jr(t) == "symbol" ? t : t + "";
}
function vT(e, t) {
  if (Jr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Jr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Wb = function(t) {
  var r = t.children, n = t.formattedGraphicalItems, i = t.legendWidth, a = t.legendContent, o = De(r, er);
  if (!o)
    return null;
  var u = er.defaultProps, s = u !== void 0 ? Ct(Ct({}, u), o.props) : {}, c;
  return o.props && o.props.payload ? c = o.props && o.props.payload : a === "children" ? c = (n || []).reduce(function(f, l) {
    var h = l.item, d = l.props, g = d.sectors || d.data || [];
    return f.concat(g.map(function(v) {
      return {
        type: o.props.iconType || h.props.legendType,
        value: v.name,
        color: v.fill,
        payload: v
      };
    }));
  }, []) : c = (n || []).map(function(f) {
    var l = f.item, h = l.type.defaultProps, d = h !== void 0 ? Ct(Ct({}, h), l.props) : {}, g = d.dataKey, v = d.name, p = d.legendType, m = d.hide;
    return {
      inactive: m,
      dataKey: g,
      type: s.iconType || p || "square",
      color: yf(l),
      value: v || g,
      // @ts-expect-error property strokeDasharray is required in Payload but optional in props
      payload: d
    };
  }), Ct(Ct(Ct({}, s), er.getWithHeight(o, i)), {}, {
    payload: c,
    item: o
  });
};
function Qr(e) {
  "@babel/helpers - typeof";
  return Qr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Qr(e);
}
function iy(e) {
  return bT(e) || mT(e) || gT(e) || yT();
}
function yT() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function gT(e, t) {
  if (e) {
    if (typeof e == "string") return Wc(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Wc(e, t);
  }
}
function mT(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function bT(e) {
  if (Array.isArray(e)) return Wc(e);
}
function Wc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function ay(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function he(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ay(Object(r), !0).forEach(function(n) {
      tr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ay(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function tr(e, t, r) {
  return t = wT(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function wT(e) {
  var t = xT(e, "string");
  return Qr(t) == "symbol" ? t : t + "";
}
function xT(e, t) {
  if (Qr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Qr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Xe(e, t, r) {
  return V(e) || V(t) ? r : xe(t) ? Qe(e, t, r) : J(t) ? t(e) : r;
}
function Lr(e, t, r, n) {
  var i = bP(e, function(u) {
    return Xe(u, t);
  });
  if (r === "number") {
    var a = i.filter(function(u) {
      return B(u) || parseFloat(u);
    });
    return a.length ? [Ji(a), Zi(a)] : [1 / 0, -1 / 0];
  }
  var o = n ? i.filter(function(u) {
    return !V(u);
  }) : i;
  return o.map(function(u) {
    return xe(u) || u instanceof Date ? u : "";
  });
}
var _T = function(t) {
  var r, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], i = arguments.length > 2 ? arguments[2] : void 0, a = arguments.length > 3 ? arguments[3] : void 0, o = -1, u = (r = n?.length) !== null && r !== void 0 ? r : 0;
  if (u <= 1)
    return 0;
  if (a && a.axisType === "angleAxis" && Math.abs(Math.abs(a.range[1] - a.range[0]) - 360) <= 1e-6)
    for (var s = a.range, c = 0; c < u; c++) {
      var f = c > 0 ? i[c - 1].coordinate : i[u - 1].coordinate, l = i[c].coordinate, h = c >= u - 1 ? i[0].coordinate : i[c + 1].coordinate, d = void 0;
      if (Ze(l - f) !== Ze(h - l)) {
        var g = [];
        if (Ze(h - l) === Ze(s[1] - s[0])) {
          d = h;
          var v = l + s[1] - s[0];
          g[0] = Math.min(v, (v + f) / 2), g[1] = Math.max(v, (v + f) / 2);
        } else {
          d = f;
          var p = h + s[1] - s[0];
          g[0] = Math.min(l, (p + l) / 2), g[1] = Math.max(l, (p + l) / 2);
        }
        var m = [Math.min(l, (d + l) / 2), Math.max(l, (d + l) / 2)];
        if (t > m[0] && t <= m[1] || t >= g[0] && t <= g[1]) {
          o = i[c].index;
          break;
        }
      } else {
        var w = Math.min(f, h), x = Math.max(f, h);
        if (t > (w + l) / 2 && t <= (x + l) / 2) {
          o = i[c].index;
          break;
        }
      }
    }
  else
    for (var _ = 0; _ < u; _++)
      if (_ === 0 && t <= (n[_].coordinate + n[_ + 1].coordinate) / 2 || _ > 0 && _ < u - 1 && t > (n[_].coordinate + n[_ - 1].coordinate) / 2 && t <= (n[_].coordinate + n[_ + 1].coordinate) / 2 || _ === u - 1 && t > (n[_].coordinate + n[_ - 1].coordinate) / 2) {
        o = n[_].index;
        break;
      }
  return o;
}, yf = function(t) {
  var r, n = t, i = n.type.displayName, a = (r = t.type) !== null && r !== void 0 && r.defaultProps ? he(he({}, t.type.defaultProps), t.props) : t.props, o = a.stroke, u = a.fill, s;
  switch (i) {
    case "Line":
      s = o;
      break;
    case "Area":
    case "Radar":
      s = o && o !== "none" ? o : u;
      break;
    default:
      s = u;
      break;
  }
  return s;
}, OT = function(t) {
  var r = t.barSize, n = t.totalSize, i = t.stackGroups, a = i === void 0 ? {} : i;
  if (!a)
    return {};
  for (var o = {}, u = Object.keys(a), s = 0, c = u.length; s < c; s++)
    for (var f = a[u[s]].stackGroups, l = Object.keys(f), h = 0, d = l.length; h < d; h++) {
      var g = f[l[h]], v = g.items, p = g.cateAxisId, m = v.filter(function(O) {
        return st(O.type).indexOf("Bar") >= 0;
      });
      if (m && m.length) {
        var w = m[0].type.defaultProps, x = w !== void 0 ? he(he({}, w), m[0].props) : m[0].props, _ = x.barSize, y = x[p];
        o[y] || (o[y] = []);
        var b = V(_) ? r : _;
        o[y].push({
          item: m[0],
          stackList: m.slice(1),
          barSize: V(b) ? void 0 : He(b, n, 0)
        });
      }
    }
  return o;
}, ST = function(t) {
  var r = t.barGap, n = t.barCategoryGap, i = t.bandSize, a = t.sizeList, o = a === void 0 ? [] : a, u = t.maxBarSize, s = o.length;
  if (s < 1) return null;
  var c = He(r, i, 0, !0), f, l = [];
  if (o[0].barSize === +o[0].barSize) {
    var h = !1, d = i / s, g = o.reduce(function(_, y) {
      return _ + y.barSize || 0;
    }, 0);
    g += (s - 1) * c, g >= i && (g -= (s - 1) * c, c = 0), g >= i && d > 0 && (h = !0, d *= 0.9, g = s * d);
    var v = (i - g) / 2 >> 0, p = {
      offset: v - c,
      size: 0
    };
    f = o.reduce(function(_, y) {
      var b = {
        item: y.item,
        position: {
          offset: p.offset + p.size + c,
          // @ts-expect-error the type check above does not check for type number explicitly
          size: h ? d : y.barSize
        }
      }, O = [].concat(iy(_), [b]);
      return p = O[O.length - 1].position, y.stackList && y.stackList.length && y.stackList.forEach(function(S) {
        O.push({
          item: S,
          position: p
        });
      }), O;
    }, l);
  } else {
    var m = He(n, i, 0, !0);
    i - 2 * m - (s - 1) * c <= 0 && (c = 0);
    var w = (i - 2 * m - (s - 1) * c) / s;
    w > 1 && (w >>= 0);
    var x = u === +u ? Math.min(w, u) : w;
    f = o.reduce(function(_, y, b) {
      var O = [].concat(iy(_), [{
        item: y.item,
        position: {
          offset: m + (w + c) * b + (w - x) / 2,
          size: x
        }
      }]);
      return y.stackList && y.stackList.length && y.stackList.forEach(function(S) {
        O.push({
          item: S,
          position: O[O.length - 1].position
        });
      }), O;
    }, l);
  }
  return f;
}, AT = function(t, r, n, i) {
  var a = n.children, o = n.width, u = n.margin, s = o - (u.left || 0) - (u.right || 0), c = Wb({
    children: a,
    legendWidth: s
  });
  if (c) {
    var f = i || {}, l = f.width, h = f.height, d = c.align, g = c.verticalAlign, v = c.layout;
    if ((v === "vertical" || v === "horizontal" && g === "middle") && d !== "center" && B(t[d]))
      return he(he({}, t), {}, tr({}, d, t[d] + (l || 0)));
    if ((v === "horizontal" || v === "vertical" && d === "center") && g !== "middle" && B(t[g]))
      return he(he({}, t), {}, tr({}, g, t[g] + (h || 0)));
  }
  return t;
}, PT = function(t, r, n) {
  return V(r) ? !0 : t === "horizontal" ? r === "yAxis" : t === "vertical" || n === "x" ? r === "xAxis" : n === "y" ? r === "yAxis" : !0;
}, zb = function(t, r, n, i, a) {
  var o = r.props.children, u = Ke(o, ta).filter(function(c) {
    return PT(i, a, c.props.direction);
  });
  if (u && u.length) {
    var s = u.map(function(c) {
      return c.props.dataKey;
    });
    return t.reduce(function(c, f) {
      var l = Xe(f, n);
      if (V(l)) return c;
      var h = Array.isArray(l) ? [Ji(l), Zi(l)] : [l, l], d = s.reduce(function(g, v) {
        var p = Xe(f, v, 0), m = h[0] - Math.abs(Array.isArray(p) ? p[0] : p), w = h[1] + Math.abs(Array.isArray(p) ? p[1] : p);
        return [Math.min(m, g[0]), Math.max(w, g[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(d[0], c[0]), Math.max(d[1], c[1])];
    }, [1 / 0, -1 / 0]);
  }
  return null;
}, TT = function(t, r, n, i, a) {
  var o = r.map(function(u) {
    return zb(t, u, n, a, i);
  }).filter(function(u) {
    return !V(u);
  });
  return o && o.length ? o.reduce(function(u, s) {
    return [Math.min(u[0], s[0]), Math.max(u[1], s[1])];
  }, [1 / 0, -1 / 0]) : null;
}, Hb = function(t, r, n, i, a) {
  var o = r.map(function(s) {
    var c = s.props.dataKey;
    return n === "number" && c && zb(t, s, c, i) || Lr(t, c, n, a);
  });
  if (n === "number")
    return o.reduce(
      // @ts-expect-error if (type === number) means that the domain is numerical type
      // - but this link is missing in the type definition
      function(s, c) {
        return [Math.min(s[0], c[0]), Math.max(s[1], c[1])];
      },
      [1 / 0, -1 / 0]
    );
  var u = {};
  return o.reduce(function(s, c) {
    for (var f = 0, l = c.length; f < l; f++)
      u[c[f]] || (u[c[f]] = !0, s.push(c[f]));
    return s;
  }, []);
}, Gb = function(t, r) {
  return t === "horizontal" && r === "xAxis" || t === "vertical" && r === "yAxis" || t === "centric" && r === "angleAxis" || t === "radial" && r === "radiusAxis";
}, MR = function(t, r, n, i) {
  if (i)
    return t.map(function(s) {
      return s.coordinate;
    });
  var a, o, u = t.map(function(s) {
    return s.coordinate === r && (a = !0), s.coordinate === n && (o = !0), s.coordinate;
  });
  return a || u.push(r), o || u.push(n), u;
}, Nr = function(t, r, n) {
  if (!t) return null;
  var i = t.scale, a = t.duplicateDomain, o = t.type, u = t.range, s = t.realScaleType === "scaleBand" ? i.bandwidth() / 2 : 2, c = (r || n) && o === "category" && i.bandwidth ? i.bandwidth() / s : 0;
  if (c = t.axisType === "angleAxis" && u?.length >= 2 ? Ze(u[0] - u[1]) * 2 * c : c, r && (t.ticks || t.niceTicks)) {
    var f = (t.ticks || t.niceTicks).map(function(l) {
      var h = a ? a.indexOf(l) : l;
      return {
        // If the scaleContent is not a number, the coordinate will be NaN.
        // That could be the case for example with a PointScale and a string as domain.
        coordinate: i(h) + c,
        value: l,
        offset: c
      };
    });
    return f.filter(function(l) {
      return !xn(l.coordinate);
    });
  }
  return t.isCategorical && t.categoricalDomain ? t.categoricalDomain.map(function(l, h) {
    return {
      coordinate: i(l) + c,
      value: l,
      index: h,
      offset: c
    };
  }) : i.ticks && !n ? i.ticks(t.tickCount).map(function(l) {
    return {
      coordinate: i(l) + c,
      value: l,
      offset: c
    };
  }) : i.domain().map(function(l, h) {
    return {
      coordinate: i(l) + c,
      value: a ? a[l] : l,
      index: h,
      offset: c
    };
  });
}, $s = /* @__PURE__ */ new WeakMap(), Rn = function(t, r) {
  if (typeof r != "function")
    return t;
  $s.has(t) || $s.set(t, /* @__PURE__ */ new WeakMap());
  var n = $s.get(t);
  if (n.has(r))
    return n.get(r);
  var i = function() {
    t.apply(void 0, arguments), r.apply(void 0, arguments);
  };
  return n.set(r, i), i;
}, Kb = function(t, r, n) {
  var i = t.scale, a = t.type, o = t.layout, u = t.axisType;
  if (i === "auto")
    return o === "radial" && u === "radiusAxis" ? {
      scale: Xr(),
      realScaleType: "band"
    } : o === "radial" && u === "angleAxis" ? {
      scale: ni(),
      realScaleType: "linear"
    } : a === "category" && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !n) ? {
      scale: kr(),
      realScaleType: "point"
    } : a === "category" ? {
      scale: Xr(),
      realScaleType: "band"
    } : {
      scale: ni(),
      realScaleType: "linear"
    };
  if (Bt(i)) {
    var s = "scale".concat(qi(i));
    return {
      scale: (zv[s] || kr)(),
      realScaleType: zv[s] ? s : "point"
    };
  }
  return J(i) ? {
    scale: i
  } : {
    scale: kr(),
    realScaleType: "point"
  };
}, oy = 1e-4, Xb = function(t) {
  var r = t.domain();
  if (!(!r || r.length <= 2)) {
    var n = r.length, i = t.range(), a = Math.min(i[0], i[1]) - oy, o = Math.max(i[0], i[1]) + oy, u = t(r[0]), s = t(r[n - 1]);
    (u < a || u > o || s < a || s > o) && t.domain([r[0], r[n - 1]]);
  }
}, ET = function(t, r) {
  if (!t)
    return null;
  for (var n = 0, i = t.length; n < i; n++)
    if (t[n].item === r)
      return t[n].position;
  return null;
}, jT = function(t, r) {
  if (!r || r.length !== 2 || !B(r[0]) || !B(r[1]))
    return t;
  var n = Math.min(r[0], r[1]), i = Math.max(r[0], r[1]), a = [t[0], t[1]];
  return (!B(t[0]) || t[0] < n) && (a[0] = n), (!B(t[1]) || t[1] > i) && (a[1] = i), a[0] > i && (a[0] = i), a[1] < n && (a[1] = n), a;
}, MT = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, i = t[0].length; n < i; ++n)
      for (var a = 0, o = 0, u = 0; u < r; ++u) {
        var s = xn(t[u][n][1]) ? t[u][n][0] : t[u][n][1];
        s >= 0 ? (t[u][n][0] = a, t[u][n][1] = a + s, a = t[u][n][1]) : (t[u][n][0] = o, t[u][n][1] = o + s, o = t[u][n][1]);
      }
}, CT = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, i = t[0].length; n < i; ++n)
      for (var a = 0, o = 0; o < r; ++o) {
        var u = xn(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
        u >= 0 ? (t[o][n][0] = a, t[o][n][1] = a + u, a = t[o][n][1]) : (t[o][n][0] = 0, t[o][n][1] = 0);
      }
}, IT = {
  sign: MT,
  // @ts-expect-error definitelytyped types are incorrect
  expand: Lx,
  // @ts-expect-error definitelytyped types are incorrect
  none: rr,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: Bx,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: Fx,
  positive: CT
}, $T = function(t, r, n) {
  var i = r.map(function(u) {
    return u.props.dataKey;
  }), a = IT[n], o = kx().keys(i).value(function(u, s) {
    return +Xe(u, s, 0);
  }).order(wc).offset(a);
  return o(t);
}, RT = function(t, r, n, i, a, o) {
  if (!t)
    return null;
  var u = o ? r.reverse() : r, s = {}, c = u.reduce(function(l, h) {
    var d, g = (d = h.type) !== null && d !== void 0 && d.defaultProps ? he(he({}, h.type.defaultProps), h.props) : h.props, v = g.stackId, p = g.hide;
    if (p)
      return l;
    var m = g[n], w = l[m] || {
      hasStack: !1,
      stackGroups: {}
    };
    if (xe(v)) {
      var x = w.stackGroups[v] || {
        numericAxisId: n,
        cateAxisId: i,
        items: []
      };
      x.items.push(h), w.hasStack = !0, w.stackGroups[v] = x;
    } else
      w.stackGroups[Ni("_stackId_")] = {
        numericAxisId: n,
        cateAxisId: i,
        items: [h]
      };
    return he(he({}, l), {}, tr({}, m, w));
  }, s), f = {};
  return Object.keys(c).reduce(function(l, h) {
    var d = c[h];
    if (d.hasStack) {
      var g = {};
      d.stackGroups = Object.keys(d.stackGroups).reduce(function(v, p) {
        var m = d.stackGroups[p];
        return he(he({}, v), {}, tr({}, p, {
          numericAxisId: n,
          cateAxisId: i,
          items: m.items,
          stackedData: $T(t, m.items, a)
        }));
      }, g);
    }
    return he(he({}, l), {}, tr({}, h, d));
  }, f);
}, Vb = function(t, r) {
  var n = r.realScaleType, i = r.type, a = r.tickCount, o = r.originalDomain, u = r.allowDecimals, s = n || r.scale;
  if (s !== "auto" && s !== "linear")
    return null;
  if (a && i === "number" && o && (o[0] === "auto" || o[1] === "auto")) {
    var c = t.domain();
    if (!c.length)
      return null;
    var f = XP(c, a, u);
    return t.domain([Ji(f), Zi(f)]), {
      niceTicks: f
    };
  }
  if (a && i === "number") {
    var l = t.domain(), h = VP(l, a, u);
    return {
      niceTicks: h
    };
  }
  return null;
};
function CR(e) {
  var t = e.axis, r = e.ticks, n = e.bandSize, i = e.entry, a = e.index, o = e.dataKey;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !V(i[t.dataKey])) {
      var u = Fn(r, "value", i[t.dataKey]);
      if (u)
        return u.coordinate + n / 2;
    }
    return r[a] ? r[a].coordinate + n / 2 : null;
  }
  var s = Xe(i, V(o) ? t.dataKey : o);
  return V(s) ? null : t.scale(s);
}
var uy = function(t) {
  var r = t.axis, n = t.ticks, i = t.offset, a = t.bandSize, o = t.entry, u = t.index;
  if (r.type === "category")
    return n[u] ? n[u].coordinate + i : null;
  var s = Xe(o, r.dataKey, r.domain[u]);
  return V(s) ? null : r.scale(s) - a / 2 + i;
}, DT = function(t) {
  var r = t.numericAxis, n = r.scale.domain();
  if (r.type === "number") {
    var i = Math.min(n[0], n[1]), a = Math.max(n[0], n[1]);
    return i <= 0 && a >= 0 ? 0 : a < 0 ? a : i;
  }
  return n[0];
}, NT = function(t, r) {
  var n, i = (n = t.type) !== null && n !== void 0 && n.defaultProps ? he(he({}, t.type.defaultProps), t.props) : t.props, a = i.stackId;
  if (xe(a)) {
    var o = r[a];
    if (o) {
      var u = o.items.indexOf(t);
      return u >= 0 ? o.stackedData[u] : null;
    }
  }
  return null;
}, qT = function(t) {
  return t.reduce(function(r, n) {
    return [Ji(n.concat([r[0]]).filter(B)), Zi(n.concat([r[1]]).filter(B))];
  }, [1 / 0, -1 / 0]);
}, Yb = function(t, r, n) {
  return Object.keys(t).reduce(function(i, a) {
    var o = t[a], u = o.stackedData, s = u.reduce(function(c, f) {
      var l = qT(f.slice(r, n + 1));
      return [Math.min(c[0], l[0]), Math.max(c[1], l[1])];
    }, [1 / 0, -1 / 0]);
    return [Math.min(s[0], i[0]), Math.max(s[1], i[1])];
  }, [1 / 0, -1 / 0]).map(function(i) {
    return i === 1 / 0 || i === -1 / 0 ? 0 : i;
  });
}, sy = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, cy = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, zc = function(t, r, n) {
  if (J(t))
    return t(r, n);
  if (!Array.isArray(t))
    return r;
  var i = [];
  if (B(t[0]))
    i[0] = n ? t[0] : Math.min(t[0], r[0]);
  else if (sy.test(t[0])) {
    var a = +sy.exec(t[0])[1];
    i[0] = r[0] - a;
  } else J(t[0]) ? i[0] = t[0](r[0]) : i[0] = r[0];
  if (B(t[1]))
    i[1] = n ? t[1] : Math.max(t[1], r[1]);
  else if (cy.test(t[1])) {
    var o = +cy.exec(t[1])[1];
    i[1] = r[1] + o;
  } else J(t[1]) ? i[1] = t[1](r[1]) : i[1] = r[1];
  return i;
}, li = function(t, r, n) {
  if (t && t.scale && t.scale.bandwidth) {
    var i = t.scale.bandwidth();
    if (!n || i > 0)
      return i;
  }
  if (t && r && r.length >= 2) {
    for (var a = zl(r, function(l) {
      return l.coordinate;
    }), o = 1 / 0, u = 1, s = a.length; u < s; u++) {
      var c = a[u], f = a[u - 1];
      o = Math.min((c.coordinate || 0) - (f.coordinate || 0), o);
    }
    return o === 1 / 0 ? 0 : o;
  }
  return n ? void 0 : 0;
}, ly = function(t, r, n) {
  return !t || !t.length || pf(t, Qe(n, "type.defaultProps.domain")) ? r : t;
}, Zb = function(t, r) {
  var n = t.type.defaultProps ? he(he({}, t.type.defaultProps), t.props) : t.props, i = n.dataKey, a = n.name, o = n.unit, u = n.formatter, s = n.tooltipType, c = n.chartType, f = n.hide;
  return he(he({}, ce(t, !1)), {}, {
    dataKey: i,
    unit: o,
    formatter: u,
    name: a || i,
    color: yf(t),
    value: Xe(r, i),
    type: s,
    payload: r,
    chartType: c,
    hide: f
  });
};
function en(e) {
  "@babel/helpers - typeof";
  return en = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, en(e);
}
function fy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function at(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fy(Object(r), !0).forEach(function(n) {
      Jb(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Jb(e, t, r) {
  return t = kT(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function kT(e) {
  var t = LT(e, "string");
  return en(t) == "symbol" ? t : t + "";
}
function LT(e, t) {
  if (en(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (en(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function BT(e, t) {
  return zT(e) || WT(e, t) || UT(e, t) || FT();
}
function FT() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function UT(e, t) {
  if (e) {
    if (typeof e == "string") return hy(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return hy(e, t);
  }
}
function hy(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function WT(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], s = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, i = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function zT(e) {
  if (Array.isArray(e)) return e;
}
var fi = Math.PI / 180, HT = function(t) {
  return t * 180 / Math.PI;
}, Pe = function(t, r, n, i) {
  return {
    x: t + Math.cos(-fi * i) * n,
    y: r + Math.sin(-fi * i) * n
  };
}, GT = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  return Math.min(Math.abs(t - (n.left || 0) - (n.right || 0)), Math.abs(r - (n.top || 0) - (n.bottom || 0))) / 2;
}, IR = function(t, r, n, i, a) {
  var o = t.width, u = t.height, s = t.startAngle, c = t.endAngle, f = He(t.cx, o, o / 2), l = He(t.cy, u, u / 2), h = GT(o, u, n), d = He(t.innerRadius, h, 0), g = He(t.outerRadius, h, h * 0.8), v = Object.keys(r);
  return v.reduce(function(p, m) {
    var w = r[m], x = w.domain, _ = w.reversed, y;
    if (V(w.range))
      i === "angleAxis" ? y = [s, c] : i === "radiusAxis" && (y = [d, g]), _ && (y = [y[1], y[0]]);
    else {
      y = w.range;
      var b = y, O = BT(b, 2);
      s = O[0], c = O[1];
    }
    var S = Kb(w, a), A = S.realScaleType, C = S.scale;
    C.domain(x).range(y), Xb(C);
    var T = Vb(C, at(at({}, w), {}, {
      realScaleType: A
    })), P = at(at(at({}, w), T), {}, {
      range: y,
      radius: g,
      realScaleType: A,
      scale: C,
      cx: f,
      cy: l,
      innerRadius: d,
      outerRadius: g,
      startAngle: s,
      endAngle: c
    });
    return at(at({}, p), {}, Jb({}, m, P));
  }, {});
}, KT = function(t, r) {
  var n = t.x, i = t.y, a = r.x, o = r.y;
  return Math.sqrt(Math.pow(n - a, 2) + Math.pow(i - o, 2));
}, XT = function(t, r) {
  var n = t.x, i = t.y, a = r.cx, o = r.cy, u = KT({
    x: n,
    y: i
  }, {
    x: a,
    y: o
  });
  if (u <= 0)
    return {
      radius: u
    };
  var s = (n - a) / u, c = Math.acos(s);
  return i > o && (c = 2 * Math.PI - c), {
    radius: u,
    angle: HT(c),
    angleInRadian: c
  };
}, VT = function(t) {
  var r = t.startAngle, n = t.endAngle, i = Math.floor(r / 360), a = Math.floor(n / 360), o = Math.min(i, a);
  return {
    startAngle: r - o * 360,
    endAngle: n - o * 360
  };
}, YT = function(t, r) {
  var n = r.startAngle, i = r.endAngle, a = Math.floor(n / 360), o = Math.floor(i / 360), u = Math.min(a, o);
  return t + u * 360;
}, py = function(t, r) {
  var n = t.x, i = t.y, a = XT({
    x: n,
    y: i
  }, r), o = a.radius, u = a.angle, s = r.innerRadius, c = r.outerRadius;
  if (o < s || o > c)
    return !1;
  if (o === 0)
    return !0;
  var f = VT(r), l = f.startAngle, h = f.endAngle, d = u, g;
  if (l <= h) {
    for (; d > h; )
      d -= 360;
    for (; d < l; )
      d += 360;
    g = d >= l && d <= h;
  } else {
    for (; d > l; )
      d -= 360;
    for (; d < h; )
      d += 360;
    g = d >= h && d <= l;
  }
  return g ? at(at({}, r), {}, {
    radius: o,
    angle: YT(d, r)
  }) : null;
}, $R = function(t) {
  return !/* @__PURE__ */ Ge(t) && !J(t) && typeof t != "boolean" ? t.className : "";
};
function tn(e) {
  "@babel/helpers - typeof";
  return tn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, tn(e);
}
var ZT = ["offset"];
function JT(e) {
  return rE(e) || tE(e) || eE(e) || QT();
}
function QT() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function eE(e, t) {
  if (e) {
    if (typeof e == "string") return Hc(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Hc(e, t);
  }
}
function tE(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function rE(e) {
  if (Array.isArray(e)) return Hc(e);
}
function Hc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function nE(e, t) {
  if (e == null) return {};
  var r = iE(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function iE(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function dy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function me(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dy(Object(r), !0).forEach(function(n) {
      aE(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function aE(e, t, r) {
  return t = oE(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function oE(e) {
  var t = uE(e, "string");
  return tn(t) == "symbol" ? t : t + "";
}
function uE(e, t) {
  if (tn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (tn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function rn() {
  return rn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, rn.apply(this, arguments);
}
var sE = function(t) {
  var r = t.value, n = t.formatter, i = V(t.children) ? r : t.children;
  return J(n) ? n(i) : i;
}, cE = function(t, r) {
  var n = Ze(r - t), i = Math.min(Math.abs(r - t), 360);
  return n * i;
}, lE = function(t, r, n) {
  var i = t.position, a = t.viewBox, o = t.offset, u = t.className, s = a, c = s.cx, f = s.cy, l = s.innerRadius, h = s.outerRadius, d = s.startAngle, g = s.endAngle, v = s.clockWise, p = (l + h) / 2, m = cE(d, g), w = m >= 0 ? 1 : -1, x, _;
  i === "insideStart" ? (x = d + w * o, _ = v) : i === "insideEnd" ? (x = g - w * o, _ = !v) : i === "end" && (x = g + w * o, _ = v), _ = m <= 0 ? _ : !_;
  var y = Pe(c, f, p, x), b = Pe(c, f, p, x + (_ ? 1 : -1) * 359), O = "M".concat(y.x, ",").concat(y.y, `
    A`).concat(p, ",").concat(p, ",0,1,").concat(_ ? 0 : 1, `,
    `).concat(b.x, ",").concat(b.y), S = V(t.id) ? Ni("recharts-radial-line-") : t.id;
  return /* @__PURE__ */ E.createElement("text", rn({}, n, {
    dominantBaseline: "central",
    className: se("recharts-radial-bar-label", u)
  }), /* @__PURE__ */ E.createElement("defs", null, /* @__PURE__ */ E.createElement("path", {
    id: S,
    d: O
  })), /* @__PURE__ */ E.createElement("textPath", {
    xlinkHref: "#".concat(S)
  }, r));
}, fE = function(t) {
  var r = t.viewBox, n = t.offset, i = t.position, a = r, o = a.cx, u = a.cy, s = a.innerRadius, c = a.outerRadius, f = a.startAngle, l = a.endAngle, h = (f + l) / 2;
  if (i === "outside") {
    var d = Pe(o, u, c + n, h), g = d.x, v = d.y;
    return {
      x: g,
      y: v,
      textAnchor: g >= o ? "start" : "end",
      verticalAnchor: "middle"
    };
  }
  if (i === "center")
    return {
      x: o,
      y: u,
      textAnchor: "middle",
      verticalAnchor: "middle"
    };
  if (i === "centerTop")
    return {
      x: o,
      y: u,
      textAnchor: "middle",
      verticalAnchor: "start"
    };
  if (i === "centerBottom")
    return {
      x: o,
      y: u,
      textAnchor: "middle",
      verticalAnchor: "end"
    };
  var p = (s + c) / 2, m = Pe(o, u, p, h), w = m.x, x = m.y;
  return {
    x: w,
    y: x,
    textAnchor: "middle",
    verticalAnchor: "middle"
  };
}, hE = function(t) {
  var r = t.viewBox, n = t.parentViewBox, i = t.offset, a = t.position, o = r, u = o.x, s = o.y, c = o.width, f = o.height, l = f >= 0 ? 1 : -1, h = l * i, d = l > 0 ? "end" : "start", g = l > 0 ? "start" : "end", v = c >= 0 ? 1 : -1, p = v * i, m = v > 0 ? "end" : "start", w = v > 0 ? "start" : "end";
  if (a === "top") {
    var x = {
      x: u + c / 2,
      y: s - l * i,
      textAnchor: "middle",
      verticalAnchor: d
    };
    return me(me({}, x), n ? {
      height: Math.max(s - n.y, 0),
      width: c
    } : {});
  }
  if (a === "bottom") {
    var _ = {
      x: u + c / 2,
      y: s + f + h,
      textAnchor: "middle",
      verticalAnchor: g
    };
    return me(me({}, _), n ? {
      height: Math.max(n.y + n.height - (s + f), 0),
      width: c
    } : {});
  }
  if (a === "left") {
    var y = {
      x: u - p,
      y: s + f / 2,
      textAnchor: m,
      verticalAnchor: "middle"
    };
    return me(me({}, y), n ? {
      width: Math.max(y.x - n.x, 0),
      height: f
    } : {});
  }
  if (a === "right") {
    var b = {
      x: u + c + p,
      y: s + f / 2,
      textAnchor: w,
      verticalAnchor: "middle"
    };
    return me(me({}, b), n ? {
      width: Math.max(n.x + n.width - b.x, 0),
      height: f
    } : {});
  }
  var O = n ? {
    width: c,
    height: f
  } : {};
  return a === "insideLeft" ? me({
    x: u + p,
    y: s + f / 2,
    textAnchor: w,
    verticalAnchor: "middle"
  }, O) : a === "insideRight" ? me({
    x: u + c - p,
    y: s + f / 2,
    textAnchor: m,
    verticalAnchor: "middle"
  }, O) : a === "insideTop" ? me({
    x: u + c / 2,
    y: s + h,
    textAnchor: "middle",
    verticalAnchor: g
  }, O) : a === "insideBottom" ? me({
    x: u + c / 2,
    y: s + f - h,
    textAnchor: "middle",
    verticalAnchor: d
  }, O) : a === "insideTopLeft" ? me({
    x: u + p,
    y: s + h,
    textAnchor: w,
    verticalAnchor: g
  }, O) : a === "insideTopRight" ? me({
    x: u + c - p,
    y: s + h,
    textAnchor: m,
    verticalAnchor: g
  }, O) : a === "insideBottomLeft" ? me({
    x: u + p,
    y: s + f - h,
    textAnchor: w,
    verticalAnchor: d
  }, O) : a === "insideBottomRight" ? me({
    x: u + c - p,
    y: s + f - h,
    textAnchor: m,
    verticalAnchor: d
  }, O) : xr(a) && (B(a.x) || Rt(a.x)) && (B(a.y) || Rt(a.y)) ? me({
    x: u + He(a.x, c),
    y: s + He(a.y, f),
    textAnchor: "end",
    verticalAnchor: "end"
  }, O) : me({
    x: u + c / 2,
    y: s + f / 2,
    textAnchor: "middle",
    verticalAnchor: "middle"
  }, O);
}, pE = function(t) {
  return "cx" in t && B(t.cx);
};
function Ee(e) {
  var t = e.offset, r = t === void 0 ? 5 : t, n = nE(e, ZT), i = me({
    offset: r
  }, n), a = i.viewBox, o = i.position, u = i.value, s = i.children, c = i.content, f = i.className, l = f === void 0 ? "" : f, h = i.textBreakAll;
  if (!a || V(u) && V(s) && !/* @__PURE__ */ Ge(c) && !J(c))
    return null;
  if (/* @__PURE__ */ Ge(c))
    return /* @__PURE__ */ be(c, i);
  var d;
  if (J(c)) {
    if (d = /* @__PURE__ */ ji(c, i), /* @__PURE__ */ Ge(d))
      return d;
  } else
    d = sE(i);
  var g = pE(a), v = ce(i, !0);
  if (g && (o === "insideStart" || o === "insideEnd" || o === "end"))
    return lE(i, d, v);
  var p = g ? fE(i) : hE(i);
  return /* @__PURE__ */ E.createElement(Cc, rn({
    className: se("recharts-label", l)
  }, v, p, {
    breakAll: h
  }), d);
}
Ee.displayName = "Label";
var Qb = function(t) {
  var r = t.cx, n = t.cy, i = t.angle, a = t.startAngle, o = t.endAngle, u = t.r, s = t.radius, c = t.innerRadius, f = t.outerRadius, l = t.x, h = t.y, d = t.top, g = t.left, v = t.width, p = t.height, m = t.clockWise, w = t.labelViewBox;
  if (w)
    return w;
  if (B(v) && B(p)) {
    if (B(l) && B(h))
      return {
        x: l,
        y: h,
        width: v,
        height: p
      };
    if (B(d) && B(g))
      return {
        x: d,
        y: g,
        width: v,
        height: p
      };
  }
  return B(l) && B(h) ? {
    x: l,
    y: h,
    width: 0,
    height: 0
  } : B(r) && B(n) ? {
    cx: r,
    cy: n,
    startAngle: a || i || 0,
    endAngle: o || i || 0,
    innerRadius: c || 0,
    outerRadius: f || s || u || 0,
    clockWise: m
  } : t.viewBox ? t.viewBox : {};
}, dE = function(t, r) {
  return t ? t === !0 ? /* @__PURE__ */ E.createElement(Ee, {
    key: "label-implicit",
    viewBox: r
  }) : xe(t) ? /* @__PURE__ */ E.createElement(Ee, {
    key: "label-implicit",
    viewBox: r,
    value: t
  }) : /* @__PURE__ */ Ge(t) ? t.type === Ee ? /* @__PURE__ */ be(t, {
    key: "label-implicit",
    viewBox: r
  }) : /* @__PURE__ */ E.createElement(Ee, {
    key: "label-implicit",
    content: t,
    viewBox: r
  }) : J(t) ? /* @__PURE__ */ E.createElement(Ee, {
    key: "label-implicit",
    content: t,
    viewBox: r
  }) : xr(t) ? /* @__PURE__ */ E.createElement(Ee, rn({
    viewBox: r
  }, t, {
    key: "label-implicit"
  })) : null : null;
}, vE = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!t || !t.children && n && !t.label)
    return null;
  var i = t.children, a = Qb(t), o = Ke(i, Ee).map(function(s, c) {
    return /* @__PURE__ */ be(s, {
      viewBox: r || a,
      // eslint-disable-next-line react/no-array-index-key
      key: "label-".concat(c)
    });
  });
  if (!n)
    return o;
  var u = dE(t.label, r || a);
  return [u].concat(JT(o));
};
Ee.parseViewBox = Qb;
Ee.renderCallByParent = vE;
var Rs, vy;
function yE() {
  if (vy) return Rs;
  vy = 1;
  function e(t) {
    var r = t == null ? 0 : t.length;
    return r ? t[r - 1] : void 0;
  }
  return Rs = e, Rs;
}
var gE = yE();
const mE = /* @__PURE__ */ ae(gE);
function nn(e) {
  "@babel/helpers - typeof";
  return nn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, nn(e);
}
var bE = ["valueAccessor"], wE = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function xE(e) {
  return AE(e) || SE(e) || OE(e) || _E();
}
function _E() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function OE(e, t) {
  if (e) {
    if (typeof e == "string") return Gc(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Gc(e, t);
  }
}
function SE(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function AE(e) {
  if (Array.isArray(e)) return Gc(e);
}
function Gc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function hi() {
  return hi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, hi.apply(this, arguments);
}
function yy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function gy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yy(Object(r), !0).forEach(function(n) {
      PE(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function PE(e, t, r) {
  return t = TE(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function TE(e) {
  var t = EE(e, "string");
  return nn(t) == "symbol" ? t : t + "";
}
function EE(e, t) {
  if (nn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (nn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function my(e, t) {
  if (e == null) return {};
  var r = jE(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function jE(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var ME = function(t) {
  return Array.isArray(t.value) ? mE(t.value) : t.value;
};
function Lt(e) {
  var t = e.valueAccessor, r = t === void 0 ? ME : t, n = my(e, bE), i = n.data, a = n.dataKey, o = n.clockWise, u = n.id, s = n.textBreakAll, c = my(n, wE);
  return !i || !i.length ? null : /* @__PURE__ */ E.createElement(Te, {
    className: "recharts-label-list"
  }, i.map(function(f, l) {
    var h = V(a) ? r(f, l) : Xe(f && f.payload, a), d = V(u) ? {} : {
      id: "".concat(u, "-").concat(l)
    };
    return /* @__PURE__ */ E.createElement(Ee, hi({}, ce(f, !0), c, d, {
      parentViewBox: f.parentViewBox,
      value: h,
      textBreakAll: s,
      viewBox: Ee.parseViewBox(V(o) ? f : gy(gy({}, f), {}, {
        clockWise: o
      })),
      key: "label-".concat(l),
      index: l
    }));
  }));
}
Lt.displayName = "LabelList";
function CE(e, t) {
  return e ? e === !0 ? /* @__PURE__ */ E.createElement(Lt, {
    key: "labelList-implicit",
    data: t
  }) : /* @__PURE__ */ E.isValidElement(e) || J(e) ? /* @__PURE__ */ E.createElement(Lt, {
    key: "labelList-implicit",
    data: t,
    content: e
  }) : xr(e) ? /* @__PURE__ */ E.createElement(Lt, hi({
    data: t
  }, e, {
    key: "labelList-implicit"
  })) : null : null;
}
function IE(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || !e.children && r && !e.label)
    return null;
  var n = e.children, i = Ke(n, Lt).map(function(o, u) {
    return /* @__PURE__ */ be(o, {
      data: t,
      // eslint-disable-next-line react/no-array-index-key
      key: "labelList-".concat(u)
    });
  });
  if (!r)
    return i;
  var a = CE(e.label, t);
  return [a].concat(xE(i));
}
Lt.renderCallByParent = IE;
function an(e) {
  "@babel/helpers - typeof";
  return an = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, an(e);
}
function Kc() {
  return Kc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Kc.apply(this, arguments);
}
function by(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function wy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? by(Object(r), !0).forEach(function(n) {
      $E(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : by(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function $E(e, t, r) {
  return t = RE(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function RE(e) {
  var t = DE(e, "string");
  return an(t) == "symbol" ? t : t + "";
}
function DE(e, t) {
  if (an(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (an(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var NE = function(t, r) {
  var n = Ze(r - t), i = Math.min(Math.abs(r - t), 359.999);
  return n * i;
}, Dn = function(t) {
  var r = t.cx, n = t.cy, i = t.radius, a = t.angle, o = t.sign, u = t.isExternal, s = t.cornerRadius, c = t.cornerIsExternal, f = s * (u ? 1 : -1) + i, l = Math.asin(s / f) / fi, h = c ? a : a + o * l, d = Pe(r, n, f, h), g = Pe(r, n, i, h), v = c ? a - o * l : a, p = Pe(r, n, f * Math.cos(l * fi), v);
  return {
    center: d,
    circleTangency: g,
    lineTangency: p,
    theta: l
  };
}, e0 = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, o = t.startAngle, u = t.endAngle, s = NE(o, u), c = o + s, f = Pe(r, n, a, o), l = Pe(r, n, a, c), h = "M ".concat(f.x, ",").concat(f.y, `
    A `).concat(a, ",").concat(a, `,0,
    `).concat(+(Math.abs(s) > 180), ",").concat(+(o > c), `,
    `).concat(l.x, ",").concat(l.y, `
  `);
  if (i > 0) {
    var d = Pe(r, n, i, o), g = Pe(r, n, i, c);
    h += "L ".concat(g.x, ",").concat(g.y, `
            A `).concat(i, ",").concat(i, `,0,
            `).concat(+(Math.abs(s) > 180), ",").concat(+(o <= c), `,
            `).concat(d.x, ",").concat(d.y, " Z");
  } else
    h += "L ".concat(r, ",").concat(n, " Z");
  return h;
}, qE = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, o = t.cornerRadius, u = t.forceCornerRadius, s = t.cornerIsExternal, c = t.startAngle, f = t.endAngle, l = Ze(f - c), h = Dn({
    cx: r,
    cy: n,
    radius: a,
    angle: c,
    sign: l,
    cornerRadius: o,
    cornerIsExternal: s
  }), d = h.circleTangency, g = h.lineTangency, v = h.theta, p = Dn({
    cx: r,
    cy: n,
    radius: a,
    angle: f,
    sign: -l,
    cornerRadius: o,
    cornerIsExternal: s
  }), m = p.circleTangency, w = p.lineTangency, x = p.theta, _ = s ? Math.abs(c - f) : Math.abs(c - f) - v - x;
  if (_ < 0)
    return u ? "M ".concat(g.x, ",").concat(g.y, `
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(o * 2, `,0
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(-o * 2, `,0
      `) : e0({
      cx: r,
      cy: n,
      innerRadius: i,
      outerRadius: a,
      startAngle: c,
      endAngle: f
    });
  var y = "M ".concat(g.x, ",").concat(g.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(l < 0), ",").concat(d.x, ",").concat(d.y, `
    A`).concat(a, ",").concat(a, ",0,").concat(+(_ > 180), ",").concat(+(l < 0), ",").concat(m.x, ",").concat(m.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(l < 0), ",").concat(w.x, ",").concat(w.y, `
  `);
  if (i > 0) {
    var b = Dn({
      cx: r,
      cy: n,
      radius: i,
      angle: c,
      sign: l,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: s
    }), O = b.circleTangency, S = b.lineTangency, A = b.theta, C = Dn({
      cx: r,
      cy: n,
      radius: i,
      angle: f,
      sign: -l,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: s
    }), T = C.circleTangency, P = C.lineTangency, j = C.theta, I = s ? Math.abs(c - f) : Math.abs(c - f) - A - j;
    if (I < 0 && o === 0)
      return "".concat(y, "L").concat(r, ",").concat(n, "Z");
    y += "L".concat(P.x, ",").concat(P.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(l < 0), ",").concat(T.x, ",").concat(T.y, `
      A`).concat(i, ",").concat(i, ",0,").concat(+(I > 180), ",").concat(+(l > 0), ",").concat(O.x, ",").concat(O.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(l < 0), ",").concat(S.x, ",").concat(S.y, "Z");
  } else
    y += "L".concat(r, ",").concat(n, "Z");
  return y;
}, kE = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: !1,
  cornerIsExternal: !1
}, t0 = function(t) {
  var r = wy(wy({}, kE), t), n = r.cx, i = r.cy, a = r.innerRadius, o = r.outerRadius, u = r.cornerRadius, s = r.forceCornerRadius, c = r.cornerIsExternal, f = r.startAngle, l = r.endAngle, h = r.className;
  if (o < a || f === l)
    return null;
  var d = se("recharts-sector", h), g = o - a, v = He(u, g, 0, !0), p;
  return v > 0 && Math.abs(f - l) < 360 ? p = qE({
    cx: n,
    cy: i,
    innerRadius: a,
    outerRadius: o,
    cornerRadius: Math.min(v, g / 2),
    forceCornerRadius: s,
    cornerIsExternal: c,
    startAngle: f,
    endAngle: l
  }) : p = e0({
    cx: n,
    cy: i,
    innerRadius: a,
    outerRadius: o,
    startAngle: f,
    endAngle: l
  }), /* @__PURE__ */ E.createElement("path", Kc({}, ce(r, !0), {
    className: d,
    d: p,
    role: "img"
  }));
};
function on(e) {
  "@babel/helpers - typeof";
  return on = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, on(e);
}
function Xc() {
  return Xc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Xc.apply(this, arguments);
}
function xy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function _y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xy(Object(r), !0).forEach(function(n) {
      LE(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function LE(e, t, r) {
  return t = BE(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function BE(e) {
  var t = FE(e, "string");
  return on(t) == "symbol" ? t : t + "";
}
function FE(e, t) {
  if (on(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (on(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Oy = {
  curveBasisClosed: Tx,
  curveBasisOpen: Ex,
  curveBasis: Px,
  curveBumpX: hx,
  curveBumpY: px,
  curveLinearClosed: jx,
  curveLinear: Li,
  curveMonotoneX: Mx,
  curveMonotoneY: Cx,
  curveNatural: Ix,
  curveStep: $x,
  curveStepAfter: Dx,
  curveStepBefore: Rx
}, Nn = function(t) {
  return t.x === +t.x && t.y === +t.y;
}, Mr = function(t) {
  return t.x;
}, Cr = function(t) {
  return t.y;
}, UE = function(t, r) {
  if (J(t))
    return t;
  var n = "curve".concat(qi(t));
  return (n === "curveMonotone" || n === "curveBump") && r ? Oy["".concat(n).concat(r === "vertical" ? "Y" : "X")] : Oy[n] || Li;
}, WE = function(t) {
  var r = t.type, n = r === void 0 ? "linear" : r, i = t.points, a = i === void 0 ? [] : i, o = t.baseLine, u = t.layout, s = t.connectNulls, c = s === void 0 ? !1 : s, f = UE(n, u), l = c ? a.filter(function(v) {
    return Nn(v);
  }) : a, h;
  if (Array.isArray(o)) {
    var d = c ? o.filter(function(v) {
      return Nn(v);
    }) : o, g = l.map(function(v, p) {
      return _y(_y({}, v), {}, {
        base: d[p]
      });
    });
    return u === "vertical" ? h = jn().y(Cr).x1(Mr).x0(function(v) {
      return v.base.x;
    }) : h = jn().x(Mr).y1(Cr).y0(function(v) {
      return v.base.y;
    }), h.defined(Nn).curve(f), h(g);
  }
  return u === "vertical" && B(o) ? h = jn().y(Cr).x1(Mr).x0(o) : B(o) ? h = jn().x(Mr).y1(Cr).y0(o) : h = om().x(Mr).y(Cr), h.defined(Nn).curve(f), h(l);
}, Sy = function(t) {
  var r = t.className, n = t.points, i = t.path, a = t.pathRef;
  if ((!n || !n.length) && !i)
    return null;
  var o = n && n.length ? WE(t) : i;
  return /* @__PURE__ */ ji("path", Xc({}, ce(t, !1), Un(t), {
    className: se("recharts-curve", r),
    d: o,
    ref: a
  }));
}, Ds = { exports: {} }, Ns, Ay;
function zE() {
  if (Ay) return Ns;
  Ay = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ns = e, Ns;
}
var qs, Py;
function HE() {
  if (Py) return qs;
  Py = 1;
  var e = /* @__PURE__ */ zE();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, qs = function() {
    function n(o, u, s, c, f, l) {
      if (l !== e) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
      }
    }
    n.isRequired = n;
    function i() {
      return n;
    }
    var a = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: i,
      element: n,
      elementType: n,
      instanceOf: i,
      node: n,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, qs;
}
var Ty;
function GE() {
  return Ty || (Ty = 1, Ds.exports = /* @__PURE__ */ HE()()), Ds.exports;
}
var KE = /* @__PURE__ */ GE();
const te = /* @__PURE__ */ ae(KE), { getOwnPropertyNames: XE, getOwnPropertySymbols: VE } = Object, { hasOwnProperty: YE } = Object.prototype;
function ks(e, t) {
  return function(n, i, a) {
    return e(n, i, a) && t(n, i, a);
  };
}
function qn(e) {
  return function(r, n, i) {
    if (!r || !n || typeof r != "object" || typeof n != "object")
      return e(r, n, i);
    const { cache: a } = i, o = a.get(r), u = a.get(n);
    if (o && u)
      return o === n && u === r;
    a.set(r, n), a.set(n, r);
    const s = e(r, n, i);
    return a.delete(r), a.delete(n), s;
  };
}
function ZE(e) {
  return e?.[Symbol.toStringTag];
}
function Ey(e) {
  return XE(e).concat(VE(e));
}
const JE = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  Object.hasOwn || ((e, t) => YE.call(e, t))
);
function Kt(e, t) {
  return e === t || !e && !t && e !== e && t !== t;
}
const QE = "__v", ej = "__o", tj = "_owner", { getOwnPropertyDescriptor: jy, keys: My } = Object;
function rj(e, t) {
  return e.byteLength === t.byteLength && pi(new Uint8Array(e), new Uint8Array(t));
}
function nj(e, t, r) {
  let n = e.length;
  if (t.length !== n)
    return !1;
  for (; n-- > 0; )
    if (!r.equals(e[n], t[n], n, n, e, t, r))
      return !1;
  return !0;
}
function ij(e, t) {
  return e.byteLength === t.byteLength && pi(new Uint8Array(e.buffer, e.byteOffset, e.byteLength), new Uint8Array(t.buffer, t.byteOffset, t.byteLength));
}
function aj(e, t) {
  return Kt(e.getTime(), t.getTime());
}
function oj(e, t) {
  return e.name === t.name && e.message === t.message && e.cause === t.cause && e.stack === t.stack;
}
function uj(e, t) {
  return e === t;
}
function Cy(e, t, r) {
  const n = e.size;
  if (n !== t.size)
    return !1;
  if (!n)
    return !0;
  const i = new Array(n), a = e.entries();
  let o, u, s = 0;
  for (; (o = a.next()) && !o.done; ) {
    const c = t.entries();
    let f = !1, l = 0;
    for (; (u = c.next()) && !u.done; ) {
      if (i[l]) {
        l++;
        continue;
      }
      const h = o.value, d = u.value;
      if (r.equals(h[0], d[0], s, l, e, t, r) && r.equals(h[1], d[1], h[0], d[0], e, t, r)) {
        f = i[l] = !0;
        break;
      }
      l++;
    }
    if (!f)
      return !1;
    s++;
  }
  return !0;
}
const sj = Kt;
function cj(e, t, r) {
  const n = My(e);
  let i = n.length;
  if (My(t).length !== i)
    return !1;
  for (; i-- > 0; )
    if (!r0(e, t, r, n[i]))
      return !1;
  return !0;
}
function Ir(e, t, r) {
  const n = Ey(e);
  let i = n.length;
  if (Ey(t).length !== i)
    return !1;
  let a, o, u;
  for (; i-- > 0; )
    if (a = n[i], !r0(e, t, r, a) || (o = jy(e, a), u = jy(t, a), (o || u) && (!o || !u || o.configurable !== u.configurable || o.enumerable !== u.enumerable || o.writable !== u.writable)))
      return !1;
  return !0;
}
function lj(e, t) {
  return Kt(e.valueOf(), t.valueOf());
}
function fj(e, t) {
  return e.source === t.source && e.flags === t.flags;
}
function Iy(e, t, r) {
  const n = e.size;
  if (n !== t.size)
    return !1;
  if (!n)
    return !0;
  const i = new Array(n), a = e.values();
  let o, u;
  for (; (o = a.next()) && !o.done; ) {
    const s = t.values();
    let c = !1, f = 0;
    for (; (u = s.next()) && !u.done; ) {
      if (!i[f] && r.equals(o.value, u.value, o.value, u.value, e, t, r)) {
        c = i[f] = !0;
        break;
      }
      f++;
    }
    if (!c)
      return !1;
  }
  return !0;
}
function pi(e, t) {
  let r = e.byteLength;
  if (t.byteLength !== r || e.byteOffset !== t.byteOffset)
    return !1;
  for (; r-- > 0; )
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function hj(e, t) {
  return e.hostname === t.hostname && e.pathname === t.pathname && e.protocol === t.protocol && e.port === t.port && e.hash === t.hash && e.username === t.username && e.password === t.password;
}
function r0(e, t, r, n) {
  return (n === tj || n === ej || n === QE) && (e.$$typeof || t.$$typeof) ? !0 : JE(t, n) && r.equals(e[n], t[n], n, n, e, t, r);
}
const pj = "[object ArrayBuffer]", dj = "[object Arguments]", vj = "[object Boolean]", yj = "[object DataView]", gj = "[object Date]", mj = "[object Error]", bj = "[object Map]", wj = "[object Number]", xj = "[object Object]", _j = "[object RegExp]", Oj = "[object Set]", Sj = "[object String]", Aj = {
  "[object Int8Array]": !0,
  "[object Uint8Array]": !0,
  "[object Uint8ClampedArray]": !0,
  "[object Int16Array]": !0,
  "[object Uint16Array]": !0,
  "[object Int32Array]": !0,
  "[object Uint32Array]": !0,
  "[object Float16Array]": !0,
  "[object Float32Array]": !0,
  "[object Float64Array]": !0,
  "[object BigInt64Array]": !0,
  "[object BigUint64Array]": !0
}, Pj = "[object URL]", Tj = Object.prototype.toString;
function Ej({ areArrayBuffersEqual: e, areArraysEqual: t, areDataViewsEqual: r, areDatesEqual: n, areErrorsEqual: i, areFunctionsEqual: a, areMapsEqual: o, areNumbersEqual: u, areObjectsEqual: s, arePrimitiveWrappersEqual: c, areRegExpsEqual: f, areSetsEqual: l, areTypedArraysEqual: h, areUrlsEqual: d, unknownTagComparators: g }) {
  return function(p, m, w) {
    if (p === m)
      return !0;
    if (p == null || m == null)
      return !1;
    const x = typeof p;
    if (x !== typeof m)
      return !1;
    if (x !== "object")
      return x === "number" ? u(p, m, w) : x === "function" ? a(p, m, w) : !1;
    const _ = p.constructor;
    if (_ !== m.constructor)
      return !1;
    if (_ === Object)
      return s(p, m, w);
    if (Array.isArray(p))
      return t(p, m, w);
    if (_ === Date)
      return n(p, m, w);
    if (_ === RegExp)
      return f(p, m, w);
    if (_ === Map)
      return o(p, m, w);
    if (_ === Set)
      return l(p, m, w);
    const y = Tj.call(p);
    if (y === gj)
      return n(p, m, w);
    if (y === _j)
      return f(p, m, w);
    if (y === bj)
      return o(p, m, w);
    if (y === Oj)
      return l(p, m, w);
    if (y === xj)
      return typeof p.then != "function" && typeof m.then != "function" && s(p, m, w);
    if (y === Pj)
      return d(p, m, w);
    if (y === mj)
      return i(p, m, w);
    if (y === dj)
      return s(p, m, w);
    if (Aj[y])
      return h(p, m, w);
    if (y === pj)
      return e(p, m, w);
    if (y === yj)
      return r(p, m, w);
    if (y === vj || y === wj || y === Sj)
      return c(p, m, w);
    if (g) {
      let b = g[y];
      if (!b) {
        const O = ZE(p);
        O && (b = g[O]);
      }
      if (b)
        return b(p, m, w);
    }
    return !1;
  };
}
function jj({ circular: e, createCustomConfig: t, strict: r }) {
  let n = {
    areArrayBuffersEqual: rj,
    areArraysEqual: r ? Ir : nj,
    areDataViewsEqual: ij,
    areDatesEqual: aj,
    areErrorsEqual: oj,
    areFunctionsEqual: uj,
    areMapsEqual: r ? ks(Cy, Ir) : Cy,
    areNumbersEqual: sj,
    areObjectsEqual: r ? Ir : cj,
    arePrimitiveWrappersEqual: lj,
    areRegExpsEqual: fj,
    areSetsEqual: r ? ks(Iy, Ir) : Iy,
    areTypedArraysEqual: r ? ks(pi, Ir) : pi,
    areUrlsEqual: hj,
    unknownTagComparators: void 0
  };
  if (t && (n = Object.assign({}, n, t(n))), e) {
    const i = qn(n.areArraysEqual), a = qn(n.areMapsEqual), o = qn(n.areObjectsEqual), u = qn(n.areSetsEqual);
    n = Object.assign({}, n, {
      areArraysEqual: i,
      areMapsEqual: a,
      areObjectsEqual: o,
      areSetsEqual: u
    });
  }
  return n;
}
function Mj(e) {
  return function(t, r, n, i, a, o, u) {
    return e(t, r, u);
  };
}
function Cj({ circular: e, comparator: t, createState: r, equals: n, strict: i }) {
  if (r)
    return function(u, s) {
      const { cache: c = e ? /* @__PURE__ */ new WeakMap() : void 0, meta: f } = r();
      return t(u, s, {
        cache: c,
        equals: n,
        meta: f,
        strict: i
      });
    };
  if (e)
    return function(u, s) {
      return t(u, s, {
        cache: /* @__PURE__ */ new WeakMap(),
        equals: n,
        meta: void 0,
        strict: i
      });
    };
  const a = {
    cache: void 0,
    equals: n,
    meta: void 0,
    strict: i
  };
  return function(u, s) {
    return t(u, s, a);
  };
}
const Ij = Tt();
Tt({ strict: !0 });
Tt({ circular: !0 });
Tt({
  circular: !0,
  strict: !0
});
Tt({
  createInternalComparator: () => Kt
});
Tt({
  strict: !0,
  createInternalComparator: () => Kt
});
Tt({
  circular: !0,
  createInternalComparator: () => Kt
});
Tt({
  circular: !0,
  createInternalComparator: () => Kt,
  strict: !0
});
function Tt(e = {}) {
  const { circular: t = !1, createInternalComparator: r, createState: n, strict: i = !1 } = e, a = jj(e), o = Ej(a), u = r ? r(o) : Mj(o);
  return Cj({ circular: t, comparator: o, createState: n, equals: u, strict: i });
}
function $j(e) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(e);
}
function $y(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = -1, n = function i(a) {
    r < 0 && (r = a), a - r > t ? (e(a), r = -1) : $j(i);
  };
  requestAnimationFrame(n);
}
function Vc(e) {
  "@babel/helpers - typeof";
  return Vc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Vc(e);
}
function Rj(e) {
  return kj(e) || qj(e) || Nj(e) || Dj();
}
function Dj() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Nj(e, t) {
  if (e) {
    if (typeof e == "string") return Ry(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ry(e, t);
  }
}
function Ry(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function qj(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function kj(e) {
  if (Array.isArray(e)) return e;
}
function Lj() {
  var e = {}, t = function() {
    return null;
  }, r = !1, n = function i(a) {
    if (!r) {
      if (Array.isArray(a)) {
        if (!a.length)
          return;
        var o = a, u = Rj(o), s = u[0], c = u.slice(1);
        if (typeof s == "number") {
          $y(i.bind(null, c), s);
          return;
        }
        i(s), $y(i.bind(null, c));
        return;
      }
      Vc(a) === "object" && (e = a, t(e)), typeof a == "function" && a();
    }
  };
  return {
    stop: function() {
      r = !0;
    },
    start: function(a) {
      r = !1, n(a);
    },
    subscribe: function(a) {
      return t = a, function() {
        t = function() {
          return null;
        };
      };
    }
  };
}
function un(e) {
  "@babel/helpers - typeof";
  return un = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, un(e);
}
function Dy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ny(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Dy(Object(r), !0).forEach(function(n) {
      n0(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Dy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function n0(e, t, r) {
  return t = Bj(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Bj(e) {
  var t = Fj(e, "string");
  return un(t) === "symbol" ? t : String(t);
}
function Fj(e, t) {
  if (un(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (un(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Uj = function(t, r) {
  return [Object.keys(t), Object.keys(r)].reduce(function(n, i) {
    return n.filter(function(a) {
      return i.includes(a);
    });
  });
}, Wj = function(t) {
  return t;
}, zj = function(t) {
  return t.replace(/([A-Z])/g, function(r) {
    return "-".concat(r.toLowerCase());
  });
}, Br = function(t, r) {
  return Object.keys(r).reduce(function(n, i) {
    return Ny(Ny({}, n), {}, n0({}, i, t(i, r[i])));
  }, {});
}, qy = function(t, r, n) {
  return t.map(function(i) {
    return "".concat(zj(i), " ").concat(r, "ms ").concat(n);
  }).join(",");
};
function Hj(e, t) {
  return Xj(e) || Kj(e, t) || i0(e, t) || Gj();
}
function Gj() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Kj(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], s = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, i = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function Xj(e) {
  if (Array.isArray(e)) return e;
}
function Vj(e) {
  return Jj(e) || Zj(e) || i0(e) || Yj();
}
function Yj() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function i0(e, t) {
  if (e) {
    if (typeof e == "string") return Yc(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Yc(e, t);
  }
}
function Zj(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Jj(e) {
  if (Array.isArray(e)) return Yc(e);
}
function Yc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var di = 1e-4, a0 = function(t, r) {
  return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1];
}, o0 = function(t, r) {
  return t.map(function(n, i) {
    return n * Math.pow(r, i);
  }).reduce(function(n, i) {
    return n + i;
  });
}, ky = function(t, r) {
  return function(n) {
    var i = a0(t, r);
    return o0(i, n);
  };
}, Qj = function(t, r) {
  return function(n) {
    var i = a0(t, r), a = [].concat(Vj(i.map(function(o, u) {
      return o * u;
    }).slice(1)), [0]);
    return o0(a, n);
  };
}, Ly = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var i = r[0], a = r[1], o = r[2], u = r[3];
  if (r.length === 1)
    switch (r[0]) {
      case "linear":
        i = 0, a = 0, o = 1, u = 1;
        break;
      case "ease":
        i = 0.25, a = 0.1, o = 0.25, u = 1;
        break;
      case "ease-in":
        i = 0.42, a = 0, o = 1, u = 1;
        break;
      case "ease-out":
        i = 0.42, a = 0, o = 0.58, u = 1;
        break;
      case "ease-in-out":
        i = 0, a = 0, o = 0.58, u = 1;
        break;
      default: {
        var s = r[0].split("(");
        if (s[0] === "cubic-bezier" && s[1].split(")")[0].split(",").length === 4) {
          var c = s[1].split(")")[0].split(",").map(function(p) {
            return parseFloat(p);
          }), f = Hj(c, 4);
          i = f[0], a = f[1], o = f[2], u = f[3];
        }
      }
    }
  var l = ky(i, o), h = ky(a, u), d = Qj(i, o), g = function(m) {
    return m > 1 ? 1 : m < 0 ? 0 : m;
  }, v = function(m) {
    for (var w = m > 1 ? 1 : m, x = w, _ = 0; _ < 8; ++_) {
      var y = l(x) - w, b = d(x);
      if (Math.abs(y - w) < di || b < di)
        return h(x);
      x = g(x - y / b);
    }
    return h(x);
  };
  return v.isStepper = !1, v;
}, eM = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.stiff, n = r === void 0 ? 100 : r, i = t.damping, a = i === void 0 ? 8 : i, o = t.dt, u = o === void 0 ? 17 : o, s = function(f, l, h) {
    var d = -(f - l) * n, g = h * a, v = h + (d - g) * u / 1e3, p = h * u / 1e3 + f;
    return Math.abs(p - l) < di && Math.abs(v) < di ? [l, 0] : [p, v];
  };
  return s.isStepper = !0, s.dt = u, s;
}, tM = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var i = r[0];
  if (typeof i == "string")
    switch (i) {
      case "ease":
      case "ease-in-out":
      case "ease-out":
      case "ease-in":
      case "linear":
        return Ly(i);
      case "spring":
        return eM();
      default:
        if (i.split("(")[0] === "cubic-bezier")
          return Ly(i);
    }
  return typeof i == "function" ? i : null;
};
function sn(e) {
  "@babel/helpers - typeof";
  return sn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, sn(e);
}
function By(e) {
  return iM(e) || nM(e) || u0(e) || rM();
}
function rM() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nM(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function iM(e) {
  if (Array.isArray(e)) return Jc(e);
}
function Fy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ae(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fy(Object(r), !0).forEach(function(n) {
      Zc(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Zc(e, t, r) {
  return t = aM(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function aM(e) {
  var t = oM(e, "string");
  return sn(t) === "symbol" ? t : String(t);
}
function oM(e, t) {
  if (sn(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (sn(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function uM(e, t) {
  return lM(e) || cM(e, t) || u0(e, t) || sM();
}
function sM() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function u0(e, t) {
  if (e) {
    if (typeof e == "string") return Jc(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Jc(e, t);
  }
}
function Jc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function cM(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], s = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, i = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function lM(e) {
  if (Array.isArray(e)) return e;
}
var vi = function(t, r, n) {
  return t + (r - t) * n;
}, Qc = function(t) {
  var r = t.from, n = t.to;
  return r !== n;
}, fM = function e(t, r, n) {
  var i = Br(function(a, o) {
    if (Qc(o)) {
      var u = t(o.from, o.to, o.velocity), s = uM(u, 2), c = s[0], f = s[1];
      return Ae(Ae({}, o), {}, {
        from: c,
        velocity: f
      });
    }
    return o;
  }, r);
  return n < 1 ? Br(function(a, o) {
    return Qc(o) ? Ae(Ae({}, o), {}, {
      velocity: vi(o.velocity, i[a].velocity, n),
      from: vi(o.from, i[a].from, n)
    }) : o;
  }, r) : e(t, i, n - 1);
};
const hM = (function(e, t, r, n, i) {
  var a = Uj(e, t), o = a.reduce(function(p, m) {
    return Ae(Ae({}, p), {}, Zc({}, m, [e[m], t[m]]));
  }, {}), u = a.reduce(function(p, m) {
    return Ae(Ae({}, p), {}, Zc({}, m, {
      from: e[m],
      velocity: 0,
      to: t[m]
    }));
  }, {}), s = -1, c, f, l = function() {
    return null;
  }, h = function() {
    return Br(function(m, w) {
      return w.from;
    }, u);
  }, d = function() {
    return !Object.values(u).filter(Qc).length;
  }, g = function(m) {
    c || (c = m);
    var w = m - c, x = w / r.dt;
    u = fM(r, u, x), i(Ae(Ae(Ae({}, e), t), h())), c = m, d() || (s = requestAnimationFrame(l));
  }, v = function(m) {
    f || (f = m);
    var w = (m - f) / n, x = Br(function(y, b) {
      return vi.apply(void 0, By(b).concat([r(w)]));
    }, o);
    if (i(Ae(Ae(Ae({}, e), t), x)), w < 1)
      s = requestAnimationFrame(l);
    else {
      var _ = Br(function(y, b) {
        return vi.apply(void 0, By(b).concat([r(1)]));
      }, o);
      i(Ae(Ae(Ae({}, e), t), _));
    }
  };
  return l = r.isStepper ? g : v, function() {
    return requestAnimationFrame(l), function() {
      cancelAnimationFrame(s);
    };
  };
});
function fr(e) {
  "@babel/helpers - typeof";
  return fr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, fr(e);
}
var pM = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];
function dM(e, t) {
  if (e == null) return {};
  var r = vM(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function vM(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Ls(e) {
  return bM(e) || mM(e) || gM(e) || yM();
}
function yM() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function gM(e, t) {
  if (e) {
    if (typeof e == "string") return el(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return el(e, t);
  }
}
function mM(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function bM(e) {
  if (Array.isArray(e)) return el(e);
}
function el(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Uy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function We(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Uy(Object(r), !0).forEach(function(n) {
      qr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Uy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function qr(e, t, r) {
  return t = s0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function wM(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function xM(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, s0(n.key), n);
  }
}
function _M(e, t, r) {
  return t && xM(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function s0(e) {
  var t = OM(e, "string");
  return fr(t) === "symbol" ? t : String(t);
}
function OM(e, t) {
  if (fr(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (fr(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function SM(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && tl(e, t);
}
function tl(e, t) {
  return tl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, tl(e, t);
}
function AM(e) {
  var t = PM();
  return function() {
    var n = yi(e), i;
    if (t) {
      var a = yi(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return rl(this, i);
  };
}
function rl(e, t) {
  if (t && (fr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return nl(e);
}
function nl(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function PM() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function yi(e) {
  return yi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, yi(e);
}
var xt = /* @__PURE__ */ (function(e) {
  SM(r, e);
  var t = AM(r);
  function r(n, i) {
    var a;
    wM(this, r), a = t.call(this, n, i);
    var o = a.props, u = o.isActive, s = o.attributeName, c = o.from, f = o.to, l = o.steps, h = o.children, d = o.duration;
    if (a.handleStyleChange = a.handleStyleChange.bind(nl(a)), a.changeStyle = a.changeStyle.bind(nl(a)), !u || d <= 0)
      return a.state = {
        style: {}
      }, typeof h == "function" && (a.state = {
        style: f
      }), rl(a);
    if (l && l.length)
      a.state = {
        style: l[0].style
      };
    else if (c) {
      if (typeof h == "function")
        return a.state = {
          style: c
        }, rl(a);
      a.state = {
        style: s ? qr({}, s, c) : c
      };
    } else
      a.state = {
        style: {}
      };
    return a;
  }
  return _M(r, [{
    key: "componentDidMount",
    value: function() {
      var i = this.props, a = i.isActive, o = i.canBegin;
      this.mounted = !0, !(!a || !o) && this.runAnimation(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function(i) {
      var a = this.props, o = a.isActive, u = a.canBegin, s = a.attributeName, c = a.shouldReAnimate, f = a.to, l = a.from, h = this.state.style;
      if (u) {
        if (!o) {
          var d = {
            style: s ? qr({}, s, f) : f
          };
          this.state && h && (s && h[s] !== f || !s && h !== f) && this.setState(d);
          return;
        }
        if (!(Ij(i.to, f) && i.canBegin && i.isActive)) {
          var g = !i.canBegin || !i.isActive;
          this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
          var v = g || c ? l : i.to;
          if (this.state && h) {
            var p = {
              style: s ? qr({}, s, v) : v
            };
            (s && h[s] !== v || !s && h !== v) && this.setState(p);
          }
          this.runAnimation(We(We({}, this.props), {}, {
            from: v,
            begin: 0
          }));
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.mounted = !1;
      var i = this.props.onAnimationEnd;
      this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation(), i && i();
    }
  }, {
    key: "handleStyleChange",
    value: function(i) {
      this.changeStyle(i);
    }
  }, {
    key: "changeStyle",
    value: function(i) {
      this.mounted && this.setState({
        style: i
      });
    }
  }, {
    key: "runJSAnimation",
    value: function(i) {
      var a = this, o = i.from, u = i.to, s = i.duration, c = i.easing, f = i.begin, l = i.onAnimationEnd, h = i.onAnimationStart, d = hM(o, u, tM(c), s, this.changeStyle), g = function() {
        a.stopJSAnimation = d();
      };
      this.manager.start([h, f, g, s, l]);
    }
  }, {
    key: "runStepAnimation",
    value: function(i) {
      var a = this, o = i.steps, u = i.begin, s = i.onAnimationStart, c = o[0], f = c.style, l = c.duration, h = l === void 0 ? 0 : l, d = function(v, p, m) {
        if (m === 0)
          return v;
        var w = p.duration, x = p.easing, _ = x === void 0 ? "ease" : x, y = p.style, b = p.properties, O = p.onAnimationEnd, S = m > 0 ? o[m - 1] : p, A = b || Object.keys(y);
        if (typeof _ == "function" || _ === "spring")
          return [].concat(Ls(v), [a.runJSAnimation.bind(a, {
            from: S.style,
            to: y,
            duration: w,
            easing: _
          }), w]);
        var C = qy(A, w, _), T = We(We(We({}, S.style), y), {}, {
          transition: C
        });
        return [].concat(Ls(v), [T, w, O]).filter(Wj);
      };
      return this.manager.start([s].concat(Ls(o.reduce(d, [f, Math.max(h, u)])), [i.onAnimationEnd]));
    }
  }, {
    key: "runAnimation",
    value: function(i) {
      this.manager || (this.manager = Lj());
      var a = i.begin, o = i.duration, u = i.attributeName, s = i.to, c = i.easing, f = i.onAnimationStart, l = i.onAnimationEnd, h = i.steps, d = i.children, g = this.manager;
      if (this.unSubscribe = g.subscribe(this.handleStyleChange), typeof c == "function" || typeof d == "function" || c === "spring") {
        this.runJSAnimation(i);
        return;
      }
      if (h.length > 1) {
        this.runStepAnimation(i);
        return;
      }
      var v = u ? qr({}, u, s) : s, p = qy(Object.keys(v), o, c);
      g.start([f, a, We(We({}, v), {}, {
        transition: p
      }), o, l]);
    }
  }, {
    key: "render",
    value: function() {
      var i = this.props, a = i.children;
      i.begin;
      var o = i.duration;
      i.attributeName, i.easing;
      var u = i.isActive;
      i.steps, i.from, i.to, i.canBegin, i.onAnimationEnd, i.shouldReAnimate, i.onAnimationReStart;
      var s = dM(i, pM), c = Nt.count(a), f = this.state.style;
      if (typeof a == "function")
        return a(f);
      if (!u || c === 0 || o <= 0)
        return a;
      var l = function(d) {
        var g = d.props, v = g.style, p = v === void 0 ? {} : v, m = g.className, w = /* @__PURE__ */ be(d, We(We({}, s), {}, {
          style: We(We({}, p), f),
          className: m
        }));
        return w;
      };
      return c === 1 ? l(Nt.only(a)) : /* @__PURE__ */ E.createElement("div", null, Nt.map(a, function(h) {
        return l(h);
      }));
    }
  }]), r;
})(Wt);
xt.displayName = "Animate";
xt.defaultProps = {
  begin: 0,
  duration: 1e3,
  from: "",
  to: "",
  attributeName: "",
  easing: "ease",
  isActive: !0,
  canBegin: !0,
  steps: [],
  onAnimationEnd: function() {
  },
  onAnimationStart: function() {
  }
};
xt.propTypes = {
  from: te.oneOfType([te.object, te.string]),
  to: te.oneOfType([te.object, te.string]),
  attributeName: te.string,
  // animation duration
  duration: te.number,
  begin: te.number,
  easing: te.oneOfType([te.string, te.func]),
  steps: te.arrayOf(te.shape({
    duration: te.number.isRequired,
    style: te.object.isRequired,
    easing: te.oneOfType([te.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), te.func]),
    // transition css properties(dash case), optional
    properties: te.arrayOf("string"),
    onAnimationEnd: te.func
  })),
  children: te.oneOfType([te.node, te.func]),
  isActive: te.bool,
  canBegin: te.bool,
  onAnimationEnd: te.func,
  // decide if it should reanimate with initial from style when props change
  shouldReAnimate: te.bool,
  onAnimationStart: te.func,
  onAnimationReStart: te.func
};
function cn(e) {
  "@babel/helpers - typeof";
  return cn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, cn(e);
}
function gi() {
  return gi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, gi.apply(this, arguments);
}
function TM(e, t) {
  return CM(e) || MM(e, t) || jM(e, t) || EM();
}
function EM() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jM(e, t) {
  if (e) {
    if (typeof e == "string") return Wy(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Wy(e, t);
  }
}
function Wy(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function MM(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], s = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, i = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function CM(e) {
  if (Array.isArray(e)) return e;
}
function zy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Hy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zy(Object(r), !0).forEach(function(n) {
      IM(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function IM(e, t, r) {
  return t = $M(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function $M(e) {
  var t = RM(e, "string");
  return cn(t) == "symbol" ? t : t + "";
}
function RM(e, t) {
  if (cn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (cn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Gy = function(t, r, n, i, a) {
  var o = Math.min(Math.abs(n) / 2, Math.abs(i) / 2), u = i >= 0 ? 1 : -1, s = n >= 0 ? 1 : -1, c = i >= 0 && n >= 0 || i < 0 && n < 0 ? 1 : 0, f;
  if (o > 0 && a instanceof Array) {
    for (var l = [0, 0, 0, 0], h = 0, d = 4; h < d; h++)
      l[h] = a[h] > o ? o : a[h];
    f = "M".concat(t, ",").concat(r + u * l[0]), l[0] > 0 && (f += "A ".concat(l[0], ",").concat(l[0], ",0,0,").concat(c, ",").concat(t + s * l[0], ",").concat(r)), f += "L ".concat(t + n - s * l[1], ",").concat(r), l[1] > 0 && (f += "A ".concat(l[1], ",").concat(l[1], ",0,0,").concat(c, `,
        `).concat(t + n, ",").concat(r + u * l[1])), f += "L ".concat(t + n, ",").concat(r + i - u * l[2]), l[2] > 0 && (f += "A ".concat(l[2], ",").concat(l[2], ",0,0,").concat(c, `,
        `).concat(t + n - s * l[2], ",").concat(r + i)), f += "L ".concat(t + s * l[3], ",").concat(r + i), l[3] > 0 && (f += "A ".concat(l[3], ",").concat(l[3], ",0,0,").concat(c, `,
        `).concat(t, ",").concat(r + i - u * l[3])), f += "Z";
  } else if (o > 0 && a === +a && a > 0) {
    var g = Math.min(o, a);
    f = "M ".concat(t, ",").concat(r + u * g, `
            A `).concat(g, ",").concat(g, ",0,0,").concat(c, ",").concat(t + s * g, ",").concat(r, `
            L `).concat(t + n - s * g, ",").concat(r, `
            A `).concat(g, ",").concat(g, ",0,0,").concat(c, ",").concat(t + n, ",").concat(r + u * g, `
            L `).concat(t + n, ",").concat(r + i - u * g, `
            A `).concat(g, ",").concat(g, ",0,0,").concat(c, ",").concat(t + n - s * g, ",").concat(r + i, `
            L `).concat(t + s * g, ",").concat(r + i, `
            A `).concat(g, ",").concat(g, ",0,0,").concat(c, ",").concat(t, ",").concat(r + i - u * g, " Z");
  } else
    f = "M ".concat(t, ",").concat(r, " h ").concat(n, " v ").concat(i, " h ").concat(-n, " Z");
  return f;
}, DM = function(t, r) {
  if (!t || !r)
    return !1;
  var n = t.x, i = t.y, a = r.x, o = r.y, u = r.width, s = r.height;
  if (Math.abs(u) > 0 && Math.abs(s) > 0) {
    var c = Math.min(a, a + u), f = Math.max(a, a + u), l = Math.min(o, o + s), h = Math.max(o, o + s);
    return n >= c && n <= f && i >= l && i <= h;
  }
  return !1;
}, NM = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  // The radius of border
  // The radius of four corners when radius is a number
  // The radius of left-top, right-top, right-bottom, left-bottom when radius is an array
  radius: 0,
  isAnimationActive: !1,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, gf = function(t) {
  var r = Hy(Hy({}, NM), t), n = Bn(), i = xl(-1), a = TM(i, 2), o = a[0], u = a[1];
  _l(function() {
    if (n.current && n.current.getTotalLength)
      try {
        var _ = n.current.getTotalLength();
        _ && u(_);
      } catch {
      }
  }, []);
  var s = r.x, c = r.y, f = r.width, l = r.height, h = r.radius, d = r.className, g = r.animationEasing, v = r.animationDuration, p = r.animationBegin, m = r.isAnimationActive, w = r.isUpdateAnimationActive;
  if (s !== +s || c !== +c || f !== +f || l !== +l || f === 0 || l === 0)
    return null;
  var x = se("recharts-rectangle", d);
  return w ? /* @__PURE__ */ E.createElement(xt, {
    canBegin: o > 0,
    from: {
      width: f,
      height: l,
      x: s,
      y: c
    },
    to: {
      width: f,
      height: l,
      x: s,
      y: c
    },
    duration: v,
    animationEasing: g,
    isActive: w
  }, function(_) {
    var y = _.width, b = _.height, O = _.x, S = _.y;
    return /* @__PURE__ */ E.createElement(xt, {
      canBegin: o > 0,
      from: "0px ".concat(o === -1 ? 1 : o, "px"),
      to: "".concat(o, "px 0px"),
      attributeName: "strokeDasharray",
      begin: p,
      duration: v,
      isActive: m,
      easing: g
    }, /* @__PURE__ */ E.createElement("path", gi({}, ce(r, !0), {
      className: x,
      d: Gy(O, S, y, b, h),
      ref: n
    })));
  }) : /* @__PURE__ */ E.createElement("path", gi({}, ce(r, !0), {
    className: x,
    d: Gy(s, c, f, l, h)
  }));
};
function il() {
  return il = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, il.apply(this, arguments);
}
var c0 = function(t) {
  var r = t.cx, n = t.cy, i = t.r, a = t.className, o = se("recharts-dot", a);
  return r === +r && n === +n && i === +i ? /* @__PURE__ */ ji("circle", il({}, ce(t, !1), Un(t), {
    className: o,
    cx: r,
    cy: n,
    r: i
  })) : null;
};
function ln(e) {
  "@babel/helpers - typeof";
  return ln = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ln(e);
}
var qM = ["x", "y", "top", "left", "width", "height", "className"];
function al() {
  return al = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, al.apply(this, arguments);
}
function Ky(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function kM(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ky(Object(r), !0).forEach(function(n) {
      LM(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ky(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function LM(e, t, r) {
  return t = BM(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function BM(e) {
  var t = FM(e, "string");
  return ln(t) == "symbol" ? t : t + "";
}
function FM(e, t) {
  if (ln(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ln(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function UM(e, t) {
  if (e == null) return {};
  var r = WM(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function WM(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var zM = function(t, r, n, i, a, o) {
  return "M".concat(t, ",").concat(a, "v").concat(i, "M").concat(o, ",").concat(r, "h").concat(n);
}, HM = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, i = t.y, a = i === void 0 ? 0 : i, o = t.top, u = o === void 0 ? 0 : o, s = t.left, c = s === void 0 ? 0 : s, f = t.width, l = f === void 0 ? 0 : f, h = t.height, d = h === void 0 ? 0 : h, g = t.className, v = UM(t, qM), p = kM({
    x: n,
    y: a,
    top: u,
    left: c,
    width: l,
    height: d
  }, v);
  return !B(n) || !B(a) || !B(l) || !B(d) || !B(u) || !B(c) ? null : /* @__PURE__ */ E.createElement("path", al({}, ce(p, !0), {
    className: se("recharts-cross", g),
    d: zM(n, a, l, d, u, c)
  }));
}, Bs, Xy;
function GM() {
  if (Xy) return Bs;
  Xy = 1;
  var e = jm(), t = e(Object.getPrototypeOf, Object);
  return Bs = t, Bs;
}
var Fs, Vy;
function KM() {
  if (Vy) return Fs;
  Vy = 1;
  var e = pt(), t = GM(), r = dt(), n = "[object Object]", i = Function.prototype, a = Object.prototype, o = i.toString, u = a.hasOwnProperty, s = o.call(Object);
  function c(f) {
    if (!r(f) || e(f) != n)
      return !1;
    var l = t(f);
    if (l === null)
      return !0;
    var h = u.call(l, "constructor") && l.constructor;
    return typeof h == "function" && h instanceof h && o.call(h) == s;
  }
  return Fs = c, Fs;
}
var XM = KM();
const VM = /* @__PURE__ */ ae(XM);
var Us, Yy;
function YM() {
  if (Yy) return Us;
  Yy = 1;
  var e = pt(), t = dt(), r = "[object Boolean]";
  function n(i) {
    return i === !0 || i === !1 || t(i) && e(i) == r;
  }
  return Us = n, Us;
}
var ZM = YM();
const JM = /* @__PURE__ */ ae(ZM);
function fn(e) {
  "@babel/helpers - typeof";
  return fn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, fn(e);
}
function mi() {
  return mi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, mi.apply(this, arguments);
}
function QM(e, t) {
  return nC(e) || rC(e, t) || tC(e, t) || eC();
}
function eC() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function tC(e, t) {
  if (e) {
    if (typeof e == "string") return Zy(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Zy(e, t);
  }
}
function Zy(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function rC(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], s = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, i = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function nC(e) {
  if (Array.isArray(e)) return e;
}
function Jy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Qy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Jy(Object(r), !0).forEach(function(n) {
      iC(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Jy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function iC(e, t, r) {
  return t = aC(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function aC(e) {
  var t = oC(e, "string");
  return fn(t) == "symbol" ? t : t + "";
}
function oC(e, t) {
  if (fn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (fn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var eg = function(t, r, n, i, a) {
  var o = n - i, u;
  return u = "M ".concat(t, ",").concat(r), u += "L ".concat(t + n, ",").concat(r), u += "L ".concat(t + n - o / 2, ",").concat(r + a), u += "L ".concat(t + n - o / 2 - i, ",").concat(r + a), u += "L ".concat(t, ",").concat(r, " Z"), u;
}, uC = {
  x: 0,
  y: 0,
  upperWidth: 0,
  lowerWidth: 0,
  height: 0,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, sC = function(t) {
  var r = Qy(Qy({}, uC), t), n = Bn(), i = xl(-1), a = QM(i, 2), o = a[0], u = a[1];
  _l(function() {
    if (n.current && n.current.getTotalLength)
      try {
        var x = n.current.getTotalLength();
        x && u(x);
      } catch {
      }
  }, []);
  var s = r.x, c = r.y, f = r.upperWidth, l = r.lowerWidth, h = r.height, d = r.className, g = r.animationEasing, v = r.animationDuration, p = r.animationBegin, m = r.isUpdateAnimationActive;
  if (s !== +s || c !== +c || f !== +f || l !== +l || h !== +h || f === 0 && l === 0 || h === 0)
    return null;
  var w = se("recharts-trapezoid", d);
  return m ? /* @__PURE__ */ E.createElement(xt, {
    canBegin: o > 0,
    from: {
      upperWidth: 0,
      lowerWidth: 0,
      height: h,
      x: s,
      y: c
    },
    to: {
      upperWidth: f,
      lowerWidth: l,
      height: h,
      x: s,
      y: c
    },
    duration: v,
    animationEasing: g,
    isActive: m
  }, function(x) {
    var _ = x.upperWidth, y = x.lowerWidth, b = x.height, O = x.x, S = x.y;
    return /* @__PURE__ */ E.createElement(xt, {
      canBegin: o > 0,
      from: "0px ".concat(o === -1 ? 1 : o, "px"),
      to: "".concat(o, "px 0px"),
      attributeName: "strokeDasharray",
      begin: p,
      duration: v,
      easing: g
    }, /* @__PURE__ */ E.createElement("path", mi({}, ce(r, !0), {
      className: w,
      d: eg(O, S, _, y, b),
      ref: n
    })));
  }) : /* @__PURE__ */ E.createElement("g", null, /* @__PURE__ */ E.createElement("path", mi({}, ce(r, !0), {
    className: w,
    d: eg(s, c, f, l, h)
  })));
}, cC = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function hn(e) {
  "@babel/helpers - typeof";
  return hn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, hn(e);
}
function lC(e, t) {
  if (e == null) return {};
  var r = fC(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function fC(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function tg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function bi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? tg(Object(r), !0).forEach(function(n) {
      hC(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function hC(e, t, r) {
  return t = pC(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function pC(e) {
  var t = dC(e, "string");
  return hn(t) == "symbol" ? t : t + "";
}
function dC(e, t) {
  if (hn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (hn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function vC(e, t) {
  return bi(bi({}, t), e);
}
function yC(e, t) {
  return e === "symbols";
}
function rg(e) {
  var t = e.shapeType, r = e.elementProps;
  switch (t) {
    case "rectangle":
      return /* @__PURE__ */ E.createElement(gf, r);
    case "trapezoid":
      return /* @__PURE__ */ E.createElement(sC, r);
    case "sector":
      return /* @__PURE__ */ E.createElement(t0, r);
    case "symbols":
      if (yC(t))
        return /* @__PURE__ */ E.createElement(Nl, r);
      break;
    default:
      return null;
  }
}
function gC(e) {
  return /* @__PURE__ */ Ge(e) ? e.props : e;
}
function mC(e) {
  var t = e.option, r = e.shapeType, n = e.propTransformer, i = n === void 0 ? vC : n, a = e.activeClassName, o = a === void 0 ? "recharts-active-shape" : a, u = e.isActive, s = lC(e, cC), c;
  if (/* @__PURE__ */ Ge(t))
    c = /* @__PURE__ */ be(t, bi(bi({}, s), gC(t)));
  else if (J(t))
    c = t(s);
  else if (VM(t) && !JM(t)) {
    var f = i(t, s);
    c = /* @__PURE__ */ E.createElement(rg, {
      shapeType: r,
      elementProps: f
    });
  } else {
    var l = s;
    c = /* @__PURE__ */ E.createElement(rg, {
      shapeType: r,
      elementProps: l
    });
  }
  return u ? /* @__PURE__ */ E.createElement(Te, {
    className: o
  }, c) : c;
}
function ra(e, t) {
  return t != null && "trapezoids" in e.props;
}
function na(e, t) {
  return t != null && "sectors" in e.props;
}
function pn(e, t) {
  return t != null && "points" in e.props;
}
function bC(e, t) {
  var r, n, i = e.x === (t == null || (r = t.labelViewBox) === null || r === void 0 ? void 0 : r.x) || e.x === t.x, a = e.y === (t == null || (n = t.labelViewBox) === null || n === void 0 ? void 0 : n.y) || e.y === t.y;
  return i && a;
}
function wC(e, t) {
  var r = e.endAngle === t.endAngle, n = e.startAngle === t.startAngle;
  return r && n;
}
function xC(e, t) {
  var r = e.x === t.x, n = e.y === t.y, i = e.z === t.z;
  return r && n && i;
}
function _C(e, t) {
  var r;
  return ra(e, t) ? r = bC : na(e, t) ? r = wC : pn(e, t) && (r = xC), r;
}
function OC(e, t) {
  var r;
  return ra(e, t) ? r = "trapezoids" : na(e, t) ? r = "sectors" : pn(e, t) && (r = "points"), r;
}
function SC(e, t) {
  if (ra(e, t)) {
    var r;
    return (r = t.tooltipPayload) === null || r === void 0 || (r = r[0]) === null || r === void 0 || (r = r.payload) === null || r === void 0 ? void 0 : r.payload;
  }
  if (na(e, t)) {
    var n;
    return (n = t.tooltipPayload) === null || n === void 0 || (n = n[0]) === null || n === void 0 || (n = n.payload) === null || n === void 0 ? void 0 : n.payload;
  }
  return pn(e, t) ? t.payload : {};
}
function AC(e) {
  var t = e.activeTooltipItem, r = e.graphicalItem, n = e.itemData, i = OC(r, t), a = SC(r, t), o = n.filter(function(s, c) {
    var f = pf(a, s), l = r.props[i].filter(function(g) {
      var v = _C(r, t);
      return v(g, t);
    }), h = r.props[i].indexOf(l[l.length - 1]), d = c === h;
    return f && d;
  }), u = n.indexOf(o[o.length - 1]);
  return u;
}
var Ws, ng;
function PC() {
  if (ng) return Ws;
  ng = 1;
  var e = Math.ceil, t = Math.max;
  function r(n, i, a, o) {
    for (var u = -1, s = t(e((i - n) / (a || 1)), 0), c = Array(s); s--; )
      c[o ? s : ++u] = n, n += a;
    return c;
  }
  return Ws = r, Ws;
}
var zs, ig;
function l0() {
  if (ig) return zs;
  ig = 1;
  var e = Hm(), t = 1 / 0, r = 17976931348623157e292;
  function n(i) {
    if (!i)
      return i === 0 ? i : 0;
    if (i = e(i), i === t || i === -t) {
      var a = i < 0 ? -1 : 1;
      return a * r;
    }
    return i === i ? i : 0;
  }
  return zs = n, zs;
}
var Hs, ag;
function TC() {
  if (ag) return Hs;
  ag = 1;
  var e = PC(), t = Wi(), r = l0();
  function n(i) {
    return function(a, o, u) {
      return u && typeof u != "number" && t(a, o, u) && (o = u = void 0), a = r(a), o === void 0 ? (o = a, a = 0) : o = r(o), u = u === void 0 ? a < o ? 1 : -1 : r(u), e(a, o, u, i);
    };
  }
  return Hs = n, Hs;
}
var Gs, og;
function EC() {
  if (og) return Gs;
  og = 1;
  var e = TC(), t = e();
  return Gs = t, Gs;
}
var jC = EC();
const wi = /* @__PURE__ */ ae(jC);
function dn(e) {
  "@babel/helpers - typeof";
  return dn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, dn(e);
}
function ug(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function sg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ug(Object(r), !0).forEach(function(n) {
      f0(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ug(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function f0(e, t, r) {
  return t = MC(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function MC(e) {
  var t = CC(e, "string");
  return dn(t) == "symbol" ? t : t + "";
}
function CC(e, t) {
  if (dn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (dn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var IC = ["Webkit", "Moz", "O", "ms"], $C = function(t, r) {
  var n = t.replace(/(\w)/, function(a) {
    return a.toUpperCase();
  }), i = IC.reduce(function(a, o) {
    return sg(sg({}, a), {}, f0({}, o + n, r));
  }, {});
  return i[t] = r, i;
};
function hr(e) {
  "@babel/helpers - typeof";
  return hr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, hr(e);
}
function xi() {
  return xi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, xi.apply(this, arguments);
}
function cg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ks(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cg(Object(r), !0).forEach(function(n) {
      Re(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : cg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function RC(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function lg(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, p0(n.key), n);
  }
}
function DC(e, t, r) {
  return t && lg(e.prototype, t), r && lg(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function NC(e, t, r) {
  return t = _i(t), qC(e, h0() ? Reflect.construct(t, r || [], _i(e).constructor) : t.apply(e, r));
}
function qC(e, t) {
  if (t && (hr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return kC(e);
}
function kC(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function h0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (h0 = function() {
    return !!e;
  })();
}
function _i(e) {
  return _i = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, _i(e);
}
function LC(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ol(e, t);
}
function ol(e, t) {
  return ol = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, ol(e, t);
}
function Re(e, t, r) {
  return t = p0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function p0(e) {
  var t = BC(e, "string");
  return hr(t) == "symbol" ? t : t + "";
}
function BC(e, t) {
  if (hr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (hr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var FC = function(t) {
  var r = t.data, n = t.startIndex, i = t.endIndex, a = t.x, o = t.width, u = t.travellerWidth;
  if (!r || !r.length)
    return {};
  var s = r.length, c = kr().domain(wi(0, s)).range([a, a + o - u]), f = c.domain().map(function(l) {
    return c(l);
  });
  return {
    isTextActive: !1,
    isSlideMoving: !1,
    isTravellerMoving: !1,
    isTravellerFocused: !1,
    startX: c(n),
    endX: c(i),
    scale: c,
    scaleValues: f
  };
}, fg = function(t) {
  return t.changedTouches && !!t.changedTouches.length;
}, pr = /* @__PURE__ */ (function(e) {
  function t(r) {
    var n;
    return RC(this, t), n = NC(this, t, [r]), Re(n, "handleDrag", function(i) {
      n.leaveTimer && (clearTimeout(n.leaveTimer), n.leaveTimer = null), n.state.isTravellerMoving ? n.handleTravellerMove(i) : n.state.isSlideMoving && n.handleSlideDrag(i);
    }), Re(n, "handleTouchMove", function(i) {
      i.changedTouches != null && i.changedTouches.length > 0 && n.handleDrag(i.changedTouches[0]);
    }), Re(n, "handleDragEnd", function() {
      n.setState({
        isTravellerMoving: !1,
        isSlideMoving: !1
      }, function() {
        var i = n.props, a = i.endIndex, o = i.onDragEnd, u = i.startIndex;
        o?.({
          endIndex: a,
          startIndex: u
        });
      }), n.detachDragEndListener();
    }), Re(n, "handleLeaveWrapper", function() {
      (n.state.isTravellerMoving || n.state.isSlideMoving) && (n.leaveTimer = window.setTimeout(n.handleDragEnd, n.props.leaveTimeOut));
    }), Re(n, "handleEnterSlideOrTraveller", function() {
      n.setState({
        isTextActive: !0
      });
    }), Re(n, "handleLeaveSlideOrTraveller", function() {
      n.setState({
        isTextActive: !1
      });
    }), Re(n, "handleSlideDragStart", function(i) {
      var a = fg(i) ? i.changedTouches[0] : i;
      n.setState({
        isTravellerMoving: !1,
        isSlideMoving: !0,
        slideMoveStartX: a.pageX
      }), n.attachDragEndListener();
    }), n.travellerDragStartHandlers = {
      startX: n.handleTravellerDragStart.bind(n, "startX"),
      endX: n.handleTravellerDragStart.bind(n, "endX")
    }, n.state = {}, n;
  }
  return LC(t, e), DC(t, [{
    key: "componentWillUnmount",
    value: function() {
      this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener();
    }
  }, {
    key: "getIndex",
    value: function(n) {
      var i = n.startX, a = n.endX, o = this.state.scaleValues, u = this.props, s = u.gap, c = u.data, f = c.length - 1, l = Math.min(i, a), h = Math.max(i, a), d = t.getIndexInRange(o, l), g = t.getIndexInRange(o, h);
      return {
        startIndex: d - d % s,
        endIndex: g === f ? f : g - g % s
      };
    }
  }, {
    key: "getTextOfTick",
    value: function(n) {
      var i = this.props, a = i.data, o = i.tickFormatter, u = i.dataKey, s = Xe(a[n], u, n);
      return J(o) ? o(s, n) : s;
    }
  }, {
    key: "attachDragEndListener",
    value: function() {
      window.addEventListener("mouseup", this.handleDragEnd, !0), window.addEventListener("touchend", this.handleDragEnd, !0), window.addEventListener("mousemove", this.handleDrag, !0);
    }
  }, {
    key: "detachDragEndListener",
    value: function() {
      window.removeEventListener("mouseup", this.handleDragEnd, !0), window.removeEventListener("touchend", this.handleDragEnd, !0), window.removeEventListener("mousemove", this.handleDrag, !0);
    }
  }, {
    key: "handleSlideDrag",
    value: function(n) {
      var i = this.state, a = i.slideMoveStartX, o = i.startX, u = i.endX, s = this.props, c = s.x, f = s.width, l = s.travellerWidth, h = s.startIndex, d = s.endIndex, g = s.onChange, v = n.pageX - a;
      v > 0 ? v = Math.min(v, c + f - l - u, c + f - l - o) : v < 0 && (v = Math.max(v, c - o, c - u));
      var p = this.getIndex({
        startX: o + v,
        endX: u + v
      });
      (p.startIndex !== h || p.endIndex !== d) && g && g(p), this.setState({
        startX: o + v,
        endX: u + v,
        slideMoveStartX: n.pageX
      });
    }
  }, {
    key: "handleTravellerDragStart",
    value: function(n, i) {
      var a = fg(i) ? i.changedTouches[0] : i;
      this.setState({
        isSlideMoving: !1,
        isTravellerMoving: !0,
        movingTravellerId: n,
        brushMoveStartX: a.pageX
      }), this.attachDragEndListener();
    }
  }, {
    key: "handleTravellerMove",
    value: function(n) {
      var i = this.state, a = i.brushMoveStartX, o = i.movingTravellerId, u = i.endX, s = i.startX, c = this.state[o], f = this.props, l = f.x, h = f.width, d = f.travellerWidth, g = f.onChange, v = f.gap, p = f.data, m = {
        startX: this.state.startX,
        endX: this.state.endX
      }, w = n.pageX - a;
      w > 0 ? w = Math.min(w, l + h - d - c) : w < 0 && (w = Math.max(w, l - c)), m[o] = c + w;
      var x = this.getIndex(m), _ = x.startIndex, y = x.endIndex, b = function() {
        var S = p.length - 1;
        return o === "startX" && (u > s ? _ % v === 0 : y % v === 0) || u < s && y === S || o === "endX" && (u > s ? y % v === 0 : _ % v === 0) || u > s && y === S;
      };
      this.setState(Re(Re({}, o, c + w), "brushMoveStartX", n.pageX), function() {
        g && b() && g(x);
      });
    }
  }, {
    key: "handleTravellerMoveKeyboard",
    value: function(n, i) {
      var a = this, o = this.state, u = o.scaleValues, s = o.startX, c = o.endX, f = this.state[i], l = u.indexOf(f);
      if (l !== -1) {
        var h = l + n;
        if (!(h === -1 || h >= u.length)) {
          var d = u[h];
          i === "startX" && d >= c || i === "endX" && d <= s || this.setState(Re({}, i, d), function() {
            a.props.onChange(a.getIndex({
              startX: a.state.startX,
              endX: a.state.endX
            }));
          });
        }
      }
    }
  }, {
    key: "renderBackground",
    value: function() {
      var n = this.props, i = n.x, a = n.y, o = n.width, u = n.height, s = n.fill, c = n.stroke;
      return /* @__PURE__ */ E.createElement("rect", {
        stroke: c,
        fill: s,
        x: i,
        y: a,
        width: o,
        height: u
      });
    }
  }, {
    key: "renderPanorama",
    value: function() {
      var n = this.props, i = n.x, a = n.y, o = n.width, u = n.height, s = n.data, c = n.children, f = n.padding, l = Nt.only(c);
      return l ? /* @__PURE__ */ E.cloneElement(l, {
        x: i,
        y: a,
        width: o,
        height: u,
        margin: f,
        compact: !0,
        data: s
      }) : null;
    }
  }, {
    key: "renderTravellerLayer",
    value: function(n, i) {
      var a, o, u = this, s = this.props, c = s.y, f = s.travellerWidth, l = s.height, h = s.traveller, d = s.ariaLabel, g = s.data, v = s.startIndex, p = s.endIndex, m = Math.max(n, this.props.x), w = Ks(Ks({}, ce(this.props, !1)), {}, {
        x: m,
        y: c,
        width: f,
        height: l
      }), x = d || "Min value: ".concat((a = g[v]) === null || a === void 0 ? void 0 : a.name, ", Max value: ").concat((o = g[p]) === null || o === void 0 ? void 0 : o.name);
      return /* @__PURE__ */ E.createElement(Te, {
        tabIndex: 0,
        role: "slider",
        "aria-label": x,
        "aria-valuenow": n,
        className: "recharts-brush-traveller",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.travellerDragStartHandlers[i],
        onTouchStart: this.travellerDragStartHandlers[i],
        onKeyDown: function(y) {
          ["ArrowLeft", "ArrowRight"].includes(y.key) && (y.preventDefault(), y.stopPropagation(), u.handleTravellerMoveKeyboard(y.key === "ArrowRight" ? 1 : -1, i));
        },
        onFocus: function() {
          u.setState({
            isTravellerFocused: !0
          });
        },
        onBlur: function() {
          u.setState({
            isTravellerFocused: !1
          });
        },
        style: {
          cursor: "col-resize"
        }
      }, t.renderTraveller(h, w));
    }
  }, {
    key: "renderSlide",
    value: function(n, i) {
      var a = this.props, o = a.y, u = a.height, s = a.stroke, c = a.travellerWidth, f = Math.min(n, i) + c, l = Math.max(Math.abs(i - n) - c, 0);
      return /* @__PURE__ */ E.createElement("rect", {
        className: "recharts-brush-slide",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.handleSlideDragStart,
        onTouchStart: this.handleSlideDragStart,
        style: {
          cursor: "move"
        },
        stroke: "none",
        fill: s,
        fillOpacity: 0.2,
        x: f,
        y: o,
        width: l,
        height: u
      });
    }
  }, {
    key: "renderText",
    value: function() {
      var n = this.props, i = n.startIndex, a = n.endIndex, o = n.y, u = n.height, s = n.travellerWidth, c = n.stroke, f = this.state, l = f.startX, h = f.endX, d = 5, g = {
        pointerEvents: "none",
        fill: c
      };
      return /* @__PURE__ */ E.createElement(Te, {
        className: "recharts-brush-texts"
      }, /* @__PURE__ */ E.createElement(Cc, xi({
        textAnchor: "end",
        verticalAnchor: "middle",
        x: Math.min(l, h) - d,
        y: o + u / 2
      }, g), this.getTextOfTick(i)), /* @__PURE__ */ E.createElement(Cc, xi({
        textAnchor: "start",
        verticalAnchor: "middle",
        x: Math.max(l, h) + s + d,
        y: o + u / 2
      }, g), this.getTextOfTick(a)));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.data, a = n.className, o = n.children, u = n.x, s = n.y, c = n.width, f = n.height, l = n.alwaysShowText, h = this.state, d = h.startX, g = h.endX, v = h.isTextActive, p = h.isSlideMoving, m = h.isTravellerMoving, w = h.isTravellerFocused;
      if (!i || !i.length || !B(u) || !B(s) || !B(c) || !B(f) || c <= 0 || f <= 0)
        return null;
      var x = se("recharts-brush", a), _ = E.Children.count(o) === 1, y = $C("userSelect", "none");
      return /* @__PURE__ */ E.createElement(Te, {
        className: x,
        onMouseLeave: this.handleLeaveWrapper,
        onTouchMove: this.handleTouchMove,
        style: y
      }, this.renderBackground(), _ && this.renderPanorama(), this.renderSlide(d, g), this.renderTravellerLayer(d, "startX"), this.renderTravellerLayer(g, "endX"), (v || p || m || w || l) && this.renderText());
    }
  }], [{
    key: "renderDefaultTraveller",
    value: function(n) {
      var i = n.x, a = n.y, o = n.width, u = n.height, s = n.stroke, c = Math.floor(a + u / 2) - 1;
      return /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement("rect", {
        x: i,
        y: a,
        width: o,
        height: u,
        fill: s,
        stroke: "none"
      }), /* @__PURE__ */ E.createElement("line", {
        x1: i + 1,
        y1: c,
        x2: i + o - 1,
        y2: c,
        fill: "none",
        stroke: "#fff"
      }), /* @__PURE__ */ E.createElement("line", {
        x1: i + 1,
        y1: c + 2,
        x2: i + o - 1,
        y2: c + 2,
        fill: "none",
        stroke: "#fff"
      }));
    }
  }, {
    key: "renderTraveller",
    value: function(n, i) {
      var a;
      return /* @__PURE__ */ E.isValidElement(n) ? a = /* @__PURE__ */ E.cloneElement(n, i) : J(n) ? a = n(i) : a = t.renderDefaultTraveller(i), a;
    }
  }, {
    key: "getDerivedStateFromProps",
    value: function(n, i) {
      var a = n.data, o = n.width, u = n.x, s = n.travellerWidth, c = n.updateId, f = n.startIndex, l = n.endIndex;
      if (a !== i.prevData || c !== i.prevUpdateId)
        return Ks({
          prevData: a,
          prevTravellerWidth: s,
          prevUpdateId: c,
          prevX: u,
          prevWidth: o
        }, a && a.length ? FC({
          data: a,
          width: o,
          x: u,
          travellerWidth: s,
          startIndex: f,
          endIndex: l
        }) : {
          scale: null,
          scaleValues: null
        });
      if (i.scale && (o !== i.prevWidth || u !== i.prevX || s !== i.prevTravellerWidth)) {
        i.scale.range([u, u + o - s]);
        var h = i.scale.domain().map(function(d) {
          return i.scale(d);
        });
        return {
          prevData: a,
          prevTravellerWidth: s,
          prevUpdateId: c,
          prevX: u,
          prevWidth: o,
          startX: i.scale(n.startIndex),
          endX: i.scale(n.endIndex),
          scaleValues: h
        };
      }
      return null;
    }
  }, {
    key: "getIndexInRange",
    value: function(n, i) {
      for (var a = n.length, o = 0, u = a - 1; u - o > 1; ) {
        var s = Math.floor((o + u) / 2);
        n[s] > i ? u = s : o = s;
      }
      return i >= n[u] ? u : o;
    }
  }]);
})(Wt);
Re(pr, "displayName", "Brush");
Re(pr, "defaultProps", {
  height: 40,
  travellerWidth: 5,
  gap: 1,
  fill: "#fff",
  stroke: "#666",
  padding: {
    top: 1,
    right: 1,
    bottom: 1,
    left: 1
  },
  leaveTimeOut: 1e3,
  alwaysShowText: !1
});
var Xs, hg;
function UC() {
  if (hg) return Xs;
  hg = 1;
  var e = Wl();
  function t(r, n) {
    var i;
    return e(r, function(a, o, u) {
      return i = n(a, o, u), !i;
    }), !!i;
  }
  return Xs = t, Xs;
}
var Vs, pg;
function WC() {
  if (pg) return Vs;
  pg = 1;
  var e = _m(), t = St(), r = UC(), n = Ie(), i = Wi();
  function a(o, u, s) {
    var c = n(o) ? e : r;
    return s && i(o, u, s) && (u = void 0), c(o, t(u, 3));
  }
  return Vs = a, Vs;
}
var zC = WC();
const HC = /* @__PURE__ */ ae(zC);
var et = function(t, r) {
  var n = t.alwaysShow, i = t.ifOverflow;
  return n && (i = "extendDomain"), i === r;
}, Ys, dg;
function GC() {
  if (dg) return Ys;
  dg = 1;
  var e = Bm();
  function t(r, n, i) {
    n == "__proto__" && e ? e(r, n, {
      configurable: !0,
      enumerable: !0,
      value: i,
      writable: !0
    }) : r[n] = i;
  }
  return Ys = t, Ys;
}
var Zs, vg;
function KC() {
  if (vg) return Zs;
  vg = 1;
  var e = GC(), t = km(), r = St();
  function n(i, a) {
    var o = {};
    return a = r(a, 3), t(i, function(u, s, c) {
      e(o, s, a(u, s, c));
    }), o;
  }
  return Zs = n, Zs;
}
var XC = KC();
const VC = /* @__PURE__ */ ae(XC);
var Js, yg;
function YC() {
  if (yg) return Js;
  yg = 1;
  function e(t, r) {
    for (var n = -1, i = t == null ? 0 : t.length; ++n < i; )
      if (!r(t[n], n, t))
        return !1;
    return !0;
  }
  return Js = e, Js;
}
var Qs, gg;
function ZC() {
  if (gg) return Qs;
  gg = 1;
  var e = Wl();
  function t(r, n) {
    var i = !0;
    return e(r, function(a, o, u) {
      return i = !!n(a, o, u), i;
    }), i;
  }
  return Qs = t, Qs;
}
var ec, mg;
function JC() {
  if (mg) return ec;
  mg = 1;
  var e = YC(), t = ZC(), r = St(), n = Ie(), i = Wi();
  function a(o, u, s) {
    var c = n(o) ? e : t;
    return s && i(o, u, s) && (u = void 0), c(o, r(u, 3));
  }
  return ec = a, ec;
}
var QC = JC();
const d0 = /* @__PURE__ */ ae(QC);
var eI = ["x", "y"];
function vn(e) {
  "@babel/helpers - typeof";
  return vn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, vn(e);
}
function ul() {
  return ul = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ul.apply(this, arguments);
}
function bg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function $r(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bg(Object(r), !0).forEach(function(n) {
      tI(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function tI(e, t, r) {
  return t = rI(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function rI(e) {
  var t = nI(e, "string");
  return vn(t) == "symbol" ? t : t + "";
}
function nI(e, t) {
  if (vn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (vn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function iI(e, t) {
  if (e == null) return {};
  var r = aI(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function aI(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function oI(e, t) {
  var r = e.x, n = e.y, i = iI(e, eI), a = "".concat(r), o = parseInt(a, 10), u = "".concat(n), s = parseInt(u, 10), c = "".concat(t.height || i.height), f = parseInt(c, 10), l = "".concat(t.width || i.width), h = parseInt(l, 10);
  return $r($r($r($r($r({}, t), i), o ? {
    x: o
  } : {}), s ? {
    y: s
  } : {}), {}, {
    height: f,
    width: h,
    name: t.name,
    radius: t.radius
  });
}
function wg(e) {
  return /* @__PURE__ */ E.createElement(mC, ul({
    shapeType: "rectangle",
    propTransformer: oI,
    activeClassName: "recharts-active-bar"
  }, e));
}
var uI = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return function(n, i) {
    if (typeof t == "number") return t;
    var a = B(n) || Rw(n);
    return a ? t(n, i) : (a || Ut(), r);
  };
}, sI = ["value", "background"], v0;
function dr(e) {
  "@babel/helpers - typeof";
  return dr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, dr(e);
}
function cI(e, t) {
  if (e == null) return {};
  var r = lI(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function lI(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Oi() {
  return Oi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Oi.apply(this, arguments);
}
function xg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function de(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xg(Object(r), !0).forEach(function(n) {
      bt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function fI(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _g(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, g0(n.key), n);
  }
}
function hI(e, t, r) {
  return t && _g(e.prototype, t), r && _g(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function pI(e, t, r) {
  return t = Si(t), dI(e, y0() ? Reflect.construct(t, r || [], Si(e).constructor) : t.apply(e, r));
}
function dI(e, t) {
  if (t && (dr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return vI(e);
}
function vI(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function y0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (y0 = function() {
    return !!e;
  })();
}
function Si(e) {
  return Si = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Si(e);
}
function yI(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && sl(e, t);
}
function sl(e, t) {
  return sl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, sl(e, t);
}
function bt(e, t, r) {
  return t = g0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function g0(e) {
  var t = gI(e, "string");
  return dr(t) == "symbol" ? t : t + "";
}
function gI(e, t) {
  if (dr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (dr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Pn = /* @__PURE__ */ (function(e) {
  function t() {
    var r;
    fI(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = pI(this, t, [].concat(i)), bt(r, "state", {
      isAnimationFinished: !1
    }), bt(r, "id", Ni("recharts-bar-")), bt(r, "handleAnimationEnd", function() {
      var o = r.props.onAnimationEnd;
      r.setState({
        isAnimationFinished: !0
      }), o && o();
    }), bt(r, "handleAnimationStart", function() {
      var o = r.props.onAnimationStart;
      r.setState({
        isAnimationFinished: !1
      }), o && o();
    }), r;
  }
  return yI(t, e), hI(t, [{
    key: "renderRectanglesStatically",
    value: function(n) {
      var i = this, a = this.props, o = a.shape, u = a.dataKey, s = a.activeIndex, c = a.activeBar, f = ce(this.props, !1);
      return n && n.map(function(l, h) {
        var d = h === s, g = d ? c : o, v = de(de(de({}, f), l), {}, {
          isActive: d,
          option: g,
          index: h,
          dataKey: u,
          onAnimationStart: i.handleAnimationStart,
          onAnimationEnd: i.handleAnimationEnd
        });
        return /* @__PURE__ */ E.createElement(Te, Oi({
          className: "recharts-bar-rectangle"
        }, fc(i.props, l, h), {
          // https://github.com/recharts/recharts/issues/5415
          // eslint-disable-next-line react/no-array-index-key
          key: "rectangle-".concat(l?.x, "-").concat(l?.y, "-").concat(l?.value, "-").concat(h)
        }), /* @__PURE__ */ E.createElement(wg, v));
      });
    }
  }, {
    key: "renderRectanglesWithAnimation",
    value: function() {
      var n = this, i = this.props, a = i.data, o = i.layout, u = i.isAnimationActive, s = i.animationBegin, c = i.animationDuration, f = i.animationEasing, l = i.animationId, h = this.state.prevData;
      return /* @__PURE__ */ E.createElement(xt, {
        begin: s,
        duration: c,
        isActive: u,
        easing: f,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "bar-".concat(l),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(d) {
        var g = d.t, v = a.map(function(p, m) {
          var w = h && h[m];
          if (w) {
            var x = Vt(w.x, p.x), _ = Vt(w.y, p.y), y = Vt(w.width, p.width), b = Vt(w.height, p.height);
            return de(de({}, p), {}, {
              x: x(g),
              y: _(g),
              width: y(g),
              height: b(g)
            });
          }
          if (o === "horizontal") {
            var O = Vt(0, p.height), S = O(g);
            return de(de({}, p), {}, {
              y: p.y + p.height - S,
              height: S
            });
          }
          var A = Vt(0, p.width), C = A(g);
          return de(de({}, p), {}, {
            width: C
          });
        });
        return /* @__PURE__ */ E.createElement(Te, null, n.renderRectanglesStatically(v));
      });
    }
  }, {
    key: "renderRectangles",
    value: function() {
      var n = this.props, i = n.data, a = n.isAnimationActive, o = this.state.prevData;
      return a && i && i.length && (!o || !pf(o, i)) ? this.renderRectanglesWithAnimation() : this.renderRectanglesStatically(i);
    }
  }, {
    key: "renderBackground",
    value: function() {
      var n = this, i = this.props, a = i.data, o = i.dataKey, u = i.activeIndex, s = ce(this.props.background, !1);
      return a.map(function(c, f) {
        c.value;
        var l = c.background, h = cI(c, sI);
        if (!l)
          return null;
        var d = de(de(de(de(de({}, h), {}, {
          fill: "#eee"
        }, l), s), fc(n.props, c, f)), {}, {
          onAnimationStart: n.handleAnimationStart,
          onAnimationEnd: n.handleAnimationEnd,
          dataKey: o,
          index: f,
          className: "recharts-bar-background-rectangle"
        });
        return /* @__PURE__ */ E.createElement(wg, Oi({
          key: "background-bar-".concat(f),
          option: n.props.background,
          isActive: f === u
        }, d));
      });
    }
  }, {
    key: "renderErrorBar",
    value: function(n, i) {
      if (this.props.isAnimationActive && !this.state.isAnimationFinished)
        return null;
      var a = this.props, o = a.data, u = a.xAxis, s = a.yAxis, c = a.layout, f = a.children, l = Ke(f, ta);
      if (!l)
        return null;
      var h = c === "vertical" ? o[0].height / 2 : o[0].width / 2, d = function(p, m) {
        var w = Array.isArray(p.value) ? p.value[1] : p.value;
        return {
          x: p.x,
          y: p.y,
          value: w,
          errorVal: Xe(p, m)
        };
      }, g = {
        clipPath: n ? "url(#clipPath-".concat(i, ")") : null
      };
      return /* @__PURE__ */ E.createElement(Te, g, l.map(function(v) {
        return /* @__PURE__ */ E.cloneElement(v, {
          key: "error-bar-".concat(i, "-").concat(v.props.dataKey),
          data: o,
          xAxis: u,
          yAxis: s,
          layout: c,
          offset: h,
          dataPointFormatter: d
        });
      }));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.hide, a = n.data, o = n.className, u = n.xAxis, s = n.yAxis, c = n.left, f = n.top, l = n.width, h = n.height, d = n.isAnimationActive, g = n.background, v = n.id;
      if (i || !a || !a.length)
        return null;
      var p = this.state.isAnimationFinished, m = se("recharts-bar", o), w = u && u.allowDataOverflow, x = s && s.allowDataOverflow, _ = w || x, y = V(v) ? this.id : v;
      return /* @__PURE__ */ E.createElement(Te, {
        className: m
      }, w || x ? /* @__PURE__ */ E.createElement("defs", null, /* @__PURE__ */ E.createElement("clipPath", {
        id: "clipPath-".concat(y)
      }, /* @__PURE__ */ E.createElement("rect", {
        x: w ? c : c - l / 2,
        y: x ? f : f - h / 2,
        width: w ? l : l * 2,
        height: x ? h : h * 2
      }))) : null, /* @__PURE__ */ E.createElement(Te, {
        className: "recharts-bar-rectangles",
        clipPath: _ ? "url(#clipPath-".concat(y, ")") : null
      }, g ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(_, y), (!d || p) && Lt.renderCallByParent(this.props, a));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, i) {
      return n.animationId !== i.prevAnimationId ? {
        prevAnimationId: n.animationId,
        curData: n.data,
        prevData: i.curData
      } : n.data !== i.curData ? {
        curData: n.data
      } : null;
    }
  }]);
})(Wt);
v0 = Pn;
bt(Pn, "displayName", "Bar");
bt(Pn, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  legendType: "rect",
  minPointSize: 0,
  hide: !1,
  data: [],
  layout: "vertical",
  activeBar: !1,
  isAnimationActive: !zi.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease"
});
bt(Pn, "getComposedData", function(e) {
  var t = e.props, r = e.item, n = e.barPosition, i = e.bandSize, a = e.xAxis, o = e.yAxis, u = e.xAxisTicks, s = e.yAxisTicks, c = e.stackedData, f = e.dataStartIndex, l = e.displayedData, h = e.offset, d = ET(n, r);
  if (!d)
    return null;
  var g = t.layout, v = r.type.defaultProps, p = v !== void 0 ? de(de({}, v), r.props) : r.props, m = p.dataKey, w = p.children, x = p.minPointSize, _ = g === "horizontal" ? o : a, y = c ? _.scale.domain() : null, b = DT({
    numericAxis: _
  }), O = Ke(w, Km), S = l.map(function(A, C) {
    var T, P, j, I, M, R;
    c ? T = jT(c[f + C], y) : (T = Xe(A, m), Array.isArray(T) || (T = [b, T]));
    var N = uI(x, v0.defaultProps.minPointSize)(T[1], C);
    if (g === "horizontal") {
      var q, k = [o.scale(T[0]), o.scale(T[1])], W = k[0], H = k[1];
      P = uy({
        axis: a,
        ticks: u,
        bandSize: i,
        offset: d.offset,
        entry: A,
        index: C
      }), j = (q = H ?? W) !== null && q !== void 0 ? q : void 0, I = d.size;
      var F = W - H;
      if (M = Number.isNaN(F) ? 0 : F, R = {
        x: P,
        y: o.y,
        width: I,
        height: o.height
      }, Math.abs(N) > 0 && Math.abs(M) < Math.abs(N)) {
        var G = Ze(M || N) * (Math.abs(N) - Math.abs(M));
        j -= G, M += G;
      }
    } else {
      var oe = [a.scale(T[0]), a.scale(T[1])], pe = oe[0], $e = oe[1];
      if (P = pe, j = uy({
        axis: o,
        ticks: s,
        bandSize: i,
        offset: d.offset,
        entry: A,
        index: C
      }), I = $e - pe, M = d.size, R = {
        x: a.x,
        y: j,
        width: a.width,
        height: M
      }, Math.abs(N) > 0 && Math.abs(I) < Math.abs(N)) {
        var Et = Ze(I || N) * (Math.abs(N) - Math.abs(I));
        I += Et;
      }
    }
    return de(de(de({}, A), {}, {
      x: P,
      y: j,
      width: I,
      height: M,
      value: c ? T : T[1],
      payload: A,
      background: R
    }, O && O[C] && O[C].props), {}, {
      tooltipPayload: [Zb(r, A)],
      tooltipPosition: {
        x: P + I / 2,
        y: j + M / 2
      }
    });
  });
  return de({
    data: S,
    layout: g
  }, h);
});
function yn(e) {
  "@babel/helpers - typeof";
  return yn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, yn(e);
}
function mI(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Og(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, m0(n.key), n);
  }
}
function bI(e, t, r) {
  return t && Og(e.prototype, t), r && Og(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Sg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ze(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sg(Object(r), !0).forEach(function(n) {
      ia(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ia(e, t, r) {
  return t = m0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function m0(e) {
  var t = wI(e, "string");
  return yn(t) == "symbol" ? t : t + "";
}
function wI(e, t) {
  if (yn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (yn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var RR = function(t, r, n, i, a) {
  var o = t.width, u = t.height, s = t.layout, c = t.children, f = Object.keys(r), l = {
    left: n.left,
    leftMirror: n.left,
    right: o - n.right,
    rightMirror: o - n.right,
    top: n.top,
    topMirror: n.top,
    bottom: u - n.bottom,
    bottomMirror: u - n.bottom
  }, h = !!De(c, Pn);
  return f.reduce(function(d, g) {
    var v = r[g], p = v.orientation, m = v.domain, w = v.padding, x = w === void 0 ? {} : w, _ = v.mirror, y = v.reversed, b = "".concat(p).concat(_ ? "Mirror" : ""), O, S, A, C, T;
    if (v.type === "number" && (v.padding === "gap" || v.padding === "no-gap")) {
      var P = m[1] - m[0], j = 1 / 0, I = v.categoricalDomain.sort(qw);
      if (I.forEach(function(oe, pe) {
        pe > 0 && (j = Math.min((oe || 0) - (I[pe - 1] || 0), j));
      }), Number.isFinite(j)) {
        var M = j / P, R = v.layout === "vertical" ? n.height : n.width;
        if (v.padding === "gap" && (O = M * R / 2), v.padding === "no-gap") {
          var N = He(t.barCategoryGap, M * R), q = M * R / 2;
          O = q - N - (q - N) / R * N;
        }
      }
    }
    i === "xAxis" ? S = [n.left + (x.left || 0) + (O || 0), n.left + n.width - (x.right || 0) - (O || 0)] : i === "yAxis" ? S = s === "horizontal" ? [n.top + n.height - (x.bottom || 0), n.top + (x.top || 0)] : [n.top + (x.top || 0) + (O || 0), n.top + n.height - (x.bottom || 0) - (O || 0)] : S = v.range, y && (S = [S[1], S[0]]);
    var k = Kb(v, a, h), W = k.scale, H = k.realScaleType;
    W.domain(m).range(S), Xb(W);
    var F = Vb(W, ze(ze({}, v), {}, {
      realScaleType: H
    }));
    i === "xAxis" ? (T = p === "top" && !_ || p === "bottom" && _, A = n.left, C = l[b] - T * v.height) : i === "yAxis" && (T = p === "left" && !_ || p === "right" && _, A = l[b] - T * v.width, C = n.top);
    var G = ze(ze(ze({}, v), F), {}, {
      realScaleType: H,
      x: A,
      y: C,
      scale: W,
      width: i === "xAxis" ? n.width : v.width,
      height: i === "yAxis" ? n.height : v.height
    });
    return G.bandSize = li(G, F), !v.hide && i === "xAxis" ? l[b] += (T ? -1 : 1) * G.height : v.hide || (l[b] += (T ? -1 : 1) * G.width), ze(ze({}, d), {}, ia({}, g, G));
  }, {});
}, b0 = function(t, r) {
  var n = t.x, i = t.y, a = r.x, o = r.y;
  return {
    x: Math.min(n, a),
    y: Math.min(i, o),
    width: Math.abs(a - n),
    height: Math.abs(o - i)
  };
}, xI = function(t) {
  var r = t.x1, n = t.y1, i = t.x2, a = t.y2;
  return b0({
    x: r,
    y: n
  }, {
    x: i,
    y: a
  });
}, w0 = /* @__PURE__ */ (function() {
  function e(t) {
    mI(this, e), this.scale = t;
  }
  return bI(e, [{
    key: "domain",
    get: function() {
      return this.scale.domain;
    }
  }, {
    key: "range",
    get: function() {
      return this.scale.range;
    }
  }, {
    key: "rangeMin",
    get: function() {
      return this.range()[0];
    }
  }, {
    key: "rangeMax",
    get: function() {
      return this.range()[1];
    }
  }, {
    key: "bandwidth",
    get: function() {
      return this.scale.bandwidth;
    }
  }, {
    key: "apply",
    value: function(r) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.bandAware, a = n.position;
      if (r !== void 0) {
        if (a)
          switch (a) {
            case "start":
              return this.scale(r);
            case "middle": {
              var o = this.bandwidth ? this.bandwidth() / 2 : 0;
              return this.scale(r) + o;
            }
            case "end": {
              var u = this.bandwidth ? this.bandwidth() : 0;
              return this.scale(r) + u;
            }
            default:
              return this.scale(r);
          }
        if (i) {
          var s = this.bandwidth ? this.bandwidth() / 2 : 0;
          return this.scale(r) + s;
        }
        return this.scale(r);
      }
    }
  }, {
    key: "isInRange",
    value: function(r) {
      var n = this.range(), i = n[0], a = n[n.length - 1];
      return i <= a ? r >= i && r <= a : r >= a && r <= i;
    }
  }], [{
    key: "create",
    value: function(r) {
      return new e(r);
    }
  }]);
})();
ia(w0, "EPS", 1e-4);
var mf = function(t) {
  var r = Object.keys(t).reduce(function(n, i) {
    return ze(ze({}, n), {}, ia({}, i, w0.create(t[i])));
  }, {});
  return ze(ze({}, r), {}, {
    apply: function(i) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = a.bandAware, u = a.position;
      return VC(i, function(s, c) {
        return r[c].apply(s, {
          bandAware: o,
          position: u
        });
      });
    },
    isInRange: function(i) {
      return d0(i, function(a, o) {
        return r[o].isInRange(a);
      });
    }
  });
};
function _I(e) {
  return (e % 180 + 180) % 180;
}
var DR = function(t) {
  var r = t.width, n = t.height, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = _I(i), o = a * Math.PI / 180, u = Math.atan(n / r), s = o > u && o < Math.PI - u ? n / Math.sin(o) : r / Math.cos(o);
  return Math.abs(s);
}, tc, Ag;
function OI() {
  if (Ag) return tc;
  Ag = 1;
  var e = St(), t = _n(), r = Fi();
  function n(i) {
    return function(a, o, u) {
      var s = Object(a);
      if (!t(a)) {
        var c = e(o, 3);
        a = r(a), o = function(l) {
          return c(s[l], l, s);
        };
      }
      var f = i(a, o, u);
      return f > -1 ? s[c ? a[f] : f] : void 0;
    };
  }
  return tc = n, tc;
}
var rc, Pg;
function SI() {
  if (Pg) return rc;
  Pg = 1;
  var e = l0();
  function t(r) {
    var n = e(r), i = n % 1;
    return n === n ? i ? n - i : n : 0;
  }
  return rc = t, rc;
}
var nc, Tg;
function AI() {
  if (Tg) return nc;
  Tg = 1;
  var e = $m(), t = St(), r = SI(), n = Math.max;
  function i(a, o, u) {
    var s = a == null ? 0 : a.length;
    if (!s)
      return -1;
    var c = u == null ? 0 : r(u);
    return c < 0 && (c = n(s + c, 0)), e(a, t(o, 3), c);
  }
  return nc = i, nc;
}
var ic, Eg;
function PI() {
  if (Eg) return ic;
  Eg = 1;
  var e = OI(), t = AI(), r = e(t);
  return ic = r, ic;
}
var TI = PI();
const EI = /* @__PURE__ */ ae(TI);
var jI = Vg();
const MI = /* @__PURE__ */ ae(jI);
var CI = MI(function(e) {
  return {
    x: e.left,
    y: e.top,
    width: e.width,
    height: e.height
  };
}, function(e) {
  return ["l", e.left, "t", e.top, "w", e.width, "h", e.height].join("");
}), bf = /* @__PURE__ */ _t(void 0), wf = /* @__PURE__ */ _t(void 0), x0 = /* @__PURE__ */ _t(void 0), _0 = /* @__PURE__ */ _t({}), O0 = /* @__PURE__ */ _t(void 0), S0 = /* @__PURE__ */ _t(0), A0 = /* @__PURE__ */ _t(0), jg = function(t) {
  var r = t.state, n = r.xAxisMap, i = r.yAxisMap, a = r.offset, o = t.clipPathId, u = t.children, s = t.width, c = t.height, f = CI(a);
  return /* @__PURE__ */ E.createElement(bf.Provider, {
    value: n
  }, /* @__PURE__ */ E.createElement(wf.Provider, {
    value: i
  }, /* @__PURE__ */ E.createElement(_0.Provider, {
    value: a
  }, /* @__PURE__ */ E.createElement(x0.Provider, {
    value: f
  }, /* @__PURE__ */ E.createElement(O0.Provider, {
    value: o
  }, /* @__PURE__ */ E.createElement(S0.Provider, {
    value: c
  }, /* @__PURE__ */ E.createElement(A0.Provider, {
    value: s
  }, u)))))));
}, II = function() {
  return rt(O0);
}, $I = function(t) {
  var r = rt(bf);
  r == null && Ut();
  var n = r[t];
  return n == null && Ut(), n;
}, NR = function() {
  var t = rt(bf);
  return mt(t);
}, qR = function() {
  var t = rt(wf), r = EI(t, function(n) {
    return d0(n.domain, Number.isFinite);
  });
  return r || mt(t);
}, RI = function(t) {
  var r = rt(wf);
  r == null && Ut();
  var n = r[t];
  return n == null && Ut(), n;
}, DI = function() {
  var t = rt(x0);
  return t;
}, kR = function() {
  return rt(_0);
}, LR = function() {
  return rt(A0);
}, BR = function() {
  return rt(S0);
};
function vr(e) {
  "@babel/helpers - typeof";
  return vr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, vr(e);
}
function NI(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function qI(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, T0(n.key), n);
  }
}
function kI(e, t, r) {
  return t && qI(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function LI(e, t, r) {
  return t = Ai(t), BI(e, P0() ? Reflect.construct(t, r || [], Ai(e).constructor) : t.apply(e, r));
}
function BI(e, t) {
  if (t && (vr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return FI(e);
}
function FI(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function P0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (P0 = function() {
    return !!e;
  })();
}
function Ai(e) {
  return Ai = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ai(e);
}
function UI(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && cl(e, t);
}
function cl(e, t) {
  return cl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, cl(e, t);
}
function Mg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Cg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Mg(Object(r), !0).forEach(function(n) {
      xf(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Mg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function xf(e, t, r) {
  return t = T0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function T0(e) {
  var t = WI(e, "string");
  return vr(t) == "symbol" ? t : t + "";
}
function WI(e, t) {
  if (vr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (vr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function zI(e, t) {
  return XI(e) || KI(e, t) || GI(e, t) || HI();
}
function HI() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function GI(e, t) {
  if (e) {
    if (typeof e == "string") return Ig(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ig(e, t);
  }
}
function Ig(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function KI(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], s = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, i = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function XI(e) {
  if (Array.isArray(e)) return e;
}
function ll() {
  return ll = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ll.apply(this, arguments);
}
var VI = function(t, r) {
  var n;
  return /* @__PURE__ */ E.isValidElement(t) ? n = /* @__PURE__ */ E.cloneElement(t, r) : J(t) ? n = t(r) : n = /* @__PURE__ */ E.createElement("line", ll({}, r, {
    className: "recharts-reference-line-line"
  })), n;
}, YI = function(t, r, n, i, a, o, u, s, c) {
  var f = a.x, l = a.y, h = a.width, d = a.height;
  if (n) {
    var g = c.y, v = t.y.apply(g, {
      position: o
    });
    if (et(c, "discard") && !t.y.isInRange(v))
      return null;
    var p = [{
      x: f + h,
      y: v
    }, {
      x: f,
      y: v
    }];
    return s === "left" ? p.reverse() : p;
  }
  if (r) {
    var m = c.x, w = t.x.apply(m, {
      position: o
    });
    if (et(c, "discard") && !t.x.isInRange(w))
      return null;
    var x = [{
      x: w,
      y: l + d
    }, {
      x: w,
      y: l
    }];
    return u === "top" ? x.reverse() : x;
  }
  if (i) {
    var _ = c.segment, y = _.map(function(b) {
      return t.apply(b, {
        position: o
      });
    });
    return et(c, "discard") && HC(y, function(b) {
      return !t.isInRange(b);
    }) ? null : y;
  }
  return null;
};
function ZI(e) {
  var t = e.x, r = e.y, n = e.segment, i = e.xAxisId, a = e.yAxisId, o = e.shape, u = e.className, s = e.alwaysShow, c = II(), f = $I(i), l = RI(a), h = DI();
  if (!c || !h)
    return null;
  qt(s === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var d = mf({
    x: f.scale,
    y: l.scale
  }), g = xe(t), v = xe(r), p = n && n.length === 2, m = YI(d, g, v, p, h, e.position, f.orientation, l.orientation, e);
  if (!m)
    return null;
  var w = zI(m, 2), x = w[0], _ = x.x, y = x.y, b = w[1], O = b.x, S = b.y, A = et(e, "hidden") ? "url(#".concat(c, ")") : void 0, C = Cg(Cg({
    clipPath: A
  }, ce(e, !0)), {}, {
    x1: _,
    y1: y,
    x2: O,
    y2: S
  });
  return /* @__PURE__ */ E.createElement(Te, {
    className: se("recharts-reference-line", u)
  }, VI(o, C), Ee.renderCallByParent(e, xI({
    x1: _,
    y1: y,
    x2: O,
    y2: S
  })));
}
var _f = /* @__PURE__ */ (function(e) {
  function t() {
    return NI(this, t), LI(this, t, arguments);
  }
  return UI(t, e), kI(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ E.createElement(ZI, this.props);
    }
  }]);
})(E.Component);
xf(_f, "displayName", "ReferenceLine");
xf(_f, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  fill: "none",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1,
  position: "middle"
});
function fl() {
  return fl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, fl.apply(this, arguments);
}
function yr(e) {
  "@babel/helpers - typeof";
  return yr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, yr(e);
}
function $g(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Rg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $g(Object(r), !0).forEach(function(n) {
      aa(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $g(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function JI(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function QI(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, j0(n.key), n);
  }
}
function e$(e, t, r) {
  return t && QI(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function t$(e, t, r) {
  return t = Pi(t), r$(e, E0() ? Reflect.construct(t, r || [], Pi(e).constructor) : t.apply(e, r));
}
function r$(e, t) {
  if (t && (yr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return n$(e);
}
function n$(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function E0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (E0 = function() {
    return !!e;
  })();
}
function Pi(e) {
  return Pi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Pi(e);
}
function i$(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && hl(e, t);
}
function hl(e, t) {
  return hl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, hl(e, t);
}
function aa(e, t, r) {
  return t = j0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function j0(e) {
  var t = a$(e, "string");
  return yr(t) == "symbol" ? t : t + "";
}
function a$(e, t) {
  if (yr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (yr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var o$ = function(t) {
  var r = t.x, n = t.y, i = t.xAxis, a = t.yAxis, o = mf({
    x: i.scale,
    y: a.scale
  }), u = o.apply({
    x: r,
    y: n
  }, {
    bandAware: !0
  });
  return et(t, "discard") && !o.isInRange(u) ? null : u;
}, oa = /* @__PURE__ */ (function(e) {
  function t() {
    return JI(this, t), t$(this, t, arguments);
  }
  return i$(t, e), e$(t, [{
    key: "render",
    value: function() {
      var n = this.props, i = n.x, a = n.y, o = n.r, u = n.alwaysShow, s = n.clipPathId, c = xe(i), f = xe(a);
      if (qt(u === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !c || !f)
        return null;
      var l = o$(this.props);
      if (!l)
        return null;
      var h = l.x, d = l.y, g = this.props, v = g.shape, p = g.className, m = et(this.props, "hidden") ? "url(#".concat(s, ")") : void 0, w = Rg(Rg({
        clipPath: m
      }, ce(this.props, !0)), {}, {
        cx: h,
        cy: d
      });
      return /* @__PURE__ */ E.createElement(Te, {
        className: se("recharts-reference-dot", p)
      }, t.renderDot(v, w), Ee.renderCallByParent(this.props, {
        x: h - o,
        y: d - o,
        width: 2 * o,
        height: 2 * o
      }));
    }
  }]);
})(E.Component);
aa(oa, "displayName", "ReferenceDot");
aa(oa, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#fff",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1
});
aa(oa, "renderDot", function(e, t) {
  var r;
  return /* @__PURE__ */ E.isValidElement(e) ? r = /* @__PURE__ */ E.cloneElement(e, t) : J(e) ? r = e(t) : r = /* @__PURE__ */ E.createElement(c0, fl({}, t, {
    cx: t.cx,
    cy: t.cy,
    className: "recharts-reference-dot-dot"
  })), r;
});
function pl() {
  return pl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, pl.apply(this, arguments);
}
function gr(e) {
  "@babel/helpers - typeof";
  return gr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, gr(e);
}
function Dg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ng(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Dg(Object(r), !0).forEach(function(n) {
      ua(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Dg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function u$(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function s$(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, C0(n.key), n);
  }
}
function c$(e, t, r) {
  return t && s$(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function l$(e, t, r) {
  return t = Ti(t), f$(e, M0() ? Reflect.construct(t, r || [], Ti(e).constructor) : t.apply(e, r));
}
function f$(e, t) {
  if (t && (gr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return h$(e);
}
function h$(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function M0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (M0 = function() {
    return !!e;
  })();
}
function Ti(e) {
  return Ti = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ti(e);
}
function p$(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && dl(e, t);
}
function dl(e, t) {
  return dl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, dl(e, t);
}
function ua(e, t, r) {
  return t = C0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function C0(e) {
  var t = d$(e, "string");
  return gr(t) == "symbol" ? t : t + "";
}
function d$(e, t) {
  if (gr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (gr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var v$ = function(t, r, n, i, a) {
  var o = a.x1, u = a.x2, s = a.y1, c = a.y2, f = a.xAxis, l = a.yAxis;
  if (!f || !l) return null;
  var h = mf({
    x: f.scale,
    y: l.scale
  }), d = {
    x: t ? h.x.apply(o, {
      position: "start"
    }) : h.x.rangeMin,
    y: n ? h.y.apply(s, {
      position: "start"
    }) : h.y.rangeMin
  }, g = {
    x: r ? h.x.apply(u, {
      position: "end"
    }) : h.x.rangeMax,
    y: i ? h.y.apply(c, {
      position: "end"
    }) : h.y.rangeMax
  };
  return et(a, "discard") && (!h.isInRange(d) || !h.isInRange(g)) ? null : b0(d, g);
}, sa = /* @__PURE__ */ (function(e) {
  function t() {
    return u$(this, t), l$(this, t, arguments);
  }
  return p$(t, e), c$(t, [{
    key: "render",
    value: function() {
      var n = this.props, i = n.x1, a = n.x2, o = n.y1, u = n.y2, s = n.className, c = n.alwaysShow, f = n.clipPathId;
      qt(c === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var l = xe(i), h = xe(a), d = xe(o), g = xe(u), v = this.props.shape;
      if (!l && !h && !d && !g && !v)
        return null;
      var p = v$(l, h, d, g, this.props);
      if (!p && !v)
        return null;
      var m = et(this.props, "hidden") ? "url(#".concat(f, ")") : void 0;
      return /* @__PURE__ */ E.createElement(Te, {
        className: se("recharts-reference-area", s)
      }, t.renderRect(v, Ng(Ng({
        clipPath: m
      }, ce(this.props, !0)), p)), Ee.renderCallByParent(this.props, p));
    }
  }]);
})(E.Component);
ua(sa, "displayName", "ReferenceArea");
ua(sa, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#ccc",
  fillOpacity: 0.5,
  stroke: "none",
  strokeWidth: 1
});
ua(sa, "renderRect", function(e, t) {
  var r;
  return /* @__PURE__ */ E.isValidElement(e) ? r = /* @__PURE__ */ E.cloneElement(e, t) : J(e) ? r = e(t) : r = /* @__PURE__ */ E.createElement(gf, pl({}, t, {
    className: "recharts-reference-area-rect"
  })), r;
});
function qg(e) {
  return b$(e) || m$(e) || g$(e) || y$();
}
function y$() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function g$(e, t) {
  if (e) {
    if (typeof e == "string") return vl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return vl(e, t);
  }
}
function m$(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function b$(e) {
  if (Array.isArray(e)) return vl(e);
}
function vl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var yl = function(t, r, n, i, a) {
  var o = Ke(t, _f), u = Ke(t, oa), s = [].concat(qg(o), qg(u)), c = Ke(t, sa), f = "".concat(i, "Id"), l = i[0], h = r;
  if (s.length && (h = s.reduce(function(v, p) {
    if (p.props[f] === n && et(p.props, "extendDomain") && B(p.props[l])) {
      var m = p.props[l];
      return [Math.min(v[0], m), Math.max(v[1], m)];
    }
    return v;
  }, h)), c.length) {
    var d = "".concat(l, "1"), g = "".concat(l, "2");
    h = c.reduce(function(v, p) {
      if (p.props[f] === n && et(p.props, "extendDomain") && B(p.props[d]) && B(p.props[g])) {
        var m = p.props[d], w = p.props[g];
        return [Math.min(v[0], m, w), Math.max(v[1], m, w)];
      }
      return v;
    }, h);
  }
  return a && a.length && (h = a.reduce(function(v, p) {
    return B(p) ? [Math.min(v[0], p), Math.max(v[1], p)] : v;
  }, h)), h;
}, ac = { exports: {} }, kg;
function w$() {
  return kg || (kg = 1, (function(e) {
    var t = Object.prototype.hasOwnProperty, r = "~";
    function n() {
    }
    Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = !1));
    function i(s, c, f) {
      this.fn = s, this.context = c, this.once = f || !1;
    }
    function a(s, c, f, l, h) {
      if (typeof f != "function")
        throw new TypeError("The listener must be a function");
      var d = new i(f, l || s, h), g = r ? r + c : c;
      return s._events[g] ? s._events[g].fn ? s._events[g] = [s._events[g], d] : s._events[g].push(d) : (s._events[g] = d, s._eventsCount++), s;
    }
    function o(s, c) {
      --s._eventsCount === 0 ? s._events = new n() : delete s._events[c];
    }
    function u() {
      this._events = new n(), this._eventsCount = 0;
    }
    u.prototype.eventNames = function() {
      var c = [], f, l;
      if (this._eventsCount === 0) return c;
      for (l in f = this._events)
        t.call(f, l) && c.push(r ? l.slice(1) : l);
      return Object.getOwnPropertySymbols ? c.concat(Object.getOwnPropertySymbols(f)) : c;
    }, u.prototype.listeners = function(c) {
      var f = r ? r + c : c, l = this._events[f];
      if (!l) return [];
      if (l.fn) return [l.fn];
      for (var h = 0, d = l.length, g = new Array(d); h < d; h++)
        g[h] = l[h].fn;
      return g;
    }, u.prototype.listenerCount = function(c) {
      var f = r ? r + c : c, l = this._events[f];
      return l ? l.fn ? 1 : l.length : 0;
    }, u.prototype.emit = function(c, f, l, h, d, g) {
      var v = r ? r + c : c;
      if (!this._events[v]) return !1;
      var p = this._events[v], m = arguments.length, w, x;
      if (p.fn) {
        switch (p.once && this.removeListener(c, p.fn, void 0, !0), m) {
          case 1:
            return p.fn.call(p.context), !0;
          case 2:
            return p.fn.call(p.context, f), !0;
          case 3:
            return p.fn.call(p.context, f, l), !0;
          case 4:
            return p.fn.call(p.context, f, l, h), !0;
          case 5:
            return p.fn.call(p.context, f, l, h, d), !0;
          case 6:
            return p.fn.call(p.context, f, l, h, d, g), !0;
        }
        for (x = 1, w = new Array(m - 1); x < m; x++)
          w[x - 1] = arguments[x];
        p.fn.apply(p.context, w);
      } else {
        var _ = p.length, y;
        for (x = 0; x < _; x++)
          switch (p[x].once && this.removeListener(c, p[x].fn, void 0, !0), m) {
            case 1:
              p[x].fn.call(p[x].context);
              break;
            case 2:
              p[x].fn.call(p[x].context, f);
              break;
            case 3:
              p[x].fn.call(p[x].context, f, l);
              break;
            case 4:
              p[x].fn.call(p[x].context, f, l, h);
              break;
            default:
              if (!w) for (y = 1, w = new Array(m - 1); y < m; y++)
                w[y - 1] = arguments[y];
              p[x].fn.apply(p[x].context, w);
          }
      }
      return !0;
    }, u.prototype.on = function(c, f, l) {
      return a(this, c, f, l, !1);
    }, u.prototype.once = function(c, f, l) {
      return a(this, c, f, l, !0);
    }, u.prototype.removeListener = function(c, f, l, h) {
      var d = r ? r + c : c;
      if (!this._events[d]) return this;
      if (!f)
        return o(this, d), this;
      var g = this._events[d];
      if (g.fn)
        g.fn === f && (!h || g.once) && (!l || g.context === l) && o(this, d);
      else {
        for (var v = 0, p = [], m = g.length; v < m; v++)
          (g[v].fn !== f || h && !g[v].once || l && g[v].context !== l) && p.push(g[v]);
        p.length ? this._events[d] = p.length === 1 ? p[0] : p : o(this, d);
      }
      return this;
    }, u.prototype.removeAllListeners = function(c) {
      var f;
      return c ? (f = r ? r + c : c, this._events[f] && o(this, f)) : (this._events = new n(), this._eventsCount = 0), this;
    }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = r, u.EventEmitter = u, e.exports = u;
  })(ac)), ac.exports;
}
var x$ = w$();
const _$ = /* @__PURE__ */ ae(x$);
var oc = new _$(), uc = "recharts.syncMouseEvents";
function gn(e) {
  "@babel/helpers - typeof";
  return gn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, gn(e);
}
function O$(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function S$(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, I0(n.key), n);
  }
}
function A$(e, t, r) {
  return t && S$(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function sc(e, t, r) {
  return t = I0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function I0(e) {
  var t = P$(e, "string");
  return gn(t) == "symbol" ? t : t + "";
}
function P$(e, t) {
  if (gn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (gn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var T$ = /* @__PURE__ */ (function() {
  function e() {
    O$(this, e), sc(this, "activeIndex", 0), sc(this, "coordinateList", []), sc(this, "layout", "horizontal");
  }
  return A$(e, [{
    key: "setDetails",
    value: function(r) {
      var n, i = r.coordinateList, a = i === void 0 ? null : i, o = r.container, u = o === void 0 ? null : o, s = r.layout, c = s === void 0 ? null : s, f = r.offset, l = f === void 0 ? null : f, h = r.mouseHandlerCallback, d = h === void 0 ? null : h;
      this.coordinateList = (n = a ?? this.coordinateList) !== null && n !== void 0 ? n : [], this.container = u ?? this.container, this.layout = c ?? this.layout, this.offset = l ?? this.offset, this.mouseHandlerCallback = d ?? this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1);
    }
  }, {
    key: "focus",
    value: function() {
      this.spoofMouse();
    }
  }, {
    key: "keyboardEvent",
    value: function(r) {
      if (this.coordinateList.length !== 0)
        switch (r.key) {
          case "ArrowRight": {
            if (this.layout !== "horizontal")
              return;
            this.activeIndex = Math.min(this.activeIndex + 1, this.coordinateList.length - 1), this.spoofMouse();
            break;
          }
          case "ArrowLeft": {
            if (this.layout !== "horizontal")
              return;
            this.activeIndex = Math.max(this.activeIndex - 1, 0), this.spoofMouse();
            break;
          }
        }
    }
  }, {
    key: "setIndex",
    value: function(r) {
      this.activeIndex = r;
    }
  }, {
    key: "spoofMouse",
    value: function() {
      var r, n;
      if (this.layout === "horizontal" && this.coordinateList.length !== 0) {
        var i = this.container.getBoundingClientRect(), a = i.x, o = i.y, u = i.height, s = this.coordinateList[this.activeIndex].coordinate, c = ((r = window) === null || r === void 0 ? void 0 : r.scrollX) || 0, f = ((n = window) === null || n === void 0 ? void 0 : n.scrollY) || 0, l = a + s + c, h = o + this.offset.top + u / 2 + f;
        this.mouseHandlerCallback({
          pageX: l,
          pageY: h
        });
      }
    }
  }]);
})();
function E$(e, t, r) {
  if (r === "number" && t === !0 && Array.isArray(e)) {
    var n = e?.[0], i = e?.[1];
    if (n && i && B(n) && B(i))
      return !0;
  }
  return !1;
}
function j$(e, t, r, n) {
  var i = n / 2;
  return {
    stroke: "none",
    fill: "#ccc",
    x: e === "horizontal" ? t.x - i : r.left + 0.5,
    y: e === "horizontal" ? r.top + 0.5 : t.y - i,
    width: e === "horizontal" ? n : r.width - 1,
    height: e === "horizontal" ? r.height - 1 : n
  };
}
function $0(e) {
  var t = e.cx, r = e.cy, n = e.radius, i = e.startAngle, a = e.endAngle, o = Pe(t, r, n, i), u = Pe(t, r, n, a);
  return {
    points: [o, u],
    cx: t,
    cy: r,
    radius: n,
    startAngle: i,
    endAngle: a
  };
}
function M$(e, t, r) {
  var n, i, a, o;
  if (e === "horizontal")
    n = t.x, a = n, i = r.top, o = r.top + r.height;
  else if (e === "vertical")
    i = t.y, o = i, n = r.left, a = r.left + r.width;
  else if (t.cx != null && t.cy != null)
    if (e === "centric") {
      var u = t.cx, s = t.cy, c = t.innerRadius, f = t.outerRadius, l = t.angle, h = Pe(u, s, c, l), d = Pe(u, s, f, l);
      n = h.x, i = h.y, a = d.x, o = d.y;
    } else
      return $0(t);
  return [{
    x: n,
    y: i
  }, {
    x: a,
    y: o
  }];
}
function mn(e) {
  "@babel/helpers - typeof";
  return mn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, mn(e);
}
function Lg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function kn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Lg(Object(r), !0).forEach(function(n) {
      C$(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Lg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function C$(e, t, r) {
  return t = I$(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function I$(e) {
  var t = $$(e, "string");
  return mn(t) == "symbol" ? t : t + "";
}
function $$(e, t) {
  if (mn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (mn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function R$(e) {
  var t, r, n = e.element, i = e.tooltipEventType, a = e.isActive, o = e.activeCoordinate, u = e.activePayload, s = e.offset, c = e.activeTooltipIndex, f = e.tooltipAxisBandSize, l = e.layout, h = e.chartName, d = (t = n.props.cursor) !== null && t !== void 0 ? t : (r = n.type.defaultProps) === null || r === void 0 ? void 0 : r.cursor;
  if (!n || !d || !a || !o || h !== "ScatterChart" && i !== "axis")
    return null;
  var g, v = Sy;
  if (h === "ScatterChart")
    g = o, v = HM;
  else if (h === "BarChart")
    g = j$(l, o, s, f), v = gf;
  else if (l === "radial") {
    var p = $0(o), m = p.cx, w = p.cy, x = p.radius, _ = p.startAngle, y = p.endAngle;
    g = {
      cx: m,
      cy: w,
      startAngle: _,
      endAngle: y,
      innerRadius: x,
      outerRadius: x
    }, v = t0;
  } else
    g = {
      points: M$(l, o, s)
    }, v = Sy;
  var b = kn(kn(kn(kn({
    stroke: "#ccc",
    pointerEvents: "none"
  }, s), g), ce(d, !1)), {}, {
    payload: u,
    payloadIndex: c,
    className: se("recharts-tooltip-cursor", d.className)
  });
  return /* @__PURE__ */ Ge(d) ? /* @__PURE__ */ be(d, b) : /* @__PURE__ */ ji(v, b);
}
var D$ = ["item"], N$ = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
function mr(e) {
  "@babel/helpers - typeof";
  return mr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, mr(e);
}
function Qt() {
  return Qt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Qt.apply(this, arguments);
}
function Bg(e, t) {
  return L$(e) || k$(e, t) || D0(e, t) || q$();
}
function q$() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function k$(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], s = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, i = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function L$(e) {
  if (Array.isArray(e)) return e;
}
function Fg(e, t) {
  if (e == null) return {};
  var r = B$(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function B$(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function F$(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function U$(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, N0(n.key), n);
  }
}
function W$(e, t, r) {
  return t && U$(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function z$(e, t, r) {
  return t = Ei(t), H$(e, R0() ? Reflect.construct(t, r || [], Ei(e).constructor) : t.apply(e, r));
}
function H$(e, t) {
  if (t && (mr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return G$(e);
}
function G$(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function R0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (R0 = function() {
    return !!e;
  })();
}
function Ei(e) {
  return Ei = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ei(e);
}
function K$(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && gl(e, t);
}
function gl(e, t) {
  return gl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, gl(e, t);
}
function br(e) {
  return Y$(e) || V$(e) || D0(e) || X$();
}
function X$() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function D0(e, t) {
  if (e) {
    if (typeof e == "string") return ml(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ml(e, t);
  }
}
function V$(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Y$(e) {
  if (Array.isArray(e)) return ml(e);
}
function ml(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Ug(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function $(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ug(Object(r), !0).forEach(function(n) {
      z(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ug(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function z(e, t, r) {
  return t = N0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function N0(e) {
  var t = Z$(e, "string");
  return mr(t) == "symbol" ? t : t + "";
}
function Z$(e, t) {
  if (mr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (mr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var J$ = {
  xAxis: ["bottom", "top"],
  yAxis: ["left", "right"]
}, Q$ = {
  width: "100%",
  height: "100%"
}, q0 = {
  x: 0,
  y: 0
};
function Ln(e) {
  return e;
}
var eR = function(t, r) {
  return r === "horizontal" ? t.x : r === "vertical" ? t.y : r === "centric" ? t.angle : t.radius;
}, tR = function(t, r, n, i) {
  var a = r.find(function(f) {
    return f && f.index === n;
  });
  if (a) {
    if (t === "horizontal")
      return {
        x: a.coordinate,
        y: i.y
      };
    if (t === "vertical")
      return {
        x: i.x,
        y: a.coordinate
      };
    if (t === "centric") {
      var o = a.coordinate, u = i.radius;
      return $($($({}, i), Pe(i.cx, i.cy, u, o)), {}, {
        angle: o,
        radius: u
      });
    }
    var s = a.coordinate, c = i.angle;
    return $($($({}, i), Pe(i.cx, i.cy, s, c)), {}, {
      angle: c,
      radius: s
    });
  }
  return q0;
}, ca = function(t, r) {
  var n = r.graphicalItems, i = r.dataStartIndex, a = r.dataEndIndex, o = (n ?? []).reduce(function(u, s) {
    var c = s.props.data;
    return c && c.length ? [].concat(br(u), br(c)) : u;
  }, []);
  return o.length > 0 ? o : t && t.length && B(i) && B(a) ? t.slice(i, a + 1) : [];
};
function k0(e) {
  return e === "number" ? [0, "auto"] : void 0;
}
var bl = function(t, r, n, i) {
  var a = t.graphicalItems, o = t.tooltipAxis, u = ca(r, t);
  return n < 0 || !a || !a.length || n >= u.length ? null : a.reduce(function(s, c) {
    var f, l = (f = c.props.data) !== null && f !== void 0 ? f : r;
    l && t.dataStartIndex + t.dataEndIndex !== 0 && // https://github.com/recharts/recharts/issues/4717
    // The data is sliced only when the active index is within the start/end index range.
    t.dataEndIndex - t.dataStartIndex >= n && (l = l.slice(t.dataStartIndex, t.dataEndIndex + 1));
    var h;
    if (o.dataKey && !o.allowDuplicatedCategory) {
      var d = l === void 0 ? u : l;
      h = Fn(d, o.dataKey, i);
    } else
      h = l && l[n] || u[n];
    return h ? [].concat(br(s), [Zb(c, h)]) : s;
  }, []);
}, Wg = function(t, r, n, i) {
  var a = i || {
    x: t.chartX,
    y: t.chartY
  }, o = eR(a, n), u = t.orderedTooltipTicks, s = t.tooltipAxis, c = t.tooltipTicks, f = _T(o, u, c, s);
  if (f >= 0 && c) {
    var l = c[f] && c[f].value, h = bl(t, r, f, l), d = tR(n, u, f, a);
    return {
      activeTooltipIndex: f,
      activeLabel: l,
      activePayload: h,
      activeCoordinate: d
    };
  }
  return null;
}, rR = function(t, r) {
  var n = r.axes, i = r.graphicalItems, a = r.axisType, o = r.axisIdKey, u = r.stackGroups, s = r.dataStartIndex, c = r.dataEndIndex, f = t.layout, l = t.children, h = t.stackOffset, d = Gb(f, a);
  return n.reduce(function(g, v) {
    var p, m = v.type.defaultProps !== void 0 ? $($({}, v.type.defaultProps), v.props) : v.props, w = m.type, x = m.dataKey, _ = m.allowDataOverflow, y = m.allowDuplicatedCategory, b = m.scale, O = m.ticks, S = m.includeHidden, A = m[o];
    if (g[A])
      return g;
    var C = ca(t.data, {
      graphicalItems: i.filter(function(F) {
        var G, oe = o in F.props ? F.props[o] : (G = F.type.defaultProps) === null || G === void 0 ? void 0 : G[o];
        return oe === A;
      }),
      dataStartIndex: s,
      dataEndIndex: c
    }), T = C.length, P, j, I;
    E$(m.domain, _, w) && (P = zc(m.domain, null, _), d && (w === "number" || b !== "auto") && (I = Lr(C, x, "category")));
    var M = k0(w);
    if (!P || P.length === 0) {
      var R, N = (R = m.domain) !== null && R !== void 0 ? R : M;
      if (x) {
        if (P = Lr(C, x, w), w === "category" && d) {
          var q = Nw(P);
          y && q ? (j = P, P = wi(0, T)) : y || (P = ly(N, P, v).reduce(function(F, G) {
            return F.indexOf(G) >= 0 ? F : [].concat(br(F), [G]);
          }, []));
        } else if (w === "category")
          y ? P = P.filter(function(F) {
            return F !== "" && !V(F);
          }) : P = ly(N, P, v).reduce(function(F, G) {
            return F.indexOf(G) >= 0 || G === "" || V(G) ? F : [].concat(br(F), [G]);
          }, []);
        else if (w === "number") {
          var k = TT(C, i.filter(function(F) {
            var G, oe, pe = o in F.props ? F.props[o] : (G = F.type.defaultProps) === null || G === void 0 ? void 0 : G[o], $e = "hide" in F.props ? F.props.hide : (oe = F.type.defaultProps) === null || oe === void 0 ? void 0 : oe.hide;
            return pe === A && (S || !$e);
          }), x, a, f);
          k && (P = k);
        }
        d && (w === "number" || b !== "auto") && (I = Lr(C, x, "category"));
      } else d ? P = wi(0, T) : u && u[A] && u[A].hasStack && w === "number" ? P = h === "expand" ? [0, 1] : Yb(u[A].stackGroups, s, c) : P = Hb(C, i.filter(function(F) {
        var G = o in F.props ? F.props[o] : F.type.defaultProps[o], oe = "hide" in F.props ? F.props.hide : F.type.defaultProps.hide;
        return G === A && (S || !oe);
      }), w, f, !0);
      if (w === "number")
        P = yl(l, P, A, a, O), N && (P = zc(N, P, _));
      else if (w === "category" && N) {
        var W = N, H = P.every(function(F) {
          return W.indexOf(F) >= 0;
        });
        H && (P = W);
      }
    }
    return $($({}, g), {}, z({}, A, $($({}, m), {}, {
      axisType: a,
      domain: P,
      categoricalDomain: I,
      duplicateDomain: j,
      originalDomain: (p = m.domain) !== null && p !== void 0 ? p : M,
      isCategorical: d,
      layout: f
    })));
  }, {});
}, nR = function(t, r) {
  var n = r.graphicalItems, i = r.Axis, a = r.axisType, o = r.axisIdKey, u = r.stackGroups, s = r.dataStartIndex, c = r.dataEndIndex, f = t.layout, l = t.children, h = ca(t.data, {
    graphicalItems: n,
    dataStartIndex: s,
    dataEndIndex: c
  }), d = h.length, g = Gb(f, a), v = -1;
  return n.reduce(function(p, m) {
    var w = m.type.defaultProps !== void 0 ? $($({}, m.type.defaultProps), m.props) : m.props, x = w[o], _ = k0("number");
    if (!p[x]) {
      v++;
      var y;
      return g ? y = wi(0, d) : u && u[x] && u[x].hasStack ? (y = Yb(u[x].stackGroups, s, c), y = yl(l, y, x, a)) : (y = zc(_, Hb(h, n.filter(function(b) {
        var O, S, A = o in b.props ? b.props[o] : (O = b.type.defaultProps) === null || O === void 0 ? void 0 : O[o], C = "hide" in b.props ? b.props.hide : (S = b.type.defaultProps) === null || S === void 0 ? void 0 : S.hide;
        return A === x && !C;
      }), "number", f), i.defaultProps.allowDataOverflow), y = yl(l, y, x, a)), $($({}, p), {}, z({}, x, $($({
        axisType: a
      }, i.defaultProps), {}, {
        hide: !0,
        orientation: Qe(J$, "".concat(a, ".").concat(v % 2), null),
        domain: y,
        originalDomain: _,
        isCategorical: g,
        layout: f
        // specify scale when no Axis
        // scale: isCategorical ? 'band' : 'linear',
      })));
    }
    return p;
  }, {});
}, iR = function(t, r) {
  var n = r.axisType, i = n === void 0 ? "xAxis" : n, a = r.AxisComp, o = r.graphicalItems, u = r.stackGroups, s = r.dataStartIndex, c = r.dataEndIndex, f = t.children, l = "".concat(i, "Id"), h = Ke(f, a), d = {};
  return h && h.length ? d = rR(t, {
    axes: h,
    graphicalItems: o,
    axisType: i,
    axisIdKey: l,
    stackGroups: u,
    dataStartIndex: s,
    dataEndIndex: c
  }) : o && o.length && (d = nR(t, {
    Axis: a,
    graphicalItems: o,
    axisType: i,
    axisIdKey: l,
    stackGroups: u,
    dataStartIndex: s,
    dataEndIndex: c
  })), d;
}, aR = function(t) {
  var r = mt(t), n = Nr(r, !1, !0);
  return {
    tooltipTicks: n,
    orderedTooltipTicks: zl(n, function(i) {
      return i.coordinate;
    }),
    tooltipAxis: r,
    tooltipAxisBandSize: li(r, n)
  };
}, zg = function(t) {
  var r = t.children, n = t.defaultShowTooltip, i = De(r, pr), a = 0, o = 0;
  return t.data && t.data.length !== 0 && (o = t.data.length - 1), i && i.props && (i.props.startIndex >= 0 && (a = i.props.startIndex), i.props.endIndex >= 0 && (o = i.props.endIndex)), {
    chartX: 0,
    chartY: 0,
    dataStartIndex: a,
    dataEndIndex: o,
    activeTooltipIndex: -1,
    isTooltipActive: !!n
  };
}, oR = function(t) {
  return !t || !t.length ? !1 : t.some(function(r) {
    var n = st(r && r.type);
    return n && n.indexOf("Bar") >= 0;
  });
}, Hg = function(t) {
  return t === "horizontal" ? {
    numericAxisName: "yAxis",
    cateAxisName: "xAxis"
  } : t === "vertical" ? {
    numericAxisName: "xAxis",
    cateAxisName: "yAxis"
  } : t === "centric" ? {
    numericAxisName: "radiusAxis",
    cateAxisName: "angleAxis"
  } : {
    numericAxisName: "angleAxis",
    cateAxisName: "radiusAxis"
  };
}, uR = function(t, r) {
  var n = t.props, i = t.graphicalItems, a = t.xAxisMap, o = a === void 0 ? {} : a, u = t.yAxisMap, s = u === void 0 ? {} : u, c = n.width, f = n.height, l = n.children, h = n.margin || {}, d = De(l, pr), g = De(l, er), v = Object.keys(s).reduce(function(y, b) {
    var O = s[b], S = O.orientation;
    return !O.mirror && !O.hide ? $($({}, y), {}, z({}, S, y[S] + O.width)) : y;
  }, {
    left: h.left || 0,
    right: h.right || 0
  }), p = Object.keys(o).reduce(function(y, b) {
    var O = o[b], S = O.orientation;
    return !O.mirror && !O.hide ? $($({}, y), {}, z({}, S, Qe(y, "".concat(S)) + O.height)) : y;
  }, {
    top: h.top || 0,
    bottom: h.bottom || 0
  }), m = $($({}, p), v), w = m.bottom;
  d && (m.bottom += d.props.height || pr.defaultProps.height), g && r && (m = AT(m, i, n, r));
  var x = c - m.left - m.right, _ = f - m.top - m.bottom;
  return $($({
    brushBottom: w
  }, m), {}, {
    // never return negative values for height and width
    width: Math.max(x, 0),
    height: Math.max(_, 0)
  });
}, sR = function(t, r) {
  if (r === "xAxis")
    return t[r].width;
  if (r === "yAxis")
    return t[r].height;
}, FR = function(t) {
  var r = t.chartName, n = t.GraphicalChild, i = t.defaultTooltipEventType, a = i === void 0 ? "axis" : i, o = t.validateTooltipEventTypes, u = o === void 0 ? ["axis"] : o, s = t.axisComponents, c = t.legendContent, f = t.formatAxisMap, l = t.defaultProps, h = function(m, w) {
    var x = w.graphicalItems, _ = w.stackGroups, y = w.offset, b = w.updateId, O = w.dataStartIndex, S = w.dataEndIndex, A = m.barSize, C = m.layout, T = m.barGap, P = m.barCategoryGap, j = m.maxBarSize, I = Hg(C), M = I.numericAxisName, R = I.cateAxisName, N = oR(x), q = [];
    return x.forEach(function(k, W) {
      var H = ca(m.data, {
        graphicalItems: [k],
        dataStartIndex: O,
        dataEndIndex: S
      }), F = k.type.defaultProps !== void 0 ? $($({}, k.type.defaultProps), k.props) : k.props, G = F.dataKey, oe = F.maxBarSize, pe = F["".concat(M, "Id")], $e = F["".concat(R, "Id")], Et = {}, Me = s.reduce(function(jt, Mt) {
        var la = w["".concat(Mt.axisType, "Map")], Of = F["".concat(Mt.axisType, "Id")];
        la && la[Of] || Mt.axisType === "zAxis" || Ut();
        var Sf = la[Of];
        return $($({}, jt), {}, z(z({}, Mt.axisType, Sf), "".concat(Mt.axisType, "Ticks"), Nr(Sf)));
      }, Et), L = Me[R], K = Me["".concat(R, "Ticks")], X = _ && _[pe] && _[pe].hasStack && NT(k, _[pe].stackGroups), D = st(k.type).indexOf("Bar") >= 0, fe = li(L, K), Z = [], ye = N && OT({
        barSize: A,
        stackGroups: _,
        totalSize: sR(Me, R)
      });
      if (D) {
        var ge, Ce, yt = V(oe) ? j : oe, Xt = (ge = (Ce = li(L, K, !0)) !== null && Ce !== void 0 ? Ce : yt) !== null && ge !== void 0 ? ge : 0;
        Z = ST({
          barGap: T,
          barCategoryGap: P,
          bandSize: Xt !== fe ? Xt : fe,
          sizeList: ye[$e],
          maxBarSize: yt
        }), Xt !== fe && (Z = Z.map(function(jt) {
          return $($({}, jt), {}, {
            position: $($({}, jt.position), {}, {
              offset: jt.position.offset - Xt / 2
            })
          });
        }));
      }
      var Tn = k && k.type && k.type.getComposedData;
      Tn && q.push({
        props: $($({}, Tn($($({}, Me), {}, {
          displayedData: H,
          props: m,
          dataKey: G,
          item: k,
          bandSize: fe,
          barPosition: Z,
          offset: y,
          stackedData: X,
          layout: C,
          dataStartIndex: O,
          dataEndIndex: S
        }))), {}, z(z(z({
          key: k.key || "item-".concat(W)
        }, M, Me[M]), R, Me[R]), "animationId", b)),
        childIndex: Xw(k, m.children),
        item: k
      });
    }), q;
  }, d = function(m, w) {
    var x = m.props, _ = m.dataStartIndex, y = m.dataEndIndex, b = m.updateId;
    if (!$h({
      props: x
    }))
      return null;
    var O = x.children, S = x.layout, A = x.stackOffset, C = x.data, T = x.reverseStackOrder, P = Hg(S), j = P.numericAxisName, I = P.cateAxisName, M = Ke(O, n), R = RT(C, M, "".concat(j, "Id"), "".concat(I, "Id"), A, T), N = s.reduce(function(F, G) {
      var oe = "".concat(G.axisType, "Map");
      return $($({}, F), {}, z({}, oe, iR(x, $($({}, G), {}, {
        graphicalItems: M,
        stackGroups: G.axisType === j && R,
        dataStartIndex: _,
        dataEndIndex: y
      }))));
    }, {}), q = uR($($({}, N), {}, {
      props: x,
      graphicalItems: M
    }), w?.legendBBox);
    Object.keys(N).forEach(function(F) {
      N[F] = f(x, N[F], q, F.replace("Map", ""), r);
    });
    var k = N["".concat(I, "Map")], W = aR(k), H = h(x, $($({}, N), {}, {
      dataStartIndex: _,
      dataEndIndex: y,
      updateId: b,
      graphicalItems: M,
      stackGroups: R,
      offset: q
    }));
    return $($({
      formattedGraphicalItems: H,
      graphicalItems: M,
      offset: q,
      stackGroups: R
    }, W), N);
  }, g = /* @__PURE__ */ (function(p) {
    function m(w) {
      var x, _, y;
      return F$(this, m), y = z$(this, m, [w]), z(y, "eventEmitterSymbol", /* @__PURE__ */ Symbol("rechartsEventEmitter")), z(y, "accessibilityManager", new T$()), z(y, "handleLegendBBoxUpdate", function(b) {
        if (b) {
          var O = y.state, S = O.dataStartIndex, A = O.dataEndIndex, C = O.updateId;
          y.setState($({
            legendBBox: b
          }, d({
            props: y.props,
            dataStartIndex: S,
            dataEndIndex: A,
            updateId: C
          }, $($({}, y.state), {}, {
            legendBBox: b
          }))));
        }
      }), z(y, "handleReceiveSyncEvent", function(b, O, S) {
        if (y.props.syncId === b) {
          if (S === y.eventEmitterSymbol && typeof y.props.syncMethod != "function")
            return;
          y.applySyncEvent(O);
        }
      }), z(y, "handleBrushChange", function(b) {
        var O = b.startIndex, S = b.endIndex;
        if (O !== y.state.dataStartIndex || S !== y.state.dataEndIndex) {
          var A = y.state.updateId;
          y.setState(function() {
            return $({
              dataStartIndex: O,
              dataEndIndex: S
            }, d({
              props: y.props,
              dataStartIndex: O,
              dataEndIndex: S,
              updateId: A
            }, y.state));
          }), y.triggerSyncEvent({
            dataStartIndex: O,
            dataEndIndex: S
          });
        }
      }), z(y, "handleMouseEnter", function(b) {
        var O = y.getMouseInfo(b);
        if (O) {
          var S = $($({}, O), {}, {
            isTooltipActive: !0
          });
          y.setState(S), y.triggerSyncEvent(S);
          var A = y.props.onMouseEnter;
          J(A) && A(S, b);
        }
      }), z(y, "triggeredAfterMouseMove", function(b) {
        var O = y.getMouseInfo(b), S = O ? $($({}, O), {}, {
          isTooltipActive: !0
        }) : {
          isTooltipActive: !1
        };
        y.setState(S), y.triggerSyncEvent(S);
        var A = y.props.onMouseMove;
        J(A) && A(S, b);
      }), z(y, "handleItemMouseEnter", function(b) {
        y.setState(function() {
          return {
            isTooltipActive: !0,
            activeItem: b,
            activePayload: b.tooltipPayload,
            activeCoordinate: b.tooltipPosition || {
              x: b.cx,
              y: b.cy
            }
          };
        });
      }), z(y, "handleItemMouseLeave", function() {
        y.setState(function() {
          return {
            isTooltipActive: !1
          };
        });
      }), z(y, "handleMouseMove", function(b) {
        b.persist(), y.throttleTriggeredAfterMouseMove(b);
      }), z(y, "handleMouseLeave", function(b) {
        y.throttleTriggeredAfterMouseMove.cancel();
        var O = {
          isTooltipActive: !1
        };
        y.setState(O), y.triggerSyncEvent(O);
        var S = y.props.onMouseLeave;
        J(S) && S(O, b);
      }), z(y, "handleOuterEvent", function(b) {
        var O = Kw(b), S = Qe(y.props, "".concat(O));
        if (O && J(S)) {
          var A, C;
          /.*touch.*/i.test(O) ? C = y.getMouseInfo(b.changedTouches[0]) : C = y.getMouseInfo(b), S((A = C) !== null && A !== void 0 ? A : {}, b);
        }
      }), z(y, "handleClick", function(b) {
        var O = y.getMouseInfo(b);
        if (O) {
          var S = $($({}, O), {}, {
            isTooltipActive: !0
          });
          y.setState(S), y.triggerSyncEvent(S);
          var A = y.props.onClick;
          J(A) && A(S, b);
        }
      }), z(y, "handleMouseDown", function(b) {
        var O = y.props.onMouseDown;
        if (J(O)) {
          var S = y.getMouseInfo(b);
          O(S, b);
        }
      }), z(y, "handleMouseUp", function(b) {
        var O = y.props.onMouseUp;
        if (J(O)) {
          var S = y.getMouseInfo(b);
          O(S, b);
        }
      }), z(y, "handleTouchMove", function(b) {
        b.changedTouches != null && b.changedTouches.length > 0 && y.throttleTriggeredAfterMouseMove(b.changedTouches[0]);
      }), z(y, "handleTouchStart", function(b) {
        b.changedTouches != null && b.changedTouches.length > 0 && y.handleMouseDown(b.changedTouches[0]);
      }), z(y, "handleTouchEnd", function(b) {
        b.changedTouches != null && b.changedTouches.length > 0 && y.handleMouseUp(b.changedTouches[0]);
      }), z(y, "handleDoubleClick", function(b) {
        var O = y.props.onDoubleClick;
        if (J(O)) {
          var S = y.getMouseInfo(b);
          O(S, b);
        }
      }), z(y, "handleContextMenu", function(b) {
        var O = y.props.onContextMenu;
        if (J(O)) {
          var S = y.getMouseInfo(b);
          O(S, b);
        }
      }), z(y, "triggerSyncEvent", function(b) {
        y.props.syncId !== void 0 && oc.emit(uc, y.props.syncId, b, y.eventEmitterSymbol);
      }), z(y, "applySyncEvent", function(b) {
        var O = y.props, S = O.layout, A = O.syncMethod, C = y.state.updateId, T = b.dataStartIndex, P = b.dataEndIndex;
        if (b.dataStartIndex !== void 0 || b.dataEndIndex !== void 0)
          y.setState($({
            dataStartIndex: T,
            dataEndIndex: P
          }, d({
            props: y.props,
            dataStartIndex: T,
            dataEndIndex: P,
            updateId: C
          }, y.state)));
        else if (b.activeTooltipIndex !== void 0) {
          var j = b.chartX, I = b.chartY, M = b.activeTooltipIndex, R = y.state, N = R.offset, q = R.tooltipTicks;
          if (!N)
            return;
          if (typeof A == "function")
            M = A(q, b);
          else if (A === "value") {
            M = -1;
            for (var k = 0; k < q.length; k++)
              if (q[k].value === b.activeLabel) {
                M = k;
                break;
              }
          }
          var W = $($({}, N), {}, {
            x: N.left,
            y: N.top
          }), H = Math.min(j, W.x + W.width), F = Math.min(I, W.y + W.height), G = q[M] && q[M].value, oe = bl(y.state, y.props.data, M), pe = q[M] ? {
            x: S === "horizontal" ? q[M].coordinate : H,
            y: S === "horizontal" ? F : q[M].coordinate
          } : q0;
          y.setState($($({}, b), {}, {
            activeLabel: G,
            activeCoordinate: pe,
            activePayload: oe,
            activeTooltipIndex: M
          }));
        } else
          y.setState(b);
      }), z(y, "renderCursor", function(b) {
        var O, S = y.state, A = S.isTooltipActive, C = S.activeCoordinate, T = S.activePayload, P = S.offset, j = S.activeTooltipIndex, I = S.tooltipAxisBandSize, M = y.getTooltipEventType(), R = (O = b.props.active) !== null && O !== void 0 ? O : A, N = y.props.layout, q = b.key || "_recharts-cursor";
        return /* @__PURE__ */ E.createElement(R$, {
          key: q,
          activeCoordinate: C,
          activePayload: T,
          activeTooltipIndex: j,
          chartName: r,
          element: b,
          isActive: R,
          layout: N,
          offset: P,
          tooltipAxisBandSize: I,
          tooltipEventType: M
        });
      }), z(y, "renderPolarAxis", function(b, O, S) {
        var A = Qe(b, "type.axisType"), C = Qe(y.state, "".concat(A, "Map")), T = b.type.defaultProps, P = T !== void 0 ? $($({}, T), b.props) : b.props, j = C && C[P["".concat(A, "Id")]];
        return /* @__PURE__ */ be(b, $($({}, j), {}, {
          className: se(A, j.className),
          key: b.key || "".concat(O, "-").concat(S),
          ticks: Nr(j, !0)
        }));
      }), z(y, "renderPolarGrid", function(b) {
        var O = b.props, S = O.radialLines, A = O.polarAngles, C = O.polarRadius, T = y.state, P = T.radiusAxisMap, j = T.angleAxisMap, I = mt(P), M = mt(j), R = M.cx, N = M.cy, q = M.innerRadius, k = M.outerRadius;
        return /* @__PURE__ */ be(b, {
          polarAngles: Array.isArray(A) ? A : Nr(M, !0).map(function(W) {
            return W.coordinate;
          }),
          polarRadius: Array.isArray(C) ? C : Nr(I, !0).map(function(W) {
            return W.coordinate;
          }),
          cx: R,
          cy: N,
          innerRadius: q,
          outerRadius: k,
          key: b.key || "polar-grid",
          radialLines: S
        });
      }), z(y, "renderLegend", function() {
        var b = y.state.formattedGraphicalItems, O = y.props, S = O.children, A = O.width, C = O.height, T = y.props.margin || {}, P = A - (T.left || 0) - (T.right || 0), j = Wb({
          children: S,
          formattedGraphicalItems: b,
          legendWidth: P,
          legendContent: c
        });
        if (!j)
          return null;
        var I = j.item, M = Fg(j, D$);
        return /* @__PURE__ */ be(I, $($({}, M), {}, {
          chartWidth: A,
          chartHeight: C,
          margin: T,
          onBBoxUpdate: y.handleLegendBBoxUpdate
        }));
      }), z(y, "renderTooltip", function() {
        var b, O = y.props, S = O.children, A = O.accessibilityLayer, C = De(S, Ye);
        if (!C)
          return null;
        var T = y.state, P = T.isTooltipActive, j = T.activeCoordinate, I = T.activePayload, M = T.activeLabel, R = T.offset, N = (b = C.props.active) !== null && b !== void 0 ? b : P;
        return /* @__PURE__ */ be(C, {
          viewBox: $($({}, R), {}, {
            x: R.left,
            y: R.top
          }),
          active: N,
          label: M,
          payload: N ? I : [],
          coordinate: j,
          accessibilityLayer: A
        });
      }), z(y, "renderBrush", function(b) {
        var O = y.props, S = O.margin, A = O.data, C = y.state, T = C.offset, P = C.dataStartIndex, j = C.dataEndIndex, I = C.updateId;
        return /* @__PURE__ */ be(b, {
          key: b.key || "_recharts-brush",
          onChange: Rn(y.handleBrushChange, b.props.onChange),
          data: A,
          x: B(b.props.x) ? b.props.x : T.left,
          y: B(b.props.y) ? b.props.y : T.top + T.height + T.brushBottom - (S.bottom || 0),
          width: B(b.props.width) ? b.props.width : T.width,
          startIndex: P,
          endIndex: j,
          updateId: "brush-".concat(I)
        });
      }), z(y, "renderReferenceElement", function(b, O, S) {
        if (!b)
          return null;
        var A = y, C = A.clipPathId, T = y.state, P = T.xAxisMap, j = T.yAxisMap, I = T.offset, M = b.type.defaultProps || {}, R = b.props, N = R.xAxisId, q = N === void 0 ? M.xAxisId : N, k = R.yAxisId, W = k === void 0 ? M.yAxisId : k;
        return /* @__PURE__ */ be(b, {
          key: b.key || "".concat(O, "-").concat(S),
          xAxis: P[q],
          yAxis: j[W],
          viewBox: {
            x: I.left,
            y: I.top,
            width: I.width,
            height: I.height
          },
          clipPathId: C
        });
      }), z(y, "renderActivePoints", function(b) {
        var O = b.item, S = b.activePoint, A = b.basePoint, C = b.childIndex, T = b.isRange, P = [], j = O.props.key, I = O.item.type.defaultProps !== void 0 ? $($({}, O.item.type.defaultProps), O.item.props) : O.item.props, M = I.activeDot, R = I.dataKey, N = $($({
          index: C,
          dataKey: R,
          cx: S.x,
          cy: S.y,
          r: 4,
          fill: yf(O.item),
          strokeWidth: 2,
          stroke: "#fff",
          payload: S.payload,
          value: S.value
        }, ce(M, !1)), Un(M));
        return P.push(m.renderActiveDot(M, N, "".concat(j, "-activePoint-").concat(C))), A ? P.push(m.renderActiveDot(M, $($({}, N), {}, {
          cx: A.x,
          cy: A.y
        }), "".concat(j, "-basePoint-").concat(C))) : T && P.push(null), P;
      }), z(y, "renderGraphicChild", function(b, O, S) {
        var A = y.filterFormatItem(b, O, S);
        if (!A)
          return null;
        var C = y.getTooltipEventType(), T = y.state, P = T.isTooltipActive, j = T.tooltipAxis, I = T.activeTooltipIndex, M = T.activeLabel, R = y.props.children, N = De(R, Ye), q = A.props, k = q.points, W = q.isRange, H = q.baseLine, F = A.item.type.defaultProps !== void 0 ? $($({}, A.item.type.defaultProps), A.item.props) : A.item.props, G = F.activeDot, oe = F.hide, pe = F.activeBar, $e = F.activeShape, Et = !!(!oe && P && N && (G || pe || $e)), Me = {};
        C !== "axis" && N && N.props.trigger === "click" ? Me = {
          onClick: Rn(y.handleItemMouseEnter, b.props.onClick)
        } : C !== "axis" && (Me = {
          onMouseLeave: Rn(y.handleItemMouseLeave, b.props.onMouseLeave),
          onMouseEnter: Rn(y.handleItemMouseEnter, b.props.onMouseEnter)
        });
        var L = /* @__PURE__ */ be(b, $($({}, A.props), Me));
        function K(Mt) {
          return typeof j.dataKey == "function" ? j.dataKey(Mt.payload) : null;
        }
        if (Et)
          if (I >= 0) {
            var X, D;
            if (j.dataKey && !j.allowDuplicatedCategory) {
              var fe = typeof j.dataKey == "function" ? K : "payload.".concat(j.dataKey.toString());
              X = Fn(k, fe, M), D = W && H && Fn(H, fe, M);
            } else
              X = k?.[I], D = W && H && H[I];
            if ($e || pe) {
              var Z = b.props.activeIndex !== void 0 ? b.props.activeIndex : I;
              return [/* @__PURE__ */ be(b, $($($({}, A.props), Me), {}, {
                activeIndex: Z
              })), null, null];
            }
            if (!V(X))
              return [L].concat(br(y.renderActivePoints({
                item: A,
                activePoint: X,
                basePoint: D,
                childIndex: I,
                isRange: W
              })));
          } else {
            var ye, ge = (ye = y.getItemByXY(y.state.activeCoordinate)) !== null && ye !== void 0 ? ye : {
              graphicalItem: L
            }, Ce = ge.graphicalItem, yt = Ce.item, Xt = yt === void 0 ? b : yt, Tn = Ce.childIndex, jt = $($($({}, A.props), Me), {}, {
              activeIndex: Tn
            });
            return [/* @__PURE__ */ be(Xt, jt), null, null];
          }
        return W ? [L, null, null] : [L, null];
      }), z(y, "renderCustomized", function(b, O, S) {
        return /* @__PURE__ */ be(b, $($({
          key: "recharts-customized-".concat(S)
        }, y.props), y.state));
      }), z(y, "renderMap", {
        CartesianGrid: {
          handler: Ln,
          once: !0
        },
        ReferenceArea: {
          handler: y.renderReferenceElement
        },
        ReferenceLine: {
          handler: Ln
        },
        ReferenceDot: {
          handler: y.renderReferenceElement
        },
        XAxis: {
          handler: Ln
        },
        YAxis: {
          handler: Ln
        },
        Brush: {
          handler: y.renderBrush,
          once: !0
        },
        Bar: {
          handler: y.renderGraphicChild
        },
        Line: {
          handler: y.renderGraphicChild
        },
        Area: {
          handler: y.renderGraphicChild
        },
        Radar: {
          handler: y.renderGraphicChild
        },
        RadialBar: {
          handler: y.renderGraphicChild
        },
        Scatter: {
          handler: y.renderGraphicChild
        },
        Pie: {
          handler: y.renderGraphicChild
        },
        Funnel: {
          handler: y.renderGraphicChild
        },
        Tooltip: {
          handler: y.renderCursor,
          once: !0
        },
        PolarGrid: {
          handler: y.renderPolarGrid,
          once: !0
        },
        PolarAngleAxis: {
          handler: y.renderPolarAxis
        },
        PolarRadiusAxis: {
          handler: y.renderPolarAxis
        },
        Customized: {
          handler: y.renderCustomized
        }
      }), y.clipPathId = "".concat((x = w.id) !== null && x !== void 0 ? x : Ni("recharts"), "-clip"), y.throttleTriggeredAfterMouseMove = Gm(y.triggeredAfterMouseMove, (_ = w.throttleDelay) !== null && _ !== void 0 ? _ : 1e3 / 60), y.state = {}, y;
    }
    return K$(m, p), W$(m, [{
      key: "componentDidMount",
      value: function() {
        var x, _;
        this.addListener(), this.accessibilityManager.setDetails({
          container: this.container,
          offset: {
            left: (x = this.props.margin.left) !== null && x !== void 0 ? x : 0,
            top: (_ = this.props.margin.top) !== null && _ !== void 0 ? _ : 0
          },
          coordinateList: this.state.tooltipTicks,
          mouseHandlerCallback: this.triggeredAfterMouseMove,
          layout: this.props.layout
        }), this.displayDefaultTooltip();
      }
    }, {
      key: "displayDefaultTooltip",
      value: function() {
        var x = this.props, _ = x.children, y = x.data, b = x.height, O = x.layout, S = De(_, Ye);
        if (S) {
          var A = S.props.defaultIndex;
          if (!(typeof A != "number" || A < 0 || A > this.state.tooltipTicks.length - 1)) {
            var C = this.state.tooltipTicks[A] && this.state.tooltipTicks[A].value, T = bl(this.state, y, A, C), P = this.state.tooltipTicks[A].coordinate, j = (this.state.offset.top + b) / 2, I = O === "horizontal", M = I ? {
              x: P,
              y: j
            } : {
              y: P,
              x: j
            }, R = this.state.formattedGraphicalItems.find(function(q) {
              var k = q.item;
              return k.type.name === "Scatter";
            });
            R && (M = $($({}, M), R.props.points[A].tooltipPosition), T = R.props.points[A].tooltipPayload);
            var N = {
              activeTooltipIndex: A,
              isTooltipActive: !0,
              activeLabel: C,
              activePayload: T,
              activeCoordinate: M
            };
            this.setState(N), this.renderCursor(S), this.accessibilityManager.setIndex(A);
          }
        }
      }
    }, {
      key: "getSnapshotBeforeUpdate",
      value: function(x, _) {
        if (!this.props.accessibilityLayer)
          return null;
        if (this.state.tooltipTicks !== _.tooltipTicks && this.accessibilityManager.setDetails({
          coordinateList: this.state.tooltipTicks
        }), this.props.layout !== x.layout && this.accessibilityManager.setDetails({
          layout: this.props.layout
        }), this.props.margin !== x.margin) {
          var y, b;
          this.accessibilityManager.setDetails({
            offset: {
              left: (y = this.props.margin.left) !== null && y !== void 0 ? y : 0,
              top: (b = this.props.margin.top) !== null && b !== void 0 ? b : 0
            }
          });
        }
        return null;
      }
    }, {
      key: "componentDidUpdate",
      value: function(x) {
        pc([De(x.children, Ye)], [De(this.props.children, Ye)]) || this.displayDefaultTooltip();
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel();
      }
    }, {
      key: "getTooltipEventType",
      value: function() {
        var x = De(this.props.children, Ye);
        if (x && typeof x.props.shared == "boolean") {
          var _ = x.props.shared ? "axis" : "item";
          return u.indexOf(_) >= 0 ? _ : a;
        }
        return a;
      }
      /**
       * Get the information of mouse in chart, return null when the mouse is not in the chart
       * @param  {MousePointer} event    The event object
       * @return {Object}          Mouse data
       */
    }, {
      key: "getMouseInfo",
      value: function(x) {
        if (!this.container)
          return null;
        var _ = this.container, y = _.getBoundingClientRect(), b = DO(y), O = {
          chartX: Math.round(x.pageX - b.left),
          chartY: Math.round(x.pageY - b.top)
        }, S = y.width / _.offsetWidth || 1, A = this.inRange(O.chartX, O.chartY, S);
        if (!A)
          return null;
        var C = this.state, T = C.xAxisMap, P = C.yAxisMap, j = this.getTooltipEventType(), I = Wg(this.state, this.props.data, this.props.layout, A);
        if (j !== "axis" && T && P) {
          var M = mt(T).scale, R = mt(P).scale, N = M && M.invert ? M.invert(O.chartX) : null, q = R && R.invert ? R.invert(O.chartY) : null;
          return $($({}, O), {}, {
            xValue: N,
            yValue: q
          }, I);
        }
        return I ? $($({}, O), I) : null;
      }
    }, {
      key: "inRange",
      value: function(x, _) {
        var y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, b = this.props.layout, O = x / y, S = _ / y;
        if (b === "horizontal" || b === "vertical") {
          var A = this.state.offset, C = O >= A.left && O <= A.left + A.width && S >= A.top && S <= A.top + A.height;
          return C ? {
            x: O,
            y: S
          } : null;
        }
        var T = this.state, P = T.angleAxisMap, j = T.radiusAxisMap;
        if (P && j) {
          var I = mt(P);
          return py({
            x: O,
            y: S
          }, I);
        }
        return null;
      }
    }, {
      key: "parseEventsOfWrapper",
      value: function() {
        var x = this.props.children, _ = this.getTooltipEventType(), y = De(x, Ye), b = {};
        y && _ === "axis" && (y.props.trigger === "click" ? b = {
          onClick: this.handleClick
        } : b = {
          onMouseEnter: this.handleMouseEnter,
          onDoubleClick: this.handleDoubleClick,
          onMouseMove: this.handleMouseMove,
          onMouseLeave: this.handleMouseLeave,
          onTouchMove: this.handleTouchMove,
          onTouchStart: this.handleTouchStart,
          onTouchEnd: this.handleTouchEnd,
          onContextMenu: this.handleContextMenu
        });
        var O = Un(this.props, this.handleOuterEvent);
        return $($({}, O), b);
      }
    }, {
      key: "addListener",
      value: function() {
        oc.on(uc, this.handleReceiveSyncEvent);
      }
    }, {
      key: "removeListener",
      value: function() {
        oc.removeListener(uc, this.handleReceiveSyncEvent);
      }
    }, {
      key: "filterFormatItem",
      value: function(x, _, y) {
        for (var b = this.state.formattedGraphicalItems, O = 0, S = b.length; O < S; O++) {
          var A = b[O];
          if (A.item === x || A.props.key === x.key || _ === st(A.item.type) && y === A.childIndex)
            return A;
        }
        return null;
      }
    }, {
      key: "renderClipPath",
      value: function() {
        var x = this.clipPathId, _ = this.state.offset, y = _.left, b = _.top, O = _.height, S = _.width;
        return /* @__PURE__ */ E.createElement("defs", null, /* @__PURE__ */ E.createElement("clipPath", {
          id: x
        }, /* @__PURE__ */ E.createElement("rect", {
          x: y,
          y: b,
          height: O,
          width: S
        })));
      }
    }, {
      key: "getXScales",
      value: function() {
        var x = this.state.xAxisMap;
        return x ? Object.entries(x).reduce(function(_, y) {
          var b = Bg(y, 2), O = b[0], S = b[1];
          return $($({}, _), {}, z({}, O, S.scale));
        }, {}) : null;
      }
    }, {
      key: "getYScales",
      value: function() {
        var x = this.state.yAxisMap;
        return x ? Object.entries(x).reduce(function(_, y) {
          var b = Bg(y, 2), O = b[0], S = b[1];
          return $($({}, _), {}, z({}, O, S.scale));
        }, {}) : null;
      }
    }, {
      key: "getXScaleByAxisId",
      value: function(x) {
        var _;
        return (_ = this.state.xAxisMap) === null || _ === void 0 || (_ = _[x]) === null || _ === void 0 ? void 0 : _.scale;
      }
    }, {
      key: "getYScaleByAxisId",
      value: function(x) {
        var _;
        return (_ = this.state.yAxisMap) === null || _ === void 0 || (_ = _[x]) === null || _ === void 0 ? void 0 : _.scale;
      }
    }, {
      key: "getItemByXY",
      value: function(x) {
        var _ = this.state, y = _.formattedGraphicalItems, b = _.activeItem;
        if (y && y.length)
          for (var O = 0, S = y.length; O < S; O++) {
            var A = y[O], C = A.props, T = A.item, P = T.type.defaultProps !== void 0 ? $($({}, T.type.defaultProps), T.props) : T.props, j = st(T.type);
            if (j === "Bar") {
              var I = (C.data || []).find(function(q) {
                return DM(x, q);
              });
              if (I)
                return {
                  graphicalItem: A,
                  payload: I
                };
            } else if (j === "RadialBar") {
              var M = (C.data || []).find(function(q) {
                return py(x, q);
              });
              if (M)
                return {
                  graphicalItem: A,
                  payload: M
                };
            } else if (ra(A, b) || na(A, b) || pn(A, b)) {
              var R = AC({
                graphicalItem: A,
                activeTooltipItem: b,
                itemData: P.data
              }), N = P.activeIndex === void 0 ? R : P.activeIndex;
              return {
                graphicalItem: $($({}, A), {}, {
                  childIndex: N
                }),
                payload: pn(A, b) ? P.data[R] : A.props.data[R]
              };
            }
          }
        return null;
      }
    }, {
      key: "render",
      value: function() {
        var x = this;
        if (!$h(this))
          return null;
        var _ = this.props, y = _.children, b = _.className, O = _.width, S = _.height, A = _.style, C = _.compact, T = _.title, P = _.desc, j = Fg(_, N$), I = ce(j, !1);
        if (C)
          return /* @__PURE__ */ E.createElement(jg, {
            state: this.state,
            width: this.props.width,
            height: this.props.height,
            clipPathId: this.clipPathId
          }, /* @__PURE__ */ E.createElement(vc, Qt({}, I, {
            width: O,
            height: S,
            title: T,
            desc: P
          }), this.renderClipPath(), Dh(y, this.renderMap)));
        if (this.props.accessibilityLayer) {
          var M, R;
          I.tabIndex = (M = this.props.tabIndex) !== null && M !== void 0 ? M : 0, I.role = (R = this.props.role) !== null && R !== void 0 ? R : "application", I.onKeyDown = function(q) {
            x.accessibilityManager.keyboardEvent(q);
          }, I.onFocus = function() {
            x.accessibilityManager.focus();
          };
        }
        var N = this.parseEventsOfWrapper();
        return /* @__PURE__ */ E.createElement(jg, {
          state: this.state,
          width: this.props.width,
          height: this.props.height,
          clipPathId: this.clipPathId
        }, /* @__PURE__ */ E.createElement("div", Qt({
          className: se("recharts-wrapper", b),
          style: $({
            position: "relative",
            cursor: "default",
            width: O,
            height: S
          }, A)
        }, N, {
          ref: function(k) {
            x.container = k;
          }
        }), /* @__PURE__ */ E.createElement(vc, Qt({}, I, {
          width: O,
          height: S,
          title: T,
          desc: P,
          style: Q$
        }), this.renderClipPath(), Dh(y, this.renderMap)), this.renderLegend(), this.renderTooltip()));
      }
    }]);
  })(W0);
  z(g, "displayName", r), z(g, "defaultProps", $({
    layout: "horizontal",
    stackOffset: "none",
    barCategoryGap: "10%",
    barGap: 4,
    margin: {
      top: 5,
      right: 5,
      bottom: 5,
      left: 5
    },
    reverseStackOrder: !1,
    syncMethod: "index"
  }, l)), z(g, "getDerivedStateFromProps", function(p, m) {
    var w = p.dataKey, x = p.data, _ = p.children, y = p.width, b = p.height, O = p.layout, S = p.stackOffset, A = p.margin, C = m.dataStartIndex, T = m.dataEndIndex;
    if (m.updateId === void 0) {
      var P = zg(p);
      return $($($({}, P), {}, {
        updateId: 0
      }, d($($({
        props: p
      }, P), {}, {
        updateId: 0
      }), m)), {}, {
        prevDataKey: w,
        prevData: x,
        prevWidth: y,
        prevHeight: b,
        prevLayout: O,
        prevStackOffset: S,
        prevMargin: A,
        prevChildren: _
      });
    }
    if (w !== m.prevDataKey || x !== m.prevData || y !== m.prevWidth || b !== m.prevHeight || O !== m.prevLayout || S !== m.prevStackOffset || !cc(A, m.prevMargin)) {
      var j = zg(p), I = {
        // (chartX, chartY) are (0,0) in default state, but we want to keep the last mouse position to avoid
        // any flickering
        chartX: m.chartX,
        chartY: m.chartY,
        // The tooltip should stay active when it was active in the previous render. If this is not
        // the case, the tooltip disappears and immediately re-appears, causing a flickering effect
        isTooltipActive: m.isTooltipActive
      }, M = $($({}, Wg(m, x, O)), {}, {
        updateId: m.updateId + 1
      }), R = $($($({}, j), I), M);
      return $($($({}, R), d($({
        props: p
      }, R), m)), {}, {
        prevDataKey: w,
        prevData: x,
        prevWidth: y,
        prevHeight: b,
        prevLayout: O,
        prevStackOffset: S,
        prevMargin: A,
        prevChildren: _
      });
    }
    if (!pc(_, m.prevChildren)) {
      var N, q, k, W, H = De(_, pr), F = H && (N = (q = H.props) === null || q === void 0 ? void 0 : q.startIndex) !== null && N !== void 0 ? N : C, G = H && (k = (W = H.props) === null || W === void 0 ? void 0 : W.endIndex) !== null && k !== void 0 ? k : T, oe = F !== C || G !== T, pe = !V(x), $e = pe && !oe ? m.updateId : m.updateId + 1;
      return $($({
        updateId: $e
      }, d($($({
        props: p
      }, m), {}, {
        updateId: $e,
        dataStartIndex: F,
        dataEndIndex: G
      }), m)), {}, {
        prevChildren: _,
        dataStartIndex: F,
        dataEndIndex: G
      });
    }
    return null;
  }), z(g, "renderActiveDot", function(p, m, w) {
    var x;
    return /* @__PURE__ */ Ge(p) ? x = /* @__PURE__ */ be(p, m) : J(p) ? x = p(m) : x = /* @__PURE__ */ E.createElement(c0, m), /* @__PURE__ */ E.createElement(Te, {
      className: "recharts-active-dot",
      key: w
    }, x);
  });
  var v = /* @__PURE__ */ bn(function(m, w) {
    return /* @__PURE__ */ E.createElement(g, Qt({}, m, {
      ref: w
    }));
  });
  return v.displayName = g.displayName, v;
};
const cR = { light: "", dark: ".dark" }, L0 = _t(null);
function B0() {
  const e = rt(L0);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
const lR = bn(({ id: e, className: t, children: r, config: n, ...i }, a) => {
  const o = z0(), u = `chart-${e || o.replace(/:/g, "")}`;
  return /* @__PURE__ */ Y.jsx(L0.Provider, { value: { config: n }, children: /* @__PURE__ */ Y.jsxs(
    "div",
    {
      ref: a,
      className: we(
        "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted  [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden",
        t
      ),
      "data-chart": u,
      ...i,
      children: [
        /* @__PURE__ */ Y.jsx(fR, { config: n, id: u }),
        /* @__PURE__ */ Y.jsx(EO, { children: r })
      ]
    }
  ) });
});
lR.displayName = "Chart";
const fR = ({ id: e, config: t }) => {
  const r = Object.entries(t).filter(
    ([, n]) => n.theme || n.color
  );
  return r.length ? /* @__PURE__ */ Y.jsx(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(cR).map(
          ([n, i]) => `
${i} [data-chart=${e}] {
${r.map(([a, o]) => {
            const u = o.theme?.[n] || o.color;
            return u ? `  --color-${a}: ${u};` : null;
          }).join(`
`)}
}
`
        ).join(`
`)
      }
    }
  ) : null;
}, UR = Ye, hR = bn(
  ({
    active: e,
    payload: t,
    className: r,
    indicator: n = "dot",
    hideLabel: i = !1,
    hideIndicator: a = !1,
    label: o,
    labelFormatter: u,
    labelClassName: s,
    formatter: c,
    color: f,
    nameKey: l,
    labelKey: h
  }, d) => {
    const { config: g } = B0(), v = Ol(() => {
      if (i || !t?.length)
        return null;
      const [m] = t, w = `${h || m.dataKey || m.name || "value"}`, x = wl(g, m, w), _ = !h && typeof o == "string" ? g[o]?.label || o : x?.label;
      return u ? /* @__PURE__ */ Y.jsx("div", { className: we("font-medium", s), children: u(_, t) }) : _ ? /* @__PURE__ */ Y.jsx("div", { className: we("font-medium", s), children: _ }) : null;
    }, [
      o,
      u,
      t,
      i,
      s,
      g,
      h
    ]);
    if (!e || !t?.length)
      return null;
    const p = t.length === 1 && n !== "dot";
    return /* @__PURE__ */ Y.jsxs(
      "div",
      {
        ref: d,
        className: we(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          r
        ),
        children: [
          p ? null : v,
          /* @__PURE__ */ Y.jsx("div", { className: "grid gap-1", children: t.map((m, w) => {
            const x = `${l || m.name || m.dataKey || "value"}`, _ = wl(g, m, x), y = f || m.payload.fill || m.color;
            return /* @__PURE__ */ Y.jsx(
              "div",
              {
                className: we(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  n === "dot" && "items-center"
                ),
                children: c && m?.value !== void 0 && m.name ? c(m.value, m.name, m, w, m.payload) : /* @__PURE__ */ Y.jsxs(Y.Fragment, { children: [
                  _?.icon ? /* @__PURE__ */ Y.jsx(_.icon, {}) : !a && /* @__PURE__ */ Y.jsx(
                    "div",
                    {
                      className: we(
                        "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
                        {
                          "h-2.5 w-2.5": n === "dot",
                          "w-1": n === "line",
                          "w-0 border-[1.5px] border-dashed bg-transparent": n === "dashed",
                          "my-0.5": p && n === "dashed"
                        }
                      ),
                      style: {
                        "--color-bg": y,
                        "--color-border": y
                      }
                    }
                  ),
                  /* @__PURE__ */ Y.jsxs(
                    "div",
                    {
                      className: we(
                        "flex flex-1 justify-between leading-none gap-1.5",
                        p ? "items-end" : "items-center"
                      ),
                      children: [
                        /* @__PURE__ */ Y.jsxs("div", { className: "grid gap-1.5", children: [
                          p ? v : null,
                          /* @__PURE__ */ Y.jsx("span", { className: "text-muted-foreground", children: _?.label || m.name })
                        ] }),
                        m.value && /* @__PURE__ */ Y.jsx("span", { className: "font-mono font-medium text-foreground tabular-nums", children: m.value.toLocaleString() })
                      ]
                    }
                  )
                ] })
              },
              m.dataKey
            );
          }) })
        ]
      }
    );
  }
);
hR.displayName = "ChartTooltip";
const pR = bn(
  ({ className: e, hideIcon: t = !1, payload: r, verticalAlign: n = "bottom", nameKey: i }, a) => {
    const { config: o } = B0();
    return r?.length ? /* @__PURE__ */ Y.jsx(
      "div",
      {
        ref: a,
        className: we(
          "flex items-center justify-center gap-4",
          n === "top" ? "pb-3" : "pt-3",
          e
        ),
        children: r.map((u) => {
          const s = `${i || u.dataKey || "value"}`, c = wl(o, u, s);
          return /* @__PURE__ */ Y.jsxs(
            "div",
            {
              className: we(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
              ),
              children: [
                c?.icon && !t ? /* @__PURE__ */ Y.jsx(c.icon, {}) : /* @__PURE__ */ Y.jsx(
                  "div",
                  {
                    className: "size-2 shrink-0 rounded-full",
                    style: {
                      backgroundColor: u.color
                    }
                  }
                ),
                c?.label
              ]
            },
            u.value
          );
        })
      }
    ) : null;
  }
);
pR.displayName = "ChartLegend";
function wl(e, t, r) {
  if (typeof t != "object" || t === null)
    return;
  const n = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let i = r;
  return r in t && typeof t[r] == "string" ? i = t[r] : n && r in n && typeof n[r] == "string" && (i = n[r]), i in e ? e[i] : e[r];
}
const WR = ({ x: e, y: t, payload: r, index: n, formatter: i = (a) => String(a) }) => {
  const a = n === 0 ? "start" : "end";
  return /* @__PURE__ */ Y.jsx("g", { transform: `translate(${e},${t})`, children: /* @__PURE__ */ Y.jsx(
    "text",
    {
      dy: 16,
      fill: "var(--muted-foreground)",
      textAnchor: a,
      x: 0,
      y: -12,
      children: i(r.value)
    }
  ) });
}, dR = E.forwardRef(({ children: e, className: t, ...r }, n) => /* @__PURE__ */ Y.jsx(
  "div",
  {
    ref: n,
    className: we("flex flex-col items-stretch", t),
    ...r,
    children: e
  }
));
dR.displayName = "DataList";
const vR = E.forwardRef(({ children: e, className: t, ...r }, n) => /* @__PURE__ */ Y.jsx(
  "div",
  {
    ref: n,
    className: we("flex uppercase items-center justify-between gap-2 border-b p-2 text-xs tracking-wide font-medium text-muted-foreground", t),
    ...r,
    children: e
  }
));
vR.displayName = "DataListHeader";
const yR = E.forwardRef(({ children: e, className: t, ...r }, n) => /* @__PURE__ */ Y.jsx(
  "div",
  {
    ref: n,
    className: we("", t),
    ...r,
    children: e
  }
));
yR.displayName = "DataListHead";
const gR = E.forwardRef(({ children: e, className: t, ...r }, n) => /* @__PURE__ */ Y.jsx(
  "div",
  {
    ref: n,
    className: we("flex flex-col items-stretch pt-1.5", t),
    ...r,
    children: e
  }
));
gR.displayName = "DataListBody";
const mR = E.forwardRef(({ children: e, className: t, ...r }, n) => /* @__PURE__ */ Y.jsx(
  "div",
  {
    ref: n,
    className: we("group/row py-0.5 relative flex items-center justify-between gap-3 before:absolute before:z-0 before:-inset-x-0.5 before:inset-y-0.5 before:bg-muted/60 before:opacity-0 hover:before:opacity-100 before:rounded-[6px]", t),
    ...r,
    children: e
  }
));
mR.displayName = "DataListRow";
const bR = E.forwardRef(({ children: e, className: t, ...r }, n) => /* @__PURE__ */ Y.jsx(
  "div",
  {
    ref: n,
    className: we("absolute inset-x-0 inset-y-1 z-0 origin-left rounded-[4px] bg-state-info/10 group-hover/row:bg-state-info/25 dark:bg-state-info/20 dark:group-hover/row:bg-state-info/35 transition-all", t),
    ...r,
    children: e
  }
));
bR.displayName = "DataListBar";
const wR = E.forwardRef(({ children: e, className: t, ...r }, n) => /* @__PURE__ */ Y.jsx(
  "div",
  {
    ref: n,
    className: we("text-sm p-2 font-medium relative z-10 flex min-w-0 max-w-[calc(100%-32px)] items-center transition-[max-width] duration-300 ease-in-out group-hover/datalist:max-w-[calc(100%-100px)]", t),
    ...r,
    children: e
  }
));
wR.displayName = "DataListItemContent";
const xR = E.forwardRef(({ children: e, className: t, ...r }, n) => {
  const a = E.Children.toArray(e).length > 1;
  return /* @__PURE__ */ Y.jsx(
    "div",
    {
      ref: n,
      className: we(
        "z-10 flex items-center",
        // Apply animation styles when there are multiple children
        a && '[&>[data-type="value-abs"]]:transition-transform [&>[data-type="value-abs"]]:duration-300 [&>[data-type="value-abs"]]:group-hover/datalist:-translate-x-14',
        a && '[&>[data-type="value-perc"]]:invisible [&>[data-type="value-perc"]]:absolute [&>[data-type="value-perc"]]:right-0 [&>[data-type="value-perc"]]:translate-x-14 [&>[data-type="value-perc"]]:opacity-0 [&>[data-type="value-perc"]]:transition-all [&>[data-type="value-perc"]]:duration-300 [&>[data-type="value-perc"]]:group-hover/datalist:visible [&>[data-type="value-perc"]]:group-hover/datalist:translate-x-0 [&>[data-type="value-perc"]]:group-hover/datalist:opacity-100',
        t
      ),
      ...r,
      children: e
    }
  );
});
xR.displayName = "DataListItemValue";
const _R = E.forwardRef(({ children: e, className: t, ...r }, n) => /* @__PURE__ */ Y.jsx(
  "div",
  {
    ref: n,
    className: we("z-10 px-2 text-sm font-mono", t),
    "data-type": "value-abs",
    ...r,
    children: e
  }
));
_R.displayName = "DataListItemValueAbs";
const OR = E.forwardRef(({ children: e, className: t, ...r }, n) => /* @__PURE__ */ Y.jsx(
  "div",
  {
    ref: n,
    className: we("px-3 text-sm font-mono text-muted-foreground", t),
    "data-type": "value-perc",
    ...r,
    children: e
  }
));
OR.displayName = "DataListItemValuePerc";
export {
  Pe as $,
  WR as A,
  Qe as B,
  Km as C,
  dR as D,
  DR as E,
  DT as F,
  zi as G,
  uy as H,
  CR as I,
  MR as J,
  av as K,
  Ee as L,
  $R as M,
  Nr as N,
  Zb as O,
  Xe as P,
  jR as Q,
  Vt as R,
  mC as S,
  Cc as T,
  pf as U,
  J as V,
  xn as W,
  V as X,
  B as Y,
  Ze as Z,
  Zi as _,
  xt as a,
  Tb as a0,
  lP as a1,
  St as a2,
  pP as a3,
  cc as a4,
  jT as a5,
  Ni as a6,
  NR as a7,
  BR as a8,
  LR as a9,
  kR as aa,
  $I as ab,
  RI as ac,
  qR as ad,
  qt as ae,
  TR as b,
  ER as c,
  lR as d,
  UR as e,
  hR as f,
  Sy as g,
  bR as h,
  gR as i,
  yR as j,
  vR as k,
  wR as l,
  xR as m,
  _R as n,
  OR as o,
  mR as p,
  c0 as q,
  Lt as r,
  Te as s,
  fc as t,
  ce as u,
  Ke as v,
  ET as w,
  RR as x,
  IR as y,
  FR as z
};
//# sourceMappingURL=data-list-JslRF2F5.js.map
