import { aF as _, a_ as t, a1 as S, ak as $, bD as g, bG as E, bL as u, bs as I, aW as P, O as L, a4 as U, N as W, M as B, s as H, ar as N, A as w, aO as A, t as O, u as D, W as C, aS as b, b4 as V, b6 as F, b7 as M, b3 as q, T as G, a6 as K, aj as Q } from "./index-sudOvKcY.js";
import { A as Z } from "./at-sign-9F3qd4Nn.js";
import { R as J } from "./reply-CehesW8Z.js";
const X = [
  ["path", { d: "m2 9 3-3 3 3", key: "1ltn5i" }],
  ["path", { d: "M13 18H7a2 2 0 0 1-2-2V6", key: "1r6tfw" }],
  ["path", { d: "m22 15-3 3-3-3", key: "4rnwn2" }],
  ["path", { d: "M11 6h6a2 2 0 0 1 2 2v10", key: "2f72bc" }]
], Y = _("repeat-2", X);
const ee = [
  ["path", { d: "M2 21a8 8 0 0 1 13.292-6", key: "bjp14o" }],
  ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
  ["path", { d: "m16 19 2 2 4-4", key: "1b14m6" }]
], te = _("user-round-check", ee), R = ({ notificationType: a, size: l = "lg", className: c }) => {
  let i, s = "";
  const n = "white", m = l === "sm" ? 13 : 20, r = l === "sm" ? 2 : 1.5;
  switch (a) {
    case "follow":
      i = /* @__PURE__ */ t.jsx(te, { className: `-mt-0.5 -mr-0.5 ${l === "sm" && "size-[11px]"}`, color: n, size: m, strokeWidth: r }), s = "bg-blue-600";
      break;
    case "like":
      i = /* @__PURE__ */ t.jsx(S, { className: `${l === "sm" ? "size-[11px]" : "mt-px size-5"}`, color: n, strokeWidth: r }), s = "bg-pink-600";
      break;
    case "reply":
      i = /* @__PURE__ */ t.jsx(J, { className: "mr-px mb-px", color: n, size: m, strokeWidth: r }), s = "bg-purple-600";
      break;
    case "repost":
      i = /* @__PURE__ */ t.jsx(Y, { color: n, size: m, strokeWidth: r }), s = "bg-green-500";
      break;
    case "mention":
      i = /* @__PURE__ */ t.jsx(Z, { className: `${l === "sm" ? "size-[12px]" : "size-5"}`, color: n, size: m, strokeWidth: r }), s = "bg-orange-500";
      break;
  }
  return /* @__PURE__ */ t.jsx("div", { className: `flex ${l === "sm" ? "size-5" : "size-9"} items-center justify-center rounded-full ${s} ${c && c}`, children: i });
}, se = $.createContext(void 0), p = ({ isGrouped: a, centerAlign: l, children: c, onClick: i, url: s, className: n }) => /* @__PURE__ */ t.jsx(se.Provider, { value: { onClick: i, url: s }, children: /* @__PURE__ */ t.jsx(
  "div",
  {
    className: `group relative -mx-4 -my-px ${a ? "grid" : "flex"} ${l ? "items-center" : "items-start"} break-anywhere cursor-pointer grid-cols-[auto_1fr] gap-x-4 gap-y-2.5 rounded-lg px-4 py-5 text-left hover:bg-gray-100 ${n}`,
    role: "button",
    onClick: i,
    children: c
  }
) }), ae = ({ size: a = "lg", type: l }) => /* @__PURE__ */ t.jsx("div", { className: "col-start-1 row-start-1", children: /* @__PURE__ */ t.jsx(R, { notificationType: l, size: a }) }), ne = ({ children: a }) => /* @__PURE__ */ t.jsx("div", { className: "col-start-2 row-start-1 flex gap-2", children: a }), le = ({ children: a }) => /* @__PURE__ */ t.jsx("div", { className: "col-start-2 row-start-2 -mt-0.5 grow overflow-hidden", children: a });
p.Icon = ae;
p.Avatars = ne;
p.Content = le;
const re = () => /* @__PURE__ */ t.jsx("div", { className: "h-px w-full bg-gray-200 dark:bg-gray-950" });
function ie(a) {
  const i = new Date(a).getTime();
  return (Math.floor(i / 864e5) * 864e5).toString();
}
function ce(a) {
  const l = {};
  let c = null, i = 0;
  return a.forEach((s) => {
    s.type !== c && (i += 1, c = s.type);
    let n = "";
    const m = `_${ie(s.createdAt)}`, r = `_seq${i}`;
    switch (s.type) {
      case "like":
        s.post?.id && (n = `like_${s.post.id}${m}${r}`);
        break;
      case "reply":
        n = `reply_${s.id}`;
        break;
      case "repost":
        s.post?.id && (n = `repost_${s.post.id}${m}${r}`);
        break;
      case "follow":
        n = `follow_${m}${r}`;
        break;
      case "mention":
        n = `mention_${s.id}`;
        break;
    }
    l[n] || (l[n] = {
      id: s.id,
      type: s.type,
      actors: [],
      post: s.post,
      inReplyTo: s.inReplyTo,
      createdAt: s.createdAt
    }), l[n].actors.find((h) => h.id === s.actor.id) || l[n].actors.push(s.actor);
  }), Object.values(l);
}
const oe = ({ group: a }) => {
  const [l, ...c] = a.actors, i = c.length > 0, s = c.length, n = "cursor-pointer font-semibold hover:underline text-black dark:text-white", m = g(), r = /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsx(Q, { actor: l, align: "center", isCurrentUser: !1, children: /* @__PURE__ */ t.jsx(
      "span",
      {
        className: n,
        onClick: (h) => {
          h?.stopPropagation(), l.handle && b(l.handle, m);
        },
        children: l.name
      }
    ) }),
    i && ` and ${A(s)} ${s > 1 ? "others" : "other"}`
  ] });
  switch (a.type) {
    case "follow":
      return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
        r,
        " followed you"
      ] });
    case "like":
      return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
        r,
        " liked your ",
        a.post?.type === "article" ? "post" : "note"
      ] });
    case "repost":
      return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
        r,
        " reposted your ",
        a.post?.type === "article" ? "post" : "note"
      ] });
    case "reply":
      if (a.inReplyTo && typeof a.inReplyTo != "string")
        return r;
      break;
    case "mention":
      return r;
  }
  return /* @__PURE__ */ t.jsx(t.Fragment, {});
}, de = ({ content: a, className: l, stripTags: c = [] }) => {
  const i = u(null), s = g();
  return I(() => {
    const n = i.current;
    if (!n)
      return;
    const m = (r) => {
      const f = r.target.closest("a[data-profile]");
      if (f) {
        const x = f.getAttribute("data-profile")?.trim();
        /^@([\w.-]+)@([\w-]+\.[\w.-]+[a-zA-Z])$/.test(x || "") && x && (r.preventDefault(), r.stopPropagation(), b(x, s));
      }
    };
    return n.addEventListener("click", m), () => {
      n.removeEventListener("click", m);
    };
  }, [s, a]), /* @__PURE__ */ t.jsx(
    "div",
    {
      dangerouslySetInnerHTML: { __html: F(M(a || "", c)) },
      ref: i,
      className: l
    }
  );
}, pe = () => {
  const [a, l] = $.useState({}), c = g(), i = (e) => {
    l((d) => ({
      ...d,
      [e]: !d[e]
    }));
  }, s = () => {
  }, n = 5, { data: m, error: r, fetchNextPage: h, hasNextPage: f, isFetchingNextPage: x, isLoading: j } = E("index"), k = m?.pages.flatMap((e) => ce(e.notifications)) ?? Array(10).fill({ actors: [{}] }), y = u(null), v = u(null);
  I(() => (y.current && y.current.disconnect(), y.current = new IntersectionObserver((e) => {
    e[0].isIntersecting && f && !x && h();
  }), v.current && y.current.observe(v.current), () => {
    y.current && y.current.disconnect();
  }), [f, x, h]);
  const T = (e, d) => {
    switch (e.type) {
      case "like":
        e.post && c(`/${e.post.type === "article" ? "reader" : "notes"}/${encodeURIComponent(e.post.id)}`);
        break;
      case "reply":
        e.post && e.inReplyTo && c(`/notes/${encodeURIComponent(e.post.id)}`);
        break;
      case "repost":
        e.post && c(`/${e.post.type === "article" ? "reader" : "notes"}/${encodeURIComponent(e.post.id)}`);
        break;
      case "follow":
        e.actors.length > 1 ? i(e.id || `${e.type}_${d}`) : e.actors[0]?.handle && b(e.actors[0].handle, c);
        break;
      case "mention":
        e.post && c(`/notes/${encodeURIComponent(e.post.id)}`);
        break;
    }
  };
  return r && P(r) ? /* @__PURE__ */ t.jsx(L, { errorCode: r.code, statusCode: r.statusCode }) : /* @__PURE__ */ t.jsx(U, { children: /* @__PURE__ */ t.jsxs("div", { className: "z-0 flex w-full flex-col items-center", children: [
    j === !1 && k.length === 0 && /* @__PURE__ */ t.jsxs(W, { children: [
      /* @__PURE__ */ t.jsx(B, { children: /* @__PURE__ */ t.jsx(H, {}) }),
      "Quiet for now, but not for long! When someone likes, boosts, or replies to you, you'll find it here."
    ] }),
    k.length > 0 && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
      /* @__PURE__ */ t.jsx("div", { className: "my-8 flex w-full max-w-[620px] flex-col max-md:mt-5", children: k.map((e, d) => /* @__PURE__ */ t.jsxs($.Fragment, { children: [
        /* @__PURE__ */ t.jsxs(
          p,
          {
            centerAlign: e.actors.length < 2 && e.type === "follow",
            className: "hover:bg-gray-100 dark:hover:bg-gray-950",
            isGrouped: e.actors.length > 1,
            onClick: () => T(e, d),
            children: [
              j ? /* @__PURE__ */ t.jsx(N, { className: "rounded-full", containerClassName: "flex h-10 w-10" }) : e.actors.length > 1 ? /* @__PURE__ */ t.jsx(p.Icon, { type: e.type }) : /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ t.jsx(
                  w,
                  {
                    author: {
                      icon: {
                        url: e.actors[0].avatarUrl || ""
                      },
                      name: e.actors[0].name,
                      handle: e.actors[0].handle
                    },
                    size: "notification"
                  },
                  e.actors[0].id
                ),
                /* @__PURE__ */ t.jsx(R, { className: "absolute -right-1 -bottom-1 z-10 border-2 border-white dark:border-black", notificationType: e.type, size: "sm" })
              ] }),
              e.actors.length > 1 && /* @__PURE__ */ t.jsx(p.Avatars, { children: /* @__PURE__ */ t.jsxs("div", { className: "flex w-full flex-col", children: [
                /* @__PURE__ */ t.jsxs("div", { className: "relative flex w-fit items-center pl-2", children: [
                  !a[e.id || `${e.type}_${d}`] && e.actors.slice(0, n).map((o) => /* @__PURE__ */ t.jsx(
                    w,
                    {
                      author: {
                        icon: {
                          url: o.avatarUrl || ""
                        },
                        name: o.name,
                        handle: o.handle
                      },
                      className: "-ml-2 bg-[#F3F3F3]! outline outline-2 outline-white group-hover:bg-[#EDEEF0]! group-hover:outline-gray-100 dark:outline-black group-hover:dark:outline-gray-950",
                      size: "notification"
                    },
                    o.id
                  )),
                  e.actors.length > n && !a[e.id || `${e.type}_${d}`] && /* @__PURE__ */ t.jsx("div", { className: "absolute right-[28px] z-10 flex size-9 items-center justify-center rounded-full bg-black/50 text-base font-semibold tracking-tightest text-white", children: `+${A(e.actors.length - n)}` }),
                  e.actors.length > 1 && /* @__PURE__ */ t.jsxs(O, { className: `group flex items-center gap-0.5 text-gray-700 hover:bg-transparent hover:text-black dark:text-gray-600 dark:hover:text-white ${a[e.id || `${e.type}_${d}`] ? "ml-[-20px]" : "ml-0 w-[28px]"}`, variant: "ghost", onClick: (o) => {
                    o?.stopPropagation(), i(e.id || `${e.type}_${d}`);
                  }, children: [
                    /* @__PURE__ */ t.jsx(D, { className: `${a[e.id || `${e.type}_${d}`] ? "rotate-180" : ""}`, size: 20, strokeWidth: 1.5 }),
                    a[e.id || `${e.type}_${d}`] ? "Hide" : /* @__PURE__ */ t.jsx("span", { className: "sr-only", children: "Show all" })
                  ] })
                ] }),
                /* @__PURE__ */ t.jsx("div", { className: `overflow-hidden transition-all duration-300 ease-in-out  ${a[e.id || `${e.type}_${d}`] ? "mb-2 max-h-[1384px] opacity-100" : "max-h-0 opacity-0"}`, children: a[e.id || `${e.type}_${d}`] && e.actors.length > 1 && /* @__PURE__ */ t.jsx("div", { className: "flex flex-col gap-2 pt-2", children: e.actors.map((o) => /* @__PURE__ */ t.jsxs(
                  "div",
                  {
                    className: "group/item break-anywhere flex items-center justify-between gap-4",
                    onClick: (z) => {
                      z?.stopPropagation(), o.handle && b(o.handle, c);
                    },
                    children: [
                      /* @__PURE__ */ t.jsxs("div", { className: "flex min-w-0 items-center", children: [
                        /* @__PURE__ */ t.jsx(w, { author: {
                          icon: {
                            url: o.avatarUrl || ""
                          },
                          name: o.name,
                          handle: o.handle
                        }, size: "xs" }),
                        /* @__PURE__ */ t.jsx("span", { className: "ml-2 line-clamp-1 text-base font-semibold group-hover/item:underline dark:text-white", children: o.name }),
                        /* @__PURE__ */ t.jsx("span", { className: "ml-1 line-clamp-1 text-base text-gray-700 dark:text-gray-600", children: o.handle })
                      ] }),
                      e.type === "follow" && !o.followedByMe && o.handle && /* @__PURE__ */ t.jsx(
                        C,
                        {
                          following: !1,
                          handle: o.handle,
                          variant: "link"
                        }
                      )
                    ]
                  },
                  o.id
                )) }) })
              ] }) }),
              /* @__PURE__ */ t.jsxs(p.Content, { children: [
                /* @__PURE__ */ t.jsx("div", { children: j ? /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
                  /* @__PURE__ */ t.jsx(N, {}),
                  /* @__PURE__ */ t.jsx(N, { className: "w-full max-w-60" })
                ] }) : /* @__PURE__ */ t.jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ t.jsx("span", { className: "truncate", children: /* @__PURE__ */ t.jsx(oe, { group: e }) }),
                    e.actors.length < 2 && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
                      /* @__PURE__ */ t.jsx("span", { className: "mt-px text-[8px] text-gray-700 dark:text-gray-600", children: "•" }),
                      /* @__PURE__ */ t.jsx("span", { className: "mt-0.5 text-sm text-gray-700 dark:text-gray-600", children: V(e, !1) })
                    ] })
                  ] }),
                  e.actors.length === 1 && (e.type === "follow" || e.type === "reply" || e.type === "mention") && !e.actors[0].followedByMe && e.actors[0].handle && /* @__PURE__ */ t.jsx(
                    C,
                    {
                      following: !1,
                      handle: e.actors[0].handle,
                      variant: "link"
                    }
                  )
                ] }) }),
                (e.type === "reply" && e.inReplyTo || e.type === "mention" || e.type === "like" && !e.post?.name && e.post?.content || e.type === "repost" && !e.post?.name && e.post?.content) && (e.type !== "reply" && e.type !== "mention" ? /* @__PURE__ */ t.jsxs("div", { className: "ap-note-content mt-0.5 line-clamp-1 text-sm text-pretty text-gray-700 dark:text-gray-600", children: [
                  e.post?.type === "article" && e.post?.title && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
                    e.post.title,
                    " — "
                  ] }),
                  /* @__PURE__ */ t.jsx("span", { dangerouslySetInnerHTML: { __html: F(M(e.post?.content || "")) } })
                ] }) : /* @__PURE__ */ t.jsx(t.Fragment, { children: /* @__PURE__ */ t.jsxs("div", { className: "mt-2.5 rounded-md bg-gray-100 px-5 py-[14px] group-hover:bg-gray-200 dark:bg-gray-950/30 group-hover:dark:bg-black/40", children: [
                  /* @__PURE__ */ t.jsx(
                    de,
                    {
                      className: "ap-note-content text-pretty",
                      content: e.post?.content || "",
                      stripTags: ["a"]
                    }
                  ),
                  e.post && e.post.attachments && e.post.attachments.length > 0 && /* @__PURE__ */ t.jsx("div", { className: "notification-attachments mb-1 [&_.attachment-gallery]:flex [&_.attachment-gallery]:flex-wrap [&_img]:aspect-square [&_img]:max-w-[calc(20%-6.4px)]", children: q(
                    { ...e.post, type: "Note", attachment: e.post.attachments }
                  ) })
                ] }) })),
                (e.type === "reply" && e.post || e.type === "mention") && /* @__PURE__ */ t.jsx("div", { className: "mt-1.5", children: /* @__PURE__ */ t.jsx(
                  G,
                  {
                    actor: {
                      ...e.actors[0],
                      icon: {
                        url: e.actors[0].avatarUrl || ""
                      },
                      id: e.actors[0].url,
                      preferredUsername: e.actors[0].handle?.replace(/^@([^@]+)@.*$/, "$1") || "unknown"
                    },
                    buttonClassName: "hover:bg-gray-200",
                    commentCount: e.post.replyCount || 0,
                    layout: "notification",
                    likeCount: e.post.likeCount || 0,
                    object: {
                      ...e.post,
                      liked: e.post.likedByMe,
                      reposted: e.post.repostedByMe
                    },
                    repostCount: e.post.repostCount || 0,
                    onLikeClick: s
                  }
                ) })
              ] })
            ]
          }
        ),
        d < k.length - 1 && /* @__PURE__ */ t.jsx("div", { className: "pl-[52px]", children: /* @__PURE__ */ t.jsx(re, {}) })
      ] }, e.id || `${e.type}_${d}`)) }),
      /* @__PURE__ */ t.jsx("div", { ref: v, className: "h-1" }),
      x && /* @__PURE__ */ t.jsx("div", { className: "-mt-4 mb-8 flex flex-col items-center justify-center gap-4 text-center", children: /* @__PURE__ */ t.jsx(K, { size: "md" }) })
    ] })
  ] }) });
};
export {
  pe as default
};
//# sourceMappingURL=index-Ccighz1t.js.map
