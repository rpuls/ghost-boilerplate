import { am as R, a9 as w, ak as D, a6 as k, R as e, i as A, L as P } from "./index-Dqn5WIFh.js";
import { d as U, u as W } from "./hooks-5YpJYWOw.js";
import { u as T, a as M, c as H } from "./settings-DEXxDYc2.js";
import { Z as O } from "./zap-k30mZEuO.js";
import { M as z } from "./message-circle-D4bCjxKS.js";
import { A as K, c as Q } from "./automations-BqkU9-zY.js";
import { u as g } from "./skeleton-Bihnkn8q.js";
import { T as C, a as S, e as v, b as f } from "./table-DSJmeU5t.js";
import { M as $ } from "./main-layout-VqvCxOXQ.js";
import { B as G } from "./badge-BYGRyd2f.js";
import { L as b, P as x } from "./list-page-D_rv4TgN.js";
const E = function() {
  let t, s;
  return { promise: new Promise((n, o) => {
    t = n, s = o;
  }), resolve: t, reject: s };
}, Z = "FeaturebaseTokenResponseType", q = {
  staleTime: 7200 * 60 * 1e3,
  // 5 days
  refetchInterval: 8640 * 60 * 1e3,
  // 6 days
  refetchIntervalInBackground: !0
}, J = U({
  dataType: Z,
  path: "/featurebase/token/"
}), V = (a = {}) => J({
  ...q,
  ...a
}), h = "https://do.featurebase.app/js/sdk.js";
let m = null;
function B() {
  return m || (m = new Promise((a, t) => {
    const s = document.querySelector(`script[src="${h}"]`);
    if (s) {
      if (window.Featurebase) {
        a();
        return;
      }
      s.addEventListener("load", () => a(), { once: !0 }), s.addEventListener("error", t, { once: !0 });
      return;
    }
    const r = document.createElement("script");
    r.src = h, r.onload = () => a(), r.onerror = (n) => {
      r.remove(), m = null;
      const o = new Error(`[Featurebase] Failed to load SDK from ${h}`, { cause: n });
      console.error(o), t(o);
    }, document.head.appendChild(r);
  })), m;
}
const Y = () => typeof document > "u" ? "light" : document.documentElement.classList.contains("dark") ? "dark" : "light";
let l = null;
function X(a, t, s) {
  return l || (l = B().then(() => new Promise((r, n) => {
    window.Featurebase?.("initialize_feedback_widget", {
      organization: a,
      theme: t,
      featurebaseJwt: s
    }, (o) => {
      o ? (l = null, n(o)) : r();
    });
  })), l.catch(() => {
    l = null;
  }), l);
}
function ee() {
  const { data: a } = T(), [t, s] = R(!1), { organization: r, enabled: n } = a?.config.featurebase ?? {}, o = !!n, { data: c } = V({
    enabled: o && t
  }), d = c?.featurebase?.token;
  w(() => {
    t && B().catch((i) => {
      console.error("[Featurebase] Failed to load SDK:", i);
    });
  }, [t]);
  const u = D(E());
  w(() => {
    !t || !r || !d || X(r, Y(), d).then(
      () => u.current.resolve(),
      (i) => {
        console.error("[Featurebase] Failed to initialize widget:", i), u.current.reject(i), u.current = E(), s(!1);
      }
    );
  }, [r, d, t]);
  const j = k(() => {
    o && s(!0);
  }, [o]), p = k((i) => {
    o && (s(!0), u.current.promise.then(() => {
      window.postMessage({
        target: "FeaturebaseWidget",
        data: {
          action: "openFeedbackWidget",
          ...i?.board && { setBoard: i.board }
        }
      }, "*");
    }));
  }, [o]);
  return { isAvailable: o, openFeedbackWidget: p, preloadFeedbackWidget: j };
}
function te(a) {
  return a.roles.some((t) => t.name === "Contributor");
}
const se = "https://forum.ghost.org", ae = "https://ghost.org/help/automations-beta", _ = "block w-full rounded-xl border border-border bg-card p-6 text-left transition-all hover:shadow-xs hover:bg-accent/50 group/card", I = ({ title: a, description: t, children: s }) => /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-6", children: [
  s,
  /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-0.5 leading-tight", children: [
    /* @__PURE__ */ e.jsx("span", { className: "text-base font-semibold", children: a }),
    /* @__PURE__ */ e.jsx("span", { className: "text-sm font-normal text-gray-700", children: t })
  ] })
] }), N = ({ url: a, className: t, title: s, description: r, children: n }) => /* @__PURE__ */ e.jsx("a", { className: A(_, t), href: a, rel: "noreferrer", target: "_blank", children: /* @__PURE__ */ e.jsx(I, { description: r, title: s, children: n }) }), re = ({ className: a, title: t, description: s, children: r, onClick: n, onMouseEnter: o, onFocus: c }) => /* @__PURE__ */ e.jsx("button", { className: A(_, "cursor-pointer appearance-none", a), type: "button", onClick: n, onFocus: c, onMouseEnter: o, children: /* @__PURE__ */ e.jsx(I, { description: s, title: t, children: r }) }), oe = () => /* @__PURE__ */ e.jsx("div", { className: "flex h-18 w-[100px] min-w-[100px] items-center justify-center rounded-md bg-gradient-to-tr from-[#8B5CF6]/20 to-[#EC4899]/20 p-4 opacity-80 transition-all group-hover/card:opacity-100", children: /* @__PURE__ */ e.jsx(O, { className: "text-[#8B5CF6]", size: 20, strokeWidth: 1.5 }) }), F = () => /* @__PURE__ */ e.jsx("div", { className: "flex h-18 w-[100px] min-w-[100px] items-center justify-center rounded-md bg-gradient-to-tl from-[#10B981]/20 to-[#0EA5E9]/20 p-4 opacity-80 transition-all group-hover/card:opacity-100", children: /* @__PURE__ */ e.jsx(z, { className: "text-[#0EA5E9]", size: 20, strokeWidth: 1.5 }) }), L = "Share your feedback", y = "Tell us what’s working and what’s missing — your input shapes what we build next.", ne = () => {
  const { data: a } = W(), { isAvailable: t, openFeedbackWidget: s, preloadFeedbackWidget: r } = ee(), n = t && a && !te(a);
  return /* @__PURE__ */ e.jsxs("div", { className: "mt-auto grid grid-cols-1 gap-6 pt-10 lg:grid-cols-2", children: [
    /* @__PURE__ */ e.jsx(
      N,
      {
        description: "Learn how to set up automations, customize your emails, and get the most out of the beta.",
        title: "Automations in Ghost",
        url: ae,
        children: /* @__PURE__ */ e.jsx(oe, {})
      }
    ),
    n ? /* @__PURE__ */ e.jsx(
      re,
      {
        description: y,
        title: L,
        onClick: () => s(),
        onFocus: r,
        onMouseEnter: r,
        children: /* @__PURE__ */ e.jsx(F, {})
      }
    ) : /* @__PURE__ */ e.jsx(
      N,
      {
        description: y,
        title: L,
        url: se,
        children: /* @__PURE__ */ e.jsx(F, {})
      }
    )
  ] });
}, ie = {
  "member-welcome-email-free": "Welcome new free members after they sign up.",
  "member-welcome-email-paid": "Welcome new paid members after they start their subscription."
}, le = () => /* @__PURE__ */ e.jsx(C, { className: "flex table-fixed flex-col border-t lg:table", "data-testid": "automations-list-loading", children: /* @__PURE__ */ e.jsx(S, { className: "flex flex-col lg:table-row-group", children: Array.from({ length: 2 }, (a, t) => /* @__PURE__ */ e.jsxs(
  v,
  {
    "aria-hidden": "true",
    className: "grid w-full grid-cols-[1fr_auto] items-center gap-x-4 p-2 lg:table-row lg:p-0",
    children: [
      /* @__PURE__ */ e.jsxs(f, { className: "min-w-0 lg:p-4", children: [
        /* @__PURE__ */ e.jsx(g, { className: "mb-1 h-3 w-48 max-w-full " }),
        /* @__PURE__ */ e.jsx(g, { className: "h-3 w-80 max-w-full" })
      ] }),
      /* @__PURE__ */ e.jsx(f, { className: "text-right lg:w-32 lg:p-4", children: /* @__PURE__ */ e.jsx(g, { className: "ml-auto h-3 w-16" }) })
    ]
  },
  t
)) }) }), ce = ({ automations: a = [], isLoading: t = !1 }) => t ? /* @__PURE__ */ e.jsx(le, {}) : /* @__PURE__ */ e.jsx(C, { className: "flex table-fixed flex-col border-t lg:table", "data-testid": "automations-list", children: /* @__PURE__ */ e.jsx(S, { className: "flex flex-col lg:table-row-group", children: a.map((s) => {
  const r = ie[s.slug];
  return /* @__PURE__ */ e.jsxs(
    v,
    {
      className: "grid w-full cursor-pointer grid-cols-[1fr_auto] items-center gap-x-4 p-2 lg:table-row lg:p-0",
      "data-testid": "automation-list-row",
      children: [
        /* @__PURE__ */ e.jsxs(f, { className: "static min-w-0 lg:p-4", children: [
          /* @__PURE__ */ e.jsx(
            P,
            {
              className: "before:absolute before:inset-0 before:z-10 before:rounded-sm focus-visible:outline-hidden focus-visible:before:ring-2 focus-visible:before:ring-focus-ring",
              to: `/automations/${s.id}`,
              children: /* @__PURE__ */ e.jsx("span", { className: "block text-md font-semibold", children: s.name })
            }
          ),
          r && /* @__PURE__ */ e.jsx("span", { className: "block text-muted-foreground", children: r })
        ] }),
        /* @__PURE__ */ e.jsx(f, { className: "text-right lg:w-32 lg:p-4", children: /* @__PURE__ */ e.jsx(K, { status: s.status }) })
      ]
    },
    s.slug
  );
}) }) }), de = {
  paid: "member-welcome-email-paid"
}, ue = () => {
  const { data: a, error: t, isError: s, isLoading: r } = Q({
    defaultErrorHandler: !1
  }), { data: n, isLoading: o } = M(), { data: c, isLoading: d } = T();
  return {
    automations: H(n?.settings || [], c?.config || {}) ? a?.automations : a?.automations?.filter((p) => p.slug !== de.paid),
    error: t,
    isError: s,
    isLoading: r || o || d
  };
}, Ne = () => {
  const { automations: a, error: t, isError: s, isLoading: r } = ue();
  if (s)
    throw t || new Error("Failed to load automations");
  return /* @__PURE__ */ e.jsx($, { children: /* @__PURE__ */ e.jsxs(b, { "data-testid": "automations-page", children: [
    /* @__PURE__ */ e.jsx(b.Header, { children: /* @__PURE__ */ e.jsx(x, { blurredBackground: !1, sticky: !1, children: /* @__PURE__ */ e.jsx(x.Left, { children: /* @__PURE__ */ e.jsx(x.Title, { children: /* @__PURE__ */ e.jsxs("span", { className: "inline-flex items-baseline gap-2", children: [
      "Automations",
      /* @__PURE__ */ e.jsx(G, { className: "px-1 py-px text-[10px] leading-none tracking-wider uppercase", variant: "secondary", children: "Beta" })
    ] }) }) }) }) }),
    /* @__PURE__ */ e.jsxs(b.Body, { children: [
      /* @__PURE__ */ e.jsx(ce, { automations: a, isLoading: r }),
      /* @__PURE__ */ e.jsx(ne, {})
    ] })
  ] }) });
};
export {
  Ne as default
};
//# sourceMappingURL=automations-CoilKpVH.js.map
