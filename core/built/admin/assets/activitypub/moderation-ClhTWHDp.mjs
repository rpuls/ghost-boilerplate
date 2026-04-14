import { v as F, w as T, x as _, y as E, b as x, z as H, G as V, d as W, j as e, L as R, I as $, N as p, J as v, K as w, P as z, M as f, h as G, A as J, S as t, B as c, O as i } from "./index-BpBf-VFB.mjs";
import { T as K, a as O, b as N, c as g } from "./tabs-CU1GihRT.mjs";
const X = () => {
  const { data: d, isLoading: n } = F("index"), { data: u, isLoading: o } = T("index"), m = n ? Array(5).fill({ apId: "", name: "", handle: "", avatarUrl: "" }) : (d == null ? void 0 : d.pages.flatMap((s) => s.accounts)) ?? [], h = o ? Array(5).fill({ apId: "", name: "" }) : (u == null ? void 0 : u.pages.flatMap((s) => s.domains)) ?? [], I = _("index"), U = E("index"), [M, k] = x(/* @__PURE__ */ new Set()), B = H("index"), y = V("index"), [S, b] = x(/* @__PURE__ */ new Set()), [j, r] = x(null), L = W(), A = (s) => {
    k((l) => {
      const a = /* @__PURE__ */ new Set([...l]);
      return a.add(s.apId), a;
    }), U.mutate(s), i.success("User unblocked");
  }, D = (s) => {
    k((l) => {
      const a = /* @__PURE__ */ new Set([...l]);
      return a.delete(s.apId), a;
    }), I.mutate(s), i.success("User blocked");
  }, C = (s) => {
    b((l) => {
      const a = /* @__PURE__ */ new Set([...l]);
      return a.add(s.url), a;
    }), y.mutate({ url: s.url }), i.success("Domain unblocked");
  }, P = (s) => {
    b((l) => {
      const a = /* @__PURE__ */ new Set([...l]);
      return a.delete(s.url), a;
    }), B.mutate({ url: s.url }), i.success("Domain blocked");
  };
  return /* @__PURE__ */ e.jsx(R, { children: /* @__PURE__ */ e.jsxs("div", { className: "mx-auto max-w-[620px] py-[min(4vh,48px)]", children: [
    /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-between gap-8", children: /* @__PURE__ */ e.jsx($, { children: "Moderation" }) }),
    /* @__PURE__ */ e.jsx("div", { className: "mt-6", children: /* @__PURE__ */ e.jsxs(K, { defaultValue: "blocked_users", variant: "underline", children: [
      /* @__PURE__ */ e.jsxs(O, { children: [
        /* @__PURE__ */ e.jsx(N, { value: "blocked_users", children: "Blocked users" }),
        /* @__PURE__ */ e.jsx(N, { value: "blocked_domains", children: "Blocked domains" })
      ] }),
      /* @__PURE__ */ e.jsx(g, { className: "mt-2", value: "blocked_users", children: !n && m.length === 0 ? /* @__PURE__ */ e.jsxs(p, { children: [
        /* @__PURE__ */ e.jsx(v, { children: /* @__PURE__ */ e.jsx(w, {}) }),
        /* @__PURE__ */ e.jsx("div", { className: "mt-2 flex max-w-[400px] flex-col items-center gap-1 text-center", children: /* @__PURE__ */ e.jsx("p", { children: "When you block someone, they won't be able to follow you or interact with your content on the social web." }) })
      ] }) : m.map((s, l) => /* @__PURE__ */ e.jsx(z, { actor: s, isCurrentUser: !0, children: /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsxs(
        f,
        {
          onClick: n ? void 0 : () => G(s.handle, L),
          children: [
            /* @__PURE__ */ e.jsx(
              J,
              {
                author: {
                  icon: {
                    url: s.avatarUrl
                  },
                  name: s.name,
                  handle: s.handle
                }
              }
            ),
            /* @__PURE__ */ e.jsxs("div", { className: "flex min-w-0  flex-col", children: [
              /* @__PURE__ */ e.jsx("span", { className: "block truncate font-semibold text-black dark:text-white", children: n ? /* @__PURE__ */ e.jsx(t, { className: "w-24" }) : s.name }),
              /* @__PURE__ */ e.jsx("span", { className: "block truncate text-sm text-gray-600", children: n ? /* @__PURE__ */ e.jsx(t, { className: "w-40" }) : s.handle })
            ] }),
            M.has(s.apId) ? /* @__PURE__ */ e.jsx(
              c,
              {
                className: "ml-auto min-w-[90px] text-red hover:bg-red/5! hover:text-red-400",
                variant: "outline",
                onClick: (a) => {
                  a.stopPropagation(), D(s);
                },
                children: "Block"
              }
            ) : n ? /* @__PURE__ */ e.jsx("div", { className: "ml-auto w-16", children: /* @__PURE__ */ e.jsx(t, {}) }) : /* @__PURE__ */ e.jsx(
              c,
              {
                className: "ml-auto min-w-[90px]",
                variant: "destructive",
                onClick: (a) => {
                  a.stopPropagation(), A(s);
                },
                onMouseEnter: () => r(s.apId),
                onMouseLeave: () => r(null),
                children: j === s.apId ? "Unblock" : "Blocked"
              }
            )
          ]
        }
      ) }) }, s.apId ? s.apId : `loading-${l}`)) }),
      /* @__PURE__ */ e.jsx(g, { className: "mt-[11px]", value: "blocked_domains", children: !o && h.length === 0 ? /* @__PURE__ */ e.jsxs(p, { children: [
        /* @__PURE__ */ e.jsx(v, { children: /* @__PURE__ */ e.jsx(w, {}) }),
        /* @__PURE__ */ e.jsx("div", { className: "mt-2 flex max-w-[400px] flex-col items-center gap-1 text-center", children: /* @__PURE__ */ e.jsx("p", { children: "When you block a domain, all users from that domain won't be able to follow you or interact with your content." }) })
      ] }) : h.map((s, l) => /* @__PURE__ */ e.jsxs(f, { children: [
        /* @__PURE__ */ e.jsx("div", { className: "flex min-w-0 flex-col", children: /* @__PURE__ */ e.jsx("span", { className: "block truncate font-semibold text-black dark:text-white", children: o ? /* @__PURE__ */ e.jsx(t, { className: "w-48" }) : new URL(s.url).hostname }) }),
        S.has(s.url) ? /* @__PURE__ */ e.jsx(
          c,
          {
            className: "ml-auto min-w-[90px] text-red hover:bg-red/5! hover:text-red-400",
            variant: "outline",
            onClick: () => P(s),
            children: "Block"
          }
        ) : o ? /* @__PURE__ */ e.jsx("div", { className: "ml-auto w-16", children: /* @__PURE__ */ e.jsx(t, {}) }) : /* @__PURE__ */ e.jsx(
          c,
          {
            className: "ml-auto min-w-[90px]",
            variant: "destructive",
            onClick: () => C(s),
            onMouseEnter: () => r(s.url),
            onMouseLeave: () => r(null),
            children: j === s.url ? "Unblock" : "Blocked"
          }
        )
      ] }, s.url ? s.url : `loading-${l}`)) })
    ] }) })
  ] }) });
};
export {
  X as default
};
//# sourceMappingURL=moderation-ClhTWHDp.mjs.map
