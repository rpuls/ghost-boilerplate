import { a as p, b as r, c as i, d as u } from "./hooks-BXuxe98u.mjs";
const o = "PostsResponseType", g = p({
  dataType: o,
  path: "/posts/"
}), d = u({
  dataType: o,
  path: "/posts/",
  defaultNextPageParams: (t, e) => {
    var s;
    if ((s = t.meta) != null && s.pagination.next)
      return {
        ...e,
        page: t.meta.pagination.next.toString()
      };
  },
  returnData: (t) => {
    const { pages: e } = t, s = e.flatMap((n) => n.posts), a = e[e.length - 1].meta;
    return {
      posts: s,
      meta: a,
      isEnd: a ? a.pagination.pages === a.pagination.page : !0
    };
  }
}), m = i({
  dataType: o,
  path: (t) => `/posts/${t}/`
}), h = r({
  method: "DELETE",
  path: (t) => `/posts/${t}/`
});
export {
  h as a,
  d as b,
  m as g,
  g as u
};
//# sourceMappingURL=posts-B9yHB9r9.mjs.map
