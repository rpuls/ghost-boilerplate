import { f as p, q as z, C as g, r as y, j as i, s as T, F as G, a as m, S as W, E as I } from "./index-LBcSX-Bd.mjs";
import { ah as L, X as M, by as F } from "./stats-CYKBl8ke.mjs";
import { R as Y, T as Z, P as H, C as E, e as U, a as A, D as O, O as P } from "./audience-BEeBtpYR.mjs";
var B = Symbol.for("react.lazy"), w = z[" use ".trim().toString()];
function q(t) {
  return typeof t == "object" && t !== null && "then" in t;
}
function C(t) {
  return t != null && typeof t == "object" && "$$typeof" in t && t.$$typeof === B && "_payload" in t && q(t._payload);
}
// @__NO_SIDE_EFFECTS__
function K(t) {
  const e = /* @__PURE__ */ X(t), o = p((s, r) => {
    let { children: a, ...c } = s;
    C(a) && typeof w == "function" && (a = w(a._payload));
    const l = g.toArray(a), u = l.find(Q);
    if (u) {
      const n = u.props.children, f = l.map((S) => S === u ? g.count(n) > 1 ? g.only(null) : y(n) ? n.props.children : null : S);
      return /* @__PURE__ */ i.jsx(e, { ...c, ref: r, children: y(n) ? T(n, void 0, f) : null });
    }
    return /* @__PURE__ */ i.jsx(e, { ...c, ref: r, children: a });
  });
  return o.displayName = `${t}.Slot`, o;
}
// @__NO_SIDE_EFFECTS__
function X(t) {
  const e = p((o, s) => {
    let { children: r, ...a } = o;
    if (C(r) && typeof w == "function" && (r = w(r._payload)), y(r)) {
      const c = tt(r), l = V(a, r.props);
      return r.type !== G && (l.ref = s ? L(s, c) : c), T(r, l);
    }
    return g.count(r) > 1 ? g.only(null) : null;
  });
  return e.displayName = `${t}.SlotClone`, e;
}
var J = Symbol("radix.slottable");
function Q(t) {
  return y(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === J;
}
function V(t, e) {
  const o = { ...e };
  for (const s in e) {
    const r = t[s], a = e[s];
    /^on[A-Z]/.test(s) ? r && a ? o[s] = (...l) => {
      const u = a(...l);
      return r(...l), u;
    } : r && (o[s] = r) : s === "style" ? o[s] = { ...r, ...a } : s === "className" && (o[s] = [r, a].filter(Boolean).join(" "));
  }
  return { ...t, ...o };
}
function tt(t) {
  var s, r;
  let e = (s = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : s.get, o = e && "isReactWarning" in e && e.isReactWarning;
  return o ? t.ref : (e = (r = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : r.get, o = e && "isReactWarning" in e && e.isReactWarning, o ? t.props.ref : t.props.ref || t.ref);
}
var et = [
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
], ot = et.reduce((t, e) => {
  const o = /* @__PURE__ */ K(`Primitive.${e}`), s = p((r, a) => {
    const { asChild: c, ...l } = r, u = c ? o : e;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ i.jsx(u, { ...l, ref: a });
  });
  return s.displayName = `Primitive.${e}`, { ...t, [e]: s };
}, {}), st = "Separator", b = "horizontal", rt = ["horizontal", "vertical"], j = p((t, e) => {
  const { decorative: o, orientation: s = b, ...r } = t, a = at(s) ? s : b, l = o ? { role: "none" } : { "aria-orientation": a === "vertical" ? a : void 0, role: "separator" };
  return /* @__PURE__ */ i.jsx(
    ot.div,
    {
      "data-orientation": a,
      ...l,
      ...r,
      ref: e
    }
  );
});
j.displayName = st;
function at(t) {
  return rt.includes(t);
}
var k = j;
const it = {
  Reddit: "reddit.com",
  "www.reddit.com": "reddit.com",
  Facebook: "facebook.com",
  Twitter: "twitter.com",
  Bluesky: "bsky.app",
  "go.bsky.app": "bsky.app",
  Instagram: "instagram.com",
  LinkedIn: "linkedin.com",
  Threads: "threads.net",
  "Brave Search": "search.brave.com",
  Ecosia: "ecosia.org",
  Gmail: "gmail.com",
  Outlook: "outlook.com",
  "Yahoo!": "yahoo.com",
  "AOL Mail": "aol.com",
  Flipboard: "flipboard.com",
  Substack: "substack.com",
  Ghost: "ghost.org",
  "Ghost Explore": "ghost.org",
  Buffer: "buffer.com",
  Taboola: "taboola.com",
  AppNexus: "appnexus.com",
  Wikipedia: "wikipedia.org",
  Mastodon: "mastodon.social",
  Memeorandum: "memeorandum.com",
  "Ground News": "ground.news",
  "Apple News": "apple.com",
  SmartNews: "smartnews.com",
  "Hacker News": "news.ycombinator.com",
  // Search engines
  Google: "google.com",
  "Google News": "news.google.com",
  Bing: "bing.com",
  DuckDuckGo: "duckduckgo.com",
  // Email/Newsletter
  "newsletter-email": "static.ghost.org",
  newsletter: "static.ghost.org"
}, x = (t) => {
  try {
    return new URL(t.startsWith("http") ? t : `https://${t}`).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
};
function yt({
  processedData: t,
  totalVisitors: e,
  mode: o
}) {
  return t.map((s) => ({
    ...s,
    percentage: e > 0 ? s.visits / e : 0
  }));
}
const D = (t, e) => t === e ? !0 : t.endsWith(`.${e}`), nt = (t, e) => {
  if (!t || typeof t != "string")
    return { domain: null, isDirectTraffic: !1 };
  if (t === "Direct")
    return { domain: null, isDirectTraffic: !0 };
  const o = e ? x(e) : null;
  if (o) {
    const a = x(t);
    if (a && D(a, o))
      return { domain: o, isDirectTraffic: !0 };
    if (D(t, o))
      return { domain: o, isDirectTraffic: !0 };
  }
  const s = it[t];
  return s ? { domain: s, isDirectTraffic: !1 } : /^[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t) ? { domain: t.replace(/^www\./, ""), isDirectTraffic: !1 } : { domain: null, isDirectTraffic: !1 };
};
function wt({
  data: t,
  mode: e,
  siteUrl: o,
  siteIcon: s,
  defaultSourceIconUrl: r
}) {
  if (!t)
    return [];
  const a = /* @__PURE__ */ new Map();
  let c = 0;
  if (t.forEach((n) => {
    const { domain: f, isDirectTraffic: S } = nt(n.source, o), v = Number(n.visits || 0);
    if (S || !n.source || n.source === "")
      c += v;
    else {
      const h = String(n.source), $ = f ? `https://www.faviconextractor.com/favicon/${f}?larger=true` : r, R = f ? `https://${f}` : void 0;
      if (a.has(h)) {
        const N = a.get(h);
        N.visits += v;
      } else {
        const N = {
          source: h,
          visits: v,
          isDirectTraffic: !1,
          iconSrc: $,
          displayName: h,
          linkUrl: R
        };
        a.set(h, N);
      }
    }
  }), c > 0) {
    const n = {
      source: "Direct",
      visits: c,
      isDirectTraffic: !0,
      iconSrc: s || r,
      displayName: "Direct",
      linkUrl: void 0
    };
    a.set("Direct", n);
  }
  return Array.from(a.values()).sort((n, f) => f.visits - n.visits);
}
const ct = p(
  ({ className: t, orientation: e = "horizontal", decorative: o = !0, ...s }, r) => /* @__PURE__ */ i.jsx(
    k,
    {
      ref: r,
      className: m(
        "shrink-0 bg-border",
        e === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        t
      ),
      decorative: o,
      orientation: e,
      ...s
    }
  )
);
ct.displayName = k.displayName;
const vt = Y, Nt = Z, lt = H, _ = p(({ className: t, ...e }, o) => /* @__PURE__ */ i.jsx(
  P,
  {
    className: m(
      "fixed inset-0 z-50 bg-black/10  data-[state=open]:animate-in duration-200 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      t
    ),
    ...e,
    ref: o
  }
));
_.displayName = P.displayName;
const dt = I(
  "fixed z-50 gap-4 bg-background p-8 shadow-lg transition ease-in-out data-[state=closed]:animate-out data-[state=closed]:duration-200 data-[state=open]:animate-in data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
), pt = p(({ side: t = "right", className: e, children: o, ...s }, r) => /* @__PURE__ */ i.jsx(lt, { children: /* @__PURE__ */ i.jsxs("div", { className: W, children: [
  /* @__PURE__ */ i.jsx(_, {}),
  /* @__PURE__ */ i.jsxs(
    E,
    {
      ref: r,
      className: m(dt({ side: t }), e),
      ...s,
      children: [
        /* @__PURE__ */ i.jsxs(U, { className: "fixed top-4 right-4 z-50 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ i.jsx(M, { className: "size-4" }),
          /* @__PURE__ */ i.jsx("span", { className: "sr-only", children: "Close" })
        ] }),
        o
      ]
    }
  )
] }) }));
pt.displayName = E.displayName;
const ut = ({
  className: t,
  ...e
}) => /* @__PURE__ */ i.jsx(
  "div",
  {
    className: m(
      "flex flex-col space-y-1 text-center sm:text-left",
      t
    ),
    ...e
  }
);
ut.displayName = "SheetHeader";
const ft = p(({ className: t, ...e }, o) => /* @__PURE__ */ i.jsx(
  A,
  {
    ref: o,
    className: m("text-xl font-semibold text-foreground", t),
    ...e
  }
));
ft.displayName = A.displayName;
const mt = p(({ className: t, ...e }, o) => /* @__PURE__ */ i.jsx(
  O,
  {
    ref: o,
    className: m("text-sm text-muted-foreground", t),
    ...e
  }
));
mt.displayName = O.displayName;
const bt = ({ defaultSourceIconUrl: t, displayName: e, iconSrc: o }) => /* @__PURE__ */ i.jsx(i.Fragment, { children: e.trim().toLowerCase().endsWith("newsletter") ? /* @__PURE__ */ i.jsx(F, { "aria-label": "Newsletter", className: "size-4 text-muted-foreground" }) : /* @__PURE__ */ i.jsx(
  "img",
  {
    alt: "",
    className: "size-4",
    src: o,
    onError: (s) => {
      s.currentTarget.src = t;
    }
  }
) }), d = {
  POSTS: "posts",
  PAGES: "pages",
  POSTS_AND_PAGES: "posts_and_pages",
  SOURCES: "sources"
}, xt = (t) => {
  switch (t) {
    case d.POSTS:
      return "Top posts";
    case d.PAGES:
      return "Top pages";
    case d.SOURCES:
      return "Top sources";
    default:
      return "Top content";
  }
}, Dt = (t, e, o) => {
  switch (t) {
    case d.POSTS:
      return `Your highest viewed posts ${o(e)}`;
    case d.PAGES:
      return `Your highest viewed pages ${o(e)}`;
    case d.POSTS_AND_PAGES:
      return `Your highest viewed posts or pages ${o(e)}`;
    case d.SOURCES:
      return `How readers found your site ${o(e)}`;
    default:
      return `Your highest viewed posts or pages ${o(e)}`;
  }
}, Tt = (t, e, o) => {
  switch (t) {
    case d.POSTS:
      return `Which posts drove the most growth ${o(e)}`;
    case d.PAGES:
      return `Which pages drove the most growth ${o(e)}`;
    case d.POSTS_AND_PAGES:
      return `Which posts or pages drove the most growth ${o(e)}`;
    case d.SOURCES:
      return `Which sources drove the most growth ${o(e)}`;
    default:
      return `Which posts drove the most growth ${o(e)}`;
  }
};
export {
  d as C,
  ct as S,
  vt as a,
  Nt as b,
  pt as c,
  ut as d,
  yt as e,
  ft as f,
  mt as g,
  bt as h,
  xt as i,
  Dt as j,
  nt as k,
  Tt as l,
  wt as p
};
//# sourceMappingURL=content-helpers-ym3V57zp.mjs.map
