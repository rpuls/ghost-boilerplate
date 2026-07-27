import { T as e, d as t, v as n, w as r } from "./_react-D4KM8XEu.js";
import { S as i } from "./chunk-KS7C4IRE-D4HEcEwi.js";
import { D as a, _t as o, a as s, b as c, c as l, i as u, m as d, n as f, r as p, vt as m, x as h } from "./routes-Dh3xXfce.js";
import { r as g, t as _ } from "./use-navigate-with-base-path-CAwXTmqH.js";
import { G as v, N as y, V as b, W as x, Y as S, v as C } from "./use-activity-pub-queries-VzbN99u_.js";
import { i as w, t as T } from "./x-C8tAnXly.js";
import { c as E, u as D } from "./content-formatters-BpQARh28.js";
import { t as O } from "./hash-BC9Q0N4c.js";
import { t as k } from "./separator-BI1FLsYM.js";
import "./layout-IdVq3lRy.js";
//#region src/views/feed/components/feed-input.tsx
var A = i(), j = ({ user: e }) => /* @__PURE__ */ (0, A.jsx)(l, { children: /* @__PURE__ */ (0, A.jsxs)("div", {
	className: "relative my-5 w-full hover:cursor-pointer",
	children: [/* @__PURE__ */ (0, A.jsx)("div", {
		className: "pointer-events-none absolute top-4 left-4",
		children: /* @__PURE__ */ (0, A.jsx)(E, { author: e })
	}), /* @__PURE__ */ (0, A.jsx)("div", {
		"aria-label": "New post",
		className: "text inset-0 flex h-[72px] w-full items-center justify-start rounded-lg bg-white pl-[68px] text-left text-[1.5rem] font-normal tracking-normal text-gray-500 shadow-[0_5px_24px_0px_rgba(0,0,0,0.02),0px_2px_5px_0px_rgba(0,0,0,0.07),0px_0px_1px_0px_rgba(0,0,0,0.25)] transition-all hover:bg-white hover:shadow-[0_5px_24px_0px_rgba(0,0,0,0.05),0px_14px_12px_-9px_rgba(0,0,0,0.07),0px_0px_1px_0px_rgba(0,0,0,0.25)] dark:border dark:border-gray-950 dark:bg-black dark:shadow-none dark:hover:border-gray-800 dark:hover:bg-black dark:hover:shadow-none",
		children: "What's new?"
	})]
}) });
//#endregion
//#region src/views/feed/components/suggested-profiles.tsx
t();
var M = () => {
	let t = r(null), i = _(), [a, s] = e(!1), [l, u] = e(!0), { suggestedProfilesQuery: d, updateSuggestedProfile: f } = y("index", 10), { data: p = [], isLoading: v } = d, b = () => {
		let e = t.current;
		if (!e) return;
		let n = e.scrollLeft > 0, r = e.scrollLeft < e.scrollWidth - e.clientWidth;
		s(n), u(r);
	};
	if (n(() => {
		b();
	}, [p]), !v && (!p || p.length < 4)) return null;
	let x = (e) => {
		f(e.id, { followedByMe: !0 });
	}, C = (e) => {
		f(e.id, { followedByMe: !1 });
	};
	return /* @__PURE__ */ (0, A.jsxs)(A.Fragment, { children: [/* @__PURE__ */ (0, A.jsxs)("div", {
		className: "pt-4 pb-7",
		children: [/* @__PURE__ */ (0, A.jsxs)("div", {
			className: "mb-3 flex items-center justify-between",
			children: [/* @__PURE__ */ (0, A.jsx)(S, {
				className: "text-lg font-semibold text-black dark:text-white",
				children: "More people to follow"
			}), /* @__PURE__ */ (0, A.jsx)(g, {
				className: "px-0 font-medium text-gray-700 hover:text-black dark:text-gray-600 dark:hover:text-white",
				variant: "link",
				onClick: () => i("/explore"),
				children: "Find more →"
			})]
		}), /* @__PURE__ */ (0, A.jsxs)("div", {
			className: "relative",
			children: [
				a && /* @__PURE__ */ (0, A.jsx)(g, {
					className: "absolute top-1/2 -left-10 z-10 size-10 -translate-y-1/2 text-gray-700 hover:bg-transparent max-lg:hidden dark:text-gray-600 dark:hover:text-white",
					variant: "ghost",
					onClick: () => {
						let e = t.current;
						e && e.scrollBy({
							left: -352,
							behavior: "smooth"
						});
					},
					children: /* @__PURE__ */ (0, A.jsx)(m, { className: "size-6!" })
				}),
				l && /* @__PURE__ */ (0, A.jsx)(g, {
					className: "absolute top-1/2 -right-10 z-10 size-10 -translate-y-1/2 text-gray-700 hover:bg-transparent max-lg:hidden dark:text-gray-600 dark:hover:text-white",
					variant: "ghost",
					onClick: () => {
						let e = t.current;
						e && e.scrollBy({
							left: 352,
							behavior: "smooth"
						});
					},
					children: /* @__PURE__ */ (0, A.jsx)(o, { className: "size-6!" })
				}),
				/* @__PURE__ */ (0, A.jsx)("div", {
					ref: t,
					className: "flex snap-x snap-mandatory gap-4 overflow-x-auto",
					style: {
						scrollbarWidth: "none",
						msOverflowStyle: "none"
					},
					onScroll: b,
					children: (v ? Array(10).fill(null) : p || []).map((e, t) => /* @__PURE__ */ (0, A.jsxs)("div", {
						className: "relative w-40 shrink-0 snap-start rounded-lg bg-gray-100 p-4 dark:bg-gray-950/30",
						onClick: !v && e ? () => i(`/profile/${e.handle}`) : void 0,
						children: [/* @__PURE__ */ (0, A.jsx)(g, {
							className: "absolute top-1 right-2 hidden p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300",
							variant: "link",
							onClick: (t) => {
								t.stopPropagation(), e?.id;
							},
							children: /* @__PURE__ */ (0, A.jsx)(T, { className: "size-4" })
						}), /* @__PURE__ */ (0, A.jsxs)("div", {
							className: "flex flex-col items-center text-center",
							children: [
								/* @__PURE__ */ (0, A.jsx)("div", {
									className: "mb-3",
									children: v ? /* @__PURE__ */ (0, A.jsx)(D, { className: "size-16 rounded-full" }) : /* @__PURE__ */ (0, A.jsx)(c, {
										actor: e,
										align: "center",
										children: /* @__PURE__ */ (0, A.jsx)("div", { children: /* @__PURE__ */ (0, A.jsx)(E, {
											author: {
												icon: { url: e?.avatarUrl || "" },
												name: e?.name || "",
												handle: e?.handle || ""
											},
											size: "md"
										}) })
									})
								}),
								/* @__PURE__ */ (0, A.jsx)("span", {
									className: "mb-6 w-full truncate font-semibold text-black dark:text-white",
									children: v ? /* @__PURE__ */ (0, A.jsx)(D, { className: "h-5 w-32" }) : e?.name || ""
								}),
								v ? /* @__PURE__ */ (0, A.jsx)(D, { className: "h-8 w-16" }) : /* @__PURE__ */ (0, A.jsx)(h, {
									following: e?.followedByMe || !1,
									handle: e?.handle || "",
									type: "primary",
									onFollow: () => e && x(e),
									onUnfollow: () => e && C(e)
								})
							]
						})]
					}, e?.id || `loading-${t}`))
				})
			]
		})]
	}), /* @__PURE__ */ (0, A.jsx)(k, {})] });
};
//#endregion
//#region src/views/feed/components/feed-list.tsx
t();
var N = ({ isLoading: e, activities: t, user: i, fetchNextPage: o, hasNextPage: c, isFetchingNextPage: f }) => {
	let m = _(), h = r(null), v = r(null), y = r(null);
	n(() => (h.current && h.current.disconnect(), h.current = new IntersectionObserver((e) => {
		e[0].isIntersecting && c && !f && o();
	}), v.current && h.current.observe(v.current), y.current && h.current.observe(y.current), () => {
		h.current && h.current.disconnect();
	}), [
		c,
		f,
		o
	]);
	let b = Math.max(0, Math.floor(t.length * .75) - 1);
	return /* @__PURE__ */ (0, A.jsx)(s, { children: /* @__PURE__ */ (0, A.jsx)("div", {
		className: "flex w-full flex-col",
		children: /* @__PURE__ */ (0, A.jsx)("div", {
			className: "w-full",
			children: t.length > 0 ? /* @__PURE__ */ (0, A.jsx)("div", {
				className: "my-4",
				children: /* @__PURE__ */ (0, A.jsx)("div", {
					className: "mx-auto flex items-start gap-11",
					children: /* @__PURE__ */ (0, A.jsx)("div", {
						className: "flex w-full min-w-0 flex-col items-center",
						children: /* @__PURE__ */ (0, A.jsxs)("div", {
							className: "flex w-full max-w-[620px] min-w-0 flex-col items-start",
							children: [
								/* @__PURE__ */ (0, A.jsx)(j, { user: i }),
								/* @__PURE__ */ (0, A.jsxs)("ul", {
									className: "mx-auto flex w-full flex-col px-4 max-lg:px-0",
									"data-testid": "feed-list",
									children: [t.map((n, r) => /* @__PURE__ */ (0, A.jsxs)("li", {
										"data-testid": "feed-item",
										"data-test-view-article": !0,
										children: [
											/* @__PURE__ */ (0, A.jsx)(d, {
												actor: n.actor,
												allowDelete: n.object.authored,
												commentCount: n.object.replyCount ?? 0,
												isLoading: e,
												isPending: x(n.id),
												layout: "feed",
												likeCount: n.object.likeCount ?? 0,
												object: n.object,
												repostCount: n.object.repostCount ?? 0,
												type: n.type,
												onClick: () => {
													m(`/notes/${encodeURIComponent(n.id)}`);
												}
											}),
											r < t.length - 1 && /* @__PURE__ */ (0, A.jsx)(k, {}),
											r === 3 && /* @__PURE__ */ (0, A.jsx)(M, {}),
											r === b && /* @__PURE__ */ (0, A.jsx)("div", {
												ref: v,
												className: "h-1"
											})
										]
									}, `${n.id}-${n.type}-${r}`)), f && /* @__PURE__ */ (0, A.jsx)("li", {
										className: "flex flex-col items-center justify-center gap-4 text-center",
										children: /* @__PURE__ */ (0, A.jsx)(a, { size: "md" })
									})]
								}),
								/* @__PURE__ */ (0, A.jsx)("div", {
									ref: y,
									className: "h-1"
								})
							]
						})
					})
				})
			}) : /* @__PURE__ */ (0, A.jsx)("div", {
				className: "flex w-full flex-col items-center gap-10",
				children: /* @__PURE__ */ (0, A.jsxs)("div", {
					className: "mt-4 flex w-full max-w-[620px] flex-col items-center",
					children: [/* @__PURE__ */ (0, A.jsx)(j, { user: i }), /* @__PURE__ */ (0, A.jsx)("div", {
						className: "mt-[-128px]",
						children: /* @__PURE__ */ (0, A.jsxs)(u, { children: [
							/* @__PURE__ */ (0, A.jsx)(p, { children: /* @__PURE__ */ (0, A.jsx)(O, {}) }),
							/* @__PURE__ */ (0, A.jsxs)("div", { children: [
								"The Feed is the stream of thoughts and ",
								/* @__PURE__ */ (0, A.jsx)("span", {
									className: "text-black dark:text-white",
									children: "bite-sized updates"
								}),
								" from people you follow in the Social Web. It's looking a little empty right now but once the people you follow start posting, their updates will show up here."
							] }),
							/* @__PURE__ */ (0, A.jsx)(l, { children: /* @__PURE__ */ (0, A.jsxs)(g, {
								className: "text-white dark:text-black",
								children: [/* @__PURE__ */ (0, A.jsx)(w, {}), "Write your first note"]
							}) })
						] })
					})]
				})
			})
		})
	}) });
};
//#endregion
//#region src/views/feed/feed.tsx
t();
var P = () => {
	let { feedQuery: e } = C({ enabled: !0 }), { data: t, error: n, fetchNextPage: r, hasNextPage: i, isFetchingNextPage: a, isLoading: o } = e, s = t?.pages.flatMap((e) => e.posts) ?? Array.from({ length: 5 }, (e, t) => ({
		id: `placeholder-${t}`,
		object: {}
	})), { data: c } = b("index");
	return n && v(n) ? /* @__PURE__ */ (0, A.jsx)(f, {
		errorCode: n.code,
		statusCode: n.statusCode
	}) : /* @__PURE__ */ (0, A.jsx)(N, {
		activities: s,
		fetchNextPage: r,
		hasNextPage: i,
		isFetchingNextPage: a,
		isLoading: o,
		user: c
	});
};
//#endregion
export { P as default };

//# sourceMappingURL=feed-DSEBJOqf.js.map