import { b0 as N, cD as z, cR as B, cY as u, aV as H, cw as L, ct as i, aw as V, bx as r, _ as M, H as O, o as D } from "./index-DF6YEs01.js";
const G = [
  "[&_.cm-editor]:bg-transparent",
  "[&_.cm-editor]:border-transparent",
  "[&_.cm-scroller]:font-mono",
  "[&_.cm-scroller]:border-transparent",
  "[&_.cm-activeLine]:bg-transparent",
  "[&_.cm-activeLineGutter]:bg-transparent",
  "[&_.cm-gutters]:bg-grey-50 dark:[&_.cm-gutters]:bg-grey-950",
  "[&_.cm-gutters]:text-grey-600 dark:[&_.cm-gutters]:text-grey-500",
  "[&_.cm-gutters]:border-grey-500 dark:[&_.cm-gutters]:border-grey-800",
  "[&_.cm-cursor]:border-grey-900 dark:[&_.cm-cursor]:border-grey-50",
  "dark:[&_.cm-tooltip-autocomplete.cm-tooltip_ul_li:not([aria-selected])]:bg-grey-950"
].join(" "), P = N(function({
  title: t,
  value: m,
  height: s = "200px",
  error: o,
  hint: a,
  clearBg: g = !0,
  extensions: c,
  onChange: b,
  onFocus: f,
  onBlur: x,
  className: p,
  ..._
}, y) {
  const h = z(), n = B(null), [w, v] = u(100), [l, R] = H.useState(null), [j, k] = u({
    crosshairCursor: !1
  }), { setFocusState: d } = L(), C = (e) => {
    f?.(e), d(!0);
  }, E = (e) => {
    x?.(e), d(!1);
  };
  i(() => {
    Promise.all(c).then(R), k((e) => ({ setup: e, searchKeymap: !1 }));
  }, [c]), i(() => {
    const e = new ResizeObserver(([S]) => {
      v(S.contentRect.width);
    });
    return e.observe(n.current), () => e.disconnect();
  }, []);
  const F = V(
    "peer order-2 w-full max-w-full overflow-hidden rounded-sm border",
    g ? "bg-transparent" : "bg-grey-50",
    o ? "border-red" : "border-grey-500 dark:border-grey-800",
    t && "mt-2",
    s === "full" && "h-full",
    G,
    p
  );
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx("div", { ref: n }),
    l && /* @__PURE__ */ r.jsxs("div", { className: s === "full" ? "h-full" : "", style: { width: w }, children: [
      /* @__PURE__ */ r.jsx(
        M,
        {
          ref: y,
          basicSetup: j,
          className: F,
          extensions: l,
          height: s === "full" ? "100%" : s,
          value: m,
          onBlur: E,
          onChange: b,
          onFocus: C,
          ..._
        }
      ),
      t && /* @__PURE__ */ r.jsx(O, { className: "order-1 text-grey-700! peer-focus:text-black!", htmlFor: h, useLabelTag: !0, children: t }),
      a && /* @__PURE__ */ r.jsx(D, { className: "order-3", color: o ? "red" : "", children: a })
    ] })
  ] });
});
export {
  P as default
};
//# sourceMappingURL=code-editor-view-CGZuiDGx.js.map
