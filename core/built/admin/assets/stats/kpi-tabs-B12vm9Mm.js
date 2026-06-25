import { B as c, J as a, a3 as G, W, T as f, m, o as q, u as y } from "./index-GkZC6bm6.js";
import { bD as H, bC as J, am as x, bF as O, ap as Q, a1 as U, a_ as T, b3 as C, b1 as X, al as Y, Q as Z, ac as tt, h as et, aP as at, a7 as nt } from "./stats-BfDVnooj.js";
var h = "Tabs", [st] = X(h, [
  C
]), w = C(), [ot, N] = st(h), I = c(
  (t, e) => {
    const {
      __scopeTabs: s,
      value: n,
      onValueChange: o,
      defaultValue: i,
      orientation: r = "horizontal",
      dir: l,
      activationMode: b = "automatic",
      ...g
    } = t, d = H(l), [u, p] = J({
      prop: n,
      onChange: o,
      defaultProp: i ?? "",
      caller: h
    });
    return /* @__PURE__ */ a.jsx(
      ot,
      {
        scope: s,
        baseId: O(),
        value: u,
        onValueChange: p,
        orientation: r,
        dir: d,
        activationMode: b,
        children: /* @__PURE__ */ a.jsx(
          x.div,
          {
            dir: d,
            "data-orientation": r,
            ...g,
            ref: e
          }
        )
      }
    );
  }
);
I.displayName = h;
var _ = "TabsList", V = c(
  (t, e) => {
    const { __scopeTabs: s, loop: n = !0, ...o } = t, i = N(_, s), r = w(s);
    return /* @__PURE__ */ a.jsx(
      Q,
      {
        asChild: !0,
        ...r,
        orientation: i.orientation,
        dir: i.dir,
        loop: n,
        children: /* @__PURE__ */ a.jsx(
          x.div,
          {
            role: "tablist",
            "aria-orientation": i.orientation,
            ...o,
            ref: e
          }
        )
      }
    );
  }
);
V.displayName = _;
var k = "TabsTrigger", K = c(
  (t, e) => {
    const { __scopeTabs: s, value: n, disabled: o = !1, ...i } = t, r = N(k, s), l = w(s), b = M(r.baseId, n), g = P(r.baseId, n), d = n === r.value;
    return /* @__PURE__ */ a.jsx(
      U,
      {
        asChild: !0,
        ...l,
        focusable: !o,
        active: d,
        children: /* @__PURE__ */ a.jsx(
          x.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": d,
            "aria-controls": g,
            "data-state": d ? "active" : "inactive",
            "data-disabled": o ? "" : void 0,
            disabled: o,
            id: b,
            ...i,
            ref: e,
            onMouseDown: T(t.onMouseDown, (u) => {
              !o && u.button === 0 && u.ctrlKey === !1 ? r.onValueChange(n) : u.preventDefault();
            }),
            onKeyDown: T(t.onKeyDown, (u) => {
              [" ", "Enter"].includes(u.key) && r.onValueChange(n);
            }),
            onFocus: T(t.onFocus, () => {
              const u = r.activationMode !== "manual";
              !d && !o && u && r.onValueChange(n);
            })
          }
        )
      }
    );
  }
);
K.displayName = k;
var A = "TabsContent", D = c(
  (t, e) => {
    const { __scopeTabs: s, value: n, forceMount: o, children: i, ...r } = t, l = N(A, s), b = M(l.baseId, n), g = P(l.baseId, n), d = n === l.value, u = G(d);
    return W(() => {
      const p = requestAnimationFrame(() => u.current = !1);
      return () => cancelAnimationFrame(p);
    }, []), /* @__PURE__ */ a.jsx(Y, { present: o || d, children: ({ present: p }) => /* @__PURE__ */ a.jsx(
      x.div,
      {
        "data-state": d ? "active" : "inactive",
        "data-orientation": l.orientation,
        role: "tabpanel",
        "aria-labelledby": b,
        hidden: !p,
        id: g,
        tabIndex: 0,
        ...r,
        ref: e,
        style: {
          ...t.style,
          animationDuration: u.current ? "0s" : void 0
        },
        children: p && i
      }
    ) });
  }
);
D.displayName = A;
function M(t, e) {
  return `${t}-trigger-${e}`;
}
function P(t, e) {
  return `${t}-content-${e}`;
}
var E = I, F = V, j = K, R = D;
const v = q("segmented"), S = c(({ variant: t = "segmented", ...e }, s) => /* @__PURE__ */ a.jsx(v.Provider, { value: t, children: /* @__PURE__ */ a.jsx(E, { ref: s, ...e }) }));
S.displayName = E.displayName;
const rt = y(
  "inline-flex items-center text-muted-foreground",
  {
    variants: {
      variant: {
        segmented: "h-(--control-height) rounded-lg bg-muted px-[3px]",
        "segmented-sm": "h-8 rounded-lg bg-muted px-[3px]",
        button: "gap-2",
        "button-sm": "gap-1",
        underline: "w-full gap-5 border-b border-border-default",
        navbar: "h-[52px] items-end gap-6",
        pill: "-ml-0.5 h-[30px] gap-px",
        // The `kpis` variant is consumed only by `features/kpi/kpi-tabs.tsx`.
        // Kept here so the cva variant set is in one place; not for direct use by app code.
        kpis: "border-b ring-0"
      }
    },
    defaultVariants: {
      variant: "segmented"
    }
  }
), L = c(({ className: t, ...e }, s) => {
  const n = f(v);
  return /* @__PURE__ */ a.jsx(
    F,
    {
      ref: s,
      className: m(rt({ variant: n, className: t })),
      ...e
    }
  );
});
L.displayName = F.displayName;
const $ = y(
  "inline-flex items-center justify-center px-3 py-1 whitespace-nowrap ring-offset-background transition-all focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        segmented: "h-7 rounded-md text-control font-medium data-[state=active]:shadow-md",
        "segmented-sm": "h-[26px] rounded-md text-sm font-medium data-[state=active]:shadow-md",
        button: "h-(--control-height) gap-1.5 rounded-md py-2 text-control font-normal hover:bg-muted data-[state=active]:bg-muted-foreground/10 data-[state=active]:font-medium",
        "button-sm": "h-6 gap-1.5 rounded-md p-2 text-sm font-normal text-text-secondary hover:bg-muted data-[state=active]:bg-muted-foreground/10 data-[state=active]:font-medium data-[state=active]:text-foreground",
        underline: 'relative h-9 px-0 text-control font-semibold text-text-secondary after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-foreground after:opacity-0 after:content-[""] hover:after:opacity-10 data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:after:opacity-100!',
        navbar: 'relative h-[52px] px-px text-control font-semibold text-muted-foreground after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-foreground after:opacity-0 after:content-[""] hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:after:opacity-100!',
        pill: "relative h-[30px] rounded-md px-3 text-control font-medium text-text-secondary hover:text-foreground data-[state=active]:bg-muted-foreground/10 data-[state=active]:font-semibold data-[state=active]:text-foreground",
        kpis: 'relative h-full! items-start! rounded-none border-border bg-transparent px-6 py-5 text-foreground ring-0 transition-all after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-foreground after:opacity-0 after:content-[""] first:rounded-tl-md last:rounded-tr-md hover:bg-accent/50 data-[state=active]:bg-transparent data-[state=active]:after:opacity-100 [&:not(:last-child)]:border-r [&[data-state=active]_[data-type="value"]]:text-foreground'
      }
    },
    defaultVariants: {
      variant: "segmented"
    }
  }
), B = c(({ className: t, ...e }, s) => {
  const n = f(v);
  return /* @__PURE__ */ a.jsx(
    j,
    {
      ref: s,
      className: m($({ variant: n, className: t })),
      ...e
    }
  );
});
B.displayName = j.displayName;
const it = y(
  "ring-offset-background focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:outline-hidden",
  {
    variants: {
      variant: {
        segmented: "",
        "segmented-sm": "",
        button: "",
        "button-sm": "",
        underline: "",
        navbar: "",
        pill: "",
        kpis: "ring-0"
      }
    },
    defaultVariants: {
      variant: "segmented"
    }
  }
), z = c(({ className: t, ...e }, s) => {
  const n = f(v);
  return /* @__PURE__ */ a.jsx(
    R,
    {
      ref: s,
      className: m(it({ variant: n, className: t })),
      ...e
    }
  );
});
z.displayName = R.displayName;
const dt = c(({
  children: t,
  className: e,
  ...s
}, n) => {
  const o = f(v);
  return /* @__PURE__ */ a.jsxs("div", { className: "relative rounded-md hover:bg-muted", children: [
    /* @__PURE__ */ a.jsx(
      j,
      {
        ref: n,
        className: m($({ variant: o, className: e })),
        ...s,
        children: /* @__PURE__ */ a.jsx("div", { className: "flex items-center gap-2", children: t })
      }
    ),
    /* @__PURE__ */ a.jsx(
      Z,
      {
        className: "absolute inset-0 size-full cursor-pointer",
        onClick: (i) => {
          i.preventDefault();
        }
      }
    )
  ] });
});
dt.displayName = "TabsDropdownTrigger";
const ct = c(({ ...t }, e) => /* @__PURE__ */ a.jsx(S, { ref: e, variant: "kpis", ...t }));
ct.displayName = "KpiTabs";
const lt = c((t, e) => /* @__PURE__ */ a.jsx(L, { ref: e, ...t }));
lt.displayName = "KpiTabsList";
const ut = c((t, e) => /* @__PURE__ */ a.jsx(z, { ref: e, ...t }));
ut.displayName = "KpiTabsContent";
const mt = ({ children: t, ...e }) => /* @__PURE__ */ a.jsx(B, { className: "h-auto", ...e, children: t }), vt = ({
  color: t,
  icon: e,
  label: s,
  value: n,
  diffDirection: o,
  diffValue: i,
  className: r,
  "data-testid": l
}) => {
  const b = e ? nt[e] : null, g = /* @__PURE__ */ a.jsxs("span", { className: "flex items-center gap-1.5 transition-all group-hover:text-foreground", "data-type": "value", children: [
    t && /* @__PURE__ */ a.jsx("div", { className: "ml-1 size-2 rounded-full opacity-50", style: { backgroundColor: t } }),
    b && /* @__PURE__ */ a.jsx(b, { size: 16, strokeWidth: 1.5 }),
    s
  ] }), d = o && o !== "hidden" ? /* @__PURE__ */ a.jsx(
    at,
    {
      className: "mt-0.5",
      "data-testid": l ? `${l}-diff` : void 0,
      direction: o,
      value: i ?? ""
    }
  ) : null;
  return /* @__PURE__ */ a.jsx(
    tt,
    {
      className: m("group", r),
      label: g,
      size: "lg",
      trailing: d,
      value: n,
      valueTestId: l
    }
  );
}, bt = c(
  ({ variant: t = "dropdown", className: e, ...s }, n) => /* @__PURE__ */ a.jsx(
    et,
    {
      ref: n,
      className: m(
        "h-auto w-full rounded-none border-x-0 border-t-0 focus-visible:ring-0 bg-transparent py-5",
        e
      ),
      variant: t,
      ...s
    }
  )
);
bt.displayName = "KpiDropdownButton";
export {
  bt as K,
  S as T,
  mt as a,
  vt as b,
  L as c,
  B as d
};
//# sourceMappingURL=kpi-tabs-B12vm9Mm.js.map
