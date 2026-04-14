import { d as Je, h as nt, P as ne, c as ot, b as de, f as rt, e as S, n as co, g as ao, u as lo, a as Ct, i as Ee } from "./button-BOW1bLRE.mjs";
import { u as W, h as v, x as uo, y as Ae, z as Le, j as p, A as jt, F as kt, k as X, i as D, V as fo, J as po, b as ie, a as Te, S as Lt, m as oe } from "./index-BWRct4la.mjs";
import { c as mo, b as Ft, u as ho, I as go, R as xo } from "./skeleton-DhEoQOK3.mjs";
import { a as Ke, P as vo, h as wo, u as yo, R as bo, F as Mo, D as Co, C as Ao } from "./dialog-ChCs58Pc.mjs";
function Po(e) {
  const [t, n] = W(void 0);
  return Je(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const o = new ResizeObserver((r) => {
        if (!Array.isArray(r) || !r.length)
          return;
        const i = r[0];
        let s, a;
        if ("borderBoxSize" in i) {
          const c = i.borderBoxSize, u = Array.isArray(c) ? c[0] : c;
          s = u.inlineSize, a = u.blockSize;
        } else
          s = e.offsetWidth, a = e.offsetHeight;
        n({ width: s, height: a });
      });
      return o.observe(e, { box: "border-box" }), () => o.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var _o = Symbol.for("react.lazy"), Fe = uo[" use ".trim().toString()];
function So(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function $t(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === _o && "_payload" in e && So(e._payload);
}
// @__NO_SIDE_EFFECTS__
function Eo(e) {
  const t = /* @__PURE__ */ Ro(e), n = v((o, r) => {
    let { children: i, ...s } = o;
    $t(i) && typeof Fe == "function" && (i = Fe(i._payload));
    const a = Ae.toArray(i), c = a.find(No);
    if (c) {
      const u = c.props.children, d = a.map((l) => l === c ? Ae.count(u) > 1 ? Ae.only(null) : Le(u) ? u.props.children : null : l);
      return /* @__PURE__ */ p.jsx(t, { ...s, ref: r, children: Le(u) ? jt(u, void 0, d) : null });
    }
    return /* @__PURE__ */ p.jsx(t, { ...s, ref: r, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Ro(e) {
  const t = v((n, o) => {
    let { children: r, ...i } = n;
    if ($t(r) && typeof Fe == "function" && (r = Fe(r._payload)), Le(r)) {
      const s = Io(r), a = Do(i, r.props);
      return r.type !== kt && (a.ref = o ? nt(o, s) : s), jt(r, a);
    }
    return Ae.count(r) > 1 ? Ae.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Oo = Symbol("radix.slottable");
function No(e) {
  return Le(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Oo;
}
function Do(e, t) {
  const n = { ...t };
  for (const o in t) {
    const r = e[o], i = t[o];
    /^on[A-Z]/.test(o) ? r && i ? n[o] = (...a) => {
      const c = i(...a);
      return r(...a), c;
    } : r && (n[o] = r) : o === "style" ? n[o] = { ...r, ...i } : o === "className" && (n[o] = [r, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Io(e) {
  var o, r;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var To = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], jo = To.reduce((e, t) => {
  const n = /* @__PURE__ */ Eo(`Primitive.${t}`), o = v((r, i) => {
    const { asChild: s, ...a } = r, c = s ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p.jsx(c, { ...a, ref: i });
  });
  return o.displayName = `Primitive.${t}`, { ...e, [t]: o };
}, {}), ko = "Separator", At = "horizontal", Lo = ["horizontal", "vertical"], Bt = v((e, t) => {
  const { decorative: n, orientation: o = At, ...r } = e, i = Fo(o) ? o : At, a = n ? { role: "none" } : { "aria-orientation": i === "vertical" ? i : void 0, role: "separator" };
  return /* @__PURE__ */ p.jsx(
    jo.div,
    {
      "data-orientation": i,
      ...a,
      ...r,
      ref: t
    }
  );
});
Bt.displayName = ko;
function Fo(e) {
  return Lo.includes(e);
}
var zt = Bt;
const $o = ["top", "right", "bottom", "left"], se = Math.min, G = Math.max, $e = Math.round, je = Math.floor, ce = (e) => ({
  x: e,
  y: e
}), Bo = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, zo = {
  start: "end",
  end: "start"
};
function Qe(e, t, n) {
  return G(e, se(t, n));
}
function Q(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ee(e) {
  return e.split("-")[0];
}
function ge(e) {
  return e.split("-")[1];
}
function it(e) {
  return e === "x" ? "y" : "x";
}
function st(e) {
  return e === "y" ? "height" : "width";
}
function xe(e) {
  return ["top", "bottom"].includes(ee(e)) ? "y" : "x";
}
function ct(e) {
  return it(xe(e));
}
function Ho(e, t, n) {
  n === void 0 && (n = !1);
  const o = ge(e), r = ct(e), i = st(r);
  let s = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Be(s)), [s, Be(s)];
}
function Go(e) {
  const t = Be(e);
  return [et(e), t, et(t)];
}
function et(e) {
  return e.replace(/start|end/g, (t) => zo[t]);
}
function Wo(e, t, n) {
  const o = ["left", "right"], r = ["right", "left"], i = ["top", "bottom"], s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? r : o : t ? o : r;
    case "left":
    case "right":
      return t ? i : s;
    default:
      return [];
  }
}
function Vo(e, t, n, o) {
  const r = ge(e);
  let i = Wo(ee(e), n === "start", o);
  return r && (i = i.map((s) => s + "-" + r), t && (i = i.concat(i.map(et)))), i;
}
function Be(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Bo[t]);
}
function Ko(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Ht(e) {
  return typeof e != "number" ? Ko(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ze(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function Pt(e, t, n) {
  let {
    reference: o,
    floating: r
  } = e;
  const i = xe(t), s = ct(t), a = st(s), c = ee(t), u = i === "y", d = o.x + o.width / 2 - r.width / 2, l = o.y + o.height / 2 - r.height / 2, f = o[a] / 2 - r[a] / 2;
  let m;
  switch (c) {
    case "top":
      m = {
        x: d,
        y: o.y - r.height
      };
      break;
    case "bottom":
      m = {
        x: d,
        y: o.y + o.height
      };
      break;
    case "right":
      m = {
        x: o.x + o.width,
        y: l
      };
      break;
    case "left":
      m = {
        x: o.x - r.width,
        y: l
      };
      break;
    default:
      m = {
        x: o.x,
        y: o.y
      };
  }
  switch (ge(t)) {
    case "start":
      m[s] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      m[s] += f * (n && u ? -1 : 1);
      break;
  }
  return m;
}
const Uo = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: r = "absolute",
    middleware: i = [],
    platform: s
  } = n, a = i.filter(Boolean), c = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let u = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: r
  }), {
    x: d,
    y: l
  } = Pt(u, o, c), f = o, m = {}, h = 0;
  for (let g = 0; g < a.length; g++) {
    const {
      name: w,
      fn: x
    } = a[g], {
      x: y,
      y: A,
      data: P,
      reset: b
    } = await x({
      x: d,
      y: l,
      initialPlacement: o,
      placement: f,
      strategy: r,
      middlewareData: m,
      rects: u,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (d = y ?? d, l = A ?? l, m = {
      ...m,
      [w]: {
        ...m[w],
        ...P
      }
    }, b && h <= 50) {
      h++, typeof b == "object" && (b.placement && (f = b.placement), b.rects && (u = b.rects === !0 ? await s.getElementRects({
        reference: e,
        floating: t,
        strategy: r
      }) : b.rects), {
        x: d,
        y: l
      } = Pt(u, f, c)), g = -1;
      continue;
    }
  }
  return {
    x: d,
    y: l,
    placement: f,
    strategy: r,
    middlewareData: m
  };
};
async function Pe(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: r,
    platform: i,
    rects: s,
    elements: a,
    strategy: c
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: l = "floating",
    altBoundary: f = !1,
    padding: m = 0
  } = Q(t, e), h = Ht(m), w = a[f ? l === "floating" ? "reference" : "floating" : l], x = ze(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null || n ? w : w.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: c
  })), y = l === "floating" ? {
    ...s.floating,
    x: o,
    y: r
  } : s.reference, A = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), P = await (i.isElement == null ? void 0 : i.isElement(A)) ? await (i.getScale == null ? void 0 : i.getScale(A)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, b = ze(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: y,
    offsetParent: A,
    strategy: c
  }) : y);
  return {
    top: (x.top - b.top + h.top) / P.y,
    bottom: (b.bottom - x.bottom + h.bottom) / P.y,
    left: (x.left - b.left + h.left) / P.x,
    right: (b.right - x.right + h.right) / P.x
  };
}
const _t = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: o,
      placement: r,
      rects: i,
      platform: s,
      elements: a
    } = t, {
      element: c,
      padding: u = 0
    } = Q(e, t) || {};
    if (c == null)
      return {};
    const d = Ht(u), l = {
      x: n,
      y: o
    }, f = ct(r), m = st(f), h = await s.getDimensions(c), g = f === "y", w = g ? "top" : "left", x = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", A = i.reference[m] + i.reference[f] - l[f] - i.floating[m], P = l[f] - i.reference[f], b = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let M = b ? b[y] : 0;
    (!M || !await (s.isElement == null ? void 0 : s.isElement(b))) && (M = a.floating[y] || i.floating[m]);
    const E = A / 2 - P / 2, j = M / 2 - h[m] / 2 - 1, T = se(d[w], j), k = se(d[x], j), N = T, L = M - h[m] - k, R = M / 2 - h[m] / 2 + E, O = Qe(N, R, L), _ = ge(r) != null && R != O && i.reference[m] / 2 - (R < N ? T : k) - h[m] / 2 < 0 ? R < N ? N - R : L - R : 0;
    return {
      [f]: l[f] - _,
      data: {
        [f]: O,
        centerOffset: R - O + _
      }
    };
  }
}), Yo = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n;
      const {
        placement: o,
        middlewareData: r,
        rects: i,
        initialPlacement: s,
        platform: a,
        elements: c
      } = t, {
        mainAxis: u = !0,
        crossAxis: d = !0,
        fallbackPlacements: l,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: h = !0,
        ...g
      } = Q(e, t), w = ee(o), x = ee(s) === s, y = await (a.isRTL == null ? void 0 : a.isRTL(c.floating)), A = l || (x || !h ? [Be(s)] : Go(s));
      !l && m !== "none" && A.push(...Vo(s, h, m, y));
      const P = [s, ...A], b = await Pe(t, g), M = [];
      let E = ((n = r.flip) == null ? void 0 : n.overflows) || [];
      if (u && M.push(b[w]), d) {
        const N = Ho(o, i, y);
        M.push(b[N[0]], b[N[1]]);
      }
      if (E = [...E, {
        placement: o,
        overflows: M
      }], !M.every((N) => N <= 0)) {
        var j, T;
        const N = (((j = r.flip) == null ? void 0 : j.index) || 0) + 1, L = P[N];
        if (L)
          return {
            data: {
              index: N,
              overflows: E
            },
            reset: {
              placement: L
            }
          };
        let R = (T = E.filter((O) => O.overflows[0] <= 0).sort((O, F) => O.overflows[1] - F.overflows[1])[0]) == null ? void 0 : T.placement;
        if (!R)
          switch (f) {
            case "bestFit": {
              var k;
              const O = (k = E.map((F) => [F.placement, F.overflows.filter((_) => _ > 0).reduce((_, H) => _ + H, 0)]).sort((F, _) => F[1] - _[1])[0]) == null ? void 0 : k[0];
              O && (R = O);
              break;
            }
            case "initialPlacement":
              R = s;
              break;
          }
        if (o !== R)
          return {
            reset: {
              placement: R
            }
          };
      }
      return {};
    }
  };
};
function St(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Et(e) {
  return $o.some((t) => e[t] >= 0);
}
const Xo = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: o = "referenceHidden",
        ...r
      } = Q(e, t);
      switch (o) {
        case "referenceHidden": {
          const i = await Pe(t, {
            ...r,
            elementContext: "reference"
          }), s = St(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Et(s)
            }
          };
        }
        case "escaped": {
          const i = await Pe(t, {
            ...r,
            altBoundary: !0
          }), s = St(i, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Et(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function qo(e, t) {
  const {
    placement: n,
    platform: o,
    elements: r
  } = e, i = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), s = ee(n), a = ge(n), c = xe(n) === "y", u = ["left", "top"].includes(s) ? -1 : 1, d = i && c ? -1 : 1, l = Q(t, e);
  let {
    mainAxis: f,
    crossAxis: m,
    alignmentAxis: h
  } = typeof l == "number" ? {
    mainAxis: l,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...l
  };
  return a && typeof h == "number" && (m = a === "end" ? h * -1 : h), c ? {
    x: m * d,
    y: f * u
  } : {
    x: f * u,
    y: m * d
  };
}
const Zo = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o
      } = t, r = await qo(t, e);
      return {
        x: n + r.x,
        y: o + r.y,
        data: r
      };
    }
  };
}, Jo = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o,
        placement: r
      } = t, {
        mainAxis: i = !0,
        crossAxis: s = !1,
        limiter: a = {
          fn: (w) => {
            let {
              x,
              y
            } = w;
            return {
              x,
              y
            };
          }
        },
        ...c
      } = Q(e, t), u = {
        x: n,
        y: o
      }, d = await Pe(t, c), l = xe(ee(r)), f = it(l);
      let m = u[f], h = u[l];
      if (i) {
        const w = f === "y" ? "top" : "left", x = f === "y" ? "bottom" : "right", y = m + d[w], A = m - d[x];
        m = Qe(y, m, A);
      }
      if (s) {
        const w = l === "y" ? "top" : "left", x = l === "y" ? "bottom" : "right", y = h + d[w], A = h - d[x];
        h = Qe(y, h, A);
      }
      const g = a.fn({
        ...t,
        [f]: m,
        [l]: h
      });
      return {
        ...g,
        data: {
          x: g.x - n,
          y: g.y - o
        }
      };
    }
  };
}, Qo = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: o,
        placement: r,
        rects: i,
        middlewareData: s
      } = t, {
        offset: a = 0,
        mainAxis: c = !0,
        crossAxis: u = !0
      } = Q(e, t), d = {
        x: n,
        y: o
      }, l = xe(r), f = it(l);
      let m = d[f], h = d[l];
      const g = Q(a, t), w = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (c) {
        const A = f === "y" ? "height" : "width", P = i.reference[f] - i.floating[A] + w.mainAxis, b = i.reference[f] + i.reference[A] - w.mainAxis;
        m < P ? m = P : m > b && (m = b);
      }
      if (u) {
        var x, y;
        const A = f === "y" ? "width" : "height", P = ["top", "left"].includes(ee(r)), b = i.reference[l] - i.floating[A] + (P && ((x = s.offset) == null ? void 0 : x[l]) || 0) + (P ? 0 : w.crossAxis), M = i.reference[l] + i.reference[A] + (P ? 0 : ((y = s.offset) == null ? void 0 : y[l]) || 0) - (P ? w.crossAxis : 0);
        h < b ? h = b : h > M && (h = M);
      }
      return {
        [f]: m,
        [l]: h
      };
    }
  };
}, er = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: n,
        rects: o,
        platform: r,
        elements: i
      } = t, {
        apply: s = () => {
        },
        ...a
      } = Q(e, t), c = await Pe(t, a), u = ee(n), d = ge(n), l = xe(n) === "y", {
        width: f,
        height: m
      } = o.floating;
      let h, g;
      u === "top" || u === "bottom" ? (h = u, g = d === (await (r.isRTL == null ? void 0 : r.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (g = u, h = d === "end" ? "top" : "bottom");
      const w = m - c[h], x = f - c[g], y = !t.middlewareData.shift;
      let A = w, P = x;
      if (l) {
        const M = f - c.left - c.right;
        P = d || y ? se(x, M) : M;
      } else {
        const M = m - c.top - c.bottom;
        A = d || y ? se(w, M) : M;
      }
      if (y && !d) {
        const M = G(c.left, 0), E = G(c.right, 0), j = G(c.top, 0), T = G(c.bottom, 0);
        l ? P = f - 2 * (M !== 0 || E !== 0 ? M + E : G(c.left, c.right)) : A = m - 2 * (j !== 0 || T !== 0 ? j + T : G(c.top, c.bottom));
      }
      await s({
        ...t,
        availableWidth: P,
        availableHeight: A
      });
      const b = await r.getDimensions(i.floating);
      return f !== b.width || m !== b.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function ae(e) {
  return Gt(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function V(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function re(e) {
  var t;
  return (t = (Gt(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Gt(e) {
  return e instanceof Node || e instanceof V(e).Node;
}
function te(e) {
  return e instanceof Element || e instanceof V(e).Element;
}
function Z(e) {
  return e instanceof HTMLElement || e instanceof V(e).HTMLElement;
}
function Rt(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof V(e).ShadowRoot;
}
function Re(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: r
  } = Y(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(r);
}
function tr(e) {
  return ["table", "td", "th"].includes(ae(e));
}
function at(e) {
  const t = lt(), n = Y(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function nr(e) {
  let t = he(e);
  for (; Z(t) && !Ue(t); ) {
    if (at(t))
      return t;
    t = he(t);
  }
  return null;
}
function lt() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ue(e) {
  return ["html", "body", "#document"].includes(ae(e));
}
function Y(e) {
  return V(e).getComputedStyle(e);
}
function Ye(e) {
  return te(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function he(e) {
  if (ae(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Rt(e) && e.host || // Fallback.
    re(e)
  );
  return Rt(t) ? t.host : t;
}
function Wt(e) {
  const t = he(e);
  return Ue(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Z(t) && Re(t) ? t : Wt(t);
}
function He(e, t) {
  var n;
  t === void 0 && (t = []);
  const o = Wt(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), i = V(o);
  return r ? t.concat(i, i.visualViewport || [], Re(o) ? o : []) : t.concat(o, He(o));
}
function Vt(e) {
  const t = Y(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const r = Z(e), i = r ? e.offsetWidth : n, s = r ? e.offsetHeight : o, a = $e(n) !== i || $e(o) !== s;
  return a && (n = i, o = s), {
    width: n,
    height: o,
    $: a
  };
}
function ut(e) {
  return te(e) ? e : e.contextElement;
}
function me(e) {
  const t = ut(e);
  if (!Z(t))
    return ce(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: r,
    $: i
  } = Vt(t);
  let s = (i ? $e(n.width) : n.width) / o, a = (i ? $e(n.height) : n.height) / r;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const or = /* @__PURE__ */ ce(0);
function Kt(e) {
  const t = V(e);
  return !lt() || !t.visualViewport ? or : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function rr(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== V(e) ? !1 : t;
}
function ue(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), i = ut(e);
  let s = ce(1);
  t && (o ? te(o) && (s = me(o)) : s = me(e));
  const a = rr(i, n, o) ? Kt(i) : ce(0);
  let c = (r.left + a.x) / s.x, u = (r.top + a.y) / s.y, d = r.width / s.x, l = r.height / s.y;
  if (i) {
    const f = V(i), m = o && te(o) ? V(o) : o;
    let h = f.frameElement;
    for (; h && o && m !== f; ) {
      const g = me(h), w = h.getBoundingClientRect(), x = Y(h), y = w.left + (h.clientLeft + parseFloat(x.paddingLeft)) * g.x, A = w.top + (h.clientTop + parseFloat(x.paddingTop)) * g.y;
      c *= g.x, u *= g.y, d *= g.x, l *= g.y, c += y, u += A, h = V(h).frameElement;
    }
  }
  return ze({
    width: d,
    height: l,
    x: c,
    y: u
  });
}
function ir(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: o
  } = e;
  const r = Z(n), i = re(n);
  if (n === i)
    return t;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = ce(1);
  const c = ce(0);
  if ((r || !r && o !== "fixed") && ((ae(n) !== "body" || Re(i)) && (s = Ye(n)), Z(n))) {
    const u = ue(n);
    a = me(n), c.x = u.x + n.clientLeft, c.y = u.y + n.clientTop;
  }
  return {
    width: t.width * a.x,
    height: t.height * a.y,
    x: t.x * a.x - s.scrollLeft * a.x + c.x,
    y: t.y * a.y - s.scrollTop * a.y + c.y
  };
}
function sr(e) {
  return Array.from(e.getClientRects());
}
function Ut(e) {
  return ue(re(e)).left + Ye(e).scrollLeft;
}
function cr(e) {
  const t = re(e), n = Ye(e), o = e.ownerDocument.body, r = G(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), i = G(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let s = -n.scrollLeft + Ut(e);
  const a = -n.scrollTop;
  return Y(o).direction === "rtl" && (s += G(t.clientWidth, o.clientWidth) - r), {
    width: r,
    height: i,
    x: s,
    y: a
  };
}
function ar(e, t) {
  const n = V(e), o = re(e), r = n.visualViewport;
  let i = o.clientWidth, s = o.clientHeight, a = 0, c = 0;
  if (r) {
    i = r.width, s = r.height;
    const u = lt();
    (!u || u && t === "fixed") && (a = r.offsetLeft, c = r.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: c
  };
}
function lr(e, t) {
  const n = ue(e, !0, t === "fixed"), o = n.top + e.clientTop, r = n.left + e.clientLeft, i = Z(e) ? me(e) : ce(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, c = r * i.x, u = o * i.y;
  return {
    width: s,
    height: a,
    x: c,
    y: u
  };
}
function Ot(e, t, n) {
  let o;
  if (t === "viewport")
    o = ar(e, n);
  else if (t === "document")
    o = cr(re(e));
  else if (te(t))
    o = lr(t, n);
  else {
    const r = Kt(e);
    o = {
      ...t,
      x: t.x - r.x,
      y: t.y - r.y
    };
  }
  return ze(o);
}
function Yt(e, t) {
  const n = he(e);
  return n === t || !te(n) || Ue(n) ? !1 : Y(n).position === "fixed" || Yt(n, t);
}
function ur(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = He(e).filter((a) => te(a) && ae(a) !== "body"), r = null;
  const i = Y(e).position === "fixed";
  let s = i ? he(e) : e;
  for (; te(s) && !Ue(s); ) {
    const a = Y(s), c = at(s);
    !c && a.position === "fixed" && (r = null), (i ? !c && !r : !c && a.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || Re(s) && !c && Yt(e, s)) ? o = o.filter((d) => d !== s) : r = a, s = he(s);
  }
  return t.set(e, o), o;
}
function dr(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: r
  } = e;
  const s = [...n === "clippingAncestors" ? ur(t, this._c) : [].concat(n), o], a = s[0], c = s.reduce((u, d) => {
    const l = Ot(t, d, r);
    return u.top = G(l.top, u.top), u.right = se(l.right, u.right), u.bottom = se(l.bottom, u.bottom), u.left = G(l.left, u.left), u;
  }, Ot(t, a, r));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function fr(e) {
  return Vt(e);
}
function pr(e, t, n) {
  const o = Z(t), r = re(t), i = n === "fixed", s = ue(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = ce(0);
  if (o || !o && !i)
    if ((ae(t) !== "body" || Re(r)) && (a = Ye(t)), o) {
      const u = ue(t, !0, i, t);
      c.x = u.x + t.clientLeft, c.y = u.y + t.clientTop;
    } else r && (c.x = Ut(r));
  return {
    x: s.left + a.scrollLeft - c.x,
    y: s.top + a.scrollTop - c.y,
    width: s.width,
    height: s.height
  };
}
function Nt(e, t) {
  return !Z(e) || Y(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Xt(e, t) {
  const n = V(e);
  if (!Z(e))
    return n;
  let o = Nt(e, t);
  for (; o && tr(o) && Y(o).position === "static"; )
    o = Nt(o, t);
  return o && (ae(o) === "html" || ae(o) === "body" && Y(o).position === "static" && !at(o)) ? n : o || nr(e) || n;
}
const mr = async function(e) {
  let {
    reference: t,
    floating: n,
    strategy: o
  } = e;
  const r = this.getOffsetParent || Xt, i = this.getDimensions;
  return {
    reference: pr(t, await r(n), o),
    floating: {
      x: 0,
      y: 0,
      ...await i(n)
    }
  };
};
function hr(e) {
  return Y(e).direction === "rtl";
}
const gr = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ir,
  getDocumentElement: re,
  getClippingRect: dr,
  getOffsetParent: Xt,
  getElementRects: mr,
  getClientRects: sr,
  getDimensions: fr,
  getScale: me,
  isElement: te,
  isRTL: hr
};
function xr(e, t) {
  let n = null, o;
  const r = re(e);
  function i() {
    clearTimeout(o), n && n.disconnect(), n = null;
  }
  function s(a, c) {
    a === void 0 && (a = !1), c === void 0 && (c = 1), i();
    const {
      left: u,
      top: d,
      width: l,
      height: f
    } = e.getBoundingClientRect();
    if (a || t(), !l || !f)
      return;
    const m = je(d), h = je(r.clientWidth - (u + l)), g = je(r.clientHeight - (d + f)), w = je(u), y = {
      rootMargin: -m + "px " + -h + "px " + -g + "px " + -w + "px",
      threshold: G(0, se(1, c)) || 1
    };
    let A = !0;
    function P(b) {
      const M = b[0].intersectionRatio;
      if (M !== c) {
        if (!A)
          return s();
        M ? s(!1, M) : o = setTimeout(() => {
          s(!1, 1e-7);
        }, 100);
      }
      A = !1;
    }
    try {
      n = new IntersectionObserver(P, {
        ...y,
        // Handle <iframe>s
        root: r.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(P, y);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function vr(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = o, u = ut(e), d = r || i ? [...u ? He(u) : [], ...He(t)] : [];
  d.forEach((x) => {
    r && x.addEventListener("scroll", n, {
      passive: !0
    }), i && x.addEventListener("resize", n);
  });
  const l = u && a ? xr(u, n) : null;
  let f = -1, m = null;
  s && (m = new ResizeObserver((x) => {
    let [y] = x;
    y && y.target === u && m && (m.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      m && m.observe(t);
    })), n();
  }), u && !c && m.observe(u), m.observe(t));
  let h, g = c ? ue(e) : null;
  c && w();
  function w() {
    const x = ue(e);
    g && (x.x !== g.x || x.y !== g.y || x.width !== g.width || x.height !== g.height) && n(), g = x, h = requestAnimationFrame(w);
  }
  return n(), () => {
    d.forEach((x) => {
      r && x.removeEventListener("scroll", n), i && x.removeEventListener("resize", n);
    }), l && l(), m && m.disconnect(), m = null, c && cancelAnimationFrame(h);
  };
}
const wr = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), r = {
    platform: gr,
    ...n
  }, i = {
    ...r.platform,
    _c: o
  };
  return Uo(e, t, {
    ...r,
    platform: i
  });
}, yr = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: o,
        padding: r
      } = typeof e == "function" ? e(n) : e;
      return o && t(o) ? o.current != null ? _t({
        element: o.current,
        padding: r
      }).fn(n) : {} : o ? _t({
        element: o,
        padding: r
      }).fn(n) : {};
    }
  };
};
var ke = typeof document < "u" ? po : ie;
function Ge(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, o, r;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n != t.length) return !1;
      for (o = n; o-- !== 0; )
        if (!Ge(e[o], t[o]))
          return !1;
      return !0;
    }
    if (r = Object.keys(e), n = r.length, n !== Object.keys(t).length)
      return !1;
    for (o = n; o-- !== 0; )
      if (!{}.hasOwnProperty.call(t, r[o]))
        return !1;
    for (o = n; o-- !== 0; ) {
      const i = r[o];
      if (!(i === "_owner" && e.$$typeof) && !Ge(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function qt(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Dt(e, t) {
  const n = qt(e);
  return Math.round(t * n) / n;
}
function It(e) {
  const t = D(e);
  return ke(() => {
    t.current = e;
  }), t;
}
function br(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: o = [],
    platform: r,
    elements: {
      reference: i,
      floating: s
    } = {},
    transform: a = !0,
    whileElementsMounted: c,
    open: u
  } = e, [d, l] = W({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [f, m] = W(o);
  Ge(f, o) || m(o);
  const [h, g] = W(null), [w, x] = W(null), y = X((_) => {
    _ != M.current && (M.current = _, g(_));
  }, [g]), A = X((_) => {
    _ !== E.current && (E.current = _, x(_));
  }, [x]), P = i || h, b = s || w, M = D(null), E = D(null), j = D(d), T = It(c), k = It(r), N = X(() => {
    if (!M.current || !E.current)
      return;
    const _ = {
      placement: t,
      strategy: n,
      middleware: f
    };
    k.current && (_.platform = k.current), wr(M.current, E.current, _).then((H) => {
      const I = {
        ...H,
        isPositioned: !0
      };
      L.current && !Ge(j.current, I) && (j.current = I, fo(() => {
        l(I);
      }));
    });
  }, [f, t, n, k]);
  ke(() => {
    u === !1 && j.current.isPositioned && (j.current.isPositioned = !1, l((_) => ({
      ..._,
      isPositioned: !1
    })));
  }, [u]);
  const L = D(!1);
  ke(() => (L.current = !0, () => {
    L.current = !1;
  }), []), ke(() => {
    if (P && (M.current = P), b && (E.current = b), P && b) {
      if (T.current)
        return T.current(P, b, N);
      N();
    }
  }, [P, b, N, T]);
  const R = Te(() => ({
    reference: M,
    floating: E,
    setReference: y,
    setFloating: A
  }), [y, A]), O = Te(() => ({
    reference: P,
    floating: b
  }), [P, b]), F = Te(() => {
    const _ = {
      position: n,
      left: 0,
      top: 0
    };
    if (!O.floating)
      return _;
    const H = Dt(O.floating, d.x), I = Dt(O.floating, d.y);
    return a ? {
      ..._,
      transform: "translate(" + H + "px, " + I + "px)",
      ...qt(O.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: H,
      top: I
    };
  }, [n, a, O.floating, d.x, d.y]);
  return Te(() => ({
    ...d,
    update: N,
    refs: R,
    elements: O,
    floatingStyles: F
  }), [d, N, R, O, F]);
}
var Mr = "Arrow", Zt = v((e, t) => {
  const { children: n, width: o = 10, height: r = 5, ...i } = e;
  return /* @__PURE__ */ p.jsx(
    ne.svg,
    {
      ...i,
      ref: t,
      width: o,
      height: r,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ p.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Zt.displayName = Mr;
var Cr = Zt, dt = "Popper", [Jt, Qt] = ot(dt), [Ar, en] = Jt(dt), tn = (e) => {
  const { __scopePopper: t, children: n } = e, [o, r] = W(null);
  return /* @__PURE__ */ p.jsx(Ar, { scope: t, anchor: o, onAnchorChange: r, children: n });
};
tn.displayName = dt;
var nn = "PopperAnchor", on = v(
  (e, t) => {
    const { __scopePopper: n, virtualRef: o, ...r } = e, i = en(nn, n), s = D(null), a = de(t, s), c = D(null);
    return ie(() => {
      const u = c.current;
      c.current = (o == null ? void 0 : o.current) || s.current, u !== c.current && i.onAnchorChange(c.current);
    }), o ? null : /* @__PURE__ */ p.jsx(ne.div, { ...r, ref: a });
  }
);
on.displayName = nn;
var ft = "PopperContent", [Pr, _r] = Jt(ft), rn = v(
  (e, t) => {
    var J, ye, K, be, yt, bt;
    const {
      __scopePopper: n,
      side: o = "bottom",
      sideOffset: r = 0,
      align: i = "center",
      alignOffset: s = 0,
      arrowPadding: a = 0,
      avoidCollisions: c = !0,
      collisionBoundary: u = [],
      collisionPadding: d = 0,
      sticky: l = "partial",
      hideWhenDetached: f = !1,
      updatePositionStrategy: m = "optimized",
      onPlaced: h,
      ...g
    } = e, w = en(ft, n), [x, y] = W(null), A = de(t, (Me) => y(Me)), [P, b] = W(null), M = Po(P), E = (M == null ? void 0 : M.width) ?? 0, j = (M == null ? void 0 : M.height) ?? 0, T = o + (i !== "center" ? "-" + i : ""), k = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d }, N = Array.isArray(u) ? u : [u], L = N.length > 0, R = {
      padding: k,
      boundary: N.filter(Er),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: L
    }, { refs: O, floatingStyles: F, placement: _, isPositioned: H, middlewareData: I } = br({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: T,
      whileElementsMounted: (...Me) => vr(...Me, {
        animationFrame: m === "always"
      }),
      elements: {
        reference: w.anchor
      },
      middleware: [
        Zo({ mainAxis: r + j, alignmentAxis: s }),
        c && Jo({
          mainAxis: !0,
          crossAxis: !1,
          limiter: l === "partial" ? Qo() : void 0,
          ...R
        }),
        c && Yo({ ...R }),
        er({
          ...R,
          apply: ({ elements: Me, rects: Mt, availableWidth: oo, availableHeight: ro }) => {
            const { width: io, height: so } = Mt.reference, Ie = Me.floating.style;
            Ie.setProperty("--radix-popper-available-width", `${oo}px`), Ie.setProperty("--radix-popper-available-height", `${ro}px`), Ie.setProperty("--radix-popper-anchor-width", `${io}px`), Ie.setProperty("--radix-popper-anchor-height", `${so}px`);
          }
        }),
        P && yr({ element: P, padding: a }),
        Rr({ arrowWidth: E, arrowHeight: j }),
        f && Xo({ strategy: "referenceHidden", ...R })
      ]
    }), [C, z] = an(_), $ = rt(h);
    Je(() => {
      H && ($ == null || $());
    }, [H, $]);
    const q = (J = I.arrow) == null ? void 0 : J.x, ve = (ye = I.arrow) == null ? void 0 : ye.y, we = ((K = I.arrow) == null ? void 0 : K.centerOffset) !== 0, [De, le] = W();
    return Je(() => {
      x && le(window.getComputedStyle(x).zIndex);
    }, [x]), /* @__PURE__ */ p.jsx(
      "div",
      {
        ref: O.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...F,
          transform: H ? F.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: De,
          "--radix-popper-transform-origin": [
            (be = I.transformOrigin) == null ? void 0 : be.x,
            (yt = I.transformOrigin) == null ? void 0 : yt.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((bt = I.hide) == null ? void 0 : bt.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ p.jsx(
          Pr,
          {
            scope: n,
            placedSide: C,
            onArrowChange: b,
            arrowX: q,
            arrowY: ve,
            shouldHideArrow: we,
            children: /* @__PURE__ */ p.jsx(
              ne.div,
              {
                "data-side": C,
                "data-align": z,
                ...g,
                ref: A,
                style: {
                  ...g.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: H ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
rn.displayName = ft;
var sn = "PopperArrow", Sr = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, cn = v(function(t, n) {
  const { __scopePopper: o, ...r } = t, i = _r(sn, o), s = Sr[i.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ p.jsx(
      "span",
      {
        ref: i.onArrowChange,
        style: {
          position: "absolute",
          left: i.arrowX,
          top: i.arrowY,
          [s]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[i.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[i.placedSide],
          visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ p.jsx(
          Cr,
          {
            ...r,
            ref: n,
            style: {
              ...r.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
cn.displayName = sn;
function Er(e) {
  return e !== null;
}
var Rr = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var w, x, y;
    const { placement: n, rects: o, middlewareData: r } = t, s = ((w = r.arrow) == null ? void 0 : w.centerOffset) !== 0, a = s ? 0 : e.arrowWidth, c = s ? 0 : e.arrowHeight, [u, d] = an(n), l = { start: "0%", center: "50%", end: "100%" }[d], f = (((x = r.arrow) == null ? void 0 : x.x) ?? 0) + a / 2, m = (((y = r.arrow) == null ? void 0 : y.y) ?? 0) + c / 2;
    let h = "", g = "";
    return u === "bottom" ? (h = s ? l : `${f}px`, g = `${-c}px`) : u === "top" ? (h = s ? l : `${f}px`, g = `${o.floating.height + c}px`) : u === "right" ? (h = `${-c}px`, g = s ? l : `${m}px`) : u === "left" && (h = `${o.floating.width + c}px`, g = s ? l : `${m}px`), { data: { x: h, y: g } };
  }
});
function an(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Or = tn, Nr = on, Dr = rn, Ir = cn, tt = ["Enter", " "], Tr = ["ArrowDown", "PageUp", "Home"], ln = ["ArrowUp", "PageDown", "End"], jr = [...Tr, ...ln], kr = {
  ltr: [...tt, "ArrowRight"],
  rtl: [...tt, "ArrowLeft"]
}, Lr = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, Oe = "Menu", [_e, Fr, $r] = mo(Oe), [fe, un] = ot(Oe, [
  $r,
  Qt,
  Ft
]), Xe = Qt(), dn = Ft(), [Br, pe] = fe(Oe), [zr, Ne] = fe(Oe), fn = (e) => {
  const { __scopeMenu: t, open: n = !1, children: o, dir: r, onOpenChange: i, modal: s = !0 } = e, a = Xe(t), [c, u] = W(null), d = D(!1), l = rt(i), f = ho(r);
  return ie(() => {
    const m = () => {
      d.current = !0, document.addEventListener("pointerdown", h, { capture: !0, once: !0 }), document.addEventListener("pointermove", h, { capture: !0, once: !0 });
    }, h = () => d.current = !1;
    return document.addEventListener("keydown", m, { capture: !0 }), () => {
      document.removeEventListener("keydown", m, { capture: !0 }), document.removeEventListener("pointerdown", h, { capture: !0 }), document.removeEventListener("pointermove", h, { capture: !0 });
    };
  }, []), /* @__PURE__ */ p.jsx(Or, { ...a, children: /* @__PURE__ */ p.jsx(
    Br,
    {
      scope: t,
      open: n,
      onOpenChange: l,
      content: c,
      onContentChange: u,
      children: /* @__PURE__ */ p.jsx(
        zr,
        {
          scope: t,
          onClose: X(() => l(!1), [l]),
          isUsingKeyboardRef: d,
          dir: f,
          modal: s,
          children: o
        }
      )
    }
  ) });
};
fn.displayName = Oe;
var Hr = "MenuAnchor", pt = v(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e, r = Xe(n);
    return /* @__PURE__ */ p.jsx(Nr, { ...r, ...o, ref: t });
  }
);
pt.displayName = Hr;
var mt = "MenuPortal", [Gr, pn] = fe(mt, {
  forceMount: void 0
}), mn = (e) => {
  const { __scopeMenu: t, forceMount: n, children: o, container: r } = e, i = pe(mt, t);
  return /* @__PURE__ */ p.jsx(Gr, { scope: t, forceMount: n, children: /* @__PURE__ */ p.jsx(Ke, { present: n || i.open, children: /* @__PURE__ */ p.jsx(vo, { asChild: !0, container: r, children: o }) }) });
};
mn.displayName = mt;
var U = "MenuContent", [Wr, ht] = fe(U), hn = v(
  (e, t) => {
    const n = pn(U, e.__scopeMenu), { forceMount: o = n.forceMount, ...r } = e, i = pe(U, e.__scopeMenu), s = Ne(U, e.__scopeMenu);
    return /* @__PURE__ */ p.jsx(_e.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ p.jsx(Ke, { present: o || i.open, children: /* @__PURE__ */ p.jsx(_e.Slot, { scope: e.__scopeMenu, children: s.modal ? /* @__PURE__ */ p.jsx(Vr, { ...r, ref: t }) : /* @__PURE__ */ p.jsx(Kr, { ...r, ref: t }) }) }) });
  }
), Vr = v(
  (e, t) => {
    const n = pe(U, e.__scopeMenu), o = D(null), r = de(t, o);
    return ie(() => {
      const i = o.current;
      if (i) return wo(i);
    }, []), /* @__PURE__ */ p.jsx(
      gt,
      {
        ...e,
        ref: r,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: S(
          e.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), Kr = v((e, t) => {
  const n = pe(U, e.__scopeMenu);
  return /* @__PURE__ */ p.jsx(
    gt,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), Ur = ao("MenuContent.ScrollLock"), gt = v(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: o = !1,
      trapFocus: r,
      onOpenAutoFocus: i,
      onCloseAutoFocus: s,
      disableOutsidePointerEvents: a,
      onEntryFocus: c,
      onEscapeKeyDown: u,
      onPointerDownOutside: d,
      onFocusOutside: l,
      onInteractOutside: f,
      onDismiss: m,
      disableOutsideScroll: h,
      ...g
    } = e, w = pe(U, n), x = Ne(U, n), y = Xe(n), A = dn(n), P = Fr(n), [b, M] = W(null), E = D(null), j = de(t, E, w.onContentChange), T = D(0), k = D(""), N = D(0), L = D(null), R = D("right"), O = D(0), F = h ? bo : kt, _ = h ? { as: Ur, allowPinchZoom: !0 } : void 0, H = (C) => {
      var J, ye;
      const z = k.current + C, $ = P().filter((K) => !K.disabled), q = document.activeElement, ve = (J = $.find((K) => K.ref.current === q)) == null ? void 0 : J.textValue, we = $.map((K) => K.textValue), De = ii(we, z, ve), le = (ye = $.find((K) => K.textValue === De)) == null ? void 0 : ye.ref.current;
      (function K(be) {
        k.current = be, window.clearTimeout(T.current), be !== "" && (T.current = window.setTimeout(() => K(""), 1e3));
      })(z), le && setTimeout(() => le.focus());
    };
    ie(() => () => window.clearTimeout(T.current), []), yo();
    const I = X((C) => {
      var $, q;
      return R.current === (($ = L.current) == null ? void 0 : $.side) && ci(C, (q = L.current) == null ? void 0 : q.area);
    }, []);
    return /* @__PURE__ */ p.jsx(
      Wr,
      {
        scope: n,
        searchRef: k,
        onItemEnter: X(
          (C) => {
            I(C) && C.preventDefault();
          },
          [I]
        ),
        onItemLeave: X(
          (C) => {
            var z;
            I(C) || ((z = E.current) == null || z.focus(), M(null));
          },
          [I]
        ),
        onTriggerLeave: X(
          (C) => {
            I(C) && C.preventDefault();
          },
          [I]
        ),
        pointerGraceTimerRef: N,
        onPointerGraceIntentChange: X((C) => {
          L.current = C;
        }, []),
        children: /* @__PURE__ */ p.jsx(F, { ..._, children: /* @__PURE__ */ p.jsx(
          Mo,
          {
            asChild: !0,
            trapped: r,
            onMountAutoFocus: S(i, (C) => {
              var z;
              C.preventDefault(), (z = E.current) == null || z.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: s,
            children: /* @__PURE__ */ p.jsx(
              Co,
              {
                asChild: !0,
                disableOutsidePointerEvents: a,
                onEscapeKeyDown: u,
                onPointerDownOutside: d,
                onFocusOutside: l,
                onInteractOutside: f,
                onDismiss: m,
                children: /* @__PURE__ */ p.jsx(
                  xo,
                  {
                    asChild: !0,
                    ...A,
                    dir: x.dir,
                    orientation: "vertical",
                    loop: o,
                    currentTabStopId: b,
                    onCurrentTabStopIdChange: M,
                    onEntryFocus: S(c, (C) => {
                      x.isUsingKeyboardRef.current || C.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ p.jsx(
                      Dr,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Nn(w.open),
                        "data-radix-menu-content": "",
                        dir: x.dir,
                        ...y,
                        ...g,
                        ref: j,
                        style: { outline: "none", ...g.style },
                        onKeyDown: S(g.onKeyDown, (C) => {
                          const $ = C.target.closest("[data-radix-menu-content]") === C.currentTarget, q = C.ctrlKey || C.altKey || C.metaKey, ve = C.key.length === 1;
                          $ && (C.key === "Tab" && C.preventDefault(), !q && ve && H(C.key));
                          const we = E.current;
                          if (C.target !== we || !jr.includes(C.key)) return;
                          C.preventDefault();
                          const le = P().filter((J) => !J.disabled).map((J) => J.ref.current);
                          ln.includes(C.key) && le.reverse(), oi(le);
                        }),
                        onBlur: S(e.onBlur, (C) => {
                          C.currentTarget.contains(C.target) || (window.clearTimeout(T.current), k.current = "");
                        }),
                        onPointerMove: S(
                          e.onPointerMove,
                          Se((C) => {
                            const z = C.target, $ = O.current !== C.clientX;
                            if (C.currentTarget.contains(z) && $) {
                              const q = C.clientX > O.current ? "right" : "left";
                              R.current = q, O.current = C.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
hn.displayName = U;
var Yr = "MenuGroup", xt = v(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e;
    return /* @__PURE__ */ p.jsx(ne.div, { role: "group", ...o, ref: t });
  }
);
xt.displayName = Yr;
var Xr = "MenuLabel", gn = v(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e;
    return /* @__PURE__ */ p.jsx(ne.div, { ...o, ref: t });
  }
);
gn.displayName = Xr;
var We = "MenuItem", Tt = "menu.itemSelect", qe = v(
  (e, t) => {
    const { disabled: n = !1, onSelect: o, ...r } = e, i = D(null), s = Ne(We, e.__scopeMenu), a = ht(We, e.__scopeMenu), c = de(t, i), u = D(!1), d = () => {
      const l = i.current;
      if (!n && l) {
        const f = new CustomEvent(Tt, { bubbles: !0, cancelable: !0 });
        l.addEventListener(Tt, (m) => o == null ? void 0 : o(m), { once: !0 }), co(l, f), f.defaultPrevented ? u.current = !1 : s.onClose();
      }
    };
    return /* @__PURE__ */ p.jsx(
      xn,
      {
        ...r,
        ref: c,
        disabled: n,
        onClick: S(e.onClick, d),
        onPointerDown: (l) => {
          var f;
          (f = e.onPointerDown) == null || f.call(e, l), u.current = !0;
        },
        onPointerUp: S(e.onPointerUp, (l) => {
          var f;
          u.current || (f = l.currentTarget) == null || f.click();
        }),
        onKeyDown: S(e.onKeyDown, (l) => {
          const f = a.searchRef.current !== "";
          n || f && l.key === " " || tt.includes(l.key) && (l.currentTarget.click(), l.preventDefault());
        })
      }
    );
  }
);
qe.displayName = We;
var xn = v(
  (e, t) => {
    const { __scopeMenu: n, disabled: o = !1, textValue: r, ...i } = e, s = ht(We, n), a = dn(n), c = D(null), u = de(t, c), [d, l] = W(!1), [f, m] = W("");
    return ie(() => {
      const h = c.current;
      h && m((h.textContent ?? "").trim());
    }, [i.children]), /* @__PURE__ */ p.jsx(
      _e.ItemSlot,
      {
        scope: n,
        disabled: o,
        textValue: r ?? f,
        children: /* @__PURE__ */ p.jsx(go, { asChild: !0, ...a, focusable: !o, children: /* @__PURE__ */ p.jsx(
          ne.div,
          {
            role: "menuitem",
            "data-highlighted": d ? "" : void 0,
            "aria-disabled": o || void 0,
            "data-disabled": o ? "" : void 0,
            ...i,
            ref: u,
            onPointerMove: S(
              e.onPointerMove,
              Se((h) => {
                o ? s.onItemLeave(h) : (s.onItemEnter(h), h.defaultPrevented || h.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: S(
              e.onPointerLeave,
              Se((h) => s.onItemLeave(h))
            ),
            onFocus: S(e.onFocus, () => l(!0)),
            onBlur: S(e.onBlur, () => l(!1))
          }
        ) })
      }
    );
  }
), qr = "MenuCheckboxItem", vn = v(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: o, ...r } = e;
    return /* @__PURE__ */ p.jsx(Cn, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ p.jsx(
      qe,
      {
        role: "menuitemcheckbox",
        "aria-checked": Ve(n) ? "mixed" : n,
        ...r,
        ref: t,
        "data-state": wt(n),
        onSelect: S(
          r.onSelect,
          () => o == null ? void 0 : o(Ve(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
vn.displayName = qr;
var wn = "MenuRadioGroup", [Zr, Jr] = fe(
  wn,
  { value: void 0, onValueChange: () => {
  } }
), yn = v(
  (e, t) => {
    const { value: n, onValueChange: o, ...r } = e, i = rt(o);
    return /* @__PURE__ */ p.jsx(Zr, { scope: e.__scopeMenu, value: n, onValueChange: i, children: /* @__PURE__ */ p.jsx(xt, { ...r, ref: t }) });
  }
);
yn.displayName = wn;
var bn = "MenuRadioItem", Mn = v(
  (e, t) => {
    const { value: n, ...o } = e, r = Jr(bn, e.__scopeMenu), i = n === r.value;
    return /* @__PURE__ */ p.jsx(Cn, { scope: e.__scopeMenu, checked: i, children: /* @__PURE__ */ p.jsx(
      qe,
      {
        role: "menuitemradio",
        "aria-checked": i,
        ...o,
        ref: t,
        "data-state": wt(i),
        onSelect: S(
          o.onSelect,
          () => {
            var s;
            return (s = r.onValueChange) == null ? void 0 : s.call(r, n);
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Mn.displayName = bn;
var vt = "MenuItemIndicator", [Cn, Qr] = fe(
  vt,
  { checked: !1 }
), An = v(
  (e, t) => {
    const { __scopeMenu: n, forceMount: o, ...r } = e, i = Qr(vt, n);
    return /* @__PURE__ */ p.jsx(
      Ke,
      {
        present: o || Ve(i.checked) || i.checked === !0,
        children: /* @__PURE__ */ p.jsx(
          ne.span,
          {
            ...r,
            ref: t,
            "data-state": wt(i.checked)
          }
        )
      }
    );
  }
);
An.displayName = vt;
var ei = "MenuSeparator", Pn = v(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e;
    return /* @__PURE__ */ p.jsx(
      ne.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...o,
        ref: t
      }
    );
  }
);
Pn.displayName = ei;
var ti = "MenuArrow", _n = v(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e, r = Xe(n);
    return /* @__PURE__ */ p.jsx(Ir, { ...r, ...o, ref: t });
  }
);
_n.displayName = ti;
var ni = "MenuSub", [ls, Sn] = fe(ni), Ce = "MenuSubTrigger", En = v(
  (e, t) => {
    const n = pe(Ce, e.__scopeMenu), o = Ne(Ce, e.__scopeMenu), r = Sn(Ce, e.__scopeMenu), i = ht(Ce, e.__scopeMenu), s = D(null), { pointerGraceTimerRef: a, onPointerGraceIntentChange: c } = i, u = { __scopeMenu: e.__scopeMenu }, d = X(() => {
      s.current && window.clearTimeout(s.current), s.current = null;
    }, []);
    return ie(() => d, [d]), ie(() => {
      const l = a.current;
      return () => {
        window.clearTimeout(l), c(null);
      };
    }, [a, c]), /* @__PURE__ */ p.jsx(pt, { asChild: !0, ...u, children: /* @__PURE__ */ p.jsx(
      xn,
      {
        id: r.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": r.contentId,
        "data-state": Nn(n.open),
        ...e,
        ref: nt(t, r.onTriggerChange),
        onClick: (l) => {
          var f;
          (f = e.onClick) == null || f.call(e, l), !(e.disabled || l.defaultPrevented) && (l.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: S(
          e.onPointerMove,
          Se((l) => {
            i.onItemEnter(l), !l.defaultPrevented && !e.disabled && !n.open && !s.current && (i.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
              n.onOpenChange(!0), d();
            }, 100));
          })
        ),
        onPointerLeave: S(
          e.onPointerLeave,
          Se((l) => {
            var m, h;
            d();
            const f = (m = n.content) == null ? void 0 : m.getBoundingClientRect();
            if (f) {
              const g = (h = n.content) == null ? void 0 : h.dataset.side, w = g === "right", x = w ? -5 : 5, y = f[w ? "left" : "right"], A = f[w ? "right" : "left"];
              i.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: l.clientX + x, y: l.clientY },
                  { x: y, y: f.top },
                  { x: A, y: f.top },
                  { x: A, y: f.bottom },
                  { x: y, y: f.bottom }
                ],
                side: g
              }), window.clearTimeout(a.current), a.current = window.setTimeout(
                () => i.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (i.onTriggerLeave(l), l.defaultPrevented) return;
              i.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: S(e.onKeyDown, (l) => {
          var m;
          const f = i.searchRef.current !== "";
          e.disabled || f && l.key === " " || kr[o.dir].includes(l.key) && (n.onOpenChange(!0), (m = n.content) == null || m.focus(), l.preventDefault());
        })
      }
    ) });
  }
);
En.displayName = Ce;
var Rn = "MenuSubContent", On = v(
  (e, t) => {
    const n = pn(U, e.__scopeMenu), { forceMount: o = n.forceMount, ...r } = e, i = pe(U, e.__scopeMenu), s = Ne(U, e.__scopeMenu), a = Sn(Rn, e.__scopeMenu), c = D(null), u = de(t, c);
    return /* @__PURE__ */ p.jsx(_e.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ p.jsx(Ke, { present: o || i.open, children: /* @__PURE__ */ p.jsx(_e.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ p.jsx(
      gt,
      {
        id: a.contentId,
        "aria-labelledby": a.triggerId,
        ...r,
        ref: u,
        align: "start",
        side: s.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (d) => {
          var l;
          s.isUsingKeyboardRef.current && ((l = c.current) == null || l.focus()), d.preventDefault();
        },
        onCloseAutoFocus: (d) => d.preventDefault(),
        onFocusOutside: S(e.onFocusOutside, (d) => {
          d.target !== a.trigger && i.onOpenChange(!1);
        }),
        onEscapeKeyDown: S(e.onEscapeKeyDown, (d) => {
          s.onClose(), d.preventDefault();
        }),
        onKeyDown: S(e.onKeyDown, (d) => {
          var m;
          const l = d.currentTarget.contains(d.target), f = Lr[s.dir].includes(d.key);
          l && f && (i.onOpenChange(!1), (m = a.trigger) == null || m.focus(), d.preventDefault());
        })
      }
    ) }) }) });
  }
);
On.displayName = Rn;
function Nn(e) {
  return e ? "open" : "closed";
}
function Ve(e) {
  return e === "indeterminate";
}
function wt(e) {
  return Ve(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function oi(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function ri(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
function ii(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let s = ri(e, Math.max(i, 0));
  r.length === 1 && (s = s.filter((u) => u !== n));
  const c = s.find(
    (u) => u.toLowerCase().startsWith(r.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function si(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const a = t[i], c = t[s], u = a.x, d = a.y, l = c.x, f = c.y;
    d > o != f > o && n < (l - u) * (o - d) / (f - d) + u && (r = !r);
  }
  return r;
}
function ci(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return si(n, t);
}
function Se(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var ai = fn, li = pt, ui = mn, di = hn, fi = xt, pi = gn, mi = qe, hi = vn, gi = yn, xi = Mn, vi = An, wi = Pn, yi = _n, bi = En, Mi = On, Ze = "DropdownMenu", [Ci] = ot(
  Ze,
  [un]
), B = un(), [Ai, Dn] = Ci(Ze), In = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: o,
    open: r,
    defaultOpen: i,
    onOpenChange: s,
    modal: a = !0
  } = e, c = B(t), u = D(null), [d, l] = lo({
    prop: r,
    defaultProp: i ?? !1,
    onChange: s,
    caller: Ze
  });
  return /* @__PURE__ */ p.jsx(
    Ai,
    {
      scope: t,
      triggerId: Ct(),
      triggerRef: u,
      contentId: Ct(),
      open: d,
      onOpenChange: l,
      onOpenToggle: X(() => l((f) => !f), [l]),
      modal: a,
      children: /* @__PURE__ */ p.jsx(ai, { ...c, open: d, onOpenChange: l, dir: o, modal: a, children: n })
    }
  );
};
In.displayName = Ze;
var Tn = "DropdownMenuTrigger", jn = v(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: o = !1, ...r } = e, i = Dn(Tn, n), s = B(n);
    return /* @__PURE__ */ p.jsx(li, { asChild: !0, ...s, children: /* @__PURE__ */ p.jsx(
      ne.button,
      {
        type: "button",
        id: i.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": i.open,
        "aria-controls": i.open ? i.contentId : void 0,
        "data-state": i.open ? "open" : "closed",
        "data-disabled": o ? "" : void 0,
        disabled: o,
        ...r,
        ref: nt(t, i.triggerRef),
        onPointerDown: S(e.onPointerDown, (a) => {
          !o && a.button === 0 && a.ctrlKey === !1 && (i.onOpenToggle(), i.open || a.preventDefault());
        }),
        onKeyDown: S(e.onKeyDown, (a) => {
          o || (["Enter", " "].includes(a.key) && i.onOpenToggle(), a.key === "ArrowDown" && i.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(a.key) && a.preventDefault());
        })
      }
    ) });
  }
);
jn.displayName = Tn;
var Pi = "DropdownMenuPortal", kn = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, o = B(t);
  return /* @__PURE__ */ p.jsx(ui, { ...o, ...n });
};
kn.displayName = Pi;
var Ln = "DropdownMenuContent", Fn = v(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = Dn(Ln, n), i = B(n), s = D(!1);
    return /* @__PURE__ */ p.jsx(
      di,
      {
        id: r.contentId,
        "aria-labelledby": r.triggerId,
        ...i,
        ...o,
        ref: t,
        onCloseAutoFocus: S(e.onCloseAutoFocus, (a) => {
          var c;
          s.current || (c = r.triggerRef.current) == null || c.focus(), s.current = !1, a.preventDefault();
        }),
        onInteractOutside: S(e.onInteractOutside, (a) => {
          const c = a.detail.originalEvent, u = c.button === 0 && c.ctrlKey === !0, d = c.button === 2 || u;
          (!r.modal || d) && (s.current = !0);
        }),
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
Fn.displayName = Ln;
var _i = "DropdownMenuGroup", $n = v(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = B(n);
    return /* @__PURE__ */ p.jsx(fi, { ...r, ...o, ref: t });
  }
);
$n.displayName = _i;
var Si = "DropdownMenuLabel", Bn = v(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = B(n);
    return /* @__PURE__ */ p.jsx(pi, { ...r, ...o, ref: t });
  }
);
Bn.displayName = Si;
var Ei = "DropdownMenuItem", zn = v(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = B(n);
    return /* @__PURE__ */ p.jsx(mi, { ...r, ...o, ref: t });
  }
);
zn.displayName = Ei;
var Ri = "DropdownMenuCheckboxItem", Hn = v((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = B(n);
  return /* @__PURE__ */ p.jsx(hi, { ...r, ...o, ref: t });
});
Hn.displayName = Ri;
var Oi = "DropdownMenuRadioGroup", Ni = v((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = B(n);
  return /* @__PURE__ */ p.jsx(gi, { ...r, ...o, ref: t });
});
Ni.displayName = Oi;
var Di = "DropdownMenuRadioItem", Gn = v((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = B(n);
  return /* @__PURE__ */ p.jsx(xi, { ...r, ...o, ref: t });
});
Gn.displayName = Di;
var Ii = "DropdownMenuItemIndicator", Wn = v((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = B(n);
  return /* @__PURE__ */ p.jsx(vi, { ...r, ...o, ref: t });
});
Wn.displayName = Ii;
var Ti = "DropdownMenuSeparator", Vn = v((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = B(n);
  return /* @__PURE__ */ p.jsx(wi, { ...r, ...o, ref: t });
});
Vn.displayName = Ti;
var ji = "DropdownMenuArrow", ki = v(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = B(n);
    return /* @__PURE__ */ p.jsx(yi, { ...r, ...o, ref: t });
  }
);
ki.displayName = ji;
var Li = "DropdownMenuSubTrigger", Kn = v((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = B(n);
  return /* @__PURE__ */ p.jsx(bi, { ...r, ...o, ref: t });
});
Kn.displayName = Li;
var Fi = "DropdownMenuSubContent", Un = v((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = B(n);
  return /* @__PURE__ */ p.jsx(
    Mi,
    {
      ...r,
      ...o,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
Un.displayName = Fi;
var $i = In, Bi = jn, zi = kn, Yn = Fn, Hi = $n, Xn = Bn, qn = zn, Zn = Hn, Jn = Gn, Qn = Wn, eo = Vn, to = Kn, no = Un;
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gi = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Wi = Ee("chevron-right", Gi);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vi = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], Ki = Ee("circle", Vi);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ui = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
], us = Ee("ellipsis", Ui);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yi = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
], ds = Ee("external-link", Yi);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xi = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], fs = Ee("user", Xi), ps = $i, ms = Bi, hs = Hi, qi = v(({ className: e, inset: t, children: n, ...o }, r) => /* @__PURE__ */ p.jsxs(
  to,
  {
    ref: r,
    className: oe(
      "flex cursor-default gap-2 select-none hover:bg-accent items-center rounded-xs px-2 py-1.5 text-sm outline-hidden focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      t && "pl-8",
      e
    ),
    ...o,
    children: [
      n,
      /* @__PURE__ */ p.jsx(Wi, { className: "ml-auto" })
    ]
  }
));
qi.displayName = to.displayName;
const Zi = v(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx("div", { className: Lt, children: /* @__PURE__ */ p.jsx(
  no,
  {
    ref: n,
    className: oe(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
) }));
Zi.displayName = no.displayName;
const Ji = v(({ className: e, sideOffset: t = 4, ...n }, o) => /* @__PURE__ */ p.jsx(zi, { children: /* @__PURE__ */ p.jsx("div", { className: Lt, children: /* @__PURE__ */ p.jsx(
  Yn,
  {
    ref: o,
    className: oe(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    sideOffset: t,
    ...n
  }
) }) }));
Ji.displayName = Yn.displayName;
const Qi = v(({ className: e, inset: t, ...n }, o) => /* @__PURE__ */ p.jsx(
  qn,
  {
    ref: o,
    className: oe(
      "relative flex cursor-default select-none cursor-pointer items-center gap-2 rounded-xs px-2 py-1.5 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      t && "pl-8",
      e
    ),
    ...n
  }
));
Qi.displayName = qn.displayName;
const es = v(({ className: e, children: t, checked: n, ...o }, r) => /* @__PURE__ */ p.jsxs(
  Zn,
  {
    ref: r,
    checked: n,
    className: oe(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...o,
    children: [
      /* @__PURE__ */ p.jsx("span", { className: "absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ p.jsx(Qn, { children: /* @__PURE__ */ p.jsx(Ao, { className: "size-4" }) }) }),
      t
    ]
  }
));
es.displayName = Zn.displayName;
const ts = v(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ p.jsxs(
  Jn,
  {
    ref: o,
    className: oe(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ p.jsx("span", { className: "absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ p.jsx(Qn, { children: /* @__PURE__ */ p.jsx(Ki, { className: "size-2 fill-current" }) }) }),
      t
    ]
  }
));
ts.displayName = Jn.displayName;
const ns = v(({ className: e, inset: t, ...n }, o) => /* @__PURE__ */ p.jsx(
  Xn,
  {
    ref: o,
    className: oe(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
ns.displayName = Xn.displayName;
const os = v(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx(
  eo,
  {
    ref: n,
    className: oe("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
os.displayName = eo.displayName;
const rs = v(
  ({ className: e, orientation: t = "horizontal", decorative: n = !0, ...o }, r) => /* @__PURE__ */ p.jsx(
    zt,
    {
      ref: r,
      className: oe(
        "shrink-0 bg-border",
        t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        e
      ),
      decorative: n,
      orientation: t,
      ...o
    }
  )
);
rs.displayName = zt.displayName;
export {
  Nr as A,
  Dr as C,
  ps as D,
  us as E,
  Or as R,
  rs as S,
  fs as U,
  Ir as a,
  ms as b,
  Qt as c,
  Ji as d,
  Qi as e,
  Wi as f,
  Ki as g,
  ds as h,
  hs as i,
  os as j,
  Po as u
};
//# sourceMappingURL=separator-eM4IfLr1.mjs.map
