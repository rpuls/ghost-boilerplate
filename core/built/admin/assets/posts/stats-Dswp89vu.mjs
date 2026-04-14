import { j as r, m as a } from "./index-BWRct4la.mjs";
import { B as c } from "./button-BOW1bLRE.mjs";
import { c as n, a as o } from "./hooks-BXuxe98u.mjs";
const x = ({ children: t, className: s, ...e }) => /* @__PURE__ */ r.jsx("div", { className: a("flex flex-col", s), ...e, children: t }), f = ({ children: t, className: s, ...e }) => /* @__PURE__ */ r.jsx("div", { className: a(
  "[&_svg]:size-4 flex items-center gap-1.5 text-base h-[22px] font-medium transition-all",
  s,
  e.onClick && "hover:cursor-pointer hover:text-black dark:hover:text-white"
), ...e, children: t }), y = ({ children: t, className: s, ...e }) => /* @__PURE__ */ r.jsx("div", { className: a("text-[26px] mt-0.5 tracking-tighter leading-none text-foreground font-semibold", s), ...e, children: t }), b = ({ children: t, className: s, ...e }) => /* @__PURE__ */ r.jsx(c, { className: a("absolute right-4 top-4 z-50 hidden translate-x-10 text-black dark:text-white/80 dark:hover:text-white opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 md:visible! md:block!", s), size: "sm", variant: "outline", ...e, children: t }), g = ({ children: t, className: s, ...e }) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: a(
      "group relative isolate flex flex-col border-r border-border last:border-none items-start gap-2 px-6 py-5 transition-all text-muted-foreground",
      e.onClick ? "hover:bg-accent/50 hover:text-foreground cursor-pointer" : "cursor-auto",
      s
    ),
    ...e,
    children: t
  }
);
function v({ filter: t } = {}) {
  const s = new URLSearchParams();
  t && s.set("filter", t);
  const e = s.toString();
  return e ? `/members?${e}` : "/members";
}
const l = "PostReferrersResponseType", i = "NewsletterStatsResponseType", p = "PostGrowthStatsResponseType", d = "MrrHistoryResponseType", w = n({
  dataType: l,
  path: (t) => `/stats/posts/${t}/top-referrers`
}), T = n({
  dataType: p,
  path: (t) => `/stats/posts/${t}/growth`
}), k = o({
  dataType: d,
  path: "/stats/mrr/"
}), S = o({
  dataType: i,
  path: "/stats/newsletter-basic-stats/",
  defaultSearchParams: {
    // Empty default params, will be filled by the hook
  }
}), C = o({
  dataType: i,
  path: "/stats/newsletter-click-stats/",
  defaultSearchParams: {
    // Empty default params, will be filled by the hook
  }
});
export {
  g as K,
  f as a,
  x as b,
  y as c,
  T as d,
  k as e,
  b as f,
  v as g,
  S as h,
  C as i,
  w as u
};
//# sourceMappingURL=stats-Dswp89vu.mjs.map
