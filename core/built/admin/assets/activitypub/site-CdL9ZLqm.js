import { S as e, T as t, d as n, g as r, u as i, v as a, w as o } from "./_react-D4KM8XEu.js";
import { S as s } from "./chunk-KS7C4IRE-D4HEcEwi.js";
import { r as c } from "./users-BLeiOTHc.js";
import { at as l, bt as u, dt as d, et as f, ft as p, it as m, nt as h, ot as g, rt as _, st as ee, tt as v, ut as y } from "./routes-Dh3xXfce.js";
import { m as b, p as x, y as S } from "./use-navigate-with-base-path-CAwXTmqH.js";
import { a as C, c as w } from "./avatar-B3DEDB1l.js";
//#region ../../node_modules/.pnpm/@radix-ui+react-visually-hidden@1.2.7_@types+react-dom@18.3.7_@types+react@18.3.31__@ty_c850badfde3651ed5cb7d90f2934dc1f/node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
n();
var T = s(), E = Object.freeze({
	position: "absolute",
	border: 0,
	width: 1,
	height: 1,
	padding: 0,
	margin: -1,
	overflow: "hidden",
	clip: "rect(0, 0, 0, 0)",
	whiteSpace: "nowrap",
	wordWrap: "normal"
}), D = "VisuallyHidden", O = i((e, t) => /* @__PURE__ */ (0, T.jsx)(C.span, {
	...e,
	ref: t,
	style: {
		...E,
		...e.style
	}
}));
O.displayName = D;
var k = O;
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-tooltip@1.2.11_@types+react-dom@18.3.7_@types+react@18.3.31__@types+rea_88c151721934f8683fe33b633effbc1c/node_modules/@radix-ui/react-tooltip/dist/index.mjs
n();
var [A, te] = w("Tooltip", [g]), j = g(), M = "TooltipProvider", N = 700, P = "tooltip.open", [ne, F] = A(M), I = (e) => {
	let { __scopeTooltip: t, delayDuration: n = N, skipDelayDuration: i = 300, disableHoverableContent: s = !1, children: c } = e, l = o(!0), u = o(!1), d = o(0);
	return a(() => {
		let e = d.current;
		return () => window.clearTimeout(e);
	}, []), /* @__PURE__ */ (0, T.jsx)(ne, {
		scope: t,
		isOpenDelayedRef: l,
		delayDuration: n,
		onOpen: r(() => {
			i <= 0 || (window.clearTimeout(d.current), l.current = !1);
		}, [i]),
		onClose: r(() => {
			i <= 0 || (window.clearTimeout(d.current), d.current = window.setTimeout(() => l.current = !0, i));
		}, [i]),
		isPointerInTransitRef: u,
		onPointerInTransitChange: r((e) => {
			u.current = e;
		}, []),
		disableHoverableContent: s,
		children: c
	});
};
I.displayName = M;
var L = "Tooltip", [R, z] = A(L), B = (n) => {
	let { __scopeTooltip: i, children: s, open: c, defaultOpen: u, onOpenChange: f, disableHoverableContent: p, delayDuration: m } = n, h = F(L, n.__scopeTooltip), g = j(i), [_, v] = t(null), y = ee(), b = o(0), x = p ?? h.disableHoverableContent, S = m ?? h.delayDuration, C = o(!1), [w, E] = d({
		prop: c,
		defaultProp: u ?? !1,
		onChange: (e) => {
			e ? (h.onOpen(), document.dispatchEvent(new CustomEvent(P))) : h.onClose(), f?.(e);
		},
		caller: L
	}), D = e(() => w ? C.current ? "delayed-open" : "instant-open" : "closed", [w]), O = r(() => {
		window.clearTimeout(b.current), b.current = 0, C.current = !1, E(!0);
	}, [E]), k = r(() => {
		window.clearTimeout(b.current), b.current = 0, E(!1);
	}, [E]), A = r(() => {
		window.clearTimeout(b.current), b.current = window.setTimeout(() => {
			C.current = !0, E(!0), b.current = 0;
		}, S);
	}, [S, E]);
	return a(() => () => {
		b.current &&= (window.clearTimeout(b.current), 0);
	}, []), /* @__PURE__ */ (0, T.jsx)(l, {
		...g,
		children: /* @__PURE__ */ (0, T.jsx)(R, {
			scope: i,
			contentId: y,
			open: w,
			stateAttribute: D,
			trigger: _,
			onTriggerChange: v,
			onTriggerEnter: r(() => {
				h.isOpenDelayedRef.current ? A() : O();
			}, [
				h.isOpenDelayedRef,
				A,
				O
			]),
			onTriggerLeave: r(() => {
				x ? k() : (window.clearTimeout(b.current), b.current = 0);
			}, [k, x]),
			onOpen: O,
			onClose: k,
			disableHoverableContent: x,
			children: s
		})
	});
};
B.displayName = L;
var V = "TooltipTrigger", H = i((e, t) => {
	let { __scopeTooltip: n, ...i } = e, s = z(V, n), c = F(V, n), l = j(n), u = b(t, o(null), s.onTriggerChange), d = o(!1), f = o(!1), m = r(() => d.current = !1, []);
	return a(() => () => document.removeEventListener("pointerup", m), [m]), /* @__PURE__ */ (0, T.jsx)(h, {
		asChild: !0,
		...l,
		children: /* @__PURE__ */ (0, T.jsx)(C.button, {
			"aria-describedby": s.open ? s.contentId : void 0,
			"data-state": s.stateAttribute,
			...i,
			ref: u,
			onPointerMove: p(e.onPointerMove, (e) => {
				e.pointerType !== "touch" && !f.current && !c.isPointerInTransitRef.current && (s.onTriggerEnter(), f.current = !0);
			}),
			onPointerLeave: p(e.onPointerLeave, () => {
				s.onTriggerLeave(), f.current = !1;
			}),
			onPointerDown: p(e.onPointerDown, () => {
				s.open && s.onClose(), d.current = !0, document.addEventListener("pointerup", m, { once: !0 });
			}),
			onFocus: p(e.onFocus, () => {
				d.current || s.onOpen();
			}),
			onBlur: p(e.onBlur, s.onClose),
			onClick: p(e.onClick, s.onClose)
		})
	});
});
H.displayName = V;
var U = "TooltipPortal", [re, ie] = A(U, { forceMount: void 0 }), W = (e) => {
	let { __scopeTooltip: t, forceMount: n, children: r, container: i } = e, a = z(U, t);
	return /* @__PURE__ */ (0, T.jsx)(re, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ (0, T.jsx)(f, {
			present: n || a.open,
			children: /* @__PURE__ */ (0, T.jsx)(v, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
};
W.displayName = U;
var G = "TooltipContent", K = i((e, t) => {
	let n = ie(G, e.__scopeTooltip), { forceMount: r = n.forceMount, side: i = "top", ...a } = e, o = z(G, e.__scopeTooltip);
	return /* @__PURE__ */ (0, T.jsx)(f, {
		present: r || o.open,
		children: o.disableHoverableContent ? /* @__PURE__ */ (0, T.jsx)(X, {
			side: i,
			...a,
			ref: t
		}) : /* @__PURE__ */ (0, T.jsx)(q, {
			side: i,
			...a,
			ref: t
		})
	});
}), q = i((e, n) => {
	let i = z(G, e.__scopeTooltip), s = F(G, e.__scopeTooltip), c = o(null), l = b(n, c), [u, d] = t(null), { trigger: f, onClose: p } = i, m = c.current, { onPointerInTransitChange: h } = s, g = r(() => {
		d(null), h(!1);
	}, [h]), _ = r((e, t) => {
		let n = e.currentTarget, r = {
			x: e.clientX,
			y: e.clientY
		}, i = ce(r, se(r, n.getBoundingClientRect())), a = le(t.getBoundingClientRect()), o = de([...i, ...a]);
		d(o), h(!0);
	}, [h]);
	return a(() => () => g(), [g]), a(() => {
		if (f && m) {
			let e = (e) => _(e, m), t = (e) => _(e, f);
			return f.addEventListener("pointerleave", e), m.addEventListener("pointerleave", t), () => {
				f.removeEventListener("pointerleave", e), m.removeEventListener("pointerleave", t);
			};
		}
	}, [
		f,
		m,
		_,
		g
	]), a(() => {
		if (u) {
			let e = (e) => {
				let t = e.target, n = {
					x: e.clientX,
					y: e.clientY
				}, r = f?.contains(t) || m?.contains(t), i = !ue(n, u);
				r ? g() : i && (g(), p());
			};
			return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e);
		}
	}, [
		f,
		m,
		u,
		p,
		g
	]), /* @__PURE__ */ (0, T.jsx)(X, {
		...e,
		ref: l
	});
}), [J, Y] = A(L, { isInside: !1 }), ae = x("TooltipContent"), X = i((e, t) => {
	let { __scopeTooltip: n, children: r, "aria-label": i, onEscapeKeyDown: o, onPointerDownOutside: s, ...c } = e, l = z(G, n), u = j(n), { onClose: d } = l;
	return a(() => (document.addEventListener(P, d), () => document.removeEventListener(P, d)), [d]), a(() => {
		if (l.trigger) {
			let e = (e) => {
				e.target instanceof Node && e.target.contains(l.trigger) && d();
			};
			return window.addEventListener("scroll", e, { capture: !0 }), () => window.removeEventListener("scroll", e, { capture: !0 });
		}
	}, [l.trigger, d]), /* @__PURE__ */ (0, T.jsx)(y, {
		asChild: !0,
		disableOutsidePointerEvents: !1,
		onEscapeKeyDown: o,
		onPointerDownOutside: s,
		onFocusOutside: (e) => e.preventDefault(),
		onDismiss: d,
		children: /* @__PURE__ */ (0, T.jsxs)(m, {
			"data-state": l.stateAttribute,
			...u,
			...c,
			ref: t,
			style: {
				...c.style,
				"--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
				"--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
				"--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
				"--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
				"--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
			},
			children: [/* @__PURE__ */ (0, T.jsx)(ae, { children: r }), /* @__PURE__ */ (0, T.jsx)(J, {
				scope: n,
				isInside: !0,
				children: /* @__PURE__ */ (0, T.jsx)(k, {
					id: l.contentId,
					role: "tooltip",
					children: i || r
				})
			})]
		})
	});
});
K.displayName = G;
var Z = "TooltipArrow", oe = i((e, t) => {
	let { __scopeTooltip: n, ...r } = e, i = j(n);
	return Y(Z, n).isInside ? null : /* @__PURE__ */ (0, T.jsx)(_, {
		...i,
		...r,
		ref: t
	});
});
oe.displayName = Z;
function se(e, t) {
	let n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), i = Math.abs(t.right - e.x), a = Math.abs(t.left - e.x);
	switch (Math.min(n, r, i, a)) {
		case a: return "left";
		case i: return "right";
		case n: return "top";
		case r: return "bottom";
		default: throw Error("unreachable");
	}
}
function ce(e, t, n = 5) {
	let r = [];
	switch (t) {
		case "top":
			r.push({
				x: e.x - n,
				y: e.y + n
			}, {
				x: e.x + n,
				y: e.y + n
			});
			break;
		case "bottom":
			r.push({
				x: e.x - n,
				y: e.y - n
			}, {
				x: e.x + n,
				y: e.y - n
			});
			break;
		case "left":
			r.push({
				x: e.x + n,
				y: e.y - n
			}, {
				x: e.x + n,
				y: e.y + n
			});
			break;
		case "right":
			r.push({
				x: e.x - n,
				y: e.y - n
			}, {
				x: e.x - n,
				y: e.y + n
			});
			break;
	}
	return r;
}
function le(e) {
	let { top: t, right: n, bottom: r, left: i } = e;
	return [
		{
			x: i,
			y: t
		},
		{
			x: n,
			y: t
		},
		{
			x: n,
			y: r
		},
		{
			x: i,
			y: r
		}
	];
}
function ue(e, t) {
	let { x: n, y: r } = e, i = !1;
	for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
		let o = t[e], s = t[a], c = o.x, l = o.y, u = s.x, d = s.y;
		l > r != d > r && n < (u - c) * (r - l) / (d - l) + c && (i = !i);
	}
	return i;
}
function de(e) {
	let t = e.slice();
	return t.sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : +(e.y > t.y)), fe(t);
}
function fe(e) {
	if (e.length <= 1) return e.slice();
	let t = [];
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (; t.length >= 2;) {
			let e = t[t.length - 1], n = t[t.length - 2];
			if ((e.x - n.x) * (r.y - n.y) >= (e.y - n.y) * (r.x - n.x)) t.pop();
			else break;
		}
		t.push(r);
	}
	t.pop();
	let n = [];
	for (let t = e.length - 1; t >= 0; t--) {
		let r = e[t];
		for (; n.length >= 2;) {
			let e = n[n.length - 1], t = n[n.length - 2];
			if ((e.x - t.x) * (r.y - t.y) >= (e.y - t.y) * (r.x - t.x)) n.pop();
			else break;
		}
		n.push(r);
	}
	return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var pe = I, me = B, he = H, ge = W, Q = K;
//#endregion
//#region ../shade/es/components/ui/tooltip.js
n();
var _e = pe, ve = me, ye = he, $ = i(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ (0, T.jsx)(ge, { children: /* @__PURE__ */ (0, T.jsx)("div", {
	className: u,
	children: /* @__PURE__ */ (0, T.jsx)(Q, {
		ref: r,
		className: S("z-50 animate-in overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 dark:bg-popover dark:text-popover-foreground", e),
		sideOffset: t,
		...n
	})
}) }));
$.displayName = Q.displayName;
//#endregion
//#region ../admin-x-framework/dist/api/site.js
var be = c({
	dataType: "SiteResponseType",
	path: "/site/"
});
//#endregion
export { ye as a, _e as i, ve as n, $ as r, be as t };

//# sourceMappingURL=site-CdL9ZLqm.js.map