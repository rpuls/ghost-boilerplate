import { a6 as de, Q as X, c as y, e as C, d as z, j as e, N as O, J as _, b7 as Me, g as Be, R as Pe, P as De, M as Te, A as ce, B as u, aa as xe, h as Ie, k as Z, aP as Fe, F as he, b as v, W as Ae, Z as me, b8 as Re, _ as fe, $ as G, a0 as W, a1 as q, H as K, b9 as $e, ba as Ee, a2 as J, a3 as pe, O as B, bb as He, bc as Le, bd as Se, be as oe, a4 as ze, a5 as Oe, u as je, bf as _e, a as Ve, aE as Qe, x as Ye, y as Ge, z as We, G as qe, L as ae, E as Ke, f as Je, S as E, bg as Xe, D as Ze, m as es, n as ss, o as ls, p as rs, I as ns, Y as os, bh as as, ab as te, ac as ts, ad as is, bi as Q, K as ds, aw as cs, ax as xs, bj as hs, bk as be, bl as ms } from "./index-BpBf-VFB.mjs";
import { S as ue } from "./separator-DdzsodEc.mjs";
import { E as fs } from "./edit-profile-DE4xvBRw.mjs";
import { T as ps, a as js, b as L, d as Y, c as S } from "./tabs-CU1GihRT.mjs";
import { S as bs } from "./settings-C3xSeJtV.mjs";
import { C as us } from "./copy-Q6w7WlwF.mjs";
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gs = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
], ks = de("pencil", gs);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ws = [
  ["path", { d: "M2 21a8 8 0 0 1 11.873-7", key: "74fkxq" }],
  ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
  ["path", { d: "m17 17 5 5", key: "p7ous7" }],
  ["path", { d: "m22 17-5 5", key: "gqnmv0" }]
], vs = de("user-round-x", ws);
function ys(s) {
  return typeof s.name == "string" ? s.name : typeof s.preferredUsername == "string" ? s.preferredUsername : typeof s.preferredUsername == "object" && s.preferredUsername !== null && "@value" in s.preferredUsername && typeof s.preferredUsername["@value"] == "string" ? s.preferredUsername["@value"] : "Unknown";
}
const ge = ({
  noResultsMessage: s,
  actors: n,
  isLoading: r,
  fetchNextPage: d,
  hasNextPage: h,
  isFetchingNextPage: c
}) => {
  const t = X("index", "me"), { data: a } = t, o = y(null), i = y(null);
  C(() => (o.current && o.current.disconnect(), o.current = new IntersectionObserver((l) => {
    l[0].isIntersecting && h && !c && d();
  }), i.current && o.current.observe(i.current), () => {
    o.current && o.current.disconnect();
  }), [h, c, d]);
  const x = z();
  return /* @__PURE__ */ e.jsxs("div", { className: "pt-3", "data-testid": "actor-list", children: [
    h === !1 && n.length === 0 ? /* @__PURE__ */ e.jsxs(O, { children: [
      /* @__PURE__ */ e.jsx(_, { children: /* @__PURE__ */ e.jsx(Me, {}) }),
      s
    ] }) : /* @__PURE__ */ e.jsx("div", { className: "flex flex-col", children: n.map(({ actor: l, isFollowing: f, blockedByMe: g, domainBlockedByMe: w }) => {
      const b = l.handle || Be(l), N = b === (a == null ? void 0 : a.handle);
      return /* @__PURE__ */ e.jsx(Pe.Fragment, { children: /* @__PURE__ */ e.jsx(De, { actor: l, align: "center", isCurrentUser: N, side: "left", children: /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsxs(
        Te,
        {
          "data-testid": "actor-item",
          onClick: () => {
            Ie(l, x);
          },
          children: [
            /* @__PURE__ */ e.jsx(ce, { author: l }),
            /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsxs("div", { className: "break-anywhere text-gray-600", children: [
              /* @__PURE__ */ e.jsx("span", { className: "mr-1 line-clamp-1 font-bold text-black dark:text-white", children: ys(l) }),
              /* @__PURE__ */ e.jsx("div", { className: "line-clamp-1 text-sm", children: b })
            ] }) }),
            g || w ? /* @__PURE__ */ e.jsx(u, { className: "pointer-events-none ml-auto min-w-[90px]", variant: "destructive", children: "Blocked" }) : N ? null : /* @__PURE__ */ e.jsx(
              xe,
              {
                className: "ml-auto",
                "data-testid": "follow-button",
                following: f,
                handle: b,
                type: "secondary"
              }
            )
          ]
        },
        l.id
      ) }) }) }, l.id);
    }) }),
    /* @__PURE__ */ e.jsx("div", { ref: i, className: "h-1" }),
    (c || r) && /* @__PURE__ */ e.jsx("div", { className: "mt-6 flex flex-col items-center justify-center gap-4 text-center", children: /* @__PURE__ */ e.jsx(Z, { size: "md" }) })
  ] });
}, Ns = ({
  posts: s,
  fetchNextPage: n,
  hasNextPage: r,
  isFetchingNextPage: d,
  isLoading: h
}) => {
  const c = y(null), t = y(null), a = y(null), o = Math.max(0, Math.floor(s.length * 0.75) - 1);
  C(() => (c.current && c.current.disconnect(), c.current = new IntersectionObserver((x) => {
    x[0].isIntersecting && r && !d && n();
  }), t.current && c.current.observe(t.current), a.current && c.current.observe(a.current), () => {
    c.current && c.current.disconnect();
  }), [r, d, n]);
  const i = z();
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    r === !1 && s.length === 0 && /* @__PURE__ */ e.jsxs(O, { children: [
      /* @__PURE__ */ e.jsx(_, { children: /* @__PURE__ */ e.jsx(Fe, {}) }),
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
              he,
              {
                actor: x.actor,
                allowDelete: x.object.authored,
                commentCount: x.object.replyCount,
                isLoading: h,
                layout: "feed",
                likeCount: x.object.likeCount,
                object: x.object,
                repostCount: x.object.repostCount,
                type: x.type,
                onClick: () => {
                  x.object.type === "Note" ? i(`/notes/${encodeURIComponent(x.object.id)}`) : x.object.type === "Article" && i(`/reader/${encodeURIComponent(x.object.id)}`);
                }
              }
            ),
            l < s.length - 1 && /* @__PURE__ */ e.jsx(ue, {}),
            l === o && /* @__PURE__ */ e.jsx("div", { ref: t, className: "h-1" })
          ]
        },
        `likes-${x.id}`
      )),
      d && /* @__PURE__ */ e.jsx("li", { className: "flex flex-col items-center justify-center gap-4 text-center", children: /* @__PURE__ */ e.jsx(Z, { size: "md" }) })
    ] }),
    /* @__PURE__ */ e.jsx("div", { ref: a, className: "h-1" })
  ] });
}, Cs = ({
  posts: s,
  fetchNextPage: n,
  hasNextPage: r,
  isFetchingNextPage: d,
  isLoading: h,
  noResultsMessage: c
}) => {
  const t = y(null), a = y(null), o = y(null), i = Math.max(0, Math.floor(s.length * 0.75) - 1);
  C(() => (t.current && t.current.disconnect(), t.current = new IntersectionObserver((l) => {
    l[0].isIntersecting && r && !d && n();
  }), a.current && t.current.observe(a.current), o.current && t.current.observe(o.current), () => {
    t.current && t.current.disconnect();
  }), [r, d, n]);
  const x = z();
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    r === !1 && s.length === 0 && /* @__PURE__ */ e.jsxs(O, { children: [
      /* @__PURE__ */ e.jsx(_, { children: /* @__PURE__ */ e.jsx(ks, {}) }),
      c
    ] }),
    /* @__PURE__ */ e.jsxs("ul", { className: "mx-auto flex max-w-[640px] flex-col", "data-testid": "profile-posts-list", children: [
      s.map((l, f) => /* @__PURE__ */ e.jsxs(
        "li",
        {
          "data-testid": "profile-post-item",
          "data-test-view-article": !0,
          children: [
            /* @__PURE__ */ e.jsx(
              he,
              {
                actor: l.actor,
                allowDelete: l.object.authored,
                commentCount: l.object.replyCount,
                isLoading: h,
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
            f < s.length - 1 && /* @__PURE__ */ e.jsx(ue, {}),
            f === i && /* @__PURE__ */ e.jsx("div", { ref: a, className: "h-1" })
          ]
        },
        `posts-${l.id}`
      )),
      d && /* @__PURE__ */ e.jsx("li", { className: "flex flex-col items-center justify-center gap-4 text-center", children: /* @__PURE__ */ e.jsx(Z, { size: "md" }) })
    ] }),
    /* @__PURE__ */ e.jsx("div", { ref: o, className: "h-1" })
  ] });
}, ke = ({
  handle: s,
  isUserBlocked: n,
  isDomainBlocked: r,
  onUnblockUser: d,
  onUnblockDomain: h,
  trigger: c,
  onUnblockComplete: t,
  isOpen: a,
  onOpenChange: o
}) => {
  const [i, x] = v(!1), [l, f] = v(() => {
    const p = n && r, U = n && !r, R = !n && r;
    let k = "idle";
    return p ? k = "dual" : U ? k = "userOnly" : R && (k = "domainOnly"), {
      mode: k,
      userUnblocked: !1,
      domainUnblocked: !1
    };
  }), g = a !== void 0, w = g ? a : i, [b, N] = v(!1), P = Ae(() => {
    const p = n && r, U = n && !r, R = !n && r;
    let k = "idle";
    p ? k = "dual" : U ? k = "userOnly" : R && (k = "domainOnly"), f((M) => ({
      ...M,
      mode: k,
      userUnblocked: !1,
      domainUnblocked: !1
    }));
  }, [n, r]);
  C(() => {
    w && !b ? (P(), N(!0)) : w || N(!1);
  }, [w, b, P]);
  const F = () => {
    g ? o == null || o(!0) : x(!0);
  }, m = (p) => {
    p || (g ? o == null || o(!1) : x(!1));
  }, H = async () => {
    await d(), f((p) => ({
      ...p,
      userUnblocked: !0
    })), (l.mode !== "dual" || l.domainUnblocked) && (m(!1), t == null || t()), B.success("User unblocked");
  }, D = async () => {
    await h(), f((p) => ({
      ...p,
      domainUnblocked: !0
    })), (l.mode !== "dual" || l.userUnblocked) && (m(!1), t == null || t()), B.success("Domain unblocked");
  }, A = s.split("@").filter(Boolean)[1], T = () => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs(G, { children: [
      /* @__PURE__ */ e.jsx(W, { className: "mb-1 flex flex-col gap-1", children: "Unblock" }),
      /* @__PURE__ */ e.jsx(q, { className: "mt-4!", asChild: !0, children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col rounded-md border", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between gap-6 p-5", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-1", children: [
            /* @__PURE__ */ e.jsx(K, { children: "Unblock user" }),
            /* @__PURE__ */ e.jsxs("p", { children: [
              /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-black", children: s }),
              " will be able to follow you and engage with your public posts."
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs(u, { className: `gap-1 ${l.userUnblocked ? "pointer-events-none border-green bg-green text-white hover:bg-green hover:text-white" : "text-red hover:text-red-400"}`, variant: "outline", onClick: H, children: [
            /* @__PURE__ */ e.jsx($e, {}),
            l.userUnblocked ? "User unblocked" : "Unblock user"
          ] })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "border-t" }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between gap-6 p-5", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-1", children: [
            /* @__PURE__ */ e.jsx(K, { children: "Unblock domain" }),
            /* @__PURE__ */ e.jsxs("p", { children: [
              "Users from ",
              /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-black", children: A }),
              " will be able to follow you and engage with your public posts."
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs(u, { className: `gap-1 ${l.domainUnblocked ? "pointer-events-none border-green bg-green text-white hover:bg-green hover:text-white" : "text-red hover:text-red-400"}`, variant: "outline", onClick: D, children: [
            /* @__PURE__ */ e.jsx(Ee, {}),
            l.domainUnblocked ? "Domain unblocked" : "Unblock domain"
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ e.jsx(J, { children: /* @__PURE__ */ e.jsx(u, { onClick: () => m(!1), children: "OK" }) })
  ] }), I = () => {
    const p = l.mode === "userOnly";
    return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsxs(G, { children: [
        /* @__PURE__ */ e.jsx(W, { className: "mb-1 flex flex-col gap-1", children: p ? "Unblock this user?" : "Unblock this domain?" }),
        /* @__PURE__ */ e.jsx(q, { children: p ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-black", children: s }),
          " will be able to follow you and engage with your public posts."
        ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          "Users from ",
          /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-black", children: A }),
          " will be able to follow you and engage with your public posts."
        ] }) })
      ] }),
      /* @__PURE__ */ e.jsxs(J, { children: [
        /* @__PURE__ */ e.jsx(pe, { children: "Cancel" }),
        /* @__PURE__ */ e.jsx(u, { onClick: p ? H : D, children: "Unblock" })
      ] })
    ] });
  };
  return /* @__PURE__ */ e.jsxs(me, { open: w, onOpenChange: m, children: [
    c && /* @__PURE__ */ e.jsx(Re, { asChild: !0, onClick: F, children: c }),
    /* @__PURE__ */ e.jsx(fe, { className: `${l.mode === "dual" && "max-w-[600px]"}`, children: l.mode === "dual" ? T() : I() })
  ] });
}, Us = ({
  account: s,
  children: n,
  onCopyHandle: r,
  onBlockAccount: d,
  onBlockDomain: h,
  disabled: c = !1,
  isBlocked: t = !1,
  isDomainBlocked: a = !1
}) => {
  const [o, i] = v(null), [x, l] = v(!1), f = (m) => {
    m.stopPropagation(), r();
  }, g = (m) => {
    m.stopPropagation(), d();
  }, w = (m) => {
    m.stopPropagation(), h();
  }, b = s == null ? void 0 : s.handle, N = b == null ? void 0 : b.split("@").filter(Boolean)[1], P = () => /* @__PURE__ */ e.jsx(me, { open: x, onOpenChange: l, children: /* @__PURE__ */ e.jsxs(fe, { onClick: (m) => m.stopPropagation(), children: [
    /* @__PURE__ */ e.jsxs(G, { children: [
      /* @__PURE__ */ e.jsx(W, { className: "mb-1 flex flex-col gap-1", children: o === "user" ? "Block this user?" : "Block this domain?" }),
      /* @__PURE__ */ e.jsx(q, { children: o === "user" ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-black", children: b }),
        " will be able to see your public posts, but will no longer be able follow you or interact with your content on the social web."
      ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        "All users from ",
        /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-black", children: N }),
        " will be able to see your public posts, but won't be able to follow you or interact with your content."
      ] }) })
    ] }),
    /* @__PURE__ */ e.jsxs(J, { children: [
      o !== "domain" && /* @__PURE__ */ e.jsx(u, { className: "mr-auto -ml-3 hover:bg-transparent hover:opacity-80", variant: "ghost", onClick: (m) => {
        m.stopPropagation(), i("domain");
      }, children: "Block domain instead" }),
      /* @__PURE__ */ e.jsx(pe, { onClick: (m) => m.stopPropagation(), children: "Cancel" }),
      /* @__PURE__ */ e.jsx(
        ze,
        {
          className: Oe({ variant: "destructive" }),
          onClick: o === "user" ? g : w,
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
      onUnblockDomain: h,
      onUnblockUser: d
    }
  );
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs(He, { children: [
      /* @__PURE__ */ e.jsx(Le, { disabled: c, asChild: !0, onClick: (m) => m.stopPropagation(), children: n }),
      /* @__PURE__ */ e.jsx(Se, { align: "end", className: "p-2", children: /* @__PURE__ */ e.jsxs("div", { className: "flex w-48 flex-col", children: [
        /* @__PURE__ */ e.jsx(oe, { asChild: !0, children: /* @__PURE__ */ e.jsx(u, { className: "justify-start", variant: "ghost", onClick: f, children: "Copy handle" }) }),
        /* @__PURE__ */ e.jsx(oe, { asChild: !0, children: /* @__PURE__ */ e.jsx(u, { className: "justify-start text-red hover:bg-red/5 hover:text-red", variant: "ghost", onClick: (m) => {
          m.stopPropagation(), !t && !a && i("user"), l(!0);
        }, children: t ? "Unblock user" : a ? "Unblock domain" : "Block user" }) })
      ] }) })
    ] }),
    t || a ? F() : P()
  ] });
}, Ms = ({
  account: s,
  onUnblock: n,
  onDomainUnblock: r,
  className: d = ""
}) => {
  const [h, c] = v(!1), t = /* @__PURE__ */ e.jsx(
    u,
    {
      className: `min-w-[90px] ${d}`,
      variant: "destructive",
      onMouseEnter: () => c(!0),
      onMouseLeave: () => c(!1),
      children: h ? "Unblock" : "Blocked"
    }
  );
  return /* @__PURE__ */ e.jsx(
    ke,
    {
      handle: s.handle,
      isDomainBlocked: s.domainBlockedByMe,
      isUserBlocked: s.blockedByMe,
      trigger: t,
      onUnblockDomain: r,
      onUnblockUser: n
    }
  );
}, ie = () => {
}, Bs = ({
  account: s,
  customFields: n,
  isLoadingAccount: r,
  postsTab: d,
  likesTab: h,
  followingTab: c,
  followersTab: t
}) => {
  const a = je(), o = _e(), i = z(), { canGoBack: x } = Ve(), l = a.handle ? `/profile/${a.handle}` : "/profile", f = !a.handle, g = a.handle ? a.tab || "" : o.pathname.split("/").pop() || "", w = Qe(() => f ? ["likes", "following", "followers"] : ["following", "followers"], [f]), b = w.includes(g) ? g : "posts", N = Ye("index"), P = Ge("index"), F = We("index"), m = qe("index"), H = X("index", "me"), { data: D } = a.handle ? H : { data: void 0 }, A = a.handle === (D == null ? void 0 : D.handle) || !a.handle, T = s == null ? void 0 : s.blockedByMe, I = s == null ? void 0 : s.domainBlockedByMe, [p, U] = v(!1), [R, k] = v(!1), M = y(null);
  C(() => () => {
    M.current && window.clearTimeout(M.current);
  }, []);
  const ee = () => {
    T ? P.mutate(s) : (N.mutate(s), B.success("User blocked")), U(!1);
  }, se = () => {
    I ? m.mutate({ url: s.apId, handle: s.handle }) : (F.mutate({ url: s.apId, handle: s.handle }), B.success("Domain blocked")), U(!1);
  }, le = async () => {
    var j;
    if (!(s != null && s.handle) || !((j = navigator == null ? void 0 : navigator.clipboard) != null && j.writeText)) {
      B.error("Unable to copy handle");
      return;
    }
    try {
      await navigator.clipboard.writeText(s.handle), k(!0), B.success("Handle copied"), M.current && window.clearTimeout(M.current), M.current = window.setTimeout(() => k(!1), 2e3);
    } catch {
      B.error("Failed to copy handle"), k(!1);
    }
  }, [$, we] = v(!1), [ve, re] = v(!1), ye = () => {
    we(!$);
  }, V = y(null), [ne, Ne] = v(!1);
  C(() => {
    V.current && Ne(V.current.scrollHeight > 160);
  }, [$, s == null ? void 0 : s.bio, n, r]), C(() => {
    g && (w.includes(g) || i(l, { replace: !0 }));
  }, [w, l, i, g]);
  const Ce = (j) => j === "posts" ? l : `${l}/${j}`, Ue = (j) => {
    j !== b && i(Ce(j), { replace: !0 });
  };
  return !r && !s ? /* @__PURE__ */ e.jsx(ae, { children: /* @__PURE__ */ e.jsx("div", { className: "mx-auto mt-4 flex w-full max-w-[620px] flex-col items-center [&_svg]:translate-x-px", children: /* @__PURE__ */ e.jsxs(Ke, { children: [
    /* @__PURE__ */ e.jsx(Je, { children: /* @__PURE__ */ e.jsx(vs, {}) }),
    /* @__PURE__ */ e.jsx("div", { children: "Profile not found" })
  ] }) }) }) : /* @__PURE__ */ e.jsx(ae, { children: /* @__PURE__ */ e.jsx("div", { className: "z-0 mx-[max(-4vw,-32px)] -mt-9 flex flex-col items-center pb-16", children: /* @__PURE__ */ e.jsx("div", { className: "mx-auto w-full", children: /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    s != null && s.bannerImageUrl ? /* @__PURE__ */ e.jsx("div", { className: "h-[15vw] min-h-[200px] w-full overflow-hidden bg-gradient-to-tr from-gray-200 to-gray-100", children: /* @__PURE__ */ e.jsx(
      "img",
      {
        alt: s == null ? void 0 : s.name,
        className: "size-full object-cover",
        referrerPolicy: "no-referrer",
        src: s == null ? void 0 : s.bannerImageUrl
      }
    ) }) : /* @__PURE__ */ e.jsx("div", { className: "h-[max(8vw,132px)] w-full overflow-hidden bg-gradient-to-tr from-white to-white dark:from-black dark:to-black" }),
    /* @__PURE__ */ e.jsxs("div", { className: `mx-auto max-w-[620px] px-6 ${!(s != null && s.bannerImageUrl) && !x ? "-mt-8" : "-mt-12"}`, children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-end justify-between", children: [
        /* @__PURE__ */ e.jsx("div", { className: "-ml-2 rounded-full bg-white p-1 dark:bg-black", children: r ? /* @__PURE__ */ e.jsx(E, { className: "size-[92px] rounded-full" }) : /* @__PURE__ */ e.jsx(
          ce,
          {
            author: {
              icon: {
                url: s == null ? void 0 : s.avatarUrl
              },
              name: s == null ? void 0 : s.name,
              handle: s == null ? void 0 : s.handle
            },
            size: "lg"
          }
        ) }),
        !A && !r && /* @__PURE__ */ e.jsxs("div", { className: "flex gap-2", children: [
          T || I ? /* @__PURE__ */ e.jsx(
            Ms,
            {
              account: s,
              onDomainUnblock: se,
              onUnblock: ee
            }
          ) : /* @__PURE__ */ e.jsx(
            xe,
            {
              following: s == null ? void 0 : s.followedByMe,
              handle: s == null ? void 0 : s.handle,
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
              isDomainBlocked: I,
              onBlockAccount: ee,
              onBlockDomain: se,
              onCopyHandle: le,
              children: /* @__PURE__ */ e.jsx(u, { "aria-label": "Open profile menu", variant: "outline", children: /* @__PURE__ */ e.jsx(Xe, {}) })
            }
          )
        ] }),
        A && !r && /* @__PURE__ */ e.jsxs(Ze, { open: ve, onOpenChange: re, children: [
          /* @__PURE__ */ e.jsx(es, { children: /* @__PURE__ */ e.jsx(bs, { children: /* @__PURE__ */ e.jsx(u, { variant: "secondary", children: "Edit profile" }) }) }),
          /* @__PURE__ */ e.jsxs(ss, { className: "w-full max-w-[520px]", onOpenAutoFocus: (j) => j.preventDefault(), children: [
            /* @__PURE__ */ e.jsx(ls, { children: /* @__PURE__ */ e.jsx(rs, { children: "Profile settings" }) }),
            s && /* @__PURE__ */ e.jsx(fs, { account: s, setIsEditingProfile: re })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e.jsx(ns, { className: "break-anywhere mt-4 truncate", children: r ? /* @__PURE__ */ e.jsx(E, { className: "w-32" }) : s == null ? void 0 : s.name }),
      /* @__PURE__ */ e.jsxs("div", { className: "mb-4 flex items-center gap-2", children: [
        /* @__PURE__ */ e.jsx("a", { className: "inline-flex max-w-full truncate text-[1.5rem] text-gray-800 hover:text-gray-900 dark:text-gray-600 dark:hover:text-gray-500", href: s == null ? void 0 : s.url, rel: "noopener noreferrer", target: "_blank", children: /* @__PURE__ */ e.jsx("span", { className: "truncate", children: r ? /* @__PURE__ */ e.jsx(E, { className: "w-full max-w-56" }) : s == null ? void 0 : s.handle }) }),
        !r && /* @__PURE__ */ e.jsx(u, { className: "-ml-1.5 size-6 p-0 text-gray-800 hover:text-gray-900 dark:text-gray-700 dark:hover:text-gray-600", title: "Copy handle", variant: "link", onClick: le, children: R ? /* @__PURE__ */ e.jsx(os, { size: 16 }) : /* @__PURE__ */ e.jsx(us, { size: 16 }) }),
        (s == null ? void 0 : s.followsMe) && !r && /* @__PURE__ */ e.jsx(as, { className: "mt-px whitespace-nowrap", variant: "secondary", children: "Follows you" })
      ] }),
      ((s == null ? void 0 : s.bio) || (n == null ? void 0 : n.length) > 0) && /* @__PURE__ */ e.jsxs("div", { ref: V, className: `ap-profile-content break-anywhere relative text-[1.5rem] [&>p]:mb-3 ${$ ? "max-h-none pb-7" : "max-h-[160px] overflow-hidden"} relative`, children: [
        r ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx(E, {}),
          /* @__PURE__ */ e.jsx(E, { className: "w-full max-w-48" })
        ] }) : /* @__PURE__ */ e.jsx("div", { dangerouslySetInnerHTML: { __html: te(ts(is((s == null ? void 0 : s.bio) ?? "", ["a", "br"]))) } }),
        n == null ? void 0 : n.map((j) => /* @__PURE__ */ e.jsxs("span", { className: "mt-3 line-clamp-1 flex flex-col text-[1.5rem]", children: [
          /* @__PURE__ */ e.jsx("span", { className: "text-xs font-semibold", children: j.name }),
          /* @__PURE__ */ e.jsx("span", { dangerouslySetInnerHTML: { __html: te(j.value) }, className: "ap-profile-content truncate" })
        ] })),
        !$ && ne && /* @__PURE__ */ e.jsx("div", { className: "absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white via-white/100 via-60% to-transparent dark:from-black dark:via-black/100" }),
        ne && /* @__PURE__ */ e.jsx(
          u,
          {
            className: "absolute bottom-0 h-auto p-0 text-md",
            variant: "link",
            onClick: ye,
            children: $ ? "Show less" : "Show all"
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs(
        ps,
        {
          className: "mt-5",
          value: b,
          variant: "underline",
          onValueChange: (j) => Ue(j),
          children: [
            /* @__PURE__ */ e.jsxs(js, { children: [
              /* @__PURE__ */ e.jsx(L, { value: "posts", children: "Posts" }),
              f && /* @__PURE__ */ e.jsxs(L, { value: "likes", children: [
                "Likes",
                /* @__PURE__ */ e.jsx(Y, { children: Q((s == null ? void 0 : s.likedCount) || 0) })
              ] }),
              /* @__PURE__ */ e.jsxs(L, { value: "following", children: [
                "Following",
                /* @__PURE__ */ e.jsx(Y, { children: Q((s == null ? void 0 : s.followingCount) || 0) })
              ] }),
              /* @__PURE__ */ e.jsxs(L, { value: "followers", children: [
                "Followers",
                /* @__PURE__ */ e.jsx(Y, { children: Q((s == null ? void 0 : s.followerCount) || 0) })
              ] })
            ] }),
            /* @__PURE__ */ e.jsx(S, { value: "posts", children: (T || I) && !p ? /* @__PURE__ */ e.jsxs(O, { children: [
              /* @__PURE__ */ e.jsx(_, { children: /* @__PURE__ */ e.jsx(ds, {}) }),
              /* @__PURE__ */ e.jsxs("div", { className: "mt-2 flex flex-col items-center gap-0.5", children: [
                /* @__PURE__ */ e.jsxs(K, { children: [
                  s.name,
                  " is blocked"
                ] }),
                /* @__PURE__ */ e.jsx("p", { children: "You can view the posts, but it won't unblock the user." }),
                /* @__PURE__ */ e.jsx(u, { className: "mt-4", variant: "secondary", onClick: () => U(!0), children: "View posts" })
              ] })
            ] }) : d }),
            f && /* @__PURE__ */ e.jsx(S, { value: "likes", children: h }),
            /* @__PURE__ */ e.jsx(S, { value: "following", children: c }),
            /* @__PURE__ */ e.jsx(S, { value: "followers", children: t })
          ]
        },
        a.handle || (s == null ? void 0 : s.handle) || "current-user"
      )
    ] })
  ] }) }) }) });
}, Ps = ({ handle: s }) => {
  const { postsByAccountQuery: n } = hs(s || "me", { enabled: !0 }), {
    data: r,
    fetchNextPage: d,
    hasNextPage: h,
    isFetchingNextPage: c,
    isLoading: t
  } = n, a = (r == null ? void 0 : r.pages.flatMap((o) => o.posts)) ?? Array.from({ length: 5 }, (o, i) => ({ id: `placeholder-${i}`, object: {} }));
  return /* @__PURE__ */ e.jsx(
    Cs,
    {
      fetchNextPage: d,
      hasNextPage: h,
      isFetchingNextPage: c,
      isLoading: t,
      noResultsMessage: s ? `${s} hasn't posted anything yet` : "You haven't posted anything yet.",
      posts: a
    }
  );
}, Ds = () => {
  const { postsLikedByAccountQuery: s } = ms({ enabled: !0 }), { data: n, fetchNextPage: r, hasNextPage: d, isFetchingNextPage: h, isLoading: c } = s, t = (n == null ? void 0 : n.pages.flatMap((a) => a.posts)) ?? Array.from({ length: 5 }, (a, o) => ({ id: `placeholder-${o}`, object: {} }));
  return /* @__PURE__ */ e.jsx(
    Ns,
    {
      fetchNextPage: r,
      hasNextPage: d,
      isFetchingNextPage: h,
      isLoading: c,
      posts: t
    }
  );
}, Ts = ({ handle: s }) => {
  const n = be(s === "" ? "me" : s, "following"), {
    data: r,
    fetchNextPage: d,
    hasNextPage: h,
    isFetchingNextPage: c,
    isLoading: t
  } = n, a = (r == null ? void 0 : r.pages.flatMap((o) => "following" in o ? o.following : "accounts" in o ? o.accounts.map((i) => ({
    actor: {
      id: i.id,
      name: i.name,
      handle: i.handle,
      icon: {
        url: i.avatarUrl
      }
    },
    isFollowing: i.isFollowing,
    blockedByMe: i.blockedByMe,
    domainBlockedByMe: i.domainBlockedByMe
  })) : [])) ?? [];
  return /* @__PURE__ */ e.jsx(
    ge,
    {
      actors: a,
      fetchNextPage: d,
      hasNextPage: h,
      isFetchingNextPage: c,
      isLoading: t,
      noResultsMessage: `${s || "You"} have no following`
    }
  );
}, Is = ({ handle: s }) => {
  const n = be(s === "" ? "me" : s, "followers"), {
    data: r,
    fetchNextPage: d,
    hasNextPage: h,
    isFetchingNextPage: c,
    isLoading: t
  } = n, a = (r == null ? void 0 : r.pages.flatMap((o) => "followers" in o ? o.followers : "accounts" in o ? o.accounts.map((i) => ({
    actor: {
      id: i.id,
      name: i.name,
      handle: i.handle,
      icon: {
        url: i.avatarUrl
      }
    },
    isFollowing: i.isFollowing
  })) : [])) ?? [];
  return /* @__PURE__ */ e.jsx(
    ge,
    {
      actors: a,
      fetchNextPage: d,
      hasNextPage: h,
      isFetchingNextPage: c,
      isLoading: t,
      noResultsMessage: `${s || "You"} have no followers yet`
    }
  );
}, Ls = ({}) => {
  const s = je(), { data: n, isLoading: r, error: d, refetch: h } = X("index", s.handle || "me");
  if (C(() => {
    h();
  }, [s.handle, h]), d && cs(d) && d.statusCode !== 404)
    return /* @__PURE__ */ e.jsx(xs, { errorCode: d.code, statusCode: d.statusCode });
  const c = Object.keys((n == null ? void 0 : n.customFields) || {}).map((x) => ({
    name: x,
    value: n.customFields[x]
  })) || [], t = /* @__PURE__ */ e.jsx(Ps, { handle: s.handle || "" }), a = /* @__PURE__ */ e.jsx(Ds, {}), o = /* @__PURE__ */ e.jsx(Ts, { handle: s.handle || "" }), i = /* @__PURE__ */ e.jsx(Is, { handle: s.handle || "" });
  return /* @__PURE__ */ e.jsx(
    Bs,
    {
      account: n,
      customFields: c,
      followersTab: i,
      followingTab: o,
      isLoadingAccount: r,
      likesTab: a,
      postsTab: t
    }
  );
};
export {
  Ls as default
};
//# sourceMappingURL=index-bv2yRYP8.mjs.map
