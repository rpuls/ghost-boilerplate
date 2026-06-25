import { bI as G, bE as ee, bO as m, bL as C, bD as te, bs as $, a_ as e, a4 as y, ar as i, N as se, M as ae, aj as ne, A as oe, aQ as le, b4 as ce, aS as ie, S as j, ak as re, aX as R, a6 as de } from "./index-sudOvKcY.js";
import { u as xe, D as ue, A as he, S as z } from "./deleted-feed-item-67VQJde4.js";
import { H as me } from "./hash-CMtB10PN.js";
const p = () => /* @__PURE__ */ e.jsx("div", { className: "h-px w-full bg-gray-200 dark:bg-gray-950" }), pe = () => {
  const { postId: B } = G(), { canGoBack: k } = ee(), [H, I] = m(/* @__PURE__ */ new Set()), [T, U] = m(/* @__PURE__ */ new Set()), [S, P] = m(/* @__PURE__ */ new Set()), [w, D] = m(!1), V = C(null), b = C(null), r = C(null), v = C(null), h = te(), {
    threadParents: d,
    post: a,
    processedReplies: M,
    isLoading: O,
    loadMoreChildren: E,
    loadMoreChildReplies: L,
    hasMoreChildren: g,
    hasMoreChildReplies: f
  } = xe(decodeURIComponent(B ?? ""), { includeAncestors: !0 }), n = a?.object, q = n?.replyCount ?? 0, [F, Q] = m(!1);
  if ($(() => {
    b.current && d.length > 0 && !F && (b.current.scrollIntoView({
      behavior: "instant",
      block: "start"
    }), Q(!0));
  }, [d, F]), $(() => {
    r.current && r.current.disconnect();
    const t = document.querySelector("[data-scrollable-container]");
    if (t)
      return r.current = new IntersectionObserver(async (o) => {
        if (o[0].isIntersecting && g && !w) {
          D(!0);
          try {
            await E();
          } catch (s) {
            console.error("Failed to load more top-level replies:", s);
          } finally {
            D(!1);
          }
        }
      }, {
        root: t,
        rootMargin: "200px"
      }), v.current && r.current.observe(v.current), () => {
        r.current && r.current.disconnect();
      };
  }, [g, w, E]), O)
    return /* @__PURE__ */ e.jsx(y, { children: /* @__PURE__ */ e.jsxs("div", { className: "mx-auto flex max-w-[620px] flex-col items-center gap-3 pt-9 lg:px-8", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex w-full items-center gap-3", children: [
        /* @__PURE__ */ e.jsx(i, { className: "size-10 rounded-full" }),
        /* @__PURE__ */ e.jsxs("div", { className: "grow pt-1", children: [
          /* @__PURE__ */ e.jsx(i, { className: "w-24" }),
          /* @__PURE__ */ e.jsx(i, { className: "w-3/5" })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "mb-7 w-full", children: [
        /* @__PURE__ */ e.jsx(i, {}),
        /* @__PURE__ */ e.jsx(i, { className: "w-4/5" }),
        /* @__PURE__ */ e.jsx(i, {})
      ] }),
      /* @__PURE__ */ e.jsx(p, {}),
      /* @__PURE__ */ e.jsxs("div", { className: "flex w-full items-center gap-3 py-3", children: [
        /* @__PURE__ */ e.jsx(i, { className: "block size-full", containerClassName: "size-10 rounded-full overflow-hidden" }),
        /* @__PURE__ */ e.jsxs("div", { children: [
          /* @__PURE__ */ e.jsx(i, { className: "w-52" }),
          /* @__PURE__ */ e.jsx(i, { className: "w-28" })
        ] })
      ] }),
      /* @__PURE__ */ e.jsx(p, {})
    ] }) });
  if (!a)
    return /* @__PURE__ */ e.jsx(y, { children: /* @__PURE__ */ e.jsx("div", { className: "mx-auto mt-4 flex w-full max-w-[620px] flex-col items-center", children: /* @__PURE__ */ e.jsxs(se, { children: [
      /* @__PURE__ */ e.jsx(ae, { children: /* @__PURE__ */ e.jsx(me, {}) }),
      /* @__PURE__ */ e.jsx("div", { children: "Error loading note." })
    ] }) }) });
  function N() {
  }
  function W(t) {
    I((o) => {
      const s = new Set(o);
      return s.has(t) ? s.delete(t) : (s.add(t), U((l) => {
        const x = new Set(l);
        return x.add(t), x;
      })), s;
    });
  }
  async function X(t, o) {
    if (!S.has(t)) {
      P((s) => new Set(s).add(t));
      try {
        L && await L(o);
      } catch (s) {
        console.error("Failed to load more replies for chain:", s);
      } finally {
        P((s) => {
          const l = new Set(s);
          return l.delete(t), l;
        });
      }
    }
  }
  return /* @__PURE__ */ e.jsx(y, { children: /* @__PURE__ */ e.jsx("div", { className: "mx-auto flex h-full max-w-[620px] flex-col", children: /* @__PURE__ */ e.jsx("div", { className: "relative flex-1", children: /* @__PURE__ */ e.jsx("div", { className: "grow overflow-y-auto", children: /* @__PURE__ */ e.jsxs("div", { className: "mx-auto px-8 pt-5 pb-10 max-lg:px-0", children: [
    !d.length && /* @__PURE__ */ e.jsx(ne, { actor: a.actor, isCurrentUser: a.object.authored, children: /* @__PURE__ */ e.jsxs("div", { className: `col-[2/3] mx-auto flex w-full cursor-pointer items-center gap-3 ${k ? "pt-10 max-md:pt-5" : "pt-5"}`, children: [
      /* @__PURE__ */ e.jsx("div", { className: "relative z-10", children: /* @__PURE__ */ e.jsx(oe, { author: a.actor, showFollowButton: !a.object.authored && !a.actor.followedByMe }) }),
      /* @__PURE__ */ e.jsxs("div", { className: "relative z-10 flex w-full min-w-0 cursor-pointer flex-col overflow-visible text-[1.5rem]", onClick: (t) => {
        ie(a.actor, h, t);
      }, children: [
        /* @__PURE__ */ e.jsx("div", { className: "flex w-full", children: /* @__PURE__ */ e.jsx("span", { className: "min-w-0 truncate font-semibold whitespace-nowrap hover:underline", children: a.actor.name }) }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex w-full", children: [
          /* @__PURE__ */ e.jsx("span", { className: 'truncate text-gray-700 after:mx-1 after:font-normal after:text-gray-700 after:content-["·"]', children: le(a.actor) }),
          /* @__PURE__ */ e.jsx("span", { className: "text-gray-700", children: ce(n, !n.authored) })
        ] })
      ] })
    ] }) }),
    d.map((t) => t.object.type === "Tombstone" ? /* @__PURE__ */ e.jsx(ue, { last: !1 }) : /* @__PURE__ */ e.jsx(
      j,
      {
        actor: t.actor,
        allowDelete: !1,
        commentCount: t.object.replyCount ?? 0,
        last: !1,
        layout: "reply",
        likeCount: t.object.likeCount ?? 0,
        object: t.object,
        repostCount: t.object.repostCount ?? 0,
        type: "Note",
        onClick: () => {
          h(`/${t.object.type === "Article" ? "reader" : "notes"}/${encodeURIComponent(t.object.id)}`);
        }
      }
    )),
    /* @__PURE__ */ e.jsx("div", { ref: b, className: `${k ? "scroll-mt-[12px]" : "scroll-mt-[124px]"}`, children: /* @__PURE__ */ e.jsxs("div", { className: `${d.length > 0 && "min-h-[calc(100vh-52px)]"}`, children: [
      /* @__PURE__ */ e.jsx(
        j,
        {
          actor: a.actor,
          allowDelete: !1,
          commentCount: q,
          last: !0,
          layout: "modal",
          likeCount: n.likeCount ?? 0,
          object: n,
          repostCount: n.repostCount,
          showHeader: d.length > 0,
          showStats: !0,
          type: "Note"
        }
      ),
      /* @__PURE__ */ e.jsx(
        he,
        {
          object: n
        }
      ),
      /* @__PURE__ */ e.jsx(p, {}),
      /* @__PURE__ */ e.jsxs("div", { ref: V, children: [
        M.map((t, o) => {
          const s = o === M.length - 1, l = t.mainReply.id, x = H.has(l), _ = T.has(l), J = S.has(l), u = t.chain.length > 0;
          return /* @__PURE__ */ e.jsxs(re.Fragment, { children: [
            /* @__PURE__ */ e.jsx(
              j,
              {
                actor: t.mainReply.actor,
                allowDelete: t.mainReply.object.authored,
                commentCount: t.mainReply.object.replyCount ?? 0,
                isChainParent: u,
                isPending: R(t.mainReply.id),
                last: !u,
                layout: "reply",
                likeCount: t.mainReply.object.likeCount ?? 0,
                object: t.mainReply.object,
                parentId: n.id,
                repostCount: t.mainReply.object.repostCount ?? 0,
                type: "Note",
                onClick: () => {
                  h(`/notes/${encodeURIComponent(t.mainReply.id)}`);
                },
                onDelete: N
              }
            ),
            u && t.chain[0] && /* @__PURE__ */ e.jsx(
              j,
              {
                actor: t.chain[0].actor,
                allowDelete: t.chain[0].object.authored,
                commentCount: t.chain[0].object.replyCount ?? 0,
                isChainContinuation: !0,
                isPending: R(t.chain[0].id),
                last: t.chain.length === 1,
                layout: "reply",
                likeCount: t.chain[0].object.likeCount ?? 0,
                object: t.chain[0].object,
                parentId: n.id,
                repostCount: t.chain[0].object.repostCount ?? 0,
                type: "Note",
                onClick: () => {
                  h(`/notes/${encodeURIComponent(t.chain[0].id)}`);
                },
                onDelete: N
              },
              t.chain[0].id
            ),
            u && x && t.chain.slice(1).map((c, K) => {
              const A = K === t.chain.slice(1).length - 1, Y = f && f(o), Z = A && Y;
              return /* @__PURE__ */ e.jsx(
                j,
                {
                  actor: c.actor,
                  allowDelete: c.object.authored,
                  commentCount: c.object.replyCount ?? 0,
                  isChainContinuation: !0,
                  isPending: R(c.id),
                  last: A && !Z,
                  layout: "reply",
                  likeCount: c.object.likeCount ?? 0,
                  object: c.object,
                  parentId: n.id,
                  repostCount: c.object.repostCount ?? 0,
                  type: "Note",
                  onClick: () => {
                    h(`/notes/${encodeURIComponent(c.id)}`);
                  },
                  onDelete: N
                },
                c.id
              );
            }),
            u && t.chain.length > 1 && !x && /* @__PURE__ */ e.jsx(
              z,
              {
                variant: "expand",
                onClick: () => W(l)
              }
            ),
            u && x && _ && f && f(o) && /* @__PURE__ */ e.jsx(
              z,
              {
                loading: J,
                variant: "loadMore",
                onClick: () => X(l, o)
              }
            ),
            !s && /* @__PURE__ */ e.jsx(p, {})
          ] }, t.mainReply.id);
        }),
        w && /* @__PURE__ */ e.jsx("div", { className: "flex flex-col items-center justify-center text-center", children: /* @__PURE__ */ e.jsx(de, { size: "md" }) })
      ] }),
      g && /* @__PURE__ */ e.jsx("div", { ref: v, className: "h-1" })
    ] }) })
  ] }) }) }) }) });
};
export {
  pe as default
};
//# sourceMappingURL=note-Bfr7ovn7.js.map
