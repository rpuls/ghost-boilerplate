import { b as G, p as te, n as oe, m as V, d as P, a as F, P as re, g as ne, D as se, j as ae, h as $ } from "./check-fsC5BvGC.js";
import { x as w, R as l, ak as g, a9 as b, a6 as m, am as z, af as ie, S as ce, i as le } from "./index-Dqn5WIFh.js";
import { s as ue, A as de, B, f as pe, b as fe } from "./skeleton-Bihnkn8q.js";
var ve = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), he = "VisuallyHidden", Y = w(
  (e, o) => /* @__PURE__ */ l.jsx(
    G.span,
    {
      ...e,
      ref: o,
      style: { ...ve, ...e.style }
    }
  )
);
Y.displayName = he;
var xe = Y, [L] = ne("Tooltip", [
  B
]), O = B(), U = "TooltipProvider", ye = 700, N = "tooltip.open", [me, S] = L(U), q = (e) => {
  const {
    __scopeTooltip: o,
    delayDuration: t = ye,
    skipDelayDuration: r = 300,
    disableHoverableContent: n = !1,
    children: i
  } = e, a = g(!0), v = g(!1), s = g(0);
  return b(() => {
    const u = s.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ l.jsx(
    me,
    {
      scope: o,
      isOpenDelayedRef: a,
      delayDuration: t,
      onOpen: m(() => {
        r <= 0 || (window.clearTimeout(s.current), a.current = !1);
      }, [r]),
      onClose: m(() => {
        r <= 0 || (window.clearTimeout(s.current), s.current = window.setTimeout(
          () => a.current = !0,
          r
        ));
      }, [r]),
      isPointerInTransitRef: v,
      onPointerInTransitChange: m((u) => {
        v.current = u;
      }, []),
      disableHoverableContent: n,
      children: i
    }
  );
};
q.displayName = U;
var j = "Tooltip", [Te, D] = L(j), W = (e) => {
  const {
    __scopeTooltip: o,
    children: t,
    open: r,
    defaultOpen: n,
    onOpenChange: i,
    disableHoverableContent: a,
    delayDuration: v
  } = e, s = S(j, e.__scopeTooltip), u = O(o), [c, d] = z(null), f = te(), p = g(0), h = a ?? s.disableHoverableContent, y = v ?? s.delayDuration, x = g(!1), [C, T] = oe({
    prop: r,
    defaultProp: n ?? !1,
    onChange: (H) => {
      H ? (s.onOpen(), document.dispatchEvent(new CustomEvent(N))) : s.onClose(), i?.(H);
    },
    caller: j
  }), _ = ie(() => C ? x.current ? "delayed-open" : "instant-open" : "closed", [C]), A = m(() => {
    window.clearTimeout(p.current), p.current = 0, x.current = !1, T(!0);
  }, [T]), R = m(() => {
    window.clearTimeout(p.current), p.current = 0, T(!1);
  }, [T]), k = m(() => {
    window.clearTimeout(p.current), p.current = window.setTimeout(() => {
      x.current = !0, T(!0), p.current = 0;
    }, y);
  }, [y, T]);
  return b(() => () => {
    p.current && (window.clearTimeout(p.current), p.current = 0);
  }, []), /* @__PURE__ */ l.jsx(ue, { ...u, children: /* @__PURE__ */ l.jsx(
    Te,
    {
      scope: o,
      contentId: f,
      open: C,
      stateAttribute: _,
      trigger: c,
      onTriggerChange: d,
      onTriggerEnter: m(() => {
        s.isOpenDelayedRef.current ? k() : A();
      }, [s.isOpenDelayedRef, k, A]),
      onTriggerLeave: m(() => {
        h ? R() : (window.clearTimeout(p.current), p.current = 0);
      }, [R, h]),
      onOpen: A,
      onClose: R,
      disableHoverableContent: h,
      children: t
    }
  ) });
};
W.displayName = j;
var M = "TooltipTrigger", X = w(
  (e, o) => {
    const { __scopeTooltip: t, ...r } = e, n = D(M, t), i = S(M, t), a = O(t), v = g(null), s = V(o, v, n.onTriggerChange), u = g(!1), c = g(!1), d = m(() => u.current = !1, []);
    return b(() => () => document.removeEventListener("pointerup", d), [d]), /* @__PURE__ */ l.jsx(de, { asChild: !0, ...a, children: /* @__PURE__ */ l.jsx(
      G.button,
      {
        "aria-describedby": n.open ? n.contentId : void 0,
        "data-state": n.stateAttribute,
        ...r,
        ref: s,
        onPointerMove: P(e.onPointerMove, (f) => {
          f.pointerType !== "touch" && !c.current && !i.isPointerInTransitRef.current && (n.onTriggerEnter(), c.current = !0);
        }),
        onPointerLeave: P(e.onPointerLeave, () => {
          n.onTriggerLeave(), c.current = !1;
        }),
        onPointerDown: P(e.onPointerDown, () => {
          n.open && n.onClose(), u.current = !0, document.addEventListener("pointerup", d, { once: !0 });
        }),
        onFocus: P(e.onFocus, () => {
          u.current || n.onOpen();
        }),
        onBlur: P(e.onBlur, n.onClose),
        onClick: P(e.onClick, n.onClose)
      }
    ) });
  }
);
X.displayName = M;
var I = "TooltipPortal", [ge, Ce] = L(I, {
  forceMount: void 0
}), K = (e) => {
  const { __scopeTooltip: o, forceMount: t, children: r, container: n } = e, i = D(I, o);
  return /* @__PURE__ */ l.jsx(ge, { scope: o, forceMount: t, children: /* @__PURE__ */ l.jsx(F, { present: t || i.open, children: /* @__PURE__ */ l.jsx(re, { asChild: !0, container: n, children: r }) }) });
};
K.displayName = I;
var E = "TooltipContent", J = w(
  (e, o) => {
    const t = Ce(E, e.__scopeTooltip), { forceMount: r = t.forceMount, side: n = "top", ...i } = e, a = D(E, e.__scopeTooltip);
    return /* @__PURE__ */ l.jsx(F, { present: r || a.open, children: a.disableHoverableContent ? /* @__PURE__ */ l.jsx(Q, { side: n, ...i, ref: o }) : /* @__PURE__ */ l.jsx(be, { side: n, ...i, ref: o }) });
  }
), be = w((e, o) => {
  const t = D(E, e.__scopeTooltip), r = S(E, e.__scopeTooltip), n = g(null), i = V(o, n), [a, v] = z(null), { trigger: s, onClose: u } = t, c = n.current, { onPointerInTransitChange: d } = r, f = m(() => {
    v(null), d(!1);
  }, [d]), p = m(
    (h, y) => {
      const x = h.currentTarget, C = { x: h.clientX, y: h.clientY }, T = Ae(C, x.getBoundingClientRect()), _ = Re(C, T), A = je(y.getBoundingClientRect()), R = Le([..._, ...A]);
      v(R), d(!0);
    },
    [d]
  );
  return b(() => () => f(), [f]), b(() => {
    if (s && c) {
      const h = (x) => p(x, c), y = (x) => p(x, s);
      return s.addEventListener("pointerleave", h), c.addEventListener("pointerleave", y), () => {
        s.removeEventListener("pointerleave", h), c.removeEventListener("pointerleave", y);
      };
    }
  }, [s, c, p, f]), b(() => {
    if (a) {
      const h = (y) => {
        const x = y.target, C = { x: y.clientX, y: y.clientY }, T = s?.contains(x) || c?.contains(x), _ = !De(C, a);
        T ? f() : _ && (f(), u());
      };
      return document.addEventListener("pointermove", h), () => document.removeEventListener("pointermove", h);
    }
  }, [s, c, a, u, f]), /* @__PURE__ */ l.jsx(Q, { ...e, ref: i });
}), [we, Pe] = L(j, { isInside: !1 }), Ee = ae("TooltipContent"), Q = w(
  (e, o) => {
    const {
      __scopeTooltip: t,
      children: r,
      "aria-label": n,
      onEscapeKeyDown: i,
      onPointerDownOutside: a,
      ...v
    } = e, s = D(E, t), u = O(t), { onClose: c } = s;
    return b(() => (document.addEventListener(N, c), () => document.removeEventListener(N, c)), [c]), b(() => {
      if (s.trigger) {
        const d = (f) => {
          f.target instanceof Node && f.target.contains(s.trigger) && c();
        };
        return window.addEventListener("scroll", d, { capture: !0 }), () => window.removeEventListener("scroll", d, { capture: !0 });
      }
    }, [s.trigger, c]), /* @__PURE__ */ l.jsx(
      se,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: a,
        onFocusOutside: (d) => d.preventDefault(),
        onDismiss: c,
        children: /* @__PURE__ */ l.jsxs(
          pe,
          {
            "data-state": s.stateAttribute,
            ...u,
            ...v,
            ref: o,
            style: {
              ...v.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ l.jsx(Ee, { children: r }),
              /* @__PURE__ */ l.jsx(we, { scope: t, isInside: !0, children: /* @__PURE__ */ l.jsx(xe, { id: s.contentId, role: "tooltip", children: n || r }) })
            ]
          }
        )
      }
    );
  }
);
J.displayName = E;
var Z = "TooltipArrow", _e = w(
  (e, o) => {
    const { __scopeTooltip: t, ...r } = e, n = O(t);
    return Pe(
      Z,
      t
    ).isInside ? null : /* @__PURE__ */ l.jsx(fe, { ...n, ...r, ref: o });
  }
);
_e.displayName = Z;
function Ae(e, o) {
  const t = Math.abs(o.top - e.y), r = Math.abs(o.bottom - e.y), n = Math.abs(o.right - e.x), i = Math.abs(o.left - e.x);
  switch (Math.min(t, r, n, i)) {
    case i:
      return "left";
    case n:
      return "right";
    case t:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function Re(e, o, t = 5) {
  const r = [];
  switch (o) {
    case "top":
      r.push(
        { x: e.x - t, y: e.y + t },
        { x: e.x + t, y: e.y + t }
      );
      break;
    case "bottom":
      r.push(
        { x: e.x - t, y: e.y - t },
        { x: e.x + t, y: e.y - t }
      );
      break;
    case "left":
      r.push(
        { x: e.x + t, y: e.y - t },
        { x: e.x + t, y: e.y + t }
      );
      break;
    case "right":
      r.push(
        { x: e.x - t, y: e.y - t },
        { x: e.x - t, y: e.y + t }
      );
      break;
  }
  return r;
}
function je(e) {
  const { top: o, right: t, bottom: r, left: n } = e;
  return [
    { x: n, y: o },
    { x: t, y: o },
    { x: t, y: r },
    { x: n, y: r }
  ];
}
function De(e, o) {
  const { x: t, y: r } = e;
  let n = !1;
  for (let i = 0, a = o.length - 1; i < o.length; a = i++) {
    const v = o[i], s = o[a], u = v.x, c = v.y, d = s.x, f = s.y;
    c > r != f > r && t < (d - u) * (r - c) / (f - c) + u && (n = !n);
  }
  return n;
}
function Le(e) {
  const o = e.slice();
  return o.sort((t, r) => t.x < r.x ? -1 : t.x > r.x ? 1 : t.y < r.y ? -1 : t.y > r.y ? 1 : 0), Oe(o);
}
function Oe(e) {
  if (e.length <= 1) return e.slice();
  const o = [];
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (; o.length >= 2; ) {
      const i = o[o.length - 1], a = o[o.length - 2];
      if ((i.x - a.x) * (n.y - a.y) >= (i.y - a.y) * (n.x - a.x)) o.pop();
      else break;
    }
    o.push(n);
  }
  o.pop();
  const t = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const n = e[r];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1], a = t[t.length - 2];
      if ((i.x - a.x) * (n.y - a.y) >= (i.y - a.y) * (n.x - a.x)) t.pop();
      else break;
    }
    t.push(n);
  }
  return t.pop(), o.length === 1 && t.length === 1 && o[0].x === t[0].x && o[0].y === t[0].y ? o : o.concat(t);
}
var Ne = q, Me = W, Se = X, Ie = K, ee = J;
const ke = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], ze = $("circle-alert", ke);
const He = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Be = $("eye", He), Ye = Ne, Ue = Me, qe = Se, Ge = w(({ className: e, sideOffset: o = 4, ...t }, r) => /* @__PURE__ */ l.jsx(Ie, { children: /* @__PURE__ */ l.jsx("div", { className: ce, children: /* @__PURE__ */ l.jsx(
  ee,
  {
    ref: r,
    className: le(
      "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    sideOffset: o,
    ...t
  }
) }) }));
Ge.displayName = ee.displayName;
export {
  ze as C,
  Be as E,
  Ue as T,
  ve as V,
  Ge as a,
  Ye as b,
  qe as c
};
//# sourceMappingURL=tooltip-Ci7pesWi.js.map
