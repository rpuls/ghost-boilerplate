import { j as e } from "./index-BWRct4la.mjs";
import { S as a } from "./skeleton-DhEoQOK3.mjs";
const d = ({ size: s = "md", color: o = "dark", className: b = "" }) => {
  let r = "relative mx-0 my-[-0.5] box-border inline-block animate-spin rounded-full before:z-10 before:block before:rounded-full before:content-['']";
  switch (s) {
    case "sm":
      r += " h-[16px] w-[16px] border-2 before:mt-[10px] before:h-[3px] before:w-[3px]";
      break;
    case "md":
      r += " h-[20px] w-[20px] border-2 before:mt-[13px] before:h-[3px] before:w-[3px]";
      break;
    case "lg":
    default:
      r += " h-[50px] w-[50px] border before:mt-[7px] before:h-[7px] before:w-[7px]";
      break;
  }
  switch (o) {
    case "light":
      r += " border-white/20 before:bg-white dark:border-black/10 dark:before:bg-black";
      break;
    case "dark":
    default:
      r += " border-black/10 before:bg-black dark:border-white/20 dark:before:bg-white";
      break;
  }
  return /* @__PURE__ */ e.jsx("div", { className: `${r} ${b}` });
}, c = () => /* @__PURE__ */ e.jsx("div", { className: "flex h-full flex-col items-center justify-center gap-3", children: /* @__PURE__ */ e.jsx("div", { className: "flex size-20 items-center justify-center rounded-full", children: /* @__PURE__ */ e.jsxs("div", { className: "-mt-1.5 flex items-end gap-2", children: [
  /* @__PURE__ */ e.jsx(a, { className: "h-10 w-3" }),
  /* @__PURE__ */ e.jsx(a, { className: "h-14 w-3" }),
  /* @__PURE__ */ e.jsx(a, { className: "h-6 w-3" })
] }) }) });
export {
  c as B,
  d as L
};
//# sourceMappingURL=loading-indicator-D8SILWlO.mjs.map
