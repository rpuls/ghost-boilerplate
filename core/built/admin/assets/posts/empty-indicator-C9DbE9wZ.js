import { a1 as x, R as e, i as d } from "./index-Dqn5WIFh.js";
const n = x.forwardRef(({ children: s, className: r, ...a }, t) => /* @__PURE__ */ e.jsx(
  "div",
  {
    ref: t,
    className: d("flex items-center justify-center rounded-full bg-muted w-12 h-12 max-w-12 max-h-12 [&_svg]:size-4 [&_svg]:text-muted-foreground [&_svg]:shrink-0", r),
    ...a,
    children: s
  }
));
n.displayName = "EmptyBadge";
const c = x.forwardRef(({ children: s, className: r, title: a, description: t, actions: m, ...l }, i) => /* @__PURE__ */ e.jsxs("div", { ref: i, className: d("flex flex-col items-center justify-center gap-3 text-center", r), ...l, children: [
  /* @__PURE__ */ e.jsx(n, { children: s }),
  /* @__PURE__ */ e.jsxs("div", { className: "flex max-w-[320px] flex-col gap-1.5", children: [
    /* @__PURE__ */ e.jsx("h3", { className: "text-md font-medium tracking-normal text-pretty text-foreground", children: a }),
    t && /* @__PURE__ */ e.jsx("p", { className: "text-sm leading-tight text-pretty text-muted-foreground", children: t })
  ] }),
  m && /* @__PURE__ */ e.jsx("div", { className: "flex items-center gap-2", children: m })
] }));
c.displayName = "EmptyIndicator";
export {
  c as E
};
//# sourceMappingURL=empty-indicator-C9DbE9wZ.js.map
