import { T as e, d as t, w as n } from "./_react-D4KM8XEu.js";
import { S as r } from "./chunk-KS7C4IRE-D4HEcEwi.js";
import { D as i, c as a } from "./routes-Dh3xXfce.js";
import { g as o, r as s } from "./use-navigate-with-base-path-CAwXTmqH.js";
import { O as c, U as l, V as u } from "./use-activity-pub-queries-VzbN99u_.js";
import { c as d, l as f } from "./content-formatters-BpQARh28.js";
var p = o("trash", [
	["path", {
		d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
		key: "miytrc"
	}],
	["path", {
		d: "M3 6h18",
		key: "d0wm0j"
	}],
	["path", {
		d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
		key: "e791ji"
	}]
]);
//#endregion
//#region src/components/global/ap-reply-box.tsx
t();
var m = r(), h = ({ object: t, onReply: n, onReplyError: r, className: i, ...o }) => {
	let { data: s } = u("index"), [c, l] = e(!1);
	if (!s) return null;
	let p = t.attributedTo, h = "Reply...";
	return p?.preferredUsername && p?.id && (h = `Reply to ${f(p)}...`), /* @__PURE__ */ (0, m.jsxs)(m.Fragment, { children: [/* @__PURE__ */ (0, m.jsxs)("div", {
		className: `flex w-full cursor-pointer gap-x-3 py-6 ${i || ""}`,
		onClick: () => l(!0),
		...o,
		children: [/* @__PURE__ */ (0, m.jsx)(d, { author: s }), /* @__PURE__ */ (0, m.jsx)("div", {
			className: "flex w-full items-center",
			children: /* @__PURE__ */ (0, m.jsx)("div", {
				className: "w-full text-[1.5rem] text-gray-500 transition-colors dark:text-gray-700",
				children: h
			})
		})]
	}), c && /* @__PURE__ */ (0, m.jsx)(a, {
		open: c,
		replyTo: {
			object: t,
			actor: t.attributedTo
		},
		onOpenChange: (e) => {
			l(e);
		},
		onReply: () => {
			n?.(), l(!1);
		},
		onReplyError: () => {
			r?.();
		}
	})] });
};
//#endregion
//#region src/components/feed/deleted-feed-item.tsx
t();
var g = ({ last: e }) => /* @__PURE__ */ (0, m.jsxs)("div", {
	className: "relative mt-[-5px] py-5",
	children: [/* @__PURE__ */ (0, m.jsxs)("div", {
		className: "flex h-12 grow items-center gap-2 rounded-lg border border-gray-200 p-2 px-[10px] text-gray-600",
		children: [/* @__PURE__ */ (0, m.jsx)(p, {
			size: 18,
			strokeWidth: 1.25
		}), "This post has been deleted"]
	}), !e && /* @__PURE__ */ (0, m.jsx)("div", { className: "absolute top-[70px] bottom-0 left-[18px] z-0 mb-[-13px] w-[2px] rounded-sm bg-gray-200" })]
});
//#endregion
//#region src/components/global/show-replies-button.tsx
t();
var _ = ({ count: e, onClick: t, variant: r = "default", preserveScroll: a = !0, loading: o = !1 }) => {
	let c = n(null), l = () => {
		if (e && e > 0) return `Show ${e} more ${e === 1 ? "reply" : "replies"}`;
		switch (r) {
			case "expand": return "Show replies";
			case "loadMore": return "Show more replies";
			default: return "Show replies";
		}
	}, u = () => {
		if (a) {
			let e = document.querySelector("[data-scrollable-container]"), n = e ? e.scrollTop : window.scrollY;
			t(), setTimeout(() => {
				e ? e.scrollTop = n : window.scrollTo(0, n);
			}, 0);
		} else t();
	};
	return /* @__PURE__ */ (0, m.jsxs)("div", {
		ref: c,
		className: "mt-[-7px] flex items-center pb-3",
		children: [/* @__PURE__ */ (0, m.jsxs)("div", {
			className: "flex w-10 flex-col items-center justify-center gap-1",
			children: [
				/* @__PURE__ */ (0, m.jsx)("div", { className: "size-0.5 rounded-sm bg-gray-300" }),
				/* @__PURE__ */ (0, m.jsx)("div", { className: "size-0.5 rounded-sm bg-gray-300" }),
				/* @__PURE__ */ (0, m.jsx)("div", { className: "size-0.5 rounded-sm bg-gray-300" })
			]
		}), /* @__PURE__ */ (0, m.jsx)(s, {
			className: "text-sm font-medium text-blue-600 hover:text-blue-800",
			variant: "ghost",
			onClick: (e) => {
				e.preventDefault(), e.stopPropagation(), e.target.blur(), u();
			},
			children: o ? /* @__PURE__ */ (0, m.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, m.jsx)(i, { size: "sm" }), /* @__PURE__ */ (0, m.jsx)("span", { children: "Loading..." })]
			}) : l()
		})]
	});
};
//#endregion
//#region src/hooks/use-reply-chain-data.ts
function v(e, t = {}) {
	let { includeAncestors: n = !1 } = t, { data: r, isLoading: i, loadMoreChildren: a, loadMoreChildReplies: o, hasMoreChildren: s, hasMoreChildReplies: u } = c("index", e);
	return {
		threadParents: n && r?.ancestors?.chain?.map(l) || [],
		post: r?.post ? l(r.post) : void 0,
		processedReplies: (r?.children ?? []).map((e) => ({
			mainReply: l(e.post),
			chain: e.chain ? e.chain.map(l) : []
		})),
		isLoading: i,
		loadMoreChildren: a,
		loadMoreChildReplies: o,
		hasMoreChildren: s,
		hasMoreChildReplies: u
	};
}
//#endregion
export { h as i, _ as n, g as r, v as t };

//# sourceMappingURL=use-reply-chain-data-CxonteFD.js.map