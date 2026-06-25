import { o as H, am as f, a9 as x, x as c, R as o, ak as M, a0 as F, i as m } from "./index-Dqn5WIFh.js";
import { b as A, g as T, u as P, q as p } from "./check-fsC5BvGC.js";
import { g as z, b as $ } from "./app-utils-DQ2hixop.js";
import { U as q } from "./get-site-timezone-83C41MGz.js";
var g = !1;
function U() {
  const [e, a] = f(g);
  return x(() => {
    g || (g = !0, a(!0));
  }, []), e;
}
var L = H[" useSyncExternalStore ".trim().toString()];
function V() {
  return () => {
  };
}
function W() {
  return L(
    V,
    () => !0,
    () => !1
  );
}
var B = typeof L == "function" ? W : U, y = "Avatar", [G] = T(y), [K, S] = G(y), b = c(
  (e, a) => {
    const { __scopeAvatar: r, ...s } = e, [n, t] = f("idle");
    return /* @__PURE__ */ o.jsx(
      K,
      {
        scope: r,
        imageLoadingStatus: n,
        onImageLoadingStatusChange: t,
        children: /* @__PURE__ */ o.jsx(A.span, { ...s, ref: a })
      }
    );
  }
);
b.displayName = y;
var I = "AvatarImage", N = c(
  (e, a) => {
    const { __scopeAvatar: r, src: s, onLoadingStatusChange: n = () => {
    }, ...t } = e, l = S(I, r), i = D(s, t), d = P((u) => {
      n(u), l.onImageLoadingStatusChange(u);
    });
    return p(() => {
      i !== "idle" && d(i);
    }, [i, d]), i === "loaded" ? /* @__PURE__ */ o.jsx(A.img, { ...t, ref: a, src: s }) : null;
  }
);
N.displayName = I;
var j = "AvatarFallback", w = c(
  (e, a) => {
    const { __scopeAvatar: r, delayMs: s, ...n } = e, t = S(j, r), [l, i] = f(s === void 0);
    return x(() => {
      if (s !== void 0) {
        const d = window.setTimeout(() => i(!0), s);
        return () => window.clearTimeout(d);
      }
    }, [s]), l && t.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ o.jsx(A.span, { ...n, ref: a }) : null;
  }
);
w.displayName = j;
function h(e, a) {
  return e ? a ? (e.src !== a && (e.src = a), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
}
function D(e, { referrerPolicy: a, crossOrigin: r }) {
  const s = B(), n = M(null), t = s ? (n.current || (n.current = new window.Image()), n.current) : null, [l, i] = f(
    () => h(t, e)
  );
  return p(() => {
    i(h(t, e));
  }, [t, e]), p(() => {
    const d = (k) => () => {
      i(k);
    };
    if (!t) return;
    const u = d("loaded"), v = d("error");
    return t.addEventListener("load", u), t.addEventListener("error", v), a && (t.referrerPolicy = a), typeof r == "string" && (t.crossOrigin = r), () => {
      t.removeEventListener("load", u), t.removeEventListener("error", v);
    };
  }, [t, r, a]), l;
}
var E = b, C = N, _ = w;
const J = c(({ className: e, ...a }, r) => /* @__PURE__ */ o.jsx(
  C,
  {
    ref: r,
    className: m("aspect-square h-full w-full", e),
    ...a
  }
));
J.displayName = C.displayName;
const R = c(({ className: e, ...a }, r) => /* @__PURE__ */ o.jsx(
  _,
  {
    ref: r,
    className: m(
      "flex h-full w-full items-center justify-center rounded-full bg-muted [&_svg]:size-4",
      e
    ),
    ...a
  }
));
R.displayName = _.displayName;
function Q({ src: e }) {
  const [a, r] = f(!1);
  return x(() => {
    r(!1);
  }, [e]), /* @__PURE__ */ o.jsx(
    "img",
    {
      alt: "",
      className: m(
        "absolute inset-0 h-full w-full object-cover",
        !a && "invisible"
      ),
      src: e,
      onLoad: (s) => {
        const { naturalWidth: n, naturalHeight: t } = s.currentTarget;
        n > 1 && t > 1 && r(!0);
      }
    }
  );
}
const X = c(({ className: e, children: a, src: r, name: s, email: n, ...t }, l) => {
  const i = { name: s || void 0, email: n || void 0 }, d = !!(s || n), u = d ? z(i) : null, v = d ? F($(i), "75", "55") : void 0;
  return /* @__PURE__ */ o.jsx(
    E,
    {
      ref: l,
      className: m(
        "relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full",
        e
      ),
      ...t,
      children: a ?? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsx(
          R,
          {
            className: m(
              "text-xs text-muted-foreground md:text-sm [&_svg]:size-3 md:[&_svg]:size-4",
              d && "font-semibold text-white"
            ),
            style: d ? { backgroundColor: v } : void 0,
            children: u ?? /* @__PURE__ */ o.jsx(q, {})
          }
        ),
        r && /* @__PURE__ */ o.jsx(Q, { src: r })
      ] })
    }
  );
});
X.displayName = E.displayName;
export {
  X as A,
  R as a
};
//# sourceMappingURL=avatar-BejAO6Rj.js.map
