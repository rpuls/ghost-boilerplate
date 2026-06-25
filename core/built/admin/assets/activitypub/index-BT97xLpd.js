import { bL as _, bC as b, bs as Y, aE as k, aP as Z, bz as Q, bo as q, aC as K, x as tt, bW as et, bQ as O } from "./index-sudOvKcY.js";
const j = String.raw, it = (() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
})(), st = typeof CSS < "u" && CSS.supports && CSS.supports("line-height", "mod(1,1)"), $ = typeof matchMedia < "u" ? matchMedia("(prefers-reduced-motion: reduce)") : null, E = "--_number-flow-d-opacity", T = "--_number-flow-d-width", A = "--_number-flow-dx", N = "--_number-flow-d", nt = (() => {
  try {
    return CSS.registerProperty({
      name: E,
      syntax: "<number>",
      inherits: !1,
      initialValue: "0"
    }), CSS.registerProperty({
      name: A,
      syntax: "<length>",
      inherits: !0,
      initialValue: "0px"
    }), CSS.registerProperty({
      name: T,
      syntax: "<number>",
      inherits: !1,
      initialValue: "0"
    }), CSS.registerProperty({
      name: N,
      syntax: "<number>",
      inherits: !0,
      initialValue: "0"
    }), !0;
  } catch {
    return !1;
  }
})(), C = "round(nearest, calc(var(--number-flow-mask-height, 0.25em) / 2), 1px)", g = `calc(${C} * 2)`, x = "var(--number-flow-mask-width, 0.5em)", y = `calc(${x} / var(--scale-x))`, w = "#000 0, transparent 71%", D = j`:host{display:inline-block;direction:ltr;white-space:nowrap;isolation:isolate;line-height:1}.number,.number__inner{display:inline-block;transform-origin:left top}:host([data-will-change]) :is(.number,.number__inner,.section,.digit,.digit__num,.symbol){will-change:transform}.number{--scale-x:calc(1 + var(${T}) / var(--width));transform:translateX(var(${A})) scaleX(var(--scale-x));margin:0 calc(-1 * ${x});position:relative;-webkit-mask-image:linear-gradient(to right,transparent 0,#000 ${y},#000 calc(100% - ${y}),transparent ),linear-gradient(to bottom,transparent 0,#000 ${g},#000 calc(100% - ${g}),transparent 100% ),radial-gradient(at bottom right,${w}),radial-gradient(at bottom left,${w}),radial-gradient(at top left,${w}),radial-gradient(at top right,${w});-webkit-mask-size:100% calc(100% - ${g} * 2),calc(100% - ${y} * 2) 100%,${y} ${g},${y} ${g},${y} ${g},${y} ${g};-webkit-mask-position:center,center,top left,top right,bottom right,bottom left;-webkit-mask-repeat:no-repeat}.number__inner{padding:${C} ${x};transform:scaleX(calc(1 / var(--scale-x))) translateX(calc(-1 * var(${A})))}:host > :not(.number){z-index:5}.section,.symbol{display:inline-block;position:relative;isolation:isolate}.section::after{content:'\200b';display:inline-block}.section--justify-left{transform-origin:center left}.section--justify-right{transform-origin:center right}.section > [inert],.symbol > [inert]{margin:0 !important;position:absolute !important;z-index:-1}.digit{display:inline-block;position:relative;--c:var(--current) + var(${N})}.digit__num,.number .section::after{padding:${C} 0}.digit__num{display:inline-block;--offset-raw:mod(var(--length) + var(--n) - mod(var(--c),var(--length)),var(--length));--offset:calc( var(--offset-raw) - var(--length) * round(down,var(--offset-raw) / (var(--length) / 2),1) );--y:clamp(-100%,var(--offset) * 100%,100%);transform:translateY(var(--y))}.digit__num[inert]{position:absolute;top:0;left:50%;transform:translateX(-50%) translateY(var(--y))}.digit:not(.is-spinning) .digit__num[inert]{display:none}.symbol__value{display:inline-block;mix-blend-mode:plus-lighter;white-space:pre}.section--justify-left .symbol > [inert]{left:0}.section--justify-right .symbol > [inert]{right:0}.animate-presence{opacity:calc(1 + var(${E}))}`, at = HTMLElement, rt = j`:host{display:inline-block;direction:ltr;white-space:nowrap;line-height:1}span{display:inline-block}:host([data-will-change]) span{will-change:transform}.number,.digit{padding:${C} 0}.symbol{white-space:pre}`, ot = (n = "") => j`:where(number-flow${n}){line-height:1}number-flow${n} > span{font-kerning:none;display:inline-block;padding:${g} 0}`, lt = (n, t) => n == null ? t : t == null ? n : Math.max(n, t), R = /* @__PURE__ */ new WeakMap(), Ct = {
  onUpdate(n, t, e) {
    if (R.set(e, void 0), !e.computedTrend)
      return;
    const i = t.integer.concat(t.fraction).filter((o) => o.type === "integer" || o.type === "fraction"), s = n.integer.concat(n.fraction).filter((o) => o.type === "integer" || o.type === "fraction"), r = i.find((o) => !s.find((l) => l.pos === o.pos && l.value === o.value)), a = s.find((o) => !i.find((l) => o.pos === l.pos && o.value === l.value));
    R.set(e, lt(r?.pos, a?.pos));
  },
  getDelta(n, t, e) {
    const i = n - t, s = R.get(e.flow);
    if (!i && s != null && s >= e.pos)
      return e.length * e.flow.computedTrend;
  }
}, v = (n, t, e) => {
  const i = document.createElement(n), [s, r] = Array.isArray(t) ? [void 0, t] : [t, e];
  return s && Object.assign(i, s), r?.forEach((a) => i.appendChild(a)), i;
}, ht = (n, t) => {
  var e;
  return t === "left" ? n.offsetLeft : (((e = n.offsetParent instanceof HTMLElement ? n.offsetParent : null) == null ? void 0 : e.offsetWidth) ?? 0) - n.offsetWidth - n.offsetLeft;
}, ct = (n) => n.offsetWidth > 0 && n.offsetHeight > 0, dt = (n, t) => {
  !customElements.get(n) && customElements.define(n, t);
};
function pt(n, t, { reverse: e = !1 } = {}) {
  const i = n.length;
  for (let s = e ? i - 1 : 0; e ? s >= 0 : s < i; e ? s-- : s++)
    t(n[s], s);
}
function ut(n, t, e, i) {
  const s = t.formatToParts(n);
  e && s.unshift({ type: "prefix", value: e }), i && s.push({ type: "suffix", value: i });
  const r = [], a = [], o = [], l = [], c = {}, p = (d) => `${d}:${c[d] = (c[d] ?? -1) + 1}`;
  let u = "", f = !1, m = !1;
  for (const d of s) {
    u += d.value;
    const h = d.type === "minusSign" || d.type === "plusSign" ? "sign" : d.type;
    h === "integer" ? (f = !0, a.push(...d.value.split("").map((S) => ({ type: h, value: parseInt(S) })))) : h === "group" ? a.push({ type: h, value: d.value }) : h === "decimal" ? (m = !0, o.push({ type: h, value: d.value, key: p(h) })) : h === "fraction" ? o.push(...d.value.split("").map((S) => ({
      type: h,
      value: parseInt(S),
      key: p(h),
      pos: -1 - c[h]
    }))) : (f || m ? l : r).push({
      type: h,
      value: d.value,
      key: p(h)
    });
  }
  const L = [];
  for (let d = a.length - 1; d >= 0; d--) {
    const h = a[d];
    L.unshift(h.type === "integer" ? {
      ...h,
      key: p(h.type),
      pos: c[h.type]
    } : {
      ...h,
      key: p(h.type)
    });
  }
  return {
    pre: r,
    integer: L,
    fraction: o,
    post: l,
    valueAsString: u,
    value: typeof n == "string" ? parseFloat(n) : n
  };
}
const W = st && it && nt;
class X extends at {
  constructor() {
    super(), this.created = !1, this.batched = !1;
    const { animated: t, ...e } = this.constructor.defaultProps;
    this._animated = this.computedAnimated = t, Object.assign(this, e);
  }
  get animated() {
    return this._animated;
  }
  set animated(t) {
    var e;
    this.animated !== t && (this._animated = t, (e = this.shadowRoot) == null || e.getAnimations().forEach((i) => i.finish()));
  }
  /**
   * @internal
   */
  set data(t) {
    var e, i;
    if (t == null)
      return;
    const { pre: s, integer: r, fraction: a, post: o, value: l } = t;
    if (this.created) {
      const c = this._data;
      this._data = t, this.computedTrend = typeof this.trend == "function" ? this.trend(c.value, l) : this.trend, this.computedAnimated = W && this._animated && (!this.respectMotionPreference || !((e = $) != null && e.matches)) && // https://github.com/barvian/number-flow/issues/9
      ct(this) && // https://github.com/barvian/number-flow/issues/165
      this.ownerDocument.visibilityState === "visible", (i = this.plugins) == null || i.forEach((p) => {
        var u;
        return (u = p.onUpdate) == null ? void 0 : u.call(p, t, c, this);
      }), this.batched || this.willUpdate(), this._pre.update(s), this._num.update({ integer: r, fraction: a }), this._post.update(o), this.batched || this.didUpdate();
    } else {
      this._data = t, this.attachShadow({ mode: "open" });
      try {
        this._internals ?? (this._internals = this.attachInternals()), this._internals.role = "img";
      } catch {
      }
      const c = document.createElement("style");
      this.nonce && (c.nonce = this.nonce), c.textContent = D, this.shadowRoot.appendChild(c), this._pre = new I(this, s, {
        justify: "right",
        part: "left"
      }), this.shadowRoot.appendChild(this._pre.el), this._num = new ft(this, r, a), this.shadowRoot.appendChild(this._num.el), this._post = new I(this, o, {
        justify: "left",
        part: "right"
      }), this.shadowRoot.appendChild(this._post.el), this.created = !0;
    }
    try {
      this._internals.ariaLabel = t.valueAsString;
    } catch {
    }
  }
  /**
   * @internal
   */
  willUpdate() {
    this._pre.willUpdate(), this._num.willUpdate(), this._post.willUpdate();
  }
  /**
   * @internal
   */
  didUpdate() {
    if (!this.computedAnimated)
      return;
    this._abortAnimationsFinish ? this._abortAnimationsFinish.abort() : this.dispatchEvent(new Event("animationsstart")), this._pre.didUpdate(), this._num.didUpdate(), this._post.didUpdate();
    const t = new AbortController();
    Promise.all(this.shadowRoot.getAnimations().map((e) => e.finished)).then(() => {
      t.signal.aborted || (this.dispatchEvent(new Event("animationsfinish")), this._abortAnimationsFinish = void 0);
    }), this._abortAnimationsFinish = t;
  }
}
X.defaultProps = {
  transformTiming: {
    duration: 900,
    // Make sure to keep this minified:
    easing: "linear(0,.005,.019,.039,.066,.096,.129,.165,.202,.24,.278,.316,.354,.39,.426,.461,.494,.526,.557,.586,.614,.64,.665,.689,.711,.731,.751,.769,.786,.802,.817,.831,.844,.856,.867,.877,.887,.896,.904,.912,.919,.925,.931,.937,.942,.947,.951,.955,.959,.962,.965,.968,.971,.973,.976,.978,.98,.981,.983,.984,.986,.987,.988,.989,.99,.991,.992,.992,.993,.994,.994,.995,.995,.996,.996,.9963,.9967,.9969,.9972,.9975,.9977,.9979,.9981,.9982,.9984,.9985,.9987,.9988,.9989,1)"
  },
  spinTiming: void 0,
  opacityTiming: { duration: 450, easing: "ease-out" },
  animated: !0,
  trend: (n, t) => Math.sign(t - n),
  respectMotionPreference: !0,
  plugins: void 0,
  digits: void 0
};
class ft {
  constructor(t, e, i, { className: s, ...r } = {}) {
    this.flow = t, this._integer = new F(t, e, {
      justify: "right",
      part: "integer"
    }), this._fraction = new F(t, i, {
      justify: "left",
      part: "fraction"
    }), this._inner = v("span", {
      className: "number__inner"
    }, [this._integer.el, this._fraction.el]), this.el = v("span", {
      ...r,
      part: "number",
      className: `number ${s ?? ""}`
    }, [this._inner]);
  }
  willUpdate() {
    this._prevWidth = this.el.offsetWidth, this._prevLeft = this.el.getBoundingClientRect().left, this._integer.willUpdate(), this._fraction.willUpdate();
  }
  update({ integer: t, fraction: e }) {
    this._integer.update(t), this._fraction.update(e);
  }
  didUpdate() {
    const t = this.el.getBoundingClientRect();
    this._integer.didUpdate(), this._fraction.didUpdate();
    const e = this._prevLeft - t.left, i = this.el.offsetWidth, s = this._prevWidth - i;
    this.el.style.setProperty("--width", String(i)), this.el.animate({
      [A]: [`${e}px`, "0px"],
      [T]: [s, 0]
    }, {
      ...this.flow.transformTiming,
      composite: "accumulate"
    });
  }
}
class z {
  constructor(t, e, { justify: i, className: s, ...r }, a) {
    this.flow = t, this.children = /* @__PURE__ */ new Map(), this.onCharRemove = (l) => () => {
      this.children.delete(l);
    }, this.justify = i;
    const o = e.map((l) => this.addChar(l).el);
    this.el = v("span", {
      ...r,
      className: `section section--justify-${i} ${s ?? ""}`
    }, a ? a(o) : o);
  }
  addChar(t, { startDigitsAtZero: e = !1, ...i } = {}) {
    const s = t.type === "integer" || t.type === "fraction" ? new J(this, t.type, e ? 0 : t.value, t.pos, {
      ...i,
      onRemove: this.onCharRemove(t.key)
    }) : new mt(this, t.type, t.value, {
      ...i,
      onRemove: this.onCharRemove(t.key)
    });
    return this.children.set(t.key, s), s;
  }
  unpop(t) {
    t.el.removeAttribute("inert"), t.el.style.top = "", t.el.style[this.justify] = "";
  }
  pop(t) {
    t.forEach((e) => {
      e.el.style.top = `${e.el.offsetTop}px`, e.el.style[this.justify] = `${ht(e.el, this.justify)}px`;
    }), t.forEach((e) => {
      e.el.setAttribute("inert", ""), e.present = !1;
    });
  }
  addNewAndUpdateExisting(t) {
    const e = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), s = this.justify === "left", r = s ? "prepend" : "append";
    if (pt(t, (a) => {
      let o;
      this.children.has(a.key) ? (o = this.children.get(a.key), i.set(a, o), this.unpop(o), o.present = !0) : (o = this.addChar(a, { startDigitsAtZero: !0, animateIn: !0 }), e.set(a, o)), this.el[r](o.el);
    }, { reverse: s }), this.flow.computedAnimated) {
      const a = this.el.getBoundingClientRect();
      e.forEach((o) => {
        o.willUpdate(a);
      });
    }
    e.forEach((a, o) => {
      a.update(o.value);
    }), i.forEach((a, o) => {
      a.update(o.value);
    });
  }
  willUpdate() {
    const t = this.el.getBoundingClientRect();
    this._prevOffset = t[this.justify], this.children.forEach((e) => e.willUpdate(t));
  }
  didUpdate() {
    const t = this.el.getBoundingClientRect();
    this.children.forEach((s) => s.didUpdate(t));
    const e = t[this.justify], i = this._prevOffset - e;
    i && this.children.size && this.el.animate({
      transform: [`translateX(${i}px)`, "none"]
    }, {
      ...this.flow.transformTiming,
      composite: "accumulate"
    });
  }
}
class F extends z {
  update(t) {
    const e = /* @__PURE__ */ new Map();
    this.children.forEach((i, s) => {
      t.find((r) => r.key === s) || e.set(s, i), this.unpop(i);
    }), this.addNewAndUpdateExisting(t), e.forEach((i) => {
      i instanceof J && i.update(0);
    }), this.pop(e);
  }
}
class I extends z {
  update(t) {
    const e = /* @__PURE__ */ new Map();
    this.children.forEach((i, s) => {
      t.find((r) => r.key === s) || e.set(s, i);
    }), this.pop(e), this.addNewAndUpdateExisting(t);
  }
}
class U {
  constructor(t, e, { onRemove: i, animateIn: s = !1 } = {}) {
    this.flow = t, this.el = e, this._present = !0, this._remove = () => {
      var r;
      this.el.remove(), (r = this._onRemove) == null || r.call(this);
    }, this.el.classList.add("animate-presence"), this.flow.computedAnimated && s && this.el.animate({
      [E]: [-0.9999, 0]
    }, {
      ...this.flow.opacityTiming,
      composite: "accumulate"
    }), this._onRemove = i;
  }
  get present() {
    return this._present;
  }
  set present(t) {
    if (this._present !== t) {
      if (this._present = t, t ? this.el.removeAttribute("inert") : this.el.setAttribute("inert", ""), !this.flow.computedAnimated) {
        t || this._remove();
        return;
      }
      this.el.style.setProperty("--_number-flow-d-opacity", t ? "0" : "-.999"), this.el.animate({
        [E]: t ? [-0.9999, 0] : [0.999, 0]
      }, {
        ...this.flow.opacityTiming,
        composite: "accumulate"
      }), t ? this.flow.removeEventListener("animationsfinish", this._remove) : this.flow.addEventListener("animationsfinish", this._remove, {
        once: !0
      });
    }
  }
}
class H extends U {
  constructor(t, e, i, s) {
    super(t.flow, i, s), this.section = t, this.value = e, this.el = i;
  }
}
class J extends H {
  constructor(t, e, i, s, r) {
    var a, o;
    const l = (((o = (a = t.flow.digits) == null ? void 0 : a[s]) == null ? void 0 : o.max) ?? 9) + 1, c = Array.from({ length: l }).map((u, f) => {
      const m = v("span", { className: "digit__num" }, [
        document.createTextNode(String(f))
      ]);
      return f !== i && m.setAttribute("inert", ""), m.style.setProperty("--n", String(f)), m;
    }), p = v("span", {
      part: `digit ${e}-digit`,
      className: "digit"
    }, c);
    p.style.setProperty("--current", String(i)), p.style.setProperty("--length", String(l)), super(t, i, p, r), this.pos = s, this._onAnimationsFinish = () => {
      this.el.classList.remove("is-spinning");
    }, this._numbers = c, this.length = l;
  }
  willUpdate(t) {
    const e = this.el.getBoundingClientRect();
    this._prevValue = this.value;
    const i = e[this.section.justify] - t[this.section.justify], s = e.width / 2;
    this._prevCenter = this.section.justify === "left" ? i + s : i - s;
  }
  update(t) {
    this.el.style.setProperty("--current", String(t)), this._numbers.forEach((e, i) => i === t ? e.removeAttribute("inert") : e.setAttribute("inert", "")), this.value = t;
  }
  didUpdate(t) {
    const e = this.el.getBoundingClientRect(), i = e[this.section.justify] - t[this.section.justify], s = e.width / 2, r = this.section.justify === "left" ? i + s : i - s, a = this._prevCenter - r;
    a && this.el.animate({
      transform: [`translateX(${a}px)`, "none"]
    }, {
      ...this.flow.transformTiming,
      composite: "accumulate"
    });
    const o = this.getDelta();
    o && (this.el.classList.add("is-spinning"), this.el.animate({
      [N]: [-o, 0]
    }, {
      ...this.flow.spinTiming ?? this.flow.transformTiming,
      composite: "accumulate"
    }), this.flow.addEventListener("animationsfinish", this._onAnimationsFinish, { once: !0 }));
  }
  getDelta() {
    var t;
    if (this.flow.plugins)
      for (const s of this.flow.plugins) {
        const r = (t = s.getDelta) == null ? void 0 : t.call(s, this.value, this._prevValue, this);
        if (r != null)
          return r;
      }
    const e = this.value - this._prevValue, i = this.flow.computedTrend || Math.sign(e);
    return i < 0 && this.value > this._prevValue ? this.value - this.length - this._prevValue : i > 0 && this.value < this._prevValue ? this.length - this._prevValue + this.value : e;
  }
}
class mt extends H {
  constructor(t, e, i, s) {
    const r = v("span", {
      className: "symbol__value",
      textContent: i
    });
    super(t, i, v("span", {
      part: `symbol ${e}`,
      className: "symbol"
    }, [r]), s), this.type = e, this._children = /* @__PURE__ */ new Map(), this._onChildRemove = (a) => () => {
      this._children.delete(a);
    }, this._children.set(i, new U(this.flow, r, {
      onRemove: this._onChildRemove(i)
    }));
  }
  willUpdate(t) {
    if (this.type === "decimal")
      return;
    const e = this.el.getBoundingClientRect();
    this._prevOffset = e[this.section.justify] - t[this.section.justify];
  }
  update(t) {
    if (this.value !== t) {
      const e = this._children.get(this.value);
      e && (e.present = !1);
      const i = this._children.get(t);
      if (i)
        i.present = !0;
      else {
        const s = v("span", {
          className: "symbol__value",
          textContent: t
        });
        this.el.appendChild(s), this._children.set(t, new U(this.flow, s, {
          animateIn: !0,
          onRemove: this._onChildRemove(t)
        }));
      }
    }
    this.value = t;
  }
  didUpdate(t) {
    if (this.type === "decimal")
      return;
    const e = this.el.getBoundingClientRect()[this.section.justify] - t[this.section.justify], i = this._prevOffset - e;
    i && this.el.animate({
      transform: [`translateX(${i}px)`, "none"]
    }, { ...this.flow.transformTiming, composite: "accumulate" });
  }
}
const gt = (n) => [rt, ot(n), D], vt = parseInt(et.match(/^(\d+)\./)?.[1]), M = vt >= 19, yt = [
  "data",
  "digits"
];
class P extends X {
  attributeChangedCallback(t, e, i) {
    this[t] = JSON.parse(i);
  }
}
P.observedAttributes = M ? [] : yt;
dt("number-flow-react", P);
const wt = {};
function _t(n) {
  return n;
}
const V = M ? _t : JSON.stringify;
function B(n) {
  const { transformTiming: t, spinTiming: e, opacityTiming: i, animated: s, respectMotionPreference: r, trend: a, plugins: o, ...l } = n;
  return [
    {
      transformTiming: t,
      spinTiming: e,
      opacityTiming: i,
      animated: s,
      respectMotionPreference: r,
      trend: a,
      plugins: o
    },
    l
  ];
}
class bt extends tt {
  // Update the non-`data` props to avoid JSON serialization
  // Data needs to be set in render still:
  updateProperties(t) {
    if (!this.el) return;
    this.el.batched = !this.props.isolate;
    const [e] = B(this.props);
    Object.entries(e).forEach(([i, s]) => {
      this.el[i] = s ?? P.defaultProps[i];
    }), t?.onAnimationsStart && this.el.removeEventListener("animationsstart", t.onAnimationsStart), this.props.onAnimationsStart && this.el.addEventListener("animationsstart", this.props.onAnimationsStart), t?.onAnimationsFinish && this.el.removeEventListener("animationsfinish", t.onAnimationsFinish), this.props.onAnimationsFinish && this.el.addEventListener("animationsfinish", this.props.onAnimationsFinish);
  }
  componentDidMount() {
    this.updateProperties(), M && this.el && (this.el.digits = this.props.digits, this.el.data = this.props.data);
  }
  getSnapshotBeforeUpdate(t) {
    if (this.updateProperties(t), t.data !== this.props.data) {
      if (this.props.group)
        return this.props.group.willUpdate(), () => this.props.group?.didUpdate();
      if (!this.props.isolate)
        return this.el?.willUpdate(), () => this.el?.didUpdate();
    }
    return null;
  }
  componentDidUpdate(t, e, i) {
    i?.();
  }
  handleRef(t) {
    this.props.innerRef && (this.props.innerRef.current = t), this.el = t;
  }
  render() {
    const [t, { innerRef: e, className: i, data: s, nonce: r, willChange: a, isolate: o, group: l, digits: c, onAnimationsStart: p, onAnimationsFinish: u, ...f }] = B(this.props);
    return (
      // @ts-expect-error missing types
      /* @__PURE__ */ k("number-flow-react", {
        ref: this.handleRef,
        "data-will-change": a ? "" : void 0,
        // Have to rename this:
        class: i,
        nonce: r,
        ...f,
        dangerouslySetInnerHTML: {
          __html: ""
        },
        suppressHydrationWarning: !0,
        digits: V(c),
        // Make sure data is set last, everything else is updated:
        data: V(s)
      })
    );
  }
  constructor(t) {
    super(t), this.handleRef = this.handleRef.bind(this);
  }
}
const St = /* @__PURE__ */ Z(function({ value: t, locales: e, format: i, prefix: s, suffix: r, ...a }, o) {
  Q(o, () => l.current, []);
  const l = _(), c = q(G);
  c?.useRegister(l);
  const p = b(() => e ? JSON.stringify(e) : "", [
    e
  ]), u = b(() => i ? JSON.stringify(i) : "", [
    i
  ]), f = b(() => {
    const m = wt[`${p}:${u}`] ??= new Intl.NumberFormat(e, i);
    return ut(t, m, s, r);
  }, [
    t,
    p,
    u,
    s,
    r
  ]);
  return /* @__PURE__ */ k(bt, {
    ...a,
    group: c,
    data: f,
    innerRef: l
  });
}), G = /* @__PURE__ */ K(void 0);
function Rt({ children: n }) {
  const t = _(/* @__PURE__ */ new Set()), e = _(!1), i = _(/* @__PURE__ */ new WeakMap()), s = b(() => ({
    useRegister(r) {
      Y(() => (t.current.add(r), () => {
        t.current.delete(r);
      }), []);
    },
    willUpdate() {
      e.current || (e.current = !0, t.current.forEach((r) => {
        const a = r.current;
        !a || !a.created || (a.willUpdate(), i.current.set(a, !0));
      }));
    },
    didUpdate() {
      t.current.forEach((r) => {
        const a = r.current;
        !a || !i.current.get(a) || (a.didUpdate(), i.current.delete(a));
      }), e.current = !1;
    }
  }), []);
  return /* @__PURE__ */ k(G.Provider, {
    value: s
  }, n);
}
const xt = gt("-react"), $t = () => O(() => () => {
}, () => W, () => !1), Et = () => O((n) => ($?.addEventListener("change", n), () => $?.removeEventListener("change", n)), () => $.matches, () => !1);
function Ut({ respectMotionPreference: n = !0 } = {}) {
  const t = $t(), e = Et();
  return t && (!n || !e);
}
export {
  P as NumberFlowElement,
  Rt as NumberFlowGroup,
  Ct as continuous,
  St as default,
  xt as styles,
  Ut as useCanAnimate,
  $t as useIsSupported,
  Et as usePrefersReducedMotion
};
//# sourceMappingURL=index-BT97xLpd.js.map
