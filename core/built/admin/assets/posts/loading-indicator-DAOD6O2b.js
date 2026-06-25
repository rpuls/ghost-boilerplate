import { R as e } from "./index-Dqn5WIFh.js";
import { u as a } from "./skeleton-Bihnkn8q.js";
const d = ({ size: s = "md", color: o = "dark", className: b = "" }) => {
  let r = "relative mx-0 my-[-0.5] box-border inline-block animate-spin rounded-full before:z-10 before:block before:rounded-full before:content-['']";
  switch (s) {
    case "sm":
      r += " h-[16px] w-[16px] border-2 before:mt-[10px] before:h-[3px] before:w-[3px]";
      break;
    case "md":
      r += " h-[20px] w-[20px] border-2 before:mt-[13px] before:h-[3px] before:w-[3px]";
      break;
    default:
      r += " h-[50px] w-[50px] border before:mt-[7px] before:h-[7px] before:w-[7px]";
      break;
  }
  return o === "light" ? r += " border-white/20 before:bg-white dark:border-black/10 dark:before:bg-black" : r += " border-black/10 before:bg-black dark:border-white/20 dark:before:bg-white", /* @__PURE__ */ e.jsx("div", { className: `${r} ${b}` });
}, c = () => /* @__PURE__ */ e.jsx("div", { className: "flex h-full flex-col items-center justify-center gap-3", children: /* @__PURE__ */ e.jsx("div", { className: "flex size-20 items-center justify-center rounded-full", children: /* @__PURE__ */ e.jsxs("div", { className: "-mt-1.5 flex items-end gap-2", children: [
  /* @__PURE__ */ e.jsx(a, { className: "h-10 w-3" }),
  /* @__PURE__ */ e.jsx(a, { className: "h-14 w-3" }),
  /* @__PURE__ */ e.jsx(a, { className: "h-6 w-3" })
] }) }) });
export {
  c as B,
  d as L
};
//# sourceMappingURL=loading-indicator-DAOD6O2b.js.map
