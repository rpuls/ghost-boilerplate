import { L as q, R as N, z as gt, P as ze, b as We, j as a, u as re, d as Ue, e as Re, J as vt, o as He, m as L, h as T, k as z, c as Vt, A as Gt, M as Yt, O as $, g as rt } from "./index-LBcSX-Bd.mjs";
import { aI as I, aJ as yt, aK as zt, aL as jt, aM as Wt, aN as ee, aO as qe, aP as G, aQ as K, aR as wt, aS as Qe, aT as Ze, aU as Ut, aV as Ht, aW as ue, aX as ie, aY as qt, aZ as Qt, a_ as Zt, a$ as at, b0 as Jt, b1 as oe, b2 as Xt, b3 as er, b4 as tr, b5 as Pe, b6 as rr, b7 as ar, b8 as nr, b9 as Ae, ba as nt, bb as sr, bc as ir, E as we, bd as or, B as Je, aF as ge, m as le, j as lr, am as cr, an as dr, ao as ur, ap as ke, k as fr, be as U, x as me, z as ae, bf as mr, n as Q, S as At, F as pr, au as hr, bg as br, bh as xr, a as Te, b as Xe, c as et, d as tt, bi as kt, bj as Ot, bk as _t, bl as Pt, bm as Fe, e as Se, bn as Nt, bo as Tt, bp as gr, bq as vr, br as yr, bs as jr, bt as wr, bu as st, bv as Ar, bw as kr, bx as Or, J as _r, N as Pr, O as Nr, Q as Tr, R as Sr, T as Cr } from "./stats-CYKBl8ke.mjs";
import { S as Dr, k as Er, a as Rr, b as Mr, c as $r, d as Lr, f as Ir, g as Br, h as Fr, C as se, i as Kr, l as Vr } from "./content-helpers-ym3V57zp.mjs";
import { T as St, a as Ct, K as Oe, c as W, d as Gr, b as _e } from "./tabs-B1iRXd5U.mjs";
import { T as ve, a as V, b as B, c as Yr, d as Dt, e as Et, f as H, S as fe, B as zr } from "./sort-button-BNSWKUZU.mjs";
import { g as Be, u as Wr } from "./use-growth-stats-8Lc7EDaR.mjs";
import { b as Ur, d as Hr } from "./audience-BEeBtpYR.mjs";
var qr = ["points", "className", "baseLinePoints", "connectNulls"];
function ce() {
  return ce = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, ce.apply(this, arguments);
}
function Qr(t, e) {
  if (t == null) return {};
  var n = Zr(t, e), r, s;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (s = 0; s < o.length; s++)
      r = o[s], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function Zr(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
function it(t) {
  return ta(t) || ea(t) || Xr(t) || Jr();
}
function Jr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Xr(t, e) {
  if (t) {
    if (typeof t == "string") return Ke(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ke(t, e);
  }
}
function ea(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function ta(t) {
  if (Array.isArray(t)) return Ke(t);
}
function Ke(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
var ot = function(e) {
  return e && e.x === +e.x && e.y === +e.y;
}, ra = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], n = [[]];
  return e.forEach(function(r) {
    ot(r) ? n[n.length - 1].push(r) : n[n.length - 1].length > 0 && n.push([]);
  }), ot(e[0]) && n[n.length - 1].push(e[0]), n[n.length - 1].length <= 0 && (n = n.slice(0, -1)), n;
}, ye = function(e, n) {
  var r = ra(e);
  n && (r = [r.reduce(function(o, i) {
    return [].concat(it(o), it(i));
  }, [])]);
  var s = r.map(function(o) {
    return o.reduce(function(i, c, p) {
      return "".concat(i).concat(p === 0 ? "M" : "L").concat(c.x, ",").concat(c.y);
    }, "");
  }).join("");
  return r.length === 1 ? "".concat(s, "Z") : s;
}, aa = function(e, n, r) {
  var s = ye(e, r);
  return "".concat(s.slice(-1) === "Z" ? s.slice(0, -1) : s, "L").concat(ye(n.reverse(), r).slice(1));
}, na = function(e) {
  var n = e.points, r = e.className, s = e.baseLinePoints, o = e.connectNulls, i = Qr(e, qr);
  if (!n || !n.length)
    return null;
  var c = q("recharts-polygon", r);
  if (s && s.length) {
    var p = i.stroke && i.stroke !== "none", d = aa(n, s, o);
    return /* @__PURE__ */ N.createElement("g", {
      className: c
    }, /* @__PURE__ */ N.createElement("path", ce({}, I(i, !0), {
      fill: d.slice(-1) === "Z" ? i.fill : "none",
      stroke: "none",
      d
    })), p ? /* @__PURE__ */ N.createElement("path", ce({}, I(i, !0), {
      fill: "none",
      d: ye(n, o)
    })) : null, p ? /* @__PURE__ */ N.createElement("path", ce({}, I(i, !0), {
      fill: "none",
      d: ye(s, o)
    })) : null);
  }
  var l = ye(n, o);
  return /* @__PURE__ */ N.createElement("path", ce({}, I(i, !0), {
    fill: l.slice(-1) === "Z" ? i.fill : "none",
    className: c,
    d: l
  }));
}, sa = yt, ia = zt, oa = jt;
function la(t, e) {
  return t && t.length ? sa(t, oa(e), ia) : void 0;
}
var ca = la;
const da = /* @__PURE__ */ gt(ca);
var ua = yt, fa = jt, ma = Wt;
function pa(t, e) {
  return t && t.length ? ua(t, fa(e), ma) : void 0;
}
var ha = pa;
const ba = /* @__PURE__ */ gt(ha);
var xa = ["cx", "cy", "angle", "ticks", "axisLine"], ga = ["ticks", "tick", "angle", "tickFormatter", "stroke"];
function pe(t) {
  "@babel/helpers - typeof";
  return pe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, pe(t);
}
function je() {
  return je = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, je.apply(this, arguments);
}
function lt(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(t, s).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function J(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? lt(Object(n), !0).forEach(function(r) {
      Me(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : lt(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function ct(t, e) {
  if (t == null) return {};
  var n = va(t, e), r, s;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (s = 0; s < o.length; s++)
      r = o[s], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function va(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
function ya(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function dt(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, Mt(r.key), r);
  }
}
function ja(t, e, n) {
  return e && dt(t.prototype, e), n && dt(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function wa(t, e, n) {
  return e = Ce(e), Aa(t, Rt() ? Reflect.construct(e, n || [], Ce(t).constructor) : e.apply(t, n));
}
function Aa(t, e) {
  if (e && (pe(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ka(t);
}
function ka(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Rt() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Rt = function() {
    return !!t;
  })();
}
function Ce(t) {
  return Ce = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ce(t);
}
function Oa(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Ve(t, e);
}
function Ve(t, e) {
  return Ve = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, s) {
    return r.__proto__ = s, r;
  }, Ve(t, e);
}
function Me(t, e, n) {
  return e = Mt(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Mt(t) {
  var e = _a(t, "string");
  return pe(e) == "symbol" ? e : e + "";
}
function _a(t, e) {
  if (pe(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (pe(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var $e = /* @__PURE__ */ function(t) {
  function e() {
    return ya(this, e), wa(this, e, arguments);
  }
  return Oa(e, t), ja(e, [{
    key: "getTickValueCoord",
    value: (
      /**
       * Calculate the coordinate of tick
       * @param  {Number} coordinate The radius of tick
       * @return {Object} (x, y)
       */
      function(r) {
        var s = r.coordinate, o = this.props, i = o.angle, c = o.cx, p = o.cy;
        return G(c, p, s, i);
      }
    )
  }, {
    key: "getTickTextAnchor",
    value: function() {
      var r = this.props.orientation, s;
      switch (r) {
        case "left":
          s = "end";
          break;
        case "right":
          s = "start";
          break;
        default:
          s = "middle";
          break;
      }
      return s;
    }
  }, {
    key: "getViewBox",
    value: function() {
      var r = this.props, s = r.cx, o = r.cy, i = r.angle, c = r.ticks, p = da(c, function(l) {
        return l.coordinate || 0;
      }), d = ba(c, function(l) {
        return l.coordinate || 0;
      });
      return {
        cx: s,
        cy: o,
        startAngle: i,
        endAngle: i,
        innerRadius: d.coordinate || 0,
        outerRadius: p.coordinate || 0
      };
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var r = this.props, s = r.cx, o = r.cy, i = r.angle, c = r.ticks, p = r.axisLine, d = ct(r, xa), l = c.reduce(function(w, u) {
        return [Math.min(w[0], u.coordinate), Math.max(w[1], u.coordinate)];
      }, [1 / 0, -1 / 0]), x = G(s, o, l[0], i), y = G(s, o, l[1], i), h = J(J(J({}, I(d, !1)), {}, {
        fill: "none"
      }, I(p, !1)), {}, {
        x1: x.x,
        y1: x.y,
        x2: y.x,
        y2: y.y
      });
      return /* @__PURE__ */ N.createElement("line", je({
        className: "recharts-polar-radius-axis-line"
      }, h));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var r = this, s = this.props, o = s.ticks, i = s.tick, c = s.angle, p = s.tickFormatter, d = s.stroke, l = ct(s, ga), x = this.getTickTextAnchor(), y = I(l, !1), h = I(i, !1), w = o.map(function(u, g) {
        var _ = r.getTickValueCoord(u), b = J(J(J(J({
          textAnchor: x,
          transform: "rotate(".concat(90 - c, ", ").concat(_.x, ", ").concat(_.y, ")")
        }, y), {}, {
          stroke: "none",
          fill: d
        }, h), {}, {
          index: g
        }, _), {}, {
          payload: u
        });
        return /* @__PURE__ */ N.createElement(K, je({
          className: q("recharts-polar-radius-axis-tick", wt(i)),
          key: "tick-".concat(u.coordinate)
        }, Qe(r.props, u, g)), e.renderTickItem(i, b, p ? p(u.value, g) : u.value));
      });
      return /* @__PURE__ */ N.createElement(K, {
        className: "recharts-polar-radius-axis-ticks"
      }, w);
    }
  }, {
    key: "render",
    value: function() {
      var r = this.props, s = r.ticks, o = r.axisLine, i = r.tick;
      return !s || !s.length ? null : /* @__PURE__ */ N.createElement(K, {
        className: q("recharts-polar-radius-axis", this.props.className)
      }, o && this.renderAxisLine(), i && this.renderTicks(), Ze.renderCallByParent(this.props, this.getViewBox()));
    }
  }], [{
    key: "renderTickItem",
    value: function(r, s, o) {
      var i;
      return /* @__PURE__ */ N.isValidElement(r) ? i = /* @__PURE__ */ N.cloneElement(r, s) : ee(r) ? i = r(s) : i = /* @__PURE__ */ N.createElement(qe, je({}, s, {
        className: "recharts-polar-radius-axis-tick-value"
      }), o), i;
    }
  }]);
}(ze);
Me($e, "displayName", "PolarRadiusAxis");
Me($e, "axisType", "radiusAxis");
Me($e, "defaultProps", {
  type: "number",
  radiusAxisId: 0,
  cx: 0,
  cy: 0,
  angle: 0,
  orientation: "right",
  stroke: "#ccc",
  axisLine: !0,
  tick: !0,
  tickCount: 5,
  allowDataOverflow: !1,
  scale: "auto",
  allowDuplicatedCategory: !0
});
function he(t) {
  "@babel/helpers - typeof";
  return he = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, he(t);
}
function te() {
  return te = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, te.apply(this, arguments);
}
function ut(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(t, s).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function X(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ut(Object(n), !0).forEach(function(r) {
      Le(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ut(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function Pa(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ft(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, Lt(r.key), r);
  }
}
function Na(t, e, n) {
  return e && ft(t.prototype, e), n && ft(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function Ta(t, e, n) {
  return e = De(e), Sa(t, $t() ? Reflect.construct(e, n || [], De(t).constructor) : e.apply(t, n));
}
function Sa(t, e) {
  if (e && (he(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Ca(t);
}
function Ca(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function $t() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return ($t = function() {
    return !!t;
  })();
}
function De(t) {
  return De = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, De(t);
}
function Da(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Ge(t, e);
}
function Ge(t, e) {
  return Ge = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, s) {
    return r.__proto__ = s, r;
  }, Ge(t, e);
}
function Le(t, e, n) {
  return e = Lt(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Lt(t) {
  var e = Ea(t, "string");
  return he(e) == "symbol" ? e : e + "";
}
function Ea(t, e) {
  if (he(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (he(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var Ra = Math.PI / 180, mt = 1e-5, Ie = /* @__PURE__ */ function(t) {
  function e() {
    return Pa(this, e), Ta(this, e, arguments);
  }
  return Da(e, t), Na(e, [{
    key: "getTickLineCoord",
    value: (
      /**
       * Calculate the coordinate of line endpoint
       * @param  {Object} data The Data if ticks
       * @return {Object} (x0, y0): The start point of text,
       *                  (x1, y1): The end point close to text,
       *                  (x2, y2): The end point close to axis
       */
      function(r) {
        var s = this.props, o = s.cx, i = s.cy, c = s.radius, p = s.orientation, d = s.tickSize, l = d || 8, x = G(o, i, c, r.coordinate), y = G(o, i, c + (p === "inner" ? -1 : 1) * l, r.coordinate);
        return {
          x1: x.x,
          y1: x.y,
          x2: y.x,
          y2: y.y
        };
      }
    )
    /**
     * Get the text-anchor of each tick
     * @param  {Object} data Data of ticks
     * @return {String} text-anchor
     */
  }, {
    key: "getTickTextAnchor",
    value: function(r) {
      var s = this.props.orientation, o = Math.cos(-r.coordinate * Ra), i;
      return o > mt ? i = s === "outer" ? "start" : "end" : o < -mt ? i = s === "outer" ? "end" : "start" : i = "middle", i;
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var r = this.props, s = r.cx, o = r.cy, i = r.radius, c = r.axisLine, p = r.axisLineType, d = X(X({}, I(this.props, !1)), {}, {
        fill: "none"
      }, I(c, !1));
      if (p === "circle")
        return /* @__PURE__ */ N.createElement(Ut, te({
          className: "recharts-polar-angle-axis-line"
        }, d, {
          cx: s,
          cy: o,
          r: i
        }));
      var l = this.props.ticks, x = l.map(function(y) {
        return G(s, o, i, y.coordinate);
      });
      return /* @__PURE__ */ N.createElement(na, te({
        className: "recharts-polar-angle-axis-line"
      }, d, {
        points: x
      }));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var r = this, s = this.props, o = s.ticks, i = s.tick, c = s.tickLine, p = s.tickFormatter, d = s.stroke, l = I(this.props, !1), x = I(i, !1), y = X(X({}, l), {}, {
        fill: "none"
      }, I(c, !1)), h = o.map(function(w, u) {
        var g = r.getTickLineCoord(w), _ = r.getTickTextAnchor(w), b = X(X(X({
          textAnchor: _
        }, l), {}, {
          stroke: "none",
          fill: d
        }, x), {}, {
          index: u,
          payload: w,
          x: g.x2,
          y: g.y2
        });
        return /* @__PURE__ */ N.createElement(K, te({
          className: q("recharts-polar-angle-axis-tick", wt(i)),
          key: "tick-".concat(w.coordinate)
        }, Qe(r.props, w, u)), c && /* @__PURE__ */ N.createElement("line", te({
          className: "recharts-polar-angle-axis-tick-line"
        }, y, g)), i && e.renderTickItem(i, b, p ? p(w.value, u) : w.value));
      });
      return /* @__PURE__ */ N.createElement(K, {
        className: "recharts-polar-angle-axis-ticks"
      }, h);
    }
  }, {
    key: "render",
    value: function() {
      var r = this.props, s = r.ticks, o = r.radius, i = r.axisLine;
      return o <= 0 || !s || !s.length ? null : /* @__PURE__ */ N.createElement(K, {
        className: q("recharts-polar-angle-axis", this.props.className)
      }, i && this.renderAxisLine(), this.renderTicks());
    }
  }], [{
    key: "renderTickItem",
    value: function(r, s, o) {
      var i;
      return /* @__PURE__ */ N.isValidElement(r) ? i = /* @__PURE__ */ N.cloneElement(r, s) : ee(r) ? i = r(s) : i = /* @__PURE__ */ N.createElement(qe, te({}, s, {
        className: "recharts-polar-angle-axis-tick-value"
      }), o), i;
    }
  }]);
}(ze);
Le(Ie, "displayName", "PolarAngleAxis");
Le(Ie, "axisType", "angleAxis");
Le(Ie, "defaultProps", {
  type: "category",
  angleAxisId: 0,
  scale: "auto",
  cx: 0,
  cy: 0,
  orientation: "outer",
  axisLine: !0,
  tickLine: !0,
  tickSize: 8,
  tick: !0,
  hide: !1,
  allowDuplicatedCategory: !0
});
var Ne;
function be(t) {
  "@babel/helpers - typeof";
  return be = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, be(t);
}
function de() {
  return de = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, de.apply(this, arguments);
}
function pt(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(t, s).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function R(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? pt(Object(n), !0).forEach(function(r) {
      F(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : pt(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function Ma(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ht(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, Bt(r.key), r);
  }
}
function $a(t, e, n) {
  return e && ht(t.prototype, e), n && ht(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function La(t, e, n) {
  return e = Ee(e), Ia(t, It() ? Reflect.construct(e, n || [], Ee(t).constructor) : e.apply(t, n));
}
function Ia(t, e) {
  if (e && (be(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Ba(t);
}
function Ba(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function It() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (It = function() {
    return !!t;
  })();
}
function Ee(t) {
  return Ee = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ee(t);
}
function Fa(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Ye(t, e);
}
function Ye(t, e) {
  return Ye = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, s) {
    return r.__proto__ = s, r;
  }, Ye(t, e);
}
function F(t, e, n) {
  return e = Bt(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Bt(t) {
  var e = Ka(t, "string");
  return be(e) == "symbol" ? e : e + "";
}
function Ka(t, e) {
  if (be(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (be(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var Y = /* @__PURE__ */ function(t) {
  function e(n) {
    var r;
    return Ma(this, e), r = La(this, e, [n]), F(r, "pieRef", null), F(r, "sectorRefs", []), F(r, "id", er("recharts-pie-")), F(r, "handleAnimationEnd", function() {
      var s = r.props.onAnimationEnd;
      r.setState({
        isAnimationFinished: !0
      }), ee(s) && s();
    }), F(r, "handleAnimationStart", function() {
      var s = r.props.onAnimationStart;
      r.setState({
        isAnimationFinished: !1
      }), ee(s) && s();
    }), r.state = {
      isAnimationFinished: !n.isAnimationActive,
      prevIsAnimationActive: n.isAnimationActive,
      prevAnimationId: n.animationId,
      sectorToFocus: 0
    }, r;
  }
  return Fa(e, t), $a(e, [{
    key: "isActiveIndex",
    value: function(r) {
      var s = this.props.activeIndex;
      return Array.isArray(s) ? s.indexOf(r) !== -1 : r === s;
    }
  }, {
    key: "hasActiveIndex",
    value: function() {
      var r = this.props.activeIndex;
      return Array.isArray(r) ? r.length !== 0 : r || r === 0;
    }
  }, {
    key: "renderLabels",
    value: function(r) {
      var s = this.props.isAnimationActive;
      if (s && !this.state.isAnimationFinished)
        return null;
      var o = this.props, i = o.label, c = o.labelLine, p = o.dataKey, d = o.valueKey, l = I(this.props, !1), x = I(i, !1), y = I(c, !1), h = i && i.offsetRadius || 20, w = r.map(function(u, g) {
        var _ = (u.startAngle + u.endAngle) / 2, b = G(u.cx, u.cy, u.outerRadius + h, _), m = R(R(R(R({}, l), u), {}, {
          stroke: "none"
        }, x), {}, {
          index: g,
          textAnchor: e.getTextAnchor(b.x, u.cx)
        }, b), f = R(R(R(R({}, l), u), {}, {
          fill: "none",
          stroke: u.fill
        }, y), {}, {
          index: g,
          points: [G(u.cx, u.cy, u.outerRadius, _), b]
        }), A = p;
        return ue(p) && ue(d) ? A = "value" : ue(p) && (A = d), // eslint-disable-next-line react/no-array-index-key
        /* @__PURE__ */ N.createElement(K, {
          key: "label-".concat(u.startAngle, "-").concat(u.endAngle, "-").concat(u.midAngle, "-").concat(g)
        }, c && e.renderLabelLineItem(c, f, "line"), e.renderLabelItem(i, m, ie(u, A)));
      });
      return /* @__PURE__ */ N.createElement(K, {
        className: "recharts-pie-labels"
      }, w);
    }
  }, {
    key: "renderSectorsStatically",
    value: function(r) {
      var s = this, o = this.props, i = o.activeShape, c = o.blendStroke, p = o.inactiveShape;
      return r.map(function(d, l) {
        if ((d == null ? void 0 : d.startAngle) === 0 && (d == null ? void 0 : d.endAngle) === 0 && r.length !== 1) return null;
        var x = s.isActiveIndex(l), y = p && s.hasActiveIndex() ? p : null, h = x ? i : y, w = R(R({}, d), {}, {
          stroke: c ? d.fill : d.stroke,
          tabIndex: -1
        });
        return /* @__PURE__ */ N.createElement(K, de({
          ref: function(g) {
            g && !s.sectorRefs.includes(g) && s.sectorRefs.push(g);
          },
          tabIndex: -1,
          className: "recharts-pie-sector"
        }, Qe(s.props, d, l), {
          // eslint-disable-next-line react/no-array-index-key
          key: "sector-".concat(d == null ? void 0 : d.startAngle, "-").concat(d == null ? void 0 : d.endAngle, "-").concat(d.midAngle, "-").concat(l)
        }), /* @__PURE__ */ N.createElement(qt, de({
          option: h,
          isActive: x,
          shapeType: "sector"
        }, w)));
      });
    }
  }, {
    key: "renderSectorsWithAnimation",
    value: function() {
      var r = this, s = this.props, o = s.sectors, i = s.isAnimationActive, c = s.animationBegin, p = s.animationDuration, d = s.animationEasing, l = s.animationId, x = this.state, y = x.prevSectors, h = x.prevIsAnimationActive;
      return /* @__PURE__ */ N.createElement(Qt, {
        begin: c,
        duration: p,
        isActive: i,
        easing: d,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "pie-".concat(l, "-").concat(h),
        onAnimationStart: this.handleAnimationStart,
        onAnimationEnd: this.handleAnimationEnd
      }, function(w) {
        var u = w.t, g = [], _ = o && o[0], b = _.startAngle;
        return o.forEach(function(m, f) {
          var A = y && y[f], C = f > 0 ? Zt(m, "paddingAngle", 0) : 0;
          if (A) {
            var O = at(A.endAngle - A.startAngle, m.endAngle - m.startAngle), j = R(R({}, m), {}, {
              startAngle: b + C,
              endAngle: b + O(u) + C
            });
            g.push(j), b = j.endAngle;
          } else {
            var v = m.endAngle, k = m.startAngle, P = at(0, v - k), S = P(u), E = R(R({}, m), {}, {
              startAngle: b + C,
              endAngle: b + S + C
            });
            g.push(E), b = E.endAngle;
          }
        }), /* @__PURE__ */ N.createElement(K, null, r.renderSectorsStatically(g));
      });
    }
  }, {
    key: "attachKeyboardHandlers",
    value: function(r) {
      var s = this;
      r.onkeydown = function(o) {
        if (!o.altKey)
          switch (o.key) {
            case "ArrowLeft": {
              var i = ++s.state.sectorToFocus % s.sectorRefs.length;
              s.sectorRefs[i].focus(), s.setState({
                sectorToFocus: i
              });
              break;
            }
            case "ArrowRight": {
              var c = --s.state.sectorToFocus < 0 ? s.sectorRefs.length - 1 : s.state.sectorToFocus % s.sectorRefs.length;
              s.sectorRefs[c].focus(), s.setState({
                sectorToFocus: c
              });
              break;
            }
            case "Escape": {
              s.sectorRefs[s.state.sectorToFocus].blur(), s.setState({
                sectorToFocus: 0
              });
              break;
            }
          }
      };
    }
  }, {
    key: "renderSectors",
    value: function() {
      var r = this.props, s = r.sectors, o = r.isAnimationActive, i = this.state.prevSectors;
      return o && s && s.length && (!i || !Jt(i, s)) ? this.renderSectorsWithAnimation() : this.renderSectorsStatically(s);
    }
  }, {
    key: "componentDidMount",
    value: function() {
      this.pieRef && this.attachKeyboardHandlers(this.pieRef);
    }
  }, {
    key: "render",
    value: function() {
      var r = this, s = this.props, o = s.hide, i = s.sectors, c = s.className, p = s.label, d = s.cx, l = s.cy, x = s.innerRadius, y = s.outerRadius, h = s.isAnimationActive, w = this.state.isAnimationFinished;
      if (o || !i || !i.length || !oe(d) || !oe(l) || !oe(x) || !oe(y))
        return null;
      var u = q("recharts-pie", c);
      return /* @__PURE__ */ N.createElement(K, {
        tabIndex: this.props.rootTabIndex,
        className: u,
        ref: function(_) {
          r.pieRef = _;
        }
      }, this.renderSectors(), p && this.renderLabels(i), Ze.renderCallByParent(this.props, null, !1), (!h || w) && Xt.renderCallByParent(this.props, i, !1));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(r, s) {
      return s.prevIsAnimationActive !== r.isAnimationActive ? {
        prevIsAnimationActive: r.isAnimationActive,
        prevAnimationId: r.animationId,
        curSectors: r.sectors,
        prevSectors: [],
        isAnimationFinished: !0
      } : r.isAnimationActive && r.animationId !== s.prevAnimationId ? {
        prevAnimationId: r.animationId,
        curSectors: r.sectors,
        prevSectors: s.curSectors,
        isAnimationFinished: !0
      } : r.sectors !== s.curSectors ? {
        curSectors: r.sectors,
        isAnimationFinished: !0
      } : null;
    }
  }, {
    key: "getTextAnchor",
    value: function(r, s) {
      return r > s ? "start" : r < s ? "end" : "middle";
    }
  }, {
    key: "renderLabelLineItem",
    value: function(r, s, o) {
      if (/* @__PURE__ */ N.isValidElement(r))
        return /* @__PURE__ */ N.cloneElement(r, s);
      if (ee(r))
        return r(s);
      var i = q("recharts-pie-label-line", typeof r != "boolean" ? r.className : "");
      return /* @__PURE__ */ N.createElement(Ht, de({}, s, {
        key: o,
        type: "linear",
        className: i
      }));
    }
  }, {
    key: "renderLabelItem",
    value: function(r, s, o) {
      if (/* @__PURE__ */ N.isValidElement(r))
        return /* @__PURE__ */ N.cloneElement(r, s);
      var i = o;
      if (ee(r) && (i = r(s), /* @__PURE__ */ N.isValidElement(i)))
        return i;
      var c = q("recharts-pie-label-text", typeof r != "boolean" && !ee(r) ? r.className : "");
      return /* @__PURE__ */ N.createElement(qe, de({}, s, {
        alignmentBaseline: "middle",
        className: c
      }), i);
    }
  }]);
}(ze);
Ne = Y;
F(Y, "displayName", "Pie");
F(Y, "defaultProps", {
  stroke: "#fff",
  fill: "#808080",
  legendType: "rect",
  cx: "50%",
  cy: "50%",
  startAngle: 0,
  endAngle: 360,
  innerRadius: 0,
  outerRadius: "80%",
  paddingAngle: 0,
  labelLine: !0,
  hide: !1,
  minAngle: 0,
  isAnimationActive: !tr.isSsr,
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: "ease",
  nameKey: "name",
  blendStroke: !1,
  rootTabIndex: 0
});
F(Y, "parseDeltaAngle", function(t, e) {
  var n = Pe(e - t), r = Math.min(Math.abs(e - t), 360);
  return n * r;
});
F(Y, "getRealPieData", function(t) {
  var e = t.data, n = t.children, r = I(t, !1), s = rr(n, ar);
  return e && e.length ? e.map(function(o, i) {
    return R(R(R({
      payload: o
    }, r), o), s && s[i] && s[i].props);
  }) : s && s.length ? s.map(function(o) {
    return R(R({}, r), o.props);
  }) : [];
});
F(Y, "parseCoordinateOfPie", function(t, e) {
  var n = e.top, r = e.left, s = e.width, o = e.height, i = nr(s, o), c = r + Ae(t.cx, s, s / 2), p = n + Ae(t.cy, o, o / 2), d = Ae(t.innerRadius, i, 0), l = Ae(t.outerRadius, i, i * 0.8), x = t.maxRadius || Math.sqrt(s * s + o * o) / 2;
  return {
    cx: c,
    cy: p,
    innerRadius: d,
    outerRadius: l,
    maxRadius: x
  };
});
F(Y, "getComposedData", function(t) {
  var e = t.item, n = t.offset, r = e.type.defaultProps !== void 0 ? R(R({}, e.type.defaultProps), e.props) : e.props, s = Ne.getRealPieData(r);
  if (!s || !s.length)
    return null;
  var o = r.cornerRadius, i = r.startAngle, c = r.endAngle, p = r.paddingAngle, d = r.dataKey, l = r.nameKey, x = r.valueKey, y = r.tooltipType, h = Math.abs(r.minAngle), w = Ne.parseCoordinateOfPie(r, n), u = Ne.parseDeltaAngle(i, c), g = Math.abs(u), _ = d;
  ue(d) && ue(x) ? (nt(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), _ = "value") : ue(d) && (nt(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), _ = x);
  var b = s.filter(function(j) {
    return ie(j, _, 0) !== 0;
  }).length, m = (g >= 360 ? b : b - 1) * p, f = g - b * h - m, A = s.reduce(function(j, v) {
    var k = ie(v, _, 0);
    return j + (oe(k) ? k : 0);
  }, 0), C;
  if (A > 0) {
    var O;
    C = s.map(function(j, v) {
      var k = ie(j, _, 0), P = ie(j, l, v), S = (oe(k) ? k : 0) / A, E;
      v ? E = O.endAngle + Pe(u) * p * (k !== 0 ? 1 : 0) : E = i;
      var xe = E + Pe(u) * ((k !== 0 ? h : 0) + S * f), D = (E + xe) / 2, M = (w.innerRadius + w.outerRadius) / 2, Z = [{
        name: P,
        value: k,
        payload: j,
        dataKey: _,
        type: y
      }], ne = G(w.cx, w.cy, M, D);
      return O = R(R(R({
        percent: S,
        cornerRadius: o,
        name: P,
        tooltipPayload: Z,
        midAngle: D,
        middleRadius: M,
        tooltipPosition: ne
      }, j), w), {}, {
        value: ie(j, _),
        startAngle: E,
        endAngle: xe,
        payload: j,
        paddingAngle: Pe(u) * p
      }), O;
    });
  }
  return R(R({}, w), {}, {
    sectors: C,
    data: s
  });
});
var Va = sr({
  chartName: "PieChart",
  GraphicalChild: Y,
  validateTooltipEventTypes: ["item"],
  defaultTooltipEventType: "item",
  legendContent: "children",
  axisComponents: [{
    axisType: "angleAxis",
    AxisComp: Ie
  }, {
    axisType: "radiusAxis",
    AxisComp: $e
  }],
  formatAxisMap: ir,
  defaultProps: {
    layout: "centric",
    startAngle: 0,
    endAngle: 360,
    cx: "50%",
    cy: "50%",
    innerRadius: 0,
    outerRadius: "80%"
  }
});
const Ft = ({ className: t }) => {
  const e = We();
  return /* @__PURE__ */ a.jsx(
    we,
    {
      actions: /* @__PURE__ */ a.jsx(Je, { variant: "outline", onClick: () => e("/settings/analytics", { crossApp: !0 }), children: "Open settings" }),
      className: t,
      description: "Enable member source tracking in settings to see which content drives member growth.",
      title: "Member sources have been disabled",
      children: /* @__PURE__ */ a.jsx(or, {})
    }
  );
}, Ga = (t) => t === "total-members" || t === "free-members" || t === "paid-members" || t === "mrr", Ya = ({ active: t, payload: e, range: n, color: r, showBreakdown: s }) => {
  if (!t || !(e != null && e.length))
    return null;
  const o = e[0].payload, { date: i, formattedValue: c, label: p, comped: d } = o, l = o.value - (d || 0);
  return /* @__PURE__ */ a.jsxs("div", { className: "min-w-[200px] rounded-lg border bg-background px-3 py-2 shadow-lg", children: [
    i && /* @__PURE__ */ a.jsx("div", { className: "mb-1 text-sm text-foreground", children: U(i, n || 0) }),
    /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col gap-1", children: [
      s && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ a.jsxs("div", { className: "flex grow items-center justify-between gap-5", children: [
          /* @__PURE__ */ a.jsx("div", { className: "text-sm text-muted-foreground", children: "Paid subscriptions" }),
          /* @__PURE__ */ a.jsx("div", { className: "font-mono text-xs", children: T(l) })
        ] }) }),
        /* @__PURE__ */ a.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ a.jsxs("div", { className: "flex grow items-center justify-between gap-5", children: [
          /* @__PURE__ */ a.jsx("div", { className: "text-sm text-muted-foreground", children: "Complimentary" }),
          /* @__PURE__ */ a.jsx("div", { className: "font-mono text-xs", children: d !== void 0 && d > 0 ? T(d) : "0" })
        ] }) }),
        /* @__PURE__ */ a.jsx(Dr, {})
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ a.jsx("span", { className: "inline-block size-2 rounded-full opacity-50", style: { backgroundColor: r || "var(--chart-purple)" } }),
        /* @__PURE__ */ a.jsxs("div", { className: "flex grow items-center justify-between gap-5", children: [
          p && /* @__PURE__ */ a.jsx("div", { className: "text-sm text-muted-foreground", children: p }),
          /* @__PURE__ */ a.jsx("div", { className: "font-mono font-medium", children: c })
        ] })
      ] })
    ] })
  ] });
}, za = ({ chartData: t, totals: e, initialTab: n, currencySymbol: r, isLoading: s, onTabChange: o }) => {
  const i = Ga(n) ? n : "total-members", [c, p] = re(i), { range: d } = Ue(), { appSettings: l } = Re(), x = We(), [y] = vt();
  He(() => {
    p(i);
  }, [i]);
  const h = (O) => {
    p(O);
    const j = new URLSearchParams(y);
    j.set("tab", O), x(`?${j.toString()}`, { replace: !0 }), o && o(O);
  }, { totalMembers: w, freeMembers: u, paidMembers: g, mrr: _, percentChanges: b, directions: m } = e, f = L(() => {
    if (!t || t.length === 0)
      return [];
    let O = [], j = "value";
    switch (c) {
      case "free-members":
        j = "free";
        break;
      case "paid-members":
        j = "paid";
        break;
      case "mrr": {
        j = "mrr";
        break;
      }
      default:
        j = "value";
    }
    O = ge(t, d, j, "exact");
    let v = [];
    switch (c) {
      case "free-members":
        v = O.map((k) => ({
          ...k,
          value: k.free,
          formattedValue: T(k.free),
          label: "Free members"
        }));
        break;
      case "paid-members":
        v = O.map((k) => ({
          ...k,
          value: k.paid,
          formattedValue: T(k.paid),
          label: "Paid members",
          comped: k.comped,
          paid_subscribed: k.paid_subscribed
        }));
        break;
      case "mrr":
        v = O.map((k) => ({
          ...k,
          value: le(k.mrr),
          formattedValue: `${r}${T(le(k.mrr))}`,
          label: "MRR"
        }));
        break;
      default:
        v = O.map((k) => {
          const P = k.free + k.paid;
          return {
            ...k,
            value: P,
            formattedValue: T(P),
            label: "Total members"
          };
        });
    }
    return v;
  }, [c, t, d, r]), A = {
    "total-members": {
      color: "var(--chart-darkblue)"
    },
    "free-members": {
      color: "var(--chart-blue)"
    },
    "paid-members": {
      color: "var(--chart-purple)"
    },
    mrr: {
      color: "var(--chart-teal)"
    }
  };
  return s ? /* @__PURE__ */ a.jsx("div", { className: "-mb-6 flex h-[calc(16vw+132px)] w-full items-start justify-center", children: /* @__PURE__ */ a.jsx(lr, {}) }) : /* @__PURE__ */ a.jsxs(St, { defaultValue: i, variant: "kpis", children: [
    /* @__PURE__ */ a.jsxs(Ct, { className: `-mx-6 ${l != null && l.paidMembersEnabled ? "hidden grid-cols-4 lg:visible! lg:grid!" : "grid grid-cols-4"}`, children: [
      /* @__PURE__ */ a.jsx(Oe, { className: l != null && l.paidMembersEnabled ? "" : "cursor-auto after:hidden", value: "total-members", onClick: () => {
        l != null && l.paidMembersEnabled && h("total-members");
      }, children: /* @__PURE__ */ a.jsx(
        W,
        {
          color: "var(--chart-darkblue)",
          diffDirection: d === z.allTime.value ? "hidden" : m.total,
          diffValue: b.total,
          label: "Total members",
          value: T(w)
        }
      ) }),
      (l == null ? void 0 : l.paidMembersEnabled) && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx(Oe, { value: "free-members", onClick: () => {
          h("free-members");
        }, children: /* @__PURE__ */ a.jsx(
          W,
          {
            color: "var(--chart-blue)",
            diffDirection: d === z.allTime.value ? "hidden" : m.free,
            diffValue: b.free,
            label: "Free members",
            value: T(u)
          }
        ) }),
        /* @__PURE__ */ a.jsx(Oe, { value: "paid-members", onClick: () => {
          h("paid-members");
        }, children: /* @__PURE__ */ a.jsx(
          W,
          {
            color: "var(--chart-purple)",
            diffDirection: d === z.allTime.value ? "hidden" : m.paid,
            diffValue: b.paid,
            label: "Paid members",
            value: T(g)
          }
        ) }),
        /* @__PURE__ */ a.jsx(Oe, { value: "mrr", onClick: () => {
          h("mrr");
        }, children: /* @__PURE__ */ a.jsx(
          W,
          {
            color: "var(--chart-teal)",
            diffDirection: d === z.allTime.value ? "hidden" : m.mrr,
            diffValue: b.mrr,
            label: "MRR",
            value: `${r}${T(le(_))}`
          }
        ) })
      ] })
    ] }),
    (l == null ? void 0 : l.paidMembersEnabled) && /* @__PURE__ */ a.jsxs(cr, { children: [
      /* @__PURE__ */ a.jsx(dr, { className: "lg:hidden", asChild: !0, children: /* @__PURE__ */ a.jsxs(Gr, { children: [
        c === "total-members" && /* @__PURE__ */ a.jsx(
          W,
          {
            color: "var(--chart-darkblue)",
            diffDirection: d === z.allTime.value ? "hidden" : m.total,
            diffValue: b.total,
            label: "Total members",
            value: T(w)
          }
        ),
        c === "free-members" && /* @__PURE__ */ a.jsx(
          W,
          {
            color: "var(--chart-blue)",
            diffDirection: d === z.allTime.value ? "hidden" : m.free,
            diffValue: b.free,
            label: "Free members",
            value: T(u)
          }
        ),
        c === "paid-members" && /* @__PURE__ */ a.jsx(
          W,
          {
            color: "var(--chart-purple)",
            diffDirection: d === z.allTime.value ? "hidden" : m.paid,
            diffValue: b.paid,
            label: "Paid members",
            value: T(g)
          }
        ),
        c === "mrr" && /* @__PURE__ */ a.jsx(
          W,
          {
            color: "var(--chart-teal)",
            diffDirection: d === z.allTime.value ? "hidden" : m.mrr,
            diffValue: b.mrr,
            label: "MRR",
            value: `${r}${T(le(_))}`
          }
        )
      ] }) }),
      /* @__PURE__ */ a.jsxs(ur, { align: "end", className: "w-56", children: [
        /* @__PURE__ */ a.jsx(ke, { onClick: () => h("total-members"), children: "Total members" }),
        /* @__PURE__ */ a.jsx(ke, { onClick: () => h("free-members"), children: "Free members" }),
        /* @__PURE__ */ a.jsx(ke, { onClick: () => h("paid-members"), children: "Paid members" }),
        /* @__PURE__ */ a.jsx(ke, { onClick: () => h("mrr"), children: "MRR" })
      ] })
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "my-4 [&_.recharts-cartesian-axis-tick-value]:fill-gray-500", children: /* @__PURE__ */ a.jsx(
      fr,
      {
        className: "-mb-3 h-[16vw] max-h-[320px] w-full min-h-[180px]",
        color: A[c].color,
        data: f,
        dataFormatter: c === "mrr" ? (O) => `${r}${T(O)}` : T,
        id: c,
        range: d,
        tooltipContent: c === "paid-members" ? /* @__PURE__ */ a.jsx(Ya, { color: A["paid-members"].color, range: d, showBreakdown: !0 }) : void 0
      }
    ) })
  ] });
}, Wa = Vt({
  dataType: "TopSourcesGrowthResponseType",
  path: "/stats/top-sources-growth"
}), Ua = (t, e = "signups desc", n = 50) => {
  const { startDate: r, endDate: s, timezone: o } = me(t), i = {
    date_from: ae(r),
    date_to: ae(s),
    member_status: Ur(Gt),
    order: e,
    limit: n.toString()
  };
  return o && (i.timezone = o), Wa({ searchParams: i });
}, bt = ({ data: t, currencySymbol: e, limit: n, defaultSourceIconUrl: r }) => {
  const s = n ? t.slice(0, n) : t, { appSettings: o } = Re();
  return /* @__PURE__ */ a.jsx(ve, { children: s.map((i) => /* @__PURE__ */ a.jsxs(V, { className: "last:border-none", children: [
    /* @__PURE__ */ a.jsx(B, { className: "font-medium", children: /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ a.jsx(
        Fr,
        {
          defaultSourceIconUrl: r,
          displayName: i.displayName,
          iconSrc: i.iconSrc
        }
      ),
      i.linkUrl ? /* @__PURE__ */ a.jsx(
        "a",
        {
          className: "hover:underline",
          href: i.linkUrl,
          rel: "noreferrer",
          target: "_blank",
          children: i.displayName
        }
      ) : /* @__PURE__ */ a.jsx("span", { children: i.displayName })
    ] }) }),
    /* @__PURE__ */ a.jsxs(B, { className: "text-right font-mono text-sm", children: [
      "+",
      T(i.free_members)
    ] }),
    (o == null ? void 0 : o.paidMembersEnabled) && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsxs(B, { className: "text-right font-mono text-sm", children: [
        "+",
        T(i.paid_members)
      ] }),
      /* @__PURE__ */ a.jsxs(B, { className: "text-right font-mono text-sm", children: [
        "+",
        e,
        T(le(i.mrr))
      ] })
    ] })
  ] }, i.source)) });
}, Ha = ({
  range: t,
  limit: e = 20,
  showViewAll: n = !1,
  sortBy: r,
  setSortBy: s
}) => {
  const { data: o } = Ue(), { data: i } = mr(), { appSettings: c } = Re(), [p, d] = re("free_members desc"), l = r || p, x = s || d, y = l.replace("free_members", "signups").replace("paid_members", "paid_conversions"), { data: h, isLoading: w } = Ua(t, y, e), u = o == null ? void 0 : o.url, g = "https://www.google.com/s2/favicons?domain=ghost.org&sz=64", _ = N.useMemo(() => {
    var A;
    if (i != null && i.stats && ((A = i == null ? void 0 : i.meta) != null && A.totals)) {
      const C = i.meta.totals;
      let O = C[0];
      if (!O)
        return Be("usd");
      for (const j of C)
        j.mrr > O.mrr && (O = j);
      return Be(O.currency);
    }
    return Be("usd");
  }, [i]), b = N.useMemo(() => h != null && h.stats ? h.stats.map((A) => {
    const C = A.source || "Direct", { domain: O } = Er(C, u), j = O ? `https://www.faviconextractor.com/favicon/${O}?larger=true` : g, v = O && C !== "Direct" ? `https://${O}` : void 0;
    return {
      source: C,
      free_members: A.signups,
      // Backend returns 'signups', we map to 'free_members' for display
      paid_members: A.paid_conversions,
      // Backend returns 'paid_conversions', we map to 'paid_members' for display
      mrr: A.mrr,
      iconSrc: j,
      displayName: C,
      linkUrl: v
    };
  }) : [], [h, u]), m = "Top sources", f = `Where did your growth come from ${Q(t)}`;
  return c != null && c.analytics.membersTrackSources ? w ? /* @__PURE__ */ a.jsx(ve, { children: /* @__PURE__ */ a.jsx(V, { className: "last:border-none", children: /* @__PURE__ */ a.jsx(B, { className: "border-none py-2", colSpan: 1, children: /* @__PURE__ */ a.jsx(At, { containerClassName: "space-y-2", count: 5, maxWidth: 75, randomize: !0 }) }) }) }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    b.length > 0 ? /* @__PURE__ */ a.jsx(
      bt,
      {
        currencySymbol: _,
        data: b,
        defaultSourceIconUrl: g,
        limit: e
      }
    ) : /* @__PURE__ */ a.jsx(ve, { children: /* @__PURE__ */ a.jsx(V, { className: "last:border-none", children: /* @__PURE__ */ a.jsx(B, { className: "border-none py-12 group-hover:bg-transparent!", colSpan: c != null && c.paidMembersEnabled ? 4 : 2, children: /* @__PURE__ */ a.jsx(
      we,
      {
        description: "Try adjusting your date range to see more data.",
        title: `No conversions ${Q(t)}`,
        children: /* @__PURE__ */ a.jsx(pr, { strokeWidth: 1.5 })
      }
    ) }) }) }),
    n && b.length > e && /* @__PURE__ */ a.jsx(Yr, { className: "border-none bg-transparent hover:bg-transparent!", children: /* @__PURE__ */ a.jsx(V, { children: /* @__PURE__ */ a.jsx(B, { className: "border-none bg-transparent px-0 pb-0 hover:bg-transparent!", colSpan: 4, children: /* @__PURE__ */ a.jsxs(Rr, { children: [
      /* @__PURE__ */ a.jsx(Mr, { asChild: !0, children: /* @__PURE__ */ a.jsxs(Je, { variant: "outline", children: [
        "View all ",
        /* @__PURE__ */ a.jsx(hr, {})
      ] }) }),
      /* @__PURE__ */ a.jsxs($r, { className: "overflow-y-auto pt-0 sm:max-w-[600px]", children: [
        /* @__PURE__ */ a.jsxs(Lr, { className: "sticky top-0 z-40 -mx-6 bg-background/60 p-6 backdrop-blur", children: [
          /* @__PURE__ */ a.jsx(Ir, { children: m }),
          /* @__PURE__ */ a.jsx(Br, { children: f })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "group/datalist", children: /* @__PURE__ */ a.jsxs(Dt, { children: [
          /* @__PURE__ */ a.jsx(Et, { children: /* @__PURE__ */ a.jsxs(V, { children: [
            /* @__PURE__ */ a.jsx(H, { children: "Source" }),
            /* @__PURE__ */ a.jsx(H, { className: "w-[110px] text-right", children: /* @__PURE__ */ a.jsx(fe, { activeSortBy: l, setSortBy: x, sortBy: "free_members desc", children: "Free members" }) }),
            (c == null ? void 0 : c.paidMembersEnabled) && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
              /* @__PURE__ */ a.jsx(H, { className: "w-[110px] text-right", children: /* @__PURE__ */ a.jsx(fe, { activeSortBy: l, setSortBy: x, sortBy: "paid_members desc", children: "Paid members" }) }),
              /* @__PURE__ */ a.jsx(H, { className: "w-[110px] text-right", children: /* @__PURE__ */ a.jsx(fe, { activeSortBy: l, setSortBy: x, sortBy: "mrr desc", children: "MRR impact" }) })
            ] })
          ] }) }),
          /* @__PURE__ */ a.jsx(
            bt,
            {
              currencySymbol: _,
              data: b,
              defaultSourceIconUrl: g
            }
          )
        ] }) })
      ] })
    ] }) }) }) })
  ] }) : /* @__PURE__ */ a.jsx(ve, { children: /* @__PURE__ */ a.jsx(V, { className: "last:border-none", children: /* @__PURE__ */ a.jsx(B, { className: "border-none py-12 group-hover:bg-transparent!", colSpan: c != null && c.paidMembersEnabled ? 4 : 2, children: /* @__PURE__ */ a.jsx(Ft, {}) }) }) });
}, qa = "TiersResponseType", Qa = Yt({
  dataType: qa,
  path: "/tiers/",
  defaultNextPageParams: (t, e) => {
    var n;
    return {
      ...e,
      page: (((n = t.meta) == null ? void 0 : n.pagination.next) || 1).toString()
    };
  },
  returnData: (t) => {
    const { pages: e } = t, n = e.flatMap((s) => s.tiers), r = e[e.length - 1].meta;
    return {
      tiers: n,
      meta: r,
      isEnd: r ? r.pagination.pages === r.pagination.page : !0
    };
  }
}), Za = ({ active: t, payload: e }) => {
  if (t && e && e.length) {
    const n = e[0];
    return /* @__PURE__ */ a.jsx("div", { className: "rounded-lg border bg-background p-2 shadow-sm", children: /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ a.jsx(
        "div",
        {
          className: "size-2 rounded-full opacity-50",
          style: { backgroundColor: n.payload.color }
        }
      ),
      /* @__PURE__ */ a.jsx("span", { className: "font-medium", children: n.name }),
      /* @__PURE__ */ a.jsx("span", { className: "font-mono", children: T(n.value) })
    ] }) });
  }
  return null;
}, Ja = ({ isLoading: t, range: e }) => {
  const { data: n } = br(), { data: r } = xr({
    searchParams: {
      date_from: ae(me(e).startDate)
    }
  }), { data: { tiers: s = [] } = {} } = Qa(), [o, i] = re("billing-period"), { startDate: c, endDate: p } = L(() => me(e), [e]), d = L(() => ae(c), [c]), l = L(() => ae(p), [p]), x = L(() => s.filter((f) => f.type === "paid" && f.active).map((f) => ({
    id: f.id,
    name: f.name
  })), [s]), y = L(() => {
    if (!(r != null && r.stats) || r.stats.length === 0)
      return 0;
    const f = r.stats, A = $(d), C = $(l), O = f.filter((S) => {
      const E = $(S.date);
      return E.isSameOrAfter(A) && E.isSameOrBefore(C);
    });
    if (O.length === 0)
      return 0;
    const j = [...O].sort(
      (S, E) => new Date(S.date).getTime() - new Date(E.date).getTime()
    ), v = j[0].comped, P = j[j.length - 1].comped - v;
    return P > 0 ? P : 0;
  }, [r, d, l]), h = L(() => {
    if (!(n != null && n.stats))
      return [];
    const f = $(d), A = $(l), C = n.stats.filter((j) => {
      const v = $(j.date);
      return v.isSameOrAfter(f) && v.isSameOrBefore(A);
    }).reduce((j, v) => {
      const k = v.cadence;
      return j[k] || (j[k] = 0), j[k] += v.signups, j;
    }, {});
    return y > 0 && (C.complimentary = y), Object.entries(C).map(([j, v], k) => {
      let P = j, S = "url(#gradientPurple)", E = "var(--chart-purple)";
      return j === "month" ? (P = "Monthly", S = "url(#gradientPurple)", E = "var(--chart-purple)") : j === "year" ? (P = "Annual", S = "url(#gradientTeal)", E = "var(--chart-teal)") : j === "complimentary" && (P = "Complimentary", S = "url(#gradientBlue)", E = "var(--chart-blue)"), {
        id: `cadence-${k}`,
        name: P,
        count: v,
        fill: S,
        color: E
      };
    });
  }, [n, d, l, y]), w = L(() => {
    if (!(n != null && n.stats) || x.length === 0)
      return [];
    const f = $(d), A = $(l), C = n.stats.filter((P) => {
      const S = $(P.date);
      return S.isSameOrAfter(f) && S.isSameOrBefore(A);
    }).reduce((P, S) => {
      const E = S.tier;
      return P[E] || (P[E] = 0), P[E] += S.signups, P;
    }, {}), O = [
      { gradient: "url(#gradientPurple)", solid: "var(--chart-purple)" },
      { gradient: "url(#gradientTeal)", solid: "var(--chart-teal)" },
      { gradient: "url(#gradientBlue)", solid: "var(--chart-blue)" },
      { gradient: "url(#gradientRose)", solid: "var(--chart-rose)" },
      { gradient: "url(#gradientOrange)", solid: "var(--chart-orange)" },
      { gradient: "url(#gradientGreen)", solid: "var(--chart-green)" },
      { gradient: "url(#gradientAmber)", solid: "var(--chart-amber)" },
      { gradient: "url(#gradientYellow)", solid: "var(--chart-yellow)" },
      { gradient: "url(#gradientDarkblue)", solid: "var(--chart-darkblue)" },
      { gradient: "url(#gradientGray)", solid: "var(--chart-darkgray)" }
    ];
    return [...x.map((P) => {
      const S = C[P.id] || 0;
      return {
        id: P.id,
        name: P.name,
        count: S
      };
    })].sort((P, S) => S.count - P.count).map((P, S) => {
      const E = S % O.length;
      return {
        ...P,
        fill: O[E].gradient,
        color: O[E].solid
      };
    });
  }, [n, x, d, l]), u = o === "billing-period" ? h : w, g = L(() => u.reduce((f, A) => f + A.count, 0), [u]), _ = L(() => {
    const f = {
      count: {
        label: "Subscriptions"
      }
    };
    return u.forEach((A) => {
      f[A.id] = {
        label: A.name,
        color: A.color
      };
    }), f;
  }, [u]), b = L(() => g === 0 ? [] : u.map((f) => ({
    label: f.name,
    count: f.count,
    percentage: f.count / g * 100,
    color: f.color
  })), [u, g]);
  if (t || !(n != null && n.stats))
    return null;
  const m = u.length > 0 && g > 0;
  return /* @__PURE__ */ a.jsxs(Te, { children: [
    /* @__PURE__ */ a.jsx(Xe, { children: /* @__PURE__ */ a.jsxs("div", { className: "flex items-start justify-between gap-1.5", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col gap-1.5", children: [
        /* @__PURE__ */ a.jsx(et, { children: "Paid subscription breakdown" }),
        /* @__PURE__ */ a.jsxs(tt, { children: [
          "New paid subscriptions ",
          Q(e)
        ] })
      ] }),
      x.length > 1 && /* @__PURE__ */ a.jsx("div", { children: /* @__PURE__ */ a.jsxs(kt, { value: o, onValueChange: (f) => i(f), children: [
        /* @__PURE__ */ a.jsx(Ot, { className: "w-full", children: /* @__PURE__ */ a.jsx(_t, {}) }),
        /* @__PURE__ */ a.jsxs(Pt, { align: "end", children: [
          /* @__PURE__ */ a.jsx(Fe, { value: "billing-period", children: "Billing period" }),
          /* @__PURE__ */ a.jsx(Fe, { value: "tiers", children: "Tiers" })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ a.jsx(Se, { children: m ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(
        Nt,
        {
          className: "mx-auto aspect-square h-[250px] min-h-[250px] w-full",
          config: _,
          children: /* @__PURE__ */ a.jsxs(Va, { children: [
            /* @__PURE__ */ a.jsxs("defs", { children: [
              /* @__PURE__ */ a.jsxs("linearGradient", { id: "gradientPurple", x1: "0", x2: "0", y1: "0", y2: "1", children: [
                /* @__PURE__ */ a.jsx("stop", { offset: "0%", stopColor: "var(--chart-purple)", stopOpacity: 0.8 }),
                /* @__PURE__ */ a.jsx("stop", { offset: "100%", stopColor: "var(--chart-purple)", stopOpacity: 0.6 })
              ] }),
              /* @__PURE__ */ a.jsxs("linearGradient", { id: "gradientTeal", x1: "0", x2: "0", y1: "0", y2: "1", children: [
                /* @__PURE__ */ a.jsx("stop", { offset: "0%", stopColor: "var(--chart-teal)", stopOpacity: 0.8 }),
                /* @__PURE__ */ a.jsx("stop", { offset: "100%", stopColor: "var(--chart-teal)", stopOpacity: 0.6 })
              ] }),
              /* @__PURE__ */ a.jsxs("linearGradient", { id: "gradientRose", x1: "0", x2: "0", y1: "0", y2: "1", children: [
                /* @__PURE__ */ a.jsx("stop", { offset: "0%", stopColor: "var(--chart-rose)", stopOpacity: 0.8 }),
                /* @__PURE__ */ a.jsx("stop", { offset: "100%", stopColor: "var(--chart-rose)", stopOpacity: 0.6 })
              ] }),
              /* @__PURE__ */ a.jsxs("linearGradient", { id: "gradientBlue", x1: "0", x2: "0", y1: "0", y2: "1", children: [
                /* @__PURE__ */ a.jsx("stop", { offset: "0%", stopColor: "var(--chart-blue)", stopOpacity: 0.8 }),
                /* @__PURE__ */ a.jsx("stop", { offset: "100%", stopColor: "var(--chart-blue)", stopOpacity: 0.6 })
              ] }),
              /* @__PURE__ */ a.jsxs("linearGradient", { id: "gradientOrange", x1: "0", x2: "0", y1: "0", y2: "1", children: [
                /* @__PURE__ */ a.jsx("stop", { offset: "0%", stopColor: "var(--chart-orange)", stopOpacity: 0.8 }),
                /* @__PURE__ */ a.jsx("stop", { offset: "100%", stopColor: "var(--chart-orange)", stopOpacity: 0.6 })
              ] }),
              /* @__PURE__ */ a.jsxs("linearGradient", { id: "gradientGreen", x1: "0", x2: "0", y1: "0", y2: "1", children: [
                /* @__PURE__ */ a.jsx("stop", { offset: "0%", stopColor: "var(--chart-green)", stopOpacity: 0.8 }),
                /* @__PURE__ */ a.jsx("stop", { offset: "100%", stopColor: "var(--chart-green)", stopOpacity: 0.6 })
              ] }),
              /* @__PURE__ */ a.jsxs("linearGradient", { id: "gradientAmber", x1: "0", x2: "0", y1: "0", y2: "1", children: [
                /* @__PURE__ */ a.jsx("stop", { offset: "0%", stopColor: "var(--chart-amber)", stopOpacity: 0.8 }),
                /* @__PURE__ */ a.jsx("stop", { offset: "100%", stopColor: "var(--chart-amber)", stopOpacity: 0.6 })
              ] }),
              /* @__PURE__ */ a.jsxs("linearGradient", { id: "gradientYellow", x1: "0", x2: "0", y1: "0", y2: "1", children: [
                /* @__PURE__ */ a.jsx("stop", { offset: "0%", stopColor: "var(--chart-yellow)", stopOpacity: 0.8 }),
                /* @__PURE__ */ a.jsx("stop", { offset: "100%", stopColor: "var(--chart-yellow)", stopOpacity: 0.6 })
              ] }),
              /* @__PURE__ */ a.jsxs("linearGradient", { id: "gradientDarkblue", x1: "0", x2: "0", y1: "0", y2: "1", children: [
                /* @__PURE__ */ a.jsx("stop", { offset: "0%", stopColor: "var(--chart-darkblue)", stopOpacity: 0.8 }),
                /* @__PURE__ */ a.jsx("stop", { offset: "100%", stopColor: "var(--chart-darkblue)", stopOpacity: 0.6 })
              ] }),
              /* @__PURE__ */ a.jsxs("linearGradient", { id: "gradientGray", x1: "0", x2: "0", y1: "0", y2: "1", children: [
                /* @__PURE__ */ a.jsx("stop", { offset: "0%", stopColor: "var(--chart-darkgray)", stopOpacity: 0.8 }),
                /* @__PURE__ */ a.jsx("stop", { offset: "100%", stopColor: "var(--chart-darkgray)", stopOpacity: 0.6 })
              ] })
            ] }),
            /* @__PURE__ */ a.jsx(
              Tt,
              {
                content: /* @__PURE__ */ a.jsx(Za, {}),
                cursor: !1
              }
            ),
            /* @__PURE__ */ a.jsx(
              Y,
              {
                animationBegin: 0,
                animationDuration: 1e3,
                data: u,
                dataKey: "count",
                innerRadius: 70,
                nameKey: "name",
                strokeWidth: 5,
                children: /* @__PURE__ */ a.jsx(
                  Ze,
                  {
                    content: ({ viewBox: f }) => {
                      if (f && "cx" in f && "cy" in f)
                        return /* @__PURE__ */ a.jsxs(
                          "text",
                          {
                            dominantBaseline: "middle",
                            textAnchor: "middle",
                            x: f.cx,
                            y: f.cy,
                            children: [
                              /* @__PURE__ */ a.jsx(
                                "tspan",
                                {
                                  className: "fill-foreground text-2xl font-semibold tracking-tight",
                                  x: f.cx,
                                  y: f.cy,
                                  children: T(g)
                                }
                              ),
                              /* @__PURE__ */ a.jsx(
                                "tspan",
                                {
                                  className: "fill-muted-foreground",
                                  x: f.cx,
                                  y: (f.cy || 0) + 20,
                                  children: "Total"
                                }
                              )
                            ]
                          }
                        );
                    }
                  }
                )
              }
            )
          ] })
        }
      ),
      b.length > 0 && /* @__PURE__ */ a.jsx("div", { className: "mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-sm text-muted-foreground", children: b.map((f) => /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ a.jsx(
          "span",
          {
            className: "size-2 rounded-full opacity-50",
            style: { backgroundColor: f.color }
          }
        ),
        /* @__PURE__ */ a.jsx("span", { className: "max-w-[150px] truncate whitespace-nowrap", title: f.label, children: f.label }),
        /* @__PURE__ */ a.jsxs("span", { className: "font-medium text-foreground", children: [
          Math.round(Number(f.percentage) || 0),
          "%"
        ] })
      ] }, f.label)) })
    ] }) : /* @__PURE__ */ a.jsx("div", { className: "py-12", children: /* @__PURE__ */ a.jsx(
      we,
      {
        description: `No new paid subscriptions ${Q(e)}.`,
        title: "No new subscribers",
        children: /* @__PURE__ */ a.jsx(gr, { strokeWidth: 1.5 })
      }
    ) }) })
  ] });
}, Xa = (t, e, n) => {
  if (e === 1) {
    const l = $().format("YYYY-MM-DD"), x = t.find((y) => y.date === l);
    return [{
      date: l,
      signups: (x == null ? void 0 : x.signups) || 0,
      cancellations: (x == null ? void 0 : x.cancellations) || 0
    }];
  }
  const { startDate: r, endDate: s } = me(e), o = $(s).diff($(r), "days"), i = kr(e, o, "sum", n), c = new Map(t.map((l) => [l.date, l])), p = [], d = /* @__PURE__ */ new Set();
  if (i === "monthly") {
    const l = $(r).startOf("month"), x = $(s).startOf("month");
    for (; l.isSameOrBefore(x); ) {
      const y = l.format("YYYY-MM-DD");
      if (!d.has(y)) {
        d.add(y);
        const h = c.get(y);
        h ? p.push(h) : p.push({
          date: y,
          signups: 0,
          cancellations: 0
        });
      }
      l.add(1, "month");
    }
  } else if (i === "weekly") {
    const l = $(r).startOf("week"), x = $(s).startOf("week");
    for (; l.isSameOrBefore(x); ) {
      const y = l.format("YYYY-MM-DD");
      if (!d.has(y)) {
        d.add(y);
        const h = c.get(y);
        h ? p.push(h) : p.push({
          date: y,
          signups: 0,
          cancellations: 0
        });
      }
      l.add(1, "week");
    }
  } else {
    const l = $(r), x = $(s);
    for (; l.isSameOrBefore(x); ) {
      const y = l.format("YYYY-MM-DD"), h = c.get(y);
      h ? p.push(h) : p.push({
        date: y,
        signups: 0,
        cancellations: 0
      }), l.add(1, "day");
    }
  }
  return p;
}, Kt = (t) => {
  if (t === -1) {
    const { startDate: e, endDate: n } = me(t);
    return $(n).diff($(e), "days");
  }
  return t;
}, en = (t) => {
  const e = Kt(t);
  return e < 30 ? ["daily"] : e >= 91 ? ["weekly", "monthly"] : ["daily", "weekly"];
}, xt = (t) => {
  const e = Kt(t);
  return e < 30 ? "daily" : e >= 91 ? "monthly" : "weekly";
}, tn = ({
  subscriptionData: t,
  memberData: e,
  range: n,
  isLoading: r
}) => {
  const [s, o] = re(() => xt(n));
  He(() => {
    o(xt(n));
  }, [n]);
  const i = L(() => en(n), [n]), c = L(() => {
    switch (s) {
      case "daily":
        return "none";
      case "weekly":
        return "weekly";
      case "monthly":
        return "monthly";
    }
  }, [s]), p = L(() => {
    if (t && t.length > 0) {
      if (n === 1) {
        const m = $().format("YYYY-MM-DD"), f = t.find((A) => A.date === m);
        return [{
          date: U(m, n),
          rawDate: m,
          // Keep raw date for dynamic tooltip formatting
          new: (f == null ? void 0 : f.signups) || 0,
          cancelled: -((f == null ? void 0 : f.cancellations) || 0)
          // Negative for the stacked bar chart
        }];
      }
      const h = ge(t, n, "signups", "sum", c), w = ge(t, n, "cancellations", "sum", c), u = new Map(w.map((m) => [m.date, m])), g = h.map((m) => {
        var f;
        return {
          date: m.date,
          signups: m.signups || 0,
          cancellations: ((f = u.get(m.date)) == null ? void 0 : f.cancellations) || 0
        };
      }), _ = new Set(g.map((m) => m.date));
      return w.forEach((m) => {
        _.has(m.date) || g.push({
          date: m.date,
          signups: 0,
          cancellations: m.cancellations || 0
        });
      }), g.sort((m, f) => new Date(m.date).getTime() - new Date(f.date).getTime()), Xa(g, n, c).map((m) => {
        let f = n;
        return s === "weekly" && n < 91 ? f = 91 : s === "monthly" && n < 365 && (f = 365), {
          date: U(m.date, f),
          rawDate: m.date,
          // Keep raw date for dynamic tooltip formatting
          new: m.signups || 0,
          cancelled: -(m.cancellations || 0)
          // Negative for the stacked bar chart
        };
      });
    } else {
      if (!e || e.length === 0)
        return [];
      if (n === 1) {
        const b = $().format("YYYY-MM-DD"), m = e.find((f) => f.date === b);
        return [{
          date: U(b, n),
          rawDate: b,
          // Keep raw date for dynamic tooltip formatting
          new: (m == null ? void 0 : m.paid_subscribed) || 0,
          cancelled: -((m == null ? void 0 : m.paid_canceled) || 0)
          // Negative for the stacked bar chart
        }];
      }
      const h = ge(e, n, "paid_subscribed", "sum", c), w = ge(e, n, "paid_canceled", "sum", c), u = new Map(w.map((b) => [b.date, b])), g = h.map((b) => {
        var m;
        return {
          date: b.date,
          paid_subscribed: b.paid_subscribed || 0,
          paid_canceled: ((m = u.get(b.date)) == null ? void 0 : m.paid_canceled) || 0
        };
      }), _ = new Set(g.map((b) => b.date));
      return w.forEach((b) => {
        _.has(b.date) || g.push({
          date: b.date,
          paid_subscribed: 0,
          paid_canceled: b.paid_canceled || 0
        });
      }), g.sort((b, m) => new Date(b.date).getTime() - new Date(m.date).getTime()), g.map((b) => {
        let m = n;
        return s === "weekly" && n < 91 ? m = 91 : s === "monthly" && n < 365 && (m = 365), {
          date: U(b.date, m),
          rawDate: b.date,
          // Keep raw date for dynamic tooltip formatting
          new: b.paid_subscribed || 0,
          cancelled: -(b.paid_canceled || 0)
          // Negative for the stacked bar chart
        };
      });
    }
  }, [e, t, n, c, s]), d = {
    new: {
      label: "New",
      color: "var(--chart-teal)"
    },
    cancelled: {
      label: "Cancelled",
      color: "var(--chart-rose)"
    }
  }, l = L(() => {
    const h = p.reduce((u, g) => u + g.new, 0), w = p.reduce((u, g) => u + Math.abs(g.cancelled), 0);
    return { new: h, cancelled: w };
  }, [p]);
  if (r)
    return null;
  const x = p.length > 0 && (l.new > 0 || l.cancelled > 0), y = (h) => h.charAt(0).toUpperCase() + h.slice(1);
  return /* @__PURE__ */ a.jsxs(Te, { "data-testid": "paid-members-change-card", children: [
    /* @__PURE__ */ a.jsx(Xe, { children: /* @__PURE__ */ a.jsxs("div", { className: "flex items-start justify-between gap-1.5", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col gap-1.5", children: [
        /* @__PURE__ */ a.jsx(et, { children: "Paid subscriptions" }),
        /* @__PURE__ */ a.jsxs(tt, { children: [
          "New and cancelled paid subscriptions ",
          Q(n)
        ] })
      ] }),
      i.length > 1 && /* @__PURE__ */ a.jsx("div", { children: /* @__PURE__ */ a.jsxs(kt, { value: s, onValueChange: (h) => o(h), children: [
        /* @__PURE__ */ a.jsx(Ot, { className: "w-[110px]", children: /* @__PURE__ */ a.jsx(_t, {}) }),
        /* @__PURE__ */ a.jsx(Pt, { align: "end", children: i.map((h) => /* @__PURE__ */ a.jsx(Fe, { value: h, children: y(h) }, h)) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ a.jsx(Se, { children: x ? /* @__PURE__ */ a.jsxs("div", { children: [
      /* @__PURE__ */ a.jsx(Nt, { className: "aspect-auto h-[200px] w-full md:h-[220px] xl:h-[260px]", config: d, children: /* @__PURE__ */ a.jsxs(
        zr,
        {
          data: p,
          stackOffset: "sign",
          children: [
            /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsxs("linearGradient", { id: "tealGradient", x1: "0", x2: "0", y1: "0", y2: "1", children: [
              /* @__PURE__ */ a.jsx("stop", { offset: "0%", stopColor: "var(--color-new)", stopOpacity: 0.8 }),
              /* @__PURE__ */ a.jsx("stop", { offset: "100%", stopColor: "var(--color-new)", stopOpacity: 0.6 })
            ] }) }),
            /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsxs("linearGradient", { id: "roseGradient", x1: "0", x2: "0", y1: "0", y2: "1", children: [
              /* @__PURE__ */ a.jsx("stop", { offset: "0%", stopColor: "var(--color-cancelled)", stopOpacity: 0.6 }),
              /* @__PURE__ */ a.jsx("stop", { offset: "100%", stopColor: "var(--color-cancelled)", stopOpacity: 0.8 })
            ] }) }),
            /* @__PURE__ */ a.jsx(vr, { stroke: "var(--border)", vertical: !1 }),
            /* @__PURE__ */ a.jsx(
              yr,
              {
                axisLine: !1,
                dataKey: "date",
                tickFormatter: () => "",
                tickLine: !1,
                tickMargin: 10
              }
            ),
            /* @__PURE__ */ a.jsx(
              jr,
              {
                axisLine: !1,
                tickFormatter: (h) => h < 0 ? T(h * -1) : T(h),
                tickLine: !1
              }
            ),
            /* @__PURE__ */ a.jsx(
              Tt,
              {
                content: /* @__PURE__ */ a.jsx(
                  wr,
                  {
                    className: "min-w-[120px]! px-3 py-2",
                    formatter: (h, w, u, g) => {
                      var j, v, k, P, S;
                      const _ = Number(h);
                      let b = "0";
                      _ === 0 ? b = "0" : b = _ < 0 ? T(_ * -1) : T(_);
                      const m = Number(((j = u == null ? void 0 : u.payload) == null ? void 0 : j.new) || 0), f = Number(((v = u == null ? void 0 : u.payload) == null ? void 0 : v.cancelled) || 0), A = m + f, C = A === 0 ? "0" : A > 0 ? `+${T(A)}` : T(A);
                      let O = (k = u == null ? void 0 : u.payload) == null ? void 0 : k.date;
                      return (P = u == null ? void 0 : u.payload) != null && P.rawDate && (s === "monthly" ? O = U(u.payload.rawDate, 366) : s === "weekly" ? O = U(u.payload.rawDate, 91) : O = U(u.payload.rawDate, 30)), /* @__PURE__ */ a.jsxs("div", { className: "flex w-full flex-col", children: [
                        g === 0 && /* @__PURE__ */ a.jsx("div", { className: "mb-1 text-sm font-medium text-foreground", children: O }),
                        /* @__PURE__ */ a.jsxs("div", { className: "flex w-full items-center justify-between gap-4", children: [
                          /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-1", children: [
                            /* @__PURE__ */ a.jsx(
                              "div",
                              {
                                className: "size-2 shrink-0 rounded-full bg-[var(--color-bg)] opacity-50",
                                style: {
                                  "--color-bg": `var(--color-${w})`
                                }
                              }
                            ),
                            /* @__PURE__ */ a.jsx("span", { className: "text-sm text-muted-foreground", children: ((S = d[w]) == null ? void 0 : S.label) || w })
                          ] }),
                          /* @__PURE__ */ a.jsx("div", { className: "ml-auto flex items-baseline gap-0.5 font-mono font-medium text-foreground tabular-nums", children: b })
                        ] }),
                        g === 1 && /* @__PURE__ */ a.jsxs("div", { className: "mt-1 flex w-full items-center justify-between gap-4 border-t pt-1", children: [
                          /* @__PURE__ */ a.jsx("span", { className: "text-sm text-muted-foreground", children: "Net change" }),
                          /* @__PURE__ */ a.jsx("div", { className: "ml-auto flex items-baseline gap-0.5 font-mono font-medium text-foreground tabular-nums", children: C })
                        ] })
                      ] });
                    },
                    hideLabel: !0
                  }
                ),
                cursor: !1,
                isAnimationActive: !1,
                position: { y: 10 }
              }
            ),
            /* @__PURE__ */ a.jsx(
              st,
              {
                activeBar: { fillOpacity: 1 },
                dataKey: "new",
                fill: "url(#tealGradient)",
                fillOpacity: 0.75,
                maxBarSize: 32,
                minPointSize: 3,
                radius: [4, 4, 0, 0],
                stackId: "a"
              }
            ),
            /* @__PURE__ */ a.jsx(
              st,
              {
                activeBar: { fillOpacity: 1 },
                dataKey: "cancelled",
                fill: "url(#roseGradient)",
                fillOpacity: 0.75,
                maxBarSize: 32,
                radius: [4, 4, 0, 0],
                stackId: "a"
              }
            )
          ]
        }
      ) }),
      /* @__PURE__ */ a.jsxs("div", { className: "mt-3 flex items-center justify-center gap-6 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ a.jsx(
            "span",
            {
              className: "size-2 rounded-full opacity-50",
              style: {
                backgroundColor: d.new.color
              }
            }
          ),
          /* @__PURE__ */ a.jsx("span", { children: "New" }),
          /* @__PURE__ */ a.jsx("span", { className: "font-medium text-foreground", children: T(l.new) })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ a.jsx(
            "span",
            {
              className: "size-2 rounded-full opacity-50",
              style: {
                backgroundColor: d.cancelled.color
              }
            }
          ),
          /* @__PURE__ */ a.jsx("span", { children: "Cancelled" }),
          /* @__PURE__ */ a.jsx("span", { className: "font-medium text-foreground", children: T(l.cancelled) })
        ] })
      ] })
    ] }) : /* @__PURE__ */ a.jsx("div", { className: "py-12", children: /* @__PURE__ */ a.jsx(
      we,
      {
        description: `No paid subscription changes ${Q(n)}.`,
        title: "No paid member changes",
        children: /* @__PURE__ */ a.jsx(Ar, { strokeWidth: 1.5 })
      }
    ) }) })
  ] });
}, rn = (t, e, n) => {
  const r = t ?? 30, s = e ?? "mrr desc", { startDate: o, endDate: i } = L(() => me(r), [r]), c = L(() => {
    const l = {
      date_from: ae(o),
      date_to: ae(i),
      order: s
    };
    return n === "posts" ? l.post_type = "post" : n === "pages" && (l.post_type = "page"), l;
  }, [o, i, s, n]), p = Object.fromEntries(
    Object.entries(c).filter(([, l]) => l !== void 0)
  );
  return Or({ searchParams: p });
}, un = () => {
  var j;
  const { range: t, site: e, settings: n } = Ue(), r = String(((j = n.find((v) => v.key === "timezone")) == null ? void 0 : j.value) || "Etc/UTC"), s = We(), [o, i] = re("free_members desc"), [c, p] = re(se.POSTS_AND_PAGES), [d] = vt(), { appSettings: l } = Re(), x = d.get("tab") || "total-members", [y, h] = re(x);
  He(() => {
    x !== y && h(x);
  }, [x]);
  const { isLoading: w, chartData: u, totals: g, currencySymbol: _, subscriptionData: b } = Wr(t), { data: m, isLoading: f } = rn(
    t,
    o,
    c
  ), A = L(() => {
    const k = ((m == null ? void 0 : m.stats) || []).reduce((D, M) => {
      const Z = M.post_id || (M.title && M.title.trim() !== "" ? M.title : M.attribution_url);
      if (!Z)
        return D;
      if (!D.has(Z))
        D.set(Z, M);
      else {
        const ne = D.get(Z);
        ne.free_members += M.free_members, ne.paid_members += M.paid_members, ne.mrr += M.mrr, D.set(Z, ne);
      }
      return D;
    }, /* @__PURE__ */ new Map()), P = Array.from(k.values()), S = P.reduce((D, M) => D + M.free_members, 0), E = P.reduce((D, M) => D + M.paid_members, 0), xe = P.reduce((D, M) => D + M.mrr, 0);
    return P.map((D) => {
      let M = 0;
      return o.includes("free_members") && S > 0 ? M = D.free_members / S : o.includes("paid_members") && E > 0 ? M = D.paid_members / E : o.includes("mrr") && xe > 0 && (M = D.mrr / xe), {
        title: D.title || D.attribution_url,
        post_id: D.post_id,
        attribution_url: D.attribution_url,
        attribution_type: D.attribution_type,
        attribution_id: D.attribution_id,
        free_members: D.free_members,
        paid_members: D.paid_members,
        mrr: D.mrr,
        percentage: M,
        published_at: D.published_at,
        url_exists: D.url_exists ?? !0
      };
    });
  }, [m, o]), C = w, O = w || f;
  return /* @__PURE__ */ a.jsxs(_r, { children: [
    /* @__PURE__ */ a.jsx(Pr, { children: /* @__PURE__ */ a.jsx(Nr, { children: /* @__PURE__ */ a.jsx(Tr, {}) }) }),
    /* @__PURE__ */ a.jsxs(Sr, { data: C ? void 0 : u, isLoading: !1, loadingComponent: /* @__PURE__ */ a.jsx(a.Fragment, {}), children: [
      /* @__PURE__ */ a.jsx(Te, { "data-testid": "total-members-card", children: /* @__PURE__ */ a.jsx(Se, { children: /* @__PURE__ */ a.jsx(
        za,
        {
          chartData: u,
          currencySymbol: _,
          initialTab: x,
          isLoading: C,
          totals: g,
          onTabChange: h
        }
      ) }) }),
      (l == null ? void 0 : l.paidMembersEnabled) && y === "paid-members" && /* @__PURE__ */ a.jsxs("div", { className: "grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-[2fr_minmax(460px,1fr)]", children: [
        /* @__PURE__ */ a.jsx(
          tn,
          {
            isLoading: C,
            memberData: u,
            range: t,
            subscriptionData: b
          }
        ),
        /* @__PURE__ */ a.jsx(Ja, { isLoading: C, range: t })
      ] }),
      /* @__PURE__ */ a.jsxs(Te, { className: "w-full overflow-x-auto", "data-testid": "top-content-card", children: [
        /* @__PURE__ */ a.jsxs(Xe, { children: [
          /* @__PURE__ */ a.jsx(et, { children: Kr(c) }),
          /* @__PURE__ */ a.jsx(tt, { children: Vr(c, t, Q) })
        ] }),
        /* @__PURE__ */ a.jsx(Se, { children: /* @__PURE__ */ a.jsxs(Dt, { children: [
          /* @__PURE__ */ a.jsx(Et, { children: /* @__PURE__ */ a.jsxs(V, { className: "[&>th]:h-auto [&>th]:pt-0 [&>th]:pb-2", children: [
            /* @__PURE__ */ a.jsx(H, { className: "min-w-[320px] pl-0", children: /* @__PURE__ */ a.jsx(St, { defaultValue: c, variant: "button-sm", onValueChange: (v) => {
              p(v);
            }, children: /* @__PURE__ */ a.jsxs(Ct, { children: [
              /* @__PURE__ */ a.jsx(_e, { value: se.POSTS_AND_PAGES, children: "Posts & pages" }),
              /* @__PURE__ */ a.jsx(_e, { value: se.POSTS, children: "Posts" }),
              /* @__PURE__ */ a.jsx(_e, { value: se.PAGES, children: "Pages" }),
              /* @__PURE__ */ a.jsx(_e, { value: se.SOURCES, children: "Sources" })
            ] }) }) }),
            /* @__PURE__ */ a.jsx(H, { className: "w-[140px] text-right", children: l != null && l.paidMembersEnabled ? /* @__PURE__ */ a.jsx(fe, { activeSortBy: o, setSortBy: i, sortBy: "free_members desc", children: "Free members" }) : /* @__PURE__ */ a.jsx(a.Fragment, { children: "Free members" }) }),
            (l == null ? void 0 : l.paidMembersEnabled) && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
              /* @__PURE__ */ a.jsx(H, { className: "w-[140px] text-right", children: /* @__PURE__ */ a.jsx(fe, { activeSortBy: o, setSortBy: i, sortBy: "paid_members desc", children: "Paid members" }) }),
              /* @__PURE__ */ a.jsx(H, { className: "w-[140px] text-right", children: /* @__PURE__ */ a.jsx(fe, { activeSortBy: o, setSortBy: i, sortBy: "mrr desc", children: "MRR impact" }) })
            ] })
          ] }) }),
          c === se.SOURCES ? /* @__PURE__ */ a.jsx(
            Ha,
            {
              limit: 20,
              range: t,
              setSortBy: (v) => i(v),
              showViewAll: !0,
              sortBy: o
            }
          ) : /* @__PURE__ */ a.jsx(ve, { children: O ? /* @__PURE__ */ a.jsx(V, { className: "last:border-none", children: /* @__PURE__ */ a.jsx(B, { className: "border-none py-2", colSpan: 1, children: /* @__PURE__ */ a.jsx(At, { containerClassName: "space-y-2", count: 5, maxWidth: 75, randomize: !0 }) }) }) : l != null && l.analytics.membersTrackSources ? A.length > 0 ? A.map((v, k) => /* @__PURE__ */ a.jsxs(V, { className: "last:border-none", children: [
            /* @__PURE__ */ a.jsx(B, { children: /* @__PURE__ */ a.jsxs("div", { className: "group/link inline-flex flex-col items-start gap-px", children: [
              v.post_id && v.attribution_type === "post" ? /* @__PURE__ */ a.jsx(
                Je,
                {
                  className: "h-auto p-0 text-left leading-tight font-medium whitespace-normal hover:underline!",
                  title: "View post analytics",
                  variant: "link",
                  onClick: Hr(v.attribution_url, v.post_id, e.url || "", s, v.attribution_type),
                  children: v.title
                }
              ) : /* @__PURE__ */ a.jsx("span", { className: "font-medium", children: v.title }),
              v.published_at && rt && new Date(v.published_at).getTime() > 0 && /* @__PURE__ */ a.jsxs("span", { className: "text-muted-foreground", children: [
                "Published on ",
                rt(v.published_at, r)
              ] })
            ] }) }),
            /* @__PURE__ */ a.jsxs(B, { className: "text-right font-mono text-sm", children: [
              v.free_members > 0 && "+",
              T(v.free_members)
            ] }),
            (l == null ? void 0 : l.paidMembersEnabled) && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
              /* @__PURE__ */ a.jsxs(B, { className: "text-right font-mono text-sm", children: [
                v.paid_members > 0 && "+",
                T(v.paid_members)
              ] }),
              /* @__PURE__ */ a.jsxs(B, { className: "text-right font-mono text-sm", children: [
                v.mrr > 0 && "+",
                _,
                T(le(v.mrr))
              ] })
            ] })
          ] }, `${c}-${v.post_id || `${v.title}-${k}`}`)) : /* @__PURE__ */ a.jsx(V, { className: "border-none", children: /* @__PURE__ */ a.jsx(B, { className: "py-12 group-hover:bg-transparent!", colSpan: l != null && l.paidMembersEnabled ? 4 : 2, children: /* @__PURE__ */ a.jsx(
            we,
            {
              description: "Try adjusting your date range to see more data.",
              title: `No conversions ${Q(t)}`,
              children: /* @__PURE__ */ a.jsx(Cr, { strokeWidth: 1.5 })
            }
          ) }) }) : /* @__PURE__ */ a.jsx(V, { className: "last:border-none", children: /* @__PURE__ */ a.jsx(B, { className: "border-none py-12 group-hover:bg-transparent!", colSpan: l != null && l.paidMembersEnabled ? 4 : 2, children: /* @__PURE__ */ a.jsx(Ft, {}) }) }) })
        ] }) })
      ] })
    ] })
  ] });
};
export {
  un as default
};
//# sourceMappingURL=index-CZYqWc3Y.mjs.map
