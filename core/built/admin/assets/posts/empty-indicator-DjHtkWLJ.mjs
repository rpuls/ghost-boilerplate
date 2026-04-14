import { R as d, j as e, m as n } from "./index-BWRct4la.mjs";
const x = d.forwardRef(({ children: s, className: r, ...a }, t) => /* @__PURE__ */ e.jsx(
  "div",
  {
    ref: t,
    className: n("flex items-center justify-center rounded-full bg-muted w-12 h-12 max-w-12 max-h-12 [&_svg]:size-4 [&_svg]:text-muted-foreground [&_svg]:shrink-0", r),
    ...a,
    children: s
  }
));
x.displayName = "EmptyBadge";
const l = d.forwardRef(({ children: s, className: r, title: a, description: t, actions: m, ...c }, i) => /* @__PURE__ */ e.jsxs("div", { ref: i, className: n("flex flex-col items-center justify-center space-y-3 text-center", r), ...c, children: [
  /* @__PURE__ */ e.jsx(x, { children: s }),
  /* @__PURE__ */ e.jsxs("div", { className: "max-w-[320px] space-y-1.5", children: [
    /* @__PURE__ */ e.jsx("h3", { className: "text-md font-medium tracking-normal text-pretty text-foreground", children: a }),
    t && /* @__PURE__ */ e.jsx("p", { className: "text-sm leading-tight text-pretty text-muted-foreground", children: t })
  ] }),
  m && /* @__PURE__ */ e.jsx("div", { className: "mt-4 flex items-center gap-2", children: m })
] }));
l.displayName = "EmptyIndicator";
export {
  l as E
};
//# sourceMappingURL=empty-indicator-DjHtkWLJ.mjs.map
