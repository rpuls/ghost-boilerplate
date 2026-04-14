import { a6 as v, a7 as y, u as b, d as j, a8 as k, e as F, j as e, L as P, H as B, B as E, a9 as M, R as T, k as H, Q as L, P as A, A as C, S as u, aa as I, ab as S, ac as z, ad as U } from "./index-BpBf-VFB.mjs";
import { T as _ } from "./topic-filter-BxTh4L4G.mjs";
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Q = [
  [
    "path",
    {
      d: "M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3",
      key: "139s4v"
    }
  ],
  ["path", { d: "M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4", key: "1dlkgp" }],
  ["path", { d: "M5 21h14", key: "11awu3" }]
], R = v("sprout", Q), f = ({ profile: a, update: n, isLoading: t, onOpenChange: l }) => {
  const c = L("index", "me"), { data: r } = c, i = a.handle === (r == null ? void 0 : r.handle), o = () => {
    n(a.id, {
      followedByMe: !0
    });
  }, d = () => {
    n(a.id, {
      followedByMe: !1
    });
  }, x = j();
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: "flex w-full cursor-pointer items-start gap-3 pt-4 [&:last-of-type>:nth-child(2)]:border-none",
      onClick: () => {
        x(`/profile/${a.handle}`);
      },
      children: /* @__PURE__ */ e.jsxs("div", { className: "flex w-full flex-col gap-1 border-b border-gray-200 pb-4 dark:border-gray-950", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ e.jsx(A, { actor: a, isCurrentUser: i, children: /* @__PURE__ */ e.jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ e.jsx(C, { author: {
              icon: {
                url: a.avatarUrl
              },
              name: a.name,
              handle: a.handle
            }, onClick: () => l == null ? void 0 : l(!1) }),
            /* @__PURE__ */ e.jsxs("div", { className: "break-anywhere -mt-0.5 flex grow flex-col", children: [
              /* @__PURE__ */ e.jsx("span", { className: "line-clamp-1 font-semibold text-black dark:text-white", children: t ? /* @__PURE__ */ e.jsx(u, { className: "w-full max-w-48" }) : a.name }),
              /* @__PURE__ */ e.jsx("span", { className: "line-clamp-1 text-md text-gray-700 dark:text-gray-600", children: t ? /* @__PURE__ */ e.jsx(u, { className: "w-32" }) : a.handle })
            ] })
          ] }) }),
          t ? /* @__PURE__ */ e.jsx("div", { className: "inline-flex items-center", children: /* @__PURE__ */ e.jsx(u, { className: "w-24" }) }) : i ? null : /* @__PURE__ */ e.jsx(
            I,
            {
              className: "ml-auto",
              following: a.followedByMe,
              handle: a.handle,
              type: "primary",
              onFollow: o,
              onUnfollow: d
            }
          )
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "pl-[52px]", children: t ? /* @__PURE__ */ e.jsx(u, { className: "w-full max-w-96" }) : a.bio && /* @__PURE__ */ e.jsx(
          "div",
          {
            dangerouslySetInnerHTML: { __html: S(z(U(a.bio, ["a", "br"]))) },
            className: "ap-profile-content break-anywhere pointer-events-none mt-0 line-clamp-2 max-w-[460px]"
          }
        ) })
      ] })
    }
  );
}, W = () => {
  const { isExplainerClosed: a, setExplainerClosed: n } = y(), t = b(), l = j(), c = t.topic || "top", { exploreProfilesQuery: r, updateExploreProfile: i } = k("index", c), { data: o, isLoading: d, fetchNextPage: x, hasNextPage: h, isFetchingNextPage: p } = r, w = Array(10).fill(null).map((s, m) => ({
    id: `skeleton-${m}`,
    name: "",
    handle: "",
    avatarUrl: "",
    bio: "",
    url: "",
    followedByMe: !1
  })), g = (o == null ? void 0 : o.pages.flatMap((s) => s.accounts)) || [];
  return F(() => {
    const s = document.querySelector(".load-more-trigger");
    if (!s)
      return;
    const m = new IntersectionObserver(
      (N) => {
        N[0].isIntersecting && h && !p && x();
      },
      { threshold: 0.1 }
    );
    return m.observe(s), () => m.disconnect();
  }, [h, p, x]), /* @__PURE__ */ e.jsxs(P, { children: [
    !a && /* @__PURE__ */ e.jsxs("div", { className: "relative mb-6 flex items-start gap-1 rounded-md bg-gradient-to-r from-[#CFB0FF66] to-[#B6E8FF66] p-4 pr-10 dark:from-[#CFB0FF20] dark:to-[#B6E8FF20]", children: [
      /* @__PURE__ */ e.jsx("div", { className: "min-w-[46px]", children: /* @__PURE__ */ e.jsx(R, { className: "text-purple", size: 46, strokeWidth: 0.75 }) }),
      /* @__PURE__ */ e.jsxs("div", { className: "mt-1 flex flex-col gap-[2px]", children: [
        /* @__PURE__ */ e.jsx(B, { className: "text-pretty", children: "The fastest way to grow your followers, is to follow others!" }),
        /* @__PURE__ */ e.jsx("p", { className: "text-sm text-balance text-black/60 2xl:text-pretty dark:text-white/60", children: "Here are some recommendations to get you started, from Ghost publishers and other great accounts from around the social web." })
      ] }),
      /* @__PURE__ */ e.jsx(E, { className: "absolute top-[17px] right-4 size-6 opacity-40", variant: "link", onClick: () => n(!0), children: /* @__PURE__ */ e.jsx(M, { size: 20 }) })
    ] }),
    /* @__PURE__ */ e.jsx(
      _,
      {
        currentTopic: c,
        excludeTopics: ["following"],
        onTopicChange: (s) => {
          s === "top" ? l("/explore", { replace: !0 }) : l(`/explore/${s}`, { replace: !0 });
        }
      }
    ),
    /* @__PURE__ */ e.jsx("div", { className: "mt-12 flex flex-col gap-12 pb-20 max-md:mt-5", children: d ? /* @__PURE__ */ e.jsx("div", { children: w.map((s) => /* @__PURE__ */ e.jsx("div", { className: "mx-auto w-full max-w-[640px]", children: /* @__PURE__ */ e.jsx(
      f,
      {
        isLoading: d,
        profile: s,
        update: () => {
        }
      }
    ) }, s.id)) }) : /* @__PURE__ */ e.jsxs("div", { className: "mx-auto flex w-full max-w-[640px] flex-col items-center", children: [
      /* @__PURE__ */ e.jsx("div", { className: "w-full", children: g.map((s) => /* @__PURE__ */ e.jsx(T.Fragment, { children: /* @__PURE__ */ e.jsx(
        f,
        {
          isLoading: !1,
          profile: s,
          update: i
        }
      ) }, s.id)) }),
      /* @__PURE__ */ e.jsx("div", { className: "load-more-trigger h-4 w-full" }),
      p && /* @__PURE__ */ e.jsx("div", { className: "mt-2 flex w-full justify-center", children: /* @__PURE__ */ e.jsx(H, { size: "sm" }) })
    ] }) })
  ] });
};
export {
  W as default
};
//# sourceMappingURL=index-BZCjnV_u.mjs.map
