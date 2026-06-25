import { x as u, R as e, i as m, n as g } from "./index-Dqn5WIFh.js";
import { h as f, S as l } from "./check-fsC5BvGC.js";
const v = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], p = f("chevron-down", v), b = g(
  "inline-flex items-center justify-center gap-1.5 rounded-md text-control whitespace-nowrap transition-colors focus-visible:ring-1 focus-visible:ring-focus-ring focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:stroke-[1.5px]",
  {
    variants: {
      variant: {
        default: "bg-primary font-semibold text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive font-medium text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background font-medium hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary font-medium text-secondary-foreground hover:bg-secondary/80",
        ghost: "font-medium hover:bg-accent hover:text-accent-foreground",
        link: "font-medium text-primary underline-offset-4 hover:underline",
        dropdown: "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-(--control-height) px-2.5 py-2",
        sm: "h-7 rounded-md px-3 text-sm [&_svg]:size-3",
        lg: "h-11 rounded-md px-8 text-md font-semibold",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), h = u(
  ({ className: r, variant: t, size: n, asChild: s = !1, children: o, ...i }, d) => {
    const a = s ? l : "button", c = t === "dropdown" ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      o,
      /* @__PURE__ */ e.jsx(p, { className: "-mr-0.5! -ml-1! size-4 stroke-[2px]! opacity-50", strokeWidth: 2 })
    ] }) : o;
    return /* @__PURE__ */ e.jsx(
      a,
      {
        ref: d,
        className: m(b({ variant: t, size: n, className: r })),
        ...i,
        children: c
      }
    );
  }
);
h.displayName = "Button";
export {
  h as B,
  p as C,
  b
};
//# sourceMappingURL=button-CG2Dpjqy.js.map
