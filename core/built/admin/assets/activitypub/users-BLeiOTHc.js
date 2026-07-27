import { E as e, S as t, T as n, _ as r, a as i, c as a, d as o, g as s, v as c } from "./_react-D4KM8XEu.js";
import { A as l, B as u, C as d, D as f, E as p, F as m, I as h, L as g, M as _, N as v, O as y, P as b, R as x, S, T as C, V as w, _ as T, b as ee, j as E, k as D, p as te, v as O, w as k, x as A, y as j, z as M } from "./chunk-KS7C4IRE-D4HEcEwi.js";
//#region ../../node_modules/.pnpm/@tanstack+query-core@5.101.2/node_modules/@tanstack/query-core/build/modern/queryObserver.js
var N = class extends w {
	constructor(e, t) {
		super(), this.options = t, this.#e = e, this.#s = null, this.#o = y(), this.bindMethods(), this.setOptions(t);
	}
	#e;
	#t = void 0;
	#n = void 0;
	#r = void 0;
	#i;
	#a;
	#o;
	#s;
	#c;
	#l;
	#u;
	#d;
	#f;
	#p;
	#m = /* @__PURE__ */ new Set();
	bindMethods() {
		this.refetch = this.refetch.bind(this);
	}
	onSubscribe() {
		this.listeners.size === 1 && (this.#t.addObserver(this), F(this.#t, this.options) ? this.#h() : this.updateResult(), this.#y());
	}
	onUnsubscribe() {
		this.hasListeners() || this.destroy();
	}
	shouldFetchOnReconnect() {
		return I(this.#t, this.options, this.options.refetchOnReconnect);
	}
	shouldFetchOnWindowFocus() {
		return I(this.#t, this.options, this.options.refetchOnWindowFocus);
	}
	destroy() {
		this.listeners = /* @__PURE__ */ new Set(), this.#b(), this.#x(), this.#t.removeObserver(this);
	}
	setOptions(e) {
		let t = this.options, n = this.#t;
		if (this.options = this.#e.defaultQueryOptions(e), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof b(this.options.enabled, this.#t) != "boolean") throw Error("Expected enabled to be a boolean or a callback that returns a boolean");
		this.#S(), this.#t.setOptions(this.options), t._defaulted && !h(this.options, t) && this.#e.getQueryCache().notify({
			type: "observerOptionsUpdated",
			query: this.#t,
			observer: this
		});
		let r = this.hasListeners();
		r && L(this.#t, n, this.options, t) && this.#h(), this.updateResult(), r && (this.#t !== n || b(this.options.enabled, this.#t) !== b(t.enabled, this.#t) || m(this.options.staleTime, this.#t) !== m(t.staleTime, this.#t)) && this.#g();
		let i = this.#_();
		r && (this.#t !== n || b(this.options.enabled, this.#t) !== b(t.enabled, this.#t) || i !== this.#p) && this.#v(i);
	}
	getOptimisticResult(e) {
		let t = this.#e.getQueryCache().build(this.#e, e), n = this.createResult(t, e);
		return ne(this, n) && (this.#r = n, this.#a = this.options, this.#i = this.#t.state), n;
	}
	getCurrentResult() {
		return this.#r;
	}
	trackResult(e, t) {
		return new Proxy(e, { get: (e, n) => (this.trackProp(n), t?.(n), n === "promise" && (this.trackProp("data"), !this.options.experimental_prefetchInRender && this.#o.status === "pending" && this.#o.reject(/* @__PURE__ */ Error("experimental_prefetchInRender feature flag is not enabled"))), Reflect.get(e, n)) });
	}
	trackProp(e) {
		this.#m.add(e);
	}
	getCurrentQuery() {
		return this.#t;
	}
	refetch({ ...e } = {}) {
		return this.fetch({ ...e });
	}
	fetchOptimistic(e) {
		let t = this.#e.defaultQueryOptions(e), n = this.#e.getQueryCache().build(this.#e, t);
		return n.fetch().then(() => this.createResult(n, t));
	}
	fetch(e) {
		return this.#h({
			...e,
			cancelRefetch: e.cancelRefetch ?? !0
		}).then(() => (this.updateResult(), this.#r));
	}
	#h(e) {
		this.#S();
		let t = this.#t.fetch(this.options, e);
		return e?.throwOnError || (t = t.catch(_)), t;
	}
	#g() {
		this.#b();
		let e = m(this.options.staleTime, this.#t);
		if (D.isServer() || this.#r.isStale || !E(e)) return;
		let t = x(this.#r.dataUpdatedAt, e) + 1;
		this.#d = M.setTimeout(() => {
			this.#r.isStale || this.updateResult();
		}, t);
	}
	#_() {
		return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(this.#t) : this.options.refetchInterval) ?? !1;
	}
	#v(e) {
		this.#x(), this.#p = e, !(D.isServer() || b(this.options.enabled, this.#t) === !1 || !E(this.#p) || this.#p === 0) && (this.#f = M.setInterval(() => {
			(this.options.refetchIntervalInBackground || u.isFocused()) && this.#h();
		}, this.#p));
	}
	#y() {
		this.#g(), this.#v(this.#_());
	}
	#b() {
		this.#d !== void 0 && (M.clearTimeout(this.#d), this.#d = void 0);
	}
	#x() {
		this.#f !== void 0 && (M.clearInterval(this.#f), this.#f = void 0);
	}
	createResult(e, t) {
		let n = this.#t, r = this.options, i = this.#r, a = this.#i, o = this.#a, s = e === n ? this.#n : e.state, { state: c } = e, l = { ...c }, u = !1, d;
		if (t._optimisticResults) {
			let i = this.hasListeners(), a = !i && F(e, t), o = i && L(e, n, t, r);
			(a || o) && (l = {
				...l,
				...k(c.data, e.options)
			}), t._optimisticResults === "isRestoring" && (l.fetchStatus = "idle");
		}
		let { error: f, errorUpdatedAt: p, status: m } = l;
		d = l.data;
		let h = !1;
		if (t.placeholderData !== void 0 && d === void 0 && m === "pending") {
			let e;
			i?.isPlaceholderData && t.placeholderData === o?.placeholderData ? (e = i.data, h = !0) : e = typeof t.placeholderData == "function" ? t.placeholderData(this.#u?.state.data, this.#u) : t.placeholderData, e !== void 0 && (m = "success", d = v(i?.data, e, t), u = !0);
		}
		if (t.select && d !== void 0 && !h) if (i && d === a?.data && t.select === this.#c) d = this.#l;
		else try {
			this.#c = t.select, d = t.select(d), d = v(i?.data, d, t), this.#l = d, this.#s = null;
		} catch (e) {
			this.#s = e;
		}
		this.#s && (f = this.#s, d = this.#l, p = Date.now(), m = "error");
		let g = l.fetchStatus === "fetching", _ = m === "pending", x = m === "error", S = _ && g, C = d !== void 0, w = {
			status: m,
			fetchStatus: l.fetchStatus,
			isPending: _,
			isSuccess: m === "success",
			isError: x,
			isInitialLoading: S,
			isLoading: S,
			data: d,
			dataUpdatedAt: l.dataUpdatedAt,
			error: f,
			errorUpdatedAt: p,
			failureCount: l.fetchFailureCount,
			failureReason: l.fetchFailureReason,
			errorUpdateCount: l.errorUpdateCount,
			isFetched: e.isFetched(),
			isFetchedAfterMount: l.dataUpdateCount > s.dataUpdateCount || l.errorUpdateCount > s.errorUpdateCount,
			isFetching: g,
			isRefetching: g && !_,
			isLoadingError: x && !C,
			isPaused: l.fetchStatus === "paused",
			isPlaceholderData: u,
			isRefetchError: x && C,
			isStale: R(e, t),
			refetch: this.refetch,
			promise: this.#o,
			isEnabled: b(t.enabled, e) !== !1
		};
		if (this.options.experimental_prefetchInRender) {
			let t = w.data !== void 0, r = w.status === "error" && !t, i = (e) => {
				r ? e.reject(w.error) : t && e.resolve(w.data);
			}, a = () => {
				let e = this.#o = w.promise = y();
				i(e);
			}, o = this.#o;
			switch (o.status) {
				case "pending":
					e.queryHash === n.queryHash && i(o);
					break;
				case "fulfilled":
					(r || w.data !== o.value) && a();
					break;
				case "rejected":
					(!r || w.error !== o.reason) && a();
					break;
			}
		}
		return w;
	}
	updateResult() {
		let e = this.#r, t = this.createResult(this.#t, this.options);
		this.#i = this.#t.state, this.#a = this.options, this.#i.data !== void 0 && (this.#u = this.#t), !h(t, e) && (this.#r = t, this.#C({ listeners: (() => {
			if (!e) return !0;
			let { notifyOnChangeProps: t } = this.options, n = typeof t == "function" ? t() : t;
			if (n === "all" || !n && !this.#m.size) return !0;
			let r = new Set(n ?? this.#m);
			return this.options.throwOnError && r.add("error"), Object.keys(this.#r).some((t) => {
				let n = t;
				return this.#r[n] !== e[n] && r.has(n);
			});
		})() }));
	}
	#S() {
		let e = this.#e.getQueryCache().build(this.#e, this.options);
		if (e === this.#t) return;
		let t = this.#t;
		this.#t = e, this.#n = e.state, this.hasListeners() && (t?.removeObserver(this), e.addObserver(this));
	}
	onQueryUpdate() {
		this.updateResult(), this.hasListeners() && this.#y();
	}
	#C(e) {
		f.batch(() => {
			e.listeners && this.listeners.forEach((e) => {
				e(this.#r);
			}), this.#e.getQueryCache().notify({
				query: this.#t,
				type: "observerResultsUpdated"
			});
		});
	}
};
function P(e, t) {
	return b(t.enabled, e) !== !1 && e.state.data === void 0 && !(e.state.status === "error" && b(t.retryOnMount, e) === !1);
}
function F(e, t) {
	return P(e, t) || e.state.data !== void 0 && I(e, t, t.refetchOnMount);
}
function I(e, t, n) {
	if (b(t.enabled, e) !== !1 && m(t.staleTime, e) !== "static") {
		let r = typeof n == "function" ? n(e) : n;
		return r === "always" || r !== !1 && R(e, t);
	}
	return !1;
}
function L(e, t, n, r) {
	return (e !== t || b(r.enabled, e) === !1) && (!n.suspense || e.state.status !== "error") && R(e, n);
}
function R(e, t) {
	return b(t.enabled, e) !== !1 && e.isStaleByTime(m(t.staleTime, e));
}
function ne(e, t) {
	return !h(e.getCurrentResult(), t);
}
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+query-core@5.101.2/node_modules/@tanstack/query-core/build/modern/infiniteQueryObserver.js
var re = class extends N {
	constructor(e, t) {
		super(e, t);
	}
	bindMethods() {
		super.bindMethods(), this.fetchNextPage = this.fetchNextPage.bind(this), this.fetchPreviousPage = this.fetchPreviousPage.bind(this);
	}
	setOptions(e) {
		e._type = "infinite", super.setOptions(e);
	}
	getOptimisticResult(e) {
		return e._type = "infinite", super.getOptimisticResult(e);
	}
	fetchNextPage(e) {
		return this.fetch({
			...e,
			meta: { fetchMore: { direction: "forward" } }
		});
	}
	fetchPreviousPage(e) {
		return this.fetch({
			...e,
			meta: { fetchMore: { direction: "backward" } }
		});
	}
	createResult(e, t) {
		let { state: n } = e, r = super.createResult(e, t), { isFetching: i, isRefetching: a, isError: o, isRefetchError: s } = r, c = n.fetchMeta?.fetchMore?.direction, l = o && c === "forward", u = i && c === "forward", d = o && c === "backward", f = i && c === "backward";
		return {
			...r,
			fetchNextPage: this.fetchNextPage,
			fetchPreviousPage: this.fetchPreviousPage,
			hasNextPage: C(t, n.data),
			hasPreviousPage: p(t, n.data),
			isFetchNextPageError: l,
			isFetchingNextPage: u,
			isFetchPreviousPageError: d,
			isFetchingPreviousPage: f,
			isRefetchError: s && !l && !d,
			isRefetching: a && !u && !f
		};
	}
}, ie = class extends w {
	#e;
	#t = void 0;
	#n;
	#r;
	constructor(e, t) {
		super(), this.#e = e, this.setOptions(t), this.bindMethods(), this.#i();
	}
	bindMethods() {
		this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
	}
	setOptions(e) {
		let t = this.options;
		this.options = this.#e.defaultMutationOptions(e), h(this.options, t) || this.#e.getMutationCache().notify({
			type: "observerOptionsUpdated",
			mutation: this.#n,
			observer: this
		}), t?.mutationKey && this.options.mutationKey && l(t.mutationKey) !== l(this.options.mutationKey) ? this.reset() : this.#n?.state.status === "pending" && this.#n.setOptions(this.options);
	}
	onUnsubscribe() {
		this.hasListeners() || this.#n?.removeObserver(this);
	}
	onMutationUpdate(e) {
		this.#i(), this.#a(e);
	}
	getCurrentResult() {
		return this.#t;
	}
	reset() {
		this.#n?.removeObserver(this), this.#n = void 0, this.#i(), this.#a();
	}
	mutate(e, t) {
		return this.#r = t, this.#n?.removeObserver(this), this.#n = this.#e.getMutationCache().build(this.#e, this.options), this.#n.addObserver(this), this.#n.execute(e);
	}
	#i() {
		let e = this.#n?.state ?? d();
		this.#t = {
			...e,
			isPending: e.status === "pending",
			isSuccess: e.status === "success",
			isError: e.status === "error",
			isIdle: e.status === "idle",
			mutate: this.mutate,
			reset: this.reset
		};
	}
	#a(e) {
		f.batch(() => {
			if (this.#r && this.hasListeners()) {
				let t = this.#t.variables, n = this.#t.context, r = {
					client: this.#e,
					meta: this.options.meta,
					mutationKey: this.options.mutationKey
				};
				if (e?.type === "success") {
					try {
						this.#r.onSuccess?.(e.data, t, n, r);
					} catch (e) {
						Promise.reject(e);
					}
					try {
						this.#r.onSettled?.(e.data, null, t, n, r);
					} catch (e) {
						Promise.reject(e);
					}
				} else if (e?.type === "error") {
					try {
						this.#r.onError?.(e.error, t, n, r);
					} catch (e) {
						Promise.reject(e);
					}
					try {
						this.#r.onSettled?.(void 0, e.error, t, n, r);
					} catch (e) {
						Promise.reject(e);
					}
				}
			}
			this.listeners.forEach((e) => {
				e(this.#t);
			});
		});
	}
};
S(), o();
var ae = a(!1), z = () => r(ae);
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+react-query@5.101.2_react@18.3.1/node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js
ae.Provider, o();
function oe() {
	let e = !1;
	return {
		clearReset: () => {
			e = !1;
		},
		reset: () => {
			e = !0;
		},
		isReset: () => e
	};
}
var B = a(oe()), se = () => r(B);
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+react-query@5.101.2_react@18.3.1/node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js
o();
var ce = (e, t, n) => {
	let r = n?.state.error && typeof e.throwOnError == "function" ? g(e.throwOnError, [n.state.error, n]) : e.throwOnError;
	(e.suspense || e.experimental_prefetchInRender || r) && (t.isReset() || (e.retryOnMount = !1));
}, V = (e) => {
	c(() => {
		e.clearReset();
	}, [e]);
}, H = ({ result: e, errorResetBoundary: t, throwOnError: n, query: r, suspense: i }) => e.isError && !t.isReset() && !e.isFetching && r && (i && e.data === void 0 || g(n, [e.error, r])), le = (e) => {
	if (e.suspense) {
		let t = 1e3, n = (e) => e === "static" ? e : Math.max(e ?? t, t), r = e.staleTime;
		e.staleTime = typeof r == "function" ? (...e) => n(r(...e)) : n(r), typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, t));
	}
}, ue = (e, t) => e.isLoading && e.isFetching && !t, U = (e, t) => e?.suspense && t.isPending, de = (e, t, n) => t.fetchOptimistic(e).catch(() => {
	n.clearReset();
});
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+react-query@5.101.2_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useBaseQuery.js
o();
function fe(t, r, i) {
	let a = z(), o = se(), l = A(i), u = l.defaultQueryOptions(t);
	l.getDefaultOptions().queries?._experimental_beforeQuery?.(u);
	let d = l.getQueryCache().get(u.queryHash), p = t.subscribed !== !1;
	u._optimisticResults = a ? "isRestoring" : p ? "optimistic" : void 0, le(u), ce(u, o, d), V(o);
	let m = !l.getQueryCache().get(u.queryHash), [h] = n(() => new r(l, u)), g = h.getOptimisticResult(u), v = !a && p;
	if (e(s((e) => {
		let t = v ? h.subscribe(f.batchCalls(e)) : _;
		return h.updateResult(), t;
	}, [h, v]), () => h.getCurrentResult(), () => h.getCurrentResult()), c(() => {
		h.setOptions(u);
	}, [u, h]), U(u, g)) throw de(u, h, o);
	if (H({
		result: g,
		errorResetBoundary: o,
		throwOnError: u.throwOnError,
		query: d,
		suspense: u.suspense
	})) throw g.error;
	return l.getDefaultOptions().queries?._experimental_afterQuery?.(u, g), u.experimental_prefetchInRender && !D.isServer() && ue(g, a) && (m ? de(u, h, o) : d?.promise)?.catch(_).finally(() => {
		h.updateResult();
	}), u.notifyOnChangeProps ? g : h.trackResult(g);
}
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+react-query@5.101.2_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useQuery.js
function W(e, t) {
	return fe(e, N, t);
}
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+react-query@5.101.2_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useMutation.js
o();
function G(t, r) {
	let i = A(r), [a] = n(() => new ie(i, t));
	c(() => {
		a.setOptions(t);
	}, [a, t]);
	let o = e(s((e) => a.subscribe(f.batchCalls(e)), [a]), () => a.getCurrentResult(), () => a.getCurrentResult()), l = s((e, t) => {
		a.mutate(e, t).catch(_);
	}, [a]);
	if (o.error && g(a.options.throwOnError, [o.error])) throw o.error;
	return {
		...o,
		mutate: l,
		mutateAsync: o.mutate
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+react-query@5.101.2_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js
function pe(e, t) {
	return fe(e, re, t);
}
//#endregion
//#region ../admin-x-framework/dist/utils/errors.js
var K = class extends Error {
	response;
	data;
	constructor(e, t, n, r) {
		!n && e && e.url.includes("/ghost/api/admin/") && (n = `Something went wrong while loading ${e.url.replace(/.+\/ghost\/api\/admin\//, "").replace(/\W.*/, "").replace("_", " ")}, please try again.`), super(n || "Something went wrong, please try again.", r), this.response = e, this.data = t;
	}
}, q = class extends K {
	data;
	constructor(e, t, n, r) {
		super(e, t, n, r), this.data = t;
	}
}, me = class extends q {
	constructor(e, t, n) {
		super(e, t, "API server is running a newer version of Ghost, please upgrade.", n);
	}
}, J = class extends K {
	constructor(e) {
		super(void 0, void 0, "Something went wrong, please try again.", e);
	}
}, he = class extends K {
	constructor(e) {
		super(void 0, void 0, "Request timed out, please try again.", e);
	}
}, ge = class extends K {
	constructor(e, t, n) {
		super(e, t, "Request is larger than the maximum file size the server allows", n);
	}
}, _e = class extends K {
	constructor(e, t, n) {
		super(e, t, "Request contains an unknown or unsupported file type.", n);
	}
}, Y = class extends K {
	constructor(e, t, n) {
		super(e, t, "Ghost is currently undergoing maintenance, please wait a moment then retry.", n);
	}
}, X = class extends K {
	constructor(e, t, n) {
		super(e, t, "You are not authorised to make this request.", n);
	}
}, ve = class extends X {}, ye = class extends q {
	constructor(e, t, n) {
		super(e, t, "Theme is not compatible or contains errors.", n);
	}
}, be = class extends q {
	constructor(e, t, n) {
		super(e, t, "A hosting plan limit was reached or exceeded.", n);
	}
}, xe = class extends q {
	constructor(e, t, n) {
		super(e, t, "Please verify your email settings", n);
	}
}, Se = class extends q {
	constructor(e, t, n) {
		super(e, t, t.errors[0].message, n);
	}
};
function Ce(e, t) {
	return e instanceof Se && e.data?.errors[0] ? e.data.errors[0].context || e.data.errors[0].message : t;
}
//#endregion
//#region ../../node_modules/.pnpm/sonner@2.0.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/sonner/dist/index.mjs
o();
function we(e) {
	if (!e || typeof document > "u") return;
	let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
	n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
var Te = (e) => {
	switch (e) {
		case "success": return Oe;
		case "info": return Ae;
		case "warning": return ke;
		case "error": return je;
		default: return null;
	}
}, Ee = Array(12).fill(0), De = ({ visible: e, className: t }) => /*#__PURE__*/ i.createElement("div", {
	className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
	"data-visible": e
}, /*#__PURE__*/ i.createElement("div", { className: "sonner-spinner" }, Ee.map((e, t) => /*#__PURE__*/ i.createElement("div", {
	className: "sonner-loading-bar",
	key: `spinner-bar-${t}`
})))), Oe = /*#__PURE__*/ i.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 20 20",
	fill: "currentColor",
	height: "20",
	width: "20"
}, /*#__PURE__*/ i.createElement("path", {
	fillRule: "evenodd",
	d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
	clipRule: "evenodd"
})), ke = /*#__PURE__*/ i.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 24 24",
	fill: "currentColor",
	height: "20",
	width: "20"
}, /*#__PURE__*/ i.createElement("path", {
	fillRule: "evenodd",
	d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
	clipRule: "evenodd"
})), Ae = /*#__PURE__*/ i.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 20 20",
	fill: "currentColor",
	height: "20",
	width: "20"
}, /*#__PURE__*/ i.createElement("path", {
	fillRule: "evenodd",
	d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
	clipRule: "evenodd"
})), je = /*#__PURE__*/ i.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 20 20",
	fill: "currentColor",
	height: "20",
	width: "20"
}, /*#__PURE__*/ i.createElement("path", {
	fillRule: "evenodd",
	d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
	clipRule: "evenodd"
})), Me = /*#__PURE__*/ i.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: "12",
	height: "12",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "1.5",
	strokeLinecap: "round",
	strokeLinejoin: "round"
}, /*#__PURE__*/ i.createElement("line", {
	x1: "18",
	y1: "6",
	x2: "6",
	y2: "18"
}), /*#__PURE__*/ i.createElement("line", {
	x1: "6",
	y1: "6",
	x2: "18",
	y2: "18"
})), Ne = () => {
	let [e, t] = i.useState(document.hidden);
	return i.useEffect(() => {
		let e = () => {
			t(document.hidden);
		};
		return document.addEventListener("visibilitychange", e), () => window.removeEventListener("visibilitychange", e);
	}, []), e;
}, Pe = 1, Z = new class {
	constructor() {
		this.subscribe = (e) => (this.subscribers.push(e), () => {
			let t = this.subscribers.indexOf(e);
			this.subscribers.splice(t, 1);
		}), this.publish = (e) => {
			this.subscribers.forEach((t) => t(e));
		}, this.addToast = (e) => {
			this.publish(e), this.toasts = [...this.toasts, e];
		}, this.create = (e) => {
			let { message: t, ...n } = e, r = typeof e?.id == "number" || e.id?.length > 0 ? e.id : Pe++, i = this.toasts.find((e) => e.id === r), a = e.dismissible === void 0 ? !0 : e.dismissible;
			return this.dismissedToasts.has(r) && this.dismissedToasts.delete(r), i ? this.toasts = this.toasts.map((n) => n.id === r ? (this.publish({
				...n,
				...e,
				id: r,
				title: t
			}), {
				...n,
				...e,
				id: r,
				dismissible: a,
				title: t
			}) : n) : this.addToast({
				title: t,
				...n,
				dismissible: a,
				id: r
			}), r;
		}, this.dismiss = (e) => (e ? (this.dismissedToasts.add(e), requestAnimationFrame(() => this.subscribers.forEach((t) => t({
			id: e,
			dismiss: !0
		})))) : this.toasts.forEach((e) => {
			this.subscribers.forEach((t) => t({
				id: e.id,
				dismiss: !0
			}));
		}), e), this.message = (e, t) => this.create({
			...t,
			message: e
		}), this.error = (e, t) => this.create({
			...t,
			message: e,
			type: "error"
		}), this.success = (e, t) => this.create({
			...t,
			type: "success",
			message: e
		}), this.info = (e, t) => this.create({
			...t,
			type: "info",
			message: e
		}), this.warning = (e, t) => this.create({
			...t,
			type: "warning",
			message: e
		}), this.loading = (e, t) => this.create({
			...t,
			type: "loading",
			message: e
		}), this.promise = (e, t) => {
			if (!t) return;
			let n;
			t.loading !== void 0 && (n = this.create({
				...t,
				promise: e,
				type: "loading",
				message: t.loading,
				description: typeof t.description == "function" ? void 0 : t.description
			}));
			let r = Promise.resolve(e instanceof Function ? e() : e), a = n !== void 0, o, s = r.then(async (e) => {
				if (o = ["resolve", e], i.isValidElement(e)) a = !1, this.create({
					id: n,
					type: "default",
					message: e
				});
				else if (Ie(e) && !e.ok) {
					a = !1;
					let r = typeof t.error == "function" ? await t.error(`HTTP error! status: ${e.status}`) : t.error, o = typeof t.description == "function" ? await t.description(`HTTP error! status: ${e.status}`) : t.description, s = typeof r == "object" && !i.isValidElement(r) ? r : { message: r };
					this.create({
						id: n,
						type: "error",
						description: o,
						...s
					});
				} else if (e instanceof Error) {
					a = !1;
					let r = typeof t.error == "function" ? await t.error(e) : t.error, o = typeof t.description == "function" ? await t.description(e) : t.description, s = typeof r == "object" && !i.isValidElement(r) ? r : { message: r };
					this.create({
						id: n,
						type: "error",
						description: o,
						...s
					});
				} else if (t.success !== void 0) {
					a = !1;
					let r = typeof t.success == "function" ? await t.success(e) : t.success, o = typeof t.description == "function" ? await t.description(e) : t.description, s = typeof r == "object" && !i.isValidElement(r) ? r : { message: r };
					this.create({
						id: n,
						type: "success",
						description: o,
						...s
					});
				}
			}).catch(async (e) => {
				if (o = ["reject", e], t.error !== void 0) {
					a = !1;
					let r = typeof t.error == "function" ? await t.error(e) : t.error, o = typeof t.description == "function" ? await t.description(e) : t.description, s = typeof r == "object" && !i.isValidElement(r) ? r : { message: r };
					this.create({
						id: n,
						type: "error",
						description: o,
						...s
					});
				}
			}).finally(() => {
				a && (this.dismiss(n), n = void 0), t.finally == null || t.finally.call(t);
			}), c = () => new Promise((e, t) => s.then(() => o[0] === "reject" ? t(o[1]) : e(o[1])).catch(t));
			return typeof n != "string" && typeof n != "number" ? { unwrap: c } : Object.assign(n, { unwrap: c });
		}, this.custom = (e, t) => {
			let n = t?.id || Pe++;
			return this.create({
				jsx: e(n),
				id: n,
				...t
			}), n;
		}, this.getActiveToasts = () => this.toasts.filter((e) => !this.dismissedToasts.has(e.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
	}
}(), Fe = (e, t) => {
	let n = t?.id || Pe++;
	return Z.addToast({
		title: e,
		...t,
		id: n
	}), n;
}, Ie = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", Le = Object.assign(Fe, {
	success: Z.success,
	info: Z.info,
	warning: Z.warning,
	error: Z.error,
	custom: Z.custom,
	message: Z.message,
	promise: Z.promise,
	dismiss: Z.dismiss,
	loading: Z.loading
}, {
	getHistory: () => Z.toasts,
	getToasts: () => Z.getActiveToasts()
});
we("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
function Re(e) {
	return e.label !== void 0;
}
var ze = 3, Be = "24px", Ve = "16px", He = 4e3, Ue = 356, We = 14, Ge = 45, Ke = 200;
function Q(...e) {
	return e.filter(Boolean).join(" ");
}
function qe(e) {
	let [t, n] = e.split("-"), r = [];
	return t && r.push(t), n && r.push(n), r;
}
var Je = (e) => {
	let { invert: t, toast: n, unstyled: r, interacting: a, setHeights: o, visibleToasts: s, heights: c, index: l, toasts: u, expanded: d, removeToast: f, defaultRichColors: p, closeButton: m, style: h, cancelButtonStyle: g, actionButtonStyle: _, className: v = "", descriptionClassName: y = "", duration: b, position: x, gap: S, expandByDefault: C, classNames: w, icons: T, closeButtonAriaLabel: ee = "Close toast" } = e, [E, D] = i.useState(null), [te, O] = i.useState(null), [k, A] = i.useState(!1), [j, M] = i.useState(!1), [N, P] = i.useState(!1), [F, I] = i.useState(!1), [L, R] = i.useState(!1), [ne, re] = i.useState(0), [ie, ae] = i.useState(0), z = i.useRef(n.duration || b || He), oe = i.useRef(null), B = i.useRef(null), se = l === 0, ce = l + 1 <= s, V = n.type, H = n.dismissible !== !1, le = n.className || "", ue = n.descriptionClassName || "", U = i.useMemo(() => c.findIndex((e) => e.toastId === n.id) || 0, [c, n.id]), de = i.useMemo(() => n.closeButton ?? m, [n.closeButton, m]), fe = i.useMemo(() => n.duration || b || He, [n.duration, b]), W = i.useRef(0), G = i.useRef(0), pe = i.useRef(0), K = i.useRef(null), [q, me] = x.split("-"), J = i.useMemo(() => c.reduce((e, t, n) => n >= U ? e : e + t.height, 0), [c, U]), he = Ne(), ge = n.invert || t, _e = V === "loading";
	G.current = i.useMemo(() => U * S + J, [U, J]), i.useEffect(() => {
		z.current = fe;
	}, [fe]), i.useEffect(() => {
		A(!0);
	}, []), i.useEffect(() => {
		let e = B.current;
		if (e) {
			let t = e.getBoundingClientRect().height;
			return ae(t), o((e) => [{
				toastId: n.id,
				height: t,
				position: n.position
			}, ...e]), () => o((e) => e.filter((e) => e.toastId !== n.id));
		}
	}, [o, n.id]), i.useLayoutEffect(() => {
		if (!k) return;
		let e = B.current, t = e.style.height;
		e.style.height = "auto";
		let r = e.getBoundingClientRect().height;
		e.style.height = t, ae(r), o((e) => e.find((e) => e.toastId === n.id) ? e.map((e) => e.toastId === n.id ? {
			...e,
			height: r
		} : e) : [{
			toastId: n.id,
			height: r,
			position: n.position
		}, ...e]);
	}, [
		k,
		n.title,
		n.description,
		o,
		n.id,
		n.jsx,
		n.action,
		n.cancel
	]);
	let Y = i.useCallback(() => {
		M(!0), re(G.current), o((e) => e.filter((e) => e.toastId !== n.id)), setTimeout(() => {
			f(n);
		}, Ke);
	}, [
		n,
		f,
		o,
		G
	]);
	i.useEffect(() => {
		if (n.promise && V === "loading" || n.duration === Infinity || n.type === "loading") return;
		let e;
		return d || a || he ? (() => {
			if (pe.current < W.current) {
				let e = (/* @__PURE__ */ new Date()).getTime() - W.current;
				z.current -= e;
			}
			pe.current = (/* @__PURE__ */ new Date()).getTime();
		})() : z.current !== Infinity && (W.current = (/* @__PURE__ */ new Date()).getTime(), e = setTimeout(() => {
			n.onAutoClose == null || n.onAutoClose.call(n, n), Y();
		}, z.current)), () => clearTimeout(e);
	}, [
		d,
		a,
		n,
		V,
		he,
		Y
	]), i.useEffect(() => {
		n.delete && (Y(), n.onDismiss == null || n.onDismiss.call(n, n));
	}, [Y, n.delete]);
	function X() {
		return T?.loading ? /*#__PURE__*/ i.createElement("div", {
			className: Q(w?.loader, n?.classNames?.loader, "sonner-loader"),
			"data-visible": V === "loading"
		}, T.loading) : /*#__PURE__*/ i.createElement(De, {
			className: Q(w?.loader, n?.classNames?.loader),
			visible: V === "loading"
		});
	}
	let ve = n.icon || T?.[V] || Te(V);
	return /*#__PURE__*/ i.createElement("li", {
		tabIndex: 0,
		ref: B,
		className: Q(v, le, w?.toast, n?.classNames?.toast, w?.default, w?.[V], n?.classNames?.[V]),
		"data-sonner-toast": "",
		"data-rich-colors": n.richColors ?? p,
		"data-styled": !(n.jsx || n.unstyled || r),
		"data-mounted": k,
		"data-promise": !!n.promise,
		"data-swiped": L,
		"data-removed": j,
		"data-visible": ce,
		"data-y-position": q,
		"data-x-position": me,
		"data-index": l,
		"data-front": se,
		"data-swiping": N,
		"data-dismissible": H,
		"data-type": V,
		"data-invert": ge,
		"data-swipe-out": F,
		"data-swipe-direction": te,
		"data-expanded": !!(d || C && k),
		"data-testid": n.testId,
		style: {
			"--index": l,
			"--toasts-before": l,
			"--z-index": u.length - l,
			"--offset": `${j ? ne : G.current}px`,
			"--initial-height": C ? "auto" : `${ie}px`,
			...h,
			...n.style
		},
		onDragEnd: () => {
			P(!1), D(null), K.current = null;
		},
		onPointerDown: (e) => {
			e.button !== 2 && (_e || !H || (oe.current = /* @__PURE__ */ new Date(), re(G.current), e.target.setPointerCapture(e.pointerId), e.target.tagName !== "BUTTON" && (P(!0), K.current = {
				x: e.clientX,
				y: e.clientY
			})));
		},
		onPointerUp: () => {
			if (F || !H) return;
			K.current = null;
			let e = Number(B.current?.style.getPropertyValue("--swipe-amount-x").replace("px", "") || 0), t = Number(B.current?.style.getPropertyValue("--swipe-amount-y").replace("px", "") || 0), r = (/* @__PURE__ */ new Date()).getTime() - oe.current?.getTime(), i = E === "x" ? e : t, a = Math.abs(i) / r;
			if (Math.abs(i) >= Ge || a > .11) {
				re(G.current), n.onDismiss == null || n.onDismiss.call(n, n), O(E === "x" ? e > 0 ? "right" : "left" : t > 0 ? "down" : "up"), Y(), I(!0);
				return;
			} else {
				var o, s;
				(o = B.current) == null || o.style.setProperty("--swipe-amount-x", "0px"), (s = B.current) == null || s.style.setProperty("--swipe-amount-y", "0px");
			}
			R(!1), P(!1), D(null);
		},
		onPointerMove: (t) => {
			var n, r;
			if (!K.current || !H || window.getSelection()?.toString().length > 0) return;
			let i = t.clientY - K.current.y, a = t.clientX - K.current.x, o = e.swipeDirections ?? qe(x);
			!E && (Math.abs(a) > 1 || Math.abs(i) > 1) && D(Math.abs(a) > Math.abs(i) ? "x" : "y");
			let s = {
				x: 0,
				y: 0
			}, c = (e) => 1 / (1.5 + Math.abs(e) / 20);
			if (E === "y") {
				if (o.includes("top") || o.includes("bottom")) if (o.includes("top") && i < 0 || o.includes("bottom") && i > 0) s.y = i;
				else {
					let e = i * c(i);
					s.y = Math.abs(e) < Math.abs(i) ? e : i;
				}
			} else if (E === "x" && (o.includes("left") || o.includes("right"))) if (o.includes("left") && a < 0 || o.includes("right") && a > 0) s.x = a;
			else {
				let e = a * c(a);
				s.x = Math.abs(e) < Math.abs(a) ? e : a;
			}
			(Math.abs(s.x) > 0 || Math.abs(s.y) > 0) && R(!0), (n = B.current) == null || n.style.setProperty("--swipe-amount-x", `${s.x}px`), (r = B.current) == null || r.style.setProperty("--swipe-amount-y", `${s.y}px`);
		}
	}, de && !n.jsx && V !== "loading" ? /*#__PURE__*/ i.createElement("button", {
		"aria-label": ee,
		"data-disabled": _e,
		"data-close-button": !0,
		onClick: _e || !H ? () => {} : () => {
			Y(), n.onDismiss == null || n.onDismiss.call(n, n);
		},
		className: Q(w?.closeButton, n?.classNames?.closeButton)
	}, T?.close ?? Me) : null, (V || n.icon || n.promise) && n.icon !== null && (T?.[V] !== null || n.icon) ? /*#__PURE__*/ i.createElement("div", {
		"data-icon": "",
		className: Q(w?.icon, n?.classNames?.icon)
	}, n.promise || n.type === "loading" && !n.icon ? n.icon || X() : null, n.type === "loading" ? null : ve) : null, /*#__PURE__*/ i.createElement("div", {
		"data-content": "",
		className: Q(w?.content, n?.classNames?.content)
	}, /*#__PURE__*/ i.createElement("div", {
		"data-title": "",
		className: Q(w?.title, n?.classNames?.title)
	}, n.jsx ? n.jsx : typeof n.title == "function" ? n.title() : n.title), n.description ? /*#__PURE__*/ i.createElement("div", {
		"data-description": "",
		className: Q(y, ue, w?.description, n?.classNames?.description)
	}, typeof n.description == "function" ? n.description() : n.description) : null), /*#__PURE__*/ i.isValidElement(n.cancel) ? n.cancel : n.cancel && Re(n.cancel) ? /*#__PURE__*/ i.createElement("button", {
		"data-button": !0,
		"data-cancel": !0,
		style: n.cancelButtonStyle || g,
		onClick: (e) => {
			Re(n.cancel) && H && (n.cancel.onClick == null || n.cancel.onClick.call(n.cancel, e), Y());
		},
		className: Q(w?.cancelButton, n?.classNames?.cancelButton)
	}, n.cancel.label) : null, /*#__PURE__*/ i.isValidElement(n.action) ? n.action : n.action && Re(n.action) ? /*#__PURE__*/ i.createElement("button", {
		"data-button": !0,
		"data-action": !0,
		style: n.actionButtonStyle || _,
		onClick: (e) => {
			Re(n.action) && (n.action.onClick == null || n.action.onClick.call(n.action, e), !e.defaultPrevented && Y());
		},
		className: Q(w?.actionButton, n?.classNames?.actionButton)
	}, n.action.label) : null);
};
function Ye() {
	if (typeof window > "u" || typeof document > "u") return "ltr";
	let e = document.documentElement.getAttribute("dir");
	return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
function Xe(e, t) {
	let n = {};
	return [e, t].forEach((e, t) => {
		let r = t === 1, i = r ? "--mobile-offset" : "--offset", a = r ? Ve : Be;
		function o(e) {
			[
				"top",
				"right",
				"bottom",
				"left"
			].forEach((t) => {
				n[`${i}-${t}`] = typeof e == "number" ? `${e}px` : e;
			});
		}
		typeof e == "number" || typeof e == "string" ? o(e) : typeof e == "object" ? [
			"top",
			"right",
			"bottom",
			"left"
		].forEach((t) => {
			e[t] === void 0 ? n[`${i}-${t}`] = a : n[`${i}-${t}`] = typeof e[t] == "number" ? `${e[t]}px` : e[t];
		}) : o(a);
	}), n;
}
var Ze = /*#__PURE__*/ i.forwardRef(function(e, t) {
	let { id: n, invert: r, position: a = "bottom-right", hotkey: o = ["altKey", "KeyT"], expand: s, closeButton: c, className: l, offset: u, mobileOffset: d, theme: f = "light", richColors: p, duration: m, style: h, visibleToasts: g = ze, toastOptions: _, dir: v = Ye(), gap: y = We, icons: b, containerAriaLabel: x = "Notifications" } = e, [S, C] = i.useState([]), w = i.useMemo(() => n ? S.filter((e) => e.toasterId === n) : S.filter((e) => !e.toasterId), [S, n]), T = i.useMemo(() => Array.from(new Set([a].concat(w.filter((e) => e.position).map((e) => e.position)))), [w, a]), [ee, E] = i.useState([]), [D, O] = i.useState(!1), [k, A] = i.useState(!1), [j, M] = i.useState(f === "system" ? typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : f), N = i.useRef(null), P = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), F = i.useRef(null), I = i.useRef(!1), L = i.useCallback((e) => {
		C((t) => (t.find((t) => t.id === e.id)?.delete || Z.dismiss(e.id), t.filter(({ id: t }) => t !== e.id)));
	}, []);
	return i.useEffect(() => Z.subscribe((e) => {
		if (e.dismiss) {
			requestAnimationFrame(() => {
				C((t) => t.map((t) => t.id === e.id ? {
					...t,
					delete: !0
				} : t));
			});
			return;
		}
		setTimeout(() => {
			te.flushSync(() => {
				C((t) => {
					let n = t.findIndex((t) => t.id === e.id);
					return n === -1 ? [e, ...t] : [
						...t.slice(0, n),
						{
							...t[n],
							...e
						},
						...t.slice(n + 1)
					];
				});
			});
		});
	}), [S]), i.useEffect(() => {
		if (f !== "system") {
			M(f);
			return;
		}
		if (f === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? M("dark") : M("light")), typeof window > "u") return;
		let e = window.matchMedia("(prefers-color-scheme: dark)");
		try {
			e.addEventListener("change", ({ matches: e }) => {
				M(e ? "dark" : "light");
			});
		} catch {
			e.addListener(({ matches: e }) => {
				try {
					M(e ? "dark" : "light");
				} catch (e) {
					console.error(e);
				}
			});
		}
	}, [f]), i.useEffect(() => {
		S.length <= 1 && O(!1);
	}, [S]), i.useEffect(() => {
		let e = (e) => {
			if (o.every((t) => e[t] || e.code === t)) {
				var t;
				O(!0), (t = N.current) == null || t.focus();
			}
			e.code === "Escape" && (document.activeElement === N.current || N.current?.contains(document.activeElement)) && O(!1);
		};
		return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
	}, [o]), i.useEffect(() => {
		if (N.current) return () => {
			F.current && (F.current.focus({ preventScroll: !0 }), F.current = null, I.current = !1);
		};
	}, [N.current]), /*#__PURE__*/ i.createElement("section", {
		ref: t,
		"aria-label": `${x} ${P}`,
		tabIndex: -1,
		"aria-live": "polite",
		"aria-relevant": "additions text",
		"aria-atomic": "false",
		suppressHydrationWarning: !0
	}, T.map((t, n) => {
		let [a, o] = t.split("-");
		return w.length ? /*#__PURE__*/ i.createElement("ol", {
			key: t,
			dir: v === "auto" ? Ye() : v,
			tabIndex: -1,
			ref: N,
			className: l,
			"data-sonner-toaster": !0,
			"data-sonner-theme": j,
			"data-y-position": a,
			"data-x-position": o,
			style: {
				"--front-toast-height": `${ee[0]?.height || 0}px`,
				"--width": `${Ue}px`,
				"--gap": `${y}px`,
				...h,
				...Xe(u, d)
			},
			onBlur: (e) => {
				I.current && !e.currentTarget.contains(e.relatedTarget) && (I.current = !1, F.current &&= (F.current.focus({ preventScroll: !0 }), null));
			},
			onFocus: (e) => {
				e.target instanceof HTMLElement && e.target.dataset.dismissible === "false" || I.current || (I.current = !0, F.current = e.relatedTarget);
			},
			onMouseEnter: () => O(!0),
			onMouseMove: () => O(!0),
			onMouseLeave: () => {
				k || O(!1);
			},
			onDragEnd: () => O(!1),
			onPointerDown: (e) => {
				e.target instanceof HTMLElement && e.target.dataset.dismissible === "false" || A(!0);
			},
			onPointerUp: () => A(!1)
		}, w.filter((e) => !e.position && n === 0 || e.position === t).map((n, a) => /*#__PURE__*/ i.createElement(Je, {
			key: n.id,
			icons: b,
			index: a,
			toast: n,
			defaultRichColors: p,
			duration: _?.duration ?? m,
			className: _?.className,
			descriptionClassName: _?.descriptionClassName,
			invert: r,
			visibleToasts: g,
			closeButton: _?.closeButton ?? c,
			interacting: k,
			position: t,
			style: _?.style,
			unstyled: _?.unstyled,
			classNames: _?.classNames,
			cancelButtonStyle: _?.cancelButtonStyle,
			actionButtonStyle: _?.actionButtonStyle,
			closeButtonAriaLabel: _?.closeButtonAriaLabel,
			removeToast: L,
			toasts: w.filter((e) => e.position == n.position),
			heights: ee.filter((e) => e.position == n.position),
			setHeights: E,
			expandByDefault: s,
			gap: y,
			expanded: D,
			swipeDirections: e.swipeDirections
		}))) : null;
	}));
});
//#endregion
//#region ../admin-x-framework/dist/hooks/use-handle-error.js
o();
function Qe(e) {
	Le.dismiss(), Le.error(e);
}
var $e = () => {
	let { sentryDSN: e } = T();
	return s((t, { withToast: n = !0 } = {}) => {
		console.error(t), e && !(t instanceof ve) && ee((e) => {
			t instanceof K && t.response && (e.setTag("api_url", t.response.url), e.setTag("api_response_status", t.response.status)), O(t);
		}), n && (t instanceof K && t.response?.status === 418 || t instanceof ve ? Le.dismiss() : t instanceof K ? Qe(Ce(t, t.message)) : Qe("Something went wrong, please try again."));
	}, [e]);
};
//#endregion
//#region ../admin-x-framework/dist/utils/helpers.js
function et() {
	let e = window.location.pathname, t = e.substr(0, e.search("/ghost/"));
	return {
		subdir: t,
		adminRoot: `${t}/ghost/`,
		assetRoot: `${t}/ghost/assets/`,
		apiRoot: `${t}/ghost/api/admin`,
		activityPubRoot: `${t}/.ghost/activitypub`
	};
}
//#endregion
//#region ../admin-x-framework/dist/utils/api/handle-response.js
var tt = async (e) => {
	if (e.status === 0) throw new J();
	if (e.status === 503) throw new Y(e, await e.text());
	if (e.status === 415) throw new _e(e, await e.text());
	if (e.status === 413) throw new ge(e, await e.text());
	if (e.status === 401) throw e.headers.get("content-type")?.includes("json") ? new X(e, await e.json()) : new X(e, await e.text());
	if (!e.ok) {
		if (!e.headers.get("content-type")?.includes("json")) throw new K(e, await e.text());
		let t = await e.json();
		throw e.status === 403 && t.errors?.[0]?.message === "Authorization failed" ? new X(e, t) : t.errors?.[0]?.type === "VersionMismatchError" ? new me(e, t) : t.errors?.[0]?.type === "ValidationError" || t.errors?.[0]?.type === "NoPermissionError" ? new Se(e, t) : t.errors?.[0]?.type === "ThemeValidationError" ? new ye(e, t) : t.errors?.[0]?.type === "HostLimitError" ? new be(e, t) : t.errors?.[0]?.type === "EmailError" ? new xe(e, t) : new q(e, t);
	} else if (e.status === 204) return;
	else if (e.headers.get("content-type")?.includes("text/csv")) return await e.text();
	else return await e.json();
};
//#endregion
//#region ../admin-x-framework/dist/utils/api/fetch-api.js
o();
var nt = (e) => {
	let t = new Headers(), n = e.getAllResponseHeaders()?.split("\r\n") || [];
	for (let e of n) {
		let n = e.indexOf(":");
		if (n === -1) continue;
		let r = e.slice(0, n), i = e.slice(n + 1).trim();
		t.append(r, i);
	}
	return t;
}, rt = (e) => new Response(e.response, {
	status: e.status,
	statusText: e.statusText,
	headers: nt(e)
}), it = /\/ghost\/api\//, at = /\/ghost\/api\/admin\/session([/?#]|$)/, ot = /^#\/(?:reset|setup|signin|signup)(?:[/?]|$)/, st = !1, ct = (e) => window.location.pathname === e && (!window.location.hash || window.location.hash === "#/" || ot.test(window.location.hash)), lt = (e) => {
	let t = e.toString();
	return it.test(t) && !at.test(t);
}, ut = () => {
	let { adminRoot: e } = et();
	!st && !ct(e) && (st = !0, window.location.replace(e));
}, dt = (e, t, { method: n, headers: r, credentials: i, body: a, signal: o }) => new Promise((s, c) => {
	let l = () => {
		c(new DOMException("Aborted", "AbortError"));
	};
	if (o.aborted) {
		l();
		return;
	}
	let u = new XMLHttpRequest();
	switch (u.open(n, t.toString(), !0), i) {
		case "omit": throw Error("\"omit\" credentials cannot be represented with legacy XMLHttpRequest. Consider \"same-origin\".");
		case "same-origin":
			u.withCredentials = !1;
			break;
		case "include":
			u.withCredentials = !0;
			break;
		default: throw Error(i);
	}
	u.responseType = "arraybuffer";
	for (let [e, t] of Object.entries(r)) u.setRequestHeader(e, t);
	u.upload.onprogress = (t) => {
		t.lengthComputable && e(t.loaded / t.total * 100);
	}, u.onload = () => {
		s(rt(u));
	}, u.onerror = () => {
		c(/* @__PURE__ */ TypeError("Network request failed"));
	}, u.onabort = l;
	let d = () => u.abort();
	o.addEventListener("abort", d), u.onloadend = () => {
		o.removeEventListener("abort", d);
	}, u.send(a);
}), ft = () => {
	let { ghostVersion: e, sentryDSN: t } = T();
	return s(async (n, { method: r = "GET", headers: i = {}, body: a, credentials: o = "include", timeout: s, retry: c = !0, onUploadProgress: l } = {}) => {
		let u = new AbortController(), d = {
			method: r,
			headers: {
				"app-pragma": "no-cache",
				...e ? { "x-ghost-version": e } : {},
				...typeof a == "string" ? { "content-type": "application/json" } : {},
				...i
			},
			credentials: o,
			mode: "cors",
			body: a,
			signal: u.signal
		}, f = 0, p = 0, m = Date.now(), h = [500, 1e3], g = [
			J,
			Y,
			TypeError
		], _ = (e, t) => {
			let r = {
				errorName: e?.name,
				attempts: f,
				totalSeconds: p / 1e3,
				endpoint: n.toString()
			};
			return n.toString().includes("/ghost/api/") && (r.server = t?.headers.get("server")), r;
		}, v = l ? dt.bind(null, l) : fetch, y = s ? setTimeout(() => u.abort(), s) : void 0;
		try {
			for (; f === 0 || c;) try {
				return await tt(await v(n, d));
			} catch (e) {
				if (p = Date.now() - m, c && g.some((t) => e instanceof t) && p <= 15e3) {
					await new Promise((e) => {
						setTimeout(e, h[f] || h[h.length - 1]);
					}), f += 1;
					continue;
				}
				if (f !== 0 && t && j("Request failed after multiple attempts", { extra: _() }), e && typeof e == "object" && "name" in e && e.name === "AbortError") throw new he();
				if (e instanceof X && lt(n)) throw ut(), new ve(e.response, e.data, { cause: e });
				let r = e;
				throw e instanceof K || (r = new J({ cause: e })), r;
			}
		} finally {
			clearTimeout(y);
		}
	}, [e, t]);
}, { apiRoot: pt, activityPubRoot: mt } = et(), $ = (e, t = {}, n = !1) => {
	let r = new URL(`${n ? mt : pt}${e}`, window.location.origin);
	return r.search = new URLSearchParams(t).toString(), r.toString();
};
//#endregion
//#region ../admin-x-framework/dist/api/current-user.js
o();
var ht = "UsersResponseType", gt = $("/users/me/", { include: "roles" }), _t = [ht, gt], vt = () => {
	let e = ft(), t = $e(), n = W({
		queryKey: _t,
		queryFn: () => e(gt),
		select: (e) => e.users[0]
	});
	return c(() => {
		n.error && t(n.error);
	}, [t, n.error]), n;
}, yt = (e) => {
	let { data: t } = vt();
	if (!e || e.length === 0) return !0;
	let n = t?.roles.map((e) => e.name);
	return n ? e.some((e) => n.includes(e)) : !1;
};
//#endregion
//#region ../admin-x-framework/dist/utils/api/hooks.js
o();
var bt = (e) => ({ searchParams: n, ...r } = {}) => {
	let i = $(e.path, n || e.defaultSearchParams, e?.useActivityPub), a = ft(), o = $e(), s = yt(e.permissions), l = W({
		...r,
		enabled: s && (r.enabled ?? !0),
		queryKey: [e.dataType, i],
		queryFn: () => a(i, { ...e })
	}), u = t(() => l.data && e.returnData ? e.returnData(l.data) : l.data, [l.data]);
	return c(() => {
		l.error && r.defaultErrorHandler !== !1 && o(l.error);
	}, [
		o,
		l.error,
		r.defaultErrorHandler
	]), {
		...l,
		data: u
	};
}, xt = (e) => ({ searchParams: n, getNextPageParams: r, ...i } = {}) => {
	let a = ft(), o = $e(), s = yt(e.permissions), l = r || e.defaultNextPageParams || (() => ({})), u = pe({
		...i,
		enabled: s && (i.enabled ?? !0),
		queryKey: [e.dataType, $(e.path, n || e.defaultSearchParams, e?.useActivityPub)],
		queryFn: ({ pageParam: t }) => a($(e.path, t || n || e.defaultSearchParams, e?.useActivityPub)),
		initialPageParam: void 0,
		getNextPageParam: (t) => l(t, n || e.defaultSearchParams || {})
	}), d = t(() => u.data && e.returnData(u.data), [u.data]);
	return c(() => {
		u.error && i.defaultErrorHandler !== !1 && o(u.error);
	}, [
		o,
		u.error,
		i.defaultErrorHandler
	]), {
		...u,
		data: d
	};
}, St = ({ fetchApi: e, path: t, payload: n, searchParams: r, options: i }) => {
	let { defaultSearchParams: a, body: o, ...s } = i, c = $(t, r || a, i?.useActivityPub), l = n && o?.(n), u;
	return l instanceof FormData ? u = l : l && (u = JSON.stringify(l)), e(c, {
		body: u,
		...s
	});
}, Ct = ({ path: e, searchParams: t, defaultSearchParams: n, updateQueries: r, invalidateQueries: i, ...a }) => () => {
	let o = ft(), c = A(), { onUpdate: l, onInvalidate: u, onDelete: d } = T();
	return G({
		mutationFn: (r) => St({
			fetchApi: o,
			path: e(r),
			payload: r,
			searchParams: t?.(r) || n,
			options: a
		}),
		onSuccess: s((e, t) => {
			if (i && "dataType" in i ? (c.invalidateQueries({ queryKey: [i.dataType] }), u(i.dataType)) : i && c.invalidateQueries(i.filters, i.options), r) {
				if (c.setQueriesData({ queryKey: [r.dataType] }, (n) => r.update(e, n, t)), r.emberUpdateType === "createOrUpdate") l(r.dataType, e);
				else if (r.emberUpdateType === "delete") {
					if (typeof t != "string") throw Error("Expected delete mutation to have a string (ID) payload. Either change the payload or update the createMutation hook");
					d(r.dataType, t);
				}
			}
		}, [
			u,
			l,
			d,
			c
		])
	});
}, wt = (e, t) => (n, r) => {
	if (!r) return r;
	let i = (t || ((t) => t[e].reduce((e, t) => ({
		...e,
		[t.id]: t
	}), {})))(n);
	if (typeof r == "object" && "pages" in r) {
		let { pages: t } = r;
		return {
			...r,
			pages: t.map((t) => ({
				...t,
				[e]: t[e].map((e) => i[e.id] || e)
			}))
		};
	}
	return {
		...r,
		[e]: r[e].map((e) => i[e.id] || e)
	};
}, Tt = (e, t) => (n, r, i) => {
	if (!r) return r;
	let a = t?.(i) || [i];
	if (typeof r == "object" && "pages" in r) {
		let { pages: t } = r;
		return {
			...r,
			pages: t.map((t) => ({
				...t,
				[e]: t[e].filter((e) => !a.includes(e.id))
			}))
		};
	}
	return {
		...r,
		[e]: r[e].filter((e) => !a.includes(e.id))
	};
}, Et = ht, Dt = xt({
	dataType: Et,
	path: "/users/",
	defaultSearchParams: {
		limit: "100",
		include: "roles"
	},
	defaultNextPageParams: (e, t) => ({
		...t,
		page: (e.meta?.pagination.next || 1).toString()
	}),
	returnData: (e) => {
		let { pages: t } = e, n = t.flatMap((e) => e.users), r = t[t.length - 1].meta;
		return {
			users: n,
			meta: r,
			isEnd: r ? r.pagination.pages === r.pagination.page : !0
		};
	}
}), Ot = Ct({
	method: "PUT",
	path: (e) => `/users/${e.id}/`,
	body: (e) => ({ users: [e] }),
	searchParams: () => ({ include: "roles" }),
	updateQueries: {
		dataType: Et,
		emberUpdateType: "createOrUpdate",
		update: wt("users")
	}
});
Ct({
	method: "DELETE",
	path: (e) => `/users/${e}/`,
	updateQueries: {
		dataType: Et,
		emberUpdateType: "delete",
		update: Tt("users")
	}
}), Ct({
	method: "PUT",
	path: () => "/users/password/",
	body: ({ newPassword: e, confirmNewPassword: t, userId: n, oldPassword: r }) => ({ password: [{
		user_id: n,
		oldPassword: r || "",
		newPassword: e,
		ne2Password: t
	}] })
}), Ct({
	method: "PUT",
	path: () => "/users/owner/",
	body: (e) => ({ owner: [{ id: e }] }),
	updateQueries: {
		dataType: Et,
		emberUpdateType: "createOrUpdate",
		update: wt("users")
	}
});
//#endregion
export { Ze as a, G as c, vt as i, W as l, Ot as n, Le as o, bt as r, pe as s, Dt as t };

//# sourceMappingURL=users-BLeiOTHc.js.map