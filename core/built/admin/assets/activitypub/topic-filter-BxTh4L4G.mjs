import { l as v, c as r, b as T, e as g, j as l, B as j } from "./index-BpBf-VFB.mjs";
const N = ({ currentTopic: o, onTopicChange: a, excludeTopics: c = [] }) => {
  const { topicsQuery: i } = v(), { data: t } = i, d = { slug: "following", name: "Following" }, f = (t == null ? void 0 : t.topics) || [], u = [d, ...f].filter(({ slug: e }) => !c.includes(e)), s = r(null), p = r(null), [m, h] = T(!0), w = (e) => {
    const { scrollLeft: n, scrollWidth: x, clientWidth: b } = e.currentTarget;
    h(n + b < x - 1);
  };
  return g(() => {
    s.current && s.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    });
  }, [o]), /* @__PURE__ */ l.jsxs("div", { className: "relative w-full", children: [
    /* @__PURE__ */ l.jsx(
      "div",
      {
        ref: p,
        className: "flex w-full max-w-full min-w-0 snap-x snap-mandatory gap-2 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        onScroll: w,
        children: u.map(({ slug: e, name: n }) => /* @__PURE__ */ l.jsx(
          j,
          {
            ref: o === e ? s : null,
            className: "h-8 snap-start rounded-full px-3.5 text-sm",
            variant: o === e ? "default" : "secondary",
            onClick: () => a(e),
            children: n
          },
          e
        ))
      }
    ),
    m && /* @__PURE__ */ l.jsx("div", { className: "pointer-events-none absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-white to-transparent dark:from-black" })
  ] });
};
export {
  N as T
};
//# sourceMappingURL=topic-filter-BxTh4L4G.mjs.map
