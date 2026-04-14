import { aj as u, ay as b, az as c, aA as d, j as f, aB as S, aC as x, aD as P, s as j } from "./index-BpBf-VFB.mjs";
var O = Symbol.for("react.lazy"), y = b[" use ".trim().toString()];
function R(r) {
  return typeof r == "object" && r !== null && "then" in r;
}
function N(r) {
  return r != null && typeof r == "object" && "$$typeof" in r && r.$$typeof === O && "_payload" in r && R(r._payload);
}
// @__NO_SIDE_EFFECTS__
function _(r) {
  const o = /* @__PURE__ */ A(r), e = u((n, t) => {
    let { children: i, ...s } = n;
    N(i) && typeof y == "function" && (i = y(i._payload));
    const a = c.toArray(i), l = a.find(T);
    if (l) {
      const p = l.props.children, E = a.map((m) => m === l ? c.count(p) > 1 ? c.only(null) : d(p) ? p.props.children : null : m);
      return /* @__PURE__ */ f.jsx(o, { ...s, ref: t, children: d(p) ? S(p, void 0, E) : null });
    }
    return /* @__PURE__ */ f.jsx(o, { ...s, ref: t, children: i });
  });
  return e.displayName = `${r}.Slot`, e;
}
// @__NO_SIDE_EFFECTS__
function A(r) {
  const o = u((e, n) => {
    let { children: t, ...i } = e;
    if (N(t) && typeof y == "function" && (t = y(t._payload)), d(t)) {
      const s = $(t), a = I(i, t.props);
      return t.type !== x && (a.ref = n ? P(n, s) : s), S(t, a);
    }
    return c.count(t) > 1 ? c.only(null) : null;
  });
  return o.displayName = `${r}.SlotClone`, o;
}
var C = Symbol("radix.slottable");
function T(r) {
  return d(r) && typeof r.type == "function" && "__radixId" in r.type && r.type.__radixId === C;
}
function I(r, o) {
  const e = { ...o };
  for (const n in o) {
    const t = r[n], i = o[n];
    /^on[A-Z]/.test(n) ? t && i ? e[n] = (...a) => {
      const l = i(...a);
      return t(...a), l;
    } : t && (e[n] = t) : n === "style" ? e[n] = { ...t, ...i } : n === "className" && (e[n] = [t, i].filter(Boolean).join(" "));
  }
  return { ...r, ...e };
}
function $(r) {
  var n, t;
  let o = (n = Object.getOwnPropertyDescriptor(r.props, "ref")) == null ? void 0 : n.get, e = o && "isReactWarning" in o && o.isReactWarning;
  return e ? r.ref : (o = (t = Object.getOwnPropertyDescriptor(r, "ref")) == null ? void 0 : t.get, e = o && "isReactWarning" in o && o.isReactWarning, e ? r.props.ref : r.props.ref || r.ref);
}
var w = [
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
], z = w.reduce((r, o) => {
  const e = /* @__PURE__ */ _(`Primitive.${o}`), n = u((t, i) => {
    const { asChild: s, ...a } = t, l = s ? e : o;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ f.jsx(l, { ...a, ref: i });
  });
  return n.displayName = `Primitive.${o}`, { ...r, [o]: n };
}, {}), D = "Separator", v = "horizontal", L = ["horizontal", "vertical"], g = u((r, o) => {
  const { decorative: e, orientation: n = v, ...t } = r, i = W(n) ? n : v, a = e ? { role: "none" } : { "aria-orientation": i === "vertical" ? i : void 0, role: "separator" };
  return /* @__PURE__ */ f.jsx(
    z.div,
    {
      "data-orientation": i,
      ...a,
      ...t,
      ref: o
    }
  );
});
g.displayName = D;
function W(r) {
  return L.includes(r);
}
var h = g;
const V = u(
  ({ className: r, orientation: o = "horizontal", decorative: e = !0, ...n }, t) => /* @__PURE__ */ f.jsx(
    h,
    {
      ref: t,
      className: j(
        "shrink-0 bg-border",
        o === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        r
      ),
      decorative: e,
      orientation: o,
      ...n
    }
  )
);
V.displayName = h.displayName;
export {
  V as S
};
//# sourceMappingURL=separator-DdzsodEc.mjs.map
