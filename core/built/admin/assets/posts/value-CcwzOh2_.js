import { h as J } from "./check-fsC5BvGC.js";
const K = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], me = J("arrow-left", K);
function E(e, r, t) {
  e.prototype = r.prototype = t, t.constructor = e;
}
function V(e, r) {
  var t = Object.create(e.prototype);
  for (var n in r) t[n] = r[n];
  return t;
}
function y() {
}
var b = 0.7, N = 1 / b, g = "\\s*([+-]?\\d+)\\s*", p = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", l = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Q = /^#([0-9a-f]{3,8})$/, U = new RegExp(`^rgb\\(${g},${g},${g}\\)$`), W = new RegExp(`^rgb\\(${l},${l},${l}\\)$`), X = new RegExp(`^rgba\\(${g},${g},${g},${p}\\)$`), Y = new RegExp(`^rgba\\(${l},${l},${l},${p}\\)$`), Z = new RegExp(`^hsl\\(${p},${l},${l}\\)$`), ee = new RegExp(`^hsla\\(${p},${l},${l},${p}\\)$`), j = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
E(y, m, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: P,
  // Deprecated! Use color.formatHex.
  formatHex: P,
  formatHex8: re,
  formatHsl: te,
  formatRgb: S,
  toString: S
});
function P() {
  return this.rgb().formatHex();
}
function re() {
  return this.rgb().formatHex8();
}
function te() {
  return G(this).formatHsl();
}
function S() {
  return this.rgb().formatRgb();
}
function m(e) {
  var r, t;
  return e = (e + "").trim().toLowerCase(), (r = Q.exec(e)) ? (t = r[1].length, r = parseInt(r[1], 16), t === 6 ? C(r) : t === 3 ? new x(r >> 8 & 15 | r >> 4 & 240, r >> 4 & 15 | r & 240, (r & 15) << 4 | r & 15, 1) : t === 8 ? w(r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, (r & 255) / 255) : t === 4 ? w(r >> 12 & 15 | r >> 8 & 240, r >> 8 & 15 | r >> 4 & 240, r >> 4 & 15 | r & 240, ((r & 15) << 4 | r & 15) / 255) : null) : (r = U.exec(e)) ? new x(r[1], r[2], r[3], 1) : (r = W.exec(e)) ? new x(r[1] * 255 / 100, r[2] * 255 / 100, r[3] * 255 / 100, 1) : (r = X.exec(e)) ? w(r[1], r[2], r[3], r[4]) : (r = Y.exec(e)) ? w(r[1] * 255 / 100, r[2] * 255 / 100, r[3] * 255 / 100, r[4]) : (r = Z.exec(e)) ? D(r[1], r[2] / 100, r[3] / 100, 1) : (r = ee.exec(e)) ? D(r[1], r[2] / 100, r[3] / 100, r[4]) : j.hasOwnProperty(e) ? C(j[e]) : e === "transparent" ? new x(NaN, NaN, NaN, 0) : null;
}
function C(e) {
  return new x(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function w(e, r, t, n) {
  return n <= 0 && (e = r = t = NaN), new x(e, r, t, n);
}
function ne(e) {
  return e instanceof y || (e = m(e)), e ? (e = e.rgb(), new x(e.r, e.g, e.b, e.opacity)) : new x();
}
function R(e, r, t, n) {
  return arguments.length === 1 ? ne(e) : new x(e, r, t, n ?? 1);
}
function x(e, r, t, n) {
  this.r = +e, this.g = +r, this.b = +t, this.opacity = +n;
}
E(x, R, V(y, {
  brighter(e) {
    return e = e == null ? N : Math.pow(N, e), new x(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? b : Math.pow(b, e), new x(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new x(d(this.r), d(this.g), d(this.b), v(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: O,
  // Deprecated! Use color.formatHex.
  formatHex: O,
  formatHex8: fe,
  formatRgb: z,
  toString: z
}));
function O() {
  return `#${h(this.r)}${h(this.g)}${h(this.b)}`;
}
function fe() {
  return `#${h(this.r)}${h(this.g)}${h(this.b)}${h((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function z() {
  const e = v(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${d(this.r)}, ${d(this.g)}, ${d(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function v(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function d(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function h(e) {
  return e = d(e), (e < 16 ? "0" : "") + e.toString(16);
}
function D(e, r, t, n) {
  return n <= 0 ? e = r = t = NaN : t <= 0 || t >= 1 ? e = r = NaN : r <= 0 && (e = NaN), new c(e, r, t, n);
}
function G(e) {
  if (e instanceof c) return new c(e.h, e.s, e.l, e.opacity);
  if (e instanceof y || (e = m(e)), !e) return new c();
  if (e instanceof c) return e;
  e = e.rgb();
  var r = e.r / 255, t = e.g / 255, n = e.b / 255, f = Math.min(r, t, n), a = Math.max(r, t, n), i = NaN, o = a - f, s = (a + f) / 2;
  return o ? (r === a ? i = (t - n) / o + (t < n) * 6 : t === a ? i = (n - r) / o + 2 : i = (r - t) / o + 4, o /= s < 0.5 ? a + f : 2 - a - f, i *= 60) : o = s > 0 && s < 1 ? 0 : i, new c(i, o, s, e.opacity);
}
function ie(e, r, t, n) {
  return arguments.length === 1 ? G(e) : new c(e, r, t, n ?? 1);
}
function c(e, r, t, n) {
  this.h = +e, this.s = +r, this.l = +t, this.opacity = +n;
}
E(c, ie, V(y, {
  brighter(e) {
    return e = e == null ? N : Math.pow(N, e), new c(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? b : Math.pow(b, e), new c(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, r = isNaN(e) || isNaN(this.s) ? 0 : this.s, t = this.l, n = t + (t < 0.5 ? t : 1 - t) * r, f = 2 * t - n;
    return new x(
      H(e >= 240 ? e - 240 : e + 120, f, n),
      H(e, f, n),
      H(e < 120 ? e + 240 : e - 120, f, n),
      this.opacity
    );
  },
  clamp() {
    return new c(L(this.h), $(this.s), $(this.l), v(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = v(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${L(this.h)}, ${$(this.s) * 100}%, ${$(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function L(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function $(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function H(e, r, t) {
  return (e < 60 ? r + (t - r) * e / 60 : e < 180 ? t : e < 240 ? r + (t - r) * (240 - e) / 60 : r) * 255;
}
const _ = (e) => () => e;
function ae(e, r) {
  return function(t) {
    return e + t * r;
  };
}
function oe(e, r, t) {
  return e = Math.pow(e, t), r = Math.pow(r, t) - e, t = 1 / t, function(n) {
    return Math.pow(e + n * r, t);
  };
}
function xe(e) {
  return (e = +e) == 1 ? T : function(r, t) {
    return t - r ? oe(r, t, e) : _(isNaN(r) ? t : r);
  };
}
function T(e, r) {
  var t = r - e;
  return t ? ae(e, t) : _(isNaN(e) ? r : e);
}
const B = (function e(r) {
  var t = xe(r);
  function n(f, a) {
    var i = t((f = R(f)).r, (a = R(a)).r), o = t(f.g, a.g), s = t(f.b, a.b), k = T(f.opacity, a.opacity);
    return function(u) {
      return f.r = i(u), f.g = o(u), f.b = s(u), f.opacity = k(u), f + "";
    };
  }
  return n.gamma = e, n;
})(1);
function se(e, r) {
  r || (r = []);
  var t = e ? Math.min(r.length, e.length) : 0, n = r.slice(), f;
  return function(a) {
    for (f = 0; f < t; ++f) n[f] = e[f] * (1 - a) + r[f] * a;
    return n;
  };
}
function ce(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function le(e, r) {
  var t = r ? r.length : 0, n = e ? Math.min(t, e.length) : 0, f = new Array(n), a = new Array(t), i;
  for (i = 0; i < n; ++i) f[i] = F(e[i], r[i]);
  for (; i < t; ++i) a[i] = r[i];
  return function(o) {
    for (i = 0; i < n; ++i) a[i] = f[i](o);
    return a;
  };
}
function ue(e, r) {
  var t = /* @__PURE__ */ new Date();
  return e = +e, r = +r, function(n) {
    return t.setTime(e * (1 - n) + r * n), t;
  };
}
function A(e, r) {
  return e = +e, r = +r, function(t) {
    return e * (1 - t) + r * t;
  };
}
function he(e, r) {
  var t = {}, n = {}, f;
  (e === null || typeof e != "object") && (e = {}), (r === null || typeof r != "object") && (r = {});
  for (f in r)
    f in e ? t[f] = F(e[f], r[f]) : n[f] = r[f];
  return function(a) {
    for (f in t) n[f] = t[f](a);
    return n;
  };
}
var q = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, M = new RegExp(q.source, "g");
function de(e) {
  return function() {
    return e;
  };
}
function ge(e) {
  return function(r) {
    return e(r) + "";
  };
}
function be(e, r) {
  var t = q.lastIndex = M.lastIndex = 0, n, f, a, i = -1, o = [], s = [];
  for (e = e + "", r = r + ""; (n = q.exec(e)) && (f = M.exec(r)); )
    (a = f.index) > t && (a = r.slice(t, a), o[i] ? o[i] += a : o[++i] = a), (n = n[0]) === (f = f[0]) ? o[i] ? o[i] += f : o[++i] = f : (o[++i] = null, s.push({ i, x: A(n, f) })), t = M.lastIndex;
  return t < r.length && (a = r.slice(t), o[i] ? o[i] += a : o[++i] = a), o.length < 2 ? s[0] ? ge(s[0].x) : de(r) : (r = s.length, function(k) {
    for (var u = 0, I; u < r; ++u) o[(I = s[u]).i] = I.x(k);
    return o.join("");
  });
}
function F(e, r) {
  var t = typeof r, n;
  return r == null || t === "boolean" ? _(r) : (t === "number" ? A : t === "string" ? (n = m(r)) ? (r = n, B) : be : r instanceof m ? B : r instanceof Date ? ue : ce(r) ? se : Array.isArray(r) ? le : typeof r.valueOf != "function" && typeof r.toString != "function" || isNaN(r) ? he : A)(e, r);
}
export {
  me as A,
  A as a,
  B as b,
  m as c,
  be as d,
  F as i
};
//# sourceMappingURL=value-CcwzOh2_.js.map
