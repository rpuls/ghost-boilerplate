import { d as e, u as t } from "./_react-D4KM8XEu.js";
import { S as n } from "./chunk-KS7C4IRE-D4HEcEwi.js";
import { y as r } from "./use-navigate-with-base-path-CAwXTmqH.js";
import { a as i } from "./avatar-B3DEDB1l.js";
//#region ../../node_modules/.pnpm/@radix-ui+react-separator@1.1.11_@types+react-dom@18.3.7_@types+react@18.3.31__@types+r_c4cecf52ec3997d5bf5103e0c31883d4/node_modules/@radix-ui/react-separator/dist/index.mjs
e();
var a = n(), o = "Separator", s = "horizontal", c = ["horizontal", "vertical"], l = t((e, t) => {
	let { decorative: n, orientation: r = s, ...o } = e, c = u(r) ? r : s, l = n ? { role: "none" } : {
		"aria-orientation": c === "vertical" ? c : void 0,
		role: "separator"
	};
	return /* @__PURE__ */ (0, a.jsx)(i.div, {
		"data-orientation": c,
		...l,
		...o,
		ref: t
	});
});
l.displayName = o;
function u(e) {
	return c.includes(e);
}
var d = l;
//#endregion
//#region ../shade/es/components/ui/separator.js
e();
var f = t(({ className: e, orientation: t = "horizontal", decorative: n = !0, ...i }, o) => /* @__PURE__ */ (0, a.jsx)(d, {
	ref: o,
	className: r("shrink-0 bg-border", t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", e),
	decorative: n,
	orientation: t,
	...i
}));
f.displayName = d.displayName;
//#endregion
export { f as t };

//# sourceMappingURL=separator-BI1FLsYM.js.map