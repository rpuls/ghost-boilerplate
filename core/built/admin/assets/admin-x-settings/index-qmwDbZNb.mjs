import { bb as Tr, ao as Va, bd as wl } from "./index-BnAja3kK.mjs";
function bl(r, e) {
  for (var t = 0; t < e.length; t++) {
    const n = e[t];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const a in n)
        if (a !== "default" && !(a in r)) {
          const u = Object.getOwnPropertyDescriptor(n, a);
          u && Object.defineProperty(r, a, u.get ? u : {
            enumerable: !0,
            get: () => n[a]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }));
}
var El = typeof Tr == "object" && Tr && Tr.Object === Object && Tr, Wa = El, xl = Wa, Tl = typeof self == "object" && self && self.Object === Object && self, Sl = xl || Tl || Function("return this")(), Zr = Sl, Il = Zr, Ol = Il.Symbol, dn = Ol;
function Al(r, e) {
  for (var t = -1, n = r == null ? 0 : r.length, a = Array(n); ++t < n; )
    a[t] = e(r[t], t, r);
  return a;
}
var za = Al, _l = Array.isArray, yr = _l, si = dn, Za = Object.prototype, Cl = Za.hasOwnProperty, kl = Za.toString, ir = si ? si.toStringTag : void 0;
function Nl(r) {
  var e = Cl.call(r, ir), t = r[ir];
  try {
    r[ir] = void 0;
    var n = !0;
  } catch {
  }
  var a = kl.call(r);
  return n && (e ? r[ir] = t : delete r[ir]), a;
}
var Fl = Nl, Ml = Object.prototype, Dl = Ml.toString;
function Ul(r) {
  return Dl.call(r);
}
var Pl = Ul, oi = dn, Ll = Fl, Rl = Pl, Bl = "[object Null]", jl = "[object Undefined]", ui = oi ? oi.toStringTag : void 0;
function Vl(r) {
  return r == null ? r === void 0 ? jl : Bl : ui && ui in Object(r) ? Ll(r) : Rl(r);
}
var Ze = Vl;
function Wl(r) {
  return r != null && typeof r == "object";
}
var Ge = Wl, zl = Ze, Zl = Ge, Gl = "[object Symbol]";
function Hl(r) {
  return typeof r == "symbol" || Zl(r) && zl(r) == Gl;
}
var mn = Hl, li = dn, ql = za, Yl = yr, Jl = mn, ci = li ? li.prototype : void 0, fi = ci ? ci.toString : void 0;
function Ga(r) {
  if (typeof r == "string")
    return r;
  if (Yl(r))
    return ql(r, Ga) + "";
  if (Jl(r))
    return fi ? fi.call(r) : "";
  var e = r + "";
  return e == "0" && 1 / r == -1 / 0 ? "-0" : e;
}
var Xl = Ga, Kl = Xl;
function Ql(r) {
  return r == null ? "" : Kl(r);
}
var _e = Ql;
function ec(r, e, t) {
  var n = -1, a = r.length;
  e < 0 && (e = -e > a ? 0 : a + e), t = t > a ? a : t, t < 0 && (t += a), a = e > t ? 0 : t - e >>> 0, e >>>= 0;
  for (var u = Array(a); ++n < a; )
    u[n] = r[n + e];
  return u;
}
var rc = ec, tc = rc;
function nc(r, e, t) {
  var n = r.length;
  return t = t === void 0 ? n : t, !e && t >= n ? r : tc(r, e, t);
}
var ic = nc, ac = "\\ud800-\\udfff", sc = "\\u0300-\\u036f", oc = "\\ufe20-\\ufe2f", uc = "\\u20d0-\\u20ff", lc = sc + oc + uc, cc = "\\ufe0e\\ufe0f", fc = "\\u200d", hc = RegExp("[" + fc + ac + lc + cc + "]");
function dc(r) {
  return hc.test(r);
}
var Ha = dc;
function mc(r) {
  return r.split("");
}
var yc = mc, qa = "\\ud800-\\udfff", pc = "\\u0300-\\u036f", vc = "\\ufe20-\\ufe2f", gc = "\\u20d0-\\u20ff", $c = pc + vc + gc, wc = "\\ufe0e\\ufe0f", bc = "[" + qa + "]", Dt = "[" + $c + "]", Ut = "\\ud83c[\\udffb-\\udfff]", Ec = "(?:" + Dt + "|" + Ut + ")", Ya = "[^" + qa + "]", Ja = "(?:\\ud83c[\\udde6-\\uddff]){2}", Xa = "[\\ud800-\\udbff][\\udc00-\\udfff]", xc = "\\u200d", Ka = Ec + "?", Qa = "[" + wc + "]?", Tc = "(?:" + xc + "(?:" + [Ya, Ja, Xa].join("|") + ")" + Qa + Ka + ")*", Sc = Qa + Ka + Tc, Ic = "(?:" + [Ya + Dt + "?", Dt, Ja, Xa, bc].join("|") + ")", Oc = RegExp(Ut + "(?=" + Ut + ")|" + Ic + Sc, "g");
function Ac(r) {
  return r.match(Oc) || [];
}
var _c = Ac, Cc = yc, kc = Ha, Nc = _c;
function Fc(r) {
  return kc(r) ? Nc(r) : Cc(r);
}
var Mc = Fc, Dc = ic, Uc = Ha, Pc = Mc, Lc = _e;
function Rc(r) {
  return function(e) {
    e = Lc(e);
    var t = Uc(e) ? Pc(e) : void 0, n = t ? t[0] : e.charAt(0), a = t ? Dc(t, 1).join("") : e.slice(1);
    return n[r]() + a;
  };
}
var Bc = Rc, jc = Bc, Vc = jc("toUpperCase"), Wc = Vc, zc = _e, Zc = Wc;
function Gc(r) {
  return Zc(zc(r).toLowerCase());
}
var Hc = Gc;
function qc(r, e, t, n) {
  var a = -1, u = r == null ? 0 : r.length;
  for (n && u && (t = r[++a]); ++a < u; )
    t = e(t, r[a], a, r);
  return t;
}
var Yc = qc;
function Jc(r) {
  return function(e) {
    return r == null ? void 0 : r[e];
  };
}
var es = Jc, Xc = es, Kc = {
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
}, Qc = Xc(Kc), ef = Qc, rf = ef, tf = _e, nf = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, af = "\\u0300-\\u036f", sf = "\\ufe20-\\ufe2f", of = "\\u20d0-\\u20ff", uf = af + sf + of, lf = "[" + uf + "]", cf = RegExp(lf, "g");
function ff(r) {
  return r = tf(r), r && r.replace(nf, rf).replace(cf, "");
}
var hf = ff, df = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function mf(r) {
  return r.match(df) || [];
}
var yf = mf, pf = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function vf(r) {
  return pf.test(r);
}
var gf = vf, rs = "\\ud800-\\udfff", $f = "\\u0300-\\u036f", wf = "\\ufe20-\\ufe2f", bf = "\\u20d0-\\u20ff", Ef = $f + wf + bf, ts = "\\u2700-\\u27bf", ns = "a-z\\xdf-\\xf6\\xf8-\\xff", xf = "\\xac\\xb1\\xd7\\xf7", Tf = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Sf = "\\u2000-\\u206f", If = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", is = "A-Z\\xc0-\\xd6\\xd8-\\xde", Of = "\\ufe0e\\ufe0f", as = xf + Tf + Sf + If, ss = "['’]", hi = "[" + as + "]", Af = "[" + Ef + "]", os = "\\d+", _f = "[" + ts + "]", us = "[" + ns + "]", ls = "[^" + rs + as + os + ts + ns + is + "]", Cf = "\\ud83c[\\udffb-\\udfff]", kf = "(?:" + Af + "|" + Cf + ")", Nf = "[^" + rs + "]", cs = "(?:\\ud83c[\\udde6-\\uddff]){2}", fs = "[\\ud800-\\udbff][\\udc00-\\udfff]", Re = "[" + is + "]", Ff = "\\u200d", di = "(?:" + us + "|" + ls + ")", Mf = "(?:" + Re + "|" + ls + ")", mi = "(?:" + ss + "(?:d|ll|m|re|s|t|ve))?", yi = "(?:" + ss + "(?:D|LL|M|RE|S|T|VE))?", hs = kf + "?", ds = "[" + Of + "]?", Df = "(?:" + Ff + "(?:" + [Nf, cs, fs].join("|") + ")" + ds + hs + ")*", Uf = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Pf = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Lf = ds + hs + Df, Rf = "(?:" + [_f, cs, fs].join("|") + ")" + Lf, Bf = RegExp([
  Re + "?" + us + "+" + mi + "(?=" + [hi, Re, "$"].join("|") + ")",
  Mf + "+" + yi + "(?=" + [hi, Re + di, "$"].join("|") + ")",
  Re + "?" + di + "+" + mi,
  Re + "+" + yi,
  Pf,
  Uf,
  os,
  Rf
].join("|"), "g");
function jf(r) {
  return r.match(Bf) || [];
}
var Vf = jf, Wf = yf, zf = gf, Zf = _e, Gf = Vf;
function Hf(r, e, t) {
  return r = Zf(r), e = t ? void 0 : e, e === void 0 ? zf(r) ? Gf(r) : Wf(r) : r.match(e) || [];
}
var qf = Hf, Yf = Yc, Jf = hf, Xf = qf, Kf = "['’]", Qf = RegExp(Kf, "g");
function eh(r) {
  return function(e) {
    return Yf(Xf(Jf(e).replace(Qf, "")), r, "");
  };
}
var ms = eh, rh = Hc, th = ms, nh = th(function(r, e, t) {
  return e = e.toLowerCase(), r + (t ? rh(e) : e);
}), ih = nh, ah = Object.prototype, sh = ah.hasOwnProperty;
function oh(r, e) {
  return r != null && sh.call(r, e);
}
var uh = oh, lh = yr, ch = mn, fh = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, hh = /^\w*$/;
function dh(r, e) {
  if (lh(r))
    return !1;
  var t = typeof r;
  return t == "number" || t == "symbol" || t == "boolean" || r == null || ch(r) ? !0 : hh.test(r) || !fh.test(r) || e != null && r in Object(e);
}
var mh = dh;
function yh(r) {
  var e = typeof r;
  return r != null && (e == "object" || e == "function");
}
var Gr = yh, ph = Ze, vh = Gr, gh = "[object AsyncFunction]", $h = "[object Function]", wh = "[object GeneratorFunction]", bh = "[object Proxy]";
function Eh(r) {
  if (!vh(r))
    return !1;
  var e = ph(r);
  return e == $h || e == wh || e == gh || e == bh;
}
var ys = Eh, xh = Zr, Th = xh["__core-js_shared__"], Sh = Th, dt = Sh, pi = function() {
  var r = /[^.]+$/.exec(dt && dt.keys && dt.keys.IE_PROTO || "");
  return r ? "Symbol(src)_1." + r : "";
}();
function Ih(r) {
  return !!pi && pi in r;
}
var Oh = Ih, Ah = Function.prototype, _h = Ah.toString;
function Ch(r) {
  if (r != null) {
    try {
      return _h.call(r);
    } catch {
    }
    try {
      return r + "";
    } catch {
    }
  }
  return "";
}
var kh = Ch, Nh = ys, Fh = Oh, Mh = Gr, Dh = kh, Uh = /[\\^$.*+?()[\]{}|]/g, Ph = /^\[object .+?Constructor\]$/, Lh = Function.prototype, Rh = Object.prototype, Bh = Lh.toString, jh = Rh.hasOwnProperty, Vh = RegExp(
  "^" + Bh.call(jh).replace(Uh, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Wh(r) {
  if (!Mh(r) || Fh(r))
    return !1;
  var e = Nh(r) ? Vh : Ph;
  return e.test(Dh(r));
}
var zh = Wh;
function Zh(r, e) {
  return r == null ? void 0 : r[e];
}
var Gh = Zh, Hh = zh, qh = Gh;
function Yh(r, e) {
  var t = qh(r, e);
  return Hh(t) ? t : void 0;
}
var yn = Yh, Jh = yn, Xh = Jh(Object, "create"), Hr = Xh, vi = Hr;
function Kh() {
  this.__data__ = vi ? vi(null) : {}, this.size = 0;
}
var Qh = Kh;
function ed(r) {
  var e = this.has(r) && delete this.__data__[r];
  return this.size -= e ? 1 : 0, e;
}
var rd = ed, td = Hr, nd = "__lodash_hash_undefined__", id = Object.prototype, ad = id.hasOwnProperty;
function sd(r) {
  var e = this.__data__;
  if (td) {
    var t = e[r];
    return t === nd ? void 0 : t;
  }
  return ad.call(e, r) ? e[r] : void 0;
}
var od = sd, ud = Hr, ld = Object.prototype, cd = ld.hasOwnProperty;
function fd(r) {
  var e = this.__data__;
  return ud ? e[r] !== void 0 : cd.call(e, r);
}
var hd = fd, dd = Hr, md = "__lodash_hash_undefined__";
function yd(r, e) {
  var t = this.__data__;
  return this.size += this.has(r) ? 0 : 1, t[r] = dd && e === void 0 ? md : e, this;
}
var pd = yd, vd = Qh, gd = rd, $d = od, wd = hd, bd = pd;
function He(r) {
  var e = -1, t = r == null ? 0 : r.length;
  for (this.clear(); ++e < t; ) {
    var n = r[e];
    this.set(n[0], n[1]);
  }
}
He.prototype.clear = vd;
He.prototype.delete = gd;
He.prototype.get = $d;
He.prototype.has = wd;
He.prototype.set = bd;
var Ed = He;
function xd() {
  this.__data__ = [], this.size = 0;
}
var Td = xd;
function Sd(r, e) {
  return r === e || r !== r && e !== e;
}
var qr = Sd, Id = qr;
function Od(r, e) {
  for (var t = r.length; t--; )
    if (Id(r[t][0], e))
      return t;
  return -1;
}
var Yr = Od, Ad = Yr, _d = Array.prototype, Cd = _d.splice;
function kd(r) {
  var e = this.__data__, t = Ad(e, r);
  if (t < 0)
    return !1;
  var n = e.length - 1;
  return t == n ? e.pop() : Cd.call(e, t, 1), --this.size, !0;
}
var Nd = kd, Fd = Yr;
function Md(r) {
  var e = this.__data__, t = Fd(e, r);
  return t < 0 ? void 0 : e[t][1];
}
var Dd = Md, Ud = Yr;
function Pd(r) {
  return Ud(this.__data__, r) > -1;
}
var Ld = Pd, Rd = Yr;
function Bd(r, e) {
  var t = this.__data__, n = Rd(t, r);
  return n < 0 ? (++this.size, t.push([r, e])) : t[n][1] = e, this;
}
var jd = Bd, Vd = Td, Wd = Nd, zd = Dd, Zd = Ld, Gd = jd;
function qe(r) {
  var e = -1, t = r == null ? 0 : r.length;
  for (this.clear(); ++e < t; ) {
    var n = r[e];
    this.set(n[0], n[1]);
  }
}
qe.prototype.clear = Vd;
qe.prototype.delete = Wd;
qe.prototype.get = zd;
qe.prototype.has = Zd;
qe.prototype.set = Gd;
var Hd = qe, qd = yn, Yd = Zr, Jd = qd(Yd, "Map"), Xd = Jd, gi = Ed, Kd = Hd, Qd = Xd;
function em() {
  this.size = 0, this.__data__ = {
    hash: new gi(),
    map: new (Qd || Kd)(),
    string: new gi()
  };
}
var rm = em;
function tm(r) {
  var e = typeof r;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? r !== "__proto__" : r === null;
}
var nm = tm, im = nm;
function am(r, e) {
  var t = r.__data__;
  return im(e) ? t[typeof e == "string" ? "string" : "hash"] : t.map;
}
var Jr = am, sm = Jr;
function om(r) {
  var e = sm(this, r).delete(r);
  return this.size -= e ? 1 : 0, e;
}
var um = om, lm = Jr;
function cm(r) {
  return lm(this, r).get(r);
}
var fm = cm, hm = Jr;
function dm(r) {
  return hm(this, r).has(r);
}
var mm = dm, ym = Jr;
function pm(r, e) {
  var t = ym(this, r), n = t.size;
  return t.set(r, e), this.size += t.size == n ? 0 : 1, this;
}
var vm = pm, gm = rm, $m = um, wm = fm, bm = mm, Em = vm;
function Ye(r) {
  var e = -1, t = r == null ? 0 : r.length;
  for (this.clear(); ++e < t; ) {
    var n = r[e];
    this.set(n[0], n[1]);
  }
}
Ye.prototype.clear = gm;
Ye.prototype.delete = $m;
Ye.prototype.get = wm;
Ye.prototype.has = bm;
Ye.prototype.set = Em;
var xm = Ye, ps = xm, Tm = "Expected a function";
function pn(r, e) {
  if (typeof r != "function" || e != null && typeof e != "function")
    throw new TypeError(Tm);
  var t = function() {
    var n = arguments, a = e ? e.apply(this, n) : n[0], u = t.cache;
    if (u.has(a))
      return u.get(a);
    var c = r.apply(this, n);
    return t.cache = u.set(a, c) || u, c;
  };
  return t.cache = new (pn.Cache || ps)(), t;
}
pn.Cache = ps;
var Sm = pn, Im = Sm, Om = 500;
function Am(r) {
  var e = Im(r, function(n) {
    return t.size === Om && t.clear(), n;
  }), t = e.cache;
  return e;
}
var _m = Am, Cm = _m, km = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Nm = /\\(\\)?/g, Fm = Cm(function(r) {
  var e = [];
  return r.charCodeAt(0) === 46 && e.push(""), r.replace(km, function(t, n, a, u) {
    e.push(a ? u.replace(Nm, "$1") : n || t);
  }), e;
}), Mm = Fm, Dm = yr, Um = mh, Pm = Mm, Lm = _e;
function Rm(r, e) {
  return Dm(r) ? r : Um(r, e) ? [r] : Pm(Lm(r));
}
var Bm = Rm, jm = Ze, Vm = Ge, Wm = "[object Arguments]";
function zm(r) {
  return Vm(r) && jm(r) == Wm;
}
var Zm = zm, $i = Zm, Gm = Ge, vs = Object.prototype, Hm = vs.hasOwnProperty, qm = vs.propertyIsEnumerable, Ym = $i(/* @__PURE__ */ function() {
  return arguments;
}()) ? $i : function(r) {
  return Gm(r) && Hm.call(r, "callee") && !qm.call(r, "callee");
}, gs = Ym, Jm = 9007199254740991, Xm = /^(?:0|[1-9]\d*)$/;
function Km(r, e) {
  var t = typeof r;
  return e = e ?? Jm, !!e && (t == "number" || t != "symbol" && Xm.test(r)) && r > -1 && r % 1 == 0 && r < e;
}
var vn = Km, Qm = 9007199254740991;
function ey(r) {
  return typeof r == "number" && r > -1 && r % 1 == 0 && r <= Qm;
}
var gn = ey, ry = mn;
function ty(r) {
  if (typeof r == "string" || ry(r))
    return r;
  var e = r + "";
  return e == "0" && 1 / r == -1 / 0 ? "-0" : e;
}
var ny = ty, iy = Bm, ay = gs, sy = yr, oy = vn, uy = gn, ly = ny;
function cy(r, e, t) {
  e = iy(e, r);
  for (var n = -1, a = e.length, u = !1; ++n < a; ) {
    var c = ly(e[n]);
    if (!(u = r != null && t(r, c)))
      break;
    r = r[c];
  }
  return u || ++n != a ? u : (a = r == null ? 0 : r.length, !!a && uy(a) && oy(c, a) && (sy(r) || ay(r)));
}
var fy = cy, hy = uh, dy = fy;
function my(r, e) {
  return r != null && dy(r, e, hy);
}
var yy = my;
let Sr;
const py = new Uint8Array(16);
function vy() {
  if (!Sr && (Sr = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Sr))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Sr(py);
}
const V = [];
for (let r = 0; r < 256; ++r)
  V.push((r + 256).toString(16).slice(1));
function gy(r, e = 0) {
  return V[r[e + 0]] + V[r[e + 1]] + V[r[e + 2]] + V[r[e + 3]] + "-" + V[r[e + 4]] + V[r[e + 5]] + "-" + V[r[e + 6]] + V[r[e + 7]] + "-" + V[r[e + 8]] + V[r[e + 9]] + "-" + V[r[e + 10]] + V[r[e + 11]] + V[r[e + 12]] + V[r[e + 13]] + V[r[e + 14]] + V[r[e + 15]];
}
let wi, mt, yt = 0, pt = 0;
function $y(r, e, t) {
  let n = 0;
  const a = new Array(16);
  r = r || {};
  let u = r.node || wi, c = r.clockseq !== void 0 ? r.clockseq : mt;
  if (u == null || c == null) {
    const b = r.random || (r.rng || vy)();
    u == null && (u = wi = [b[0] | 1, b[1], b[2], b[3], b[4], b[5]]), c == null && (c = mt = (b[6] << 8 | b[7]) & 16383);
  }
  let o = r.msecs !== void 0 ? r.msecs : Date.now(), h = r.nsecs !== void 0 ? r.nsecs : pt + 1;
  const y = o - yt + (h - pt) / 1e4;
  if (y < 0 && r.clockseq === void 0 && (c = c + 1 & 16383), (y < 0 || o > yt) && r.nsecs === void 0 && (h = 0), h >= 1e4)
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  yt = o, pt = h, mt = c, o += 122192928e5;
  const v = ((o & 268435455) * 1e4 + h) % 4294967296;
  a[n++] = v >>> 24 & 255, a[n++] = v >>> 16 & 255, a[n++] = v >>> 8 & 255, a[n++] = v & 255;
  const g = o / 4294967296 * 1e4 & 268435455;
  a[n++] = g >>> 8 & 255, a[n++] = g & 255, a[n++] = g >>> 24 & 15 | 16, a[n++] = g >>> 16 & 255, a[n++] = c >>> 8 | 128, a[n++] = c & 255;
  for (let b = 0; b < 6; ++b)
    a[n + b] = u[b];
  return e || gy(a);
}
function wy(r, e) {
  var u, c;
  const t = (((u = r.stack) == null ? void 0 : u.split(/\n/g)) || [])[1], [n, ...a] = ((c = e.stack) == null ? void 0 : c.split(/\n/g)) || [];
  return [n, t, ...a].join(`
`);
}
var by = Object.defineProperty, Ey = (r, e, t) => e in r ? by(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, ie = (r, e, t) => Ey(r, typeof e != "symbol" ? e + "" : e, t);
class O extends Error {
  constructor(e = {}) {
    super(), ie(this, "statusCode"), ie(this, "errorType"), ie(this, "level"), ie(this, "id"), ie(this, "context"), ie(this, "help"), ie(this, "errorDetails"), ie(this, "code"), ie(this, "property"), ie(this, "redirect"), ie(this, "hideStack"), this.statusCode = 500, this.errorType = "InternalServerError", this.level = "normal", this.message = "The server has encountered an error.", this.id = $y(), this.id = e.id || this.id, this.statusCode = e.statusCode || this.statusCode, this.level = e.level || this.level, this.context = e.context, this.help = e.help, this.errorType = this.name = e.errorType || this.errorType, this.errorDetails = e.errorDetails, this.code = e.code || null, this.property = e.property || null, this.redirect = e.redirect || null, this.message = e.message || this.message, this.hideStack = e.hideStack || !1, e.err && (typeof e.err == "string" && (e.err = new Error(e.err)), Object.getOwnPropertyNames(e.err).forEach((t) => {
      if (["errorType", "name", "statusCode", "message", "level"].indexOf(t) === -1) {
        if (t === "code") {
          this[t] = this[t] || e.err[t];
          return;
        }
        if (t === "stack" && !this.hideStack) {
          this[t] = wy(this, e.err);
          return;
        }
        this[t] = e.err[t] || this[t];
      }
    }));
  }
}
const _ = (r, e) => {
  const t = { ...e };
  return Object.keys(r).forEach((n) => {
    r[n] !== void 0 && (t[n] = r[n]);
  }), t;
};
class Be extends O {
  constructor(e = {}) {
    super(_(e, {
      statusCode: 500,
      level: "critical",
      errorType: "InternalServerError",
      message: "The server has encountered an error."
    }));
  }
}
let $s = class extends O {
  constructor(e = {}) {
    super(_(e, {
      statusCode: 400,
      level: "critical",
      errorType: "IncorrectUsageError",
      message: "We detected a misuse. Please read the stack trace."
    }));
  }
};
class ws extends O {
  constructor(e = {}) {
    super(_(e, {
      statusCode: 404,
      errorType: "NotFoundError",
      message: "Resource could not be found.",
      hideStack: !0
    }));
  }
}
class $n extends O {
  constructor(e = {}) {
    super(_(e, {
      statusCode: 400,
      errorType: "BadRequestError",
      message: "The request could not be understood."
    }));
  }
}
class bs extends O {
  constructor(e = {}) {
    super(_(e, {
      statusCode: 401,
      errorType: "UnauthorizedError",
      message: "You are not authorised to make this request."
    }));
  }
}
class wn extends O {
  constructor(e = {}) {
    super(_(e, {
      statusCode: 403,
      errorType: "NoPermissionError",
      message: "You do not have permission to perform this request."
    }));
  }
}
class bn extends O {
  constructor(e = {}) {
    super(_(e, {
      statusCode: 422,
      errorType: "ValidationError",
      message: "The request failed validation."
    }));
  }
}
class Es extends O {
  constructor(e = {}) {
    super(_(e, {
      statusCode: 415,
      errorType: "UnsupportedMediaTypeError",
      message: "The media in the request is not supported by the server."
    }));
  }
}
class xs extends O {
  constructor(e = {}) {
    super(_(e, {
      statusCode: 429,
      errorType: "TooManyRequestsError",
      message: "Server has received too many similar requests in a short space of time."
    }));
  }
}
class En extends O {
  constructor(e = {}) {
    super(_(e, {
      statusCode: 503,
      errorType: "MaintenanceError",
      message: "The server is temporarily down for maintenance."
    }));
  }
}
class Ts extends O {
  constructor(e = {}) {
    super(_(e, {
      statusCode: 405,
      errorType: "MethodNotAllowedError",
      message: "Method not allowed for resource."
    }));
  }
}
class Ss extends O {
  constructor(e = {}) {
    super(_(e, {
      statusCode: 406,
      errorType: "RequestNotAcceptableError",
      message: "Request not acceptable for provided Accept-Version header.",
      hideStack: !0
    }));
  }
}
class Is extends O {
  constructor(e = {}) {
    super(_(e, {
      statusCode: 416,
      errorType: "RangeNotSatisfiableError",
      message: "Range not satisfiable for provided Range header.",
      hideStack: !0
    }));
  }
}
class Os extends O {
  constructor(e = {}) {
    super(_(e, {
      statusCode: 413,
      errorType: "RequestEntityTooLargeError",
      message: "Request was too big for the server to handle."
    }));
  }
}
class As extends O {
  constructor(e = {}) {
    super(_(e, {
      statusCode: 503,
      errorType: "TokenRevocationError",
      message: "Token is no longer available."
    }));
  }
}
class _s extends O {
  constructor(e = {}) {
    super(_(e, {
      statusCode: 400,
      errorType: "VersionMismatchError",
      message: "Requested version does not match server version."
    }));
  }
}
class Cs extends O {
  constructor(e = {}) {
    super(_(e, {
      statusCode: 500,
      errorType: "DataExportError",
      message: "The server encountered an error whilst exporting data."
    }));
  }
}
class ks extends O {
  constructor(e = {}) {
    super(_(e, {
      statusCode: 500,
      errorType: "DataImportError",
      message: "The server encountered an error whilst importing data."
    }));
  }
}
class Ns extends O {
  constructor(e = {}) {
    super(_(e, {
      statusCode: 500,
      errorType: "EmailError",
      message: "The server encountered an error whilst sending email."
    }));
  }
}
class Fs extends O {
  constructor(e = {}) {
    super(_(e, {
      statusCode: 422,
      errorType: "ThemeValidationError",
      message: "The theme has a validation error.",
      errorDetails: {}
    }));
  }
}
class Ms extends O {
  constructor(e = {}) {
    super(_(e, {
      statusCode: 409,
      errorType: "DisabledFeatureError",
      message: "Unable to complete the request, this feature is disabled."
    }));
  }
}
class Ds extends O {
  constructor(e = {}) {
    super(_(e, {
      statusCode: 409,
      errorType: "UpdateCollisionError",
      message: "Unable to complete the request, there was a conflict."
    }));
  }
}
class Us extends O {
  constructor(e = {}) {
    super(_(e, {
      errorType: "HostLimitError",
      hideStack: !0,
      statusCode: 403,
      message: "Unable to complete the request, this resource is limited."
    }));
  }
}
class Ps extends O {
  constructor(e = {}) {
    super(_(e, {
      errorType: "HelperWarning",
      hideStack: !0,
      statusCode: 400,
      message: "A theme helper has done something unexpected."
    }));
  }
}
class Ls extends O {
  constructor(e = {}) {
    super(_(e, {
      errorType: "PasswordResetRequiredError",
      statusCode: 401,
      message: "For security, you need to create a new password. An email has been sent to you with instructions!"
    }));
  }
}
class Rs extends O {
  constructor(e = {}) {
    super(_(e, {
      errorType: "UnhandledJobError",
      message: "Processed job threw an unhandled error",
      level: "critical"
    }));
  }
}
class Bs extends O {
  constructor(e = {}) {
    super(_(e, {
      errorType: "NoContentError",
      statusCode: 204,
      hideStack: !0
    }));
  }
}
class js extends O {
  constructor(e = {}) {
    super(_(e, {
      errorType: "ConflictError",
      statusCode: 409,
      message: "The server has encountered an conflict."
    }));
  }
}
class Vs extends O {
  constructor(e = {}) {
    super(_(e, {
      errorType: "MigrationError",
      message: "An error has occurred applying a database migration.",
      level: "critical"
    }));
  }
}
const Ws = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BadRequestError: $n,
  ConflictError: js,
  DataExportError: Cs,
  DataImportError: ks,
  DisabledFeatureError: Ms,
  EmailError: Ns,
  HelperWarning: Ps,
  HostLimitError: Us,
  IncorrectUsageError: $s,
  InternalServerError: Be,
  MaintenanceError: En,
  MethodNotAllowedError: Ts,
  MigrationError: Vs,
  NoContentError: Bs,
  NoPermissionError: wn,
  NotFoundError: ws,
  PasswordResetRequiredError: Ls,
  RangeNotSatisfiableError: Is,
  RequestEntityTooLargeError: Os,
  RequestNotAcceptableError: Ss,
  ThemeValidationError: Fs,
  TokenRevocationError: As,
  TooManyRequestsError: xs,
  UnauthorizedError: bs,
  UnhandledJobError: Rs,
  UnsupportedMediaTypeError: Es,
  UpdateCollisionError: Ds,
  ValidationError: bn,
  VersionMismatchError: _s
}, Symbol.toStringTag, { value: "Module" }));
/**
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
*/
function xy() {
  return typeof Symbol == "function" && typeof Symbol("foo") == "symbol";
}
var Ty = xy;
/**
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
*/
var Sy = Ty, Iy = Sy;
/**
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
*/
var Oy = Iy, Ay = Oy();
function _y() {
  return Ay && typeof Symbol.toStringTag == "symbol";
}
var Cy = _y;
/**
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
*/
var ky = Cy, Xr = ky;
/**
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
*/
var Ny = Object.prototype.toString, zs = Ny;
/**
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
*/
var Fy = zs;
function My(r) {
  return Fy.call(r);
}
var Dy = My;
/**
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
*/
var Uy = Object.prototype.hasOwnProperty;
function Py(r, e) {
  return r == null ? !1 : Uy.call(r, e);
}
var Ly = Py;
/**
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
*/
var Ry = Ly, Je = Ry;
/**
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
*/
var By = typeof Symbol == "function" ? Symbol : void 0, jy = By;
/**
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
*/
var Vy = jy, Wy = Vy;
/**
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
*/
var bi = Wy, zy = typeof bi == "function" ? bi.toStringTag : "", Zy = zy;
/**
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
*/
var Gy = Je, ar = Zy, vt = zs;
function Hy(r) {
  var e, t, n;
  if (r == null)
    return vt.call(r);
  t = r[ar], e = Gy(r, ar);
  try {
    r[ar] = void 0;
  } catch {
    return vt.call(r);
  }
  return n = vt.call(r), e ? r[ar] = t : delete r[ar], n;
}
var qy = Hy;
/**
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
*/
var Yy = Xr, Jy = Dy, Xy = qy, Pt;
Yy() ? Pt = Xy : Pt = Jy;
var W = Pt;
/**
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
*/
var Ky = W, Lt;
function Qy(r) {
  return Ky(r) === "[object Array]";
}
Array.isArray ? Lt = Array.isArray : Lt = Qy;
var ep = Lt;
/**
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
*/
var rp = ep, Kr = rp;
/**
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
*/
var tp = typeof Object.defineProperty == "function" ? Object.defineProperty : null, np = tp;
/**
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
*/
var ip = np;
function ap() {
  try {
    return ip({}, "x", {}), !0;
  } catch {
    return !1;
  }
}
var sp = ap;
/**
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
*/
var op = Object.defineProperty, up = op;
/**
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
*/
function lp(r) {
  return typeof r == "number";
}
var Zs = lp;
/**
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
*/
function cp(r) {
  return r[0] === "-";
}
function Ei(r) {
  var e = "", t;
  for (t = 0; t < r; t++)
    e += "0";
  return e;
}
function fp(r, e, t) {
  var n = !1, a = e - r.length;
  return a < 0 || (cp(r) && (n = !0, r = r.substr(1)), r = t ? r + Ei(a) : Ei(a) + r, n && (r = "-" + r)), r;
}
var Gs = fp;
/**
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
*/
var hp = Zs, xi = Gs, dp = String.prototype.toLowerCase, Ti = String.prototype.toUpperCase;
function mp(r) {
  var e, t, n;
  switch (r.specifier) {
    case "b":
      e = 2;
      break;
    case "o":
      e = 8;
      break;
    case "x":
    case "X":
      e = 16;
      break;
    case "d":
    case "i":
    case "u":
    default:
      e = 10;
      break;
  }
  if (t = r.arg, n = parseInt(t, 10), !isFinite(n)) {
    if (!hp(t))
      throw new Error("invalid integer. Value: " + t);
    n = 0;
  }
  return n < 0 && (r.specifier === "u" || e !== 10) && (n = 4294967295 + n + 1), n < 0 ? (t = (-n).toString(e), r.precision && (t = xi(t, r.precision, r.padRight)), t = "-" + t) : (t = n.toString(e), !n && !r.precision ? t = "" : r.precision && (t = xi(t, r.precision, r.padRight)), r.sign && (t = r.sign + t)), e === 16 && (r.alternate && (t = "0x" + t), t = r.specifier === Ti.call(r.specifier) ? Ti.call(t) : dp.call(t)), e === 8 && r.alternate && t.charAt(0) !== "0" && (t = "0" + t), t;
}
var yp = mp;
/**
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
*/
function pp(r) {
  return typeof r == "string";
}
var vp = pp;
/**
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
*/
var gp = Zs, $p = Math.abs, wp = String.prototype.toLowerCase, Si = String.prototype.toUpperCase, Te = String.prototype.replace, bp = /e\+(\d)$/, Ep = /e-(\d)$/, xp = /^(\d+)$/, Tp = /^(\d+)e/, Sp = /\.0$/, Ip = /\.0*e/, Op = /(\..*[^0])0*e/;
function Ap(r) {
  var e, t, n = parseFloat(r.arg);
  if (!isFinite(n)) {
    if (!gp(r.arg))
      throw new Error("invalid floating-point number. Value: " + t);
    n = r.arg;
  }
  switch (r.specifier) {
    case "e":
    case "E":
      t = n.toExponential(r.precision);
      break;
    case "f":
    case "F":
      t = n.toFixed(r.precision);
      break;
    case "g":
    case "G":
      $p(n) < 1e-4 ? (e = r.precision, e > 0 && (e -= 1), t = n.toExponential(e)) : t = n.toPrecision(r.precision), r.alternate || (t = Te.call(t, Op, "$1e"), t = Te.call(t, Ip, "e"), t = Te.call(t, Sp, ""));
      break;
    default:
      throw new Error("invalid double notation. Value: " + r.specifier);
  }
  return t = Te.call(t, bp, "e+0$1"), t = Te.call(t, Ep, "e-0$1"), r.alternate && (t = Te.call(t, xp, "$1."), t = Te.call(t, Tp, "$1.e")), n >= 0 && r.sign && (t = r.sign + t), t = r.specifier === Si.call(r.specifier) ? Si.call(t) : wp.call(t), t;
}
var _p = Ap;
/**
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
*/
function Ii(r) {
  var e = "", t;
  for (t = 0; t < r; t++)
    e += " ";
  return e;
}
function Cp(r, e, t) {
  var n = e - r.length;
  return n < 0 || (r = t ? r + Ii(n) : Ii(n) + r), r;
}
var kp = Cp;
/**
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
*/
var Np = yp, Fp = vp, Mp = _p, Dp = kp, Up = Gs, Pp = String.fromCharCode, Lp = Array.isArray;
function Ir(r) {
  return r !== r;
}
function Rp(r) {
  var e = {};
  return e.specifier = r.specifier, e.precision = r.precision === void 0 ? 1 : r.precision, e.width = r.width, e.flags = r.flags || "", e.mapping = r.mapping, e;
}
function Bp(r) {
  var e, t, n, a, u, c, o, h, y;
  if (!Lp(r))
    throw new TypeError("invalid argument. First argument must be an array. Value: `" + r + "`.");
  for (c = "", o = 1, h = 0; h < r.length; h++)
    if (n = r[h], Fp(n))
      c += n;
    else {
      if (e = n.precision !== void 0, n = Rp(n), !n.specifier)
        throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `" + h + "`. Value: `" + n + "`.");
      for (n.mapping && (o = n.mapping), t = n.flags, y = 0; y < t.length; y++)
        switch (a = t.charAt(y), a) {
          case " ":
            n.sign = " ";
            break;
          case "+":
            n.sign = "+";
            break;
          case "-":
            n.padRight = !0, n.padZeros = !1;
            break;
          case "0":
            n.padZeros = t.indexOf("-") < 0;
            break;
          case "#":
            n.alternate = !0;
            break;
          default:
            throw new Error("invalid flag: " + a);
        }
      if (n.width === "*") {
        if (n.width = parseInt(arguments[o], 10), o += 1, Ir(n.width))
          throw new TypeError("the argument for * width at position " + o + " is not a number. Value: `" + n.width + "`.");
        n.width < 0 && (n.padRight = !0, n.width = -n.width);
      }
      if (e && n.precision === "*") {
        if (n.precision = parseInt(arguments[o], 10), o += 1, Ir(n.precision))
          throw new TypeError("the argument for * precision at position " + o + " is not a number. Value: `" + n.precision + "`.");
        n.precision < 0 && (n.precision = 1, e = !1);
      }
      switch (n.arg = arguments[o], n.specifier) {
        case "b":
        case "o":
        case "x":
        case "X":
        case "d":
        case "i":
        case "u":
          e && (n.padZeros = !1), n.arg = Np(n);
          break;
        case "s":
          n.maxWidth = e ? n.precision : -1, n.arg = String(n.arg);
          break;
        case "c":
          if (!Ir(n.arg)) {
            if (u = parseInt(n.arg, 10), u < 0 || u > 127)
              throw new Error("invalid character code. Value: " + n.arg);
            n.arg = Ir(u) ? String(n.arg) : Pp(u);
          }
          break;
        case "e":
        case "E":
        case "f":
        case "F":
        case "g":
        case "G":
          e || (n.precision = 6), n.arg = Mp(n);
          break;
        default:
          throw new Error("invalid specifier: " + n.specifier);
      }
      n.maxWidth >= 0 && n.arg.length > n.maxWidth && (n.arg = n.arg.substring(0, n.maxWidth)), n.padZeros ? n.arg = Up(n.arg, n.width || n.precision, n.padRight) : n.width && (n.arg = Dp(n.arg, n.width, n.padRight)), c += n.arg || "", o += 1;
    }
  return c;
}
var jp = Bp;
/**
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
*/
var Vp = jp, Wp = Vp;
/**
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
*/
var Or = /%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;
function zp(r) {
  var e = {
    mapping: r[1] ? parseInt(r[1], 10) : void 0,
    flags: r[2],
    width: r[3],
    precision: r[5],
    specifier: r[6]
  };
  return r[4] === "." && r[5] === void 0 && (e.precision = "1"), e;
}
function Zp(r) {
  var e, t, n, a;
  for (t = [], a = 0, n = Or.exec(r); n; )
    e = r.slice(a, Or.lastIndex - n[0].length), e.length && t.push(e), t.push(zp(n)), a = Or.lastIndex, n = Or.exec(r);
  return e = r.slice(a), e.length && t.push(e), t;
}
var Gp = Zp;
/**
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
*/
var Hp = Gp, qp = Hp;
/**
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
*/
function Yp(r) {
  return typeof r == "string";
}
var Jp = Yp;
/**
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
*/
var Xp = Wp, Kp = qp, Qp = Jp;
function Hs(r) {
  var e, t;
  if (!Qp(r))
    throw new TypeError(Hs("invalid argument. First argument must be a string. Value: `%s`.", r));
  for (e = [Kp(r)], t = 1; t < arguments.length; t++)
    e.push(arguments[t]);
  return Xp.apply(null, e);
}
var e0 = Hs;
/**
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
*/
var r0 = e0, we = r0;
/**
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
*/
var Oi = we, Xe = Object.prototype, Ai = Xe.toString, _i = Xe.__defineGetter__, Ci = Xe.__defineSetter__, t0 = Xe.__lookupGetter__, n0 = Xe.__lookupSetter__;
function i0(r, e, t) {
  var n, a, u, c;
  if (typeof r != "object" || r === null || Ai.call(r) === "[object Array]")
    throw new TypeError(Oi("invalid argument. First argument must be an object. Value: `%s`.", r));
  if (typeof t != "object" || t === null || Ai.call(t) === "[object Array]")
    throw new TypeError(Oi("invalid argument. Property descriptor must be an object. Value: `%s`.", t));
  if (a = "value" in t, a && (t0.call(r, e) || n0.call(r, e) ? (n = r.__proto__, r.__proto__ = Xe, delete r[e], r[e] = t.value, r.__proto__ = n) : r[e] = t.value), u = "get" in t, c = "set" in t, a && (u || c))
    throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");
  return u && _i && _i.call(r, e, t.get), c && Ci && Ci.call(r, e, t.set), r;
}
var a0 = i0;
/**
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
*/
var s0 = sp, o0 = up, u0 = a0, Rt;
s0() ? Rt = o0 : Rt = u0;
var qs = Rt;
/**
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
*/
var l0 = qs;
function c0(r, e, t) {
  l0(r, e, {
    configurable: !1,
    enumerable: !1,
    writable: !1,
    value: t
  });
}
var f0 = c0;
/**
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
*/
var h0 = f0, me = h0;
/**
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
*/
function d0(r) {
  return typeof r == "number";
}
var Ys = d0;
/**
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
*/
var m0 = Number;
/**
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
*/
var y0 = m0, xn = y0;
/**
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
*/
var p0 = xn, v0 = p0.prototype.toString, g0 = v0;
/**
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
*/
var $0 = g0;
function w0(r) {
  try {
    return $0.call(r), !0;
  } catch {
    return !1;
  }
}
var b0 = w0;
/**
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
*/
var E0 = Xr, x0 = W, T0 = xn, S0 = b0, I0 = E0();
function O0(r) {
  return typeof r == "object" ? r instanceof T0 ? !0 : I0 ? S0(r) : x0(r) === "[object Number]" : !1;
}
var Js = O0;
/**
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
*/
var A0 = Ys, _0 = Js;
function C0(r) {
  return A0(r) || _0(r);
}
var k0 = C0;
/**
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
*/
var Xs = me, Tn = k0, N0 = Ys, F0 = Js;
Xs(Tn, "isPrimitive", N0);
Xs(Tn, "isObject", F0);
var Qr = Tn;
/**
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
*/
var M0 = Number.POSITIVE_INFINITY, Sn = M0;
/**
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
*/
var D0 = xn, U0 = D0.NEGATIVE_INFINITY, P0 = U0;
/**
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
*/
var L0 = Math.floor, R0 = L0;
/**
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
*/
var B0 = R0, j0 = B0;
/**
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
*/
var V0 = j0;
function W0(r) {
  return V0(r) === r;
}
var z0 = W0;
/**
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
*/
var Z0 = z0, In = Z0;
/**
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
*/
var G0 = Sn, H0 = P0, q0 = In;
function Y0(r) {
  return r < G0 && r > H0 && q0(r);
}
var Ks = Y0;
/**
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
*/
var J0 = Qr.isPrimitive, X0 = Ks;
function K0(r) {
  return J0(r) && X0(r);
}
var Qs = K0;
/**
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
*/
var Q0 = Qr.isObject, ev = Ks;
function rv(r) {
  return Q0(r) && ev(r.valueOf());
}
var eo = rv;
/**
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
*/
var tv = Qs, nv = eo;
function iv(r) {
  return tv(r) || nv(r);
}
var av = iv;
/**
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
*/
var ro = me, On = av, sv = Qs, ov = eo;
ro(On, "isPrimitive", sv);
ro(On, "isObject", ov);
var et = On;
/**
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
*/
var uv = et.isPrimitive;
function lv(r) {
  return uv(r) && r >= 0;
}
var to = lv;
/**
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
*/
var cv = et.isObject;
function fv(r) {
  return cv(r) && r.valueOf() >= 0;
}
var no = fv;
/**
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
*/
var hv = to, dv = no;
function mv(r) {
  return hv(r) || dv(r);
}
var yv = mv;
/**
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
*/
var io = me, An = yv, pv = to, vv = no;
io(An, "isPrimitive", pv);
io(An, "isObject", vv);
var gv = An;
/**
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
*/
var $v = Kr, wv = we;
function bv(r) {
  if (typeof r != "function")
    throw new TypeError(wv("invalid argument. Must provide a function. Value: `%s`.", r));
  return e;
  function e(t) {
    var n, a;
    if (!$v(t) || (n = t.length, n === 0))
      return !1;
    for (a = 0; a < n; a++)
      if (r(t[a]) === !1)
        return !1;
    return !0;
  }
}
var Ev = bv;
/**
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
*/
var xv = Ev, Tv = xv;
/**
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
*/
function Sv(r) {
  return r !== null && typeof r == "object";
}
var Iv = Sv;
/**
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
*/
var Ov = me, Av = Tv, _n = Iv, _v = Av(_n);
Ov(_n, "isObjectLikeArray", _v);
var ao = _n;
/**
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
*/
var Cv = ao;
function kv(r) {
  return Cv(r) && // eslint-disable-next-line no-underscore-dangle
  (r._isBuffer || // for envs missing Object.prototype.constructor (e.g., Safari 5-7)
  r.constructor && // WARNING: `typeof` is not a foolproof check, as certain envs consider RegExp and NodeList instances to be functions
  typeof r.constructor.isBuffer == "function" && r.constructor.isBuffer(r));
}
var Nv = kv;
/**
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
*/
var Fv = Nv, pr = Fv;
/**
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
*/
var Mv = Object, Dv = Mv;
/**
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
*/
var Uv = Dv, Cn = Uv;
/**
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
*/
var Pv = /./, Lv = Pv;
/**
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
*/
function Rv(r) {
  return typeof r == "boolean";
}
var so = Rv;
/**
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
*/
var Bv = Boolean, jv = Bv;
/**
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
*/
var Vv = jv, Wv = Vv;
/**
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
*/
var zv = Boolean.prototype.toString, Zv = zv;
/**
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
*/
var Gv = Zv;
function Hv(r) {
  try {
    return Gv.call(r), !0;
  } catch {
    return !1;
  }
}
var qv = Hv;
/**
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
*/
var Yv = Xr, Jv = W, Xv = Wv, Kv = qv, Qv = Yv();
function e1(r) {
  return typeof r == "object" ? r instanceof Xv ? !0 : Qv ? Kv(r) : Jv(r) === "[object Boolean]" : !1;
}
var oo = e1;
/**
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
*/
var r1 = so, t1 = oo;
function n1(r) {
  return r1(r) || t1(r);
}
var i1 = n1;
/**
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
*/
var uo = me, kn = i1, a1 = so, s1 = oo;
uo(kn, "isPrimitive", a1);
uo(kn, "isObject", s1);
var o1 = kn;
/**
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
*/
function u1() {
  return new Function("return this;")();
}
var l1 = u1;
/**
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
*/
var c1 = typeof self == "object" ? self : null, f1 = c1;
/**
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
*/
var h1 = typeof window == "object" ? window : null, d1 = h1;
/**
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
*/
var m1 = typeof globalThis == "object" ? globalThis : null, y1 = m1;
/**
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
*/
var p1 = o1.isPrimitive, v1 = we, g1 = l1, ki = f1, Ni = d1, Fi = y1;
function $1(r) {
  if (arguments.length) {
    if (!p1(r))
      throw new TypeError(v1("invalid argument. Must provide a boolean. Value: `%s`.", r));
    if (r)
      return g1();
  }
  if (Fi)
    return Fi;
  if (ki)
    return ki;
  if (Ni)
    return Ni;
  throw new Error("unexpected error. Unable to resolve global object.");
}
var w1 = $1;
/**
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
*/
var b1 = w1, Mi = b1(), E1 = Mi.document && Mi.document.childNodes, x1 = E1;
/**
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
*/
var T1 = Int8Array, S1 = T1;
/**
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
*/
var I1 = Lv, O1 = x1, A1 = S1;
function _1() {
  return (
    // Chrome 1-12 returns 'function' for regular expression instances (see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof):
    typeof I1 == "function" || // Safari 8 returns 'object' for typed array and weak map constructors (underscore #1929):
    typeof A1 == "object" || // PhantomJS 1.9 returns 'function' for `NodeList` instances (underscore #2236):
    typeof O1 == "function"
  );
}
var C1 = _1;
/**
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
*/
function k1() {
  return /^\s*function\s*([^(]*)/i;
}
var lo = k1;
/**
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
*/
var N1 = lo, F1 = N1(), M1 = F1;
/**
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
*/
var D1 = me, co = lo, U1 = M1;
D1(co, "REGEXP", U1);
var P1 = co;
/**
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
*/
var L1 = W, R1 = P1.REGEXP, B1 = pr;
function j1(r) {
  var e, t, n;
  if (t = L1(r).slice(8, -1), (t === "Object" || t === "Error") && r.constructor) {
    if (n = r.constructor, typeof n.name == "string")
      return n.name;
    if (e = R1.exec(n.toString()), e)
      return e[1];
  }
  return B1(r) ? "Buffer" : t;
}
var V1 = j1;
/**
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
*/
var W1 = V1, fo = W1;
/**
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
*/
var z1 = fo;
function Z1(r) {
  var e;
  return r === null ? "null" : (e = typeof r, e === "object" ? z1(r).toLowerCase() : e);
}
var G1 = Z1;
/**
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
*/
var H1 = fo;
function q1(r) {
  return H1(r).toLowerCase();
}
var Y1 = q1;
/**
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
*/
var J1 = C1, X1 = G1, K1 = Y1, Q1 = J1() ? K1 : X1, Nn = Q1;
/**
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
*/
var eg = Nn;
function rg(r) {
  return eg(r) === "function";
}
var tg = rg;
/**
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
*/
var ng = tg, ho = ng;
/**
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
*/
var ig = Object.getPrototypeOf, ag = ig;
/**
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
*/
function sg(r) {
  return r.__proto__;
}
var og = sg;
/**
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
*/
var ug = W, lg = og;
function cg(r) {
  var e = lg(r);
  return e || e === null ? e : ug(r.constructor) === "[object Function]" ? r.constructor.prototype : r instanceof Object ? Object.prototype : null;
}
var fg = cg;
/**
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
*/
var hg = ho, dg = ag, mg = fg, Bt;
hg(Object.getPrototypeOf) ? Bt = dg : Bt = mg;
var yg = Bt;
/**
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
*/
var pg = Cn, vg = yg;
function gg(r) {
  return r == null ? null : (r = pg(r), vg(r));
}
var $g = gg;
/**
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
*/
var wg = $g, mo = wg;
/**
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
*/
var bg = mo, Eg = W;
function xg(r) {
  if (typeof r != "object" || r === null)
    return !1;
  if (r instanceof Error)
    return !0;
  for (; r; ) {
    if (Eg(r) === "[object Error]")
      return !0;
    r = bg(r);
  }
  return !1;
}
var Tg = xg;
/**
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
*/
var Sg = Tg, Ig = Sg;
/**
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
*/
function Og(r) {
  return typeof r == "string";
}
var yo = Og;
/**
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
*/
var Ag = String.prototype.valueOf, _g = Ag;
/**
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
*/
var Cg = _g;
function kg(r) {
  try {
    return Cg.call(r), !0;
  } catch {
    return !1;
  }
}
var Ng = kg;
/**
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
*/
var Fg = Xr, Mg = W, Dg = Ng, Ug = Fg();
function Pg(r) {
  return typeof r == "object" ? r instanceof String ? !0 : Ug ? Dg(r) : Mg(r) === "[object String]" : !1;
}
var po = Pg;
/**
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
*/
var Lg = yo, Rg = po;
function Bg(r) {
  return Lg(r) || Rg(r);
}
var jg = Bg;
/**
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
*/
var vo = me, Fn = jg, Vg = yo, Wg = po;
vo(Fn, "isPrimitive", Vg);
vo(Fn, "isObject", Wg);
var Mn = Fn;
/**
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
*/
function zg() {
  return /^\/((?:\\\/|[^\/])+)\/([imgy]*)$/;
}
var go = zg;
/**
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
*/
var Zg = go, Gg = Zg(), Hg = Gg;
/**
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
*/
var qg = me, $o = go, Yg = Hg;
qg($o, "REGEXP", Yg);
var Jg = $o;
/**
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
*/
var Xg = Mn.isPrimitive, Kg = Jg, Qg = we;
function e$(r) {
  if (!Xg(r))
    throw new TypeError(Qg("invalid argument. Must provide a regular expression string. Value: `%s`.", r));
  return r = Kg().exec(r), r ? new RegExp(r[1], r[2]) : null;
}
var r$ = e$;
/**
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
*/
var t$ = r$, n$ = t$;
/**
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
*/
function i$(r) {
  return r !== r;
}
var a$ = i$;
/**
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
*/
var s$ = a$, wo = s$;
/**
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
*/
var o$ = Qr.isPrimitive, u$ = wo;
function l$(r) {
  return o$(r) && u$(r);
}
var bo = l$;
/**
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
*/
var c$ = Qr.isObject, f$ = wo;
function h$(r) {
  return c$(r) && f$(r.valueOf());
}
var Eo = h$;
/**
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
*/
var d$ = bo, m$ = Eo;
function y$(r) {
  return d$(r) || m$(r);
}
var p$ = y$;
/**
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
*/
var xo = me, Dn = p$, v$ = bo, g$ = Eo;
xo(Dn, "isPrimitive", v$);
xo(Dn, "isObject", g$);
var To = Dn;
/**
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
*/
var $$ = 9007199254740991, w$ = $$;
/**
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
*/
var b$ = In, E$ = w$;
function x$(r) {
  return typeof r == "object" && r !== null && typeof r.length == "number" && b$(r.length) && r.length >= 0 && r.length <= E$;
}
var T$ = x$;
/**
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
*/
var S$ = T$, I$ = S$;
/**
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
*/
var Di = To, O$ = I$, A$ = Mn.isPrimitive, _$ = et.isPrimitive, Ui = we;
function C$(r, e, t) {
  var n, a;
  if (!O$(r) && !A$(r))
    throw new TypeError(Ui("invalid argument. First argument must be an array-like object. Value: `%s`.", r));
  if (n = r.length, n === 0)
    return -1;
  if (arguments.length === 3) {
    if (!_$(t))
      throw new TypeError(Ui("invalid argument. Third argument must be an integer. Value: `%s`.", t));
    if (t >= 0) {
      if (t >= n)
        return -1;
      a = t;
    } else
      a = n + t, a < 0 && (a = 0);
  } else
    a = 0;
  if (Di(e)) {
    for (; a < n; a++)
      if (Di(r[a]))
        return a;
  } else
    for (; a < n; a++)
      if (r[a] === e)
        return a;
  return -1;
}
var k$ = C$;
/**
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
*/
var N$ = k$, So = N$;
/**
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
*/
function F$(r) {
  return Object.keys(Object(r));
}
var Un = F$;
/**
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
*/
var M$ = Un;
function D$() {
  return (M$(arguments) || "").length !== 2;
}
function U$() {
  return D$(1, 2);
}
var P$ = U$;
/**
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
*/
var L$ = typeof Object.keys < "u", R$ = L$;
/**
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
*/
var B$ = W;
function j$(r) {
  return B$(r) === "[object Arguments]";
}
var Io = j$;
/**
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
*/
var V$ = Io, Oo;
function W$() {
  return V$(arguments);
}
Oo = W$();
var z$ = Oo;
/**
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
*/
var Z$ = Object.prototype.propertyIsEnumerable, Ao = Z$;
/**
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
*/
var G$ = Ao, _o;
function H$() {
  return !G$.call("beep", "0");
}
_o = H$();
var q$ = _o;
/**
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
*/
var Y$ = Mn, J$ = To.isPrimitive, X$ = et.isPrimitive, K$ = Ao, Q$ = q$;
function ew(r, e) {
  var t;
  return r == null ? !1 : (t = K$.call(r, e), !t && Q$ && Y$(r) ? (e = +e, !J$(e) && X$(e) && e >= 0 && e < r.length) : t);
}
var rw = ew;
/**
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
*/
var tw = rw, Pn = tw;
/**
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
*/
var nw = 4294967295, Co = nw;
/**
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
*/
var iw = Je, aw = Pn, sw = Kr, ow = In, uw = Co;
function lw(r) {
  return r !== null && typeof r == "object" && !sw(r) && typeof r.length == "number" && ow(r.length) && r.length >= 0 && r.length <= uw && iw(r, "callee") && !aw(r, "callee");
}
var cw = lw;
/**
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
*/
var fw = z$, hw = Io, dw = cw, jt;
fw ? jt = hw : jt = dw;
var ko = jt;
/**
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
*/
var mw = ko, Pi = Un, yw = Array.prototype.slice;
function pw(r) {
  return mw(r) ? Pi(yw.call(r)) : Pi(r);
}
var vw = pw;
/**
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
*/
function gw() {
}
var $w = gw;
/**
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
*/
var ww = $w, bw = ww;
/**
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
*/
var Ew = Pn, xw = bw, Tw = Ew(xw, "prototype"), Sw = Tw;
/**
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
*/
var Iw = Pn, Ow = {
  toString: null
}, Aw = !Iw(Ow, "toString"), _w = Aw;
/**
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
*/
function Cw(r) {
  return r.constructor && r.constructor.prototype === r;
}
var No = Cw;
const kw = [
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
/**
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
*/
var Nw = typeof window > "u" ? void 0 : window, Fw = Nw;
/**
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
*/
var Mw = Je, Dw = So, Li = Nn, Uw = No, Pw = kw, Me = Fw, Fo;
function Lw() {
  var r;
  if (Li(Me) === "undefined")
    return !1;
  for (r in Me)
    try {
      Dw(Pw, r) === -1 && Mw(Me, r) && Me[r] !== null && Li(Me[r]) === "object" && Uw(Me[r]);
    } catch {
      return !0;
    }
  return !1;
}
Fo = Lw();
var Rw = Fo;
/**
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
*/
var Bw = typeof window < "u", jw = Bw;
/**
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
*/
var Vw = Rw, Ri = No, Ww = jw;
function zw(r) {
  if (Ww === !1 && !Vw)
    return Ri(r);
  try {
    return Ri(r);
  } catch {
    return !1;
  }
}
var Zw = zw;
const Gw = [
  "toString",
  "toLocaleString",
  "valueOf",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "constructor"
];
/**
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
*/
var Hw = ao, gt = Je, qw = ko, Yw = Sw, Jw = _w, Xw = Zw, Bi = Gw;
function Kw(r) {
  var e, t, n, a, u, c, o;
  if (a = [], qw(r)) {
    for (o = 0; o < r.length; o++)
      a.push(o.toString());
    return a;
  }
  if (typeof r == "string") {
    if (r.length > 0 && !gt(r, "0"))
      for (o = 0; o < r.length; o++)
        a.push(o.toString());
  } else {
    if (n = typeof r == "function", n === !1 && !Hw(r))
      return a;
    t = Yw && n;
  }
  for (u in r)
    !(t && u === "prototype") && gt(r, u) && a.push(String(u));
  if (Jw)
    for (e = Xw(r), o = 0; o < Bi.length; o++)
      c = Bi[o], !(e && c === "constructor") && gt(r, c) && a.push(String(c));
  return a;
}
var Qw = Kw;
/**
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
*/
var eb = P$, rb = R$, tb = Un, nb = vw, ib = Qw, Mr;
rb ? eb() ? Mr = nb : Mr = tb : Mr = ib;
var ab = Mr;
/**
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
*/
var sb = ab, Mo = sb;
/**
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
*/
var ob = typeof Object.getOwnPropertyNames < "u", ub = ob;
/**
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
*/
var Do = Cn, lb = Do.getOwnPropertyNames;
function cb(r) {
  return lb(Do(r));
}
var fb = cb;
/**
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
*/
var hb = Cn, db = Mo;
function mb(r) {
  return db(hb(r));
}
var yb = mb;
/**
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
*/
var pb = ub, vb = fb, gb = yb, Vt;
pb ? Vt = vb : Vt = gb;
var $b = Vt;
/**
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
*/
var wb = typeof Object.getOwnPropertyDescriptor < "u", bb = wb;
/**
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
*/
var Eb = Object.getOwnPropertyDescriptor;
function xb(r, e) {
  var t;
  return r == null ? null : (t = Eb(r, e), t === void 0 ? null : t);
}
var Tb = xb;
/**
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
*/
var Sb = Je;
function Ib(r, e) {
  return Sb(r, e) ? {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    value: r[e]
  } : null;
}
var Ob = Ib;
/**
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
*/
var Ab = bb, _b = Tb, Cb = Ob, Wt;
Ab ? Wt = _b : Wt = Cb;
var kb = Wt;
/**
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
*/
var Nb = typeof Buffer == "function" ? Buffer : null, Fb = Nb;
/**
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
*/
var Mb = pr, Ar = Fb;
function Db() {
  var r, e;
  if (typeof Ar != "function")
    return !1;
  try {
    typeof Ar.from == "function" ? e = Ar.from([1, 2, 3, 4]) : e = new Ar([1, 2, 3, 4]), r = Mb(e) && e[0] === 1 && e[1] === 2 && e[2] === 3 && e[3] === 4;
  } catch {
    r = !1;
  }
  return r;
}
var Ub = Db;
/**
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
*/
var Pb = Ub, Lb = Pb, Uo = {}, rt = {};
rt.byteLength = jb;
rt.toByteArray = Wb;
rt.fromByteArray = Gb;
var fe = [], re = [], Rb = typeof Uint8Array < "u" ? Uint8Array : Array, $t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var De = 0, Bb = $t.length; De < Bb; ++De)
  fe[De] = $t[De], re[$t.charCodeAt(De)] = De;
re[45] = 62;
re[95] = 63;
function Po(r) {
  var e = r.length;
  if (e % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var t = r.indexOf("=");
  t === -1 && (t = e);
  var n = t === e ? 0 : 4 - t % 4;
  return [t, n];
}
function jb(r) {
  var e = Po(r), t = e[0], n = e[1];
  return (t + n) * 3 / 4 - n;
}
function Vb(r, e, t) {
  return (e + t) * 3 / 4 - t;
}
function Wb(r) {
  var e, t = Po(r), n = t[0], a = t[1], u = new Rb(Vb(r, n, a)), c = 0, o = a > 0 ? n - 4 : n, h;
  for (h = 0; h < o; h += 4)
    e = re[r.charCodeAt(h)] << 18 | re[r.charCodeAt(h + 1)] << 12 | re[r.charCodeAt(h + 2)] << 6 | re[r.charCodeAt(h + 3)], u[c++] = e >> 16 & 255, u[c++] = e >> 8 & 255, u[c++] = e & 255;
  return a === 2 && (e = re[r.charCodeAt(h)] << 2 | re[r.charCodeAt(h + 1)] >> 4, u[c++] = e & 255), a === 1 && (e = re[r.charCodeAt(h)] << 10 | re[r.charCodeAt(h + 1)] << 4 | re[r.charCodeAt(h + 2)] >> 2, u[c++] = e >> 8 & 255, u[c++] = e & 255), u;
}
function zb(r) {
  return fe[r >> 18 & 63] + fe[r >> 12 & 63] + fe[r >> 6 & 63] + fe[r & 63];
}
function Zb(r, e, t) {
  for (var n, a = [], u = e; u < t; u += 3)
    n = (r[u] << 16 & 16711680) + (r[u + 1] << 8 & 65280) + (r[u + 2] & 255), a.push(zb(n));
  return a.join("");
}
function Gb(r) {
  for (var e, t = r.length, n = t % 3, a = [], u = 16383, c = 0, o = t - n; c < o; c += u)
    a.push(Zb(r, c, c + u > o ? o : c + u));
  return n === 1 ? (e = r[t - 1], a.push(
    fe[e >> 2] + fe[e << 4 & 63] + "=="
  )) : n === 2 && (e = (r[t - 2] << 8) + r[t - 1], a.push(
    fe[e >> 10] + fe[e >> 4 & 63] + fe[e << 2 & 63] + "="
  )), a.join("");
}
var Ln = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
Ln.read = function(r, e, t, n, a) {
  var u, c, o = a * 8 - n - 1, h = (1 << o) - 1, y = h >> 1, v = -7, g = t ? a - 1 : 0, b = t ? -1 : 1, w = r[e + g];
  for (g += b, u = w & (1 << -v) - 1, w >>= -v, v += o; v > 0; u = u * 256 + r[e + g], g += b, v -= 8)
    ;
  for (c = u & (1 << -v) - 1, u >>= -v, v += n; v > 0; c = c * 256 + r[e + g], g += b, v -= 8)
    ;
  if (u === 0)
    u = 1 - y;
  else {
    if (u === h)
      return c ? NaN : (w ? -1 : 1) * (1 / 0);
    c = c + Math.pow(2, n), u = u - y;
  }
  return (w ? -1 : 1) * c * Math.pow(2, u - n);
};
Ln.write = function(r, e, t, n, a, u) {
  var c, o, h, y = u * 8 - a - 1, v = (1 << y) - 1, g = v >> 1, b = a === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, w = n ? 0 : u - 1, x = n ? 1 : -1, U = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
  for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (o = isNaN(e) ? 1 : 0, c = v) : (c = Math.floor(Math.log(e) / Math.LN2), e * (h = Math.pow(2, -c)) < 1 && (c--, h *= 2), c + g >= 1 ? e += b / h : e += b * Math.pow(2, 1 - g), e * h >= 2 && (c++, h /= 2), c + g >= v ? (o = 0, c = v) : c + g >= 1 ? (o = (e * h - 1) * Math.pow(2, a), c = c + g) : (o = e * Math.pow(2, g - 1) * Math.pow(2, a), c = 0)); a >= 8; r[t + w] = o & 255, w += x, o /= 256, a -= 8)
    ;
  for (c = c << a | o, y += a; y > 0; r[t + w] = c & 255, w += x, c /= 256, y -= 8)
    ;
  r[t + w - x] |= U * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(r) {
  const e = rt, t = Ln, n = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  r.Buffer = o, r.SlowBuffer = Q, r.INSPECT_MAX_BYTES = 50;
  const a = 2147483647;
  r.kMaxLength = a, o.TYPED_ARRAY_SUPPORT = u(), !o.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function u() {
    try {
      const l = new Uint8Array(1), i = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(i, Uint8Array.prototype), Object.setPrototypeOf(l, i), l.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(o.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (o.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(o.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (o.isBuffer(this))
        return this.byteOffset;
    }
  });
  function c(l) {
    if (l > a)
      throw new RangeError('The value "' + l + '" is invalid for option "size"');
    const i = new Uint8Array(l);
    return Object.setPrototypeOf(i, o.prototype), i;
  }
  function o(l, i, s) {
    if (typeof l == "number") {
      if (typeof i == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return g(l);
    }
    return h(l, i, s);
  }
  o.poolSize = 8192;
  function h(l, i, s) {
    if (typeof l == "string")
      return b(l, i);
    if (ArrayBuffer.isView(l))
      return x(l);
    if (l == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof l
      );
    if (le(l, ArrayBuffer) || l && le(l.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (le(l, SharedArrayBuffer) || l && le(l.buffer, SharedArrayBuffer)))
      return U(l, i, s);
    if (typeof l == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const f = l.valueOf && l.valueOf();
    if (f != null && f !== l)
      return o.from(f, i, s);
    const d = H(l);
    if (d) return d;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof l[Symbol.toPrimitive] == "function")
      return o.from(l[Symbol.toPrimitive]("string"), i, s);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof l
    );
  }
  o.from = function(l, i, s) {
    return h(l, i, s);
  }, Object.setPrototypeOf(o.prototype, Uint8Array.prototype), Object.setPrototypeOf(o, Uint8Array);
  function y(l) {
    if (typeof l != "number")
      throw new TypeError('"size" argument must be of type number');
    if (l < 0)
      throw new RangeError('The value "' + l + '" is invalid for option "size"');
  }
  function v(l, i, s) {
    return y(l), l <= 0 ? c(l) : i !== void 0 ? typeof s == "string" ? c(l).fill(i, s) : c(l).fill(i) : c(l);
  }
  o.alloc = function(l, i, s) {
    return v(l, i, s);
  };
  function g(l) {
    return y(l), c(l < 0 ? 0 : Y(l) | 0);
  }
  o.allocUnsafe = function(l) {
    return g(l);
  }, o.allocUnsafeSlow = function(l) {
    return g(l);
  };
  function b(l, i) {
    if ((typeof i != "string" || i === "") && (i = "utf8"), !o.isEncoding(i))
      throw new TypeError("Unknown encoding: " + i);
    const s = be(l, i) | 0;
    let f = c(s);
    const d = f.write(l, i);
    return d !== s && (f = f.slice(0, d)), f;
  }
  function w(l) {
    const i = l.length < 0 ? 0 : Y(l.length) | 0, s = c(i);
    for (let f = 0; f < i; f += 1)
      s[f] = l[f] & 255;
    return s;
  }
  function x(l) {
    if (le(l, Uint8Array)) {
      const i = new Uint8Array(l);
      return U(i.buffer, i.byteOffset, i.byteLength);
    }
    return w(l);
  }
  function U(l, i, s) {
    if (i < 0 || l.byteLength < i)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (l.byteLength < i + (s || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let f;
    return i === void 0 && s === void 0 ? f = new Uint8Array(l) : s === void 0 ? f = new Uint8Array(l, i) : f = new Uint8Array(l, i, s), Object.setPrototypeOf(f, o.prototype), f;
  }
  function H(l) {
    if (o.isBuffer(l)) {
      const i = Y(l.length) | 0, s = c(i);
      return s.length === 0 || l.copy(s, 0, 0, i), s;
    }
    if (l.length !== void 0)
      return typeof l.length != "number" || ht(l.length) ? c(0) : w(l);
    if (l.type === "Buffer" && Array.isArray(l.data))
      return w(l.data);
  }
  function Y(l) {
    if (l >= a)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a.toString(16) + " bytes");
    return l | 0;
  }
  function Q(l) {
    return +l != l && (l = 0), o.alloc(+l);
  }
  o.isBuffer = function(i) {
    return i != null && i._isBuffer === !0 && i !== o.prototype;
  }, o.compare = function(i, s) {
    if (le(i, Uint8Array) && (i = o.from(i, i.offset, i.byteLength)), le(s, Uint8Array) && (s = o.from(s, s.offset, s.byteLength)), !o.isBuffer(i) || !o.isBuffer(s))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (i === s) return 0;
    let f = i.length, d = s.length;
    for (let m = 0, p = Math.min(f, d); m < p; ++m)
      if (i[m] !== s[m]) {
        f = i[m], d = s[m];
        break;
      }
    return f < d ? -1 : d < f ? 1 : 0;
  }, o.isEncoding = function(i) {
    switch (String(i).toLowerCase()) {
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
  }, o.concat = function(i, s) {
    if (!Array.isArray(i))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (i.length === 0)
      return o.alloc(0);
    let f;
    if (s === void 0)
      for (s = 0, f = 0; f < i.length; ++f)
        s += i[f].length;
    const d = o.allocUnsafe(s);
    let m = 0;
    for (f = 0; f < i.length; ++f) {
      let p = i[f];
      if (le(p, Uint8Array))
        m + p.length > d.length ? (o.isBuffer(p) || (p = o.from(p)), p.copy(d, m)) : Uint8Array.prototype.set.call(
          d,
          p,
          m
        );
      else if (o.isBuffer(p))
        p.copy(d, m);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      m += p.length;
    }
    return d;
  };
  function be(l, i) {
    if (o.isBuffer(l))
      return l.length;
    if (ArrayBuffer.isView(l) || le(l, ArrayBuffer))
      return l.byteLength;
    if (typeof l != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof l
      );
    const s = l.length, f = arguments.length > 2 && arguments[2] === !0;
    if (!f && s === 0) return 0;
    let d = !1;
    for (; ; )
      switch (i) {
        case "ascii":
        case "latin1":
        case "binary":
          return s;
        case "utf8":
        case "utf-8":
          return ft(l).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return s * 2;
        case "hex":
          return s >>> 1;
        case "base64":
          return ai(l).length;
        default:
          if (d)
            return f ? -1 : ft(l).length;
          i = ("" + i).toLowerCase(), d = !0;
      }
  }
  o.byteLength = be;
  function ke(l, i, s) {
    let f = !1;
    if ((i === void 0 || i < 0) && (i = 0), i > this.length || ((s === void 0 || s > this.length) && (s = this.length), s <= 0) || (s >>>= 0, i >>>= 0, s <= i))
      return "";
    for (l || (l = "utf8"); ; )
      switch (l) {
        case "hex":
          return fl(this, i, s);
        case "utf8":
        case "utf-8":
          return Jn(this, i, s);
        case "ascii":
          return ll(this, i, s);
        case "latin1":
        case "binary":
          return cl(this, i, s);
        case "base64":
          return ol(this, i, s);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return hl(this, i, s);
        default:
          if (f) throw new TypeError("Unknown encoding: " + l);
          l = (l + "").toLowerCase(), f = !0;
      }
  }
  o.prototype._isBuffer = !0;
  function J(l, i, s) {
    const f = l[i];
    l[i] = l[s], l[s] = f;
  }
  o.prototype.swap16 = function() {
    const i = this.length;
    if (i % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let s = 0; s < i; s += 2)
      J(this, s, s + 1);
    return this;
  }, o.prototype.swap32 = function() {
    const i = this.length;
    if (i % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let s = 0; s < i; s += 4)
      J(this, s, s + 3), J(this, s + 1, s + 2);
    return this;
  }, o.prototype.swap64 = function() {
    const i = this.length;
    if (i % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let s = 0; s < i; s += 8)
      J(this, s, s + 7), J(this, s + 1, s + 6), J(this, s + 2, s + 5), J(this, s + 3, s + 4);
    return this;
  }, o.prototype.toString = function() {
    const i = this.length;
    return i === 0 ? "" : arguments.length === 0 ? Jn(this, 0, i) : ke.apply(this, arguments);
  }, o.prototype.toLocaleString = o.prototype.toString, o.prototype.equals = function(i) {
    if (!o.isBuffer(i)) throw new TypeError("Argument must be a Buffer");
    return this === i ? !0 : o.compare(this, i) === 0;
  }, o.prototype.inspect = function() {
    let i = "";
    const s = r.INSPECT_MAX_BYTES;
    return i = this.toString("hex", 0, s).replace(/(.{2})/g, "$1 ").trim(), this.length > s && (i += " ... "), "<Buffer " + i + ">";
  }, n && (o.prototype[n] = o.prototype.inspect), o.prototype.compare = function(i, s, f, d, m) {
    if (le(i, Uint8Array) && (i = o.from(i, i.offset, i.byteLength)), !o.isBuffer(i))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof i
      );
    if (s === void 0 && (s = 0), f === void 0 && (f = i ? i.length : 0), d === void 0 && (d = 0), m === void 0 && (m = this.length), s < 0 || f > i.length || d < 0 || m > this.length)
      throw new RangeError("out of range index");
    if (d >= m && s >= f)
      return 0;
    if (d >= m)
      return -1;
    if (s >= f)
      return 1;
    if (s >>>= 0, f >>>= 0, d >>>= 0, m >>>= 0, this === i) return 0;
    let p = m - d, T = f - s;
    const P = Math.min(p, T), N = this.slice(d, m), L = i.slice(s, f);
    for (let C = 0; C < P; ++C)
      if (N[C] !== L[C]) {
        p = N[C], T = L[C];
        break;
      }
    return p < T ? -1 : T < p ? 1 : 0;
  };
  function br(l, i, s, f, d) {
    if (l.length === 0) return -1;
    if (typeof s == "string" ? (f = s, s = 0) : s > 2147483647 ? s = 2147483647 : s < -2147483648 && (s = -2147483648), s = +s, ht(s) && (s = d ? 0 : l.length - 1), s < 0 && (s = l.length + s), s >= l.length) {
      if (d) return -1;
      s = l.length - 1;
    } else if (s < 0)
      if (d) s = 0;
      else return -1;
    if (typeof i == "string" && (i = o.from(i, f)), o.isBuffer(i))
      return i.length === 0 ? -1 : Er(l, i, s, f, d);
    if (typeof i == "number")
      return i = i & 255, typeof Uint8Array.prototype.indexOf == "function" ? d ? Uint8Array.prototype.indexOf.call(l, i, s) : Uint8Array.prototype.lastIndexOf.call(l, i, s) : Er(l, [i], s, f, d);
    throw new TypeError("val must be string, number or Buffer");
  }
  function Er(l, i, s, f, d) {
    let m = 1, p = l.length, T = i.length;
    if (f !== void 0 && (f = String(f).toLowerCase(), f === "ucs2" || f === "ucs-2" || f === "utf16le" || f === "utf-16le")) {
      if (l.length < 2 || i.length < 2)
        return -1;
      m = 2, p /= 2, T /= 2, s /= 2;
    }
    function P(L, C) {
      return m === 1 ? L[C] : L.readUInt16BE(C * m);
    }
    let N;
    if (d) {
      let L = -1;
      for (N = s; N < p; N++)
        if (P(l, N) === P(i, L === -1 ? 0 : N - L)) {
          if (L === -1 && (L = N), N - L + 1 === T) return L * m;
        } else
          L !== -1 && (N -= N - L), L = -1;
    } else
      for (s + T > p && (s = p - T), N = s; N >= 0; N--) {
        let L = !0;
        for (let C = 0; C < T; C++)
          if (P(l, N + C) !== P(i, C)) {
            L = !1;
            break;
          }
        if (L) return N;
      }
    return -1;
  }
  o.prototype.includes = function(i, s, f) {
    return this.indexOf(i, s, f) !== -1;
  }, o.prototype.indexOf = function(i, s, f) {
    return br(this, i, s, f, !0);
  }, o.prototype.lastIndexOf = function(i, s, f) {
    return br(this, i, s, f, !1);
  };
  function ut(l, i, s, f) {
    s = Number(s) || 0;
    const d = l.length - s;
    f ? (f = Number(f), f > d && (f = d)) : f = d;
    const m = i.length;
    f > m / 2 && (f = m / 2);
    let p;
    for (p = 0; p < f; ++p) {
      const T = parseInt(i.substr(p * 2, 2), 16);
      if (ht(T)) return p;
      l[s + p] = T;
    }
    return p;
  }
  function Ee(l, i, s, f) {
    return xr(ft(i, l.length - s), l, s, f);
  }
  function xe(l, i, s, f) {
    return xr(pl(i), l, s, f);
  }
  function lt(l, i, s, f) {
    return xr(ai(i), l, s, f);
  }
  function sl(l, i, s, f) {
    return xr(vl(i, l.length - s), l, s, f);
  }
  o.prototype.write = function(i, s, f, d) {
    if (s === void 0)
      d = "utf8", f = this.length, s = 0;
    else if (f === void 0 && typeof s == "string")
      d = s, f = this.length, s = 0;
    else if (isFinite(s))
      s = s >>> 0, isFinite(f) ? (f = f >>> 0, d === void 0 && (d = "utf8")) : (d = f, f = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const m = this.length - s;
    if ((f === void 0 || f > m) && (f = m), i.length > 0 && (f < 0 || s < 0) || s > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    d || (d = "utf8");
    let p = !1;
    for (; ; )
      switch (d) {
        case "hex":
          return ut(this, i, s, f);
        case "utf8":
        case "utf-8":
          return Ee(this, i, s, f);
        case "ascii":
        case "latin1":
        case "binary":
          return xe(this, i, s, f);
        case "base64":
          return lt(this, i, s, f);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return sl(this, i, s, f);
        default:
          if (p) throw new TypeError("Unknown encoding: " + d);
          d = ("" + d).toLowerCase(), p = !0;
      }
  }, o.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function ol(l, i, s) {
    return i === 0 && s === l.length ? e.fromByteArray(l) : e.fromByteArray(l.slice(i, s));
  }
  function Jn(l, i, s) {
    s = Math.min(l.length, s);
    const f = [];
    let d = i;
    for (; d < s; ) {
      const m = l[d];
      let p = null, T = m > 239 ? 4 : m > 223 ? 3 : m > 191 ? 2 : 1;
      if (d + T <= s) {
        let P, N, L, C;
        switch (T) {
          case 1:
            m < 128 && (p = m);
            break;
          case 2:
            P = l[d + 1], (P & 192) === 128 && (C = (m & 31) << 6 | P & 63, C > 127 && (p = C));
            break;
          case 3:
            P = l[d + 1], N = l[d + 2], (P & 192) === 128 && (N & 192) === 128 && (C = (m & 15) << 12 | (P & 63) << 6 | N & 63, C > 2047 && (C < 55296 || C > 57343) && (p = C));
            break;
          case 4:
            P = l[d + 1], N = l[d + 2], L = l[d + 3], (P & 192) === 128 && (N & 192) === 128 && (L & 192) === 128 && (C = (m & 15) << 18 | (P & 63) << 12 | (N & 63) << 6 | L & 63, C > 65535 && C < 1114112 && (p = C));
        }
      }
      p === null ? (p = 65533, T = 1) : p > 65535 && (p -= 65536, f.push(p >>> 10 & 1023 | 55296), p = 56320 | p & 1023), f.push(p), d += T;
    }
    return ul(f);
  }
  const Xn = 4096;
  function ul(l) {
    const i = l.length;
    if (i <= Xn)
      return String.fromCharCode.apply(String, l);
    let s = "", f = 0;
    for (; f < i; )
      s += String.fromCharCode.apply(
        String,
        l.slice(f, f += Xn)
      );
    return s;
  }
  function ll(l, i, s) {
    let f = "";
    s = Math.min(l.length, s);
    for (let d = i; d < s; ++d)
      f += String.fromCharCode(l[d] & 127);
    return f;
  }
  function cl(l, i, s) {
    let f = "";
    s = Math.min(l.length, s);
    for (let d = i; d < s; ++d)
      f += String.fromCharCode(l[d]);
    return f;
  }
  function fl(l, i, s) {
    const f = l.length;
    (!i || i < 0) && (i = 0), (!s || s < 0 || s > f) && (s = f);
    let d = "";
    for (let m = i; m < s; ++m)
      d += gl[l[m]];
    return d;
  }
  function hl(l, i, s) {
    const f = l.slice(i, s);
    let d = "";
    for (let m = 0; m < f.length - 1; m += 2)
      d += String.fromCharCode(f[m] + f[m + 1] * 256);
    return d;
  }
  o.prototype.slice = function(i, s) {
    const f = this.length;
    i = ~~i, s = s === void 0 ? f : ~~s, i < 0 ? (i += f, i < 0 && (i = 0)) : i > f && (i = f), s < 0 ? (s += f, s < 0 && (s = 0)) : s > f && (s = f), s < i && (s = i);
    const d = this.subarray(i, s);
    return Object.setPrototypeOf(d, o.prototype), d;
  };
  function j(l, i, s) {
    if (l % 1 !== 0 || l < 0) throw new RangeError("offset is not uint");
    if (l + i > s) throw new RangeError("Trying to access beyond buffer length");
  }
  o.prototype.readUintLE = o.prototype.readUIntLE = function(i, s, f) {
    i = i >>> 0, s = s >>> 0, f || j(i, s, this.length);
    let d = this[i], m = 1, p = 0;
    for (; ++p < s && (m *= 256); )
      d += this[i + p] * m;
    return d;
  }, o.prototype.readUintBE = o.prototype.readUIntBE = function(i, s, f) {
    i = i >>> 0, s = s >>> 0, f || j(i, s, this.length);
    let d = this[i + --s], m = 1;
    for (; s > 0 && (m *= 256); )
      d += this[i + --s] * m;
    return d;
  }, o.prototype.readUint8 = o.prototype.readUInt8 = function(i, s) {
    return i = i >>> 0, s || j(i, 1, this.length), this[i];
  }, o.prototype.readUint16LE = o.prototype.readUInt16LE = function(i, s) {
    return i = i >>> 0, s || j(i, 2, this.length), this[i] | this[i + 1] << 8;
  }, o.prototype.readUint16BE = o.prototype.readUInt16BE = function(i, s) {
    return i = i >>> 0, s || j(i, 2, this.length), this[i] << 8 | this[i + 1];
  }, o.prototype.readUint32LE = o.prototype.readUInt32LE = function(i, s) {
    return i = i >>> 0, s || j(i, 4, this.length), (this[i] | this[i + 1] << 8 | this[i + 2] << 16) + this[i + 3] * 16777216;
  }, o.prototype.readUint32BE = o.prototype.readUInt32BE = function(i, s) {
    return i = i >>> 0, s || j(i, 4, this.length), this[i] * 16777216 + (this[i + 1] << 16 | this[i + 2] << 8 | this[i + 3]);
  }, o.prototype.readBigUInt64LE = ye(function(i) {
    i = i >>> 0, Fe(i, "offset");
    const s = this[i], f = this[i + 7];
    (s === void 0 || f === void 0) && nr(i, this.length - 8);
    const d = s + this[++i] * 2 ** 8 + this[++i] * 2 ** 16 + this[++i] * 2 ** 24, m = this[++i] + this[++i] * 2 ** 8 + this[++i] * 2 ** 16 + f * 2 ** 24;
    return BigInt(d) + (BigInt(m) << BigInt(32));
  }), o.prototype.readBigUInt64BE = ye(function(i) {
    i = i >>> 0, Fe(i, "offset");
    const s = this[i], f = this[i + 7];
    (s === void 0 || f === void 0) && nr(i, this.length - 8);
    const d = s * 2 ** 24 + this[++i] * 2 ** 16 + this[++i] * 2 ** 8 + this[++i], m = this[++i] * 2 ** 24 + this[++i] * 2 ** 16 + this[++i] * 2 ** 8 + f;
    return (BigInt(d) << BigInt(32)) + BigInt(m);
  }), o.prototype.readIntLE = function(i, s, f) {
    i = i >>> 0, s = s >>> 0, f || j(i, s, this.length);
    let d = this[i], m = 1, p = 0;
    for (; ++p < s && (m *= 256); )
      d += this[i + p] * m;
    return m *= 128, d >= m && (d -= Math.pow(2, 8 * s)), d;
  }, o.prototype.readIntBE = function(i, s, f) {
    i = i >>> 0, s = s >>> 0, f || j(i, s, this.length);
    let d = s, m = 1, p = this[i + --d];
    for (; d > 0 && (m *= 256); )
      p += this[i + --d] * m;
    return m *= 128, p >= m && (p -= Math.pow(2, 8 * s)), p;
  }, o.prototype.readInt8 = function(i, s) {
    return i = i >>> 0, s || j(i, 1, this.length), this[i] & 128 ? (255 - this[i] + 1) * -1 : this[i];
  }, o.prototype.readInt16LE = function(i, s) {
    i = i >>> 0, s || j(i, 2, this.length);
    const f = this[i] | this[i + 1] << 8;
    return f & 32768 ? f | 4294901760 : f;
  }, o.prototype.readInt16BE = function(i, s) {
    i = i >>> 0, s || j(i, 2, this.length);
    const f = this[i + 1] | this[i] << 8;
    return f & 32768 ? f | 4294901760 : f;
  }, o.prototype.readInt32LE = function(i, s) {
    return i = i >>> 0, s || j(i, 4, this.length), this[i] | this[i + 1] << 8 | this[i + 2] << 16 | this[i + 3] << 24;
  }, o.prototype.readInt32BE = function(i, s) {
    return i = i >>> 0, s || j(i, 4, this.length), this[i] << 24 | this[i + 1] << 16 | this[i + 2] << 8 | this[i + 3];
  }, o.prototype.readBigInt64LE = ye(function(i) {
    i = i >>> 0, Fe(i, "offset");
    const s = this[i], f = this[i + 7];
    (s === void 0 || f === void 0) && nr(i, this.length - 8);
    const d = this[i + 4] + this[i + 5] * 2 ** 8 + this[i + 6] * 2 ** 16 + (f << 24);
    return (BigInt(d) << BigInt(32)) + BigInt(s + this[++i] * 2 ** 8 + this[++i] * 2 ** 16 + this[++i] * 2 ** 24);
  }), o.prototype.readBigInt64BE = ye(function(i) {
    i = i >>> 0, Fe(i, "offset");
    const s = this[i], f = this[i + 7];
    (s === void 0 || f === void 0) && nr(i, this.length - 8);
    const d = (s << 24) + // Overflow
    this[++i] * 2 ** 16 + this[++i] * 2 ** 8 + this[++i];
    return (BigInt(d) << BigInt(32)) + BigInt(this[++i] * 2 ** 24 + this[++i] * 2 ** 16 + this[++i] * 2 ** 8 + f);
  }), o.prototype.readFloatLE = function(i, s) {
    return i = i >>> 0, s || j(i, 4, this.length), t.read(this, i, !0, 23, 4);
  }, o.prototype.readFloatBE = function(i, s) {
    return i = i >>> 0, s || j(i, 4, this.length), t.read(this, i, !1, 23, 4);
  }, o.prototype.readDoubleLE = function(i, s) {
    return i = i >>> 0, s || j(i, 8, this.length), t.read(this, i, !0, 52, 8);
  }, o.prototype.readDoubleBE = function(i, s) {
    return i = i >>> 0, s || j(i, 8, this.length), t.read(this, i, !1, 52, 8);
  };
  function q(l, i, s, f, d, m) {
    if (!o.isBuffer(l)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (i > d || i < m) throw new RangeError('"value" argument is out of bounds');
    if (s + f > l.length) throw new RangeError("Index out of range");
  }
  o.prototype.writeUintLE = o.prototype.writeUIntLE = function(i, s, f, d) {
    if (i = +i, s = s >>> 0, f = f >>> 0, !d) {
      const T = Math.pow(2, 8 * f) - 1;
      q(this, i, s, f, T, 0);
    }
    let m = 1, p = 0;
    for (this[s] = i & 255; ++p < f && (m *= 256); )
      this[s + p] = i / m & 255;
    return s + f;
  }, o.prototype.writeUintBE = o.prototype.writeUIntBE = function(i, s, f, d) {
    if (i = +i, s = s >>> 0, f = f >>> 0, !d) {
      const T = Math.pow(2, 8 * f) - 1;
      q(this, i, s, f, T, 0);
    }
    let m = f - 1, p = 1;
    for (this[s + m] = i & 255; --m >= 0 && (p *= 256); )
      this[s + m] = i / p & 255;
    return s + f;
  }, o.prototype.writeUint8 = o.prototype.writeUInt8 = function(i, s, f) {
    return i = +i, s = s >>> 0, f || q(this, i, s, 1, 255, 0), this[s] = i & 255, s + 1;
  }, o.prototype.writeUint16LE = o.prototype.writeUInt16LE = function(i, s, f) {
    return i = +i, s = s >>> 0, f || q(this, i, s, 2, 65535, 0), this[s] = i & 255, this[s + 1] = i >>> 8, s + 2;
  }, o.prototype.writeUint16BE = o.prototype.writeUInt16BE = function(i, s, f) {
    return i = +i, s = s >>> 0, f || q(this, i, s, 2, 65535, 0), this[s] = i >>> 8, this[s + 1] = i & 255, s + 2;
  }, o.prototype.writeUint32LE = o.prototype.writeUInt32LE = function(i, s, f) {
    return i = +i, s = s >>> 0, f || q(this, i, s, 4, 4294967295, 0), this[s + 3] = i >>> 24, this[s + 2] = i >>> 16, this[s + 1] = i >>> 8, this[s] = i & 255, s + 4;
  }, o.prototype.writeUint32BE = o.prototype.writeUInt32BE = function(i, s, f) {
    return i = +i, s = s >>> 0, f || q(this, i, s, 4, 4294967295, 0), this[s] = i >>> 24, this[s + 1] = i >>> 16, this[s + 2] = i >>> 8, this[s + 3] = i & 255, s + 4;
  };
  function Kn(l, i, s, f, d) {
    ii(i, f, d, l, s, 7);
    let m = Number(i & BigInt(4294967295));
    l[s++] = m, m = m >> 8, l[s++] = m, m = m >> 8, l[s++] = m, m = m >> 8, l[s++] = m;
    let p = Number(i >> BigInt(32) & BigInt(4294967295));
    return l[s++] = p, p = p >> 8, l[s++] = p, p = p >> 8, l[s++] = p, p = p >> 8, l[s++] = p, s;
  }
  function Qn(l, i, s, f, d) {
    ii(i, f, d, l, s, 7);
    let m = Number(i & BigInt(4294967295));
    l[s + 7] = m, m = m >> 8, l[s + 6] = m, m = m >> 8, l[s + 5] = m, m = m >> 8, l[s + 4] = m;
    let p = Number(i >> BigInt(32) & BigInt(4294967295));
    return l[s + 3] = p, p = p >> 8, l[s + 2] = p, p = p >> 8, l[s + 1] = p, p = p >> 8, l[s] = p, s + 8;
  }
  o.prototype.writeBigUInt64LE = ye(function(i, s = 0) {
    return Kn(this, i, s, BigInt(0), BigInt("0xffffffffffffffff"));
  }), o.prototype.writeBigUInt64BE = ye(function(i, s = 0) {
    return Qn(this, i, s, BigInt(0), BigInt("0xffffffffffffffff"));
  }), o.prototype.writeIntLE = function(i, s, f, d) {
    if (i = +i, s = s >>> 0, !d) {
      const P = Math.pow(2, 8 * f - 1);
      q(this, i, s, f, P - 1, -P);
    }
    let m = 0, p = 1, T = 0;
    for (this[s] = i & 255; ++m < f && (p *= 256); )
      i < 0 && T === 0 && this[s + m - 1] !== 0 && (T = 1), this[s + m] = (i / p >> 0) - T & 255;
    return s + f;
  }, o.prototype.writeIntBE = function(i, s, f, d) {
    if (i = +i, s = s >>> 0, !d) {
      const P = Math.pow(2, 8 * f - 1);
      q(this, i, s, f, P - 1, -P);
    }
    let m = f - 1, p = 1, T = 0;
    for (this[s + m] = i & 255; --m >= 0 && (p *= 256); )
      i < 0 && T === 0 && this[s + m + 1] !== 0 && (T = 1), this[s + m] = (i / p >> 0) - T & 255;
    return s + f;
  }, o.prototype.writeInt8 = function(i, s, f) {
    return i = +i, s = s >>> 0, f || q(this, i, s, 1, 127, -128), i < 0 && (i = 255 + i + 1), this[s] = i & 255, s + 1;
  }, o.prototype.writeInt16LE = function(i, s, f) {
    return i = +i, s = s >>> 0, f || q(this, i, s, 2, 32767, -32768), this[s] = i & 255, this[s + 1] = i >>> 8, s + 2;
  }, o.prototype.writeInt16BE = function(i, s, f) {
    return i = +i, s = s >>> 0, f || q(this, i, s, 2, 32767, -32768), this[s] = i >>> 8, this[s + 1] = i & 255, s + 2;
  }, o.prototype.writeInt32LE = function(i, s, f) {
    return i = +i, s = s >>> 0, f || q(this, i, s, 4, 2147483647, -2147483648), this[s] = i & 255, this[s + 1] = i >>> 8, this[s + 2] = i >>> 16, this[s + 3] = i >>> 24, s + 4;
  }, o.prototype.writeInt32BE = function(i, s, f) {
    return i = +i, s = s >>> 0, f || q(this, i, s, 4, 2147483647, -2147483648), i < 0 && (i = 4294967295 + i + 1), this[s] = i >>> 24, this[s + 1] = i >>> 16, this[s + 2] = i >>> 8, this[s + 3] = i & 255, s + 4;
  }, o.prototype.writeBigInt64LE = ye(function(i, s = 0) {
    return Kn(this, i, s, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), o.prototype.writeBigInt64BE = ye(function(i, s = 0) {
    return Qn(this, i, s, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function ei(l, i, s, f, d, m) {
    if (s + f > l.length) throw new RangeError("Index out of range");
    if (s < 0) throw new RangeError("Index out of range");
  }
  function ri(l, i, s, f, d) {
    return i = +i, s = s >>> 0, d || ei(l, i, s, 4), t.write(l, i, s, f, 23, 4), s + 4;
  }
  o.prototype.writeFloatLE = function(i, s, f) {
    return ri(this, i, s, !0, f);
  }, o.prototype.writeFloatBE = function(i, s, f) {
    return ri(this, i, s, !1, f);
  };
  function ti(l, i, s, f, d) {
    return i = +i, s = s >>> 0, d || ei(l, i, s, 8), t.write(l, i, s, f, 52, 8), s + 8;
  }
  o.prototype.writeDoubleLE = function(i, s, f) {
    return ti(this, i, s, !0, f);
  }, o.prototype.writeDoubleBE = function(i, s, f) {
    return ti(this, i, s, !1, f);
  }, o.prototype.copy = function(i, s, f, d) {
    if (!o.isBuffer(i)) throw new TypeError("argument should be a Buffer");
    if (f || (f = 0), !d && d !== 0 && (d = this.length), s >= i.length && (s = i.length), s || (s = 0), d > 0 && d < f && (d = f), d === f || i.length === 0 || this.length === 0) return 0;
    if (s < 0)
      throw new RangeError("targetStart out of bounds");
    if (f < 0 || f >= this.length) throw new RangeError("Index out of range");
    if (d < 0) throw new RangeError("sourceEnd out of bounds");
    d > this.length && (d = this.length), i.length - s < d - f && (d = i.length - s + f);
    const m = d - f;
    return this === i && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(s, f, d) : Uint8Array.prototype.set.call(
      i,
      this.subarray(f, d),
      s
    ), m;
  }, o.prototype.fill = function(i, s, f, d) {
    if (typeof i == "string") {
      if (typeof s == "string" ? (d = s, s = 0, f = this.length) : typeof f == "string" && (d = f, f = this.length), d !== void 0 && typeof d != "string")
        throw new TypeError("encoding must be a string");
      if (typeof d == "string" && !o.isEncoding(d))
        throw new TypeError("Unknown encoding: " + d);
      if (i.length === 1) {
        const p = i.charCodeAt(0);
        (d === "utf8" && p < 128 || d === "latin1") && (i = p);
      }
    } else typeof i == "number" ? i = i & 255 : typeof i == "boolean" && (i = Number(i));
    if (s < 0 || this.length < s || this.length < f)
      throw new RangeError("Out of range index");
    if (f <= s)
      return this;
    s = s >>> 0, f = f === void 0 ? this.length : f >>> 0, i || (i = 0);
    let m;
    if (typeof i == "number")
      for (m = s; m < f; ++m)
        this[m] = i;
    else {
      const p = o.isBuffer(i) ? i : o.from(i, d), T = p.length;
      if (T === 0)
        throw new TypeError('The value "' + i + '" is invalid for argument "value"');
      for (m = 0; m < f - s; ++m)
        this[m + s] = p[m % T];
    }
    return this;
  };
  const Ne = {};
  function ct(l, i, s) {
    Ne[l] = class extends s {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: i.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${l}]`, this.stack, delete this.name;
      }
      get code() {
        return l;
      }
      set code(d) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: d,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${l}]: ${this.message}`;
      }
    };
  }
  ct(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(l) {
      return l ? `${l} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), ct(
    "ERR_INVALID_ARG_TYPE",
    function(l, i) {
      return `The "${l}" argument must be of type number. Received type ${typeof i}`;
    },
    TypeError
  ), ct(
    "ERR_OUT_OF_RANGE",
    function(l, i, s) {
      let f = `The value of "${l}" is out of range.`, d = s;
      return Number.isInteger(s) && Math.abs(s) > 2 ** 32 ? d = ni(String(s)) : typeof s == "bigint" && (d = String(s), (s > BigInt(2) ** BigInt(32) || s < -(BigInt(2) ** BigInt(32))) && (d = ni(d)), d += "n"), f += ` It must be ${i}. Received ${d}`, f;
    },
    RangeError
  );
  function ni(l) {
    let i = "", s = l.length;
    const f = l[0] === "-" ? 1 : 0;
    for (; s >= f + 4; s -= 3)
      i = `_${l.slice(s - 3, s)}${i}`;
    return `${l.slice(0, s)}${i}`;
  }
  function dl(l, i, s) {
    Fe(i, "offset"), (l[i] === void 0 || l[i + s] === void 0) && nr(i, l.length - (s + 1));
  }
  function ii(l, i, s, f, d, m) {
    if (l > s || l < i) {
      const p = typeof i == "bigint" ? "n" : "";
      let T;
      throw i === 0 || i === BigInt(0) ? T = `>= 0${p} and < 2${p} ** ${(m + 1) * 8}${p}` : T = `>= -(2${p} ** ${(m + 1) * 8 - 1}${p}) and < 2 ** ${(m + 1) * 8 - 1}${p}`, new Ne.ERR_OUT_OF_RANGE("value", T, l);
    }
    dl(f, d, m);
  }
  function Fe(l, i) {
    if (typeof l != "number")
      throw new Ne.ERR_INVALID_ARG_TYPE(i, "number", l);
  }
  function nr(l, i, s) {
    throw Math.floor(l) !== l ? (Fe(l, s), new Ne.ERR_OUT_OF_RANGE("offset", "an integer", l)) : i < 0 ? new Ne.ERR_BUFFER_OUT_OF_BOUNDS() : new Ne.ERR_OUT_OF_RANGE(
      "offset",
      `>= 0 and <= ${i}`,
      l
    );
  }
  const ml = /[^+/0-9A-Za-z-_]/g;
  function yl(l) {
    if (l = l.split("=")[0], l = l.trim().replace(ml, ""), l.length < 2) return "";
    for (; l.length % 4 !== 0; )
      l = l + "=";
    return l;
  }
  function ft(l, i) {
    i = i || 1 / 0;
    let s;
    const f = l.length;
    let d = null;
    const m = [];
    for (let p = 0; p < f; ++p) {
      if (s = l.charCodeAt(p), s > 55295 && s < 57344) {
        if (!d) {
          if (s > 56319) {
            (i -= 3) > -1 && m.push(239, 191, 189);
            continue;
          } else if (p + 1 === f) {
            (i -= 3) > -1 && m.push(239, 191, 189);
            continue;
          }
          d = s;
          continue;
        }
        if (s < 56320) {
          (i -= 3) > -1 && m.push(239, 191, 189), d = s;
          continue;
        }
        s = (d - 55296 << 10 | s - 56320) + 65536;
      } else d && (i -= 3) > -1 && m.push(239, 191, 189);
      if (d = null, s < 128) {
        if ((i -= 1) < 0) break;
        m.push(s);
      } else if (s < 2048) {
        if ((i -= 2) < 0) break;
        m.push(
          s >> 6 | 192,
          s & 63 | 128
        );
      } else if (s < 65536) {
        if ((i -= 3) < 0) break;
        m.push(
          s >> 12 | 224,
          s >> 6 & 63 | 128,
          s & 63 | 128
        );
      } else if (s < 1114112) {
        if ((i -= 4) < 0) break;
        m.push(
          s >> 18 | 240,
          s >> 12 & 63 | 128,
          s >> 6 & 63 | 128,
          s & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return m;
  }
  function pl(l) {
    const i = [];
    for (let s = 0; s < l.length; ++s)
      i.push(l.charCodeAt(s) & 255);
    return i;
  }
  function vl(l, i) {
    let s, f, d;
    const m = [];
    for (let p = 0; p < l.length && !((i -= 2) < 0); ++p)
      s = l.charCodeAt(p), f = s >> 8, d = s % 256, m.push(d), m.push(f);
    return m;
  }
  function ai(l) {
    return e.toByteArray(yl(l));
  }
  function xr(l, i, s, f) {
    let d;
    for (d = 0; d < f && !(d + s >= i.length || d >= l.length); ++d)
      i[d + s] = l[d];
    return d;
  }
  function le(l, i) {
    return l instanceof i || l != null && l.constructor != null && l.constructor.name != null && l.constructor.name === i.name;
  }
  function ht(l) {
    return l !== l;
  }
  const gl = function() {
    const l = "0123456789abcdef", i = new Array(256);
    for (let s = 0; s < 16; ++s) {
      const f = s * 16;
      for (let d = 0; d < 16; ++d)
        i[f + d] = l[s] + l[d];
    }
    return i;
  }();
  function ye(l) {
    return typeof BigInt > "u" ? $l : l;
  }
  function $l() {
    throw new Error("BigInt not supported");
  }
})(Uo);
/**
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
*/
var Hb = Uo.Buffer, qb = Hb;
/**
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
*/
function Yb() {
  throw new Error("not implemented");
}
var Jb = Yb;
/**
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
*/
var Xb = Lb, Kb = qb, Qb = Jb, zt;
Xb() ? zt = Kb : zt = Qb;
var Rn = zt;
/**
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
*/
var e2 = ho, r2 = Rn, t2 = e2(r2.from), n2 = t2;
/**
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
*/
var i2 = pr, a2 = we, s2 = Rn;
function o2(r) {
  if (!i2(r))
    throw new TypeError(a2("invalid argument. Must provide a Buffer. Value: `%s`.", r));
  return s2.from(r);
}
var u2 = o2;
/**
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
*/
var l2 = pr, c2 = we, f2 = Rn;
function h2(r) {
  if (!l2(r))
    throw new TypeError(c2("invalid argument. Must provide a Buffer. Value: `%s`.", r));
  return new f2(r);
}
var d2 = h2;
/**
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
*/
var m2 = n2, y2 = u2, p2 = d2, Zt;
m2 ? Zt = y2 : Zt = p2;
var v2 = Zt;
/**
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
*/
var g2 = W, $2 = typeof Int8Array == "function";
function w2(r) {
  return $2 && r instanceof Int8Array || // eslint-disable-line stdlib/require-globals
  g2(r) === "[object Int8Array]";
}
var b2 = w2;
/**
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
*/
var E2 = b2, x2 = E2;
/**
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
*/
var T2 = 127, S2 = T2;
/**
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
*/
var I2 = -128, O2 = I2;
/**
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
*/
var A2 = typeof Int8Array == "function" ? Int8Array : null, _2 = A2;
/**
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
*/
var C2 = x2, k2 = S2, N2 = O2, ji = _2;
function F2() {
  var r, e;
  if (typeof ji != "function")
    return !1;
  try {
    e = new ji([1, 3.14, -3.14, k2 + 1]), r = C2(e) && e[0] === 1 && e[1] === 3 && // truncation
    e[2] === -3 && // truncation
    e[3] === N2;
  } catch {
    r = !1;
  }
  return r;
}
var M2 = F2;
/**
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
*/
var D2 = M2, U2 = D2;
/**
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
*/
var P2 = typeof Int8Array == "function" ? Int8Array : void 0, L2 = P2;
/**
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
*/
function R2() {
  throw new Error("not implemented");
}
var B2 = R2;
/**
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
*/
var j2 = U2, V2 = L2, W2 = B2, Gt;
j2() ? Gt = V2 : Gt = W2;
var z2 = Gt;
/**
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
*/
var Z2 = W, G2 = typeof Uint8Array == "function";
function H2(r) {
  return G2 && r instanceof Uint8Array || // eslint-disable-line stdlib/require-globals
  Z2(r) === "[object Uint8Array]";
}
var q2 = H2;
/**
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
*/
var Y2 = q2, J2 = Y2;
/**
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
*/
var X2 = 255, K2 = X2;
/**
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
*/
var Q2 = typeof Uint8Array == "function" ? Uint8Array : null, eE = Q2;
/**
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
*/
var rE = J2, wt = K2, Vi = eE;
function tE() {
  var r, e;
  if (typeof Vi != "function")
    return !1;
  try {
    e = [1, 3.14, -3.14, wt + 1, wt + 2], e = new Vi(e), r = rE(e) && e[0] === 1 && e[1] === 3 && // truncation
    e[2] === wt - 2 && // truncation and wrap around
    e[3] === 0 && // wrap around
    e[4] === 1;
  } catch {
    r = !1;
  }
  return r;
}
var nE = tE;
/**
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
*/
var iE = nE, aE = iE;
/**
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
*/
var sE = typeof Uint8Array == "function" ? Uint8Array : void 0, oE = sE;
/**
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
*/
function uE() {
  throw new Error("not implemented");
}
var lE = uE;
/**
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
*/
var cE = aE, fE = oE, hE = lE, Ht;
cE() ? Ht = fE : Ht = hE;
var dE = Ht;
/**
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
*/
var mE = W, yE = typeof Uint8ClampedArray == "function";
function pE(r) {
  return yE && r instanceof Uint8ClampedArray || // eslint-disable-line stdlib/require-globals
  mE(r) === "[object Uint8ClampedArray]";
}
var vE = pE;
/**
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
*/
var gE = vE, $E = gE;
/**
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
*/
var wE = typeof Uint8ClampedArray == "function" ? Uint8ClampedArray : null, bE = wE;
/**
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
*/
var EE = $E, Wi = bE;
function xE() {
  var r, e;
  if (typeof Wi != "function")
    return !1;
  try {
    e = new Wi([-1, 0, 1, 3.14, 4.99, 255, 256]), r = EE(e) && e[0] === 0 && // clamped
    e[1] === 0 && e[2] === 1 && e[3] === 3 && // round to nearest
    e[4] === 5 && // round to nearest
    e[5] === 255 && e[6] === 255;
  } catch {
    r = !1;
  }
  return r;
}
var TE = xE;
/**
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
*/
var SE = TE, IE = SE;
/**
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
*/
var OE = typeof Uint8ClampedArray == "function" ? Uint8ClampedArray : void 0, AE = OE;
/**
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
*/
function _E() {
  throw new Error("not implemented");
}
var CE = _E;
/**
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
*/
var kE = IE, NE = AE, FE = CE, qt;
kE() ? qt = NE : qt = FE;
var ME = qt;
/**
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
*/
var DE = W, UE = typeof Int16Array == "function";
function PE(r) {
  return UE && r instanceof Int16Array || // eslint-disable-line stdlib/require-globals
  DE(r) === "[object Int16Array]";
}
var LE = PE;
/**
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
*/
var RE = LE, BE = RE;
/**
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
*/
var jE = 32767, VE = jE;
/**
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
*/
var WE = -32768, zE = WE;
/**
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
*/
var ZE = typeof Int16Array == "function" ? Int16Array : null, GE = ZE;
/**
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
*/
var HE = BE, qE = VE, YE = zE, zi = GE;
function JE() {
  var r, e;
  if (typeof zi != "function")
    return !1;
  try {
    e = new zi([1, 3.14, -3.14, qE + 1]), r = HE(e) && e[0] === 1 && e[1] === 3 && // truncation
    e[2] === -3 && // truncation
    e[3] === YE;
  } catch {
    r = !1;
  }
  return r;
}
var XE = JE;
/**
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
*/
var KE = XE, QE = KE;
/**
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
*/
var ex = typeof Int16Array == "function" ? Int16Array : void 0, rx = ex;
/**
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
*/
function tx() {
  throw new Error("not implemented");
}
var nx = tx;
/**
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
*/
var ix = QE, ax = rx, sx = nx, Yt;
ix() ? Yt = ax : Yt = sx;
var ox = Yt;
/**
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
*/
var ux = W, lx = typeof Uint16Array == "function";
function cx(r) {
  return lx && r instanceof Uint16Array || // eslint-disable-line stdlib/require-globals
  ux(r) === "[object Uint16Array]";
}
var fx = cx;
/**
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
*/
var hx = fx, dx = hx;
/**
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
*/
var mx = 65535, yx = mx;
/**
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
*/
var px = typeof Uint16Array == "function" ? Uint16Array : null, vx = px;
/**
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
*/
var gx = dx, bt = yx, Zi = vx;
function $x() {
  var r, e;
  if (typeof Zi != "function")
    return !1;
  try {
    e = [1, 3.14, -3.14, bt + 1, bt + 2], e = new Zi(e), r = gx(e) && e[0] === 1 && e[1] === 3 && // truncation
    e[2] === bt - 2 && // truncation and wrap around
    e[3] === 0 && // wrap around
    e[4] === 1;
  } catch {
    r = !1;
  }
  return r;
}
var wx = $x;
/**
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
*/
var bx = wx, Ex = bx;
/**
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
*/
var xx = typeof Uint16Array == "function" ? Uint16Array : void 0, Tx = xx;
/**
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
*/
function Sx() {
  throw new Error("not implemented");
}
var Ix = Sx;
/**
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
*/
var Ox = Ex, Ax = Tx, _x = Ix, Jt;
Ox() ? Jt = Ax : Jt = _x;
var Cx = Jt;
/**
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
*/
var kx = W, Nx = typeof Int32Array == "function";
function Fx(r) {
  return Nx && r instanceof Int32Array || // eslint-disable-line stdlib/require-globals
  kx(r) === "[object Int32Array]";
}
var Mx = Fx;
/**
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
*/
var Dx = Mx, Ux = Dx;
/**
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
*/
var Px = 2147483647, Lx = Px;
/**
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
*/
var Rx = -2147483648, Bx = Rx;
/**
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
*/
var jx = typeof Int32Array == "function" ? Int32Array : null, Vx = jx;
/**
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
*/
var Wx = Ux, zx = Lx, Zx = Bx, Gi = Vx;
function Gx() {
  var r, e;
  if (typeof Gi != "function")
    return !1;
  try {
    e = new Gi([1, 3.14, -3.14, zx + 1]), r = Wx(e) && e[0] === 1 && e[1] === 3 && // truncation
    e[2] === -3 && // truncation
    e[3] === Zx;
  } catch {
    r = !1;
  }
  return r;
}
var Hx = Gx;
/**
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
*/
var qx = Hx, Yx = qx;
/**
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
*/
var Jx = typeof Int32Array == "function" ? Int32Array : void 0, Xx = Jx;
/**
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
*/
function Kx() {
  throw new Error("not implemented");
}
var Qx = Kx;
/**
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
*/
var eT = Yx, rT = Xx, tT = Qx, Xt;
eT() ? Xt = rT : Xt = tT;
var nT = Xt;
/**
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
*/
var iT = W, aT = typeof Uint32Array == "function";
function sT(r) {
  return aT && r instanceof Uint32Array || // eslint-disable-line stdlib/require-globals
  iT(r) === "[object Uint32Array]";
}
var oT = sT;
/**
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
*/
var uT = oT, lT = uT;
/**
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
*/
var cT = typeof Uint32Array == "function" ? Uint32Array : null, fT = cT;
/**
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
*/
var hT = lT, Et = Co, Hi = fT;
function dT() {
  var r, e;
  if (typeof Hi != "function")
    return !1;
  try {
    e = [1, 3.14, -3.14, Et + 1, Et + 2], e = new Hi(e), r = hT(e) && e[0] === 1 && e[1] === 3 && // truncation
    e[2] === Et - 2 && // truncation and wrap around
    e[3] === 0 && // wrap around
    e[4] === 1;
  } catch {
    r = !1;
  }
  return r;
}
var mT = dT;
/**
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
*/
var yT = mT, pT = yT;
/**
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
*/
var vT = typeof Uint32Array == "function" ? Uint32Array : void 0, gT = vT;
/**
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
*/
function $T() {
  throw new Error("not implemented");
}
var wT = $T;
/**
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
*/
var bT = pT, ET = gT, xT = wT, Kt;
bT() ? Kt = ET : Kt = xT;
var TT = Kt;
/**
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
*/
var ST = W, IT = typeof Float32Array == "function";
function OT(r) {
  return IT && r instanceof Float32Array || // eslint-disable-line stdlib/require-globals
  ST(r) === "[object Float32Array]";
}
var AT = OT;
/**
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
*/
var _T = AT, CT = _T;
/**
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
*/
var kT = typeof Float32Array == "function" ? Float32Array : null, NT = kT;
/**
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
*/
var FT = CT, MT = Sn, qi = NT;
function DT() {
  var r, e;
  if (typeof qi != "function")
    return !1;
  try {
    e = new qi([1, 3.14, -3.14, 5e40]), r = FT(e) && e[0] === 1 && e[1] === 3.140000104904175 && e[2] === -3.140000104904175 && e[3] === MT;
  } catch {
    r = !1;
  }
  return r;
}
var UT = DT;
/**
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
*/
var PT = UT, LT = PT;
/**
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
*/
var RT = typeof Float32Array == "function" ? Float32Array : void 0, BT = RT;
/**
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
*/
function jT() {
  throw new Error("not implemented");
}
var VT = jT;
/**
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
*/
var WT = LT, zT = BT, ZT = VT, Qt;
WT() ? Qt = zT : Qt = ZT;
var GT = Qt;
/**
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
*/
var HT = W, qT = typeof Float64Array == "function";
function YT(r) {
  return qT && r instanceof Float64Array || // eslint-disable-line stdlib/require-globals
  HT(r) === "[object Float64Array]";
}
var JT = YT;
/**
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
*/
var XT = JT, KT = XT;
/**
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
*/
var QT = typeof Float64Array == "function" ? Float64Array : null, eS = QT;
/**
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
*/
var rS = KT, Yi = eS;
function tS() {
  var r, e;
  if (typeof Yi != "function")
    return !1;
  try {
    e = new Yi([1, 3.14, -3.14, NaN]), r = rS(e) && e[0] === 1 && e[1] === 3.14 && e[2] === -3.14 && e[3] !== e[3];
  } catch {
    r = !1;
  }
  return r;
}
var nS = tS;
/**
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
*/
var iS = nS, aS = iS;
/**
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
*/
var sS = typeof Float64Array == "function" ? Float64Array : void 0, oS = sS;
/**
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
*/
function uS() {
  throw new Error("not implemented");
}
var lS = uS;
/**
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
*/
var cS = aS, fS = oS, hS = lS, en;
cS() ? en = fS : en = hS;
var dS = en;
/**
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
*/
var mS = z2, yS = dE, pS = ME, vS = ox, gS = Cx, $S = nT, wS = TT, bS = GT, ES = dS, Lo;
function xS(r) {
  return new mS(r);
}
function TS(r) {
  return new yS(r);
}
function SS(r) {
  return new pS(r);
}
function IS(r) {
  return new vS(r);
}
function OS(r) {
  return new gS(r);
}
function AS(r) {
  return new $S(r);
}
function _S(r) {
  return new wS(r);
}
function CS(r) {
  return new bS(r);
}
function kS(r) {
  return new ES(r);
}
function NS() {
  var r = {
    int8array: xS,
    uint8array: TS,
    uint8clampedarray: SS,
    int16array: IS,
    uint16array: OS,
    int32array: AS,
    uint32array: _S,
    float32array: CS,
    float64array: kS
  };
  return r;
}
Lo = NS();
var FS = Lo;
/**
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
*/
var Lr = Je, Bn = Kr, Ji = pr, MS = Ig, Xi = Nn, DS = n$, US = So, Ro = Mo, PS = $b, fr = kb, LS = mo, hr = qs, RS = v2, BS = FS;
function jS(r) {
  var e, t, n, a, u, c, o, h;
  for (e = [], a = [], o = Object.create(LS(r)), e.push(r), a.push(o), t = PS(r), h = 0; h < t.length; h++)
    n = t[h], u = fr(r, n), Lr(u, "value") && (c = Bn(r[n]) ? [] : {}, u.value = Oe(r[n], c, e, a, -1)), hr(o, n, u);
  return Object.isExtensible(r) || Object.preventExtensions(o), Object.isSealed(r) && Object.seal(o), Object.isFrozen(r) && Object.freeze(o), o;
}
function VS(r) {
  var e = [], t = [], n, a, u, c, o, h;
  for (o = new r.constructor(r.message), e.push(r), t.push(o), r.stack && (o.stack = r.stack), r.code && (o.code = r.code), r.errno && (o.errno = r.errno), r.syscall && (o.syscall = r.syscall), n = Ro(r), h = 0; h < n.length; h++)
    c = n[h], a = fr(r, c), Lr(a, "value") && (u = Bn(r[c]) ? [] : {}, a.value = Oe(r[c], u, e, t, -1)), hr(o, c, a);
  return o;
}
function Oe(r, e, t, n, a) {
  var u, c, o, h, y, v, g, b, w, x;
  if (a -= 1, typeof r != "object" || r === null)
    return r;
  if (Ji(r))
    return RS(r);
  if (MS(r))
    return VS(r);
  if (o = Xi(r), o === "date")
    return /* @__PURE__ */ new Date(+r);
  if (o === "regexp")
    return DS(r.toString());
  if (o === "set")
    return new Set(r);
  if (o === "map")
    return new Map(r);
  if (o === "string" || o === "boolean" || o === "number")
    return r.valueOf();
  if (y = BS[o], y)
    return y(r);
  if (o !== "array" && o !== "object")
    return typeof Object.freeze == "function" ? jS(r) : {};
  if (c = Ro(r), a > 0)
    for (u = o, x = 0; x < c.length; x++) {
      if (v = c[x], b = r[v], o = Xi(b), typeof b != "object" || b === null || o !== "array" && o !== "object" || Ji(b)) {
        u === "object" ? (h = fr(r, v), Lr(h, "value") && (h.value = Oe(b)), hr(e, v, h)) : e[v] = Oe(b);
        continue;
      }
      if (w = US(t, b), w !== -1) {
        e[v] = n[w];
        continue;
      }
      g = Bn(b) ? new Array(b.length) : {}, t.push(b), n.push(g), u === "array" ? e[v] = Oe(b, g, t, n, a) : (h = fr(r, v), Lr(h, "value") && (h.value = Oe(b, g, t, n, a)), hr(e, v, h));
    }
  else if (o === "array")
    for (x = 0; x < c.length; x++)
      v = c[x], e[v] = r[v];
  else
    for (x = 0; x < c.length; x++)
      v = c[x], h = fr(r, v), hr(e, v, h);
  return Object.isExtensible(r) || Object.preventExtensions(e), Object.isSealed(r) && Object.seal(e), Object.isFrozen(r) && Object.freeze(e), e;
}
var WS = Oe;
/**
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
*/
var zS = Kr, ZS = gv.isPrimitive, GS = we, HS = Sn, qS = WS;
function YS(r, e) {
  var t;
  if (arguments.length > 1) {
    if (!ZS(e))
      throw new TypeError(GS("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.", e));
    if (e === 0)
      return r;
  } else
    e = HS;
  return t = zS(r) ? new Array(r.length) : {}, qS(r, t, [r], [t], e);
}
var JS = YS;
/**
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
*/
var XS = JS, KS = XS;
const QS = /* @__PURE__ */ Va(KS), Ki = { ...Ws, GhostError: O }, ce = {
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
    const e = {
      [wn.name]: "access_denied",
      [En.name]: "temporarily_unavailable",
      [$n.name]: "invalid_request",
      [bn.name]: "invalid_request",
      default: "server_error"
    }, { detail: t, code: n, ...a } = ce.serialize(r);
    return {
      error: r.code || e[r.name] || "server_error",
      error_description: r.message,
      ...a
    };
  },
  /**
   * @description Deserialize oauth error format into GhostError instance.
   * @constructor
   */
  OAuthDeserialize(r) {
    try {
      return new Ki[r.title || r.name || Be.name](ce.deserialize(r));
    } catch {
      return new Be({
        errorType: r.title || r.name,
        ...ce.deserialize(r)
      });
    }
  },
  /**
   * @description Serialize GhostError instance into jsonapi.org format.
   * @param err
   * @return {Object}
   */
  JSONAPISerialize(r) {
    const e = {
      errors: [ce.serialize(r)]
    };
    return e.errors[0].source = {}, r.property && (e.errors[0].source.pointer = "/data/attributes/" + r.property), e;
  },
  /**
   * @description Deserialize JSON api format into GhostError instance.
   */
  JSONAPIDeserialize(r) {
    r = r.errors && r.errors[0] || {};
    let e;
    try {
      e = new Ki[r.title || r.name || Be.name](ce.deserialize(r));
    } catch {
      e = new Be({
        errorType: r.title || r.name,
        ...ce.deserialize(r)
      });
    }
    return r.source && r.source.pointer && (e.property = r.source.pointer.split("/")[3]), e;
  }
};
function eI(r, e) {
  e = e || { format: "jsonapi" };
  let t = {};
  try {
    e.format === "jsonapi" ? t = ce.JSONAPISerialize(r) : t = ce.OAuthSerialize(r);
  } catch {
    t.message = "Something went wrong.";
  }
  return t;
}
function rI(r) {
  let e = {};
  return r.errors ? e = ce.JSONAPIDeserialize(r) : e = ce.OAuthDeserialize(r), e;
}
function tI(r) {
  var a;
  const e = ((a = r.stack) == null ? void 0 : a.split(/\n/)) || [];
  "hideStack" in r && r.hideStack ? e.splice(1, e.length - 1) : e.splice(1, 0, "Stack Trace:"), "help" in r && r.help && e.splice(1, 0, `${r.help}`), "context" in r && r.context && e.splice(1, 0, `${r.context}`);
  const n = QS(r);
  return n.stack = e.join(`
`), n;
}
function nI(r) {
  const e = O.name, t = "IgnitionError";
  return function a(u) {
    return !u || !u.name ? !1 : u.name === e || u.name === t ? !0 : a(Object.getPrototypeOf(u));
  }(r.constructor);
}
var iI = Ws;
const aI = {
  serialize: eI,
  deserialize: rI,
  isGhostError: nI,
  prepareStackForUser: tI
}, sI = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BadRequestError: $n,
  ConflictError: js,
  DataExportError: Cs,
  DataImportError: ks,
  DisabledFeatureError: Ms,
  EmailError: Ns,
  HelperWarning: Ps,
  HostLimitError: Us,
  IncorrectUsageError: $s,
  InternalServerError: Be,
  MaintenanceError: En,
  MethodNotAllowedError: Ts,
  MigrationError: Vs,
  NoContentError: Bs,
  NoPermissionError: wn,
  NotFoundError: ws,
  PasswordResetRequiredError: Ls,
  RangeNotSatisfiableError: Is,
  RequestEntityTooLargeError: Os,
  RequestNotAcceptableError: Ss,
  ThemeValidationError: Fs,
  TokenRevocationError: As,
  TooManyRequestsError: xs,
  UnauthorizedError: bs,
  UnhandledJobError: Rs,
  UnsupportedMediaTypeError: Es,
  UpdateCollisionError: Ds,
  ValidationError: bn,
  VersionMismatchError: _s,
  default: iI,
  utils: aI
}, Symbol.toStringTag, { value: "Module" })), Bo = /* @__PURE__ */ wl(sI);
var oI = ms, uI = oI(function(r, e, t) {
  return r + (t ? " " : "") + e.toLowerCase();
}), lI = uI, cI = yn, fI = function() {
  try {
    var r = cI(Object, "defineProperty");
    return r({}, "", {}), r;
  } catch {
  }
}(), jo = fI, Qi = jo;
function hI(r, e, t) {
  e == "__proto__" && Qi ? Qi(r, e, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : r[e] = t;
}
var Vo = hI, dI = Vo, mI = qr, yI = Object.prototype, pI = yI.hasOwnProperty;
function vI(r, e, t) {
  var n = r[e];
  (!(pI.call(r, e) && mI(n, t)) || t === void 0 && !(e in r)) && dI(r, e, t);
}
var gI = vI, $I = gI, wI = Vo;
function bI(r, e, t, n) {
  var a = !t;
  t || (t = {});
  for (var u = -1, c = e.length; ++u < c; ) {
    var o = e[u], h = n ? n(t[o], r[o], o, t, r) : void 0;
    h === void 0 && (h = r[o]), a ? wI(t, o, h) : $I(t, o, h);
  }
  return t;
}
var EI = bI;
function xI(r) {
  return r;
}
var Wo = xI;
function TI(r, e, t) {
  switch (t.length) {
    case 0:
      return r.call(e);
    case 1:
      return r.call(e, t[0]);
    case 2:
      return r.call(e, t[0], t[1]);
    case 3:
      return r.call(e, t[0], t[1], t[2]);
  }
  return r.apply(e, t);
}
var zo = TI, SI = zo, ea = Math.max;
function II(r, e, t) {
  return e = ea(e === void 0 ? r.length - 1 : e, 0), function() {
    for (var n = arguments, a = -1, u = ea(n.length - e, 0), c = Array(u); ++a < u; )
      c[a] = n[e + a];
    a = -1;
    for (var o = Array(e + 1); ++a < e; )
      o[a] = n[a];
    return o[e] = t(c), SI(r, this, o);
  };
}
var OI = II;
function AI(r) {
  return function() {
    return r;
  };
}
var _I = AI, CI = _I, ra = jo, kI = Wo, NI = ra ? function(r, e) {
  return ra(r, "toString", {
    configurable: !0,
    enumerable: !1,
    value: CI(e),
    writable: !0
  });
} : kI, FI = NI, MI = 800, DI = 16, UI = Date.now;
function PI(r) {
  var e = 0, t = 0;
  return function() {
    var n = UI(), a = DI - (n - t);
    if (t = n, a > 0) {
      if (++e >= MI)
        return arguments[0];
    } else
      e = 0;
    return r.apply(void 0, arguments);
  };
}
var LI = PI, RI = FI, BI = LI, jI = BI(RI), VI = jI, WI = Wo, zI = OI, ZI = VI;
function GI(r, e) {
  return ZI(zI(r, e, WI), r + "");
}
var Zo = GI, HI = ys, qI = gn;
function YI(r) {
  return r != null && qI(r.length) && !HI(r);
}
var jn = YI, JI = qr, XI = jn, KI = vn, QI = Gr;
function eO(r, e, t) {
  if (!QI(t))
    return !1;
  var n = typeof e;
  return (n == "number" ? XI(t) && KI(e, t.length) : n == "string" && e in t) ? JI(t[e], r) : !1;
}
var Go = eO, rO = Zo, tO = Go;
function nO(r) {
  return rO(function(e, t) {
    var n = -1, a = t.length, u = a > 1 ? t[a - 1] : void 0, c = a > 2 ? t[2] : void 0;
    for (u = r.length > 3 && typeof u == "function" ? (a--, u) : void 0, c && tO(t[0], t[1], c) && (u = a < 3 ? void 0 : u, a = 1), e = Object(e); ++n < a; ) {
      var o = t[n];
      o && r(e, o, n, u);
    }
    return e;
  });
}
var iO = nO;
function aO(r, e) {
  for (var t = -1, n = Array(r); ++t < r; )
    n[t] = e(t);
  return n;
}
var sO = aO, Rr = { exports: {} };
function oO() {
  return !1;
}
var uO = oO;
Rr.exports;
(function(r, e) {
  var t = Zr, n = uO, a = e && !e.nodeType && e, u = a && !0 && r && !r.nodeType && r, c = u && u.exports === a, o = c ? t.Buffer : void 0, h = o ? o.isBuffer : void 0, y = h || n;
  r.exports = y;
})(Rr, Rr.exports);
var lO = Rr.exports, cO = Ze, fO = gn, hO = Ge, dO = "[object Arguments]", mO = "[object Array]", yO = "[object Boolean]", pO = "[object Date]", vO = "[object Error]", gO = "[object Function]", $O = "[object Map]", wO = "[object Number]", bO = "[object Object]", EO = "[object RegExp]", xO = "[object Set]", TO = "[object String]", SO = "[object WeakMap]", IO = "[object ArrayBuffer]", OO = "[object DataView]", AO = "[object Float32Array]", _O = "[object Float64Array]", CO = "[object Int8Array]", kO = "[object Int16Array]", NO = "[object Int32Array]", FO = "[object Uint8Array]", MO = "[object Uint8ClampedArray]", DO = "[object Uint16Array]", UO = "[object Uint32Array]", k = {};
k[AO] = k[_O] = k[CO] = k[kO] = k[NO] = k[FO] = k[MO] = k[DO] = k[UO] = !0;
k[dO] = k[mO] = k[IO] = k[yO] = k[OO] = k[pO] = k[vO] = k[gO] = k[$O] = k[wO] = k[bO] = k[EO] = k[xO] = k[TO] = k[SO] = !1;
function PO(r) {
  return hO(r) && fO(r.length) && !!k[cO(r)];
}
var LO = PO;
function RO(r) {
  return function(e) {
    return r(e);
  };
}
var BO = RO, Br = { exports: {} };
Br.exports;
(function(r, e) {
  var t = Wa, n = e && !e.nodeType && e, a = n && !0 && r && !r.nodeType && r, u = a && a.exports === n, c = u && t.process, o = function() {
    try {
      var h = a && a.require && a.require("util").types;
      return h || c && c.binding && c.binding("util");
    } catch {
    }
  }();
  r.exports = o;
})(Br, Br.exports);
var jO = Br.exports, VO = LO, WO = BO, ta = jO, na = ta && ta.isTypedArray, zO = na ? WO(na) : VO, ZO = zO, GO = sO, HO = gs, qO = yr, YO = lO, JO = vn, XO = ZO, KO = Object.prototype, QO = KO.hasOwnProperty;
function eA(r, e) {
  var t = qO(r), n = !t && HO(r), a = !t && !n && YO(r), u = !t && !n && !a && XO(r), c = t || n || a || u, o = c ? GO(r.length, String) : [], h = o.length;
  for (var y in r)
    (e || QO.call(r, y)) && !(c && // Safari 9 has enumerable `arguments.length` in strict mode.
    (y == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (y == "offset" || y == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    u && (y == "buffer" || y == "byteLength" || y == "byteOffset") || // Skip index properties.
    JO(y, h))) && o.push(y);
  return o;
}
var Ho = eA, rA = Object.prototype;
function tA(r) {
  var e = r && r.constructor, t = typeof e == "function" && e.prototype || rA;
  return r === t;
}
var qo = tA;
function nA(r) {
  var e = [];
  if (r != null)
    for (var t in Object(r))
      e.push(t);
  return e;
}
var iA = nA, aA = Gr, sA = qo, oA = iA, uA = Object.prototype, lA = uA.hasOwnProperty;
function cA(r) {
  if (!aA(r))
    return oA(r);
  var e = sA(r), t = [];
  for (var n in r)
    n == "constructor" && (e || !lA.call(r, n)) || t.push(n);
  return t;
}
var fA = cA, hA = Ho, dA = fA, mA = jn;
function yA(r) {
  return mA(r) ? hA(r, !0) : dA(r);
}
var pA = yA, vA = EI, gA = iO, $A = pA, wA = gA(function(r, e, t, n) {
  vA(e, $A(e), r, n);
}), bA = wA;
function EA(r, e) {
  return function(t) {
    return r(e(t));
  };
}
var Yo = EA, xA = Yo, TA = xA(Object.getPrototypeOf, Object), SA = TA, IA = Ze, OA = SA, AA = Ge, _A = "[object Object]", CA = Function.prototype, kA = Object.prototype, Jo = CA.toString, NA = kA.hasOwnProperty, FA = Jo.call(Object);
function MA(r) {
  if (!AA(r) || IA(r) != _A)
    return !1;
  var e = OA(r);
  if (e === null)
    return !0;
  var t = NA.call(e, "constructor") && e.constructor;
  return typeof t == "function" && t instanceof t && Jo.call(t) == FA;
}
var DA = MA, UA = Ze, PA = Ge, LA = DA, RA = "[object DOMException]", BA = "[object Error]";
function jA(r) {
  if (!PA(r))
    return !1;
  var e = UA(r);
  return e == BA || e == RA || typeof r.message == "string" && typeof r.name == "string" && !LA(r);
}
var Xo = jA, VA = zo, WA = Zo, zA = Xo, ZA = WA(function(r, e) {
  try {
    return VA(r, void 0, e);
  } catch (t) {
    return zA(t) ? t : new Error(t);
  }
}), GA = ZA, HA = za;
function qA(r, e) {
  return HA(e, function(t) {
    return r[t];
  });
}
var YA = qA, JA = qr, Ko = Object.prototype, XA = Ko.hasOwnProperty;
function KA(r, e, t, n) {
  return r === void 0 || JA(r, Ko[t]) && !XA.call(n, t) ? e : r;
}
var QA = KA, e_ = {
  "\\": "\\",
  "'": "'",
  "\n": "n",
  "\r": "r",
  "\u2028": "u2028",
  "\u2029": "u2029"
};
function r_(r) {
  return "\\" + e_[r];
}
var t_ = r_, n_ = Yo, i_ = n_(Object.keys, Object), a_ = i_, s_ = qo, o_ = a_, u_ = Object.prototype, l_ = u_.hasOwnProperty;
function c_(r) {
  if (!s_(r))
    return o_(r);
  var e = [];
  for (var t in Object(r))
    l_.call(r, t) && t != "constructor" && e.push(t);
  return e;
}
var f_ = c_, h_ = Ho, d_ = f_, m_ = jn;
function y_(r) {
  return m_(r) ? h_(r) : d_(r);
}
var p_ = y_, v_ = /<%=([\s\S]+?)%>/g, Qo = v_, g_ = es, $_ = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, w_ = g_($_), b_ = w_, E_ = b_, x_ = _e, eu = /[&<>"']/g, T_ = RegExp(eu.source);
function S_(r) {
  return r = x_(r), r && T_.test(r) ? r.replace(eu, E_) : r;
}
var I_ = S_, O_ = /<%-([\s\S]+?)%>/g, A_ = O_, __ = /<%([\s\S]+?)%>/g, C_ = __, k_ = I_, N_ = A_, F_ = C_, M_ = Qo, D_ = {
  /**
   * Used to detect `data` property values to be HTML-escaped.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  escape: N_,
  /**
   * Used to detect code to be evaluated.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  evaluate: F_,
  /**
   * Used to detect `data` property values to inject.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  interpolate: M_,
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
    _: { escape: k_ }
  }
}, U_ = D_, ia = bA, P_ = GA, L_ = YA, aa = QA, R_ = t_, B_ = Xo, j_ = Go, V_ = p_, W_ = Qo, sa = U_, z_ = _e, Z_ = "Invalid `variable` option passed into `_.template`", G_ = /\b__p \+= '';/g, H_ = /\b(__p \+=) '' \+/g, q_ = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Y_ = /[()=,{}\[\]\/\s]/, J_ = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, _r = /($^)/, X_ = /['\n\r\u2028\u2029\\]/g, K_ = Object.prototype, oa = K_.hasOwnProperty;
function Q_(r, e, t) {
  var n = sa.imports._.templateSettings || sa;
  t && j_(r, e, t) && (e = void 0), r = z_(r), e = ia({}, e, n, aa);
  var a = ia({}, e.imports, n.imports, aa), u = V_(a), c = L_(a, u), o, h, y = 0, v = e.interpolate || _r, g = "__p += '", b = RegExp(
    (e.escape || _r).source + "|" + v.source + "|" + (v === W_ ? J_ : _r).source + "|" + (e.evaluate || _r).source + "|$",
    "g"
  ), w = oa.call(e, "sourceURL") ? "//# sourceURL=" + (e.sourceURL + "").replace(/\s/g, " ") + `
` : "";
  r.replace(b, function(H, Y, Q, be, ke, J) {
    return Q || (Q = be), g += r.slice(y, J).replace(X_, R_), Y && (o = !0, g += `' +
__e(` + Y + `) +
'`), ke && (h = !0, g += `';
` + ke + `;
__p += '`), Q && (g += `' +
((__t = (` + Q + `)) == null ? '' : __t) +
'`), y = J + H.length, H;
  }), g += `';
`;
  var x = oa.call(e, "variable") && e.variable;
  if (!x)
    g = `with (obj) {
` + g + `
}
`;
  else if (Y_.test(x))
    throw new Error(Z_);
  g = (h ? g.replace(G_, "") : g).replace(H_, "$1").replace(q_, "$1;"), g = "function(" + (x || "obj") + `) {
` + (x ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (o ? ", __e = _.escape" : "") + (h ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + g + `return __p
}`;
  var U = P_(function() {
    return Function(u, w + "return " + g).apply(void 0, c);
  });
  if (U.source = g, B_(U))
    throw U;
  return U;
}
var eC = Q_, K = {};
Object.defineProperty(K, "__esModule", { value: !0 });
class Ce extends Error {
}
class rC extends Ce {
  constructor(e) {
    super(`Invalid DateTime: ${e.toMessage()}`);
  }
}
class tC extends Ce {
  constructor(e) {
    super(`Invalid Interval: ${e.toMessage()}`);
  }
}
class nC extends Ce {
  constructor(e) {
    super(`Invalid Duration: ${e.toMessage()}`);
  }
}
class je extends Ce {
}
class ru extends Ce {
  constructor(e) {
    super(`Invalid unit ${e}`);
  }
}
class z extends Ce {
}
class pe extends Ce {
  constructor() {
    super("Zone is an abstract class");
  }
}
const $ = "numeric", ue = "short", X = "long", jr = {
  year: $,
  month: $,
  day: $
}, tu = {
  year: $,
  month: ue,
  day: $
}, iC = {
  year: $,
  month: ue,
  day: $,
  weekday: ue
}, nu = {
  year: $,
  month: X,
  day: $
}, iu = {
  year: $,
  month: X,
  day: $,
  weekday: X
}, au = {
  hour: $,
  minute: $
}, su = {
  hour: $,
  minute: $,
  second: $
}, ou = {
  hour: $,
  minute: $,
  second: $,
  timeZoneName: ue
}, uu = {
  hour: $,
  minute: $,
  second: $,
  timeZoneName: X
}, lu = {
  hour: $,
  minute: $,
  hourCycle: "h23"
}, cu = {
  hour: $,
  minute: $,
  second: $,
  hourCycle: "h23"
}, fu = {
  hour: $,
  minute: $,
  second: $,
  hourCycle: "h23",
  timeZoneName: ue
}, hu = {
  hour: $,
  minute: $,
  second: $,
  hourCycle: "h23",
  timeZoneName: X
}, du = {
  year: $,
  month: $,
  day: $,
  hour: $,
  minute: $
}, mu = {
  year: $,
  month: $,
  day: $,
  hour: $,
  minute: $,
  second: $
}, yu = {
  year: $,
  month: ue,
  day: $,
  hour: $,
  minute: $
}, pu = {
  year: $,
  month: ue,
  day: $,
  hour: $,
  minute: $,
  second: $
}, aC = {
  year: $,
  month: ue,
  day: $,
  weekday: ue,
  hour: $,
  minute: $
}, vu = {
  year: $,
  month: X,
  day: $,
  hour: $,
  minute: $,
  timeZoneName: ue
}, gu = {
  year: $,
  month: X,
  day: $,
  hour: $,
  minute: $,
  second: $,
  timeZoneName: ue
}, $u = {
  year: $,
  month: X,
  day: $,
  weekday: X,
  hour: $,
  minute: $,
  timeZoneName: X
}, wu = {
  year: $,
  month: X,
  day: $,
  weekday: X,
  hour: $,
  minute: $,
  second: $,
  timeZoneName: X
};
class Ke {
  /**
   * The type of zone
   * @abstract
   * @type {string}
   */
  get type() {
    throw new pe();
  }
  /**
   * The name of this zone.
   * @abstract
   * @type {string}
   */
  get name() {
    throw new pe();
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
    throw new pe();
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
  offsetName(e, t) {
    throw new pe();
  }
  /**
   * Returns the offset's value as a string
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  formatOffset(e, t) {
    throw new pe();
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  offset(e) {
    throw new pe();
  }
  /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  equals(e) {
    throw new pe();
  }
  /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */
  get isValid() {
    throw new pe();
  }
}
let xt = null;
class vr extends Ke {
  /**
   * Get a singleton instance of the local zone
   * @return {SystemZone}
   */
  static get instance() {
    return xt === null && (xt = new vr()), xt;
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
    format: t,
    locale: n
  }) {
    return Nu(e, t, n);
  }
  /** @override **/
  formatOffset(e, t) {
    return dr(this.offset(e), t);
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
const rn = /* @__PURE__ */ new Map();
function sC(r) {
  let e = rn.get(r);
  return e === void 0 && (e = new Intl.DateTimeFormat("en-US", {
    hour12: !1,
    timeZone: r,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    era: "short"
  }), rn.set(r, e)), e;
}
const oC = {
  year: 0,
  month: 1,
  day: 2,
  era: 3,
  hour: 4,
  minute: 5,
  second: 6
};
function uC(r, e) {
  const t = r.format(e).replace(/\u200E/g, ""), n = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(t), [, a, u, c, o, h, y, v] = n;
  return [c, a, u, o, h, y, v];
}
function lC(r, e) {
  const t = r.formatToParts(e), n = [];
  for (let a = 0; a < t.length; a++) {
    const {
      type: u,
      value: c
    } = t[a], o = oC[u];
    u === "era" ? n[o] = c : E(o) || (n[o] = parseInt(c, 10));
  }
  return n;
}
const Tt = /* @__PURE__ */ new Map();
class he extends Ke {
  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */
  static create(e) {
    let t = Tt.get(e);
    return t === void 0 && Tt.set(e, t = new he(e)), t;
  }
  /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCache() {
    Tt.clear(), rn.clear();
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
    super(), this.zoneName = e, this.valid = he.isValidZone(e);
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
    format: t,
    locale: n
  }) {
    return Nu(e, t, n, this.name);
  }
  /**
   * Returns the offset's value as a string
   * @override
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  formatOffset(e, t) {
    return dr(this.offset(e), t);
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @override
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  offset(e) {
    if (!this.valid) return NaN;
    const t = new Date(e);
    if (isNaN(t)) return NaN;
    const n = sC(this.name);
    let [a, u, c, o, h, y, v] = n.formatToParts ? lC(n, t) : uC(n, t);
    o === "BC" && (a = -Math.abs(a) + 1);
    const b = nt({
      year: a,
      month: u,
      day: c,
      hour: h === 24 ? 0 : h,
      minute: y,
      second: v,
      millisecond: 0
    });
    let w = +t;
    const x = w % 1e3;
    return w -= x >= 0 ? x : 1e3 + x, (b - w) / (60 * 1e3);
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
let ua = {};
function cC(r, e = {}) {
  const t = JSON.stringify([r, e]);
  let n = ua[t];
  return n || (n = new Intl.ListFormat(r, e), ua[t] = n), n;
}
const tn = /* @__PURE__ */ new Map();
function nn(r, e = {}) {
  const t = JSON.stringify([r, e]);
  let n = tn.get(t);
  return n === void 0 && (n = new Intl.DateTimeFormat(r, e), tn.set(t, n)), n;
}
const an = /* @__PURE__ */ new Map();
function fC(r, e = {}) {
  const t = JSON.stringify([r, e]);
  let n = an.get(t);
  return n === void 0 && (n = new Intl.NumberFormat(r, e), an.set(t, n)), n;
}
const sn = /* @__PURE__ */ new Map();
function hC(r, e = {}) {
  const {
    base: t,
    ...n
  } = e, a = JSON.stringify([r, n]);
  let u = sn.get(a);
  return u === void 0 && (u = new Intl.RelativeTimeFormat(r, e), sn.set(a, u)), u;
}
let or = null;
function dC() {
  return or || (or = new Intl.DateTimeFormat().resolvedOptions().locale, or);
}
const on = /* @__PURE__ */ new Map();
function bu(r) {
  let e = on.get(r);
  return e === void 0 && (e = new Intl.DateTimeFormat(r).resolvedOptions(), on.set(r, e)), e;
}
const un = /* @__PURE__ */ new Map();
function mC(r) {
  let e = un.get(r);
  if (!e) {
    const t = new Intl.Locale(r);
    e = "getWeekInfo" in t ? t.getWeekInfo() : t.weekInfo, "minimalDays" in e || (e = {
      ...Eu,
      ...e
    }), un.set(r, e);
  }
  return e;
}
function yC(r) {
  const e = r.indexOf("-x-");
  e !== -1 && (r = r.substring(0, e));
  const t = r.indexOf("-u-");
  if (t === -1)
    return [r];
  {
    let n, a;
    try {
      n = nn(r).resolvedOptions(), a = r;
    } catch {
      const h = r.substring(0, t);
      n = nn(h).resolvedOptions(), a = h;
    }
    const {
      numberingSystem: u,
      calendar: c
    } = n;
    return [a, u, c];
  }
}
function pC(r, e, t) {
  return (t || e) && (r.includes("-u-") || (r += "-u"), t && (r += `-ca-${t}`), e && (r += `-nu-${e}`)), r;
}
function vC(r) {
  const e = [];
  for (let t = 1; t <= 12; t++) {
    const n = R.utc(2009, t, 1);
    e.push(r(n));
  }
  return e;
}
function gC(r) {
  const e = [];
  for (let t = 1; t <= 7; t++) {
    const n = R.utc(2016, 11, 13 + t);
    e.push(r(n));
  }
  return e;
}
function Cr(r, e, t, n) {
  const a = r.listingMode();
  return a === "error" ? null : a === "en" ? t(e) : n(e);
}
function $C(r) {
  return r.numberingSystem && r.numberingSystem !== "latn" ? !1 : r.numberingSystem === "latn" || !r.locale || r.locale.startsWith("en") || bu(r.locale).numberingSystem === "latn";
}
class wC {
  constructor(e, t, n) {
    this.padTo = n.padTo || 0, this.floor = n.floor || !1;
    const {
      padTo: a,
      floor: u,
      ...c
    } = n;
    if (!t || Object.keys(c).length > 0) {
      const o = {
        useGrouping: !1,
        ...n
      };
      n.padTo > 0 && (o.minimumIntegerDigits = n.padTo), this.inf = fC(e, o);
    }
  }
  format(e) {
    if (this.inf) {
      const t = this.floor ? Math.floor(e) : e;
      return this.inf.format(t);
    } else {
      const t = this.floor ? Math.floor(e) : Gn(e, 3);
      return B(t, this.padTo);
    }
  }
}
class bC {
  constructor(e, t, n) {
    this.opts = n, this.originalZone = void 0;
    let a;
    if (this.opts.timeZone)
      this.dt = e;
    else if (e.zone.type === "fixed") {
      const c = -1 * (e.offset / 60), o = c >= 0 ? `Etc/GMT+${c}` : `Etc/GMT${c}`;
      e.offset !== 0 && he.create(o).valid ? (a = o, this.dt = e) : (a = "UTC", this.dt = e.offset === 0 ? e : e.setZone("UTC").plus({
        minutes: e.offset
      }), this.originalZone = e.zone);
    } else e.zone.type === "system" ? this.dt = e : e.zone.type === "iana" ? (this.dt = e, a = e.zone.name) : (a = "UTC", this.dt = e.setZone("UTC").plus({
      minutes: e.offset
    }), this.originalZone = e.zone);
    const u = {
      ...this.opts
    };
    u.timeZone = u.timeZone || a, this.dtf = nn(t, u);
  }
  format() {
    return this.originalZone ? this.formatToParts().map(({
      value: e
    }) => e).join("") : this.dtf.format(this.dt.toJSDate());
  }
  formatToParts() {
    const e = this.dtf.formatToParts(this.dt.toJSDate());
    return this.originalZone ? e.map((t) => {
      if (t.type === "timeZoneName") {
        const n = this.originalZone.offsetName(this.dt.ts, {
          locale: this.dt.locale,
          format: this.opts.timeZoneName
        });
        return {
          ...t,
          value: n
        };
      } else
        return t;
    }) : e;
  }
  resolvedOptions() {
    return this.dtf.resolvedOptions();
  }
}
class EC {
  constructor(e, t, n) {
    this.opts = {
      style: "long",
      ...n
    }, !t && Cu() && (this.rtf = hC(e, n));
  }
  format(e, t) {
    return this.rtf ? this.rtf.format(e, t) : WC(t, e, this.opts.numeric, this.opts.style !== "long");
  }
  formatToParts(e, t) {
    return this.rtf ? this.rtf.formatToParts(e, t) : [];
  }
}
const Eu = {
  firstDay: 1,
  minimalDays: 4,
  weekend: [6, 7]
};
class A {
  static fromOpts(e) {
    return A.create(e.locale, e.numberingSystem, e.outputCalendar, e.weekSettings, e.defaultToEN);
  }
  static create(e, t, n, a, u = !1) {
    const c = e || D.defaultLocale, o = c || (u ? "en-US" : dC()), h = t || D.defaultNumberingSystem, y = n || D.defaultOutputCalendar, v = cn(a) || D.defaultWeekSettings;
    return new A(o, h, y, v, c);
  }
  static resetCache() {
    or = null, tn.clear(), an.clear(), sn.clear(), on.clear(), un.clear();
  }
  static fromObject({
    locale: e,
    numberingSystem: t,
    outputCalendar: n,
    weekSettings: a
  } = {}) {
    return A.create(e, t, n, a);
  }
  constructor(e, t, n, a, u) {
    const [c, o, h] = yC(e);
    this.locale = c, this.numberingSystem = t || o || null, this.outputCalendar = n || h || null, this.weekSettings = a, this.intl = pC(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = {
      format: {},
      standalone: {}
    }, this.monthsCache = {
      format: {},
      standalone: {}
    }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = u, this.fastNumbersCached = null;
  }
  get fastNumbers() {
    return this.fastNumbersCached == null && (this.fastNumbersCached = $C(this)), this.fastNumbersCached;
  }
  listingMode() {
    const e = this.isEnglish(), t = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
    return e && t ? "en" : "intl";
  }
  clone(e) {
    return !e || Object.getOwnPropertyNames(e).length === 0 ? this : A.create(e.locale || this.specifiedLocale, e.numberingSystem || this.numberingSystem, e.outputCalendar || this.outputCalendar, cn(e.weekSettings) || this.weekSettings, e.defaultToEN || !1);
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
  months(e, t = !1) {
    return Cr(this, e, Du, () => {
      const n = this.intl === "ja" || this.intl.startsWith("ja-");
      t &= !n;
      const a = t ? {
        month: e,
        day: "numeric"
      } : {
        month: e
      }, u = t ? "format" : "standalone";
      if (!this.monthsCache[u][e]) {
        const c = n ? (o) => this.dtFormatter(o, a).format() : (o) => this.extract(o, a, "month");
        this.monthsCache[u][e] = vC(c);
      }
      return this.monthsCache[u][e];
    });
  }
  weekdays(e, t = !1) {
    return Cr(this, e, Lu, () => {
      const n = t ? {
        weekday: e,
        year: "numeric",
        month: "long",
        day: "numeric"
      } : {
        weekday: e
      }, a = t ? "format" : "standalone";
      return this.weekdaysCache[a][e] || (this.weekdaysCache[a][e] = gC((u) => this.extract(u, n, "weekday"))), this.weekdaysCache[a][e];
    });
  }
  meridiems() {
    return Cr(this, void 0, () => Ru, () => {
      if (!this.meridiemCache) {
        const e = {
          hour: "numeric",
          hourCycle: "h12"
        };
        this.meridiemCache = [R.utc(2016, 11, 13, 9), R.utc(2016, 11, 13, 19)].map((t) => this.extract(t, e, "dayperiod"));
      }
      return this.meridiemCache;
    });
  }
  eras(e) {
    return Cr(this, e, Bu, () => {
      const t = {
        era: e
      };
      return this.eraCache[e] || (this.eraCache[e] = [R.utc(-40, 1, 1), R.utc(2017, 1, 1)].map((n) => this.extract(n, t, "era"))), this.eraCache[e];
    });
  }
  extract(e, t, n) {
    const a = this.dtFormatter(e, t), u = a.formatToParts(), c = u.find((o) => o.type.toLowerCase() === n);
    return c ? c.value : null;
  }
  numberFormatter(e = {}) {
    return new wC(this.intl, e.forceSimple || this.fastNumbers, e);
  }
  dtFormatter(e, t = {}) {
    return new bC(e, this.intl, t);
  }
  relFormatter(e = {}) {
    return new EC(this.intl, this.isEnglish(), e);
  }
  listFormatter(e = {}) {
    return cC(this.intl, e);
  }
  isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || bu(this.intl).locale.startsWith("en-us");
  }
  getWeekSettings() {
    return this.weekSettings ? this.weekSettings : ku() ? mC(this.locale) : Eu;
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
let St = null;
class G extends Ke {
  /**
   * Get a singleton instance of UTC
   * @return {FixedOffsetZone}
   */
  static get utcInstance() {
    return St === null && (St = new G(0)), St;
  }
  /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */
  static instance(e) {
    return e === 0 ? G.utcInstance : new G(e);
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
      const t = e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (t)
        return new G(it(t[1], t[2]));
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
    return this.fixed === 0 ? "UTC" : `UTC${dr(this.fixed, "narrow")}`;
  }
  /**
   * The IANA name of this zone, i.e. `Etc/UTC` or `Etc/GMT+/-nn`
   *
   * @override
   * @type {string}
   */
  get ianaName() {
    return this.fixed === 0 ? "Etc/UTC" : `Etc/GMT${dr(-this.fixed, "narrow")}`;
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
  formatOffset(e, t) {
    return dr(this.fixed, t);
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
class xu extends Ke {
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
function ge(r, e) {
  if (E(r) || r === null)
    return e;
  if (r instanceof Ke)
    return r;
  if (AC(r)) {
    const t = r.toLowerCase();
    return t === "default" ? e : t === "local" || t === "system" ? vr.instance : t === "utc" || t === "gmt" ? G.utcInstance : G.parseSpecifier(t) || he.create(r);
  } else return $e(r) ? G.instance(r) : typeof r == "object" && "offset" in r && typeof r.offset == "function" ? r : new xu(r);
}
const Vn = {
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
}, la = {
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
}, xC = Vn.hanidec.replace(/[\[|\]]/g, "").split("");
function TC(r) {
  let e = parseInt(r, 10);
  if (isNaN(e)) {
    e = "";
    for (let t = 0; t < r.length; t++) {
      const n = r.charCodeAt(t);
      if (r[t].search(Vn.hanidec) !== -1)
        e += xC.indexOf(r[t]);
      else
        for (const a in la) {
          const [u, c] = la[a];
          n >= u && n <= c && (e += n - u);
        }
    }
    return parseInt(e, 10);
  } else
    return e;
}
const ln = /* @__PURE__ */ new Map();
function SC() {
  ln.clear();
}
function ae({
  numberingSystem: r
}, e = "") {
  const t = r || "latn";
  let n = ln.get(t);
  n === void 0 && (n = /* @__PURE__ */ new Map(), ln.set(t, n));
  let a = n.get(e);
  return a === void 0 && (a = new RegExp(`${Vn[t]}${e}`), n.set(e, a)), a;
}
let ca = () => Date.now(), fa = "system", ha = null, da = null, ma = null, ya = 60, pa, va = null;
class D {
  /**
   * Get the callback for returning the current timestamp.
   * @type {function}
   */
  static get now() {
    return ca;
  }
  /**
   * Set the callback for returning the current timestamp.
   * The function should return a number, which will be interpreted as an Epoch millisecond count
   * @type {function}
   * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
   * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
   */
  static set now(e) {
    ca = e;
  }
  /**
   * Set the default time zone to create DateTimes in. Does not affect existing instances.
   * Use the value "system" to reset this value to the system's time zone.
   * @type {string}
   */
  static set defaultZone(e) {
    fa = e;
  }
  /**
   * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
   * The default value is the system's time zone (the one set on the machine that runs this code).
   * @type {Zone}
   */
  static get defaultZone() {
    return ge(fa, vr.instance);
  }
  /**
   * Get the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultLocale() {
    return ha;
  }
  /**
   * Set the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultLocale(e) {
    ha = e;
  }
  /**
   * Get the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultNumberingSystem() {
    return da;
  }
  /**
   * Set the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultNumberingSystem(e) {
    da = e;
  }
  /**
   * Get the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultOutputCalendar() {
    return ma;
  }
  /**
   * Set the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultOutputCalendar(e) {
    ma = e;
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
    return va;
  }
  /**
   * Allows overriding the default locale week settings, i.e. the start of the week, the weekend and
   * how many days are required in the first week of a year.
   * Does not affect existing instances.
   *
   * @param {WeekSettings|null} weekSettings
   */
  static set defaultWeekSettings(e) {
    va = cn(e);
  }
  /**
   * Get the cutoff year for whether a 2-digit year string is interpreted in the current or previous century. Numbers higher than the cutoff will be considered to mean 19xx and numbers lower or equal to the cutoff will be considered 20xx.
   * @type {number}
   */
  static get twoDigitCutoffYear() {
    return ya;
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
    ya = e % 100;
  }
  /**
   * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static get throwOnInvalid() {
    return pa;
  }
  /**
   * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static set throwOnInvalid(e) {
    pa = e;
  }
  /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCaches() {
    A.resetCache(), he.resetCache(), R.resetCache(), SC();
  }
}
class oe {
  constructor(e, t) {
    this.reason = e, this.explanation = t;
  }
  toMessage() {
    return this.explanation ? `${this.reason}: ${this.explanation}` : this.reason;
  }
}
const Tu = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], Su = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function te(r, e) {
  return new oe("unit out of range", `you specified ${e} (of type ${typeof e}) as a ${r}, which is invalid`);
}
function Wn(r, e, t) {
  const n = new Date(Date.UTC(r, e - 1, t));
  r < 100 && r >= 0 && n.setUTCFullYear(n.getUTCFullYear() - 1900);
  const a = n.getUTCDay();
  return a === 0 ? 7 : a;
}
function Iu(r, e, t) {
  return t + (gr(r) ? Su : Tu)[e - 1];
}
function Ou(r, e) {
  const t = gr(r) ? Su : Tu, n = t.findIndex((u) => u < e), a = e - t[n];
  return {
    month: n + 1,
    day: a
  };
}
function zn(r, e) {
  return (r - e + 7) % 7 + 1;
}
function Vr(r, e = 4, t = 1) {
  const {
    year: n,
    month: a,
    day: u
  } = r, c = Iu(n, a, u), o = zn(Wn(n, a, u), t);
  let h = Math.floor((c - o + 14 - e) / 7), y;
  return h < 1 ? (y = n - 1, h = mr(y, e, t)) : h > mr(n, e, t) ? (y = n + 1, h = 1) : y = n, {
    weekYear: y,
    weekNumber: h,
    weekday: o,
    ...at(r)
  };
}
function ga(r, e = 4, t = 1) {
  const {
    weekYear: n,
    weekNumber: a,
    weekday: u
  } = r, c = zn(Wn(n, 1, e), t), o = Ve(n);
  let h = a * 7 + u - c - 7 + e, y;
  h < 1 ? (y = n - 1, h += Ve(y)) : h > o ? (y = n + 1, h -= Ve(n)) : y = n;
  const {
    month: v,
    day: g
  } = Ou(y, h);
  return {
    year: y,
    month: v,
    day: g,
    ...at(r)
  };
}
function It(r) {
  const {
    year: e,
    month: t,
    day: n
  } = r, a = Iu(e, t, n);
  return {
    year: e,
    ordinal: a,
    ...at(r)
  };
}
function $a(r) {
  const {
    year: e,
    ordinal: t
  } = r, {
    month: n,
    day: a
  } = Ou(e, t);
  return {
    year: e,
    month: n,
    day: a,
    ...at(r)
  };
}
function wa(r, e) {
  if (!E(r.localWeekday) || !E(r.localWeekNumber) || !E(r.localWeekYear)) {
    if (!E(r.weekday) || !E(r.weekNumber) || !E(r.weekYear))
      throw new je("Cannot mix locale-based week fields with ISO-based week fields");
    return E(r.localWeekday) || (r.weekday = r.localWeekday), E(r.localWeekNumber) || (r.weekNumber = r.localWeekNumber), E(r.localWeekYear) || (r.weekYear = r.localWeekYear), delete r.localWeekday, delete r.localWeekNumber, delete r.localWeekYear, {
      minDaysInFirstWeek: e.getMinDaysInFirstWeek(),
      startOfWeek: e.getStartOfWeek()
    };
  } else
    return {
      minDaysInFirstWeek: 4,
      startOfWeek: 1
    };
}
function IC(r, e = 4, t = 1) {
  const n = tt(r.weekYear), a = ne(r.weekNumber, 1, mr(r.weekYear, e, t)), u = ne(r.weekday, 1, 7);
  return n ? a ? u ? !1 : te("weekday", r.weekday) : te("week", r.weekNumber) : te("weekYear", r.weekYear);
}
function OC(r) {
  const e = tt(r.year), t = ne(r.ordinal, 1, Ve(r.year));
  return e ? t ? !1 : te("ordinal", r.ordinal) : te("year", r.year);
}
function Au(r) {
  const e = tt(r.year), t = ne(r.month, 1, 12), n = ne(r.day, 1, Wr(r.year, r.month));
  return e ? t ? n ? !1 : te("day", r.day) : te("month", r.month) : te("year", r.year);
}
function _u(r) {
  const {
    hour: e,
    minute: t,
    second: n,
    millisecond: a
  } = r, u = ne(e, 0, 23) || e === 24 && t === 0 && n === 0 && a === 0, c = ne(t, 0, 59), o = ne(n, 0, 59), h = ne(a, 0, 999);
  return u ? c ? o ? h ? !1 : te("millisecond", a) : te("second", n) : te("minute", t) : te("hour", e);
}
function E(r) {
  return typeof r > "u";
}
function $e(r) {
  return typeof r == "number";
}
function tt(r) {
  return typeof r == "number" && r % 1 === 0;
}
function AC(r) {
  return typeof r == "string";
}
function _C(r) {
  return Object.prototype.toString.call(r) === "[object Date]";
}
function Cu() {
  try {
    return typeof Intl < "u" && !!Intl.RelativeTimeFormat;
  } catch {
    return !1;
  }
}
function ku() {
  try {
    return typeof Intl < "u" && !!Intl.Locale && ("weekInfo" in Intl.Locale.prototype || "getWeekInfo" in Intl.Locale.prototype);
  } catch {
    return !1;
  }
}
function CC(r) {
  return Array.isArray(r) ? r : [r];
}
function ba(r, e, t) {
  if (r.length !== 0)
    return r.reduce((n, a) => {
      const u = [e(a), a];
      return n && t(n[0], u[0]) === n[0] ? n : u;
    }, null)[1];
}
function kC(r, e) {
  return e.reduce((t, n) => (t[n] = r[n], t), {});
}
function ze(r, e) {
  return Object.prototype.hasOwnProperty.call(r, e);
}
function cn(r) {
  if (r == null)
    return null;
  if (typeof r != "object")
    throw new z("Week settings must be an object");
  if (!ne(r.firstDay, 1, 7) || !ne(r.minimalDays, 1, 7) || !Array.isArray(r.weekend) || r.weekend.some((e) => !ne(e, 1, 7)))
    throw new z("Invalid week settings");
  return {
    firstDay: r.firstDay,
    minimalDays: r.minimalDays,
    weekend: Array.from(r.weekend)
  };
}
function ne(r, e, t) {
  return tt(r) && r >= e && r <= t;
}
function NC(r, e) {
  return r - e * Math.floor(r / e);
}
function B(r, e = 2) {
  const t = r < 0;
  let n;
  return t ? n = "-" + ("" + -r).padStart(e, "0") : n = ("" + r).padStart(e, "0"), n;
}
function ve(r) {
  if (!(E(r) || r === null || r === ""))
    return parseInt(r, 10);
}
function Se(r) {
  if (!(E(r) || r === null || r === ""))
    return parseFloat(r);
}
function Zn(r) {
  if (!(E(r) || r === null || r === "")) {
    const e = parseFloat("0." + r) * 1e3;
    return Math.floor(e);
  }
}
function Gn(r, e, t = "round") {
  const n = 10 ** e;
  switch (t) {
    case "expand":
      return r > 0 ? Math.ceil(r * n) / n : Math.floor(r * n) / n;
    case "trunc":
      return Math.trunc(r * n) / n;
    case "round":
      return Math.round(r * n) / n;
    case "floor":
      return Math.floor(r * n) / n;
    case "ceil":
      return Math.ceil(r * n) / n;
    default:
      throw new RangeError(`Value rounding ${t} is out of range`);
  }
}
function gr(r) {
  return r % 4 === 0 && (r % 100 !== 0 || r % 400 === 0);
}
function Ve(r) {
  return gr(r) ? 366 : 365;
}
function Wr(r, e) {
  const t = NC(e - 1, 12) + 1, n = r + (e - t) / 12;
  return t === 2 ? gr(n) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t - 1];
}
function nt(r) {
  let e = Date.UTC(r.year, r.month - 1, r.day, r.hour, r.minute, r.second, r.millisecond);
  return r.year < 100 && r.year >= 0 && (e = new Date(e), e.setUTCFullYear(r.year, r.month - 1, r.day)), +e;
}
function Ea(r, e, t) {
  return -zn(Wn(r, 1, e), t) + e - 1;
}
function mr(r, e = 4, t = 1) {
  const n = Ea(r, e, t), a = Ea(r + 1, e, t);
  return (Ve(r) - n + a) / 7;
}
function fn(r) {
  return r > 99 ? r : r > D.twoDigitCutoffYear ? 1900 + r : 2e3 + r;
}
function Nu(r, e, t, n = null) {
  const a = new Date(r), u = {
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };
  n && (u.timeZone = n);
  const c = {
    timeZoneName: e,
    ...u
  }, o = new Intl.DateTimeFormat(t, c).formatToParts(a).find((h) => h.type.toLowerCase() === "timezonename");
  return o ? o.value : null;
}
function it(r, e) {
  let t = parseInt(r, 10);
  Number.isNaN(t) && (t = 0);
  const n = parseInt(e, 10) || 0, a = t < 0 || Object.is(t, -0) ? -n : n;
  return t * 60 + a;
}
function Fu(r) {
  const e = Number(r);
  if (typeof r == "boolean" || r === "" || !Number.isFinite(e)) throw new z(`Invalid unit value ${r}`);
  return e;
}
function zr(r, e) {
  const t = {};
  for (const n in r)
    if (ze(r, n)) {
      const a = r[n];
      if (a == null) continue;
      t[e(n)] = Fu(a);
    }
  return t;
}
function dr(r, e) {
  const t = Math.trunc(Math.abs(r / 60)), n = Math.trunc(Math.abs(r % 60)), a = r >= 0 ? "+" : "-";
  switch (e) {
    case "short":
      return `${a}${B(t, 2)}:${B(n, 2)}`;
    case "narrow":
      return `${a}${t}${n > 0 ? `:${n}` : ""}`;
    case "techie":
      return `${a}${B(t, 2)}${B(n, 2)}`;
    default:
      throw new RangeError(`Value format ${e} is out of range for property format`);
  }
}
function at(r) {
  return kC(r, ["hour", "minute", "second", "millisecond"]);
}
const FC = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], Mu = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], MC = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function Du(r) {
  switch (r) {
    case "narrow":
      return [...MC];
    case "short":
      return [...Mu];
    case "long":
      return [...FC];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}
const Uu = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], Pu = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], DC = ["M", "T", "W", "T", "F", "S", "S"];
function Lu(r) {
  switch (r) {
    case "narrow":
      return [...DC];
    case "short":
      return [...Pu];
    case "long":
      return [...Uu];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
const Ru = ["AM", "PM"], UC = ["Before Christ", "Anno Domini"], PC = ["BC", "AD"], LC = ["B", "A"];
function Bu(r) {
  switch (r) {
    case "narrow":
      return [...LC];
    case "short":
      return [...PC];
    case "long":
      return [...UC];
    default:
      return null;
  }
}
function RC(r) {
  return Ru[r.hour < 12 ? 0 : 1];
}
function BC(r, e) {
  return Lu(e)[r.weekday - 1];
}
function jC(r, e) {
  return Du(e)[r.month - 1];
}
function VC(r, e) {
  return Bu(e)[r.year < 0 ? 0 : 1];
}
function WC(r, e, t = "always", n = !1) {
  const a = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."]
  }, u = ["hours", "minutes", "seconds"].indexOf(r) === -1;
  if (t === "auto" && u) {
    const g = r === "days";
    switch (e) {
      case 1:
        return g ? "tomorrow" : `next ${a[r][0]}`;
      case -1:
        return g ? "yesterday" : `last ${a[r][0]}`;
      case 0:
        return g ? "today" : `this ${a[r][0]}`;
    }
  }
  const c = Object.is(e, -0) || e < 0, o = Math.abs(e), h = o === 1, y = a[r], v = n ? h ? y[1] : y[2] || y[1] : h ? a[r][0] : r;
  return c ? `${o} ${v} ago` : `in ${o} ${v}`;
}
function xa(r, e) {
  let t = "";
  for (const n of r)
    n.literal ? t += n.val : t += e(n.val);
  return t;
}
const zC = {
  D: jr,
  DD: tu,
  DDD: nu,
  DDDD: iu,
  t: au,
  tt: su,
  ttt: ou,
  tttt: uu,
  T: lu,
  TT: cu,
  TTT: fu,
  TTTT: hu,
  f: du,
  ff: yu,
  fff: vu,
  ffff: $u,
  F: mu,
  FF: pu,
  FFF: gu,
  FFFF: wu
};
class Z {
  static create(e, t = {}) {
    return new Z(e, t);
  }
  static parseFormat(e) {
    let t = null, n = "", a = !1;
    const u = [];
    for (let c = 0; c < e.length; c++) {
      const o = e.charAt(c);
      o === "'" ? ((n.length > 0 || a) && u.push({
        literal: a || /^\s+$/.test(n),
        val: n === "" ? "'" : n
      }), t = null, n = "", a = !a) : a || o === t ? n += o : (n.length > 0 && u.push({
        literal: /^\s+$/.test(n),
        val: n
      }), n = o, t = o);
    }
    return n.length > 0 && u.push({
      literal: a || /^\s+$/.test(n),
      val: n
    }), u;
  }
  static macroTokenToFormatOpts(e) {
    return zC[e];
  }
  constructor(e, t) {
    this.opts = t, this.loc = e, this.systemLoc = null;
  }
  formatWithSystemDefault(e, t) {
    return this.systemLoc === null && (this.systemLoc = this.loc.redefaultToSystem()), this.systemLoc.dtFormatter(e, {
      ...this.opts,
      ...t
    }).format();
  }
  dtFormatter(e, t = {}) {
    return this.loc.dtFormatter(e, {
      ...this.opts,
      ...t
    });
  }
  formatDateTime(e, t) {
    return this.dtFormatter(e, t).format();
  }
  formatDateTimeParts(e, t) {
    return this.dtFormatter(e, t).formatToParts();
  }
  formatInterval(e, t) {
    return this.dtFormatter(e.start, t).dtf.formatRange(e.start.toJSDate(), e.end.toJSDate());
  }
  resolvedOptions(e, t) {
    return this.dtFormatter(e, t).resolvedOptions();
  }
  num(e, t = 0, n = void 0) {
    if (this.opts.forceSimple)
      return B(e, t);
    const a = {
      ...this.opts
    };
    return t > 0 && (a.padTo = t), n && (a.signDisplay = n), this.loc.numberFormatter(a).format(e);
  }
  formatDateTimeFromString(e, t) {
    const n = this.loc.listingMode() === "en", a = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", u = (w, x) => this.loc.extract(e, w, x), c = (w) => e.isOffsetFixed && e.offset === 0 && w.allowZ ? "Z" : e.isValid ? e.zone.formatOffset(e.ts, w.format) : "", o = () => n ? RC(e) : u({
      hour: "numeric",
      hourCycle: "h12"
    }, "dayperiod"), h = (w, x) => n ? jC(e, w) : u(x ? {
      month: w
    } : {
      month: w,
      day: "numeric"
    }, "month"), y = (w, x) => n ? BC(e, w) : u(x ? {
      weekday: w
    } : {
      weekday: w,
      month: "long",
      day: "numeric"
    }, "weekday"), v = (w) => {
      const x = Z.macroTokenToFormatOpts(w);
      return x ? this.formatWithSystemDefault(e, x) : w;
    }, g = (w) => n ? VC(e, w) : u({
      era: w
    }, "era"), b = (w) => {
      switch (w) {
        case "S":
          return this.num(e.millisecond);
        case "u":
        case "SSS":
          return this.num(e.millisecond, 3);
        case "s":
          return this.num(e.second);
        case "ss":
          return this.num(e.second, 2);
        case "uu":
          return this.num(Math.floor(e.millisecond / 10), 2);
        case "uuu":
          return this.num(Math.floor(e.millisecond / 100));
        case "m":
          return this.num(e.minute);
        case "mm":
          return this.num(e.minute, 2);
        case "h":
          return this.num(e.hour % 12 === 0 ? 12 : e.hour % 12);
        case "hh":
          return this.num(e.hour % 12 === 0 ? 12 : e.hour % 12, 2);
        case "H":
          return this.num(e.hour);
        case "HH":
          return this.num(e.hour, 2);
        case "Z":
          return c({
            format: "narrow",
            allowZ: this.opts.allowZ
          });
        case "ZZ":
          return c({
            format: "short",
            allowZ: this.opts.allowZ
          });
        case "ZZZ":
          return c({
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
        case "z":
          return e.zoneName;
        case "a":
          return o();
        case "d":
          return a ? u({
            day: "numeric"
          }, "day") : this.num(e.day);
        case "dd":
          return a ? u({
            day: "2-digit"
          }, "day") : this.num(e.day, 2);
        case "c":
          return this.num(e.weekday);
        case "ccc":
          return y("short", !0);
        case "cccc":
          return y("long", !0);
        case "ccccc":
          return y("narrow", !0);
        case "E":
          return this.num(e.weekday);
        case "EEE":
          return y("short", !1);
        case "EEEE":
          return y("long", !1);
        case "EEEEE":
          return y("narrow", !1);
        case "L":
          return a ? u({
            month: "numeric",
            day: "numeric"
          }, "month") : this.num(e.month);
        case "LL":
          return a ? u({
            month: "2-digit",
            day: "numeric"
          }, "month") : this.num(e.month, 2);
        case "LLL":
          return h("short", !0);
        case "LLLL":
          return h("long", !0);
        case "LLLLL":
          return h("narrow", !0);
        case "M":
          return a ? u({
            month: "numeric"
          }, "month") : this.num(e.month);
        case "MM":
          return a ? u({
            month: "2-digit"
          }, "month") : this.num(e.month, 2);
        case "MMM":
          return h("short", !1);
        case "MMMM":
          return h("long", !1);
        case "MMMMM":
          return h("narrow", !1);
        case "y":
          return a ? u({
            year: "numeric"
          }, "year") : this.num(e.year);
        case "yy":
          return a ? u({
            year: "2-digit"
          }, "year") : this.num(e.year.toString().slice(-2), 2);
        case "yyyy":
          return a ? u({
            year: "numeric"
          }, "year") : this.num(e.year, 4);
        case "yyyyyy":
          return a ? u({
            year: "numeric"
          }, "year") : this.num(e.year, 6);
        case "G":
          return g("short");
        case "GG":
          return g("long");
        case "GGGGG":
          return g("narrow");
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
          return v(w);
      }
    };
    return xa(Z.parseFormat(t), b);
  }
  formatDurationFromString(e, t) {
    const n = this.opts.signMode === "negativeLargestOnly" ? -1 : 1, a = (v) => {
      switch (v[0]) {
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
    }, u = (v, g) => (b) => {
      const w = a(b);
      if (w) {
        const x = g.isNegativeDuration && w !== g.largestUnit ? n : 1;
        let U;
        return this.opts.signMode === "negativeLargestOnly" && w !== g.largestUnit ? U = "never" : this.opts.signMode === "all" ? U = "always" : U = "auto", this.num(v.get(w) * x, b.length, U);
      } else
        return b;
    }, c = Z.parseFormat(t), o = c.reduce((v, {
      literal: g,
      val: b
    }) => g ? v : v.concat(b), []), h = e.shiftTo(...o.map(a).filter((v) => v)), y = {
      isNegativeDuration: h < 0,
      // this relies on "collapsed" being based on "shiftTo", which builds up the object
      // in order
      largestUnit: Object.keys(h.values)[0]
    };
    return xa(c, u(h, y));
  }
}
const ju = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
function Qe(...r) {
  const e = r.reduce((t, n) => t + n.source, "");
  return RegExp(`^${e}$`);
}
function er(...r) {
  return (e) => r.reduce(([t, n, a], u) => {
    const [c, o, h] = u(e, a);
    return [{
      ...t,
      ...c
    }, o || n, h];
  }, [{}, null, 1]).slice(0, 2);
}
function rr(r, ...e) {
  if (r == null)
    return [null, null];
  for (const [t, n] of e) {
    const a = t.exec(r);
    if (a)
      return n(a);
  }
  return [null, null];
}
function Vu(...r) {
  return (e, t) => {
    const n = {};
    let a;
    for (a = 0; a < r.length; a++)
      n[r[a]] = ve(e[t + a]);
    return [n, null, t + a];
  };
}
const Wu = /(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/, ZC = `(?:${Wu.source}?(?:\\[(${ju.source})\\])?)?`, Hn = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, zu = RegExp(`${Hn.source}${ZC}`), qn = RegExp(`(?:[Tt]${zu.source})?`), GC = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, HC = /(\d{4})-?W(\d\d)(?:-?(\d))?/, qC = /(\d{4})-?(\d{3})/, YC = Vu("weekYear", "weekNumber", "weekDay"), JC = Vu("year", "ordinal"), XC = /(\d{4})-(\d\d)-(\d\d)/, Zu = RegExp(`${Hn.source} ?(?:${Wu.source}|(${ju.source}))?`), KC = RegExp(`(?: ${Zu.source})?`);
function We(r, e, t) {
  const n = r[e];
  return E(n) ? t : ve(n);
}
function QC(r, e) {
  return [{
    year: We(r, e),
    month: We(r, e + 1, 1),
    day: We(r, e + 2, 1)
  }, null, e + 3];
}
function tr(r, e) {
  return [{
    hours: We(r, e, 0),
    minutes: We(r, e + 1, 0),
    seconds: We(r, e + 2, 0),
    milliseconds: Zn(r[e + 3])
  }, null, e + 4];
}
function $r(r, e) {
  const t = !r[e] && !r[e + 1], n = it(r[e + 1], r[e + 2]), a = t ? null : G.instance(n);
  return [{}, a, e + 3];
}
function wr(r, e) {
  const t = r[e] ? he.create(r[e]) : null;
  return [{}, t, e + 1];
}
const ek = RegExp(`^T?${Hn.source}$`), rk = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function tk(r) {
  const [e, t, n, a, u, c, o, h, y] = r, v = e[0] === "-", g = h && h[0] === "-", b = (w, x = !1) => w !== void 0 && (x || w && v) ? -w : w;
  return [{
    years: b(Se(t)),
    months: b(Se(n)),
    weeks: b(Se(a)),
    days: b(Se(u)),
    hours: b(Se(c)),
    minutes: b(Se(o)),
    seconds: b(Se(h), h === "-0"),
    milliseconds: b(Zn(y), g)
  }];
}
const nk = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function Yn(r, e, t, n, a, u, c) {
  const o = {
    year: e.length === 2 ? fn(ve(e)) : ve(e),
    month: Mu.indexOf(t) + 1,
    day: ve(n),
    hour: ve(a),
    minute: ve(u)
  };
  return c && (o.second = ve(c)), r && (o.weekday = r.length > 3 ? Uu.indexOf(r) + 1 : Pu.indexOf(r) + 1), o;
}
const ik = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function ak(r) {
  const [, e, t, n, a, u, c, o, h, y, v, g] = r, b = Yn(e, a, n, t, u, c, o);
  let w;
  return h ? w = nk[h] : y ? w = 0 : w = it(v, g), [b, new G(w)];
}
function sk(r) {
  return r.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
const ok = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, uk = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, lk = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function Ta(r) {
  const [, e, t, n, a, u, c, o] = r;
  return [Yn(e, a, n, t, u, c, o), G.utcInstance];
}
function ck(r) {
  const [, e, t, n, a, u, c, o] = r;
  return [Yn(e, o, t, n, a, u, c), G.utcInstance];
}
const fk = Qe(GC, qn), hk = Qe(HC, qn), dk = Qe(qC, qn), mk = Qe(zu), Gu = er(QC, tr, $r, wr), yk = er(YC, tr, $r, wr), pk = er(JC, tr, $r, wr), vk = er(tr, $r, wr);
function gk(r) {
  return rr(r, [fk, Gu], [hk, yk], [dk, pk], [mk, vk]);
}
function $k(r) {
  return rr(sk(r), [ik, ak]);
}
function wk(r) {
  return rr(r, [ok, Ta], [uk, Ta], [lk, ck]);
}
function bk(r) {
  return rr(r, [rk, tk]);
}
const Ek = er(tr);
function xk(r) {
  return rr(r, [ek, Ek]);
}
const Tk = Qe(XC, KC), Sk = Qe(Zu), Ik = er(tr, $r, wr);
function Ok(r) {
  return rr(r, [Tk, Gu], [Sk, Ik]);
}
const Sa = "Invalid Duration", Hu = {
  weeks: {
    days: 7,
    hours: 7 * 24,
    minutes: 7 * 24 * 60,
    seconds: 7 * 24 * 60 * 60,
    milliseconds: 7 * 24 * 60 * 60 * 1e3
  },
  days: {
    hours: 24,
    minutes: 24 * 60,
    seconds: 24 * 60 * 60,
    milliseconds: 24 * 60 * 60 * 1e3
  },
  hours: {
    minutes: 60,
    seconds: 60 * 60,
    milliseconds: 60 * 60 * 1e3
  },
  minutes: {
    seconds: 60,
    milliseconds: 60 * 1e3
  },
  seconds: {
    milliseconds: 1e3
  }
}, Ak = {
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
    hours: 91 * 24,
    minutes: 91 * 24 * 60,
    seconds: 91 * 24 * 60 * 60,
    milliseconds: 91 * 24 * 60 * 60 * 1e3
  },
  months: {
    weeks: 4,
    days: 30,
    hours: 30 * 24,
    minutes: 30 * 24 * 60,
    seconds: 30 * 24 * 60 * 60,
    milliseconds: 30 * 24 * 60 * 60 * 1e3
  },
  ...Hu
}, ee = 146097 / 400, Ue = 146097 / 4800, _k = {
  years: {
    quarters: 4,
    months: 12,
    weeks: ee / 7,
    days: ee,
    hours: ee * 24,
    minutes: ee * 24 * 60,
    seconds: ee * 24 * 60 * 60,
    milliseconds: ee * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: ee / 28,
    days: ee / 4,
    hours: ee * 24 / 4,
    minutes: ee * 24 * 60 / 4,
    seconds: ee * 24 * 60 * 60 / 4,
    milliseconds: ee * 24 * 60 * 60 * 1e3 / 4
  },
  months: {
    weeks: Ue / 7,
    days: Ue,
    hours: Ue * 24,
    minutes: Ue * 24 * 60,
    seconds: Ue * 24 * 60 * 60,
    milliseconds: Ue * 24 * 60 * 60 * 1e3
  },
  ...Hu
}, Ae = ["years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"], Ck = Ae.slice(0).reverse();
function de(r, e, t = !1) {
  const n = {
    values: t ? e.values : {
      ...r.values,
      ...e.values || {}
    },
    loc: r.loc.clone(e.loc),
    conversionAccuracy: e.conversionAccuracy || r.conversionAccuracy,
    matrix: e.matrix || r.matrix
  };
  return new S(n);
}
function qu(r, e) {
  var t;
  let n = (t = e.milliseconds) != null ? t : 0;
  for (const a of Ck.slice(1))
    e[a] && (n += e[a] * r[a].milliseconds);
  return n;
}
function Ia(r, e) {
  const t = qu(r, e) < 0 ? -1 : 1;
  Ae.reduceRight((n, a) => {
    if (E(e[a]))
      return n;
    if (n) {
      const u = e[n] * t, c = r[a][n], o = Math.floor(u / c);
      e[a] += o * t, e[n] -= o * c * t;
    }
    return a;
  }, null), Ae.reduce((n, a) => {
    if (E(e[a]))
      return n;
    if (n) {
      const u = e[n] % 1;
      e[n] -= u, e[a] += u * r[n][a];
    }
    return a;
  }, null);
}
function Oa(r) {
  const e = {};
  for (const [t, n] of Object.entries(r))
    n !== 0 && (e[t] = n);
  return e;
}
class S {
  /**
   * @private
   */
  constructor(e) {
    const t = e.conversionAccuracy === "longterm" || !1;
    let n = t ? _k : Ak;
    e.matrix && (n = e.matrix), this.values = e.values, this.loc = e.loc || A.create(), this.conversionAccuracy = t ? "longterm" : "casual", this.invalid = e.invalid || null, this.matrix = n, this.isLuxonDuration = !0;
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
  static fromMillis(e, t) {
    return S.fromObject({
      milliseconds: e
    }, t);
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
  static fromObject(e, t = {}) {
    if (e == null || typeof e != "object")
      throw new z(`Duration.fromObject: argument expected to be an object, got ${e === null ? "null" : typeof e}`);
    return new S({
      values: zr(e, S.normalizeUnit),
      loc: A.fromObject(t),
      conversionAccuracy: t.conversionAccuracy,
      matrix: t.matrix
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
    if ($e(e))
      return S.fromMillis(e);
    if (S.isDuration(e))
      return e;
    if (typeof e == "object")
      return S.fromObject(e);
    throw new z(`Unknown duration argument ${e} of type ${typeof e}`);
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
  static fromISO(e, t) {
    const [n] = bk(e);
    return n ? S.fromObject(n, t) : S.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
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
  static fromISOTime(e, t) {
    const [n] = xk(e);
    return n ? S.fromObject(n, t) : S.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  /**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */
  static invalid(e, t = null) {
    if (!e)
      throw new z("need to specify a reason the Duration is invalid");
    const n = e instanceof oe ? e : new oe(e, t);
    if (D.throwOnInvalid)
      throw new nC(n);
    return new S({
      invalid: n
    });
  }
  /**
   * @private
   */
  static normalizeUnit(e) {
    const t = {
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
    if (!t) throw new ru(e);
    return t;
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
  toFormat(e, t = {}) {
    const n = {
      ...t,
      floor: t.round !== !1 && t.floor !== !1
    };
    return this.isValid ? Z.create(this.loc, n).formatDurationFromString(this, e) : Sa;
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
    if (!this.isValid) return Sa;
    const t = e.showZeros !== !1, n = Ae.map((a) => {
      const u = this.values[a];
      return E(u) || u === 0 && !t ? null : this.loc.numberFormatter({
        style: "unit",
        unitDisplay: "long",
        ...e,
        unit: a.slice(0, -1)
      }).format(u);
    }).filter((a) => a);
    return this.loc.listFormatter({
      type: "conjunction",
      style: e.listStyle || "narrow",
      ...e
    }).format(n);
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
    return this.years !== 0 && (e += this.years + "Y"), (this.months !== 0 || this.quarters !== 0) && (e += this.months + this.quarters * 3 + "M"), this.weeks !== 0 && (e += this.weeks + "W"), this.days !== 0 && (e += this.days + "D"), (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) && (e += "T"), this.hours !== 0 && (e += this.hours + "H"), this.minutes !== 0 && (e += this.minutes + "M"), (this.seconds !== 0 || this.milliseconds !== 0) && (e += Gn(this.seconds + this.milliseconds / 1e3, 3) + "S"), e === "P" && (e += "T0S"), e;
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
    const t = this.toMillis();
    return t < 0 || t >= 864e5 ? null : (e = {
      suppressMilliseconds: !1,
      suppressSeconds: !1,
      includePrefix: !1,
      format: "extended",
      ...e,
      includeOffset: !1
    }, R.fromMillis(t, {
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
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.isValid ? `Duration { values: ${JSON.stringify(this.values)} }` : `Duration { Invalid, reason: ${this.invalidReason} }`;
  }
  /**
   * Returns an milliseconds value of this Duration.
   * @return {number}
   */
  toMillis() {
    return this.isValid ? qu(this.matrix, this.values) : NaN;
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
    const t = S.fromDurationLike(e), n = {};
    for (const a of Ae)
      (ze(t.values, a) || ze(this.values, a)) && (n[a] = t.get(a) + this.get(a));
    return de(this, {
      values: n
    }, !0);
  }
  /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  minus(e) {
    if (!this.isValid) return this;
    const t = S.fromDurationLike(e);
    return this.plus(t.negate());
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
    const t = {};
    for (const n of Object.keys(this.values))
      t[n] = Fu(e(this.values[n], n));
    return de(this, {
      values: t
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
    return this[S.normalizeUnit(e)];
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
    const t = {
      ...this.values,
      ...zr(e, S.normalizeUnit)
    };
    return de(this, {
      values: t
    });
  }
  /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */
  reconfigure({
    locale: e,
    numberingSystem: t,
    conversionAccuracy: n,
    matrix: a
  } = {}) {
    const c = {
      loc: this.loc.clone({
        locale: e,
        numberingSystem: t
      }),
      matrix: a,
      conversionAccuracy: n
    };
    return de(this, c);
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
    return Ia(this.matrix, e), de(this, {
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
    const e = Oa(this.normalize().shiftToAll().toObject());
    return de(this, {
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
    e = e.map((c) => S.normalizeUnit(c));
    const t = {}, n = {}, a = this.toObject();
    let u;
    for (const c of Ae)
      if (e.indexOf(c) >= 0) {
        u = c;
        let o = 0;
        for (const y in n)
          o += this.matrix[y][c] * n[y], n[y] = 0;
        $e(a[c]) && (o += a[c]);
        const h = Math.trunc(o);
        t[c] = h, n[c] = (o * 1e3 - h * 1e3) / 1e3;
      } else $e(a[c]) && (n[c] = a[c]);
    for (const c in n)
      n[c] !== 0 && (t[u] += c === u ? n[c] : n[c] / this.matrix[u][c]);
    return Ia(this.matrix, t), de(this, {
      values: t
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
    for (const t of Object.keys(this.values))
      e[t] = this.values[t] === 0 ? 0 : -this.values[t];
    return de(this, {
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
    const e = Oa(this.values);
    return de(this, {
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
    function t(n, a) {
      return n === void 0 || n === 0 ? a === void 0 || a === 0 : n === a;
    }
    for (const n of Ae)
      if (!t(this.values[n], e.values[n]))
        return !1;
    return !0;
  }
}
const Pe = "Invalid Interval";
function kk(r, e) {
  return !r || !r.isValid ? M.invalid("missing or invalid start") : !e || !e.isValid ? M.invalid("missing or invalid end") : e < r ? M.invalid("end before start", `The end of an interval must be after its start, but you had start=${r.toISO()} and end=${e.toISO()}`) : null;
}
class M {
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
  static invalid(e, t = null) {
    if (!e)
      throw new z("need to specify a reason the Interval is invalid");
    const n = e instanceof oe ? e : new oe(e, t);
    if (D.throwOnInvalid)
      throw new tC(n);
    return new M({
      invalid: n
    });
  }
  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */
  static fromDateTimes(e, t) {
    const n = sr(e), a = sr(t), u = kk(n, a);
    return u ?? new M({
      start: n,
      end: a
    });
  }
  /**
   * Create an Interval from a start DateTime and a Duration to extend to.
   * @param {DateTime|Date|Object} start
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static after(e, t) {
    const n = S.fromDurationLike(t), a = sr(e);
    return M.fromDateTimes(a, a.plus(n));
  }
  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static before(e, t) {
    const n = S.fromDurationLike(t), a = sr(e);
    return M.fromDateTimes(a.minus(n), a);
  }
  /**
   * Create an Interval from an ISO 8601 string.
   * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
   * @param {string} text - the ISO string to parse
   * @param {Object} [opts] - options to pass {@link DateTime#fromISO} and optionally {@link Duration#fromISO}
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {Interval}
   */
  static fromISO(e, t) {
    const [n, a] = (e || "").split("/", 2);
    if (n && a) {
      let u, c;
      try {
        u = R.fromISO(n, t), c = u.isValid;
      } catch {
        c = !1;
      }
      let o, h;
      try {
        o = R.fromISO(a, t), h = o.isValid;
      } catch {
        h = !1;
      }
      if (c && h)
        return M.fromDateTimes(u, o);
      if (c) {
        const y = S.fromISO(a, t);
        if (y.isValid)
          return M.after(u, y);
      } else if (h) {
        const y = S.fromISO(n, t);
        if (y.isValid)
          return M.before(o, y);
      }
    }
    return M.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
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
  count(e = "milliseconds", t) {
    if (!this.isValid) return NaN;
    const n = this.start.startOf(e, t);
    let a;
    return t != null && t.useLocaleWeeks ? a = this.end.reconfigure({
      locale: n.locale
    }) : a = this.end, a = a.startOf(e, t), Math.floor(a.diff(n, e).get(e)) + (a.valueOf() !== this.end.valueOf());
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
    end: t
  } = {}) {
    return this.isValid ? M.fromDateTimes(e || this.s, t || this.e) : this;
  }
  /**
   * Split this Interval at each of the specified DateTimes
   * @param {...DateTime} dateTimes - the unit of time to count.
   * @return {Array}
   */
  splitAt(...e) {
    if (!this.isValid) return [];
    const t = e.map(sr).filter((c) => this.contains(c)).sort((c, o) => c.toMillis() - o.toMillis()), n = [];
    let {
      s: a
    } = this, u = 0;
    for (; a < this.e; ) {
      const c = t[u] || this.e, o = +c > +this.e ? this.e : c;
      n.push(M.fromDateTimes(a, o)), a = o, u += 1;
    }
    return n;
  }
  /**
   * Split this Interval into smaller Intervals, each of the specified length.
   * Left over time is grouped into a smaller interval
   * @param {Duration|Object|number} duration - The length of each resulting interval.
   * @return {Array}
   */
  splitBy(e) {
    const t = S.fromDurationLike(e);
    if (!this.isValid || !t.isValid || t.as("milliseconds") === 0)
      return [];
    let {
      s: n
    } = this, a = 1, u;
    const c = [];
    for (; n < this.e; ) {
      const o = this.start.plus(t.mapUnits((h) => h * a));
      u = +o > +this.e ? this.e : o, c.push(M.fromDateTimes(n, u)), n = u, a += 1;
    }
    return c;
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
    const t = this.s > e.s ? this.s : e.s, n = this.e < e.e ? this.e : e.e;
    return t >= n ? null : M.fromDateTimes(t, n);
  }
  /**
   * Return an Interval representing the union of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
   * @param {Interval} other
   * @return {Interval}
   */
  union(e) {
    if (!this.isValid) return this;
    const t = this.s < e.s ? this.s : e.s, n = this.e > e.e ? this.e : e.e;
    return M.fromDateTimes(t, n);
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
    const [t, n] = e.sort((a, u) => a.s - u.s).reduce(([a, u], c) => u ? u.overlaps(c) || u.abutsStart(c) ? [a, u.union(c)] : [a.concat([u]), c] : [a, c], [[], null]);
    return n && t.push(n), t;
  }
  /**
   * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
   * @param {Array} intervals
   * @return {Array}
   */
  static xor(e) {
    let t = null, n = 0;
    const a = [], u = e.map((h) => [{
      time: h.s,
      type: "s"
    }, {
      time: h.e,
      type: "e"
    }]), c = Array.prototype.concat(...u), o = c.sort((h, y) => h.time - y.time);
    for (const h of o)
      n += h.type === "s" ? 1 : -1, n === 1 ? t = h.time : (t && +t != +h.time && a.push(M.fromDateTimes(t, h.time)), t = null);
    return M.merge(a);
  }
  /**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {Array}
   */
  difference(...e) {
    return M.xor([this].concat(e)).map((t) => this.intersection(t)).filter((t) => t && !t.isEmpty());
  }
  /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */
  toString() {
    return this.isValid ? `[${this.s.toISO()} – ${this.e.toISO()})` : Pe;
  }
  /**
   * Returns a string representation of this Interval appropriate for the REPL.
   * @return {string}
   */
  [Symbol.for("nodejs.util.inspect.custom")]() {
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
  toLocaleString(e = jr, t = {}) {
    return this.isValid ? Z.create(this.s.loc.clone(t), e).formatInterval(this) : Pe;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISO(e) {
    return this.isValid ? `${this.s.toISO(e)}/${this.e.toISO(e)}` : Pe;
  }
  /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */
  toISODate() {
    return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : Pe;
  }
  /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISOTime(e) {
    return this.isValid ? `${this.s.toISOTime(e)}/${this.e.toISOTime(e)}` : Pe;
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
    separator: t = " – "
  } = {}) {
    return this.isValid ? `${this.s.toFormat(e)}${t}${this.e.toFormat(e)}` : Pe;
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
  toDuration(e, t) {
    return this.isValid ? this.e.diff(this.s, e, t) : S.invalid(this.invalidReason);
  }
  /**
   * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
   * @param {function} mapFn
   * @return {Interval}
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
   */
  mapEndpoints(e) {
    return M.fromDateTimes(e(this.s), e(this.e));
  }
}
class ur {
  /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */
  static hasDST(e = D.defaultZone) {
    const t = R.now().setZone(e).set({
      month: 12
    });
    return !e.isUniversal && t.offset !== t.set({
      month: 6
    }).offset;
  }
  /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */
  static isValidIANAZone(e) {
    return he.isValidZone(e);
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
    return ge(e, D.defaultZone);
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
    locObj: t = null
  } = {}) {
    return (t || A.create(e)).getStartOfWeek();
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
    locObj: t = null
  } = {}) {
    return (t || A.create(e)).getMinDaysInFirstWeek();
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
    locObj: t = null
  } = {}) {
    return (t || A.create(e)).getWeekendDays().slice();
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
    locale: t = null,
    numberingSystem: n = null,
    locObj: a = null,
    outputCalendar: u = "gregory"
  } = {}) {
    return (a || A.create(t, n, u)).months(e);
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
    locale: t = null,
    numberingSystem: n = null,
    locObj: a = null,
    outputCalendar: u = "gregory"
  } = {}) {
    return (a || A.create(t, n, u)).months(e, !0);
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
    locale: t = null,
    numberingSystem: n = null,
    locObj: a = null
  } = {}) {
    return (a || A.create(t, n, null)).weekdays(e);
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
    locale: t = null,
    numberingSystem: n = null,
    locObj: a = null
  } = {}) {
    return (a || A.create(t, n, null)).weekdays(e, !0);
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
    return A.create(e).meridiems();
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
    locale: t = null
  } = {}) {
    return A.create(t, null, "gregory").eras(e);
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
      relative: Cu(),
      localeWeek: ku()
    };
  }
}
function Aa(r, e) {
  const t = (a) => a.toUTC(0, {
    keepLocalTime: !0
  }).startOf("day").valueOf(), n = t(e) - t(r);
  return Math.floor(S.fromMillis(n).as("days"));
}
function Nk(r, e, t) {
  const n = [["years", (h, y) => y.year - h.year], ["quarters", (h, y) => y.quarter - h.quarter + (y.year - h.year) * 4], ["months", (h, y) => y.month - h.month + (y.year - h.year) * 12], ["weeks", (h, y) => {
    const v = Aa(h, y);
    return (v - v % 7) / 7;
  }], ["days", Aa]], a = {}, u = r;
  let c, o;
  for (const [h, y] of n)
    t.indexOf(h) >= 0 && (c = h, a[h] = y(r, e), o = u.plus(a), o > e ? (a[h]--, r = u.plus(a), r > e && (o = r, a[h]--, r = u.plus(a))) : r = o);
  return [r, a, o, c];
}
function Fk(r, e, t, n) {
  let [a, u, c, o] = Nk(r, e, t);
  const h = e - a, y = t.filter((g) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(g) >= 0);
  y.length === 0 && (c < e && (c = a.plus({
    [o]: 1
  })), c !== a && (u[o] = (u[o] || 0) + h / (c - a)));
  const v = S.fromObject(u, n);
  return y.length > 0 ? S.fromMillis(h, n).shiftTo(...y).plus(v) : v;
}
const Mk = "missing Intl.DateTimeFormat.formatToParts support";
function I(r, e = (t) => t) {
  return {
    regex: r,
    deser: ([t]) => e(TC(t))
  };
}
const Dk = " ", Yu = `[ ${Dk}]`, Ju = new RegExp(Yu, "g");
function Uk(r) {
  return r.replace(/\./g, "\\.?").replace(Ju, Yu);
}
function _a(r) {
  return r.replace(/\./g, "").replace(Ju, " ").toLowerCase();
}
function se(r, e) {
  return r === null ? null : {
    regex: RegExp(r.map(Uk).join("|")),
    deser: ([t]) => r.findIndex((n) => _a(t) === _a(n)) + e
  };
}
function Ca(r, e) {
  return {
    regex: r,
    deser: ([, t, n]) => it(t, n),
    groups: e
  };
}
function kr(r) {
  return {
    regex: r,
    deser: ([e]) => e
  };
}
function Pk(r) {
  return r.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function Lk(r, e) {
  const t = ae(e), n = ae(e, "{2}"), a = ae(e, "{3}"), u = ae(e, "{4}"), c = ae(e, "{6}"), o = ae(e, "{1,2}"), h = ae(e, "{1,3}"), y = ae(e, "{1,6}"), v = ae(e, "{1,9}"), g = ae(e, "{2,4}"), b = ae(e, "{4,6}"), w = (H) => ({
    regex: RegExp(Pk(H.val)),
    deser: ([Y]) => Y,
    literal: !0
  }), U = ((H) => {
    if (r.literal)
      return w(H);
    switch (H.val) {
      case "G":
        return se(e.eras("short"), 0);
      case "GG":
        return se(e.eras("long"), 0);
      case "y":
        return I(y);
      case "yy":
        return I(g, fn);
      case "yyyy":
        return I(u);
      case "yyyyy":
        return I(b);
      case "yyyyyy":
        return I(c);
      case "M":
        return I(o);
      case "MM":
        return I(n);
      case "MMM":
        return se(e.months("short", !0), 1);
      case "MMMM":
        return se(e.months("long", !0), 1);
      case "L":
        return I(o);
      case "LL":
        return I(n);
      case "LLL":
        return se(e.months("short", !1), 1);
      case "LLLL":
        return se(e.months("long", !1), 1);
      case "d":
        return I(o);
      case "dd":
        return I(n);
      case "o":
        return I(h);
      case "ooo":
        return I(a);
      case "HH":
        return I(n);
      case "H":
        return I(o);
      case "hh":
        return I(n);
      case "h":
        return I(o);
      case "mm":
        return I(n);
      case "m":
        return I(o);
      case "q":
        return I(o);
      case "qq":
        return I(n);
      case "s":
        return I(o);
      case "ss":
        return I(n);
      case "S":
        return I(h);
      case "SSS":
        return I(a);
      case "u":
        return kr(v);
      case "uu":
        return kr(o);
      case "uuu":
        return I(t);
      case "a":
        return se(e.meridiems(), 0);
      case "kkkk":
        return I(u);
      case "kk":
        return I(g, fn);
      case "W":
        return I(o);
      case "WW":
        return I(n);
      case "E":
      case "c":
        return I(t);
      case "EEE":
        return se(e.weekdays("short", !1), 1);
      case "EEEE":
        return se(e.weekdays("long", !1), 1);
      case "ccc":
        return se(e.weekdays("short", !0), 1);
      case "cccc":
        return se(e.weekdays("long", !0), 1);
      case "Z":
      case "ZZ":
        return Ca(new RegExp(`([+-]${o.source})(?::(${n.source}))?`), 2);
      case "ZZZ":
        return Ca(new RegExp(`([+-]${o.source})(${n.source})?`), 2);
      case "z":
        return kr(/[a-z_+-/]{1,256}?/i);
      case " ":
        return kr(/[^\S\n\r]/);
      default:
        return w(H);
    }
  })(r) || {
    invalidReason: Mk
  };
  return U.token = r, U;
}
const Rk = {
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
function Bk(r, e, t) {
  const {
    type: n,
    value: a
  } = r;
  if (n === "literal") {
    const h = /^\s+$/.test(a);
    return {
      literal: !h,
      val: h ? " " : a
    };
  }
  const u = e[n];
  let c = n;
  n === "hour" && (e.hour12 != null ? c = e.hour12 ? "hour12" : "hour24" : e.hourCycle != null ? e.hourCycle === "h11" || e.hourCycle === "h12" ? c = "hour12" : c = "hour24" : c = t.hour12 ? "hour12" : "hour24");
  let o = Rk[c];
  if (typeof o == "object" && (o = o[u]), o)
    return {
      literal: !1,
      val: o
    };
}
function jk(r) {
  return [`^${r.map((t) => t.regex).reduce((t, n) => `${t}(${n.source})`, "")}$`, r];
}
function Vk(r, e, t) {
  const n = r.match(e);
  if (n) {
    const a = {};
    let u = 1;
    for (const c in t)
      if (ze(t, c)) {
        const o = t[c], h = o.groups ? o.groups + 1 : 1;
        !o.literal && o.token && (a[o.token.val[0]] = o.deser(n.slice(u, u + h))), u += h;
      }
    return [n, a];
  } else
    return [n, {}];
}
function Wk(r) {
  const e = (u) => {
    switch (u) {
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
  let t = null, n;
  return E(r.z) || (t = he.create(r.z)), E(r.Z) || (t || (t = new G(r.Z)), n = r.Z), E(r.q) || (r.M = (r.q - 1) * 3 + 1), E(r.h) || (r.h < 12 && r.a === 1 ? r.h += 12 : r.h === 12 && r.a === 0 && (r.h = 0)), r.G === 0 && r.y && (r.y = -r.y), E(r.u) || (r.S = Zn(r.u)), [Object.keys(r).reduce((u, c) => {
    const o = e(c);
    return o && (u[o] = r[c]), u;
  }, {}), t, n];
}
let Ot = null;
function zk() {
  return Ot || (Ot = R.fromMillis(1555555555555)), Ot;
}
function Zk(r, e) {
  if (r.literal)
    return r;
  const t = Z.macroTokenToFormatOpts(r.val), n = el(t, e);
  return n == null || n.includes(void 0) ? r : n;
}
function Xu(r, e) {
  return Array.prototype.concat(...r.map((t) => Zk(t, e)));
}
class Ku {
  constructor(e, t) {
    if (this.locale = e, this.format = t, this.tokens = Xu(Z.parseFormat(t), e), this.units = this.tokens.map((n) => Lk(n, e)), this.disqualifyingUnit = this.units.find((n) => n.invalidReason), !this.disqualifyingUnit) {
      const [n, a] = jk(this.units);
      this.regex = RegExp(n, "i"), this.handlers = a;
    }
  }
  explainFromTokens(e) {
    if (this.isValid) {
      const [t, n] = Vk(e, this.regex, this.handlers), [a, u, c] = n ? Wk(n) : [null, null, void 0];
      if (ze(n, "a") && ze(n, "H"))
        throw new je("Can't include meridiem when specifying 24-hour format");
      return {
        input: e,
        tokens: this.tokens,
        regex: this.regex,
        rawMatches: t,
        matches: n,
        result: a,
        zone: u,
        specificOffset: c
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
function Qu(r, e, t) {
  return new Ku(r, t).explainFromTokens(e);
}
function Gk(r, e, t) {
  const {
    result: n,
    zone: a,
    specificOffset: u,
    invalidReason: c
  } = Qu(r, e, t);
  return [n, a, u, c];
}
function el(r, e) {
  if (!r)
    return null;
  const n = Z.create(e, r).dtFormatter(zk()), a = n.formatToParts(), u = n.resolvedOptions();
  return a.map((c) => Bk(c, r, u));
}
const At = "Invalid DateTime", ka = 864e13;
function lr(r) {
  return new oe("unsupported zone", `the zone "${r.name}" is not supported`);
}
function _t(r) {
  return r.weekData === null && (r.weekData = Vr(r.c)), r.weekData;
}
function Ct(r) {
  return r.localWeekData === null && (r.localWeekData = Vr(r.c, r.loc.getMinDaysInFirstWeek(), r.loc.getStartOfWeek())), r.localWeekData;
}
function Ie(r, e) {
  const t = {
    ts: r.ts,
    zone: r.zone,
    c: r.c,
    o: r.o,
    loc: r.loc,
    invalid: r.invalid
  };
  return new R({
    ...t,
    ...e,
    old: t
  });
}
function rl(r, e, t) {
  let n = r - e * 60 * 1e3;
  const a = t.offset(n);
  if (e === a)
    return [n, e];
  n -= (a - e) * 60 * 1e3;
  const u = t.offset(n);
  return a === u ? [n, a] : [r - Math.min(a, u) * 60 * 1e3, Math.max(a, u)];
}
function Nr(r, e) {
  r += e * 60 * 1e3;
  const t = new Date(r);
  return {
    year: t.getUTCFullYear(),
    month: t.getUTCMonth() + 1,
    day: t.getUTCDate(),
    hour: t.getUTCHours(),
    minute: t.getUTCMinutes(),
    second: t.getUTCSeconds(),
    millisecond: t.getUTCMilliseconds()
  };
}
function Dr(r, e, t) {
  return rl(nt(r), e, t);
}
function Na(r, e) {
  const t = r.o, n = r.c.year + Math.trunc(e.years), a = r.c.month + Math.trunc(e.months) + Math.trunc(e.quarters) * 3, u = {
    ...r.c,
    year: n,
    month: a,
    day: Math.min(r.c.day, Wr(n, a)) + Math.trunc(e.days) + Math.trunc(e.weeks) * 7
  }, c = S.fromObject({
    years: e.years - Math.trunc(e.years),
    quarters: e.quarters - Math.trunc(e.quarters),
    months: e.months - Math.trunc(e.months),
    weeks: e.weeks - Math.trunc(e.weeks),
    days: e.days - Math.trunc(e.days),
    hours: e.hours,
    minutes: e.minutes,
    seconds: e.seconds,
    milliseconds: e.milliseconds
  }).as("milliseconds"), o = nt(u);
  let [h, y] = rl(o, t, r.zone);
  return c !== 0 && (h += c, y = r.zone.offset(h)), {
    ts: h,
    o: y
  };
}
function Le(r, e, t, n, a, u) {
  const {
    setZone: c,
    zone: o
  } = t;
  if (r && Object.keys(r).length !== 0 || e) {
    const h = e || o, y = R.fromObject(r, {
      ...t,
      zone: h,
      specificOffset: u
    });
    return c ? y : y.setZone(o);
  } else
    return R.invalid(new oe("unparsable", `the input "${a}" can't be parsed as ${n}`));
}
function Fr(r, e, t = !0) {
  return r.isValid ? Z.create(A.create("en-US"), {
    allowZ: t,
    forceSimple: !0
  }).formatDateTimeFromString(r, e) : null;
}
function kt(r, e, t) {
  const n = r.c.year > 9999 || r.c.year < 0;
  let a = "";
  if (n && r.c.year >= 0 && (a += "+"), a += B(r.c.year, n ? 6 : 4), t === "year") return a;
  if (e) {
    if (a += "-", a += B(r.c.month), t === "month") return a;
    a += "-";
  } else if (a += B(r.c.month), t === "month") return a;
  return a += B(r.c.day), a;
}
function Fa(r, e, t, n, a, u, c) {
  let o = !t || r.c.millisecond !== 0 || r.c.second !== 0, h = "";
  switch (c) {
    case "day":
    case "month":
    case "year":
      break;
    default:
      if (h += B(r.c.hour), c === "hour") break;
      if (e) {
        if (h += ":", h += B(r.c.minute), c === "minute") break;
        o && (h += ":", h += B(r.c.second));
      } else {
        if (h += B(r.c.minute), c === "minute") break;
        o && (h += B(r.c.second));
      }
      if (c === "second") break;
      o && (!n || r.c.millisecond !== 0) && (h += ".", h += B(r.c.millisecond, 3));
  }
  return a && (r.isOffsetFixed && r.offset === 0 && !u ? h += "Z" : r.o < 0 ? (h += "-", h += B(Math.trunc(-r.o / 60)), h += ":", h += B(Math.trunc(-r.o % 60))) : (h += "+", h += B(Math.trunc(r.o / 60)), h += ":", h += B(Math.trunc(r.o % 60)))), u && (h += "[" + r.zone.ianaName + "]"), h;
}
const tl = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, Hk = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, qk = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, Ur = ["year", "month", "day", "hour", "minute", "second", "millisecond"], Yk = ["weekYear", "weekNumber", "weekday", "hour", "minute", "second", "millisecond"], Jk = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function Pr(r) {
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
  }[r.toLowerCase()];
  if (!e) throw new ru(r);
  return e;
}
function Ma(r) {
  switch (r.toLowerCase()) {
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
      return Pr(r);
  }
}
function Xk(r) {
  if (cr === void 0 && (cr = D.now()), r.type !== "iana")
    return r.offset(cr);
  const e = r.name;
  let t = hn.get(e);
  return t === void 0 && (t = r.offset(cr), hn.set(e, t)), t;
}
function Da(r, e) {
  const t = ge(e.zone, D.defaultZone);
  if (!t.isValid)
    return R.invalid(lr(t));
  const n = A.fromObject(e);
  let a, u;
  if (E(r.year))
    a = D.now();
  else {
    for (const h of Ur)
      E(r[h]) && (r[h] = tl[h]);
    const c = Au(r) || _u(r);
    if (c)
      return R.invalid(c);
    const o = Xk(t);
    [a, u] = Dr(r, o, t);
  }
  return new R({
    ts: a,
    zone: t,
    loc: n,
    o: u
  });
}
function Ua(r, e, t) {
  const n = E(t.round) ? !0 : t.round, a = E(t.rounding) ? "trunc" : t.rounding, u = (o, h) => (o = Gn(o, n || t.calendary ? 0 : 2, t.calendary ? "round" : a), e.loc.clone(t).relFormatter(t).format(o, h)), c = (o) => t.calendary ? e.hasSame(r, o) ? 0 : e.startOf(o).diff(r.startOf(o), o).get(o) : e.diff(r, o).get(o);
  if (t.unit)
    return u(c(t.unit), t.unit);
  for (const o of t.units) {
    const h = c(o);
    if (Math.abs(h) >= 1)
      return u(h, o);
  }
  return u(r > e ? -0 : 0, t.units[t.units.length - 1]);
}
function Pa(r) {
  let e = {}, t;
  return r.length > 0 && typeof r[r.length - 1] == "object" ? (e = r[r.length - 1], t = Array.from(r).slice(0, r.length - 1)) : t = Array.from(r), [e, t];
}
let cr;
const hn = /* @__PURE__ */ new Map();
let R = class F {
  /**
   * @access private
   */
  constructor(e) {
    const t = e.zone || D.defaultZone;
    let n = e.invalid || (Number.isNaN(e.ts) ? new oe("invalid input") : null) || (t.isValid ? null : lr(t));
    this.ts = E(e.ts) ? D.now() : e.ts;
    let a = null, u = null;
    if (!n)
      if (e.old && e.old.ts === this.ts && e.old.zone.equals(t))
        [a, u] = [e.old.c, e.old.o];
      else {
        const o = $e(e.o) && !e.old ? e.o : t.offset(this.ts);
        a = Nr(this.ts, o), n = Number.isNaN(a.year) ? new oe("invalid input") : null, a = n ? null : a, u = n ? null : o;
      }
    this._zone = t, this.loc = e.loc || A.create(), this.invalid = n, this.weekData = null, this.localWeekData = null, this.c = a, this.o = u, this.isLuxonDateTime = !0;
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
    return new F({});
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
    const [e, t] = Pa(arguments), [n, a, u, c, o, h, y] = t;
    return Da({
      year: n,
      month: a,
      day: u,
      hour: c,
      minute: o,
      second: h,
      millisecond: y
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
    const [e, t] = Pa(arguments), [n, a, u, c, o, h, y] = t;
    return e.zone = G.utcInstance, Da({
      year: n,
      month: a,
      day: u,
      hour: c,
      minute: o,
      second: h,
      millisecond: y
    }, e);
  }
  /**
   * Create a DateTime from a JavaScript Date object. Uses the default zone.
   * @param {Date} date - a JavaScript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */
  static fromJSDate(e, t = {}) {
    const n = _C(e) ? e.valueOf() : NaN;
    if (Number.isNaN(n))
      return F.invalid("invalid input");
    const a = ge(t.zone, D.defaultZone);
    return a.isValid ? new F({
      ts: n,
      zone: a,
      loc: A.fromObject(t)
    }) : F.invalid(lr(a));
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
  static fromMillis(e, t = {}) {
    if ($e(e))
      return e < -ka || e > ka ? F.invalid("Timestamp out of range") : new F({
        ts: e,
        zone: ge(t.zone, D.defaultZone),
        loc: A.fromObject(t)
      });
    throw new z(`fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`);
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
  static fromSeconds(e, t = {}) {
    if ($e(e))
      return new F({
        ts: e * 1e3,
        zone: ge(t.zone, D.defaultZone),
        loc: A.fromObject(t)
      });
    throw new z("fromSeconds requires a numerical input");
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
  static fromObject(e, t = {}) {
    e = e || {};
    const n = ge(t.zone, D.defaultZone);
    if (!n.isValid)
      return F.invalid(lr(n));
    const a = A.fromObject(t), u = zr(e, Ma), {
      minDaysInFirstWeek: c,
      startOfWeek: o
    } = wa(u, a), h = D.now(), y = E(t.specificOffset) ? n.offset(h) : t.specificOffset, v = !E(u.ordinal), g = !E(u.year), b = !E(u.month) || !E(u.day), w = g || b, x = u.weekYear || u.weekNumber;
    if ((w || v) && x)
      throw new je("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
    if (b && v)
      throw new je("Can't mix ordinal dates with month/day");
    const U = x || u.weekday && !w;
    let H, Y, Q = Nr(h, y);
    U ? (H = Yk, Y = Hk, Q = Vr(Q, c, o)) : v ? (H = Jk, Y = qk, Q = It(Q)) : (H = Ur, Y = tl);
    let be = !1;
    for (const xe of H) {
      const lt = u[xe];
      E(lt) ? be ? u[xe] = Y[xe] : u[xe] = Q[xe] : be = !0;
    }
    const ke = U ? IC(u, c, o) : v ? OC(u) : Au(u), J = ke || _u(u);
    if (J)
      return F.invalid(J);
    const br = U ? ga(u, c, o) : v ? $a(u) : u, [Er, ut] = Dr(br, y, n), Ee = new F({
      ts: Er,
      zone: n,
      o: ut,
      loc: a
    });
    return u.weekday && w && e.weekday !== Ee.weekday ? F.invalid("mismatched weekday", `you can't specify both a weekday of ${u.weekday} and a date of ${Ee.toISO()}`) : Ee.isValid ? Ee : F.invalid(Ee.invalid);
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
  static fromISO(e, t = {}) {
    const [n, a] = gk(e);
    return Le(n, a, t, "ISO 8601", e);
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
  static fromRFC2822(e, t = {}) {
    const [n, a] = $k(e);
    return Le(n, a, t, "RFC 2822", e);
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
  static fromHTTP(e, t = {}) {
    const [n, a] = wk(e);
    return Le(n, a, t, "HTTP", t);
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
  static fromFormat(e, t, n = {}) {
    if (E(e) || E(t))
      throw new z("fromFormat requires an input string and a format");
    const {
      locale: a = null,
      numberingSystem: u = null
    } = n, c = A.fromOpts({
      locale: a,
      numberingSystem: u,
      defaultToEN: !0
    }), [o, h, y, v] = Gk(c, e, t);
    return v ? F.invalid(v) : Le(o, h, n, `format ${t}`, e, y);
  }
  /**
   * @deprecated use fromFormat instead
   */
  static fromString(e, t, n = {}) {
    return F.fromFormat(e, t, n);
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
  static fromSQL(e, t = {}) {
    const [n, a] = Ok(e);
    return Le(n, a, t, "SQL", e);
  }
  /**
   * Create an invalid DateTime.
   * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent.
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */
  static invalid(e, t = null) {
    if (!e)
      throw new z("need to specify a reason the DateTime is invalid");
    const n = e instanceof oe ? e : new oe(e, t);
    if (D.throwOnInvalid)
      throw new rC(n);
    return new F({
      invalid: n
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
  static parseFormatForOpts(e, t = {}) {
    const n = el(e, A.fromObject(t));
    return n ? n.map((a) => a ? a.val : null).join("") : null;
  }
  /**
   * Produce the the fully expanded format token for the locale
   * Does NOT quote characters, so quoted tokens will not round trip correctly
   * @param fmt
   * @param localeOpts
   * @returns {string}
   */
  static expandFormat(e, t = {}) {
    return Xu(Z.parseFormat(e), A.fromObject(t)).map((a) => a.val).join("");
  }
  static resetCache() {
    cr = void 0, hn.clear();
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
    return this.isValid ? _t(this).weekYear : NaN;
  }
  /**
   * Get the week number of the week year (1-52ish).
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
   * @type {number}
   */
  get weekNumber() {
    return this.isValid ? _t(this).weekNumber : NaN;
  }
  /**
   * Get the day of the week.
   * 1 is Monday and 7 is Sunday
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 11, 31).weekday //=> 4
   * @type {number}
   */
  get weekday() {
    return this.isValid ? _t(this).weekday : NaN;
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
    return this.isValid ? Ct(this).weekday : NaN;
  }
  /**
   * Get the week number of the week year according to the locale. Different locales assign week numbers differently,
   * because the week can start on different days of the week (see localWeekday) and because a different number of days
   * is required for a week to count as the first week of a year.
   * @returns {number}
   */
  get localWeekNumber() {
    return this.isValid ? Ct(this).weekNumber : NaN;
  }
  /**
   * Get the week year according to the locale. Different locales assign week numbers (and therefor week years)
   * differently, see localWeekNumber.
   * @returns {number}
   */
  get localWeekYear() {
    return this.isValid ? Ct(this).weekYear : NaN;
  }
  /**
   * Get the ordinal (meaning the day of the year)
   * @example DateTime.local(2017, 5, 25).ordinal //=> 145
   * @type {number|DateTime}
   */
  get ordinal() {
    return this.isValid ? It(this.c).ordinal : NaN;
  }
  /**
   * Get the human readable short month name, such as 'Oct'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
   * @type {string}
   */
  get monthShort() {
    return this.isValid ? ur.months("short", {
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
    return this.isValid ? ur.months("long", {
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
    return this.isValid ? ur.weekdays("short", {
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
    return this.isValid ? ur.weekdays("long", {
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
    const e = 864e5, t = 6e4, n = nt(this.c), a = this.zone.offset(n - e), u = this.zone.offset(n + e), c = this.zone.offset(n - a * t), o = this.zone.offset(n - u * t);
    if (c === o)
      return [this];
    const h = n - c * t, y = n - o * t, v = Nr(h, c), g = Nr(y, o);
    return v.hour === g.hour && v.minute === g.minute && v.second === g.second && v.millisecond === g.millisecond ? [Ie(this, {
      ts: h
    }), Ie(this, {
      ts: y
    })] : [this];
  }
  /**
   * Returns true if this DateTime is in a leap year, false otherwise
   * @example DateTime.local(2016).isInLeapYear //=> true
   * @example DateTime.local(2013).isInLeapYear //=> false
   * @type {boolean}
   */
  get isInLeapYear() {
    return gr(this.year);
  }
  /**
   * Returns the number of days in this DateTime's month
   * @example DateTime.local(2016, 2).daysInMonth //=> 29
   * @example DateTime.local(2016, 3).daysInMonth //=> 31
   * @type {number}
   */
  get daysInMonth() {
    return Wr(this.year, this.month);
  }
  /**
   * Returns the number of days in this DateTime's year
   * @example DateTime.local(2016).daysInYear //=> 366
   * @example DateTime.local(2013).daysInYear //=> 365
   * @type {number}
   */
  get daysInYear() {
    return this.isValid ? Ve(this.year) : NaN;
  }
  /**
   * Returns the number of weeks in this DateTime's year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2004).weeksInWeekYear //=> 53
   * @example DateTime.local(2013).weeksInWeekYear //=> 52
   * @type {number}
   */
  get weeksInWeekYear() {
    return this.isValid ? mr(this.weekYear) : NaN;
  }
  /**
   * Returns the number of weeks in this DateTime's local week year
   * @example DateTime.local(2020, 6, {locale: 'en-US'}).weeksInLocalWeekYear //=> 52
   * @example DateTime.local(2020, 6, {locale: 'de-DE'}).weeksInLocalWeekYear //=> 53
   * @type {number}
   */
  get weeksInLocalWeekYear() {
    return this.isValid ? mr(this.localWeekYear, this.loc.getMinDaysInFirstWeek(), this.loc.getStartOfWeek()) : NaN;
  }
  /**
   * Returns the resolved Intl options for this DateTime.
   * This is useful in understanding the behavior of formatting methods
   * @param {Object} opts - the same options as toLocaleString
   * @return {Object}
   */
  resolvedLocaleOptions(e = {}) {
    const {
      locale: t,
      numberingSystem: n,
      calendar: a
    } = Z.create(this.loc.clone(e), e).resolvedOptions(this);
    return {
      locale: t,
      numberingSystem: n,
      outputCalendar: a
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
  toUTC(e = 0, t = {}) {
    return this.setZone(G.instance(e), t);
  }
  /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */
  toLocal() {
    return this.setZone(D.defaultZone);
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
    keepLocalTime: t = !1,
    keepCalendarTime: n = !1
  } = {}) {
    if (e = ge(e, D.defaultZone), e.equals(this.zone))
      return this;
    if (e.isValid) {
      let a = this.ts;
      if (t || n) {
        const u = e.offset(this.ts), c = this.toObject();
        [a] = Dr(c, u, e);
      }
      return Ie(this, {
        ts: a,
        zone: e
      });
    } else
      return F.invalid(lr(e));
  }
  /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */
  reconfigure({
    locale: e,
    numberingSystem: t,
    outputCalendar: n
  } = {}) {
    const a = this.loc.clone({
      locale: e,
      numberingSystem: t,
      outputCalendar: n
    });
    return Ie(this, {
      loc: a
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
    const t = zr(e, Ma), {
      minDaysInFirstWeek: n,
      startOfWeek: a
    } = wa(t, this.loc), u = !E(t.weekYear) || !E(t.weekNumber) || !E(t.weekday), c = !E(t.ordinal), o = !E(t.year), h = !E(t.month) || !E(t.day), y = o || h, v = t.weekYear || t.weekNumber;
    if ((y || c) && v)
      throw new je("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
    if (h && c)
      throw new je("Can't mix ordinal dates with month/day");
    let g;
    u ? g = ga({
      ...Vr(this.c, n, a),
      ...t
    }, n, a) : E(t.ordinal) ? (g = {
      ...this.toObject(),
      ...t
    }, E(t.day) && (g.day = Math.min(Wr(g.year, g.month), g.day))) : g = $a({
      ...It(this.c),
      ...t
    });
    const [b, w] = Dr(g, this.o, this.zone);
    return Ie(this, {
      ts: b,
      o: w
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
    const t = S.fromDurationLike(e);
    return Ie(this, Na(this, t));
  }
  /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link DateTime#plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
   */
  minus(e) {
    if (!this.isValid) return this;
    const t = S.fromDurationLike(e).negate();
    return Ie(this, Na(this, t));
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
    useLocaleWeeks: t = !1
  } = {}) {
    if (!this.isValid) return this;
    const n = {}, a = S.normalizeUnit(e);
    switch (a) {
      case "years":
        n.month = 1;
      case "quarters":
      case "months":
        n.day = 1;
      case "weeks":
      case "days":
        n.hour = 0;
      case "hours":
        n.minute = 0;
      case "minutes":
        n.second = 0;
      case "seconds":
        n.millisecond = 0;
        break;
    }
    if (a === "weeks")
      if (t) {
        const u = this.loc.getStartOfWeek(), {
          weekday: c
        } = this;
        c < u && (n.weekNumber = this.weekNumber - 1), n.weekday = u;
      } else
        n.weekday = 1;
    if (a === "quarters") {
      const u = Math.ceil(this.month / 3);
      n.month = (u - 1) * 3 + 1;
    }
    return this.set(n);
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
  endOf(e, t) {
    return this.isValid ? this.plus({
      [e]: 1
    }).startOf(e, t).minus(1) : this;
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
  toFormat(e, t = {}) {
    return this.isValid ? Z.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(this, e) : At;
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
  toLocaleString(e = jr, t = {}) {
    return this.isValid ? Z.create(this.loc.clone(t), e).formatDateTime(this) : At;
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
    return this.isValid ? Z.create(this.loc.clone(e), e).formatDateTimeParts(this) : [];
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
    suppressSeconds: t = !1,
    suppressMilliseconds: n = !1,
    includeOffset: a = !0,
    extendedZone: u = !1,
    precision: c = "milliseconds"
  } = {}) {
    if (!this.isValid)
      return null;
    c = Pr(c);
    const o = e === "extended";
    let h = kt(this, o, c);
    return Ur.indexOf(c) >= 3 && (h += "T"), h += Fa(this, o, t, n, a, u, c), h;
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
    precision: t = "day"
  } = {}) {
    return this.isValid ? kt(this, e === "extended", Pr(t)) : null;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */
  toISOWeekDate() {
    return Fr(this, "kkkk-'W'WW-c");
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
    suppressSeconds: t = !1,
    includeOffset: n = !0,
    includePrefix: a = !1,
    extendedZone: u = !1,
    format: c = "extended",
    precision: o = "milliseconds"
  } = {}) {
    return this.isValid ? (o = Pr(o), (a && Ur.indexOf(o) >= 3 ? "T" : "") + Fa(this, c === "extended", t, e, n, u, o)) : null;
  }
  /**
   * Returns an RFC 2822-compatible string representation of this DateTime
   * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
   * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
   * @return {string}
   */
  toRFC2822() {
    return Fr(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
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
    return Fr(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string|null}
   */
  toSQLDate() {
    return this.isValid ? kt(this, !0) : null;
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
    includeZone: t = !1,
    includeOffsetSpace: n = !0
  } = {}) {
    let a = "HH:mm:ss.SSS";
    return (t || e) && (n && (a += " "), t ? a += "z" : e && (a += "ZZ")), Fr(this, a, !0);
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
    return this.isValid ? this.toISO() : At;
  }
  /**
   * Returns a string representation of this DateTime appropriate for the REPL.
   * @return {string}
   */
  [Symbol.for("nodejs.util.inspect.custom")]() {
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
    const t = {
      ...this.c
    };
    return e.includeConfig && (t.outputCalendar = this.outputCalendar, t.numberingSystem = this.loc.numberingSystem, t.locale = this.loc.locale), t;
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
  diff(e, t = "milliseconds", n = {}) {
    if (!this.isValid || !e.isValid)
      return S.invalid("created by diffing an invalid DateTime");
    const a = {
      locale: this.locale,
      numberingSystem: this.numberingSystem,
      ...n
    }, u = CC(t).map(S.normalizeUnit), c = e.valueOf() > this.valueOf(), o = c ? this : e, h = c ? e : this, y = Fk(o, h, u, a);
    return c ? y.negate() : y;
  }
  /**
   * Return the difference between this DateTime and right now.
   * See {@link DateTime#diff}
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  diffNow(e = "milliseconds", t = {}) {
    return this.diff(F.now(), e, t);
  }
  /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval|DateTime}
   */
  until(e) {
    return this.isValid ? M.fromDateTimes(this, e) : this;
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
  hasSame(e, t, n) {
    if (!this.isValid) return !1;
    const a = e.valueOf(), u = this.setZone(e.zone, {
      keepLocalTime: !0
    });
    return u.startOf(t, n) <= a && a <= u.endOf(t, n);
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
    const t = e.base || F.fromObject({}, {
      zone: this.zone
    }), n = e.padding ? this < t ? -e.padding : e.padding : 0;
    let a = ["years", "months", "days", "hours", "minutes", "seconds"], u = e.unit;
    return Array.isArray(e.unit) && (a = e.unit, u = void 0), Ua(t, this.plus(n), {
      ...e,
      numeric: "always",
      units: a,
      unit: u
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
    return this.isValid ? Ua(e.base || F.fromObject({}, {
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
    if (!e.every(F.isDateTime))
      throw new z("min requires all arguments be DateTimes");
    return ba(e, (t) => t.valueOf(), Math.min);
  }
  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */
  static max(...e) {
    if (!e.every(F.isDateTime))
      throw new z("max requires all arguments be DateTimes");
    return ba(e, (t) => t.valueOf(), Math.max);
  }
  // MISC
  /**
   * Explain how a string would be parsed by fromFormat()
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see description)
   * @param {Object} options - options taken by fromFormat()
   * @return {Object}
   */
  static fromFormatExplain(e, t, n = {}) {
    const {
      locale: a = null,
      numberingSystem: u = null
    } = n, c = A.fromOpts({
      locale: a,
      numberingSystem: u,
      defaultToEN: !0
    });
    return Qu(c, e, t);
  }
  /**
   * @deprecated use fromFormatExplain instead
   */
  static fromStringExplain(e, t, n = {}) {
    return F.fromFormatExplain(e, t, n);
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
  static buildFormatParser(e, t = {}) {
    const {
      locale: n = null,
      numberingSystem: a = null
    } = t, u = A.fromOpts({
      locale: n,
      numberingSystem: a,
      defaultToEN: !0
    });
    return new Ku(u, e);
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
  static fromFormatParser(e, t, n = {}) {
    if (E(e) || E(t))
      throw new z("fromFormatParser requires an input string and a format parser");
    const {
      locale: a = null,
      numberingSystem: u = null
    } = n, c = A.fromOpts({
      locale: a,
      numberingSystem: u,
      defaultToEN: !0
    });
    if (!c.equals(t.locale))
      throw new z(`fromFormatParser called with a locale of ${c}, but the format parser was created for ${t.locale}`);
    const {
      result: o,
      zone: h,
      specificOffset: y,
      invalidReason: v
    } = t.explainFromTokens(e);
    return v ? F.invalid(v) : Le(o, h, n, `format ${t.format}`, e, y);
  }
  // FORMAT PRESETS
  /**
   * {@link DateTime#toLocaleString} format like 10/14/1983
   * @type {Object}
   */
  static get DATE_SHORT() {
    return jr;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED() {
    return tu;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED_WITH_WEEKDAY() {
    return iC;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983'
   * @type {Object}
   */
  static get DATE_FULL() {
    return nu;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Tuesday, October 14, 1983'
   * @type {Object}
   */
  static get DATE_HUGE() {
    return iu;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_SIMPLE() {
    return au;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SECONDS() {
    return su;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SHORT_OFFSET() {
    return ou;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_LONG_OFFSET() {
    return uu;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_SIMPLE() {
    return lu;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SECONDS() {
    return cu;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 EDT', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SHORT_OFFSET() {
    return fu;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_LONG_OFFSET() {
    return hu;
  }
  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT() {
    return du;
  }
  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT_WITH_SECONDS() {
    return mu;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED() {
    return yu;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_SECONDS() {
    return pu;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_WEEKDAY() {
    return aC;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL() {
    return vu;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL_WITH_SECONDS() {
    return gu;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE() {
    return $u;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE_WITH_SECONDS() {
    return wu;
  }
};
function sr(r) {
  if (R.isDateTime(r))
    return r;
  if (r && r.valueOf && $e(r.valueOf()))
    return R.fromJSDate(r);
  if (r && typeof r == "object")
    return R.fromObject(r);
  throw new z(`Unknown datetime argument: ${r}, of type ${typeof r}`);
}
const Kk = "3.7.2";
K.DateTime = R;
K.Duration = S;
K.FixedOffsetZone = G;
K.IANAZone = he;
K.Info = ur;
K.Interval = M;
K.InvalidZone = xu;
K.Settings = D;
K.SystemZone = vr;
K.VERSION = Kk;
K.Zone = Ke;
const { DateTime: La } = K, { IncorrectUsageError: Qk } = Bo, eN = {
  invalidInterval: 'Invalid interval specified. Only "month" value is accepted.'
}, rN = ["month"], tN = (r, e) => {
  if (e === "month") {
    const t = La.fromISO(r, { zone: "UTC" }), n = La.now().setZone("UTC"), a = Math.floor(n.diff(t, "months").months);
    return t.plus({ months: a }).toISO();
  }
  throw new Qk({
    message: eN.invalidInterval
  });
};
var nN = {
  lastPeriodStart: tN,
  SUPPORTED_INTERVALS: rN
};
const st = lI, nl = eC, { lastPeriodStart: iN, SUPPORTED_INTERVALS: Ra } = nN, il = /{{([\s\S]+?)}}/g;
class ot {
  /**
   *
   * @param {Object} options
   * @param {String} options.name - name of the limit
   * @param {String} options.error - error message to use when limit is reached
   * @param {String} options.helpLink - URL to the resource explaining how the limit works
   * @param {Object} [options.db] - instance of knex db connection that currentCountQuery can use to run state check through
   * @param {Object} options.errors - instance of errors compatible with GhostError errors (@tryghost/errors)
   */
  constructor({ name: e, error: t, helpLink: n, db: a, errors: u }) {
    this.name = e, this.error = t, this.helpLink = n, this.db = a, this.errors = u;
  }
  generateError() {
    let e = {
      errorDetails: {
        name: this.name
      }
    };
    return this.helpLink && (e.help = this.helpLink), e;
  }
}
let aN = class extends ot {
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
  constructor({ name: e, config: t, helpLink: n, db: a, errors: u }) {
    if (super({ name: e, error: t.error || "", helpLink: n, db: a, errors: u }), t.max === void 0)
      throw new u.IncorrectUsageError({ message: "Attempted to setup a max limit without a limit" });
    if (!t.currentCountQuery)
      throw new u.IncorrectUsageError({ message: "Attempted to setup a max limit without a current count query" });
    this.currentCountQueryFn = t.currentCountQuery, this.max = t.max, this.formatter = t.formatter, this.fallbackMessage = `This action would exceed the ${st(this.name)} limit on your current plan.`;
  }
  /**
   *
   * @param {Number} count - current count that acceded the limit
   * @returns {Object} instance of HostLimitError
   */
  generateError(e) {
    let t = super.generateError();
    if (t.message = this.fallbackMessage, this.error) {
      const n = this.formatter || Intl.NumberFormat().format;
      try {
        t.message = nl(this.error, { interpolate: il })(
          {
            max: n(this.max),
            count: n(e),
            name: this.name
          }
        );
      } catch {
        t.message = this.fallbackMessage;
      }
    }
    return t.errorDetails.limit = this.max, t.errorDetails.total = e, new this.errors.HostLimitError(t);
  }
  /**
   * @param {Object} [options]
   * @param {Object} [options.transacting] Transaction to run the count query on
   * @returns
   */
  async currentCountQuery(e = {}) {
    var t;
    return await this.currentCountQueryFn(e.transacting ?? ((t = this.db) == null ? void 0 : t.knex));
  }
  /**
   * Throws a HostLimitError if the configured or passed max limit is acceded by currentCountQuery
   *
   * @param {Object} options
   * @param {Number} [options.max] - overrides configured default max value to perform checks against
   * @param {Number} [options.addedCount] - number of items to add to the currentCount during the check
   * @param {Object} [options.transacting] Transaction to run the count query on
   */
  async errorIfWouldGoOverLimit(e = {}) {
    const { max: t, addedCount: n = 1 } = e;
    let a = await this.currentCountQuery(e);
    if (a + n > (t || this.max))
      throw this.generateError(a);
  }
  /**
   * Throws a HostLimitError if the configured or passed max limit is acceded by currentCountQuery
   *
   * @param {Object} options
   * @param {Number} [options.max] - overrides configured default max value to perform checks against
   * @param {Number} [options.currentCount] - overrides currentCountQuery to perform checks against
   * @param {Object} [options.transacting] Transaction to run the count query on
   */
  async errorIfIsOverLimit(e = {}) {
    const t = e.currentCount || await this.currentCountQuery(e);
    if (t > (e.max || this.max))
      throw this.generateError(t);
  }
}, sN = class extends ot {
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
  constructor({ name: e, config: t, helpLink: n, db: a, errors: u }) {
    if (super({ name: e, error: t.error || "", helpLink: n, db: a, errors: u }), t.maxPeriodic === void 0)
      throw new u.IncorrectUsageError({ message: "Attempted to setup a periodic max limit without a limit" });
    if (!t.currentCountQuery)
      throw new u.IncorrectUsageError({ message: "Attempted to setup a periodic max limit without a current count query" });
    if (!t.interval)
      throw new u.IncorrectUsageError({ message: "Attempted to setup a periodic max limit without an interval" });
    if (!Ra.includes(t.interval))
      throw new u.IncorrectUsageError({ message: `Attempted to setup a periodic max limit without unsupported interval. Please specify one of: ${Ra}` });
    if (!t.startDate)
      throw new u.IncorrectUsageError({ message: "Attempted to setup a periodic max limit without a start date" });
    this.currentCountQueryFn = t.currentCountQuery, this.maxPeriodic = t.maxPeriodic, this.interval = t.interval, this.startDate = t.startDate, this.fallbackMessage = `This action would exceed the ${st(this.name)} limit on your current plan.`;
  }
  generateError(e) {
    let t = super.generateError();
    if (t.message = this.fallbackMessage, this.error)
      try {
        t.message = nl(this.error, { interpolate: il })(
          {
            max: Intl.NumberFormat().format(this.maxPeriodic),
            count: Intl.NumberFormat().format(e),
            name: this.name
          }
        );
      } catch {
        t.message = this.fallbackMessage;
      }
    return t.errorDetails.limit = this.maxPeriodic, t.errorDetails.total = e, new this.errors.HostLimitError(t);
  }
  /**
   * @param {Object} [options]
   * @param {Object} [options.transacting] Transaction to run the count query on
   * @returns
   */
  async currentCountQuery(e = {}) {
    const t = iN(this.startDate, this.interval);
    return await this.currentCountQueryFn(e.transacting ? e.transacting : this.db ? this.db.knex : void 0, t);
  }
  /**
   * Throws a HostLimitError if the configured or passed max limit is acceded by currentCountQuery
   *
   * @param {Object} options
   * @param {Number} [options.max] - overrides configured default maxPeriodic value to perform checks against
   * @param {Number} [options.addedCount] - number of items to add to the currentCount during the check
   * @param {Object} [options.transacting] Transaction to run the count query on
   */
  async errorIfWouldGoOverLimit(e = {}) {
    const { max: t, addedCount: n = 1 } = e;
    let a = await this.currentCountQuery(e);
    if (a + n > (t || this.maxPeriodic))
      throw this.generateError(a);
  }
  /**
   * Throws a HostLimitError if the configured or passed max limit is acceded by currentCountQuery
   *
   * @param {Object} options
   * @param {Number} [options.max] - overrides configured default maxPeriodic value to perform checks against
   * @param {Object} [options.transacting] Transaction to run the count query on
   */
  async errorIfIsOverLimit(e = {}) {
    const { max: t } = e;
    let n = await this.currentCountQuery(e);
    if (n > (t || this.maxPeriodic))
      throw this.generateError(n);
  }
}, oN = class extends ot {
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
  constructor({ name: e, config: t, helpLink: n, db: a, errors: u }) {
    super({ name: e, error: t.error || "", helpLink: n, db: a, errors: u });
    const c = st(e.replace(/^limit/, ""));
    this.disabled = t.disabled, this.fallbackMessage = `Your plan does not support ${c}. Please upgrade to enable ${c}.`;
  }
  generateError() {
    let e = super.generateError();
    return this.error ? e.message = this.error : e.message = this.fallbackMessage, new this.errors.HostLimitError(e);
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
}, uN = class extends ot {
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
  constructor({ name: e, config: t, helpLink: n, errors: a }) {
    if (super({ name: e, error: t.error || "", helpLink: n, errors: a }), !t.allowlist || !t.allowlist.length)
      throw new this.errors.IncorrectUsageError({ message: "Attempted to setup an allowlist limit without an allowlist" });
    this.allowlist = t.allowlist, this.fallbackMessage = `This action would exceed the ${st(this.name)} limit on your current plan.`;
  }
  generateError() {
    let e = super.generateError();
    return this.error ? e.message = this.error : e.message = this.fallbackMessage, new this.errors.HostLimitError(e);
  }
  async errorIfWouldGoOverLimit(e) {
    if (!e || !e.value)
      throw new this.errors.IncorrectUsageError({ message: "Attempted to check an allowlist limit without a value" });
    if (!this.allowlist.includes(e.value))
      throw this.generateError();
  }
  async errorIfIsOverLimit(e) {
    if (!e || !e.value)
      throw new this.errors.IncorrectUsageError({ message: "Attempted to check an allowlist limit without a value" });
    if (!this.allowlist.includes(e.value))
      throw this.generateError();
  }
};
var lN = {
  MaxLimit: aN,
  MaxPeriodicLimit: sN,
  FlagLimit: oN,
  AllowlistLimit: uN
}, cN = {
  members: {
    currentCountQuery: async (r) => (await r("members").count("id", { as: "count" }).first()).count
  },
  newsletters: {
    currentCountQuery: async (r) => (await r("newsletters").count("id", { as: "count" }).where("status", "=", "active").first()).count
  },
  emails: {
    currentCountQuery: async (r, e) => (await r("emails").sum("email_count", { as: "count" }).where("created_at", ">=", e).first()).count
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
  limitSocialWeb: {}
};
const Nt = ih, Ft = yy, { IncorrectUsageError: Mt } = Bo, { MaxLimit: fN, MaxPeriodicLimit: hN, FlagLimit: dN, AllowlistLimit: mN } = lN, Ba = cN, ja = {
  missingErrorsConfig: "Config Missing: 'errors' is required.",
  noSubscriptionParameter: "Attempted to setup a periodic max limit without a subscription"
};
class yN {
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
  loadLimits({ limits: e = {}, subscription: t, helpLink: n, db: a, errors: u }) {
    if (!u)
      throw new Mt({
        message: ja.missingErrorsConfig
      });
    this.errors = u, this.limits = {}, Object.keys(e).forEach((c) => {
      if (c = Nt(c), Ba[c]) {
        let o = Object.assign({}, Ba[c], e[c]);
        if (Ft(o, "allowlist"))
          this.limits[c] = new mN({ name: c, config: o, helpLink: n, errors: u });
        else if (Ft(o, "max"))
          this.limits[c] = new fN({ name: c, config: o, helpLink: n, db: a, errors: u });
        else if (Ft(o, "maxPeriodic")) {
          if (t === void 0)
            throw new Mt({
              message: ja.noSubscriptionParameter
            });
          const h = Object.assign({}, o, t);
          this.limits[c] = new hN({ name: c, config: h, helpLink: n, db: a, errors: u });
        } else
          this.limits[c] = new dN({ name: c, config: o, helpLink: n, errors: u });
      }
    });
  }
  isLimited(e) {
    return !!this.limits[Nt(e)];
  }
  /**
  * Check if a limit is disabled, applicable only to limits that support the disabled flag (e.g. FlagLimit)
  * @returns {boolean|undefined} undefined if limit is not configured
  * @throws {IncorrectUsageError} if limit does not support disabled flag
  */
  isDisabled(e) {
    if (!this.isLimited(e))
      return;
    const t = this.limits[Nt(e)];
    if (typeof t.isDisabled != "function")
      throw new Mt({
        message: `Limit ${e} does not support .isDisabled()`
      });
    return t.isDisabled();
  }
  /**
   *
   * @param {String} limitName - name of the configured limit
   * @param {Object} [options] - limit parameters
   * @param {Object} [options.transacting] Transaction to run the count query on (if required for the chosen limit)
   * @returns
   */
  async checkIsOverLimit(e, t = {}) {
    if (this.isLimited(e))
      try {
        return await this.limits[e].errorIfIsOverLimit(t), !1;
      } catch (n) {
        if (n instanceof this.errors.HostLimitError)
          return !0;
        throw n;
      }
  }
  /**
   *
   * @param {String} limitName - name of the configured limit
   * @param {Object} [options] - limit parameters
   * @param {Object} [options.transacting] Transaction to run the count query on (if required for the chosen limit)
   * @returns
   */
  async checkWouldGoOverLimit(e, t = {}) {
    if (this.isLimited(e))
      try {
        return await this.limits[e].errorIfWouldGoOverLimit(t), !1;
      } catch (n) {
        if (n instanceof this.errors.HostLimitError)
          return !0;
        throw n;
      }
  }
  /**
   *
   * @param {String} limitName - name of the configured limit
   * @param {Object} [options] - limit parameters
   * @param {Object} [options.transacting] Transaction to run the count query on (if required for the chosen limit)
   * @returns
   */
  async errorIfIsOverLimit(e, t = {}) {
    this.isLimited(e) && await this.limits[e].errorIfIsOverLimit(t);
  }
  /**
   *
   * @param {String} limitName - name of the configured limit
   * @param {Object} [options] - limit parameters
   * @param {Object} [options.transacting] Transaction to run the count query on (if required for the chosen limit)
   * @returns
   */
  async errorIfWouldGoOverLimit(e, t = {}) {
    this.isLimited(e) && await this.limits[e].errorIfWouldGoOverLimit(t);
  }
  /**
   * Checks if any of the configured limits acceded
   *
   * @param {Object} [options] - limit parameters
   * @param {Object} [options.transacting] Transaction to run the count queries on (if required for the chosen limit)
   * @returns {Promise<boolean>}
   */
  async checkIfAnyOverLimit(e = {}) {
    for (const t in this.limits)
      if (await this.checkIsOverLimit(t, e))
        return !0;
    return !1;
  }
}
var pN = yN, al = pN;
const vN = /* @__PURE__ */ Va(al), SN = /* @__PURE__ */ bl({
  __proto__: null,
  default: vN
}, [al]);
export {
  SN as i
};
//# sourceMappingURL=index-qmwDbZNb.mjs.map
