import { T as e, a as t, d as n, v as r, w as i } from "./_react-D4KM8XEu.js";
import { S as a } from "./chunk-KS7C4IRE-D4HEcEwi.js";
import { D as o, O as s, a as ee } from "./routes-Dh3xXfce.js";
import { r as c, y as l } from "./use-navigate-with-base-path-CAwXTmqH.js";
import { B as te, H as ne, a as re, q as ie, r as ae, z as oe } from "./use-activity-pub-queries-VzbN99u_.js";
import { d as se, u } from "./content-formatters-BpQARh28.js";
import { t as ce } from "./copy-D9UWIAan.js";
import { a as le, i as ue, n as de, r as fe, t as pe } from "./site-CdL9ZLqm.js";
import { i as d, r as f, t as p } from "./field-CY7XVcx6.js";
import "./layout-IdVq3lRy.js";
import { n as me, t as m } from "./social-web-handle-251Wqk4d.js";
//#region ../shade/es/components/primitives/types.js
var h = {
	none: "gap-0",
	xs: "gap-1",
	sm: "gap-2",
	md: "gap-3",
	lg: "gap-5",
	xl: "gap-6",
	"2xl": "gap-8"
}, g = {
	start: "items-start",
	center: "items-center",
	end: "items-end",
	stretch: "items-stretch",
	baseline: "items-baseline"
}, _ = {
	start: "justify-start",
	center: "justify-center",
	end: "justify-end",
	between: "justify-between",
	around: "justify-around",
	evenly: "justify-evenly"
};
//#endregion
//#region ../shade/es/components/primitives/inline.js
n();
var v = a(), y = t.forwardRef(function({ as: e = "div", className: t, gap: n = "md", align: r = "center", justify: i = "start", wrap: a = !1, ...o }, s) {
	return /* @__PURE__ */ (0, v.jsx)(e, {
		ref: s,
		className: l("flex flex-row", a ? "flex-wrap" : "flex-nowrap", h[n], g[r], _[i], t),
		...o
	});
});
//#endregion
//#region src/views/preferences/components/domain.tsx
y.displayName = "Inline", n();
function b(e) {
	let t = e.trim();
	if (t === "") return null;
	try {
		return new URL(t.includes("://") ? t : `https://${t}`).host || null;
	} catch {
		return t.replace(/^[a-z][a-z\d+\-.]*:\/\//i, "").split(/[/?#]/)[0] || null;
	}
}
function he(e, t) {
	if (e) try {
		return new URL(e).host;
	} catch {}
	return t?.split("@").at(-1) ?? "";
}
function ge(e, t) {
	if (!e) return "";
	try {
		return new URL(e, t || window.location.origin).toString();
	} catch {
		return e;
	}
}
async function _e(e) {
	if (navigator.clipboard?.writeText) try {
		await navigator.clipboard.writeText(e);
		return;
	} catch {}
	let t = document.createElement("textarea");
	t.value = e, t.setAttribute("readonly", ""), t.style.position = "fixed", t.style.left = "-9999px", t.style.top = "0", document.body.appendChild(t), t.select(), document.execCommand("copy"), document.body.removeChild(t);
}
var x = () => {
	let { data: t, isLoading: n } = re("index", "me"), { data: a } = pe(), { data: l, isLoading: h, isError: g } = ae("index"), _ = oe("index"), x = ne("index"), S = te(t?.handle || "index"), [C, w] = e(""), [T, E] = e(""), [D, O] = e(null), [k, A] = e(!1), [j, M] = e(!1), [N, P] = e(!1), [F, I] = e(null), [L, R] = e(null), [z, B] = e(null), [ve, V] = e(!1), [ye, H] = e(!1), U = i(null);
	r(() => {
		t?.handle && (E(m(t.handle).username), O(null));
	}, [t?.handle]), r(() => () => {
		U.current && window.clearTimeout(U.current);
	}, []);
	let W = b(C), G = l?.domain ?? null, K = he(l?.actorUrl, l?.handle), q = m(t?.handle).username, J = S.isPending, be = _.isPending || x.isPending, Y = h || be, X = n || J || !t, xe = !!(k && T !== q), Z = !!(N && W && (!G || F === W)), Se = !!(j && W && !N), Ce = !!(Z && W && W !== F), we = !!(F && W === F), Te = W ? `https://${W}/.well-known/webfinger` : "", Ee = K ? `https://${K}/.well-known/webfinger` : "", De = m(l?.handle), Q = {
		username: k ? T : De.username,
		domain: (j || N) && C ? W ?? C.trim() : De.domain
	}, Oe = `@${Q.username}@${Q.domain}`, ke = ge(t?.avatarUrl || a?.site?.icon, a?.site?.url), Ae = (e) => {
		e.preventDefault();
		let t = b(new FormData(e.currentTarget).get("domain")?.toString() ?? "");
		t && (w(t), M(!0), P(!0), R(null), B(null));
	}, je = async () => {
		if (!(!W || !Ce)) {
			R(null), B(null);
			try {
				await x.mutateAsync(W), I(W);
			} catch {
				B("Redirect could not be validated");
			}
		}
	}, Me = async () => {
		if (F) {
			R(null), B(null);
			try {
				await _.mutateAsync(F), w(""), M(!1), P(!1), I(null);
			} catch {
				R("Could not save the custom domain. Try again.");
			}
		}
	}, $ = () => {
		w(""), M(!1), P(!1), I(null), R(null), B(null);
	}, Ne = async () => {
		if (!t || !k || !xe) return;
		let e = me(T);
		if (e) {
			O(e);
			return;
		}
		O(null);
		try {
			await S.mutateAsync({
				name: t.name,
				username: T,
				bio: t.bio ?? "",
				avatarUrl: t.avatarUrl || "",
				bannerImageUrl: t.bannerImageUrl || ""
			}), A(!1);
		} catch {
			O("Could not save the Social Web username. Try again.");
		}
	}, Pe = () => {
		E(q), O(null), A(!1);
	}, Fe = async () => {
		R(null);
		try {
			await _.mutateAsync(null), w(""), M(!1), P(!1), I(null);
		} catch {
			R("Could not remove the custom domain. Try again.");
		}
	}, Ie = async () => {
		!Q.username || !Q.domain || (await _e(Oe), V(!0), H(!0), U.current && window.clearTimeout(U.current), U.current = window.setTimeout(() => {
			V(!1), H(!1);
		}, 2e3));
	};
	return /* @__PURE__ */ (0, v.jsx)(ee, { children: /* @__PURE__ */ (0, v.jsxs)("div", {
		className: "mx-auto max-w-[620px] py-[min(4vh,48px)]",
		children: [
			/* @__PURE__ */ (0, v.jsx)(y, {
				gap: "2xl",
				justify: "between",
				children: /* @__PURE__ */ (0, v.jsx)(ie, { children: "Your social web handle" })
			}),
			/* @__PURE__ */ (0, v.jsx)("p", {
				className: "mt-3 text-base text-muted-foreground",
				children: "Like an email address, your handle is how people can find and interact with you."
			}),
			/* @__PURE__ */ (0, v.jsx)("div", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, v.jsx)("div", {
					className: "rounded-md border border-border-default bg-sidebar px-4 pt-3 pb-4",
					children: /* @__PURE__ */ (0, v.jsx)(p, { children: h ? /* @__PURE__ */ (0, v.jsx)(u, { className: "mt-2 h-16 w-full" }) : g ? /* @__PURE__ */ (0, v.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Could not load your Social Web handle."
					}) : /* @__PURE__ */ (0, v.jsxs)("div", {
						className: "mt-3 flex items-start gap-2",
						children: [/* @__PURE__ */ (0, v.jsx)("div", {
							className: "mt-[-5px] flex size-7 shrink-0 items-center justify-center overflow-hidden rounded-full bg-surface-elevated text-muted-foreground ring-1 ring-border-default",
							children: n ? /* @__PURE__ */ (0, v.jsx)(u, { className: "size-7 rounded-full" }) : ke ? /* @__PURE__ */ (0, v.jsx)("img", {
								alt: t?.name || a?.site?.title || "",
								className: "size-full rounded-full object-cover",
								referrerPolicy: "no-referrer",
								src: ke
							}) : /* @__PURE__ */ (0, v.jsx)(se, {
								className: "size-4",
								strokeWidth: 1.5
							})
						}), /* @__PURE__ */ (0, v.jsx)("div", {
							className: "-ml-14 min-w-0 overflow-x-auto px-14",
							children: /* @__PURE__ */ (0, v.jsxs)("div", {
								"aria-label": "Social Web handle breakdown",
								className: "inline-flex pb-9 font-mono text-xl leading-none font-medium whitespace-nowrap text-foreground select-none",
								role: "group",
								children: [
									/* @__PURE__ */ (0, v.jsx)("span", { children: "@" }),
									/* @__PURE__ */ (0, v.jsxs)("div", {
										className: "relative",
										children: [/* @__PURE__ */ (0, v.jsx)("span", { children: Q.username }), /* @__PURE__ */ (0, v.jsxs)("div", {
											className: "absolute top-7 left-0 w-full border-t border-border-strong before:absolute before:top-[-5px] before:left-0 before:h-[5px] before:border-l before:border-border-strong after:absolute after:top-[-5px] after:right-0 after:h-[5px] after:border-l after:border-border-strong",
											children: [/* @__PURE__ */ (0, v.jsx)("span", {
												"aria-hidden": "true",
												className: "absolute top-0 left-1/2 h-[5px] border-l border-border-strong"
											}), /* @__PURE__ */ (0, v.jsx)("div", {
												className: "absolute top-2 right-0 w-max min-w-full text-center font-sans text-[10px] leading-normal font-medium whitespace-nowrap text-muted-foreground uppercase",
												children: "Username"
											})]
										})]
									}),
									/* @__PURE__ */ (0, v.jsx)("span", {
										className: "ml-px",
										children: "@"
									}),
									/* @__PURE__ */ (0, v.jsxs)("div", {
										className: "relative",
										children: [/* @__PURE__ */ (0, v.jsx)("span", { children: Q.domain }), /* @__PURE__ */ (0, v.jsxs)("div", {
											className: "absolute top-7 left-0 w-full border-t border-state-success before:absolute before:top-[-5px] before:left-0 before:h-[5px] before:border-l before:border-state-success after:absolute after:top-[-5px] after:right-0 after:h-[5px] after:border-l after:border-state-success",
											children: [/* @__PURE__ */ (0, v.jsx)("span", {
												"aria-hidden": "true",
												className: "absolute top-0 left-1/2 h-[5px] border-l border-state-success"
											}), /* @__PURE__ */ (0, v.jsx)("div", {
												className: "absolute top-2 left-0 w-max min-w-full text-center font-sans text-[10px] leading-normal font-medium whitespace-nowrap text-state-success uppercase",
												children: "Domain"
											})]
										})]
									}),
									l?.handle && /* @__PURE__ */ (0, v.jsx)(ue, {
										delayDuration: 0,
										children: /* @__PURE__ */ (0, v.jsxs)(de, {
											open: ye,
											onOpenChange: H,
											children: [/* @__PURE__ */ (0, v.jsx)(le, {
												asChild: !0,
												children: /* @__PURE__ */ (0, v.jsx)(c, {
													"aria-label": "Copy Social Web handle",
													className: "mt-[-2px] ml-1.5 size-5 shrink-0 self-start p-0 text-muted-foreground hover:text-foreground [&_svg]:size-3.5!",
													type: "button",
													variant: "ghost",
													onClick: () => {
														Ie();
													},
													children: /* @__PURE__ */ (0, v.jsx)(ce, { size: 12 })
												})
											}), /* @__PURE__ */ (0, v.jsx)(fe, { children: ve ? "Copied!" : "Copy" })]
										})
									})
								]
							})
						})]
					}) })
				})
			}),
			/* @__PURE__ */ (0, v.jsx)("form", {
				className: "mt-10",
				onSubmit: (e) => {
					e.preventDefault(), Ne();
				},
				children: /* @__PURE__ */ (0, v.jsxs)(p, { children: [
					/* @__PURE__ */ (0, v.jsx)(d, {
						htmlFor: "social-web-username",
						children: "Social web username"
					}),
					n ? /* @__PURE__ */ (0, v.jsx)(u, { className: "h-9 w-full" }) : /* @__PURE__ */ (0, v.jsxs)(y, {
						className: "flex-col items-stretch sm:flex-row sm:items-center",
						gap: "md",
						children: [/* @__PURE__ */ (0, v.jsx)(s, {
							"aria-describedby": D ? "social-web-username-error" : void 0,
							"aria-invalid": D ? !0 : void 0,
							autoComplete: "off",
							className: "sm:flex-1",
							disabled: X || !k,
							id: "social-web-username",
							value: T,
							"data-1p-ignore": !0,
							onChange: (e) => {
								E(e.target.value), O(null);
							}
						}), k ? /* @__PURE__ */ (0, v.jsxs)(y, {
							gap: "md",
							justify: "end",
							children: [/* @__PURE__ */ (0, v.jsx)(c, {
								className: "h-9 text-sm sm:w-auto",
								disabled: J,
								type: "button",
								variant: "outline",
								onClick: Pe,
								children: "Cancel"
							}), /* @__PURE__ */ (0, v.jsx)(c, {
								className: "h-9 text-sm sm:w-auto",
								disabled: X || !xe,
								type: "submit",
								children: J ? /* @__PURE__ */ (0, v.jsxs)(v.Fragment, { children: [/* @__PURE__ */ (0, v.jsx)(o, {
									color: "light",
									size: "sm"
								}), "Saving..."] }) : "Save"
							})]
						}) : /* @__PURE__ */ (0, v.jsx)(c, {
							"aria-label": "Edit Social web username",
							className: "h-9 text-sm sm:w-auto",
							disabled: X,
							type: "button",
							variant: "outline",
							onClick: () => {
								E(q), O(null), A(!0);
							},
							children: "Edit"
						})]
					}),
					D && /* @__PURE__ */ (0, v.jsx)(f, {
						id: "social-web-username-error",
						children: D
					})
				] })
			}),
			/* @__PURE__ */ (0, v.jsx)("div", {
				className: "mt-10",
				children: G && !F ? /* @__PURE__ */ (0, v.jsxs)(p, {
					"data-invalid": L ? !0 : void 0,
					children: [
						/* @__PURE__ */ (0, v.jsx)(d, {
							htmlFor: "social-web-active-domain",
							children: "Social web domain"
						}),
						/* @__PURE__ */ (0, v.jsxs)(y, {
							className: "flex-col items-stretch sm:flex-row sm:items-center",
							gap: "md",
							children: [/* @__PURE__ */ (0, v.jsx)(s, {
								"aria-label": "Active social web domain",
								autoComplete: "off",
								className: "sm:flex-1",
								id: "social-web-active-domain",
								value: G,
								"data-1p-ignore": !0,
								disabled: !0
							}), /* @__PURE__ */ (0, v.jsx)(c, {
								className: "h-9 text-sm sm:w-auto",
								disabled: Y,
								variant: "outline",
								onClick: Fe,
								children: _.isPending ? /* @__PURE__ */ (0, v.jsxs)(v.Fragment, { children: [/* @__PURE__ */ (0, v.jsx)(o, { size: "sm" }), "Removing..."] }) : "Remove"
							})]
						}),
						L && /* @__PURE__ */ (0, v.jsx)(f, {
							id: "social-web-domain-error",
							children: L
						})
					]
				}) : /* @__PURE__ */ (0, v.jsxs)("form", {
					onSubmit: Ae,
					children: [
						/* @__PURE__ */ (0, v.jsxs)(p, {
							"data-invalid": L ? !0 : void 0,
							children: [
								/* @__PURE__ */ (0, v.jsx)(d, {
									htmlFor: "social-web-domain",
									children: "Social web domain"
								}),
								/* @__PURE__ */ (0, v.jsxs)(y, {
									className: "flex-col items-stretch sm:flex-row sm:items-center",
									gap: "md",
									children: [/* @__PURE__ */ (0, v.jsx)(s, {
										"aria-describedby": L ? "social-web-domain-error" : void 0,
										"aria-invalid": L ? !0 : void 0,
										"aria-label": "Social web domain",
										autoComplete: "off",
										className: "sm:flex-1",
										disabled: Y || !j || N,
										id: "social-web-domain",
										name: "domain",
										placeholder: K,
										value: j || N ? C : K,
										"data-1p-ignore": !0,
										onChange: (e) => {
											w(e.target.value), P(!1), I(null), R(null), B(null);
										}
									}), !Z && (j ? /* @__PURE__ */ (0, v.jsxs)(y, {
										gap: "md",
										justify: "end",
										children: [/* @__PURE__ */ (0, v.jsx)(c, {
											className: "h-9 text-sm sm:w-auto",
											disabled: Y,
											type: "button",
											variant: "outline",
											onClick: $,
											children: "Cancel"
										}), /* @__PURE__ */ (0, v.jsx)(c, {
											className: "h-9 text-sm sm:w-auto",
											disabled: Y || !Se || g,
											type: "submit",
											children: "Activate"
										})]
									}) : /* @__PURE__ */ (0, v.jsx)(c, {
										"aria-label": "Edit Social web domain",
										className: "h-9 text-sm sm:w-auto",
										disabled: Y || g,
										type: "button",
										variant: "outline",
										onClick: () => {
											w(""), R(null), B(null), M(!0);
										},
										children: "Edit"
									}))]
								}),
								L && /* @__PURE__ */ (0, v.jsx)(f, {
									id: "social-web-domain-error",
									children: L
								})
							]
						}),
						Z && /* @__PURE__ */ (0, v.jsxs)("div", {
							className: "mt-6 rounded-md border border-border-default bg-surface-elevated p-4",
							children: [
								/* @__PURE__ */ (0, v.jsx)("div", {
									className: "text-sm font-medium text-foreground",
									children: "Set up your redirect"
								}),
								/* @__PURE__ */ (0, v.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: "Add a redirect or proxy service to forward social web requests to Ghost."
								}),
								/* @__PURE__ */ (0, v.jsxs)("div", {
									className: "mt-4 flex flex-col gap-3 text-sm",
									children: [/* @__PURE__ */ (0, v.jsxs)("div", { children: [/* @__PURE__ */ (0, v.jsx)("div", {
										className: "text-muted-foreground",
										children: "Redirect from"
									}), /* @__PURE__ */ (0, v.jsx)("code", {
										className: "mt-1 block overflow-x-auto rounded-sm bg-background px-3 py-2 text-foreground",
										children: Te
									})] }), /* @__PURE__ */ (0, v.jsxs)("div", { children: [/* @__PURE__ */ (0, v.jsx)("div", {
										className: "text-muted-foreground",
										children: "Redirect to"
									}), /* @__PURE__ */ (0, v.jsx)("code", {
										className: "mt-1 block overflow-x-auto rounded-sm bg-background px-3 py-2 text-foreground",
										children: Ee
									})] })]
								})
							]
						}),
						Z && /* @__PURE__ */ (0, v.jsxs)(y, {
							className: "mt-4 flex-col items-stretch sm:flex-row sm:items-center",
							gap: "md",
							justify: "between",
							children: [/* @__PURE__ */ (0, v.jsx)("div", {
								className: "text-sm text-destructive",
								children: z
							}), /* @__PURE__ */ (0, v.jsxs)(y, {
								gap: "md",
								justify: "end",
								children: [/* @__PURE__ */ (0, v.jsx)(c, {
									disabled: Y,
									variant: "outline",
									onClick: $,
									children: "Cancel"
								}), we ? /* @__PURE__ */ (0, v.jsx)(c, {
									disabled: Y,
									onClick: Me,
									children: _.isPending ? /* @__PURE__ */ (0, v.jsxs)(v.Fragment, { children: [/* @__PURE__ */ (0, v.jsx)(o, {
										color: "light",
										size: "sm"
									}), "Saving..."] }) : "Save"
								}) : /* @__PURE__ */ (0, v.jsx)(c, {
									disabled: Y || !Ce || g,
									onClick: je,
									children: x.isPending ? /* @__PURE__ */ (0, v.jsxs)(v.Fragment, { children: [/* @__PURE__ */ (0, v.jsx)(o, {
										color: "light",
										size: "sm"
									}), "Validating..."] }) : z ? "Retry" : "Validate"
								})]
							})]
						})
					]
				})
			})
		]
	}) });
};
//#endregion
export { x as default };

//# sourceMappingURL=domain-CmwSZLHK.js.map