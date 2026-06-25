import { x as gr, R as l, am as ge, ak as te, a9 as De, i as be, a1 as mt, af as je, ai as sp, a6 as fr, w as Yt, u as zt, al as br, L as la, ae as cp, D as up, j as cl, y as fa, z as lp } from "./index-Dqn5WIFh.js";
import { u as fp, F as dp, a as pp, c as hp } from "./filters-BCBDCnQF.js";
import { b as ul, T as Dn, c as kn, a as In, E as ll } from "./tooltip-Ci7pesWi.js";
import { e as dr, L as mp } from "./label-CmJzmJY7.js";
import { C as yp, c as da, g as gp, F as bp, e as vp, d as wp, b as xp, M as fl, D as pa, P as Gi, h as dl, H as pl, R as jp, E as hl, f as Ki } from "./search-CXP00fG8.js";
import { H as Sp, e as Np, D as Pp, n as Tp, i as Ep, k as tr } from "./skeleton-Bihnkn8q.js";
import { U as ml, E as Op, S as Rp, g as Ap } from "./get-site-timezone-83C41MGz.js";
import { b as vr, c as ha, a as Dp, e as Vn } from "./hooks-5YpJYWOw.js";
import { a as kp } from "./posts-CdWV_nlm.js";
import { X as Ip, b as ma, c as ya, f as ga, g as ba, d as Cp, e as va } from "./dialog-3KY3A8t5.js";
import { B as ue, C as Mp } from "./button-CG2Dpjqy.js";
import { A as xt } from "./avatar-BejAO6Rj.js";
import { L as jt } from "./loading-indicator-DAOD6O2b.js";
import { B as pc, b as _p } from "./badge-BYGRyd2f.js";
import { a as Fp, b as wa, n as Bp, m as yl, d as hc, g as Lp, C as Up } from "./check-fsC5BvGC.js";
import { u as qp, a as $p } from "./settings-DEXxDYc2.js";
import { E as zp } from "./ellipsis-BhK5S70U.js";
import { M as Yp } from "./message-circle-D4bCjxKS.js";
import { T as Zp, b as Wp, c as mc, a as yc } from "./tabs-oRdVpN8P.js";
import { b as sr, a as gl, T as bl } from "./app-utils-DQ2hixop.js";
import { E as Qi } from "./empty-indicator-C9DbE9wZ.js";
import { S as Hp, a as Vp, c as Gp, d as Kp } from "./sheet-CXHmD_eT.js";
import { a as Qp, u as Jp, L as Xp } from "./virtual-list-window-CNahQBXY.js";
import { M as vl } from "./main-layout-VqvCxOXQ.js";
import { I as eh, L as cr, P as bt } from "./list-page-D_rv4TgN.js";
function th(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Gn = "Checkbox", [rh] = Lp(Gn), [nh, xa] = rh(Gn);
function oh(e) {
  const {
    __scopeCheckbox: t,
    checked: r,
    children: n,
    defaultChecked: o,
    disabled: i,
    form: a,
    name: s,
    onCheckedChange: c,
    required: u,
    value: f = "on",
    // @ts-expect-error
    internal_do_not_use_render: d
  } = e, [p, m] = Bp({
    prop: r,
    defaultProp: o ?? !1,
    onChange: c,
    caller: Gn
  }), [g, y] = ge(null), [b, S] = ge(null), x = te(!1), P = g ? !!a || !!g.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), E = {
    checked: p,
    disabled: i,
    setChecked: m,
    control: g,
    setControl: y,
    name: s,
    form: a,
    value: f,
    hasConsumerStoppedPropagationRef: x,
    required: u,
    defaultChecked: St(o) ? !1 : o,
    isFormControl: P,
    bubbleInput: b,
    setBubbleInput: S
  };
  return /* @__PURE__ */ l.jsx(
    nh,
    {
      scope: t,
      ...E,
      children: ih(d) ? d(E) : n
    }
  );
}
var wl = "CheckboxTrigger", xl = gr(
  ({ __scopeCheckbox: e, onKeyDown: t, onClick: r, ...n }, o) => {
    const {
      control: i,
      value: a,
      disabled: s,
      checked: c,
      required: u,
      setControl: f,
      setChecked: d,
      hasConsumerStoppedPropagationRef: p,
      isFormControl: m,
      bubbleInput: g
    } = xa(wl, e), y = yl(o, f), b = te(c);
    return De(() => {
      const S = i?.form;
      if (S) {
        const x = () => d(b.current);
        return S.addEventListener("reset", x), () => S.removeEventListener("reset", x);
      }
    }, [i, d]), /* @__PURE__ */ l.jsx(
      wa.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": St(c) ? "mixed" : c,
        "aria-required": u,
        "data-state": Tl(c),
        "data-disabled": s ? "" : void 0,
        disabled: s,
        value: a,
        ...n,
        ref: y,
        onKeyDown: hc(t, (S) => {
          S.key === "Enter" && S.preventDefault();
        }),
        onClick: hc(r, (S) => {
          d((x) => St(x) ? !0 : !x), g && m && (p.current = S.isPropagationStopped(), p.current || S.stopPropagation());
        })
      }
    );
  }
);
xl.displayName = wl;
var ja = gr(
  (e, t) => {
    const {
      __scopeCheckbox: r,
      name: n,
      checked: o,
      defaultChecked: i,
      required: a,
      disabled: s,
      value: c,
      onCheckedChange: u,
      form: f,
      ...d
    } = e;
    return /* @__PURE__ */ l.jsx(
      oh,
      {
        __scopeCheckbox: r,
        checked: o,
        defaultChecked: i,
        disabled: s,
        required: a,
        onCheckedChange: u,
        name: n,
        form: f,
        value: c,
        internal_do_not_use_render: ({ isFormControl: p }) => /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(
            xl,
            {
              ...d,
              ref: t,
              __scopeCheckbox: r
            }
          ),
          p && /* @__PURE__ */ l.jsx(
            Pl,
            {
              __scopeCheckbox: r
            }
          )
        ] })
      }
    );
  }
);
ja.displayName = Gn;
var jl = "CheckboxIndicator", Sl = gr(
  (e, t) => {
    const { __scopeCheckbox: r, forceMount: n, ...o } = e, i = xa(jl, r);
    return /* @__PURE__ */ l.jsx(
      Fp,
      {
        present: n || St(i.checked) || i.checked === !0,
        children: /* @__PURE__ */ l.jsx(
          wa.span,
          {
            "data-state": Tl(i.checked),
            "data-disabled": i.disabled ? "" : void 0,
            ...o,
            ref: t,
            style: { pointerEvents: "none", ...e.style }
          }
        )
      }
    );
  }
);
Sl.displayName = jl;
var Nl = "CheckboxBubbleInput", Pl = gr(
  ({ __scopeCheckbox: e, ...t }, r) => {
    const {
      control: n,
      hasConsumerStoppedPropagationRef: o,
      checked: i,
      defaultChecked: a,
      required: s,
      disabled: c,
      name: u,
      value: f,
      form: d,
      bubbleInput: p,
      setBubbleInput: m
    } = xa(Nl, e), g = yl(r, m), y = fp(i), b = Sp(n);
    De(() => {
      const x = p;
      if (!x) return;
      const P = window.HTMLInputElement.prototype, I = Object.getOwnPropertyDescriptor(
        P,
        "checked"
      ).set, M = !o.current;
      if (y !== i && I) {
        const A = new Event("click", { bubbles: M });
        x.indeterminate = St(i), I.call(x, St(i) ? !1 : i), x.dispatchEvent(A);
      }
    }, [p, y, i, o]);
    const S = te(St(i) ? !1 : i);
    return /* @__PURE__ */ l.jsx(
      wa.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: a ?? S.current,
        required: s,
        disabled: c,
        name: u,
        value: f,
        form: d,
        ...t,
        tabIndex: -1,
        ref: g,
        style: {
          ...t.style,
          ...b,
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
Pl.displayName = Nl;
function ih(e) {
  return typeof e == "function";
}
function St(e) {
  return e === "indeterminate";
}
function Tl(e) {
  return St(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function zr(e) {
  "@babel/helpers - typeof";
  return zr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, zr(e);
}
const El = gr(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  ja,
  {
    ref: r,
    className: be(
      "grid place-content-center peer h-4 w-4 shrink-0 rounded-xs border border-primary shadow focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-focus-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ l.jsx(
      Sl,
      {
        className: be("grid place-content-center text-current"),
        children: /* @__PURE__ */ l.jsx(Up, { className: "size-4" })
      }
    )
  }
));
El.displayName = ja.displayName;
function ah({ className: e, children: t }) {
  return mt.Children.count(t) === 0 ? null : /* @__PURE__ */ l.jsx(
    eh,
    {
      align: "start",
      className: be("w-full", e),
      "data-slot": "filter-bar",
      gap: "sm",
      justify: "between",
      children: t
    }
  );
}
const sh = ["is-less", "is-or-less", "is-greater", "is-or-greater"], ch = {
  "is-less": "before",
  "is-or-less": "on or before",
  "is-greater": "after",
  "is-or-greater": "on or after"
}, uh = "is-or-less", Yr = "in-the-last", Ol = "in-the-next", lh = {
  [Yr]: "in the last",
  [Ol]: "in the next"
};
function Rl(e) {
  return e === Yr || e === Ol;
}
function fh(e) {
  return e.operators.some(Rl);
}
function dh(e) {
  return { ...e, operators: [...e.operators, Yr] };
}
function ph(e) {
  return Object.assign((r) => mt.createElement(gh, {
    ...r,
    fallbackDate: e
  }), { displayName: "RelativeDateRenderer" });
}
const hh = 7, mh = /^\d{4}-\d{2}-\d{2}$/, yh = "w-full bg-transparent outline-hidden dark:!bg-transparent", gh = ({
  field: e,
  values: t,
  onChange: r,
  operator: n,
  fallbackDate: o
}) => {
  const i = Rl(n), a = t[0], s = typeof a == "number" && Number.isSafeInteger(a) && a > 0 ? a : hh, c = typeof a == "string" && mh.test(a) ? a : o, u = te(null);
  De(() => {
    if (u.current === n)
      return;
    u.current = n;
    const p = i ? [s] : [c];
    wh(t, p) || r(p);
  }, [n, i, s, c, t, r]);
  const [f, d] = ge(() => String(s));
  if (De(() => {
    d(String(s));
  }, [s]), i) {
    const p = n === Yr ? "Since" : "Until", m = bh(o, n === Yr ? -s : s);
    return /* @__PURE__ */ l.jsx(ul, { children: /* @__PURE__ */ l.jsxs(Dn, { children: [
      /* @__PURE__ */ l.jsx(kn, { asChild: !0, children: /* @__PURE__ */ l.jsxs("div", { className: "flex w-full items-center gap-2", "data-slot": "filters-input-wrapper", children: [
        /* @__PURE__ */ l.jsx(
          "input",
          {
            "aria-label": "Relative date amount",
            className: be(yh, "min-w-[1ch] tabular-nums [field-sizing:content] [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"),
            "data-slot": "filters-input",
            min: 1,
            type: "number",
            value: f,
            onBlur: () => {
              const g = Number(f);
              (!Number.isSafeInteger(g) || g <= 0) && d(String(s));
            },
            onChange: (g) => {
              const y = g.target.value;
              d(y);
              const b = Number(y);
              Number.isSafeInteger(b) && b > 0 && r([b]);
            }
          }
        ),
        /* @__PURE__ */ l.jsx("span", { className: "shrink-0 text-muted-foreground select-none", children: s === 1 ? "day" : "days" })
      ] }) }),
      /* @__PURE__ */ l.jsxs(In, { children: [
        p,
        " ",
        m
      ] })
    ] }) });
  }
  return /* @__PURE__ */ l.jsx(
    dp,
    {
      className: e.className,
      embedded: !0,
      field: e,
      value: c,
      onChange: (p) => r([p])
    }
  );
};
function bh(e, t) {
  const [r, n, o] = e.split("-").map(Number), i = new Date(r, n - 1, o);
  return i.setDate(i.getDate() + t), new Intl.DateTimeFormat(vh(), {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(i);
}
function vh() {
  return typeof navigator > "u" ? "en-US" : navigator.language || "en-US";
}
function wh(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let r = 0; r < e.length; r += 1)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function Oe(e, t, r, n, o) {
  return ct(t, ((i, a) => {
    const s = i[a];
    if (s === void 0)
      throw new TypeError(bs(a));
    return s;
  })(e, t), r, n, o);
}
function ct(e, t, r, n, o, i) {
  const a = Wr(t, r, n);
  if (o && t !== a)
    throw new RangeError(Wf(e, t, r, n, i));
  return a;
}
function Pe(e) {
  return e !== null && /object|function/.test(typeof e);
}
function Fe(e, t = Map) {
  const r = new t();
  return (n, ...o) => {
    if (r.has(n))
      return r.get(n);
    const i = e(n, ...o);
    return r.set(n, i), i;
  };
}
function Zr(e) {
  return pr({
    name: e
  }, 1);
}
function pr(e, t) {
  return ut(((r) => ({
    value: r,
    configurable: 1,
    writable: !t
  })), e);
}
function xh(e) {
  return ut(((t) => ({
    get: t,
    configurable: 1
  })), e);
}
function Sa(e) {
  return {
    [Symbol.toStringTag]: {
      value: e,
      configurable: 1
    }
  };
}
function wr(e, t) {
  const r = {};
  let n = e.length;
  for (const o of t)
    r[e[--n]] = o;
  return r;
}
function ut(e, t, r) {
  const n = {};
  for (const o in t)
    n[o] = e(t[o], o, r);
  return n;
}
function Kn(e, t, r) {
  const n = {};
  for (let o = 0; o < t.length; o++) {
    const i = t[o];
    n[i] = e(i, o, r);
  }
  return n;
}
function Al(e, t, r) {
  const n = {};
  for (let o = 0; o < e.length; o++)
    n[t[o]] = r[e[o]];
  return n;
}
function Ze(e, t) {
  const r = /* @__PURE__ */ Object.create(null);
  for (const n of e)
    r[n] = t[n];
  return r;
}
function gc(e, t) {
  for (const r of t)
    if (r in e)
      return 1;
  return 0;
}
function Dl(e, t, r) {
  for (const n of e)
    if (t[n] !== r[n])
      return 0;
  return 1;
}
function kl(e, t, r) {
  const n = {
    ...r
  };
  for (let o = 0; o < t; o++)
    n[e[o]] = 0;
  return n;
}
function ee(e, ...t) {
  return (...r) => e(...t, ...r);
}
function jh() {
}
function bc(e) {
  return e[0].toUpperCase() + e.substring(1);
}
function Xr(e) {
  return e.slice().sort();
}
function Cn(e, t) {
  return String(t).padStart(e, "0");
}
function Nt(e, t) {
  return Math.sign(e - t);
}
function Wr(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
function it(e, t) {
  return [Math.floor(e / t), qr(e, t)];
}
function qr(e, t) {
  return (e % t + t) % t;
}
function Et(e, t) {
  return [Qn(e, t), Na(e, t)];
}
function Qn(e, t) {
  return Math.trunc(e / t) || 0;
}
function Na(e, t) {
  return e % t || 0;
}
function Sn(e) {
  return Math.abs(e % 1) === 0.5;
}
function Il(e, t, r) {
  let n = 0, o = 0;
  for (let s = 0; s <= t; s++) {
    const c = e[r[s]], u = et[s], f = ie / u, [d, p] = Et(c, f);
    n += p * u, o += d;
  }
  const [i, a] = Et(n, ie);
  return [o + i, a];
}
function Jn(e, t, r) {
  const n = {};
  for (let o = t; o >= 0; o--) {
    const i = et[o];
    n[r[o]] = Qn(e, i), e = Na(e, i);
  }
  return n;
}
function Sh(e) {
  if (e !== void 0)
    return ve(e);
}
function Nh(e) {
  if (e !== void 0)
    return ot(e);
}
function Cl(e) {
  if (e !== void 0)
    return Pa(e);
}
function ot(e) {
  return Fl(Pa(e));
}
function Pa(e) {
  return _l(mg(e));
}
function Ml(e, t) {
  if (t == null)
    throw new RangeError(bs(e));
  return t;
}
function en(e) {
  if (!Pe(e))
    throw new TypeError(Uy);
  return e;
}
function Ta(e, t, r = e) {
  if (typeof t !== e)
    throw new TypeError(Ft(r, t));
  return t;
}
function _l(e, t = "number") {
  if (!Number.isInteger(e))
    throw new RangeError(Cy(t, e));
  return e || 0;
}
function Fl(e, t = "number") {
  if (e <= 0)
    throw new RangeError(My(t, e));
  return e;
}
function Ea(e) {
  if (typeof e == "symbol")
    throw new TypeError(Ly);
  return String(e);
}
function Mn(e, t) {
  return Pe(e) ? String(e) : ve(e, t);
}
function Oa(e) {
  if (typeof e == "string")
    return BigInt(e);
  if (typeof e != "bigint")
    throw new TypeError(By(e));
  return e;
}
function Bl(e, t = "number") {
  if (typeof e == "bigint")
    throw new TypeError(Fy(t));
  if (e = Number(e), !Number.isFinite(e))
    throw new RangeError(_y(t, e));
  return e;
}
function Se(e, t) {
  return Math.trunc(Bl(e, t)) || 0;
}
function Ra(e, t) {
  return _l(Bl(e, t), t);
}
function vc(e, t) {
  return Fl(Se(e, t), t);
}
function Aa(e, t) {
  let [r, n] = Et(t, ie), o = e + r;
  const i = Math.sign(o);
  return i && i === -Math.sign(n) && (o -= i, n += i * ie), [o, n];
}
function hr(e, t, r = 1) {
  return Aa(e[0] + t[0] * r, e[1] + t[1] * r);
}
function Zt(e, t) {
  return Aa(e[0], e[1] + t);
}
function Je(e, t) {
  return hr(t, e, -1);
}
function Be(e, t) {
  return Nt(e[0], t[0]) || Nt(e[1], t[1]);
}
function Ll(e, t, r) {
  return Be(e, t) === -1 || Be(e, r) === 1;
}
function Da(e, t = 1) {
  const r = BigInt(ie / t);
  return [Number(e / r), Number(e % r) * t];
}
function _n(e, t = 1) {
  const r = ie / t, [n, o] = Et(e, r);
  return [n, o * t];
}
function Ph(e, t = 1) {
  const [r, n] = e, o = Math.floor(n / t), i = ie / t;
  return BigInt(r) * BigInt(i) + BigInt(o);
}
function Xe(e, t = 1, r) {
  const [n, o] = e, [i, a] = Et(o, t);
  return n * (ie / t) + (i + (r ? a / t : 0));
}
function Th(e) {
  return e[0] + e[1] / ie;
}
function ka(e, t, r = it) {
  const [n, o] = e, [i, a] = r(o, t);
  return [n * (ie / t) + i, a];
}
function Ia(e) {
  return Oe(e, "isoYear", Jr, Qr, 1), e.isoYear === Jr ? Oe(e, "isoMonth", 4, 12, 1) : e.isoYear === Qr && Oe(e, "isoMonth", 1, 9, 1), e;
}
function Ye(e) {
  return Ie({
    ...e,
    ...Ce,
    isoHour: 12
  }), e;
}
function Ie(e) {
  const t = Oe(e, "isoYear", Jr, Qr, 1), r = t === Jr ? 1 : t === Qr ? -1 : 0;
  return r && tt(de({
    ...e,
    isoDay: e.isoDay + r,
    isoNanosecond: e.isoNanosecond - r
  })), e;
}
function tt(e) {
  if (!e || Ll(e, jg, xg))
    throw new RangeError(Bt);
  return e;
}
function Ot(e) {
  return Il(e, 5, Ve)[1];
}
function Xn(e) {
  const [t, r] = it(e, ie);
  return [Jn(r, 5, Ve), t];
}
function Eh(e) {
  return Ul(e)[0];
}
function Ul(e) {
  return ka(e, Qe);
}
function Ne(e) {
  return xr(e.isoYear, e.isoMonth, e.isoDay, e.isoHour, e.isoMinute, e.isoSecond, e.isoMillisecond);
}
function de(e) {
  const t = Ne(e);
  if (t !== void 0) {
    const [r, n] = Et(t, ke);
    return [r, n * dt + (e.isoMicrosecond || 0) * cn + (e.isoNanosecond || 0)];
  }
}
function Ca(e, t) {
  const [r, n] = Xn(Ot(e) - t);
  return tt(de({
    ...e,
    isoDay: e.isoDay + n,
    ...r
  }));
}
function Fn(...e) {
  return xr(...e) / td;
}
function xr(...e) {
  const [t, r] = ql(...e), n = t.valueOf();
  if (!isNaN(n))
    return n - r * ke;
}
function ql(e, t = 1, r = 1, n = 0, o = 0, i = 0, a = 0) {
  const s = e === Jr ? 1 : e === Qr ? -1 : 0, c = /* @__PURE__ */ new Date();
  return c.setUTCHours(n, o, i, a), c.setUTCFullYear(e, t - 1, r + s), [c, s];
}
function jr(e, t) {
  let [r, n] = Zt(e, t);
  n < 0 && (n += ie, r -= 1);
  const [o, i] = it(n, dt), [a, s] = it(i, cn);
  return eo(r * ke + o, a, s);
}
function eo(e, t = 0, r = 0) {
  const n = Math.ceil(Math.max(0, Math.abs(e) - Ds) / ke) * Math.sign(e), o = new Date(e - n * ke);
  return wr(No, [o.getUTCFullYear(), o.getUTCMonth() + 1, o.getUTCDate() + n, o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds(), t, r]);
}
function Ma(e, t) {
  if (t < -Ds)
    throw new RangeError(Bt);
  const r = e.formatToParts(t), n = {};
  for (const o of r)
    n[o.type] = o.value;
  return n;
}
function Oh(e) {
  return e.isoDay;
}
function _a(e) {
  return [e.isoYear, e.isoMonth, e.isoDay];
}
function $l(e, t) {
  return [t, 0];
}
function Rh(e, t) {
  if (!t)
    return [st, e];
}
function Ah(e, t, r) {
  return {
    isoYear: e,
    isoMonth: t,
    isoDay: r
  };
}
function Dh() {
  return 7;
}
function zl() {
  return vt;
}
function Yl(e, t) {
  switch (t) {
    case 2:
      return Fa(e) ? 29 : 28;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
  }
  return 31;
}
function Zl(e) {
  return Fa(e) ? 366 : 365;
}
function Fa(e) {
  return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
}
function Wl(e) {
  const [t, r] = ql(e.isoYear, e.isoMonth, e.isoDay);
  return qr(t.getUTCDay() - r, 7) || 7;
}
function Hl(e) {
  return this.id === Dr ? (({ isoYear: t }) => t < 1 ? ["gregory-inverse", 1 - t] : ["gregory", t])(e) : this.id === Dt ? Pg(e) : [];
}
function kh(e) {
  const t = Ne(e);
  if (t < Ng) {
    const { isoYear: i } = e;
    return i < 1 ? ["japanese-inverse", 1 - i] : ["japanese", i];
  }
  const r = Ma(qs(Dt), t), { era: n, eraYear: o } = Cf(r, Dt);
  return [n, o];
}
function to(e) {
  return Vt(e), Sr(e, 1), e;
}
function Vt(e) {
  return Vl(e, 1), e;
}
function wc(e) {
  return Dl(Os, e, Vl(e));
}
function Vl(e, t) {
  const { isoYear: r } = e, n = Oe(e, "isoMonth", 1, zl(), t);
  return {
    isoYear: r,
    isoMonth: n,
    isoDay: Oe(e, "isoDay", 1, Yl(r, n), t)
  };
}
function Sr(e, t) {
  return wr(Ve, [Oe(e, "isoHour", 0, 23, t), Oe(e, "isoMinute", 0, 59, t), Oe(e, "isoSecond", 0, 59, t), Oe(e, "isoMillisecond", 0, 999, t), Oe(e, "isoMicrosecond", 0, 999, t), Oe(e, "isoNanosecond", 0, 999, t)]);
}
function re(e) {
  return e === void 0 ? 0 : md(en(e));
}
function ro(e, t = 0) {
  e = rt(e);
  const r = yd(e), n = _g(e, t);
  return [md(e), n, r];
}
function Nr(e, t, r, n = 9, o = 0, i = 4) {
  t = rt(t);
  let a = hd(t, n, o), s = Ua(t), c = fn(t, i);
  const u = ln(t, n, o, 1);
  return a == null ? a = Math.max(r, u) : Jl(a, u), s = qa(s, u, 1), e && (c = ((f) => f < 4 ? (f + 2) % 4 : f)(c)), [a, u, s, c];
}
function no(e, t = 6, r) {
  let n = Ua(e = oo(e, Yn));
  const o = fn(e, 7);
  let i = ln(e, t);
  return i = Ml(Yn, i), n = qa(n, i, void 0, r), [i, n, o];
}
function Ba(e) {
  return ks(rt(e));
}
function Gl(e, t) {
  return La(rt(e), t);
}
function Ih(e) {
  const t = oo(e, $o), r = kt($o, Cg, t, 0);
  if (!r)
    throw new RangeError(Ft($o, r));
  return r;
}
function La(e, t = 4) {
  const r = Ql(e);
  return [fn(e, 4), ...Kl(ln(e, t), r)];
}
function Kl(e, t) {
  return e != null ? [et[e], e < 4 ? 9 - 3 * e : -1] : [t === void 0 ? 1 : 10 ** (9 - t), t];
}
function Ua(e) {
  const t = e[$r];
  return t === void 0 ? 1 : Se(t, $r);
}
function qa(e, t, r, n) {
  const o = n ? ie : et[t + 1];
  if (o) {
    const i = et[t];
    if (o % ((e = ct($r, e, 1, o / i - (n ? 0 : 1), 1)) * i))
      throw new RangeError(Ft($r, e));
  } else
    e = ct($r, e, 1, r ? 10 ** 9 : 1, 1);
  return e;
}
function Ql(e) {
  let t = e[qo];
  if (t !== void 0) {
    if (typeof t != "number") {
      if (Ea(t) === "auto")
        return;
      throw new RangeError(Ft(qo, t));
    }
    t = ct(qo, Math.floor(t), 0, 9, 1);
  }
  return t;
}
function rt(e) {
  return e === void 0 ? {} : en(e);
}
function oo(e, t) {
  return typeof e == "string" ? {
    [t]: e
  } : en(e);
}
function io(e) {
  return {
    overflow: Eg[e]
  };
}
function $a(e, t, r = 9, n = 0, o) {
  let i = t[e];
  if (i === void 0)
    return o ? n : void 0;
  if (i = Ea(i), i === "auto")
    return o ? n : null;
  let a = ta[i];
  if (a === void 0 && (a = bg[i]), a === void 0)
    throw new RangeError(Vf(e, i, ta));
  return ct(e, a, n, r, 1, vs), a;
}
function kt(e, t, r, n = 0) {
  const o = r[e];
  if (o === void 0)
    return n;
  const i = Ea(o), a = t[i];
  if (a === void 0)
    throw new RangeError(Vf(e, i, t));
  return a;
}
function Jl(e, t) {
  if (t > e)
    throw new RangeError(sg);
}
function lt(e) {
  return {
    branding: _s,
    epochNanoseconds: e
  };
}
function We(e, t, r) {
  return {
    branding: Lt,
    calendar: r,
    timeZone: t,
    epochNanoseconds: e
  };
}
function He(e, t = e.calendar) {
  return {
    branding: kr,
    calendar: t,
    ...Ze(vg, e)
  };
}
function ft(e, t = e.calendar) {
  return {
    branding: dn,
    calendar: t,
    ...Ze(Rs, e)
  };
}
function Hr(e, t = e.calendar) {
  return {
    branding: Is,
    calendar: t,
    ...Ze(Rs, e)
  };
}
function Bn(e, t = e.calendar) {
  return {
    branding: Cs,
    calendar: t,
    ...Ze(Rs, e)
  };
}
function nt(e) {
  return {
    branding: Ms,
    ...Ze(fd, e)
  };
}
function le(e) {
  return {
    branding: Fs,
    sign: It(e),
    ...Ze(Ps, e)
  };
}
function za(e) {
  return ka(e.epochNanoseconds, dt)[0];
}
function Ch(e) {
  return Ph(e.epochNanoseconds);
}
function Xl(e) {
  return e.epochNanoseconds;
}
function Mh(e, t, r, n, o) {
  const i = Wt(n), [a, s] = ((S, x) => {
    const P = x((S = oo(S, na))[dd]);
    let E = Mg(S);
    return E = Ml(na, E), [E, P];
  })(o, e), c = Math.max(a, i);
  if (!s && Gr(c, s))
    return xc(n, a);
  if (!s)
    throw new RangeError(xo);
  if (!n.sign)
    return 0;
  const [u, f, d] = lo(t, r, s), p = Ja(d), m = fo(d), g = Xa(d), y = m(f, u, n);
  mr(s) || (Ie(u), Ie(y));
  const b = g(f, u, y, a);
  return Gr(a, s) ? xc(b, a) : _h(b, p(y), a, f, u, p, m);
}
function _h(e, t, r, n, o, i, a) {
  const s = It(e), [c, u] = Ya(n, Es(r, e), r, s, o, i, a), f = Za(t, c, u);
  return e[ne[r]] + f * s;
}
function xc(e, t) {
  return Xe(pe(e), et[t], 1);
}
function Ya(e, t, r, n, o, i, a) {
  const s = ne[r], c = {
    ...t,
    [s]: t[s] + n
  }, u = a(e, o, t), f = a(e, o, c);
  return [i(u), i(f)];
}
function Za(e, t, r) {
  const n = Xe(Je(t, r));
  if (!n)
    throw new RangeError(Rr);
  return Xe(Je(t, e)) / n;
}
function Fh(e, t) {
  const [r, n, o] = no(t, 5, 1);
  return lt(so(e.epochNanoseconds, r, n, o, 1));
}
function Bh(e, t, r) {
  let { epochNanoseconds: n, timeZone: o, calendar: i } = t;
  const [a, s, c] = no(r);
  if (a === 0 && s === 1)
    return t;
  const u = e(o);
  if (a === 6)
    n = Yh(rf, u, t, c);
  else {
    const f = u.N(n);
    n = Pr(u, ef(jr(n, f), a, s, c), f, 2, 0, 1);
  }
  return We(n, o, i);
}
function Lh(e, t) {
  return He(ef(e, ...no(t)), e.calendar);
}
function Uh(e, t) {
  const [r, n, o] = no(t, 5);
  var i;
  return nt((i = o, Wa(e, tn(r, n), i)[0]));
}
function qh(e, t) {
  const r = e(t.timeZone), n = Ue(t, r), [o, i] = rf(n), a = Xe(Je(At(r, o), At(r, i)), So, 1);
  if (a <= 0)
    throw new RangeError(Rr);
  return a;
}
function $h(e, t) {
  const { timeZone: r, calendar: n } = t;
  return We(zh(nf, e(r), t), r, n);
}
function zh(e, t, r) {
  return At(t, e(Ue(r, t)));
}
function Yh(e, t, r, n) {
  const o = Ue(r, t), [i, a] = e(o), s = r.epochNanoseconds, c = At(t, i), u = At(t, a);
  if (Ll(s, c, u))
    throw new RangeError(Rr);
  return of(Za(s, c, u), n) ? u : c;
}
function ef(e, t, r, n) {
  return tf(e, tn(t, r), n);
}
function tf(e, t, r) {
  const [n, o] = Wa(e, t, r);
  return Ie({
    ...Gt(e, o),
    ...n
  });
}
function Wa(e, t, r) {
  return Xn(Rt(Ot(e), t, r));
}
function Ln(e) {
  return Rt(e, jo, 7);
}
function tn(e, t) {
  return et[e] * t;
}
function rf(e) {
  const t = nf(e);
  return [t, Gt(t, 1)];
}
function nf(e) {
  return wg(6, e);
}
function Zh(e, t, r) {
  const n = Math.min(Wt(e), 6);
  return Tr(co(pe(e, n), t, r), n);
}
function ao(e, t, r, n, o, i, a, s, c, u) {
  if (n === 0 && o === 1)
    return e;
  const f = Gr(n, s) ? mr(s) && n < 6 && r >= 6 ? Hh : Wh : Vh;
  let [d, p, m] = f(e, t, r, n, o, i, a, s, c, u);
  return m && n !== 7 && (d = ((g, y, b, S, x, P, E, I) => {
    const M = It(g);
    for (let A = S + 1; A <= b; A++) {
      if (A === 7 && b !== 7)
        continue;
      const W = Es(A, g);
      W[ne[A]] += M;
      const L = Xe(Je(E(I(x, P, W)), y));
      if (L && Math.sign(L) !== M)
        break;
      g = W;
    }
    return g;
  })(d, p, r, Math.max(6, n), a, s, c, u)), d;
}
function so(e, t, r, n, o) {
  return t === 6 ? [Rt(Th(e), r, n), 0] : co(e, tn(t, r), n, o);
}
function co(e, t, r, n) {
  let [o, i] = e;
  n && i < 0 && (i += ie, o -= 1);
  const [a, s] = it(Rt(i, t, r), ie);
  return Aa(o + a, s);
}
function Rt(e, t, r) {
  return of(e / t, r) * t;
}
function of(e, t) {
  return Lg[t](e);
}
function Wh(e, t, r, n, o, i) {
  const a = It(e), s = pe(e), c = so(s, n, o, i), u = Je(s, c), f = Math.sign(c[0] - s[0]) === a, d = Tr(c, Math.min(r, 6));
  return [{
    ...e,
    ...d
  }, hr(t, u), f];
}
function Hh(e, t, r, n, o, i, a, s, c, u) {
  const f = It(e) || 1, d = Xe(pe(e, 5)), p = tn(n, o);
  let m = Rt(d, p, i);
  const [g, y] = Ya(a, {
    ...e,
    ...Ts
  }, 6, f, s, c, u), b = m - Xe(Je(g, y));
  let S = 0;
  b && Math.sign(b) !== f ? t = Zt(g, m) : (S += f, m = Rt(b, p, i), t = Zt(y, m));
  const x = po(m);
  return [{
    ...e,
    ...x,
    days: e.days + S
  }, t, !!S];
}
function Vh(e, t, r, n, o, i, a, s, c, u) {
  const f = It(e), d = ne[n], p = Es(n, e);
  n === 7 && (e = {
    ...e,
    weeks: e.weeks + Math.trunc(e.days / 7)
  });
  const m = Qn(e[d], o) * o;
  p[d] = m;
  const [g, y] = Ya(a, p, n, o * f, s, c, u), b = m + Za(t, g, y) * f * o, S = Rt(b, o, i), x = Math.sign(S - b) === f;
  return p[d] = S, [p, x ? y : g, x];
}
function Do(e, t, r, n) {
  const [o, i, a, s] = ((u) => {
    const f = La(u = rt(u));
    return [u.timeZone, ...f];
  })(n), c = o !== void 0;
  return ((u, f, d, p, m, g) => {
    d = co(d, m, p, 1);
    const y = f.N(d);
    return Ha(jr(d, y), g) + (u ? rn(Ln(y)) : "Z");
  })(c, t(c ? e(o) : Xt), r.epochNanoseconds, i, a, s);
}
function ko(e, t, r) {
  const [n, o, i, a, s, c] = ((u) => {
    u = rt(u);
    const f = ks(u), d = Ql(u), p = Bg(u), m = fn(u, 4), g = ln(u, 4);
    return [f, Fg(u), p, m, ...Kl(g, d)];
  })(r);
  return ((u, f, d, p, m, g, y, b, S, x) => {
    p = co(p, S, b, 1);
    const P = u(d).N(p);
    return Ha(jr(p, P), x) + rn(Ln(P), y) + ((E, I) => I !== 1 ? "[" + (I === 2 ? "!" : "") + E + "]" : "")(d, g) + Va(f, m);
  })(e, t.calendar, t.timeZone, t.epochNanoseconds, n, o, i, a, s, c);
}
function Io(e, t) {
  const [r, n, o, i] = ((u) => (u = rt(u), [ks(u), ...La(u)]))(t);
  return a = e.calendar, s = r, c = i, Ha(tf(e, o, n), c) + Va(a, s);
  var a, s, c;
}
function Co(e, t) {
  return r = e.calendar, n = e, o = Ba(t), Un(n) + Va(r, o);
  var r, n, o;
}
function Mo(e, t) {
  return af(e.calendar, sf, e, Ba(t));
}
function _o(e, t) {
  return af(e.calendar, Gh, e, Ba(t));
}
function Fo(e, t) {
  const [r, n, o] = Gl(t);
  return i = o, cf(Wa(e, n, r)[0], i);
  var i;
}
function Nn(e, t) {
  const [r, n, o] = Gl(t, 3);
  return n > 1 && Kt(e = {
    ...e,
    ...Zh(e, n, r)
  }), ((i, a) => {
    const { sign: s } = i, c = s === -1 ? Te(i) : i, { hours: u, minutes: f } = c, [d, p] = ka(pe(c, 3), Qe, Et);
    df(d);
    const m = Ga(p, a), g = a >= 0 || !s || m;
    return (s < 0 ? "-" : "") + "P" + jc({
      Y: $t(c.years),
      M: $t(c.months),
      W: $t(c.weeks),
      D: $t(c.days)
    }) + (u || f || d || g ? "T" + jc({
      H: $t(u),
      M: $t(f),
      S: $t(d, g) + m
    }) : "");
  })(e, o);
}
function af(e, t, r, n) {
  const o = n > 1 || n === 0 && e !== X;
  return n === 1 ? e === X ? t(r) : Un(r) : o ? Un(r) + uf(e, n === 2) : t(r);
}
function jc(e) {
  const t = [];
  for (const r in e) {
    const n = e[r];
    n && t.push(n, r);
  }
  return t.join("");
}
function Ha(e, t) {
  return Un(e) + "T" + cf(e, t);
}
function Un(e) {
  return sf(e) + "-" + ze(e.isoDay);
}
function sf(e) {
  const { isoYear: t } = e;
  return (t < 0 || t > 9999 ? lf(t) + Cn(6, Math.abs(t)) : Cn(4, t)) + "-" + ze(e.isoMonth);
}
function Gh(e) {
  return ze(e.isoMonth) + "-" + ze(e.isoDay);
}
function cf(e, t) {
  const r = [ze(e.isoHour), ze(e.isoMinute)];
  return t !== -1 && r.push(ze(e.isoSecond) + ((n, o, i, a) => Ga(n * dt + o * cn + i, a))(e.isoMillisecond, e.isoMicrosecond, e.isoNanosecond, t)), r.join(":");
}
function rn(e, t = 0) {
  if (t === 1)
    return "";
  const [r, n] = it(Math.abs(e), So), [o, i] = it(n, jo), [a, s] = it(i, Qe);
  return lf(e) + ze(r) + ":" + ze(o) + (a || s ? ":" + ze(a) + Ga(s) : "");
}
function Va(e, t) {
  return t !== 1 && (t > 1 || t === 0 && e !== X) ? uf(e, t === 2) : "";
}
function uf(e, t) {
  return "[" + (t ? "!" : "") + "u-ca=" + e + "]";
}
function Ga(e, t) {
  let r = Cn(9, e);
  return r = t === void 0 ? r.replace($g, "") : r.slice(0, t), r ? "." + r : "";
}
function lf(e) {
  return e < 0 ? "-" : "+";
}
function $t(e, t) {
  return e || t ? e.toLocaleString("fullwide", {
    useGrouping: 0
  }) : "";
}
function Kh(e, t) {
  const { epochNanoseconds: r } = e, n = (t.N ? t : t(e.timeZone)).N(r), o = jr(r, n);
  return {
    calendar: e.calendar,
    ...o,
    offsetNanoseconds: n
  };
}
function Pr(e, t, r, n = 0, o = 0, i, a) {
  if (r !== void 0 && n === 1 && (n === 1 || a))
    return Ca(t, r);
  const s = e.v(t);
  if (r !== void 0 && n !== 3) {
    const c = ((u, f, d, p) => {
      const m = de(f);
      p && (d = Ln(d));
      for (const g of u) {
        let y = Xe(Je(g, m));
        if (p && (y = Ln(y)), y === d)
          return g;
      }
    })(s, t, r, i);
    if (c !== void 0)
      return c;
    if (n === 0)
      throw new RangeError(tg);
  }
  return a ? de(t) : nn(e, t, o, s);
}
function nn(e, t, r = 0, n = e.v(t)) {
  if (n.length === 1)
    return n[0];
  if (r === 1)
    throw new RangeError(rg);
  if (n.length)
    return n[r === 3 ? 1 : 0];
  const o = de(t), i = ((s, c) => {
    const u = s.N(Zt(c, -ie));
    return ((f) => {
      if (f > ie)
        throw new RangeError(eg);
      return f;
    })(s.N(Zt(c, ie)) - u);
  })(e, o), a = i * (r === 2 ? -1 : 1);
  return (n = e.v(jr(o, a)))[r === 2 ? 0 : n.length - 1];
}
function At(e, t) {
  const r = e.v(t);
  if (r.length)
    return r[0];
  const n = Zt(de(t), -ie);
  return e.l(n, 1);
}
function Sc(e, t, r) {
  return lt(tt(hr(t.epochNanoseconds, ((n) => {
    if (pf(n))
      throw new RangeError(ig);
    return pe(n, 5);
  })(e ? Te(r) : r))));
}
function Nc(e, t, r, n, o, i = /* @__PURE__ */ Object.create(null)) {
  const a = t(n.timeZone), s = e(n.calendar);
  return {
    ...n,
    ...Ka(a, s, n, r ? Te(o) : o, i)
  };
}
function Pc(e, t, r, n, o = /* @__PURE__ */ Object.create(null)) {
  const { calendar: i } = r;
  return He(Qa(e(i), r, t ? Te(n) : n, o), i);
}
function Tc(e, t, r, n, o) {
  const { calendar: i } = r;
  return ft(uo(e(i), r, t ? Te(n) : n, o), i);
}
function Ec(e, t, r, n, o) {
  const i = r.calendar, a = e(i);
  let s = Ye(Vr(a, r));
  t && (n = es(n)), n.sign < 0 && (s = a.P(s, {
    ...he,
    months: 1
  }), s = Gt(s, -1));
  const c = a.P(s, n, o);
  return Hr(Vr(a, c), i);
}
function Oc(e, t, r) {
  return nt(ff(t, e ? Te(r) : r)[0]);
}
function Ka(e, t, r, n, o) {
  const i = pe(n, 5);
  let a = r.epochNanoseconds;
  if (pf(n)) {
    const s = Ue(r, e);
    a = hr(nn(e, {
      ...uo(t, s, {
        ...n,
        ...Ts
      }, o),
      ...Ze(Ve, s)
    }), i);
  } else
    a = hr(a, i), re(o);
  return {
    epochNanoseconds: tt(a)
  };
}
function Qa(e, t, r, n) {
  const [o, i] = ff(t, r);
  return Ie({
    ...uo(e, t, {
      ...r,
      ...Ts,
      days: r.days + i
    }, n),
    ...o
  });
}
function uo(e, t, r, n) {
  if (r.years || r.months || r.weeks)
    return e.P(t, r, n);
  re(n);
  const o = r.days + pe(r, 5)[0];
  return o ? Ye(Gt(t, o)) : t;
}
function Vr(e, t, r = 1) {
  return Gt(t, r - e.day(t));
}
function ff(e, t) {
  const [r, n] = pe(t, 5), [o, i] = Xn(Ot(e) + n);
  return [o, r + i];
}
function Qh(e, t, r) {
  const n = re(r);
  let o, { years: i, months: a, weeks: s, days: c } = t;
  if (c += pe(t, 5)[0], i || a)
    o = Jh(this, e, i, a, n);
  else {
    if (!s && !c)
      return e;
    o = Ne(e);
  }
  if (o === void 0)
    throw new RangeError(Bt);
  return o += (7 * s + c) * ke, Ye(eo(o));
}
function Jh(e, t, r, n, o) {
  let [i, a, s] = e.u(t);
  if (r) {
    const [c, u] = e.m(i, a);
    i += r, a = bo(c, u, e.F(i)), a = ct("month", a, 1, e.O(i), o);
  }
  return n && ([i, a] = e.p(i, a, n)), s = ct("day", s, 1, e.B(i, a), o), e.M(i, a, s);
}
function Xh(e, t, r) {
  return e += Qn(r, vt), (t += Na(r, vt)) < 1 ? (e--, t += vt) : t > vt && (e++, t -= vt), [e, t];
}
function em(e, t, r) {
  if (r) {
    if (t += r, !Number.isSafeInteger(t))
      throw new RangeError(Bt);
    if (r < 0)
      for (; t < 1; )
        t += $n.call(this, --e);
    else {
      let n;
      for (; t > (n = $n.call(this, e)); )
        t -= n, e++;
    }
  }
  return [e, t];
}
function Gt(e, t) {
  return t ? {
    ...e,
    ...eo(Ne(e) + t * ke)
  } : e;
}
function lo(e, t, r) {
  const n = e(r.calendar);
  return mr(r) ? [r, n, t(r.timeZone)] : [{
    ...r,
    ...Ce
  }, n];
}
function Ja(e) {
  return e ? Xl : de;
}
function fo(e) {
  return e ? ee(Ka, e) : Qa;
}
function Xa(e) {
  return e ? ee(Nm, e) : Pm;
}
function mr(e) {
  return e && e.epochNanoseconds;
}
function Gr(e, t) {
  return e <= 6 - (mr(t) ? 1 : 0);
}
function Rc(e, t, r, n, o, i, a) {
  const s = e(rt(a).relativeTo), c = Math.max(Wt(o), Wt(i));
  if (Gr(c, s))
    return le(Kt(((y, b, S, x) => {
      const P = hr(pe(y), pe(b), x ? -1 : 1);
      if (!Number.isFinite(P[0]))
        throw new RangeError(Bt);
      return {
        ...he,
        ...Tr(P, S)
      };
    })(o, i, c, n)));
  if (!s)
    throw new RangeError(xo);
  n && (i = Te(i));
  const [u, f, d] = lo(t, r, s), p = fo(d), m = Xa(d), g = p(f, u, o);
  return le(m(f, u, p(f, g, i), c));
}
function tm(e, t, r, n, o) {
  const i = Wt(n), [a, s, c, u, f] = ((M, A, W) => {
    M = oo(M, Yn);
    let L = hd(M);
    const K = W(M[dd]);
    let H = Ua(M);
    const V = fn(M, 7);
    let D = ln(M);
    if (L === void 0 && D === void 0)
      throw new RangeError(ag);
    if (D == null && (D = 0), L == null && (L = Math.max(D, A)), Jl(L, D), H = qa(H, D, 1), H > 1 && D > 5 && L !== D)
      throw new RangeError("For calendar units with roundingIncrement > 1, use largestUnit = smallestUnit");
    return [L, D, H, V, K];
  })(o, i, e), d = Math.max(i, a);
  if (!f && d <= 6)
    return le(Kt(((M, A, W, L, K) => {
      const H = so(pe(M), W, L, K);
      return {
        ...he,
        ...Tr(H, A)
      };
    })(n, a, s, c, u)));
  if (!mr(f) && !n.sign)
    return n;
  if (!f)
    throw new RangeError(xo);
  const [p, m, g] = lo(t, r, f), y = Ja(g), b = fo(g), S = Xa(g), x = b(m, p, n);
  mr(f) || (Ie(p), Ie(x));
  let P = S(m, p, x, a);
  const E = n.sign, I = It(P);
  if (E && I && E !== I)
    throw new RangeError(Rr);
  return P = ao(P, y(x), a, s, c, u, m, p, y, b), le(P);
}
function rm(e) {
  return e.sign === -1 ? es(e) : e;
}
function es(e) {
  return le(Te(e));
}
function Te(e) {
  const t = {};
  for (const r of ne)
    t[r] = -1 * e[r] || 0;
  return t;
}
function nm(e) {
  return !e.sign;
}
function It(e, t = ne) {
  let r = 0;
  for (const n of t) {
    const o = Math.sign(e[n]);
    if (o) {
      if (r && r !== o)
        throw new RangeError(og);
      r = o;
    }
  }
  return r;
}
function Kt(e) {
  for (const t of gg)
    ct(t, e[t], -Lc, Lc, 1);
  return df(Xe(pe(e), Qe)), e;
}
function df(e) {
  if (!Number.isSafeInteger(e))
    throw new RangeError(ng);
}
function pe(e, t = 6) {
  return Il(e, t, ne);
}
function Tr(e, t = 6) {
  const [r, n] = e, o = Jn(n, t, ne);
  if (o[ne[t]] += r * (ie / et[t]), !Number.isFinite(o[ne[t]]))
    throw new RangeError(Bt);
  return o;
}
function po(e, t = 5) {
  return Jn(e, t, ne);
}
function pf(e) {
  return !!It(e, ld);
}
function Wt(e) {
  let t = 9;
  for (; t > 0 && !e[ne[t]]; t--)
    ;
  return t;
}
function om(e, t) {
  return [e, t];
}
function Ac(e) {
  const t = Math.floor(e / Rn) * Rn;
  return [t, t + Rn];
}
function im(e) {
  const t = Ct(e = Mn(e));
  if (!t)
    throw new RangeError(Re(e));
  let r;
  if (t.C)
    r = 0;
  else {
    if (!t.offset)
      throw new RangeError(Re(e));
    r = Qt(t.offset);
  }
  return t.timeZone && is(t.timeZone, 1), lt(Ca(to(t), r));
}
function am(e) {
  const t = Ct(ve(e));
  if (!t)
    throw new RangeError(Re(e));
  if (t.timeZone)
    return hf(t, t.offset ? Qt(t.offset) : void 0);
  if (t.C)
    throw new RangeError(Re(e));
  return yf(t);
}
function sm(e, t) {
  const r = Ct(ve(e));
  if (!r || !r.timeZone)
    throw new RangeError(Re(e));
  const { offset: n } = r, o = n ? Qt(n) : void 0, [, i, a] = ro(t);
  return hf(r, o, i, a);
}
function Qt(e) {
  const t = is(e);
  if (t === void 0)
    throw new RangeError(Re(e));
  return t;
}
function cm(e) {
  const t = Ct(ve(e));
  if (!t || t.C)
    throw new RangeError(Re(e));
  return He(mf(t));
}
function ts(e, t, r) {
  let n = Ct(ve(e));
  if (!n || n.C)
    throw new RangeError(Re(e));
  return t ? n.calendar === X && (n = n.isoYear === -271821 && n.isoMonth === 4 ? {
    ...n,
    isoDay: 20,
    ...Ce
  } : {
    ...n,
    isoDay: 1,
    ...Ce
  }) : r && n.calendar === X && (n = {
    ...n,
    isoYear: st
  }), ft(n.k ? mf(n) : yf(n));
}
function um(e, t) {
  const r = ns(ve(t));
  if (r)
    return rs(r), Hr(Ia(Vt(r)));
  const n = ts(t, 1);
  return Hr(Vr(e(n.calendar), n));
}
function rs(e) {
  if (e.calendar !== X)
    throw new RangeError(at(e.calendar));
}
function lm(e, t) {
  const r = os(ve(t));
  if (r)
    return rs(r), Bn(Vt(r));
  const n = ts(t, 0, 1), { calendar: o } = n, i = e(o), [a, s, c] = i.u(n), [u, f] = i.m(a, s), [d, p] = i.R(u, f, c);
  return Bn(Ye(i.U(d, p, c)), o);
}
function fm(e) {
  let t, r = ((n) => {
    const o = Gg.exec(n);
    return o ? (ho(o[10]), vf(o)) : void 0;
  })(ve(e));
  if (!r) {
    if (r = Ct(e), !r)
      throw new RangeError(Re(e));
    if (!r.k)
      throw new RangeError(Re(e));
    if (r.C)
      throw new RangeError(at("Z"));
    rs(r);
  }
  if ((t = ns(e)) && wc(t))
    throw new RangeError(Re(e));
  if ((t = os(e)) && wc(t))
    throw new RangeError(Re(e));
  return nt(Sr(r, 1));
}
function dm(e) {
  const t = ((r) => {
    const n = Jg.exec(r);
    return n ? ((o) => {
      function i(f, d, p) {
        let m = 0, g = 0;
        if (p && ([m, c] = it(c, et[p])), f !== void 0) {
          if (s)
            throw new RangeError(at(f));
          g = ((y) => {
            const b = parseInt(y);
            if (!Number.isFinite(b))
              throw new RangeError(at(y));
            return b;
          })(f), a = 1, d && (c = as(d) * (et[p] / Qe), s = 1);
        }
        return m + g;
      }
      let a = 0, s = 0, c = 0, u = {
        ...wr(ne, [i(o[2]), i(o[3]), i(o[4]), i(o[5]), i(o[6], o[7], 5), i(o[8], o[9], 4), i(o[10], o[11], 3)]),
        ...Jn(c, 2, ne)
      };
      if (!a)
        throw new RangeError(Hf(ne));
      return ss(o[1]) < 0 && (u = Te(u)), u;
    })(n) : void 0;
  })(ve(e));
  if (!t)
    throw new RangeError(Re(e));
  return le(Kt(t));
}
function pm(e) {
  const t = Ct(e) || ns(e) || os(e);
  return t ? t.calendar : e;
}
function hm(e) {
  const t = Ct(e);
  return t && (t.timeZone || t.C && Xt || t.offset) || e;
}
function hf(e, t, r = 0, n = 0) {
  const o = cs(e.timeZone), i = Z(o);
  let a;
  return to(e), a = e.k ? Pr(i, e, t, r, n, !i.j, e.C) : At(i, e), We(a, o, wo(e.calendar));
}
function mf(e) {
  return gf(Ie(to(e)));
}
function yf(e) {
  return gf(Ye(Vt(e)));
}
function gf(e) {
  return {
    ...e,
    calendar: wo(e.calendar)
  };
}
function Ct(e) {
  const t = Vg.exec(e);
  return t ? ((r) => {
    const n = r[10], o = (n || "").toUpperCase() === "Z";
    return {
      isoYear: bf(r),
      isoMonth: parseInt(r[4]),
      isoDay: parseInt(r[5]),
      ...vf(r.slice(5)),
      ...ho(r[16]),
      k: !!r[6],
      C: o,
      offset: o ? void 0 : n
    };
  })(t) : void 0;
}
function ns(e) {
  const t = Wg.exec(e);
  return t ? ((r) => ({
    isoYear: bf(r),
    isoMonth: parseInt(r[4]),
    isoDay: 1,
    ...ho(r[5])
  }))(t) : void 0;
}
function os(e) {
  const t = Hg.exec(e);
  return t ? ((r) => ({
    isoYear: st,
    isoMonth: parseInt(r[1]),
    isoDay: parseInt(r[2]),
    ...ho(r[3])
  }))(t) : void 0;
}
function is(e, t) {
  const r = Kg.exec(e);
  return r ? ((n, o) => {
    const i = n[4] || n[5];
    if (o && i)
      throw new RangeError(at(i));
    return ((a) => {
      if (Math.abs(a) >= ie)
        throw new RangeError(Xy);
      return a;
    })((ur(n[2]) * So + ur(n[3]) * jo + ur(n[4]) * Qe + as(n[5] || "")) * ss(n[1]));
  })(r, t) : void 0;
}
function bf(e) {
  const t = ss(e[1]), r = parseInt(e[2] || e[3]);
  if (t < 0 && !r)
    throw new RangeError(at(-0));
  return t * r;
}
function vf(e) {
  const t = ur(e[3]);
  return {
    ...Xn(as(e[4] || ""))[0],
    isoHour: ur(e[1]),
    isoMinute: ur(e[2]),
    isoSecond: t === 60 ? 59 : t
  };
}
function ho(e) {
  let t, r;
  const n = [];
  if (e.replace(Qg, ((o, i, a) => {
    const s = !!i, [c, u] = a.split("=").reverse();
    if (u) {
      if (u === "u-ca")
        n.push(c), t || (t = s);
      else if (s || /[A-Z]/.test(u))
        throw new RangeError(at(o));
    } else {
      if (r)
        throw new RangeError(at(o));
      r = c;
    }
    return "";
  })), n.length > 1 && t)
    throw new RangeError(at(e));
  return {
    timeZone: r,
    calendar: n[0] || X
  };
}
function as(e) {
  return parseInt(e.padEnd(9, "0"));
}
function Er(e) {
  return new RegExp(`^${e}$`, "i");
}
function ss(e) {
  return e && e !== "+" ? -1 : 1;
}
function ur(e) {
  return e === void 0 ? 0 : parseInt(e);
}
function mm(e) {
  return cs(ve(e));
}
function cs(e) {
  const t = us(e);
  return typeof t == "number" ? rn(t) : t ? ((r) => {
    if (tb.test(r))
      throw new RangeError(Jf(r));
    if (eb.test(r))
      throw new RangeError(Jy);
    return r.toLowerCase().split("/").map(((n, o) => (n.length <= 3 || /\d/.test(n)) && !/etc|yap/.test(n) ? n.toUpperCase() : n.replace(/baja|dumont|[a-z]+/g, ((i, a) => i.length <= 2 && !o || i === "in" || i === "chat" ? i.toUpperCase() : i.length > 2 || !a ? bc(i).replace(/island|noronha|murdo|rivadavia|urville/, bc) : i)))).join("/");
  })(e) : Xt;
}
function Dc(e) {
  const t = us(e);
  return typeof t == "number" ? t : t ? t.resolvedOptions().timeZone : Xt;
}
function us(e) {
  const t = is(e = e.toUpperCase(), 1);
  return t !== void 0 ? t : e !== Xt ? Xg(e) : void 0;
}
function wf(e, t) {
  return Be(e.epochNanoseconds, t.epochNanoseconds);
}
function xf(e, t) {
  return Be(e.epochNanoseconds, t.epochNanoseconds);
}
function ym(e, t, r, n, o, i) {
  const a = e(rt(i).relativeTo), s = Math.max(Wt(n), Wt(o));
  if (Dl(ne, n, o))
    return 0;
  if (Gr(s, a))
    return Be(pe(n), pe(o));
  if (!a)
    throw new RangeError(xo);
  const [c, u, f] = lo(t, r, a), d = Ja(f), p = fo(f);
  return Be(d(p(u, c, n)), d(p(u, c, o)));
}
function jf(e, t) {
  return Or(e, t) || ls(e, t);
}
function Or(e, t) {
  return Nt(Ne(e), Ne(t));
}
function ls(e, t) {
  return Nt(Ot(e), Ot(t));
}
function gm(e, t) {
  return !wf(e, t);
}
function bm(e, t) {
  return !xf(e, t) && !!Sf(e.timeZone, t.timeZone) && e.calendar === t.calendar;
}
function vm(e, t) {
  return !jf(e, t) && e.calendar === t.calendar;
}
function wm(e, t) {
  return !Or(e, t) && e.calendar === t.calendar;
}
function xm(e, t) {
  return !Or(e, t) && e.calendar === t.calendar;
}
function jm(e, t) {
  return !Or(e, t) && e.calendar === t.calendar;
}
function Sm(e, t) {
  return !ls(e, t);
}
function Sf(e, t) {
  if (e === t)
    return 1;
  try {
    return Dc(e) === Dc(t);
  } catch {
  }
}
function kc(e, t, r, n) {
  const o = Nr(e, n, 3, 5), i = mo(t.epochNanoseconds, r.epochNanoseconds, ...o);
  return le(e ? Te(i) : i);
}
function Ic(e, t, r, n, o, i) {
  const a = go(n.calendar, o.calendar), [s, c, u, f] = Nr(r, i, 5), d = n.epochNanoseconds, p = o.epochNanoseconds, m = Be(p, d);
  let g;
  if (m)
    if (s < 6)
      g = mo(d, p, s, c, u, f);
    else {
      const y = t(Am(n.timeZone, o.timeZone)), b = e(a);
      g = Pf(b, y, n, o, m, s, i), g = ao(g, p, s, c, u, f, b, n, Xl, ee(Ka, y));
    }
  else
    g = he;
  return le(r ? Te(g) : g);
}
function Cc(e, t, r, n, o) {
  const i = go(r.calendar, n.calendar), [a, s, c, u] = Nr(t, o, 6), f = de(r), d = de(n), p = Be(d, f);
  let m;
  if (p)
    if (a <= 6)
      m = mo(f, d, a, s, c, u);
    else {
      const g = e(i);
      m = Tf(g, r, n, p, a, o), m = ao(m, d, a, s, c, u, g, r, de, Qa);
    }
  else
    m = he;
  return le(t ? Te(m) : m);
}
function Mc(e, t, r, n, o) {
  const i = go(r.calendar, n.calendar);
  return Nf(t, (() => e(i)), r, n, ...Nr(t, o, 6, 9, 6));
}
function _c(e, t, r, n, o) {
  const i = go(r.calendar, n.calendar), a = Nr(t, o, 9, 9, 8), s = e(i), c = Vr(s, r), u = Vr(s, n);
  return c.isoYear === u.isoYear && c.isoMonth === u.isoMonth && c.isoDay === u.isoDay ? le(he) : Nf(t, (() => s), Ye(c), Ye(u), ...a, 8);
}
function Nf(e, t, r, n, o, i, a, s, c = 6) {
  const u = de(r), f = de(n);
  if (u === void 0 || f === void 0)
    throw new RangeError(Bt);
  let d;
  if (Be(f, u))
    if (o === 6)
      d = mo(u, f, o, i, a, s);
    else {
      const p = t();
      d = p.h(r, n, o), i === c && a === 1 || (d = ao(d, f, o, i, a, s, p, r, de, uo));
    }
  else
    d = he;
  return le(e ? Te(d) : d);
}
function Fc(e, t, r, n) {
  const [o, i, a, s] = Nr(e, n, 5, 5), c = Rt(fs(t, r), tn(i, a), s), u = {
    ...he,
    ...po(c, o)
  };
  return le(e ? Te(u) : u);
}
function Nm(e, t, r, n, o, i) {
  const a = Be(n.epochNanoseconds, r.epochNanoseconds);
  return a ? o < 6 ? Ef(r.epochNanoseconds, n.epochNanoseconds, o) : Pf(t, e, r, n, a, o, i) : he;
}
function Pm(e, t, r, n, o) {
  const i = de(t), a = de(r), s = Be(a, i);
  return s ? n <= 6 ? Ef(i, a, n) : Tf(e, t, r, s, n, o) : he;
}
function Pf(e, t, r, n, o, i, a) {
  const [s, c, u] = Tm(t, r, n, o);
  var f, d;
  return {
    ...i === 6 ? (f = s, d = c, {
      ...he,
      days: Of(f, d)
    }) : e.h(s, c, i, a),
    ...po(u)
  };
}
function Tf(e, t, r, n, o, i) {
  const [a, s, c] = ((u, f, d) => {
    let p = f, m = fs(u, f);
    return Math.sign(m) === -d && (p = Gt(f, -d), m += ie * d), [u, p, m];
  })(t, r, n);
  return {
    ...e.h(a, s, o, i),
    ...po(c)
  };
}
function Tm(e, t, r, n) {
  function o() {
    return d = {
      ...Gt(s, u++ * -n),
      ...a
    }, p = nn(e, d), Be(c, p) === -n;
  }
  const i = Ue(t, e), a = Ze(Ve, i), s = Ue(r, e), c = r.epochNanoseconds;
  let u = 0;
  const f = fs(i, s);
  let d, p;
  if (Math.sign(f) === -n && u++, o() && (n === -1 || o()))
    throw new RangeError(Rr);
  const m = Xe(Je(p, c));
  return [i, d, m];
}
function mo(e, t, r, n, o, i) {
  return {
    ...he,
    ...Tr(so(Je(e, t), n, o, i), r)
  };
}
function Ef(e, t, r) {
  return {
    ...he,
    ...Tr(Je(e, t), r)
  };
}
function Of(e, t) {
  return yo(Ne(e), Ne(t));
}
function yo(e, t) {
  return Math.trunc((t - e) / ke);
}
function fs(e, t) {
  return Ot(t) - Ot(e);
}
function Em(e, t, r) {
  if (r <= 7) {
    let c = 0, u = Of({
      ...e,
      ...Ce
    }, {
      ...t,
      ...Ce
    });
    return r === 7 && ([c, u] = Et(u, 7)), {
      ...he,
      weeks: c,
      days: u
    };
  }
  const n = this.u(e), o = this.u(t);
  let [i, a, s] = ((c, u, f, d, p, m, g) => {
    let y = p - u, b = m - f, S = g - d;
    if (y || b) {
      const x = Math.sign(y || b);
      let P = c.B(p, m), E = 0;
      if (Math.sign(S) === -x) {
        const I = P;
        [p, m] = c.p(p, m, -x), y = p - u, b = m - f, P = c.B(p, m), E = x < 0 ? -I : P;
      }
      if (S = g - Math.min(d, P) + E, y) {
        const [I, M] = c.m(u, f), [A, W] = c.m(p, m);
        if (b = A - I || Number(W) - Number(M), Math.sign(b) === -x) {
          const L = x < 0 && -c.O(p);
          y = (p -= x) - u, b = m - bo(I, M, c.F(p)) + (L || c.O(p));
        }
      }
    }
    return [y, b, S];
  })(this, ...n, ...o);
  return r === 8 && (a += this.q(i, n[0]), i = 0), {
    ...he,
    years: i,
    months: a,
    days: s
  };
}
function Om(e) {
  return e * vt;
}
function Rm(e, t) {
  const r = t + e, n = Math.sign(e), o = n < 0 ? -1 : 0;
  let i = 0;
  for (let a = t; a !== r; a += n)
    i += $n.call(this, a + o);
  return i;
}
function go(e, t) {
  if (e !== t)
    throw new RangeError(Qf);
  return e;
}
function Am(e, t) {
  if (!Sf(e, t))
    throw new RangeError(Xf);
  return e;
}
function Rf(e) {
  return this.I(e)[0];
}
function Af(e) {
  return this.I(e)[1];
}
function Dm(e) {
  const [t] = this.u(e);
  return this.L(t);
}
function km(e) {
  const [t] = this.u(e);
  return this.O(t);
}
function Im(e) {
  const [t, r] = this.u(e);
  return this.B(t, r);
}
function Cm(e) {
  const [t] = this.u(e);
  return this.G(t);
}
function ds(e) {
  const [t] = this.u(e);
  return yo(this.M(t), Ne(e)) + 1;
}
function ps(e) {
  const t = rb.exec(e);
  if (!t)
    throw new RangeError(Ky(e));
  return [parseInt(t[1]), !!t[2]];
}
function on(e, t) {
  return "M" + ze(e) + (t ? "L" : "");
}
function bo(e, t, r) {
  return e + (t || r && e >= r ? 1 : 0);
}
function hs(e, t) {
  return e - (t && e >= t ? 1 : 0);
}
function Df(e, t) {
  return (t + e) * (Math.sign(t) || 1) || 0;
}
function ms(e) {
  return cd[If(e)];
}
function kf(e) {
  return pg[If(e)];
}
function If(e) {
  return Ht(e.id || X);
}
function Mm(e) {
  function t(o) {
    return ((i, a) => ({
      ...Cf(i, a),
      V: i.month,
      day: parseInt(i.day)
    }))(Ma(r, o), n);
  }
  const r = qs(e), n = Ht(e);
  return {
    id: e,
    _: _m(t),
    J: Fm(t)
  };
}
function _m(e) {
  return Fe(((t) => {
    const r = Ne(t);
    return e(r);
  }), WeakMap);
}
function Fm(e) {
  const t = e(0).year - Sg;
  return Fe(((r) => {
    let n, o = xr(r - t), i = 0;
    const a = [], s = [];
    do
      o += 400 * ke;
    while ((n = e(o)).year <= r);
    do
      if (o += (1 - n.day) * ke, n.year === r && (a.push(o), s.push(n.V)), o -= ke, ++i > 100 || o < -Ds)
        throw new RangeError(Rr);
    while ((n = e(o)).year >= r);
    return {
      K: a.reverse(),
      X: ed(s.reverse())
    };
  }));
}
function Cf(e, t) {
  let r, n, o = Mf(e);
  if (e.era) {
    const i = cd[t], a = ud[t] || {};
    i !== void 0 && (r = t === "islamic" ? "ah" : e.era.normalize("NFD").toLowerCase().replace(/[^a-z0-9]/g, ""), r === "bc" || r === "b" ? r = "bce" : r === "ad" || r === "a" ? r = "ce" : r === "beforeroc" && (r = "broc"), r = a[r] || r, n = o, o = Df(n, i[r] || 0));
  }
  return {
    era: r,
    eraYear: n,
    year: o
  };
}
function Mf(e) {
  return parseInt(e.relatedYear || e.year);
}
function Bm(e) {
  return this._(e).day;
}
function vo(e) {
  const { year: t, V: r, day: n } = this._(e), { X: o } = this.J(t);
  return [t, o[r] + 1, n];
}
function Lm(e, t, r) {
  return eo(Kr.call(this, e, t, r));
}
function Kr(e, t = 1, r = 1) {
  return this.J(e).K[t - 1] + (r - 1) * ke;
}
function _f(e, t) {
  const r = qn.call(this, e);
  return [hs(t, r), r === t];
}
function qn(e) {
  const t = Bc(this, e), r = Bc(this, e - 1), n = t.length;
  if (n > r.length) {
    const o = kf(this);
    if (o < 0)
      return -o;
    for (let i = 0; i < n; i++)
      if (t[i] !== r[i])
        return i + 1;
  }
}
function Um(e) {
  const t = On.call(this, e);
  return t > On.call(this, e - 1) && t > On.call(this, e + 1);
}
function On(e) {
  return yo(Kr.call(this, e), Kr.call(this, e + 1));
}
function Ff(e, t) {
  const { K: r } = this.J(e);
  let n = t + 1, o = r;
  return n > r.length && (n = 1, o = this.J(e + 1).K), yo(r[t - 1], o[n - 1]);
}
function $n(e) {
  return this.J(e).K.length;
}
function Bf(e) {
  const t = this._(e);
  return [t.era, t.eraYear];
}
function qm(e, t, r) {
  const n = this.id && Ht(this.id) === "chinese" ? ((u, f, d) => {
    if (f)
      switch (u) {
        case 1:
          return 1651;
        case 2:
          return d < 30 ? 1947 : 1765;
        case 3:
          return d < 30 ? 1966 : 1955;
        case 4:
          return d < 30 ? 1963 : 1944;
        case 5:
          return d < 30 ? 1971 : 1952;
        case 6:
          return d < 30 ? 1960 : 1941;
        case 7:
          return d < 30 ? 1968 : 1938;
        case 8:
          return d < 30 ? 1957 : 1718;
        case 9:
          return 1832;
        case 10:
          return 1870;
        case 11:
          return 1814;
        case 12:
          return 1890;
      }
    return 1972;
  })(e, t, r) : st;
  let [o, i, a] = vo.call(this, {
    isoYear: n,
    isoMonth: vt,
    isoDay: 31
  });
  const s = qn.call(this, o), c = i === s;
  (Nt(e, hs(i, s)) || Nt(Number(t), Number(c)) || Nt(r, a)) === 1 && o--;
  for (let u = 0; u < 100; u++) {
    const f = o - u, d = qn.call(this, f), p = bo(e, t, d);
    if (t === (p === d) && r <= Ff.call(this, f, p))
      return [f, p];
  }
}
function Bc(e, t) {
  return Object.keys(e.J(t).X);
}
function an(e) {
  return wo(ve(e));
}
function wo(e) {
  if ((e = e.toLowerCase()) !== X && e !== Dr) {
    const t = qs(e).resolvedOptions().calendar;
    if (Ht(e) !== Ht(t))
      throw new RangeError(Kf(e));
    return t;
  }
  return e;
}
function Ht(e) {
  return e === "islamicc" && (e = "islamic"), e.split("-")[0];
}
function Lf(e, t) {
  return (r) => r === X ? e : r === Dr || r === Dt ? Object.assign(Object.create(e), {
    id: r
  }) : Object.assign(Object.create(t), nb(r));
}
function $m(e, t, r, n) {
  const o = Mt(r, n, ht, [], od);
  if (o.timeZone !== void 0) {
    const i = r.ee(o), a = sn(o), s = e(o.timeZone);
    return {
      epochNanoseconds: Pr(t(s), {
        ...i,
        ...a
      }, o.offset !== void 0 ? Qt(o.offset) : void 0),
      timeZone: s
    };
  }
  return {
    ...r.ee(o),
    ...Ce
  };
}
function zm(e, t, r, n, o, i) {
  const a = Mt(r, o, ht, rd, od), s = e(a.timeZone), [c, u, f] = ro(i), d = r.ee(a, io(c)), p = sn(a, c);
  return We(Pr(t(s), {
    ...d,
    ...p
  }, a.offset !== void 0 ? Qt(a.offset) : void 0, u, f), s, n);
}
function Ym(e, t, r) {
  const n = Mt(e, t, ht, [], pt), o = re(r);
  return He(Ie({
    ...e.ee(n, io(o)),
    ...sn(n, o)
  }));
}
function Zm(e, t, r, n = []) {
  const o = Mt(e, t, ht, n);
  return e.ee(o, r);
}
function Wm(e, t, r, n) {
  const o = Mt(e, t, Ns, n);
  return e.ne(o, r);
}
function Hm(e, t, r, n) {
  const o = Mt(e, r, ht, un);
  return t && o.month !== void 0 && o.monthCode === void 0 && o.year === void 0 && (o.year = st), e.te(o, n);
}
function Vm(e, t) {
  return nt(sn(Le(e, ra, [], 1), re(t)));
}
function Gm(e) {
  const t = Le(e, Ps);
  return le(Kt({
    ...he,
    ...t
  }));
}
function Mt(e, t, r, n = [], o = []) {
  return Le(t, [...e.fields(r), ...o].sort(), n);
}
function Le(e, t, r, n = !r) {
  const o = {};
  let i, a = 0;
  for (const s of t) {
    if (s === i)
      throw new RangeError($y(s));
    if (s === "constructor" || s === "__proto__")
      throw new RangeError(qy(s));
    let c = e[s];
    if (c !== void 0)
      a = 1, Uc[s] && (c = Uc[s](c, s)), o[s] = c;
    else if (r) {
      if (r.includes(s))
        throw new TypeError(bs(s));
      o[s] = sd[s];
    }
    i = s;
  }
  if (n && !a)
    throw new TypeError(Hf(t));
  return o;
}
function sn(e, t) {
  return Sr($s({
    ...sd,
    ...e
  }), t);
}
function Km(e, t, r, n, o) {
  const { calendar: i, timeZone: a } = r, s = e(i), c = t(a), u = [...s.fields(ht), ...nd].sort(), f = ((S) => {
    const x = Ue(S, Z), P = rn(x.offsetNanoseconds), E = To(S.calendar), [I, M, A] = E.u(x), [W, L] = E.m(I, M), K = on(W, L);
    return {
      ...gb(x),
      year: I,
      monthCode: K,
      day: A,
      offset: P
    };
  })(r), d = Le(n, u), p = s.oe(f, d), m = {
    ...f,
    ...d
  }, [g, y, b] = ro(o, 2);
  return We(Pr(c, {
    ...s.ee(p, io(g)),
    ...Sr($s(m), g)
  }, Qt(m.offset), y, b), a, i);
}
function Qm(e, t, r, n) {
  const o = e(t.calendar), i = [...o.fields(ht), ...pt].sort(), a = {
    ...qf(s = t),
    hour: s.isoHour,
    minute: s.isoMinute,
    second: s.isoSecond,
    millisecond: s.isoMillisecond,
    microsecond: s.isoMicrosecond,
    nanosecond: s.isoNanosecond
  };
  var s;
  const c = Le(r, i), u = re(n), f = o.oe(a, c), d = {
    ...a,
    ...c
  };
  return He(Ie({
    ...o.ee(f, io(u)),
    ...Sr($s(d), u)
  }));
}
function Jm(e, t, r, n) {
  const o = e(t.calendar), i = o.fields(ht).sort(), a = qf(t), s = Le(r, i), c = o.oe(a, s);
  return o.ee(c, n);
}
function Xm(e, t, r, n) {
  const o = e(t.calendar), i = o.fields(Ns).sort(), a = ((u) => {
    const f = To(u.calendar), [d, p] = f.u(u), [m, g] = f.m(d, p);
    return {
      year: d,
      monthCode: on(m, g)
    };
  })(t), s = Le(r, i), c = o.oe(a, s);
  return o.ne(c, n);
}
function ey(e, t, r, n) {
  const o = e(t.calendar), i = o.fields(ht).sort(), a = ((u) => {
    const f = To(u.calendar), [d, p, m] = f.u(u), [g, y] = f.m(d, p);
    return {
      monthCode: on(g, y),
      day: m
    };
  })(t), s = Le(r, i), c = o.oe(a, s);
  return o.te(c, n);
}
function ty(e, t, r) {
  return nt(((n, o, i) => sn({
    ...Ze(ra, n),
    ...Le(o, ra)
  }, re(i)))(e, t, r));
}
function ry(e, t) {
  return le((r = e, n = t, Kt({
    ...r,
    ...Le(n, Ps)
  })));
  var r, n;
}
function ny(e, t) {
  const r = Mt(e, t, ad);
  return e.te(r);
}
function oy(e, t, r) {
  const n = Mt(e, t, id);
  return e.ne(n, r);
}
function Uf(e, t, r, n, o) {
  t = Ze(r = e.fields(r), t), n = Le(n, o = e.fields(o), []);
  let i = e.oe(t, n);
  return i = Le(i, [...r, ...o].sort(), []), e.ee(i);
}
function iy(e, t) {
  const r = re(t), n = ys(this, e), o = zn(this, e, n, r), i = Ji(this, e, o, n, r);
  return ft(Ye(this.U(n, o, i)), this.id || X);
}
function ay(e, t) {
  const r = re(t), n = ys(this, e), o = zn(this, e, n, r);
  return Hr(Ia(this.U(n, o, 1)), this.id || X);
}
function sy(e, t) {
  const r = re(t);
  let n, o, i, a = e.eraYear !== void 0 || e.year !== void 0 ? ys(this, e) : void 0;
  const s = !this.id;
  if (a === void 0 && s && (a = st), a !== void 0) {
    const d = zn(this, e, a, r);
    n = Ji(this, e, d, a, r);
    const p = this.F(a);
    o = hs(d, p), i = d === p;
  } else {
    if (e.monthCode === void 0)
      throw new TypeError(Gf);
    if ([o, i] = ps(e.monthCode), this.id && this.id !== Dr && this.id !== Dt)
      if (this.id && Ht(this.id) === "coptic" && r === 0) {
        const d = i || o !== 13 ? 30 : 6;
        n = e.day, n = Wr(n, 1, d);
      } else if (this.id && Ht(this.id) === "chinese" && r === 0) {
        const d = !i || o !== 1 && o !== 9 && o !== 10 && o !== 11 && o !== 12 ? 30 : 29;
        n = e.day, n = Wr(n, 1, d);
      } else
        n = e.day;
    else
      n = Ji(this, e, zn(this, e, st, r), st, r);
  }
  const c = this.R(o, i, n);
  if (!c)
    throw new RangeError("Cannot guess year");
  const [u, f] = c;
  return Bn(Ye(this.U(u, f, n)), this.id || X);
}
function cy(e) {
  return ms(this) && e.includes("year") ? [...e, ...ws] : e;
}
function uy(e, t) {
  const r = Object.assign(/* @__PURE__ */ Object.create(null), e);
  return Bo(r, t, Ss), ms(this) && (Bo(r, t, fg), this.id === Dt && Bo(r, t, dg, ws)), r;
}
function ys(e, t) {
  const r = ms(e), n = ud[e.id || ""] || {};
  let { era: o, eraYear: i, year: a } = t;
  if (o !== void 0 || i !== void 0) {
    if (o === void 0 || i === void 0)
      throw new TypeError(Wy);
    if (!r)
      throw new RangeError(Zy);
    const s = r[n[o] || o];
    if (s === void 0)
      throw new RangeError(Vy(o));
    const c = Df(i, s);
    if (a !== void 0 && a !== c)
      throw new RangeError(Hy);
    a = c;
  } else if (a === void 0)
    throw new TypeError(Gy(r));
  return a;
}
function zn(e, t, r, n) {
  let { month: o, monthCode: i } = t;
  if (i !== void 0) {
    const a = ((s, c, u, f) => {
      const d = s.F(u), [p, m] = ps(c);
      let g = bo(p, m, d);
      if (m) {
        const y = kf(s);
        if (y === void 0)
          throw new RangeError(Fr);
        if (y > 0) {
          if (g > y)
            throw new RangeError(Fr);
          if (d === void 0) {
            if (f === 1)
              throw new RangeError(Fr);
            g--;
          }
        } else {
          if (g !== -y)
            throw new RangeError(Fr);
          if (d === void 0 && f === 1)
            throw new RangeError(Fr);
        }
      }
      return g;
    })(e, i, r, n);
    if (o !== void 0 && o !== a)
      throw new RangeError(Qy);
    o = a, n = 1;
  } else if (o === void 0)
    throw new TypeError(Gf);
  return ct("month", o, 1, e.O(r), n);
}
function Ji(e, t, r, n, o) {
  return Oe(t, "day", 1, e.B(n, r), o);
}
function Bo(e, t, r, n) {
  let o = 0;
  const i = [];
  for (const a of r)
    t[a] !== void 0 ? o = 1 : i.push(a);
  if (Object.assign(e, t), o)
    for (const a of n || i)
      delete e[a];
}
function qf(e) {
  const t = To(e.calendar), [r, n, o] = t.u(e), [i, a] = t.m(r, n);
  return {
    year: r,
    monthCode: on(i, a),
    day: o
  };
}
function ly(e) {
  return lt(tt(Da(Oa(e))));
}
function fy(e, t, r, n, o = X) {
  return We(tt(Da(Oa(r))), t(n), e(o));
}
function dy(e, t, r, n, o = 0, i = 0, a = 0, s = 0, c = 0, u = 0, f = X) {
  return He(Ie(to(ut(Se, wr(No, [t, r, n, o, i, a, s, c, u])))), e(f));
}
function py(e, t, r, n, o = X) {
  return ft(Ye(Vt(ut(Se, {
    isoYear: t,
    isoMonth: r,
    isoDay: n
  }))), e(o));
}
function hy(e, t, r, n = X, o = 1) {
  const i = Se(t), a = Se(r), s = e(n);
  return Hr(Ia(Vt({
    isoYear: i,
    isoMonth: a,
    isoDay: Se(o)
  })), s);
}
function my(e, t, r, n = X, o = st) {
  const i = Se(t), a = Se(r), s = e(n);
  return Bn(Ye(Vt({
    isoYear: Se(o),
    isoMonth: i,
    isoDay: a
  })), s);
}
function yy(e = 0, t = 0, r = 0, n = 0, o = 0, i = 0) {
  return nt(Sr(ut(Se, wr(Ve, [e, t, r, n, o, i])), 1));
}
function gy(e = 0, t = 0, r = 0, n = 0, o = 0, i = 0, a = 0, s = 0, c = 0, u = 0) {
  return le(Kt(ut(Ra, wr(ne, [e, t, r, n, o, i, a, s, c, u]))));
}
function by(e, t, r = X) {
  return We(e.epochNanoseconds, t, r);
}
function vy(e) {
  return lt(e.epochNanoseconds);
}
function $f(e, t) {
  return He(Ue(t, e));
}
function zf(e, t) {
  return ft(Ue(t, e));
}
function Yf(e, t) {
  return nt(Ue(t, e));
}
function wy(e, t, r, n) {
  const o = ((i, a, s, c) => {
    const u = ((f) => yd(rt(f)))(c);
    return nn(i(a), s, u);
  })(e, r, t, n);
  return We(tt(o), r, t.calendar);
}
function xy(e, t, r, n, o) {
  const i = e(o.timeZone), a = o.plainTime, s = a !== void 0 ? t(a) : void 0, c = r(i);
  let u;
  return u = s ? nn(c, {
    ...n,
    ...s
  }) : At(c, {
    ...n,
    ...Ce
  }), We(u, i, n.calendar);
}
function jy(e, t = Ce) {
  return He(Ie({
    ...e,
    ...t
  }));
}
function Sy(e, t, r) {
  return oy(e(t.calendar), r);
}
function Ny(e, t, r) {
  return ny(e(t.calendar), r);
}
function Py(e, t, r, n) {
  return ((o, i, a) => Uf(o, i, id, en(a), un))(e(t.calendar), r, n);
}
function Ty(e, t, r, n) {
  return ((o, i, a) => Uf(o, i, ad, en(a), xs))(e(t.calendar), r, n);
}
function Ey(e) {
  return lt(tt(_n(Ra(e), dt)));
}
function Oy(e) {
  return lt(tt(Da(Oa(e))));
}
function Jt(e, t, r) {
  const n = new Set(r);
  return (o, i) => {
    const a = r && gc(o, r);
    if (!gc(o = ((s, c) => {
      const u = {};
      for (const f in c)
        s.has(f) || (u[f] = c[f]);
      return u;
    })(n, o), e)) {
      if (i && a)
        throw new TypeError("Invalid formatting options");
      o = {
        ...t,
        ...o
      };
    }
    return r && (o.timeZone = Xt, ["full", "long"].includes(o.ie) && (o.ie = "medium")), o;
  };
}
function _t(e, t = Zf, r = 0) {
  const [n, , , o] = e;
  return (i, a = _b, ...s) => {
    const c = t(o && o(...s), i, a, n, r), u = c.resolvedOptions();
    return [c, ...Ay(e, u, s)];
  };
}
function Zf(e, t, r, n, o) {
  if (r = n(r, o), e) {
    if (r.timeZone !== void 0)
      throw new TypeError(ug);
    r.timeZone = e;
  }
  return new Pt(t, r);
}
function Ry() {
  return new Pt(void 0, {
    calendar: X
  }).resolvedOptions().calendar === X;
}
function Ay(e, t, r) {
  const [, n, o] = e;
  return r.map(((i) => (i.calendar && ((a, s, c) => {
    if ((c || a !== X) && a !== s)
      throw new RangeError(Qf);
  })(i.calendar, t.calendar, o), n(i, t))));
}
function Dy(e, t, r) {
  const n = t.timeZone, o = e(n), i = {
    ...Ue(t, o),
    ...r || Ce
  };
  let a;
  return a = r ? Pr(o, i, i.offsetNanoseconds, 2) : At(o, i), We(a, n, t.calendar);
}
function ky(e, t = Ce) {
  return He(Ie({
    ...e,
    ...t
  }));
}
function gs(e, t) {
  return {
    ...e,
    calendar: t
  };
}
function Iy(e, t) {
  return {
    ...e,
    timeZone: t
  };
}
function Lo(e) {
  const t = Xi();
  return jr(t, e.N(t));
}
function Xi() {
  return _n(Date.now(), dt);
}
function _r() {
  return new Pt().resolvedOptions().timeZone;
}
const Cy = (e, t) => `Non-integer ${e}: ${t}`, My = (e, t) => `Non-positive ${e}: ${t}`, _y = (e, t) => `Non-finite ${e}: ${t}`, Fy = (e) => `Cannot convert bigint to ${e}`, By = (e) => `Invalid bigint: ${e}`, Ly = "Cannot convert Symbol to string", Uy = "Invalid object", Wf = (e, t, r, n, o) => o ? Wf(e, o[t], o[r], o[n]) : Ft(e, t) + `; must be between ${r}-${n}`, Ft = (e, t) => `Invalid ${e}: ${t}`, bs = (e) => `Missing ${e}`, qy = (e) => `Invalid field ${e}`, $y = (e) => `Duplicate field ${e}`, Hf = (e) => "No valid fields: " + e.join(), zy = "Invalid bag", Vf = (e, t, r) => Ft(e, t) + "; must be " + Object.keys(r).join(), Yy = "Cannot use valueOf", ea = "Invalid calling context", Zy = "Forbidden era/eraYear", Wy = "Mismatching era/eraYear", Hy = "Mismatching year/eraYear", Vy = (e) => `Invalid era: ${e}`, Gy = (e) => "Missing year" + (e ? "/era/eraYear" : ""), Ky = (e) => `Invalid monthCode: ${e}`, Qy = "Mismatching month/monthCode", Gf = "Missing month/monthCode", Fr = "Invalid leap month", Rr = "Invalid protocol results", Kf = (e) => Ft("Calendar", e), Qf = "Mismatching Calendars", Jf = (e) => Ft("TimeZone", e), Xf = "Mismatching TimeZones", Jy = "Forbidden ICU TimeZone", Xy = "Out-of-bounds offset", eg = "Out-of-bounds TimeZone gap", tg = "Invalid TimeZone offset", rg = "Ambiguous offset", Bt = "Out-of-bounds date", ng = "Out-of-bounds duration", og = "Cannot mix duration signs", xo = "Missing relativeTo", ig = "Cannot use large units", ag = "Required smallestUnit or largestUnit", sg = "smallestUnit > largestUnit", Re = (e) => `Cannot parse: ${e}`, at = (e) => `Invalid substring: ${e}`, cg = (e) => `Cannot format ${e}`, Uo = "Mismatching types for formatting", ug = "Cannot specify TimeZone", ed = /* @__PURE__ */ ee(Kn, ((e, t) => t)), Ar = /* @__PURE__ */ ee(Kn, ((e, t, r) => r)), ze = /* @__PURE__ */ ee(Cn, 2), ta = {
  nanosecond: 0,
  microsecond: 1,
  millisecond: 2,
  second: 3,
  minute: 4,
  hour: 5,
  day: 6,
  week: 7,
  month: 8,
  year: 9
}, vs = /* @__PURE__ */ Object.keys(ta), ke = 864e5, td = 1e3, cn = 1e3, dt = 1e6, Qe = 1e9, jo = 6e10, So = 36e11, ie = 864e11, et = [1, cn, dt, Qe, jo, So, ie], pt = /* @__PURE__ */ vs.slice(0, 6), ra = /* @__PURE__ */ Xr(pt), lg = ["offset"], rd = ["timeZone"], nd = /* @__PURE__ */ pt.concat(lg), od = /* @__PURE__ */ nd.concat(rd), ws = ["era", "eraYear"], fg = /* @__PURE__ */ ws.concat(["year"]), xs = ["year"], js = ["monthCode"], Ss = /* @__PURE__ */ ["month"].concat(js), un = ["day"], Ns = /* @__PURE__ */ Ss.concat(xs), id = /* @__PURE__ */ js.concat(xs), ht = /* @__PURE__ */ un.concat(Ns), dg = /* @__PURE__ */ un.concat(Ss), ad = /* @__PURE__ */ un.concat(js), sd = /* @__PURE__ */ Ar(pt, 0), X = "iso8601", Dr = "gregory", Dt = "japanese", cd = {
  [Dr]: {
    "gregory-inverse": -1,
    gregory: 0
  },
  [Dt]: {
    "japanese-inverse": -1,
    japanese: 0,
    meiji: 1867,
    taisho: 1911,
    showa: 1925,
    heisei: 1988,
    reiwa: 2018
  },
  ethiopic: {
    ethioaa: 0,
    ethiopic: 5500
  },
  coptic: {
    "coptic-inverse": -1,
    coptic: 0
  },
  roc: {
    "roc-inverse": -1,
    roc: 0
  },
  buddhist: {
    be: 0
  },
  islamic: {
    ah: 0
  },
  indian: {
    saka: 0
  },
  persian: {
    ap: 0
  }
}, ud = {
  [Dr]: {
    bce: "gregory-inverse",
    ce: "gregory"
  },
  [Dt]: {
    bce: "japanese-inverse",
    ce: "japanese"
  },
  ethiopic: {
    era0: "ethioaa",
    era1: "ethiopic"
  },
  coptic: {
    era0: "coptic-inverse",
    era1: "coptic"
  },
  roc: {
    broc: "roc-inverse",
    minguo: "roc"
  }
}, pg = {
  chinese: 13,
  dangi: 13,
  hebrew: -6
}, ve = /* @__PURE__ */ ee(Ta, "string"), hg = /* @__PURE__ */ ee(Ta, "boolean"), mg = /* @__PURE__ */ ee(Ta, "number"), ne = /* @__PURE__ */ vs.map(((e) => e + "s")), Ps = /* @__PURE__ */ Xr(ne), yg = /* @__PURE__ */ ne.slice(0, 6), ld = /* @__PURE__ */ ne.slice(6), gg = /* @__PURE__ */ ld.slice(1), bg = /* @__PURE__ */ ed(ne), he = /* @__PURE__ */ Ar(ne, 0), Ts = /* @__PURE__ */ Ar(yg, 0), Es = /* @__PURE__ */ ee(kl, ne), Ve = ["isoNanosecond", "isoMicrosecond", "isoMillisecond", "isoSecond", "isoMinute", "isoHour"], Os = ["isoDay", "isoMonth", "isoYear"], No = /* @__PURE__ */ Ve.concat(Os), Rs = /* @__PURE__ */ Xr(Os), fd = /* @__PURE__ */ Xr(Ve), vg = /* @__PURE__ */ Xr(No), Ce = /* @__PURE__ */ Ar(fd, 0), wg = /* @__PURE__ */ ee(kl, No), As = 1e8, Ds = As * ke, xg = [As, 0], jg = [-As, 0], Qr = 275760, Jr = -271821, Pt = Intl.DateTimeFormat, Sg = 1970, st = 1972, vt = 12, Ng = /* @__PURE__ */ xr(1868, 9, 8), Pg = /* @__PURE__ */ Fe(kh, WeakMap), Yn = "smallestUnit", na = "unit", Tg = "roundingMode", $r = "roundingIncrement", qo = "fractionalSecondDigits", dd = "relativeTo", $o = "direction", pd = {
  constrain: 0,
  reject: 1
}, Eg = /* @__PURE__ */ Object.keys(pd), Og = {
  compatible: 0,
  reject: 1,
  earlier: 2,
  later: 3
}, Rg = {
  reject: 0,
  use: 1,
  prefer: 2,
  ignore: 3
}, Ag = {
  auto: 0,
  never: 1,
  critical: 2,
  always: 3
}, Dg = {
  auto: 0,
  never: 1,
  critical: 2
}, kg = {
  auto: 0,
  never: 1
}, Ig = {
  floor: 0,
  halfFloor: 1,
  ceil: 2,
  halfCeil: 3,
  trunc: 4,
  halfTrunc: 5,
  expand: 6,
  halfExpand: 7,
  halfEven: 8
}, Cg = {
  previous: -1,
  next: 1
}, ln = /* @__PURE__ */ ee($a, Yn), hd = /* @__PURE__ */ ee($a, "largestUnit"), Mg = /* @__PURE__ */ ee($a, na), md = /* @__PURE__ */ ee(kt, "overflow", pd), yd = /* @__PURE__ */ ee(kt, "disambiguation", Og), _g = /* @__PURE__ */ ee(kt, "offset", Rg), ks = /* @__PURE__ */ ee(kt, "calendarName", Ag), Fg = /* @__PURE__ */ ee(kt, "timeZoneName", Dg), Bg = /* @__PURE__ */ ee(kt, "offset", kg), fn = /* @__PURE__ */ ee(kt, Tg, Ig), Is = "PlainYearMonth", Cs = "PlainMonthDay", dn = "PlainDate", kr = "PlainDateTime", Ms = "PlainTime", Lt = "ZonedDateTime", _s = "Instant", Fs = "Duration", Lg = [Math.floor, (e) => Sn(e) ? Math.floor(e) : Math.round(e), Math.ceil, (e) => Sn(e) ? Math.ceil(e) : Math.round(e), Math.trunc, (e) => Sn(e) ? Math.trunc(e) || 0 : Math.round(e), (e) => e < 0 ? Math.floor(e) : Math.ceil(e), (e) => Math.sign(e) * Math.round(Math.abs(e)) || 0, (e) => Sn(e) ? (e = Math.trunc(e) || 0) + e % 2 : Math.round(e)], Xt = "UTC", Rn = 5184e3, Ug = /* @__PURE__ */ Fn(1847), qg = /* @__PURE__ */ Fn((() => {
  const e = /* @__PURE__ */ new Date();
  return (e.getTime() === 0 ? 2040 : e.getUTCFullYear()) + 10;
})()), $g = /0+$/, Ue = /* @__PURE__ */ Fe(Kh, WeakMap), Lc = 2 ** 32 - 1, Z = /* @__PURE__ */ Fe(((e) => {
  const t = us(e);
  return typeof t == "object" ? new Yg(t) : new zg(t || 0);
}));
class zg {
  constructor(t) {
    this.j = t;
  }
  N() {
    return this.j;
  }
  v(t) {
    return ((r) => {
      const n = de({
        ...r,
        ...Ce
      });
      if (!n || Math.abs(n[0]) > 1e8)
        throw new RangeError(Bt);
    })(t), [Ca(t, this.j)];
  }
  l() {
  }
}
class Yg {
  constructor(t) {
    this.ae = ((r) => {
      function n(u) {
        const f = Wr(u, s, c), [d, p] = Ac(f), m = i(d), g = i(p);
        return m === g ? m : o(a(d, p), m, g, u);
      }
      function o(u, f, d, p) {
        let m, g;
        for (; (p === void 0 || (m = p < u[0] ? f : p >= u[1] ? d : void 0) === void 0) && (g = u[1] - u[0]); ) {
          const y = u[0] + Math.floor(g / 2);
          r(y) === d ? u[1] = y : u[0] = y + 1;
        }
        return m;
      }
      const i = Fe(r), a = Fe(om);
      let s = Ug, c = qg;
      return {
        se(u) {
          const f = n(u - 86400), d = n(u + 86400), p = u - f, m = u - d;
          if (f === d)
            return [p];
          const g = n(p);
          return g === n(m) ? [u - g] : f > d ? [p, m] : [];
        },
        ue: n,
        l(u, f) {
          const d = Wr(u, s, c);
          let [p, m] = Ac(d);
          const g = Rn * f, y = f < 0 ? () => m > s || (s = d, 0) : () => p < c || (c = d, 0);
          for (; y(); ) {
            const b = i(p), S = i(m);
            if (b !== S) {
              const x = a(p, m);
              o(x, b, S);
              const P = x[0];
              if ((Nt(P, u) || 1) === f)
                return P;
            }
            p += g, m += g;
          }
        }
      };
    })(/* @__PURE__ */ ((r) => (n) => {
      const o = Ma(r, n * td);
      return Fn(Mf(o), parseInt(o.month), parseInt(o.day), parseInt(o.hour), parseInt(o.minute), parseInt(o.second)) - n;
    })(t));
  }
  N(t) {
    return this.ae.ue(Eh(t)) * Qe;
  }
  v(t) {
    const [r, n] = [Fn((o = t).isoYear, o.isoMonth, o.isoDay, o.isoHour, o.isoMinute, o.isoSecond), o.isoMillisecond * dt + o.isoMicrosecond * cn + o.isoNanosecond];
    var o;
    return this.ae.se(r).map(((i) => tt(Zt(_n(i, Qe), n))));
  }
  l(t, r) {
    const [n, o] = Ul(t), i = this.ae.l(n + (r > 0 || o ? 1 : 0), r);
    if (i !== void 0)
      return _n(i, Qe);
  }
}
const Bs = "([+-])", An = "(?:[.,](\\d{1,9}))?", gd = `(?:(?:${Bs}(\\d{6}))|(\\d{4}))-?(\\d{2})`, Ls = "(\\d{2})(?::?(\\d{2})(?::?(\\d{2})" + An + ")?)?", Us = Bs + Ls, Zg = gd + "-?(\\d{2})(?:[T ]" + Ls + "(Z|" + Us + ")?)?", bd = "\\[(!?)([^\\]]*)\\]", Po = `((?:${bd}){0,9})`, Wg = /* @__PURE__ */ Er(gd + Po), Hg = /* @__PURE__ */ Er("(?:--)?(\\d{2})-?(\\d{2})" + Po), Vg = /* @__PURE__ */ Er(Zg + Po), Gg = /* @__PURE__ */ Er("T?" + Ls + "(?:" + Us + ")?" + Po), Kg = /* @__PURE__ */ Er(Us), Qg = /* @__PURE__ */ new RegExp(bd, "g"), Jg = /* @__PURE__ */ Er(`${Bs}?P(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(?:T(?:(\\d+)${An}H)?(?:(\\d+)${An}M)?(?:(\\d+)${An}S)?)?`), Xg = /* @__PURE__ */ Fe(((e) => new Pt("en", {
  calendar: X,
  timeZone: e,
  era: "short",
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: 0
}))), eb = /^(AC|AE|AG|AR|AS|BE|BS|CA|CN|CS|CT|EA|EC|IE|IS|JS|MI|NE|NS|PL|PN|PR|PS|SS|VS)T$/, tb = /[^\w\/:+-]+/, rb = /^M(\d{2})(L?)$/, nb = /* @__PURE__ */ Fe(Mm), qs = /* @__PURE__ */ Fe(((e) => new Pt("en", {
  calendar: e,
  timeZone: Xt,
  era: "short",
  year: "numeric",
  month: "short",
  day: "numeric",
  hour12: 0
}))), vd = {
  P: Qh,
  h: Em,
  ee: iy,
  ne: ay,
  te: sy,
  fields: cy,
  oe: uy,
  inLeapYear: Dm,
  monthsInYear: km,
  daysInMonth: Im,
  daysInYear: Cm,
  dayOfYear: ds,
  era(e) {
    return this.$(e)[0];
  },
  eraYear(e) {
    return this.$(e)[1];
  },
  monthCode(e) {
    const [t, r] = this.u(e), [n, o] = this.m(t, r);
    return on(n, o);
  },
  dayOfWeek: Wl,
  daysInWeek: Dh
}, ob = {
  u: _a,
  $: Hl,
  m: $l
}, ib = {
  dayOfYear: ds,
  u: _a,
  M: xr
}, ab = /* @__PURE__ */ Object.assign({}, ib, {
  weekOfYear: Rf,
  yearOfWeek: Af,
  I(e) {
    function t(m) {
      return (7 - m < n ? 7 : 0) - m;
    }
    function r(m) {
      const g = Zl(p + m), y = m || 1, b = t(qr(c + g * y, 7));
      return f = (g + (b - u) * y) / 7;
    }
    const n = this.id ? 1 : 4, o = Wl(e), i = this.dayOfYear(e), a = qr(o - 1, 7), s = i - 1, c = qr(a - s, 7), u = t(c);
    let f, d = Math.floor((s - u) / 7) + 1, p = e.isoYear;
    return d ? d > r(0) && (d = 1, p++) : (d = r(-1), p--), [d, p, f];
  }
}), sb = /* @__PURE__ */ Object.assign({}, vd, ab, {
  u: _a,
  $: Hl,
  m: $l,
  R: Rh,
  L: Fa,
  F: jh,
  O: zl,
  q: Om,
  B: Yl,
  G: Zl,
  U: Ah,
  M: xr,
  p: Xh,
  year(e) {
    return e.isoYear;
  },
  month(e) {
    return e.isoMonth;
  },
  day: Oh
}), cb = {
  u: vo,
  $: Bf,
  m: _f
}, ub = {
  dayOfYear: ds,
  u: vo,
  M: Kr
}, lb = {
  I() {
    return [];
  }
}, fb = /* @__PURE__ */ Object.assign({}, ub, lb, {
  weekOfYear: Rf,
  yearOfWeek: Af
}), db = /* @__PURE__ */ Object.assign({}, vd, fb, {
  u: vo,
  $: Bf,
  m: _f,
  R: qm,
  L: Um,
  F: qn,
  O: $n,
  q: Rm,
  B: Ff,
  G: On,
  U: Lm,
  M: Kr,
  p: em,
  year(e) {
    return this._(e).year;
  },
  month(e) {
    const { year: t, V: r } = this._(e), { X: n } = this.J(t);
    return n[r] + 1;
  },
  day: Bm
}), To = /* @__PURE__ */ Lf(ob, cb), Y = /* @__PURE__ */ Lf(sb, db), pb = {
  era: Mn,
  eraYear: Se,
  year: Se,
  month: vc,
  monthCode(e) {
    const t = Mn(e);
    return ps(t), t;
  },
  day: vc
}, hb = /* @__PURE__ */ Ar(pt, Se), mb = /* @__PURE__ */ Ar(ne, Ra), yb = {
  offset(e) {
    const t = Mn(e);
    return Qt(t), t;
  }
}, Uc = /* @__PURE__ */ Object.assign({}, pb, hb, mb, yb), $s = /* @__PURE__ */ ee(Al, pt, Ve), gb = /* @__PURE__ */ ee(Al, Ve, pt), Tt = "numeric", pn = ["timeZoneName"], wd = {
  month: Tt,
  day: Tt
}, zs = {
  year: Tt,
  month: Tt
}, Ys = /* @__PURE__ */ Object.assign({}, zs, {
  day: Tt
}), Zs = {
  hour: Tt,
  minute: Tt,
  second: Tt
}, Ws = /* @__PURE__ */ Object.assign({}, Ys, Zs), bb = /* @__PURE__ */ Object.assign({}, Ws, {
  timeZoneName: "short"
}), vb = /* @__PURE__ */ Object.keys(zs), wb = /* @__PURE__ */ Object.keys(wd), xb = /* @__PURE__ */ Object.keys(Ys), jb = /* @__PURE__ */ Object.keys(Zs), Hs = ["dateStyle"], Sb = /* @__PURE__ */ vb.concat(Hs), Nb = /* @__PURE__ */ wb.concat(Hs), Vs = /* @__PURE__ */ xb.concat(Hs, ["weekday"]), hn = /* @__PURE__ */ jb.concat(["dayPeriod", "timeStyle", "fractionalSecondDigits"]), Gs = /* @__PURE__ */ Vs.concat(hn), Pb = /* @__PURE__ */ pn.concat(hn), Tb = /* @__PURE__ */ pn.concat(Vs), Eb = /* @__PURE__ */ pn.concat(["day", "weekday"], hn), Ob = /* @__PURE__ */ pn.concat(["year", "weekday"], hn), Rb = /* @__PURE__ */ Jt(Gs, Ws), Ab = /* @__PURE__ */ Jt(Gs, bb), Db = /* @__PURE__ */ Jt(Gs, Ws, pn), kb = /* @__PURE__ */ Jt(Vs, Ys, Pb), Ib = /* @__PURE__ */ Jt(hn, Zs, Tb), Cb = /* @__PURE__ */ Jt(Sb, zs, Eb), Mb = /* @__PURE__ */ Jt(Nb, wd, Ob), _b = {}, xd = /* @__PURE__ */ Ry(), jd = [Rb, za], Fb = [Ab, za, 0, (e, t) => {
  const r = e.timeZone;
  if (t && t.timeZone !== r)
    throw new RangeError(Xf);
  return r;
}], Sd = [Db, Ne], Nd = [kb, Ne], Pd = [Ib, (e) => Ot(e) / dt], Td = [Cb, Ne, xd], Ed = [Mb, Ne, xd];
function Ut(e, t, r, n, o, i) {
  function a(...u) {
    if (!(this instanceof a))
      throw new TypeError(ea);
    {
      const f = t(...u);
      zc(this, f), oa(this, f, i);
    }
  }
  function s(u, f) {
    return Object.defineProperties((function(...d) {
      return u.call(this, c(this), ...d);
    }), Zr(f));
  }
  function c(u) {
    const f = Ee(u);
    if (!f || f.branding !== e)
      throw new TypeError(ea);
    return f;
  }
  return Object.defineProperties(a.prototype, {
    ...xh(ut(s, r)),
    ...pr(ut(s, n)),
    ...Sa("Temporal." + e)
  }), Object.defineProperties(a, {
    ...pr(o),
    ...Zr(e)
  }), [a, (u) => {
    const f = Object.create(a.prototype);
    return zc(f, u), oa(f, u, i), f;
  }, c];
}
function Ir(e) {
  if (Ee(e) || e.calendar !== void 0 || e.timeZone !== void 0)
    throw new TypeError(zy);
  return e;
}
function oa(e, t, r) {
  oa.name === "dbg" && Object.defineProperty(e, "o", {
    value: r(t),
    writable: 0,
    enumerable: 0,
    configurable: 0
  });
}
function mn(e) {
  return Od(e) || X;
}
function Od(e) {
  const { calendar: t } = e;
  if (t !== void 0)
    return Eo(t);
}
function Eo(e) {
  if (Pe(e)) {
    const { calendar: t } = Ee(e) || {};
    if (!t)
      throw new TypeError(Kf(e));
    return t;
  }
  return ((t) => wo(pm(ve(t))))(e);
}
function Ks(e) {
  const t = {};
  for (const r in e)
    t[r] = (n) => {
      const { calendar: o } = n;
      return Y(o)[r](n);
    };
  return t;
}
function qt() {
  throw new TypeError(Yy);
}
function Ae(e) {
  if (Pe(e)) {
    const { timeZone: t } = Ee(e) || {};
    if (!t)
      throw new TypeError(Jf(e));
    return t;
  }
  return ((t) => cs(hm(ve(t))))(e);
}
function ce(e) {
  if (Pe(e)) {
    const t = Ee(e);
    return t && t.branding === Fs ? t : Gm(e);
  }
  return dm(e);
}
function Br(e) {
  if (e !== void 0) {
    if (Pe(e)) {
      const t = Ee(e) || {};
      switch (t.branding) {
        case Lt:
        case dn:
          return t;
        case kr:
          return ft(t);
      }
      const r = mn(e);
      return {
        ...$m(Ae, Z, Y(r), e),
        calendar: r
      };
    }
    return am(e);
  }
}
function yt(e, t) {
  if (Pe(e)) {
    const n = Ee(e) || {};
    switch (n.branding) {
      case Ms:
        return re(t), n;
      case kr:
        return re(t), nt(n);
      case Lt:
        return re(t), Yf(Z, n);
    }
    return Vm(e, t);
  }
  const r = fm(e);
  return re(t), r;
}
function Qs(e) {
  return e === void 0 ? void 0 : yt(e);
}
function rr(e, t) {
  if (Pe(e)) {
    const n = Ee(e) || {};
    switch (n.branding) {
      case kr:
        return re(t), n;
      case dn:
        return re(t), He({
          ...n,
          ...Ce
        });
      case Lt:
        return re(t), $f(Z, n);
    }
    return Ym(Y(mn(e)), e, t);
  }
  const r = cm(e);
  return re(t), r;
}
function qc(e, t) {
  if (Pe(e)) {
    const n = Ee(e);
    if (n && n.branding === Cs)
      return re(t), n;
    const o = Od(e);
    return Hm(Y(o || X), !o, e, t);
  }
  const r = lm(Y, e);
  return re(t), r;
}
function nr(e, t) {
  if (Pe(e)) {
    const n = Ee(e);
    return n && n.branding === Is ? (re(t), n) : Wm(Y(mn(e)), e, t);
  }
  const r = um(Y, e);
  return re(t), r;
}
function or(e, t) {
  if (Pe(e)) {
    const n = Ee(e) || {};
    switch (n.branding) {
      case dn:
        return re(t), n;
      case kr:
        return re(t), ft(n);
      case Lt:
        return re(t), zf(Z, n);
    }
    return Zm(Y(mn(e)), e, t);
  }
  const r = ts(e);
  return re(t), r;
}
function ir(e, t) {
  if (Pe(e)) {
    const r = Ee(e);
    if (r && r.branding === Lt)
      return ro(t), r;
    const n = mn(e);
    return zm(Ae, Z, Y(n), n, e, t);
  }
  return sm(e, t);
}
function $c(e) {
  return ut(((t) => (r) => t(ia(r))), e);
}
function ia(e) {
  return Ue(e, Z);
}
function ar(e) {
  if (Pe(e)) {
    const t = Ee(e);
    if (t)
      switch (t.branding) {
        case _s:
          return t;
        case Lt:
          return lt(t.epochNanoseconds);
      }
  }
  return im(e);
}
function Bb() {
  function e(i, a) {
    return new t(i, a);
  }
  function t(i, a = /* @__PURE__ */ Object.create(null)) {
    Wn.set(this, ((s, c) => {
      const u = new Pt(s, c), f = u.resolvedOptions(), d = f.locale, p = Ze(Object.keys(c), f), m = Fe(qb), g = (y, ...b) => {
        if (y) {
          if (b.length !== 2)
            throw new TypeError(Uo);
          for (const E of b)
            if (E === void 0)
              throw new TypeError(Uo);
        }
        y || b[0] !== void 0 || (b = []);
        const S = b.map(((E) => Ee(E) || Number(E)));
        let x, P = 0;
        for (const E of S) {
          const I = typeof E == "object" ? E.branding : void 0;
          if (P++ && I !== x)
            throw new TypeError(Uo);
          x = I;
        }
        return x ? m(x)(d, p, ...S) : [u, ...S];
      };
      return g.i = u, g;
    })(i, a));
  }
  const r = Pt.prototype, n = Object.getOwnPropertyDescriptors(r), o = Object.getOwnPropertyDescriptors(Pt);
  for (const i in n) {
    const a = n[i], s = i.startsWith("format") && Lb(i);
    typeof a.value == "function" ? a.value = i === "constructor" ? e : s || Ub(i) : s && (a.get = function() {
      if (!Wn.has(this))
        throw new TypeError(ea);
      return (...c) => s.apply(this, c);
    }, Object.defineProperties(a.get, Zr(`get ${i}`)));
  }
  return o.prototype.value = t.prototype = Object.create({}, n), Object.defineProperties(e, o), e;
}
function Lb(e) {
  return Object.defineProperties((function(...t) {
    const r = Wn.get(this), [n, ...o] = r(e.includes("Range"), ...t);
    return n[e](...o);
  }), Zr(e));
}
function Ub(e) {
  return Object.defineProperties((function(...t) {
    return Wn.get(this).i[e](...t);
  }), Zr(e));
}
function qb(e) {
  const t = Hb[e];
  if (!t)
    throw new TypeError(cg(e));
  return _t(t, Fe(Zf), 1);
}
const Zn = /* @__PURE__ */ new WeakMap(), Ee = /* @__PURE__ */ Zn.get.bind(Zn), zc = /* @__PURE__ */ Zn.set.bind(Zn), Rd = {
  era: Sh,
  eraYear: Cl,
  year: Pa,
  month: ot,
  daysInMonth: ot,
  daysInYear: ot,
  inLeapYear: hg,
  monthsInYear: ot
}, Js = {
  monthCode: ve
}, Ad = {
  day: ot
}, $b = {
  dayOfWeek: ot,
  dayOfYear: ot,
  weekOfYear: Nh,
  yearOfWeek: Cl,
  daysInWeek: ot
}, Xs = /* @__PURE__ */ Ks(/* @__PURE__ */ Object.assign({}, Rd, Js, Ad, $b)), zb = /* @__PURE__ */ Ks({
  ...Rd,
  ...Js
}), Yb = /* @__PURE__ */ Ks({
  ...Js,
  ...Ad
}), yn = {
  calendarId: (e) => e.calendar
}, Zb = /* @__PURE__ */ Kn(((e) => (t) => t[e]), ne.concat("sign")), ec = /* @__PURE__ */ Kn(((e, t) => (r) => r[Ve[t]]), pt), Dd = {
  epochMilliseconds: za,
  epochNanoseconds: Ch
}, [Wb, ae] = Ut(Fs, gy, {
  ...Zb,
  blank: nm
}, {
  with: (e, t) => ae(ry(e, t)),
  negated: (e) => ae(es(e)),
  abs: (e) => ae(rm(e)),
  add: (e, t, r) => ae(Rc(Br, Y, Z, 0, e, ce(t), r)),
  subtract: (e, t, r) => ae(Rc(Br, Y, Z, 1, e, ce(t), r)),
  round: (e, t) => ae(tm(Br, Y, Z, e, t)),
  total: (e, t) => Mh(Br, Y, Z, e, t),
  toLocaleString(e, t, r) {
    return Intl.DurationFormat ? new Intl.DurationFormat(t, r).format(this) : Nn(e);
  },
  toString: Nn,
  toJSON: (e) => Nn(e),
  valueOf: qt
}, {
  from: (e) => ae(ce(e)),
  compare: (e, t, r) => ym(Br, Y, Z, ce(e), ce(t), r)
}, Nn), Hb = {
  Instant: jd,
  PlainDateTime: Sd,
  PlainDate: Nd,
  PlainTime: Pd,
  PlainYearMonth: Td,
  PlainMonthDay: Ed
}, Vb = /* @__PURE__ */ _t(jd), Gb = /* @__PURE__ */ _t(Fb), Kb = /* @__PURE__ */ _t(Sd), Qb = /* @__PURE__ */ _t(Nd), Jb = /* @__PURE__ */ _t(Pd), Xb = /* @__PURE__ */ _t(Td), ev = /* @__PURE__ */ _t(Ed), [tv, wt] = Ut(Ms, yy, ec, {
  with(e, t, r) {
    return wt(ty(this, Ir(t), r));
  },
  add: (e, t) => wt(Oc(0, e, ce(t))),
  subtract: (e, t) => wt(Oc(1, e, ce(t))),
  until: (e, t, r) => ae(Fc(0, e, yt(t), r)),
  since: (e, t, r) => ae(Fc(1, e, yt(t), r)),
  round: (e, t) => wt(Uh(e, t)),
  equals: (e, t) => Sm(e, yt(t)),
  toLocaleString(e, t, r) {
    const [n, o] = Jb(t, r, e);
    return n.format(o);
  },
  toString: Fo,
  toJSON: (e) => Fo(e),
  valueOf: qt
}, {
  from: (e, t) => wt(yt(e, t)),
  compare: (e, t) => ls(yt(e), yt(t))
}, Fo), [rv, Ge] = Ut(kr, ee(dy, an), {
  ...yn,
  ...Xs,
  ...ec
}, {
  with: (e, t, r) => Ge(Qm(Y, e, Ir(t), r)),
  withCalendar: (e, t) => Ge(gs(e, Eo(t))),
  withPlainTime: (e, t) => Ge(ky(e, Qs(t))),
  add: (e, t, r) => Ge(Pc(Y, 0, e, ce(t), r)),
  subtract: (e, t, r) => Ge(Pc(Y, 1, e, ce(t), r)),
  until: (e, t, r) => ae(Cc(Y, 0, e, rr(t), r)),
  since: (e, t, r) => ae(Cc(Y, 1, e, rr(t), r)),
  round: (e, t) => Ge(Lh(e, t)),
  equals: (e, t) => vm(e, rr(t)),
  toZonedDateTime: (e, t, r) => xe(wy(Z, e, Ae(t), r)),
  toPlainDate: (e) => Ke(ft(e)),
  toPlainTime: (e) => wt(nt(e)),
  toLocaleString(e, t, r) {
    const [n, o] = Kb(t, r, e);
    return n.format(o);
  },
  toString: Io,
  toJSON: (e) => Io(e),
  valueOf: qt
}, {
  from: (e, t) => Ge(rr(e, t)),
  compare: (e, t) => jf(rr(e), rr(t))
}, Io), [nv, aa] = Ut(Cs, ee(my, an), {
  ...yn,
  ...Yb
}, {
  with: (e, t, r) => aa(ey(Y, e, Ir(t), r)),
  equals: (e, t) => jm(e, qc(t)),
  toPlainDate(e, t) {
    return Ke(Ty(Y, e, this, t));
  },
  toLocaleString(e, t, r) {
    const [n, o] = ev(t, r, e);
    return n.format(o);
  },
  toString: _o,
  toJSON: (e) => _o(e),
  valueOf: qt
}, {
  from: (e, t) => aa(qc(e, t))
}, _o), [ov, Ur] = Ut(Is, ee(hy, an), {
  ...yn,
  ...zb
}, {
  with: (e, t, r) => Ur(Xm(Y, e, Ir(t), r)),
  add: (e, t, r) => Ur(Ec(Y, 0, e, ce(t), r)),
  subtract: (e, t, r) => Ur(Ec(Y, 1, e, ce(t), r)),
  until: (e, t, r) => ae(_c(Y, 0, e, nr(t), r)),
  since: (e, t, r) => ae(_c(Y, 1, e, nr(t), r)),
  equals: (e, t) => xm(e, nr(t)),
  toPlainDate(e, t) {
    return Ke(Py(Y, e, this, t));
  },
  toLocaleString(e, t, r) {
    const [n, o] = Xb(t, r, e);
    return n.format(o);
  },
  toString: Mo,
  toJSON: (e) => Mo(e),
  valueOf: qt
}, {
  from: (e, t) => Ur(nr(e, t)),
  compare: (e, t) => Or(nr(e), nr(t))
}, Mo), [iv, Ke] = Ut(dn, ee(py, an), {
  ...yn,
  ...Xs
}, {
  with: (e, t, r) => Ke(Jm(Y, e, Ir(t), r)),
  withCalendar: (e, t) => Ke(gs(e, Eo(t))),
  add: (e, t, r) => Ke(Tc(Y, 0, e, ce(t), r)),
  subtract: (e, t, r) => Ke(Tc(Y, 1, e, ce(t), r)),
  until: (e, t, r) => ae(Mc(Y, 0, e, or(t), r)),
  since: (e, t, r) => ae(Mc(Y, 1, e, or(t), r)),
  equals: (e, t) => wm(e, or(t)),
  toZonedDateTime(e, t) {
    const r = Pe(t) ? t : {
      timeZone: t
    };
    return xe(xy(Ae, yt, Z, e, r));
  },
  toPlainDateTime: (e, t) => Ge(jy(e, Qs(t))),
  toPlainYearMonth(e) {
    return Ur(Sy(Y, e, this));
  },
  toPlainMonthDay(e) {
    return aa(Ny(Y, e, this));
  },
  toLocaleString(e, t, r) {
    const [n, o] = Qb(t, r, e);
    return n.format(o);
  },
  toString: Co,
  toJSON: (e) => Co(e),
  valueOf: qt
}, {
  from: (e, t) => Ke(or(e, t)),
  compare: (e, t) => Or(or(e), or(t))
}, Co), [av, xe] = Ut(Lt, ee(fy, an, mm), {
  ...Dd,
  ...yn,
  ...$c(Xs),
  ...$c(ec),
  offset: (e) => rn(ia(e).offsetNanoseconds),
  offsetNanoseconds: (e) => ia(e).offsetNanoseconds,
  timeZoneId: (e) => e.timeZone,
  hoursInDay: (e) => qh(Z, e)
}, {
  with: (e, t, r) => xe(Km(Y, Z, e, Ir(t), r)),
  withCalendar: (e, t) => xe(gs(e, Eo(t))),
  withTimeZone: (e, t) => xe(Iy(e, Ae(t))),
  withPlainTime: (e, t) => xe(Dy(Z, e, Qs(t))),
  add: (e, t, r) => xe(Nc(Y, Z, 0, e, ce(t), r)),
  subtract: (e, t, r) => xe(Nc(Y, Z, 1, e, ce(t), r)),
  until: (e, t, r) => ae(le(Ic(Y, Z, 0, e, ir(t), r))),
  since: (e, t, r) => ae(le(Ic(Y, Z, 1, e, ir(t), r))),
  round: (e, t) => xe(Bh(Z, e, t)),
  startOfDay: (e) => xe($h(Z, e)),
  equals: (e, t) => bm(e, ir(t)),
  toInstant: (e) => gt(vy(e)),
  toPlainDateTime: (e) => Ge($f(Z, e)),
  toPlainDate: (e) => Ke(zf(Z, e)),
  toPlainTime: (e) => wt(Yf(Z, e)),
  toLocaleString(e, t, r = {}) {
    const [n, o] = Gb(t, r, e);
    return n.format(o);
  },
  toString: (e, t) => ko(Z, e, t),
  toJSON: (e) => ko(Z, e),
  valueOf: qt,
  getTimeZoneTransition(e, t) {
    const { timeZone: r, epochNanoseconds: n } = e, o = Ih(t), i = Z(r).l(n, o);
    return i ? xe({
      ...e,
      epochNanoseconds: i
    }) : null;
  }
}, {
  from: (e, t) => xe(ir(e, t)),
  compare: (e, t) => xf(ir(e), ir(t))
}, ((e) => ko(Z, e))), [sv, gt] = Ut(_s, ly, Dd, {
  add: (e, t) => gt(Sc(0, e, ce(t))),
  subtract: (e, t) => gt(Sc(1, e, ce(t))),
  until: (e, t, r) => ae(kc(0, e, ar(t), r)),
  since: (e, t, r) => ae(kc(1, e, ar(t), r)),
  round: (e, t) => gt(Fh(e, t)),
  equals: (e, t) => gm(e, ar(t)),
  toZonedDateTimeISO: (e, t) => xe(by(e, Ae(t))),
  toLocaleString(e, t, r) {
    const [n, o] = Vb(t, r, e);
    return n.format(o);
  },
  toString: (e, t) => Do(Ae, Z, e, t),
  toJSON: (e) => Do(Ae, Z, e),
  valueOf: qt
}, {
  from: (e) => gt(ar(e)),
  fromEpochMilliseconds: (e) => gt(Ey(e)),
  fromEpochNanoseconds: (e) => gt(Oy(e)),
  compare: (e, t) => wf(ar(e), ar(t))
}, ((e) => Do(Ae, Z, e))), cv = /* @__PURE__ */ Object.defineProperties({}, {
  ...Sa("Temporal.Now"),
  ...pr({
    timeZoneId: () => _r(),
    instant: () => gt(lt(Xi())),
    zonedDateTimeISO: (e = _r()) => xe(We(Xi(), Ae(e), X)),
    plainDateTimeISO: (e = _r()) => Ge(He(Lo(Z(Ae(e))), X)),
    plainDateISO: (e = _r()) => Ke(ft(Lo(Z(Ae(e))), X)),
    plainTimeISO: (e = _r()) => wt(nt(Lo(Z(Ae(e)))))
  })
}), lr = /* @__PURE__ */ Object.defineProperties({}, {
  ...Sa("Temporal"),
  ...pr({
    PlainYearMonth: ov,
    PlainMonthDay: nv,
    PlainDate: iv,
    PlainTime: tv,
    PlainDateTime: rv,
    ZonedDateTime: av,
    Instant: sv,
    Duration: Wb,
    Now: cv
  })
}), uv = /* @__PURE__ */ Bb(), Wn = /* @__PURE__ */ new WeakMap();
Object.create(Intl), pr({
  DateTimeFormat: uv
});
const lv = /^(\d{4})-(\d{2})-(\d{2})$/, fv = /^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})(?:\.(\d{1,3}))?$/;
function Yc(e, t) {
  try {
    if (lv.test(e))
      return lr.PlainDate.from(e).toString();
    const r = fv.test(e) ? `${e.replace(" ", "T")}Z` : e;
    return lr.Instant.from(r).toZonedDateTimeISO(t).toPlainDate().toString();
  } catch {
    return null;
  }
}
function dv(e) {
  return lr.Now.zonedDateTimeISO(e).toPlainDate().toString();
}
function pv(e, t) {
  let r;
  try {
    r = lr.PlainDate.from(e);
  } catch {
    throw new Error(`Invalid filter date: ${e}`);
  }
  try {
    const n = r.toPlainDateTime(lr.PlainTime.from("00:00:00")).toZonedDateTime(t).toInstant(), o = r.toPlainDateTime(lr.PlainTime.from("23:59:59.999")).toZonedDateTime(t).toInstant();
    return {
      start: n.toString({ fractionalSecondDigits: 3 }),
      end: o.toString({ fractionalSecondDigits: 3 })
    };
  } catch {
    throw new Error(`Invalid timezone: ${t}`);
  }
}
function hv(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && !(e instanceof RegExp);
}
function mv(e) {
  const t = Object.keys(e);
  if (t.length !== 1)
    return;
  const [r] = t;
  if (!r.startsWith("$"))
    return r;
}
function Oo(e) {
  const t = mv(e);
  if (!t)
    return;
  const r = e[t];
  if (hv(r)) {
    const n = Object.entries(r);
    if (n.length !== 1)
      return;
    const [o, i] = n[0];
    return { field: t, operator: o, value: i };
  }
  return {
    field: t,
    operator: "$eq",
    value: r
  };
}
const yv = {
  $eq: "is",
  $ne: "is-not"
}, gv = {
  $lt: "is-less",
  $lte: "is-or-less",
  $gt: "is-greater",
  $gte: "is-or-greater"
}, bv = {
  contains: "~",
  "does-not-contain": "-~",
  "starts-with": "~^",
  "does-not-start-with": "-~^",
  "ends-with": "~$",
  "does-not-end-with": "-~$"
}, vv = {
  "is-less": "<",
  "is-or-less": "<=",
  "is-greater": ">",
  "is-or-greater": ">="
}, wv = /^[A-Za-z0-9_.-]+$/;
function yr(e, t) {
  return e?.field ?? t;
}
function Zc(e, t) {
  return typeof e == "string" ? t?.quoteStrings || e.startsWith("-") || !wv.test(e) ? dr(e) : e : String(e);
}
function Wc(e, t = !1) {
  const r = e.source, n = r.startsWith("^"), o = r.endsWith("$");
  return n && o ? t ? "does-not-contain" : "contains" : n ? t ? "does-not-start-with" : "starts-with" : o ? t ? "does-not-end-with" : "ends-with" : t ? "does-not-contain" : "contains";
}
function Hc(e) {
  let t = e.source;
  return t.startsWith("^") && (t = t.slice(1)), t.endsWith("$") && (t = t.slice(0, -1)), t.replace(/\\([\\.^$|?*+()[\]{}/-])/g, "$1");
}
function zo(e) {
  return {
    parse(t, r) {
      const n = Oo(t), o = yr(e, r.key);
      if (!n || n.field !== o)
        return null;
      const i = yv[n.operator];
      return i ? {
        field: r.key,
        operator: i,
        values: [n.value]
      } : null;
    },
    serialize(t, r) {
      const n = t.values[0], o = yr(e, r.key);
      return n == null || n === "" ? null : t.operator === "is" ? [`${o}:${Zc(n, e)}`] : t.operator === "is-not" ? [`${o}:-${Zc(n, e)}`] : null;
    }
  };
}
function xv(e) {
  return {
    parse(t, r) {
      const n = Oo(t), o = yr(e, r.key);
      return !n || n.field !== o ? null : n.operator === "$eq" && typeof n.value == "string" ? {
        field: r.key,
        operator: "is",
        values: [n.value]
      } : n.operator === "$regex" && n.value instanceof RegExp ? {
        field: r.key,
        operator: Wc(n.value),
        values: [Hc(n.value)]
      } : n.operator === "$not" && n.value instanceof RegExp ? {
        field: r.key,
        operator: Wc(n.value, !0),
        values: [Hc(n.value)]
      } : null;
    },
    serialize(t, r) {
      const n = t.values[0], o = yr(e, r.key);
      if (typeof n != "string" || n === "")
        return null;
      if (t.operator === "is")
        return [`${o}:${dr(n)}`];
      const i = bv[t.operator];
      return i ? [`${o}:${i}${dr(n)}`] : null;
    }
  };
}
function jv(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = e.$relativeDate;
  if (!t || typeof t != "object")
    return !1;
  const { op: r, amount: n, unit: o } = t;
  return (r === "sub" || r === "add") && typeof n == "number" && Number.isSafeInteger(n) && n > 0 && typeof o == "string";
}
function Sv(e) {
  return {
    parse(t, r) {
      const n = Oo(t), o = yr(e, r.key);
      if (!n || n.field !== o)
        return null;
      if (jv(n.value) && n.value.$relativeDate.unit === "days") {
        const { op: s, amount: c } = n.value.$relativeDate, u = s === "sub" && n.operator === "$gte", f = s === "add" && n.operator === "$lte";
        if (u || f)
          return {
            field: r.key,
            operator: u ? "in-the-last" : "in-the-next",
            values: [c]
          };
      }
      if (typeof n.value != "string")
        return null;
      const i = gv[n.operator], a = Yc(n.value, r.timezone);
      return !i || !a ? null : {
        field: r.key,
        operator: i,
        values: [a]
      };
    },
    serialize(t, r) {
      const n = yr(e, r.key);
      if (t.operator === "in-the-last" || t.operator === "in-the-next") {
        const f = t.values[0];
        if (typeof f != "number" || !Number.isSafeInteger(f) || f <= 0)
          return null;
        const d = t.operator === "in-the-last" ? "-" : "+", p = t.operator === "in-the-last" ? ">=" : "<=";
        return [`${n}:${p}now${d}${f}d`];
      }
      const o = t.values[0];
      if (typeof o != "string" || o === "")
        return null;
      const i = Yc(o, r.timezone);
      if (!i)
        return null;
      const { start: a, end: s } = pv(i, r.timezone), c = vv[t.operator];
      if (c === void 0)
        return null;
      const u = t.operator === "is-less" || t.operator === "is-or-greater" ? a : s;
      return [`${n}:${c}'${u}'`];
    }
  };
}
const Nv = {
  parse(e, t) {
    const r = Oo(e);
    return !r || r.field !== "count.reports" ? null : r.operator === "$eq" && r.value === 0 ? {
      field: t.key,
      operator: "is",
      values: ["false"]
    } : r.operator === "$gt" && r.value === 0 ? {
      field: t.key,
      operator: "is",
      values: ["true"]
    } : null;
  },
  serialize(e) {
    const t = e.values[0];
    return e.operator !== "is" ? null : t === "true" ? ["count.reports:>0"] : t === "false" ? ["count.reports:0"] : null;
  }
}, gn = {
  status: {
    operators: ["is"],
    ui: {
      label: "Status",
      type: "select",
      searchable: !1,
      hideOperatorSelect: !0
    },
    options: [
      { value: "published", label: "Published" },
      { value: "hidden", label: "Hidden" }
    ],
    codec: zo()
  },
  created_at: dh({
    operators: sh,
    ui: {
      label: "Date",
      defaultOperator: uh,
      type: "date"
    },
    codec: Sv()
  }),
  body: {
    operators: ["contains", "does-not-contain"],
    parseKeys: ["html"],
    ui: {
      label: "Text",
      type: "text",
      placeholder: "Search comment text...",
      defaultOperator: "contains",
      className: "w-full max-w-48",
      popoverContentClassName: "w-full max-w-48"
    },
    codec: xv({ field: "html" })
  },
  post: {
    operators: ["is", "is-not"],
    parseKeys: ["post_id"],
    ui: {
      label: "Post",
      type: "select",
      searchable: !0,
      className: "w-full max-w-80",
      popoverContentClassName: "w-full max-w-[calc(100vw-32px)] max-w-80"
    },
    codec: zo({ field: "post_id" })
  },
  author: {
    operators: ["is", "is-not"],
    parseKeys: ["member_id"],
    ui: {
      label: "Author",
      type: "select",
      searchable: !0,
      className: "w-80",
      popoverContentClassName: "w-80"
    },
    codec: zo({ field: "member_id" })
  },
  reported: {
    operators: ["is"],
    parseKeys: ["count.reports"],
    ui: {
      label: "Reported",
      type: "select",
      searchable: !1,
      hideOperatorSelect: !0
    },
    options: [
      { value: "true", label: "Yes" },
      { value: "false", label: "No" }
    ],
    codec: Nv
  }
};
function Pv(e, t = {}) {
  const r = t.labels || {};
  return e.map((n) => ({
    value: n,
    label: r[n] ?? n.replaceAll("-", " ")
  }));
}
const Tv = ["author", "post", "body", "status", "reported", "created_at"], Ev = {
  ...ch,
  ...lh
};
function Ov(e) {
  switch (e) {
    case "author":
      return mt.createElement(ml, { className: "size-4" });
    case "post":
      return mt.createElement(bp, { className: "size-4" });
    case "body":
      return mt.createElement(gp, { className: "size-4" });
    case "status":
      return mt.createElement(Np, { className: "size-4" });
    case "reported":
      return mt.createElement(da, { className: "size-4" });
    case "created_at":
      return mt.createElement(yp, { className: "size-4" });
    default:
      return;
  }
}
function Rv({
  postValueSource: e,
  memberValueSource: t,
  siteTimezone: r = "UTC"
}) {
  return je(() => {
    const n = dv(r);
    return Tv.map((o) => {
      const i = gn[o], a = o === "created_at" ? {
        defaultValue: n,
        ...fh(i) ? { customRenderer: ph(n) } : {}
      } : {};
      return {
        key: o,
        ...i.ui,
        icon: Ov(o),
        operators: Pv(i.operators, { labels: Ev }),
        ..."options" in i && i.options ? { options: i.options } : {},
        ...a,
        ...o === "author" ? { valueSource: t } : {},
        ...o === "post" ? { valueSource: e } : {}
      };
    });
  }, [t, e, r]);
}
const kd = "MembersResponseType", Id = "/members/", Av = { limit: "1" }, Dv = () => [kd, Dp(Id, Av)], kv = vr({
  method: "POST",
  path: ({ id: e }) => `/members/${e}/commenting/disable`,
  body: ({ reason: e, hideComments: t }) => ({
    reason: e,
    hide_comments: t
  }),
  invalidateQueries: {
    dataType: "CommentsResponseType"
  }
}), Iv = vr({
  method: "POST",
  path: ({ id: e }) => `/members/${e}/commenting/enable`,
  body: () => ({}),
  invalidateQueries: {
    dataType: "CommentsResponseType"
  }
}), Cv = ha({
  dataType: kd,
  path: Id,
  defaultSearchParams: {
    include: "labels,tiers",
    limit: "100",
    order: "created_at desc"
  },
  defaultNextPageParams: (e, t) => {
    if (e.meta?.pagination.next)
      return {
        ...t,
        page: e.meta.pagination.next.toString()
      };
  },
  returnData: (e) => {
    const { pages: t } = e, r = t.flatMap((o) => o.members), n = t[t.length - 1].meta;
    return {
      members: r,
      meta: n,
      isEnd: n ? n.pagination.pages === n.pagination.page : !0
    };
  }
});
function Mv(e) {
  return !e?.filter && !e?.search;
}
function _v(e, t) {
  const r = sp(), n = e.data?.meta?.pagination?.total, o = Mv(t);
  De(() => {
    if (!(o && !e.isError && !e.isPlaceholderData && !e.isPreviousData && typeof n == "number"))
      return;
    const a = Dv(), s = r.getQueryState(a), c = s?.data, u = c?.meta?.pagination;
    if (!s || !c || !u)
      return;
    const f = u.total === n, d = s.dataUpdatedAt <= e.dataUpdatedAt;
    f || !d || r.setQueryData(a, {
      ...c,
      meta: {
        ...c.meta,
        pagination: {
          ...u,
          total: n
        }
      }
    }, { updatedAt: e.dataUpdatedAt });
  }, [r, o, n, e.dataUpdatedAt, e.isError, e.isPlaceholderData, e.isPreviousData]);
}
function Fv(e = {}) {
  const t = Cv(e);
  return _v(t, e.searchParams), t;
}
function Bv(e, t) {
  if (t.length !== 0)
    return `${e}:[${t.map((r) => dr(r)).join(",")}]`;
}
function Hn(...e) {
  const t = /* @__PURE__ */ new Map();
  for (const r of e)
    if (r)
      for (const n of r)
        t.has(n.value) || t.set(n.value, n);
  return [...t.values()];
}
function Lv(e, t, r, n) {
  var o = this, i = te(null), a = te(0), s = te(0), c = te(null), u = te([]), f = te(), d = te(), p = te(e), m = te(!0), g = te(), y = te();
  p.current = e;
  var b = typeof window < "u", S = !t && t !== 0 && b;
  if (typeof e != "function") throw new TypeError("Expected a function");
  t = +t || 0;
  var x = !!(r = r || {}).leading, P = !("trailing" in r) || !!r.trailing, E = !!r.flushOnExit && P, I = "maxWait" in r, M = "debounceOnServer" in r && !!r.debounceOnServer, A = I ? Math.max(+r.maxWait || 0, t) : null, W = je(function() {
    var L = function(O) {
      var R = u.current, C = f.current;
      return u.current = f.current = null, a.current = O, s.current = s.current || O, d.current = p.current.apply(C, R);
    }, K = function(O, R) {
      S && cancelAnimationFrame(c.current), c.current = S ? requestAnimationFrame(O) : setTimeout(O, R);
    }, H = function(O) {
      if (!m.current) return !1;
      var R = O - i.current;
      return !i.current || R >= t || R < 0 || I && O - a.current >= A;
    }, V = function(O) {
      return c.current = null, P && u.current ? L(O) : (u.current = f.current = null, d.current);
    }, D = function O() {
      var R = Date.now();
      if (x && s.current === a.current && T(), H(R)) return V(R);
      if (m.current) {
        var C = t - (R - i.current), j = I ? Math.min(C, A - (R - a.current)) : C;
        K(O, j);
      }
    }, T = function() {
      n && n({});
    }, k = function() {
      if (b || M) {
        var O, R = Date.now(), C = H(R);
        if (u.current = [].slice.call(arguments), f.current = o, i.current = R, E && !g.current && (g.current = function() {
          var j;
          ((j = globalThis.document) == null ? void 0 : j.visibilityState) === "hidden" && y.current.flush();
        }, (O = globalThis.document) == null || O.addEventListener == null || O.addEventListener("visibilitychange", g.current)), C) {
          if (!c.current && m.current) return a.current = i.current, K(D, t), x ? L(i.current) : d.current;
          if (I) return K(D, t), L(i.current);
        }
        return c.current || K(D, t), d.current;
      }
    };
    return k.cancel = function() {
      var O = c.current;
      O && (S ? cancelAnimationFrame(c.current) : clearTimeout(c.current)), a.current = 0, u.current = i.current = f.current = c.current = null, O && n && n({});
    }, k.isPending = function() {
      return !!c.current;
    }, k.flush = function() {
      return c.current ? V(Date.now()) : d.current;
    }, k;
  }, [x, I, t, A, P, E, S, b, M, n]);
  return y.current = W, De(function() {
    return m.current = !0, function() {
      var L;
      E && y.current.flush(), g.current && ((L = globalThis.document) == null || L.removeEventListener == null || L.removeEventListener("visibilitychange", g.current), g.current = null), m.current = !1;
    };
  }, [E]), W;
}
function Uv(e, t) {
  return e === t;
}
function qv(e, t, r) {
  var n = Uv, o = te(e), i = ge({})[1], a = Lv(fr(function(c) {
    o.current = c, i({});
  }, [i]), t, r, i), s = te(e);
  return n(s.current, e) || (a(e), s.current = e), [o.current, a];
}
const Vc = () => {
};
function $v(e, t, r) {
  return r ? e.flatMap((n) => t.some((i) => i.value === n) ? [] : [r(n)]) : [];
}
function zv(e) {
  return function(r = {}) {
    const { enabled: n = !0 } = r, o = () => {
      const a = e.useBrowse("", { enabled: !0 }), s = je(() => (a.data || []).map(e.toOption), [a.data]);
      return {
        items: a.data,
        options: s,
        isLoading: a.isLoading,
        pagination: a.pagination
      };
    }, i = ({ query: a, selectedValues: s }) => {
      const [c] = qv(a, e.debounceMs ?? 200), u = e.useBrowse(c, { enabled: n }), f = e.useHydrate?.(s, { enabled: n }), d = je(() => (u.data || []).map(e.toOption), [u.data]), p = je(() => (f?.data || []).map(e.toOption), [f?.data]), m = je(() => Hn(p, d), [p, d]), g = je(() => $v(
        s,
        m,
        e.getMissingSelectedOption
      ), [m, s]);
      return n ? {
        options: Hn(g, m),
        isInitialLoad: u.isLoading && m.length === 0,
        isSearching: !u.isLoading && u.isRefreshing && !u.isLoadingMore,
        isLoadingMore: u.isLoadingMore,
        hasMore: u.hasMore,
        loadMore: u.loadMore ?? Vc
      } : {
        options: [],
        isInitialLoad: !1,
        isSearching: !1,
        isLoadingMore: !1,
        hasMore: !1,
        loadMore: Vc
      };
    };
    return {
      id: e.id,
      useInitialBrowse: o,
      useOptions: i
    };
  };
}
function Yv(e) {
  return { filter: e };
}
function Zv(e) {
  return Bv("id", e);
}
function Gc(e) {
  return {
    limit: "100",
    ...e
  };
}
function tc({
  id: e,
  buildBrowseSearchParams: t,
  buildHydrateSearchParams: r = Yv,
  buildHydrateFilter: n = Zv,
  debounceMs: o,
  selectItems: i,
  toOption: a,
  getMissingSelectedOption: s,
  useQuery: c
}) {
  return zv({
    id: e,
    useBrowse: (u, f) => {
      const d = c({
        enabled: f.enabled ?? !0,
        searchParams: Gc(t(u))
      });
      return {
        data: i(d.data),
        isLoading: d.isLoading,
        isRefreshing: d.isFetching,
        isLoadingMore: d.isFetchingNextPage,
        hasMore: !!d.hasNextPage,
        loadMore: d.fetchNextPage,
        pagination: d.data?.meta?.pagination
      };
    },
    useHydrate: (u, f) => {
      const d = n(u), p = {};
      typeof d == "string" && Object.assign(p, Gc(r(d)));
      const g = c({
        enabled: (f.enabled ?? !0) && u.length > 0,
        searchParams: p
      });
      return {
        data: i(g.data),
        isLoading: g.isLoading
      };
    },
    toOption: a,
    getMissingSelectedOption: s,
    debounceMs: o
  });
}
function Wv(e) {
  return {
    value: e.id,
    label: e.name || "Unknown name",
    detail: e.email ?? "(Unknown email)"
  };
}
const Hv = tc({
  id: "posts.members.remote",
  buildBrowseSearchParams: (e) => ({
    limit: "100",
    order: "created_at DESC",
    ...e ? { search: e } : {}
  }),
  getMissingSelectedOption: (e) => ({
    value: e,
    label: `ID: ${e}`
  }),
  selectItems: (e) => e?.members,
  useQuery: ({ enabled: e, searchParams: t }) => Fv({
    enabled: e,
    keepPreviousData: !0,
    searchParams: t
  }),
  toOption: Wv
});
function Vv() {
  return Hv();
}
const Gv = "PagesResponseType", Kv = ha({
  dataType: Gv,
  path: "/pages/",
  defaultNextPageParams: (e, t) => {
    if (e.meta?.pagination.next)
      return {
        ...t,
        page: e.meta.pagination.next.toString()
      };
  },
  returnData: (e) => {
    const { pages: t } = e, r = t.flatMap((o) => o.pages), n = t[t.length - 1].meta;
    return {
      pages: r,
      meta: n,
      isEnd: n ? n.pagination.pages === n.pagination.page : !0
    };
  }
});
function Qv(e, t, r) {
  return function(o) {
    const i = e(o), a = t(o), s = fr(({ query: c, selectedValues: u }) => {
      const f = i.useOptions({ query: c, selectedValues: u }), d = a.useOptions({ query: c, selectedValues: u }), p = Hn(f.options, d.options), m = r ? u.flatMap((g) => p.some((b) => b.value === g) ? [] : [r(g)]) : [];
      return {
        options: Hn(p, m),
        isInitialLoad: f.options.length === 0 && d.options.length === 0 && (f.isInitialLoad || d.isInitialLoad),
        isSearching: f.isSearching || d.isSearching,
        isLoadingMore: f.isLoadingMore || d.isLoadingMore,
        hasMore: f.hasMore || d.hasMore,
        loadMore: () => {
          f.hasMore && f.loadMore(), d.hasMore && d.loadMore();
        }
      };
    }, [i, a]);
    return je(() => ({
      id: `${i.id}+${a.id}`,
      useOptions: s
    }), [i.id, a.id, s]);
  };
}
function Jv(e) {
  return e ? `status:published+title:~${dr(e)}` : "status:published";
}
function Xv(e) {
  return {
    value: e.id,
    label: e.title
  };
}
function e1(e) {
  return {
    value: e.id,
    label: e.title,
    detail: "Page"
  };
}
const Cd = (e) => ({
  filter: Jv(e),
  limit: "25",
  fields: "id,title",
  order: "published_at DESC"
}), Md = (e) => ({
  fields: "id,title",
  filter: e
}), t1 = tc({
  id: "posts.published.remote",
  buildBrowseSearchParams: Cd,
  buildHydrateSearchParams: Md,
  selectItems: (e) => e?.posts,
  useQuery: ({ enabled: e, searchParams: t }) => kp({
    enabled: e,
    keepPreviousData: !0,
    searchParams: t
  }),
  toOption: Xv
}), r1 = tc({
  id: "pages.published.remote",
  buildBrowseSearchParams: Cd,
  buildHydrateSearchParams: Md,
  selectItems: (e) => e?.pages,
  useQuery: ({ enabled: e, searchParams: t }) => Kv({
    enabled: e,
    keepPreviousData: !0,
    searchParams: t
  }),
  toOption: e1
}), n1 = Qv(
  t1,
  r1,
  (e) => ({
    value: e,
    label: `ID: ${e}`
  })
);
function o1() {
  return n1();
}
const Kc = ({
  filters: e,
  siteTimezone: t,
  onFiltersChange: r
}) => {
  const n = o1(), o = Vv(), i = Rv({
    memberValueSource: o,
    postValueSource: n,
    siteTimezone: t
  }), a = e.length > 0;
  return /* @__PURE__ */ l.jsx(
    pp,
    {
      addButtonIcon: a ? /* @__PURE__ */ l.jsx(vp, {}) : /* @__PURE__ */ l.jsx(wp, {}),
      addButtonText: a ? "Add filter" : "Filter",
      allowMultiple: !1,
      className: `[&>button]:order-last ${a ? "[&>button]:border-none" : "w-auto"}`,
      clearButtonClassName: "font-normal text-muted-foreground",
      clearButtonIcon: /* @__PURE__ */ l.jsx(Ip, {}),
      clearButtonText: "Clear",
      fields: i,
      filters: e,
      keyboardShortcut: "f",
      popoverAlign: a ? "start" : "end",
      showClearButton: a,
      showSearchInput: !1,
      onChange: r
    }
  );
};
function i1({ onClick: e, expanded: t }) {
  return /* @__PURE__ */ l.jsxs(
    ue,
    {
      className: "shrink-0 gap-0.5 self-start p-0 text-base hover:bg-transparent",
      variant: "ghost",
      onClick: e,
      children: [
        t ? "Show less" : "Show more",
        t ? /* @__PURE__ */ l.jsx(xp, {}) : /* @__PURE__ */ l.jsx(Mp, {})
      ]
    }
  );
}
function _d({ item: e }) {
  const t = te(null), [r, n] = ge(!1), [o, i] = ge(!1);
  return De(() => {
    if (o)
      return;
    const a = () => {
      t.current && n(t.current.scrollHeight > t.current.clientHeight);
    };
    return a(), window.addEventListener("resize", a), () => window.removeEventListener("resize", a);
  }, [e.html, o]), /* @__PURE__ */ l.jsx("div", { className: "mt-2 flex flex-col gap-2", children: /* @__PURE__ */ l.jsxs("div", { className: `flex max-w-full flex-col items-start ${e.status === "hidden" && "opacity-50"}`, children: [
    /* @__PURE__ */ l.jsx(
      "div",
      {
        dangerouslySetInnerHTML: { __html: e.html || "" },
        ref: t,
        className: be(
          "prose flex-1 text-base max-w-[80ch] balance leading-[1.5em] [&_*]:leading-[1.5em] [&_*]:text-base [&_*]:font-normal [&_blockquote]:border-l-[3px] [&_blockquote]:border-foreground [&_blockquote]:p-0 [&_blockquote]:pl-3 [&_blockquote_p]:mt-0 [&_a]:underline",
          o ? "-mb-1 [&_p]:mb-[0.85em]" : "line-clamp-2 [&_p]:m-0 [&_blockquote+p]:mt-1 mb-1"
        )
      }
    ),
    r && /* @__PURE__ */ l.jsx(i1, { expanded: o, onClick: () => i(!o) })
  ] }) });
}
const Cr = "CommentsResponseType", Fd = "count.dislikes", rc = (e) => [
  "member",
  "post",
  "count.replies",
  "count.direct_replies",
  "count.likes",
  ...e ? [Fd] : [],
  "count.reports",
  "parent",
  "in_reply_to"
].join(","), a1 = (e) => [
  "member",
  "post",
  "count.direct_replies",
  "count.likes",
  ...e ? [Fd] : [],
  "count.reports",
  "parent",
  "in_reply_to"
].join(","), s1 = ha({
  dataType: Cr,
  path: "/comments/",
  defaultNextPageParams: (e, t) => e.meta?.pagination.next ? {
    ...t,
    page: (e.meta?.pagination.next || 1).toString()
  } : void 0,
  returnData: (e) => {
    const { pages: t } = e, r = t.flatMap((o) => o.comments), n = t[t.length - 1].meta;
    return {
      comments: r,
      meta: n,
      isEnd: n ? n.pagination.pages === n.pagination.page : !0
    };
  }
}), Bd = (e) => s1({
  ...e,
  searchParams: {
    limit: "100",
    order: "created_at desc",
    include: "member,post,parent",
    ...e?.searchParams
  }
}), Ld = vr({
  method: "PUT",
  path: ({ id: e }) => `/comments/${e}/`,
  body: ({ id: e }) => ({
    comments: [{
      id: e,
      status: "hidden"
    }]
  }),
  invalidateQueries: {
    dataType: Cr
  }
}), Ud = vr({
  method: "PUT",
  path: ({ id: e }) => `/comments/${e}/`,
  body: ({ id: e }) => ({
    comments: [{
      id: e,
      status: "published"
    }]
  }),
  invalidateQueries: {
    dataType: Cr
  }
}), c1 = vr({
  method: "PUT",
  path: ({ id: e }) => `/comments/${e}/`,
  body: ({ id: e }) => ({
    comments: [{
      id: e,
      pinned: !0
    }]
  }),
  invalidateQueries: {
    dataType: Cr
  }
}), nc = vr({
  method: "PUT",
  path: ({ id: e }) => `/comments/${e}/`,
  body: ({ id: e }) => ({
    comments: [{
      id: e,
      pinned: !1
    }]
  }),
  invalidateQueries: {
    dataType: Cr
  }
}), u1 = Vn({
  dataType: Cr,
  path: (e) => `/comments/${e}/`,
  defaultSearchParams: {
    include: rc(!1)
  }
}), l1 = (e, t) => {
  const { dislikesEnabled: r = !1, searchParams: n, ...o } = t || {};
  return u1(e, {
    ...o,
    searchParams: {
      include: rc(r),
      ...n
    }
  });
}, f1 = Vn({
  dataType: "CommentReportsResponseType",
  path: (e) => `/comments/${e}/reports/`
}), d1 = (e, t) => f1(e, { ...t }), p1 = Vn({
  dataType: "CommentLikesResponseType",
  path: (e) => `/comments/${e}/likes/`,
  defaultSearchParams: {
    include: "member",
    limit: "100",
    order: "created_at desc"
  }
}), h1 = (e, t) => p1(e, { ...t }), m1 = Vn({
  dataType: "CommentDislikesResponseType",
  path: (e) => `/comments/${e}/dislikes/`,
  defaultSearchParams: {
    include: "member",
    limit: "100",
    order: "created_at desc"
  }
}), y1 = (e, t) => m1(e, { ...t }), g1 = (e, t) => {
  const { dislikesEnabled: r = !1, ...n } = t || {};
  return Bd({
    ...n,
    searchParams: {
      filter: `(parent_id:${e}+in_reply_to_id:null),in_reply_to_id:${e}`,
      order: "created_at asc",
      include: a1(r),
      limit: "100"
    }
  });
};
function b1(e) {
  const t = new Date(e);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric"
  }).format(t).replace(/(\d+),(\s+\d{4})/, "$1$2");
}
const v1 = be(
  _p({ variant: "warning" }),
  "gap-1 hover:bg-state-warning/30"
);
function qd({
  memberName: e,
  memberId: t,
  createdAt: r,
  isHidden: n,
  canComment: o,
  isPinned: i,
  onAuthorClick: a,
  postTitle: s,
  onPostClick: c,
  onUnpinClick: u,
  className: f
}) {
  const d = (p) => {
    p.stopPropagation(), u?.();
  };
  return /* @__PURE__ */ l.jsxs("div", { className: be("flex items-center gap-2", f), children: [
    /* @__PURE__ */ l.jsxs("div", { className: be(
      "flex min-w-0 items-center gap-x-1",
      n && "opacity-50"
    ), children: [
      /* @__PURE__ */ l.jsx("div", { className: "whitespace-nowrap", children: t && a ? /* @__PURE__ */ l.jsx(
        ue,
        {
          className: "flex h-auto items-center gap-1.5 truncate p-0 text-md font-semibold text-primary hover:opacity-70",
          variant: "link",
          onClick: a,
          children: e || "Unknown"
        }
      ) : /* @__PURE__ */ l.jsx("span", { className: "block truncate font-semibold", children: e || "Unknown" }) }),
      o === !1 && /* @__PURE__ */ l.jsxs(Dn, { children: [
        /* @__PURE__ */ l.jsx(kn, { asChild: !0, children: /* @__PURE__ */ l.jsx("span", { "data-testid": "commenting-disabled-indicator", children: /* @__PURE__ */ l.jsx(
          fl,
          {
            className: "size-3.5 text-muted-foreground"
          }
        ) }) }),
        /* @__PURE__ */ l.jsx(In, { children: "Comments disabled" })
      ] }),
      /* @__PURE__ */ l.jsx(pa, { className: "shrink-0 text-muted-foreground/50", size: 16 }),
      /* @__PURE__ */ l.jsx("div", { className: "shrink-0 whitespace-nowrap", children: r && /* @__PURE__ */ l.jsxs(Dn, { children: [
        /* @__PURE__ */ l.jsx(kn, { asChild: !0, children: /* @__PURE__ */ l.jsx("span", { className: "cursor-default text-sm text-muted-foreground", children: Yt(r) }) }),
        /* @__PURE__ */ l.jsx(In, { children: b1(r) })
      ] }) }),
      s && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx("div", { className: "shrink-0 text-muted-foreground", children: "on" }),
        /* @__PURE__ */ l.jsx("div", { className: "min-w-0 truncate", children: c ? /* @__PURE__ */ l.jsx(
          ue,
          {
            className: "block h-auto w-full cursor-pointer truncate p-0 text-left font-medium text-gray-800 hover:opacity-70 dark:text-gray-400",
            variant: "link",
            onClick: c,
            children: s
          }
        ) : /* @__PURE__ */ l.jsx("span", { className: "font-medium text-gray-800 dark:text-gray-400", children: s }) })
      ] })
    ] }),
    n && /* @__PURE__ */ l.jsx(pc, { variant: "secondary", children: "Hidden" }),
    i && (u ? /* @__PURE__ */ l.jsxs(
      "button",
      {
        "aria-label": "Unpin comment",
        className: be("group", v1),
        type: "button",
        onClick: d,
        children: [
          /* @__PURE__ */ l.jsxs("span", { className: "grid size-3 shrink-0", children: [
            /* @__PURE__ */ l.jsx(Gi, { className: "col-start-1 row-start-1 size-3 group-hover:opacity-0 group-focus-visible:opacity-0" }),
            /* @__PURE__ */ l.jsx(dl, { className: "col-start-1 row-start-1 size-3 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100" })
          ] }),
          /* @__PURE__ */ l.jsxs("span", { className: "grid justify-items-start text-left", children: [
            /* @__PURE__ */ l.jsx("span", { className: "col-start-1 row-start-1 group-hover:opacity-0 group-focus-visible:opacity-0", children: "Pinned" }),
            /* @__PURE__ */ l.jsx("span", { className: "col-start-1 row-start-1 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100", children: "Unpin" })
          ] })
        ]
      }
    ) : /* @__PURE__ */ l.jsxs(pc, { className: "gap-1", variant: "warning", children: [
      /* @__PURE__ */ l.jsx(Gi, { className: "size-3" }),
      "Pinned"
    ] }))
  ] });
}
function w1({
  open: e,
  memberName: t,
  onOpenChange: r,
  onConfirm: n
}) {
  const [o, i] = ge(!1), a = (c) => {
    c || i(!1), r(c);
  }, s = () => {
    n(o), i(!1);
  };
  return /* @__PURE__ */ l.jsx(ma, { open: e, onOpenChange: a, children: /* @__PURE__ */ l.jsxs(ya, { className: "gap-5", children: [
    /* @__PURE__ */ l.jsxs(ga, { children: [
      /* @__PURE__ */ l.jsx(ba, { children: "Disable comments" }),
      /* @__PURE__ */ l.jsxs(Cp, { children: [
        t || "This member",
        " won't be able to comment in the future. You can re-enable commenting anytime."
      ] })
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ l.jsx(
        El,
        {
          checked: o,
          id: "hide-comments",
          onCheckedChange: (c) => i(c === !0)
        }
      ),
      /* @__PURE__ */ l.jsx(mp, { htmlFor: "hide-comments", children: "Hide all previous comments" })
    ] }),
    /* @__PURE__ */ l.jsxs(va, { children: [
      /* @__PURE__ */ l.jsx(ue, { variant: "outline", onClick: () => a(!1), children: "Cancel" }),
      /* @__PURE__ */ l.jsx(ue, { onClick: s, children: "Disable comments" })
    ] })
  ] }) });
}
const oc = () => {
  const { data: e } = qp();
  return e?.config?.labs?.commentsPinning === !0;
};
function $d({
  comment: e
}) {
  const { mutate: t } = kv(), { mutate: r } = Iv(), { mutate: n } = c1(), { mutate: o } = nc(), [i, a] = ge(!1), s = oc(), { id: c, post: u, member: f } = e, d = u?.url, p = f?.id, m = f?.can_comment, g = s && !e.parent_id && e.status !== "deleted", y = (S) => {
    p && (t({
      id: p,
      reason: `Disabled from comment ${c}`,
      hideComments: S
    }), a(!1));
  }, b = () => {
    p && r({ id: p });
  };
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsxs(Pp, { children: [
      /* @__PURE__ */ l.jsx(Tp, { asChild: !0, children: /* @__PURE__ */ l.jsx(
        ue,
        {
          className: "relative z-10 text-gray-800 hover:bg-secondary [&_svg]:size-4",
          size: "sm",
          variant: "ghost",
          children: /* @__PURE__ */ l.jsx(zp, {})
        }
      ) }),
      /* @__PURE__ */ l.jsxs(Ep, { align: "start", children: [
        d && /* @__PURE__ */ l.jsx(tr, { asChild: !0, children: /* @__PURE__ */ l.jsxs("a", { href: `${d}#ghost-comments-${c}`, rel: "noopener noreferrer", target: "_blank", children: [
          /* @__PURE__ */ l.jsx(Op, { className: "size-4" }),
          "View on post"
        ] }) }),
        p && /* @__PURE__ */ l.jsx(tr, { asChild: !0, children: /* @__PURE__ */ l.jsxs("a", { href: `#/members/${p}`, children: [
          /* @__PURE__ */ l.jsx(ml, { className: "size-4" }),
          "View member"
        ] }) }),
        g && (e.pinned ? /* @__PURE__ */ l.jsxs(tr, { onClick: () => o({ id: c }), children: [
          /* @__PURE__ */ l.jsx(dl, { className: "size-4" }),
          "Unpin comment"
        ] }) : /* @__PURE__ */ l.jsxs(tr, { onClick: () => n({ id: c }), children: [
          /* @__PURE__ */ l.jsx(Gi, { className: "size-4" }),
          "Pin comment"
        ] })),
        p && (m !== !1 ? /* @__PURE__ */ l.jsxs(tr, { onClick: () => a(!0), children: [
          /* @__PURE__ */ l.jsx(fl, { className: "size-4" }),
          "Disable commenting"
        ] }) : /* @__PURE__ */ l.jsxs(tr, { onClick: b, children: [
          /* @__PURE__ */ l.jsx(Yp, { className: "size-4" }),
          "Enable commenting"
        ] }))
      ] })
    ] }),
    /* @__PURE__ */ l.jsx(
      w1,
      {
        memberName: f?.name,
        open: i,
        onConfirm: y,
        onOpenChange: a
      }
    )
  ] });
}
function x1({ comment: e, dislikesEnabled: t, open: r, defaultTab: n = "likes", onOpenChange: o }) {
  const { data: i, isLoading: a } = h1(e.id, { enabled: r }), { data: s, isLoading: c } = y1(e.id, { enabled: r && t }), u = i?.comment_likes ?? [], f = t ? s?.comment_dislikes ?? [] : [], d = e.count?.likes ?? 0, p = t ? e.count?.dislikes ?? 0 : 0, m = Math.max(0, d - u.length), g = Math.max(0, p - f.length);
  return /* @__PURE__ */ l.jsx(ma, { open: r, onOpenChange: o, children: /* @__PURE__ */ l.jsxs(ya, { "aria-describedby": void 0, children: [
    /* @__PURE__ */ l.jsx(ga, { children: /* @__PURE__ */ l.jsx(ba, { children: t ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      zt(d),
      " ",
      d === 1 ? "like" : "likes",
      " and ",
      zt(p),
      " ",
      p === 1 ? "dislike" : "dislikes"
    ] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      zt(d),
      " ",
      d === 1 ? "like" : "likes"
    ] }) }) }),
    /* @__PURE__ */ l.jsx("div", { className: "overflow-hidden rounded-md border p-3", children: /* @__PURE__ */ l.jsxs("div", { className: "flex min-w-0 items-start gap-3", children: [
      /* @__PURE__ */ l.jsx(
        xt,
        {
          className: "shrink-0",
          email: e.member?.email,
          name: e.member?.name,
          src: e.member?.avatar_image
        }
      ),
      /* @__PURE__ */ l.jsxs("div", { className: "flex min-w-0 flex-col overflow-hidden", children: [
        /* @__PURE__ */ l.jsxs("div", { className: "flex min-w-0 items-center gap-1 text-sm", children: [
          /* @__PURE__ */ l.jsx("span", { className: "shrink-0 font-semibold", children: e.member ? sr(e.member) : "Deleted member" }),
          /* @__PURE__ */ l.jsx(pa, { className: "shrink-0 text-muted-foreground/50", size: 16 }),
          /* @__PURE__ */ l.jsx("span", { className: "shrink-0 text-muted-foreground", children: e.created_at && Yt(e.created_at) }),
          /* @__PURE__ */ l.jsx("span", { className: "shrink-0 text-muted-foreground", children: "on" }),
          /* @__PURE__ */ l.jsx("span", { className: "min-w-0 truncate font-medium text-gray-800 dark:text-gray-400", children: e.post?.title || "Unknown post" })
        ] }),
        /* @__PURE__ */ l.jsx(
          "div",
          {
            dangerouslySetInnerHTML: { __html: e.html || "" },
            className: "prose mt-2 line-clamp-2 text-sm [&_*]:text-sm [&_*]:leading-[1.5em] [&_p]:m-0"
          }
        )
      ] })
    ] }) }),
    t ? /* @__PURE__ */ l.jsxs(Zp, { defaultValue: n, variant: "segmented", children: [
      /* @__PURE__ */ l.jsxs(Wp, { className: "grid w-full grid-cols-2", children: [
        /* @__PURE__ */ l.jsx(mc, { value: "likes", children: "Likes" }),
        /* @__PURE__ */ l.jsx(mc, { value: "dislikes", children: "Dislikes" })
      ] }),
      /* @__PURE__ */ l.jsx(yc, { className: "mt-4", value: "likes", children: /* @__PURE__ */ l.jsx("div", { className: "-mx-1 max-h-64 overflow-y-auto px-1", children: a ? /* @__PURE__ */ l.jsx("div", { className: "flex justify-center py-4", children: /* @__PURE__ */ l.jsx(jt, { size: "md" }) }) : u.length === 0 ? /* @__PURE__ */ l.jsx("div", { className: "py-4 text-center text-sm text-muted-foreground", children: "No likes yet" }) : /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col gap-3 pb-1", children: [
        u.map((y) => /* @__PURE__ */ l.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ l.jsxs("div", { className: "relative shrink-0", children: [
              /* @__PURE__ */ l.jsx(
                xt,
                {
                  email: y.member?.email,
                  name: y.member?.name,
                  src: y.member?.avatar_image
                }
              ),
              /* @__PURE__ */ l.jsx("div", { className: "absolute -right-0.5 -bottom-0.5 flex size-4 items-center justify-center rounded-full bg-gray-500 text-white", children: /* @__PURE__ */ l.jsx(gl, { className: "size-2.5", fill: "currentColor" }) })
            ] }),
            /* @__PURE__ */ l.jsx("span", { className: "font-medium", children: y.member ? sr(y.member) : "Deleted member" })
          ] }),
          /* @__PURE__ */ l.jsx("span", { className: "shrink-0 text-sm text-muted-foreground", children: Yt(y.created_at) })
        ] }, y.id)),
        m > 0 && /* @__PURE__ */ l.jsxs("div", { className: "pt-1 text-center text-sm text-muted-foreground", children: [
          "and ",
          zt(m),
          " more"
        ] })
      ] }) }) }),
      /* @__PURE__ */ l.jsx(yc, { className: "mt-4", value: "dislikes", children: /* @__PURE__ */ l.jsx("div", { className: "-mx-1 max-h-64 overflow-y-auto px-1", children: c ? /* @__PURE__ */ l.jsx("div", { className: "flex justify-center py-4", children: /* @__PURE__ */ l.jsx(jt, { size: "md" }) }) : f.length === 0 ? /* @__PURE__ */ l.jsx("div", { className: "py-4 text-center text-sm text-muted-foreground", children: "No dislikes yet" }) : /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col gap-3 pb-1", children: [
        f.map((y) => /* @__PURE__ */ l.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ l.jsxs("div", { className: "relative shrink-0", children: [
              /* @__PURE__ */ l.jsx(
                xt,
                {
                  email: y.member?.email,
                  name: y.member?.name,
                  src: y.member?.avatar_image
                }
              ),
              /* @__PURE__ */ l.jsx("div", { className: "absolute -right-0.5 -bottom-0.5 flex size-4 items-center justify-center rounded-full bg-gray-500 text-white", children: /* @__PURE__ */ l.jsx(bl, { className: "size-2.5", fill: "currentColor" }) })
            ] }),
            /* @__PURE__ */ l.jsx("span", { className: "font-medium", children: y.member ? sr(y.member) : "Deleted member" })
          ] }),
          /* @__PURE__ */ l.jsx("span", { className: "shrink-0 text-sm text-muted-foreground", children: Yt(y.created_at) })
        ] }, y.id)),
        g > 0 && /* @__PURE__ */ l.jsxs("div", { className: "pt-1 text-center text-sm text-muted-foreground", children: [
          "and ",
          zt(g),
          " more"
        ] })
      ] }) }) })
    ] }) : /* @__PURE__ */ l.jsx("div", { className: "-mx-1 max-h-64 overflow-y-auto px-1", children: a ? /* @__PURE__ */ l.jsx("div", { className: "flex justify-center py-4", children: /* @__PURE__ */ l.jsx(jt, { size: "md" }) }) : /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col gap-3 pb-1", children: [
      u.map((y) => /* @__PURE__ */ l.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
        /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "relative shrink-0", children: [
            /* @__PURE__ */ l.jsx(
              xt,
              {
                email: y.member?.email,
                name: y.member?.name,
                src: y.member?.avatar_image
              }
            ),
            /* @__PURE__ */ l.jsx("div", { className: "absolute -right-0.5 -bottom-0.5 flex size-4 items-center justify-center rounded-full bg-pink-500 text-white", children: /* @__PURE__ */ l.jsx(pl, { className: "size-2.5", fill: "currentColor" }) })
          ] }),
          /* @__PURE__ */ l.jsx("span", { className: "font-medium", children: y.member ? sr(y.member) : "Deleted member" })
        ] }),
        /* @__PURE__ */ l.jsx("span", { className: "shrink-0 text-sm text-muted-foreground", children: Yt(y.created_at) })
      ] }, y.id)),
      m > 0 && /* @__PURE__ */ l.jsxs("div", { className: "pt-1 text-center text-sm text-muted-foreground", children: [
        "and ",
        zt(m),
        " more"
      ] })
    ] }) }),
    /* @__PURE__ */ l.jsx(va, { children: /* @__PURE__ */ l.jsx(ue, { onClick: () => o(!1), children: "OK" }) })
  ] }) });
}
function j1({ comment: e, open: t, onOpenChange: r }) {
  const { data: n, isLoading: o } = d1(e.id, { enabled: t }), i = n?.comment_reports ?? [], a = e.count?.reports ?? i.length;
  return /* @__PURE__ */ l.jsx(ma, { open: t, onOpenChange: r, children: /* @__PURE__ */ l.jsxs(ya, { "aria-describedby": void 0, children: [
    /* @__PURE__ */ l.jsx(ga, { children: /* @__PURE__ */ l.jsxs(ba, { children: [
      a,
      " ",
      a === 1 ? "report" : "reports"
    ] }) }),
    /* @__PURE__ */ l.jsx("div", { className: "overflow-hidden rounded-md border p-3", children: /* @__PURE__ */ l.jsxs("div", { className: "flex min-w-0 items-start gap-3", children: [
      /* @__PURE__ */ l.jsx(
        xt,
        {
          className: "shrink-0",
          email: e.member?.email,
          name: e.member?.name,
          src: e.member?.avatar_image
        }
      ),
      /* @__PURE__ */ l.jsxs("div", { className: "flex min-w-0 flex-col overflow-hidden", children: [
        /* @__PURE__ */ l.jsxs("div", { className: "flex min-w-0 items-center gap-1 text-sm", children: [
          /* @__PURE__ */ l.jsx("span", { className: "shrink-0 font-semibold", children: e.member ? sr(e.member) : "Deleted member" }),
          /* @__PURE__ */ l.jsx(pa, { className: "shrink-0 text-muted-foreground/50", size: 16 }),
          /* @__PURE__ */ l.jsx("span", { className: "shrink-0 text-muted-foreground", children: e.created_at && Yt(e.created_at) }),
          /* @__PURE__ */ l.jsx("span", { className: "shrink-0 text-muted-foreground", children: "on" }),
          /* @__PURE__ */ l.jsx("span", { className: "min-w-0 truncate font-medium text-gray-800 dark:text-gray-400", children: e.post?.title || "Unknown post" })
        ] }),
        /* @__PURE__ */ l.jsx(
          "div",
          {
            dangerouslySetInnerHTML: { __html: e.html || "" },
            className: "prose mt-2 line-clamp-2 text-sm [&_*]:text-sm [&_*]:leading-[1.5em] [&_p]:m-0"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ l.jsx("div", { className: "-mx-1 max-h-64 overflow-y-auto px-1", children: o ? /* @__PURE__ */ l.jsx("div", { className: "flex justify-center py-4", children: /* @__PURE__ */ l.jsx(jt, { size: "md" }) }) : /* @__PURE__ */ l.jsx("div", { className: "flex flex-col gap-3 pb-1", children: i.map((s) => /* @__PURE__ */ l.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
      /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ l.jsxs("div", { className: "relative shrink-0", children: [
          /* @__PURE__ */ l.jsx(
            xt,
            {
              email: s.member?.email,
              name: s.member?.name,
              src: s.member?.avatar_image
            }
          ),
          /* @__PURE__ */ l.jsx("div", { className: "absolute -right-0.5 -bottom-0.5 flex size-4 items-center justify-center rounded-full bg-red text-white", children: /* @__PURE__ */ l.jsx(da, { className: "size-2.5", fill: "currentColor" }) })
        ] }),
        /* @__PURE__ */ l.jsx("span", { className: "font-medium", children: s.member ? sr(s.member) : "Deleted member" })
      ] }),
      /* @__PURE__ */ l.jsx("span", { className: "shrink-0 text-sm text-muted-foreground", children: Yt(s.created_at) })
    ] }, s.id)) }) }),
    /* @__PURE__ */ l.jsx(va, { children: /* @__PURE__ */ l.jsx(ue, { onClick: () => r(!1), children: "OK" }) })
  ] }) });
}
function Lr({ icon: e, count: t, label: r, to: n, onClick: o, className: i, testId: a }) {
  const s = be("flex items-center gap-1 text-xs text-gray-800", i), c = /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    e,
    /* @__PURE__ */ l.jsx("span", { children: zt(t) })
  ] }), u = n || o;
  return /* @__PURE__ */ l.jsxs(Dn, { children: [
    /* @__PURE__ */ l.jsx(kn, { asChild: !0, children: n ? /* @__PURE__ */ l.jsx(
      la,
      {
        className: be(s, "cursor-pointer hover:opacity-70"),
        "data-testid": a,
        to: n,
        onClick: (f) => {
          f.stopPropagation();
        },
        children: c
      }
    ) : o ? /* @__PURE__ */ l.jsx(
      "button",
      {
        className: be(s, "cursor-pointer hover:opacity-70"),
        "data-testid": a,
        type: "button",
        onClick: (f) => {
          f.stopPropagation(), o();
        },
        children: c
      }
    ) : /* @__PURE__ */ l.jsx("div", { className: s, "data-testid": a, children: c }) }),
    /* @__PURE__ */ l.jsx(In, { children: u ? `View ${r.toLowerCase()}` : r })
  ] });
}
function ic(e, t) {
  if (!t)
    return;
  const r = new URLSearchParams(e);
  return r.set("thread", `is:${t}`), `?${r.toString()}`;
}
function zd({
  comment: e,
  dislikesEnabled: t,
  className: r
}) {
  const [n] = br(), [o, i] = ge(!1), [a, s] = ge("likes"), [c, u] = ge(!1), f = ic(n, e.id), d = e.count?.direct_replies ?? e.replies?.length ?? 0, p = e.count?.likes ?? 0, m = t ? e.count?.dislikes ?? 0 : 0, g = e.count?.reports ?? 0, y = d > 0, b = p > 0, S = m > 0, x = g > 0;
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsxs("div", { className: be("flex items-center gap-6", r), children: [
      /* @__PURE__ */ l.jsx(
        Lr,
        {
          count: d,
          icon: /* @__PURE__ */ l.jsx(jp, { size: 16, strokeWidth: 1.5 }),
          label: "Replies",
          testId: "replies-metric",
          to: y ? f : void 0
        }
      ),
      t ? /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ l.jsx(
          Lr,
          {
            count: p,
            icon: /* @__PURE__ */ l.jsx(gl, { size: 16, strokeWidth: 1.5 }),
            label: "Likes",
            testId: "likes-metric",
            onClick: b ? () => {
              s("likes"), i(!0);
            } : void 0
          }
        ),
        /* @__PURE__ */ l.jsx(
          Lr,
          {
            count: m,
            icon: /* @__PURE__ */ l.jsx(bl, { size: 16, strokeWidth: 1.5 }),
            label: "Dislikes",
            testId: "dislikes-metric",
            onClick: S ? () => {
              s("dislikes"), i(!0);
            } : void 0
          }
        )
      ] }) : /* @__PURE__ */ l.jsx(
        Lr,
        {
          count: p,
          icon: /* @__PURE__ */ l.jsx(pl, { size: 16, strokeWidth: 1.5 }),
          label: "Likes",
          onClick: b ? () => i(!0) : void 0
        }
      ),
      /* @__PURE__ */ l.jsx(
        Lr,
        {
          className: x ? "font-semibold text-red" : void 0,
          count: g,
          icon: /* @__PURE__ */ l.jsx(da, { size: 16, strokeWidth: 1.5 }),
          label: "Reports",
          onClick: x ? () => u(!0) : void 0
        }
      )
    ] }),
    /* @__PURE__ */ l.jsx(
      x1,
      {
        comment: e,
        defaultTab: a,
        dislikesEnabled: t,
        open: o,
        onOpenChange: i
      }
    ),
    /* @__PURE__ */ l.jsx(
      j1,
      {
        comment: e,
        open: c,
        onOpenChange: u
      }
    )
  ] });
}
function S1({ hasReplies: e }) {
  return e ? /* @__PURE__ */ l.jsx(
    "div",
    {
      className: "mb-2 h-full w-px grow rounded bg-gradient-to-b from-muted-foreground/20 from-70% to-transparent",
      "data-testid": "replies-line"
    }
  ) : null;
}
function Yd({ comment: e, dislikesEnabled: t, isReply: r = !1, isSelectedComment: n = !1, selectedCommentId: o }) {
  const [i] = br(), { mutate: a } = Ld(), { mutate: s } = Ud(), { mutate: c } = nc(), u = oc(), f = (e.replies?.length ?? 0) > 0 || (e.count?.direct_replies ?? e.count?.replies ?? 0) > 0, d = !f || r ? "mb-7" : "mb-0";
  return /* @__PURE__ */ l.jsxs("div", { className: `flex w-full flex-row ${d}`, children: [
    /* @__PURE__ */ l.jsxs("div", { className: "mr-2 flex shrink-0 flex-col items-center justify-start md:mr-3", children: [
      /* @__PURE__ */ l.jsx(
        xt,
        {
          className: be("mb-3 size-6 md:mb-4 md:size-8", e.status === "hidden" && "opacity-50"),
          email: e.member?.email,
          name: e.member?.name,
          src: e.member?.avatar_image
        }
      ),
      /* @__PURE__ */ l.jsx(S1, { hasReplies: f && !r })
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "grow", children: /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: "w-full",
        "data-testid": `comment-thread-row-${e.id}`,
        children: [
          /* @__PURE__ */ l.jsxs("div", { className: "flex min-w-0 flex-col", children: [
            /* @__PURE__ */ l.jsx(
              qd,
              {
                canComment: e.member?.can_comment,
                createdAt: e.created_at,
                isHidden: e.status === "hidden",
                isPinned: u && e.pinned,
                memberId: e.member?.id,
                memberName: e.member?.name,
                onUnpinClick: u ? () => c({ id: e.id }) : void 0
              }
            ),
            e.in_reply_to_snippet && n && /* @__PURE__ */ l.jsxs("div", { className: `mb-1 line-clamp-1 text-sm ${e.status === "hidden" && "opacity-50"}`, children: [
              /* @__PURE__ */ l.jsx("span", { className: "text-muted-foreground", children: "Replied to:" }),
              " ",
              /* @__PURE__ */ l.jsx(
                la,
                {
                  className: "text-sm font-normal text-muted-foreground hover:text-foreground",
                  "data-testid": "replied-to-link",
                  to: ic(i, e.in_reply_to_id || e.parent_id) || "",
                  onClick: (p) => {
                    p.stopPropagation();
                  },
                  children: e.in_reply_to_snippet
                }
              )
            ] }),
            /* @__PURE__ */ l.jsx(_d, { item: e }),
            /* @__PURE__ */ l.jsxs("div", { className: "mt-4 flex flex-row flex-wrap items-center gap-3", children: [
              e.status === "published" && /* @__PURE__ */ l.jsxs(ue, { className: "text-gray-800", size: "sm", variant: "outline", onClick: () => a({ id: e.id }), children: [
                /* @__PURE__ */ l.jsx(hl, {}),
                /* @__PURE__ */ l.jsx("span", { className: "max-md:hidden", children: "Hide" })
              ] }),
              e.status === "hidden" && /* @__PURE__ */ l.jsxs(ue, { className: "text-gray-800", size: "sm", variant: "outline", onClick: () => s({ id: e.id }), children: [
                /* @__PURE__ */ l.jsx(ll, {}),
                /* @__PURE__ */ l.jsx("span", { className: "max-md:hidden", children: "Show" })
              ] }),
              /* @__PURE__ */ l.jsx(
                zd,
                {
                  comment: e,
                  dislikesEnabled: t
                }
              ),
              /* @__PURE__ */ l.jsx(
                $d,
                {
                  comment: e
                }
              )
            ] })
          ] }),
          f && e.replies && /* @__PURE__ */ l.jsx("div", { className: "mt-7 mb-4 -ml-2 pl-2 md:mt-8 md:mb-0 md:-ml-3 md:pl-3", children: e.replies.map((p) => /* @__PURE__ */ l.jsx(
            Yd,
            {
              comment: p,
              dislikesEnabled: t,
              isReply: !0,
              selectedCommentId: o
            },
            p.id
          )) })
        ]
      }
    ) })
  ] });
}
const N1 = ({
  selectedComment: e,
  dislikesEnabled: t,
  replies: r,
  selectedCommentId: n,
  fetchNextPage: o,
  hasNextPage: i,
  isFetchingNextPage: a
}) => {
  const s = { ...e, replies: r };
  return /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col", "data-testid": "comment-thread-list", children: [
    /* @__PURE__ */ l.jsx(
      Yd,
      {
        comment: s,
        dislikesEnabled: t,
        isSelectedComment: !0,
        selectedCommentId: n
      }
    ),
    i && /* @__PURE__ */ l.jsx("div", { className: "flex justify-center pb-4", children: /* @__PURE__ */ l.jsx(
      ue,
      {
        disabled: a,
        variant: "outline",
        onClick: () => o(),
        children: a ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(jt, { size: "sm" }),
          "Loading..."
        ] }) : "Load more replies"
      }
    ) })
  ] });
}, P1 = ({
  commentId: e,
  dislikesEnabled: t,
  open: r,
  onOpenChange: n
}) => {
  const {
    data: o,
    isLoading: i,
    isError: a,
    fetchNextPage: s,
    hasNextPage: c,
    isFetchingNextPage: u
  } = g1(e ?? "", {
    dislikesEnabled: t,
    enabled: r && !!e
  }), { data: f, isLoading: d, isError: p } = l1(e ?? "", {
    dislikesEnabled: t,
    enabled: r && !!e
  }), m = i || d, g = p || a && !f, y = f?.comments?.[0], b = o?.comments || [];
  return /* @__PURE__ */ l.jsx(Hp, { open: r, onOpenChange: n, children: /* @__PURE__ */ l.jsxs(Vp, { className: "overflow-y-auto px-6 pt-0 sm:max-w-[420px]", children: [
    /* @__PURE__ */ l.jsx(Gp, { className: "sticky top-0 z-40 -mx-6 bg-background/60 p-6 backdrop-blur", children: /* @__PURE__ */ l.jsx(Kp, { className: "text-md", children: "Thread" }) }),
    y?.post && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ l.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ l.jsx("h3", { className: "line-clamp-1 text-xl font-semibold text-foreground", children: y.post.title }),
          y.post.excerpt && /* @__PURE__ */ l.jsx("p", { className: "mt-1 line-clamp-2 text-sm text-muted-foreground", children: y.post.excerpt })
        ] }),
        y.post.feature_image && /* @__PURE__ */ l.jsx(
          "img",
          {
            alt: y.post.title || "Post feature image",
            className: "hidden aspect-video h-18 shrink-0 rounded object-cover lg:block",
            src: y.post.feature_image
          }
        )
      ] }),
      /* @__PURE__ */ l.jsx(Rp, { className: "-mx-6 my-6 w-auto" })
    ] }),
    /* @__PURE__ */ l.jsx("div", { children: m ? /* @__PURE__ */ l.jsx("div", { className: "flex h-full items-center justify-center py-8", children: /* @__PURE__ */ l.jsx(jt, { size: "lg" }) }) : g || !y ? /* @__PURE__ */ l.jsx("div", { className: "flex h-full items-center justify-center py-8", children: /* @__PURE__ */ l.jsx(
      Qi,
      {
        actions: /* @__PURE__ */ l.jsx(ue, { variant: "outline", onClick: () => n(!1), children: "Back to comments" }),
        description: "This thread may have been deleted or doesn't exist.",
        title: "Thread not found",
        children: /* @__PURE__ */ l.jsx(Ki, {})
      }
    ) }) : /* @__PURE__ */ l.jsx(
      N1,
      {
        dislikesEnabled: t,
        fetchNextPage: s,
        hasNextPage: c,
        isFetchingNextPage: u,
        replies: b,
        selectedComment: y,
        selectedCommentId: e ?? ""
      }
    ) })
  ] }) });
}, Yo = /* @__PURE__ */ new Map(), sa = "ghostVirtualListScrollPosition", Qc = 150, T1 = 500;
function Zo() {
  if (!(typeof window > "u"))
    return window.history.state;
}
function ca(e) {
  const t = e?.key;
  if (typeof t == "string" || typeof t == "number")
    return String(t);
  const r = e?.idx;
  if (typeof r == "number")
    return String(r);
}
function Jc(e, t) {
  const r = ca(e);
  if (r)
    return `${r}::${t}`;
}
function E1(e, t) {
  const r = e?.[sa];
  if (!r || typeof r != "object")
    return;
  const n = r[t];
  if (typeof n == "number")
    return n;
}
function O1(e, t, r) {
  if (typeof window > "u")
    return;
  const n = e?.[sa], o = {
    ...e ?? {},
    [sa]: {
      ...n && typeof n == "object" ? n : {},
      [t]: r
    }
  };
  window.history.replaceState(o, "");
}
function R1({ parentRef: e, enabled: t = !0, isLoading: r = !1 }) {
  const n = cp(), [o, i] = ge(null), a = te(null), s = te(0), c = te(0), u = te(0), f = te(null), d = te(/* @__PURE__ */ new Set()), p = n.pathname + n.search;
  De(() => {
    if (!t || !e.current)
      return;
    const m = up(e.current);
    i(m);
  }, [t, e]), De(() => {
    if (!t || !o)
      return;
    const m = Zo(), g = ca(m), y = Jc(m, p), b = () => {
      f.current !== null && (window.clearTimeout(f.current), f.current = null);
    }, S = (M) => {
      y && Yo.set(y, M);
      const A = Zo();
      ca(A) === g && O1(A, p, M), c.current = Date.now(), u.current = M;
    }, x = ({ persistToHistory: M = !0 } = {}) => {
      if (b(), !M) {
        const A = s.current;
        y && Yo.set(y, A), c.current = Date.now(), u.current = A;
        return;
      }
      S(s.current);
    }, P = () => {
      const M = Date.now();
      if (Math.abs(s.current - u.current) >= T1 || M - c.current >= Qc) {
        b(), S(s.current);
        return;
      }
      f.current === null && (f.current = window.setTimeout(() => {
        f.current = null, S(s.current);
      }, Qc));
    }, E = () => {
      s.current = o.scrollTop, P();
    }, I = () => {
      x();
    };
    return s.current = o.scrollTop, o.addEventListener("scroll", E), window.addEventListener("pagehide", I), () => {
      x({ persistToHistory: !1 }), o.removeEventListener("scroll", E), window.removeEventListener("pagehide", I);
    };
  }, [t, p, o]), De(() => {
    const m = Zo(), g = Jc(m, p), y = (g ? Yo.get(g) : void 0) ?? E1(m, p);
    if (!(!t || !o || r)) {
      if (y !== void 0 && a.current !== p) {
        a.current = p;
        let b = 0;
        const S = 20, x = () => {
          for (const I of d.current)
            window.clearTimeout(I);
          d.current.clear();
        }, P = (I, M) => {
          const A = window.setTimeout(() => {
            d.current.delete(A), I();
          }, M);
          d.current.add(A);
        }, E = () => {
          if (b += 1, !o)
            return;
          const I = o.scrollTop, M = o.scrollHeight, A = o.clientHeight, W = M - A;
          if (y > W && b < S) {
            P(E, 100);
            return;
          }
          if (Math.abs(y - I) > 5) {
            const L = Math.min(y, W);
            o.scrollTop = L;
          }
        };
        return P(E, 150), () => x();
      }
      a.current = p;
    }
  }, [t, p, o, r]);
}
const Xc = ({ height: e }) => /* @__PURE__ */ l.jsx("div", { "aria-hidden": "true", className: "flex", children: /* @__PURE__ */ l.jsx("div", { className: "flex", style: { height: e } }) }), A1 = gr(function(t, r) {
  return /* @__PURE__ */ l.jsx(
    "div",
    {
      ref: r,
      ...t,
      "aria-hidden": "true",
      className: "relative flex flex-col",
      children: /* @__PURE__ */ l.jsx("div", { className: "relative z-10 h-24 animate-pulse", children: /* @__PURE__ */ l.jsx("div", { className: "h-full rounded-md bg-muted", "data-testid": "loading-placeholder" }) })
    }
  );
});
function D1({
  items: e,
  totalItems: t,
  hasNextPage: r,
  isFetchingNextPage: n,
  fetchNextPage: o,
  resetKey: i,
  onAddFilter: a,
  isLoading: s,
  dislikesEnabled: c
}) {
  const u = te(null), { visibleItemCount: f, canLoadMore: d, loadMore: p } = Qp(t, { resetKey: i }), [m, g] = br(), [y, b] = ge(!1), [S, x] = ge(null), { mutate: P } = Ld(), { mutate: E } = Ud(), { mutate: I } = nc(), M = oc(), A = (H) => {
    if (b(H), !H) {
      const V = new URLSearchParams(m);
      V.delete("thread"), g(V, { replace: !0 });
    }
  };
  De(() => {
    const H = m.get("thread");
    if (H) {
      const V = H.match(/^is:(.+)$/);
      if (V && V[1]) {
        const D = V[1];
        x(D), b(!0);
      } else
        b(!1), x(null);
    } else
      b(!1), x(null);
  }, [m]), R1({ parentRef: u, isLoading: s });
  const { visibleItems: W, spaceBefore: L, spaceAfter: K } = Jp({
    items: e,
    totalItems: f,
    hasNextPage: r,
    isFetchingNextPage: n,
    fetchNextPage: o,
    parentRef: u
  });
  return /* @__PURE__ */ l.jsx(ul, { children: /* @__PURE__ */ l.jsxs("div", { ref: u, className: "overflow-hidden border-t", children: [
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "flex flex-col",
        "data-testid": "comments-list",
        children: /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ l.jsx(Xc, { height: L }),
          W.map(({ key: H, virtualItem: V, item: D, props: T }) => V.index > e.length - 1 ? /* @__PURE__ */ l.jsx(A1, { ...T }, H) : /* @__PURE__ */ l.jsxs(
            "div",
            {
              ...T,
              className: "grid w-full grid-cols-1 items-start justify-between gap-4 border-b p-3 hover:bg-muted/50 md:p-5 lg:grid-cols-[minmax(0,1fr)_144px]",
              "data-testid": "comment-list-row",
              onClick: () => {
                y && A(!1);
              },
              children: [
                /* @__PURE__ */ l.jsxs("div", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ l.jsx(
                    xt,
                    {
                      className: be("mt-0.5 size-6 md:size-8", D.status === "hidden" && "opacity-50"),
                      email: D.member?.email,
                      name: D.member?.name,
                      src: D.member?.avatar_image
                    }
                  ),
                  /* @__PURE__ */ l.jsxs("div", { className: "flex min-w-0 flex-col gap-3", children: [
                    /* @__PURE__ */ l.jsxs("div", { children: [
                      /* @__PURE__ */ l.jsx(
                        qd,
                        {
                          canComment: D.member?.can_comment,
                          createdAt: D.created_at,
                          isHidden: D.status === "hidden",
                          isPinned: M && D.pinned,
                          memberId: D.member?.id,
                          memberName: D.member?.name,
                          postTitle: D.post?.title,
                          onAuthorClick: D.member?.id ? () => a("author", D.member.id) : void 0,
                          onPostClick: D.post?.id ? () => a("post", D.post.id) : void 0,
                          onUnpinClick: M ? () => I({ id: D.id }) : void 0
                        }
                      ),
                      D.in_reply_to_snippet && /* @__PURE__ */ l.jsxs("div", { className: `mb-1 line-clamp-1 max-w-3xl ${D.status === "hidden" && "opacity-50"}`, children: [
                        /* @__PURE__ */ l.jsx("span", { className: "text-muted-foreground", children: "Replied to:" }),
                        " ",
                        /* @__PURE__ */ l.jsx(
                          la,
                          {
                            className: "text-sm font-normal text-muted-foreground hover:text-foreground",
                            "data-testid": "replied-to-link",
                            to: ic(m, D.in_reply_to_id || D.parent_id) || "",
                            onClick: (O) => {
                              O.stopPropagation();
                            },
                            children: D.in_reply_to_snippet
                          }
                        )
                      ] })
                    ] }),
                    /* @__PURE__ */ l.jsx(_d, { item: D }),
                    /* @__PURE__ */ l.jsxs("div", { className: "flex flex-row flex-nowrap items-center gap-3", children: [
                      D.status === "published" && /* @__PURE__ */ l.jsxs(ue, { className: "text-foreground", size: "sm", variant: "outline", onClick: () => P({ id: D.id }), children: [
                        /* @__PURE__ */ l.jsx(hl, {}),
                        "Hide"
                      ] }),
                      D.status === "hidden" && /* @__PURE__ */ l.jsxs(ue, { className: "text-foreground", size: "sm", variant: "outline", onClick: () => E({ id: D.id }), children: [
                        /* @__PURE__ */ l.jsx(ll, {}),
                        "Show"
                      ] }),
                      /* @__PURE__ */ l.jsx(
                        zd,
                        {
                          className: "ml-2",
                          comment: D,
                          dislikesEnabled: c
                        }
                      ),
                      /* @__PURE__ */ l.jsx(
                        $d,
                        {
                          comment: D
                        }
                      )
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ l.jsx("div", { children: D.post?.feature_image ? /* @__PURE__ */ l.jsx(
                  "img",
                  {
                    alt: D.post.title || "Post feature image",
                    className: `hidden aspect-video w-36 rounded object-cover lg:block ${D.status === "hidden" && "opacity-50"}`,
                    src: D.post.feature_image
                  }
                ) : null })
              ]
            },
            H
          )),
          /* @__PURE__ */ l.jsx(Xc, { height: K })
        ] })
      }
    ),
    d && /* @__PURE__ */ l.jsx(Xp, { isLoading: n, onClick: p }),
    /* @__PURE__ */ l.jsx(
      P1,
      {
        commentId: S,
        dislikesEnabled: c,
        open: y,
        onOpenChange: A
      }
    )
  ] }) });
}
var Pn = {}, Wo = {}, Ho = {}, Vo, eu;
function Zd() {
  return eu || (eu = 1, Vo = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var t = {}, r = /* @__PURE__ */ Symbol("test"), n = Object(r);
    if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
      return !1;
    var o = 42;
    t[r] = o;
    for (var i in t)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
      return !1;
    var a = Object.getOwnPropertySymbols(t);
    if (a.length !== 1 || a[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var s = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(t, r)
      );
      if (s.value !== o || s.enumerable !== !0)
        return !1;
    }
    return !0;
  }), Vo;
}
var Go, tu;
function Ro() {
  if (tu) return Go;
  tu = 1;
  var e = Zd();
  return Go = function() {
    return e() && !!Symbol.toStringTag;
  }, Go;
}
var Ko, ru;
function Wd() {
  return ru || (ru = 1, Ko = Object), Ko;
}
var Qo, nu;
function k1() {
  return nu || (nu = 1, Qo = Error), Qo;
}
var Jo, ou;
function I1() {
  return ou || (ou = 1, Jo = EvalError), Jo;
}
var Xo, iu;
function C1() {
  return iu || (iu = 1, Xo = RangeError), Xo;
}
var ei, au;
function M1() {
  return au || (au = 1, ei = ReferenceError), ei;
}
var ti, su;
function Hd() {
  return su || (su = 1, ti = SyntaxError), ti;
}
var ri, cu;
function bn() {
  return cu || (cu = 1, ri = TypeError), ri;
}
var ni, uu;
function _1() {
  return uu || (uu = 1, ni = URIError), ni;
}
var oi, lu;
function F1() {
  return lu || (lu = 1, oi = Math.abs), oi;
}
var ii, fu;
function B1() {
  return fu || (fu = 1, ii = Math.floor), ii;
}
var ai, du;
function L1() {
  return du || (du = 1, ai = Math.max), ai;
}
var si, pu;
function U1() {
  return pu || (pu = 1, si = Math.min), si;
}
var ci, hu;
function q1() {
  return hu || (hu = 1, ci = Math.pow), ci;
}
var ui, mu;
function $1() {
  return mu || (mu = 1, ui = Math.round), ui;
}
var li, yu;
function z1() {
  return yu || (yu = 1, li = Number.isNaN || function(t) {
    return t !== t;
  }), li;
}
var fi, gu;
function Y1() {
  if (gu) return fi;
  gu = 1;
  var e = /* @__PURE__ */ z1();
  return fi = function(r) {
    return e(r) || r === 0 ? r : r < 0 ? -1 : 1;
  }, fi;
}
var di, bu;
function Z1() {
  return bu || (bu = 1, di = Object.getOwnPropertyDescriptor), di;
}
var pi, vu;
function Mr() {
  if (vu) return pi;
  vu = 1;
  var e = /* @__PURE__ */ Z1();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return pi = e, pi;
}
var hi, wu;
function Ao() {
  if (wu) return hi;
  wu = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return hi = e, hi;
}
var mi, xu;
function W1() {
  if (xu) return mi;
  xu = 1;
  var e = typeof Symbol < "u" && Symbol, t = Zd();
  return mi = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof /* @__PURE__ */ Symbol("bar") != "symbol" ? !1 : t();
  }, mi;
}
var yi, ju;
function Vd() {
  return ju || (ju = 1, yi = typeof Reflect < "u" && Reflect.getPrototypeOf || null), yi;
}
var gi, Su;
function Gd() {
  if (Su) return gi;
  Su = 1;
  var e = /* @__PURE__ */ Wd();
  return gi = e.getPrototypeOf || null, gi;
}
var bi, Nu;
function H1() {
  if (Nu) return bi;
  Nu = 1;
  var e = "Function.prototype.bind called on incompatible ", t = Object.prototype.toString, r = Math.max, n = "[object Function]", o = function(c, u) {
    for (var f = [], d = 0; d < c.length; d += 1)
      f[d] = c[d];
    for (var p = 0; p < u.length; p += 1)
      f[p + c.length] = u[p];
    return f;
  }, i = function(c, u) {
    for (var f = [], d = u, p = 0; d < c.length; d += 1, p += 1)
      f[p] = c[d];
    return f;
  }, a = function(s, c) {
    for (var u = "", f = 0; f < s.length; f += 1)
      u += s[f], f + 1 < s.length && (u += c);
    return u;
  };
  return bi = function(c) {
    var u = this;
    if (typeof u != "function" || t.apply(u) !== n)
      throw new TypeError(e + u);
    for (var f = i(arguments, 1), d, p = function() {
      if (this instanceof d) {
        var S = u.apply(
          this,
          o(f, arguments)
        );
        return Object(S) === S ? S : this;
      }
      return u.apply(
        c,
        o(f, arguments)
      );
    }, m = r(0, u.length - f.length), g = [], y = 0; y < m; y++)
      g[y] = "$" + y;
    if (d = Function("binder", "return function (" + a(g, ",") + "){ return binder.apply(this,arguments); }")(p), u.prototype) {
      var b = function() {
      };
      b.prototype = u.prototype, d.prototype = new b(), b.prototype = null;
    }
    return d;
  }, bi;
}
var vi, Pu;
function vn() {
  if (Pu) return vi;
  Pu = 1;
  var e = H1();
  return vi = Function.prototype.bind || e, vi;
}
var wi, Tu;
function ac() {
  return Tu || (Tu = 1, wi = Function.prototype.call), wi;
}
var xi, Eu;
function sc() {
  return Eu || (Eu = 1, xi = Function.prototype.apply), xi;
}
var ji, Ou;
function V1() {
  return Ou || (Ou = 1, ji = typeof Reflect < "u" && Reflect && Reflect.apply), ji;
}
var Si, Ru;
function Kd() {
  if (Ru) return Si;
  Ru = 1;
  var e = vn(), t = sc(), r = ac(), n = V1();
  return Si = n || e.call(r, t), Si;
}
var Ni, Au;
function cc() {
  if (Au) return Ni;
  Au = 1;
  var e = vn(), t = /* @__PURE__ */ bn(), r = ac(), n = Kd();
  return Ni = function(i) {
    if (i.length < 1 || typeof i[0] != "function")
      throw new t("a function is required");
    return n(e, r, i);
  }, Ni;
}
var Pi, Du;
function G1() {
  if (Du) return Pi;
  Du = 1;
  var e = cc(), t = /* @__PURE__ */ Mr(), r;
  try {
    r = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (a) {
    if (!a || typeof a != "object" || !("code" in a) || a.code !== "ERR_PROTO_ACCESS")
      throw a;
  }
  var n = !!r && t && t(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), o = Object, i = o.getPrototypeOf;
  return Pi = n && typeof n.get == "function" ? e([n.get]) : typeof i == "function" ? (
    /** @type {import('./get')} */
    function(s) {
      return i(s == null ? s : o(s));
    }
  ) : !1, Pi;
}
var Ti, ku;
function uc() {
  if (ku) return Ti;
  ku = 1;
  var e = Vd(), t = Gd(), r = /* @__PURE__ */ G1();
  return Ti = e ? function(o) {
    return e(o);
  } : t ? function(o) {
    if (!o || typeof o != "object" && typeof o != "function")
      throw new TypeError("getProto: not an object");
    return t(o);
  } : r ? function(o) {
    return r(o);
  } : null, Ti;
}
var Ei, Iu;
function Qd() {
  if (Iu) return Ei;
  Iu = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, r = vn();
  return Ei = r.call(e, t), Ei;
}
var Oi, Cu;
function Jd() {
  if (Cu) return Oi;
  Cu = 1;
  var e, t = /* @__PURE__ */ Wd(), r = /* @__PURE__ */ k1(), n = /* @__PURE__ */ I1(), o = /* @__PURE__ */ C1(), i = /* @__PURE__ */ M1(), a = /* @__PURE__ */ Hd(), s = /* @__PURE__ */ bn(), c = /* @__PURE__ */ _1(), u = /* @__PURE__ */ F1(), f = /* @__PURE__ */ B1(), d = /* @__PURE__ */ L1(), p = /* @__PURE__ */ U1(), m = /* @__PURE__ */ q1(), g = /* @__PURE__ */ $1(), y = /* @__PURE__ */ Y1(), b = Function, S = function(B) {
    try {
      return b('"use strict"; return (' + B + ").constructor;")();
    } catch {
    }
  }, x = /* @__PURE__ */ Mr(), P = /* @__PURE__ */ Ao(), E = function() {
    throw new s();
  }, I = x ? (function() {
    try {
      return arguments.callee, E;
    } catch {
      try {
        return x(arguments, "callee").get;
      } catch {
        return E;
      }
    }
  })() : E, M = W1()(), A = uc(), W = Gd(), L = Vd(), K = sc(), H = ac(), V = {}, D = typeof Uint8Array > "u" || !A ? e : A(Uint8Array), T = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
    "%ArrayIteratorPrototype%": M && A ? A([][Symbol.iterator]()) : e,
    "%AsyncFromSyncIteratorPrototype%": e,
    "%AsyncFunction%": V,
    "%AsyncGenerator%": V,
    "%AsyncGeneratorFunction%": V,
    "%AsyncIteratorPrototype%": V,
    "%Atomics%": typeof Atomics > "u" ? e : Atomics,
    "%BigInt%": typeof BigInt > "u" ? e : BigInt,
    "%BigInt64Array%": typeof BigInt64Array > "u" ? e : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array > "u" ? e : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView > "u" ? e : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": r,
    "%eval%": eval,
    // eslint-disable-line no-eval
    "%EvalError%": n,
    "%Float16Array%": typeof Float16Array > "u" ? e : Float16Array,
    "%Float32Array%": typeof Float32Array > "u" ? e : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? e : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? e : FinalizationRegistry,
    "%Function%": b,
    "%GeneratorFunction%": V,
    "%Int8Array%": typeof Int8Array > "u" ? e : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? e : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? e : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": M && A ? A(A([][Symbol.iterator]())) : e,
    "%JSON%": typeof JSON == "object" ? JSON : e,
    "%Map%": typeof Map > "u" ? e : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !M || !A ? e : A((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": t,
    "%Object.getOwnPropertyDescriptor%": x,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? e : Promise,
    "%Proxy%": typeof Proxy > "u" ? e : Proxy,
    "%RangeError%": o,
    "%ReferenceError%": i,
    "%Reflect%": typeof Reflect > "u" ? e : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? e : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !M || !A ? e : A((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": M && A ? A(""[Symbol.iterator]()) : e,
    "%Symbol%": M ? Symbol : e,
    "%SyntaxError%": a,
    "%ThrowTypeError%": I,
    "%TypedArray%": D,
    "%TypeError%": s,
    "%Uint8Array%": typeof Uint8Array > "u" ? e : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? e : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? e : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? e : Uint32Array,
    "%URIError%": c,
    "%WeakMap%": typeof WeakMap > "u" ? e : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? e : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? e : WeakSet,
    "%Function.prototype.call%": H,
    "%Function.prototype.apply%": K,
    "%Object.defineProperty%": P,
    "%Object.getPrototypeOf%": W,
    "%Math.abs%": u,
    "%Math.floor%": f,
    "%Math.max%": d,
    "%Math.min%": p,
    "%Math.pow%": m,
    "%Math.round%": g,
    "%Math.sign%": y,
    "%Reflect.getPrototypeOf%": L
  };
  if (A)
    try {
      null.error;
    } catch (B) {
      var k = A(A(B));
      T["%Error.prototype%"] = k;
    }
  var O = function B(F) {
    var G;
    if (F === "%AsyncFunction%")
      G = S("async function () {}");
    else if (F === "%GeneratorFunction%")
      G = S("function* () {}");
    else if (F === "%AsyncGeneratorFunction%")
      G = S("async function* () {}");
    else if (F === "%AsyncGenerator%") {
      var q = B("%AsyncGeneratorFunction%");
      q && (G = q.prototype);
    } else if (F === "%AsyncIteratorPrototype%") {
      var J = B("%AsyncGenerator%");
      J && A && (G = A(J.prototype));
    }
    return T[F] = G, G;
  }, R = {
    __proto__: null,
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"]
  }, C = vn(), j = /* @__PURE__ */ Qd(), Me = C.call(H, Array.prototype.concat), fe = C.call(K, Array.prototype.splice), h = C.call(H, String.prototype.replace), v = C.call(H, String.prototype.slice), N = C.call(H, RegExp.prototype.exec), U = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, _ = /\\(\\)?/g, z = function(F) {
    var G = v(F, 0, 1), q = v(F, -1);
    if (G === "%" && q !== "%")
      throw new a("invalid intrinsic syntax, expected closing `%`");
    if (q === "%" && G !== "%")
      throw new a("invalid intrinsic syntax, expected opening `%`");
    var J = [];
    return h(F, U, function(Q, me, oe, qe) {
      J[J.length] = oe ? h(qe, _, "$1") : me || Q;
    }), J;
  }, $ = function(F, G) {
    var q = F, J;
    if (j(R, q) && (J = R[q], q = "%" + J[0] + "%"), j(T, q)) {
      var Q = T[q];
      if (Q === V && (Q = O(q)), typeof Q > "u" && !G)
        throw new s("intrinsic " + F + " exists, but is not available. Please file an issue!");
      return {
        alias: J,
        name: q,
        value: Q
      };
    }
    throw new a("intrinsic " + F + " does not exist!");
  };
  return Oi = function(F, G) {
    if (typeof F != "string" || F.length === 0)
      throw new s("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof G != "boolean")
      throw new s('"allowMissing" argument must be a boolean');
    if (N(/^%?[^%]*%?$/, F) === null)
      throw new a("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var q = z(F), J = q.length > 0 ? q[0] : "", Q = $("%" + J + "%", G), me = Q.name, oe = Q.value, qe = !1, ye = Q.alias;
    ye && (J = ye[0], fe(q, Me([0, 1], ye)));
    for (var w = 1, _e = !0; w < q.length; w += 1) {
      var we = q[w], $e = v(we, 0, 1), xn = v(we, -1);
      if (($e === '"' || $e === "'" || $e === "`" || xn === '"' || xn === "'" || xn === "`") && $e !== xn)
        throw new a("property names with quotes must have matching quotes");
      if ((we === "constructor" || !_e) && (qe = !0), J += "." + we, me = "%" + J + "%", j(T, me))
        oe = T[me];
      else if (oe != null) {
        if (!(we in oe)) {
          if (!G)
            throw new s("base intrinsic for " + F + " exists, but the property is not available.");
          return;
        }
        if (x && w + 1 >= q.length) {
          var jn = x(oe, we);
          _e = !!jn, _e && "get" in jn && !("originalValue" in jn.get) ? oe = jn.get : oe = oe[we];
        } else
          _e = j(oe, we), oe = oe[we];
        _e && !qe && (T[me] = oe);
      }
    }
    return oe;
  }, Oi;
}
var Ri, Mu;
function wn() {
  if (Mu) return Ri;
  Mu = 1;
  var e = /* @__PURE__ */ Jd(), t = cc(), r = t([e("%String.prototype.indexOf%")]);
  return Ri = function(o, i) {
    var a = (
      /** @type {(this: unknown, ...args: unknown[]) => unknown} */
      e(o, !!i)
    );
    return typeof a == "function" && r(o, ".prototype.") > -1 ? t(
      /** @type {const} */
      [a]
    ) : a;
  }, Ri;
}
var Ai, _u;
function K1() {
  if (_u) return Ai;
  _u = 1;
  var e = Ro()(), t = /* @__PURE__ */ wn(), r = t("Object.prototype.toString"), n = function(s) {
    return e && s && typeof s == "object" && Symbol.toStringTag in s ? !1 : r(s) === "[object Arguments]";
  }, o = function(s) {
    return n(s) ? !0 : s !== null && typeof s == "object" && "length" in s && typeof s.length == "number" && s.length >= 0 && r(s) !== "[object Array]" && "callee" in s && r(s.callee) === "[object Function]";
  }, i = (function() {
    return n(arguments);
  })();
  return n.isLegacyArguments = o, Ai = i ? n : o, Ai;
}
var Di, Fu;
function Q1() {
  if (Fu) return Di;
  Fu = 1;
  var e = /* @__PURE__ */ wn(), t = Ro()(), r = /* @__PURE__ */ Qd(), n = /* @__PURE__ */ Mr(), o;
  if (t) {
    var i = e("RegExp.prototype.exec"), a = {}, s = function() {
      throw a;
    }, c = {
      toString: s,
      valueOf: s
    };
    typeof Symbol.toPrimitive == "symbol" && (c[Symbol.toPrimitive] = s), o = function(p) {
      if (!p || typeof p != "object")
        return !1;
      var m = (
        /** @type {NonNullable<typeof gOPD>} */
        n(
          /** @type {{ lastIndex?: unknown }} */
          p,
          "lastIndex"
        )
      ), g = m && r(m, "value");
      if (!g)
        return !1;
      try {
        i(
          p,
          /** @type {string} */
          /** @type {unknown} */
          c
        );
      } catch (y) {
        return y === a;
      }
    };
  } else {
    var u = e("Object.prototype.toString"), f = "[object RegExp]";
    o = function(p) {
      return !p || typeof p != "object" && typeof p != "function" ? !1 : u(p) === f;
    };
  }
  return Di = o, Di;
}
var ki, Bu;
function J1() {
  if (Bu) return ki;
  Bu = 1;
  var e = /* @__PURE__ */ wn(), t = Q1(), r = e("RegExp.prototype.exec"), n = /* @__PURE__ */ bn();
  return ki = function(i) {
    if (!t(i))
      throw new n("`regex` must be a RegExp");
    return function(s) {
      return r(i, s) !== null;
    };
  }, ki;
}
var Ii, Lu;
function X1() {
  if (Lu) return Ii;
  Lu = 1;
  const e = (
    /** @type {GeneratorFunctionConstructor} */
    (function* () {
    }).constructor
  );
  return Ii = () => e, Ii;
}
var Ci, Uu;
function e0() {
  if (Uu) return Ci;
  Uu = 1;
  var e = /* @__PURE__ */ wn(), t = /* @__PURE__ */ J1(), r = t(/^\s*(?:function)?\*/), n = Ro()(), o = uc(), i = e("Object.prototype.toString"), a = e("Function.prototype.toString"), s = /* @__PURE__ */ X1();
  return Ci = function(u) {
    if (typeof u != "function")
      return !1;
    if (r(a(u)))
      return !0;
    if (!n) {
      var f = i(u);
      return f === "[object GeneratorFunction]";
    }
    if (!o)
      return !1;
    var d = s();
    return d && o(u) === d.prototype;
  }, Ci;
}
var Mi, qu;
function t0() {
  if (qu) return Mi;
  qu = 1;
  var e = Function.prototype.toString, t = typeof Reflect == "object" && Reflect !== null && Reflect.apply, r, n;
  if (typeof t == "function" && typeof Object.defineProperty == "function")
    try {
      r = Object.defineProperty({}, "length", {
        get: function() {
          throw n;
        }
      }), n = {}, t(function() {
        throw 42;
      }, null, r);
    } catch (x) {
      x !== n && (t = null);
    }
  else
    t = null;
  var o = /^\s*class\b/, i = function(P) {
    try {
      var E = e.call(P);
      return o.test(E);
    } catch {
      return !1;
    }
  }, a = function(P) {
    try {
      return i(P) ? !1 : (e.call(P), !0);
    } catch {
      return !1;
    }
  }, s = Object.prototype.toString, c = "[object Object]", u = "[object Function]", f = "[object GeneratorFunction]", d = "[object HTMLAllCollection]", p = "[object HTML document.all class]", m = "[object HTMLCollection]", g = typeof Symbol == "function" && !!Symbol.toStringTag, y = !(0 in [,]), b = function() {
    return !1;
  };
  if (typeof document == "object") {
    var S = document.all;
    s.call(S) === s.call(document.all) && (b = function(P) {
      if ((y || !P) && (typeof P > "u" || typeof P == "object"))
        try {
          var E = s.call(P);
          return (E === d || E === p || E === m || E === c) && P("") == null;
        } catch {
        }
      return !1;
    });
  }
  return Mi = t ? function(P) {
    if (b(P))
      return !0;
    if (!P || typeof P != "function" && typeof P != "object")
      return !1;
    try {
      t(P, null, r);
    } catch (E) {
      if (E !== n)
        return !1;
    }
    return !i(P) && a(P);
  } : function(P) {
    if (b(P))
      return !0;
    if (!P || typeof P != "function" && typeof P != "object")
      return !1;
    if (g)
      return a(P);
    if (i(P))
      return !1;
    var E = s.call(P);
    return E !== u && E !== f && !/^\[object HTML/.test(E) ? !1 : a(P);
  }, Mi;
}
var _i, $u;
function r0() {
  if ($u) return _i;
  $u = 1;
  var e = t0(), t = Object.prototype.toString, r = Object.prototype.hasOwnProperty, n = function(c, u, f) {
    for (var d = 0, p = c.length; d < p; d++)
      r.call(c, d) && (f == null ? u(c[d], d, c) : u.call(f, c[d], d, c));
  }, o = function(c, u, f) {
    for (var d = 0, p = c.length; d < p; d++)
      f == null ? u(c.charAt(d), d, c) : u.call(f, c.charAt(d), d, c);
  }, i = function(c, u, f) {
    for (var d in c)
      r.call(c, d) && (f == null ? u(c[d], d, c) : u.call(f, c[d], d, c));
  };
  function a(s) {
    return t.call(s) === "[object Array]";
  }
  return _i = function(c, u, f) {
    if (!e(u))
      throw new TypeError("iterator must be a function");
    var d;
    arguments.length >= 3 && (d = f), a(c) ? n(c, u, d) : typeof c == "string" ? o(c, u, d) : i(c, u, d);
  }, _i;
}
var Fi, zu;
function n0() {
  return zu || (zu = 1, Fi = [
    "Float16Array",
    "Float32Array",
    "Float64Array",
    "Int8Array",
    "Int16Array",
    "Int32Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Uint16Array",
    "Uint32Array",
    "BigInt64Array",
    "BigUint64Array"
  ]), Fi;
}
var Bi, Yu;
function o0() {
  if (Yu) return Bi;
  Yu = 1;
  var e = /* @__PURE__ */ n0(), t = typeof globalThis > "u" ? cl : globalThis;
  return Bi = function() {
    for (var n = [], o = 0; o < e.length; o++)
      typeof t[e[o]] == "function" && (n[n.length] = e[o]);
    return n;
  }, Bi;
}
var Li = { exports: {} }, Ui, Zu;
function i0() {
  if (Zu) return Ui;
  Zu = 1;
  var e = /* @__PURE__ */ Ao(), t = /* @__PURE__ */ Hd(), r = /* @__PURE__ */ bn(), n = /* @__PURE__ */ Mr();
  return Ui = function(i, a, s) {
    if (!i || typeof i != "object" && typeof i != "function")
      throw new r("`obj` must be an object or a function`");
    if (typeof a != "string" && typeof a != "symbol")
      throw new r("`property` must be a string or a symbol`");
    if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
      throw new r("`nonEnumerable`, if provided, must be a boolean or null");
    if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
      throw new r("`nonWritable`, if provided, must be a boolean or null");
    if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
      throw new r("`nonConfigurable`, if provided, must be a boolean or null");
    if (arguments.length > 6 && typeof arguments[6] != "boolean")
      throw new r("`loose`, if provided, must be a boolean");
    var c = arguments.length > 3 ? arguments[3] : null, u = arguments.length > 4 ? arguments[4] : null, f = arguments.length > 5 ? arguments[5] : null, d = arguments.length > 6 ? arguments[6] : !1, p = !!n && n(i, a);
    if (e)
      e(i, a, {
        configurable: f === null && p ? p.configurable : !f,
        enumerable: c === null && p ? p.enumerable : !c,
        value: s,
        writable: u === null && p ? p.writable : !u
      });
    else if (d || !c && !u && !f)
      i[a] = s;
    else
      throw new t("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
  }, Ui;
}
var qi, Wu;
function a0() {
  if (Wu) return qi;
  Wu = 1;
  var e = /* @__PURE__ */ Ao(), t = function() {
    return !!e;
  };
  return t.hasArrayLengthDefineBug = function() {
    if (!e)
      return null;
    try {
      return e([], "length", { value: 1 }).length !== 1;
    } catch {
      return !0;
    }
  }, qi = t, qi;
}
var $i, Hu;
function s0() {
  if (Hu) return $i;
  Hu = 1;
  var e = /* @__PURE__ */ Jd(), t = /* @__PURE__ */ i0(), r = /* @__PURE__ */ a0()(), n = /* @__PURE__ */ Mr(), o = /* @__PURE__ */ bn(), i = e("%Math.floor%");
  return $i = function(s, c) {
    if (typeof s != "function")
      throw new o("`fn` is not a function");
    if (typeof c != "number" || c < 0 || c > 4294967295 || i(c) !== c)
      throw new o("`length` must be a positive 32-bit integer");
    var u = arguments.length > 2 && !!arguments[2], f = !0, d = !0;
    if ("length" in s && n) {
      var p = n(s, "length");
      p && !p.configurable && (f = !1), p && !p.writable && (d = !1);
    }
    return (f || d || !u) && (r ? t(
      /** @type {Parameters<define>[0]} */
      s,
      "length",
      c,
      !0,
      !0
    ) : t(
      /** @type {Parameters<define>[0]} */
      s,
      "length",
      c
    )), s;
  }, $i;
}
var zi, Vu;
function c0() {
  if (Vu) return zi;
  Vu = 1;
  var e = vn(), t = sc(), r = Kd();
  return zi = function() {
    return r(e, t, arguments);
  }, zi;
}
var Gu;
function u0() {
  return Gu || (Gu = 1, (function(e) {
    var t = /* @__PURE__ */ s0(), r = /* @__PURE__ */ Ao(), n = cc(), o = c0();
    e.exports = function(a) {
      var s = n(arguments), c = 1 + a.length - (arguments.length - 1);
      return t(
        s,
        c > 0 ? c : 0,
        !0
      );
    }, r ? r(e.exports, "apply", { value: o }) : e.exports.apply = o;
  })(Li)), Li.exports;
}
var Yi, Ku;
function Xd() {
  if (Ku) return Yi;
  Ku = 1;
  var e = r0(), t = /* @__PURE__ */ o0(), r = u0(), n = /* @__PURE__ */ wn(), o = /* @__PURE__ */ Mr(), i = uc(), a = n("Object.prototype.toString"), s = Ro()(), c = typeof globalThis > "u" ? cl : globalThis, u = t(), f = n("String.prototype.slice"), d = n("Array.prototype.indexOf", !0) || function(b, S) {
    for (var x = 0; x < b.length; x += 1)
      if (b[x] === S)
        return x;
    return -1;
  }, p = { __proto__: null };
  s && o && i ? e(u, function(y) {
    var b = new c[y]();
    if (Symbol.toStringTag in b && i) {
      var S = i(b), x = o(S, Symbol.toStringTag);
      if (!x && S) {
        var P = i(S);
        x = o(P, Symbol.toStringTag);
      }
      if (x && x.get) {
        var E = r(x.get);
        p[
          /** @type {`$${import('.').TypedArrayName}`} */
          "$" + y
        ] = E;
      }
    }
  }) : e(u, function(y) {
    var b = new c[y](), S = b.slice || b.set;
    if (S) {
      var x = (
        /** @type {import('./types').BoundSlice | import('./types').BoundSet} */
        // @ts-expect-error TODO FIXME
        r(S)
      );
      p[
        /** @type {`$${import('.').TypedArrayName}`} */
        "$" + y
      ] = x;
    }
  });
  var m = function(b) {
    var S = !1;
    return e(
      /** @type {Record<`\$${import('.').TypedArrayName}`, Getter>} */
      p,
      /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
      function(x, P) {
        if (!S)
          try {
            "$" + x(b) === P && (S = /** @type {import('.').TypedArrayName} */
            f(P, 1));
          } catch {
          }
      }
    ), S;
  }, g = function(b) {
    var S = !1;
    return e(
      /** @type {Record<`\$${import('.').TypedArrayName}`, Getter>} */
      p,
      /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
      function(x, P) {
        if (!S)
          try {
            x(b), S = /** @type {import('.').TypedArrayName} */
            f(P, 1);
          } catch {
          }
      }
    ), S;
  };
  return Yi = function(b) {
    if (!b || typeof b != "object")
      return !1;
    if (!s) {
      var S = f(a(b), 8, -1);
      return d(u, S) > -1 ? S : S !== "Object" ? !1 : g(b);
    }
    return o ? m(b) : null;
  }, Yi;
}
var Zi, Qu;
function l0() {
  if (Qu) return Zi;
  Qu = 1;
  var e = /* @__PURE__ */ Xd();
  return Zi = function(r) {
    return !!e(r);
  }, Zi;
}
var Ju;
function f0() {
  return Ju || (Ju = 1, (function(e) {
    var t = /* @__PURE__ */ K1(), r = e0(), n = /* @__PURE__ */ Xd(), o = /* @__PURE__ */ l0();
    function i(w) {
      return w.call.bind(w);
    }
    var a = typeof BigInt < "u", s = typeof Symbol < "u", c = i(Object.prototype.toString), u = i(Number.prototype.valueOf), f = i(String.prototype.valueOf), d = i(Boolean.prototype.valueOf);
    if (a)
      var p = i(BigInt.prototype.valueOf);
    if (s)
      var m = i(Symbol.prototype.valueOf);
    function g(w, _e) {
      if (typeof w != "object")
        return !1;
      try {
        return _e(w), !0;
      } catch {
        return !1;
      }
    }
    e.isArgumentsObject = t, e.isGeneratorFunction = r, e.isTypedArray = o;
    function y(w) {
      return typeof Promise < "u" && w instanceof Promise || w !== null && typeof w == "object" && typeof w.then == "function" && typeof w.catch == "function";
    }
    e.isPromise = y;
    function b(w) {
      return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(w) : o(w) || v(w);
    }
    e.isArrayBufferView = b;
    function S(w) {
      return n(w) === "Uint8Array";
    }
    e.isUint8Array = S;
    function x(w) {
      return n(w) === "Uint8ClampedArray";
    }
    e.isUint8ClampedArray = x;
    function P(w) {
      return n(w) === "Uint16Array";
    }
    e.isUint16Array = P;
    function E(w) {
      return n(w) === "Uint32Array";
    }
    e.isUint32Array = E;
    function I(w) {
      return n(w) === "Int8Array";
    }
    e.isInt8Array = I;
    function M(w) {
      return n(w) === "Int16Array";
    }
    e.isInt16Array = M;
    function A(w) {
      return n(w) === "Int32Array";
    }
    e.isInt32Array = A;
    function W(w) {
      return n(w) === "Float32Array";
    }
    e.isFloat32Array = W;
    function L(w) {
      return n(w) === "Float64Array";
    }
    e.isFloat64Array = L;
    function K(w) {
      return n(w) === "BigInt64Array";
    }
    e.isBigInt64Array = K;
    function H(w) {
      return n(w) === "BigUint64Array";
    }
    e.isBigUint64Array = H;
    function V(w) {
      return c(w) === "[object Map]";
    }
    V.working = typeof Map < "u" && V(/* @__PURE__ */ new Map());
    function D(w) {
      return typeof Map > "u" ? !1 : V.working ? V(w) : w instanceof Map;
    }
    e.isMap = D;
    function T(w) {
      return c(w) === "[object Set]";
    }
    T.working = typeof Set < "u" && T(/* @__PURE__ */ new Set());
    function k(w) {
      return typeof Set > "u" ? !1 : T.working ? T(w) : w instanceof Set;
    }
    e.isSet = k;
    function O(w) {
      return c(w) === "[object WeakMap]";
    }
    O.working = typeof WeakMap < "u" && O(/* @__PURE__ */ new WeakMap());
    function R(w) {
      return typeof WeakMap > "u" ? !1 : O.working ? O(w) : w instanceof WeakMap;
    }
    e.isWeakMap = R;
    function C(w) {
      return c(w) === "[object WeakSet]";
    }
    C.working = typeof WeakSet < "u" && C(/* @__PURE__ */ new WeakSet());
    function j(w) {
      return C(w);
    }
    e.isWeakSet = j;
    function Me(w) {
      return c(w) === "[object ArrayBuffer]";
    }
    Me.working = typeof ArrayBuffer < "u" && Me(new ArrayBuffer());
    function fe(w) {
      return typeof ArrayBuffer > "u" ? !1 : Me.working ? Me(w) : w instanceof ArrayBuffer;
    }
    e.isArrayBuffer = fe;
    function h(w) {
      return c(w) === "[object DataView]";
    }
    h.working = typeof ArrayBuffer < "u" && typeof DataView < "u" && h(new DataView(new ArrayBuffer(1), 0, 1));
    function v(w) {
      return typeof DataView > "u" ? !1 : h.working ? h(w) : w instanceof DataView;
    }
    e.isDataView = v;
    var N = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : void 0;
    function U(w) {
      return c(w) === "[object SharedArrayBuffer]";
    }
    function _(w) {
      return typeof N > "u" ? !1 : (typeof U.working > "u" && (U.working = U(new N())), U.working ? U(w) : w instanceof N);
    }
    e.isSharedArrayBuffer = _;
    function z(w) {
      return c(w) === "[object AsyncFunction]";
    }
    e.isAsyncFunction = z;
    function $(w) {
      return c(w) === "[object Map Iterator]";
    }
    e.isMapIterator = $;
    function B(w) {
      return c(w) === "[object Set Iterator]";
    }
    e.isSetIterator = B;
    function F(w) {
      return c(w) === "[object Generator]";
    }
    e.isGeneratorObject = F;
    function G(w) {
      return c(w) === "[object WebAssembly.Module]";
    }
    e.isWebAssemblyCompiledModule = G;
    function q(w) {
      return g(w, u);
    }
    e.isNumberObject = q;
    function J(w) {
      return g(w, f);
    }
    e.isStringObject = J;
    function Q(w) {
      return g(w, d);
    }
    e.isBooleanObject = Q;
    function me(w) {
      return a && g(w, p);
    }
    e.isBigIntObject = me;
    function oe(w) {
      return s && g(w, m);
    }
    e.isSymbolObject = oe;
    function qe(w) {
      return q(w) || J(w) || Q(w) || me(w) || oe(w);
    }
    e.isBoxedPrimitive = qe;
    function ye(w) {
      return typeof Uint8Array < "u" && (fe(w) || _(w));
    }
    e.isAnyArrayBuffer = ye, ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(w) {
      Object.defineProperty(e, w, {
        enumerable: !1,
        value: function() {
          throw new Error(w + " is not supported in userland");
        }
      });
    });
  })(Ho)), Ho;
}
var Wi, Xu;
function d0() {
  return Xu || (Xu = 1, Wi = function(t) {
    return t && typeof t == "object" && typeof t.copy == "function" && typeof t.fill == "function" && typeof t.readUInt8 == "function";
  }), Wi;
}
var Tn = { exports: {} }, el;
function p0() {
  return el || (el = 1, typeof Object.create == "function" ? Tn.exports = function(t, r) {
    r && (t.super_ = r, t.prototype = Object.create(r.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }));
  } : Tn.exports = function(t, r) {
    if (r) {
      t.super_ = r;
      var n = function() {
      };
      n.prototype = r.prototype, t.prototype = new n(), t.prototype.constructor = t;
    }
  }), Tn.exports;
}
var tl;
function h0() {
  return tl || (tl = 1, (function(e) {
    var t = Object.getOwnPropertyDescriptors || function(v) {
      for (var N = Object.keys(v), U = {}, _ = 0; _ < N.length; _++)
        U[N[_]] = Object.getOwnPropertyDescriptor(v, N[_]);
      return U;
    }, r = /%[sdj%]/g;
    e.format = function(h) {
      if (!I(h)) {
        for (var v = [], N = 0; N < arguments.length; N++)
          v.push(a(arguments[N]));
        return v.join(" ");
      }
      for (var N = 1, U = arguments, _ = U.length, z = String(h).replace(r, function(B) {
        if (B === "%%") return "%";
        if (N >= _) return B;
        switch (B) {
          case "%s":
            return String(U[N++]);
          case "%d":
            return Number(U[N++]);
          case "%j":
            try {
              return JSON.stringify(U[N++]);
            } catch {
              return "[Circular]";
            }
          default:
            return B;
        }
      }), $ = U[N]; N < _; $ = U[++N])
        x($) || !L($) ? z += " " + $ : z += " " + a($);
      return z;
    }, e.deprecate = function(h, v) {
      if (typeof process < "u" && process.noDeprecation === !0)
        return h;
      if (typeof process > "u")
        return function() {
          return e.deprecate(h, v).apply(this, arguments);
        };
      var N = !1;
      function U() {
        if (!N) {
          if (process.throwDeprecation)
            throw new Error(v);
          process.traceDeprecation ? console.trace(v) : console.error(v), N = !0;
        }
        return h.apply(this, arguments);
      }
      return U;
    };
    var n = {}, o = /^$/;
    if (process.env.NODE_DEBUG) {
      var i = process.env.NODE_DEBUG;
      i = i.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase(), o = new RegExp("^" + i + "$", "i");
    }
    e.debuglog = function(h) {
      if (h = h.toUpperCase(), !n[h])
        if (o.test(h)) {
          var v = process.pid;
          n[h] = function() {
            var N = e.format.apply(e, arguments);
            console.error("%s %d: %s", h, v, N);
          };
        } else
          n[h] = function() {
          };
      return n[h];
    };
    function a(h, v) {
      var N = {
        seen: [],
        stylize: c
      };
      return arguments.length >= 3 && (N.depth = arguments[2]), arguments.length >= 4 && (N.colors = arguments[3]), S(v) ? N.showHidden = v : v && e._extend(N, v), A(N.showHidden) && (N.showHidden = !1), A(N.depth) && (N.depth = 2), A(N.colors) && (N.colors = !1), A(N.customInspect) && (N.customInspect = !0), N.colors && (N.stylize = s), f(N, h, N.depth);
    }
    e.inspect = a, a.colors = {
      bold: [1, 22],
      italic: [3, 23],
      underline: [4, 24],
      inverse: [7, 27],
      white: [37, 39],
      grey: [90, 39],
      black: [30, 39],
      blue: [34, 39],
      cyan: [36, 39],
      green: [32, 39],
      magenta: [35, 39],
      red: [31, 39],
      yellow: [33, 39]
    }, a.styles = {
      special: "cyan",
      number: "yellow",
      boolean: "yellow",
      undefined: "grey",
      null: "bold",
      string: "green",
      date: "magenta",
      // "name": intentionally not styling
      regexp: "red"
    };
    function s(h, v) {
      var N = a.styles[v];
      return N ? "\x1B[" + a.colors[N][0] + "m" + h + "\x1B[" + a.colors[N][1] + "m" : h;
    }
    function c(h, v) {
      return h;
    }
    function u(h) {
      var v = {};
      return h.forEach(function(N, U) {
        v[N] = !0;
      }), v;
    }
    function f(h, v, N) {
      if (h.customInspect && v && V(v.inspect) && // Filter out the util module, it's inspect function is special
      v.inspect !== e.inspect && // Also filter out any prototype objects using the circular check.
      !(v.constructor && v.constructor.prototype === v)) {
        var U = v.inspect(N, h);
        return I(U) || (U = f(h, U, N)), U;
      }
      var _ = d(h, v);
      if (_)
        return _;
      var z = Object.keys(v), $ = u(z);
      if (h.showHidden && (z = Object.getOwnPropertyNames(v)), H(v) && (z.indexOf("message") >= 0 || z.indexOf("description") >= 0))
        return p(v);
      if (z.length === 0) {
        if (V(v)) {
          var B = v.name ? ": " + v.name : "";
          return h.stylize("[Function" + B + "]", "special");
        }
        if (W(v))
          return h.stylize(RegExp.prototype.toString.call(v), "regexp");
        if (K(v))
          return h.stylize(Date.prototype.toString.call(v), "date");
        if (H(v))
          return p(v);
      }
      var F = "", G = !1, q = ["{", "}"];
      if (b(v) && (G = !0, q = ["[", "]"]), V(v)) {
        var J = v.name ? ": " + v.name : "";
        F = " [Function" + J + "]";
      }
      if (W(v) && (F = " " + RegExp.prototype.toString.call(v)), K(v) && (F = " " + Date.prototype.toUTCString.call(v)), H(v) && (F = " " + p(v)), z.length === 0 && (!G || v.length == 0))
        return q[0] + F + q[1];
      if (N < 0)
        return W(v) ? h.stylize(RegExp.prototype.toString.call(v), "regexp") : h.stylize("[Object]", "special");
      h.seen.push(v);
      var Q;
      return G ? Q = m(h, v, N, $, z) : Q = z.map(function(me) {
        return g(h, v, N, $, me, G);
      }), h.seen.pop(), y(Q, F, q);
    }
    function d(h, v) {
      if (A(v))
        return h.stylize("undefined", "undefined");
      if (I(v)) {
        var N = "'" + JSON.stringify(v).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
        return h.stylize(N, "string");
      }
      if (E(v))
        return h.stylize("" + v, "number");
      if (S(v))
        return h.stylize("" + v, "boolean");
      if (x(v))
        return h.stylize("null", "null");
    }
    function p(h) {
      return "[" + Error.prototype.toString.call(h) + "]";
    }
    function m(h, v, N, U, _) {
      for (var z = [], $ = 0, B = v.length; $ < B; ++$)
        C(v, String($)) ? z.push(g(
          h,
          v,
          N,
          U,
          String($),
          !0
        )) : z.push("");
      return _.forEach(function(F) {
        F.match(/^\d+$/) || z.push(g(
          h,
          v,
          N,
          U,
          F,
          !0
        ));
      }), z;
    }
    function g(h, v, N, U, _, z) {
      var $, B, F;
      if (F = Object.getOwnPropertyDescriptor(v, _) || { value: v[_] }, F.get ? F.set ? B = h.stylize("[Getter/Setter]", "special") : B = h.stylize("[Getter]", "special") : F.set && (B = h.stylize("[Setter]", "special")), C(U, _) || ($ = "[" + _ + "]"), B || (h.seen.indexOf(F.value) < 0 ? (x(N) ? B = f(h, F.value, null) : B = f(h, F.value, N - 1), B.indexOf(`
`) > -1 && (z ? B = B.split(`
`).map(function(G) {
        return "  " + G;
      }).join(`
`).slice(2) : B = `
` + B.split(`
`).map(function(G) {
        return "   " + G;
      }).join(`
`))) : B = h.stylize("[Circular]", "special")), A($)) {
        if (z && _.match(/^\d+$/))
          return B;
        $ = JSON.stringify("" + _), $.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? ($ = $.slice(1, -1), $ = h.stylize($, "name")) : ($ = $.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), $ = h.stylize($, "string"));
      }
      return $ + ": " + B;
    }
    function y(h, v, N) {
      var U = h.reduce(function(_, z) {
        return z.indexOf(`
`) >= 0, _ + z.replace(/\u001b\[\d\d?m/g, "").length + 1;
      }, 0);
      return U > 60 ? N[0] + (v === "" ? "" : v + `
 `) + " " + h.join(`,
  `) + " " + N[1] : N[0] + v + " " + h.join(", ") + " " + N[1];
    }
    e.types = f0();
    function b(h) {
      return Array.isArray(h);
    }
    e.isArray = b;
    function S(h) {
      return typeof h == "boolean";
    }
    e.isBoolean = S;
    function x(h) {
      return h === null;
    }
    e.isNull = x;
    function P(h) {
      return h == null;
    }
    e.isNullOrUndefined = P;
    function E(h) {
      return typeof h == "number";
    }
    e.isNumber = E;
    function I(h) {
      return typeof h == "string";
    }
    e.isString = I;
    function M(h) {
      return typeof h == "symbol";
    }
    e.isSymbol = M;
    function A(h) {
      return h === void 0;
    }
    e.isUndefined = A;
    function W(h) {
      return L(h) && T(h) === "[object RegExp]";
    }
    e.isRegExp = W, e.types.isRegExp = W;
    function L(h) {
      return typeof h == "object" && h !== null;
    }
    e.isObject = L;
    function K(h) {
      return L(h) && T(h) === "[object Date]";
    }
    e.isDate = K, e.types.isDate = K;
    function H(h) {
      return L(h) && (T(h) === "[object Error]" || h instanceof Error);
    }
    e.isError = H, e.types.isNativeError = H;
    function V(h) {
      return typeof h == "function";
    }
    e.isFunction = V;
    function D(h) {
      return h === null || typeof h == "boolean" || typeof h == "number" || typeof h == "string" || typeof h == "symbol" || // ES6 symbol
      typeof h > "u";
    }
    e.isPrimitive = D, e.isBuffer = d0();
    function T(h) {
      return Object.prototype.toString.call(h);
    }
    function k(h) {
      return h < 10 ? "0" + h.toString(10) : h.toString(10);
    }
    var O = [
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
    ];
    function R() {
      var h = /* @__PURE__ */ new Date(), v = [
        k(h.getHours()),
        k(h.getMinutes()),
        k(h.getSeconds())
      ].join(":");
      return [h.getDate(), O[h.getMonth()], v].join(" ");
    }
    e.log = function() {
      console.log("%s - %s", R(), e.format.apply(e, arguments));
    }, e.inherits = p0(), e._extend = function(h, v) {
      if (!v || !L(v)) return h;
      for (var N = Object.keys(v), U = N.length; U--; )
        h[N[U]] = v[N[U]];
      return h;
    };
    function C(h, v) {
      return Object.prototype.hasOwnProperty.call(h, v);
    }
    var j = typeof Symbol < "u" ? /* @__PURE__ */ Symbol("util.promisify.custom") : void 0;
    e.promisify = function(v) {
      if (typeof v != "function")
        throw new TypeError('The "original" argument must be of type Function');
      if (j && v[j]) {
        var N = v[j];
        if (typeof N != "function")
          throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        return Object.defineProperty(N, j, {
          value: N,
          enumerable: !1,
          writable: !1,
          configurable: !0
        }), N;
      }
      function N() {
        for (var U, _, z = new Promise(function(F, G) {
          U = F, _ = G;
        }), $ = [], B = 0; B < arguments.length; B++)
          $.push(arguments[B]);
        $.push(function(F, G) {
          F ? _(F) : U(G);
        });
        try {
          v.apply(this, $);
        } catch (F) {
          _(F);
        }
        return z;
      }
      return Object.setPrototypeOf(N, Object.getPrototypeOf(v)), j && Object.defineProperty(N, j, {
        value: N,
        enumerable: !1,
        writable: !1,
        configurable: !0
      }), Object.defineProperties(
        N,
        t(v)
      );
    }, e.promisify.custom = j;
    function Me(h, v) {
      if (!h) {
        var N = new Error("Promise was rejected with a falsy value");
        N.reason = h, h = N;
      }
      return v(h);
    }
    function fe(h) {
      if (typeof h != "function")
        throw new TypeError('The "original" argument must be of type Function');
      function v() {
        for (var N = [], U = 0; U < arguments.length; U++)
          N.push(arguments[U]);
        var _ = N.pop();
        if (typeof _ != "function")
          throw new TypeError("The last argument must be of type Function");
        var z = this, $ = function() {
          return _.apply(z, arguments);
        };
        h.apply(this, N).then(
          function(B) {
            process.nextTick($.bind(null, null, B));
          },
          function(B) {
            process.nextTick(Me.bind(null, B, $));
          }
        );
      }
      return Object.setPrototypeOf(v, Object.getPrototypeOf(h)), Object.defineProperties(
        v,
        t(h)
      ), v;
    }
    e.callbackify = fe;
  })(Wo)), Wo;
}
function se(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function er(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function lc(e) {
  er(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || zr(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function ep(e, t) {
  er(2, arguments);
  var r = lc(e), n = se(t);
  return isNaN(n) ? /* @__PURE__ */ new Date(NaN) : (n && r.setDate(r.getDate() + n), r);
}
function tp(e, t) {
  er(2, arguments);
  var r = lc(e), n = se(t);
  if (isNaN(n))
    return /* @__PURE__ */ new Date(NaN);
  if (!n)
    return r;
  var o = r.getDate(), i = new Date(r.getTime());
  i.setMonth(r.getMonth() + n + 1, 0);
  var a = i.getDate();
  return o >= a ? i : (r.setFullYear(i.getFullYear(), i.getMonth(), o), r);
}
function m0(e, t) {
  if (er(2, arguments), !t || zr(t) !== "object") return /* @__PURE__ */ new Date(NaN);
  var r = t.years ? se(t.years) : 0, n = t.months ? se(t.months) : 0, o = t.weeks ? se(t.weeks) : 0, i = t.days ? se(t.days) : 0, a = t.hours ? se(t.hours) : 0, s = t.minutes ? se(t.minutes) : 0, c = t.seconds ? se(t.seconds) : 0, u = lc(e), f = n || r ? tp(u, n + r * 12) : u, d = i || o ? ep(f, i + o * 7) : f, p = s + a * 60, m = c + p * 60, g = m * 1e3, y = new Date(d.getTime() + g);
  return y;
}
const y0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: m0
}, Symbol.toStringTag, { value: "Module" })), g0 = /* @__PURE__ */ fa(y0);
function b0(e, t) {
  er(2, arguments);
  var r = se(t);
  return ep(e, -r);
}
function v0(e, t) {
  er(2, arguments);
  var r = se(t);
  return tp(e, -r);
}
function w0(e, t) {
  if (er(2, arguments), !t || zr(t) !== "object") return /* @__PURE__ */ new Date(NaN);
  var r = t.years ? se(t.years) : 0, n = t.months ? se(t.months) : 0, o = t.weeks ? se(t.weeks) : 0, i = t.days ? se(t.days) : 0, a = t.hours ? se(t.hours) : 0, s = t.minutes ? se(t.minutes) : 0, c = t.seconds ? se(t.seconds) : 0, u = v0(e, n + r * 12), f = b0(u, i + o * 7), d = s + a * 60, p = c + d * 60, m = p * 1e3, g = new Date(f.getTime() - m);
  return g;
}
const x0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: w0
}, Symbol.toStringTag, { value: "Module" })), j0 = /* @__PURE__ */ fa(x0);
var Hi, rl;
function S0() {
  if (rl) return Hi;
  rl = 1;
  const e = h0(), n = {
    add: g0,
    sub: j0
  }, o = {
    d: "days",
    w: "weeks",
    M: "months",
    y: "years",
    h: "hours",
    m: "minutes",
    s: "seconds"
  }, i = (a) => a.toISOString().replace("T", " ").replace(/\.[0-9]{3}Z/, "");
  return Hi = {
    ungroup(a) {
      return a.yg ? a.yg : a;
    },
    unescape(a) {
      const s = new RegExp(`\\\\(['"])`, "g");
      return a.replace(s, "$1");
    },
    stringToRegExp(a, s) {
      let c = a.replace(/[.*+?^$(){}|[\]\\]/g, "\\$&");
      return s === "^" ? c = "^" + c : s === "$" && (c = c + "$"), new RegExp(c, "i");
    },
    relDateToAbsolute(a, s, c) {
      if (this.preserveRelativeDates)
        return { $relativeDate: { op: a, amount: Number(s), unit: o[c] } };
      const u = /* @__PURE__ */ new Date(), f = n[a](u, { [o[c]]: s });
      return i(f);
    },
    debug() {
      if (!process.env.DEBUG || !/nql/.test(process.env.DEBUG))
        return;
      const a = arguments[0], s = Array.prototype.slice.call(arguments, 1), c = [a];
      s.forEach(function(u) {
        c.push(e.inspect(u, !1, null));
      }), console.log.apply(this, c);
    }
  }, Hi;
}
var En = { exports: {} };
const N0 = {}, P0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: N0
}, Symbol.toStringTag, { value: "Module" })), nl = /* @__PURE__ */ fa(P0);
var ol;
function T0() {
  return ol || (ol = 1, (function(e, t) {
    var r = (function() {
      var n = function(D, T, k, O) {
        for (k = k || {}, O = D.length; O--; k[D[O]] = T) ;
        return k;
      }, o = [1, 5], i = [1, 7], a = [1, 8], s = [1, 6, 10], c = [1, 9], u = [1, 6, 8, 10], f = [1, 24], d = [1, 25], p = [1, 26], m = [1, 27], g = [1, 28], y = [1, 29], b = [1, 30], S = [1, 17], x = [1, 18], P = [1, 19], E = [22, 23, 24, 25, 26, 30, 31], I = [1, 6, 8, 10, 18], M = [1, 49], A = [6, 18], W = [2, 17], L = [8, 18], K = {
        trace: function() {
        },
        yy: {},
        symbols_: { error: 2, expressions: 3, expression: 4, andCondition: 5, OR: 6, filterExpr: 7, AND: 8, LPAREN: 9, RPAREN: 10, propExpr: 11, valueExpr: 12, PROP: 13, NOT: 14, REGEXPOP: 15, LBRACKET: 16, inExpr: 17, RBRACKET: 18, allExpr: 19, OP: 20, VALUE: 21, NULL: 22, TRUE: 23, FALSE: 24, NUMBER: 25, NOW: 26, DATEOP: 27, AMOUNT: 28, INTERVAL: 29, LITERAL: 30, STRING: 31, ADD: 32, SUB: 33, CONTAINS: 34, STARTSWITH: 35, ENDSWITH: 36, GT: 37, LT: 38, GTE: 39, LTE: 40, $accept: 0, $end: 1 },
        terminals_: { 2: "error", 6: "OR", 8: "AND", 9: "LPAREN", 10: "RPAREN", 13: "PROP", 14: "NOT", 16: "LBRACKET", 18: "RBRACKET", 22: "NULL", 23: "TRUE", 24: "FALSE", 25: "NUMBER", 26: "NOW", 28: "AMOUNT", 29: "INTERVAL", 30: "LITERAL", 31: "STRING", 32: "ADD", 33: "SUB", 34: "CONTAINS", 35: "STARTSWITH", 36: "ENDSWITH", 37: "GT", 38: "LT", 39: "GTE", 40: "LTE" },
        productions_: [0, [3, 1], [4, 1], [4, 3], [5, 1], [5, 3], [7, 3], [7, 2], [11, 1], [12, 2], [12, 1], [12, 4], [12, 3], [12, 3], [12, 2], [12, 1], [17, 3], [17, 1], [19, 3], [19, 3], [21, 1], [21, 1], [21, 1], [21, 1], [21, 4], [21, 1], [21, 1], [27, 1], [27, 1], [15, 2], [15, 2], [15, 2], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1]],
        performAction: function(T, k, O, R, C, j, Me, fe) {
          var h = j.length - 1;
          switch (C) {
            case 1:
              return R.debug("expression", j[h]), R.debug("opt", fe), j[h] && j[h].yg ? j[h].yg : j[h];
            case 2:
              R.debug("andCondition", j[h]), this.$ = j[h];
              break;
            case 3:
              R.debug("expression OR andCondition", j[h - 2], j[h]), j[h - 2] = j[h - 2].$or ? j[h - 2] : { $or: [R.ungroup(j[h - 2])] }, j[h - 2].$or.push(R.ungroup(j[h])), this.$ = j[h - 2];
              break;
            case 4:
              R.debug("filterExpr", j[h]), this.$ = j[h];
              break;
            case 5:
              R.debug("andCondition AND filterExpr", j[h - 2], j[h]), j[h - 2] = j[h - 2].$and ? j[h - 2] : { $and: [R.ungroup(j[h - 2])] }, j[h - 2].$and.push(R.ungroup(j[h])), this.$ = j[h - 2];
              break;
            case 6:
              R.debug("LPAREN expression RPAREN", j[h - 1]), this.$ = { yg: j[h - 1] };
              break;
            case 7:
              this.$ = { [j[h - 1]]: j[h] };
              break;
            case 8:
              j[h] = j[h].replace(/:$/, ""), j[h] = fe.aliases && fe.aliases[j[h]] ? fe.aliases[j[h]] : j[h], this.$ = j[h];
              break;
            case 9:
              this.$ = { $not: j[h] };
              break;
            case 10:
              this.$ = { $regex: j[h] };
              break;
            case 11:
              this.$ = { $nin: j[h - 1] };
              break;
            case 12:
              this.$ = { $in: j[h - 1] };
              break;
            case 13:
              this.$ = { $all: j[h - 1] };
              break;
            case 14:
              this.$ = {}, this.$[j[h - 1]] = j[h];
              break;
            case 15:
              this.$ = j[h];
              break;
            case 16:
            case 18:
              this.$.push(j[h]);
              break;
            case 17:
              this.$ = [j[h]];
              break;
            case 19:
              this.$ = [j[h - 2], j[h]];
              break;
            case 20:
              this.$ = null;
              break;
            case 21:
              this.$ = !0;
              break;
            case 22:
              this.$ = !1;
              break;
            case 23:
              this.$ = parseInt(T);
              break;
            case 24:
              this.$ = R.relDateToAbsolute(j[h - 2], j[h - 1], j[h]);
              break;
            case 25:
              this.$ = R.unescape(j[h]);
              break;
            case 26:
              j[h] = j[h].replace(/^'|'$/g, ""), this.$ = R.unescape(j[h]);
              break;
            case 27:
              this.$ = "add";
              break;
            case 28:
              this.$ = "sub";
              break;
            case 29:
              j[h] = j[h].replace(/^'|'$/g, ""), j[h] = R.unescape(j[h]), this.$ = R.stringToRegExp(j[h]);
              break;
            case 30:
              j[h] = j[h].replace(/^'|'$/g, ""), j[h] = R.unescape(j[h]), this.$ = R.stringToRegExp(j[h], "^");
              break;
            case 31:
              j[h] = j[h].replace(/^'|'$/g, ""), j[h] = R.unescape(j[h]), this.$ = R.stringToRegExp(j[h], "$");
              break;
            case 32:
              this.$ = "$ne";
              break;
            case 33:
              this.$ = "$gt";
              break;
            case 34:
              this.$ = "$lt";
              break;
            case 35:
              this.$ = "$gte";
              break;
            case 36:
              this.$ = "$lte";
              break;
          }
        },
        table: [{ 3: 1, 4: 2, 5: 3, 7: 4, 9: o, 11: 6, 13: i }, { 1: [3] }, { 1: [2, 1], 6: a }, n(s, [2, 2], { 8: c }), n(u, [2, 4]), { 4: 10, 5: 3, 7: 4, 9: o, 11: 6, 13: i }, { 12: 11, 14: [1, 12], 15: 13, 16: [1, 14], 20: 15, 21: 16, 22: f, 23: d, 24: p, 25: m, 26: g, 30: y, 31: b, 34: S, 35: x, 36: P, 37: [1, 20], 38: [1, 21], 39: [1, 22], 40: [1, 23] }, n([14, 16, 22, 23, 24, 25, 26, 30, 31, 34, 35, 36, 37, 38, 39, 40], [2, 8]), { 5: 31, 7: 4, 9: o, 11: 6, 13: i }, { 7: 32, 9: o, 11: 6, 13: i }, { 6: a, 10: [1, 33] }, n(u, [2, 7]), n(E, [2, 32], { 15: 34, 16: [1, 35], 34: S, 35: x, 36: P }), n(u, [2, 10]), { 17: 36, 19: 37, 21: 38, 22: f, 23: d, 24: p, 25: m, 26: g, 30: y, 31: b }, { 21: 39, 22: f, 23: d, 24: p, 25: m, 26: g, 30: y, 31: b }, n(u, [2, 15]), { 31: [1, 40] }, { 31: [1, 41] }, { 31: [1, 42] }, n(E, [2, 33]), n(E, [2, 34]), n(E, [2, 35]), n(E, [2, 36]), n(I, [2, 20]), n(I, [2, 21]), n(I, [2, 22]), n(I, [2, 23]), { 27: 43, 32: [1, 44], 33: [1, 45] }, n(I, [2, 25]), n(I, [2, 26]), n(s, [2, 3], { 8: c }), n(u, [2, 5]), n(u, [2, 6]), n(u, [2, 9]), { 17: 46, 21: 47, 22: f, 23: d, 24: p, 25: m, 26: g, 30: y, 31: b }, { 6: M, 18: [1, 48] }, { 8: [1, 51], 18: [1, 50] }, n(A, W, { 8: [1, 52] }), n(u, [2, 14]), n(u, [2, 29]), n(u, [2, 30]), n(u, [2, 31]), { 28: [1, 53] }, { 28: [2, 27] }, { 28: [2, 28] }, { 6: M, 18: [1, 54] }, n(A, W), n(u, [2, 12]), { 21: 55, 22: f, 23: d, 24: p, 25: m, 26: g, 30: y, 31: b }, n(u, [2, 13]), { 21: 56, 22: f, 23: d, 24: p, 25: m, 26: g, 30: y, 31: b }, { 21: 57, 22: f, 23: d, 24: p, 25: m, 26: g, 30: y, 31: b }, { 29: [1, 58] }, n(u, [2, 11]), n(A, [2, 16]), n(L, [2, 18]), n(L, [2, 19]), n(I, [2, 24])],
        defaultActions: { 44: [2, 27], 45: [2, 28] },
        parseError: function(T, k) {
          if (k.recoverable)
            this.trace(T);
          else {
            var O = new Error(T);
            throw O.hash = k, O;
          }
        },
        parse: function(T) {
          var k = this, O = [0], R = [null], C = [], j = this.table, Me = "", fe = 0, h = 0, v = 2, N = 1, U = C.slice.call(arguments, 1), _ = Object.create(this.lexer), z = { yy: {} };
          for (var $ in this.yy)
            Object.prototype.hasOwnProperty.call(this.yy, $) && (z.yy[$] = this.yy[$]);
          _.setInput(T, z.yy), z.yy.lexer = _, z.yy.parser = this, typeof _.yylloc > "u" && (_.yylloc = {});
          var B = _.yylloc;
          C.push(B);
          var F = _.options && _.options.ranges;
          typeof z.yy.parseError == "function" ? this.parseError = z.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
          for (var G = function() {
            var $e;
            return $e = _.lex() || N, typeof $e != "number" && ($e = k.symbols_[$e] || $e), $e;
          }, q, J, Q, me, oe = {}, qe, ye, w, _e; ; ) {
            if (J = O[O.length - 1], this.defaultActions[J] ? Q = this.defaultActions[J] : ((q === null || typeof q > "u") && (q = G()), Q = j[J] && j[J][q]), typeof Q > "u" || !Q.length || !Q[0]) {
              var we = "";
              _e = [];
              for (qe in j[J])
                this.terminals_[qe] && qe > v && _e.push("'" + this.terminals_[qe] + "'");
              _.showPosition ? we = "Parse error on line " + (fe + 1) + `:
` + _.showPosition() + `
Expecting ` + _e.join(", ") + ", got '" + (this.terminals_[q] || q) + "'" : we = "Parse error on line " + (fe + 1) + ": Unexpected " + (q == N ? "end of input" : "'" + (this.terminals_[q] || q) + "'"), this.parseError(we, {
                text: _.match,
                token: this.terminals_[q] || q,
                line: _.yylineno,
                loc: B,
                expected: _e
              });
            }
            if (Q[0] instanceof Array && Q.length > 1)
              throw new Error("Parse Error: multiple actions possible at state: " + J + ", token: " + q);
            switch (Q[0]) {
              case 1:
                O.push(q), R.push(_.yytext), C.push(_.yylloc), O.push(Q[1]), q = null, h = _.yyleng, Me = _.yytext, fe = _.yylineno, B = _.yylloc;
                break;
              case 2:
                if (ye = this.productions_[Q[1]][1], oe.$ = R[R.length - ye], oe._$ = {
                  first_line: C[C.length - (ye || 1)].first_line,
                  last_line: C[C.length - 1].last_line,
                  first_column: C[C.length - (ye || 1)].first_column,
                  last_column: C[C.length - 1].last_column
                }, F && (oe._$.range = [
                  C[C.length - (ye || 1)].range[0],
                  C[C.length - 1].range[1]
                ]), me = this.performAction.apply(oe, [
                  Me,
                  h,
                  fe,
                  z.yy,
                  Q[1],
                  R,
                  C
                ].concat(U)), typeof me < "u")
                  return me;
                ye && (O = O.slice(0, -1 * ye * 2), R = R.slice(0, -1 * ye), C = C.slice(0, -1 * ye)), O.push(this.productions_[Q[1]][0]), R.push(oe.$), C.push(oe._$), w = j[O[O.length - 2]][O[O.length - 1]], O.push(w);
                break;
              case 3:
                return !0;
            }
          }
          return !0;
        }
      };
      K.parseError = function(D, T) {
        var k = D.split(`
`);
        throw k[0] = "Query Error: unexpected character in filter at char " + (T.loc.first_column + 1), new Error(k.join(`
`));
      };
      var H = (function() {
        var D = {
          EOF: 1,
          parseError: function(k, O) {
            if (this.yy.parser)
              this.yy.parser.parseError(k, O);
            else
              throw new Error(k);
          },
          // resets the lexer, sets new input
          setInput: function(T, k) {
            return this.yy = k || this.yy || {}, this._input = T, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
              first_line: 1,
              first_column: 0,
              last_line: 1,
              last_column: 0
            }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
          },
          // consumes and returns one char from the input
          input: function() {
            var T = this._input[0];
            this.yytext += T, this.yyleng++, this.offset++, this.match += T, this.matched += T;
            var k = T.match(/(?:\r\n?|\n).*/g);
            return k ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), T;
          },
          // unshifts one char (or a string) into the input
          unput: function(T) {
            var k = T.length, O = T.split(/(?:\r\n?|\n)/g);
            this._input = T + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - k), this.offset -= k;
            var R = this.match.split(/(?:\r\n?|\n)/g);
            this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), O.length - 1 && (this.yylineno -= O.length - 1);
            var C = this.yylloc.range;
            return this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: O ? (O.length === R.length ? this.yylloc.first_column : 0) + R[R.length - O.length].length - O[0].length : this.yylloc.first_column - k
            }, this.options.ranges && (this.yylloc.range = [C[0], C[0] + this.yyleng - k]), this.yyleng = this.yytext.length, this;
          },
          // When called from action, caches matched text and appends it on next action
          more: function() {
            return this._more = !0, this;
          },
          // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
          reject: function() {
            if (this.options.backtrack_lexer)
              this._backtrack = !0;
            else
              return this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
              });
            return this;
          },
          // retain first n characters of the match
          less: function(T) {
            this.unput(this.match.slice(T));
          },
          // displays already matched input, i.e. for error messages
          pastInput: function() {
            var T = this.matched.substr(0, this.matched.length - this.match.length);
            return (T.length > 20 ? "..." : "") + T.substr(-20).replace(/\n/g, "");
          },
          // displays upcoming input, i.e. for error messages
          upcomingInput: function() {
            var T = this.match;
            return T.length < 20 && (T += this._input.substr(0, 20 - T.length)), (T.substr(0, 20) + (T.length > 20 ? "..." : "")).replace(/\n/g, "");
          },
          // displays the character position where the lexing error occurred, i.e. for error messages
          showPosition: function() {
            var T = this.pastInput(), k = new Array(T.length + 1).join("-");
            return T + this.upcomingInput() + `
` + k + "^";
          },
          // test the lexed token: return FALSE when not a match, otherwise return token
          test_match: function(T, k) {
            var O, R, C;
            if (this.options.backtrack_lexer && (C = {
              yylineno: this.yylineno,
              yylloc: {
                first_line: this.yylloc.first_line,
                last_line: this.last_line,
                first_column: this.yylloc.first_column,
                last_column: this.yylloc.last_column
              },
              yytext: this.yytext,
              match: this.match,
              matches: this.matches,
              matched: this.matched,
              yyleng: this.yyleng,
              offset: this.offset,
              _more: this._more,
              _input: this._input,
              yy: this.yy,
              conditionStack: this.conditionStack.slice(0),
              done: this.done
            }, this.options.ranges && (C.yylloc.range = this.yylloc.range.slice(0))), R = T[0].match(/(?:\r\n?|\n).*/g), R && (this.yylineno += R.length), this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: R ? R[R.length - 1].length - R[R.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + T[0].length
            }, this.yytext += T[0], this.match += T[0], this.matches = T, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(T[0].length), this.matched += T[0], O = this.performAction.call(this, this.yy, this, k, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), O)
              return O;
            if (this._backtrack) {
              for (var j in C)
                this[j] = C[j];
              return !1;
            }
            return !1;
          },
          // return next match in input
          next: function() {
            if (this.done)
              return this.EOF;
            this._input || (this.done = !0);
            var T, k, O, R;
            this._more || (this.yytext = "", this.match = "");
            for (var C = this._currentRules(), j = 0; j < C.length; j++)
              if (O = this._input.match(this.rules[C[j]]), O && (!k || O[0].length > k[0].length)) {
                if (k = O, R = j, this.options.backtrack_lexer) {
                  if (T = this.test_match(O, C[j]), T !== !1)
                    return T;
                  if (this._backtrack) {
                    k = !1;
                    continue;
                  } else
                    return !1;
                } else if (!this.options.flex)
                  break;
              }
            return k ? (T = this.test_match(k, C[R]), T !== !1 ? T : !1) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
              text: "",
              token: null,
              line: this.yylineno
            });
          },
          // return next match that has a token
          lex: function() {
            var k = this.next();
            return k || this.lex();
          },
          // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
          begin: function(k) {
            this.conditionStack.push(k);
          },
          // pop the previously active lexer condition state off the condition stack
          popState: function() {
            var k = this.conditionStack.length - 1;
            return k > 0 ? this.conditionStack.pop() : this.conditionStack[0];
          },
          // produce the lexer rule set which is active for the currently active lexer condition state
          _currentRules: function() {
            return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
          },
          // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
          topState: function(k) {
            return k = this.conditionStack.length - 1 - Math.abs(k || 0), k >= 0 ? this.conditionStack[k] : "INITIAL";
          },
          // alias for begin(condition)
          pushState: function(k) {
            this.begin(k);
          },
          // return the number of states currently on the stack
          stateStackSize: function() {
            return this.conditionStack.length;
          },
          options: {},
          performAction: function(k, O, R, C) {
            switch (R) {
              case 0:
                break;
              case 1:
                return 22;
              case 2:
                return 23;
              case 3:
                return 24;
              case 4:
                return 13;
              case 5:
                return 25;
              case 6:
                return 16;
              case 7:
                return 18;
              case 8:
                return this.pushState("reldate"), 26;
              case 9:
                return 33;
              case 10:
                return 32;
              case 11:
                return 28;
              case 12:
                return this.popState(), 29;
              case 13:
                return 30;
              case 14:
                return 31;
              case 15:
                return 9;
              case 16:
                return 10;
              case 17:
                return 6;
              case 18:
                return 8;
              case 19:
                return 14;
              case 20:
                return 39;
              case 21:
                return 40;
              case 22:
                return 37;
              case 23:
                return 38;
              case 24:
                return 35;
              case 25:
                return 36;
              case 26:
                return 34;
              case 27:
                return 30;
            }
          },
          rules: [/^(?:\s+)/, /^(?:(?:null|NULL|Null)(?!(\\(['"\+\,\(\)\>\<=\[\]\~\^\$])|([^\s'"\+\,\(\)\>\<=\[\]\~]))+))/, /^(?:(?:true|TRUE|True)(?!(\\(['"\+\,\(\)\>\<=\[\]\~\^\$])|([^\s'"\+\,\(\)\>\<=\[\]\~]))+))/, /^(?:(?:false|FALSE|False)(?!(\\(['"\+\,\(\)\>\<=\[\]\~\^\$])|([^\s'"\+\,\(\)\>\<=\[\]\~]))+))/, /^(?:[a-zA-Z_][a-zA-Z0-9_\.]*[:])/, /^(?:[0-9]+(\.[0-9]+)?\b(?![\-]))/, /^(?:\[)/, /^(?:\])/, /^(?:now(?=[-+]\d+[dwMyhms](?:([\+\,\(\)\[\]])|$)))/, /^(?:-)/, /^(?:\+)/, /^(?:\d+)/, /^(?:[dwMyhms])/, /^(?:([^\s'"\+\,\(\)\>\<=\[\]\~\-])(\\(['"\+\,\(\)\>\<=\[\]\~\^\$])|([^\s'"\+\,\(\)\>\<=\[\]\~]))+)/, /^(?:['](\\['"]|[^'"])+?['])/, /^(?:\()/, /^(?:\))/, /^(?:,)/, /^(?:\+)/, /^(?:-)/, /^(?:>=)/, /^(?:<=)/, /^(?:>)/, /^(?:<)/, /^(?:~\^)/, /^(?:~\$)/, /^(?:~)/, /^(?:([a-zA-Z])(?![a-zA-Z'"\,\(\)\>\<=\[\]\~]))/],
          conditions: { reldate: { rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27], inclusive: !0 }, INITIAL: { rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27], inclusive: !0 } }
        };
        return D.parseError = function(T, k) {
          var O = T.split(`
`), R, C;
          throw R = O[2].indexOf("^"), C = O[1].charAt(R), O[0] = 'Query Error: unrecognized text "' + C + '" in filter at char ' + (R + 1), Error(O.join(`
`));
        }, D;
      })();
      K.lexer = H;
      function V() {
        this.yy = {};
      }
      return V.prototype = K, K.Parser = V, new V();
    })();
    typeof th < "u" && (t.parser = r, t.Parser = r.Parser, t.parse = function() {
      return r.parse.apply(r, arguments);
    }, t.main = function(o) {
      o[1] || (console.log("Usage: " + o[0] + " FILE"), process.exit(1));
      var i = nl.readFileSync(nl.normalize(o[1]), "utf8");
      return t.parser.parse(i);
    }, require.main === e && t.main(process.argv.slice(1)));
  })(En, En.exports)), En.exports;
}
var il;
function E0() {
  if (il) return Pn;
  il = 1;
  const e = S0(), t = T0().parser;
  return t.yy = e, Pn.lex = (r) => {
    t.lexer.setInput(r);
    let n = t.lexer.lex();
    const o = [];
    for (; n !== t.lexer.EOF; )
      o.push({ token: t.terminals_[n], matched: t.lexer.match }), n = t.lexer.lex();
    return o;
  }, Pn.parse = (r, n) => {
    const o = n || {};
    e.preserveRelativeDates = o.preserveRelativeDates === !0;
    try {
      return t.parse(r, o);
    } finally {
      e.preserveRelativeDates = !1;
    }
  }, Pn;
}
var Vi, al;
function O0() {
  return al || (al = 1, Vi = E0()), Vi;
}
var R0 = O0();
const A0 = /* @__PURE__ */ lp(R0);
function D0(e, t) {
  const r = e.split("."), n = t.split(".");
  if (r.length !== n.length)
    return null;
  const o = {};
  for (let i = 0; i < r.length; i += 1) {
    const a = r[i], s = n[i];
    if (a.startsWith(":")) {
      o[a.slice(1)] = s;
      continue;
    }
    if (a !== s)
      return null;
  }
  return o;
}
function fc(e, t, r) {
  const n = e[t];
  if (n)
    return {
      definition: n,
      context: {
        key: t,
        pattern: t,
        params: {},
        timezone: r
      }
    };
  for (const [o, i] of Object.entries(e))
    if (i.parseKeys?.includes(t))
      return {
        definition: i,
        context: {
          key: o,
          pattern: o,
          params: {},
          timezone: r
        }
      };
  for (const [o, i] of Object.entries(e)) {
    if (!o.includes(":"))
      continue;
    const a = D0(o, t);
    if (a)
      return {
        definition: i,
        context: {
          key: t,
          pattern: o,
          params: a,
          timezone: r
        }
      };
  }
}
function rp(e) {
  if (e)
    try {
      return A0.parse(e, { preserveRelativeDates: !0 });
    } catch {
      return;
    }
}
function k0(e) {
  return e.map((t, r) => ({
    ...t,
    id: `${t.field}:${r + 1}`
  }));
}
function I0(e, t) {
  const r = /* @__PURE__ */ new Set();
  return Object.entries(e).forEach(([n, o]) => {
    o.ui.type === t && (r.add(n), o.parseKeys?.forEach((i) => r.add(i)));
  }), r;
}
function ua(e, t) {
  return Object.keys(e).some((r) => t.has(r)) ? !0 : Object.values(e).some((r) => Array.isArray(r) ? r.some((n) => n !== null && typeof n == "object" && ua(n, t)) : r !== null && typeof r == "object" && !(r instanceof RegExp) && ua(r, t));
}
function C0(e, t, r) {
  return e.flatMap((n) => {
    const o = Object.keys(n);
    if (o.length !== 1 || o[0].startsWith("$"))
      return [];
    const i = fc(t, o[0], r);
    if (i) {
      const a = i.definition.codec.parse(n, i.context);
      if (a)
        return [a];
    }
    return [];
  });
}
function M0(e) {
  return [...e].sort((t, r) => t.localeCompare(r));
}
function _0(e, t, r) {
  const n = e.flatMap((o) => {
    const i = fc(t, o.field, r);
    return i ? i.definition.codec.serialize(o, i.context) ?? [] : [];
  });
  if (n.length)
    return M0(n).join("+");
}
const F0 = I0(gn, "date");
function np(e) {
  return fc(gn, e.field, "UTC")?.definition.operators.includes(e.operator) ?? !1;
}
function op(e, t) {
  return Array.isArray(e.$and) ? e.$and.flatMap((r) => op(r, t)) : C0([e], gn, t);
}
function B0(e, t) {
  const r = rp(e ?? "");
  return r ? k0(op(r, t).filter(np)) : [];
}
function L0(e) {
  const t = rp(e ?? "");
  return t ? ua(t, F0) : !1;
}
function dc(e, t) {
  return _0(e.filter(np), gn, t);
}
const ip = ["status", "created_at", "body", "post", "author", "reported"], U0 = {
  is_not: "is-not",
  not_contains: "does-not-contain",
  before: "is-less",
  after: "is-greater",
  on_or_before: "is-or-less",
  on_or_after: "is-or-greater"
};
function q0(e) {
  const t = e.indexOf(":");
  if (t <= 0)
    return null;
  const r = e.substring(0, t), n = e.substring(t + 1);
  return n ? {
    operator: U0[r] ?? r,
    value: n
  } : null;
}
function $0(e) {
  const t = [];
  for (const [r, n] of e.entries()) {
    if (!ip.includes(r))
      continue;
    const o = q0(n);
    o && t.push({
      id: `${r}:${t.length + 1}`,
      field: r,
      operator: o.operator,
      values: [o.value]
    });
  }
  return t;
}
function ap(e) {
  ip.forEach((t) => e.delete(t));
}
function sl(e, t, r) {
  const n = new URLSearchParams(e), o = dc(t, r);
  return n.delete("filter"), ap(n), o && n.set("filter", o), n;
}
function z0(e, t, r = !t) {
  return !!e && r && !t && L0(e);
}
function Y0(e) {
  const [t, r] = br(), n = te(null), o = je(() => t.get("filter") ?? void 0, [t]), i = je(() => t.toString(), [t]), a = je(() => o !== void 0 ? B0(o, e) : $0(t), [o, t, e]), [s, c] = ge(a), u = je(() => dc(s, e), [s, e]);
  De(() => {
    i !== n.current && (c(a), n.current = i);
  }, [i, a]), De(() => {
    if (n.current !== null && i !== n.current)
      return;
    const p = sl(t, s, e), m = p.toString();
    m !== i && (n.current = m, r(p, { replace: !0 }));
  }, [i, s, t, r, e]);
  const f = fr((p, m = {}) => {
    const g = typeof p == "function" ? p(s) : p, y = sl(t, g, e), b = m.replace ?? !0;
    c(g), n.current = y.toString(), r(y, { replace: b });
  }, [s, t, r, e]), d = fr(({ replace: p = !0 } = {}) => {
    const m = new URLSearchParams(t);
    m.delete("filter"), ap(m), c([]), n.current = m.toString(), r(m, { replace: p });
  }, [t, r]);
  return { filters: s, nql: u, setFilters: f, clearFilters: d };
}
function Z0(e) {
  return e.get("id")?.match(/^is:(.+)$/)?.[1];
}
const W0 = ({
  timezone: e,
  singleCommentId: t
}) => {
  const [r, n] = br(), { filters: o, nql: i, setFilters: a } = Y0(e), s = !0, c = fr((I, M, A = "is") => {
    const W = [
      ...o.filter((H) => H.field !== I),
      hp(I, A, [M])
    ];
    if (!t) {
      a(W, { replace: !1 });
      return;
    }
    const L = new URLSearchParams(r), K = dc(W, e);
    L.delete("id"), L.delete("filter"), K && L.set("filter", K), n(L, { replace: !1 });
  }, [o, r, a, n, t, e]), u = je(() => t ? `id:${dr(t)}` : i, [i, t]), f = fr(() => {
    n(new URLSearchParams(), { replace: !1 });
  }, [n]), {
    data: d,
    isError: p,
    isFetching: m,
    isFetchingNextPage: g,
    isRefetching: y,
    fetchNextPage: b,
    hasNextPage: S
  } = Bd({
    searchParams: {
      include: rc(s),
      ...u ? { filter: u } : {}
    },
    keepPreviousData: !0
  }), x = m && !g && !y, P = u ?? "", E = o.length > 0;
  return /* @__PURE__ */ l.jsx(vl, { children: /* @__PURE__ */ l.jsxs(cr, { "data-testid": "comments-page", children: [
    /* @__PURE__ */ l.jsxs(cr.Header, { children: [
      /* @__PURE__ */ l.jsxs(bt, { blurredBackground: !1, sticky: !1, children: [
        /* @__PURE__ */ l.jsx(bt.Left, { children: /* @__PURE__ */ l.jsx(bt.Title, { children: "Comments" }) }),
        !t && !E && /* @__PURE__ */ l.jsx(bt.Actions, { children: /* @__PURE__ */ l.jsx(bt.ActionGroup, { children: /* @__PURE__ */ l.jsx(
          Kc,
          {
            filters: o,
            siteTimezone: e,
            onFiltersChange: a
          }
        ) }) })
      ] }),
      !t && E && /* @__PURE__ */ l.jsx(ah, { children: /* @__PURE__ */ l.jsx(
        Kc,
        {
          filters: o,
          siteTimezone: e,
          onFiltersChange: a
        }
      ) })
    ] }),
    /* @__PURE__ */ l.jsx(cr.Body, { children: x ? /* @__PURE__ */ l.jsx("div", { className: "flex flex-1 items-center justify-center", children: /* @__PURE__ */ l.jsx(jt, { size: "lg" }) }) : p ? /* @__PURE__ */ l.jsxs("div", { className: "flex flex-1 flex-col items-center justify-center", children: [
      /* @__PURE__ */ l.jsx("h2", { className: "mb-2 text-xl font-medium", children: "Error loading comments" }),
      /* @__PURE__ */ l.jsx("p", { className: "mb-4 text-muted-foreground", children: "Please reload the page to try again" }),
      /* @__PURE__ */ l.jsx(ue, { onClick: () => window.location.reload(), children: "Reload page" })
    ] }) : d?.comments.length ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx(
        D1,
        {
          dislikesEnabled: s,
          fetchNextPage: b,
          hasNextPage: S,
          isFetchingNextPage: g,
          isLoading: m && !g,
          items: d?.comments ?? [],
          resetKey: P,
          totalItems: d?.meta?.pagination?.total ?? 0,
          onAddFilter: c
        }
      ),
      t && /* @__PURE__ */ l.jsx("div", { className: "flex justify-center py-8", children: /* @__PURE__ */ l.jsx(ue, { variant: "outline", onClick: f, children: "Show all comments" }) })
    ] }) : /* @__PURE__ */ l.jsx("div", { className: "flex flex-1 items-center justify-center", children: t ? /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ l.jsx(Qi, { title: "Comment not found", children: /* @__PURE__ */ l.jsx(Ki, {}) }),
      /* @__PURE__ */ l.jsx(ue, { className: "mt-4", variant: "outline", onClick: f, children: "Show all comments" })
    ] }) : /* @__PURE__ */ l.jsx(Qi, { title: "No comments yet", children: /* @__PURE__ */ l.jsx(Ki, {}) }) }) })
  ] }) });
}, bw = () => {
  const [e] = br(), { data: t, isLoading: r } = $p({}), n = je(() => Z0(e), [e]), o = e.get("filter") ?? void 0;
  if (!n && z0(o, !!t, r))
    return /* @__PURE__ */ l.jsx(vl, { children: /* @__PURE__ */ l.jsxs(cr, { children: [
      /* @__PURE__ */ l.jsx(cr.Header, { children: /* @__PURE__ */ l.jsx(bt, { blurredBackground: !1, sticky: !1, children: /* @__PURE__ */ l.jsx(bt.Left, { children: /* @__PURE__ */ l.jsx(bt.Title, { children: "Comments" }) }) }) }),
      /* @__PURE__ */ l.jsx(cr.Body, { children: /* @__PURE__ */ l.jsx("div", { className: "flex flex-1 items-center justify-center", children: /* @__PURE__ */ l.jsx(jt, { size: "lg" }) }) })
    ] }) });
  const a = Ap(t?.settings ?? []);
  return /* @__PURE__ */ l.jsx(W0, { singleCommentId: n, timezone: a });
};
export {
  bw as default
};
//# sourceMappingURL=comments-CsyF5C1S.js.map
