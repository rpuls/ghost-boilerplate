import { T as e, _ as t, c as n, d as r, g as i, u as a, v as o, w as s } from "./_react-D4KM8XEu.js";
import { S as c } from "./chunk-KS7C4IRE-D4HEcEwi.js";
import { dt as l, ft as u, st as d } from "./routes-Dh3xXfce.js";
import { f, m as p } from "./use-navigate-with-base-path-CAwXTmqH.js";
import { a as m, c as h, i as g } from "./avatar-B3DEDB1l.js";
//#region ../../node_modules/.pnpm/@radix-ui+react-collection@1.1.11_@types+react-dom@18.3.7_@types+react@18.3.31__@types+_d63a01f8f2419583266dd4480c0aa94b/node_modules/@radix-ui/react-collection/dist/index.mjs
r();
var _ = c();
function v(e) {
	let t = e + "CollectionProvider", [n, r] = h(t), [c, l] = n(t, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	}), u = (e) => {
		let { scope: t, children: n } = e, r = s(null), i = s(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ (0, _.jsx)(c, {
			scope: t,
			itemMap: i,
			collectionRef: r,
			children: n
		});
	};
	u.displayName = t;
	let d = e + "CollectionSlot", m = f(d), g = a((e, t) => {
		let { scope: n, children: r } = e, i = p(t, l(d, n).collectionRef);
		return /* @__PURE__ */ (0, _.jsx)(m, {
			ref: i,
			children: r
		});
	});
	g.displayName = d;
	let v = e + "CollectionItemSlot", y = "data-radix-collection-item", b = f(v), x = a((e, t) => {
		let { scope: n, children: r, ...i } = e, a = s(null), c = p(t, a), u = l(v, n);
		return o(() => (u.itemMap.set(a, {
			ref: a,
			...i
		}), () => void u.itemMap.delete(a))), /* @__PURE__ */ (0, _.jsx)(b, {
			[y]: "",
			ref: c,
			children: r
		});
	});
	x.displayName = v;
	function S(t) {
		let n = l(e + "CollectionConsumer", t);
		return i(() => {
			let e = n.collectionRef.current;
			if (!e) return [];
			let t = Array.from(e.querySelectorAll(`[${y}]`));
			return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current));
		}, [n.collectionRef, n.itemMap]);
	}
	return [
		{
			Provider: u,
			Slot: g,
			ItemSlot: x
		},
		S,
		r
	];
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-direction@1.1.2_@types+react@18.3.31_react@18.3.1/node_modules/@radix-ui/react-direction/dist/index.mjs
r();
var y = n(void 0);
function b(e) {
	let n = t(y);
	return e || n || "ltr";
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-roving-focus@1.1.14_@types+react-dom@18.3.7_@types+react@18.3.31__@type_a513f2abd288270d6d7328308a8fd3e4/node_modules/@radix-ui/react-roving-focus/dist/index.mjs
r();
var x = "rovingFocusGroup.onEntryFocus", S = {
	bubbles: !1,
	cancelable: !0
}, C = "RovingFocusGroup", [w, T, E] = v(C), [D, O] = h(C, [E]), [k, A] = D(C), j = a((e, t) => /* @__PURE__ */ (0, _.jsx)(w.Provider, {
	scope: e.__scopeRovingFocusGroup,
	children: /* @__PURE__ */ (0, _.jsx)(w.Slot, {
		scope: e.__scopeRovingFocusGroup,
		children: /* @__PURE__ */ (0, _.jsx)(M, {
			...e,
			ref: t
		})
	})
}));
j.displayName = C;
var M = a((t, n) => {
	let { __scopeRovingFocusGroup: r, orientation: a, loop: c = !1, dir: d, currentTabStopId: f, defaultCurrentTabStopId: h, onCurrentTabStopIdChange: v, onEntryFocus: y, preventScrollOnEntryFocus: w = !1, ...E } = t, D = s(null), O = p(n, D), A = b(d), [j, M] = l({
		prop: f,
		defaultProp: h ?? null,
		onChange: v,
		caller: C
	}), [N, P] = e(!1), F = g(y), I = T(r), L = s(!1), [z, B] = e(0);
	return o(() => {
		let e = D.current;
		if (e) return e.addEventListener(x, F), () => e.removeEventListener(x, F);
	}, [F]), /* @__PURE__ */ (0, _.jsx)(k, {
		scope: r,
		orientation: a,
		dir: A,
		loop: c,
		currentTabStopId: j,
		onItemFocus: i((e) => M(e), [M]),
		onItemShiftTab: i(() => P(!0), []),
		onFocusableItemAdd: i(() => B((e) => e + 1), []),
		onFocusableItemRemove: i(() => B((e) => e - 1), []),
		children: /* @__PURE__ */ (0, _.jsx)(m.div, {
			tabIndex: N || z === 0 ? -1 : 0,
			"data-orientation": a,
			...E,
			ref: O,
			style: {
				outline: "none",
				...t.style
			},
			onMouseDown: u(t.onMouseDown, () => {
				L.current = !0;
			}),
			onFocus: u(t.onFocus, (e) => {
				let t = !L.current;
				if (e.target === e.currentTarget && t && !N) {
					let t = new CustomEvent(x, S);
					if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
						let e = I().filter((e) => e.focusable);
						R([
							e.find((e) => e.active),
							e.find((e) => e.id === j),
							...e
						].filter(Boolean).map((e) => e.ref.current), w);
					}
				}
				L.current = !1;
			}),
			onBlur: u(t.onBlur, () => P(!1))
		})
	});
}), N = "RovingFocusGroupItem", P = a((e, t) => {
	let { __scopeRovingFocusGroup: n, focusable: r = !0, active: i = !1, tabStopId: a, children: s, ...c } = e, l = d(), f = a || l, p = A(N, n), h = p.currentTabStopId === f, g = T(n), { onFocusableItemAdd: v, onFocusableItemRemove: y, currentTabStopId: b } = p;
	return o(() => {
		if (r) return v(), () => y();
	}, [
		r,
		v,
		y
	]), /* @__PURE__ */ (0, _.jsx)(w.ItemSlot, {
		scope: n,
		id: f,
		focusable: r,
		active: i,
		children: /* @__PURE__ */ (0, _.jsx)(m.span, {
			tabIndex: h ? 0 : -1,
			"data-orientation": p.orientation,
			...c,
			ref: t,
			onMouseDown: u(e.onMouseDown, (e) => {
				r ? p.onItemFocus(f) : e.preventDefault();
			}),
			onFocus: u(e.onFocus, () => p.onItemFocus(f)),
			onKeyDown: u(e.onKeyDown, (e) => {
				if (e.key === "Tab" && e.shiftKey) {
					p.onItemShiftTab();
					return;
				}
				if (e.target !== e.currentTarget) return;
				let t = L(e, p.orientation, p.dir);
				if (t !== void 0) {
					if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
					e.preventDefault();
					let n = g().filter((e) => e.focusable).map((e) => e.ref.current);
					if (t === "last") n.reverse();
					else if (t === "prev" || t === "next") {
						t === "prev" && n.reverse();
						let r = n.indexOf(e.currentTarget);
						n = p.loop ? z(n, r + 1) : n.slice(r + 1);
					}
					setTimeout(() => R(n));
				}
			}),
			children: typeof s == "function" ? s({
				isCurrentTabStop: h,
				hasTabStop: b != null
			}) : s
		})
	});
});
P.displayName = N;
var F = {
	ArrowLeft: "prev",
	ArrowUp: "prev",
	ArrowRight: "next",
	ArrowDown: "next",
	PageUp: "first",
	Home: "first",
	PageDown: "last",
	End: "last"
};
function I(e, t) {
	return t === "rtl" ? e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e : e;
}
function L(e, t, n) {
	let r = I(e.key, n);
	if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))) return F[r];
}
function R(e, t = !1) {
	let n = document.activeElement;
	for (let r of e) if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function z(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
var B = j, V = P;
//#endregion
export { v as a, b as i, B as n, O as r, V as t };

//# sourceMappingURL=dist-Ba_QxHHl.js.map