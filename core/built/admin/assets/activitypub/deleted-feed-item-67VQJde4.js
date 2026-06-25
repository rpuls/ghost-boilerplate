import { aF as y, bL as g, a_ as e, t as b, a6 as j, bN as v, b0 as p, bV as w, bO as R, aQ as N, A as T, a8 as C } from "./index-sudOvKcY.js";
const M = [
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], S = y("trash", M), A = ({ count: t, onClick: l, variant: d = "default", preserveScroll: a = !0, loading: c = !1 }) => {
  const n = g(null), i = () => {
    if (t && t > 0)
      return `Show ${t} more ${t === 1 ? "reply" : "replies"}`;
    switch (d) {
      case "expand":
        return "Show replies";
      case "loadMore":
        return "Show more replies";
      default:
        return "Show replies";
    }
  }, r = () => {
    if (a) {
      const s = document.querySelector("[data-scrollable-container]"), o = s ? s.scrollTop : window.scrollY;
      l(), setTimeout(() => {
        s ? s.scrollTop = o : window.scrollTo(0, o);
      }, 0);
    } else
      l();
  };
  return /* @__PURE__ */ e.jsxs("div", { ref: n, className: "mt-[-7px] flex items-center pb-3", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex w-10 flex-col items-center justify-center gap-1", children: [
      /* @__PURE__ */ e.jsx("div", { className: "size-0.5 rounded-sm bg-gray-300" }),
      /* @__PURE__ */ e.jsx("div", { className: "size-0.5 rounded-sm bg-gray-300" }),
      /* @__PURE__ */ e.jsx("div", { className: "size-0.5 rounded-sm bg-gray-300" })
    ] }),
    /* @__PURE__ */ e.jsx(
      b,
      {
        className: "text-sm font-medium text-blue-600 hover:text-blue-800",
        variant: "ghost",
        onClick: (s) => {
          s.preventDefault(), s.stopPropagation(), s.target.blur(), r();
        },
        children: c ? /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e.jsx(j, { size: "sm" }),
          /* @__PURE__ */ e.jsx("span", { children: "Loading..." })
        ] }) : i()
      }
    )
  ] });
};
function L(t, l = {}) {
  const { includeAncestors: d = !1 } = l, { data: a, isLoading: c, loadMoreChildren: n, loadMoreChildReplies: i, hasMoreChildren: r, hasMoreChildReplies: s } = v("index", t), o = d ? a?.ancestors?.chain?.map(p) || [] : [], h = a?.post ? p(a.post) : void 0, x = (a?.children ?? []).map((u) => {
    const m = p(u.post), f = u.chain ? u.chain.map(p) : [];
    return {
      mainReply: m,
      chain: f
    };
  });
  return {
    threadParents: o,
    post: h,
    processedReplies: x,
    isLoading: c,
    loadMoreChildren: n,
    loadMoreChildReplies: i,
    hasMoreChildren: r,
    hasMoreChildReplies: s
  };
}
const z = ({
  object: t,
  onReply: l,
  onReplyError: d,
  className: a,
  ...c
}) => {
  const { data: n } = w("index"), [i, r] = R(!1);
  if (!n)
    return null;
  const s = t.attributedTo;
  let o = "Reply...";
  return s?.preferredUsername && s?.id && (o = `Reply to ${N(s)}...`), /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: `flex w-full cursor-pointer gap-x-3 py-6 ${a || ""}`,
        onClick: () => r(!0),
        ...c,
        children: [
          /* @__PURE__ */ e.jsx(T, { author: n }),
          /* @__PURE__ */ e.jsx("div", { className: "flex w-full items-center", children: /* @__PURE__ */ e.jsx("div", { className: "w-full text-[1.5rem] text-gray-500 transition-colors dark:text-gray-400", children: o }) })
        ]
      }
    ),
    i && /* @__PURE__ */ e.jsx(
      C,
      {
        open: i,
        replyTo: {
          object: t,
          actor: t.attributedTo
        },
        onOpenChange: (h) => {
          r(h);
        },
        onReply: () => {
          l?.(), r(!1);
        },
        onReplyError: () => {
          d?.();
        }
      }
    )
  ] });
}, P = ({ last: t }) => /* @__PURE__ */ e.jsxs("div", { className: "relative mt-[-5px] py-5", children: [
  /* @__PURE__ */ e.jsxs("div", { className: "flex h-12 grow items-center gap-2 rounded-lg border border-gray-200 p-2 px-[10px] text-gray-600", children: [
    /* @__PURE__ */ e.jsx(S, { size: 18, strokeWidth: 1.25 }),
    "This post has been deleted"
  ] }),
  !t && /* @__PURE__ */ e.jsx("div", { className: "absolute top-[70px] bottom-0 left-[18px] z-0 mb-[-13px] w-[2px] rounded-sm bg-gray-200" })
] });
export {
  z as A,
  P as D,
  A as S,
  L as u
};
//# sourceMappingURL=deleted-feed-item-67VQJde4.js.map
