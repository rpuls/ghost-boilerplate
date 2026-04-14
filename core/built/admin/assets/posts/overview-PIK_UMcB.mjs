import { c as J, d as V, a as g, j as e, f as T, e as y, g as ie, b as le } from "./index-BWRct4la.mjs";
import { u as ne, c as ce, D as oe } from "./growth-DWv6T_hh.mjs";
import { K as R, a as I, b as D, c as S } from "./stats-Dswp89vu.mjs";
import { B as z, H as X } from "./button-BOW1bLRE.mjs";
import { C as E, a as $, b as M, M as de, c as C, K as A, d as K, e as O, G as q, u as U, h as me, i as xe, P as he, f as ue, S as pe } from "./post-analytics-header-Cj53GuIA.mjs";
import { D as je, a as fe, b as ge, c as ve, d as be, e as Ne, f as ye, g as we } from "./data-list-BSCYRXjk.mjs";
import { B as W } from "./loading-indicator-D8SILWlO.mjs";
import { S as P } from "./separator-eM4IfLr1.mjs";
import { u as ke, p as Ce, N as Le, c as _e } from "./links-Sk8w0gyH.mjs";
import { L as Te } from "./post-share-modal-DfVCjWzg.mjs";
import { G as Re, S as Ie, K as De } from "./kpis-BnWwIC_x.mjs";
import { E as Se } from "./empty-indicator-DjHtkWLJ.mjs";
import { u as Z, S as Ae } from "./post-analytics-context-CJibQt1w.mjs";
import { S as Q } from "./skeleton-DhEoQOK3.mjs";
import { g as Ke, a as Oe, f as Y, s as Pe } from "./app-utils-bFFqatF8.mjs";
const Ve = ({ post: d, isNewsletterStatsLoading: n, isWebShown: u }) => {
  const { postId: s } = J(), t = V(), r = g(() => {
    var v, b, N;
    const o = ((v = d.email) == null ? void 0 : v.opened_count) || 0, i = ((b = d.email) == null ? void 0 : b.email_count) || 0, h = ((N = d.count) == null ? void 0 : N.clicks) || 0;
    return {
      opened: o,
      clicked: h,
      openedRate: i > 0 ? o / i : 0,
      clickedRate: i > 0 ? h / i : 0,
      sent: i
    };
  }, [d]), { data: l } = ke({
    searchParams: {
      filter: `post_id:'${s}'`
    }
  }), p = g(() => Ce(l), [l]), m = [
    { datatype: "Clicked", value: r.clickedRate, fill: "url(#gradientTeal)", color: "var(--chart-teal)" },
    { datatype: "Opened", value: r.openedRate, fill: "url(#gradientBlue)", color: "var(--chart-blue)" }
  ], a = {
    percentage: {
      label: "Opened"
    },
    Average: {
      label: "Clicked"
    },
    "This newsletter": {
      label: "Opened"
    }
  }, c = d.email_only || !u;
  return /* @__PURE__ */ e.jsxs(E, { className: `group/datalist overflow-hidden ${c && "col-span-2"}`, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "relative flex items-center justify-between gap-6", children: [
      /* @__PURE__ */ e.jsx($, { children: /* @__PURE__ */ e.jsxs(M, { className: "flex items-center gap-1.5 text-lg", children: [
        /* @__PURE__ */ e.jsx(de, { size: 16, strokeWidth: 1.5 }),
        "Newsletter performance"
      ] }) }),
      /* @__PURE__ */ e.jsx(z, { className: "absolute right-6 translate-x-10 opacity-0 transition-all duration-300 group-hover/datalist:translate-x-0 group-hover/datalist:opacity-100", size: "sm", variant: "outline", onClick: () => {
        t(`/posts/analytics/${s}/newsletter`);
      }, children: "View more" })
    ] }),
    n ? /* @__PURE__ */ e.jsx(C, { children: /* @__PURE__ */ e.jsx("div", { className: "mx-auto flex min-h-[250px] items-center justify-center xl:size-full", children: /* @__PURE__ */ e.jsx(W, {}) }) }) : /* @__PURE__ */ e.jsxs(C, { className: `${c && "grid grid-cols-2"}`, children: [
      /* @__PURE__ */ e.jsxs("div", { className: `${c && "border-r pr-6"}`, children: [
        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-6", children: [
          /* @__PURE__ */ e.jsx(A, { className: "group relative flex grow flex-row items-start justify-between gap-5 border-none px-0 pt-0", children: /* @__PURE__ */ e.jsxs("div", { className: "flex grow flex-col gap-1.5 border-none pb-0", children: [
            /* @__PURE__ */ e.jsx(K, { color: "var(--chart-blue)", children: "Open rate" }),
            /* @__PURE__ */ e.jsx(
              O,
              {
                value: T(r.openedRate)
              }
            )
          ] }) }),
          /* @__PURE__ */ e.jsx(A, { className: "group relative flex grow flex-row items-start justify-between gap-5 border-none px-0 pt-0", children: /* @__PURE__ */ e.jsxs("div", { className: "flex grow flex-col gap-1.5 border-none pb-0", children: [
            /* @__PURE__ */ e.jsx(K, { color: "var(--chart-teal)", children: "Click rate" }),
            /* @__PURE__ */ e.jsx(
              O,
              {
                value: T(r.clickedRate)
              }
            )
          ] }) })
        ] }),
        !c && /* @__PURE__ */ e.jsx(P, {}),
        /* @__PURE__ */ e.jsx("div", { className: "mx-auto my-6 h-[240px]", children: /* @__PURE__ */ e.jsx(
          Le,
          {
            className: "pointer-events-none aspect-square h-[240px]",
            config: a,
            data: m,
            tooltip: !1
          }
        ) })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: `${c && "pl-6"}`, children: [
        !c && /* @__PURE__ */ e.jsx(P, {}),
        /* @__PURE__ */ e.jsxs("div", { className: c ? "" : "pt-3", children: [
          /* @__PURE__ */ e.jsxs("div", { className: `flex items-center justify-between gap-3 ${c ? "pb-3" : "py-3"}`, children: [
            /* @__PURE__ */ e.jsx("span", { className: "font-medium text-muted-foreground", children: "Top clicked links in this email" }),
            /* @__PURE__ */ e.jsx(X, { children: "Members" })
          ] }),
          p.length > 0 ? /* @__PURE__ */ e.jsx(je, { className: "", children: /* @__PURE__ */ e.jsx(fe, { children: p.slice(0, c ? 10 : 5).map((o) => {
            const i = r.clicked > 0 ? o.count / r.clicked : 0;
            return /* @__PURE__ */ e.jsxs(ge, { children: [
              /* @__PURE__ */ e.jsx(ve, { style: {
                width: `${i ? Math.round(i * 100) : 0}%`
              } }),
              /* @__PURE__ */ e.jsx(be, { children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2 overflow-hidden", children: [
                /* @__PURE__ */ e.jsx(Te, { className: "shrink-0 text-muted-foreground", size: 16, strokeWidth: 1.5 }),
                /* @__PURE__ */ e.jsx(
                  "a",
                  {
                    className: "block truncate font-medium hover:underline",
                    href: o.link.to,
                    rel: "noreferrer",
                    target: "_blank",
                    title: o.link.to,
                    children: _e(o.link.to, !0)
                  }
                )
              ] }) }),
              /* @__PURE__ */ e.jsxs(Ne, { children: [
                /* @__PURE__ */ e.jsx(ye, { children: y(o.count || 0) }),
                /* @__PURE__ */ e.jsx(we, { children: T(i) })
              ] })
            ] }, o.link.link_id);
          }) }) }) : /* @__PURE__ */ e.jsx("div", { className: "py-20 text-center text-sm text-gray-700", children: "You have no links in your post." })
        ] })
      ] })
    ] })
  ] });
}, ze = ({ chartData: d, range: n, isLoading: u, visitors: s, sourcesData: t, isNewsletterShown: r = !0 }) => {
  const { postId: l } = J(), p = V(), { data: m } = Z(), a = m == null ? void 0 : m.url, c = m == null ? void 0 : m.icon, o = g(() => t ? t.reduce((i, h) => i + Number(h.visits || 0), 0) : 0, [t]);
  return /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsxs(E, { className: `group/datalist overflow-hidden ${!r && "col-span-2"}`, "data-testid": "web-performance", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "relative flex items-center justify-between gap-6", children: [
      /* @__PURE__ */ e.jsx($, { children: /* @__PURE__ */ e.jsxs(M, { className: "flex items-center gap-1.5 text-lg", children: [
        /* @__PURE__ */ e.jsx(q, { size: 16, strokeWidth: 1.5 }),
        "Web performance"
      ] }) }),
      /* @__PURE__ */ e.jsx(z, { className: "absolute right-6 translate-x-10 opacity-0 transition-all duration-300 group-hover/datalist:translate-x-0 group-hover/datalist:opacity-100", size: "sm", variant: "outline", onClick: () => {
        p(`/posts/analytics/${l}/web`);
      }, children: "View more" })
    ] }),
    /* @__PURE__ */ e.jsxs(C, { children: [
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsx(A, { className: "group relative flex grow flex-row items-start justify-between gap-5 border-none px-0 pt-0", "data-testid": "unique-visitors", children: /* @__PURE__ */ e.jsxs("div", { className: "flex grow flex-col gap-1.5 border-none pb-0", children: [
          /* @__PURE__ */ e.jsx(K, { color: "var(--chart-blue)", children: "Unique visitors" }),
          /* @__PURE__ */ e.jsx(
            O,
            {
              value: y(s)
            }
          )
        ] }) }),
        /* @__PURE__ */ e.jsx(P, {}),
        /* @__PURE__ */ e.jsx("div", { className: "max-h-[288px] py-6 [&_.recharts-cartesian-axis-tick-value]:fill-gray-500", children: u ? /* @__PURE__ */ e.jsx("div", { className: "flex h-[16vw] min-h-[240px] items-center justify-center", children: /* @__PURE__ */ e.jsx(W, {}) }) : /* @__PURE__ */ e.jsx(
          Re,
          {
            className: "aspect-auto h-[240px] w-full",
            color: "var(--chart-blue)",
            data: d || [],
            id: "visitors",
            range: n,
            syncId: "overview-charts"
          }
        ) })
      ] }),
      r && /* @__PURE__ */ e.jsxs("div", { className: r ? "border-t pt-3" : "-mt-3", children: [
        /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between gap-3 py-3", children: [
          /* @__PURE__ */ e.jsx("span", { className: "font-medium text-muted-foreground", children: "How readers found this post" }),
          /* @__PURE__ */ e.jsx(X, { children: "Visitors" })
        ] }) }),
        t && t.length > 0 ? /* @__PURE__ */ e.jsx(
          Ie,
          {
            data: t,
            range: n,
            siteIcon: c,
            siteUrl: a,
            tableOnly: !0,
            topSourcesLimit: 5,
            totalVisitors: o
          }
        ) : /* @__PURE__ */ e.jsx(
          Se,
          {
            className: "h-full py-10",
            description: "Once someone visits this post, sources will show here",
            title: "No visitors since you published this post",
            children: /* @__PURE__ */ e.jsx(q, { strokeWidth: 1.5 })
          }
        )
      ] })
    ] })
  ] }) });
}, es = () => {
  var H;
  const d = V(), { statsConfig: n, isLoading: u, post: s, isPostLoading: t, postId: r } = Z(), { totals: l, isLoading: p, currencySymbol: m } = ne(r), { appSettings: a } = ie(), { emailTrackClicks: c, emailTrackOpens: o } = (a == null ? void 0 : a.analytics) || {}, i = g(() => s != null && s.published_at ? Ke(s.published_at) : Ae.ALL_TIME.value, [s == null ? void 0 : s.published_at]), { startDate: h, endDate: v, timezone: b } = Oe(i), N = g(() => {
    const x = {
      site_uuid: (n == null ? void 0 : n.id) || "",
      date_from: Y(h),
      date_to: Y(v),
      timezone: b,
      post_uuid: ""
    };
    return !t && (s != null && s.uuid) ? {
      ...x,
      post_uuid: s.uuid
    } : x;
  }, [t, s, n == null ? void 0 : n.id, h, v, b]), { data: j, loading: G } = U({
    endpoint: "api_kpis",
    statsConfig: n || { id: "" },
    params: N
  }), ee = g(() => j != null && j.length ? j.reduce((x, f) => {
    const F = Number(f.visits);
    return x + (isNaN(F) ? 0 : F);
  }, 0) : 0, [j]), w = De.visits, se = (H = Pe(j || [], i, w.dataKey, "sum")) == null ? void 0 : H.map((x) => {
    const f = Number(x[w.dataKey]);
    return {
      date: String(x.date),
      value: f,
      formattedValue: w.formatter(f),
      label: w.label
    };
  }), { data: ae, loading: te } = U({
    endpoint: "api_top_sources",
    statsConfig: n || { id: "" },
    params: N
  }), B = u || p || t || G, re = t || u || G, L = me(s) && o && c, _ = !(s != null && s.email_only) && (a == null ? void 0 : a.analytics.webAnalytics), k = a == null ? void 0 : a.analytics.membersTrackSources;
  return le(() => {
    !t && s && xe(s) && !(a != null && a.analytics.webAnalytics) && k && d(`/posts/analytics/${r}/growth`, { replace: !0 });
  }, [t, s, a == null ? void 0 : a.analytics.webAnalytics, d, r, k]), t ? /* @__PURE__ */ e.jsx(W, {}) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(he, { currentTab: "Overview" }),
    /* @__PURE__ */ e.jsx(ue, { children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-6 lg:grid lg:grid-cols-2", children: [
      _ && /* @__PURE__ */ e.jsx(
        ze,
        {
          chartData: se,
          isLoading: re || B || te,
          isNewsletterShown: L,
          range: i,
          sourcesData: ae,
          visitors: ee
        }
      ),
      L && /* @__PURE__ */ e.jsx(
        Ve,
        {
          isNewsletterStatsLoading: t,
          isWebShown: _,
          post: s
        }
      ),
      k && /* @__PURE__ */ e.jsxs(E, { className: "group col-span-2 overflow-hidden p-0", "data-testid": "growth", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "relative flex items-center justify-between gap-6", children: [
          /* @__PURE__ */ e.jsx($, { children: /* @__PURE__ */ e.jsxs(M, { className: "flex items-center gap-1.5 text-lg", children: [
            /* @__PURE__ */ e.jsx(pe, { size: 16, strokeWidth: 1.5 }),
            "Growth"
          ] }) }),
          /* @__PURE__ */ e.jsx(z, { className: "absolute right-6 translate-x-10 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100", size: "sm", variant: "outline", onClick: () => {
            d(`/posts/analytics/${r}/growth`);
          }, children: "View more" })
        ] }),
        /* @__PURE__ */ e.jsx(C, { className: "flex flex-col gap-6 px-0 md:grid md:grid-cols-3 md:items-stretch md:gap-0", children: B ? Array.from({ length: 3 }, (x, f) => /* @__PURE__ */ e.jsxs("div", { className: "h-[98px] gap-1 border-r px-6 py-5 last:border-r-0", children: [
          /* @__PURE__ */ e.jsx(Q, { className: "w-2/3" }),
          /* @__PURE__ */ e.jsx(Q, { className: "h-7 w-12" })
        ] }, f)) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsxs(R, { className: "grow gap-1 py-0", children: [
            /* @__PURE__ */ e.jsx(I, { children: "Free members" }),
            /* @__PURE__ */ e.jsx(D, { children: /* @__PURE__ */ e.jsx(S, { className: "text-[2.2rem]", children: y((l == null ? void 0 : l.free_members) || 0) }) })
          ] }),
          (a == null ? void 0 : a.paidMembersEnabled) && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsxs(R, { className: "grow gap-1 py-0", children: [
              /* @__PURE__ */ e.jsx(I, { children: "Paid members" }),
              /* @__PURE__ */ e.jsx(D, { children: /* @__PURE__ */ e.jsx(S, { className: "text-[2.2rem]", children: y((l == null ? void 0 : l.paid_members) || 0) }) })
            ] }),
            /* @__PURE__ */ e.jsxs(R, { className: "grow gap-1 py-0", children: [
              /* @__PURE__ */ e.jsx(I, { children: "MRR impact" }),
              /* @__PURE__ */ e.jsx(D, { children: /* @__PURE__ */ e.jsxs(S, { className: "text-[2.2rem]", children: [
                m,
                y(ce((l == null ? void 0 : l.mrr) || 0))
              ] }) })
            ] })
          ] })
        ] }) })
      ] }),
      !_ && !L && !k && /* @__PURE__ */ e.jsx(oe, { className: "col-span-2 py-20" })
    ] }) })
  ] });
};
export {
  es as default
};
//# sourceMappingURL=overview-PIK_UMcB.mjs.map
