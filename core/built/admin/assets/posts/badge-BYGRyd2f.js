import { R as n, i as a, n as s } from "./index-Dqn5WIFh.js";
const o = s(
  "inline-flex items-center rounded-xs border px-1.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 focus:outline-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground/70",
        destructive: "border-transparent bg-destructive/20 text-destructive",
        success: "border-transparent bg-green/20 text-green",
        warning: "border-transparent bg-state-warning/20 text-yellow-600",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function d({ className: r, variant: e, ...t }) {
  return /* @__PURE__ */ n.jsx("div", { className: a(o({ variant: e }), r), ...t });
}
export {
  d as B,
  o as b
};
//# sourceMappingURL=badge-BYGRyd2f.js.map
