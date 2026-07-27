import { S as e, T as t, _ as n, c as r, d as i, u as a, v as o, w as s, x as c } from "./_react-D4KM8XEu.js";
import { S as l, h as u } from "./chunk-KS7C4IRE-D4HEcEwi.js";
import { C as d, S as f, f as p, g as m, y as h } from "./use-navigate-with-base-path-CAwXTmqH.js";
var g = m("heart", [["path", {
	d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
	key: "mvr1a0"
}]]), _ = m("user", [["path", {
	d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
	key: "975kel"
}], ["circle", {
	cx: "12",
	cy: "7",
	r: "4",
	key: "17ys0d"
}]]);
d(), i();
var v = l();
function y(t, i = []) {
	let a = [];
	function o(i, o) {
		let s = r(o);
		s.displayName = i + "Context";
		let c = a.length;
		a = [...a, o];
		let l = (n) => {
			let { scope: r, children: i, ...a } = n, o = r?.[t]?.[c] || s, l = e(() => a, Object.values(a));
			return /* @__PURE__ */ (0, v.jsx)(o.Provider, {
				value: l,
				children: i
			});
		};
		l.displayName = i + "Provider";
		function u(e, r) {
			let a = n(r?.[t]?.[c] || s);
			if (a) return a;
			if (o !== void 0) return o;
			throw Error(`\`${e}\` must be used within \`${i}\``);
		}
		return [l, u];
	}
	let s = () => {
		let n = a.map((e) => r(e));
		return function(r) {
			let i = r?.[t] || n;
			return e(() => ({ [`__scope${t}`]: {
				...r,
				[t]: i
			} }), [r, i]);
		};
	};
	return s.scopeName = t, [o, b(s, ...i)];
}
function b(...t) {
	let n = t[0];
	if (t.length === 1) return n;
	let r = () => {
		let r = t.map((e) => ({
			useScope: e(),
			scopeName: e.scopeName
		}));
		return function(t) {
			let i = r.reduce((e, { useScope: n, scopeName: r }) => {
				let i = n(t)[`__scope${r}`];
				return {
					...e,
					...i
				};
			}, {});
			return e(() => ({ [`__scope${n.scopeName}`]: i }), [i]);
		};
	};
	return r.scopeName = n.scopeName, r;
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.1.2_@types+react@18.3.31_react@18.3.1/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
i();
var x = globalThis?.document ? c : () => {};
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-primitive@2.1.7_@types+react-dom@18.3.7_@types+react@18.3.31__@types+re_4c60825657fad9e38f0a4d7b31c9e11d/node_modules/@radix-ui/react-primitive/dist/index.mjs
i();
var S = [
	"a",
	"button",
	"div",
	"form",
	"h2",
	"h3",
	"img",
	"input",
	"label",
	"li",
	"nav",
	"ol",
	"p",
	"select",
	"span",
	"svg",
	"ul"
].reduce((e, t) => {
	let n = p(`Primitive.${t}`), r = a((e, r) => {
		let { asChild: i, ...a } = e, o = i ? n : t;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ (0, v.jsx)(o, {
			...a,
			ref: r
		});
	});
	return r.displayName = `Primitive.${t}`, {
		...e,
		[t]: r
	};
}, {});
function C(e, t) {
	e && u(() => e.dispatchEvent(t));
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.1.2_@types+react@18.3.31_react@18.3.1/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
i();
function w(t) {
	let n = s(t);
	return o(() => {
		n.current = t;
	}), e(() => ((...e) => n.current?.(...e)), []);
}
//#endregion
//#region ../shade/es/lib/app-utils.js
var T = (e) => e.name && e.name.trim() || e.email || "Unknown Member", E = (e) => {
	let t = T(e), n = t.split(" ");
	return n.length >= 2 ? (n[0][0] + n[n.length - 1][0]).toUpperCase() : t.substring(0, 2).toUpperCase();
};
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-avatar@1.2.1_@types+react-dom@18.3.7_@types+react@18.3.31__@types+react_618495bb42525b350fac96e721ad44e8/node_modules/@radix-ui/react-avatar/dist/index.mjs
i();
var D = "Avatar", [O, k] = y(D), A = [0, () => void 0], [j, M] = O(D), N = a((e, n) => {
	let { __scopeAvatar: r, ...i } = e, [a, o] = t("idle"), [s, c] = B();
	return /* @__PURE__ */ (0, v.jsx)(j, {
		scope: r,
		imageLoadingStatus: a,
		setImageLoadingStatus: o,
		imageCount: s,
		setImageCount: c,
		children: /* @__PURE__ */ (0, v.jsx)(S.span, {
			...i,
			ref: n
		})
	});
});
N.displayName = D;
var P = "AvatarImage", F = a((e, t) => {
	let { __scopeAvatar: n, src: r, onLoadingStatusChange: i, ...a } = e, o = M(P, n);
	V(o.setImageCount);
	let c = R(r, {
		referrerPolicy: a.referrerPolicy,
		crossOrigin: a.crossOrigin,
		loadingStatus: o.imageLoadingStatus,
		setLoadingStatus: o.setImageLoadingStatus
	}), l = w((e) => {
		i?.(e);
	}), u = s(c);
	return x(() => {
		let e = u.current;
		u.current = c, c !== e && l(c);
	}, [c, l]), c === "loaded" ? /* @__PURE__ */ (0, v.jsx)(S.img, {
		...a,
		ref: t,
		src: r
	}) : null;
});
F.displayName = P;
var I = "AvatarFallback", L = a((e, n) => {
	let { __scopeAvatar: r, delayMs: i, ...a } = e, s = M(I, r), [c, l] = t(i === void 0);
	return o(() => {
		if (i !== void 0) {
			let e = window.setTimeout(() => l(!0), i);
			return () => window.clearTimeout(e);
		}
	}, [i]), c && s.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ (0, v.jsx)(S.span, {
		...a,
		ref: n
	}) : null;
});
L.displayName = I;
function R(e, { loadingStatus: t, setLoadingStatus: n, referrerPolicy: r, crossOrigin: i }) {
	return x(() => {
		if (!e) {
			n("error");
			return;
		}
		let t = new window.Image(), a = (e) => {
			let t = e.currentTarget;
			n(z(t));
		}, o = () => n("error");
		return t.addEventListener("load", a), t.addEventListener("error", o), r && (t.referrerPolicy = r), t.crossOrigin = i ?? null, t.src = e, n(z(t)), () => {
			t.removeEventListener("load", a), t.removeEventListener("error", o), n("idle");
		};
	}, [
		e,
		i,
		r,
		n
	]), t;
}
function z(e) {
	return e.complete ? e.naturalWidth > 0 ? "loaded" : "error" : "loading";
}
function B() {
	let e = A;
	{
		e = t(0);
		let [n] = e, r = s(!1);
		o(() => {
			n > 1 && !r.current && (r.current = !0, console.warn("Avatar: Only one `Avatar.Image` component should be rendered per `Avatar.Root`, but multiple were detected. This will lead to unexpected behavior."));
		}, [n]);
	}
	return e;
}
function V(e) {
	o(() => (e((e) => e + 1), () => {
		e((e) => e - 1);
	}), [e]);
}
//#endregion
//#region ../shade/es/components/ui/avatar.js
i();
var H = a(({ className: e, ...t }, n) => /* @__PURE__ */ (0, v.jsx)(F, {
	ref: n,
	className: h("aspect-square size-full", e),
	...t
}));
H.displayName = F.displayName;
var U = a(({ className: e, ...t }, n) => /* @__PURE__ */ (0, v.jsx)(L, {
	ref: n,
	className: h("flex size-full items-center justify-center rounded-full bg-muted [&_svg]:size-4", e),
	...t
}));
U.displayName = L.displayName;
function W({ src: e }) {
	let [n, r] = t(!1);
	return o(() => {
		r(!1);
	}, [e]), /* @__PURE__ */ (0, v.jsx)("img", {
		alt: "",
		className: h("absolute inset-0 size-full object-cover", !n && "invisible"),
		src: e,
		onLoad: (e) => {
			let { naturalWidth: t, naturalHeight: n } = e.currentTarget;
			t > 1 && n > 1 && r(!0);
		}
	});
}
var G = a(({ className: e, children: t, src: n, name: r, email: i, ...a }, o) => {
	let s = {
		name: r || void 0,
		email: i || void 0
	}, c = !!(r || i), l = c ? E(s) : null, u = c ? f(T(s), "45", "55") : void 0;
	return /* @__PURE__ */ (0, v.jsx)(N, {
		ref: o,
		className: h("relative flex size-8 shrink-0 overflow-hidden rounded-full", e),
		...a,
		children: t ?? /* @__PURE__ */ (0, v.jsxs)(v.Fragment, { children: [/* @__PURE__ */ (0, v.jsx)(U, {
			className: h("text-xs text-muted-foreground md:text-sm [&_svg]:size-3 md:[&_svg]:size-4", c && "font-semibold text-white"),
			style: c ? { backgroundColor: u } : void 0,
			children: l ?? /* @__PURE__ */ (0, v.jsx)(_, {})
		}), n && /* @__PURE__ */ (0, v.jsx)(W, { src: n })] })
	});
});
G.displayName = N.displayName;
//#endregion
export { S as a, y as c, w as i, _ as l, U as n, C as o, H as r, x as s, G as t, g as u };

//# sourceMappingURL=avatar-B3DEDB1l.js.map