import { u as G, a as ee, b as m, c as C, d as te, e as $, j as e, L as y, S as c, E as se, f as ne, P as ae, A as oe, g as le, r as ie, h as ce, F as j, R as re, i as R, k as de } from "./index-BpBf-VFB.mjs";
import { u as xe, D as he, A as ue, S as U } from "./deleted-feed-item-B68A2j3f.mjs";
import { H as me } from "./hash-CX11JFJW.mjs";
const p = () => /* @__PURE__ */ e.jsx("div", { className: "h-px w-full bg-gray-200 dark:bg-gray-950" }), pe = () => {
  const { postId: z } = G(), { canGoBack: k } = ee(), [B, T] = m(/* @__PURE__ */ new Set()), [H, I] = m(/* @__PURE__ */ new Set()), [S, P] = m(/* @__PURE__ */ new Set()), [w, D] = m(!1), V = C(null), v = C(null), r = C(null), g = C(null), u = te(), {
    threadParents: d,
    post: n,
    processedReplies: E,
    isLoading: q,
    loadMoreChildren: F,
    loadMoreChildReplies: L,
    hasMoreChildren: b,
    hasMoreChildReplies: f
  } = xe(decodeURIComponent(z ?? ""), { includeAncestors: !0 }), a = n == null ? void 0 : n.object, O = (a == null ? void 0 : a.replyCount) ?? 0, [M, W] = m(!1);
  if ($(() => {
    v.current && d.length > 0 && !M && (v.current.scrollIntoView({
      behavior: "instant",
      block: "start"
    }), W(!0));
  }, [d, M]), $(() => {
    r.current && r.current.disconnect();
    const t = document.querySelector("[data-scrollable-container]");
    if (t)
      return r.current = new IntersectionObserver(async (o) => {
        if (o[0].isIntersecting && b && !w) {
          D(!0);
          try {
            await F();
          } catch (s) {
            console.error("Failed to load more top-level replies:", s);
          } finally {
            D(!1);
          }
        }
      }, {
        root: t,
        rootMargin: "200px"
      }), g.current && r.current.observe(g.current), () => {
        r.current && r.current.disconnect();
      };
  }, [b, w, F]), q)
    return /* @__PURE__ */ e.jsx(y, { children: /* @__PURE__ */ e.jsxs("div", { className: "mx-auto flex max-w-[620px] flex-col items-center gap-3 pt-9 lg:px-8", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex w-full items-center gap-3", children: [
        /* @__PURE__ */ e.jsx(c, { className: "size-10 rounded-full" }),
        /* @__PURE__ */ e.jsxs("div", { className: "grow pt-1", children: [
          /* @__PURE__ */ e.jsx(c, { className: "w-24" }),
          /* @__PURE__ */ e.jsx(c, { className: "w-3/5" })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "mb-7 w-full", children: [
        /* @__PURE__ */ e.jsx(c, {}),
        /* @__PURE__ */ e.jsx(c, { className: "w-4/5" }),
        /* @__PURE__ */ e.jsx(c, {})
      ] }),
      /* @__PURE__ */ e.jsx(p, {}),
      /* @__PURE__ */ e.jsxs("div", { className: "flex w-full items-center gap-3 py-3", children: [
        /* @__PURE__ */ e.jsx(c, { className: "block size-full", containerClassName: "size-10 rounded-full overflow-hidden" }),
        /* @__PURE__ */ e.jsxs("div", { children: [
          /* @__PURE__ */ e.jsx(c, { className: "w-52" }),
          /* @__PURE__ */ e.jsx(c, { className: "w-28" })
        ] })
      ] }),
      /* @__PURE__ */ e.jsx(p, {})
    ] }) });
  if (!n)
    return /* @__PURE__ */ e.jsx(y, { children: /* @__PURE__ */ e.jsx("div", { className: "mx-auto mt-4 flex w-full max-w-[620px] flex-col items-center", children: /* @__PURE__ */ e.jsxs(se, { children: [
      /* @__PURE__ */ e.jsx(ne, { children: /* @__PURE__ */ e.jsx(me, {}) }),
      /* @__PURE__ */ e.jsx("div", { children: "Error loading note." })
    ] }) }) });
  function N() {
  }
  function J(t) {
    T((o) => {
      const s = new Set(o);
      return s.has(t) ? s.delete(t) : (s.add(t), I((l) => {
        const x = new Set(l);
        return x.add(t), x;
      })), s;
    });
  }
  async function K(t, o) {
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
    !d.length && /* @__PURE__ */ e.jsx(ae, { actor: n.actor, isCurrentUser: n.object.authored, children: /* @__PURE__ */ e.jsxs("div", { className: `col-[2/3] mx-auto flex w-full cursor-pointer items-center gap-3 ${k ? "pt-10 max-md:pt-5" : "pt-5"}`, children: [
      /* @__PURE__ */ e.jsx("div", { className: "relative z-10", children: /* @__PURE__ */ e.jsx(oe, { author: n.actor, showFollowButton: !n.object.authored && !n.actor.followedByMe }) }),
      /* @__PURE__ */ e.jsxs("div", { className: "relative z-10 flex w-full min-w-0 cursor-pointer flex-col overflow-visible text-[1.5rem]", onClick: (t) => {
        ce(n.actor, u, t);
      }, children: [
        /* @__PURE__ */ e.jsx("div", { className: "flex w-full", children: /* @__PURE__ */ e.jsx("span", { className: "min-w-0 truncate font-semibold whitespace-nowrap hover:underline", children: n.actor.name }) }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex w-full", children: [
          /* @__PURE__ */ e.jsx("span", { className: 'truncate text-gray-700 after:mx-1 after:font-normal after:text-gray-700 after:content-["·"]', children: le(n.actor) }),
          /* @__PURE__ */ e.jsx("span", { className: "text-gray-700", children: ie(a, !a.authored) })
        ] })
      ] })
    ] }) }),
    d.map((t) => t.object.type === "Tombstone" ? /* @__PURE__ */ e.jsx(he, { last: !1 }) : /* @__PURE__ */ e.jsx(
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
          u(`/${t.object.type === "Article" ? "reader" : "notes"}/${encodeURIComponent(t.object.id)}`);
        }
      }
    )),
    /* @__PURE__ */ e.jsx("div", { ref: v, className: `${k ? "scroll-mt-[12px]" : "scroll-mt-[124px]"}`, children: /* @__PURE__ */ e.jsxs("div", { className: `${d.length > 0 && "min-h-[calc(100vh-52px)]"}`, children: [
      /* @__PURE__ */ e.jsx(
        j,
        {
          actor: n.actor,
          allowDelete: !1,
          commentCount: O,
          last: !0,
          layout: "modal",
          likeCount: a.likeCount ?? 0,
          object: a,
          repostCount: a.repostCount,
          showHeader: d.length > 0,
          showStats: !0,
          type: "Note"
        }
      ),
      /* @__PURE__ */ e.jsx(
        ue,
        {
          object: a
        }
      ),
      /* @__PURE__ */ e.jsx(p, {}),
      /* @__PURE__ */ e.jsxs("div", { ref: V, children: [
        E.map((t, o) => {
          const s = o === E.length - 1, l = t.mainReply.id, x = B.has(l), Q = H.has(l), X = S.has(l), h = t.chain.length > 0;
          return /* @__PURE__ */ e.jsxs(re.Fragment, { children: [
            /* @__PURE__ */ e.jsx(
              j,
              {
                actor: t.mainReply.actor,
                allowDelete: t.mainReply.object.authored,
                commentCount: t.mainReply.object.replyCount ?? 0,
                isChainParent: h,
                isPending: R(t.mainReply.id),
                last: !h,
                layout: "reply",
                likeCount: t.mainReply.object.likeCount ?? 0,
                object: t.mainReply.object,
                parentId: a.id,
                repostCount: t.mainReply.object.repostCount ?? 0,
                type: "Note",
                onClick: () => {
                  u(`/notes/${encodeURIComponent(t.mainReply.id)}`);
                },
                onDelete: N
              }
            ),
            h && t.chain[0] && /* @__PURE__ */ e.jsx(
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
                parentId: a.id,
                repostCount: t.chain[0].object.repostCount ?? 0,
                type: "Note",
                onClick: () => {
                  u(`/notes/${encodeURIComponent(t.chain[0].id)}`);
                },
                onDelete: N
              },
              t.chain[0].id
            ),
            h && x && t.chain.slice(1).map((i, Y) => {
              const A = Y === t.chain.slice(1).length - 1, Z = f && f(o), _ = A && Z;
              return /* @__PURE__ */ e.jsx(
                j,
                {
                  actor: i.actor,
                  allowDelete: i.object.authored,
                  commentCount: i.object.replyCount ?? 0,
                  isChainContinuation: !0,
                  isPending: R(i.id),
                  last: A && !_,
                  layout: "reply",
                  likeCount: i.object.likeCount ?? 0,
                  object: i.object,
                  parentId: a.id,
                  repostCount: i.object.repostCount ?? 0,
                  type: "Note",
                  onClick: () => {
                    u(`/notes/${encodeURIComponent(i.id)}`);
                  },
                  onDelete: N
                },
                i.id
              );
            }),
            h && t.chain.length > 1 && !x && /* @__PURE__ */ e.jsx(
              U,
              {
                variant: "expand",
                onClick: () => J(l)
              }
            ),
            h && x && Q && f && f(o) && /* @__PURE__ */ e.jsx(
              U,
              {
                loading: X,
                variant: "loadMore",
                onClick: () => K(l, o)
              }
            ),
            !s && /* @__PURE__ */ e.jsx(p, {})
          ] }, t.mainReply.id);
        }),
        w && /* @__PURE__ */ e.jsx("div", { className: "flex flex-col items-center justify-center text-center", children: /* @__PURE__ */ e.jsx(de, { size: "md" }) })
      ] }),
      b && /* @__PURE__ */ e.jsx("div", { ref: g, className: "h-1" })
    ] }) })
  ] }) }) }) }) });
};
export {
  pe as default
};
//# sourceMappingURL=note-C2rU7Bzp.mjs.map
