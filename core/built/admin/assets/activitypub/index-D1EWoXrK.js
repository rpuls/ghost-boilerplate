import { aD as U, aP as h, bm as O, a_ as f, bL as _, bs as G, aI as j, bk as w, bo as W, aC as X, bx as Z, ai as k, aA as T, bp as ee, bO as K, bl as te } from "./index-sudOvKcY.js";
function oe(e) {
  const o = e + "CollectionProvider", [i, r] = U(o), [E, I] = i(
    o,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), p = (u) => {
    const { scope: t, children: a } = u, d = _(null), n = _(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ f.jsx(E, { scope: t, itemMap: n, collectionRef: d, children: a });
  };
  p.displayName = o;
  const v = e + "CollectionSlot", A = j(v), m = h(
    (u, t) => {
      const { scope: a, children: d } = u, n = I(v, a), c = O(t, n.collectionRef);
      return /* @__PURE__ */ f.jsx(A, { ref: c, children: d });
    }
  );
  m.displayName = v;
  const s = e + "CollectionItemSlot", b = "data-radix-collection-item", g = j(s), C = h(
    (u, t) => {
      const { scope: a, children: d, ...n } = u, c = _(null), F = O(t, c), x = I(s, a);
      return G(() => (x.itemMap.set(c, { ref: c, ...n }), () => {
        x.itemMap.delete(c);
      })), /* @__PURE__ */ f.jsx(g, { [b]: "", ref: F, children: d });
    }
  );
  C.displayName = s;
  function S(u) {
    const t = I(e + "CollectionConsumer", u);
    return w(() => {
      const d = t.collectionRef.current;
      if (!d) return [];
      const n = Array.from(d.querySelectorAll(`[${b}]`));
      return Array.from(t.itemMap.values()).sort(
        (x, M) => n.indexOf(x.ref.current) - n.indexOf(M.ref.current)
      );
    }, [t.collectionRef, t.itemMap]);
  }
  return [
    { Provider: p, Slot: m, ItemSlot: C },
    S,
    r
  ];
}
var ne = X(void 0);
function re(e) {
  const o = W(ne);
  return e || o || "ltr";
}
var D = "rovingFocusGroup.onEntryFocus", ce = { bubbles: !1, cancelable: !0 }, y = "RovingFocusGroup", [P, B, se] = oe(y), [ae, be] = U(
  y,
  [se]
), [ie, le] = ae(y), V = h(
  (e, o) => /* @__PURE__ */ f.jsx(P.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ f.jsx(P.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ f.jsx(ue, { ...e, ref: o }) }) })
);
V.displayName = y;
var ue = h((e, o) => {
  const {
    __scopeRovingFocusGroup: i,
    orientation: r,
    loop: E = !1,
    dir: I,
    currentTabStopId: p,
    defaultCurrentTabStopId: v,
    onCurrentTabStopIdChange: A,
    onEntryFocus: m,
    preventScrollOnEntryFocus: s = !1,
    ...b
  } = e, g = _(null), C = O(o, g), S = re(I), [u, t] = ee({
    prop: p,
    defaultProp: v ?? null,
    onChange: A,
    caller: y
  }), [a, d] = K(!1), n = te(m), c = B(i), F = _(!1), [x, M] = K(0);
  return G(() => {
    const l = g.current;
    if (l)
      return l.addEventListener(D, n), () => l.removeEventListener(D, n);
  }, [n]), /* @__PURE__ */ f.jsx(
    ie,
    {
      scope: i,
      orientation: r,
      dir: S,
      loop: E,
      currentTabStopId: u,
      onItemFocus: w(
        (l) => t(l),
        [t]
      ),
      onItemShiftTab: w(() => d(!0), []),
      onFocusableItemAdd: w(
        () => M((l) => l + 1),
        []
      ),
      onFocusableItemRemove: w(
        () => M((l) => l - 1),
        []
      ),
      children: /* @__PURE__ */ f.jsx(
        k.div,
        {
          tabIndex: a || x === 0 ? -1 : 0,
          "data-orientation": r,
          ...b,
          ref: C,
          style: { outline: "none", ...e.style },
          onMouseDown: T(e.onMouseDown, () => {
            F.current = !0;
          }),
          onFocus: T(e.onFocus, (l) => {
            const z = !F.current;
            if (l.target === l.currentTarget && z && !a) {
              const L = new CustomEvent(D, ce);
              if (l.currentTarget.dispatchEvent(L), !L.defaultPrevented) {
                const N = c().filter((R) => R.focusable), $ = N.find((R) => R.active), J = N.find((R) => R.id === u), Q = [$, J, ...N].filter(
                  Boolean
                ).map((R) => R.ref.current);
                q(Q, s);
              }
            }
            F.current = !1;
          }),
          onBlur: T(e.onBlur, () => d(!1))
        }
      )
    }
  );
}), Y = "RovingFocusGroupItem", H = h(
  (e, o) => {
    const {
      __scopeRovingFocusGroup: i,
      focusable: r = !0,
      active: E = !1,
      tabStopId: I,
      children: p,
      ...v
    } = e, A = Z(), m = I || A, s = le(Y, i), b = s.currentTabStopId === m, g = B(i), { onFocusableItemAdd: C, onFocusableItemRemove: S, currentTabStopId: u } = s;
    return G(() => {
      if (r)
        return C(), () => S();
    }, [r, C, S]), /* @__PURE__ */ f.jsx(
      P.ItemSlot,
      {
        scope: i,
        id: m,
        focusable: r,
        active: E,
        children: /* @__PURE__ */ f.jsx(
          k.span,
          {
            tabIndex: b ? 0 : -1,
            "data-orientation": s.orientation,
            ...v,
            ref: o,
            onMouseDown: T(e.onMouseDown, (t) => {
              r ? s.onItemFocus(m) : t.preventDefault();
            }),
            onFocus: T(e.onFocus, () => s.onItemFocus(m)),
            onKeyDown: T(e.onKeyDown, (t) => {
              if (t.key === "Tab" && t.shiftKey) {
                s.onItemShiftTab();
                return;
              }
              if (t.target !== t.currentTarget) return;
              const a = me(t, s.orientation, s.dir);
              if (a !== void 0) {
                if (t.metaKey || t.ctrlKey || t.altKey || t.shiftKey) return;
                t.preventDefault();
                let n = g().filter((c) => c.focusable).map((c) => c.ref.current);
                if (a === "last") n.reverse();
                else if (a === "prev" || a === "next") {
                  a === "prev" && n.reverse();
                  const c = n.indexOf(t.currentTarget);
                  n = s.loop ? pe(n, c + 1) : n.slice(c + 1);
                }
                setTimeout(() => q(n));
              }
            }),
            children: typeof p == "function" ? p({ isCurrentTabStop: b, hasTabStop: u != null }) : p
          }
        )
      }
    );
  }
);
H.displayName = Y;
var de = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function fe(e, o) {
  return o !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function me(e, o, i) {
  const r = fe(e.key, i);
  if (!(o === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(o === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return de[r];
}
function q(e, o = !1) {
  const i = document.activeElement;
  for (const r of e)
    if (r === i || (r.focus({ preventScroll: o }), document.activeElement !== i)) return;
}
function pe(e, o) {
  return e.map((i, r) => e[(o + r) % e.length]);
}
var Ce = V, Re = H;
export {
  Re as I,
  Ce as R,
  be as a,
  oe as c,
  re as u
};
//# sourceMappingURL=index-D1EWoXrK.js.map
