import { T as e, a as t, d as n, v as r, w as i } from "./_react-D4KM8XEu.js";
import { S as a, d as o } from "./chunk-KS7C4IRE-D4HEcEwi.js";
import { D as s, _ as c, a as l, b as u, g as d, i as f, m as p, r as m } from "./routes-Dh3xXfce.js";
import { T as h, t as g } from "./use-navigate-with-base-path-CAwXTmqH.js";
import { W as _ } from "./use-activity-pub-queries-VzbN99u_.js";
import { c as v, l as y, u as b } from "./content-formatters-BpQARh28.js";
import { t as x } from "./hash-BC9Q0N4c.js";
import { i as S, n as C, r as w, t as T } from "./use-reply-chain-data-CxonteFD.js";
//#region src/views/feed/note.tsx
n();
var E = a(), D = () => /* @__PURE__ */ (0, E.jsx)("div", { className: "h-px w-full bg-gray-200 dark:bg-gray-950" }), O = () => {
	let { postId: n } = o(), { canGoBack: a } = h(), [O, k] = e(/* @__PURE__ */ new Set()), [A, j] = e(/* @__PURE__ */ new Set()), [M, N] = e(/* @__PURE__ */ new Set()), [P, F] = e(!1), I = i(null), L = i(null), R = i(null), z = i(null), B = g(), { threadParents: V, post: H, processedReplies: U, isLoading: W, loadMoreChildren: G, loadMoreChildReplies: K, hasMoreChildren: q, hasMoreChildReplies: J } = T(decodeURIComponent(n ?? ""), { includeAncestors: !0 }), Y = H?.object, X = Y?.replyCount ?? 0, [Z, Q] = e(!1);
	if (r(() => {
		L.current && V.length > 0 && !Z && (L.current.scrollIntoView({
			behavior: "instant",
			block: "start"
		}), Q(!0));
	}, [V, Z]), r(() => {
		R.current && R.current.disconnect();
		let e = document.querySelector("[data-scrollable-container]");
		if (e) return R.current = new IntersectionObserver(async (e) => {
			if (e[0].isIntersecting && q && !P) {
				F(!0);
				try {
					await G();
				} catch (e) {
					console.error("Failed to load more top-level replies:", e);
				} finally {
					F(!1);
				}
			}
		}, {
			root: e,
			rootMargin: "200px"
		}), z.current && R.current.observe(z.current), () => {
			R.current && R.current.disconnect();
		};
	}, [
		q,
		P,
		G
	]), W) return /* @__PURE__ */ (0, E.jsx)(l, { children: /* @__PURE__ */ (0, E.jsxs)("div", {
		className: "mx-auto flex max-w-[620px] flex-col items-center gap-3 pt-9 lg:px-8",
		children: [
			/* @__PURE__ */ (0, E.jsxs)("div", {
				className: "flex w-full items-center gap-3",
				children: [/* @__PURE__ */ (0, E.jsx)(b, { className: "size-10 rounded-full" }), /* @__PURE__ */ (0, E.jsxs)("div", {
					className: "grow pt-1",
					children: [/* @__PURE__ */ (0, E.jsx)(b, { className: "w-24" }), /* @__PURE__ */ (0, E.jsx)(b, { className: "w-3/5" })]
				})]
			}),
			/* @__PURE__ */ (0, E.jsxs)("div", {
				className: "mb-7 w-full",
				children: [
					/* @__PURE__ */ (0, E.jsx)(b, {}),
					/* @__PURE__ */ (0, E.jsx)(b, { className: "w-4/5" }),
					/* @__PURE__ */ (0, E.jsx)(b, {})
				]
			}),
			/* @__PURE__ */ (0, E.jsx)(D, {}),
			/* @__PURE__ */ (0, E.jsxs)("div", {
				className: "flex w-full items-center gap-3 py-3",
				children: [/* @__PURE__ */ (0, E.jsx)(b, {
					className: "block size-full",
					containerClassName: "size-10 rounded-full overflow-hidden"
				}), /* @__PURE__ */ (0, E.jsxs)("div", { children: [/* @__PURE__ */ (0, E.jsx)(b, { className: "w-52" }), /* @__PURE__ */ (0, E.jsx)(b, { className: "w-28" })] })]
			}),
			/* @__PURE__ */ (0, E.jsx)(D, {})
		]
	}) });
	if (!H) return /* @__PURE__ */ (0, E.jsx)(l, { children: /* @__PURE__ */ (0, E.jsx)("div", {
		className: "mx-auto mt-4 flex w-full max-w-[620px] flex-col items-center",
		children: /* @__PURE__ */ (0, E.jsxs)(f, { children: [/* @__PURE__ */ (0, E.jsx)(m, { children: /* @__PURE__ */ (0, E.jsx)(x, {}) }), /* @__PURE__ */ (0, E.jsx)("div", { children: "Error loading note." })] })
	}) });
	function $() {}
	function ee(e) {
		k((t) => {
			let n = new Set(t);
			return n.has(e) ? n.delete(e) : (n.add(e), j((t) => {
				let n = new Set(t);
				return n.add(e), n;
			})), n;
		});
	}
	async function te(e, t) {
		if (!M.has(e)) {
			N((t) => new Set(t).add(e));
			try {
				K && await K(t);
			} catch (e) {
				console.error("Failed to load more replies for chain:", e);
			} finally {
				N((t) => {
					let n = new Set(t);
					return n.delete(e), n;
				});
			}
		}
	}
	return /* @__PURE__ */ (0, E.jsx)(l, { children: /* @__PURE__ */ (0, E.jsx)("div", {
		className: "mx-auto flex h-full max-w-[620px] flex-col",
		children: /* @__PURE__ */ (0, E.jsx)("div", {
			className: "relative flex-1",
			children: /* @__PURE__ */ (0, E.jsx)("div", {
				className: "grow overflow-y-auto",
				children: /* @__PURE__ */ (0, E.jsxs)("div", {
					className: "mx-auto px-8 pt-5 pb-10 max-lg:px-0",
					children: [
						!V.length && /* @__PURE__ */ (0, E.jsx)(u, {
							actor: H.actor,
							isCurrentUser: H.object.authored,
							children: /* @__PURE__ */ (0, E.jsxs)("div", {
								className: `col-[2/3] mx-auto flex w-full cursor-pointer items-center gap-3 ${a ? "pt-10 max-md:pt-5" : "pt-5"}`,
								children: [/* @__PURE__ */ (0, E.jsx)("div", {
									className: "relative z-10",
									children: /* @__PURE__ */ (0, E.jsx)(v, {
										author: H.actor,
										showFollowButton: !H.object.authored && !H.actor.followedByMe
									})
								}), /* @__PURE__ */ (0, E.jsxs)("div", {
									className: "relative z-10 flex w-full min-w-0 cursor-pointer flex-col overflow-visible text-[1.5rem]",
									onClick: (e) => {
										c(H.actor, B, e);
									},
									children: [/* @__PURE__ */ (0, E.jsx)("div", {
										className: "flex w-full",
										children: /* @__PURE__ */ (0, E.jsx)("span", {
											className: "min-w-0 truncate font-semibold whitespace-nowrap hover:underline",
											children: H.actor.name
										})
									}), /* @__PURE__ */ (0, E.jsxs)("div", {
										className: "flex w-full",
										children: [/* @__PURE__ */ (0, E.jsx)("span", {
											className: "truncate text-gray-700 after:mx-1 after:font-normal after:text-gray-700 after:content-[\"·\"]",
											children: y(H.actor)
										}), /* @__PURE__ */ (0, E.jsx)("span", {
											className: "text-gray-700",
											children: d(Y, !Y.authored)
										})]
									})]
								})]
							})
						}),
						V.map((e) => e.object.type === "Tombstone" ? /* @__PURE__ */ (0, E.jsx)(w, { last: !1 }) : /* @__PURE__ */ (0, E.jsx)(p, {
							actor: e.actor,
							allowDelete: !1,
							commentCount: e.object.replyCount ?? 0,
							last: !1,
							layout: "reply",
							likeCount: e.object.likeCount ?? 0,
							object: e.object,
							repostCount: e.object.repostCount ?? 0,
							type: "Note",
							onClick: () => {
								B(`/${e.object.type === "Article" ? "reader" : "notes"}/${encodeURIComponent(e.object.id)}`);
							}
						})),
						/* @__PURE__ */ (0, E.jsx)("div", {
							ref: L,
							className: `${a ? "scroll-mt-[12px]" : "scroll-mt-[124px]"}`,
							children: /* @__PURE__ */ (0, E.jsxs)("div", {
								className: `${V.length > 0 && "min-h-[calc(100vh-52px)]"}`,
								children: [
									/* @__PURE__ */ (0, E.jsx)(p, {
										actor: H.actor,
										allowDelete: !1,
										commentCount: X,
										last: !0,
										layout: "modal",
										likeCount: Y.likeCount ?? 0,
										object: Y,
										repostCount: Y.repostCount,
										showHeader: V.length > 0,
										showStats: !0,
										type: "Note"
									}),
									/* @__PURE__ */ (0, E.jsx)(S, { object: Y }),
									/* @__PURE__ */ (0, E.jsx)(D, {}),
									/* @__PURE__ */ (0, E.jsxs)("div", {
										ref: I,
										children: [U.map((e, n) => {
											let r = n === U.length - 1, i = e.mainReply.id, a = O.has(i), o = A.has(i), s = M.has(i), c = e.chain.length > 0;
											return /* @__PURE__ */ (0, E.jsxs)(t.Fragment, { children: [
												/* @__PURE__ */ (0, E.jsx)(p, {
													actor: e.mainReply.actor,
													allowDelete: e.mainReply.object.authored,
													commentCount: e.mainReply.object.replyCount ?? 0,
													isChainParent: c,
													isPending: _(e.mainReply.id),
													last: !c,
													layout: "reply",
													likeCount: e.mainReply.object.likeCount ?? 0,
													object: e.mainReply.object,
													parentId: Y.id,
													repostCount: e.mainReply.object.repostCount ?? 0,
													type: "Note",
													onClick: () => {
														B(`/notes/${encodeURIComponent(e.mainReply.id)}`);
													},
													onDelete: $
												}),
												c && e.chain[0] && /* @__PURE__ */ (0, E.jsx)(p, {
													actor: e.chain[0].actor,
													allowDelete: e.chain[0].object.authored,
													commentCount: e.chain[0].object.replyCount ?? 0,
													isChainContinuation: !0,
													isPending: _(e.chain[0].id),
													last: e.chain.length === 1,
													layout: "reply",
													likeCount: e.chain[0].object.likeCount ?? 0,
													object: e.chain[0].object,
													parentId: Y.id,
													repostCount: e.chain[0].object.repostCount ?? 0,
													type: "Note",
													onClick: () => {
														B(`/notes/${encodeURIComponent(e.chain[0].id)}`);
													},
													onDelete: $
												}, e.chain[0].id),
												c && a && e.chain.slice(1).map((t, r) => {
													let i = r === e.chain.slice(1).length - 1, a = J && J(n), o = i && a;
													return /* @__PURE__ */ (0, E.jsx)(p, {
														actor: t.actor,
														allowDelete: t.object.authored,
														commentCount: t.object.replyCount ?? 0,
														isChainContinuation: !0,
														isPending: _(t.id),
														last: i && !o,
														layout: "reply",
														likeCount: t.object.likeCount ?? 0,
														object: t.object,
														parentId: Y.id,
														repostCount: t.object.repostCount ?? 0,
														type: "Note",
														onClick: () => {
															B(`/notes/${encodeURIComponent(t.id)}`);
														},
														onDelete: $
													}, t.id);
												}),
												c && e.chain.length > 1 && !a && /* @__PURE__ */ (0, E.jsx)(C, {
													variant: "expand",
													onClick: () => ee(i)
												}),
												c && a && o && J && J(n) && /* @__PURE__ */ (0, E.jsx)(C, {
													loading: s,
													variant: "loadMore",
													onClick: () => te(i, n)
												}),
												!r && /* @__PURE__ */ (0, E.jsx)(D, {})
											] }, e.mainReply.id);
										}), P && /* @__PURE__ */ (0, E.jsx)("div", {
											className: "flex flex-col items-center justify-center text-center",
											children: /* @__PURE__ */ (0, E.jsx)(s, { size: "md" })
										})]
									}),
									q && /* @__PURE__ */ (0, E.jsx)("div", {
										ref: z,
										className: "h-1"
									})
								]
							})
						})
					]
				})
			})
		})
	}) });
};
//#endregion
export { O as default };

//# sourceMappingURL=note-Cy1-uKMY.js.map