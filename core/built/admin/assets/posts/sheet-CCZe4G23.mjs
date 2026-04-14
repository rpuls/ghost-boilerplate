import { h as i, j as t, S as x, m as o, E as f } from "./index-BWRct4la.mjs";
import { d as h, j as g, e as u, f as d, i as y, X as N, T as n, g as l, O as r } from "./dialog-ChCs58Pc.mjs";
const T = h, z = g, b = u, c = i(({ className: e, ...a }, s) => /* @__PURE__ */ t.jsx(
  r,
  {
    className: o(
      "fixed inset-0 z-50 bg-black/10  data-[state=open]:animate-in duration-200 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...a,
    ref: s
  }
));
c.displayName = r.displayName;
const j = f(
  "fixed z-50 gap-4 bg-background p-8 shadow-lg transition ease-in-out data-[state=closed]:animate-out data-[state=closed]:duration-200 data-[state=open]:animate-in data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
), S = i(({ side: e = "right", className: a, children: s, ...m }, p) => /* @__PURE__ */ t.jsx(b, { children: /* @__PURE__ */ t.jsxs("div", { className: x, children: [
  /* @__PURE__ */ t.jsx(c, {}),
  /* @__PURE__ */ t.jsxs(
    d,
    {
      ref: p,
      className: o(j({ side: e }), a),
      ...m,
      children: [
        /* @__PURE__ */ t.jsxs(y, { className: "fixed top-4 right-4 z-50 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ t.jsx(N, { className: "size-4" }),
          /* @__PURE__ */ t.jsx("span", { className: "sr-only", children: "Close" })
        ] }),
        s
      ]
    }
  )
] }) }));
S.displayName = d.displayName;
const v = ({
  className: e,
  ...a
}) => /* @__PURE__ */ t.jsx(
  "div",
  {
    className: o(
      "flex flex-col space-y-1 text-center sm:text-left",
      e
    ),
    ...a
  }
);
v.displayName = "SheetHeader";
const w = i(({ className: e, ...a }, s) => /* @__PURE__ */ t.jsx(
  n,
  {
    ref: s,
    className: o("text-xl font-semibold text-foreground", e),
    ...a
  }
));
w.displayName = n.displayName;
const C = i(({ className: e, ...a }, s) => /* @__PURE__ */ t.jsx(
  l,
  {
    ref: s,
    className: o("text-sm text-muted-foreground", e),
    ...a
  }
));
C.displayName = l.displayName;
export {
  T as S,
  z as a,
  S as b,
  v as c,
  w as d,
  C as e
};
//# sourceMappingURL=sheet-CCZe4G23.mjs.map
