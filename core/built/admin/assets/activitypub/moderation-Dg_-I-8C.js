import { T as e, d as t } from "./_react-D4KM8XEu.js";
import { S as n } from "./chunk-KS7C4IRE-D4HEcEwi.js";
import { o as r } from "./users-BLeiOTHc.js";
import { C as i, _ as a, a as o, b as s, s as c, w as l, yt as u } from "./routes-Dh3xXfce.js";
import { r as d, t as f } from "./use-navigate-with-base-path-CAwXTmqH.js";
import { F as p, I as m, c as h, l as g, q as _, s as v, u as y } from "./use-activity-pub-queries-VzbN99u_.js";
import { c as b, u as x } from "./content-formatters-BpQARh28.js";
import { i as S, n as C, r as w, t as T } from "./tabs-ogqwoBlb.js";
import "./layout-IdVq3lRy.js";
//#region src/views/preferences/components/moderation.tsx
t();
var E = n(), D = () => {
	let { data: t, isLoading: n } = g("index"), { data: D, isLoading: O } = y("index"), k = n ? [
		,
		,
		,
		,
		,
	].fill({
		apId: "",
		name: "",
		handle: "",
		avatarUrl: ""
	}) : t?.pages.flatMap((e) => e.accounts) ?? [], A = O ? [
		,
		,
		,
		,
		,
	].fill({
		apId: "",
		name: ""
	}) : D?.pages.flatMap((e) => e.domains) ?? [], j = h("index"), M = m("index"), [N, P] = e(/* @__PURE__ */ new Set()), F = v("index"), I = p("index"), [L, R] = e(/* @__PURE__ */ new Set()), [z, B] = e(null), V = f(), H = (e) => {
		P((t) => {
			let n = /* @__PURE__ */ new Set([...t]);
			return n.add(e.apId), n;
		}), M.mutate(e), r.success("User unblocked");
	}, U = (e) => {
		P((t) => {
			let n = /* @__PURE__ */ new Set([...t]);
			return n.delete(e.apId), n;
		}), j.mutate(e), r.success("User blocked");
	}, W = (e) => {
		R((t) => {
			let n = /* @__PURE__ */ new Set([...t]);
			return n.add(e.url), n;
		}), I.mutate({ url: e.url }), r.success("Domain unblocked");
	}, G = (e) => {
		R((t) => {
			let n = /* @__PURE__ */ new Set([...t]);
			return n.delete(e.url), n;
		}), F.mutate({ url: e.url }), r.success("Domain blocked");
	};
	return /* @__PURE__ */ (0, E.jsx)(o, { children: /* @__PURE__ */ (0, E.jsxs)("div", {
		className: "mx-auto max-w-[620px] py-[min(4vh,48px)]",
		children: [/* @__PURE__ */ (0, E.jsx)("div", {
			className: "flex items-center justify-between gap-8",
			children: /* @__PURE__ */ (0, E.jsx)(_, { children: "Moderation" })
		}), /* @__PURE__ */ (0, E.jsx)("div", {
			className: "mt-6",
			children: /* @__PURE__ */ (0, E.jsxs)(T, {
				defaultValue: "blocked_users",
				variant: "underline",
				children: [
					/* @__PURE__ */ (0, E.jsxs)(w, { children: [/* @__PURE__ */ (0, E.jsx)(S, {
						value: "blocked_users",
						children: "Blocked users"
					}), /* @__PURE__ */ (0, E.jsx)(S, {
						value: "blocked_domains",
						children: "Blocked domains"
					})] }),
					/* @__PURE__ */ (0, E.jsx)(C, {
						className: "mt-2",
						value: "blocked_users",
						children: !n && k.length === 0 ? /* @__PURE__ */ (0, E.jsxs)(i, { children: [/* @__PURE__ */ (0, E.jsx)(l, { children: /* @__PURE__ */ (0, E.jsx)(u, {}) }), /* @__PURE__ */ (0, E.jsx)("div", {
							className: "mt-2 flex max-w-[400px] flex-col items-center gap-1 text-center",
							children: /* @__PURE__ */ (0, E.jsx)("p", { children: "When you block someone, they won't be able to follow you or interact with your content on the social web." })
						})] }) : k.map((e, t) => /* @__PURE__ */ (0, E.jsx)(s, {
							actor: e,
							isCurrentUser: !0,
							children: /* @__PURE__ */ (0, E.jsx)("div", { children: /* @__PURE__ */ (0, E.jsxs)(c, {
								onClick: n ? void 0 : () => a(e.handle, V),
								children: [
									/* @__PURE__ */ (0, E.jsx)(b, { author: {
										icon: { url: e.avatarUrl },
										name: e.name,
										handle: e.handle
									} }),
									/* @__PURE__ */ (0, E.jsxs)("div", {
										className: "flex min-w-0  flex-col",
										children: [/* @__PURE__ */ (0, E.jsx)("span", {
											className: "block truncate font-semibold text-black dark:text-white",
											children: n ? /* @__PURE__ */ (0, E.jsx)(x, { className: "w-24" }) : e.name
										}), /* @__PURE__ */ (0, E.jsx)("span", {
											className: "block truncate text-sm text-gray-600",
											children: n ? /* @__PURE__ */ (0, E.jsx)(x, { className: "w-40" }) : e.handle
										})]
									}),
									N.has(e.apId) ? /* @__PURE__ */ (0, E.jsx)(d, {
										className: "ml-auto min-w-[90px] text-red hover:bg-red/5! hover:text-red-400",
										variant: "outline",
										onClick: (t) => {
											t.stopPropagation(), U(e);
										},
										children: "Block"
									}) : n ? /* @__PURE__ */ (0, E.jsx)("div", {
										className: "ml-auto w-16",
										children: /* @__PURE__ */ (0, E.jsx)(x, {})
									}) : /* @__PURE__ */ (0, E.jsx)(d, {
										className: "ml-auto min-w-[90px]",
										variant: "destructive",
										onClick: (t) => {
											t.stopPropagation(), H(e);
										},
										onMouseEnter: () => B(e.apId),
										onMouseLeave: () => B(null),
										children: z === e.apId ? "Unblock" : "Blocked"
									})
								]
							}) })
						}, e.apId ? e.apId : `loading-${t}`))
					}),
					/* @__PURE__ */ (0, E.jsx)(C, {
						className: "mt-[11px]",
						value: "blocked_domains",
						children: !O && A.length === 0 ? /* @__PURE__ */ (0, E.jsxs)(i, { children: [/* @__PURE__ */ (0, E.jsx)(l, { children: /* @__PURE__ */ (0, E.jsx)(u, {}) }), /* @__PURE__ */ (0, E.jsx)("div", {
							className: "mt-2 flex max-w-[400px] flex-col items-center gap-1 text-center",
							children: /* @__PURE__ */ (0, E.jsx)("p", { children: "When you block a domain, all users from that domain won't be able to follow you or interact with your content." })
						})] }) : A.map((e, t) => /* @__PURE__ */ (0, E.jsxs)(c, { children: [/* @__PURE__ */ (0, E.jsx)("div", {
							className: "flex min-w-0 flex-col",
							children: /* @__PURE__ */ (0, E.jsx)("span", {
								className: "block truncate font-semibold text-black dark:text-white",
								children: O ? /* @__PURE__ */ (0, E.jsx)(x, { className: "w-48" }) : new URL(e.url).hostname
							})
						}), L.has(e.url) ? /* @__PURE__ */ (0, E.jsx)(d, {
							className: "ml-auto min-w-[90px] text-red hover:bg-red/5! hover:text-red-400",
							variant: "outline",
							onClick: () => G(e),
							children: "Block"
						}) : O ? /* @__PURE__ */ (0, E.jsx)("div", {
							className: "ml-auto w-16",
							children: /* @__PURE__ */ (0, E.jsx)(x, {})
						}) : /* @__PURE__ */ (0, E.jsx)(d, {
							className: "ml-auto min-w-[90px]",
							variant: "destructive",
							onClick: () => W(e),
							onMouseEnter: () => B(e.url),
							onMouseLeave: () => B(null),
							children: z === e.url ? "Unblock" : "Blocked"
						})] }, e.url ? e.url : `loading-${t}`))
					})
				]
			})
		})]
	}) });
};
//#endregion
export { D as default };

//# sourceMappingURL=moderation-Dg_-I-8C.js.map