import { bO as u, bD as b, a_ as e, a0 as m, D as v, J as y, t as N, E as k, H as S, I as w, w as j, P as E, be as P, az as C, a5 as D } from "./index-sudOvKcY.js";
import { E as H } from "./edit-profile-BfpbEj98.js";
const A = ({ account: s, className: r = "" }) => {
  const [h, t] = u(!1), a = b();
  return /* @__PURE__ */ e.jsxs("div", { className: `flex flex-col ${r}`, children: [
    /* @__PURE__ */ e.jsx(f, {}),
    /* @__PURE__ */ e.jsxs(c, { children: [
      /* @__PURE__ */ e.jsxs(o, { children: [
        /* @__PURE__ */ e.jsx(n, { children: "Profile" }),
        /* @__PURE__ */ e.jsx(i, { children: "Edit your profile information and account details" })
      ] }),
      /* @__PURE__ */ e.jsxs(v, { open: h, onOpenChange: t, children: [
        /* @__PURE__ */ e.jsx(y, { children: /* @__PURE__ */ e.jsx(l, { children: /* @__PURE__ */ e.jsx(N, { variant: "secondary", children: "Edit" }) }) }),
        /* @__PURE__ */ e.jsxs(k, { onOpenAutoFocus: (x) => x.preventDefault(), children: [
          /* @__PURE__ */ e.jsx(S, { children: /* @__PURE__ */ e.jsx(w, { children: "Profile settings" }) }),
          s && /* @__PURE__ */ e.jsx(H, { account: s, setIsEditingProfile: t })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs(c, { withHover: !0, onClick: () => a("/preferences/moderation"), children: [
      /* @__PURE__ */ e.jsxs(o, { children: [
        /* @__PURE__ */ e.jsx(n, { children: "Moderation" }),
        /* @__PURE__ */ e.jsx(i, { children: "Manage blocked users and domains" })
      ] }),
      /* @__PURE__ */ e.jsx(l, { className: "flex items-center gap-2", children: /* @__PURE__ */ e.jsx(j, { size: 20 }) })
    ] }),
    /* @__PURE__ */ e.jsxs(c, { withHover: !0, onClick: () => a("/preferences/bluesky-sharing"), children: [
      /* @__PURE__ */ e.jsxs(o, { children: [
        /* @__PURE__ */ e.jsx(n, { children: "Bluesky sharing" }),
        /* @__PURE__ */ e.jsx(i, { children: "Share content directly on Bluesky" })
      ] }),
      /* @__PURE__ */ e.jsxs(l, { className: "flex items-center gap-2", children: [
        s?.blueskyEnabled ? /* @__PURE__ */ e.jsx("span", { className: "font-medium text-black", children: "On" }) : /* @__PURE__ */ e.jsx("span", { children: "Off" }),
        /* @__PURE__ */ e.jsx(j, { size: 20 })
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs(c, { to: "/preferences/move", withHover: !0, children: [
      /* @__PURE__ */ e.jsxs(o, { children: [
        /* @__PURE__ */ e.jsx(n, { children: "Account migration" }),
        /* @__PURE__ */ e.jsx(i, { children: "Move another social web account to this one" })
      ] }),
      /* @__PURE__ */ e.jsx(l, { className: "flex items-center gap-2", children: /* @__PURE__ */ e.jsx(j, { size: 20 }) })
    ] }),
    /* @__PURE__ */ e.jsx(f, {}),
    /* @__PURE__ */ e.jsxs(c, { href: "https://ghost.org/help/social-web/", withHover: !0, children: [
      /* @__PURE__ */ e.jsxs(o, { children: [
        /* @__PURE__ */ e.jsx(n, { children: "Help" }),
        /* @__PURE__ */ e.jsx(i, { children: "Social web guides and support resources" })
      ] }),
      /* @__PURE__ */ e.jsx(l, { children: /* @__PURE__ */ e.jsx(E, { size: 18 }) })
    ] })
  ] });
}, n = m, i = ({ children: s, className: r = "" }) => /* @__PURE__ */ e.jsx("span", { className: `text-sm text-gray-700 ${r}`, children: s }), o = ({ children: s, className: r = "" }) => /* @__PURE__ */ e.jsx("div", { className: `relative flex flex-col gap-0.5 ${r}`, children: s }), l = ({ children: s, className: r = "" }) => /* @__PURE__ */ e.jsx("div", { className: `relative text-gray-500 ${r}`, children: s }), c = ({ children: s, className: r = "", withHover: h = !1, to: t, href: a, onClick: x }) => {
  const p = P(), d = C("flex items-center justify-between py-3 gap-4", h ? "relative cursor-pointer before:absolute before:inset-x-[-16px] before:inset-y-[-1px] before:rounded-md before:bg-gray-50 before:opacity-0 before:transition-opacity before:will-change-[opacity] hover:z-10 hover:cursor-pointer hover:border-b-transparent hover:before:opacity-100 dark:before:bg-gray-950" : "", r), g = t && t.startsWith("/") ? `${p}${t}` : t;
  return g ? /* @__PURE__ */ e.jsx(
    D,
    {
      className: d,
      to: g,
      children: s
    }
  ) : a ? /* @__PURE__ */ e.jsx(
    "a",
    {
      className: d,
      href: a,
      rel: "noreferrer",
      target: "_blank",
      children: s
    }
  ) : x ? /* @__PURE__ */ e.jsx(
    "div",
    {
      className: d,
      role: "button",
      tabIndex: 0,
      onClick: x,
      children: s
    }
  ) : /* @__PURE__ */ e.jsx("div", { className: d, children: s });
}, f = () => /* @__PURE__ */ e.jsx("hr", { className: "my-3 h-px border-0 bg-gray-200 dark:bg-gray-950" });
export {
  l as S,
  A as a
};
//# sourceMappingURL=settings-D6R97p7v.js.map
