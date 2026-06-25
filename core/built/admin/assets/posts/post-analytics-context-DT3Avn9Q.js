import { ah as v, am as h, R as k, a7 as P, k as E } from "./index-Dqn5WIFh.js";
import { u as I, a as D } from "./settings-DEXxDYc2.js";
import { u as C } from "./posts-CdWV_nlm.js";
import { d as N } from "./hooks-5YpJYWOw.js";
import { u as w } from "./site-C6DajagV.js";
const B = "TinybirdTokenResponseType", O = {
  refetchInterval: 7200 * 1e3,
  // 2 hours — tokens expire after 3 hours
  refetchIntervalInBackground: !0,
  staleTime: 6600 * 1e3
  // 110 minutes - shorter than refetch interval so automatic refresh works
}, U = N({
  dataType: B,
  path: "/tinybird/token/"
}), R = (o = {}) => U({
  ...O,
  ...o
});
let g = !1;
const Y = (o = {}) => {
  const { enabled: s = !0 } = o, t = R({ enabled: s }), e = t.data?.tinybird?.token, n = t.error;
  return !t.isLoading && s && t.data && !e && !g && (console.warn("Tinybird analytics: No valid token received. Check your Tinybird configuration (workspaceId and adminToken must be non-empty strings)."), g = !0), {
    token: e && typeof e == "string" ? e : void 0,
    isLoading: t.isLoading,
    error: n,
    refetch: t.refetch
  };
}, x = {
  TODAY: { name: "Today", value: 1 },
  LAST_7_DAYS: { name: "Last 7 days", value: 7 },
  LAST_30_DAYS: { name: "Last 30 days", value: 31 },
  LAST_90_DAYS: { name: "Last 90 days", value: 91 },
  YEAR_TO_DATE: { name: "Year to date", value: 366 },
  LAST_12_MONTHS: { name: "Last 12 months", value: 372 },
  ALL_TIME: { name: "All time", value: 1e3 }
}, z = {
  // Countries
  US: "United States",
  TWN: "Taiwan",
  TW: "Taiwan",
  CN: "China",
  // Technical
  "mobile-ios": "iOS",
  "mobile-android": "Android",
  macos: "macOS",
  // Sources
  "google.com": "Google",
  "ghost.org": "Ghost",
  "bing.com": "Bing",
  "bsky.app": "Bluesky",
  "yahoo.com": "Yahoo",
  "duckduckgo.com": "DuckDuckGo"
}, H = ["NULL", "ᴺᵁᴸᴸ", "", "Others", "Other"], a = {
  PUBLIC: 1,
  // 1
  FREE: 2,
  // 2
  PAID: 4
  // 4
}, K = a.PUBLIC | a.FREE | a.PAID, V = [
  { name: "Public visitors", value: "undefined", bit: a.PUBLIC },
  { name: "Free members", value: "free", bit: a.FREE },
  { name: "Paid members", value: "paid", bit: a.PAID }
], m = E(void 0), G = () => {
  const o = P(m);
  if (!o)
    throw new Error("useGlobalData must be used within a PostAnalyticsProvider");
  return o;
}, Q = ({ children: o }) => {
  const { postId: s } = v();
  if (!s)
    throw new Error("Post ID is required for PostAnalyticsProvider");
  const t = I(), e = w(), [n, T] = h(x.LAST_30_DAYS.value), d = D(), i = !!t.data?.config?.stats, r = Y({ enabled: i }), { data: { posts: [y] } = { posts: [] }, isLoading: b } = C({
    searchParams: {
      filter: `id:${s}`,
      include: "email,authors,tags,tiers,count.clicks,count.signups,count.paid_conversions,count.positive_feedback,count.negative_feedback,newsletter"
    }
  }), u = [t, e, d], f = u.map((c) => c.error).find(Boolean), A = i ? r.error : null, l = f || A, L = u.some((c) => c.isLoading), S = i ? r.isLoading : !1, p = L || S;
  if (l)
    throw l;
  const _ = e.data?.site ? {
    url: e.data.site.url,
    icon: e.data.site.icon,
    title: e.data.site.title
  } : void 0;
  return /* @__PURE__ */ k.jsx(m.Provider, { value: {
    data: t.data?.config,
    site: _,
    statsConfig: t.data?.config?.stats,
    tinybirdToken: r.token,
    isLoading: p,
    range: n,
    setRange: T,
    settings: d.data?.settings || [],
    postId: s,
    post: y,
    isPostLoading: b
  }, children: o });
}, $ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Q,
  useGlobalData: G
}, Symbol.toStringTag, { value: "Module" }));
export {
  K as A,
  z as S,
  H as U,
  a,
  V as b,
  x as c,
  Y as d,
  $ as p,
  G as u
};
//# sourceMappingURL=post-analytics-context-DT3Avn9Q.js.map
