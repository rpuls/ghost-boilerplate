import { b as v, h as s } from "./check-fsC5BvGC.js";
import { x as c, R as l, i as m } from "./index-Dqn5WIFh.js";
var f = "Separator", n = "horizontal", u = ["horizontal", "vertical"], p = c((t, r) => {
  const { decorative: a, orientation: e = n, ...o } = t, i = y(e) ? e : n, h = a ? { role: "none" } : { "aria-orientation": i === "vertical" ? i : void 0, role: "separator" };
  return /* @__PURE__ */ l.jsx(
    v.div,
    {
      "data-orientation": i,
      ...h,
      ...o,
      ref: r
    }
  );
});
p.displayName = f;
function y(t) {
  return u.includes(t);
}
var d = p;
const x = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
], z = s("external-link", x);
const N = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], O = s("user", N), k = c(
  ({ className: t, orientation: r = "horizontal", decorative: a = !0, ...e }, o) => /* @__PURE__ */ l.jsx(
    d,
    {
      ref: o,
      className: m(
        "shrink-0 bg-border",
        r === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        t
      ),
      decorative: a,
      orientation: r,
      ...e
    }
  )
);
k.displayName = d.displayName;
const S = (t) => {
  for (const r of t)
    if (r.key === "timezone") {
      const a = r.value;
      if (typeof a != "string")
        throw new TypeError("Site timezone setting is not a string");
      return a;
    }
  return "Etc/UTC";
};
export {
  z as E,
  k as S,
  O as U,
  S as g
};
//# sourceMappingURL=get-site-timezone-83C41MGz.js.map
