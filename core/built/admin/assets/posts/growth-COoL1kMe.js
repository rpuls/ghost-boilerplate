import { ag as G, R as s, a4 as _, a1 as D, i as V, u as b, af as g, ah as I } from "./index-Dqn5WIFh.js";
import { B as O } from "./button-CG2Dpjqy.js";
import { E as K } from "./empty-indicator-C9DbE9wZ.js";
import { A as q, p as J, e as Q, U as X, S as E, W as Y, C as Z } from "./source-icon-C3oQy3UI.js";
import { C as N, d as S, e as C, b as v, a as w, c as ss, T as es, g as rs, f as as } from "./post-analytics-header-BktlrM_v.js";
import { S as ts, e as ns, a as cs, c as os, d as is, b as ls } from "./sheet-CXHmD_eT.js";
import { T as ds, d as ms, e as L, c as f, a as hs, b as y } from "./table-DSJmeU5t.js";
import { i as xs, h as ps, u as us, K as M, c as H, b as k, a as T, d as R, e as js } from "./stats-DFicPtCX.js";
import { S as W, U as bs } from "./get-site-timezone-83C41MGz.js";
import { u as F, v as gs } from "./skeleton-Bihnkn8q.js";
import { u as fs } from "./post-analytics-context-DT3Avn9Q.js";
function $(a) {
  return a ? Intl.NumberFormat("en", { currency: a, style: "currency" }).format(0).replace(/[\d\s.]/g, "") : "";
}
const ys = ({ className: a }) => {
  const n = G();
  return /* @__PURE__ */ s.jsx(
    K,
    {
      actions: /* @__PURE__ */ s.jsx(O, { variant: "outline", onClick: () => n("/settings/analytics", { crossApp: !0 }), children: "Open settings" }),
      className: a,
      description: "Enable member source tracking in settings to see which content drives member growth.",
      title: "Member sources have been disabled",
      children: /* @__PURE__ */ s.jsx(q, {})
    }
  );
}, P = "https://www.google.com/s2/favicons?domain=ghost.org&sz=64", A = ({ headerStyle: a = "table", children: n = "Source", data: m, mode: r, defaultSourceIconUrl: t = P }) => {
  const { appSettings: o } = _();
  if (r === "growth")
    return /* @__PURE__ */ s.jsxs(ds, { children: [
      /* @__PURE__ */ s.jsx(ms, { children: /* @__PURE__ */ s.jsxs(L, { children: [
        /* @__PURE__ */ s.jsx(f, { className: "min-w-[320px]", variant: a === "table" ? "default" : "cardhead", children: n }),
        /* @__PURE__ */ s.jsx(f, { className: "w-[110px] text-right", children: "Free members" }),
        o?.paidMembersEnabled && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsx(f, { className: "w-[110px] text-right", children: "Paid members" }),
          /* @__PURE__ */ s.jsx(f, { className: "w-[100px] text-right", children: "MRR impact" })
        ] })
      ] }) }),
      /* @__PURE__ */ s.jsx(hs, { children: m?.map((e) => {
        const h = (c) => Math.round(c / 100);
        return /* @__PURE__ */ s.jsxs(L, { className: "last:border-none", children: [
          /* @__PURE__ */ s.jsx(y, { children: e.linkUrl ? /* @__PURE__ */ s.jsxs("a", { className: "group flex items-center gap-2", href: e.linkUrl, rel: "noreferrer", target: "_blank", children: [
            /* @__PURE__ */ s.jsx(
              E,
              {
                defaultSourceIconUrl: t,
                displayName: e.displayName,
                iconSrc: e.iconSrc
              }
            ),
            /* @__PURE__ */ s.jsx("span", { className: "group-hover:underline", children: e.displayName })
          ] }) : /* @__PURE__ */ s.jsxs("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ s.jsx(
              E,
              {
                defaultSourceIconUrl: t,
                displayName: e.displayName,
                iconSrc: e.iconSrc
              }
            ),
            /* @__PURE__ */ s.jsx("span", { children: e.displayName })
          ] }) }),
          /* @__PURE__ */ s.jsxs(y, { className: "text-right font-mono text-sm", children: [
            "+",
            b(e.free_members || 0)
          ] }),
          o?.paidMembersEnabled && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
            /* @__PURE__ */ s.jsxs(y, { className: "text-right font-mono text-sm", children: [
              "+",
              b(e.paid_members || 0)
            ] }),
            /* @__PURE__ */ s.jsxs(y, { className: "text-right font-mono text-sm", children: [
              "+$",
              b(h(e.mrr || 0))
            ] })
          ] })
        ] }, e.source);
      }) })
    ] });
}, Ns = ({
  title: a = "Top sources",
  description: n,
  data: m,
  mode: r = "visits",
  range: t = 30,
  totalVisitors: o = 0,
  siteUrl: e,
  siteIcon: h,
  defaultSourceIconUrl: c = P,
  getPeriodText: i,
  className: u
}) => {
  const { appSettings: p } = _(), l = D.useMemo(() => J({
    data: m,
    mode: r,
    siteUrl: e,
    siteIcon: h,
    defaultSourceIconUrl: c
  }), [m, e, h, r, c]), d = D.useMemo(() => Q({
    processedData: l,
    totalVisitors: o,
    mode: r
  }), [l, o, r]), x = d.slice(0, 10), j = n || (r === "growth" ? "Where did your growth come from?" : `How readers found your ${t ? "site" : "post"}${t && i ? ` ${i(t)}` : ""}`), B = r === "growth" ? "Sources" : "Top sources", z = r === "growth" ? "Where did your growth come from?" : `How readers found your ${t ? "site" : "post"}${t && i ? ` ${i(t)}` : ""}`;
  return /* @__PURE__ */ s.jsxs(N, { className: V("group/datalist w-full max-w-[calc(100vw-64px)] overflow-x-auto sidebar:max-w-[calc(100vw-64px-280px)]", u), "data-testid": "top-sources-card", children: [
    x.length <= 0 && /* @__PURE__ */ s.jsxs(S, { children: [
      /* @__PURE__ */ s.jsx(C, { children: a }),
      /* @__PURE__ */ s.jsx(v, { children: j })
    ] }),
    /* @__PURE__ */ s.jsx(w, { children: r === "growth" && !p?.analytics.membersTrackSources ? /* @__PURE__ */ s.jsx(ys, { className: "py-10" }) : x.length > 0 ? /* @__PURE__ */ s.jsx(
      A,
      {
        data: x,
        defaultSourceIconUrl: c,
        getPeriodText: i,
        headerStyle: "card",
        mode: r,
        range: t,
        children: /* @__PURE__ */ s.jsxs(S, { children: [
          /* @__PURE__ */ s.jsx(C, { children: a }),
          /* @__PURE__ */ s.jsx(v, { children: j })
        ] })
      }
    ) : /* @__PURE__ */ s.jsx("div", { className: "py-20 text-center text-sm text-gray-700", children: /* @__PURE__ */ s.jsx(
      K,
      {
        className: "h-full",
        description: r === "growth" && "Once someone signs up on this post, sources will show here",
        title: `No sources data available ${i ? i(t) : ""}`,
        children: /* @__PURE__ */ s.jsx(X, { strokeWidth: 1.5 })
      }
    ) }) }),
    d.length > 10 && /* @__PURE__ */ s.jsx(ss, { children: /* @__PURE__ */ s.jsxs(ts, { children: [
      /* @__PURE__ */ s.jsx(ns, { asChild: !0, children: /* @__PURE__ */ s.jsxs(O, { variant: "outline", children: [
        "View all ",
        /* @__PURE__ */ s.jsx(es, {})
      ] }) }),
      /* @__PURE__ */ s.jsxs(cs, { className: "overflow-y-auto pt-0 sm:max-w-[420px]", children: [
        /* @__PURE__ */ s.jsxs(os, { className: "sticky top-0 z-40 -mx-6 bg-background/60 p-6 backdrop-blur", children: [
          /* @__PURE__ */ s.jsx(is, { children: B }),
          /* @__PURE__ */ s.jsx(ls, { children: z })
        ] }),
        /* @__PURE__ */ s.jsx("div", { className: "group/datalist", children: /* @__PURE__ */ s.jsx(
          A,
          {
            data: d,
            defaultSourceIconUrl: c,
            getPeriodText: i,
            mode: r,
            range: t
          }
        ) })
      ] })
    ] }) })
  ] });
}, ws = (a) => {
  const { data: n, isLoading: m } = xs(a), { data: r, isLoading: t } = ps(a), { data: o, isLoading: e } = us(), h = g(() => n?.stats || [], [n]), c = g(() => r?.stats.length === 0 ? {
    free_members: 0,
    paid_members: 0,
    mrr: 0
  } : r?.stats[0], [r]), { selectedCurrency: i, currencySymbol: u } = g(() => {
    if (o?.stats && o?.meta?.totals) {
      const l = o.meta.totals;
      let d = l[0];
      if (!d)
        return { selectedCurrency: "usd", currencySymbol: $("usd") };
      for (const j of l)
        j.mrr > d.mrr && (d = j);
      const x = d.currency;
      return {
        selectedCurrency: x,
        currencySymbol: $(x)
      };
    }
    return { selectedCurrency: "usd", currencySymbol: $("usd") };
  }, [o]);
  return {
    isLoading: g(() => m || t || e, [m, t, e]),
    stats: h,
    totals: c,
    selectedCurrency: i,
    currencySymbol: u
  };
}, U = (a) => Math.round(a / 100), Ss = () => {
  const { data: a } = fs(), { postId: n } = I(), { stats: m, totals: r, isLoading: t, currencySymbol: o } = ws(n || ""), { appSettings: e } = _(), h = G(), c = (d) => h(js({ filter: d })), i = a?.url, u = a?.icon;
  let p = "flex flex-col items-stretch gap-6", l = "";
  return e?.paidMembersEnabled || (p = "grid grid-cols-1 border rounded-md", l = "border-none hover:shadow-none"), /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsx(rs, { currentTab: "Growth" }),
    /* @__PURE__ */ s.jsx(as, { children: t ? /* @__PURE__ */ s.jsxs("div", { className: p, children: [
      /* @__PURE__ */ s.jsx(N, { className: l, children: /* @__PURE__ */ s.jsx(w, { className: "grid grid-cols-3 p-0", children: Array.from({ length: 3 }, (d, x) => /* @__PURE__ */ s.jsxs("div", { className: "h-[98px] gap-1 border-r px-6 py-5 last:border-r-0", children: [
        /* @__PURE__ */ s.jsx(F, { className: "w-2/3" }),
        /* @__PURE__ */ s.jsx(F, { className: "h-7 w-12" })
      ] }, x)) }) }),
      /* @__PURE__ */ s.jsxs(N, { className: l, children: [
        /* @__PURE__ */ s.jsxs(S, { children: [
          /* @__PURE__ */ s.jsx(C, { children: "Top sources" }),
          /* @__PURE__ */ s.jsx(v, { children: "Where did your growth come from?" })
        ] }),
        /* @__PURE__ */ s.jsxs(w, { children: [
          /* @__PURE__ */ s.jsx(W, {}),
          /* @__PURE__ */ s.jsx(gs, { className: "pt-6" })
        ] })
      ] })
    ] }) : /* @__PURE__ */ s.jsxs("div", { className: p, children: [
      /* @__PURE__ */ s.jsxs(N, { className: l, "data-testid": "members-card", children: [
        /* @__PURE__ */ s.jsxs(S, { className: "hidden", children: [
          /* @__PURE__ */ s.jsx(C, { children: "Newsletters" }),
          /* @__PURE__ */ s.jsx(v, { children: "How did this post perform" })
        ] }),
        /* @__PURE__ */ s.jsx(w, { className: "p-0", children: /* @__PURE__ */ s.jsxs("div", { className: `flex flex-col md:grid md:items-stretch ${e?.paidMembersEnabled ? "md:grid-cols-3" : "md:grid-cols-1"}`, children: [
          /* @__PURE__ */ s.jsxs(M, { className: "grow", children: [
            /* @__PURE__ */ s.jsx(H, { onClick: () => {
              c(`signup:'${n}'+conversion:-'${n}'`);
            }, children: "View members →" }),
            /* @__PURE__ */ s.jsxs(k, { onClick: () => {
              c(`signup:'${n}'+conversion:-'${n}'`);
            }, children: [
              /* @__PURE__ */ s.jsx(bs, { strokeWidth: 1.5 }),
              "Free members"
            ] }),
            /* @__PURE__ */ s.jsx(T, { children: /* @__PURE__ */ s.jsx(R, { children: b(r?.free_members || 0) }) })
          ] }),
          e?.paidMembersEnabled && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
            /* @__PURE__ */ s.jsxs(M, { className: "grow", children: [
              /* @__PURE__ */ s.jsx(H, { onClick: () => {
                c(`conversion:'${n}'`);
              }, children: "View members →" }),
              /* @__PURE__ */ s.jsxs(k, { onClick: () => {
                c(`conversion:'${n}'`);
              }, children: [
                /* @__PURE__ */ s.jsx(Y, { strokeWidth: 1.5 }),
                "Paid members"
              ] }),
              /* @__PURE__ */ s.jsx(T, { children: /* @__PURE__ */ s.jsx(R, { children: b(r?.paid_members || 0) }) })
            ] }),
            /* @__PURE__ */ s.jsxs(M, { className: "grow", children: [
              /* @__PURE__ */ s.jsxs(k, { children: [
                /* @__PURE__ */ s.jsx(Z, { strokeWidth: 1.5 }),
                "MRR"
              ] }),
              /* @__PURE__ */ s.jsx(T, { children: /* @__PURE__ */ s.jsxs(R, { children: [
                "+",
                o,
                U(r?.mrr || 0)
              ] }) })
            ] })
          ] })
        ] }) })
      ] }),
      !e?.paidMembersEnabled && /* @__PURE__ */ s.jsx(W, {}),
      /* @__PURE__ */ s.jsx(
        Ns,
        {
          className: l,
          data: m,
          mode: "growth",
          siteIcon: u,
          siteUrl: i
        }
      )
    ] }) })
  ] });
}, Hs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  centsToDollars: U,
  default: Ss
}, Symbol.toStringTag, { value: "Module" }));
export {
  ys as D,
  U as c,
  Hs as g,
  ws as u
};
//# sourceMappingURL=growth-COoL1kMe.js.map
