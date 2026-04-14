import { j as l } from "./index-BWRct4la.mjs";
import { M as _ } from "./post-analytics-header-Cj53GuIA.mjs";
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
}, g = (e) => {
  try {
    return new URL(e.startsWith("http") ? e : `https://${e}`).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
};
function y({
  processedData: e,
  totalVisitors: s,
  mode: o
}) {
  return o === "growth" ? e : e.map((c) => ({
    ...c,
    percentage: s > 0 ? c.visits / s : 0
  }));
}
const w = (e, s) => e === s ? !0 : e.endsWith(`.${s}`), k = (e, s) => {
  if (!e || typeof e != "string")
    return { domain: null, isDirectTraffic: !1 };
  if (e === "Direct")
    return { domain: null, isDirectTraffic: !0 };
  const o = s ? g(s) : null;
  if (o) {
    const n = g(e);
    if (n && w(n, o))
      return { domain: o, isDirectTraffic: !0 };
    if (w(e, o))
      return { domain: o, isDirectTraffic: !0 };
  }
  const c = v[e];
  return c ? { domain: c, isDirectTraffic: !1 } : /^[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e) ? { domain: e.replace(/^www\./, ""), isDirectTraffic: !1 } : { domain: null, isDirectTraffic: !1 };
};
function N({
  data: e,
  mode: s,
  siteUrl: o,
  siteIcon: c,
  defaultSourceIconUrl: u
}) {
  if (!e)
    return [];
  const n = /* @__PURE__ */ new Map();
  let d = s === "visits" ? 0 : void 0;
  const i = s === "growth" ? {
    free_members: 0,
    paid_members: 0,
    mrr: 0
  } : void 0;
  if (e.forEach((r) => {
    const { domain: a, isDirectTraffic: p } = k(r.source, o), f = Number(r.visits || 0);
    if (p || !r.source || r.source === "")
      s === "visits" ? d += f : s === "growth" && i && (i.free_members += r.free_members || 0, i.paid_members += r.paid_members || 0, i.mrr += r.mrr || 0);
    else {
      const m = String(r.source), h = a ? `https://www.faviconextractor.com/favicon/${a}?larger=true` : u, D = a ? `https://${a}` : void 0;
      if (n.has(m)) {
        const t = n.get(m);
        t.visits += f, s === "growth" && (t.free_members = (t.free_members || 0) + (r.free_members || 0), t.paid_members = (t.paid_members || 0) + (r.paid_members || 0), t.mrr = (t.mrr || 0) + (r.mrr || 0));
      } else {
        const t = {
          source: m,
          visits: f,
          isDirectTraffic: !1,
          iconSrc: h,
          displayName: m,
          linkUrl: D
        };
        s === "growth" && (t.free_members = r.free_members || 0, t.paid_members = r.paid_members || 0, t.mrr = r.mrr || 0), n.set(m, t);
      }
    }
  }), s === "visits" ? d > 0 : i && (i.free_members > 0 || i.paid_members > 0 || i.mrr > 0)) {
    const r = {
      source: "Direct",
      visits: s === "visits" ? d : 0,
      isDirectTraffic: !0,
      iconSrc: c || u,
      displayName: "Direct",
      linkUrl: void 0
    };
    s === "growth" && i && (r.free_members = i.free_members, r.paid_members = i.paid_members, r.mrr = i.mrr), n.set("Direct", r);
  }
  const b = Array.from(n.values());
  return s === "growth" ? b.sort((r, a) => {
    const p = (r.mrr || 0) * 100 + (r.paid_members || 0) * 10 + (r.free_members || 0);
    return (a.mrr || 0) * 100 + (a.paid_members || 0) * 10 + (a.free_members || 0) - p;
  }) : b.sort((r, a) => a.visits - r.visits);
}
const A = ({ defaultSourceIconUrl: e, displayName: s, iconSrc: o }) => /* @__PURE__ */ l.jsx(l.Fragment, { children: s.trim().toLowerCase().endsWith("newsletter") ? /* @__PURE__ */ l.jsx(_, { "aria-label": "Newsletter", className: "size-4 text-muted-foreground" }) : /* @__PURE__ */ l.jsx(
  "img",
  {
    alt: "",
    className: "size-4",
    src: o,
    onError: (c) => {
      c.currentTarget.src = e;
    }
  }
) });
export {
  A as S,
  y as e,
  N as p
};
//# sourceMappingURL=source-icon-DVM83hPy.mjs.map
