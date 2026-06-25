import { aP as s, a_ as l, ai as v, az as m } from "./index-sudOvKcY.js";
var N = "Separator", e = "horizontal", u = ["horizontal", "vertical"], p = s((a, r) => {
  const { decorative: t, orientation: o = e, ...i } = a, n = f(o) ? o : e, d = t ? { role: "none" } : { "aria-orientation": n === "vertical" ? n : void 0, role: "separator" };
  return /* @__PURE__ */ l.jsx(
    v.div,
    {
      "data-orientation": n,
      ...d,
      ...i,
      ref: r
    }
  );
});
p.displayName = N;
function f(a) {
  return u.includes(a);
}
var c = p;
const h = s(
  ({ className: a, orientation: r = "horizontal", decorative: t = !0, ...o }, i) => /* @__PURE__ */ l.jsx(
    c,
    {
      ref: i,
      className: m(
        "shrink-0 bg-border",
        r === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        a
      ),
      decorative: t,
      orientation: r,
      ...o
    }
  )
);
h.displayName = c.displayName;
export {
  h as S
};
//# sourceMappingURL=separator-B_Ly_Qq8.js.map
