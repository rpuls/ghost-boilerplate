import { aF as ce, bc as X, bL as y, bs as C, bD as S, a_ as e, a9 as z, aa as _, av as Me, aQ as Be, ak as De, aj as Te, a as Pe, A as de, t as p, W as xe, aS as Fe, a6 as Z, a1 as Ie, S as ue, bO as v, bk as Oe, b as me, j as Ae, e as he, h as W, i as q, f as G, a0 as J, au as Re, Y as $e, g as K, d as fe, b8 as B, ac as Ee, af as He, ae as Le, ad as oe, c as Se, ay as ze, bI as pe, bB as _e, bE as Ve, bC as Qe, bg as Ye, bT as We, bf as qe, bS as Ge, a4 as re, N as Je, M as Ke, ar as R, L as Xe, D as Ze, J as es, E as ss, H as ls, I as ns, _ as as, C as os, q as rs, b6 as te, b2 as ts, b7 as is, ax as Q, r as cs, aW as ds, O as xs, bJ as us, bb as be, bK as ms } from "./index-sudOvKcY.js";
import { S as je } from "./separator-B_Ly_Qq8.js";
import { E as hs } from "./edit-profile-BfpbEj98.js";
import { T as fs, b as ps, c as H, d as Y, a as L } from "./tabs-DTpfm-wu.js";
import { S as bs } from "./settings-D6R97p7v.js";
import { C as js } from "./copy-DXRvsGiK.js";
const gs = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
], ks = ce("pencil", gs);
const ws = [
  ["path", { d: "M2 21a8 8 0 0 1 11.873-7", key: "74fkxq" }],
  ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
  ["path", { d: "m17 17 5 5", key: "p7ous7" }],
  ["path", { d: "m22 17-5 5", key: "gqnmv0" }]
], vs = ce("user-round-x", ws);
function ys(s) {
  return typeof s.name == "string" ? s.name : typeof s.preferredUsername == "string" ? s.preferredUsername : typeof s.preferredUsername == "object" && s.preferredUsername !== null && "@value" in s.preferredUsername && typeof s.preferredUsername["@value"] == "string" ? s.preferredUsername["@value"] : "Unknown";
}
const ge = ({
  noResultsMessage: s,
  actors: r,
  isLoading: n,
  fetchNextPage: c,
  hasNextPage: u,
  isFetchingNextPage: d
}) => {
  const i = X("index", "me"), { data: o } = i, a = y(null), t = y(null);
  C(() => (a.current && a.current.disconnect(), a.current = new IntersectionObserver((l) => {
    l[0].isIntersecting && u && !d && c();
  }), t.current && a.current.observe(t.current), () => {
    a.current && a.current.disconnect();
  }), [u, d, c]);
  const x = S();
  return /* @__PURE__ */ e.jsxs("div", { className: "pt-3", "data-testid": "actor-list", children: [
    u === !1 && r.length === 0 ? /* @__PURE__ */ e.jsxs(z, { children: [
      /* @__PURE__ */ e.jsx(_, { children: /* @__PURE__ */ e.jsx(Me, {}) }),
      s
    ] }) : /* @__PURE__ */ e.jsx("div", { className: "flex flex-col", children: r.map(({ actor: l, isFollowing: h, blockedByMe: b, domainBlockedByMe: g }) => {
      const k = Be(l), N = k === o?.handle;
      return /* @__PURE__ */ e.jsx(De.Fragment, { children: /* @__PURE__ */ e.jsx(Te, { actor: l, align: "center", isCurrentUser: N, side: "left", children: /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsxs(
        Pe,
        {
          "data-testid": "actor-item",
          onClick: () => {
            Fe(l, x);
          },
          children: [
            /* @__PURE__ */ e.jsx(de, { author: l }),
            /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsxs("div", { className: "break-anywhere text-gray-600", children: [
              /* @__PURE__ */ e.jsx("span", { className: "mr-1 line-clamp-1 font-bold text-black dark:text-white", children: ys(l) }),
              /* @__PURE__ */ e.jsx("div", { className: "line-clamp-1 text-sm", children: k })
            ] }) }),
            b || g ? /* @__PURE__ */ e.jsx(p, { className: "pointer-events-none ml-auto min-w-[90px]", variant: "destructive", children: "Blocked" }) : N ? null : /* @__PURE__ */ e.jsx(
              xe,
              {
                className: "ml-auto",
                "data-testid": "follow-button",
                following: h,
                handle: k,
                type: "secondary"
              }
            )
          ]
        },
        l.id
      ) }) }) }, l.id);
    }) }),
    /* @__PURE__ */ e.jsx("div", { ref: t, className: "h-1" }),
    (d || n) && /* @__PURE__ */ e.jsx("div", { className: "mt-6 flex flex-col items-center justify-center gap-4 text-center", children: /* @__PURE__ */ e.jsx(Z, { size: "md" }) })
  ] });
}, Ns = ({
  posts: s,
  fetchNextPage: r,
  hasNextPage: n,
  isFetchingNextPage: c,
  isLoading: u
}) => {
  const d = y(null), i = y(null), o = y(null), a = Math.max(0, Math.floor(s.length * 0.75) - 1);
  C(() => (d.current && d.current.disconnect(), d.current = new IntersectionObserver((x) => {
    x[0].isIntersecting && n && !c && r();
  }), i.current && d.current.observe(i.current), o.current && d.current.observe(o.current), () => {
    d.current && d.current.disconnect();
  }), [n, c, r]);
  const t = S();
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    n === !1 && s.length === 0 && /* @__PURE__ */ e.jsxs(z, { children: [
      /* @__PURE__ */ e.jsx(_, { children: /* @__PURE__ */ e.jsx(Ie, {}) }),
      "You haven't liked anything yet."
    ] }),
    /* @__PURE__ */ e.jsxs("ul", { className: "mx-auto flex max-w-[640px] flex-col", "data-testid": "profile-likes-list", children: [
      s.map((x, l) => /* @__PURE__ */ e.jsxs(
        "li",
        {
          "data-testid": "profile-like-item",
          "data-test-view-article": !0,
          children: [
            /* @__PURE__ */ e.jsx(
              ue,
              {
                actor: x.actor,
                allowDelete: x.object.authored,
                commentCount: x.object.replyCount,
                isLoading: u,
                layout: "feed",
                likeCount: x.object.likeCount,
                object: x.object,
                repostCount: x.object.repostCount,
                type: x.type,
                onClick: () => {
                  x.object.type === "Note" ? t(`/notes/${encodeURIComponent(x.object.id)}`) : x.object.type === "Article" && t(`/reader/${encodeURIComponent(x.object.id)}`);
                }
              }
            ),
            l < s.length - 1 && /* @__PURE__ */ e.jsx(je, {}),
            l === a && /* @__PURE__ */ e.jsx("div", { ref: i, className: "h-1" })
          ]
        },
        `likes-${x.id}`
      )),
      c && /* @__PURE__ */ e.jsx("li", { className: "flex flex-col items-center justify-center gap-4 text-center", children: /* @__PURE__ */ e.jsx(Z, { size: "md" }) })
    ] }),
    /* @__PURE__ */ e.jsx("div", { ref: o, className: "h-1" })
  ] });
}, Cs = ({
  posts: s,
  fetchNextPage: r,
  hasNextPage: n,
  isFetchingNextPage: c,
  isLoading: u,
  noResultsMessage: d
}) => {
  const i = y(null), o = y(null), a = y(null), t = Math.max(0, Math.floor(s.length * 0.75) - 1);
  C(() => (i.current && i.current.disconnect(), i.current = new IntersectionObserver((l) => {
    l[0].isIntersecting && n && !c && r();
  }), o.current && i.current.observe(o.current), a.current && i.current.observe(a.current), () => {
    i.current && i.current.disconnect();
  }), [n, c, r]);
  const x = S();
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    n === !1 && s.length === 0 && /* @__PURE__ */ e.jsxs(z, { children: [
      /* @__PURE__ */ e.jsx(_, { children: /* @__PURE__ */ e.jsx(ks, {}) }),
      d
    ] }),
    /* @__PURE__ */ e.jsxs("ul", { className: "mx-auto flex max-w-[640px] flex-col", "data-testid": "profile-posts-list", children: [
      s.map((l, h) => /* @__PURE__ */ e.jsxs(
        "li",
        {
          "data-testid": "profile-post-item",
          "data-test-view-article": !0,
          children: [
            /* @__PURE__ */ e.jsx(
              ue,
              {
                actor: l.actor,
                allowDelete: l.object.authored,
                commentCount: l.object.replyCount,
                isLoading: u,
                layout: "feed",
                likeCount: l.object.likeCount,
                object: l.object,
                repostCount: l.object.repostCount,
                type: l.type,
                onClick: () => {
                  l.object.type === "Note" ? x(`/notes/${encodeURIComponent(l.object.id)}`) : l.object.type === "Article" && x(`/reader/${encodeURIComponent(l.object.id)}`);
                }
              }
            ),
            h < s.length - 1 && /* @__PURE__ */ e.jsx(je, {}),
            h === t && /* @__PURE__ */ e.jsx("div", { ref: o, className: "h-1" })
          ]
        },
        `posts-${l.id}`
      )),
      c && /* @__PURE__ */ e.jsx("li", { className: "flex flex-col items-center justify-center gap-4 text-center", children: /* @__PURE__ */ e.jsx(Z, { size: "md" }) })
    ] }),
    /* @__PURE__ */ e.jsx("div", { ref: a, className: "h-1" })
  ] });
}, ke = ({
  handle: s,
  isUserBlocked: r,
  isDomainBlocked: n,
  onUnblockUser: c,
  onUnblockDomain: u,
  trigger: d,
  onUnblockComplete: i,
  isOpen: o,
  onOpenChange: a
}) => {
  const [t, x] = v(!1), [l, h] = v(() => {
    const f = r && n, U = r && !n, O = !r && n;
    let j = "idle";
    return f ? j = "dual" : U ? j = "userOnly" : O && (j = "domainOnly"), {
      mode: j,
      userUnblocked: !1,
      domainUnblocked: !1
    };
  }), b = o !== void 0, g = b ? o : t, [k, N] = v(!1), D = Oe(() => {
    const f = r && n, U = r && !n, O = !r && n;
    let j = "idle";
    f ? j = "dual" : U ? j = "userOnly" : O && (j = "domainOnly"), h((M) => ({
      ...M,
      mode: j,
      userUnblocked: !1,
      domainUnblocked: !1
    }));
  }, [r, n]);
  C(() => {
    g && !k ? (D(), N(!0)) : g || N(!1);
  }, [g, k, D]);
  const F = () => {
    b ? a?.(!0) : x(!0);
  }, m = (f) => {
    f || (b ? a?.(!1) : x(!1));
  }, $ = async () => {
    await c(), h((f) => ({
      ...f,
      userUnblocked: !0
    })), (l.mode !== "dual" || l.domainUnblocked) && (m(!1), i?.()), B.success("User unblocked");
  }, E = async () => {
    await u(), h((f) => ({
      ...f,
      domainUnblocked: !0
    })), (l.mode !== "dual" || l.userUnblocked) && (m(!1), i?.()), B.success("Domain unblocked");
  }, I = s.split("@").filter(Boolean)[1], T = () => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs(W, { children: [
      /* @__PURE__ */ e.jsx(q, { className: "mb-1 flex flex-col gap-1", children: "Unblock" }),
      /* @__PURE__ */ e.jsx(G, { className: "mt-4!", asChild: !0, children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col rounded-md border", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between gap-6 p-5", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-1", children: [
            /* @__PURE__ */ e.jsx(J, { children: "Unblock user" }),
            /* @__PURE__ */ e.jsxs("p", { children: [
              /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-black", children: s }),
              " will be able to follow you and engage with your public posts."
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs(p, { className: `gap-1 ${l.userUnblocked ? "pointer-events-none border-green bg-green text-white hover:bg-green hover:text-white" : "text-red hover:text-red-400"}`, variant: "outline", onClick: $, children: [
            /* @__PURE__ */ e.jsx(Re, {}),
            l.userUnblocked ? "User unblocked" : "Unblock user"
          ] })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "border-t" }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between gap-6 p-5", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-1", children: [
            /* @__PURE__ */ e.jsx(J, { children: "Unblock domain" }),
            /* @__PURE__ */ e.jsxs("p", { children: [
              "Users from ",
              /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-black", children: I }),
              " will be able to follow you and engage with your public posts."
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs(p, { className: `gap-1 ${l.domainUnblocked ? "pointer-events-none border-green bg-green text-white hover:bg-green hover:text-white" : "text-red hover:text-red-400"}`, variant: "outline", onClick: E, children: [
            /* @__PURE__ */ e.jsx($e, {}),
            l.domainUnblocked ? "Domain unblocked" : "Unblock domain"
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ e.jsx(K, { children: /* @__PURE__ */ e.jsx(p, { onClick: () => m(!1), children: "OK" }) })
  ] }), P = () => {
    const f = l.mode === "userOnly";
    return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsxs(W, { children: [
        /* @__PURE__ */ e.jsx(q, { className: "mb-1 flex flex-col gap-1", children: f ? "Unblock this user?" : "Unblock this domain?" }),
        /* @__PURE__ */ e.jsx(G, { children: f ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-black", children: s }),
          " will be able to follow you and engage with your public posts."
        ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          "Users from ",
          /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-black", children: I }),
          " will be able to follow you and engage with your public posts."
        ] }) })
      ] }),
      /* @__PURE__ */ e.jsxs(K, { children: [
        /* @__PURE__ */ e.jsx(fe, { children: "Cancel" }),
        /* @__PURE__ */ e.jsx(p, { onClick: f ? $ : E, children: "Unblock" })
      ] })
    ] });
  };
  return /* @__PURE__ */ e.jsxs(me, { open: g, onOpenChange: m, children: [
    d && /* @__PURE__ */ e.jsx(Ae, { asChild: !0, onClick: F, children: d }),
    /* @__PURE__ */ e.jsx(he, { className: `${l.mode === "dual" && "max-w-[600px]"}`, children: l.mode === "dual" ? T() : P() })
  ] });
}, Us = ({
  account: s,
  children: r,
  onCopyHandle: n,
  onBlockAccount: c,
  onBlockDomain: u,
  disabled: d = !1,
  isBlocked: i = !1,
  isDomainBlocked: o = !1
}) => {
  const [a, t] = v(null), [x, l] = v(!1), h = (m) => {
    m.stopPropagation(), n();
  }, b = (m) => {
    m.stopPropagation(), c();
  }, g = (m) => {
    m.stopPropagation(), u();
  }, k = s?.handle, N = k?.split("@").filter(Boolean)[1], D = () => /* @__PURE__ */ e.jsx(me, { open: x, onOpenChange: l, children: /* @__PURE__ */ e.jsxs(he, { onClick: (m) => m.stopPropagation(), children: [
    /* @__PURE__ */ e.jsxs(W, { children: [
      /* @__PURE__ */ e.jsx(q, { className: "mb-1 flex flex-col gap-1", children: a === "user" ? "Block this user?" : "Block this domain?" }),
      /* @__PURE__ */ e.jsx(G, { children: a === "user" ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-black", children: k }),
        " will be able to see your public posts, but will no longer be able follow you or interact with your content on the social web."
      ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        "All users from ",
        /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-black", children: N }),
        " will be able to see your public posts, but won't be able to follow you or interact with your content."
      ] }) })
    ] }),
    /* @__PURE__ */ e.jsxs(K, { children: [
      a !== "domain" && /* @__PURE__ */ e.jsx(p, { className: "mr-auto -ml-3 hover:bg-transparent hover:opacity-80", variant: "ghost", onClick: (m) => {
        m.stopPropagation(), t("domain");
      }, children: "Block domain instead" }),
      /* @__PURE__ */ e.jsx(fe, { onClick: (m) => m.stopPropagation(), children: "Cancel" }),
      /* @__PURE__ */ e.jsx(
        Se,
        {
          className: ze({ variant: "destructive" }),
          onClick: a === "user" ? b : g,
          children: "Block"
        }
      )
    ] })
  ] }) }), F = () => s && /* @__PURE__ */ e.jsx(
    ke,
    {
      handle: s.handle,
      isDomainBlocked: s.domainBlockedByMe,
      isOpen: x,
      isUserBlocked: s.blockedByMe,
      onOpenChange: l,
      onUnblockDomain: u,
      onUnblockUser: c
    }
  );
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs(Ee, { children: [
      /* @__PURE__ */ e.jsx(He, { disabled: d, asChild: !0, onClick: (m) => m.stopPropagation(), children: r }),
      /* @__PURE__ */ e.jsx(Le, { align: "end", className: "p-2", children: /* @__PURE__ */ e.jsxs("div", { className: "flex w-48 flex-col", children: [
        /* @__PURE__ */ e.jsx(oe, { asChild: !0, children: /* @__PURE__ */ e.jsx(p, { className: "justify-start", variant: "ghost", onClick: h, children: "Copy handle" }) }),
        /* @__PURE__ */ e.jsx(oe, { asChild: !0, children: /* @__PURE__ */ e.jsx(p, { className: "justify-start text-red hover:bg-red/5 hover:text-red", variant: "ghost", onClick: (m) => {
          m.stopPropagation(), !i && !o && t("user"), l(!0);
        }, children: i ? "Unblock user" : o ? "Unblock domain" : "Block user" }) })
      ] }) })
    ] }),
    i || o ? F() : D()
  ] });
}, Ms = ({
  account: s,
  onUnblock: r,
  onDomainUnblock: n,
  className: c = ""
}) => {
  const [u, d] = v(!1), i = /* @__PURE__ */ e.jsx(
    p,
    {
      className: `min-w-[90px] ${c}`,
      variant: "destructive",
      onMouseEnter: () => d(!0),
      onMouseLeave: () => d(!1),
      children: u ? "Unblock" : "Blocked"
    }
  );
  return /* @__PURE__ */ e.jsx(
    ke,
    {
      handle: s.handle,
      isDomainBlocked: s.domainBlockedByMe,
      isUserBlocked: s.blockedByMe,
      trigger: i,
      onUnblockDomain: n,
      onUnblockUser: r
    }
  );
}, ie = () => {
}, Bs = ({
  account: s,
  customFields: r,
  isLoadingAccount: n,
  postsTab: c,
  likesTab: u,
  followingTab: d,
  followersTab: i
}) => {
  const o = pe(), a = _e(), t = S(), { canGoBack: x } = Ve(), l = o.handle ? `/profile/${o.handle}` : "/profile", h = !o.handle, b = o.handle ? o.tab || "" : a.pathname.split("/").pop() || "", g = Qe(() => h ? ["likes", "following", "followers"] : ["following", "followers"], [h]), k = g.includes(b) ? b : "posts", N = Ye("index"), D = We("index"), F = qe("index"), m = Ge("index"), $ = X("index", "me"), { data: E } = o.handle ? $ : { data: void 0 }, I = o.handle === E?.handle || !o.handle, T = s?.blockedByMe, P = s?.domainBlockedByMe, [f, U] = v(!1), [O, j] = v(!1), M = y(null);
  C(() => () => {
    M.current && window.clearTimeout(M.current);
  }, []);
  const ee = () => {
    T ? D.mutate(s) : (N.mutate(s), B.success("User blocked")), U(!1);
  }, se = () => {
    P ? m.mutate({ url: s.apId, handle: s.handle }) : (F.mutate({ url: s.apId, handle: s.handle }), B.success("Domain blocked")), U(!1);
  }, le = async () => {
    if (!s?.handle || !navigator?.clipboard?.writeText) {
      B.error("Unable to copy handle");
      return;
    }
    try {
      await navigator.clipboard.writeText(s.handle), j(!0), B.success("Handle copied"), M.current && window.clearTimeout(M.current), M.current = window.setTimeout(() => j(!1), 2e3);
    } catch {
      B.error("Failed to copy handle"), j(!1);
    }
  }, [A, we] = v(!1), [ve, ne] = v(!1), ye = () => {
    we(!A);
  }, V = y(null), [ae, Ne] = v(!1);
  C(() => {
    V.current && Ne(V.current.scrollHeight > 160);
  }, [A, s?.bio, r, n]), C(() => {
    b && (g.includes(b) || t(l, { replace: !0 }));
  }, [g, l, t, b]);
  const Ce = (w) => w === "posts" ? l : `${l}/${w}`, Ue = (w) => {
    w !== k && t(Ce(w), { replace: !0 });
  };
  return !n && !s ? /* @__PURE__ */ e.jsx(re, { children: /* @__PURE__ */ e.jsx("div", { className: "mx-auto mt-4 flex w-full max-w-[620px] flex-col items-center [&_svg]:translate-x-px", children: /* @__PURE__ */ e.jsxs(Je, { children: [
    /* @__PURE__ */ e.jsx(Ke, { children: /* @__PURE__ */ e.jsx(vs, {}) }),
    /* @__PURE__ */ e.jsx("div", { children: "Profile not found" })
  ] }) }) }) : /* @__PURE__ */ e.jsx(re, { children: /* @__PURE__ */ e.jsx("div", { className: "z-0 mx-[max(-4vw,-24px)] -mt-9 flex flex-col items-center pb-16", children: /* @__PURE__ */ e.jsx("div", { className: "mx-auto w-full", children: /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    s?.bannerImageUrl ? /* @__PURE__ */ e.jsx("div", { className: "h-[15vw] min-h-[200px] w-full overflow-hidden bg-gradient-to-tr from-gray-200 to-gray-100", children: /* @__PURE__ */ e.jsx(
      "img",
      {
        alt: s?.name,
        className: "size-full object-cover",
        referrerPolicy: "no-referrer",
        src: s?.bannerImageUrl
      }
    ) }) : /* @__PURE__ */ e.jsx("div", { className: "h-[max(8vw,132px)] w-full overflow-hidden bg-gradient-to-tr from-white to-white dark:from-black dark:to-black" }),
    /* @__PURE__ */ e.jsxs("div", { className: `mx-auto max-w-[620px] px-6 ${!s?.bannerImageUrl && !x ? "-mt-8" : "-mt-12"}`, children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-end justify-between", children: [
        /* @__PURE__ */ e.jsx("div", { className: "-ml-2 rounded-full bg-white p-1 dark:bg-black", children: n ? /* @__PURE__ */ e.jsx(R, { className: "size-[92px] rounded-full" }) : /* @__PURE__ */ e.jsx(
          de,
          {
            author: {
              icon: {
                url: s?.avatarUrl
              },
              name: s?.name,
              handle: s?.handle
            },
            size: "lg"
          }
        ) }),
        !I && !n && /* @__PURE__ */ e.jsxs("div", { className: "flex gap-2", children: [
          T || P ? /* @__PURE__ */ e.jsx(
            Ms,
            {
              account: s,
              onDomainUnblock: se,
              onUnblock: ee
            }
          ) : /* @__PURE__ */ e.jsx(
            xe,
            {
              following: s?.followedByMe,
              handle: s?.handle,
              type: "primary",
              onFollow: ie,
              onUnfollow: ie
            }
          ),
          /* @__PURE__ */ e.jsx(
            Us,
            {
              account: s,
              isBlocked: T,
              isDomainBlocked: P,
              onBlockAccount: ee,
              onBlockDomain: se,
              onCopyHandle: le,
              children: /* @__PURE__ */ e.jsx(p, { "aria-label": "Open profile menu", variant: "outline", children: /* @__PURE__ */ e.jsx(Xe, {}) })
            }
          )
        ] }),
        I && !n && /* @__PURE__ */ e.jsxs(Ze, { open: ve, onOpenChange: ne, children: [
          /* @__PURE__ */ e.jsx(es, { children: /* @__PURE__ */ e.jsx(bs, { children: /* @__PURE__ */ e.jsx(p, { variant: "secondary", children: "Edit profile" }) }) }),
          /* @__PURE__ */ e.jsxs(ss, { className: "w-full max-w-[520px]", onOpenAutoFocus: (w) => w.preventDefault(), children: [
            /* @__PURE__ */ e.jsx(ls, { children: /* @__PURE__ */ e.jsx(ns, { children: "Profile settings" }) }),
            s && /* @__PURE__ */ e.jsx(hs, { account: s, setIsEditingProfile: ne })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e.jsx(as, { className: "break-anywhere mt-4 truncate", children: n ? /* @__PURE__ */ e.jsx(R, { className: "w-32" }) : s?.name }),
      /* @__PURE__ */ e.jsxs("div", { className: "mb-4 flex items-center gap-2", children: [
        /* @__PURE__ */ e.jsx("a", { className: "inline-flex max-w-full truncate text-[1.5rem] text-gray-800 hover:text-gray-900 dark:text-gray-600 dark:hover:text-gray-500", href: s?.url, rel: "noopener noreferrer", target: "_blank", children: /* @__PURE__ */ e.jsx("span", { className: "truncate", children: n ? /* @__PURE__ */ e.jsx(R, { className: "w-full max-w-56" }) : s?.handle }) }),
        !n && /* @__PURE__ */ e.jsx(p, { className: "-ml-1.5 size-6 p-0 text-gray-800 hover:text-gray-900 dark:text-gray-700 dark:hover:text-gray-600", title: "Copy handle", variant: "link", onClick: le, children: O ? /* @__PURE__ */ e.jsx(os, { size: 16 }) : /* @__PURE__ */ e.jsx(js, { size: 16 }) }),
        s?.followsMe && !n && /* @__PURE__ */ e.jsx(rs, { className: "mt-px whitespace-nowrap", variant: "secondary", children: "Follows you" })
      ] }),
      (s?.bio || r?.length > 0) && /* @__PURE__ */ e.jsxs("div", { ref: V, className: `ap-profile-content break-anywhere relative text-[1.5rem] [&>p]:mb-3 ${A ? "max-h-none pb-7" : "max-h-[160px] overflow-hidden"} relative`, children: [
        n ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx(R, {}),
          /* @__PURE__ */ e.jsx(R, { className: "w-full max-w-48" })
        ] }) : /* @__PURE__ */ e.jsx("div", { dangerouslySetInnerHTML: { __html: te(ts(is(s?.bio ?? "", ["a", "br"]))) } }),
        r?.map((w) => /* @__PURE__ */ e.jsxs("span", { className: "mt-3 line-clamp-1 flex flex-col text-[1.5rem]", children: [
          /* @__PURE__ */ e.jsx("span", { className: "text-xs font-semibold", children: w.name }),
          /* @__PURE__ */ e.jsx("span", { dangerouslySetInnerHTML: { __html: te(w.value) }, className: "ap-profile-content truncate" })
        ] })),
        !A && ae && /* @__PURE__ */ e.jsx("div", { className: "absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white via-white/100 via-60% to-transparent dark:from-black dark:via-black/100" }),
        ae && /* @__PURE__ */ e.jsx(
          p,
          {
            className: "absolute bottom-0 h-auto p-0 text-md",
            variant: "link",
            onClick: ye,
            children: A ? "Show less" : "Show all"
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs(
        fs,
        {
          className: "mt-5",
          value: k,
          variant: "underline",
          onValueChange: (w) => Ue(w),
          children: [
            /* @__PURE__ */ e.jsxs(ps, { children: [
              /* @__PURE__ */ e.jsx(H, { value: "posts", children: "Posts" }),
              h && /* @__PURE__ */ e.jsxs(H, { value: "likes", children: [
                "Likes",
                /* @__PURE__ */ e.jsx(Y, { children: Q(s?.likedCount || 0) })
              ] }),
              /* @__PURE__ */ e.jsxs(H, { value: "following", children: [
                "Following",
                /* @__PURE__ */ e.jsx(Y, { children: Q(s?.followingCount || 0) })
              ] }),
              /* @__PURE__ */ e.jsxs(H, { value: "followers", children: [
                "Followers",
                /* @__PURE__ */ e.jsx(Y, { children: Q(s?.followerCount || 0) })
              ] })
            ] }),
            /* @__PURE__ */ e.jsx(L, { value: "posts", children: (T || P) && !f ? /* @__PURE__ */ e.jsxs(z, { children: [
              /* @__PURE__ */ e.jsx(_, { children: /* @__PURE__ */ e.jsx(cs, {}) }),
              /* @__PURE__ */ e.jsxs("div", { className: "mt-2 flex flex-col items-center gap-0.5", children: [
                /* @__PURE__ */ e.jsxs(J, { children: [
                  s.name,
                  " is blocked"
                ] }),
                /* @__PURE__ */ e.jsx("p", { children: "You can view the posts, but it won't unblock the user." }),
                /* @__PURE__ */ e.jsx(p, { className: "mt-4", variant: "secondary", onClick: () => U(!0), children: "View posts" })
              ] })
            ] }) : c }),
            h && /* @__PURE__ */ e.jsx(L, { value: "likes", children: u }),
            /* @__PURE__ */ e.jsx(L, { value: "following", children: d }),
            /* @__PURE__ */ e.jsx(L, { value: "followers", children: i })
          ]
        },
        o.handle || s?.handle || "current-user"
      )
    ] })
  ] }) }) }) });
}, Ds = ({ handle: s }) => {
  const { postsByAccountQuery: r } = us(s || "me", { enabled: !0 }), {
    data: n,
    fetchNextPage: c,
    hasNextPage: u,
    isFetchingNextPage: d,
    isLoading: i
  } = r, o = n?.pages.flatMap((a) => a.posts) ?? Array.from({ length: 5 }, (a, t) => ({ id: `placeholder-${t}`, object: {} }));
  return /* @__PURE__ */ e.jsx(
    Cs,
    {
      fetchNextPage: c,
      hasNextPage: u,
      isFetchingNextPage: d,
      isLoading: i,
      noResultsMessage: s ? `${s} hasn't posted anything yet` : "You haven't posted anything yet.",
      posts: o
    }
  );
}, Ts = () => {
  const { postsLikedByAccountQuery: s } = ms({ enabled: !0 }), { data: r, fetchNextPage: n, hasNextPage: c, isFetchingNextPage: u, isLoading: d } = s, i = r?.pages.flatMap((o) => o.posts) ?? Array.from({ length: 5 }, (o, a) => ({ id: `placeholder-${a}`, object: {} }));
  return /* @__PURE__ */ e.jsx(
    Ns,
    {
      fetchNextPage: n,
      hasNextPage: c,
      isFetchingNextPage: u,
      isLoading: d,
      posts: i
    }
  );
}, Ps = ({ handle: s }) => {
  const r = be(s === "" ? "me" : s, "following"), {
    data: n,
    fetchNextPage: c,
    hasNextPage: u,
    isFetchingNextPage: d,
    isLoading: i
  } = r, o = n?.pages.flatMap((a) => "following" in a ? a.following : "accounts" in a ? a.accounts.map((t) => ({
    actor: {
      id: t.id,
      name: t.name,
      handle: t.handle,
      icon: {
        url: t.avatarUrl
      }
    },
    isFollowing: t.isFollowing,
    blockedByMe: t.blockedByMe,
    domainBlockedByMe: t.domainBlockedByMe
  })) : []) ?? [];
  return /* @__PURE__ */ e.jsx(
    ge,
    {
      actors: o,
      fetchNextPage: c,
      hasNextPage: u,
      isFetchingNextPage: d,
      isLoading: i,
      noResultsMessage: `${s || "You"} have no following`
    }
  );
}, Fs = ({ handle: s }) => {
  const r = be(s === "" ? "me" : s, "followers"), {
    data: n,
    fetchNextPage: c,
    hasNextPage: u,
    isFetchingNextPage: d,
    isLoading: i
  } = r, o = n?.pages.flatMap((a) => "followers" in a ? a.followers : "accounts" in a ? a.accounts.map((t) => ({
    actor: {
      id: t.id,
      name: t.name,
      handle: t.handle,
      icon: {
        url: t.avatarUrl
      }
    },
    isFollowing: t.isFollowing
  })) : []) ?? [];
  return /* @__PURE__ */ e.jsx(
    ge,
    {
      actors: o,
      fetchNextPage: c,
      hasNextPage: u,
      isFetchingNextPage: d,
      isLoading: i,
      noResultsMessage: `${s || "You"} have no followers yet`
    }
  );
}, Hs = () => {
  const s = pe(), { data: r, isLoading: n, error: c, refetch: u } = X("index", s.handle || "me");
  if (C(() => {
    u();
  }, [s.handle, u]), c && ds(c) && c.statusCode !== 404)
    return /* @__PURE__ */ e.jsx(xs, { errorCode: c.code, statusCode: c.statusCode });
  const d = Object.keys(r?.customFields || {}).map((x) => ({
    name: x,
    value: r.customFields[x]
  })) || [], i = /* @__PURE__ */ e.jsx(Ds, { handle: s.handle || "" }), o = /* @__PURE__ */ e.jsx(Ts, {}), a = /* @__PURE__ */ e.jsx(Ps, { handle: s.handle || "" }), t = /* @__PURE__ */ e.jsx(Fs, { handle: s.handle || "" });
  return /* @__PURE__ */ e.jsx(
    Bs,
    {
      account: r,
      customFields: d,
      followersTab: t,
      followingTab: a,
      isLoadingAccount: n,
      likesTab: o,
      postsTab: i
    }
  );
};
export {
  Hs as default
};
//# sourceMappingURL=index-DssHQAjK.js.map
