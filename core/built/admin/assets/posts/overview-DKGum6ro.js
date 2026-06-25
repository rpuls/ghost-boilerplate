import { R as e, i as Y, ah as J, ag as A, af as j, v as C, u as f, a4 as ie, a9 as le } from "./index-Dqn5WIFh.js";
import { u as ne, c as oe, D as ce } from "./growth-COoL1kMe.js";
import { K as L, b as _, a as T, d as S } from "./stats-DFicPtCX.js";
import { B as O } from "./button-CG2Dpjqy.js";
import { C as V, d as E, e as K, a as y, u as F, i as de, j as me, g as pe, f as xe } from "./post-analytics-header-BktlrM_v.js";
import { D as he, i as ue, p as ge, h as je, l as fe, m as ve, n as be, o as Ne } from "./data-list-JslRF2F5.js";
import { B as P } from "./loading-indicator-DAOD6O2b.js";
import { S as R } from "./get-site-timezone-83C41MGz.js";
import { b as X } from "./heading-D3VqNO3z.js";
import { c as ye, i as we, a as q, G as ke, f as Ce, K as Le, g as _e } from "./kpis-C2FEXoUT.js";
import { a as Te, p as Se, N as Re, c as De } from "./links-nzud7t_t.js";
import { M as Ie } from "./mail-CtH0gTpq.js";
import { L as ze } from "./post-share-modal-G8v3ZuSg.js";
import { E as Ae } from "./empty-indicator-C9DbE9wZ.js";
import { u as Z, c as Oe } from "./post-analytics-context-DT3Avn9Q.js";
import { u as U } from "./skeleton-Bihnkn8q.js";
import { h as Ve, e as Ee, d as Q, s as Ke } from "./app-utils-DQ2hixop.js";
const D = ({ children: r, className: t, ...n }) => /* @__PURE__ */ e.jsx(
  "div",
  {
    className: Y(
      "flex flex-col border-r border-border last:border-none items-start gap-4 px-6 py-5 transition-all",
      t
    ),
    ...n,
    children: r
  }
), I = ({ children: r, className: t, color: n, ...s }) => /* @__PURE__ */ e.jsxs("div", { className: Y("flex h-[22px] items-center gap-1.5 text-base font-medium text-muted-foreground [&_svg]:size-4", t), ...s, children: [
  n && /* @__PURE__ */ e.jsx("div", { className: "ml-1 size-2 rounded-full opacity-50", style: { backgroundColor: n } }),
  r
] }), z = ({ value: r, diffDirection: t, diffValue: n, diffTooltip: s }) => {
  let a = null;
  return t && t !== "hidden" && (t === "empty" ? a = /* @__PURE__ */ e.jsx(
    "div",
    {
      className: "flex h-[22px] items-center px-1.5 text-xs leading-none font-medium",
      "data-testid": "kpi-card-header-diff",
      children: n
    }
  ) : a = /* @__PURE__ */ e.jsx(
    we,
    {
      "data-testid": "kpi-card-header-diff",
      direction: t,
      tooltip: s,
      value: n ?? ""
    }
  )), /* @__PURE__ */ e.jsx(
    ye,
    {
      trailing: a,
      value: r,
      valueTestId: "kpi-card-header-value"
    }
  );
}, Pe = ({ post: r, isNewsletterStatsLoading: t, isWebShown: n }) => {
  const { postId: s } = J(), a = A(), i = j(() => {
    const c = r.email?.opened_count || 0, l = r.email?.email_count || 0, x = r.count?.clicks || 0;
    return {
      opened: c,
      clicked: x,
      openedRate: l > 0 ? c / l : 0,
      clickedRate: l > 0 ? x / l : 0,
      sent: l
    };
  }, [r]), { data: p } = Te({
    searchParams: {
      filter: `post_id:'${s}'`
    }
  }), h = j(() => Se(p), [p]), u = [
    { datatype: "Clicked", value: i.clickedRate, fill: "url(#gradientTeal)", color: "var(--chart-teal)" },
    { datatype: "Opened", value: i.openedRate, fill: "url(#gradientBlue)", color: "var(--chart-blue)" }
  ], d = {
    percentage: {
      label: "Opened"
    },
    Average: {
      label: "Clicked"
    },
    "This newsletter": {
      label: "Opened"
    }
  }, o = r.email_only || !n;
  return /* @__PURE__ */ e.jsxs(V, { className: `group/datalist overflow-hidden ${o && "col-span-2"}`, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "relative flex items-center justify-between gap-6", children: [
      /* @__PURE__ */ e.jsx(E, { children: /* @__PURE__ */ e.jsxs(K, { className: "flex items-center gap-1.5 text-lg", children: [
        /* @__PURE__ */ e.jsx(Ie, { size: 16, strokeWidth: 1.5 }),
        "Newsletter performance"
      ] }) }),
      /* @__PURE__ */ e.jsx(O, { className: "absolute right-6 translate-x-10 opacity-0 transition-all duration-300 group-hover/datalist:translate-x-0 group-hover/datalist:opacity-100", size: "sm", variant: "outline", onClick: () => {
        a(`/posts/analytics/${s}/newsletter`);
      }, children: "View more" })
    ] }),
    t ? /* @__PURE__ */ e.jsx(y, { children: /* @__PURE__ */ e.jsx("div", { className: "mx-auto flex min-h-[250px] items-center justify-center xl:size-full", children: /* @__PURE__ */ e.jsx(P, {}) }) }) : /* @__PURE__ */ e.jsxs(y, { className: `${o && "grid grid-cols-2"}`, children: [
      /* @__PURE__ */ e.jsxs("div", { className: `${o && "border-r pr-6"}`, children: [
        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-6", children: [
          /* @__PURE__ */ e.jsx(D, { className: "group relative flex grow flex-row items-start justify-between gap-5 border-none px-0 pt-0", children: /* @__PURE__ */ e.jsxs("div", { className: "flex grow flex-col gap-1.5 border-none pb-0", children: [
            /* @__PURE__ */ e.jsx(I, { color: "var(--chart-blue)", children: "Open rate" }),
            /* @__PURE__ */ e.jsx(
              z,
              {
                value: C(i.openedRate)
              }
            )
          ] }) }),
          /* @__PURE__ */ e.jsx(D, { className: "group relative flex grow flex-row items-start justify-between gap-5 border-none px-0 pt-0", children: /* @__PURE__ */ e.jsxs("div", { className: "flex grow flex-col gap-1.5 border-none pb-0", children: [
            /* @__PURE__ */ e.jsx(I, { color: "var(--chart-teal)", children: "Click rate" }),
            /* @__PURE__ */ e.jsx(
              z,
              {
                value: C(i.clickedRate)
              }
            )
          ] }) })
        ] }),
        !o && /* @__PURE__ */ e.jsx(R, {}),
        /* @__PURE__ */ e.jsx("div", { className: "mx-auto my-6 h-[240px]", children: /* @__PURE__ */ e.jsx(
          Re,
          {
            className: "pointer-events-none aspect-square h-[240px]",
            config: d,
            data: u,
            tooltip: !1
          }
        ) })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: `${o && "pl-6"}`, children: [
        !o && /* @__PURE__ */ e.jsx(R, {}),
        /* @__PURE__ */ e.jsxs("div", { className: o ? "" : "pt-3", children: [
          /* @__PURE__ */ e.jsxs("div", { className: `flex items-center justify-between gap-3 ${o ? "pb-3" : "py-3"}`, children: [
            /* @__PURE__ */ e.jsx("span", { className: "font-medium text-muted-foreground", children: "Top clicked links in this email" }),
            /* @__PURE__ */ e.jsx(X, { children: "Members" })
          ] }),
          h.length > 0 ? /* @__PURE__ */ e.jsx(he, { className: "", children: /* @__PURE__ */ e.jsx(ue, { children: h.slice(0, o ? 10 : 5).map((c) => {
            const l = i.clicked > 0 ? c.count / i.clicked : 0;
            return /* @__PURE__ */ e.jsxs(ge, { children: [
              /* @__PURE__ */ e.jsx(je, { style: {
                width: `${l ? Math.round(l * 100) : 0}%`
              } }),
              /* @__PURE__ */ e.jsx(fe, { children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2 overflow-hidden", children: [
                /* @__PURE__ */ e.jsx(ze, { className: "shrink-0 text-muted-foreground", size: 16, strokeWidth: 1.5 }),
                /* @__PURE__ */ e.jsx(
                  "a",
                  {
                    className: "block truncate font-medium hover:underline",
                    href: c.link.to,
                    rel: "noreferrer",
                    target: "_blank",
                    title: c.link.to,
                    children: De(c.link.to, !0)
                  }
                )
              ] }) }),
              /* @__PURE__ */ e.jsxs(ve, { children: [
                /* @__PURE__ */ e.jsx(be, { children: f(c.count || 0) }),
                /* @__PURE__ */ e.jsx(Ne, { children: C(l) })
              ] })
            ] }, c.link.link_id);
          }) }) }) : /* @__PURE__ */ e.jsx("div", { className: "py-20 text-center text-sm text-gray-700", children: "You have no links in your post." })
        ] })
      ] })
    ] })
  ] });
}, $e = ({ chartData: r, range: t, isLoading: n, visitors: s, sourcesData: a, isNewsletterShown: i = !0 }) => {
  const { postId: p } = J(), h = A(), { data: u } = Z(), d = u?.url, o = u?.icon, c = j(() => a ? a.reduce((l, x) => l + Number(x.visits || 0), 0) : 0, [a]);
  return /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsxs(V, { className: `group/datalist overflow-hidden ${!i && "col-span-2"}`, "data-testid": "web-performance", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "relative flex items-center justify-between gap-6", children: [
      /* @__PURE__ */ e.jsx(E, { children: /* @__PURE__ */ e.jsxs(K, { className: "flex items-center gap-1.5 text-lg", children: [
        /* @__PURE__ */ e.jsx(q, { size: 16, strokeWidth: 1.5 }),
        "Web performance"
      ] }) }),
      /* @__PURE__ */ e.jsx(O, { className: "absolute right-6 translate-x-10 opacity-0 transition-all duration-300 group-hover/datalist:translate-x-0 group-hover/datalist:opacity-100", size: "sm", variant: "outline", onClick: () => {
        h(`/posts/analytics/${p}/web`);
      }, children: "View more" })
    ] }),
    /* @__PURE__ */ e.jsxs(y, { children: [
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsx(D, { className: "group relative flex grow flex-row items-start justify-between gap-5 border-none px-0 pt-0", "data-testid": "unique-visitors", children: /* @__PURE__ */ e.jsxs("div", { className: "flex grow flex-col gap-1.5 border-none pb-0", children: [
          /* @__PURE__ */ e.jsx(I, { color: "var(--chart-blue)", children: "Unique visitors" }),
          /* @__PURE__ */ e.jsx(
            z,
            {
              value: f(s)
            }
          )
        ] }) }),
        /* @__PURE__ */ e.jsx(R, {}),
        /* @__PURE__ */ e.jsx("div", { className: "max-h-[288px] py-6 [&_.recharts-cartesian-axis-tick-value]:fill-gray-500", children: n ? /* @__PURE__ */ e.jsx("div", { className: "flex h-[16vw] min-h-[240px] items-center justify-center", children: /* @__PURE__ */ e.jsx(P, {}) }) : /* @__PURE__ */ e.jsx(
          ke,
          {
            className: "aspect-auto h-[240px] w-full",
            color: "var(--chart-blue)",
            data: r || [],
            id: "visitors",
            range: t,
            syncId: "overview-charts"
          }
        ) })
      ] }),
      i && /* @__PURE__ */ e.jsxs("div", { className: i ? "border-t pt-3" : "-mt-3", children: [
        /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between gap-3 py-3", children: [
          /* @__PURE__ */ e.jsx("span", { className: "font-medium text-muted-foreground", children: "How readers found this post" }),
          /* @__PURE__ */ e.jsx(X, { children: "Visitors" })
        ] }) }),
        a && a.length > 0 ? /* @__PURE__ */ e.jsx(
          Ce,
          {
            data: a,
            range: t,
            siteIcon: o,
            siteUrl: d,
            tableOnly: !0,
            topSourcesLimit: 5,
            totalVisitors: c
          }
        ) : /* @__PURE__ */ e.jsx(
          Ae,
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
}, rs = () => {
  const r = A(), { statsConfig: t, isLoading: n, post: s, isPostLoading: a, postId: i } = Z(), { totals: p, isLoading: h, currencySymbol: u } = ne(i), { appSettings: d } = ie(), { emailTrackClicks: o, emailTrackOpens: c } = d?.analytics || {}, l = j(() => s?.published_at ? Ve(s.published_at) : Oe.ALL_TIME.value, [s?.published_at]), { startDate: x, endDate: $, timezone: M } = Ee(l), W = j(() => {
    const m = {
      site_uuid: t?.id || "",
      date_from: Q(x),
      date_to: Q($),
      timezone: M,
      post_uuid: ""
    };
    return !a && s?.uuid ? {
      ...m,
      post_uuid: s.uuid
    } : m;
  }, [a, s, t?.id, x, $, M]), { data: v, loading: B } = F({
    endpoint: "api_kpis",
    statsConfig: t || { id: "" },
    params: W
  }), ee = j(() => v?.length ? v.reduce((m, g) => {
    const H = Number(g.visits);
    return m + (isNaN(H) ? 0 : H);
  }, 0) : 0, [v]), b = Le.visits, se = Ke(v || [], l, b.dataKey, "sum")?.map((m) => {
    const g = Number(m[b.dataKey]);
    return {
      date: String(m.date),
      value: g,
      formattedValue: b.formatter(g),
      label: b.label
    };
  }), { data: ae, loading: te } = F({
    endpoint: "api_top_sources",
    statsConfig: t || { id: "" },
    params: W
  }), G = n || h || a || B, re = a || n || B, w = de(s) && c && o, k = !s?.email_only && d?.analytics.webAnalytics, N = d?.analytics.membersTrackSources;
  return le(() => {
    !a && s && me(s) && !d?.analytics.webAnalytics && N && r(`/posts/analytics/${i}/growth`, { replace: !0 });
  }, [a, s, d?.analytics.webAnalytics, r, i, N]), a ? /* @__PURE__ */ e.jsx(P, {}) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(pe, { currentTab: "Overview" }),
    /* @__PURE__ */ e.jsx(xe, { children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-6 lg:grid lg:grid-cols-2", children: [
      k && /* @__PURE__ */ e.jsx(
        $e,
        {
          chartData: se,
          isLoading: re || G || te,
          isNewsletterShown: w,
          range: l,
          sourcesData: ae,
          visitors: ee
        }
      ),
      w && /* @__PURE__ */ e.jsx(
        Pe,
        {
          isNewsletterStatsLoading: a,
          isWebShown: k,
          post: s
        }
      ),
      N && /* @__PURE__ */ e.jsxs(V, { className: "group col-span-2 overflow-hidden p-0", "data-testid": "growth", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "relative flex items-center justify-between gap-6", children: [
          /* @__PURE__ */ e.jsx(E, { children: /* @__PURE__ */ e.jsxs(K, { className: "flex items-center gap-1.5 text-lg", children: [
            /* @__PURE__ */ e.jsx(_e, { size: 16, strokeWidth: 1.5 }),
            "Growth"
          ] }) }),
          /* @__PURE__ */ e.jsx(O, { className: "absolute right-6 translate-x-10 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100", size: "sm", variant: "outline", onClick: () => {
            r(`/posts/analytics/${i}/growth`);
          }, children: "View more" })
        ] }),
        /* @__PURE__ */ e.jsx(y, { className: "flex flex-col gap-6 px-0 md:grid md:grid-cols-3 md:items-stretch md:gap-0", children: G ? Array.from({ length: 3 }, (m, g) => /* @__PURE__ */ e.jsxs("div", { className: "h-[98px] gap-1 border-r px-6 py-5 last:border-r-0", children: [
          /* @__PURE__ */ e.jsx(U, { className: "w-2/3" }),
          /* @__PURE__ */ e.jsx(U, { className: "h-7 w-12" })
        ] }, g)) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsxs(L, { className: "grow gap-1 py-0", children: [
            /* @__PURE__ */ e.jsx(_, { children: "Free members" }),
            /* @__PURE__ */ e.jsx(T, { children: /* @__PURE__ */ e.jsx(S, { className: "text-[2.2rem]", children: f(p?.free_members || 0) }) })
          ] }),
          d?.paidMembersEnabled && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsxs(L, { className: "grow gap-1 py-0", children: [
              /* @__PURE__ */ e.jsx(_, { children: "Paid members" }),
              /* @__PURE__ */ e.jsx(T, { children: /* @__PURE__ */ e.jsx(S, { className: "text-[2.2rem]", children: f(p?.paid_members || 0) }) })
            ] }),
            /* @__PURE__ */ e.jsxs(L, { className: "grow gap-1 py-0", children: [
              /* @__PURE__ */ e.jsx(_, { children: "MRR impact" }),
              /* @__PURE__ */ e.jsx(T, { children: /* @__PURE__ */ e.jsxs(S, { className: "text-[2.2rem]", children: [
                u,
                f(oe(p?.mrr || 0))
              ] }) })
            ] })
          ] })
        ] }) })
      ] }),
      !k && !w && !N && /* @__PURE__ */ e.jsx(ce, { className: "col-span-2 py-20" })
    ] }) })
  ] });
};
export {
  rs as default
};
//# sourceMappingURL=overview-DKGum6ro.js.map
