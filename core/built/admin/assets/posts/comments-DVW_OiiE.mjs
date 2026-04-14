import { h as E, j as t, u as R, i as y, b as $, m as M, E as $e, x as bt, y as U, z as X, A as Fe, F as vt, k as q, a as O, B as jt, D as K, p as Z, e as yt, N as me, Q as Ct } from "./index-BWRct4la.mjs";
import { u as Nt, F as wt, T as oe, a as ie, b as le, d as ce, c as kt } from "./filters-BHEK26Rv.mjs";
import { b as J, d as pe, c as fe } from "./hooks-BXuxe98u.mjs";
import { b as _t } from "./posts-B9yHB9r9.mjs";
import { u as St, U as he, g as Pt, D as Lt, b as Tt, E as It, d as Mt, e as Y, h as Rt, S as Et } from "./separator-eM4IfLr1.mjs";
import { m as Ot, q as Dt, c as xe, b as $t, F as Ft, n as zt, C as Ht, j as Bt, i as At, o as ze, D as ge, M as Vt, H as He, R as Ut, l as Be, E as Ae, p as Ve } from "./app-utils-bFFqatF8.mjs";
import { a as qt, C as Kt, X as Qt, k as be, m as ve, n as je, o as ye, p as Wt, q as Ce } from "./dialog-ChCs58Pc.mjs";
import { H as Te, g as Yt, u as Xt, a as Gt, L as Zt } from "./virtual-list-window-DzHu_geX.mjs";
import { M as Jt } from "./main-layout-CvVxJRIb.mjs";
import { c as es, P as Ne, u as ts, b as Ue, e as Ie, h as ss, B as T, C as rs } from "./button-BOW1bLRE.mjs";
import { L as Q } from "./loading-indicator-D8SILWlO.mjs";
import { E as qe } from "./empty-indicator-DjHtkWLJ.mjs";
import { S as ns, b as as, c as os, d as is } from "./sheet-CCZe4G23.mjs";
var ee = "Checkbox", [ls] = es(ee), [cs, we] = ls(ee);
function ds(e) {
  const {
    __scopeCheckbox: s,
    checked: r,
    children: n,
    defaultChecked: a,
    disabled: o,
    form: i,
    name: l,
    onCheckedChange: c,
    required: d,
    value: u = "on",
    // @ts-expect-error
    internal_do_not_use_render: m
  } = e, [p, h] = ts({
    prop: r,
    defaultProp: a ?? !1,
    onChange: c,
    caller: ee
  }), [f, x] = R(null), [v, g] = R(null), j = y(!1), L = f ? !!i || !!f.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), k = {
    checked: p,
    disabled: o,
    setChecked: h,
    control: f,
    setControl: x,
    name: l,
    form: i,
    value: u,
    hasConsumerStoppedPropagationRef: j,
    required: d,
    defaultChecked: F(a) ? !1 : a,
    isFormControl: L,
    bubbleInput: v,
    setBubbleInput: g
  };
  return /* @__PURE__ */ t.jsx(
    cs,
    {
      scope: s,
      ...k,
      children: us(m) ? m(k) : n
    }
  );
}
var Ke = "CheckboxTrigger", Qe = E(
  ({ __scopeCheckbox: e, onKeyDown: s, onClick: r, ...n }, a) => {
    const {
      control: o,
      value: i,
      disabled: l,
      checked: c,
      required: d,
      setControl: u,
      setChecked: m,
      hasConsumerStoppedPropagationRef: p,
      isFormControl: h,
      bubbleInput: f
    } = we(Ke, e), x = Ue(a, u), v = y(c);
    return $(() => {
      const g = o == null ? void 0 : o.form;
      if (g) {
        const j = () => m(v.current);
        return g.addEventListener("reset", j), () => g.removeEventListener("reset", j);
      }
    }, [o, m]), /* @__PURE__ */ t.jsx(
      Ne.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": F(c) ? "mixed" : c,
        "aria-required": d,
        "data-state": Ze(c),
        "data-disabled": l ? "" : void 0,
        disabled: l,
        value: i,
        ...n,
        ref: x,
        onKeyDown: Ie(s, (g) => {
          g.key === "Enter" && g.preventDefault();
        }),
        onClick: Ie(r, (g) => {
          m((j) => F(j) ? !0 : !j), f && h && (p.current = g.isPropagationStopped(), p.current || g.stopPropagation());
        })
      }
    );
  }
);
Qe.displayName = Ke;
var ke = E(
  (e, s) => {
    const {
      __scopeCheckbox: r,
      name: n,
      checked: a,
      defaultChecked: o,
      required: i,
      disabled: l,
      value: c,
      onCheckedChange: d,
      form: u,
      ...m
    } = e;
    return /* @__PURE__ */ t.jsx(
      ds,
      {
        __scopeCheckbox: r,
        checked: a,
        defaultChecked: o,
        disabled: l,
        required: i,
        onCheckedChange: d,
        name: n,
        form: u,
        value: c,
        internal_do_not_use_render: ({ isFormControl: p }) => /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
          /* @__PURE__ */ t.jsx(
            Qe,
            {
              ...m,
              ref: s,
              __scopeCheckbox: r
            }
          ),
          p && /* @__PURE__ */ t.jsx(
            Ge,
            {
              __scopeCheckbox: r
            }
          )
        ] })
      }
    );
  }
);
ke.displayName = ee;
var We = "CheckboxIndicator", Ye = E(
  (e, s) => {
    const { __scopeCheckbox: r, forceMount: n, ...a } = e, o = we(We, r);
    return /* @__PURE__ */ t.jsx(
      qt,
      {
        present: n || F(o.checked) || o.checked === !0,
        children: /* @__PURE__ */ t.jsx(
          Ne.span,
          {
            "data-state": Ze(o.checked),
            "data-disabled": o.disabled ? "" : void 0,
            ...a,
            ref: s,
            style: { pointerEvents: "none", ...e.style }
          }
        )
      }
    );
  }
);
Ye.displayName = We;
var Xe = "CheckboxBubbleInput", Ge = E(
  ({ __scopeCheckbox: e, ...s }, r) => {
    const {
      control: n,
      hasConsumerStoppedPropagationRef: a,
      checked: o,
      defaultChecked: i,
      required: l,
      disabled: c,
      name: d,
      value: u,
      form: m,
      bubbleInput: p,
      setBubbleInput: h
    } = we(Xe, e), f = Ue(r, h), x = Nt(o), v = St(n);
    $(() => {
      const j = p;
      if (!j) return;
      const L = window.HTMLInputElement.prototype, N = Object.getOwnPropertyDescriptor(
        L,
        "checked"
      ).set, _ = !a.current;
      if (x !== o && N) {
        const w = new Event("click", { bubbles: _ });
        j.indeterminate = F(o), N.call(j, F(o) ? !1 : o), j.dispatchEvent(w);
      }
    }, [p, x, o, a]);
    const g = y(F(o) ? !1 : o);
    return /* @__PURE__ */ t.jsx(
      Ne.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: i ?? g.current,
        required: l,
        disabled: c,
        name: d,
        value: u,
        form: m,
        ...s,
        tabIndex: -1,
        ref: f,
        style: {
          ...s.style,
          ...v,
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
Ge.displayName = Xe;
function us(e) {
  return typeof e == "function";
}
function F(e) {
  return e === "indeterminate";
}
function Ze(e) {
  return F(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const ms = $e(
  "inline-flex items-center rounded-xs border px-1.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 focus:outline-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground/70",
        destructive: "border-transparent bg-destructive/20 text-destructive",
        success: "border-transparent bg-green/20 text-green",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function ps({ className: e, variant: s, ...r }) {
  return /* @__PURE__ */ t.jsx("div", { className: M(ms({ variant: s }), e), ...r });
}
const Je = E(({ className: e, ...s }, r) => /* @__PURE__ */ t.jsx(
  ke,
  {
    ref: r,
    className: M(
      "grid place-content-center peer h-4 w-4 shrink-0 rounded-xs border border-primary shadow focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-focus-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...s,
    children: /* @__PURE__ */ t.jsx(
      Ye,
      {
        className: M("grid place-content-center text-current"),
        children: /* @__PURE__ */ t.jsx(Kt, { className: "size-4" })
      }
    )
  }
));
Je.displayName = ke.displayName;
var fs = Symbol.for("react.lazy"), G = bt[" use ".trim().toString()];
function hs(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function et(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === fs && "_payload" in e && hs(e._payload);
}
// @__NO_SIDE_EFFECTS__
function xs(e) {
  const s = /* @__PURE__ */ gs(e), r = E((n, a) => {
    let { children: o, ...i } = n;
    et(o) && typeof G == "function" && (o = G(o._payload));
    const l = U.toArray(o), c = l.find(vs);
    if (c) {
      const d = c.props.children, u = l.map((m) => m === c ? U.count(d) > 1 ? U.only(null) : X(d) ? d.props.children : null : m);
      return /* @__PURE__ */ t.jsx(s, { ...i, ref: a, children: X(d) ? Fe(d, void 0, u) : null });
    }
    return /* @__PURE__ */ t.jsx(s, { ...i, ref: a, children: o });
  });
  return r.displayName = `${e}.Slot`, r;
}
// @__NO_SIDE_EFFECTS__
function gs(e) {
  const s = E((r, n) => {
    let { children: a, ...o } = r;
    if (et(a) && typeof G == "function" && (a = G(a._payload)), X(a)) {
      const i = ys(a), l = js(o, a.props);
      return a.type !== vt && (l.ref = n ? ss(n, i) : i), Fe(a, l);
    }
    return U.count(a) > 1 ? U.only(null) : null;
  });
  return s.displayName = `${e}.SlotClone`, s;
}
var bs = Symbol("radix.slottable");
function vs(e) {
  return X(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === bs;
}
function js(e, s) {
  const r = { ...s };
  for (const n in s) {
    const a = e[n], o = s[n];
    /^on[A-Z]/.test(n) ? a && o ? r[n] = (...l) => {
      const c = o(...l);
      return a(...l), c;
    } : a && (r[n] = a) : n === "style" ? r[n] = { ...a, ...o } : n === "className" && (r[n] = [a, o].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function ys(e) {
  var n, a;
  let s = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = s && "isReactWarning" in s && s.isReactWarning;
  return r ? e.ref : (s = (a = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : a.get, r = s && "isReactWarning" in s && s.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var Cs = [
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
], Ns = Cs.reduce((e, s) => {
  const r = /* @__PURE__ */ xs(`Primitive.${s}`), n = E((a, o) => {
    const { asChild: i, ...l } = a, c = i ? r : s;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ t.jsx(c, { ...l, ref: o });
  });
  return n.displayName = `Primitive.${s}`, { ...e, [s]: n };
}, {}), ws = "Label", tt = E((e, s) => /* @__PURE__ */ t.jsx(
  Ns.label,
  {
    ...e,
    ref: s,
    onMouseDown: (r) => {
      var a;
      r.target.closest("button, input, select, textarea") || ((a = e.onMouseDown) == null || a.call(e, r), !r.defaultPrevented && r.detail > 1 && r.preventDefault());
    }
  }
));
tt.displayName = ws;
var st = tt;
const ks = $e(
  "text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), rt = E(({ className: e, ...s }, r) => /* @__PURE__ */ t.jsx(
  st,
  {
    ref: r,
    className: M(ks(), e),
    ...s
  }
));
rt.displayName = st.displayName;
const _s = ({ children: e, className: s, ...r }) => /* @__PURE__ */ t.jsx("section", { className: M("flex gap-6 flex-col p-4 lg:p-8 size-full grow", s), ...r, children: e }), Ss = "MembersResponseType", Ps = J({
  method: "POST",
  path: ({ id: e }) => `/members/${e}/commenting/disable`,
  body: ({ reason: e, hideComments: s }) => ({
    reason: e,
    hide_comments: s
  }),
  invalidateQueries: {
    dataType: "CommentsResponseType"
  }
}), Ls = J({
  method: "POST",
  path: ({ id: e }) => `/members/${e}/commenting/enable`,
  body: () => ({}),
  invalidateQueries: {
    dataType: "CommentsResponseType"
  }
}), Ts = pe({
  dataType: Ss,
  path: "/members/",
  defaultSearchParams: {
    include: "labels,tiers",
    limit: "100",
    order: "created_at desc"
  },
  defaultNextPageParams: (e, s) => {
    var r;
    if ((r = e.meta) != null && r.pagination.next)
      return {
        ...s,
        page: e.meta.pagination.next.toString()
      };
  },
  returnData: (e) => {
    const { pages: s } = e, r = s.flatMap((a) => a.members), n = s[s.length - 1].meta;
    return {
      members: r,
      meta: n,
      isEnd: n ? n.pagination.pages === n.pagination.page : !0
    };
  }
});
function nt(e) {
  return `'${e.replace(/\\/g, "\\\\").replace(/'/g, "\\'")}'`;
}
function Is(e, s) {
  if (s.length !== 0)
    return `${e}:[${s.map((r) => nt(r)).join(",")}]`;
}
function at(...e) {
  const s = /* @__PURE__ */ new Map();
  for (const r of e)
    if (r)
      for (const n of r)
        s.has(n.value) || s.set(n.value, n);
  return [...s.values()];
}
function Ms(e, s, r, n) {
  var a = this, o = y(null), i = y(0), l = y(0), c = y(null), d = y([]), u = y(), m = y(), p = y(e), h = y(!0), f = y(), x = y();
  p.current = e;
  var v = typeof window < "u", g = !s && s !== 0 && v;
  if (typeof e != "function") throw new TypeError("Expected a function");
  s = +s || 0;
  var j = !!(r = r || {}).leading, L = !("trailing" in r) || !!r.trailing, k = !!r.flushOnExit && L, N = "maxWait" in r, _ = "debounceOnServer" in r && !!r.debounceOnServer, w = N ? Math.max(+r.maxWait || 0, s) : null, I = O(function() {
    var S = function(C) {
      var P = d.current, D = u.current;
      return d.current = u.current = null, i.current = C, l.current = l.current || C, m.current = p.current.apply(D, P);
    }, b = function(C, P) {
      g && cancelAnimationFrame(c.current), c.current = g ? requestAnimationFrame(C) : setTimeout(C, P);
    }, V = function(C) {
      if (!h.current) return !1;
      var P = C - o.current;
      return !o.current || P >= s || P < 0 || N && C - i.current >= w;
    }, se = function(C) {
      return c.current = null, L && d.current ? S(C) : (d.current = u.current = null, m.current);
    }, B = function C() {
      var P = Date.now();
      if (j && l.current === i.current && W(), V(P)) return se(P);
      if (h.current) {
        var D = s - (P - o.current), H = N ? Math.min(D, w - (P - i.current)) : D;
        b(C, H);
      }
    }, W = function() {
      n && n({});
    }, z = function() {
      if (v || _) {
        var C, P = Date.now(), D = V(P);
        if (d.current = [].slice.call(arguments), u.current = a, o.current = P, k && !f.current && (f.current = function() {
          var H;
          ((H = globalThis.document) == null ? void 0 : H.visibilityState) === "hidden" && x.current.flush();
        }, (C = globalThis.document) == null || C.addEventListener == null || C.addEventListener("visibilitychange", f.current)), D) {
          if (!c.current && h.current) return i.current = o.current, b(B, s), j ? S(o.current) : m.current;
          if (N) return b(B, s), S(o.current);
        }
        return c.current || b(B, s), m.current;
      }
    };
    return z.cancel = function() {
      var C = c.current;
      C && (g ? cancelAnimationFrame(c.current) : clearTimeout(c.current)), i.current = 0, d.current = o.current = u.current = c.current = null, C && n && n({});
    }, z.isPending = function() {
      return !!c.current;
    }, z.flush = function() {
      return c.current ? se(Date.now()) : m.current;
    }, z;
  }, [j, N, s, w, L, k, g, v, _, n]);
  return x.current = I, $(function() {
    return h.current = !0, function() {
      var S;
      k && x.current.flush(), f.current && ((S = globalThis.document) == null || S.removeEventListener == null || S.removeEventListener("visibilitychange", f.current), f.current = null), h.current = !1;
    };
  }, [k]), I;
}
function Rs(e, s) {
  return e === s;
}
function Es(e, s, r) {
  var n = Rs, a = y(e), o = R({})[1], i = Ms(q(function(c) {
    a.current = c, o({});
  }, [o]), s, r, o), l = y(e);
  return n(l.current, e) || (i(e), l.current = e), [a.current, i];
}
const Me = () => {
};
function Os(e) {
  return function(r = {}) {
    const { enabled: n = !0 } = r, a = () => {
      const i = e.useBrowse("", { enabled: !0 }), l = O(() => (i.data || []).map(e.toOption), [i.data]);
      return {
        items: i.data,
        options: l,
        isLoading: i.isLoading,
        pagination: i.pagination
      };
    }, o = ({ query: i, selectedValues: l }) => {
      var f;
      const [c] = Es(i, e.debounceMs ?? 200), d = e.useBrowse(c, { enabled: n }), u = (f = e.useHydrate) == null ? void 0 : f.call(e, l, { enabled: n }), m = O(() => (d.data || []).map(e.toOption), [d.data]), p = O(() => ((u == null ? void 0 : u.data) || []).map(e.toOption), [u == null ? void 0 : u.data]), h = O(() => at(p, m), [p, m]);
      return n ? {
        options: h,
        isInitialLoad: d.isLoading && h.length === 0,
        isSearching: !d.isLoading && d.isRefreshing && !d.isLoadingMore,
        isLoadingMore: d.isLoadingMore,
        hasMore: d.hasMore,
        loadMore: d.loadMore ?? Me
      } : {
        options: [],
        isInitialLoad: !1,
        isSearching: !1,
        isLoadingMore: !1,
        hasMore: !1,
        loadMore: Me
      };
    };
    return {
      id: e.id,
      useInitialBrowse: a,
      useOptions: o
    };
  };
}
function Ds(e) {
  return { filter: e };
}
function $s(e) {
  return Is("id", e);
}
function Re(e) {
  return {
    limit: "100",
    ...e
  };
}
function _e({
  id: e,
  buildBrowseSearchParams: s,
  buildHydrateSearchParams: r = Ds,
  buildHydrateFilter: n = $s,
  debounceMs: a,
  selectItems: o,
  toOption: i,
  useQuery: l
}) {
  return Os({
    id: e,
    useBrowse: (c, d) => {
      var m, p;
      const u = l({
        enabled: d.enabled ?? !0,
        searchParams: Re(s(c))
      });
      return {
        data: o(u.data),
        isLoading: u.isLoading,
        isRefreshing: u.isFetching,
        isLoadingMore: u.isFetchingNextPage,
        hasMore: !!u.hasNextPage,
        loadMore: u.fetchNextPage,
        pagination: (p = (m = u.data) == null ? void 0 : m.meta) == null ? void 0 : p.pagination
      };
    },
    useHydrate: (c, d) => {
      const u = n(c), m = {};
      typeof u == "string" && Object.assign(m, Re(r(u)));
      const h = l({
        enabled: (d.enabled ?? !0) && c.length > 0,
        searchParams: m
      });
      return {
        data: o(h.data),
        isLoading: h.isLoading
      };
    },
    toOption: i,
    debounceMs: a
  });
}
function Fs(e) {
  return {
    value: e.id,
    label: e.name || "Unknown name",
    detail: e.email ?? "(Unknown email)"
  };
}
const zs = _e({
  id: "posts.members.remote",
  buildBrowseSearchParams: (e) => ({
    limit: "100",
    order: "created_at DESC",
    ...e ? { search: e } : {}
  }),
  selectItems: (e) => e == null ? void 0 : e.members,
  useQuery: ({ enabled: e, searchParams: s }) => Ts({
    enabled: e,
    keepPreviousData: !0,
    searchParams: s
  }),
  toOption: Fs
});
function Hs() {
  return zs();
}
const Bs = "PagesResponseType", As = pe({
  dataType: Bs,
  path: "/pages/",
  defaultNextPageParams: (e, s) => {
    var r;
    if ((r = e.meta) != null && r.pagination.next)
      return {
        ...s,
        page: e.meta.pagination.next.toString()
      };
  },
  returnData: (e) => {
    const { pages: s } = e, r = s.flatMap((a) => a.pages), n = s[s.length - 1].meta;
    return {
      pages: r,
      meta: n,
      isEnd: n ? n.pagination.pages === n.pagination.page : !0
    };
  }
});
function Vs(e, s) {
  return function(n) {
    const a = e(n), o = s(n), i = q(({ query: l, selectedValues: c }) => {
      const d = a.useOptions({ query: l, selectedValues: c }), u = o.useOptions({ query: l, selectedValues: c });
      return {
        options: at(d.options, u.options),
        isInitialLoad: d.options.length === 0 && u.options.length === 0 && (d.isInitialLoad || u.isInitialLoad),
        isSearching: d.isSearching || u.isSearching,
        isLoadingMore: d.isLoadingMore || u.isLoadingMore,
        hasMore: d.hasMore || u.hasMore,
        loadMore: () => {
          d.hasMore && d.loadMore(), u.hasMore && u.loadMore();
        }
      };
    }, [a, o]);
    return O(() => ({
      id: `${a.id}+${o.id}`,
      useOptions: i
    }), [a.id, o.id, i]);
  };
}
function Us(e) {
  return e ? `status:published+title:~${nt(e)}` : "status:published";
}
function qs(e) {
  return {
    value: e.id,
    label: e.title
  };
}
function Ks(e) {
  return {
    value: e.id,
    label: e.title,
    detail: "Page"
  };
}
const ot = (e) => ({
  filter: Us(e),
  limit: "25",
  fields: "id,title",
  order: "published_at DESC"
}), it = (e) => ({
  fields: "id,title",
  filter: e
}), Qs = _e({
  id: "posts.published.remote",
  buildBrowseSearchParams: ot,
  buildHydrateSearchParams: it,
  selectItems: (e) => e == null ? void 0 : e.posts,
  useQuery: ({ enabled: e, searchParams: s }) => _t({
    enabled: e,
    keepPreviousData: !0,
    searchParams: s
  }),
  toOption: qs
}), Ws = _e({
  id: "pages.published.remote",
  buildBrowseSearchParams: ot,
  buildHydrateSearchParams: it,
  selectItems: (e) => e == null ? void 0 : e.pages,
  useQuery: ({ enabled: e, searchParams: s }) => As({
    enabled: e,
    keepPreviousData: !0,
    searchParams: s
  }),
  toOption: Ks
}), Ys = Vs(
  Qs,
  Ws
);
function Xs() {
  return Ys();
}
const Gs = ({
  filters: e,
  onFiltersChange: s
}) => {
  const r = Xs(), n = Hs(), a = O(
    () => [
      {
        key: "author",
        label: "Author",
        type: "select",
        icon: /* @__PURE__ */ t.jsx(he, { className: "size-4" }),
        searchable: !0,
        valueSource: n,
        className: "w-80",
        popoverContentClassName: "w-80",
        operators: [
          { value: "is", label: "is" },
          { value: "is_not", label: "is not" }
        ]
      },
      {
        key: "post",
        label: "Post",
        type: "select",
        icon: /* @__PURE__ */ t.jsx(Ot, { className: "size-4" }),
        searchable: !0,
        valueSource: r,
        className: "w-full max-w-80",
        popoverContentClassName: "w-full max-w-[calc(100vw-32px)] max-w-80",
        operators: [
          { value: "is", label: "is" },
          { value: "is_not", label: "is not" }
        ]
      },
      {
        key: "body",
        label: "Text",
        type: "text",
        icon: /* @__PURE__ */ t.jsx(Dt, { className: "size-4" }),
        placeholder: "Search comment text...",
        operators: [
          { value: "contains", label: "contains" },
          { value: "not_contains", label: "does not contain" }
        ],
        defaultOperator: "contains",
        className: "w-full max-w-48",
        popoverContentClassName: "w-full max-w-48"
      },
      {
        key: "status",
        label: "Status",
        type: "select",
        icon: /* @__PURE__ */ t.jsx(Pt, { className: "size-4" }),
        options: [
          { value: "published", label: "Published" },
          { value: "hidden", label: "Hidden" }
        ],
        operators: [
          { value: "is", label: "is" }
        ],
        searchable: !1,
        hideOperatorSelect: !0
      },
      {
        key: "reported",
        label: "Reported",
        type: "select",
        icon: /* @__PURE__ */ t.jsx(xe, { className: "size-4" }),
        options: [
          { value: "true", label: "Yes" },
          { value: "false", label: "No" }
        ],
        operators: [
          { value: "is", label: "is" }
        ],
        searchable: !1,
        hideOperatorSelect: !0
      },
      {
        key: "created_at",
        label: "Date",
        type: "date",
        className: "w-full max-w-32",
        icon: /* @__PURE__ */ t.jsx($t, { className: "size-4" }),
        operators: [
          { value: "is", label: "is" },
          { value: "before", label: "before" },
          { value: "after", label: "after" }
        ]
      }
    ],
    [n, r]
  ), o = e.length > 0, i = M(
    "flex flex-row",
    !o && "[grid-area:actions] pt-5 justify-start sm:justify-end sm:pt-0",
    o && "col-start-1 col-end-4 row-start-3 pt-5"
  );
  return /* @__PURE__ */ t.jsx("div", { className: i, children: /* @__PURE__ */ t.jsx(
    wt,
    {
      addButtonIcon: o ? /* @__PURE__ */ t.jsx(Ft, {}) : /* @__PURE__ */ t.jsx(zt, {}),
      addButtonText: o ? "Add filter" : "Filter",
      allowMultiple: !1,
      className: `[&>button]:order-last ${o ? "[&>button]:border-none" : "w-auto"}`,
      clearButtonClassName: "font-normal text-muted-foreground",
      clearButtonIcon: /* @__PURE__ */ t.jsx(Qt, {}),
      clearButtonText: "Clear",
      fields: a,
      filters: e,
      keyboardShortcut: "f",
      popoverAlign: o ? "start" : "end",
      showClearButton: o,
      showSearchInput: !1,
      onChange: s
    }
  ) });
}, Zs = ({ children: e }) => /* @__PURE__ */ t.jsxs(Te, { className: "relative pb-6! md:sticky", variant: "inline-nav", children: [
  /* @__PURE__ */ t.jsx(Te.Title, { children: "Comments" }),
  e
] }), Js = ({ children: e }) => /* @__PURE__ */ t.jsx(Jt, { children: /* @__PURE__ */ t.jsx("div", { className: "grid w-full grow", children: /* @__PURE__ */ t.jsx("div", { className: "flex h-full flex-col", "data-testid": "comments-page", children: e }) }) });
function er({ onClick: e, expanded: s }) {
  return /* @__PURE__ */ t.jsxs(
    T,
    {
      className: "shrink-0 gap-0.5 self-start p-0 text-base hover:bg-transparent",
      variant: "ghost",
      onClick: e,
      children: [
        s ? "Show less" : "Show more",
        s ? /* @__PURE__ */ t.jsx(Ht, {}) : /* @__PURE__ */ t.jsx(rs, {})
      ]
    }
  );
}
function lt({ item: e }) {
  const s = y(null), [r, n] = R(!1), [a, o] = R(!1);
  return $(() => {
    if (a)
      return;
    const i = () => {
      s.current && n(s.current.scrollHeight > s.current.clientHeight);
    };
    return i(), window.addEventListener("resize", i), () => window.removeEventListener("resize", i);
  }, [e.html, a]), /* @__PURE__ */ t.jsx("div", { className: "mt-1 flex flex-col gap-2", children: /* @__PURE__ */ t.jsxs("div", { className: `flex max-w-full flex-col items-start ${e.status === "hidden" && "opacity-50"}`, children: [
    /* @__PURE__ */ t.jsx(
      "div",
      {
        dangerouslySetInnerHTML: { __html: e.html || "" },
        ref: s,
        className: M(
          "prose flex-1 text-base max-w-[80ch] balance leading-[1.5em] [&_*]:leading-[1.5em] [&_*]:text-base [&_*]:font-normal [&_blockquote]:border-l-[3px] [&_blockquote]:border-foreground [&_blockquote]:p-0 [&_blockquote]:pl-3 [&_blockquote_p]:mt-0 [&_a]:underline",
          a ? "-mb-1 [&_p]:mb-[0.85em]" : "line-clamp-2 [&_p]:m-0 [&_blockquote+p]:mt-1 mb-1"
        )
      }
    ),
    r && /* @__PURE__ */ t.jsx(er, { expanded: a, onClick: () => o(!a) })
  ] }) });
}
const te = "CommentsResponseType", tr = pe({
  dataType: te,
  path: "/comments/",
  defaultNextPageParams: (e, s) => {
    var r, n;
    return (r = e.meta) != null && r.pagination.next ? {
      ...s,
      page: (((n = e.meta) == null ? void 0 : n.pagination.next) || 1).toString()
    } : void 0;
  },
  returnData: (e) => {
    const { pages: s } = e, r = s.flatMap((a) => a.comments), n = s[s.length - 1].meta;
    return {
      comments: r,
      meta: n,
      isEnd: n ? n.pagination.pages === n.pagination.page : !0
    };
  }
}), ct = (e) => tr({
  ...e,
  searchParams: {
    limit: "100",
    order: "created_at desc",
    include: "member,post,parent",
    ...e == null ? void 0 : e.searchParams
  }
}), dt = J({
  method: "PUT",
  path: ({ id: e }) => `/comments/${e}/`,
  body: ({ id: e }) => ({
    comments: [{
      id: e,
      status: "hidden"
    }]
  }),
  invalidateQueries: {
    dataType: te
  }
}), ut = J({
  method: "PUT",
  path: ({ id: e }) => `/comments/${e}/`,
  body: ({ id: e }) => ({
    comments: [{
      id: e,
      status: "published"
    }]
  }),
  invalidateQueries: {
    dataType: te
  }
}), sr = fe({
  dataType: te,
  path: (e) => `/comments/${e}/`,
  defaultSearchParams: {
    include: "member,post,count.replies,count.direct_replies,count.likes,count.reports,parent,in_reply_to"
  }
}), rr = fe({
  dataType: "CommentReportsResponseType",
  path: (e) => `/comments/${e}/reports/`
}), nr = (e, s) => rr(e, { ...s }), ar = fe({
  dataType: "CommentLikesResponseType",
  path: (e) => `/comments/${e}/likes/`,
  defaultSearchParams: {
    include: "member",
    limit: "100",
    order: "created_at desc"
  }
}), or = (e, s) => ar(e, { ...s }), ir = (e, s) => ct({
  ...s,
  searchParams: {
    filter: `(parent_id:${e}+in_reply_to_id:null),in_reply_to_id:${e}`,
    order: "created_at asc",
    include: "member,post,count.direct_replies,count.likes,count.reports,parent,in_reply_to",
    limit: "100"
  }
});
function A({ avatarImage: e, memberId: s, memberName: r, memberEmail: n, isHidden: a, className: o }) {
  const i = { name: r || void 0, email: n || void 0 }, l = !!(r || n), c = l ? Bt(i) : null, d = l ? jt(At(i), "75", "55") : void 0;
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: M(
        "relative flex size-6 min-w-6 items-center justify-center overflow-hidden rounded-full md:size-8 md:min-w-8",
        !l && "bg-accent",
        a && "opacity-50",
        o
      ),
      style: l ? { backgroundColor: d } : void 0,
      children: [
        c ? /* @__PURE__ */ t.jsx("span", { className: "text-xs font-semibold text-white md:text-sm", children: c }) : /* @__PURE__ */ t.jsx(he, { className: "size-3! text-muted-foreground md:size-4!", size: 12 }),
        s && e && /* @__PURE__ */ t.jsx("div", { className: "absolute inset-0", children: /* @__PURE__ */ t.jsx("img", { alt: "Member avatar", src: e }) })
      ]
    }
  );
}
function lr(e) {
  const s = new Date(e);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric"
  }).format(s).replace(/(\d+),(\s+\d{4})/, "$1$2");
}
function mt({
  memberName: e,
  memberId: s,
  createdAt: r,
  isHidden: n,
  canComment: a,
  onAuthorClick: o,
  postTitle: i,
  onPostClick: l,
  className: c
}) {
  return /* @__PURE__ */ t.jsxs("div", { className: M("flex items-baseline gap-4", c), children: [
    /* @__PURE__ */ t.jsxs("div", { className: M(
      "mb-1 flex min-w-0 items-center gap-x-1 text-sm",
      n && "opacity-50"
    ), children: [
      /* @__PURE__ */ t.jsx("div", { className: "whitespace-nowrap", children: s && o ? /* @__PURE__ */ t.jsx(
        T,
        {
          className: "flex h-auto items-center gap-1.5 truncate p-0 font-semibold text-primary hover:opacity-70",
          variant: "link",
          onClick: o,
          children: e || "Unknown"
        }
      ) : /* @__PURE__ */ t.jsx("span", { className: "block truncate font-semibold", children: e || "Unknown" }) }),
      a === !1 && /* @__PURE__ */ t.jsx(oe, { children: /* @__PURE__ */ t.jsxs(ie, { children: [
        /* @__PURE__ */ t.jsx(le, { asChild: !0, children: /* @__PURE__ */ t.jsx("span", { "data-testid": "commenting-disabled-indicator", children: /* @__PURE__ */ t.jsx(
          ze,
          {
            className: "size-3.5 text-muted-foreground"
          }
        ) }) }),
        /* @__PURE__ */ t.jsx(ce, { children: "Comments disabled" })
      ] }) }),
      /* @__PURE__ */ t.jsx(ge, { className: "shrink-0 text-muted-foreground/50", size: 16 }),
      /* @__PURE__ */ t.jsx("div", { className: "shrink-0 whitespace-nowrap", children: r && /* @__PURE__ */ t.jsx(oe, { children: /* @__PURE__ */ t.jsxs(ie, { children: [
        /* @__PURE__ */ t.jsx(le, { asChild: !0, children: /* @__PURE__ */ t.jsx("span", { className: "cursor-default text-sm text-muted-foreground", children: K(r) }) }),
        /* @__PURE__ */ t.jsx(ce, { children: lr(r) })
      ] }) }) }),
      i && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
        /* @__PURE__ */ t.jsx("div", { className: "shrink-0 text-muted-foreground", children: "on" }),
        /* @__PURE__ */ t.jsx("div", { className: "min-w-0 truncate", children: l ? /* @__PURE__ */ t.jsx(
          T,
          {
            className: "block h-auto w-full cursor-pointer truncate p-0 text-left font-medium text-gray-800 hover:opacity-70 dark:text-gray-400",
            variant: "link",
            onClick: l,
            children: i
          }
        ) : /* @__PURE__ */ t.jsx("span", { className: "font-medium text-gray-800 dark:text-gray-400", children: i }) })
      ] })
    ] }),
    n && /* @__PURE__ */ t.jsx(ps, { variant: "secondary", children: "Hidden" })
  ] });
}
function cr({
  open: e,
  memberName: s,
  onOpenChange: r,
  onConfirm: n
}) {
  const [a, o] = R(!1), i = (c) => {
    c || o(!1), r(c);
  }, l = () => {
    n(a), o(!1);
  };
  return /* @__PURE__ */ t.jsx(be, { open: e, onOpenChange: i, children: /* @__PURE__ */ t.jsxs(ve, { className: "gap-5", children: [
    /* @__PURE__ */ t.jsxs(je, { children: [
      /* @__PURE__ */ t.jsx(ye, { children: "Disable comments" }),
      /* @__PURE__ */ t.jsxs(Wt, { children: [
        s || "This member",
        " won't be able to comment in the future. You can re-enable commenting anytime."
      ] })
    ] }),
    /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ t.jsx(
        Je,
        {
          checked: a,
          id: "hide-comments",
          onCheckedChange: (c) => o(c === !0)
        }
      ),
      /* @__PURE__ */ t.jsx(rt, { htmlFor: "hide-comments", children: "Hide all previous comments" })
    ] }),
    /* @__PURE__ */ t.jsxs(Ce, { children: [
      /* @__PURE__ */ t.jsx(T, { variant: "outline", onClick: () => i(!1), children: "Cancel" }),
      /* @__PURE__ */ t.jsx(T, { onClick: l, children: "Disable comments" })
    ] })
  ] }) });
}
function pt({
  comment: e
}) {
  const { mutate: s } = Ps(), { mutate: r } = Ls(), [n, a] = R(!1), { id: o, post: i, member: l } = e, c = i == null ? void 0 : i.url, d = l == null ? void 0 : l.id, u = l == null ? void 0 : l.can_comment, m = (h) => {
    d && (s({
      id: d,
      reason: `Disabled from comment ${o}`,
      hideComments: h
    }), a(!1));
  }, p = () => {
    d && r({ id: d });
  };
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs(Lt, { children: [
      /* @__PURE__ */ t.jsx(Tt, { asChild: !0, children: /* @__PURE__ */ t.jsx(
        T,
        {
          className: "relative z-10 text-gray-800 hover:bg-secondary [&_svg]:size-4",
          size: "sm",
          variant: "ghost",
          children: /* @__PURE__ */ t.jsx(It, {})
        }
      ) }),
      /* @__PURE__ */ t.jsxs(Mt, { align: "start", children: [
        c && /* @__PURE__ */ t.jsx(Y, { asChild: !0, children: /* @__PURE__ */ t.jsxs("a", { href: `${c}#ghost-comments-${o}`, rel: "noopener noreferrer", target: "_blank", children: [
          /* @__PURE__ */ t.jsx(Rt, { className: "size-4" }),
          "View on post"
        ] }) }),
        d && /* @__PURE__ */ t.jsx(Y, { asChild: !0, children: /* @__PURE__ */ t.jsxs("a", { href: `#/members/${d}`, children: [
          /* @__PURE__ */ t.jsx(he, { className: "size-4" }),
          "View member"
        ] }) }),
        d && (u !== !1 ? /* @__PURE__ */ t.jsxs(Y, { onClick: () => a(!0), children: [
          /* @__PURE__ */ t.jsx(ze, { className: "size-4" }),
          "Disable commenting"
        ] }) : /* @__PURE__ */ t.jsxs(Y, { onClick: p, children: [
          /* @__PURE__ */ t.jsx(Vt, { className: "size-4" }),
          "Enable commenting"
        ] }))
      ] })
    ] }),
    /* @__PURE__ */ t.jsx(
      cr,
      {
        memberName: l == null ? void 0 : l.name,
        open: n,
        onConfirm: m,
        onOpenChange: a
      }
    )
  ] });
}
function dr({ comment: e, open: s, onOpenChange: r }) {
  var c, d, u, m, p;
  const { data: n, isLoading: a } = or(e.id, { enabled: s }), o = (n == null ? void 0 : n.comment_likes) ?? [], i = ((c = e.count) == null ? void 0 : c.likes) ?? 0, l = i - o.length;
  return /* @__PURE__ */ t.jsx(be, { open: s, onOpenChange: r, children: /* @__PURE__ */ t.jsxs(ve, { "aria-describedby": void 0, children: [
    /* @__PURE__ */ t.jsx(je, { children: /* @__PURE__ */ t.jsxs(ye, { children: [
      i,
      " ",
      i === 1 ? "like" : "likes"
    ] }) }),
    /* @__PURE__ */ t.jsx("div", { className: "overflow-hidden rounded-md border p-3", children: /* @__PURE__ */ t.jsxs("div", { className: "flex min-w-0 items-start gap-3", children: [
      /* @__PURE__ */ t.jsx(
        A,
        {
          avatarImage: (d = e.member) == null ? void 0 : d.avatar_image,
          className: "shrink-0",
          memberId: (u = e.member) == null ? void 0 : u.id
        }
      ),
      /* @__PURE__ */ t.jsxs("div", { className: "flex min-w-0 flex-col overflow-hidden", children: [
        /* @__PURE__ */ t.jsxs("div", { className: "flex min-w-0 items-center gap-1 text-sm", children: [
          /* @__PURE__ */ t.jsx("span", { className: "shrink-0 font-semibold", children: ((m = e.member) == null ? void 0 : m.name) || "Unknown" }),
          /* @__PURE__ */ t.jsx(ge, { className: "shrink-0 text-muted-foreground/50", size: 16 }),
          /* @__PURE__ */ t.jsx("span", { className: "shrink-0 text-muted-foreground", children: e.created_at && K(e.created_at) }),
          /* @__PURE__ */ t.jsx("span", { className: "shrink-0 text-muted-foreground", children: "on" }),
          /* @__PURE__ */ t.jsx("span", { className: "min-w-0 truncate font-medium text-gray-800 dark:text-gray-400", children: ((p = e.post) == null ? void 0 : p.title) || "Unknown post" })
        ] }),
        /* @__PURE__ */ t.jsx(
          "div",
          {
            dangerouslySetInnerHTML: { __html: e.html || "" },
            className: "prose mt-2 line-clamp-2 text-sm [&_*]:text-sm [&_*]:leading-[1.5em] [&_p]:m-0"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ t.jsx("div", { className: "-mx-1 max-h-64 overflow-y-auto px-1", children: a ? /* @__PURE__ */ t.jsx("div", { className: "flex justify-center py-4", children: /* @__PURE__ */ t.jsx(Q, { size: "md" }) }) : /* @__PURE__ */ t.jsxs("div", { className: "flex flex-col gap-3 pb-1", children: [
      o.map((h) => {
        var f, x, v;
        return /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ t.jsxs("div", { className: "relative shrink-0", children: [
              /* @__PURE__ */ t.jsx(
                A,
                {
                  avatarImage: (f = h.member) == null ? void 0 : f.avatar_image,
                  memberId: (x = h.member) == null ? void 0 : x.id
                }
              ),
              /* @__PURE__ */ t.jsx("div", { className: "absolute -right-0.5 -bottom-0.5 flex size-4 items-center justify-center rounded-full bg-pink-500 text-white", children: /* @__PURE__ */ t.jsx(He, { className: "size-2.5", fill: "currentColor" }) })
            ] }),
            /* @__PURE__ */ t.jsx("span", { className: "font-medium", children: ((v = h.member) == null ? void 0 : v.name) || "Deleted member" })
          ] }),
          /* @__PURE__ */ t.jsx("span", { className: "shrink-0 text-sm text-muted-foreground", children: K(h.created_at) })
        ] }, h.id);
      }),
      l > 0 && /* @__PURE__ */ t.jsxs("div", { className: "pt-1 text-center text-sm text-muted-foreground", children: [
        "and ",
        l,
        " more"
      ] })
    ] }) }),
    /* @__PURE__ */ t.jsx(Ce, { children: /* @__PURE__ */ t.jsx(T, { onClick: () => r(!1), children: "OK" }) })
  ] }) });
}
function ur({ comment: e, open: s, onOpenChange: r }) {
  var l, c, d, u, m;
  const { data: n, isLoading: a } = nr(e.id, { enabled: s }), o = (n == null ? void 0 : n.comment_reports) ?? [], i = ((l = e.count) == null ? void 0 : l.reports) ?? o.length;
  return /* @__PURE__ */ t.jsx(be, { open: s, onOpenChange: r, children: /* @__PURE__ */ t.jsxs(ve, { "aria-describedby": void 0, children: [
    /* @__PURE__ */ t.jsx(je, { children: /* @__PURE__ */ t.jsxs(ye, { children: [
      i,
      " ",
      i === 1 ? "report" : "reports"
    ] }) }),
    /* @__PURE__ */ t.jsx("div", { className: "overflow-hidden rounded-md border p-3", children: /* @__PURE__ */ t.jsxs("div", { className: "flex min-w-0 items-start gap-3", children: [
      /* @__PURE__ */ t.jsx(
        A,
        {
          avatarImage: (c = e.member) == null ? void 0 : c.avatar_image,
          className: "shrink-0",
          memberId: (d = e.member) == null ? void 0 : d.id
        }
      ),
      /* @__PURE__ */ t.jsxs("div", { className: "flex min-w-0 flex-col overflow-hidden", children: [
        /* @__PURE__ */ t.jsxs("div", { className: "flex min-w-0 items-center gap-1 text-sm", children: [
          /* @__PURE__ */ t.jsx("span", { className: "shrink-0 font-semibold", children: ((u = e.member) == null ? void 0 : u.name) || "Unknown" }),
          /* @__PURE__ */ t.jsx(ge, { className: "shrink-0 text-muted-foreground/50", size: 16 }),
          /* @__PURE__ */ t.jsx("span", { className: "shrink-0 text-muted-foreground", children: e.created_at && K(e.created_at) }),
          /* @__PURE__ */ t.jsx("span", { className: "shrink-0 text-muted-foreground", children: "on" }),
          /* @__PURE__ */ t.jsx("span", { className: "min-w-0 truncate font-medium text-gray-800 dark:text-gray-400", children: ((m = e.post) == null ? void 0 : m.title) || "Unknown post" })
        ] }),
        /* @__PURE__ */ t.jsx(
          "div",
          {
            dangerouslySetInnerHTML: { __html: e.html || "" },
            className: "prose mt-2 line-clamp-2 text-sm [&_*]:text-sm [&_*]:leading-[1.5em] [&_p]:m-0"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ t.jsx("div", { className: "-mx-1 max-h-64 overflow-y-auto px-1", children: a ? /* @__PURE__ */ t.jsx("div", { className: "flex justify-center py-4", children: /* @__PURE__ */ t.jsx(Q, { size: "md" }) }) : /* @__PURE__ */ t.jsx("div", { className: "flex flex-col gap-3 pb-1", children: o.map((p) => {
      var h, f, x;
      return /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ t.jsxs("div", { className: "relative shrink-0", children: [
            /* @__PURE__ */ t.jsx(
              A,
              {
                avatarImage: (h = p.member) == null ? void 0 : h.avatar_image,
                memberId: (f = p.member) == null ? void 0 : f.id
              }
            ),
            /* @__PURE__ */ t.jsx("div", { className: "absolute -right-0.5 -bottom-0.5 flex size-4 items-center justify-center rounded-full bg-red text-white", children: /* @__PURE__ */ t.jsx(xe, { className: "size-2.5", fill: "currentColor" }) })
          ] }),
          /* @__PURE__ */ t.jsx("span", { className: "font-medium", children: ((x = p.member) == null ? void 0 : x.name) || "Deleted member" })
        ] }),
        /* @__PURE__ */ t.jsx("span", { className: "shrink-0 text-sm text-muted-foreground", children: K(p.created_at) })
      ] }, p.id);
    }) }) }),
    /* @__PURE__ */ t.jsx(Ce, { children: /* @__PURE__ */ t.jsx(T, { onClick: () => r(!1), children: "OK" }) })
  ] }) });
}
function re({ icon: e, count: s, label: r, to: n, onClick: a, className: o, testId: i }) {
  const l = M("flex items-center gap-1 text-xs text-gray-800", o), c = /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    e,
    /* @__PURE__ */ t.jsx("span", { children: yt(s) })
  ] }), d = n || a;
  return /* @__PURE__ */ t.jsx(oe, { children: /* @__PURE__ */ t.jsxs(ie, { children: [
    /* @__PURE__ */ t.jsx(le, { asChild: !0, children: n ? /* @__PURE__ */ t.jsx(
      me,
      {
        className: M(l, "cursor-pointer hover:opacity-70"),
        "data-testid": i,
        to: n,
        onClick: (u) => {
          u.stopPropagation();
        },
        children: c
      }
    ) : a ? /* @__PURE__ */ t.jsx(
      "button",
      {
        className: M(l, "cursor-pointer hover:opacity-70"),
        "data-testid": i,
        type: "button",
        onClick: (u) => {
          u.stopPropagation(), a();
        },
        children: c
      }
    ) : /* @__PURE__ */ t.jsx("div", { className: l, "data-testid": i, children: c }) }),
    /* @__PURE__ */ t.jsx(ce, { children: d ? `View ${r.toLowerCase()}` : r })
  ] }) });
}
function Se(e, s) {
  if (!s)
    return;
  const r = new URLSearchParams(e);
  return r.set("thread", `is:${s}`), `?${r.toString()}`;
}
function ft({
  comment: e,
  className: s
}) {
  var f, x, v, g, j;
  const [r] = Z(), [n, a] = R(!1), [o, i] = R(!1), l = Se(r, e.id), c = ((f = e.count) == null ? void 0 : f.direct_replies) ?? ((x = e.count) == null ? void 0 : x.replies) ?? ((v = e.replies) == null ? void 0 : v.length) ?? 0, d = ((g = e.count) == null ? void 0 : g.likes) ?? 0, u = ((j = e.count) == null ? void 0 : j.reports) ?? 0, m = c > 0, p = d > 0, h = u > 0;
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs("div", { className: M("flex items-center gap-6", s), children: [
      /* @__PURE__ */ t.jsx(
        re,
        {
          count: c,
          icon: /* @__PURE__ */ t.jsx(Ut, { size: 16, strokeWidth: 1.5 }),
          label: "Replies",
          testId: "replies-metric",
          to: m ? l : void 0
        }
      ),
      /* @__PURE__ */ t.jsx(
        re,
        {
          count: d,
          icon: /* @__PURE__ */ t.jsx(He, { size: 16, strokeWidth: 1.5 }),
          label: "Likes",
          onClick: p ? () => a(!0) : void 0
        }
      ),
      /* @__PURE__ */ t.jsx(
        re,
        {
          className: h ? "font-semibold text-red" : void 0,
          count: u,
          icon: /* @__PURE__ */ t.jsx(xe, { size: 16, strokeWidth: 1.5 }),
          label: "Reports",
          onClick: h ? () => i(!0) : void 0
        }
      )
    ] }),
    /* @__PURE__ */ t.jsx(
      dr,
      {
        comment: e,
        open: n,
        onOpenChange: a
      }
    ),
    /* @__PURE__ */ t.jsx(
      ur,
      {
        comment: e,
        open: o,
        onOpenChange: i
      }
    )
  ] });
}
function mr({ hasReplies: e }) {
  return e ? /* @__PURE__ */ t.jsx(
    "div",
    {
      className: "mb-2 h-full w-px grow rounded bg-gradient-to-b from-muted-foreground/20 from-70% to-transparent",
      "data-testid": "replies-line"
    }
  ) : null;
}
function ht({ comment: e, isReply: s = !1, isSelectedComment: r = !1, selectedCommentId: n }) {
  var d, u, m, p, h, f, x, v;
  const [a] = Z(), { mutate: o } = dt(), { mutate: i } = ut(), l = (((d = e.replies) == null ? void 0 : d.length) ?? 0) > 0 || (((u = e.count) == null ? void 0 : u.direct_replies) ?? ((m = e.count) == null ? void 0 : m.replies) ?? 0) > 0, c = !l || s ? "mb-7" : "mb-0";
  return /* @__PURE__ */ t.jsxs("div", { className: `flex w-full flex-row ${c}`, children: [
    /* @__PURE__ */ t.jsxs("div", { className: "mr-2 flex shrink-0 flex-col items-center justify-start md:mr-3", children: [
      /* @__PURE__ */ t.jsx(
        A,
        {
          avatarImage: (p = e.member) == null ? void 0 : p.avatar_image,
          className: "mb-3 shrink-0 md:mb-4",
          isHidden: e.status === "hidden",
          memberId: (h = e.member) == null ? void 0 : h.id
        }
      ),
      /* @__PURE__ */ t.jsx(mr, { hasReplies: l && !s })
    ] }),
    /* @__PURE__ */ t.jsx("div", { className: "grow", children: /* @__PURE__ */ t.jsxs(
      "div",
      {
        className: "w-full",
        "data-testid": `comment-thread-row-${e.id}`,
        children: [
          /* @__PURE__ */ t.jsxs("div", { className: "flex min-w-0 flex-col", children: [
            /* @__PURE__ */ t.jsx(
              mt,
              {
                canComment: (f = e.member) == null ? void 0 : f.can_comment,
                createdAt: e.created_at,
                isHidden: e.status === "hidden",
                memberId: (x = e.member) == null ? void 0 : x.id,
                memberName: (v = e.member) == null ? void 0 : v.name
              }
            ),
            e.in_reply_to_snippet && r && /* @__PURE__ */ t.jsxs("div", { className: `mb-1 line-clamp-1 text-sm ${e.status === "hidden" && "opacity-50"}`, children: [
              /* @__PURE__ */ t.jsx("span", { className: "text-muted-foreground", children: "Replied to:" }),
              " ",
              /* @__PURE__ */ t.jsx(
                me,
                {
                  className: "text-sm font-normal text-muted-foreground hover:text-foreground",
                  "data-testid": "replied-to-link",
                  to: Se(a, e.in_reply_to_id || e.parent_id) || "",
                  onClick: (g) => {
                    g.stopPropagation();
                  },
                  children: e.in_reply_to_snippet
                }
              )
            ] }),
            /* @__PURE__ */ t.jsx(lt, { item: e }),
            /* @__PURE__ */ t.jsxs("div", { className: "mt-4 flex flex-row flex-wrap items-center gap-3", children: [
              e.status === "published" && /* @__PURE__ */ t.jsxs(T, { className: "text-gray-800", size: "sm", variant: "outline", onClick: () => o({ id: e.id }), children: [
                /* @__PURE__ */ t.jsx(Be, {}),
                /* @__PURE__ */ t.jsx("span", { className: "max-md:hidden", children: "Hide" })
              ] }),
              e.status === "hidden" && /* @__PURE__ */ t.jsxs(T, { className: "text-gray-800", size: "sm", variant: "outline", onClick: () => i({ id: e.id }), children: [
                /* @__PURE__ */ t.jsx(Ae, {}),
                /* @__PURE__ */ t.jsx("span", { className: "max-md:hidden", children: "Show" })
              ] }),
              /* @__PURE__ */ t.jsx(
                ft,
                {
                  comment: e
                }
              ),
              /* @__PURE__ */ t.jsx(
                pt,
                {
                  comment: e
                }
              )
            ] })
          ] }),
          l && e.replies && /* @__PURE__ */ t.jsx("div", { className: "mt-7 mb-4 -ml-2 pl-2 md:mt-8 md:mb-0 md:-ml-3 md:pl-3", children: e.replies.map((g) => /* @__PURE__ */ t.jsx(
            ht,
            {
              comment: g,
              isReply: !0,
              selectedCommentId: n
            },
            g.id
          )) })
        ]
      }
    ) })
  ] });
}
const pr = ({
  selectedComment: e,
  replies: s,
  selectedCommentId: r,
  fetchNextPage: n,
  hasNextPage: a,
  isFetchingNextPage: o
}) => {
  const i = { ...e, replies: s };
  return /* @__PURE__ */ t.jsxs("div", { className: "flex flex-col", "data-testid": "comment-thread-list", children: [
    /* @__PURE__ */ t.jsx(
      ht,
      {
        comment: i,
        isSelectedComment: !0,
        selectedCommentId: r
      }
    ),
    a && /* @__PURE__ */ t.jsx("div", { className: "flex justify-center pb-4", children: /* @__PURE__ */ t.jsx(
      T,
      {
        disabled: o,
        variant: "outline",
        onClick: () => n(),
        children: o ? /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
          /* @__PURE__ */ t.jsx(Q, { size: "sm" }),
          "Loading..."
        ] }) : "Load more replies"
      }
    ) })
  ] });
}, fr = ({
  commentId: e,
  open: s,
  onOpenChange: r
}) => {
  var v;
  const {
    data: n,
    isLoading: a,
    isError: o,
    fetchNextPage: i,
    hasNextPage: l,
    isFetchingNextPage: c
  } = ir(e ?? "", {
    enabled: s && !!e
  }), { data: d, isLoading: u, isError: m } = sr(e ?? "", {
    enabled: s && !!e
  }), p = a || u, h = m || o && !d, f = (v = d == null ? void 0 : d.comments) == null ? void 0 : v[0], x = (n == null ? void 0 : n.comments) || [];
  return /* @__PURE__ */ t.jsx(ns, { open: s, onOpenChange: r, children: /* @__PURE__ */ t.jsxs(as, { className: "overflow-y-auto px-6 pt-0 sm:max-w-[600px]", children: [
    /* @__PURE__ */ t.jsx(os, { className: "sticky top-0 z-40 -mx-6 bg-background/60 p-6 backdrop-blur", children: /* @__PURE__ */ t.jsx(is, { className: "text-md", children: "Thread" }) }),
    (f == null ? void 0 : f.post) && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
      /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ t.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ t.jsx("h3", { className: "line-clamp-1 text-xl font-semibold text-foreground", children: f.post.title }),
          f.post.excerpt && /* @__PURE__ */ t.jsx("p", { className: "mt-1 line-clamp-2 text-sm text-muted-foreground", children: f.post.excerpt })
        ] }),
        f.post.feature_image && /* @__PURE__ */ t.jsx(
          "img",
          {
            alt: f.post.title || "Post feature image",
            className: "hidden aspect-video h-18 shrink-0 rounded object-cover lg:block",
            src: f.post.feature_image
          }
        )
      ] }),
      /* @__PURE__ */ t.jsx(Et, { className: "-mx-6 my-6 w-auto" })
    ] }),
    /* @__PURE__ */ t.jsx("div", { children: p ? /* @__PURE__ */ t.jsx("div", { className: "flex h-full items-center justify-center py-8", children: /* @__PURE__ */ t.jsx(Q, { size: "lg" }) }) : h || !f ? /* @__PURE__ */ t.jsx("div", { className: "flex h-full items-center justify-center py-8", children: /* @__PURE__ */ t.jsx(
      qe,
      {
        actions: /* @__PURE__ */ t.jsx(T, { variant: "outline", onClick: () => r(!1), children: "Back to comments" }),
        description: "This thread may have been deleted or doesn't exist.",
        title: "Thread not found",
        children: /* @__PURE__ */ t.jsx(Ve, {})
      }
    ) }) : /* @__PURE__ */ t.jsx(
      pr,
      {
        fetchNextPage: i,
        hasNextPage: l,
        isFetchingNextPage: c,
        replies: x,
        selectedComment: f,
        selectedCommentId: e ?? ""
      }
    ) })
  ] }) });
}, ne = /* @__PURE__ */ new Map(), de = "ghostVirtualListScrollPosition", Ee = 150, hr = 500;
function ae() {
  if (!(typeof window > "u"))
    return window.history.state;
}
function ue(e) {
  const s = e == null ? void 0 : e.key;
  if (typeof s == "string" || typeof s == "number")
    return String(s);
  const r = e == null ? void 0 : e.idx;
  if (typeof r == "number")
    return String(r);
}
function Oe(e, s) {
  const r = ue(e);
  if (r)
    return `${r}::${s}`;
}
function xr(e, s) {
  const r = e == null ? void 0 : e[de];
  if (!r || typeof r != "object")
    return;
  const n = r[s];
  if (typeof n == "number")
    return n;
}
function gr(e, s, r) {
  if (typeof window > "u")
    return;
  const n = e == null ? void 0 : e[de], a = {
    ...e ?? {},
    [de]: {
      ...n && typeof n == "object" ? n : {},
      [s]: r
    }
  };
  window.history.replaceState(a, "");
}
function br({ parentRef: e, enabled: s = !0, isLoading: r = !1 }) {
  const n = Ct(), [a, o] = R(null), i = y(null), l = y(0), c = y(0), d = y(0), u = y(null), m = y(/* @__PURE__ */ new Set()), p = n.pathname + n.search;
  $(() => {
    if (!s || !e.current)
      return;
    const h = Yt(e.current);
    o(h);
  }, [s, e]), $(() => {
    if (!s || !a)
      return;
    const h = ae(), f = ue(h), x = Oe(h, p), v = () => {
      u.current !== null && (window.clearTimeout(u.current), u.current = null);
    }, g = (_) => {
      x && ne.set(x, _);
      const w = ae();
      ue(w) === f && gr(w, p, _), c.current = Date.now(), d.current = _;
    }, j = ({ persistToHistory: _ = !0 } = {}) => {
      if (v(), !_) {
        const w = l.current;
        x && ne.set(x, w), c.current = Date.now(), d.current = w;
        return;
      }
      g(l.current);
    }, L = () => {
      const _ = Date.now();
      if (Math.abs(l.current - d.current) >= hr || _ - c.current >= Ee) {
        v(), g(l.current);
        return;
      }
      u.current === null && (u.current = window.setTimeout(() => {
        u.current = null, g(l.current);
      }, Ee));
    }, k = () => {
      l.current = a.scrollTop, L();
    }, N = () => {
      j();
    };
    return l.current = a.scrollTop, a.addEventListener("scroll", k), window.addEventListener("pagehide", N), () => {
      j({ persistToHistory: !1 }), a.removeEventListener("scroll", k), window.removeEventListener("pagehide", N);
    };
  }, [s, p, a]), $(() => {
    const h = ae(), f = Oe(h, p), x = (f ? ne.get(f) : void 0) ?? xr(h, p);
    if (!(!s || !a || r)) {
      if (x !== void 0 && i.current !== p) {
        i.current = p;
        let v = 0;
        const g = 20, j = () => {
          for (const N of m.current)
            window.clearTimeout(N);
          m.current.clear();
        }, L = (N, _) => {
          const w = window.setTimeout(() => {
            m.current.delete(w), N();
          }, _);
          m.current.add(w);
        }, k = () => {
          if (v += 1, !a)
            return;
          const N = a.scrollTop, _ = a.scrollHeight, w = a.clientHeight, I = _ - w;
          if (x > I && v < g) {
            L(k, 100);
            return;
          }
          if (Math.abs(x - N) > 5) {
            const S = Math.min(x, I);
            a.scrollTop = S;
          }
        };
        return L(k, 150), () => j();
      }
      i.current = p;
    }
  }, [s, p, a, r]);
}
const De = ({ height: e }) => /* @__PURE__ */ t.jsx("div", { "aria-hidden": "true", className: "flex", children: /* @__PURE__ */ t.jsx("div", { className: "flex", style: { height: e } }) }), vr = E(function(s, r) {
  return /* @__PURE__ */ t.jsx(
    "div",
    {
      ref: r,
      ...s,
      "aria-hidden": "true",
      className: "relative flex flex-col",
      children: /* @__PURE__ */ t.jsx("div", { className: "relative z-10 h-24 animate-pulse", children: /* @__PURE__ */ t.jsx("div", { className: "h-full rounded-md bg-muted", "data-testid": "loading-placeholder" }) })
    }
  );
});
function jr({
  items: e,
  totalItems: s,
  hasNextPage: r,
  isFetchingNextPage: n,
  fetchNextPage: a,
  resetKey: o,
  onAddFilter: i,
  isLoading: l
}) {
  const c = y(null), { visibleItemCount: d, canLoadMore: u, loadMore: m } = Xt(s, { resetKey: o }), [p, h] = Z(), [f, x] = R(!1), [v, g] = R(null), { mutate: j } = dt(), { mutate: L } = ut(), k = (I) => {
    if (x(I), !I) {
      const S = new URLSearchParams(p);
      S.delete("thread"), h(S, { replace: !0 });
    }
  };
  $(() => {
    const I = p.get("thread");
    if (I) {
      const S = I.match(/^is:(.+)$/);
      if (S && S[1]) {
        const b = S[1];
        g(b), x(!0);
      } else
        x(!1), g(null);
    } else
      x(!1), g(null);
  }, [p]), br({ parentRef: c, isLoading: l });
  const { visibleItems: N, spaceBefore: _, spaceAfter: w } = Gt({
    items: e,
    totalItems: d,
    hasNextPage: r,
    isFetchingNextPage: n,
    fetchNextPage: a,
    parentRef: c
  });
  return /* @__PURE__ */ t.jsxs("div", { ref: c, className: "overflow-hidden", children: [
    /* @__PURE__ */ t.jsx(
      "div",
      {
        className: "flex flex-col",
        "data-testid": "comments-list",
        children: /* @__PURE__ */ t.jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ t.jsx(De, { height: _ }),
          N.map(({ key: I, virtualItem: S, item: b, props: V }) => {
            var B, W, z, C, P, D, H, Pe, Le;
            return S.index > e.length - 1 ? /* @__PURE__ */ t.jsx(vr, { ...V }, I) : /* @__PURE__ */ t.jsxs(
              "div",
              {
                ...V,
                className: "grid w-full grid-cols-1 items-start justify-between gap-4 border-b p-3 hover:bg-muted/50 md:p-5 lg:grid-cols-[minmax(0,1fr)_144px]",
                "data-testid": "comment-list-row",
                onClick: () => {
                  f && k(!1);
                },
                children: [
                  /* @__PURE__ */ t.jsxs("div", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ t.jsx(
                      A,
                      {
                        avatarImage: (B = b.member) == null ? void 0 : B.avatar_image,
                        isHidden: b.status === "hidden",
                        memberId: (W = b.member) == null ? void 0 : W.id
                      }
                    ),
                    /* @__PURE__ */ t.jsxs("div", { className: "flex min-w-0 flex-col", children: [
                      /* @__PURE__ */ t.jsx(
                        mt,
                        {
                          canComment: (z = b.member) == null ? void 0 : z.can_comment,
                          createdAt: b.created_at,
                          isHidden: b.status === "hidden",
                          memberId: (C = b.member) == null ? void 0 : C.id,
                          memberName: (P = b.member) == null ? void 0 : P.name,
                          postTitle: (D = b.post) == null ? void 0 : D.title,
                          onAuthorClick: (H = b.member) != null && H.id ? () => i("author", b.member.id) : void 0,
                          onPostClick: (Pe = b.post) != null && Pe.id ? () => i("post", b.post.id) : void 0
                        }
                      ),
                      b.in_reply_to_snippet && /* @__PURE__ */ t.jsxs("div", { className: `mb-1 line-clamp-1 max-w-3xl text-sm ${b.status === "hidden" && "opacity-50"}`, children: [
                        /* @__PURE__ */ t.jsx("span", { className: "text-muted-foreground", children: "Replied to:" }),
                        " ",
                        /* @__PURE__ */ t.jsx(
                          me,
                          {
                            className: "text-sm font-normal text-muted-foreground hover:text-foreground",
                            "data-testid": "replied-to-link",
                            to: Se(p, b.in_reply_to_id || b.parent_id) || "",
                            onClick: (gt) => {
                              gt.stopPropagation();
                            },
                            children: b.in_reply_to_snippet
                          }
                        )
                      ] }),
                      /* @__PURE__ */ t.jsx(lt, { item: b }),
                      /* @__PURE__ */ t.jsxs("div", { className: "mt-4 flex flex-row flex-nowrap items-center gap-3", children: [
                        b.status === "published" && /* @__PURE__ */ t.jsxs(T, { className: "text-foreground", size: "sm", variant: "outline", onClick: () => j({ id: b.id }), children: [
                          /* @__PURE__ */ t.jsx(Be, {}),
                          "Hide"
                        ] }),
                        b.status === "hidden" && /* @__PURE__ */ t.jsxs(T, { className: "text-foreground", size: "sm", variant: "outline", onClick: () => L({ id: b.id }), children: [
                          /* @__PURE__ */ t.jsx(Ae, {}),
                          "Show"
                        ] }),
                        /* @__PURE__ */ t.jsx(
                          ft,
                          {
                            className: "ml-2",
                            comment: b
                          }
                        ),
                        /* @__PURE__ */ t.jsx(
                          pt,
                          {
                            comment: b
                          }
                        )
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ t.jsx("div", { children: (Le = b.post) != null && Le.feature_image ? /* @__PURE__ */ t.jsx(
                    "img",
                    {
                      alt: b.post.title || "Post feature image",
                      className: `hidden aspect-video w-36 rounded object-cover lg:block ${b.status === "hidden" && "opacity-50"}`,
                      src: b.post.feature_image
                    }
                  ) : null })
                ]
              },
              I
            );
          }),
          /* @__PURE__ */ t.jsx(De, { height: w })
        ] })
      }
    ),
    u && /* @__PURE__ */ t.jsx(Zt, { isLoading: n, onClick: m }),
    /* @__PURE__ */ t.jsx(
      fr,
      {
        commentId: v,
        open: f,
        onOpenChange: k
      }
    )
  ] });
}
const xt = ["id", "status", "created_at", "body", "post", "author", "reported"];
function yr(e) {
  const s = [];
  for (const r of e)
    if (r.values[0])
      switch (r.field) {
        case "id":
          s.push(`id:'${r.values[0]}'`);
          break;
        case "status":
          s.push(`status:${r.values[0]}`);
          break;
        case "created_at":
          if (r.operator === "before" && r.values[0])
            s.push(`created_at:<'${r.values[0]}'`);
          else if (r.operator === "after" && r.values[0])
            s.push(`created_at:>'${r.values[0]}'`);
          else if (r.operator === "is" && r.values[0]) {
            const o = String(r.values[0]), i = (/* @__PURE__ */ new Date(o + "T00:00:00")).toISOString(), l = (/* @__PURE__ */ new Date(o + "T23:59:59.999")).toISOString();
            s.push(`created_at:>='${i}'+created_at:<='${l}'`);
          }
          break;
        case "body":
          const a = r.values[0].replace(/'/g, "\\'");
          r.operator === "contains" ? s.push(`html:~'${a}'`) : r.operator === "not_contains" && s.push(`html:-~'${a}'`);
          break;
        case "post":
          r.operator === "is_not" ? s.push(`post_id:-${r.values[0]}`) : s.push(`post_id:${r.values[0]}`);
          break;
        case "author":
          r.operator === "is_not" ? s.push(`member_id:-${r.values[0]}`) : s.push(`member_id:${r.values[0]}`);
          break;
        case "reported":
          r.values[0] === "true" ? s.push("count.reports:>0") : r.values[0] === "false" && s.push("count.reports:0");
          break;
      }
  return s.length ? s.join("+") : void 0;
}
function Cr(e) {
  if (!e)
    return null;
  const s = e.indexOf(":");
  return s <= 0 ? null : {
    operator: e.substring(0, s),
    value: e.substring(s + 1)
  };
}
function Nr(e) {
  const s = [];
  for (const [r, n] of e.entries()) {
    if (!xt.includes(r) || !n)
      continue;
    const a = Cr(n);
    a && s.push({
      id: r,
      field: r,
      operator: a.operator,
      values: [a.value]
    });
  }
  return s;
}
function wr(e) {
  const s = new URLSearchParams();
  for (const r of e)
    if (xt.includes(r.field) && r.values[0] !== void 0) {
      const n = `${r.operator}:${String(r.values[0])}`;
      s.set(r.field, n);
    }
  return s;
}
function kr() {
  const [e, s] = Z(), r = O(() => Nr(e), [e]), n = q((l, c = {}) => {
    const d = typeof l == "function" ? l(r) : l, u = wr(d), m = c.replace ?? !0;
    s(u, { replace: m });
  }, [r, s]), a = q(({ replace: l = !0 } = {}) => {
    s(new URLSearchParams(), { replace: l });
  }, [s]), o = O(() => yr(r), [r]), i = O(() => r.length === 1 && r[0].field === "id", [r]);
  return { filters: r, nql: o, setFilters: n, clearFilters: a, isSingleIdFilter: i };
}
const zr = () => {
  var f, x;
  const { filters: e, nql: s, setFilters: r, clearFilters: n, isSingleIdFilter: a } = kr(), o = q((v, g, j = "is") => {
    r((L) => [...L.filter((N) => N.field !== v), kt(v, j, [g])], { replace: !1 });
  }, [r]), {
    data: i,
    isError: l,
    isFetching: c,
    isFetchingNextPage: d,
    isRefetching: u,
    fetchNextPage: m,
    hasNextPage: p
  } = ct({
    searchParams: s ? { filter: s } : {},
    keepPreviousData: !0
  }), h = c && !d && !u;
  return /* @__PURE__ */ t.jsxs(Js, { children: [
    /* @__PURE__ */ t.jsx(Zs, { children: !a && /* @__PURE__ */ t.jsx(
      Gs,
      {
        filters: e,
        onFiltersChange: r
      }
    ) }),
    /* @__PURE__ */ t.jsx(_s, { children: h ? /* @__PURE__ */ t.jsx("div", { className: "flex h-full items-center justify-center", children: /* @__PURE__ */ t.jsx(Q, { size: "lg" }) }) : l ? /* @__PURE__ */ t.jsxs("div", { className: "mb-16 flex h-full flex-col items-center justify-center", children: [
      /* @__PURE__ */ t.jsx("h2", { className: "mb-2 text-xl font-medium", children: "Error loading comments" }),
      /* @__PURE__ */ t.jsx("p", { className: "mb-4 text-muted-foreground", children: "Please reload the page to try again" }),
      /* @__PURE__ */ t.jsx(T, { onClick: () => window.location.reload(), children: "Reload page" })
    ] }) : i != null && i.comments.length ? /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
      /* @__PURE__ */ t.jsx(
        jr,
        {
          fetchNextPage: m,
          hasNextPage: p,
          isFetchingNextPage: d,
          isLoading: c && !d,
          items: (i == null ? void 0 : i.comments) ?? [],
          resetKey: s ?? "",
          totalItems: ((x = (f = i == null ? void 0 : i.meta) == null ? void 0 : f.pagination) == null ? void 0 : x.total) ?? 0,
          onAddFilter: o
        }
      ),
      a && /* @__PURE__ */ t.jsx("div", { className: "flex justify-center py-8", children: /* @__PURE__ */ t.jsx(T, { variant: "outline", onClick: () => n({ replace: !1 }), children: "Show all comments" }) })
    ] }) : /* @__PURE__ */ t.jsx("div", { className: "flex h-full items-center justify-center", children: /* @__PURE__ */ t.jsx(
      qe,
      {
        title: "No comments yet",
        children: /* @__PURE__ */ t.jsx(Ve, {})
      }
    ) }) })
  ] });
};
export {
  zr as default
};
//# sourceMappingURL=comments-DVW_OiiE.mjs.map
