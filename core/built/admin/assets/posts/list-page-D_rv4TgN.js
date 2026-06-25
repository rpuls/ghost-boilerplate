import { a1 as u, R as t, i as o } from "./index-Dqn5WIFh.js";
import { D as C, i as N, n as A } from "./skeleton-Bihnkn8q.js";
import { T as h, H } from "./heading-D3VqNO3z.js";
const y = {
  none: "gap-0",
  xs: "gap-1",
  sm: "gap-2",
  md: "gap-3",
  lg: "gap-5",
  xl: "gap-6",
  "2xl": "gap-8"
}, w = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
  baseline: "items-baseline"
}, P = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly"
}, d = u.forwardRef(
  function({
    as: a = "div",
    className: n,
    gap: r = "md",
    align: i = "center",
    justify: s = "start",
    wrap: c = !1,
    ...p
  }, f) {
    const m = a;
    return /* @__PURE__ */ t.jsx(
      m,
      {
        ref: f,
        className: o(
          "flex flex-row",
          c ? "flex-wrap" : "flex-nowrap",
          y[r],
          w[i],
          P[s],
          n
        ),
        ...p
      }
    );
  }
);
d.displayName = "Inline";
const g = u.forwardRef(
  function({
    className: a,
    gap: n = "md",
    align: r = "stretch",
    justify: i = "start",
    ...s
  }, c) {
    return /* @__PURE__ */ t.jsx(
      "div",
      {
        ref: c,
        className: o(
          "flex flex-col",
          y[n],
          w[r],
          P[i],
          a
        ),
        ...s
      }
    );
  }
);
g.displayName = "Stack";
function E({ className: e, children: a }) {
  return /* @__PURE__ */ t.jsx(
    d,
    {
      align: "center",
      className: o("text-sm text-muted-foreground pt-1", e),
      "data-page-header": "breadcrumb",
      gap: "sm",
      children: a
    }
  );
}
function S({ className: e, children: a }) {
  return /* @__PURE__ */ t.jsx(
    h,
    {
      as: "span",
      className: o("ml-1 text-base tabular-nums", e),
      "data-page-header": "count",
      tone: "secondary",
      weight: "regular",
      children: a
    }
  );
}
function k({ className: e, children: a }) {
  return /* @__PURE__ */ t.jsx(
    h,
    {
      as: "p",
      className: e,
      "data-page-header": "description",
      size: "sm",
      tone: "secondary",
      children: a
    }
  );
}
function M({ className: e, children: a }) {
  return /* @__PURE__ */ t.jsx(
    h,
    {
      as: "p",
      className: o("mt-0.5", e),
      "data-page-header": "meta",
      size: "sm",
      tone: "secondary",
      children: a
    }
  );
}
function L({ className: e, children: a }) {
  const n = [], r = [];
  u.Children.forEach(a, (s) => {
    if (!u.isValidElement(s)) {
      n.push(s);
      return;
    }
    switch (s.type) {
      case k:
      case M:
        r.push(s);
        break;
      default:
        n.push(s);
    }
  });
  const i = /* @__PURE__ */ t.jsx(
    H,
    {
      className: o(
        "text-lg tracking-[0.1px] font-semibold whitespace-nowrap",
        e
      ),
      "data-page-header": "title",
      children: n
    }
  );
  return r.length > 0 ? /* @__PURE__ */ t.jsxs(g, { "data-page-header": "title-body", gap: "none", children: [
    i,
    r
  ] }) : i;
}
function T({ className: e, children: a }) {
  return /* @__PURE__ */ t.jsx(
    g,
    {
      className: o("min-w-0 h-full min-h-(--control-height)", e),
      "data-page-header": "left",
      gap: "xs",
      justify: "center",
      children: a
    }
  );
}
function x({ children: e }) {
  return /* @__PURE__ */ t.jsx(t.Fragment, { children: e });
}
function b({ children: e }) {
  return /* @__PURE__ */ t.jsx(C, { children: e });
}
function v({ children: e, ...a }) {
  return /* @__PURE__ */ t.jsx(A, { asChild: !0, ...a, children: e });
}
function G({ children: e, ...a }) {
  return /* @__PURE__ */ t.jsx(N, { align: "end", sideOffset: 8, ...a, children: e });
}
const I = 640, j = (e) => typeof window > "u" ? !1 : window.innerWidth < e, B = (e) => {
  const [a, n] = u.useState(() => j(e));
  return u.useEffect(() => {
    const r = () => {
      n(j(e));
    };
    return r(), window.addEventListener("resize", r), () => {
      window.removeEventListener("resize", r);
    };
  }, [e]), a;
}, _ = Object.assign(
  function({ className: a, children: n, mobileMenuBreakpoint: r = I }) {
    const i = u.Children.toArray(n), s = [];
    let c = null, p = null;
    const f = B(r);
    return i.forEach((m) => {
      if (!u.isValidElement(m)) {
        s.push(m);
        return;
      }
      const l = m;
      if (l.type === b) {
        c = l;
        return;
      }
      if (l.type === x) {
        p = l.props.children ?? null, s.push(l.props.children ?? null);
        return;
      }
      s.push(l);
    }), c ? f ? /* @__PURE__ */ t.jsx(
      d,
      {
        align: "center",
        className: a,
        "data-page-header": "action-group",
        gap: "sm",
        justify: "end",
        children: /* @__PURE__ */ t.jsxs(
          d,
          {
            align: "center",
            className: "ml-auto",
            "data-page-header": "action-group-mobile",
            gap: "sm",
            children: [
              c,
              p && /* @__PURE__ */ t.jsx("div", { "data-page-header": "action-group-mobile-primary", children: p })
            ]
          }
        )
      }
    ) : /* @__PURE__ */ t.jsx(
      d,
      {
        align: "center",
        className: a,
        "data-page-header": "action-group",
        gap: "sm",
        justify: "end",
        children: /* @__PURE__ */ t.jsx(
          d,
          {
            align: "center",
            "data-page-header": "action-group-desktop",
            gap: "sm",
            justify: "end",
            children: s
          }
        )
      }
    ) : /* @__PURE__ */ t.jsx(
      d,
      {
        align: "center",
        className: a,
        "data-page-header": "action-group",
        gap: "sm",
        justify: "end",
        children: n
      }
    );
  },
  {
    Primary: x,
    MobileMenu: b,
    MobileMenuTrigger: v,
    MobileMenuContent: G
  }
);
function z({ className: e, children: a }) {
  return /* @__PURE__ */ t.jsx(
    d,
    {
      align: "center",
      className: o("shrink-0 min-h-(--control-height)", e),
      "data-page-header": "actions",
      gap: "lg",
      children: a
    }
  );
}
const V = Object.assign(
  function({ className: a, children: n, sticky: r = !0, blurredBackground: i = !0 }) {
    return /* @__PURE__ */ t.jsx(
      "header",
      {
        className: o(
          "flex flex-col",
          r && "sticky top-0 z-50",
          i && "bg-gradient-to-b from-background via-background/70 to-background/70 backdrop-blur-md dark:bg-black",
          a
        ),
        "data-page-header": "page-header",
        children: /* @__PURE__ */ t.jsx(
          d,
          {
            align: "start",
            className: "w-full",
            "data-page-header": "main",
            gap: "lg",
            justify: "between",
            children: n
          }
        )
      }
    );
  },
  {
    Left: T,
    Breadcrumb: E,
    Title: L,
    Count: S,
    Description: k,
    Meta: M,
    Actions: z,
    ActionGroup: _
  }
);
function D({ className: e, children: a, ...n }) {
  return /* @__PURE__ */ t.jsx(
    g,
    {
      className: o(
        "-mx-4 lg:-mx-5 px-4 lg:px-5",
        "sticky top-0 z-50",
        "bg-gradient-to-b from-background via-background/70 to-background/70 backdrop-blur-md dark:bg-black",
        "py-5",
        e
      ),
      "data-list-page": "header",
      gap: "lg",
      ...n,
      children: a
    }
  );
}
function O({ className: e, children: a, ...n }) {
  return /* @__PURE__ */ t.jsx(
    g,
    {
      className: o("grow min-h-0 min-w-0 pb-4 lg:pb-8", e),
      "data-list-page": "body",
      gap: "none",
      ...n,
      children: a
    }
  );
}
const J = Object.assign(
  function({ className: a, children: n, ...r }) {
    return /* @__PURE__ */ t.jsx(
      g,
      {
        className: o("grow h-full min-h-0 px-4 lg:px-6", a),
        "data-list-page": "list-page",
        gap: "none",
        ...r,
        children: n
      }
    );
  },
  {
    Header: D,
    Body: O
  }
);
export {
  d as I,
  J as L,
  V as P
};
//# sourceMappingURL=list-page-D_rv4TgN.js.map
