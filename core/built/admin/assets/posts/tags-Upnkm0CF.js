import { x as d, R as e, ak as z, a6 as T, af as Y, n as Z, i as C, a7 as ee, k as se, u as ae, al as te, L as E } from "./index-Dqn5WIFh.js";
import { M as oe } from "./main-layout-VqvCxOXQ.js";
import { a as re, u as le, L as ne } from "./virtual-list-window-CNahQBXY.js";
import { B as f } from "./button-CG2Dpjqy.js";
import { T as ie, d as ce, e as w, c as b, a as de, b as v } from "./table-DSJmeU5t.js";
import { P as ue } from "./pencil-Cffx-vm3.js";
import { I as ge, E as A, F as pe, r as me, h as L } from "./skeleton-Bihnkn8q.js";
import { E as xe } from "./empty-indicator-C9DbE9wZ.js";
import { L as he } from "./loading-indicator-DAOD6O2b.js";
import { n as I, b as y, d as fe, g as ve } from "./check-fsC5BvGC.js";
import { L as P, P as u } from "./list-page-D_rv4TgN.js";
import { c as je } from "./hooks-5YpJYWOw.js";
import { E as be } from "./ellipsis-BhK5S70U.js";
import { P as Ne } from "./plus-D2ekwsq0.js";
import { T as Pe } from "./tags-6v5Qt_05.js";
var $ = "Toggle", _ = d((s, a) => {
  const { pressed: o, defaultPressed: t, onPressedChange: r, ...l } = s, [n, i] = I({
    prop: o,
    onChange: r,
    defaultProp: t ?? !1,
    caller: $
  });
  return /* @__PURE__ */ e.jsx(
    y.button,
    {
      type: "button",
      "aria-pressed": n,
      "data-state": n ? "on" : "off",
      "data-disabled": s.disabled ? "" : void 0,
      ...l,
      ref: a,
      onClick: fe(s.onClick, () => {
        s.disabled || i(!n);
      })
    }
  );
});
_.displayName = $;
var V = _, x = "ToggleGroup", [B] = ve(x, [
  A
]), D = A(), k = d((s, a) => {
  const { type: o, ...t } = s;
  if (o === "single") {
    const r = t;
    return /* @__PURE__ */ e.jsx(Te, { ...r, ref: a });
  }
  if (o === "multiple") {
    const r = t;
    return /* @__PURE__ */ e.jsx(we, { ...r, ref: a });
  }
  throw new Error(`Missing prop \`type\` expected on \`${x}\``);
});
k.displayName = x;
var [F, H] = B(x), Te = d((s, a) => {
  const {
    value: o,
    defaultValue: t,
    onValueChange: r = () => {
    },
    ...l
  } = s, [n, i] = I({
    prop: o,
    defaultProp: t ?? "",
    onChange: r,
    caller: x
  });
  return /* @__PURE__ */ e.jsx(
    F,
    {
      scope: s.__scopeToggleGroup,
      type: "single",
      value: Y(() => n ? [n] : [], [n]),
      onItemActivate: i,
      onItemDeactivate: T(() => i(""), [i]),
      children: /* @__PURE__ */ e.jsx(O, { ...l, ref: a })
    }
  );
}), we = d((s, a) => {
  const {
    value: o,
    defaultValue: t,
    onValueChange: r = () => {
    },
    ...l
  } = s, [n, i] = I({
    prop: o,
    defaultProp: t ?? [],
    onChange: r,
    caller: x
  }), c = T(
    (g) => i((p = []) => [...p, g]),
    [i]
  ), h = T(
    (g) => i((p = []) => p.filter((j) => j !== g)),
    [i]
  );
  return /* @__PURE__ */ e.jsx(
    F,
    {
      scope: s.__scopeToggleGroup,
      type: "multiple",
      value: n,
      onItemActivate: c,
      onItemDeactivate: h,
      children: /* @__PURE__ */ e.jsx(O, { ...l, ref: a })
    }
  );
});
k.displayName = x;
var [ye, Ge] = B(x), O = d(
  (s, a) => {
    const {
      __scopeToggleGroup: o,
      disabled: t = !1,
      rovingFocus: r = !0,
      orientation: l,
      dir: n,
      loop: i = !0,
      ...c
    } = s, h = D(o), g = pe(n), p = { role: "group", dir: g, ...c };
    return /* @__PURE__ */ e.jsx(ye, { scope: o, rovingFocus: r, disabled: t, children: r ? /* @__PURE__ */ e.jsx(
      me,
      {
        asChild: !0,
        ...h,
        orientation: l,
        dir: g,
        loop: i,
        children: /* @__PURE__ */ e.jsx(y.div, { ...p, ref: a })
      }
    ) : /* @__PURE__ */ e.jsx(y.div, { ...p, ref: a }) });
  }
), N = "ToggleGroupItem", Q = d(
  (s, a) => {
    const o = H(N, s.__scopeToggleGroup), t = Ge(N, s.__scopeToggleGroup), r = D(s.__scopeToggleGroup), l = o.value.includes(s.value), n = t.disabled || s.disabled, i = { ...s, pressed: l, disabled: n }, c = z(null);
    return t.rovingFocus ? /* @__PURE__ */ e.jsx(
      ge,
      {
        asChild: !0,
        ...r,
        focusable: !n,
        active: l,
        ref: c,
        children: /* @__PURE__ */ e.jsx(R, { ...i, ref: a })
      }
    ) : /* @__PURE__ */ e.jsx(R, { ...i, ref: a });
  }
);
Q.displayName = N;
var R = d(
  (s, a) => {
    const { __scopeToggleGroup: o, value: t, ...r } = s, l = H(N, o), n = { role: "radio", "aria-checked": s.pressed, "aria-pressed": void 0 }, i = l.type === "single" ? n : void 0;
    return /* @__PURE__ */ e.jsx(
      _,
      {
        ...i,
        ...r,
        ref: a,
        onPressedChange: (c) => {
          c ? l.onItemActivate(t) : l.onItemDeactivate(t);
        }
      }
    );
  }
), U = k, W = Q;
const q = Z(
  "inline-flex items-center justify-center gap-2 rounded-md text-control font-medium text-text-secondary transition-colors hover:bg-surface-elevated hover:text-foreground focus-visible:ring-1 focus-visible:ring-focus-ring focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-background data-[state=on]:text-foreground data-[state=on]:shadow-sm [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:stroke-[1.5px]",
  {
    variants: {
      variant: {
        default: "bg-transparent"
      },
      size: {
        default: "h-[calc(var(--control-height)-2px)] min-w-[26px] px-2",
        button: "h-[calc(var(--control-height)-2px)] min-w-[32px] px-3"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Ce = d(({ className: s, variant: a, size: o, ...t }, r) => /* @__PURE__ */ e.jsx(
  V,
  {
    ref: r,
    className: C(q({ variant: a, size: o, className: s })),
    ...t
  }
));
Ce.displayName = V.displayName;
const J = se({
  size: "default",
  variant: "default"
}), K = d(({ className: s, variant: a, size: o, children: t, ...r }, l) => /* @__PURE__ */ e.jsx(
  U,
  {
    ref: l,
    className: C("inline-flex items-center justify-center gap-0.5 bg-muted p-0.5 rounded-md", s),
    ...r,
    children: /* @__PURE__ */ e.jsx(J.Provider, { value: { variant: a, size: o }, children: t })
  }
));
K.displayName = U.displayName;
const G = d(({ className: s, children: a, variant: o, size: t, ...r }, l) => {
  const n = ee(J);
  return /* @__PURE__ */ e.jsx(
    W,
    {
      ref: l,
      className: C(
        q({
          variant: n.variant || o,
          size: n.size || t
        }),
        s
      ),
      ...r,
      children: a
    }
  );
});
G.displayName = W.displayName;
const S = ({ height: s }) => /* @__PURE__ */ e.jsx("tr", { "aria-hidden": "true", className: "flex lg:table-row", children: /* @__PURE__ */ e.jsx("td", { className: "flex lg:table-cell", style: { height: s } }) }), Ie = d(function(a, o) {
  return /* @__PURE__ */ e.jsx(
    w,
    {
      ref: o,
      ...a,
      "aria-hidden": "true",
      className: "relative flex flex-col lg:table-row",
      children: /* @__PURE__ */ e.jsx(v, { className: "relative z-10 h-24 animate-pulse", children: /* @__PURE__ */ e.jsx("div", { className: "h-full rounded-md bg-muted", "data-testid": "loading-placeholder" }) })
    }
  );
});
function _e({
  items: s,
  totalItems: a,
  hasNextPage: o,
  isFetchingNextPage: t,
  fetchNextPage: r
}) {
  const l = z(null), { visibleItemCount: n, canLoadMore: i, loadMore: c } = re(a), { visibleItems: h, spaceBefore: g, spaceAfter: p } = le({
    items: s,
    totalItems: n,
    hasNextPage: o,
    isFetchingNextPage: t,
    fetchNextPage: r,
    parentRef: l
  });
  return /* @__PURE__ */ e.jsxs("div", { ref: l, className: "overflow-hidden", children: [
    /* @__PURE__ */ e.jsxs(
      ie,
      {
        className: "flex table-fixed flex-col lg:table",
        "data-testid": "tags-list",
        children: [
          /* @__PURE__ */ e.jsx(ce, { className: "hidden lg:visible! lg:table-header-group!", children: /* @__PURE__ */ e.jsxs(w, { children: [
            /* @__PURE__ */ e.jsx(b, { className: "w-auto px-4", children: "Tag" }),
            /* @__PURE__ */ e.jsx(b, { className: "w-1/5 px-4", children: "Slug" }),
            /* @__PURE__ */ e.jsx(b, { className: "w-1/5 px-4", children: "No. of posts" }),
            /* @__PURE__ */ e.jsx(b, { className: "w-20 px-4" })
          ] }) }),
          /* @__PURE__ */ e.jsxs(de, { className: "flex flex-col lg:table-row-group", children: [
            /* @__PURE__ */ e.jsx(S, { height: g }),
            h.map(({ key: j, virtualItem: X, item: m, props: M }) => X.index > s.length - 1 ? /* @__PURE__ */ e.jsx(Ie, { ...M }, j) : /* @__PURE__ */ e.jsxs(
              w,
              {
                ...M,
                className: "group grid w-full grid-cols-[1fr_5rem] items-center gap-x-4 p-2 hover:bg-muted/50 md:grid-cols-[1fr_auto_5rem] lg:table-row lg:p-0 [&.group:hover_td]:bg-transparent",
                "data-testid": "tag-list-row",
                children: [
                  /* @__PURE__ */ e.jsxs(v, { className: "static col-start-1 col-end-1 row-start-1 row-end-1 flex min-w-0 flex-col p-0 md:relative lg:table-cell lg:w-1/2 lg:p-4 xl:w-3/5", children: [
                    /* @__PURE__ */ e.jsx(
                      "a",
                      {
                        className: "before:absolute before:top-0 before:left-0 before:z-10 before:h-full before:w-[100vw]",
                        href: `#/tags/${m.slug}`,
                        children: /* @__PURE__ */ e.jsx("span", { className: "block truncate text-base text-md font-semibold", children: m.name })
                      }
                    ),
                    /* @__PURE__ */ e.jsx("span", { className: "block truncate text-muted-foreground", children: m.description })
                  ] }),
                  /* @__PURE__ */ e.jsx(v, { className: "col-start-1 col-end-1 row-start-2 row-end-2 flex p-0 lg:table-cell lg:p-4", children: /* @__PURE__ */ e.jsx("span", { className: "block truncate", children: m.slug }) }),
                  /* @__PURE__ */ e.jsx(v, { className: "col-start-1 col-end-1 row-start-3 row-end-3 flex p-0 md:col-start-2 md:col-end-2 md:row-start-1 md:row-end-3 lg:table-cell lg:p-4", children: m.count?.posts ? /* @__PURE__ */ e.jsx(
                    "a",
                    {
                      className: "relative z-10 -m-4 inline-block p-4 hover:underline",
                      href: `#/posts?tag=${m.slug}`,
                      children: `${ae(m.count?.posts)}  ${m.count?.posts === 1 ? "post" : "posts"}`
                    }
                  ) : /* @__PURE__ */ e.jsx("span", { className: "text-muted-foreground", children: "0 posts" }) }),
                  /* @__PURE__ */ e.jsx(v, { className: "col-start-2 col-end-2 row-start-1 row-end-3 p-0 md:col-start-3 md:col-end-3 lg:table-cell lg:p-4", children: /* @__PURE__ */ e.jsx(
                    f,
                    {
                      "aria-hidden": "true",
                      className: "opacity-0 transition-all group-hover:opacity-100",
                      size: "icon",
                      tabIndex: -1,
                      variant: "outline",
                      children: /* @__PURE__ */ e.jsx(ue, {})
                    }
                  ) })
                ]
              },
              j
            )),
            /* @__PURE__ */ e.jsx(S, { height: p })
          ] })
        ]
      }
    ),
    i && /* @__PURE__ */ e.jsx(ne, { isLoading: t, onClick: c })
  ] });
}
const ke = "TagsResponseType", Me = je({
  dataType: ke,
  path: "/tags/",
  defaultNextPageParams: (s, a) => s.meta?.pagination.next ? {
    ...a,
    page: (s.meta?.pagination.next || 1).toString()
  } : void 0,
  returnData: (s) => {
    const { pages: a } = s, o = a.flatMap((r) => r.tags), t = a[a.length - 1].meta;
    return {
      tags: o,
      meta: t,
      isEnd: t ? t.pagination.pages === t.pagination.page : !0
    };
  }
}), Ee = ({
  filter: s,
  ...a
}) => {
  const o = Object.entries(s).map(([t, r]) => `${t}:${r}`).join(",");
  return Me({
    ...a,
    searchParams: {
      limit: "100",
      order: "name asc",
      include: "count.posts",
      filter: o,
      ...a.searchParams
    }
  });
}, Je = () => {
  const [s, a] = te(), o = s.get("type") ?? "public", {
    data: t,
    isError: r,
    isLoading: l,
    isFetchingNextPage: n,
    fetchNextPage: i,
    hasNextPage: c
  } = Ee({
    filter: {
      visibility: o
    }
  });
  return /* @__PURE__ */ e.jsx(oe, { children: /* @__PURE__ */ e.jsxs(P, { "data-testid": "tags-page", children: [
    /* @__PURE__ */ e.jsx(P.Header, { children: /* @__PURE__ */ e.jsxs(u, { blurredBackground: !1, sticky: !1, children: [
      /* @__PURE__ */ e.jsx(u.Left, { children: /* @__PURE__ */ e.jsx(u.Title, { children: "Tags" }) }),
      /* @__PURE__ */ e.jsxs(u.Actions, { children: [
        /* @__PURE__ */ e.jsxs(u.ActionGroup, { children: [
          /* @__PURE__ */ e.jsxs(K, { "data-testid": "tags-header-tabs", size: "button", type: "single", value: o, children: [
            /* @__PURE__ */ e.jsx(G, { "aria-label": "Public tags", value: "public", asChild: !0, children: /* @__PURE__ */ e.jsx(E, { to: "/tags", children: "Public tags" }) }),
            /* @__PURE__ */ e.jsx(G, { "aria-label": "Internal tags", value: "internal", asChild: !0, children: /* @__PURE__ */ e.jsx(E, { to: "/tags?type=internal", children: "Internal tags" }) })
          ] }),
          /* @__PURE__ */ e.jsxs(u.ActionGroup.MobileMenu, { children: [
            /* @__PURE__ */ e.jsx(u.ActionGroup.MobileMenuTrigger, { children: /* @__PURE__ */ e.jsx(f, { variant: "outline", children: /* @__PURE__ */ e.jsx(be, { className: "size-4" }) }) }),
            /* @__PURE__ */ e.jsxs(u.ActionGroup.MobileMenuContent, { children: [
              /* @__PURE__ */ e.jsx(
                L,
                {
                  checked: o === "public",
                  onCheckedChange: () => a({}),
                  children: "Public tags"
                }
              ),
              /* @__PURE__ */ e.jsx(
                L,
                {
                  checked: o === "internal",
                  onCheckedChange: () => a({ type: "internal" }),
                  children: "Internal tags"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ e.jsx(u.ActionGroup, { children: /* @__PURE__ */ e.jsx(f, { asChild: !0, children: /* @__PURE__ */ e.jsxs("a", { className: "font-bold", href: "#/tags/new", children: [
          /* @__PURE__ */ e.jsx(Ne, { className: "size-4" }),
          /* @__PURE__ */ e.jsx("span", { className: "hidden sm:inline", children: "New tag" })
        ] }) }) })
      ] })
    ] }) }),
    /* @__PURE__ */ e.jsx(P.Body, { children: l ? /* @__PURE__ */ e.jsx("div", { className: "flex flex-1 items-center justify-center", children: /* @__PURE__ */ e.jsx(he, { size: "lg" }) }) : r ? /* @__PURE__ */ e.jsxs("div", { className: "flex flex-1 flex-col items-center justify-center", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "mb-2 text-xl font-medium", children: "Error loading tags" }),
      /* @__PURE__ */ e.jsx("p", { className: "mb-4 text-muted-foreground", children: "Please reload the page to try again" }),
      /* @__PURE__ */ e.jsx(f, { onClick: () => window.location.reload(), children: "Reload page" })
    ] }) : t?.tags.length ? /* @__PURE__ */ e.jsx(
      _e,
      {
        fetchNextPage: i,
        hasNextPage: c,
        isFetchingNextPage: n,
        items: t?.tags ?? [],
        totalItems: t?.meta?.pagination?.total ?? 0
      }
    ) : /* @__PURE__ */ e.jsx("div", { className: "flex flex-1 items-center justify-center", children: /* @__PURE__ */ e.jsx(
      xe,
      {
        actions: /* @__PURE__ */ e.jsx(f, { asChild: !0, children: /* @__PURE__ */ e.jsx("a", { href: "#/tags/new", children: "Create a new tag" }) }),
        title: "Start organizing your content",
        children: /* @__PURE__ */ e.jsx(Pe, {})
      }
    ) }) })
  ] }) });
};
export {
  Je as default
};
//# sourceMappingURL=tags-Upnkm0CF.js.map
