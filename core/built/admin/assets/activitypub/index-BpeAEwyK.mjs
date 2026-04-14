import { a6 as E, j as t, aP as H, R as u, d as C, aQ as D, c as g, e as L, aw as O, ax as V, L as q, E as G, f as Q, aR as K, S as w, A as $, B as Z, aS as J, aa as P, h as b, r as X, ad as U, aT as Y, aU as ee, k as te, P as se } from "./index-BpBf-VFB.mjs";
import { A as ae } from "./at-sign-CAr9Uvg-.mjs";
import { R as ne } from "./reply-CEStS1Da.mjs";
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const le = [
  ["path", { d: "m2 9 3-3 3 3", key: "1ltn5i" }],
  ["path", { d: "M13 18H7a2 2 0 0 1-2-2V6", key: "1r6tfw" }],
  ["path", { d: "m22 15-3 3-3-3", key: "4rnwn2" }],
  ["path", { d: "M11 6h6a2 2 0 0 1 2 2v10", key: "2f72bc" }]
], re = E("repeat-2", le);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ce = [
  ["path", { d: "M2 21a8 8 0 0 1 13.292-6", key: "bjp14o" }],
  ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
  ["path", { d: "m16 19 2 2 4-4", key: "1b14m6" }]
], ie = E("user-round-check", ce), B = ({ notificationType: a, size: l = "lg", className: c }) => {
  let r, s = "";
  const n = "white", i = l === "sm" ? 13 : 20, o = l === "sm" ? 2 : 1.5;
  switch (a) {
    case "follow":
      r = /* @__PURE__ */ t.jsx(ie, { className: `-mt-0.5 -mr-0.5 ${l === "sm" && "size-[11px]"}`, color: n, size: i, strokeWidth: o }), s = "bg-blue-600";
      break;
    case "like":
      r = /* @__PURE__ */ t.jsx(H, { className: `${l === "sm" ? "size-[11px]" : "mt-px size-5"}`, color: n, strokeWidth: o }), s = "bg-pink-600";
      break;
    case "reply":
      r = /* @__PURE__ */ t.jsx(ne, { className: "mr-px mb-px", color: n, size: i, strokeWidth: o }), s = "bg-purple-600";
      break;
    case "repost":
      r = /* @__PURE__ */ t.jsx(re, { color: n, size: i, strokeWidth: o }), s = "bg-green-500";
      break;
    case "mention":
      r = /* @__PURE__ */ t.jsx(ae, { className: `${l === "sm" ? "size-[12px]" : "size-5"}`, color: n, size: i, strokeWidth: o }), s = "bg-orange-500";
      break;
  }
  return /* @__PURE__ */ t.jsx("div", { className: `flex ${l === "sm" ? "size-5" : "size-9"} items-center justify-center rounded-full ${s} ${c && c}`, children: r });
}, oe = u.createContext(void 0), f = ({ isGrouped: a, centerAlign: l, children: c, onClick: r, url: s, className: n }) => /* @__PURE__ */ t.jsx(oe.Provider, { value: { onClick: r, url: s }, children: /* @__PURE__ */ t.jsx(
  "div",
  {
    className: `group relative -mx-4 -my-px ${a ? "grid" : "flex"} ${l ? "items-center" : "items-start"} break-anywhere cursor-pointer grid-cols-[auto_1fr] gap-x-4 gap-y-2.5 rounded-lg px-4 py-5 text-left hover:bg-gray-75 ${n}`,
    role: "button",
    onClick: r,
    children: c
  }
) }), de = ({ size: a = "lg", type: l }) => /* @__PURE__ */ t.jsx("div", { className: "col-start-1 row-start-1", children: /* @__PURE__ */ t.jsx(B, { notificationType: l, size: a }) }), me = ({ children: a }) => /* @__PURE__ */ t.jsx("div", { className: "col-start-2 row-start-1 flex gap-2", children: a }), he = ({ children: a }) => /* @__PURE__ */ t.jsx("div", { className: "col-start-2 row-start-2 -mt-0.5 grow overflow-hidden", children: a });
f.Icon = de;
f.Avatars = me;
f.Content = he;
const xe = () => /* @__PURE__ */ t.jsx("div", { className: "h-px w-full bg-gray-150 dark:bg-gray-950" });
function pe(a) {
  const r = new Date(a).getTime();
  return (Math.floor(r / 864e5) * 864e5).toString();
}
function ye(a) {
  const l = {};
  let c = null, r = 0;
  return a.forEach((s) => {
    var x, h;
    s.type !== c && (r += 1, c = s.type);
    let n = "";
    const i = `_${pe(s.createdAt)}`, o = `_seq${r}`;
    switch (s.type) {
      case "like":
        (x = s.post) != null && x.id && (n = `like_${s.post.id}${i}${o}`);
        break;
      case "reply":
        n = `reply_${s.id}`;
        break;
      case "repost":
        (h = s.post) != null && h.id && (n = `repost_${s.post.id}${i}${o}`);
        break;
      case "follow":
        n = `follow_${i}${o}`;
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
    }), l[n].actors.find((p) => p.id === s.actor.id) || l[n].actors.push(s.actor);
  }), Object.values(l);
}
const fe = ({ group: a }) => {
  var o, x;
  const [l, ...c] = a.actors, r = c.length > 0, s = "cursor-pointer font-semibold hover:underline text-black dark:text-white", n = C(), i = /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsx(se, { actor: l, align: "center", isCurrentUser: !1, children: /* @__PURE__ */ t.jsx(
      "span",
      {
        className: s,
        onClick: (h) => {
          h == null || h.stopPropagation(), b(l.handle, n);
        },
        children: l.name
      }
    ) }),
    r && ` and ${c.length} ${c.length > 1 ? "others" : "other"}`
  ] });
  switch (a.type) {
    case "follow":
      return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
        i,
        " followed you"
      ] });
    case "like":
      return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
        i,
        " liked your ",
        ((o = a.post) == null ? void 0 : o.type) === "article" ? "post" : "note"
      ] });
    case "repost":
      return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
        i,
        " reposted your ",
        ((x = a.post) == null ? void 0 : x.type) === "article" ? "post" : "note"
      ] });
    case "reply":
      if (a.inReplyTo && typeof a.inReplyTo != "string")
        return i;
      break;
    case "mention":
      return i;
  }
  return /* @__PURE__ */ t.jsx(t.Fragment, {});
}, je = ({ content: a, className: l, stripTags: c = [] }) => {
  const r = g(null), s = C();
  return L(() => {
    const n = r.current;
    if (!n)
      return;
    const i = (o) => {
      var p;
      const h = o.target.closest("a[data-profile]");
      if (h) {
        const y = (p = h.getAttribute("data-profile")) == null ? void 0 : p.trim();
        /^@([\w.-]+)@([\w-]+\.[\w.-]+[a-zA-Z])$/.test(y || "") && y && (o.preventDefault(), o.stopPropagation(), b(y, s));
      }
    };
    return n.addEventListener("click", i), () => {
      n.removeEventListener("click", i);
    };
  }, [s, a]), /* @__PURE__ */ t.jsx(
    "div",
    {
      dangerouslySetInnerHTML: { __html: U(a || "", c) },
      ref: r,
      className: l
    }
  );
}, Ne = () => {
  const [a, l] = u.useState({}), c = C(), r = (e) => {
    l((m) => ({
      ...m,
      [e]: !m[e]
    }));
  }, s = () => {
  }, n = 5, { data: i, error: o, fetchNextPage: x, hasNextPage: h, isFetchingNextPage: p, isLoading: y } = D("index"), k = (i == null ? void 0 : i.pages.flatMap((e) => ye(e.notifications))) ?? Array(10).fill({ actors: [{}] }), j = g(null), v = g(null);
  L(() => (j.current && j.current.disconnect(), j.current = new IntersectionObserver((e) => {
    e[0].isIntersecting && h && !p && x();
  }), v.current && j.current.observe(v.current), () => {
    j.current && j.current.disconnect();
  }), [h, p, x]);
  const W = (e, m) => {
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
        e.actors.length > 1 ? r(e.id || `${e.type}_${m}`) : b(e.actors[0].handle, c);
        break;
      case "mention":
        e.post && c(`/notes/${encodeURIComponent(e.post.id)}`);
        break;
    }
  };
  return o && O(o) ? /* @__PURE__ */ t.jsx(V, { errorCode: o.code, statusCode: o.statusCode }) : /* @__PURE__ */ t.jsx(q, { children: /* @__PURE__ */ t.jsxs("div", { className: "z-0 flex w-full flex-col items-center", children: [
    y === !1 && k.length === 0 && /* @__PURE__ */ t.jsxs(G, { children: [
      /* @__PURE__ */ t.jsx(Q, { children: /* @__PURE__ */ t.jsx(K, {}) }),
      "Quiet for now, but not for long! When someone likes, boosts, or replies to you, you'll find it here."
    ] }),
    k.length > 0 && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
      /* @__PURE__ */ t.jsx("div", { className: "my-8 flex w-full max-w-[620px] flex-col max-md:mt-5", children: k.map((e, m) => {
        var _, I, R, A, F, T, M, S, z;
        return /* @__PURE__ */ t.jsxs(u.Fragment, { children: [
          /* @__PURE__ */ t.jsxs(
            f,
            {
              centerAlign: e.actors.length < 2 && e.type === "follow",
              className: "hover:bg-gray-75 dark:hover:bg-gray-950",
              isGrouped: e.actors.length > 1,
              onClick: () => W(e, m),
              children: [
                y ? /* @__PURE__ */ t.jsx(w, { className: "rounded-full", containerClassName: "flex h-10 w-10" }) : e.actors.length > 1 ? /* @__PURE__ */ t.jsx(f.Icon, { type: e.type }) : /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ t.jsx(
                    $,
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
                  /* @__PURE__ */ t.jsx(B, { className: "absolute -right-1 -bottom-1 z-10 border-2 border-white dark:border-black", notificationType: e.type, size: "sm" })
                ] }),
                e.actors.length > 1 && /* @__PURE__ */ t.jsx(f.Avatars, { children: /* @__PURE__ */ t.jsxs("div", { className: "flex w-full flex-col", children: [
                  /* @__PURE__ */ t.jsxs("div", { className: "relative flex items-center pl-2", children: [
                    !a[e.id || `${e.type}_${m}`] && e.actors.slice(0, n).map((d) => /* @__PURE__ */ t.jsx(
                      $,
                      {
                        author: {
                          icon: {
                            url: d.avatarUrl || ""
                          },
                          name: d.name,
                          handle: d.handle
                        },
                        className: "-ml-2 bg-[#F3F3F3]! outline outline-2 outline-white group-hover:bg-[#EDEEF0]! group-hover:outline-gray-75 dark:outline-black group-hover:dark:outline-gray-950",
                        size: "notification"
                      },
                      d.id
                    )),
                    e.actors.length > n && !a[e.id || `${e.type}_${m}`] && /* @__PURE__ */ t.jsx("div", { className: "absolute right-[28px] z-10 flex size-9 items-center justify-center rounded-full bg-black/50 text-base font-semibold tracking-tightest text-white", children: `+${e.actors.length - n}` }),
                    e.actors.length > 1 && /* @__PURE__ */ t.jsxs(Z, { className: `group flex items-center gap-0.5 text-gray-700 hover:bg-transparent hover:text-black dark:text-gray-600 dark:hover:text-white ${a[e.id || `${e.type}_${m}`] ? "ml-[-20px]" : "ml-0 w-[28px]"}`, variant: "ghost", onClick: (d) => {
                      d == null || d.stopPropagation(), r(e.id || `${e.type}_${m}`);
                    }, children: [
                      /* @__PURE__ */ t.jsx(J, { className: `${a[e.id || `${e.type}_${m}`] ? "rotate-180" : ""}`, size: 20, strokeWidth: 1.5 }),
                      a[e.id || `${e.type}_${m}`] ? "Hide" : /* @__PURE__ */ t.jsx("span", { className: "sr-only", children: "Show all" })
                    ] })
                  ] }),
                  /* @__PURE__ */ t.jsx("div", { className: `overflow-hidden transition-all duration-300 ease-in-out  ${a[e.id || `${e.type}_${m}`] ? "mb-2 max-h-[1384px] opacity-100" : "max-h-0 opacity-0"}`, children: a[e.id || `${e.type}_${m}`] && e.actors.length > 1 && /* @__PURE__ */ t.jsx("div", { className: "flex flex-col gap-2 pt-2", children: e.actors.map((d) => /* @__PURE__ */ t.jsxs(
                    "div",
                    {
                      className: "group/item break-anywhere flex items-center justify-between gap-4",
                      onClick: (N) => {
                        N == null || N.stopPropagation(), b(d.handle, c);
                      },
                      children: [
                        /* @__PURE__ */ t.jsxs("div", { className: "flex min-w-0 items-center", children: [
                          /* @__PURE__ */ t.jsx($, { author: {
                            icon: {
                              url: d.avatarUrl || ""
                            },
                            name: d.name,
                            handle: d.handle
                          }, size: "xs" }),
                          /* @__PURE__ */ t.jsx("span", { className: "ml-2 line-clamp-1 text-base font-semibold group-hover/item:underline dark:text-white", children: d.name }),
                          /* @__PURE__ */ t.jsx("span", { className: "ml-1 line-clamp-1 text-base text-gray-700 dark:text-gray-600", children: d.handle })
                        ] }),
                        e.type === "follow" && !d.followedByMe && /* @__PURE__ */ t.jsx(
                          P,
                          {
                            following: !1,
                            handle: d.handle,
                            variant: "link"
                          }
                        )
                      ]
                    },
                    d.id
                  )) }) })
                ] }) }),
                /* @__PURE__ */ t.jsxs(f.Content, { children: [
                  /* @__PURE__ */ t.jsx("div", { children: y ? /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
                    /* @__PURE__ */ t.jsx(w, {}),
                    /* @__PURE__ */ t.jsx(w, { className: "w-full max-w-60" })
                  ] }) : /* @__PURE__ */ t.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-1", children: [
                      /* @__PURE__ */ t.jsx("span", { className: "truncate", children: /* @__PURE__ */ t.jsx(fe, { group: e }) }),
                      e.actors.length < 2 && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
                        /* @__PURE__ */ t.jsx("span", { className: "mt-px text-[8px] text-gray-700 dark:text-gray-600", children: "•" }),
                        /* @__PURE__ */ t.jsx("span", { className: "mt-0.5 text-sm text-gray-700 dark:text-gray-600", children: X(e, !1) })
                      ] })
                    ] }),
                    e.actors.length === 1 && (e.type === "follow" || e.type === "reply" || e.type === "mention") && !e.actors[0].followedByMe && /* @__PURE__ */ t.jsx(
                      P,
                      {
                        following: !1,
                        handle: e.actors[0].handle,
                        variant: "link"
                      }
                    )
                  ] }) }),
                  (e.type === "reply" && e.inReplyTo || e.type === "mention" || e.type === "like" && !((_ = e.post) != null && _.name) && ((I = e.post) == null ? void 0 : I.content) || e.type === "repost" && !((R = e.post) != null && R.name) && ((A = e.post) == null ? void 0 : A.content)) && (e.type !== "reply" && e.type !== "mention" ? /* @__PURE__ */ t.jsxs("div", { className: "ap-note-content mt-0.5 line-clamp-1 text-sm text-pretty text-gray-700 dark:text-gray-600", children: [
                    ((F = e.post) == null ? void 0 : F.type) === "article" && ((T = e.post) == null ? void 0 : T.title) && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
                      e.post.title,
                      " — "
                    ] }),
                    /* @__PURE__ */ t.jsx("span", { dangerouslySetInnerHTML: { __html: U(((M = e.post) == null ? void 0 : M.content) || "") } })
                  ] }) : /* @__PURE__ */ t.jsx(t.Fragment, { children: /* @__PURE__ */ t.jsxs("div", { className: "mt-2.5 rounded-md bg-gray-100 px-5 py-[14px] group-hover:bg-gray-200 dark:bg-gray-925/30 group-hover:dark:bg-black/40", children: [
                    /* @__PURE__ */ t.jsx(
                      je,
                      {
                        className: "ap-note-content text-pretty",
                        content: ((S = e.post) == null ? void 0 : S.content) || "",
                        stripTags: ["a"]
                      }
                    ),
                    e.post && e.post.attachments && e.post.attachments.length > 0 && /* @__PURE__ */ t.jsx("div", { className: "notification-attachments mb-1 [&_.attachment-gallery]:flex [&_.attachment-gallery]:flex-wrap [&_img]:aspect-square [&_img]:max-w-[calc(20%-6.4px)]", children: Y(
                      { ...e.post, type: "Note", attachment: e.post.attachments }
                    ) })
                  ] }) })),
                  (e.type === "reply" && e.post || e.type === "mention") && /* @__PURE__ */ t.jsx("div", { className: "mt-1.5", children: /* @__PURE__ */ t.jsx(
                    ee,
                    {
                      actor: {
                        ...e.actors[0],
                        icon: {
                          url: e.actors[0].avatarUrl || ""
                        },
                        id: e.actors[0].url,
                        preferredUsername: ((z = e.actors[0].handle) == null ? void 0 : z.replace(/^@([^@]+)@.*$/, "$1")) || "unknown"
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
          m < k.length - 1 && /* @__PURE__ */ t.jsx("div", { className: "pl-[52px]", children: /* @__PURE__ */ t.jsx(xe, {}) })
        ] }, e.id || `${e.type}_${m}`);
      }) }),
      /* @__PURE__ */ t.jsx("div", { ref: v, className: "h-1" }),
      p && /* @__PURE__ */ t.jsx("div", { className: "-mt-4 mb-8 flex flex-col items-center justify-center gap-4 text-center", children: /* @__PURE__ */ t.jsx(te, { size: "md" }) })
    ] })
  ] }) });
};
export {
  Ne as default
};
//# sourceMappingURL=index-BpeAEwyK.mjs.map
