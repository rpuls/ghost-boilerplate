import { S as e, T as t, a as n, d as r, g as i, v as a, w as o } from "./_react-D4KM8XEu.js";
import { S as s, d as c, s as l } from "./chunk-KS7C4IRE-D4HEcEwi.js";
import { o as u } from "./users-BLeiOTHc.js";
import { A as d, B as f, C as p, D as m, E as h, F as g, G as _, H as v, I as y, J as b, L as x, M as S, N as C, P as w, R as T, U as E, V as D, X as O, Y as k, _ as A, a as j, b as M, gt as ee, i as te, j as ne, m as N, n as re, pt as ie, r as ae, s as P, w as F, x as oe, yt as se, z as I } from "./routes-Dh3xXfce.js";
import { T as ce, g as L, i as le, r as R, t as z, v as B } from "./use-navigate-with-base-path-CAwXTmqH.js";
import { E as V, F as ue, G as de, I as fe, T as H, Y as U, a as W, c as pe, i as G, q as me, s as he } from "./use-activity-pub-queries-VzbN99u_.js";
import { r as K } from "./x-C8tAnXly.js";
import { c as ge, i as _e, l as q, o as ve, p as ye, s as be, u as J } from "./content-formatters-BpQARh28.js";
import { a as xe, i as Y, n as X, r as Se, t as Ce } from "./tabs-ogqwoBlb.js";
import { t as we } from "./copy-D9UWIAan.js";
import { l as Te, u as Z } from "./avatar-B3DEDB1l.js";
import { t as Ee } from "./separator-BI1FLsYM.js";
import { t as De } from "./edit-profile-CXdwNmVG.js";
import "./layout-IdVq3lRy.js";
import { t as Oe } from "./settings-DTgqJPxM.js";
var ke = L("pencil", [["path", {
	d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
	key: "1a8usu"
}], ["path", {
	d: "m15 5 4 4",
	key: "1mk7zo"
}]]), Ae = L("user-round-x", [
	["path", {
		d: "M2 21a8 8 0 0 1 11.873-7",
		key: "74fkxq"
	}],
	["circle", {
		cx: "10",
		cy: "8",
		r: "5",
		key: "o932ke"
	}],
	["path", {
		d: "m17 17 5 5",
		key: "p7ous7"
	}],
	["path", {
		d: "m22 17-5 5",
		key: "gqnmv0"
	}]
]);
//#endregion
//#region src/utils/get-name.ts
r();
function je(e) {
	return typeof e.name == "string" ? e.name : typeof e.preferredUsername == "string" ? e.preferredUsername : typeof e.preferredUsername == "object" && e.preferredUsername !== null && "@value" in e.preferredUsername && typeof e.preferredUsername["@value"] == "string" ? e.preferredUsername["@value"] : "Unknown";
}
//#endregion
//#region src/views/profile/components/actor-list.tsx
var Q = s(), Me = ({ noResultsMessage: e, actors: t, isLoading: r, fetchNextPage: i, hasNextPage: s, isFetchingNextPage: c }) => {
	let { data: l } = W("index", "me"), u = o(null), d = o(null);
	a(() => (u.current && u.current.disconnect(), u.current = new IntersectionObserver((e) => {
		e[0].isIntersecting && s && !c && i();
	}), d.current && u.current.observe(d.current), () => {
		u.current && u.current.disconnect();
	}), [
		s,
		c,
		i
	]);
	let f = z();
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "pt-3",
		"data-testid": "actor-list",
		children: [
			s === !1 && t.length === 0 ? /* @__PURE__ */ (0, Q.jsxs)(p, { children: [/* @__PURE__ */ (0, Q.jsx)(F, { children: /* @__PURE__ */ (0, Q.jsx)(ie, {}) }), e] }) : /* @__PURE__ */ (0, Q.jsx)("div", {
				className: "flex flex-col",
				children: t.map(({ actor: e, isFollowing: t, blockedByMe: r, domainBlockedByMe: i }) => {
					let a = q(e), o = a === l?.handle;
					return /* @__PURE__ */ (0, Q.jsx)(n.Fragment, { children: /* @__PURE__ */ (0, Q.jsx)(M, {
						actor: e,
						align: "center",
						isCurrentUser: o,
						side: "left",
						children: /* @__PURE__ */ (0, Q.jsx)("div", { children: /* @__PURE__ */ (0, Q.jsxs)(P, {
							"data-testid": "actor-item",
							onClick: () => {
								A(e, f);
							},
							children: [
								/* @__PURE__ */ (0, Q.jsx)(ge, { author: e }),
								/* @__PURE__ */ (0, Q.jsx)("div", { children: /* @__PURE__ */ (0, Q.jsxs)("div", {
									className: "break-anywhere text-gray-600",
									children: [/* @__PURE__ */ (0, Q.jsx)("span", {
										className: "mr-1 line-clamp-1 font-bold text-black dark:text-white",
										children: je(e)
									}), /* @__PURE__ */ (0, Q.jsx)("div", {
										className: "line-clamp-1 text-sm",
										children: a
									})]
								}) }),
								r || i ? /* @__PURE__ */ (0, Q.jsx)(R, {
									className: "pointer-events-none ml-auto min-w-[90px]",
									variant: "destructive",
									children: "Blocked"
								}) : o ? null : /* @__PURE__ */ (0, Q.jsx)(oe, {
									className: "ml-auto",
									"data-testid": "follow-button",
									following: t,
									handle: a,
									type: "secondary"
								})
							]
						}, e.id) })
					}) }, e.id);
				})
			}),
			/* @__PURE__ */ (0, Q.jsx)("div", {
				ref: d,
				className: "h-1"
			}),
			(c || r) && /* @__PURE__ */ (0, Q.jsx)("div", {
				className: "mt-6 flex flex-col items-center justify-center gap-4 text-center",
				children: /* @__PURE__ */ (0, Q.jsx)(m, { size: "md" })
			})
		]
	});
};
//#endregion
//#region src/views/profile/components/likes.tsx
r();
var $ = ({ posts: e, fetchNextPage: t, hasNextPage: n, isFetchingNextPage: r, isLoading: i }) => {
	let s = o(null), c = o(null), l = o(null), u = Math.max(0, Math.floor(e.length * .75) - 1);
	a(() => (s.current && s.current.disconnect(), s.current = new IntersectionObserver((e) => {
		e[0].isIntersecting && n && !r && t();
	}), c.current && s.current.observe(c.current), l.current && s.current.observe(l.current), () => {
		s.current && s.current.disconnect();
	}), [
		n,
		r,
		t
	]);
	let d = z();
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
		n === !1 && e.length === 0 && /* @__PURE__ */ (0, Q.jsxs)(p, { children: [/* @__PURE__ */ (0, Q.jsx)(F, { children: /* @__PURE__ */ (0, Q.jsx)(Z, {}) }), "You haven't liked anything yet."] }),
		/* @__PURE__ */ (0, Q.jsxs)("ul", {
			className: "mx-auto flex max-w-[640px] flex-col",
			"data-testid": "profile-likes-list",
			children: [e.map((t, n) => /* @__PURE__ */ (0, Q.jsxs)("li", {
				"data-testid": "profile-like-item",
				"data-test-view-article": !0,
				children: [
					/* @__PURE__ */ (0, Q.jsx)(N, {
						actor: t.actor,
						allowDelete: t.object.authored,
						commentCount: t.object.replyCount,
						isLoading: i,
						layout: "feed",
						likeCount: t.object.likeCount,
						object: t.object,
						repostCount: t.object.repostCount,
						type: t.type,
						onClick: () => {
							t.object.type === "Note" ? d(`/notes/${encodeURIComponent(t.object.id)}`) : t.object.type === "Article" && d(`/reader/${encodeURIComponent(t.object.id)}`);
						}
					}),
					n < e.length - 1 && /* @__PURE__ */ (0, Q.jsx)(Ee, {}),
					n === u && /* @__PURE__ */ (0, Q.jsx)("div", {
						ref: c,
						className: "h-1"
					})
				]
			}, `likes-${t.id}`)), r && /* @__PURE__ */ (0, Q.jsx)("li", {
				className: "flex flex-col items-center justify-center gap-4 text-center",
				children: /* @__PURE__ */ (0, Q.jsx)(m, { size: "md" })
			})]
		}),
		/* @__PURE__ */ (0, Q.jsx)("div", {
			ref: l,
			className: "h-1"
		})
	] });
};
//#endregion
//#region src/views/profile/components/posts.tsx
r();
var Ne = ({ posts: e, fetchNextPage: t, hasNextPage: n, isFetchingNextPage: r, isLoading: i, noResultsMessage: s }) => {
	let c = o(null), l = o(null), u = o(null), d = Math.max(0, Math.floor(e.length * .75) - 1);
	a(() => (c.current && c.current.disconnect(), c.current = new IntersectionObserver((e) => {
		e[0].isIntersecting && n && !r && t();
	}), l.current && c.current.observe(l.current), u.current && c.current.observe(u.current), () => {
		c.current && c.current.disconnect();
	}), [
		n,
		r,
		t
	]);
	let f = z();
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
		n === !1 && e.length === 0 && /* @__PURE__ */ (0, Q.jsxs)(p, { children: [/* @__PURE__ */ (0, Q.jsx)(F, { children: /* @__PURE__ */ (0, Q.jsx)(ke, {}) }), s] }),
		/* @__PURE__ */ (0, Q.jsxs)("ul", {
			className: "mx-auto flex max-w-[640px] flex-col",
			"data-testid": "profile-posts-list",
			children: [e.map((t, n) => /* @__PURE__ */ (0, Q.jsxs)("li", {
				"data-testid": "profile-post-item",
				"data-test-view-article": !0,
				children: [
					/* @__PURE__ */ (0, Q.jsx)(N, {
						actor: t.actor,
						allowDelete: t.object.authored,
						commentCount: t.object.replyCount,
						isLoading: i,
						layout: "feed",
						likeCount: t.object.likeCount,
						object: t.object,
						repostCount: t.object.repostCount,
						type: t.type,
						onClick: () => {
							t.object.type === "Note" ? f(`/notes/${encodeURIComponent(t.object.id)}`) : t.object.type === "Article" && f(`/reader/${encodeURIComponent(t.object.id)}`);
						}
					}),
					n < e.length - 1 && /* @__PURE__ */ (0, Q.jsx)(Ee, {}),
					n === d && /* @__PURE__ */ (0, Q.jsx)("div", {
						ref: l,
						className: "h-1"
					})
				]
			}, `posts-${t.id}`)), r && /* @__PURE__ */ (0, Q.jsx)("li", {
				className: "flex flex-col items-center justify-center gap-4 text-center",
				children: /* @__PURE__ */ (0, Q.jsx)(m, { size: "md" })
			})]
		}),
		/* @__PURE__ */ (0, Q.jsx)("div", {
			ref: u,
			className: "h-1"
		})
	] });
};
//#endregion
//#region src/views/profile/components/unblock-dialog.tsx
r();
var Pe = ({ handle: e, isUserBlocked: n, isDomainBlocked: r, onUnblockUser: o, onUnblockDomain: s, trigger: c, onUnblockComplete: l, isOpen: f, onOpenChange: p }) => {
	let [m, h] = t(!1), [_, v] = t(() => {
		let e = n && r, t = n && !r, i = !n && r, a = "idle";
		return e ? a = "dual" : t ? a = "userOnly" : i && (a = "domainOnly"), {
			mode: a,
			userUnblocked: !1,
			domainUnblocked: !1
		};
	}), b = f !== void 0, E = b ? f : m, [D, O] = t(!1), k = i(() => {
		let e = n && r, t = n && !r, i = !n && r, a = "idle";
		e ? a = "dual" : t ? a = "userOnly" : i && (a = "domainOnly"), v((e) => ({
			...e,
			mode: a,
			userUnblocked: !1,
			domainUnblocked: !1
		}));
	}, [n, r]);
	a(() => {
		E && !D ? (k(), O(!0)) : E || O(!1);
	}, [
		E,
		D,
		k
	]);
	let A = () => {
		b ? p?.(!0) : h(!0);
	}, j = (e) => {
		e || (b ? p?.(!1) : h(!1));
	}, M = async () => {
		await o(), v((e) => ({
			...e,
			userUnblocked: !0
		})), (_.mode !== "dual" || _.domainUnblocked) && (j(!1), l?.()), u.success("User unblocked");
	}, ee = async () => {
		await s(), v((e) => ({
			...e,
			domainUnblocked: !0
		})), (_.mode !== "dual" || _.userUnblocked) && (j(!1), l?.()), u.success("Domain unblocked");
	}, te = e.split("@").filter(Boolean)[1];
	return /* @__PURE__ */ (0, Q.jsxs)(d, {
		open: E,
		onOpenChange: j,
		children: [c && /* @__PURE__ */ (0, Q.jsx)(T, {
			asChild: !0,
			onClick: A,
			children: c
		}), /* @__PURE__ */ (0, Q.jsx)(C, {
			className: `${_.mode === "dual" && "max-w-[600px]"}`,
			children: _.mode === "dual" ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsxs)(y, { children: [/* @__PURE__ */ (0, Q.jsx)(x, {
				className: "mb-1 flex flex-col gap-1",
				children: "Unblock"
			}), /* @__PURE__ */ (0, Q.jsx)(w, {
				className: "mt-4!",
				asChild: !0,
				children: /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "flex flex-col rounded-md border",
					children: [
						/* @__PURE__ */ (0, Q.jsxs)("div", {
							className: "flex justify-between gap-6 p-5",
							children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
								className: "flex flex-col gap-1",
								children: [/* @__PURE__ */ (0, Q.jsx)(U, { children: "Unblock user" }), /* @__PURE__ */ (0, Q.jsxs)("p", { children: [/* @__PURE__ */ (0, Q.jsx)("span", {
									className: "font-semibold text-black",
									children: e
								}), " will be able to follow you and engage with your public posts."] })]
							}), /* @__PURE__ */ (0, Q.jsxs)(R, {
								className: `gap-1 ${_.userUnblocked ? "pointer-events-none border-green bg-green text-white hover:bg-green hover:text-white" : "text-red hover:text-red-400"}`,
								variant: "outline",
								onClick: M,
								children: [/* @__PURE__ */ (0, Q.jsx)(Te, {}), _.userUnblocked ? "User unblocked" : "Unblock user"]
							})]
						}),
						/* @__PURE__ */ (0, Q.jsx)("div", { className: "border-t" }),
						/* @__PURE__ */ (0, Q.jsxs)("div", {
							className: "flex justify-between gap-6 p-5",
							children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
								className: "flex flex-col gap-1",
								children: [/* @__PURE__ */ (0, Q.jsx)(U, { children: "Unblock domain" }), /* @__PURE__ */ (0, Q.jsxs)("p", { children: [
									"Users from ",
									/* @__PURE__ */ (0, Q.jsx)("span", {
										className: "font-semibold text-black",
										children: te
									}),
									" will be able to follow you and engage with your public posts."
								] })]
							}), /* @__PURE__ */ (0, Q.jsxs)(R, {
								className: `gap-1 ${_.domainUnblocked ? "pointer-events-none border-green bg-green text-white hover:bg-green hover:text-white" : "text-red hover:text-red-400"}`,
								variant: "outline",
								onClick: ee,
								children: [/* @__PURE__ */ (0, Q.jsx)(K, {}), _.domainUnblocked ? "Domain unblocked" : "Unblock domain"]
							})]
						})
					]
				})
			})] }), /* @__PURE__ */ (0, Q.jsx)(g, { children: /* @__PURE__ */ (0, Q.jsx)(R, {
				onClick: () => j(!1),
				children: "OK"
			}) })] }) : (() => {
				let t = _.mode === "userOnly";
				return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsxs)(y, { children: [/* @__PURE__ */ (0, Q.jsx)(x, {
					className: "mb-1 flex flex-col gap-1",
					children: t ? "Unblock this user?" : "Unblock this domain?"
				}), /* @__PURE__ */ (0, Q.jsx)(w, { children: t ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)("span", {
					className: "font-semibold text-black",
					children: e
				}), " will be able to follow you and engage with your public posts."] }) : /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
					"Users from ",
					/* @__PURE__ */ (0, Q.jsx)("span", {
						className: "font-semibold text-black",
						children: te
					}),
					" will be able to follow you and engage with your public posts."
				] }) })] }), /* @__PURE__ */ (0, Q.jsxs)(g, { children: [/* @__PURE__ */ (0, Q.jsx)(S, { children: "Cancel" }), /* @__PURE__ */ (0, Q.jsx)(R, {
					onClick: t ? M : ee,
					children: "Unblock"
				})] })] });
			})()
		})]
	});
};
//#endregion
//#region src/views/profile/components/profile-menu.tsx
r();
var Fe = ({ account: e, children: n, onCopyHandle: r, onBlockAccount: i, onBlockDomain: a, disabled: o = !1, isBlocked: s = !1, isDomainBlocked: c = !1 }) => {
	let [l, u] = t(null), [p, m] = t(!1), h = (e) => {
		e.stopPropagation(), r();
	}, _ = (e) => {
		e.stopPropagation(), i();
	}, b = (e) => {
		e.stopPropagation(), a();
	}, T = e?.handle, E = T?.split("@").filter(Boolean)[1];
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsxs)(I, { children: [/* @__PURE__ */ (0, Q.jsx)(v, {
		disabled: o,
		asChild: !0,
		onClick: (e) => e.stopPropagation(),
		children: n
	}), /* @__PURE__ */ (0, Q.jsx)(D, {
		align: "end",
		className: "p-2",
		children: /* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "flex w-48 flex-col",
			children: [/* @__PURE__ */ (0, Q.jsx)(f, {
				asChild: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(R, {
					className: "justify-start",
					variant: "ghost",
					onClick: h,
					children: "Copy handle"
				})
			}), /* @__PURE__ */ (0, Q.jsx)(f, {
				asChild: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(R, {
					className: "justify-start text-red hover:bg-red/5 hover:text-red",
					variant: "ghost",
					onClick: (e) => {
						e.stopPropagation(), !s && !c && u("user"), m(!0);
					},
					children: s ? "Unblock user" : c ? "Unblock domain" : "Block user"
				})
			})]
		})
	})] }), s || c ? e && /* @__PURE__ */ (0, Q.jsx)(Pe, {
		handle: e.handle,
		isDomainBlocked: e.domainBlockedByMe,
		isOpen: p,
		isUserBlocked: e.blockedByMe,
		onOpenChange: m,
		onUnblockDomain: a,
		onUnblockUser: i
	}) : /* @__PURE__ */ (0, Q.jsx)(d, {
		open: p,
		onOpenChange: m,
		children: /* @__PURE__ */ (0, Q.jsxs)(C, {
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ (0, Q.jsxs)(y, { children: [/* @__PURE__ */ (0, Q.jsx)(x, {
				className: "mb-1 flex flex-col gap-1",
				children: l === "user" ? "Block this user?" : "Block this domain?"
			}), /* @__PURE__ */ (0, Q.jsx)(w, { children: l === "user" ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)("span", {
				className: "font-semibold text-black",
				children: T
			}), " will be able to see your public posts, but will no longer be able follow you or interact with your content on the social web."] }) : /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
				"All users from ",
				/* @__PURE__ */ (0, Q.jsx)("span", {
					className: "font-semibold text-black",
					children: E
				}),
				" will be able to see your public posts, but won't be able to follow you or interact with your content."
			] }) })] }), /* @__PURE__ */ (0, Q.jsxs)(g, { children: [
				l !== "domain" && /* @__PURE__ */ (0, Q.jsx)(R, {
					className: "mr-auto -ml-3 hover:bg-transparent hover:opacity-80",
					variant: "ghost",
					onClick: (e) => {
						e.stopPropagation(), u("domain");
					},
					children: "Block domain instead"
				}),
				/* @__PURE__ */ (0, Q.jsx)(S, {
					onClick: (e) => e.stopPropagation(),
					children: "Cancel"
				}),
				/* @__PURE__ */ (0, Q.jsx)(ne, {
					className: le({ variant: "destructive" }),
					onClick: l === "user" ? _ : b,
					children: "Block"
				})
			] })]
		})
	})] });
};
//#endregion
//#region src/views/profile/components/unblock-button.tsx
r();
var Ie = ({ account: e, onUnblock: n, onDomainUnblock: r, className: i = "" }) => {
	let [a, o] = t(!1), s = /* @__PURE__ */ (0, Q.jsx)(R, {
		className: `min-w-[90px] ${i}`,
		variant: "destructive",
		onMouseEnter: () => o(!0),
		onMouseLeave: () => o(!1),
		children: a ? "Unblock" : "Blocked"
	});
	return /* @__PURE__ */ (0, Q.jsx)(Pe, {
		handle: e.handle,
		isDomainBlocked: e.domainBlockedByMe,
		isUserBlocked: e.blockedByMe,
		trigger: s,
		onUnblockDomain: r,
		onUnblockUser: n
	});
};
//#endregion
//#region src/views/profile/components/profile-page.tsx
r();
var Le = () => {}, Re = ({ account: n, customFields: r, isLoadingAccount: i, postsTab: s, likesTab: d, followingTab: f, followersTab: m }) => {
	let g = c(), v = l(), y = z(), { canGoBack: x } = ce(), S = g.handle ? `/profile/${g.handle}` : "/profile", C = !g.handle, w = g.handle ? g.tab || "" : v.pathname.split("/").pop() || "", T = e(() => C ? [
		"likes",
		"following",
		"followers"
	] : ["following", "followers"], [C]), D = T.includes(w) ? w : "posts", A = pe("index"), M = fe("index"), ne = he("index"), N = ue("index"), re = W("index", "me"), { data: ie } = g.handle ? re : { data: void 0 }, P = g.handle === ie?.handle || !g.handle, I = n?.blockedByMe, L = n?.domainBlockedByMe, [le, V] = t(!1), [de, H] = t(!1), G = o(null);
	a(() => () => {
		G.current && window.clearTimeout(G.current);
	}, []);
	let K = () => {
		I ? M.mutate(n) : (A.mutate(n), u.success("User blocked")), V(!1);
	}, q = () => {
		L ? N.mutate({
			url: n.apId,
			handle: n.handle
		}) : (ne.mutate({
			url: n.apId,
			handle: n.handle
		}), u.success("Domain blocked")), V(!1);
	}, Te = async () => {
		if (!n?.handle || !navigator?.clipboard?.writeText) {
			u.error("Unable to copy handle");
			return;
		}
		try {
			await navigator.clipboard.writeText(n.handle), H(!0), u.success("Handle copied"), G.current && window.clearTimeout(G.current), G.current = window.setTimeout(() => H(!1), 2e3);
		} catch {
			u.error("Failed to copy handle"), H(!1);
		}
	}, [Z, Ee] = t(!1), [ke, je] = t(!1), Me = () => {
		Ee(!Z);
	}, $ = o(null), [Ne, Pe] = t(!1);
	a(() => {
		$.current && Pe($.current.scrollHeight > 160);
	}, [
		Z,
		n?.bio,
		r,
		i
	]), a(() => {
		w && (T.includes(w) || y(S, { replace: !0 }));
	}, [
		T,
		S,
		y,
		w
	]);
	let Re = (e) => e === "posts" ? S : `${S}/${e}`, ze = (e) => {
		e !== D && y(Re(e), { replace: !0 });
	};
	return !i && !n ? /* @__PURE__ */ (0, Q.jsx)(j, { children: /* @__PURE__ */ (0, Q.jsx)("div", {
		className: "mx-auto mt-4 flex w-full max-w-[620px] flex-col items-center [&_svg]:translate-x-px",
		children: /* @__PURE__ */ (0, Q.jsxs)(te, { children: [/* @__PURE__ */ (0, Q.jsx)(ae, { children: /* @__PURE__ */ (0, Q.jsx)(Ae, {}) }), /* @__PURE__ */ (0, Q.jsx)("div", { children: "Profile not found" })] })
	}) }) : /* @__PURE__ */ (0, Q.jsx)(j, { children: /* @__PURE__ */ (0, Q.jsx)("div", {
		className: "z-0 mx-[max(-4vw,-24px)] -mt-9 flex flex-col items-center pb-16",
		children: /* @__PURE__ */ (0, Q.jsx)("div", {
			className: "mx-auto w-full",
			children: /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [n?.bannerImageUrl ? /* @__PURE__ */ (0, Q.jsx)("div", {
				className: "h-[15vw] min-h-[200px] w-full overflow-hidden bg-gradient-to-tr from-gray-200 to-gray-100",
				children: /* @__PURE__ */ (0, Q.jsx)("img", {
					alt: n?.name,
					className: "size-full object-cover",
					referrerPolicy: "no-referrer",
					src: n?.bannerImageUrl
				})
			}) : /* @__PURE__ */ (0, Q.jsx)("div", { className: "h-[max(8vw,132px)] w-full overflow-hidden bg-gradient-to-tr from-white to-white dark:from-black dark:to-black" }), /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: `mx-auto max-w-[620px] px-6 ${!n?.bannerImageUrl && !x ? "-mt-8" : "-mt-12"}`,
				children: [
					/* @__PURE__ */ (0, Q.jsxs)("div", {
						className: "flex items-end justify-between",
						children: [
							/* @__PURE__ */ (0, Q.jsx)("div", {
								className: "-ml-2 rounded-full bg-white p-1 dark:bg-background",
								children: i ? /* @__PURE__ */ (0, Q.jsx)(J, { className: "size-[92px] rounded-full" }) : /* @__PURE__ */ (0, Q.jsx)(ge, {
									author: {
										icon: { url: n?.avatarUrl },
										name: n?.name,
										handle: n?.handle
									},
									size: "lg"
								})
							}),
							!P && !i && /* @__PURE__ */ (0, Q.jsxs)("div", {
								className: "flex gap-2",
								children: [I || L ? /* @__PURE__ */ (0, Q.jsx)(Ie, {
									account: n,
									onDomainUnblock: q,
									onUnblock: K
								}) : /* @__PURE__ */ (0, Q.jsx)(oe, {
									following: n?.followedByMe,
									handle: n?.handle,
									type: "primary",
									onFollow: Le,
									onUnfollow: Le
								}), /* @__PURE__ */ (0, Q.jsx)(Fe, {
									account: n,
									isBlocked: I,
									isDomainBlocked: L,
									onBlockAccount: K,
									onBlockDomain: q,
									onCopyHandle: Te,
									children: /* @__PURE__ */ (0, Q.jsx)(R, {
										"aria-label": "Open profile menu",
										variant: "outline",
										children: /* @__PURE__ */ (0, Q.jsx)(ee, {})
									})
								})]
							}),
							P && !i && /* @__PURE__ */ (0, Q.jsxs)(E, {
								open: ke,
								onOpenChange: je,
								children: [/* @__PURE__ */ (0, Q.jsx)(O, { children: /* @__PURE__ */ (0, Q.jsx)(Oe, { children: /* @__PURE__ */ (0, Q.jsx)(R, {
									variant: "secondary",
									children: "Edit profile"
								}) }) }), /* @__PURE__ */ (0, Q.jsxs)(_, {
									className: "w-full max-w-[520px]",
									onOpenAutoFocus: (e) => e.preventDefault(),
									children: [/* @__PURE__ */ (0, Q.jsx)(b, { children: /* @__PURE__ */ (0, Q.jsx)(k, { children: "Profile settings" }) }), n && /* @__PURE__ */ (0, Q.jsx)(De, {
										account: n,
										setIsEditingProfile: je
									})]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, Q.jsx)(me, {
						className: "break-anywhere mt-4 truncate",
						children: i ? /* @__PURE__ */ (0, Q.jsx)(J, { className: "w-32" }) : n?.name
					}),
					/* @__PURE__ */ (0, Q.jsxs)("div", {
						className: "mb-4 flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, Q.jsx)("a", {
								className: "inline-flex max-w-full truncate text-[1.5rem] text-gray-800 hover:text-gray-900 dark:text-gray-600 dark:hover:text-gray-500",
								href: n?.url,
								rel: "noopener noreferrer",
								target: "_blank",
								children: /* @__PURE__ */ (0, Q.jsx)("span", {
									className: "truncate",
									children: i ? /* @__PURE__ */ (0, Q.jsx)(J, { className: "w-full max-w-56" }) : n?.handle
								})
							}),
							!i && /* @__PURE__ */ (0, Q.jsx)(R, {
								className: "-ml-1.5 size-6 p-0 text-gray-800 hover:text-gray-900 dark:text-gray-700 dark:hover:text-gray-600",
								title: "Copy handle",
								variant: "link",
								onClick: Te,
								children: de ? /* @__PURE__ */ (0, Q.jsx)(ye, { size: 16 }) : /* @__PURE__ */ (0, Q.jsx)(we, { size: 16 })
							}),
							n?.followsMe && !i && /* @__PURE__ */ (0, Q.jsx)(h, {
								className: "mt-px whitespace-nowrap",
								variant: "secondary",
								children: "Follows you"
							})
						]
					}),
					(n?.bio || r?.length > 0) && /* @__PURE__ */ (0, Q.jsxs)("div", {
						ref: $,
						className: `ap-profile-content break-anywhere relative text-[1.5rem] [&>p]:mb-3 ${Z ? "max-h-none pb-7" : "max-h-[160px] overflow-hidden"} relative`,
						children: [
							i ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(J, {}), /* @__PURE__ */ (0, Q.jsx)(J, { className: "w-full max-w-48" })] }) : /* @__PURE__ */ (0, Q.jsx)("div", { dangerouslySetInnerHTML: { __html: ve(_e(be(n?.bio ?? "", ["a", "br"]))) } }),
							r?.map((e) => /* @__PURE__ */ (0, Q.jsxs)("span", {
								className: "mt-3 line-clamp-1 flex flex-col text-[1.5rem]",
								children: [/* @__PURE__ */ (0, Q.jsx)("span", {
									className: "text-xs font-semibold",
									children: e.name
								}), /* @__PURE__ */ (0, Q.jsx)("span", {
									dangerouslySetInnerHTML: { __html: ve(e.value) },
									className: "ap-profile-content truncate"
								})]
							}, e.name)),
							!Z && Ne && /* @__PURE__ */ (0, Q.jsx)("div", { className: "absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white via-white/100 via-60% to-transparent dark:from-black dark:via-black/100" }),
							Ne && /* @__PURE__ */ (0, Q.jsx)(R, {
								className: "absolute bottom-0 h-auto p-0 text-md",
								variant: "link",
								onClick: Me,
								children: Z ? "Show less" : "Show all"
							})
						]
					}),
					/* @__PURE__ */ (0, Q.jsxs)(Ce, {
						className: "mt-5",
						value: D,
						variant: "underline",
						onValueChange: (e) => ze(e),
						children: [
							/* @__PURE__ */ (0, Q.jsxs)(Se, { children: [
								/* @__PURE__ */ (0, Q.jsx)(Y, {
									value: "posts",
									children: "Posts"
								}),
								C && /* @__PURE__ */ (0, Q.jsxs)(Y, {
									value: "likes",
									children: ["Likes", /* @__PURE__ */ (0, Q.jsx)(xe, { children: B(n?.likedCount || 0) })]
								}),
								/* @__PURE__ */ (0, Q.jsxs)(Y, {
									value: "following",
									children: ["Following", /* @__PURE__ */ (0, Q.jsx)(xe, { children: B(n?.followingCount || 0) })]
								}),
								/* @__PURE__ */ (0, Q.jsxs)(Y, {
									value: "followers",
									children: ["Followers", /* @__PURE__ */ (0, Q.jsx)(xe, { children: B(n?.followerCount || 0) })]
								})
							] }),
							/* @__PURE__ */ (0, Q.jsx)(X, {
								value: "posts",
								children: (I || L) && !le ? /* @__PURE__ */ (0, Q.jsxs)(p, { children: [/* @__PURE__ */ (0, Q.jsx)(F, { children: /* @__PURE__ */ (0, Q.jsx)(se, {}) }), /* @__PURE__ */ (0, Q.jsxs)("div", {
									className: "mt-2 flex flex-col items-center gap-0.5",
									children: [
										/* @__PURE__ */ (0, Q.jsxs)(U, { children: [n.name, " is blocked"] }),
										/* @__PURE__ */ (0, Q.jsx)("p", { children: "You can view the posts, but it won't unblock the user." }),
										/* @__PURE__ */ (0, Q.jsx)(R, {
											className: "mt-4",
											variant: "secondary",
											onClick: () => V(!0),
											children: "View posts"
										})
									]
								})] }) : s
							}),
							C && /* @__PURE__ */ (0, Q.jsx)(X, {
								value: "likes",
								children: d
							}),
							/* @__PURE__ */ (0, Q.jsx)(X, {
								value: "following",
								children: f
							}),
							/* @__PURE__ */ (0, Q.jsx)(X, {
								value: "followers",
								children: m
							})
						]
					}, g.handle || n?.handle || "current-user")
				]
			})] })
		})
	}) });
};
//#endregion
//#region src/views/profile/profile.tsx
r();
var ze = ({ handle: e }) => {
	let { postsByAccountQuery: t } = H(e || "me", { enabled: !0 }), { data: n, fetchNextPage: r, hasNextPage: i, isFetchingNextPage: a, isLoading: o } = t, s = n?.pages.flatMap((e) => e.posts) ?? Array.from({ length: 5 }, (e, t) => ({
		id: `placeholder-${t}`,
		object: {}
	}));
	return /* @__PURE__ */ (0, Q.jsx)(Ne, {
		fetchNextPage: r,
		hasNextPage: i,
		isFetchingNextPage: a,
		isLoading: o,
		noResultsMessage: e ? `${e} hasn't posted anything yet` : "You haven't posted anything yet.",
		posts: s
	});
}, Be = () => {
	let { postsLikedByAccountQuery: e } = V({ enabled: !0 }), { data: t, fetchNextPage: n, hasNextPage: r, isFetchingNextPage: i, isLoading: a } = e;
	return /* @__PURE__ */ (0, Q.jsx)($, {
		fetchNextPage: n,
		hasNextPage: r,
		isFetchingNextPage: i,
		isLoading: a,
		posts: t?.pages.flatMap((e) => e.posts) ?? Array.from({ length: 5 }, (e, t) => ({
			id: `placeholder-${t}`,
			object: {}
		}))
	});
}, Ve = ({ handle: e }) => {
	let { data: t, fetchNextPage: n, hasNextPage: r, isFetchingNextPage: i, isLoading: a } = G(e === "" ? "me" : e, "following");
	return /* @__PURE__ */ (0, Q.jsx)(Me, {
		actors: t?.pages.flatMap((e) => "following" in e ? e.following : "accounts" in e ? e.accounts.map((e) => ({
			actor: {
				id: e.id,
				name: e.name,
				handle: e.handle,
				icon: { url: e.avatarUrl }
			},
			isFollowing: e.isFollowing,
			blockedByMe: e.blockedByMe,
			domainBlockedByMe: e.domainBlockedByMe
		})) : []) ?? [],
		fetchNextPage: n,
		hasNextPage: r,
		isFetchingNextPage: i,
		isLoading: a,
		noResultsMessage: `${e || "You"} have no following`
	});
}, He = ({ handle: e }) => {
	let { data: t, fetchNextPage: n, hasNextPage: r, isFetchingNextPage: i, isLoading: a } = G(e === "" ? "me" : e, "followers");
	return /* @__PURE__ */ (0, Q.jsx)(Me, {
		actors: t?.pages.flatMap((e) => "followers" in e ? e.followers : "accounts" in e ? e.accounts.map((e) => ({
			actor: {
				id: e.id,
				name: e.name,
				handle: e.handle,
				icon: { url: e.avatarUrl }
			},
			isFollowing: e.isFollowing
		})) : []) ?? [],
		fetchNextPage: n,
		hasNextPage: r,
		isFetchingNextPage: i,
		isLoading: a,
		noResultsMessage: `${e || "You"} have no followers yet`
	});
}, Ue = () => {
	let e = c(), { data: t, isLoading: n, error: r, refetch: i } = W("index", e.handle || "me");
	if (a(() => {
		i();
	}, [e.handle, i]), r && de(r) && r.statusCode !== 404) return /* @__PURE__ */ (0, Q.jsx)(re, {
		errorCode: r.code,
		statusCode: r.statusCode
	});
	let o = Object.keys(t?.customFields || {}).map((e) => ({
		name: e,
		value: t.customFields[e]
	})) || [], s = /* @__PURE__ */ (0, Q.jsx)(ze, { handle: e.handle || "" }), l = /* @__PURE__ */ (0, Q.jsx)(Be, {}), u = /* @__PURE__ */ (0, Q.jsx)(Ve, { handle: e.handle || "" });
	return /* @__PURE__ */ (0, Q.jsx)(Re, {
		account: t,
		customFields: o,
		followersTab: /* @__PURE__ */ (0, Q.jsx)(He, { handle: e.handle || "" }),
		followingTab: u,
		isLoadingAccount: n,
		likesTab: l,
		postsTab: s
	});
};
//#endregion
export { Ue as default };

//# sourceMappingURL=profile-BFtbnIjz.js.map