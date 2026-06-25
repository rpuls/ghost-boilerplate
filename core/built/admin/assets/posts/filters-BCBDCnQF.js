import { ak as ee, af as se, x as de, R as d, am as ne, a9 as ie, a1 as O, k as at, a7 as st, a6 as ae, ad as Cn, i as W, l as J, N as ra, g as aa, an as sa, n as ye } from "./index-Dqn5WIFh.js";
import { C as oa, b as an, B as ia } from "./button-CG2Dpjqy.js";
import { a as la, S as ca, C as ua, L as Yt } from "./search-CXP00fG8.js";
import { H as da, d as fa, D as ha, n as ma, i as pa, k as ga } from "./skeleton-Bihnkn8q.js";
import { R as ya, P as ba, O as va, a as wa, X as Wn } from "./dialog-3KY3A8t5.js";
import { b as xe, n as xa, m as _n, d as ka, g as Ma, p as qe, e as et, C as tt } from "./check-fsC5BvGC.js";
import { P as mt, b as pt, a as gt } from "./popover-DdbdKflP.js";
import { T as Da, c as Oa, C as Sa, a as Na } from "./tooltip-Ci7pesWi.js";
import { P as Ca } from "./plus-D2ekwsq0.js";
function Wa(e) {
  const t = ee({ value: e, previous: e });
  return se(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var yt = "Switch", [_a] = Ma(yt), [ja, At] = _a(yt);
function Fa(e) {
  const {
    __scopeSwitch: t,
    checked: n,
    children: r,
    defaultChecked: a,
    disabled: s,
    form: l,
    name: o,
    onCheckedChange: i,
    required: c,
    value: u = "on",
    // @ts-expect-error
    internal_do_not_use_render: f
  } = e, [h, p] = xa({
    prop: n,
    defaultProp: a ?? !1,
    onChange: i,
    caller: yt
  }), [y, S] = ne(null), [N, D] = ne(null), M = ee(!1), b = y ? !!l || !!y.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), w = {
    checked: h,
    setChecked: p,
    disabled: s,
    control: y,
    setControl: S,
    name: o,
    form: l,
    value: u,
    hasConsumerStoppedPropagationRef: M,
    required: c,
    defaultChecked: a,
    isFormControl: b,
    bubbleInput: N,
    setBubbleInput: D
  };
  return /* @__PURE__ */ d.jsx(ja, { scope: t, ...w, children: Ea(f) ? f(w) : r });
}
var jn = "SwitchTrigger", Fn = de(
  ({ __scopeSwitch: e, onClick: t, ...n }, r) => {
    const {
      value: a,
      disabled: s,
      checked: l,
      required: o,
      setControl: i,
      setChecked: c,
      hasConsumerStoppedPropagationRef: u,
      isFormControl: f,
      bubbleInput: h
    } = At(jn, e), p = _n(r, i);
    return /* @__PURE__ */ d.jsx(
      xe.button,
      {
        type: "button",
        role: "switch",
        "aria-checked": l,
        "aria-required": o,
        "data-state": In(l),
        "data-disabled": s ? "" : void 0,
        disabled: s,
        value: a,
        ...n,
        ref: p,
        onClick: ka(t, (y) => {
          c((S) => !S), h && f && (u.current = y.isPropagationStopped(), u.current || y.stopPropagation());
        })
      }
    );
  }
);
Fn.displayName = jn;
var $t = de(
  (e, t) => {
    const {
      __scopeSwitch: n,
      name: r,
      checked: a,
      defaultChecked: s,
      required: l,
      disabled: o,
      value: i,
      onCheckedChange: c,
      form: u,
      ...f
    } = e;
    return /* @__PURE__ */ d.jsx(
      Fa,
      {
        __scopeSwitch: n,
        checked: a,
        defaultChecked: s,
        disabled: o,
        required: l,
        onCheckedChange: c,
        name: r,
        form: u,
        value: i,
        internal_do_not_use_render: ({ isFormControl: h }) => /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
          /* @__PURE__ */ d.jsx(
            Fn,
            {
              ...f,
              ref: t,
              __scopeSwitch: n
            }
          ),
          h && /* @__PURE__ */ d.jsx(
            Yn,
            {
              __scopeSwitch: n
            }
          )
        ] })
      }
    );
  }
);
$t.displayName = yt;
var En = "SwitchThumb", Tn = de(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, a = At(En, n);
    return /* @__PURE__ */ d.jsx(
      xe.span,
      {
        "data-state": In(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
Tn.displayName = En;
var Pn = "SwitchBubbleInput", Yn = de(
  ({ __scopeSwitch: e, ...t }, n) => {
    const {
      control: r,
      hasConsumerStoppedPropagationRef: a,
      checked: s,
      defaultChecked: l,
      required: o,
      disabled: i,
      name: c,
      value: u,
      form: f,
      bubbleInput: h,
      setBubbleInput: p
    } = At(Pn, e), y = _n(n, p), S = Wa(s), N = da(r);
    ie(() => {
      const M = h;
      if (!M) return;
      const b = window.HTMLInputElement.prototype, v = Object.getOwnPropertyDescriptor(
        b,
        "checked"
      ).set, m = !a.current;
      if (S !== s && v) {
        const _ = new Event("click", { bubbles: m });
        v.call(M, s), M.dispatchEvent(_);
      }
    }, [h, S, s, a]);
    const D = ee(s);
    return /* @__PURE__ */ d.jsx(
      xe.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: l ?? D.current,
        required: o,
        disabled: i,
        name: c,
        value: u,
        form: f,
        ...t,
        tabIndex: -1,
        ref: y,
        style: {
          ...t.style,
          ...N,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          // We transform because the input is absolutely positioned but we have
          // rendered it **after** the button. This pulls it back to sit on top
          // of the button.
          transform: "translateX(-100%)"
        }
      }
    );
  }
);
Yn.displayName = Pn;
function Ea(e) {
  return typeof e == "function";
}
function In(e) {
  return e ? "checked" : "unchecked";
}
function Ta(e, t, n = "long") {
  return new Intl.DateTimeFormat("en-US", {
    // Enforces engine to render the time. Without the option JavaScriptCore omits it.
    hour: "numeric",
    timeZone: e,
    timeZoneName: n
  }).format(t).split(/\s/g).slice(2).join(" ");
}
const Pa = {}, Ze = {};
function Ne(e, t) {
  try {
    const r = (Pa[e] ||= new Intl.DateTimeFormat("en-US", {
      timeZone: e,
      timeZoneName: "longOffset"
    }).format)(t).split("GMT")[1];
    return r in Ze ? Ze[r] : sn(r, r.split(":"));
  } catch {
    if (e in Ze) return Ze[e];
    const n = e?.match(Ya);
    return n ? sn(e, n.slice(1)) : NaN;
  }
}
const Ya = /([+-]\d\d):?(\d\d)?/;
function sn(e, t) {
  const n = +(t[0] || 0), r = +(t[1] || 0), a = +(t[2] || 0) / 60;
  return Ze[e] = n * 60 + r > 0 ? n * 60 + r + a : n * 60 - r - a;
}
class Oe extends Date {
  //#region static
  constructor(...t) {
    super(), t.length > 1 && typeof t[t.length - 1] == "string" && (this.timeZone = t.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(Ne(this.timeZone, this)) ? this.setTime(NaN) : t.length ? typeof t[0] == "number" && (t.length === 1 || t.length === 2 && typeof t[1] != "number") ? this.setTime(t[0]) : typeof t[0] == "string" ? this.setTime(+new Date(t[0])) : t[0] instanceof Date ? this.setTime(+t[0]) : (this.setTime(+new Date(...t)), zn(this, t)) : this.setTime(Date.now());
  }
  static tz(t, ...n) {
    return n.length ? new Oe(...n, t) : new Oe(Date.now(), t);
  }
  //#endregion
  //#region time zone
  withTimeZone(t) {
    return new Oe(+this, t);
  }
  getTimezoneOffset() {
    const t = -Ne(this.timeZone, this);
    return t > 0 ? Math.floor(t) : Math.ceil(t);
  }
  //#endregion
  //#region time
  setTime(t) {
    return Date.prototype.setTime.apply(this, arguments), dt(this), +this;
  }
  //#endregion
  //#region date-fns integration
  [/* @__PURE__ */ Symbol.for("constructDateFrom")](t) {
    return new Oe(+new Date(t), this.timeZone);
  }
  //#endregion
}
const on = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
  if (!on.test(e)) return;
  const t = e.replace(on, "$1UTC");
  Oe.prototype[t] && (e.startsWith("get") ? Oe.prototype[e] = function() {
    return this.internal[t]();
  } : (Oe.prototype[e] = function() {
    return Date.prototype[t].apply(this.internal, arguments), Ia(this), +this;
  }, Oe.prototype[t] = function() {
    return Date.prototype[t].apply(this, arguments), dt(this), +this;
  }));
});
function dt(e) {
  e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - // Round after converting minutes to seconds to avoid fractional offset
  // precision errors from historical offsets.
  Math.round(-Ne(e.timeZone, e) * 60));
}
function Ia(e) {
  Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), zn(e);
}
function zn(e, t) {
  const n = Array.isArray(t) ? za(t) : +e.internal, r = Ne(e.timeZone, e), a = r > 0 ? Math.floor(r) : Math.ceil(r), s = /* @__PURE__ */ new Date(+e);
  s.setUTCHours(s.getUTCHours() - 1);
  const l = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), o = -(/* @__PURE__ */ new Date(+s)).getTimezoneOffset(), i = l - o;
  let c = l;
  if (i && l !== a) {
    const $ = Date.prototype.getHours.apply(e), C = Array.isArray(t) ? t[3] || 0 : e.internal.getUTCHours();
    if ($ !== C) {
      const z = /* @__PURE__ */ new Date(+e), X = l - a;
      X && z.setUTCMinutes(z.getUTCMinutes() + X);
      const U = Ne(e.timeZone, z);
      (U > 0 ? Math.floor(U) : Math.ceil(U)) === a && (c = o);
    }
  }
  const u = c - a;
  u && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + u);
  const f = /* @__PURE__ */ new Date(+e);
  f.setUTCSeconds(0);
  const h = l > 0 ? f.getSeconds() : (f.getSeconds() - 60) % 60, p = Math.round(-(Ne(e.timeZone, e) * 60)) % 60;
  (p || h) && Date.prototype.setUTCSeconds.call(e, Date.prototype.getUTCSeconds.call(e) + p + h);
  const y = Ne(e.timeZone, e), S = y > 0 ? Math.floor(y) : Math.ceil(y), D = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - S, M = S !== a, b = D - u, w = S - a, v = n - S * 60 * 1e3, m = w > 0 && ln(e) - n === w * 60 * 1e3 && ln(e, v) !== n;
  if (M && b && !m) {
    Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + b);
    const $ = Ne(e.timeZone, e), C = $ > 0 ? Math.floor($) : Math.ceil($), z = S - C;
    z && b < 0 && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + z);
  }
  dt(e);
  const B = (t ? n : n + p * 1e3) - +e.internal;
  B && Math.abs(B) < 1800 * 1e3 && (Date.prototype.setTime.call(e, +e + B), dt(e));
}
function za(e) {
  return Date.UTC(e[0], e.length > 1 ? e[1] : 0, e.length > 2 ? e[2] : 1, ...e.slice(3));
}
function ln(e, t) {
  const n = new Date(t ?? +e);
  return n.setUTCSeconds(n.getUTCSeconds() - Math.round(-Ne(e.timeZone, n) * 60)), +n;
}
class oe extends Oe {
  //#region static
  static tz(t, ...n) {
    return n.length ? new oe(...n, t) : new oe(Date.now(), t);
  }
  //#endregion
  //#region representation
  toISOString() {
    const [t, n, r] = this.tzComponents(), a = `${t}${n}:${r}`;
    return this.internal.toISOString().slice(0, -1) + a;
  }
  toString() {
    return `${this.toDateString()} ${this.toTimeString()}`;
  }
  toDateString() {
    const [t, n, r, a] = this.internal.toUTCString().split(" ");
    return `${t?.slice(0, -1)} ${r} ${n} ${a}`;
  }
  toTimeString() {
    const t = this.internal.toUTCString().split(" ")[4], [n, r, a] = this.tzComponents();
    return `${t} GMT${n}${r}${a} (${Ta(this.timeZone, this)})`;
  }
  toLocaleString(t, n) {
    return Date.prototype.toLocaleString.call(this, t, {
      ...n,
      timeZone: n?.timeZone || this.timeZone
    });
  }
  toLocaleDateString(t, n) {
    return Date.prototype.toLocaleDateString.call(this, t, {
      ...n,
      timeZone: n?.timeZone || this.timeZone
    });
  }
  toLocaleTimeString(t, n) {
    return Date.prototype.toLocaleTimeString.call(this, t, {
      ...n,
      timeZone: n?.timeZone || this.timeZone
    });
  }
  //#endregion
  //#region private
  tzComponents() {
    const t = this.getTimezoneOffset(), n = t > 0 ? "-" : "+", r = String(Math.floor(Math.abs(t) / 60)).padStart(2, "0"), a = String(Math.abs(t) % 60).padStart(2, "0");
    return [n, r, a];
  }
  //#endregion
  withTimeZone(t) {
    return new oe(+this, t);
  }
  //#region date-fns integration
  [/* @__PURE__ */ Symbol.for("constructDateFrom")](t) {
    return new oe(+new Date(t), this.timeZone);
  }
  //#endregion
}
const Bn = 6048e5, Ba = 864e5, cn = /* @__PURE__ */ Symbol.for("constructDateFrom");
function te(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && cn in e ? e[cn](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function K(e, t) {
  return te(t || e, e);
}
function An(e, t, n) {
  const r = K(e, n?.in);
  return isNaN(t) ? te(e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
function $n(e, t, n) {
  const r = K(e, n?.in);
  if (isNaN(t)) return te(e, NaN);
  if (!t)
    return r;
  const a = r.getDate(), s = te(e, r.getTime());
  s.setMonth(r.getMonth() + t + 1, 0);
  const l = s.getDate();
  return a >= l ? s : (r.setFullYear(
    s.getFullYear(),
    s.getMonth(),
    a
  ), r);
}
let Aa = {};
function ot() {
  return Aa;
}
function He(e, t) {
  const n = ot(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, a = K(e, t?.in), s = a.getDay(), l = (s < r ? 7 : 0) + s - r;
  return a.setDate(a.getDate() - l), a.setHours(0, 0, 0, 0), a;
}
function nt(e, t) {
  return He(e, { ...t, weekStartsOn: 1 });
}
function Vn(e, t) {
  const n = K(e, t?.in), r = n.getFullYear(), a = te(n, 0);
  a.setFullYear(r + 1, 0, 4), a.setHours(0, 0, 0, 0);
  const s = nt(a), l = te(n, 0);
  l.setFullYear(r, 0, 4), l.setHours(0, 0, 0, 0);
  const o = nt(l);
  return n.getTime() >= s.getTime() ? r + 1 : n.getTime() >= o.getTime() ? r : r - 1;
}
function un(e) {
  const t = K(e), n = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function Le(e, ...t) {
  const n = te.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function rt(e, t) {
  const n = K(e, t?.in);
  return n.setHours(0, 0, 0, 0), n;
}
function Vt(e, t, n) {
  const [r, a] = Le(
    n?.in,
    e,
    t
  ), s = rt(r), l = rt(a), o = +s - un(s), i = +l - un(l);
  return Math.round((o - i) / Ba);
}
function $a(e, t) {
  const n = Vn(e, t), r = te(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), nt(r);
}
function Va(e, t, n) {
  return An(e, t * 7, n);
}
function qa(e, t, n) {
  return $n(e, t * 12, n);
}
function Ra(e, t) {
  let n, r = t?.in;
  return e.forEach((a) => {
    !r && typeof a == "object" && (r = te.bind(null, a));
    const s = K(a, r);
    (!n || n < s || isNaN(+s)) && (n = s);
  }), te(r, n || NaN);
}
function Ha(e, t) {
  let n, r = t?.in;
  return e.forEach((a) => {
    !r && typeof a == "object" && (r = te.bind(null, a));
    const s = K(a, r);
    (!n || n > s || isNaN(+s)) && (n = s);
  }), te(r, n || NaN);
}
function Ga(e, t, n) {
  const [r, a] = Le(
    n?.in,
    e,
    t
  );
  return +rt(r) == +rt(a);
}
function qn(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function La(e) {
  return !(!qn(e) && typeof e != "number" || isNaN(+K(e)));
}
function Rn(e, t, n) {
  const [r, a] = Le(
    n?.in,
    e,
    t
  ), s = r.getFullYear() - a.getFullYear(), l = r.getMonth() - a.getMonth();
  return s * 12 + l;
}
function Ka(e, t) {
  const n = K(e, t?.in), r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function Hn(e, t) {
  const [n, r] = Le(e, t.start, t.end);
  return { start: n, end: r };
}
function Ua(e, t) {
  const { start: n, end: r } = Hn(t?.in, e);
  let a = +n > +r;
  const s = a ? +n : +r, l = a ? r : n;
  l.setHours(0, 0, 0, 0), l.setDate(1);
  let o = 1;
  const i = [];
  for (; +l <= s; )
    i.push(te(n, l)), l.setMonth(l.getMonth() + o);
  return a ? i.reverse() : i;
}
function Xa(e, t) {
  const n = K(e, t?.in);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function Za(e, t) {
  const n = K(e, t?.in), r = n.getFullYear();
  return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function Gn(e, t) {
  const n = K(e, t?.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function Qa(e, t) {
  const { start: n, end: r } = Hn(t?.in, e);
  let a = +n > +r;
  const s = a ? +n : +r, l = a ? r : n;
  l.setHours(0, 0, 0, 0), l.setMonth(0, 1);
  let o = 1;
  const i = [];
  for (; +l <= s; )
    i.push(te(n, l)), l.setFullYear(l.getFullYear() + o);
  return a ? i.reverse() : i;
}
function Ln(e, t) {
  const n = ot(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, a = K(e, t?.in), s = a.getDay(), l = (s < r ? -7 : 0) + 6 - (s - r);
  return a.setDate(a.getDate() + l), a.setHours(23, 59, 59, 999), a;
}
function Ja(e, t) {
  return Ln(e, { ...t, weekStartsOn: 1 });
}
const es = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, ts = (e, t, n) => {
  let r;
  const a = es[e];
  return typeof a == "string" ? r = a : t === 1 ? r = a.one : r = a.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function St(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const ns = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, rs = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, as = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, ss = {
  date: St({
    formats: ns,
    defaultWidth: "full"
  }),
  time: St({
    formats: rs,
    defaultWidth: "full"
  }),
  dateTime: St({
    formats: as,
    defaultWidth: "full"
  })
}, os = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, is = (e, t, n, r) => os[e];
function Ke(e) {
  return (t, n) => {
    const r = n?.context ? String(n.context) : "standalone";
    let a;
    if (r === "formatting" && e.formattingValues) {
      const l = e.defaultFormattingWidth || e.defaultWidth, o = n?.width ? String(n.width) : l;
      a = e.formattingValues[o] || e.formattingValues[l];
    } else {
      const l = e.defaultWidth, o = n?.width ? String(n.width) : e.defaultWidth;
      a = e.values[o] || e.values[l];
    }
    const s = e.argumentCallback ? e.argumentCallback(t) : t;
    return a[s];
  };
}
const ls = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, cs = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, us = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, ds = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, fs = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, hs = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, ms = (e, t) => {
  const n = Number(e), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, ps = {
  ordinalNumber: ms,
  era: Ke({
    values: ls,
    defaultWidth: "wide"
  }),
  quarter: Ke({
    values: cs,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Ke({
    values: us,
    defaultWidth: "wide"
  }),
  day: Ke({
    values: ds,
    defaultWidth: "wide"
  }),
  dayPeriod: Ke({
    values: fs,
    defaultWidth: "wide",
    formattingValues: hs,
    defaultFormattingWidth: "wide"
  })
};
function Ue(e) {
  return (t, n = {}) => {
    const r = n.width, a = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], s = t.match(a);
    if (!s)
      return null;
    const l = s[0], o = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], i = Array.isArray(o) ? ys(o, (f) => f.test(l)) : (
      // [TODO] -- I challenge you to fix the type
      gs(o, (f) => f.test(l))
    );
    let c;
    c = e.valueCallback ? e.valueCallback(i) : i, c = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(c)
    ) : c;
    const u = t.slice(l.length);
    return { value: c, rest: u };
  };
}
function gs(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function ys(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function bs(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const a = r[0], s = t.match(e.parsePattern);
    if (!s) return null;
    let l = e.valueCallback ? e.valueCallback(s[0]) : s[0];
    l = n.valueCallback ? n.valueCallback(l) : l;
    const o = t.slice(a.length);
    return { value: l, rest: o };
  };
}
const vs = /^(\d+)(th|st|nd|rd)?/i, ws = /\d+/i, xs = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, ks = {
  any: [/^b/i, /^(a|c)/i]
}, Ms = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Ds = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Os = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Ss = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, Ns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Cs = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Ws = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, _s = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, js = {
  ordinalNumber: bs({
    matchPattern: vs,
    parsePattern: ws,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Ue({
    matchPatterns: xs,
    defaultMatchWidth: "wide",
    parsePatterns: ks,
    defaultParseWidth: "any"
  }),
  quarter: Ue({
    matchPatterns: Ms,
    defaultMatchWidth: "wide",
    parsePatterns: Ds,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Ue({
    matchPatterns: Os,
    defaultMatchWidth: "wide",
    parsePatterns: Ss,
    defaultParseWidth: "any"
  }),
  day: Ue({
    matchPatterns: Ns,
    defaultMatchWidth: "wide",
    parsePatterns: Cs,
    defaultParseWidth: "any"
  }),
  dayPeriod: Ue({
    matchPatterns: Ws,
    defaultMatchWidth: "any",
    parsePatterns: _s,
    defaultParseWidth: "any"
  })
}, Be = {
  code: "en-US",
  formatDistance: ts,
  formatLong: ss,
  formatRelative: is,
  localize: ps,
  match: js,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Fs(e, t) {
  const n = K(e, t?.in);
  return Vt(n, Gn(n)) + 1;
}
function qt(e, t) {
  const n = K(e, t?.in), r = +nt(n) - +$a(n);
  return Math.round(r / Bn) + 1;
}
function Kn(e, t) {
  const n = K(e, t?.in), r = n.getFullYear(), a = ot(), s = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? a.firstWeekContainsDate ?? a.locale?.options?.firstWeekContainsDate ?? 1, l = te(t?.in || e, 0);
  l.setFullYear(r + 1, 0, s), l.setHours(0, 0, 0, 0);
  const o = He(l, t), i = te(t?.in || e, 0);
  i.setFullYear(r, 0, s), i.setHours(0, 0, 0, 0);
  const c = He(i, t);
  return +n >= +o ? r + 1 : +n >= +c ? r : r - 1;
}
function Es(e, t) {
  const n = ot(), r = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, a = Kn(e, t), s = te(t?.in || e, 0);
  return s.setFullYear(a, 0, r), s.setHours(0, 0, 0, 0), He(s, t);
}
function Rt(e, t) {
  const n = K(e, t?.in), r = +He(n, t) - +Es(n, t);
  return Math.round(r / Bn) + 1;
}
function G(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const _e = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return G(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : G(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return G(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const n = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return G(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return G(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return G(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return G(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), a = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return G(a, t.length);
  }
}, Ie = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, dn = {
  // Era
  G: function(e, t, n) {
    const r = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return n.era(r, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return n.era(r, { width: "narrow" });
      default:
        return n.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, n) {
    if (t === "yo") {
      const r = e.getFullYear(), a = r > 0 ? r : 1 - r;
      return n.ordinalNumber(a, { unit: "year" });
    }
    return _e.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const a = Kn(e, r), s = a > 0 ? a : 1 - a;
    if (t === "YY") {
      const l = s % 100;
      return G(l, 2);
    }
    return t === "Yo" ? n.ordinalNumber(s, { unit: "year" }) : G(s, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = Vn(e);
    return G(n, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const n = e.getFullYear();
    return G(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "Q":
        return String(r);
      // 01, 02, 03, 04
      case "QQ":
        return G(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return n.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return n.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return n.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "q":
        return String(r);
      // 01, 02, 03, 04
      case "qq":
        return G(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return n.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return n.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      default:
        return n.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return _e.M(e, t);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return n.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return n.month(r, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return n.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      // 1, 2, ..., 12
      case "L":
        return String(r + 1);
      // 01, 02, ..., 12
      case "LL":
        return G(r + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return n.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return n.month(r, {
          width: "narrow",
          context: "standalone"
        });
      default:
        return n.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, n, r) {
    const a = Rt(e, r);
    return t === "wo" ? n.ordinalNumber(a, { unit: "week" }) : G(a, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = qt(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : G(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : _e.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = Fs(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : G(r, t.length);
  },
  // Day of week
  E: function(e, t, n) {
    const r = e.getDay();
    switch (t) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, n, r) {
    const a = e.getDay(), s = (a - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(s);
      // Padded numerical value
      case "ee":
        return G(s, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return n.ordinalNumber(s, { unit: "day" });
      case "eee":
        return n.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return n.day(a, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return n.day(a, {
          width: "short",
          context: "formatting"
        });
      default:
        return n.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, r) {
    const a = e.getDay(), s = (a - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (same as in `e`)
      case "c":
        return String(s);
      // Padded numerical value
      case "cc":
        return G(s, t.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return n.ordinalNumber(s, { unit: "day" });
      case "ccc":
        return n.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return n.day(a, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return n.day(a, {
          width: "short",
          context: "standalone"
        });
      default:
        return n.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const r = e.getDay(), a = r === 0 ? 7 : r;
    switch (t) {
      // 2
      case "i":
        return String(a);
      // 02
      case "ii":
        return G(a, t.length);
      // 2nd
      case "io":
        return n.ordinalNumber(a, { unit: "day" });
      // Tue
      case "iii":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, n) {
    const a = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const r = e.getHours();
    let a;
    switch (r === 12 ? a = Ie.noon : r === 0 ? a = Ie.midnight : a = r / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const r = e.getHours();
    let a;
    switch (r >= 17 ? a = Ie.evening : r >= 12 ? a = Ie.afternoon : r >= 4 ? a = Ie.morning : a = Ie.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, n) {
    if (t === "ho") {
      let r = e.getHours() % 12;
      return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
    }
    return _e.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : _e.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : G(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : G(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : _e.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : _e.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return _e.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return hn(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return Ee(r);
      // Hours and minutes with `:` delimiter
      default:
        return Ee(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return hn(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return Ee(r);
      // Hours and minutes with `:` delimiter
      default:
        return Ee(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + fn(r, ":");
      default:
        return "GMT" + Ee(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + fn(r, ":");
      default:
        return "GMT" + Ee(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(+e / 1e3);
    return G(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    return G(+e, t.length);
  }
};
function fn(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), a = Math.trunc(r / 60), s = r % 60;
  return s === 0 ? n + String(a) : n + String(a) + t + G(s, 2);
}
function hn(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + G(Math.abs(e) / 60, 2) : Ee(e, t);
}
function Ee(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), a = G(Math.trunc(r / 60), 2), s = G(r % 60, 2);
  return n + a + t + s;
}
const mn = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    default:
      return t.date({ width: "full" });
  }
}, Un = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    default:
      return t.time({ width: "full" });
  }
}, Ts = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], a = n[2];
  if (!a)
    return mn(e, t);
  let s;
  switch (r) {
    case "P":
      s = t.dateTime({ width: "short" });
      break;
    case "PP":
      s = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      s = t.dateTime({ width: "long" });
      break;
    default:
      s = t.dateTime({ width: "full" });
      break;
  }
  return s.replace("{{date}}", mn(r, t)).replace("{{time}}", Un(a, t));
}, Ps = {
  p: Un,
  P: Ts
}, Ys = /^D+$/, Is = /^Y+$/, zs = ["D", "DD", "YY", "YYYY"];
function Bs(e) {
  return Ys.test(e);
}
function As(e) {
  return Is.test(e);
}
function $s(e, t, n) {
  const r = Vs(e, t, n);
  if (console.warn(r), zs.includes(e)) throw new RangeError(r);
}
function Vs(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const qs = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Rs = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Hs = /^'([^]*?)'?$/, Gs = /''/g, Ls = /[a-zA-Z]/;
function Qe(e, t, n) {
  const r = ot(), a = n?.locale ?? r.locale ?? Be, s = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, l = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, o = K(e, n?.in);
  if (!La(o))
    throw new RangeError("Invalid time value");
  let i = t.match(Rs).map((u) => {
    const f = u[0];
    if (f === "p" || f === "P") {
      const h = Ps[f];
      return h(u, a.formatLong);
    }
    return u;
  }).join("").match(qs).map((u) => {
    if (u === "''")
      return { isToken: !1, value: "'" };
    const f = u[0];
    if (f === "'")
      return { isToken: !1, value: Ks(u) };
    if (dn[f])
      return { isToken: !0, value: u };
    if (f.match(Ls))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + f + "`"
      );
    return { isToken: !1, value: u };
  });
  a.localize.preprocessor && (i = a.localize.preprocessor(o, i));
  const c = {
    firstWeekContainsDate: s,
    weekStartsOn: l,
    locale: a
  };
  return i.map((u) => {
    if (!u.isToken) return u.value;
    const f = u.value;
    (!n?.useAdditionalWeekYearTokens && As(f) || !n?.useAdditionalDayOfYearTokens && Bs(f)) && $s(f, t, String(e));
    const h = dn[f[0]];
    return h(o, f, a.localize, c);
  }).join("");
}
function Ks(e) {
  const t = e.match(Hs);
  return t ? t[1].replace(Gs, "'") : e;
}
function Us(e, t) {
  const n = K(e, t?.in), r = n.getFullYear(), a = n.getMonth(), s = te(n, 0);
  return s.setFullYear(r, a + 1, 0), s.setHours(0, 0, 0, 0), s.getDate();
}
function Xs(e, t) {
  return K(e, t?.in).getMonth();
}
function Zs(e, t) {
  return K(e, t?.in).getFullYear();
}
function Qs(e, t) {
  return +K(e) > +K(t);
}
function Js(e, t) {
  return +K(e) < +K(t);
}
function eo(e, t, n) {
  const [r, a] = Le(
    n?.in,
    e,
    t
  );
  return r.getFullYear() === a.getFullYear() && r.getMonth() === a.getMonth();
}
function to(e, t, n) {
  const [r, a] = Le(
    n?.in,
    e,
    t
  );
  return r.getFullYear() === a.getFullYear();
}
function no(e, t, n) {
  const r = K(e, n?.in), a = r.getFullYear(), s = r.getDate(), l = te(e, 0);
  l.setFullYear(a, t, 15), l.setHours(0, 0, 0, 0);
  const o = Us(l);
  return r.setMonth(t, Math.min(s, o)), r;
}
function ro(e, t, n) {
  const r = K(e, n?.in);
  return isNaN(+r) ? te(e, NaN) : (r.setFullYear(t), r);
}
const pn = 5, ao = 4;
function so(e, t) {
  const n = t.startOfMonth(e), r = n.getDay() > 0 ? n.getDay() : 7, a = t.addDays(e, -r + 1), s = t.addDays(a, pn * 7 - 1);
  return t.getMonth(e) === t.getMonth(s) ? pn : ao;
}
function Xn(e, t) {
  const n = t.startOfMonth(e), r = n.getDay();
  return r === 1 ? n : r === 0 ? t.addDays(n, -6) : t.addDays(n, -1 * (r - 1));
}
function oo(e, t) {
  const n = Xn(e, t), r = so(e, t);
  return t.addDays(n, r * 7 - 1);
}
const Zn = {
  ...Be,
  labels: {
    labelDayButton: (e, t, n, r) => {
      let a;
      r && typeof r.format == "function" ? a = r.format.bind(r) : a = (l, o) => Qe(l, o, { locale: Be, ...n });
      let s = a(e, "PPPP");
      return t.today && (s = `Today, ${s}`), t.selected && (s = `${s}, selected`), s;
    },
    labelMonthDropdown: "Choose the Month",
    labelNext: "Go to the Next Month",
    labelPrevious: "Go to the Previous Month",
    labelWeekNumber: (e) => `Week ${e}`,
    labelYearDropdown: "Choose the Year",
    labelGrid: (e, t, n) => {
      let r;
      return n && typeof n.format == "function" ? r = n.format.bind(n) : r = (a, s) => Qe(a, s, { locale: Be, ...t }), r(e, "LLLL yyyy");
    },
    labelGridcell: (e, t, n, r) => {
      let a;
      r && typeof r.format == "function" ? a = r.format.bind(r) : a = (l, o) => Qe(l, o, { locale: Be, ...n });
      let s = a(e, "PPPP");
      return t?.today && (s = `Today, ${s}`), s;
    },
    labelNav: "Navigation bar",
    labelWeekNumberHeader: "Week Number",
    labelWeekday: (e, t, n) => {
      let r;
      return n && typeof n.format == "function" ? r = n.format.bind(n) : r = (a, s) => Qe(a, s, { locale: Be, ...t }), r(e, "cccc");
    }
  }
};
class me {
  /**
   * Creates an instance of `DateLib`.
   *
   * @param options Configuration options for the date library.
   * @param overrides Custom overrides for the date library functions.
   */
  constructor(t, n) {
    this.Date = Date, this.today = () => this.overrides?.today ? this.overrides.today() : this.options.timeZone ? oe.tz(this.options.timeZone) : new this.Date(), this.newDate = (r, a, s) => this.overrides?.newDate ? this.overrides.newDate(r, a, s) : this.options.timeZone ? new oe(r, a, s, this.options.timeZone) : new Date(r, a, s), this.addDays = (r, a) => this.overrides?.addDays ? this.overrides.addDays(r, a) : An(r, a), this.addMonths = (r, a) => this.overrides?.addMonths ? this.overrides.addMonths(r, a) : $n(r, a), this.addWeeks = (r, a) => this.overrides?.addWeeks ? this.overrides.addWeeks(r, a) : Va(r, a), this.addYears = (r, a) => this.overrides?.addYears ? this.overrides.addYears(r, a) : qa(r, a), this.differenceInCalendarDays = (r, a) => this.overrides?.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(r, a) : Vt(r, a), this.differenceInCalendarMonths = (r, a) => this.overrides?.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(r, a) : Rn(r, a), this.eachMonthOfInterval = (r) => this.overrides?.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(r) : Ua(r), this.eachYearOfInterval = (r) => {
      const a = this.overrides?.eachYearOfInterval ? this.overrides.eachYearOfInterval(r) : Qa(r), s = new Set(a.map((o) => this.getYear(o)));
      if (s.size === a.length)
        return a;
      const l = [];
      return s.forEach((o) => {
        l.push(new Date(o, 0, 1));
      }), l;
    }, this.endOfBroadcastWeek = (r) => this.overrides?.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(r) : oo(r, this), this.endOfISOWeek = (r) => this.overrides?.endOfISOWeek ? this.overrides.endOfISOWeek(r) : Ja(r), this.endOfMonth = (r) => this.overrides?.endOfMonth ? this.overrides.endOfMonth(r) : Ka(r), this.endOfWeek = (r, a) => this.overrides?.endOfWeek ? this.overrides.endOfWeek(r, a) : Ln(r, this.options), this.endOfYear = (r) => this.overrides?.endOfYear ? this.overrides.endOfYear(r) : Za(r), this.format = (r, a, s) => {
      const l = this.overrides?.format ? this.overrides.format(r, a, this.options) : Qe(r, a, this.options);
      return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(l) : l;
    }, this.getISOWeek = (r) => this.overrides?.getISOWeek ? this.overrides.getISOWeek(r) : qt(r), this.getMonth = (r, a) => this.overrides?.getMonth ? this.overrides.getMonth(r, this.options) : Xs(r, this.options), this.getYear = (r, a) => this.overrides?.getYear ? this.overrides.getYear(r, this.options) : Zs(r, this.options), this.getWeek = (r, a) => this.overrides?.getWeek ? this.overrides.getWeek(r, this.options) : Rt(r, this.options), this.isAfter = (r, a) => this.overrides?.isAfter ? this.overrides.isAfter(r, a) : Qs(r, a), this.isBefore = (r, a) => this.overrides?.isBefore ? this.overrides.isBefore(r, a) : Js(r, a), this.isDate = (r) => this.overrides?.isDate ? this.overrides.isDate(r) : qn(r), this.isSameDay = (r, a) => this.overrides?.isSameDay ? this.overrides.isSameDay(r, a) : Ga(r, a), this.isSameMonth = (r, a) => this.overrides?.isSameMonth ? this.overrides.isSameMonth(r, a) : eo(r, a), this.isSameYear = (r, a) => this.overrides?.isSameYear ? this.overrides.isSameYear(r, a) : to(r, a), this.max = (r) => this.overrides?.max ? this.overrides.max(r) : Ra(r), this.min = (r) => this.overrides?.min ? this.overrides.min(r) : Ha(r), this.setMonth = (r, a) => this.overrides?.setMonth ? this.overrides.setMonth(r, a) : no(r, a), this.setYear = (r, a) => this.overrides?.setYear ? this.overrides.setYear(r, a) : ro(r, a), this.startOfBroadcastWeek = (r, a) => this.overrides?.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(r, this) : Xn(r, this), this.startOfDay = (r) => this.overrides?.startOfDay ? this.overrides.startOfDay(r) : rt(r), this.startOfISOWeek = (r) => this.overrides?.startOfISOWeek ? this.overrides.startOfISOWeek(r) : nt(r), this.startOfMonth = (r) => this.overrides?.startOfMonth ? this.overrides.startOfMonth(r) : Xa(r), this.startOfWeek = (r, a) => this.overrides?.startOfWeek ? this.overrides.startOfWeek(r, this.options) : He(r, this.options), this.startOfYear = (r) => this.overrides?.startOfYear ? this.overrides.startOfYear(r) : Gn(r), this.options = { locale: Zn, ...t }, this.overrides = n;
  }
  /**
   * Generates a mapping of Arabic digits (0-9) to the target numbering system
   * digits.
   *
   * @since 9.5.0
   * @returns A record mapping Arabic digits to the target numerals.
   */
  getDigitMap() {
    const { numerals: t = "latn" } = this.options, n = new Intl.NumberFormat("en-US", {
      numberingSystem: t
    }), r = {};
    for (let a = 0; a < 10; a++)
      r[a.toString()] = n.format(a);
    return r;
  }
  /**
   * Replaces Arabic digits in a string with the target numbering system digits.
   *
   * @since 9.5.0
   * @param input The string containing Arabic digits.
   * @returns The string with digits replaced.
   */
  replaceDigits(t) {
    const n = this.getDigitMap();
    return t.replace(/\d/g, (r) => n[r] || r);
  }
  /**
   * Formats a number using the configured numbering system.
   *
   * @since 9.5.0
   * @param value The number to format.
   * @returns The formatted number as a string.
   */
  formatNumber(t) {
    return this.replaceDigits(t.toString());
  }
  /**
   * Returns the preferred ordering for month and year labels for the current
   * locale.
   */
  getMonthYearOrder() {
    const t = this.options.locale?.code;
    return t && me.yearFirstLocales.has(t) ? "year-first" : "month-first";
  }
  /**
   * Formats the month/year pair respecting locale conventions.
   *
   * @since 9.11.0
   */
  formatMonthYear(t) {
    const { locale: n, timeZone: r, numerals: a } = this.options, s = n?.code;
    if (s && me.yearFirstLocales.has(s))
      try {
        return new Intl.DateTimeFormat(s, {
          month: "long",
          year: "numeric",
          timeZone: r,
          numberingSystem: a
        }).format(t);
      } catch {
      }
    const l = this.getMonthYearOrder() === "year-first" ? "y LLLL" : "LLLL y";
    return this.format(t, l);
  }
}
me.yearFirstLocales = /* @__PURE__ */ new Set([
  "eu",
  "hu",
  "ja",
  "ja-Hira",
  "ja-JP",
  "ko",
  "ko-KR",
  "lt",
  "lt-LT",
  "lv",
  "lv-LV",
  "mn",
  "mn-MN",
  "zh",
  "zh-CN",
  "zh-HK",
  "zh-TW"
]);
const Se = new me();
class Qn {
  constructor(t, n, r = Se) {
    this.date = t, this.displayMonth = n, this.outside = !!(n && !r.isSameMonth(t, n)), this.dateLib = r, this.isoDate = r.format(t, "yyyy-MM-dd"), this.displayMonthId = r.format(n, "yyyy-MM"), this.dateMonthId = r.format(t, "yyyy-MM");
  }
  /**
   * Checks if this day is equal to another `CalendarDay`, considering both the
   * date and the displayed month.
   *
   * @param day The `CalendarDay` to compare with.
   * @returns `true` if the days are equal, otherwise `false`.
   */
  isEqualTo(t) {
    return this.dateLib.isSameDay(t.date, this.date) && this.dateLib.isSameMonth(t.displayMonth, this.displayMonth);
  }
}
class io {
  constructor(t, n) {
    this.date = t, this.weeks = n;
  }
}
class lo {
  constructor(t, n) {
    this.days = n, this.weekNumber = t;
  }
}
function co(e) {
  return O.createElement("button", { ...e });
}
function uo(e) {
  return O.createElement("span", { ...e });
}
function fo(e) {
  const { size: t = 24, orientation: n = "left", className: r } = e;
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: handled by the parent component
    O.createElement(
      "svg",
      { className: r, width: t, height: t, viewBox: "0 0 24 24" },
      n === "up" && O.createElement("polygon", { points: "6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28" }),
      n === "down" && O.createElement("polygon", { points: "6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72" }),
      n === "left" && O.createElement("polygon", { points: "16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20" }),
      n === "right" && O.createElement("polygon", { points: "8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20" })
    )
  );
}
function ho(e) {
  const { day: t, modifiers: n, ...r } = e;
  return O.createElement("td", { ...r });
}
function mo(e) {
  const { day: t, modifiers: n, ...r } = e, a = O.useRef(null);
  return O.useEffect(() => {
    n.focused && a.current?.focus();
  }, [n.focused]), O.createElement("button", { ref: a, ...r });
}
var F;
(function(e) {
  e.Root = "root", e.Chevron = "chevron", e.Day = "day", e.DayButton = "day_button", e.CaptionLabel = "caption_label", e.Dropdowns = "dropdowns", e.Dropdown = "dropdown", e.DropdownRoot = "dropdown_root", e.Footer = "footer", e.MonthGrid = "month_grid", e.MonthCaption = "month_caption", e.MonthsDropdown = "months_dropdown", e.Month = "month", e.Months = "months", e.Nav = "nav", e.NextMonthButton = "button_next", e.PreviousMonthButton = "button_previous", e.Week = "week", e.Weeks = "weeks", e.Weekday = "weekday", e.Weekdays = "weekdays", e.WeekNumber = "week_number", e.WeekNumberHeader = "week_number_header", e.YearsDropdown = "years_dropdown";
})(F || (F = {}));
var Z;
(function(e) {
  e.disabled = "disabled", e.hidden = "hidden", e.outside = "outside", e.focused = "focused", e.today = "today";
})(Z || (Z = {}));
var we;
(function(e) {
  e.range_end = "range_end", e.range_middle = "range_middle", e.range_start = "range_start", e.selected = "selected";
})(we || (we = {}));
var he;
(function(e) {
  e.weeks_before_enter = "weeks_before_enter", e.weeks_before_exit = "weeks_before_exit", e.weeks_after_enter = "weeks_after_enter", e.weeks_after_exit = "weeks_after_exit", e.caption_after_enter = "caption_after_enter", e.caption_after_exit = "caption_after_exit", e.caption_before_enter = "caption_before_enter", e.caption_before_exit = "caption_before_exit";
})(he || (he = {}));
function po(e) {
  const { options: t, className: n, components: r, classNames: a, ...s } = e, l = [a[F.Dropdown], n].join(" "), o = t?.find(({ value: i }) => i === s.value);
  return O.createElement(
    "span",
    { "data-disabled": s.disabled, className: a[F.DropdownRoot] },
    O.createElement(r.Select, { className: l, ...s }, t?.map(({ value: i, label: c, disabled: u }) => O.createElement(r.Option, { key: i, value: i, disabled: u }, c))),
    O.createElement(
      "span",
      { className: a[F.CaptionLabel], "aria-hidden": !0 },
      o?.label,
      O.createElement(r.Chevron, { orientation: "down", size: 18, className: a[F.Chevron] })
    )
  );
}
function go(e) {
  return O.createElement("div", { ...e });
}
function yo(e) {
  return O.createElement("div", { ...e });
}
function bo(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return O.createElement("div", { ...r }, e.children);
}
function vo(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return O.createElement("div", { ...r });
}
function wo(e) {
  return O.createElement("table", { ...e });
}
function xo(e) {
  return O.createElement("div", { ...e });
}
const Jn = at(void 0);
function it() {
  const e = st(Jn);
  if (e === void 0)
    throw new Error("useDayPicker() must be used within a custom component.");
  return e;
}
function ko(e) {
  const { components: t } = it();
  return O.createElement(t.Dropdown, { ...e });
}
function Mo(e) {
  const { onPreviousClick: t, onNextClick: n, previousMonth: r, nextMonth: a, ...s } = e, { components: l, classNames: o, labels: { labelPrevious: i, labelNext: c } } = it(), u = ae((h) => {
    a && n?.(h);
  }, [a, n]), f = ae((h) => {
    r && t?.(h);
  }, [r, t]);
  return O.createElement(
    "nav",
    { ...s },
    O.createElement(
      l.PreviousMonthButton,
      { type: "button", className: o[F.PreviousMonthButton], tabIndex: r ? void 0 : -1, "aria-disabled": r ? void 0 : !0, "aria-label": i(r), onClick: f },
      O.createElement(l.Chevron, { disabled: r ? void 0 : !0, className: o[F.Chevron], orientation: "left" })
    ),
    O.createElement(
      l.NextMonthButton,
      { type: "button", className: o[F.NextMonthButton], tabIndex: a ? void 0 : -1, "aria-disabled": a ? void 0 : !0, "aria-label": c(a), onClick: u },
      O.createElement(l.Chevron, { disabled: a ? void 0 : !0, orientation: "right", className: o[F.Chevron] })
    )
  );
}
function Do(e) {
  const { components: t } = it();
  return O.createElement(t.Button, { ...e });
}
function Oo(e) {
  return O.createElement("option", { ...e });
}
function So(e) {
  const { components: t } = it();
  return O.createElement(t.Button, { ...e });
}
function No(e) {
  const { rootRef: t, ...n } = e;
  return O.createElement("div", { ...n, ref: t });
}
function Co(e) {
  return O.createElement("select", { ...e });
}
function Wo(e) {
  const { week: t, ...n } = e;
  return O.createElement("tr", { ...n });
}
function _o(e) {
  return O.createElement("th", { ...e });
}
function jo(e) {
  return O.createElement(
    "thead",
    { "aria-hidden": !0 },
    O.createElement("tr", { ...e })
  );
}
function Fo(e) {
  const { week: t, ...n } = e;
  return O.createElement("th", { ...n });
}
function Eo(e) {
  return O.createElement("th", { ...e });
}
function To(e) {
  return O.createElement("tbody", { ...e });
}
function Po(e) {
  const { components: t } = it();
  return O.createElement(t.Dropdown, { ...e });
}
const Yo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: co,
  CaptionLabel: uo,
  Chevron: fo,
  Day: ho,
  DayButton: mo,
  Dropdown: po,
  DropdownNav: go,
  Footer: yo,
  Month: bo,
  MonthCaption: vo,
  MonthGrid: wo,
  Months: xo,
  MonthsDropdown: ko,
  Nav: Mo,
  NextMonthButton: Do,
  Option: Oo,
  PreviousMonthButton: So,
  Root: No,
  Select: Co,
  Week: Wo,
  WeekNumber: Fo,
  WeekNumberHeader: Eo,
  Weekday: _o,
  Weekdays: jo,
  Weeks: To,
  YearsDropdown: Po
}, Symbol.toStringTag, { value: "Module" }));
function Ce(e, t, n = !1, r = Se) {
  let { from: a, to: s } = e;
  const { differenceInCalendarDays: l, isSameDay: o } = r;
  return a && s ? (l(s, a) < 0 && ([a, s] = [s, a]), l(t, a) >= (n ? 1 : 0) && l(s, t) >= (n ? 1 : 0)) : !n && s ? o(s, t) : !n && a ? o(a, t) : !1;
}
function Ht(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function bt(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function Gt(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function Lt(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function er(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function tr(e, t) {
  return Array.isArray(e) && e.every(t.isDate);
}
function We(e, t, n = Se) {
  const r = Array.isArray(t) ? t : [t], { isSameDay: a, differenceInCalendarDays: s, isAfter: l } = n;
  return r.some((o) => {
    if (typeof o == "boolean")
      return o;
    if (n.isDate(o))
      return a(e, o);
    if (tr(o, n))
      return o.some((i) => a(e, i));
    if (bt(o))
      return Ce(o, e, !1, n);
    if (er(o))
      return Array.isArray(o.dayOfWeek) ? o.dayOfWeek.includes(e.getDay()) : o.dayOfWeek === e.getDay();
    if (Ht(o)) {
      const i = s(o.before, e), c = s(o.after, e), u = i > 0, f = c < 0;
      return l(o.before, o.after) ? f && u : u || f;
    }
    return Gt(o) ? s(e, o.after) > 0 : Lt(o) ? s(o.before, e) > 0 : typeof o == "function" ? o(e) : !1;
  });
}
function Io(e, t, n, r, a) {
  const { disabled: s, hidden: l, modifiers: o, showOutsideDays: i, broadcastCalendar: c, today: u = a.today() } = t, { isSameDay: f, isSameMonth: h, startOfMonth: p, isBefore: y, endOfMonth: S, isAfter: N } = a, D = n && p(n), M = r && S(r), b = {
    [Z.focused]: [],
    [Z.outside]: [],
    [Z.disabled]: [],
    [Z.hidden]: [],
    [Z.today]: []
  }, w = {};
  for (const v of e) {
    const { date: m, displayMonth: _ } = v, B = !!(_ && !h(m, _)), $ = !!(D && y(m, D)), C = !!(M && N(m, M)), z = !!(s && We(m, s, a)), X = !!(l && We(m, l, a)) || $ || C || // Broadcast calendar will show outside days as default
    !c && !i && B || c && i === !1 && B, U = f(m, u);
    B && b.outside.push(v), z && b.disabled.push(v), X && b.hidden.push(v), U && b.today.push(v), o && Object.keys(o).forEach((L) => {
      const le = o?.[L];
      le && We(m, le, a) && (w[L] ? w[L].push(v) : w[L] = [v]);
    });
  }
  return (v) => {
    const m = {
      [Z.focused]: !1,
      [Z.disabled]: !1,
      [Z.hidden]: !1,
      [Z.outside]: !1,
      [Z.today]: !1
    }, _ = {};
    for (const B in b) {
      const $ = b[B];
      m[B] = $.some((C) => C === v);
    }
    for (const B in w)
      _[B] = w[B].some(($) => $ === v);
    return {
      ...m,
      // custom modifiers should override all the previous ones
      ..._
    };
  };
}
function zo(e, t, n = {}) {
  return Object.entries(e).filter(([, a]) => a === !0).reduce((a, [s]) => (n[s] ? a.push(n[s]) : t[Z[s]] ? a.push(t[Z[s]]) : t[we[s]] && a.push(t[we[s]]), a), [t[F.Day]]);
}
function Bo(e) {
  return {
    ...Yo,
    ...e
  };
}
function Ao(e) {
  const t = {
    "data-mode": e.mode ?? void 0,
    "data-required": "required" in e ? e.required : void 0,
    "data-multiple-months": e.numberOfMonths && e.numberOfMonths > 1 || void 0,
    "data-week-numbers": e.showWeekNumber || void 0,
    "data-broadcast-calendar": e.broadcastCalendar || void 0,
    "data-nav-layout": e.navLayout || void 0
  };
  return Object.entries(e).forEach(([n, r]) => {
    n.startsWith("data-") && (t[n] = r);
  }), t;
}
function Kt() {
  const e = {};
  for (const t in F)
    e[F[t]] = `rdp-${F[t]}`;
  for (const t in Z)
    e[Z[t]] = `rdp-${Z[t]}`;
  for (const t in we)
    e[we[t]] = `rdp-${we[t]}`;
  for (const t in he)
    e[he[t]] = `rdp-${he[t]}`;
  return e;
}
function nr(e, t, n) {
  return (n ?? new me(t)).formatMonthYear(e);
}
const $o = nr;
function Vo(e, t, n) {
  return (n ?? new me(t)).format(e, "d");
}
function qo(e, t = Se) {
  return t.format(e, "LLLL");
}
function Ro(e, t, n) {
  return (n ?? new me(t)).format(e, "cccccc");
}
function Ho(e, t = Se) {
  return e < 10 ? t.formatNumber(`0${e.toLocaleString()}`) : t.formatNumber(`${e.toLocaleString()}`);
}
function Go() {
  return "";
}
function rr(e, t = Se) {
  return t.format(e, "yyyy");
}
const Lo = rr, Ko = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  formatCaption: nr,
  formatDay: Vo,
  formatMonthCaption: $o,
  formatMonthDropdown: qo,
  formatWeekNumber: Ho,
  formatWeekNumberHeader: Go,
  formatWeekdayName: Ro,
  formatYearCaption: Lo,
  formatYearDropdown: rr
}, Symbol.toStringTag, { value: "Module" }));
function Uo(e) {
  return e?.formatMonthCaption && !e.formatCaption && (e.formatCaption = e.formatMonthCaption), e?.formatYearCaption && !e.formatYearDropdown && (e.formatYearDropdown = e.formatYearCaption), {
    ...Ko,
    ...e
  };
}
function Ut(e, t, n, r) {
  let a = (r ?? new me(n)).format(e, "PPPP");
  return t.today && (a = `Today, ${a}`), t.selected && (a = `${a}, selected`), a;
}
const Xo = Ut;
function Xt(e, t, n) {
  return (n ?? new me(t)).formatMonthYear(e);
}
const Zo = Xt;
function ar(e, t, n, r) {
  let a = (r ?? new me(n)).format(e, "PPPP");
  return t?.today && (a = `Today, ${a}`), a;
}
function sr(e) {
  return "Choose the Month";
}
function or() {
  return "";
}
const Qo = "Go to the Next Month";
function ir(e, t) {
  return Qo;
}
function lr(e) {
  return "Go to the Previous Month";
}
function cr(e, t, n) {
  return (n ?? new me(t)).format(e, "cccc");
}
function ur(e, t) {
  return `Week ${e}`;
}
function dr(e) {
  return "Week Number";
}
function fr(e) {
  return "Choose the Year";
}
const Jo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  labelCaption: Zo,
  labelDay: Xo,
  labelDayButton: Ut,
  labelGrid: Xt,
  labelGridcell: ar,
  labelMonthDropdown: sr,
  labelNav: or,
  labelNext: ir,
  labelPrevious: lr,
  labelWeekNumber: ur,
  labelWeekNumberHeader: dr,
  labelWeekday: cr,
  labelYearDropdown: fr
}, Symbol.toStringTag, { value: "Module" })), ve = (e, t, n) => t || (n ? typeof n == "function" ? n : (...r) => n : e);
function ei(e, t) {
  const n = t.locale?.labels ?? {};
  return {
    ...Jo,
    ...e ?? {},
    labelDayButton: ve(Ut, e?.labelDayButton, n.labelDayButton),
    labelMonthDropdown: ve(sr, e?.labelMonthDropdown, n.labelMonthDropdown),
    labelNext: ve(ir, e?.labelNext, n.labelNext),
    labelPrevious: ve(lr, e?.labelPrevious, n.labelPrevious),
    labelWeekNumber: ve(ur, e?.labelWeekNumber, n.labelWeekNumber),
    labelYearDropdown: ve(fr, e?.labelYearDropdown, n.labelYearDropdown),
    labelGrid: ve(Xt, e?.labelGrid, n.labelGrid),
    labelGridcell: ve(ar, e?.labelGridcell, n.labelGridcell),
    labelNav: ve(or, e?.labelNav, n.labelNav),
    labelWeekNumberHeader: ve(dr, e?.labelWeekNumberHeader, n.labelWeekNumberHeader),
    labelWeekday: ve(cr, e?.labelWeekday, n.labelWeekday)
  };
}
function ti(e, t, n, r, a) {
  const { startOfMonth: s, startOfYear: l, endOfYear: o, eachMonthOfInterval: i, getMonth: c } = a;
  return i({
    start: l(e),
    end: o(e)
  }).map((h) => {
    const p = r.formatMonthDropdown(h, a), y = c(h), S = t && h < s(t) || n && h > s(n) || !1;
    return { value: y, label: p, disabled: S };
  });
}
function ni(e, t = {}, n = {}) {
  let r = { ...t?.[F.Day] };
  return Object.entries(e).filter(([, a]) => a === !0).forEach(([a]) => {
    r = {
      ...r,
      ...n?.[a]
    };
  }), r;
}
function ri(e, t, n, r) {
  const a = r ?? e.today(), s = n ? e.startOfBroadcastWeek(a, e) : t ? e.startOfISOWeek(a) : e.startOfWeek(a), l = [];
  for (let o = 0; o < 7; o++) {
    const i = e.addDays(s, o);
    l.push(i);
  }
  return l;
}
function ai(e, t, n, r, a = !1) {
  if (!e || !t)
    return;
  const { startOfYear: s, endOfYear: l, eachYearOfInterval: o, getYear: i } = r, c = s(e), u = l(t), f = o({ start: c, end: u });
  return a && f.reverse(), f.map((h) => {
    const p = n.formatYearDropdown(h, r);
    return {
      value: i(h),
      label: p,
      disabled: !1
    };
  });
}
function si(e, t = {}) {
  const { weekStartsOn: n, locale: r } = t, a = n ?? r?.options?.weekStartsOn ?? 0, s = (o) => {
    const i = typeof o == "number" || typeof o == "string" ? new Date(o) : o;
    return new oe(i.getFullYear(), i.getMonth(), i.getDate(), 12, 0, 0, e);
  }, l = (o) => {
    const i = s(o);
    return new Date(i.getFullYear(), i.getMonth(), i.getDate(), 0, 0, 0, 0);
  };
  return {
    today: () => s(oe.tz(e)),
    newDate: (o, i, c) => new oe(o, i, c, 12, 0, 0, e),
    startOfDay: (o) => s(o),
    startOfWeek: (o, i) => {
      const c = s(o), u = i?.weekStartsOn ?? a, f = (c.getDay() - u + 7) % 7;
      return c.setDate(c.getDate() - f), c;
    },
    startOfISOWeek: (o) => {
      const i = s(o), c = (i.getDay() - 1 + 7) % 7;
      return i.setDate(i.getDate() - c), i;
    },
    startOfMonth: (o) => {
      const i = s(o);
      return i.setDate(1), i;
    },
    startOfYear: (o) => {
      const i = s(o);
      return i.setMonth(0, 1), i;
    },
    endOfWeek: (o, i) => {
      const c = s(o), h = (((i?.weekStartsOn ?? a) + 6) % 7 - c.getDay() + 7) % 7;
      return c.setDate(c.getDate() + h), c;
    },
    endOfISOWeek: (o) => {
      const i = s(o), c = (7 - i.getDay()) % 7;
      return i.setDate(i.getDate() + c), i;
    },
    endOfMonth: (o) => {
      const i = s(o);
      return i.setMonth(i.getMonth() + 1, 0), i;
    },
    endOfYear: (o) => {
      const i = s(o);
      return i.setMonth(11, 31), i;
    },
    eachMonthOfInterval: (o) => {
      const i = s(o.start), c = s(o.end), u = [], f = new oe(i.getFullYear(), i.getMonth(), 1, 12, 0, 0, e), h = c.getFullYear() * 12 + c.getMonth();
      for (; f.getFullYear() * 12 + f.getMonth() <= h; )
        u.push(new oe(f, e)), f.setMonth(f.getMonth() + 1, 1);
      return u;
    },
    // Normalize to noon once before arithmetic (avoid DST/midnight edge cases),
    // mutate the same TZDate, and return it.
    addDays: (o, i) => {
      const c = s(o);
      return c.setDate(c.getDate() + i), c;
    },
    addWeeks: (o, i) => {
      const c = s(o);
      return c.setDate(c.getDate() + i * 7), c;
    },
    addMonths: (o, i) => {
      const c = s(o);
      return c.setMonth(c.getMonth() + i), c;
    },
    addYears: (o, i) => {
      const c = s(o);
      return c.setFullYear(c.getFullYear() + i), c;
    },
    eachYearOfInterval: (o) => {
      const i = s(o.start), c = s(o.end), u = [], f = new oe(i.getFullYear(), 0, 1, 12, 0, 0, e);
      for (; f.getFullYear() <= c.getFullYear(); )
        u.push(new oe(f, e)), f.setFullYear(f.getFullYear() + 1, 0, 1);
      return u;
    },
    getWeek: (o, i) => {
      const c = l(o);
      return Rt(c, {
        weekStartsOn: i?.weekStartsOn ?? a,
        firstWeekContainsDate: i?.firstWeekContainsDate ?? r?.options?.firstWeekContainsDate ?? 1
      });
    },
    getISOWeek: (o) => {
      const i = l(o);
      return qt(i);
    },
    differenceInCalendarDays: (o, i) => {
      const c = l(o), u = l(i);
      return Vt(c, u);
    },
    differenceInCalendarMonths: (o, i) => {
      const c = l(o), u = l(i);
      return Rn(c, u);
    }
  };
}
const lt = (e) => e instanceof HTMLElement ? e : null, Nt = (e) => [
  ...e.querySelectorAll("[data-animated-month]") ?? []
], oi = (e) => lt(e.querySelector("[data-animated-month]")), Ct = (e) => lt(e.querySelector("[data-animated-caption]")), Wt = (e) => lt(e.querySelector("[data-animated-weeks]")), ii = (e) => lt(e.querySelector("[data-animated-nav]")), li = (e) => lt(e.querySelector("[data-animated-weekdays]"));
function ci(e, t, { classNames: n, months: r, focused: a, dateLib: s }) {
  const l = ee(null), o = ee(r), i = ee(!1);
  Cn(() => {
    const c = o.current;
    if (o.current = r, !t || !e.current || // safety check because the ref can be set to anything by consumers
    !(e.current instanceof HTMLElement) || // validation required for the animation to work as expected
    r.length === 0 || c.length === 0 || r.length !== c.length)
      return;
    const u = s.isSameMonth(r[0].date, c[0].date), f = s.isAfter(r[0].date, c[0].date), h = f ? n[he.caption_after_enter] : n[he.caption_before_enter], p = f ? n[he.weeks_after_enter] : n[he.weeks_before_enter], y = l.current, S = e.current.cloneNode(!0);
    if (S instanceof HTMLElement ? (Nt(S).forEach((b) => {
      if (!(b instanceof HTMLElement))
        return;
      const w = oi(b);
      w && b.contains(w) && b.removeChild(w);
      const v = Ct(b);
      v && v.classList.remove(h);
      const m = Wt(b);
      m && m.classList.remove(p);
    }), l.current = S) : l.current = null, i.current || u || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    a)
      return;
    const N = y instanceof HTMLElement ? Nt(y) : [], D = Nt(e.current);
    if (D?.every((M) => M instanceof HTMLElement) && N && N.every((M) => M instanceof HTMLElement)) {
      i.current = !0, e.current.style.isolation = "isolate";
      const M = ii(e.current);
      M && (M.style.zIndex = "1"), D.forEach((b, w) => {
        const v = N[w];
        if (!v)
          return;
        b.style.position = "relative", b.style.overflow = "hidden";
        const m = Ct(b);
        m && m.classList.add(h);
        const _ = Wt(b);
        _ && _.classList.add(p);
        const B = () => {
          i.current = !1, e.current && (e.current.style.isolation = ""), M && (M.style.zIndex = ""), m && m.classList.remove(h), _ && _.classList.remove(p), b.style.position = "", b.style.overflow = "", b.contains(v) && b.removeChild(v);
        };
        v.style.pointerEvents = "none", v.style.position = "absolute", v.style.overflow = "hidden", v.setAttribute("aria-hidden", "true");
        const $ = li(v);
        $ && ($.style.opacity = "0");
        const C = Ct(v);
        C && (C.classList.add(f ? n[he.caption_before_exit] : n[he.caption_after_exit]), C.addEventListener("animationend", B));
        const z = Wt(v);
        z && z.classList.add(f ? n[he.weeks_before_exit] : n[he.weeks_after_exit]), b.insertBefore(v, b.firstChild);
      });
    }
  });
}
function ui(e, t, n, r) {
  const a = e[0], s = e[e.length - 1], { ISOWeek: l, fixedWeeks: o, broadcastCalendar: i } = n ?? {}, { addDays: c, differenceInCalendarDays: u, differenceInCalendarMonths: f, endOfBroadcastWeek: h, endOfISOWeek: p, endOfMonth: y, endOfWeek: S, isAfter: N, startOfBroadcastWeek: D, startOfISOWeek: M, startOfWeek: b } = r, w = i ? D(a, r) : l ? M(a) : b(a), v = i ? h(s) : l ? p(y(s)) : S(y(s)), m = t && (i ? h(t) : l ? p(t) : S(t)), _ = m && N(v, m) ? m : v, B = u(_, w), $ = f(s, a) + 1, C = [];
  for (let U = 0; U <= B; U++) {
    const L = c(w, U);
    C.push(L);
  }
  const X = (i ? 35 : 42) * $;
  if (o && C.length < X) {
    const U = X - C.length;
    for (let L = 0; L < U; L++) {
      const le = c(C[C.length - 1], 1);
      C.push(le);
    }
  }
  return C;
}
function di(e) {
  const t = [];
  return e.reduce((n, r) => {
    const a = r.weeks.reduce((s, l) => s.concat(l.days.slice()), t.slice());
    return n.concat(a.slice());
  }, t.slice());
}
function fi(e, t, n, r) {
  const { numberOfMonths: a = 1 } = n, s = [];
  for (let l = 0; l < a; l++) {
    const o = r.addMonths(e, l);
    if (t && o > t)
      break;
    s.push(o);
  }
  return s;
}
function gn(e, t, n, r) {
  const { month: a, defaultMonth: s, today: l = r.today(), numberOfMonths: o = 1 } = e;
  let i = a || s || l;
  const { differenceInCalendarMonths: c, addMonths: u, startOfMonth: f } = r;
  if (n && c(n, i) < o - 1) {
    const h = -1 * (o - 1);
    i = u(n, h);
  }
  return t && c(i, t) < 0 && (i = t), f(i);
}
function hi(e, t, n, r) {
  const { addDays: a, endOfBroadcastWeek: s, endOfISOWeek: l, endOfMonth: o, endOfWeek: i, getISOWeek: c, getWeek: u, startOfBroadcastWeek: f, startOfISOWeek: h, startOfWeek: p } = r, y = e.reduce((S, N) => {
    const D = n.broadcastCalendar ? f(N, r) : n.ISOWeek ? h(N) : p(N), M = n.broadcastCalendar ? s(N) : n.ISOWeek ? l(o(N)) : i(o(N)), b = t.filter((_) => _ >= D && _ <= M), w = n.broadcastCalendar ? 35 : 42;
    if (n.fixedWeeks && b.length < w) {
      const _ = t.filter((B) => {
        const $ = w - b.length;
        return B > M && B <= a(M, $);
      });
      b.push(..._);
    }
    const v = b.reduce((_, B) => {
      const $ = n.ISOWeek ? c(B) : u(B), C = _.find((X) => X.weekNumber === $), z = new Qn(B, N, r);
      return C ? C.days.push(z) : _.push(new lo($, [z])), _;
    }, []), m = new io(N, v);
    return S.push(m), S;
  }, []);
  return n.reverseMonths ? y.reverse() : y;
}
function mi(e, t) {
  let { startMonth: n, endMonth: r } = e;
  const { startOfYear: a, startOfDay: s, startOfMonth: l, endOfMonth: o, addYears: i, endOfYear: c, newDate: u, today: f } = t, { fromYear: h, toYear: p, fromMonth: y, toMonth: S } = e;
  !n && y && (n = y), !n && h && (n = t.newDate(h, 0, 1)), !r && S && (r = S), !r && p && (r = u(p, 11, 31));
  const N = e.captionLayout === "dropdown" || e.captionLayout === "dropdown-years";
  return n ? n = l(n) : h ? n = u(h, 0, 1) : !n && N && (n = a(i(e.today ?? f(), -100))), r ? r = o(r) : p ? r = u(p, 11, 31) : !r && N && (r = c(e.today ?? f())), [
    n && s(n),
    r && s(r)
  ];
}
function pi(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: a, numberOfMonths: s = 1 } = n, { startOfMonth: l, addMonths: o, differenceInCalendarMonths: i } = r, c = a ? s : 1, u = l(e);
  if (!t)
    return o(u, c);
  if (!(i(t, e) < s))
    return o(u, c);
}
function gi(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: a, numberOfMonths: s } = n, { startOfMonth: l, addMonths: o, differenceInCalendarMonths: i } = r, c = a ? s ?? 1 : 1, u = l(e);
  if (!t)
    return o(u, -c);
  if (!(i(u, t) <= 0))
    return o(u, -c);
}
function yi(e) {
  const t = [];
  return e.reduce((n, r) => n.concat(r.weeks.slice()), t.slice());
}
function vt(e, t) {
  const [n, r] = ne(e);
  return [t === void 0 ? n : t, r];
}
function bi(e, t) {
  const [n, r] = mi(e, t), { startOfMonth: a, endOfMonth: s } = t, l = gn(e, n, r, t), [o, i] = vt(
    l,
    // initialMonth is always computed from props.month if provided
    e.month ? l : void 0
  );
  ie(() => {
    const w = gn(e, n, r, t);
    i(w);
  }, [e.timeZone]);
  const { months: c, weeks: u, days: f, previousMonth: h, nextMonth: p } = se(() => {
    const w = fi(o, r, { numberOfMonths: e.numberOfMonths }, t), v = ui(w, e.endMonth ? s(e.endMonth) : void 0, {
      ISOWeek: e.ISOWeek,
      fixedWeeks: e.fixedWeeks,
      broadcastCalendar: e.broadcastCalendar
    }, t), m = hi(w, v, {
      broadcastCalendar: e.broadcastCalendar,
      fixedWeeks: e.fixedWeeks,
      ISOWeek: e.ISOWeek,
      reverseMonths: e.reverseMonths
    }, t), _ = yi(m), B = di(m), $ = gi(o, n, e, t), C = pi(o, r, e, t);
    return {
      months: m,
      weeks: _,
      days: B,
      previousMonth: $,
      nextMonth: C
    };
  }, [
    t,
    o.getTime(),
    r?.getTime(),
    n?.getTime(),
    e.disableNavigation,
    e.broadcastCalendar,
    e.endMonth?.getTime(),
    e.fixedWeeks,
    e.ISOWeek,
    e.numberOfMonths,
    e.pagedNavigation,
    e.reverseMonths
  ]), { disableNavigation: y, onMonthChange: S } = e, N = (w) => u.some((v) => v.days.some((m) => m.isEqualTo(w))), D = (w) => {
    if (y)
      return;
    let v = a(w);
    n && v < a(n) && (v = a(n)), r && v > a(r) && (v = a(r)), i(v), S?.(v);
  };
  return {
    months: c,
    weeks: u,
    days: f,
    navStart: n,
    navEnd: r,
    previousMonth: h,
    nextMonth: p,
    goToMonth: D,
    goToDay: (w) => {
      N(w) || D(w.date);
    }
  };
}
var De;
(function(e) {
  e[e.Today = 0] = "Today", e[e.Selected = 1] = "Selected", e[e.LastFocused = 2] = "LastFocused", e[e.FocusedModifier = 3] = "FocusedModifier";
})(De || (De = {}));
function yn(e) {
  return !e[Z.disabled] && !e[Z.hidden] && !e[Z.outside];
}
function vi(e, t, n, r) {
  let a, s = -1;
  for (const l of e) {
    const o = t(l);
    yn(o) && (o[Z.focused] && s < De.FocusedModifier ? (a = l, s = De.FocusedModifier) : r?.isEqualTo(l) && s < De.LastFocused ? (a = l, s = De.LastFocused) : n(l.date) && s < De.Selected ? (a = l, s = De.Selected) : o[Z.today] && s < De.Today && (a = l, s = De.Today));
  }
  return a || (a = e.find((l) => yn(t(l)))), a;
}
function wi(e, t, n, r, a, s, l) {
  const { ISOWeek: o, broadcastCalendar: i } = s, { addDays: c, addMonths: u, addWeeks: f, addYears: h, endOfBroadcastWeek: p, endOfISOWeek: y, endOfWeek: S, max: N, min: D, startOfBroadcastWeek: M, startOfISOWeek: b, startOfWeek: w } = l;
  let m = {
    day: c,
    week: f,
    month: u,
    year: h,
    startOfWeek: (_) => i ? M(_, l) : o ? b(_) : w(_),
    endOfWeek: (_) => i ? p(_) : o ? y(_) : S(_)
  }[e](n, t === "after" ? 1 : -1);
  return t === "before" && r ? m = N([r, m]) : t === "after" && a && (m = D([a, m])), m;
}
function hr(e, t, n, r, a, s, l, o = 0) {
  if (o > 365)
    return;
  const i = wi(e, t, n.date, r, a, s, l), c = !!(s.disabled && We(i, s.disabled, l)), u = !!(s.hidden && We(i, s.hidden, l)), f = i, h = new Qn(i, f, l);
  return !c && !u ? h : hr(e, t, h, r, a, s, l, o + 1);
}
function xi(e, t, n, r, a) {
  const { autoFocus: s } = e, [l, o] = ne(), i = vi(t.days, n, r || (() => !1), l), [c, u] = ne(s ? i : void 0);
  return {
    isFocusTarget: (S) => !!i?.isEqualTo(S),
    setFocused: u,
    focused: c,
    blur: () => {
      o(c), u(void 0);
    },
    moveFocus: (S, N) => {
      if (!c)
        return;
      const D = hr(S, N, c, t.navStart, t.navEnd, e, a);
      D && (e.disableNavigation && !t.days.some((b) => b.isEqualTo(D)) || (t.goToDay(D), u(D)));
    }
  };
}
function ki(e, t) {
  const { selected: n, required: r, onSelect: a } = e, [s, l] = vt(n, a ? n : void 0), o = a ? n : s, { isSameDay: i } = t, c = (p) => o?.some((y) => i(y, p)) ?? !1, { min: u, max: f } = e;
  return {
    selected: o,
    select: (p, y, S) => {
      let N = [...o ?? []];
      if (c(p)) {
        if (o?.length === u || r && o?.length === 1)
          return;
        N = o?.filter((D) => !i(D, p));
      } else
        o?.length === f ? N = [p] : N = [...N, p];
      return a || l(N), a?.(N, p, y, S), N;
    },
    isSelected: c
  };
}
function Mi(e, t, n = 0, r = 0, a = !1, s = Se) {
  const { from: l, to: o } = t || {}, { isSameDay: i, isAfter: c, isBefore: u } = s;
  let f;
  if (!l && !o)
    f = { from: e, to: n > 0 ? void 0 : e };
  else if (l && !o)
    i(l, e) ? n === 0 ? f = { from: l, to: e } : a ? f = { from: l, to: void 0 } : f = void 0 : u(e, l) ? f = { from: e, to: l } : f = { from: l, to: e };
  else if (l && o)
    if (i(l, e) && i(o, e))
      a ? f = { from: l, to: o } : f = void 0;
    else if (i(l, e))
      f = { from: l, to: n > 0 ? void 0 : e };
    else if (i(o, e))
      f = { from: e, to: n > 0 ? void 0 : e };
    else if (u(e, l))
      f = { from: e, to: o };
    else if (c(e, l))
      f = { from: l, to: e };
    else if (c(e, o))
      f = { from: l, to: e };
    else
      throw new Error("Invalid range");
  if (f?.from && f?.to) {
    const h = s.differenceInCalendarDays(f.to, f.from);
    r > 0 && h > r ? f = { from: e, to: void 0 } : n > 1 && h < n && (f = { from: e, to: void 0 });
  }
  return f;
}
function Di(e, t, n = Se) {
  const r = Array.isArray(t) ? t : [t];
  let a = e.from;
  const s = n.differenceInCalendarDays(e.to, e.from), l = Math.min(s, 6);
  for (let o = 0; o <= l; o++) {
    if (r.includes(a.getDay()))
      return !0;
    a = n.addDays(a, 1);
  }
  return !1;
}
function bn(e, t, n = Se) {
  return Ce(e, t.from, !1, n) || Ce(e, t.to, !1, n) || Ce(t, e.from, !1, n) || Ce(t, e.to, !1, n);
}
function Oi(e, t, n = Se) {
  const r = Array.isArray(t) ? t : [t];
  if (r.filter((o) => typeof o != "function").some((o) => typeof o == "boolean" ? o : n.isDate(o) ? Ce(e, o, !1, n) : tr(o, n) ? o.some((i) => Ce(e, i, !1, n)) : bt(o) ? o.from && o.to ? bn(e, { from: o.from, to: o.to }, n) : !1 : er(o) ? Di(e, o.dayOfWeek, n) : Ht(o) ? n.isAfter(o.before, o.after) ? bn(e, {
    from: n.addDays(o.after, 1),
    to: n.addDays(o.before, -1)
  }, n) : We(e.from, o, n) || We(e.to, o, n) : Gt(o) || Lt(o) ? We(e.from, o, n) || We(e.to, o, n) : !1))
    return !0;
  const l = r.filter((o) => typeof o == "function");
  if (l.length) {
    let o = e.from;
    const i = n.differenceInCalendarDays(e.to, e.from);
    for (let c = 0; c <= i; c++) {
      if (l.some((u) => u(o)))
        return !0;
      o = n.addDays(o, 1);
    }
  }
  return !1;
}
function Si(e, t) {
  const { disabled: n, excludeDisabled: r, resetOnSelect: a, selected: s, required: l, onSelect: o } = e, [i, c] = vt(s, o ? s : void 0), u = o ? s : i;
  return {
    selected: u,
    select: (p, y, S) => {
      const { min: N, max: D } = e;
      let M;
      if (p) {
        const b = u?.from, w = u?.to, v = !!b && !!w, m = !!b && !!w && t.isSameDay(b, w) && t.isSameDay(p, b);
        a && (v || !u?.from) ? !l && m ? M = void 0 : M = { from: p, to: void 0 } : M = Mi(p, u, N, D, l, t);
      }
      return r && n && M?.from && M.to && Oi({ from: M.from, to: M.to }, n, t) && (M.from = p, M.to = void 0), o || c(M), o?.(M, p, y, S), M;
    },
    isSelected: (p) => u && Ce(u, p, !1, t)
  };
}
function Ni(e, t) {
  const { selected: n, required: r, onSelect: a } = e, [s, l] = vt(n, a ? n : void 0), o = a ? n : s, { isSameDay: i } = t;
  return {
    selected: o,
    select: (f, h, p) => {
      let y = f;
      return !r && o && o && i(f, o) && (y = void 0), a || l(y), a?.(y, f, h, p), y;
    },
    isSelected: (f) => o ? i(o, f) : !1
  };
}
function Ci(e, t) {
  const n = Ni(e, t), r = ki(e, t), a = Si(e, t);
  switch (e.mode) {
    case "single":
      return n;
    case "multiple":
      return r;
    case "range":
      return a;
    default:
      return;
  }
}
function ge(e, t) {
  return e instanceof oe && e.timeZone === t ? e : new oe(e, t);
}
function ze(e, t, n) {
  return ge(e, t);
}
function vn(e, t, n) {
  return typeof e == "boolean" || typeof e == "function" ? e : e instanceof Date ? ze(e, t) : Array.isArray(e) ? e.map((r) => r instanceof Date ? ze(r, t) : r) : bt(e) ? {
    ...e,
    from: e.from ? ge(e.from, t) : e.from,
    to: e.to ? ge(e.to, t) : e.to
  } : Ht(e) ? {
    before: ze(e.before, t),
    after: ze(e.after, t)
  } : Gt(e) ? {
    after: ze(e.after, t)
  } : Lt(e) ? {
    before: ze(e.before, t)
  } : e;
}
function _t(e, t, n) {
  return e && (Array.isArray(e) ? e.map((r) => vn(r, t)) : vn(e, t));
}
function Wi(e) {
  let t = e;
  const n = t.timeZone;
  if (n && (t = {
    ...e,
    timeZone: n
  }, t.today && (t.today = ge(t.today, n)), t.month && (t.month = ge(t.month, n)), t.defaultMonth && (t.defaultMonth = ge(t.defaultMonth, n)), t.startMonth && (t.startMonth = ge(t.startMonth, n)), t.endMonth && (t.endMonth = ge(t.endMonth, n)), t.mode === "single" && t.selected ? t.selected = ge(t.selected, n) : t.mode === "multiple" && t.selected ? t.selected = t.selected?.map((I) => ge(I, n)) : t.mode === "range" && t.selected && (t.selected = {
    from: t.selected.from ? ge(t.selected.from, n) : t.selected.from,
    to: t.selected.to ? ge(t.selected.to, n) : t.selected.to
  }), t.disabled !== void 0 && (t.disabled = _t(t.disabled, n)), t.hidden !== void 0 && (t.hidden = _t(t.hidden, n)), t.modifiers)) {
    const I = {};
    Object.keys(t.modifiers).forEach((H) => {
      I[H] = _t(t.modifiers?.[H], n);
    }), t.modifiers = I;
  }
  const { components: r, formatters: a, labels: s, dateLib: l, locale: o, classNames: i } = se(() => {
    const I = { ...Zn, ...t.locale }, H = t.broadcastCalendar ? 1 : t.weekStartsOn, T = t.noonSafe && t.timeZone ? si(t.timeZone, {
      weekStartsOn: H,
      locale: I
    }) : void 0, R = t.dateLib && T ? { ...T, ...t.dateLib } : t.dateLib ?? T, fe = new me({
      locale: I,
      weekStartsOn: H,
      firstWeekContainsDate: t.firstWeekContainsDate,
      useAdditionalWeekYearTokens: t.useAdditionalWeekYearTokens,
      useAdditionalDayOfYearTokens: t.useAdditionalDayOfYearTokens,
      timeZone: t.timeZone,
      numerals: t.numerals
    }, R);
    return {
      dateLib: fe,
      components: Bo(t.components),
      formatters: Uo(t.formatters),
      labels: ei(t.labels, fe.options),
      locale: I,
      classNames: { ...Kt(), ...t.classNames }
    };
  }, [
    t.locale,
    t.broadcastCalendar,
    t.weekStartsOn,
    t.firstWeekContainsDate,
    t.useAdditionalWeekYearTokens,
    t.useAdditionalDayOfYearTokens,
    t.timeZone,
    t.numerals,
    t.dateLib,
    t.noonSafe,
    t.components,
    t.formatters,
    t.labels,
    t.classNames
  ]);
  t.today || (t = { ...t, today: l.today() });
  const { captionLayout: c, mode: u, navLayout: f, numberOfMonths: h = 1, onDayBlur: p, onDayClick: y, onDayFocus: S, onDayKeyDown: N, onDayMouseEnter: D, onDayMouseLeave: M, onNextClick: b, onPrevClick: w, showWeekNumber: v, styles: m } = t, { formatCaption: _, formatDay: B, formatMonthDropdown: $, formatWeekNumber: C, formatWeekNumberHeader: z, formatWeekdayName: X, formatYearDropdown: U } = a, L = bi(t, l), { days: le, months: pe, navStart: ce, navEnd: be, previousMonth: Q, nextMonth: re, goToMonth: ue } = L, g = Io(le, t, ce, be, l), { isSelected: E, select: A, selected: j } = Ci(t, l) ?? {}, { blur: x, focused: k, isFocusTarget: P, moveFocus: Y, setFocused: V } = xi(t, L, g, E ?? (() => !1), l), { labelDayButton: ke, labelGridcell: xt, labelGrid: Er, labelMonthDropdown: Tr, labelNav: tn, labelPrevious: Pr, labelNext: Yr, labelWeekday: Ir, labelWeekNumber: zr, labelWeekNumberHeader: Br, labelYearDropdown: Ar } = s, $r = se(() => ri(l, t.ISOWeek, t.broadcastCalendar, t.today), [l, t.ISOWeek, t.broadcastCalendar, t.today]), nn = u !== void 0 || y !== void 0, kt = ae(() => {
    Q && (ue(Q), w?.(Q));
  }, [Q, ue, w]), Mt = ae(() => {
    re && (ue(re), b?.(re));
  }, [ue, re, b]), Vr = ae((I, H) => (T) => {
    T.preventDefault(), T.stopPropagation(), V(I), !H.disabled && (A?.(I.date, H, T), y?.(I.date, H, T));
  }, [A, y, V]), qr = ae((I, H) => (T) => {
    V(I), S?.(I.date, H, T);
  }, [S, V]), Rr = ae((I, H) => (T) => {
    x(), p?.(I.date, H, T);
  }, [x, p]), Hr = ae((I, H) => (T) => {
    const R = {
      ArrowLeft: [
        T.shiftKey ? "month" : "day",
        t.dir === "rtl" ? "after" : "before"
      ],
      ArrowRight: [
        T.shiftKey ? "month" : "day",
        t.dir === "rtl" ? "before" : "after"
      ],
      ArrowDown: [T.shiftKey ? "year" : "week", "after"],
      ArrowUp: [T.shiftKey ? "year" : "week", "before"],
      PageUp: [T.shiftKey ? "year" : "month", "before"],
      PageDown: [T.shiftKey ? "year" : "month", "after"],
      Home: ["startOfWeek", "before"],
      End: ["endOfWeek", "after"]
    };
    if (R[T.key]) {
      T.preventDefault(), T.stopPropagation();
      const [fe, q] = R[T.key];
      Y(fe, q);
    }
    N?.(I.date, H, T);
  }, [Y, N, t.dir]), Gr = ae((I, H) => (T) => {
    D?.(I.date, H, T);
  }, [D]), Lr = ae((I, H) => (T) => {
    M?.(I.date, H, T);
  }, [M]), Kr = ae((I) => (H) => {
    const T = Number(H.target.value), R = l.setMonth(l.startOfMonth(I), T);
    ue(R);
  }, [l, ue]), Ur = ae((I) => (H) => {
    const T = Number(H.target.value), R = l.setYear(l.startOfMonth(I), T);
    ue(R);
  }, [l, ue]), { className: Xr, style: Zr } = se(() => ({
    className: [i[F.Root], t.className].filter(Boolean).join(" "),
    style: { ...m?.[F.Root], ...t.style }
  }), [i, t.className, t.style, m]), Qr = Ao(t), rn = ee(null);
  ci(rn, !!t.animate, {
    classNames: i,
    months: pe,
    focused: k,
    dateLib: l
  });
  const Jr = {
    dayPickerProps: t,
    selected: j,
    select: A,
    isSelected: E,
    months: pe,
    nextMonth: re,
    previousMonth: Q,
    goToMonth: ue,
    getModifiers: g,
    components: r,
    classNames: i,
    styles: m,
    labels: s,
    formatters: a
  };
  return O.createElement(
    Jn.Provider,
    { value: Jr },
    O.createElement(
      r.Root,
      { rootRef: t.animate ? rn : void 0, className: Xr, style: Zr, dir: t.dir, id: t.id, lang: t.lang ?? o.code, nonce: t.nonce, title: t.title, role: t.role, "aria-label": t["aria-label"], "aria-labelledby": t["aria-labelledby"], ...Qr },
      O.createElement(
        r.Months,
        { className: i[F.Months], style: m?.[F.Months] },
        !t.hideNavigation && !f && O.createElement(r.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: i[F.Nav], style: m?.[F.Nav], "aria-label": tn(), onPreviousClick: kt, onNextClick: Mt, previousMonth: Q, nextMonth: re }),
        pe.map((I, H) => O.createElement(
          r.Month,
          {
            "data-animated-month": t.animate ? "true" : void 0,
            className: i[F.Month],
            style: m?.[F.Month],
            // biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
            key: H,
            displayIndex: H,
            calendarMonth: I
          },
          f === "around" && !t.hideNavigation && H === 0 && O.createElement(
            r.PreviousMonthButton,
            { type: "button", className: i[F.PreviousMonthButton], tabIndex: Q ? void 0 : -1, "aria-disabled": Q ? void 0 : !0, "aria-label": Pr(Q), onClick: kt, "data-animated-button": t.animate ? "true" : void 0 },
            O.createElement(r.Chevron, { disabled: Q ? void 0 : !0, className: i[F.Chevron], orientation: t.dir === "rtl" ? "right" : "left" })
          ),
          O.createElement(r.MonthCaption, { "data-animated-caption": t.animate ? "true" : void 0, className: i[F.MonthCaption], style: m?.[F.MonthCaption], calendarMonth: I, displayIndex: H }, c?.startsWith("dropdown") ? O.createElement(
            r.DropdownNav,
            { className: i[F.Dropdowns], style: m?.[F.Dropdowns] },
            (() => {
              const T = c === "dropdown" || c === "dropdown-months" ? O.createElement(r.MonthsDropdown, { key: "month", className: i[F.MonthsDropdown], "aria-label": Tr(), classNames: i, components: r, disabled: !!t.disableNavigation, onChange: Kr(I.date), options: ti(I.date, ce, be, a, l), style: m?.[F.Dropdown], value: l.getMonth(I.date) }) : O.createElement("span", { key: "month" }, $(I.date, l)), R = c === "dropdown" || c === "dropdown-years" ? O.createElement(r.YearsDropdown, { key: "year", className: i[F.YearsDropdown], "aria-label": Ar(l.options), classNames: i, components: r, disabled: !!t.disableNavigation, onChange: Ur(I.date), options: ai(ce, be, a, l, !!t.reverseYears), style: m?.[F.Dropdown], value: l.getYear(I.date) }) : O.createElement("span", { key: "year" }, U(I.date, l));
              return l.getMonthYearOrder() === "year-first" ? [R, T] : [T, R];
            })(),
            O.createElement("span", { role: "status", "aria-live": "polite", style: {
              border: 0,
              clip: "rect(0 0 0 0)",
              height: "1px",
              margin: "-1px",
              overflow: "hidden",
              padding: 0,
              position: "absolute",
              width: "1px",
              whiteSpace: "nowrap",
              wordWrap: "normal"
            } }, _(I.date, l.options, l))
          ) : O.createElement(r.CaptionLabel, { className: i[F.CaptionLabel], role: "status", "aria-live": "polite" }, _(I.date, l.options, l))),
          f === "around" && !t.hideNavigation && H === h - 1 && O.createElement(
            r.NextMonthButton,
            { type: "button", className: i[F.NextMonthButton], tabIndex: re ? void 0 : -1, "aria-disabled": re ? void 0 : !0, "aria-label": Yr(re), onClick: Mt, "data-animated-button": t.animate ? "true" : void 0 },
            O.createElement(r.Chevron, { disabled: re ? void 0 : !0, className: i[F.Chevron], orientation: t.dir === "rtl" ? "left" : "right" })
          ),
          H === h - 1 && f === "after" && !t.hideNavigation && O.createElement(r.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: i[F.Nav], style: m?.[F.Nav], "aria-label": tn(), onPreviousClick: kt, onNextClick: Mt, previousMonth: Q, nextMonth: re }),
          O.createElement(
            r.MonthGrid,
            { role: "grid", "aria-multiselectable": u === "multiple" || u === "range", "aria-label": Er(I.date, l.options, l) || void 0, className: i[F.MonthGrid], style: m?.[F.MonthGrid] },
            !t.hideWeekdays && O.createElement(
              r.Weekdays,
              { "data-animated-weekdays": t.animate ? "true" : void 0, className: i[F.Weekdays], style: m?.[F.Weekdays] },
              v && O.createElement(r.WeekNumberHeader, { "aria-label": Br(l.options), className: i[F.WeekNumberHeader], style: m?.[F.WeekNumberHeader], scope: "col" }, z()),
              $r.map((T) => O.createElement(r.Weekday, { "aria-label": Ir(T, l.options, l), className: i[F.Weekday], key: String(T), style: m?.[F.Weekday], scope: "col" }, X(T, l.options, l)))
            ),
            O.createElement(r.Weeks, { "data-animated-weeks": t.animate ? "true" : void 0, className: i[F.Weeks], style: m?.[F.Weeks] }, I.weeks.map((T) => O.createElement(
              r.Week,
              { className: i[F.Week], key: T.weekNumber, style: m?.[F.Week], week: T },
              v && O.createElement(r.WeekNumber, { week: T, style: m?.[F.WeekNumber], "aria-label": zr(T.weekNumber, {
                locale: o
              }), className: i[F.WeekNumber], scope: "row", role: "rowheader" }, C(T.weekNumber, l)),
              T.days.map((R) => {
                const { date: fe } = R, q = g(R);
                if (q[Z.focused] = !q.hidden && !!k?.isEqualTo(R), q[we.selected] = E?.(fe) || q.selected, bt(j)) {
                  const { from: Dt, to: Ot } = j;
                  q[we.range_start] = !!(Dt && Ot && l.isSameDay(fe, Dt)), q[we.range_end] = !!(Dt && Ot && l.isSameDay(fe, Ot)), q[we.range_middle] = Ce(j, fe, !0, l);
                }
                const ea = ni(q, m, t.modifiersStyles), ta = zo(q, i, t.modifiersClassNames), na = !nn && !q.hidden ? xt(fe, q, l.options, l) : void 0;
                return O.createElement(r.Day, { key: `${R.isoDate}_${R.displayMonthId}`, day: R, modifiers: q, className: ta.join(" "), style: ea, role: "gridcell", "aria-selected": q.selected || void 0, "aria-label": na, "data-day": R.isoDate, "data-month": R.outside ? R.dateMonthId : void 0, "data-selected": q.selected || void 0, "data-disabled": q.disabled || void 0, "data-hidden": q.hidden || void 0, "data-outside": R.outside || void 0, "data-focused": q.focused || void 0, "data-today": q.today || void 0 }, !q.hidden && nn ? O.createElement(r.DayButton, { className: i[F.DayButton], style: m?.[F.DayButton], type: "button", day: R, modifiers: q, disabled: !q.focused && q.disabled || void 0, "aria-disabled": q.focused && q.disabled || void 0, tabIndex: P(R) ? 0 : -1, "aria-label": ke(fe, q, l.options, l), onClick: Vr(R, q), onBlur: Rr(R, q), onFocus: qr(R, q), onKeyDown: Hr(R, q), onMouseEnter: Gr(R, q), onMouseLeave: Lr(R, q) }, B(fe, l.options, l)) : !q.hidden && B(R.date, l.options, l));
              })
            )))
          )
        ))
      ),
      t.footer && O.createElement(r.Footer, { className: i[F.Footer], style: m?.[F.Footer], role: "status", "aria-live": "polite" }, t.footer)
    )
  );
}
function mr({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  captionLayout: r = "label",
  buttonVariant: a = "ghost",
  formatters: s,
  components: l,
  ...o
}) {
  const i = Kt();
  return /* @__PURE__ */ d.jsx(
    Wi,
    {
      captionLayout: r,
      className: W(
        "bg-background group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        e
      ),
      classNames: {
        root: W("w-fit", i.root),
        months: W(
          "flex gap-4 flex-col md:flex-row relative",
          i.months
        ),
        month: W("flex flex-col w-full gap-4", i.month),
        nav: W(
          "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",
          i.nav
        ),
        button_previous: W(
          an({ variant: a }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          i.button_previous
        ),
        button_next: W(
          an({ variant: a }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          i.button_next
        ),
        month_caption: W(
          "flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)",
          i.month_caption
        ),
        dropdowns: W(
          "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",
          i.dropdowns
        ),
        dropdown_root: W(
          "relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md",
          i.dropdown_root
        ),
        dropdown: W("absolute bg-popover inset-0 opacity-0", i.dropdown),
        caption_label: W(
          "select-none font-medium",
          r === "label" ? "text-sm" : "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5",
          i.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: W("flex", i.weekdays),
        weekday: W(
          "text-muted-foreground rounded-md w-(--cell-size) font-normal text-sm select-none",
          i.weekday
        ),
        week: W("flex w-full mt-2", i.week),
        week_number_header: W(
          "select-none w-(--cell-size)",
          i.week_number_header
        ),
        week_number: W(
          "text-[0.8rem] select-none text-muted-foreground",
          i.week_number
        ),
        day: W(
          "relative w-full h-full p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none",
          i.day
        ),
        range_start: W("rounded-l-md bg-accent", i.range_start),
        range_middle: W("rounded-none", i.range_middle),
        range_end: W("rounded-r-md bg-accent", i.range_end),
        today: W(
          "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none",
          i.today
        ),
        outside: W(
          "text-muted-foreground aria-selected:text-muted-foreground",
          i.outside
        ),
        disabled: W(
          "text-muted-foreground opacity-50",
          i.disabled
        ),
        hidden: W("invisible", i.hidden),
        ...t
      },
      components: {
        Root: ({ className: c, rootRef: u, ...f }) => /* @__PURE__ */ d.jsx(
          "div",
          {
            ref: u,
            className: W(c),
            "data-slot": "calendar",
            ...f
          }
        ),
        Chevron: ({ className: c, orientation: u, ...f }) => u === "left" ? /* @__PURE__ */ d.jsx(la, { className: W("size-4", c), ...f }) : u === "right" ? /* @__PURE__ */ d.jsx(fa, { className: W("size-4", c), ...f }) : /* @__PURE__ */ d.jsx(oa, { className: W("size-4", c), ...f }),
        DayButton: pr,
        WeekNumber: ({ children: c, ...u }) => /* @__PURE__ */ d.jsx("td", { ...u, children: /* @__PURE__ */ d.jsx("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children: c }) }),
        ...l
      },
      formatters: {
        formatMonthDropdown: (c) => c.toLocaleString("default", { month: "short" }),
        ...s
      },
      showOutsideDays: n,
      ...o
    }
  );
}
mr.displayName = "Calendar";
function pr({
  className: e,
  day: t,
  modifiers: n,
  ...r
}) {
  const a = Kt(), s = ee(null);
  return ie(() => {
    n.focused && s.current?.focus();
  }, [n.focused]), /* @__PURE__ */ d.jsx(
    ia,
    {
      ref: s,
      className: W(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 dark:hover:text-accent-foreground flex aspect-square size-auto w-full min-w-(--cell-size) flex-auto items-center justify-center gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md [&>span]:text-xs [&>span]:opacity-70",
        a.day,
        e
      ),
      "data-day": t.date.toLocaleDateString(),
      "data-range-end": n.range_end,
      "data-range-middle": n.range_middle,
      "data-range-start": n.range_start,
      "data-selected-single": n.selected && !n.range_start && !n.range_end && !n.range_middle,
      size: "icon",
      variant: "ghost",
      ...r
    }
  );
}
pr.displayName = "CalendarDayButton";
var wn = 1, _i = 0.9, ji = 0.8, Fi = 0.17, jt = 0.1, Ft = 0.999, Ei = 0.9999, Ti = 0.99, Pi = /[\\\/_+.#"@\[\(\{&]/, Yi = /[\\\/_+.#"@\[\(\{&]/g, Ii = /[\s-]/, gr = /[\s-]/g;
function It(e, t, n, r, a, s, l) {
  if (s === t.length) return a === e.length ? wn : Ti;
  var o = `${a},${s}`;
  if (l[o] !== void 0) return l[o];
  for (var i = r.charAt(s), c = n.indexOf(i, a), u = 0, f, h, p, y; c >= 0; ) f = It(e, t, n, r, c + 1, s + 1, l), f > u && (c === a ? f *= wn : Pi.test(e.charAt(c - 1)) ? (f *= ji, p = e.slice(a, c - 1).match(Yi), p && a > 0 && (f *= Math.pow(Ft, p.length))) : Ii.test(e.charAt(c - 1)) ? (f *= _i, y = e.slice(a, c - 1).match(gr), y && a > 0 && (f *= Math.pow(Ft, y.length))) : (f *= Fi, a > 0 && (f *= Math.pow(Ft, c - a))), e.charAt(c) !== t.charAt(s) && (f *= Ei)), (f < jt && n.charAt(c - 1) === r.charAt(s + 1) || r.charAt(s + 1) === r.charAt(s) && n.charAt(c - 1) !== r.charAt(s)) && (h = It(e, t, n, r, c + 1, s + 2, l), h * jt > f && (f = h * jt)), f > u && (u = f), c = n.indexOf(i, c + 1);
  return l[o] = u, u;
}
function xn(e) {
  return e.toLowerCase().replace(gr, " ");
}
function zi(e, t, n) {
  return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, It(e, t, xn(e), xn(t), 0, 0, {});
}
var Xe = '[cmdk-group=""]', Et = '[cmdk-group-items=""]', Bi = '[cmdk-group-heading=""]', yr = '[cmdk-item=""]', kn = `${yr}:not([aria-disabled="true"])`, zt = "cmdk-item-select", Ae = "data-value", Ai = (e, t, n) => zi(e, t, n), br = at(void 0), ct = () => st(br), vr = at(void 0), Zt = () => st(vr), wr = at(void 0), xr = de((e, t) => {
  let n = $e(() => {
    var g, E;
    return { search: "", value: (E = (g = e.value) != null ? g : e.defaultValue) != null ? E : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), r = $e(() => /* @__PURE__ */ new Set()), a = $e(() => /* @__PURE__ */ new Map()), s = $e(() => /* @__PURE__ */ new Map()), l = $e(() => /* @__PURE__ */ new Set()), o = kr(e), { label: i, children: c, value: u, onValueChange: f, filter: h, shouldFilter: p, loop: y, disablePointerSelection: S = !1, vimBindings: N = !0, ...D } = e, M = qe(), b = qe(), w = qe(), v = ee(null), m = Zi();
  Pe(() => {
    if (u !== void 0) {
      let g = u.trim();
      n.current.value = g, _.emit();
    }
  }, [u]), Pe(() => {
    m(6, U);
  }, []);
  let _ = se(() => ({ subscribe: (g) => (l.current.add(g), () => l.current.delete(g)), snapshot: () => n.current, setState: (g, E, A) => {
    var j, x, k, P;
    if (!Object.is(n.current[g], E)) {
      if (n.current[g] = E, g === "search") X(), C(), m(1, z);
      else if (g === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let Y = document.getElementById(w);
          Y ? Y.focus() : (j = document.getElementById(M)) == null || j.focus();
        }
        if (m(7, () => {
          var Y;
          n.current.selectedItemId = (Y = L()) == null ? void 0 : Y.id, _.emit();
        }), A || m(5, U), ((x = o.current) == null ? void 0 : x.value) !== void 0) {
          let Y = E ?? "";
          (P = (k = o.current).onValueChange) == null || P.call(k, Y);
          return;
        }
      }
      _.emit();
    }
  }, emit: () => {
    l.current.forEach((g) => g());
  } }), []), B = se(() => ({ value: (g, E, A) => {
    var j;
    E !== ((j = s.current.get(g)) == null ? void 0 : j.value) && (s.current.set(g, { value: E, keywords: A }), n.current.filtered.items.set(g, $(E, A)), m(2, () => {
      C(), _.emit();
    }));
  }, item: (g, E) => (r.current.add(g), E && (a.current.has(E) ? a.current.get(E).add(g) : a.current.set(E, /* @__PURE__ */ new Set([g]))), m(3, () => {
    X(), C(), n.current.value || z(), _.emit();
  }), () => {
    s.current.delete(g), r.current.delete(g), n.current.filtered.items.delete(g);
    let A = L();
    m(4, () => {
      X(), A?.getAttribute("id") === g && z(), _.emit();
    });
  }), group: (g) => (a.current.has(g) || a.current.set(g, /* @__PURE__ */ new Set()), () => {
    s.current.delete(g), a.current.delete(g);
  }), filter: () => o.current.shouldFilter, label: i || e["aria-label"], getDisablePointerSelection: () => o.current.disablePointerSelection, listId: M, inputId: w, labelId: b, listInnerRef: v }), []);
  function $(g, E) {
    var A, j;
    let x = (j = (A = o.current) == null ? void 0 : A.filter) != null ? j : Ai;
    return g ? x(g, n.current.search, E) : 0;
  }
  function C() {
    if (!n.current.search || o.current.shouldFilter === !1) return;
    let g = n.current.filtered.items, E = [];
    n.current.filtered.groups.forEach((j) => {
      let x = a.current.get(j), k = 0;
      x.forEach((P) => {
        let Y = g.get(P);
        k = Math.max(Y, k);
      }), E.push([j, k]);
    });
    let A = v.current;
    le().sort((j, x) => {
      var k, P;
      let Y = j.getAttribute("id"), V = x.getAttribute("id");
      return ((k = g.get(V)) != null ? k : 0) - ((P = g.get(Y)) != null ? P : 0);
    }).forEach((j) => {
      let x = j.closest(Et);
      x ? x.appendChild(j.parentElement === x ? j : j.closest(`${Et} > *`)) : A.appendChild(j.parentElement === A ? j : j.closest(`${Et} > *`));
    }), E.sort((j, x) => x[1] - j[1]).forEach((j) => {
      var x;
      let k = (x = v.current) == null ? void 0 : x.querySelector(`${Xe}[${Ae}="${encodeURIComponent(j[0])}"]`);
      k?.parentElement.appendChild(k);
    });
  }
  function z() {
    let g = le().find((A) => A.getAttribute("aria-disabled") !== "true"), E = g?.getAttribute(Ae);
    _.setState("value", E || void 0);
  }
  function X() {
    var g, E, A, j;
    if (!n.current.search || o.current.shouldFilter === !1) {
      n.current.filtered.count = r.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let x = 0;
    for (let k of r.current) {
      let P = (E = (g = s.current.get(k)) == null ? void 0 : g.value) != null ? E : "", Y = (j = (A = s.current.get(k)) == null ? void 0 : A.keywords) != null ? j : [], V = $(P, Y);
      n.current.filtered.items.set(k, V), V > 0 && x++;
    }
    for (let [k, P] of a.current) for (let Y of P) if (n.current.filtered.items.get(Y) > 0) {
      n.current.filtered.groups.add(k);
      break;
    }
    n.current.filtered.count = x;
  }
  function U() {
    var g, E, A;
    let j = L();
    j && (((g = j.parentElement) == null ? void 0 : g.firstChild) === j && ((A = (E = j.closest(Xe)) == null ? void 0 : E.querySelector(Bi)) == null || A.scrollIntoView({ block: "nearest" })), j.scrollIntoView({ block: "nearest" }));
  }
  function L() {
    var g;
    return (g = v.current) == null ? void 0 : g.querySelector(`${yr}[aria-selected="true"]`);
  }
  function le() {
    var g;
    return Array.from(((g = v.current) == null ? void 0 : g.querySelectorAll(kn)) || []);
  }
  function pe(g) {
    let E = le()[g];
    E && _.setState("value", E.getAttribute(Ae));
  }
  function ce(g) {
    var E;
    let A = L(), j = le(), x = j.findIndex((P) => P === A), k = j[x + g];
    (E = o.current) != null && E.loop && (k = x + g < 0 ? j[j.length - 1] : x + g === j.length ? j[0] : j[x + g]), k && _.setState("value", k.getAttribute(Ae));
  }
  function be(g) {
    let E = L(), A = E?.closest(Xe), j;
    for (; A && !j; ) A = g > 0 ? Ui(A, Xe) : Xi(A, Xe), j = A?.querySelector(kn);
    j ? _.setState("value", j.getAttribute(Ae)) : ce(g);
  }
  let Q = () => pe(le().length - 1), re = (g) => {
    g.preventDefault(), g.metaKey ? Q() : g.altKey ? be(1) : ce(1);
  }, ue = (g) => {
    g.preventDefault(), g.metaKey ? pe(0) : g.altKey ? be(-1) : ce(-1);
  };
  return J(xe.div, { ref: t, tabIndex: -1, ...D, "cmdk-root": "", onKeyDown: (g) => {
    var E;
    (E = D.onKeyDown) == null || E.call(D, g);
    let A = g.nativeEvent.isComposing || g.keyCode === 229;
    if (!(g.defaultPrevented || A)) switch (g.key) {
      case "n":
      case "j": {
        N && g.ctrlKey && re(g);
        break;
      }
      case "ArrowDown": {
        re(g);
        break;
      }
      case "p":
      case "k": {
        N && g.ctrlKey && ue(g);
        break;
      }
      case "ArrowUp": {
        ue(g);
        break;
      }
      case "Home": {
        g.preventDefault(), pe(0);
        break;
      }
      case "End": {
        g.preventDefault(), Q();
        break;
      }
      case "Enter": {
        g.preventDefault();
        let j = L();
        if (j) {
          let x = new Event(zt);
          j.dispatchEvent(x);
        }
      }
    }
  } }, J("label", { "cmdk-label": "", htmlFor: B.inputId, id: B.labelId, style: Ji }, i), wt(e, (g) => J(vr.Provider, { value: _ }, J(br.Provider, { value: B }, g))));
}), $i = de((e, t) => {
  var n, r;
  let a = qe(), s = ee(null), l = st(wr), o = ct(), i = kr(e), c = (r = (n = i.current) == null ? void 0 : n.forceMount) != null ? r : l?.forceMount;
  Pe(() => {
    if (!c) return o.item(a, l?.id);
  }, [c]);
  let u = Mr(a, s, [e.value, e.children, s], e.keywords), f = Zt(), h = je((m) => m.value && m.value === u.current), p = je((m) => c || o.filter() === !1 ? !0 : m.search ? m.filtered.items.get(a) > 0 : !0);
  ie(() => {
    let m = s.current;
    if (!(!m || e.disabled)) return m.addEventListener(zt, y), () => m.removeEventListener(zt, y);
  }, [p, e.onSelect, e.disabled]);
  function y() {
    var m, _;
    S(), (_ = (m = i.current).onSelect) == null || _.call(m, u.current);
  }
  function S() {
    f.setState("value", u.current, !0);
  }
  if (!p) return null;
  let { disabled: N, value: D, onSelect: M, forceMount: b, keywords: w, ...v } = e;
  return J(xe.div, { ref: et(s, t), ...v, id: a, "cmdk-item": "", role: "option", "aria-disabled": !!N, "aria-selected": !!h, "data-disabled": !!N, "data-selected": !!h, onPointerMove: N || o.getDisablePointerSelection() ? void 0 : S, onClick: N ? void 0 : y }, e.children);
}), Vi = de((e, t) => {
  let { heading: n, children: r, forceMount: a, ...s } = e, l = qe(), o = ee(null), i = ee(null), c = qe(), u = ct(), f = je((p) => a || u.filter() === !1 ? !0 : p.search ? p.filtered.groups.has(l) : !0);
  Pe(() => u.group(l), []), Mr(l, o, [e.value, e.heading, i]);
  let h = se(() => ({ id: l, forceMount: a }), [a]);
  return J(xe.div, { ref: et(o, t), ...s, "cmdk-group": "", role: "presentation", hidden: f ? void 0 : !0 }, n && J("div", { ref: i, "cmdk-group-heading": "", "aria-hidden": !0, id: c }, n), wt(e, (p) => J("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? c : void 0 }, J(wr.Provider, { value: h }, p))));
}), qi = de((e, t) => {
  let { alwaysRender: n, ...r } = e, a = ee(null), s = je((l) => !l.search);
  return !n && !s ? null : J(xe.div, { ref: et(a, t), ...r, "cmdk-separator": "", role: "separator" });
}), Ri = de((e, t) => {
  let { onValueChange: n, ...r } = e, a = e.value != null, s = Zt(), l = je((c) => c.search), o = je((c) => c.selectedItemId), i = ct();
  return ie(() => {
    e.value != null && s.setState("search", e.value);
  }, [e.value]), J(xe.input, { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": i.listId, "aria-labelledby": i.labelId, "aria-activedescendant": o, id: i.inputId, type: "text", value: a ? e.value : l, onChange: (c) => {
    a || s.setState("search", c.target.value), n?.(c.target.value);
  } });
}), Hi = de((e, t) => {
  let { children: n, label: r = "Suggestions", ...a } = e, s = ee(null), l = ee(null), o = je((c) => c.selectedItemId), i = ct();
  return ie(() => {
    if (l.current && s.current) {
      let c = l.current, u = s.current, f, h = new ResizeObserver(() => {
        f = requestAnimationFrame(() => {
          let p = c.offsetHeight;
          u.style.setProperty("--cmdk-list-height", p.toFixed(1) + "px");
        });
      });
      return h.observe(c), () => {
        cancelAnimationFrame(f), h.unobserve(c);
      };
    }
  }, []), J(xe.div, { ref: et(s, t), ...a, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": o, "aria-label": r, id: i.listId }, wt(e, (c) => J("div", { ref: et(l, i.listInnerRef), "cmdk-list-sizer": "" }, c)));
}), Gi = de((e, t) => {
  let { open: n, onOpenChange: r, overlayClassName: a, contentClassName: s, container: l, ...o } = e;
  return J(ya, { open: n, onOpenChange: r }, J(ba, { container: l }, J(va, { "cmdk-overlay": "", className: a }), J(wa, { "aria-label": e.label, "cmdk-dialog": "", className: s }, J(xr, { ref: t, ...o }))));
}), Li = de((e, t) => je((n) => n.filtered.count === 0) ? J(xe.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), Ki = de((e, t) => {
  let { progress: n, children: r, label: a = "Loading...", ...s } = e;
  return J(xe.div, { ref: t, ...s, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": a }, wt(e, (l) => J("div", { "aria-hidden": !0 }, l)));
}), Ye = Object.assign(xr, { List: Hi, Item: $i, Input: Ri, Group: Vi, Separator: qi, Dialog: Gi, Empty: Li, Loading: Ki });
function Ui(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.nextElementSibling;
  }
}
function Xi(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.previousElementSibling;
  }
}
function kr(e) {
  let t = ee(e);
  return Pe(() => {
    t.current = e;
  }), t;
}
var Pe = typeof window > "u" ? ie : Cn;
function $e(e) {
  let t = ee();
  return t.current === void 0 && (t.current = e()), t;
}
function je(e) {
  let t = Zt(), n = () => e(t.snapshot());
  return sa(t.subscribe, n, n);
}
function Mr(e, t, n, r = []) {
  let a = ee(), s = ct();
  return Pe(() => {
    var l;
    let o = (() => {
      var c;
      for (let u of n) {
        if (typeof u == "string") return u.trim();
        if (typeof u == "object" && "current" in u) return u.current ? (c = u.current.textContent) == null ? void 0 : c.trim() : a.current;
      }
    })(), i = r.map((c) => c.trim());
    s.value(e, o, i), (l = t.current) == null || l.setAttribute(Ae, o), a.current = o;
  }), a;
}
var Zi = () => {
  let [e, t] = ne(), n = $e(() => /* @__PURE__ */ new Map());
  return Pe(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, a) => {
    n.current.set(r, a), t({});
  };
};
function Qi(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function wt({ asChild: e, children: t }, n) {
  return e && ra(t) ? aa(Qi(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var Ji = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
function ft({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    Ye,
    {
      className: W(
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
        e
      ),
      ...t
    }
  );
}
function Qt({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsxs("div", { className: "flex items-center border-b border-border px-3", "cmdk-input-wrapper": "", "data-slot": "command-input", children: [
    /* @__PURE__ */ d.jsx(ca, { className: "me-2 size-4 shrink-0 opacity-50" }),
    /* @__PURE__ */ d.jsx(
      Ye.Input,
      {
        className: W(
          "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-hidden text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          e
        ),
        ...t
      }
    )
  ] });
}
function Jt({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    Ye.List,
    {
      className: W("max-h-[300px] p-1 overflow-y-auto overflow-x-hidden", e),
      "data-slot": "command-list",
      ...t
    }
  );
}
function en({ ...e }) {
  return /* @__PURE__ */ d.jsx(Ye.Empty, { className: "py-6 text-center text-sm", "data-slot": "command-empty", ...e });
}
function Ge({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    Ye.Group,
    {
      className: W(
        "overflow-hidden p-1.5 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        e
      ),
      "data-slot": "command-group",
      ...t
    }
  );
}
function Re({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    Ye.Separator,
    {
      className: W("-mx-1.5 h-px bg-border", e),
      "data-slot": "command-separator",
      ...t
    }
  );
}
function Te({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    Ye.Item,
    {
      className: W(
        "relative flex text-foreground cursor-default gap-2 select-none items-center rounded-xs px-2 py-1.5 outline-hidden data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:stroke-[1.5px]",
        e
      ),
      "data-slot": "command-item",
      ...t
    }
  );
}
const el = ye(
  "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
  {
    variants: {
      size: {
        default: "h-4 w-7",
        sm: "h-3 w-5"
      }
    },
    defaultVariants: {
      size: "default"
    }
  }
), tl = ye(
  "pointer-events-none block rounded-full bg-background ring-0 [filter:drop-shadow(0_1px_2px_rgba(0,0,0,0.07))] transition-transform data-[state=unchecked]:translate-x-0",
  {
    variants: {
      size: {
        default: "size-3 data-[state=checked]:translate-x-3",
        sm: "size-2 data-[state=checked]:translate-x-2"
      }
    },
    defaultVariants: {
      size: "default"
    }
  }
), Dr = de(({ className: e, size: t, ...n }, r) => /* @__PURE__ */ d.jsx(
  $t,
  {
    className: W(el({ size: t, className: e })),
    ...n,
    ref: r,
    children: /* @__PURE__ */ d.jsx(
      Tn,
      {
        className: W(tl({ size: t }))
      }
    )
  }
));
Dr.displayName = $t.displayName;
const Ve = {
  // UI Labels
  addFilter: "",
  clearFilters: "Clear",
  searchFields: "Search fields...",
  noFieldsFound: "No fields found.",
  noResultsFound: "No results found.",
  loading: "Loading...",
  loadMore: "Load more",
  select: "Select...",
  true: "True",
  false: "False",
  min: "Min",
  max: "Max",
  to: "to",
  typeAndPressEnter: "Type and press Enter to add tag",
  selected: "selected",
  selectedCount: "selected",
  percent: "%",
  defaultCurrency: "$",
  defaultColor: "currentColor",
  addFilterTitle: "",
  // Operators
  operators: {
    is: "is",
    isNot: "is not",
    isAnyOf: "is any of",
    isNotAnyOf: "is not any of",
    includesAll: "includes all",
    excludesAll: "excludes all",
    before: "before",
    after: "after",
    between: "between",
    notBetween: "not between",
    contains: "contains",
    notContains: "does not contain",
    startsWith: "starts with",
    endsWith: "ends with",
    isExactly: "is exactly",
    equals: "equals",
    notEquals: "not equals",
    greaterThan: "greater than",
    lessThan: "less than",
    overlaps: "overlaps",
    includes: "includes",
    excludes: "excludes",
    includesAllOf: "includes all of",
    includesAnyOf: "includes any of",
    empty: "is empty",
    notEmpty: "is not empty"
  },
  // Placeholders
  placeholders: {
    enterField: (e) => `Enter ${e}...`,
    selectField: "Select...",
    searchField: (e) => `Search ${e.toLowerCase()}...`,
    enterKey: "Enter key...",
    enterValue: "Enter value..."
  },
  // Helper functions
  helpers: {
    formatOperator: (e) => e.replace(/_/g, " ")
  },
  // Validation
  validation: {
    invalidEmail: "Invalid email format",
    invalidUrl: "Invalid URL format",
    invalidTel: "Invalid phone format",
    invalid: "Invalid input format"
  }
}, Or = at({
  variant: "outline",
  size: "md",
  radius: "md",
  i18n: Ve,
  cursorPointer: !0,
  className: void 0,
  showAddButton: !0,
  addButtonText: void 0,
  addButtonIcon: void 0,
  addButtonClassName: void 0,
  addButton: void 0,
  showSearchInput: !0,
  trigger: void 0,
  allowMultiple: !0
}), Fe = () => st(Or), Bt = 200, Sr = ye(
  [
    "relative flex shrink-0 items-center text-foreground outline-hidden transition",
    "has-[[data-slot=filters-input]:focus-visible]:ring-focus-ring/30",
    "has-[[data-slot=filters-input]:focus-visible]:border-focus-ring",
    "has-[[data-slot=filters-input]:focus-visible]:outline-hidden",
    "has-[[data-slot=filters-input]:focus-visible]:ring-[3px]",
    "has-[[data-slot=filters-input]:focus-visible]:z-1",
    "has-[[data-slot=filters-input]:[aria-invalid=true]]:border",
    "has-[[data-slot=filters-input]:[aria-invalid=true]]:border-solid",
    "has-[[data-slot=filters-input]:[aria-invalid=true]]:border-destructive/60",
    "has-[[data-slot=filters-input]:[aria-invalid=true]]:ring-destructive/10",
    "dark:has-[[data-slot=filters-input]:[aria-invalid=true]]:border-destructive",
    "dark:has-[[data-slot=filters-input]:[aria-invalid=true]]:ring-destructive/20"
  ],
  {
    variants: {
      variant: {
        solid: "border-0 bg-secondary",
        outline: "border border-border bg-background"
      },
      size: {
        lg: "h-10 px-2.5 text-sm has-[[data-slot=filters-prefix]]:ps-0 has-[[data-slot=filters-suffix]]:pe-0",
        md: "h-(--control-height) px-2.5 has-[[data-slot=filters-prefix]]:ps-0 has-[[data-slot=filters-suffix]]:pe-0",
        sm: "h-8 px-2 text-xs has-[[data-slot=filters-prefix]]:ps-0 has-[[data-slot=filters-suffix]]:pe-0"
      },
      cursorPointer: {
        true: "cursor-pointer",
        false: ""
      }
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
      cursorPointer: !0
    }
  }
), nl = ye(
  [
    "inline-flex shrink-0 items-center justify-center text-muted-foreground transition hover:text-foreground",
    "focus-visible:ring-1 focus-visible:ring-focus-ring focus-visible:outline-hidden"
  ],
  {
    variants: {
      variant: {
        solid: "bg-secondary",
        outline: "border border-s-0 border-border hover:bg-secondary"
      },
      size: {
        lg: "size-10 [&_svg:not([class*=size-])]:size-4",
        md: "size-(--control-height) [&_svg:not([class*=size-])]:size-3.5",
        sm: "size-8 [&_svg:not([class*=size-])]:size-3"
      },
      cursorPointer: {
        true: "cursor-pointer",
        false: ""
      },
      radius: {
        md: "rounded-e-md",
        full: "rounded-e-full"
      }
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
      radius: "md",
      cursorPointer: !0
    }
  }
), Mn = ye(
  [
    "inline-flex shrink-0 items-center justify-center text-foreground transition",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:stroke-[1.5px]",
    "focus-visible:ring-1 focus-visible:ring-focus-ring focus-visible:outline-hidden"
  ],
  {
    variants: {
      variant: {
        solid: "border border-input hover:bg-secondary/60",
        outline: "border border-border hover:bg-accent"
      },
      size: {
        lg: "h-10 gap-1.5 px-4 text-sm [&_svg:not([class*=size-])]:size-4",
        md: "h-(--control-height) gap-1.5 px-2.5 [&_svg:not([class*=size-])]:size-4",
        sm: "h-8 gap-1.5 px-2.5 text-xs [&_svg:not([class*=size-])]:size-3.5"
      },
      radius: {
        md: "rounded-md",
        full: "rounded-full"
      },
      cursorPointer: {
        true: "cursor-pointer",
        false: ""
      }
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
      cursorPointer: !0
    }
  }
), rl = ye(
  [
    "relative flex shrink-0 items-center whitespace-nowrap text-muted-foreground transition hover:text-foreground focus-visible:z-1 data-[state=open]:text-foreground",
    "focus-visible:ring-1 focus-visible:ring-focus-ring focus-visible:outline-hidden"
  ],
  {
    variants: {
      variant: {
        solid: "bg-secondary",
        outline: "border border-e-0 border-border bg-background hover:bg-secondary data-[state=open]:bg-secondary [&+[data-slot=filters-remove]]:border-s"
      },
      size: {
        lg: "h-10 gap-1.5 px-4 text-sm",
        md: "h-(--control-height) gap-0.5 px-2.5",
        sm: "h-8 gap-1 px-2.5 text-xs"
      },
      cursorPointer: {
        true: "cursor-pointer",
        false: ""
      }
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
      cursorPointer: !0
    }
  }
), al = ye(
  [
    "flex shrink-0 items-center gap-1.5 px-1.5 py-1 text-foreground",
    "[&_svg:not([class*=size-])]:size-4"
  ],
  {
    variants: {
      variant: {
        solid: "bg-secondary",
        outline: "border border-e-0 border-border"
      },
      size: {
        lg: "h-10 gap-1.5 px-2 text-sm [&_svg:not([class*=size-])]:size-4",
        md: "h-(--control-height) gap-1.5 px-2.5 [&_svg:not([class*=size-])]:size-4",
        sm: "h-8 gap-0.5 px-2.5 text-xs [&_svg:not([class*=size-])]:size-3.5"
      },
      radius: {
        md: "rounded-s-md",
        full: "rounded-s-full"
      }
    },
    defaultVariants: {
      variant: "outline",
      size: "md"
    }
  }
), Je = ye(
  [
    "relative flex min-w-0 shrink items-center gap-1 text-foreground transition focus-visible:z-1",
    "focus-visible:ring-1 focus-visible:ring-focus-ring focus-visible:outline-hidden",
    "has-[[data-slot=filters-input]:focus-visible]:ring-focus-ring/30",
    "has-[[data-slot=filters-input]:focus-visible]:border-focus-ring",
    "has-[[data-slot=filters-input]:focus-visible]:outline-hidden",
    "has-[[data-slot=filters-input]:focus-visible]:ring-[3px]",
    "has-[[data-slot=filters-input]:focus-visible]:z-1",
    "has-[[data-slot=filters-input][aria-invalid=true]]:border",
    "has-[[data-slot=filters-input][aria-invalid=true]]:border-solid",
    "has-[[data-slot=filters-input][aria-invalid=true]]:border-destructive/60",
    "has-[[data-slot=filters-input][aria-invalid=true]]:ring-destructive/10",
    "dark:has-[[data-slot=filters-input][aria-invalid=true]]:border-destructive",
    "dark:has-[[data-slot=filters-input][aria-invalid=true]]:ring-destructive/20"
  ],
  {
    variants: {
      variant: {
        solid: "bg-secondary",
        outline: "border border-border bg-background hover:bg-secondary has-[[data-slot=switch]]:hover:bg-transparent has-[>[data-slot=filters-input-wrapper]]:hover:bg-background"
      },
      size: {
        lg: "h-10 gap-1.5 px-2 text-sm [&_svg:not([class*=size-])]:size-4",
        md: "h-(--control-height) gap-1.5 px-2.5 [&_svg:not([class*=size-])]:size-4",
        sm: "h-8 gap-0.5 px-2.5 text-xs [&_svg:not([class*=size-])]:size-3.5"
      },
      cursorPointer: {
        true: "cursor-pointer has-[[data-slot=switch]]:cursor-default has-[>[data-slot=filters-input-wrapper]]:cursor-text",
        false: ""
      }
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
      cursorPointer: !0
    }
  }
), ht = ye("flex shrink-0 items-center justify-center text-foreground", {
  variants: {
    variant: {
      solid: "",
      outline: ""
    },
    size: {
      lg: "h-10 px-4 text-sm",
      md: "h-(--control-height) px-2.5",
      sm: "h-8 px-2.5 text-xs"
    }
  },
  defaultVariants: {
    variant: "outline",
    size: "md"
  }
}), ut = ye("flex shrink-0 items-center text-muted-foreground", {
  variants: {
    variant: {
      solid: "bg-secondary",
      outline: "border border-x-0 border-border bg-background"
    },
    size: {
      lg: "h-10 px-4 text-sm",
      md: "h-(--control-height) px-2.5",
      sm: "h-8 px-2.5 text-xs"
    }
  },
  defaultVariants: {
    variant: "outline",
    size: "md"
  }
}), sl = ye("relative flex flex-wrap items-center", {
  variants: {
    variant: {
      solid: "gap-2",
      outline: ""
    },
    size: {
      sm: "gap-1.5",
      md: "gap-2.5",
      lg: "gap-3.5"
    }
  },
  defaultVariants: {
    variant: "outline",
    size: "md"
  }
}), ol = ye("flex max-w-[calc(100vw-32px)] items-center", {
  variants: {
    variant: {
      solid: "gap-px",
      outline: ""
    }
  },
  defaultVariants: {
    variant: "outline"
  }
});
function Me({
  field: e,
  onChange: t,
  onBlur: n,
  onKeyDown: r,
  onInputChange: a,
  className: s,
  ...l
}) {
  const o = Fe(), [i, c] = ne(!0), [u, f] = ne(""), h = (D, M) => !M || !D ? !0 : new RegExp(M).test(D), p = (D, M = !1) => {
    if ((D === "text" || D === "number") && M)
      return o.i18n.validation.invalid;
    switch (D) {
      case "email":
        return o.i18n.validation.invalidEmail;
      case "url":
        return o.i18n.validation.invalidUrl;
      case "tel":
        return o.i18n.validation.invalidTel;
      default:
        return o.i18n.validation.invalid;
    }
  }, y = (D) => {
    t?.(D);
  }, S = (D) => {
    const M = D.target.value, b = e?.pattern || l.pattern;
    if (M && b) {
      let w = !0;
      e?.validation ? w = e.validation(M) : w = h(M, b), c(w);
      const v = !!(e?.pattern || l.pattern);
      f(w ? "" : p(e?.type || "", v));
    } else
      c(!0), f("");
    a && a(D), n?.(D);
  }, N = (D) => {
    if (!i && !["Tab", "Escape", "Enter", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(D.key) && (c(!0), f("")), D.key === "Enter" && a) {
      const M = {
        ...D,
        target: D.target,
        currentTarget: D.currentTarget
      };
      a(M);
    }
    r?.(D);
  };
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      className: W("w-36", Sr({ variant: o.variant, size: o.size }), s),
      "data-slot": "filters-input-wrapper",
      children: [
        e?.prefix && /* @__PURE__ */ d.jsx(
          "div",
          {
            className: ht({ variant: o.variant, size: o.size }),
            "data-slot": "filters-prefix",
            children: e.prefix
          }
        ),
        /* @__PURE__ */ d.jsxs("div", { className: "flex w-full items-stretch", children: [
          /* @__PURE__ */ d.jsx(
            "input",
            {
              "aria-describedby": !i && u ? `${e?.key || "input"}-error` : void 0,
              "aria-invalid": !i,
              autoComplete: "off",
              className: "w-full bg-transparent outline-hidden dark:!bg-transparent",
              "data-form-type": "other",
              "data-lpignore": "true",
              "data-slot": "filters-input",
              "data-1p-ignore": !0,
              onBlur: S,
              onChange: y,
              onKeyDown: N,
              ...l
            }
          ),
          !i && u && /* @__PURE__ */ d.jsxs(Da, { children: [
            /* @__PURE__ */ d.jsx(Oa, { asChild: !0, children: /* @__PURE__ */ d.jsx("div", { className: "absolute top-1/2 right-2 flex -translate-y-1/2 items-center", children: /* @__PURE__ */ d.jsx(Sa, { className: "size-3.5 text-destructive" }) }) }),
            /* @__PURE__ */ d.jsx(Na, { children: /* @__PURE__ */ d.jsx("p", { children: u }) })
          ] })
        ] }),
        e?.suffix && /* @__PURE__ */ d.jsx(
          "div",
          {
            className: W(ht({ variant: o.variant, size: o.size })),
            "data-slot": "filters-suffix",
            children: e.suffix
          }
        )
      ]
    }
  );
}
const Tt = (e) => {
  const t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(e);
  if (!t)
    return;
  const [, n, r, a] = t, s = Number(n), l = Number(r), o = Number(a), i = new Date(s, l - 1, o);
  if (!(i.getFullYear() !== s || i.getMonth() !== l - 1 || i.getDate() !== o))
    return i;
}, Dn = (e) => {
  if (!e)
    return "";
  const t = e.getFullYear(), n = String(e.getMonth() + 1).padStart(2, "0"), r = String(e.getDate()).padStart(2, "0");
  return `${t}-${n}-${r}`;
};
function Pt({
  field: e,
  value: t,
  onChange: n,
  className: r,
  embedded: a = !1
}) {
  const s = Fe(), [l, o] = ne(!1), i = se(() => Tt(t), [t]), [c, u] = ne(i), f = ee(null), h = ee(t), [p, y] = ne(t);
  ie(() => {
    i && u(i);
  }, [i]), ie(() => {
    t !== h.current && document.activeElement !== f.current && (y(t), h.current = t);
  }, [t]);
  const S = (b, w = f.current) => {
    !e?.onInputChange || !w || e.onInputChange({
      target: { ...w, value: b },
      currentTarget: { ...w, value: b }
    });
  }, N = (b) => {
    y(b.target.value);
  }, D = (b) => {
    const w = b.target.value, v = Tt(w), m = w && !v ? Dn(/* @__PURE__ */ new Date()) : w;
    v ? u(v) : m && u(Tt(m)), m !== w && (f.current && (f.current.value = m), y(m)), m !== t && (h.current = m, n(m)), S(m, b.target);
  }, M = (b) => {
    if (!b) {
      h.current = "", f.current && (f.current.value = ""), y(""), n(""), S("");
      return;
    }
    const w = Dn(b);
    h.current = w, f.current && (f.current.value = w), u(b), y(w), n(w), S(w), o(!1);
  };
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      className: W(
        a ? "flex w-full min-w-0 items-center" : W("w-32", Sr({ variant: s.variant, size: s.size, cursorPointer: !1 })),
        r
      ),
      "data-slot": "filters-input-wrapper",
      children: [
        e?.prefix && /* @__PURE__ */ d.jsx(
          "div",
          {
            className: ht({ variant: s.variant, size: s.size }),
            "data-slot": "filters-prefix",
            children: e.prefix
          }
        ),
        /* @__PURE__ */ d.jsx("div", { className: "flex w-full min-w-0 items-stretch", children: /* @__PURE__ */ d.jsx(
          "input",
          {
            ref: f,
            autoComplete: "off",
            className: "w-full min-w-0 bg-transparent outline-hidden dark:!bg-transparent",
            "data-slot": "filters-input",
            inputMode: "numeric",
            pattern: "\\d{4}-\\d{2}-\\d{2}",
            placeholder: "YYYY-MM-DD",
            type: "text",
            value: p,
            onBlur: D,
            onChange: N
          }
        ) }),
        /* @__PURE__ */ d.jsxs(mt, { open: l, onOpenChange: o, children: [
          /* @__PURE__ */ d.jsx(pt, { asChild: !0, children: /* @__PURE__ */ d.jsx(
            "button",
            {
              "aria-label": "Open calendar",
              className: W(
                ht({ variant: s.variant, size: s.size }),
                "cursor-pointer text-muted-foreground transition-colors hover:text-foreground"
              ),
              "data-slot": "filters-suffix",
              type: "button",
              children: /* @__PURE__ */ d.jsx(ua, { className: "size-3.5" })
            }
          ) }),
          /* @__PURE__ */ d.jsx(gt, { align: "center", className: "w-auto overflow-hidden p-0", sideOffset: 4, children: /* @__PURE__ */ d.jsx(
            mr,
            {
              captionLayout: "dropdown-months",
              mode: "single",
              month: c,
              selected: i,
              onMonthChange: u,
              onSelect: M
            }
          ) })
        ] })
      ]
    }
  );
}
function il({ className: e, icon: t = /* @__PURE__ */ d.jsx(Wn, {}), ...n }) {
  const r = Fe();
  return /* @__PURE__ */ d.jsx(
    "button",
    {
      className: W(
        nl({
          variant: r.variant,
          size: r.size,
          cursorPointer: r.cursorPointer,
          radius: r.radius
        }),
        e
      ),
      "data-slot": "filters-remove",
      ...n,
      type: "button",
      children: t
    }
  );
}
const Nr = (e) => "fields" in e && Array.isArray(e.fields), Cr = (e) => !!(e.group && e.fields), Wr = (e) => e.reduce((t, n) => Nr(n) ? [...t, ...n.fields] : Cr(n) ? [...t, ...n.fields] : [...t, n], []), ll = (e) => Wr(e).reduce(
  (n, r) => (r.key && (n[r.key] = r), n),
  {}
), _r = (e) => ({
  select: [
    { value: "is", label: e.operators.is },
    { value: "is_not", label: e.operators.isNot },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  multiselect: [
    { value: "is_any_of", label: e.operators.isAnyOf },
    { value: "is_not_any_of", label: e.operators.isNotAnyOf },
    { value: "includes_all", label: e.operators.includesAll },
    { value: "excludes_all", label: e.operators.excludesAll },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  date: [
    { value: "before", label: e.operators.before },
    { value: "after", label: e.operators.after },
    { value: "is", label: e.operators.is },
    { value: "is_not", label: e.operators.isNot },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  daterange: [
    { value: "between", label: e.operators.between },
    { value: "not_between", label: e.operators.notBetween },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  text: [
    { value: "contains", label: e.operators.contains },
    { value: "not_contains", label: e.operators.notContains },
    { value: "starts_with", label: e.operators.startsWith },
    { value: "ends_with", label: e.operators.endsWith },
    { value: "is", label: e.operators.isExactly },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  number: [
    { value: "equals", label: e.operators.equals },
    { value: "not_equals", label: e.operators.notEquals },
    { value: "greater_than", label: e.operators.greaterThan },
    { value: "less_than", label: e.operators.lessThan },
    { value: "between", label: e.operators.between },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  numberrange: [
    { value: "between", label: e.operators.between },
    { value: "overlaps", label: e.operators.overlaps },
    { value: "contains", label: e.operators.contains },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  boolean: [
    { value: "is", label: e.operators.is },
    { value: "is_not", label: e.operators.isNot },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  email: [
    { value: "contains", label: e.operators.contains },
    { value: "not_contains", label: e.operators.notContains },
    { value: "starts_with", label: e.operators.startsWith },
    { value: "ends_with", label: e.operators.endsWith },
    { value: "is", label: e.operators.isExactly },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  url: [
    { value: "contains", label: e.operators.contains },
    { value: "not_contains", label: e.operators.notContains },
    { value: "starts_with", label: e.operators.startsWith },
    { value: "ends_with", label: e.operators.endsWith },
    { value: "is", label: e.operators.isExactly },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  tel: [
    { value: "contains", label: e.operators.contains },
    { value: "not_contains", label: e.operators.notContains },
    { value: "starts_with", label: e.operators.startsWith },
    { value: "ends_with", label: e.operators.endsWith },
    { value: "is", label: e.operators.isExactly },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  time: [
    { value: "before", label: e.operators.before },
    { value: "after", label: e.operators.after },
    { value: "is", label: e.operators.is },
    { value: "between", label: e.operators.between },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ],
  datetime: [
    { value: "before", label: e.operators.before },
    { value: "after", label: e.operators.after },
    { value: "is", label: e.operators.is },
    { value: "between", label: e.operators.between },
    { value: "empty", label: e.operators.empty },
    { value: "not_empty", label: e.operators.notEmpty }
  ]
});
_r(Ve);
const cl = (e, t, n) => {
  if (e.operators)
    return e.operators;
  const r = _r(n);
  let a = e.type || "select";
  return a === "select" && t.length > 1 && (a = "multiselect"), a === "multiselect" || e.type === "multiselect" ? r.multiselect : r[a] || r.select;
};
function ul({ field: e, operator: t, values: n, onChange: r }) {
  const a = Fe(), s = cl(e, n, a.i18n), l = s.find((o) => o.value === t)?.label || a.i18n.helpers.formatOperator(t);
  return e.hideOperatorSelect ? /* @__PURE__ */ d.jsx("div", { className: "flex items-center self-stretch border border-r-0 px-2.5 whitespace-nowrap text-muted-foreground", children: l }) : /* @__PURE__ */ d.jsxs(ha, { children: [
    /* @__PURE__ */ d.jsx(ma, { className: rl({ variant: a.variant, size: a.size }), children: l }),
    /* @__PURE__ */ d.jsx(pa, { align: "start", className: "w-fit min-w-fit", children: s.map((o) => /* @__PURE__ */ d.jsxs(
      ga,
      {
        className: "flex items-center justify-between",
        onClick: () => r(o.value),
        children: [
          /* @__PURE__ */ d.jsx("span", { children: o.label }),
          /* @__PURE__ */ d.jsx(tt, { className: `ms-auto text-primary ${o.value === t ? "opacity-100" : "opacity-0"}` })
        ]
      },
      o.value
    )) })
  ] });
}
function On({
  searchable: e,
  label: t,
  searchInput: n,
  isSearching: r,
  className: a,
  onSearchChange: s
}) {
  const l = Fe();
  return e ? /* @__PURE__ */ d.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ d.jsx(
      Qt,
      {
        className: a,
        placeholder: l.i18n.placeholders.searchField(t || ""),
        value: n,
        onValueChange: s
      }
    ),
    r && /* @__PURE__ */ d.jsx(Yt, { className: "pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 animate-spin text-muted-foreground" })
  ] }) : null;
}
function dl(e, t) {
  const n = t.trim().toLowerCase();
  return n ? e.filter((r) => r.label.toLowerCase().includes(n) || r.detail?.toLowerCase().includes(n)) : e;
}
function Sn({
  contextLabel: e,
  selectedOptions: t,
  unselectedOptions: n,
  isInitialLoad: r,
  isLoadingMore: a,
  hasMore: s,
  onLoadMore: l,
  onSelectSelected: o,
  onSelectUnselected: i
}) {
  const c = Fe();
  return /* @__PURE__ */ d.jsxs(Jt, { className: "outline-hidden", children: [
    r ? /* @__PURE__ */ d.jsxs("div", { className: "flex items-center justify-center py-6 text-muted-foreground", children: [
      /* @__PURE__ */ d.jsx(Yt, { className: "mr-2 size-4 animate-spin" }),
      c.i18n.loading
    ] }) : /* @__PURE__ */ d.jsx(en, { children: c.i18n.noResultsFound }),
    t.length > 0 && /* @__PURE__ */ d.jsx(Ge, { heading: e, children: t.map((u) => /* @__PURE__ */ d.jsxs(
      Te,
      {
        className: "group flex items-center gap-2",
        onSelect: () => o(u),
        children: [
          u.icon && u.icon,
          /* @__PURE__ */ d.jsxs("div", { className: "flex flex-col overflow-hidden", children: [
            /* @__PURE__ */ d.jsx("span", { className: "truncate text-accent-foreground", title: u.label, children: u.label }),
            u.detail && /* @__PURE__ */ d.jsx("span", { className: "truncate text-muted-foreground", title: u.detail, children: u.detail })
          ] }),
          /* @__PURE__ */ d.jsx(tt, { className: "ms-auto text-primary" })
        ]
      },
      String(u.value)
    )) }),
    n.length > 0 && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      t.length > 0 && /* @__PURE__ */ d.jsx(Re, {}),
      /* @__PURE__ */ d.jsx(Ge, { children: n.map((u) => /* @__PURE__ */ d.jsxs(
        Te,
        {
          className: "group flex items-center gap-2",
          value: u.label + (u.detail ? ` - ${u.detail}` : ""),
          onSelect: () => i(u),
          children: [
            u.icon && u.icon,
            /* @__PURE__ */ d.jsxs("div", { className: "flex flex-col overflow-hidden", children: [
              /* @__PURE__ */ d.jsx("span", { className: "truncate text-accent-foreground", title: u.label, children: u.label }),
              u.detail && /* @__PURE__ */ d.jsx("span", { className: "truncate text-muted-foreground", title: u.detail, children: u.detail })
            ] }),
            /* @__PURE__ */ d.jsx(tt, { className: "ms-auto text-primary opacity-0" })
          ]
        },
        String(u.value)
      )) })
    ] }),
    s && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      (t.length > 0 || n.length > 0) && /* @__PURE__ */ d.jsx(Re, {}),
      /* @__PURE__ */ d.jsx("div", { className: "p-1.5", children: /* @__PURE__ */ d.jsxs(
        "button",
        {
          className: "flex w-full items-center justify-center rounded-xs px-2.5 py-1.5 text-muted-foreground hover:bg-accent hover:text-accent-foreground disabled:opacity-50",
          disabled: a,
          type: "button",
          onClick: l,
          children: [
            a && /* @__PURE__ */ d.jsx(Yt, { className: "mr-2 size-4 animate-spin" }),
            a ? c.i18n.loading : c.i18n.loadMore
          ]
        }
      ) })
    ] })
  ] });
}
function jr({
  field: e,
  values: t,
  onChange: n,
  onClose: r,
  inline: a = !1,
  searchInput: s,
  onSearchChange: l,
  shouldClientFilter: o,
  isInitialLoad: i,
  isSearching: c,
  isLoadingMore: u,
  hasMore: f,
  onLoadMore: h
}) {
  const [p, y] = ne(!1), [S, N] = ne([]), D = Fe(), M = e.type === "multiselect" || t.length > 1, b = se(() => e.value ?? t, [e.value, t]);
  ie(() => {
    p && e.searchable !== !1 && setTimeout(() => {
      const C = document.querySelector("[cmdk-input]");
      C && C.focus();
    }, 0);
  }, [p, e.searchable]);
  const w = se(
    () => e.options?.filter((C) => b.includes(C.value)) || [],
    [e.options, b]
  );
  ie(() => {
    if (b.length === 0) {
      N([]);
      return;
    }
    w.length > 0 && N((C) => {
      const z = [];
      for (const X of b) {
        const U = w.find((L) => L.value === X) ?? C.find((L) => L.value === X);
        U && z.push(U);
      }
      return z;
    });
  }, [w, b]);
  const v = se(() => b.length === 0 ? [] : S.length > 0 ? S : w, [S, b.length, w]), m = se(() => dl(v, s), [s, v]), _ = e.options?.filter((C) => !b.includes(C.value)) || [], B = (C) => {
    l(C);
  }, $ = () => {
    y(!1), setTimeout(() => l(""), Bt), r?.();
  };
  return a ? /* @__PURE__ */ d.jsx("div", { className: "w-full", children: /* @__PURE__ */ d.jsxs(ft, { shouldFilter: o, children: [
    /* @__PURE__ */ d.jsx(
      On,
      {
        className: "h-(--control-height) pr-8",
        isSearching: c,
        label: e.label,
        searchable: e.searchable !== !1,
        searchInput: s,
        onSearchChange: B
      }
    ),
    /* @__PURE__ */ d.jsx(
      Sn,
      {
        contextLabel: e.label || "Selected",
        hasMore: f,
        isInitialLoad: i,
        isLoadingMore: u,
        selectedOptions: m,
        unselectedOptions: _,
        onLoadMore: h,
        onSelectSelected: (C) => {
          if (M) {
            const z = b.filter((X) => X !== C.value);
            e.onValueChange ? e.onValueChange(z) : n(z);
          } else
            e.onValueChange ? e.onValueChange([]) : n([]);
        },
        onSelectUnselected: (C) => {
          if (M) {
            const z = [...b, C.value];
            if (e.maxSelections && z.length > e.maxSelections)
              return;
            e.onValueChange ? e.onValueChange(z) : n(z), e.autoCloseOnSelect && r?.();
          } else
            e.onValueChange ? e.onValueChange([C.value]) : n([C.value]), r?.();
        }
      }
    )
  ] }) }) : /* @__PURE__ */ d.jsxs(
    mt,
    {
      open: p,
      onOpenChange: (C) => {
        y(C), C || setTimeout(() => l(""), Bt);
      },
      children: [
        /* @__PURE__ */ d.jsx(
          pt,
          {
            className: W(Je({
              variant: D.variant,
              size: D.size,
              cursorPointer: D.cursorPointer
            }), e.triggerClassName ?? "max-w-60"),
            children: /* @__PURE__ */ d.jsx("div", { className: "flex min-w-0 items-center gap-1.5", children: e.customValueRenderer ? e.customValueRenderer(t, e.options || []) : /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
              v.length > 0 && v.some((C) => C.icon) && /* @__PURE__ */ d.jsx("div", { className: W("-space-x-0.5 flex shrink-0 items-center", e.selectedOptionsClassName), children: v.slice(0, 3).map((C) => /* @__PURE__ */ d.jsx("div", { children: C.icon }, String(C.value))) }),
              v.length === 1 ? /* @__PURE__ */ d.jsx("span", { className: "min-w-0 truncate text-accent-foreground", title: v[0].detail ? `${v[0].label} - ${v[0].detail}` : v[0].label, children: v[0].label }) : v.length > 1 ? `${v.length} ${D.i18n.selectedCount}` : D.i18n.select
            ] }) })
          }
        ),
        /* @__PURE__ */ d.jsx(
          gt,
          {
            align: "start",
            className: W(
              "p-0 data-[state=closed]:animation-none! data-[state=closed]:duration-0!",
              e.className || "w-[200px]"
            ),
            children: /* @__PURE__ */ d.jsxs(ft, { shouldFilter: o, children: [
              /* @__PURE__ */ d.jsx(
                On,
                {
                  className: "h-(--control-height) pr-8",
                  isSearching: c,
                  label: e.label,
                  searchable: e.searchable !== !1,
                  searchInput: s,
                  onSearchChange: B
                }
              ),
              /* @__PURE__ */ d.jsx(
                Sn,
                {
                  hasMore: f,
                  isInitialLoad: i,
                  isLoadingMore: u,
                  selectedOptions: m,
                  unselectedOptions: _,
                  onLoadMore: h,
                  onSelectSelected: (C) => {
                    n(M ? t.filter((z) => z !== C.value) : []), M || (y(!1), $());
                  },
                  onSelectUnselected: (C) => {
                    if (M) {
                      const z = [...t, C.value];
                      if (e.maxSelections && z.length > e.maxSelections)
                        return;
                      n(z), e.autoCloseOnSelect && $();
                    } else
                      n([C.value]), y(!1), $();
                  }
                }
              )
            ] })
          }
        )
      ]
    }
  );
}
function fl({
  field: e,
  values: t,
  onChange: n,
  onClose: r,
  inline: a = !1,
  searchInput: s,
  onSearchChange: l
}) {
  const o = se(() => e.value ?? t, [e.value, t]), i = e.valueSource.useOptions({
    query: s,
    selectedValues: o
  }), c = se(() => ({
    ...e,
    options: i.options
  }), [e, i.options]);
  return /* @__PURE__ */ d.jsx(
    jr,
    {
      field: c,
      hasMore: i.hasMore,
      inline: a,
      isInitialLoad: i.isInitialLoad,
      isLoadingMore: i.isLoadingMore,
      isSearching: i.isSearching,
      searchInput: s,
      shouldClientFilter: !1,
      values: t,
      onChange: n,
      onClose: r,
      onLoadMore: i.loadMore,
      onSearchChange: l
    }
  );
}
function Fr({
  field: e,
  values: t,
  onChange: n,
  onClose: r,
  inline: a = !1
}) {
  const [s, l] = ne(""), o = e.options?.length ?? 0;
  return e.valueSource ? /* @__PURE__ */ d.jsx(
    fl,
    {
      field: e,
      inline: a,
      searchInput: s,
      values: t,
      onChange: n,
      onClose: r,
      onSearchChange: l
    },
    e.valueSource.id
  ) : /* @__PURE__ */ d.jsx(
    jr,
    {
      field: e,
      hasMore: !1,
      inline: a,
      isInitialLoad: !!e.isLoading && o === 0,
      isLoadingMore: !1,
      isSearching: !!e.isLoading && o > 0,
      searchInput: s,
      shouldClientFilter: !0,
      values: t,
      onChange: n,
      onClose: r,
      onLoadMore: () => {
      },
      onSearchChange: l
    }
  );
}
function hl({ field: e, values: t, onChange: n, operator: r }) {
  const [a, s] = ne(!1), [l, o] = ne(""), i = Fe();
  if (ie(() => {
    a && e.searchable !== !1 && setTimeout(() => {
      const h = document.querySelector("[cmdk-input]");
      h && h.focus();
    }, 0);
  }, [a, e.searchable]), r === "empty" || r === "not_empty")
    return null;
  if (e.customRenderer)
    return /* @__PURE__ */ d.jsx(
      "div",
      {
        className: Je({
          variant: i.variant,
          size: i.size,
          cursorPointer: i.cursorPointer
        }),
        children: e.customRenderer({ field: e, values: t, onChange: n, operator: r })
      }
    );
  if (e.type === "boolean") {
    const h = t[0] === !0, p = e.onLabel || i.i18n.true, y = e.offLabel || i.i18n.false;
    return /* @__PURE__ */ d.jsx(
      "div",
      {
        className: Je({
          variant: i.variant,
          size: i.size,
          cursorPointer: i.cursorPointer
        }),
        children: /* @__PURE__ */ d.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ d.jsx(Dr, { checked: h, size: "sm", onCheckedChange: (S) => n([S]) }),
          e.onLabel && e.offLabel && /* @__PURE__ */ d.jsx("span", { className: "text-xs text-muted-foreground", children: h ? p : y })
        ] })
      }
    );
  }
  if (e.type === "time") {
    if (r === "between") {
      const h = t[0] || "", p = t[1] || "";
      return /* @__PURE__ */ d.jsxs("div", { className: "flex items-center", "data-slot": "filters-item", children: [
        /* @__PURE__ */ d.jsx(
          Me,
          {
            className: e.className,
            field: e,
            type: "time",
            value: h,
            onChange: (y) => n([y.target.value, p]),
            onInputChange: e.onInputChange
          }
        ),
        /* @__PURE__ */ d.jsx(
          "div",
          {
            className: ut({ variant: i.variant, size: i.size }),
            "data-slot": "filters-between",
            children: i.i18n.to
          }
        ),
        /* @__PURE__ */ d.jsx(
          Me,
          {
            className: e.className,
            field: e,
            type: "time",
            value: p,
            onChange: (y) => n([h, y.target.value]),
            onInputChange: e.onInputChange
          }
        )
      ] });
    }
    return /* @__PURE__ */ d.jsx(
      Me,
      {
        className: e.className,
        field: e,
        type: "time",
        value: t[0] || "",
        onChange: (h) => n([h.target.value]),
        onInputChange: e.onInputChange
      }
    );
  }
  if (e.type === "datetime") {
    if (r === "between") {
      const h = t[0] || "", p = t[1] || "";
      return /* @__PURE__ */ d.jsxs("div", { className: "flex items-center", "data-slot": "filters-item", children: [
        /* @__PURE__ */ d.jsx(
          Me,
          {
            className: W("w-36 max-w-full", e.className),
            field: e,
            type: "datetime-local",
            value: h,
            onChange: (y) => n([y.target.value, p]),
            onInputChange: e.onInputChange
          }
        ),
        /* @__PURE__ */ d.jsx(
          "div",
          {
            className: ut({ variant: i.variant, size: i.size }),
            "data-slot": "filters-between",
            children: i.i18n.to
          }
        ),
        /* @__PURE__ */ d.jsx(
          Me,
          {
            className: W("w-36 max-w-full", e.className),
            field: e,
            type: "datetime-local",
            value: p,
            onChange: (y) => n([h, y.target.value]),
            onInputChange: e.onInputChange
          }
        )
      ] });
    }
    return /* @__PURE__ */ d.jsx(
      Me,
      {
        className: W("w-36 max-w-full", e.className),
        field: e,
        type: "datetime-local",
        value: t[0] || "",
        onChange: (h) => n([h.target.value]),
        onInputChange: e.onInputChange
      }
    );
  }
  if (["email", "url", "tel"].includes(e.type || "")) {
    const h = () => {
      switch (e.type) {
        case "email":
          return "email";
        case "url":
          return "url";
        case "tel":
          return "tel";
        default:
          return "text";
      }
    }, p = () => {
      switch (e.type) {
        case "email":
          return "^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$";
        case "url":
          return "^https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)$";
        case "tel":
          return "^[\\+]?[1-9][\\d]{0,15}$";
        default:
          return;
      }
    };
    return /* @__PURE__ */ d.jsx(
      Me,
      {
        className: e.className,
        field: e,
        pattern: e.pattern || p(),
        placeholder: e.placeholder || i.i18n.placeholders.enterField(e.type || "text"),
        type: h(),
        value: t[0] || "",
        onChange: (y) => n([y.target.value]),
        onInputChange: e.onInputChange
      }
    );
  }
  if (e.type === "daterange") {
    const h = t[0] || "", p = t[1] || "";
    return /* @__PURE__ */ d.jsxs(
      "div",
      {
        className: Je({
          variant: i.variant,
          size: i.size,
          cursorPointer: i.cursorPointer
        }),
        children: [
          /* @__PURE__ */ d.jsx(
            Pt,
            {
              className: W("max-w-full", e.className),
              field: e,
              value: h,
              onChange: (y) => n([y, p])
            }
          ),
          /* @__PURE__ */ d.jsx(
            "div",
            {
              className: ut({ variant: i.variant, size: i.size }),
              "data-slot": "filters-between",
              children: i.i18n.to
            }
          ),
          /* @__PURE__ */ d.jsx(
            Pt,
            {
              className: W("max-w-full", e.className),
              field: e,
              value: p,
              onChange: (y) => n([h, y])
            }
          )
        ]
      }
    );
  }
  if (e.type === "text" || e.type === "number") {
    if (e.type === "number" && r === "between") {
      const h = t[0] || "", p = t[1] || "";
      return /* @__PURE__ */ d.jsxs("div", { className: "flex items-center", "data-slot": "filters-item", children: [
        /* @__PURE__ */ d.jsx(
          Me,
          {
            className: W("w-16 max-w-full", e.className),
            field: e,
            max: e.max,
            min: e.min,
            pattern: e.pattern,
            placeholder: i.i18n.min,
            step: e.step,
            type: "number",
            value: h,
            onChange: (y) => n([y.target.value, p]),
            onInputChange: e.onInputChange
          }
        ),
        /* @__PURE__ */ d.jsx(
          "div",
          {
            className: ut({ variant: i.variant, size: i.size }),
            "data-slot": "filters-between",
            children: i.i18n.to
          }
        ),
        /* @__PURE__ */ d.jsx(
          Me,
          {
            className: W("w-16 max-w-full", e.className),
            field: e,
            max: e.max,
            min: e.min,
            pattern: e.pattern,
            placeholder: i.i18n.max,
            step: e.step,
            type: "number",
            value: p,
            onChange: (y) => n([h, y.target.value]),
            onInputChange: e.onInputChange
          }
        )
      ] });
    }
    return /* @__PURE__ */ d.jsx("div", { className: "flex items-center", "data-slot": "filters-item", children: /* @__PURE__ */ d.jsx(
      Me,
      {
        className: W("w-36", e.className),
        field: e,
        max: e.type === "number" ? e.max : void 0,
        min: e.type === "number" ? e.min : void 0,
        pattern: e.pattern,
        placeholder: e.placeholder,
        step: e.type === "number" ? e.step : void 0,
        type: e.type === "number" ? "number" : "text",
        value: t[0] || "",
        onChange: (h) => n([h.target.value]),
        onInputChange: e.onInputChange
      }
    ) });
  }
  if (e.type === "date")
    return /* @__PURE__ */ d.jsx(
      Pt,
      {
        className: e.className,
        field: e,
        value: t[0] || "",
        onChange: (h) => n([h])
      }
    );
  if (e.type === "select" || e.type === "multiselect")
    return /* @__PURE__ */ d.jsx(Fr, { field: e, values: t, onChange: n });
  const c = t.length > 1, u = e.options?.filter((h) => t.includes(h.value)) || [], f = e.options?.filter((h) => !t.includes(h.value)) || [];
  return /* @__PURE__ */ d.jsxs(
    mt,
    {
      open: a,
      onOpenChange: (h) => {
        s(h), h || setTimeout(() => o(""), Bt);
      },
      children: [
        /* @__PURE__ */ d.jsx(
          pt,
          {
            className: Je({
              variant: i.variant,
              size: i.size,
              cursorPointer: i.cursorPointer
            }),
            children: /* @__PURE__ */ d.jsx("div", { className: "flex w-full min-w-0 items-center gap-1.5", children: e.customValueRenderer ? e.customValueRenderer(t, e.options || []) : /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
              u.length > 0 && /* @__PURE__ */ d.jsx("div", { className: "flex shrink-0 items-center -space-x-1.5", children: u.slice(0, 3).map((h) => /* @__PURE__ */ d.jsx("div", { children: h.icon }, String(h.value))) }),
              u.length === 1 ? /* @__PURE__ */ d.jsx("span", { className: "min-w-0 truncate text-accent-foreground", title: u[0].detail ? `${u[0].label} - ${u[0].detail}` : u[0].label, children: u[0].label }) : u.length > 1 ? `${u.length} ${i.i18n.selectedCount}` : i.i18n.select
            ] }) })
          }
        ),
        /* @__PURE__ */ d.jsx(gt, { className: W("w-36 p-0 data-[state=closed]:animation-none! data-[state=closed]:duration-0!", e.popoverContentClassName), children: /* @__PURE__ */ d.jsxs(ft, { children: [
          e.searchable !== !1 && /* @__PURE__ */ d.jsx(
            Qt,
            {
              className: "h-(--control-height)",
              placeholder: i.i18n.placeholders.searchField(e.label || ""),
              value: l,
              onValueChange: o
            }
          ),
          /* @__PURE__ */ d.jsxs(Jt, { className: "outline-hidden", children: [
            /* @__PURE__ */ d.jsx(en, { children: i.i18n.noResultsFound }),
            u.length > 0 && /* @__PURE__ */ d.jsx(Ge, { children: u.map((h) => /* @__PURE__ */ d.jsxs(
              Te,
              {
                className: "group flex items-center gap-2",
                onSelect: () => {
                  n(c ? t.filter((p) => p !== h.value) : []), c || s(!1);
                },
                children: [
                  h.icon && h.icon,
                  /* @__PURE__ */ d.jsx("span", { className: "truncate text-accent-foreground", children: h.label }),
                  /* @__PURE__ */ d.jsx(tt, { className: "ms-auto text-primary" })
                ]
              },
              String(h.value)
            )) }),
            f.length > 0 && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
              u.length > 0 && /* @__PURE__ */ d.jsx(Re, {}),
              /* @__PURE__ */ d.jsx(Ge, { children: f.map((h) => /* @__PURE__ */ d.jsxs(
                Te,
                {
                  className: "group flex items-center gap-2",
                  value: h.label,
                  onSelect: () => {
                    if (c) {
                      const p = [...t, h.value];
                      if (e.maxSelections && p.length > e.maxSelections)
                        return;
                      n(p);
                    } else
                      n([h.value]), s(!1);
                  },
                  children: [
                    h.icon && h.icon,
                    /* @__PURE__ */ d.jsx("span", { className: "truncate text-accent-foreground", children: h.label }),
                    /* @__PURE__ */ d.jsx(tt, { className: "ms-auto text-primary opacity-0" })
                  ]
                },
                String(h.value)
              )) })
            ] })
          ] })
        ] }) })
      ]
    }
  );
}
function Ml({
  filters: e,
  fields: t,
  onChange: n,
  className: r,
  showAddButton: a = !0,
  addButtonText: s,
  addButtonIcon: l,
  addButtonClassName: o,
  addButton: i,
  showClearButton: c = !1,
  clearButtonText: u,
  clearButtonIcon: f,
  clearButtonClassName: h,
  clearButton: p,
  onClear: y,
  variant: S = "outline",
  size: N = "md",
  radius: D = "md",
  i18n: M,
  showSearchInput: b = !0,
  cursorPointer: w = !0,
  trigger: v,
  allowMultiple: m = !0,
  popoverContentClassName: _,
  popoverAlign: B = "start",
  keyboardShortcut: $,
  onActiveFieldChange: C
}) {
  const [z, X] = ne(!1), [U, L] = ne(null), [le, pe] = ne([]);
  ie(() => {
    C?.(U);
  }, [U, C]), ie(() => {
    if (!$)
      return;
    const x = (k) => {
      const P = k.target;
      P.tagName === "INPUT" || P.tagName === "TEXTAREA" || P.isContentEditable || k.key.toLowerCase() === $.toLowerCase() && !k.metaKey && !k.ctrlKey && !k.altKey && (k.preventDefault(), X((Y) => !Y));
    };
    return window.addEventListener("keydown", x), () => window.removeEventListener("keydown", x);
  }, [$]), ie(() => {
    z && setTimeout(() => {
      const x = document.querySelector("[cmdk-input]");
      if (x)
        x.focus();
      else {
        const k = document.querySelector("[cmdk-root]");
        k && k.focus();
      }
    }, 0);
  }, [z, U, b]);
  const ce = {
    ...Ve,
    ...M,
    operators: {
      ...Ve.operators,
      ...M?.operators
    },
    placeholders: {
      ...Ve.placeholders,
      ...M?.placeholders
    },
    validation: {
      ...Ve.validation,
      ...M?.validation
    }
  }, be = se(() => ll(t), [t]), Q = U ? be[U] : null, re = ae(
    (x, k) => {
      n(
        e.map((P) => {
          if (P.id === x) {
            const Y = { ...P, ...k };
            return (k.operator === "empty" || k.operator === "not_empty") && (Y.values = []), Y;
          }
          return P;
        })
      );
    },
    [e, n]
  ), ue = ae(
    (x) => {
      n(e.filter((k) => k.id !== x));
    },
    [e, n]
  ), g = ae(() => {
    X(!1), L(null), pe([]);
  }, []), E = ae(
    (x) => {
      const k = be[x];
      if (!k?.key)
        return;
      if (k.type === "select" || k.type === "multiselect") {
        L(k.key), pe([]);
        return;
      }
      const P = k.defaultOperator || (k.type === "daterange" || k.type === "numberrange" ? "between" : "is");
      let Y = [];
      k.defaultValue !== void 0 ? Y = [k.defaultValue] : ["text", "number", "date", "email", "url", "tel", "time", "datetime"].includes(k.type || "") ? Y = [""] : k.type === "daterange" ? Y = ["", ""] : k.type === "numberrange" ? Y = [k.min || 0, k.max || 100] : k.type === "boolean" && (Y = [!1]);
      const V = Nn(x, P, Y);
      n([...e, V]), g();
    },
    [m, g, be, e, n]
  ), A = ae(
    (x, k) => {
      if (!x.key)
        return;
      const P = x.defaultOperator || (x.type === "multiselect" ? "is_any_of" : "is"), Y = Nn(x.key, P, k);
      n([...e, Y]), g();
    },
    [g, e, n]
  ), j = se(() => Wr(t).filter((k) => !k.key || k.type === "separator" ? !1 : m ? !0 : !e.some((P) => P.field === k.key)), [t, e, m]);
  return /* @__PURE__ */ d.jsx(
    Or.Provider,
    {
      value: {
        variant: S,
        size: N,
        radius: D,
        i18n: ce,
        cursorPointer: w,
        className: r,
        showAddButton: a,
        addButtonText: s,
        addButtonIcon: l,
        addButtonClassName: o,
        addButton: i,
        showSearchInput: b,
        trigger: v,
        allowMultiple: m
      },
      children: /* @__PURE__ */ d.jsxs("div", { className: W(
        sl({ variant: S, size: N }),
        e.length > 0 && "w-full",
        c && e.length > 0 && "sm:pr-24",
        r
      ), children: [
        e.map((x) => {
          const k = be[x.field];
          return k ? /* @__PURE__ */ d.jsxs("div", { className: ol({ variant: S }), "data-slot": "filter-item", children: [
            /* @__PURE__ */ d.jsxs("div", { className: al({ variant: S, size: N, radius: D }), children: [
              k.icon,
              k.label
            ] }),
            /* @__PURE__ */ d.jsx(
              ul,
              {
                field: k,
                operator: x.operator,
                values: x.values,
                onChange: (P) => re(x.id, { operator: P })
              }
            ),
            /* @__PURE__ */ d.jsx(
              hl,
              {
                field: k,
                operator: x.operator,
                values: x.values,
                onChange: (P) => re(x.id, { values: P })
              }
            ),
            /* @__PURE__ */ d.jsx(il, { onClick: () => ue(x.id) })
          ] }, x.id) : null;
        }),
        a && j.length > 0 && /* @__PURE__ */ d.jsxs(
          mt,
          {
            open: z,
            onOpenChange: (x) => {
              X(x), x || (L(null), pe([]));
            },
            children: [
              /* @__PURE__ */ d.jsx(pt, { asChild: !0, children: i || /* @__PURE__ */ d.jsxs(
                "button",
                {
                  className: W(
                    Mn({
                      variant: S,
                      size: N,
                      cursorPointer: w,
                      radius: D
                    }),
                    o
                  ),
                  title: ce.addFilterTitle,
                  type: "button",
                  children: [
                    l || /* @__PURE__ */ d.jsx(Ca, {}),
                    s || ce.addFilter
                  ]
                }
              ) }),
              /* @__PURE__ */ d.jsx(
                gt,
                {
                  align: B,
                  className: W(
                    "p-0 data-[state=closed]:animation-none! data-[state=closed]:duration-0!",
                    Q?.className || _ || "w-[220px]"
                  ),
                  children: Q ? (
                    // The inline "add filter" picker always commits one filter per
                    // pick and closes — for both `select` and `multiselect` fields.
                    // We override `multiselect` → `select` so SelectOptionsPopover
                    // renders the single-pick UI (one click → onChange + onClose).
                    // Multi-value editing of an existing filter happens through the
                    // filter row's own picker, not here.
                    /* @__PURE__ */ d.jsx(
                      Fr,
                      {
                        field: Q.type === "multiselect" ? { ...Q, type: "select" } : Q,
                        inline: !0,
                        values: le,
                        onChange: (x) => A(Q, x),
                        onClose: g
                      }
                    )
                  ) : (
                    // Show field selection - needs Command wrapper for search/list
                    /* @__PURE__ */ d.jsxs(ft, { className: "outline-hidden", tabIndex: b ? void 0 : 0, children: [
                      b && /* @__PURE__ */ d.jsx(Qt, { className: "h-(--control-height)", placeholder: ce.searchFields }),
                      /* @__PURE__ */ d.jsxs(Jt, { className: "outline-hidden", children: [
                        /* @__PURE__ */ d.jsx(en, { children: ce.noFieldsFound }),
                        t.map((x, k) => {
                          if (Nr(x)) {
                            const Y = x.fields.filter((V) => V.type === "separator" || m ? !0 : !e.some((ke) => ke.field === V.key));
                            return Y.length === 0 ? null : /* @__PURE__ */ d.jsx(Ge, { heading: x.group || "Fields", children: Y.map((V, ke) => {
                              if (V.type === "separator") {
                                const xt = V.key ?? `${x.group ?? `group-${k}`}-separator-${ke}`;
                                return /* @__PURE__ */ d.jsx(Re, {}, xt);
                              }
                              return /* @__PURE__ */ d.jsxs(
                                Te,
                                {
                                  className: "min-w-0",
                                  onSelect: () => V.key && E(V.key),
                                  children: [
                                    V.icon,
                                    /* @__PURE__ */ d.jsx("span", { className: "truncate", children: V.label })
                                  ]
                                },
                                V.key ?? `${x.group ?? `group-${k}`}-field-${ke}`
                              );
                            }) }, x.group || `group-${k}`);
                          }
                          if (Cr(x)) {
                            const Y = x.fields.filter((V) => V.type === "separator" || m ? !0 : !e.some((ke) => ke.field === V.key));
                            return Y.length === 0 ? null : /* @__PURE__ */ d.jsx(Ge, { heading: x.group || "Fields", children: Y.map((V) => {
                              if (V.type === "separator") {
                                const ke = V.key || `${x.group || `group-${k}`}-separator-${V.label || Math.random()}`;
                                return /* @__PURE__ */ d.jsx(Re, {}, ke);
                              }
                              return /* @__PURE__ */ d.jsxs(Te, { className: "min-w-0", onSelect: () => V.key && E(V.key), children: [
                                V.icon,
                                /* @__PURE__ */ d.jsx("span", { className: "truncate", children: V.label })
                              ] }, V.key);
                            }) }, x.group || `group-${k}`);
                          }
                          const P = x;
                          if (P.type === "separator") {
                            const Y = P.key || `flat-separator-${P.label || k}`;
                            return /* @__PURE__ */ d.jsx(Re, {}, Y);
                          }
                          return !m && e.some((Y) => Y.field === P.key) ? null : /* @__PURE__ */ d.jsxs(Te, { className: "min-w-0", onSelect: () => P.key && E(P.key), children: [
                            P.icon,
                            /* @__PURE__ */ d.jsx("span", { className: "truncate", children: P.label })
                          ] }, P.key);
                        })
                      ] })
                    ] })
                  )
                }
              )
            ]
          }
        ),
        c && e.length > 0 && (p || /* @__PURE__ */ d.jsxs(
          "button",
          {
            className: W(
              Mn({
                variant: S,
                size: N,
                cursorPointer: w,
                radius: D
              }),
              "border-0 bg-transparent hover:bg-transparent hover:text-foreground",
              "sm:absolute sm:right-0 sm:top-0",
              h
            ),
            type: "button",
            onClick: () => {
              y ? y() : n([]);
            },
            children: [
              f || /* @__PURE__ */ d.jsx(Wn, {}),
              u || ce.clearFilters
            ]
          }
        ))
      ] })
    }
  );
}
const Nn = (e, t, n = []) => ({
  id: `${Date.now()}-${Math.random().toString(36).substring(2, 11)}`,
  field: e,
  operator: t || "is",
  values: n
});
export {
  Pt as F,
  Ml as a,
  Nn as c,
  Wa as u
};
//# sourceMappingURL=filters-BCBDCnQF.js.map
