import { f as u, j as t, n as D, o as L, x as B, w as x, a as p, E as T } from "./index-LBcSX-Bd.mjs";
import { bK as G, W, Y as O, a2 as q, Z as v, bL as C, bM as H, bN as U, _ as y, a5 as Y, p as Z, bO as J, bP as Q, B as X, an as ee } from "./stats-CYKBl8ke.mjs";
var h = "Tabs", [te] = O(h, [
  C
]), w = C(), [ae, N] = te(h), _ = u(
  (e, a) => {
    const {
      __scopeTabs: n,
      value: s,
      onValueChange: r,
      defaultValue: i,
      orientation: o = "horizontal",
      dir: d,
      activationMode: g = "automatic",
      ...m
    } = e, l = G(d), [c, b] = W({
      prop: s,
      onChange: r,
      defaultProp: i ?? "",
      caller: h
    });
    return /* @__PURE__ */ t.jsx(
      ae,
      {
        scope: n,
        baseId: q(),
        value: c,
        onValueChange: b,
        orientation: o,
        dir: l,
        activationMode: g,
        children: /* @__PURE__ */ t.jsx(
          v.div,
          {
            dir: l,
            "data-orientation": o,
            ...m,
            ref: a
          }
        )
      }
    );
  }
);
_.displayName = h;
var k = "TabsList", I = u(
  (e, a) => {
    const { __scopeTabs: n, loop: s = !0, ...r } = e, i = N(k, n), o = w(n);
    return /* @__PURE__ */ t.jsx(
      H,
      {
        asChild: !0,
        ...o,
        orientation: i.orientation,
        dir: i.dir,
        loop: s,
        children: /* @__PURE__ */ t.jsx(
          v.div,
          {
            role: "tablist",
            "aria-orientation": i.orientation,
            ...r,
            ref: a
          }
        )
      }
    );
  }
);
I.displayName = k;
var V = "TabsTrigger", A = u(
  (e, a) => {
    const { __scopeTabs: n, value: s, disabled: r = !1, ...i } = e, o = N(V, n), d = w(n), g = E(o.baseId, s), m = F(o.baseId, s), l = s === o.value;
    return /* @__PURE__ */ t.jsx(
      U,
      {
        asChild: !0,
        ...d,
        focusable: !r,
        active: l,
        children: /* @__PURE__ */ t.jsx(
          v.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": l,
            "aria-controls": m,
            "data-state": l ? "active" : "inactive",
            "data-disabled": r ? "" : void 0,
            disabled: r,
            id: g,
            ...i,
            ref: a,
            onMouseDown: y(e.onMouseDown, (c) => {
              !r && c.button === 0 && c.ctrlKey === !1 ? o.onValueChange(s) : c.preventDefault();
            }),
            onKeyDown: y(e.onKeyDown, (c) => {
              [" ", "Enter"].includes(c.key) && o.onValueChange(s);
            }),
            onFocus: y(e.onFocus, () => {
              const c = o.activationMode !== "manual";
              !l && !r && c && o.onValueChange(s);
            })
          }
        )
      }
    );
  }
);
A.displayName = V;
var M = "TabsContent", P = u(
  (e, a) => {
    const { __scopeTabs: n, value: s, forceMount: r, children: i, ...o } = e, d = N(M, n), g = E(d.baseId, s), m = F(d.baseId, s), l = s === d.value, c = D(l);
    return L(() => {
      const b = requestAnimationFrame(() => c.current = !1);
      return () => cancelAnimationFrame(b);
    }, []), /* @__PURE__ */ t.jsx(Y, { present: r || l, children: ({ present: b }) => /* @__PURE__ */ t.jsx(
      v.div,
      {
        "data-state": l ? "active" : "inactive",
        "data-orientation": d.orientation,
        role: "tabpanel",
        "aria-labelledby": g,
        hidden: !b,
        id: m,
        tabIndex: 0,
        ...o,
        ref: a,
        style: {
          ...e.style,
          animationDuration: c.current ? "0s" : void 0
        },
        children: b && i
      }
    ) });
  }
);
P.displayName = M;
function E(e, a) {
  return `${e}-trigger-${a}`;
}
function F(e, a) {
  return `${e}-content-${a}`;
}
var R = _, S = I, j = A, z = P;
const f = B("segmented"), se = u(({ variant: e = "segmented", ...a }, n) => /* @__PURE__ */ t.jsx(f.Provider, { value: e, children: /* @__PURE__ */ t.jsx(R, { ref: n, ...a }) }));
se.displayName = R.displayName;
const ne = T(
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
        kpis: "border-b ring-0"
      }
    },
    defaultVariants: {
      variant: "segmented"
    }
  }
), re = u(({ className: e, ...a }, n) => {
  const s = x(f);
  return /* @__PURE__ */ t.jsx(
    S,
    {
      ref: n,
      className: p(ne({ variant: s, className: e })),
      ...a
    }
  );
});
re.displayName = S.displayName;
const K = T(
  "inline-flex items-center justify-center px-3 py-1 whitespace-nowrap ring-offset-background transition-all focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        segmented: "h-7 rounded-md text-sm font-medium data-[state=active]:shadow-md",
        "segmented-sm": "h-[26px] rounded-md text-xs font-medium data-[state=active]:shadow-md",
        button: "h-(--control-height) gap-1.5 rounded-md py-2 text-sm font-normal hover:bg-muted data-[state=active]:bg-muted-foreground/10 data-[state=active]:font-medium",
        "button-sm": "h-6 gap-1.5 rounded-md p-2 text-xs font-normal text-text-secondary hover:bg-muted data-[state=active]:bg-muted-foreground/10 data-[state=active]:font-medium data-[state=active]:text-foreground",
        underline: 'relative h-9 px-0 text-md font-semibold text-text-secondary after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-foreground after:opacity-0 after:content-[""] hover:after:opacity-10 data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:after:opacity-100!',
        navbar: 'relative h-[52px] px-px text-md font-semibold text-muted-foreground after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-foreground after:opacity-0 after:content-[""] hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:after:opacity-100!',
        pill: "relative h-[30px] rounded-md px-3 text-md font-medium text-text-secondary hover:text-foreground data-[state=active]:bg-muted-foreground/10 data-[state=active]:font-semibold data-[state=active]:text-foreground",
        kpis: 'relative h-full! items-start! rounded-none border-border bg-transparent px-6 py-5 text-foreground ring-0 transition-all after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-foreground after:opacity-0 after:content-[""] first:rounded-tl-md last:rounded-tr-md hover:bg-accent/50 data-[state=active]:bg-transparent data-[state=active]:after:opacity-100 [&:not(:last-child)]:border-r [&[data-state=active]_[data-type="value"]]:text-foreground'
      }
    },
    defaultVariants: {
      variant: "segmented"
    }
  }
), $ = u(({ className: e, ...a }, n) => {
  const s = x(f);
  return /* @__PURE__ */ t.jsx(
    j,
    {
      ref: n,
      className: p(K({ variant: s, className: e })),
      ...a
    }
  );
});
$.displayName = j.displayName;
const oe = T(
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
), ie = u(({ className: e, ...a }, n) => {
  const s = x(f);
  return /* @__PURE__ */ t.jsx(
    z,
    {
      ref: n,
      className: p(oe({ variant: s, className: e })),
      ...a
    }
  );
});
ie.displayName = z.displayName;
const ge = ({ children: e, ...a }) => /* @__PURE__ */ t.jsx($, { className: "h-auto", ...a, children: e }), me = ({
  color: e,
  icon: a,
  label: n,
  value: s,
  diffDirection: r,
  diffValue: i,
  className: o,
  "data-testid": d
}) => {
  const g = a ? Z[a] : null, m = p(
    "flex items-center gap-1 text-xs h-[22px] px-1.5 rounded-xs group/diff cursor-default mt-0.5",
    r === "up" && "text-state-success bg-state-success/10",
    r === "down" && "text-state-danger bg-state-danger/10",
    r === "same" && "text-text-secondary bg-muted"
  );
  return /* @__PURE__ */ t.jsxs("div", { className: p("group flex w-full flex-col items-start gap-2", o), children: [
    /* @__PURE__ */ t.jsxs("div", { className: "flex h-[22px] items-center gap-1.5 text-base font-medium text-muted-foreground transition-all group-hover:text-foreground", "data-type": "value", children: [
      e && /* @__PURE__ */ t.jsx("div", { className: "ml-1 size-2 rounded-full opacity-50", style: { backgroundColor: e } }),
      g && /* @__PURE__ */ t.jsx(g, { size: 16, strokeWidth: 1.5 }),
      n
    ] }),
    /* @__PURE__ */ t.jsxs("div", { className: "flex flex-col items-start gap-2 lg:flex-row xl:gap-3", children: [
      /* @__PURE__ */ t.jsx("div", { className: "text-[2.3rem] leading-none font-semibold tracking-tighter xl:text-[2.6rem]", "data-testid": d, children: s }),
      r && r !== "hidden" && /* @__PURE__ */ t.jsx(t.Fragment, { children: /* @__PURE__ */ t.jsxs("div", { className: m, "data-testid": d ? `${d}-diff` : void 0, children: [
        /* @__PURE__ */ t.jsx("span", { className: "leading-none font-medium", children: i }),
        r === "up" && /* @__PURE__ */ t.jsx(J, { className: "size-3!", size: 14, strokeWidth: 2 }),
        r === "down" && /* @__PURE__ */ t.jsx(Q, { className: "size-3!", size: 14, strokeWidth: 2 })
      ] }) })
    ] })
  ] });
}, de = u(
  ({ variant: e = "dropdown", className: a, ...n }, s) => /* @__PURE__ */ t.jsx(
    X,
    {
      ref: s,
      className: p(
        "h-auto w-full rounded-none border-x-0 border-t-0 focus-visible:ring-0 bg-transparent py-5",
        a
      ),
      variant: e,
      ...n
    }
  )
);
de.displayName = "KpiDropdownButton";
const ce = u(({
  children: e,
  className: a,
  ...n
}, s) => {
  const r = x(f);
  return /* @__PURE__ */ t.jsxs("div", { className: "relative rounded-md hover:bg-muted", children: [
    /* @__PURE__ */ t.jsx(
      j,
      {
        ref: s,
        className: p(K({ variant: r, className: a })),
        ...n,
        children: /* @__PURE__ */ t.jsx("div", { className: "flex items-center gap-2", children: e })
      }
    ),
    /* @__PURE__ */ t.jsx(
      ee,
      {
        className: "absolute inset-0 size-full cursor-pointer",
        onClick: (i) => {
          i.preventDefault();
        }
      }
    )
  ] });
});
ce.displayName = "TabsDropdownTrigger";
export {
  ge as K,
  se as T,
  re as a,
  $ as b,
  me as c,
  de as d
};
//# sourceMappingURL=tabs-B1iRXd5U.mjs.map
