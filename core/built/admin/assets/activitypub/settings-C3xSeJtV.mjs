import { b as f, d as p, j as e, H as b, D as m, m as u, B as v, n as y, o as N, p as k, C as j, q as S, s as C, t as E } from "./index-BpBf-VFB.mjs";
import { E as D } from "./edit-profile-DE4xvBRw.mjs";
const z = ({ account: s, className: r = "" }) => {
  const [h, t] = f(!1), a = p();
  return /* @__PURE__ */ e.jsxs("div", { className: `flex flex-col ${r}`, children: [
    /* @__PURE__ */ e.jsx(g, {}),
    /* @__PURE__ */ e.jsxs(d, { children: [
      /* @__PURE__ */ e.jsxs(c, { children: [
        /* @__PURE__ */ e.jsx(o, { children: "Account" }),
        /* @__PURE__ */ e.jsx(l, { children: "Edit your profile information and account details" })
      ] }),
      /* @__PURE__ */ e.jsxs(m, { open: h, onOpenChange: t, children: [
        /* @__PURE__ */ e.jsx(u, { children: /* @__PURE__ */ e.jsx(x, { children: /* @__PURE__ */ e.jsx(v, { variant: "secondary", children: "Edit profile" }) }) }),
        /* @__PURE__ */ e.jsxs(y, { onOpenAutoFocus: (i) => i.preventDefault(), children: [
          /* @__PURE__ */ e.jsx(N, { children: /* @__PURE__ */ e.jsx(k, { children: "Profile settings" }) }),
          s && /* @__PURE__ */ e.jsx(D, { account: s, setIsEditingProfile: t })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs(d, { withHover: !0, onClick: () => a("/preferences/moderation"), children: [
      /* @__PURE__ */ e.jsxs(c, { children: [
        /* @__PURE__ */ e.jsx(o, { children: "Moderation" }),
        /* @__PURE__ */ e.jsx(l, { children: "Manage blocked users and domains" })
      ] }),
      /* @__PURE__ */ e.jsx(x, { className: "flex items-center gap-2", children: /* @__PURE__ */ e.jsx(j, { size: 20 }) })
    ] }),
    /* @__PURE__ */ e.jsxs(d, { withHover: !0, onClick: () => a("/preferences/bluesky-sharing"), children: [
      /* @__PURE__ */ e.jsxs(c, { children: [
        /* @__PURE__ */ e.jsx(o, { children: "Bluesky sharing" }),
        /* @__PURE__ */ e.jsx(l, { children: "Share content directly on Bluesky" })
      ] }),
      /* @__PURE__ */ e.jsxs(x, { className: "flex items-center gap-2", children: [
        s != null && s.blueskyEnabled ? /* @__PURE__ */ e.jsx("span", { className: "font-medium text-black", children: "On" }) : /* @__PURE__ */ e.jsx("span", { children: "Off" }),
        /* @__PURE__ */ e.jsx(j, { size: 20 })
      ] })
    ] }),
    /* @__PURE__ */ e.jsx(g, {}),
    /* @__PURE__ */ e.jsxs(d, { href: "https://ghost.org/help/social-web/", withHover: !0, children: [
      /* @__PURE__ */ e.jsxs(c, { children: [
        /* @__PURE__ */ e.jsx(o, { children: "Help" }),
        /* @__PURE__ */ e.jsx(l, { children: "Social web guides and support resources" })
      ] }),
      /* @__PURE__ */ e.jsx(x, { children: /* @__PURE__ */ e.jsx(S, { size: 18 }) })
    ] })
  ] });
}, o = b, l = ({ children: s, className: r = "" }) => /* @__PURE__ */ e.jsx("span", { className: `text-sm text-gray-700 ${r}`, children: s }), c = ({ children: s, className: r = "" }) => /* @__PURE__ */ e.jsx("div", { className: `relative flex flex-col gap-0.5 ${r}`, children: s }), x = ({ children: s, className: r = "" }) => /* @__PURE__ */ e.jsx("div", { className: `relative text-gray-500 ${r}`, children: s }), d = ({ children: s, className: r = "", withHover: h = !1, to: t, href: a, onClick: i }) => {
  const n = C("flex items-center justify-between py-3 gap-4", h ? "relative cursor-pointer before:absolute before:inset-x-[-16px] before:inset-y-[-1px] before:rounded-md before:bg-gray-50 before:opacity-0 before:transition-opacity before:will-change-[opacity] hover:z-10 hover:cursor-pointer hover:border-b-transparent hover:before:opacity-100 dark:before:bg-gray-950" : "", r);
  return t ? /* @__PURE__ */ e.jsx(
    E,
    {
      className: n,
      to: t,
      children: s
    }
  ) : a ? /* @__PURE__ */ e.jsx(
    "a",
    {
      className: n,
      href: a,
      rel: "noreferrer",
      target: "_blank",
      children: s
    }
  ) : i ? /* @__PURE__ */ e.jsx(
    "div",
    {
      className: n,
      role: "button",
      tabIndex: 0,
      onClick: i,
      children: s
    }
  ) : /* @__PURE__ */ e.jsx("div", { className: n, children: s });
}, g = () => /* @__PURE__ */ e.jsx("hr", { className: "my-3 h-px border-0 bg-gray-200 dark:bg-gray-950" });
export {
  x as S,
  z as a
};
//# sourceMappingURL=settings-C3xSeJtV.mjs.map
