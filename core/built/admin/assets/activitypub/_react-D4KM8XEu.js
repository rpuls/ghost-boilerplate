//#region \0rolldown/runtime.js
var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e, t, n) => () => {
	if (n) throw n[0];
	try {
		return e && (t = e(e = 0)), t;
	} catch (e) {
		throw n = [e], e;
	}
}, s = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), c = (e, n) => {
	let r = {};
	for (var i in e) t(r, i, {
		get: e[i],
		enumerable: !0
	});
	return n || t(r, Symbol.toStringTag, { value: "Module" }), r;
}, l = (e, i, o, s) => {
	if (i && typeof i == "object" || typeof i == "function") for (var c = r(i), l = 0, u = c.length, d; l < u; l++) d = c[l], !a.call(e, d) && d !== o && t(e, d, {
		get: ((e) => i[e]).bind(null, d),
		enumerable: !(s = n(i, d)) || s.enumerable
	});
	return e;
}, u = (n, r, a) => (a = n == null ? {} : e(i(n)), l(r || !n || !n.__esModule ? t(a, "default", {
	value: n,
	enumerable: !0
}) : a, n)), d = (e) => a.call(e, "module.exports") ? e["module.exports"] : l(t({}, "__esModule", { value: !0 }), e), f = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), p = /* @__PURE__ */ c({
	Children: () => m,
	Component: () => h,
	Fragment: () => g,
	Profiler: () => _,
	PureComponent: () => v,
	StrictMode: () => y,
	Suspense: () => b,
	__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => x,
	act: () => S,
	cloneElement: () => C,
	createContext: () => w,
	createElement: () => T,
	createFactory: () => E,
	createRef: () => D,
	default: () => O,
	forwardRef: () => k,
	isValidElement: () => A,
	lazy: () => j,
	memo: () => M,
	startTransition: () => N,
	unstable_act: () => P,
	useCallback: () => F,
	useContext: () => I,
	useDebugValue: () => L,
	useDeferredValue: () => R,
	useEffect: () => z,
	useId: () => B,
	useImperativeHandle: () => V,
	useInsertionEffect: () => H,
	useLayoutEffect: () => U,
	useMemo: () => W,
	useReducer: () => G,
	useRef: () => K,
	useState: () => q,
	useSyncExternalStore: () => J,
	useTransition: () => Y,
	version: () => X
}), m, h, g, _, v, y, b, x, S, C, w, T, E, D, O, k, A, j, M, N, P, F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z = o((() => {
	m = React.Children, h = React.Component, g = React.Fragment, _ = React.Profiler, v = React.PureComponent, y = React.StrictMode, b = React.Suspense, x = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, S = React.act, C = React.cloneElement, w = React.createContext, T = React.createElement, E = React.createFactory, D = React.createRef, O = React, k = React.forwardRef, A = React.isValidElement, j = React.lazy, M = React.memo, N = React.startTransition, P = React.unstable_act, F = React.useCallback, I = React.useContext, L = React.useDebugValue, R = React.useDeferredValue, z = React.useEffect, B = React.useId, V = React.useImperativeHandle, H = React.useInsertionEffect, U = React.useLayoutEffect, W = React.useMemo, G = React.useReducer, K = React.useRef, q = React.useState, J = React.useSyncExternalStore, Y = React.useTransition, X = React.version;
}));
//#endregion
export { c as A, G as C, X as D, J as E, d as M, u as N, s as O, W as S, q as T, I as _, O as a, V as b, w as c, Z as d, A as f, F as g, N as h, b as i, f as j, o as k, T as l, M as m, h as n, p as o, j as p, g as r, C as s, m as t, k as u, z as v, K as w, U as x, B as y };
