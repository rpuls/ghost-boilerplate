import { j as u, u as b, a as L, b as x, R as i, O } from "./index-BWRct4la.mjs";
import { M as C } from "./main-layout-CvVxJRIb.mjs";
import { P as k } from "./post-share-modal-DfVCjWzg.mjs";
import { u as T } from "./posts-B9yHB9r9.mjs";
import { u as I } from "./post-analytics-context-CJibQt1w.mjs";
const U = ({ children: n }) => /* @__PURE__ */ u.jsx(C, { children: /* @__PURE__ */ u.jsx("div", { className: "grid w-full grow", children: /* @__PURE__ */ u.jsx("div", { className: "flex h-full flex-col px-8", children: n }) }) }), $ = () => {
  var y;
  const [n, r] = b(!1), [p, h] = b(null), [l, f] = b(null), { site: a } = I(), { data: g } = T({
    searchParams: p ? {
      filter: `id:${p.id}`,
      include: "authors,newsletter,email"
    } : {},
    enabled: !!p
  }), { data: c } = T({
    searchParams: {
      filter: "status:[published,sent]",
      limit: "1",
      fields: "id"
    },
    enabled: !!p
  }), s = (y = g == null ? void 0 : g.posts) == null ? void 0 : y[0], D = (t) => `${t.toLocaleString()} subscriber${t !== 1 ? "s" : ""}`, M = (t) => new Date(t).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1
  }), j = (t) => (t == null ? void 0 : t.map((o) => o.name).join(", ")) || "", E = (t, o) => t.length <= o ? t : t.substring(0, o).trim() + "…", _ = L(() => {
    if (!s)
      return null;
    const t = !!l, o = () => {
      var P, w, S;
      const e = [];
      if (s.email_only ? e.push("Your email was sent to") : (P = s.email) != null && P.email_count ? e.push("Your post was published on your site and sent to") : e.push("Your post was published on your site"), (w = s.email) != null && w.email_count) {
        const d = D(s.email.email_count);
        e.push(" "), e.push(i.createElement("strong", { key: "subscriber-count" }, d)), (S = s.newsletter) != null && S.name && (e.push(" of "), e.push(i.createElement("strong", { key: "newsletter-name" }, s.newsletter.name))), e.push(",");
      }
      if (s.published_at) {
        const d = new Date(s.published_at);
        d.toDateString() === (/* @__PURE__ */ new Date()).toDateString() ? (e.push(" "), e.push(i.createElement("strong", { key: "today" }, "today"))) : (e.push(" on "), e.push(i.createElement("strong", { key: "date" }, d.toLocaleDateString("en-US", { month: "long", day: "numeric" })))), e.push(" at "), e.push(i.createElement("strong", { key: "time" }, M(s.published_at)));
      }
      return e.push("."), i.createElement("span", {}, ...e);
    }, m = () => {
      r(!1), h(null), f(null);
    };
    return {
      open: n,
      onOpenChange: (e) => {
        e || m();
      },
      emailOnly: s.email_only,
      postURL: s.url || "",
      primaryTitle: "Boom! It's out there.",
      secondaryTitle: t && l ? `That's ${l.toLocaleString()} post${l !== 1 ? "s" : ""} published.` : "Spread the word!",
      description: o(),
      featureImageURL: s.feature_image || "",
      postTitle: s.title || "",
      postExcerpt: E(s.excerpt || "", 100),
      faviconURL: (a == null ? void 0 : a.icon) || "",
      siteTitle: (a == null ? void 0 : a.title) || "",
      author: j(s.authors),
      onClose: m
    };
  }, [s, n, l, a == null ? void 0 : a.title]);
  return x(() => {
    const t = () => {
      try {
        const m = localStorage.getItem("ghost-last-published-post");
        if (m) {
          const e = JSON.parse(m);
          h(e), r(!0), localStorage.removeItem("ghost-last-published-post");
        }
      } catch {
      }
    };
    t();
    const o = setTimeout(t, 100);
    return () => clearTimeout(o);
  }, []), x(() => {
    var t, o;
    (o = (t = c == null ? void 0 : c.meta) == null ? void 0 : t.pagination) != null && o.total && f(c.meta.pagination.total);
  }, [c]), {
    isModalOpen: n,
    post: s,
    postCount: l,
    showPostCount: !!l,
    closeModal: () => {
      r(!1), h(null), f(null);
    },
    modalProps: _
  };
}, G = () => {
  const { isModalOpen: n, modalProps: r } = $();
  return /* @__PURE__ */ u.jsxs(U, { children: [
    /* @__PURE__ */ u.jsx(O, {}),
    n && r && /* @__PURE__ */ u.jsx(k, { ...r })
  ] });
};
export {
  G as default
};
//# sourceMappingURL=post-analytics-DBqgvhG5.mjs.map
