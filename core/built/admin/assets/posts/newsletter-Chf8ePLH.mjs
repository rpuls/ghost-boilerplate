import { v as he, a as v, j as e, w as at, h as A, x as nt, y as B, z as H, A as ye, F as rt, u as E, b as D, i as ae, m as $, R as O, c as it, d as Ce, f as R, B as ot, D as lt, g as ct, e as W } from "./index-BWRct4la.mjs";
import { h as dt, f as ut, d as ne, B as V, H as Le } from "./button-BOW1bLRE.mjs";
import { s as mt, c as pt } from "./hooks-BXuxe98u.mjs";
import { C as re, a as ie, b as oe, g as le, c as I, j as Pe, T as gt, h as xt, P as ft, f as ht, n as vt } from "./post-analytics-header-Cj53GuIA.mjs";
import { S as ce, f as bt } from "./separator-eM4IfLr1.mjs";
import { ab as jt, a5 as kt, a6 as Nt, a7 as wt, ac as ve, ad as yt, ae as Ct, D as Lt, a as Pt, b as St, c as _t, d as Rt, e as At, f as Ft, g as Tt, af as Et } from "./data-list-BSCYRXjk.mjs";
import { a as Se } from "./skeleton-DhEoQOK3.mjs";
import { i as be, j as $t } from "./app-utils-bFFqatF8.mjs";
import { h as It, i as zt, K as Z, f as Q, a as J, b as X, c as ee, g as Mt } from "./stats-Dswp89vu.mjs";
import { B as Bt } from "./loading-indicator-D8SILWlO.mjs";
import { a as Dt, u as Vt, p as Ot, g as te, N as se } from "./links-Sk8w0gyH.mjs";
import { u as Wt } from "./post-analytics-context-CJibQt1w.mjs";
import { g as je } from "./posts-B9yHB9r9.mjs";
function Ht(t, s = []) {
  let a = [];
  function n(r, o) {
    const l = he(o);
    l.displayName = r + "Context";
    const d = a.length;
    a = [...a, o];
    const u = (x) => {
      var y;
      const { scope: g, children: k, ...f } = x, b = ((y = g == null ? void 0 : g[t]) == null ? void 0 : y[d]) || l, m = v(() => f, Object.values(f));
      return /* @__PURE__ */ e.jsx(b.Provider, { value: m, children: k });
    };
    u.displayName = r + "Provider";
    function c(x, g) {
      var b;
      const k = ((b = g == null ? void 0 : g[t]) == null ? void 0 : b[d]) || l, f = at(k);
      if (f) return f;
      if (o !== void 0) return o;
      throw new Error(`\`${x}\` must be used within \`${r}\``);
    }
    return [u, c];
  }
  const i = () => {
    const r = a.map((o) => he(o));
    return function(l) {
      const d = (l == null ? void 0 : l[t]) || r;
      return v(
        () => ({ [`__scope${t}`]: { ...l, [t]: d } }),
        [l, d]
      );
    };
  };
  return i.scopeName = t, [n, Ut(i, ...s)];
}
function Ut(...t) {
  const s = t[0];
  if (t.length === 1) return s;
  const a = () => {
    const n = t.map((i) => ({
      useScope: i(),
      scopeName: i.scopeName
    }));
    return function(r) {
      const o = n.reduce((l, { useScope: d, scopeName: u }) => {
        const x = d(r)[`__scope${u}`];
        return { ...l, ...x };
      }, {});
      return v(() => ({ [`__scope${s.scopeName}`]: o }), [o]);
    };
  };
  return a.scopeName = s.scopeName, a;
}
var Gt = Symbol.for("react.lazy"), U = nt[" use ".trim().toString()];
function Kt(t) {
  return typeof t == "object" && t !== null && "then" in t;
}
function _e(t) {
  return t != null && typeof t == "object" && "$$typeof" in t && t.$$typeof === Gt && "_payload" in t && Kt(t._payload);
}
// @__NO_SIDE_EFFECTS__
function qt(t) {
  const s = /* @__PURE__ */ Yt(t), a = A((n, i) => {
    let { children: r, ...o } = n;
    _e(r) && typeof U == "function" && (r = U(r._payload));
    const l = B.toArray(r), d = l.find(Qt);
    if (d) {
      const u = d.props.children, c = l.map((x) => x === d ? B.count(u) > 1 ? B.only(null) : H(u) ? u.props.children : null : x);
      return /* @__PURE__ */ e.jsx(s, { ...o, ref: i, children: H(u) ? ye(u, void 0, c) : null });
    }
    return /* @__PURE__ */ e.jsx(s, { ...o, ref: i, children: r });
  });
  return a.displayName = `${t}.Slot`, a;
}
// @__NO_SIDE_EFFECTS__
function Yt(t) {
  const s = A((a, n) => {
    let { children: i, ...r } = a;
    if (_e(i) && typeof U == "function" && (i = U(i._payload)), H(i)) {
      const o = Xt(i), l = Jt(r, i.props);
      return i.type !== rt && (l.ref = n ? dt(n, o) : o), ye(i, l);
    }
    return B.count(i) > 1 ? B.only(null) : null;
  });
  return s.displayName = `${t}.SlotClone`, s;
}
var Zt = Symbol("radix.slottable");
function Qt(t) {
  return H(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === Zt;
}
function Jt(t, s) {
  const a = { ...s };
  for (const n in s) {
    const i = t[n], r = s[n];
    /^on[A-Z]/.test(n) ? i && r ? a[n] = (...l) => {
      const d = r(...l);
      return i(...l), d;
    } : i && (a[n] = i) : n === "style" ? a[n] = { ...i, ...r } : n === "className" && (a[n] = [i, r].filter(Boolean).join(" "));
  }
  return { ...t, ...a };
}
function Xt(t) {
  var n, i;
  let s = (n = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : n.get, a = s && "isReactWarning" in s && s.isReactWarning;
  return a ? t.ref : (s = (i = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : i.get, a = s && "isReactWarning" in s && s.isReactWarning, a ? t.props.ref : t.props.ref || t.ref);
}
var es = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], de = es.reduce((t, s) => {
  const a = /* @__PURE__ */ qt(`Primitive.${s}`), n = A((i, r) => {
    const { asChild: o, ...l } = i, d = o ? a : s;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ e.jsx(d, { ...l, ref: r });
  });
  return n.displayName = `Primitive.${s}`, { ...t, [s]: n };
}, {});
function ts() {
  return mt.useSyncExternalStore(
    ss,
    () => !0,
    () => !1
  );
}
function ss() {
  return () => {
  };
}
var ue = "Avatar", [as] = Ht(ue), [ns, Re] = as(ue), Ae = A(
  (t, s) => {
    const { __scopeAvatar: a, ...n } = t, [i, r] = E("idle");
    return /* @__PURE__ */ e.jsx(
      ns,
      {
        scope: a,
        imageLoadingStatus: i,
        onImageLoadingStatusChange: r,
        children: /* @__PURE__ */ e.jsx(de.span, { ...n, ref: s })
      }
    );
  }
);
Ae.displayName = ue;
var Fe = "AvatarImage", Te = A(
  (t, s) => {
    const { __scopeAvatar: a, src: n, onLoadingStatusChange: i = () => {
    }, ...r } = t, o = Re(Fe, a), l = rs(n, r), d = ut((u) => {
      i(u), o.onImageLoadingStatusChange(u);
    });
    return ne(() => {
      l !== "idle" && d(l);
    }, [l, d]), l === "loaded" ? /* @__PURE__ */ e.jsx(de.img, { ...r, ref: s, src: n }) : null;
  }
);
Te.displayName = Fe;
var Ee = "AvatarFallback", $e = A(
  (t, s) => {
    const { __scopeAvatar: a, delayMs: n, ...i } = t, r = Re(Ee, a), [o, l] = E(n === void 0);
    return D(() => {
      if (n !== void 0) {
        const d = window.setTimeout(() => l(!0), n);
        return () => window.clearTimeout(d);
      }
    }, [n]), o && r.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ e.jsx(de.span, { ...i, ref: s }) : null;
  }
);
$e.displayName = Ee;
function ke(t, s) {
  return t ? s ? (t.src !== s && (t.src = s), t.complete && t.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
}
function rs(t, { referrerPolicy: s, crossOrigin: a }) {
  const n = ts(), i = ae(null), r = n ? (i.current || (i.current = new window.Image()), i.current) : null, [o, l] = E(
    () => ke(r, t)
  );
  return ne(() => {
    l(ke(r, t));
  }, [r, t]), ne(() => {
    const d = (x) => () => {
      l(x);
    };
    if (!r) return;
    const u = d("loaded"), c = d("error");
    return r.addEventListener("load", u), r.addEventListener("error", c), s && (r.referrerPolicy = s), typeof a == "string" && (r.crossOrigin = a), () => {
      r.removeEventListener("load", u), r.removeEventListener("error", c);
    };
  }, [r, a, s]), o;
}
var Ie = Ae, ze = Te, Me = $e;
const Be = A(
  ({ className: t, type: s, ...a }, n) => /* @__PURE__ */ e.jsx(
    "input",
    {
      ref: n,
      className: $(
        "flex h-9 w-full rounded-md border border-border-default bg-surface-elevated px-3 py-1 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:bg-transparent focus-visible:border-focus-ring focus-visible:ring-2 focus-visible:ring-focus-ring/25 disabled:cursor-not-allowed disabled:opacity-50",
        t
      ),
      type: s,
      ...a
    }
  )
);
Be.displayName = "Input";
const De = A(({ className: t, ...s }, a) => /* @__PURE__ */ e.jsx(
  Ie,
  {
    ref: a,
    className: $(
      "relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full",
      t
    ),
    ...s
  }
));
De.displayName = Ie.displayName;
const is = A(({ className: t, ...s }, a) => /* @__PURE__ */ e.jsx(
  ze,
  {
    ref: a,
    className: $("aspect-square h-full w-full", t),
    ...s
  }
));
is.displayName = ze.displayName;
const Ve = A(({ className: t, ...s }, a) => /* @__PURE__ */ e.jsx(
  Me,
  {
    ref: a,
    className: $(
      "flex h-full w-full items-center justify-center rounded-full bg-muted [&_svg]:size-4",
      t
    ),
    ...s
  }
));
Ve.displayName = Me.displayName;
const me = O.forwardRef(({ className: t, children: s, ...a }, n) => /* @__PURE__ */ e.jsx("div", { ref: n, className: $("flex items-center justify-between gap-4 pb-6 text-sm", t), ...a, children: s }));
me.displayName = "SimplePagination";
const os = O.forwardRef(({ className: t, currentPage: s, totalPages: a, ...n }, i) => /* @__PURE__ */ e.jsxs("span", { ref: i, className: $("text-muted-foreground", t), ...n, children: [
  "Pages ",
  s,
  " of ",
  a
] }));
os.displayName = "SimplePaginationPages";
const pe = O.forwardRef(({ className: t, children: s, ...a }, n) => /* @__PURE__ */ e.jsx("div", { ref: n, className: $("flex items-center gap-1.5", t), ...a, children: s }));
pe.displayName = "SimplePaginationNavigation";
const ge = O.forwardRef(
  ({ variant: t = "outline", ...s }, a) => /* @__PURE__ */ e.jsx(V, { ref: a, size: "sm", variant: t, ...s, children: /* @__PURE__ */ e.jsx(jt, {}) })
);
ge.displayName = "SimplePaginationPreviousButton";
const xe = O.forwardRef(
  ({ variant: t = "outline", ...s }, a) => /* @__PURE__ */ e.jsx(V, { ref: a, size: "sm", variant: t, ...s, children: /* @__PURE__ */ e.jsx(kt, {}) })
);
xe.displayName = "SimplePaginationNextButton";
function Oe({
  data: t,
  itemsPerPage: s,
  initialPage: a = 1
}) {
  const [n, i] = E(a);
  if (s <= 0)
    throw new Error("itemsPerPage must be a positive number");
  const r = (g) => {
    const k = Math.max(1, Math.min(o, g));
    i(k);
  }, o = v(() => t ? Math.ceil(t.length / s) : 1, [t, s]);
  D(() => {
    n > o && i(1);
  }, [n, o]);
  const l = v(() => {
    if (!t)
      return null;
    const g = (n - 1) * s;
    return t.slice(g, g + s);
  }, [t, n, s]), d = () => {
    i((g) => Math.min(o, g + 1));
  }, u = () => {
    i((g) => Math.max(1, g - 1));
  }, c = n < o, x = n > 1;
  return {
    currentPage: n,
    setCurrentPage: r,
    totalPages: o,
    paginatedData: l,
    nextPage: d,
    previousPage: u,
    hasNextPage: c,
    hasPreviousPage: x
  };
}
const ls = "FeedbackResponseType", cs = pt({
  dataType: ls,
  path: (t) => `/feedback/${t}/`
}), ds = (t, s) => {
  const { data: a, isLoading: n, error: i } = cs(t, {
    searchParams: {
      limit: "50",
      // Get more data for pagination
      ...s !== void 0 ? { score: s.toString() } : {}
    }
  });
  return {
    feedback: v(() => a != null && a.feedback ? a.feedback : [], [a]),
    isLoading: n,
    error: i
  };
}, us = ({ feedbackStats: t }) => {
  const { postId: s } = it(), a = Ce(), [n, i] = E("positive"), r = 9, o = n === "positive" ? 1 : 0, { feedback: l, isLoading: d } = ds(s || "", o), {
    totalPages: u,
    paginatedData: c,
    nextPage: x,
    previousPage: g,
    hasNextPage: k,
    hasPreviousPage: f
  } = Oe({
    data: l,
    itemsPerPage: r
  }), b = d;
  return /* @__PURE__ */ e.jsxs(re, { children: [
    /* @__PURE__ */ e.jsxs(ie, { className: "pb-5", children: [
      /* @__PURE__ */ e.jsx(oe, { children: "Feedback" }),
      /* @__PURE__ */ e.jsx(le, { children: "What did your readers think?" })
    ] }),
    t.totalFeedback > 0 ? /* @__PURE__ */ e.jsxs(I, { className: "pb-3", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
        /* @__PURE__ */ e.jsx(Nt, { className: "pb-3", defaultValue: "positive", value: n, variant: "button", onValueChange: (m) => i(m), children: /* @__PURE__ */ e.jsxs(wt, { className: "gap-1", children: [
          /* @__PURE__ */ e.jsx(ve, { className: "h-7", value: "positive", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 text-xs", children: [
            /* @__PURE__ */ e.jsx(yt, { size: 14, strokeWidth: 1.25 }),
            /* @__PURE__ */ e.jsx("span", { className: "hidden font-medium sm:visible! sm:inline!", children: "More like this" }),
            /* @__PURE__ */ e.jsx("span", { className: "font-semibold tracking-tight", children: R(t.positiveFeedback / t.totalFeedback) })
          ] }) }),
          /* @__PURE__ */ e.jsx(ve, { className: "h-7", value: "negative", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 text-xs", children: [
            /* @__PURE__ */ e.jsx(Ct, { size: 14, strokeWidth: 1.25 }),
            /* @__PURE__ */ e.jsx("span", { className: "hidden font-medium sm:visible! sm:inline!", children: "Less like this" }),
            /* @__PURE__ */ e.jsx("span", { className: "font-semibold tracking-tight", children: R(t.negativeFeedback / t.totalFeedback) })
          ] }) })
        ] }) }),
        /* @__PURE__ */ e.jsx(Le, { className: "mr-2 mb-3 lg:hidden xl:visible! xl:block!", children: "Date" })
      ] }),
      /* @__PURE__ */ e.jsx(ce, {}),
      b ? /* @__PURE__ */ e.jsx(Se, { className: "mt-3", lines: 3 }) : c && c.length > 0 ? /* @__PURE__ */ e.jsx("div", { className: "flex w-full flex-col py-3", children: c.map((m) => {
        var y, j;
        return /* @__PURE__ */ e.jsxs("div", { className: "flex h-10 w-full items-center justify-between gap-3 rounded-sm border-none px-2 text-sm hover:cursor-pointer hover:bg-accent", onClick: () => {
          a(`/members/${m.member.id}`, { crossApp: !0 });
        }, children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 font-medium", children: [
            /* @__PURE__ */ e.jsxs(De, { className: "size-7", children: [
              ((y = m.member) == null ? void 0 : y.avatar_image) && /* @__PURE__ */ e.jsx("img", { className: "absolute aspect-square size-full", src: (j = m.member) == null ? void 0 : j.avatar_image }),
              /* @__PURE__ */ e.jsx(Ve, { className: "text-white", style: {
                backgroundColor: `${ot(be(m.member), "75", "55")}`
              }, children: $t(m.member) })
            ] }),
            be(m.member)
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "whitespace-nowrap text-muted-foreground", children: lt(m.created_at) })
        ] }, m.id);
      }) }) : /* @__PURE__ */ e.jsx("div", { className: "flex h-full items-center justify-center py-8 text-center text-sm text-muted-foreground", children: /* @__PURE__ */ e.jsxs("div", { children: [
        "No ",
        n === "positive" ? "positive" : "negative",
        " feedback yet"
      ] }) })
    ] }) : /* @__PURE__ */ e.jsxs(I, { className: "flex grow flex-col items-center justify-center text-center text-sm text-muted-foreground", children: [
      /* @__PURE__ */ e.jsx("div", { children: "No members have given feedback yet" }),
      /* @__PURE__ */ e.jsx("div", { children: "When someone does, you'll see their response here." })
    ] }),
    t.totalFeedback > 0 && /* @__PURE__ */ e.jsx(Pe, { className: "grow-0", children: /* @__PURE__ */ e.jsxs("div", { className: "flex w-full items-center justify-between gap-3", children: [
      /* @__PURE__ */ e.jsxs(V, { variant: "outline", onClick: () => {
        const m = `(feedback.post_id:'${s}'+feedback.score:1)`, y = `(feedback.post_id:'${s}'+feedback.score:0)`, j = `${encodeURIComponent(m)}&post=${s}`, F = `${encodeURIComponent(y)}&post=${s}`;
        a(`/members?filter=${n === "positive" ? j : F}`, { crossApp: !0 });
      }, children: [
        "View all",
        /* @__PURE__ */ e.jsx(gt, {})
      ] }),
      u > 1 && /* @__PURE__ */ e.jsx(me, { className: "pb-0", children: /* @__PURE__ */ e.jsxs(pe, { children: [
        /* @__PURE__ */ e.jsx(
          ge,
          {
            disabled: !f,
            onClick: g
          }
        ),
        /* @__PURE__ */ e.jsx(
          xe,
          {
            disabled: !k,
            onClick: x
          }
        )
      ] }) })
    ] }) })
  ] });
}, ms = () => {
  const { mutateAsync: t, isLoading: s } = Dt();
  return {
    editLinks: t,
    isEditLinksLoading: s
  };
}, ps = (t) => {
  const { data: s, isLoading: a } = je(t), { data: n, isLoading: i } = je(t, {
    searchParams: {
      include: "count.positive_feedback,count.negative_feedback"
    }
  }), r = v(() => s == null ? void 0 : s.posts[0], [s]), o = v(() => n == null ? void 0 : n.posts[0], [n]), l = v(() => {
    var h, C, L, P, w, _;
    return r ? {
      sent: ((h = r.email) == null ? void 0 : h.email_count) || 0,
      opened: ((C = r.email) == null ? void 0 : C.opened_count) || 0,
      clicked: ((L = r.count) == null ? void 0 : L.clicks) || 0,
      openedRate: (P = r.email) != null && P.opened_count ? r.email.opened_count / r.email.email_count : 0,
      clickedRate: (w = r.count) != null && w.clicks && ((_ = r.email) != null && _.email_count) ? r.count.clicks / r.email.email_count : 0
    } : {
      sent: 0,
      opened: 0,
      clicked: 0,
      openedRate: 0,
      clickedRate: 0
    };
  }, [r]), d = v(() => {
    if (!(o != null && o.count))
      return {
        positiveFeedback: 0,
        negativeFeedback: 0,
        totalFeedback: 0
      };
    const h = o.count.positive_feedback || 0, C = o.count.negative_feedback || 0, L = h + C;
    return {
      positiveFeedback: h,
      negativeFeedback: C,
      totalFeedback: L
    };
  }, [o]), u = v(() => {
    var h;
    return (h = r == null ? void 0 : r.newsletter) == null ? void 0 : h.id;
  }, [r]), { data: c, isLoading: x } = It({
    searchParams: u ? { newsletter_id: u } : {},
    enabled: !!u
  }), g = v(() => c != null && c.stats ? c.stats.map((h) => h.post_id) : [], [c]), { data: k, isLoading: f } = zt({
    searchParams: u && g.length > 0 ? {
      newsletter_id: u,
      post_ids: g.join(",")
    } : {},
    enabled: !!u && g.length > 0
  }), b = v(() => {
    if (!(c != null && c.stats))
      return;
    const h = c.stats, C = (k == null ? void 0 : k.stats) || [], L = /* @__PURE__ */ new Map();
    C.forEach((w) => {
      L.set(w.post_id, w);
    });
    const P = h.map((w) => {
      const _ = L.get(w.post_id);
      return {
        ...w,
        total_clicks: (_ == null ? void 0 : _.total_clicks) || 0,
        click_rate: (_ == null ? void 0 : _.click_rate) || 0
      };
    });
    return {
      ...c,
      stats: P
    };
  }, [c, k]), m = x || f, { data: y, isLoading: j, refetch: F } = Vt({
    searchParams: {
      filter: `post_id:'${t}'`
    }
  }), S = v(() => {
    if (!b || !b.stats)
      return {
        openRate: 0,
        clickRate: 0
      };
    const h = b.stats;
    if (h.length === 0)
      return {
        openRate: 0,
        clickRate: 0
      };
    const C = h.reduce((P, w) => P + (w.open_rate || 0), 0), L = h.reduce((P, w) => P + (w.click_rate || 0), 0);
    return {
      openRate: Number((C / h.length).toFixed(2)),
      clickRate: Number((L / h.length).toFixed(2))
    };
  }, [b]), G = v(() => Ot(y), [y]), K = v(() => ({
    openedRate: S.openRate,
    clickedRate: S.clickRate
  }), [S]);
  return {
    post: r,
    stats: l,
    feedbackStats: d,
    averageStats: K,
    topLinks: G,
    refetchTopLinks: F,
    isLoading: a || i || m || j
  };
}, gs = ({
  breakpoints: t = {
    sm: 1080,
    md: 1280,
    lg: 1360
  }
} = {}) => {
  const [s, a] = E("md");
  return D(() => {
    const n = () => {
      const i = window.innerWidth;
      i < t.sm ? a("sm") : i < t.md ? a("md") : a("lg");
    };
    return n(), window.addEventListener("resize", n), () => window.removeEventListener("resize", n);
  }, [t]), {
    chartSize: s,
    isSmall: s === "sm",
    isMedium: s === "md",
    isLarge: s === "lg"
  };
}, Ne = () => /* @__PURE__ */ e.jsx("div", { className: "absolute top-1/2 -right-4 z-10 hidden size-8 -translate-y-1/2 items-center justify-center rounded-full border bg-background text-muted-foreground md:visible! md:flex!", children: /* @__PURE__ */ e.jsx(bt, { className: "ml-0.5", size: 16, strokeWidth: 1.5 }) }), we = ({
  dataColor: t,
  value: s,
  avgValue: a
}) => /* @__PURE__ */ e.jsxs("div", { className: "absolute top-6 left-1/2 z-50 flex w-[200px] -translate-x-1/2 flex-col items-stretch gap-1.5 rounded-md bg-background px-4 py-2 text-sm opacity-0 shadow-md transition-all group-hover/block:top-3 group-hover/block:opacity-100", children: [
  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 text-muted-foreground", children: [
      /* @__PURE__ */ e.jsx(
        "div",
        {
          className: "size-2 rounded-full bg-chart-blue opacity-50",
          style: {
            backgroundColor: t
          }
        }
      ),
      "This newsletter"
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "text-right font-mono", children: s })
  ] }),
  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 text-muted-foreground", children: [
      /* @__PURE__ */ e.jsx("div", { className: "size-2 rounded-full bg-chart-gray opacity-80" }),
      "Average"
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "text-right font-mono", children: a })
  ] })
] }), Ss = () => {
  const t = Ce(), [s, a] = E(null), [n, i] = E(""), r = ae(null), o = ae(null), l = 10, { chartSize: d } = gs(), { appSettings: u } = ct(), { emailTrackClicks: c, emailTrackOpens: x } = (u == null ? void 0 : u.analytics) || {}, { post: g, isPostLoading: k, postId: f } = Wt(), b = (p) => t(Mt({ filter: p }), { crossApp: !0 }), m = g, y = xt(m);
  D(() => {
    !k && !y && t(`/posts/analytics/${f}`);
  }, [t, f, k, y]);
  const { stats: j, averageStats: F, topLinks: S, isLoading: G, refetchTopLinks: K } = ps(f), { editLinks: h } = ms(), C = v(() => {
    if (!(m != null && m.count))
      return {
        positiveFeedback: 0,
        negativeFeedback: 0,
        totalFeedback: 0
      };
    const p = m.count.positive_feedback || 0, N = m.count.negative_feedback || 0, T = p + N;
    return {
      positiveFeedback: p,
      negativeFeedback: N,
      totalFeedback: T
    };
  }, [m]), L = v(() => {
    var p;
    return ((p = m == null ? void 0 : m.newsletter) == null ? void 0 : p.feedback_enabled) === !0;
  }, [m]), P = v(() => C.totalFeedback > 0 ? !0 : L, [C.totalFeedback, L]), w = (p) => {
    const N = te(S, p);
    N && (a(p), i(N.link.to));
  }, _ = () => {
    if (!s)
      return;
    const p = te(S, s);
    if (!p)
      return;
    const N = n.trim();
    if (N === "" || N === p.link.to) {
      a(null), i("");
      return;
    }
    h({
      originalUrl: p.link.originalTo,
      editedUrl: n,
      postId: f
    }, {
      onSuccess: () => {
        a(null), i(""), K();
      }
    });
  }, {
    totalPages: We,
    paginatedData: q,
    nextPage: He,
    previousPage: Ue,
    hasNextPage: Ge,
    hasPreviousPage: Ke
  } = Oe({
    data: S,
    itemsPerPage: l
  });
  D(() => {
    if (s && r.current) {
      r.current.focus();
      const p = te(S, s), N = (T) => {
        o.current && !o.current.contains(T.target) && n === (p == null ? void 0 : p.link.to) && (a(null), i(""));
      };
      return document.addEventListener("mousedown", N), () => {
        document.removeEventListener("mousedown", N);
      };
    }
  }, [s, n, S]);
  const Y = G || k, qe = [
    { datatype: "Sent", value: 1, fill: "url(#gradientPurple)", color: "var(--chart-purple)" }
  ], Ye = {
    percentage: {
      label: "O"
    },
    Average: {
      label: "Average"
    },
    "This newsletter": {
      label: "This newsletter"
    }
  }, Ze = [
    { datatype: "Average", value: F.openedRate, fill: "url(#gradientGray)", color: "var(--chart-gray)" },
    { datatype: "This newsletter", value: j.openedRate, fill: "url(#gradientBlue)", color: "var(--chart-blue)" }
  ], Qe = {
    percentage: {
      label: "Opened"
    },
    Average: {
      label: "Average"
    },
    "This newsletter": {
      label: "This newsletter"
    }
  }, Je = [
    { datatype: "Average", value: F.clickedRate, fill: "url(#gradientGray)", color: "var(--chart-gray)" },
    { datatype: "This newsletter", value: j.clickedRate, fill: "url(#gradientTeal)", color: "var(--chart-teal)" }
  ], Xe = {
    percentage: {
      label: "Clicked"
    },
    Average: {
      label: "Average"
    },
    "This newsletter": {
      label: "This newsletter"
    }
  };
  let z = "grid-cols-3", M = "aspect-[16/10] w-full max-w-[320px] sm:aspect-[2/1] md:aspect-[10/14] md:max-w-none lg:aspect-square";
  return (!c || !x) && (z = "grid-cols-2", M = "aspect-[16/10] w-full max-w-[320px] sm:aspect-[2/1] md:aspect-square md:max-w-none lg:aspect-[15/10]"), !c && !x && (z = "grid-cols-1", M = "aspect-square w-full sm:aspect-[16/10] md:max-w-[320px] md:max-h-[320px] lg:aspect-[12/10]"), /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(ft, { currentTab: "Newsletter" }),
    /* @__PURE__ */ e.jsx(ht, { children: /* @__PURE__ */ e.jsxs("div", { className: `grid grid-cols-1 gap-6 ${P && c && "lg:grid-cols-2"}`, children: [
      /* @__PURE__ */ e.jsxs(re, { className: P && c ? "lg:col-span-2" : "", children: [
        /* @__PURE__ */ e.jsxs(ie, { className: "hidden", children: [
          /* @__PURE__ */ e.jsx(oe, { children: "Newsletters" }),
          /* @__PURE__ */ e.jsx(le, { children: "How did this post perform" })
        ] }),
        Y ? /* @__PURE__ */ e.jsx(I, { className: "h-[25vw] p-6", children: /* @__PURE__ */ e.jsx(Bt, {}) }) : /* @__PURE__ */ e.jsxs(I, { className: "p-0", children: [
          /* @__PURE__ */ e.jsxs("div", { className: `grid ${z} items-stretch border-b`, children: [
            /* @__PURE__ */ e.jsxs(Z, { className: "group relative isolate grow p-3 md:px-6 md:py-5", children: [
              /* @__PURE__ */ e.jsx(Q, { onClick: () => {
                b(`emails.post_id:${f}`);
              }, children: "View members →" }),
              /* @__PURE__ */ e.jsxs(J, { onClick: () => {
                b(`emails.post_id:${f}`);
              }, children: [
                /* @__PURE__ */ e.jsx("div", { className: "ml-0.5 size-[9px] rounded-full bg-chart-purple opacity-50" }),
                "Sent"
              ] }),
              /* @__PURE__ */ e.jsx(X, { children: /* @__PURE__ */ e.jsx(ee, { className: "text-xl leading-none sm:text-2xl md:text-[2.6rem]", children: W(j.sent) }) })
            ] }),
            x && /* @__PURE__ */ e.jsxs(Z, { className: "p-3 md:px-6 md:py-5", children: [
              /* @__PURE__ */ e.jsx(Q, { onClick: () => {
                b(`opened_emails.post_id:${f}`);
              }, children: "View members →" }),
              /* @__PURE__ */ e.jsxs(J, { onClick: () => {
                b(`opened_emails.post_id:${f}`);
              }, children: [
                /* @__PURE__ */ e.jsx("div", { className: "ml-0.5 size-[9px] rounded-full bg-chart-blue opacity-50" }),
                "Opened"
              ] }),
              /* @__PURE__ */ e.jsx(X, { children: /* @__PURE__ */ e.jsx(ee, { className: "text-xl leading-none sm:text-2xl md:text-[2.6rem]", children: W(j.opened) }) })
            ] }),
            c && /* @__PURE__ */ e.jsxs(Z, { className: "group relative isolate grow p-3 md:px-6 md:py-5", children: [
              /* @__PURE__ */ e.jsx(Q, { onClick: () => {
                b(`clicked_links.post_id:${f}`);
              }, children: "View members →" }),
              /* @__PURE__ */ e.jsxs(J, { onClick: () => {
                b(`clicked_links.post_id:${f}`);
              }, children: [
                /* @__PURE__ */ e.jsx("div", { className: "ml-0.5 size-[9px] rounded-full bg-chart-teal opacity-50" }),
                "Clicked"
              ] }),
              /* @__PURE__ */ e.jsx(X, { children: /* @__PURE__ */ e.jsx(ee, { className: "text-xl leading-none sm:text-2xl md:text-[2.6rem]", children: W(j.clicked) }) })
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: `$ mx-auto grid grid-cols-1 items-center justify-center gap-4 transition-all md:gap-0 ${z === "grid-cols-2" && "md:grid-cols-2"} ${z === "grid-cols-3" && "md:grid-cols-3"}`, children: [
            /* @__PURE__ */ e.jsxs("div", { className: `relative border-r-0 px-6 ${(x || c) && "md:border-r"}`, children: [
              /* @__PURE__ */ e.jsx(
                se,
                {
                  className: M,
                  config: Ye,
                  data: qe,
                  percentageLabel: "Sent",
                  percentageValue: R(1),
                  size: d,
                  tooltip: !1
                }
              ),
              (x || c) && /* @__PURE__ */ e.jsx(Ne, {})
            ] }),
            x && /* @__PURE__ */ e.jsxs("div", { className: `group/block relative border-r-0 px-6 transition-all hover:bg-muted/25 ${c && "md:border-r"}`, children: [
              /* @__PURE__ */ e.jsx(
                we,
                {
                  avgValue: R(F.openedRate),
                  dataColor: "var(--chart-blue)",
                  value: R(j.openedRate)
                }
              ),
              /* @__PURE__ */ e.jsx(
                se,
                {
                  className: M,
                  config: Qe,
                  data: Ze,
                  percentageLabel: "Open rate",
                  percentageValue: R(j.openedRate),
                  size: d,
                  tooltip: !1
                }
              ),
              c && /* @__PURE__ */ e.jsx(Ne, {})
            ] }),
            c && /* @__PURE__ */ e.jsxs("div", { className: "group/block relative px-6 transition-all hover:bg-muted/25", children: [
              /* @__PURE__ */ e.jsx(
                we,
                {
                  avgValue: R(F.clickedRate),
                  dataColor: "var(--chart-teal)",
                  value: R(j.clickedRate)
                }
              ),
              /* @__PURE__ */ e.jsx(
                se,
                {
                  className: M,
                  config: Xe,
                  data: Je,
                  percentageLabel: "Click rate",
                  percentageValue: R(j.clickedRate),
                  size: d,
                  tooltip: !1
                }
              )
            ] })
          ] })
        ] })
      ] }),
      P && /* @__PURE__ */ e.jsx(us, { feedbackStats: C }),
      c && /* @__PURE__ */ e.jsxs(re, { className: "group/datalist overflow-hidden", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between p-6", children: [
          /* @__PURE__ */ e.jsxs(ie, { className: "p-0", children: [
            /* @__PURE__ */ e.jsx(oe, { children: "Newsletter clicks" }),
            /* @__PURE__ */ e.jsx(le, { children: "Which links resonated with your readers" })
          ] }),
          /* @__PURE__ */ e.jsx(Le, { className: "mr-2", children: "Members" })
        ] }),
        Y ? /* @__PURE__ */ e.jsxs(I, { className: "p-6 pt-0", children: [
          /* @__PURE__ */ e.jsx(ce, {}),
          /* @__PURE__ */ e.jsx(Se, { className: "mt-6" })
        ] }) : /* @__PURE__ */ e.jsxs(I, { className: "pb-0", children: [
          /* @__PURE__ */ e.jsx(ce, {}),
          S.length > 0 ? /* @__PURE__ */ e.jsx(Lt, { className: "", children: /* @__PURE__ */ e.jsx(Pt, { children: q == null ? void 0 : q.map((p) => {
            const N = j.clicked > 0 ? p.count / j.clicked : 0, T = p.link.link_id, fe = p.link.title, et = p.link.to, tt = p.link.edited;
            return /* @__PURE__ */ e.jsxs(St, { children: [
              s !== T && /* @__PURE__ */ e.jsx(_t, { style: {
                width: `${N ? Math.round(N * 100) : 0}%`
              } }),
              /* @__PURE__ */ e.jsx(Rt, { className: "w-full", children: s === T ? /* @__PURE__ */ e.jsxs("div", { ref: o, className: "flex w-full items-center gap-2", children: [
                /* @__PURE__ */ e.jsx(
                  Be,
                  {
                    ref: r,
                    className: "z-50 h-7 w-full border-border bg-background text-sm",
                    value: n,
                    onChange: (st) => i(st.target.value)
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  V,
                  {
                    size: "sm",
                    onClick: _,
                    children: "Update"
                  }
                )
              ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                /* @__PURE__ */ e.jsx(
                  V,
                  {
                    className: "mr-2 shrink-0 bg-background",
                    size: "sm",
                    variant: "outline",
                    onClick: () => w(T),
                    children: /* @__PURE__ */ e.jsx(vt, {})
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  "a",
                  {
                    className: "block truncate font-medium hover:underline",
                    href: et,
                    rel: "noreferrer",
                    target: "_blank",
                    title: fe,
                    children: fe
                  }
                ),
                tt && /* @__PURE__ */ e.jsx("span", { className: "ml-1 text-gray-500", children: "(edited)" })
              ] }) }),
              /* @__PURE__ */ e.jsxs(At, { children: [
                /* @__PURE__ */ e.jsx(Ft, { children: W(p.count || 0) }),
                /* @__PURE__ */ e.jsx(Tt, { children: R(N) })
              ] })
            ] }, T);
          }) }) }) : /* @__PURE__ */ e.jsx("div", { className: "py-20 text-center text-sm text-gray-700", children: "You have no links in your post." })
        ] }),
        !Y && S.length > 1 && /* @__PURE__ */ e.jsx(Pe, { children: /* @__PURE__ */ e.jsxs("div", { className: "flex w-full items-start justify-between gap-3", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "mt-2 flex items-start gap-2 pl-4 text-sm text-green", children: [
            /* @__PURE__ */ e.jsx(Et, { size: 20, strokeWidth: 1.5 }),
            "Sent a broken link? You can update it!"
          ] }),
          We > 1 && /* @__PURE__ */ e.jsx(me, { className: "pb-0", children: /* @__PURE__ */ e.jsxs(pe, { children: [
            /* @__PURE__ */ e.jsx(
              ge,
              {
                disabled: !Ke,
                onClick: Ue
              }
            ),
            /* @__PURE__ */ e.jsx(
              xe,
              {
                disabled: !Ge,
                onClick: He
              }
            )
          ] }) })
        ] }) })
      ] })
    ] }) })
  ] });
};
export {
  Ss as default
};
//# sourceMappingURL=newsletter-Chf8ePLH.mjs.map
