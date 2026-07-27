import { T as e, d as t } from "./_react-D4KM8XEu.js";
import { S as n, t as r } from "./chunk-KS7C4IRE-D4HEcEwi.js";
import { G as i, J as a, U as o, X as s, Y as c, _t as l, ht as u } from "./routes-Dh3xXfce.js";
import { n as d, r as f, t as p, y as m } from "./use-navigate-with-base-path-CAwXTmqH.js";
import { Y as h } from "./use-activity-pub-queries-VzbN99u_.js";
import { t as g } from "./edit-profile-CXdwNmVG.js";
//#region src/views/preferences/components/settings.tsx
t();
var _ = n(), v = ({ account: t, className: n = "" }) => {
	let [r, d] = e(!1), m = p();
	return /* @__PURE__ */ (0, _.jsxs)("div", {
		className: `flex flex-col ${n}`,
		children: [
			/* @__PURE__ */ (0, _.jsx)(w, {}),
			/* @__PURE__ */ (0, _.jsxs)(C, { children: [/* @__PURE__ */ (0, _.jsxs)(x, { children: [/* @__PURE__ */ (0, _.jsx)(y, { children: "Profile" }), /* @__PURE__ */ (0, _.jsx)(b, { children: "Edit your profile information and account details" })] }), /* @__PURE__ */ (0, _.jsxs)(o, {
				open: r,
				onOpenChange: d,
				children: [/* @__PURE__ */ (0, _.jsx)(s, { children: /* @__PURE__ */ (0, _.jsx)(S, { children: /* @__PURE__ */ (0, _.jsx)(f, {
					variant: "secondary",
					children: "Edit"
				}) }) }), /* @__PURE__ */ (0, _.jsxs)(i, {
					onOpenAutoFocus: (e) => e.preventDefault(),
					children: [/* @__PURE__ */ (0, _.jsx)(a, { children: /* @__PURE__ */ (0, _.jsx)(c, { children: "Profile settings" }) }), t && /* @__PURE__ */ (0, _.jsx)(g, {
						account: t,
						setIsEditingProfile: d
					})]
				})]
			})] }),
			/* @__PURE__ */ (0, _.jsxs)(C, {
				to: "/preferences/handle",
				withHover: !0,
				children: [/* @__PURE__ */ (0, _.jsxs)(x, { children: [/* @__PURE__ */ (0, _.jsx)(y, { children: "Social web handle" }), /* @__PURE__ */ (0, _.jsx)(b, { children: "Set your account username and domain" })] }), /* @__PURE__ */ (0, _.jsx)(S, {
					className: "flex items-center gap-2",
					children: /* @__PURE__ */ (0, _.jsx)(l, { size: 20 })
				})]
			}),
			/* @__PURE__ */ (0, _.jsxs)(C, {
				withHover: !0,
				onClick: () => m("/preferences/moderation"),
				children: [/* @__PURE__ */ (0, _.jsxs)(x, { children: [/* @__PURE__ */ (0, _.jsx)(y, { children: "Moderation" }), /* @__PURE__ */ (0, _.jsx)(b, { children: "Manage blocked users and domains" })] }), /* @__PURE__ */ (0, _.jsx)(S, {
					className: "flex items-center gap-2",
					children: /* @__PURE__ */ (0, _.jsx)(l, { size: 20 })
				})]
			}),
			/* @__PURE__ */ (0, _.jsxs)(C, {
				withHover: !0,
				onClick: () => m("/preferences/bluesky-sharing"),
				children: [/* @__PURE__ */ (0, _.jsxs)(x, { children: [/* @__PURE__ */ (0, _.jsx)(y, { children: "Bluesky sharing" }), /* @__PURE__ */ (0, _.jsx)(b, { children: "Share content directly on Bluesky" })] }), /* @__PURE__ */ (0, _.jsxs)(S, {
					className: "flex items-center gap-2",
					children: [t?.blueskyEnabled ? /* @__PURE__ */ (0, _.jsx)("span", {
						className: "font-medium text-black",
						children: "On"
					}) : /* @__PURE__ */ (0, _.jsx)("span", { children: "Off" }), /* @__PURE__ */ (0, _.jsx)(l, { size: 20 })]
				})]
			}),
			/* @__PURE__ */ (0, _.jsxs)(C, {
				to: "/preferences/move",
				withHover: !0,
				children: [/* @__PURE__ */ (0, _.jsxs)(x, { children: [/* @__PURE__ */ (0, _.jsx)(y, { children: "Account migration" }), /* @__PURE__ */ (0, _.jsx)(b, { children: "Move another social web account to this one" })] }), /* @__PURE__ */ (0, _.jsx)(S, {
					className: "flex items-center gap-2",
					children: /* @__PURE__ */ (0, _.jsx)(l, { size: 20 })
				})]
			}),
			/* @__PURE__ */ (0, _.jsx)(w, {}),
			/* @__PURE__ */ (0, _.jsxs)(C, {
				href: "https://ghost.org/help/social-web/",
				withHover: !0,
				children: [/* @__PURE__ */ (0, _.jsxs)(x, { children: [/* @__PURE__ */ (0, _.jsx)(y, { children: "Help" }), /* @__PURE__ */ (0, _.jsx)(b, { children: "Social web guides and support resources" })] }), /* @__PURE__ */ (0, _.jsx)(S, { children: /* @__PURE__ */ (0, _.jsx)(u, { size: 18 }) })]
			})
		]
	});
}, y = h, b = ({ children: e, className: t = "" }) => /* @__PURE__ */ (0, _.jsx)("span", {
	className: `text-sm text-gray-700 ${t}`,
	children: e
}), x = ({ children: e, className: t = "" }) => /* @__PURE__ */ (0, _.jsx)("div", {
	className: `relative flex flex-col gap-0.5 ${t}`,
	children: e
}), S = ({ children: e, className: t = "" }) => /* @__PURE__ */ (0, _.jsx)("div", {
	className: `relative text-gray-500 ${t}`,
	children: e
}), C = ({ children: e, className: t = "", withHover: n = !1, to: i, href: a, onClick: o }) => {
	let s = d(), c = m("flex items-center justify-between py-3 gap-4", n ? "relative cursor-pointer before:absolute before:inset-x-[-16px] before:inset-y-[-1px] before:rounded-md before:bg-gray-50 before:opacity-0 before:transition-opacity before:will-change-[opacity] hover:z-10 hover:cursor-pointer hover:border-b-transparent hover:before:opacity-100 dark:before:bg-gray-950" : "", t), l = i && i.startsWith("/") ? `${s}${i}` : i;
	return l ? /* @__PURE__ */ (0, _.jsx)(r, {
		className: c,
		to: l,
		children: e
	}) : a ? /* @__PURE__ */ (0, _.jsx)("a", {
		className: c,
		href: a,
		rel: "noreferrer",
		target: "_blank",
		children: e
	}) : o ? /* @__PURE__ */ (0, _.jsx)("div", {
		className: c,
		role: "button",
		tabIndex: 0,
		onClick: o,
		children: e
	}) : /* @__PURE__ */ (0, _.jsx)("div", {
		className: c,
		children: e
	});
}, w = () => /* @__PURE__ */ (0, _.jsx)("hr", { className: "my-3 h-px border-0 bg-gray-200 dark:bg-gray-950" });
//#endregion
export { v as n, S as t };

//# sourceMappingURL=settings-DTgqJPxM.js.map