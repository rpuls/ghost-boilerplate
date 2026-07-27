import { T as e, d as t, v as n, w as r } from "./_react-D4KM8XEu.js";
import { S as i } from "./chunk-KS7C4IRE-D4HEcEwi.js";
import { r as a } from "./use-navigate-with-base-path-CAwXTmqH.js";
import { P as o } from "./use-activity-pub-queries-VzbN99u_.js";
//#region src/components/topic-filter.tsx
t();
var s = i(), c = ({ currentTopic: t, onTopicChange: i, excludeTopics: c = [] }) => {
	let { topicsQuery: l } = o(), { data: u } = l, d = [{
		slug: "following",
		name: "Following"
	}, ...u?.topics || []].filter(({ slug: e }) => !c.includes(e)), f = r(null), p = r(null), [m, h] = e(!0);
	return n(() => {
		f.current && f.current.scrollIntoView({
			behavior: "smooth",
			block: "nearest",
			inline: "center"
		});
	}, [t]), /* @__PURE__ */ (0, s.jsxs)("div", {
		className: "relative w-full",
		children: [/* @__PURE__ */ (0, s.jsx)("div", {
			ref: p,
			className: "flex w-full max-w-full min-w-0 snap-x snap-mandatory gap-2 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
			onScroll: (e) => {
				let { scrollLeft: t, scrollWidth: n, clientWidth: r } = e.currentTarget;
				h(t + r < n - 1);
			},
			children: d.map(({ slug: e, name: n }) => /* @__PURE__ */ (0, s.jsx)(a, {
				ref: t === e ? f : null,
				className: "h-8 snap-start rounded-full px-3.5 text-sm",
				variant: t === e ? "default" : "secondary",
				onClick: () => i(e),
				children: n
			}, e))
		}), m && /* @__PURE__ */ (0, s.jsx)("div", { className: "pointer-events-none absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-white to-transparent dark:from-black" })]
	});
};
//#endregion
export { c as t };

//# sourceMappingURL=topic-filter-DLHBZT93.js.map