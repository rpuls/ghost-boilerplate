import { a as e, d as t, v as n } from "./_react-D4KM8XEu.js";
import { S as r, d as i } from "./chunk-KS7C4IRE-D4HEcEwi.js";
import { D as a, a as o, b as s, x as c } from "./routes-Dh3xXfce.js";
import { g as l, r as u, t as d } from "./use-navigate-with-base-path-CAwXTmqH.js";
import { Y as f, _ as p, a as m } from "./use-activity-pub-queries-VzbN99u_.js";
import { t as h } from "./x-C8tAnXly.js";
import { c as g, i as _, o as v, s as y, u as b } from "./content-formatters-BpQARh28.js";
import { n as x } from "./onboarding-D6rcBdPe.js";
import "./onboarding-BFDkzeR2.js";
import "./layout-IdVq3lRy.js";
import { t as S } from "./topic-filter-DLHBZT93.js";
var C = l("sprout", [
	["path", {
		d: "M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3",
		key: "139s4v"
	}],
	["path", {
		d: "M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4",
		key: "1dlkgp"
	}],
	["path", {
		d: "M5 21h14",
		key: "11awu3"
	}]
]);
//#endregion
//#region src/views/explore/explore.tsx
t();
var w = r(), T = ({ profile: e, update: t, isLoading: n, onOpenChange: r }) => {
	let { data: i } = m("index", "me"), a = e.handle === i?.handle, o = () => {
		t(e.id, { followedByMe: !0 });
	}, l = () => {
		t(e.id, { followedByMe: !1 });
	}, u = d();
	return /* @__PURE__ */ (0, w.jsx)("div", {
		className: "flex w-full cursor-pointer items-start gap-3 pt-4 [&:last-of-type>:nth-child(2)]:border-none",
		onClick: () => {
			u(`/profile/${e.handle}`);
		},
		children: /* @__PURE__ */ (0, w.jsxs)("div", {
			className: "flex w-full flex-col gap-1 border-b border-gray-200 pb-4 dark:border-gray-950",
			children: [/* @__PURE__ */ (0, w.jsxs)("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, w.jsx)(s, {
					actor: e,
					isCurrentUser: a,
					children: /* @__PURE__ */ (0, w.jsxs)("div", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, w.jsx)(g, {
							author: {
								icon: { url: e.avatarUrl },
								name: e.name,
								handle: e.handle
							},
							onClick: () => r?.(!1)
						}), /* @__PURE__ */ (0, w.jsxs)("div", {
							className: "break-anywhere -mt-0.5 flex grow flex-col",
							children: [/* @__PURE__ */ (0, w.jsx)("span", {
								className: "line-clamp-1 font-semibold text-black dark:text-white",
								children: n ? /* @__PURE__ */ (0, w.jsx)(b, { className: "w-full max-w-48" }) : e.name
							}), /* @__PURE__ */ (0, w.jsx)("span", {
								className: "line-clamp-1 text-md text-gray-700 dark:text-gray-600",
								children: n ? /* @__PURE__ */ (0, w.jsx)(b, { className: "w-32" }) : e.handle
							})]
						})]
					})
				}), n ? /* @__PURE__ */ (0, w.jsx)("div", {
					className: "inline-flex items-center",
					children: /* @__PURE__ */ (0, w.jsx)(b, { className: "w-24" })
				}) : a ? null : /* @__PURE__ */ (0, w.jsx)(c, {
					className: "ml-auto",
					following: e.followedByMe,
					handle: e.handle,
					type: "primary",
					onFollow: o,
					onUnfollow: l
				})]
			}), /* @__PURE__ */ (0, w.jsx)("div", {
				className: "pl-[52px]",
				children: n ? /* @__PURE__ */ (0, w.jsx)(b, { className: "w-full max-w-96" }) : e.bio && /* @__PURE__ */ (0, w.jsx)("div", {
					dangerouslySetInnerHTML: { __html: v(_(y(e.bio, ["a", "br"]))) },
					className: "ap-profile-content break-anywhere pointer-events-none mt-0 line-clamp-2 max-w-[460px]"
				})
			})]
		})
	});
}, E = () => {
	let { isExplainerClosed: t, setExplainerClosed: r } = x(), s = i(), c = d(), l = s.topic || "top", { exploreProfilesQuery: m, updateExploreProfile: g } = p("index", l), { data: _, isLoading: v, fetchNextPage: y, hasNextPage: b, isFetchingNextPage: E } = m, D = Array(10).fill(null).map((e, t) => ({
		id: `skeleton-${t}`,
		name: "",
		handle: "",
		avatarUrl: "",
		bio: "",
		url: "",
		followedByMe: !1
	})), O = _?.pages.flatMap((e) => e.accounts) || [];
	return n(() => {
		let e = document.querySelector(".load-more-trigger");
		if (!e) return;
		let t = new IntersectionObserver((e) => {
			e[0].isIntersecting && b && !E && y();
		}, { threshold: .1 });
		return t.observe(e), () => t.disconnect();
	}, [
		b,
		E,
		y
	]), /* @__PURE__ */ (0, w.jsxs)(o, { children: [
		!t && /* @__PURE__ */ (0, w.jsxs)("div", {
			className: "relative mb-6 flex items-start gap-1 rounded-md bg-gradient-to-r from-[#CFB0FF66] to-[#B6E8FF66] p-4 pr-10 dark:from-[#CFB0FF20] dark:to-[#B6E8FF20]",
			children: [
				/* @__PURE__ */ (0, w.jsx)("div", {
					className: "min-w-[46px]",
					children: /* @__PURE__ */ (0, w.jsx)(C, {
						className: "text-purple",
						size: 46,
						strokeWidth: .75
					})
				}),
				/* @__PURE__ */ (0, w.jsxs)("div", {
					className: "mt-1 flex flex-col gap-[2px]",
					children: [/* @__PURE__ */ (0, w.jsx)(f, {
						className: "text-pretty",
						children: "The fastest way to grow your followers, is to follow others!"
					}), /* @__PURE__ */ (0, w.jsx)("p", {
						className: "text-sm text-balance text-black/60 2xl:text-pretty dark:text-white/60",
						children: "Here are some recommendations to get you started, from Ghost publishers and other great accounts from around the social web."
					})]
				}),
				/* @__PURE__ */ (0, w.jsx)(u, {
					className: "absolute top-[17px] right-4 size-6 opacity-40",
					variant: "link",
					onClick: () => r(!0),
					children: /* @__PURE__ */ (0, w.jsx)(h, { size: 20 })
				})
			]
		}),
		/* @__PURE__ */ (0, w.jsx)(S, {
			currentTopic: l,
			excludeTopics: ["following"],
			onTopicChange: (e) => {
				c(e === "top" ? "/explore" : `/explore/${e}`, { replace: !0 });
			}
		}),
		/* @__PURE__ */ (0, w.jsx)("div", {
			className: "mt-12 flex flex-col gap-12 pb-20 max-md:mt-5",
			children: v ? /* @__PURE__ */ (0, w.jsx)("div", { children: D.map((e) => /* @__PURE__ */ (0, w.jsx)("div", {
				className: "mx-auto w-full max-w-[640px]",
				children: /* @__PURE__ */ (0, w.jsx)(T, {
					isLoading: v,
					profile: e,
					update: () => {}
				})
			}, e.id)) }) : /* @__PURE__ */ (0, w.jsxs)("div", {
				className: "mx-auto flex w-full max-w-[640px] flex-col items-center",
				children: [
					/* @__PURE__ */ (0, w.jsx)("div", {
						className: "w-full",
						children: O.map((t) => /* @__PURE__ */ (0, w.jsx)(e.Fragment, { children: /* @__PURE__ */ (0, w.jsx)(T, {
							isLoading: !1,
							profile: t,
							update: g
						}) }, t.id))
					}),
					/* @__PURE__ */ (0, w.jsx)("div", { className: "load-more-trigger h-4 w-full" }),
					E && /* @__PURE__ */ (0, w.jsx)("div", {
						className: "mt-2 flex w-full justify-center",
						children: /* @__PURE__ */ (0, w.jsx)(a, { size: "sm" })
					})
				]
			})
		})
	] });
};
//#endregion
export { E as default };

//# sourceMappingURL=explore-DfbjzGM1.js.map