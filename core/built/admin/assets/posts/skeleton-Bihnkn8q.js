import { am as K, x as C, R as f, ak as O, a9 as te, a6 as B, a7 as vo, k as yo, p as bo, af as Me, ad as Mo, F as Co, i as q, S as $t, a1 as Gt } from "./index-Dqn5WIFh.js";
import { q as je, g as Pe, m as ne, i as nt, p as ot, b as Z, d as D, n as Bt, u as We, a as ze, P as Ao, l as So, k as Ro, o as Po, R as _o, F as Eo, D as Do, e as Kt, h as Wt, C as Oo } from "./check-fsC5BvGC.js";
function Io(e) {
  const [t, n] = K(void 0);
  return je(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const o = new ResizeObserver((r) => {
        if (!Array.isArray(r) || !r.length)
          return;
        const s = r[0];
        let i, c;
        if ("borderBoxSize" in s) {
          const d = s.borderBoxSize, u = Array.isArray(d) ? d[0] : d;
          i = u.inlineSize, c = u.blockSize;
        } else
          i = e.offsetWidth, c = e.offsetHeight;
        n({ width: i, height: c });
      });
      return o.observe(e, { box: "border-box" }), () => o.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
const No = ["top", "right", "bottom", "left"], le = Math.min, H = Math.max, Le = Math.round, Te = Math.floor, ee = (e) => ({
  x: e,
  y: e
}), To = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function rt(e, t, n) {
  return H(e, le(t, n));
}
function re(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function se(e) {
  return e.split("-")[0];
}
function we(e) {
  return e.split("-")[1];
}
function lt(e) {
  return e === "x" ? "y" : "x";
}
function ut(e) {
  return e === "y" ? "height" : "width";
}
function Q(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function dt(e) {
  return lt(Q(e));
}
function jo(e, t, n) {
  n === void 0 && (n = !1);
  const o = we(e), r = dt(e), s = ut(r);
  let i = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = ke(i)), [i, ke(i)];
}
function Fo(e) {
  const t = ke(e);
  return [st(e), t, st(t)];
}
function st(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const Rt = ["left", "right"], Pt = ["right", "left"], Lo = ["top", "bottom"], ko = ["bottom", "top"];
function $o(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Pt : Rt : t ? Rt : Pt;
    case "left":
    case "right":
      return t ? Lo : ko;
    default:
      return [];
  }
}
function Go(e, t, n, o) {
  const r = we(e);
  let s = $o(se(e), n === "start", o);
  return r && (s = s.map((i) => i + "-" + r), t && (s = s.concat(s.map(st)))), s;
}
function ke(e) {
  const t = se(e);
  return To[t] + e.slice(t.length);
}
function Bo(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function zt(e) {
  return typeof e != "number" ? Bo(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function $e(e) {
  const {
    x: t,
    y: n,
    width: o,
    height: r
  } = e;
  return {
    width: o,
    height: r,
    top: n,
    left: t,
    right: t + o,
    bottom: n + r,
    x: t,
    y: n
  };
}
function _t(e, t, n) {
  let {
    reference: o,
    floating: r
  } = e;
  const s = Q(t), i = dt(t), c = ut(i), d = se(t), u = s === "y", l = o.x + o.width / 2 - r.width / 2, a = o.y + o.height / 2 - r.height / 2, p = o[c] / 2 - r[c] / 2;
  let m;
  switch (d) {
    case "top":
      m = {
        x: l,
        y: o.y - r.height
      };
      break;
    case "bottom":
      m = {
        x: l,
        y: o.y + o.height
      };
      break;
    case "right":
      m = {
        x: o.x + o.width,
        y: a
      };
      break;
    case "left":
      m = {
        x: o.x - r.width,
        y: a
      };
      break;
    default:
      m = {
        x: o.x,
        y: o.y
      };
  }
  switch (we(t)) {
    case "start":
      m[i] -= p * (n && u ? -1 : 1);
      break;
    case "end":
      m[i] += p * (n && u ? -1 : 1);
      break;
  }
  return m;
}
async function Ko(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: r,
    platform: s,
    rects: i,
    elements: c,
    strategy: d
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: l = "viewport",
    elementContext: a = "floating",
    altBoundary: p = !1,
    padding: m = 0
  } = re(t, e), h = zt(m), g = c[p ? a === "floating" ? "reference" : "floating" : a], w = $e(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(g))) == null || n ? g : g.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(c.floating)),
    boundary: u,
    rootBoundary: l,
    strategy: d
  })), M = a === "floating" ? {
    x: o,
    y: r,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, y = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c.floating)), v = await (s.isElement == null ? void 0 : s.isElement(y)) ? await (s.getScale == null ? void 0 : s.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = $e(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: M,
    offsetParent: y,
    strategy: d
  }) : M);
  return {
    top: (w.top - S.top + h.top) / v.y,
    bottom: (S.bottom - w.bottom + h.bottom) / v.y,
    left: (w.left - S.left + h.left) / v.x,
    right: (S.right - w.right + h.right) / v.x
  };
}
const Wo = 50, zo = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: r = "absolute",
    middleware: s = [],
    platform: i
  } = n, c = i.detectOverflow ? i : {
    ...i,
    detectOverflow: Ko
  }, d = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let u = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: r
  }), {
    x: l,
    y: a
  } = _t(u, o, d), p = o, m = 0;
  const h = {};
  for (let x = 0; x < s.length; x++) {
    const g = s[x];
    if (!g)
      continue;
    const {
      name: w,
      fn: M
    } = g, {
      x: y,
      y: v,
      data: S,
      reset: A
    } = await M({
      x: l,
      y: a,
      initialPlacement: o,
      placement: p,
      strategy: r,
      middlewareData: h,
      rects: u,
      platform: c,
      elements: {
        reference: e,
        floating: t
      }
    });
    l = y ?? l, a = v ?? a, h[w] = {
      ...h[w],
      ...S
    }, A && m < Wo && (m++, typeof A == "object" && (A.placement && (p = A.placement), A.rects && (u = A.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: r
    }) : A.rects), {
      x: l,
      y: a
    } = _t(u, p, d)), x = -1);
  }
  return {
    x: l,
    y: a,
    placement: p,
    strategy: r,
    middlewareData: h
  };
}, Ho = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: o,
      placement: r,
      rects: s,
      platform: i,
      elements: c,
      middlewareData: d
    } = t, {
      element: u,
      padding: l = 0
    } = re(e, t) || {};
    if (u == null)
      return {};
    const a = zt(l), p = {
      x: n,
      y: o
    }, m = dt(r), h = ut(m), x = await i.getDimensions(u), g = m === "y", w = g ? "top" : "left", M = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", v = s.reference[h] + s.reference[m] - p[m] - s.floating[h], S = p[m] - s.reference[m], A = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
    let P = A ? A[y] : 0;
    (!P || !await (i.isElement == null ? void 0 : i.isElement(A))) && (P = c.floating[y] || s.floating[h]);
    const _ = v / 2 - S / 2, F = P / 2 - x[h] / 2 - 1, I = le(a[w], F), j = le(a[M], F), L = I, T = P - x[h] - j, N = P / 2 - x[h] / 2 + _, G = rt(L, N, T), E = !d.arrow && we(r) != null && N !== G && s.reference[h] / 2 - (N < L ? I : j) - x[h] / 2 < 0, k = E ? N < L ? N - L : N - T : 0;
    return {
      [m]: p[m] + k,
      data: {
        [m]: G,
        centerOffset: N - G - k,
        ...E && {
          alignmentOffset: k
        }
      },
      reset: E
    };
  }
}), Vo = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: r,
        middlewareData: s,
        rects: i,
        initialPlacement: c,
        platform: d,
        elements: u
      } = t, {
        mainAxis: l = !0,
        crossAxis: a = !0,
        fallbackPlacements: p,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: x = !0,
        ...g
      } = re(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const w = se(r), M = Q(c), y = se(c) === c, v = await (d.isRTL == null ? void 0 : d.isRTL(u.floating)), S = p || (y || !x ? [ke(c)] : Fo(c)), A = h !== "none";
      !p && A && S.push(...Go(c, x, h, v));
      const P = [c, ...S], _ = await d.detectOverflow(t, g), F = [];
      let I = ((o = s.flip) == null ? void 0 : o.overflows) || [];
      if (l && F.push(_[w]), a) {
        const N = jo(r, i, v);
        F.push(_[N[0]], _[N[1]]);
      }
      if (I = [...I, {
        placement: r,
        overflows: F
      }], !F.every((N) => N <= 0)) {
        var j, L;
        const N = (((j = s.flip) == null ? void 0 : j.index) || 0) + 1, G = P[N];
        if (G && (!(a === "alignment" ? M !== Q(G) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        I.every((R) => Q(R.placement) === M ? R.overflows[0] > 0 : !0)))
          return {
            data: {
              index: N,
              overflows: I
            },
            reset: {
              placement: G
            }
          };
        let E = (L = I.filter((k) => k.overflows[0] <= 0).sort((k, R) => k.overflows[1] - R.overflows[1])[0]) == null ? void 0 : L.placement;
        if (!E)
          switch (m) {
            case "bestFit": {
              var T;
              const k = (T = I.filter((R) => {
                if (A) {
                  const b = Q(R.placement);
                  return b === M || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  b === "y";
                }
                return !0;
              }).map((R) => [R.placement, R.overflows.filter((b) => b > 0).reduce((b, $) => b + $, 0)]).sort((R, b) => R[1] - b[1])[0]) == null ? void 0 : T[0];
              k && (E = k);
              break;
            }
            case "initialPlacement":
              E = c;
              break;
          }
        if (r !== E)
          return {
            reset: {
              placement: E
            }
          };
      }
      return {};
    }
  };
};
function Et(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Dt(e) {
  return No.some((t) => e[t] >= 0);
}
const Uo = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n,
        platform: o
      } = t, {
        strategy: r = "referenceHidden",
        ...s
      } = re(e, t);
      switch (r) {
        case "referenceHidden": {
          const i = await o.detectOverflow(t, {
            ...s,
            elementContext: "reference"
          }), c = Et(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: c,
              referenceHidden: Dt(c)
            }
          };
        }
        case "escaped": {
          const i = await o.detectOverflow(t, {
            ...s,
            altBoundary: !0
          }), c = Et(i, n.floating);
          return {
            data: {
              escapedOffsets: c,
              escaped: Dt(c)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Ht = /* @__PURE__ */ new Set(["left", "top"]);
async function Yo(e, t) {
  const {
    placement: n,
    platform: o,
    elements: r
  } = e, s = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), i = se(n), c = we(n), d = Q(n) === "y", u = Ht.has(i) ? -1 : 1, l = s && d ? -1 : 1, a = re(t, e);
  let {
    mainAxis: p,
    crossAxis: m,
    alignmentAxis: h
  } = typeof a == "number" ? {
    mainAxis: a,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: a.mainAxis || 0,
    crossAxis: a.crossAxis || 0,
    alignmentAxis: a.alignmentAxis
  };
  return c && typeof h == "number" && (m = c === "end" ? h * -1 : h), d ? {
    x: m * l,
    y: p * u
  } : {
    x: p * u,
    y: m * l
  };
}
const Xo = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, o;
      const {
        x: r,
        y: s,
        placement: i,
        middlewareData: c
      } = t, d = await Yo(t, e);
      return i === ((n = c.offset) == null ? void 0 : n.placement) && (o = c.arrow) != null && o.alignmentOffset ? {} : {
        x: r + d.x,
        y: s + d.y,
        data: {
          ...d,
          placement: i
        }
      };
    }
  };
}, qo = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o,
        placement: r,
        platform: s
      } = t, {
        mainAxis: i = !0,
        crossAxis: c = !1,
        limiter: d = {
          fn: (w) => {
            let {
              x: M,
              y
            } = w;
            return {
              x: M,
              y
            };
          }
        },
        ...u
      } = re(e, t), l = {
        x: n,
        y: o
      }, a = await s.detectOverflow(t, u), p = Q(se(r)), m = lt(p);
      let h = l[m], x = l[p];
      if (i) {
        const w = m === "y" ? "top" : "left", M = m === "y" ? "bottom" : "right", y = h + a[w], v = h - a[M];
        h = rt(y, h, v);
      }
      if (c) {
        const w = p === "y" ? "top" : "left", M = p === "y" ? "bottom" : "right", y = x + a[w], v = x - a[M];
        x = rt(y, x, v);
      }
      const g = d.fn({
        ...t,
        [m]: h,
        [p]: x
      });
      return {
        ...g,
        data: {
          x: g.x - n,
          y: g.y - o,
          enabled: {
            [m]: i,
            [p]: c
          }
        }
      };
    }
  };
}, Zo = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: o,
        placement: r,
        rects: s,
        middlewareData: i
      } = t, {
        offset: c = 0,
        mainAxis: d = !0,
        crossAxis: u = !0
      } = re(e, t), l = {
        x: n,
        y: o
      }, a = Q(r), p = lt(a);
      let m = l[p], h = l[a];
      const x = re(c, t), g = typeof x == "number" ? {
        mainAxis: x,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...x
      };
      if (d) {
        const y = p === "y" ? "height" : "width", v = s.reference[p] - s.floating[y] + g.mainAxis, S = s.reference[p] + s.reference[y] - g.mainAxis;
        m < v ? m = v : m > S && (m = S);
      }
      if (u) {
        var w, M;
        const y = p === "y" ? "width" : "height", v = Ht.has(se(r)), S = s.reference[a] - s.floating[y] + (v && ((w = i.offset) == null ? void 0 : w[a]) || 0) + (v ? 0 : g.crossAxis), A = s.reference[a] + s.reference[y] + (v ? 0 : ((M = i.offset) == null ? void 0 : M[a]) || 0) - (v ? g.crossAxis : 0);
        h < S ? h = S : h > A && (h = A);
      }
      return {
        [p]: m,
        [a]: h
      };
    }
  };
}, Jo = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: r,
        rects: s,
        platform: i,
        elements: c
      } = t, {
        apply: d = () => {
        },
        ...u
      } = re(e, t), l = await i.detectOverflow(t, u), a = se(r), p = we(r), m = Q(r) === "y", {
        width: h,
        height: x
      } = s.floating;
      let g, w;
      a === "top" || a === "bottom" ? (g = a, w = p === (await (i.isRTL == null ? void 0 : i.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (w = a, g = p === "end" ? "top" : "bottom");
      const M = x - l.top - l.bottom, y = h - l.left - l.right, v = le(x - l[g], M), S = le(h - l[w], y), A = !t.middlewareData.shift;
      let P = v, _ = S;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (_ = y), (o = t.middlewareData.shift) != null && o.enabled.y && (P = M), A && !p) {
        const I = H(l.left, 0), j = H(l.right, 0), L = H(l.top, 0), T = H(l.bottom, 0);
        m ? _ = h - 2 * (I !== 0 || j !== 0 ? I + j : H(l.left, l.right)) : P = x - 2 * (L !== 0 || T !== 0 ? L + T : H(l.top, l.bottom));
      }
      await d({
        ...t,
        availableWidth: _,
        availableHeight: P
      });
      const F = await i.getDimensions(c.floating);
      return h !== F.width || x !== F.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function He() {
  return typeof window < "u";
}
function ve(e) {
  return Vt(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function V(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function oe(e) {
  var t;
  return (t = (Vt(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Vt(e) {
  return He() ? e instanceof Node || e instanceof V(e).Node : !1;
}
function Y(e) {
  return He() ? e instanceof Element || e instanceof V(e).Element : !1;
}
function ie(e) {
  return He() ? e instanceof HTMLElement || e instanceof V(e).HTMLElement : !1;
}
function Ot(e) {
  return !He() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof V(e).ShadowRoot;
}
function _e(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: r
  } = X(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && r !== "inline" && r !== "contents";
}
function Qo(e) {
  return /^(table|td|th)$/.test(ve(e));
}
function Ve(e) {
  try {
    if (e.matches(":popover-open"))
      return !0;
  } catch {
  }
  try {
    return e.matches(":modal");
  } catch {
    return !1;
  }
}
const er = /transform|translate|scale|rotate|perspective|filter/, tr = /paint|layout|strict|content/, fe = (e) => !!e && e !== "none";
let Je;
function ft(e) {
  const t = Y(e) ? X(e) : e;
  return fe(t.transform) || fe(t.translate) || fe(t.scale) || fe(t.rotate) || fe(t.perspective) || !pt() && (fe(t.backdropFilter) || fe(t.filter)) || er.test(t.willChange || "") || tr.test(t.contain || "");
}
function nr(e) {
  let t = ue(e);
  for (; ie(t) && !xe(t); ) {
    if (ft(t))
      return t;
    if (Ve(t))
      return null;
    t = ue(t);
  }
  return null;
}
function pt() {
  return Je == null && (Je = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), Je;
}
function xe(e) {
  return /^(html|body|#document)$/.test(ve(e));
}
function X(e) {
  return V(e).getComputedStyle(e);
}
function Ue(e) {
  return Y(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function ue(e) {
  if (ve(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Ot(e) && e.host || // Fallback.
    oe(e)
  );
  return Ot(t) ? t.host : t;
}
function Ut(e) {
  const t = ue(e);
  return xe(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ie(t) && _e(t) ? t : Ut(t);
}
function Ae(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const r = Ut(e), s = r === ((o = e.ownerDocument) == null ? void 0 : o.body), i = V(r);
  if (s) {
    const c = it(i);
    return t.concat(i, i.visualViewport || [], _e(r) ? r : [], c && n ? Ae(c) : []);
  } else
    return t.concat(r, Ae(r, [], n));
}
function it(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Yt(e) {
  const t = X(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const r = ie(e), s = r ? e.offsetWidth : n, i = r ? e.offsetHeight : o, c = Le(n) !== s || Le(o) !== i;
  return c && (n = s, o = i), {
    width: n,
    height: o,
    $: c
  };
}
function mt(e) {
  return Y(e) ? e : e.contextElement;
}
function ge(e) {
  const t = mt(e);
  if (!ie(t))
    return ee(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: r,
    $: s
  } = Yt(t);
  let i = (s ? Le(n.width) : n.width) / o, c = (s ? Le(n.height) : n.height) / r;
  return (!i || !Number.isFinite(i)) && (i = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: i,
    y: c
  };
}
const or = /* @__PURE__ */ ee(0);
function Xt(e) {
  const t = V(e);
  return !pt() || !t.visualViewport ? or : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function rr(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== V(e) ? !1 : t;
}
function pe(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), s = mt(e);
  let i = ee(1);
  t && (o ? Y(o) && (i = ge(o)) : i = ge(e));
  const c = rr(s, n, o) ? Xt(s) : ee(0);
  let d = (r.left + c.x) / i.x, u = (r.top + c.y) / i.y, l = r.width / i.x, a = r.height / i.y;
  if (s) {
    const p = V(s), m = o && Y(o) ? V(o) : o;
    let h = p, x = it(h);
    for (; x && o && m !== h; ) {
      const g = ge(x), w = x.getBoundingClientRect(), M = X(x), y = w.left + (x.clientLeft + parseFloat(M.paddingLeft)) * g.x, v = w.top + (x.clientTop + parseFloat(M.paddingTop)) * g.y;
      d *= g.x, u *= g.y, l *= g.x, a *= g.y, d += y, u += v, h = V(x), x = it(h);
    }
  }
  return $e({
    width: l,
    height: a,
    x: d,
    y: u
  });
}
function Ye(e, t) {
  const n = Ue(e).scrollLeft;
  return t ? t.left + n : pe(oe(e)).left + n;
}
function qt(e, t) {
  const n = e.getBoundingClientRect(), o = n.left + t.scrollLeft - Ye(e, n), r = n.top + t.scrollTop;
  return {
    x: o,
    y: r
  };
}
function sr(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: r
  } = e;
  const s = r === "fixed", i = oe(o), c = t ? Ve(t.floating) : !1;
  if (o === i || c && s)
    return n;
  let d = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = ee(1);
  const l = ee(0), a = ie(o);
  if ((a || !a && !s) && ((ve(o) !== "body" || _e(i)) && (d = Ue(o)), a)) {
    const m = pe(o);
    u = ge(o), l.x = m.x + o.clientLeft, l.y = m.y + o.clientTop;
  }
  const p = i && !a && !s ? qt(i, d) : ee(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - d.scrollLeft * u.x + l.x + p.x,
    y: n.y * u.y - d.scrollTop * u.y + l.y + p.y
  };
}
function ir(e) {
  return Array.from(e.getClientRects());
}
function cr(e) {
  const t = oe(e), n = Ue(e), o = e.ownerDocument.body, r = H(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), s = H(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let i = -n.scrollLeft + Ye(e);
  const c = -n.scrollTop;
  return X(o).direction === "rtl" && (i += H(t.clientWidth, o.clientWidth) - r), {
    width: r,
    height: s,
    x: i,
    y: c
  };
}
const It = 25;
function ar(e, t) {
  const n = V(e), o = oe(e), r = n.visualViewport;
  let s = o.clientWidth, i = o.clientHeight, c = 0, d = 0;
  if (r) {
    s = r.width, i = r.height;
    const l = pt();
    (!l || l && t === "fixed") && (c = r.offsetLeft, d = r.offsetTop);
  }
  const u = Ye(o);
  if (u <= 0) {
    const l = o.ownerDocument, a = l.body, p = getComputedStyle(a), m = l.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, h = Math.abs(o.clientWidth - a.clientWidth - m);
    h <= It && (s -= h);
  } else u <= It && (s += u);
  return {
    width: s,
    height: i,
    x: c,
    y: d
  };
}
function lr(e, t) {
  const n = pe(e, !0, t === "fixed"), o = n.top + e.clientTop, r = n.left + e.clientLeft, s = ie(e) ? ge(e) : ee(1), i = e.clientWidth * s.x, c = e.clientHeight * s.y, d = r * s.x, u = o * s.y;
  return {
    width: i,
    height: c,
    x: d,
    y: u
  };
}
function Nt(e, t, n) {
  let o;
  if (t === "viewport")
    o = ar(e, n);
  else if (t === "document")
    o = cr(oe(e));
  else if (Y(t))
    o = lr(t, n);
  else {
    const r = Xt(e);
    o = {
      x: t.x - r.x,
      y: t.y - r.y,
      width: t.width,
      height: t.height
    };
  }
  return $e(o);
}
function Zt(e, t) {
  const n = ue(e);
  return n === t || !Y(n) || xe(n) ? !1 : X(n).position === "fixed" || Zt(n, t);
}
function ur(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = Ae(e, [], !1).filter((c) => Y(c) && ve(c) !== "body"), r = null;
  const s = X(e).position === "fixed";
  let i = s ? ue(e) : e;
  for (; Y(i) && !xe(i); ) {
    const c = X(i), d = ft(i);
    !d && c.position === "fixed" && (r = null), (s ? !d && !r : !d && c.position === "static" && !!r && (r.position === "absolute" || r.position === "fixed") || _e(i) && !d && Zt(e, i)) ? o = o.filter((l) => l !== i) : r = c, i = ue(i);
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
  const i = [...n === "clippingAncestors" ? Ve(t) ? [] : ur(t, this._c) : [].concat(n), o], c = Nt(t, i[0], r);
  let d = c.top, u = c.right, l = c.bottom, a = c.left;
  for (let p = 1; p < i.length; p++) {
    const m = Nt(t, i[p], r);
    d = H(m.top, d), u = le(m.right, u), l = le(m.bottom, l), a = H(m.left, a);
  }
  return {
    width: u - a,
    height: l - d,
    x: a,
    y: d
  };
}
function fr(e) {
  const {
    width: t,
    height: n
  } = Yt(e);
  return {
    width: t,
    height: n
  };
}
function pr(e, t, n) {
  const o = ie(t), r = oe(t), s = n === "fixed", i = pe(e, !0, s, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const d = ee(0);
  function u() {
    d.x = Ye(r);
  }
  if (o || !o && !s)
    if ((ve(t) !== "body" || _e(r)) && (c = Ue(t)), o) {
      const m = pe(t, !0, s, t);
      d.x = m.x + t.clientLeft, d.y = m.y + t.clientTop;
    } else r && u();
  s && !o && r && u();
  const l = r && !o && !s ? qt(r, c) : ee(0), a = i.left + c.scrollLeft - d.x - l.x, p = i.top + c.scrollTop - d.y - l.y;
  return {
    x: a,
    y: p,
    width: i.width,
    height: i.height
  };
}
function Qe(e) {
  return X(e).position === "static";
}
function Tt(e, t) {
  if (!ie(e) || X(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return oe(e) === n && (n = n.ownerDocument.body), n;
}
function Jt(e, t) {
  const n = V(e);
  if (Ve(e))
    return n;
  if (!ie(e)) {
    let r = ue(e);
    for (; r && !xe(r); ) {
      if (Y(r) && !Qe(r))
        return r;
      r = ue(r);
    }
    return n;
  }
  let o = Tt(e, t);
  for (; o && Qo(o) && Qe(o); )
    o = Tt(o, t);
  return o && xe(o) && Qe(o) && !ft(o) ? n : o || nr(e) || n;
}
const mr = async function(e) {
  const t = this.getOffsetParent || Jt, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: pr(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function hr(e) {
  return X(e).direction === "rtl";
}
const gr = {
  convertOffsetParentRelativeRectToViewportRelativeRect: sr,
  getDocumentElement: oe,
  getClippingRect: dr,
  getOffsetParent: Jt,
  getElementRects: mr,
  getClientRects: ir,
  getDimensions: fr,
  getScale: ge,
  isElement: Y,
  isRTL: hr
};
function Qt(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function xr(e, t) {
  let n = null, o;
  const r = oe(e);
  function s() {
    var c;
    clearTimeout(o), (c = n) == null || c.disconnect(), n = null;
  }
  function i(c, d) {
    c === void 0 && (c = !1), d === void 0 && (d = 1), s();
    const u = e.getBoundingClientRect(), {
      left: l,
      top: a,
      width: p,
      height: m
    } = u;
    if (c || t(), !p || !m)
      return;
    const h = Te(a), x = Te(r.clientWidth - (l + p)), g = Te(r.clientHeight - (a + m)), w = Te(l), y = {
      rootMargin: -h + "px " + -x + "px " + -g + "px " + -w + "px",
      threshold: H(0, le(1, d)) || 1
    };
    let v = !0;
    function S(A) {
      const P = A[0].intersectionRatio;
      if (P !== d) {
        if (!v)
          return i();
        P ? i(!1, P) : o = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      P === 1 && !Qt(u, e.getBoundingClientRect()) && i(), v = !1;
    }
    try {
      n = new IntersectionObserver(S, {
        ...y,
        // Handle <iframe>s
        root: r.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(S, y);
    }
    n.observe(e);
  }
  return i(!0), s;
}
function wr(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: d = !1
  } = o, u = mt(e), l = r || s ? [...u ? Ae(u) : [], ...t ? Ae(t) : []] : [];
  l.forEach((w) => {
    r && w.addEventListener("scroll", n, {
      passive: !0
    }), s && w.addEventListener("resize", n);
  });
  const a = u && c ? xr(u, n) : null;
  let p = -1, m = null;
  i && (m = new ResizeObserver((w) => {
    let [M] = w;
    M && M.target === u && m && t && (m.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var y;
      (y = m) == null || y.observe(t);
    })), n();
  }), u && !d && m.observe(u), t && m.observe(t));
  let h, x = d ? pe(e) : null;
  d && g();
  function g() {
    const w = pe(e);
    x && !Qt(x, w) && n(), x = w, h = requestAnimationFrame(g);
  }
  return n(), () => {
    var w;
    l.forEach((M) => {
      r && M.removeEventListener("scroll", n), s && M.removeEventListener("resize", n);
    }), a?.(), (w = m) == null || w.disconnect(), m = null, d && cancelAnimationFrame(h);
  };
}
const vr = Xo, yr = qo, br = Vo, Mr = Jo, Cr = Uo, jt = Ho, Ar = Zo, Sr = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), r = {
    platform: gr,
    ...n
  }, s = {
    ...r.platform,
    _c: o
  };
  return zo(e, t, {
    ...r,
    platform: s
  });
};
function en(e) {
  const t = e + "CollectionProvider", [n, o] = Pe(t), [r, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (x) => {
    const { scope: g, children: w } = x, M = O(null), y = O(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ f.jsx(r, { scope: g, itemMap: y, collectionRef: M, children: w });
  };
  i.displayName = t;
  const c = e + "CollectionSlot", d = nt(c), u = C(
    (x, g) => {
      const { scope: w, children: M } = x, y = s(c, w), v = ne(g, y.collectionRef);
      return /* @__PURE__ */ f.jsx(d, { ref: v, children: M });
    }
  );
  u.displayName = c;
  const l = e + "CollectionItemSlot", a = "data-radix-collection-item", p = nt(l), m = C(
    (x, g) => {
      const { scope: w, children: M, ...y } = x, v = O(null), S = ne(g, v), A = s(l, w);
      return te(() => (A.itemMap.set(v, { ref: v, ...y }), () => {
        A.itemMap.delete(v);
      })), /* @__PURE__ */ f.jsx(p, { [a]: "", ref: S, children: M });
    }
  );
  m.displayName = l;
  function h(x) {
    const g = s(e + "CollectionConsumer", x);
    return B(() => {
      const M = g.collectionRef.current;
      if (!M) return [];
      const y = Array.from(M.querySelectorAll(`[${a}]`));
      return Array.from(g.itemMap.values()).sort(
        (A, P) => y.indexOf(A.ref.current) - y.indexOf(P.ref.current)
      );
    }, [g.collectionRef, g.itemMap]);
  }
  return [
    { Provider: i, Slot: u, ItemSlot: m },
    h,
    o
  ];
}
var Rr = yo(void 0);
function tn(e) {
  const t = vo(Rr);
  return e || t || "ltr";
}
var et = "rovingFocusGroup.onEntryFocus", Pr = { bubbles: !1, cancelable: !0 }, Ee = "RovingFocusGroup", [ct, nn, _r] = en(Ee), [Er, on] = Pe(
  Ee,
  [_r]
), [Dr, Or] = Er(Ee), rn = C(
  (e, t) => /* @__PURE__ */ f.jsx(ct.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ f.jsx(ct.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ f.jsx(Ir, { ...e, ref: t }) }) })
);
rn.displayName = Ee;
var Ir = C((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: o,
    loop: r = !1,
    dir: s,
    currentTabStopId: i,
    defaultCurrentTabStopId: c,
    onCurrentTabStopIdChange: d,
    onEntryFocus: u,
    preventScrollOnEntryFocus: l = !1,
    ...a
  } = e, p = O(null), m = ne(t, p), h = tn(s), [x, g] = Bt({
    prop: i,
    defaultProp: c ?? null,
    onChange: d,
    caller: Ee
  }), [w, M] = K(!1), y = We(u), v = nn(n), S = O(!1), [A, P] = K(0);
  return te(() => {
    const _ = p.current;
    if (_)
      return _.addEventListener(et, y), () => _.removeEventListener(et, y);
  }, [y]), /* @__PURE__ */ f.jsx(
    Dr,
    {
      scope: n,
      orientation: o,
      dir: h,
      loop: r,
      currentTabStopId: x,
      onItemFocus: B(
        (_) => g(_),
        [g]
      ),
      onItemShiftTab: B(() => M(!0), []),
      onFocusableItemAdd: B(
        () => P((_) => _ + 1),
        []
      ),
      onFocusableItemRemove: B(
        () => P((_) => _ - 1),
        []
      ),
      children: /* @__PURE__ */ f.jsx(
        Z.div,
        {
          tabIndex: w || A === 0 ? -1 : 0,
          "data-orientation": o,
          ...a,
          ref: m,
          style: { outline: "none", ...e.style },
          onMouseDown: D(e.onMouseDown, () => {
            S.current = !0;
          }),
          onFocus: D(e.onFocus, (_) => {
            const F = !S.current;
            if (_.target === _.currentTarget && F && !w) {
              const I = new CustomEvent(et, Pr);
              if (_.currentTarget.dispatchEvent(I), !I.defaultPrevented) {
                const j = v().filter((E) => E.focusable), L = j.find((E) => E.active), T = j.find((E) => E.id === x), G = [L, T, ...j].filter(
                  Boolean
                ).map((E) => E.ref.current);
                an(G, l);
              }
            }
            S.current = !1;
          }),
          onBlur: D(e.onBlur, () => M(!1))
        }
      )
    }
  );
}), sn = "RovingFocusGroupItem", cn = C(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: o = !0,
      active: r = !1,
      tabStopId: s,
      children: i,
      ...c
    } = e, d = ot(), u = s || d, l = Or(sn, n), a = l.currentTabStopId === u, p = nn(n), { onFocusableItemAdd: m, onFocusableItemRemove: h, currentTabStopId: x } = l;
    return te(() => {
      if (o)
        return m(), () => h();
    }, [o, m, h]), /* @__PURE__ */ f.jsx(
      ct.ItemSlot,
      {
        scope: n,
        id: u,
        focusable: o,
        active: r,
        children: /* @__PURE__ */ f.jsx(
          Z.span,
          {
            tabIndex: a ? 0 : -1,
            "data-orientation": l.orientation,
            ...c,
            ref: t,
            onMouseDown: D(e.onMouseDown, (g) => {
              o ? l.onItemFocus(u) : g.preventDefault();
            }),
            onFocus: D(e.onFocus, () => l.onItemFocus(u)),
            onKeyDown: D(e.onKeyDown, (g) => {
              if (g.key === "Tab" && g.shiftKey) {
                l.onItemShiftTab();
                return;
              }
              if (g.target !== g.currentTarget) return;
              const w = jr(g, l.orientation, l.dir);
              if (w !== void 0) {
                if (g.metaKey || g.ctrlKey || g.altKey || g.shiftKey) return;
                g.preventDefault();
                let y = p().filter((v) => v.focusable).map((v) => v.ref.current);
                if (w === "last") y.reverse();
                else if (w === "prev" || w === "next") {
                  w === "prev" && y.reverse();
                  const v = y.indexOf(g.currentTarget);
                  y = l.loop ? Fr(y, v + 1) : y.slice(v + 1);
                }
                setTimeout(() => an(y));
              }
            }),
            children: typeof i == "function" ? i({ isCurrentTabStop: a, hasTabStop: x != null }) : i
          }
        )
      }
    );
  }
);
cn.displayName = sn;
var Nr = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Tr(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function jr(e, t, n) {
  const o = Tr(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return Nr[o];
}
function an(e, t = !1) {
  const n = document.activeElement;
  for (const o of e)
    if (o === n || (o.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function Fr(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
var Lr = rn, kr = cn, $r = typeof document < "u", Gr = function() {
}, Fe = $r ? Mo : Gr;
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
      if (n = e.length, n !== t.length) return !1;
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
      const s = r[o];
      if (!(s === "_owner" && e.$$typeof) && !Ge(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function ln(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ft(e, t) {
  const n = ln(e);
  return Math.round(t * n) / n;
}
function tt(e) {
  const t = O(e);
  return Fe(() => {
    t.current = e;
  }), t;
}
function Br(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: o = [],
    platform: r,
    elements: {
      reference: s,
      floating: i
    } = {},
    transform: c = !0,
    whileElementsMounted: d,
    open: u
  } = e, [l, a] = K({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [p, m] = K(o);
  Ge(p, o) || m(o);
  const [h, x] = K(null), [g, w] = K(null), M = B((R) => {
    R !== A.current && (A.current = R, x(R));
  }, []), y = B((R) => {
    R !== P.current && (P.current = R, w(R));
  }, []), v = s || h, S = i || g, A = O(null), P = O(null), _ = O(l), F = d != null, I = tt(d), j = tt(r), L = tt(u), T = B(() => {
    if (!A.current || !P.current)
      return;
    const R = {
      placement: t,
      strategy: n,
      middleware: p
    };
    j.current && (R.platform = j.current), Sr(A.current, P.current, R).then((b) => {
      const $ = {
        ...b,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: L.current !== !1
      };
      N.current && !Ge(_.current, $) && (_.current = $, bo(() => {
        a($);
      }));
    });
  }, [p, t, n, j, L]);
  Fe(() => {
    u === !1 && _.current.isPositioned && (_.current.isPositioned = !1, a((R) => ({
      ...R,
      isPositioned: !1
    })));
  }, [u]);
  const N = O(!1);
  Fe(() => (N.current = !0, () => {
    N.current = !1;
  }), []), Fe(() => {
    if (v && (A.current = v), S && (P.current = S), v && S) {
      if (I.current)
        return I.current(v, S, T);
      T();
    }
  }, [v, S, T, I, F]);
  const G = Me(() => ({
    reference: A,
    floating: P,
    setReference: M,
    setFloating: y
  }), [M, y]), E = Me(() => ({
    reference: v,
    floating: S
  }), [v, S]), k = Me(() => {
    const R = {
      position: n,
      left: 0,
      top: 0
    };
    if (!E.floating)
      return R;
    const b = Ft(E.floating, l.x), $ = Ft(E.floating, l.y);
    return c ? {
      ...R,
      transform: "translate(" + b + "px, " + $ + "px)",
      ...ln(E.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: b,
      top: $
    };
  }, [n, c, E.floating, l.x, l.y]);
  return Me(() => ({
    ...l,
    update: T,
    refs: G,
    elements: E,
    floatingStyles: k
  }), [l, T, G, E, k]);
}
const Kr = (e) => {
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
      return o && t(o) ? o.current != null ? jt({
        element: o.current,
        padding: r
      }).fn(n) : {} : o ? jt({
        element: o,
        padding: r
      }).fn(n) : {};
    }
  };
}, Wr = (e, t) => {
  const n = vr(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, zr = (e, t) => {
  const n = yr(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Hr = (e, t) => ({
  fn: Ar(e).fn,
  options: [e, t]
}), Vr = (e, t) => {
  const n = br(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Ur = (e, t) => {
  const n = Mr(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Yr = (e, t) => {
  const n = Cr(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Xr = (e, t) => {
  const n = Kr(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
};
var qr = "Arrow", un = C((e, t) => {
  const { children: n, width: o = 10, height: r = 5, ...s } = e;
  return /* @__PURE__ */ f.jsx(
    Z.svg,
    {
      ...s,
      ref: t,
      width: o,
      height: r,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ f.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
un.displayName = qr;
var Zr = un, ht = "Popper", [dn, fn] = Pe(ht), [Jr, pn] = dn(ht), mn = (e) => {
  const { __scopePopper: t, children: n } = e, [o, r] = K(null), [s, i] = K(void 0);
  return /* @__PURE__ */ f.jsx(
    Jr,
    {
      scope: t,
      anchor: o,
      onAnchorChange: r,
      placementState: s,
      setPlacementState: i,
      children: n
    }
  );
};
mn.displayName = ht;
var hn = "PopperAnchor", gn = C(
  (e, t) => {
    const { __scopePopper: n, virtualRef: o, ...r } = e, s = pn(hn, n), i = O(null), c = s.onAnchorChange, d = B(
      (h) => {
        i.current = h, h && c(h);
      },
      [c]
    ), u = ne(t, d), l = O(null);
    te(() => {
      if (!o)
        return;
      const h = l.current;
      l.current = o.current, h !== l.current && c(l.current);
    });
    const a = s.placementState && xt(s.placementState), p = a?.[0], m = a?.[1];
    return o ? null : /* @__PURE__ */ f.jsx(
      Z.div,
      {
        "data-radix-popper-side": p,
        "data-radix-popper-align": m,
        ...r,
        ref: u
      }
    );
  }
);
gn.displayName = hn;
var gt = "PopperContent", [Qr, es] = dn(gt), xn = C(
  (e, t) => {
    const {
      __scopePopper: n,
      side: o = "bottom",
      sideOffset: r = 0,
      align: s = "center",
      alignOffset: i = 0,
      arrowPadding: c = 0,
      avoidCollisions: d = !0,
      collisionBoundary: u,
      collisionPadding: l = 0,
      sticky: a = "partial",
      hideWhenDetached: p = !1,
      updatePositionStrategy: m = "optimized",
      onPlaced: h,
      ...x
    } = e, g = pn(gt, n), [w, M] = K(null), y = ne(t, (ae) => M(ae)), [v, S] = K(null), A = Io(v), P = A?.width ?? 0, _ = A?.height ?? 0, F = o + (s !== "center" ? "-" + s : ""), I = typeof l == "number" ? l : { top: 0, right: 0, bottom: 0, left: 0, ...l }, j = u ? Array.isArray(u) ? u : [u] : void 0, L = j !== void 0 && j.length > 0, T = {
      padding: I,
      boundary: j?.filter(ns),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: L
    }, { refs: N, floatingStyles: G, placement: E, isPositioned: k, middlewareData: R } = Br({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: F,
      whileElementsMounted: (...ae) => wr(...ae, {
        animationFrame: m === "always"
      }),
      elements: {
        reference: g.anchor
      },
      middleware: [
        Wr({ mainAxis: r + _, alignmentAxis: i }),
        d && zr({
          mainAxis: !0,
          crossAxis: !1,
          limiter: a === "partial" ? Hr() : void 0,
          ...T
        }),
        d && Vr({ ...T }),
        Ur({
          ...T,
          apply: ({ elements: ae, rects: St, availableWidth: ho, availableHeight: go }) => {
            const { width: xo, height: wo } = St.reference, Ne = ae.floating.style;
            Ne.setProperty("--radix-popper-available-width", `${ho}px`), Ne.setProperty("--radix-popper-available-height", `${go}px`), Ne.setProperty("--radix-popper-anchor-width", `${xo}px`), Ne.setProperty("--radix-popper-anchor-height", `${wo}px`);
          }
        }),
        v && Xr({ element: v, padding: c }),
        os({ arrowWidth: P, arrowHeight: _ }),
        p && Yr({ strategy: "referenceHidden", ...T })
      ]
    }), b = g.setPlacementState;
    je(() => (b(E), () => {
      b(void 0);
    }), [E, b]);
    const [$, J] = xt(E), ce = We(h);
    je(() => {
      k && ce?.();
    }, [k, ce]);
    const ye = R.arrow?.x, be = R.arrow?.y, Ie = R.arrow?.centerOffset !== 0, [de, W] = K();
    return je(() => {
      w && W(window.getComputedStyle(w).zIndex);
    }, [w]), /* @__PURE__ */ f.jsx(
      "div",
      {
        ref: N.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...G,
          transform: k ? G.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: de,
          "--radix-popper-transform-origin": [
            R.transformOrigin?.x,
            R.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...R.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ f.jsx(
          Qr,
          {
            scope: n,
            placedSide: $,
            placedAlign: J,
            onArrowChange: S,
            arrowX: ye,
            arrowY: be,
            shouldHideArrow: Ie,
            children: /* @__PURE__ */ f.jsx(
              Z.div,
              {
                "data-side": $,
                "data-align": J,
                ...x,
                ref: y,
                style: {
                  ...x.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: k ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
xn.displayName = gt;
var wn = "PopperArrow", ts = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, vn = C(function(t, n) {
  const { __scopePopper: o, ...r } = t, s = es(wn, o), i = ts[s.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ f.jsx(
      "span",
      {
        ref: s.onArrowChange,
        style: {
          position: "absolute",
          left: s.arrowX,
          top: s.arrowY,
          [i]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[s.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[s.placedSide],
          visibility: s.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ f.jsx(
          Zr,
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
vn.displayName = wn;
function ns(e) {
  return e !== null;
}
var os = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: n, rects: o, middlewareData: r } = t, i = r.arrow?.centerOffset !== 0, c = i ? 0 : e.arrowWidth, d = i ? 0 : e.arrowHeight, [u, l] = xt(n), a = { start: "0%", center: "50%", end: "100%" }[l], p = (r.arrow?.x ?? 0) + c / 2, m = (r.arrow?.y ?? 0) + d / 2;
    let h = "", x = "";
    return u === "bottom" ? (h = i ? a : `${p}px`, x = `${-d}px`) : u === "top" ? (h = i ? a : `${p}px`, x = `${o.floating.height + d}px`) : u === "right" ? (h = `${-d}px`, x = i ? a : `${m}px`) : u === "left" && (h = `${o.floating.width + d}px`, x = i ? a : `${m}px`), { data: { x: h, y: x } };
  }
});
function xt(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var rs = mn, ss = gn, is = xn, cs = vn, at = ["Enter", " "], as = ["ArrowDown", "PageUp", "Home"], yn = ["ArrowUp", "PageDown", "End"], ls = [...as, ...yn], us = {
  ltr: [...at, "ArrowRight"],
  rtl: [...at, "ArrowLeft"]
}, ds = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, De = "Menu", [Se, fs, ps] = en(De), [me, bn] = Pe(De, [
  ps,
  fn,
  on
]), Xe = fn(), Mn = on(), [ms, he] = me(De), [hs, Oe] = me(De), Cn = (e) => {
  const { __scopeMenu: t, open: n = !1, children: o, dir: r, onOpenChange: s, modal: i = !0 } = e, c = Xe(t), [d, u] = K(null), l = O(!1), a = We(s), p = tn(r);
  return te(() => {
    const m = () => {
      l.current = !0, document.addEventListener("pointerdown", h, { capture: !0, once: !0 }), document.addEventListener("pointermove", h, { capture: !0, once: !0 });
    }, h = () => l.current = !1;
    return document.addEventListener("keydown", m, { capture: !0 }), () => {
      document.removeEventListener("keydown", m, { capture: !0 }), document.removeEventListener("pointerdown", h, { capture: !0 }), document.removeEventListener("pointermove", h, { capture: !0 });
    };
  }, []), /* @__PURE__ */ f.jsx(rs, { ...c, children: /* @__PURE__ */ f.jsx(
    ms,
    {
      scope: t,
      open: n,
      onOpenChange: a,
      content: d,
      onContentChange: u,
      children: /* @__PURE__ */ f.jsx(
        hs,
        {
          scope: t,
          onClose: B(() => a(!1), [a]),
          isUsingKeyboardRef: l,
          dir: p,
          modal: i,
          children: o
        }
      )
    }
  ) });
};
Cn.displayName = De;
var gs = "MenuAnchor", wt = C(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e, r = Xe(n);
    return /* @__PURE__ */ f.jsx(ss, { ...r, ...o, ref: t });
  }
);
wt.displayName = gs;
var vt = "MenuPortal", [xs, An] = me(vt, {
  forceMount: void 0
}), Sn = (e) => {
  const { __scopeMenu: t, forceMount: n, children: o, container: r } = e, s = he(vt, t);
  return /* @__PURE__ */ f.jsx(xs, { scope: t, forceMount: n, children: /* @__PURE__ */ f.jsx(ze, { present: n || s.open, children: /* @__PURE__ */ f.jsx(Ao, { asChild: !0, container: r, children: o }) }) });
};
Sn.displayName = vt;
var U = "MenuContent", [ws, yt] = me(U), Rn = C(
  (e, t) => {
    const n = An(U, e.__scopeMenu), { forceMount: o = n.forceMount, ...r } = e, s = he(U, e.__scopeMenu), i = Oe(U, e.__scopeMenu);
    return /* @__PURE__ */ f.jsx(Se.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ f.jsx(ze, { present: o || s.open, children: /* @__PURE__ */ f.jsx(Se.Slot, { scope: e.__scopeMenu, children: i.modal ? /* @__PURE__ */ f.jsx(vs, { ...r, ref: t }) : /* @__PURE__ */ f.jsx(ys, { ...r, ref: t }) }) }) });
  }
), vs = C(
  (e, t) => {
    const n = he(U, e.__scopeMenu), o = O(null), r = ne(t, o);
    return te(() => {
      const s = o.current;
      if (s) return So(s);
    }, []), /* @__PURE__ */ f.jsx(
      bt,
      {
        ...e,
        ref: r,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: D(
          e.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), ys = C((e, t) => {
  const n = he(U, e.__scopeMenu);
  return /* @__PURE__ */ f.jsx(
    bt,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), bs = nt("MenuContent.ScrollLock"), bt = C(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: o = !1,
      trapFocus: r,
      onOpenAutoFocus: s,
      onCloseAutoFocus: i,
      disableOutsidePointerEvents: c,
      onEntryFocus: d,
      onEscapeKeyDown: u,
      onPointerDownOutside: l,
      onFocusOutside: a,
      onInteractOutside: p,
      onDismiss: m,
      disableOutsideScroll: h,
      ...x
    } = e, g = he(U, n), w = Oe(U, n), M = Xe(n), y = Mn(n), v = fs(n), [S, A] = K(null), P = O(null), _ = ne(t, P, g.onContentChange), F = O(0), I = O(""), j = O(0), L = O(null), T = O("right"), N = O(0), G = h ? _o : Co, E = h ? { as: bs, allowPinchZoom: !0 } : void 0, k = (b) => {
      const $ = I.current + b, J = v().filter((W) => !W.disabled), ce = document.activeElement, ye = J.find((W) => W.ref.current === ce)?.textValue, be = J.map((W) => W.textValue), Ie = Ns(be, $, ye), de = J.find((W) => W.textValue === Ie)?.ref.current;
      (function W(ae) {
        I.current = ae, window.clearTimeout(F.current), ae !== "" && (F.current = window.setTimeout(() => W(""), 1e3));
      })($), de && setTimeout(() => de.focus());
    };
    te(() => () => window.clearTimeout(F.current), []), Po();
    const R = B((b) => T.current === L.current?.side && js(b, L.current?.area), []);
    return /* @__PURE__ */ f.jsx(
      ws,
      {
        scope: n,
        searchRef: I,
        onItemEnter: B(
          (b) => {
            R(b) && b.preventDefault();
          },
          [R]
        ),
        onItemLeave: B(
          (b) => {
            R(b) || (P.current?.focus(), A(null));
          },
          [R]
        ),
        onTriggerLeave: B(
          (b) => {
            R(b) && b.preventDefault();
          },
          [R]
        ),
        pointerGraceTimerRef: j,
        onPointerGraceIntentChange: B((b) => {
          L.current = b;
        }, []),
        children: /* @__PURE__ */ f.jsx(G, { ...E, children: /* @__PURE__ */ f.jsx(
          Eo,
          {
            asChild: !0,
            trapped: r,
            onMountAutoFocus: D(s, (b) => {
              b.preventDefault(), P.current?.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: i,
            children: /* @__PURE__ */ f.jsx(
              Do,
              {
                asChild: !0,
                disableOutsidePointerEvents: c,
                onEscapeKeyDown: u,
                onPointerDownOutside: l,
                onFocusOutside: a,
                onInteractOutside: p,
                onDismiss: m,
                children: /* @__PURE__ */ f.jsx(
                  Lr,
                  {
                    asChild: !0,
                    ...y,
                    dir: w.dir,
                    orientation: "vertical",
                    loop: o,
                    currentTabStopId: S,
                    onCurrentTabStopIdChange: A,
                    onEntryFocus: D(d, (b) => {
                      w.isUsingKeyboardRef.current || b.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ f.jsx(
                      is,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Kn(g.open),
                        "data-radix-menu-content": "",
                        dir: w.dir,
                        ...M,
                        ...x,
                        ref: _,
                        style: { outline: "none", ...x.style },
                        onKeyDown: D(x.onKeyDown, (b) => {
                          const J = b.target.closest("[data-radix-menu-content]") === b.currentTarget, ce = b.ctrlKey || b.altKey || b.metaKey, ye = b.key.length === 1;
                          J && (b.key === "Tab" && b.preventDefault(), !ce && ye && k(b.key));
                          const be = P.current;
                          if (b.target !== be || !ls.includes(b.key)) return;
                          b.preventDefault();
                          const de = v().filter((W) => !W.disabled).map((W) => W.ref.current);
                          yn.includes(b.key) && de.reverse(), Os(de);
                        }),
                        onBlur: D(e.onBlur, (b) => {
                          b.currentTarget.contains(b.target) || (window.clearTimeout(F.current), I.current = "");
                        }),
                        onPointerMove: D(
                          e.onPointerMove,
                          Re((b) => {
                            const $ = b.target, J = N.current !== b.clientX;
                            if (b.currentTarget.contains($) && J) {
                              const ce = b.clientX > N.current ? "right" : "left";
                              T.current = ce, N.current = b.clientX;
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
Rn.displayName = U;
var Ms = "MenuGroup", Mt = C(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e;
    return /* @__PURE__ */ f.jsx(Z.div, { role: "group", ...o, ref: t });
  }
);
Mt.displayName = Ms;
var Cs = "MenuLabel", Pn = C(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e;
    return /* @__PURE__ */ f.jsx(Z.div, { ...o, ref: t });
  }
);
Pn.displayName = Cs;
var Be = "MenuItem", Lt = "menu.itemSelect", qe = C(
  (e, t) => {
    const { disabled: n = !1, onSelect: o, ...r } = e, s = O(null), i = Oe(Be, e.__scopeMenu), c = yt(Be, e.__scopeMenu), d = ne(t, s), u = O(!1), l = () => {
      const a = s.current;
      if (!n && a) {
        const p = new CustomEvent(Lt, { bubbles: !0, cancelable: !0 });
        a.addEventListener(Lt, (m) => o?.(m), { once: !0 }), Ro(a, p), p.defaultPrevented ? u.current = !1 : i.onClose();
      }
    };
    return /* @__PURE__ */ f.jsx(
      _n,
      {
        ...r,
        ref: d,
        disabled: n,
        onClick: D(e.onClick, l),
        onPointerDown: (a) => {
          e.onPointerDown?.(a), u.current = !0;
        },
        onPointerUp: D(e.onPointerUp, (a) => {
          u.current || a.currentTarget?.click();
        }),
        onKeyDown: D(e.onKeyDown, (a) => {
          const p = c.searchRef.current !== "";
          n || p && a.key === " " || at.includes(a.key) && (a.currentTarget.click(), a.preventDefault());
        })
      }
    );
  }
);
qe.displayName = Be;
var _n = C(
  (e, t) => {
    const { __scopeMenu: n, disabled: o = !1, textValue: r, ...s } = e, i = yt(Be, n), c = Mn(n), d = O(null), u = ne(t, d), [l, a] = K(!1), [p, m] = K("");
    return te(() => {
      const h = d.current;
      h && m((h.textContent ?? "").trim());
    }, [s.children]), /* @__PURE__ */ f.jsx(
      Se.ItemSlot,
      {
        scope: n,
        disabled: o,
        textValue: r ?? p,
        children: /* @__PURE__ */ f.jsx(kr, { asChild: !0, ...c, focusable: !o, children: /* @__PURE__ */ f.jsx(
          Z.div,
          {
            role: "menuitem",
            "data-highlighted": l ? "" : void 0,
            "aria-disabled": o || void 0,
            "data-disabled": o ? "" : void 0,
            ...s,
            ref: u,
            onPointerMove: D(
              e.onPointerMove,
              Re((h) => {
                o ? i.onItemLeave(h) : (i.onItemEnter(h), h.defaultPrevented || h.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: D(
              e.onPointerLeave,
              Re((h) => i.onItemLeave(h))
            ),
            onFocus: D(e.onFocus, () => a(!0)),
            onBlur: D(e.onBlur, () => a(!1))
          }
        ) })
      }
    );
  }
), As = "MenuCheckboxItem", En = C(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: o, ...r } = e;
    return /* @__PURE__ */ f.jsx(Tn, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ f.jsx(
      qe,
      {
        role: "menuitemcheckbox",
        "aria-checked": Ke(n) ? "mixed" : n,
        ...r,
        ref: t,
        "data-state": At(n),
        onSelect: D(
          r.onSelect,
          () => o?.(Ke(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
En.displayName = As;
var Dn = "MenuRadioGroup", [Ss, Rs] = me(
  Dn,
  { value: void 0, onValueChange: () => {
  } }
), On = C(
  (e, t) => {
    const { value: n, onValueChange: o, ...r } = e, s = We(o);
    return /* @__PURE__ */ f.jsx(Ss, { scope: e.__scopeMenu, value: n, onValueChange: s, children: /* @__PURE__ */ f.jsx(Mt, { ...r, ref: t }) });
  }
);
On.displayName = Dn;
var In = "MenuRadioItem", Nn = C(
  (e, t) => {
    const { value: n, ...o } = e, r = Rs(In, e.__scopeMenu), s = n === r.value;
    return /* @__PURE__ */ f.jsx(Tn, { scope: e.__scopeMenu, checked: s, children: /* @__PURE__ */ f.jsx(
      qe,
      {
        role: "menuitemradio",
        "aria-checked": s,
        ...o,
        ref: t,
        "data-state": At(s),
        onSelect: D(
          o.onSelect,
          () => r.onValueChange?.(n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Nn.displayName = In;
var Ct = "MenuItemIndicator", [Tn, Ps] = me(
  Ct,
  { checked: !1 }
), jn = C(
  (e, t) => {
    const { __scopeMenu: n, forceMount: o, ...r } = e, s = Ps(Ct, n);
    return /* @__PURE__ */ f.jsx(
      ze,
      {
        present: o || Ke(s.checked) || s.checked === !0,
        children: /* @__PURE__ */ f.jsx(
          Z.span,
          {
            ...r,
            ref: t,
            "data-state": At(s.checked)
          }
        )
      }
    );
  }
);
jn.displayName = Ct;
var _s = "MenuSeparator", Fn = C(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e;
    return /* @__PURE__ */ f.jsx(
      Z.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...o,
        ref: t
      }
    );
  }
);
Fn.displayName = _s;
var Es = "MenuArrow", Ln = C(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e, r = Xe(n);
    return /* @__PURE__ */ f.jsx(cs, { ...r, ...o, ref: t });
  }
);
Ln.displayName = Es;
var Ds = "MenuSub", [Ni, kn] = me(Ds), Ce = "MenuSubTrigger", $n = C(
  (e, t) => {
    const n = he(Ce, e.__scopeMenu), o = Oe(Ce, e.__scopeMenu), r = kn(Ce, e.__scopeMenu), s = yt(Ce, e.__scopeMenu), i = O(null), { pointerGraceTimerRef: c, onPointerGraceIntentChange: d } = s, u = { __scopeMenu: e.__scopeMenu }, l = B(() => {
      i.current && window.clearTimeout(i.current), i.current = null;
    }, []);
    return te(() => l, [l]), te(() => {
      const a = c.current;
      return () => {
        window.clearTimeout(a), d(null);
      };
    }, [c, d]), /* @__PURE__ */ f.jsx(wt, { asChild: !0, ...u, children: /* @__PURE__ */ f.jsx(
      _n,
      {
        id: r.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": n.open ? r.contentId : void 0,
        "data-state": Kn(n.open),
        ...e,
        ref: Kt(t, r.onTriggerChange),
        onClick: (a) => {
          e.onClick?.(a), !(e.disabled || a.defaultPrevented) && (a.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: D(
          e.onPointerMove,
          Re((a) => {
            s.onItemEnter(a), !a.defaultPrevented && !e.disabled && !n.open && !i.current && (s.onPointerGraceIntentChange(null), i.current = window.setTimeout(() => {
              n.onOpenChange(!0), l();
            }, 100));
          })
        ),
        onPointerLeave: D(
          e.onPointerLeave,
          Re((a) => {
            l();
            const p = n.content?.getBoundingClientRect();
            if (p) {
              const m = n.content?.dataset.side, h = m === "right", x = h ? -5 : 5, g = p[h ? "left" : "right"], w = p[h ? "right" : "left"];
              s.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: a.clientX + x, y: a.clientY },
                  { x: g, y: p.top },
                  { x: w, y: p.top },
                  { x: w, y: p.bottom },
                  { x: g, y: p.bottom }
                ],
                side: m
              }), window.clearTimeout(c.current), c.current = window.setTimeout(
                () => s.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (s.onTriggerLeave(a), a.defaultPrevented) return;
              s.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: D(e.onKeyDown, (a) => {
          const p = s.searchRef.current !== "";
          e.disabled || p && a.key === " " || us[o.dir].includes(a.key) && (n.onOpenChange(!0), n.content?.focus(), a.preventDefault());
        })
      }
    ) });
  }
);
$n.displayName = Ce;
var Gn = "MenuSubContent", Bn = C(
  (e, t) => {
    const n = An(U, e.__scopeMenu), { forceMount: o = n.forceMount, align: r = "start", ...s } = e, i = he(U, e.__scopeMenu), c = Oe(U, e.__scopeMenu), d = kn(Gn, e.__scopeMenu), u = O(null), l = ne(t, u);
    return /* @__PURE__ */ f.jsx(Se.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ f.jsx(ze, { present: o || i.open, children: /* @__PURE__ */ f.jsx(Se.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ f.jsx(
      bt,
      {
        id: d.contentId,
        "aria-labelledby": d.triggerId,
        ...s,
        ref: l,
        align: r,
        side: c.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (a) => {
          c.isUsingKeyboardRef.current && u.current?.focus(), a.preventDefault();
        },
        onCloseAutoFocus: (a) => a.preventDefault(),
        onFocusOutside: D(e.onFocusOutside, (a) => {
          a.target !== d.trigger && i.onOpenChange(!1);
        }),
        onEscapeKeyDown: D(e.onEscapeKeyDown, (a) => {
          c.onClose(), a.preventDefault();
        }),
        onKeyDown: D(e.onKeyDown, (a) => {
          const p = a.currentTarget.contains(a.target), m = ds[c.dir].includes(a.key);
          p && m && (i.onOpenChange(!1), d.trigger?.focus(), a.preventDefault());
        })
      }
    ) }) }) });
  }
);
Bn.displayName = Gn;
function Kn(e) {
  return e ? "open" : "closed";
}
function Ke(e) {
  return e === "indeterminate";
}
function At(e) {
  return Ke(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Os(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function Is(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
function Ns(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let i = Is(e, Math.max(s, 0));
  r.length === 1 && (i = i.filter((u) => u !== n));
  const d = i.find(
    (u) => u.toLowerCase().startsWith(r.toLowerCase())
  );
  return d !== n ? d : void 0;
}
function Ts(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const c = t[s], d = t[i], u = c.x, l = c.y, a = d.x, p = d.y;
    l > o != p > o && n < (a - u) * (o - l) / (p - l) + u && (r = !r);
  }
  return r;
}
function js(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return Ts(n, t);
}
function Re(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var Fs = Cn, Ls = wt, ks = Sn, $s = Rn, Gs = Mt, Bs = Pn, Ks = qe, Ws = En, zs = On, Hs = Nn, Vs = jn, Us = Fn, Ys = Ln, Xs = $n, qs = Bn, Ze = "DropdownMenu", [Zs] = Pe(
  Ze,
  [bn]
), z = bn(), [Js, Wn] = Zs(Ze), zn = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: o,
    open: r,
    defaultOpen: s,
    onOpenChange: i,
    modal: c = !0
  } = e, d = z(t), u = O(null), [l, a] = Bt({
    prop: r,
    defaultProp: s ?? !1,
    onChange: i,
    caller: Ze
  });
  return /* @__PURE__ */ f.jsx(
    Js,
    {
      scope: t,
      triggerId: ot(),
      triggerRef: u,
      contentId: ot(),
      open: l,
      onOpenChange: a,
      onOpenToggle: B(() => a((p) => !p), [a]),
      modal: c,
      children: /* @__PURE__ */ f.jsx(Fs, { ...d, open: l, onOpenChange: a, dir: o, modal: c, children: n })
    }
  );
};
zn.displayName = Ze;
var Hn = "DropdownMenuTrigger", Vn = C(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: o = !1, ...r } = e, s = Wn(Hn, n), i = z(n);
    return /* @__PURE__ */ f.jsx(Ls, { asChild: !0, ...i, children: /* @__PURE__ */ f.jsx(
      Z.button,
      {
        type: "button",
        id: s.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": s.open,
        "aria-controls": s.open ? s.contentId : void 0,
        "data-state": s.open ? "open" : "closed",
        "data-disabled": o ? "" : void 0,
        disabled: o,
        ...r,
        ref: Kt(t, s.triggerRef),
        onPointerDown: D(e.onPointerDown, (c) => {
          !o && c.button === 0 && c.ctrlKey === !1 && (s.onOpenToggle(), s.open || c.preventDefault());
        }),
        onKeyDown: D(e.onKeyDown, (c) => {
          o || (["Enter", " "].includes(c.key) && s.onOpenToggle(), c.key === "ArrowDown" && s.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(c.key) && c.preventDefault());
        })
      }
    ) });
  }
);
Vn.displayName = Hn;
var Qs = "DropdownMenuPortal", Un = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, o = z(t);
  return /* @__PURE__ */ f.jsx(ks, { ...o, ...n });
};
Un.displayName = Qs;
var Yn = "DropdownMenuContent", Xn = C(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = Wn(Yn, n), s = z(n), i = O(!1);
    return /* @__PURE__ */ f.jsx(
      $s,
      {
        id: r.contentId,
        "aria-labelledby": r.triggerId,
        ...s,
        ...o,
        ref: t,
        onCloseAutoFocus: D(e.onCloseAutoFocus, (c) => {
          i.current || r.triggerRef.current?.focus(), i.current = !1, c.preventDefault();
        }),
        onInteractOutside: D(e.onInteractOutside, (c) => {
          const d = c.detail.originalEvent, u = d.button === 0 && d.ctrlKey === !0, l = d.button === 2 || u;
          (!r.modal || l) && (i.current = !0);
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
Xn.displayName = Yn;
var ei = "DropdownMenuGroup", qn = C(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = z(n);
    return /* @__PURE__ */ f.jsx(Gs, { ...r, ...o, ref: t });
  }
);
qn.displayName = ei;
var ti = "DropdownMenuLabel", Zn = C(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = z(n);
    return /* @__PURE__ */ f.jsx(Bs, { ...r, ...o, ref: t });
  }
);
Zn.displayName = ti;
var ni = "DropdownMenuItem", Jn = C(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = z(n);
    return /* @__PURE__ */ f.jsx(Ks, { ...r, ...o, ref: t });
  }
);
Jn.displayName = ni;
var oi = "DropdownMenuCheckboxItem", Qn = C((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = z(n);
  return /* @__PURE__ */ f.jsx(Ws, { ...r, ...o, ref: t });
});
Qn.displayName = oi;
var ri = "DropdownMenuRadioGroup", si = C((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = z(n);
  return /* @__PURE__ */ f.jsx(zs, { ...r, ...o, ref: t });
});
si.displayName = ri;
var ii = "DropdownMenuRadioItem", eo = C((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = z(n);
  return /* @__PURE__ */ f.jsx(Hs, { ...r, ...o, ref: t });
});
eo.displayName = ii;
var ci = "DropdownMenuItemIndicator", to = C((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = z(n);
  return /* @__PURE__ */ f.jsx(Vs, { ...r, ...o, ref: t });
});
to.displayName = ci;
var ai = "DropdownMenuSeparator", no = C((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = z(n);
  return /* @__PURE__ */ f.jsx(Us, { ...r, ...o, ref: t });
});
no.displayName = ai;
var li = "DropdownMenuArrow", ui = C(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = z(n);
    return /* @__PURE__ */ f.jsx(Ys, { ...r, ...o, ref: t });
  }
);
ui.displayName = li;
var di = "DropdownMenuSubTrigger", oo = C((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = z(n);
  return /* @__PURE__ */ f.jsx(Xs, { ...r, ...o, ref: t });
});
oo.displayName = di;
var fi = "DropdownMenuSubContent", ro = C((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = z(n);
  return /* @__PURE__ */ f.jsx(
    qs,
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
ro.displayName = fi;
var pi = zn, mi = Vn, hi = Un, so = Xn, gi = qn, io = Zn, co = Jn, ao = Qn, lo = eo, uo = to, fo = no, po = oo, mo = ro;
const xi = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], wi = Wt("chevron-right", xi);
const vi = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], yi = Wt("circle", vi), Ti = pi, ji = mi, Fi = gi, bi = C(({ className: e, inset: t, children: n, ...o }, r) => /* @__PURE__ */ f.jsxs(
  po,
  {
    ref: r,
    className: q(
      "flex cursor-default gap-2 select-none hover:bg-accent items-center rounded-xs px-2 py-1.5 text-control outline-hidden focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      t && "pl-8",
      e
    ),
    ...o,
    children: [
      n,
      /* @__PURE__ */ f.jsx(wi, { className: "ml-auto" })
    ]
  }
));
bi.displayName = po.displayName;
const Mi = C(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx("div", { className: $t, children: /* @__PURE__ */ f.jsx(
  mo,
  {
    ref: n,
    className: q(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
) }));
Mi.displayName = mo.displayName;
const Ci = C(({ className: e, sideOffset: t = 4, ...n }, o) => /* @__PURE__ */ f.jsx(hi, { children: /* @__PURE__ */ f.jsx("div", { className: $t, children: /* @__PURE__ */ f.jsx(
  so,
  {
    ref: o,
    className: q(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    sideOffset: t,
    ...n
  }
) }) }));
Ci.displayName = so.displayName;
const Ai = C(({ className: e, inset: t, ...n }, o) => /* @__PURE__ */ f.jsx(
  co,
  {
    ref: o,
    className: q(
      "relative flex cursor-default select-none cursor-pointer items-center gap-2 rounded-xs px-2 py-1.5 text-control outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      t && "pl-8",
      e
    ),
    ...n
  }
));
Ai.displayName = co.displayName;
const Si = C(({ className: e, children: t, checked: n, ...o }, r) => /* @__PURE__ */ f.jsxs(
  ao,
  {
    ref: r,
    checked: n,
    className: q(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-control outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...o,
    children: [
      /* @__PURE__ */ f.jsx("span", { className: "absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ f.jsx(uo, { children: /* @__PURE__ */ f.jsx(Oo, { className: "size-4" }) }) }),
      t
    ]
  }
));
Si.displayName = ao.displayName;
const Ri = C(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ f.jsxs(
  lo,
  {
    ref: o,
    className: q(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-control outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ f.jsx("span", { className: "absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ f.jsx(uo, { children: /* @__PURE__ */ f.jsx(yi, { className: "size-2 fill-current" }) }) }),
      t
    ]
  }
));
Ri.displayName = lo.displayName;
const Pi = C(({ className: e, inset: t, ...n }, o) => /* @__PURE__ */ f.jsx(
  io,
  {
    ref: o,
    className: q(
      "px-2 py-1.5 text-control font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
Pi.displayName = io.displayName;
const _i = C(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(
  fo,
  {
    ref: n,
    className: q("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
_i.displayName = fo.displayName;
const Ei = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.jsx(
  "span",
  {
    className: q("ml-auto text-xs tracking-wider opacity-60", e),
    ...t
  }
);
Ei.displayName = "DropdownMenuShortcut";
function kt({
  containerClassName: e,
  count: t = 1,
  randomize: n = !1,
  minWidth: o = 70,
  maxWidth: r = 100,
  className: s,
  ...i
}) {
  const { randomWidths: c, keys: d } = Me(() => {
    const u = [], l = [];
    for (let a = 0; a < t; a++) {
      if (n) {
        const p = Math.floor((r - o) / 5), m = Math.floor(Math.random() * (p + 1)), h = o + m * 5;
        u.push(`${h}%`);
      }
      l.push(`skeleton-${a}`);
    }
    return {
      randomWidths: u,
      keys: l
    };
  }, [t, n, o, r]);
  return /* @__PURE__ */ f.jsx("span", { className: e, children: Array.from({ length: t }).map((u, l) => /* @__PURE__ */ f.jsxs(Gt.Fragment, { children: [
    /* @__PURE__ */ f.jsx(
      "span",
      {
        className: q("inline-flex w-full leading-none animate-pulse rounded-[2px] bg-primary/10", s),
        style: n ? { width: c[l] } : void 0,
        ...i,
        children: "‌"
      }
    ),
    /* @__PURE__ */ f.jsx("br", {})
  ] }, d[l])) });
}
const Di = Gt.forwardRef(({ className: e, lines: t = 5, ...n }, o) => t < 1 ? /* @__PURE__ */ f.jsx(f.Fragment, {}) : /* @__PURE__ */ f.jsx("div", { ref: o, className: q("flex flex-col gap-2", e), ...n, children: Array.from({ length: t }, (r, s) => {
  let i = "66%";
  switch (s % 5) {
    case 0:
      i = "57%";
      break;
    case 1:
      i = "33%";
      break;
    case 2:
      i = "40%";
      break;
    case 3:
      i = "48%";
      break;
    case 4:
      i = "24%";
      break;
  }
  return /* @__PURE__ */ f.jsxs("div", { className: "flex justify-between gap-6", children: [
    /* @__PURE__ */ f.jsx("div", { className: "grow", style: {
      maxWidth: i
    }, children: /* @__PURE__ */ f.jsx(kt, {}) }),
    /* @__PURE__ */ f.jsx(kt, { className: "w-[60px] self-end" })
  ] }, s);
}) }));
Di.displayName = "SkeletonTable";
export {
  ss as A,
  fn as B,
  Ws as C,
  Ti as D,
  on as E,
  tn as F,
  Gs as G,
  Io as H,
  kr as I,
  Bs as L,
  ks as P,
  zs as R,
  Us as S,
  Ls as a,
  cs as b,
  Ys as c,
  wi as d,
  yi as e,
  is as f,
  $s as g,
  Si as h,
  Ci as i,
  Fi as j,
  Ai as k,
  _i as l,
  Ei as m,
  ji as n,
  Ks as o,
  Vs as p,
  Hs as q,
  Lr as r,
  rs as s,
  Fs as t,
  kt as u,
  Di as v,
  qs as w,
  Xs as x,
  en as y,
  bn as z
};
//# sourceMappingURL=skeleton-Bihnkn8q.js.map
