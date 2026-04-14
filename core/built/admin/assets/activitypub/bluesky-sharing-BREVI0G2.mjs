import { Q as F, b as i, c as H, T as z, U as I, V as M, W as T, e as O, O as o, j as e, L as y, I as j, k as x, B as n, D as U, m as L, n as R, o as P, p as _, A as S, X as Y, Y as W, q as V, Z, _ as X, $, a0 as q, a1 as Q, a2 as G, a3 as J, a4 as K, a5 as ee } from "./index-BpBf-VFB.mjs";
import { E as se } from "./edit-profile-DE4xvBRw.mjs";
import { C as ae } from "./copy-Q6w7WlwF.mjs";
const re = 5e3, le = 12, de = () => {
  var p;
  const { data: s, isLoading: b } = F("index", "me"), [t, a] = i(() => (s == null ? void 0 : s.blueskyEnabled) && !(s != null && s.blueskyHandleConfirmed)), [v, m] = i(!1), [k, c] = i(!1), [w, h] = i(!1), [C, d] = i(!1), l = H(0), N = z("index"), u = I("index"), B = M("index"), A = async () => {
    m(!0), await navigator.clipboard.writeText((s == null ? void 0 : s.blueskyHandle) || ""), setTimeout(() => m(!1), 2e3);
  }, D = async () => {
    if (!(s != null && s.avatarUrl))
      c(!0);
    else {
      a(!0);
      try {
        await N.mutateAsync();
      } catch {
        a(!1), o.error("Something went wrong, please try again.");
      }
    }
  }, E = async () => {
    a(!0);
    try {
      await u.mutateAsync(), h(!1), o.success("Bluesky sharing disabled");
    } finally {
      a(!1);
    }
  }, g = T(() => {
    B.mutateAsync().then((r) => {
      r && d(!0);
    });
  }, []);
  if (O(() => {
    if (!(s != null && s.blueskyEnabled)) {
      d(!1), a(!1), l.current = 0;
      return;
    }
    if (s != null && s.blueskyHandleConfirmed) {
      d(!0), a(!1), l.current > 0 && o.success("Bluesky sharing enabled"), l.current = 0;
      return;
    }
    d(!1), a(!0), l.current = 0;
    const r = setInterval(async () => {
      if (l.current += 1, l.current > le) {
        clearInterval(r), o.error("Something went wrong, please try again."), await u.mutateAsync(), a(!1);
        return;
      }
      g();
    }, re);
    return () => clearInterval(r);
  }, [s == null ? void 0 : s.blueskyEnabled, s == null ? void 0 : s.blueskyHandleConfirmed, g]), b)
    return /* @__PURE__ */ e.jsx(y, { children: /* @__PURE__ */ e.jsxs("div", { className: "mx-auto max-w-[620px] py-[min(4vh,48px)]", children: [
      /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-between gap-8", children: /* @__PURE__ */ e.jsx(j, { children: "Bluesky sharing" }) }),
      /* @__PURE__ */ e.jsx("div", { className: "mt-6 flex justify-center", children: /* @__PURE__ */ e.jsx(x, { size: "md" }) })
    ] }) });
  const f = (s == null ? void 0 : s.blueskyEnabled) && (s == null ? void 0 : s.blueskyHandleConfirmed);
  return /* @__PURE__ */ e.jsxs(y, { children: [
    /* @__PURE__ */ e.jsxs("div", { className: "mx-auto max-w-[620px] py-[min(4vh,48px)]", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between gap-8", children: [
        /* @__PURE__ */ e.jsx(j, { children: "Bluesky sharing" }),
        f && /* @__PURE__ */ e.jsxs(n, { className: "group w-24 translate-y-1 px-2 hover:bg-red/5! hover:text-red", size: "default", variant: "outline", onClick: () => h(!0), children: [
          /* @__PURE__ */ e.jsx("span", { className: "size-2 rounded-full bg-green group-hover:hidden" }),
          /* @__PURE__ */ e.jsx("span", { className: "group-hover:hidden", children: "Enabled" }),
          /* @__PURE__ */ e.jsx("span", { className: "hidden group-hover:visible! group-hover:inline!", children: "Disable" })
        ] })
      ] }),
      f ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsxs("p", { className: "mt-2 pr-32 text-base", children: [
          "Your social web profile is now connected to Bluesky, via ",
          /* @__PURE__ */ e.jsx("a", { className: "text-purple hover:text-purple-600", href: "https://fed.brid.gy", rel: "noreferrer", target: "_blank", children: "Bridgy Fed" }),
          ". Posts are automatically synced after a short delay to complete activation."
        ] }),
        C && /* @__PURE__ */ e.jsxs("div", { className: "mt-6 flex flex-col items-center gap-4 rounded-lg border border-gray-200 p-8 dark:border-gray-950", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ e.jsx(
              S,
              {
                author: {
                  icon: {
                    url: (s == null ? void 0 : s.avatarUrl) || ""
                  },
                  name: (s == null ? void 0 : s.name) || "",
                  handle: (s == null ? void 0 : s.handle) || ""
                },
                size: "md"
              }
            ),
            /* @__PURE__ */ e.jsx("div", { className: "absolute right-0 bottom-0 z-10 flex size-6 items-center justify-center rounded-full bg-white shadow-xs", children: /* @__PURE__ */ e.jsx("svg", { height: "14", role: "img", viewBox: "0 0 24 24", width: "14", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e.jsx("path", { d: "M12 10.8c-1.087 -2.114 -4.046 -6.053 -6.798 -7.995C2.566 0.944 1.561 1.266 0.902 1.565 0.139 1.908 0 3.08 0 3.768c0 0.69 0.378 5.65 0.624 6.479 0.815 2.736 3.713 3.66 6.383 3.364 0.136 -0.02 0.275 -0.039 0.415 -0.056 -0.138 0.022 -0.276 0.04 -0.415 0.056 -3.912 0.58 -7.387 2.005 -2.83 7.078 5.013 5.19 6.87 -1.113 7.823 -4.308 0.953 3.195 2.05 9.271 7.733 4.308 4.267 -4.308 1.172 -6.498 -2.74 -7.078a8.741 8.741 0 0 1 -0.415 -0.056c0.14 0.017 0.279 0.036 0.415 0.056 2.67 0.297 5.568 -0.628 6.383 -3.364 0.246 -0.828 0.624 -5.79 0.624 -6.478 0 -0.69 -0.139 -1.861 -0.902 -2.206 -0.659 -0.298 -1.664 -0.62 -4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z", fill: "#0385FF", strokeWidth: "1" }) }) })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex grow flex-col items-center", children: [
            /* @__PURE__ */ e.jsx(Y, { children: (s == null ? void 0 : s.name) || "" }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 text-gray-800", children: [
              /* @__PURE__ */ e.jsx("span", { className: "text-lg font-medium", children: s == null ? void 0 : s.blueskyHandle }),
              /* @__PURE__ */ e.jsx(n, { className: "size-6 p-0 hover:opacity-80", title: "Copy handle", variant: "link", onClick: A, children: v ? /* @__PURE__ */ e.jsx(W, { size: 16 }) : /* @__PURE__ */ e.jsx(ae, { size: 16 }) })
            ] })
          ] }),
          /* @__PURE__ */ e.jsx(n, { className: "mt-2 w-full", size: "lg", variant: "secondary", asChild: !0, children: /* @__PURE__ */ e.jsxs("a", { href: `https://bsky.app/profile/${(p = s == null ? void 0 : s.blueskyHandle) == null ? void 0 : p.replace(/^@/, "")}`, rel: "noreferrer", target: "_blank", children: [
            "Open profile",
            /* @__PURE__ */ e.jsx(V, { size: 14, strokeWidth: 1.25 })
          ] }) })
        ] })
      ] }) : /* @__PURE__ */ e.jsxs("div", { className: "mt-3 flex flex-col gap-5", children: [
        /* @__PURE__ */ e.jsx("p", { className: "text-base", children: s != null && s.avatarUrl ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          "Connect your account to ",
          /* @__PURE__ */ e.jsx("a", { className: "text-purple hover:text-purple-600", href: "https://fed.brid.gy", rel: "noreferrer", target: "_blank", children: "Bridgy Fed" }),
          " to share content directly to a dedicated Bluesky profile and increase your reach across the social web."
        ] }) : "Add a profile image to connect to Bluesky. Profile pictures help prevent spam." }),
        /* @__PURE__ */ e.jsx("p", { className: "-mt-2 text-base", children: "You can't change your Bluesky username, so make sure you're happy with your current social web handle before connecting." }),
        s != null && s.avatarUrl ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx(n, { className: "h-10 text-base", disabled: t, variant: "secondary", onClick: D, children: t ? /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e.jsx(x, { size: "sm" }),
            /* @__PURE__ */ e.jsx("span", { children: "Enabling Bluesky sharing..." })
          ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx("svg", { height: "32", role: "img", viewBox: "0 0 24 24", width: "32", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e.jsx("path", { d: "M12 10.8c-1.087 -2.114 -4.046 -6.053 -6.798 -7.995C2.566 0.944 1.561 1.266 0.902 1.565 0.139 1.908 0 3.08 0 3.768c0 0.69 0.378 5.65 0.624 6.479 0.815 2.736 3.713 3.66 6.383 3.364 0.136 -0.02 0.275 -0.039 0.415 -0.056 -0.138 0.022 -0.276 0.04 -0.415 0.056 -3.912 0.58 -7.387 2.005 -2.83 7.078 5.013 5.19 6.87 -1.113 7.823 -4.308 0.953 3.195 2.05 9.271 7.733 4.308 4.267 -4.308 1.172 -6.498 -2.74 -7.078a8.741 8.741 0 0 1 -0.415 -0.056c0.14 0.017 0.279 0.036 0.415 0.056 2.67 0.297 5.568 -0.628 6.383 -3.364 0.246 -0.828 0.624 -5.79 0.624 -6.478 0 -0.69 -0.139 -1.861 -0.902 -2.206 -0.659 -0.298 -1.664 -0.62 -4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z", fill: "#0385FF", strokeWidth: "1" }) }),
            "Enable Bluesky sharing"
          ] }) }),
          t && /* @__PURE__ */ e.jsx("p", { className: "-mt-2 text-center text-sm text-gray-700 dark:text-gray-600", children: "You can leave this page and come back to check the status." })
        ] }) : /* @__PURE__ */ e.jsxs(U, { open: k, onOpenChange: c, children: [
          /* @__PURE__ */ e.jsx(L, { children: /* @__PURE__ */ e.jsx(n, { className: "h-10 w-full text-base", variant: "secondary", children: "Edit profile" }) }),
          /* @__PURE__ */ e.jsxs(R, { className: "w-full max-w-[520px]", onOpenAutoFocus: (r) => r.preventDefault(), children: [
            /* @__PURE__ */ e.jsx(P, { children: /* @__PURE__ */ e.jsx(_, { children: "Profile settings" }) }),
            s && /* @__PURE__ */ e.jsx(se, { account: s, setIsEditingProfile: c })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e.jsx(Z, { open: w, onOpenChange: h, children: /* @__PURE__ */ e.jsxs(X, { children: [
      /* @__PURE__ */ e.jsxs($, { children: [
        /* @__PURE__ */ e.jsx(q, { children: "Disable Bluesky sharing?" }),
        /* @__PURE__ */ e.jsx(Q, { children: "Your bridged Bluesky account will be deactivated and your content will no longer be shared on Bluesky. You can re-enable sharing at any time." })
      ] }),
      /* @__PURE__ */ e.jsxs(G, { children: [
        /* @__PURE__ */ e.jsx(J, { children: "Cancel" }),
        /* @__PURE__ */ e.jsx(
          K,
          {
            className: ee({ variant: "destructive" }),
            disabled: t,
            onClick: (r) => {
              r.preventDefault(), E();
            },
            children: t ? /* @__PURE__ */ e.jsx(x, { color: "light", size: "sm" }) : "Disable"
          }
        )
      ] })
    ] }) })
  ] });
};
export {
  de as default
};
//# sourceMappingURL=bluesky-sharing-BREVI0G2.mjs.map
