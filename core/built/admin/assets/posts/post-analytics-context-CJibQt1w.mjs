import { w as D, v as N, c as B, u as O, j as R } from "./index-BWRct4la.mjs";
import { a as c } from "./hooks-BXuxe98u.mjs";
import { u as U } from "./posts-B9yHB9r9.mjs";
const Y = "TinybirdTokenResponseType", x = {
  refetchInterval: 120 * 60 * 1e3,
  // 2 hours — tokens expire after 3 hours
  refetchIntervalInBackground: !0,
  staleTime: 110 * 60 * 1e3
  // 110 minutes - shorter than refetch interval so automatic refresh works
}, G = c({
  dataType: Y,
  path: "/tinybird/token/"
}), j = (t = {}) => G({
  ...x,
  ...t
});
let v = !1;
const Q = (t = {}) => {
  var a, o;
  const { enabled: e = !0 } = t, s = j({ enabled: e }), n = (o = (a = s.data) == null ? void 0 : a.tinybird) == null ? void 0 : o.token, r = s.error;
  return !s.isLoading && e && s.data && !n && !v && (console.warn("Tinybird analytics: No valid token received. Check your Tinybird configuration (workspaceId and adminToken must be non-empty strings)."), v = !0), {
    token: n && typeof n == "string" ? n : void 0,
    isLoading: s.isLoading,
    error: r,
    refetch: s.refetch
  };
}, F = "ConfigResponseType", M = c({
  dataType: F,
  path: "/config/"
}), W = {
  TODAY: { name: "Today", value: 1 },
  LAST_7_DAYS: { name: "Last 7 days", value: 7 },
  LAST_30_DAYS: { name: "Last 30 days", value: 31 },
  LAST_90_DAYS: { name: "Last 90 days", value: 91 },
  YEAR_TO_DATE: { name: "Year to date", value: 366 },
  LAST_12_MONTHS: { name: "Last 12 months", value: 12 * 31 },
  ALL_TIME: { name: "All time", value: 1e3 }
}, tt = {
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
}, et = ["NULL", "ᴺᵁᴸᴸ", "", "Others", "Other"], i = {
  PUBLIC: 1,
  // 1
  FREE: 2,
  // 2
  PAID: 4
  // 4
}, st = i.PUBLIC | i.FREE | i.PAID, ot = [
  { name: "Public visitors", value: "undefined", bit: i.PUBLIC },
  { name: "Free members", value: "free", bit: i.FREE },
  { name: "Paid members", value: "paid", bit: i.PAID }
], $ = "SettingsResponseType", q = c({
  dataType: $,
  path: "/settings/",
  defaultSearchParams: {
    group: "site,theme,private,members,portal,newsletter,email,labs,slack,unsplash,views,firstpromoter,editor,comments,analytics,announcement,pintura,donations,security,social_web,explore,transistor"
  }
}), z = "SiteResponseType", H = c({
  dataType: z,
  path: "/site/"
}), L = N(void 0), K = () => {
  const t = D(L);
  if (!t)
    throw new Error("useGlobalData must be used within a PostAnalyticsProvider");
  return t;
}, V = ({ children: t }) => {
  var m, p, y, b, f, A, S;
  const { postId: a } = B();
  if (!a)
    throw new Error("Post ID is required for PostAnalyticsProvider");
  const o = M(), e = H(), [s, n] = O(W.LAST_30_DAYS.value), r = q(), d = !!((p = (m = o.data) == null ? void 0 : m.config) != null && p.stats), u = Q({ enabled: d }), { data: { posts: [_] } = { posts: [] }, isLoading: h } = U({
    searchParams: {
      filter: `id:${a}`,
      include: "email,authors,tags,tiers,count.clicks,count.signups,count.paid_conversions,count.positive_feedback,count.negative_feedback,newsletter"
    }
  }), g = [o, e, r], P = g.map((l) => l.error).find(Boolean), k = d ? u.error : null, T = P || k, E = g.some((l) => l.isLoading), I = d ? u.isLoading : !1, w = E || I;
  if (T)
    throw T;
  const C = (y = e.data) != null && y.site ? {
    url: e.data.site.url,
    icon: e.data.site.icon,
    title: e.data.site.title
  } : void 0;
  return /* @__PURE__ */ R.jsx(L.Provider, { value: {
    data: (b = o.data) == null ? void 0 : b.config,
    site: C,
    statsConfig: (A = (f = o.data) == null ? void 0 : f.config) == null ? void 0 : A.stats,
    tinybirdToken: u.token,
    isLoading: w,
    range: s,
    setRange: n,
    settings: ((S = r.data) == null ? void 0 : S.settings) || [],
    postId: a,
    post: _,
    isPostLoading: h
  }, children: t });
}, at = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: V,
  useGlobalData: K
}, Symbol.toStringTag, { value: "Module" }));
export {
  st as A,
  W as S,
  et as U,
  tt as a,
  ot as b,
  i as c,
  Q as d,
  at as p,
  K as u
};
//# sourceMappingURL=post-analytics-context-CJibQt1w.mjs.map
