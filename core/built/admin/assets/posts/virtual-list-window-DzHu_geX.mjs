import { R as k, j as p, m as w, E as D, W as V, u as j, J as B, b as O, V as K, Q as P, i as U } from "./index-BWRct4la.mjs";
import { l as $, B as Y } from "./button-BOW1bLRE.mjs";
const q = {
  none: "gap-0",
  xs: "gap-1",
  sm: "gap-2",
  md: "gap-3",
  lg: "gap-4",
  xl: "gap-6",
  "2xl": "gap-8"
}, G = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
  baseline: "items-baseline"
}, J = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly"
}, I = k.forwardRef(
  function({
    as: l = "div",
    className: e,
    gap: t = "md",
    align: s = "center",
    justify: i = "start",
    wrap: o = !1,
    ...r
  }, a) {
    const h = l;
    return /* @__PURE__ */ p.jsx(
      h,
      {
        ref: a,
        className: w(
          "flex flex-row",
          o ? "flex-wrap" : "flex-nowrap",
          q[t],
          G[s],
          J[i],
          e
        ),
        ...r
      }
    );
  }
);
I.displayName = "Inline";
function X({ className: n, children: l }) {
  return /* @__PURE__ */ p.jsx(
    I,
    {
      align: "center",
      className: w("[grid-area:above]", n),
      "data-header": "header-above",
      gap: "sm",
      children: l
    }
  );
}
function Q({ className: n, children: l }) {
  return /* @__PURE__ */ p.jsx(
    $,
    {
      className: w(
        "text-2xl leading-[1.2em] lg:text-3xl [grid-area:title]",
        n
      ),
      "data-header": "header-title",
      children: l
    }
  );
}
function Z({ className: n, children: l }) {
  return /* @__PURE__ */ p.jsx(
    I,
    {
      align: "center",
      className: w("text-muted-foreground [grid-area:meta] pb-4 pt-1", n),
      "data-header": "header-meta",
      gap: "none",
      justify: "start",
      children: l
    }
  );
}
function ee({ className: n, children: l }) {
  return /* @__PURE__ */ p.jsx(
    I,
    {
      align: "center",
      className: n,
      "data-header": "header-action-group",
      gap: "sm",
      children: l
    }
  );
}
function te({ className: n, children: l }) {
  return /* @__PURE__ */ p.jsx(
    I,
    {
      align: "center",
      className: w("[grid-area:actions] sm:justify-self-end self-start", n),
      "data-header": "header-actions",
      gap: "lg",
      children: l
    }
  );
}
function se({ className: n, children: l }) {
  return /* @__PURE__ */ p.jsx(
    I,
    {
      align: "center",
      className: w("[grid-area:nav] self-start mt-2 lg:mt-0.5", n),
      "data-header": "header-nav",
      gap: "sm",
      children: l
    }
  );
}
const ne = D("sticky top-0 z-50 -mb-4 grid gap-x-4 bg-gradient-to-b from-background via-background/70 to-background/70 p-4 backdrop-blur-md [grid-template-areas:'above''title''meta''actions''nav'] sm:[grid-template-areas:'above_above''title_actions''meta_actions''nav_nav'] lg:-mb-8 lg:p-8 dark:bg-black", {
  variants: {
    variant: {
      default: "lg:[grid-template-areas:'above_above''title_actions''meta_actions''nav_nav']",
      "inline-nav": "lg:[grid-template-columns:1fr_auto_auto] lg:[grid-template-areas:'above_above_above''title_nav_actions''meta_nav_actions']"
    }
  },
  defaultVariants: {
    variant: "default"
  }
}), Ee = Object.assign(
  k.forwardRef(function({ className: l, children: e, variant: t }, s) {
    return /* @__PURE__ */ p.jsx(
      "header",
      {
        ref: s,
        className: w(ne({ variant: t, className: l })),
        "data-header": "header",
        children: e
      }
    );
  }),
  {
    Above: X,
    Title: Q,
    Actions: te,
    ActionGroup: ee,
    Nav: se,
    Meta: Z
  }
), Ie = ({ isLoading: n, onClick: l }) => {
  const e = !!n;
  return /* @__PURE__ */ p.jsx("div", { className: "flex justify-center px-4 py-6", children: /* @__PURE__ */ p.jsx(
    Y,
    {
      disabled: e,
      variant: "outline",
      onClick: l,
      children: e ? "Loading more..." : "Load more"
    }
  ) });
};
function W(n) {
  const e = n instanceof HTMLElement && window.getComputedStyle(n).overflowY, t = e !== "visible" && e !== "hidden";
  if (n) {
    if (t && n.scrollHeight >= n.clientHeight)
      return n;
  } else return null;
  return W(n.parentNode) || document.body;
}
function E(n, l, e) {
  let t = e.initialDeps ?? [], s, i = !0;
  function o() {
    var r, a, h;
    let u;
    e.key && ((r = e.debug) != null && r.call(e)) && (u = Date.now());
    const d = n();
    if (!(d.length !== t.length || d.some((v, f) => t[f] !== v)))
      return s;
    t = d;
    let m;
    if (e.key && ((a = e.debug) != null && a.call(e)) && (m = Date.now()), s = l(...d), e.key && ((h = e.debug) != null && h.call(e))) {
      const v = Math.round((Date.now() - u) * 100) / 100, f = Math.round((Date.now() - m) * 100) / 100, b = f / 16, g = (S, M) => {
        for (S = String(S); S.length < M; )
          S = " " + S;
        return S;
      };
      console.info(
        `%c⏱ ${g(f, 5)} /${g(v, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * b, 120)
        )}deg 100% 31%);`,
        e == null ? void 0 : e.key
      );
    }
    return e != null && e.onChange && !(i && e.skipInitialOnChange) && e.onChange(s), i = !1, s;
  }
  return o.updateDeps = (r) => {
    t = r;
  }, o;
}
function z(n, l) {
  if (n === void 0)
    throw new Error("Unexpected undefined");
  return n;
}
const ie = (n, l) => Math.abs(n - l) < 1.01, oe = (n, l, e) => {
  let t;
  return function(...s) {
    n.clearTimeout(t), t = n.setTimeout(() => l.apply(this, s), e);
  };
}, A = (n) => {
  const { offsetWidth: l, offsetHeight: e } = n;
  return { width: l, height: e };
}, re = (n) => n, le = (n) => {
  const l = Math.max(n.startIndex - n.overscan, 0), e = Math.min(n.endIndex + n.overscan, n.count - 1), t = [];
  for (let s = l; s <= e; s++)
    t.push(s);
  return t;
}, ae = (n, l) => {
  const e = n.scrollElement;
  if (!e)
    return;
  const t = n.targetWindow;
  if (!t)
    return;
  const s = (o) => {
    const { width: r, height: a } = o;
    l({ width: Math.round(r), height: Math.round(a) });
  };
  if (s(A(e)), !t.ResizeObserver)
    return () => {
    };
  const i = new t.ResizeObserver((o) => {
    const r = () => {
      const a = o[0];
      if (a != null && a.borderBoxSize) {
        const h = a.borderBoxSize[0];
        if (h) {
          s({ width: h.inlineSize, height: h.blockSize });
          return;
        }
      }
      s(A(e));
    };
    n.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(r) : r();
  });
  return i.observe(e, { box: "border-box" }), () => {
    i.unobserve(e);
  };
}, R = {
  passive: !0
}, T = typeof window > "u" ? !0 : "onscrollend" in window, ce = (n, l) => {
  const e = n.scrollElement;
  if (!e)
    return;
  const t = n.targetWindow;
  if (!t)
    return;
  let s = 0;
  const i = n.options.useScrollendEvent && T ? () => {
  } : oe(
    t,
    () => {
      l(s, !1);
    },
    n.options.isScrollingResetDelay
  ), o = (u) => () => {
    const { horizontal: d, isRtl: c } = n.options;
    s = d ? e.scrollLeft * (c && -1 || 1) : e.scrollTop, i(), l(s, u);
  }, r = o(!0), a = o(!1);
  e.addEventListener("scroll", r, R);
  const h = n.options.useScrollendEvent && T;
  return h && e.addEventListener("scrollend", a, R), () => {
    e.removeEventListener("scroll", r), h && e.removeEventListener("scrollend", a);
  };
}, he = (n, l, e) => {
  if (l != null && l.borderBoxSize) {
    const t = l.borderBoxSize[0];
    if (t)
      return Math.round(
        t[e.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return n[e.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, ue = (n, {
  adjustments: l = 0,
  behavior: e
}, t) => {
  var s, i;
  const o = n + l;
  (i = (s = t.scrollElement) == null ? void 0 : s.scrollTo) == null || i.call(s, {
    [t.options.horizontal ? "left" : "top"]: o,
    behavior: e
  });
};
class de {
  constructor(l) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollState = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.now = () => {
      var e, t, s;
      return ((s = (t = (e = this.targetWindow) == null ? void 0 : e.performance) == null ? void 0 : t.now) == null ? void 0 : s.call(t)) ?? Date.now();
    }, this.observer = /* @__PURE__ */ (() => {
      let e = null;
      const t = () => e || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : e = new this.targetWindow.ResizeObserver((s) => {
        s.forEach((i) => {
          const o = () => {
            const r = i.target, a = this.indexFromElement(r);
            if (!r.isConnected) {
              this.observer.unobserve(r);
              return;
            }
            this.shouldMeasureDuringScroll(a) && this.resizeItem(
              a,
              this.options.measureElement(r, i, this)
            );
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(o) : o();
        });
      }));
      return {
        disconnect: () => {
          var s;
          (s = t()) == null || s.disconnect(), e = null;
        },
        observe: (s) => {
          var i;
          return (i = t()) == null ? void 0 : i.observe(s, { box: "border-box" });
        },
        unobserve: (s) => {
          var i;
          return (i = t()) == null ? void 0 : i.unobserve(s);
        }
      };
    })(), this.range = null, this.setOptions = (e) => {
      Object.entries(e).forEach(([t, s]) => {
        typeof s > "u" && delete e[t];
      }), this.options = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: re,
        rangeExtractor: le,
        onChange: () => {
        },
        measureElement: he,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        isScrollingResetDelay: 150,
        enabled: !0,
        isRtl: !1,
        useScrollendEvent: !1,
        useAnimationFrameWithResizeObserver: !1,
        ...e
      };
    }, this.notify = (e) => {
      var t, s;
      (s = (t = this.options).onChange) == null || s.call(t, this, e);
    }, this.maybeNotify = E(
      () => (this.calculateRange(), [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ]),
      (e) => {
        this.notify(e);
      },
      {
        key: !1,
        debug: () => this.options.debug,
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }
    ), this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((e) => e()), this.unsubs = [], this.observer.disconnect(), this.rafId != null && this.targetWindow && (this.targetWindow.cancelAnimationFrame(this.rafId), this.rafId = null), this.scrollState = null, this.scrollElement = null, this.targetWindow = null;
    }, this._didMount = () => () => {
      this.cleanup();
    }, this._willUpdate = () => {
      var e;
      const t = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== t) {
        if (this.cleanup(), !t) {
          this.maybeNotify();
          return;
        }
        this.scrollElement = t, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((e = this.scrollElement) == null ? void 0 : e.window) ?? null, this.elementsCache.forEach((s) => {
          this.observer.observe(s);
        }), this.unsubs.push(
          this.options.observeElementRect(this, (s) => {
            this.scrollRect = s, this.maybeNotify();
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (s, i) => {
            this.scrollAdjustments = 0, this.scrollDirection = i ? this.getScrollOffset() < s ? "forward" : "backward" : null, this.scrollOffset = s, this.isScrolling = i, this.scrollState && this.scheduleScrollReconcile(), this.maybeNotify();
          })
        ), this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
      }
    }, this.rafId = null, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (e, t) => {
      const s = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
      for (let o = t - 1; o >= 0; o--) {
        const r = e[o];
        if (s.has(r.lane))
          continue;
        const a = i.get(
          r.lane
        );
        if (a == null || r.end > a.end ? i.set(r.lane, r) : r.end < a.end && s.set(r.lane, !0), s.size === this.options.lanes)
          break;
      }
      return i.size === this.options.lanes ? Array.from(i.values()).sort((o, r) => o.end === r.end ? o.index - r.index : o.end - r.end)[0] : void 0;
    }, this.getMeasurementOptions = E(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled,
        this.options.lanes
      ],
      (e, t, s, i, o, r) => (this.prevLanes !== void 0 && this.prevLanes !== r && (this.lanesChangedFlag = !0), this.prevLanes = r, this.pendingMeasuredCacheIndexes = [], {
        count: e,
        paddingStart: t,
        scrollMargin: s,
        getItemKey: i,
        enabled: o,
        lanes: r
      }),
      {
        key: !1
      }
    ), this.getMeasurements = E(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: e, paddingStart: t, scrollMargin: s, getItemKey: i, enabled: o, lanes: r }, a) => {
        if (!o)
          return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > e)
          for (const c of this.laneAssignments.keys())
            c >= e && this.laneAssignments.delete(c);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMeasuredCacheIndexes = []), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((c) => {
          this.itemSizeCache.set(c.key, c.size);
        }));
        const h = this.lanesSettling ? 0 : this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [], this.lanesSettling && this.measurementsCache.length === e && (this.lanesSettling = !1);
        const u = this.measurementsCache.slice(0, h), d = new Array(r).fill(
          void 0
        );
        for (let c = 0; c < h; c++) {
          const m = u[c];
          m && (d[m.lane] = c);
        }
        for (let c = h; c < e; c++) {
          const m = i(c), v = this.laneAssignments.get(c);
          let f, b;
          if (v !== void 0 && this.options.lanes > 1) {
            f = v;
            const x = d[f], _ = x !== void 0 ? u[x] : void 0;
            b = _ ? _.end + this.options.gap : t + s;
          } else {
            const x = this.options.lanes === 1 ? u[c - 1] : this.getFurthestMeasurement(u, c);
            b = x ? x.end + this.options.gap : t + s, f = x ? x.lane : c % this.options.lanes, this.options.lanes > 1 && this.laneAssignments.set(c, f);
          }
          const g = a.get(m), S = typeof g == "number" ? g : this.options.estimateSize(c), M = b + S;
          u[c] = {
            index: c,
            start: b,
            size: S,
            end: M,
            key: m,
            lane: f
          }, d[f] = c;
        }
        return this.measurementsCache = u, u;
      },
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.calculateRange = E(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (e, t, s, i) => this.range = e.length > 0 && t > 0 ? fe({
        measurements: e,
        outerSize: t,
        scrollOffset: s,
        lanes: i
      }) : null,
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = E(
      () => {
        let e = null, t = null;
        const s = this.calculateRange();
        return s && (e = s.startIndex, t = s.endIndex), this.maybeNotify.updateDeps([this.isScrolling, e, t]), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          e,
          t
        ];
      },
      (e, t, s, i, o) => i === null || o === null ? [] : e({
        startIndex: i,
        endIndex: o,
        overscan: t,
        count: s
      }),
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (e) => {
      const t = this.options.indexAttribute, s = e.getAttribute(t);
      return s ? parseInt(s, 10) : (console.warn(
        `Missing attribute name '${t}={index}' on measured element.`
      ), -1);
    }, this.shouldMeasureDuringScroll = (e) => {
      var t;
      if (!this.scrollState || this.scrollState.behavior !== "smooth")
        return !0;
      const s = this.scrollState.index ?? ((t = this.getVirtualItemForOffset(this.scrollState.lastTargetOffset)) == null ? void 0 : t.index);
      if (s !== void 0 && this.range) {
        const i = Math.max(
          this.options.overscan,
          Math.ceil((this.range.endIndex - this.range.startIndex) / 2)
        ), o = Math.max(0, s - i), r = Math.min(
          this.options.count - 1,
          s + i
        );
        return e >= o && e <= r;
      }
      return !0;
    }, this.measureElement = (e) => {
      if (!e) {
        this.elementsCache.forEach((o, r) => {
          o.isConnected || (this.observer.unobserve(o), this.elementsCache.delete(r));
        });
        return;
      }
      const t = this.indexFromElement(e), s = this.options.getItemKey(t), i = this.elementsCache.get(s);
      i !== e && (i && this.observer.unobserve(i), this.observer.observe(e), this.elementsCache.set(s, e)), (!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(t) && this.resizeItem(t, this.options.measureElement(e, void 0, this));
    }, this.resizeItem = (e, t) => {
      var s;
      const i = this.measurementsCache[e];
      if (!i) return;
      const o = this.itemSizeCache.get(i.key) ?? i.size, r = t - o;
      r !== 0 && (((s = this.scrollState) == null ? void 0 : s.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(i, r, this) : i.start < this.getScrollOffset() + this.scrollAdjustments) && this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += r,
        behavior: void 0
      }), this.pendingMeasuredCacheIndexes.push(i.index), this.itemSizeCache = new Map(this.itemSizeCache.set(i.key, t)), this.notify(!1));
    }, this.getVirtualItems = E(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (e, t) => {
        const s = [];
        for (let i = 0, o = e.length; i < o; i++) {
          const r = e[i], a = t[r];
          s.push(a);
        }
        return s;
      },
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (e) => {
      const t = this.getMeasurements();
      if (t.length !== 0)
        return z(
          t[N(
            0,
            t.length - 1,
            (s) => z(t[s]).start,
            e
          )]
        );
    }, this.getMaxScrollOffset = () => {
      if (!this.scrollElement) return 0;
      if ("scrollHeight" in this.scrollElement)
        return this.options.horizontal ? this.scrollElement.scrollWidth - this.scrollElement.clientWidth : this.scrollElement.scrollHeight - this.scrollElement.clientHeight;
      {
        const e = this.scrollElement.document.documentElement;
        return this.options.horizontal ? e.scrollWidth - this.scrollElement.innerWidth : e.scrollHeight - this.scrollElement.innerHeight;
      }
    }, this.getOffsetForAlignment = (e, t, s = 0) => {
      if (!this.scrollElement) return 0;
      const i = this.getSize(), o = this.getScrollOffset();
      t === "auto" && (t = e >= o + i ? "end" : "start"), t === "center" ? e += (s - i) / 2 : t === "end" && (e -= i);
      const r = this.getMaxScrollOffset();
      return Math.max(Math.min(r, e), 0);
    }, this.getOffsetForIndex = (e, t = "auto") => {
      e = Math.max(0, Math.min(e, this.options.count - 1));
      const s = this.getSize(), i = this.getScrollOffset(), o = this.measurementsCache[e];
      if (!o) return;
      if (t === "auto")
        if (o.end >= i + s - this.options.scrollPaddingEnd)
          t = "end";
        else if (o.start <= i + this.options.scrollPaddingStart)
          t = "start";
        else
          return [i, t];
      if (t === "end" && e === this.options.count - 1)
        return [this.getMaxScrollOffset(), t];
      const r = t === "end" ? o.end + this.options.scrollPaddingEnd : o.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(r, t, o.size),
        t
      ];
    }, this.scrollToOffset = (e, { align: t = "start", behavior: s = "auto" } = {}) => {
      const i = this.getOffsetForAlignment(e, t), o = this.now();
      this.scrollState = {
        index: null,
        align: t,
        behavior: s,
        startedAt: o,
        lastTargetOffset: i,
        stableFrames: 0
      }, this._scrollToOffset(i, { adjustments: void 0, behavior: s }), this.scheduleScrollReconcile();
    }, this.scrollToIndex = (e, {
      align: t = "auto",
      behavior: s = "auto"
    } = {}) => {
      e = Math.max(0, Math.min(e, this.options.count - 1));
      const i = this.getOffsetForIndex(e, t);
      if (!i)
        return;
      const [o, r] = i, a = this.now();
      this.scrollState = {
        index: e,
        align: r,
        behavior: s,
        startedAt: a,
        lastTargetOffset: o,
        stableFrames: 0
      }, this._scrollToOffset(o, { adjustments: void 0, behavior: s }), this.scheduleScrollReconcile();
    }, this.scrollBy = (e, { behavior: t = "auto" } = {}) => {
      const s = this.getScrollOffset() + e, i = this.now();
      this.scrollState = {
        index: null,
        align: "start",
        behavior: t,
        startedAt: i,
        lastTargetOffset: s,
        stableFrames: 0
      }, this._scrollToOffset(s, { adjustments: void 0, behavior: t }), this.scheduleScrollReconcile();
    }, this.getTotalSize = () => {
      var e;
      const t = this.getMeasurements();
      let s;
      if (t.length === 0)
        s = this.options.paddingStart;
      else if (this.options.lanes === 1)
        s = ((e = t[t.length - 1]) == null ? void 0 : e.end) ?? 0;
      else {
        const i = Array(this.options.lanes).fill(null);
        let o = t.length - 1;
        for (; o >= 0 && i.some((r) => r === null); ) {
          const r = t[o];
          i[r.lane] === null && (i[r.lane] = r.end), o--;
        }
        s = Math.max(...i.filter((r) => r !== null));
      }
      return Math.max(
        s - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    }, this._scrollToOffset = (e, {
      adjustments: t,
      behavior: s
    }) => {
      this.options.scrollToFn(e, { behavior: s, adjustments: t }, this);
    }, this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map(), this.laneAssignments = /* @__PURE__ */ new Map(), this.notify(!1);
    }, this.setOptions(l);
  }
  scheduleScrollReconcile() {
    if (!this.targetWindow) {
      this.scrollState = null;
      return;
    }
    this.rafId == null && (this.rafId = this.targetWindow.requestAnimationFrame(() => {
      this.rafId = null, this.reconcileScroll();
    }));
  }
  reconcileScroll() {
    if (!this.scrollState || !this.scrollElement) return;
    if (this.now() - this.scrollState.startedAt > 5e3) {
      this.scrollState = null;
      return;
    }
    const t = this.scrollState.index != null ? this.getOffsetForIndex(this.scrollState.index, this.scrollState.align) : void 0, s = t ? t[0] : this.scrollState.lastTargetOffset, i = 1, o = s !== this.scrollState.lastTargetOffset;
    if (!o && ie(s, this.getScrollOffset())) {
      if (this.scrollState.stableFrames++, this.scrollState.stableFrames >= i) {
        this.scrollState = null;
        return;
      }
    } else
      this.scrollState.stableFrames = 0, o && (this.scrollState.lastTargetOffset = s, this.scrollState.behavior = "auto", this._scrollToOffset(s, {
        adjustments: void 0,
        behavior: "auto"
      }));
    this.scheduleScrollReconcile();
  }
}
const N = (n, l, e, t) => {
  for (; n <= l; ) {
    const s = (n + l) / 2 | 0, i = e(s);
    if (i < t)
      n = s + 1;
    else if (i > t)
      l = s - 1;
    else
      return s;
  }
  return n > 0 ? n - 1 : 0;
};
function fe({
  measurements: n,
  outerSize: l,
  scrollOffset: e,
  lanes: t
}) {
  const s = n.length - 1, i = (a) => n[a].start;
  if (n.length <= t)
    return {
      startIndex: 0,
      endIndex: s
    };
  let o = N(
    0,
    s,
    i,
    e
  ), r = o;
  if (t === 1)
    for (; r < s && n[r].end < e + l; )
      r++;
  else if (t > 1) {
    const a = Array(t).fill(0);
    for (; r < s && a.some((u) => u < e + l); ) {
      const u = n[r];
      a[u.lane] = u.end, r++;
    }
    const h = Array(t).fill(e + l);
    for (; o >= 0 && h.some((u) => u >= e); ) {
      const u = n[o];
      h[u.lane] = u.start, o--;
    }
    o = Math.max(0, o - o % t), r = Math.min(s, r + (t - 1 - r % t));
  }
  return { startIndex: o, endIndex: r };
}
const L = typeof document < "u" ? B : O;
function me({
  useFlushSync: n = !0,
  ...l
}) {
  const e = V(() => ({}), {})[1], t = {
    ...l,
    onChange: (i, o) => {
      var r;
      n && o ? K(e) : e(), (r = l.onChange) == null || r.call(l, i, o);
    }
  }, [s] = j(
    () => new de(t)
  );
  return s.setOptions(t), L(() => s._didMount(), []), L(() => s._willUpdate()), s;
}
function ge(n) {
  return me({
    observeElementRect: ae,
    observeElementOffset: ce,
    scrollToFn: ue,
    ...n
  });
}
function Me({
  items: n,
  totalItems: l,
  parentRef: e,
  hasNextPage: t,
  isFetchingNextPage: s,
  fetchNextPage: i,
  estimateSize: o = () => 100,
  overscan: r = 5
}) {
  var v, f, b;
  const a = ge({
    count: l,
    getScrollElement: () => W(e.current),
    estimateSize: o,
    overscan: r
  }), h = a.getVirtualItems(), u = h.length > 0 ? (((v = h.at(0)) == null ? void 0 : v.start) ?? 0) - a.options.scrollMargin : 0, d = h.length > 0 ? a.getTotalSize() - (((f = h.at(-1)) == null ? void 0 : f.end) ?? 0) : 0, c = h.map((g) => ({
    virtualItem: g,
    key: g.key,
    item: n[g.index],
    props: {
      ref: a.measureElement,
      "data-index": g.index
    }
  })), m = c.at(-1) && !((b = c.at(-1)) != null && b.item);
  return O(() => {
    t && m && !s && i();
  }, [t, m, s, i]), {
    visibleItems: c,
    virtualizer: a,
    spaceBefore: u,
    spaceAfter: d
  };
}
const H = 1e3, C = "ghostVirtualListWindow";
function pe({
  totalItems: n,
  unlockedItemCount: l
}) {
  const e = Math.min(n, l);
  return {
    visibleItemCount: e,
    canLoadMore: n > e
  };
}
function ve(n) {
  return n + H;
}
function be(n, l) {
  return `${n}::${l}`;
}
function F(n, l, e = H) {
  const t = n == null ? void 0 : n[C];
  if (!t || typeof t != "object")
    return e;
  const s = t[l];
  return typeof s != "number" || !Number.isFinite(s) ? e : Math.max(1, Math.floor(s));
}
function Se(n, l, e) {
  if (typeof window > "u")
    return;
  const t = n == null ? void 0 : n[C], s = {
    ...n ?? {},
    [C]: {
      ...t && typeof t == "object" ? t : {},
      [l]: e
    }
  };
  window.history.replaceState(s, "");
}
function y() {
  if (!(typeof window > "u"))
    return window.history.state;
}
function ye(n, {
  resetKey: l
} = {}) {
  const { key: e, pathname: t, search: s } = P(), o = be(t, l ?? s), [r, a] = j(() => F(y(), o)), h = U(o);
  O(() => {
    if (h.current !== o) {
      h.current = o, a(F(y(), o));
      return;
    }
    Se(y(), o, r);
  }, [o, e, r]);
  const { visibleItemCount: u, canLoadMore: d } = pe({
    totalItems: n,
    unlockedItemCount: r
  });
  return {
    visibleItemCount: u,
    canLoadMore: d,
    loadMore: () => a((c) => ve(c))
  };
}
export {
  Ee as H,
  Ie as L,
  Me as a,
  W as g,
  ye as u
};
//# sourceMappingURL=virtual-list-window-DzHu_geX.mjs.map
