import { B as l, J as a, m, S as P, u as j } from "./index-GkZC6bm6.js";
import { am as C, aT as $, a8 as z } from "./stats-BfDVnooj.js";
import { R as G, b as R, P as _, a as v, C as M, T as b, D as x, O as D } from "./audience-BKWJSgWB.js";
var W = "Separator", S = "horizontal", I = ["horizontal", "vertical"], y = l((t, e) => {
  const { decorative: s, orientation: o = S, ...n } = t, r = U(o) ? o : S, g = s ? { role: "none" } : { "aria-orientation": r === "vertical" ? r : void 0, role: "separator" };
  return /* @__PURE__ */ a.jsx(
    C.div,
    {
      "data-orientation": r,
      ...g,
      ...n,
      ref: e
    }
  );
});
y.displayName = W;
function U(t) {
  return I.includes(t);
}
var T = y;
const Y = {
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
}, w = (t) => {
  try {
    return new URL(t.startsWith("http") ? t : `https://${t}`).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
};
function et({
  processedData: t,
  totalVisitors: e,
  mode: s
}) {
  return t.map((o) => ({
    ...o,
    percentage: e > 0 ? o.visits / e : 0
  }));
}
const N = (t, e) => t === e ? !0 : t.endsWith(`.${e}`), Z = (t, e) => {
  if (!t || typeof t != "string")
    return { domain: null, isDirectTraffic: !1 };
  if (t === "Direct")
    return { domain: null, isDirectTraffic: !0 };
  const s = e ? w(e) : null;
  if (s) {
    const r = w(t);
    if (r && N(r, s))
      return { domain: s, isDirectTraffic: !0 };
    if (N(t, s))
      return { domain: s, isDirectTraffic: !0 };
  }
  const o = Y[t];
  return o ? { domain: o, isDirectTraffic: !1 } : /^[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t) ? { domain: t.replace(/^www\./, ""), isDirectTraffic: !1 } : { domain: null, isDirectTraffic: !1 };
};
function st({
  data: t,
  mode: e,
  siteUrl: s,
  siteIcon: o,
  defaultSourceIconUrl: n
}) {
  if (!t)
    return [];
  const r = /* @__PURE__ */ new Map();
  let u = 0;
  if (t.forEach((c) => {
    const { domain: d, isDirectTraffic: E } = Z(c.source, s), f = Number(c.visits || 0);
    if (E || !c.source || c.source === "")
      u += f;
    else {
      const p = String(c.source), O = d ? `https://www.faviconextractor.com/favicon/${d}?larger=true` : n, k = d ? `https://${d}` : void 0;
      if (r.has(p)) {
        const h = r.get(p);
        h.visits += f;
      } else {
        const h = {
          source: p,
          visits: f,
          isDirectTraffic: !1,
          iconSrc: O,
          displayName: p,
          linkUrl: k
        };
        r.set(p, h);
      }
    }
  }), u > 0) {
    const c = {
      source: "Direct",
      visits: u,
      isDirectTraffic: !0,
      iconSrc: o || n,
      displayName: "Direct",
      linkUrl: void 0
    };
    r.set("Direct", c);
  }
  return Array.from(r.values()).sort((c, d) => d.visits - c.visits);
}
const B = l(
  ({ className: t, orientation: e = "horizontal", decorative: s = !0, ...o }, n) => /* @__PURE__ */ a.jsx(
    T,
    {
      ref: n,
      className: m(
        "shrink-0 bg-border",
        e === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        t
      ),
      decorative: s,
      orientation: e,
      ...o
    }
  )
);
B.displayName = T.displayName;
const at = G, ot = R, F = _, A = l(({ className: t, ...e }, s) => /* @__PURE__ */ a.jsx(
  D,
  {
    className: m(
      "fixed inset-0 z-50 bg-black/10  data-[state=open]:animate-in duration-200 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      t
    ),
    ...e,
    ref: s
  }
));
A.displayName = D.displayName;
const H = j(
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
), L = l(({ side: t = "right", className: e, children: s, ...o }, n) => /* @__PURE__ */ a.jsx(F, { children: /* @__PURE__ */ a.jsxs("div", { className: P, children: [
  /* @__PURE__ */ a.jsx(A, {}),
  /* @__PURE__ */ a.jsxs(
    v,
    {
      ref: n,
      className: m(H({ side: t }), e),
      ...o,
      children: [
        /* @__PURE__ */ a.jsxs(M, { className: "fixed top-4 right-4 z-50 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ a.jsx($, { className: "size-4" }),
          /* @__PURE__ */ a.jsx("span", { className: "sr-only", children: "Close" })
        ] }),
        s
      ]
    }
  )
] }) }));
L.displayName = v.displayName;
const J = ({
  className: t,
  ...e
}) => /* @__PURE__ */ a.jsx(
  "div",
  {
    className: m(
      "flex flex-col space-y-1 text-center sm:text-left",
      t
    ),
    ...e
  }
);
J.displayName = "SheetHeader";
const K = l(({ className: t, ...e }, s) => /* @__PURE__ */ a.jsx(
  b,
  {
    ref: s,
    className: m("text-xl font-semibold text-foreground", t),
    ...e
  }
));
K.displayName = b.displayName;
const X = l(({ className: t, ...e }, s) => /* @__PURE__ */ a.jsx(
  x,
  {
    ref: s,
    className: m("text-sm text-muted-foreground", t),
    ...e
  }
));
X.displayName = x.displayName;
const rt = ({ defaultSourceIconUrl: t, displayName: e, iconSrc: s }) => /* @__PURE__ */ a.jsx(a.Fragment, { children: e.trim().toLowerCase().endsWith("newsletter") ? /* @__PURE__ */ a.jsx(z, { "aria-label": "Newsletter", className: "size-4 text-muted-foreground" }) : /* @__PURE__ */ a.jsx(
  "img",
  {
    alt: "",
    className: "size-4",
    src: s,
    onError: (o) => {
      o.currentTarget.src = t;
    }
  }
) }), i = {
  POSTS: "posts",
  PAGES: "pages",
  POSTS_AND_PAGES: "posts_and_pages",
  SOURCES: "sources"
}, it = (t) => {
  switch (t) {
    case i.POSTS:
      return "Top posts";
    case i.PAGES:
      return "Top pages";
    case i.SOURCES:
      return "Top sources";
    default:
      return "Top content";
  }
}, nt = (t, e, s) => {
  switch (t) {
    case i.POSTS:
      return `Your highest viewed posts ${s(e)}`;
    case i.PAGES:
      return `Your highest viewed pages ${s(e)}`;
    case i.POSTS_AND_PAGES:
      return `Your highest viewed posts or pages ${s(e)}`;
    case i.SOURCES:
      return `How readers found your site ${s(e)}`;
    default:
      return `Your highest viewed posts or pages ${s(e)}`;
  }
}, ct = (t, e, s) => {
  switch (t) {
    case i.POSTS:
      return `Which posts drove the most growth ${s(e)}`;
    case i.PAGES:
      return `Which pages drove the most growth ${s(e)}`;
    case i.POSTS_AND_PAGES:
      return `Which posts or pages drove the most growth ${s(e)}`;
    case i.SOURCES:
      return `Which sources drove the most growth ${s(e)}`;
    default:
      return `Which posts drove the most growth ${s(e)}`;
  }
};
export {
  i as C,
  B as S,
  at as a,
  L as b,
  X as c,
  J as d,
  K as e,
  ot as f,
  rt as g,
  et as h,
  nt as i,
  it as j,
  Z as k,
  ct as l,
  st as p
};
//# sourceMappingURL=content-helpers-BqcYqI7D.js.map
