import { ak as I, a_ as z, aP as Te, by as rs, az as dt, as as ns, aC as an, bo as gr, aV as ss, bO as Ze, bL as _r, bU as os, bs as is, a6 as yr, t as Ue, at as vr, av as as, a3 as et, G as us, z as cs, a7 as br, b8 as Le, Q as wr, aZ as ls, ap as fs, b9 as kr } from "./index-sudOvKcY.js";
import { L as ds } from "./label-KQSsSjmN.js";
import { A as hs } from "./at-sign-9F3qd4Nn.js";
var Ge = (e) => e.type === "checkbox", $e = (e) => e instanceof Date, ee = (e) => e == null;
const un = (e) => typeof e == "object";
var W = (e) => !ee(e) && !Array.isArray(e) && un(e) && !$e(e), Vt = (e) => W(e) && e.target ? Ge(e.target) ? e.target.checked : e.target.value : e, cn = (e, t) => t.split(".").some((r, n, s) => !isNaN(Number(r)) && e.has(s.slice(0, n).join("."))), ln = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return W(t) && t.hasOwnProperty("isPrototypeOf");
}, ht = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function H(e) {
  if (e instanceof Date)
    return new Date(e);
  const t = typeof FileList < "u" && e instanceof FileList;
  if (ht && (e instanceof Blob || t))
    return e;
  const r = Array.isArray(e);
  if (!r && !(W(e) && ln(e)))
    return e;
  const n = r ? [] : Object.create(Object.getPrototypeOf(e));
  for (const s in e)
    Object.prototype.hasOwnProperty.call(e, s) && (n[s] = H(e[s]));
  return n;
}
const ve = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change",
  SUBMIT: "submit",
  TRIGGER: "trigger",
  VALID: "valid"
}, me = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, pe = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, Zt = "form", fn = "root", dn = ["__proto__", "constructor", "prototype"];
var Ye = (e) => /^\w*$/.test(e), L = (e) => e === void 0, pt = (e) => e.split(/[.[\]'"]/g).filter(Boolean), y = (e, t, r) => {
  if (!t || !W(e))
    return r;
  const n = Ye(t) ? [t] : pt(t);
  if (n.some((i) => dn.includes(i)))
    return r;
  const s = n.reduce((i, o) => ee(i) ? void 0 : i[o], e);
  return L(s) || s === e ? L(e[t]) ? r : e[t] : s;
}, ae = (e) => typeof e == "boolean", re = (e) => typeof e == "function", C = (e, t, r) => {
  let n = -1;
  const s = Ye(t) ? [t] : pt(t), i = s.length, o = i - 1;
  for (; ++n < i; ) {
    const a = s[n];
    let f = r;
    if (n !== o) {
      const d = e[a];
      f = W(d) || Array.isArray(d) ? d : isNaN(+s[n + 1]) ? {} : [];
    }
    if (dn.includes(a))
      return;
    e[a] = f, e = e[a];
  }
};
const Mt = I.createContext(null);
Mt.displayName = "HookFormControlContext";
const Jt = () => I.useContext(Mt);
var hn = (e, t, r, n = !0) => {
  const s = {};
  for (const i in e)
    Object.defineProperty(s, i, {
      get: () => {
        const o = i;
        return t._proxyFormState[o] !== me.all && (t._proxyFormState[o] = !n || me.all), r && (r[o] = !0), e[o];
      }
    });
  return s;
};
const Bt = ht ? I.useLayoutEffect : I.useEffect;
function ps(e) {
  const t = Jt(), { control: r = t, disabled: n, name: s, exact: i } = e || {}, [o, a] = I.useState(() => ({
    ...r._formState,
    defaultValues: r._defaultValues
  })), f = I.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  });
  return Bt(() => r._subscribe({
    name: s,
    formState: f.current,
    exact: i,
    callback: (d) => {
      !n && a({
        ...r._formState,
        ...d,
        defaultValues: r._defaultValues
      });
    }
  }), [s, n, i]), I.useEffect(() => {
    f.current.isValid && r._setValid(!0);
  }, [r]), I.useMemo(() => hn(o, r, f.current, !1), [o, r]);
}
var ne = (e) => typeof e == "string", Ft = (e, t, r, n, s) => ne(e) ? (n && t.watch.add(e), y(r, e, s)) : Array.isArray(e) ? e.map((i) => (n && t.watch.add(i), y(r, i))) : (n && (t.watchAll = !0), r), jt = (e) => ee(e) || !un(e);
const zr = (e, t) => t.length === 0 && !Array.isArray(e) && !ln(e);
function ue(e, t, r = /* @__PURE__ */ new WeakMap()) {
  if (e === t)
    return !0;
  if (jt(e) || jt(t))
    return Object.is(e, t);
  if ($e(e) && $e(t))
    return Object.is(e.getTime(), t.getTime());
  const n = Object.keys(e), s = Object.keys(t);
  if (n.length !== s.length)
    return !1;
  if (zr(e, n) || zr(t, s))
    return Object.is(e, t);
  const i = r.get(e);
  if (i && i.has(t))
    return !0;
  i ? i.add(t) : r.set(e, new WeakSet([t]));
  for (const o of n) {
    const a = e[o];
    if (!(o in t))
      return !1;
    if (o !== "ref") {
      const f = t[o];
      if ($e(a) && $e(f) || (W(a) || Array.isArray(a)) && (W(f) || Array.isArray(f)) ? !ue(a, f, r) : !Object.is(a, f))
        return !1;
    }
  }
  return !0;
}
function ms(e) {
  const t = Jt(), { control: r = t, name: n, defaultValue: s, disabled: i, exact: o, compute: a } = e || {}, f = I.useRef(s), d = I.useRef(a), v = I.useRef(void 0), m = I.useRef(r), _ = I.useRef(n);
  d.current = a;
  const [p, Z] = I.useState(() => {
    const $ = r._getWatch(n, f.current);
    return d.current ? d.current($) : $;
  }), D = I.useCallback(($) => {
    const O = Ft(n, r._names, $ || r._formValues, !1, f.current);
    return d.current ? d.current(O) : O;
  }, [r._formValues, r._names, n]), P = I.useCallback(($) => {
    if (!i) {
      const O = Ft(n, r._names, $ || r._formValues, !1, f.current);
      if (d.current) {
        const M = d.current(O);
        ue(M, v.current) || (Z(M), v.current = M);
      } else
        Z(O);
    }
  }, [r._formValues, r._names, i, n]);
  Bt(() => ((m.current !== r || !ue(_.current, n)) && (m.current = r, _.current = n, P()), r._subscribe({
    name: n,
    formState: {
      values: !0
    },
    exact: o,
    callback: ($) => {
      P($.values);
    }
  })), [r, o, n, P]), I.useEffect(() => r._removeUnmounted());
  const V = m.current !== r, F = _.current, R = I.useMemo(() => {
    if (i)
      return null;
    const $ = !V && !ue(F, n);
    return V || $ ? D() : null;
  }, [i, V, n, F, D]);
  return R !== null ? R : p;
}
function gs(e) {
  const t = Jt(), { name: r, disabled: n, control: s = t, shouldUnregister: i, defaultValue: o, exact: a = !0 } = e, f = cn(s._names.array, r), d = I.useMemo(() => y(s._formValues, r, y(s._defaultValues, r, o)), [s, r, o]), v = ms({
    control: s,
    name: r,
    defaultValue: d,
    exact: a
  }), m = ps({
    control: s,
    name: r,
    exact: a
  }), _ = I.useRef(e), p = I.useRef(null), Z = I.useRef(s.register(r, {
    ...e.rules,
    value: v,
    ...ae(e.disabled) ? { disabled: e.disabled } : {}
  }));
  _.current = e;
  const D = I.useMemo(() => Object.defineProperties({}, {
    invalid: {
      enumerable: !0,
      get: () => !!y(m.errors, r)
    },
    isDirty: {
      enumerable: !0,
      get: () => !!y(m.dirtyFields, r)
    },
    isTouched: {
      enumerable: !0,
      get: () => !!y(m.touchedFields, r)
    },
    isValidating: {
      enumerable: !0,
      get: () => !!y(m.validatingFields, r)
    },
    error: {
      enumerable: !0,
      get: () => y(m.errors, r)
    }
  }), [m, r]), P = I.useCallback(($) => {
    const O = Vt($);
    return y(s._fields, r) || (Z.current = s.register(r, {
      ..._.current.rules,
      value: O
    })), Z.current.onChange({
      target: {
        value: Vt($),
        name: r
      },
      type: ve.CHANGE
    });
  }, [r, s]), V = I.useCallback(() => Z.current.onBlur({
    target: {
      value: y(s._formValues, r),
      name: r
    },
    type: ve.BLUR
  }), [r, s._formValues]), F = I.useCallback(($) => {
    $ && (p.current = {
      focus: () => re($.focus) && $.focus(),
      select: () => re($.select) && $.select(),
      setCustomValidity: (M) => re($.setCustomValidity) && $.setCustomValidity(M),
      reportValidity: () => re($.reportValidity) && $.reportValidity()
    });
    const O = y(s._fields, r);
    O && O._f && $ && (O._f.ref = p.current);
  }, [s._fields, r]), R = I.useMemo(() => ({
    name: r,
    value: v,
    ...ae(n) || m.disabled ? { disabled: m.disabled || n } : {},
    onChange: P,
    onBlur: V,
    ref: F
  }), [r, n, m.disabled, P, V, F, v]);
  return I.useEffect(() => {
    const $ = s._options.shouldUnregister || i;
    s.register(r, {
      ..._.current.rules,
      ...ae(_.current.disabled) ? { disabled: _.current.disabled } : {}
    });
    const O = (M, ce) => {
      const le = y(s._fields, M);
      le && le._f && (le._f.mount = ce);
    };
    if (O(r, !0), $) {
      const M = H(y(i ? s._defaultValues : s._options.values || s._defaultValues, r, y(s._options.defaultValues, r, _.current.defaultValue)));
      C(s._defaultValues, r, M), L(y(s._formValues, r)) && C(s._formValues, r, M);
    }
    if (!f && s.register(r), p.current) {
      const M = y(s._fields, r);
      M && M._f && (M._f.ref = p.current);
    }
    return () => {
      (f ? $ && !s._state.action : $) ? s.unregister(r) : O(r, !1);
    };
  }, [r, s, f, i]), I.useEffect(() => {
    s._setDisabledField({
      disabled: n,
      name: r
    });
  }, [n, r, s]), I.useMemo(() => ({
    field: R,
    formState: m,
    fieldState: D
  }), [R, m, D]);
}
const _s = (e) => e.render(gs(e)), Wt = I.createContext(null);
Wt.displayName = "HookFormContext";
const ys = () => I.useContext(Wt), vs = ({ children: e, watch: t, getValues: r, getFieldState: n, setError: s, clearErrors: i, setValue: o, setValues: a, trigger: f, formState: d, resetField: v, reset: m, handleSubmit: _, unregister: p, control: Z, register: D, setFocus: P, subscribe: V }) => {
  const F = I.useMemo(() => ({
    watch: t,
    getValues: r,
    getFieldState: n,
    setError: s,
    clearErrors: i,
    setValue: o,
    setValues: a,
    trigger: f,
    formState: d,
    resetField: v,
    reset: m,
    handleSubmit: _,
    unregister: p,
    control: Z,
    register: D,
    setFocus: P,
    subscribe: V
  }), [
    i,
    Z,
    d,
    n,
    r,
    _,
    D,
    m,
    v,
    s,
    P,
    o,
    a,
    V,
    f,
    p,
    t
  ]);
  return I.createElement(
    Wt.Provider,
    { value: F },
    I.createElement(Mt.Provider, { value: F.control }, e)
  );
};
var qt = (e, t, r, n, s) => t ? {
  ...r[e],
  types: {
    ...r[e] && r[e].types ? r[e].types : {},
    [n]: s || !0
  }
} : {}, pn = (e) => Array.isArray(e) ? e.filter(Boolean) : [], st = (e) => Array.isArray(e) ? e : [e], $r = () => {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (s) => {
      for (const i of e)
        i.next && i.next(s);
    },
    subscribe: (s) => (e.push(s), {
      unsubscribe: () => {
        e = e.filter((i) => i !== s);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
};
function mn(e, t) {
  const r = {};
  for (const n in e)
    if (e.hasOwnProperty(n)) {
      const s = e[n], i = t[n];
      if (s && W(s) && i) {
        const o = mn(s, i);
        W(o) && (r[n] = o);
      } else e[n] && (r[n] = i);
    }
  return r;
}
var Q = (e) => W(e) && !Object.keys(e).length, Ht = (e) => e.type === "file", it = (e) => {
  if (!ht)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, gn = (e) => e.type === "select-multiple", Kt = (e) => e.type === "radio", bs = (e) => Kt(e) || Ge(e), It = (e) => it(e) && e.isConnected;
function ws(e, t) {
  const r = t.slice(0, -1).length;
  let n = 0;
  for (; n < r; ) {
    if (ee(e)) {
      e = void 0;
      break;
    }
    e = e[t[n]], n++;
  }
  return e;
}
function ks(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !L(e[t]))
      return !1;
  return !0;
}
function G(e, t) {
  if (ne(t) && Object.prototype.hasOwnProperty.call(e, t))
    return delete e[t], e;
  const r = Array.isArray(t) ? t : Ye(t) ? [t] : pt(t), n = r.length === 1 ? e : ws(e, r), s = r.length - 1, i = r[s];
  return n && delete n[i], s !== 0 && (W(n) && Q(n) || Array.isArray(n) && ks(n)) && G(e, r.slice(0, -1)), e;
}
var zs = (e) => {
  for (const t in e)
    if (re(e[t]))
      return !0;
  return !1;
};
function _n(e) {
  return Array.isArray(e) || W(e) && !zs(e);
}
function Pt(e, t = {}) {
  for (const r in e) {
    const n = e[r];
    _n(n) ? (t[r] = Array.isArray(n) ? [] : {}, Pt(n, t[r])) : L(n) || (t[r] = !0);
  }
  return t;
}
function Tt(e) {
  if (e !== !1) {
    if (e === !0)
      return !0;
    if (Array.isArray(e)) {
      const t = e.map((r) => Tt(r));
      return t.some((r) => r !== void 0) ? t : void 0;
    }
    if (W(e)) {
      const t = {};
      for (const r in e) {
        const n = Tt(e[r]);
        L(n) || (t[r] = n);
      }
      return Object.keys(t).length ? t : void 0;
    }
  }
}
function ze(e, t, r) {
  r || (r = Pt(t));
  for (const n in e) {
    const s = e[n];
    if (_n(s))
      L(t) || jt(r[n]) ? r[n] = Pt(s, Array.isArray(s) ? [] : {}) : ze(s, ee(t) ? {} : t[n], r[n]);
    else {
      const i = t[n];
      r[n] = !ue(s, i);
    }
  }
  return Tt(r) || {};
}
const Sr = {
  value: !1,
  isValid: !1
}, Or = { value: !0, isValid: !0 };
var yn = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((r) => r && r.checked && !r.disabled).map((r) => r.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !L(e[0].attributes.value) ? L(e[0].value) || e[0].value === "" ? Or : { value: e[0].value, isValid: !0 } : Or
    ) : Sr;
  }
  return Sr;
}, vn = (e, { valueAsNumber: t, valueAsDate: r, setValueAs: n }) => L(e) ? e : t ? e === "" ? NaN : e && +e : r && ne(e) ? new Date(e) : n ? n(e) : e;
const Er = {
  isValid: !1,
  value: null
};
var bn = (e) => Array.isArray(e) ? e.reduce((t, r) => r && r.checked && !r.disabled ? {
  isValid: !0,
  value: r.value
} : t, Er) : Er;
function xr(e) {
  const t = e.ref;
  return Ht(t) ? t.files : Kt(t) ? bn(e.refs).value : gn(t) ? [...t.selectedOptions].map(({ value: r }) => r) : Ge(t) ? yn(e.refs).value : vn(L(t.value) ? e.ref.value : t.value, e);
}
var $s = (e, t, r, n) => {
  const s = {};
  for (const i of e) {
    const o = y(t, i);
    o && C(s, i, o._f);
  }
  return {
    criteriaMode: r,
    names: [...e],
    fields: s,
    shouldUseNativeValidation: n
  };
}, at = (e) => e instanceof RegExp, Me = (e) => L(e) ? e : at(e) ? e.source : W(e) ? at(e.value) ? e.value.source : e.value : e, Zr = (e) => ({
  isOnSubmit: !e || e === me.onSubmit,
  isOnBlur: e === me.onBlur,
  isOnChange: e === me.onChange,
  isOnAll: e === me.all,
  isOnTouch: e === me.onTouched
});
const Ir = "AsyncFunction";
var Ss = (e) => !!e && !!e.validate && !!(re(e.validate) && e.validate.constructor.name === Ir || W(e.validate) && Object.values(e.validate).find((t) => t.constructor.name === Ir)), Os = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate), At = (e, t, r) => !r && (t.watchAll || t.watch.has(e) || [...t.watch].some((n) => e.startsWith(`${n}.`)));
const qe = (e, t, r, n) => {
  for (const s of r || Object.keys(e)) {
    const i = y(e, s);
    if (i) {
      const { _f: o, ...a } = i;
      if (o) {
        if (o.refs && o.refs[0] && t(o.refs[0], s) && !n)
          return !0;
        if (o.ref && t(o.ref, o.name) && !n)
          return !0;
        if (qe(a, t))
          break;
      } else if (W(a) && qe(a, t))
        break;
    }
  }
};
function Ar(e, t, r) {
  const n = y(e, r);
  if (n || Ye(r))
    return {
      error: n,
      name: r
    };
  const s = r.split(".");
  for (; s.length; ) {
    const i = s.join("."), o = y(t, i), a = y(e, i);
    if (o && !Array.isArray(o) && r !== i)
      return { name: r };
    if (a && a.type)
      return {
        name: i,
        error: a
      };
    if (a && a.root && a.root.type)
      return {
        name: `${i}.root`,
        error: a.root
      };
    s.pop();
  }
  return {
    name: r
  };
}
var Es = (e, t, r, n) => {
  r(e);
  const { name: s, ...i } = e;
  return Q(i) || n && Object.keys(i).length >= Object.keys(t).length || Object.keys(i).find((o) => t[o] === (!n || me.all));
}, xs = (e, t, r) => !e || !t || e === t || st(e).some((n) => n && (r ? n === t : n.startsWith(t) || t.startsWith(n))), Zs = (e, t, r, n, s) => s.isOnAll ? !1 : !r && s.isOnTouch ? !(t || e) : (r ? n.isOnBlur : s.isOnBlur) ? !e : (r ? n.isOnChange : s.isOnChange) ? e : !0, Is = (e, t) => !pn(y(e, t)).length && G(e, t), Vr = (e, t, r) => {
  const n = y(e, r), s = Array.isArray(n) ? n : [];
  return C(s, fn, t[r]), C(e, r, s), e;
};
function Fr(e, t, r = "validate") {
  if (ne(e) || Array.isArray(e) && e.every(ne) || ae(e) && !e)
    return {
      type: r,
      message: ne(e) ? e : "",
      ref: t
    };
}
var Ie = (e) => W(e) && !at(e) ? e : {
  value: e,
  message: ""
}, jr = async (e, t, r, n, s, i) => {
  const { ref: o, refs: a, required: f, maxLength: d, minLength: v, min: m, max: _, pattern: p, validate: Z, name: D, valueAsNumber: P, mount: V } = e._f, F = y(r, D);
  if (!V || t.has(D))
    return {};
  const R = a ? a[0] : o, $ = (E) => {
    if (s && R.reportValidity) {
      const x = ae(E) ? "" : E || "";
      a ? a.forEach((J) => J.setCustomValidity(x)) : R.setCustomValidity(x), R.reportValidity();
    }
  }, O = {}, M = Kt(o), ce = Ge(o), le = M || ce, ye = (P || Ht(o)) && L(o.value) && L(F) || it(o) && o.value === "" || F === "" || Array.isArray(F) && !F.length, oe = qt.bind(null, D, n, O), j = (E, x, J, U = pe.maxLength, ie = pe.minLength) => {
    const _e = E ? x : J;
    O[D] = {
      type: E ? U : ie,
      message: _e,
      ref: o,
      ...oe(E ? U : ie, _e)
    };
  };
  if (i ? !Array.isArray(F) || !F.length : f && (!le && (ye || ee(F)) || ae(F) && !F || ce && !yn(a).isValid || M && !bn(a).isValid)) {
    const { value: E, message: x } = ne(f) ? { value: !!f, message: f } : Ie(f);
    if (E && (O[D] = {
      type: pe.required,
      message: x,
      ref: R,
      ...oe(pe.required, x)
    }, !n))
      return $(x), O;
  }
  if (!ye && (!ee(m) || !ee(_))) {
    let E, x;
    const J = Ie(_), U = Ie(m);
    if (!ee(F) && !isNaN(F)) {
      const ie = o.valueAsNumber || F && +F;
      ee(J.value) || (E = ie > J.value), ee(U.value) || (x = ie < U.value);
    } else {
      const ie = o.valueAsDate || new Date(F), _e = (Xe) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + Xe), xe = o.type == "time", Ce = o.type == "week";
      ne(J.value) && F && (E = xe ? _e(F) > _e(J.value) : Ce ? F > J.value : ie > new Date(J.value)), ne(U.value) && F && (x = xe ? _e(F) < _e(U.value) : Ce ? F < U.value : ie < new Date(U.value));
    }
    if ((E || x) && (j(!!E, J.message, U.message, pe.max, pe.min), !n))
      return $(O[D].message), O;
  }
  if ((d || v) && !ye && (ne(F) || i && Array.isArray(F))) {
    const E = Ie(d), x = Ie(v), J = !ee(E.value) && F.length > +E.value, U = !ee(x.value) && F.length < +x.value;
    if ((J || U) && (j(J, E.message, x.message), !n))
      return $(O[D].message), O;
  }
  if (p && !ye && ne(F)) {
    const { value: E, message: x } = Ie(p);
    if (at(E) && !F.match(E) && (O[D] = {
      type: pe.pattern,
      message: x,
      ref: o,
      ...oe(pe.pattern, x)
    }, !n))
      return $(x), O;
  }
  if (Z) {
    if (re(Z)) {
      const E = await Z(F, r), x = Fr(E, R);
      if (x && (O[D] = {
        ...x,
        ...oe(pe.validate, x.message)
      }, !n))
        return $(x.message), O;
    } else if (W(Z)) {
      let E = {};
      for (const x in Z) {
        if (!Q(E) && !n)
          break;
        const J = Fr(await Z[x](F, r), R, x);
        J && (E = {
          ...J,
          ...oe(x, J.message)
        }, $(J.message), n && (O[D] = E));
      }
      if (!Q(E) && (O[D] = {
        ref: R,
        ...E
      }, !n))
        return O;
    }
  }
  return $(!0), O;
};
const As = {
  mode: me.onSubmit,
  reValidateMode: me.onChange,
  shouldFocusError: !0
}, wn = {
  submitCount: 0,
  isDirty: !1,
  isReady: !1,
  isValidating: !1,
  isSubmitted: !1,
  isSubmitting: !1,
  isSubmitSuccessful: !1,
  isValid: !1,
  touchedFields: {},
  dirtyFields: {},
  validatingFields: {}
};
function Vs(e = {}) {
  let t = {
    ...As,
    ...e
  }, r = {
    ...H(wn),
    isLoading: re(t.defaultValues),
    errors: t.errors || {},
    disabled: t.disabled || !1
  }, n = {}, s = W(t.defaultValues) || W(t.values) ? H(t.defaultValues || t.values) || {} : {}, i = t.shouldUnregister ? {} : H(s), o = {
    action: !1,
    mount: !1,
    watch: !1,
    keepIsValid: !1
  }, a = {
    mount: /* @__PURE__ */ new Set(),
    disabled: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set(),
    registerName: /* @__PURE__ */ new Set()
  }, f, d = 0;
  const v = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, m = {
    ...v
  };
  let _ = {
    ...m
  };
  const p = {
    array: $r(),
    state: $r()
  }, Z = t.criteriaMode === me.all, D = (u) => (c) => {
    clearTimeout(d), d = setTimeout(u, c);
  }, P = async (u) => {
    if (!o.keepIsValid && !t.disabled && (m.isValid || _.isValid || u)) {
      let c;
      t.resolver ? (c = Q((await oe()).errors), V()) : c = await x({
        fields: n,
        onlyCheckValid: !0,
        eventType: ve.VALID
      }), c !== r.isValid && p.state.next({
        isValid: c
      });
    }
  }, V = (u, c) => {
    !t.disabled && (m.isValidating || m.validatingFields || _.isValidating || _.validatingFields) && ((u || Array.from(a.mount)).forEach((l) => {
      l && (c ? C(r.validatingFields, l, c) : G(r.validatingFields, l));
    }), p.state.next({
      validatingFields: r.validatingFields,
      isValidating: !Q(r.validatingFields)
    }));
  }, F = () => {
    r.dirtyFields = ze(s, i);
  }, R = (u, c = [], l, g, w = !0, k = !0) => {
    if (g && l && !t.disabled) {
      if (o.action = !0, k && Array.isArray(y(n, u))) {
        const b = l(y(n, u), g.argA, g.argB);
        w && C(n, u, b);
      }
      if (k && Array.isArray(y(r.errors, u))) {
        const b = l(y(r.errors, u), g.argA, g.argB);
        w && C(r.errors, u, b), Is(r.errors, u);
      }
      if ((m.touchedFields || _.touchedFields) && k && Array.isArray(y(r.touchedFields, u))) {
        const b = l(y(r.touchedFields, u), g.argA, g.argB);
        w && C(r.touchedFields, u, b);
      }
      (m.dirtyFields || _.dirtyFields) && F(), p.state.next({
        name: u,
        isDirty: U(u, c),
        dirtyFields: r.dirtyFields,
        errors: r.errors,
        isValid: r.isValid
      });
    } else
      C(i, u, c);
  }, $ = (u, c) => {
    C(r.errors, u, c), r.errors = { ...r.errors }, p.state.next({
      errors: r.errors
    });
  }, O = (u) => {
    r.errors = u, p.state.next({
      errors: r.errors,
      isValid: !1
    });
  }, M = (u) => {
    const c = Ye(u) ? [u] : pt(u);
    let l = i, g = s;
    for (let w = 0; w < c.length - 1; w++) {
      const k = c[w];
      if (l = ee(l) ? l : l[k], g = ee(g) ? g : g[k], l === null && g !== null)
        return !0;
    }
    return !1;
  }, ce = (u, c, l, g) => {
    const w = y(n, u);
    if (w) {
      if (M(u))
        return;
      const k = L(y(i, u)), b = y(i, u, L(l) ? y(s, u) : l);
      L(b) || g && g.defaultChecked || c ? C(i, u, c ? b : xr(w._f)) : xe(u, b), o.mount && !o.action && (P(), k && r.isDirty && (m.isDirty || _.isDirty) && (U() || (r.isDirty = !1, p.state.next({ ...r }))), e.shouldUnregister && k && !L(y(i, u)) && At(u, a) && (o.watch = !0));
    }
  }, le = (u, c, l, g, w) => {
    let k = !1, b = !1;
    const S = {
      name: u
    };
    if (!t.disabled) {
      if (!l || g) {
        (m.isDirty || _.isDirty) && (b = r.isDirty, r.isDirty = S.isDirty = U(), k = b !== S.isDirty);
        const T = ue(y(s, u), c);
        b = !!y(r.dirtyFields, u), T !== r.isDirty ? r.dirtyFields = ze(s, i) : T ? G(r.dirtyFields, u) : C(r.dirtyFields, u, !0), S.dirtyFields = r.dirtyFields, k = k || (m.dirtyFields || _.dirtyFields) && b !== !T;
      }
      if (l) {
        const T = y(r.touchedFields, u);
        T || (C(r.touchedFields, u, l), S.touchedFields = r.touchedFields, k = k || (m.touchedFields || _.touchedFields) && T !== l);
      }
      k && w && p.state.next(S);
    }
    return k ? S : {};
  }, ye = (u, c, l, g) => {
    const w = y(r.errors, u), k = (m.isValid || _.isValid) && ae(c) && r.isValid !== c;
    if (t.delayError && l ? (f = D(() => $(u, l)), f(t.delayError)) : (clearTimeout(d), f = null, l ? C(r.errors, u, l) : G(r.errors, u), r.errors = { ...r.errors }), (l ? !ue(w, l) : w) || !Q(g) || k) {
      const b = {
        ...g,
        ...k && ae(c) ? { isValid: c } : {},
        errors: r.errors,
        name: u
      };
      r = {
        ...r,
        ...b
      }, p.state.next(b);
    }
  }, oe = async (u) => (V(u, !0), await t.resolver(i, t.context, $s(u || a.mount, n, t.criteriaMode, t.shouldUseNativeValidation))), j = async (u) => {
    const { errors: c } = await oe(u);
    if (V(u), u) {
      for (const l of u) {
        const g = y(c, l);
        g ? a.array.has(l) && W(g) && !Object.keys(g).some((w) => !Number.isNaN(Number(w))) ? Vr(r.errors, { [l]: g }, l) : C(r.errors, l, g) : G(r.errors, l);
      }
      r.errors = { ...r.errors };
    } else
      r.errors = c;
    return c;
  }, E = async ({ name: u, eventType: c }) => {
    if (e.validate) {
      const l = await e.validate({
        formValues: i,
        formState: r,
        name: u,
        eventType: c
      });
      if (W(l))
        for (const g in l) {
          const w = l[g];
          w && Qe(`${Zt}.${g}`, {
            message: ne(w.message) ? w.message : "",
            type: w.type || pe.validate
          });
        }
      else ne(l) || !l ? Qe(Zt, {
        message: l || "",
        type: pe.validate
      }) : ar(Zt);
      return l;
    }
    return !0;
  }, x = async ({ fields: u, onlyCheckValid: c, name: l, eventType: g, context: w = {
    valid: !0,
    runRootValidation: !1
  } }) => {
    if (e.validate && (w.runRootValidation = !0, !await E({
      name: l,
      eventType: g
    }) && (w.valid = !1, c)))
      return w.valid;
    for (const k in u) {
      const b = u[k];
      if (b) {
        const { _f: S, ...T } = b;
        if (S) {
          const K = a.array.has(S.name), fe = b._f && Ss(b._f), he = m.validatingFields || m.isValidating || _.validatingFields || _.isValidating;
          fe && he && V([S.name], !0);
          const ke = await jr(b, a.disabled, i, Z, t.shouldUseNativeValidation && !c, K);
          if (fe && he && V([S.name]), ke[S.name] && (w.valid = !1, c) || (!c && (y(ke, S.name) ? K ? Vr(r.errors, ke, S.name) : C(r.errors, S.name, ke[S.name]) : G(r.errors, S.name)), e.shouldUseNativeValidation && ke[S.name]))
            break;
        }
        !Q(T) && await x({
          context: w,
          onlyCheckValid: c,
          fields: T,
          name: k,
          eventType: g
        });
      }
    }
    return w.valid;
  }, J = () => {
    for (const u of a.unMount) {
      const c = y(n, u);
      c && (c._f.refs ? c._f.refs.every((l) => !It(l)) : !It(c._f.ref)) && St(u);
    }
    a.unMount = /* @__PURE__ */ new Set();
  }, U = (u, c) => !t.disabled && (u && c && C(i, u, c), !ue(or(), s)), ie = (u, c, l) => Ft(u, a, {
    ...o.mount ? i : L(c) ? s : ne(u) ? { [u]: c } : c
  }, l, c), _e = (u) => pn(y(o.mount ? i : s, u, t.shouldUnregister ? y(s, u, []) : [])), xe = (u, c, l = {}, g = !1) => {
    const w = y(n, u);
    let k = c;
    if (w) {
      const b = w._f;
      b && (!b.disabled && C(i, u, vn(c, b)), k = it(b.ref) && ee(c) ? "" : c, gn(b.ref) ? [...b.ref.options].forEach((S) => S.selected = k.includes(S.value)) : b.refs ? Ge(b.ref) ? b.refs.forEach((S) => {
        (!S.defaultChecked || !S.disabled) && (Array.isArray(k) ? S.checked = !!k.find((T) => T === S.value) : S.checked = k === S.value || !!k);
      }) : b.refs.forEach((S) => S.checked = S.value === k) : Ht(b.ref) ? b.ref.value = "" : (b.ref.value = k, b.ref.type || p.state.next({
        name: u,
        values: g ? i : H(i)
      })));
    }
    (l.shouldDirty || l.shouldTouch) && le(u, k, l.shouldTouch, l.shouldDirty, !0), l.shouldValidate && $t(u);
  }, Ce = (u, c, l, g = !1) => {
    for (const w in c) {
      if (!c.hasOwnProperty(w))
        return;
      const k = c[w], b = u + "." + w, S = y(n, b);
      (a.array.has(u) || W(k) || S && !S._f) && !$e(k) ? Ce(b, k, l, g) : xe(b, k, l, g);
    }
  }, Xe = (u, c, l, g) => {
    const w = y(n, u), k = a.array.has(u), b = g ? c : H(c), S = y(i, u), T = ue(S, b);
    if (T || C(i, u, b), k)
      p.array.next({
        name: u,
        values: g ? i : H(i)
      }), (m.isDirty || m.dirtyFields || _.isDirty || _.dirtyFields) && l.shouldDirty && (F(), p.state.next({
        name: u,
        dirtyFields: r.dirtyFields,
        isDirty: U(u, b)
      }));
    else {
      const K = Array.isArray(b) && !b.length || Q(b);
      !w || w._f || ee(b) || K ? xe(u, b, l, g) : Ce(u, b, l, g);
    }
    if (!T) {
      const K = At(u, a), fe = g ? i : H(i);
      p.state.next({
        ...K && r,
        name: o.mount || K ? u : void 0,
        values: fe
      });
    }
  }, Re = (u, c, l = {}) => Xe(u, c, l, !1), qn = (u, c = {}) => {
    const l = re(u) ? u(i) : u;
    if (!ue(i, l)) {
      i = {
        ...i,
        ...l
      };
      for (const g of a.mount)
        Xe(g, y(l, g), c, !0);
      p.state.next({
        ...r,
        name: void 0,
        type: void 0,
        values: i
      }), c.shouldValidate && P();
    }
  }, nr = async (u) => {
    o.mount = !0;
    const c = u.target;
    let l = c.name, g = !0;
    const w = y(n, l), k = (T) => {
      g = Number.isNaN(T) || $e(T) && isNaN(T.getTime()) || ue(T, y(i, l, T));
    }, b = Zr(t.mode), S = Zr(t.reValidateMode);
    if (w) {
      let T, K;
      const fe = c.type ? xr(w._f) : Vt(u), he = u.type === ve.BLUR || u.type === ve.FOCUS_OUT, ke = !Os(w._f) && !e.validate && !t.resolver && !y(r.errors, l) && !w._f.deps || Zs(he, y(r.touchedFields, l), r.isSubmitted, S, b), xt = At(l, a, he);
      C(i, l, fe), he ? (!c || !c.readOnly) && (w._f.onBlur && w._f.onBlur(u), f && f(0)) : w._f.onChange && w._f.onChange(u);
      const Ne = le(l, fe, he), es = !Q(Ne) || xt;
      if (!he && p.state.next({
        name: l,
        type: u.type,
        values: H(i)
      }), ke)
        return (m.isValid || _.isValid) && (t.mode === "onBlur" ? he && P() : he || P()), es && p.state.next({ name: l, ...xt ? {} : Ne });
      if (!t.resolver && e.validate && await E({
        name: l,
        eventType: u.type
      }), !he && xt && p.state.next({ ...r }), t.resolver) {
        const { errors: pr } = await oe([l]);
        if (V([l]), k(fe), !g) {
          !Q(Ne) && p.state.next(Ne);
          return;
        }
        const ts = Ar(r.errors, n, l), mr = Ar(pr, n, ts.name || l);
        T = mr.error, l = mr.name, K = Q(pr);
      } else
        V([l], !0), T = (await jr(w, a.disabled, i, Z, t.shouldUseNativeValidation))[l], V([l]), k(fe), g && (T ? K = !1 : (m.isValid || _.isValid) && (K = await x({
          fields: n,
          onlyCheckValid: !0,
          name: l,
          eventType: u.type
        })));
      g && (w._f.deps && (!Array.isArray(w._f.deps) || w._f.deps.length > 0) && $t(w._f.deps), ye(l, K, T, Ne));
    }
  }, sr = (u, c) => {
    if (y(r.errors, c) && u.focus)
      return u.focus(), 1;
  }, $t = async (u, c = {}) => {
    let l, g;
    const w = st(u);
    if (t.resolver) {
      const k = await j(L(u) ? u : w);
      l = Q(k), g = u ? !w.some((b) => y(k, b)) : l;
    } else u ? (g = (await Promise.all(w.map(async (k) => {
      const b = y(n, k);
      return await x({
        fields: b && b._f ? { [k]: b } : b,
        eventType: ve.TRIGGER
      });
    }))).every(Boolean), !(!g && !r.isValid) && P()) : g = l = await x({
      fields: n,
      name: u,
      eventType: ve.TRIGGER
    });
    return p.state.next({
      ...!ne(u) || (m.isValid || _.isValid) && l !== r.isValid ? {} : { name: u },
      ...t.resolver || !u ? { isValid: l } : {},
      errors: r.errors
    }), c.shouldFocus && !g && qe(n, sr, u ? w : a.mount), g;
  }, or = (u, c) => {
    let l = {
      ...o.mount ? i : s
    };
    return c && (l = mn(c.dirtyFields ? r.dirtyFields : r.touchedFields, l)), L(u) ? l : ne(u) ? y(l, u) : u.map((g) => y(l, g));
  }, ir = (u, c) => ({
    invalid: !!y((c || r).errors, u),
    isDirty: !!y((c || r).dirtyFields, u),
    error: y((c || r).errors, u),
    isValidating: !!y(r.validatingFields, u),
    isTouched: !!y((c || r).touchedFields, u)
  }), ar = (u) => {
    const c = u ? st(u) : void 0;
    c?.forEach((l) => G(r.errors, l)), c ? c.forEach((l) => {
      p.state.next({
        name: l,
        errors: r.errors
      });
    }) : p.state.next({
      errors: {}
    });
  }, Qe = (u, c, l) => {
    const g = (y(n, u, { _f: {} })._f || {}).ref, w = y(r.errors, u) || {}, { ref: k, message: b, type: S, ...T } = w;
    C(r.errors, u, {
      ...T,
      ...c,
      ref: g
    }), p.state.next({
      name: u,
      errors: r.errors,
      isValid: !1
    }), l && l.shouldFocus && g && g.focus && g.focus();
  }, Hn = (u, c) => re(u) ? p.state.subscribe({
    next: (l) => "values" in l && u(l.values || ie(void 0, c), l)
  }) : ie(u, c, !0), ur = (u) => p.state.subscribe({
    next: (c) => {
      if (xs(u.name, c.name, u.exact) && Es(c, u.formState || m, Qn, u.reRenderRoot)) {
        const l = { ...i };
        u.callback({
          values: l,
          ...r,
          ...c,
          defaultValues: s
        });
      }
    }
  }).unsubscribe, Kn = (u) => (o.mount = !0, _ = {
    ..._,
    ...u.formState
  }, ur({
    ...u,
    formState: {
      ...v,
      ...u.formState
    }
  })), St = (u, c = {}) => {
    for (const l of u ? st(u) : a.mount)
      a.mount.delete(l), a.array.delete(l), c.keepValue || (G(n, l), G(i, l)), !c.keepError && G(r.errors, l), !c.keepDirty && G(r.dirtyFields, l), !c.keepTouched && G(r.touchedFields, l), !c.keepIsValidating && G(r.validatingFields, l), !t.shouldUnregister && !c.keepDefaultValue && G(s, l);
    p.state.next({
      values: H(i)
    }), p.state.next({
      ...r,
      ...c.keepDirty ? { isDirty: U() } : {}
    }), !c.keepIsValid && P();
  }, cr = ({ disabled: u, name: c }) => {
    if (ae(u) && o.mount || u || a.disabled.has(c)) {
      const w = a.disabled.has(c) !== !!u;
      u ? a.disabled.add(c) : a.disabled.delete(c), w && o.mount && !o.action && P();
    }
  }, Ot = (u, c = {}) => {
    let l = y(n, u);
    const g = ae(c.disabled) || ae(t.disabled), w = !a.registerName.has(u) && l && l._f && !l._f.mount;
    return C(n, u, {
      ...l || {},
      _f: {
        ...l && l._f ? l._f : { ref: { name: u } },
        name: u,
        mount: !0,
        ...c
      }
    }), a.mount.add(u), l && !w ? cr({
      disabled: ae(c.disabled) ? c.disabled : t.disabled,
      name: u
    }) : ce(u, !0, c.value), {
      ...g ? { disabled: c.disabled || t.disabled } : {},
      ...t.progressive ? {
        required: !!c.required,
        min: Me(c.min),
        max: Me(c.max),
        minLength: Me(c.minLength),
        maxLength: Me(c.maxLength),
        pattern: Me(c.pattern)
      } : {},
      name: u,
      onChange: nr,
      onBlur: nr,
      ref: (k) => {
        if (k) {
          a.registerName.add(u), Ot(u, c), a.registerName.delete(u), l = y(n, u);
          const b = L(k.value) && k.querySelectorAll && k.querySelectorAll("input,select,textarea")[0] || k, S = bs(b), T = l._f.refs || [];
          if (S ? T.find((K) => K === b) : b === l._f.ref)
            return;
          C(n, u, {
            _f: {
              ...l._f,
              ...S ? {
                refs: [
                  ...T.filter(It),
                  b,
                  ...Array.isArray(y(s, u)) ? [{}] : []
                ],
                ref: { type: b.type, name: u }
              } : { ref: b }
            }
          }), ce(u, !1, void 0, b);
        } else
          l = y(n, u, {}), l._f && (l._f.mount = !1), (t.shouldUnregister || c.shouldUnregister) && !(cn(a.array, u) && o.action) && a.unMount.add(u);
      }
    };
  }, Et = () => t.shouldFocusError && !t.shouldUseNativeValidation && qe(n, sr, a.mount), Gn = (u) => {
    ae(u) && (p.state.next({ disabled: u }), qe(n, (c, l) => {
      const g = y(n, l);
      g && (c.disabled = g._f.disabled || u, Array.isArray(g._f.refs) && g._f.refs.forEach((w) => {
        w.disabled = g._f.disabled || u;
      }));
    }, 0, !1));
  }, lr = (u, c) => async (l) => {
    let g;
    l && (l.preventDefault && l.preventDefault(), l.persist && l.persist());
    let w = H(i);
    if (p.state.next({
      isSubmitting: !0
    }), t.resolver) {
      const { errors: k, values: b } = await oe();
      V(), r.errors = k, w = H(b);
    } else
      await x({
        fields: n,
        eventType: ve.SUBMIT
      });
    if (a.disabled.size)
      for (const k of a.disabled)
        G(w, k);
    if (G(r.errors, fn), Q(r.errors)) {
      p.state.next({
        errors: {}
      });
      try {
        await u(w, l);
      } catch (k) {
        g = k;
      }
    } else
      c && await c({ ...r.errors }, l), Et(), setTimeout(Et);
    if (p.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: Q(r.errors) && !g,
      submitCount: r.submitCount + 1,
      errors: r.errors
    }), g)
      throw g;
  }, Yn = (u, c = {}) => {
    y(n, u) && (L(c.defaultValue) ? Re(u, H(y(s, u))) : (Re(u, c.defaultValue), C(s, u, H(c.defaultValue))), c.keepTouched || G(r.touchedFields, u), c.keepDirty || (G(r.dirtyFields, u), r.isDirty = c.defaultValue ? U(u, H(y(s, u))) : U()), c.keepError || (G(r.errors, u), m.isValid && P()), p.state.next({ ...r }));
  }, fr = (u, c = {}) => {
    const l = u ? H(u) : s, g = H(l), w = Q(u), k = g;
    if (c.keepDefaultValues || (s = l), !c.keepValues) {
      if (c.keepDirtyValues) {
        const b = /* @__PURE__ */ new Set([
          ...a.mount,
          ...Object.keys(ze(s, i))
        ]);
        for (const S of Array.from(b)) {
          const T = y(r.dirtyFields, S), K = y(i, S), fe = y(k, S);
          T && !L(K) ? C(k, S, K) : !T && !L(fe) && Re(S, fe);
        }
      } else {
        if (ht && L(u))
          for (const b of a.mount) {
            const S = y(n, b);
            if (S && S._f) {
              const T = Array.isArray(S._f.refs) ? S._f.refs[0] : S._f.ref;
              if (it(T)) {
                const K = T.closest("form");
                if (K) {
                  K.reset();
                  break;
                }
              }
            }
          }
        if (c.keepFieldsRef)
          for (const b of a.mount)
            Re(b, y(k, b));
        else
          n = {};
      }
      if (t.shouldUnregister) {
        if (i = c.keepDefaultValues ? H(s) : {}, c.keepFieldsRef)
          for (const b of a.mount)
            C(i, b, y(k, b));
      } else
        i = H(k);
      p.array.next({
        values: { ...k }
      }), p.state.next({
        values: { ...k }
      });
    }
    a = {
      mount: c.keepDirtyValues ? a.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      registerName: /* @__PURE__ */ new Set(),
      disabled: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, o.mount = !m.isValid || !!c.keepIsValid || !!c.keepDirtyValues || !t.shouldUnregister && !Q(k), o.watch = !!t.shouldUnregister, o.keepIsValid = !!c.keepIsValid, o.action = !1, c.keepErrors || (r.errors = {}), p.state.next({
      submitCount: c.keepSubmitCount ? r.submitCount : 0,
      isDirty: w ? !1 : c.keepDirty ? r.isDirty : c.keepValues ? U() : !!(c.keepDefaultValues && !ue(u, s)),
      isSubmitted: c.keepIsSubmitted ? r.isSubmitted : !1,
      dirtyFields: w ? {} : c.keepDirtyValues ? c.keepDefaultValues && i ? ze(s, i) : r.dirtyFields : c.keepDefaultValues && u ? ze(s, u) : c.keepDirty ? r.dirtyFields : {},
      touchedFields: c.keepTouched ? r.touchedFields : {},
      errors: c.keepErrors ? r.errors : {},
      isSubmitSuccessful: c.keepIsSubmitSuccessful ? r.isSubmitSuccessful : !1,
      isSubmitting: !1,
      defaultValues: s
    });
  }, dr = (u, c) => fr(re(u) ? u(i) : u, { ...t.resetOptions, ...c }), Xn = (u, c = {}) => {
    const l = y(n, u), g = l && l._f;
    if (g) {
      const w = g.refs ? g.refs[0] : g.ref;
      w.focus && setTimeout(() => {
        w.focus(), c.shouldSelect && re(w.select) && w.select();
      });
    }
  }, Qn = (u) => {
    r = {
      ...r,
      ...u
    };
  }, hr = {
    control: {
      register: Ot,
      unregister: St,
      getFieldState: ir,
      handleSubmit: lr,
      setError: Qe,
      _subscribe: ur,
      _runSchema: oe,
      _updateIsValidating: V,
      _focusError: Et,
      _getWatch: ie,
      _getDirty: U,
      _setValid: P,
      _setFieldArray: R,
      _setDisabledField: cr,
      _setErrors: O,
      _getFieldArray: _e,
      _reset: fr,
      _resetDefaultValues: () => re(t.defaultValues) && t.defaultValues().then((u) => {
        dr(u, t.resetOptions), p.state.next({
          isLoading: !1
        });
      }),
      _removeUnmounted: J,
      _disableForm: Gn,
      _subjects: p,
      _proxyFormState: m,
      get _fields() {
        return n;
      },
      get _formValues() {
        return i;
      },
      get _state() {
        return o;
      },
      set _state(u) {
        o = u;
      },
      get _defaultValues() {
        return s;
      },
      get _names() {
        return a;
      },
      set _names(u) {
        a = u;
      },
      get _formState() {
        return r;
      },
      get _options() {
        return t;
      },
      set _options(u) {
        t = {
          ...t,
          ...u
        };
      }
    },
    subscribe: Kn,
    trigger: $t,
    register: Ot,
    handleSubmit: lr,
    watch: Hn,
    setValue: Re,
    setValues: qn,
    getValues: or,
    reset: dr,
    resetField: Yn,
    resetDefaultValues: (u, c = {}) => {
      if (s = H(u), !c.keepDirty) {
        const l = ze(s, i);
        r.dirtyFields = l, r.isDirty = !Q(l);
      }
      c.keepIsValid || P(), p.state.next({
        ...r,
        defaultValues: s
      });
    },
    clearErrors: ar,
    unregister: St,
    setError: Qe,
    setFocus: Xn,
    getFieldState: ir
  };
  return {
    ...hr,
    formControl: hr
  };
}
function Fs(e = {}) {
  const t = I.useRef(void 0), r = I.useRef(void 0), n = I.useRef(e.formControl), [s, i] = I.useState(() => ({
    ...H(wn),
    isLoading: re(e.defaultValues),
    errors: e.errors || {},
    disabled: e.disabled || !1,
    defaultValues: re(e.defaultValues) ? void 0 : e.defaultValues
  }));
  if (!t.current || e.formControl && n.current !== e.formControl)
    if (n.current = e.formControl, e.formControl)
      t.current = {
        ...e.formControl,
        formState: s
      }, e.defaultValues && !re(e.defaultValues) && e.formControl.reset(e.defaultValues, e.resetOptions);
    else {
      const { formControl: a, ...f } = Vs(e);
      t.current = {
        ...f,
        formState: s
      };
    }
  const o = t.current.control;
  return o._options = e, Bt(() => {
    const a = o._subscribe({
      formState: o._proxyFormState,
      callback: () => i({
        ...o._formState,
        defaultValues: o._defaultValues
      }),
      reRenderRoot: !0
    });
    return i((f) => ({
      ...f,
      isReady: !0
    })), o._formState.isReady = !0, a;
  }, [o]), I.useEffect(() => o._disableForm(e.disabled), [o, e.disabled]), I.useEffect(() => {
    e.mode && (o._options.mode = e.mode), e.reValidateMode && (o._options.reValidateMode = e.reValidateMode);
  }, [o, e.mode, e.reValidateMode]), I.useEffect(() => {
    e.errors && (o._setErrors(e.errors), o._focusError());
  }, [o, e.errors]), I.useEffect(() => {
    e.shouldUnregister && o._subjects.state.next({
      values: o._getWatch()
    });
  }, [o, e.shouldUnregister]), I.useEffect(() => {
    if (o._proxyFormState.isDirty) {
      const a = o._getDirty();
      a !== s.isDirty && o._subjects.state.next({
        isDirty: a
      });
    }
  }, [o, s.isDirty]), I.useEffect(() => {
    var a;
    e.values && !ue(e.values, r.current) ? (o._reset(e.values, {
      keepFieldsRef: !0,
      ...o._options.resetOptions
    }), !((a = o._options.resetOptions) === null || a === void 0) && a.keepIsValid || o._setValid(), r.current = e.values, i((f) => ({ ...f }))) : o._resetDefaultValues();
  }, [o, e.values]), I.useEffect(() => {
    o._state.mount || (o._setValid(), o._state.mount = !0), o._state.watch && (o._state.watch = !1, o._subjects.state.next({ ...o._formState })), o._removeUnmounted();
  }), t.current.formState = I.useMemo(() => hn(s, o), [o, s]), t.current;
}
const js = vs, kn = an(
  {}
), Je = ({
  ...e
}) => /* @__PURE__ */ z.jsx(kn.Provider, { value: { name: e.name }, children: /* @__PURE__ */ z.jsx(_s, { ...e }) }), mt = () => {
  const e = gr(kn), t = gr(zn), { getFieldState: r, formState: n } = ys(), s = r(e.name, n);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: i } = t;
  return {
    id: i,
    name: e.name,
    formItemId: `${i}-form-item`,
    formDescriptionId: `${i}-form-item-description`,
    formMessageId: `${i}-form-item-message`,
    ...s
  };
}, zn = an(
  {}
), Ae = Te(({ className: e, ...t }, r) => {
  const n = rs();
  return /* @__PURE__ */ z.jsx(zn.Provider, { value: { id: n }, children: /* @__PURE__ */ z.jsx("div", { ref: r, className: dt("space-y-2", e), ...t }) });
});
Ae.displayName = "FormItem";
const ot = Te(({ className: e, ...t }, r) => {
  const { formItemId: n } = mt();
  return /* @__PURE__ */ z.jsx(
    ds,
    {
      ref: r,
      className: e,
      htmlFor: n,
      ...t
    }
  );
});
ot.displayName = "FormLabel";
const Ve = Te(({ ...e }, t) => {
  const { error: r, formItemId: n, formDescriptionId: s, formMessageId: i } = mt();
  return /* @__PURE__ */ z.jsx(
    ns,
    {
      ref: t,
      "aria-describedby": r ? `${s} ${i}` : `${s}`,
      "aria-invalid": !!r,
      id: n,
      ...e
    }
  );
});
Ve.displayName = "FormControl";
const Dt = Te(({ className: e, ...t }, r) => {
  const { formDescriptionId: n } = mt();
  return /* @__PURE__ */ z.jsx(
    "p",
    {
      ref: r,
      className: dt("text-sm text-text-secondary", e),
      id: n,
      ...t
    }
  );
});
Dt.displayName = "FormDescription";
const Fe = Te(({ className: e, children: t, ...r }, n) => {
  const { error: s, formMessageId: i } = mt(), o = s ? String(s?.message ?? "") : t;
  return o ? /* @__PURE__ */ z.jsx(
    "p",
    {
      ref: n,
      className: dt("text-xs text-destructive", e),
      id: i,
      ...r,
      children: o
    }
  ) : null;
});
Fe.displayName = "FormMessage";
const $n = Te(({ className: e, ...t }, r) => /* @__PURE__ */ z.jsx(
  "textarea",
  {
    ref: r,
    className: dt(
      ss("self"),
      "flex min-h-[80px] w-full px-3 py-2 text-base placeholder:text-muted-foreground",
      e
    ),
    ...t
  }
));
$n.displayName = "Textarea";
var Pr;
function h(e, t, r) {
  function n(a, f) {
    if (a._zod || Object.defineProperty(a, "_zod", {
      value: {
        def: f,
        constr: o,
        traits: /* @__PURE__ */ new Set()
      },
      enumerable: !1
    }), a._zod.traits.has(e))
      return;
    a._zod.traits.add(e), t(a, f);
    const d = o.prototype, v = Object.keys(d);
    for (let m = 0; m < v.length; m++) {
      const _ = v[m];
      _ in a || (a[_] = d[_].bind(a));
    }
  }
  const s = r?.Parent ?? Object;
  class i extends s {
  }
  Object.defineProperty(i, "name", { value: e });
  function o(a) {
    var f;
    const d = r?.Parent ? new i() : this;
    n(d, a), (f = d._zod).deferred ?? (f.deferred = []);
    for (const v of d._zod.deferred)
      v();
    return d;
  }
  return Object.defineProperty(o, "init", { value: n }), Object.defineProperty(o, Symbol.hasInstance, {
    value: (a) => r?.Parent && a instanceof r.Parent ? !0 : a?._zod?.traits?.has(e)
  }), Object.defineProperty(o, "name", { value: e }), o;
}
class Pe extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class Sn extends Error {
  constructor(t) {
    super(`Encountered unidirectional transform during encode: ${t}`), this.name = "ZodEncodeError";
  }
}
(Pr = globalThis).__zod_globalConfig ?? (Pr.__zod_globalConfig = {});
const Gt = globalThis.__zod_globalConfig;
function Se(e) {
  return Gt;
}
function On(e) {
  const t = Object.values(e).filter((n) => typeof n == "number");
  return Object.entries(e).filter(([n, s]) => t.indexOf(+n) === -1).map(([n, s]) => s);
}
function Ct(e, t) {
  return typeof t == "bigint" ? t.toString() : t;
}
function Yt(e) {
  return {
    get value() {
      {
        const t = e();
        return Object.defineProperty(this, "value", { value: t }), t;
      }
    }
  };
}
function Xt(e) {
  return e == null;
}
function Qt(e) {
  const t = e.startsWith("^") ? 1 : 0, r = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, r);
}
const Tr = /* @__PURE__ */ Symbol("evaluating");
function N(e, t, r) {
  let n;
  Object.defineProperty(e, t, {
    get() {
      if (n !== Tr)
        return n === void 0 && (n = Tr, n = r()), n;
    },
    set(s) {
      Object.defineProperty(e, t, {
        value: s
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function Ee(e, t, r) {
  Object.defineProperty(e, t, {
    value: r,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function be(...e) {
  const t = {};
  for (const r of e) {
    const n = Object.getOwnPropertyDescriptors(r);
    Object.assign(t, n);
  }
  return Object.defineProperties({}, t);
}
function Dr(e) {
  return JSON.stringify(e);
}
function Ps(e) {
  return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const En = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function ut(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const Ts = /* @__PURE__ */ Yt(() => {
  if (Gt.jitless || typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const e = Function;
    return new e(""), !0;
  } catch {
    return !1;
  }
});
function He(e) {
  if (ut(e) === !1)
    return !1;
  const t = e.constructor;
  if (t === void 0 || typeof t != "function")
    return !0;
  const r = t.prototype;
  return !(ut(r) === !1 || Object.prototype.hasOwnProperty.call(r, "isPrototypeOf") === !1);
}
function xn(e) {
  return He(e) ? { ...e } : Array.isArray(e) ? [...e] : e instanceof Map ? new Map(e) : e instanceof Set ? new Set(e) : e;
}
const Ds = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function gt(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function we(e, t, r) {
  const n = new e._zod.constr(t ?? e._zod.def);
  return (!t || r?.parent) && (n._zod.parent = e), n;
}
function A(e) {
  const t = e;
  if (!t)
    return {};
  if (typeof t == "string")
    return { error: () => t };
  if (t?.message !== void 0) {
    if (t?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    t.error = t.message;
  }
  return delete t.message, typeof t.error == "string" ? { ...t, error: () => t.error } : t;
}
function Cs(e) {
  return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
function Rs(e, t) {
  const r = e._zod.def, n = r.checks;
  if (n && n.length > 0)
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  const i = be(e._zod.def, {
    get shape() {
      const o = {};
      for (const a in t) {
        if (!(a in r.shape))
          throw new Error(`Unrecognized key: "${a}"`);
        t[a] && (o[a] = r.shape[a]);
      }
      return Ee(this, "shape", o), o;
    },
    checks: []
  });
  return we(e, i);
}
function Ns(e, t) {
  const r = e._zod.def, n = r.checks;
  if (n && n.length > 0)
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  const i = be(e._zod.def, {
    get shape() {
      const o = { ...e._zod.def.shape };
      for (const a in t) {
        if (!(a in r.shape))
          throw new Error(`Unrecognized key: "${a}"`);
        t[a] && delete o[a];
      }
      return Ee(this, "shape", o), o;
    },
    checks: []
  });
  return we(e, i);
}
function Us(e, t) {
  if (!He(t))
    throw new Error("Invalid input to extend: expected a plain object");
  const r = e._zod.def.checks;
  if (r && r.length > 0) {
    const i = e._zod.def.shape;
    for (const o in t)
      if (Object.getOwnPropertyDescriptor(i, o) !== void 0)
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  const s = be(e._zod.def, {
    get shape() {
      const i = { ...e._zod.def.shape, ...t };
      return Ee(this, "shape", i), i;
    }
  });
  return we(e, s);
}
function Ls(e, t) {
  if (!He(t))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const r = be(e._zod.def, {
    get shape() {
      const n = { ...e._zod.def.shape, ...t };
      return Ee(this, "shape", n), n;
    }
  });
  return we(e, r);
}
function Ms(e, t) {
  if (e._zod.def.checks?.length)
    throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
  const r = be(e._zod.def, {
    get shape() {
      const n = { ...e._zod.def.shape, ...t._zod.def.shape };
      return Ee(this, "shape", n), n;
    },
    get catchall() {
      return t._zod.def.catchall;
    },
    checks: t._zod.def.checks ?? []
  });
  return we(e, r);
}
function Js(e, t, r) {
  const s = t._zod.def.checks;
  if (s && s.length > 0)
    throw new Error(".partial() cannot be used on object schemas containing refinements");
  const o = be(t._zod.def, {
    get shape() {
      const a = t._zod.def.shape, f = { ...a };
      if (r)
        for (const d in r) {
          if (!(d in a))
            throw new Error(`Unrecognized key: "${d}"`);
          r[d] && (f[d] = e ? new e({
            type: "optional",
            innerType: a[d]
          }) : a[d]);
        }
      else
        for (const d in a)
          f[d] = e ? new e({
            type: "optional",
            innerType: a[d]
          }) : a[d];
      return Ee(this, "shape", f), f;
    },
    checks: []
  });
  return we(t, o);
}
function Bs(e, t, r) {
  const n = be(t._zod.def, {
    get shape() {
      const s = t._zod.def.shape, i = { ...s };
      if (r)
        for (const o in r) {
          if (!(o in i))
            throw new Error(`Unrecognized key: "${o}"`);
          r[o] && (i[o] = new e({
            type: "nonoptional",
            innerType: s[o]
          }));
        }
      else
        for (const o in s)
          i[o] = new e({
            type: "nonoptional",
            innerType: s[o]
          });
      return Ee(this, "shape", i), i;
    }
  });
  return we(t, n);
}
function je(e, t = 0) {
  if (e.aborted === !0)
    return !0;
  for (let r = t; r < e.issues.length; r++)
    if (e.issues[r]?.continue !== !0)
      return !0;
  return !1;
}
function Ws(e, t = 0) {
  if (e.aborted === !0)
    return !0;
  for (let r = t; r < e.issues.length; r++)
    if (e.issues[r]?.continue === !1)
      return !0;
  return !1;
}
function Zn(e, t) {
  return t.map((r) => {
    var n;
    return (n = r).path ?? (n.path = []), r.path.unshift(e), r;
  });
}
function tt(e) {
  return typeof e == "string" ? e : e?.message;
}
function Oe(e, t, r) {
  const n = e.message ? e.message : tt(e.inst?._zod.def?.error?.(e)) ?? tt(t?.error?.(e)) ?? tt(r.customError?.(e)) ?? tt(r.localeError?.(e)) ?? "Invalid input", { inst: s, continue: i, input: o, ...a } = e;
  return a.path ?? (a.path = []), a.message = n, t?.reportInput && (a.input = o), a;
}
function er(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function Ke(...e) {
  const [t, r, n] = e;
  return typeof t == "string" ? {
    message: t,
    code: "custom",
    input: r,
    inst: n
  } : { ...t };
}
const In = (e, t) => {
  e.name = "$ZodError", Object.defineProperty(e, "_zod", {
    value: e._zod,
    enumerable: !1
  }), Object.defineProperty(e, "issues", {
    value: t,
    enumerable: !1
  }), e.message = JSON.stringify(t, Ct, 2), Object.defineProperty(e, "toString", {
    value: () => e.message,
    enumerable: !1
  });
}, tr = h("$ZodError", In), _t = h("$ZodError", In, { Parent: Error });
function qs(e, t = (r) => r.message) {
  const r = {}, n = [];
  for (const s of e.issues)
    s.path.length > 0 ? (r[s.path[0]] = r[s.path[0]] || [], r[s.path[0]].push(t(s))) : n.push(t(s));
  return { formErrors: n, fieldErrors: r };
}
function Hs(e, t = (r) => r.message) {
  const r = { _errors: [] }, n = (s, i = []) => {
    for (const o of s.issues)
      if (o.code === "invalid_union" && o.errors.length)
        o.errors.map((a) => n({ issues: a }, [...i, ...o.path]));
      else if (o.code === "invalid_key")
        n({ issues: o.issues }, [...i, ...o.path]);
      else if (o.code === "invalid_element")
        n({ issues: o.issues }, [...i, ...o.path]);
      else {
        const a = [...i, ...o.path];
        if (a.length === 0)
          r._errors.push(t(o));
        else {
          let f = r, d = 0;
          for (; d < a.length; ) {
            const v = a[d];
            d === a.length - 1 ? (f[v] = f[v] || { _errors: [] }, f[v]._errors.push(t(o))) : f[v] = f[v] || { _errors: [] }, f = f[v], d++;
          }
        }
      }
  };
  return n(e), r;
}
const yt = (e) => (t, r, n, s) => {
  const i = n ? { ...n, async: !1 } : { async: !1 }, o = t._zod.run({ value: r, issues: [] }, i);
  if (o instanceof Promise)
    throw new Pe();
  if (o.issues.length) {
    const a = new (s?.Err ?? e)(o.issues.map((f) => Oe(f, i, Se())));
    throw En(a, s?.callee), a;
  }
  return o.value;
}, Ks = /* @__PURE__ */ yt(_t), vt = (e) => async (t, r, n, s) => {
  const i = n ? { ...n, async: !0 } : { async: !0 };
  let o = t._zod.run({ value: r, issues: [] }, i);
  if (o instanceof Promise && (o = await o), o.issues.length) {
    const a = new (s?.Err ?? e)(o.issues.map((f) => Oe(f, i, Se())));
    throw En(a, s?.callee), a;
  }
  return o.value;
}, Gs = /* @__PURE__ */ vt(_t), bt = (e) => (t, r, n) => {
  const s = n ? { ...n, async: !1 } : { async: !1 }, i = t._zod.run({ value: r, issues: [] }, s);
  if (i instanceof Promise)
    throw new Pe();
  return i.issues.length ? {
    success: !1,
    error: new (e ?? tr)(i.issues.map((o) => Oe(o, s, Se())))
  } : { success: !0, data: i.value };
}, Ys = /* @__PURE__ */ bt(_t), wt = (e) => async (t, r, n) => {
  const s = n ? { ...n, async: !0 } : { async: !0 };
  let i = t._zod.run({ value: r, issues: [] }, s);
  return i instanceof Promise && (i = await i), i.issues.length ? {
    success: !1,
    error: new e(i.issues.map((o) => Oe(o, s, Se())))
  } : { success: !0, data: i.value };
}, Xs = /* @__PURE__ */ wt(_t), Qs = (e) => (t, r, n) => {
  const s = n ? { ...n, direction: "backward" } : { direction: "backward" };
  return yt(e)(t, r, s);
}, eo = (e) => (t, r, n) => yt(e)(t, r, n), to = (e) => async (t, r, n) => {
  const s = n ? { ...n, direction: "backward" } : { direction: "backward" };
  return vt(e)(t, r, s);
}, ro = (e) => async (t, r, n) => vt(e)(t, r, n), no = (e) => (t, r, n) => {
  const s = n ? { ...n, direction: "backward" } : { direction: "backward" };
  return bt(e)(t, r, s);
}, so = (e) => (t, r, n) => bt(e)(t, r, n), oo = (e) => async (t, r, n) => {
  const s = n ? { ...n, direction: "backward" } : { direction: "backward" };
  return wt(e)(t, r, s);
}, io = (e) => async (t, r, n) => wt(e)(t, r, n), ao = /^[cC][0-9a-z]{6,}$/, uo = /^[0-9a-z]+$/, co = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, lo = /^[0-9a-vA-V]{20}$/, fo = /^[A-Za-z0-9]{27}$/, ho = /^[a-zA-Z0-9_-]{21}$/, po = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, mo = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Cr = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, go = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, _o = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function yo() {
  return new RegExp(_o, "u");
}
const vo = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, bo = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, wo = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, ko = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, zo = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, An = /^[A-Za-z0-9_-]*$/, $o = /^https?$/, So = /^\+[1-9]\d{6,14}$/, Vn = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", Oo = /* @__PURE__ */ new RegExp(`^${Vn}$`);
function Fn(e) {
  const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function Eo(e) {
  return new RegExp(`^${Fn(e)}$`);
}
function xo(e) {
  const t = Fn({ precision: e.precision }), r = ["Z"];
  e.local && r.push(""), e.offset && r.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const n = `${t}(?:${r.join("|")})`;
  return new RegExp(`^${Vn}T(?:${n})$`);
}
const Zo = (e) => {
  const t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${t}$`);
}, Io = /^[^A-Z]*$/, Ao = /^[^a-z]*$/, ge = /* @__PURE__ */ h("$ZodCheck", (e, t) => {
  var r;
  e._zod ?? (e._zod = {}), e._zod.def = t, (r = e._zod).onattach ?? (r.onattach = []);
}), Vo = /* @__PURE__ */ h("$ZodCheckMaxLength", (e, t) => {
  var r;
  ge.init(e, t), (r = e._zod.def).when ?? (r.when = (n) => {
    const s = n.value;
    return !Xt(s) && s.length !== void 0;
  }), e._zod.onattach.push((n) => {
    const s = n._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    t.maximum < s && (n._zod.bag.maximum = t.maximum);
  }), e._zod.check = (n) => {
    const s = n.value;
    if (s.length <= t.maximum)
      return;
    const o = er(s);
    n.issues.push({
      origin: o,
      code: "too_big",
      maximum: t.maximum,
      inclusive: !0,
      input: s,
      inst: e,
      continue: !t.abort
    });
  };
}), Fo = /* @__PURE__ */ h("$ZodCheckMinLength", (e, t) => {
  var r;
  ge.init(e, t), (r = e._zod.def).when ?? (r.when = (n) => {
    const s = n.value;
    return !Xt(s) && s.length !== void 0;
  }), e._zod.onattach.push((n) => {
    const s = n._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    t.minimum > s && (n._zod.bag.minimum = t.minimum);
  }), e._zod.check = (n) => {
    const s = n.value;
    if (s.length >= t.minimum)
      return;
    const o = er(s);
    n.issues.push({
      origin: o,
      code: "too_small",
      minimum: t.minimum,
      inclusive: !0,
      input: s,
      inst: e,
      continue: !t.abort
    });
  };
}), jo = /* @__PURE__ */ h("$ZodCheckLengthEquals", (e, t) => {
  var r;
  ge.init(e, t), (r = e._zod.def).when ?? (r.when = (n) => {
    const s = n.value;
    return !Xt(s) && s.length !== void 0;
  }), e._zod.onattach.push((n) => {
    const s = n._zod.bag;
    s.minimum = t.length, s.maximum = t.length, s.length = t.length;
  }), e._zod.check = (n) => {
    const s = n.value, i = s.length;
    if (i === t.length)
      return;
    const o = er(s), a = i > t.length;
    n.issues.push({
      origin: o,
      ...a ? { code: "too_big", maximum: t.length } : { code: "too_small", minimum: t.length },
      inclusive: !0,
      exact: !0,
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), kt = /* @__PURE__ */ h("$ZodCheckStringFormat", (e, t) => {
  var r, n;
  ge.init(e, t), e._zod.onattach.push((s) => {
    const i = s._zod.bag;
    i.format = t.format, t.pattern && (i.patterns ?? (i.patterns = /* @__PURE__ */ new Set()), i.patterns.add(t.pattern));
  }), t.pattern ? (r = e._zod).check ?? (r.check = (s) => {
    t.pattern.lastIndex = 0, !t.pattern.test(s.value) && s.issues.push({
      origin: "string",
      code: "invalid_format",
      format: t.format,
      input: s.value,
      ...t.pattern ? { pattern: t.pattern.toString() } : {},
      inst: e,
      continue: !t.abort
    });
  }) : (n = e._zod).check ?? (n.check = () => {
  });
}), Po = /* @__PURE__ */ h("$ZodCheckRegex", (e, t) => {
  kt.init(e, t), e._zod.check = (r) => {
    t.pattern.lastIndex = 0, !t.pattern.test(r.value) && r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: r.value,
      pattern: t.pattern.toString(),
      inst: e,
      continue: !t.abort
    });
  };
}), To = /* @__PURE__ */ h("$ZodCheckLowerCase", (e, t) => {
  t.pattern ?? (t.pattern = Io), kt.init(e, t);
}), Do = /* @__PURE__ */ h("$ZodCheckUpperCase", (e, t) => {
  t.pattern ?? (t.pattern = Ao), kt.init(e, t);
}), Co = /* @__PURE__ */ h("$ZodCheckIncludes", (e, t) => {
  ge.init(e, t);
  const r = gt(t.includes), n = new RegExp(typeof t.position == "number" ? `^.{${t.position}}${r}` : r);
  t.pattern = n, e._zod.onattach.push((s) => {
    const i = s._zod.bag;
    i.patterns ?? (i.patterns = /* @__PURE__ */ new Set()), i.patterns.add(n);
  }), e._zod.check = (s) => {
    s.value.includes(t.includes, t.position) || s.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: t.includes,
      input: s.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Ro = /* @__PURE__ */ h("$ZodCheckStartsWith", (e, t) => {
  ge.init(e, t);
  const r = new RegExp(`^${gt(t.prefix)}.*`);
  t.pattern ?? (t.pattern = r), e._zod.onattach.push((n) => {
    const s = n._zod.bag;
    s.patterns ?? (s.patterns = /* @__PURE__ */ new Set()), s.patterns.add(r);
  }), e._zod.check = (n) => {
    n.value.startsWith(t.prefix) || n.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: t.prefix,
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), No = /* @__PURE__ */ h("$ZodCheckEndsWith", (e, t) => {
  ge.init(e, t);
  const r = new RegExp(`.*${gt(t.suffix)}$`);
  t.pattern ?? (t.pattern = r), e._zod.onattach.push((n) => {
    const s = n._zod.bag;
    s.patterns ?? (s.patterns = /* @__PURE__ */ new Set()), s.patterns.add(r);
  }), e._zod.check = (n) => {
    n.value.endsWith(t.suffix) || n.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: t.suffix,
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Uo = /* @__PURE__ */ h("$ZodCheckOverwrite", (e, t) => {
  ge.init(e, t), e._zod.check = (r) => {
    r.value = t.tx(r.value);
  };
});
class Lo {
  constructor(t = []) {
    this.content = [], this.indent = 0, this && (this.args = t);
  }
  indented(t) {
    this.indent += 1, t(this), this.indent -= 1;
  }
  write(t) {
    if (typeof t == "function") {
      t(this, { execution: "sync" }), t(this, { execution: "async" });
      return;
    }
    const n = t.split(`
`).filter((o) => o), s = Math.min(...n.map((o) => o.length - o.trimStart().length)), i = n.map((o) => o.slice(s)).map((o) => " ".repeat(this.indent * 2) + o);
    for (const o of i)
      this.content.push(o);
  }
  compile() {
    const t = Function, r = this?.args, s = [...(this?.content ?? [""]).map((i) => `  ${i}`)];
    return new t(...r, s.join(`
`));
  }
}
const Mo = {
  major: 4,
  minor: 4,
  patch: 3
}, Y = /* @__PURE__ */ h("$ZodType", (e, t) => {
  var r;
  e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = Mo;
  const n = [...e._zod.def.checks ?? []];
  e._zod.traits.has("$ZodCheck") && n.unshift(e);
  for (const s of n)
    for (const i of s._zod.onattach)
      i(e);
  if (n.length === 0)
    (r = e._zod).deferred ?? (r.deferred = []), e._zod.deferred?.push(() => {
      e._zod.run = e._zod.parse;
    });
  else {
    const s = (o, a, f) => {
      let d = je(o), v;
      for (const m of a) {
        if (m._zod.def.when) {
          if (Ws(o) || !m._zod.def.when(o))
            continue;
        } else if (d)
          continue;
        const _ = o.issues.length, p = m._zod.check(o);
        if (p instanceof Promise && f?.async === !1)
          throw new Pe();
        if (v || p instanceof Promise)
          v = (v ?? Promise.resolve()).then(async () => {
            await p, o.issues.length !== _ && (d || (d = je(o, _)));
          });
        else {
          if (o.issues.length === _)
            continue;
          d || (d = je(o, _));
        }
      }
      return v ? v.then(() => o) : o;
    }, i = (o, a, f) => {
      if (je(o))
        return o.aborted = !0, o;
      const d = s(a, n, f);
      if (d instanceof Promise) {
        if (f.async === !1)
          throw new Pe();
        return d.then((v) => e._zod.parse(v, f));
      }
      return e._zod.parse(d, f);
    };
    e._zod.run = (o, a) => {
      if (a.skipChecks)
        return e._zod.parse(o, a);
      if (a.direction === "backward") {
        const d = e._zod.parse({ value: o.value, issues: [] }, { ...a, skipChecks: !0 });
        return d instanceof Promise ? d.then((v) => i(v, o, a)) : i(d, o, a);
      }
      const f = e._zod.parse(o, a);
      if (f instanceof Promise) {
        if (a.async === !1)
          throw new Pe();
        return f.then((d) => s(d, n, a));
      }
      return s(f, n, a);
    };
  }
  N(e, "~standard", () => ({
    validate: (s) => {
      try {
        const i = Ys(e, s);
        return i.success ? { value: i.data } : { issues: i.error?.issues };
      } catch {
        return Xs(e, s).then((o) => o.success ? { value: o.data } : { issues: o.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  }));
}), rr = /* @__PURE__ */ h("$ZodString", (e, t) => {
  Y.init(e, t), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? Zo(e._zod.bag), e._zod.parse = (r, n) => {
    if (t.coerce)
      try {
        r.value = String(r.value);
      } catch {
      }
    return typeof r.value == "string" || r.issues.push({
      expected: "string",
      code: "invalid_type",
      input: r.value,
      inst: e
    }), r;
  };
}), B = /* @__PURE__ */ h("$ZodStringFormat", (e, t) => {
  kt.init(e, t), rr.init(e, t);
}), Jo = /* @__PURE__ */ h("$ZodGUID", (e, t) => {
  t.pattern ?? (t.pattern = mo), B.init(e, t);
}), Bo = /* @__PURE__ */ h("$ZodUUID", (e, t) => {
  if (t.version) {
    const n = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[t.version];
    if (n === void 0)
      throw new Error(`Invalid UUID version: "${t.version}"`);
    t.pattern ?? (t.pattern = Cr(n));
  } else
    t.pattern ?? (t.pattern = Cr());
  B.init(e, t);
}), Wo = /* @__PURE__ */ h("$ZodEmail", (e, t) => {
  t.pattern ?? (t.pattern = go), B.init(e, t);
}), qo = /* @__PURE__ */ h("$ZodURL", (e, t) => {
  B.init(e, t), e._zod.check = (r) => {
    try {
      const n = r.value.trim();
      if (!t.normalize && t.protocol?.source === $o.source && !/^https?:\/\//i.test(n)) {
        r.issues.push({
          code: "invalid_format",
          format: "url",
          note: "Invalid URL format",
          input: r.value,
          inst: e,
          continue: !t.abort
        });
        return;
      }
      const s = new URL(n);
      t.hostname && (t.hostname.lastIndex = 0, t.hostname.test(s.hostname) || r.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: t.hostname.source,
        input: r.value,
        inst: e,
        continue: !t.abort
      })), t.protocol && (t.protocol.lastIndex = 0, t.protocol.test(s.protocol.endsWith(":") ? s.protocol.slice(0, -1) : s.protocol) || r.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: t.protocol.source,
        input: r.value,
        inst: e,
        continue: !t.abort
      })), t.normalize ? r.value = s.href : r.value = n;
      return;
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "url",
        input: r.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
}), Ho = /* @__PURE__ */ h("$ZodEmoji", (e, t) => {
  t.pattern ?? (t.pattern = yo()), B.init(e, t);
}), Ko = /* @__PURE__ */ h("$ZodNanoID", (e, t) => {
  t.pattern ?? (t.pattern = ho), B.init(e, t);
}), Go = /* @__PURE__ */ h("$ZodCUID", (e, t) => {
  t.pattern ?? (t.pattern = ao), B.init(e, t);
}), Yo = /* @__PURE__ */ h("$ZodCUID2", (e, t) => {
  t.pattern ?? (t.pattern = uo), B.init(e, t);
}), Xo = /* @__PURE__ */ h("$ZodULID", (e, t) => {
  t.pattern ?? (t.pattern = co), B.init(e, t);
}), Qo = /* @__PURE__ */ h("$ZodXID", (e, t) => {
  t.pattern ?? (t.pattern = lo), B.init(e, t);
}), ei = /* @__PURE__ */ h("$ZodKSUID", (e, t) => {
  t.pattern ?? (t.pattern = fo), B.init(e, t);
}), ti = /* @__PURE__ */ h("$ZodISODateTime", (e, t) => {
  t.pattern ?? (t.pattern = xo(t)), B.init(e, t);
}), ri = /* @__PURE__ */ h("$ZodISODate", (e, t) => {
  t.pattern ?? (t.pattern = Oo), B.init(e, t);
}), ni = /* @__PURE__ */ h("$ZodISOTime", (e, t) => {
  t.pattern ?? (t.pattern = Eo(t)), B.init(e, t);
}), si = /* @__PURE__ */ h("$ZodISODuration", (e, t) => {
  t.pattern ?? (t.pattern = po), B.init(e, t);
}), oi = /* @__PURE__ */ h("$ZodIPv4", (e, t) => {
  t.pattern ?? (t.pattern = vo), B.init(e, t), e._zod.bag.format = "ipv4";
}), ii = /* @__PURE__ */ h("$ZodIPv6", (e, t) => {
  t.pattern ?? (t.pattern = bo), B.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (r) => {
    try {
      new URL(`http://[${r.value}]`);
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: r.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
}), ai = /* @__PURE__ */ h("$ZodCIDRv4", (e, t) => {
  t.pattern ?? (t.pattern = wo), B.init(e, t);
}), ui = /* @__PURE__ */ h("$ZodCIDRv6", (e, t) => {
  t.pattern ?? (t.pattern = ko), B.init(e, t), e._zod.check = (r) => {
    const n = r.value.split("/");
    try {
      if (n.length !== 2)
        throw new Error();
      const [s, i] = n;
      if (!i)
        throw new Error();
      const o = Number(i);
      if (`${o}` !== i)
        throw new Error();
      if (o < 0 || o > 128)
        throw new Error();
      new URL(`http://[${s}]`);
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: r.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
});
function jn(e) {
  if (e === "")
    return !0;
  if (/\s/.test(e) || e.length % 4 !== 0)
    return !1;
  try {
    return atob(e), !0;
  } catch {
    return !1;
  }
}
const ci = /* @__PURE__ */ h("$ZodBase64", (e, t) => {
  t.pattern ?? (t.pattern = zo), B.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (r) => {
    jn(r.value) || r.issues.push({
      code: "invalid_format",
      format: "base64",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
});
function li(e) {
  if (!An.test(e))
    return !1;
  const t = e.replace(/[-_]/g, (n) => n === "-" ? "+" : "/"), r = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return jn(r);
}
const fi = /* @__PURE__ */ h("$ZodBase64URL", (e, t) => {
  t.pattern ?? (t.pattern = An), B.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (r) => {
    li(r.value) || r.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), di = /* @__PURE__ */ h("$ZodE164", (e, t) => {
  t.pattern ?? (t.pattern = So), B.init(e, t);
});
function hi(e, t = null) {
  try {
    const r = e.split(".");
    if (r.length !== 3)
      return !1;
    const [n] = r;
    if (!n)
      return !1;
    const s = JSON.parse(atob(n));
    return !("typ" in s && s?.typ !== "JWT" || !s.alg || t && (!("alg" in s) || s.alg !== t));
  } catch {
    return !1;
  }
}
const pi = /* @__PURE__ */ h("$ZodJWT", (e, t) => {
  B.init(e, t), e._zod.check = (r) => {
    hi(r.value, t.alg) || r.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), mi = /* @__PURE__ */ h("$ZodUnknown", (e, t) => {
  Y.init(e, t), e._zod.parse = (r) => r;
}), gi = /* @__PURE__ */ h("$ZodNever", (e, t) => {
  Y.init(e, t), e._zod.parse = (r, n) => (r.issues.push({
    expected: "never",
    code: "invalid_type",
    input: r.value,
    inst: e
  }), r);
});
function Rr(e, t, r) {
  e.issues.length && t.issues.push(...Zn(r, e.issues)), t.value[r] = e.value;
}
const _i = /* @__PURE__ */ h("$ZodArray", (e, t) => {
  Y.init(e, t), e._zod.parse = (r, n) => {
    const s = r.value;
    if (!Array.isArray(s))
      return r.issues.push({
        expected: "array",
        code: "invalid_type",
        input: s,
        inst: e
      }), r;
    r.value = Array(s.length);
    const i = [];
    for (let o = 0; o < s.length; o++) {
      const a = s[o], f = t.element._zod.run({
        value: a,
        issues: []
      }, n);
      f instanceof Promise ? i.push(f.then((d) => Rr(d, r, o))) : Rr(f, r, o);
    }
    return i.length ? Promise.all(i).then(() => r) : r;
  };
});
function ct(e, t, r, n, s, i) {
  const o = r in n;
  if (e.issues.length) {
    if (s && i && !o)
      return;
    t.issues.push(...Zn(r, e.issues));
  }
  if (!o && !s) {
    e.issues.length || t.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: void 0,
      path: [r]
    });
    return;
  }
  e.value === void 0 ? o && (t.value[r] = void 0) : t.value[r] = e.value;
}
function Pn(e) {
  const t = Object.keys(e.shape);
  for (const n of t)
    if (!e.shape?.[n]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${n}": expected a Zod schema`);
  const r = Cs(e.shape);
  return {
    ...e,
    keys: t,
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(r)
  };
}
function Tn(e, t, r, n, s, i) {
  const o = [], a = s.keySet, f = s.catchall._zod, d = f.def.type, v = f.optin === "optional", m = f.optout === "optional";
  for (const _ in t) {
    if (_ === "__proto__" || a.has(_))
      continue;
    if (d === "never") {
      o.push(_);
      continue;
    }
    const p = f.run({ value: t[_], issues: [] }, n);
    p instanceof Promise ? e.push(p.then((Z) => ct(Z, r, _, t, v, m))) : ct(p, r, _, t, v, m);
  }
  return o.length && r.issues.push({
    code: "unrecognized_keys",
    keys: o,
    input: t,
    inst: i
  }), e.length ? Promise.all(e).then(() => r) : r;
}
const yi = /* @__PURE__ */ h("$ZodObject", (e, t) => {
  if (Y.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
    const a = t.shape;
    Object.defineProperty(t, "shape", {
      get: () => {
        const f = { ...a };
        return Object.defineProperty(t, "shape", {
          value: f
        }), f;
      }
    });
  }
  const n = Yt(() => Pn(t));
  N(e._zod, "propValues", () => {
    const a = t.shape, f = {};
    for (const d in a) {
      const v = a[d]._zod;
      if (v.values) {
        f[d] ?? (f[d] = /* @__PURE__ */ new Set());
        for (const m of v.values)
          f[d].add(m);
      }
    }
    return f;
  });
  const s = ut, i = t.catchall;
  let o;
  e._zod.parse = (a, f) => {
    o ?? (o = n.value);
    const d = a.value;
    if (!s(d))
      return a.issues.push({
        expected: "object",
        code: "invalid_type",
        input: d,
        inst: e
      }), a;
    a.value = {};
    const v = [], m = o.shape;
    for (const _ of o.keys) {
      const p = m[_], Z = p._zod.optin === "optional", D = p._zod.optout === "optional", P = p._zod.run({ value: d[_], issues: [] }, f);
      P instanceof Promise ? v.push(P.then((V) => ct(V, a, _, d, Z, D))) : ct(P, a, _, d, Z, D);
    }
    return i ? Tn(v, d, a, f, n.value, e) : v.length ? Promise.all(v).then(() => a) : a;
  };
}), vi = /* @__PURE__ */ h("$ZodObjectJIT", (e, t) => {
  yi.init(e, t);
  const r = e._zod.parse, n = Yt(() => Pn(t)), s = (_) => {
    const p = new Lo(["shape", "payload", "ctx"]), Z = n.value, D = (R) => {
      const $ = Dr(R);
      return `shape[${$}]._zod.run({ value: input[${$}], issues: [] }, ctx)`;
    };
    p.write("const input = payload.value;");
    const P = /* @__PURE__ */ Object.create(null);
    let V = 0;
    for (const R of Z.keys)
      P[R] = `key_${V++}`;
    p.write("const newResult = {};");
    for (const R of Z.keys) {
      const $ = P[R], O = Dr(R), M = _[R], ce = M?._zod?.optin === "optional", le = M?._zod?.optout === "optional";
      p.write(`const ${$} = ${D(R)};`), ce && le ? p.write(`
        if (${$}.issues.length) {
          if (${O} in input) {
            payload.issues = payload.issues.concat(${$}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${O}, ...iss.path] : [${O}]
            })));
          }
        }
        
        if (${$}.value === undefined) {
          if (${O} in input) {
            newResult[${O}] = undefined;
          }
        } else {
          newResult[${O}] = ${$}.value;
        }
        
      `) : ce ? p.write(`
        if (${$}.issues.length) {
          payload.issues = payload.issues.concat(${$}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${O}, ...iss.path] : [${O}]
          })));
        }
        
        if (${$}.value === undefined) {
          if (${O} in input) {
            newResult[${O}] = undefined;
          }
        } else {
          newResult[${O}] = ${$}.value;
        }
        
      `) : p.write(`
        const ${$}_present = ${O} in input;
        if (${$}.issues.length) {
          payload.issues = payload.issues.concat(${$}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${O}, ...iss.path] : [${O}]
          })));
        }
        if (!${$}_present && !${$}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${O}]
          });
        }

        if (${$}_present) {
          if (${$}.value === undefined) {
            newResult[${O}] = undefined;
          } else {
            newResult[${O}] = ${$}.value;
          }
        }

      `);
    }
    p.write("payload.value = newResult;"), p.write("return payload;");
    const F = p.compile();
    return (R, $) => F(_, R, $);
  };
  let i;
  const o = ut, a = !Gt.jitless, d = a && Ts.value, v = t.catchall;
  let m;
  e._zod.parse = (_, p) => {
    m ?? (m = n.value);
    const Z = _.value;
    return o(Z) ? a && d && p?.async === !1 && p.jitless !== !0 ? (i || (i = s(t.shape)), _ = i(_, p), v ? Tn([], Z, _, p, m, e) : _) : r(_, p) : (_.issues.push({
      expected: "object",
      code: "invalid_type",
      input: Z,
      inst: e
    }), _);
  };
});
function Nr(e, t, r, n) {
  for (const i of e)
    if (i.issues.length === 0)
      return t.value = i.value, t;
  const s = e.filter((i) => !je(i));
  return s.length === 1 ? (t.value = s[0].value, s[0]) : (t.issues.push({
    code: "invalid_union",
    input: t.value,
    inst: r,
    errors: e.map((i) => i.issues.map((o) => Oe(o, n, Se())))
  }), t);
}
const bi = /* @__PURE__ */ h("$ZodUnion", (e, t) => {
  Y.init(e, t), N(e._zod, "optin", () => t.options.some((n) => n._zod.optin === "optional") ? "optional" : void 0), N(e._zod, "optout", () => t.options.some((n) => n._zod.optout === "optional") ? "optional" : void 0), N(e._zod, "values", () => {
    if (t.options.every((n) => n._zod.values))
      return new Set(t.options.flatMap((n) => Array.from(n._zod.values)));
  }), N(e._zod, "pattern", () => {
    if (t.options.every((n) => n._zod.pattern)) {
      const n = t.options.map((s) => s._zod.pattern);
      return new RegExp(`^(${n.map((s) => Qt(s.source)).join("|")})$`);
    }
  });
  const r = t.options.length === 1 ? t.options[0]._zod.run : null;
  e._zod.parse = (n, s) => {
    if (r)
      return r(n, s);
    let i = !1;
    const o = [];
    for (const a of t.options) {
      const f = a._zod.run({
        value: n.value,
        issues: []
      }, s);
      if (f instanceof Promise)
        o.push(f), i = !0;
      else {
        if (f.issues.length === 0)
          return f;
        o.push(f);
      }
    }
    return i ? Promise.all(o).then((a) => Nr(a, n, e, s)) : Nr(o, n, e, s);
  };
}), wi = /* @__PURE__ */ h("$ZodIntersection", (e, t) => {
  Y.init(e, t), e._zod.parse = (r, n) => {
    const s = r.value, i = t.left._zod.run({ value: s, issues: [] }, n), o = t.right._zod.run({ value: s, issues: [] }, n);
    return i instanceof Promise || o instanceof Promise ? Promise.all([i, o]).then(([f, d]) => Ur(r, f, d)) : Ur(r, i, o);
  };
});
function Rt(e, t) {
  if (e === t)
    return { valid: !0, data: e };
  if (e instanceof Date && t instanceof Date && +e == +t)
    return { valid: !0, data: e };
  if (He(e) && He(t)) {
    const r = Object.keys(t), n = Object.keys(e).filter((i) => r.indexOf(i) !== -1), s = { ...e, ...t };
    for (const i of n) {
      const o = Rt(e[i], t[i]);
      if (!o.valid)
        return {
          valid: !1,
          mergeErrorPath: [i, ...o.mergeErrorPath]
        };
      s[i] = o.data;
    }
    return { valid: !0, data: s };
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length)
      return { valid: !1, mergeErrorPath: [] };
    const r = [];
    for (let n = 0; n < e.length; n++) {
      const s = e[n], i = t[n], o = Rt(s, i);
      if (!o.valid)
        return {
          valid: !1,
          mergeErrorPath: [n, ...o.mergeErrorPath]
        };
      r.push(o.data);
    }
    return { valid: !0, data: r };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function Ur(e, t, r) {
  const n = /* @__PURE__ */ new Map();
  let s;
  for (const a of t.issues)
    if (a.code === "unrecognized_keys") {
      s ?? (s = a);
      for (const f of a.keys)
        n.has(f) || n.set(f, {}), n.get(f).l = !0;
    } else
      e.issues.push(a);
  for (const a of r.issues)
    if (a.code === "unrecognized_keys")
      for (const f of a.keys)
        n.has(f) || n.set(f, {}), n.get(f).r = !0;
    else
      e.issues.push(a);
  const i = [...n].filter(([, a]) => a.l && a.r).map(([a]) => a);
  if (i.length && s && e.issues.push({ ...s, keys: i }), je(e))
    return e;
  const o = Rt(t.value, r.value);
  if (!o.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(o.mergeErrorPath)}`);
  return e.value = o.data, e;
}
const ki = /* @__PURE__ */ h("$ZodEnum", (e, t) => {
  Y.init(e, t);
  const r = On(t.entries), n = new Set(r);
  e._zod.values = n, e._zod.pattern = new RegExp(`^(${r.filter((s) => Ds.has(typeof s)).map((s) => typeof s == "string" ? gt(s) : s.toString()).join("|")})$`), e._zod.parse = (s, i) => {
    const o = s.value;
    return n.has(o) || s.issues.push({
      code: "invalid_value",
      values: r,
      input: o,
      inst: e
    }), s;
  };
}), zi = /* @__PURE__ */ h("$ZodTransform", (e, t) => {
  Y.init(e, t), e._zod.optin = "optional", e._zod.parse = (r, n) => {
    if (n.direction === "backward")
      throw new Sn(e.constructor.name);
    const s = t.transform(r.value, r);
    if (n.async)
      return (s instanceof Promise ? s : Promise.resolve(s)).then((o) => (r.value = o, r.fallback = !0, r));
    if (s instanceof Promise)
      throw new Pe();
    return r.value = s, r.fallback = !0, r;
  };
});
function Lr(e, t) {
  return t === void 0 && (e.issues.length || e.fallback) ? { issues: [], value: void 0 } : e;
}
const Dn = /* @__PURE__ */ h("$ZodOptional", (e, t) => {
  Y.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", N(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), N(e._zod, "pattern", () => {
    const r = t.innerType._zod.pattern;
    return r ? new RegExp(`^(${Qt(r.source)})?$`) : void 0;
  }), e._zod.parse = (r, n) => {
    if (t.innerType._zod.optin === "optional") {
      const s = r.value, i = t.innerType._zod.run(r, n);
      return i instanceof Promise ? i.then((o) => Lr(o, s)) : Lr(i, s);
    }
    return r.value === void 0 ? r : t.innerType._zod.run(r, n);
  };
}), $i = /* @__PURE__ */ h("$ZodExactOptional", (e, t) => {
  Dn.init(e, t), N(e._zod, "values", () => t.innerType._zod.values), N(e._zod, "pattern", () => t.innerType._zod.pattern), e._zod.parse = (r, n) => t.innerType._zod.run(r, n);
}), Si = /* @__PURE__ */ h("$ZodNullable", (e, t) => {
  Y.init(e, t), N(e._zod, "optin", () => t.innerType._zod.optin), N(e._zod, "optout", () => t.innerType._zod.optout), N(e._zod, "pattern", () => {
    const r = t.innerType._zod.pattern;
    return r ? new RegExp(`^(${Qt(r.source)}|null)$`) : void 0;
  }), N(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (r, n) => r.value === null ? r : t.innerType._zod.run(r, n);
}), Oi = /* @__PURE__ */ h("$ZodDefault", (e, t) => {
  Y.init(e, t), e._zod.optin = "optional", N(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, n) => {
    if (n.direction === "backward")
      return t.innerType._zod.run(r, n);
    if (r.value === void 0)
      return r.value = t.defaultValue, r;
    const s = t.innerType._zod.run(r, n);
    return s instanceof Promise ? s.then((i) => Mr(i, t)) : Mr(s, t);
  };
});
function Mr(e, t) {
  return e.value === void 0 && (e.value = t.defaultValue), e;
}
const Ei = /* @__PURE__ */ h("$ZodPrefault", (e, t) => {
  Y.init(e, t), e._zod.optin = "optional", N(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, n) => (n.direction === "backward" || r.value === void 0 && (r.value = t.defaultValue), t.innerType._zod.run(r, n));
}), xi = /* @__PURE__ */ h("$ZodNonOptional", (e, t) => {
  Y.init(e, t), N(e._zod, "values", () => {
    const r = t.innerType._zod.values;
    return r ? new Set([...r].filter((n) => n !== void 0)) : void 0;
  }), e._zod.parse = (r, n) => {
    const s = t.innerType._zod.run(r, n);
    return s instanceof Promise ? s.then((i) => Jr(i, e)) : Jr(s, e);
  };
});
function Jr(e, t) {
  return !e.issues.length && e.value === void 0 && e.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: e.value,
    inst: t
  }), e;
}
const Zi = /* @__PURE__ */ h("$ZodCatch", (e, t) => {
  Y.init(e, t), e._zod.optin = "optional", N(e._zod, "optout", () => t.innerType._zod.optout), N(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, n) => {
    if (n.direction === "backward")
      return t.innerType._zod.run(r, n);
    const s = t.innerType._zod.run(r, n);
    return s instanceof Promise ? s.then((i) => (r.value = i.value, i.issues.length && (r.value = t.catchValue({
      ...r,
      error: {
        issues: i.issues.map((o) => Oe(o, n, Se()))
      },
      input: r.value
    }), r.issues = [], r.fallback = !0), r)) : (r.value = s.value, s.issues.length && (r.value = t.catchValue({
      ...r,
      error: {
        issues: s.issues.map((i) => Oe(i, n, Se()))
      },
      input: r.value
    }), r.issues = [], r.fallback = !0), r);
  };
}), Ii = /* @__PURE__ */ h("$ZodPipe", (e, t) => {
  Y.init(e, t), N(e._zod, "values", () => t.in._zod.values), N(e._zod, "optin", () => t.in._zod.optin), N(e._zod, "optout", () => t.out._zod.optout), N(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (r, n) => {
    if (n.direction === "backward") {
      const i = t.out._zod.run(r, n);
      return i instanceof Promise ? i.then((o) => rt(o, t.in, n)) : rt(i, t.in, n);
    }
    const s = t.in._zod.run(r, n);
    return s instanceof Promise ? s.then((i) => rt(i, t.out, n)) : rt(s, t.out, n);
  };
});
function rt(e, t, r) {
  return e.issues.length ? (e.aborted = !0, e) : t._zod.run({ value: e.value, issues: e.issues, fallback: e.fallback }, r);
}
const Ai = /* @__PURE__ */ h("$ZodReadonly", (e, t) => {
  Y.init(e, t), N(e._zod, "propValues", () => t.innerType._zod.propValues), N(e._zod, "values", () => t.innerType._zod.values), N(e._zod, "optin", () => t.innerType?._zod?.optin), N(e._zod, "optout", () => t.innerType?._zod?.optout), e._zod.parse = (r, n) => {
    if (n.direction === "backward")
      return t.innerType._zod.run(r, n);
    const s = t.innerType._zod.run(r, n);
    return s instanceof Promise ? s.then(Br) : Br(s);
  };
});
function Br(e) {
  return e.value = Object.freeze(e.value), e;
}
const Vi = /* @__PURE__ */ h("$ZodCustom", (e, t) => {
  ge.init(e, t), Y.init(e, t), e._zod.parse = (r, n) => r, e._zod.check = (r) => {
    const n = r.value, s = t.fn(n);
    if (s instanceof Promise)
      return s.then((i) => Wr(i, r, n, e));
    Wr(s, r, n, e);
  };
});
function Wr(e, t, r, n) {
  if (!e) {
    const s = {
      code: "custom",
      input: r,
      inst: n,
      // incorporates params.error into issue reporting
      path: [...n._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !n._zod.def.abort
      // params: inst._zod.def.params,
    };
    n._zod.def.params && (s.params = n._zod.def.params), t.issues.push(Ke(s));
  }
}
var qr;
class Fi {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(t, ...r) {
    const n = r[0];
    return this._map.set(t, n), n && typeof n == "object" && "id" in n && this._idmap.set(n.id, t), this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(t) {
    const r = this._map.get(t);
    return r && typeof r == "object" && "id" in r && this._idmap.delete(r.id), this._map.delete(t), this;
  }
  get(t) {
    const r = t._zod.parent;
    if (r) {
      const n = { ...this.get(r) ?? {} };
      delete n.id;
      const s = { ...n, ...this._map.get(t) };
      return Object.keys(s).length ? s : void 0;
    }
    return this._map.get(t);
  }
  has(t) {
    return this._map.has(t);
  }
}
function ji() {
  return new Fi();
}
(qr = globalThis).__zod_globalRegistry ?? (qr.__zod_globalRegistry = ji());
const We = globalThis.__zod_globalRegistry;
// @__NO_SIDE_EFFECTS__
function Pi(e, t) {
  return new e({
    type: "string",
    ...A(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ti(e, t) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...A(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Hr(e, t) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...A(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Di(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...A(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ci(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...A(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ri(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...A(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ni(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...A(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ui(e, t) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...A(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Li(e, t) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...A(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Mi(e, t) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...A(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ji(e, t) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...A(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Bi(e, t) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...A(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Wi(e, t) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...A(t)
  });
}
// @__NO_SIDE_EFFECTS__
function qi(e, t) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...A(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Hi(e, t) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...A(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ki(e, t) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...A(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Gi(e, t) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...A(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Yi(e, t) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...A(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Xi(e, t) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...A(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Qi(e, t) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...A(t)
  });
}
// @__NO_SIDE_EFFECTS__
function ea(e, t) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...A(t)
  });
}
// @__NO_SIDE_EFFECTS__
function ta(e, t) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...A(t)
  });
}
// @__NO_SIDE_EFFECTS__
function ra(e, t) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...A(t)
  });
}
// @__NO_SIDE_EFFECTS__
function na(e, t) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...A(t)
  });
}
// @__NO_SIDE_EFFECTS__
function sa(e, t) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...A(t)
  });
}
// @__NO_SIDE_EFFECTS__
function oa(e, t) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...A(t)
  });
}
// @__NO_SIDE_EFFECTS__
function ia(e, t) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...A(t)
  });
}
// @__NO_SIDE_EFFECTS__
function aa(e) {
  return new e({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function ua(e, t) {
  return new e({
    type: "never",
    ...A(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Cn(e, t) {
  return new Vo({
    check: "max_length",
    ...A(t),
    maximum: e
  });
}
// @__NO_SIDE_EFFECTS__
function lt(e, t) {
  return new Fo({
    check: "min_length",
    ...A(t),
    minimum: e
  });
}
// @__NO_SIDE_EFFECTS__
function Rn(e, t) {
  return new jo({
    check: "length_equals",
    ...A(t),
    length: e
  });
}
// @__NO_SIDE_EFFECTS__
function ca(e, t) {
  return new Po({
    check: "string_format",
    format: "regex",
    ...A(t),
    pattern: e
  });
}
// @__NO_SIDE_EFFECTS__
function la(e) {
  return new To({
    check: "string_format",
    format: "lowercase",
    ...A(e)
  });
}
// @__NO_SIDE_EFFECTS__
function fa(e) {
  return new Do({
    check: "string_format",
    format: "uppercase",
    ...A(e)
  });
}
// @__NO_SIDE_EFFECTS__
function da(e, t) {
  return new Co({
    check: "string_format",
    format: "includes",
    ...A(t),
    includes: e
  });
}
// @__NO_SIDE_EFFECTS__
function ha(e, t) {
  return new Ro({
    check: "string_format",
    format: "starts_with",
    ...A(t),
    prefix: e
  });
}
// @__NO_SIDE_EFFECTS__
function pa(e, t) {
  return new No({
    check: "string_format",
    format: "ends_with",
    ...A(t),
    suffix: e
  });
}
// @__NO_SIDE_EFFECTS__
function De(e) {
  return new Uo({
    check: "overwrite",
    tx: e
  });
}
// @__NO_SIDE_EFFECTS__
function ma(e) {
  return /* @__PURE__ */ De((t) => t.normalize(e));
}
// @__NO_SIDE_EFFECTS__
function ga() {
  return /* @__PURE__ */ De((e) => e.trim());
}
// @__NO_SIDE_EFFECTS__
function _a() {
  return /* @__PURE__ */ De((e) => e.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function ya() {
  return /* @__PURE__ */ De((e) => e.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function va() {
  return /* @__PURE__ */ De((e) => Ps(e));
}
// @__NO_SIDE_EFFECTS__
function ba(e, t, r) {
  return new e({
    type: "array",
    element: t,
    // get element() {
    //   return element;
    // },
    ...A(r)
  });
}
// @__NO_SIDE_EFFECTS__
function wa(e, t, r) {
  return new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...A(r)
  });
}
// @__NO_SIDE_EFFECTS__
function ka(e, t) {
  const r = /* @__PURE__ */ za((n) => (n.addIssue = (s) => {
    if (typeof s == "string")
      n.issues.push(Ke(s, n.value, r._zod.def));
    else {
      const i = s;
      i.fatal && (i.continue = !1), i.code ?? (i.code = "custom"), i.input ?? (i.input = n.value), i.inst ?? (i.inst = r), i.continue ?? (i.continue = !r._zod.def.abort), n.issues.push(Ke(i));
    }
  }, e(n.value, n)), t);
  return r;
}
// @__NO_SIDE_EFFECTS__
function za(e, t) {
  const r = new ge({
    check: "custom",
    ...A(t)
  });
  return r._zod.check = e, r;
}
function Nn(e) {
  let t = e?.target ?? "draft-2020-12";
  return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
    processors: e.processors ?? {},
    metadataRegistry: e?.metadata ?? We,
    target: t,
    unrepresentable: e?.unrepresentable ?? "throw",
    override: e?.override ?? (() => {
    }),
    io: e?.io ?? "output",
    counter: 0,
    seen: /* @__PURE__ */ new Map(),
    cycles: e?.cycles ?? "ref",
    reused: e?.reused ?? "inline",
    external: e?.external ?? void 0
  };
}
function te(e, t, r = { path: [], schemaPath: [] }) {
  var n;
  const s = e._zod.def, i = t.seen.get(e);
  if (i)
    return i.count++, r.schemaPath.includes(e) && (i.cycle = r.path), i.schema;
  const o = { schema: {}, count: 1, cycle: void 0, path: r.path };
  t.seen.set(e, o);
  const a = e._zod.toJSONSchema?.();
  if (a)
    o.schema = a;
  else {
    const v = {
      ...r,
      schemaPath: [...r.schemaPath, e],
      path: r.path
    };
    if (e._zod.processJSONSchema)
      e._zod.processJSONSchema(t, o.schema, v);
    else {
      const _ = o.schema, p = t.processors[s.type];
      if (!p)
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${s.type}`);
      p(e, t, _, v);
    }
    const m = e._zod.parent;
    m && (o.ref || (o.ref = m), te(m, t, v), t.seen.get(m).isParent = !0);
  }
  const f = t.metadataRegistry.get(e);
  return f && Object.assign(o.schema, f), t.io === "input" && se(e) && (delete o.schema.examples, delete o.schema.default), t.io === "input" && "_prefault" in o.schema && ((n = o.schema).default ?? (n.default = o.schema._prefault)), delete o.schema._prefault, t.seen.get(e).schema;
}
function Un(e, t) {
  const r = e.seen.get(t);
  if (!r)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const n = /* @__PURE__ */ new Map();
  for (const o of e.seen.entries()) {
    const a = e.metadataRegistry.get(o[0])?.id;
    if (a) {
      const f = n.get(a);
      if (f && f !== o[0])
        throw new Error(`Duplicate schema id "${a}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      n.set(a, o[0]);
    }
  }
  const s = (o) => {
    const a = e.target === "draft-2020-12" ? "$defs" : "definitions";
    if (e.external) {
      const m = e.external.registry.get(o[0])?.id, _ = e.external.uri ?? ((Z) => Z);
      if (m)
        return { ref: _(m) };
      const p = o[1].defId ?? o[1].schema.id ?? `schema${e.counter++}`;
      return o[1].defId = p, { defId: p, ref: `${_("__shared")}#/${a}/${p}` };
    }
    if (o[1] === r)
      return { ref: "#" };
    const d = `#/${a}/`, v = o[1].schema.id ?? `__schema${e.counter++}`;
    return { defId: v, ref: d + v };
  }, i = (o) => {
    if (o[1].schema.$ref)
      return;
    const a = o[1], { ref: f, defId: d } = s(o);
    a.def = { ...a.schema }, d && (a.defId = d);
    const v = a.schema;
    for (const m in v)
      delete v[m];
    v.$ref = f;
  };
  if (e.cycles === "throw")
    for (const o of e.seen.entries()) {
      const a = o[1];
      if (a.cycle)
        throw new Error(`Cycle detected: #/${a.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
  for (const o of e.seen.entries()) {
    const a = o[1];
    if (t === o[0]) {
      i(o);
      continue;
    }
    if (e.external) {
      const d = e.external.registry.get(o[0])?.id;
      if (t !== o[0] && d) {
        i(o);
        continue;
      }
    }
    if (e.metadataRegistry.get(o[0])?.id) {
      i(o);
      continue;
    }
    if (a.cycle) {
      i(o);
      continue;
    }
    if (a.count > 1 && e.reused === "ref") {
      i(o);
      continue;
    }
  }
}
function Ln(e, t) {
  const r = e.seen.get(t);
  if (!r)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const n = (a) => {
    const f = e.seen.get(a);
    if (f.ref === null)
      return;
    const d = f.def ?? f.schema, v = { ...d }, m = f.ref;
    if (f.ref = null, m) {
      n(m);
      const p = e.seen.get(m), Z = p.schema;
      if (Z.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (d.allOf = d.allOf ?? [], d.allOf.push(Z)) : Object.assign(d, Z), Object.assign(d, v), a._zod.parent === m)
        for (const P in d)
          P === "$ref" || P === "allOf" || P in v || delete d[P];
      if (Z.$ref && p.def)
        for (const P in d)
          P === "$ref" || P === "allOf" || P in p.def && JSON.stringify(d[P]) === JSON.stringify(p.def[P]) && delete d[P];
    }
    const _ = a._zod.parent;
    if (_ && _ !== m) {
      n(_);
      const p = e.seen.get(_);
      if (p?.schema.$ref && (d.$ref = p.schema.$ref, p.def))
        for (const Z in d)
          Z === "$ref" || Z === "allOf" || Z in p.def && JSON.stringify(d[Z]) === JSON.stringify(p.def[Z]) && delete d[Z];
    }
    e.override({
      zodSchema: a,
      jsonSchema: d,
      path: f.path ?? []
    });
  };
  for (const a of [...e.seen.entries()].reverse())
    n(a[0]);
  const s = {};
  if (e.target === "draft-2020-12" ? s.$schema = "https://json-schema.org/draft/2020-12/schema" : e.target === "draft-07" ? s.$schema = "http://json-schema.org/draft-07/schema#" : e.target === "draft-04" ? s.$schema = "http://json-schema.org/draft-04/schema#" : e.target, e.external?.uri) {
    const a = e.external.registry.get(t)?.id;
    if (!a)
      throw new Error("Schema is missing an `id` property");
    s.$id = e.external.uri(a);
  }
  Object.assign(s, r.def ?? r.schema);
  const i = e.metadataRegistry.get(t)?.id;
  i !== void 0 && s.id === i && delete s.id;
  const o = e.external?.defs ?? {};
  for (const a of e.seen.entries()) {
    const f = a[1];
    f.def && f.defId && (f.def.id === f.defId && delete f.def.id, o[f.defId] = f.def);
  }
  e.external || Object.keys(o).length > 0 && (e.target === "draft-2020-12" ? s.$defs = o : s.definitions = o);
  try {
    const a = JSON.parse(JSON.stringify(s));
    return Object.defineProperty(a, "~standard", {
      value: {
        ...t["~standard"],
        jsonSchema: {
          input: ft(t, "input", e.processors),
          output: ft(t, "output", e.processors)
        }
      },
      enumerable: !1,
      writable: !1
    }), a;
  } catch {
    throw new Error("Error converting schema to JSON.");
  }
}
function se(e, t) {
  const r = t ?? { seen: /* @__PURE__ */ new Set() };
  if (r.seen.has(e))
    return !1;
  r.seen.add(e);
  const n = e._zod.def;
  if (n.type === "transform")
    return !0;
  if (n.type === "array")
    return se(n.element, r);
  if (n.type === "set")
    return se(n.valueType, r);
  if (n.type === "lazy")
    return se(n.getter(), r);
  if (n.type === "promise" || n.type === "optional" || n.type === "nonoptional" || n.type === "nullable" || n.type === "readonly" || n.type === "default" || n.type === "prefault")
    return se(n.innerType, r);
  if (n.type === "intersection")
    return se(n.left, r) || se(n.right, r);
  if (n.type === "record" || n.type === "map")
    return se(n.keyType, r) || se(n.valueType, r);
  if (n.type === "pipe")
    return e._zod.traits.has("$ZodCodec") ? !0 : se(n.in, r) || se(n.out, r);
  if (n.type === "object") {
    for (const s in n.shape)
      if (se(n.shape[s], r))
        return !0;
    return !1;
  }
  if (n.type === "union") {
    for (const s of n.options)
      if (se(s, r))
        return !0;
    return !1;
  }
  if (n.type === "tuple") {
    for (const s of n.items)
      if (se(s, r))
        return !0;
    return !!(n.rest && se(n.rest, r));
  }
  return !1;
}
const $a = (e, t = {}) => (r) => {
  const n = Nn({ ...r, processors: t });
  return te(e, n), Un(n, e), Ln(n, e);
}, ft = (e, t, r = {}) => (n) => {
  const { libraryOptions: s, target: i } = n ?? {}, o = Nn({ ...s ?? {}, target: i, io: t, processors: r });
  return te(e, o), Un(o, e), Ln(o, e);
}, Sa = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
  // do not set
}, Oa = (e, t, r, n) => {
  const s = r;
  s.type = "string";
  const { minimum: i, maximum: o, format: a, patterns: f, contentEncoding: d } = e._zod.bag;
  if (typeof i == "number" && (s.minLength = i), typeof o == "number" && (s.maxLength = o), a && (s.format = Sa[a] ?? a, s.format === "" && delete s.format, a === "time" && delete s.format), d && (s.contentEncoding = d), f && f.size > 0) {
    const v = [...f];
    v.length === 1 ? s.pattern = v[0].source : v.length > 1 && (s.allOf = [
      ...v.map((m) => ({
        ...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? { type: "string" } : {},
        pattern: m.source
      }))
    ]);
  }
}, Ea = (e, t, r, n) => {
  r.not = {};
}, xa = (e, t, r, n) => {
}, Za = (e, t, r, n) => {
  const s = e._zod.def, i = On(s.entries);
  i.every((o) => typeof o == "number") && (r.type = "number"), i.every((o) => typeof o == "string") && (r.type = "string"), r.enum = i;
}, Ia = (e, t, r, n) => {
  if (t.unrepresentable === "throw")
    throw new Error("Custom types cannot be represented in JSON Schema");
}, Aa = (e, t, r, n) => {
  if (t.unrepresentable === "throw")
    throw new Error("Transforms cannot be represented in JSON Schema");
}, Va = (e, t, r, n) => {
  const s = r, i = e._zod.def, { minimum: o, maximum: a } = e._zod.bag;
  typeof o == "number" && (s.minItems = o), typeof a == "number" && (s.maxItems = a), s.type = "array", s.items = te(i.element, t, {
    ...n,
    path: [...n.path, "items"]
  });
}, Fa = (e, t, r, n) => {
  const s = r, i = e._zod.def;
  s.type = "object", s.properties = {};
  const o = i.shape;
  for (const d in o)
    s.properties[d] = te(o[d], t, {
      ...n,
      path: [...n.path, "properties", d]
    });
  const a = new Set(Object.keys(o)), f = new Set([...a].filter((d) => {
    const v = i.shape[d]._zod;
    return t.io === "input" ? v.optin === void 0 : v.optout === void 0;
  }));
  f.size > 0 && (s.required = Array.from(f)), i.catchall?._zod.def.type === "never" ? s.additionalProperties = !1 : i.catchall ? i.catchall && (s.additionalProperties = te(i.catchall, t, {
    ...n,
    path: [...n.path, "additionalProperties"]
  })) : t.io === "output" && (s.additionalProperties = !1);
}, ja = (e, t, r, n) => {
  const s = e._zod.def, i = s.inclusive === !1, o = s.options.map((a, f) => te(a, t, {
    ...n,
    path: [...n.path, i ? "oneOf" : "anyOf", f]
  }));
  i ? r.oneOf = o : r.anyOf = o;
}, Pa = (e, t, r, n) => {
  const s = e._zod.def, i = te(s.left, t, {
    ...n,
    path: [...n.path, "allOf", 0]
  }), o = te(s.right, t, {
    ...n,
    path: [...n.path, "allOf", 1]
  }), a = (d) => "allOf" in d && Object.keys(d).length === 1, f = [
    ...a(i) ? i.allOf : [i],
    ...a(o) ? o.allOf : [o]
  ];
  r.allOf = f;
}, Ta = (e, t, r, n) => {
  const s = e._zod.def, i = te(s.innerType, t, n), o = t.seen.get(e);
  t.target === "openapi-3.0" ? (o.ref = s.innerType, r.nullable = !0) : r.anyOf = [i, { type: "null" }];
}, Da = (e, t, r, n) => {
  const s = e._zod.def;
  te(s.innerType, t, n);
  const i = t.seen.get(e);
  i.ref = s.innerType;
}, Ca = (e, t, r, n) => {
  const s = e._zod.def;
  te(s.innerType, t, n);
  const i = t.seen.get(e);
  i.ref = s.innerType, r.default = JSON.parse(JSON.stringify(s.defaultValue));
}, Ra = (e, t, r, n) => {
  const s = e._zod.def;
  te(s.innerType, t, n);
  const i = t.seen.get(e);
  i.ref = s.innerType, t.io === "input" && (r._prefault = JSON.parse(JSON.stringify(s.defaultValue)));
}, Na = (e, t, r, n) => {
  const s = e._zod.def;
  te(s.innerType, t, n);
  const i = t.seen.get(e);
  i.ref = s.innerType;
  let o;
  try {
    o = s.catchValue(void 0);
  } catch {
    throw new Error("Dynamic catch values are not supported in JSON Schema");
  }
  r.default = o;
}, Ua = (e, t, r, n) => {
  const s = e._zod.def, i = s.in._zod.traits.has("$ZodTransform"), o = t.io === "input" ? i ? s.out : s.in : s.out;
  te(o, t, n);
  const a = t.seen.get(e);
  a.ref = o;
}, La = (e, t, r, n) => {
  const s = e._zod.def;
  te(s.innerType, t, n);
  const i = t.seen.get(e);
  i.ref = s.innerType, r.readOnly = !0;
}, Mn = (e, t, r, n) => {
  const s = e._zod.def;
  te(s.innerType, t, n);
  const i = t.seen.get(e);
  i.ref = s.innerType;
}, Ma = /* @__PURE__ */ h("ZodISODateTime", (e, t) => {
  ti.init(e, t), q.init(e, t);
});
function Ja(e) {
  return /* @__PURE__ */ na(Ma, e);
}
const Ba = /* @__PURE__ */ h("ZodISODate", (e, t) => {
  ri.init(e, t), q.init(e, t);
});
function Wa(e) {
  return /* @__PURE__ */ sa(Ba, e);
}
const qa = /* @__PURE__ */ h("ZodISOTime", (e, t) => {
  ni.init(e, t), q.init(e, t);
});
function Ha(e) {
  return /* @__PURE__ */ oa(qa, e);
}
const Ka = /* @__PURE__ */ h("ZodISODuration", (e, t) => {
  si.init(e, t), q.init(e, t);
});
function Ga(e) {
  return /* @__PURE__ */ ia(Ka, e);
}
const Ya = (e, t) => {
  tr.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
    format: {
      value: (r) => Hs(e, r)
      // enumerable: false,
    },
    flatten: {
      value: (r) => qs(e, r)
      // enumerable: false,
    },
    addIssue: {
      value: (r) => {
        e.issues.push(r), e.message = JSON.stringify(e.issues, Ct, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (r) => {
        e.issues.push(...r), e.message = JSON.stringify(e.issues, Ct, 2);
      }
      // enumerable: false,
    },
    isEmpty: {
      get() {
        return e.issues.length === 0;
      }
      // enumerable: false,
    }
  });
}, de = /* @__PURE__ */ h("ZodError", Ya, {
  Parent: Error
}), Xa = /* @__PURE__ */ yt(de), Qa = /* @__PURE__ */ vt(de), eu = /* @__PURE__ */ bt(de), tu = /* @__PURE__ */ wt(de), ru = /* @__PURE__ */ Qs(de), nu = /* @__PURE__ */ eo(de), su = /* @__PURE__ */ to(de), ou = /* @__PURE__ */ ro(de), iu = /* @__PURE__ */ no(de), au = /* @__PURE__ */ so(de), uu = /* @__PURE__ */ oo(de), cu = /* @__PURE__ */ io(de), Kr = /* @__PURE__ */ new WeakMap();
function zt(e, t, r) {
  const n = Object.getPrototypeOf(e);
  let s = Kr.get(n);
  if (s || (s = /* @__PURE__ */ new Set(), Kr.set(n, s)), !s.has(t)) {
    s.add(t);
    for (const i in r) {
      const o = r[i];
      Object.defineProperty(n, i, {
        configurable: !0,
        enumerable: !1,
        get() {
          const a = o.bind(this);
          return Object.defineProperty(this, i, {
            configurable: !0,
            writable: !0,
            enumerable: !0,
            value: a
          }), a;
        },
        set(a) {
          Object.defineProperty(this, i, {
            configurable: !0,
            writable: !0,
            enumerable: !0,
            value: a
          });
        }
      });
    }
  }
}
const X = /* @__PURE__ */ h("ZodType", (e, t) => (Y.init(e, t), Object.assign(e["~standard"], {
  jsonSchema: {
    input: ft(e, "input"),
    output: ft(e, "output")
  }
}), e.toJSONSchema = $a(e, {}), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.parse = (r, n) => Xa(e, r, n, { callee: e.parse }), e.safeParse = (r, n) => eu(e, r, n), e.parseAsync = async (r, n) => Qa(e, r, n, { callee: e.parseAsync }), e.safeParseAsync = async (r, n) => tu(e, r, n), e.spa = e.safeParseAsync, e.encode = (r, n) => ru(e, r, n), e.decode = (r, n) => nu(e, r, n), e.encodeAsync = async (r, n) => su(e, r, n), e.decodeAsync = async (r, n) => ou(e, r, n), e.safeEncode = (r, n) => iu(e, r, n), e.safeDecode = (r, n) => au(e, r, n), e.safeEncodeAsync = async (r, n) => uu(e, r, n), e.safeDecodeAsync = async (r, n) => cu(e, r, n), zt(e, "ZodType", {
  check(...r) {
    const n = this.def;
    return this.clone(be(n, {
      checks: [
        ...n.checks ?? [],
        ...r.map((s) => typeof s == "function" ? { _zod: { check: s, def: { check: "custom" }, onattach: [] } } : s)
      ]
    }), { parent: !0 });
  },
  with(...r) {
    return this.check(...r);
  },
  clone(r, n) {
    return we(this, r, n);
  },
  brand() {
    return this;
  },
  register(r, n) {
    return r.add(this, n), this;
  },
  refine(r, n) {
    return this.check(rc(r, n));
  },
  superRefine(r, n) {
    return this.check(nc(r, n));
  },
  overwrite(r) {
    return this.check(/* @__PURE__ */ De(r));
  },
  optional() {
    return Xr(this);
  },
  exactOptional() {
    return Mu(this);
  },
  nullable() {
    return Qr(this);
  },
  nullish() {
    return Xr(Qr(this));
  },
  nonoptional(r) {
    return Ku(this, r);
  },
  array() {
    return Vu(this);
  },
  or(r) {
    return Tu([this, r]);
  },
  and(r) {
    return Cu(this, r);
  },
  transform(r) {
    return en(this, Uu(r));
  },
  default(r) {
    return Wu(this, r);
  },
  prefault(r) {
    return Hu(this, r);
  },
  catch(r) {
    return Yu(this, r);
  },
  pipe(r) {
    return en(this, r);
  },
  readonly() {
    return ec(this);
  },
  describe(r) {
    const n = this.clone();
    return We.add(n, { description: r }), n;
  },
  meta(...r) {
    if (r.length === 0)
      return We.get(this);
    const n = this.clone();
    return We.add(n, r[0]), n;
  },
  isOptional() {
    return this.safeParse(void 0).success;
  },
  isNullable() {
    return this.safeParse(null).success;
  },
  apply(r) {
    return r(this);
  }
}), Object.defineProperty(e, "description", {
  get() {
    return We.get(e)?.description;
  },
  configurable: !0
}), e)), Jn = /* @__PURE__ */ h("_ZodString", (e, t) => {
  rr.init(e, t), X.init(e, t), e._zod.processJSONSchema = (n, s, i) => Oa(e, n, s);
  const r = e._zod.bag;
  e.format = r.format ?? null, e.minLength = r.minimum ?? null, e.maxLength = r.maximum ?? null, zt(e, "_ZodString", {
    regex(...n) {
      return this.check(/* @__PURE__ */ ca(...n));
    },
    includes(...n) {
      return this.check(/* @__PURE__ */ da(...n));
    },
    startsWith(...n) {
      return this.check(/* @__PURE__ */ ha(...n));
    },
    endsWith(...n) {
      return this.check(/* @__PURE__ */ pa(...n));
    },
    min(...n) {
      return this.check(/* @__PURE__ */ lt(...n));
    },
    max(...n) {
      return this.check(/* @__PURE__ */ Cn(...n));
    },
    length(...n) {
      return this.check(/* @__PURE__ */ Rn(...n));
    },
    nonempty(...n) {
      return this.check(/* @__PURE__ */ lt(1, ...n));
    },
    lowercase(n) {
      return this.check(/* @__PURE__ */ la(n));
    },
    uppercase(n) {
      return this.check(/* @__PURE__ */ fa(n));
    },
    trim() {
      return this.check(/* @__PURE__ */ ga());
    },
    normalize(...n) {
      return this.check(/* @__PURE__ */ ma(...n));
    },
    toLowerCase() {
      return this.check(/* @__PURE__ */ _a());
    },
    toUpperCase() {
      return this.check(/* @__PURE__ */ ya());
    },
    slugify() {
      return this.check(/* @__PURE__ */ va());
    }
  });
}), lu = /* @__PURE__ */ h("ZodString", (e, t) => {
  rr.init(e, t), Jn.init(e, t), e.email = (r) => e.check(/* @__PURE__ */ Ti(fu, r)), e.url = (r) => e.check(/* @__PURE__ */ Ui(du, r)), e.jwt = (r) => e.check(/* @__PURE__ */ ra(Eu, r)), e.emoji = (r) => e.check(/* @__PURE__ */ Li(hu, r)), e.guid = (r) => e.check(/* @__PURE__ */ Hr(Gr, r)), e.uuid = (r) => e.check(/* @__PURE__ */ Di(nt, r)), e.uuidv4 = (r) => e.check(/* @__PURE__ */ Ci(nt, r)), e.uuidv6 = (r) => e.check(/* @__PURE__ */ Ri(nt, r)), e.uuidv7 = (r) => e.check(/* @__PURE__ */ Ni(nt, r)), e.nanoid = (r) => e.check(/* @__PURE__ */ Mi(pu, r)), e.guid = (r) => e.check(/* @__PURE__ */ Hr(Gr, r)), e.cuid = (r) => e.check(/* @__PURE__ */ Ji(mu, r)), e.cuid2 = (r) => e.check(/* @__PURE__ */ Bi(gu, r)), e.ulid = (r) => e.check(/* @__PURE__ */ Wi(_u, r)), e.base64 = (r) => e.check(/* @__PURE__ */ Qi($u, r)), e.base64url = (r) => e.check(/* @__PURE__ */ ea(Su, r)), e.xid = (r) => e.check(/* @__PURE__ */ qi(yu, r)), e.ksuid = (r) => e.check(/* @__PURE__ */ Hi(vu, r)), e.ipv4 = (r) => e.check(/* @__PURE__ */ Ki(bu, r)), e.ipv6 = (r) => e.check(/* @__PURE__ */ Gi(wu, r)), e.cidrv4 = (r) => e.check(/* @__PURE__ */ Yi(ku, r)), e.cidrv6 = (r) => e.check(/* @__PURE__ */ Xi(zu, r)), e.e164 = (r) => e.check(/* @__PURE__ */ ta(Ou, r)), e.datetime = (r) => e.check(Ja(r)), e.date = (r) => e.check(Wa(r)), e.time = (r) => e.check(Ha(r)), e.duration = (r) => e.check(Ga(r));
});
function Be(e) {
  return /* @__PURE__ */ Pi(lu, e);
}
const q = /* @__PURE__ */ h("ZodStringFormat", (e, t) => {
  B.init(e, t), Jn.init(e, t);
}), fu = /* @__PURE__ */ h("ZodEmail", (e, t) => {
  Wo.init(e, t), q.init(e, t);
}), Gr = /* @__PURE__ */ h("ZodGUID", (e, t) => {
  Jo.init(e, t), q.init(e, t);
}), nt = /* @__PURE__ */ h("ZodUUID", (e, t) => {
  Bo.init(e, t), q.init(e, t);
}), du = /* @__PURE__ */ h("ZodURL", (e, t) => {
  qo.init(e, t), q.init(e, t);
}), hu = /* @__PURE__ */ h("ZodEmoji", (e, t) => {
  Ho.init(e, t), q.init(e, t);
}), pu = /* @__PURE__ */ h("ZodNanoID", (e, t) => {
  Ko.init(e, t), q.init(e, t);
}), mu = /* @__PURE__ */ h("ZodCUID", (e, t) => {
  Go.init(e, t), q.init(e, t);
}), gu = /* @__PURE__ */ h("ZodCUID2", (e, t) => {
  Yo.init(e, t), q.init(e, t);
}), _u = /* @__PURE__ */ h("ZodULID", (e, t) => {
  Xo.init(e, t), q.init(e, t);
}), yu = /* @__PURE__ */ h("ZodXID", (e, t) => {
  Qo.init(e, t), q.init(e, t);
}), vu = /* @__PURE__ */ h("ZodKSUID", (e, t) => {
  ei.init(e, t), q.init(e, t);
}), bu = /* @__PURE__ */ h("ZodIPv4", (e, t) => {
  oi.init(e, t), q.init(e, t);
}), wu = /* @__PURE__ */ h("ZodIPv6", (e, t) => {
  ii.init(e, t), q.init(e, t);
}), ku = /* @__PURE__ */ h("ZodCIDRv4", (e, t) => {
  ai.init(e, t), q.init(e, t);
}), zu = /* @__PURE__ */ h("ZodCIDRv6", (e, t) => {
  ui.init(e, t), q.init(e, t);
}), $u = /* @__PURE__ */ h("ZodBase64", (e, t) => {
  ci.init(e, t), q.init(e, t);
}), Su = /* @__PURE__ */ h("ZodBase64URL", (e, t) => {
  fi.init(e, t), q.init(e, t);
}), Ou = /* @__PURE__ */ h("ZodE164", (e, t) => {
  di.init(e, t), q.init(e, t);
}), Eu = /* @__PURE__ */ h("ZodJWT", (e, t) => {
  pi.init(e, t), q.init(e, t);
}), xu = /* @__PURE__ */ h("ZodUnknown", (e, t) => {
  mi.init(e, t), X.init(e, t), e._zod.processJSONSchema = (r, n, s) => xa();
});
function Yr() {
  return /* @__PURE__ */ aa(xu);
}
const Zu = /* @__PURE__ */ h("ZodNever", (e, t) => {
  gi.init(e, t), X.init(e, t), e._zod.processJSONSchema = (r, n, s) => Ea(e, r, n);
});
function Iu(e) {
  return /* @__PURE__ */ ua(Zu, e);
}
const Au = /* @__PURE__ */ h("ZodArray", (e, t) => {
  _i.init(e, t), X.init(e, t), e._zod.processJSONSchema = (r, n, s) => Va(e, r, n, s), e.element = t.element, zt(e, "ZodArray", {
    min(r, n) {
      return this.check(/* @__PURE__ */ lt(r, n));
    },
    nonempty(r) {
      return this.check(/* @__PURE__ */ lt(1, r));
    },
    max(r, n) {
      return this.check(/* @__PURE__ */ Cn(r, n));
    },
    length(r, n) {
      return this.check(/* @__PURE__ */ Rn(r, n));
    },
    unwrap() {
      return this.element;
    }
  });
});
function Vu(e, t) {
  return /* @__PURE__ */ ba(Au, e, t);
}
const Fu = /* @__PURE__ */ h("ZodObject", (e, t) => {
  vi.init(e, t), X.init(e, t), e._zod.processJSONSchema = (r, n, s) => Fa(e, r, n, s), N(e, "shape", () => t.shape), zt(e, "ZodObject", {
    keyof() {
      return Ru(Object.keys(this._zod.def.shape));
    },
    catchall(r) {
      return this.clone({ ...this._zod.def, catchall: r });
    },
    passthrough() {
      return this.clone({ ...this._zod.def, catchall: Yr() });
    },
    loose() {
      return this.clone({ ...this._zod.def, catchall: Yr() });
    },
    strict() {
      return this.clone({ ...this._zod.def, catchall: Iu() });
    },
    strip() {
      return this.clone({ ...this._zod.def, catchall: void 0 });
    },
    extend(r) {
      return Us(this, r);
    },
    safeExtend(r) {
      return Ls(this, r);
    },
    merge(r) {
      return Ms(this, r);
    },
    pick(r) {
      return Rs(this, r);
    },
    omit(r) {
      return Ns(this, r);
    },
    partial(...r) {
      return Js(Bn, this, r[0]);
    },
    required(...r) {
      return Bs(Wn, this, r[0]);
    }
  });
});
function ju(e, t) {
  const r = {
    type: "object",
    shape: e ?? {},
    ...A(t)
  };
  return new Fu(r);
}
const Pu = /* @__PURE__ */ h("ZodUnion", (e, t) => {
  bi.init(e, t), X.init(e, t), e._zod.processJSONSchema = (r, n, s) => ja(e, r, n, s), e.options = t.options;
});
function Tu(e, t) {
  return new Pu({
    type: "union",
    options: e,
    ...A(t)
  });
}
const Du = /* @__PURE__ */ h("ZodIntersection", (e, t) => {
  wi.init(e, t), X.init(e, t), e._zod.processJSONSchema = (r, n, s) => Pa(e, r, n, s);
});
function Cu(e, t) {
  return new Du({
    type: "intersection",
    left: e,
    right: t
  });
}
const Nt = /* @__PURE__ */ h("ZodEnum", (e, t) => {
  ki.init(e, t), X.init(e, t), e._zod.processJSONSchema = (n, s, i) => Za(e, n, s), e.enum = t.entries, e.options = Object.values(t.entries);
  const r = new Set(Object.keys(t.entries));
  e.extract = (n, s) => {
    const i = {};
    for (const o of n)
      if (r.has(o))
        i[o] = t.entries[o];
      else
        throw new Error(`Key ${o} not found in enum`);
    return new Nt({
      ...t,
      checks: [],
      ...A(s),
      entries: i
    });
  }, e.exclude = (n, s) => {
    const i = { ...t.entries };
    for (const o of n)
      if (r.has(o))
        delete i[o];
      else
        throw new Error(`Key ${o} not found in enum`);
    return new Nt({
      ...t,
      checks: [],
      ...A(s),
      entries: i
    });
  };
});
function Ru(e, t) {
  const r = Array.isArray(e) ? Object.fromEntries(e.map((n) => [n, n])) : e;
  return new Nt({
    type: "enum",
    entries: r,
    ...A(t)
  });
}
const Nu = /* @__PURE__ */ h("ZodTransform", (e, t) => {
  zi.init(e, t), X.init(e, t), e._zod.processJSONSchema = (r, n, s) => Aa(e, r), e._zod.parse = (r, n) => {
    if (n.direction === "backward")
      throw new Sn(e.constructor.name);
    r.addIssue = (i) => {
      if (typeof i == "string")
        r.issues.push(Ke(i, r.value, t));
      else {
        const o = i;
        o.fatal && (o.continue = !1), o.code ?? (o.code = "custom"), o.input ?? (o.input = r.value), o.inst ?? (o.inst = e), r.issues.push(Ke(o));
      }
    };
    const s = t.transform(r.value, r);
    return s instanceof Promise ? s.then((i) => (r.value = i, r.fallback = !0, r)) : (r.value = s, r.fallback = !0, r);
  };
});
function Uu(e) {
  return new Nu({
    type: "transform",
    transform: e
  });
}
const Bn = /* @__PURE__ */ h("ZodOptional", (e, t) => {
  Dn.init(e, t), X.init(e, t), e._zod.processJSONSchema = (r, n, s) => Mn(e, r, n, s), e.unwrap = () => e._zod.def.innerType;
});
function Xr(e) {
  return new Bn({
    type: "optional",
    innerType: e
  });
}
const Lu = /* @__PURE__ */ h("ZodExactOptional", (e, t) => {
  $i.init(e, t), X.init(e, t), e._zod.processJSONSchema = (r, n, s) => Mn(e, r, n, s), e.unwrap = () => e._zod.def.innerType;
});
function Mu(e) {
  return new Lu({
    type: "optional",
    innerType: e
  });
}
const Ju = /* @__PURE__ */ h("ZodNullable", (e, t) => {
  Si.init(e, t), X.init(e, t), e._zod.processJSONSchema = (r, n, s) => Ta(e, r, n, s), e.unwrap = () => e._zod.def.innerType;
});
function Qr(e) {
  return new Ju({
    type: "nullable",
    innerType: e
  });
}
const Bu = /* @__PURE__ */ h("ZodDefault", (e, t) => {
  Oi.init(e, t), X.init(e, t), e._zod.processJSONSchema = (r, n, s) => Ca(e, r, n, s), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function Wu(e, t) {
  return new Bu({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : xn(t);
    }
  });
}
const qu = /* @__PURE__ */ h("ZodPrefault", (e, t) => {
  Ei.init(e, t), X.init(e, t), e._zod.processJSONSchema = (r, n, s) => Ra(e, r, n, s), e.unwrap = () => e._zod.def.innerType;
});
function Hu(e, t) {
  return new qu({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : xn(t);
    }
  });
}
const Wn = /* @__PURE__ */ h("ZodNonOptional", (e, t) => {
  xi.init(e, t), X.init(e, t), e._zod.processJSONSchema = (r, n, s) => Da(e, r, n, s), e.unwrap = () => e._zod.def.innerType;
});
function Ku(e, t) {
  return new Wn({
    type: "nonoptional",
    innerType: e,
    ...A(t)
  });
}
const Gu = /* @__PURE__ */ h("ZodCatch", (e, t) => {
  Zi.init(e, t), X.init(e, t), e._zod.processJSONSchema = (r, n, s) => Na(e, r, n, s), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function Yu(e, t) {
  return new Gu({
    type: "catch",
    innerType: e,
    catchValue: typeof t == "function" ? t : () => t
  });
}
const Xu = /* @__PURE__ */ h("ZodPipe", (e, t) => {
  Ii.init(e, t), X.init(e, t), e._zod.processJSONSchema = (r, n, s) => Ua(e, r, n, s), e.in = t.in, e.out = t.out;
});
function en(e, t) {
  return new Xu({
    type: "pipe",
    in: e,
    out: t
    // ...util.normalizeParams(params),
  });
}
const Qu = /* @__PURE__ */ h("ZodReadonly", (e, t) => {
  Ai.init(e, t), X.init(e, t), e._zod.processJSONSchema = (r, n, s) => La(e, r, n, s), e.unwrap = () => e._zod.def.innerType;
});
function ec(e) {
  return new Qu({
    type: "readonly",
    innerType: e
  });
}
const tc = /* @__PURE__ */ h("ZodCustom", (e, t) => {
  Vi.init(e, t), X.init(e, t), e._zod.processJSONSchema = (r, n, s) => Ia(e, r);
});
function rc(e, t = {}) {
  return /* @__PURE__ */ wa(tc, e, t);
}
function nc(e, t) {
  return /* @__PURE__ */ ka(e, t);
}
const tn = (e, t, r) => {
  if (e && "reportValidity" in e) {
    const n = y(r, t);
    e.setCustomValidity(n && n.message || ""), e.reportValidity();
  }
}, Ut = (e, t) => {
  for (const r in t.fields) {
    const n = t.fields[r];
    n && n.ref && "reportValidity" in n.ref ? tn(n.ref, r, e) : n && n.refs && n.refs.forEach((s) => tn(s, r, e));
  }
}, rn = (e, t) => {
  t.shouldUseNativeValidation && Ut(e, t);
  const r = {};
  for (const n in e) {
    const s = y(t.fields, n), i = Object.assign(e[n] || {}, { ref: s && s.ref });
    if (sc(t.names || Object.keys(e), n)) {
      const o = Object.assign({}, y(r, n));
      C(o, "root", i), C(r, n, o);
    } else C(r, n, i);
  }
  return r;
}, sc = (e, t) => {
  const r = nn(t).replace(/[.*+?^${}()|\\]/g, "\\$&");
  return e.some((n) => nn(n).match(`^${r}\\.\\d+`));
};
function nn(e) {
  return e.replace(/[\[\]]/g, "");
}
function Lt() {
  return Lt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Lt.apply(null, arguments);
}
function sn(e, t) {
  try {
    var r = e();
  } catch (n) {
    return t(n);
  }
  return r && r.then ? r.then(void 0, t) : r;
}
function oc(e, t) {
  for (var r = {}; e.length; ) {
    var n = e[0], s = n.code, i = n.message, o = n.path.join(".");
    if (!r[o]) if ("unionErrors" in n) {
      var a = n.unionErrors[0].errors[0];
      r[o] = { message: a.message, type: a.code };
    } else r[o] = { message: i, type: s };
    if ("unionErrors" in n && n.unionErrors.forEach(function(v) {
      return v.errors.forEach(function(m) {
        return e.push(m);
      });
    }), t) {
      var f = r[o].types, d = f && f[n.code];
      r[o] = qt(o, t, r, s, d ? [].concat(d, n.message) : n.message);
    }
    e.shift();
  }
  return r;
}
function ic(e, t) {
  for (var r = {}, n = function() {
    var s = e[0], i = s.code, o = s.message, a = s.path.join(".");
    if (!r[a]) if (s.code === "invalid_union" && s.errors.length > 0) {
      var f = s.errors[0][0];
      r[a] = { message: f.message, type: f.code };
    } else r[a] = { message: o, type: i };
    if (s.code === "invalid_union" && s.errors.forEach(function(m) {
      return m.forEach(function(_) {
        return e.push(Lt({}, _, { path: [].concat(s.path, _.path) }));
      });
    }), t) {
      var d = r[a].types, v = d && d[s.code];
      r[a] = qt(a, t, r, i, v ? [].concat(v, s.message) : s.message);
    }
    e.shift();
  }; e.length; ) n();
  return r;
}
function ac(e, t, r) {
  if (r === void 0 && (r = {}), (function(n) {
    return "_def" in n && typeof n._def == "object" && "typeName" in n._def;
  })(e)) return function(n, s, i) {
    try {
      return Promise.resolve(sn(function() {
        return Promise.resolve(e[r.mode === "sync" ? "parse" : "parseAsync"](n, t)).then(function(o) {
          return i.shouldUseNativeValidation && Ut({}, i), { errors: {}, values: r.raw ? Object.assign({}, n) : o };
        });
      }, function(o) {
        if ((function(a) {
          return Array.isArray(a?.issues);
        })(o)) return { values: {}, errors: rn(oc(o.errors, !i.shouldUseNativeValidation && i.criteriaMode === "all"), i) };
        throw o;
      }));
    } catch (o) {
      return Promise.reject(o);
    }
  };
  if ((function(n) {
    return "_zod" in n && typeof n._zod == "object";
  })(e)) return function(n, s, i) {
    try {
      return Promise.resolve(sn(function() {
        return Promise.resolve((r.mode === "sync" ? Ks : Gs)(e, n, t)).then(function(o) {
          return i.shouldUseNativeValidation && Ut({}, i), { errors: {}, values: r.raw ? Object.assign({}, n) : o };
        });
      }, function(o) {
        if ((function(a) {
          return a instanceof tr;
        })(o)) return { values: {}, errors: rn(ic(o.issues, !i.shouldUseNativeValidation && i.criteriaMode === "all"), i) };
        throw o;
      }));
    } catch (o) {
      return Promise.reject(o);
    }
  };
  throw new Error("Invalid input: not a Zod schema");
}
const on = (e) => {
  const t = document.createElement("textarea");
  return t.innerHTML = e, t.value;
}, uc = ju({
  profileImage: Be().optional(),
  coverImage: Be().optional(),
  name: Be().nonempty({
    message: "Display name is required."
  }).max(64, {
    message: "Display name must be less than 64 characters."
  }),
  handle: Be().min(2, {
    message: "Handle must be at least 2 characters."
  }).max(100, {
    message: "Handle must be less than 100 characters."
  }).regex(/^[a-zA-Z0-9_]+$/, {
    message: "Handle must contain only letters, numbers, and underscores."
  }),
  bio: Be().max(250, {
    message: "Bio must be less than 250 characters."
  }).optional()
}), pc = ({ account: e, setIsEditingProfile: t }) => {
  const [r, n] = Ze(e.avatarUrl || null), s = _r(null), [i, o] = Ze(!1), [a, f] = Ze(e.bannerImageUrl || null), d = _r(null), [v, m] = Ze(!1), [_, p] = Ze(""), [Z, D] = Ze(!1), { mutate: P } = os(e?.handle || ""), V = Fs({
    resolver: ac(uc),
    defaultValues: {
      profileImage: e.avatarUrl,
      coverImage: e.bannerImageUrl || "",
      name: e.name,
      handle: "",
      bio: e.bio ? on(e.bio) : ""
    }
  }), F = !!V.formState.errors.name, R = !!V.formState.errors.handle;
  is(() => {
    if (e.handle) {
      const j = e.handle.match(/@([^@]+)@(.+)/);
      j && (V.setValue("handle", j[1]), p(j[2]));
    }
  }, [e.handle, V]);
  const $ = () => {
    s.current?.click();
  }, O = async (j) => {
    try {
      return o(!0), await kr(j);
    } catch (E) {
      n(null), V.setValue("profileImage", "");
      let x = "Failed to upload image. Try again.";
      if (E && typeof E == "object" && "statusCode" in E)
        switch (E.statusCode) {
          case 413:
            x = "Image size exceeds limit.";
            break;
          case 415:
            x = "The file type is not supported.";
            break;
        }
      Le.error(x);
    } finally {
      o(!1);
    }
  }, M = async (j) => {
    const E = j.target.files;
    if (E && E.length > 0) {
      const x = E[0];
      if (x.size > br) {
        Le.error(wr), j.target.value = "";
        return;
      }
      if (!await ls(x)) {
        Le.error(fs), j.target.value = "";
        return;
      }
      const U = URL.createObjectURL(x);
      n(U);
      const ie = await O(x);
      V.setValue("profileImage", ie);
    }
  }, ce = () => {
    d.current?.click();
  }, le = async (j) => {
    try {
      return m(!0), await kr(j);
    } catch (E) {
      f(null), V.setValue("coverImage", "");
      let x = "Failed to upload image. Try again.";
      if (E && typeof E == "object" && "statusCode" in E)
        switch (E.statusCode) {
          case 413:
            x = "Image size exceeds limit.";
            break;
          case 415:
            x = "The file type is not supported.";
            break;
        }
      Le.error(x);
    } finally {
      m(!1);
    }
  }, ye = async (j) => {
    const E = j.target.files;
    if (E && E.length > 0) {
      const x = E[0];
      if (x.size > br) {
        Le.error(wr), j.target.value = "";
        return;
      }
      const J = URL.createObjectURL(x);
      f(J);
      const U = await le(x);
      V.setValue("coverImage", U);
    }
  };
  function oe(j) {
    D(!0);
    const E = e.bio ? on(e.bio) : "";
    if (j.name === e.name && j.handle === e.handle.split("@")[1] && j.bio === E && j.profileImage === e.avatarUrl && j.coverImage === e.bannerImageUrl) {
      D(!1), t(!1);
      return;
    }
    P({
      name: j.name || e.name,
      username: j.handle || e.handle,
      bio: j.bio ?? "",
      avatarUrl: j.profileImage || "",
      bannerImageUrl: j.coverImage || ""
    }, {
      onSettled() {
        D(!1), t(!1);
      }
    });
  }
  return /* @__PURE__ */ z.jsx(js, { ...V, children: /* @__PURE__ */ z.jsxs(
    "form",
    {
      className: "flex flex-col gap-5",
      onKeyDown: (j) => {
        j.key === "Enter" && !j.shiftKey && (j.preventDefault(), V.handleSubmit(oe)());
      },
      onSubmit: V.handleSubmit(oe),
      children: [
        /* @__PURE__ */ z.jsxs("div", { className: "relative mb-2", children: [
          /* @__PURE__ */ z.jsx("div", { className: "group relative flex h-[180px] cursor-pointer items-center justify-center bg-gray-100 dark:bg-gray-950", onClick: ce, children: a ? /* @__PURE__ */ z.jsxs(z.Fragment, { children: [
            /* @__PURE__ */ z.jsx("img", { className: `size-full object-cover ${v && "opacity-10"}`, src: a }),
            v && /* @__PURE__ */ z.jsx("div", { className: "absolute leading-[0]", children: /* @__PURE__ */ z.jsx(yr, { size: "md" }) }),
            /* @__PURE__ */ z.jsx(Ue, { className: "absolute top-3 right-3 size-8 bg-black/60 opacity-0 group-hover:opacity-100 hover:bg-black/80 dark:text-white", onClick: (j) => {
              j.stopPropagation(), f(null), V.setValue("coverImage", "");
            }, children: /* @__PURE__ */ z.jsx(vr, {}) })
          ] }) : /* @__PURE__ */ z.jsx(Ue, { className: "pointer-events-none absolute right-3 bottom-3 bg-gray-200 group-hover:bg-gray-300", variant: "secondary", children: "Upload cover image" }) }),
          /* @__PURE__ */ z.jsx("div", { className: "group absolute -bottom-10 left-4 flex size-20 cursor-pointer items-center justify-center rounded-full border-2 border-white bg-gray-100 dark:border-[#101114] dark:bg-gray-950", onClick: $, children: r ? /* @__PURE__ */ z.jsxs(z.Fragment, { children: [
            /* @__PURE__ */ z.jsx("img", { className: `size-full rounded-full object-cover ${i && "opacity-10"}`, src: r }),
            i && /* @__PURE__ */ z.jsx("div", { className: "absolute leading-[0]", children: /* @__PURE__ */ z.jsx(yr, { size: "md" }) }),
            /* @__PURE__ */ z.jsx(Ue, { className: "absolute -top-2 -right-2 h-8 w-10 rounded-full bg-black/80 opacity-0 group-hover:opacity-100 hover:bg-black/90 dark:text-white", onClick: (j) => {
              j.stopPropagation(), n(null), V.setValue("profileImage", "");
            }, children: /* @__PURE__ */ z.jsx(vr, {}) })
          ] }) : /* @__PURE__ */ z.jsx(as, { size: 32, strokeWidth: 1.5 }) })
        ] }),
        /* @__PURE__ */ z.jsx(
          Je,
          {
            control: V.control,
            name: "profileImage",
            render: () => /* @__PURE__ */ z.jsxs(Ae, { children: [
              /* @__PURE__ */ z.jsx(Ve, { children: /* @__PURE__ */ z.jsx(
                et,
                {
                  ref: s,
                  accept: "image/*",
                  className: "hidden",
                  type: "file",
                  onChange: M
                }
              ) }),
              /* @__PURE__ */ z.jsx(Fe, {})
            ] })
          }
        ),
        /* @__PURE__ */ z.jsx(
          Je,
          {
            control: V.control,
            name: "coverImage",
            render: () => /* @__PURE__ */ z.jsxs(Ae, { children: [
              /* @__PURE__ */ z.jsx(Ve, { children: /* @__PURE__ */ z.jsx(
                et,
                {
                  ref: d,
                  accept: "image/*",
                  className: "hidden",
                  type: "file",
                  onChange: ye
                }
              ) }),
              /* @__PURE__ */ z.jsx(Fe, {})
            ] })
          }
        ),
        /* @__PURE__ */ z.jsx(
          Je,
          {
            control: V.control,
            name: "name",
            render: ({ field: j }) => /* @__PURE__ */ z.jsxs(Ae, { children: [
              /* @__PURE__ */ z.jsx(ot, { children: "Display name" }),
              /* @__PURE__ */ z.jsx(Ve, { children: /* @__PURE__ */ z.jsx(et, { placeholder: "Jamie Larson", ...j }) }),
              !F && /* @__PURE__ */ z.jsx(Dt, { children: "The name shown to your followers in the Inbox and Feed" }),
              /* @__PURE__ */ z.jsx(Fe, {})
            ] })
          }
        ),
        /* @__PURE__ */ z.jsx(
          Je,
          {
            control: V.control,
            name: "handle",
            render: ({ field: j }) => /* @__PURE__ */ z.jsxs(Ae, { children: [
              /* @__PURE__ */ z.jsx(ot, { children: "Handle" }),
              /* @__PURE__ */ z.jsx(Ve, { children: /* @__PURE__ */ z.jsxs("div", { className: "relative flex items-center justify-stretch gap-1 rounded-md border border-transparent bg-gray-100 px-3 transition-colors focus-within:border-(--color-focus-ring) focus-within:bg-transparent focus-within:shadow-[(--color-focus-ring)] focus-within:outline-hidden dark:bg-gray-950", children: [
                /* @__PURE__ */ z.jsx(hs, { className: "w-4 min-w-4 text-gray-700", size: 16 }),
                /* @__PURE__ */ z.jsx(et, { className: "w-auto grow border-none! bg-transparent px-0 shadow-none! outline-hidden!", placeholder: "index", ...j }),
                /* @__PURE__ */ z.jsxs("span", { className: "max-w-[200px] truncate text-right whitespace-nowrap text-gray-700 max-sm:hidden", title: `@${_}`, children: [
                  "@",
                  _
                ] })
              ] }) }),
              !R && /* @__PURE__ */ z.jsxs(Dt, { children: [
                "Your social web handle that others can follow. Works just like an email address. ",
                /* @__PURE__ */ z.jsx("a", { className: "font-medium text-purple", href: "https://ghost.org/help/social-web/", rel: "noreferrer", target: "_blank", children: "Learn more" })
              ] }),
              /* @__PURE__ */ z.jsx(Fe, {})
            ] })
          }
        ),
        /* @__PURE__ */ z.jsx(
          Je,
          {
            control: V.control,
            name: "bio",
            render: ({ field: j }) => /* @__PURE__ */ z.jsxs(Ae, { children: [
              /* @__PURE__ */ z.jsx(ot, { children: "Bio" }),
              /* @__PURE__ */ z.jsx(Ve, { children: /* @__PURE__ */ z.jsx($n, { ...j }) }),
              /* @__PURE__ */ z.jsx(Fe, {})
            ] })
          }
        ),
        /* @__PURE__ */ z.jsxs(us, { className: "max-sm:gap-2", children: [
          /* @__PURE__ */ z.jsx(cs, { asChild: !0, children: /* @__PURE__ */ z.jsx(Ue, { variant: "outline", children: "Cancel" }) }),
          /* @__PURE__ */ z.jsx(Ue, { disabled: Z || i || v, type: "submit", children: "Save" })
        ] })
      ]
    }
  ) });
};
export {
  pc as E
};
//# sourceMappingURL=edit-profile-BfpbEj98.js.map
