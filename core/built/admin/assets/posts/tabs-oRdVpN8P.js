import { x as l, R as r, ak as G, a9 as L, a7 as m, i as p, k as z, n as y } from "./index-Dqn5WIFh.js";
import { n as K, b as x, p as B, d as T, g as q, a as H } from "./check-fsC5BvGC.js";
import { F as O, r as J, I as Q, E as j, n as U } from "./skeleton-Bihnkn8q.js";
var h = "Tabs", [W] = q(h, [
  j
]), I = j(), [X, N] = W(h), _ = l(
  (t, a) => {
    const {
      __scopeTabs: n,
      value: e,
      onValueChange: s,
      defaultValue: d,
      orientation: o = "horizontal",
      dir: u,
      activationMode: f = "automatic",
      ...v
    } = t, c = O(u), [i, g] = K({
      prop: e,
      onChange: s,
      defaultProp: d ?? "",
      caller: h
    });
    return /* @__PURE__ */ r.jsx(
      X,
      {
        scope: n,
        baseId: B(),
        value: i,
        onValueChange: g,
        orientation: o,
        dir: c,
        activationMode: f,
        children: /* @__PURE__ */ r.jsx(
          x.div,
          {
            dir: c,
            "data-orientation": o,
            ...v,
            ref: a
          }
        )
      }
    );
  }
);
_.displayName = h;
var V = "TabsList", k = l(
  (t, a) => {
    const { __scopeTabs: n, loop: e = !0, ...s } = t, d = N(V, n), o = I(n);
    return /* @__PURE__ */ r.jsx(
      J,
      {
        asChild: !0,
        ...o,
        orientation: d.orientation,
        dir: d.dir,
        loop: e,
        children: /* @__PURE__ */ r.jsx(
          x.div,
          {
            role: "tablist",
            "aria-orientation": d.orientation,
            ...s,
            ref: a
          }
        )
      }
    );
  }
);
k.displayName = V;
var w = "TabsTrigger", A = l(
  (t, a) => {
    const { __scopeTabs: n, value: e, disabled: s = !1, ...d } = t, o = N(w, n), u = I(n), f = M(o.baseId, e), v = P(o.baseId, e), c = e === o.value;
    return /* @__PURE__ */ r.jsx(
      Q,
      {
        asChild: !0,
        ...u,
        focusable: !s,
        active: c,
        children: /* @__PURE__ */ r.jsx(
          x.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": c,
            "aria-controls": v,
            "data-state": c ? "active" : "inactive",
            "data-disabled": s ? "" : void 0,
            disabled: s,
            id: f,
            ...d,
            ref: a,
            onMouseDown: T(t.onMouseDown, (i) => {
              !s && i.button === 0 && i.ctrlKey === !1 ? o.onValueChange(e) : i.preventDefault();
            }),
            onKeyDown: T(t.onKeyDown, (i) => {
              [" ", "Enter"].includes(i.key) && o.onValueChange(e);
            }),
            onFocus: T(t.onFocus, () => {
              const i = o.activationMode !== "manual";
              !c && !s && i && o.onValueChange(e);
            })
          }
        )
      }
    );
  }
);
A.displayName = w;
var D = "TabsContent", E = l(
  (t, a) => {
    const { __scopeTabs: n, value: e, forceMount: s, children: d, ...o } = t, u = N(D, n), f = M(u.baseId, e), v = P(u.baseId, e), c = e === u.value, i = G(c);
    return L(() => {
      const g = requestAnimationFrame(() => i.current = !1);
      return () => cancelAnimationFrame(g);
    }, []), /* @__PURE__ */ r.jsx(H, { present: s || c, children: ({ present: g }) => /* @__PURE__ */ r.jsx(
      x.div,
      {
        "data-state": c ? "active" : "inactive",
        "data-orientation": u.orientation,
        role: "tabpanel",
        "aria-labelledby": f,
        hidden: !g,
        id: v,
        tabIndex: 0,
        ...o,
        ref: a,
        style: {
          ...t.style,
          animationDuration: i.current ? "0s" : void 0
        },
        children: g && d
      }
    ) });
  }
);
E.displayName = D;
function M(t, a) {
  return `${t}-trigger-${a}`;
}
function P(t, a) {
  return `${t}-content-${a}`;
}
var R = _, F = k, C = A, S = E;
const b = z("segmented"), Y = l(({ variant: t = "segmented", ...a }, n) => /* @__PURE__ */ r.jsx(b.Provider, { value: t, children: /* @__PURE__ */ r.jsx(R, { ref: n, ...a }) }));
Y.displayName = R.displayName;
const Z = y(
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
), tt = l(({ className: t, ...a }, n) => {
  const e = m(b);
  return /* @__PURE__ */ r.jsx(
    F,
    {
      ref: n,
      className: p(Z({ variant: e, className: t })),
      ...a
    }
  );
});
tt.displayName = F.displayName;
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
), et = l(({ className: t, ...a }, n) => {
  const e = m(b);
  return /* @__PURE__ */ r.jsx(
    C,
    {
      ref: n,
      className: p($({ variant: e, className: t })),
      ...a
    }
  );
});
et.displayName = C.displayName;
const at = y(
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
), nt = l(({ className: t, ...a }, n) => {
  const e = m(b);
  return /* @__PURE__ */ r.jsx(
    S,
    {
      ref: n,
      className: p(at({ variant: e, className: t })),
      ...a
    }
  );
});
nt.displayName = S.displayName;
const rt = l(({
  children: t,
  className: a,
  ...n
}, e) => {
  const s = m(b);
  return /* @__PURE__ */ r.jsxs("div", { className: "relative rounded-md hover:bg-muted", children: [
    /* @__PURE__ */ r.jsx(
      C,
      {
        ref: e,
        className: p($({ variant: s, className: a })),
        ...n,
        children: /* @__PURE__ */ r.jsx("div", { className: "flex items-center gap-2", children: t })
      }
    ),
    /* @__PURE__ */ r.jsx(
      U,
      {
        className: "absolute inset-0 size-full cursor-pointer",
        onClick: (d) => {
          d.preventDefault();
        }
      }
    )
  ] });
});
rt.displayName = "TabsDropdownTrigger";
export {
  Y as T,
  nt as a,
  tt as b,
  et as c
};
//# sourceMappingURL=tabs-oRdVpN8P.js.map
