import { q as I, R as b, C as _e, P as _t, s as fe, j as u, m as St, e as Y, f as Se, t as ot, p as Nt, u as Tt } from "./index-BWRct4la.mjs";
import { p as $t, e as Et, S as ze } from "./source-icon-DVM83hPy.mjs";
import { B as Le, H as Ct } from "./button-BOW1bLRE.mjs";
import { k as Dt, l as zt, C as st, a as Lt, b as Rt, g as It, c as lt, j as Vt, T as Bt } from "./post-analytics-header-Cj53GuIA.mjs";
import { m as Mt, n as S, G as ct, o as pe, p as Wt, q as L, r as Ft, s as me, t as C, u as Re, L as B, v as Kt, w as Gt, x as Ne, y as Te, z as Ht, A as Yt, B as Xt, C as Ie, E as ut, H as he, I as ie, J as ye, K as qt, N as K, O as Ve, P as Ut, Q as Be, R as Jt, V as Qt, W as Zt, X as Me, Y as We, Z as er, _ as tr, $ as rr, a0 as ir, a1 as nr, a2 as ar, a3 as or, a4 as sr, a5 as lr, D as cr, h as ur, i as Fe, a as fr, b as hr, c as dr, d as vr, e as pr, f as mr, g as yr, a6 as br, a7 as gr, a8 as Ke, a9 as ne, aa as xr } from "./data-list-BSCYRXjk.mjs";
import { S as Ge, a as He, b as Ye, c as Xe, d as qe, e as Ue } from "./sheet-CCZe4G23.mjs";
import { a as wr } from "./skeleton-DhEoQOK3.mjs";
import { S as Or, u as jr } from "./post-analytics-context-CJibQt1w.mjs";
import { D as Pr, b as kr, d as Ar, e as Je } from "./separator-eM4IfLr1.mjs";
import { d as Qe, e as xe, h as _r, s as Sr } from "./app-utils-bFFqatF8.mjs";
function ft(e, t, i) {
  if (t < 1)
    return [];
  if (t === 1 && i === void 0)
    return e;
  for (var r = [], n = 0; n < e.length; n += t)
    r.push(e[n]);
  return r;
}
function Nr(e, t, i) {
  var r = {
    width: e.width + t.width,
    height: e.height + t.height
  };
  return Mt(r, i);
}
function Tr(e, t, i) {
  var r = i === "width", n = e.x, a = e.y, o = e.width, l = e.height;
  return t === 1 ? {
    start: r ? n : a,
    end: r ? n + o : a + l
  } : {
    start: r ? n + o : a + l,
    end: r ? n : a
  };
}
function oe(e, t, i, r, n) {
  if (e * t < e * r || e * t > e * n)
    return !1;
  var a = i();
  return e * (t - e * a / 2 - r) >= 0 && e * (t + e * a / 2 - n) <= 0;
}
function $r(e, t) {
  return ft(e, t + 1);
}
function Er(e, t, i, r, n) {
  for (var a = (r || []).slice(), o = t.start, l = t.end, s = 0, f = 1, c = o, h = function() {
    var p = r == null ? void 0 : r[s];
    if (p === void 0)
      return {
        v: ft(r, f)
      };
    var y = s, m, j = function() {
      return m === void 0 && (m = i(p, y)), m;
    }, w = p.coordinate, g = s === 0 || oe(e, w, j, c, l);
    g || (s = 0, c = o, f += 1), g && (c = w + e * (j() / 2 + n), s += f);
  }, d; f <= a.length; )
    if (d = h(), d) return d.v;
  return [];
}
function te(e) {
  "@babel/helpers - typeof";
  return te = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, te(e);
}
function Ze(e, t) {
  var i = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), i.push.apply(i, r);
  }
  return i;
}
function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ze(Object(i), !0).forEach(function(r) {
      Cr(e, r, i[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : Ze(Object(i)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(i, r));
    });
  }
  return e;
}
function Cr(e, t, i) {
  return t = Dr(t), t in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = i, e;
}
function Dr(e) {
  var t = zr(e, "string");
  return te(t) == "symbol" ? t : t + "";
}
function zr(e, t) {
  if (te(e) != "object" || !e) return e;
  var i = e[Symbol.toPrimitive];
  if (i !== void 0) {
    var r = i.call(e, t);
    if (te(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Lr(e, t, i, r, n) {
  for (var a = (r || []).slice(), o = a.length, l = t.start, s = t.end, f = function(d) {
    var v = a[d], p, y = function() {
      return p === void 0 && (p = i(v, d)), p;
    };
    if (d === o - 1) {
      var m = e * (v.coordinate + e * y() / 2 - s);
      a[d] = v = N(N({}, v), {}, {
        tickCoord: m > 0 ? v.coordinate - m * e : v.coordinate
      });
    } else
      a[d] = v = N(N({}, v), {}, {
        tickCoord: v.coordinate
      });
    var j = oe(e, v.tickCoord, y, l, s);
    j && (s = v.tickCoord - e * (y() / 2 + n), a[d] = N(N({}, v), {}, {
      isShow: !0
    }));
  }, c = o - 1; c >= 0; c--)
    f(c);
  return a;
}
function Rr(e, t, i, r, n, a) {
  var o = (r || []).slice(), l = o.length, s = t.start, f = t.end;
  if (a) {
    var c = r[l - 1], h = i(c, l - 1), d = e * (c.coordinate + e * h / 2 - f);
    o[l - 1] = c = N(N({}, c), {}, {
      tickCoord: d > 0 ? c.coordinate - d * e : c.coordinate
    });
    var v = oe(e, c.tickCoord, function() {
      return h;
    }, s, f);
    v && (f = c.tickCoord - e * (h / 2 + n), o[l - 1] = N(N({}, c), {}, {
      isShow: !0
    }));
  }
  for (var p = a ? l - 1 : l, y = function(w) {
    var g = o[w], x, O = function() {
      return x === void 0 && (x = i(g, w)), x;
    };
    if (w === 0) {
      var P = e * (g.coordinate - e * O() / 2 - s);
      o[w] = g = N(N({}, g), {}, {
        tickCoord: P < 0 ? g.coordinate - P * e : g.coordinate
      });
    } else
      o[w] = g = N(N({}, g), {}, {
        tickCoord: g.coordinate
      });
    var k = oe(e, g.tickCoord, O, s, f);
    k && (s = g.tickCoord + e * (O() / 2 + n), o[w] = N(N({}, g), {}, {
      isShow: !0
    }));
  }, m = 0; m < p; m++)
    y(m);
  return o;
}
function $e(e, t, i) {
  var r = e.tick, n = e.ticks, a = e.viewBox, o = e.minTickGap, l = e.orientation, s = e.interval, f = e.tickFormatter, c = e.unit, h = e.angle;
  if (!n || !n.length || !r)
    return [];
  if (S(s) || ct.isSsr)
    return $r(n, typeof s == "number" && S(s) ? s : 0);
  var d = [], v = l === "top" || l === "bottom" ? "width" : "height", p = c && v === "width" ? pe(c, {
    fontSize: t,
    letterSpacing: i
  }) : {
    width: 0,
    height: 0
  }, y = function(g, x) {
    var O = L(f) ? f(g.value, x) : g.value;
    return v === "width" ? Nr(pe(O, {
      fontSize: t,
      letterSpacing: i
    }), p, h) : pe(O, {
      fontSize: t,
      letterSpacing: i
    })[v];
  }, m = n.length >= 2 ? Wt(n[1].coordinate - n[0].coordinate) : 1, j = Tr(a, m, v);
  return s === "equidistantPreserveStart" ? Er(m, j, y, n, o) : (s === "preserveStart" || s === "preserveStartEnd" ? d = Rr(m, j, y, n, o, s === "preserveStartEnd") : d = Lr(m, j, y, n, o), d.filter(function(w) {
    return w.isShow;
  }));
}
var Ir = ["viewBox"], Vr = ["viewBox"], Br = ["ticks"];
function X(e) {
  "@babel/helpers - typeof";
  return X = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, X(e);
}
function H() {
  return H = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = arguments[t];
      for (var r in i)
        Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
    }
    return e;
  }, H.apply(this, arguments);
}
function et(e, t) {
  var i = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), i.push.apply(i, r);
  }
  return i;
}
function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = arguments[t] != null ? arguments[t] : {};
    t % 2 ? et(Object(i), !0).forEach(function(r) {
      Ee(e, r, i[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : et(Object(i)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(i, r));
    });
  }
  return e;
}
function be(e, t) {
  if (e == null) return {};
  var i = Mr(e, t), r, n;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++)
      r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function Mr(e, t) {
  if (e == null) return {};
  var i = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      i[r] = e[r];
    }
  return i;
}
function Wr(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function tt(e, t) {
  for (var i = 0; i < t.length; i++) {
    var r = t[i];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, dt(r.key), r);
  }
}
function Fr(e, t, i) {
  return t && tt(e.prototype, t), i && tt(e, i), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Kr(e, t, i) {
  return t = se(t), Gr(e, ht() ? Reflect.construct(t, i || [], se(e).constructor) : t.apply(e, i));
}
function Gr(e, t) {
  if (t && (X(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Hr(e);
}
function Hr(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ht() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (ht = function() {
    return !!e;
  })();
}
function se(e) {
  return se = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(i) {
    return i.__proto__ || Object.getPrototypeOf(i);
  }, se(e);
}
function Yr(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && we(e, t);
}
function we(e, t) {
  return we = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, we(e, t);
}
function Ee(e, t, i) {
  return t = dt(t), t in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = i, e;
}
function dt(e) {
  var t = Xr(e, "string");
  return X(t) == "symbol" ? t : t + "";
}
function Xr(e, t) {
  if (X(e) != "object" || !e) return e;
  var i = e[Symbol.toPrimitive];
  if (i !== void 0) {
    var r = i.call(e, t);
    if (X(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Q = /* @__PURE__ */ function(e) {
  function t(i) {
    var r;
    return Wr(this, t), r = Kr(this, t, [i]), r.state = {
      fontSize: "",
      letterSpacing: ""
    }, r;
  }
  return Yr(t, e), Fr(t, [{
    key: "shouldComponentUpdate",
    value: function(r, n) {
      var a = r.viewBox, o = be(r, Ir), l = this.props, s = l.viewBox, f = be(l, Vr);
      return !me(a, s) || !me(o, f) || !me(n, this.state);
    }
  }, {
    key: "componentDidMount",
    value: function() {
      var r = this.layerReference;
      if (r) {
        var n = r.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
        n && this.setState({
          fontSize: window.getComputedStyle(n).fontSize,
          letterSpacing: window.getComputedStyle(n).letterSpacing
        });
      }
    }
    /**
     * Calculate the coordinates of endpoints in ticks
     * @param  {Object} data The data of a simple tick
     * @return {Object} (x1, y1): The coordinate of endpoint close to tick text
     *  (x2, y2): The coordinate of endpoint close to axis
     */
  }, {
    key: "getTickLineCoord",
    value: function(r) {
      var n = this.props, a = n.x, o = n.y, l = n.width, s = n.height, f = n.orientation, c = n.tickSize, h = n.mirror, d = n.tickMargin, v, p, y, m, j, w, g = h ? -1 : 1, x = r.tickSize || c, O = S(r.tickCoord) ? r.tickCoord : r.coordinate;
      switch (f) {
        case "top":
          v = p = r.coordinate, m = o + +!h * s, y = m - g * x, w = y - g * d, j = O;
          break;
        case "left":
          y = m = r.coordinate, p = a + +!h * l, v = p - g * x, j = v - g * d, w = O;
          break;
        case "right":
          y = m = r.coordinate, p = a + +h * l, v = p + g * x, j = v + g * d, w = O;
          break;
        default:
          v = p = r.coordinate, m = o + +h * s, y = m + g * x, w = y + g * d, j = O;
          break;
      }
      return {
        line: {
          x1: v,
          y1: y,
          x2: p,
          y2: m
        },
        tick: {
          x: j,
          y: w
        }
      };
    }
  }, {
    key: "getTickTextAnchor",
    value: function() {
      var r = this.props, n = r.orientation, a = r.mirror, o;
      switch (n) {
        case "left":
          o = a ? "start" : "end";
          break;
        case "right":
          o = a ? "end" : "start";
          break;
        default:
          o = "middle";
          break;
      }
      return o;
    }
  }, {
    key: "getTickVerticalAnchor",
    value: function() {
      var r = this.props, n = r.orientation, a = r.mirror, o = "end";
      switch (n) {
        case "left":
        case "right":
          o = "middle";
          break;
        case "top":
          o = a ? "start" : "end";
          break;
        default:
          o = a ? "end" : "start";
          break;
      }
      return o;
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var r = this.props, n = r.x, a = r.y, o = r.width, l = r.height, s = r.orientation, f = r.mirror, c = r.axisLine, h = A(A(A({}, C(this.props, !1)), C(c, !1)), {}, {
        fill: "none"
      });
      if (s === "top" || s === "bottom") {
        var d = +(s === "top" && !f || s === "bottom" && f);
        h = A(A({}, h), {}, {
          x1: n,
          y1: a + d * l,
          x2: n + o,
          y2: a + d * l
        });
      } else {
        var v = +(s === "left" && !f || s === "right" && f);
        h = A(A({}, h), {}, {
          x1: n + v * o,
          y1: a,
          x2: n + v * o,
          y2: a + l
        });
      }
      return /* @__PURE__ */ b.createElement("line", H({}, h, {
        className: I("recharts-cartesian-axis-line", Re(c, "className"))
      }));
    }
  }, {
    key: "renderTicks",
    value: (
      /**
       * render the ticks
       * @param {Array} ticks The ticks to actually render (overrides what was passed in props)
       * @param {string} fontSize Fontsize to consider for tick spacing
       * @param {string} letterSpacing Letterspacing to consider for tick spacing
       * @return {ReactComponent} renderedTicks
       */
      function(r, n, a) {
        var o = this, l = this.props, s = l.tickLine, f = l.stroke, c = l.tick, h = l.tickFormatter, d = l.unit, v = $e(A(A({}, this.props), {}, {
          ticks: r
        }), n, a), p = this.getTickTextAnchor(), y = this.getTickVerticalAnchor(), m = C(this.props, !1), j = C(c, !1), w = A(A({}, m), {}, {
          fill: "none"
        }, C(s, !1)), g = v.map(function(x, O) {
          var P = o.getTickLineCoord(x), k = P.line, _ = P.tick, $ = A(A(A(A({
            textAnchor: p,
            verticalAnchor: y
          }, m), {}, {
            stroke: "none",
            fill: f
          }, j), _), {}, {
            index: O,
            payload: x,
            visibleTicksCount: v.length,
            tickFormatter: h
          });
          return /* @__PURE__ */ b.createElement(B, H({
            className: "recharts-cartesian-axis-tick",
            key: "tick-".concat(x.value, "-").concat(x.coordinate, "-").concat(x.tickCoord)
          }, Kt(o.props, x, O)), s && /* @__PURE__ */ b.createElement("line", H({}, w, k, {
            className: I("recharts-cartesian-axis-tick-line", Re(s, "className"))
          })), c && t.renderTickItem(c, $, "".concat(L(h) ? h(x.value, O) : x.value).concat(d || "")));
        });
        return /* @__PURE__ */ b.createElement("g", {
          className: "recharts-cartesian-axis-ticks"
        }, g);
      }
    )
  }, {
    key: "render",
    value: function() {
      var r = this, n = this.props, a = n.axisLine, o = n.width, l = n.height, s = n.ticksGenerator, f = n.className, c = n.hide;
      if (c)
        return null;
      var h = this.props, d = h.ticks, v = be(h, Br), p = d;
      return L(s) && (p = d && d.length > 0 ? s(this.props) : s(v)), o <= 0 || l <= 0 || !p || !p.length ? null : /* @__PURE__ */ b.createElement(B, {
        className: I("recharts-cartesian-axis", f),
        ref: function(m) {
          r.layerReference = m;
        }
      }, a && this.renderAxisLine(), this.renderTicks(p, this.state.fontSize, this.state.letterSpacing), Gt.renderCallByParent(this.props));
    }
  }], [{
    key: "renderTickItem",
    value: function(r, n, a) {
      var o, l = I(n.className, "recharts-cartesian-axis-tick-value");
      return /* @__PURE__ */ b.isValidElement(r) ? o = /* @__PURE__ */ b.cloneElement(r, A(A({}, n), {}, {
        className: l
      })) : L(r) ? o = r(A(A({}, n), {}, {
        className: l
      })) : o = /* @__PURE__ */ b.createElement(Ft, H({}, n, {
        className: "recharts-cartesian-axis-tick-value"
      }), a), o;
    }
  }]);
}(_e);
Ee(Q, "displayName", "CartesianAxis");
Ee(Q, "defaultProps", {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  viewBox: {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  // The orientation of axis
  orientation: "bottom",
  // The ticks
  ticks: [],
  stroke: "#666",
  tickLine: !0,
  axisLine: !0,
  tick: !0,
  mirror: !1,
  minTickGap: 5,
  // The width or height of tick
  tickSize: 6,
  tickMargin: 2,
  interval: "preserveEnd"
});
var qr = ["x1", "y1", "x2", "y2", "key"], Ur = ["offset"];
function F(e) {
  "@babel/helpers - typeof";
  return F = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, F(e);
}
function rt(e, t) {
  var i = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), i.push.apply(i, r);
  }
  return i;
}
function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = arguments[t] != null ? arguments[t] : {};
    t % 2 ? rt(Object(i), !0).forEach(function(r) {
      Jr(e, r, i[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : rt(Object(i)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(i, r));
    });
  }
  return e;
}
function Jr(e, t, i) {
  return t = Qr(t), t in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = i, e;
}
function Qr(e) {
  var t = Zr(e, "string");
  return F(t) == "symbol" ? t : t + "";
}
function Zr(e, t) {
  if (F(e) != "object" || !e) return e;
  var i = e[Symbol.toPrimitive];
  if (i !== void 0) {
    var r = i.call(e, t);
    if (F(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function M() {
  return M = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = arguments[t];
      for (var r in i)
        Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
    }
    return e;
  }, M.apply(this, arguments);
}
function it(e, t) {
  if (e == null) return {};
  var i = ei(e, t), r, n;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++)
      r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function ei(e, t) {
  if (e == null) return {};
  var i = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      i[r] = e[r];
    }
  return i;
}
var ti = function(t) {
  var i = t.fill;
  if (!i || i === "none")
    return null;
  var r = t.fillOpacity, n = t.x, a = t.y, o = t.width, l = t.height, s = t.ry;
  return /* @__PURE__ */ b.createElement("rect", {
    x: n,
    y: a,
    ry: s,
    width: o,
    height: l,
    stroke: "none",
    fill: i,
    fillOpacity: r,
    className: "recharts-cartesian-grid-bg"
  });
};
function vt(e, t) {
  var i;
  if (/* @__PURE__ */ b.isValidElement(e))
    i = /* @__PURE__ */ b.cloneElement(e, t);
  else if (L(e))
    i = e(t);
  else {
    var r = t.x1, n = t.y1, a = t.x2, o = t.y2, l = t.key, s = it(t, qr), f = C(s, !1);
    f.offset;
    var c = it(f, Ur);
    i = /* @__PURE__ */ b.createElement("line", M({}, c, {
      x1: r,
      y1: n,
      x2: a,
      y2: o,
      fill: "none",
      key: l
    }));
  }
  return i;
}
function ri(e) {
  var t = e.x, i = e.width, r = e.horizontal, n = r === void 0 ? !0 : r, a = e.horizontalPoints;
  if (!n || !a || !a.length)
    return null;
  var o = a.map(function(l, s) {
    var f = T(T({}, e), {}, {
      x1: t,
      y1: l,
      x2: t + i,
      y2: l,
      key: "line-".concat(s),
      index: s
    });
    return vt(n, f);
  });
  return /* @__PURE__ */ b.createElement("g", {
    className: "recharts-cartesian-grid-horizontal"
  }, o);
}
function ii(e) {
  var t = e.y, i = e.height, r = e.vertical, n = r === void 0 ? !0 : r, a = e.verticalPoints;
  if (!n || !a || !a.length)
    return null;
  var o = a.map(function(l, s) {
    var f = T(T({}, e), {}, {
      x1: l,
      y1: t,
      x2: l,
      y2: t + i,
      key: "line-".concat(s),
      index: s
    });
    return vt(n, f);
  });
  return /* @__PURE__ */ b.createElement("g", {
    className: "recharts-cartesian-grid-vertical"
  }, o);
}
function ni(e) {
  var t = e.horizontalFill, i = e.fillOpacity, r = e.x, n = e.y, a = e.width, o = e.height, l = e.horizontalPoints, s = e.horizontal, f = s === void 0 ? !0 : s;
  if (!f || !t || !t.length)
    return null;
  var c = l.map(function(d) {
    return Math.round(d + n - n);
  }).sort(function(d, v) {
    return d - v;
  });
  n !== c[0] && c.unshift(0);
  var h = c.map(function(d, v) {
    var p = !c[v + 1], y = p ? n + o - d : c[v + 1] - d;
    if (y <= 0)
      return null;
    var m = v % t.length;
    return /* @__PURE__ */ b.createElement("rect", {
      key: "react-".concat(v),
      y: d,
      x: r,
      height: y,
      width: a,
      stroke: "none",
      fill: t[m],
      fillOpacity: i,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ b.createElement("g", {
    className: "recharts-cartesian-gridstripes-horizontal"
  }, h);
}
function ai(e) {
  var t = e.vertical, i = t === void 0 ? !0 : t, r = e.verticalFill, n = e.fillOpacity, a = e.x, o = e.y, l = e.width, s = e.height, f = e.verticalPoints;
  if (!i || !r || !r.length)
    return null;
  var c = f.map(function(d) {
    return Math.round(d + a - a);
  }).sort(function(d, v) {
    return d - v;
  });
  a !== c[0] && c.unshift(0);
  var h = c.map(function(d, v) {
    var p = !c[v + 1], y = p ? a + l - d : c[v + 1] - d;
    if (y <= 0)
      return null;
    var m = v % r.length;
    return /* @__PURE__ */ b.createElement("rect", {
      key: "react-".concat(v),
      x: d,
      y: o,
      width: y,
      height: s,
      stroke: "none",
      fill: r[m],
      fillOpacity: n,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ b.createElement("g", {
    className: "recharts-cartesian-gridstripes-vertical"
  }, h);
}
var oi = function(t, i) {
  var r = t.xAxis, n = t.width, a = t.height, o = t.offset;
  return ut($e(T(T(T({}, Q.defaultProps), r), {}, {
    ticks: he(r, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: n,
      height: a
    }
  })), o.left, o.left + o.width, i);
}, si = function(t, i) {
  var r = t.yAxis, n = t.width, a = t.height, o = t.offset;
  return ut($e(T(T(T({}, Q.defaultProps), r), {}, {
    ticks: he(r, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: n,
      height: a
    }
  })), o.top, o.top + o.height, i);
}, G = {
  horizontal: !0,
  vertical: !0,
  stroke: "#ccc",
  fill: "none",
  // The fill of colors of grid lines
  verticalFill: [],
  horizontalFill: []
};
function pt(e) {
  var t, i, r, n, a, o, l = Ne(), s = Te(), f = Ht(), c = T(T({}, e), {}, {
    stroke: (t = e.stroke) !== null && t !== void 0 ? t : G.stroke,
    fill: (i = e.fill) !== null && i !== void 0 ? i : G.fill,
    horizontal: (r = e.horizontal) !== null && r !== void 0 ? r : G.horizontal,
    horizontalFill: (n = e.horizontalFill) !== null && n !== void 0 ? n : G.horizontalFill,
    vertical: (a = e.vertical) !== null && a !== void 0 ? a : G.vertical,
    verticalFill: (o = e.verticalFill) !== null && o !== void 0 ? o : G.verticalFill,
    x: S(e.x) ? e.x : f.left,
    y: S(e.y) ? e.y : f.top,
    width: S(e.width) ? e.width : f.width,
    height: S(e.height) ? e.height : f.height
  }), h = c.x, d = c.y, v = c.width, p = c.height, y = c.syncWithTicks, m = c.horizontalValues, j = c.verticalValues, w = Yt(), g = Xt();
  if (!S(v) || v <= 0 || !S(p) || p <= 0 || !S(h) || h !== +h || !S(d) || d !== +d)
    return null;
  var x = c.verticalCoordinatesGenerator || oi, O = c.horizontalCoordinatesGenerator || si, P = c.horizontalPoints, k = c.verticalPoints;
  if ((!P || !P.length) && L(O)) {
    var _ = m && m.length, $ = O({
      yAxis: g ? T(T({}, g), {}, {
        ticks: _ ? m : g.ticks
      }) : void 0,
      width: l,
      height: s,
      offset: f
    }, _ ? !0 : y);
    Ie(Array.isArray($), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(F($), "]")), Array.isArray($) && (P = $);
  }
  if ((!k || !k.length) && L(x)) {
    var D = j && j.length, E = x({
      xAxis: w ? T(T({}, w), {}, {
        ticks: D ? j : w.ticks
      }) : void 0,
      width: l,
      height: s,
      offset: f
    }, D ? !0 : y);
    Ie(Array.isArray(E), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(F(E), "]")), Array.isArray(E) && (k = E);
  }
  return /* @__PURE__ */ b.createElement("g", {
    className: "recharts-cartesian-grid"
  }, /* @__PURE__ */ b.createElement(ti, {
    fill: c.fill,
    fillOpacity: c.fillOpacity,
    x: c.x,
    y: c.y,
    width: c.width,
    height: c.height,
    ry: c.ry
  }), /* @__PURE__ */ b.createElement(ri, M({}, c, {
    offset: f,
    horizontalPoints: P,
    xAxis: w,
    yAxis: g
  })), /* @__PURE__ */ b.createElement(ii, M({}, c, {
    offset: f,
    verticalPoints: k,
    xAxis: w,
    yAxis: g
  })), /* @__PURE__ */ b.createElement(ni, M({}, c, {
    horizontalPoints: P
  })), /* @__PURE__ */ b.createElement(ai, M({}, c, {
    verticalPoints: k
  })));
}
pt.displayName = "CartesianGrid";
var li = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"], ci = ["key"], mt;
function q(e) {
  "@babel/helpers - typeof";
  return q = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, q(e);
}
function yt(e, t) {
  if (e == null) return {};
  var i = ui(e, t), r, n;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++)
      r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function ui(e, t) {
  if (e == null) return {};
  var i = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      i[r] = e[r];
    }
  return i;
}
function W() {
  return W = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = arguments[t];
      for (var r in i)
        Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
    }
    return e;
  }, W.apply(this, arguments);
}
function nt(e, t) {
  var i = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), i.push.apply(i, r);
  }
  return i;
}
function R(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = arguments[t] != null ? arguments[t] : {};
    t % 2 ? nt(Object(i), !0).forEach(function(r) {
      z(e, r, i[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : nt(Object(i)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(i, r));
    });
  }
  return e;
}
function fi(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function at(e, t) {
  for (var i = 0; i < t.length; i++) {
    var r = t[i];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, gt(r.key), r);
  }
}
function hi(e, t, i) {
  return t && at(e.prototype, t), i && at(e, i), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function di(e, t, i) {
  return t = le(t), vi(e, bt() ? Reflect.construct(t, i || [], le(e).constructor) : t.apply(e, i));
}
function vi(e, t) {
  if (t && (q(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return pi(e);
}
function pi(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function bt() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (bt = function() {
    return !!e;
  })();
}
function le(e) {
  return le = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(i) {
    return i.__proto__ || Object.getPrototypeOf(i);
  }, le(e);
}
function mi(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Oe(e, t);
}
function Oe(e, t) {
  return Oe = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Oe(e, t);
}
function z(e, t, i) {
  return t = gt(t), t in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = i, e;
}
function gt(e) {
  var t = yi(e, "string");
  return q(t) == "symbol" ? t : t + "";
}
function yi(e, t) {
  if (q(e) != "object" || !e) return e;
  var i = e[Symbol.toPrimitive];
  if (i !== void 0) {
    var r = i.call(e, t);
    if (q(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var V = /* @__PURE__ */ function(e) {
  function t() {
    var i;
    fi(this, t);
    for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
      n[a] = arguments[a];
    return i = di(this, t, [].concat(n)), z(i, "state", {
      isAnimationFinished: !0
    }), z(i, "id", Zt("recharts-area-")), z(i, "handleAnimationEnd", function() {
      var o = i.props.onAnimationEnd;
      i.setState({
        isAnimationFinished: !0
      }), L(o) && o();
    }), z(i, "handleAnimationStart", function() {
      var o = i.props.onAnimationStart;
      i.setState({
        isAnimationFinished: !1
      }), L(o) && o();
    }), i;
  }
  return mi(t, e), hi(t, [{
    key: "renderDots",
    value: function(r, n, a) {
      var o = this.props.isAnimationActive, l = this.state.isAnimationFinished;
      if (o && !l)
        return null;
      var s = this.props, f = s.dot, c = s.points, h = s.dataKey, d = C(this.props, !1), v = C(f, !0), p = c.map(function(m, j) {
        var w = R(R(R({
          key: "dot-".concat(j),
          r: 3
        }, d), v), {}, {
          index: j,
          cx: m.x,
          cy: m.y,
          dataKey: h,
          value: m.value,
          payload: m.payload,
          points: c
        });
        return t.renderDotItem(f, w);
      }), y = {
        clipPath: r ? "url(#clipPath-".concat(n ? "" : "dots-").concat(a, ")") : null
      };
      return /* @__PURE__ */ b.createElement(B, W({
        className: "recharts-area-dots"
      }, y), p);
    }
  }, {
    key: "renderHorizontalRect",
    value: function(r) {
      var n = this.props, a = n.baseLine, o = n.points, l = n.strokeWidth, s = o[0].x, f = o[o.length - 1].x, c = r * Math.abs(s - f), h = ie(o.map(function(d) {
        return d.y || 0;
      }));
      return S(a) && typeof a == "number" ? h = Math.max(a, h) : a && Array.isArray(a) && a.length && (h = Math.max(ie(a.map(function(d) {
        return d.y || 0;
      })), h)), S(h) ? /* @__PURE__ */ b.createElement("rect", {
        x: s < f ? s : s - c,
        y: 0,
        width: c,
        height: Math.floor(h + (l ? parseInt("".concat(l), 10) : 1))
      }) : null;
    }
  }, {
    key: "renderVerticalRect",
    value: function(r) {
      var n = this.props, a = n.baseLine, o = n.points, l = n.strokeWidth, s = o[0].y, f = o[o.length - 1].y, c = r * Math.abs(s - f), h = ie(o.map(function(d) {
        return d.x || 0;
      }));
      return S(a) && typeof a == "number" ? h = Math.max(a, h) : a && Array.isArray(a) && a.length && (h = Math.max(ie(a.map(function(d) {
        return d.x || 0;
      })), h)), S(h) ? /* @__PURE__ */ b.createElement("rect", {
        x: 0,
        y: s < f ? s : s - c,
        width: h + (l ? parseInt("".concat(l), 10) : 1),
        height: Math.floor(c)
      }) : null;
    }
  }, {
    key: "renderClipRect",
    value: function(r) {
      var n = this.props.layout;
      return n === "vertical" ? this.renderVerticalRect(r) : this.renderHorizontalRect(r);
    }
  }, {
    key: "renderAreaStatically",
    value: function(r, n, a, o) {
      var l = this.props, s = l.layout, f = l.type, c = l.stroke, h = l.connectNulls, d = l.isRange;
      l.ref;
      var v = yt(l, li);
      return /* @__PURE__ */ b.createElement(B, {
        clipPath: a ? "url(#clipPath-".concat(o, ")") : null
      }, /* @__PURE__ */ b.createElement(ye, W({}, C(v, !0), {
        points: r,
        connectNulls: h,
        type: f,
        baseLine: n,
        layout: s,
        stroke: "none",
        className: "recharts-area-area"
      })), c !== "none" && /* @__PURE__ */ b.createElement(ye, W({}, C(this.props, !1), {
        className: "recharts-area-curve",
        layout: s,
        type: f,
        connectNulls: h,
        fill: "none",
        points: r
      })), c !== "none" && d && /* @__PURE__ */ b.createElement(ye, W({}, C(this.props, !1), {
        className: "recharts-area-curve",
        layout: s,
        type: f,
        connectNulls: h,
        fill: "none",
        points: n
      })));
    }
  }, {
    key: "renderAreaWithAnimation",
    value: function(r, n) {
      var a = this, o = this.props, l = o.points, s = o.baseLine, f = o.isAnimationActive, c = o.animationBegin, h = o.animationDuration, d = o.animationEasing, v = o.animationId, p = this.state, y = p.prevPoints, m = p.prevBaseLine;
      return /* @__PURE__ */ b.createElement(qt, {
        begin: c,
        duration: h,
        isActive: f,
        easing: d,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "area-".concat(v),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(j) {
        var w = j.t;
        if (y) {
          var g = y.length / l.length, x = l.map(function(_, $) {
            var D = Math.floor($ * g);
            if (y[D]) {
              var E = y[D], Z = K(E.x, _.x), ee = K(E.y, _.y);
              return R(R({}, _), {}, {
                x: Z(w),
                y: ee(w)
              });
            }
            return _;
          }), O;
          if (S(s) && typeof s == "number") {
            var P = K(m, s);
            O = P(w);
          } else if (Ve(s) || Ut(s)) {
            var k = K(m, 0);
            O = k(w);
          } else
            O = s.map(function(_, $) {
              var D = Math.floor($ * g);
              if (m[D]) {
                var E = m[D], Z = K(E.x, _.x), ee = K(E.y, _.y);
                return R(R({}, _), {}, {
                  x: Z(w),
                  y: ee(w)
                });
              }
              return _;
            });
          return a.renderAreaStatically(x, O, r, n);
        }
        return /* @__PURE__ */ b.createElement(B, null, /* @__PURE__ */ b.createElement("defs", null, /* @__PURE__ */ b.createElement("clipPath", {
          id: "animationClipPath-".concat(n)
        }, a.renderClipRect(w))), /* @__PURE__ */ b.createElement(B, {
          clipPath: "url(#animationClipPath-".concat(n, ")")
        }, a.renderAreaStatically(l, s, r, n)));
      });
    }
  }, {
    key: "renderArea",
    value: function(r, n) {
      var a = this.props, o = a.points, l = a.baseLine, s = a.isAnimationActive, f = this.state, c = f.prevPoints, h = f.prevBaseLine, d = f.totalLength;
      return s && o && o.length && (!c && d > 0 || !Be(c, o) || !Be(h, l)) ? this.renderAreaWithAnimation(r, n) : this.renderAreaStatically(o, l, r, n);
    }
  }, {
    key: "render",
    value: function() {
      var r, n = this.props, a = n.hide, o = n.dot, l = n.points, s = n.className, f = n.top, c = n.left, h = n.xAxis, d = n.yAxis, v = n.width, p = n.height, y = n.isAnimationActive, m = n.id;
      if (a || !l || !l.length)
        return null;
      var j = this.state.isAnimationFinished, w = l.length === 1, g = I("recharts-area", s), x = h && h.allowDataOverflow, O = d && d.allowDataOverflow, P = x || O, k = Ve(m) ? this.id : m, _ = (r = C(o, !1)) !== null && r !== void 0 ? r : {
        r: 3,
        strokeWidth: 2
      }, $ = _.r, D = $ === void 0 ? 3 : $, E = _.strokeWidth, Z = E === void 0 ? 2 : E, ee = Jt(o) ? o : {}, Ce = ee.clipDot, De = Ce === void 0 ? !0 : Ce, re = D * 2 + Z;
      return /* @__PURE__ */ b.createElement(B, {
        className: g
      }, x || O ? /* @__PURE__ */ b.createElement("defs", null, /* @__PURE__ */ b.createElement("clipPath", {
        id: "clipPath-".concat(k)
      }, /* @__PURE__ */ b.createElement("rect", {
        x: x ? c : c - v / 2,
        y: O ? f : f - p / 2,
        width: x ? v : v * 2,
        height: O ? p : p * 2
      })), !De && /* @__PURE__ */ b.createElement("clipPath", {
        id: "clipPath-dots-".concat(k)
      }, /* @__PURE__ */ b.createElement("rect", {
        x: c - re / 2,
        y: f - re / 2,
        width: v + re,
        height: p + re
      }))) : null, w ? null : this.renderArea(P, k), (o || w) && this.renderDots(P, De, k), (!y || j) && Qt.renderCallByParent(this.props, l));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(r, n) {
      return r.animationId !== n.prevAnimationId ? {
        prevAnimationId: r.animationId,
        curPoints: r.points,
        curBaseLine: r.baseLine,
        prevPoints: n.curPoints,
        prevBaseLine: n.curBaseLine
      } : r.points !== n.curPoints || r.baseLine !== n.curBaseLine ? {
        curPoints: r.points,
        curBaseLine: r.baseLine
      } : null;
    }
  }]);
}(_t);
mt = V;
z(V, "displayName", "Area");
z(V, "defaultProps", {
  stroke: "#3182bd",
  fill: "#3182bd",
  fillOpacity: 0.6,
  xAxisId: 0,
  yAxisId: 0,
  legendType: "line",
  connectNulls: !1,
  // points of area
  points: [],
  dot: !1,
  activeDot: !0,
  hide: !1,
  isAnimationActive: !ct.isSsr,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
});
z(V, "getBaseValue", function(e, t, i, r) {
  var n = e.layout, a = e.baseValue, o = t.props.baseValue, l = o ?? a;
  if (S(l) && typeof l == "number")
    return l;
  var s = n === "horizontal" ? r : i, f = s.scale.domain();
  if (s.type === "number") {
    var c = Math.max(f[0], f[1]), h = Math.min(f[0], f[1]);
    return l === "dataMin" ? h : l === "dataMax" || c < 0 ? c : Math.max(Math.min(f[0], f[1]), 0);
  }
  return l === "dataMin" ? f[0] : l === "dataMax" ? f[1] : f[0];
});
z(V, "getComposedData", function(e) {
  var t = e.props, i = e.item, r = e.xAxis, n = e.yAxis, a = e.xAxisTicks, o = e.yAxisTicks, l = e.bandSize, s = e.dataKey, f = e.stackedData, c = e.dataStartIndex, h = e.displayedData, d = e.offset, v = t.layout, p = f && f.length, y = mt.getBaseValue(t, i, r, n), m = v === "horizontal", j = !1, w = h.map(function(x, O) {
    var P;
    p ? P = f[c + O] : (P = Me(x, s), Array.isArray(P) ? j = !0 : P = [y, P]);
    var k = P[1] == null || p && Me(x, s) == null;
    return m ? {
      x: We({
        axis: r,
        ticks: a,
        bandSize: l,
        entry: x,
        index: O
      }),
      y: k ? null : n.scale(P[1]),
      value: P,
      payload: x
    } : {
      x: k ? null : r.scale(P[1]),
      y: We({
        axis: n,
        ticks: o,
        bandSize: l,
        entry: x,
        index: O
      }),
      value: P,
      payload: x
    };
  }), g;
  return p || j ? g = w.map(function(x) {
    var O = Array.isArray(x.value) ? x.value[0] : null;
    return m ? {
      x: x.x,
      y: O != null && x.y != null ? n.scale(O) : null
    } : {
      x: O != null ? r.scale(O) : null,
      y: x.y
    };
  }) : g = m ? n.scale(y) : r.scale(y), R({
    points: w,
    baseLine: g,
    layout: v,
    isRange: j
  }, d);
});
z(V, "renderDotItem", function(e, t) {
  var i;
  if (/* @__PURE__ */ b.isValidElement(e))
    i = /* @__PURE__ */ b.cloneElement(e, t);
  else if (L(e))
    i = e(t);
  else {
    var r = I("recharts-area-dot", typeof e != "boolean" ? e.className : ""), n = t.key, a = yt(t, ci);
    i = /* @__PURE__ */ b.createElement(er, W({}, a, {
      key: n,
      className: r
    }));
  }
  return i;
});
function U(e) {
  "@babel/helpers - typeof";
  return U = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, U(e);
}
function bi(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function gi(e, t) {
  for (var i = 0; i < t.length; i++) {
    var r = t[i];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Ot(r.key), r);
  }
}
function xi(e, t, i) {
  return t && gi(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function wi(e, t, i) {
  return t = ce(t), Oi(e, xt() ? Reflect.construct(t, i || [], ce(e).constructor) : t.apply(e, i));
}
function Oi(e, t) {
  if (t && (U(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ji(e);
}
function ji(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function xt() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (xt = function() {
    return !!e;
  })();
}
function ce(e) {
  return ce = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(i) {
    return i.__proto__ || Object.getPrototypeOf(i);
  }, ce(e);
}
function Pi(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && je(e, t);
}
function je(e, t) {
  return je = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, je(e, t);
}
function wt(e, t, i) {
  return t = Ot(t), t in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = i, e;
}
function Ot(e) {
  var t = ki(e, "string");
  return U(t) == "symbol" ? t : t + "";
}
function ki(e, t) {
  if (U(e) != "object" || !e) return e;
  var i = e[Symbol.toPrimitive];
  if (i !== void 0) {
    var r = i.call(e, t);
    if (U(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Pe() {
  return Pe = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = arguments[t];
      for (var r in i)
        Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
    }
    return e;
  }, Pe.apply(this, arguments);
}
function Ai(e) {
  var t = e.xAxisId, i = Ne(), r = Te(), n = tr(t);
  return n == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ fe(Q, Pe({}, n, {
      className: I("recharts-".concat(n.axisType, " ").concat(n.axisType), n.className),
      viewBox: {
        x: 0,
        y: 0,
        width: i,
        height: r
      },
      ticksGenerator: function(o) {
        return he(o, !0);
      }
    }))
  );
}
var de = /* @__PURE__ */ function(e) {
  function t() {
    return bi(this, t), wi(this, t, arguments);
  }
  return Pi(t, e), xi(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ fe(Ai, this.props);
    }
  }]);
}(_e);
wt(de, "displayName", "XAxis");
wt(de, "defaultProps", {
  allowDecimals: !0,
  hide: !1,
  orientation: "bottom",
  width: 0,
  height: 30,
  mirror: !1,
  xAxisId: 0,
  tickCount: 5,
  type: "category",
  padding: {
    left: 0,
    right: 0
  },
  allowDataOverflow: !1,
  scale: "auto",
  reversed: !1,
  allowDuplicatedCategory: !0
});
function J(e) {
  "@babel/helpers - typeof";
  return J = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, J(e);
}
function _i(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Si(e, t) {
  for (var i = 0; i < t.length; i++) {
    var r = t[i];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, kt(r.key), r);
  }
}
function Ni(e, t, i) {
  return t && Si(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Ti(e, t, i) {
  return t = ue(t), $i(e, jt() ? Reflect.construct(t, i || [], ue(e).constructor) : t.apply(e, i));
}
function $i(e, t) {
  if (t && (J(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Ei(e);
}
function Ei(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function jt() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (jt = function() {
    return !!e;
  })();
}
function ue(e) {
  return ue = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(i) {
    return i.__proto__ || Object.getPrototypeOf(i);
  }, ue(e);
}
function Ci(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ke(e, t);
}
function ke(e, t) {
  return ke = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, ke(e, t);
}
function Pt(e, t, i) {
  return t = kt(t), t in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = i, e;
}
function kt(e) {
  var t = Di(e, "string");
  return J(t) == "symbol" ? t : t + "";
}
function Di(e, t) {
  if (J(e) != "object" || !e) return e;
  var i = e[Symbol.toPrimitive];
  if (i !== void 0) {
    var r = i.call(e, t);
    if (J(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Ae() {
  return Ae = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = arguments[t];
      for (var r in i)
        Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
    }
    return e;
  }, Ae.apply(this, arguments);
}
var zi = function(t) {
  var i = t.yAxisId, r = Ne(), n = Te(), a = rr(i);
  return a == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ fe(Q, Ae({}, a, {
      className: I("recharts-".concat(a.axisType, " ").concat(a.axisType), a.className),
      viewBox: {
        x: 0,
        y: 0,
        width: r,
        height: n
      },
      ticksGenerator: function(l) {
        return he(l, !0);
      }
    }))
  );
}, ve = /* @__PURE__ */ function(e) {
  function t() {
    return _i(this, t), Ti(this, t, arguments);
  }
  return Ci(t, e), Ni(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ fe(zi, this.props);
    }
  }]);
}(_e);
Pt(ve, "displayName", "YAxis");
Pt(ve, "defaultProps", {
  allowDuplicatedCategory: !0,
  allowDecimals: !0,
  hide: !1,
  orientation: "left",
  width: 60,
  height: 0,
  mirror: !1,
  yAxisId: 0,
  tickCount: 5,
  type: "number",
  padding: {
    top: 0,
    bottom: 0
  },
  allowDataOverflow: !1,
  scale: "auto",
  reversed: !1
});
var Li = ir({
  chartName: "AreaChart",
  GraphicalChild: V,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: de
  }, {
    axisType: "yAxis",
    AxisComp: ve
  }],
  formatAxisMap: nr
});
const Ri = ({ active: e, payload: t, range: i, showHours: r, color: n }) => {
  if (!e || !(t != null && t.length))
    return null;
  const { date: a, formattedValue: o, label: l, diffValue: s, formattedDiffValue: f } = t[0].payload, c = o || t[0].value;
  return /* @__PURE__ */ u.jsxs("div", { className: "min-w-[120px] rounded-lg border bg-background px-3 py-2 shadow-lg", children: [
    a && /* @__PURE__ */ u.jsx("div", { className: "text-sm text-foreground", children: xe(a, i || 0, r) }),
    /* @__PURE__ */ u.jsxs("div", { className: "flex items-start gap-2", children: [
      /* @__PURE__ */ u.jsx("span", { className: "mt-1.5 inline-block size-2 rounded-full opacity-50", style: { backgroundColor: n || "var(--chart-blue)" } }),
      /* @__PURE__ */ u.jsxs("div", { className: "flex grow items-start justify-between gap-5", children: [
        l && /* @__PURE__ */ u.jsx("div", { className: "text-sm text-muted-foreground", children: l }),
        /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col items-end font-mono font-medium", children: [
          c,
          s ? s < 0 && /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-0.5 text-state-danger", children: [
            /* @__PURE__ */ u.jsx(Dt, { size: 14, strokeWidth: 1.5 }),
            /* @__PURE__ */ u.jsx("span", { children: f })
          ] }) : /* @__PURE__ */ u.jsx(u.Fragment, {}),
          s ? s > 0 && /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-0.5 text-state-success", children: [
            /* @__PURE__ */ u.jsx(zt, { size: 14, strokeWidth: 1.5 }),
            /* @__PURE__ */ u.jsx("span", { children: f })
          ] }) : /* @__PURE__ */ u.jsx(u.Fragment, {})
        ] })
      ] })
    ] })
  ] });
}, Ii = ({
  data: e,
  range: t,
  yAxisRange: i,
  color: r = "var(--chart-blue)",
  id: n,
  className: a,
  syncId: o,
  allowDataOverflow: l = !1,
  showYAxisValues: s = !0,
  showHorizontalLines: f = !0,
  dataFormatter: c = Y,
  showHours: h = !1,
  tooltipContent: d
}) => {
  var v;
  const p = i || [Qe(e).min, Qe(e).max], y = {
    value: {
      label: ((v = e[0]) == null ? void 0 : v.label) || "Value"
    }
  }, m = p[0], j = (p[0] + p[1]) / 2, g = Number.isInteger(j) ? [p[0], j, p[1]] : p, x = h && t === 1;
  return /* @__PURE__ */ u.jsx(ar, { className: St("w-full", a), config: y, children: /* @__PURE__ */ u.jsxs(
    Li,
    {
      data: e,
      margin: {
        left: 4,
        right: 4,
        top: f ? 24 : 4
      },
      syncId: o,
      children: [
        /* @__PURE__ */ u.jsx(pt, { horizontal: f, stroke: "var(--border)", vertical: !1 }),
        /* @__PURE__ */ u.jsx(
          de,
          {
            axisLine: { stroke: "var(--border)", strokeWidth: 1 },
            dataKey: "date",
            interval: 0,
            tick: (O) => /* @__PURE__ */ u.jsx(or, { ...O, formatter: (P) => xe(String(P), t, h, x) }),
            tickFormatter: (O) => xe(String(O), t, h),
            tickLine: !1,
            tickMargin: 10,
            ticks: e && e.length > 0 ? [e[0].date, e[e.length - 1].date] : []
          }
        ),
        /* @__PURE__ */ u.jsx(
          ve,
          {
            allowDataOverflow: l,
            axisLine: !1,
            domain: l ? void 0 : p,
            scale: "linear",
            tickFormatter: (O) => c(O),
            tickLine: !1,
            ticks: g,
            width: s ? _r(p, c) : 0
          }
        ),
        /* @__PURE__ */ u.jsx(
          sr,
          {
            content: d || /* @__PURE__ */ u.jsx(Ri, { color: r, range: t, showHours: h }),
            cursor: !0,
            isAnimationActive: !1,
            position: { y: 10 }
          }
        ),
        /* @__PURE__ */ u.jsx("defs", { children: /* @__PURE__ */ u.jsxs("linearGradient", { id: `fillChart-${n}`, x1: "0", x2: "0", y1: "0", y2: "1", children: [
          /* @__PURE__ */ u.jsx(
            "stop",
            {
              offset: "5%",
              stopColor: r,
              stopOpacity: 0.8
            }
          ),
          /* @__PURE__ */ u.jsx(
            "stop",
            {
              offset: "95%",
              stopColor: r,
              stopOpacity: 0.1
            }
          )
        ] }) }),
        /* @__PURE__ */ u.jsx(
          V,
          {
            baseValue: m,
            dataKey: "value",
            fill: `url(#fillChart-${n})`,
            fillOpacity: 0.2,
            isAnimationActive: !1,
            stroke: r,
            strokeWidth: 1.5,
            type: "linear"
          }
        )
      ]
    }
  ) });
}, Vi = (e) => {
  const t = Object.values(Or).find((i) => i.value === e);
  return t ? ["Last 7 days", "Last 30 days", "Last 90 days", "Last 12 months"].includes(t.name) ? `in the ${t.name.toLowerCase()}` : t.name === "All time" ? "(all time)" : t.name.toLowerCase() : "";
}, At = "https://www.google.com/s2/favicons?domain=ghost.org&sz=64", ae = ({ dataTableHeader: e, data: t, defaultSourceIconUrl: i = At, onSourceClick: r }) => /* @__PURE__ */ u.jsxs(cr, { children: [
  e && /* @__PURE__ */ u.jsxs(ur, { children: [
    /* @__PURE__ */ u.jsx(Fe, { children: "Source" }),
    /* @__PURE__ */ u.jsx(Fe, { children: "Visitors" })
  ] }),
  /* @__PURE__ */ u.jsx(fr, { children: t == null ? void 0 : t.map((n) => {
    const a = !!r, o = n.source ? n.source.toLowerCase().replace(/[^a-z0-9]/g, "-") : "direct";
    return /* @__PURE__ */ u.jsxs(
      hr,
      {
        className: `group/row ${a ? "cursor-pointer" : ""}`,
        "data-testid": `source-row-${o}`,
        onClick: a ? () => r(n.source) : void 0,
        children: [
          /* @__PURE__ */ u.jsx(dr, { style: {
            width: `${n.percentage ? Math.round(n.percentage * 100) : 0}%`
          } }),
          /* @__PURE__ */ u.jsx(vr, { className: "group-hover/datalist:max-w-[calc(100%-140px)]", children: /* @__PURE__ */ u.jsx("div", { className: "flex items-center space-x-4 overflow-hidden", children: /* @__PURE__ */ u.jsx("div", { className: "truncate font-medium", children: n.linkUrl && !r ? /* @__PURE__ */ u.jsxs("a", { className: "group/link flex items-center gap-2", href: n.linkUrl, rel: "noreferrer", target: "_blank", children: [
            /* @__PURE__ */ u.jsx(
              ze,
              {
                defaultSourceIconUrl: i,
                displayName: n.displayName,
                iconSrc: n.iconSrc
              }
            ),
            /* @__PURE__ */ u.jsx("span", { className: "group-hover/link:underline", children: n.displayName })
          ] }) : /* @__PURE__ */ u.jsxs("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ u.jsx(
              ze,
              {
                defaultSourceIconUrl: i,
                displayName: n.displayName,
                iconSrc: n.iconSrc
              }
            ),
            /* @__PURE__ */ u.jsx("span", { children: n.displayName })
          ] }) }) }) }),
          /* @__PURE__ */ u.jsxs(pr, { children: [
            /* @__PURE__ */ u.jsx(mr, { children: Y(n.visits) }),
            /* @__PURE__ */ u.jsx(yr, { children: Se(n.percentage || 0) })
          ] })
        ]
      },
      n.source
    );
  }) })
] }), Ji = ({
  data: e,
  range: t = 30,
  totalVisitors: i = 0,
  siteUrl: r,
  siteIcon: n,
  defaultSourceIconUrl: a = At,
  tableOnly: o = !1,
  topSourcesLimit: l = 10,
  onSourceClick: s
}) => {
  const { isPostLoading: f } = jr(), c = b.useMemo(() => $t({
    data: e,
    mode: "visits",
    siteUrl: r,
    siteIcon: n,
    defaultSourceIconUrl: a
  }), [e, r, n, a]), h = b.useMemo(() => Et({
    processedData: c,
    totalVisitors: i,
    mode: "visits"
  }), [c, i]), d = h.slice(0, l), v = "Top sources", p = `How readers found this post ${t && ` ${Vi(t)}`}`;
  if (o) {
    const m = h.slice(0, l), j = h.length > l;
    return /* @__PURE__ */ u.jsxs("div", { children: [
      /* @__PURE__ */ u.jsx(
        ae,
        {
          data: m,
          dataTableHeader: !1,
          defaultSourceIconUrl: a,
          range: t,
          onSourceClick: s
        }
      ),
      j && /* @__PURE__ */ u.jsx("div", { className: "mt-4", children: /* @__PURE__ */ u.jsxs(Ge, { children: [
        /* @__PURE__ */ u.jsx(He, { asChild: !0, children: /* @__PURE__ */ u.jsxs(Le, { className: "w-full", size: "sm", variant: "outline", children: [
          "View all (",
          h.length,
          ") ",
          /* @__PURE__ */ u.jsx(lr, { size: 14 })
        ] }) }),
        /* @__PURE__ */ u.jsxs(Ye, { className: "overflow-y-auto pt-0 sm:max-w-[600px]", children: [
          /* @__PURE__ */ u.jsxs(Xe, { className: "sticky top-0 z-40 -mx-6 bg-background/60 p-6 backdrop-blur", children: [
            /* @__PURE__ */ u.jsx(qe, { children: v }),
            /* @__PURE__ */ u.jsx(Ue, { children: p })
          ] }),
          /* @__PURE__ */ u.jsx("div", { className: "group/datalist", children: /* @__PURE__ */ u.jsx(
            ae,
            {
              data: h,
              dataTableHeader: !0,
              defaultSourceIconUrl: a,
              range: t,
              onSourceClick: s
            }
          ) })
        ] })
      ] }) })
    ] });
  }
  const y = f;
  return /* @__PURE__ */ u.jsxs(st, { className: "group/datalist", "data-testid": "top-sources-card", children: [
    /* @__PURE__ */ u.jsxs("div", { className: "flex items-center justify-between p-6", children: [
      /* @__PURE__ */ u.jsxs(Lt, { className: "p-0", children: [
        /* @__PURE__ */ u.jsx(Rt, { children: v }),
        /* @__PURE__ */ u.jsx(It, { children: p })
      ] }),
      /* @__PURE__ */ u.jsx(Ct, { className: "mr-2", children: "Visitors" })
    ] }),
    /* @__PURE__ */ u.jsxs(lt, { className: "overflow-hidden", children: [
      /* @__PURE__ */ u.jsx("div", { className: "h-[1px] w-full bg-border" }),
      y ? /* @__PURE__ */ u.jsx(wr, { lines: 5 }) : d.length > 0 ? /* @__PURE__ */ u.jsx(
        ae,
        {
          data: d,
          dataTableHeader: !1,
          defaultSourceIconUrl: a,
          range: t,
          onSourceClick: s
        }
      ) : /* @__PURE__ */ u.jsx("div", { className: "py-20 text-center text-sm text-gray-700", children: "No sources data available." })
    ] }),
    h.length > 10 && /* @__PURE__ */ u.jsx(Vt, { children: /* @__PURE__ */ u.jsxs(Ge, { children: [
      /* @__PURE__ */ u.jsx(He, { asChild: !0, children: /* @__PURE__ */ u.jsxs(Le, { variant: "outline", children: [
        "View all ",
        /* @__PURE__ */ u.jsx(Bt, {})
      ] }) }),
      /* @__PURE__ */ u.jsxs(Ye, { className: "overflow-y-auto pt-0 sm:max-w-[600px]", children: [
        /* @__PURE__ */ u.jsxs(Xe, { className: "sticky top-0 z-40 -mx-6 bg-background/60 p-6 backdrop-blur", children: [
          /* @__PURE__ */ u.jsx(qe, { children: v }),
          /* @__PURE__ */ u.jsx(Ue, { children: p })
        ] }),
        /* @__PURE__ */ u.jsx("div", { className: "group/datalist", children: /* @__PURE__ */ u.jsx(
          ae,
          {
            data: h,
            dataTableHeader: !0,
            defaultSourceIconUrl: a,
            range: t,
            onSourceClick: s
          }
        ) })
      ] })
    ] }) })
  ] });
}, Bi = (e) => {
  if (!(e != null && e.length))
    return { visits: "0", views: "0", bounceRate: "0%", duration: "0s" };
  const t = (l) => {
    const s = Number(l);
    return isNaN(s) ? 0 : s;
  }, i = e.reduce((l, s) => l + t(s.visits), 0), r = e.reduce((l, s) => l + t(s.pageviews), 0), n = (l) => i === 0 ? 0 : e.reduce((s, f) => {
    const c = t(f[l]), h = t(f.visits);
    return s + c * h / i;
  }, 0), a = n("bounce_rate"), o = n("avg_session_sec");
  return {
    visits: Y(i),
    views: Y(r),
    bounceRate: Se(a),
    duration: ot(o)
  };
}, ge = {
  visits: {
    dataKey: "visits",
    label: "Visitors",
    color: "var(--chart-blue)",
    formatter: Y
  },
  views: {
    dataKey: "pageviews",
    label: "Pageviews",
    color: "var(--chart-teal)",
    formatter: Y
  },
  "bounce-rate": {
    dataKey: "bounce_rate",
    label: "Bounce rate",
    color: "var(--chart-purple)",
    formatter: Se
  },
  duration: {
    dataKey: "avg_session_sec",
    label: "Time on page",
    color: "var(--chart-orange)",
    formatter: ot
  }
}, Qi = ({ data: e, range: t }) => {
  var f;
  const [i] = Nt(), r = i.get("tab") || "visits", [n, a] = Tt(r), o = ge[n], l = (f = Sr(e || [], t, o.dataKey, "sum")) == null ? void 0 : f.map((c) => {
    const h = Number(c[o.dataKey]);
    return {
      date: String(c.date),
      value: h,
      formattedValue: o.formatter(h),
      label: o.label
    };
  }), s = Bi(e);
  return /* @__PURE__ */ u.jsx(st, { children: /* @__PURE__ */ u.jsx(lt, { children: /* @__PURE__ */ u.jsxs(br, { defaultValue: n, variant: "kpis", children: [
    /* @__PURE__ */ u.jsxs(gr, { className: "-mx-6 hidden grid-cols-2 md:visible! md:grid!", children: [
      /* @__PURE__ */ u.jsx(Ke, { value: "visits", onClick: () => {
        a("visits");
      }, children: /* @__PURE__ */ u.jsx(ne, { color: ge.visits.color, label: "Unique visitors", value: s.visits }) }),
      /* @__PURE__ */ u.jsx(Ke, { value: "views", onClick: () => {
        a("views");
      }, children: /* @__PURE__ */ u.jsx(ne, { color: ge.views.color, label: "Total views", value: s.views }) })
    ] }),
    /* @__PURE__ */ u.jsxs(Pr, { children: [
      /* @__PURE__ */ u.jsx(kr, { className: "md:hidden", asChild: !0, children: /* @__PURE__ */ u.jsxs(xr, { children: [
        n === "visits" && /* @__PURE__ */ u.jsx(ne, { color: "var(--chart-blue)", label: "Unique visitors", value: s.visits }),
        n === "views" && /* @__PURE__ */ u.jsx(ne, { color: "var(--chart-teal)", label: "Total views", value: s.views })
      ] }) }),
      /* @__PURE__ */ u.jsxs(Ar, { align: "end", className: "w-56", children: [
        /* @__PURE__ */ u.jsx(Je, { onClick: () => a("visits"), children: "Unique visitors" }),
        /* @__PURE__ */ u.jsx(Je, { onClick: () => a("views"), children: "Total views" })
      ] })
    ] }),
    /* @__PURE__ */ u.jsx("div", { className: "my-4 [&_.recharts-cartesian-axis-tick-value]:fill-gray-500", children: /* @__PURE__ */ u.jsx(
      Ii,
      {
        className: "-mb-3 aspect-auto h-[16vw] max-h-[320px] min-h-[180px] w-full",
        color: o.color,
        data: l,
        id: o.dataKey,
        range: t,
        showHours: !0,
        syncId: "overview-charts"
      }
    ) })
  ] }) }) });
};
export {
  Ii as G,
  ge as K,
  Ji as S,
  Qi as a,
  Vi as b,
  Bi as g
};
//# sourceMappingURL=kpis-BnWwIC_x.mjs.map
