import { T as e, _ as t, c as n, d as r, g as i, r as a, u as o, v as s, w as c } from "./_react-D4KM8XEu.js";
import { S as l } from "./chunk-KS7C4IRE-D4HEcEwi.js";
import { $ as u, Q as d, _t as f, at as p, bt as m, ct as h, dt as g, et as _, ft as v, it as ee, lt as te, nt as ne, ot as re, rt as ie, st as y, tt as b, ut as ae } from "./routes-Dh3xXfce.js";
import { _ as x, f as S, g as oe, m as C, y as w } from "./use-navigate-with-base-path-CAwXTmqH.js";
import { p as se } from "./content-formatters-BpQARh28.js";
import { a as T, c as E, i as D, o as ce } from "./avatar-B3DEDB1l.js";
import { a as O, i as k, n as le, r as A, t as j } from "./dist-Ba_QxHHl.js";
var ue = oe("circle", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}]]);
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-menu@2.1.19_@types+react-dom@18.3.7_@types+react@18.3.31__@types+react@_4b5bcf394c29b5d4bc13e7a7b277eeb6/node_modules/@radix-ui/react-menu/dist/index.mjs
r();
var M = l(), N = ["Enter", " "], de = [
	"ArrowDown",
	"PageUp",
	"Home"
], fe = [
	"ArrowUp",
	"PageDown",
	"End"
], pe = [...de, ...fe], me = {
	ltr: [...N, "ArrowRight"],
	rtl: [...N, "ArrowLeft"]
}, he = {
	ltr: ["ArrowLeft"],
	rtl: ["ArrowRight"]
}, P = "Menu", [F, ge, _e] = O(P), [I, ve] = E(P, [
	_e,
	re,
	A
]), L = re(), ye = A(), [be, R] = I(P), [xe, z] = I(P), Se = (t) => {
	let { __scopeMenu: n, open: r = !1, children: a, dir: o, onOpenChange: l, modal: u = !0 } = t, d = L(n), [f, m] = e(null), h = c(!1), g = D(l), _ = k(o);
	return s(() => {
		let e = () => {
			h.current = !0, document.addEventListener("pointerdown", t, {
				capture: !0,
				once: !0
			}), document.addEventListener("pointermove", t, {
				capture: !0,
				once: !0
			});
		}, t = () => h.current = !1;
		return document.addEventListener("keydown", e, { capture: !0 }), () => {
			document.removeEventListener("keydown", e, { capture: !0 }), document.removeEventListener("pointerdown", t, { capture: !0 }), document.removeEventListener("pointermove", t, { capture: !0 });
		};
	}, []), s(() => {
		if (!r) return;
		let e = () => g(!1);
		return window.addEventListener("blur", e), () => window.removeEventListener("blur", e);
	}, [r, g]), /* @__PURE__ */ (0, M.jsx)(p, {
		...d,
		children: /* @__PURE__ */ (0, M.jsx)(be, {
			scope: n,
			open: r,
			onOpenChange: g,
			content: f,
			onContentChange: m,
			children: /* @__PURE__ */ (0, M.jsx)(xe, {
				scope: n,
				onClose: i(() => g(!1), [g]),
				isUsingKeyboardRef: h,
				dir: _,
				modal: u,
				children: a
			})
		})
	});
};
Se.displayName = P;
var Ce = "MenuAnchor", we = o((e, t) => {
	let { __scopeMenu: n, ...r } = e, i = L(n);
	return /* @__PURE__ */ (0, M.jsx)(ne, {
		...i,
		...r,
		ref: t
	});
});
we.displayName = Ce;
var Te = "MenuPortal", [Ee, De] = I(Te, { forceMount: void 0 }), Oe = (e) => {
	let { __scopeMenu: t, forceMount: n, children: r, container: i } = e, a = R(Te, t);
	return /* @__PURE__ */ (0, M.jsx)(Ee, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ (0, M.jsx)(_, {
			present: n || a.open,
			children: /* @__PURE__ */ (0, M.jsx)(b, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
};
Oe.displayName = Te;
var B = "MenuContent", [ke, V] = I(B), Ae = o((e, t) => {
	let n = De(B, e.__scopeMenu), { forceMount: r = n.forceMount, ...i } = e, a = R(B, e.__scopeMenu), o = z(B, e.__scopeMenu);
	return /* @__PURE__ */ (0, M.jsx)(F.Provider, {
		scope: e.__scopeMenu,
		children: /* @__PURE__ */ (0, M.jsx)(_, {
			present: r || a.open,
			children: /* @__PURE__ */ (0, M.jsx)(F.Slot, {
				scope: e.__scopeMenu,
				children: o.modal ? /* @__PURE__ */ (0, M.jsx)(je, {
					...i,
					ref: t
				}) : /* @__PURE__ */ (0, M.jsx)(Me, {
					...i,
					ref: t
				})
			})
		})
	});
}), je = o((e, t) => {
	let n = R(B, e.__scopeMenu), r = c(null), i = C(t, r);
	return s(() => {
		let e = r.current;
		if (e) return u(e);
	}, []), /* @__PURE__ */ (0, M.jsx)(H, {
		...e,
		ref: i,
		trapFocus: n.open,
		disableOutsidePointerEvents: n.open,
		disableOutsideScroll: !0,
		onFocusOutside: v(e.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 }),
		onDismiss: () => n.onOpenChange(!1)
	});
}), Me = o((e, t) => {
	let n = R(B, e.__scopeMenu);
	return /* @__PURE__ */ (0, M.jsx)(H, {
		...e,
		ref: t,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		disableOutsideScroll: !1,
		onDismiss: () => n.onOpenChange(!1)
	});
}), Ne = S("MenuContent.ScrollLock"), H = o((t, n) => {
	let { __scopeMenu: r, loop: o = !1, trapFocus: l, onOpenAutoFocus: u, onCloseAutoFocus: f, disableOutsidePointerEvents: p, onEntryFocus: m, onEscapeKeyDown: g, onPointerDownOutside: _, onFocusOutside: ne, onInteractOutside: re, onDismiss: ie, disableOutsideScroll: y, ...b } = t, x = R(B, r), S = z(B, r), oe = L(r), w = ye(r), se = ge(r), [T, E] = e(null), D = c(null), ce = C(n, D, x.onContentChange), O = c(0), k = c(""), A = c(0), j = c(null), ue = c("right"), N = c(0), de = y ? d : a, me = y ? {
		as: Ne,
		allowPinchZoom: !0
	} : void 0, he = (e) => {
		let t = k.current + e, n = se().filter((e) => !e.disabled), r = document.activeElement, i = n.find((e) => e.ref.current === r)?.textValue, a = dt(n.map((e) => e.textValue), t, i), o = n.find((e) => e.textValue === a)?.ref.current;
		(function e(t) {
			k.current = t, window.clearTimeout(O.current), t !== "" && (O.current = window.setTimeout(() => e(""), 1e3));
		})(t), o && setTimeout(() => o.focus());
	};
	s(() => () => window.clearTimeout(O.current), []), te();
	let P = i((e) => ue.current === j.current?.side && pt(e, j.current?.area), []);
	return /* @__PURE__ */ (0, M.jsx)(ke, {
		scope: r,
		searchRef: k,
		onItemEnter: i((e) => {
			P(e) && e.preventDefault();
		}, [P]),
		onItemLeave: i((e) => {
			P(e) || (D.current?.focus(), E(null));
		}, [P]),
		onTriggerLeave: i((e) => {
			P(e) && e.preventDefault();
		}, [P]),
		pointerGraceTimerRef: A,
		onPointerGraceIntentChange: i((e) => {
			j.current = e;
		}, []),
		children: /* @__PURE__ */ (0, M.jsx)(de, {
			...me,
			children: /* @__PURE__ */ (0, M.jsx)(h, {
				asChild: !0,
				trapped: l,
				onMountAutoFocus: v(u, (e) => {
					e.preventDefault(), D.current?.focus({ preventScroll: !0 });
				}),
				onUnmountAutoFocus: f,
				children: /* @__PURE__ */ (0, M.jsx)(ae, {
					asChild: !0,
					disableOutsidePointerEvents: p,
					onEscapeKeyDown: g,
					onPointerDownOutside: _,
					onFocusOutside: ne,
					onInteractOutside: re,
					onDismiss: ie,
					children: /* @__PURE__ */ (0, M.jsx)(le, {
						asChild: !0,
						...w,
						dir: S.dir,
						orientation: "vertical",
						loop: o,
						currentTabStopId: T,
						onCurrentTabStopIdChange: E,
						onEntryFocus: v(m, (e) => {
							S.isUsingKeyboardRef.current || e.preventDefault();
						}),
						preventScrollOnEntryFocus: !0,
						children: /* @__PURE__ */ (0, M.jsx)(ee, {
							role: "menu",
							"aria-orientation": "vertical",
							"data-state": st(x.open),
							"data-radix-menu-content": "",
							dir: S.dir,
							...oe,
							...b,
							ref: ce,
							style: {
								outline: "none",
								...b.style
							},
							onKeyDown: v(b.onKeyDown, (e) => {
								let t = e.target.closest("[data-radix-menu-content]") === e.currentTarget, n = e.ctrlKey || e.altKey || e.metaKey, r = e.key.length === 1;
								t && (e.key === "Tab" && e.preventDefault(), !n && r && he(e.key));
								let i = D.current;
								if (e.target !== i || !pe.includes(e.key)) return;
								e.preventDefault();
								let a = se().filter((e) => !e.disabled).map((e) => e.ref.current);
								fe.includes(e.key) && a.reverse(), lt(a);
							}),
							onBlur: v(t.onBlur, (e) => {
								e.currentTarget.contains(e.target) || (window.clearTimeout(O.current), k.current = "");
							}),
							onPointerMove: v(t.onPointerMove, Y((e) => {
								let t = e.target, n = N.current !== e.clientX;
								if (e.currentTarget.contains(t) && n) {
									let t = e.clientX > N.current ? "right" : "left";
									ue.current = t, N.current = e.clientX;
								}
							}))
						})
					})
				})
			})
		})
	});
});
Ae.displayName = B;
var Pe = "MenuGroup", U = o((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ (0, M.jsx)(T.div, {
		role: "group",
		...r,
		ref: t
	});
});
U.displayName = Pe;
var Fe = "MenuLabel", Ie = o((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ (0, M.jsx)(T.div, {
		...r,
		ref: t
	});
});
Ie.displayName = Fe;
var W = "MenuItem", Le = "menu.itemSelect", G = o((e, t) => {
	let { disabled: n = !1, onSelect: r, ...i } = e, a = c(null), o = z(W, e.__scopeMenu), s = V(W, e.__scopeMenu), l = C(t, a), u = c(!1), d = () => {
		let e = a.current;
		if (!n && e) {
			let t = new CustomEvent(Le, {
				bubbles: !0,
				cancelable: !0
			});
			e.addEventListener(Le, (e) => r?.(e), { once: !0 }), ce(e, t), t.defaultPrevented ? u.current = !1 : o.onClose();
		}
	};
	return /* @__PURE__ */ (0, M.jsx)(Re, {
		...i,
		ref: l,
		disabled: n,
		onClick: v(e.onClick, d),
		onPointerDown: (t) => {
			e.onPointerDown?.(t), u.current = !0;
		},
		onPointerUp: v(e.onPointerUp, (e) => {
			u.current || e.currentTarget?.click();
		}),
		onKeyDown: v(e.onKeyDown, (e) => {
			let t = s.searchRef.current !== "";
			n || t && e.key === " " || N.includes(e.key) && (e.currentTarget.click(), e.preventDefault());
		})
	});
});
G.displayName = W;
var Re = o((t, n) => {
	let { __scopeMenu: r, disabled: i = !1, textValue: a, ...o } = t, l = V(W, r), u = ye(r), d = c(null), f = C(n, d), [p, m] = e(!1), [h, g] = e("");
	return s(() => {
		let e = d.current;
		e && g((e.textContent ?? "").trim());
	}, [o.children]), /* @__PURE__ */ (0, M.jsx)(F.ItemSlot, {
		scope: r,
		disabled: i,
		textValue: a ?? h,
		children: /* @__PURE__ */ (0, M.jsx)(j, {
			asChild: !0,
			...u,
			focusable: !i,
			children: /* @__PURE__ */ (0, M.jsx)(T.div, {
				role: "menuitem",
				"data-highlighted": p ? "" : void 0,
				"aria-disabled": i || void 0,
				"data-disabled": i ? "" : void 0,
				...o,
				ref: f,
				onPointerMove: v(t.onPointerMove, Y((e) => {
					i ? l.onItemLeave(e) : (l.onItemEnter(e), e.defaultPrevented || e.currentTarget.focus({ preventScroll: !0 }));
				})),
				onPointerLeave: v(t.onPointerLeave, Y((e) => l.onItemLeave(e))),
				onFocus: v(t.onFocus, () => m(!0)),
				onBlur: v(t.onBlur, () => m(!1))
			})
		})
	});
}), ze = "MenuCheckboxItem", Be = o((e, t) => {
	let { checked: n = !1, onCheckedChange: r, ...i } = e;
	return /* @__PURE__ */ (0, M.jsx)(qe, {
		scope: e.__scopeMenu,
		checked: n,
		children: /* @__PURE__ */ (0, M.jsx)(G, {
			role: "menuitemcheckbox",
			"aria-checked": J(n) ? "mixed" : n,
			...i,
			ref: t,
			"data-state": ct(n),
			onSelect: v(i.onSelect, () => r?.(J(n) ? !0 : !n), { checkForDefaultPrevented: !1 })
		})
	});
});
Be.displayName = ze;
var Ve = "MenuRadioGroup", [He, Ue] = I(Ve, {
	value: void 0,
	onValueChange: () => {}
}), We = o((e, t) => {
	let { value: n, onValueChange: r, ...i } = e, a = D(r);
	return /* @__PURE__ */ (0, M.jsx)(He, {
		scope: e.__scopeMenu,
		value: n,
		onValueChange: a,
		children: /* @__PURE__ */ (0, M.jsx)(U, {
			...i,
			ref: t
		})
	});
});
We.displayName = Ve;
var Ge = "MenuRadioItem", Ke = o((e, t) => {
	let { value: n, ...r } = e, i = Ue(Ge, e.__scopeMenu), a = n === i.value;
	return /* @__PURE__ */ (0, M.jsx)(qe, {
		scope: e.__scopeMenu,
		checked: a,
		children: /* @__PURE__ */ (0, M.jsx)(G, {
			role: "menuitemradio",
			"aria-checked": a,
			...r,
			ref: t,
			"data-state": ct(a),
			onSelect: v(r.onSelect, () => i.onValueChange?.(n), { checkForDefaultPrevented: !1 })
		})
	});
});
Ke.displayName = Ge;
var K = "MenuItemIndicator", [qe, Je] = I(K, { checked: !1 }), Ye = o((e, t) => {
	let { __scopeMenu: n, forceMount: r, ...i } = e, a = Je(K, n);
	return /* @__PURE__ */ (0, M.jsx)(_, {
		present: r || J(a.checked) || a.checked === !0,
		children: /* @__PURE__ */ (0, M.jsx)(T.span, {
			...i,
			ref: t,
			"data-state": ct(a.checked)
		})
	});
});
Ye.displayName = K;
var Xe = "MenuSeparator", Ze = o((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ (0, M.jsx)(T.div, {
		role: "separator",
		"aria-orientation": "horizontal",
		...r,
		ref: t
	});
});
Ze.displayName = Xe;
var Qe = "MenuArrow", $e = o((e, t) => {
	let { __scopeMenu: n, ...r } = e, i = L(n);
	return /* @__PURE__ */ (0, M.jsx)(ie, {
		...i,
		...r,
		ref: t
	});
});
$e.displayName = Qe;
var et = "MenuSub", [tt, nt] = I(et), rt = (t) => {
	let { __scopeMenu: n, children: r, open: i = !1, onOpenChange: a } = t, o = R(et, n), c = L(n), [l, u] = e(null), [d, f] = e(null), m = D(a);
	return s(() => (o.open === !1 && m(!1), () => m(!1)), [o.open, m]), /* @__PURE__ */ (0, M.jsx)(p, {
		...c,
		children: /* @__PURE__ */ (0, M.jsx)(be, {
			scope: n,
			open: i,
			onOpenChange: m,
			content: d,
			onContentChange: f,
			children: /* @__PURE__ */ (0, M.jsx)(tt, {
				scope: n,
				contentId: y(),
				triggerId: y(),
				trigger: l,
				onTriggerChange: u,
				children: r
			})
		})
	});
};
rt.displayName = et;
var q = "MenuSubTrigger", it = o((e, t) => {
	let n = R(q, e.__scopeMenu), r = z(q, e.__scopeMenu), a = nt(q, e.__scopeMenu), o = V(q, e.__scopeMenu), l = c(null), { pointerGraceTimerRef: u, onPointerGraceIntentChange: d } = o, f = { __scopeMenu: e.__scopeMenu }, p = i(() => {
		l.current && window.clearTimeout(l.current), l.current = null;
	}, []);
	s(() => p, [p]), s(() => {
		let e = u.current;
		return () => {
			window.clearTimeout(e), d(null);
		};
	}, [u, d]);
	let m = C(t, a.onTriggerChange);
	return /* @__PURE__ */ (0, M.jsx)(we, {
		asChild: !0,
		...f,
		children: /* @__PURE__ */ (0, M.jsx)(Re, {
			id: a.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": n.open,
			"aria-controls": n.open ? a.contentId : void 0,
			"data-state": st(n.open),
			...e,
			ref: m,
			onClick: (t) => {
				e.onClick?.(t), !(e.disabled || t.defaultPrevented) && (t.currentTarget.focus(), n.open || n.onOpenChange(!0));
			},
			onPointerMove: v(e.onPointerMove, Y((t) => {
				o.onItemEnter(t), !t.defaultPrevented && !e.disabled && !n.open && !l.current && (o.onPointerGraceIntentChange(null), l.current = window.setTimeout(() => {
					n.onOpenChange(!0), p();
				}, 100));
			})),
			onPointerLeave: v(e.onPointerLeave, Y((e) => {
				p();
				let t = n.content?.getBoundingClientRect();
				if (t) {
					let r = n.content?.dataset.side, i = r === "right", a = i ? -5 : 5, s = t[i ? "left" : "right"], c = t[i ? "right" : "left"];
					o.onPointerGraceIntentChange({
						area: [
							{
								x: e.clientX + a,
								y: e.clientY
							},
							{
								x: s,
								y: t.top
							},
							{
								x: c,
								y: t.top
							},
							{
								x: c,
								y: t.bottom
							},
							{
								x: s,
								y: t.bottom
							}
						],
						side: r
					}), window.clearTimeout(u.current), u.current = window.setTimeout(() => o.onPointerGraceIntentChange(null), 300);
				} else {
					if (o.onTriggerLeave(e), e.defaultPrevented) return;
					o.onPointerGraceIntentChange(null);
				}
			})),
			onKeyDown: v(e.onKeyDown, (t) => {
				let i = o.searchRef.current !== "";
				e.disabled || i && t.key === " " || me[r.dir].includes(t.key) && (n.onOpenChange(!0), n.content?.focus(), t.preventDefault());
			})
		})
	});
});
it.displayName = q;
var at = "MenuSubContent", ot = o((e, t) => {
	let n = De(B, e.__scopeMenu), { forceMount: r = n.forceMount, align: i = "start", ...a } = e, o = R(B, e.__scopeMenu), s = z(B, e.__scopeMenu), l = nt(at, e.__scopeMenu), u = c(null), d = C(t, u);
	return /* @__PURE__ */ (0, M.jsx)(F.Provider, {
		scope: e.__scopeMenu,
		children: /* @__PURE__ */ (0, M.jsx)(_, {
			present: r || o.open,
			children: /* @__PURE__ */ (0, M.jsx)(F.Slot, {
				scope: e.__scopeMenu,
				children: /* @__PURE__ */ (0, M.jsx)(H, {
					id: l.contentId,
					"aria-labelledby": l.triggerId,
					...a,
					ref: d,
					align: i,
					side: s.dir === "rtl" ? "left" : "right",
					disableOutsidePointerEvents: !1,
					disableOutsideScroll: !1,
					trapFocus: !1,
					onOpenAutoFocus: (e) => {
						s.isUsingKeyboardRef.current && u.current?.focus(), e.preventDefault();
					},
					onCloseAutoFocus: (e) => e.preventDefault(),
					onFocusOutside: v(e.onFocusOutside, (e) => {
						e.target !== l.trigger && o.onOpenChange(!1);
					}),
					onEscapeKeyDown: v(e.onEscapeKeyDown, (e) => {
						s.onClose(), e.preventDefault();
					}),
					onKeyDown: v(e.onKeyDown, (e) => {
						let t = e.currentTarget.contains(e.target), n = he[s.dir].includes(e.key);
						t && n && (o.onOpenChange(!1), l.trigger?.focus(), e.preventDefault());
					})
				})
			})
		})
	});
});
ot.displayName = at;
function st(e) {
	return e ? "open" : "closed";
}
function J(e) {
	return e === "indeterminate";
}
function ct(e) {
	return J(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function lt(e) {
	let t = document.activeElement;
	for (let n of e) if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function ut(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
function dt(e, t, n) {
	let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1, a = ut(e, Math.max(i, 0));
	r.length === 1 && (a = a.filter((e) => e !== n));
	let o = a.find((e) => e.toLowerCase().startsWith(r.toLowerCase()));
	return o === n ? void 0 : o;
}
function ft(e, t) {
	let { x: n, y: r } = e, i = !1;
	for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
		let o = t[e], s = t[a], c = o.x, l = o.y, u = s.x, d = s.y;
		l > r != d > r && n < (u - c) * (r - l) / (d - l) + c && (i = !i);
	}
	return i;
}
function pt(e, t) {
	return t ? ft({
		x: e.clientX,
		y: e.clientY
	}, t) : !1;
}
function Y(e) {
	return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var mt = Se, ht = we, gt = Oe, _t = Ae, vt = U, yt = Ie, bt = G, xt = Be, St = We, Ct = Ke, wt = Ye, Tt = Ze, Et = $e, Dt = it, Ot = ot;
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-dropdown-menu@2.1.19_@types+react-dom@18.3.7_@types+react@18.3.31__@typ_c9d8b1b7105c5bcf5811c2d38ad25961/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs
r();
var X = "DropdownMenu", [kt, At] = E(X, [ve]), Z = ve(), [jt, Mt] = kt(X), Nt = (e) => {
	let { __scopeDropdownMenu: t, children: n, dir: r, open: a, defaultOpen: o, onOpenChange: s, modal: l = !0 } = e, u = Z(t), d = c(null), [f, p] = g({
		prop: a,
		defaultProp: o ?? !1,
		onChange: s,
		caller: X
	});
	return /* @__PURE__ */ (0, M.jsx)(jt, {
		scope: t,
		triggerId: y(),
		triggerRef: d,
		contentId: y(),
		open: f,
		onOpenChange: p,
		onOpenToggle: i(() => p((e) => !e), [p]),
		modal: l,
		children: /* @__PURE__ */ (0, M.jsx)(mt, {
			...u,
			open: f,
			onOpenChange: p,
			dir: r,
			modal: l,
			children: n
		})
	});
};
Nt.displayName = X;
var Pt = "DropdownMenuTrigger", Ft = o((e, t) => {
	let { __scopeDropdownMenu: n, disabled: r = !1, ...i } = e, a = Mt(Pt, n), o = Z(n), s = C(t, a.triggerRef);
	return /* @__PURE__ */ (0, M.jsx)(ht, {
		asChild: !0,
		...o,
		children: /* @__PURE__ */ (0, M.jsx)(T.button, {
			type: "button",
			id: a.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": a.open,
			"aria-controls": a.open ? a.contentId : void 0,
			"data-state": a.open ? "open" : "closed",
			"data-disabled": r ? "" : void 0,
			disabled: r,
			...i,
			ref: s,
			onPointerDown: v(e.onPointerDown, (e) => {
				!r && e.button === 0 && e.ctrlKey === !1 && (a.onOpenToggle(), a.open || e.preventDefault());
			}),
			onKeyDown: v(e.onKeyDown, (e) => {
				r || (["Enter", " "].includes(e.key) && a.onOpenToggle(), e.key === "ArrowDown" && a.onOpenChange(!0), [
					"Enter",
					" ",
					"ArrowDown"
				].includes(e.key) && e.preventDefault());
			})
		})
	});
});
Ft.displayName = Pt;
var It = "DropdownMenuPortal", Lt = (e) => {
	let { __scopeDropdownMenu: t, ...n } = e, r = Z(t);
	return /* @__PURE__ */ (0, M.jsx)(gt, {
		...r,
		...n
	});
};
Lt.displayName = It;
var Rt = "DropdownMenuContent", zt = o((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Mt(Rt, n), a = Z(n), o = c(!1);
	return /* @__PURE__ */ (0, M.jsx)(_t, {
		id: i.contentId,
		"aria-labelledby": i.triggerId,
		...a,
		...r,
		ref: t,
		onCloseAutoFocus: v(e.onCloseAutoFocus, (e) => {
			o.current || i.triggerRef.current?.focus(), o.current = !1, e.preventDefault();
		}),
		onInteractOutside: v(e.onInteractOutside, (e) => {
			let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0, r = t.button === 2 || n;
			(!i.modal || r) && (o.current = !0);
		}),
		style: {
			...e.style,
			"--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
zt.displayName = Rt;
var Bt = "DropdownMenuGroup", Vt = o((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Z(n);
	return /* @__PURE__ */ (0, M.jsx)(vt, {
		...i,
		...r,
		ref: t
	});
});
Vt.displayName = Bt;
var Ht = "DropdownMenuLabel", Ut = o((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Z(n);
	return /* @__PURE__ */ (0, M.jsx)(yt, {
		...i,
		...r,
		ref: t
	});
});
Ut.displayName = Ht;
var Wt = "DropdownMenuItem", Gt = o((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Z(n);
	return /* @__PURE__ */ (0, M.jsx)(bt, {
		...i,
		...r,
		ref: t
	});
});
Gt.displayName = Wt;
var Kt = "DropdownMenuCheckboxItem", qt = o((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Z(n);
	return /* @__PURE__ */ (0, M.jsx)(xt, {
		...i,
		...r,
		ref: t
	});
});
qt.displayName = Kt;
var Jt = "DropdownMenuRadioGroup", Yt = o((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Z(n);
	return /* @__PURE__ */ (0, M.jsx)(St, {
		...i,
		...r,
		ref: t
	});
});
Yt.displayName = Jt;
var Xt = "DropdownMenuRadioItem", Zt = o((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Z(n);
	return /* @__PURE__ */ (0, M.jsx)(Ct, {
		...i,
		...r,
		ref: t
	});
});
Zt.displayName = Xt;
var Qt = "DropdownMenuItemIndicator", $t = o((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Z(n);
	return /* @__PURE__ */ (0, M.jsx)(wt, {
		...i,
		...r,
		ref: t
	});
});
$t.displayName = Qt;
var en = "DropdownMenuSeparator", tn = o((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Z(n);
	return /* @__PURE__ */ (0, M.jsx)(Tt, {
		...i,
		...r,
		ref: t
	});
});
tn.displayName = en;
var nn = "DropdownMenuArrow", rn = o((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Z(n);
	return /* @__PURE__ */ (0, M.jsx)(Et, {
		...i,
		...r,
		ref: t
	});
});
rn.displayName = nn;
var an = "DropdownMenuSubTrigger", on = o((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Z(n);
	return /* @__PURE__ */ (0, M.jsx)(Dt, {
		...i,
		...r,
		ref: t
	});
});
on.displayName = an;
var sn = "DropdownMenuSubContent", cn = o((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Z(n);
	return /* @__PURE__ */ (0, M.jsx)(Ot, {
		...i,
		...r,
		ref: t,
		style: {
			...e.style,
			"--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
cn.displayName = sn;
var ln = Ft, un = Lt, dn = zt, fn = Ut, pn = Gt, mn = qt, hn = Zt, gn = $t, _n = tn, vn = on, yn = cn;
//#endregion
//#region ../shade/es/components/ui/dropdown-menu.js
r();
var bn = ln, xn = o(({ className: e, inset: t, children: n, ...r }, i) => /* @__PURE__ */ (0, M.jsxs)(vn, {
	ref: i,
	className: w("flex cursor-default items-center gap-2 rounded-xs px-2 py-1.5 text-control outline-hidden select-none hover:bg-interactive-hover focus:bg-interactive-hover data-[state=open]:bg-interactive-hover [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", t && "pl-8", e),
	...r,
	children: [n, /* @__PURE__ */ (0, M.jsx)(f, { className: "ml-auto" })]
}));
xn.displayName = vn.displayName;
var Sn = o(({ className: e, ...t }, n) => /* @__PURE__ */ (0, M.jsx)("div", {
	className: m,
	children: /* @__PURE__ */ (0, M.jsx)(yn, {
		ref: n,
		className: w("z-50 min-w-[8rem] overflow-hidden rounded-md border border-border/60 bg-surface-elevated-2 p-1 text-popover-foreground shadow-lg data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 dark:border-border/30", e),
		...t
	})
}));
Sn.displayName = yn.displayName;
var Cn = o(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ (0, M.jsx)(un, { children: /* @__PURE__ */ (0, M.jsx)("div", {
	className: m,
	children: /* @__PURE__ */ (0, M.jsx)(dn, {
		ref: r,
		className: w("z-50 min-w-[8rem] overflow-hidden rounded-md border border-border/60 bg-surface-elevated-2 p-1 text-popover-foreground shadow-md dark:border-border/30", "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", e),
		sideOffset: t,
		...n
	})
}) }));
Cn.displayName = dn.displayName;
var wn = o(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ (0, M.jsx)(pn, {
	ref: r,
	className: w("relative flex cursor-pointer items-center gap-2 rounded-xs px-2 py-1.5 text-control outline-hidden transition-colors select-none focus:bg-interactive-hover focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", t && "pl-8", e),
	...n
}));
wn.displayName = pn.displayName;
var Tn = o(({ className: e, children: t, checked: n, ...r }, i) => /* @__PURE__ */ (0, M.jsxs)(mn, {
	ref: i,
	checked: n,
	className: w("relative flex cursor-default items-center rounded-xs py-1.5 pr-2 pl-8 text-control outline-hidden transition-colors select-none focus:bg-interactive-hover focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
	...r,
	children: [/* @__PURE__ */ (0, M.jsx)("span", {
		className: "absolute left-2 flex size-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, M.jsx)(gn, { children: /* @__PURE__ */ (0, M.jsx)(se, { className: "size-4" }) })
	}), t]
}));
Tn.displayName = mn.displayName;
var En = o(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ (0, M.jsxs)(hn, {
	ref: r,
	className: w("relative flex cursor-default items-center rounded-xs py-1.5 pr-2 pl-8 text-control outline-hidden transition-colors select-none focus:bg-interactive-hover focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
	...n,
	children: [/* @__PURE__ */ (0, M.jsx)("span", {
		className: "absolute left-2 flex size-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, M.jsx)(gn, { children: /* @__PURE__ */ (0, M.jsx)(ue, { className: "size-2 fill-current" }) })
	}), t]
}));
En.displayName = hn.displayName;
var Dn = o(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ (0, M.jsx)(fn, {
	ref: r,
	className: w("px-2 py-1.5 text-control font-semibold", t && "pl-8", e),
	...n
}));
Dn.displayName = fn.displayName;
var On = o(({ className: e, ...t }, n) => /* @__PURE__ */ (0, M.jsx)(_n, {
	ref: n,
	className: w("-mx-1 my-1 h-px bg-muted", e),
	...t
}));
On.displayName = _n.displayName;
var kn = ({ className: e, ...t }) => /* @__PURE__ */ (0, M.jsx)("span", {
	className: w("ml-auto text-xs tracking-wider opacity-60", e),
	...t
});
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-tabs@1.1.16_@types+react-dom@18.3.7_@types+react@18.3.31__@types+react@_80fa082efb8fcddc83bf2006e312ed1e/node_modules/@radix-ui/react-tabs/dist/index.mjs
kn.displayName = "DropdownMenuShortcut", r();
var Q = "Tabs", [An, jn] = E(Q, [A]), Mn = A(), [Nn, Pn] = An(Q), Fn = o((e, t) => {
	let { __scopeTabs: n, value: r, onValueChange: i, defaultValue: a, orientation: o = "horizontal", dir: s, activationMode: c = "automatic", ...l } = e, u = k(s), [d, f] = g({
		prop: r,
		onChange: i,
		defaultProp: a ?? "",
		caller: Q
	});
	return /* @__PURE__ */ (0, M.jsx)(Nn, {
		scope: n,
		baseId: y(),
		value: d,
		onValueChange: f,
		orientation: o,
		dir: u,
		activationMode: c,
		children: /* @__PURE__ */ (0, M.jsx)(T.div, {
			dir: u,
			"data-orientation": o,
			...l,
			ref: t
		})
	});
});
Fn.displayName = Q;
var In = "TabsList", Ln = o((e, t) => {
	let { __scopeTabs: n, loop: r = !0, ...i } = e, a = Pn(In, n), o = Mn(n);
	return /* @__PURE__ */ (0, M.jsx)(le, {
		asChild: !0,
		...o,
		orientation: a.orientation,
		dir: a.dir,
		loop: r,
		children: /* @__PURE__ */ (0, M.jsx)(T.div, {
			role: "tablist",
			"aria-orientation": a.orientation,
			...i,
			ref: t
		})
	});
});
Ln.displayName = In;
var Rn = "TabsTrigger", zn = o((e, t) => {
	let { __scopeTabs: n, value: r, disabled: i = !1, ...a } = e, o = Pn(Rn, n), s = Mn(n), c = Hn(o.baseId, r), l = Un(o.baseId, r), u = r === o.value;
	return /* @__PURE__ */ (0, M.jsx)(j, {
		asChild: !0,
		...s,
		focusable: !i,
		active: u,
		children: /* @__PURE__ */ (0, M.jsx)(T.button, {
			type: "button",
			role: "tab",
			"aria-selected": u,
			"aria-controls": l,
			"data-state": u ? "active" : "inactive",
			"data-disabled": i ? "" : void 0,
			disabled: i,
			id: c,
			...a,
			ref: t,
			onMouseDown: v(e.onMouseDown, (e) => {
				!i && e.button === 0 && e.ctrlKey === !1 ? o.onValueChange(r) : e.preventDefault();
			}),
			onKeyDown: v(e.onKeyDown, (e) => {
				[" ", "Enter"].includes(e.key) && o.onValueChange(r);
			}),
			onFocus: v(e.onFocus, () => {
				let e = o.activationMode !== "manual";
				!u && !i && e && o.onValueChange(r);
			})
		})
	});
});
zn.displayName = Rn;
var Bn = "TabsContent", Vn = o((e, t) => {
	let { __scopeTabs: n, value: r, forceMount: i, children: a, ...o } = e, l = Pn(Bn, n), u = Hn(l.baseId, r), d = Un(l.baseId, r), f = r === l.value, p = c(f);
	return s(() => {
		let e = requestAnimationFrame(() => p.current = !1);
		return () => cancelAnimationFrame(e);
	}, []), /* @__PURE__ */ (0, M.jsx)(_, {
		present: i || f,
		children: ({ present: n }) => /* @__PURE__ */ (0, M.jsx)(T.div, {
			"data-state": f ? "active" : "inactive",
			"data-orientation": l.orientation,
			role: "tabpanel",
			"aria-labelledby": u,
			hidden: !n,
			id: d,
			tabIndex: 0,
			...o,
			ref: t,
			style: {
				...e.style,
				animationDuration: p.current ? "0s" : void 0
			},
			children: n && a
		})
	});
});
Vn.displayName = Bn;
function Hn(e, t) {
	return `${e}-trigger-${t}`;
}
function Un(e, t) {
	return `${e}-content-${t}`;
}
var Wn = Fn, Gn = Ln, Kn = zn, qn = Vn;
//#endregion
//#region ../shade/es/components/ui/tabs.js
r();
var $ = n("segmented");
x("", {
	variants: { variant: {
		segmented: "",
		"segmented-sm": "",
		button: "",
		"button-sm": "",
		underline: "",
		navbar: "",
		pill: "",
		kpis: ""
	} },
	defaultVariants: { variant: "segmented" }
});
var Jn = o(({ variant: e = "segmented", ...t }, n) => /* @__PURE__ */ (0, M.jsx)($.Provider, {
	value: e,
	children: /* @__PURE__ */ (0, M.jsx)(Wn, {
		ref: n,
		...t
	})
}));
Jn.displayName = Wn.displayName;
var Yn = x("inline-flex items-center text-muted-foreground", {
	variants: { variant: {
		segmented: "h-(--control-height) rounded-lg bg-muted px-[3px]",
		"segmented-sm": "h-8 rounded-lg bg-muted px-[3px]",
		button: "gap-2",
		"button-sm": "gap-1",
		underline: "no-scrollbar w-full max-w-full gap-5 overflow-x-auto border-b border-border-default",
		navbar: "h-[52px] items-end gap-6",
		pill: "-ml-0.5 h-[30px] gap-px",
		kpis: "border-b ring-0"
	} },
	defaultVariants: { variant: "segmented" }
}), Xn = o(({ className: e, ...n }, r) => {
	let i = t($);
	return /* @__PURE__ */ (0, M.jsx)(Gn, {
		ref: r,
		className: w(Yn({
			variant: i,
			className: e
		})),
		...n
	});
});
Xn.displayName = Gn.displayName;
var Zn = x("inline-flex items-center justify-center px-3 py-1 whitespace-nowrap ring-offset-background transition-all focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: { variant: {
		segmented: "h-7 rounded-md text-control font-medium data-[state=active]:shadow-md",
		"segmented-sm": "h-[26px] rounded-md text-sm font-medium data-[state=active]:shadow-md",
		button: "h-(--control-height) gap-1.5 rounded-md py-2 text-control font-normal hover:bg-muted data-[state=active]:bg-muted-foreground/10 data-[state=active]:font-medium dark:hover:bg-tab-hover dark:data-[state=active]:bg-tab-active dark:data-[state=active]:hover:bg-tab-active",
		"button-sm": "h-6 gap-1.5 rounded-md p-2 text-sm font-normal text-text-secondary hover:bg-muted data-[state=active]:bg-muted-foreground/10 data-[state=active]:font-medium data-[state=active]:text-foreground dark:hover:bg-tab-hover dark:data-[state=active]:bg-tab-active dark:data-[state=active]:hover:bg-tab-active",
		underline: "relative h-9 px-0 text-control font-semibold text-text-secondary after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-foreground after:opacity-0 after:content-[\"\"] hover:after:opacity-10 data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:after:opacity-100!",
		navbar: "relative h-[52px] px-px text-control font-semibold text-muted-foreground after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-foreground after:opacity-0 after:content-[\"\"] hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:after:opacity-100!",
		pill: "relative h-[30px] rounded-md px-3 text-control font-medium text-text-secondary hover:text-foreground data-[state=active]:bg-muted-foreground/10 data-[state=active]:font-semibold data-[state=active]:text-foreground dark:hover:bg-tab-hover dark:data-[state=active]:bg-tab-active dark:data-[state=active]:hover:bg-tab-active",
		kpis: "relative h-full! items-start! rounded-none border-border bg-transparent px-6 py-5 text-foreground ring-0 transition-all after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-foreground after:opacity-0 after:content-[\"\"] first:rounded-tl-md last:rounded-tr-md hover:bg-interactive-hover data-[state=active]:bg-transparent data-[state=active]:after:opacity-100 [&:not(:last-child)]:border-r [&[data-state=active]_[data-type=\"value\"]]:text-foreground"
	} },
	defaultVariants: { variant: "segmented" }
}), Qn = o(({ className: e, onMouseDownCapture: n, ...r }, i) => {
	let a = t($);
	return /* @__PURE__ */ (0, M.jsx)(Kn, {
		ref: i,
		className: w(Zn({
			variant: a,
			className: e
		})),
		onMouseDownCapture: (e) => {
			let t = document.activeElement;
			t instanceof HTMLElement && t.matches("input, textarea, select, [contenteditable=\"true\"]") && t.blur(), n?.(e);
		},
		...r
	});
});
Qn.displayName = Kn.displayName;
var $n = ({ className: e = "", children: t }) => /* @__PURE__ */ (0, M.jsx)("span", {
	className: `mt-px ml-1.5 flex h-5 items-center justify-center rounded-full bg-surface-elevated px-1.5 py-0 text-sm leading-[21px] font-semibold text-text-secondary ${e}`,
	children: t
});
$n.displayName = "TabsTriggerCount";
var er = x("ring-offset-background focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:outline-hidden", {
	variants: { variant: {
		segmented: "",
		"segmented-sm": "",
		button: "",
		"button-sm": "",
		underline: "",
		navbar: "",
		pill: "",
		kpis: "ring-0"
	} },
	defaultVariants: { variant: "segmented" }
}), tr = o(({ className: e, ...n }, r) => {
	let i = t($);
	return /* @__PURE__ */ (0, M.jsx)(qn, {
		ref: r,
		className: w(er({
			variant: i,
			className: e
		})),
		...n
	});
});
tr.displayName = qn.displayName;
var nr = o(({ children: e, className: n, ...r }, i) => {
	let a = t($);
	return /* @__PURE__ */ (0, M.jsxs)("div", {
		className: "relative rounded-md hover:bg-muted",
		children: [/* @__PURE__ */ (0, M.jsx)(Kn, {
			ref: i,
			className: w(Zn({
				variant: a,
				className: n
			})),
			...r,
			children: /* @__PURE__ */ (0, M.jsx)("div", {
				className: "flex items-center gap-2",
				children: e
			})
		}), /* @__PURE__ */ (0, M.jsx)(bn, {
			className: "absolute inset-0 size-full cursor-pointer",
			onClick: (e) => {
				e.preventDefault();
			}
		})]
	});
});
nr.displayName = "TabsDropdownTrigger";
//#endregion
export { $n as a, Qn as i, tr as n, Xn as r, Jn as t };

//# sourceMappingURL=tabs-ogqwoBlb.js.map