import { T as e, d as t } from "./_react-D4KM8XEu.js";
import { S as n } from "./chunk-KS7C4IRE-D4HEcEwi.js";
import { D as r, O as i, a, mt as o } from "./routes-Dh3xXfce.js";
import { r as s } from "./use-navigate-with-base-path-CAwXTmqH.js";
import { D as c, n as l, o as u, q as d } from "./use-activity-pub-queries-VzbN99u_.js";
import { u as f } from "./content-formatters-BpQARh28.js";
import { i as p, n as m, r as h, t as g } from "./field-CY7XVcx6.js";
import "./layout-IdVq3lRy.js";
//#region src/views/preferences/components/account-migration.tsx
t();
var _ = n(), v = /^@?[^@\s]+@[^@\s]+$/;
function y(e) {
	let t = e.trim();
	return t.startsWith("@") ? t : `@${t}`;
}
function b(e) {
	try {
		let t = new URL(e), n = t.pathname.match(/^\/users\/([^/]+)\/?$/);
		return n ? `${decodeURIComponent(n[1])}@${t.hostname}` : `${t.hostname}${t.pathname}`;
	} catch {
		return e;
	}
}
function x(e) {
	if (typeof e == "object" && e && "statusCode" in e && typeof e.statusCode == "number") {
		if (e.statusCode === 400) return "Enter a valid handle, like old@mastodon.social.";
		if (e.statusCode === 404) return "Could not find that profile. Check the handle and try again.";
	}
	return "Something went wrong, please try again.";
}
var S = () => {
	let { data: t, isError: n, isLoading: S, refetch: C } = l("index"), w = u("index"), T = c("index"), [E, D] = e(""), [O, k] = e(null), [A, j] = e(null), [M, N] = e(null), P = [...t?.aliases ?? []].reverse(), F = S || n || P.length > 0, I = async (e) => {
		e.preventDefault();
		let t = E.trim();
		if (!v.test(t)) {
			k("Enter a valid handle, like old@mastodon.social.");
			return;
		}
		k(null), j(null);
		try {
			let e = y(t);
			await w.mutateAsync(e), D("");
		} catch (e) {
			k(x(e));
		}
	}, L = async (e) => {
		j(null), N(e);
		try {
			await T.mutateAsync(e);
		} catch {
			j("Could not remove migration profile.");
		} finally {
			N(null);
		}
	};
	return /* @__PURE__ */ (0, _.jsx)(a, { children: /* @__PURE__ */ (0, _.jsxs)("div", {
		className: "mx-auto max-w-[620px] py-[min(4vh,48px)]",
		children: [
			/* @__PURE__ */ (0, _.jsx)("div", {
				className: "flex items-center justify-between gap-8",
				children: /* @__PURE__ */ (0, _.jsx)(d, { children: "Account migration" })
			}),
			/* @__PURE__ */ (0, _.jsx)("div", {
				className: "mt-3 text-base text-gray-800 dark:text-gray-600",
				children: /* @__PURE__ */ (0, _.jsxs)("p", { children: [
					"You can move your followers from another social web account (eg. ",
					/* @__PURE__ */ (0, _.jsx)("a", {
						className: "underline hover:text-black dark:hover:text-white",
						href: "https://docs.joinmastodon.org/user/moving/#move",
						rel: "noopener noreferrer",
						target: "_blank",
						children: "Mastodon"
					}),
					") to this one by creating an account alias. This action is harmless and reversible. The account migration is initiated from the old account."
				] })
			}),
			/* @__PURE__ */ (0, _.jsx)("form", {
				className: "mt-10",
				onSubmit: I,
				children: /* @__PURE__ */ (0, _.jsxs)(g, {
					"data-invalid": O ? !0 : void 0,
					children: [
						/* @__PURE__ */ (0, _.jsx)(p, {
							htmlFor: "account-migration-source-handle",
							children: "Old account handle"
						}),
						/* @__PURE__ */ (0, _.jsx)(m, {
							id: "account-migration-source-handle-description",
							children: "Specify the username@domain of the account you want to move from"
						}),
						/* @__PURE__ */ (0, _.jsxs)("div", {
							className: "flex flex-col gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, _.jsx)(i, {
								"aria-describedby": O ? "account-migration-source-handle-error" : "account-migration-source-handle-description",
								"aria-invalid": O ? !0 : void 0,
								autoComplete: "off",
								className: "sm:flex-1",
								id: "account-migration-source-handle",
								placeholder: "username@domain",
								value: E,
								"data-1p-ignore": !0,
								onChange: (e) => D(e.target.value)
							}), /* @__PURE__ */ (0, _.jsxs)(s, {
								className: "relative h-9 text-sm sm:w-auto",
								disabled: w.isPending,
								type: "submit",
								children: [/* @__PURE__ */ (0, _.jsx)("span", {
									className: w.isPending ? "invisible" : void 0,
									children: "Create alias"
								}), w.isPending && /* @__PURE__ */ (0, _.jsxs)("span", {
									className: "absolute inset-0 flex items-center justify-center",
									children: [/* @__PURE__ */ (0, _.jsx)(r, {
										color: "light",
										size: "sm"
									}), /* @__PURE__ */ (0, _.jsx)("span", {
										className: "sr-only",
										children: "Creating alias..."
									})]
								})]
							})]
						}),
						O && /* @__PURE__ */ (0, _.jsx)(h, {
							id: "account-migration-source-handle-error",
							children: O
						}),
						A && /* @__PURE__ */ (0, _.jsx)(h, {
							id: "account-migration-alias-error",
							children: A
						})
					]
				})
			}),
			F && /* @__PURE__ */ (0, _.jsxs)("div", {
				className: "mt-10",
				"data-testid": "account-migration-aliases",
				children: [/* @__PURE__ */ (0, _.jsx)("div", {
					className: "pb-3",
					children: /* @__PURE__ */ (0, _.jsx)(p, {
						asChild: !0,
						children: /* @__PURE__ */ (0, _.jsx)("div", { children: "Account aliases" })
					})
				}), S ? /* @__PURE__ */ (0, _.jsx)("div", {
					className: "border-t border-gray-200 py-4 dark:border-gray-950",
					children: /* @__PURE__ */ (0, _.jsx)(f, { className: "h-5 w-48" })
				}) : n ? /* @__PURE__ */ (0, _.jsxs)("div", {
					className: "flex items-center justify-between gap-4 border-t border-gray-200 py-4 text-sm text-gray-700 dark:border-gray-950 dark:text-gray-600",
					children: [/* @__PURE__ */ (0, _.jsx)("span", { children: "Could not load account aliases." }), /* @__PURE__ */ (0, _.jsx)(s, {
						className: "px-0 font-medium",
						variant: "link",
						onClick: () => C(),
						children: "Retry"
					})]
				}) : /* @__PURE__ */ (0, _.jsx)("div", {
					className: "divide-y divide-gray-200 border-t border-gray-200 dark:divide-gray-950 dark:border-gray-950",
					children: P.map((e) => /* @__PURE__ */ (0, _.jsxs)("div", {
						className: "flex items-center justify-between gap-4 py-4",
						children: [/* @__PURE__ */ (0, _.jsx)("div", {
							className: "min-w-0 truncate text-base text-black dark:text-white",
							children: b(e.apId)
						}), /* @__PURE__ */ (0, _.jsx)(s, {
							className: "shrink-0 px-0 font-medium text-gray-700 hover:text-red dark:text-gray-600 dark:hover:text-red",
							disabled: M === e.apId,
							variant: "link",
							onClick: () => L(e.apId),
							children: M === e.apId ? /* @__PURE__ */ (0, _.jsx)(r, { size: "sm" }) : /* @__PURE__ */ (0, _.jsxs)(_.Fragment, { children: [/* @__PURE__ */ (0, _.jsx)(o, { size: 15 }), " Unlink"] })
						})]
					}, e.apId))
				})]
			})
		]
	}) });
};
//#endregion
export { S as default };

//# sourceMappingURL=account-migration-DHbZcxGM.js.map