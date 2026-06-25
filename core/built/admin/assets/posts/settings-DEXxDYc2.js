import { d as i } from "./hooks-5YpJYWOw.js";
const c = "ConfigResponseType", g = i({
  dataType: c,
  path: "/config/"
}), l = (e) => !!e?.hostSettings?.managedEmail?.enabled, u = (e) => {
  const t = e?.hostSettings?.managedEmail?.sendingDomain;
  return typeof t == "string" && t.length > 0;
}, d = (e) => e?.hostSettings?.managedEmail?.sendingDomain, p = "SettingsResponseType", h = i({
  dataType: p,
  path: "/settings/",
  defaultSearchParams: {
    group: "site,theme,private,members,portal,newsletter,email,labs,slack,unsplash,views,firstpromoter,editor,comments,analytics,announcement,pintura,donations,security,social_web,explore,transistor"
  }
});
function y(e, t) {
  return t.map((s) => e?.find((n) => n.key === s)?.value);
}
function f(e, t) {
  const s = (r) => e.some((a) => a.key === r && a.value), n = s("stripe_secret_key") && s("stripe_publishable_key"), o = s("stripe_connect_secret_key") && s("stripe_connect_publishable_key");
  return t.stripeDirect ? n : o || n;
}
export {
  h as a,
  f as c,
  y as g,
  u as h,
  l as i,
  d as s,
  g as u
};
//# sourceMappingURL=settings-DEXxDYc2.js.map
