import { d as K, j as s, g as L, R as W, m as V, e as p, a as g, c as I } from "./index-BWRct4la.mjs";
import { B as R } from "./button-BOW1bLRE.mjs";
import { E as U } from "./empty-indicator-DjHtkWLJ.mjs";
import { A as q, C as w, a as v, b as S, g as M, c as C, U as J, j as Q, T as X, P as Y, f as Z, W as ss, m as es } from "./post-analytics-header-Cj53GuIA.mjs";
import { p as rs, e as as, S as A } from "./source-icon-DVM83hPy.mjs";
import { S as cs, a as ts, b as ns, c as is, d as os, e as ls } from "./sheet-CCZe4G23.mjs";
import { T as ds, a as ms, b as D, c as N, d as hs, e as y } from "./table-BdRfH4_L.mjs";
import { u as xs, d as us, e as js, K as k, f as F, a as T, b as $, c as _, g as bs } from "./stats-Dswp89vu.mjs";
import { S as O, U as ps } from "./separator-eM4IfLr1.mjs";
import { S as P, a as fs } from "./skeleton-DhEoQOK3.mjs";
import { u as gs } from "./post-analytics-context-CJibQt1w.mjs";
function E(a) {
  return a ? Intl.NumberFormat("en", { currency: a, style: "currency" }).format(0).replace(/[\d\s.]/g, "") : "";
}
const Ns = ({ className: a }) => {
  const t = K();
  return /* @__PURE__ */ s.jsx(
    U,
    {
      actions: /* @__PURE__ */ s.jsx(R, { variant: "outline", onClick: () => t("/settings/analytics", { crossApp: !0 }), children: "Open settings" }),
      className: a,
      description: "Enable member source tracking in settings to see which content drives member growth.",
      title: "Member sources have been disabled",
      children: /* @__PURE__ */ s.jsx(q, {})
    }
  );
}, B = "https://www.google.com/s2/favicons?domain=ghost.org&sz=64", H = ({ headerStyle: a = "table", children: t = "Source", data: d, mode: e, defaultSourceIconUrl: n = B }) => {
  const { appSettings: c } = L();
  if (e === "growth")
    return /* @__PURE__ */ s.jsxs(ds, { children: [
      /* @__PURE__ */ s.jsx(ms, { children: /* @__PURE__ */ s.jsxs(D, { children: [
        /* @__PURE__ */ s.jsx(N, { className: "min-w-[320px]", variant: a === "table" ? "default" : "cardhead", children: t }),
        /* @__PURE__ */ s.jsx(N, { className: "w-[110px] text-right", children: "Free members" }),
        (c == null ? void 0 : c.paidMembersEnabled) && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsx(N, { className: "w-[110px] text-right", children: "Paid members" }),
          /* @__PURE__ */ s.jsx(N, { className: "w-[100px] text-right", children: "MRR impact" })
        ] })
      ] }) }),
      /* @__PURE__ */ s.jsx(hs, { children: d == null ? void 0 : d.map((r) => {
        const x = (i) => Math.round(i / 100);
        return /* @__PURE__ */ s.jsxs(D, { className: "last:border-none", children: [
          /* @__PURE__ */ s.jsx(y, { children: r.linkUrl ? /* @__PURE__ */ s.jsxs("a", { className: "group flex items-center gap-2", href: r.linkUrl, rel: "noreferrer", target: "_blank", children: [
            /* @__PURE__ */ s.jsx(
              A,
              {
                defaultSourceIconUrl: n,
                displayName: r.displayName,
                iconSrc: r.iconSrc
              }
            ),
            /* @__PURE__ */ s.jsx("span", { className: "group-hover:underline", children: r.displayName })
          ] }) : /* @__PURE__ */ s.jsxs("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ s.jsx(
              A,
              {
                defaultSourceIconUrl: n,
                displayName: r.displayName,
                iconSrc: r.iconSrc
              }
            ),
            /* @__PURE__ */ s.jsx("span", { children: r.displayName })
          ] }) }),
          /* @__PURE__ */ s.jsxs(y, { className: "text-right font-mono text-sm", children: [
            "+",
            p(r.free_members || 0)
          ] }),
          (c == null ? void 0 : c.paidMembersEnabled) && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
            /* @__PURE__ */ s.jsxs(y, { className: "text-right font-mono text-sm", children: [
              "+",
              p(r.paid_members || 0)
            ] }),
            /* @__PURE__ */ s.jsxs(y, { className: "text-right font-mono text-sm", children: [
              "+$",
              p(x(r.mrr || 0))
            ] })
          ] })
        ] }, r.source);
      }) })
    ] });
}, ys = ({
  title: a = "Top sources",
  description: t,
  data: d,
  mode: e = "visits",
  range: n = 30,
  totalVisitors: c = 0,
  siteUrl: r,
  siteIcon: x,
  defaultSourceIconUrl: i = B,
  getPeriodText: o,
  className: j
}) => {
  const { appSettings: u } = L(), l = W.useMemo(() => rs({
    data: d,
    mode: e,
    siteUrl: r,
    siteIcon: x,
    defaultSourceIconUrl: i
  }), [d, r, x, e, i]), h = W.useMemo(() => as({
    processedData: l,
    totalVisitors: c,
    mode: e
  }), [l, c, e]), m = h.slice(0, 10), b = t || (e === "growth" ? "Where did your growth come from?" : `How readers found your ${n ? "site" : "post"}${n && o ? ` ${o(n)}` : ""}`), f = e === "growth" ? "Sources" : "Top sources", G = e === "growth" ? "Where did your growth come from?" : `How readers found your ${n ? "site" : "post"}${n && o ? ` ${o(n)}` : ""}`;
  return /* @__PURE__ */ s.jsxs(w, { className: V("group/datalist w-full max-w-[calc(100vw-64px)] overflow-x-auto sidebar:max-w-[calc(100vw-64px-280px)]", j), "data-testid": "top-sources-card", children: [
    m.length <= 0 && /* @__PURE__ */ s.jsxs(v, { children: [
      /* @__PURE__ */ s.jsx(S, { children: a }),
      /* @__PURE__ */ s.jsx(M, { children: b })
    ] }),
    /* @__PURE__ */ s.jsx(C, { children: e === "growth" && !(u != null && u.analytics.membersTrackSources) ? /* @__PURE__ */ s.jsx(Ns, { className: "py-10" }) : m.length > 0 ? /* @__PURE__ */ s.jsx(
      H,
      {
        data: m,
        defaultSourceIconUrl: i,
        getPeriodText: o,
        headerStyle: "card",
        mode: e,
        range: n,
        children: /* @__PURE__ */ s.jsxs(v, { children: [
          /* @__PURE__ */ s.jsx(S, { children: a }),
          /* @__PURE__ */ s.jsx(M, { children: b })
        ] })
      }
    ) : /* @__PURE__ */ s.jsx("div", { className: "py-20 text-center text-sm text-gray-700", children: /* @__PURE__ */ s.jsx(
      U,
      {
        className: "h-full",
        description: e === "growth" && "Once someone signs up on this post, sources will show here",
        title: `No sources data available ${o ? o(n) : ""}`,
        children: /* @__PURE__ */ s.jsx(J, { strokeWidth: 1.5 })
      }
    ) }) }),
    h.length > 10 && /* @__PURE__ */ s.jsx(Q, { children: /* @__PURE__ */ s.jsxs(cs, { children: [
      /* @__PURE__ */ s.jsx(ts, { asChild: !0, children: /* @__PURE__ */ s.jsxs(R, { variant: "outline", children: [
        "View all ",
        /* @__PURE__ */ s.jsx(X, {})
      ] }) }),
      /* @__PURE__ */ s.jsxs(ns, { className: "overflow-y-auto pt-0 sm:max-w-[600px]", children: [
        /* @__PURE__ */ s.jsxs(is, { className: "sticky top-0 z-40 -mx-6 bg-background/60 p-6 backdrop-blur", children: [
          /* @__PURE__ */ s.jsx(os, { children: f }),
          /* @__PURE__ */ s.jsx(ls, { children: G })
        ] }),
        /* @__PURE__ */ s.jsx("div", { className: "group/datalist", children: /* @__PURE__ */ s.jsx(
          H,
          {
            data: h,
            defaultSourceIconUrl: i,
            getPeriodText: o,
            mode: e,
            range: n
          }
        ) })
      ] })
    ] }) })
  ] });
}, ws = (a) => {
  const { data: t, isLoading: d } = xs(a), { data: e, isLoading: n } = us(a), { data: c, isLoading: r } = js(), x = g(() => (t == null ? void 0 : t.stats) || [], [t]), i = g(() => (e == null ? void 0 : e.stats.length) === 0 ? {
    free_members: 0,
    paid_members: 0,
    mrr: 0
  } : e == null ? void 0 : e.stats[0], [e]), { selectedCurrency: o, currencySymbol: j } = g(() => {
    var l;
    if (c != null && c.stats && ((l = c == null ? void 0 : c.meta) != null && l.totals)) {
      const h = c.meta.totals;
      let m = h[0];
      if (!m)
        return { selectedCurrency: "usd", currencySymbol: E("usd") };
      for (const f of h)
        f.mrr > m.mrr && (m = f);
      const b = m.currency;
      return {
        selectedCurrency: b,
        currencySymbol: E(b)
      };
    }
    return { selectedCurrency: "usd", currencySymbol: E("usd") };
  }, [c]);
  return {
    isLoading: g(() => d || n || r, [d, n, r]),
    stats: x,
    totals: i,
    selectedCurrency: o,
    currencySymbol: j
  };
}, z = (a) => Math.round(a / 100), Cs = () => {
  const { data: a } = gs(), { postId: t } = I(), { stats: d, totals: e, isLoading: n, currencySymbol: c } = ws(t || ""), { appSettings: r } = L(), x = K(), i = (h) => x(bs({ filter: h }), { crossApp: !0 }), o = a == null ? void 0 : a.url, j = a == null ? void 0 : a.icon;
  let u = "flex flex-col items-stretch gap-6", l = "";
  return r != null && r.paidMembersEnabled || (u = "grid grid-cols-1 border rounded-md", l = "border-none hover:shadow-none"), /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsx(Y, { currentTab: "Growth" }),
    /* @__PURE__ */ s.jsx(Z, { children: n ? /* @__PURE__ */ s.jsxs("div", { className: u, children: [
      /* @__PURE__ */ s.jsx(w, { className: l, children: /* @__PURE__ */ s.jsx(C, { className: "grid grid-cols-3 p-0", children: Array.from({ length: 3 }, (h, m) => /* @__PURE__ */ s.jsxs("div", { className: "h-[98px] gap-1 border-r px-6 py-5 last:border-r-0", children: [
        /* @__PURE__ */ s.jsx(P, { className: "w-2/3" }),
        /* @__PURE__ */ s.jsx(P, { className: "h-7 w-12" })
      ] }, m)) }) }),
      /* @__PURE__ */ s.jsxs(w, { className: l, children: [
        /* @__PURE__ */ s.jsxs(v, { children: [
          /* @__PURE__ */ s.jsx(S, { children: "Top sources" }),
          /* @__PURE__ */ s.jsx(M, { children: "Where did your growth come from?" })
        ] }),
        /* @__PURE__ */ s.jsxs(C, { children: [
          /* @__PURE__ */ s.jsx(O, {}),
          /* @__PURE__ */ s.jsx(fs, { className: "pt-6" })
        ] })
      ] })
    ] }) : /* @__PURE__ */ s.jsxs("div", { className: u, children: [
      /* @__PURE__ */ s.jsxs(w, { className: l, "data-testid": "members-card", children: [
        /* @__PURE__ */ s.jsxs(v, { className: "hidden", children: [
          /* @__PURE__ */ s.jsx(S, { children: "Newsletters" }),
          /* @__PURE__ */ s.jsx(M, { children: "How did this post perform" })
        ] }),
        /* @__PURE__ */ s.jsx(C, { className: "p-0", children: /* @__PURE__ */ s.jsxs("div", { className: `flex flex-col md:grid md:items-stretch ${r != null && r.paidMembersEnabled ? "md:grid-cols-3" : "md:grid-cols-1"}`, children: [
          /* @__PURE__ */ s.jsxs(k, { className: "grow", children: [
            /* @__PURE__ */ s.jsx(F, { onClick: () => {
              i(`signup:'${t}'+conversion:-'${t}'`);
            }, children: "View members →" }),
            /* @__PURE__ */ s.jsxs(T, { onClick: () => {
              i(`signup:'${t}'+conversion:-'${t}'`);
            }, children: [
              /* @__PURE__ */ s.jsx(ps, { strokeWidth: 1.5 }),
              "Free members"
            ] }),
            /* @__PURE__ */ s.jsx($, { children: /* @__PURE__ */ s.jsx(_, { children: p((e == null ? void 0 : e.free_members) || 0) }) })
          ] }),
          (r == null ? void 0 : r.paidMembersEnabled) && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
            /* @__PURE__ */ s.jsxs(k, { className: "grow", children: [
              /* @__PURE__ */ s.jsx(F, { onClick: () => {
                i(`conversion:'${t}'`);
              }, children: "View members →" }),
              /* @__PURE__ */ s.jsxs(T, { onClick: () => {
                i(`conversion:'${t}'`);
              }, children: [
                /* @__PURE__ */ s.jsx(ss, { strokeWidth: 1.5 }),
                "Paid members"
              ] }),
              /* @__PURE__ */ s.jsx($, { children: /* @__PURE__ */ s.jsx(_, { children: p((e == null ? void 0 : e.paid_members) || 0) }) })
            ] }),
            /* @__PURE__ */ s.jsxs(k, { className: "grow", children: [
              /* @__PURE__ */ s.jsxs(T, { children: [
                /* @__PURE__ */ s.jsx(es, { strokeWidth: 1.5 }),
                "MRR"
              ] }),
              /* @__PURE__ */ s.jsx($, { children: /* @__PURE__ */ s.jsxs(_, { children: [
                "+",
                c,
                z((e == null ? void 0 : e.mrr) || 0)
              ] }) })
            ] })
          ] })
        ] }) })
      ] }),
      !(r != null && r.paidMembersEnabled) && /* @__PURE__ */ s.jsx(O, {}),
      /* @__PURE__ */ s.jsx(
        ys,
        {
          className: l,
          data: d,
          mode: "growth",
          siteIcon: j,
          siteUrl: o
        }
      )
    ] }) })
  ] });
}, Ds = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  centsToDollars: z,
  default: Cs
}, Symbol.toStringTag, { value: "Module" }));
export {
  Ns as D,
  z as c,
  Ds as g,
  ws as u
};
//# sourceMappingURL=growth-DWv6T_hh.mjs.map
