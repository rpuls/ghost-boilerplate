import { T as e, d as t, g as n, v as r, w as i } from "./_react-D4KM8XEu.js";
import { S as a } from "./chunk-KS7C4IRE-D4HEcEwi.js";
import { o } from "./users-BLeiOTHc.js";
import { A as s, D as c, F as l, G as u, I as d, J as f, L as p, M as m, N as h, P as g, U as _, X as ee, Y as te, a as v, ht as y, j as b } from "./routes-Dh3xXfce.js";
import { i as x, r as S } from "./use-navigate-with-base-path-CAwXTmqH.js";
import { J as C, a as w, d as T, g as E, m as D, q as O } from "./use-activity-pub-queries-VzbN99u_.js";
import { c as k, p as A } from "./content-formatters-BpQARh28.js";
import { t as j } from "./copy-D9UWIAan.js";
import { t as M } from "./edit-profile-CXdwNmVG.js";
import "./layout-IdVq3lRy.js";
//#region src/views/preferences/components/bluesky-sharing.tsx
t();
var N = a(), ne = 5e3, P = 12, F = () => {
	let { data: t, isLoading: a } = w("index", "me"), [F, I] = e(() => t?.blueskyEnabled && !t?.blueskyHandleConfirmed), [L, R] = e(!1), [z, B] = e(!1), [V, H] = e(!1), [U, W] = e(!1), G = i(0), K = E("index"), q = D("index"), J = T("index"), Y = async () => {
		R(!0), await navigator.clipboard.writeText(t?.blueskyHandle || ""), setTimeout(() => R(!1), 2e3);
	}, X = async () => {
		if (!t?.avatarUrl) B(!0);
		else {
			I(!0);
			try {
				await K.mutateAsync();
			} catch {
				I(!1), o.error("Something went wrong, please try again.");
			}
		}
	}, Z = async () => {
		I(!0);
		try {
			await q.mutateAsync(), H(!1), o.success("Bluesky sharing disabled");
		} finally {
			I(!1);
		}
	}, Q = n(() => {
		J.mutateAsync().then((e) => {
			e && W(!0);
		});
	}, []);
	if (r(() => {
		if (!t?.blueskyEnabled) {
			W(!1), I(!1), G.current = 0;
			return;
		}
		if (t?.blueskyHandleConfirmed) {
			W(!0), I(!1), G.current > 0 && o.success("Bluesky sharing enabled"), G.current = 0;
			return;
		}
		W(!1), I(!0), G.current = 0;
		let e = setInterval(async () => {
			if (G.current += 1, G.current > P) {
				clearInterval(e), o.error("Something went wrong, please try again."), await q.mutateAsync(), I(!1);
				return;
			}
			Q();
		}, ne);
		return () => clearInterval(e);
	}, [
		t?.blueskyEnabled,
		t?.blueskyHandleConfirmed,
		Q
	]), a) return /* @__PURE__ */ (0, N.jsx)(v, { children: /* @__PURE__ */ (0, N.jsxs)("div", {
		className: "mx-auto max-w-[620px] py-[min(4vh,48px)]",
		children: [/* @__PURE__ */ (0, N.jsx)("div", {
			className: "flex items-center justify-between gap-8",
			children: /* @__PURE__ */ (0, N.jsx)(O, { children: "Bluesky sharing" })
		}), /* @__PURE__ */ (0, N.jsx)("div", {
			className: "mt-6 flex justify-center",
			children: /* @__PURE__ */ (0, N.jsx)(c, { size: "md" })
		})]
	}) });
	let $ = t?.blueskyEnabled && t?.blueskyHandleConfirmed;
	return /* @__PURE__ */ (0, N.jsxs)(v, { children: [/* @__PURE__ */ (0, N.jsxs)("div", {
		className: "mx-auto max-w-[620px] py-[min(4vh,48px)]",
		children: [/* @__PURE__ */ (0, N.jsxs)("div", {
			className: "flex items-center justify-between gap-8",
			children: [/* @__PURE__ */ (0, N.jsx)(O, { children: "Bluesky sharing" }), $ && /* @__PURE__ */ (0, N.jsxs)(S, {
				className: "group w-24 translate-y-1 px-2 hover:bg-red/5! hover:text-red",
				size: "default",
				variant: "outline",
				onClick: () => H(!0),
				children: [
					/* @__PURE__ */ (0, N.jsx)("span", { className: "size-2 rounded-full bg-green group-hover:hidden" }),
					/* @__PURE__ */ (0, N.jsx)("span", {
						className: "group-hover:hidden",
						children: "Enabled"
					}),
					/* @__PURE__ */ (0, N.jsx)("span", {
						className: "hidden group-hover:visible! group-hover:inline!",
						children: "Disable"
					})
				]
			})]
		}), $ ? /* @__PURE__ */ (0, N.jsxs)(N.Fragment, { children: [/* @__PURE__ */ (0, N.jsxs)("p", {
			className: "mt-2 pr-32 text-base",
			children: [
				"Your social web profile is now connected to Bluesky, via ",
				/* @__PURE__ */ (0, N.jsx)("a", {
					className: "text-purple hover:text-purple-600",
					href: "https://fed.brid.gy",
					rel: "noreferrer",
					target: "_blank",
					children: "Bridgy Fed"
				}),
				". Posts are automatically synced after a short delay to complete activation."
			]
		}), U && /* @__PURE__ */ (0, N.jsxs)("div", {
			className: "mt-6 flex flex-col items-center gap-4 rounded-lg border border-gray-200 p-8 dark:border-gray-950",
			children: [
				/* @__PURE__ */ (0, N.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, N.jsx)(k, {
						author: {
							icon: { url: t?.avatarUrl || "" },
							name: t?.name || "",
							handle: t?.handle || ""
						},
						size: "md"
					}), /* @__PURE__ */ (0, N.jsx)("div", {
						className: "absolute right-0 bottom-0 z-10 flex size-6 items-center justify-center rounded-full bg-white shadow-xs",
						children: /* @__PURE__ */ (0, N.jsx)("svg", {
							height: "14",
							role: "img",
							viewBox: "0 0 24 24",
							width: "14",
							xmlns: "http://www.w3.org/2000/svg",
							children: /* @__PURE__ */ (0, N.jsx)("path", {
								d: "M12 10.8c-1.087 -2.114 -4.046 -6.053 -6.798 -7.995C2.566 0.944 1.561 1.266 0.902 1.565 0.139 1.908 0 3.08 0 3.768c0 0.69 0.378 5.65 0.624 6.479 0.815 2.736 3.713 3.66 6.383 3.364 0.136 -0.02 0.275 -0.039 0.415 -0.056 -0.138 0.022 -0.276 0.04 -0.415 0.056 -3.912 0.58 -7.387 2.005 -2.83 7.078 5.013 5.19 6.87 -1.113 7.823 -4.308 0.953 3.195 2.05 9.271 7.733 4.308 4.267 -4.308 1.172 -6.498 -2.74 -7.078a8.741 8.741 0 0 1 -0.415 -0.056c0.14 0.017 0.279 0.036 0.415 0.056 2.67 0.297 5.568 -0.628 6.383 -3.364 0.246 -0.828 0.624 -5.79 0.624 -6.478 0 -0.69 -0.139 -1.861 -0.902 -2.206 -0.659 -0.298 -1.664 -0.62 -4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z",
								fill: "#0385FF",
								strokeWidth: "1"
							})
						})
					})]
				}),
				/* @__PURE__ */ (0, N.jsxs)("div", {
					className: "flex grow flex-col items-center",
					children: [/* @__PURE__ */ (0, N.jsx)(C, { children: t?.name || "" }), /* @__PURE__ */ (0, N.jsxs)("div", {
						className: "flex items-center gap-1 text-gray-800",
						children: [/* @__PURE__ */ (0, N.jsx)("span", {
							className: "text-lg font-medium",
							children: t?.blueskyHandle
						}), /* @__PURE__ */ (0, N.jsx)(S, {
							className: "size-6 p-0 hover:opacity-80",
							title: "Copy handle",
							variant: "link",
							onClick: Y,
							children: L ? /* @__PURE__ */ (0, N.jsx)(A, { size: 16 }) : /* @__PURE__ */ (0, N.jsx)(j, { size: 16 })
						})]
					})]
				}),
				/* @__PURE__ */ (0, N.jsx)(S, {
					className: "mt-2 w-full",
					size: "lg",
					variant: "secondary",
					asChild: !0,
					children: /* @__PURE__ */ (0, N.jsxs)("a", {
						href: `https://bsky.app/profile/${t?.blueskyHandle?.replace(/^@/, "")}`,
						rel: "noreferrer",
						target: "_blank",
						children: ["Open profile", /* @__PURE__ */ (0, N.jsx)(y, {
							size: 14,
							strokeWidth: 1.25
						})]
					})
				})
			]
		})] }) : /* @__PURE__ */ (0, N.jsxs)("div", {
			className: "mt-3 flex flex-col gap-5",
			children: [
				/* @__PURE__ */ (0, N.jsx)("p", {
					className: "text-base",
					children: t?.avatarUrl ? /* @__PURE__ */ (0, N.jsxs)(N.Fragment, { children: [
						"Connect your account to ",
						/* @__PURE__ */ (0, N.jsx)("a", {
							className: "text-purple hover:text-purple-600",
							href: "https://fed.brid.gy",
							rel: "noreferrer",
							target: "_blank",
							children: "Bridgy Fed"
						}),
						" to share content directly to a dedicated Bluesky profile and increase your reach across the social web."
					] }) : "Add a profile image to connect to Bluesky. Profile pictures help prevent spam."
				}),
				/* @__PURE__ */ (0, N.jsx)("p", {
					className: "-mt-2 text-base",
					children: "You can't change your Bluesky username, so make sure you're happy with your current social web handle before connecting."
				}),
				t?.avatarUrl ? /* @__PURE__ */ (0, N.jsxs)(N.Fragment, { children: [/* @__PURE__ */ (0, N.jsx)(S, {
					className: "h-10 text-base",
					disabled: F,
					variant: "secondary",
					onClick: X,
					children: F ? /* @__PURE__ */ (0, N.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, N.jsx)(c, { size: "sm" }), /* @__PURE__ */ (0, N.jsx)("span", { children: "Enabling Bluesky sharing..." })]
					}) : /* @__PURE__ */ (0, N.jsxs)(N.Fragment, { children: [/* @__PURE__ */ (0, N.jsx)("svg", {
						height: "32",
						role: "img",
						viewBox: "0 0 24 24",
						width: "32",
						xmlns: "http://www.w3.org/2000/svg",
						children: /* @__PURE__ */ (0, N.jsx)("path", {
							d: "M12 10.8c-1.087 -2.114 -4.046 -6.053 -6.798 -7.995C2.566 0.944 1.561 1.266 0.902 1.565 0.139 1.908 0 3.08 0 3.768c0 0.69 0.378 5.65 0.624 6.479 0.815 2.736 3.713 3.66 6.383 3.364 0.136 -0.02 0.275 -0.039 0.415 -0.056 -0.138 0.022 -0.276 0.04 -0.415 0.056 -3.912 0.58 -7.387 2.005 -2.83 7.078 5.013 5.19 6.87 -1.113 7.823 -4.308 0.953 3.195 2.05 9.271 7.733 4.308 4.267 -4.308 1.172 -6.498 -2.74 -7.078a8.741 8.741 0 0 1 -0.415 -0.056c0.14 0.017 0.279 0.036 0.415 0.056 2.67 0.297 5.568 -0.628 6.383 -3.364 0.246 -0.828 0.624 -5.79 0.624 -6.478 0 -0.69 -0.139 -1.861 -0.902 -2.206 -0.659 -0.298 -1.664 -0.62 -4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z",
							fill: "#0385FF",
							strokeWidth: "1"
						})
					}), "Enable Bluesky sharing"] })
				}), F && /* @__PURE__ */ (0, N.jsx)("p", {
					className: "-mt-2 text-center text-sm text-gray-700 dark:text-gray-600",
					children: "You can leave this page and come back to check the status."
				})] }) : /* @__PURE__ */ (0, N.jsxs)(_, {
					open: z,
					onOpenChange: B,
					children: [/* @__PURE__ */ (0, N.jsx)(ee, { children: /* @__PURE__ */ (0, N.jsx)(S, {
						className: "h-10 w-full text-base",
						variant: "secondary",
						children: "Edit profile"
					}) }), /* @__PURE__ */ (0, N.jsxs)(u, {
						className: "w-full max-w-[520px]",
						onOpenAutoFocus: (e) => e.preventDefault(),
						children: [/* @__PURE__ */ (0, N.jsx)(f, { children: /* @__PURE__ */ (0, N.jsx)(te, { children: "Profile settings" }) }), t && /* @__PURE__ */ (0, N.jsx)(M, {
							account: t,
							setIsEditingProfile: B
						})]
					})]
				})
			]
		})]
	}), /* @__PURE__ */ (0, N.jsx)(s, {
		open: V,
		onOpenChange: H,
		children: /* @__PURE__ */ (0, N.jsxs)(h, { children: [/* @__PURE__ */ (0, N.jsxs)(d, { children: [/* @__PURE__ */ (0, N.jsx)(p, { children: "Disable Bluesky sharing?" }), /* @__PURE__ */ (0, N.jsx)(g, { children: "Your bridged Bluesky account will be deactivated and your content will no longer be shared on Bluesky. You can re-enable sharing at any time." })] }), /* @__PURE__ */ (0, N.jsxs)(l, { children: [/* @__PURE__ */ (0, N.jsx)(m, { children: "Cancel" }), /* @__PURE__ */ (0, N.jsx)(b, {
			className: x({ variant: "destructive" }),
			disabled: F,
			onClick: (e) => {
				e.preventDefault(), Z();
			},
			children: F ? /* @__PURE__ */ (0, N.jsx)(c, {
				color: "light",
				size: "sm"
			}) : "Disable"
		})] })] })
	})] });
};
//#endregion
export { F as default };

//# sourceMappingURL=bluesky-sharing-zfxUey_L.js.map