import { j as e, aq as k, A as N, c as f, d as y, b as v, ar as P, e as _, H as R, B as g, as as z, C as I, a9 as M, S as b, P as B, aa as W, L as U, F as A, i as E, k as $, E as H, f as D, at as O, au as Q, av as V, aw as q, ax as T } from "./index-BpBf-VFB.mjs";
import { S as C } from "./separator-DdzsodEc.mjs";
import { H as X } from "./hash-CX11JFJW.mjs";
const p = ({ user: n }) => /* @__PURE__ */ e.jsx(k, { children: /* @__PURE__ */ e.jsxs("div", { className: "relative my-5 w-full hover:cursor-pointer", children: [
  /* @__PURE__ */ e.jsx("div", { className: "pointer-events-none absolute top-4 left-4", children: /* @__PURE__ */ e.jsx(N, { author: n }) }),
  /* @__PURE__ */ e.jsx("div", { "aria-label": "New post", className: "text inset-0 flex h-[72px] w-full items-center justify-start rounded-lg bg-white pl-[68px] text-left text-[1.5rem] font-normal tracking-normal text-gray-500 shadow-[0_5px_24px_0px_rgba(0,0,0,0.02),0px_2px_5px_0px_rgba(0,0,0,0.07),0px_0px_1px_0px_rgba(0,0,0,0.25)] transition-all hover:bg-white hover:shadow-[0_5px_24px_0px_rgba(0,0,0,0.05),0px_14px_12px_-9px_rgba(0,0,0,0.07),0px_0px_1px_0px_rgba(0,0,0,0.25)] dark:border dark:border-gray-925 dark:bg-black dark:shadow-none dark:hover:border-gray-800 dark:hover:bg-black dark:hover:shadow-none", children: "What's new?" })
] }) }), G = () => {
  const n = f(null), l = y(), [c, i] = v(!1), [x, d] = v(!0), { suggestedProfilesQuery: m, updateSuggestedProfile: r } = P("index", 10), { data: o = [], isLoading: a } = m, h = () => {
    const s = n.current;
    if (!s)
      return;
    const j = s.scrollLeft > 0, w = s.scrollLeft < s.scrollWidth - s.clientWidth;
    i(j), d(w);
  };
  if (_(() => {
    h();
  }, [o]), !a && (!o || o.length < 4))
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
  }, F = () => {
    const s = n.current;
    s && s.scrollBy({ left: -176 * 2, behavior: "smooth" });
  }, L = () => {
    const s = n.current;
    if (!s)
      return;
    s.scrollBy({ left: 176 * 2, behavior: "smooth" });
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs("div", { className: "pt-4 pb-7", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "mb-3 flex items-center justify-between", children: [
        /* @__PURE__ */ e.jsx(R, { className: "text-lg font-semibold text-black dark:text-white", children: "More people to follow" }),
        /* @__PURE__ */ e.jsx(g, { className: "px-0 font-medium text-gray-700 hover:text-black dark:text-gray-600 dark:hover:text-white", variant: "link", onClick: () => l("/explore"), children: "Find more →" })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        c && /* @__PURE__ */ e.jsx(
          g,
          {
            className: "absolute top-1/2 -left-10 z-10 size-10 -translate-y-1/2 text-gray-700 hover:bg-transparent max-lg:hidden dark:text-gray-600 dark:hover:text-white",
            variant: "ghost",
            onClick: F,
            children: /* @__PURE__ */ e.jsx(z, { className: "size-6!" })
          }
        ),
        x && /* @__PURE__ */ e.jsx(
          g,
          {
            className: "absolute top-1/2 -right-10 z-10 size-10 -translate-y-1/2 text-gray-700 hover:bg-transparent max-lg:hidden dark:text-gray-600 dark:hover:text-white",
            variant: "ghost",
            onClick: L,
            children: /* @__PURE__ */ e.jsx(I, { className: "size-6!" })
          }
        ),
        /* @__PURE__ */ e.jsx(
          "div",
          {
            ref: n,
            className: "flex snap-x snap-mandatory gap-4 overflow-x-auto",
            style: {
              scrollbarWidth: "none",
              msOverflowStyle: "none"
            },
            onScroll: h,
            children: (a ? Array(10).fill(null) : o || []).map((s, j) => /* @__PURE__ */ e.jsxs(
              "div",
              {
                className: "relative w-40 shrink-0 snap-start rounded-lg bg-gray-75 p-4 dark:bg-gray-925/30",
                onClick: !a && s ? () => l(`/profile/${s.handle}`) : void 0,
                children: [
                  /* @__PURE__ */ e.jsx(
                    g,
                    {
                      className: "absolute top-1 right-2 hidden p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300",
                      variant: "link",
                      onClick: (w) => {
                        w.stopPropagation(), t((s == null ? void 0 : s.id) || "");
                      },
                      children: /* @__PURE__ */ e.jsx(M, { className: "size-4" })
                    }
                  ),
                  /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col items-center text-center", children: [
                    /* @__PURE__ */ e.jsx("div", { className: "mb-3", children: a ? /* @__PURE__ */ e.jsx(b, { className: "size-16 rounded-full" }) : /* @__PURE__ */ e.jsx(B, { actor: s, align: "center", children: /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(
                      N,
                      {
                        author: {
                          icon: { url: (s == null ? void 0 : s.avatarUrl) || "" },
                          name: (s == null ? void 0 : s.name) || "",
                          handle: (s == null ? void 0 : s.handle) || ""
                        },
                        size: "md"
                      }
                    ) }) }) }),
                    /* @__PURE__ */ e.jsx("span", { className: "mb-6 w-full truncate font-semibold text-black dark:text-white", children: a ? /* @__PURE__ */ e.jsx(b, { className: "h-5 w-32" }) : (s == null ? void 0 : s.name) || "" }),
                    a ? /* @__PURE__ */ e.jsx(b, { className: "h-8 w-16" }) : /* @__PURE__ */ e.jsx(
                      W,
                      {
                        following: (s == null ? void 0 : s.followedByMe) || !1,
                        handle: (s == null ? void 0 : s.handle) || "",
                        type: "primary",
                        onFollow: () => s && u(s),
                        onUnfollow: () => s && S(s)
                      }
                    )
                  ] })
                ]
              },
              (s == null ? void 0 : s.id) || `loading-${j}`
            ))
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e.jsx(C, {})
  ] });
}, J = ({
  isLoading: n,
  activities: l,
  user: c,
  fetchNextPage: i,
  hasNextPage: x,
  isFetchingNextPage: d
}) => {
  const m = y(), r = f(null), o = f(null), a = f(null);
  _(() => (r.current && r.current.disconnect(), r.current = new IntersectionObserver((t) => {
    t[0].isIntersecting && x && !d && i();
  }), o.current && r.current.observe(o.current), a.current && r.current.observe(a.current), () => {
    r.current && r.current.disconnect();
  }), [x, d, i]);
  const h = Math.max(0, Math.floor(l.length * 0.75) - 1);
  return /* @__PURE__ */ e.jsx(U, { children: /* @__PURE__ */ e.jsx("div", { className: "flex w-full flex-col", children: /* @__PURE__ */ e.jsx("div", { className: "w-full", children: l.length > 0 ? /* @__PURE__ */ e.jsx("div", { className: "my-4", children: /* @__PURE__ */ e.jsx("div", { className: "mx-auto flex items-start gap-11", children: /* @__PURE__ */ e.jsx("div", { className: "flex w-full min-w-0 flex-col items-center", children: /* @__PURE__ */ e.jsxs("div", { className: "flex w-full max-w-[620px] min-w-0 flex-col items-start", children: [
    /* @__PURE__ */ e.jsx(p, { user: c }),
    /* @__PURE__ */ e.jsxs("ul", { className: "mx-auto flex w-full flex-col px-4 max-lg:px-0", "data-testid": "feed-list", children: [
      l.map((t, u) => /* @__PURE__ */ e.jsxs(
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
                isLoading: n,
                isPending: E(t.id),
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
            u < l.length - 1 && /* @__PURE__ */ e.jsx(C, {}),
            u === 3 && /* @__PURE__ */ e.jsx(G, {}),
            u === h && /* @__PURE__ */ e.jsx("div", { ref: o, className: "h-1" })
          ]
        },
        `${t.id}-${t.type}-${u}`
      )),
      d && /* @__PURE__ */ e.jsx("li", { className: "flex flex-col items-center justify-center gap-4 text-center", children: /* @__PURE__ */ e.jsx($, { size: "md" }) })
    ] }),
    /* @__PURE__ */ e.jsx("div", { ref: a, className: "h-1" })
  ] }) }) }) }) : /* @__PURE__ */ e.jsx("div", { className: "flex w-full flex-col items-center gap-10", children: /* @__PURE__ */ e.jsxs("div", { className: "mt-4 flex w-full max-w-[620px] flex-col items-center", children: [
    /* @__PURE__ */ e.jsx(p, { user: c }),
    /* @__PURE__ */ e.jsx("div", { className: "mt-[-128px]", children: /* @__PURE__ */ e.jsxs(H, { children: [
      /* @__PURE__ */ e.jsx(D, { children: /* @__PURE__ */ e.jsx(X, {}) }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        "The Feed is the stream of thoughts and ",
        /* @__PURE__ */ e.jsx("span", { className: "text-black dark:text-white", children: "bite-sized updates" }),
        " from people you follow in the Social Web. It's looking a little empty right now but once the people you follow start posting, their updates will show up here."
      ] }),
      /* @__PURE__ */ e.jsx(k, { children: /* @__PURE__ */ e.jsxs(g, { className: "text-white dark:text-black", children: [
        /* @__PURE__ */ e.jsx(O, {}),
        "Write your first note"
      ] }) })
    ] }) })
  ] }) }) }) }) });
}, ee = () => {
  const { feedQuery: n } = Q({ enabled: !0 }), { data: l, error: c, fetchNextPage: i, hasNextPage: x, isFetchingNextPage: d, isLoading: m } = n, r = (l == null ? void 0 : l.pages.flatMap((a) => a.posts)) ?? Array.from({ length: 5 }, (a, h) => ({ id: `placeholder-${h}`, object: {} })), { data: o } = V("index");
  return c && q(c) ? /* @__PURE__ */ e.jsx(T, { errorCode: c.code, statusCode: c.statusCode }) : /* @__PURE__ */ e.jsx(
    J,
    {
      activities: r,
      fetchNextPage: i,
      hasNextPage: x,
      isFetchingNextPage: d,
      isLoading: m,
      user: o
    }
  );
};
export {
  ee as default
};
//# sourceMappingURL=feed-DKWP6Olo.mjs.map
