import { a6 as v, c as w, j as e, B as y, k as N, aK as b, aL as p, av as M, b as R, g as S, A as T, aq as k } from "./index-BpBf-VFB.mjs";
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A = [
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], L = v("trash", A), P = ({ count: t, onClick: r, variant: o = "default", preserveScroll: a = !0, loading: d = !1 }) => {
  const i = w(null), c = () => {
    if (t && t > 0)
      return `Show ${t} more ${t === 1 ? "reply" : "replies"}`;
    switch (o) {
      case "expand":
        return "Show replies";
      case "loadMore":
        return "Show more replies";
      default:
        return "Show replies";
    }
  }, l = () => {
    if (a) {
      const s = document.querySelector("[data-scrollable-container]"), n = s ? s.scrollTop : window.scrollY;
      r(), setTimeout(() => {
        s ? s.scrollTop = n : window.scrollTo(0, n);
      }, 0);
    } else
      r();
  };
  return /* @__PURE__ */ e.jsxs("div", { ref: i, className: "mt-[-7px] flex items-center pb-3", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex w-10 flex-col items-center justify-center gap-1", children: [
      /* @__PURE__ */ e.jsx("div", { className: "size-0.5 rounded-sm bg-gray-300" }),
      /* @__PURE__ */ e.jsx("div", { className: "size-0.5 rounded-sm bg-gray-300" }),
      /* @__PURE__ */ e.jsx("div", { className: "size-0.5 rounded-sm bg-gray-300" })
    ] }),
    /* @__PURE__ */ e.jsx(
      y,
      {
        className: "text-sm font-medium text-blue-600 hover:text-blue-800",
        variant: "ghost",
        onClick: (s) => {
          s.preventDefault(), s.stopPropagation(), s.target.blur(), l();
        },
        children: d ? /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e.jsx(N, { size: "sm" }),
          /* @__PURE__ */ e.jsx("span", { children: "Loading..." })
        ] }) : c()
      }
    )
  ] });
};
function B(t, r = {}) {
  var u, h;
  const { includeAncestors: o = !1 } = r, { data: a, isLoading: d, loadMoreChildren: i, loadMoreChildReplies: c, hasMoreChildren: l, hasMoreChildReplies: s } = b("index", t), n = o ? ((h = (u = a == null ? void 0 : a.ancestors) == null ? void 0 : u.chain) == null ? void 0 : h.map(p)) || [] : [], m = a != null && a.post ? p(a.post) : void 0, f = ((a == null ? void 0 : a.children) ?? []).map((x) => {
    const g = p(x.post), j = x.chain ? x.chain.map(p) : [];
    return {
      mainReply: g,
      chain: j
    };
  });
  return {
    threadParents: n,
    post: m,
    processedReplies: f,
    isLoading: d,
    loadMoreChildren: i,
    loadMoreChildReplies: c,
    hasMoreChildren: l,
    hasMoreChildReplies: s
  };
}
const C = ({
  object: t,
  onReply: r,
  onReplyError: o,
  className: a,
  ...d
}) => {
  const { data: i } = M("index"), [c, l] = R(!1);
  if (!i)
    return null;
  const s = t.attributedTo;
  let n = "Reply...";
  return s != null && s.preferredUsername && (s != null && s.id) && (n = `Reply to ${S(s)}...`), /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: `flex w-full cursor-pointer gap-x-3 py-6 ${a || ""}`,
        onClick: () => l(!0),
        ...d,
        children: [
          /* @__PURE__ */ e.jsx(T, { author: i }),
          /* @__PURE__ */ e.jsx("div", { className: "flex w-full items-center", children: /* @__PURE__ */ e.jsx("div", { className: "w-full text-[1.5rem] text-gray-500 transition-colors dark:text-gray-400", children: n }) })
        ]
      }
    ),
    c && /* @__PURE__ */ e.jsx(
      k,
      {
        open: c,
        replyTo: {
          object: t,
          actor: t.attributedTo
        },
        onOpenChange: (m) => {
          l(m);
        },
        onReply: () => {
          r == null || r(), l(!1);
        },
        onReplyError: () => {
          o == null || o();
        }
      }
    )
  ] });
}, U = ({ last: t }) => /* @__PURE__ */ e.jsxs("div", { className: "relative mt-[-5px] py-5", children: [
  /* @__PURE__ */ e.jsxs("div", { className: "flex h-12 grow items-center gap-2 rounded-lg border border-gray-200 p-2 px-[10px] text-gray-600", children: [
    /* @__PURE__ */ e.jsx(L, { size: 18, strokeWidth: 1.25 }),
    "This post has been deleted"
  ] }),
  !t && /* @__PURE__ */ e.jsx("div", { className: "absolute top-[70px] bottom-0 left-[18px] z-0 mb-[-13px] w-[2px] rounded-sm bg-gray-200" })
] });
export {
  C as A,
  U as D,
  P as S,
  B as u
};
//# sourceMappingURL=deleted-feed-item-B68A2j3f.mjs.map
