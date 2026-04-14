import { R, j as s, w as ee, v as te, h as k, b as U, i as O, u as G, k as N, a as oe, m as B } from "./index-BWRct4la.mjs";
import { c as V, b as j, g as L, a as ne, P as Y, e as E, u as re, f as se } from "./button-BOW1bLRE.mjs";
function ce(e) {
  const t = e + "CollectionProvider", [c, n] = V(t), [b, m] = c(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), l = (p) => {
    const { scope: o, children: u } = p, v = R.useRef(null), a = R.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ s.jsx(b, { scope: o, itemMap: a, collectionRef: v, children: u });
  };
  l.displayName = t;
  const x = e + "CollectionSlot", h = L(x), f = R.forwardRef(
    (p, o) => {
      const { scope: u, children: v } = p, a = m(x, u), i = j(o, a.collectionRef);
      return /* @__PURE__ */ s.jsx(h, { ref: i, children: v });
    }
  );
  f.displayName = x;
  const r = e + "CollectionItemSlot", I = "data-radix-collection-item", C = L(r), g = R.forwardRef(
    (p, o) => {
      const { scope: u, children: v, ...a } = p, i = R.useRef(null), w = j(o, i), T = m(r, u);
      return R.useEffect(() => (T.itemMap.set(i, { ref: i, ...a }), () => void T.itemMap.delete(i))), /* @__PURE__ */ s.jsx(C, { [I]: "", ref: w, children: v });
    }
  );
  g.displayName = r;
  function S(p) {
    const o = m(e + "CollectionConsumer", p);
    return R.useCallback(() => {
      const v = o.collectionRef.current;
      if (!v) return [];
      const a = Array.from(v.querySelectorAll(`[${I}]`));
      return Array.from(o.itemMap.values()).sort(
        (T, A) => a.indexOf(T.ref.current) - a.indexOf(A.ref.current)
      );
    }, [o.collectionRef, o.itemMap]);
  }
  return [
    { Provider: l, Slot: f, ItemSlot: g },
    S,
    n
  ];
}
var ae = te(void 0);
function le(e) {
  const t = ee(ae);
  return e || t || "ltr";
}
var M = "rovingFocusGroup.onEntryFocus", ie = { bubbles: !1, cancelable: !0 }, y = "RovingFocusGroup", [P, $, ue] = ce(y), [fe, he] = V(
  y,
  [ue]
), [de, me] = fe(y), q = k(
  (e, t) => /* @__PURE__ */ s.jsx(P.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ s.jsx(P.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ s.jsx(pe, { ...e, ref: t }) }) })
);
q.displayName = y;
var pe = k((e, t) => {
  const {
    __scopeRovingFocusGroup: c,
    orientation: n,
    loop: b = !1,
    dir: m,
    currentTabStopId: l,
    defaultCurrentTabStopId: x,
    onCurrentTabStopIdChange: h,
    onEntryFocus: f,
    preventScrollOnEntryFocus: r = !1,
    ...I
  } = e, C = O(null), g = j(t, C), S = le(m), [p, o] = re({
    prop: l,
    defaultProp: x ?? null,
    onChange: h,
    caller: y
  }), [u, v] = G(!1), a = se(f), i = $(c), w = O(!1), [T, A] = G(0);
  return U(() => {
    const d = C.current;
    if (d)
      return d.addEventListener(M, a), () => d.removeEventListener(M, a);
  }, [a]), /* @__PURE__ */ s.jsx(
    de,
    {
      scope: c,
      orientation: n,
      dir: S,
      loop: b,
      currentTabStopId: p,
      onItemFocus: N(
        (d) => o(d),
        [o]
      ),
      onItemShiftTab: N(() => v(!0), []),
      onFocusableItemAdd: N(
        () => A((d) => d + 1),
        []
      ),
      onFocusableItemRemove: N(
        () => A((d) => d - 1),
        []
      ),
      children: /* @__PURE__ */ s.jsx(
        Y.div,
        {
          tabIndex: u || T === 0 ? -1 : 0,
          "data-orientation": n,
          ...I,
          ref: g,
          style: { outline: "none", ...e.style },
          onMouseDown: E(e.onMouseDown, () => {
            w.current = !0;
          }),
          onFocus: E(e.onFocus, (d) => {
            const Q = !w.current;
            if (d.target === d.currentTarget && Q && !u) {
              const D = new CustomEvent(M, ie);
              if (d.currentTarget.dispatchEvent(D), !D.defaultPrevented) {
                const _ = i().filter((F) => F.focusable), X = _.find((F) => F.active), Z = _.find((F) => F.id === p), z = [X, Z, ..._].filter(
                  Boolean
                ).map((F) => F.ref.current);
                J(z, r);
              }
            }
            w.current = !1;
          }),
          onBlur: E(e.onBlur, () => v(!1))
        }
      )
    }
  );
}), H = "RovingFocusGroupItem", W = k(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: c,
      focusable: n = !0,
      active: b = !1,
      tabStopId: m,
      children: l,
      ...x
    } = e, h = ne(), f = m || h, r = me(H, c), I = r.currentTabStopId === f, C = $(c), { onFocusableItemAdd: g, onFocusableItemRemove: S, currentTabStopId: p } = r;
    return U(() => {
      if (n)
        return g(), () => S();
    }, [n, g, S]), /* @__PURE__ */ s.jsx(
      P.ItemSlot,
      {
        scope: c,
        id: f,
        focusable: n,
        active: b,
        children: /* @__PURE__ */ s.jsx(
          Y.span,
          {
            tabIndex: I ? 0 : -1,
            "data-orientation": r.orientation,
            ...x,
            ref: t,
            onMouseDown: E(e.onMouseDown, (o) => {
              n ? r.onItemFocus(f) : o.preventDefault();
            }),
            onFocus: E(e.onFocus, () => r.onItemFocus(f)),
            onKeyDown: E(e.onKeyDown, (o) => {
              if (o.key === "Tab" && o.shiftKey) {
                r.onItemShiftTab();
                return;
              }
              if (o.target !== o.currentTarget) return;
              const u = be(o, r.orientation, r.dir);
              if (u !== void 0) {
                if (o.metaKey || o.ctrlKey || o.altKey || o.shiftKey) return;
                o.preventDefault();
                let a = C().filter((i) => i.focusable).map((i) => i.ref.current);
                if (u === "last") a.reverse();
                else if (u === "prev" || u === "next") {
                  u === "prev" && a.reverse();
                  const i = a.indexOf(o.currentTarget);
                  a = r.loop ? xe(a, i + 1) : a.slice(i + 1);
                }
                setTimeout(() => J(a));
              }
            }),
            children: typeof l == "function" ? l({ isCurrentTabStop: I, hasTabStop: p != null }) : l
          }
        )
      }
    );
  }
);
W.displayName = H;
var ve = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Ie(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function be(e, t, c) {
  const n = Ie(e.key, c);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return ve[n];
}
function J(e, t = !1) {
  const c = document.activeElement;
  for (const n of e)
    if (n === c || (n.focus({ preventScroll: t }), document.activeElement !== c)) return;
}
function xe(e, t) {
  return e.map((c, n) => e[(t + n) % e.length]);
}
var Fe = q, we = W;
function K({
  containerClassName: e,
  count: t = 1,
  randomize: c = !1,
  minWidth: n = 70,
  maxWidth: b = 100,
  className: m,
  ...l
}) {
  const { randomWidths: x, keys: h } = oe(() => {
    const f = [], r = [];
    for (let I = 0; I < t; I++) {
      if (c) {
        const C = Math.floor((b - n) / 5), g = Math.floor(Math.random() * (C + 1)), S = n + g * 5;
        f.push(`${S}%`);
      }
      r.push(`skeleton-${I}`);
    }
    return {
      randomWidths: f,
      keys: r
    };
  }, [t, c, n, b]);
  return /* @__PURE__ */ s.jsx("span", { className: e, children: Array.from({ length: t }).map((f, r) => /* @__PURE__ */ s.jsxs(R.Fragment, { children: [
    /* @__PURE__ */ s.jsx(
      "span",
      {
        className: B("inline-flex w-full leading-none animate-pulse rounded-[2px] bg-primary/10", m),
        style: c ? { width: x[r] } : void 0,
        ...l,
        children: "‌"
      }
    ),
    /* @__PURE__ */ s.jsx("br", {})
  ] }, h[r])) });
}
const ge = R.forwardRef(({ className: e, lines: t = 5, ...c }, n) => t < 1 ? /* @__PURE__ */ s.jsx(s.Fragment, {}) : /* @__PURE__ */ s.jsx("div", { ref: n, className: B("flex flex-col gap-2", e), ...c, children: Array.from({ length: t }, (b, m) => {
  let l = "66%";
  switch (m % 5) {
    case 0:
      l = "57%";
      break;
    case 1:
      l = "33%";
      break;
    case 2:
      l = "40%";
      break;
    case 3:
      l = "48%";
      break;
    case 4:
      l = "24%";
      break;
  }
  return /* @__PURE__ */ s.jsxs("div", { className: "flex justify-between gap-6", children: [
    /* @__PURE__ */ s.jsx("div", { className: "grow", style: {
      maxWidth: l
    }, children: /* @__PURE__ */ s.jsx(K, {}) }),
    /* @__PURE__ */ s.jsx(K, { className: "w-[60px] self-end" })
  ] }, m);
}) }));
ge.displayName = "SkeletonTable";
export {
  we as I,
  Fe as R,
  K as S,
  ge as a,
  he as b,
  ce as c,
  le as u
};
//# sourceMappingURL=skeleton-DhEoQOK3.mjs.map
