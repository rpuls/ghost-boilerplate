import { h as v, j as e, R as u, E as Y, m as T, v as Z, w as ee, N as z, i as se, e as te, Q as ae } from "./index-BWRct4la.mjs";
import { u as C, P, e as le, c as oe, B as N } from "./button-BOW1bLRE.mjs";
import { b as $, I as re, u as ne, R as ie } from "./skeleton-DhEoQOK3.mjs";
import { H as f, u as ce, a as de, L as ue } from "./virtual-list-window-DzHu_geX.mjs";
import { M as ge } from "./main-layout-CvVxJRIb.mjs";
import { T as pe, a as xe, b as y, c as b, d as me, e as h } from "./table-BdRfH4_L.mjs";
import { P as fe, T as he } from "./tags-tsrZrdL2.mjs";
import { E as ve } from "./empty-indicator-DjHtkWLJ.mjs";
import { L as je } from "./loading-indicator-D8SILWlO.mjs";
import { d as be } from "./hooks-BXuxe98u.mjs";
var A = "Toggle", I = v((s, a) => {
  const { pressed: l, defaultPressed: t, onPressedChange: o, ...r } = s, [n, i] = C({
    prop: l,
    onChange: o,
    defaultProp: t ?? !1,
    caller: A
  });
  return /* @__PURE__ */ e.jsx(
    P.button,
    {
      type: "button",
      "aria-pressed": n,
      "data-state": n ? "on" : "off",
      "data-disabled": s.disabled ? "" : void 0,
      ...r,
      ref: a,
      onClick: le(s.onClick, () => {
        s.disabled || i(!n);
      })
    }
  );
});
I.displayName = A;
var V = I, m = "ToggleGroup", [B] = oe(m, [
  $
]), D = $(), _ = u.forwardRef((s, a) => {
  const { type: l, ...t } = s;
  if (l === "single") {
    const o = t;
    return /* @__PURE__ */ e.jsx(Ne, { ...o, ref: a });
  }
  if (l === "multiple") {
    const o = t;
    return /* @__PURE__ */ e.jsx(we, { ...o, ref: a });
  }
  throw new Error(`Missing prop \`type\` expected on \`${m}\``);
});
_.displayName = m;
var [F, H] = B(m), Ne = u.forwardRef((s, a) => {
  const {
    value: l,
    defaultValue: t,
    onValueChange: o = () => {
    },
    ...r
  } = s, [n, i] = C({
    prop: l,
    defaultProp: t ?? "",
    onChange: o,
    caller: m
  });
  return /* @__PURE__ */ e.jsx(
    F,
    {
      scope: s.__scopeToggleGroup,
      type: "single",
      value: u.useMemo(() => n ? [n] : [], [n]),
      onItemActivate: i,
      onItemDeactivate: u.useCallback(() => i(""), [i]),
      children: /* @__PURE__ */ e.jsx(O, { ...r, ref: a })
    }
  );
}), we = u.forwardRef((s, a) => {
  const {
    value: l,
    defaultValue: t,
    onValueChange: o = () => {
    },
    ...r
  } = s, [n, i] = C({
    prop: l,
    defaultProp: t ?? [],
    onChange: o,
    caller: m
  }), c = u.useCallback(
    (d) => i((p = []) => [...p, d]),
    [i]
  ), g = u.useCallback(
    (d) => i((p = []) => p.filter((j) => j !== d)),
    [i]
  );
  return /* @__PURE__ */ e.jsx(
    F,
    {
      scope: s.__scopeToggleGroup,
      type: "multiple",
      value: n,
      onItemActivate: c,
      onItemDeactivate: g,
      children: /* @__PURE__ */ e.jsx(O, { ...r, ref: a })
    }
  );
});
_.displayName = m;
var [Te, Pe] = B(m), O = u.forwardRef(
  (s, a) => {
    const {
      __scopeToggleGroup: l,
      disabled: t = !1,
      rovingFocus: o = !0,
      orientation: r,
      dir: n,
      loop: i = !0,
      ...c
    } = s, g = D(l), d = ne(n), p = { role: "group", dir: d, ...c };
    return /* @__PURE__ */ e.jsx(Te, { scope: l, rovingFocus: o, disabled: t, children: o ? /* @__PURE__ */ e.jsx(
      ie,
      {
        asChild: !0,
        ...g,
        orientation: r,
        dir: d,
        loop: i,
        children: /* @__PURE__ */ e.jsx(P.div, { ...p, ref: a })
      }
    ) : /* @__PURE__ */ e.jsx(P.div, { ...p, ref: a }) });
  }
), w = "ToggleGroupItem", Q = u.forwardRef(
  (s, a) => {
    const l = H(w, s.__scopeToggleGroup), t = Pe(w, s.__scopeToggleGroup), o = D(s.__scopeToggleGroup), r = l.value.includes(s.value), n = t.disabled || s.disabled, i = { ...s, pressed: r, disabled: n }, c = u.useRef(null);
    return t.rovingFocus ? /* @__PURE__ */ e.jsx(
      re,
      {
        asChild: !0,
        ...o,
        focusable: !n,
        active: r,
        ref: c,
        children: /* @__PURE__ */ e.jsx(E, { ...i, ref: a })
      }
    ) : /* @__PURE__ */ e.jsx(E, { ...i, ref: a });
  }
);
Q.displayName = w;
var E = u.forwardRef(
  (s, a) => {
    const { __scopeToggleGroup: l, value: t, ...o } = s, r = H(w, l), n = { role: "radio", "aria-checked": s.pressed, "aria-pressed": void 0 }, i = r.type === "single" ? n : void 0;
    return /* @__PURE__ */ e.jsx(
      I,
      {
        ...i,
        ...o,
        ref: a,
        onPressedChange: (c) => {
          c ? r.onItemActivate(t) : r.onItemDeactivate(t);
        }
      }
    );
  }
), q = _, U = Q;
const W = Y(
  "inline-flex items-center justify-center gap-2 rounded-xs text-sm font-medium text-text-secondary transition-colors hover:bg-surface-elevated hover:text-foreground focus-visible:ring-1 focus-visible:ring-focus-ring focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-background data-[state=on]:text-foreground data-[state=on]:shadow-sm [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:stroke-[1.5px]",
  {
    variants: {
      variant: {
        default: "bg-transparent"
      },
      size: {
        default: "h-[26px] min-w-[26px] px-2",
        button: "h-[32px] min-w-[32px] px-3"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), ye = v(({ className: s, variant: a, size: l, ...t }, o) => /* @__PURE__ */ e.jsx(
  V,
  {
    ref: o,
    className: T(W({ variant: a, size: l, className: s })),
    ...t
  }
));
ye.displayName = V.displayName;
const J = Z({
  size: "default",
  variant: "default"
}), K = v(({ className: s, variant: a, size: l, children: t, ...o }, r) => /* @__PURE__ */ e.jsx(
  q,
  {
    ref: r,
    className: T("inline-flex items-center justify-center gap-0.5 bg-muted p-0.5 rounded-md", s),
    ...o,
    children: /* @__PURE__ */ e.jsx(J.Provider, { value: { variant: a, size: l }, children: t })
  }
));
K.displayName = q.displayName;
const G = v(({ className: s, children: a, variant: l, size: t, ...o }, r) => {
  const n = ee(J);
  return /* @__PURE__ */ e.jsx(
    U,
    {
      ref: r,
      className: T(
        W({
          variant: n.variant || l,
          size: n.size || t
        }),
        s
      ),
      ...o,
      children: a
    }
  );
});
G.displayName = U.displayName;
const Ge = ({ children: s, className: a, ...l }) => /* @__PURE__ */ e.jsx("section", { className: T("flex gap-6 flex-col p-4 lg:p-8 size-full grow", a), ...l, children: s }), Ce = ({ currentTab: s }) => /* @__PURE__ */ e.jsxs(f, { variant: "inline-nav", children: [
  /* @__PURE__ */ e.jsx(f.Title, { children: "Tags" }),
  /* @__PURE__ */ e.jsxs(f.Actions, { children: [
    /* @__PURE__ */ e.jsx(f.ActionGroup, { children: /* @__PURE__ */ e.jsxs(K, { "data-testid": "tags-header-tabs", size: "button", type: "single", value: s, children: [
      /* @__PURE__ */ e.jsx(G, { "aria-label": "Public tags", value: "public", asChild: !0, children: /* @__PURE__ */ e.jsx(z, { to: "/tags", children: "Public tags" }) }),
      /* @__PURE__ */ e.jsx(G, { "aria-label": "Internal tags", value: "internal", asChild: !0, children: /* @__PURE__ */ e.jsx(z, { to: "/tags?type=internal", children: "Internal tags" }) })
    ] }) }),
    /* @__PURE__ */ e.jsx(f.ActionGroup, { children: /* @__PURE__ */ e.jsx(N, { asChild: !0, children: /* @__PURE__ */ e.jsx("a", { className: "font-bold", href: "#/tags/new", children: "New tag" }) }) })
  ] })
] }), Ie = ({ children: s }) => /* @__PURE__ */ e.jsx(ge, { children: /* @__PURE__ */ e.jsx("div", { className: "grid w-full grow", children: /* @__PURE__ */ e.jsx("div", { className: "flex h-full flex-col", "data-testid": "tags-page", children: s }) }) }), M = ({ height: s }) => /* @__PURE__ */ e.jsx("tr", { "aria-hidden": "true", className: "flex lg:table-row", children: /* @__PURE__ */ e.jsx("td", { className: "flex lg:table-cell", style: { height: s } }) }), _e = v(function(a, l) {
  return /* @__PURE__ */ e.jsx(
    y,
    {
      ref: l,
      ...a,
      "aria-hidden": "true",
      className: "relative flex flex-col lg:table-row",
      children: /* @__PURE__ */ e.jsx(h, { className: "relative z-10 h-24 animate-pulse", children: /* @__PURE__ */ e.jsx("div", { className: "h-full rounded-md bg-muted", "data-testid": "loading-placeholder" }) })
    }
  );
});
function Re({
  items: s,
  totalItems: a,
  hasNextPage: l,
  isFetchingNextPage: t,
  fetchNextPage: o
}) {
  const r = se(null), { visibleItemCount: n, canLoadMore: i, loadMore: c } = ce(a), { visibleItems: g, spaceBefore: d, spaceAfter: p } = de({
    items: s,
    totalItems: n,
    hasNextPage: l,
    isFetchingNextPage: t,
    fetchNextPage: o,
    parentRef: r
  });
  return /* @__PURE__ */ e.jsxs("div", { ref: r, className: "overflow-hidden", children: [
    /* @__PURE__ */ e.jsxs(
      pe,
      {
        className: "flex table-fixed flex-col lg:table",
        "data-testid": "tags-list",
        children: [
          /* @__PURE__ */ e.jsx(xe, { className: "hidden lg:visible! lg:table-header-group!", children: /* @__PURE__ */ e.jsxs(y, { children: [
            /* @__PURE__ */ e.jsx(b, { className: "w-auto px-4", children: "Tag" }),
            /* @__PURE__ */ e.jsx(b, { className: "w-1/5 px-4", children: "Slug" }),
            /* @__PURE__ */ e.jsx(b, { className: "w-1/5 px-4", children: "No. of posts" }),
            /* @__PURE__ */ e.jsx(b, { className: "w-20 px-4" })
          ] }) }),
          /* @__PURE__ */ e.jsxs(me, { className: "flex flex-col lg:table-row-group", children: [
            /* @__PURE__ */ e.jsx(M, { height: d }),
            g.map(({ key: j, virtualItem: X, item: x, props: R }) => {
              var k, L, S;
              return X.index > s.length - 1 ? /* @__PURE__ */ e.jsx(_e, { ...R }, j) : /* @__PURE__ */ e.jsxs(
                y,
                {
                  ...R,
                  className: "grid w-full grid-cols-[1fr_5rem] items-center gap-x-4 p-2 hover:bg-muted/50 md:grid-cols-[1fr_auto_5rem] lg:table-row lg:p-0 [&.group:hover_td]:bg-transparent",
                  "data-testid": "tag-list-row",
                  children: [
                    /* @__PURE__ */ e.jsxs(h, { className: "static col-start-1 col-end-1 row-start-1 row-end-1 flex min-w-0 flex-col p-0 md:relative lg:table-cell lg:w-1/2 lg:p-4 xl:w-3/5", children: [
                      /* @__PURE__ */ e.jsx(
                        "a",
                        {
                          className: "before:absolute before:top-0 before:left-0 before:z-10 before:h-full before:w-[100vw]",
                          href: `#/tags/${x.slug}`,
                          children: /* @__PURE__ */ e.jsx("span", { className: "block truncate pb-1 text-lg font-medium", children: x.name })
                        }
                      ),
                      /* @__PURE__ */ e.jsx("span", { className: "block truncate text-muted-foreground", children: x.description })
                    ] }),
                    /* @__PURE__ */ e.jsx(h, { className: "col-start-1 col-end-1 row-start-2 row-end-2 flex p-0 lg:table-cell lg:p-4", children: /* @__PURE__ */ e.jsx("span", { className: "block truncate", children: x.slug }) }),
                    /* @__PURE__ */ e.jsx(h, { className: "col-start-1 col-end-1 row-start-3 row-end-3 flex p-0 md:col-start-2 md:col-end-2 md:row-start-1 md:row-end-3 lg:table-cell lg:p-4", children: (k = x.count) != null && k.posts ? /* @__PURE__ */ e.jsx(
                      "a",
                      {
                        className: "relative z-10 -m-4 inline-block p-4 hover:underline",
                        href: `#/posts?tag=${x.slug}`,
                        children: `${te((L = x.count) == null ? void 0 : L.posts)}  ${((S = x.count) == null ? void 0 : S.posts) === 1 ? "post" : "posts"}`
                      }
                    ) : /* @__PURE__ */ e.jsx("span", { className: "text-muted-foreground", children: "0 posts" }) }),
                    /* @__PURE__ */ e.jsx(h, { className: "col-start-2 col-end-2 row-start-1 row-end-3 p-0 md:col-start-3 md:col-end-3 lg:table-cell lg:p-4", children: /* @__PURE__ */ e.jsx(
                      N,
                      {
                        "aria-hidden": "true",
                        className: "w-12",
                        size: "icon",
                        tabIndex: -1,
                        variant: "outline",
                        children: /* @__PURE__ */ e.jsx(fe, {})
                      }
                    ) })
                  ]
                },
                j
              );
            }),
            /* @__PURE__ */ e.jsx(M, { height: p })
          ] })
        ]
      }
    ),
    i && /* @__PURE__ */ e.jsx(ue, { isLoading: t, onClick: c })
  ] });
}
const ke = "TagsResponseType", Le = be({
  dataType: ke,
  path: "/tags/",
  defaultNextPageParams: (s, a) => {
    var l, t;
    return (l = s.meta) != null && l.pagination.next ? {
      ...a,
      page: (((t = s.meta) == null ? void 0 : t.pagination.next) || 1).toString()
    } : void 0;
  },
  returnData: (s) => {
    const { pages: a } = s, l = a.flatMap((o) => o.tags), t = a[a.length - 1].meta;
    return {
      tags: l,
      meta: t,
      isEnd: t ? t.pagination.pages === t.pagination.page : !0
    };
  }
}), Se = ({
  filter: s,
  ...a
}) => {
  const l = Object.entries(s).map(([t, o]) => `${t}:${o}`).join(",");
  return Le({
    ...a,
    searchParams: {
      limit: "100",
      order: "name asc",
      include: "count.posts",
      filter: l,
      ...a.searchParams
    }
  });
}, Qe = () => {
  var g, d;
  const { search: s } = ae(), l = new URLSearchParams(s).get("type") ?? "public", {
    data: t,
    isError: o,
    isLoading: r,
    isFetchingNextPage: n,
    fetchNextPage: i,
    hasNextPage: c
  } = Se({
    filter: {
      visibility: l
    }
  });
  return /* @__PURE__ */ e.jsxs(Ie, { children: [
    /* @__PURE__ */ e.jsx(Ce, { currentTab: l }),
    /* @__PURE__ */ e.jsx(Ge, { children: r ? /* @__PURE__ */ e.jsx("div", { className: "flex h-full items-center justify-center", children: /* @__PURE__ */ e.jsx(je, { size: "lg" }) }) : o ? /* @__PURE__ */ e.jsxs("div", { className: "mb-16 flex h-full flex-col items-center justify-center", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "mb-2 text-xl font-medium", children: "Error loading tags" }),
      /* @__PURE__ */ e.jsx("p", { className: "mb-4 text-muted-foreground", children: "Please reload the page to try again" }),
      /* @__PURE__ */ e.jsx(N, { onClick: () => window.location.reload(), children: "Reload page" })
    ] }) : t != null && t.tags.length ? /* @__PURE__ */ e.jsx(
      Re,
      {
        fetchNextPage: i,
        hasNextPage: c,
        isFetchingNextPage: n,
        items: (t == null ? void 0 : t.tags) ?? [],
        totalItems: ((d = (g = t == null ? void 0 : t.meta) == null ? void 0 : g.pagination) == null ? void 0 : d.total) ?? 0
      }
    ) : /* @__PURE__ */ e.jsx("div", { className: "flex h-full items-center justify-center", children: /* @__PURE__ */ e.jsx(
      ve,
      {
        actions: /* @__PURE__ */ e.jsx(N, { asChild: !0, children: /* @__PURE__ */ e.jsx("a", { href: "#/tags/new", children: "Create a new tag" }) }),
        title: "Start organizing your content",
        children: /* @__PURE__ */ e.jsx(he, {})
      }
    ) }) })
  ] });
};
export {
  Qe as default
};
//# sourceMappingURL=tags-pK3PaRML.mjs.map
