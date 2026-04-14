import { k as R, v as E, a as v, j as u, w as L, J as F, i as w, b as N, u as O, x as P, h as p, y as g, z as x, A as j, F as W, V as Z, R as U, m as y, s as $, E as X } from "./index-BWRct4la.mjs";
function k(t, e) {
  if (typeof t == "function")
    return t(e);
  t != null && (t.current = e);
}
function T(...t) {
  return (e) => {
    let n = !1;
    const o = t.map((r) => {
      const s = k(r, e);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let r = 0; r < o.length; r++) {
          const s = o[r];
          typeof s == "function" ? s() : k(t[r], null);
        }
      };
  };
}
function Rt(...t) {
  return R(T(...t), t);
}
function Lt(t, e) {
  const n = E(e), o = (s) => {
    const { children: c, ...i } = s, a = v(() => i, Object.values(i));
    return /* @__PURE__ */ u.jsx(n.Provider, { value: a, children: c });
  };
  o.displayName = t + "Provider";
  function r(s) {
    const c = L(n);
    if (c) return c;
    if (e !== void 0) return e;
    throw new Error(`\`${s}\` must be used within \`${t}\``);
  }
  return [o, r];
}
function Ot(t, e = []) {
  let n = [];
  function o(s, c) {
    const i = E(c), a = n.length;
    n = [...n, c];
    const l = (f) => {
      var A;
      const { scope: m, children: S, ...b } = f, C = ((A = m == null ? void 0 : m[t]) == null ? void 0 : A[a]) || i, V = v(() => b, Object.values(b));
      return /* @__PURE__ */ u.jsx(C.Provider, { value: V, children: S });
    };
    l.displayName = s + "Provider";
    function d(f, m) {
      var C;
      const S = ((C = m == null ? void 0 : m[t]) == null ? void 0 : C[a]) || i, b = L(S);
      if (b) return b;
      if (c !== void 0) return c;
      throw new Error(`\`${f}\` must be used within \`${s}\``);
    }
    return [l, d];
  }
  const r = () => {
    const s = n.map((c) => E(c));
    return function(i) {
      const a = (i == null ? void 0 : i[t]) || s;
      return v(
        () => ({ [`__scope${t}`]: { ...i, [t]: a } }),
        [i, a]
      );
    };
  };
  return r.scopeName = t, [o, G(r, ...e)];
}
function G(...t) {
  const e = t[0];
  if (t.length === 1) return e;
  const n = () => {
    const o = t.map((r) => ({
      useScope: r(),
      scopeName: r.scopeName
    }));
    return function(s) {
      const c = o.reduce((i, { useScope: a, scopeName: l }) => {
        const f = a(s)[`__scope${l}`];
        return { ...i, ...f };
      }, {});
      return v(() => ({ [`__scope${e.scopeName}`]: c }), [c]);
    };
  };
  return n.scopeName = e.scopeName, n;
}
function Wt(t, e, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(r) {
    if (t == null || t(r), n === !1 || !r.defaultPrevented)
      return e == null ? void 0 : e(r);
  };
}
var z = globalThis != null && globalThis.document ? F : () => {
}, Y = P[" useInsertionEffect ".trim().toString()] || z;
function zt({
  prop: t,
  defaultProp: e,
  onChange: n = () => {
  },
  caller: o
}) {
  const [r, s, c] = q({
    defaultProp: e,
    onChange: n
  }), i = t !== void 0, a = i ? t : r;
  {
    const d = w(t !== void 0);
    N(() => {
      const f = d.current;
      f !== i && console.warn(
        `${o} is changing from ${f ? "controlled" : "uncontrolled"} to ${i ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), d.current = i;
    }, [i, o]);
  }
  const l = R(
    (d) => {
      var f;
      if (i) {
        const m = J(d) ? d(t) : d;
        m !== t && ((f = c.current) == null || f.call(c, m));
      } else
        s(d);
    },
    [i, t, s, c]
  );
  return [a, l];
}
function q({
  defaultProp: t,
  onChange: e
}) {
  const [n, o] = O(t), r = w(n), s = w(e);
  return Y(() => {
    s.current = e;
  }, [e]), N(() => {
    var c;
    r.current !== n && ((c = s.current) == null || c.call(s, n), r.current = n);
  }, [n, r]), [n, o, s];
}
function J(t) {
  return typeof t == "function";
}
// @__NO_SIDE_EFFECTS__
function K(t) {
  const e = /* @__PURE__ */ M(t), n = p((o, r) => {
    const { children: s, ...c } = o, i = g.toArray(s), a = i.find(Q);
    if (a) {
      const l = a.props.children, d = i.map((f) => f === a ? g.count(l) > 1 ? g.only(null) : x(l) ? l.props.children : null : f);
      return /* @__PURE__ */ u.jsx(e, { ...c, ref: r, children: x(l) ? j(l, void 0, d) : null });
    }
    return /* @__PURE__ */ u.jsx(e, { ...c, ref: r, children: s });
  });
  return n.displayName = `${t}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function M(t) {
  const e = p((n, o) => {
    const { children: r, ...s } = n;
    if (x(r)) {
      const c = et(r), i = tt(s, r.props);
      return r.type !== W && (i.ref = o ? T(o, c) : c), j(r, i);
    }
    return g.count(r) > 1 ? g.only(null) : null;
  });
  return e.displayName = `${t}.SlotClone`, e;
}
var D = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function Dt(t) {
  const e = ({ children: n }) => /* @__PURE__ */ u.jsx(u.Fragment, { children: n });
  return e.displayName = `${t}.Slottable`, e.__radixId = D, e;
}
function Q(t) {
  return x(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === D;
}
function tt(t, e) {
  const n = { ...e };
  for (const o in e) {
    const r = t[o], s = e[o];
    /^on[A-Z]/.test(o) ? r && s ? n[o] = (...i) => {
      const a = s(...i);
      return r(...i), a;
    } : r && (n[o] = r) : o === "style" ? n[o] = { ...r, ...s } : o === "className" && (n[o] = [r, s].filter(Boolean).join(" "));
  }
  return { ...t, ...n };
}
function et(t) {
  var o, r;
  let e = (o = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : o.get, n = e && "isReactWarning" in e && e.isReactWarning;
  return n ? t.ref : (e = (r = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : r.get, n = e && "isReactWarning" in e && e.isReactWarning, n ? t.props.ref : t.props.ref || t.ref);
}
var nt = [
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
], Bt = nt.reduce((t, e) => {
  const n = /* @__PURE__ */ K(`Primitive.${e}`), o = p((r, s) => {
    const { asChild: c, ...i } = r, a = c ? n : e;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ u.jsx(a, { ...i, ref: s });
  });
  return o.displayName = `Primitive.${e}`, { ...t, [e]: o };
}, {});
function Ht(t, e) {
  t && Z(() => t.dispatchEvent(e));
}
var rt = P[" useId ".trim().toString()] || (() => {
}), ot = 0;
function Vt(t) {
  const [e, n] = O(rt());
  return z(() => {
    n((o) => o ?? String(ot++));
  }, [t]), t || (e ? `radix-${e}` : "");
}
function Ft(t) {
  const e = w(t);
  return N(() => {
    e.current = t;
  }), v(() => (...n) => {
    var o;
    return (o = e.current) == null ? void 0 : o.call(e, ...n);
  }, []);
}
const st = {
  "2xs": "text-2xs",
  xs: "text-xs",
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl"
}, it = {
  regular: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold"
}, ct = {
  primary: "text-text-primary",
  secondary: "text-text-secondary",
  tertiary: "text-text-tertiary",
  inverse: "text-text-inverse"
}, at = {
  none: "leading-none",
  snug: "leading-snug",
  normal: "leading-normal",
  relaxed: "leading-relaxed",
  tight: "leading-tight",
  tighter: "leading-tighter",
  supertight: "leading-supertight",
  body: "leading-body",
  heading: "leading-heading"
}, h = U.forwardRef(
  function({
    as: e = "p",
    className: n,
    size: o = "md",
    weight: r = "regular",
    tone: s = "primary",
    leading: c = "body",
    truncate: i = !1,
    ...a
  }, l) {
    const d = e;
    return /* @__PURE__ */ u.jsx(
      d,
      {
        ref: l,
        className: y(
          st[o],
          it[r],
          ct[s],
          at[c],
          i && "truncate",
          n
        ),
        ...a
      }
    );
  }
);
h.displayName = "Text";
const lt = p(
  ({ className: t, ...e }, n) => /* @__PURE__ */ u.jsx(
    h,
    {
      ref: n,
      as: "h1",
      className: y("scroll-m-20 leading-[1.1em] tracking-tighter", t),
      size: "3xl",
      weight: "bold",
      ...e
    }
  )
);
lt.displayName = "H1";
const ut = p(
  ({ className: t, ...e }, n) => /* @__PURE__ */ u.jsx(
    h,
    {
      ref: n,
      as: "h2",
      className: y("scroll-m-20 tracking-tighter first:mt-0", t),
      size: "2xl",
      weight: "bold",
      ...e
    }
  )
);
ut.displayName = "H2";
const dt = p(
  ({ className: t, ...e }, n) => /* @__PURE__ */ u.jsx(
    h,
    {
      ref: n,
      as: "h3",
      className: y("scroll-m-20 tracking-tight", t),
      size: "xl",
      weight: "semibold",
      ...e
    }
  )
);
dt.displayName = "H3";
const ft = p(
  ({ className: t, ...e }, n) => /* @__PURE__ */ u.jsx(
    h,
    {
      ref: n,
      as: "h4",
      className: y("scroll-m-20 tracking-tight", t),
      size: "lg",
      weight: "semibold",
      ...e
    }
  )
);
ft.displayName = "H4";
const pt = p(
  ({ className: t, ...e }, n) => /* @__PURE__ */ u.jsx(
    h,
    {
      ref: n,
      as: "div",
      className: y("tracking-wide uppercase", t),
      size: "xs",
      tone: "secondary",
      weight: "medium",
      ...e
    }
  )
);
pt.displayName = "HTable";
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mt = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), gt = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, n, o) => o ? o.toUpperCase() : n.toLowerCase()
), I = (t) => {
  const e = gt(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, B = (...t) => t.filter((e, n, o) => !!e && e.trim() !== "" && o.indexOf(e) === n).join(" ").trim(), xt = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var yt = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ht = p(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: o,
    className: r = "",
    children: s,
    iconNode: c,
    ...i
  }, a) => $(
    "svg",
    {
      ref: a,
      ...yt,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: o ? Number(n) * 24 / Number(e) : n,
      className: B("lucide", r),
      ...!s && !xt(i) && { "aria-hidden": "true" },
      ...i
    },
    [
      ...c.map(([l, d]) => $(l, d)),
      ...Array.isArray(s) ? s : [s]
    ]
  )
);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bt = (t, e) => {
  const n = p(
    ({ className: o, ...r }, s) => $(ht, {
      ref: s,
      iconNode: e,
      className: B(
        `lucide-${mt(I(t))}`,
        `lucide-${t}`,
        o
      ),
      ...r
    })
  );
  return n.displayName = I(t), n;
};
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vt = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], St = bt("chevron-down", vt);
var Ct = Symbol.for("react.lazy"), _ = P[" use ".trim().toString()];
function wt(t) {
  return typeof t == "object" && t !== null && "then" in t;
}
function H(t) {
  return t != null && typeof t == "object" && "$$typeof" in t && t.$$typeof === Ct && "_payload" in t && wt(t._payload);
}
// @__NO_SIDE_EFFECTS__
function _t(t) {
  const e = /* @__PURE__ */ Et(t), n = p((o, r) => {
    let { children: s, ...c } = o;
    H(s) && typeof _ == "function" && (s = _(s._payload));
    const i = g.toArray(s), a = i.find(Nt);
    if (a) {
      const l = a.props.children, d = i.map((f) => f === a ? g.count(l) > 1 ? g.only(null) : x(l) ? l.props.children : null : f);
      return /* @__PURE__ */ u.jsx(e, { ...c, ref: r, children: x(l) ? j(l, void 0, d) : null });
    }
    return /* @__PURE__ */ u.jsx(e, { ...c, ref: r, children: s });
  });
  return n.displayName = `${t}.Slot`, n;
}
var jt = /* @__PURE__ */ _t("Slot");
// @__NO_SIDE_EFFECTS__
function Et(t) {
  const e = p((n, o) => {
    let { children: r, ...s } = n;
    if (H(r) && typeof _ == "function" && (r = _(r._payload)), x(r)) {
      const c = Tt(r), i = Pt(s, r.props);
      return r.type !== W && (i.ref = o ? T(o, c) : c), j(r, i);
    }
    return g.count(r) > 1 ? g.only(null) : null;
  });
  return e.displayName = `${t}.SlotClone`, e;
}
var $t = Symbol("radix.slottable");
function Nt(t) {
  return x(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === $t;
}
function Pt(t, e) {
  const n = { ...e };
  for (const o in e) {
    const r = t[o], s = e[o];
    /^on[A-Z]/.test(o) ? r && s ? n[o] = (...i) => {
      const a = s(...i);
      return r(...i), a;
    } : r && (n[o] = r) : o === "style" ? n[o] = { ...r, ...s } : o === "className" && (n[o] = [r, s].filter(Boolean).join(" "));
  }
  return { ...t, ...n };
}
function Tt(t) {
  var o, r;
  let e = (o = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : o.get, n = e && "isReactWarning" in e && e.isReactWarning;
  return n ? t.ref : (e = (r = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : r.get, n = e && "isReactWarning" in e && e.isReactWarning, n ? t.props.ref : t.props.ref || t.ref);
}
const At = X(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm whitespace-nowrap transition-colors focus-visible:ring-1 focus-visible:ring-focus-ring focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:stroke-[1.5px]",
  {
    variants: {
      variant: {
        default: "bg-primary font-medium text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive font-medium text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background font-medium hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary font-medium text-secondary-foreground hover:bg-secondary/80",
        ghost: "font-medium hover:bg-accent hover:text-accent-foreground",
        link: "font-medium text-primary underline-offset-4 hover:underline",
        dropdown: "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-(--control-height) px-3 py-2",
        sm: "h-7 rounded-md px-3 text-xs [&_svg]:size-3",
        lg: "h-11 rounded-md px-8 text-md font-semibold",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), kt = p(
  ({ className: t, variant: e, size: n, asChild: o = !1, children: r, ...s }, c) => {
    const i = o ? jt : "button", a = e === "dropdown" ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      r,
      /* @__PURE__ */ u.jsx(St, { className: "-mr-0.5! -ml-1! size-4 stroke-[2px]! opacity-50", strokeWidth: 2 })
    ] }) : r;
    return /* @__PURE__ */ u.jsx(
      i,
      {
        ref: c,
        className: y(At({ variant: e, size: n, className: t })),
        ...s,
        children: a
      }
    );
  }
);
kt.displayName = "Button";
export {
  kt as B,
  St as C,
  pt as H,
  ht as I,
  Bt as P,
  jt as S,
  Vt as a,
  Rt as b,
  Ot as c,
  z as d,
  Wt as e,
  Ft as f,
  K as g,
  T as h,
  bt as i,
  Dt as j,
  At as k,
  lt as l,
  dt as m,
  Ht as n,
  Lt as o,
  zt as u
};
//# sourceMappingURL=button-BOW1bLRE.mjs.map
