import { bR as v, bL as n, bO as T, bs as g, a_ as e, t as j } from "./index-sudOvKcY.js";
const y = ({ currentTopic: o, onTopicChange: a, excludeTopics: r = [] }) => {
  const { topicsQuery: i } = v(), { data: c } = i, d = { slug: "following", name: "Following" }, f = c?.topics || [], u = [d, ...f].filter(({ slug: t }) => !r.includes(t)), s = n(null), p = n(null), [m, h] = T(!0), w = (t) => {
    const { scrollLeft: l, scrollWidth: x, clientWidth: b } = t.currentTarget;
    h(l + b < x - 1);
  };
  return g(() => {
    s.current && s.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    });
  }, [o]), /* @__PURE__ */ e.jsxs("div", { className: "relative w-full", children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        ref: p,
        className: "flex w-full max-w-full min-w-0 snap-x snap-mandatory gap-2 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        onScroll: w,
        children: u.map(({ slug: t, name: l }) => /* @__PURE__ */ e.jsx(
          j,
          {
            ref: o === t ? s : null,
            className: "h-8 snap-start rounded-full px-3.5 text-sm",
            variant: o === t ? "default" : "secondary",
            onClick: () => a(t),
            children: l
          },
          t
        ))
      }
    ),
    m && /* @__PURE__ */ e.jsx("div", { className: "pointer-events-none absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-white to-transparent dark:from-black" })
  ] });
};
export {
  y as T
};
//# sourceMappingURL=topic-filter-Oee10885.js.map
