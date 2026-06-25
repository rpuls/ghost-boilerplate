import { bh as T, bi as _, bg as F, bT as E, bO as d, bf as H, bS as V, bD as W, a_ as e, a4 as R, _ as $, a9 as k, aa as j, r as p, aj as O, a as v, A as q, ar as t, t as c, aS as z, b8 as i } from "./index-sudOvKcY.js";
import { T as G, b as J, c as w, a as f } from "./tabs-DTpfm-wu.js";
const X = () => {
  const { data: N, isLoading: n } = T("index"), { data: g, isLoading: o } = _("index"), u = n ? Array(5).fill({ apId: "", name: "", handle: "", avatarUrl: "" }) : N?.pages.flatMap((s) => s.accounts) ?? [], x = o ? Array(5).fill({ apId: "", name: "" }) : g?.pages.flatMap((s) => s.domains) ?? [], U = F("index"), I = E("index"), [D, m] = d(/* @__PURE__ */ new Set()), M = H("index"), B = V("index"), [y, h] = d(/* @__PURE__ */ new Set()), [b, r] = d(null), S = W(), A = (s) => {
    m((l) => {
      const a = /* @__PURE__ */ new Set([...l]);
      return a.add(s.apId), a;
    }), I.mutate(s), i.success("User unblocked");
  }, L = (s) => {
    m((l) => {
      const a = /* @__PURE__ */ new Set([...l]);
      return a.delete(s.apId), a;
    }), U.mutate(s), i.success("User blocked");
  }, C = (s) => {
    h((l) => {
      const a = /* @__PURE__ */ new Set([...l]);
      return a.add(s.url), a;
    }), B.mutate({ url: s.url }), i.success("Domain unblocked");
  }, P = (s) => {
    h((l) => {
      const a = /* @__PURE__ */ new Set([...l]);
      return a.delete(s.url), a;
    }), M.mutate({ url: s.url }), i.success("Domain blocked");
  };
  return /* @__PURE__ */ e.jsx(R, { children: /* @__PURE__ */ e.jsxs("div", { className: "mx-auto max-w-[620px] py-[min(4vh,48px)]", children: [
    /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-between gap-8", children: /* @__PURE__ */ e.jsx($, { children: "Moderation" }) }),
    /* @__PURE__ */ e.jsx("div", { className: "mt-6", children: /* @__PURE__ */ e.jsxs(G, { defaultValue: "blocked_users", variant: "underline", children: [
      /* @__PURE__ */ e.jsxs(J, { children: [
        /* @__PURE__ */ e.jsx(w, { value: "blocked_users", children: "Blocked users" }),
        /* @__PURE__ */ e.jsx(w, { value: "blocked_domains", children: "Blocked domains" })
      ] }),
      /* @__PURE__ */ e.jsx(f, { className: "mt-2", value: "blocked_users", children: !n && u.length === 0 ? /* @__PURE__ */ e.jsxs(k, { children: [
        /* @__PURE__ */ e.jsx(j, { children: /* @__PURE__ */ e.jsx(p, {}) }),
        /* @__PURE__ */ e.jsx("div", { className: "mt-2 flex max-w-[400px] flex-col items-center gap-1 text-center", children: /* @__PURE__ */ e.jsx("p", { children: "When you block someone, they won't be able to follow you or interact with your content on the social web." }) })
      ] }) : u.map((s, l) => /* @__PURE__ */ e.jsx(O, { actor: s, isCurrentUser: !0, children: /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsxs(
        v,
        {
          onClick: n ? void 0 : () => z(s.handle, S),
          children: [
            /* @__PURE__ */ e.jsx(
              q,
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
            D.has(s.apId) ? /* @__PURE__ */ e.jsx(
              c,
              {
                className: "ml-auto min-w-[90px] text-red hover:bg-red/5! hover:text-red-400",
                variant: "outline",
                onClick: (a) => {
                  a.stopPropagation(), L(s);
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
                children: b === s.apId ? "Unblock" : "Blocked"
              }
            )
          ]
        }
      ) }) }, s.apId ? s.apId : `loading-${l}`)) }),
      /* @__PURE__ */ e.jsx(f, { className: "mt-[11px]", value: "blocked_domains", children: !o && x.length === 0 ? /* @__PURE__ */ e.jsxs(k, { children: [
        /* @__PURE__ */ e.jsx(j, { children: /* @__PURE__ */ e.jsx(p, {}) }),
        /* @__PURE__ */ e.jsx("div", { className: "mt-2 flex max-w-[400px] flex-col items-center gap-1 text-center", children: /* @__PURE__ */ e.jsx("p", { children: "When you block a domain, all users from that domain won't be able to follow you or interact with your content." }) })
      ] }) : x.map((s, l) => /* @__PURE__ */ e.jsxs(v, { children: [
        /* @__PURE__ */ e.jsx("div", { className: "flex min-w-0 flex-col", children: /* @__PURE__ */ e.jsx("span", { className: "block truncate font-semibold text-black dark:text-white", children: o ? /* @__PURE__ */ e.jsx(t, { className: "w-48" }) : new URL(s.url).hostname }) }),
        y.has(s.url) ? /* @__PURE__ */ e.jsx(
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
            children: b === s.url ? "Unblock" : "Blocked"
          }
        )
      ] }, s.url ? s.url : `loading-${l}`)) })
    ] }) })
  ] }) });
};
export {
  X as default
};
//# sourceMappingURL=moderation-B78if-r0.js.map
