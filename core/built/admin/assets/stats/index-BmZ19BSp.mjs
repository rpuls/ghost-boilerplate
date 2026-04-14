import { c as we, f as F, j as e, S as ye, a as _, u as ie, b as J, d as E, e as H, g as ne, h as x, i as Z, R as ke, k as ee, l as se, m as L, A as _e } from "./index-LBcSX-Bd.mjs";
import { B as T, X as Ce, H as le, C as ze, L as Te, a as I, b as V, c as B, d as O, e as U, S as y, f as Ae, P as Me, g as Le, G as R, U as oe, M as q, h as Ee, E as S, F as ce, i as $e, j as We, k as G, l as De, m as P, n as X, K as Re, o as Fe, p as He, q as Ie, I as Ve, r as Be, s as ae, t as te, u as Oe, v as Ue, w as Ge, x as Ye, y as Ke, z as D, A as Qe, D as Y, J as qe, N as Pe, O as Xe, Q as Je, R as Se, T as Ze } from "./stats-CYKBl8ke.mjs";
import { R as es, T as ss, P as as, C as de, a as me, D as ue, O as he, g as xe, b as ts } from "./audience-BEeBtpYR.mjs";
import { u as rs } from "./use-growth-stats-8Lc7EDaR.mjs";
const is = "PostsResponseType", ns = we({
  dataType: is,
  path: "/posts/"
});
function ls(s) {
  const t = s.open_rate !== null;
  return s.status === "sent" ? "Email only" : s.status === "published" ? t ? "Published and sent" : "Published" : s.status;
}
function os(s) {
  return !!s.email_only && s.status === "sent";
}
function cs(s) {
  return s.status === "published" && !pe(s);
}
function ds(s) {
  return s.status === "published" && pe(s);
}
function pe(s) {
  var t, a;
  const i = s.status === "published", n = s.status === "sent", l = !!s.email, u = ((t = s.email) == null ? void 0 : t.status) !== "failed", o = typeof ((a = s.email) == null ? void 0 : a.email_count) == "number" && s.email.email_count > 0;
  return (n || i) && l && (u || o);
}
function ms(s, t) {
  const a = (t == null ? void 0 : t.membersTrackSources) ?? !0;
  return os(s) ? {
    showEmailMetrics: !0,
    showWebMetrics: !1,
    showMemberGrowth: a
  } : cs(s) ? {
    showEmailMetrics: !1,
    showWebMetrics: !0,
    showMemberGrowth: a
  } : ds(s) ? {
    showEmailMetrics: !0,
    showWebMetrics: !0,
    showMemberGrowth: a
  } : {
    showEmailMetrics: !1,
    showWebMetrics: !0,
    showMemberGrowth: a
  };
}
const us = es, hs = ss, xs = as, ge = F(({ className: s, ...t }, a) => /* @__PURE__ */ e.jsx(
  he,
  {
    ref: a,
    className: _(
      "fixed inset-0 z-50 bg-black/30 backdrop-blur-none transform-gpu data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=open]:backdrop-blur-[3px]",
      s
    ),
    ...t
  }
));
ge.displayName = he.displayName;
const fe = F(({ className: s, children: t, ...a }, i) => /* @__PURE__ */ e.jsx(xs, { children: /* @__PURE__ */ e.jsxs("div", { className: ye, children: [
  /* @__PURE__ */ e.jsx(ge, {}),
  /* @__PURE__ */ e.jsx(
    de,
    {
      ref: i,
      className: _(
        "fixed left-[50%] top-[8vmin] z-50 grid w-full max-w-lg translate-x-[-50%] gap-6 bg-surface-overlay p-6 shadow-lg duration-200 transform-gpu data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg outline-hidden",
        s
      ),
      ...a,
      children: t
    }
  )
] }) }));
fe.displayName = de.displayName;
const be = ({
  className: s,
  ...t
}) => /* @__PURE__ */ e.jsx(
  "div",
  {
    className: _(
      "flex flex-col gap-y-1.5 text-center sm:text-left",
      s
    ),
    ...t
  }
);
be.displayName = "DialogHeader";
const je = ({
  className: s,
  ...t
}) => /* @__PURE__ */ e.jsx(
  "div",
  {
    className: _(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-2 sm:items-end [&_button]:min-w-20",
      s
    ),
    ...t
  }
);
je.displayName = "DialogFooter";
const ve = F(({ className: s, ...t }, a) => /* @__PURE__ */ e.jsx(
  me,
  {
    ref: a,
    className: _(
      "text-xl font-semibold leading-none tracking-tight",
      s
    ),
    ...t
  }
));
ve.displayName = me.displayName;
const Ne = F(({ className: s, ...t }, a) => /* @__PURE__ */ e.jsx(
  ue,
  {
    ref: a,
    className: _("text-sm text-muted-foreground", s),
    ...t
  }
));
Ne.displayName = ue.displayName;
const ps = ({
  emailOnly: s = !1,
  postURL: t = "",
  primaryTitle: a = "Your post is published.",
  secondaryTitle: i = "Spread the word!",
  description: n = "",
  featureImageURL: l = "",
  postTitle: u = "",
  postExcerpt: o = "",
  faviconURL: c = "",
  siteTitle: p = "",
  author: d = "",
  onClose: g = () => {
  },
  children: N,
  ...f
}) => {
  const [r, m] = ie(!1), v = async () => {
    try {
      await navigator.clipboard.writeText(t), m(!0), setTimeout(() => m(!1), 2e3);
    } catch {
    }
  }, w = encodeURIComponent(u), b = encodeURIComponent(t), k = encodeURIComponent(`${u} ${t}`);
  return /* @__PURE__ */ e.jsxs(us, { ...f, children: [
    /* @__PURE__ */ e.jsx(hs, { className: "cursor-pointer", asChild: !0, children: N }),
    /* @__PURE__ */ e.jsxs(fe, { className: "max-h-[calc(100vh-16vmin)] max-w-[540px] overflow-y-auto p-8", children: [
      /* @__PURE__ */ e.jsx("div", { className: "sticky top-0 ml-auto size-0", children: /* @__PURE__ */ e.jsx(T, { className: "absolute -top-5 -right-5 cursor-pointer p-2 text-muted-foreground hover:text-foreground [&_svg]:size-6!", size: "lg", variant: "link", onClick: g, children: /* @__PURE__ */ e.jsx(Ce, { size: 24, strokeWidth: 1 }) }) }),
      /* @__PURE__ */ e.jsxs(be, { className: "relative -mt-5", children: [
        /* @__PURE__ */ e.jsxs(ve, { className: "text-3xl leading-[1.15em] font-bold", children: [
          /* @__PURE__ */ e.jsx("span", { className: "text-state-success", children: a }),
          /* @__PURE__ */ e.jsx("br", {}),
          /* @__PURE__ */ e.jsx("span", { children: i })
        ] }),
        n && /* @__PURE__ */ e.jsx(Ne, { className: "mb-0 pt-1 pb-0 text-lg text-foreground", children: n })
      ] }),
      /* @__PURE__ */ e.jsxs("a", { className: "flex flex-col items-stretch overflow-hidden rounded-md border transition-all hover:border-muted-foreground/40", href: t, rel: "noopener noreferrer", target: "_blank", children: [
        l && /* @__PURE__ */ e.jsx("div", { className: "aspect-video bg-cover bg-center", style: {
          backgroundImage: `url(${l})`
        } }),
        /* @__PURE__ */ e.jsxs("div", { className: "p-6 pt-5", children: [
          /* @__PURE__ */ e.jsx(le, { children: u }),
          o && /* @__PURE__ */ e.jsx("p", { children: o }),
          /* @__PURE__ */ e.jsxs("div", { className: "mt-2 flex items-start gap-2", children: [
            /* @__PURE__ */ e.jsx("div", { className: "mt-0.5 size-4 bg-cover bg-center", style: {
              backgroundImage: `url(${c})`
            } }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex gap-1", children: [
              /* @__PURE__ */ e.jsx("strong", { children: p }),
              /* @__PURE__ */ e.jsx("span", { children: "•" }),
              /* @__PURE__ */ e.jsx("span", { children: d })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e.jsx(je, { className: "justify-between gap-6", children: s ? /* @__PURE__ */ e.jsx(T, { className: "cursor-pointer", type: "submit", onClick: g, children: "Close" }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e.jsx("a", { "aria-label": "Share on X", className: "flex h-(--control-height) w-14 items-center justify-center rounded-xs bg-muted px-3 hover:bg-muted-foreground/20 [&_svg]:h-4", href: `https://twitter.com/intent/tweet?text=${w}%0A${b}`, rel: "noopener noreferrer", target: "_blank", children: /* @__PURE__ */ e.jsx("svg", { "aria-hidden": "true", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { className: "social-x_svg__x", d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" }) }) }),
          /* @__PURE__ */ e.jsx("a", { "aria-label": "Share on Threads", className: "flex h-(--control-height) w-14 items-center justify-center rounded-xs bg-muted px-3 hover:bg-muted-foreground/20 [&_svg]:h-4", href: `https://threads.net/intent/post?text=${k}`, rel: "noopener noreferrer", target: "_blank", children: /* @__PURE__ */ e.jsxs("svg", { fill: "none", viewBox: "0 0 18 18", children: [
            /* @__PURE__ */ e.jsx("g", { clipPath: "url(#social-threads_svg__clip0_351_18008)", children: /* @__PURE__ */ e.jsx("path", { d: "M13.033 8.38a5.924 5.924 0 00-.223-.102c-.13-2.418-1.452-3.802-3.67-3.816h-.03c-1.327 0-2.43.566-3.11 1.597l1.22.837c.507-.77 1.304-.934 1.89-.934h.02c.73.004 1.282.217 1.639.63.26.302.433.72.519 1.245a9.334 9.334 0 00-2.097-.101c-2.109.121-3.465 1.351-3.374 3.06.047.868.478 1.614 1.216 2.1.624.413 1.428.614 2.263.568 1.103-.06 1.969-.48 2.572-1.25.459-.585.749-1.342.877-2.296.526.317.915.735 1.13 1.236.366.854.387 2.255-.756 3.398-1.003 1.002-2.207 1.435-4.028 1.448-2.02-.015-3.547-.663-4.54-1.925-.93-1.182-1.41-2.89-1.428-5.075.018-2.185.498-3.893 1.428-5.075.993-1.262 2.52-1.91 4.54-1.925 2.034.015 3.588.666 4.62 1.934.505.622.886 1.405 1.137 2.317l1.43-.382c-.305-1.122-.784-2.09-1.436-2.892C13.52 1.35 11.587.517 9.096.5h-.01C6.6.517 4.689 1.354 3.404 2.986 2.262 4.44 1.672 6.46 1.652 8.994v.012c.02 2.534.61 4.555 1.752 6.008C4.69 16.646 6.6 17.483 9.086 17.5h.01c2.21-.015 3.768-.594 5.051-1.876 1.68-1.678 1.629-3.78 1.075-5.07-.397-.927-1.154-1.678-2.189-2.175zm-3.816 3.587c-.924.052-1.884-.363-1.932-1.252-.035-.659.47-1.394 1.99-1.482a8.9 8.9 0 01.512-.014c.552 0 1.068.053 1.538.156-.175 2.187-1.203 2.542-2.108 2.592z", fill: "#000" }) }),
            /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsx("clipPath", { id: "social-threads_svg__clip0_351_18008", children: /* @__PURE__ */ e.jsx("path", { d: "M0 0h17v17H0z", fill: "#fff", transform: "translate(.5 .5)" }) }) })
          ] }) }),
          /* @__PURE__ */ e.jsx("a", { "aria-label": "Share on Facebook", className: "flex h-(--control-height) w-14 items-center justify-center rounded-xs bg-muted px-3 hover:bg-muted-foreground/20 [&_svg]:h-4", href: `https://www.facebook.com/sharer/sharer.php?u=${b}`, rel: "noopener noreferrer", target: "_blank", children: /* @__PURE__ */ e.jsxs("svg", { fill: "none", viewBox: "0 0 40 40", children: [
            /* @__PURE__ */ e.jsx("title", { children: "social-facebook" }),
            /* @__PURE__ */ e.jsx("path", { className: "social-facebook_svg__fb", d: "M20 40.004c11.046 0 20-8.955 20-20 0-11.046-8.954-20-20-20s-20 8.954-20 20c0 11.045 8.954 20 20 20z", fill: "#1977f3" }),
            /* @__PURE__ */ e.jsx("path", { d: "M27.785 25.785l.886-5.782h-5.546V16.25c0-1.58.773-3.125 3.26-3.125h2.522V8.204s-2.29-.39-4.477-.39c-4.568 0-7.555 2.767-7.555 7.781v4.408h-5.08v5.782h5.08v13.976a20.08 20.08 0 003.125.242c1.063 0 2.107-.085 3.125-.242V25.785h4.66z", fill: "#fff" })
          ] }) }),
          /* @__PURE__ */ e.jsx("a", { "aria-label": "Share on LinkedIn", className: "flex h-(--control-height) w-14 items-center justify-center rounded-xs bg-muted px-3 hover:bg-muted-foreground/20 [&_svg]:h-4", href: `https://www.linkedin.com/shareArticle?mini=true&title=${w}&url=${b}`, rel: "noopener noreferrer", target: "_blank", children: /* @__PURE__ */ e.jsxs("svg", { fill: "none", viewBox: "0 0 16 16", children: [
            /* @__PURE__ */ e.jsxs("g", { clipPath: "url(#social-linkedin_svg__clip0_537_833)", children: [
              /* @__PURE__ */ e.jsx("path", { className: "social-linkedin_svg__linkedin", clipRule: "evenodd", d: "M1.778 16h12.444c.982 0 1.778-.796 1.778-1.778V1.778C16 .796 15.204 0 14.222 0H1.778C.796 0 0 .796 0 1.778v12.444C0 15.204.796 16 1.778 16z", fill: "#007ebb", fillRule: "evenodd" }),
              /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", d: "M13.778 13.778h-2.374V9.734c0-1.109-.421-1.729-1.299-1.729-.955 0-1.453.645-1.453 1.729v4.044H6.363V6.074h2.289v1.038s.688-1.273 2.322-1.273c1.634 0 2.804.997 2.804 3.061v4.878zM3.634 5.065c-.78 0-1.411-.636-1.411-1.421s.631-1.422 1.41-1.422c.78 0 1.411.637 1.411 1.422 0 .785-.631 1.421-1.41 1.421zm-1.182 8.713h2.386V6.074H2.452v7.704z", fill: "#fff", fillRule: "evenodd" })
            ] }),
            /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsx("clipPath", { id: "social-linkedin_svg__clip0_537_833", children: /* @__PURE__ */ e.jsx("path", { d: "M0 0h16v16H0z", fill: "#fff" }) }) })
          ] }) })
        ] }),
        /* @__PURE__ */ e.jsxs(
          T,
          {
            className: "ml-0! grow cursor-pointer",
            disabled: !t,
            type: "button",
            onClick: v,
            children: [
              r ? /* @__PURE__ */ e.jsx(ze, {}) : /* @__PURE__ */ e.jsx(Te, {}),
              r ? "Copied!" : "Copy link"
            ]
          }
        )
      ] }) })
    ] })
  ] });
}, gs = (s) => s.email_only ? "Sent" : s.email ? "Published and sent" : "Published", fs = ({
  latestPostStats: s,
  isLoading: t
}) => {
  var k, M, $, W;
  const a = J(), [i, n] = ie(!1), { site: l, settings: u } = E(), { appSettings: o } = H(), {
    emailTrackClicks: c,
    emailTrackOpens: p,
    webAnalytics: d = !1,
    membersTrackSources: g = !1
  } = (o == null ? void 0 : o.analytics) || {}, N = l.title || String(((k = u.find((C) => C.key === "title")) == null ? void 0 : k.value) || "Ghost Site"), f = String(((M = u.find((C) => C.key === "timezone")) == null ? void 0 : M.value) || "Etc/UTC"), r = s ? ms(s, {
    membersTrackSources: g
  }) : null, m = "group mr-2 flex flex-col gap-1.5 hover:cursor-pointer", v = !!(s != null && s.email), w = xe({ postId: s == null ? void 0 : s.id, hasEmailData: v, analytics: { webAnalytics: d, membersTrackSources: g } }), b = w.startsWith("/editor/");
  return /* @__PURE__ */ e.jsxs(I, { className: "group/card bg-gradient-to-tr from-muted/40 to-muted/0 to-50%", "data-testid": "latest-post", children: [
    /* @__PURE__ */ e.jsxs(V, { children: [
      /* @__PURE__ */ e.jsx(B, { className: "flex items-baseline justify-between leading-snug font-medium text-muted-foreground", children: "Latest post performance" }),
      /* @__PURE__ */ e.jsx(O, { className: "hidden", children: "How your last post did" })
    ] }),
    /* @__PURE__ */ e.jsxs(U, { className: "flex flex-col gap-6 px-0 lg:flex-row xl:grid xl:grid-cols-3", children: [
      t && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex w-full items-center gap-6 px-6 xl:col-span-2", children: [
          /* @__PURE__ */ e.jsx("div", { className: "w-full max-w-[232px] grow", children: /* @__PURE__ */ e.jsx(y, { className: "aspect-[16/10] rounded-md" }) }),
          /* @__PURE__ */ e.jsxs("div", { className: "w-full grow", children: [
            /* @__PURE__ */ e.jsx(y, { className: "w-full max-w-[420px]" }),
            /* @__PURE__ */ e.jsx(y, { className: "w-1/2" })
          ] })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "flex flex-col items-stretch gap-2 px-6 text-sm", children: /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-5", children: [
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx(y, { className: "w-3/4" }),
            /* @__PURE__ */ e.jsx(y, { className: "h-10 w-1/3" })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx(y, { className: "w-3/4" }),
            /* @__PURE__ */ e.jsx(y, { className: "h-10 w-1/3" })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx(y, { className: "w-3/4" }),
            /* @__PURE__ */ e.jsx(y, { className: "h-10 w-1/3" })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx(y, { className: "w-3/4" }),
            /* @__PURE__ */ e.jsx(y, { className: "h-10 w-1/3" })
          ] })
        ] }) })
      ] }),
      !t && s && r ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-6 px-6 transition-all md:flex-row md:items-start xl:col-span-2", children: [
          s.feature_image && /* @__PURE__ */ e.jsx("div", { className: "aspect-[16/10] w-full min-w-[100px] rounded-sm bg-cover bg-center sm:max-w-[170px] lg:max-w-[170px] xl:max-w-[232px]", style: {
            backgroundImage: `url(${s.feature_image})`
          } }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex grow flex-col items-start justify-center self-stretch", children: [
            /* @__PURE__ */ e.jsx("div", { className: "text-lg leading-tighter font-semibold tracking-tight hover:cursor-pointer hover:opacity-75", onClick: () => {
              !t && s && a(w, { crossApp: !0 });
            }, children: s.title }),
            /* @__PURE__ */ e.jsxs("div", { className: "mt-0.5 text-sm text-muted-foreground", children: [
              s.authors && s.authors.length > 0 && /* @__PURE__ */ e.jsxs("div", { children: [
                "By ",
                s.authors.map((C) => C.name).join(", "),
                " – ",
                ne(s.published_at, f)
              ] }),
              /* @__PURE__ */ e.jsx("div", { className: "mt-0.5", children: gs(s) })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "mt-6 flex items-center gap-2", children: [
              !s.email_only && /* @__PURE__ */ e.jsx(
                ps,
                {
                  author: (($ = s.authors) == null ? void 0 : $.map((C) => C.name).join(", ")) || "",
                  description: "",
                  faviconURL: l.icon || "",
                  featureImageURL: s.feature_image || "",
                  open: i,
                  postExcerpt: s.excerpt || "",
                  postTitle: s.title,
                  postURL: s.url || "",
                  siteTitle: N,
                  onClose: () => n(!1),
                  onOpenChange: n,
                  children: /* @__PURE__ */ e.jsxs(T, { onClick: () => n(!0), children: [
                    /* @__PURE__ */ e.jsx(Ae, {}),
                    " Share post"
                  ] })
                }
              ),
              /* @__PURE__ */ e.jsx(
                T,
                {
                  className: s.email_only ? "w-full" : "",
                  variant: "outline",
                  onClick: () => {
                    a(w, { crossApp: !0 });
                  },
                  children: b ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                    /* @__PURE__ */ e.jsx(Me, {}),
                    /* @__PURE__ */ e.jsx("span", { className: "hidden md:visible! md:block!", children: "Edit post" })
                  ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                    /* @__PURE__ */ e.jsx(Le, {}),
                    /* @__PURE__ */ e.jsx("span", { className: "hidden md:visible! md:block!", children: s.email_only ? "Post analytics" : "Analytics" })
                  ] })
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "-ml-4 flex w-full flex-col items-stretch gap-2 pr-6 text-sm xl:h-full xl:max-w-none", children: /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-6 pl-10 lg:border-l xl:h-full", children: [
          r.showWebMetrics && d && /* @__PURE__ */ e.jsxs("div", { className: m, "data-testid": "latest-post-visitors", onClick: () => {
            a(`/posts/analytics/${s.id}/web`, { crossApp: !0 });
          }, children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 font-medium text-muted-foreground transition-all group-hover:text-foreground", children: [
              /* @__PURE__ */ e.jsx(R, { size: 16, strokeWidth: 1.25 }),
              /* @__PURE__ */ e.jsx("span", { className: "hidden md:visible! md:block!", children: "Visitors" })
            ] }),
            /* @__PURE__ */ e.jsx("span", { className: "text-[2.2rem] leading-none font-semibold tracking-tighter", children: x(s.visitors) })
          ] }),
          r.showMemberGrowth && /* @__PURE__ */ e.jsxs("div", { className: _(
            m,
            // Member metric is moved to the 2nd row in the grid if the post is email only or if web analytics is turned off, otherwise leave as is
            r.showEmailMetrics && (!r.showWebMetrics || !d) && "row-[2/3] col-[1/2]"
          ), "data-testid": "latest-post-members", onClick: () => {
            a(`/posts/analytics/${s.id}/growth`, { crossApp: !0 });
          }, children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 font-medium text-muted-foreground transition-all group-hover:text-foreground", children: [
              /* @__PURE__ */ e.jsx(oe, { size: 16, strokeWidth: 1.25 }),
              /* @__PURE__ */ e.jsx("span", { className: "hidden md:visible! md:block!", children: "Members" })
            ] }),
            /* @__PURE__ */ e.jsx("span", { className: "text-[2.2rem] leading-none font-semibold tracking-tighter", children: s.member_delta ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              "+",
              x(s.member_delta)
            ] }) : 0 })
          ] }),
          r.showEmailMetrics && s.email && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            p && /* @__PURE__ */ e.jsxs("div", { className: m, onClick: () => {
              a(`/posts/analytics/${s.id}/newsletter`, { crossApp: !0 });
            }, children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 font-medium text-muted-foreground transition-all group-hover:text-foreground", children: [
                /* @__PURE__ */ e.jsx(q, { size: 16, strokeWidth: 1.25 }),
                /* @__PURE__ */ e.jsx("span", { className: "hidden whitespace-nowrap md:visible! md:block!", children: "Opens" })
              ] }),
              /* @__PURE__ */ e.jsx("span", { className: "text-[2.2rem] leading-none font-semibold tracking-tighter", children: s.email.email_count ? Z((s.email.opened_count || 0) / s.email.email_count) : "0%" })
            ] }),
            c && /* @__PURE__ */ e.jsxs("div", { className: m, onClick: () => {
              a(`/posts/analytics/${s.id}/newsletter`, { crossApp: !0 });
            }, children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 font-medium text-muted-foreground transition-all group-hover:text-foreground", children: [
                /* @__PURE__ */ e.jsx(Ee, { size: 16, strokeWidth: 1.25 }),
                /* @__PURE__ */ e.jsx("span", { className: "hidden whitespace-nowrap md:visible! md:block!", children: "Clicks" })
              ] }),
              /* @__PURE__ */ e.jsx("span", { className: "text-[2.2rem] leading-none font-semibold tracking-tighter", children: s.email.email_count && ((W = s.count) != null && W.clicks) ? Z((s.count.clicks || 0) / s.email.email_count) : "0%" })
            ] })
          ] })
        ] }) })
      ] }) : !t && /* @__PURE__ */ e.jsx(
        S,
        {
          actions: /* @__PURE__ */ e.jsx(T, { variant: "secondary", onClick: () => {
            a("/editor/post", { crossApp: !0 });
          }, children: "New post" }),
          className: "w-full pb-10 xl:col-span-3",
          description: "Once it's live, you can track performance here",
          title: "Publish your first post",
          children: /* @__PURE__ */ e.jsx(ce, { strokeWidth: 1.5 })
        }
      )
    ] })
  ] });
}, bs = () => {
  const { data: s } = E();
  return {
    isLimited: (a) => {
      var n, l;
      const i = s == null ? void 0 : s.config;
      return (n = i == null ? void 0 : i.hostSettings) != null && n.limits && a === "limitAnalytics" ? ((l = i.hostSettings.limits.limitAnalytics) == null ? void 0 : l.disabled) === !0 : !1;
    }
  };
}, K = ({
  // linkto,
  title: s,
  iconName: t,
  description: a,
  color: i,
  diffDirection: n,
  diffValue: l,
  formattedValue: u,
  trendingFromValue: o,
  children: c,
  onClick: p
}) => {
  const { range: d } = E(), g = t && He[t], N = ke.useMemo(() => {
    if (!n || n === "empty" || d === ee.allTime.value || !l)
      return "";
    const f = n === "up" ? "up" : n === "down" ? "down" : "at", m = X(d).replace("in the ", "").replace(/^\(|\)$/g, "");
    return n === "same" ? /* @__PURE__ */ e.jsxs("span", { children: [
      "You're trending at the same level as ",
      /* @__PURE__ */ e.jsx("span", { className: "font-semibold", children: u }),
      " compared to the ",
      /* @__PURE__ */ e.jsx("span", { className: "font-semibold", children: m })
    ] }) : /* @__PURE__ */ e.jsxs("span", { children: [
      "You're trending ",
      /* @__PURE__ */ e.jsxs("span", { className: "font-semibold", children: [
        f,
        " ",
        l
      ] }),
      " from ",
      /* @__PURE__ */ e.jsx("span", { className: "font-semibold", children: o }),
      " compared to the ",
      m
    ] });
  }, [n, l, o, u, d]);
  return /* @__PURE__ */ e.jsxs(I, { className: "group", "data-testid": s, children: [
    /* @__PURE__ */ e.jsxs(V, { className: "hidden", children: [
      /* @__PURE__ */ e.jsx(B, { children: s }),
      /* @__PURE__ */ e.jsx(O, { children: a })
    ] }),
    /* @__PURE__ */ e.jsxs(Re, { className: "relative flex grow flex-row items-start justify-between gap-5 border-none pb-2 xl:pb-4", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex grow flex-col gap-1.5 border-none pb-0", children: [
        /* @__PURE__ */ e.jsxs(Fe, { className: p && "transition-all group-hover:text-foreground", children: [
          i && /* @__PURE__ */ e.jsx("span", { className: "inline-block size-2 rounded-full opacity-50", style: { backgroundColor: i } }),
          g && /* @__PURE__ */ e.jsx(g, { size: 16, strokeWidth: 1.5 }),
          s
        ] }),
        /* @__PURE__ */ e.jsx(
          Ie,
          {
            diffDirection: d === ee.allTime.value ? "hidden" : n,
            diffTooltip: N,
            diffValue: l,
            value: u
          }
        )
      ] }),
      p && /* @__PURE__ */ e.jsx(T, { className: "absolute right-6 translate-x-10 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100", size: "sm", variant: "outline", onClick: p, children: "View more" })
    ] }),
    /* @__PURE__ */ e.jsx(U, { children: c })
  ] });
}, js = ({
  kpiValues: s,
  visitorsChartData: t,
  visitorsYRange: a,
  growthTotals: i,
  membersChartData: n,
  mrrChartData: l,
  currencySymbol: u,
  isLoading: o
}) => {
  const c = J(), { range: p } = E(), { appSettings: d } = H(), N = bs().isLimited("limitAnalytics"), f = "-mb-3 h-[10vw] max-h-[200px] min-h-[100px] hover:cursor-pointer!";
  if (o)
    return /* @__PURE__ */ e.jsx($e, { className: "flex h-[calc(10vw+116px)] max-h-[416px] min-h-20 items-center justify-center hover:cursor-pointer!", children: /* @__PURE__ */ e.jsx(We, {}) });
  const r = d == null ? void 0 : d.analytics.webAnalytics, m = N && !r, v = !0, w = d == null ? void 0 : d.paidMembersEnabled, b = [r, m, v, w].filter(Boolean).length;
  let k = "lg:grid-cols-3";
  b === 2 ? k = "lg:grid-cols-2" : b === 1 && (k = "lg:grid-cols-1");
  const M = `flex flex-col lg:grid ${k} gap-6`;
  return /* @__PURE__ */ e.jsxs("div", { className: M, children: [
    r && !m && /* @__PURE__ */ e.jsx(
      K,
      {
        description: "Number of individual people who visited your website",
        diffDirection: "empty",
        formattedValue: s.visits,
        iconName: "Globe",
        linkto: "/analytics/web/",
        title: "Unique visitors",
        onClick: () => {
          c("/analytics/web/");
        },
        children: /* @__PURE__ */ e.jsx(
          G,
          {
            className: f,
            color: "var(--chart-blue)",
            data: t,
            id: "visitors",
            range: p,
            showHorizontalLines: !0,
            showYAxisValues: !1,
            syncId: "overview-charts",
            yAxisRange: a
          }
        )
      }
    ),
    m && /* @__PURE__ */ e.jsxs(I, { children: [
      /* @__PURE__ */ e.jsxs(V, { className: "hidden", children: [
        /* @__PURE__ */ e.jsx(B, { children: "Unlock web analytics" }),
        /* @__PURE__ */ e.jsx(O, { children: "Get the full picture of what's working with detailed, cookie-free traffic analytics." })
      ] }),
      /* @__PURE__ */ e.jsx(U, { className: "flex h-full items-center justify-center p-6", children: /* @__PURE__ */ e.jsx(
        S,
        {
          actions: /* @__PURE__ */ e.jsx(T, { variant: "outline", onClick: () => c("/pro", { crossApp: !0 }), children: "Upgrade now" }),
          className: "py-10",
          description: "Get the full picture of what's working with detailed, cookie-free traffic analytics.",
          title: "Unlock web analytics",
          children: /* @__PURE__ */ e.jsx(De, {})
        }
      ) })
    ] }),
    /* @__PURE__ */ e.jsx(
      K,
      {
        description: "How number of members of your publication changed over time",
        diffDirection: i.directions.total,
        diffValue: i.percentChanges.total,
        formattedValue: x(i.totalMembers),
        iconName: "User",
        linkto: "/analytics/growth/",
        title: "Members",
        trendingFromValue: `${x(n[0].value)}`,
        onClick: () => {
          c("/analytics/growth/?tab=total-members");
        },
        children: /* @__PURE__ */ e.jsx(
          G,
          {
            className: f,
            color: "var(--chart-darkblue)",
            data: n,
            id: "members",
            range: p,
            showHorizontalLines: !0,
            showYAxisValues: !1,
            syncId: "overview-charts"
          }
        )
      }
    ),
    w && /* @__PURE__ */ e.jsx(
      K,
      {
        description: "Monthly recurring revenue changes over time",
        diffDirection: i.directions.mrr,
        diffValue: i.percentChanges.mrr,
        formattedValue: `${u}${x(P(i.mrr))}`,
        iconName: "Coins",
        linkto: "/analytics/growth/",
        title: "MRR",
        trendingFromValue: `${u}${x(l[0].value)}`,
        onClick: () => {
          c("/analytics/growth/?tab=mrr");
        },
        children: /* @__PURE__ */ e.jsx(
          G,
          {
            className: f,
            color: "var(--chart-teal)",
            data: l,
            id: "mrr",
            range: p,
            showHorizontalLines: !0,
            showYAxisValues: !1,
            syncId: "overview-charts"
          }
        )
      }
    )
  ] });
}, vs = ({
  className: s
}) => /* @__PURE__ */ e.jsx("div", { className: _("rounded-sm bg-muted dark:bg-[#36373a] flex flex-col items-center justify-center gap-1 p-6", s), children: /* @__PURE__ */ e.jsx(Ve, { className: "text-muted-foreground/50", size: 18, strokeWidth: 1.5 }) }), Q = ({
  className: s,
  metrics: t,
  title: a
}) => /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsxs("div", { className: _("pointer-events-none absolute bottom-[calc(100%+2px)] left-1/2 z-50 min-w-[160px] -translate-x-1/2 rounded-md bg-background p-3 text-sm opacity-0 shadow-md transition-all group-hover/tooltip:bottom-[calc(100%+12px)] group-hover/tooltip:opacity-100", s), children: [
  /* @__PURE__ */ e.jsx("div", { className: "mb-1.5 border-b pr-10 pb-1.5 font-medium whitespace-nowrap text-muted-foreground", children: a }),
  /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-1.5", children: t == null ? void 0 : t.map((i) => /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between gap-5", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 whitespace-nowrap", children: [
      i.icon,
      i.label
    ] }),
    /* @__PURE__ */ e.jsx("span", { className: "font-mono", children: i.metric })
  ] }, i.label)) })
] }) }), Ns = ({
  topPostsData: s,
  isLoading: t
}) => {
  var N, f;
  const a = J(), { range: i, settings: n } = E(), { appSettings: l } = H(), u = String(((N = n.find((r) => r.key === "timezone")) == null ? void 0 : N.value) || "Etc/UTC"), {
    webAnalytics: o = !1,
    membersTrackSources: c = !1,
    emailTrackClicks: p = !1,
    emailTrackOpens: d = !1
  } = (l == null ? void 0 : l.analytics) || {}, g = "flex items-center justify-end gap-1 rounded-md px-2 py-1 font-mono text-gray-800 hover:bg-muted-foreground/10 group-hover:text-foreground";
  return /* @__PURE__ */ e.jsxs(I, { className: "group/card w-full lg:col-span-2", "data-testid": "top-posts-card", children: [
    /* @__PURE__ */ e.jsxs(V, { children: [
      /* @__PURE__ */ e.jsxs(B, { className: "flex items-baseline justify-between leading-snug  font-medium text-muted-foreground", children: [
        "Top posts ",
        X(i)
      ] }),
      /* @__PURE__ */ e.jsx(O, { className: "hidden", children: "Most viewed posts in this period" })
    ] }),
    /* @__PURE__ */ e.jsx(U, { children: t ? /* @__PURE__ */ e.jsx(Be, { className: "mt-6" }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      (f = s == null ? void 0 : s.stats) == null ? void 0 : f.map((r) => /* @__PURE__ */ e.jsxs("div", { className: 'group relative flex w-full items-start justify-between gap-5 border-t border-border/50 py-4 before:absolute before:-inset-x-4 before:inset-y-0 before:z-0 before:hidden before:rounded-md before:bg-accent before:opacity-80 before:content-[""] first:border-border! hover:cursor-pointer hover:border-transparent hover:before:block md:items-center dark:before:bg-accent/50 [&+div]:hover:border-transparent', children: [
        /* @__PURE__ */ e.jsxs("div", { className: "z-10 flex min-w-[160px] grow items-start gap-4 md:items-center lg:min-w-[320px]", onClick: () => {
          a(xe({
            postId: r.post_id,
            hasEmailData: r.sent_count !== null,
            analytics: {
              webAnalytics: o,
              membersTrackSources: c
            }
          }), { crossApp: !0 });
        }, children: [
          r.feature_image ? /* @__PURE__ */ e.jsx("div", { className: "hidden aspect-[16/10] w-[80px] shrink-0 rounded-sm bg-cover bg-center sm:visible! sm:block! lg:w-[100px]", style: {
            backgroundImage: `url(${r.feature_image})`
          } }) : /* @__PURE__ */ e.jsx(vs, { className: "hidden aspect-[16/10] w-[80px] shrink-0 group-hover:bg-muted-foreground/10 sm:visible! sm:flex! lg:w-[100px]" }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ e.jsx("span", { className: "line-clamp-2 text-lg leading-[1.35em] font-semibold", children: r.title }),
            /* @__PURE__ */ e.jsxs("span", { className: "text-sm text-muted-foreground", children: [
              "By ",
              r.authors,
              " – ",
              ne(r.published_at, u)
            ] }),
            /* @__PURE__ */ e.jsx("span", { className: "text-sm text-muted-foreground", children: ls(r) })
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "z-10 flex flex-col items-end justify-center gap-0.5 text-sm md:flex-row md:items-center md:justify-end md:gap-3", children: [
          o && /* @__PURE__ */ e.jsxs("div", { className: "group/tooltip relative flex w-[66px] lg:w-[92px]", "data-testid": "statistics-visitors", onClick: (m) => {
            m.stopPropagation(), a(`/posts/analytics/${r.post_id}/web`, { crossApp: !0 });
          }, children: [
            /* @__PURE__ */ e.jsx(
              Q,
              {
                metrics: [
                  {
                    icon: /* @__PURE__ */ e.jsx(R, { className: "shrink-0 text-muted-foreground", size: 16, strokeWidth: 1.5 }),
                    label: "Unique visitors",
                    metric: x(r.views)
                  }
                ],
                title: "Web traffic"
              }
            ),
            /* @__PURE__ */ e.jsxs("div", { className: g, children: [
              /* @__PURE__ */ e.jsx(R, { className: "text-muted-foreground group-hover:text-foreground", size: 16, strokeWidth: 1.5 }),
              se(r.views)
            ] })
          ] }),
          r.sent_count !== null && /* @__PURE__ */ e.jsxs("div", { className: "group/tooltip relative flex w-[66px] lg:w-[92px]", onClick: (m) => {
            m.stopPropagation(), a(`/posts/analytics/${r.post_id}/newsletter`, { crossApp: !0 });
          }, children: [
            /* @__PURE__ */ e.jsx(
              Q,
              {
                className: `${c ? "" : "right-0 left-auto translate-x-0"}`,
                metrics: [
                  // Always show sent
                  {
                    icon: /* @__PURE__ */ e.jsx(ae, { className: "shrink-0 text-muted-foreground", size: 16, strokeWidth: 1.5 }),
                    label: "Sent",
                    metric: x(r.sent_count || 0)
                  },
                  // Only show opens if open tracking is enabled
                  ...d ? [{
                    icon: /* @__PURE__ */ e.jsx(q, { className: "shrink-0 text-muted-foreground", size: 16, strokeWidth: 1.5 }),
                    label: "Opens",
                    metric: x(r.opened_count || 0)
                  }] : [],
                  // Only show clicks if click tracking is enabled
                  ...p ? [{
                    icon: /* @__PURE__ */ e.jsx(te, { className: "shrink-0 text-muted-foreground", size: 16, strokeWidth: 1.5 }),
                    label: "Clicks",
                    metric: x(r.clicked_count || 0)
                  }] : []
                ],
                title: "Newsletter performance"
              }
            ),
            /* @__PURE__ */ e.jsx("div", { className: g, children: d ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              /* @__PURE__ */ e.jsx(q, { className: "text-muted-foreground group-hover:text-foreground", size: 16, strokeWidth: 1.5 }),
              r.open_rate ? `${Math.round(r.open_rate)}%` : "0%"
            ] }) : p ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              /* @__PURE__ */ e.jsx(te, { className: "text-muted-foreground group-hover:text-foreground", size: 16, strokeWidth: 1.5 }),
              r.click_rate ? `${Math.round(r.click_rate)}%` : "0%"
            ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              /* @__PURE__ */ e.jsx(ae, { className: "text-muted-foreground group-hover:text-foreground", size: 16, strokeWidth: 1.5 }),
              se(r.sent_count || 0)
            ] }) })
          ] }),
          c && /* @__PURE__ */ e.jsxs("div", { className: "group/tooltip relative flex w-[66px] lg:w-[92px]", "data-testid": "statistics-members", onClick: (m) => {
            m.stopPropagation(), a(`/posts/analytics/${r.post_id}/growth`, { crossApp: !0 });
          }, children: [
            /* @__PURE__ */ e.jsx(
              Q,
              {
                className: "right-0 left-auto translate-x-0",
                metrics: [
                  {
                    icon: /* @__PURE__ */ e.jsx(Oe, { className: "shrink-0 text-muted-foreground", size: 16, strokeWidth: 1.5 }),
                    label: "Free",
                    metric: r.free_members > 0 ? `+${x(r.free_members)}` : "0"
                  },
                  // Only show paid members if paid members are enabled
                  ...l != null && l.paidMembersEnabled ? [{
                    icon: /* @__PURE__ */ e.jsx(Ue, { className: "shrink-0 text-muted-foreground", size: 16, strokeWidth: 1.5 }),
                    label: "Paid",
                    metric: r.paid_members > 0 ? `+${x(r.paid_members)}` : "0"
                  }] : []
                ],
                title: "New members"
              }
            ),
            /* @__PURE__ */ e.jsxs("div", { className: g, children: [
              /* @__PURE__ */ e.jsx(oe, { className: "text-muted-foreground group-hover:text-foreground", size: 16, strokeWidth: 1.5 }),
              r.members > 0 ? `+${x(r.members)}` : "0"
            ] })
          ] })
        ] })
      ] }, r.post_id)),
      (!(s != null && s.stats) || s.stats.length === 0) && /* @__PURE__ */ e.jsx(
        S,
        {
          className: "w-full pb-10",
          title: `No posts ${X(i)}`,
          children: /* @__PURE__ */ e.jsx(ce, { strokeWidth: 1.5 })
        }
      )
    ] }) })
  ] });
}, ws = () => {
  const { data: { posts: [s] } = { posts: [] }, isLoading: t } = ns({
    searchParams: {
      filter: "status:[published,sent]",
      order: "published_at DESC",
      limit: "1",
      include: "authors,email,count.clicks"
    }
  }), a = s, i = Ge((a == null ? void 0 : a.id) || "", {
    enabled: !!(a != null && a.id)
  }), { data: n, isLoading: l } = i;
  return {
    data: L(() => {
      var c;
      if (!a)
        return null;
      const o = ((c = n == null ? void 0 : n.stats) == null ? void 0 : c[0]) || {
        id: a.id,
        recipient_count: null,
        opened_count: null,
        open_rate: null,
        member_delta: 0,
        free_members: 0,
        paid_members: 0,
        visitors: 0
      };
      return {
        // Post content from Posts API
        id: a.id,
        uuid: a.uuid,
        title: a.title || "",
        slug: a.slug || "",
        feature_image: a.feature_image || null,
        published_at: a.published_at || "",
        url: a.url || "",
        excerpt: a.excerpt || "",
        email_only: a.email_only || !1,
        status: a.status,
        email: a.email,
        count: a.count,
        authors: a.authors || [],
        // Analytics data from Stats API
        recipient_count: o.recipient_count,
        opened_count: o.opened_count,
        open_rate: o.open_rate,
        member_delta: o.member_delta,
        free_members: o.free_members,
        paid_members: o.paid_members,
        visitors: o.visitors,
        click_rate: null
        // TODO: Add click_rate to PostStats interface if needed
      };
    }, [a, n]),
    isLoading: t || !!(a != null && a.id) && l
  };
}, re = ({
  className: s,
  title: t,
  description: a,
  url: i,
  children: n
}) => /* @__PURE__ */ e.jsx("a", { className: _(
  "block rounded-xl border bg-card p-6 transition-all hover:shadow-xs hover:bg-accent/50 group/card",
  s
), href: i, rel: "noreferrer", target: "_blank", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-6", children: [
  n,
  /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-0.5 leading-tight", children: [
    /* @__PURE__ */ e.jsx("span", { className: "text-base font-semibold", children: t }),
    /* @__PURE__ */ e.jsx("span", { className: "text-sm font-normal text-gray-700", children: a })
  ] })
] }) }), zs = () => {
  const { appSettings: s } = H(), { statsConfig: t, isLoading: a, range: i } = E(), { startDate: n, endDate: l, timezone: u } = Ye(i), { isLoading: o, chartData: c, totals: p, currencySymbol: d } = rs(i), { data: g, isLoading: N } = ws(), { data: f, isLoading: r } = Ke({
    searchParams: {
      date_from: D(n),
      date_to: D(l),
      limit: "5",
      timezone: u
    }
  }), m = {
    site_uuid: (t == null ? void 0 : t.id) || "",
    date_from: D(n),
    date_to: D(l),
    timezone: u,
    member_status: ts(_e)
  }, { data: v, loading: w } = Qe({
    endpoint: "api_kpis",
    statsConfig: t,
    params: m
  }), b = L(() => {
    var j;
    return (j = Y(v || [], i, "visits", "sum")) == null ? void 0 : j.map((z) => {
      const A = Number(z.visits), h = isNaN(A) ? 0 : A;
      return {
        date: String(z.date),
        value: h,
        formattedValue: x(h),
        label: "Visitors"
      };
    });
  }, [v, i]), k = L(() => {
    const j = [0, 1];
    if (!b || b.length === 0)
      return j;
    const z = b.map((h) => h.value).filter((h) => h >= 0);
    return z.length === 0 ? j : [0, Math.max(...z) || j[1]];
  }, [b]), M = L(() => {
    if (!c || c.length === 0)
      return [];
    let j = [];
    return j = Y(c, i, "value", "exact"), j.map((h) => ({
      date: h.date,
      value: h.free + h.paid,
      formattedValue: x(h.free + h.paid),
      label: "Members"
    }));
  }, [c, i]), $ = L(() => {
    if (!(s != null && s.paidMembersEnabled) || !c || c.length === 0)
      return [];
    let j = [];
    return j = Y(c, i, "mrr", "exact"), j.map((h) => ({
      date: h.date,
      value: P(h.mrr),
      formattedValue: `${d}${x(P(h.mrr))}`,
      label: "MRR"
    }));
  }, [c, i, d, s]), W = L(() => {
    if (!(v != null && v.length))
      return { visits: "0" };
    const j = v.reduce((z, A) => {
      const h = Number(A.visits);
      return z + (isNaN(h) ? 0 : h);
    }, 0);
    return {
      visits: x(j)
    };
  }, [v]), C = a;
  return /* @__PURE__ */ e.jsxs(qe, { children: [
    /* @__PURE__ */ e.jsx(Pe, { children: /* @__PURE__ */ e.jsx(Xe, { children: /* @__PURE__ */ e.jsx(Je, { excludeRanges: ["today"] }) }) }),
    /* @__PURE__ */ e.jsxs(Se, { isLoading: C, loadingComponent: /* @__PURE__ */ e.jsx(e.Fragment, {}), children: [
      /* @__PURE__ */ e.jsx(
        js,
        {
          currencySymbol: d,
          growthTotals: p,
          isLoading: w || o,
          kpiValues: W,
          membersChartData: M,
          mrrChartData: $,
          visitorsChartData: b,
          visitorsYRange: k
        }
      ),
      /* @__PURE__ */ e.jsx(
        fs,
        {
          isLoading: N,
          latestPostStats: g
        }
      ),
      /* @__PURE__ */ e.jsx(
        Ns,
        {
          isLoading: r,
          topPostsData: f
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 gap-6 lg:grid-cols-2", children: [
        /* @__PURE__ */ e.jsx(le, { className: "mt-4 -mb-4 lg:col-span-2", children: "Grow your audience" }),
        /* @__PURE__ */ e.jsx(
          re,
          {
            description: "Find out how to review the performance of your content and get the most out of post analytics in Ghost.",
            title: "Understanding analytics in Ghost",
            url: "https://ghost.org/help/native-analytics",
            children: /* @__PURE__ */ e.jsx("div", { className: "flex h-18 w-[100px] min-w-[100px] items-center justify-center rounded-md bg-gradient-to-tr from-[#14B8FF]/20 to-[#00BBA7]/20 p-4 opacity-80 transition-all group-hover/card:opacity-100", children: /* @__PURE__ */ e.jsx(Ze, { className: "text-[#00BBA7]", size: 20, strokeWidth: 1.5 }) })
          }
        ),
        /* @__PURE__ */ e.jsx(
          re,
          {
            description: "Use these content distribution tactics to get more people to discover your work and increase engagement.",
            title: "How to get your content seen online",
            url: "https://ghost.org/resources/content-distribution/",
            children: /* @__PURE__ */ e.jsx("div", { className: "flex h-18 w-[100px] min-w-[100px] items-center justify-center rounded-md bg-gradient-to-tl from-[#FDC700]/20 to-[#FF2056]/20 p-4 opacity-80 transition-all group-hover/card:opacity-100", children: /* @__PURE__ */ e.jsx(R, { className: "text-[#FE9A00]", size: 20, strokeWidth: 1.5 }) })
          }
        )
      ] })
    ] })
  ] });
};
export {
  zs as default
};
//# sourceMappingURL=index-BmZ19BSp.mjs.map
