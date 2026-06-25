import { a_ as e, a8 as N, A as k, bL as p, bD as y, bO as w, bP as P, bs as _, a0 as M, t as f, v as R, w as z, aw as I, ar as b, aj as W, W as B, a4 as U, S as A, aX as $, a6 as E, N as D, M as H, U as O, bv as V, bV as Q, aW as X, O as T } from "./index-sudOvKcY.js";
import { S as C } from "./separator-B_Ly_Qq8.js";
import { H as q } from "./hash-CMtB10PN.js";
const v = ({ user: l }) => /* @__PURE__ */ e.jsx(N, { children: /* @__PURE__ */ e.jsxs("div", { className: "relative my-5 w-full hover:cursor-pointer", children: [
  /* @__PURE__ */ e.jsx("div", { className: "pointer-events-none absolute top-4 left-4", children: /* @__PURE__ */ e.jsx(k, { author: l }) }),
  /* @__PURE__ */ e.jsx("div", { "aria-label": "New post", className: "text inset-0 flex h-[72px] w-full items-center justify-start rounded-lg bg-white pl-[68px] text-left text-[1.5rem] font-normal tracking-normal text-gray-500 shadow-[0_5px_24px_0px_rgba(0,0,0,0.02),0px_2px_5px_0px_rgba(0,0,0,0.07),0px_0px_1px_0px_rgba(0,0,0,0.25)] transition-all hover:bg-white hover:shadow-[0_5px_24px_0px_rgba(0,0,0,0.05),0px_14px_12px_-9px_rgba(0,0,0,0.07),0px_0px_1px_0px_rgba(0,0,0,0.25)] dark:border dark:border-gray-950 dark:bg-black dark:shadow-none dark:hover:border-gray-800 dark:hover:bg-black dark:hover:shadow-none", children: "What's new?" })
] }) }), G = () => {
  const l = p(null), o = y(), [c, d] = w(!1), [x, i] = w(!0), { suggestedProfilesQuery: m, updateSuggestedProfile: r } = P("index", 10), { data: n = [], isLoading: a } = m, h = () => {
    const s = l.current;
    if (!s)
      return;
    const g = s.scrollLeft > 0, j = s.scrollLeft < s.scrollWidth - s.clientWidth;
    d(g), i(j);
  };
  if (_(() => {
    h();
  }, [n]), !a && (!n || n.length < 4))
    return null;
  const t = (s) => {
  }, u = (s) => {
    r(s.id, {
      followedByMe: !0
    });
  }, S = (s) => {
    r(s.id, {
      followedByMe: !1
    });
  }, L = () => {
    const s = l.current;
    s && s.scrollBy({ left: -352, behavior: "smooth" });
  }, F = () => {
    const s = l.current;
    if (!s)
      return;
    s.scrollBy({ left: 176 * 2, behavior: "smooth" });
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs("div", { className: "pt-4 pb-7", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "mb-3 flex items-center justify-between", children: [
        /* @__PURE__ */ e.jsx(M, { className: "text-lg font-semibold text-black dark:text-white", children: "More people to follow" }),
        /* @__PURE__ */ e.jsx(f, { className: "px-0 font-medium text-gray-700 hover:text-black dark:text-gray-600 dark:hover:text-white", variant: "link", onClick: () => o("/explore"), children: "Find more →" })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        c && /* @__PURE__ */ e.jsx(
          f,
          {
            className: "absolute top-1/2 -left-10 z-10 size-10 -translate-y-1/2 text-gray-700 hover:bg-transparent max-lg:hidden dark:text-gray-600 dark:hover:text-white",
            variant: "ghost",
            onClick: L,
            children: /* @__PURE__ */ e.jsx(R, { className: "size-6!" })
          }
        ),
        x && /* @__PURE__ */ e.jsx(
          f,
          {
            className: "absolute top-1/2 -right-10 z-10 size-10 -translate-y-1/2 text-gray-700 hover:bg-transparent max-lg:hidden dark:text-gray-600 dark:hover:text-white",
            variant: "ghost",
            onClick: F,
            children: /* @__PURE__ */ e.jsx(z, { className: "size-6!" })
          }
        ),
        /* @__PURE__ */ e.jsx(
          "div",
          {
            ref: l,
            className: "flex snap-x snap-mandatory gap-4 overflow-x-auto",
            style: {
              scrollbarWidth: "none",
              msOverflowStyle: "none"
            },
            onScroll: h,
            children: (a ? Array(10).fill(null) : n || []).map((s, g) => /* @__PURE__ */ e.jsxs(
              "div",
              {
                className: "relative w-40 shrink-0 snap-start rounded-lg bg-gray-100 p-4 dark:bg-gray-950/30",
                onClick: !a && s ? () => o(`/profile/${s.handle}`) : void 0,
                children: [
                  /* @__PURE__ */ e.jsx(
                    f,
                    {
                      className: "absolute top-1 right-2 hidden p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300",
                      variant: "link",
                      onClick: (j) => {
                        j.stopPropagation(), t(s?.id || "");
                      },
                      children: /* @__PURE__ */ e.jsx(I, { className: "size-4" })
                    }
                  ),
                  /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col items-center text-center", children: [
                    /* @__PURE__ */ e.jsx("div", { className: "mb-3", children: a ? /* @__PURE__ */ e.jsx(b, { className: "size-16 rounded-full" }) : /* @__PURE__ */ e.jsx(W, { actor: s, align: "center", children: /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(
                      k,
                      {
                        author: {
                          icon: { url: s?.avatarUrl || "" },
                          name: s?.name || "",
                          handle: s?.handle || ""
                        },
                        size: "md"
                      }
                    ) }) }) }),
                    /* @__PURE__ */ e.jsx("span", { className: "mb-6 w-full truncate font-semibold text-black dark:text-white", children: a ? /* @__PURE__ */ e.jsx(b, { className: "h-5 w-32" }) : s?.name || "" }),
                    a ? /* @__PURE__ */ e.jsx(b, { className: "h-8 w-16" }) : /* @__PURE__ */ e.jsx(
                      B,
                      {
                        following: s?.followedByMe || !1,
                        handle: s?.handle || "",
                        type: "primary",
                        onFollow: () => s && u(s),
                        onUnfollow: () => s && S(s)
                      }
                    )
                  ] })
                ]
              },
              s?.id || `loading-${g}`
            ))
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e.jsx(C, {})
  ] });
}, J = ({
  isLoading: l,
  activities: o,
  user: c,
  fetchNextPage: d,
  hasNextPage: x,
  isFetchingNextPage: i
}) => {
  const m = y(), r = p(null), n = p(null), a = p(null);
  _(() => (r.current && r.current.disconnect(), r.current = new IntersectionObserver((t) => {
    t[0].isIntersecting && x && !i && d();
  }), n.current && r.current.observe(n.current), a.current && r.current.observe(a.current), () => {
    r.current && r.current.disconnect();
  }), [x, i, d]);
  const h = Math.max(0, Math.floor(o.length * 0.75) - 1);
  return /* @__PURE__ */ e.jsx(U, { children: /* @__PURE__ */ e.jsx("div", { className: "flex w-full flex-col", children: /* @__PURE__ */ e.jsx("div", { className: "w-full", children: o.length > 0 ? /* @__PURE__ */ e.jsx("div", { className: "my-4", children: /* @__PURE__ */ e.jsx("div", { className: "mx-auto flex items-start gap-11", children: /* @__PURE__ */ e.jsx("div", { className: "flex w-full min-w-0 flex-col items-center", children: /* @__PURE__ */ e.jsxs("div", { className: "flex w-full max-w-[620px] min-w-0 flex-col items-start", children: [
    /* @__PURE__ */ e.jsx(v, { user: c }),
    /* @__PURE__ */ e.jsxs("ul", { className: "mx-auto flex w-full flex-col px-4 max-lg:px-0", "data-testid": "feed-list", children: [
      o.map((t, u) => /* @__PURE__ */ e.jsxs(
        "li",
        {
          "data-testid": "feed-item",
          "data-test-view-article": !0,
          children: [
            /* @__PURE__ */ e.jsx(
              A,
              {
                actor: t.actor,
                allowDelete: t.object.authored,
                commentCount: t.object.replyCount ?? 0,
                isLoading: l,
                isPending: $(t.id),
                layout: "feed",
                likeCount: t.object.likeCount ?? 0,
                object: t.object,
                repostCount: t.object.repostCount ?? 0,
                type: t.type,
                onClick: () => {
                  m(`/notes/${encodeURIComponent(t.id)}`);
                }
              }
            ),
            u < o.length - 1 && /* @__PURE__ */ e.jsx(C, {}),
            u === 3 && /* @__PURE__ */ e.jsx(G, {}),
            u === h && /* @__PURE__ */ e.jsx("div", { ref: n, className: "h-1" })
          ]
        },
        `${t.id}-${t.type}-${u}`
      )),
      i && /* @__PURE__ */ e.jsx("li", { className: "flex flex-col items-center justify-center gap-4 text-center", children: /* @__PURE__ */ e.jsx(E, { size: "md" }) })
    ] }),
    /* @__PURE__ */ e.jsx("div", { ref: a, className: "h-1" })
  ] }) }) }) }) : /* @__PURE__ */ e.jsx("div", { className: "flex w-full flex-col items-center gap-10", children: /* @__PURE__ */ e.jsxs("div", { className: "mt-4 flex w-full max-w-[620px] flex-col items-center", children: [
    /* @__PURE__ */ e.jsx(v, { user: c }),
    /* @__PURE__ */ e.jsx("div", { className: "mt-[-128px]", children: /* @__PURE__ */ e.jsxs(D, { children: [
      /* @__PURE__ */ e.jsx(H, { children: /* @__PURE__ */ e.jsx(q, {}) }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        "The Feed is the stream of thoughts and ",
        /* @__PURE__ */ e.jsx("span", { className: "text-black dark:text-white", children: "bite-sized updates" }),
        " from people you follow in the Social Web. It's looking a little empty right now but once the people you follow start posting, their updates will show up here."
      ] }),
      /* @__PURE__ */ e.jsx(N, { children: /* @__PURE__ */ e.jsxs(f, { className: "text-white dark:text-black", children: [
        /* @__PURE__ */ e.jsx(O, {}),
        "Write your first note"
      ] }) })
    ] }) })
  ] }) }) }) }) });
}, ee = () => {
  const { feedQuery: l } = V({ enabled: !0 }), { data: o, error: c, fetchNextPage: d, hasNextPage: x, isFetchingNextPage: i, isLoading: m } = l, r = o?.pages.flatMap((a) => a.posts) ?? Array.from({ length: 5 }, (a, h) => ({ id: `placeholder-${h}`, object: {} })), { data: n } = Q("index");
  return c && X(c) ? /* @__PURE__ */ e.jsx(T, { errorCode: c.code, statusCode: c.statusCode }) : /* @__PURE__ */ e.jsx(
    J,
    {
      activities: r,
      fetchNextPage: d,
      hasNextPage: x,
      isFetchingNextPage: i,
      isLoading: m,
      user: n
    }
  );
};
export {
  ee as default
};
//# sourceMappingURL=feed-DUrI7SPC.js.map
