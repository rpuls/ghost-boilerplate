import { a1 as u, R as a, i, x as l } from "./index-Dqn5WIFh.js";
const p = {
  "2xs": "text-2xs",
  xs: "text-xs",
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl"
}, y = {
  regular: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold"
}, T = {
  primary: "text-text-primary",
  secondary: "text-text-secondary",
  tertiary: "text-text-tertiary"
}, b = {
  none: "leading-none",
  snug: "leading-snug",
  normal: "leading-normal",
  relaxed: "leading-relaxed",
  tight: "leading-tight",
  tighter: "leading-tighter",
  supertight: "leading-supertight",
  body: "leading-body",
  heading: "leading-heading"
}, r = u.forwardRef(
  function({
    as: t = "p",
    className: e,
    size: n = "md",
    weight: o = "regular",
    tone: d = "primary",
    leading: m = "body",
    truncate: x = !1,
    ...g
  }, c) {
    const h = t;
    return /* @__PURE__ */ a.jsx(
      h,
      {
        ref: c,
        className: i(
          p[n],
          y[o],
          T[d],
          b[m],
          x && "truncate",
          e
        ),
        ...g
      }
    );
  }
);
r.displayName = "Text";
const N = l(
  ({ className: s, ...t }, e) => /* @__PURE__ */ a.jsx(
    r,
    {
      ref: e,
      as: "h1",
      className: i("scroll-m-20 leading-[1.1em] tracking-tighter", s),
      size: "2xl",
      weight: "bold",
      ...t
    }
  )
);
N.displayName = "H1";
const E = l(
  ({ className: s, ...t }, e) => /* @__PURE__ */ a.jsx(
    r,
    {
      ref: e,
      as: "h2",
      className: i("scroll-m-20 tracking-tighter first:mt-0", s),
      size: "xl",
      weight: "bold",
      ...t
    }
  )
);
E.displayName = "H2";
const S = l(
  ({ className: s, ...t }, e) => /* @__PURE__ */ a.jsx(
    r,
    {
      ref: e,
      as: "h3",
      className: i("scroll-m-20 tracking-tight", s),
      size: "lg",
      weight: "semibold",
      ...t
    }
  )
);
S.displayName = "H3";
const f = l(
  ({ className: s, ...t }, e) => /* @__PURE__ */ a.jsx(
    r,
    {
      ref: e,
      as: "h4",
      className: i("scroll-m-20 tracking-tight", s),
      size: "md",
      weight: "semibold",
      ...t
    }
  )
);
f.displayName = "H4";
const H = l(
  ({ className: s, ...t }, e) => /* @__PURE__ */ a.jsx(
    r,
    {
      ref: e,
      as: "div",
      className: i("tracking-wide uppercase", s),
      size: "sm",
      tone: "secondary",
      weight: "medium",
      ...t
    }
  )
);
H.displayName = "HTable";
export {
  N as H,
  r as T,
  S as a,
  H as b
};
//# sourceMappingURL=heading-D3VqNO3z.js.map
