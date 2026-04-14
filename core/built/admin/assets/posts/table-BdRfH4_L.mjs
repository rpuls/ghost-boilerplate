import { h as l, j as s, m as o, E as d } from "./index-BWRct4la.mjs";
const c = l(({ className: a, ...e }, t) => /* @__PURE__ */ s.jsx("div", { className: "relative w-full", children: /* @__PURE__ */ s.jsx(
  "table",
  {
    ref: t,
    className: o("w-full caption-bottom text-sm", a),
    ...e
  }
) }));
c.displayName = "Table";
const b = l(({ className: a, ...e }, t) => /* @__PURE__ */ s.jsx("thead", { ref: t, className: o("[&_tr:hover:before]:bg-transparent", a), ...e }));
b.displayName = "TableHeader";
const m = l(({ className: a, ...e }, t) => /* @__PURE__ */ s.jsx(
  "tbody",
  {
    ref: t,
    className: o("", a),
    ...e
  }
));
m.displayName = "TableBody";
const i = l(({ className: a, ...e }, t) => /* @__PURE__ */ s.jsx(
  "tfoot",
  {
    ref: t,
    className: o(
      "border-b bg-muted/50 font-medium [&>tr]:last:border-b-0",
      a
    ),
    ...e
  }
));
i.displayName = "TableFooter";
const n = l(({ className: a, ...e }, t) => /* @__PURE__ */ s.jsx(
  "tr",
  {
    ref: t,
    className: o(
      "group relative border-b data-[state=selected]:bg-muted",
      a
    ),
    ...e
  }
));
n.displayName = "TableRow";
const x = d(
  "relative align-middle",
  {
    variants: {
      variant: {
        default: "h-10 px-2 text-left text-xs font-medium tracking-wide text-text-secondary uppercase [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        cardhead: "text-base font-normal [&>div]:px-0"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), p = l(({ className: a, variant: e, ...t }, r) => /* @__PURE__ */ s.jsx(
  "th",
  {
    ref: r,
    className: o(x({ variant: e, className: a })),
    ...t
  }
));
p.displayName = "TableHead";
const N = l(({ className: a, ...e }, t) => /* @__PURE__ */ s.jsx(
  "td",
  {
    ref: t,
    className: o(
      "relative p-2.5 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] group-hover:bg-muted/50",
      a
    ),
    ...e
  }
));
N.displayName = "TableCell";
const T = l(({ className: a, ...e }, t) => /* @__PURE__ */ s.jsx(
  "caption",
  {
    ref: t,
    className: o("mt-4 text-sm text-muted-foreground", a),
    ...e
  }
));
T.displayName = "TableCaption";
export {
  c as T,
  b as a,
  n as b,
  p as c,
  m as d,
  N as e
};
//# sourceMappingURL=table-BdRfH4_L.mjs.map
