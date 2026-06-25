import { a5 as U, X as $, a1 as ae, a4 as se, O as F, a0 as m, y as D, W as re, J as e, z as S, w as ne, q as xe, N as ge, R as J } from "./index-GkZC6bm6.js";
import { by as fe, g as te, N as be, Q as je, O as ve, P as Y, Y as ke, s as we, o as Ne, aU as ye, aV as Se, aY as _e, w as Ce, ao as Te, B as De, S as le, a8 as ie, bg as X, at as Re, ay as Le, aa as Me, az as Oe, au as Pe, av as Be, ax as Ee, aw as Ae, bh as q, bb as W, bN as ze, bI as Ve, bJ as He, aG as Ke, aF as We, ag as $e, K as Fe, aH as Ie, i as ce, j as oe, m as Ge, n as Ye, k as Qe, aE as Ue, h as Je } from "./stats-BfDVnooj.js";
import { T as Xe, c as qe, a as Q, b as P, K as Ze } from "./kpi-tabs-B12vm9Mm.js";
import { B as et, T as tt, a as at, e as st, f as K, d as E, S as H, b as L } from "./sort-button-UMaY-izr.js";
const rt = ({ active: s, payload: t }) => {
  if (!s || !t?.length)
    return null;
  const r = t[0].payload, n = typeof r.send_date == "string" ? r.send_date : r.send_date.toISOString().split("T")[0];
  return /* @__PURE__ */ e.jsxs("div", { className: "max-w-[240px] min-w-[220px] rounded-lg border bg-background px-3 py-2 shadow-lg", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "mb-2 flex w-full flex-col border-b pb-2", children: [
      /* @__PURE__ */ e.jsx("span", { className: "text-sm leading-tight font-semibold", children: r.post_title }),
      /* @__PURE__ */ e.jsxs("span", { className: "text-sm text-muted-foreground", children: [
        "Sent on ",
        ne(n)
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "mb-1 flex w-full justify-between", children: [
      /* @__PURE__ */ e.jsx("span", { className: "font-medium text-muted-foreground", children: "Sent" }),
      /* @__PURE__ */ e.jsx("div", { className: "ml-2 w-full text-right font-mono", children: D(r.sent_to) })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "mb-1 flex w-full justify-between", children: [
      /* @__PURE__ */ e.jsx("span", { className: "font-medium text-muted-foreground", children: "Opens" }),
      /* @__PURE__ */ e.jsxs("div", { className: "ml-2 w-full text-right font-mono", children: [
        /* @__PURE__ */ e.jsxs("span", { className: "text-muted-foreground", children: [
          D(r.total_opens),
          " / "
        ] }),
        S(r.open_rate)
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "mb-1 flex w-full justify-between", children: [
      /* @__PURE__ */ e.jsx("span", { className: "font-medium text-muted-foreground", children: "Clicks" }),
      /* @__PURE__ */ e.jsxs("div", { className: "ml-2 w-full text-right font-mono", children: [
        /* @__PURE__ */ e.jsxs("span", { className: "text-muted-foreground", children: [
          D(r.total_clicks),
          " / "
        ] }),
        S(r.click_rate)
      ] })
    ] })
  ] });
}, nt = ({
  subscribersData: s,
  avgsData: t,
  totals: r,
  isLoading: n,
  isAvgsLoading: a,
  initialTab: i = "total-subscribers"
}) => {
  const [l, h] = U(i), [p, v] = U(!1), { range: u } = $(), w = ae(), [b] = se(), { appSettings: N } = F(), { emailTrackClicks: j, emailTrackOpens: y } = N?.analytics || {}, { totalSubscribers: M, avgOpenRate: d, avgClickRate: o } = r, f = m(() => {
    if (!s || s.length === 0)
      return [];
    let c = [];
    return c = fe(s, u, "value", "exact"), c.map((R) => ({
      ...R,
      formattedValue: D(R.value),
      label: "Total Subscribers"
    }));
  }, [s, u]), _ = m(() => {
    if (!f || f.length <= 1)
      return {
        direction: "same",
        value: "0%"
      };
    const c = f[0]?.value ?? 0, k = f[f.length - 1]?.value ?? 0;
    let R = "same";
    k > c ? R = "up" : k < c && (R = "down");
    let B;
    if (c === 0)
      B = k === 0 ? "0%" : "+100%";
    else {
      const A = (k - c) / c * 100, z = Math.round(A * 10) / 10;
      B = `${A >= 0 ? "+" : ""}${z}%`;
    }
    return { direction: R, value: B };
  }, [f]);
  re(() => {
    h(i);
  }, [i]);
  const x = (c) => {
    h(c);
    const k = new URLSearchParams(b);
    k.set("tab", c), w(`?${k.toString()}`, { replace: !0 });
  }, C = {
    open_rate: {
      label: "Open rate"
    }
  }, g = m(() => ({
    "total-subscribers": {
      color: "var(--chart-darkblue)",
      datakey: "value"
    },
    "avg-open-rate": {
      color: "var(--chart-blue)",
      datakey: "open_rate"
    },
    "avg-click-rate": {
      color: "var(--chart-teal)",
      datakey: "click_rate"
    }
  }), []), { barDomain: T, barTicks: O } = m(() => {
    if (!t || t.length === 0 || l === "total-subscribers")
      return { barDomain: [0, 1], barTicks: [0, 1] };
    const c = g[l]?.datakey;
    if (!c)
      return { barDomain: [0, 1], barTicks: [0, 1] };
    const k = t.map((G) => G[c]).filter((G) => typeof G == "number");
    if (k.length === 0)
      return { barDomain: [0, 1], barTicks: [0, 1] };
    const R = Math.min(...k), B = Math.max(...k), A = Math.floor(R * 10) / 10, z = Math.ceil(B * 10) / 10, V = Math.max(0, A), ee = z === V ? V + 0.1 : z;
    return {
      barDomain: [V, ee],
      barTicks: [V, ee]
    };
  }, [t, l, g]);
  if (n)
    return /* @__PURE__ */ e.jsx("div", { className: "-mb-6 flex h-[calc(16vw+132px)] w-full items-start justify-center", children: /* @__PURE__ */ e.jsx(te, {}) });
  let I = "grid-cols-3";
  (!j || !y) && (I = "grid-cols-2"), !j && !y && (I = "grid-cols-1");
  const he = l === "avg-open-rate" && d > T[0] && d < T[1] || l === "avg-click-rate" && o > T[0] && o < T[1], Z = l === "avg-open-rate" ? d : o;
  return /* @__PURE__ */ e.jsxs(Xe, { defaultValue: i, variant: "kpis", children: [
    /* @__PURE__ */ e.jsxs(qe, { className: `-mx-6 hidden grid-cols-3 md:visible! md:grid! ${I}`, children: [
      /* @__PURE__ */ e.jsx(Q, { className: `${!y && !j && "cursor-auto after:hidden"}`, value: "total-subscribers", onClick: () => {
        x("total-subscribers");
      }, children: /* @__PURE__ */ e.jsx(
        P,
        {
          color: g["total-subscribers"].color,
          "data-testid": "total-subscribers-value",
          diffDirection: _.direction,
          diffValue: _.value,
          label: "Total subscribers",
          value: D(M)
        }
      ) }),
      y && /* @__PURE__ */ e.jsx(Q, { value: "avg-open-rate", onClick: () => {
        x("avg-open-rate");
      }, children: /* @__PURE__ */ e.jsx(
        P,
        {
          className: a ? "opacity-50" : "",
          color: g["avg-open-rate"].color,
          label: "Avg. open rate",
          value: S(d)
        }
      ) }),
      j && /* @__PURE__ */ e.jsx(Q, { value: "avg-click-rate", onClick: () => {
        x("avg-click-rate");
      }, children: /* @__PURE__ */ e.jsx(
        P,
        {
          className: a ? "opacity-50" : "",
          color: g["avg-click-rate"].color,
          label: "Avg. click rate",
          value: S(o)
        }
      ) })
    ] }),
    /* @__PURE__ */ e.jsxs(be, { children: [
      /* @__PURE__ */ e.jsx(je, { className: "md:hidden", asChild: !0, children: /* @__PURE__ */ e.jsxs(Ze, { children: [
        l === "total-subscribers" && /* @__PURE__ */ e.jsx(
          P,
          {
            color: g["total-subscribers"].color,
            label: "Total subscribers",
            value: D(M)
          }
        ),
        l === "avg-open-rate" && y && /* @__PURE__ */ e.jsx(
          P,
          {
            className: a ? "opacity-50" : "",
            color: g["avg-open-rate"].color,
            label: "Avg. open rate",
            value: S(d)
          }
        ),
        l === "avg-click-rate" && j && /* @__PURE__ */ e.jsx(
          P,
          {
            className: a ? "opacity-50" : "",
            color: g["avg-click-rate"].color,
            label: "Avg. click rate",
            value: S(o)
          }
        )
      ] }) }),
      /* @__PURE__ */ e.jsxs(ve, { align: "end", className: "w-56", children: [
        /* @__PURE__ */ e.jsx(Y, { onClick: () => x("total-subscribers"), children: "Total subscribers" }),
        y && /* @__PURE__ */ e.jsx(Y, { onClick: () => x("avg-open-rate"), children: "Avg. open rate" }),
        j && /* @__PURE__ */ e.jsx(Y, { onClick: () => x("avg-click-rate"), children: "Avg. click rate" })
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "my-4 [&_.recharts-cartesian-axis-tick-value]:fill-gray-500", children: [
      l === "total-subscribers" && /* @__PURE__ */ e.jsx(
        ke,
        {
          className: "-mb-3 h-[16vw] max-h-[320px] min-h-[180px] w-full",
          color: g["total-subscribers"].color,
          data: f,
          id: "mrr",
          range: u
        }
      ),
      (l === "avg-open-rate" && y || l === "avg-click-rate" && j) && /* @__PURE__ */ e.jsx(e.Fragment, { children: a ? /* @__PURE__ */ e.jsx("div", { className: "h-[320px] w-full items-center justify-center", children: /* @__PURE__ */ e.jsx(te, {}) }) : t && t.length > 0 ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(we, { className: "aspect-auto h-[200px] w-full md:h-[220px] xl:h-[320px]", config: C, children: /* @__PURE__ */ e.jsxs(
          et,
          {
            className: p ? "cursor-pointer!" : "",
            data: t,
            margin: {
              top: 20
            },
            onClick: (c) => {
              c.activePayload && c.activePayload[0].payload.post_id && w(`/posts/analytics/${c.activePayload[0].payload.post_id}`, { crossApp: !0 });
            },
            onMouseLeave: () => v(!1),
            onMouseMove: (c) => {
              v(!!(c.activePayload && c.activePayload[0].payload.post_id));
            },
            children: [
              /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsxs("linearGradient", { id: "barGradient", x1: "0", x2: "0", y1: "0", y2: "1", children: [
                /* @__PURE__ */ e.jsx("stop", { offset: "0%", stopColor: g[l].color, stopOpacity: 0.8 }),
                /* @__PURE__ */ e.jsx("stop", { offset: "100%", stopColor: g[l].color, stopOpacity: 0.6 })
              ] }) }),
              /* @__PURE__ */ e.jsx(Ne, { horizontal: !0, stroke: "var(--border)", vertical: !1 }),
              /* @__PURE__ */ e.jsx(
                ye,
                {
                  axisLine: { stroke: "var(--border)", strokeWidth: 1 },
                  dataKey: "post_id",
                  interval: 0,
                  stroke: "var(--border)",
                  tickFormatter: () => "",
                  tickLine: !1,
                  tickMargin: 10
                }
              ),
              /* @__PURE__ */ e.jsx(
                Se,
                {
                  axisLine: !1,
                  domain: T,
                  tickFormatter: (c) => S(c),
                  tickLine: !1,
                  ticks: O,
                  width: _e(O, (c) => S(c))
                }
              ),
              /* @__PURE__ */ e.jsx(
                Ce,
                {
                  content: /* @__PURE__ */ e.jsx(rt, {}),
                  cursor: !1,
                  isAnimationActive: !1,
                  position: { y: 10 }
                }
              ),
              he && /* @__PURE__ */ e.jsx(Te, { label: { value: `${S(Z)}`, position: "left", offset: 8, fill: "var(--muted-foreground)" }, opacity: 0.5, stroke: "var(--muted-foreground)", strokeDasharray: "4 4", y: Z }),
              /* @__PURE__ */ e.jsx(
                De,
                {
                  activeBar: { fillOpacity: 1 },
                  dataKey: g[l].datakey,
                  fill: "url(#barGradient)",
                  fillOpacity: 0.6,
                  isAnimationActive: !1,
                  maxBarSize: 32,
                  minPointSize: 3,
                  radius: 4
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ e.jsxs("div", { className: "-mt-4 text-center text-sm text-muted-foreground", children: [
          "Newsletters ",
          l === "avg-open-rate" ? "opens" : "clicks",
          " in this period"
        ] })
      ] }) : /* @__PURE__ */ e.jsx(
        le,
        {
          className: "size-full py-20",
          title: `No newsletters ${X(u)}`,
          children: /* @__PURE__ */ e.jsx(ie, { strokeWidth: 1.5 })
        }
      ) })
    ] })
  ] });
}, lt = ({ newsletters: s }) => {
  const { selectedNewsletterId: t, setSelectedNewsletterId: r } = $(), n = m(() => s?.filter((a) => a.status === "active") || [], [s]);
  return re(() => {
    if (n.length > 0 && !t) {
      const a = n.find((i) => i.sort_order === 0);
      r(a ? a.id : n[0].id);
    }
  }, [n, t, r]), n.length <= 1 ? null : /* @__PURE__ */ e.jsxs(
    Re,
    {
      value: t || "",
      onValueChange: (a) => {
        r(a);
      },
      children: [
        /* @__PURE__ */ e.jsxs(Le, { className: "w-auto", children: [
          /* @__PURE__ */ e.jsx(Me, { className: "mr-2", size: 16, strokeWidth: 1.5 }),
          /* @__PURE__ */ e.jsx(Oe, { placeholder: "Select a newsletter" })
        ] }),
        /* @__PURE__ */ e.jsx(Pe, { align: "end", children: /* @__PURE__ */ e.jsxs(Be, { children: [
          /* @__PURE__ */ e.jsx(Ee, { children: "Newsletters" }),
          n.map((a) => /* @__PURE__ */ e.jsx(Ae, { value: a.id, children: a.name }, a.id))
        ] }) })
      ]
    }
  );
}, it = "NewslettersResponseType", ct = xe({
  dataType: it,
  path: "/newsletters/",
  defaultSearchParams: { include: "count.active_members,count.posts", limit: "50" },
  defaultNextPageParams: (s, t) => ({
    ...t,
    page: (s.meta?.pagination.next || 1).toString()
  }),
  returnData: (s) => {
    const { pages: t } = s, r = t.flatMap((a) => a.newsletters), n = t[t.length - 1].meta;
    return {
      newsletters: r,
      meta: n,
      isEnd: n ? n.pagination.pages === n.pagination.page : !0
    };
  }
}), ot = (s, t, r = !0) => {
  const n = s ?? 30, { startDate: a, endDate: i } = m(() => q(n), [n]), l = m(() => {
    const p = {
      date_from: W(a),
      date_to: W(i)
    };
    return t && (p.newsletter_id = t), p;
  }, [a, i, t]), h = ze({ searchParams: l, enabled: r });
  return r ? h : {
    data: void 0,
    isLoading: !1,
    error: null,
    isError: !1,
    refetch: h.refetch
  };
}, dt = (s, t, r, n = !0) => {
  const a = s ?? 30, i = t ?? "date desc", { startDate: l, endDate: h } = m(() => q(a), [a]), p = m(() => {
    const u = {
      date_from: W(l),
      date_to: W(h),
      order: i
    };
    return r && (u.newsletter_id = r), u;
  }, [l, h, i, r]), v = Ve({ searchParams: p, enabled: n });
  return n ? v : {
    data: void 0,
    isLoading: !1,
    error: null,
    isError: !1,
    refetch: v.refetch
  };
}, ut = (s, t = [], r = !0) => {
  const n = m(() => {
    const i = {};
    return s && (i.newsletter_id = s), t.length > 0 && (i.post_ids = t.join(",")), i;
  }, [s, t]), a = He({ searchParams: n, enabled: r });
  return r ? a : {
    data: void 0,
    isLoading: !1,
    error: null,
    isError: !1,
    refetch: a.refetch
  };
}, de = (s, t, r, n = !0) => {
  const a = dt(s, t, r, n), i = m(() => a.data?.stats ? a.data.stats.map((p) => p.post_id) : [], [a.data]), l = ut(
    r,
    i,
    n && i.length > 0
  );
  return {
    data: m(() => {
      if (!a.data?.stats)
        return;
      const p = a.data.stats, v = l.data?.stats || [], u = /* @__PURE__ */ new Map();
      v.forEach((b) => {
        u.set(b.post_id, b);
      });
      const w = p.map((b) => {
        const N = u.get(b.post_id);
        return {
          ...b,
          total_clicks: N?.total_clicks || 0,
          click_rate: N?.click_rate || 0
        };
      });
      return {
        ...a.data,
        stats: w
      };
    }, [a.data, l.data]),
    isLoading: a.isLoading,
    isClicksLoading: l.isLoading,
    error: a.error || l.error,
    isError: a.isError || l.isError,
    refetch: () => {
      a.refetch(), l.refetch();
    }
  };
}, ue = J.memo(({ range: s, selectedNewsletterId: t, shouldFetchStats: r, sortBy: n }) => {
  const a = ae(), { settings: i } = $(), l = String(i.find((d) => d.key === "timezone")?.value || "Etc/UTC"), { data: h, isLoading: p, isClicksLoading: v } = de(
    s,
    n,
    // Reactive to sort changes, but only affects this component
    t || void 0,
    !!r
  ), { appSettings: u } = F(), { emailTrackClicks: w, emailTrackOpens: b } = u?.analytics || {}, N = m(() => h?.stats || [], [h]), j = b && w ? 5 : b || w ? 4 : 3, y = m(() => /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsx(K, { className: "last:border-none [&>td]:py-2.5", children: /* @__PURE__ */ e.jsx(L, { className: "font-medium", colSpan: j, children: /* @__PURE__ */ e.jsx(Ue, { className: "mt-5" }) }) }) }), [j]), M = m(() => N.length > 0 ? /* @__PURE__ */ e.jsx(e.Fragment, { children: N.map((d) => /* @__PURE__ */ e.jsxs(K, { className: "last:border-none [&>td]:py-2.5", children: [
    /* @__PURE__ */ e.jsx(L, { className: "font-medium", children: /* @__PURE__ */ e.jsx("div", { className: "group/link inline-flex items-center gap-2", children: d.post_id ? /* @__PURE__ */ e.jsx(Je, { className: "h-auto p-0 text-left whitespace-normal hover:underline!", title: "View post analytics", variant: "link", onClick: () => {
      a(`/posts/analytics/${d.post_id}/`, { crossApp: !0 });
    }, children: d.post_title }) : /* @__PURE__ */ e.jsx(e.Fragment, { children: d.post_title }) }) }),
    /* @__PURE__ */ e.jsx(L, { className: "text-sm whitespace-nowrap", children: ne(d.send_date, l) }),
    /* @__PURE__ */ e.jsx(L, { className: "text-right font-mono text-sm", children: D(d.sent_to) }),
    b && /* @__PURE__ */ e.jsxs(L, { className: "text-right font-mono text-sm", children: [
      /* @__PURE__ */ e.jsx("span", { className: "group-hover:hidden", children: S(d.open_rate) }),
      /* @__PURE__ */ e.jsx("span", { className: "hidden group-hover:visible! group-hover:block!", children: D(d.total_opens) })
    ] }),
    w && /* @__PURE__ */ e.jsx(L, { className: "text-right font-mono text-sm", children: v ? /* @__PURE__ */ e.jsx("span", { className: "inline-block h-4 w-8 animate-pulse rounded bg-gray-200" }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx("span", { className: "group-hover:hidden", children: S(d.click_rate) }),
      /* @__PURE__ */ e.jsx("span", { className: "hidden group-hover:visible! group-hover:block!", children: D(d.total_clicks) })
    ] }) })
  ] }, d.post_id)) }) : /* @__PURE__ */ e.jsx(K, { className: "border-none hover:bg-transparent", children: /* @__PURE__ */ e.jsx(L, { className: "text-center group-hover:bg-transparent!", colSpan: j, children: /* @__PURE__ */ e.jsx(
    le,
    {
      className: "size-full py-20",
      title: `No newsletters ${X(s)}`,
      children: /* @__PURE__ */ e.jsx(ie, { strokeWidth: 1.5 })
    }
  ) }) }), [N, v, a, w, b, s]);
  return p || !h ? y : M;
});
ue.displayName = "NewsletterTableRows";
const me = J.memo(({ sortBy: s, setSortBy: t, range: r }) => {
  const n = m(() => /* @__PURE__ */ e.jsxs(Ge, { children: [
    /* @__PURE__ */ e.jsx(Ye, { children: "Top newsletters" }),
    /* @__PURE__ */ e.jsxs(Qe, { children: [
      " Your best performing newsletters ",
      X(r)
    ] })
  ] }), [r]), { appSettings: a } = F(), { emailTrackClicks: i, emailTrackOpens: l } = a?.analytics || {};
  return /* @__PURE__ */ e.jsx(st, { children: /* @__PURE__ */ e.jsxs(K, { children: [
    /* @__PURE__ */ e.jsx(E, { className: "min-w-[320px]", variant: "cardhead", children: n }),
    /* @__PURE__ */ e.jsx(E, { className: "w-[65px]", children: /* @__PURE__ */ e.jsx(H, { activeSortBy: s, setSortBy: t, sortBy: "date desc", children: "Date" }) }),
    /* @__PURE__ */ e.jsx(E, { className: "w-[90px] text-right", children: /* @__PURE__ */ e.jsx(H, { activeSortBy: s, setSortBy: t, sortBy: "sent_to desc", children: "Sent" }) }),
    l && /* @__PURE__ */ e.jsx(E, { className: "w-[90px] text-right", children: /* @__PURE__ */ e.jsx(H, { activeSortBy: s, setSortBy: t, sortBy: "open_rate desc", children: "Opens" }) }),
    i && /* @__PURE__ */ e.jsx(E, { className: "w-[90px] text-right", children: /* @__PURE__ */ e.jsx(H, { activeSortBy: s, setSortBy: t, sortBy: "click_rate desc", children: "Clicks" }) })
  ] }) });
});
me.displayName = "NewsletterTableHeader";
const pe = J.memo(({ range: s, selectedNewsletterId: t, shouldFetchStats: r }) => {
  const [n, a] = U("open_rate desc");
  return /* @__PURE__ */ e.jsx(ce, { className: "w-full max-w-[calc(100vw-64px)] overflow-x-auto sidebar:max-w-[calc(100vw-64px-280px)]", "data-testid": "top-newsletters-card", children: /* @__PURE__ */ e.jsx(oe, { children: /* @__PURE__ */ e.jsxs(tt, { children: [
    /* @__PURE__ */ e.jsx(me, { range: s, setSortBy: a, sortBy: n }),
    /* @__PURE__ */ e.jsx(at, { children: /* @__PURE__ */ e.jsx(
      ue,
      {
        range: s,
        selectedNewsletterId: t,
        shouldFetchStats: r,
        sortBy: n
      }
    ) })
  ] }) }) });
});
pe.displayName = "TopNewslettersTable";
const gt = () => {
  const { range: s, selectedNewsletterId: t } = $(), [r] = se(), { appSettings: n } = F(), a = r.get("tab") || "total-subscribers", { data: i, isLoading: l } = ct({
    searchParams: {
      limit: "50"
    }
  }), h = !l && i && i.newsletters.length > 0 && !!t, { data: p, isLoading: v } = ot(
    s,
    t || void 0,
    h || !1
  ), { data: u, isLoading: w, isClicksLoading: b } = de(
    s,
    "date asc",
    t || void 0,
    h || !1
  ), N = m(() => !i?.newsletters || !t ? null : i.newsletters.find((o) => o.id === t) || null, [i, t]), j = m(() => {
    const o = N?.count?.active_members || p?.stats?.[0]?.total || 0;
    let f = 0, _ = 0;
    if (u?.stats && u.stats.length > 0) {
      const x = u.stats, C = x.reduce((T, O) => T + (O.open_rate || 0), 0), g = x.reduce((T, O) => T + (O.click_rate || 0), 0);
      f = C / x.length, _ = g / x.length;
    }
    return {
      totalSubscribers: o,
      avgOpenRate: f,
      avgClickRate: _
    };
  }, [N, p, u]), y = m(() => {
    if (!p?.stats?.[0]?.values || p.stats[0].values.length === 0) {
      const { startDate: f, endDate: _ } = q(s), x = [], C = f.clone().toDate(), g = _.toDate();
      for (; C <= g; )
        x.push({
          date: C.toISOString().split("T")[0],
          value: 0
        }), C.setDate(C.getDate() + 1);
      return x;
    }
    const o = p.stats[0].values;
    if (o.length === 1) {
      const f = o[0], _ = /* @__PURE__ */ new Date(), x = s, C = new Date(_.getTime() - x * 24 * 60 * 60 * 1e3);
      return [
        {
          ...f,
          date: C.toISOString().split("T")[0]
          // Start of range
        },
        {
          ...f,
          date: _.toISOString().split("T")[0]
          // End of range (today)
        }
      ];
    }
    return o;
  }, [p, s]), M = m(() => u?.stats ? u.stats.map((o) => ({
    post_id: o.post_id,
    post_title: o.post_title,
    send_date: o.send_date,
    sent_to: o.sent_to,
    total_opens: o.total_opens,
    open_rate: o.open_rate,
    total_clicks: o.total_clicks || 0,
    click_rate: o.click_rate || 0
  })) : [], [u]), d = v || b || w;
  return n && !n.newslettersEnabled ? /* @__PURE__ */ e.jsx(ge, { to: "/analytics" }) : /* @__PURE__ */ e.jsxs(Ke, { children: [
    /* @__PURE__ */ e.jsx(We, { children: /* @__PURE__ */ e.jsxs($e, { children: [
      /* @__PURE__ */ e.jsx(lt, { newsletters: i?.newsletters }),
      /* @__PURE__ */ e.jsx(Fe, {})
    ] }) }),
    /* @__PURE__ */ e.jsx(Ie, { isLoading: !1, loadingComponent: /* @__PURE__ */ e.jsx(e.Fragment, {}), children: /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx(ce, { "data-testid": "newsletters-card", children: /* @__PURE__ */ e.jsx(oe, { children: /* @__PURE__ */ e.jsx(
        nt,
        {
          avgsData: M,
          initialTab: a,
          isAvgsLoading: !1,
          isLoading: d,
          subscribersData: y,
          totals: j
        }
      ) }) }),
      /* @__PURE__ */ e.jsx(
        pe,
        {
          range: s,
          selectedNewsletterId: t,
          shouldFetchStats: !!h
        }
      )
    ] }) })
  ] });
};
export {
  gt as default
};
//# sourceMappingURL=index-SevuZEZv.js.map
