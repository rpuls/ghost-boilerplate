import { h as d } from "./check-fsC5BvGC.js";
import { R as l } from "./index-Dqn5WIFh.js";
import { M as k } from "./mail-CtH0gTpq.js";
const v = {
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
}, g = (r) => {
  try {
    return new URL(r.startsWith("http") ? r : `https://${r}`).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
};
function E({
  processedData: r,
  totalVisitors: s,
  mode: o
}) {
  return o === "growth" ? r : r.map((c) => ({
    ...c,
    percentage: s > 0 ? c.visits / s : 0
  }));
}
const w = (r, s) => r === s ? !0 : r.endsWith(`.${s}`), D = (r, s) => {
  if (!r || typeof r != "string")
    return { domain: null, isDirectTraffic: !1 };
  if (r === "Direct")
    return { domain: null, isDirectTraffic: !0 };
  const o = s ? g(s) : null;
  if (o) {
    const n = g(r);
    if (n && w(n, o))
      return { domain: o, isDirectTraffic: !0 };
    if (w(r, o))
      return { domain: o, isDirectTraffic: !0 };
  }
  const c = v[r];
  return c ? { domain: c, isDirectTraffic: !1 } : /^[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(r) ? { domain: r.replace(/^www\./, ""), isDirectTraffic: !1 } : { domain: null, isDirectTraffic: !1 };
};
function G({
  data: r,
  mode: s,
  siteUrl: o,
  siteIcon: c,
  defaultSourceIconUrl: p
}) {
  if (!r)
    return [];
  const n = /* @__PURE__ */ new Map();
  let u = s === "visits" ? 0 : void 0;
  const t = s === "growth" ? {
    free_members: 0,
    paid_members: 0,
    mrr: 0
  } : void 0;
  if (r.forEach((e) => {
    const { domain: a, isDirectTraffic: h } = D(e.source, o), f = Number(e.visits || 0);
    if (h || !e.source || e.source === "")
      s === "visits" ? u += f : s === "growth" && t && (t.free_members += e.free_members || 0, t.paid_members += e.paid_members || 0, t.mrr += e.mrr || 0);
    else {
      const m = String(e.source), y = a ? `https://www.faviconextractor.com/favicon/${a}?larger=true` : p, _ = a ? `https://${a}` : void 0;
      if (n.has(m)) {
        const i = n.get(m);
        i.visits += f, s === "growth" && (i.free_members = (i.free_members || 0) + (e.free_members || 0), i.paid_members = (i.paid_members || 0) + (e.paid_members || 0), i.mrr = (i.mrr || 0) + (e.mrr || 0));
      } else {
        const i = {
          source: m,
          visits: f,
          isDirectTraffic: !1,
          iconSrc: y,
          displayName: m,
          linkUrl: _
        };
        s === "growth" && (i.free_members = e.free_members || 0, i.paid_members = e.paid_members || 0, i.mrr = e.mrr || 0), n.set(m, i);
      }
    }
  }), s === "visits" ? u > 0 : t && (t.free_members > 0 || t.paid_members > 0 || t.mrr > 0)) {
    const e = {
      source: "Direct",
      visits: s === "visits" ? u : 0,
      isDirectTraffic: !0,
      iconSrc: c || p,
      displayName: "Direct",
      linkUrl: void 0
    };
    s === "growth" && t && (e.free_members = t.free_members, e.paid_members = t.paid_members, e.mrr = t.mrr), n.set("Direct", e);
  }
  const b = Array.from(n.values());
  return s === "growth" ? b.sort((e, a) => {
    const h = (e.mrr || 0) * 100 + (e.paid_members || 0) * 10 + (e.free_members || 0);
    return (a.mrr || 0) * 100 + (a.paid_members || 0) * 10 + (a.free_members || 0) - h;
  }) : b.sort((e, a) => a.visits - e.visits);
}
const x = [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse"
    }
  ]
], W = d("activity", x);
const T = [
  ["path", { d: "M13.744 17.736a6 6 0 1 1-7.48-7.48", key: "bq4yh3" }],
  ["path", { d: "M15 6h1v4", key: "11y1tn" }],
  ["path", { d: "m6.134 14.768.866-.5 2 3.464", key: "17snzx" }],
  ["circle", { cx: "16", cy: "8", r: "6", key: "14bfc9" }]
], L = d("coins", T);
const N = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
  ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]
], Z = d("user-plus", N);
const A = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2", key: "4125el" }],
  [
    "path",
    {
      d: "M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21",
      key: "1dpki6"
    }
  ]
], j = d("wallet-cards", A), C = ({ defaultSourceIconUrl: r, displayName: s, iconSrc: o }) => /* @__PURE__ */ l.jsx(l.Fragment, { children: s.trim().toLowerCase().endsWith("newsletter") ? /* @__PURE__ */ l.jsx(k, { "aria-label": "Newsletter", className: "size-4 text-muted-foreground" }) : /* @__PURE__ */ l.jsx(
  "img",
  {
    alt: "",
    className: "size-4",
    src: o,
    onError: (c) => {
      c.currentTarget.src = r;
    }
  }
) });
export {
  W as A,
  L as C,
  C as S,
  Z as U,
  j as W,
  E as e,
  G as p
};
//# sourceMappingURL=source-icon-C3oQy3UI.js.map
