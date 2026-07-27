import { S as e, T as t, a as n, d as r, v as i } from "./_react-D4KM8XEu.js";
import { S as a } from "./chunk-KS7C4IRE-D4HEcEwi.js";
import { o } from "./users-BLeiOTHc.js";
import { g as s, r as c, t as l, w as u, y as d } from "./use-navigate-with-base-path-CAwXTmqH.js";
import { L as ee, y as te } from "./use-activity-pub-queries-VzbN99u_.js";
var f = s("check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]), p = s("plus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "M12 5v14",
	key: "s699le"
}]]), m = s("user-round", [["circle", {
	cx: "12",
	cy: "8",
	r: "5",
	key: "1hypcn"
}], ["path", {
	d: "M20 21a8 8 0 0 0-16 0",
	key: "rfgkzh"
}]]);
//#endregion
//#region ../shade/es/components/ui/skeleton.js
r();
var h = a();
function g({ containerClassName: t, count: r = 1, randomize: i = !1, minWidth: a = 70, maxWidth: o = 100, className: s, ...c }) {
	let { randomWidths: l, keys: u } = e(() => {
		let e = [], t = [];
		for (let n = 0; n < r; n++) {
			if (i) {
				let t = Math.floor((o - a) / 5), n = a + Math.floor(Math.random() * (t + 1)) * 5;
				e.push(`${n}%`);
			}
			t.push(`skeleton-${n}`);
		}
		return {
			randomWidths: e,
			keys: t
		};
	}, [
		r,
		i,
		a,
		o
	]);
	return /* @__PURE__ */ (0, h.jsx)("span", {
		className: t,
		children: Array.from({ length: r }).map((e, t) => /* @__PURE__ */ (0, h.jsxs)(n.Fragment, { children: [/* @__PURE__ */ (0, h.jsx)("span", {
			className: d("inline-flex w-full animate-pulse rounded-[2px] bg-primary/10 leading-none", s),
			style: i ? { width: l[t] } : void 0,
			...c,
			children: "‌"
		}), /* @__PURE__ */ (0, h.jsx)("br", {})] }, u[t]))
	});
}
var _ = n.forwardRef(({ className: e, lines: t = 5, ...n }, r) => t < 1 ? /* @__PURE__ */ (0, h.jsx)(h.Fragment, {}) : /* @__PURE__ */ (0, h.jsx)("div", {
	ref: r,
	className: d("flex flex-col gap-2", e),
	...n,
	children: Array.from({ length: t }, (e, t) => {
		let n = "66%";
		switch (t % 5) {
			case 0:
				n = "57%";
				break;
			case 1:
				n = "33%";
				break;
			case 2:
				n = "40%";
				break;
			case 3:
				n = "48%";
				break;
			case 4:
				n = "24%";
				break;
		}
		return /* @__PURE__ */ (0, h.jsxs)("div", {
			className: "flex justify-between gap-6",
			children: [/* @__PURE__ */ (0, h.jsx)("div", {
				className: "grow",
				style: { maxWidth: n },
				children: /* @__PURE__ */ (0, h.jsx)(g, {})
			}), /* @__PURE__ */ (0, h.jsx)(g, { className: "w-[60px] self-end" })]
		}, t);
	})
}));
_.displayName = "SkeletonTable";
//#endregion
//#region src/utils/get-handle.ts
function v(e) {
	if (e.handle) return e.handle;
	if (!e.preferredUsername || !e.id) return "@unknown@unknown";
	try {
		return `@${e.preferredUsername}@${new URL(e.id).hostname.replace(/^www\./, "")}`;
	} catch {
		return "@unknown@unknown";
	}
}
//#endregion
//#region src/components/global/ap-avatar.tsx
r();
var y = null, b = ({ onFollow: e, onUnfollow: t, authorHandle: r, followedByMe: i }) => {
	let [, a] = n.useReducer((e) => e + 1, 0), o = y === r && !i;
	return /* @__PURE__ */ (0, h.jsx)(c, {
		className: "absolute -right-1.5 bottom-px z-10 flex size-4 items-center justify-center rounded-full p-0 outline-2 outline-white transition-transform hover:scale-105 active:scale-100 dark:outline-black",
		title: o ? "Unfollow" : "Follow",
		onClick: (n) => {
			o ? (t(n), setTimeout(() => {
				y = null, a();
			}, 0)) : (y = r, a(), e(n));
		},
		children: o ? /* @__PURE__ */ (0, h.jsx)(f, { className: "-mb-px size-3! stroke-[2.4]!" }) : /* @__PURE__ */ (0, h.jsx)(p, { className: "size-[14px]! stroke-2!" })
	});
}, x = ({ author: e, size: n, isLoading: r = !1, disabled: a = !1, className: s = "", showFollowButton: c = !1 }) => {
	let d = 20, f = `shrink-0 items-center justify-center rounded-full relative z-10 flex bg-black/5 dark:bg-gray-900 ${n === "lg" || a ? "" : "cursor-pointer"} ${s}`, p = "z-10 object-cover rounded-full outline-[0.5px] outline-offset-[-0.5px] outline-black/10", [_, x] = t(e?.icon?.url), ne = l(), S = te("index", () => {
		o.success(`Followed ${e?.name}`);
	}, () => {
		o.error("Failed to follow");
	}), re = ee("index", () => {
		o.info(`Unfollowed ${e?.name}`);
	}, () => {
		o.error("Failed to unfollow");
	});
	switch (i(() => {
		x(e?.icon?.url);
	}, [e?.icon?.url]), n) {
		case "2xs":
			d = 10, f = u("size-4", f), p = u("size-4", p);
			break;
		case "xs":
			d = 12, f = u("size-6", f), p = u("size-6", p);
			break;
		case "notification":
			d = 16, f = u("size-9", f), p = u("size-9", p);
			break;
		case "sm":
			f = u("size-10", f), p = u("size-10", p);
			break;
		case "md":
			f = u("size-[60px]", f), p = u("size-[60px]", p);
			break;
		case "lg":
			d = 32, f = u("size-22", f), p = u("size-22", p);
			break;
		default:
			f = u("size-10", f), p = u("size-10", p);
			break;
	}
	if (!e || r) return /* @__PURE__ */ (0, h.jsx)(g, {
		className: p,
		containerClassName: f
	});
	let C = v(e), ie = (e) => {
		e.stopPropagation(), ne(`/profile/${C}`);
	}, ae = (e) => {
		e.stopPropagation(), S.mutate(C);
	}, oe = (e) => {
		e.stopPropagation(), re.mutate(C);
	}, w = c || y === C;
	return _ ? /* @__PURE__ */ (0, h.jsxs)("div", {
		className: f,
		onClick: n === "lg" || a ? void 0 : ie,
		children: [/* @__PURE__ */ (0, h.jsx)("img", {
			className: p,
			referrerPolicy: "no-referrer",
			src: _,
			onError: () => x(void 0)
		}), w && /* @__PURE__ */ (0, h.jsx)(b, {
			authorHandle: C,
			followedByMe: !1,
			onFollow: ae,
			onUnfollow: oe
		})]
	}) : /* @__PURE__ */ (0, h.jsxs)("div", {
		className: f,
		onClick: a ? void 0 : ie,
		children: [/* @__PURE__ */ (0, h.jsx)(m, {
			className: "text-gray-600",
			size: d,
			strokeWidth: 1.5
		}), w && /* @__PURE__ */ (0, h.jsx)(b, {
			authorHandle: C,
			followedByMe: !1,
			onFollow: ae,
			onUnfollow: oe
		})]
	});
};
//#endregion
//#region ../../node_modules/.pnpm/dompurify@3.4.11/node_modules/dompurify/dist/purify.es.mjs
function ne(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function S(e) {
	if (Array.isArray(e)) return e;
}
function re(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t !== 0) for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function C() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ie(e, t) {
	return S(e) || re(e, t) || ae(e, t) || C();
}
function ae(e, t) {
	if (e) {
		if (typeof e == "string") return ne(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ne(e, t) : void 0;
	}
}
var oe = Object.entries, w = Object.setPrototypeOf, se = Object.isFrozen, ce = Object.getPrototypeOf, le = Object.getOwnPropertyDescriptor, T = Object.freeze, E = Object.seal, D = Object.create, ue = typeof Reflect < "u" && Reflect, de = ue.apply, O = ue.construct;
T ||= function(e) {
	return e;
}, E ||= function(e) {
	return e;
}, de ||= function(e, t) {
	var n = [...arguments].slice(2);
	return e.apply(t, n);
}, O ||= function(e) {
	return new e(...[...arguments].slice(1));
};
var fe = P(Array.prototype.forEach), pe = P(Array.prototype.lastIndexOf), me = P(Array.prototype.pop), he = P(Array.prototype.push), ge = P(Array.prototype.splice), k = Array.isArray, _e = P(String.prototype.toLowerCase), ve = P(String.prototype.toString), ye = P(String.prototype.match), be = P(String.prototype.replace), xe = P(String.prototype.indexOf), Se = P(String.prototype.trim), Ce = P(Number.prototype.toString), we = P(Boolean.prototype.toString), Te = typeof BigInt > "u" ? null : P(BigInt.prototype.toString), Ee = typeof Symbol > "u" ? null : P(Symbol.prototype.toString), A = P(Object.prototype.hasOwnProperty), j = P(Object.prototype.toString), M = P(RegExp.prototype.test), N = De(TypeError);
function P(e) {
	return function(t) {
		t instanceof RegExp && (t.lastIndex = 0);
		var n = [...arguments].slice(1);
		return de(e, t, n);
	};
}
function De(e) {
	return function() {
		return O(e, [...arguments]);
	};
}
function F(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _e;
	if (w && w(e, null), !k(t)) return e;
	let r = t.length;
	for (; r--;) {
		let i = t[r];
		if (typeof i == "string") {
			let e = n(i);
			e !== i && (se(t) || (t[r] = e), i = e);
		}
		e[i] = !0;
	}
	return e;
}
function Oe(e) {
	for (let t = 0; t < e.length; t++) A(e, t) || (e[t] = null);
	return e;
}
function I(e) {
	let t = D(null);
	for (let r of oe(e)) {
		var n = ie(r, 2);
		let i = n[0], a = n[1];
		A(e, i) && (k(a) ? t[i] = Oe(a) : a && typeof a == "object" && a.constructor === Object ? t[i] = I(a) : t[i] = a);
	}
	return t;
}
function ke(e) {
	switch (typeof e) {
		case "string": return e;
		case "number": return Ce(e);
		case "boolean": return we(e);
		case "bigint": return Te ? Te(e) : "0";
		case "symbol": return Ee ? Ee(e) : "Symbol()";
		case "undefined": return j(e);
		case "function":
		case "object": {
			if (e === null) return j(e);
			let t = e, n = L(t, "toString");
			if (typeof n == "function") {
				let e = n(t);
				return typeof e == "string" ? e : j(e);
			}
			return j(e);
		}
		default: return j(e);
	}
}
function L(e, t) {
	for (; e !== null;) {
		let n = le(e, t);
		if (n) {
			if (n.get) return P(n.get);
			if (typeof n.value == "function") return P(n.value);
		}
		e = ce(e);
	}
	function n() {
		return null;
	}
	return n;
}
function Ae(e) {
	try {
		return M(e, ""), !0;
	} catch {
		return !1;
	}
}
var je = T(/* @__PURE__ */ "a.abbr.acronym.address.area.article.aside.audio.b.bdi.bdo.big.blink.blockquote.body.br.button.canvas.caption.center.cite.code.col.colgroup.content.data.datalist.dd.decorator.del.details.dfn.dialog.dir.div.dl.dt.element.em.fieldset.figcaption.figure.font.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.img.input.ins.kbd.label.legend.li.main.map.mark.marquee.menu.menuitem.meter.nav.nobr.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.shadow.slot.small.source.spacer.span.strike.strong.style.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.track.tt.u.ul.var.video.wbr".split(".")), Me = T(/* @__PURE__ */ "svg.a.altglyph.altglyphdef.altglyphitem.animatecolor.animatemotion.animatetransform.circle.clippath.defs.desc.ellipse.enterkeyhint.exportparts.filter.font.g.glyph.glyphref.hkern.image.inputmode.line.lineargradient.marker.mask.metadata.mpath.part.path.pattern.polygon.polyline.radialgradient.rect.stop.style.switch.symbol.text.textpath.title.tref.tspan.view.vkern".split(".")), Ne = T([
	"feBlend",
	"feColorMatrix",
	"feComponentTransfer",
	"feComposite",
	"feConvolveMatrix",
	"feDiffuseLighting",
	"feDisplacementMap",
	"feDistantLight",
	"feDropShadow",
	"feFlood",
	"feFuncA",
	"feFuncB",
	"feFuncG",
	"feFuncR",
	"feGaussianBlur",
	"feImage",
	"feMerge",
	"feMergeNode",
	"feMorphology",
	"feOffset",
	"fePointLight",
	"feSpecularLighting",
	"feSpotLight",
	"feTile",
	"feTurbulence"
]), Pe = T([
	"animate",
	"color-profile",
	"cursor",
	"discard",
	"font-face",
	"font-face-format",
	"font-face-name",
	"font-face-src",
	"font-face-uri",
	"foreignobject",
	"hatch",
	"hatchpath",
	"mesh",
	"meshgradient",
	"meshpatch",
	"meshrow",
	"missing-glyph",
	"script",
	"set",
	"solidcolor",
	"unknown",
	"use"
]), Fe = T(/* @__PURE__ */ "math.menclose.merror.mfenced.mfrac.mglyph.mi.mlabeledtr.mmultiscripts.mn.mo.mover.mpadded.mphantom.mroot.mrow.ms.mspace.msqrt.mstyle.msub.msup.msubsup.mtable.mtd.mtext.mtr.munder.munderover.mprescripts".split(".")), Ie = T([
	"maction",
	"maligngroup",
	"malignmark",
	"mlongdiv",
	"mscarries",
	"mscarry",
	"msgroup",
	"mstack",
	"msline",
	"msrow",
	"semantics",
	"annotation",
	"annotation-xml",
	"mprescripts",
	"none"
]), Le = T(["#text"]), Re = T(/* @__PURE__ */ "accept.action.align.alt.autocapitalize.autocomplete.autopictureinpicture.autoplay.background.bgcolor.border.capture.cellpadding.cellspacing.checked.cite.class.clear.color.cols.colspan.command.commandfor.controls.controlslist.coords.crossorigin.datetime.decoding.default.dir.disabled.disablepictureinpicture.disableremoteplayback.download.draggable.enctype.enterkeyhint.exportparts.face.for.headers.height.hidden.high.href.hreflang.id.inert.inputmode.integrity.ismap.kind.label.lang.list.loading.loop.low.max.maxlength.media.method.min.minlength.multiple.muted.name.nonce.noshade.novalidate.nowrap.open.optimum.part.pattern.placeholder.playsinline.popover.popovertarget.popovertargetaction.poster.preload.pubdate.radiogroup.readonly.rel.required.rev.reversed.role.rows.rowspan.spellcheck.scope.selected.shape.size.sizes.slot.span.srclang.start.src.srcset.step.style.summary.tabindex.title.translate.type.usemap.valign.value.width.wrap.xmlns".split(".")), ze = T(/* @__PURE__ */ "accent-height.accumulate.additive.alignment-baseline.amplitude.ascent.attributename.attributetype.azimuth.basefrequency.baseline-shift.begin.bias.by.class.clip.clippathunits.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.cx.cy.d.dx.dy.diffuseconstant.direction.display.divisor.dur.edgemode.elevation.end.exponent.fill.fill-opacity.fill-rule.filter.filterunits.flood-color.flood-opacity.font-family.font-size.font-size-adjust.font-stretch.font-style.font-variant.font-weight.fx.fy.g1.g2.glyph-name.glyphref.gradientunits.gradienttransform.height.href.id.image-rendering.in.in2.intercept.k.k1.k2.k3.k4.kerning.keypoints.keysplines.keytimes.lang.lengthadjust.letter-spacing.kernelmatrix.kernelunitlength.lighting-color.local.marker-end.marker-mid.marker-start.markerheight.markerunits.markerwidth.maskcontentunits.maskunits.max.mask.mask-type.media.method.mode.min.name.numoctaves.offset.operator.opacity.order.orient.orientation.origin.overflow.paint-order.path.pathlength.patterncontentunits.patterntransform.patternunits.points.preservealpha.preserveaspectratio.primitiveunits.r.rx.ry.radius.refx.refy.repeatcount.repeatdur.restart.result.rotate.scale.seed.shape-rendering.slope.specularconstant.specularexponent.spreadmethod.startoffset.stddeviation.stitchtiles.stop-color.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke.stroke-width.style.surfacescale.systemlanguage.tabindex.tablevalues.targetx.targety.transform.transform-origin.text-anchor.text-decoration.text-rendering.textlength.type.u1.u2.unicode.values.viewbox.visibility.version.vert-adv-y.vert-origin-x.vert-origin-y.width.word-spacing.wrap.writing-mode.xchannelselector.ychannelselector.x.x1.x2.xmlns.y.y1.y2.z.zoomandpan".split(".")), Be = T(/* @__PURE__ */ "accent.accentunder.align.bevelled.close.columnalign.columnlines.columnspacing.columnspan.denomalign.depth.dir.display.displaystyle.encoding.fence.frame.height.href.id.largeop.length.linethickness.lquote.lspace.mathbackground.mathcolor.mathsize.mathvariant.maxsize.minsize.movablelimits.notation.numalign.open.rowalign.rowlines.rowspacing.rowspan.rspace.rquote.scriptlevel.scriptminsize.scriptsizemultiplier.selection.separator.separators.stretchy.subscriptshift.supscriptshift.symmetric.voffset.width.xmlns".split(".")), Ve = T([
	"xlink:href",
	"xml:id",
	"xlink:title",
	"xml:space",
	"xmlns:xlink"
]), He = E(/{{[\w\W]*|^[\w\W]*}}/g), Ue = E(/<%[\w\W]*|^[\w\W]*%>/g), We = E(/\${[\w\W]*/g), Ge = E(/^data-[\-\w.\u00B7-\uFFFF]+$/), Ke = E(/^aria-[\-\w]+$/), qe = E(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), Je = E(/^(?:\w+script|data):/i), Ye = E(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), Xe = E(/^html$/i), Ze = E(/^[a-z][.\w]*(-[.\w]+)+$/i), Qe = E(/<[/\w!]/g), $e = E(/<[/\w]/g), et = E(/<\/no(script|embed|frames)/i), tt = E(/\/>/i), R = {
	element: 1,
	attribute: 2,
	text: 3,
	cdataSection: 4,
	entityReference: 5,
	entityNode: 6,
	processingInstruction: 7,
	comment: 8,
	document: 9,
	documentType: 10,
	documentFragment: 11,
	notation: 12
}, nt = function() {
	return typeof window > "u" ? null : window;
}, rt = function(e, t) {
	if (typeof e != "object" || typeof e.createPolicy != "function") return null;
	let n = null, r = "data-tt-policy-suffix";
	t && t.hasAttribute(r) && (n = t.getAttribute(r));
	let i = "dompurify" + (n ? "#" + n : "");
	try {
		return e.createPolicy(i, {
			createHTML(e) {
				return e;
			},
			createScriptURL(e) {
				return e;
			}
		});
	} catch {
		return console.warn("TrustedTypes policy " + i + " could not be created."), null;
	}
}, it = function() {
	return {
		afterSanitizeAttributes: [],
		afterSanitizeElements: [],
		afterSanitizeShadowDOM: [],
		beforeSanitizeAttributes: [],
		beforeSanitizeElements: [],
		beforeSanitizeShadowDOM: [],
		uponSanitizeAttribute: [],
		uponSanitizeElement: [],
		uponSanitizeShadowNode: []
	};
}, z = function(e, t, n, r) {
	return A(e, t) && k(e[t]) ? F(r.base ? I(r.base) : {}, e[t], r.transform) : n;
};
function at() {
	let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : nt(), t = (e) => at(e);
	if (t.version = "3.4.11", t.removed = [], !e || !e.document || e.document.nodeType !== R.document || !e.Element) return t.isSupported = !1, t;
	let n = e.document, r = n, i = r.currentScript;
	e.DocumentFragment;
	let a = e.HTMLTemplateElement, o = e.Node, s = e.Element, c = e.NodeFilter;
	e.NamedNodeMap === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
	let l = e.DOMParser, u = e.trustedTypes, d = s.prototype, ee = L(d, "cloneNode"), te = L(d, "remove"), f = L(d, "nextSibling"), p = L(d, "childNodes"), m = L(d, "parentNode"), h = L(d, "shadowRoot"), g = L(d, "attributes"), _ = o && o.prototype ? L(o.prototype, "nodeType") : null, v = o && o.prototype ? L(o.prototype, "nodeName") : null;
	if (typeof a == "function") {
		let e = n.createElement("template");
		e.content && e.content.ownerDocument && (n = e.content.ownerDocument);
	}
	let y, b = "", x, ne = !1, S = 0, re = function() {
		if (S > 0) throw N("A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the \"DOMPurify and Trusted Types\" section of the README.");
	}, C = function(e) {
		re(), S++;
		try {
			return y.createHTML(e);
		} finally {
			S--;
		}
	}, ie = function(e) {
		re(), S++;
		try {
			return y.createScriptURL(e);
		} finally {
			S--;
		}
	}, ae = function() {
		return ne ||= (x = rt(u, i), !0), x;
	}, w = n, se = w.implementation, ce = w.createNodeIterator, le = w.createDocumentFragment, ue = w.getElementsByTagName, de = r.importNode, O = it();
	t.isSupported = typeof oe == "function" && typeof m == "function" && se && se.createHTMLDocument !== void 0;
	let Ce = He, we = Ue, Te = We, Ee = Ge, j = Ke, P = Je, De = Ye, Oe = Ze, ot = qe, B = null, st = F({}, [
		...je,
		...Me,
		...Ne,
		...Fe,
		...Le
	]), V = null, ct = F({}, [
		...Re,
		...ze,
		...Be,
		...Ve
	]), H = Object.seal(D(null, {
		tagNameCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		},
		attributeNameCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		},
		allowCustomizedBuiltInElements: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: !1
		}
	})), U = null, lt = null, W = Object.seal(D(null, {
		tagCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		},
		attributeCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		}
	})), ut = !0, dt = !0, ft = !1, pt = !0, G = !1, mt = !0, K = !1, ht = !1, gt = null, _t = null, vt = !1, q = !1, yt = !1, bt = !1, xt = !0, St = !1, Ct = "user-content-", wt = !0, Tt = !1, Et = {}, J = null, Dt = F({}, /* @__PURE__ */ "annotation-xml.audio.colgroup.desc.foreignobject.head.iframe.math.mi.mn.mo.ms.mtext.noembed.noframes.noscript.plaintext.script.selectedcontent.style.svg.template.thead.title.video.xmp".split(".")), Ot = null, kt = F({}, [
		"audio",
		"video",
		"img",
		"source",
		"image",
		"track"
	]), At = null, jt = F({}, [
		"alt",
		"class",
		"for",
		"id",
		"label",
		"name",
		"pattern",
		"placeholder",
		"role",
		"summary",
		"title",
		"value",
		"style",
		"xmlns"
	]), Mt = "http://www.w3.org/1998/Math/MathML", Nt = "http://www.w3.org/2000/svg", Y = "http://www.w3.org/1999/xhtml", Pt = Y, Ft = !1, It = null, Lt = F({}, [
		Mt,
		Nt,
		Y
	], ve), Rt = T([
		"mi",
		"mo",
		"mn",
		"ms",
		"mtext"
	]), zt = F({}, Rt), Bt = T(["annotation-xml"]), Vt = F({}, Bt), Ht = F({}, [
		"title",
		"style",
		"font",
		"a",
		"script"
	]), Ut = null, Wt = ["application/xhtml+xml", "text/html"], X = null, Gt = null, Kt = n.createElement("form"), qt = function(e) {
		return e instanceof RegExp || e instanceof Function;
	}, Jt = function() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		if (Gt && Gt === e) return;
		(!e || typeof e != "object") && (e = {}), e = I(e), Ut = Wt.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? "text/html" : e.PARSER_MEDIA_TYPE, X = Ut === "application/xhtml+xml" ? ve : _e, B = z(e, "ALLOWED_TAGS", st, { transform: X }), V = z(e, "ALLOWED_ATTR", ct, { transform: X }), It = z(e, "ALLOWED_NAMESPACES", Lt, { transform: ve }), At = z(e, "ADD_URI_SAFE_ATTR", jt, {
			transform: X,
			base: jt
		}), Ot = z(e, "ADD_DATA_URI_TAGS", kt, {
			transform: X,
			base: kt
		}), J = z(e, "FORBID_CONTENTS", Dt, { transform: X }), U = z(e, "FORBID_TAGS", I({}), { transform: X }), lt = z(e, "FORBID_ATTR", I({}), { transform: X }), Et = A(e, "USE_PROFILES") ? e.USE_PROFILES && typeof e.USE_PROFILES == "object" ? I(e.USE_PROFILES) : e.USE_PROFILES : !1, ut = e.ALLOW_ARIA_ATTR !== !1, dt = e.ALLOW_DATA_ATTR !== !1, ft = e.ALLOW_UNKNOWN_PROTOCOLS || !1, pt = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, G = e.SAFE_FOR_TEMPLATES || !1, mt = e.SAFE_FOR_XML !== !1, K = e.WHOLE_DOCUMENT || !1, q = e.RETURN_DOM || !1, yt = e.RETURN_DOM_FRAGMENT || !1, bt = e.RETURN_TRUSTED_TYPE || !1, vt = e.FORCE_BODY || !1, xt = e.SANITIZE_DOM !== !1, St = e.SANITIZE_NAMED_PROPS || !1, wt = e.KEEP_CONTENT !== !1, Tt = e.IN_PLACE || !1, ot = Ae(e.ALLOWED_URI_REGEXP) ? e.ALLOWED_URI_REGEXP : qe, Pt = typeof e.NAMESPACE == "string" ? e.NAMESPACE : Y, zt = A(e, "MATHML_TEXT_INTEGRATION_POINTS") && e.MATHML_TEXT_INTEGRATION_POINTS && typeof e.MATHML_TEXT_INTEGRATION_POINTS == "object" ? I(e.MATHML_TEXT_INTEGRATION_POINTS) : F({}, Rt), Vt = A(e, "HTML_INTEGRATION_POINTS") && e.HTML_INTEGRATION_POINTS && typeof e.HTML_INTEGRATION_POINTS == "object" ? I(e.HTML_INTEGRATION_POINTS) : F({}, Bt);
		let t = A(e, "CUSTOM_ELEMENT_HANDLING") && e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING == "object" ? I(e.CUSTOM_ELEMENT_HANDLING) : D(null);
		if (H = D(null), A(t, "tagNameCheck") && qt(t.tagNameCheck) && (H.tagNameCheck = t.tagNameCheck), A(t, "attributeNameCheck") && qt(t.attributeNameCheck) && (H.attributeNameCheck = t.attributeNameCheck), A(t, "allowCustomizedBuiltInElements") && typeof t.allowCustomizedBuiltInElements == "boolean" && (H.allowCustomizedBuiltInElements = t.allowCustomizedBuiltInElements), E(H), G && (dt = !1), yt && (q = !0), Et && (B = F({}, Le), V = D(null), Et.html === !0 && (F(B, je), F(V, Re)), Et.svg === !0 && (F(B, Me), F(V, ze), F(V, Ve)), Et.svgFilters === !0 && (F(B, Ne), F(V, ze), F(V, Ve)), Et.mathMl === !0 && (F(B, Fe), F(V, Be), F(V, Ve))), W.tagCheck = null, W.attributeCheck = null, A(e, "ADD_TAGS") && (typeof e.ADD_TAGS == "function" ? W.tagCheck = e.ADD_TAGS : k(e.ADD_TAGS) && (B === st && (B = I(B)), F(B, e.ADD_TAGS, X))), A(e, "ADD_ATTR") && (typeof e.ADD_ATTR == "function" ? W.attributeCheck = e.ADD_ATTR : k(e.ADD_ATTR) && (V === ct && (V = I(V)), F(V, e.ADD_ATTR, X))), A(e, "ADD_URI_SAFE_ATTR") && k(e.ADD_URI_SAFE_ATTR) && F(At, e.ADD_URI_SAFE_ATTR, X), A(e, "FORBID_CONTENTS") && k(e.FORBID_CONTENTS) && (J === Dt && (J = I(J)), F(J, e.FORBID_CONTENTS, X)), A(e, "ADD_FORBID_CONTENTS") && k(e.ADD_FORBID_CONTENTS) && (J === Dt && (J = I(J)), F(J, e.ADD_FORBID_CONTENTS, X)), wt && (B["#text"] = !0), K && F(B, [
			"html",
			"head",
			"body"
		]), B.table && (F(B, ["tbody"]), delete U.tbody), e.TRUSTED_TYPES_POLICY) {
			if (typeof e.TRUSTED_TYPES_POLICY.createHTML != "function") throw N("TRUSTED_TYPES_POLICY configuration option must provide a \"createHTML\" hook.");
			if (typeof e.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw N("TRUSTED_TYPES_POLICY configuration option must provide a \"createScriptURL\" hook.");
			let t = y;
			y = e.TRUSTED_TYPES_POLICY;
			try {
				b = C("");
			} catch (e) {
				throw y = t, e;
			}
		} else e.TRUSTED_TYPES_POLICY === null ? (y = void 0, b = "") : (y === void 0 && (y = ae()), y && typeof b == "string" && (b = C("")));
		T && T(e), Gt = e;
	}, Yt = F({}, [
		...Me,
		...Ne,
		...Pe
	]), Xt = F({}, [...Fe, ...Ie]), Zt = function(e, t, n) {
		return t.namespaceURI === Y ? e === "svg" : t.namespaceURI === Mt ? e === "svg" && (n === "annotation-xml" || zt[n]) : !!Yt[e];
	}, Qt = function(e, t, n) {
		return t.namespaceURI === Y ? e === "math" : t.namespaceURI === Nt ? e === "math" && Vt[n] : !!Xt[e];
	}, $t = function(e, t, n) {
		return t.namespaceURI === Nt && !Vt[n] || t.namespaceURI === Mt && !zt[n] ? !1 : !Xt[e] && (Ht[e] || !Yt[e]);
	}, en = function(e) {
		let t = m(e);
		(!t || !t.tagName) && (t = {
			namespaceURI: Pt,
			tagName: "template"
		});
		let n = _e(e.tagName), r = _e(t.tagName);
		return It[e.namespaceURI] ? e.namespaceURI === Nt ? Zt(n, t, r) : e.namespaceURI === Mt ? Qt(n, t, r) : e.namespaceURI === Y ? $t(n, t, r) : !!(Ut === "application/xhtml+xml" && It[e.namespaceURI]) : !1;
	}, Z = function(e) {
		he(t.removed, { element: e });
		try {
			m(e).removeChild(e);
		} catch {
			if (te(e), !m(e)) throw N("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
		}
	}, tn = function(e) {
		let t = p(e);
		if (t) {
			let e = [];
			fe(t, (t) => {
				he(e, t);
			}), fe(e, (e) => {
				try {
					te(e);
				} catch {}
			});
		}
		let n = g(e);
		if (n) for (let t = n.length - 1; t >= 0; --t) {
			let r = n[t], i = r && r.name;
			if (typeof i == "string") try {
				e.removeAttribute(i);
			} catch {}
		}
	}, Q = function(e, n) {
		try {
			he(t.removed, {
				attribute: n.getAttributeNode(e),
				from: n
			});
		} catch {
			he(t.removed, {
				attribute: null,
				from: n
			});
		}
		if (n.removeAttribute(e), e === "is") if (q || yt) try {
			Z(n);
		} catch {}
		else try {
			n.setAttribute(e, "");
		} catch {}
	}, nn = function(e) {
		let t = g(e);
		if (t) for (let n = t.length - 1; n >= 0; --n) {
			let r = t[n], i = r && r.name;
			if (!(typeof i != "string" || V[X(i)])) try {
				e.removeAttribute(i);
			} catch {}
		}
	}, rn = function(e) {
		let t = [e];
		for (; t.length > 0;) {
			let e = t.pop();
			(_ ? _(e) : e.nodeType) === R.element && nn(e);
			let n = p(e);
			if (n) for (let e = n.length - 1; e >= 0; --e) t.push(n[e]);
		}
	}, an = function(e) {
		let t = null, r = null;
		if (vt) e = "<remove></remove>" + e;
		else {
			let t = ye(e, /^[\r\n\t ]+/);
			r = t && t[0];
		}
		Ut === "application/xhtml+xml" && Pt === Y && (e = "<html xmlns=\"http://www.w3.org/1999/xhtml\"><head></head><body>" + e + "</body></html>");
		let i = y ? C(e) : e;
		if (Pt === Y) try {
			t = new l().parseFromString(i, Ut);
		} catch {}
		if (!t || !t.documentElement) {
			t = se.createDocument(Pt, "template", null);
			try {
				t.documentElement.innerHTML = Ft ? b : i;
			} catch {}
		}
		let a = t.body || t.documentElement;
		return e && r && a.insertBefore(n.createTextNode(r), a.childNodes[0] || null), Pt === Y ? ue.call(t, K ? "html" : "body")[0] : K ? t.documentElement : a;
	}, on = function(e) {
		return ce.call(e.ownerDocument || e, e, c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION, null);
	}, sn = function(e) {
		return e = be(e, Ce, " "), e = be(e, we, " "), e = be(e, Te, " "), e;
	}, cn = function(e) {
		e.normalize();
		let t = ce.call(e.ownerDocument || e, e, c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION, null), n = t.nextNode();
		for (; n;) n.data = sn(n.data), n = t.nextNode();
		let r = e.querySelectorAll?.call(e, "template");
		r && fe(r, (e) => {
			un(e.content) && cn(e.content);
		});
	}, ln = function(e) {
		let t = v ? v(e) : null;
		return typeof t != "string" || X(t) !== "form" ? !1 : typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || e.attributes !== g(e) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function" || e.nodeType !== _(e) || e.childNodes !== p(e);
	}, un = function(e) {
		if (!_ || typeof e != "object" || !e) return !1;
		try {
			return _(e) === R.documentFragment;
		} catch {
			return !1;
		}
	}, dn = function(e) {
		if (!_ || typeof e != "object" || !e) return !1;
		try {
			return typeof _(e) == "number";
		} catch {
			return !1;
		}
	};
	function $(e, n, r) {
		e.length !== 0 && fe(e, (e) => {
			e.call(t, n, r, Gt);
		});
	}
	let fn = function(e, t) {
		return !!(mt && e.hasChildNodes() && !dn(e.firstElementChild) && M(Qe, e.textContent) && M(Qe, e.innerHTML) || mt && e.namespaceURI === Y && t === "style" && dn(e.firstElementChild) || e.nodeType === R.processingInstruction || mt && e.nodeType === R.comment && M($e, e.data));
	}, pn = function(e, t) {
		if (!U[t] && _n(t) && (H.tagNameCheck instanceof RegExp && M(H.tagNameCheck, t) || H.tagNameCheck instanceof Function && H.tagNameCheck(t))) return !1;
		if (wt && !J[t]) {
			let t = m(e), n = p(e);
			if (n && t) {
				let r = n.length;
				for (let i = r - 1; i >= 0; --i) {
					let r = Tt ? n[i] : ee(n[i], !0);
					t.insertBefore(r, f(e));
				}
			}
		}
		return Z(e), !0;
	}, mn = function(e) {
		if ($(O.beforeSanitizeElements, e, null), ln(e)) return Z(e), !0;
		let n = X(v ? v(e) : e.nodeName);
		if ($(O.uponSanitizeElement, e, {
			tagName: n,
			allowedTags: B
		}), fn(e, n)) return Z(e), !0;
		if (U[n] || !(W.tagCheck instanceof Function && W.tagCheck(n)) && !B[n]) return pn(e, n);
		if ((_ ? _(e) : e.nodeType) === R.element && !en(e) || (n === "noscript" || n === "noembed" || n === "noframes") && M(et, e.innerHTML)) return Z(e), !0;
		if (G && e.nodeType === R.text) {
			let n = sn(e.textContent);
			e.textContent !== n && (he(t.removed, { element: e.cloneNode() }), e.textContent = n);
		}
		return $(O.afterSanitizeElements, e, null), !1;
	}, hn = function(e, t, r) {
		if (lt[t] || xt && (t === "id" || t === "name") && (r in n || r in Kt)) return !1;
		let i = V[t] || W.attributeCheck instanceof Function && W.attributeCheck(t, e);
		if (!(dt && M(Ee, t)) && !(ut && M(j, t))) {
			if (!i) {
				if (!(_n(e) && (H.tagNameCheck instanceof RegExp && M(H.tagNameCheck, e) || H.tagNameCheck instanceof Function && H.tagNameCheck(e)) && (H.attributeNameCheck instanceof RegExp && M(H.attributeNameCheck, t) || H.attributeNameCheck instanceof Function && H.attributeNameCheck(t, e)) || t === "is" && H.allowCustomizedBuiltInElements && (H.tagNameCheck instanceof RegExp && M(H.tagNameCheck, r) || H.tagNameCheck instanceof Function && H.tagNameCheck(r)))) return !1;
			} else if (!At[t] && !M(ot, be(r, De, "")) && !((t === "src" || t === "xlink:href" || t === "href") && e !== "script" && xe(r, "data:") === 0 && Ot[e]) && !(ft && !M(P, be(r, De, ""))) && r) return !1;
		}
		return !0;
	}, gn = F({}, [
		"annotation-xml",
		"color-profile",
		"font-face",
		"font-face-format",
		"font-face-name",
		"font-face-src",
		"font-face-uri",
		"missing-glyph"
	]), _n = function(e) {
		return !gn[_e(e)] && M(Oe, e);
	}, vn = function(e, t, n, r) {
		if (y && typeof u == "object" && typeof u.getAttributeType == "function" && !n) switch (u.getAttributeType(e, t)) {
			case "TrustedHTML": return C(r);
			case "TrustedScriptURL": return ie(r);
		}
		return r;
	}, yn = function(e, n, r, i) {
		try {
			r ? e.setAttributeNS(r, n, i) : e.setAttribute(n, i), ln(e) ? Z(e) : me(t.removed);
		} catch {
			Q(n, e);
		}
	}, bn = function(e) {
		$(O.beforeSanitizeAttributes, e, null);
		let t = e.attributes;
		if (!t || ln(e)) return;
		let n = {
			attrName: "",
			attrValue: "",
			keepAttr: !0,
			allowedAttributes: V,
			forceKeepAttr: void 0
		}, r = t.length, i = X(e.nodeName);
		for (; r--;) {
			let a = t[r], o = a.name, s = a.namespaceURI, c = a.value, l = X(o), u = c, d = o === "value" ? u : Se(u);
			if (n.attrName = l, n.attrValue = d, n.keepAttr = !0, n.forceKeepAttr = void 0, $(O.uponSanitizeAttribute, e, n), d = n.attrValue, St && (l === "id" || l === "name") && xe(d, Ct) !== 0 && (Q(o, e), d = Ct + d), mt && M(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, d)) {
				Q(o, e);
				continue;
			}
			if (l === "attributename" && ye(d, "href")) {
				Q(o, e);
				continue;
			}
			if (!n.forceKeepAttr) {
				if (!n.keepAttr) {
					Q(o, e);
					continue;
				}
				if (!pt && M(tt, d)) {
					Q(o, e);
					continue;
				}
				if (G && (d = sn(d)), !hn(i, l, d)) {
					Q(o, e);
					continue;
				}
				d = vn(i, l, s, d), d !== u && yn(e, o, s, d);
			}
		}
		$(O.afterSanitizeAttributes, e, null);
	}, xn = function(e) {
		let t = null, n = on(e);
		for ($(O.beforeSanitizeShadowDOM, e, null); t = n.nextNode();) if ($(O.uponSanitizeShadowNode, t, null), mn(t), bn(t), un(t.content) && xn(t.content), (_ ? _(t) : t.nodeType) === R.element) {
			let e = h(t);
			un(e) && (Sn(e), xn(e));
		}
		$(O.afterSanitizeShadowDOM, e, null);
	}, Sn = function(e) {
		let t = [{
			node: e,
			shadow: null
		}];
		for (; t.length > 0;) {
			let e = t.pop();
			if (e.shadow) {
				xn(e.shadow);
				continue;
			}
			let n = e.node, r = (_ ? _(n) : n.nodeType) === R.element, i = p(n);
			if (i) for (let e = i.length - 1; e >= 0; --e) t.push({
				node: i[e],
				shadow: null
			});
			if (r) {
				let e = v ? v(n) : null;
				if (typeof e == "string" && X(e) === "template") {
					let e = n.content;
					un(e) && t.push({
						node: e,
						shadow: null
					});
				}
			}
			if (r) {
				let e = h(n);
				un(e) && t.push({
					node: null,
					shadow: e
				}, {
					node: e,
					shadow: null
				});
			}
		}
	};
	return t.sanitize = function(e) {
		let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = null, a = null, o = null, s = null;
		if (Ft = !e, Ft && (e = "<!-->"), typeof e != "string" && !dn(e) && (e = ke(e), typeof e != "string")) throw N("dirty is not a string, aborting");
		if (!t.isSupported) return e;
		ht ? (B = gt, V = _t) : Jt(n), (O.uponSanitizeElement.length > 0 || O.uponSanitizeAttribute.length > 0) && (B = I(B)), O.uponSanitizeAttribute.length > 0 && (V = I(V)), t.removed = [];
		let c = Tt && typeof e != "string" && dn(e);
		if (c) {
			let t = v ? v(e) : e.nodeName;
			if (typeof t == "string") {
				let e = X(t);
				if (!B[e] || U[e]) throw N("root node is forbidden and cannot be sanitized in-place");
			}
			if (ln(e)) throw N("root node is clobbered and cannot be sanitized in-place");
			try {
				Sn(e);
			} catch (t) {
				throw tn(e), t;
			}
		} else if (dn(e)) i = an("<!---->"), a = i.ownerDocument.importNode(e, !0), a.nodeType === R.element && a.nodeName === "BODY" || a.nodeName === "HTML" ? i = a : i.appendChild(a), Sn(a);
		else {
			if (!q && !G && !K && e.indexOf("<") === -1) return y && bt ? C(e) : e;
			if (i = an(e), !i) return q ? null : bt ? b : "";
		}
		i && vt && Z(i.firstChild);
		let l = on(c ? e : i);
		try {
			for (; o = l.nextNode();) mn(o), bn(o), un(o.content) && xn(o.content);
		} catch (t) {
			throw c && tn(e), t;
		}
		if (c) return fe(t.removed, (e) => {
			e.element && rn(e.element);
		}), G && cn(e), e;
		if (q) {
			if (G && cn(i), yt) for (s = le.call(i.ownerDocument); i.firstChild;) s.appendChild(i.firstChild);
			else s = i;
			return (V.shadowroot || V.shadowrootmode) && (s = de.call(r, s, !0)), s;
		}
		let u = K ? i.outerHTML : i.innerHTML;
		return K && B["!doctype"] && i.ownerDocument && i.ownerDocument.doctype && i.ownerDocument.doctype.name && M(Xe, i.ownerDocument.doctype.name) && (u = "<!DOCTYPE " + i.ownerDocument.doctype.name + ">\n" + u), G && (u = sn(u)), y && bt ? C(u) : u;
	}, t.setConfig = function() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		Jt(e), ht = !0, gt = B, _t = V;
	}, t.clearConfig = function() {
		Gt = null, ht = !1, gt = null, _t = null, y = x, b = "";
	}, t.isValidAttribute = function(e, t, n) {
		Gt || Jt({});
		let r = X(e), i = X(t);
		return hn(r, i, n);
	}, t.addHook = function(e, t) {
		typeof t == "function" && A(O, e) && he(O[e], t);
	}, t.removeHook = function(e, t) {
		if (A(O, e)) {
			if (t !== void 0) {
				let n = pe(O[e], t);
				return n === -1 ? void 0 : ge(O[e], n, 1)[0];
			}
			return me(O[e]);
		}
	}, t.removeHooks = function(e) {
		A(O, e) && (O[e] = []);
	}, t.removeAllHooks = function() {
		O = it();
	}, t;
}
var ot = at(), B = [
	"http:",
	"https:",
	"mailto:"
];
function st(e) {
	try {
		let t = new URL(e);
		return B.includes(t.protocol);
	} catch {
		return !1;
	}
}
function V(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
}
function ct(e) {
	return ot.sanitize(e);
}
function H(e) {
	let t = ["platform.twitter.com", "platform.x.com"], n = !1;
	try {
		let r = new URL(e.getAttribute("src") || "");
		n = r.protocol === "https:" && t.includes(r.hostname);
	} catch {
		n = !1;
	}
	if (!n) {
		e.parentNode?.removeChild(e);
		return;
	}
	e.textContent = "";
}
function U(e) {
	let t = !1;
	try {
		let n = new URL(e.getAttribute("src") || "", window.location.href);
		t = (n.protocol === "https:" || n.protocol === "http:") && n.origin !== window.location.origin;
	} catch {
		t = !1;
	}
	if (!t) {
		e.parentNode?.removeChild(e);
		return;
	}
	e.setAttribute("sandbox", "allow-scripts allow-same-origin allow-popups allow-presentation allow-forms");
}
var lt = ot(window);
lt.addHook("uponSanitizeElement", (e, t) => {
	let n = e;
	t.tagName === "script" ? H(n) : t.tagName === "iframe" && U(n);
});
function W(e) {
	return lt.sanitize(e, {
		ADD_TAGS: ["iframe", "script"],
		ADD_ATTR: [
			"target",
			"frameborder",
			"allowfullscreen",
			"async",
			"charset",
			"sandbox"
		],
		FORCE_BODY: !0
	});
}
function ut(e, t = []) {
	if (t.length === 0) return e.replace(/<br\s*\/?>/gi, " ").replace(/<\/p>\s*<p>|<\/div>\s*<div>|<\/h[1-6]>\s*<|<\/li>\s*<li>|<\/a>/gi, " ").replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
	let n = t.map((e) => e.toLowerCase()), r = {}, i = 0, a = e.replace(/<\/(h[1-6]|p|div|li|blockquote|pre)>/gi, "<br>");
	for (let e of n) {
		let t = RegExp(`<${e}[^>]*>.*?<\\/${e}>|<${e}[^>]*\\/?>`, "gis");
		a = a.replace(t, (e) => {
			let t = `__EXCLUDED_TAG_${i += 1}__`;
			return r[t] = e, t;
		});
	}
	let o = a;
	n.includes("br") || (o = a.replace(/<br\s*\/?>/gi, " "));
	let s = o.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
	for (let [e, t] of Object.entries(r)) s = s.replace(e, t);
	return s;
}
var dt = (e) => {
	let t = document.createElement("div");
	t.innerHTML = e;
	let n = t.getElementsByTagName("a");
	for (let e = 0; e < n.length; e++) (n[e].getAttribute("href") || "").match(/^\s*(javascript|data|vbscript):/i) && n[e].removeAttribute("href"), n[e].setAttribute("target", "_blank"), n[e].setAttribute("rel", "noopener noreferrer");
	return t.innerHTML;
}, ft = (e) => {
	let t = document.createElement("div");
	t.innerHTML = e;
	let n = t.querySelectorAll(".kg-video-card video");
	for (let e = 0; e < n.length; e++) {
		let t = n[e];
		t.setAttribute("playsinline", ""), t.setAttribute("webkit-playsinline", ""), t.setAttribute("x5-playsinline", ""), t.hasAttribute("autoplay") && (t.setAttribute("muted", ""), t.muted = !0);
	}
	return t.innerHTML;
};
//#endregion
export { W as a, x as c, m as d, p as f, dt as i, v as l, V as n, ct as o, f as p, st as r, ut as s, ft as t, g as u };

//# sourceMappingURL=content-formatters-BpQARh28.js.map