import { u as X, d as Q, b as re, J as ne, e as Y, m as h, h as S, o as le, j as e, i as y, g as ie, M as ge, N as fe, R as Z } from "./index-LBcSX-Bd.mjs";
import { aF as be, j as ae, am as je, an as ve, ao as ke, ap as U, k as Ne, bn as we, bq as _e, br as ye, bs as Ce, bA as Te, bo as Se, bB as Re, bu as De, E as oe, n as ee, by as ce, bi as Le, bj as Me, bC as Oe, bk as Pe, bl as Be, bD as Ee, bE as Ae, bm as ze, x as te, z as I, bF as Fe, bG as He, bH as Ve, J as $e, N as Ke, O as We, Q as Ge, R as Ie, a as de, e as ue, b as Qe, c as Ye, d as Je, r as Ue, B as qe } from "./stats-CYKBl8ke.mjs";
import { T as Xe, a as Ze, K as q, c as E, d as et } from "./tabs-B1iRXd5U.mjs";
import { B as tt, d as st, T as at, e as rt, a as G, f as V, S as W, b as M } from "./sort-button-BNSWKUZU.mjs";
const nt = ({ active: a, payload: t }) => {
  if (!a || !(t != null && t.length))
    return null;
  const r = t[0].payload, n = typeof r.send_date == "string" ? r.send_date : r.send_date.toISOString().split("T")[0];
  return /* @__PURE__ */ e.jsxs("div", { className: "max-w-[240px] min-w-[220px] rounded-lg border bg-background px-3 py-2 shadow-lg", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "mb-2 flex w-full flex-col border-b pb-2", children: [
      /* @__PURE__ */ e.jsx("span", { className: "text-sm leading-tight font-semibold", children: r.post_title }),
      /* @__PURE__ */ e.jsxs("span", { className: "text-sm text-muted-foreground", children: [
        "Sent on ",
        ie(n)
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "mb-1 flex w-full justify-between", children: [
      /* @__PURE__ */ e.jsx("span", { className: "font-medium text-muted-foreground", children: "Sent" }),
      /* @__PURE__ */ e.jsx("div", { className: "ml-2 w-full text-right font-mono", children: S(r.sent_to) })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "mb-1 flex w-full justify-between", children: [
      /* @__PURE__ */ e.jsx("span", { className: "font-medium text-muted-foreground", children: "Opens" }),
      /* @__PURE__ */ e.jsxs("div", { className: "ml-2 w-full text-right font-mono", children: [
        /* @__PURE__ */ e.jsxs("span", { className: "text-muted-foreground", children: [
          S(r.total_opens),
          " / "
        ] }),
        y(r.open_rate)
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "mb-1 flex w-full justify-between", children: [
      /* @__PURE__ */ e.jsx("span", { className: "font-medium text-muted-foreground", children: "Clicks" }),
      /* @__PURE__ */ e.jsxs("div", { className: "ml-2 w-full text-right font-mono", children: [
        /* @__PURE__ */ e.jsxs("span", { className: "text-muted-foreground", children: [
          S(r.total_clicks),
          " / "
        ] }),
        y(r.click_rate)
      ] })
    ] })
  ] });
}, lt = ({
  subscribersData: a,
  avgsData: t,
  totals: r,
  isLoading: n,
  isAvgsLoading: s,
  initialTab: i = "total-subscribers"
}) => {
  const [o, x] = X(i), [u, j] = X(!1), { range: c } = Q(), w = re(), [_] = ne(), { appSettings: b } = Y(), { emailTrackClicks: p, emailTrackOpens: g } = (b == null ? void 0 : b.analytics) || {}, { totalSubscribers: O, avgOpenRate: C, avgClickRate: l } = r, k = h(() => {
    if (!a || a.length === 0)
      return [];
    let d = [];
    return d = be(a, c, "value", "exact"), d.map((D) => ({
      ...D,
      formattedValue: S(D.value),
      label: "Total Subscribers"
    }));
  }, [a, c]), R = h(() => {
    var $, H;
    if (!k || k.length <= 1)
      return {
        direction: "same",
        value: "0%"
      };
    const d = (($ = k[0]) == null ? void 0 : $.value) ?? 0, N = ((H = k[k.length - 1]) == null ? void 0 : H.value) ?? 0;
    let D = "same";
    N > d ? D = "up" : N < d && (D = "down");
    let F;
    if (d === 0)
      F = N === 0 ? "0%" : "+100%";
    else {
      const L = (N - d) / d * 100, K = Math.round(L * 10) / 10;
      F = `${L >= 0 ? "+" : ""}${K}%`;
    }
    return { direction: D, value: F };
  }, [k]);
  le(() => {
    x(i);
  }, [i]);
  const v = (d) => {
    x(d);
    const N = new URLSearchParams(_);
    N.set("tab", d), w(`?${N.toString()}`, { replace: !0 });
  }, T = {
    open_rate: {
      label: "Open rate"
    }
  }, m = h(() => ({
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
  }), []), { barDomain: f, barTicks: P } = h(() => {
    var se;
    if (!t || t.length === 0 || o === "total-subscribers")
      return { barDomain: [0, 1], barTicks: [0, 1] };
    const d = (se = m[o]) == null ? void 0 : se.datakey;
    if (!d)
      return { barDomain: [0, 1], barTicks: [0, 1] };
    const N = t.map((J) => J[d]).filter((J) => typeof J == "number");
    if (N.length === 0)
      return { barDomain: [0, 1], barTicks: [0, 1] };
    const D = Math.min(...N), F = Math.max(...N), $ = Math.floor(D * 10) / 10, H = Math.ceil(F * 10) / 10, L = Math.max(0, $), K = H === L ? L + 0.1 : H;
    return {
      barDomain: [L, K],
      barTicks: [L, K]
    };
  }, [t, o, m]);
  if (n)
    return /* @__PURE__ */ e.jsx("div", { className: "-mb-6 flex h-[calc(16vw+132px)] w-full items-start justify-center", children: /* @__PURE__ */ e.jsx(ae, {}) });
  let A = "grid-cols-3";
  (!p || !g) && (A = "grid-cols-2"), !p && !g && (A = "grid-cols-1");
  const z = o === "avg-open-rate" && C > f[0] && C < f[1] || o === "avg-click-rate" && l > f[0] && l < f[1], B = o === "avg-open-rate" ? C : l;
  return /* @__PURE__ */ e.jsxs(Xe, { defaultValue: i, variant: "kpis", children: [
    /* @__PURE__ */ e.jsxs(Ze, { className: `-mx-6 hidden grid-cols-3 md:visible! md:grid! ${A}`, children: [
      /* @__PURE__ */ e.jsx(q, { className: `${!g && !p && "cursor-auto after:hidden"}`, value: "total-subscribers", onClick: () => {
        v("total-subscribers");
      }, children: /* @__PURE__ */ e.jsx(
        E,
        {
          color: m["total-subscribers"].color,
          "data-testid": "total-subscribers-value",
          diffDirection: R.direction,
          diffValue: R.value,
          label: "Total subscribers",
          value: S(O)
        }
      ) }),
      g && /* @__PURE__ */ e.jsx(q, { value: "avg-open-rate", onClick: () => {
        v("avg-open-rate");
      }, children: /* @__PURE__ */ e.jsx(
        E,
        {
          className: s ? "opacity-50" : "",
          color: m["avg-open-rate"].color,
          label: "Avg. open rate",
          value: y(C)
        }
      ) }),
      p && /* @__PURE__ */ e.jsx(q, { value: "avg-click-rate", onClick: () => {
        v("avg-click-rate");
      }, children: /* @__PURE__ */ e.jsx(
        E,
        {
          className: s ? "opacity-50" : "",
          color: m["avg-click-rate"].color,
          label: "Avg. click rate",
          value: y(l)
        }
      ) })
    ] }),
    /* @__PURE__ */ e.jsxs(je, { children: [
      /* @__PURE__ */ e.jsx(ve, { className: "md:hidden", asChild: !0, children: /* @__PURE__ */ e.jsxs(et, { children: [
        o === "total-subscribers" && /* @__PURE__ */ e.jsx(
          E,
          {
            color: m["total-subscribers"].color,
            label: "Total subscribers",
            value: S(O)
          }
        ),
        o === "avg-open-rate" && g && /* @__PURE__ */ e.jsx(
          E,
          {
            className: s ? "opacity-50" : "",
            color: m["avg-open-rate"].color,
            label: "Avg. open rate",
            value: y(C)
          }
        ),
        o === "avg-click-rate" && p && /* @__PURE__ */ e.jsx(
          E,
          {
            className: s ? "opacity-50" : "",
            color: m["avg-click-rate"].color,
            label: "Avg. click rate",
            value: y(l)
          }
        )
      ] }) }),
      /* @__PURE__ */ e.jsxs(ke, { align: "end", className: "w-56", children: [
        /* @__PURE__ */ e.jsx(U, { onClick: () => v("total-subscribers"), children: "Total subscribers" }),
        g && /* @__PURE__ */ e.jsx(U, { onClick: () => v("avg-open-rate"), children: "Avg. open rate" }),
        p && /* @__PURE__ */ e.jsx(U, { onClick: () => v("avg-click-rate"), children: "Avg. click rate" })
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "my-4 [&_.recharts-cartesian-axis-tick-value]:fill-gray-500", children: [
      o === "total-subscribers" && /* @__PURE__ */ e.jsx(
        Ne,
        {
          className: "-mb-3 h-[16vw] max-h-[320px] min-h-[180px] w-full",
          color: m["total-subscribers"].color,
          data: k,
          id: "mrr",
          range: c
        }
      ),
      (o === "avg-open-rate" && g || o === "avg-click-rate" && p) && /* @__PURE__ */ e.jsx(e.Fragment, { children: s ? /* @__PURE__ */ e.jsx("div", { className: "h-[320px] w-full items-center justify-center", children: /* @__PURE__ */ e.jsx(ae, {}) }) : t && t.length > 0 ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(we, { className: "aspect-auto h-[200px] w-full md:h-[220px] xl:h-[320px]", config: T, children: /* @__PURE__ */ e.jsxs(
          tt,
          {
            className: u ? "cursor-pointer!" : "",
            data: t,
            margin: {
              top: 20
            },
            onClick: (d) => {
              d.activePayload && d.activePayload[0].payload.post_id && w(`/posts/analytics/${d.activePayload[0].payload.post_id}`, { crossApp: !0 });
            },
            onMouseLeave: () => j(!1),
            onMouseMove: (d) => {
              j(!!(d.activePayload && d.activePayload[0].payload.post_id));
            },
            children: [
              /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsxs("linearGradient", { id: "barGradient", x1: "0", x2: "0", y1: "0", y2: "1", children: [
                /* @__PURE__ */ e.jsx("stop", { offset: "0%", stopColor: m[o].color, stopOpacity: 0.8 }),
                /* @__PURE__ */ e.jsx("stop", { offset: "100%", stopColor: m[o].color, stopOpacity: 0.6 })
              ] }) }),
              /* @__PURE__ */ e.jsx(_e, { horizontal: !0, stroke: "var(--border)", vertical: !1 }),
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
                Ce,
                {
                  axisLine: !1,
                  domain: f,
                  tickFormatter: (d) => y(d),
                  tickLine: !1,
                  ticks: P,
                  width: Te(P, (d) => y(d))
                }
              ),
              /* @__PURE__ */ e.jsx(
                Se,
                {
                  content: /* @__PURE__ */ e.jsx(nt, {}),
                  cursor: !1,
                  isAnimationActive: !1,
                  position: { y: 10 }
                }
              ),
              z && /* @__PURE__ */ e.jsx(Re, { label: { value: `${y(B)}`, position: "left", offset: 8, fill: "var(--muted-foreground)" }, opacity: 0.5, stroke: "var(--muted-foreground)", strokeDasharray: "4 4", y: B }),
              /* @__PURE__ */ e.jsx(
                De,
                {
                  activeBar: { fillOpacity: 1 },
                  dataKey: m[o].datakey,
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
          o === "avg-open-rate" ? "opens" : "clicks",
          " in this period"
        ] })
      ] }) : /* @__PURE__ */ e.jsx(
        oe,
        {
          className: "size-full py-20",
          title: `No newsletters ${ee(c)}`,
          children: /* @__PURE__ */ e.jsx(ce, { strokeWidth: 1.5 })
        }
      ) })
    ] })
  ] });
}, it = ({ newsletters: a }) => {
  const { selectedNewsletterId: t, setSelectedNewsletterId: r } = Q(), n = h(() => (a == null ? void 0 : a.filter((s) => s.status === "active")) || [], [a]);
  return le(() => {
    if (n.length > 0 && !t) {
      const s = n.find((i) => i.sort_order === 0);
      r(s ? s.id : n[0].id);
    }
  }, [n, t, r]), n.length <= 1 ? null : /* @__PURE__ */ e.jsxs(
    Le,
    {
      value: t || "",
      onValueChange: (s) => {
        r(s);
      },
      children: [
        /* @__PURE__ */ e.jsxs(Me, { className: "w-auto", children: [
          /* @__PURE__ */ e.jsx(Oe, { className: "mr-2", size: 16, strokeWidth: 1.5 }),
          /* @__PURE__ */ e.jsx(Pe, { placeholder: "Select a newsletter" })
        ] }),
        /* @__PURE__ */ e.jsx(Be, { align: "end", children: /* @__PURE__ */ e.jsxs(Ee, { children: [
          /* @__PURE__ */ e.jsx(Ae, { children: "Newsletters" }),
          n.map((s) => /* @__PURE__ */ e.jsx(ze, { value: s.id, children: s.name }, s.id))
        ] }) })
      ]
    }
  );
}, ot = "NewslettersResponseType", ct = ge({
  dataType: ot,
  path: "/newsletters/",
  defaultSearchParams: { include: "count.active_members,count.posts", limit: "50" },
  defaultNextPageParams: (a, t) => {
    var r;
    return {
      ...t,
      page: (((r = a.meta) == null ? void 0 : r.pagination.next) || 1).toString()
    };
  },
  returnData: (a) => {
    const { pages: t } = a, r = t.flatMap((s) => s.newsletters), n = t[t.length - 1].meta;
    return {
      newsletters: r,
      meta: n,
      isEnd: n ? n.pagination.pages === n.pagination.page : !0
    };
  }
}), dt = (a, t, r = !0) => {
  const n = a ?? 30, { startDate: s, endDate: i } = h(() => te(n), [n]), o = h(() => {
    const u = {
      date_from: I(s),
      date_to: I(i)
    };
    return t && (u.newsletter_id = t), u;
  }, [s, i, t]), x = Fe({ searchParams: o, enabled: r });
  return r ? x : {
    data: void 0,
    isLoading: !1,
    error: null,
    isError: !1,
    refetch: x.refetch
  };
}, ut = (a, t, r, n = !0) => {
  const s = a ?? 30, i = t ?? "date desc", { startDate: o, endDate: x } = h(() => te(s), [s]), u = h(() => {
    const c = {
      date_from: I(o),
      date_to: I(x),
      order: i
    };
    return r && (c.newsletter_id = r), c;
  }, [o, x, i, r]), j = He({ searchParams: u, enabled: n });
  return n ? j : {
    data: void 0,
    isLoading: !1,
    error: null,
    isError: !1,
    refetch: j.refetch
  };
}, mt = (a, t = [], r = !0) => {
  const n = h(() => {
    const i = {};
    return a && (i.newsletter_id = a), t.length > 0 && (i.post_ids = t.join(",")), i;
  }, [a, t]), s = Ve({ searchParams: n, enabled: r });
  return r ? s : {
    data: void 0,
    isLoading: !1,
    error: null,
    isError: !1,
    refetch: s.refetch
  };
}, me = (a, t, r, n = !0) => {
  const s = ut(a, t, r, n), i = h(() => {
    var u;
    return (u = s.data) != null && u.stats ? s.data.stats.map((j) => j.post_id) : [];
  }, [s.data]), o = mt(
    r,
    i,
    n && i.length > 0
  );
  return {
    data: h(() => {
      var _, b;
      if (!((_ = s.data) != null && _.stats))
        return;
      const u = s.data.stats, j = ((b = o.data) == null ? void 0 : b.stats) || [], c = /* @__PURE__ */ new Map();
      j.forEach((p) => {
        c.set(p.post_id, p);
      });
      const w = u.map((p) => {
        const g = c.get(p.post_id);
        return {
          ...p,
          total_clicks: (g == null ? void 0 : g.total_clicks) || 0,
          click_rate: (g == null ? void 0 : g.click_rate) || 0
        };
      });
      return {
        ...s.data,
        stats: w
      };
    }, [s.data, o.data]),
    isLoading: s.isLoading,
    isClicksLoading: o.isLoading,
    error: s.error || o.error,
    isError: s.isError || o.isError,
    refetch: () => {
      s.refetch(), o.refetch();
    }
  };
}, he = Z.memo(({ range: a, selectedNewsletterId: t, shouldFetchStats: r, sortBy: n }) => {
  var C;
  const s = re(), { settings: i } = Q(), o = String(((C = i.find((l) => l.key === "timezone")) == null ? void 0 : C.value) || "Etc/UTC"), { data: x, isLoading: u, isClicksLoading: j } = me(
    a,
    n,
    // Reactive to sort changes, but only affects this component
    t || void 0,
    !!r
  ), { appSettings: c } = Y(), { emailTrackClicks: w, emailTrackOpens: _ } = (c == null ? void 0 : c.analytics) || {}, b = h(() => (x == null ? void 0 : x.stats) || [], [x]), p = _ && w ? 5 : _ || w ? 4 : 3, g = h(() => /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsx(G, { className: "last:border-none [&>td]:py-2.5", children: /* @__PURE__ */ e.jsx(M, { className: "font-medium", colSpan: p, children: /* @__PURE__ */ e.jsx(Ue, { className: "mt-5" }) }) }) }), [p]), O = h(() => b.length > 0 ? /* @__PURE__ */ e.jsx(e.Fragment, { children: b.map((l) => /* @__PURE__ */ e.jsxs(G, { className: "last:border-none [&>td]:py-2.5", children: [
    /* @__PURE__ */ e.jsx(M, { className: "font-medium", children: /* @__PURE__ */ e.jsx("div", { className: "group/link inline-flex items-center gap-2", children: l.post_id ? /* @__PURE__ */ e.jsx(qe, { className: "h-auto p-0 text-left whitespace-normal hover:underline!", title: "View post analytics", variant: "link", onClick: () => {
      s(`/posts/analytics/${l.post_id}/`, { crossApp: !0 });
    }, children: l.post_title }) : /* @__PURE__ */ e.jsx(e.Fragment, { children: l.post_title }) }) }),
    /* @__PURE__ */ e.jsx(M, { className: "text-sm whitespace-nowrap", children: ie(l.send_date, o) }),
    /* @__PURE__ */ e.jsx(M, { className: "text-right font-mono text-sm", children: S(l.sent_to) }),
    _ && /* @__PURE__ */ e.jsxs(M, { className: "text-right font-mono text-sm", children: [
      /* @__PURE__ */ e.jsx("span", { className: "group-hover:hidden", children: y(l.open_rate) }),
      /* @__PURE__ */ e.jsx("span", { className: "hidden group-hover:visible! group-hover:block!", children: S(l.total_opens) })
    ] }),
    w && /* @__PURE__ */ e.jsx(M, { className: "text-right font-mono text-sm", children: j ? /* @__PURE__ */ e.jsx("span", { className: "inline-block h-4 w-8 animate-pulse rounded bg-gray-200" }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx("span", { className: "group-hover:hidden", children: y(l.click_rate) }),
      /* @__PURE__ */ e.jsx("span", { className: "hidden group-hover:visible! group-hover:block!", children: S(l.total_clicks) })
    ] }) })
  ] }, l.post_id)) }) : /* @__PURE__ */ e.jsx(G, { className: "border-none hover:bg-transparent", children: /* @__PURE__ */ e.jsx(M, { className: "text-center group-hover:bg-transparent!", colSpan: p, children: /* @__PURE__ */ e.jsx(
    oe,
    {
      className: "size-full py-20",
      title: `No newsletters ${ee(a)}`,
      children: /* @__PURE__ */ e.jsx(ce, { strokeWidth: 1.5 })
    }
  ) }) }), [b, j, s, w, _, a]);
  return u || !x ? g : O;
});
he.displayName = "NewsletterTableRows";
const xe = Z.memo(({ sortBy: a, setSortBy: t, range: r }) => {
  const n = h(() => /* @__PURE__ */ e.jsxs(Qe, { children: [
    /* @__PURE__ */ e.jsx(Ye, { children: "Top newsletters" }),
    /* @__PURE__ */ e.jsxs(Je, { children: [
      " Your best performing newsletters ",
      ee(r)
    ] })
  ] }), [r]), { appSettings: s } = Y(), { emailTrackClicks: i, emailTrackOpens: o } = (s == null ? void 0 : s.analytics) || {};
  return /* @__PURE__ */ e.jsx(rt, { children: /* @__PURE__ */ e.jsxs(G, { children: [
    /* @__PURE__ */ e.jsx(V, { className: "min-w-[320px]", variant: "cardhead", children: n }),
    /* @__PURE__ */ e.jsx(V, { className: "w-[65px]", children: /* @__PURE__ */ e.jsx(W, { activeSortBy: a, setSortBy: t, sortBy: "date desc", children: "Date" }) }),
    /* @__PURE__ */ e.jsx(V, { className: "w-[90px] text-right", children: /* @__PURE__ */ e.jsx(W, { activeSortBy: a, setSortBy: t, sortBy: "sent_to desc", children: "Sent" }) }),
    o && /* @__PURE__ */ e.jsx(V, { className: "w-[90px] text-right", children: /* @__PURE__ */ e.jsx(W, { activeSortBy: a, setSortBy: t, sortBy: "open_rate desc", children: "Opens" }) }),
    i && /* @__PURE__ */ e.jsx(V, { className: "w-[90px] text-right", children: /* @__PURE__ */ e.jsx(W, { activeSortBy: a, setSortBy: t, sortBy: "click_rate desc", children: "Clicks" }) })
  ] }) });
});
xe.displayName = "NewsletterTableHeader";
const pe = Z.memo(({ range: a, selectedNewsletterId: t, shouldFetchStats: r }) => {
  const [n, s] = X("open_rate desc");
  return /* @__PURE__ */ e.jsx(de, { className: "w-full max-w-[calc(100vw-64px)] overflow-x-auto sidebar:max-w-[calc(100vw-64px-280px)]", "data-testid": "top-newsletters-card", children: /* @__PURE__ */ e.jsx(ue, { children: /* @__PURE__ */ e.jsxs(st, { children: [
    /* @__PURE__ */ e.jsx(xe, { range: a, setSortBy: s, sortBy: n }),
    /* @__PURE__ */ e.jsx(at, { children: /* @__PURE__ */ e.jsx(
      he,
      {
        range: a,
        selectedNewsletterId: t,
        shouldFetchStats: r,
        sortBy: n
      }
    ) })
  ] }) }) });
});
pe.displayName = "TopNewslettersTable";
const ft = () => {
  const { range: a, selectedNewsletterId: t } = Q(), [r] = ne(), { appSettings: n } = Y(), s = r.get("tab") || "total-subscribers", { data: i, isLoading: o } = ct({
    searchParams: {
      limit: "50"
    }
  }), x = !o && i && i.newsletters.length > 0 && !!t, { data: u, isLoading: j } = dt(
    a,
    t || void 0,
    x || !1
  ), { data: c, isLoading: w, isClicksLoading: _ } = me(
    a,
    "date asc",
    t || void 0,
    x || !1
  ), b = h(() => !(i != null && i.newsletters) || !t ? null : i.newsletters.find((l) => l.id === t) || null, [i, t]), p = h(() => {
    var v, T, m;
    const l = ((v = b == null ? void 0 : b.count) == null ? void 0 : v.active_members) || ((m = (T = u == null ? void 0 : u.stats) == null ? void 0 : T[0]) == null ? void 0 : m.total) || 0;
    let k = 0, R = 0;
    if (c != null && c.stats && c.stats.length > 0) {
      const f = c.stats, P = f.reduce((z, B) => z + (B.open_rate || 0), 0), A = f.reduce((z, B) => z + (B.click_rate || 0), 0);
      k = P / f.length, R = A / f.length;
    }
    return {
      totalSubscribers: l,
      avgOpenRate: k,
      avgClickRate: R
    };
  }, [b, u, c]), g = h(() => {
    var k, R;
    if (!((R = (k = u == null ? void 0 : u.stats) == null ? void 0 : k[0]) != null && R.values) || u.stats[0].values.length === 0) {
      const { startDate: v, endDate: T } = te(a), m = [], f = v.clone().toDate(), P = T.toDate();
      for (; f <= P; )
        m.push({
          date: f.toISOString().split("T")[0],
          value: 0
        }), f.setDate(f.getDate() + 1);
      return m;
    }
    const l = u.stats[0].values;
    if (l.length === 1) {
      const v = l[0], T = /* @__PURE__ */ new Date(), m = a, f = new Date(T.getTime() - m * 24 * 60 * 60 * 1e3);
      return [
        {
          ...v,
          date: f.toISOString().split("T")[0]
          // Start of range
        },
        {
          ...v,
          date: T.toISOString().split("T")[0]
          // End of range (today)
        }
      ];
    }
    return l;
  }, [u, a]), O = h(() => c != null && c.stats ? c.stats.map((l) => ({
    post_id: l.post_id,
    post_title: l.post_title,
    send_date: l.send_date,
    sent_to: l.sent_to,
    total_opens: l.total_opens,
    open_rate: l.open_rate,
    total_clicks: l.total_clicks || 0,
    click_rate: l.click_rate || 0
  })) : [], [c]), C = j || _ || w;
  return n && !n.newslettersEnabled ? /* @__PURE__ */ e.jsx(fe, { to: "/analytics" }) : /* @__PURE__ */ e.jsxs($e, { children: [
    /* @__PURE__ */ e.jsx(Ke, { children: /* @__PURE__ */ e.jsxs(We, { children: [
      /* @__PURE__ */ e.jsx(it, { newsletters: i == null ? void 0 : i.newsletters }),
      /* @__PURE__ */ e.jsx(Ge, {})
    ] }) }),
    /* @__PURE__ */ e.jsx(Ie, { isLoading: !1, loadingComponent: /* @__PURE__ */ e.jsx(e.Fragment, {}), children: /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx(de, { "data-testid": "newsletters-card", children: /* @__PURE__ */ e.jsx(ue, { children: /* @__PURE__ */ e.jsx(
        lt,
        {
          avgsData: O,
          initialTab: s,
          isAvgsLoading: !1,
          isLoading: C,
          subscribersData: g,
          totals: p
        }
      ) }) }),
      /* @__PURE__ */ e.jsx(
        pe,
        {
          range: a,
          selectedNewsletterId: t,
          shouldFetchStats: !!x
        }
      )
    ] }) })
  ] });
};
export {
  ft as default
};
//# sourceMappingURL=index-D85w875o.mjs.map
