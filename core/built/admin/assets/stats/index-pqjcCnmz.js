import { s as Me, B as R, J as e, S as Ae, m as h, R as D, a5 as ie, a1 as q, X as L, O as W, w as ne, y as f, z as J, h as Z, j as ee, a0 as A, A as Le } from "./index-GkZC6bm6.js";
import { h as T, aT as De, y as $e, H as Ee, a5 as Re, $ as le, i as F, m as S, n as H, k as I, j as P, aD as y, aC as We, ah as Fe, t as Se, _ as E, aR as oe, a9 as Y, af as He, S as X, T as ce, ac as Ie, aP as Pe, R as Be, g as Ve, Y as V, v as Oe, aZ as K, bg as Q, a7 as Ue, a0 as Ge, aE as Ye, aA as se, ae as te, aQ as Ke, I as Qe, bK as qe, bh as Xe, bS as Je, bb as $, bP as Ze, bx as O, aG as es, aF as ss, ag as ts, K as as, aH as rs, r as is } from "./stats-BfDVnooj.js";
import { R as ns, b as ls, P as os, a as de, T as me, D as ue, O as he, e as xe, c as cs } from "./audience-BKWJSgWB.js";
import { u as ds } from "./use-growth-stats-SKsKkhBg.js";
const ms = "PostsResponseType", us = Me({
  dataType: ms,
  path: "/posts/"
});
function hs(s) {
  const a = s.open_rate !== null;
  return s.status === "sent" ? "Email only" : s.status === "published" ? a ? "Published and sent" : "Published" : s.status;
}
function xs(s) {
  return !!s.email_only && s.status === "sent";
}
function ps(s) {
  return s.status === "published" && !pe(s);
}
function gs(s) {
  return s.status === "published" && pe(s);
}
function pe(s) {
  const a = s.status === "published", t = s.status === "sent", r = !!s.email, i = s.email?.status !== "failed", l = typeof s.email?.email_count == "number" && s.email.email_count > 0;
  return (t || a) && r && (i || l);
}
function fs(s, a) {
  const t = a?.membersTrackSources ?? !0;
  return xs(s) ? {
    showEmailMetrics: !0,
    showWebMetrics: !1,
    showMemberGrowth: t
  } : ps(s) ? {
    showEmailMetrics: !1,
    showWebMetrics: !0,
    showMemberGrowth: t
  } : gs(s) ? {
    showEmailMetrics: !0,
    showWebMetrics: !0,
    showMemberGrowth: t
  } : {
    showEmailMetrics: !1,
    showWebMetrics: !0,
    showMemberGrowth: t
  };
}
const js = ns, bs = ls, vs = os, ge = R(({ className: s, ...a }, t) => /* @__PURE__ */ e.jsx(
  he,
  {
    ref: t,
    className: h(
      "fixed inset-0 z-50 bg-black/30 dark:bg-white/8 backdrop-blur-none transform-gpu data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=open]:backdrop-blur-[3px]",
      s
    ),
    ...a
  }
));
ge.displayName = he.displayName;
const fe = R(({ className: s, children: a, ...t }, r) => /* @__PURE__ */ e.jsx(vs, { children: /* @__PURE__ */ e.jsxs("div", { className: Ae, children: [
  /* @__PURE__ */ e.jsx(ge, {}),
  /* @__PURE__ */ e.jsx(
    de,
    {
      ref: r,
      className: h(
        "fixed left-[50%] top-[8vmin] z-50 grid w-full max-w-lg translate-x-[-50%] gap-6 bg-popover p-6 shadow-lg duration-200 transform-gpu data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg outline-hidden",
        s
      ),
      ...t,
      children: a
    }
  )
] }) }));
fe.displayName = de.displayName;
const je = ({
  className: s,
  ...a
}) => /* @__PURE__ */ e.jsx(
  "div",
  {
    className: h(
      "flex flex-col gap-y-1.5 text-center sm:text-left",
      s
    ),
    ...a
  }
);
je.displayName = "DialogHeader";
const be = ({
  className: s,
  ...a
}) => /* @__PURE__ */ e.jsx(
  "div",
  {
    className: h(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-2 sm:items-end [&_button]:min-w-20",
      s
    ),
    ...a
  }
);
be.displayName = "DialogFooter";
const ve = R(({ className: s, ...a }, t) => /* @__PURE__ */ e.jsx(
  me,
  {
    ref: t,
    className: h(
      "text-xl font-semibold leading-none tracking-tight",
      s
    ),
    ...a
  }
));
ve.displayName = me.displayName;
const Ne = R(({ className: s, ...a }, t) => /* @__PURE__ */ e.jsx(
  ue,
  {
    ref: t,
    className: h("text-sm text-muted-foreground", s),
    ...a
  }
));
Ne.displayName = ue.displayName;
async function Ns(s) {
  if (navigator.clipboard?.writeText)
    try {
      await navigator.clipboard.writeText(s);
      return;
    } catch {
    }
  const a = document.createElement("textarea");
  a.value = s, a.setAttribute("readonly", ""), a.style.position = "fixed", a.style.left = "-9999px", a.style.top = "0", document.body.appendChild(a), a.select(), document.execCommand("copy"), document.body.removeChild(a);
}
function ws(s) {
  return /* @__PURE__ */ e.jsx(js, { ...s });
}
const we = D.forwardRef(({ asChild: s = !0, className: a, ...t }, r) => /* @__PURE__ */ e.jsx(
  bs,
  {
    ref: r,
    asChild: s,
    className: h("cursor-pointer", a),
    ...t
  }
));
we.displayName = "ShareModal.Trigger";
const ye = D.forwardRef(({ className: s, ...a }, t) => /* @__PURE__ */ e.jsx(
  fe,
  {
    ref: t,
    className: h("max-h-[calc(100vh-16vmin)] max-w-[540px] overflow-y-auto p-8", s),
    ...a
  }
));
ye.displayName = "ShareModal.Content";
function ys({ className: s, ...a }) {
  return /* @__PURE__ */ e.jsx(je, { className: s, ...a });
}
function ks({ className: s, ...a }) {
  return /* @__PURE__ */ e.jsx(ve, { className: s, ...a });
}
function Cs({ className: s, ...a }) {
  return /* @__PURE__ */ e.jsx(Ne, { className: s, ...a });
}
const ke = D.forwardRef(({
  children: s,
  className: a,
  size: t = "lg",
  title: r = "Close",
  variant: i = "link",
  ...l
}, m) => /* @__PURE__ */ e.jsx(
  T,
  {
    ref: m,
    className: h(
      "aspect-square cursor-pointer p-2 text-muted-foreground hover:text-foreground [&_svg]:size-6!",
      a
    ),
    size: t,
    title: r,
    variant: i,
    ...l,
    children: s || /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx(De, { size: 24, strokeWidth: 1 }),
      /* @__PURE__ */ e.jsx("span", { className: "sr-only", children: "Close" })
    ] })
  }
));
ke.displayName = "ShareModal.CloseButton";
const Ce = D.forwardRef(({
  className: s,
  href: a,
  rel: t = "noopener noreferrer",
  target: r = "_blank",
  ...i
}, l) => /* @__PURE__ */ e.jsx(
  "a",
  {
    ref: l,
    className: h("flex flex-col items-stretch overflow-hidden border transition-all hover:border-muted-foreground/40", s),
    href: a,
    rel: t,
    target: r,
    ...i
  }
));
Ce.displayName = "ShareModal.Preview";
function ae({ service: s }) {
  return s === "threads" ? /* @__PURE__ */ e.jsxs("svg", { fill: "none", viewBox: "0 0 18 18", children: [
    /* @__PURE__ */ e.jsx("g", { clipPath: "url(#social-threads_svg__clip0_351_18008)", children: /* @__PURE__ */ e.jsx("path", { d: "M13.033 8.38a5.924 5.924 0 00-.223-.102c-.13-2.418-1.452-3.802-3.67-3.816h-.03c-1.327 0-2.43.566-3.11 1.597l1.22.837c.507-.77 1.304-.934 1.89-.934h.02c.73.004 1.282.217 1.639.63.26.302.433.72.519 1.245a9.334 9.334 0 00-2.097-.101c-2.109.121-3.465 1.351-3.374 3.06.047.868.478 1.614 1.216 2.1.624.413 1.428.614 2.263.568 1.103-.06 1.969-.48 2.572-1.25.459-.585.749-1.342.877-2.296.526.317.915.735 1.13 1.236.366.854.387 2.255-.756 3.398-1.003 1.002-2.207 1.435-4.028 1.448-2.02-.015-3.547-.663-4.54-1.925-.93-1.182-1.41-2.89-1.428-5.075.018-2.185.498-3.893 1.428-5.075.993-1.262 2.52-1.91 4.54-1.925 2.034.015 3.588.666 4.62 1.934.505.622.886 1.405 1.137 2.317l1.43-.382c-.305-1.122-.784-2.09-1.436-2.892C13.52 1.35 11.587.517 9.096.5h-.01C6.6.517 4.689 1.354 3.404 2.986 2.262 4.44 1.672 6.46 1.652 8.994v.012c.02 2.534.61 4.555 1.752 6.008C4.69 16.646 6.6 17.483 9.086 17.5h.01c2.21-.015 3.768-.594 5.051-1.876 1.68-1.678 1.629-3.78 1.075-5.07-.397-.927-1.154-1.678-2.189-2.175zm-3.816 3.587c-.924.052-1.884-.363-1.932-1.252-.035-.659.47-1.394 1.99-1.482a8.9 8.9 0 01.512-.014c.552 0 1.068.053 1.538.156-.175 2.187-1.203 2.542-2.108 2.592z", fill: "currentColor" }) }),
    /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsx("clipPath", { id: "social-threads_svg__clip0_351_18008", children: /* @__PURE__ */ e.jsx("path", { d: "M0 0h17v17H0z", fill: "#fff", transform: "translate(.5 .5)" }) }) })
  ] }) : s === "facebook" ? /* @__PURE__ */ e.jsxs("svg", { fill: "none", viewBox: "0 0 40 40", children: [
    /* @__PURE__ */ e.jsx("path", { d: "M20 40.004c11.046 0 20-8.955 20-20 0-11.046-8.954-20-20-20s-20 8.954-20 20c0 11.045 8.954 20 20 20z", fill: "#1977f3" }),
    /* @__PURE__ */ e.jsx("path", { d: "M27.785 25.785l.886-5.782h-5.546V16.25c0-1.58.773-3.125 3.26-3.125h2.522V8.204s-2.29-.39-4.477-.39c-4.568 0-7.555 2.767-7.555 7.781v4.408h-5.08v5.782h5.08v13.976a20.08 20.08 0 003.125.242c1.063 0 2.107-.085 3.125-.242V25.785h4.66z", fill: "#fff" })
  ] }) : s === "linkedin" ? /* @__PURE__ */ e.jsxs("svg", { fill: "none", viewBox: "0 0 16 16", children: [
    /* @__PURE__ */ e.jsxs("g", { clipPath: "url(#social-linkedin_svg__clip0_537_833)", children: [
      /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", d: "M1.778 16h12.444c.982 0 1.778-.796 1.778-1.778V1.778C16 .796 15.204 0 14.222 0H1.778C.796 0 0 .796 0 1.778v12.444C0 15.204.796 16 1.778 16z", fill: "#007ebb", fillRule: "evenodd" }),
      /* @__PURE__ */ e.jsx("path", { clipRule: "evenodd", d: "M13.778 13.778h-2.374V9.734c0-1.109-.421-1.729-1.299-1.729-.955 0-1.453.645-1.453 1.729v4.044H6.363V6.074h2.289v1.038s.688-1.273 2.322-1.273c1.634 0 2.804.997 2.804 3.061v4.878zM3.634 5.065c-.78 0-1.411-.636-1.411-1.421s.631-1.422 1.41-1.422c.78 0 1.411.637 1.411 1.422 0 .785-.631 1.421-1.41 1.421zm-1.182 8.713h2.386V6.074H2.452v7.704z", fill: "#fff", fillRule: "evenodd" })
    ] }),
    /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsx("clipPath", { id: "social-linkedin_svg__clip0_537_833", children: /* @__PURE__ */ e.jsx("path", { d: "M0 0h16v16H0z", fill: "#fff" }) }) })
  ] }) : /* @__PURE__ */ e.jsx("svg", { "aria-hidden": "true", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z", fill: "currentColor" }) });
}
function _s({ className: s, layout: a = "footer", links: t, ...r }) {
  return a === "stacked" ? /* @__PURE__ */ e.jsx("div", { className: h("flex gap-2", s), ...r, children: t.map((i) => /* @__PURE__ */ e.jsx(T, { className: "flex-1", id: i.id, variant: "outline", asChild: !0, children: /* @__PURE__ */ e.jsxs("a", { "aria-label": i.label, href: i.href, rel: "noreferrer", target: "_blank", title: i.title || i.label, children: [
    /* @__PURE__ */ e.jsx(ae, { service: i.service }),
    /* @__PURE__ */ e.jsx("span", { className: "sr-only", children: i.label })
  ] }) }, i.id ?? i.href)) }) : /* @__PURE__ */ e.jsx("div", { className: h("flex items-center gap-2", s), ...r, children: t.map((i) => /* @__PURE__ */ e.jsx("a", { "aria-label": i.label, className: "flex h-(--control-height) w-14 items-center justify-center rounded-xs bg-muted px-3 hover:bg-muted-foreground/20 [&_svg]:h-4", href: i.href, rel: "noopener noreferrer", target: "_blank", title: i.title || i.label, children: /* @__PURE__ */ e.jsx(ae, { service: i.service }) }, i.id ?? i.href)) });
}
function zs({
  children: s,
  copyURL: a,
  disabled: t,
  icon: r = "link",
  label: i = "Copy link",
  onClick: l,
  successLabel: m = "Copied!",
  ...c
}) {
  const [o, u] = ie(!1), d = async (n) => {
    l?.(n), !n.defaultPrevented && (await Ns(a), u(!0), setTimeout(() => u(!1), 2e3));
  }, x = r === "copy" ? Ee : Re;
  return /* @__PURE__ */ e.jsx(
    T,
    {
      disabled: t || !a,
      type: "button",
      onClick: (n) => {
        d(n);
      },
      ...c,
      children: s || /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        o ? /* @__PURE__ */ e.jsx($e, {}) : /* @__PURE__ */ e.jsx(x, {}),
        o ? m : i
      ] })
    }
  );
}
function Ts({ className: s, ...a }) {
  return /* @__PURE__ */ e.jsx(
    be,
    {
      className: h("justify-between gap-6", s),
      ...a
    }
  );
}
const k = {
  CloseButton: ke,
  Content: ye,
  CopyButton: zs,
  Description: Cs,
  Footer: Ts,
  Header: ys,
  Preview: Ce,
  Root: ws,
  SocialLinks: _s,
  Title: ks,
  Trigger: we
}, Ms = ({
  author: s = "",
  children: a,
  description: t = "",
  emailOnly: r = !1,
  faviconURL: i = "",
  featureImageURL: l = "",
  onClose: m = () => {
  },
  postExcerpt: c = "",
  postTitle: o = "",
  postURL: u = "",
  primaryTitle: d = "Your post is published.",
  secondaryTitle: x = "Spread the word!",
  siteTitle: n = "",
  ...p
}) => {
  const j = encodeURIComponent(o), g = encodeURIComponent(u), w = encodeURIComponent(`${o} ${u}`), C = r ? [] : [
    {
      href: `https://twitter.com/intent/tweet?text=${j}%0A${g}`,
      label: "Share on X",
      service: "x"
    },
    {
      href: `https://threads.net/intent/post?text=${w}`,
      label: "Share on Threads",
      service: "threads"
    },
    {
      href: `https://www.facebook.com/sharer/sharer.php?u=${g}`,
      label: "Share on Facebook",
      service: "facebook"
    },
    {
      href: `https://www.linkedin.com/shareArticle?mini=true&title=${j}&url=${g}`,
      label: "Share on LinkedIn",
      service: "linkedin"
    }
  ];
  return /* @__PURE__ */ e.jsxs(k.Root, { ...p, children: [
    a && /* @__PURE__ */ e.jsx(k.Trigger, { children: a }),
    /* @__PURE__ */ e.jsxs(k.Content, { children: [
      /* @__PURE__ */ e.jsx("div", { className: "sticky top-0 ml-auto size-0", children: /* @__PURE__ */ e.jsx(k.CloseButton, { className: "absolute -top-5 -right-5", onClick: m }) }),
      /* @__PURE__ */ e.jsxs(k.Header, { className: "relative -mt-5", children: [
        /* @__PURE__ */ e.jsxs(k.Title, { className: "text-3xl leading-[1.15em] font-bold", children: [
          d && /* @__PURE__ */ e.jsx("span", { className: "text-state-success", children: d }),
          d && x && /* @__PURE__ */ e.jsx("br", {}),
          x && /* @__PURE__ */ e.jsx("span", { children: x })
        ] }),
        t && /* @__PURE__ */ e.jsx(k.Description, { className: "mb-0 pt-1 pb-0 text-lg text-foreground", children: t })
      ] }),
      /* @__PURE__ */ e.jsxs(k.Preview, { className: "rounded-md", href: u, children: [
        l && /* @__PURE__ */ e.jsx("div", { className: "aspect-video bg-cover bg-center", style: { backgroundImage: `url(${l})` } }),
        /* @__PURE__ */ e.jsxs("div", { className: "p-6 pt-5", children: [
          /* @__PURE__ */ e.jsx(le, { children: o }),
          c && /* @__PURE__ */ e.jsx("p", { children: c }),
          /* @__PURE__ */ e.jsxs("div", { className: "mt-2 flex items-start gap-2", children: [
            /* @__PURE__ */ e.jsx("div", { className: "mt-0.5 size-4 bg-cover bg-center", style: { backgroundImage: `url(${i})` } }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex gap-1", children: [
              /* @__PURE__ */ e.jsx("strong", { children: n }),
              /* @__PURE__ */ e.jsx("span", { children: "•" }),
              /* @__PURE__ */ e.jsx("span", { children: s })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e.jsx(k.Footer, { children: r ? /* @__PURE__ */ e.jsx(T, { className: "cursor-pointer", type: "button", onClick: m, children: "Close" }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(k.SocialLinks, { links: C }),
        /* @__PURE__ */ e.jsx(
          k.CopyButton,
          {
            className: "ml-0! grow cursor-pointer",
            copyURL: u,
            icon: "link"
          }
        )
      ] }) })
    ] })
  ] });
}, As = (s) => s.email_only ? "Sent" : s.email ? "Published and sent" : "Published", Ls = ({
  latestPostStats: s,
  isLoading: a
}) => {
  const t = q(), [r, i] = ie(!1), { site: l, settings: m } = L(), { appSettings: c } = W(), {
    emailTrackClicks: o,
    emailTrackOpens: u,
    webAnalytics: d = !1,
    membersTrackSources: x = !1
  } = c?.analytics || {}, n = l.title || String(m.find((N) => N.key === "title")?.value || "Ghost Site"), p = String(m.find((N) => N.key === "timezone")?.value || "Etc/UTC"), j = s ? fs(s, {
    membersTrackSources: x
  }) : null, g = "group mr-2 flex flex-col gap-1.5 hover:cursor-pointer", w = !!s?.email, C = xe({ postId: s?.id, hasEmailData: w, analytics: { webAnalytics: d, membersTrackSources: x } }), _ = C.startsWith("/editor/");
  return /* @__PURE__ */ e.jsxs(F, { className: "group/card bg-gradient-to-tr from-muted/40 to-muted/0 to-50%", "data-testid": "latest-post", children: [
    /* @__PURE__ */ e.jsxs(S, { children: [
      /* @__PURE__ */ e.jsx(H, { className: "flex items-baseline justify-between leading-snug font-medium text-muted-foreground", children: "Latest post performance" }),
      /* @__PURE__ */ e.jsx(I, { className: "hidden", children: "How your last post did" })
    ] }),
    /* @__PURE__ */ e.jsxs(P, { className: "flex flex-col gap-6 px-0 lg:flex-row xl:grid xl:grid-cols-3", children: [
      a && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex w-full items-center gap-6 px-6 xl:col-span-2", children: [
          /* @__PURE__ */ e.jsx("div", { className: "w-full max-w-[232px] grow", children: /* @__PURE__ */ e.jsx(y, { className: "aspect-[16/10] rounded-md" }) }),
          /* @__PURE__ */ e.jsxs("div", { className: "w-full grow", children: [
            /* @__PURE__ */ e.jsx(y, { className: "w-full max-w-[420px]" }),
            /* @__PURE__ */ e.jsx(y, { className: "w-1/2" })
          ] })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "flex flex-col items-stretch gap-2 px-6", children: /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-5", children: [
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
      !a && s && j ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-6 px-6 transition-all md:flex-row md:items-start xl:col-span-2", children: [
          s.feature_image && /* @__PURE__ */ e.jsx("div", { className: "aspect-[16/10] w-full min-w-[100px] rounded-sm bg-cover bg-center sm:max-w-[170px] lg:max-w-[170px] xl:max-w-[232px]", style: {
            backgroundImage: `url(${s.feature_image})`
          } }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex grow flex-col items-start justify-center self-stretch", children: [
            /* @__PURE__ */ e.jsx("div", { className: "text-md leading-tighter font-semibold tracking-tight hover:cursor-pointer hover:opacity-75", onClick: () => {
              !a && s && t(C, { crossApp: !0 });
            }, children: s.title }),
            /* @__PURE__ */ e.jsxs("div", { className: "mt-1 text-muted-foreground", children: [
              s.authors && s.authors.length > 0 && /* @__PURE__ */ e.jsxs("div", { children: [
                "By ",
                s.authors.map((N) => N.name).join(", "),
                " – ",
                ne(s.published_at, p)
              ] }),
              /* @__PURE__ */ e.jsx("div", { className: "mt-0.5", children: As(s) })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "mt-6 flex items-center gap-2", children: [
              !s.email_only && /* @__PURE__ */ e.jsx(
                Ms,
                {
                  author: s.authors?.map((N) => N.name).join(", ") || "",
                  description: "",
                  faviconURL: l.icon || "",
                  featureImageURL: s.feature_image || "",
                  open: r,
                  postExcerpt: s.excerpt || "",
                  postTitle: s.title,
                  postURL: s.url || "",
                  siteTitle: n,
                  onClose: () => i(!1),
                  onOpenChange: i,
                  children: /* @__PURE__ */ e.jsxs(T, { onClick: () => i(!0), children: [
                    /* @__PURE__ */ e.jsx(We, {}),
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
                    t(C, { crossApp: !0 });
                  },
                  children: _ ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                    /* @__PURE__ */ e.jsx(Fe, {}),
                    /* @__PURE__ */ e.jsx("span", { className: "hidden md:visible! md:block!", children: "Edit post" })
                  ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                    /* @__PURE__ */ e.jsx(Se, {}),
                    /* @__PURE__ */ e.jsx("span", { className: "hidden md:visible! md:block!", children: s.email_only ? "Post analytics" : "Analytics" })
                  ] })
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "-ml-4 flex w-full flex-col items-stretch gap-2 pr-6 xl:h-full xl:max-w-none", children: /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-6 pl-10 lg:border-l xl:h-full", children: [
          j.showWebMetrics && d && /* @__PURE__ */ e.jsxs("div", { className: g, "data-testid": "latest-post-visitors", onClick: () => {
            t(`/posts/analytics/${s.id}/web`, { crossApp: !0 });
          }, children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 font-medium text-muted-foreground transition-all group-hover:text-foreground", children: [
              /* @__PURE__ */ e.jsx(E, { size: 16, strokeWidth: 1.25 }),
              /* @__PURE__ */ e.jsx("span", { className: "hidden md:visible! md:block!", children: "Visitors" })
            ] }),
            /* @__PURE__ */ e.jsx("span", { className: "text-[2.2rem] leading-none font-semibold tracking-tighter", children: f(s.visitors) })
          ] }),
          j.showMemberGrowth && /* @__PURE__ */ e.jsxs("div", { className: h(
            g,
            // Member metric is moved to the 2nd row in the grid if the post is email only or if web analytics is turned off, otherwise leave as is
            j.showEmailMetrics && (!j.showWebMetrics || !d) && "row-[2/3] col-[1/2]"
          ), "data-testid": "latest-post-members", onClick: () => {
            t(`/posts/analytics/${s.id}/growth`, { crossApp: !0 });
          }, children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 font-medium text-muted-foreground transition-all group-hover:text-foreground", children: [
              /* @__PURE__ */ e.jsx(oe, { size: 16, strokeWidth: 1.25 }),
              /* @__PURE__ */ e.jsx("span", { className: "hidden md:visible! md:block!", children: "Members" })
            ] }),
            /* @__PURE__ */ e.jsx("span", { className: "text-[2.2rem] leading-none font-semibold tracking-tighter", children: s.member_delta ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              "+",
              f(s.member_delta)
            ] }) : 0 })
          ] }),
          j.showEmailMetrics && s.email && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            u && /* @__PURE__ */ e.jsxs("div", { className: g, onClick: () => {
              t(`/posts/analytics/${s.id}/newsletter`, { crossApp: !0 });
            }, children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 font-medium text-muted-foreground transition-all group-hover:text-foreground", children: [
                /* @__PURE__ */ e.jsx(Y, { size: 16, strokeWidth: 1.25 }),
                /* @__PURE__ */ e.jsx("span", { className: "hidden whitespace-nowrap md:visible! md:block!", children: "Opens" })
              ] }),
              /* @__PURE__ */ e.jsx("span", { className: "text-[2.2rem] leading-none font-semibold tracking-tighter", children: s.email.email_count ? J((s.email.opened_count || 0) / s.email.email_count) : "0%" })
            ] }),
            o && /* @__PURE__ */ e.jsxs("div", { className: g, onClick: () => {
              t(`/posts/analytics/${s.id}/newsletter`, { crossApp: !0 });
            }, children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 font-medium text-muted-foreground transition-all group-hover:text-foreground", children: [
                /* @__PURE__ */ e.jsx(He, { size: 16, strokeWidth: 1.25 }),
                /* @__PURE__ */ e.jsx("span", { className: "hidden whitespace-nowrap md:visible! md:block!", children: "Clicks" })
              ] }),
              /* @__PURE__ */ e.jsx("span", { className: "text-[2.2rem] leading-none font-semibold tracking-tighter", children: s.email.email_count && s.count?.clicks ? J((s.count.clicks || 0) / s.email.email_count) : "0%" })
            ] })
          ] })
        ] }) })
      ] }) : !a && /* @__PURE__ */ e.jsx(
        X,
        {
          actions: /* @__PURE__ */ e.jsx(T, { variant: "secondary", onClick: () => {
            t("/editor/post", { crossApp: !0 });
          }, children: "New post" }),
          className: "w-full pb-10 xl:col-span-3",
          description: "Once it's live, you can track performance here",
          title: "Publish your first post",
          children: /* @__PURE__ */ e.jsx(ce, { strokeWidth: 1.5 })
        }
      )
    ] })
  ] });
}, Ds = ({ children: s, className: a, ...t }) => /* @__PURE__ */ e.jsx(
  "div",
  {
    className: h(
      "flex flex-col border-r border-border last:border-none items-start gap-4 px-6 py-5 transition-all",
      a
    ),
    ...t,
    children: s
  }
), $s = ({ children: s, className: a, color: t, ...r }) => /* @__PURE__ */ e.jsxs("div", { className: h("flex h-[22px] items-center gap-1.5 text-base font-medium text-muted-foreground [&_svg]:size-4", a), ...r, children: [
  t && /* @__PURE__ */ e.jsx("div", { className: "ml-1 size-2 rounded-full opacity-50", style: { backgroundColor: t } }),
  s
] }), Es = ({ value: s, diffDirection: a, diffValue: t, diffTooltip: r }) => {
  let i = null;
  return a && a !== "hidden" && (a === "empty" ? i = /* @__PURE__ */ e.jsx(
    "div",
    {
      className: "flex h-[22px] items-center px-1.5 text-xs leading-none font-medium",
      "data-testid": "kpi-card-header-diff",
      children: t
    }
  ) : i = /* @__PURE__ */ e.jsx(
    Pe,
    {
      "data-testid": "kpi-card-header-diff",
      direction: a,
      tooltip: r,
      value: t ?? ""
    }
  )), /* @__PURE__ */ e.jsx(
    Ie,
    {
      trailing: i,
      value: s,
      valueTestId: "kpi-card-header-value"
    }
  );
}, Rs = () => {
  const { data: s } = L();
  return {
    isLimited: (t) => {
      const r = s?.config;
      return r?.hostSettings?.limits && t === "limitAnalytics" ? r.hostSettings.limits.limitAnalytics?.disabled === !0 : !1;
    }
  };
}, U = ({
  // linkto,
  title: s,
  iconName: a,
  description: t,
  color: r,
  diffDirection: i,
  diffValue: l,
  formattedValue: m,
  trendingFromValue: c,
  children: o,
  onClick: u
}) => {
  const { range: d } = L(), x = a && Ue[a], n = D.useMemo(() => {
    if (!i || i === "empty" || d === Z.allTime.value || !l)
      return "";
    const p = i === "up" ? "up" : i === "down" ? "down" : "at", g = Q(d).replace("in the ", "").replace(/^\(|\)$/g, "");
    return i === "same" ? /* @__PURE__ */ e.jsxs("span", { children: [
      "You're trending at the same level as ",
      /* @__PURE__ */ e.jsx("span", { className: "font-semibold", children: m }),
      " compared to the ",
      /* @__PURE__ */ e.jsx("span", { className: "font-semibold", children: g })
    ] }) : /* @__PURE__ */ e.jsxs("span", { children: [
      "You're trending ",
      /* @__PURE__ */ e.jsxs("span", { className: "font-semibold", children: [
        p,
        " ",
        l
      ] }),
      " from ",
      /* @__PURE__ */ e.jsx("span", { className: "font-semibold", children: c }),
      " compared to the ",
      g
    ] });
  }, [i, l, c, m, d]);
  return /* @__PURE__ */ e.jsxs(F, { className: "group", "data-testid": s, children: [
    /* @__PURE__ */ e.jsxs(S, { className: "hidden", children: [
      /* @__PURE__ */ e.jsx(H, { children: s }),
      /* @__PURE__ */ e.jsx(I, { children: t })
    ] }),
    /* @__PURE__ */ e.jsxs(Ds, { className: "relative flex grow flex-row items-start justify-between gap-5 border-none pb-2 xl:pb-4", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex grow flex-col gap-1.5 border-none pb-0", children: [
        /* @__PURE__ */ e.jsxs($s, { className: u && "transition-all group-hover:text-foreground", children: [
          r && /* @__PURE__ */ e.jsx("span", { className: "inline-block size-2 rounded-full opacity-50", style: { backgroundColor: r } }),
          x && /* @__PURE__ */ e.jsx(x, { size: 16, strokeWidth: 1.5 }),
          s
        ] }),
        /* @__PURE__ */ e.jsx(
          Es,
          {
            diffDirection: d === Z.allTime.value ? "hidden" : i,
            diffTooltip: n,
            diffValue: l,
            value: m
          }
        )
      ] }),
      u && /* @__PURE__ */ e.jsx(T, { className: "absolute right-6 translate-x-10 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100", size: "sm", variant: "outline", onClick: u, children: "View more" })
    ] }),
    /* @__PURE__ */ e.jsx(P, { children: o })
  ] });
}, Ws = ({
  kpiValues: s,
  visitorsChartData: a,
  visitorsYRange: t,
  growthTotals: r,
  membersChartData: i,
  mrrChartData: l,
  currencySymbol: m,
  isLoading: c
}) => {
  const o = q(), { range: u } = L(), { appSettings: d } = W(), n = Rs().isLimited("limitAnalytics"), p = "-mb-3 h-[10vw] max-h-[200px] min-h-[100px] hover:cursor-pointer!";
  if (c)
    return /* @__PURE__ */ e.jsx(Be, { className: "flex h-[calc(10vw+116px)] max-h-[416px] min-h-20 items-center justify-center hover:cursor-pointer!", children: /* @__PURE__ */ e.jsx(Ve, {}) });
  const j = d?.analytics.webAnalytics, g = n && !j, w = !0, C = d?.paidMembersEnabled, _ = [j, g, w, C].filter(Boolean).length;
  let N = "lg:grid-cols-3";
  _ === 2 ? N = "lg:grid-cols-2" : _ === 1 && (N = "lg:grid-cols-1");
  const B = `flex flex-col lg:grid ${N} gap-6`;
  return /* @__PURE__ */ e.jsxs("div", { className: B, children: [
    j && !g && /* @__PURE__ */ e.jsx(
      U,
      {
        description: "Number of individual people who visited your website",
        diffDirection: "empty",
        formattedValue: s.visits,
        iconName: "Globe",
        linkto: "/analytics/web/",
        title: "Unique visitors",
        onClick: () => {
          o("/analytics/web/");
        },
        children: /* @__PURE__ */ e.jsx(
          V,
          {
            className: p,
            color: "var(--chart-blue)",
            data: a,
            id: "visitors",
            range: u,
            showHorizontalLines: !0,
            showYAxisValues: !1,
            syncId: "overview-charts",
            yAxisRange: t
          }
        )
      }
    ),
    g && /* @__PURE__ */ e.jsxs(F, { children: [
      /* @__PURE__ */ e.jsxs(S, { className: "hidden", children: [
        /* @__PURE__ */ e.jsx(H, { children: "Unlock web analytics" }),
        /* @__PURE__ */ e.jsx(I, { children: "Get the full picture of what's working with detailed, cookie-free traffic analytics." })
      ] }),
      /* @__PURE__ */ e.jsx(P, { className: "flex h-full items-center justify-center p-6", children: /* @__PURE__ */ e.jsx(
        X,
        {
          actions: /* @__PURE__ */ e.jsx(T, { variant: "outline", onClick: () => o("/pro", { crossApp: !0 }), children: "Upgrade now" }),
          className: "py-10",
          description: "Get the full picture of what's working with detailed, cookie-free traffic analytics.",
          title: "Unlock web analytics",
          children: /* @__PURE__ */ e.jsx(Oe, {})
        }
      ) })
    ] }),
    /* @__PURE__ */ e.jsx(
      U,
      {
        description: "How number of members of your publication changed over time",
        diffDirection: r.directions.total,
        diffValue: r.percentChanges.total,
        formattedValue: f(r.totalMembers),
        iconName: "User",
        linkto: "/analytics/growth/",
        title: "Members",
        trendingFromValue: `${f(i[0].value)}`,
        onClick: () => {
          o("/analytics/growth/?tab=total-members");
        },
        children: /* @__PURE__ */ e.jsx(
          V,
          {
            className: p,
            color: "var(--chart-darkblue)",
            data: i,
            id: "members",
            range: u,
            showHorizontalLines: !0,
            showYAxisValues: !1,
            syncId: "overview-charts"
          }
        )
      }
    ),
    C && /* @__PURE__ */ e.jsx(
      U,
      {
        description: "Monthly recurring revenue changes over time",
        diffDirection: r.directions.mrr,
        diffValue: r.percentChanges.mrr,
        formattedValue: `${m}${f(K(r.mrr))}`,
        iconName: "Coins",
        linkto: "/analytics/growth/",
        title: "MRR",
        trendingFromValue: `${m}${f(l[0].value)}`,
        onClick: () => {
          o("/analytics/growth/?tab=mrr");
        },
        children: /* @__PURE__ */ e.jsx(
          V,
          {
            className: p,
            color: "var(--chart-teal)",
            data: l,
            id: "mrr",
            range: u,
            showHorizontalLines: !0,
            showYAxisValues: !1,
            syncId: "overview-charts"
          }
        )
      }
    )
  ] });
}, Fs = ({
  className: s
}) => /* @__PURE__ */ e.jsx("div", { className: h("rounded-sm bg-muted dark:bg-[#36373a] flex flex-col items-center justify-center gap-1 p-6", s), children: /* @__PURE__ */ e.jsx(Ge, { className: "text-muted-foreground/50", size: 18, strokeWidth: 1.5 }) }), G = ({
  className: s,
  metrics: a,
  title: t
}) => /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsxs("div", { className: h("pointer-events-none absolute bottom-[calc(100%+2px)] left-1/2 z-50 min-w-[160px] -translate-x-1/2 rounded-md bg-background p-3 text-sm opacity-0 shadow-md transition-all group-hover/tooltip:bottom-[calc(100%+12px)] group-hover/tooltip:opacity-100", s), children: [
  /* @__PURE__ */ e.jsx("div", { className: "mb-1.5 border-b pr-10 pb-1.5 font-medium whitespace-nowrap text-muted-foreground", children: t }),
  /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-1.5", children: a?.map((r) => /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between gap-5", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1.5 whitespace-nowrap", children: [
      r.icon,
      r.label
    ] }),
    /* @__PURE__ */ e.jsx("span", { className: "font-mono", children: r.metric })
  ] }, r.label)) })
] }) }), Ss = ({
  topPostsData: s,
  isLoading: a
}) => {
  const t = q(), { range: r, settings: i } = L(), { appSettings: l } = W(), m = String(i.find((n) => n.key === "timezone")?.value || "Etc/UTC"), {
    webAnalytics: c = !1,
    membersTrackSources: o = !1,
    emailTrackClicks: u = !1,
    emailTrackOpens: d = !1
  } = l?.analytics || {}, x = "flex items-center justify-end gap-1 rounded-md px-2 py-1 font-mono text-gray-800 hover:bg-muted-foreground/10 group-hover:text-foreground";
  return /* @__PURE__ */ e.jsxs(F, { className: "group/card w-full lg:col-span-2", "data-testid": "top-posts-card", children: [
    /* @__PURE__ */ e.jsxs(S, { children: [
      /* @__PURE__ */ e.jsxs(H, { className: "flex items-baseline justify-between leading-snug  font-medium text-muted-foreground", children: [
        "Top posts ",
        Q(r)
      ] }),
      /* @__PURE__ */ e.jsx(I, { className: "hidden", children: "Most viewed posts in this period" })
    ] }),
    /* @__PURE__ */ e.jsx(P, { children: a ? /* @__PURE__ */ e.jsx(Ye, { className: "mt-6" }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      s?.stats?.map((n) => /* @__PURE__ */ e.jsxs("div", { className: 'group relative flex w-full items-start justify-between gap-5 border-t border-border/50 py-4 before:absolute before:-inset-x-4 before:inset-y-0 before:z-0 before:hidden before:rounded-md before:bg-accent before:opacity-80 before:content-[""] first:border-border! hover:cursor-pointer hover:border-transparent hover:before:block md:items-center dark:before:bg-accent/50 [&+div]:hover:border-transparent', children: [
        /* @__PURE__ */ e.jsxs("div", { className: "z-10 flex min-w-[160px] grow items-start gap-4 md:items-center lg:min-w-[320px]", onClick: () => {
          t(xe({
            postId: n.post_id,
            hasEmailData: n.sent_count !== null,
            analytics: {
              webAnalytics: c,
              membersTrackSources: o
            }
          }), { crossApp: !0 });
        }, children: [
          n.feature_image ? /* @__PURE__ */ e.jsx("div", { className: "hidden aspect-[16/10] w-[80px] shrink-0 rounded-sm bg-cover bg-center sm:visible! sm:block! lg:w-[100px]", style: {
            backgroundImage: `url(${n.feature_image})`
          } }) : /* @__PURE__ */ e.jsx(Fs, { className: "hidden aspect-[16/10] w-[80px] shrink-0 group-hover:bg-muted-foreground/10 sm:visible! sm:flex! lg:w-[100px]" }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-0.5", children: [
            /* @__PURE__ */ e.jsx("span", { className: "line-clamp-2 text-md font-semibold", children: n.title }),
            /* @__PURE__ */ e.jsxs("span", { className: "text text-muted-foreground", children: [
              "By ",
              n.authors,
              " – ",
              ne(n.published_at, m)
            ] }),
            /* @__PURE__ */ e.jsx("span", { className: "text text-muted-foreground", children: hs(n) })
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "z-10 flex flex-col items-end justify-center gap-0.5 text-sm md:flex-row md:items-center md:justify-end md:gap-3", children: [
          c && /* @__PURE__ */ e.jsxs("div", { className: "group/tooltip relative flex w-[66px] lg:w-[92px]", "data-testid": "statistics-visitors", onClick: (p) => {
            p.stopPropagation(), t(`/posts/analytics/${n.post_id}/web`, { crossApp: !0 });
          }, children: [
            /* @__PURE__ */ e.jsx(
              G,
              {
                metrics: [
                  {
                    icon: /* @__PURE__ */ e.jsx(E, { className: "shrink-0 text-muted-foreground", size: 16, strokeWidth: 1.5 }),
                    label: "Unique visitors",
                    metric: f(n.views)
                  }
                ],
                title: "Web traffic"
              }
            ),
            /* @__PURE__ */ e.jsxs("div", { className: x, children: [
              /* @__PURE__ */ e.jsx(E, { className: "text-muted-foreground group-hover:text-foreground", size: 16, strokeWidth: 1.5 }),
              ee(n.views)
            ] })
          ] }),
          n.sent_count !== null && /* @__PURE__ */ e.jsxs("div", { className: "group/tooltip relative flex w-[66px] lg:w-[92px]", onClick: (p) => {
            p.stopPropagation(), t(`/posts/analytics/${n.post_id}/newsletter`, { crossApp: !0 });
          }, children: [
            /* @__PURE__ */ e.jsx(
              G,
              {
                className: `${o ? "" : "right-0 left-auto translate-x-0"}`,
                metrics: [
                  // Always show sent
                  {
                    icon: /* @__PURE__ */ e.jsx(se, { className: "shrink-0 text-muted-foreground", size: 16, strokeWidth: 1.5 }),
                    label: "Sent",
                    metric: f(n.sent_count || 0)
                  },
                  // Only show opens if open tracking is enabled
                  ...d ? [{
                    icon: /* @__PURE__ */ e.jsx(Y, { className: "shrink-0 text-muted-foreground", size: 16, strokeWidth: 1.5 }),
                    label: "Opens",
                    metric: f(n.opened_count || 0)
                  }] : [],
                  // Only show clicks if click tracking is enabled
                  ...u ? [{
                    icon: /* @__PURE__ */ e.jsx(te, { className: "shrink-0 text-muted-foreground", size: 16, strokeWidth: 1.5 }),
                    label: "Clicks",
                    metric: f(n.clicked_count || 0)
                  }] : []
                ],
                title: "Newsletter performance"
              }
            ),
            /* @__PURE__ */ e.jsx("div", { className: x, children: d ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              /* @__PURE__ */ e.jsx(Y, { className: "text-muted-foreground group-hover:text-foreground", size: 16, strokeWidth: 1.5 }),
              n.open_rate ? `${Math.round(n.open_rate)}%` : "0%"
            ] }) : u ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              /* @__PURE__ */ e.jsx(te, { className: "text-muted-foreground group-hover:text-foreground", size: 16, strokeWidth: 1.5 }),
              n.click_rate ? `${Math.round(n.click_rate)}%` : "0%"
            ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              /* @__PURE__ */ e.jsx(se, { className: "text-muted-foreground group-hover:text-foreground", size: 16, strokeWidth: 1.5 }),
              ee(n.sent_count || 0)
            ] }) })
          ] }),
          o && /* @__PURE__ */ e.jsxs("div", { className: "group/tooltip relative flex w-[66px] lg:w-[92px]", "data-testid": "statistics-members", onClick: (p) => {
            p.stopPropagation(), t(`/posts/analytics/${n.post_id}/growth`, { crossApp: !0 });
          }, children: [
            /* @__PURE__ */ e.jsx(
              G,
              {
                className: "right-0 left-auto translate-x-0",
                metrics: [
                  {
                    icon: /* @__PURE__ */ e.jsx(Ke, { className: "shrink-0 text-muted-foreground", size: 16, strokeWidth: 1.5 }),
                    label: "Free",
                    metric: n.free_members > 0 ? `+${f(n.free_members)}` : "0"
                  },
                  // Only show paid members if paid members are enabled
                  ...l?.paidMembersEnabled ? [{
                    icon: /* @__PURE__ */ e.jsx(Qe, { className: "shrink-0 text-muted-foreground", size: 16, strokeWidth: 1.5 }),
                    label: "Paid",
                    metric: n.paid_members > 0 ? `+${f(n.paid_members)}` : "0"
                  }] : []
                ],
                title: "New members"
              }
            ),
            /* @__PURE__ */ e.jsxs("div", { className: x, children: [
              /* @__PURE__ */ e.jsx(oe, { className: "text-muted-foreground group-hover:text-foreground", size: 16, strokeWidth: 1.5 }),
              n.members > 0 ? `+${f(n.members)}` : "0"
            ] })
          ] })
        ] })
      ] }, n.post_id)),
      (!s?.stats || s.stats.length === 0) && /* @__PURE__ */ e.jsx(
        X,
        {
          className: "w-full pb-10",
          title: `No posts ${Q(r)}`,
          children: /* @__PURE__ */ e.jsx(ce, { strokeWidth: 1.5 })
        }
      )
    ] }) })
  ] });
}, Hs = () => {
  const { data: { posts: [s] } = { posts: [] }, isLoading: a } = us({
    searchParams: {
      filter: "status:[published,sent]",
      order: "published_at DESC",
      limit: "1",
      include: "authors,email,count.clicks"
    }
  }), t = s, r = qe(t?.id || "", {
    enabled: !!t?.id
  }), { data: i, isLoading: l } = r;
  return {
    data: A(() => {
      if (!t)
        return null;
      const c = i?.stats?.[0] || {
        id: t.id,
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
        id: t.id,
        uuid: t.uuid,
        title: t.title || "",
        slug: t.slug || "",
        feature_image: t.feature_image || null,
        published_at: t.published_at || "",
        url: t.url || "",
        excerpt: t.excerpt || "",
        email_only: t.email_only || !1,
        status: t.status,
        email: t.email,
        count: t.count,
        authors: t.authors || [],
        // Analytics data from Stats API
        recipient_count: c.recipient_count,
        opened_count: c.opened_count,
        open_rate: c.open_rate,
        member_delta: c.member_delta,
        free_members: c.free_members,
        paid_members: c.paid_members,
        visitors: c.visitors,
        click_rate: null
        // TODO: Add click_rate to PostStats interface if needed
      };
    }, [t, i]),
    isLoading: a || !!t?.id && l
  };
}, re = ({
  className: s,
  title: a,
  description: t,
  url: r,
  children: i
}) => /* @__PURE__ */ e.jsx("a", { className: h(
  "block rounded-xl border bg-card p-6 transition-all hover:shadow-xs hover:bg-accent/50 group/card",
  s
), href: r, rel: "noreferrer", target: "_blank", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-6", children: [
  i,
  /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-0.5 leading-tight", children: [
    /* @__PURE__ */ e.jsx("span", { className: "text-base font-semibold", children: a }),
    /* @__PURE__ */ e.jsx("span", { className: "text-sm font-normal text-gray-700", children: t })
  ] })
] }) }), Os = () => {
  const { appSettings: s } = W(), { statsConfig: a, isLoading: t, range: r } = L(), { startDate: i, endDate: l, timezone: m } = Xe(r), { isLoading: c, chartData: o, totals: u, currencySymbol: d } = ds(r), { data: x, isLoading: n } = Hs(), { data: p, isLoading: j } = Je({
    searchParams: {
      date_from: $(i),
      date_to: $(l),
      limit: "5",
      timezone: m
    }
  }), g = {
    site_uuid: a?.id || "",
    date_from: $(i),
    date_to: $(l),
    timezone: m,
    member_status: cs(Le)
  }, { data: w, loading: C } = Ze({
    endpoint: "api_kpis",
    statsConfig: a,
    params: g
  }), _ = A(() => O(w || [], r, "visits", "sum")?.map((v) => {
    const z = Number(v.visits), M = isNaN(z) ? 0 : z;
    return {
      date: String(v.date),
      value: M,
      formattedValue: f(M),
      label: "Visitors"
    };
  }), [w, r]), N = A(() => {
    const v = [0, 1];
    if (!_ || _.length === 0)
      return v;
    const z = _.map((b) => b.value).filter((b) => b >= 0);
    return z.length === 0 ? v : [0, Math.max(...z) || v[1]];
  }, [_]), B = A(() => {
    if (!o || o.length === 0)
      return [];
    let v = [];
    return v = O(o, r, "value", "exact"), v.map((b) => ({
      date: b.date,
      value: b.free + b.paid,
      formattedValue: f(b.free + b.paid),
      label: "Members"
    }));
  }, [o, r]), _e = A(() => {
    if (!s?.paidMembersEnabled || !o || o.length === 0)
      return [];
    let v = [];
    return v = O(o, r, "mrr", "exact"), v.map((b) => ({
      date: b.date,
      value: K(b.mrr),
      formattedValue: `${d}${f(K(b.mrr))}`,
      label: "MRR"
    }));
  }, [o, r, d, s]), ze = A(() => {
    if (!w?.length)
      return { visits: "0" };
    const v = w.reduce((z, M) => {
      const b = Number(M.visits);
      return z + (isNaN(b) ? 0 : b);
    }, 0);
    return {
      visits: f(v)
    };
  }, [w]), Te = t;
  return /* @__PURE__ */ e.jsxs(es, { children: [
    /* @__PURE__ */ e.jsx(ss, { children: /* @__PURE__ */ e.jsx(ts, { children: /* @__PURE__ */ e.jsx(as, { excludeRanges: ["today"] }) }) }),
    /* @__PURE__ */ e.jsxs(rs, { isLoading: Te, loadingComponent: /* @__PURE__ */ e.jsx(e.Fragment, {}), children: [
      /* @__PURE__ */ e.jsx(
        Ws,
        {
          currencySymbol: d,
          growthTotals: u,
          isLoading: C || c,
          kpiValues: ze,
          membersChartData: B,
          mrrChartData: _e,
          visitorsChartData: _,
          visitorsYRange: N
        }
      ),
      /* @__PURE__ */ e.jsx(
        Ls,
        {
          isLoading: n,
          latestPostStats: x
        }
      ),
      /* @__PURE__ */ e.jsx(
        Ss,
        {
          isLoading: j,
          topPostsData: p
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
            children: /* @__PURE__ */ e.jsx("div", { className: "flex h-18 w-[100px] min-w-[100px] items-center justify-center rounded-md bg-gradient-to-tr from-[#14B8FF]/20 to-[#00BBA7]/20 p-4 opacity-80 transition-all group-hover/card:opacity-100", children: /* @__PURE__ */ e.jsx(is, { className: "text-[#00BBA7]", size: 20, strokeWidth: 1.5 }) })
          }
        ),
        /* @__PURE__ */ e.jsx(
          re,
          {
            description: "Use these content distribution tactics to get more people to discover your work and increase engagement.",
            title: "How to get your content seen online",
            url: "https://ghost.org/resources/content-distribution/",
            children: /* @__PURE__ */ e.jsx("div", { className: "flex h-18 w-[100px] min-w-[100px] items-center justify-center rounded-md bg-gradient-to-tl from-[#FDC700]/20 to-[#FF2056]/20 p-4 opacity-80 transition-all group-hover/card:opacity-100", children: /* @__PURE__ */ e.jsx(E, { className: "text-[#FE9A00]", size: 20, strokeWidth: 1.5 }) })
          }
        )
      ] })
    ] })
  ] });
};
export {
  Os as default
};
//# sourceMappingURL=index-pqjcCnmz.js.map
